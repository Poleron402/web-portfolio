import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react"
import { SchoolProject } from "../utils"
import YT from '../assets/yt_logo_mono_dark.png'
import GH from '../assets/github-mark-white.png'

interface IndividualSchoolProjectProps{
    project: SchoolProject,
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
       {myProjectLinks&&myProjectLinks.map((proj, idx)=>(
            <div className="projectLink">
                <h1>{proj.title}</h1>
                <p className='courseDesc'>{proj.description}</p>
                <div className="multipleButtons">
                {
                    proj.links.map((mylink: { type: string; link: string}, index: any)=>{
                        return mylink.type=='YouTube'?(
                        <div className="buttonAlignment"><a target="_blank" className="awayButton" href={mylink.link}><img width={120} src={YT}></img></a></div>
                        ):(
                        <a target="_blank" className="awayButton" href={mylink.link}><span className="inLine"><img width={40} src={GH}/></span></a>
                    )})
                }
                </div>
            </div>
        )
        )}
        </>
    )
}

export default IndividualSchoolProject