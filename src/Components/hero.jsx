import profileImage from '../assets/images/Profile Photo - 5.png';

export default function Hero() {
    return (
        <section className="mt-14 lg:mt-20 flex flex-col justify-center items-center px-6 sm:px-20 w-screen md:px-0 mx-auto md:w-lg md:max-w-2xl lg:w-xl lg:max-w-4xl dark:text-white">
            <img src={profileImage} className='w-44 rounded-full' alt="profile image" />
            <h1 className="mt-4 text-4xl font-semibold">Kaushal's Blog</h1>
            <p className='text-lg'>I'm a fullstack software engineer exploring and writing about tech ;)</p>
        </section>
    );
}