import {SubmitHandler, useForm} from "react-hook-form";
import Select from "shared/ui/Select";
import styles from './styles.module.scss'
import Input from "shared/ui/Input/input";
import Button from "shared/ui/Button";
import ImageButton from "../../../entities/product/ui/image-button";

export interface Form {
    category: string,
    name: string,
    description: string,
    images?: File[],
    price: number,
    brand: string,
}

function ProductForm() {

    const {register, setValue, handleSubmit, formState: {isValid}} = useForm<Form>()
    //const {data} = useGetProductsCategoriesQuery()

    const handleChangeCategory = (value: string | null) => {
        if (value) {
            setValue('category', value)
        }
    }

    const onSubmit: SubmitHandler<Form> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Product creation</h2>
            <Input label={'Product name'} register={register('name')}/>
          {/*<Select label={'Choose category'} values={data ? data : []} onChange={handleChangeCategory}/>*/}
            <h3>About product</h3>
            <Input label={'Description'} rows={10} register={register('description')}/>
            <Input label={'Brand'}  register={register('brand')}/>
            <Input label={'Price'} register={register('price')}/>
            <h3>Appearance</h3>
            <ImageButton register={register('images')}/>
            <div className={styles.buttons}>
                <Button color={'secondary'} onClick={handleSubmit(onSubmit)}>Submit</Button>
                <Button>Close</Button>
            </div>
        </div>
    )
}

export default ProductForm