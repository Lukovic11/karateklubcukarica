import { useEffect, useRef, useState } from "react";

function GalleryImageItem({ item, setSelected }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className="gallery-item"
      onClick={() => setSelected(item)}
    >
      {inView && (
        <img src={item.url} alt={item.title} className="gallery-image" />
      )}
      <figcaption className="gallery-caption">
        <h1 className="gallery-title">{item.title}</h1>
      </figcaption>
    </figure>
  );
}

export default GalleryImageItem;
