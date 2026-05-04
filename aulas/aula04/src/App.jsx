import { Router, Routes } from "react-router";
import home from "./pages/home";
import about from "./pages/about";
import perfil from "./pages/perfil";
import settings from "./pages/settings";

function App(){
  return(<Routes>
    <Router path="/" element={<home />} />
    <Router path="" element={<perfil />} />
    <Router path="" element={<home />} />
  </Routes>
  );
}
export default App;