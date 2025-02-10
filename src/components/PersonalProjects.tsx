import { Link } from "react-router"
import { SquareArrowOutUpRight } from "lucide-react"
const PersonalProjects = () =>{
    return(
        <div id="personalProjects">
            <div className="eachProject ">
                <Link className="linkToOutside font-jakarta text-3xl flex items-center" to="https://polcivicstest.com/" target="_blank">US Civics Test &nbsp;<SquareArrowOutUpRight/></Link>
                <p className="text-lg w-3/5">
                A frontend-exclusive site that provides flashcards for 
                etting ready for the US civics test. Allows saving weak questions 
                for targeted practice by leveraging local storage, which additionally eliminates the need for the user to create an account.
                </p>
            </div>
            <div className="eachProject">
                <div>
                    <Link className="linkToOutside font-jakarta text-3xl flex items-center" to="https://polcivicstest.com/" target="_blank">US Civics Test &nbsp;<SquareArrowOutUpRight/></Link>
                    <Link className="linkToOutside font-jakarta text-2xl flex items-center" to="https://github.com/Poleron402/web-portfolio" target="_blank">GitHub  &nbsp;<SquareArrowOutUpRight/></Link>
                </div>
                <p className="text-lg w-3/5">
                A frontend-exclusive site that provides flashcards for 
                etting ready for the US civics test. Allows saving weak questions 
                for targeted practice by leveraging local storage, which additionally eliminates the need for the user to create an account.
                </p>
            </div>
            
        </div>
    )
}

export default PersonalProjects