import { Header } from "./components/Header"
import { Empty } from "./components/Empty"



import "./global.css"
import styles from "./App.module.css"
import { Input } from "./components/Input"


export function App(){
  return(
    <div>
          <Header />

          <div className={styles.wrapper}>
            < Input />


            <main>
              <header>
                <div className={styles.newTask}>
                  <p>Tarefas criadas</p>
                  <div className={styles.countTask}>
                    <span>0</span>
                  </div>

                </div>
                <div className={styles.doneTask}>
                  <p>Concluídas</p>
                  <div className={styles.countTask}>
                  <span>0</span>
                  </div>
                </div>
              </header>

            <Empty />
             
            </main>
          </div>
    </div>
  )
}