import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '4316858d2cmshb3236b1a306a35ep1f9fb1jsn131bcebed3ce',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
