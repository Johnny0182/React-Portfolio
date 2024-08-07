"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } 
from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";



export default function Experience() {
    const { ref } = useSectionInView("Experience");
  return ( 
  <section id="experience" ref={ref}>
    
    <SectionHeading>My Experience</SectionHeading>
    
    <VerticalTimeline>
        {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
            <VerticalTimelineElement
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                }}
                >
            <h3>
            {item.title}
            </h3>
            <p>
            {item.location}
            </p>
            <p>
            {item.description}
            </p>
            </VerticalTimelineElement>
        </React.Fragment>
        ))}
    </VerticalTimeline>
    </section>
  );
}
