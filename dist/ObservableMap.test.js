"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const ObservableMap_1 = __importDefault(require("./ObservableMap"));
const operators_1 = require("rxjs/operators");
tape_1.default('ObservableMap should initialise', t => {
    const map = new ObservableMap_1.default();
    t.assert(map);
    t.end();
});
tape_1.default('ObservableMap should react to `set`', t => {
    const map = new ObservableMap_1.default();
    map.items$.pipe(operators_1.skip(1)).subscribe(map => {
        t.pass('Subscription to `set` worked');
        t.end();
    });
    map.set('test', 3);
});
tape_1.default('ObservalbeMap should react to `delete`', t => {
    const map = new ObservableMap_1.default([['hello', 4]]);
    map.items$.pipe(operators_1.skip(1)).subscribe(map => {
        t.pass('Subscription to `delete` worked');
        t.end();
    });
    map.delete('hello');
});
//# sourceMappingURL=ObservableMap.test.js.map