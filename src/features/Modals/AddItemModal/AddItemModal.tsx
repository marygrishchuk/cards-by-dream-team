import React, {ChangeEvent, useCallback, useState} from "react";
import style from "./AddItemModal.module.css";
import {Modal} from "../../../common/Modal/Modal";
import {Button} from 'antd';
import {DeleteTwoTone, UploadOutlined} from '@ant-design/icons';
import {ImageEditor} from "../../../common/ImageEditor/ImageEditor";

export type UploadedFileType = {
    base64: string
    fileURL: string | undefined
    fileName: string | undefined
}

type AddItemModalPropsType = {
    inputLabels: Array<'Name: ' | 'Question: ' | 'Answer: '>
    filesToUpload: Array<'deck cover' | 'question pic' | 'answer pic'>
    itemToAdd: 'pack' | 'card'
    show: boolean
    setShow: (show: boolean) => void
    onAddBtnClick: (values: Array<string>, fileData: Array<UploadedFileType>) => void
}

export const AddItemModal: React.FC<AddItemModalPropsType> = React.memo(({
                                                                             inputLabels,
                                                                             filesToUpload,
                                                                             itemToAdd,
                                                                             show,
                                                                             setShow,
                                                                             onAddBtnClick
                                                                         }) => {
    //создаем массив initialValues с пустыми строками, кол-во которых совпадает с кол-вом лейблов в inputLabels
    const initialValues = Array.from(inputLabels, () => "")
    const initialFileData = Array.from(filesToUpload, () => ({base64: '', fileURL: '', fileName: ''}))
    const [values, setValues] = useState<Array<string>>(initialValues)
    const [fileData, setFileData] = useState<Array<UploadedFileType>>(initialFileData)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        setValues(values.map((v, i) => i === index ? e.currentTarget.value : v))
    }
    const onDeleteImageClick = useCallback((index: number) => {
        setFileData(fileData.map((d, i) => i === index ? ({base64: '', fileURL: '', fileName: ''})
            : d))
    }, [fileData])
    const onImageUpload = useCallback((base64: string, fileURL?: string, fileName?: string, index?: number) => {
        setFileData(fileData.map((d, i) => i === index ? ({base64, fileURL, fileName}) : d))
    }, [fileData])
    const onAddClick = () => {
        onAddBtnClick(values, fileData)
        setShow(false)
    }

    return <Modal enableBackground modalHeightPx={400} modalWidthPx={450} show={show}
                  backgroundOnClick={() => setShow(false)}>
        <div className={style.addBlock}>
            <h4>Add new {itemToAdd}:</h4>
            {/*мапим лейблы для получения соответствующего количества текстэрий с ними*/}
            {inputLabels.map((l, i) => <div key={i}>
                <label>
                    <div>{l}</div>
                    <textarea value={values[i]} onChange={(e) => onChangeHandler(e, i)}/>
                </label>
            </div>)}
            <div>
                {/*мапим названия файлов (картинок) для получения соответствующего количества кнопок для их выгрузки*/}
                {filesToUpload.map((f, i) => <ImageEditor
                    key={i}
                    onClick={(base64: string, fileURL?: string, fileName?: string) => onImageUpload(base64, fileURL, fileName, i)}>
                    <Button icon={<UploadOutlined/>}>Upload {f}</Button>
                </ImageEditor>)}
            </div>
            <div className={style.previews}>
                {/*мапим файлы (картинки) для их отображения вместе с кнопкой для их удаления*/}
                {fileData.map((f, i) => f.fileURL
                    ? <div className={style.previewContainer}>
                        {/*картинка*/}
                        <div className={style.preview} style={{backgroundImage: `url(${f.fileURL})`}}> </div>
                        {/*кнопка для удаления*/}
                        <div className={style.bin}>
                            <Button onClick={() => onDeleteImageClick(i)}
                                    icon={<DeleteTwoTone style={{fontSize: '16px'}}/>} shape="circle" ghost/>
                        </div>
                    </div>
                    : null)}
            </div>
            <div className={style.buttons}>
                <button onClick={() => setShow(false)}>Cancel</button>
                <button onClick={onAddClick}>Add</button>
            </div>
        </div>
    </Modal>
})
