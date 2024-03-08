import React from "react";
import bg from "../../Assets/bg.svg";
import poster from "../../Assets/poster2.png";
const Ui = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">UI/UX Design</div>
			<div className="design-box-content">
				Picture this: You navigate through a digital realm effortlessly,
				every click leading you closer to your destination. That's the
				magic of our UI/UX design. We craft captivating interfaces that
				tell stories, guiding users on unforgettable journeys. Ready to
				turn your digital dreams into reality? Let's embark on this
				adventure together!
			</div>
			<h1>Professional graphics made simple.</h1>
			<div className="designer-container">
				<div className="designerbox">
					1. Seamless digital experiences for websites, mobile apps,
					and software. <br />
					2. Intuitive layouts for easy navigation.
					<br />
					3. Efficient navigation systems.
					<br />
					4. Engaging interactive elements.
					<br />
					5. Enhancing overall user experience.
					<br />
				</div>
				<div className="designerbox">
					6. Captivating storytelling through design.
					<br />
					7. Inviting users into immersive digital realms.
					<br />
					8. Turning digital dreams into reality.
					<br />
					9. Empowering users with user-friendly interfaces.
					<br />
					10. Collaborative journey to elevate brands and delight
					users.
					<br />
				</div>
			</div>
			<div style={{ width: "100vw", marginTop: "5rem" }}>
				<div
					className="packages-heading2"
					style={{ marginBottom: "3rem" }}
				>
					Success leaves clues:
				</div>
				<img
					src={bg}
					alt=""
					style={{
						zIndex: "-1",
						position: "absolute",
						left: "25%",
						width: "50%",
					}}
				/>
				<img src={poster} style={{ width: "70vw" }} />
			</div>
		</div>
	);
};

export default Ui;
