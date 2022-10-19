import React from 'react'
import ErrorIllustration from './assets/images/404 Error with a cute animal-bro.svg'

export default function ErrorPage() {
    return (
        <main className="transition duration-300 min-h-screen min-w-screen pb-8 dark:bg-neutral-800 dark:text-gray-200">
            <section className='w-screen h-screen flex justify-center items-center'>
                <a href="https://storyset.com/web">
                    {/* <ErrorIllustration /> */}
                    error
                </a>
            </section>
        </main>
    )
}
