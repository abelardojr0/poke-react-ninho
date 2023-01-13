import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";
import Jogo from "./Jogo/Jogo";
import { GlobalStorage } from "./GlobalStorage";
import Batalha from "./Jogo/Batalha/Batalha";
import Lista from "./Jogo/Lista/Lista";
import Captura from "./Jogo/Captura/Captura";
function App() {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="jogo" element={<Jogo />} />
            <Route path="/batalha" element={<Batalha />} />
            <Route path="/captura" element={<Captura />} />
            <Route path="/lista" element={<Lista />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
