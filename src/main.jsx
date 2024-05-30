import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// setup axios

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_APP_ACCESS_TOKEN
}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
