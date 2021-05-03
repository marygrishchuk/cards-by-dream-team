import React from "react";
import style from "./Login.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {useFormik} from "formik";
import { Redirect } from 'react-router-dom';
import {loginTC} from "./auth-reducer";

// export const Login = () => {
//     return (
//         <div className={style.login}>
//             Log In
//             <input type="email"/>
//             <input type="password"/>
//             <NavLink to="/forgot" activeClassName={style.active}>Forgot password?</NavLink>
//             <label><input type="checkbox"/>Remember Me</label>
//             <button>Log in</button>
//             <NavLink to="/register" activeClassName={style.active}>Registration</NavLink>
//         </div>
//     );
// }
export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)


    const formik = useFormik({
        validate: (values) => {
            if(!values.email) {
                return {
                    email: "Email is required"
                }
            }
            if(!values.password) {
                return {
                    password: "Password is required"
                }
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
           dispatch(loginTC(values))
        },
    })


    if(isLoggedIn) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={style.login}>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    {...formik.getFieldProps("email")}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <input
                    type="password"
                    {...formik.getFieldProps("password")}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <input type="checkbox"
                       {...formik.getFieldProps("rememberMe")}
                       checked={formik.values.rememberMe}
                />
                <button type={'submit'} color={'primary'}>Login</button>
                <NavLink to="/forgot" activeClassName={style.active}>Forgot password?</NavLink>
                <NavLink to="/register" activeClassName={style.active}>Registration</NavLink>
            </form>
        </div>
    )
}