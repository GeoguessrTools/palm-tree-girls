import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.timeout = 1000;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use((request) => {
  return request
}, error => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
  // response = response.data;
  return response
}, error => {
  console.log(error);
  return Promise.reject(error);
})


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
