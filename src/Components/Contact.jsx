import React, { useState } from 'react'
import { FaArrowRight, FaEnvelopeOpen, FaPhoneVolume } from 'react-icons/fa6'
import "./Contact.css"
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
const Contact = () => {
  const [formState, setFormState]=useState("");
  const onSubmit=async (event)=>{
    event.preventDefault();
    setFormState("Sending...");
    const formData= new FormData(event.target);
    FormData.append("access_key", "3bf3b881-86d9-46fe-96e2-5b344557a24c");
    const obj=Object.fromEntries(formData);
    const json= JSON.stringify(object);
    try{
      const res=await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      header: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: json
    }).then((res)=>re.json());
    if(res.success){
      setFormState("Email sent successfully!");
      event.target.reset();
    }else{
      setFormState("Failed, an error occured!")
    }
    }catch(err){
      setFormState(`Failed, an error occured! ${err}`)
    }
  }
  return (
    <div className='contact'>
        <div className="contact-details">
            <h2>Send us a message <FaEnvelopeOpen style={{color: "goldenrod"}} /> </h2>
            <p>Fell free to reach out through contact form or find our contact information below. Your feedback, questioning and suggestions are important to us as we strive to provide eceptional service to our organization.</p>
            <ul>
              <li><a href="Mailto:afolabimubarak18@gmail.com"><FaEnvelope /> afolabimubarak18@gmail.com</a></li>
              <li><a href="tel:+2348106244890"><FaPhoneVolume/> +234 810 624 4890</a></li>
              <li><a href="/"><FaMapMarkerAlt />Golden Choice Str, Arigbajo, Ogun state, Nigeria</a></li>
            </ul>
        </div>
        <form className="form" onSubmit={onSubmit}>
            <label for="name">
              Your name:
              <input required type="text" id='name' placeholder='Enter your name' />
            </label>
            <label for="number">
              Phone number:
              <input required type="text" name='number' placeholder='Enter your mobile number' />
            </label>
            <label for="message">
                Write your message here
                <textarea required name="contact" id="message" placeholder='Write your message'></textarea>
            </label>
            <button type="submit">Submit now <FaArrowRight /></button>
            <span className="msg">{formState}</span>
        </form>
    </div>
  )
}

export default Contact