import React, {ChangeEvent, useState} from "react";
import style from "./Forgot.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialForgotStateType, sendEmailToResetPassTC} from "./forgot-reducer";
import commonStyle from "../../common/styles/error.module.css";

export const Forgot = () => {
    const {requestStatus, error, info} = useSelector<AppRootStateType, InitialForgotStateType>(state => state.forgot)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')

    const onEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value.trim())
    }
    const onSendBtnClick = () => {
        dispatch(sendEmailToResetPassTC(email))
    }

    return (
        <div className={style.forgot}>
            Please enter your email, and we'll send you a link to reset your password.
            {requestStatus === 'loading'
                ? <div className={style.loading}>loading...</div>
                : info && <i>{info}</i>}
            <div className={error && commonStyle.error}>{error}</div>
            <input type="email" value={email} onChange={onEmailInput}/>
            <button onClick={onSendBtnClick} disabled={requestStatus === 'loading'}>Send</button>
            <NavLink to="/login" activeClassName={style.active}>Log in</NavLink>
        </div>
    );
}