import './Hero.css';
import darkArrow from '../../assets/Hero/dark-arrow.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="overlay">
        <div className="content container">
          <h1>we ensure better education for a better world</h1>
          <p>our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel the dynamic field of eduction</p>
          <button className='btn'>
            Explore more
            <img src={darkArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
