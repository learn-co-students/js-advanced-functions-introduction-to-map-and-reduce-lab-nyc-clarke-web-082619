// Your code here
function mapToNegativize(arr){
    return arr.map(x => x * (-1));
}

function mapToNoChange(arr){
    return arr;
}

function mapToDouble(arr){
    return arr.map(x => x*2);
}

function mapToSquare(arr){
    return arr.map(x=> x**2);
}

function reduceToTotal(arr, accumulator = 0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer,accumulator);
}

function reduceToAllTrue(arr){
    const reducer = (accumulator, currentValue) => accumulator && !!currentValue;
    console.log(arr);
    console.log(arr.reduce(reducer));
    return arr.reduce(reducer);
}

function reduceToAnyTrue(arr){
    const reducer = (accumulator, currentValue) => accumulator || !!currentValue;
    return arr.reduce(reducer);
}