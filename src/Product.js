import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Product = () => {

    const { url } = useParams()
    const productId = url

    useEffect(() => {
      axios.get(`http://localhost:8000/products/${productId}`)
        .then(resp => {
          console.log(resp.data)
        })
    },[productId])

  return (<div className="product">
  <h2>{productId.name}</h2>
  </div>)
}

export default Product;
