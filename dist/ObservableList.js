"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableList {
    constructor(entries) {
        this.items = [];
        this.subject = new rxjs_1.BehaviorSubject(this.items);
        if (entries) {
            this.items = entries;
        }
        this.items$ = this.subject.asObservable();
    }
    push(value) {
        this.items.push(value);
        this.updateSubject();
    }
    delete(index) {
        this.items[index] = undefined;
        this.updateSubject();
    }
    updateSubject() {
        this.subject.next(this.items);
    }
}
exports.default = ObservableList;
//# sourceMappingURL=ObservableList.js.map