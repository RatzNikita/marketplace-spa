import {NavButton} from "../index";
import {ReactComponent as ShoppingCart} from "shared/images/shopping_cart.svg";
import Badge from "../../../shared/ui/Badge";

interface Props {
    elements: number
}

function CartButton({elements}: Readonly<Props>) {


    return(
        <NavButton to={'/cart'}>
            <Badge value={elements}>
                <ShoppingCart/>
            </Badge>
        </NavButton>
    )
}

export default CartButton