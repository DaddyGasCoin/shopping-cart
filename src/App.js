import DisplayMain from "./components/DisplayMain";
import DisplayShop from "./components/DisplayShop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayMain />} />
        <Route path="/shop" element={<DisplayShop />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
