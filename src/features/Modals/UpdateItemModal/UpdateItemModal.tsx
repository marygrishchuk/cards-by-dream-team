import React, {ChangeEvent, useCallback, useState} from "react";
import {Modal} from "../../../common/Modal/Modal";
import style from "./UpdateItemModal.module.css";
import {ImageEditor} from "../../../common/ImageEditor/ImageEditor";
import {Button} from "antd";
import {DeleteTwoTone, UploadOutlined} from "@ant-design/icons";
import {UploadedFileType} from "../AddItemModal/AddItemModal";

type UpdateItemModalPropsType = {
    inputValues: Array<string>
    inputLabels: Array<'Name: ' | 'Question: ' | 'Answer: '>
    imageURLs: Array<string>
    filesToUpload: Array<'deck cover' | 'question pic' | 'answer pic'>
    itemToUpdate: 'pack' | 'card'
    show: boolean
    setShow: (show: boolean) => void
    onUpdateBtnClick: (values: Array<string>, fileData: Array<UploadedFileType>) => void
}

export const UpdateItemModal: React.FC<UpdateItemModalPropsType> = React.memo(({
                                                                                   inputValues,
                                                                                   inputLabels,
                                                                                   filesToUpload,
                                                                                   imageURLs,
                                                                                   itemToUpdate,
                                                                                   show,
                                                                                   setShow,
                                                                                   onUpdateBtnClick
                                                                               }) => {
    const initialFileData = Array.from(imageURLs, (url) => ({base64: '', fileURL: url, fileName: ''}))
    const [values, setValues] = useState<Array<string>>(inputValues)
    const [fileData, setFileData] = useState<Array<UploadedFileType>>(initialFileData)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        let valuesCopy = [...values]
        setValues(valuesCopy.map((v, i) => i === index ? e.currentTarget.value : v))
    }
    const onImageUpload = useCallback((base64: string, fileURL?: string, fileName?: string, index?: number) => {
        setFileData(fileData.map((d, i) => i === index ? ({base64, fileURL, fileName}) : d))
    }, [fileData])
    const onDeleteImageClick = useCallback((index: number) => {
        setFileData(fileData.map((d, i) => i === index ? ({base64: '', fileURL: '', fileName: ''})
            : d))
    }, [fileData])
    const onUpdateClick = () => {
        onUpdateBtnClick(values, fileData)
        setShow(false)
    }

    return <Modal enableBackground modalHeightPx={400} modalWidthPx={450} show={show}
                  backgroundOnClick={() => setShow(false)}>
        <div className={style.updateBlock}>
            <h4>Update {itemToUpdate}:</h4>
            <div>
                {/*мапим лейблы для получения соответствующего количества текстэрий с ними*/}
                {inputLabels.map((l, i) => <div>
                    <label>
                        <div>{l}</div>
                        <textarea value={values[i]} onChange={(e) => onChangeHandler(e, i)}/>
                    </label>
                </div>)}
            </div>
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
                <button onClick={onUpdateClick}>Update</button>
            </div>
        </div>
    </Modal>
})
