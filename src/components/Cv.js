import React from 'react'
import "./css/Cv.css";

export const Cv = () => {

  return (
    <div id='main'>
          <article className="Cv-content">
            <section className="smaller-sideinformation">
                <h4 className="name">Olivia<br />Walter</h4>
                <img id="picture-of-me" src={require("./css/images/CvPhoto.JPG")} alt="En bild på en tjej"/>
                <section className="PersonUppgifter">
                    <h4 className="PersonUppgifter-title">PERSONUPPGIFTER</h4>
                    <p className="PersonUppgifter-innehåll">
                    <strong>E-mail:</strong> Olivia.Walter.28@gmail.com <br/>
                    <strong>Telefon:</strong> 072 150 53 53<br/>
                    <strong>Ålder:</strong> 24<br/>
                    <strong>Tyska:</strong>1:a Modersmål<br/>
                    <strong>Svenska:</strong> 2:a Modersmål<br/>
                    <strong>Engelska:</strong> flytande</p>

                </section>
                <section className="Stipendier">
                    <h4 className="Stipendier-title">STIPENDIER</h4>
                    <p className="Stipendier-innehåll">
                        Helge Ax:son Johnsons stiftelse Stipendie 2019<br/>
                        <br/>Torsten Näsmans Musikstipendiet 2019<br/>
                        <br/>Sveriges kungahus Prins Carl Gustafs stiftelses stipendiet 2016<br/>
                        <br/>Kramforskulturskolans musikstipendiet 2012<br/>
                        <br/>Goethe instituts språktävling (tema dikt) första plats 2012<br/>
                    </p>
                </section>
                <section className="kort-om-mig">
                    <h4 className="kort-om-mig-title">KORT OM MIG</h4>
                    <p className="kort-om-mig-innehåll">
                        Jag är en glad tjej som alltid försöker
                        göra sitt bästa i uppgifter och för
                        människor, för mig finns det inget
                        bättre än att försöka få folk i min
                        omgivning att känna sig glada och
                        trygga.
                        Jag är uppvuxen I Tyskland och
                        flyttade med min familj till Sverige
                        2006.
                        På min fritid brukar jag utöva mycket
                        trädgårdsarbete, vara ute i naturen
                        och programmera.
                    </p>
                </section>
            </section>
            <section className="bigger-mainInformation">
                <section id="sammanfattning">
                    <h1 className="sammanfattning-title">SAMMANFATTNING</h1>
                    <p id="sammanfattning-innehåll">Jag är en glad, målinriktad och energisk tjej som suktar efter nya kunskaper och erfarenheter. Grupparbete och kommunikation är några av mina starka sidor och jag ser gärna ett jobb där jag kan dra nytta av det och utvecklas vidare. Som person upplevs jag som väldig noggrann med mina uppgifter, lättlärd och mån om att skapa en glad och positiv stämning bland mina medmänniskor.</p>
                </section>
                <section>
                    <h1 className="arbetslivserfarenhet-title">ARBETSLIVSERFARENHET</h1>

                    <h2 id="bolagsverket-title">BOLAGSVERKET (ÅRSREDOVISNINGSHANDLÄGGARE)<br /><span >Mars 2021-September 2021</span></h2>
                    <p id="bolagsverket-innehåll">Uppgifter som årsredovisningshandläggare bestod främst av att granska årsredovisningar av AB men även telefonkundtjänst där jag fick besvara alla möjliga frågor om årsredovisningar.</p>

                    <h2 id="lidl-title">LIDL (ASSISTERANDE SÄLJLEDARE)<br/> <span>Jun-Okt 2017 / Juli-Aug 2018 / Juni 2019-Nov 2020</span> </h2>
                    <p id="lidl-innehåll">På Lidl fick jag jobba med alla olika sorters uppgifter: kundbemötande, kassör, Bake off, färskhet, renlighet, frukt och grönt samt lagerarbete. Jag stängde även butiken som butiksansvarig samt att jag är van med att utföra butikens beställningar och vara huvudansvarig för butikens kassaskåp. Att ha jobbat på Lidl har höjt min stresstolerans och utvecklat mitt kundbemötande ännu mer, samt har gett mig mycket kassavana.</p>

                    <h2 id="privat-pianolärare-title">PRIVAT PIANOLÄRARE FÖR VUXEN <br/> <span>2016-2018</span></h2>
                    <p id="privat-pianolärare-innehåll">Jag har studerat piano i 10 år och började ta elever hösten 2016. Jobbet med mina elever har lärt mig mycket om pedagogik, tålamod och hur man strukturerar upp och planera in lektioner samt att ta på sig en ledarroll.</p>

                </section>
                <section className="utbildningar">
                    <h1 className="utbildningar-title">UTBILDNINGAR</h1>

                    <h2 id="edugrade-systemutvecklare-title">EDUGRADE SYSTEMUTVECKLARE C# .NET MED KOMPETENS I AI<br/> <span>2021-2023</span></h2>
                    <p id="edugrade-systemutvecklare-innehåll">"för närvarande förverkligar jag min dröm och studerar till systemutvecklare, vilket är otroligt spännande och har lärt mig mycket. Kurserna:
                    </p>
                    <ul id="kurs-lista">
                        <li>Programmering med C# och .NET</li>
                        <li>Programmering av databaser & SQL</li>
                        <li>Projektledning & Agila metoder</li>
                        <li>Webbutv. frontend med HTML5 + CSS + Javascript</li>
                        <li>Webbapplikationer i C#, ASP.NET</li>
                        <li>Designmönster & arkitektur</li>
                        <li>AI-komponenter och M.L i MS Azure</li>
                        <li>DevOps</li>
                        <li>LIA (lärande i arbete)</li>
                    </ul>
                    <h2 id="kapellsberg-title">HÄRNÖSANDS FOLKHÖGSKOLAN MUSIKLINJEN KAPELLSBERG<br/> <span>2016-2019</span></h2>
                    <p id="kapellsberg-innehåll">Musiklinjen består till stor del av eget ansvar. Man får lära sig att jobba individuell samt strukturera ett eget schema och fördela sin tid på bästa sätt. Jag var med i styrelsen 2016–2017 för Kapellsbergs musiklinje där jag var viceordförande. Styrelsen agerar också som kamratförbund och värnar mycket om stämningen på skolan.</p>

                    <h2 id="härnösands-gymnasium-title">HÄRNÖSANDS GYMNASIUM ESTET<br/> <span>2013-2016</span></h2>
                    <p id="härnösands-gymnasium-innehåll">På estet lär man sig mycket om kommunikation och grupparbete. Mina gymnasieår utvecklade mig som människa och estet-utbildningen har hjälpt mig till att kunna kommunicera lätt och utan problem med utomstående människor.</p>

                    <h2 id="hsandGymUF-title">UF<br /> <span>2014</span></h2>
                    <p id="hsandGymUF-innehåll">I utbildningen ingår även en kurs kallad UF där man tillsammans med sin klass och kompisar skapar ett eget ungdomsföretag. Vi gjorde ett företag med hela klassen där jag var marknadsföringsansvarig.</p>
                </section>
            </section>
        </article>
    </div>
  )
}
export default Cv;