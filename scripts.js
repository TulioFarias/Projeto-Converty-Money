const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValues =  async () => {
    const inputReais = document.getElementById('input-real').value
    const realValuetext= document.getElementById('real-value-text')
    const realValueText2= document.getElementById('currency-value-text')

    const data =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    
 

    realValuetext.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    ).format(inputReais);
   

    if(select.value === 'US$ Dólar americano') {
    realValueText2.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar);
    }

    if(select.value === '€$ Euro') {
    realValueText2.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro);
    }

    if(select.value === '₿ Bitcoin') {
        realValueText2.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'BTC' }
        ).format =  (inputReais * bitcoin);
    }
}

changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === "US$ Dólar americano") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src="./img/euaphoto.png"

    }


    if(select.value === '€$ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"

    }

    if(select.value === '₿ Bitcoin'){
        currencyName.innerHTML = "BTC"
        currencyImg.src = "./img/bitcoin.png"

    }
    convertValues()


}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)