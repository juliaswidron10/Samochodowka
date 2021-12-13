import '../App.scss';
import Title from '../components/title';

function ForParents() {
  return (
    <div className="for-parents">
      <section className="top-section-homepage">
         <div className="idziennik light"><a href="https://adfs.eduportal.koszalin.pl" ><Title title="iDziennik"  underline="darkblue" text="white" />
         <div className="button-top-part" ><h1>iDziennik</h1></div>
         <img src={`${process.env.PUBLIC_URL}/assets/idziennik.png`} alt="photo od two adults looking at the computer" /> </a></div>
         <div className="parents-union light"><a href="/wip"><Title title="Parents Union" underline="darkblue" text="white" />
          <ul>
            <li>Budget</li>
            <li>Qualifications</li>
            <li>Donations</li>
          </ul>
         </a></div>
         <div className="school-housing light"><a href="/specializations"><Title title="School Housing" underline="darkblue" text="white" />
         <div className="button-top-part" ><h1>School Housing</h1></div>
         <img src={`${process.env.PUBLIC_URL}/assets/housing.png`} alt="photo of many shelves full of keys" /> 
         </a></div>
         <div className="contact contact-parents dark"><a href="/wip" ><Title title="Contact Us" underline="lightblue" text="white" />
            <div className="contact-container"> 
              <p>Zespół Szkół nr 10 im. Bolesława Chrobrego w Koszalinie</p>
              <strong>ul. Gnieźnieńska 8<br/>75-736 Koszalin<br />tel. 94 342 28 61<br />e-mail:<br/> sekretariat@samochodowka.koszalin.pl</strong>
              <img src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="icon of a carwhite" /> 
          </div></a></div>
     </section>
    </div>
  );
}

export default ForParents;
