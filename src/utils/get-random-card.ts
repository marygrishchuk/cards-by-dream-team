import {CardDataType} from "../api/api";

export const getRandomCard = (cards: Array<CardDataType>): CardDataType => {
    let cardsCopy = [...cards]
    let totalSum = cardsCopy.reduce((acc, card) => acc + (6 - card.grade), 0)
    let random = Math.random() * totalSum
    let i = 0
    let sum = 0
    while (sum < random) {
        sum += (6 - cardsCopy[i].grade)
        i = sum < random ? i++ : i
    }
    return cardsCopy[i]
}
