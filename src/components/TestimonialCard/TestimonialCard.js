import './TestimonialCard.css';

// import user_1 from '../../assets/testimonials/user-1.png';

const TestimonialCard = ({image,name, info, details}) => {
  return (
    <div className="card">
    <div className="card-header">
      <img src={image} alt="user" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </div>
    <div className="card-body">
      <p>{details}</p>
    </div>
  </div>
  );
}

export default TestimonialCard;
