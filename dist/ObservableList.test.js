"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const ObservableList_1 = __importDefault(require("./ObservableList"));
const operators_1 = require("rxjs/operators");
tape_1.default('ObservableList should initialise', t => {
    const list = new ObservableList_1.default();
    t.assert(list);
    t.end();
});
tape_1.default('ObservableList should react to `push`', t => {
    const list = new ObservableList_1.default();
    list.items$.pipe(operators_1.skip(1)).subscribe(list => {
        t.pass('Subscription to `push` worked');
        t.end();
    });
    list.push('test');
});
tape_1.default('ObservalbeList should react to `delete`', t => {
    const list = new ObservableList_1.default(['hello']);
    list.items$.pipe(operators_1.skip(1)).subscribe(list => {
        t.pass('Subscription to `delete` worked');
        t.end();
    });
    list.delete(0);
});
//# sourceMappingURL=ObservableList.test.js.map