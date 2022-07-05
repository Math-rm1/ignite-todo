import styles from './Task.module.css';

import { ITask } from './AddTaskForm';

import { ReactComponent as ChkChecked } from '../assets/chkChecked.svg';
import { ReactComponent as ChkUnchecked } from '../assets/chkUnchecked.svg';
import { ReactComponent as TrashCan } from '../assets/trashCan.svg';

interface TaskProps extends ITask {
  onTaskDeletion: (id: string | number) => void;
  onTaskToggle: (id: string | number) => void;
}

function Task({ id, name, isDone, onTaskDeletion, onTaskToggle }: TaskProps) {
  function handleToggleTask() {
    onTaskToggle(id);
  }

  function handleDeleteTask() {
    onTaskDeletion(id);
  }

  return (
    <li className={`${isDone ? styles.taskDone : ''} ${styles.task}`}>
      <button
        className={`${styles.button} ${styles.checkButton}`}
        onClick={handleToggleTask}
      >
        {isDone ? <ChkChecked /> : <ChkUnchecked />}
      </button>
      <p className={styles.taskName}>{name}</p>
      <button
        onClick={handleDeleteTask}
        className={`${styles.button} ${styles.trashButton}`}
      >
        <TrashCan />
      </button>
    </li>
  );
}

export default Task;
