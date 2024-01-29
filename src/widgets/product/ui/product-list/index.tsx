import styles from './styles.module.css'
import {useGetProductsQuery} from "app/api";
import {ProductCard} from "entities/product/ui";
import {useAppDispatch, useAppSelector} from "../../../../app/store";
import {Product} from "../../../../shared/api/types";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {setCurrentProduct} from "../../../../features/product/model/productSlice";

function ProductList() {

    const {data,} = useGetProductsQuery();
    const search = useAppSelector(state => state.app.search)
    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const filterBySearch = useCallback((el: Product) =>
        el.title.toLowerCase().includes(search.toLowerCase()), [search]
    )

    const handleCardClick = (product: Product) => {
        dispatch(setCurrentProduct(product))
        navigation(`/product/${product.id}`)

    }

    return (
        <div className={styles.list}>
            {data
                && data.products.filter(filterBySearch).map((product) =>
                    <ProductCard onClick={handleCardClick}
                                 product={product}
                                 key={product.id}/>)}
        </div>
    )
}

export default ProductList