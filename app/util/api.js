import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6613568e53b0d5d80f673015.mockapi.io/api/v1/",
});

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products");
    return resp.data;
};

export const postProduct = async (body) => {
    const resp = await axiosInstance.post("/products", body);
    return resp.data;
};

export const postMessage = async (body) => {
    const resp = await axiosInstance.post("/messages", body);
    return resp.data;
};
