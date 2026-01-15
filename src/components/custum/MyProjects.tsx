// import React from "react";
// import { FocusCards } from "../ui/FocusCards";

// export default function ProjectsPage() {

//   const cards = [
//     {
//       title: "Grain-DB",
//       description: "Grain-DB is a lightweight database engine written in C that demonstrates core DBMS internals, including command parsing, execution flow, modular components, and file-based persistent storage, emphasizing clarity, correctness, and low-level system design principles.",
//       githubLink: "https://github.com/Anousha1846/GrainDB-2.0",
//       liveLink: "https://github.com/Anousha1846/GrainDB-2.0",
//     },
//     {
//       title: "EliteWheels",
//       description: "EliteWheels is a user-friendly, seamless Rent-A-Car platform offering easy vehicle bookings, secure payments, and efficient customer support, designed to provide a reliable and convenient experience for car rentals.",
//       githubLink: "https://github.com/Anousha1846/Elite_Wheels",
//       liveLink: "https://elite-wheels-01.vercel.app/",
//     },
//     {
//         title: "Dynamic Editable Resume Builder",
//         description: "A user-friendly resume builder offering dynamic editing and instant downloading. Easily customize fields like contact info, education, and experience to create a polished, professional resume tailored to your needs.",
//         githubLink: "https://github.com/Anousha1846/Updated-Resume-Builder-5",
//         liveLink: "https://updated-resume-builder-5.vercel.app/",
//       },
//         {
//         title: "Anousha's food blog",
//         description: "A user-friendly resume builder offering dynamic editing and instant downloading. Easily customize fields like contact info, education, and experience to create a polished, professional resume tailored to your needs.",
//         githubLink: "https://github.com/Anousha1846/Anousha-s-Food-Blog",
//         liveLink: "https://anousha-s-food-blog-7cle-l8vwzw069-anousha1846s-projects.vercel.app/",
//       },
//     {
//       title: "DWELL-House Website",
//       description: "DWELL-house is a sleek, responsive platform showcasing residential architecture projects. Built with Next.js and Tailwind CSS, it offers an intuitive layout, highlighting project details and providing a seamless, visually engaging browsing experience.",
//       githubLink: "https://github.com/Anousha1846/DWEll-house-website",
//       liveLink: "https://anousha1846.github.io/DWEll-house-website",
//     },
//     {
//       title: "ElectoMart",
//       description: "Electromart is a sleek eCommerce platform built with Next.js, TypeScript, and custom CSS, offering a responsive, intuitive interface with dynamic product listings, seamless navigation, and optimized shopping experience for electronics.",
//       githubLink: "https://github.com/Anousha1846/ElectroMart",
//       liveLink: "https://electro-mart-topaz.vercel.app/",
//     },
//     {
//         title: "Royal Rides",
//         description: "Royal Rides is a simple, elegant website built using only HTML and CSS. It showcases sleek design, emphasizing user-friendly navigation, presenting services, and enhancing the experience of exploring luxurious ride options.",
//         githubLink: "https://github.com/Anousha1846/RoyalRides",
//         liveLink: "https://anousha1846.github.io/RoyalRides/",
//       },


//   ];

//   return (
//     <main>
//     <div className="sm:p-8 p-4 sm:pb-20 bg-slate-200">
//     <h1 className="p-4 py-8 pb-16 text-sky-900 font-extrabold text-center text-2xl sm:text-5xl">MY PROJECTS</h1>
//      <FocusCards cards={cards} />
//  </div>
//  </main>
//   );
// }

"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import dwell from "../../../public/dwell.webp";
import eliteWheels from "../../../public/eliteWheels.png";  
import graindb from "../../../public/graindb.png";
import foodBlog from "../../../public/foodBlog.jpg";
import electromart from "../../../public/electromart.webp";
import dynamicResume from "../../../public/resumeBuilder.webp";
import royalRides from "../../../public/royalRides.png";

