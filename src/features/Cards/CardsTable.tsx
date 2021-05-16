import {CardDataType, SortDirections} from "../../api/api";
import {useDispatch} from "react-redux";
import {ColumnsType, FilterValue} from "antd/es/table/interface";
import {Table, TablePaginationConfig} from "antd";
import {SorterResult} from "antd/lib/table/interface";
import React, {useState} from "react";
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from "./cards-reducer";
import {RequestStatusType} from "../Login/auth-reducer";
import {AddItemModal} from "../Modals/AddItemModal/AddItemModal";

type CardsTablePropsType = {
    cards: Array<CardDataType>
    packId: string
    packUserId: string
    authUserId: string
    requestStatus: RequestStatusType
}
type CardIdsType = {
    cardId: string
    cardUserId: string
}
type CardType = {
    key: string
    question: string
    answer: string
    grade: number
    updated: Date
    packId: string
    buttons: CardIdsType
}

export const CardsTable = ({cards, packId, packUserId, authUserId, requestStatus}: CardsTablePropsType) => {
    const [showAddItemModal, setShowAddItemModal] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onAddCardClick = (values: Array<string>) => {
        //values содержатся в массиве в том порядке, в котором передаем inputLabels в AddItemModal
        dispatch(addCardTC(packId, {question: values[0], answer: values[1]}))
    }

    const onDeleteClick = (cardId: string) => {
        dispatch(deleteCardTC(packId, cardId))
    }

    const onUpdateClick = (cardId: string) => {
        dispatch(updateCardTC(packId, cardId))
    }

    const data: Array<CardType> = cards.map(c => ({
        key: c._id,
        question: c.question,
        answer: c.answer,
        grade: c.grade,
        updated: c.updated,
        packId: c.cardsPack_id,
        buttons: {cardId: c._id, cardUserId: c.user_id}
    }))

    const columns: ColumnsType<CardType> = [
        {title: 'Question', dataIndex: 'question', key: 'question'},
        {title: 'Answer', dataIndex: 'answer', key: 'answer'},
        {title: 'Grade', dataIndex: 'grade', key: 'grade', sorter: true},
        {title: 'Last Update', dataIndex: 'updated', key: 'updated'},
        {title: 'Pack ID', dataIndex: 'packId', key: 'packId'},
        {
            title: () => <button onClick={() => setShowAddItemModal(true)} disabled={packUserId !== authUserId}>Add</button>,
            dataIndex: 'buttons',
            key: 'buttons',
            render: ({cardId, cardUserId}: CardIdsType) => <>
                <button onClick={() => onDeleteClick(cardId)} disabled={cardUserId !== authUserId}>Delete</button>
                <button onClick={() => onUpdateClick(cardId)} disabled={cardUserId !== authUserId}>Update</button>
            </>,
        },
    ];

    const onChange = (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>,
                      sorter: SorterResult<CardType> | any) => {
        if (sorter.columnKey === 'grade' && sorter.order === 'ascend') {
            dispatch(getCardsTC(packId, {sortDirection: SortDirections.Down, propToSortBy: "grade"}))
        } else if (sorter.columnKey === 'grade' && sorter.order === 'descend') {
            dispatch(getCardsTC(packId, {sortDirection: SortDirections.Up, propToSortBy: "grade"}))
        } else if (sorter.columnKey === 'grade' && sorter.order === undefined) {
            dispatch(getCardsTC(packId, {sortDirection: SortDirections.Up, propToSortBy: "updated"}))
        }
    }

    return <>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} style={{width: '100%'}}
               size={'small'} loading={requestStatus === 'loading'}/>
        {showAddItemModal &&
        <AddItemModal show={showAddItemModal} setShow={setShowAddItemModal} inputLabels={["Question: ", "Answer: "]}
                      itemToAdd={'card'} onAddBtnClick={onAddCardClick}/>}
    </>
}