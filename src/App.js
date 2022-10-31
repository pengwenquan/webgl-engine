import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import D2F from "./pages/D2F";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="d2f" element={<D2F />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}