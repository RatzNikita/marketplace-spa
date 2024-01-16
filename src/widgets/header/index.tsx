import styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import Button from "shared/ui/Button";

function Header() {

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>[Marketplace]</h1>
            <nav className={styles.navigation}>
                <NavLink to={'/products'} className={styles.navlink}>
                    <Button variant={'text'} color={'secondary'} size={'l'}>Go shopping</Button>
                </NavLink>

            </nav>
        </header>
    )
}

export default Header