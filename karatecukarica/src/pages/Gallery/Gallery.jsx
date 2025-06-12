import { useState } from "react";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.jpg";
import img7 from "../../assets/gallery/7.jpg";
import img8 from "../../assets/gallery/8.jpg";
import img9 from "../../assets/gallery/9.jpg";
import img10 from "../../assets/gallery/10.jpg";
import "./Gallery.scss";
import GalleryModal from "../../components/GalleryModal/GalleryModal";
import GalleryImageItem from "../../components/GalleryImageItem/GalleryImageItem";
import HerobannerV2 from "../../components/HerobannerV2/HerobannerV2";
import gallery_img from "../../assets/gallery_img.jpg";
import { CAMP_IMG_ALT, CAMP_TITLE1, CAMP_TITLE2 } from "../../constants";

function Gallery() {
  const [selected, setSelected] = useState(null);
  const items = [
    {
      id: "1",
      url: img1,
      title: "Sunset Bliss",
      tags: ["sunset", "nature", "peaceful"],
      description: "A beautiful sunset over the mountains.",
    },
    {
      id: "2",
      url: img2,
      title: "City Lights",
      tags: ["city", "night", "urban"],
      description: "Downtown skyline glowing at night.",
    },
    {
      id: "3",
      url: img3,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    ,
    {
      id: "4",
      url: img4,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    ,
    {
      id: "5",
      url: img5,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    ,
    {
      id: "6",
      url: img6,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    ,
    {
      id: "7",
      url: img7,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    {
      id: "8",
      url: img8,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    {
      id: "9",
      url: img9,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
    {
      id: "10",
      url: img10,
      title: "Ocean Escape",
      tags: ["ocean", "beach", "vacation"],
      description: "Relaxing waves crashing onto the shore.",
    },
  ];

  return (
    <div>
      <HerobannerV2 image={gallery_img} title1="GALERIJA" alt={CAMP_IMG_ALT} />
      <div className="gallery-container">
        <div className="gallery-grid">
          {items.map((item) => (
            <GalleryImageItem
              key={item.id}
              item={item}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
      {selected && (
        <GalleryModal selected={selected} setSelected={setSelected} />
      )}
    </div>
  );
}

export default Gallery;
