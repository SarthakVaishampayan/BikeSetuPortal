import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/custom/login";
import Dashboard from "./pages/dashboard";
import { useAuth } from "./contexts/authContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Products from "./pages/products";
import Sales from "./pages/sales";
import CustomerPage from "./pages/CustomerPage";
import AIRecomend from "./pages/askAIPage";
import NewOrderPage from "./pages/NewOrderPage";
import PreviousOrderPage from "./pages/PreviousOrderPage";

import InvoicePage from "./pages/generateBillPage";

function App() {
  const { authStatus, setauthStatus } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <Routes>
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/customers" element={<CustomerPage />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/askAI" element={<AIRecomend />} />
      <Route path="/new-order" element={<NewOrderPage />} />
      <Route path="/previous-orders" element={<PreviousOrderPage />} />
      <Route path="/generate-bill" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
