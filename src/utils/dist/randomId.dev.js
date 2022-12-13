"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uid = uid;

function uid() {
  var a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36) + Array.from(a).map(function (A) {
    return A.toString(36);
  }).join("")).replace(/\./g, "");
}