import { slide as Menu } from 'react-burger-menu'
import Logo from './assets/images/logo.png'
import { FaSearch, FaHeart } from 'react-icons/fa';
import { BsFillHandbagFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <section className="navbar-outer">
            <div className="navbar-inner">
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="products" className="menu-item" href="/about">Products</a>
                </Menu>
            </div>
            <div className="navbar-inner">
                <img className="logo" src={Logo} alt="Joules Company Logo in Pink"/>
            </div>
            <div className="navbar-inner">
                <FaSearch />
                <FaHeart />
                <BsFillHandbagFill /> 
            </div>
        </section>
    )
}
 
export default Navbar;