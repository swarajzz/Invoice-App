import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import InvoicePage from "./ui/InvoicePage";
import InvoiceMain from "./features/invoice/InvoiceMain";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <InvoiceMain />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
