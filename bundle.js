(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('snabbdom')) :
  typeof define === 'function' && define.amd ? define(['snabbdom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.snabbdom));
}(this, (function (snabbdom) { 'use strict';

  console.log(snabbdom.init, snabbdom.classModule);

})));
