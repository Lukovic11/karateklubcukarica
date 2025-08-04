import "./Enroll.scss"
import Button from "../../components/Button/Button.jsx";
import {
  BUTTON_VARIATION_TRANSPARENT,
  ENROLL_BUTTON_TEXT,
  ENROLL_SUBTITLE1,
  ENROLL_SUBTITLE2,
  ENROLL_TEXT,
  ENROLL_TITLE,
  SCHEDULES_AND_LOCATIONS_URL
} from "../../constants.jsx";
import { useNavigate } from "react-router-dom";

const Enroll = () => {

  const navigate = useNavigate();

  const navigateToSchedulesAndLocations = () => {
    navigate(`${SCHEDULES_AND_LOCATIONS_URL}`)
  };


  return (
    <div className="enroll">
      <div className="title-segment">
        <h2>{ENROLL_TITLE}</h2>
        <div className="title-design subtitle">
          <p>{ENROLL_SUBTITLE1}</p>
          <p className="gray">{ENROLL_SUBTITLE2}</p>
        </div>
      </div>
      <div className="paragraph-segment">
        {ENROLL_TEXT}
      </div>
      <Button className="button" variation={BUTTON_VARIATION_TRANSPARENT}
              text={ENROLL_BUTTON_TEXT} handleClick = {navigateToSchedulesAndLocations}/>
    </div>
  );
};

export default Enroll;
