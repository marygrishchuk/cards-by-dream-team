import React from "react";
import style from "./Profile.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialAuthStateType, logoutTC} from "../Login/auth-reducer";

export const Profile = () => {
    const {
        email,
        name,
        error,
        isLoggedIn,
        requestStatus
    } = useSelector<AppRootStateType, InitialAuthStateType>(state => state.auth)
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) return <Redirect to={'/login'}/>

    return (
        <div className={style.profile}>
            Welcome!
            {error && <div style={{color: 'red'}}>{error}</div>}
            <div>{name}</div>
            <div>{email}</div>
            <button onClick={onLogoutClick} disabled={requestStatus === 'loading'}>Log out</button>
        </div>
    );
}