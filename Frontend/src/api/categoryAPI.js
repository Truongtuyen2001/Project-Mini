import { axiosClient } from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = `/categories/`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `/category`;
        return axiosClient.post(url, category);
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/category/${id}`;
        return axiosClient.put(url, data);
    },
    // getProductByCateID(id) {
    //     const url = `/categoryPage/${id}`;
    //     return axiosClient.get(url);
    // },
    // cateName(id){
    //     const url = `/product/cate/${id}`;
    //     return axiosClient.get(url);
    // },

}
export default CategoryApi;