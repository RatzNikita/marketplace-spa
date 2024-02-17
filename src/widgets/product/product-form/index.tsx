import {SubmitHandler, useForm} from "react-hook-form";
import styles from './styles.module.scss'
import Input from "shared/ui/Input/input";
import Button from "shared/ui/Button";
import ImageUpload from "entities/product/ui/image-button";
import {toBase64} from "shared/api/helpers";
import {useMutation, useQuery} from "@apollo/client";
import {createProduct, getAllCategories} from "../../../app/api";
import Select from "shared/ui/Select";
import {useEffect, useState} from "react";
import {Category, CreateProductInput} from "gql/graphql";

export interface Form {
    title: string,
    category: string,
    description: string,
    images?: String[],
    price: number,
}

function ProductForm() {

    const {register, setValue, handleSubmit, formState: {isValid}} = useForm<CreateProductInput>()
    const {data} = useQuery(getAllCategories)
    const [addProduct, {loading}] = useMutation(createProduct)
    useEffect(() => {
        if (data?.categories) {

        }
    }, [data])

    const handleChangeCategory = (value: string | null) => {
        if (value) {
            setValue('category', value)
        }
    }

    const onSubmit: SubmitHandler<CreateProductInput> = async (data) => {
        console.log(data)
        void addProduct({
            variables: {
                form: data
            }
        })
    }

    const onImagesUpload =  (files: File[]) => {
        toBase64(files)
            .then(result => {
                setValue('imagesB64',result)
            })
    }

    return (
        <div className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Product creation</h2>
            <Input label={'Product name'} register={register('title')}/>
            <Select label={'Choose category'} values={data?.categories ?
                data.categories.map((c: Category) => c.name)
                : []} onChange={handleChangeCategory}/>
            <h3>About product</h3>
            <Input label={'Description'} rows={10} register={register('description')}/>
            <Input label={'Price'} register={register('price', {
                valueAsNumber: true,
            })}/>
            <h3>Appearance</h3>
            <ImageUpload onImageUpload={onImagesUpload}/>
            <div className={styles.buttons}>
                <Button color={'secondary'}
                        onClick={handleSubmit(onSubmit)}>{loading ? 'Loading...' : 'Submit'}</Button>
                <Button>Close</Button>
            </div>
        </div>
    )
}

export default ProductForm