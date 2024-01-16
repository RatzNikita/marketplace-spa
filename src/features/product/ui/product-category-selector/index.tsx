import styles from './styles.module.css'
import {useGetProductsCategoriesQuery} from "app/api";
import Select from "shared/ui/Select";
import {useAppDispatch} from "../../../../app/store";
import {setCategory} from "../../model/productSlice";
import {Suspense} from "react";


function ProductCategorySelector() {

    const {data} = useGetProductsCategoriesQuery();
    const dispatch = useAppDispatch()

    const handleChangeCategory = (filter: string | null) => {
        dispatch(setCategory(filter))
    }

    return (
        <Suspense fallback={'Loading...'}>
            {data
                && <Select label={'Category'}
                           values={data}
                           onChange={handleChangeCategory}/>
            }
        </Suspense>
    )
}


export default ProductCategorySelector