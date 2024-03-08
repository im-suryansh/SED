import React from "react";
import "./ScrollHover.css";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";
import w6 from "../../assets/w6.png";

function ScrollHover() {
	return (
		<div className="ScrollHover-page">
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w1})`,
						}}
					></div>
				</div>
			</div>
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w2})`,
						}}
					></div>
				</div>
			</div>
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w3})`,
						}}
					></div>
				</div>
			</div>
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w4})`,
						}}
					></div>
				</div>
			</div>
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w5})`,
						}}
					></div>
				</div>
			</div>
			<div className="ScrollHover">
				<div className="screen">
					<div
						className="viewport"
						style={{
							backgroundImage: `url(${w6})`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default ScrollHover;
