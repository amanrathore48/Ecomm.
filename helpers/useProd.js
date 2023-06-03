import axios from "axios";

const server = process.env.SERVER;

export const addProduct = async (data) => {
  try {
    console.log("data", data);
    const res = await axios.post(`${server}/products`, data, {
      withCredentials: true,
    });
    console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`${server}/products`, {
      withCredentials: true,
    });
    console.log("res", res.data);
    console.log("server allprod", process.env.SERVER);
    return res.data.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const getProductById = async (prodId) => {
  try {
    console.log("server prod", process.env.SERVER);
    console.log("server prod id", prodId);
    const res = await axios.get(`${server}/products/${prodId}`, {
      withCredentials: true,
    });
    console.log("res", res.data);
    return res.data.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const updateProduct = async (prodId, data) => {
  try {
    const res = await axios.put(`${server}/products/${prodId}`, data, {
      withCredentials: true,
    });
    console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const deleteProduct = async (prodId) => {
  try {
    const res = await axios.delete(`${server}/products/${prodId}`, {
      withCredentials: true,
    });
    console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};
