import  React, { Component } from 'react';
import {Formik} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




class AddArticle extends Component{
  state = {
    title:"",

  }
  handleChange = event =>{
    const {name, value } = event.target;
    this.setState({[name]: value})
    console.log(this.state)
  }
  render(){
    return(
      
      <div>
       <Formik
      initialValues={{ title: '', price: '', description:'', category:'',type:'' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values,{ setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        test(values)
        console.log('teste')
      }}
      handleChange={(event)=>{
        console.log(event)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
          variant="outlined"
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
        
          <TextField
          variant="outlined"
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            placeholder="description"
          />
          <TextField
          variant="outlined"
            type="text"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            placeholder="category"
          />
          <TextField
          variant="outlined"
            type="text"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
            placeholder="type"
          />
          <TextField
          variant="outlined"
            type="number"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            placeholder="price €"
          />
          {errors.password && touched.password && errors.password}
          <div>
            <Button variant="contained" color="primary" type="submit" onClick={(event)=> this.handleClick(event)}disabled={isSubmitting}>
              Create Article
            </Button>
          </div>
        </form>
      )}
    </Formik>
      </div>
    )
  }
}
export default AddArticle;

