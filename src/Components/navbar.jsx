import React from 'react'
import { Link } from 'react-router-dom'
import ShareButton from './sharebutton'

export default function Navbar() {
    return (
        <nav className='relative flex flex-row justify-between items-center'>
            <Link to="/" className='text-sm fixed top-4 left-10 flex flex-row justify-start items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <p>Back</p>
            </Link>

            <ShareButton />

        </nav>
    )
}
