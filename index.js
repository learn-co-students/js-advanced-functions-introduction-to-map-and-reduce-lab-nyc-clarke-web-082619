// Your code here
//map methods
function mapToNegativize(array){
    let newArray= [];
    for(let item of array){
        item = item * -1;
        newArray.push(item);
    }
    return newArray;
}

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){
    let newArray= [];
    for(let item of array){
        item = item * 2;
        newArray.push(item);
    }
    return newArray;
}

function mapToSquare(array){
    let newArray= [];
    for(let item of array){
        item = item * item;
        newArray.push(item);
    }
    return newArray;
}

//reduce-like methods
function reduceToTotal(array, startingPoint=0){
    let sum = startingPoint;
    console.log(startingPoint);
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;  
}

function reduceToAllTrue(array){
    let result = true;
    for(let i=0; i<array.length; i++){
        if (!array[i]){
            return false;
        }
    }
    return result;
}

function reduceToAnyTrue(array){
    let result = false;
    for (let i=0; i<array.length; i++){
        if (!!array[i]){
            return true;
        }
    }
    return result;
}