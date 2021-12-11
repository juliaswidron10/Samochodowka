import '../App.scss';
import Title from '../components/title';
import News from '../components/news';
import LuckyNumber from '../components/lucky-number';
import { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";


function Home() {
    const [calendar, setCalendar] = useState([]);
    const [selectedMonth, setMonth] = useState('Jan');

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
      useEffect(() => {
       fetch( "https://samochodowka-dd4f.restdb.io/rest/calendar" , {
          method: "GET",
          dataType: 'json',
          headers: {
            'cache-control': 'no-cache',
            'x-apikey': '61ad3d4572a03f5dae822144', 
      }
    })
    .then(response => response.json())
    .then(response => { 
        setCalendar(response);
    })
      }, []);

  return (
    <div className="home-container">
    
     <section className="top-section-homepage">
         <div className="covid-info dark"><a href="/wip"><Title title="Covid-19 Updates" underline="lightblue" text="white" /></a></div>
         <div className="specializarions light"><a href="/specializations"><Title title="Specializations" underline="darkblue" text="white" /></a></div>
         <div className="apply dark"><a href="/https://portal.eduportal.koszalin.pl/jst/koszalin/CMS/nabor-k.aspx" ><Title title="Apply Now" underline="lightblue" text="white" /></a></div>
         <div className="students light"><a href="/students" ><Title title="For Students" underline="darkblue" text="white" /></a></div>
         <div className="idziennik dark"><a href="https://adfs.eduportal.koszalin.pl" ><Title title="iDziennik" underline="lightblue" text="white" /></a></div>
     </section>

     <section className="top-section-homepage-tablet">
         <div className="tablet-top-section">
            <div className="covid-info dark"><a href="/wip">
                <Title title="Covid-19 Updates" underline="lightblue" text="white" />
                <p>News and updates about current Covid restritctions at our school</p></a></div>
            <div className="specializarions light"><a href="/specializations">
                <Title title="Specializations" underline="darkblue" text="white" />
                <p>Learn about Samochodówka’s best programms</p></a></div>
            <div className="students light"><a href="/students" >
                <Title title="For Students" underline="darkblue" text="white" />
                <ul>
                    <li>Timetables</li>
                    <li>Highschool exam</li>
                    <li>Professional exam</li>
                    <li>Career advisor EU projects</li>
                </ul></a></div>
            <div className="idziennik dark"><a href="https://adfs.eduportal.koszalin.pl" ><Title title="iDziennik" underline="lightblue" text="white" /></a></div>
         </div>
         <div className="apply dark"><a href="https://portal.eduportal.koszalin.pl/jst/koszalin/CMS/nabor-k.aspx" >
            <h1>Apply Now</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/apply-now.png`} alt="photography of a girl smiling and holding books" /></a></div>
     </section>

     <section className="top-section-homepage-desktop">
         <div className="desktop-top-section">
             <div class="covid-and-specializations">
                <div className="covid-info dark"><a href="/wip">
                    <Title title="Covid-19 Updates" underline="lightblue" text="white" />
                    <p>News and updates about current Covid restritctions at our school</p>
                    </a></div>
                <div className="specializarions light"><a href="/specializations">
                    <Title class="button" title="Specializations" underline="darkblue" text="white" />
                    <p>Learn about Samochodówka’s best programms</p>
                    <img src={`${process.env.PUBLIC_URL}/assets/car-specializations.png`} alt="white syluete of a car" />
                    </a></div>
            </div>
            <div className="apply dark"><a href="https://portal.eduportal.koszalin.pl/jst/koszalin/CMS/nabor-k.aspx" >
            <h1>Apply Now</h1></a>
            <img src={`${process.env.PUBLIC_URL}/assets/apply-now.png`} /></div>

            <div className="students light"><a href="/students" >
                <Title title="For Students" underline="darkblue" text="white" />
                <ul>
                    <li>Timetables</li>
                    <li>Highschool exam</li>
                    <li>Professional exam</li>
                    <li>Career advisor EU projects</li>
                </ul>
                <img src={`${process.env.PUBLIC_URL}/assets/car-students.png`} />
                    </a></div>
            <div className="idziennik dark">
                <a href="https://adfs.eduportal.koszalin.pl" ><Title class="button" title="iDziennik" underline="lightblue" text="white" />
                </a>
                <img src={`${process.env.PUBLIC_URL}/assets/idziennik.png`} alt="photography of two parents using a computer" />
                </div>
         </div>
         
     </section>

    <div className="calendar-lucky-number" >
     <section className="calendar-home">
         <Title title="Calendar" underline="lightblue" text="darkblue" />
         <ul className="calendar-months" >
             <li onClick={() => {setMonth('Jan')}} className={selectedMonth === 'Jan' ? 'selected' : ''}>Jan</li>
             <li onClick={() => {setMonth('Feb')}} className={selectedMonth === 'Feb' ? 'selected' : ''}>Feb</li>
             <li onClick={() => {setMonth('Mar')}} className={selectedMonth === 'Mar' ? 'selected' : ''}>Mar</li>
             <li onClick={() => {setMonth('Apr')}} className={selectedMonth === 'Apr' ? 'selected' : ''}>Apr</li>
             <li onClick={() => {setMonth('May')}} className={selectedMonth === 'May' ? 'selected' : ''}>May</li>
         </ul>
         <ul className="calendar-events">
            {calendar.map((date) =>{
                if(date.month === selectedMonth){
                    return (
                        <li key={date.eventtitle} >
                           <div>
                                <h3>{date.date}</h3>
                                <p>{date.month}</p></div>
                           <h2>{date.eventtitle}</h2>
                           <p>{date.eventdescription}</p>
                        </li>
                    )
                }
            })}
         </ul>
     </section>
     <LuckyNumber />
     </div>
     <News />

    </div>
  );
}

export default Home;
