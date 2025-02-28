import "./Herobanner.scss";
import Button from "../Button/Button";
import herobanner_img from "../../assets/herobanner_img.jpg";
import {
  HEROBANNER_BUTTON_TEXT,
  HEROBANNER_IMG_ALT,
  HEROBANNER_TEXT_11,
  HEROBANNER_TEXT_12,
  HEROBANNER_TEXT_2,
  SCHEDULES_AND_LOCATIONS_URL,
} from "../../constants.jsx";

const HeroBanner = () => {

  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <div className="herobanner-container">
      <div className="herobanner">
        <img src={herobanner_img} alt={HEROBANNER_IMG_ALT}/>
        <div className="overlay">
          <div className="content">
            <h1 className="title-design">
              {HEROBANNER_TEXT_11}
              <p className="gray">
                {HEROBANNER_TEXT_12}
              </p>
            </h1>
            <div className="club-name">{HEROBANNER_TEXT_2}</div>
            <Button
              className="button-herobanner"
              handleClick={scrollToFooter}
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
