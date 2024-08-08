import axios from "axios";

export const INSTANCE = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
