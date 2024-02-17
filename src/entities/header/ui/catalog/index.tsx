import styles from './styles.module.css';
import {useAppSelector} from "app/store";
import Button from "shared/ui/Button";
import {useQuery} from "@apollo/client";
import {getAllCategories} from "app/api";
import {Category} from "gql/graphql";

interface Props {
    onClick: (category: string) => void
}

function Catalog({onClick}: Props) {

    const open = useAppSelector(state => state.app.catalog)
    const {data} = useQuery(getAllCategories)

    const handleClick = (category: string) => {
        onClick(category)
    }

    return (
        <div className={`${styles.container} ${open ? '' : styles.hidden}`}>
            {
                data?.categories.map((category : Category) =>
                    <Button key={category.id}
                            variant={'text'}
                            onClick={() => handleClick(category.name)}
                    >
                        {category.name}
                    </Button>
                )
            }

        </div>
    )
}

export default Catalog