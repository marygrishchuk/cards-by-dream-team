import React, {ChangeEvent, useState} from "react";
import style from "./SetPassword.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {resetPasswordTC, SetPasswordStateType} from "./set-password-reducer";

export const SetPassword = () => {
    const {requestStatus, error, info} = useSelector<AppRootStateType, SetPasswordStateType>(state => state.setPassword)
    const dispatch = useDispatch()
    const {token} = useParams<{ token?: string }>()

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [localError, setLocalError] = useState('')

    const onPassword1Input = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.currentTarget.value)
    }
    const onPassword2Input = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.currentTarget.value)
    }
    const onSubmit = () => {
        if (password1 === password2) {
            dispatch(resetPasswordTC(password1, token))
        } else {
            setLocalError("Passwords don't match.")
        }
    }

    return (
        <div className={style.setPassword}>
            Please enter your new password in each field.
            {info && <i>{info}</i>}
            {error && <div style={{color: 'red'}}>{error}</div>}
            {localError && <div style={{color: 'red'}}>{localError}</div>}
            <input type="password" value={password1} onChange={onPassword1Input} onKeyPress={() => setLocalError("")}/>
            <input type="password" value={password2} onChange={onPassword2Input} onKeyPress={() => setLocalError("")}/>
            <button onClick={onSubmit} disabled={requestStatus === 'loading'}>Submit</button>
            <NavLink to="/login" activeClassName={style.active}>Log in</NavLink>
        </div>
    );
}