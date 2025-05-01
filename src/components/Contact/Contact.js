import Heading from '../Heading/Heading';
import './Contact.css';

//images
import msgIcon from '../../assets/contact/msg-icon.png'
import mailIcon from '../../assets/contact/mail-icon.png'
import phoneIcon from '../../assets/contact/phone-icon.png'
import locationIcon from '../../assets/contact/location-icon.png'
import arrowIcon from '../../assets/campus/white-arrow.png'
import { useState } from 'react';

const Contact = () => {

  const [sendingResult, setSendingResult] = useState(null)
  let color = '#676767'

  if(sendingResult === 'Form Submitted Successfully'){
    color = '#0c750cc9'
  }else if(sendingResult === 'Sending...'){
      color = '#676767'
  }else{
    color = '#ff0000e6'
  }

  async function onSubmit(event){
    event.preventDefault()
    console.log(event.target)
    setSendingResult('Sending...')
    const formData = new FormData(event.target);
    

    formData.append("access_key", "011dffc7-f043-4419-b28e-da175a80652e");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    
    if (data.success) {
      setSendingResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>{
        setSendingResult(null)
      }, 10000)
    } else {
      console.log("Error", data);
      setSendingResult(data.message);
      setTimeout(()=>{
        setSendingResult(null)
      }, 10000)
    }

  }

  return (
    <section className='contact'>
      <Heading subTitle={'contact us'} title={'get in touch'}/>
      <div className="content">

        <div className="contact-left">
          <div className="head">
            <h3>Send us a message <img src={msgIcon} alt="icon" /></h3>
          </div>

          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          
          <ul className='contact-info'>
            <li>
              <img src={mailIcon} alt="icon" />
              <span>ahmed2003ghareb@gmail.com</span>
            </li>
            <li>
              <img src={phoneIcon} alt="icon" />
              <span>+201286266142</span>
            </li>
            <li>
              <img src={locationIcon} alt="icon" />
              <span>alexandria, Egypt</span>
            </li>
          </ul>
        </div>
        
        <div className="contact-right">
          <form action="" className="form" onSubmit={onSubmit}>
            
              <label htmlFor="nameInput">Your name</label>
              <input type="text" name="name" id="nameInput" placeholder='Enter your name' required autoComplete='username'/>
            
            
              <label htmlFor="phoneInput">Phone Number</label>
              <input type="tel" name="number" id="phoneInput"  placeholder='Enter your mobile number' required/>

              <label htmlFor="messageInput">Write your message here</label>
              <textarea name="message" id="messageInput" rows={6} placeholder='Enter your message' required></textarea>

              <button type='submit' className="btn dark-btn">
                Submit now
                <img src={arrowIcon} alt="arrowIcon" />
              </button>
          </form>
          <span style={{color: color}}>{sendingResult}</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;
