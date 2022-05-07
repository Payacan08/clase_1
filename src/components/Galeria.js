import React from 'react';
import img2 from './img/img_2.jpeg';
import img3 from './img/img_3.jpeg';
import img4 from './img/img_4.jpeg';
import img5 from './img/img_5.jpeg';
import img6 from './img/img_6.jpeg';

const Galeria = () => {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl justify-center">
        <div className="carousel carousel-center max-h-[40rem] max-w-[80%] rounded-box">
            <div className="carousel-item justify-center">
                <img src={img2} className="rounded-box m-0" />
            </div>
            <div className="carousel-item justify-center">
                <img src={img3} className="rounded-box m-0" />
            </div>
            <div className="carousel-item justify-center">
                <img src={img4} className="rounded-box m-0" />
            </div>
            <div className="carousel-item justify-center">
                <img src={img5} className="rounded-box m-0" />
            </div>
            <div className="carousel-item justify-center">
                <img src={img6} className="rounded-box m-0" />
            </div>
        </div>
    </div>
  )
}

export default Galeria