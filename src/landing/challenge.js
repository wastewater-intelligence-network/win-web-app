import * as React from "react";
//import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import './challenge.css';
import Header from "./header";

function Challange() {

    return (
<>

<Header />

        <Box sx={{ p: 2, border: '1px dashed grey' }}>
            <div className="container Challenge_challenge_container__2Ptd3 quicksandregular-font-family">
                <h1 class="text-center quicksandbold-font-family">Automated Sampling in Wastewater Intelligence Network</h1>
                <div class="text-center"><a href="https://cityinx.niua.org/challenge/196/anchor/87" target="_blank"><button class="btn btn-primary" type="button">Apply for the challenge on City Innovation Exchange</button></a></div>
                <br /><hr /><br />
                <h3 className="quicksandmedium-font-family">Challenge Summary</h3>
                <p>To enable automated composite samples collection from wastewater to track CoViD-19 collected from STPs and SPS by pooling multiple grab samples, specified frequency over a set period of time.</p>
                <h3 className="quicksandmedium-font-family">Challenge Scenario</h3>
                <p>Wastewater samples have been collected manually across the world and in India for testing various diseases. Through the WIN Programme, it is targeted to collect samples from STPs and SPSs manually and also by an easy and absolutely reliable method of automated sampling from wastewater to track CoViD-19 and should be vandalism-proof, have to be collected at desired time intervals, time-controlled sample volumes, should be adapted to the flow rate of the wastewater, and set frequency filled into individually assigned sample bottles. Another important objective is to reduce the health hazards of the on-ground personnel by minimizing the human and waste contact while collecting samples through automated bots. Composite samples to be collected from STPs and SPSs weekly and transported to the lab for testing after collection each time.</p>
                <h3 className="quicksandmedium-font-family">Profile of Target Beneficiaries</h3>
                <p>Surat Smart City Development Limited is an unlisted public company incorporated on 31 March, 2016. It is classified as a public limited company and is located in Surat, Gujarat and Chaitanya Yogeshbhai Bhatt is the current CEO. Up to 75% of its population is served by a sewerage network. The active Drainage Department at Surat Municipal Corporation (SMC) have made a tremendous effort to digitize sewerage-related spatial data and formulate a sewerage master plan. These institutions at Surat provide an institutionally and administratively agile atmosphere which is so conducive and strong for innovation. To micromanage, mitigate the CoViD-19 situation and be prepared for future waves and viruses, Surat wants to deploy WIN Programme in the west zone of the city for the pilot where the wastewater samples will be collected by both Manual Sampling and Automated Sampling from STPs and SPSs.</p>
                <h3 className="quicksandmedium-font-family">Solution Requirements</h3>

                <h6 className="quicksandmedium-font-family">Functional requirements of the end-user</h6>
                <p>Following are the functional requirements to be fulfilled:</p>
                <ul>
                    <li>Minimal exposure of humans to the wastewater</li>
                    <li>Composite sample over a period of 3 to 6 hours</li>
                    <li>Ability to sample from inaccessible and/or dangerous locations in the sewage network</li>
                    <li>Ability to measure other parameters like ambient wastewater temperature, pH of the wastewater and on need basis requirements</li>
                    <li>Store the sample at 4 degree C during collection</li>
                    <li>Transport the sample to the testing lab in cold storage chain</li>
                    <li>Sterilization of the equipments used after the sample collection</li>
                    <li>Operations and Maintenance of the automated sampling bots</li>
                    <li>The samples should be collected for 12 weeks</li>
                    <li>Any damage or repair of the automated sampling equipment/bots should be handled by the start-up/company</li>
                </ul>
                <h6 className="quicksandmedium-font-family">Functional &amp; Operational capabilities</h6>
                <p>The solution should be accessible and mobile to operate and collect composite samples from wastewater in STPs and SPSs and should be vandalism-proof, have to be collected at desired time intervals, time-controlled sample volumes, should be adapted to the flow rate of the wastewater, and set frequency filled into individually assigned sample bottles to avoid health hazardous elements while collecting samples. The automatic sampler must be able to collect a large enough sample for all parameter analyses. The automatic sampler should be capable of providing a lift of at least 20 feet and the sample volume should be adjustable since the volume is a function of the pumping head. The intake line leading to the pump must be purged before each sample is collected. Surat Smart city will enable the whole process as a supervisor, providing accessibility and permissions to the sample locations, including manholes, SPS/STPs or any other locations.</p>
                <h3 className="quicksandmedium-font-family">Expected Tangible Outcomes &amp; Benefits</h3>

                <ul>
                    <li>Wastewater sampling with minimal human exposure to hazardous elements</li>
                    <li>Pooled sample up to 12hrs without deployment of on-ground personnel for the whole time period</li>
                    <li>Temperature control (4C) of the samples from the moment of collection</li>
                    <li>Additional to the samples, simultaneous collection of additional data for modeling (ie. temperatures, flows, PH, etc.)</li>
                    <li>Ability to sample from a wider range of locations in the sewage network which are inaccessible to humans and/or to dangerous</li>
                    <li>Overall minimal human interaction avoiding hazards and human errors</li>
                </ul>
                <h3 className="quicksandmedium-font-family">Deployment Constraints</h3>

                <ul>
                    <li>To minimize the exposure to health hazards, the automated sampling solution is required to be tested out and later draw out an comparison of both Manual sampling and Automated sampling of collection to understand the benefits of the solution</li>
                    <li>Auto sampling equipment will be deployed to collect samples from STPs, SPSs and manholes. These are toxic biohazard environments and need specialized equipment and trained personnel.</li>
                    <li>An auto sampling equipment could be deployed at a designated site for upto 12 hours to collect composite samples.</li>
                </ul>
                <h3 className="quicksandmedium-font-family">Gaps in current solution</h3>
                <ul>
                    <li>Additional data for modeling (ie. temperatures, flows, PH, etc.) cannot be taken simultaneously. Currently, it has to be done before or after the sample collection hence additional man hours, instruments, consumables and resources are required.</li>
                    <li>Samples cannot be refrigerated while being collected hence there is degradation in the quality of the samples that can lead to possible errors in the results. Currently in manual sampling. The cold chain starts after the sample collection.</li>
                    <li>Direct and prolonged human contact during the whole sample collection process. Currently usage of PPE kits and other safety mechanisms are being used which do not ensure the safety of the on-ground personnel 100%</li>
                </ul>
            </div>
        </Box>
        </>
    );
}

export default Challange;