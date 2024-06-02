import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://proyecto-integrador-bobb.onrender.com/api/",
});

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products");
    return resp.data;
};

export const postProducts = async (formData) => {
    const resp = await axiosInstance.post("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return resp.data;
};

export const postMessage = async (body) => {
    const resp = await axiosInstance.post("/messages", body);
    return resp.data;
};
