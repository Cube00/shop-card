import Item from "./Item";
const List = ({ card, increase, decrese, handleDelete }) => {
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
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};
export default List;
