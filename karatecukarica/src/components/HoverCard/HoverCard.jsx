import './HoverCard.scss';

const HoverCard = () => {
  return (
    <div className="hover-card">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?q=80&w=800&auto=format&fit=crop"
          alt="shoes"
          className="card-image"
        />
      </div>

      <article className="hover-content">
        <div className="content-wrapper">
          <h1>Who We are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur ducimus vel nemo deserunt possimus inventore ipsum
            nostrum. Sapiente, facilis?
          </p>
          <button>
            Learn More
          </button>
        </div>
      </article>

      <article className="default-content">
        <h1>Naymur Rahman</h1>
        <p>CEO & Design Engineer</p>
      </article>
    </div>
  );
};

export default HoverCard;