const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    //просчитываем количество итераций
    count = count + 1;
    //проходим циклом по длине массива
    if (array[i] === item) {
      //если элемент массива равен искомому значению
      //то возвращаем индекс этого элемента
      return i;
    }
    continue;
  }
  //если не равно искомому значению возвращает пустоту
  return null;
}

console.log(linearSearch(array, 11));
console.log("count of iterations =", count);
