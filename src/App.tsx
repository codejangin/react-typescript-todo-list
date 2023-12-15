import { FC, useState } from 'react'
import './App.css'
import { TodoList, ITask } from './components/TodoList'
import styles from './components/TodoList.module.css'

export const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    setTodoList([...todoList, { taskName: task, deadline: deadline }])
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList( 
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete
      })
    )
  }

  return (
    <div className="App">
      <div className={styles.header}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className={styles.todoList}>
        {todoList.map((task: ITask, key: number) => {
          return <TodoList key={key} task={task} complete={completeTask} />
        })}
      </div>
    </div>
  )
}
