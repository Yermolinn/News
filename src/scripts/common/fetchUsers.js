import axios from 'axios';

const BASE_URL =
  'https://news-my-project-default-rtdb.europe-west1.firebasedatabase.app/users';

class User {
  constructor() {
    this.name = null;
    this.email = null;
    this.id = null;
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  setToken(newToken) {
    this.token = newToken;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  getId() {
    return this.id;
  }

  setId(newId) {
    this.id = newId;
  }
  updateProfile(newName, newEmail, newId, newToken) {
    this.name = newName;
    this.email = newEmail;
    this.id = newId;
    this.token = newToken;
  }

  resetUser() {
    this.name = null;
    this.email = null;
    this.id = null;
    this.token = null;
  }

  async getAllData(typeOfData) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}.json?auth=${this.getToken()}`
    );

    return data;
  }

  async getData(typeOfData, id) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`
    );

    return data;
  }

  async setData(typeOfData, id, data) {
    try {
      await axios.put(
        `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData(typeOfData, id) {
    try {
      await axios.delete(
        `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export const users = new User();