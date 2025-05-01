import  './Heading.css';

const Heading = ({subTitle, title}) => {
  return (
    <div className="heading">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Heading;
