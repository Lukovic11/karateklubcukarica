import "./PageNotFound.scss"
import karatedo from "../../assets/karatedo.svg?react"
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotfound-wrapper">
      <img className="background-img" src={karatedo} alt="Karate Do in Japanese"/>
      <div className="text">
        <h1>Tražena stranica ne postoji</h1>
        <Link to="/">Vrati se na početnu stranicu</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
