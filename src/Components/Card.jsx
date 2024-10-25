
const Card = ({ title, text, children }) => {
 
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default Card;