import { Link, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { GraduationCapIcon, HammerIcon } from "lucide-react";
const Projects = ()=>{
    const [personal, setPersonal] = useState<boolean>(true);
    useEffect(()=>{
        setPersonal(true)
    }, [])
    return (
        <>
        <div id="subcategory" className="flex content-center text-jakarta justify-evenly">
                <Link to="/projects" onClick={()=>setPersonal(true)} className={personal?"personalVsSchool active flex items-center": "personalVsSchool flex items-center"}>Personal &nbsp;<HammerIcon className={personal?'visible':'invisible'}/></Link>
                <Link to="school" onClick={()=>setPersonal(false)}className={!personal?"personalVsSchool flex items-center active": "personalVsSchool flex items-center"}>School &nbsp; <GraduationCapIcon className={!personal?'visible':'invisible'}/></Link>

        </div>
        <hr className="w-4/5 mx-auto color-teal-500"></hr>
        <div id="projects" className="flex-col justify-self-end px-32 py-20">
            <Outlet/>
        </div>
        
        </>
    )
}
export default Projects