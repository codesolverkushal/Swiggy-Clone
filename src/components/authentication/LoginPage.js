import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          const alertMessage = JSON.stringify(values, null, 2);

      

          alert(alertMessage);
          // Use navigate function to go to "/"
          navigate('/');
        }}
      >
        <Form className="form">
          <div className="fieldGroup">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <Field name="name" type="text" className="input" />
          </div>

          <div className="fieldGroup">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <Field name="email" type="email" className="input" />
          </div>

          <button type="submit" className="submitButton">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
