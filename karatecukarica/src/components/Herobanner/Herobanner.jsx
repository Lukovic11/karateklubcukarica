import styles from "./Herobanner.module.scss";
import Button from "../Button/Button";
import herobanner_img from "../../assets/herobanner_img.jpg";
import {
  SCHEDULES_AND_LOCATIONS_URL,
  HEROBANNER_IMG_ALT,
  HEROBANNER_TEXT_1,
  HEROBANNER_TEXT_2,
  HEROBANNER_BUTTON_TEXT,
} from "../../constants";

//TODO: Change herobanner image and alt text
const HeroBanner = () => {
  return (
    <div className={styles.herobanner_container}>
      <div className={styles.herobanner}>
        <img src={herobanner_img} alt={HEROBANNER_IMG_ALT} />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>
              {HEROBANNER_TEXT_1} <div>{HEROBANNER_TEXT_2}</div>
            </h1>
            <Button
            className={styles.buttonHeroBanner}
              linkURL={`/${SCHEDULES_AND_LOCATIONS_URL}`}
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
