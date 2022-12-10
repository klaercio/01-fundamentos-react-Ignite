import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';

export default function Post() {
    return <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={'https://avatars.githubusercontent.com/u/75287995?v=4'}/>
                    <div className={styles.authorInfo}>
                        <strong>Klaércio</strong>
                        <span>Web Developer</span>
                    </div>
                </div> 
                <time dateTime='2022-12-09 15:17:11'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
                <p>
                   <a href='#'>#novoprojeto</a> {' '}
                   <a>#nlw </a>{' '}
                   <a>#rocketseat</a>{' '}
                </p>
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