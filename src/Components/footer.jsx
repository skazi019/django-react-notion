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
        <section className='w-screen mt-20 flex justify-center text-gray-400'>
            Made with ❤️ by
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
