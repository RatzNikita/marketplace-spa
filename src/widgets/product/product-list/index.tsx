import styles from './styles.module.css'
import {ProductCard} from "entities/product/ui";
import {useAppDispatch, useAppSelector} from "app/store";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {setCurrentProduct} from "features/product/model/productSlice";
import {useQuery} from "@apollo/client";
import {getAllProducts} from "app/api";
import {Product} from "gql/graphql";

function ProductList() {

    const {data} = useQuery(getAllProducts)
    const category = useAppSelector(state => state.product.category)
    const search = useAppSelector(state => state.app.search)
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const [products, setProducts] = useState<Product[]>(data?.products as Product[] || [])

    useEffect(() => {
            setProducts(data?.products?.filter((el) =>
                el?.title.toLowerCase().includes(search.toLowerCase())
                    ? category
                        ? category === el.category?.name
                        : true
                    : false
            ) as Product[] || [])
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