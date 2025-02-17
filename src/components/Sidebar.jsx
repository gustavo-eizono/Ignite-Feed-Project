import { Avatar } from './avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
       <aside className={styles.sidebar}>
        <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1694114891458-20a5c58bec12?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3RyJTIwcjMyfGVufDB8fDB8fHww"
        />
        <div className={styles.profile}>
            <Avatar src="https://ca.slack-edge.com/E04MEK4FQTF-U05E9EEHL59-0722de6d7407-512"/>
            <strong>Gustavo Eizono Cruz</strong>
            <span>Field Software Engineer</span>
        </div>
        <footer>
            
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>

       </aside>
    )
}