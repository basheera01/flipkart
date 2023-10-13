import logo from './logo.svg';
import './App.css';
import './css/boot.css';
import Top from './components/Top';
import Easynav from './components/Easynav';
import Ban from './components/Ban';
import Products from './components/Products';
import Form from './components/Form'
function App() {
  return (
   <>
   <div className='container-fluid'>
    <Top/>
    <div className='row content1 easynav1 justify-content-center'> 
    <Easynav/>
    </div> 
      <br/>
    <div className='row'>
      <Ban/>
      </div>
      <br/>
      <div className='row'>
      <Products/>
      </div>
      <Form/>
    
    </div>
   </>
  );
}

export default App;
