"use client";

import React from 'react';
import Image from 'next/image'; // Correct import for the Image component
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center 
    sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale:1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
            >
            <Image
            src="https://i.imgur.com/W98Mjzh.jpeg"
            alt="Johnny Photo"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-30 w-30 rounded-full
            object-cover border-[0.35rem]
            border-white shadow-xl"
          />  
            </motion.div>


        <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale:1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.1,
                duration: 0.7,
        }}
          >
            🐱‍💻
        </motion.span>
        </div>
      </div>
      <motion.h2
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello, my name is</span>
        <span className="font-bold"> Johnny Leyva.</span> I'm an aspiring{" "}
        <span className="font-bold"> Accountant,</span> pursuing a{" "}
        <span className="font-bold"> Bachelors Degree</span> at
        <span className="font-bold"> California State University Dominguez Hills</span>. I enjoy 
        <span className="font-bold"> building websites</span>,
        <span> reading, and playing video games.</span>


      </motion.h2>
      {/*All buttons below! Link used for regular buttons*/}
      {/*a > is used for download buttons*/}
      <motion.div className="flex flex-col sm:flex-row
      items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" 
        className="group bg-black text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
        hover:bg-blue-700 active:scale-105 transition">
          Contact me here <BsArrowRight 
          className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a 
        className="group bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
        hover:bg-green-600 hover:text-white active:scale-105 transition cursor-pointer border border-black/10"
        href="/Resume.pdf" 
        download
        >
          Download Resume <HiDownload 
          className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        <a 
        className="bg-white p-4 text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-blue-700 hover:text-white
        active:scale-105 transition cursor-pointer border border-black/10"
        href="https://www.linkedin.com/in/johnny-leyva-125259167" target="_blank">
          <BsLinkedin />
        </a>
        <a 
        className="bg-white p-4 text-gray-700 flex items-center
        gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]
        hover:bg-green-600 hover:text-white
        active:scale-105 transition cursor-pointer border border-black/10"
        href="https://github.com/Johnny0182" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
