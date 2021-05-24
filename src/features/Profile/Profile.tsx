import React, {useState} from "react";
import style from "./Profile.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialAuthStateType, logoutTC, updateUserDataTC} from "../Login/auth-reducer";
import {Avatar, Button, Typography} from 'antd';
import {DeleteTwoTone, UserOutlined} from '@ant-design/icons';
import {PATH} from "../../app/App";
import commonStyle from "../../common/styles/error.module.css";
import {ImageEditor} from "../../common/ImageEditor/ImageEditor";
import {DeleteItemModal} from "../Modals/DeleteItemModal/DeleteItemModal";

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
    const [showDeleteItemModal, setShowDeleteItemModal] = useState<boolean>(false)

    const onImageEditorClick = (base64: string) => {
        dispatch(updateUserDataTC({avatar: base64}))
    }
    const onDeleteAvatarClick = (isToBeDeleted: boolean) => {
        if (isToBeDeleted) {
            dispatch(updateUserDataTC({avatar: "0"}))
            setShowDeleteItemModal(false)
        }
    }
    const onNewNameSubmit = (newName: string) => {
        dispatch(updateUserDataTC({name: newName}))
    }
    const onLogoutClick = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={style.profile}>
            Welcome!
            {requestStatus === 'loading' && <div className={style.loading}>loading...</div>}
            <div className={error && commonStyle.error}>{error}</div>
            <div className={style.avatarContainer}>
                {avatar !== '0' ? <>
                        <Avatar src={avatar} size={64}/>
                        <div className={style.avatarButtons}>
                            <ImageEditor onClick={onImageEditorClick} action={'edit'}/>
                            <div>
                                <Button onClick={() => {
                                    setShowDeleteItemModal(true)
                                }} icon={<DeleteTwoTone style={{fontSize: '16px'}}/>} shape="circle" ghost/>
                            </div>
                        </div>
                    </>
                    : <>
                        <Avatar size={64} icon={<UserOutlined/>}/>
                        <ImageEditor onClick={onImageEditorClick} style={{position: "absolute", top: "30%", right: "0"}}
                                     action={'add'}/>
                    </>}
            </div>
            <Paragraph editable={{onChange: onNewNameSubmit}}>{name}</Paragraph>
            <div>{email}</div>
            <button onClick={onLogoutClick} disabled={requestStatus === 'loading'}>Log out</button>
            {/*появляющаяся модалка для удаления аватара*/}
            {showDeleteItemModal &&
            <DeleteItemModal itemToDelete={'avatar'} onDeleteBtnClick={onDeleteAvatarClick}
                             setShow={setShowDeleteItemModal}
                             show={showDeleteItemModal}/>}
        </div>
    );
}