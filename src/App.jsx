import Nav from "./components/Nav";
import Header from "./Components/Header";
import Footer from "./components/footer";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let allData = [
    {
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      discount: false,
      button: "View options",
      sale: false,
      rating: false,
    },
    {
      productName: "Special Item",
      price: "$20.00 $18.00",
      discount: true,
      button: "Add to cart",
      sale: true,
      rating: true,
    },
    {
      productName: "Sale Item",
      price: "$50.00 $25.00",
      discount: true,
      button: "Add to cart",
      sale: true,
      rating: false,
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      discount: false,
      button: "Add to cart",
      sale: false,
      rating: true,
    },
    {
      productName: "Sale Item",
      price: "$50.00 $25.00",
      discount: true,
      button: "Add to cart",
      sale: true,
      rating: false,
    },
    {
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      discount: false,
      button: "View options",
      sale: false,
      rating: false,
    },
    {
      productName: "Special Item",
      price: "$20.00 $18.00",
      discount: true,
      button: "Add to cart",
      sale: true,
      rating: true,
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      discount: false,
      button: "Add to cart",
      sale: false,
      rating: true,
    },
  ];

  let cartClassName;
  count === 0
    ? (cartClassName = "btn btn-outline-dark disabled")
    : (cartClassName = "btn btn-outline-dark");

  let handleCount = (e) => {
    if (e.target.innerHTML === "Add to cart") {
      setCount(count + 1);
      e.target.innerHTML = "Remove";
      e.target.classList.add("opacity-50");
      e.target.classList.remove("opacity-100");
    } else if (e.target.innerHTML === "Remove") {
      setCount(count - 1);
      e.target.innerHTML = "Add to cart";
      e.target.classList.add("opacity-100");
      e.target.classList.remove("opacity-50");
    }
  };
  return (
    <div>
      <Nav count={count} cartClassName={cartClassName} />
      <Header />
      <Section handleCount={handleCount} allData={allData} />
      <Footer />
    </div>
  );
}
export default App;
