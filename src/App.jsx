import React, { useEffect } from "react";
import BlogList from "./Components/bloglists";
import Hero from "./Components/hero";
import DarkMode from "./Components/darkmode";

export default function App() {

	return (
		<main className="min-h-screen w-screen dark:bg-neutral-800 dark:text-gray-200">
			<section className="transition flex flex-col justify-center items-center pb-14">
				<div className="place-self-end p-4">
					<DarkMode />
				</div>
				<Hero />
				<BlogList />
			</section>
		</main>
	);
}
