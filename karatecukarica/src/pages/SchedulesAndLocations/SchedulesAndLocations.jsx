import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import {LOCATIONS_IMG_ALT, LOCATIONS_TITLE1, LOCATIONS_TITLE2} from "../../constants";
import locations from "../../assets/locations_img.jpg";

const SchedulesAndLocations = () => {
  return <div><HerobannerV2 image={locations} alt={LOCATIONS_IMG_ALT} title1={LOCATIONS_TITLE1}
                            title2={LOCATIONS_TITLE2}/></div>;
};

export default SchedulesAndLocations;
