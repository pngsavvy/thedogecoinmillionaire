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

    if(price >= 1000000){
      return (
        <div class="App">
      
      <div id="spaceing"></div>

      <a id="social_tag" href="https://www.youtube.com/channel/UCvRP2JVdPZxPqdLFsv_VTmQ" target="_blank">
        {/* <img id="pro" src={pro}/> */}

        <img id="pro" src={pro1}
          onMouseOver={e => (e.currentTarget.src = pro3)}
          onMouseOut={e => (e.currentTarget.src = pro1)}
      //  onMouseOut={this.src = pro2} 
       />

      <br/>
      <p>@ProTheDoge (YT)</p>
      </a>
      {/* <p> <span id="doge_count"><a href="https://www.youtube.com/channel/UCvRP2JVdPZxPqdLFsv_VTmQ" target="_blank">@ProTheDoge's</a></span> Portfolio</p> */}
      
      <div id="spaceing"></div>
      
      <span class="price" id="doge_count">{formated_coin_count} </span> 
      <span>  </span>
      <img id="doge_logo_img" src={doge_logo}/>

      <span class="price"> = </span>
      
      <span class="price" id="pos_price">${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>

      {/* <h3>Dogecoin Millionair</h3> */}
      
    </div>
      )
    } else {
      return (
      <div class="App">

      <a id="social_tag" href="https://www.youtube.com/channel/UCvRP2JVdPZxPqdLFsv_VTmQ" target="_blank">
        <img id="pro" src={pro1}/>
      <br/>
      <p>@ProTheDoge</p>
      </a>
      {/* <p> <span id="doge_count"><a href="https://www.youtube.com/channel/UCvRP2JVdPZxPqdLFsv_VTmQ" target="_blank">@ProTheDoge's</a></span> Portfolio</p> */}
      
      <div id="spaceing"></div>
      
      <span class="price" id="doge_count">{formated_coin_count} </span> 
      <span>  </span>
      <img id="doge_logo_img" src={doge_logo}/>

      <span class="price"> = </span>
      
      <span class="price" id="neg_price">${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>

      {/* <h3>Dogecoin Millionair</h3> */}
      
    </div>
      )
    }

    
  }
  
}

export default App;
