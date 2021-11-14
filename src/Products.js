import { useState, useEffect } from 'react';
import ProductListings from './ProductListings';
import Pagination from './Pagination';
import axios from 'axios';
import Breadcrumbs from "./Breadcrumbs";
import Title from "./Title";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const title = "All Women's Clothing"
  const description = "From colourful styles that will brighten up your day (and your wardrobe) to pieces that have been made with the busy everyday in mind, our collection of women's clothing is practical, stylish and always fun."

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:8000/products');
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (<>
        <Breadcrumbs />
        <Title title={title} description={description} />
        <ProductListings products={currentProducts} loading={loading} />
        <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
        />
  </>)
};

export default Products;