import styles from './styles.module.css'
import SelectProductCategory from "features/product/ui/product-category-selector";

function ProductFilters() {

        return (
            <aside className={styles.container}>
                <h3 className={styles.title}>Filters</h3>
                <SelectProductCategory/>
            </aside>
        )
}

export default ProductFilters