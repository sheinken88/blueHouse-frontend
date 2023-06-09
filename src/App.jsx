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
import { useSelector } from "react-redux";
import { Alert, AlertIcon } from "@chakra-ui/react";

function App() {
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const isAuthenticated = true;

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
        <Routes>
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
