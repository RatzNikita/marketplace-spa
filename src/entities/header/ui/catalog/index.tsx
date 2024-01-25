import styles from './styles.module.css';
import {useAppSelector} from "../../../../app/store";
import {useGetProductsCategoriesQuery} from "../../../../app/api";
import Button from "../../../../shared/ui/Button";

interface Props {
    onClick: (category: string) => void
}

function Catalog({onClick}: Props) {

    const open = useAppSelector(state => state.app.catalog)
    const {data} = useGetProductsCategoriesQuery()

    const handleClick = (category: string) => {
        onClick(category)
    }

    return (
        <div className={`${styles.container} ${open ? '' : styles.hidden}`}>
            {data
                && data.map((category) =>
                    <Button key={category}
                            variant={'text'}
                            onClick={() => handleClick(category)}
                    >
                        {category}
                    </Button>
                )
            }

        </div>
    )
}

export default Catalog