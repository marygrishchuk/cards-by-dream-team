import React, {useCallback, useEffect, useState} from "react";
import style from "./Profile.module.css";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialAuthStateType, logoutTC, updateUserDataTC} from "../Login/auth-reducer";
import {Avatar, Button, Typography} from 'antd';
import {DeleteTwoTone, EditTwoTone, PlusSquareTwoTone, UserOutlined} from '@ant-design/icons';
import {PATH} from "../../app/App";
import commonStyle from "../../common/styles/error.module.css";
import {FileUploader, UploadedFileDataType} from "../../common/FileUploader/FileUploader";
import {DeleteItemModal} from "../Modals/DeleteItemModal/DeleteItemModal";
import {getUserByIdTC} from "../Users/users-reducer";

export const Profile = () => {
    const {_id, email, name, error, avatar, isLoggedIn, requestStatus} = useSelector<AppRootStateType,
        InitialAuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    const currentUserData = useSelector<AppRootStateType, {
        _id: string, email: string, name: string, avatar: string
    }>(state => state.users.currentUserData)
    const {Paragraph} = Typography;
    const {userId} = useParams<{ userId?: string }>()
    const [showDeleteItemModal, setShowDeleteItemModal] = useState<boolean>(false)

    useEffect(() => {
        if (userId) dispatch(getUserByIdTC(userId))
    }, [])

    const onImageEditorClick = useCallback((fileData: UploadedFileDataType) => {
        dispatch(updateUserDataTC({avatar: fileData.base64}))
    }, [dispatch])
    const onDeleteAvatarClick = useCallback((isToBeDeleted: boolean) => {
        if (isToBeDeleted) {
            dispatch(updateUserDataTC({avatar: "0"}))
            setShowDeleteItemModal(false)
        }
    }, [dispatch])
    const onNewNameSubmit = useCallback((newName: string) => {
        dispatch(updateUserDataTC({name: newName}))
    }, [dispatch])
    const onLogoutClick = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={style.profile}>
            {requestStatus === 'loading' && <div className={style.loading}>loading...</div>}
            <div className={error && commonStyle.error}>{error}</div>
            <div className={style.avatarContainer}>
                {userId && currentUserData._id !== _id
                    ? <Avatar src={currentUserData.avatar || ''} size={64}
                              icon={!currentUserData.avatar && <UserOutlined/>}/>
                    : avatar && avatar !== "0" ? <>
                            <Avatar src={avatar} size={64}/>
                            <div className={style.avatarButtons}>
                                <FileUploader onClick={onImageEditorClick} expectedFileType={'image'}>
                                    <EditTwoTone style={{fontSize: '16px'}}/>
                                </FileUploader>
                                <div>
                                    <Button onClick={() => {
                                        setShowDeleteItemModal(true)
                                    }} icon={<DeleteTwoTone style={{fontSize: '16px'}}/>} shape="circle" ghost/>
                                </div>
                            </div>
                        </>
                        : <>
                            <Avatar size={64} icon={<UserOutlined/>}/>
                            <FileUploader onClick={onImageEditorClick} expectedFileType={'image'}
                                          style={{position: "absolute", top: "30%", right: "0"}}>
                                <PlusSquareTwoTone style={{fontSize: '16px'}}/>
                            </FileUploader>
                        </>}
            </div>
            {userId && currentUserData._id !== _id
                ? <>
                    <div>{currentUserData.name}</div>
                    <div>{currentUserData.email}</div>
                </>
                : <>
                    <Paragraph editable={{onChange: onNewNameSubmit}}>{name}</Paragraph>
                    <div>{email}</div>
                    <button onClick={onLogoutClick} disabled={requestStatus === 'loading'}>Log out</button>
                </>}


            {/*появляющаяся модалка для удаления аватара*/}
            {showDeleteItemModal &&
            <DeleteItemModal itemToDelete={'image'} onDeleteBtnClick={onDeleteAvatarClick}
                             setShow={setShowDeleteItemModal}
                             show={showDeleteItemModal}/>}
        </div>
    );
}