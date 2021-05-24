import React, {ChangeEvent, CSSProperties, useRef} from "react";
import {Button} from "antd";

type ImageEditorPropsType = {
    style?: CSSProperties
    onClick: (base64: string, fileURL?: string, fileName?: string) => void
}

export const ImageEditor: React.FC<ImageEditorPropsType> = React.memo(({
                                                                           style,
                                                                           onClick,
                                                                           children
                                                                       }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        if (e.target.files !== null && e.target.files[0] instanceof Blob) {
            reader.readAsDataURL(e.target.files[0])
            const imageURL = window.URL.createObjectURL(e.target.files[0])
            reader.onloadend = () => {
                const newBase64 = reader.result
                if (e.target.files && e.target.files[0].size < 2097152) {
                    if (newBase64) onClick(newBase64.toString(), imageURL, e.target.files[0].name || '')
                } else if (e.target.files && e.target.files[0].size > 2097152) {
                    alert('Image size should be less than 2MB.')
                }
            }
        } else return
    }

    return <span style={{...style}}>
        <input type="file" multiple={false} accept={'.jpg, .jpeg, .png'} ref={inputRef} style={{display: 'none'}}
               onChange={uploadImage}/>
        <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}
                type={'link'}>
            {children}
        </Button>
    </span>
})