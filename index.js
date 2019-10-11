import { start } from "repl"

// Your code here
function mapToNegativize(sourceArray){
    // return sourceArray.map(number => number * -1)
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * -1)
    }
    return newArr
}

function mapToNoChange(sourceArray){
    // return sourceArray.map(number => number)
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i])
    }
    return newArr
}

function mapToDouble(sourceArray){
    // return sourceArray.map(number => number * 2)
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * 2)
    }
    return newArr
}

function mapToSquare(sourceArray){
    // return sourceArray.map(number => number ** 2)
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] ** 2)
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0){
    // return sourceArray.reduce((total, number) => 
    //     total + number, startingPoint
    // )
    let total = startingPoint;
    for (let i=0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for (let i=0; i < sourceArray.length; i++){
        if(!sourceArray[i]) return false
    }
        return true
}

function reduceToAnyTrue(sourceArray){
    for (let i=0; i < sourceArray.length; i++){
        if(sourceArray[i]) return true
    }
        return false
}