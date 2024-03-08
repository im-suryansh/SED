import "./App.css";
import Founder from "./Pages/Founder/Founder";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import UsVsOthers from "./Pages/UsVsOthers/UsVsOthers";
import Why from "./Pages/Why/Why";
import Process from "./Pages/Process/Process";
import Packages from "./Pages/Packages/Packages";
import Bonus from "./Pages/Bonus/Bonus";
import Team from "./Pages/Team/Team";
import Plinkedin from "./Pages/Plinkedin/Plinkedin";
import Pinstagram from "./Pages/Pinstagram/Pinstagram";
import Pposter from "./Pages/Pposter/Pposter";
import ServiceList from "./Pages/ServiceList/ServiceList";
import ScrollHover from "./Components/ScrollHover/ScrollHover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Designer from "./Pages/Designer/Designer";
import SocialMedia from "./Pages/SocialMedia/SocialMedia";
import VideoEditor from "./Pages/VideoEditor/VideoEditor";
import Website from "./Pages/Website/Website";
import Ui from "./Pages/Ui/Ui";
import FacebookAds from "./Pages/FacebookAds/FacebookAds";
import GoogleAds from "./Pages/GoogleAds/GoogleAds";
import GoogleSeo from "./Pages/GoogleSeo/GoogleSeo";
import Shopify from "./Pages/Shopify/Shopify";
import BookPage from "./Pages/BookPage/BookPage";
import Test from "./Pages/Test/Test";
import Navbar from "./Pages/Navbar/Navbar";
// import NavigationBar from "./Pages/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{<Navbar />}
								{<Home />}
								{<Why />}
								{<UsVsOthers />}
								{<Founder />}
								{<Services />}
								{<Test />}
								{<Process />}

								{<Packages />}
								{<Bonus />}
								{<Team />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/Designer"
						element={
							<>
								{<Designer />}

								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/SocialMedia"
						element={
							<>
								{<SocialMedia />}
								{<Plinkedin />}
								<Pinstagram />
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/Website"
						element={
							<>
								{<Website />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/VideoEditor"
						element={
							<>
								{<VideoEditor />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/Ui"
						element={
							<>
								{<Ui />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/FacebookAds"
						element={
							<>
								{<FacebookAds />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/GoogleAds"
						element={
							<>
								{<GoogleAds />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/GoogleSeo"
						element={
							<>
								{<GoogleSeo />}
								{<BookPage />}
							</>
						}
					/>
					<Route
						path="/Shopify"
						element={
							<>
								{<Shopify />}
								{<BookPage />}
							</>
						}
					/>
					<Route path="/BookPage" element={<>{<BookPage />}</>} />
				</Routes>
			</Router>
			{/* <Home />
			<Why />
			<UsVsOthers />
			<Founder />
			<Services />
			<Process />
			<Packages />
			<Bonus />
			<Team />
			<Plinkedin />
			<Pinstagram />
			<Pposter />
			<ServiceList />
			<ScrollHover /> */}
		</div>
	);
}

export default App;
