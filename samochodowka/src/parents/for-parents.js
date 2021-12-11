import '../App.scss';
import Title from '../components/title';

function ForParents() {
  return (
    <div className="ForParents">
      <section className="top-section-homepage">
         <div className="idziennik dark"><a href="https://adfs.eduportal.koszalin.pl" ><Title title="iDziennik" underline="lightblue" text="white" /></a></div>
         <div className="covid-info dark"><a href="/wip"><Title title="Parents Union" underline="lightblue" text="white" /></a></div>
         <div className="specializarions light"><a href="/specializations"><Title title="School Housing" underline="darkblue" text="white" /></a></div>
         <div className="apply dark"><a href="/https://portal.eduportal.koszalin.pl/jst/koszalin/CMS/nabor-k.aspx" ><Title title="Apply Now" underline="lightblue" text="white" />
            <div> 
              <p>Zespół Szkół nr 10 im. Bolesława Chrobrego w Koszalinie</p>
              <strong>ul. Gnieźnieńska 8<br/>75-736 Koszalin<br />tel. 94 342 28 61<br />e-mail: sekretariat@samochodowka.koszalin.pl</strong>
              <img src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="icon of a carwhite" /> 
          </div></a></div>
     </section>
    </div>
  );
}

export default ForParents;
