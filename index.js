function mapToNegativize(sourceArray) {
    let newArr = [] 
    sourceArray.forEach(function(x) {
        newArr.push(x * -1)
    })
    return newArr
}

function mapToNoChange(sourceArray) {
    let newArr = [] 
    sourceArray.forEach(function(x) {
        newArr.push(x)
    })
    return newArr
}

function mapToDouble(sourceArray) {
    let newArr = [] 
    sourceArray.forEach(function(x) {
        newArr.push(x * 2)
    })
    return newArr
}

function mapToSquare(sourceArray) {
    let newArr = [] 
    sourceArray.forEach(function(x) {
        newArr.push(x ** 2)
    })
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0) {
    sourceArray.forEach(function(x) {
        startingPoint += x
    })
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) {return false}
    }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) {return true}
    }
    return false
  }