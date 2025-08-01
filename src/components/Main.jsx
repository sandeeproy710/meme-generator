import {useState, useEffect} from "react";
import memeImg from "../assets/image.png"
export default function Main () {
    const [meme, setMeme] = useState({
        topText:"One does not simply",
    bottomText:"Walk into Mordor",        imageUrl: memeImg
    })

    const [allMemeImg, setAllMemeImg] = useState([])

    useEffect(() => {      
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemeImg(data.data.memes))
        //console.log(allMemeImg)
    }, [])
    console.log(allMemeImg)
    function hanndleChange(event) {
        const {value , name} = event.currentTarget
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    function getMeme() {
        console.log("clicked")
        const randomNum = Math.floor(Math.random() * allMemeImg.length)
        const newUrl = allMemeImg[randomNum].url
        console.log(newUrl)
        setMeme(prev => ({
            ...prev,imageUrl: newUrl
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

                <button onClick={getMeme}>Get a new meme image ✅</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="image"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )

} 