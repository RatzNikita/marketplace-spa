import {useForm} from "react-hook-form";
import Select from "shared/ui/Select";
import styles from './styles.module.scss'
import Input from "shared/ui/Input/input";
import Button from "shared/ui/Button";
import {ReactComponent as AddPhoto} from "shared/images/add-photo.svg";
import ImageButton from "../../../entities/product/ui/image-button";

interface Form {
    category: string,
    name: string,
    description: string,
    images: Blob[],
    price: number,
}

function ProductForm() {

    const {register, setValue, handleSubmit} = useForm<Form>()


    const handleChangeCategory = (value: string | null) => {
        if (value) {
            setValue('category', value)
        }
    }

    return (
        <div className={styles.form}>
            <h3></h3>
            <Input label={'Product name'} {...register('name')}/>
            <Select label={'Choose category'} values={[]} onChange={handleChangeCategory}/>
            <h3>About product</h3>
            <Input label={'Description'} {...register('description')}/>
            <Input label={'Price'} {...register('price')}/>
            <h3>Appearance</h3>
            <ImageButton/>

        </div>
    )
}

export default ProductForm