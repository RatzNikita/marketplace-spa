import styles from './styles.module.css'
import {AccountNavigation, ChangeCategory, ToggleCatalog} from "features/header";
import SearchBar from "features/header/ui/search";
import CartButton from "entities/header/cart-button";
import {useAppSelector} from "../../app/store";
import {selectCart} from "../../features/product/model/productSlice";


function Header() {

    const cart = useAppSelector(selectCart)
    const elements = cart.reduce((acc,val) => acc + val.count,0)


    return (
        <header className={styles.container}>
            <h1 className={styles.title}>[Marketplace]</h1>
            <nav className={styles.navigation}>
                <ToggleCatalog/>
                <SearchBar/>
                <CartButton elements={elements}/>
                <AccountNavigation/>
            </nav>
            <ChangeCategory/>
        </header>
    )
}

export default Header