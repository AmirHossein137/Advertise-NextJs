"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/public/Icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/Icon/EyeSlashFilledIcon";
import Loader from "@/modules/Loader";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const result = await res.json();
    console.log(result);
    if (result.message) {
      toast.success(result.message);
      router.push("/");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-96">
        <div className="flex flex-col gap-7 w-full p-6 shadow-lg rounded-xl">
          <span className="text-center font-bold text-gray-500 text-2xl">
            Signup Form
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
            onClick={handleSignup}
          >
            {loading ? <Loader /> : "Signup"}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignupPage;
