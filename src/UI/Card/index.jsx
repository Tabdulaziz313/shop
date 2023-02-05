import React from 'react';
import "./style.scss";

const index = ({ count, handel, state }) => {
   return (
      <>
         <div className="row  gap-2  justify-content-center">
            {count.length > 0 ? count.map((el) => {
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
            }) :
               state.map((el) => {
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
               })



            }

         </div>

      </>
   );
};

export default index;