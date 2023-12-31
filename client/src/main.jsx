import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./context/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
