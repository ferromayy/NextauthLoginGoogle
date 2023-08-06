"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SignInbtn from "./SignInbtn";
import Image from "next/image";

export default function UseInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Image src={session?.user?.image} width={60} height={60} />
        <div>
          Name:<span>{session?.user?.name}</span>
        </div>
        <div>
          Email:<span>{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignInbtn />;
  }
}
