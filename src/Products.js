import Breadcrumbs from "./Breadcrumbs";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "./Title";

const Products = () => {
    const [products, getProducts] = useState(null)
    const title = "All Women's Clothing"
    const description = "From colourful styles that will brighten up your day (and your wardrobe) to pieces that have been made with the busy everyday in mind, our collection of women's clothing is practical, stylish and always fun."

    useEffect(() => {
        axios.get('http://localhost:8000/products')
          .then(resp => {
            getProducts(resp.data)
          })
      }, [])

    console.log(products)

    return (<>
    <Breadcrumbs />
    <Title title={title} description={description}/>
    <div className="products-wrapper">
        {products && products.map((product, index) => {
            return <div className="product-card-outer" key={index}>
                <div className="product-card-inner">
                    <Link to={product.url}>
                        <div>
                            <img src={product.images[0].url} alt={product.name}/>
                        </div>
                        <p className="product-title">{product.name} {product.summary}</p>
                    </Link>
                        <p className="product-brand">by {product.shop.name}</p>
                        <p className="product-price">{product.price.formattedValue}</p>
                </div>
                </div>
            })}
            </div>
            </>
    )
}
 
export default Products;