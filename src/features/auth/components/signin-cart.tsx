import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import { useAuthActions } from '@convex-dev/auth/react';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from '../types';
import { useState } from 'react';

interface SignInProps {
    setState: (state: SignInFlow) => void;
}

export const SignInCart = ({setState}: SignInProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuthActions();

    const handleProviderSignIn = (value: "github" | "google") => {
        signIn(value);
    };

  return (
    <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>
                Log in to continue
            </CardTitle> 
            <CardDescription>
            Use your email or another service to continue
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-0 pb-0">
            <form className="space-y-2.5">
                <Input
                    disabled={false}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Email"
                    type="email"
                    required
                />
                <Input
                    disabled={false}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Button type="submit" className="w-full" size="lg" disabled={false}>
                    Continue
                </Button>
            </form>
            <Separator/>
            <div className="flex flex-col gap-y-2.5">
                <Button
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                    Sign up with Google
                </Button>
                <Button
                    disabled={false}
                    onClick={() => handleProviderSignIn("github")}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FaGithub  className="size-5 absolute top-2.5 left-2.5"/>
                    Sign up with Github
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">
                Don't have an account? <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">Sign up</span>
            </p>
        </CardContent>
    </Card>
  )
}

