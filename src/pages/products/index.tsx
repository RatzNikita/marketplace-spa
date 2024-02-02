import styles from './styles.module.css'
import ProductList from "../../widgets/product/ui/product-list";
import ProductFilters from "../../widgets/product/ui/product-filters";
import {useGetProductsQuery} from "../../app/api";

function Products() {

    const {isLoading} = useGetProductsQuery()

    if(!isLoading) {
    return (
        <section className={styles.container}>
            <ProductFilters/>
            <ProductList/>
        </section>
    )
    } else {
        return <div>Loading...</div>
    }
}

export default Products;