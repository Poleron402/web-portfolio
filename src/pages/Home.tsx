import { Outlet } from "react-router-dom";
import Header from "../components/Header"
const Home = ()=>{
    return (
        <>
        
        <h1 id='myName' className="font-monoton text-6xl">Polina Mejia</h1>
        <Outlet />
        </>
    )
}

export default Home