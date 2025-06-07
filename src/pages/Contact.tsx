import { useState, useEffect } from "react"
const Contact = ()=>{
    const [clicked, setClicked] = useState<boolean>(false)
    useEffect(()=>{

        if (clicked === true){
            setTimeout(()=>{
                setClicked(false)
            }, 1500)
        }
    }, [clicked])
    return (
        <>
        <div id="contact">
            
            <div id="square">
                <h1>Connect</h1>
                <div id="contactLinks">
                    <a className="contactLink" href='https://www.linkedin.com/in/polina-mejia-432080284/' target="_blank">• Linked</a> &nbsp;&nbsp;&nbsp;
                    <a className="contactLink" href='https://github.com/Poleron402' target="_blank">• GitHub</a>
                </div>
            </div>
            
            <div id="square2">
                <h1>Contact</h1>
                <div id="email">
                    <p className="contactLink" onClick={() => {
                        navigator.clipboard.writeText("zhperon@gmail.com")
                        setClicked(true)}}>zhperon@gmail.com</p>
                    {
                        clicked&&
                        <p id="clipboard">Copied to Clipboard!</p>
                    }
                        </div>
            </div>
        </div>
        </>
    )
}
export default Contact