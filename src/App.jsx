import Encabezado from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <Encabezado/>
      <ItemListContainer greeting={"Nuevo ingreso de productos"}/>
      <Footer />
    </div>
  )
}

export default App;
