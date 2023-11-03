import React, { useState } from 'react';

const ImageUpload = () => {
  const [imageData, setImageData] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Data = reader.result;
      localStorage.setItem('uploadedImage', base64Data);
      setImageData(base64Data);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageData && <img src={imageData} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;