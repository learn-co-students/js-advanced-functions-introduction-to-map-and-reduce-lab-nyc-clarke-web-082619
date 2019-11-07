// Your code here
function mapToNegativize(sourceArray){
    let newArr = [];
    for (let i = 0; i< sourceArray.length; i++){
        newArr.push(sourceArray[i]*-1)
    }
    return newArr;
}
function mapToNoChange(sourceArray){
    let newArr = [];
    for (let i = 0; i< sourceArray.length; i++){
        newArr.push(sourceArray[i])
    }
    return newArr;
}
function mapToDouble(sourceArray){
    let newArr = [];
    for (let i = 0; i< sourceArray.length; i++){
        newArr.push(sourceArray[i]*2)
    }
    return newArr;
}
function mapToSquare(sourceArray){
    let newArr = [];
    for (let i = 0; i< sourceArray.length; i++){
        newArr.push(sourceArray[i]**2)
    }
    return newArr;
}
function reduceToTotal(sourceArray, startingPoint){
    let sum = startingPoint||0;
    for (let i = 0; i< sourceArray.length; i++){
        sum += sourceArray[i];
    }
    return sum;
}
function reduceToAllTrue(sourceArray){
    let x = true;
    for (let i = 0; i< sourceArray.length; i++){
        if(sourceArray[i] == false){
            x = false;
        }
    }
    return x
}
function reduceToAnyTrue(sourceArray){
    let x = false;
    for (let i = 0; i< sourceArray.length; i++){
        if(sourceArray[i] == true){
            x = true;
        }
    }
    return x
}