const fs = require('fs');

/**
 * Read file line by line 
 * @return Int Array
 */
function readData() {
  try {
    const data = fs.readFileSync('input.txt', 'UTF-8');
    const lines = data.split(/\r?\n/).map(e => parseInt(e));
    return lines;
  } catch (err) {
    console.error(err);
  }
}

function part1(data){
  let increment = 0;
  for(let i=1; i<data.length; i++){
    if (data[i] > data[i-1]) increment += 1;
  }
  console.log('increment: ' + increment);
}

function part2(data){
  let increment = 0;
  let i = 2;
  let previous = data[i] + data[i-1] + data[i-2];
  for(i=3; i<data.length; i++){
    console.log(previous);
    let current = data[i] + data[i-1] + data[i-2];
    if(current > previous) increment += 1;
    previous = current;
  }
  console.log('increment: ' + increment);
}


let data = [];
data = readData();
// data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
part2(data);