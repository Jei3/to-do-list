import styles from "./Input.module.css";
import {PlusCircle} from "phosphor-react";

export function Input(){
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>

            <button>
                Criar
                < PlusCircle size={18} />
            </button>

        </div>
    )
}