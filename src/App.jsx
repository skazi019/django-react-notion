import React, { useEffect } from "react";
import BlogList from "./Components/bloglists";
import Hero from "./Components/hero";
import Footer from "./Components/footer";
import DarkMode from "./Components/darkmode";
import ReactGA from "react-ga4";


export default function App() {

	useEffect(() => {
		ReactGA.send({ hitType: "homepage", page: window.location.pathname });
		return () => { }
	}, [])


	return (
		<main className="min-h-screen w-screen dark:bg-neutral-800 dark:text-gray-200">
			<section className="transition flex flex-col justify-center items-center pb-8">
				<div className="place-self-end p-4">
					<DarkMode />
				</div>
				<Hero />
				<BlogList />
				<Footer />
			</section>
		</main>
	);
}
