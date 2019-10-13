// Your code here
function mapToNegativize(arr) {
    return arr.map(element => element *-1);
}

function mapToNoChange(arr) {
    return arr.map(element => element);
}

function mapToDouble(arr) {
    return arr.map(element => element * 2);
}

function mapToSquare(arr) {
    return arr.map(element => element ** 2);
}

function reduceToTotal(arr, start = 0) {
    return arr.reduce((sum,element) => sum + element, start);
}

function reduceToAllTrue(arr){
    return arr.reduce((total, element) => !!total && !!element);
}

function reduceToAnyTrue(arr) {
    return arr.reduce((total,element) => !!total || !!element );
}