import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import {LOCATIONS_IMG_ALT, LOCATIONS_TITLE1, LOCATIONS_TITLE2, SCHEDULE3} from "../../constants";
import locations from "../../assets/locations_img.jpg";
import "./SchedulesAndLocations.scss"
import Location1 from "../../components/Location1/Location1";
import Location2 from "../../components/Location2/Location2";
import Location3 from "../../components/Location3/Location3";
import {useState} from "react";
import {KINDERGARTEN} from "../../KINDERGARTEN";

const SchedulesAndLocations = () => {

  const [kindergarten, setKindergarten] = useState(SCHEDULE3.loc1.name);
  const [map1, setMap1] = useState(false);
  const [map2, setMap2] = useState(false);
  const [map3, setMap3] = useState(false);

  return <div>
    <HerobannerV2 image={locations} alt={LOCATIONS_IMG_ALT} title1={LOCATIONS_TITLE1}
                  title2={LOCATIONS_TITLE2}/>
    <div className="schedules-and-locations">
      <div className="location-wrapper">
        <Location1 onSetMap={(item) => setMap1(item)}/>
        <div className={map1 ? "map-container" : "hidden map-container"}>
          <iframe className="map"
                  src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Milosava%20Vlajica%201+(Banovo%20Brdo)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
      <div className="location-wrapper">
        <Location2 onSetMap={(item) => setMap2(item)}/>
        <div className={map2 ? "map-container" : "hidden map-container"}>
          <iframe className="map"
                  src="https://maps.google.com/maps?width=30%25&amp;height=200&amp;hl=en&amp;q=Jablanicka%203i+(Cerak)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
      <div className="location-wrapper">
        <Location3 onSelectKg={(item) => setKindergarten(item)} onSetMap={(item) => setMap3(item)}/>
        {kindergarten === SCHEDULE3.loc1.name &&
          <div className={map3 ? "map-container" : "hidden map-container"}>
            <p>{KINDERGARTEN} {SCHEDULE3.loc1.name}</p>
            <iframe className="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Radivoja%20Rakonjca%204A+(Vrtic%20Sunce)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        }
        {kindergarten === SCHEDULE3.loc2.name &&
          <div className={map3 ? "map-container" : "hidden map-container"}>
            <p>{KINDERGARTEN} {SCHEDULE3.loc2.name}</p>
            <iframe className="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Trebevic%CC%81ka%2028,%20Beograd+(Vrtic%20Sunce)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>}
        {kindergarten === SCHEDULE3.loc3.name &&
          <div className={map3 ? "map-container" : "hidden map-container"}>
            <p>{KINDERGARTEN} {SCHEDULE3.loc3.name}</p>
            <iframe className="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Platana%208,%20Beograd+(Vrtic%20Sunce)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>}
        {kindergarten === SCHEDULE3.loc4.name &&
          <div className={map3 ? "map-container" : "hidden map-container"}>
            <p>{KINDERGARTEN} {SCHEDULE3.loc4.name}</p>
            <iframe className="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Dimitrija%20Avramovica%2017,%20Beograd+(Vrtic%20Sunce)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>}
      </div>
    </div>
  </div>
    ;
};

export default SchedulesAndLocations;
