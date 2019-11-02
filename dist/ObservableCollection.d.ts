import { Observable } from 'rxjs';
export interface ObservableCollection {
    items$: Observable<any>;
}
