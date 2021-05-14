import React, {KeyboardEvent, useCallback, useEffect, useState} from "react";
import style from "./Cards.module.css";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {GetSortedCardsType} from "../../api/api";
import {DoubleRange} from "../../common/DoubleRange/DoubleRange";
import {CardsStateType, getCardsTC} from "./cards-reducer";
import {Paginator} from "../Paginator/Paginator";
import {PATH} from "../../app/App";
import {CardsTable} from "./CardsTable";


export const Cards = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const authUserId = useSelector<AppRootStateType, string>(state => state.auth._id)
    const {packId} = useParams<{ packId?: any }>()    //читаем id колоды из URL
    const {minGrade, maxGrade} = useSelector<AppRootStateType, GetSortedCardsType>(state => state.cards.sortParams)
    const {
        cards,
        packUserId,
        cardsTotalCount,
        page,
        pageCount,
        error
    } = useSelector<AppRootStateType, CardsStateType>(state => state.cards)
    const dispatch = useDispatch()

    const [answer, setAnswer] = useState<string>("")
    const [question, setQuestion] = useState<string>("")

    useEffect(() => {
        if (isLoggedIn && packId) dispatch(getCardsTC(packId))   //запрашиваем карточки, если залогинен и есть packId
    }, [])

    const onGradeRangeChange = useCallback(([minValue, maxValue]: Array<number | undefined>) => {
        dispatch(getCardsTC(packId, {minGrade: minValue, maxGrade: maxValue}))
    }, [packId, dispatch])

    const onSearchByQuestion = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(getCardsTC(packId, {question: question}))
        }
    }
    const onSearchByAnswer = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(getCardsTC(packId, {answer: answer}))
        }
    }
    const paginatorPage = useCallback((page: number, pageCount: number | undefined) => {
        dispatch(getCardsTC(packId, {page, pageCount}))
    }, [packId, dispatch])

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>
    if (isLoggedIn && !packId) return <Redirect to={PATH.PACKS}/>

    return (
        <div className={style.cards}>
            <h2>Cards</h2>
            <div className={style.filter}>
                {/*фильтр карточек по вопросу*/}
                <label>Search cards by question: <input placeholder={'Press Enter to search'}
                                                        onKeyPress={onSearchByQuestion}
                                                        value={question}
                                                        onChange={e => setQuestion(e.currentTarget.value)}/></label>
                {/*фильтр карточек по ответу*/}
                <label>Search cards by answer: <input placeholder={'Press Enter to search'}
                                                      onKeyPress={onSearchByAnswer}
                                                      value={answer}
                                                      onChange={e => setAnswer(e.currentTarget.value)}/></label>
                {/*двойной range для сортировки по оценкам (grade)*/}
                <div className={style.rangeContainer}>Search cards by grade:
                    <DoubleRange minValue={minGrade} maxValue={maxGrade} onValuesChange={onGradeRangeChange}
                                 maxRangeLimit={5}/></div>
            </div>
            {error && <div className={style.error}>{error}</div>}
            {/*таблица с карточками*/}
            <CardsTable cards={cards} packId={packId} packUserId={packUserId} authUserId={authUserId}/>
            {/*Pagination*/}
            <div className={style.pagination}>
                <Paginator current={page}
                           pageCount={pageCount}
                           total={cardsTotalCount}
                           onChange={paginatorPage}/>
            </div>
        </div>
    );
}