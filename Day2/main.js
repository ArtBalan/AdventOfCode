const fs = require('fs');

/**
 * Read file line by line 
 * @return Int Array
 */
function readData() {
  try {
    const data = fs.readFileSync('input.txt', 'UTF-8');
    const lines = data.split(/\r?\n/).map(e => e.split(" "));
    return lines;
  } catch (err) {
    console.error(err);
  }
}

function part1(data){
  let horizontal = 0;
  let depth = 0;
  data.forEach(e => {
    switch(e[0]){
      case "up":
        depth -= parseInt(e[1]);
        break;
      case "down":
        depth += parseInt(e[1]);
        break;
      case "forward":
        horizontal += parseInt(e[1]);
        break;
      default:
        break;
    }
  });
  console.log("position : " + depth * horizontal)
}

function part2(data){
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  data.forEach(e => {
    switch(e[0]){
      case "up":
        aim -= parseInt(e[1]);
        break;
      case "down":
        aim += parseInt(e[1]);
        break;
      case "forward":
        horizontal += parseInt(e[1]);
        depth += (aim * parseInt(e[1]));
        break;
      default:
        break;
    }
  });
  console.log("position : " + depth * horizontal)
}

let data = readData();
part2(data);