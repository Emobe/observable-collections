import { BehaviorSubject } from 'rxjs';
import { ObservableCollection } from './ObservableCollection';

export default class ObservableMap<K, V> implements ObservableCollection {
  private items: Map<K, V>;
  private subject = new BehaviorSubject<Map<K, V>>(this.items);
  public items$ = this.subject.asObservable();

  constructor(entries?: [K, V][]) {
    this.items = new Map<K, V>(entries);
  }

  set(key: K, value: V) {
    this.items.set(key, value);
    this.updateSubject();
  }

  delete(key: K) {
    this.items.delete(key);
    this.updateSubject();
  }

  updateSubject() {
    this.subject.next(this.items);
  }
}
