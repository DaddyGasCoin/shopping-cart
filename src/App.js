import DisplayMain from "./components/DisplayMain";
import DisplayShop from "./components/DisplayShop";
import DisplayHeader from "./components/DisplayHeader";
import DisplayCart from "./components/DisplayCart";
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

function randprice() {
  const prices = [150, 200, 80, 650, 120, 275, 320]
  return prices[Math.floor(Math.random() * prices.length)]
}
keys.forEach((key, index) =>
  arr.push({ id: uniqid(), link: images[key], name: productname[index], price: randprice() }))

function App() {

  const [products] = useState(arr)
  const [cost, setCost] = useState(0)
  const [cart, addCart] = useState([])


  function updateCost(event) {
    const price = parseInt(event.target.dataset.price)
    const id = event.target.dataset.id
    const img = event.target.dataset.src
    const name = event.target.dataset.name
    const index = cart.map(e => e.id).indexOf(id);

    //Increment quantity if product is already added
    if (index === -1) {
      cart.push({ id: id, link: img, name: name, price: price, qty: 1 })
      addCart([...cart])
    }
    else {
      let temporaryarray = cart.slice();
      temporaryarray[index].qty += 1
      addCart(temporaryarray);
    }

    addCart([...cart])
    setCost(cost + price)
  }

  function updateQuant(id, bool) {
    const index = cart.map(e => e.id).indexOf(id);
    let temporaryarray = cart.slice();
    //increment quantity
    if (bool) {
      temporaryarray[index].qty += 1
      addCart(temporaryarray);
      const price = temporaryarray[index].price
      setCost(cost + price)
    }

    //decrement quantity
    else {
      const qty = temporaryarray[index].qty
      //remove from cart if qant is 0
      if (qty <= 1) {
        const price = temporaryarray[index].price
        setCost(cost - price)
        temporaryarray.splice(index, 1)
        addCart(temporaryarray);
      }
      else {
        temporaryarray[index].qty -= 1
        addCart(temporaryarray);
        const price = temporaryarray[index].price
        setCost(cost - price)
      }

    }

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader />}>
          <Route path="/" element={<DisplayMain />} />
          <Route path="shop" element={<DisplayShop items={products} handler={updateCost} />} />
          <Route path="cart" element={<DisplayCart data={cart} price={cost} handler={updateQuant} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
