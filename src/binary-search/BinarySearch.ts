import { IArrayElement } from './IArrayElement';
import { ISearchResult } from './ISearchResult';

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
    const end = this._array.length - 1;

    return this.findElement(priority, start, end);
  }

  /**
   * Finds given element in a linear fashion.
   * Added for comparison purposes
   * Always finds the first one
   */
  public findLinear(priority: number): ISearchResult {
    if (!this._array.length) {
      return this.buildSearchResult(null, 0, 1);
    }

    let i = 0;
    for (; i < this._array.length; i++) {
      const element = this._array[i];
      if (element.priority === priority) {
        return this.buildSearchResult(element, i, i);
      }
    }

    return this.buildSearchResult(null, i, i);
  }

  /**
   * Helper function for recursive calls to binary search
   */
  private findElement(priority: number, start: number, end: number, iterations = 1): ISearchResult {
    if (start > end) {
      return this.buildSearchResult(null, 0, iterations);
    }

    // We can skip that, but this will allow us for quicker termination
    // (we won't calculate MID again and access element)
    if (start === end) {
      return this.buildSearchResult(
        this._array[start],
        start,
        iterations,
      );
    }

    const middle = start + Math.floor((end - start) / 2);
    const middleElement = this._array[middle];

    if (middleElement.priority === priority) {
      return this.buildSearchResult(middleElement, middle, iterations);
    }

    // Go left
    if (middleElement.priority > priority) {
      return this.findElement(priority, start, middle - 1, ++iterations);
    }

    // Go right
    return this.findElement(priority, middle + 1, end, ++iterations);
  }

  private buildSearchResult(element: (IArrayElement | null), index: number, iterations: number): ISearchResult {
    return {
      element,
      index,
      iterations,
    };
  }
}
