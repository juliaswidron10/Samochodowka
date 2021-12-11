import '../App.scss';
import React from 'react';
import { useState, useEffect } from "react";
import Aos from 'aos';
import Title from './title';

function News() {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
      useEffect(() => {
       fetch( "https://samochodowka-dd4f.restdb.io/rest/news" , {
          method: "GET",
          dataType: 'json',
          headers: {
            'cache-control': 'no-cache',
            'x-apikey': '61ad3d4572a03f5dae822144', 
      }
    })
    .then(response => response.json())
    .then(response => { 
        setNews(response);
        console.log(news)
    })
      }, []);

  return (
    <div className="news-container">
        <Title title="News" underline="lightblue" text="darkblue" />
        <section>
            { news.map(article => {
                return(
                    <a href={article.pathToArticle} key={article.title}>
                    <div className="article"  >
                        <img src={`${process.env.PUBLIC_URL}/assets/${article.pathToArticle}.png`} alt={article.altText} />
                        <h2>{article.title}</h2>
                        <p>{article.shortDescription}</p>
                    </div>
                    </a>
                )
            }) }
           
        </section>
    </div>
  );
}

export default News;