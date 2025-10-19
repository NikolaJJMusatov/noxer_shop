import { Routes, Route } from "react-router-dom";
import  HomePage from "../pages/HomePage"
/* import ProductPage from "@/pages/ProductPage";
import NotFound from "@/pages/NotFound"; */

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
{/*       <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
