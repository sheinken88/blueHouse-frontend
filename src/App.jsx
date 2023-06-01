import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Navbar} from "../src/components/Navbar"
import {Footer} from "../src/components/Footer"
import {HomePage} from "../src/pages/HomePage"
import {SignUpPage} from "../src/pages/SignUpPage"
import {LoginPage} from "../src/pages/LoginPage"
import {SingleProductPage} from "../src/pages/SingleProductPage"
import {ShoppingCartPage} from "../src/pages/ShoppingCartPage"
import {NotFoundPage} from "../src/pages/NotFoundPage"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import { useSelector } from "react-redux";

import { CssBaseline } from '@mui/material'

function App() {
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const isAuthenticated = true;
  

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/product/:id' element={<SingleProductPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>

      {isAuthenticated ? (
        <>
          <Route path='/cart' element={<ShoppingCartPage/>}/>
          {/* <Route path='/checkout' element={}/> */}
          
        </>
      ) : {}}

    </Routes>
    <Footer/>
    </BrowserRouter>

    </ThemeProvider>

    </>
  )
}

export default App
