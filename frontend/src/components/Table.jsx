import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const Table = ({ images, isLoading, setImages }) => {
  const [editText, setEditText] = useState({
    'body': ''
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/image/${id}/`);
      const newList = images.filter(image => image.id !== id);
      setImages(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8000/api/image/${id}/`, value);
      console.log(response.data);
      const newImages = images.map(image => image.id === id ? response.data : image);
      setImages(newImages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }));
  };

  const handleImageChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'upload': e.target.files[0],
    }));
  };

  const handleTextClick = async () => {
    try {
      const formData = new FormData();
      formData.append('body', editText.body || 'Default Text');
      handleEdit(editText.id, formData);
      setEditText({
        'body': '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageClick = async () => {
    try {
      const formData = new FormData();
      formData.append('body', editText.body || 'Default Text');
      if (editText.upload) {
        formData.append('upload', editText.upload);
      }
      handleEdit(editText.id, formData);
      setEditText({
        'body': '',
        'upload': null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, {
      'completed': !value
    });
  };

  return (
    <div>
      <table className='w-11/12 max-w-1xl'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Selled?</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Model Name</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Uploaded</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <div>Is Loading </div> :
            <> {images.map((imageItem, index) => (
              <tr key={imageItem.id} className='border-b border-black'>
                <td className='p-3'>
                  <span onClick={() => handleCheckbox(imageItem.id, imageItem.completed)}
                    className='inline-block cursor-pointer'>
                    {imageItem.completed === true ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                  </span>
                </td>
                <td className='p-3 text-sm ' title={imageItem.id}>{imageItem.body}</td>
                <td className='p-3 text-sm text-center'>
                  <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${imageItem.completed ? 'bg-green-300' : 'bg-red-300'}`}>
                    {imageItem.completed ? 'In Stock' : 'Selled'}
                  </span>
                </td>
                <td className='p-3 text-sm font-medium'>{new Date(imageItem.created).toLocaleString()}</td>
                <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5 '>
                  <span>
                    <label htmlFor="my-modal" ><MdEditNote onClick={() => setEditText({ ...imageItem, id: imageItem.id })} className=' text-xl cursor-pointer' /></label>
                  </span>
                  <span className=' text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={() => handleDelete(imageItem.id)} /></span>
                </td>
                <td className='Image text-xl cursor-pointer'>
                  {imageItem.upload && (
                    <img src={imageItem.upload} alt="Image" width="150" height="150" />
                  )}
                </td>
              </tr>
            ))}
            </>
          }
        </tbody>
      </table>

      {/* Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Image</h3>
          <div className="flex">
            <input
              type="text"
              value={editText.body}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full mt-8"
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary mr-2" onClick={() => document.getElementById('fileInput').click()}>
              Choose New Image
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="my-modal" onClick={handleTextClick} className="btn btn-primary mr-4">
              Save Text
            </label>
            <label htmlFor="my-modal" onClick={handleImageClick} className="btn btn-primary">
              Save Image
            </label>
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
