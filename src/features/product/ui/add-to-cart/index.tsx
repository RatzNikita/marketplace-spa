import CartButton from "../../../../entities/product/ui/cart-button";
import {useAppDispatch, useAppSelector} from "../../../../app/store";
import {addToCart, removeFromCart, selectCart, selectCurrentProduct} from "../../model/productSlice";
import {useMemo} from "react";


function AddToCart() {

    const dispatch = useAppDispatch()
    const current = useAppSelector(selectCurrentProduct)
    const cart = useAppSelector(selectCart)
    const inCart = cart.find(el => el.product.id === current?.id)?.count || 0


    console.log(inCart,'incart')

    const handleToggleCart = (value: 'add' | 'remove') => {
        value === 'add'
            ? dispatch(addToCart(current))
            : dispatch(removeFromCart(current))
    }

    return (
        <CartButton onChange={handleToggleCart} inCart={inCart}/>
    )
}

export default AddToCart