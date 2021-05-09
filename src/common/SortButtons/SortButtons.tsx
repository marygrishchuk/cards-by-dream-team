import React from "react";

type SortButtonsProps = {
    param: 'name' | 'cardsCount' | 'grade' //пока 3 параметра, в будущем можно расширять
}

export const SortButtons = ({param}: SortButtonsProps) => {

    const onUpClick = () => {
        if (param === 'name') {
            //логика для сортировки по name по возврастанию
        } else if (param === 'cardsCount') {
            //логика для сортировки по cardsCount по возврастанию
        } else if (param === 'grade') {
            //логика для сортировки по grade по возврастанию
        }
    }
    const onDownClick = () => {
        if (param === 'name') {
            //логика для сортировки по name по убыванию
        } else if (param === 'cardsCount') {
            //логика для сортировки по cardsCount по убыванию
        } else if (param === 'grade') {
            //логика для сортировки по grade по возврастанию
        }
    }

    return <span style={{margin: '0 5px'}}>
        <div>
            <button onClick={onUpClick}>↑</button>
        </div>
        <div>
            <button onClick={onDownClick}>↓</button>
        </div>
    </span>
}