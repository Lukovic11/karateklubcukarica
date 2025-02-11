import HeroBanner from "../../components/Herobanner/Herobanner";
import Enroll from "../../components/Enroll/Enroll";
import History from "../../components/History/History.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "./Homepage.scss";
import karatedo from "../../assets/karatedo.svg";

const Homepage = () => {
  return (
    <div className="homepage">
      <img className="karatedo-img" src={karatedo} alt=""/>
      <HeroBanner/>
      <Enroll/>
      <History/>
      <Cards/>
    </div>
  );
};

export default Homepage;
