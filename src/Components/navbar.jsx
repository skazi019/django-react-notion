import React from 'react'
import { Link } from 'react-router-dom'
import ShareButton from './sharebutton'
import Headroom from 'react-headroom'

export default function Navbar() {
    return (
        <Headroom className='fixed top-0 left-0 w-screen'>
            <nav className='relative w-screen flex flex-row justify-between items-start py-4 px-6 md:mx-auto md:max-w-3xl lg:max-w-6xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-t-0 rounded border-gray-200'>
                <Link to="/" className='text-sm flex flex-row justify-start items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </Link>

                <ShareButton />
            </nav>
        </Headroom>
    )
}
