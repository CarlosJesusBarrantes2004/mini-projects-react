import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/css/index.css";
import Provider from "./components/context/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
