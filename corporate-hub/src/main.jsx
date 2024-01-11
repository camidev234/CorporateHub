import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from "./context/GeneralContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <GeneralContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralContextProvider>
);
