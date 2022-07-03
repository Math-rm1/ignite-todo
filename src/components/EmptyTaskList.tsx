import styles from './EmptyTaskList.module.css';

import clipboard from '../assets/clipboard.svg';

export function EmptyTaskList() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt='Prancheta' />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
