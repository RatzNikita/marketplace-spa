import styles from './styles.module.scss'
import Button from "../../../shared/ui/Button";
import {ReactComponent as Cart} from "../../../shared/images/shopping_cart.svg";
import {ReactComponent as Favorite} from "../../../shared/images/favorite.svg"
import {Product} from "gql/graphql";
import notFound from 'shared/images/image-not-found.jpg'

interface Props {
    product: Product,
    onClick: (product: Product) => void
}

function ProductCard({product, onClick}: Readonly<Props>) {

    console.log(product)
    const handleClickCard = () => {
        onClick(product)
    }

    const getThumbnail = () => {
        const images = product.images
        if(images && images[0]) {
            return images[0].image
        } return notFound
    }

    return (
        <article className={styles.container} onClick={handleClickCard}>
            <img src={getThumbnail()}
                 alt={product.title}
                 className={styles.image}
            />
            <div className={styles.info}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
            </div>
            <div className={styles.buttons}>
                <Button><Favorite/></Button>
                <Button>{`${product.price}$`}<Cart/></Button>
            </div>
        </article>
    );
}

export default ProductCard;
