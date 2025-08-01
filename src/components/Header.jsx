import meme from '../assets/image copy.png'
export default function Header () {
    return (
        <>
        <section>
            <div className="headerContainer">
            <img src={meme} alt="" />
            <h2>Meme Generator</h2>

            </div>
        </section>
        </>
    )
}