import React, { Fragment, useState } from 'react';
import Message from './Message';

import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onSubmit = async e => {
  
    e.preventDefault();
    await axios.post('/upload', {image_ref:filename})
    
    const encodedParams = new URLSearchParams();
    encodedParams.append("url", "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg");
    
    const options = {
      method: 'POST',
      url: 'https://fashion4.p.rapidapi.com/v1/results',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '3f91e0c171msh17a15dd5db2be1ap1eaa82jsn54acce34b22e',
        'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
      },
      data: encodedParams
    };
    
    console.log(encodedParams);
    
    const response = await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    console.log(response);
    // const formData = new FormData();
    // formData.append('file', file);

    // try {
    //   const res = await axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     onUploadProgress: progressEvent => {
    //       setUploadPercentage(
    //         parseInt(
    //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         )
    //       );
    //     }
    //   });
      
    //   // Clear percentage
    //   setTimeout(() => setUploadPercentage(0), 10000);

    //   const { fileName, filePath } = res.data;

    //   setUploadedFile({ fileName, filePath });

    //   setMessage('File Uploaded');
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage('There was a problem with the server');
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    //   setUploadPercentage(0)
    // }
  };

  //implementation for getting tags:
 
//Use async/await for axios
//It should be inside onSubmit

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={(e) => {
              setFilename(e.target.files[0].name);
            }}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
