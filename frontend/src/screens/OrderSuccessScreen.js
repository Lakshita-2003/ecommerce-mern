import { useParams } from "react-router-dom";

function OrderSuccessScreen() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>✅ Order Placed Successfully</h1>
      <p>Order ID: {id}</p>
    </div>
  );
}

export default OrderSuccessScreen;
