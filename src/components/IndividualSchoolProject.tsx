import { useEffect, useState } from "react"
import { Course,ProjectList } from "../utils"
import YT from '../../public/assets/yt_logo_mono_dark.png'
import GH from '../../public/assets/github-mark-white.png' 
import { SquareArrowUpRight } from "lucide-react"
interface IndividualSchoolProjectProps{
    project: Course,
}
const IndividualSchoolProject: React.FC<IndividualSchoolProjectProps> = ({project})=>{
    const [myProjectFiles, setMyProjectFiles] = useState<string[]>()
    const [myProjectLinks, setMyProjectLinks] = useState<ProjectList[]>()
    const loadModules = async()=>{
        const loadedModules: string[] = []
        const loadedLinks: ProjectList[] = []
        for (const link of project.projects){
            if (typeof link ==="string" && link.endsWith('.pdf')){
                loadedModules.push(`${link}`);
            }else{
                loadedLinks.push(link as ProjectList)
            }
        }

        setMyProjectFiles(loadedModules)
        setMyProjectLinks(loadedLinks)
    }
    useEffect(()=>{
        loadModules()

    }, [])
    console.log(myProjectFiles)
    return(
        <>
       {myProjectFiles&&myProjectFiles.map((proj, idx)=>(

            <iframe key={idx} className="classProject"  src={`${proj}#fit=Fit`}></iframe>
       )
       )}
       {myProjectLinks&&myProjectLinks.map((proj, idx)=>(
            <div key={idx} className="projectLink">
                <h1>{proj.title}</h1>
                <p className='courseDesc'>{proj.description}</p>
                <div className="multipleButtons">
                {
                    proj.links.map((mylink: { type: string; link: string}, index: number)=>{
                        return mylink.type=='YouTube'?(
                        <div key={index} className="buttonAlignment"><a target="_blank" className="awayButton" href={mylink.link}><img width={120} src={YT}></img></a></div>
                        )
                        : mylink.type=='GitHub'?(
                        <a key={index} target="_blank" className="awayButton" href={mylink.link}><span className="inLine"><img width={40} src={GH}/></span></a>
                        ):(
                            <button className="awayButton"><a href={mylink.link} target="_blank"><span className="inLine">View Site &nbsp;<SquareArrowUpRight/></span></a></button>
                        )
                    })
                }
                </div>
            </div>
        )
        )}
        </>
    )
}

export default IndividualSchoolProject