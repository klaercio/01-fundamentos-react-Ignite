import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Comment from './Comment';
import Avatar from './Avatar';

export default function Post(props) {

    const publishedDateFornated = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true,
        
    })

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
                        return <p>{item.content}</p>    
                    else if(item.type === 'link')
                        return <p><a href='#'>{item.content}</a></p>   
                })}
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback:</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='sumbit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    </>
}