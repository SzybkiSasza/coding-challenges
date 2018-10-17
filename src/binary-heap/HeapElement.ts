export class HeapElement {
    constructor(priority: number, data: any) {
        this._priority = priority;
        this._data = data;
    }

    private readonly _priority: number;
    private _data: any;

    get priority(): number {
        return this._priority;
    }
}
