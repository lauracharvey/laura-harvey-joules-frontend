import { Link } from "react-router-dom";
import Title from "./Title";

const Home = () => {
  const title = "Home"
  const description = "This is a dummy homepage, please click the link below to see an example products page"

    return (
        <div className="content">
          <Title title={title} description={description}/>
          <div className="products-link">
            <Link to="/women">Go to Products Page</Link>
          </div>
        </div>
    )
}
 
export default Home;