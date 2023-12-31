const array = [4, 12, 3, 2, 5, 1, 6];
let count = 0;

//При использовании этого алгоритма массив делится на две части 
//–отсортированную и несортированную. Сортированный список находится вначале. 
//Все элементы справа от последнего отсортированного элемента считаются несортированными.
//Изначально отсортированный список пуст. 
//Затем перебирается несортированный список и определяется самый маленький или самый большой элемент. 
//Затем отсортированный подсписок расширяется для включения этого элемента.
//После этого программа снова находит подходящий элемент, 
//меняя его на крайний левый элемент несортированного списка и расширяя отсортированный список.
//После каждой итерации необходимо проверять 
//на один элемент меньше, пока не будет отсортирован весь массив или список.

function selectionSort(array) {
  //создаем цикл который будет начинаться с нуля и идти по всем элементам массива
  for (let i = 0; i < array.length; i++) {
    //создаем переменную содержащую минимальное значение 
    //(по умолчанию равен индексу внешнего цикла)
    let indexMin = i;
    //внутри внешнего цикла создаем еще один в 
    //котором среди элементов вложенного цикла будет 
    //находится минимальный и этот элемент будет заменять из внешнего цикла 
    //(цикл будет начинать не с 0, а с индекса первого цикла + 1)
    for (let j = i+1; j < array.length; j++) {
        //если текущий элемент итерации меньше чем элемент с минимальным индексом,
        //то мы заменяем минимальный индекс на индекс текущей итерации
        //ищем минимальное значение массива
        if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count = count + 1;
    }

    //далее нам необходимо поменять местами элементы в отсортированном порядке
    //создаем переменную в которую кладем значение первого элемента массива
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}


//сложность этого алгоритма O(n*n) с коэфицентом
console.log(selectionSort(array));
console.log("count of iterations =", count);
