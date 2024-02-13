//if you render this component on client side it will display an error because it does not have process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",

import { authOptions } from "@/configurations/auth";
import { getSupabase } from "@/supabase";
import { getServerSession } from "next-auth/next";

import React from "react";

const TodoService = async () => {
  const session =  await getServerSession(authOptions);
  if(!session){
    return Error;
  }
  console.log(session.user.id);
  //const supabase = await getSupabase();
  //  console.log(supabase);

  // if (supabase) {
  //   const { data, error } = await supabase.from("todos").select("*");
  //   //console.log(data);
  //   return <div>{JSON.stringify(data)}</div>;
  // }

  // if (supabase) {
  //   const { data, error } = await supabase
  //     .from("todos")
  //     .insert({user_id: 'c39a32fb-14b0-412f-84f0-767a5958830a', task: "Denmark" })
  //     .select("*");

  //   if (error) {
  //     console.error("Error inserting data into Supabase:", error.message);
  //     // Handle the error
  //   } else {
  //     console.log("Data inserted into Supabase:", data);
  //     // Handle the successful insertion if needed
  //   }
  // }
};

export default TodoService;

// interface Todo {
//   id: number;
//   user_id: string;
//   task: string;
//   is_complete: boolean;
//   inserted_at: Date;
// }

// // // Create
// // export const createTodo = async (newTodo: Omit<Todo, 'id'>): Promise<PostgrestResponse<Todo>> => {
// //   const { data, error } = await supabase.from<Todo>('todos').insert([newTodo]);

// //   return { data, error };
// // };

// // Read
// export const getTodos = async ():  => {
//   const { data, error } = await supabase.from('todos').select('*');

//   return { data, error };
// };

// // Update
// export const updateTodo = async (id: number, updates: Partial<Todo>): Promise<PostgrestResponse<Todo>> => {
//   const { data, error } = await supabase.from<Todo>('todos').update(updates).eq('id', id);

//   return { data, error };
// };

// // Delete
// export const deleteTodo = async (id: number): Promise<PostgrestResponse<Todo>> => {
//   const { data, error } = await supabase.from<Todo>('todos').delete().eq('id', id);

//   return { data, error };
// };
