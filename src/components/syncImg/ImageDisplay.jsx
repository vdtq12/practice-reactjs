import React, { useEffect, useState } from 'react';

const ImageDisplay = () => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'uploadedImage') {
        setImageData(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const storedImageData = localStorage.getItem('uploadedImage');
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  return <img src={imageData} alt="Uploaded" />;
};

export default ImageDisplay;