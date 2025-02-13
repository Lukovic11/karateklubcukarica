import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import {LOCATIONS_IMG_ALT, LOCATIONS_TITLE1, LOCATIONS_TITLE2} from "../../constants";
import locations from "../../assets/locations_img.jpg";
import "./SchedulesAndLocations.scss"
import Location1 from "../../components/Location1/Location1";

const SchedulesAndLocations = () => {
  return <div>
    <HerobannerV2 image={locations} alt={LOCATIONS_IMG_ALT} title1={LOCATIONS_TITLE1}
                  title2={LOCATIONS_TITLE2}/>
    <div className="schedules-and-locations">
      <div className="location-wrapper">
        <Location1/>
        <div className="map-container">
          <iframe className="map"
                  src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Milosava%20Vlajica%201+(Banovo%20Brdo)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
      <div className="location-wrapper">
        <div className="map-container">
          <iframe className="map"
                  src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Jablanicka%203i+(Cerak)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
    </div>
  </div>;
};

export default SchedulesAndLocations;
