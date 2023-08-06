"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { status } = useSession();
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link href={"/"} className="font-bold text-lg text-blue-700">
        GTcoding
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
