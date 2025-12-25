import API from "./api";

export const fetchProducts = async () => {
  const { data } = await API.get("/products");
  return data;
};
