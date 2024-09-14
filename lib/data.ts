import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuHeartHandshake, LuSprayCan, LuSchool2, LuPersonStanding, LuCalculator } from "react-icons/lu";
import cableImg from "@/public/cable.png";
import invoiceImg from "@/public/invoice.png";
import takeoutImg from "@/public/takeout.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Accounts Receivable Specialist",
    company: "American Guard Services Inc.",
    location: "Gardena, CA",
    description: `
    Experience with using financial software and tools, including Oracle, NetSuite, and Excel. Utilize Outlook/OneDrive daily for efficient communication and document management. Experienced with the accounts receivable process, 
    including sending invoices to clients via email, following up on outstanding payments through phone calls, and ensuring timely collection of funds owed.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
  {
    title: "Billing and Accounts Receivable",
    company: "WestCal Academy",
    location: "Long Beach, CA",
    description: `
      Utilize Outlook and OneDrive daily for efficient communication and document management. Develop Excel spreadsheets for budget creation, management, and planning. Manage hundreds of monthly invoices, ensuring accurate and timely billing.
    `,
    icon: React.createElement(LuCalculator),
    date: "March 2024 - Present",
  },
  {
    title: "Maritime Security Guard",
    company: "American Guard Services Inc.",
    location: "Port of Los Angeles",
    description: `
      Operate X-Ray Machines to scan bags, belongings, and items carried by guests.
      Interact courteously and professionally with guests undergoing the security screening process.
      Collaborate with law enforcement and port officials to maintain a secure environment and adhere to maritime security regulations.
    `,
    icon: React.createElement(LuPersonStanding),
    date: "January 2021 - July 2024",
  },
  {
    title: "Summer School Instructor Aide",
    company: "St. Albert the Great School",
    location: "Rancho Dominguez, CA",
    description: `
      Provided individual assistance to students with learning activities and assignments.
      Assisted the lead teacher with classroom control, grading papers, and aided with any other tasks required by the instructor.
      Assisted in preparing and setting up educational materials and activities.
    `,
    icon: React.createElement(LuSchool2),
    date: "August 2018 - December 2023",
  },
  {
    title: "Custodian",
    company: "Amazon Warehouse",
    location: "Torrance, CA",
    description: `
      Efficiently drove and operated a floor scrubber to maintain the cleanliness of large warehouse floors, ensuring a tidy and safe working environment for employees and visitors.
      Performed thorough cleaning/sanitation of restrooms.
      Followed and established safety guidelines and procedures while performing janitorial duties.
    `,
    icon: React.createElement(LuSprayCan),
    date: "March 2019 - January 2021",
  },
  {
    title: "Job Coach",
    company: "Aim Higher Inc.",
    location: "West Covina, CA",
    description: `
      Provided personalized support to 3-4 clients with special needs weekly, offering transportation to appointments and job interviews.
      Accompanied clients to their workplace and assisted with the training process until they could independently fulfill job requirements.
      Conducted interview preparation sessions, to help clients enhance their success in job interviews.
    `,
    icon: React.createElement(LuHeartHandshake),
    date: "October 2018 - March 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Cable Construction",
    description: `
      A website designed for a cable construction company. Built with HTML, CSS, and JavaScript.
    `,
    tags: ["HTML", "CSS", "JavaScript", "NodeJS"],
    imageUrl: cableImg,
    link: "https://github.com/Johnny0182"
  },
  {
    title: "Easy Invoicing",
    description: `
      A streamlined invoicing tool that simplifies billing processes for small businesses. Developed with Python and Flask.
    `,
    tags: ["Python", "Excel", "Flask", "Outlook"],
    imageUrl: invoiceImg,
    link: "https://github.com/Johnny0182/invoice-generator"
  },
  {
    title: "Takeout & Delivery App",
    description: `
      A mobile-friendly app that helps users order takeout from local restaurants. Created with React and SQL.
    `,
    tags: ["React", "Next.js", "SQL", "Tailwind", "MongoDB"],
    imageUrl: takeoutImg,
    link: "https://github.com/Johnny0182"
  },
] as const;

export const skillsData = [
  "Microsoft Excel",
  "NetSuite",
  "Oracle",
  "Python",
  "Outlook",
  "OneDrive",
  "Microsoft Access",
  "MITC",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Adobe Premiere Pro",
  "After Effects",
  "Photoshop",
  "Cap Cut",
  "Canva",
  "Illustrator",
] as const;
