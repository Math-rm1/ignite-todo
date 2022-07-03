import styles from './AddTaskForm.module.css';

import { v4 as uuid } from 'uuid';

import { ReactComponent as Plus } from '../assets/plus.svg';

import { useState } from 'react';

export interface ITask {
  id: string | number;
  name: string;
  isDone: boolean;
}

interface AddTaskFormProps {
  onTaskCreation: (task: ITask) => void;
}

export default function AddTaskForm({ onTaskCreation }: AddTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState('');

  const isNewTaskTextEmpty = newTaskText.length === 0;

  const handleNewTaskTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setNewTaskText(e.target.value);
  };

  function handleNewTaskTextInvalid(e: React.InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('Preencha o campo obrigatório.');
  }

  const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task: ITask = {
      id: uuid(),
      name: newTaskText,
      isDone: false
    };

    onTaskCreation(task);

    setNewTaskText('');
  };

  return (
    <form onSubmit={handleNewTaskSubmit} className={styles.addTaskForm}>
      <input
        name='task'
        className={styles.input}
        type='text'
        value={newTaskText}
        onChange={handleNewTaskTextChange}
        onInvalid={handleNewTaskTextInvalid}
        placeholder='Adicione uma nova tarefa'
        required
      />
      <button
        disabled={isNewTaskTextEmpty}
        className={styles.button}
        type='submit'
      >
        <strong>Criar</strong>
        <Plus />
      </button>
    </form>
  );
}
