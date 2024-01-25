import styles from './styles.module.css'
import ProductList from "../../widgets/product/ui/product-list";
import ProductFilters from "../../widgets/product/ui/product-filters";

function Products() {

    return (
        <section className={styles.container}>
            <ProductFilters/>
            <ProductList/>
        </section>
    )
}

export default Products;