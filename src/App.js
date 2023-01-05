import { React } from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
// import "./styles.css";
import "./scripts.js";
import Layout from "./components/app-layout/Layout";
import Login from "./components/Login";
import Sticker from "./components/print/PrintSticker";
import Qrcode from "./components/print/PrintStickerList";
import { render } from "react-dom";
import { Redirect } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/Setting";
import User from "./components/User";
import Teams from "./components/Teams";
import CollectionPoint from "./components/CollectionPoint";
import Schedules from "./components/Schedules";
import PrintStickerList from "./components/print/PrintStickerList";
import PrintSticker from "./components/print/PrintSticker";
import FormSteper from "./components/FormSteper";
import Sample from "./components/Sample";
import Home from "./pages/home";
import Challenge from "./pages/challenge";
import NewAboutUs from "./pages/newAboutUs";
import ContactUs from "./pages/contactUs";
import Consortium from "./pages/consortium";
import Surat from "./pages/cities/surat";
import FileUpload from "./components/FileUpload";
import SampleStatus from "./components/SampleStatus";
import { useNavigate } from "react-router-dom";
import Privacy from "./pages/privacy";
import Knowledge from "./pages/knowledge";
import HeaderView from "./components/header/HeaderView";

function App() {
	const navigate = useNavigate();

	function requireAuth(nextState, replace, next) {
		if (!localStorage.getItem("login_token")) {
			navigate("/login");
		}
	}

	var token = localStorage.getItem("login_token");

	return (
		<>
			{/* {localStorage.getItem("login_token").length > 0 ? <Layout /> : <span />} */}
			<HeaderView />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/setting"
					element={token ? <Setting /> : <Login />}
				/>
				<Route
					path="/setting/user"
					element={token ? <User /> : <Login />}
				/>
				<Route
					path="/setting/team"
					element={token ? <Teams /> : <Login />}
				/>
				<Route
					path="/setting/collectionpoint"
					element={token ? <CollectionPoint /> : <Login />}
				/>
				<Route
					path="/setting/fileupload"
					element={token ? <FileUpload /> : <Login />}
				/>
				<Route
					path="/setting/samplestatus"
					element={token ? <SampleStatus /> : <Login />}
				/>
				<Route
					path="/schedule"
					element={token ? <Schedules /> : <Login />}
				/>
				<Route
					path="/print"
					element={token ? <PrintSticker /> : <Login />}
				/>
				<Route path="/print-list" element={<PrintStickerList />} />
				<Route path="/steper" element={<FormSteper />} />
				<Route path="/sample" element={<Sample />} />
				<Route path="/aboutus" element={<NewAboutUs />} />
				<Route path="/challenge" element={<Challenge />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/consortium" element={<Consortium />} />
				<Route path="/surat" element={<Surat />} />
				<Route path="/knowledge" element={<Knowledge />} />
				<Route path="/privacy" element={<Privacy />} />

				<Route exact path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
