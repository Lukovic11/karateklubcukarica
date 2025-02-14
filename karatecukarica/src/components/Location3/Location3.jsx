import {HIDE_DETAILS_BUTTON, LOC3_DESC, LOCATION3, SCHEDULE3, SHOW_DETAILS_BUTTON} from "../../constants";
import "../Location3/Location3.scss";
import {KINDERGARTEN} from "../../KINDERGARTEN";
import {useState} from "react";

const Location3 = ({onSelectKg, onSetMap}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    onSetMap(!showDetails);
  };

  return (
    <div className="location-info">
      <p className="location-name">{LOCATION3}</p>
      <p className="desc">{LOC3_DESC}</p>

      <button className="details-button" onClick={toggleDetails}>
        {showDetails ? HIDE_DETAILS_BUTTON : SHOW_DETAILS_BUTTON}
      </button>

      <div className={`additional-info ${showDetails ? "visible" : ""}`}>
        <div className="schedule schedule-kg">
          {Object.entries(SCHEDULE3).map(([locKey, locData]) => (
            <div key={locKey} className="schedule-item">
              <div className="groups kg-groups" onClick={() => onSelectKg(locData.name)}>
                {KINDERGARTEN}
                <p className="group-name">
                  &nbsp;{locData.name}
                </p>
              </div>
              <p className="time">
                {locData.days}
              </p>
            </div>
          ))}
          <div className="coor">
            <p>Koordinator aktivnosti u vrtićima</p>
            <div className="coor-title">prof. <p className="coor-name">&nbsp;Miroslav Milovanović</p></div>
            <p>Tel. 069 50 31 843</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Location3;