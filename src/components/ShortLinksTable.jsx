import React from 'react';

const ShortLinksTable = ({ shortLinks }) => {
  console.log('Rendering Table')
  console.log(shortLinks);
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Shortened URLs</h2>
      <table className="mt-2 w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-blue-500">Original URL</th>
            <th className="px-4 py-2 text-blue-500">Short URL</th>
          </tr>
        </thead>
        <tbody>
          {shortLinks.map((link, index) => (
            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : ''}>
              <td className="px-4 py-2">{link.originalUrl}</td>
              <td className="px-4 py-2">
                <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">
                  {link.shortUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortLinksTable;
