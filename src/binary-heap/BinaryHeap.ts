import { HeapElement } from './HeapElement';

export class BinaryHeap {
    constructor(array: HeapElement[]) {
        this._array = array;
    }

    private _array: HeapElement[];

    public element(index: number) {
        return this._array[index] || null;
    }

    public extractMax(): (HeapElement | null) {
        if (this.size() === 0) {
            return null;
        }

        const max = this._array[0];

        if (this.size() > 1) {
            this._array[0] = this._array[this.size() - 1];
            this.heapify();
        }

        this._array.pop();

        return max;
    }

    public getMax() {
        return this._array[0] || null;
    }

    public insert(element: HeapElement) {
        this._array.push(element);

        this.maintainHeap(this.size() - 1);
    }

    public insertMany(elements: HeapElement[]) {
        elements.forEach(element => {
            this.insert(element);
        });
    }

    public getParentIndex(index: number) {
        const parentIndex = Math.floor((index - 1) / 2);

        return parentIndex >= 0 ? parentIndex : null;
    }

    public size() {
        return this._array.length;
    }

    private getLeft(index: number) {
        const leftIndex = index * 2 - 1;

        return leftIndex < this.size() ? leftIndex : null;
    }

    private getRightIndex(index: number) {
        const rightIndex = index * 2;

        return rightIndex < this.size() ? rightIndex : null;
    }

    private heapify(index = 0) {
        console.log('Will heapify here...');
    }

    private maintainHeap(index: number) {
        const parentIndex = this.getParentIndex(index);
        if (parentIndex !== null) {
            const parent = this._array[parentIndex];
            const element = this._array[index];

            if (parent && element && parent.priority < element.priority) {
                this._array[parentIndex] = element;
                this._array[index] = parent;

                this.heapify(parentIndex);
            }
        }
    }
}
