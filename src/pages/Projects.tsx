import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import { GraduationCapIcon, HammerIcon } from "lucide-react";

const Projects = ()=>{
    const location = useLocation();
    const personal = location.pathname.includes("/personal");
    return (
        <>
        <div id="subcategory" className="flex content-center text-jakarta justify-evenly">
                <Link to="personal" className={personal?"personalVsSchool active flex items-center": "personalVsSchool flex items-center"}>Personal &nbsp;<HammerIcon className={personal?'visible':'invisible'}/></Link>
                <Link to="school" className={!personal?"personalVsSchool flex items-center active": "personalVsSchool flex items-center"}>School &nbsp; <GraduationCapIcon className={personal?'invisible':'visible'}/></Link>

        </div>
        <hr className="w-4/5 mx-auto color-teal-500"></hr>
        <div id="projects" className="flex-col justify-self-end px-32 py-20">
        <Outlet/>    
        </div>
        
        </>
    )
}
export default Projects