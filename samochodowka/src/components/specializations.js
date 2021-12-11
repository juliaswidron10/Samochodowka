import '../App.scss';
import Title from './title';
import { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

function Specializations() {
    const [specializations, setSpecializations] = useState([]);

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
        setSpecializations(response);
        console.log(specializations);
    })
      }, []);
  return (
    <div className="specializations">
        <div className="specializations-top-part" >
            <div className="texts">
                <Title title="Specializations" underline="lightblue" text="darkblue" />
                <p><strong>5-year car technical school:</strong><br/>
                    profession: motor vehicle technician (2 × 30 places)<br/><br />
                    <strong>5-year mechanical technical secondary school:</strong><br />
                    profession: mechanic technician (15 places)<br/>
                    profession: freight forwarder technician (15 places)<br/><br />
                    <strong>3-year First Degree Industry School:</strong><br />
                    profession: car mechanic (30 places)<br />
                    motor vehicle electromechanic (15 seats)<br />
                    car tinsmith (15 seats)</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/school-diagram.png`} alt="diagram of school specializations" />
        </div>
        <section className="specializations-container">
            { specializations.map(specialization => {
                return(
                    <div className="specialization" key={specialization.name} >
                        <a href={`/specializations/${specialization.image}`} >
                        <img src={`${process.env.PUBLIC_URL}/assets/specializations/${specialization.image}-small.png`} alt={specialization.altText} />
                        <h1>{specialization.name}</h1>
                        <p>{specialization.shortDescrition}</p>
                        </a>
                    </div>
                )
            }) }
        </section>
    </div>
  );
}

export default Specializations;
