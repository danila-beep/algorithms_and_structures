//ПОИСК В ШИРИНУ В ГРАФЕ

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"]
graph.d = ["f"]
graph.e = ["f"]
graph.f = ["g"]
let count = 0

function widthSearch(graph, start, end) {
    //создаем пустой массив для очреди
    let queue = []
    //сразу добавляем в этот массив стартовую вершину
    queue.push(start)

    //создаем цикл, который будет работать до тех пор, пока очередь не опустошится
    while (queue.length > 0) {
        count = count + 1
        //достаем из очереди текущую вершину
        const current = queue.shift()
        //если в этой вершине нет связанных ребер, то опустошаем массив
        if (!graph[current]) {
            graph[current] = []
        }
        //если по текущей вершине находится искомая, то возвращаем true
        if (graph[current].includes(end)) {
            return true
        } else {
            //если не нашли, тогда добавляем в очередь текущую вершину
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(widthSearch(graph, "a", "g"));
console.log("количество итераций =", count);


