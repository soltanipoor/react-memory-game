import { useState } from "react";
import image1Url from "./assets/image-1.png";
import image2Url from "./assets/image-2.png";
import image3Url from "./assets/image-3.png";
import image4Url from "./assets/image-4.png";
import image5Url from "./assets/image-5.png";
import image6Url from "./assets/image-6.png";
import image7Url from "./assets/image-7.png";
import image8Url from "./assets/image-8.png";

const images = [
  image1Url,
  image2Url,
  image3Url,
  image4Url,
  image5Url,
  image6Url,
  image7Url,
  image8Url,
];

import "./App.css";
import Item from "./components/Item";

function App() {
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const [items, setItems] = useState(() =>
    Array.from({ length: 16 })
      .map((_, i) => {
        return { id: i + 1, image: images[Math.floor(i / 2)] };
      })
      .sort(() => Math.random() - 0.5)
  );

  const handleClick = (item) => {
    setSelectedItemIds([...selectedItemIds, item.id]);
  };

  return (
    <>
      <div className="memory-game">
        {items.map((item, i) => (
          <Item
            key={item.id}
            index={i + 1}
            image={item.image}
            onClick={() => handleClick(item)}
            isShow={selectedItemIds.includes(item.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
