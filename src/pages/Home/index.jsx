import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCER } from '../../redux/count';
import Card from '../../UI/Card';
import "./style.scss";


const index = () => {
   const [state, setState] = useState([]);
   const [count, setCount] = useState([...state]);



   const dates = useSelector(state => state.count.count);
   const ditpatch = useDispatch();


   const handel = (product) => {
      ditpatch(INCER(product));
   }

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setState(data));
   }, []);

   // const menuItems = [...new Set(count.map((el) => el.category))];


   const date = (set) => {
      const count = [...state];
      const newItem = count.filter(el => el.category === set);
      setCount(newItem)
   }

   return (
      <div className='mt-5'>
         <div className="row d-flex flex-column">
            <button className="btn" onClick={() => { setCount(state) }}>Hammasi</button>
            <button className="btn" onClick={() => { date(`men's clothing`) }}   >Erkaklar kiymi</button>
            <button className="btn" onClick={() => { date(`women's clothing`) }} >Ayollar kiymi</button>
            <button className="btn" onClick={() => { date(`jewelery`) }}>Taqinchoqlar</button>
            <button className="btn" onClick={() => { date(`electronics`) }}>Elektronika</button>
         </div>

         <Card count={count} handel={handel} state={state} />

         {/* <div className="row  gap-2  justify-content-center"> */}
         {/* <h1>salom {dates}</h1> */}
         {/* <button className="btn btn-primary" onClick={ditpatch(INCER)}>{el.price}</button> */}

         {/* {count?.map((el) => {
               return (
                  <div key={el.id} className="col-12 col-md-3 card " style={{ maxWidth: '18rem' }} >
                     <div className="card-img mt-2">
                        <img src={el.image} alt="img" className=' car-img' />
                     </div>
                     <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{el.title}</h5>
                        <p></p>
                        <button className="btn btn-primary" onClick={() => handel(el)}>{el.price}</button>
                     </div>
                  </div>
               )
            })} */}
         {/* </div> */}

         {/* <div className="row">
            {dates.map((el) => {

            }


               return (
                  <div key={el.title} className="col-12 col-md-3 card " style={{ maxWidth: '18rem' }} >
                     <div className="card-img mt-2">
                        <img src={el.image} alt="img" className=' car-img' />
                     </div>
                     <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{el.title}</h5>
                        <p></p>
                        <button className="btn btn-primary" onClick={() => ditpatch(INCER(el))}>{el.price}</button>
                     </div>
                  </div>
               )

            })}
         </div> */}
      </div>
   );
};

export default index; 