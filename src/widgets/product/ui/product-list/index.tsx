import styles from './styles.module.css'
import {useGetProductsQuery} from "app/api";
import ProductCard from "entities/product/ui";

function ProductList() {

    const {data} = useGetProductsQuery();

    return (
        <div className={styles.list}>
            {data
                && data.products.map((product) => <ProductCard product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductList