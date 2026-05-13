import { createRoot } from "react-dom/client";
import { productPages } from "./data/productPages";
import { HomeLanding } from "./pages/HomeLanding";
import { PayBillsPage } from "./pages/PayBillsPage";
import { ProductPage } from "./pages/ProductPage";
import "./styles.css";

function App() {
  const page = productPages[window.location.pathname];
  if (page?.isBills) {
    return <PayBillsPage />;
  }
  if (page) {
    return <ProductPage page={page} />;
  }

  return <HomeLanding />;
}

createRoot(document.getElementById("root")).render(<App />);
