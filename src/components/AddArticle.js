import  React, { Component } from 'react';
//import {Formik} from 'formik';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import FileUploader from "react-firebase-file-uploader";
import * as firebase from 'firebase';
//import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
//import NativeSelects from './NativeSelects'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const config ={
  apiKey: "AIzaSyBmJTvZSp7oCLIGAEif7voyDJxusSRQnAc",
  authDomain: "foundart-65610.firebaseapp.com",
  databaseURL: "https://foundart-65610.firebaseio.com",
  projectId: "foundart-65610",
  storageBucket: "foundart-65610.appspot.com",
  messagingSenderId: "314720972575",
  appId: "1:314720972575:web:34755830c6fa169a"
};
// Initialize Firebase
firebase.initializeApp(config);




class AddArticle extends Component {
constructor(){
  super()
  this.state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: "",
    title:"",
    description:"",
    category:"all",
    type:"all",
    image:"",
    state:"",
    
  };
  this.server = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
  })
  
}




onInputChange = event =>{
  const {name, value } = event.target;
  this.setState({[name]: value})
  console.log(name,':', value)
  /* const aux = this.state.avatarURL;
  this.setState({image: aux}) */
}

handleSubmit = event =>{
  event.preventDefault();
  const values = this.state
  console.log(values);
  this.server.post('/api/article', {values})
  

}


handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = async (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploading: false, });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => 
        this.setState({ image: url }),
        
        );

    };
   handleChange = name => event => {
     this.setState({
       [name]:event.target.value
     })
     console.log(this.state)
   }


render(){
  
  return (
    <div className="App">
     


         <form onSubmit={this.handleSubmit}>
        
        {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
        {this.state.image && <p>photo uploaded</p>}
        <TextField type='text' onChange={this.onInputChange} name='title' placeholder='title' />
        <TextField type='text' onChange={this.onInputChange} name='description' placeholder='description' />
        {/* <TextField type='text' onChange={this.onInputChange} name='type' placeholder='type'/> */}
        {/* <TextField type='text' onChange={this.onInputChange} name='category' placeholder='category'/> */}
        <TextField type='text' onChange={this.onInputChange} name='state' placeholder='state'/>
        <TextField type='number' onChange={this.onInputChange} name='price' placeholder='price'/> 
        <FormControl>
        <InputLabel htmlFor="category-native-simple">Category</InputLabel>
        <Select
          native
          value={this.state.category}
          onChange={this.onInputChange}
          inputProps={{
            name: 'category',
            id: 'category-native-simple',
          }}
        >
          <option name="category" value="all" />
          <option name="category" value="visual art">Visual Art</option>
          <option name="category" value="contemporany">Contemporany</option>
          <option name="category" value="abstract art">Abstract Art</option>
          <option name="category" value="fine art">Fine Art</option>
          <option name="category" value="sculpture">Sculpture</option>
          <option name="category" value="realism">Realism</option>
          <option name="category" value="graffiti art">Graffiti Art</option>
          <option name="category" value="music">Music</option>

        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="category-native-simple">Type</InputLabel>
        <Select
          native
          value={this.state.type}
          onChange={this.onInputChange}
          inputProps={{
            name: 'type',
            id: 'type-native-simple',
          }}
        >
          <option name="type" value="all" />
          <option name="type" value="painting">Painting</option>
          <option name="type" value="sculpture">Sculpture</option>
          <option name="type" value="photography">Photography</option>
          <option name="type" value="prop">Prop</option>
          <option name="type" value="live art">Live Art</option>
          <option name="type" value="drawing">Drawing</option>
          <option name="type" value="music">Music</option>

        </Select>
      </FormControl>
      <InputLabel htmlFor="category-native-simple">Upload Photo</InputLabel>
        <FileUploader
          
          accept="image/*"
          name="avatar"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          
        />
        <button 
        style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
        create article
        </button>
      </form>
    </div>
  );

}

}
export default AddArticle;

