export class HeapElement {
  constructor(priority: number, data: any) {
    this._priority = priority;
    this._data = data;
  }

  private _priority: number;
  private _data: any;

  set priority(newPriority: number) {
    this._priority = newPriority;
  }

  get priority(): number {
    return this._priority;
  }
}
