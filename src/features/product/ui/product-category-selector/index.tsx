import Select from "shared/ui/Select";
import {useAppDispatch} from "../../../../app/store";
import {setCategory} from "../../model/productSlice";
import {Suspense} from "react";
import {useQuery} from "@apollo/client";
import {getAllCategories} from "../../../../app/api";


function SelectProductCategory() {

    const {data} = useQuery(getAllCategories);
    const dispatch = useAppDispatch()

    const handleChangeCategory = (filter: string | null) => {
        dispatch(setCategory(filter))
    }

    return (
        <Suspense fallback={'Loading...'}>
            {data
                && <Select label={'Category'}
                           values={data.categories.map(c => c.name)}
                           onChange={handleChangeCategory}/>
            }
        </Suspense>
    )
}


export default SelectProductCategory