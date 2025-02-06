import webDesign1 from "../assets/img/web-design-1.png";
import webDesign2 from "../assets/img/web-design-2.png";
import webDesign3 from "../assets/img/web-design-3.png";
// import uiDesign1 from "../assets/img/ui-design-1.png";
// import uiDesign2 from "../assets/img/ui-design-2.png";
// import uiDesign3 from "../assets/img/ui-design-3.png";
// import mobileApp1 from "../assets/img/mobile-app-1.png";
// import mobileApp2 from "../assets/img/mobile-app-2.png";
// import mobileApp3 from "../assets/img/mobile-app-3.png";
// import graphicDesign1 from "../assets/img/graphic-design-1.png";
// import graphicDesign2 from "../assets/img/graphic-design-2.png";
// import graphicDesign3 from "../assets/img/graphic-design-3.png";
// import frontendDev1 from "../assets/img/fronted-dev-1.png";
// import frontendDev2 from "../assets/img/fronted-dev-2.png";
// import frontendDev3 from "../assets/img/fronted-dev-3.png";
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

    
]