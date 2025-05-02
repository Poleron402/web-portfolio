import { useState, useEffect } from 'react'
import courses from '../school.json'
import { useNavigate } from 'react-router'
import IndividualSchoolProject from '../pages/IndividualSchoolProject'
import { SchoolProject } from '../utils'
import { MoveLeft } from 'lucide-react'
const SchoolProjects = () =>{

    let [classes, setClasses] = useState(courses)
    let [pickedCourse, setPickedCourse] = useState<SchoolProject|null>(null)

    useEffect(()=>{
        setClasses(courses)
    }, [])
    return(
        <>
        {!pickedCourse? (
            <div id='classes'>
            {
                classes && classes.map((course, idx)=>(
                <div key={course.code} className="course">
                    <h4 className="courseTitle">{course.title}</h4>
                    <p className='courseDesc'>{course.description}</p>
                    <button className="projButton" onClick={_=>setPickedCourse(course)}>View Projects</button>
                </div>
            
            ))
            }
            </div>
            ):(
                <div>
                    <div id="leftAlign">
                        <button className="backButton" onClick={()=>setPickedCourse(null)}><span className='inLine'><MoveLeft/> Back To Courses</span></button>
                    </div>
                    <div id='classes'>
                        <IndividualSchoolProject project={pickedCourse}/>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default SchoolProjects