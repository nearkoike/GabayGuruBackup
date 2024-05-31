import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import { createStore, StateMachineProvider } from "little-state-machine";
import AuthProvider from "./contexts/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// Tanstack Query
const queryClient = new QueryClient();

// Little State Machine
createStore({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider  client={queryClient}>
      <StateMachineProvider>
        <RouterProvider router={router} />
      </StateMachineProvider>
    </QueryClientProvider>
  </AuthProvider>
);
