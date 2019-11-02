import test from 'tape';
import ObservableList from './ObservableList';
import { skip } from 'rxjs/operators';

test('ObservableList should initialise', t => {
  const list = new ObservableList<string>();
  t.assert(list);
  t.end();
});

test('ObservableList should react to `push`', t => {
  const list = new ObservableList<string>();
  list.items$.pipe(skip(1)).subscribe(list => {
    t.pass('Subscription to `push` worked');
    t.end();
  });
  list.push('test');
});

test('ObservalbeList should react to `delete`', t => {
  const list = new ObservableList<string>(['hello']);
  list.items$.pipe(skip(1)).subscribe(list => {
    t.pass('Subscription to `delete` worked');
    t.end();
  });
  list.delete(0);
});
