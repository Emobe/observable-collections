import { Observable } from 'rxjs';
import { ObservableCollection } from './ObservableCollection';
export default class ObservableList<T> implements ObservableCollection {
    items$: Observable<T[]>;
    private items;
    private subject;
    constructor(entries?: T[]);
    push(value: T): void;
    delete(index: number): void;
    private updateSubject;
}
