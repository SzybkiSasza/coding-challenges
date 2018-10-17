declare const arr: any[];
declare class Element {
    constructor(priority: any, data: any);
}
declare class PriorityQueue {
    constructor(array?: never[]);
    displayTree(): void;
    extractMax(): any;
    getLeft(index: any): number | null;
    getRightIndex(index: any): number | null;
    getParentIndex(index: any): number | null;
    getMax(): any;
    heapify(index?: number): void;
    maintainHeap(index: any): void;
    insert(element: any): void;
    insertMany(elements: any): void;
    printTree(dataBuffer: any): void;
    size(): any;
}
declare const priority: any;
