import styles from './styles.module.scss'
import {ChangeEvent, useRef} from "react";
import {ReactComponent as AddPhoto} from "shared/images/add-photo.svg";

interface Props {
    onImageUpload: (files: File[]) => void
}

function ImageUpload({onImageUpload}: Props) {

    const inputRef = useRef<HTMLInputElement>(null)


    const handleClick = () => {
        inputRef.current?.click()
    }

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files
        if(files) {
            onImageUpload(Array.from(files))
        }
    }

    return (

        <div className={styles.container} onClick={handleClick}>
            <AddPhoto/>
            <input
                hidden
                onChange={handleUpload}
                ref={inputRef}
                className={styles.input}
                data-testid='upload-input'
                accept=' .jpg,.png,.bmp'
                multiple
                type="file"
            />
        </div>
    )
}

export default ImageUpload