import React from 'react';
import '../App.css'; // Import the CSS file

const Header = () => {
    return (
        <div className="header1"> {/* className instead of class */}
            <ul className="headerlist"> {/* className instead of class */}
                <li><p>Home</p></li>
                <li><p>Mail</p></li>
                <li><p>Deliveries</p></li>
                <div className='settingsicon'>
                <li><p>Settings</p></li>
                </div>
            </ul>
        </div>
    );
}

export default Header;