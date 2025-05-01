import { useState, useEffect } from 'react'
import courses from '../school.json'
const SchoolProjects = () =>{

    let [classes, setClasses] = useState(courses)
    useEffect(()=>{
        setClasses(courses)
    }, [])
    return(

        <div id='classes'>
           {
            classes && classes.map((course, idx)=>(
                <div className="course">
                    <h4 className="courseTitle">{course.title}</h4>
                    <p className='courseDesc'>{course.description}</p>
                    <button className="projButton">View Projects</button>
                </div>
            ))
           }
        </div>
    )
}

export default SchoolProjects