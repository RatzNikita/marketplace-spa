import styles from './styles.module.css'
import {NavButton} from "entities/header";
import {AccountNavigation, ChangeCategory, ToggleCatalog} from "features/header";
import {ReactComponent as ShoppingCart} from "shared/images/shopping_cart.svg";
import SearchBar from "../../features/header/ui/search";


function Header() {

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>[Marketplace]</h1>
            <nav className={styles.navigation}>
                <ToggleCatalog/>
                <SearchBar/>
                <NavButton to={'/cart'}>
                    <ShoppingCart/>
                </NavButton>
                <AccountNavigation/>
            </nav>
            <ChangeCategory/>
        </header>
    )
}

export default Header