import styles from './styles.module.css'
import ProductList from "../../widgets/product/product-list";
import ProductFilters from "../../widgets/product/product-filters";
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../app/api";

function Products() {

    const {data} = useQuery(GET_PRODUCTS)

    if(data && data.products.length > 0) {
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