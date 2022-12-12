import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

export default function Comment({content, deleteComment}) {

    const [likes, setLikes] = useState(0);

    function handleDeleteComment() {
        deleteComment(content);
    }
    
    function handleLikeComment() {
        setLikes(atual => atual + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src='https://github.com/klaercio.png' border={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Klaércio Castro</strong>
                            <time dateTime='2022-12-09 15:17:11'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deltar comentário'><Trash size={24}/></button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}><ThumbsUp/>Aplaudir <span>{likes}</span></button>
                </footer>
            </div>

        </div>
    );
}