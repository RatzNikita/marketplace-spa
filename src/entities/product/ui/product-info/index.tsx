import styles from './styles.module.scss'
import {Product} from "shared/api/types";
import Button from "../../../../shared/ui/Button";
import {ReactComponent as Cart} from "shared/images/shopping_cart_add.svg";
import AddToCart from "../../../../features/product/ui/add-to-cart";

interface Props {
    product: Product,
}

function ProductInfo({product}: Props) {

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{product.title}</h3>
            <p>{`Rating: ${product.rating}`}</p>
            <p>{`Discount: ${product.discountPercentage}%`}</p>
            <p>{`Price: ${product.price}`}</p>
            <p>{`In stock: ${product.stock}`}</p>
            <AddToCart/>
        </section>
    )
}

export default ProductInfo;