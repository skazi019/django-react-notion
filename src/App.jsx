import React, { useEffect } from "react";
import BlogList from "./Components/bloglists";
import Hero from "./Components/hero";
import Footer from "./Components/footer";
import DarkMode from "./Components/darkmode";
import ReactGA from "react-ga4";
import SEO from "./seo";


export default function App() {

	useEffect(() => {
		ReactGA.send({ hitType: "homepage", page: window.location.pathname });
		return () => { }
	}, [])


	return (
		<>
			<SEO
				title="Kaushal Sharma's Blog"
				description="Kaushal's blog is where I jot down all the tech stuff or problem solutions I discover on my fullstack software engineering journey exploring premises of languages such as python and it's framework like django and django rest framework and javascript and its various frameworks like react."
				url={window.location.href}
			/>
			<main className="min-h-screen w-screen transition duration-300 dark:bg-neutral-800 dark:text-gray-200">
				<section className="flex flex-col justify-center items-center pb-8">
					<div className="place-self-end p-4">
						<DarkMode />
					</div>
					<Hero />
					<BlogList />
					<Footer />
				</section>
			</main>
		</>
	);
}
