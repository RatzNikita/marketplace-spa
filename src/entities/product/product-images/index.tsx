import styles from './styles.module.scss'
import {useState} from "react";

interface Props {
    images : string[]
}

function ProductImages({images}: Props) {

    const [mainImage, setMainImage] = useState<string>(images[0])

    const handleImageClick = (index: number) => {
        setMainImage(images[index])
    }

    return (
        <div className={styles.imageContainer}>
            <img className={styles.imageMain} src={mainImage}/>
            {images.map((image, index) =>
                <img key={image}
                     className={`${styles.image} ${mainImage === image ? styles.current : ''}`}
                     onClick={() => handleImageClick(index)}
                     src={image}/>
            )}
        </div>
    )
}

export default ProductImages