import DisplayMain from "./components/DisplayMain";
import DisplayShop from "./components/DisplayShop";
import DisplayHeader from "./components/DisplayHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import uniqid from "uniqid";

//import all images
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./components/images/shoes', false, /\.jpg/));
const keys = Object.keys(images);
let productname = []

//convert to title case
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
//format product names
keys.forEach(key => {
  let result = key.replaceAll("-", " ");
  result = result.slice(0, -4)
  result = result.toProperCase()
  productname.push(result)
});

//state array for products
let arr = []
keys.forEach((key, index) =>
  arr.push({ id: uniqid(), link: images[key], name: productname[index], price: 150 }))

function App() {

  const [products] = useState(arr)
  const [cost, setCost] = useState(0)

  function updateCost(event) {
    const price = parseInt(event.target.dataset.price)
    setCost(cost + price)
    console.log(cost)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader />}>
          <Route path="/" element={<DisplayMain />} />
          <Route path="shop" element={<DisplayShop items={products} handler={updateCost} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
