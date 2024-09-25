import axios from "axios";

const REST_API_BASE_URL ='https://localhost:8080/api/stores';

export const listStores = () => axios.get(REST_API_BASE_URL);

export const createStore =(store) => axios.post(REST_API_BASE_URL,store);

export const getStore = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateStore = (id,store) => axios.put(REST_API_BASE_URL + '/' + id,store);

export const deleteStore=(id) => axios.delete(REST_API_BASE_URL + '/' + id);