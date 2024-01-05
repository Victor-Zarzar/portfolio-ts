import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  const todo = '/todo.png';
  const portfolio = '/portfolio.png';
  const mario = '/mario.png';
  const gpt = '/gpt.png';

  const projects = [
    {
      title: "To-do List",
      description:
        "App Todo-List in flutter Android/iOS.",
      photo: todo,
    },
    {
      title: "Portfolio",
      description:
        "My portfolio in react, web project.",
      photo: portfolio,
    },
    {
      title: "Mario Jump",
      description:
        "App Mario Jump in flutter Android/iOS",
      photo: mario,
    },
    {
      title: "ChatGPT",
      description:
        "App ChatGPT in flutter Android/iOS",
      photo: gpt,
    },
  ];

  const sourceCodeLinks = [
    "https://github.com/Victor-Zarzar/ToDoList-Flutter",
    "https://github.com/Victor-Zarzar/portfolio-ts",
    "https://github.com/Victor-Zarzar/SuperMario-Flutter",
    "https://github.com/Victor-Zarzar/chat-gpt",
  ];

  return (
    <div className="col-span-4 mx-auto">
      <div className="p-6">
        <h2 className="title-projects mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Projects</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="px-10 my-4 mt-20" id="projects">
        <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight md:text-2xl lg:text-3xl text-blue-500 mt-16 text-center">
          Featured projects:
        </h1>
        <p className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mb-16 text-center">
          Here are a few of my live, real-world projects
        </p>
        <div className="max-w-md md:max-w-lg lg:max-w-5xl mx-auto px-0 py-2">
          <div className="grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 p-6 md:p-10 mx-auto gap-20 md:gap-20">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col shadow-sm h-[26rem] w-auto md:h-[28rem] md:w-auto lg:h-[28rem] lg:w-auto bg-gray-800 p-8 rounded-2xl">
                  <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer" className="mb-4">
                    <Image src={project.photo} alt={project.title} width={350} height={200} priority className='mx-auto h-[8rem] w-[20rem] md:h-[12rem] md:w-[25rem] lg:h-[12rem] lg:w-[20rem]' />
                  </a>
                  <h3 className="title-projects mb-4 text-lg font-extrabold leading-10 tracking-tight md:text-lg text-blue-500 text-center">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-purple-800 md:text-2xl lg:text-2xl font-semibold tracking-tighter mx-auto">
                    {project.description}
                  </p>
                  <div className="container-button relative inline-flex mt-5 mb-3 mx-auto">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                    </div>
                    <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer">
                      <button className="relative inline-flex items-center justify-center w-[9rem] md:w-[9rem] text-xs md:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Source Code</button>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></div>
              </div>
            ))}
          </div>
          <div className="py-8 z-10 font-serif mt-40 flex items-center justify-center">
            <div className="container-button relative inline-flex group max-w-6xl mb-2">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <Link href="/">
                <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
                  Back to Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}