const range = [2, 9];

function logNums(n) {
  if (n < range[1]) {
    range.push(Math.floor(Math.random() * 9));
    n++;
    logNums(n);
  } else {
    console.log('n = range[1]');
  }
}

logNums(range[0]);
