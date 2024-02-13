"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignIn = () => {
  //izvlacimo data iz useSession i mijenjamo ime u sesion
  //in case of success, data will be Session.
  const { data: session } = useSession();

  //if session is existed and has a user, session is authenticated
  if (session && session.user) {
    return (
      <div className="flex items-center gap-4 ml-auto">
        <p className="text-[#1e26ff]">{session.user.name}</p>

        <button onClick={() => signOut()} className="btn btn-ghost">
          Sign out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="btn btn-ghost">
      Sign in
    </button>
  );
};

export default SignIn;
