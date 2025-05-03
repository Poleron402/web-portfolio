
import {useState, KeyboardEvent } from "react"
import {Course, TerminalHistory } from "../utils"
import { Terminal } from "lucide-react"
interface IndividualSchoolProjectProps{
    project:Course,
}
const MyTerminal: React.FC<IndividualSchoolProjectProps> = ({project})=>{
    
    const [history, setHistory] = useState<TerminalHistory[]>([])
    const [command, setCommand] = useState<string>("")
    const projects = project.projects
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>{
        const [myCommand, ...argument] = command.split(" ")
        const strArgument = argument.join(' ')
        let returnString:string = ""
        if (e.key === 'Enter'){
            switch (myCommand){
                case "clear":
                    setHistory([])
                    setCommand("")
                    break
                case "help":
                    setHistory((prevItems)=> [...prevItems, {command: command,
                         result: "=== Available commands ===<br>ls - list projects<br>cat [PROJECT] - read what the project is about<br>links [PROJECT] - get the links for the project <br>"}])
                         setCommand("")
                         break;
                case "ls":

                    for (const proj of projects){
                        returnString += proj.title+" "
                    }
                    setHistory((prevItems)=> [...prevItems, {command: command,
                        result: returnString}])
                        setCommand("")
                        break;
                case "cat":


                    for (const proj of projects){
                        if (strArgument === proj.title){
                            returnString += proj.description+" "
                        }
                        
                    }
                    setHistory((prevItems)=> [...prevItems, {command: command,
                        result: returnString}])
                        setCommand("")
                        break;
                case "links":
                    
                    for (const proj of projects){
                        if (strArgument === proj.title){
                            for (const link of proj.links){
                                returnString+=`<a class="terminalLinks" target="_blank" href=${link.link}>➜ ${proj.title}_${link.type}</a>&nbsp;&nbsp;`
                            }
                            
                        }
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
                    **** Of course I will code up a web Terminal for OS Class 🤖 ****
                    <br></br>Type 'help' to see the list of available commands
                </p>
            </div>
            {history&& history.map((hist, idx)=>(
                <div key={idx}>
                    <div className="inLine">
                        <p>🌸 pol@polsportfolio $ &nbsp; {hist.command}</p> <br></br>
                    </div>
                    <div className="dangerousHTML" dangerouslySetInnerHTML={{ __html: hist.result }}/>
                </div>
            ))}
            <div className="inLine">
                <p>🌸 pol@polsportfolio  $ &nbsp;</p> 
                <input autoComplete="off" autoFocus type="text" value = {command} onKeyDown={e=>handleKeyDown(e)} id="termInput" onChange={e=>setCommand(e.target.value)} ></input>
            </div>
        </div>
        </>
    )
}

export default MyTerminal