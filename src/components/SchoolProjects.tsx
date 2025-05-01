import { useState, useEffect } from 'react'
import courses from '../school.json'
import { useNavigate } from 'react-router'
const SchoolProjects = () =>{

    let [classes, setClasses] = useState(courses)

    let navigate=useNavigate()
    useEffect(()=>{
        setClasses(courses)
    }, [])
    return(

        <div id='classes'>
           {
            classes && classes.map((course, idx)=>(
                <div key={course.code} className="course">
                    <h4 className="courseTitle">{course.title}</h4>
                    <p className='courseDesc'>{course.description}</p>
                    <button className="projButton" onClick={_=>navigate(`${course.code}`)}>View Projects</button>
                </div>
            ))
           }
        </div>
    )
}

export default SchoolProjects