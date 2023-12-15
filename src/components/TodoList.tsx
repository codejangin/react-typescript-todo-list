import React from 'react'
import styles from './TodoList.module.css'

export interface ITask {
  taskName: string
  deadline: number
}

interface ITodo {
  task: ITask
  complete(taskToDelete: string): void
}

export const TodoList = ({ task, complete }: ITodo) => {
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          complete(task.taskName)
        }}
      >
        X
      </button>
    </div>
  )
}
