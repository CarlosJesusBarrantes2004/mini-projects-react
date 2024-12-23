import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import Provider from "./context/Provider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
