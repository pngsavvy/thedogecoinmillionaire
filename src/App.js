import './App.css';
import get_doge_price from './get_price';
import React, {useState, useEffect} from "react"

// export default class UserComponent extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       doge_price: 0.0,
//       isLoaded: false,
//     }
//   }

//   componentDidMount(){
//     var price = () => get_doge_price()
//     this.setState({
//       doge_price: price,
//       isLoaded: true,
//     })
//     console.log("<<<<<")
//     console.log(price)
//   }
//   render(){
//     if(!this.state.isLoaded) {
//       return <div class="App">Loading...</div>
//     }
//     else{
//       return <div class ="App">hi  {this.state.doge_price}  {0}</div>
//     }
//   }
// }


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
      <h2>Dogecoins: {doge_coins_owned}</h2>
      <h1>${price}</h1>
    
    </div>)
  }
  
}

export default App;
