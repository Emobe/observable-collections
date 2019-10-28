"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableMap {
    constructor(entries) {
        this.subject = new rxjs_1.BehaviorSubject(this.items);
        this.items$ = this.subject.asObservable();
        this.items = new Map(entries);
    }
    set(key, value) {
        this.items.set(key, value);
        this.updateSubject();
    }
    delete(key) {
        this.items.delete(key);
        this.updateSubject();
    }
    updateSubject() {
        this.subject.next(this.items);
    }
}
exports.default = ObservableMap;
//# sourceMappingURL=ObservableMap.js.map