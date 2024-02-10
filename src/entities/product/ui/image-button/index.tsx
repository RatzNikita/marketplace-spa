import styles from './styles.module.scss'

function ImageButton() {

    return (

       <div className={styles.container}>
           <input
                  className={styles.input}
                  data-testid='upload-input'
                  accept='text/plain, .json'
                  multiple type="file"/>
       </div>
    )
}

export default ImageButton