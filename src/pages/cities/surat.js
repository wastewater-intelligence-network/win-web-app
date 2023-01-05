import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import Footer from "../footer";
import { $ } from "react-jquery-plugin";
import ScopeOfSampling from "./scopeOfSampling";
import SamplingStrategy from "./samplingStrategy";
import SamplingLocation from "./samplingLocations";
import WastewaterSurveillance from "./wastewaterSurveillance";
import ScrollButton from "../scrollToTopButton";

function Surat() {
	const onExecuteScrollPageSurat = (props) => {
		if (props === "Wastewater Surveillance in Surat") {
			let _elmScroll = document.getElementById(
				"WastewaterSurveillanceId"
			);
			_elmScroll.scrollIntoView();
		} else if (props === "Scope of Sampling") {
			let _elmScroll = document.getElementById("ScopeOfSamplingId");
			_elmScroll.scrollIntoView();
		} else if (props === "Sampling Strategy") {
			let _elmScroll = document.getElementById("SamplingStrategyId");
			_elmScroll.scrollIntoView();
		} else if (props === "Sampling Location") {
			let _elmScroll = document.getElementById("SamplingLocationId");
			_elmScroll.scrollIntoView();
		}
	};

	useEffect(() => {
		console.log("ABout US");
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Container maxWidth="lg" className="city">
				<div id="WastewaterSurveillanceId">
					<WastewaterSurveillance
						executeScrollPageSurat={onExecuteScrollPageSurat}
					/>
				</div>
			</Container>

			<div id="ScopeOfSamplingId">
				<ScopeOfSampling />
			</div>
			{/* Sampling Strategy Section*/}
			{/* <div id="SamplingStrategyId">
          <SamplingStrategy />
        </div> */}
			<Container maxWidth="lg" className="city">
				<div id="SamplingLocationId">
					<SamplingLocation />
				</div>
			</Container>

			<Footer />
			<ScrollButton />
		</>
	);
}

export default Surat;
