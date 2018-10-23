import { BinarySearch } from './BinarySearch';
import { IArrayElement } from './IArrayElement';

console.log('=== BINARY SEARCH ===');

console.log('Generating input data...\n');
const array: IArrayElement[] = [];
for (let i = 0; i < 10000000; i++) {
  array.push({
    priority: i,
    data: {},
  });
}

const binarySearch = new BinarySearch(array);

console.log('Using linear search first');
let startTime = Date.now();
const linearResult = binarySearch.findLinear(1234567);
let endTime = Date.now();

console.log(`Linear search took ${endTime - startTime} ms.`);
console.log('Result: \n', linearResult, '\n');

console.log('Using binary search');
startTime = Date.now();
const binaryResult = binarySearch.find(1234567);
endTime = Date.now();

console.log(`Binary search took ${endTime - startTime} ms.`);
console.log('Result: \n', binaryResult, '\n');
