import './ActionButton.scss';

const ActionButton = ({text, image, action}) => {
  return (
    <button 
      className="action-button"
      onClick={action}
    > 
      <div className="action-button__img-container">
        <img className="action-button__img" src={image} alt={text} />
      </div>
      <span className="action-button__text">
        {text}
      </span>
    </button>
  );
};

export default ActionButton;