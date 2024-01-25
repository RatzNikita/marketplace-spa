import styles from './styles.module.css'
import {useAppDispatch, useAppSelector} from "../../../../app/store";
import {toggleCatalog} from "../../model/appSlice";

function ToggleCatalog() {

    const open = useAppSelector(state => state.app.catalog)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toggleCatalog())
    }

    return (
        <button className={`${styles.button} ${open ? styles.open : ''}`} onClick={handleClick}>
            Catalog
            <div className={styles.icon}>
                <span/><span/><span/>
            </div>
        </button>
    )
}

export default ToggleCatalog