function oneThroughTwenty(listanumeros) {

  let numaro = []

  for(let i = 0; i <= listanumeros; i++){

    if(i <= 20){

      numaro.push(i)
    }
  }
  
 return numaro
}

console.log(oneThroughTwenty(20))

//-------------------------------------------------

function evensToTwenty(listaPares) {

    let pares = []

    for(let i = 0; i <= listaPares; i++){

      if(i % 2 == 0){

        pares.push(i)
      }
    }
    
   return pares
}
  
console.log(evensToTwenty(20))

//-------------------------------------------------
 
function oddsToTwenty(listaImpares) {
     
  let impares = []

  for(let i = 0; i <= listaImpares; i++){

    if(i % 2 == 1){

      impares.push(i)
    }
  }
 return impares
}
 
console.log(oddsToTwenty(20))

//-------------------------------------------------
 
function multiplesOfFive(liste) {
     
  let multcinco = [];
  
  for(let i = 0; i < liste; i++) {
    if(i % 5 == 0 )
    multcinco.push(i)

  }

  return multcinco;
 
}

console.log(multiplesOfFive(101))

//-------------------------------------------------
 
function squareNumbers(num) {
     
  let array = []

  for(let i = 1; i <= num; i++){
    if((i**(1/2))% 1 == 0){
      array.push(i)
    }
    
  }
  return array
}
 
console.log(squareNumbers(100))

//-------------------------------------------------
 
function countingBackwards(listanumeros2) {
     
  let numaro2 = []

  for(let i = 20; i >= listanumeros2; i--){
    if(i >= listanumeros2){
      numaro2.push(i)
    }
    
  }
  
 return numaro2
}

console.log(countingBackwards(0))

//-------------------------------------------------
 
function evenNumbersBackwards(listaPares2) {
     
  let pares2 = []

  for(let i = 20; i >= listaPares2; i--){

      if(i % 2 == 0){

        pares2.push(i)
      }
    
  }
  
 return pares2
}

console.log(evenNumbersBackwards(0))

//-------------------------------------------------
 
function oddNumbersBackwards(listaImpares2) {
     
  let impares2 = []

  for(let i = 20; i >= listaImpares2; i--){

    if(i % 2 == 1){

      impares2.push(i)
    }
  }
 return impares2
}
 
console.log(oddNumbersBackwards(0))

//-------------------------------------------------
 
function multiplesOfFiveBackwards(liste2) {
     
  let multcinco2 = [];
  
  for(let i = 100; i > liste2; i--) {
    if(i % 5 == 0 )
    multcinco2.push(i)

  }

  return multcinco2;
 
}

console.log(multiplesOfFiveBackwards(0))

//-------------------------------------------------
 
function squareNumbersBackwards(num2) {
     
  let array2 = []

  for(let i = 100; i >= num2; i--){
    if((i**(1/2))% 1 == 0){
      array2.push(i)
    }
    
  }
  return array2
}
 
console.log(squareNumbersBackwards(1))