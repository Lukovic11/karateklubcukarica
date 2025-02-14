import {
  GROUP,
  HIDE_DETAILS_BUTTON,
  LOC2_ADDRESS1,
  LOC2_ADDRESS2,
  LOC2_DAYS,
  LOCATION2,
  SCHEDULE,
  SCHEDULE2,
  SHOW_DETAILS_BUTTON
} from "../../constants";
import "./Location2.scss";
import {useState} from "react";

const Location2 = ({onSetMap}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    onSetMap(!showDetails);
  };

  return (
    <div className="location-info">
      <p className="location-name">{LOCATION2}</p>
      <p className="address1">{LOC2_ADDRESS1}</p>
      <p className="address2">{LOC2_ADDRESS2}</p>

      <button className="details-button" onClick={toggleDetails}>
        {showDetails ? HIDE_DETAILS_BUTTON : SHOW_DETAILS_BUTTON}
      </button>

      <div className={`additional-info ${showDetails ? "visible" : ""}`}>
        <div className="schedule-days">
          <p className="schedule-title">{SCHEDULE}</p>
          <p className="days">{LOC2_DAYS}</p>
        </div>
        <div className="schedule">
          {Object.entries(SCHEDULE2).map(([groupKey, groupData]) => (
            <div key={groupKey} className="schedule-item">
              <div className="groups">
                {GROUP}
                <p className="group-name">
                  &nbsp;{groupData.name}
                </p>
              </div>
              <div className="time-container">
                <p className="time">
                  U/Č {groupData.timeStart} - {groupData.timeEnd}
                  {groupData.weekendStart && (
                    <span className="weekend-time">
                  &nbsp;SUB {groupData.weekendStart} - {groupData.weekendEnd}
                </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}
export default Location2;