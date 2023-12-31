import React from 'react'

export const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-10 h-24 p-8 pb-10">
            <footer className="mx-auto flex max-w-4xl flex-row">
                <ul className="flex items-center mx-auto flex-wrap mb-6 md:mb-0">
                    <li><p className="md:text-xs lg:text-lg font-normal ttext-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 hover:underline mr-4 md:mr-6"> © {currentYear} Victor Zarzar. All rights reserved.</p></li>
                </ul>
            </footer>
        </div>
    )
}
