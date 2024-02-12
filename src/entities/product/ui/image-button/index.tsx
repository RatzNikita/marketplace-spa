import styles from './styles.module.scss'
import {useRef} from "react";
import {ReactComponent as AddPhoto} from "shared/images/add-photo.svg";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    register?: UseFormRegisterReturn;
}

function ImageButton({register,...props}: Props) {

    const inputRef = useRef<HTMLInputElement>(null)


    const handleClick = () => {
        inputRef.current?.click()
    }

    return (

        <div className={styles.container} onClick={handleClick}>
            <AddPhoto/>
            <input
                hidden
                ref={inputRef}
                className={styles.input}
                {...register}
                data-testid='upload-input'
                accept=' .jpg,.png,.bmp'
                multiple type="file"/>
        </div>
    )
}

export default ImageButton