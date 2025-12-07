function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isNumberInt(number) {
  const numberInt = parseInt(number);
  if (isNaN(numberInt)) {
    alert("Inserire un vore di tipo numerico");
    return false;
  } else {
    return true;
  }
}

function isIncludedRange(number, min, max) {
  if ( number <= min || number >= max ) {
    alert(`Inserire un numero tra ${min} e ${max}`);
    return false;
  } else {
    return true;
  }
}
