import React, { useEffect, useState } from 'react';
import "./DrawingApp.css"
const DrawingApp = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('../../aaaa/index.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data));

      const script = document.createElement('script');
  script.src = '../../aaaa/script.js'; // Path to your JS file
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
  }, []);

  
  return (
    <div className='drawApp' dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default DrawingApp;
