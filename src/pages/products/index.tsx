import styles from './styles.module.css'
import ProductList from "../../widgets/product/product-list";
import ProductFilters from "../../widgets/product/product-filters";
import {useQuery} from "@apollo/client";
import {getAllProducts} from "../../app/api";

function Products() {

    const {data} = useQuery(getAllProducts)

    if(data?.products && data.products.length > 0) {
    return (
        <section className={styles.container}>
            <ProductFilters/>
            <ProductList/>
            <div>Product</div>
            <div>Sffff</div>
            <p>asda</p>
        </section>
    )
    } else {
        return <div>Loading...</div>
    }
}

export default Products;