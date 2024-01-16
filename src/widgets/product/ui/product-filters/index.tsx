import styles from './styles.module.css'
import ProductCategorySelector from "../../../../features/product/ui/product-category-selector";
import Button from "shared/ui/Button";

function ProductFilters() {


    return (
        <aside className={styles.container}>
            <h3 className={styles.title}>Filters</h3>
            <ProductCategorySelector/>
            <Button>Submit</Button>
        </aside>
    )
}

export default ProductFilters