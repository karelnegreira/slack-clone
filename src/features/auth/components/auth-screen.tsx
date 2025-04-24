"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCart } from "./signin-cart";
import { SignUpCart } from "./signup-cart";


export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-[420px]">
            {state == 'signIn' ? <SignInCart setState={setState}/> : <SignUpCart setState={setState}/>}
        </div>
    </div>
  )
}
