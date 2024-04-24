import React from "react";
import Deliveries from "./Deliveries.jsx";

const DeliveryList = () => {
    return ( 
        <div>
            <Deliveries ID="OrderID: 1" Place="Plaats: Rotterdam" Status="Status: In Werking"/>
            <Deliveries ID="OrderID: 2" Place="Plaats: Arnhem" Status="Status: Onderweg"/>
            <Deliveries ID="OrderID: 3" Place="Plaats: Pernis" Status="Status: Bezorgd!"/>
            <Deliveries ID="OrderID: 4" Place="Plaats: Antwerpen" Status="Status: Onderweg"/>
        </div>
    )
}

export default DeliveryList;
DeliveryList.jsx
