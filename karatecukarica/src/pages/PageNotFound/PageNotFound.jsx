import "./PageNotFound.scss"
import karatedo from "../../assets/karatedo.svg?react"
import {Link} from "react-router-dom";
import {PNF_IMG_ALT, PNF_TEXT, PNF_TITLE} from "../../constants.jsx";

const PageNotFound = () => {
  return (
    <div className="pagenotfound-wrapper">
      <img className="background-img" src={karatedo} alt={PNF_IMG_ALT}/>
      <div className="text">
        <h1>{PNF_TITLE}</h1>
        <Link to="/">{PNF_TEXT}</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
