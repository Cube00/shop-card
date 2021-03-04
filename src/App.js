import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import data from "./data";

function App() {
  const [card, setCard] = useState(data);
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

  const handleDelete = (id) => {
    const filterItem = card.filter((item) => {
      return item.id !== id;
    });
    setCard(filterItem);
  };

  return (
    <>
      <Header />
      <div className="wall">
        <List
          card={card}
          increase={increase}
          decrese={decrese}
          handleDelete={handleDelete}
        />
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
        <button
          className="clear"
          onClick={() => {
            setCard([]);
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
