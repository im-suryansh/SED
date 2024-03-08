import React from "react";
import "./UsVsOthers.css";
import AnimatedCounter from "../../Components/animatedCounter/animatedCounter";
const UsVsOthers = () => {
	return (
		<div className="UsVsOthers-page">
			<div className="UsVsOthers-heading">
				US <span className="stroke">VS</span> OTHERS
			</div>
			<div className="difference-box">
				<div className="difference-box1">
					<div className="difference-heading">Other Agencies</div>
					<ul className="difference-text cross">
						<li>No case studies</li>
						<li>Generic SEO strategy</li>
						<li>Lack of transparency</li>
						<li>Inconsistent reporting</li>
						<li>Lack of communication</li>
						<li>Make promises they can’t keep</li>
						<li>Plenty of excuses</li>
					</ul>
				</div>
				<div className="difference-box2" >
					<div className="difference-heading"> Sidhivinayak Elite Digital</div>
					<ul className="difference-text wrong">
						<li>5+ years experience working on 100+ projects</li>
						<li> Exceptional Case Studies </li>
						<li>Ecommerce SEO experts</li>
						<li>
							Transparent reporting of KPIs that matter: Revenue
							from Search
						</li>
						<li>Open communication and quick responsiveness</li>
						<li> 70M+ Revenue</li>
						<li>Generated With SEO</li>
						<li>
							Only take on projects if we’re confident we can
							deliver
						</li>
					</ul>
				</div>
			</div>
			<AnimatedCounter />
		</div>
	);
};

export default UsVsOthers;
