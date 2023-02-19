import { BrowserRouter, Route, Routes } from "react-router-dom"

import Encabezado from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Encabezado/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
