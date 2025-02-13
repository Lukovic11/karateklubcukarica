import {GROUP, LOC1_ADDRESS1, LOC1_ADDRESS2, LOC1_DAYS, LOCATION1, SCHEDULE, SCHEDULE1} from "../../constants";
import "./Location1.scss";

const Location1 = () => {

  return (
    <div className="location-info">
      <h2>{LOCATION1}</h2>
      <p className="address1">{LOC1_ADDRESS1}</p>
      <p className="address2">{LOC1_ADDRESS2}</p>
      <div className="schedule-days">
        <p className="schedule-title">{SCHEDULE}</p>
        <p className="days">{LOC1_DAYS}</p>
      </div>
      <div className="schedule">
        {Object.entries(SCHEDULE1).map(([groupKey, groupData]) => (
          <div key={groupKey} className="schedule-item">
            <div className="groups">
              {GROUP}
              <p className="group-name">
                &nbsp;{groupData.name}
              </p>
            </div>
            <p className="time">
              {groupData.timeStart} - {groupData.timeEnd}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

}
export default Location1;