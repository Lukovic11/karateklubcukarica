import "./PageNotFound.scss"
import karatedo from "../../assets/karatedo.png"

const PageNotFound = () => {
  return (
    <div className="pagenotfound-wrapper">
      <img className="background-img" src={karatedo} alt="Karate Do in Japanese"/>
      <p>Tražena stranica ne postoji</p>
    </div>
  );
};

export default PageNotFound;
