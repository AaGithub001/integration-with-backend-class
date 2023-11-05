import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[categories, setCategories] = useState([]);
  const[products, setProducts] = useState([]);
  const[singleproduct,setSingleproduct] = useState([]);
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))

  fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))

  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setSingleproduct(json))       
  
  fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

  
  return (
    
    <div>
      <ul>
        <h1>Categories</h1>
      {categories.map(category => (
        <li>{category}</li>
        ))
      }
      </ul>
      <ul>
        <h1>All Products</h1>
        {products.map(product =>(
          <div key={product.id} style={{margin:"50px"}}>
          <li > Title : {product.title} </li>
          <li>Description :{product.description}</li>
          <li>Price: $ {product.price}</li>
          </div>
        ))
        } 
      </ul>  
      <ul>
          <div style={{margin:"50px"}}> 
          <h1> First Product</h1>
          <li > Category : {singleproduct.category} </li>
          <li>Description :{singleproduct.description}</li>
          <li>Image :{singleproduct.image}</li>
          <li>Price: $ {singleproduct.price}</li>
          <li>Count :{singleproduct.rating?.count}</li>
          <li>Rate :{singleproduct.rating?.rate}</li>
          <li>Title :{singleproduct.title}</li>
          </div>
    
      </ul>  

    </div>
  );
}

export default App;
