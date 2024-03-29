// TodoForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ImageForm = ({ setImages, fetchData }) => {
  const [newImage, setNewImage] = useState({
    'body': '',
    'upload': null,
  });

  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    setNewImage((prev) => ({
      ...prev,
      'body': e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setNewImage((prev) => ({
      ...prev,
      'upload': e.target.files[0],
    }));
  };

  const postImage = async () => {
    try {
      // Check if either the input field or image is missing and set the warning state
      if (!newImage.body && !newImage.upload) {
        setShowWarning(true);
        setWarningText('Please enter a name and choose an image before adding a todo.');
        return;
      }

      // Check if the input field is empty and set the warning state
      if (!newImage.body) {
        setShowWarning(true);
        setWarningText('Please enter a name before adding a todo.');
        return;
      }

      // Check if no image is chosen and set the warning state
      if (!newImage.upload) {
        setShowWarning(true);
        setWarningText('Please choose an image before adding a todo.');
        return;
      }

      const formData = new FormData();
      formData.append('body', newImage.body);
      formData.append('upload', newImage.upload);

      await axios.post('http://127.0.0.1:8000/api/image/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setNewImage({
        'body': '',
        'upload': null,
      });

      setShowWarning(false); // Reset warning state
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div style={{ height: showWarning ? '80px' : '0', overflow: 'hidden', transition: 'height 0.8s ease' }}>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 w-11/12 max-w-1xl">
          <p className="font-bold">Warning:</p>
          <p>{warningText}</p>
        </div>
      </div>

      {/* Input, choose image, and button */}
      <div className="mt-8 flex items-center w-11/12 max-w-1xl">
        <label className="block text-blue-500 font-bold ml-2">
          <span className="text-sm">Choose Image</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
        <input
          type="text"
          placeholder="Name Image"
          value={newImage.body}
          className="input input-bordered input-info w-1/5 ml-2 placeholder-blue-500"
          onChange={handleChange}
        />
        {newImage.upload && (
          <span className="text-sm text-blue-500 ml-2">{newImage.upload.name}</span>
        )}
        <button onClick={postImage} className="btn btn-primary ml-2">
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageForm;
