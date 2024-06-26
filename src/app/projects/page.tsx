'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image';
import TypescriptIcon from "../icons/projects/typescript";
import HtmlIcon from "../icons/projects/html";
import NextjsIcon from "../icons/projects/nextjs";
import DartIcon from "../icons/projects/dart";
import FlutterIcon from "../icons/projects/flutter";
import TailwindIcon from "../icons/projects/tailwindcss";
import ReactIcon from "../icons/projects/react";
import DockerIcon from "../icons/projects/docker";
import AndroidIcon from "../icons/projects/android";
import IosIcon from "../icons/projects/ios";
import StripeIcon from "../icons/projects/stripe";
import PrismaIcon from "../icons/projects/prisma";
import StyledIcon from "../icons/projects/styled";
import LineColor from "../components/LineColor/LineColor";
import XcodeIcon from "../icons/projects/xcode";
import AndroidStudioIcon from "../icons/projects/androidstudio";

type Project = {
  title: string;
  description: string | JSX.Element;
  photo: string;
  sourceCodeLink: string;
};

export default function Projects() {

  const shoppingapp = '/shoppingflutter.png';
  const groceryapp = '/groceryapp.png';
  const musicplayer = '/musicplayer.jpg';
  const ecommerce = '/e-commerce.png'
  const portfolio = '/portfolio.png';
  const lawfirm = '/lawfirm.png';
  const weather = '/weather.png';
  const nft = '/nft.png';

  const projects: Project[] = [
    {
      title: "Shopping App",
      description: (
        <div>
          <p className="mb-3">App Shopping Flutter.</p>
          <div className="flex space-x-2 md:space-x-2">
            <FlutterIcon />
            <DartIcon />
            <AndroidIcon />
            <IosIcon />
            <XcodeIcon />
            <AndroidStudioIcon />
          </div>
        </div>
      ),
      photo: shoppingapp,
      sourceCodeLink: "https://github.com/Victor-Zarzar/shopping-flutter",
    },
    {
      title: "Law Firm",
      description: (
        <div>
          <p className="mb-3">Web site application Law Firm.</p>
          <div className="flex space-x-2 md:space-x-2">
            <HtmlIcon />
            <ReactIcon />
            <TypescriptIcon />
            <TailwindIcon />
            <NextjsIcon />
            <DockerIcon />
          </div>
        </div>
      ),
      photo: lawfirm,
      sourceCodeLink: "https://github.com/Victor-Zarzar/law-firm",
    },
    {
      title: "Grocery Shop App",
      description: (
        <div>
          <p className="mb-3">A simple App Shop Grocery Flutter.</p>
          <div className="flex space-x-2 md:space-x-2">
            <FlutterIcon />
            <DartIcon />
            <AndroidIcon />
            <IosIcon />
            <XcodeIcon />
            <AndroidStudioIcon />
          </div>
        </div>
      ),
      photo: groceryapp,
      sourceCodeLink: "https://github.com/Victor-Zarzar/grocery-shop-flutter",
    },
    {
      title: "Music Player",
      description: (
        <div>
          <p className="mb-3">A Flutter music player app.</p>
          <div className="flex space-x-2 md:space-x-2">
            <FlutterIcon />
            <DartIcon />
            <AndroidIcon />
            <IosIcon />
            <XcodeIcon />
            <AndroidStudioIcon />
          </div>
        </div>
      ),
      photo: musicplayer,
      sourceCodeLink: "https://github.com/Victor-Zarzar/musicplayer-flutter",
    },
    {
      title: "KeyMart E-commerce",
      description: (
        <div>
          <p className='mb-3'>Application fullstack e-commerce website.</p>
          <div className="flex space-x-1 md:space-x-2">
            <HtmlIcon />
            <ReactIcon />
            <TypescriptIcon />
            <TailwindIcon />
            <NextjsIcon />
            <DockerIcon />
            <StripeIcon />
            <PrismaIcon />
          </div>
        </div>
      ),
      photo: ecommerce,
      sourceCodeLink: "https://github.com/Victor-Zarzar/e-commerce-ts",
    },
    {
      title: "NFT App",
      description: (
        <div>
          <p className="mb-3">A project NFT Market Place.</p>
          <div className="flex space-x-2 md:space-x-2">
            <FlutterIcon />
            <DartIcon />
            <AndroidIcon />
            <IosIcon />
            <XcodeIcon />
            <AndroidStudioIcon />
          </div>
        </div>
      ),
      photo: nft,
      sourceCodeLink: "https://github.com/Victor-Zarzar/nft-flutter",
    },
    {
      title: "Portfolio",
      description: (
        <div>
          <p className='mb-3'>My personal portfolio website.</p>
          <div className="flex space-x-1 md:space-x-2">
            <HtmlIcon />
            <ReactIcon />
            <TypescriptIcon />
            <TailwindIcon />
            <NextjsIcon />
            <DockerIcon />
            <StyledIcon />
          </div>
        </div>
      ),
      photo: portfolio,
      sourceCodeLink: "https://github.com/Victor-Zarzar/portfolio-ts",
    },
    {
      title: "Weather App",
      description: (
        <div>
          <p className="mb-3">A project Weather App.</p>
          <div className="flex space-x-2 md:space-x-2">
            <FlutterIcon />
            <DartIcon />
            <AndroidIcon />
            <IosIcon />
            <XcodeIcon />
            <AndroidStudioIcon />
          </div>
        </div>
      ),
      photo: weather,
      sourceCodeLink: "https://github.com/Victor-Zarzar/weather-flutter",
    },
  ];

  return (
    <>
      <div className="col-span-4 mx-auto">
        <div className="h1 p-6">
          <Fade>
            <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Projects</h1>
          </Fade>
          <div className="flex mt-6 justify-center">
            <LineColor />
          </div>
        </div>
        <div className="px-10 my-4 mt-20" id="projects">
          <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-lg md:text-2xl lg:text-3xl text-blue-500 mt-16 text-center">
            Featured projects:
          </h1>
          <p className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mb-16 text-center">
            Here are a few of my live, real-world projects
          </p>
        </div>
      </div>
      <div className="carrousel-container">
        <Carousel className="w-full max-w-[16rem] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-48 md:mb-54">
          <CarouselContent className="-ml-1">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="cursor-pointer">
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image
                              src={project.photo}
                              alt={project.title}
                              width={600}
                              height={600}
                              className="w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] lg:w-[18rem] lg:h-[18rem] xl:w-[23rem] xl:h-[23rem] absolute" />
                          </CardContent>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-60 md:w-80 bg-gray-800 border-3">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none text-sm md:text-md text-blue-500 title-font">{project.title}</h4>
                          <div className="text-xs md:text-sm text-violet-700 font-semibold">
                            {project.description}
                          </div>
                          <a href={project.sourceCodeLink} target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                            <svg className="h-8 w-8 md:w-10 md:h-10 lg:w-10 lg:h-10 mx-auto mt-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
