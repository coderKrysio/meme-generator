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

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: [value],
        }))
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={generateMeme}
                >
                    Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}