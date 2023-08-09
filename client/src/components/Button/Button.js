import './Button.scss';

const Button = ({text, type, action, classes, children}) => {
  const handleClick = (event) => {
    event.preventDefault();
    action(event);
  };

  return (
    <button 
      className={`button ${classes}`}
      type={type}
      onClick={handleClick}
      >
      {children || text}
    </button>
  );
};

Button.defaultProps = {
  text: '',
  type: 'button',
  action: function (event) {console.log(event)},
  classes: '',
};


export default Button;