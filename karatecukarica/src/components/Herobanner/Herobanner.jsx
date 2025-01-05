import "./Herobanner.scss";
import Button from "../Button/Button";
import herobanner_img from "../../assets/herobanner_img.jpg";
import {
  HEROBANNER_BUTTON_TEXT,
  HEROBANNER_IMG_ALT,
  HEROBANNER_TEXT_1,
  HEROBANNER_TEXT_2,
  SCHEDULES_AND_LOCATIONS_URL,
} from "../../constants";

const HeroBanner = () => {
  return (
    <div className="herobanner-container">
      <div className="herobanner">
        <img src={herobanner_img} alt={HEROBANNER_IMG_ALT}/>
        <div className="overlay">
          <div className="content">
            <h1>
              {HEROBANNER_TEXT_1}
              <div>{HEROBANNER_TEXT_2}</div>
            </h1>
            <Button
              className="button-herobanner"
              linkURL={`/${SCHEDULES_AND_LOCATIONS_URL}`}
              text={HEROBANNER_BUTTON_TEXT}
              variation=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
