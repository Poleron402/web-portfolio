import { Link, Outlet } from "react-router";

const Projects = ()=>{
    return (
        <>
        <div id="subcategory" className="flex content-center text-jakarta text-teal-300 justify-evenly">
                <Link to="school" className="personalVsSchool ml-8">School</Link>
                <Link to="personal" className="personalVsSchool">Personal</Link>
            </div>
        <div className="flex-col justify-self-end px-32 py-20">
            <Outlet/>
        </div>
        
        </>
    )
}
export default Projects