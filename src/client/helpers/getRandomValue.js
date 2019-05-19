export function getRandomData(dataSets,dataSet) {
  if(dataSet!=='all_regions'){
    let array=dataSets[dataSet];
    return array[Math.floor(Math.random() * array.length)];
  }
  
};

export function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
