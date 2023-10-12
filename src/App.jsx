import { useRef, useState } from "react";
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

const generateRandomItems = () =>
  Array.from({ length: 16 })
    .map((_, i) => {
      return {
        id: i + 1,
        identifier: Math.floor(i / 2),
        image: images[Math.floor(i / 2)],
      };
    })
    .sort(() => Math.random() - 0.5);

function App() {
  const pending = useRef(false);

  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const [items, setItems] = useState(generateRandomItems);

  const handleClick = (item) => {
    if (pending.current) return;

    setSelectedItemIds([...selectedItemIds, item.id]);

    if (selectedItemIds.length % 2 !== 0) {
      pending.current = true;

      // compare
      const lastItemId = selectedItemIds[selectedItemIds.length - 1];
      const lastItem = items.find((item) => item.id === lastItemId);

      if (item.identifier !== lastItem.identifier) {
        setTimeout(() => {
          setSelectedItemIds(selectedItemIds.filter((i) => i != lastItemId));
          pending.current = false;
        }, 1000);
      } else {
        pending.current = false;
      }
    }
  };

  const startGame = () => {
    const newItems = generateRandomItems();

    setItems(newItems);

    setTimeout(() => {
      setSelectedItemIds(newItems.map((i) => i.id));
    }, 0);

    setTimeout(() => {
      setSelectedItemIds([]);
    }, 1000);
  };

  return (
    <div className="game-wrapper">
      <div className="memory-game">
        {items.map((item, i) => (
          <Item
            index={i + 1}
            image={item.image}
            key={item.id}
            onClick={() => handleClick(item)}
            isShow={selectedItemIds.includes(item.id)}
          />
        ))}
      </div>

      <button className="game-button" onClick={startGame}>
        شروع بازی
      </button>
    </div>
  );
}

export default App;
