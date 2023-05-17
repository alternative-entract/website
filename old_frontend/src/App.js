import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  CartPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductsPage,
  ProfilePage,
  RegisterPage,
  SingleProductPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/products" exact element={<ProductsPage />} />
        <Route path="/products/:id" exact element={<SingleProductPage />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
