import Button from "../../../../shared/ui/Button";
import {ReactComponent as Remove} from "shared/images/remove.svg";
import {ReactComponent as Edit} from "shared/images/edit.svg";
import {ReactComponent as Delete} from "shared/images/delete.svg";

import styles from './styles.module.scss'

interface Props {
    id: string,
    image: string,
    title: string,
    onEdit: (id: string) => void,
    onRemove: (id: string) => void,
    onClick: (id: string) => void,
}


function UserProductCard({id, onEdit, onRemove, onClick, title, image}: Props) {


    return (
        <div className={styles.container}>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <div className={styles.buttons}>
                <Button onClick={() => onRemove(id)}><Delete/></Button>
                <Button onClick={() => onEdit(id)}><Edit/></Button>
                <Button><Remove/></Button>
            </div>
        </div>
    )
}

export default UserProductCard