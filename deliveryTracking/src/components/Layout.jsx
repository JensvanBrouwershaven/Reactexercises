import './App.css';
import Delivery from './components/Delivery.jsx';
import DeliveryList from './components/deliveryList.jsx';
import Header from './components/header.jsx'; 
import Layout from './components/layout.jsx'; 

function App() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='layout'>
        <h1>Delivery Tracking</h1>
        <Layout>
          <div className='deliveries'>
            <DeliveryList />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default App;
app.jsx