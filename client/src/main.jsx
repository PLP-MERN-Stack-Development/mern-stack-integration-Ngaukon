// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PostProvider } from "./context/PostContext";
import { ClerkProvider } from "@clerk/clerk-react";

const pk = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={pk}>
      <PostProvider>
        <App />
      </PostProvider>
    </ClerkProvider>
  </React.StrictMode>
);
