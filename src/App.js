import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "react-uuid";
import Header from "./components/Header";
import List from "./components/List";

const cardItems = [
  {
    id: uuid(),
    type: "Video Board",
    name: "GTX 640",
    price: 500,
    quentity: 1,
    cost: 500,
  },
  {
    id: uuid(),
    type: "Processor",
    name: "i5",
    price: 900,
    quentity: 1,
    cost: 900,
  },
  {
    id: uuid(),
    type: "Ram",
    name: "16GB",
    price: 200,
    quentity: 1,
    cost: 200,
  },
  {
    id: uuid(),
    type: "Video Board",
    name: "GTX 640",
    price: 500,
    quentity: 1,
    cost: 500,
  },
];

function App() {
  const [card, setCard] = useState(cardItems);
  const [inc, setInc] = useState(false);
  const [dec, setDec] = useState(false);

  const increase = (id) => {
    const newItem = card.map((item) => {
      let { quentity, price, cost } = item;
      return item.id === id
        ? { ...item, quentity: quentity + 1, price: price + cost }
        : { ...item };
    });
    setDec(false);
    setInc(true);
    setCard(newItem);
  };
  const decrese = (id) => {
    const newItem = card.map((item) => {
      let { quentity, price, cost } = item;
      if (quentity > 1) {
        return item.id === id
          ? { ...item, quentity: quentity - 1, price: (price -= cost) }
          : { ...item };
      } else {
        return { ...item };
      }
    });
    setInc(false);
    setDec(true);
    setCard(newItem);
  };

  return (
    <>
      <Header />
      <div className="wall">
        <List card={card} increase={increase} decrese={decrese} />
        <div className="total">
          Total:
          <span>
            $
            {card.reduce((acc, curr) => {
              if (inc) {
                return (acc += parseInt(curr.price));
              } else if (dec) {
                console.log(curr.price);
                return acc - parseInt(-curr.price);
              }
              return (acc += parseInt(curr.price));
            }, 0)}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
