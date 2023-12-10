import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderPlaced } from "./pages/OrderPlaced";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
    </div>
  );
}

export default App;
