import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760 ? smallHeroVideo : heroVideo
	);
	const handleVideoSourceSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	};
	useEffect(() => {
		window.addEventListener("resize", handleVideoSourceSet);
		return window.removeEventListener("resize", handleVideoSourceSet);
	}, []);
	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 1,
			delay: 1.5,
		});
		gsap.to("#cta", {
			opacity: 1,
			delay: 2,
			y: -10,
		});
	}, []);
	return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col ">
				<p id="hero" className="hero-title">
					iPhone 15 Pro
				</p>
				<div className="md:w-10/12 w-9/12">
					<video autoPlay muted playsInline={false} key={videoSrc}>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
				<div
					id="cta"
					className="flex flex-col items-center opacity-0 translate-y-20 "
				>
					<a href="#highlights" className="btn" id="highlights">
						Buy
					</a>
					<p className="font-normal text-xl">From ₹134900.00*</p>
				</div>
			</div>
		</section>
	);
};
export default Hero;
