import { Link } from "react-router";

const Header = ()=>{
    return (
        <>
        <div id='header' className="text-xl font-jakarta flex justify-between items-center p-4 max-w-7xl mx-auto px-16 ">
            <Link className = 'linkClass' to="/projects">projects</Link>
            <Link className = 'linkClass' to="/">resume</Link>
            <Link className = 'linkClass' to="/contact">contacts</Link>
        </div>
        </>
    )
}
export default Header