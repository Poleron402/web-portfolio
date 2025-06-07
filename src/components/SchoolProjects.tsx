import { useState, useEffect } from 'react'
import courses from '../school.json'
import IndividualSchoolProject from './IndividualSchoolProject'
import { Course } from '../utils'
import { MoveLeft } from 'lucide-react'
import MyTerminal from './MyTerminal'
const SchoolProjects = () =>{

    const [classes, setClasses] = useState(courses)
    const [pickedCourse, setPickedCourse] = useState<Course|null>(null)

    useEffect(()=>{
        setClasses(courses)
    }, [])
    return(
        <>
        {!pickedCourse? (
            <div id='classes'>
            {
                classes && classes.map((course)=>(
                <div key={course.code} className="course">
                    <h4 className="courseTitle">{course.code} - {course.title}</h4>
                    <p className='courseDesc'>{course.description}</p>
                    <button className="projButton" onClick={() =>setPickedCourse(course)}>View Projects</button>
                </div>
            
            ))
            }
            </div>
            ):(
                <div>
                    <div id="leftAlign">
                    <h1>{pickedCourse.title}</h1>
                    <button className="backButton" onClick={()=>setPickedCourse(null)}><span className='inLine'><MoveLeft/> Back To Courses</span></button>
                    </div>
                    {
                        pickedCourse.code !== 'CST334'?
                        (
                            <div id='classes'>
                                <IndividualSchoolProject project={pickedCourse}/>
                            </div>
                        ) : (
                            <MyTerminal project={pickedCourse}/>
                        )                       
                    }
                    
                </div>
            )
        }
        </>
    )
}

export default SchoolProjects