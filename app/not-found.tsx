import Link from 'next/link'
import React from 'react'

export default function NotFound404() {
    return (
        <div className="flex items-center h-screen p-16 bg-[#111827]">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldnt find this page.</p>
                    <Link href="/">
                        <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
                            Back to Home Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
