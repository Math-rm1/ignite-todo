import styles from './TaskBox.module.css';

import { ITask } from './AddTaskForm';
import Task from './Task';
import { EmptyTaskList } from './EmptyTaskList';

interface TaskBoxProps {
  tasks: ITask[];
  onTaskDeletion: (id: string | number) => void;
  onTaskToggle: (id: string | number) => void;
}

export default function TaskBox({
  tasks,
  onTaskDeletion,
  onTaskToggle
}: TaskBoxProps) {
  const isTaskListEmpty = tasks.length === 0;

  const doneTasksCount = tasks.reduce(
    (acc, { isDone }) => (isDone ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.progress} ${styles.info}`}>
          <strong>Tarefas criadas</strong>
          <strong>{tasks.length}</strong>
        </div>

        <div className={`${styles.progress} ${styles.done}`}>
          <strong>Concluídas</strong>
          <strong>
            {isTaskListEmpty
              ? doneTasksCount
              : doneTasksCount + ' de ' + tasks.length}
          </strong>
        </div>
      </header>
      <section>
        {isTaskListEmpty && <EmptyTaskList />}
        {!isTaskListEmpty && (
          <ul>
            {tasks?.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  isDone={task.isDone}
                  onTaskDeletion={onTaskDeletion}
                  onTaskToggle={onTaskToggle}
                />
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
