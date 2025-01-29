import "./Enroll.scss"
import Button from "../../components/Button/Button.jsx";
import {
  BUTTON_VARIATION_TRANSPARENT,
  ENROLL_BUTTON_TEXT,
  ENROLL_SUBTITLE,
  ENROLL_TEXT,
  ENROLL_TITLE,
  SCHEDULES_AND_LOCATIONS_URL
} from "../../constants.jsx";

const Enroll = () => {
  return (
    <div className="enroll">
      <div className="title-segment">
        <h2>{ENROLL_TITLE}</h2>
        <p>{ENROLL_SUBTITLE}</p>
      </div>
      <div className="paragraph-segment">
        {ENROLL_TEXT}
      </div>
      <Button className="button" linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
              text={ENROLL_BUTTON_TEXT}/>
    </div>
  );
};

export default Enroll;
