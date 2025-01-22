import { Link } from "react-router";
import BurgerLink from "./BurgerLink";

const Header = ()=>{

    return (
        <>
        <div id='header' className="text-xl font-jakarta flex justify-between items-center p-4 max-w-7xl mx-auto px-16 ">
            <Link to="/" id='burgerLink'><BurgerLink/> </Link>
            <Link  className = 'linkClass' to="/projects">projects</Link>
            <Link className = 'linkClass' to="/resume">resume</Link>
            <Link className = 'linkClass' to="/contact">contact</Link>
        </div>
        </>
    )
}
export default Header