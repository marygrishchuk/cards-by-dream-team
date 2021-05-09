import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
}) //перед каждым pushем на gitHub менять baseURL с http://localhost:7542/2.0/ на https://neko-back.herokuapp.com/2.0/ !

export const authAPI = {
    me() { // проверка на залогиненность
        return instance.post<AuthUserData>(`auth/me`)
    },
    login(loginData: LoginDataType) {
        return instance.post<AuthUserData>(`auth/login`, loginData)
    },
    register(regData: RegDataType) {
        return instance.post<{ addedUser: {}, error?: string }>(`auth/register`, regData)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/me`)
    },
    updateUserData(newUserData: NewUserDataType) { // обновление name или аватарки юзера
        return instance.put<{ updatedUser: {}, error?: string }>(`auth/me`, newUserData)
    },
    sendEmailToResetPass(email: string) { // отправляем емайл, если забыл пароль, со страницы Forgot
        return instance.post<ResponseType>(`auth/forgot`, {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">
                 password recovery link:
                 <a href='http://marygrishchuk.github.io/cards-by-dream-team/#/set-new-password/$token$'>
                 Reset Password</a></div>`
        })
    },
    resetPassword(resetPassData: ResetPassDataType) { // отправка нового пароля со страницы Set New Password
        return instance.post<ResponseType>(`auth/set-new-password`, resetPassData)
    }
}

export const packsAPI = {
    getPacks() { // получение колод
        return instance.get<GetPackResponseType>(`cards/pack`)
    },
    getPacksByName(name: string) { // получение отфильтрованных по имени колод
        return instance.get<GetPackResponseType>(`cards/pack?packName=${name}`)
    },
    addPack(name?: string, isPrivate?: boolean, deckCover?: string) {  // добавление (создание) колоды
        return instance.post<AddPackResponseType>(`cards/pack`, {cardsPack: {name, private: isPrivate, deckCover}})
    },
    deletePack(packId: string) { //удаление колоды
        return instance.delete(`cards/pack?id=${packId}`)
    },
    updatePack(packId: string, name?: string) { //изменение колоды
        return instance.put(`cards/pack`, {cardsPack: {_id: packId, name}})
    },
}

export const cardsAPI = {
    getCards(packId: string) { // получение карточек по id колоды
        return instance.get<GetCardsResponseType>(`cards/card&cardsPack_id=${packId}`)
    },
    getCardsByQuestion (packId: string, question: string) { // получение отфильтрованных по вопросу карточек
        return instance.get<GetCardsResponseType>(`cards/card&cardsPack_id=${packId}&cardQuestion=${question}`)
    },
    getCardsByAnswer (packId: string, answer: string) { // получение отфильтрованных по ответу карточек
        return instance.get<GetCardsResponseType>(`cards/card&cardsPack_id=${packId}?cardAnswer=${answer}`)
    },
    addCard(packId: string, question?: string, answer?: string) {  // добавление (создание) карточки
        return instance.post(`cards/card`, {card: {cardsPack_id: packId, question, answer}})
    },
    deleteCard(cardId: string) { //удаление карточки
        return instance.delete(`cards/card?id=${cardId}`)
    },
    updateCard(cardId: string, question?: string, answer?: string) { //изменение карточки
        return instance.put(`cards/card`, {card: {_id: cardId, question, answer}})
    },
}

//types
export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export type RegDataType = {
    email: string
    password: string
}
export type NewUserDataType = {
    name: string
    avatar?: string
}
export type ResetPassDataType = {
    password: string
    resetPasswordToken: string | undefined
}
export type AuthUserData = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    verified: boolean
    rememberMe: boolean
    error?: string
}
export type ResponseType = {
    info: string
    error?: string
}

export type GetPackResponseType = {
    cardPacks: Array<PackDataType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number

}

export type PackDataType = {
    _id: string
    name: string
    cardsCount: number
    created: Date
    updated: Date
    user_id: string
    user_name: string
    deckCover: string
    grade: number
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
}

export type NewPackType = {
    name?: string
    deckCover?: string
    private?: boolean
}

export type AddPackResponseType = {
    newCardsPack: PackDataType
    token: string
    tokenDeathTime: number
}

export type GetCardsResponseType = {
    cards: Array<CardDataType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type CardDataType = {
    _id: string
    question: string
    answer: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: Date
    updated: Date
}