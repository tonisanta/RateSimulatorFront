import axios from 'axios';

export default function priceService() {
  const axiosInst = axios.create({
    baseURL: 'http://toni.westeurope.cloudapp.azure.com/api/Rate'
  });
  return axiosInst
    .get()
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
