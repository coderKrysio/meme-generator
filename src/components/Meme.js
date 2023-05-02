import { useState } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemesImages, setAllMemeImages] = useState();

    function generateMeme() {
        // const memeArray = memeData.data.meme
        // const randomNumber = Math.floor(Math.random * memeArray.length)
        // const url = memeArray[randomImage].url
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: url,
        // }))
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={generateMeme}
                >
                    Get a new meme image
                </button>
            </div>

            <img src={meme.randomImage} className="meme--image" alt="meme" />
        </main>
    )
}