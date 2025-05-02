import { useEffect, useState } from "react"
import { SchoolProject } from "../utils"
import YT from '../assets/yt_logo_mono_dark.png'
import GH from '../assets/github-mark-white.png'

interface IndividualSchoolProjectProps{
    project: SchoolProject
}
const IndividualSchoolProject: React.FC<IndividualSchoolProjectProps> = ({project})=>{
    let [myProjectFiles, setMyProjectFiles] = useState<any[]>()
    let [myProjectLinks, setMyProjectLinks] = useState<any[]>()
    const loadModules = async()=>{
        const loadedModules: any[] = []
        const loadedLinks: any[] = []
        for (const link of project.projects){
            if (typeof link ==="string" && link.endsWith('.pdf')){
                try {
                    const mod = await import(`../assets/${link}`
                    );
                    loadedModules.push(mod.default);
                }catch(err){
                    alert("Failed to import some modules")
                }
            }else{
                loadedLinks.push(link)
            }
        }

        setMyProjectFiles(loadedModules)
        setMyProjectLinks(loadedLinks)
    }
    useEffect(()=>{
        loadModules()

        console.log(myProjectFiles)
        console.log(myProjectLinks)
    }, [])
    return(
        <>
       {myProjectFiles&&myProjectFiles.map((proj, idx)=>(

            <iframe key={idx} className="classProject"  src={`${proj}#fit=Fit`}></iframe>
       )
       )}
       <br></br>
       {myProjectLinks&&myProjectLinks.map((proj, idx)=>(
            <div className="projectLink">
                <h1>{proj.title}</h1>
                <p className='courseDesc'>{proj.description}</p>
                {
                    proj.type=='YouTube'?
                    <a target="_blank" className="awayButton" href={proj.link}><img width={150} src={YT}></img></a>
                    :
                    <a target="_blank" className="awayButton" href={proj.link}>{GH}{proj.type}</a>
                    
                }
            </div>
        )
        )}
        </>
    )
}

export default IndividualSchoolProject