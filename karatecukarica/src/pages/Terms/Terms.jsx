import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import terms from "../../assets/terms_img.jpg";
import {TERMS_IMG_ALT, TERMS_TITLE1, TERMS_TITLE2} from "../../constants";
import Rules from "../../components/Rules/Rules";
import RulesHeading from "../../components/RulesHeading/RulesHeading";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div>
      <Helmet>
        <title>Pravila i uslovi Karate kluba Čukarica</title>
        <meta
          name="description"
          content="Pročitajte pravila i uslove članstva Karate kluba Čukarica. Sve što treba da znate pre upisa i tokom treninga."
        />
        <meta
          property="og:title"
          content="Pravila i uslovi Karate kluba Čukarica"
        />
        <meta
          property="og:description"
          content="Detaljna pravila i uslovi za članstvo u Karate klubu Čukarica. Transparentnost i sigurnost naših članova."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karatecukarica.rs/uslovi" />
      </Helmet>
      <HerobannerV2
        image={terms}
        alt={TERMS_IMG_ALT}
        title1={TERMS_TITLE1}
        title2={TERMS_TITLE2}
      />
      <RulesHeading />
      <Rules />
    </div>
  );
};

export default Terms;
