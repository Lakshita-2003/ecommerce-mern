import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOrdersScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await axios.get("/api/admin/orders", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setOrders(data);
    };

    fetchOrders();
  }, []);

  const deliverHandler = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    await axios.put(
      `/api/admin/orders/${id}/deliver`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    window.location.reload();
  };

  return (
    <div>
      <h2>Admin Orders Panel</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Delivered</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user?.name}</td>
              <td>₹{order.totalPrice}</td>
              <td>{order.isPaid ? "YES" : "NO"}</td>
              <td>{order.isDelivered ? "YES" : "NO"}</td>
              <td>
                {!order.isDelivered && (
                  <button onClick={() => deliverHandler(order._id)}>
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrdersScreen;
