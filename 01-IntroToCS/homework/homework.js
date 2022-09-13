'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split ("")
  var sum = 0;
  for (let i = 0; i <array.length; i++){
    sum = sum + array[i] * 2 ** (array.length-1-i);
   
  }
  return sum


}

function DecimalABinario(num) {
  // tu codigo aca
 let resto = "";

while (num !==0 ){
  resto= num %2 +resto 
  num = Math.floor(num/2)
}
  
 return resto 

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}