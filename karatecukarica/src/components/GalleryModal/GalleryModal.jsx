import { useEffect } from "react";

function GalleryModal({ selected, setSelected }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <div className="gallery-modal-overlay" onClick={() => setSelected(null)}>
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelected(null)}
          className="gallery-modal-close"
        >
          ×
        </button>
        <div className="gallery-modal-body">
          <img
            src={selected.url}
            alt={selected.title}
            className="gallery-modal-image"
          />
          <h3 className="gallery-modal-heading">{selected.title}</h3>
        </div>
      </div>
    </div>
  );
}
export default GalleryModal;
