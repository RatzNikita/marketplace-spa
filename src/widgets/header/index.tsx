import styles from './styles.module.css'
import {NavButton} from "entities/header";

function Header() {

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>[Marketplace]</h1>
            <nav className={styles.navigation}>
                <NavButton to={'/news'}>news</NavButton>
                <NavButton to={'/products'} >goods</NavButton>
                <NavButton to={'/sale'}>sale</NavButton>
                <NavButton to={'/cart'}>cart</NavButton>
            </nav>
        </header>
    )
}

export default Header