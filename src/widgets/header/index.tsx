import styles from './styles.module.css'
import {Catalog, NavButton} from "entities/header";
import {ToggleCatalog, ChangeCategory} from "features/header";

function Header() {

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>[Marketplace]</h1>
            <nav className={styles.navigation}>
                <ToggleCatalog/>
                <NavButton to={'/news'}>news</NavButton>
                <NavButton to={'/products'}>goods</NavButton>
                <NavButton to={'/sale'}>sale</NavButton>
                <NavButton to={'/cart'}>cart</NavButton>
            </nav>
            <ChangeCategory/>
        </header>
    )
}

export default Header