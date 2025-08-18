import demo from '../../public/assets/output.gif'
import Capstone from './Capstone'
const PersonalProjects = () =>{
    return(
           <div id="PersonalProjectPage">
            <div className="inLine"><h1 className="vt">GradeMe</h1> <p className="mt-3 text-2xl"> &nbsp;&nbsp;&nbsp;-&nbsp; Professor's grading assistant</p></div>

            <p className="intro">While working as a TA for Software Design class, I had to manually check a lot of student submissions.
                Copying from QuickGrader was not accurate, and Canvas's submission download format was not the easiest to deal with.
                This project started with a python script, which took all submissions and sorted them into folders by student name.
                I took it a step further, and turned this script into an Electron Application for interactivity. 
                Next, I added Codellama AI for student code analysis. While this project only supports .gradle 
                build for now, I have already peaked interest of some of my friends to help me move it further. 
                Make sure to star <a id="in-text-link" href="https://github.com/Poleron402/GradeMeApp" target="_blank">GradeMe</a> on GitHub! ⭐
            </p>

            <img src={demo}></img>
            <div className="inLine" id="separator"> <p>.</p> <p id="larger">.</p><p>.</p></div>

            <div className="inLine"><h1 className="vt">OtterMusic</h1> <p className="mt-3 text-2xl"> &nbsp;&nbsp;&nbsp;-&nbsp; A web audio-editor with AI!</p></div>

            <p className="intro"> A winner of the <span id="innovative">Most Innovative Capstone Award</span>, OtterMusic combines audio editing with AI music generation. See links under School Tab -{'>'} Computer Science Capstone!
            </p>

           </div> 
    )
}

export default PersonalProjects