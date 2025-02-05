import HoverCard from "../../components/HoverCard/HoverCard.jsx";
import "./Cards.scss";
import nenad from "../../assets/nenad.jpg";
import miki from "../../assets/miki.jpg";
import vesna from "../../assets/vesna.jpg";
import dusan from "../../assets/dusan.jpg";
import dunja from "../../assets/dunja.jpg";
import kaja from "../../assets/kaja.jpg";
import jasmina from "../../assets/jasmina.jpg";
import {
  DUNJA,
  DUNJA_TEXT,
  DUNJA_TITLE,
  DUSAN,
  DUSAN_TEXT,
  DUSAN_TITLE,
  JASMINA,
  JASMINA_TEXT,
  JASMINA_TITLE,
  KATARINA,
  KATARINA_TEXT,
  KATARINA_TITLE,
  MIROSLAV,
  MIROSLAV_TEXT,
  MIROSLAV_TITLE,
  NENAD,
  NENAD_TEXT,
  NENAD_TITLE,
  VESNA,
  VESNA_TEXT,
  VESNA_TITLE
} from "../../constants.jsx";


const Homepage = () => {
  return (
    <div className="cards">
      <HoverCard name={NENAD} title={NENAD_TITLE} text={NENAD_TEXT} image={nenad}/>
      <HoverCard name={VESNA} title={VESNA_TITLE} text={VESNA_TEXT} image={vesna}/>
      <HoverCard name={MIROSLAV} title={MIROSLAV_TITLE} text={MIROSLAV_TEXT} image={miki}/>
      <HoverCard name={DUSAN} title={DUSAN_TITLE} text={DUSAN_TEXT} image={dusan}/>
      <HoverCard name={DUNJA} title={DUNJA_TITLE} text={DUNJA_TEXT} image={dunja}/>
      <HoverCard name={KATARINA} title={KATARINA_TITLE} text={KATARINA_TEXT} image={kaja}/>
      <HoverCard name={JASMINA} title={JASMINA_TITLE} text={JASMINA_TEXT} image={jasmina}/>
    </div>
  );
};

export default Homepage;
