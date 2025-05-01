import './Programs.css';
import programOne from '../../assets/programs/program-1.png'
import programOneIcon from '../../assets/programs/program-icon-1.png'
import programTwo from '../../assets/programs/program-2.png'
import programTwoIcon from '../../assets/programs/program-icon-2.png'
import programThree from '../../assets/programs/program-3.png'
import programThreeIcon from '../../assets/programs/program-icon-3.png'

//component
import Heading from '../Heading/Heading';
const Programs = () => {
  return (
    <section className='programs'>
        {/* heading */}
        <Heading subTitle='our programs' title='What We Offer'/>

        <div className="content">

          <div className="program">
            <img src={programOne} alt="program_1" />
            <div className="caption">
              <img src={programOneIcon} alt="program_icon" />
              <p>Graduation Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={programTwo} alt="program_2" />
            <div className="caption">
              <img src={programTwoIcon} alt="program_icon" />
              <p>Masters Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={programThree} alt="program_3" />
            <div className="caption">
              <img src={programThreeIcon} alt="program_icon" />
              <p>Post Graduation</p>
            </div>
          </div>

        </div>
    </section>
  );
}

export default Programs;
