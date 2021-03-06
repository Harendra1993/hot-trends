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

    if (width > 1200) {
        columns = 5;
    } else if (width <= 1200 && width > 900) {
        columns = 4;
    } else if (width <= 900 && width > 600) {
        columns = 2;
    } else {
        columns = 1;
    }

    if (height > 900) {
        rows = 5;
    } else if (height <= 900 && height > 600) {
        rows = 4;
    } else if (height <= 600 && height > 300) {
        rows = 2;
    } else {
        rows = 1;
    }

    return [columns, rows];
}

function isUndefined(obj) {
    return obj === void 0;
}

function getFontSize(columns, rows) {
    let size = 0;
    // console.log('row',rows)
    // console.log('columns',columns)
    switch (columns) {
        case 1:
            if (rows >= 4) {
                size = 28;
            } else if (rows === 3) {
                size = 52;
            } else if (rows === 2) {
                size = 100;
            } else if (rows === 1) {
                size = 152;
            }
            break;

        case 2:
            if (rows >= 4) {
                size = 28;
            } else if (rows === 3) {
                size = 52;
            } else if (rows === 2) {
                size = 100;
            } else if (rows === 1) {
                size = 152;
            }
            break;

        case 3:
            if (rows >= 4) {
                size = 28;
            } else if (rows === 3) {
                size = 52;
            } else if (rows === 2) {
                size = 100;
            } else if (rows === 1) {
                size = 152;
            }
            break;

        case 4:
            if (rows === 5) {
                size = 28;
            } else if (rows === 4) {
                size = 36;
            } else {
                size = 42;
            }
            break;

        case 5:
            if (rows === 5) {
                size = 28;
            } else if (rows === 4) {
                size = 36;
            } else {
                size = 52;
            }
            break;

        default:
            break;
    }

    return size;
}

export {
    getRandomData,
    getRandomValue,
    getGridSize,
    isArrayEqual,
    isUndefined,
    getFontSize
};