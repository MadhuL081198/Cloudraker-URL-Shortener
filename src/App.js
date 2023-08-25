import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ShortenForm from './components/ShortenForm';
import ShortLinksTable from './components/ShortLinksTable';


const App = () => {
  const [shortLinks, setShortLinks] = useState([]);

  const fetchShortenedURL = async (originalUrl) => {
      try{
        const response = await axios(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`);
        const shortUrl = response.data.result.full_short_link;
        console.log('Shortened URL', shortUrl)
        setShortLinks([...shortLinks,{originalUrl,shortUrl}]);
      }catch (e){
        console.log(e);
      }
    }

  const handleShorten = (originalUrl) => {
    console.log("URL Shortened")
    console.log("OURL Received:",originalUrl)
    fetchShortenedURL(originalUrl)
  };



  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Header />
      <ShortenForm onShorten={handleShorten} />
      <ShortLinksTable shortLinks={shortLinks} />
    </div>
  );
};

export default App;
