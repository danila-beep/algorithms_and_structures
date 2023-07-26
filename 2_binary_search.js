const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0;

function binarySearch(array, item) {
  //задаем индекс первого элемента массива
  let start = 0;
  //задаем индекс последнего элемента массива
  let end = array.length;
  //создаем переменную для среднего элемента массива
  let middle;
  //создаем переменную, которая указывает, нашли мы элемент или нет
  let isFound = false;
  //создаем переменную которая будет содержать положение искомого элемента (ее мы и будем возвращать)
  let position = -1;

  //проходимся циклом по массиву до тех пор, пока не будет найден элемент или пока стартовое значение и последнее значение не будут равны (защита от элемента которого не существует)
  while (isFound === false && start <= end) {
    count = count + 1;

    //находим индекс среднего элемента массива (Math.floor для округления до целого числа в случаях где количство элементов массива нечетное)
    middle = Math.floor((start + end) / 2);

    //если средний элемент массива равен искомогу значению то присваем его переменной position и возвращаем
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    //если искомый элемент находится в левой части массива то отбрасываем правую часть и продолжаем итерации
    if (item < array[middle]) {
      end = middle - 1;
    }
    //если элемент находится в правой части массива то отбрасываем левую часть и продолжаем итерации
    if (item > array[middle]) {
      start = middle + 1;
    }
  }

  return position
}

//максимальное количество итераций для данного массива будет 4
//сложность данного алгоритма для данного массива можно выразить как O(log2n)

console.log(binarySearch(array, 6));
console.log("count of iterations =", count);

let countForReq = 0
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    countForReq += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(recursiveBinarySearch(array, 6, 0, array.length));
console.log("count of iteration (requrcy) =", countForReq);


