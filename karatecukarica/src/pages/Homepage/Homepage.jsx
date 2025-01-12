import HeroBanner from "../../components/Herobanner/Herobanner";
import "./Homepage.scss"
import Button from "../../components/Button/Button.jsx";
import {BUTTON_VARIATION_TRANSPARENT, SCHEDULES_AND_LOCATIONS_URL} from "../../constants.js";

const Homepage = () => {
  return (
    <div>
      <HeroBanner/>
      <div className="enroll">
        <div className="title-segment">
          <h2>Upis je u toku!</h2>
          <p className="">POSTANI ČLAN</p>
        </div>
        <div className="paragraph-segment">
          <p>Karate je uvek pravi izbor!</p>
          <p>Naš klub okuplja sve generacije – od najmlađih do odraslih, takmičare i rekreativce.</p>
          <p>Isprobajte probni trening na lokaciji koja vam najviše odgovara.</p>
        </div>
        <Button linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
                text="POGLEDAJ LOKACIJE"/>
      </div>
    </div>
  );
};

export default Homepage;
