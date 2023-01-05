import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material";
import * as React from "react";
import Footer from "./footer";

import "./privacy.css";

function Privacy() {
	return (
		<>
			<div className="Privacy">
				<h3>Data Privacy and Confidentiality Policy</h3>
				<p>Effective date: 01-01-2022</p>
				<p>Last updated: 17-03-2022</p>

				<h4>1. Introduction</h4>
				<p>
					National Institute of Urban Affairs ("us", "we", or "our")
					operates (https://win.niua.org/) (the "Site") and the mobile
					app. This page informs you of our policies regarding the
					collection, use and disclosure of Personal Information we
					receive from users of the Site.
				</p>
				<p>
					We use your Personal Information only for providing and
					improving the Site and our app. By using the Site or app,
					you agree to the collection and use of information in
					accordance with this policy.
				</p>
				<p>
					Our Privacy Policy governs your visit to win.niua.org, and
					explains how we collect, safeguard and disclose information
					that results from your use of our Service.
				</p>
				<p>
					We use your data to provide and improve Service. By using
					Service, you agree to the collection and use of information
					in accordance with this policy. Unless otherwise defined in
					this Privacy Policy, the terms used in this Privacy Policy
					have the same meanings as in our Terms and Conditions.
				</p>
				<p>
					Our Terms and Conditions (“Terms”) govern all use of our
					Service and together with the Privacy Policy constitutes
					your agreement with us (“agreement”).
				</p>

				<h4>2. Definitions</h4>
				<p>
					SERVICE means the win.niua.org website and using the app
					operated by National Institute of Urban Affairs.
				</p>
				<p>
					PERSONAL DATA means data about a living individual who can
					be identified from those data (or from those and other
					information either in our possession or likely to come into
					our possession).
				</p>
				<p>
					USAGE DATA is data collected automatically either generated
					by the use of Service or from Service infrastructure itself
					(for example, the duration of a page visit).
				</p>
				<p>
					COOKIES are small files stored on your device (computer or
					mobile device).
				</p>
				<p>
					DATA CONTROLLER means a natural or legal person who (either
					alone or jointly or in common with other persons) determines
					the purposes for which and the manner in which any personal
					data are, or are to be, processed. For the purpose of this
					Privacy Policy, we are a Data Controller of your data.
				</p>
				<p>
					DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or
					legal person who processes the data on behalf of the Data
					Controller. We may use the services of various Service
					Providers in order to process your data more effectively.
				</p>
				<p>
					DATA SUBJECT is any living individual who is the subject of
					Personal Data.
				</p>
				<p>
					THE USER is the individual using our Service. The User
					corresponds to the Data Subject, who is the subject of
					Personal Data.
				</p>

				<h4>3. Information Collection And Use</h4>
				<p>
					We collect several different types of information for
					various purposes to provide and improve our Service to you.
				</p>

				<h4>4. Types of Data Collected</h4>
				<h5>Personal Data</h5>
				<p>
					While using our Service, we may ask you to provide us with
					certain personally identifiable information that can be used
					to contact or identify you (“Personal Data”). Personally
					identifiable information may include, but is not limited to:
				</p>
				<ul>
					<li>
						<p>0.1. Email address</p>
					</li>
					<li>
						<p>0.2. First name and last name</p>
					</li>
					<li>
						<p>0.3. Phone number</p>
					</li>
					<li>
						<p>
							0.4. Address, Country, State, Province, ZIP/Postal
							code, City
						</p>
					</li>
					<li>
						<p>0.5. Cookies and Usage Data</p>
					</li>
				</ul>
				<p>
					We may use your Personal Data to contact you with
					newsletters, marketing or promotional materials and other
					information that may be of interest to you. You may opt out
					of receiving any, or all, of these communications from us by
					following the unsubscribe link.
				</p>

				<h5>Usage Data</h5>
				<p>
					We may also collect information that your browser sends
					whenever you visit our Service or when you access Service by
					or through any device (“Usage Data”).
				</p>
				<p>
					This Usage Data may include information such as your
					computer's Internet Protocol address (e.g. IP address),
					browser type, browser version, the pages of our Service that
					you visit, the time and date of your visit, the time spent
					on those pages, unique device identifiers and other
					diagnostic data.
				</p>
				<p>
					When you access Service with a device, this Usage Data may
					include information such as the type of device you use, your
					device unique ID, the IP address of your device, your device
					operating system, the type of Internet browser you use,
					unique device identifiers and other diagnostic data.
				</p>

				<h5>Location Data</h5>
				<p>
					We may use and store information about your location if you
					give us permission to do so (“Location Data”). We use this
					data to provide features of our Service, to improve and
					customize our Service.
				</p>
				<p>
					You can enable or disable location services when you use our
					Service at any time by way of your device settings.
				</p>

				<h5>Tracking Cookies Data</h5>
				<p>
					We use cookies and similar tracking technologies to track
					the activity on our Service and we hold certain information.
				</p>
				<p>
					Cookies are files with a small amount of data which may
					include an anonymous unique identifier. Cookies are sent to
					your browser from a website and stored on your device. Other
					tracking technologies are also used such as beacons, tags
					and scripts to collect and track information and to improve
					and analyze our Service.
				</p>
				<p>
					You can instruct your browser to refuse all cookies or to
					indicate when a cookie is being sent. However, if you do not
					accept cookies, you may not be able to use some portions of
					our Service.
				</p>

				<h4>Contact Us</h4>
				<p>
					If you have any questions about this Privacy Policy, please
					contact us by email: win@niua.org.
				</p>
			</div>
			<Footer />
		</>
	);
}

export default Privacy;
