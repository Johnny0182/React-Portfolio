"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section 
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I  am actively pursuing a degree in 
                <span className="font-medium"> Accounting</span> at 
                <span className="font-medium"> California State University Dominguez Hills</span>, with an anticipated graduation in 
                <span className="font-medium"> June 2025</span>, and I look forward to pursuing my CPA after graduation. I am proficient in 
                <span className="font-medium"> Excel, Word, Access, PowerPoint, Outlook, and VS Code</span>, with extensive experience in file management using 
                <span className="font-medium"> OneDrive, Dropbox, and GoogleDrive</span>. 
            </p>
            <p>
                I have a passion for creating websites and have worked with 
                <span className="font-medium"> HTML, CSS, JavaScript, React, Python, Linux systems, and virtual machines</span>. My professional background includes over six months in Accounts Receivable and 
                Accounts Payable, where I managed financial data and invoices with Excel. I started as an intern and was later hired as Lead 
                <span className="font-medium"> Accounts Receivable/Payable</span> for the finance department.
                Additionally, I have over three years of experience as a security guard at the 
                <span className="font-medium"> Los Angeles Cruise Center</span>.
            </p>
        </motion.section>
    );
}