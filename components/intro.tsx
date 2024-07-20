"use client";

import React from 'react';
import Image from 'next/image'; // Correct import for the Image component
import { motion } from "framer-motion";

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
      

      <p className="mb-3">
      I am currently pursuing a degree in 
      <span className="font-medium"> Accounting</span>, and am expected to graduate in 
      <span className="font-medium"> June 2025</span>. I currently work as a Security Guard at the 
      <span className="font-medium"> Port of Los Angeles</span>, where I assist in screening over 3,000 passengers everyday. 
      I am proficient with 
      <span className="font-medium"> Microsoft Excel, Word, PowerPoint, Access,</span> and have extensive experience with file management using 
      <span className="font-medium"> OneDrive</span>. I also have experience in 
      <span className="font-medium"> Python, React, HTML, CSS, and JavaScript</span>, along with a solid understanding of 
      <span className="font-medium"> Linux systems/Virtual Machines.</span> My experience with programming began in high school through a
      <span className="font-medium"> Cyber Patriots Team,</span> where I developed valuable cybersecurity skills.
      I got back into programming during an accounting internship last year where I created an invoice generator and 
      a bulk Word to PDF converter using Python. These projects noticeably boosted my efficiency and I quickly moved into a leadership role. 
      I've also built websites for friends and family. Looking ahead, I'm eager to leverage my diverse skill set in any work environment and am committed to pursuing my CPA license after graduation.
      </p>
    </section>
  );
}
