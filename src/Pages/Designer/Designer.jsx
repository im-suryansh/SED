import React from "react";
import "./Designer.css";
import Pposter from "../Pposter/Pposter";
import ServiceList from "../ServiceList/ServiceList";

const Designer = () => {
	return (
		<div className="Designer-page">
			<div className="home-heading">Professional Graphic Design</div>
			<div className="design-box-content">
				A logo is the face of your brand, making it crucial for both
				startups and established companies. We specialize in crafting
				unique logos tailored to reflect each business's identity.
				Whether you're unsatisfied with your current logo or starting
				fresh, we're here to give your brand a fresh and memorable look.
			</div>
			<h1>Professional graphics made simple.</h1>
			<div className="designer-container">
				<div className="designerbox">
					1. Unique logo design for brand representation. <br /> 2.
					Consistent brand identity creation. <br /> 3. Eye-catching
					print materials. <br /> 4. Visually appealing digital
					graphics. <br />
					5. Engaging marketing collateral.
				</div>
				<div className="designerbox">
					6. Expert publication layout design. <br /> 7. Strategic
					design consultation. <br /> 8. Tailored brand messaging.{" "}
					<br />
					9. Effective visual storytelling. <br />
					10. Seamless integration across platforms.
				</div>
			</div>
			{<ServiceList />}
			<Pposter />
		</div>
	);
};

export default Designer;
