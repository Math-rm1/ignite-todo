import Header from './components/Header';

import './global.css';
import styles from './App.module.css';
import AddTaskForm, { ITask } from './components/AddTaskForm';
import TaskBox from './components/TaskBox';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function deleteTask(id: number | string) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

  function toggleTask(id: number | string) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    });
  }

  function createTask(task: ITask) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <AddTaskForm onTaskCreation={createTask} />
        <TaskBox
          tasks={tasks}
          onTaskDeletion={deleteTask}
          onTaskToggle={toggleTask}
        />
      </main>
    </>
  );
}

export default App;
