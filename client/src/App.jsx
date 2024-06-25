import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import NotFound from "./ui/NotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import { getCurrentUser } from "./features/auth/authSlice";
import { useSelector } from "react-redux";

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

function App() {
  const user = useSelector(getCurrentUser);

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/auth/login" />} />

            <Route
              path="/auth/login"
              element={user ? <Navigate to="/invoices" /> : <Login />}
            />
            <Route
              path="/auth/register"
              element={user ? <Navigate to="/invoices" /> : <Register />}
            />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="invoices" element={<InvoiceMain />} />
              <Route path="invoice/:id" element={<InvoicePage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

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
