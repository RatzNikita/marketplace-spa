import styles from './styles.module.css'
import Button from "../../../../shared/ui/Button/Button";
import {ReactComponent as Cart} from "../../../../shared/images/shopping_cart.svg";
import {ReactComponent as Favorite} from "../../../../shared/images/favorite.svg"

export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: 94,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}

interface Props {
    product: Product
}

function ProductCard({product}: Props) {
    return (
        <article className={styles.container}>
            <img src={product.thumbnail}
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
