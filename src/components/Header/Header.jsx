import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 '>
            <h2 className='text-4xl'>KNOWLEDGE CAFE</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;