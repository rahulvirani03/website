import React, { useState } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { MDBCard } from 'mdbreact';
import {TextField,Radio,FormControlLabel,FormLabel,RadioGroup,FormControl} from '@material-ui/core';
import './form.css'
import ShowButton from './ShowButton'

import ProgressBar from './ProgressBar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const UploadForm = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
      margin:'40px'
    },
  }));


   let name1,inputtext,file1,inputtype,type,inputprice;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const types = ['image/png', 'image/jpeg'];
  const classes = useStyles();
  
    const UploadText=(e)=>
    {
        inputtext=e.target.value;
        if(inputtext)
        {
          name1=inputtext;
        }
    }
    const UploadType=(e)=>
    {
      inputtype=e.target.value;
      if(inputtype)
      {
        type=inputtype
        console.log(type);
      }
    }
    const UploadPrice=(e)=>
    {
      inputprice=e.target.value;
      if(inputprice)
      {
        console.log(inputprice);
      }
    }
  
  const UploadData=(e)=>
  {
    
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      file1=selected;
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
    const settype=type;
   console.log(settype);
    let storageRef,collectionRef
    storageRef = projectStorage.ref(file1.name);
    if(settype==='Tshirt')
    {
      collectionRef = projectFirestore.collection('Tshirt');
    }
    else if(settype==='Shirt')
    { 
      collectionRef = projectFirestore.collection('Shirt');
    }
    else if(settype==='Trousers')
    {
      collectionRef = projectFirestore.collection('Trousers');
    }
    else if(settype==='Sparkle')
    {
      collectionRef = projectFirestore.collection('Sparkle');
    }
    storageRef.put(file1).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
     
      const setname1=name1;
      const setprice=inputprice;
      
      console.log(setname1)
      await collectionRef.add({setname1,setprice,settype,url})
      setUrl(url);
    });
    if (url) {
      setFile(null);
    }
   
    
  };

  
  
  return (

    <MDBCard className="center2">
    <form >
      <div>
       
        <h3 className="title">Enter the Product Details:</h3>
      </div>
      <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="Title"
      label="Title"
      name="Title"
      autoComplete='off'
      autoFocus
      onChange={UploadText}
  />
  <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="Price"
      label="Price"
      name="Price"
      autoComplete='off'
      onChange={UploadPrice}
  />
  <br></br>
 
  <br></br>
  <FormControl component="fieldset">
  <FormLabel component="legend">Product Type</FormLabel>
  <RadioGroup aria-label="Product Type" name="type"  onChange={UploadType}>
    <FormControlLabel value="Shirt" control={<Radio />} label="Shirt" />
    <FormControlLabel value="Tshirt" control={<Radio />} label="Tshirt" />
    <FormControlLabel value="Trouser" control={<Radio />} label="Trouser" />
    <FormControlLabel value="Sparkle" control={<Radio />} label="Sparkle" />
  </RadioGroup>
  </FormControl>
  <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={UploadData}
      />
      <label htmlFor="contained-button-file" className="btnstyle">
        <Button variant="contained" color="primary" component="span" >
          Upload
        </Button>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <ProgressBar file={file} setFile={setFile}  progress={progress} setProgress={setProgress}/> }
          {
            progress===100 ? <ShowButton /> :null
          }
         
      </div>
        
    </form>
    </MDBCard >
  );
}

export default UploadForm;