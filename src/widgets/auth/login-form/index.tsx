import AuthForm, {Form} from "entities/auth/auth-form";
import styles from './styles.module.scss'

function LoginForm() {


    const onSubmit = (data: Form) => {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <h3>Login</h3>
            <AuthForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginForm