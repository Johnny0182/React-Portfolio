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
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
            className="h-24 w-24 rounded-full
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
            ✌🏻
        </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Johnny Leyva.</span> I'm an aspiring{" "}
        <span className="font-bold"> Accountant,</span> pursuing a Bachelors Degree at{" "}
        <span className="font-bold">California State Dominguez Hills</span>. I enjoy
        building <span className="italic">websites, applications, and doing anything computer related</span>.
      </motion.h1>
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
        className="bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full">
          Contact me here <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center
        gap-2 rounded-full">
          Download Resume <HiDownload />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center
        gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center
        gap-2 text-[1.35rem] rounded-full">
          <FaGithubSquare />
        </a>
      </motion.div>




















      <p className="mb-3">
      I love working in teams and am eager to contribute to a workplace where I can make a meaningful impact. I am actively pursuing a degree in 
    <span className="font-medium"> Accounting</span> at 
    <span className="font-medium"> California State University Dominguez Hills</span>, with an anticipated graduation in 
    <span className="font-medium"> June 2025</span>, and I look forward to pursuing my CPA after graduation. Currently, I work as a maritime security guard at the 
    <span className="font-medium"> Port of Los Angeles</span>, screening over 3,000 passengers daily. I am proficient in 
    <span className="font-medium"> Excel, Word, Access, PowerPoint, Outlook, and VS Code</span>, with extensive experience in file management using 
    <span className="font-medium"> OneDrive, Dropbox, and Google Drive</span>. I have a passion for creating websites and have worked with 
    <span className="font-medium"> HTML, CSS, JavaScript, React, Python, Linux systems, and virtual machines</span>. My professional background includes over six months in Accounts Receivable and 
    Accounts Payable, where I managed financial data and invoices with Excel. I started as an intern and was later hired as Lead Accounts Receivable/Payable for the finance department.
    Additionally, I have over three years of experience as a security guard at the 
    Los Angeles Cruise Center, where I developed strong interpersonal skills. My experience also includes working in educational settings and supporting adults with special needs.
      </p>

    </section>
  );
}
