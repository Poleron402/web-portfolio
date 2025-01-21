import { Outlet } from "react-router-dom";
import Burger from "../components/Burger";
const Home = ()=>{
    return (
        <>

        <div id='sweDevAni' className="relative max-w-7xl mx-auto px-16 py-40 flex">
            <div>
            <h1 id='myName' className="font-monoton text-5xl">Polina Mejia</h1>
            <h2 className="font-jakarta text-teal-300 text-5xl">&gt;_ junior swe <br></br>+ web developer</h2>
            </div>
        </div>
        <div id='burgerDiv' className="absolute right-64 top-64">
            <Burger/>
        </div>
        <Outlet />
        </>
    )
}

export default Home