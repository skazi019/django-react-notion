import { useRef, useEffect, useState } from 'react';
import profileImage from '../assets/images/Profile Photo - 5.png';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { useSettingStore } from '../store';
import { getNotationColor } from './NotionComponents/colors';
import ReactGA from "react-ga4";

export default function Hero() {

    const mode = useSettingStore((state) => state.darkMode);

    const [show, setShow] = useState(false)

    const notationColorToClass = getNotationColor(mode);

    const bioRef = useRef();

    const linkedInProfileVisit = () => {
        ReactGA.event({
            category: "Profile Visit",
            action: "LinkedIn Profile Visit",
            label: "LinkedIn Profile Visit",
        });
        return true
    }

    const twitterProfileVisit = () => {
        ReactGA.event({
            category: "Profile Visit",
            action: "Twitter Profile Visit",
            label: "Twitter Profile Visit",
        });
        return true
    }

    const mailtoClicked = () => {
        ReactGA.event({
            category: "Mail To Opened",
            action: "Mail To Opened",
            label: "Mail To Opened",
        });
        return true
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1000);
    }, []);

    return (
        <section className="mt-14 lg:mt-18 flex flex-col justify-center items-center px-6 sm:px-20 w-screen md:px-0 mx-auto md:w-lg md:max-w-2xl lg:w-xl lg:max-w-4xl dark:text-white">
            <img src={profileImage} className='w-44 rounded-full' alt="profile image" />
            <h1 className="mt-4 text-4xl font-semibold">Kaushal's Blog</h1>
            <p className='text-lg mt-2' ref={bioRef}>A
                <RoughNotationGroup show={show}>
                    <RoughNotation className='mx-[3px]' order="1" animationDelay={1} type="box" strokeWidth={2} color={notationColorToClass["purple"]} padding={(4, 2)} show={true}>
                        Fullstack Software Engineer
                    </RoughNotation>
                    exploring and writing about
                    <RoughNotation className='mx-[3px]' order="4" animationDelay={.3} type="circle" strokeWidth={2} color={notationColorToClass["red"]} padding={(2, 10)} show={true}>
                        <RoughNotation className='mx-[3px]' order="2" animationDelay={.3} type="underline" strokeWidth={2} color={notationColorToClass["blue"]} padding={(2, 2)} show={true}>
                            Tech
                        </RoughNotation>
                        ,
                        <RoughNotation className='mx-[3px]' order="3" animationDelay={.3} type="underline" strokeWidth={2} color={notationColorToClass["green"]} padding={(2, 2)} show={true}>
                            Life
                        </RoughNotation>
                        and everything in between ;)
                    </RoughNotation>
                </RoughNotationGroup>
            </p>
            <div className='mt-2 flex flex-row justify-center items-center gap-2 text-sm text-gray-400'>
                <a
                    href="https://www.linkedin.com/in/kaushal-sharma-/"
                    target='_blank'
                    className='underline underline-offset-2'
                    rel="noreferrer"
                    onClick={linkedInProfileVisit}
                >
                    LinkedIn
                </a>
                |
                <a
                    href="https://twitter.com/Kaushal_Shawrma"
                    target='_blank'
                    className='underline underline-offset-2'
                    rel="noreferrer"
                    onClick={twitterProfileVisit}
                >
                    Twitter
                </a>
                |
                <a
                    href="mailto:kaushal.sharma.0796@gmail.com"
                    className='underline underline-offset-2'
                    rel="noreferrer"
                    onClick={mailtoClicked}
                >
                    Email
                </a>
            </div>
        </section >
    );
}