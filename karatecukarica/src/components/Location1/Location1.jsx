import {useState} from "react";
import {
  GROUP,
  HIDE_DETAILS_BUTTON,
  LOC1_ADDRESS1,
  LOC1_ADDRESS2,
  LOC1_DAYS,
  LOCATION1,
  SCHEDULE,
  SCHEDULE1,
  SHOW_DETAILS_BUTTON
} from "../../constants";
import "./Location1.scss";
import {ChevronDown} from "lucide-react";

const Location1 = ({onSetMap}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    onSetMap(!showDetails);
  };

  return (
    <div className="location-info">
      <p className="location-name">{LOCATION1}</p>
      <p className="address1">{LOC1_ADDRESS1}</p>
      <p className="address2">{LOC1_ADDRESS2}</p>

      <button className="details-button" onClick={toggleDetails}>
        {SHOW_DETAILS_BUTTON}
        <ChevronDown className={`details-icon ${showDetails ? 'rotate' : ''}`}/>
      </button>

      <div className={`additional-info ${showDetails ? "visible" : ""}`}>
        <div className="schedule-days">
          <p className="schedule-title">{SCHEDULE}</p>
          <p className="days">{LOC1_DAYS}</p>
        </div>
        <div className="schedule">
          {Object.entries(SCHEDULE1).map(([groupKey, groupData]) => (
            <div key={groupKey} className="schedule-item">
              <div className="groups">
                {GROUP}
                <span className="group-name">&nbsp;{groupData.name}</span>
              </div>
              <p className="time">
                {groupData.timeStart} - {groupData.timeEnd}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location1;