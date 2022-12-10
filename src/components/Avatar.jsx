import styles from './Avatar.module.css';

export default function Avatar({src, border = true}) {
    return (
        <img className={border? styles.avatarWithBorder: styles.avatar} src={src}/>
    );
}