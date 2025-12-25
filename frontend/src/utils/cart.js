export const getCartItems = () => {
  const cart = localStorage.getItem("cartItems");
  return cart ? JSON.parse(cart) : [];
};

export const saveCartItems = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};
