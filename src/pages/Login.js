import React, { Component } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { withRouter } from 'react-router-dom';
// import { loginSchema } from '../lib/validationSchemas';
import { withAuth } from '../lib/AuthProvider';


class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (values) => {
    const { history } = this.props;
    const { login } = this.props;
    await login(values);
    await history.push('/')
  }

  render() {
    // const { username, password } = this.state;
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        // validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          this.handleSubmit(values);
        }}
        render={({ values }) => (
          <Form>
            <label>Username</label>
            <Field
              type="text"
              name="username"
              placeholder="username"
            />
            <ErrorMessage name="username" />
            <label>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="password"
            />
            <ErrorMessage name="password" />
            <button type="submit">Go</button>
          </Form>
        )}
      />
    );
  }
}

export default withRouter(withAuth(Login));