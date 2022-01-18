import { useState, useEffect } from "react";
import { About, Contacts, Header, Message, Projects, Skills, Technologies, Timeline } from "../components";
import { Body, Footer, LineDivider, Section } from "../styles/globalStyles";

const Index = () => {
	const [scrollY, setScrollY] = useState(0);
	const [currentWidth, setCurrentWidth] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			setCurrentWidth(window.innerWidth);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Message />
			<Body>
				<Section padding="2rem 0">
					<Header scrollY={scrollY} innerWidth={currentWidth} />
				</Section>
				<Section id="about">
					<About scrollY={scrollY} />
				</Section>
				<Section id="tech">
					<Technologies scrollY={scrollY} innerWidth={currentWidth} />
				</Section>
				<Section id="skills" >
					<Skills scrollY={scrollY} innerWidth={currentWidth} />
				</Section>
				<Section id="projects">
					<Projects scrollY={scrollY} innerWidth={currentWidth} />
				</Section>
				<Section id="timeline">
					<Timeline />
				</Section>
				<Section id="contacts">
					<Contacts scrollY={scrollY} innerWidth={currentWidth} />
				</Section>
				<LineDivider />
				<Footer>
					Copyright &copy; {new Date().getFullYear()} | All Rights Reserved.
				</Footer>
			</Body>
		</>
	)
}

export default Index;
