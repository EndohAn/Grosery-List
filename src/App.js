import './App.css';
import image from './text.jpg';
import imageTwo from './shop.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div>
      <div className='app'>
      <div className='container'>
      <img className='firstImg' src={image}width="200px" alt="text"/>
      </div>

      <div className='container'>
      <h1>Grocery List</h1>
      </div>

      <GroceryList/>

      <div className='container'>
      <img src ={imageTwo}width="200px" alt="shopping cart"/>
      </div>
    </div>
    </div>
    
  );
}

export default App;
