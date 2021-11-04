import { useState, useEffect } from "react";
import axios from "axios";
import Products from './Products'

const Home = () => {
    const [products, getProducts] = useState(null)


    useEffect(() => {
        axios.get('http://localhost:8000/products')
          .then(axiosResp => {
            getProducts(axiosResp.data)
          })
      }, [])

    console.log(products)

    return (
        <div className="home">
            <h2 className="title">Your Products</h2>
            { products && <Products products={products} />}
        </div>
    )
}
 
export default Home;