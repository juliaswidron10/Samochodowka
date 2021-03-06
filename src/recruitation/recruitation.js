import '../App.scss';
import PhotoSlides from '../components/photo-slides';
import Title from '../components/title';
import Specializations from '../components/specializations';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

 
function Recruitation() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div className="Recruitation">
      <div className="top-part">
        <div data-aos="fade-right" className="top-part-texts">
          <Title title="Why to pick Samochodowka?" underline="lightblue" text="darkblue" />
          <p>There’s many reasons why Samochodówka might be the perfect school for you! We offer many attractive programs that will prepare you to start working in very needed professions. We support ours students professional and personal development by keeping our school friendly and staffed with excelent teachers. </p>
          <p>We offer free B category driving training for selected professions. We support our students by providing practice with the best partners in region and internationally.</p>
          <div className="links">
            <div className="secondary-link" >
              <a href="/wip">
                <h2>Recruitation rules</h2>
            </a></div>
            <div className="primary-link" >
              <a href="https://portal.eduportal.koszalin.pl/jst/koszalin/CMS/nabor-k.aspx">
                <h2>Apply now</h2>
            </a></div>
          </div>
        </div>
        <div className="slide-container" data-aos="fade-left">
            <PhotoSlides />
        </div>
     </div>
     <section className="school-props">
       <div data-aos-anchor="#trigger-illustration" data-aos="fade-up" >
         <img src={`${process.env.PUBLIC_URL}/assets/car.svg`} alt="illustration of a car" />
         <h3>At school workshops</h3>
       </div>
       <div data-aos-anchor="#trigger-illustration" data-aos="fade-up">
         <img src={`${process.env.PUBLIC_URL}/assets/teacher.svg`} alt="illustration of a teacher writing on a whiteboard" />
         <h3>Dedicated teaching staff</h3>
       </div>
       <div data-aos-anchor="#trigger-illustration" data-aos="fade-up" >
         <img src={`${process.env.PUBLIC_URL}/assets/adventure.svg`} alt="illustration of a teacher writing on a whiteboard" />
         <h3>Attractive practice opportunities</h3>
       </div>
     </section>
     <section data-aos-anchor="#trigger-sponsors" data-aos="fade-up" className="our-partners" id="trigger-illustration">
      <Title title="Our partners" underline="lightblue" text="darkblue"/>
      <img src={`${process.env.PUBLIC_URL}/assets/partners.png`} alt="compilation of logos of schools partenrs Toyota, Mojsiuk and more" />
     </section>
     <div id="trigger-sponsors" ></div>
     <Specializations/>
    </div>
  );
}

export default Recruitation;
