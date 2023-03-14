import { BrowserRouter, Route, Routes } from "react-router-dom"

import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Encabezado from "./components/NavBar";
import FinalizarCompra from "./components/FinalizarCompra";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemListId from "./components/ItemListId";
import Order from "./components/Order";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
      <Encabezado/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListId />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/finalizar-compra"} element={<FinalizarCompra />} />
        <Route path={"/order/:orderId"} element={<Order />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
