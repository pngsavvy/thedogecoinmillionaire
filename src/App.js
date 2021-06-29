import './App.css';
import get_doge_price from './get_price';
import React, {useState, useEffect} from "react"
import doge_logo from "./doge_logo.png"
// import pro1 from "./PRO.png"
// import pro2 from "./PRO2.png"
import pro1 from "./pro_1.png"
import pro2 from "./pro_2.png"
import pro3 from "./pro_3.png"

// USE THIS TO GET CHART:
// https://codesandbox.io/s/react-stockcharts-example2-forked-vd48p?file=/public/manifest.json

function App() {
  const [price, setPrice] = useState(0.0);
  const doge_coins_owned = 4005100
  const formated_coin_count = doge_coins_owned.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  useEffect(() => {
    get_price()
  }, [])

  const get_price = () => get_doge_price().then(result => {
    setPrice((result * doge_coins_owned))
  });

  console.log(price)


  if(!price){
    return (<div>Loading...</div>)
  } else {

    var portfolio_value = <span></span>
    var face1;
    var face2;

    if(price >= 1000000){
      portfolio_value = <span class="price" id="pos_price">${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      face1 = pro3;
      face2 = pro1;  
    } else {
      portfolio_value = <span class="price" id="neg_price">${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      face1 = pro1;
      face2 = pro3;  
    }

      return (
        <div class="App">      
        <div id="spaceing" ></div>
  
        {/* Face */}
        <a id="social_tag" href="https://www.youtube.com/channel/UCvRP2JVdPZxPqdLFsv_VTmQ" target="_blank">
          <img id="pro" src={face1}
            onMouseOver={e => (e.currentTarget.src = face2)}
            onMouseOut={e => (e.currentTarget.src = face1)}
         />
        <br/>
        <p class="standard-font prothedoge">@ProTheDoge (YT)</p>
        </a>
        
        <div id="spaceing"></div>
        
        {/* Equation */}
        <span class="price" id="doge_count">{formated_coin_count} </span> 
        <span>  </span>
        <img id="doge_logo_img" src={doge_logo}/> 
        <span class="price equals"> = </span>  
        {portfolio_value}
        <div class="signature"><a class="signature-name" href="https://pngsavvy.github.io/" target="_blank">Created by: Zachary Beall</a></div>
      </div>
      )
  }
}

export default App;
