import HeroBanner from "../../components/Herobanner/Herobanner";
import Enroll from "../../components/Enroll/Enroll";
import History from "../../components/History/History.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import karatedo from "../../assets/karatedo.svg";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroBanner/>
      <Enroll/>
      <img className="karatedo-img" src={karatedo} alt=""/>
      <History/>
      <Cards/>
    </div>
  );
};

export default Homepage;
