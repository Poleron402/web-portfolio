import { Outlet } from "react-router-dom";

const Home = ()=>{
    return (
        <>
        <div id='sweDevAni' className="relative max-w-7xl mx-auto px-16 py-52">
            <h1 id='myName' className="font-monoton text-5xl  max-w-7xl mx-auto relative">Polina Mejia</h1>
            <h2 className="font-jakarta text-teal-300 text-5xl absolute">&gt; junior swe</h2>
        </div>
        <Outlet />
        </>
    )
}

export default Home