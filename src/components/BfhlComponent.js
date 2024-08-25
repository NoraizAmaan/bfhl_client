// src/components/BfhlComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const BfhlComponent = () => {
  const [postData, setPostData] = useState('');
  const [postResponse, setPostResponse] = useState(null);
  const [getResponse, setGetResponse] = useState(null);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://your-deployed-app.herokuapp.com/bfhl', { data: JSON.parse(postData) });
      setPostResponse(response.data);
    } catch (error) {
      console.error('Error in POST request:', error);
    }
  };

  const handleGetRequest = async () => {
    try {
      const response = await axios.get('https://your-deployed-app.herokuapp.com/bfhl');
      setGetResponse(response.data);
    } catch (error) {
      console.error('Error in GET request:', error);
    }
  };

  return (
    <div>
      <h2>BFHL API Interaction</h2>
      <div>
        <textarea
          rows="5"
          cols="50"
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
          placeholder='Enter JSON data for POST request'
        />
        <button onClick={handlePostRequest}>Send POST Request</button>
      </div>
      {postResponse && <div><pre>{JSON.stringify(postResponse, null, 2)}</pre></div>}
      
      <div>
        <button onClick={handleGetRequest}>Send GET Request</button>
        {getResponse && <div><pre>{JSON.stringify(getResponse, null, 2)}</pre></div>}
      </div>
    </div>
  );
};

export default BfhlComponent;
