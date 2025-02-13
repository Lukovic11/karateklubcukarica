import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import {LOCATIONS_IMG_ALT, LOCATIONS_TITLE1, LOCATIONS_TITLE2} from "../../constants";
import locations from "../../assets/locations_img.jpg";
import "./SchedulesAndLocations.scss"

const SchedulesAndLocations = () => {
  return <div>
    <HerobannerV2 image={locations} alt={LOCATIONS_IMG_ALT} title1={LOCATIONS_TITLE1}
                  title2={LOCATIONS_TITLE2}/>
    <div className="map-container">
      <iframe width="50%" height="400"
              src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Jablanicka%203i+(Cerak)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
    <div className="map-container">
      <iframe width="50%" height="400"
              src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Milosava%20Vlajica%201+(Banovo%20Brdo)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
  </div>;
};

export default SchedulesAndLocations;
