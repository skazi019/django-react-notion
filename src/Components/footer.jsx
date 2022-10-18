import React from 'react'
import ReactGA from "react-ga4";

export default function Footer() {

    const githubProfileVisit = () => {
        ReactGA.event({
            category: "Profile Visit",
            action: "Github Profile Visit",
            label: "Github Profile Visit",
        });
        return true
    }

    return (
        <section className='w-screen mt-20 flex justify-center font-montserrat text-xs text-gray-400'>
            Made with
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-[2px] mt-[1px] stroke-rose-400 fill-rose-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            by
            <a
                href='https://github.com/skazi019'
                target='_blank'
                rel='noreferrer'
                className='ml-1 underline underline-offset-4'
                onClick={githubProfileVisit}
            >
                Kaushal Sharma ©
            </a>
        </section>
    )
}
