import {Dispatch} from "redux";
import {RequestStatusType} from "../Login/auth-reducer";

const initialState = {
    requestStatus: 'idle' as RequestStatusType, //изначально статус запроса - "неактивный"
    error: '',
}

export const cardsReducer = (state = initialState, action: ActionsType): CardsStateType => {
    switch (action.type) {
        case 'SET-PASSWORD/SET-REQUEST-STATUS': {
            return {
                ...state,
                requestStatus: action.requestStatus,
                error: action.requestStatus === 'success'
                    ? ''
                    : state.error
            }
        }
        case 'SET-PASSWORD/SET-ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state
    }
} // (при создании кейсов заменить "action: any" на общий тип actionов (ниже) "action: ActionsType")

//action creators
const setRequestStatusAC = (requestStatus: RequestStatusType) => ({
    type: 'SET-PASSWORD/SET-REQUEST-STATUS',
    requestStatus
} as const)
const setErrorAC = (error: string) => ({type: 'SET-PASSWORD/SET-ERROR', error} as const)

//thunk
// export const resetPasswordTC = (password: string, resetPasswordToken: string | undefined) => (dispatch: ThunkDispatch) => {
//     dispatch(setRequestStatusAC('loading'))
//     authAPI.resetPassword({password, resetPasswordToken})
//         .then(res => {
//             dispatch(setInfoAC(res.data.info))
//             dispatch(setRequestStatusAC('success'))
//         })
//         .catch(e => {
//             const error = e.response
//                 ? e.response.data.error
//                 : (e.message + ', more details in the console')
//             dispatch(setErrorAC(error))
//             dispatch(setRequestStatusAC('failed'))
//         })
// }

//types
export type CardsStateType = typeof initialState
//объединение типов actionов:
export type ActionsType =
    | ReturnType<typeof setRequestStatusAC>
    | ReturnType<typeof setErrorAC>

// тип диспатча:
type ThunkDispatch = Dispatch<ActionsType>