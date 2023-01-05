import * as React from "react";
import Box from "@mui/material/Box";
import Niua from "../Icons/niua-white.svg";
import Iscf from "../Icons/iscf-white.svg";
import Mohua from "../Icons/mohua-white.svg";
import Smc from "../Icons/smc-white.svg";
import Sscdl from "../Icons/sscdl.svg";
import { Divider, Grid, Typography } from "@mui/material";
function BannerLogos() {
	return (
		<>
			<Box className="mainBox">
				<Grid
					className="hero-logos"
					container
					rowSpacing={3}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={6} sm={4} md={2}>
						<img
							className="image-responsive m-width-40"
							alt="Iscf"
							src={Iscf}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<img
							className="image-responsive m-width-100"
							alt="Nius"
							src={Niua}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<img
							className="image-responsive mohua-logo m-width-100"
							alt="Mohua"
							src={Mohua}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<img
							className="image-responsive m-width-100"
							alt="Smc"
							src={Smc}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<img
							className="image-responsive m-width-100"
							alt="Sscdl"
							src={Sscdl}
						/>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default BannerLogos;
