import './DataInput.scss';

const DataInput = ({
    type, 
    placeholderText, 
    status,
    value,
    onValueChange,
  }) => {
  
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
  };

  return (
    <input 
      className={`data-input ${status}`}
      type={type} 
      placeholder={placeholderText}
      value={value}
      onChange={handleInputChange}
    />
  );
};

DataInput.defaultProps = {
  type: 'text',
  placeholderText: '',
  status: '',
  value: '',
};

export default DataInput;