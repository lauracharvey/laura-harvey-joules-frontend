import { Link } from "react-router-dom";
import Title from "./Title";

const Home = () => {
  const title = "Home"
  const description = "This is a dummy homepage, please click the link below to see an example products page"

    return (
        <div className="content">
          <Title title={title} description={description}/>
          <Link to="/women">Go to Products Page</Link>
        </div>
    )
}
 
export default Home;