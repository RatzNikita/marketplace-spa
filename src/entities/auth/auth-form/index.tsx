import React from "react";
import { useForm} from "react-hook-form";
import Button from "../../../shared/ui/Button";
import styles from './styles.module.scss'

interface Props {
    onSubmit: (data: Form) => void
}

export interface Form {
    username: string,
    password: string,

}

function AuthForm({onSubmit,...props}: Props) {

    const {handleSubmit, register} = useForm<Form>()

    return (
        <form className={styles.form} {...props} onSubmit={handleSubmit(onSubmit)}>
            <p>Username</p>
            <input {...register('username')}/>
            <p>Password</p>
            <input {...register('password')}/>
            <Button>Submit</Button>
        </form>
    )
}

export default AuthForm