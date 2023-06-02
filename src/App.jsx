import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { HomePage } from "../src/pages/HomePage";
import { SignUpPage } from "../src/pages/SignUpPage";
import { LoginPage } from "../src/pages/LoginPage";
import { SingleProductPage } from "../src/pages/SingleProductPage";
import { ShoppingCartPage } from "../src/pages/ShoppingCartPage";
import { NotFoundPage } from "../src/pages/NotFoundPage";
// import { useSelector } from "react-redux";

function App() {
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const isAuthenticated = true;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {isAuthenticated ? (
            <>
              <Route path="/cart" element={<ShoppingCartPage />} />
              {/* <Route path='/checkout' element={}/> */}
            </>
          ) : (
            {}
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
