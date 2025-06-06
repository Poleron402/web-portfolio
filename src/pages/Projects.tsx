import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import { GraduationCapIcon, HammerIcon } from "lucide-react";

const Projects = ()=>{
    const location = useLocation();
    const school = location.pathname.includes("/school");
    return (
        <>
        <div id="subcategory" className="flex content-center text-jakarta justify-evenly">
                <Link to="/projects" className={!school?"personalVsSchool active flex items-center": "personalVsSchool flex items-center"}>Personal &nbsp;<HammerIcon className={school?'invisible':'visible'}/></Link>
                <Link to="school" className={school?"personalVsSchool flex items-center active": "personalVsSchool flex items-center"}>School &nbsp; <GraduationCapIcon className={school?'visible':'invisible'}/></Link>

        </div>
        <hr className="w-4/5 mx-auto color-teal-500"></hr>
        <div id="projects" className="flex-col justify-self-end px-32 py-20">
        <Outlet/>    
        </div>
        
        </>
    )
}
export default Projects