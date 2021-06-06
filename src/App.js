import './App.css';
import get_doge_price from './get_price';
import React, {useState, useEffect} from "react"

function App() {
  const [price, setPrice] = useState(0.0);
  const doge_coins_owned = 4000000
  useEffect(() => {
    get_price()
  }, [])

  const get_price = () => get_doge_price().then(result => {
    setPrice((result * doge_coins_owned).toFixed(2))
  });

  console.log(price)


  if(!price){
    return (<div>Loading...</div>)
  } else {
    return (
    <div class="App">
      <h2>@ProTheDoge's Portfolio</h2>
      <h2>DOGE: {doge_coins_owned}</h2>
      <h1>${price}</h1>
    
    </div>)
  }
  
}

export default App;
