import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data"
import Card from "./components/Card";
function App() {

  const[selectedCategory, setSelectedCategory] = useState(null);
  const[query,setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !==-1
);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }

    if(selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }


    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()*1000}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
  }




  const result =  filteredData(products, selectedCategory, query);


  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
      
      
    </>
  )
}  

export default App;
