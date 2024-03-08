// import { useEffect } from "react";
// import "./AnimatedCounter.css";

// function AnimatedCounter() {
// 	useEffect(() => {
// 		const counters = document.querySelectorAll(".counter");
// 		const speed = 200; // The lower the slower

// 		counters.forEach((counter) => {
// 			const updateCount = () => {
// 				const target = +counter.getAttribute("data-target");
// 				let count = +counter.innerText;

// 				// Lower inc to slow and higher to slow
// 				const inc = target / speed;

// 				// Check if target is reached
// 				if (count < target) {
// 					// Add inc to count and output in counter
// 					count += inc;
// 					// To avoid decimal numbers in display, round to integer
// 					counter.innerText = Math.ceil(count);
// 					// Call function every ms
// 					setTimeout(updateCount, 1);
// 				} else {
// 					counter.innerText = target;
// 				}
// 			};

// 			updateCount();
// 		});
// 	}, []);

// 	return (
// 		<div className="counter">
// 			<div className="header">
// 				<h1>Animated Counter</h1>
// 			</div>
// 			<section className="counters">
// 				<div className="container">
// 					<div>
// 						<i className="fab fa-youtube fa-4x"></i>
// 						<div className="counter" data-target="60000">
// 							0
// 						</div>
// 						<h3>Subscribers</h3>
// 					</div>
// 					<div>
// 						<i className="fab fa-twitter fa-4x"></i>
// 						<div className="counter" data-target="15000">
// 							0
// 						</div>
// 						<h3>Followers</h3>
// 					</div>
// 					<div>
// 						<i className="fab fa-facebook fa-4x"></i>
// 						<div className="counter" data-target="9000">
// 							0
// 						</div>
// 						<h3>Likes</h3>
// 					</div>
// 					<div>
// 						<i className="fab fa-linkedin fa-4x"></i>
// 						<div className="counter" data-target="5000">
// 							0
// 						</div>
// 						<h3>Connections</h3>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default AnimatedCounter;
import { useEffect } from "react";
import "./AnimatedCounter.css";

function AnimatedCounter() {
	useEffect(() => {
		const counters = document.querySelectorAll(".counter");
		const speed = 10000; // The lower the slower

		counters.forEach((counter) => {
			const updateCount = () => {
				const target = +counter.getAttribute("data-target");
				let count = +counter.innerText;

				// Lower inc to slow and higher to slow
				const inc = target / speed;

				// Check if target is reached
				if (count < target) {
					// Add inc to count and output in counter
					count += inc;
					// To avoid decimal numbers in display, round to integer
					counter.innerText = Math.ceil(count);
					// Call function every ms
					setTimeout(updateCount, 1);
				} else {
					counter.innerText = target;
				}
			};

			updateCount();
		});
	}, []);

	return (
		<div className="counter-body">
			<section className="counters">
				<div className="container">
					<div>
						<i className="fab fa-youtube fa-4x"></i>
						<div className="counter" data-target="820">
							0
						</div>
						<h1>Clients</h1>
					</div>
					<div>
						<i className="fab fa-twitter fa-4x"></i>
						<div className="counter" data-target="244">
							0
						</div>
						<h1>Services</h1>
					</div>
					<div>
						<i className="fab fa-facebook fa-4x"></i>
						<div className="counter" data-target="91">
							0
						</div>
						<h1>Success Rate</h1>
					</div>
					<div>
						<i className="fab fa-linkedin fa-4x"></i>
						<div className="text-counter">Infinte</div>
						<h1>Success Stories</h1>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AnimatedCounter;
