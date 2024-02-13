"use client";
import { ITask } from "@/types/tasks";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import { FormEventHandler, use, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setopenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setopenModalDelete] = useState<boolean>(false);
  //we put task.text as initial state of tasktoEdit because there are already text
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const router = useRouter();

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    //we use preventDefault to manually handle submit.
    console.log("submit1");
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    console.log("submit2");
    //closing module after submiting newTask
    setopenModalEdit(false);
    //refreshing router to get new updated Tasks list
    router.refresh();
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     handleSubmitEditTodo(e);
  //   }
  // };

  const handleSubmitDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setopenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <CiEdit
          onClick={() => setopenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setopenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <button
              //  ako imamo više botuna unutar FORME bitno ih je specifirati (type="button")
              //  ako nam nisu  botun koji submita FORMU ili (type="submit")
              //  kako bi pritiskom tipke Enter mogli submitat formu i da ne koristimo botun sa (type="submit")

              type="button"
              onClick={(e) => {
                e.preventDefault();
                setopenModalEdit(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            {/* modal-action is class inn daisyUI  */}
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                // onKeyDown={handleKeyDown}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className=" hover:text-white hover:bg-blue-500 btn"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <GoTrash
          onClick={() => setopenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setopenModalDelete}>
          <h3 className="font-bold text-lg">Delete task?</h3>
          <button
            onClick={() => setopenModalDelete(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {/* modal-action is class inn daisyUI  */}
          <div className="modal-action flex items-center">
            <p className="w-full">{taskToEdit}</p>
            <button
              onClick={() => handleSubmitDeleteTodo(task.id)}
              className="hover:text-white hover:bg-red-500 btn"
            >
              DELETE
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
