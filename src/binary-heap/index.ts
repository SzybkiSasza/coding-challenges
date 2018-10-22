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
    new HeapElement(73, {}),
    new HeapElement(38, {}),
    new HeapElement(221, {}),
    new HeapElement(75, {}),
    new HeapElement(32, {}),
    new HeapElement(30, {}),
    new HeapElement(17, {}),
    new HeapElement(5, {}),
    new HeapElement(111, {}),
    new HeapElement(110, {}),
    new HeapElement(201, {}),
    new HeapElement(75, {}),
    new HeapElement(29, {}),
    new HeapElement(220, {}),
    new HeapElement(78, {}),
    new HeapElement(33, {}),
]);

console.log('Initial tree: ');
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Max element...');
console.log(heap.getMax());
console.log('\n');

console.log('Removing max...');
console.log(heap.extractMax());
console.log('\n');

console.log('Heap after extracting: ');
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Heap after a few other extracts: ');
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Decreasing priority from 75 to 20...');
heap.changePriority(1, 20);
console.log('After priority change: ');
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Increasing priority...');
heap.changePriority(15, 76);
console.log('After priority change: ');
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Deleting the element...');
heap.deleteElement(4);
console.log('After deleting:');
HeapPrinter.displayTree(heap);
console.log('\n');

console.log('Getting sorted array: ');
console.log(heap.sort());
console.log('\n');
