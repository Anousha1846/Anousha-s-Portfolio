"use client"

import { SkillsHover } from "../ui/SkillsHover";

export function MyExpertise() {
  return (
    <div className="max-w-5xl mx-auto sm:px-8 px-2">
      <h1 className="m-4 pt-16 text-sky-900 font-extrabold text-center text-5xl">SKILLS</h1>
      <SkillsHover items={skills} />
    </div>
  );
}
export const skills = [
  {
    title: "HTML",
    description:
      "HTML is the foundation of web development, used to structure and present content on the web. It organizes text, images, links, and multimedia into a webpage. HTML interacts with CSS for styling and JavaScript for dynamic behavior, enabling user-friendly, interactive, and visually appealing web experiences.",
    link: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    title: "Next.Js",
    description:
      "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.",
    link: "https://nextjs.org/",
  },
  {
    title: "TYPESCRIPT ",
    description:
      "TypeScript programming language that adds extra functionality to JavaScript. TypeScript adds type definitions to JavaScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "JAVASCRIPT",
    description:
      "JavaScript (JS) is a programming language that developers use to create interactive web pages .JavaScript is a core technology of the World Wide Web that adds interactivity to static web pages",
      link: "https://www.w3schools.com/whatis/whatis_js.asp",
    },
  {
    title: "BOOTSTRAP CSS",
    description:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version of Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    title: "TAILWIND CSS",
    description:
      "Tailwind CSS is used to speed up the development process by writing less code. It comes with a design system that helps maintain consistency across various design requirements ",
    link: "https://tailwindcss.com/",
  },
];

export default MyExpertise;
