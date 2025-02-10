import { Link } from "react-router"
import { SquareArrowOutUpRight } from "lucide-react"
const PersonalProjects = () =>{
    return(
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="flex flex-row justify-around ">
                <Link className="linkToOutside font-jakarta text-3xl text-teal-300 flex items-center" to="https://polcivicstest.com/" target="_blank">US Civics Test &nbsp;<SquareArrowOutUpRight/></Link>
                <p className="text-teal-500 text-lg w-3/5">A frontend-only react site that provides flashcards for getting ready for the US civics test. Allows saving weak questions for targeted practice.</p>
            </div>
        </div>
    )
}

export default PersonalProjects