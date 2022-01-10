import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";
import {Helmet} from "react-helmet";

function Home({lang}) {
  const {doordash, instagram, yelp, facebook, call, ezcater, grubhub, ubereats} = iconDetails;

  return (
    <div className="home">
      <Helmet>
        <title>Chevitas Bagels</title>
        <meta name="description" content="Restaurant providing juice and bagels to fuel your day!"/>
      </Helmet>
      <HeroImage page="home"/>
      <Carousel />
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <ChevitasIcon icon={instagram} />
          <ChevitasIcon icon={facebook} />
          <ChevitasIcon icon={yelp} />
          <ChevitasIcon icon={call} />
          <ChevitasIcon icon={ezcater} />
          <ChevitasIcon icon={doordash} />
          <ChevitasIcon icon={grubhub} />
          <ChevitasIcon icon={ubereats} />
        </div>
      </div>
      <ContactUs load="widget" lang={lang}/>
    </div>
  )
}

export default Home;
