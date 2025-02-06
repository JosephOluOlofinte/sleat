import webDesign1 from "../assets/img/web-design-1.png";
import webDesign2 from "../assets/img/web-design-2.png";
import webDesign3 from "../assets/img/web-design-3.png";
import uiDesign1 from "../assets/img/ui-design-1.png";
import uiDesign2 from "../assets/img/ui-design-2.png";
import uiDesign3 from "../assets/img/ui-design-3.png";
import mobileApp1 from "../assets/img/mobile-app-1.png";
import mobileApp2 from "../assets/img/mobile-app-2.png";
import mobileApp3 from "../assets/img/mobile-app-3.png";
import graphicDesign1 from "../assets/img/graphic-design-1.png";
import graphicDesign2 from "../assets/img/graphic-design-2.png";
import graphicDesign3 from "../assets/img/graphic-design-3.png";
import frontendDev1 from "../assets/img/fronted-dev-1.png";
import frontendDev2 from "../assets/img/fronted-dev-2.png";
import frontendDev3 from "../assets/img/fronted-dev-3.png";
export interface CurriculumItem {
    id: number;
    stage: string;
    desc: string;
  }
  
  export interface dataItem {
    id: number;
    title: string;
    desc: string;
    courseUrl: string;
    images: string[];
    duration: string;
    durationUrl: string;
    level: string;
    levelUrl: string;
    instructor: string;
    instructorUrl: string;
    curriculum: CurriculumItem[];
  }

export const courseData: dataItem[] = [
    
    {
        id: 1,
        title: "Web Design Fundamentals",
        desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        courseUrl: "#",
        images: [webDesign1, webDesign2, webDesign3],
        duration: "4 Weeks",
        durationUrl: "",
        level: "Beginner",
        levelUrl: "",
        instructor: "John Smith",
        instructorUrl: "",
        curriculum: [
            {id: 1, stage: "01", desc: "Introduction to HTML"},
            {id: 2, stage: "02", desc: "Styling with CSS"},
            {id: 3, stage: "03", desc: "Introduction to Responsive Design"},
            {id: 4, stage: "04", desc: "Design Principles for Web"},
            {id: 5, stage: "05", desc: "Building a Basic Website"},
        ]
    },

    {
        id: 2,
        title: "UI/UX Design",
        desc: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        courseUrl: "#",
        images: [uiDesign1, uiDesign2, uiDesign3],
        duration: "6 Weeks",
        durationUrl: "",
        level: "Intermediate",
        levelUrl: "",
        instructor: "Emily Johnson",
        instructorUrl: "",
        curriculum: [
            {id: 1, stage: "01", desc: "Introduction to UI/UX Design"},
            {id: 2, stage: "02", desc: "User Research and Personas"},
            {id: 3, stage: "03", desc: "Wireframing and Prototyping"},
            {id: 4, stage: "04", desc: "Visual Design and Branding"},
            {id: 5, stage: "05", desc: "Usability Testing and Iteration"},
        ]
    },

    {
        id: 3,
        title: "Mobile App Development",
        desc: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        courseUrl: "#",
        images: [mobileApp1, mobileApp2, mobileApp3],
        duration: "8 Weeks",
        durationUrl: "",
        level: "Intermediate",
        levelUrl: "",
        instructor: "David Brown",
        instructorUrl: "",
        curriculum: [
            {id: 1, stage: "01", desc: "Introduction to Mobile App Development"},
            {id: 2, stage: "02", desc: "Fundamentals of Swift Programming (iOS)"},
            {id: 3, stage: "03", desc: "Fundamentals of Kotlin Programming (Android)"},
            {id: 4, stage: "04", desc: "Building User Interfaces"},
            {id: 5, stage: "05", desc: "App Deployment and Testing"},
        ]
    },

    {
        id: 4,
        title: "Graphic Design for Beginners",
        desc: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        courseUrl: "#",
        images: [graphicDesign1, graphicDesign2, graphicDesign3],
        duration: "10 Weeks",
        durationUrl: "",
        level: "Beginner",
        levelUrl: "",
        instructor: "Sarah Thompson",
        instructorUrl: "",
        curriculum: [
            {id: 1, stage: "01", desc: "Introduction to Graphic Design"},
            {id: 2, stage: "02", desc: "Typography and Color Theory"},
            {id: 3, stage: "03", desc: "Layout Design and Composition"},
            {id: 4, stage: "04", desc: "Image Editing and Manipulation"},
            {id: 5, stage: "05", desc: "Designing for Print and Digital Media"},
        ]
    },

    {
        id: 5,
        title: "Front-End Web Development",
        desc: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        courseUrl: "#",
        images: [frontendDev1, frontendDev2, frontendDev3],
        duration: "10 Weeks",
        durationUrl: "",
        level: "Intermediate",
        levelUrl: "",
        instructor: "Michael Adams",
        instructorUrl: "",
        curriculum: [
            {id: 1, stage: "01", desc: "HTML Fundamentals"},
            {id: 2, stage: "02", desc: "CSS Styling and Layouts"},
            {id: 3, stage: "03", desc: "JavaScript Basics"},
            {id: 4, stage: "04", desc: "Building Responsive Websites"},
            {id: 5, stage: "05", desc: "Introduction to Bootstrap and React"},
        ]
    },

    
]