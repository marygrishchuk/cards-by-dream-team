import {CardDataType} from "../../api/api";
import {useDispatch} from "react-redux";
import {ColumnsType} from "antd/es/table/interface";
import {Table, Button} from "antd";
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons';
import React, {useCallback, useState} from "react";
import {addCardTC, deleteCardTC, updateCardTC} from "./cards-reducer";
import {RequestStatusType} from "../Login/auth-reducer";
import {AddItemModal} from "../Modals/AddItemModal/AddItemModal";
import {UpdateItemModal} from "../Modals/UpdateItemModal/UpdateItemModal";
import {DeleteItemModal} from "../Modals/DeleteItemModal/DeleteItemModal";

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
    question: string
    answer: string
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

export const CardsTable = React.memo(({cards, packId, packUserId, authUserId, requestStatus}: CardsTablePropsType) => {
    const [showAddItemModal, setShowAddItemModal] = useState<boolean>(false)
    const [currentCardID,setCurrentCardID] = useState<string>("")
    const [question,setQuestion] = useState<string>("")
    const [answer,setAnswer] = useState<string>("")
    const [showUpdateItemModal, setShowUpdateItemModal] = useState<boolean>(false)
    const [showDeleteItemModal, setShowDeleteItemModal] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onAddCardClick = useCallback((values: Array<string>) => {
        //values содержатся в массиве в том порядке, в котором передаем inputLabels в ScrollUpModal
        dispatch(addCardTC(packId, {question: values[0], answer: values[1]}))
    }, [dispatch, packId])

    const onDeleteClick = useCallback((isToBeDeleted: boolean) => {
        if (isToBeDeleted){
            dispatch(deleteCardTC(packId, currentCardID))
            setShowDeleteItemModal(false)
        }
    }, [dispatch, packId, currentCardID])

    const onUpdateClick = useCallback((values: Array<string>) => {
        dispatch(updateCardTC (packId, currentCardID, {question: values[0], answer: values[1]}))
    }, [dispatch, packId, currentCardID])

    const data: Array<CardType> = cards.map(c => ({
        key: c._id,
        question: c.question,
        answer: c.answer,
        grade: c.grade,
        updated: c.updated,
        packId: c.cardsPack_id,
        buttons: {cardId: c._id, cardUserId: c.user_id, question: c.question, answer: c.answer}
    }))

    const columns: ColumnsType<CardType> = [
        {title: 'Question', dataIndex: 'question', key: 'question'},
        {title: 'Answer', dataIndex: 'answer', key: 'answer'},
        {title: 'Grade', dataIndex: 'grade', key: 'grade'},
        {title: 'Last Update', dataIndex: 'updated', key: 'updated'},
        {title: 'Pack ID', dataIndex: 'packId', key: 'packId'},
        {
            title: () => <button onClick={() => setShowAddItemModal(true)} disabled={packUserId !== authUserId}>Add</button>,
            dataIndex: 'buttons',
            key: 'buttons',
            render: ({cardId, cardUserId, question, answer}: CardIdsType) => <>
                <Button onClick={() => {
                    setCurrentCardID(cardId);
                    setShowDeleteItemModal(true)
                }} disabled={cardUserId !== authUserId}><DeleteTwoTone />
                </Button>
                <Button onClick={() => {
                    setCurrentCardID(cardId);
                    setQuestion(question);
                    setAnswer(answer)
                    setShowUpdateItemModal(true)
                }} disabled={packUserId !== authUserId}><EditTwoTone />
                </Button>
            </>,
        },
    ];

    return <>
        <Table columns={columns} dataSource={data} pagination={false} style={{width: '100%'}}
               size={'small'} loading={requestStatus === 'loading'}/>
        {showAddItemModal &&
        <AddItemModal show={showAddItemModal} setShow={setShowAddItemModal} inputLabels={["Question: ", "Answer: "]}
                      itemToAdd={'card'} onAddBtnClick={onAddCardClick}/>}
        {showDeleteItemModal && <DeleteItemModal show={showDeleteItemModal} setShow={setShowDeleteItemModal}
                                                 itemToDelete={'pack'} onDeleteBtnClick={onDeleteClick}/>}

        {showUpdateItemModal && <UpdateItemModal show={showUpdateItemModal} setShow={setShowUpdateItemModal}
                                                 itemToUpdate={'card'} onUpdateBtnClick={onUpdateClick}
                                                 inputLabels={["Question: ", "Answer: "]} inputValues={[question, answer]}/>}
    </>
})