import axios from '../custom-axios/axios';

const EShopService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers");
    },
    fetchSports: () => {
        return axios.get("/sports");
    },
    fetchProducts: () => {
        return axios.get("/products");
    },
    deleteProduct:(id) =>{
        return axios.delete(`/products/delete/${id}`);
    },
    getProduct: (id) => {
        return axios.get(`/products/${id}`);
    },
    addProduct: (name, price,  sport, manufacturer, image) => {
        return axios.post("/products/add", {
            "name" : name,
            "price" : price,
            "sport" : sport,
            "manufacturer" : manufacturer,
            "image" : image
        });
    }

}

export default EShopService;
