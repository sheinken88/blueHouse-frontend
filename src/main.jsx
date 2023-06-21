import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./state/store.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //https://es.stackoverflow.com/questions/531783/useeffect-se-renderiza-2-veces
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>,
);
