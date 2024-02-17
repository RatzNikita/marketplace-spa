import UserProductCard from "../../../entities/product/ui/user-product-card";
import {useQuery} from "@apollo/client";
import {DEFAULT_USER, getAllProducts} from "../../../app/api";
import {getProductImages} from "../../../shared/api/helpers";
import {Product} from "../../../gql/graphql";
import styles from './styles.module.scss'


export function UserProductsCards() {

    const {data} = useQuery(getAllProducts, {
        variables: {
            id: DEFAULT_USER
        }
    })

    const onEdit = (id: string) => {

    }

    const onRemove = (id: string) => {

    }

    const onClick =(id: string) => {

    }

    return (
        <div className={styles.cards}>
            {data && data.products?.map((product ) =>
                <UserProductCard id={product.id}
                                 image={getProductImages(product as Product)[0]}
                                 title={ product.title}
                                 onEdit={onEdit}
                                 onRemove={onRemove}
                                 onClick={onClick}/>
            )}
        </div>
    )
}

export default UserProductsCards