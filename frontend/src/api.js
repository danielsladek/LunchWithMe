import axios from 'axios';

/* A class to reach endpoints defined from the backend folder. */
export default class Api {

  constructor () {
    this.baseURL = 'http://localhost:3001';
  }

  getEvents () {
    return axios.get(this.baseURL + '/events/').then(
      (response) => response.data
    );
  }

  userLogin (facebookToken) {
    return axios.post(this.baseURL + '/login/', facebookToken).then(
      (response) => response.data
    );
  }

  switchAttendance (eventId, userId, currState) {
    console.log(currState);
    var willAttend = false;

    if (currState) willAttend = true;

    const reqBody = {
      willAttend: willAttend,
    };

    return axios.put(this.baseURL + '/attendances/event/' + eventId + '/user/' + userId, reqBody).then(
      (response) => response.data
    );
  }

  getEventById (eventId) {
    return axios.get(this.baseURL + '/events/' + eventId).then(
      (response) => response.data
    );
  }

  getUserById (userId) {
    return axios.get(this.baseURL + '/users/' + userId).then(
      (response) => response.data
    );
  }

  getPlaceById (placeId) {
    return axios.get(this.baseURL + '/events/' + placeId).then(
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
}
