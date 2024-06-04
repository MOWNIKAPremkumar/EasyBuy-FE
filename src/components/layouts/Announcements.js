import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

function Announcements() {
    const [textColors, setTextColors] = useState([]);

    useEffect(() => {
        const generateRandomDarkColor = () => {
            const r = Math.floor(Math.random() * 128); // Red channel (0-127)
            const g = Math.floor(Math.random() * 128); // Green channel (0-127)
            const b = Math.floor(Math.random() * 128); // Blue channel (0-127)
            return `rgb(${r},${g},${b})`;
        };
        const colors = Array.from({ length: 5 }, generateRandomDarkColor);
        setTextColors(colors);
    }, []); 

    return (
        <div className='announcements'>
            <style>{`
                @keyframes blinking {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
            <Marquee>
                <div className='announcement-text text-1'>
                    <span style={{ color: textColors[0], textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', animation: 'blinking 5s infinite' }}>Hello all...Welcome to EasyBuy😊</span>
                </div>
                <div className='announcement-text text-2'>
                    <span style={{ color: textColors[1], textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', animation: 'blinking 5s infinite' }}>All India Shipping is Possible🚛</span>
                </div>
                <div className='announcement-text text-3'>
                    <span style={{ color: textColors[2], textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', animation: 'blinking 5s infinite' }}>100% Assurance on Goods Delivery👍🏻</span>
                </div>
                <div className='announcement-text text-4'>
                    <span style={{ color: textColors[3], textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', animation: 'blinking 5s infinite' }}>Special Discounts for All The Buyers!🤗</span>
                </div>
                <div className='announcement-text text-5'>
                    <span style={{ color: textColors[4], textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)', animation: 'blinking 5s infinite' }}>Follow up with Event Attendees 🫱🏻‍🫲🏻</span>
                </div>
            </Marquee>
        </div>
    );
}

export default Announcements;