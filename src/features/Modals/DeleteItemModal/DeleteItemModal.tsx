import React, {ChangeEvent, useState} from "react";
import {Modal} from "../../../common/Modal/Modal";

type DeleteItemModalPropsType = {
    itemToDelete: 'pack' | 'card'
    show: boolean
    setShow: (show: boolean) => void
    onDeleteBtnClick: (isToBeDeleted: boolean) => void
}

export const DeleteItemModal: React.FC<DeleteItemModalPropsType> = React.memo(({
                                                                                   itemToDelete,
                                                                                   show,
                                                                                   setShow,
                                                                                   onDeleteBtnClick
                                                                               }) => {

    return <Modal enableBackground modalHeightPx={250} modalWidthPx={395} show={show}
                  backgroundOnClick={() => setShow(false)}>
        <div>Are you sure you want to delete this {itemToDelete}?</div>
        <div>
            <button onClick={() => setShow(false)}>No</button>
            <button onClick={() => onDeleteBtnClick(true)}>Yes</button>
        </div>
    </Modal>
})
