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
import Home from "./landing/home";
import Challenge from "./landing/challenge";
import AboutUs from "./landing/aboutUs";
import ContactUs from "./landing/contactUs";
import Consortium from "./landing/consortium";
import Surat from "./landing/cities/surat";
import NewHeader from "./landing/newHeader";
import Privacy from "./landing/privacy";


function App() {
  return (
    <>
      {/* <Layout /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/user" element={<User />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/collectionpoint" element={<CollectionPoint />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/print" element={<PrintSticker />} />
        <Route path="/print-list" element={<PrintStickerList />} />
        <Route path="/steper" element={<FormSteper />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/surat" element={<Surat />} />
        <Route path="/newheader" element={<NewHeader />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
