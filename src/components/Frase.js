import styles from './Frase.module.css'

function Frase(){

    return(

        <div className = {styles.fraseContainer}>
            
            <p className = {styles.fraseContent}>Essa é uma frase! :P</p>

        </div>

    )

}

export default Frase