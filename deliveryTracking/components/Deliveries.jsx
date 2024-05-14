import React from 'react';
import Package from './Packages'; 

const Deliveries = ({ Packages }) => {
    return (
        <div className="Deliveries">
            {Package.map((Packages, index) => (
                <Package
                    key={index}
                    sentFrom={Packages.sentFrom}
                    orderId={Packages.orderId}
                    status={Packages.status}
                />
            ))}
        </div>
    );
}

export default Deliveries;