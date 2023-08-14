import './FoodCategory.scss';

const FoodCategory = ({text, width}) => {
  return (
    <div 
      className="food-category"
      style={{
        width: `${width}%`
      }}
    >
      {text}
    </div>
  );
};

export default FoodCategory;