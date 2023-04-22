export default function Meme() {
    function generateMeme() {
        // const memeArray = memeData.data.meme
        // const randomNumber = Math.floor(Math.random * memeArray.length)
        // const url = memeArray[randomNumber].url
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
        </main>
    )
}