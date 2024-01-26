import styles from './styles.module.css'
import {useGetProductsQuery} from "app/api";
import ProductCard from "entities/product/ui";
import {useAppSelector} from "../../../../app/store";
import {Product} from "../../../../shared/api/types";
import React, {useCallback, useMemo} from "react";

function ProductList() {

    const {data,} = useGetProductsQuery();
    const search = useAppSelector(state => state.app.search)

    const filterBySearch = useCallback((el: Product) =>
        el.title.toLowerCase().includes(search.toLowerCase()) ,[search]
    )

    return (
        <div className={styles.list}>
            {data
                && data.products.filter(filterBySearch).map((product) => <ProductCard product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductList