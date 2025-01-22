import ResumePDF from '../assets/PolinaMejiaResume.pdf'

const Resume = () =>{
    const style = {
        width:'100%',
        height:'100vh',
    }
    return(
        <>
        <object className="pdf h-100%" 
            data={ResumePDF}
            style={style}></object>
        </>
        
    )
}

export default Resume