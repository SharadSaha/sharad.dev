/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { FiCheckCircle, FiCopy, FiSend } from "react-icons/fi";
import { Input } from "../form/input";
import { Modal } from "../form/modal";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

interface IContactProps {
  onClose: () => void;
}

const Contact = (props: IContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const email = "sahasharad29@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      props.onClose();
      alert("Message Sent");
    });
  };

  return (
    <Modal open setOpen={props.onClose}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-between items-center py-8 gap-4">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 flex gap-2 items-center">
            Contact Me <FiSend size={20} />
          </h2>

          <div className="flex gap-4 items-center">
            <a
              href={`mailto:${email}`}
              className="text-sm text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              {email}
            </a>
            <div className="text-white cursor-pointer">
              {copied ? (
                <>
                  <FiCheckCircle size={16} onClick={handleCopy} />
                </>
              ) : (
                <>
                  <FiCopy size={16} onClick={handleCopy} />
                </>
              )}
            </div>
          </div>
        </div>

        <form
          className="text-white text-sm p-4 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between gap-4">
            <LabelInputContainer>
              <Label htmlFor="name" className="font-light">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter"
                type="text"
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="font-light">
                Email
              </Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                type="email"
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label className="font-light">Message</Label>
            <Input
              id="message"
              placeholder="Enter"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="cursor-pointer text-sm group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>
    </Modal>
  );
};

export default Contact;
