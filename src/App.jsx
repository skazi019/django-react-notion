import React, { useEffect } from "react";
import BlogList from "./Components/bloglists";
import Hero from "./Components/hero";

export default function App() {
	return (
		<>
			<main className="h-auto w-screen flex flex-col justify-center items-center pb-14">
				<Hero />
				<BlogList />
			</main>
		</>
	);
}
