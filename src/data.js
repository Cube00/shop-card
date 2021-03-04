import uuid from "react-uuid";

const cardItems = [{
        id: uuid(),
        type: "Memory kit",
        name: "Corsair LPX 16GB",
        price: 89,
        quentity: 1,
        cost: 89,
    },
    {
        id: uuid(),
        type: "Video card",
        name: "GTX 1050 Ti",
        price: 250,
        quentity: 1,
        cost: 250,
    },
    {
        id: uuid(),
        type: "Processor",
        name: "AMD Ryzen 5 2600",
        price: 189,
        quentity: 1,
        cost: 189,
    },
    {
        id: uuid(),
        type: "Cooler",
        name: "Cooler Master Hyper",
        price: 39,
        quentity: 1,
        cost: 39,
    },
];
export default cardItems;