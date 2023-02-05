import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCER,removeItem, incrementQuantity, decrementQuantity } from '../../redux/count';

const index = () => {

    const dates = useSelector(state => state.count.count);
    const distpetch = useDispatch();

    const handel = (product) => {
        distpetch(removeItem(product));
     }


    console.log(dates);
    return (
        <div>
            {dates?.map((el, id) => {
                return (
                    <div className="row">
                        <div className="box d-flex">
                            <div className="cart-img">
                                <img src={el.image} alt={el.title} className='cart-img' />
                            </div>
                            <div className="cart-body m-2 ">
                                <span className='d-flex justify-content-between'><h5>{el.title}</h5> <h5>{el.price}</h5> </span>

                                <span className='d-flex align-items-center'>
                                    <button className='p-2' onClick={() => useDispatch(incrementQuantity) }>+</button>
                                    <h5 className='p-2'>{el.quantity}</h5>
                                    <button className='p-2' onClick={() => useDispatch(decrementQuantity) }>-</button>
                                </span>
                                <h5>{el.price + el.quantity}</h5>
                                <button onClick={() => handel(removeItem)} >Clear</button>
                            </div>
                        </div>
                    </div>
                )
            })}




        </div>
    );
};

export default index;