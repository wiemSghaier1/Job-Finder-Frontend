import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api"; // <- api url mta3 symfony
axios.defaults.withCredentials = true; //yab3eth cookies m3a request
axios.interceptors.response.use(
    function (response) {
        // 200 type responses, this should be left as it is
        return response;
    },
    // function (error) {
    //     if (error.response && error.response.status === 401) {
    //         //logout   
    //     }
    //     return Promise.reject(error);
    // }
);
