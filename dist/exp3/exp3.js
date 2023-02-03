"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addition = void 0;
class Addition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Sum() {
        console.log("Sum:", this.x + this.y);
    }
}
exports.Addition = Addition;
