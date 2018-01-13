import axios from 'axios';

/* A class to reach endpoints defined from the backend folder. */
export default class Api {

  constructor () {
    this.baseURL = process.env.REACT_APP_API_URL;
  }

  getEvents () {
    return axios.get(this.baseURL + '/events/').then(
      (response) => {return response.data}
    );
  }

  userLogin (facebookToken) {
    return axios.post(this.baseURL + '/login/', facebookToken).then(
      (response) => response.data
    );
  }

  changeAttendance (eventId, userId, newState) {
    const reqBody = {
      willAttend: newState,
    };

    return axios.put(this.baseURL + '/attendances/event/' + eventId + '/user/' + userId, reqBody).then(
      (response) => response.data
    );
  }

  getEventById (eventId) {
    return axios.get(this.baseURL + '/events/' + eventId).then(
      (response) => response.data.event
    );
  }

  getUserById (userId) {
    return axios.get(this.baseURL + '/users/' + userId).then(
      (response) => response.data
    );
  }

  getPlaceById (placeId) {
    return axios.get(this.baseURL + '/places/' + placeId).then(
      (response) => response.data
    );
  }

  getEventAttendees (eventId) {
    return axios.get(this.baseURL + '/attendances/event/' + eventId).then(
      (response) => response.data
    );
  }

  getUserAttendance (userId) {
    return axios.get(this.baseURL + '/attendances/user/' + userId).then(
      (response) => response.data
    );
  }

  getAttendanceDetail (eventId, userId) {
    return axios.get(this.baseURL + '/attendances/event/' + eventId + '/user/' + userId).then(
      (response) => response.data
    );
  }

  createNewEvent (eventData) {
    return axios.post(this.baseURL + '/events/', eventData).then(
      (response) => response.data
    );
  }

  deleteEvent (eventId) {
    return axios.delete(this.baseURL + '/events/' + eventId).then(
      (response) => response.data
    );
  }

  updateEvent (event) {
    return axios.put(this.baseURL + '/events/' + event.eventId, event.eventData).then(
      (response) => response.data
    );
  }

  getImages (eventId) {
    const request = axios.get(this.baseURL + '/images/event/' + eventId);

    request.then(function(response) {}).catch(function (error) {});

    return request;
  }

}
