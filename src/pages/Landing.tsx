import React from "react";

import "../styles/pages/landing.css";

import { FiArrowRight } from "react-icons/fi";
import logoImg from "../images/Logo.svg";

export default function Landing() {
	return (
		<div id="page-landing">
			<div className="content-wrapper">
				<img src={logoImg} alt="" />

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e muda o dia de muitas crianças.</p>
				</main>

				<div className="location">
					<strong>Piracicaba</strong>
					<span>São Paulo</span>
				</div>

				<a href="/app" className="enter-app">
					<FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
				</a>
			</div>
		</div>
	);
}
