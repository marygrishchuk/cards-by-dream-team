import React, {useEffect, useState} from "react";
import style from "./Cards.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {SortButtons} from "../../common/SortButtons/SortButtons";
import {getAuthUserDataTC} from "../Login/auth-reducer";

export const Cards = () => {
    //значения для range (диапазона) для поиска карточек по оценкам (grade)
    const [min, setMin] = useState("0")
    const [max, setMax] = useState("5")

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn) return
        dispatch(getAuthUserDataTC())
    }, [])

    if (!isLoggedIn) return <Redirect to={'/login'}/>

    return (
        <div className={style.cards}>
            <h2>Cards</h2>
            <div className={style.filter}>
                <label><input type="checkbox"/> including my private packs</label>
                {/*фильтр по названию колоды*/}
                <label>Search cards by question: <input type="text"/></label>
                <label>Search cards by answer: <input type="text"/></label>
                {/*двойной range для сортировки по кол-ву карточек в колоде*/}
                Search cards by grade:
                <div className={style.rangeBlock}>
                    {min}
                    <span className={style.doubleRange}>
                    <input type="range" value={min} onChange={e => setMin(e.currentTarget.value)} max={'5'} />
                    <input type="range" value={max} onChange={e => setMax(e.currentTarget.value)} max={'5'} />
                </span>
                    {max}
                </div>
            </div>
            <table width="100%" cellPadding="4" className={style.table}>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>
                        <div className={style.withButtons}>Grade<SortButtons param={'grade'}/></div>
                    </th>
                    <th>Last Updated</th>
                    <th>URL</th>
                    <th>
                        <button>Add</button>
                    </th>
                </tr>
                </thead>
                {/*мапим карточки, чтобы они появились в таблице*/}
                {/*{cards.map(c => <tr key={c._id}>*/}
                {/*    <td>{c.question}</td>*/}
                {/*    <td>{c.answer}</td>*/}
                {/*    <td>{c.grade}</td>*/}
                {/*    <td>{c.updated}</td>*/}
                {/*    <td>string</td>*/}
                {/*    <td>*/}
                {/*        <button>Delete</button>*/}
                {/*        <button>Update</button>*/}
                {/*    </td>*/}
                {/*</tr>)}*/}

            </table>
            {/*Pagination*/}
            <div className={style.pagination}>
                Pagination
                {/*номер текущей страницы (сначала вводим, а затем сетаем значение с сервера),*/}
                <input type="number"/>
                {/*отмапленные кнопки для перехода на другие страницы и*/}
                <button>кнопки для перехода на другие страницы</button>
                {/*общее количество страниц*/}
                <span>общее кол-во страниц</span>
            </div>
        </div>
    );
}