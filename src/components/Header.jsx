import styles from './Header.module.css';
import Logo from '../assets/ignite-logo.svg';

export default function Header() {
    return <>
        <header className={styles.header}>
          <img src={Logo} alt="Logo da página"/>
          <strong >Ignite Feed</strong>
        </header>
    </>;
}