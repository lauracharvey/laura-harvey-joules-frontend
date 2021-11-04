const Products = ({ products }) => {
    return (<>
    <div className="products-wrapper">
        {products.map((product, index) => {
            return <div className="product-card-outer" key={index}>
                <div className="product-card-inner">
                    <p>{product.name}</p>
                    <p>{product.summary}</p>
                </div>
                </div>
            })}
            </div>
            </>
    )
}
 
export default Products;