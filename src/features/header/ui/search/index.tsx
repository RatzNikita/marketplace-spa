import styles from './styles.module.scss'
import {ReactComponent as SearchIcon} from "shared/images/search.svg";
import Button from "../../../../shared/ui/Button";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../app/store";
import {setSearch} from "../../model/appSlice";
import {useNavigate} from "react-router-dom";

function SearchBar() {

    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const {handleSubmit, register, formState}
        = useForm<{ value: string }>({defaultValues: {
            value: ''
        }})

    const handleFormSubmit: SubmitHandler<{ value: string }> = (data) => {
        console.log('baa')
        dispatch(setSearch(data.value))
        navigation('/products')
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(handleFormSubmit)}>
            <input placeholder={'Search...'}
                   {...register('value', {max: 100})}
            />
            <Button size={'l'} type={'submit'} disabled={!formState.isValid}><SearchIcon/></Button>
        </form>
    )
}

export default SearchBar