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
                I recently graduated with a degree in
                <span className="font-medium"> Accounting</span> from
                <span className="font-medium"> California State University, Dominguez Hills</span>, and I am now actively pursuing my
                <span className="font-medium"> CPA license.</span> I am proficient in
                <span className="font-medium"> Excel, NetSuite, Oracle, Word, Access, PowerPoint, and Outlook</span>; with extensive experience in file management using
                <span className="font-medium"> OneDrive, Dropbox, and Google Drive</span>.
            </p>
            <p>
                I enjoy creating websites and have hands-on experience with
                <span className="font-medium"> HTML, CSS, JavaScript, React, and Python</span>. I’m especially interested in
                <span className="font-medium"> systems integration</span>, particularly in streamlining financial and accounting tools to improve efficiency.
                I’ve transitioned into the accounting field, advancing from a security role into an
                <span className="font-medium"> Accounts Receivable</span> position at the same organization.
                Additionally, I serve remotely as a
                <span className="font-medium"> Financial Assistant to the Vice President</span> at
                <span className="font-medium"> WestCal Academy</span>, a nonprofit organization.
            </p>
        </motion.section>
    );
}