import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // headers: {
    //     Authorization: 'Bearer yourToken'
    // }
});

const getUsers = async () => {
    const { data } = await axiosInstance('/users');
    return data;
};

const getUser = async (id) => {
    const { data } = await axiosInstance(`/users/${id}`);
    return data;
};
export { getUsers, getUser };
