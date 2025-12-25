import axios from "axios";

function PlaceOrderScreen() {
  const placeOrderHandler = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const orderData = {
      orderItems: [
        {
          name: "iPhone",
          qty: 1,
          price: 79999,
          product: "000000000000000000000000",
        },
      ],
      totalPrice: 79999,
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/orders",
      orderData,
      config
    );

    window.location.href = `/order/${data._id}`;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Place Order</h2>
      <button onClick={placeOrderHandler}>Place Order</button>
    </div>
  );
}

export default PlaceOrderScreen;
