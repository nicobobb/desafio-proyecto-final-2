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

export const postCart = async (body) => {
    console.log(body, "creando la CARD");
    const resp = await axiosInstance.post("/cart", { items: body });
    return resp.data;
};

export const editCart = async (id, body) => {
    console.log(body);
    const resp = await axiosInstance.put(`/cart/edit/${id}`, { items: body });
    return resp.data;
};

export const getCart = async (id) => {
    const resp = await axiosInstance.get(`/cart/get/${id}`);
    return resp.data;
};

export const postPreferenceMP = async (body) => {
    const resp = await axiosInstance.post(`checkout`, body);
    return resp.data;
};
