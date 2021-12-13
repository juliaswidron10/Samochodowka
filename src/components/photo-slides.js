import '../App.scss';
import React from 'react';
import { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

function PhotoSlides() {
    let firstPhoto = {
        name: 'Mechanical Technician',
        image: 'mechanical-technician',
        altText: 'e.altText'
    };
    const [slides, setSlides] = useState([])
    const [selectedPhoto, setSelectedPhoto] = useState(firstPhoto)
    
    // let num = 4;
    // const changeImage = () => {
    //     num++;
    //     if(num < slides.length){
    //         let selected = slides[num]
    //         setSelectedPhoto(selected);
    //     }else{
    //         num = 1;
    //     }
    // }
    // setInterval(changeImage, 3000);


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
        let list = []
        response.map( e => {
            let object = {
                name: e.name,
                image: e.image,
                altText: e.altText
            }
            list.push(object);
        })
        setSlides(list);
        console.log(slides);
    })
      }, []);

   

    

  return (
    <div className="photo-slides">
        <div className="photo-container">
            <div className="switch-container" >
                { slides.map(e => {
                    return(
                    <div key={e.image} className={e.image === selectedPhoto.image ? 'selected-button' : 'button'} onClick={() => {setSelectedPhoto(e)}} ></div>)
                })}
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/specializations/${selectedPhoto.image}.png`} alt={selectedPhoto.altText}  />
        </div>
        <div className="photo-title-container">
            <a href="/specialization">
                <h3>{selectedPhoto.name}</h3>
            </a>
        </div>
    </div>
  );
}

export default PhotoSlides;
