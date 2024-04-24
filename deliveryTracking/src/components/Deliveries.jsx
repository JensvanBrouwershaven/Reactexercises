const Deliveries = ({ ID, Place, Status }) => {
    return (
        <div>
            <h1>{ID}</h1>
            <h2>{Place}</h2>
            <h2>{Status}</h2>
        </div>
    );
};

export default Deliveries;