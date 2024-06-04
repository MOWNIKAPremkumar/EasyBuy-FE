import React from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';

export default function MyCarousel() {
    return (
            <BootstrapCarousel>
                
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousels/Apple-iPhone-15-lineup-color-lineup-230912.jpeg' alt="First slide" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>New Latest Launches in Mobiles&Accessories</h3>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousels/best-laptop-medium.jpg' alt="Second slide"  style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>High End Brand Models Accessible</h3>
                    </BootstrapCarousel.Caption>
                    
                    <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/products/image.jpg' alt="Third slide"  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Upgrade your Living</h3>
                       
                    </BootstrapCarousel.Caption>

                </BootstrapCarousel.Item>

                    <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='images/products/61IYfIs7m9L._SL1500_.jpg' alt="Fourth slide"  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3> Cinematic Experience</h3>
                       </BootstrapCarousel.Caption>
                     </BootstrapCarousel.Item>

                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousels/smart-watches-for-women-1605809538.jpg' alt="Fifth slide"  style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Unbox Limitless Potential</h3>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                    <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousels/210127143254-earbuds-vs-headphones.jpg' alt="Fifth slide"  style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Upgrade your Living </h3>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
    );
}