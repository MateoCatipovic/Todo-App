"use client"
import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'
import { useSession } from 'next-auth/react'

interface TodoListProps{
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Please log in to see to do list!</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
      

    </tbody>
  </table>
</div>
  )
}

export default TodoList