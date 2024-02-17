import {Catalog} from "../../../../entities/header";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../app/store";
import {setCategory} from "../../../product/model/productSlice";
import {toggleCatalog} from "../../model/appSlice";
import {useState} from "react";


function ChangeCategory() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClick = (category: string) => {
        dispatch(setCategory(category))
        dispatch(toggleCatalog())
        navigate('/products')
    }

    return (
        <Catalog onClick={handleClick}/>
    )
}

export default ChangeCategory