import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ShortenForm from './components/ShortenForm';
import ShortLinksTable from './components/ShortLinksTable';


const App = () => {
  const [shortLinks, setShortLinks] = useState([]);

  const fetchShortenedURL = async (originalUrl) => {
      try{
        const fetchUrl = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
        const response = await axios(fetchUrl);
        const shortUrl = response.data.result.full_short_link;
        setShortLinks([...shortLinks,{originalUrl,shortUrl}]);
      }catch (e){
        console.log(e);
      }
    }

  const handleShorten = (originalUrl) => {
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
