import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate("/about");
    }
    const goBack = ()=> {
        navigate(-1);
    }

  return (
    <div>
        <h3> ContactUs </h3>
        <button onClick={navigateHandler}> go AboutPage</button>
        <button onClick={goBack}> Go to previous page</button>
    </div>
  )
}

export default ContactUs