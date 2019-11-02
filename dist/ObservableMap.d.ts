import { ObservableCollection } from './ObservableCollection';
export default class ObservableMap<K, V> implements ObservableCollection {
    private items;
    private subject;
    items$: import("rxjs").Observable<Map<K, V>>;
    constructor(entries?: [K, V][]);
    set(key: K, value: V): void;
    delete(key: K): void;
    updateSubject(): void;
}
