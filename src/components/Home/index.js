import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";

function Home() {
  const {doordash, instagram, yelp, facebook, call, grubhub} = iconDetails;

  return (
    <div className="home">
      <HeroImage page="home" tiled/>
      <Carousel />
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <ChevitasIcon icon={doordash}/>
          <ChevitasIcon icon={instagram} />
          <ChevitasIcon icon={yelp} />
          <ChevitasIcon icon={facebook} />
          <ChevitasIcon icon={call} />
          <ChevitasIcon icon={grubhub} />
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
