// import { useEffect, useState } from 'react';
// import { createTodo, getTodos, updateTodo, deleteTodo } from '../lib/todoService';

// interface NewTodoForm {
//   task: string;
// }

// export default function Home() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodoForm, setNewTodoForm] = useState<NewTodoForm>({ task: '' });

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async (): Promise<void> => {
//     const { data, error } = await getTodos();

//     if (error) {
//       console.error('Error fetching todos:', error.message);
//     } else {
//       setTodos(data || []);
//     }
//   };

//   const handleCreateTodo = async (): Promise<void> => {
//     if (newTodoForm.task.trim() !== '') {
//       const { error } = await createTodo({ ...newTodoForm, is_complete: false, inserted_at: new Date() });

//       if (error) {
//         console.error('Error creating todo:', error.message);
//       } else {
//         fetchTodos();
//         setNewTodoForm({ task: '' });
//       }
//     }
//   };

//   const handleUpdateTodo = async (id: number, updates: Partial<Todo>): Promise<void> => {
//     const { error } = await updateTodo(id, updates);

//     if (error) {
//       console.error('Error updating todo:', error.message);
//     } else {
//       fetchTodos();
//     }
//   };

//   const handleDeleteTodo = async (id: number): Promise<void> => {
//     const { error } = await deleteTodo(id);

//     if (error) {
//       console.error('Error deleting todo:', error.message);
//     } else {
//       fetchTodos();
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.task}
//             <button onClick={() => handleUpdateTodo(todo.id, { is_complete: !todo.is_complete })}>
//               {todo.is_complete ? 'Undo' : 'Complete'}
//             </button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter task"
//           value={newTodoForm.task}
//           onChange={(e) => setNewTodoForm({ task: e.target.value })}
//         />
//         <button onClick={handleCreateTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// }