import "./Enroll.scss"
import Button from "../../components/Button/Button.jsx";

const Enroll = () => {
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
      <Button className="button" linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
              text={ENROLL_BUTTON_TEXT}/>
    </div>
  );
};

export default Enroll;
