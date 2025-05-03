
import {useEffect, useState, KeyboardEvent } from "react"
import {Course, TerminalHistory, ProjectList } from "../utils"
import { Terminal } from "lucide-react"
interface IndividualSchoolProjectProps{
    project:Course,
}
const MyTerminal: React.FC<IndividualSchoolProjectProps> = ({project})=>{
    
    const [history, setHistory] = useState<TerminalHistory[]>([])
    const [command, setCommand] = useState<string>("")
    const [projects, setProjects] = useState<ProjectList[]>(project.projects)
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>{
        let commandArr = command.split(" ")
        if (e.key === 'Enter'){
            switch (commandArr[0]){
                case "clear":
                    setHistory([])
                    setCommand("")
                    break
                case "help":
                    setHistory((prevItems)=> [...prevItems, {command: command,
                         result: "=== Available commands ===<br>ls - list projects<br>cat [PROJECT] - read what the project is about<br>gh [PROJECT] - open GitHub of the project in a new tab<br>"}])
                         setCommand("")
                         break;
                case "ls":
                    let returnString:string = ""
                    console.log(projects)
                    for (let proj of projects){
                        returnString += proj.title+" "
                    }
                    setHistory((prevItems)=> [...prevItems, {command: command,
                        result: returnString}])
                        setCommand("")
                        break;
                default:
                    setHistory((prevItems)=> [...prevItems, {command: command, result: ""}])
                    setCommand("")
                    break;
            }
        }
        
    }
    return (
        <>
        <div id="termHeader">
                    <Terminal/>
        </div>
        <div id="term" onClick={()=>{document.getElementById("termInput")!.focus()}}>
            
            <div id="comments">
                <p>
                    **** Of course I will code up a web Terminal for OS Class :) ****
                    <br></br>Type 'help' to see the list of available commands
                </p>
            </div>
            {history&& history.map((hist, idx)=>(
                <>
                <div className="inLine">
                    <p>🌸 pol@polsportfolio $ &nbsp; {hist.command}</p> <br></br>
                </div>
                    <div className="dangerousHTML" dangerouslySetInnerHTML={{ __html: hist.result }}/>
                </>
            ))}
            <div className="inLine">
                <p>🌸 pol@polsportfolio $ &nbsp;</p> 
                <input autoComplete="off" autoFocus type="text" value = {command} onKeyDown={e=>handleKeyDown(e)} id="termInput" onChange={e=>setCommand(e.target.value)} ></input>
            </div>
        </div>
        </>
    )
}

export default MyTerminal