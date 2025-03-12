"use client"; // 🔥 This makes it a Client Component

import React, { useState } from 'react'
import NavBarMenuIcon from './icons/navBarMenuIcon'
import HomeIcon from './icons/homeIcon'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonClasses = 'font-londrinaShadow text-2xl font-bold px-2 py-1 border-2 border-white bg-white text-black hover:bg-transparent hover:text-white rounded-lg'
    const buttons = (
        <>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#about">About</a></button>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#project">Projects</a></button>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#skill">Skills</a></button>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#experience">Experience</a></button>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#education">Education</a></button>
            <button onClick={() => { setIsOpen(!isOpen) }} className={buttonClasses}><a href="#contact">Contact</a></button>
        </>
    )
    return (
        <div id='navbar' className='absolute font-londrinaShadow z-40'>
            <nav className='fixed w-full bg-center bg-cover bg-no-repeat md:py-3' style={{ backgroundImage: "url('assets/lego_colorful.jpg')" }}>
                <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row w-full justify-between">
                            <a href="#">
                                <div className="flex flex-row items-center justify-stretch text-white">
                                    <div className='m-1'>
                                        <HomeIcon />
                                    </div>
                                    <div className="text-3xl font-bold tracking-wide m-1">
                                        Akimi Yano
                                    </div>
                                </div>
                            </a>
                            <div className="hidden md:block">
                                <div className="flex ml-10 items-baseline space-x-2">
                                    {buttons}
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => { setIsOpen(!isOpen) }} type="button" className="fill-gray-100">
                                <NavBarMenuIcon />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
                            {buttons}
                        </div>
                    )
                }
            </nav>
        </div>
    );
};