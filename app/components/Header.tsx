'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";

export default function Header() {
    return (
        <div className="py-8 z-10 font-serif mt-40 md:mt-5">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <Slide>
                        <h1 className="text-purple-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-none tracking-tighter">
                            Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Web/Mobile Developer🖖🏻.
                        </h1>
                    </Slide>
                </div>
                <div className="w-full md:w-1/2 py-8 text-right">
                    <Image
                        src="/itdeveloper.gif"
                        alt="itdeveloper"
                        priority
                        width={200}
                        height={100}
                        className='h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-1 inline-block'
                    />
                </div>
            </div>
            <div className="container-button relative inline-flex group md:ml-0 lg:ml-20 xl:ml-24 2xl:ml-96 space-x-5 max-w-6xl">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                </div>
                <Link href="https://github.com/Victor-Zarzar" target="_blank">
                    <button className="relative inline-flex items-center justify-center w-[6rem] md:w-[8rem] lg:w-[9rem] text-xs md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">GitHub</button>
                </Link>
                <Link href="https://www.linkedin.com/in/victorzarzar" target="_blank">
                    <button className="relative inline-flex items-center justify-center w-[6rem] md:w-[8rem] lg:w-[9rem] text-xs md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Linkedin</button>
                </Link>
            </div>
        </div>
    );
}
