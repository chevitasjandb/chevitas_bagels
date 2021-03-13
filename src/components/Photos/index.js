import React from 'react';
import './photos.css'
import bagelJuice from "../images/bagel-juice.jpg";
import ranchero from "../images/ranchero-bagel.JPG";
import sandwich1 from "../images/san1.jpg"
import sandwich2 from "../images/san2.jpg"
import sandwich3 from "../images/san3.jpg"
import sandwich4 from "../images/san4.jpg"
import red from "../images/red-smoothie.JPG"
import green from "../images/green-smoothie.JPG"
import orange from "../images/orange-drink.jpg"
import chipoltle from "../images/chip-chicken.JPG";
import chil from "../images/chil.JPG"
import bolillo from "../images/bolillo.JPG"
import banana from "../images/froz-banana.jpg"
import carousel4 from "../images/carousel4.jpg";
import carousel6 from "../images/carousel6.jpg";
import { Helmet } from "react-helmet"


export default function Photos() {
	return (
		<div className="photo">
		<Helmet>
        <title>Photos</title>
        <meta name="description" content="Potos" />
      </Helmet>
			<div className="margin">
				<img className="image" src={bagelJuice} alt="bagel"></img>
			</div>
			<div className="margin">
				<img className="image" src={ranchero} alt="bagel-2"></img>
			</div>
			<div className="margin">
				<img className="image" src={sandwich4} alt="bagel-juice"></img>
			</div>
			<div className="margin">
				<img className="image" src={sandwich1} alt="4"></img>
			</div>
			<div className="margin">
				<img className="image" src={sandwich2} alt="5"></img>
			</div>
			<div className="margin">
				<img className="image" src={sandwich3} alt="6"></img>
			</div>
			<div className="margin m-top">
				<img className="image" src={red} alt="5"></img>
			</div>
			<div className="margin">
				<img className="image" src={green} alt="8"></img>
			</div>
			<div className="margin m-top">
				<img className="image" src={orange} alt="1"></img>
			</div>
			<div className="margin">
				<img className="image" src={chipoltle} alt="1"></img>
			</div>
			<div className="margin m-top">
				<img className="image" src={chil} alt="1"></img>
			</div>
			<div className="margin">
				<img className="image" src={bolillo} alt="1"></img>
			</div>
			<div className="margin">
				<img className="image" src={banana} alt="1"></img>
			</div>
			<div className="margin">
				<img className="image" src={carousel4} alt="1"></img>
			</div>
			<div className="margin">
				<img className="image" src={carousel6} alt="1"></img>
			</div>
		</div>
	);
}
