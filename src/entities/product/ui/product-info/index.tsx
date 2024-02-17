import styles from './styles.module.scss'
import AddToCart from "features/product/ui/add-to-cart";
import {Product} from "gql/graphql";

interface Props {
    product: Product,
}

function ProductInfo({product}: Props) {

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{product.title}</h3>
            <p>{`Rating: ${product.rating}`}</p>
            <p>{`Price: ${product.price}`}</p>
            {/*<p>{`In stock: ${product.stock}`}</p>*/}
            <AddToCart/>
        </section>
    )
}

export default ProductInfo;