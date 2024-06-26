'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button"
import Whatsapp from '@/app/icons/socials/whatsapp';

export default function Header() {
    return (
        <div className="py-8 z-10 font-serif mt-10 md:mt-5">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <Slide>
                        <h1 className="text-purple-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-none tracking-tighter">
                            Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Front-End Developer🖖🏻.
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
                        className='h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-1 inline-block cursor-pointer'
                    />
                </div>
            </div>
            <div className="fixed bottom-20 right-4 md:right-10 z-100">
                <Link href={'https://api.whatsapp.com/send?phone=5551986181044'} target="_blank">
                    <Whatsapp />
                </Link>
            </div>
            <div className="container px-10 md:px-36 space-x-4">
                <Link href="https://github.com/Victor-Zarzar" target="_blank">
                    <Button type='button' className='inline-block px-9 md:px-12 py-2 text-xs md:text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>GitHub</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/victorzarzar" target="_blank">
                    <Button type='button' className='inline-block px-9 md:px-12 py-2 text-xs md:text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>Linkedin</Button>
                </Link>
            </div>
        </div>
    );
}
