import {CardDataType} from "../api/api";

export const getRandomCard = (cards: Array<CardDataType>): CardDataType => {
    let totalSum = cards.reduce((acc: number, card: CardDataType) => acc + ((6 - card.grade)**2), 0)
    let random = Math.random() * totalSum
    let i = 0
    let sum = 0
    while (sum < random) {
        sum += ((6 - cards[i].grade)**2)
        i++
    }
    return cards[i]
}
