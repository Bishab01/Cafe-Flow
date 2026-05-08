import { useState } from "react";

export function useOrders() {
   const [ordersData, setOrdersData] = useState([
    {
      id: 1,
      locationType: "table",
      tableNumber: 3,
      customerName: "John Doe",
      customization: "no tomatoes in the sandwich",
      items: [
        { name: "Cappuccino", quantity: 2, price: 150 },
        { name: "Club Sandwich", quantity: 1, price: 280 },
      ],
      total: 580,
      status: "preparing",
      time: "10:30 AM",
    },
    {
      id: 2,
      locationType: "room",
      roomNumber: 1,
      customerName: "Sarah Smith",
      items: [
        { name: "Espresso", quantity: 1, price: 120 },
        { name: "Chocolate Cake", quantity: 2, price: 180 },
      ],
      total: 480,
      status: "preparing",
      time: "10:25 AM",
    },
  ]);

  const changeStatus = (id, status) => {
    setOrdersData(prev =>
      prev.map(order =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return { ordersData, setOrdersData, changeStatus };
}