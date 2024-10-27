import styles from "./Herobanner.module.scss";
import Button from "../Button/Button";
import herobanner_img from "../../assets/herobanner_img.jpg";
// import logo from "../../assets/logo.png";

//TODO: Change herobanner image and alt text
const HeroBanner = () => {
  return (
    <div className={styles.herobanner_container}>
      <div className={styles.herobanner}>
        <img src={herobanner_img} alt="Herobanner image" />
        <div className={styles.overlay}>
          <div className={styles.content}>
            {/* TODO: Decide if we want to use logo or not */}
            {/* <img src={logo} alt="Logo" /> */}
            <h1>
              KARATE KLUB <div>ČUKARICA</div>
            </h1>
            <Button linkURL="/terminiilokacije" text="UPIŠI SE" variation="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
