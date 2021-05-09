import {PackDataType, packsAPI} from "../../api/api";
import {Dispatch} from "redux";
import {RequestStatusType} from "../Login/auth-reducer";
import { ThunkDispatch } from "redux-thunk";
import {AppRootStateType} from "../../app/store";

const initialState = {
    cardPacks: [] as Array<PackDataType>,
    requestStatus: 'idle' as RequestStatusType,
    error: "",

}

export const packsReducer = (state = initialState, action: ActionsType): PacksStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS': {
            return {
                ...state,
                cardPacks: action.cardPacks
            }
        }
        case 'PACKS/SET-REQUEST-STATUS': {
            return {
                ...state,
                requestStatus: action.requestStatus,
                error: action.requestStatus === 'success'
                    ? ''
                    : state.error
            }
        }
        case 'PACKS/SET-ERROR': {
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
const setPacksAC = (cardPacks: Array<PackDataType>) => ({
    type: 'PACKS/SET-PACKS',
    cardPacks
} as const)
const setRequestStatusAC = (requestStatus: RequestStatusType) => ({
    type: 'PACKS/SET-REQUEST-STATUS',
    requestStatus
} as const)

const setErrorAC = (error: string) => ({type: 'PACKS/SET-ERROR', error} as const)

//thunk
export const getPacksTC = () => (dispatch: ThunkCustomDispatch) => {
    dispatch(setRequestStatusAC('loading'))
    packsAPI.getPacks()
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setRequestStatusAC('success'))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setRequestStatusAC('failed'))
        })
}

export const addPackTC = () => (dispatch: ThunkDispatch<AppRootStateType, void, ActionsType>) => {
    dispatch(setRequestStatusAC('loading'))
    packsAPI.addPack()
        .then(res => {
            dispatch(getPacksTC())
            dispatch(setRequestStatusAC('success'))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setRequestStatusAC('failed'))
        })
}

//types
export type PacksStateType = typeof initialState
//объединение типов actionов:
export type ActionsType =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setRequestStatusAC>
    | ReturnType<typeof setErrorAC>

// тип диспатча:
type ThunkCustomDispatch = Dispatch<ActionsType>