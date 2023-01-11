import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";
import Jogo from "./Jogo/Jogo";
import { GlobalStorage } from "./GlobalStorage";
function App() {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/jogo" element={<Jogo />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
