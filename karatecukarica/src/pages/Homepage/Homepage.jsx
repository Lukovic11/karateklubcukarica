import HeroBanner from "../../components/Herobanner/Herobanner";
import Enroll from "../../components/Enroll/Enroll";
import History from "../../components/History/History.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "./Homepage.scss";
import karatedo from "../../assets/karatedo.svg";
import { Helmet } from "react-helmet-async";
import { PNF_IMG_ALT } from "../../constants.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Karate Klub Cukarica | Početna</title>
        <meta
          name="description"
          content="Dobrodošli na zvaničnu stranicu Karate klub Cukarica. Pridružite se našem timu i postanite deo tradicije, discipline i sportskog duha."
        />
        <meta
          name="keywords"
          content="karate klub čukarica, karate za decu, karate beograd, borilačke veštine, treninzi, sportski klubovi čukarica"
        />
        <meta name="geo.region" content="RS-BG" />
        <meta name="geo.placename" content="Beograd, Čukarica" />
        <meta name="language" content="sr" />
        <meta property="og:title" content="Karate klub Cukarica" />
        <meta
          property="og:description"
          content="Treninzi karatea za sve uzraste. Profesionalni pristup, sportski duh i razvoj discipline. Priključi se našem klubu!"
        />
        <meta property="og:url" content="https://karatecukarica.rs/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <img className="karatedo-img" src={karatedo} alt={PNF_IMG_ALT} />
      <HeroBanner />
      <Enroll />
      <History />
      <Cards />
    </div>
  );
};

export default Homepage;
