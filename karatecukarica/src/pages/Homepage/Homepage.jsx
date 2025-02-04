import HeroBanner from "../../components/Herobanner/Herobanner";
import Enroll from "../../components/Enroll/Enroll";
import History from "../../components/History/History.jsx";

const Homepage = () => {
  return (
    <div>
      <HeroBanner/>
      <div className="page-content">
        <Enroll/>
        <History/>
      </div>
    </div>
  )
    ;
};

export default Homepage;
