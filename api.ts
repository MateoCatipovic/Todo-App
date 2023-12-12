import { todo } from "node:test";
import { ITask } from "./types/tasks";

const baseURL = 'http://localhost:3001';

//asink. funk. for fetching all tasks in todo list

//getAllTodos is declared as a Promise of type ITask[], but it is assigned an asynchronous function. This syntax is incorrect because you are trying to assign a function to a variable that is supposed to be a Promise.
//export const getAllTodos: Promise<ITask[]>  = async () =>

//async function that returns a Promise of type ITask[].
export const getAllTodos = async (): Promise<ITask[]> => {
    //fetch funk. vraca dohvacene podatke u obliku Promisa zato možemo staviti da nam funkcija vraća tip Promise (objekt Response ako je uspjesno ili objet Error ako nije uspijesno kao i u obicnom Promisu)
    const res = await fetch(`${baseURL}/tasks`, {cache: 'no-store'}); //to fetch fresh data on every fetch request, use the cache: 'no-store' option
    //console.log(res);
    //This line reads the response body as JSON. (converts Promise -> JSON)
    const todos = await res.json();
    //console.log(todos);
    return todos;
} 

export const addTodo = async (todo: ITask): Promise<ITask> => {
    // Send a POST request to the specified URL
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(todo) // body data type must match "Content-Type" header
    })
    const newTodo = await res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
    // Send a POST request to the specified URL
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(todo) // body data type must match "Content-Type" header
    })
    const newTodo = await res.json();
    return newTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    // Send a POST request to the specified URL
    const res = await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE' })
}