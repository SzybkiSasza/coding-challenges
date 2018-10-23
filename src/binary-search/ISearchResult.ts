import { IArrayElement } from './IArrayElement';

export interface ISearchResult {
  index: number;
  element: IArrayElement | null;
  iterations: number;
}
