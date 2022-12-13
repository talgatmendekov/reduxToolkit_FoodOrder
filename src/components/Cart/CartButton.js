import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCardHandler = () => {
    dispatch(uiSliceActions.toggle())
  }


  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
