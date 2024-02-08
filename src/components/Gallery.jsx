import React, { useEffect, useState } from 'react';
import img1 from "./../assets/Loki.jpg"
import img2 from "./../assets/dr strange.jpg"
import img3 from "./../assets/Thanos.png"
import img4 from "./../assets/Hulk2.png"
import img5 from "./../assets/client.jpg"
import img6 from "./../assets/Scarlet witch.png"
import img7 from "./../assets/iron man.jpg"
import img8 from "./../assets/spider man.png"
import img9 from "./../assets/bucky.jpg"
import img10 from "./../assets/antman.jpg"

const Gallery = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(response => response.json())
            .then(data => setToys(data))
    }, [])
    //      <div className='w-[90%] m-auto'>
    //     <h3 className='text-lg italic mt-10 mb-2'>-Our Action Figure</h3>
    //     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img1} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Dr Strange</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img2} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img3} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img4} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img5} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>


    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img6} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Dr Strange</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img7} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img8} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img9} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //         <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
    //             <figure><img src={img10} alt="Shoes" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">Shoes!</h2>
    //                 {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary">Buy Now</button>
    //             </div> */}
    //             </div>
    //         </div>
    //     </div>
    // </div>

    return (
        <div>
            <div className='w-[90%] m-auto'>
                <h3 className='text-lg italic mt-10 mb-2'>-Our Action Figures</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                    {toys.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default Gallery;

function Card({ toy }) {
    return (
        <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
            <figure><img src={toy.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
            </div>
        </div>
    )
}