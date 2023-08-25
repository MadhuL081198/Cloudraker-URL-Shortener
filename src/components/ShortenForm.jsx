import React, { useState } from 'react';

const ShortenForm = ({ onShorten }) => {
  const [originalUrl, setOriginalUrl] = useState('');

  //Function to handle onSubmit event of the form
  const handleShorten = () => {
    onShorten(originalUrl);
    setOriginalUrl('');
  };

  //Function to update the user given long URL
  const updateOriginalURL = (e) => {
    setOriginalUrl(e.target.value);
  }

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Enter URL to shorten"
        value={originalUrl}
        onChange={updateOriginalURL}
        className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
      />
      <button
        onClick={handleShorten}
        className="bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
      >
        Shorten
      </button>
    </div>
  );
};

export default ShortenForm;
