import { BehaviorSubject, Observable } from 'rxjs';
import { ObservableCollection } from './ObservableCollection';

export default class ObservableList<T> implements ObservableCollection {
  public items$: Observable<T[]>;
  private items: T[] = [];
  private subject = new BehaviorSubject<T[]>(this.items);

  constructor(entries?: T[]) {
    if (entries) {
      this.items = entries;
    }
    this.items$ = this.subject.asObservable();
  }

  push(value: T) {
    this.items.push(value);
    this.updateSubject();
  }

  delete(index: number) {
    this.items[index] = undefined;
    this.updateSubject();
  }

  private updateSubject() {
    this.subject.next(this.items);
  }
}
