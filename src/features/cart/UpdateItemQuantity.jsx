import React from 'react';
import Button from './../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice';

const UpdateItemQuantity = ({id,currentQuantity}) => {
  const dispatch = useDispatch();
  return (
    <div className='md:gap-3" flex items-center gap-2'>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
