export function getRandomData(dataSets, dataSet) {
  if (dataSet !== 'all_regions') {
    let array = dataSets[dataSet];
    return array[Math.floor(Math.random() * array.length)];
  } else {

    let keys = Object.keys(dataSets)
    let array =dataSets[keys[ keys.length * Math.random() << 0]];
    
    return array[Math.floor(Math.random() * array.length)];
  }

};


export function getRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}