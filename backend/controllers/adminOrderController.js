import Order from "../models/orderModel.js";

export const getAllOrders = async (req, res) => {
  const orders = await Order.find({})
    .populate("user", "name email");
  res.json(orders);
};

export const markDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    await order.save();
    res.json({ message: "Order delivered" });
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
