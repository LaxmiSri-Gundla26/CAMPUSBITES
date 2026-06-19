import Sidebar from "../components/Sidebar";

const Orders = () => {
  const orders = [
    {
      id: "ORD101",
      item: "Masala Dosa",
      price: 50,
      status: "Preparing"
    },
    {
      id: "ORD102",
      item: "Veg Biryani",
      price: 80,
      status: "Ready"
    }
  ];

  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1>Orders</h1>

        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Food</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>₹{order.price}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Orders;