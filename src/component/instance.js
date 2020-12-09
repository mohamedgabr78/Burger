import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-419c5-default-rtdb.firebaseio.com/",
});

export default instance;
