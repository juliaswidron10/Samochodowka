import '../App.scss';

function Footer() {
  return (
    <div className="footer">
    <div className="links-container">
     <ul>
         <li><a href="/parents"><strong>For Parents</strong></a></li>
         <li className="hidden" ><a href="/wip">Parents Union</a></li>
         <li className="hidden" ><a href="https://adfs.eduportal.koszalin.pl">iDziennik</a></li>
         <li className="hidden" ><a href="/wip">Contact</a></li>
     </ul>
     <ul>
         <li><a href="/parents"><strong>About</strong></a></li>
         <li className="hidden" ><a href="/wip">School board</a></li>
         <li className="hidden" ><a href="/wip">School documents</a></li>
         <li className="hidden" ><a href="/wip">School nurse</a></li>
         <li className="hidden" ><a href="/wip">Library</a></li>
         <li className="hidden" ><a href="http://ptsm.koszalin.pl/en/school-youth-hostel/">School youth hostel</a></li>
         <li className="hidden" ><a href="/wip">Photos</a></li>
     </ul>
     <ul>
         <li><a href="/parents"><strong>For Students</strong></a></li>
         <li className="hidden" ><a href="/wip">Career advisor</a></li>
         <li className="hidden" ><a href="/wip">Teacher Substitutions</a></li>
         <li className="hidden" ><a href="/wip">Timetables</a></li>
         <li className="hidden" ><a href="/wip">EU projects</a></li>
         <li className="hidden" ><a href="/wip">High School exam</a></li>
         <li className="hidden" ><a href="/wip">Professional exam</a></li>
     </ul>
     <ul>
         <li><a href="/parents"><strong>Recruitation</strong></a></li>
         <li className="hidden" ><a href="/wip">School housing</a></li>
         <li className="hidden" ><a href="/wip">Recruitation</a></li>
         <li className="hidden" ><a href="/wip">Specializations</a></li>
     </ul>
     </div>
     <div className="logo-footer">
        <img src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="icon of a carwhite" /> 
        <p>ZS No.10 Koszalin</p>
        <h4>Samochodowka</h4>
     </div>
     <div className="contact-footer">
         <h4>Zespół Szkół nr 10 im. Bolesława Chrobrego w Koszalinie<br /> <br />
         ul. Gnieźnieńska 8<br />
         75-736 Koszalin<br />
         tel. 94 342 28 61</h4>
     </div>
    </div>
  );
}

export default Footer;
