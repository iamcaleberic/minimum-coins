/*eslint radix: "off"*/
export function parseInput(input) {
  if(/[a-o,q-z]/.test(input)){ // regex to check for other letters other than p in input
    return 'invalid input'
  } else if (Number.isInteger(parseInt(input))){ // handle input that is already in pence
    return parseFloat(input)
  } else if ((input.startsWith('£')) && (input.endsWith('p')) && (/[0-9]/.test(input)) ){ // handle values that have both pound and pence values and are not empty
    return parseFloat(input.slice(1, -1)) * 100
  } else if ((input.startsWith('£')) && (/[0-9]/.test(input))) { // handle input that is passed with pound sign
    return parseFloat(input.slice(1)) * 100
  } else if ((input.endsWith('p')) && (/[0-9]/.test(input)) && (Number.isInteger(input.slice(0, -1)))){ //handle input passed with pence
    return parseFloat(input.slice(0,-1))
  } else {
    return 'invalid input' // handle all other invalid input 
  }
}
