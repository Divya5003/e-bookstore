import axios from "axios";
const USER_BASE_URL = "http://localhost:8081/user";

class userServices {
  saveUser(user) {
    return axios.post(USER_BASE_URL + "/add", user);
  }
  getUsers() {
    return axios.get(USER_BASE_URL + "/get-all");
  }

  getUserById(id) {
    console.log(USER_BASE_URL + "/get/" + id);
    return axios.get(USER_BASE_URL + "/get/" + id);
  }
  updateUser(id, user) {
    return axios.put(USER_BASE_URL + "/update/" + id, user);
  }
  deleteUser(id, user) {
    return axios.put(USER_BASE_URL + "/update/" + id, user);
  }
}
export default new userServices();
