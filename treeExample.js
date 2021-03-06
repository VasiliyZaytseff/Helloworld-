function Node(data) {
    this.data = data;   //data — здесь хранятся значения
    this.parent = null; //parent — указывает на родительский элемент узла
    this.children = []; //children — указывает на следующий узел в списке
}

//_root — указывает на корневой узел дерева
//traverseDF(callBack) — проходит узлы дерева с помощью метода DFS(поиск в глубину, использует стек)
//traverseBF(callBack) — проходит узлы дерева с помощью метода BFS(поиск в ширину, использует очередь)
//contains(data, traversal) — ищет узел дерева
//add(data, toData, traverse) — добавляет узел к дереву
//remove(child, parent) — удаляет узел дерева

/*Метод поиска в глубину

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

создаем следующее дерево

 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven

tree.traverseDF(function(node) {
    console.log(node.data)
});

выводим следующие строки на консоль

'five'
'six'
'two'
'three'
'seven'
'four'
'one'
*/

/*Метод поиска в ширину

tree

 one (depth: 0)
 ├── two (depth: 1)
 │   ├── five (depth: 2)
 │   └── six (depth: 2)
 ├── three (depth: 1)
 └── four (depth: 1)
     └── seven (depth: 2)

tree.traverseBF(function(node) {
    console.log(node.data)
});

выводим следующие строки на консоль

'one'
'two'
'three'
'four'
'five'
'six'
'seven'
*/

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callBack) {

    // это рекурсивная и мгновенно вызываемая функция
    (function recurse(currentNode) {
        // шаг 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // шаг 3
            recurse(currentNode.children[i]);
        }

        // шаг 4
        callBack(currentNode);

        // шаг 1
    })(this._root);

};

Tree.prototype.traverseBF = function(callBack) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callBack(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callBack, traversal) {
    traversal.call(this, callBack);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callBack = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callBack, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error("Cannot add node to a non-existent parent.");
    }
};

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callBack = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callBack, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error("Node to remove does not exist.");
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error("Parent does not exist.");
    }

    return childToRemove;
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }

    return index;
}