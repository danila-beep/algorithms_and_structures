//ПОИСК КРАТЧАЙШЕГО ПУТИ (АЛГОРИТМ ДЕЙКСТРЫ)

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start) {
  //создаем обьект таблицу которая хранит пути от стартовой точки
  let costs = {};
  //создаем массив в котором будут храниться элементы которые уже были обработаны
  let processed = [];
  //создаем обьект в котором будут храница соседните вершины рассматриваемого узла
  let neighbors = {};
  //при помощи Object.keys получаем у графа список ключей и итерируемся по ним
  Object.keys(graph).forEach((node) => {
    //если текущий элемент итерации не равен стартовому значению то заполняем значения
    if (node !== start) {
      //получаем значение обьекта путей от стартовой точки до значения текущей итерации и сохраняем его в переменную
      let value = graph[start][node];
      //добавляем в обьект с путяим полученное значение, если его не существует то присваиваем бесконечность
      costs[node] = value || Infinity;
    }
  });
  //находим вершину в которую мы можем попасть из стартовой точки и найти кратчайший путь до такой точки
  let node = findNodeLowestCost(costs, processed);
  //создаем цикл который будет выполнятся пока существуют значения узлов
  while (node) {
    //находим значение размера пути для текущей итерации
    const cost = costs[node];
    //находим узлы в которые мы можем попасть из узла текущей итерации
    neighbors = graph[node];
    //при помощи Object.keys получаем ключи для соседних элементов узла текущей итерации и итерируемся по ним
    Object.keys(neighbors).forEach((neighbor) => {
      //создаем переменную со значением размера пути
      let newCost = cost + neighbors[neighbor];
      //если новое значение размера пути меньше того, что мы имеем сейчас, то перезаписываем его
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    //добавляем обработанное значение в массив обработанных элементов
    processed.push(node);
    //заново запускаем функцию поиска минимального узла
    node = findNodeLowestCost(costs, processed);
  }
  //возвращаем обьект с размерами пути
  return costs;
}

function findNodeLowestCost(costs, processed) {
  //создаем переменную с минимальным значением (по умолчанию бесконечность)
  let lowestCost = Infinity;
  //создаем переменную с минимальным узлом
  let lowestNode;
  //итерируемся по ключам обьекта со значениями размера пути
  Object.keys(costs).forEach((node) => {
    //получаем размер пути узла текущей итерации
    let cost = costs[node];
    //если этот размер меньше чем минимальная стоимость и вершина которая рассматривается на текущей итерации НЕ находится в массиве с обработанными
    if (cost < lowestCost && !processed.includes(node)) {
      //то присваиваем значение размера пути для переменной с минимальным значением
      lowestCost = cost;
      //то присваиваем для переменной с минимальным узлом значение узла текущей итерации
      lowestNode = node;
    }
  });
  //по итогу передаем значение узла которое по итогу операций оказалось минимальным
  return lowestNode;
}

console.log(shortPath(graph, "d"));
