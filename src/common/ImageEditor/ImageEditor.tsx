import React, {ChangeEvent, CSSProperties, useRef} from "react";
import {EditTwoTone} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {updateUserDataTC} from "../../features/Login/auth-reducer";
import {updatePackTC} from "../../features/Packs/packs-reducer";
import {updateCardTC} from "../../features/Cards/cards-reducer";

type ImageEditorPropsType = {
    imageToEdit: 'avatar' | 'deckCover' | 'questionImg' | 'answerImg'
    packId?: string
    cardId?: string
    style?: CSSProperties
}

export const ImageEditor: React.FC<ImageEditorPropsType> = React.memo(({imageToEdit, packId, cardId, style}) => {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    const reader = new FileReader()

    const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files !== null && reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            const newBase64 = reader.result
            if (e.target.files && e.target.files[0].size < 2097152) {
                if (imageToEdit === 'avatar' && newBase64) dispatch(updateUserDataTC({avatar: newBase64.toString()}))
                if (imageToEdit === 'deckCover' && newBase64 && packId) dispatch(updatePackTC(packId,
                    {deckCover: newBase64.toString()}))
                if (imageToEdit === 'questionImg' && newBase64 && packId && cardId) dispatch(updateCardTC(packId, cardId,
                    {questionImg: newBase64.toString()}))
                if (imageToEdit === 'answerImg' && newBase64 && packId && cardId) dispatch(updateCardTC(packId, cardId,
                    {answerImg: newBase64.toString()}))
            } else if (e.target.files && e.target.files[0].size > 2097152) {
                alert('Image size should be less than 2MB.')
            }
        }
    }

    return <span style={{...style}}>
        <input type="file" multiple={false} accept={'.jpg, .jpeg, .png'} ref={inputRef} style={{display: 'none'}}
               onChange={uploadImage}/>
        <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}
                icon={<EditTwoTone style={{fontSize: '16px'}}/>} shape="circle" ghost/>
    </span>
})