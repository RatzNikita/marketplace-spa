import {ProductArticle, ProductImages, ProductInfo} from "entities/product/ui";
import {useAppSelector} from "../../../../app/store";
import styles from './styles.module.css'


function ProductView() {

    const product = useAppSelector(state => state.product.currentProduct)

    if (product) {
        return (
            <section className={styles.container}>
                <div className={styles.info}>
                    <ProductImages images={product.images}/>
                    <ProductInfo product={product}/>
                </div>
                <ProductArticle title={'AboutProduct'}>
                    <p>{product.description}</p>
                </ProductArticle>
                <ProductArticle title={'Reviews'}>
                    {'reviews'}
                </ProductArticle>
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default ProductView