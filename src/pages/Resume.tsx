import ResumePDF from '../assets/PolinaMejiaResume.pdf'

const Resume = () =>{
    const style = {
        width:'80%',
        height:'80vh',
    }
    return(
        <div className='flex justify-center content-center'>
        <object className="pdf " 
            data={ResumePDF}
            style={style}></object>
        </div>
        
    )
}

export default Resume