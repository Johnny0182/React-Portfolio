"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section 
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 
            sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I  am actively pursuing a degree in 
                <span className="font-medium"> Accounting</span> at 
                <span className="font-medium"> California State University, Dominguez Hills</span>, with an anticipated graduation in 
                <span className="font-medium"> June 2025</span>, and I look forward to pursuing my CPA after graduation. I am proficient in 
                <span className="font-medium"> Excel, NetSuite, Oracle, Word, Access, PowerPoint, and Outlook</span>; with extensive experience in file management using 
                <span className="font-medium"> OneDrive, Dropbox, and Google Drive</span>. 
            </p>
            <p>
                I love creating websites and have worked with
                <span className="font-medium"> HTML, CSS, JavaScript, React, Python, Linux systems, and virtual machines</span>. My professional background includes over six months in Accounts Receivable and 
                Accounts Payable, where I manage financial data and invoices with Excel. Additionally, I have over three years of experience as a security guard at the 
                <span className="font-medium"> Los Angeles Cruise Center</span>. I've now transitioned from security to Accounting, managing Accounts Receivable at my former employer while simultaneously working 
                an Accounting internship at WestCal Academy. 
            </p>
        </motion.section>
    );
}