const fs = require('fs');

/**
 * Read file line by line 
 * @return Int Array
 */
function readData() {
  try {
    const data = fs.readFileSync('input.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    return lines;
  } catch (err) {
    console.error(err);
  }
}

/**
 * 
 * @param {Array} number array of bit 
 * @returns Integer
 */
function bin2dec(number){
  let int = 0;
  for(let i=0; i < number.length; i++){
    int += number[number.length-i-1] * (2**i);
  }
  console.log(int);
  return int;
}


function part1(data){
  let result = [];
  for(let i=0; i<data[0].length; i++){ result.push(0)}
  data.forEach(e => {
    for(let i=0; i<e.length; i++){
      if(e[i] == 1) result[i] += 1;
      else(result[i] -= 1)
    }
  });
  gammaRate = result.map(e => (e>0)? 1 : 0);
  gammaRate = bin2dec(gammaRate);
  epsilonrate = result.map(e => (e<0)? 1 : 0);
  epsilonrate = bin2dec(epsilonrate);
  
  console.log("consumption : "  + gammaRate * epsilonrate);
}

// let data = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010']
let data = readData();
data = data.map(e => e.split(""));
part1(data);