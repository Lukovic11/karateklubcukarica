import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import terms from "../../assets/terms_img.jpg";
import {TERMS_IMG_ALT, TERMS_TITLE1, TERMS_TITLE2} from "../../constants";

const Terms = () => {
  return <div>
    <HerobannerV2 image={terms} alt={TERMS_IMG_ALT} title1={TERMS_TITLE1} title2={TERMS_TITLE2}/>
    {/*<Rules/>*/}
  </div>;
};

export default Terms;
