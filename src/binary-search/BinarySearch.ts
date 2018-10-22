import { IArrayElement } from './IArrayElement';

export class BinarySearch {
  constructor(array: IArrayElement[] = []) {
    this._array = array;
  }

  private _array: IArrayElement[];

    /**
     * Finds element of given priority
     * As it's using binary "divide and conquer" it may not find the first element in the case of duplicates.
     */
  public find(priority: number) {
    const start = 0;
    const end = this._array.length;

    return this.findElement(priority, start, end);
  }

    /**
     * Finds given element in a linear fashion.
     * Added for comparison purposes
     * Always finds the first one
     */
  public findLinear(priority: number) {
    if (!this._array.length) {
      return null;
    }

    for (let i = 0; i < this._array.length; i++) {
      const element = this._array[i];
      if (element.priority === priority) {
        return element;
      }
    }

    return null;
  }

    /**
     * Helper function for recursive calls to binary search
     */
  private findElement(priority: number, start: number, end: number) {

  }
}
