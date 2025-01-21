import { Outlet } from "react-router-dom";
import Burger from "../components/Burger";
import LinkedIn from "../assets/In-White-128.png"
import GH from "../assets/github-mark-white.png"
const Home = ()=>{
    return (
        <>
        <div className="responsiveDiv">
            <div id='sweDevAni' className="relative max-w-7xl mx-auto px-16 py-64 flex">
                <div>
                <h1 id='myName' className="font-monoton text-5xl">Polina Mejia</h1>
                <h2 className="font-jakarta text-teal-300 text-5xl">&gt;_ junior swe <br></br>+ web developer</h2>
                <div className="flex my-12">
                <a href='https://www.linkedin.com/in/polina-mejia-432080284/' target="_blank">
                    <img src={LinkedIn} width={80} ></img>
                </a>
                <a href='https://github.com/Poleron402' target="_blank">
                    <img src={GH}  width={80} className="ml-24"></img>
                </a>
                </div>
                
                </div>
            </div>
            <div id='burgerDiv'>
                <Burger/>
            </div>

        </div>
        <Outlet />
        </>
    )
}

export default Home