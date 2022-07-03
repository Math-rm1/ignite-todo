import styles from './Header.module.css';

import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logo do ToDo List' />
    </header>
  );
}
