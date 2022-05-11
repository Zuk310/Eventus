import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;


const mapSearchToCoords = (useInput) => {
    return axios.get(`${API_URL}${useInput}&key=${API_KEY}`)
    .then(res => res.data)
    .then(data => data.results)
    .then(results => results[0])
    .catch(err => {
      console.log(err)
    })
};


export default mapSearchToCoords;