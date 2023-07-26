const array = [4, 12, 3, 2, 5, 1, 6];
let count = 0;

function bubblesSort(array) {
  //создаем два вложенных цикла, оба будут проходиться по длине массива от 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      //если элемент текущей итерации больше чем следующий за ним элемент, то меняем их местами
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count = count + 1;
    }
  }
  return array;
}

console.log("Длинна массива =", array.length);
//сложность этого алгоритма ровно O(n*n)
console.log(bubblesSort(array));
console.log("count of iterations =", count);