interface Product {
  id: number;
  name: string;
  image: StaticImageData | string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Grain-db",
    image: graindb,
    description:
      "Grain-DB is a lightweight database engine written in C that demonstrates core DBMS internals, including command parsing, execution flow, modular components, and file-based persistent storage, emphasizing clarity, correctness, and low-level system design principles.",
    githubLink: "https://github.com/Anousha1846/GrainDB-2.0",
    liveLink: "https://github.com/Anousha1846/GrainDB-2.0",
  },
    {
    id: 2,
    name: "EliteWheels",
    image: eliteWheels,
    description:
      "EliteWheels is a user-friendly, seamless Rent-A-Car platform offering easy vehicle bookings, secure payments, and efficient customer support, designed to provide a reliable and convenient experience for car rentals.",
    githubLink: "https://github.com/Anousha1846/Elite_Wheels",
    liveLink: "https://hackathon3-giaic-morent.vercel.app/",
  },
  {
    id: 3,
    name: "DWELL-House Website",
    image: dwell,
    description:
      "DWELL-house is a sleek, responsive platform showcasing residential architecture projects. Built with Next.js and Tailwind CSS, it offers an intuitive layout, highlighting project details and providing a seamless, visually engaging browsing experience.",
    githubLink: "https://github.com/Anousha1846/DWEll-house-website",
    liveLink: "https://anousha1846.github.io/DWEll-house-website",
  },
  {
    id: 4,
    name: "Anousha's Food Blog",
    image: foodBlog,
    description:
      "A modern food blog showcasing curated recipes, visually rich layouts, and an intuitive browsing experience built with clean UI principles.",
    githubLink: "https://github.com/Anousha1846/Anousha-s-Food-Blog",
    liveLink: "https://anousha-s-food-blog.vercel.app/",
  },
    {
    id: 5,
    name: "Dynamic Editable Resume Builder",
    image: dynamicResume,
    description:
      "A user-friendly resume builder offering dynamic editing and instant downloading for polished, professional resumes.",
    githubLink: "https://github.com/Anousha1846/Updated-Resume-Builder-5",
    liveLink: "https://updated-resume-builder-5.vercel.app/",
  },
  // {
  //   id: 6,
  //   name: "ElectoMart",
  //   image: electromart,
  //   description:
  //     "Electromart is a sleek eCommerce platform built with Next.js, TypeScript, and custom CSS, offering a responsive, intuitive interface with dynamic product listings.",
  //   githubLink: "https://github.com/Anousha1846/ElectroMart",
  //   liveLink: "https://electro-mart-topaz.vercel.app/",
  // },
    {
    id: 7,
    name: "Royal Rides",
    image: royalRides,
    description:
      "Royal Rides is a simple, elegant website built using only HTML and CSS. It showcases sleek design, emphasizing user-friendly navigation, presenting services, and enhancing the experience of exploring luxurious ride options.",
    githubLink: "https://github.com/Anousha1846/RoyalRides",
    liveLink: "https://anousha1846.github.io/RoyalRides/",
  },
];

const ProjectPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) setSelectedProduct(product);
  };

  return (
    <div className="max-w-[1080px] mx-auto p-4 bg-slate-50 rounded-xl">
      {!selectedProduct ? (
        /* ================= Product List ================= */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSelectProduct(product.id)}
              className="cursor-pointer rounded-lg p-5 flex flex-col items-center text-center
                         bg-gradient-to-br from-gray-100 to-gray-300
                         shadow-lg transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={150}
                className="rounded-lg object-cover mb-4 h-[298px] w-full"
              />
              <h3 className="text-xl font-bold text-slate-800 mt-2">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        /* ================= Product Detail ================= */
        <div className="max-w-[600px] mx-auto mt-8 p-6 bg-white rounded-xl shadow-md text-center">
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-sky-600 text-white px-5 py-2 rounded-md
                       font-medium transition-transform 
                       hover:bg-sky-500 hover:scale-105 mt-4"
          >
            Back to Projects
          </button>

          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={500}
            height={350}
            className="rounded-lg mx-auto my-4"
          />

          <h2 className="text-3xl font-bold text-sky-800 mt-4">
            {selectedProduct.name}
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mt-3">
            {selectedProduct.description}
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href={selectedProduct.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-400 p-2 rounded-md
                         hover:text-sky-600 transition-colors"
            >
              <FaGithub size={35} />
            </a>

            <a
              href={selectedProduct.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-400 p-2 rounded-md
                         hover:text-sky-600 transition-colors"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 76 65"
                fill="currentColor"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      <div className="h-24" />
    </div>
  );
};

export default ProjectPage;



