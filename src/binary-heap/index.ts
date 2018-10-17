import { BinaryHeap } from './BinaryHeap';
import { HeapElement } from './HeapElement';
import { HeapPrinter } from './HeapPrinter';

const heap = new BinaryHeap([]);

heap.insertMany([
    new HeapElement(1, {}),
    new HeapElement(30, {}),
    new HeapElement(12, {}),
    new HeapElement(5, {}),
    new HeapElement(120, {}),
    new HeapElement(11, {}),
    new HeapElement(220, {}),
    new HeapElement(75, {}),
    new HeapElement(33, {}),
    new HeapElement(220, {}),
    new HeapElement(75, {}),
    new HeapElement(33, {}),
    new HeapElement(30, {}),
    new HeapElement(12, {}),
    new HeapElement(5, {}),
    new HeapElement(120, {}),
    new HeapElement(11, {}),
    new HeapElement(220, {}),
    new HeapElement(75, {}),
    new HeapElement(33, {}),
    new HeapElement(220, {}),
    new HeapElement(75, {}),
    new HeapElement(33, {}),
]);

// priority.insert(new HeapElement(1, {}));
// priority.displayTree();

// priority.insert(new HeapElement(30, {}));
// priority.displayTree();

// priority.insert(new HeapElement(12, {}), );
// priority.displayTree();

// priority.insert(new HeapElement(120, {}));

HeapPrinter.displayTree(heap);
// console.log(priority.extractMax());
// console.log(priority._array);
