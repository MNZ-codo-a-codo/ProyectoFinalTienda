import React from 'react';
import Product from './Product';

const Home = () => {
    
    return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/img/home/image1.png" className="d-block w-100" alt="iphone"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/img/home/image2.png" className="d-block w-100" alt="iphone"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/img/home/image3.png" className="d-block w-100" alt="iphone"/>  
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previus</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Next </span>
                    </button>
                </div> 
                <Product/>
            </div>
    )

};
export default Home;