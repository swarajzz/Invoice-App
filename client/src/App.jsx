import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
// import { Suspense, lazy } from "react";
// import SpinnerFullPage from "./ui/SpinnerFullPage";

import AppLayout from "./ui/AppLayout";
import InvoicePage from "./ui/InvoicePage";
import InvoiceMain from "./features/invoice/InvoiceMain";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Reset from "./features/auth/Reset";

// const AppLayout = lazy(() => import("./ui/AppLayout"));
// const InvoicePage = lazy(() => import("./ui/InvoicePage"));
// const InvoiceMain = lazy(() => import("./features/invoice/InvoiceMain"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/invoices",
        element: <InvoiceMain />,
      },
      {
        path: "/invoice/:id",
        element: <InvoicePage />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/reset",
    element: <Reset />,
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* <Suspense fallback={<SpinnerFullPage />}> */}
        <RouterProvider router={router} />
        {/* </Suspense> */}

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--white)",
              color: "var(--deep-black)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
