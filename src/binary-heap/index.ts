import { BinaryHeap } from './BinaryHeap';
import { HeapElement } from './HeapElement';
import { HeapPrinter } from './HeapPrinter';

const heap = new BinaryHeap([]);

console.log('Inserting many elements...');
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

console.log('Initial tree: ');
HeapPrinter.displayTree(heap);

console.log('Max element...');
console.log(heap.getMax());

console.log('Removing max...');
console.log(heap.extractMax());

console.log('Heap after extracting: ');
HeapPrinter.displayTree(heap);
