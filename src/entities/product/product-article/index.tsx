import styles from './styles.module.css'
import {ReactNode, useState} from "react";
import {ReactComponent as ExpandMore} from "shared/images/expand-more.svg";
import {ReactComponent as ExpandLess} from "shared/images/expand_less.svg";


interface Props {
    title: string,
    children: ReactNode,
}


function ProductArticle({children, title}: Props) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.container}>
            <button className={styles.articleButton} onClick={handleClick}>
                <span>{title}</span>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </button>
            {open && children}
        </div>
    )
}

export default ProductArticle