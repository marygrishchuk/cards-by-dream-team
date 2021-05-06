import {authAPI, RegDataType} from "../../api/api";
import {Dispatch} from "redux";
import {Simulate} from "react-dom/test-utils";


const initialState = {
    responseText: '',
    isLogin: false
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        //cases
        case "REGISTER/SUCCESS_REGISTER": {
            return {...state, responseText: action.text}
        }
        case "REGISTER/SET-LOGIN": {
            return {...state, isLogin: true}
        }
        default:
            return state
    }
} // (при создании кейсов заменить "action: any" на общий тип actionов (ниже) "action: ActionsType")

//action creators
// export const setSomethingAC = () => ({type: 'REGISTER/SET-SOMETHING'} as const)
const successRegisterAC = (text: string) => ({type: 'REGISTER/SUCCESS_REGISTER', text} as const)
const setLoginAC = () => ({type: 'REGISTER/SET-LOGIN'} as const)
//thunk
// export const doSomethingTC = () => (dispatch: ThunkDispatch) => {
//
// }
export const requestRegister = (regData: RegDataType) => (dispatch: Dispatch) => {
    authAPI.register(regData)
        .then((res) => {
            dispatch(successRegisterAC('success'))
            setTimeout(() => {
                dispatch(setLoginAC())
            }, 3000)


        })
        .catch((err) => {
            dispatch(successRegisterAC(err.response.data.error))
        })
}
//types
export type InitialStateType = typeof initialState
//объединение типов actionов:
// export type ActionsType = ReturnType<typeof setSomethingAC>
type ActionsType = ReturnType<typeof successRegisterAC> | ReturnType<typeof setLoginAC>
// тип диспатча:
// type ThunkDispatch = Dispatch<ReturnType<typeof setSomethingAC>>