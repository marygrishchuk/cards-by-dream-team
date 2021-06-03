import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/App";
import {BlockOutlined, CloudServerOutlined, HomeOutlined, TeamOutlined, WechatOutlined} from '@ant-design/icons';
import {Chat} from "../Chat/Chat";
import {Popover} from "antd";

export const Header = () => {
    const chatContent = ( <Chat/>)
    return (
        <div className={style.header}>
            <div className={style.linksContainer}>
                <NavLink to={PATH.PROFILE} activeClassName={style.active}><HomeOutlined
                    style={{fontSize: '25px'}}/></NavLink>
                <a>
                    <Popover content={chatContent} trigger="click" placement="bottom">
                        <WechatOutlined
                            style={{fontSize: '25px'}}/>
                    </Popover>
                </a>

                <NavLink to={PATH.PACKS} activeClassName={style.active}>
                    <BlockOutlined style={{fontSize: '25px'}}/>
                    Card Packs to Learn</NavLink>
                <NavLink to={PATH.FILES} activeClassName={style.active}>
                    <CloudServerOutlined style={{fontSize: '25px'}}/>
                    Files</NavLink>
                <NavLink to={PATH.USERS} activeClassName={style.active}>
                    <TeamOutlined style={{fontSize: '25px'}}/>
                    Users</NavLink>
            </div>
        </div>
    )
}