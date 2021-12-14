import '../App.scss';
import Title from './title';
import { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

function Specialization() {
    const [specialization, setSpecialization] = useState([]);
    const [specializations, setSpecializations] = useState([])
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
      useEffect(() => {
       fetch( "https://samochodowka-dd4f.restdb.io/rest/specializations" , {
          method: "GET",
          dataType: 'json',
          headers: {
            'cache-control': 'no-cache',
            'x-apikey': '61ad3d4572a03f5dae822144', 
      }
    })
    .then(response => response.json())
    .then(response => {
        setSpecializations(response)
        response.map( e => {
            if(e.name === 'Mechanical technician'){
                const list = e.theoreticalSubjects.split('-');
                e.theoreticalSubjects = list;
                const list2 = e.practicalItems.split('-');
                e.practicalItems = list2;
            }
            setSpecialization(e);
        })
    })
      }, []);
    // const makeList = (string) => {
    //     const list = string.split(' - ');
    //     return (
    //         <ul>
    //             {list.forEach(e =>{
    //                 <li>e</li>
    //             })}
    //         </ul>
    //     )
    // };
  return (
    <div>
    <div className="specialization">
        <div className="main-title" ><Title title={specialization.name} underline="lightblue" text="darkblue" /></div>
        <img src={`${process.env.PUBLIC_URL}/assets/specializations/${specialization.image}.png`} alt={specialization.altText} />
        <div className="specialization-descriptions">
        <div className="side-title" ><Title title={specialization.name} underline="lightblue" text="darkblue" /></div>
        <h2>Qualifications:</h2>
        <p>{specialization.qualifications}</p>
        <h2>Professional practice:</h2>
        <p>{specialization.professionalPracticeDates}<br />{specialization.professionalPracticeDescription}</p>
        <h2>Professional exams:</h2>
        <p>{specialization.professionalExams}</p>
        <h2>General knowledge</h2>
        <p>{specialization.generalKnowledge}</p>
        <h2>Professional knowledge</h2>
        <p class="no-padding" >Theoretical subjects:<br />{specialization.theoreticalSubjects}</p>
        <p>Practical subjects:<br />{specialization.practicalItems}</p>
        </div>
    </div>
   <section className="more-specializations">
   <Title title='More Specializations' underline="lightblue" text="darkblue" />
   <div className="more-specializations-container">
   { specializations.map(e =>{
     return(
       <a href={`./specializations/${e.image}`} ><h3>{e.name}</h3></a>
     )
   })}
   </div>
 </section>
 </div>
  );
}

export default Specialization;
