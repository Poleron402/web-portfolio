import ResumePDF from '../assets/PolinaMejiaResume.pdf'

const Resume = () =>{
    const style = {
        width:'80%',
        height:'90vh',
        borderRadius: '20px',
        backgroundColor: 'white'
    }
    return(
        <div className='flex justify-center content-center'>
        <iframe className="pdf " 
            src={`${ResumePDF}#view=Fit`}
            style={style}></iframe>
        </div>
        
    )
}

export default Resume