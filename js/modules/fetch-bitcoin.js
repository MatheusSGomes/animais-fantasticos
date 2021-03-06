export default function initFetchBitcoin(){
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoinJSON => {
      const btcPreco = document.querySelector('.btc-preco')
  
      btcPreco.innerText = ( 1000 / bitcoinJSON.BRL.sell).toFixed(4)
    }).catch((erro) => {
      console.log(Error(erro))
    })
}
