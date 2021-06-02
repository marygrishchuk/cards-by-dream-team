import axios from 'axios'
import {SortDirections} from "./api";
const socketIo = require('socket.io-client');

//websocket для чата
export const socket = socketIo("https://neko-back.herokuapp.com/")

const instance2 = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})

export const usersAPI = {
    getUsers(sortParams: UsersSortParamsType = {}) { // получение userов
        const {userName, minPublicCardPacksCount, maxPublicCardPacksCount, sortDirection = '', propToSortBy = '',
            page, pageCount} = sortParams
        return instance2.get<GetUsersResponseType>(`social/users`, {params: {userName, min: minPublicCardPacksCount,
                max: maxPublicCardPacksCount, sortUsers: sortDirection + propToSortBy, page, pageCount}})
    },
    getUserByID(userId: string) {  // получение userа по ID
        return instance2.get<GetUserByIDResponseType>(`social/user?id=${userId}`)
    }
}

//types
export type GetUsersResponseType = {
    users: Array<UserType>
    maxPublicCardPacksCount: number
    minPublicCardPacksCount: number
    page: number
    pageCount: number
    usersTotalCount: number
}

export type UserType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    updated: string
    verified: boolean
    _id: string
}

export type UsersSortParamsType = {
    userName?: string
    minPublicCardPacksCount?: number
    maxPublicCardPacksCount?: number
    sortDirection?: SortDirections
    propToSortBy?: string
    page?: number
    pageCount?: number
}
type GetUserByIDResponseType = {
    user: UserType
}