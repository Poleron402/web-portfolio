import { Link } from "react-router";
import BurgerLink from "../assets/burger-logo.png";
import { Wrench, Mail, FileUser } from "lucide-react";
const Header = ()=>{

    return (
        <>
        <div id="header-full">
        <Link to="/" id='burgerLink'><img src={BurgerLink}></img></Link>
        <div id='header' className="font-jakarta flex justify-evenly w-full items-center text-2xl">
            <Link className = 'linkClass flex items-center' to="/projects"><div className="names">projects</div><div className="icons"><Wrench/></div></Link>
            <Link className = 'linkClass flex items-center' to="/resume"><div className="names">resume</div><div className="icons"><FileUser/></div></Link>
            <Link className = 'linkClass flex items-center' to="/contact"><div className="names">contact</div><div className="icons"><Mail/></div></Link>
        </div>
        </div>
        </>
    )
}
export default Header