import React from "react";
import style from "./Login.module.css"
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <div className={style.login}>
            Log In
            <input type="email"/>
            <input type="password"/>
            <NavLink to="/forgot" activeClassName={style.active}>Forgot password?</NavLink>
            <label><input type="checkbox"/>Remember Me</label>
            <button>Log in</button>
            <NavLink to="/register" activeClassName={style.active}>Registration</NavLink>
        </div>
    );
}