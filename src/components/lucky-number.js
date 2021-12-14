import '../App.scss';
import React from 'react';
import Title from './title';
import { useEffect } from "react";
import Aos from 'aos';

function LuckyNumber() {
    // const [luckyNumber, setluckyNumber] = useState(0);
    
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
    //   useEffect(() => {
    //    fetch( "https://samochodowka-dd4f.restdb.io/rest/luckynumber" , {
    //       method: "GET",
    //       dataType: 'json',
    //       headers: {
    //         'cache-control': 'no-cache',
    //         'x-apikey': '61ad3d4572a03f5dae822144', 
    //   }
    // })
    // .then(response => response.json())
    // .then(response => { 
    //     // setluckyNumber(response);
    //     // console.log(luckyNumber)
    // })
    //   }, []);
  return (
    <div className="lucky-number-container">
        <div>
        <Title title="Lucky Number" underline="darkblue" text="white" />
        <p>January 6th</p>
        </div>
        <h2>26</h2>
    </div>
  );
}

export default LuckyNumber;