import HeroBanner from "../../components/Herobanner/Herobanner";
import Enroll from "../../components/Enroll/Enroll";
import History from "../../components/History/History.jsx";
import Cards from "../../components/Cards/Cards.jsx";


const Homepage = () => {
  return (
    <div>
      <HeroBanner/>
      <Enroll/>
      <History/>
      <Cards/>
    </div>
  );
};

export default Homepage;
