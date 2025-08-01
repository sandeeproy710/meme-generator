import {useState} from "react";
import memeImg from "../assets/image.png"
export default function Main () {
    const [meme, setMeme] = useState({
        topText:"One does not simply",
    bottomText:"Walk into Mordor",        imageUrl: memeImg
    })

    function hanndleChange(event) {
        const {value , name} = event.currentTarget
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="mainBody">
            <div className="form">
                <div className="innerText">
                <label className="labelText">Top Text 
                    <input className="inputLabel"
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    onChange={hanndleChange}
                    value={meme.topText}
                    />
                </label>

                <label className="labelText">Bottom Text 
                    <input className="inputLabel"
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                    onChange={hanndleChange}
                    value={meme.bottomText}
                    />
                </label>
                </div>

                <button>Get a new meme image ✅</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="image"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )

} 