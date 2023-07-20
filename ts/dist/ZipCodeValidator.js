"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator2 = exports.ZipCodeValidator1 = void 0;
class ZipCodeValidator1 {
    isAcceptable(s) {
        return s.length === 5;
    }
}
exports.ZipCodeValidator1 = ZipCodeValidator1;
class ZipCodeValidator2 {
    isAcceptable(s) {
        return /^[0-9]+$/.test(s);
    }
}
exports.ZipCodeValidator2 = ZipCodeValidator2;
