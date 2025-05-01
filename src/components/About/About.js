import './About.css';
import poster from '../../assets/About/about.png'
import playIcon from '../../assets/About/play-icon.png'
const About = ({setPlayVideo}) => {

  function playVideo(){
    setPlayVideo(true)
  }


  return (
    <section className='about'>

      <div className="about-left">
        <img src={poster} alt="video poster" />
        <img src={playIcon} alt="play-icon" onClick={playVideo}/>
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci enim obcaecati rerum ad dolorem blanditiis cum corporis quidem, non, delectus sed illo consequuntur laboriosam, veritatis unde reiciendis quaerat ratione molestias quod commodi ut dolor! Enim, impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci enim obcaecati rerum ad dolorem blanditiis cum corporis quidem, non, delectus sed illo consequuntur laboriosam, veritatis unde reiciendis quaerat ratione molestias quod commodi ut dolor! Enim, impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci enim obcaecati rerum ad dolorem blanditiis cum corporis quidem, non, delectus sed illo consequuntur laboriosam, veritatis unde reiciendis quaerat ratione molestias quod commodi ut dolor! Enim, impedit.</p>
      </div>

    </section>
  );
}

export default About;
