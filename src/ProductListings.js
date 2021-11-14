const ProductListings = ({ products, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (<>
    <div className="products-wrapper">
        {products && products.map((product, index) => {
            return <div className="product-card-outer" key={index}>
                <div className="product-card-inner">
                        <div>
                            <img src={product.images[0].url} alt={product.name}/>
                        </div>
                        <p className="product-title">{product.name} {product.summary}</p>
                        <p className="product-brand">by {product.shop.name}</p>
                        <p className="product-price">{product.price.formattedValue}</p>
                </div>
                </div>
            })}
            </div>
    </>);
  };
  
  export default ProductListings;