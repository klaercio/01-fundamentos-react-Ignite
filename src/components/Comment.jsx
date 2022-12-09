import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export default function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://github.com/klaercio.png'/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Klaércio Castro</strong>
                            <time dateTime='2022-12-09 15:17:11'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deltar comentário'><Trash size={24}/></button>
                    </header>
                    <p>Muito bom devon, parabéns!!!</p>
                </div>
                <footer>
                    <button><ThumbsUp/>Aplaudir <span>20</span></button>
                </footer>
            </div>

        </div>
    );
}