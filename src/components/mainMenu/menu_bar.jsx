import React from 'react';
import './menu_bar.css';

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menu-header'>Menu</h1>
            <div className='line'></div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className='menu-list'>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        College Credit Classes
                    </a>
                </li>
                <li className='menu-list'>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Post Secondary Education
                    </a>
                </li>

                <li className='menu-list'>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Internships
                    </a>
                </li>

                <li className='menu-list'>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Housing
                    </a>
                </li>

                <li className='menu-list'>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Tuition & Aid
                    </a>
                </li>

                <div className='line'></div>

                <li style={{ marginBottom: '10px', marginTop: '10px' }}>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Team
                    </a>
                </li>

                <div className='line'></div>

                <li style={{ marginBottom: '10px', marginTop: '10px' }}>
                    <a href={'https://bobatalks.com/'} className='menu-item'>
                        Help
                    </a>
                </li>

                <div className='line'></div>
            </ul>
        </div>
    );
}

export default Menu;
