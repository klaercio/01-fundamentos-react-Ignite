import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
import Avatar from './Avatar';

export default function Sidebar() {
    return <>
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50'
            />

            <div className={styles.profile}>
                <Avatar src={'https://avatars.githubusercontent.com/u/75287995?v=4'}/>
                <strong>Klaércio Castro</strong>
                <span>Front-end developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    </> 
}