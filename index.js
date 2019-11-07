// Your code here
function  mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((total, value)=> total += value ) +startingPoint
}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce((final, value)=> final = final && Boolean(value));
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce((final, value)=> final = final || Boolean(value));
}