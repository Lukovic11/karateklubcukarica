import "./HoverCard.scss";
import PropTypes from "prop-types";

const HoverCard = ({ name, title, image, text }) => {
  return (
    <div className="hover-card">
      <div className="image-container">
        <img src={image} alt="shoes" className="card-image" />
      </div>

      <article className="hover-content">
        <div className="content-wrapper">
          <h1>{name}</h1>
          <div>{text}</div>
        </div>
      </article>

      <article className="default-content">
        <h1>{name}</h1>
        <p>{title}</p>
      </article>
    </div>
  );
};

HoverCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
};

export default HoverCard;
