import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import summercamp from "../../assets/summercamp_img.jpg";
import {CAMP_IMG_ALT, CAMP_TITLE1, CAMP_TITLE2} from "../../constants";

const SummerCamp = () => {
  return <div><HerobannerV2 image={summercamp} title1={CAMP_TITLE1} title2={CAMP_TITLE2} alt={CAMP_IMG_ALT}/></div>;
};

export default SummerCamp;
