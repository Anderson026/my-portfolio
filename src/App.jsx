import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PortuguesePage } from "./pages/PortuguesePage";
import { EnglishPage } from "./pages/EnglishPage";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortuguesePage />}/>
          <Route path="/englishpage" element={<EnglishPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
