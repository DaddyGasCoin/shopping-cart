import DisplayMain from "./components/DisplayMain";
import DisplayShop from "./components/DisplayShop";
import DisplayHeader from "./components/DisplayHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader />}>
          <Route path="/" element={<DisplayMain />} />
          <Route path="shop" element={<DisplayShop />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
