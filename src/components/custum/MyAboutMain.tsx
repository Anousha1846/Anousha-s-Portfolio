import React from "react";
import Image from "next/image";
import about from "../../../public/about.webp";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

const AboutMain = () => {
  return (
    <main className="grid lg:grid-cols-[10%_80%_10%] lg:py-20 py-10 bg-slate-200 grid-cols-[3%_94%_3%] h-[100%] w-[100%]">
      <section className=""></section>
      <section>
        <div className=" grid lg:grid-cols-[40%_60%] rounded-xl">
          <div className="md-px-8  ">
            <Image
              src={about}
              height={9}
              width={500}
              alt="AboutMain"
              className="sm:px- md:my-2 md:pt-8 lg:pt-2 md:h-[400px] sm:h-[500px] sm:w-[100%] sm:mt-8 h-full w-full p-2 rounded-xl "
            />
          </div>

          <div className="flex flex-col gap-3 sm:pt-2 py-6 xl:py-10 text-left md:py-8 px-6  ">
            <h1 className="font-bold text-3xl text-sky-700 animate-pulse ">
              Anousha Asadullah
            </h1>

            <p className="font-normal md:text-lg lg:text-base xl:text-lg text-md text-gray-700">
              As a skilled web developer, I bring a strong foundation in HTML,
              CSS, and JavaScript, combined with expertise in Bootstrap,
              Tailwind, and Next.js. My proficiency extends to advanced
              frameworks and libraries, including TypeScript, enabling me to
              create responsive, visually appealing, and dynamic web
              applications. My focus on detail and best practices allows me to
              develop user-centered, efficient interfaces tailored to modern web
              standards. Continuously expanding my skill set, I am committed to
              delivering exceptional, scalable web solutions that push the
              boundaries of design and functionality.
            </p>
            <h3 className="flex gap-3 text-xl text-sky-700">
              Visit My Sites:
              <SocialIcon url="https://github.com/Anousha1846" />
              <SocialIcon url="https://www.linkedin.com/feed/" />
            </h3>
          </div>
        </div>
      </section>
      <section className=""></section>
      
    </main>
  );
};

export default AboutMain;