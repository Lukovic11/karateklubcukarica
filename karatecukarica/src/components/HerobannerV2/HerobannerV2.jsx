import "./HerobannerV2.scss";

const HeroBanner = ({title1, title2, image, alt}) => {
  return (
    <div className="herobannerv2-container">
      <div className="herobannerv2">
        <img src={image} alt={alt}/>
        <div className="overlay">
          <div className="content">
            <h1 className="title-design">{title1}
              {title2 && <div className="gray">{title2}</div>}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
