import React from "react";
import BlogList from "./Components/bloglists";
import Hero from "./Components/hero";
import DarkMode from "./Components/darkmode";

export default function App() {

	return (
		<>
			<main className="transition h-auto w-screen flex flex-col justify-center items-center pb-14 dark:bg-neutral-800 dark:text-gray-200">
				<div className="place-self-end p-4">
					<DarkMode />
				</div>
				<Hero />
				<BlogList />
			</main>
		</>
	);
}
