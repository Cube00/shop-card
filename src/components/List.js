import Item from "./Item";
const List = ({ card, increase, decrese }) => {
  return (
    <>
      <div className="card">
        {card.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              increase={increase}
              decrese={decrese}
            />
          );
        })}
      </div>
    </>
  );
};
export default List;
