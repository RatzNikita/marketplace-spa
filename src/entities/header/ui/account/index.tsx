import {User} from "shared/api/types";
import styles from './styles.module.css'
import {ReactComponent as PersonIcon} from "shared/images/person.svg";


interface Props {
    user?: User;
}

function Account({user}: Readonly<Props>) {

    return (
        <div className={styles.container}>
            <PersonIcon className={styles.icon}/>
            <p className={styles.name}>{user?.name || 'anonymous'}</p>
        </div>
    )
}

export default Account;