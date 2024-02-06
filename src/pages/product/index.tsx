import styles from './styles.module.css'
import ProductView from "../../widgets/product/product-view";

function Product() {


    return (
        <section className={styles.container}>
                <ProductView/>
        </section>
    )
}

export default Product