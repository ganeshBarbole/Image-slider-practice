import axios from "axios";

const BASE_URL = "https://picsum.photos/v2/list"


export const fetchDataFromApi = async() => {
  const {data} = await axios.get(`${BASE_URL}?page=1&limit=10`)
  
  return data;
}       