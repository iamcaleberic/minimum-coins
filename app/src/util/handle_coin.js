/*eslint radix: "off"*/
export function handleCoin (val) {
  // allowed denominations in pennies
  let denoms = [200, 100, 50, 20, 10, 5, 2, 1]
  // coin array
  let coins = []
  // return value of divisor
  let value
  //  current index in denom array
  let index = 0
  //  remainder
  let modulo


  {/* To Calculate the amount of sterling given the number of pences we need to
    Calculate the remainder of the amount given and push the value to a given
    array and go through the denominations.
  */}

  // 200
  value = parseInt(val/denoms[index])
  coins.push(value)
  modulo = val  - (value * denoms[index])
  index ++
  // 100
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 50
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 20
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 10
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 5
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 2
  value = parseInt(modulo/denoms[index])
  coins.push(value)
  modulo = modulo - (value * denoms[index])
  index ++
  // 1
  value = parseInt(modulo/denoms[index])
  coins.push(value)

  return coins

}
