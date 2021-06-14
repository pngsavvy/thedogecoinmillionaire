import Axios from 'axios'

export default function get_doge_price(){
    console.log("getting price")
    var price = 0.0

    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/simple/price',
      params: {ids: 'dogecoin', vs_currencies: 'usd'},
      headers: {
        'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com'
      }
    };

    price =  Axios.request(options).then(function (response) {
      return response.data.dogecoin.usd
    }).catch(function (error) {
      console.error(error);
    });
    console.log(price)
    return price
  } 








  // export default function get_doge_price(){
  //   console.log("getting price")
  //   var token = ""
  //   var price = 0.0
  //   // Request Token
  //   const auth_response = {
  //   method: 'POST',
  //   url: 'https://bravenewcoin.p.rapidapi.com/oauth/token',
  //   headers: {
  //     'content-type': 'application/json',
  //     'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
  //     'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
  //   },
  //   data: {
  //     audience: 'https://api.bravenewcoin.com',
  //     client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
  //     grant_type: 'client_credentials'
  //   }
  // };

  // price =  Axios.request(auth_response).then(function (auth_response) {
  //     token = auth_response.data.access_token 

  //     // Use Token to get price
  //     const coin_info_options = {
  //         method: 'GET',
  //         url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
  //         params: {assetId: '7bb2339e-b6eb-408c-836f-2894c8751c6d'},
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //           'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
  //           'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
  //         }
  //       };
        
  //       return Axios.request(coin_info_options).then( response => {
  //         return response.data.content[0].price
  //       }).catch(function (error) {
  //         console.error(error);
  //       });

  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  //     console.log(price)
  //     return price
  // } 
