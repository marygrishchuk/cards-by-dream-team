import React from "react";
import style from "./Profile.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialAuthStateType, logoutTC, updateUserDataTC} from "../Login/auth-reducer";
import {Avatar, Typography} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {PATH} from "../../app/App";
import commonStyle from "../../common/styles/error.module.css";
import {ImageEditor} from "../../common/ImageEditor/ImageEditor";

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
    const {Paragraph} = Typography;

    const onLogoutClick = () => {
        dispatch(logoutTC())
    }
    const onNewNameSubmit = (newName: string) => {
        dispatch(updateUserDataTC({name: newName}))
    }

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={style.profile}>
            Welcome!
            {requestStatus === 'loading' && <div className={style.loading}>loading...</div>}
            <div className={error && commonStyle.error}>{error}</div>
            <div>
                {avatar ? <Avatar src={avatar} size={64}/> : <Avatar size={64} icon={<UserOutlined/>}/>}
                <ImageEditor imageToEdit={'avatar'} style={{position: "absolute", top: "44%", left: "54%"}}/>
            </div>
            <Paragraph editable={{onChange: onNewNameSubmit}}>{name}</Paragraph>
            <div>{email}</div>
            <button onClick={onLogoutClick} disabled={requestStatus === 'loading'}>Log out</button>
        </div>
    );
}