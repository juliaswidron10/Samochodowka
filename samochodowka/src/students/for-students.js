import '../App.scss';
import Title from '../components/title';
import LuckyNumber from '../components/lucky-number';

function ForStudents() {
  return (
    <div className="for-students">
    <section className="top-section-homepage">
       <div className="hs-exam dark el"><a href="/wip" ><Title title="Your Highschool Exam"  underline="lightblue" text="white" />
       <div className='exam-links-container'>
       <div className="button-top-parts light"><h1>About HighSchool exam</h1></div>
       <div className="button-top-parts light"><h1>Student Books</h1></div>
       <div className="button-top-parts light"><h1>Online trainig resources</h1></div>
       </div>
       </a></div>
       <div className="prof-exam el light"><a href="/wip" ><Title title="Your Professional Exam"  underline="darkblue" text="white" />
       <div className='exam-links-container'>
       <div className="button-top-parts"><h1>Practical Training</h1></div>
       <div className="button-top-parts"><h1>About Professional exam</h1></div>
       <div className="button-top-parts"><h1>Driving Lessons</h1></div>
       </div>
       </a></div>
       <div className="advisor el dark"><a href="/wip"><Title title="Career Advisor" underline="lightblue" text="white" />
       <div className="button-top-part" ><h1>Career Advisor</h1></div>
       <img className="background-image" src={`${process.env.PUBLIC_URL}/assets/careeradvisor.png`} alt="photo of a woman in formal clothes smiling" /> 
       </a></div>
       <div className="timetable el light"><a href="/wip"><Title title="Timetables" underline="darkblue" text="white" />
       <div className="button-top-part" ><h1>Timetable</h1></div>
       <img className="background-image" src={`${process.env.PUBLIC_URL}/assets/timetables.png`} alt="photo of a spradsheet with schedules" /> 
       </a></div>
       <div className="euprojects el dark"><a href="/wip"><Title title="EU projects" underline="lightblue" text="white" />
       </a></div>
       <LuckyNumber className="el" />
      
   </section>
  </div>
  );
}

export default ForStudents;
