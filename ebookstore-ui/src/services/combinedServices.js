import axios from "axios";

const BASE_URL = "http://localhost:8081";

class combinedServices {
  purchaseCart(userId) {
    return axios.put(BASE_URL + "/purchase-cart/" + userId);
  }
  purchaseItem(bookId, quantity) {
    return axios.put(BASE_URL + "/purchase/" + bookId + "/" + quantity);
  }
  increaseQuantity(userId, bookId) {
    return axios.put(BASE_URL + "/increase/" + userId + "/" + bookId);
  }
  decreaseQuantity(userId, bookId) {
    return axios.put(BASE_URL + "/decrease/" + userId + "/" + bookId);
  }
  addToCart(userId, bookId) {
    return axios.put(BASE_URL + "/add-to-cart/" + userId + "/" + bookId);
  }
}

export default new combinedServices();
