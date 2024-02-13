import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import SignIn from "./components/SignIn";
import TodoService from "./components/TodoService";


export default async function Home() {
  //fetching data from API to home page

  const tasks = await getAllTodos();
 // console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col  gap-4">
        <div className=" flex justify-end">
          <SignIn />
        </div>
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      {/* sending data in todo list */}
      <TodoList tasks={tasks} />
      <TodoService/>
    </main>
  );
}
