import { HeapElement } from './HeapElement';

export class BinaryHeap {
    constructor(array: HeapElement[]) {
        this._array = array;
    }

    private readonly _array: HeapElement[];

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

    private left(index: number) {
        const leftIndex = index * 2 + 1;

        return leftIndex < this.size() ? leftIndex : null;
    }

    private right(index: number) {
        const rightIndex = index * 2 + 2;

        return rightIndex < this.size() ? rightIndex : null;
    }

    private heapify(index = 0) {
        const leftIndex = this.left(index);
        const rightIndex = this.right(index);

        // Get the smallest element
        let biggestIndex: number = index;
        if (leftIndex && this._array[leftIndex].priority > this._array[biggestIndex].priority) {
            biggestIndex = leftIndex;
        }

        if (rightIndex && this._array[rightIndex].priority > this._array[rightIndex].priority) {
            biggestIndex = rightIndex;
        }

        if (biggestIndex !== index) {
            this.swap(biggestIndex, index);
            this.heapify(biggestIndex);
        }
    }

    private maintainHeap(index: number) {
        const parentIndex = this.getParentIndex(index);

        if (parentIndex !== null) {
            const parent = this._array[parentIndex];
            const element = this._array[index];

            if (parent && element && parent.priority < element.priority) {
                this.swap(parentIndex, index);

                this.maintainHeap(parentIndex);
            }
        }
    }

    private swap(indexA: number, indexB: number) {
        const eltA = this._array[indexA];

        this._array[indexA] = this._array[indexB];
        this._array[indexB] = eltA;
    }
}
