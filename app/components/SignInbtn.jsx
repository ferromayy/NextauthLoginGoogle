"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInbtn() {
  return (
    <button
      onClick={() => signIn("google")}
      className=" flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image
        src="/Users/fernandaromayisaias/Desktop/nextAuth/my-app/public/IMG_1298.JPG"
        height={30}
        width={30}
      />{" "}
      <span className=" bg-blue-500 text-white px-4 py-3">
        Sign in with google
      </span>
    </button>
  );
}
