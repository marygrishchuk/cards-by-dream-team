import React, {ChangeEvent, CSSProperties, useRef} from "react";
import {EditTwoTone, PlusSquareTwoTone} from "@ant-design/icons";
import {Button} from "antd";

type ImageEditorPropsType = {
    style?: CSSProperties
    action: 'add' | 'edit'
    onClick: (base64: string) => void
}

export const ImageEditor: React.FC<ImageEditorPropsType> = React.memo(({
                                                                           style,
                                                                           action,
                                                                           onClick
                                                                       }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const reader = new FileReader()

    const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files !== null && reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            const newBase64 = reader.result
            if (e.target.files && e.target.files[0].size < 2097152) {
                if (newBase64) onClick(newBase64.toString())
            } else if (e.target.files && e.target.files[0].size > 2097152) {
                alert('Image size should be less than 2MB.')
            }
        }
    }

    return <span style={{...style}}>
        <input type="file" multiple={false} accept={'.jpg, .jpeg, .png'} ref={inputRef} style={{display: 'none'}}
               onChange={uploadImage}/>
        <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}
                icon={action === 'edit' ? <EditTwoTone style={{fontSize: '16px'}}/> :
                    <PlusSquareTwoTone style={{fontSize: '16px'}}/>} shape="circle" ghost/>
    </span>
})