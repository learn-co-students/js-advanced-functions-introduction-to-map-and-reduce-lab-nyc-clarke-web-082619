// import { start } from "repl";

//MAP like
// sourceArray = [1, 2, 3, 4, 5];

function mapToNegativize(sourceArray) {
  let negArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    negArr.push(~sourceArray[i] + 1);
  }
  return negArr;
}

//   console.log(mapToNegativize(sourceArray));

function mapToNoChange(src) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    r.push(src[i]);
  }
  return r;
}

function mapToDouble(sourceArray) {
  let doubleArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    doubleArr.push(sourceArray[i] * 2);
  }
  return doubleArr;
}
function mapToSquare(sourceArray) {
  let squareArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    squareArr.push(sourceArray[i] ** 2);
  }
  return squareArr;
}

//REDUCE like

function reduceToTotal(src, startingPoint = 0) {
  let total = startingPoint;
  for (let i = 0; i < src.length; i++) {
    total = total + src[i];
  }
  return total;
}

sourceArray = [false, null, null, null, true];

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false;
  }
  return true;
}

console.log(reduceToAllTrue(sourceArray));

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true;
  }
  return false;
}
