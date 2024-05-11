import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
const Highlights = () => {
	useGSAP(() => {
		gsap.to("#title", {
			opacity: 1,
			y: 0,
		});
		gsap.to(".link", {
			opacity: 1,
			y: 0,
			stagger: 0.25,
			duration: 1,
		});
	}, []);
	return (
		<section
			id="highlights"
			className="w-screen overflow-hidden h-full common-padding bg-zinc"
		>
			<div className="screen-max-width">
				<div className="mb-12 w-full md:flex items-baseline justify-between">
					<h1 id="title" className="section-heading">
						Get the highlights.
					</h1>
					<div className="flex flex-wrap items-center gap-5">
						<p className="link ">Watch the film</p>
						<img src={rightImg} alt="watch" />
						<p className="link ">Watch the film</p>
						<img src={watchImg} alt="Right" />
					</div>
				</div>
				<VideoCarousel />
			</div>
		</section>
	);
};

export default Highlights;
