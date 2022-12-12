import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Comment from './Comment';
import Avatar from './Avatar';
import { useState } from 'react';
import {v4} from 'uuid';

export default function Post(props) {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const publishedDateFornated = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatiorio');
    }

    function deleteComment(comment) {
        const newList = comments.filter(comentario => {
            return comentario !== comment;
        })

        setComments(newList);
    }

    return <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.autor.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.autor.name}</strong>
                        <span>{props.autor.cargo}</span>
                    </div>
                </div> 
                <time title = {publishedDateFornated} dateTime={props.publishedAt.toISOString()}> {
                    publishedDateRelativeToNow
                }</time>
            </header>
            <div className={styles.content}> 
                { props.content.map(item => {
                    if(item.type === 'paragraph')
                        return <p key={v4()}>{item.content}</p>    
                    else if(item.type === 'link')
                        return <p key={v4()}><a href='#'>{item.content}</a></p>   
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback:</strong>
                <textarea 
                    name="comentario" 
                    onChange={handleNewCommentChange} 
                    placeholder='Deixe um comentário'
                    value={newComment}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='sumbit' disabled={newComment===''}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => (
                        <Comment 
                            key={comment}
                            content={comment} 
                            deleteComment={deleteComment}
                        />
                    ))
                }
            </div>
        </article>
    </>
}