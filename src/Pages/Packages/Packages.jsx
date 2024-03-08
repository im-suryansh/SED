import React from "react";
import "./Packages.css";
const Packages = () => {
	return (
		<div className="packages-page">
			<div className="packages-heading">
				Packages To Cover All Your Requirements
			</div>
			<div className="package-card-container">
				<div className="package-card">
					<div className="package-card-content">
						<div className="package-card-title">Any 3 Services</div>
						<div className="package-card-price">28%</div>
					</div>
					<div className="package-card-btn">Get Started</div>
				</div>
				<div className="package-card">
					<div className="package-card-content">
						<div className="package-card-title">Any 5 Services</div>
						<div className="package-card-price">37%</div>
					</div>
					<div className="package-card-btn">Get Started</div>
				</div>
				<div className="package-card">
					<div className="package-card-content">
						<div className="package-card-title">Any 7 Services</div>
						<div className="package-card-price">46%</div>
					</div>
					<div className="package-card-btn">Get Started</div>
				</div>
				<div className="package-card">
					<div className="package-card-content">
						<div className="package-card-title">
							Any 10 Services
						</div>
						<div className="package-card-price">55%</div>
					</div>
					<div className="package-card-btn">Get Started</div>
				</div>
			</div>
			<div className="counter-body">
				<section className="counters">
					<div className="packages-heading2">
						Get Customized Single Service
					</div>
				</section>
			</div>
		</div>
	);
};

export default Packages;
