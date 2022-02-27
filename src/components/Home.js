import React from 'react'
import "./css/Home.css"

const Home = () => {
  return (
    <div>
        <main id="main">
        <section className="hero">
            <div className="hero-content">
                <img id="profil-picture" src={require("./css/images/MyPhotoBlackAndWhite1.JPG")} alt="En bild på Olivia Walter"/>
                <div className="overlapping info-squares">
                    <div className="info-square-title">
                        <h1>Välkommen</h1>
                        <p className="info-squares-content">Tack för att du har klickat in dig på min websida.
                            Jag hoppas att jag är den som du letar efter, och hoppas på att vi hörs framöver.
                            Mina kontaktuppgifter hittar du längst ner på denna sida eller under Kontakt.
                            Ha en bra dag.<br /><strong> Olivia Walter</strong>
                        </p>
                    </div>
                    <div className="info-square-title">
                        <h1>Kompetenser</h1>
                            <ul className="info-squares-content">
                                <li>Programering av C# .NET</li>
                                <li>Programmering av SQL databaser</li>
                                <li>Frontend programmering med HTML5 och CSS3</li>
                                <li>Grundläggande kunskaper i agila metoder</li>
                                <li>Flytande i tyska</li>
                            </ul>
                    </div>
                    <div className="info-square-personal info-square-title">
                        <h1>Personliga egenskaper</h1>
                        <ul className="info-squares-content">
                            <li>Noggrann</li>
                            <li>Diciplinerat</li>
                            <li>Snabblärd</li>
                            <li>Flexibel</li>
                            <li>Funkar bra i grupp eller enskild</li>
                            <li>Service-minded</li>
                            <li>Problemlösnings-orienterad</li>
                            <li>Positiv</li>
                            <li>Utvecklingssträvande</li>
                        </ul>
                    </div>
                </div>
                <img className="overlapping" id="nature-picture" src={require("./css/images/Naturbild.jpg")} alt="En landskapsbild"/>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Home