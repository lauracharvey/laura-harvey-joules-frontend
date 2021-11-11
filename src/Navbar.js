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
                    <a id="christmas" className="menu-item" href="/christmas">Christmas</a>
                    <a id="women" className="menu-item" href="/women">Women</a>
                    <a id="men" className="menu-item" href="/men">Men</a>
                    <a id="kids" className="menu-item" href="/kids">Kids</a>
                    <a id="homewear" className="menu-item" href="/homewear">Home</a>
                    <a id="rooms" className="menu-item" href="/rooms">Rooms</a>
                    <a id="pet" className="menu-item" href="/pet">Pet</a>
                    <a id="gifts" className="menu-item" href="/gifts">Gifts</a>
                    <a id="friends" className="menu-item" href="/friends">Friends of Joules</a>
                    <a id="clearance" className="menu-item" href="/clearance">Clearance</a>
                    
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