// Your code here

function mapToNegativize(array){
    return array.map(function(element){
        return element * -1;
    })

}

function mapToNoChange(array){
    return array.map(function(element){
        return element;
    });
}

function mapToDouble(array){
    return array.map(function(element){
        return element * 2;
    });
}

function mapToSquare(array){
    return array.map(function(element){
        return element ** 2;
    });
}

function reduceToTotal(array, startingPoint=0){
    function add(x, y){
        return x + y;
    }
    return array.reduce(add, startingPoint) 
     
}

function reduceToAllTrue(array){
    function isTrue(element){
        return !!element == true;
    }
    return array.every(isTrue)
}

function reduceToAnyTrue(array){
    let foundTrue = false;


    for (let i = 0; i < array.length; i++){
        if (array[i]) {
            foundTrue = true;
        }
    }

    return foundTrue;
}