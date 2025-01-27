"use client";
import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./Forms/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "plus" | "edit" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "plus" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "plus"
      ? "bg-lamaYellow"
      : type === "edit"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

      const [open, setOpen] = useState(false);

  const Form = () => {
    return(
      type==="delete" && id?(
        <form action="" className="flex flex-col p-4 gap-4">
          <span className="text-center font-medium">Are you sure you want to delete this {table}?</span>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md broder-none">Delete</button>
        </form>
      ):(
        <TeacherForm type="create" data={data}/>
      ))
  };

  return (
    <>
      <button
        className={`${size} ${bgColor} flex items-center justify-center rounded-full`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="icon" width={16} height={16} />
      </button>
      {
        open &&(
          <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md relative md:w-[70%] w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              <Form/>
              <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
                <Image src="/close.png" alt="close" width={14} height={14}/>
              </div>
            </div>
          </div>
        )
      }

    </>
  );
};

export default FormModal;
