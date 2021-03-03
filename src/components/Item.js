import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Item = ({ item, increase, decrese }) => {
  const { id, name, type, price, cost, quentity } = item;
  return (
    <>
      <div className="item" key={id}>
        <div className="info">
          <span className="name">{name}</span>
          <span className="type">{type}</span>
          <span className="price">{cost}</span>
        </div>
        <div className="quantity">
          <span>{quentity}</span>
        </div>
        <div className="btns">
          <button
            className="decreese"
            aria-label="plus"
            onClick={() => {
              decrese(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <button
            className="increase"
            aria-label="plus"
            onClick={() => increase(id)}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </>
  );
};
export default Item;
