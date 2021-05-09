import React, {useEffect, useState} from "react";
import style from "./Packs.module.css";
import {SortButtons} from "../../common/SortButtons/SortButtons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {getAuthUserDataTC} from "../Login/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {addPackTC, getPacksTC} from "./packs-reducer";
import {PackDataType} from "../../api/api";

export const Packs = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const packs = useSelector<AppRootStateType, Array<PackDataType>>(state => state.packs.cardPacks)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn) dispatch(getPacksTC())
        if (!isLoggedIn) dispatch(getAuthUserDataTC())
    }, [])
//значения для range (диапазона)
    const [min, setMin] = useState("0")
    const [max, setMax] = useState("100")

    const onAddBtnClick = () => {
        dispatch(addPackTC())
    }

    if (!isLoggedIn) return <Redirect to={'/login'}/>

    return (
        <div className={style.packs}>
            <h2>Packs</h2>
            <div className={style.filter}>
                <label><input type="checkbox"/> including my private packs</label>
                {/*фильтр по названию колоды*/}
                <label>Search packs by name: <input type="text"/></label>

                {/*двойной range для сортировки по кол-ву карточек в колоде*/}
                Search packs by cards count:
                <div className={style.rangeBlock}>
                    {min}
                    <span className={style.doubleRange}>
                    <input type="range" value={min} onChange={e => setMin(e.currentTarget.value)} max={'200'}/>
                    <input type="range" value={max} onChange={e => setMax(e.currentTarget.value)} max={'200'}/>
                </span>
                    {max}
                </div>
            </div>
            <table width="100%" cellPadding="4" className={style.table}>
                <tr>
                    <th>
                        <div className={style.withButtons}>Name<SortButtons param={'name'}/></div>
                    </th>
                    <th>
                        <div className={style.withButtons}>Cards Count<SortButtons param={'cardsCount'}/></div>
                    </th>
                    <th>Last Updated</th>
                    <th>URL</th>
                    <th>
                        <button onClick={onAddBtnClick}>Add</button>
                    </th>
                </tr>

                {/*мапим колоды, чтобы они появились в таблице*/}
                {packs.map(p => <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.cardsCount}</td>
                    <td>{p.updated}</td>
                    <td>string</td>
                    <td>
                        <button>Delete</button>
                        <button>Update</button>
                        <NavLink to={`/cards/${p._id}`} activeClassName={style.active}>Cards</NavLink>
                    </td>
                </tr>)}
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

