import Button from "../../components/Button/Button.jsx";
import history_img from "../../assets/history_img.jpg";
import "./History.scss"
import {HISTORY_BUTTON, HISTORY_IMG_ALT, HISTORY_TEXT, HISTORY_TITLE} from "../../constants.jsx";

const History = () => {
  return (<div className="history">
    <div className="img-div">
      <img src={history_img} alt={HISTORY_IMG_ALT} className="img"/>
    </div>
    <div className="history-text">
      <p className="title">
        {HISTORY_TITLE}
      </p>
      <p className="text">
        {HISTORY_TEXT}
      </p>
      <Button linkURL={"/"} variation={"__transparent"} text={HISTORY_BUTTON} className="button"/>
    </div>
  </div>);
};

export default History;
