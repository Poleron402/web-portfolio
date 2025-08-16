import otter from '../../public/assets/otter.png'
import gh from '../../public/assets/github-mark-white.png'
import yt from '../../public/assets/yt_logo_mono_dark.png'
import workbench from '../../public/assets/ottermusicworkbench.png'
import mixer from '../../public/assets/mixer.png'
import chat from '../../public/assets/chat.png'

const Capstone = ()=>{
    return (
        <>
        <div id = 'capstonePage'>
            <div id="capstoneTitle" className='inLine'><img src={otter}></img><h1 className="vt">OtterMusic </h1><h1 className="text-4xl mt-3"> &nbsp;&nbsp;-&nbsp; AI meets web audio-editing</h1></div>
            <div id="capstoneLinks">
            <a className="capstoneLinks inLine" href="https://github.com/Capstone-OtterMusic-Team10/backend" target='_blank'><img className='csimg' width="40" src={gh}></img>Backend code</a>
            <a className="capstoneLinks inLine" href="https://github.com/Capstone-OtterMusic-Team10/frontend" target='_blank'><img className='csimg' width="40" src={gh}></img>Frontend code</a>
            <a className="capstoneLinks inLine" href="https://www.youtube.com/watch?v=4Mhr0mnvh_8" target='_blank'><img width="150" src={yt}></img></a>
            </div>
            <div className="inLine" id="separator"> <p>.</p> <p id="larger">.</p><p>.</p></div>
            <div id='capsAbout'>
                <h1><span className="vtsub">Generate Music with Google's Lyria AI</span> ✨</h1>
                <div className='imageDiv'><img width="1400" src={chat}></img></div>
                <h1><span className="vtsub">Edit generated compositions</span> 🚀</h1>
                <p>(or the ones you already have!)</p>
                <div className='imageDiv'><img width="1400" src={workbench}></img></div>
                <h1><span className="vtsub">Adjust how different components sound</span> 🔊</h1>
                <div className='imageDiv'><img width="1400" src={mixer}></img></div>
            </div>
        </div>
        </>
    )
}

export default Capstone