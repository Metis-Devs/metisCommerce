"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var State;
(function (State) {
    State[State["Pending"] = 0] = "Pending";
    State[State["Confirmed"] = 1] = "Confirmed";
    State[State["Shipped"] = 2] = "Shipped";
    State[State["Transit"] = 3] = "Transit";
    State[State["Delivered"] = 4] = "Delivered";
})(State = exports.State || (exports.State = {}));
//# sourceMappingURL=types.js.map