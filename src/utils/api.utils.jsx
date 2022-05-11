import axios from "axios";

// const RESULT_AMOUNT = 10;

const API_KEY = process.env.REACT_APP_SKIDDLE_API_KEY;

const API_URL = `https://www.skiddle.com/api/v1/events/search/?api_key=`;

const API_ARTIST_URL = "https://www.skiddle.com/api/v1/artist/";

const API_EVENT_URL = "https://www.skiddle.com/api/v1/events/";

const apiSearchFunction = (useInput, lat, lng) => {
    if(lat === undefined||lng === ""){
      return axios.get(`${API_URL}${API_KEY}&keyword=${useInput}`)
      .then(res => res.data)
      .then(data => data)
      .catch(err => {
        console.error(err)
    })
    }
    else{
      // console.log(`${API_URL}${API_KEY}&latitude=${lat}&longitude=${lng}&radius=50&keyword=${useInput}`);
      return axios.get(`${API_URL}${API_KEY}&latitude=${lat}&longitude=${lng}&radius=50&keyword=${useInput}`)
      .then(res => res.data)
      .then(data => data)
      .catch(err => {
        console.error(err)
    })
    }
};


const apiAristsFetchFunction = (artistid) => {
  return axios.get(`${API_ARTIST_URL}${artistid}/?api_key=${API_KEY}`)
  .then(res => res.data)
  .then(data => data.results)
  .then(results => results)
  .catch(err => {
    console.error(err)
  })

};
const apiEventFetchFunction = (eventId) => {
  return axios.get(`${API_EVENT_URL}${eventId}/?api_key=${API_KEY}`)
  .then(res => res.data)
  .then(data => data.results)
  .then(results => results)
  .catch(err => {
    console.error(err)
  })
};

export {apiSearchFunction, apiAristsFetchFunction, apiEventFetchFunction};