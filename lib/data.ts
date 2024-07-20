import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Summer School Instructor Aide",
    location: "Rancho Dominguez, CA",
    description: `
      Provided individual assistance to students with learning activities and assignments.
      Assisted the lead teacher with classroom control, grading papers, and aiding with any other tasks required by the instructor.
      Prepared and set up educational materials and activities, ensuring equipment was safely arranged, ready for use, and properly put away.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - Present",
  },
  {
    title: "Security Guard",
    location: "Port of Los Angeles",
    description: `
      Operate X-Ray Machines to scan bags, belongings, and items carried by guests.
      Monitor and patrol assigned zones, promptly responding to security breaches and suspicious activities.
      Interact courteously and professionally with guests undergoing the security screening process, explaining procedures and providing assistance as needed.
      Collaborate with law enforcement and port officials to maintain a secure environment and adhere to maritime security regulations.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - Present",
  },
  {
    title: "Custodian",
    location: "Torrance, CA",
    description: `
      Efficiently drove and operated a floor scrubber to maintain the cleanliness of large warehouse floors, ensuring a tidy and safe working environment for employees and visitors.
      Performed thorough cleaning/sanitation of restrooms and regularly emptied and replaced trash cans throughout the facility.
      Followed established safety guidelines and procedures while performing janitorial duties, prioritizing safety for coworkers and others in a busy warehouse setting.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "March 2019 - January 2021",
  },
  {
    title: "Job Coach",
    location: "West Covina, CA",
    description: `
      Provided personalized support to 3-4 clients with special needs weekly, offering transportation to appointments and job interviews.
      Accompanied clients to their workplace and assisted with the training process until they could independently fulfill job requirements.
      Conducted interview preparation sessions, helping clients with effective communication strategies and confidence-building techniques.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "October 2018 - March 2019",
  },
  {
    title: "Campaign Canvasser",
    location: "South Gate, CA",
    description: `
      Conducted phone calls to registered voters within District 44 to inform them about Nanette Diaz Barragán's candidacy and persuade them to vote for her in the upcoming election.
      Engaged with potential voters in meaningful conversations, addressing their concerns, and highlighting Nanette Diaz Barragán's qualifications.
      Organized voter lists, utilized electronic devices, and efficiently updated people on the upcoming election.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "January 2016 - March 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Sample Project 1",
    description: `
      Description of your project goes here.
    `,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "path/to/your/project1image.png",
  },
  {
    title: "Sample Project 2",
    description: `
      Description of your project goes here.
    `,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "path/to/your/project2image.png",
  },
  {
    title: "Sample Project 3",
    description: `
      Description of your project goes here.
    `,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "path/to/your/project3image.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Microsoft Excel",
  "Outlook",
  "OneDrive",
  "Microsoft Access",
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
