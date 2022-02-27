import React from 'react'
import "./css/OmMig.css";

const OmMig = () => {
  return (
    <div id='main'>
      <section className='hero'>
        <aside className='pictures-left overlapping'>
            <img id="ZeldaEllieBerg" class="overlapping" src={require("./css/images/ZeldaEllieBerg.JPG")} alt="katt och hund på ett berg"/>
            <img id="JagGolf" class="overlapping" src={require("./css/images/JagGolf.jpg")} alt="Spelar golf"/>
            <img id="Garden" class="overlapping" src={require("./css/images/Garden.jpg")} alt="en odling"/>
        </aside>
        <article className="aboutme-text">
            <h1>Lite om mig</h1>
            <p>Jag är en tjej på 24 år som alltid har haft intresse för data men aldrig vågat mig själv på programmering, 
                runt julen 2020 bestämde jag mig att ta tag i min dröm och lärde mig då grunderna till HTML5, CSS och C#. 
                Våren 2020 tentade jag av kursen programmering 1 och sökte till min nuvarande utbildning.  
                Jag sitter gärna med programmering utanför skoltiden och skriver mindre program. Jag har även ett stort intresse för datorspel, och jobbar inom Unity med att programmera egna spel.
                När Jag inte sitter vid datorn brukar jag spendera mycket tid med min sambo och våra två husdjur, där vi vandrar i fjällen, spenderar tid på hundgården eller testar på nya spännande aktiviteter.
                Även Golf, trädgårdsarbete och matlagning har jag stort intresse för. 
                Jag är född och uppvuxen i Tyskland men flyttade med min familj till Sverige 2006.  </p>
        </article>
        <aside className="pictures-right overlapping">
            <img id="MeAndZelda" class="overlapping" src={require("./css/images/MeAndZelda.JPG")} alt="Tjej med katt"/>
            <img id="JagOEllie" class="overlapping" src={require("./css/images/JagOEllie.JPG")} alt="Tjej med hund"/>
            <img id="EllieBerg" class="overlapping" src={require("./css/images/EllieBerg.JPG")}/>
        </aside>
      </section>
   </div>
  )
}

export default OmMig