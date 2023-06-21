import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { HomePage } from "../src/pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SignUpPage } from "../src/pages/SignUpPage";
import { LoginPage } from "../src/pages/LoginPage";
import { SingleProductPage } from "../src/pages/SingleProductPage";
import { ShoppingCartPage } from "../src/pages/ShoppingCartPage";
import { NotFoundPage } from "../src/pages/NotFoundPage";
import { NewsLetter } from "./components/NewsLetter";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { ProductDesk } from "./components/ProductDesk";
import { ShoppingCartDrawer } from "./components/ShoppingCartDrawer";
import { fetchAllProducts } from "./state/thunks/productsThunks";
import { fetchAllReviews } from "./state/thunks/reviewsThunks";
import { useEffect } from "react";

function App() {
  const isAuthenticated = true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllReviews());
  }, []);

  const alert = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {alert && (
          <Alert
            status={alert.status}
            position="fixed"
            bottom="0"
            w="100%"
            zIndex="9999"
          >
            <AlertIcon />
            {alert.message}
          </Alert>
        )}

        <Navbar />

        <ShoppingCartDrawer />

        <Routes>
          <Route path="/productdesk" element={<ProductDesk />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {isAuthenticated ? (
            <>
              <Route path="/cart" element={<ShoppingCartPage />} />
            </>
          ) : (
            {}
          )}
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
