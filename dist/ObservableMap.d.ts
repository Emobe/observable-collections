export default class ObservableMap<K, V> {
    private items;
    private subject;
    items$: import("rxjs").Observable<Map<K, V>>;
    constructor(entries?: [K, V][]);
    set(key: K, value: V): void;
    delete(key: K): void;
    updateSubject(): void;
}
