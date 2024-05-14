  import './App.css'
  import Header from '../components/header';
  import Layout from '../components/Layout';

  function App() {


    return (
      <>
      <div className='header'>
    <Header />
  </div>
  <h1>Delivery Tracking</h1>
  <div className='layout'>
    <Layout>

  </Layout>
  </div>
      </>
    )
  }

  export default App