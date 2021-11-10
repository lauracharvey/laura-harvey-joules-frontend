import Breadcrumbs from "./Breadcrumbs";

const Products = ({ products }) => {
    return (<>
    <Breadcrumbs />
    <div className="products-wrapper">
        {products.map((product, index) => {
            return <div className="product-card-outer" key={index}>
                <div className="product-card-inner">
                    <div><img src={product.images[0].url} alt={product.name}/></div>
                    <p>{product.name} {product.summary}</p>
                    <p>by {product.shop.name}</p>
                    <p>{product.price.formattedValue}</p>
                </div>
                </div>
            })}
            </div>
            </>
    )
}
 
export default Products;