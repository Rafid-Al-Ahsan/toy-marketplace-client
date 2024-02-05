import React from 'react';
import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg"
import img3 from "./../assets/3.jpg"
import img4 from "./../assets/4.jpg"

const Carousel = () => {
    const design = <>
         <div className="absolute flex items-center h-full left-0 bg-gradient-to-r from-[#115d8d] to-[rgba(21,21,21,0)]">
                        <div className='text-[#fff] space-y-7 pl-20 w-1/2'>
                            <h2 className='text-5xl font-bold'>Well to our SeaValley Toy MarketPlace</h2>
                            <p className='text-2xl'>Here you will find the most exclusive and rare collection of your favourite action hero figures </p>
                        </div>
                    </div>
    </>
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    {design}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    {design}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    {design}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    {design}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;