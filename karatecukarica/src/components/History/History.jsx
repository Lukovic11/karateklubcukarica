import Button from "../../components/Button/Button.jsx";
import history_img from "../../assets/history_img.jpg";
import "./History.scss"

const History = () => {
  return (<div className="history">
    <div className="img-div">
      <img src={history_img} alt="club logo" className="img"/>
    </div>
    <div className="history-text">
      <p className="title">
        Preko 50 godina rada
      </p>
      <p className="text">
        Pre nego što je zvanično osnovan 1975. godine na osnivačkoj Skupštini opštinskog saveza Čukarice, naš klub
        je
        postojao od davne 1968. Tada je naša karate škola bila najmasovnija sekcija u društvu za fizičko
        vaspitanje
        i
        rekreaciju “Partizan”.
        Brojne generacije dece vaspitavane su i stasavale u našoj sali. Mnogi sportisti ostavili su značajan trag
        u
        svetu karatea, i izrasli u vredne i dobre Ljude.
        To je ono čemu težimo.
      </p>
      <Button linkURL={"/"} variation={"__transparent"} text={"UPOZNAJ TIM"} className="button"/>
    </div>
    {/*<div className="quote" style={{display: "flex", width: "100%", justifyContent: "center"}}>*/}
    {/*  Krajnji cilj karatea nije u pobedi ili porazu, već u savršenstvu karaktera onoga ko vežba.*/}
    {/*</div>*/}
  </div>);
};

export default History;
