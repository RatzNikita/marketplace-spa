import {ProductArticle, ProductImages} from "entities/product/ui";
import {useAppSelector} from "../../../../app/store";


function ProductView() {

    const product = useAppSelector(state => state.product.currentProduct)

    if (product) {
        return (
            <section>
                <ProductImages images={product.images}/>
                <ProductArticle title={'AboutProduct'}>
                    <p>{product.description}</p>
                </ProductArticle>
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default ProductView