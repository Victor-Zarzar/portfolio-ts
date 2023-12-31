'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { TbFileDownload } from "react-icons/tb";
import { FaBug } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <>
      <div className="col-span-4">
        <div className="rounded-lg p-6">
          <Fade>
            <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">About Me</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <Image
            src="/profile.jpg"
            alt="webdeveloper"
            width={200}
            height={200}
            priority
            className="w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto mt-14"
          />
          <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
            My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP.
            Always looking to improve my knowledge daily, Im not afraid of the unknown, I try to evolve every day, new challenges are welcome.
            I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock n Roll🤘🏻
          </p>
        </div>
        <div className="rounded-lg p-6 mt-20">
          <Fade>
            <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Experience Tech</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <FaBug className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">QA Tester - Freelancer - December 2022 - March 2023</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-5">
              <FaDev className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Software Developer JR - March 2023 - Present</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-20">
        <Fade >
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Education</h2>
        </Fade>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <IoSchool className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
            <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Analysis and systems development - Ampli/SP</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-20">
        <Fade>
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Certifications</h2>
        </Fade>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Zero to Programmer in just 14 classes. Dart and Flutter</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f719ab9-4c08-4a91-8b85-f4a2a698d472.pdf" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Web Design Course: HTML5, CSS3 and JS + 5 Projects</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-36a57d72-6415-4299-b114-3de7bde61067.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated Testing with Cypress - Basic</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f23a5752-30a5-4f45-9e5d-284238eab07d.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated Testing + COMPLETE Software Testing Course</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9bea2790-1bf7-4ccd-90e9-8dd60f2a2f45.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated tests with Cypress (intermediate)</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8ab2c223-1f55-4e01-973e-90cb243a2a67.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">SwiftUI Masterclass 2023 - iOS App Development & Swift</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b69979d5-eb7a-489c-ac9b-5edf5460fdb2.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">iOS 12 Apps with Swift 5 and Xcode 10 - Basic</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-35f871a3-03a6-4ff1-8461-40a467676d3a.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="rounded-lg p-6 mt-20">
          <Fade>
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Languages</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <Image
                src="/us.png"
                alt="webdeveloper"
                width={20}
                height={20}
                priority
                className='h-5 w-5 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-1'
              />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">EN - Basic</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-5">
              <Image
                src="/br.png"
                alt="webdeveloper"
                width={20}
                height={20}
                priority
                className='h-5 w-5 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-1'
              />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">PT-BR - Native Speaker</span>
            </div>
          </div>
        </div>
        <div className="py-8 z-10 font-serif mt-20 flex items-center justify-center">
          <div className="container-button relative inline-flex group max-w-6xl mb-2">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
            </div>
            <Link href="/">
              <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
                Back to Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
