import { useState } from 'react';
import axios from "axios";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username === '' || formData.useremail === '' || formData.userpassword === '') {
      alert('All fields are Required');
      return false;
    }

    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://user-service-backend:8000/add-user', formData, {
      headers: headers
    }).then((response) => {
      alert('User data added Successfully');
      setFormData({
        username: "",
        useremail: "",
        userpassword: "",
      });
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      <div>
        <h1>React App</h1>
        <h2>Sign Up Form</h2>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          Name: <input type='text' name="username" value={formData.username} onChange={handleChange} />
          <br /> <br />
          Email: <input type='text' name="useremail" value={formData.useremail} onChange={handleChange} />
          <br /> <br />
          Password: <input type='password' name="userpassword" value={formData.userpassword} onChange={handleChange} />
          <br /> <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <p className="read-the-docs">
        ---------------------
      </p>
    </>
  )
}

export default App
