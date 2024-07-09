"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/public/Icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/Icon/EyeSlashFilledIcon";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/modules/Loader";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.ok) {
      toast.success(`${email} Logged In...`);
      router.push("/");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-96">
        <div className="flex flex-col gap-7 w-full p-6 shadow-lg rounded-xl">
          <span className="text-center font-bold text-gray-500 text-2xl">
            SignIn Form
          </span>
          <Input
            variant="faded"
            value={email}
            onChange={(e) => setEmial(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            variant="faded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Button
            size="lg"
            variant="shadow"
            color="secondary"
            onClick={handleSignin}
          >
            Signin
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm mt-5">
          <span className="text-gray-500">
            If you do not have an account register?
          </span>
          <Link
            href="/signup"
            className="text-violet-800 underline font-medium"
          >
            {loading ? <Loader /> : "SignUp"}
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInPage;
