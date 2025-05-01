import Heading from '../Heading/Heading';
import './Campus.css';
//images
import btnArrow from '../../assets/campus/white-arrow.png'
import gallery_1 from '../../assets/campus/gallery-1.png'
import gallery_2 from '../../assets/campus/gallery-2.png'
import gallery_3 from '../../assets/campus/gallery-3.png'
import gallery_4 from '../../assets/campus/gallery-4.png'

const Campus = () => {
  return (
    <section className='campus' id='campus'>
      <Heading subTitle={'gallery'} title={'campus photos'}/>

      <div className="content">
        <div className="images">
          <div className='img-container'>
            <img src={gallery_1} alt="campus-photo" />
          </div>
          <div className='img-container'>
            <img src={gallery_2} alt="campus-photo" />
          </div>
          <div className='img-container'>
            <img src={gallery_3} alt="campus-photo" />
          </div>
          <div className='img-container'>
            <img src={gallery_4} alt="campus-photo" />
          </div>
        </div>
        <button className="btn dark-btn">
          See more here
          <img src={btnArrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
}

export default Campus;
