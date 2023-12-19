import React, { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const [user, setUser] = useState({
    fullName: "",
    age:"",
  })

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = axios.post(`${process.env.REACT_APP_SERVER}/api/detail/create`, user, {
        headers:{
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZGU0MjY4NDBlMTIxMmZiN2I3Y2JhIn0sImlhdCI6MTcwMjc0OTIyM30.8Hasu5bj1TW79oB50-IiL5_WCk2s4r8NPBh6cMhGcqw"
        }
      })
      toast('Detail added successfully', { type: 'success' })
      navigate('/')
    } catch (error) {
      toast('Some Error Occured',{type:"error"})
    }
  }

  return <div className="main">
    <div className="con-name">
      <label htmlFor="fullName">Name </label>
      <input type="text" name="fullName" value={user.fullName} onChange={handleChange}/>
    </div>
    <div className="con-age">
      <label htmlFor="age">Age </label>
      <input type="text" name="age" value={user.age} onChange={handleChange}/>
    </div>
    <div className="sub-btn" style={{margin:"5px",padding:"5px",backgroundColor:"blue",width:"fit-content",color:"white", cursor:"pointer"}} onClick={handleSubmit}>
      Submit
    </div>
  </div>;
};

export default Form;
