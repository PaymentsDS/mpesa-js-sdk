"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Environment = /*#__PURE__*/function () {
  function Environment(args) {
    _classCallCheck(this, Environment);

    if (args !== null && args !== undefined) {
      var _iterator = _createForOfIteratorHelper(Environment.defaultProperties),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (Object.prototype.hasOwnProperty.call(args, key)) {
            this[key] = args[key];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  _createClass(Environment, [{
    key: "toURL",
    value: function toURL() {
      return "".concat(this.scheme, "://").concat(this.domain);
    }
    /**
     * Creates environment object from a given URL
     * @param {string} url 
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return this.scheme != null && this.domain != null;
    }
  }], [{
    key: "fromURL",
    value: function fromURL(url) {
      var parts;

      if (/^https:\/\//.test(url) || /^http:\/\//.test(url)) {
        parts = url.split("://");
      } else {
        parts = ["https", url];
      }

      return new Environment({
        scheme: parts[0],
        domain: parts[1]
      });
    }
  }]);

  return Environment;
}();

exports.Environment = Environment;
Environment.defaultProperties = ["name", "scheme", "domain"];