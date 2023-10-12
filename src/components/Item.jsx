const Item = ({ index, image, isShow, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`memory-game__item ${isShow ? "memory-game__item--show" : ""}`}
    >
      <div className="memory-game__item-front">{index}</div>
      <img src={image} className="memory-game__item-back" />
    </div>
  );
};

export default Item;
