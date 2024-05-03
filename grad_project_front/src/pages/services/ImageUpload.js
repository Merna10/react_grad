//ImageUploader.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Import the ArrowBackIos icon
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Preview the selected image
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // Add the file to FormData

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
        <Link to="/" >
            <Button color="inherit" style={{ color: 'white' }}  startIcon={<ArrowBackIosIcon />}>
              Back
            </Button>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold',textAlign: 'center' }}>
            Agriculture Image Upload
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ marginTop: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#E1F5FE',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
          <label htmlFor="fileInput">
            <Button variant="contained" component="span" color="primary" startIcon={<CloudUploadIcon />}>
              Choose Image
            </Button>
          </label>
          {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />}
          {file && (
            <Button variant="contained" onClick={handleUpload} color="primary" sx={{ marginTop: '10px' }}>
              Upload Image
            </Button>
          )}
          {uploadProgress > 0 && <p style={{ marginTop: '10px' }}>Upload Progress: {uploadProgress}%</p>}
        </Box>
      </Container>
    </div>
  );
};

export default ImageUploadForm;