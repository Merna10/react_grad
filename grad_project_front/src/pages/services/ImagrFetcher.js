import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchImageUrls = async () => {
    try {
      const response = await axios.get('http://localhost:5000/images');
      console.log('Image URLs:', response.data); // Log the fetched image URLs
      setImageUrls(response.data);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchImageUrls, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependencies array ensures useEffect runs only once on component mount

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            <Link to="/upload">
              <Button color="inherit">Upload</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="" style={{ width: '200px', height: '200px', margin: '10px' }} />
        ))}
      </div>
    </>
  );
};
export default ImageGallery;