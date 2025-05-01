import "./Testimonials.css";
import Heading from "../Heading/Heading";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import { useRef, useState } from "react";

//images
import backBtn from "../../assets/testimonials/back-icon.png";
import nextBtn from "../../assets/testimonials/next-icon.png";
import user_1 from '../../assets/testimonials/user-1.png';
import user_2 from '../../assets/testimonials/user-2.png';
import user_3 from '../../assets/testimonials/user-3.png';
import user_4 from '../../assets/testimonials/user-4.png';

let id = 0
let users = [
  {
    userId: id++,
    image: user_1, 
    name: 'Emily williams',
    info: 'edusity, USA',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure doloribus qui perspiciatis blanditiis. Commodi eligendi deserunt dolores in vel nemo!'
  },
  {
    userId: id++,
    image: user_2, 
    name: 'williams jackson',
    info: 'edusity, USA',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure doloribus qui perspiciatis blanditiis. Commodi eligendi deserunt dolores in vel nemo!'
  },
  {
    userId: id++,
    image: user_3, 
    name: 'Emily williams',
    info: 'edusity, USA',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure doloribus qui perspiciatis blanditiis. Commodi eligendi deserunt dolores in vel nemo!'
  },
  {
    userId: id++,
    image: user_4, 
    name: 'williams jackson',
    info: 'edusity, USA',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure doloribus qui perspiciatis blanditiis. Commodi eligendi deserunt dolores in vel nemo!'
  }
]
const Testimonials = () => {
  const [rightBtnDisabled, setRightBtnDisabled] =useState(false)
  const [leftBtnDisabled, setLeftBtnDisabled] =useState(true)
  const [translateX, setTranslateX] = useState(0)
  const sliding = useRef();
  

  function translateForward (){
    if(translateX <= -25 && translateX > -50){
      setTranslateX(translateX - 25)
      sliding.current.style.transform = `translateX(${translateX -25}%)`
      setRightBtnDisabled(true)
      setLeftBtnDisabled(false)
    } else if(translateX > -50){
      setTranslateX(translateX - 25)
      sliding.current.style.transform = `translateX(${translateX -25}%)`
      setRightBtnDisabled(false)
      setLeftBtnDisabled(false)
    }
  }
  
  function translateBack (){
    if(translateX >= -25 && translateX < 0){
      setTranslateX(translateX + 25)
      sliding.current.style.transform = `translateX(${translateX + 25}%)`
      setLeftBtnDisabled(true)
      setRightBtnDisabled(false)
    } else if(translateX < 0){
      setTranslateX(translateX + 25)
      sliding.current.style.transform = `translateX(${translateX  + 25}%)`
      setLeftBtnDisabled(false)
      setRightBtnDisabled(false)
    }
  }

  let mappedUsers = users.map((user)=>{
    return(
      <li key={user.userId}>
        <TestimonialCard image={user.image} name={user.name} info={user.info} details={user.details}/>
      </li>
    )
  })

  return (
    <section className="testimonials">
      <Heading subTitle={"testimonials"} title="what Students says" />
      <div className="content">
        <img src={backBtn} alt="back-arrow" className={leftBtnDisabled? "arrow-btn back disabled" : "arrow-btn back"}  onClick={translateBack} />
        <img src={nextBtn} alt="next-arrow" className={rightBtnDisabled ? "arrow-btn next disabled" : "arrow-btn next"} onClick={translateForward} />

        <div className="slider">
          <ul className="view" ref={sliding}>
            {/* <li>
              <TestimonialCard image={user_1} name={'Emily williams'} info={'edusity, USA'} details={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure doloribus qui perspiciatis blanditiis. Commodi eligendi deserunt dolores in vel nemo!'}/>
            </li> */}
            {mappedUsers}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
