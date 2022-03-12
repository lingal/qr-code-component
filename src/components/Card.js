import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={require('../images/image-qr-code.png')} alt="" />
      </div>
      <div className="card-text">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
