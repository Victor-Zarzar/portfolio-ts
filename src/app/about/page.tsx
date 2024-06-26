'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { TbFileDownload } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Experience from '../components/Experience/Experience';
import LineColor from '../components/LineColor/LineColor';

export default function About() {
  return (
    <>
      <div className="rounded-lg p-6">
        <Fade>
          <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">About Me</h1>
        </Fade>
        <div className="flex mt-6 justify-center">
          <LineColor />
        </div>
        <Avatar className='w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto mt-14'>
          <AvatarImage src="profile.jpg" />
          <AvatarFallback>VZ</AvatarFallback>
        </Avatar>
        <p className="text-sm leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
          My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP.
          Always looking to improve my knowledge daily, Im not afraid of the unknown, I try to evolve every day, new challenges are welcome.
          I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock n Roll 🤘🏻.
        </p>
      </div>
      <Experience />
      <div className="rounded-lg p-6 mt-20">
        <Fade >
          <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl  text-blue-500 text-center mt-14">Education</h1>
        </Fade>
        <div className="flex mt-6 justify-center">
          <LineColor />
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <IoSchool className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
            <span className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Analysis and systems development - Ampli/SP</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-20">
        <Fade>
          <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Certifications</h1>
        </Fade>
        <div className="flex mt-6 justify-center">
          <LineColor />
        </div>
        <div className='certificates text-center mx-auto'>
          <ul className="list-none mx-auto text-center">
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">TypeScript from basic to advanced (with React, Express)</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f24a0556-951a-47d6-b5ad-da2a2aec098c.pdf" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">Zero to Programmer in just 14 classes. Dart and Flutter</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f719ab9-4c08-4a91-8b85-f4a2a698d472.pdf" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">Web Design Course: HTML5, CSS3 and JS + 5 Projects</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-36a57d72-6415-4299-b114-3de7bde61067.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">Automated Testing with Cypress - Basic</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f23a5752-30a5-4f45-9e5d-284238eab07d.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">Automated Testing + Software Testing Course</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9bea2790-1bf7-4ccd-90e9-8dd60f2a2f45.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">Automated tests with Cypress (intermediate)</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8ab2c223-1f55-4e01-973e-90cb243a2a67.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">SwiftUI Masterclass 2023 - iOS App Development & Swift</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b69979d5-eb7a-489c-ac9b-5edf5460fdb2.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">iOS 12 Apps with Swift 5 and Xcode 10 - Basic</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-35f871a3-03a6-4ff1-8461-40a467676d3a.pdf?trk=public_profile_see-credential" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
            <li className="flex justify-center items-center mt-10">
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl font-semibold tracking-tighter truncate">SQL database from scratch to advanced 2023</span>
              <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e0c2067e-587a-4b0a-bab5-7dc87d8b0524.pdf" target="_blank">
                <TbFileDownload className='w-4 h-4 md:w-8 md:h-6 text-gray-500' />
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-lg p-6 mt-20">
          <Fade>
            <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Languages</h1>
          </Fade>
          <div className="flex mt-6 justify-center">
            <LineColor />
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <Image
                src="/us.png"
                alt="us"
                width={20}
                height={20}
                priority
                className='h-3 w-3 md:w-7 md:h-7 mr-1'
              />
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">EN - Basic</span>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="flex items-center mx-auto mt-5">
              <Image
                src="/br.png"
                alt="br"
                width={20}
                height={20}
                priority
                className='h-3 w-3 md:w-7 md:h-7 mr-1'
              />
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">PT-BR - Native Speaker</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}