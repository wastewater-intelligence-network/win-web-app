import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Structure from "../images/structure.jpg";
import NewHeader from "./newHeader";

const Consortium = () => {
  return (
    <>
      <Header  />
      <Container maxWidth="lg">
        <Box className="customeMarginBottom ">
          <Typography
            className="consortium-title"
            sx={{
              typography: { sm: "h3", xs: "h6" },
              mt: 4,
            }}
          >
            Structure of WIN Consortium
          </Typography>

          <Typography variant="body2" className="consortium-text">
            To institutionalise health surveillance and to bolster the urban
            healthcare governance in Indian cities, the pilot deployment will
            entail end-to-end strategies and processes for collecting and
            testing wastewater samples by bringing together medical experts,
            private companies, researchers, scientists and other relevant
            resource persons/institutions working in the field of WBE through
            the ‘WIN Consortium’. They will come together to design strategies,
            standardised protocols and/or support in the deployment of relevant
            infrastructure to track the immediate outbreak of CoViD-19 and
            regularly occurring diseases that can be tracked through sewage.
            These members will also undertake research to develop methods and
            technologies related to WBE.
          </Typography>

          <Typography variant="body2" className="consortium-text">
            In order to have an efficient and functioning Consortium, the team
            has come up with a simplified structure. The WIN Consortium shall
            have a National Working Group which will act as an advisory body
            where research institutes, technical experts, knowledge partners,
            innovation-based organization, start-ups will be a part and City
            Working Group at the city level will help in operationalisation and
            advisory of the WIN Programme. The National Institute of Urban
            Affairs will be the governing body of the WIN Consortium and each
            city will govern the city working group and will also be members of
            the National Working Group. The structure becomes holistic as the
            city becomes the common agent to capture the experts advice from the
            National Working Group and be the implementer of the programme on
            the ground.
          </Typography>

          <Typography  className="consortium-text" sx={{my:8}}>
         <span className="textBold">  The figure below will give an overview of a stratified structure:</span>  
          </Typography>

          <Box sx={{mt:5}}>
            <img alt="structure" className="image-responsive" src={Structure} />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Consortium;
