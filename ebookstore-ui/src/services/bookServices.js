import axios from "axios";
const BOOK_BASE_URL = "http://localhost:8081/book";

class bookServices {
  saveBook(book) {
    return axios.post(BOOK_BASE_URL + "/add", book);
  }
  getBooks() {
    return axios.get(BOOK_BASE_URL + "/get-all");
  }
  getBookById(id) {
    return axios.get(BOOK_BASE_URL + "/get/" + id);
  }
  updateBook(id, book) {
    return axios.put(BOOK_BASE_URL + "/update/" + id, book);
  }
  deleteBook(id) {
    return axios.delete(BOOK_BASE_URL + "/delete/" + id);
  }
}
export default new bookServices();
