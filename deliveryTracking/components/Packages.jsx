import React from 'react';
import "../src/App"

const Package = ({ sentFrom, orderId, status }) => {
    return (
        <div className="PackageParent">
        <div className="package">
                <h2>{sentFrom}</h2>
                <p>{orderId}</p>
                <p>{status}</p>
                </div>
        </div>
    );
}

export default Package;