import "./RulesHeading.scss"
import Button from "../../components/Button/Button.jsx";
import {
  BUTTON_VARIATION_TRANSPARENT,
  ENROLL_BUTTON_TEXT,
  RULES_SUBTITLE1,
  RULES_SUBTITLE2,
  RULES_TEXT,
  RULES_TITLE,
  SCHEDULES_AND_LOCATIONS_URL
} from "../../constants.jsx";

const RulesHeading = () => {
  return (
    <div className="rules-heading">
      <div className="title-segment">
        <h2>{RULES_TITLE}</h2>
        <div className="title-design subtitle">
          <p>{RULES_SUBTITLE1}</p>
          <p className="gray">{RULES_SUBTITLE2}</p>
        </div>
      </div>
      <div className="paragraph-segment">
        {RULES_TEXT}
      </div>
      <Button className="button" linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
              text={ENROLL_BUTTON_TEXT}/>
    </div>
  );
};

export default RulesHeading;
