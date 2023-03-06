// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/catalogue" element={<ItemListContainer />} />
      <Route
        exact
        path="/category/:category"
        element={<ItemListContainer />}
      />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>

  )
};

export default App;
