import React from 'react';
import axios from 'axios';
axios.defaults.headers['Content-Type'] = 'application/json';

let config = {
    baseUrl:'',
    timeout:60*1000,
};
const _axios = axios.create(config);
// 请求拦截器
_axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
_axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject();
    }
);
React.Component.prototype.$axios = _axios

