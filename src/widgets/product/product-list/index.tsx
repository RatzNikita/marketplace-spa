import styles from './styles.module.css'
import {useGetProductsQuery} from "app/api";
import {ProductCard} from "entities/product/ui";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {Product} from "../../../shared/api/types";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {setCurrentProduct} from "../../../features/product/model/productSlice";

function ProductList() {

    const {data,} = useGetProductsQuery();
    const category = useAppSelector(state => state.product.category)
    const search = useAppSelector(state => state.app.search)
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const [products, setProducts] = useState(data?.products || [])

    useEffect(() => {
            setProducts(data?.products.filter(el =>
                el.title.toLowerCase().includes(search.toLowerCase())
                    ? category
                        ? category === el.category
                        : true
                    : false
            ) || [])
        }, [search, category, data?.products]
    )

    const handleCardClick = (product: Product) => {
        dispatch(setCurrentProduct(product))
        navigation(`/product/${product.id}`)

    }

    console.log(products)
    return (
        <div className={styles.list}>
            {products.length > 0
                ? products.map((product) =>
                    <ProductCard onClick={handleCardClick}
                                 product={product}
                                 key={product.id}/>)
                : <div className={styles.notFound}>
                    {'No results were found for your request'}
                </div>
            }
        </div>
    )
}

export default ProductList