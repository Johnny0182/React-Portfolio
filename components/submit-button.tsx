import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
  return (
    <button type="submit" 
    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-950
    text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 
    active:scale-105 hover:bg-blue-700 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-blue-700 dark:bg-white dark:bg-opacity-10"
    disabled={pending}
    >{
        pending ? (
            <div className="h-5 w-5 animate-spin rounded-full 
            border-b-2 border-white"></div>
        ) : (
            <>
            Submit{""} 
            <FaPaperPlane
            className="text-xs opacity-80 transition-all group-hover:tanslate-x-1
            group-hover:-translate-y-1" />{""}
            </>
        )}
    </button>
  );
}
