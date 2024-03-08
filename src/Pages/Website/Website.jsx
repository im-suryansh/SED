import React from "react";
import ScrollHover from "../../Components/ScrollHover/ScrollHover";

const Website = () => {
	return (
		<div>
			<div className="Designer-page">
				<div className="home-heading">
					Website Design and Development
				</div>
				<div className="design-box-content">
					Bring your brand to life online with our modern web design.
					From corporate to creative, we craft websites for every
					business. Let's build your online presence together!
				</div>
				<div className="designer-container">
					<div className="designerbox" style={{ width: "33%" }}>
						1. Responsive Design: Websites optimized for all
						devices. <br />
						2. Ecommerce: Online stores with easy navigation and
						secure checkout. <br />
						3. Single Page Layout: Simple, straightforward websites.{" "}
						<br />
						4. Landing Pages: Focused pages for specific promotions.{" "}
						<br />
						5. Custom Design: Tailored to unique preferences.
					</div>
					<div className="designerbox" style={{ width: "40%" }}>
						6. Portfolio Sites: Showcasing work or achievements
						professionally. <br />
						7. User-Friendly Navigation: Intuitive layouts for easy
						browsing. <br />
						8. Engaging Visuals: Incorporating captivating graphics
						and imagery. <br />
						9. SEO Optimization: Implementing strategies to improve
						search engine visibility. <br />
						10. Integration: Seamlessly integrating with third-party
						tools and platforms.
					</div>
				</div>
				<h1 style={{ width: "80%", margin: "2rem" }}>
					Professional web development, affordable rates. Responsive,
					user-friendly websites for all. Elevate your online presence
					now!
				</h1>
				<h1>Achievements tell the story:</h1>
				<ScrollHover />
			</div>
		</div>
	);
};

export default Website;
