import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import summercamp from "../../assets/summercamp_img.jpg";
import {
  CAMP_2022_DATE,
  CAMP_2022_DESC,
  CAMP_2022_ENDING,
  CAMP_2022_TEXT,
  CAMP_2022_TITLE,
  CAMP_2022_TITLE_YEAR,
  CAMP_IMG_ALT,
  CAMP_TITLE1,
  GROUP_IMAGE_ALT,
  KOPAONIK_IMAGE1_ALT,
  KOPAONIK_IMAGE2_ALT,
  KOPAONIK_IMAGE3_ALT
} from "../../constants";
import kop1 from "../../assets/summercamp/kop1.jpg";
import kop2 from "../../assets/summercamp/kop2.jpg";
import kop3 from "../../assets/summercamp/kop3.jpg";
import kop4 from "../../assets/summercamp/kop4.jpg";
import "./SummerCamp.scss"
import { Helmet } from "react-helmet-async";

const SummerCamp = () => {
  return (
    <div className="summer-camp">
      <Helmet>
        <title> Vesti Karate kluba Čukarica {CAMP_2022_TITLE_YEAR}</title>
        <meta name="description" content="Vesti Karate kluba Čukarica" />
        <meta property="og:title" content={"Vesti Karate kluba Čukarica"} />
        <meta property="og:url" content="https://karatecukarica.rs/vesti" />
        <meta property="og:type" content="article" />
      </Helmet>
      <HerobannerV2
        image={summercamp}
        title1={CAMP_TITLE1}
        alt={CAMP_IMG_ALT}
      />
      <div className="summer-camp-content">
        <div className="camp-item">
          <div className="camp-item-heading">
            <p className="camp-title">{CAMP_2022_TITLE}</p>
            <p className="camp-title-year">{CAMP_2022_TITLE_YEAR}</p>
          </div>
          <p className="camp-date">{CAMP_2022_DATE}</p>
          <div className="camp-desc">{CAMP_2022_DESC}</div>
          <img src={kop1} alt={GROUP_IMAGE_ALT} />
          <p className="camp-text">{CAMP_2022_TEXT}</p>
        </div>
        <div className="camp-gallery">
          <img src={kop2} alt={KOPAONIK_IMAGE1_ALT} />
          <img src={kop3} alt={KOPAONIK_IMAGE2_ALT} />
          <img src={kop4} alt={KOPAONIK_IMAGE3_ALT} />
        </div>
        <p className="camp-ending">{CAMP_2022_ENDING}</p>
      </div>
    </div>
  );
};

export default SummerCamp;
