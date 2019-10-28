import test from 'tape';
import ObservableMap from './ObservableMap';
import { skip } from 'rxjs/operators'


test('ObservableMap should initialise', t => {
  const map = new ObservableMap<string, number>();
  t.assert(map);
  t.end();
})

test('ObservableMap should react to `set`', t => {
  const map = new ObservableMap<string, number>();
  map.items$.pipe(skip(1)).subscribe(map => {
    t.pass('Subscription to `set` worked')
    t.end();
  })
  map.set('test', 3);
})

test('ObservalbeMap should react to `delete`', t => {
  const map = new ObservableMap<string, number>([['hello', 4]])
  map.items$.pipe(skip(1)).subscribe(map => {
    t.pass('Subscription to `delete` worked')
    t.end();
  })
  map.delete('hello');
})