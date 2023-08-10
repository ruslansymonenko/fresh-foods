import { useSelector } from 'react-redux';

import ActionButton from '../../components/ActionButton/ActionButton';

import './HomePageOrder.scss';

import shopingBasketImage from '../../assets/icons/shopping-basket_icon.svg';

const HomePageOrder = () => {
  const orderAmount = useSelector((state) => state.order.orderAmount);

  const confirmOrder = () => {
    console.log('confirm');
  };

  return (
    <div className="home-order">
      <h2 className="home-order__amount">
        <span className="home-order__amount-text">Total order:</span>
        <span 
          className="home-order__amount-price"
        >
          {orderAmount ? orderAmount : '0'} $
        </span>
      </h2>
      <ActionButton
        text={'Buy now'}
        image={shopingBasketImage}
        action={confirmOrder}
      />
    </div>
  );
};

export default HomePageOrder;