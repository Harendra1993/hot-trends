function getRandomData(dataSets, dataSet) {
    if (dataSet !== 'all_regions') {
        let array = dataSets[dataSet];
        return array[Math.floor(Math.random() * array.length)];
    } else {

        let keys = Object.keys(dataSets)
        let array = dataSets[keys[keys.length * Math.random() << 0]];

        return array[Math.floor(Math.random() * array.length)];
    }

}


function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// https://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way
/*
 * Check for array equivalance
 */
function isArrayEqual(sourceArray, targetArray) {
    if (sourceArray.length !== targetArray.length) {
        return false;
    }

    for (let i = sourceArray.length; i--;) {
        if (sourceArray[i] !== targetArray[i]) {
            return false;
        }
    }

    return true;
}

function getGridSize(width, height) {
    let rows = 0;
    let columns = 0;

    if (width > 1400) {
        columns = 5;
    } else if (width <= 1400 && width > 1200) {
        columns = 4;
    } else if (width <= 1200 && width > 900) {
        columns = 3;
    } else if (width <= 900 && width > 600) {
        columns = 2;
    } else {
        columns = 1;
    }

    if (height > 1400) {
        rows = 5;
    } else if (height <= 1400 && height > 1200) {
        rows = 4;
    } else if (height <= 1200 && height > 900) {
        rows = 3;
    } else if (height <= 900 && height > 600) {
        rows = 2;
    } else {
        rows = 1;
    }

    return [columns,rows];
}

function isUndefined(obj){
    return obj === void 0;
}

export {
    getRandomData,
    getRandomValue,
    getGridSize,
    isArrayEqual,
    isUndefined
};