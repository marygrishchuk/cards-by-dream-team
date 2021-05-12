import React, {useEffect, useState} from "react";
import style from "./Profile.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {getAuthUserDataTC, InitialAuthStateType, logoutTC, updateUserDataTC} from "../Login/auth-reducer";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Popover} from 'antd';

export const Profile = () => {
    const {
        email,
        name,
        error,
        avatar,
        isLoggedIn,
        requestStatus
    } = useSelector<AppRootStateType, InitialAuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    const [newAvatarUrl, setNewAvatarUrl] = useState('')
    const [newName, setNewName] = useState('')

    useEffect(() => {
        if (isLoggedIn) return
        dispatch(getAuthUserDataTC())
    }, [])

    const onLogoutClick = () => {
        dispatch(logoutTC())
    }
    const onChangeAvatarClick = () => {
        dispatch(updateUserDataTC({avatar: newAvatarUrl}))
    }
    const onChangeNameClick = () => {
        dispatch(updateUserDataTC({name: newName}))
    }

    const setAvatarTools = (
        <span>
            <label>Enter avatar URL or Base64:
                <input onChange={e => setNewAvatarUrl(e.currentTarget.value)}
                       value={newAvatarUrl}/>
            </label>
            <button onClick={onChangeAvatarClick}>Set Avatar</button>
        </span>
    )

    const setNameTools = (
        <span>
            <input onChange={e => setNewName(e.currentTarget.value)}
                   value={newName}/>
            <button onClick={onChangeNameClick}>Set name</button>
        </span>
    )

    if (!isLoggedIn) return <Redirect to={'/login'}/>

    return (
        <div className={style.profile}>
            Welcome!
            {requestStatus === 'loading' && <div style={{color: 'green'}}>loading...</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
            {avatar
                ? <Popover content={setAvatarTools} title="Change avatar" trigger="hover">
                    <Avatar src={avatar} size={64}/>
                </Popover>
                : <Popover content={setAvatarTools} title="Add avatar" trigger="hover">
                    <Avatar size={64}
                            icon={<UserOutlined/>}/>
                </Popover>}
            <Popover content={setNameTools} title="Change your name" trigger="hover">
                <div>{name}</div>
            </Popover>
            <div>{email}</div>
            <button onClick={onLogoutClick} disabled={requestStatus === 'loading'}>Log out</button>
        </div>
    );
}