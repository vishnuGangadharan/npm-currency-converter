import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_IW83tK0bOhbvPeawkvAoKMLM8NAGNubZ5dM4BkCz');



export async function convertCurrency(fromCurrency, toCurrency, units){
  const res  = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
})
 const multiplier = res.data[toCurrency];
    
 return multiplier * units

}