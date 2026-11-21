(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E3(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C(H2, E3.prototype);
      H2.isPureReactComponent = true;
      var I3 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M2(a, b, e2) {
        var d, c = {}, k3 = null, h2 = null;
        if (null != b) for (d in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k3 = "" + b.key), b) J2.call(b, d) && !L2.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k3, ref: h2, props: c, _owner: K2.current };
      }
      function N3(a, b) {
        return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O2(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P2 = /\/+/g;
      function Q2(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R3(a, b, e2, d, c) {
        var k3 = typeof a;
        if ("undefined" === k3 || "boolean" === k3) a = null;
        var h2 = false;
        if (null === a) h2 = true;
        else switch (k3) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h2 = true;
            }
        }
        if (h2) return h2 = a, c = c(h2), a = "" === d ? "." + Q2(h2, 0) : d, I3(c) ? (e2 = "", null != a && (e2 = a.replace(P2, "$&/") + "/"), R3(c, b, e2, "", function(a2) {
          return a2;
        })) : null != c && (O2(c) && (c = N3(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P2, "$&/") + "/") + a)), b.push(c)), 1;
        h2 = 0;
        d = "" === d ? "." : d + ":";
        if (I3(a)) for (var g = 0; g < a.length; g++) {
          k3 = a[g];
          var f2 = d + Q2(k3, g);
          h2 += R3(k3, b, e2, f2, c);
        }
        else if (f2 = A2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k3 = a.next()).done; ) k3 = k3.value, f2 = d + Q2(k3, g++), h2 += R3(k3, b, e2, f2, c);
        else if ("object" === k3) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S(a, b, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b.call(e2, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W3 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      function X3() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e2) {
        S(a, function() {
          b.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O2(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W3;
      exports.act = X3;
      exports.cloneElement = function(a, b, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k3 = a.ref, h2 = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k3 = b.ref, h2 = K2.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b) J2.call(b, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k3, props: d, _owner: h2 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M2;
      exports.createFactory = function(a) {
        var b = M2.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O2;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x2, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = X3;
      exports.useCallback = function(a, b) {
        return U3.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U3.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e2) {
        return U3.current.useImperativeHandle(a, b, e2);
      };
      exports.useInsertionEffect = function(a, b) {
        return U3.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U3.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U3.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e2) {
        return U3.current.useReducer(a, b, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e2) {
        return U3.current.useSyncExternalStore(a, b, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b)) a[d] = b, a[c] = e2, c = d;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k3(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x2 = a[n];
            if (0 > g(C, c)) n < e2 && 0 > g(x2, C) ? (a[d] = x2, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x2, c)) a[d] = x2, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q2 = p.now();
        exports.unstable_now = function() {
          return p.now() - q2;
        };
      }
      var l2;
      var p;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z3 = false;
      var A2 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h2(t); null !== b; ) {
          if (null === b.callback) k3(t);
          else if (b.startTime <= a) k3(t), b.sortIndex = b.expirationTime, f2(r, b);
          else break;
          b = h2(t);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h2(r)) A2 = true, I3(J2);
        else {
          var b = h2(t);
          null !== b && K2(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E3(L2), L2 = -1);
        z3 = true;
        var c = y;
        try {
          G2(b);
          for (v = h2(r); null !== v && (!(v.expirationTime > b) || a && !M2()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e2 = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e2 ? v.callback = e2 : v === h2(r) && k3(r);
              G2(b);
            } else k3(r);
            v = h2(r);
          }
          if (null !== v) var w2 = true;
          else {
            var m = h2(t);
            null !== m && K2(H2, m.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v = null, y = c, z3 = false;
        }
      }
      var N3 = false;
      var O2 = null;
      var L2 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R3() {
        if (null !== O2) {
          var a = exports.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S() : (N3 = false, O2 = null);
          }
        } else N3 = false;
      }
      var S;
      if ("function" === typeof F2) S = function() {
        F2(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U3 = T.port2;
        T.port1.onmessage = R3;
        S = function() {
          U3.postMessage(null);
        };
      } else S = function() {
        D2(R3, 0);
      };
      var T;
      var U3;
      function I3(a) {
        O2 = a;
        N3 || (N3 = true, S());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z3 || (A2 = true, I3(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h2(r) && a === h2(t) && (B2 ? (E3(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A2 || z3 || (A2 = true, I3(J2)));
        return a;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b) {
        ha2(a, b);
        ha2(a + "Capture", b);
      }
      function ha2(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa2(a) {
        if (ja.call(ma2, a)) return true;
        if (ja.call(la2, a)) return false;
        if (ka2.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa2(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z3[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra2,
          sa2
        );
        z3[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b, c, d) {
        var e2 = z3.hasOwnProperty(b) ? z3[b] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e2, d) && (c = null), d || null === e2 ? oa2(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b && b[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; ) h2--;
            for (; 1 <= g && 0 <= h2; g--, h2--) if (e2[g] !== f2[h2]) {
              if (1 !== g || 1 !== h2) {
                do
                  if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                    var k3 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                    return k3;
                  }
                while (1 <= g && 0 <= h2);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b = a.displayName || null, null !== b ? b : Qa2(a.type) || "Memo";
          case Ha2:
            b = a._payload;
            a = a._init;
            try {
              return Qa2(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b);
          case 8:
            return b === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya2(a, b) {
        var c = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa2(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta2(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa2(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa2(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e2 = 0; e2 < c.length; e2++) b["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b || a[e2].disabled || (b = a[e2]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b) {
        var c = Sa2(b.value), d = Sa2(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e2);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e2, f2, g, h2, k3) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e2, f2, g, h2, k3) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e2, f2, g, h2, k3) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h2 = e2.child; h2; ) {
              if (h2 === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h2 === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g) {
              for (h2 = f2.child; h2; ) {
                if (h2 === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h2 === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc2 = ca2.unstable_cancelCallback;
      var cc2 = ca2.unstable_shouldYield;
      var dc2 = ca2.unstable_requestPaint;
      var B2 = ca2.unstable_now;
      var ec2 = ca2.unstable_getCurrentPriorityLevel;
      var fc2 = ca2.unstable_ImmediatePriority;
      var gc2 = ca2.unstable_UserBlockingPriority;
      var hc2 = ca2.unstable_NormalPriority;
      var ic2 = ca2.unstable_LowPriority;
      var jc2 = ca2.unstable_IdlePriority;
      var kc2 = null;
      var lc2 = null;
      function mc2(a) {
        if (lc2 && "function" === typeof lc2.onCommitFiberRoot) try {
          lc2.onCommitFiberRoot(kc2, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc2 = Math.clz32 ? Math.clz32 : nc2;
      var pc2 = Math.log;
      var qc = Math.LN2;
      function nc2(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc2(a) / qc | 0) | 0;
      }
      var rc2 = 64;
      var sc2 = 4194304;
      function tc2(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc2(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h2 = g & ~e2;
          0 !== h2 ? d = tc2(h2) : (f2 &= g, 0 !== f2 && (d = tc2(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc2(g) : 0 !== f2 && (d = tc2(f2));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc2(b), e2 = 1 << c, d |= a[c], b &= ~e2;
        return d;
      }
      function vc2(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc2(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc2(f2), h2 = 1 << g, k3 = e2[g];
          if (-1 === k3) {
            if (0 === (h2 & c) || 0 !== (h2 & d)) e2[g] = vc2(h2, b);
          } else k3 <= b && (a.expiredLanes |= h2);
          f2 &= ~h2;
        }
      }
      function xc2(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc2() {
        var a = rc2;
        rc2 <<= 1;
        0 === (rc2 & 4194240) && (rc2 = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac2(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc2(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc2(c), f2 = 1 << e2;
          b[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc2(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc2(c), e2 = 1 << d;
          e2 & b | a[d] & b && (a[d] |= b);
          c &= ~e2;
        }
      }
      var C = 0;
      function Dc2(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec2;
      var Fc2;
      var Gc;
      var Hc2;
      var Ic2;
      var Jc2 = false;
      var Kc2 = [];
      var Lc2 = null;
      var Mc2 = null;
      var Nc2 = null;
      var Oc2 = /* @__PURE__ */ new Map();
      var Pc2 = /* @__PURE__ */ new Map();
      var Qc2 = [];
      var Rc2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc2(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc2 = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc2 = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc2 = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc2.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc2.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc2(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
        return a;
      }
      function Uc2(a, b, c, d, e2) {
        switch (b) {
          case "focusin":
            return Lc2 = Tc(Lc2, a, b, c, d, e2), true;
          case "dragenter":
            return Mc2 = Tc(Mc2, a, b, c, d, e2), true;
          case "mouseover":
            return Nc2 = Tc(Nc2, a, b, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc2.set(f2, Tc(Oc2.get(f2) || null, a, b, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc2.set(f2, Tc(Pc2.get(f2) || null, a, b, c, d, e2)), true;
        }
        return false;
      }
      function Vc2(a) {
        var b = Wc2(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic2(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc2(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc2(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc2(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc2(a, b, c) {
        Xc2(a) && c.delete(b);
      }
      function $c() {
        Jc2 = false;
        null !== Lc2 && Xc2(Lc2) && (Lc2 = null);
        null !== Mc2 && Xc2(Mc2) && (Mc2 = null);
        null !== Nc2 && Xc2(Nc2) && (Nc2 = null);
        Oc2.forEach(Zc2);
        Pc2.forEach(Zc2);
      }
      function ad2(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc2 || (Jc2 = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad2(b2, a);
        }
        if (0 < Kc2.length) {
          ad2(Kc2[0], a);
          for (var c = 1; c < Kc2.length; c++) {
            var d = Kc2[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc2 && ad2(Lc2, a);
        null !== Mc2 && ad2(Mc2, a);
        null !== Nc2 && ad2(Nc2, a);
        Oc2.forEach(b);
        Pc2.forEach(b);
        for (c = 0; c < Qc2.length; c++) d = Qc2[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc2.length && (c = Qc2[0], null === c.blockedOn); ) Vc2(c), null === c.blockedOn && Qc2.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function gd2(a, b, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e2 = Yc2(a, b, c, d);
          if (null === e2) hd2(a, b, d, id2, c), Sc2(a, d);
          else if (Uc2(e2, a, b, c, d)) d.stopPropagation();
          else if (Sc2(a, d), b & 4 && -1 < Rc2.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec2(f2);
              f2 = Yc2(a, b, c, d);
              null === f2 && hd2(a, b, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b, d, null, c);
        }
      }
      var id2 = null;
      function Yc2(a, b, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc2(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec2()) {
              case fc2:
                return 1;
              case gc2:
                return 4;
              case hc2:
              case ic2:
                return 16;
              case jc2:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld2 = null;
      var md2 = null;
      function nd() {
        if (md2) return md2;
        var a, b = ld2, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
        for (a = 0; a < c && b[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e2, f2, g) {
          this._reactName = b2;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b;
      }
      var sd2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td2 = rd(sd2);
      var ud2 = A2({}, sd2, { view: 0, detail: 0 });
      var vd = rd(ud2);
      var wd2;
      var xd2;
      var yd;
      var Ad = A2({}, ud2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd2 = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd2 = 0, yd = a);
        return wd2;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd2 = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud2, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd2, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd2, { data: 0 });
      var Ld = rd(Kd);
      var Md2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd2;
      }
      var Qd2 = A2({}, ud2, { key: function(a) {
        if (a.key) {
          var b = Md2[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd2);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd2 = A2({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd2 = rd(Yd2);
      var $d = [9, 13, 27, 32];
      var ae3 = ia2 && "CompositionEvent" in window;
      var be3 = null;
      ia2 && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia2 && "TextEvent" in window && !be3;
      var de3 = ia2 && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee2 = String.fromCharCode(32);
      var fe3 = false;
      function ge2(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he3(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je3(a, b) {
        switch (a) {
          case "compositionend":
            return he3(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b) {
        if (ie3) return "compositionend" === a || !ae3 && ge2(a, b) ? (a = nd(), md2 = ld2 = kd = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de3 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le3[a.type] : "textarea" === b ? true : false;
      }
      function ne3(a, b, c, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c = new td2("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe3 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b = ue3(a);
        if (Wa2(b)) return a;
      }
      function ve3(a, b) {
        if ("change" === a) return b;
      }
      var we3 = false;
      if (ia2) {
        if (ia2) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe3 = ye3;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye3;
      var ze3;
      function Ae2() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe3 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b = [];
          ne3(b, qe3, a, xb(a));
          Jb(re3, b);
        }
      }
      function Ce3(a, b, c) {
        "focusin" === a ? (Ae2(), pe3 = b, qe3 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae2();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee2(a, b) {
        if ("click" === a) return te3(b);
      }
      function Fe2(a, b) {
        if ("input" === a || "change" === a) return te3(b);
      }
      function Ge3(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b) {
        if (He3(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b, e2) || !He3(a[e2], b[e2])) return false;
        }
        return true;
      }
      function Je3(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b) {
        var c = Je3(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je3(c);
        }
      }
      function Le3(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le3(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b = Xa2(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa2(a.document);
        }
        return b;
      }
      function Ne3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re3 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue3(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe3 || Qe3 !== Xa2(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe2(Re3, "onSelect"), 0 < d.length && (b = new td2("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe3)));
      }
      function Ve2(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We3 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye3 = {};
      ia2 && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze3(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We3[a]) return a;
        var b = We3[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye3) return Xe3[a] = b[c];
        return a;
      }
      var $e3 = Ze3("animationend");
      var af = Ze3("animationiteration");
      var bf = Ze3("animationstart");
      var cf = Ze3("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa2(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h2 = d[g], k3 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
            else for (g = 0; g < d.length; g++) {
              h2 = d[g];
              k3 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd;
        }
        c = e2.bind(null, b, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
      }
      function hd2(a, b, c, d, e2) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k3 = g.tag;
              if (3 === k3 || 4 === k3) {
                if (k3 = g.stateNode.containerInfo, k3 === e2 || 8 === k3.nodeType && k3.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h2; ) {
              g = Wc2(h2);
              if (null === g) return;
              k3 = g.tag;
              if (5 === k3 || 6 === k3) {
                d = f2 = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k4 = td2, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k4 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k4 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k4 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k4 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k4 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k4 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k4 = Vd;
                  break;
                case $e3:
                case af:
                case bf:
                  k4 = Hd;
                  break;
                case cf:
                  k4 = Xd;
                  break;
                case "scroll":
                  k4 = vd;
                  break;
                case "wheel":
                  k4 = Zd2;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k4 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k4 = Td;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F2 = u.stateNode;
                5 === u.tag && null !== F2 && (u = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t.push(tf(w2, F2, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k4(h3, n, null, c, e3), g2.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k4 = "mouseout" === a || "pointerout" === a;
              if (h3 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc2(n) || n[uf])) break a;
              if (k4 || h3) {
                h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k4) {
                  if (n = c.relatedTarget || c.toElement, k4 = d2, n = n ? Wc2(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k4 = null, n = d2;
                if (k4 !== n) {
                  t = Bd2;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                  J2 = null == k4 ? h3 : ue3(k4);
                  u = null == n ? h3 : ue3(n);
                  h3 = new t(F2, w2 + "leave", k4, c, e3);
                  h3.target = J2;
                  h3.relatedTarget = u;
                  F2 = null;
                  Wc2(e3) === d2 && (t = new t(x2, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k4 && n) b: {
                    t = k4;
                    x2 = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F2 = x2; F2; F2 = vf(F2)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k4 && wf(g2, h3, k4, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue3(d2) : window;
              k4 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k4 || "input" === k4 && "file" === h3.type) var na2 = ve3;
              else if (me3(h3)) if (we3) na2 = Fe2;
              else {
                na2 = De2;
                var xa2 = Ce3;
              }
              else (k4 = h3.nodeName) && "input" === k4.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na2 = Ee2);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h3, d2);
              "focusout" === a && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa2) || "true" === xa2.contentEditable) Qe3 = xa2, Re3 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re3 = Qe3 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a2;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge2(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de3 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a2 = nd()) : (kd = e3, ld2 = "value" in kd ? kd.value : kd.textContent, ie3 = true)), xa2 = oe2(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he3(c), null !== $a2 && (ba2.data = $a2))));
            if ($a2 = ce3 ? je3(a, c) : ke3(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe2(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e2) {
        for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
          var h2 = c, k3 = h2.alternate, l2 = h2.stateNode;
          if (null !== k3 && k3 === d) break;
          5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k3 = Kb(c, f2), null != k3 && g.unshift(tf(c, k3, h2))) : e2 || (k3 = Kb(c, f2), null != k3 && g.push(tf(c, k3, h2))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc2(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H2);
      }
      function ag(a, b, c) {
        if (H2.current !== Vf) throw Error(p(168));
        G2(H2, b);
        G2(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b)) throw Error(p(108, Ra2(a) || "Unknown", e2));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H2), G2(H2, a)) : E3(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc2, jg), e2;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc2(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc2(b) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc2(b) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I3 = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I3) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I3 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I3 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I3) return Fg(a), I3 = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I3 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
            b = function(a2) {
              var b2 = e2.refs;
              null === a2 ? delete b2[f2] : b2[f2] = a2;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e2(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h2(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k3(a2, b2, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b2.type)) return d2 = e2(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f3) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q2(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va2:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa2:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha2:
                var d2 = b2._init;
                return q2(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e3 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h2(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k3(a2, b2, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b2,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e3 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b2, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y(a2, b2, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e3, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e3, g2, h3, k4) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x2 = null; null !== u && w2 < h3.length; w2++) {
            u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
            var n2 = r(e3, u, h3[w2], k4);
            if (null === n2) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n2.alternate && b(e3, u);
            g2 = f2(n2, g2, w2);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x2;
          }
          if (w2 === h3.length) return c(e3, u), I3 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h3.length; w2++) u = q2(e3, h3[w2], k4), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I3 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h3.length; w2++) x2 = y(u, e3, w2, h3[w2], k4), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h3, k4) {
          var l3 = Ka(h3);
          if ("function" !== typeof l3) throw Error(p(150));
          h3 = l3.call(h3);
          if (null == h3) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n2 = h3.next(); null !== m2 && !n2.done; w2++, n2 = h3.next()) {
            m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e3, m2, n2.value, k4);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I3 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h3.next()) n2 = q2(e3, n2.value, k4), null !== n2 && (g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I3 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n2.done; w2++, n2 = h3.next()) n2 = y(m2, e3, w2, n2.value, k4), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h3) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k4 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k4) {
                      k4 = f3.type;
                      if (k4 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === Ha2 && Ng(k4) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d2, f3), h3.return = a2, a2 = h3);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h3);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
            }
            if (eb(f3)) return n(a2, d2, f3, h3);
            if (Ka(f3)) return t(a2, d2, f3, h3);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E3(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e2 = b.interleaved;
        null === e2 ? (c.next = c, gh(b)) : (c.next = e2.next, e2.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b.next = b, gh(d)) : (b.next = e2.next, e2.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc2(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b : f2 = f2.next = b;
          } else e2 = f2 = b;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
        if (null !== h2) {
          e2.shared.pending = null;
          var k3 = h2, l2 = k3.next;
          k3.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k3;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g && (null === h2 ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k3));
        }
        if (null !== f2) {
          var q2 = e2.baseState;
          g = 0;
          m = l2 = k3 = null;
          h2 = f2;
          do {
            var r = h2.lane, y = h2.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var n = a, t = h2;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A2({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h2] : r.push(h2));
            } else y = { eventTime: y, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l2 = m = y, k3 = q2) : m = m.next = y, g |= r;
            h2 = h2.next;
            if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
            else r = h2, h2 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k3 = q2);
          e2.baseState = k3;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b = e2.shared.interleaved;
          if (null !== b) {
            e2 = b;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G2(wh, b);
        G2(vh, a);
        G2(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E3(uh);
        G2(uh, b);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M2 = null;
      var N3 = null;
      var O2 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P2() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He3(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e2, f2) {
        Hh = f2;
        M2 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O2 = N3 = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N3 && null !== N3.next;
        Hh = 0;
        O2 = N3 = M2 = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O2 ? M2.memoizedState = O2 = a : O2 = O2.next = a;
        return O2;
      }
      function Uh() {
        if (null === N3) {
          var a = M2.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N3.next;
        var b = null === O2 ? M2.memoizedState : O2.next;
        if (null !== b) O2 = b, N3 = a;
        else {
          if (null === a) throw Error(p(310));
          N3 = a;
          a = { memoizedState: N3.memoizedState, baseState: N3.baseState, baseQueue: N3.baseQueue, queue: N3.queue, next: null };
          null === O2 ? M2.memoizedState = O2 = a : O2 = O2.next = a;
        }
        return O2;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N3, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h2 = g = null, k3 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k3 && (k3 = k3.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k3 ? (h2 = k3 = q2, g = d) : k3 = k3.next = q2;
              M2.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k3 ? g = d : k3.next = h2;
          He3(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k3;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b.memoizedState) || (dh = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M2, d = Uh(), e2 = b(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai2.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f2 || null !== O2 && O2.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b), void 0, null);
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e2);
        }
        return e2;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei2(b) && fi(a);
      }
      function ai2(a, b, c) {
        return c(function() {
          ei2(b) && fi(a);
        });
      }
      function ei2(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi2(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii2.bind(null, M2, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji2() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e2 = Th();
        M2.flags |= a;
        e2.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N3) {
          var g = N3.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b, c, f2, d);
            return;
          }
        }
        M2.flags |= a;
        e2.memoizedState = bi(1 | b, c, f2, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni2(a, b) {
        return li(4, 2, a, b);
      }
      function oi2(a, b) {
        return li(4, 4, a, b);
      }
      function pi2(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi2(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi2.bind(null, b, a), c);
      }
      function ri2() {
      }
      function si2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui2(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b) || (c = yc2(), M2.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi2() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e2 = R3();
          gi2(c, a, d, e2);
          Bi2(c, b, d);
        }
      }
      function ii2(a, b, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
            var g = b.lastRenderedState, h2 = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He3(h2, g)) {
              var k3 = b.interleaved;
              null === k3 ? (e2.next = e2, gh(b)) : (e2.next = k3.next, k3.next = e2);
              b.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b, e2, d);
          null !== c && (e2 = R3(), gi2(c, a, d, e2), Bi2(c, b, d));
        }
      }
      function zi2(a) {
        var b = a.alternate;
        return a === M2 || null !== b && b === M2;
      }
      function Ai2(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi2(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc2(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi2.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M2, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M2, e2 = Th();
        if (I3) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b };
        e2.queue = f2;
        mi(ai2.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q2.identifierPrefix;
        if (I3) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc2(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si2,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi2,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh,
        useRef: ji2,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui2(b, N3.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi2,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji2, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b = Uh();
        return null === N3 ? b.memoizedState = a : ui2(b, N3.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi2, unstable_isNewReconciler: false };
      function Ci2(a, b) {
        if (a && a.defaultProps) {
          b = A2({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di2(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A2({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei2 = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R3(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b && null !== b && (e2.callback = b);
        b = nh(a, e2, d);
        null !== b && (gi2(b, a, d, c), oh(b, a, d));
      } };
      function Fi2(a, b, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi2(a, b, c) {
        var d = false, e2 = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b) ? Xf : H2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b = new b(c, f2);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei2;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function Hi2(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei2.enqueueReplaceState(b, b.state, null);
      }
      function Ii2(a, b, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b) ? Xf : H2.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (Di2(a, b, f2, c), e2.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && Ei2.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji2(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b, stack: e2, digest: null };
      }
      function Ki2(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li2(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi2 || (Oi2 = true, Pi2 = d);
          Li2(a, b);
        };
        return c;
      }
      function Qi2(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li2(a, b);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li2(a, b);
          "function" !== typeof d && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si2(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi2();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b, e2);
        } else e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
        e2.has(c) || (e2.add(c), a = Ti2.bind(null, a, b, c), b.then(a, a));
      }
      function Ui2(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi2(a, b, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi2 = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi2(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi2(a, b, c, d, e2) {
        c = c.render;
        var f2 = b.ref;
        ch(b, e2);
        d = Nh(a, b, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I3 && c && vg(b);
        b.flags |= 1;
        Xi2(a, b, d, e2);
        return b.child;
      }
      function $i2(a, b, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e2);
          a = Rg(c.type, null, d, b, b.mode, e2);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g, d) && a.ref === b.ref) return Zi2(a, b, e2);
        }
        b.flags |= 1;
        a = Pg(f2, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi2(a, b, e2);
        }
        return cj(a, b, c, d, e2);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G2(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi2(a, b, e2, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e2) {
        var f2 = Zf(c) ? Xf : H2.current;
        f2 = Yf(b, f2);
        ch(b, e2);
        c = Nh(a, b, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I3 && d && vg(b);
        b.flags |= 1;
        Xi2(a, b, c, e2);
        return b.child;
      }
      function hj(a, b, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b);
        } else f2 = false;
        ch(b, e2);
        if (null === b.stateNode) ij(a, b), Gi2(b, c, d), Ii2(b, c, d, e2), d = true;
        else if (null === a) {
          var g = b.stateNode, h2 = b.memoizedProps;
          g.props = h2;
          var k3 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k3 !== l2) && Hi2(b, g, d, l2);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          k3 = b.memoizedState;
          h2 !== d || r !== k3 || Wf.current || jh ? ("function" === typeof m && (Di2(b, c, m, d), k3 = b.memoizedState), (h2 = jh || Fi2(b, c, h2, d, r, k3, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k3), g.props = d, g.state = k3, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h2 = b.memoizedProps;
          l2 = b.type === b.elementType ? h2 : Ci2(b.type, h2);
          g.props = l2;
          q2 = b.pendingProps;
          r = g.context;
          k3 = c.contextType;
          "object" === typeof k3 && null !== k3 ? k3 = eh(k3) : (k3 = Zf(c) ? Xf : H2.current, k3 = Yf(b, k3));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r !== k3) && Hi2(b, g, d, k3);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          var n = b.memoizedState;
          h2 !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y && (Di2(b, c, y, d), n = b.memoizedState), (l2 = jh || Fi2(b, c, l2, d, r, n, k3) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k3), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k3)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k3, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f2, e2);
      }
      function jj(a, b, c, d, e2, f2) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e2 && dg(b, c, false), Zi2(a, b, f2);
        d = b.stateNode;
        Wi2.current = b;
        var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h2, f2)) : Xi2(a, b, h2, f2);
        b.memoizedState = d.state;
        e2 && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e2) {
        Ig();
        Jg(e2);
        b.flags |= 256;
        Xi2(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e2 = L2.current, f2 = false, g = 0 !== (b.flags & 128), h2;
        (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h2) f2 = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L2, e2 & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b, g, d, h2, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b.mode;
          e2 = a.child;
          h2 = e2.sibling;
          var k3 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k3, b.deletions = null) : (d = Pg(e2, k3), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e2, f2, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki2(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f2 = d.fallback;
          e2 = b.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f2;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h2 = d.dgst;
          d = h2;
          f2 = Error(p(419));
          d = Ki2(f2, d, void 0);
          return sj(a, b, g, d);
        }
        h2 = 0 !== (g & a.childLanes);
        if (dh || h2) {
          d = Q2;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi2(d, a, e2, -1));
          }
          tj();
          d = Ki2(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e2.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e2._reactRetry = b, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b;
        I3 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi2(a, b, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L2, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b.child;
            for (b.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b, true, c, null, f2);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi2(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e2 = b.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L2, L2.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G2(L2, L2.current & 1);
              a = Zi2(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G2(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e2 = b.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi2(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h2 = e2[l2];
            for (g in h2) h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k3 = d[l2];
            h2 = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k3 !== h2 && (null != k3 || null != h2)) if ("style" === l2) if (h2) {
              for (g in h2) !h2.hasOwnProperty(g) || k3 && k3.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k3) k3.hasOwnProperty(g) && h2[g] !== k3[g] && (c || (c = {}), c[g] = k3[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k3;
            else "dangerouslySetInnerHTML" === l2 ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k3 && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : "children" === l2 ? "string" !== typeof k3 && "number" !== typeof k3 || (f2 = f2 || []).push(l2, "" + k3) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k3 && "onScroll" === l2 && D2("scroll", a), f2 || h2 === k3 || (f2 = [])) : (f2 = f2 || []).push(l2, k3));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b.updateQueue = l2) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I3) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E3(Wf);
            E3(H2);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e2 = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h2 = f2[g];
                  "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea2.hasOwnProperty(g) && null != h2 && "onScroll" === g && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A2({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h2 = e2;
                  for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                    var k3 = h2[f2];
                    "style" === f2 ? sb(a, k3) : "dangerouslySetInnerHTML" === f2 ? (k3 = k3 ? k3.__html : void 0, null != k3 && nb(a, k3)) : "children" === f2 ? "string" === typeof k3 ? ("textarea" !== c || "" !== k3) && ob(a, k3) : "number" === typeof k3 && ob(a, "" + k3) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k3 && "onScroll" === f2 && D2("scroll", a) : null != k3 && ta2(a, f2, k3, g));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E3(L2);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I3 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E3(L2);
            f2 = b.memoizedState;
            if (null === f2) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B2() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I3) return S(b), null;
              } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B2(), b.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E3(Wf), E3(H2), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E3(L2);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E3(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W3(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W3(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me3();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g = 0, h2 = -1, k3 = -1, l2 = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k3 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y = q2.firstChild)) break;
                  r = q2;
                  q2 = y;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l2 === e2 && (h2 = g);
                  r === f2 && ++m === d && (k3 = g);
                  if (null !== (y = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y;
              }
              c = -1 === h2 || -1 === k3 ? null : { start: h2, end: k3 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V2 = b; null !== V2; ) if (b = V2, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V2 = a;
        else for (; null !== V2; ) {
          b = V2;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci2(b.type, t), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F2) {
            W3(b, b.return, F2);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X3 = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc2 && "function" === typeof lc2.onCommitFiberUnmount) try {
          lc2.onCommitFiberUnmount(kc2, c);
        } catch (h2) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b);
          case 6:
            var d = X3, e2 = Xj;
            X3 = null;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X3.removeChild(c.stateNode));
            break;
          case 18:
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X3, c.stateNode));
            break;
          case 4:
            d = X3;
            e2 = Xj;
            X3 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h2) {
              W3(c, b, h2);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b, c), U3 = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b, h2 = g;
            a: for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X3 = h2.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X3 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X3 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h2 = h2.return;
            }
            if (null === X3) throw Error(p(160));
            Zj(f2, g, e2);
            X3 = null;
            Xj = false;
            var k3 = e2.alternate;
            null !== k3 && (k3.return = null);
            e2.return = null;
          } catch (l2) {
            W3(e2, b, l2);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W3(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k3 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k3) try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g);
                var l2 = vb(h2, f2);
                for (g = 0; g < k3.length; g += 2) {
                  var m = k3[g], q2 = k3[g + 1];
                  "style" === m ? sb(e2, q2) : "dangerouslySetInnerHTML" === m ? nb(e2, q2) : "children" === m ? ob(e2, q2) : ta2(e2, m, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y = f2.value;
                    null != y ? fb(e2, !!f2.multiple, y, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W3(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b, a), U3 = l2) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V2 = a, m = a.child; null !== m; ) {
                for (q2 = V2 = m; null !== V2; ) {
                  r = V2;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W3(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V2 = y) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k3 = q2.memoizedProps.style, g = void 0 !== k3 && null !== k3 && k3.hasOwnProperty("display") ? k3.display : null, h2.style.display = rb("display", g));
                    } catch (t) {
                      W3(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t) {
                    W3(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h2 = Uj(a);
                Vj(a, h2, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k3) {
            W3(a, a.return, k3);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V2 = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V2; ) {
          var e2 = V2, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h2 = e2.alternate, k3 = null !== h2 && null !== h2.memoizedState || U3;
              h2 = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k3) && !l2) for (V2 = e2; null !== V2; ) g = V2, k3 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k3 ? (k3.return = g, V2 = k3) : jk(e2);
              for (; null !== f2; ) V2 = f2, ik(f2, b, c), f2 = f2.sibling;
              V2 = e2;
              Jj = h2;
              U3 = l2;
            }
            kk(a, b, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b.elementType === b.type ? c.memoizedProps : Ci2(b.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h2 = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h2;
                    var k3 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k3.autoFocus && c.focus();
                        break;
                      case "img":
                        k3.src && (c.src = k3.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b.flags & 512 && Rj(b);
            } catch (r) {
              W3(b, b.return, r);
            }
          }
          if (b === a) {
            V2 = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function gk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a) {
            V2 = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function jk(a) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k3) {
                  W3(b, c, k3);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k3) {
                    W3(b, e2, k3);
                  }
                }
                var f2 = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W3(b, f2, k3);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W3(b, g, k3);
                }
            }
          } catch (k3) {
            W3(b, b.return, k3);
          }
          if (b === a) {
            V2 = null;
            break;
          }
          var h2 = b.sibling;
          if (null !== h2) {
            h2.return = b.return;
            V2 = h2;
            break;
          }
          V2 = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q2 = null;
      var Y = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi2 = false;
      var Pi2 = null;
      var Ri2 = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R3() {
        return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc2()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi2(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac2(a, c, d);
        if (0 === (K2 & 2) || a !== Q2) a === Q2 && (0 === (K2 & 2) && (qk |= c), 4 === T && Ck(a, Z2)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b.mode & 1) && (Gj = B2() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc2(a, b);
        var d = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d) null !== c && bc2(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc2(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc2(d)) {
              case 1:
                c = fc2;
                break;
              case 4:
                c = gc2;
                break;
              case 16:
                c = hc2;
                break;
              case 536870912:
                c = jc2;
                break;
              default:
                c = hc2;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q2 !== a || Z2 !== b) uk = null, Gj = B2() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h2) {
              Mk(a, h2);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y ? b = 0 : (Q2 = null, Z2 = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e2 = xc2(a), 0 !== e2 && (d = e2, b = Nk(a, e2)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
          if (6 === b) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b = Ik(a, d), 2 === b && (f2 = xc2(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B2(), 10 < b)) {
                  if (0 !== uc2(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R3();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc2(d);
                  f2 = 1 << g;
                  g = b[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B2() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B2());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc2(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b = uc2(a, 0);
        if (0 === (b & 1)) return Dk(a, B2()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc2(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B2()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B2());
        return null;
      }
      function Qk(a, b) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b);
        } finally {
          K2 = c, 0 === K2 && (Gj = B2() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b = K2;
        K2 |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K2 = b, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H2);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L2);
              break;
            case 19:
              E3(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q2 = a;
        Y = a = Pg(a.current, null);
        Z2 = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M2.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O2 = N3 = M2 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h2 = c, k3 = b;
              b = Z2;
              h2.flags |= 32768;
              if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
                var l2 = k3, m = h2, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui2(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi2(y, g, h2, f2, b);
                  y.mode & 1 && Si2(f2, l2, b);
                  b = y;
                  k3 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k3);
                    b.updateQueue = t;
                  } else n.add(k3);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si2(f2, l2, b);
                    tj();
                    break a;
                  }
                  k3 = Error(p(426));
                }
              } else if (I3 && h2.mode & 1) {
                var J2 = Ui2(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi2(J2, g, h2, f2, b);
                  Jg(Ji2(k3, h2));
                  break a;
                }
              }
              f2 = k3 = Ji2(k3, h2);
              4 !== T && (T = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x2 = Ni(f2, k3, b);
                    ph(f2, x2);
                    break a;
                  case 1:
                    h2 = k3;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri2 || !Ri2.has(u)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F2 = Qi2(f2, h2, b);
                      ph(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b = na2;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
      }
      function Ik(a, b) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q2 !== a || Z2 !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q2 = null;
        Z2 = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc2(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e2 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e2, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q2 && (Y = Q2 = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc2, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h2 = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc2();
          K2 = h2;
          C = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri2 = null);
        mc2(c.stateNode, d);
        Dk(a, B2());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi2) throw Oi2 = false, a = Pi2, Pi2 = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc2(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V2 = a.current; null !== V2; ) {
                var f2 = V2, g = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h2 = f2.deletions;
                  if (null !== h2) {
                    for (var k3 = 0; k3 < h2.length; k3++) {
                      var l2 = h2[k3];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V2 = q2;
                        else for (; null !== V2; ) {
                          m = V2;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V2 = r;
                            break;
                          }
                          V2 = y;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V2 = g;
                else b: for (; null !== V2; ) {
                  f2 = V2;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V2 = x2;
                    break b;
                  }
                  V2 = f2.return;
                }
              }
              var w2 = a.current;
              for (V2 = w2; null !== V2; ) {
                g = V2;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V2 = u;
                else b: for (g = w2; null !== V2; ) {
                  h2 = V2;
                  if (0 !== (h2.flags & 2048)) try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h2);
                    }
                  } catch (na2) {
                    W3(h2, h2.return, na2);
                  }
                  if (h2 === g) {
                    V2 = null;
                    break b;
                  }
                  var F2 = h2.sibling;
                  if (null !== F2) {
                    F2.return = h2.return;
                    V2 = F2;
                    break b;
                  }
                  V2 = h2.return;
                }
              }
              K2 = e2;
              jg();
              if (lc2 && "function" === typeof lc2.onPostCommitFiberRoot) try {
                lc2.onPostCommitFiberRoot(kc2, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji2(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R3();
        null !== a && (Ac2(a, 1, b), Dk(a, b));
      }
      function W3(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri2 || !Ri2.has(d))) {
              a = Ji2(c, a);
              a = Qi2(b, a, 1);
              b = nh(b, a, 1);
              a = R3();
              null !== b && (Ac2(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti2(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R3();
        a.pingedLanes |= a.suspendedLanes & c;
        Q2 === a && (Z2 & c) === c && (4 === T || 3 === T && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc2, sc2 <<= 1, 0 === (sc2 & 130023424) && (sc2 = 4194304)));
        var c = R3();
        a = ih(a, b);
        null !== a && (Ac2(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I3 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e2 = Yf(b, H2.current);
            ch(b, c);
            e2 = Nh(null, b, d, a, e2, c);
            var f2 = Sh();
            b.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b), e2.updater = Ei2, b.stateNode = e2, e2._reactInternals = b, Ii2(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I3 && f2 && vg(b), Xi2(null, b, e2, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b.type = d;
              e2 = b.tag = Zk(d);
              a = Ci2(d, a);
              switch (e2) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi2(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i2(null, b, d, Ci2(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), cj(a, b, d, e2, c);
          case 1:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), hj(a, b, d, e2, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e2 = f2.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e2 = Ji2(Error(p(423)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji2(Error(p(424)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I3 = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b = Zi2(a, b, c);
                  break a;
                }
                Xi2(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi2(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi2(a, b, d, c), b.child;
          case 11:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), Yi2(a, b, d, e2, c);
          case 7:
            return Xi2(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e2 = b.pendingProps;
              f2 = b.memoizedProps;
              g = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b = Zi2(a, b, c);
                  break a;
                }
              } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g = f2.child;
                  for (var k3 = h2.firstContext; null !== k3; ) {
                    if (k3.context === d) {
                      if (1 === f2.tag) {
                        k3 = mh(-1, c & -c);
                        k3.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k3.next = k3 : (k3.next = m.next, m.next = k3);
                          l2.pending = k3;
                        }
                      }
                      f2.lanes |= c;
                      k3 = f2.alternate;
                      null !== k3 && (k3.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b
                      );
                      h2.lanes |= c;
                      break;
                    }
                    k3 = k3.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h2 = g.alternate;
                  null !== h2 && (h2.lanes |= c);
                  bh(g, c, b);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi2(a, b, e2.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e2 = b.type, d = b.pendingProps.children, ch(b, c), e2 = eh(e2), d = d(e2), b.flags |= 1, Xi2(a, b, d, c), b.child;
          case 14:
            return d = b.type, e2 = Ci2(d, b.pendingProps), e2 = Ci2(d.type, e2), $i2(a, b, d, e2, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi2(b, d, e2), Ii2(b, d, e2, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b);
          case za2:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca2:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e2);
        b.elementType = a;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al2(a, b, c, d, e2) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b, c, d, e2, f2, g, h2, k3) {
        a = new al2(a, b, c, h2, k3);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl2(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el2(a, b, c, d, e2, f2, g, h2, k3) {
        a = bl2(c, d, true, a, e2, f2, g, h2, k3);
        a.context = dl2(null);
        c = a.current;
        d = R3();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac2(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b, c, d) {
        var e2 = b.current, f2 = R3(), g = yi(e2);
        c = dl2(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f2, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e2, b, g);
        null !== a && (gi2(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il2(a, b) {
        hl2(a, b);
        (a = a.alternate) && hl2(a, b);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl2(a, b, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc2();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc2.length && 0 !== b && b < Qc2[c].priority; c++) ;
          Qc2.splice(c, 0, a);
          0 === c && Vc2(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl2(g);
              f2.call(a2);
            };
          }
          var g = el2(b, d, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h2 = d;
          d = function() {
            var a2 = gl2(k3);
            h2.call(a2);
          };
        }
        var k3 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k3;
        a[uf] = k3.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b, k3, c, d);
        });
        return k3;
      }
      function rl2(a, b, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h2 = e2;
            e2 = function() {
              var a2 = gl2(g);
              h2.call(a2);
            };
          }
          fl2(b, g, a, e2);
        } else g = ql2(c, b, a, e2, d);
        return gl2(g);
      }
      Ec2 = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc2(b.pendingLanes);
              0 !== c && (Cc2(b, c | 1), Dk(b, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R3();
                gi2(b2, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc2 = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R3();
            gi2(b, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R3();
            gi2(c, a, b, d);
          }
          il2(a, b);
        }
      };
      Hc2 = function() {
        return C;
      };
      Ic2 = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa2(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc2, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc2 = vl2.inject(ul2), lc2 = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b)) throw Error(p(200));
        return cl2(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl2(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl2;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
        b = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol2(b)) throw Error(p(200));
        return rl2(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl2(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el2(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b);
      };
      exports.render = function(a, b, c) {
        if (!ol2(b)) throw Error(p(200));
        return rl2(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k3 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b, d = {}, e2 = null, h2 = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h2 = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k3, type: c, key: e2, ref: h2, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react29 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var x = __toESM(require_react(), 1);
  var nt = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function te(e2) {
    var t, r, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (t = 0; t < s; t++) e2[t] && (r = te(e2[t])) && (o && (o += " "), o += r);
    } else for (r in e2) e2[r] && (o && (o += " "), o += r);
    return o;
  }
  function O() {
    for (var e2, t, r = 0, o = "", s = arguments.length; r < s; r++) (e2 = arguments[r]) && (t = te(e2)) && (o && (o += " "), o += t);
    return o;
  }
  var Re = (e2) => {
    let t = Ae(e2), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), ie(i, t) || ze(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = r[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var ie = (e2, t) => {
    if (e2.length === 0) return t.classGroupId;
    let r = e2[0], o = t.nextPart.get(r), s = o ? ie(e2.slice(1), o) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    let n = e2.join("-");
    return t.validators.find(({ validator: a }) => a(n))?.classGroupId;
  };
  var re = /^\[(.+)\]$/;
  var ze = (e2) => {
    if (re.test(e2)) {
      let t = re.exec(e2)[1], r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  };
  var Ae = (e2) => {
    let { theme: t, prefix: r } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return Me(Object.entries(e2.classGroups), r).forEach(([n, a]) => {
      X(a, o, n, t);
    }), o;
  };
  var X = (e2, t, r, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n = s === "" ? t : oe(t, s);
        n.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (Pe(s)) {
          X(s(o), t, r, o);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        X(a, oe(t, n), r, o);
      });
    });
  };
  var oe = (e2, t) => {
    let r = e2;
    return t.split("-").forEach((o) => {
      r.nextPart.has(o) || r.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(o);
    }), r;
  };
  var Pe = (e2) => e2.isThemeGetter;
  var Me = (e2, t) => t ? e2.map(([r, o]) => {
    let s = o.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [t + a, i])) : n);
    return [r, s];
  }) : e2;
  var Te = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      r.set(n, a), t++, t > e2 && (t = 0, o = r, r = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = r.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      r.has(n) ? r.set(n, a) : s(n, a);
    } };
  };
  var _e = (e2) => {
    let { separator: t, experimentalParseClassName: r } = e2, o = t.length === 1, s = t[0], n = t.length, a = (i) => {
      let d = [], c = 0, u = 0, m;
      for (let p = 0; p < i.length; p++) {
        let y = i[p];
        if (c === 0) {
          if (y === s && (o || i.slice(p, p + n) === t)) {
            d.push(i.slice(u, p)), u = p + n;
            continue;
          }
          if (y === "/") {
            m = p;
            continue;
          }
        }
        y === "[" ? c++ : y === "]" && c--;
      }
      let h2 = d.length === 0 ? i : i.substring(u), S = h2.startsWith("!"), v = S ? h2.substring(1) : h2, g = m && m > u ? m - u : void 0;
      return { modifiers: d, hasImportantModifier: S, baseClassName: v, maybePostfixModifierPosition: g };
    };
    return r ? (i) => r({ className: i, parseClassName: a }) : a;
  };
  var Ne = (e2) => {
    if (e2.length <= 1) return e2;
    let t = [], r = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
    }), t.push(...r.sort()), t;
  };
  var Be = (e2) => ({ cache: Te(e2.cacheSize), parseClassName: _e(e2), ...Re(e2) });
  var Ie = /\s+/;
  var Ee = (e2, t) => {
    let { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: s } = t, n = [], a = e2.trim().split(Ie), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: m, baseClassName: h2, maybePostfixModifierPosition: S } = r(c), v = !!S, g = o(v ? h2.substring(0, S) : h2);
      if (!g) {
        if (!v) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (g = o(h2), !g) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        v = false;
      }
      let p = Ne(u).join(":"), y = m ? p + "!" : p, w2 = y + g;
      if (n.includes(w2)) continue;
      n.push(w2);
      let T = s(g, v);
      for (let A2 = 0; A2 < T.length; ++A2) {
        let V2 = T[A2];
        n.push(y + V2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Le() {
    let e2 = 0, t, r, o = "";
    for (; e2 < arguments.length; ) (t = arguments[e2++]) && (r = ae(t)) && (o && (o += " "), o += r);
    return o;
  }
  var ae = (e2) => {
    if (typeof e2 == "string") return e2;
    let t, r = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (t = ae(e2[o])) && (r && (r += " "), r += t);
    return r;
  };
  function ne(e2, ...t) {
    let r, o, s, n = a;
    function a(d) {
      let c = t.reduce((u, m) => m(u), e2());
      return r = Be(c), o = r.cache.get, s = r.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ee(d, r);
      return s(d, u), u;
    }
    return function() {
      return n(Le.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let t = (r) => r[e2] || [];
    return t.isThemeGetter = true, t;
  };
  var le = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ve = /^\d+\/\d+$/;
  var Ge = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var je = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Oe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var He = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => P(e2) || Ge.has(e2) || Ve.test(e2);
  var R = (e2) => M(e2, "length", Ye);
  var P = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var U = (e2) => M(e2, "number", P);
  var N = (e2) => !!e2 && Number.isInteger(Number(e2));
  var De = (e2) => e2.endsWith("%") && P(e2.slice(0, -1));
  var l = (e2) => le.test(e2);
  var z = (e2) => je.test(e2);
  var Fe = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var Ue = (e2) => M(e2, Fe, ce);
  var Xe = (e2) => M(e2, "position", ce);
  var Ke = /* @__PURE__ */ new Set(["image", "url"]);
  var Ze = (e2) => M(e2, Ke, Qe);
  var qe = (e2) => M(e2, "", Je);
  var B = () => true;
  var M = (e2, t, r) => {
    let o = le.exec(e2);
    return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : false;
  };
  var Ye = (e2) => Oe.test(e2) && !We.test(e2);
  var ce = () => false;
  var Je = (e2) => He.test(e2);
  var Qe = (e2) => $e.test(e2);
  var se = () => {
    let e2 = f("colors"), t = f("spacing"), r = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), m = f("invert"), h2 = f("gap"), S = f("gradientColorStops"), v = f("gradientColorStopPositions"), g = f("inset"), p = f("margin"), y = f("opacity"), w2 = f("padding"), T = f("saturate"), A2 = f("scale"), V2 = f("sepia"), K2 = f("skew"), Z2 = f("space"), q2 = f("translate"), H2 = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, t], b = () => [l, t], Y = () => ["", k, R], G2 = () => ["auto", P, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], Q2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _2 = () => ["", "0", l], ee2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [P, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [B], spacing: [k, R], blur: ["none", "", z, l], brightness: C(), borderColor: [e2], borderRadius: ["none", "", "full", z, l], borderSpacing: b(), borderWidth: Y(), contrast: C(), grayscale: _2(), hueRotate: C(), invert: _2(), gap: b(), gradientColorStops: [e2], gradientColorStopPositions: [De, R], inset: D2(), margin: D2(), opacity: C(), padding: b(), saturate: C(), scale: C(), sepia: _2(), skew: C(), space: b(), translate: b() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [z] }], "break-after": [{ "break-after": ee2() }], "break-before": [{ "break-before": ee2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $() }], "overflow-x": [{ "overflow-x": $() }], "overflow-y": [{ "overflow-y": $() }], overscroll: [{ overscroll: H2() }], "overscroll-x": [{ "overscroll-x": H2() }], "overscroll-y": [{ "overscroll-y": H2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [g] }], "inset-x": [{ "inset-x": [g] }], "inset-y": [{ "inset-y": [g] }], start: [{ start: [g] }], end: [{ end: [g] }], top: [{ top: [g] }], right: [{ right: [g] }], bottom: [{ bottom: [g] }], left: [{ left: [g] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", N, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: _2() }], shrink: [{ shrink: _2() }], order: [{ order: ["first", "last", "none", N, l] }], "grid-cols": [{ "grid-cols": [B] }], "col-start-end": [{ col: ["auto", { span: ["full", N, l] }, l] }], "col-start": [{ "col-start": G2() }], "col-end": [{ "col-end": G2() }], "grid-rows": [{ "grid-rows": [B] }], "row-start-end": [{ row: ["auto", { span: [N, l] }, l] }], "row-start": [{ "row-start": G2() }], "row-end": [{ "row-end": G2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [h2] }], "gap-x": [{ "gap-x": [h2] }], "gap-y": [{ "gap-y": [h2] }], "justify-content": [{ justify: ["normal", ...F2()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...F2(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...F2(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [w2] }], px: [{ px: [w2] }], py: [{ py: [w2] }], ps: [{ ps: [w2] }], pe: [{ pe: [w2] }], pt: [{ pt: [w2] }], pr: [{ pr: [w2] }], pb: [{ pb: [w2] }], pl: [{ pl: [w2] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, t] }], "min-w": [{ "min-w": [l, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, t, "none", "full", "min", "max", "fit", "prose", { screen: [z] }, z] }], h: [{ h: [l, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", z, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", U] }], "font-family": [{ font: [B] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", P, U] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [y] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [y] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...j(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [y] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), Xe] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Ue] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ze] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [v] }], "gradient-via-pos": [{ via: [v] }], "gradient-to-pos": [{ to: [v] }], "gradient-from": [{ from: [S] }], "gradient-via": [{ via: [S] }], "gradient-to": [{ to: [S] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [y] }], "border-style": [{ border: [...j(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [y] }], "divide-style": [{ divide: j() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...j()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [y] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", z, qe] }], "shadow-color": [{ shadow: [B] }], opacity: [{ opacity: [y] }], "mix-blend": [{ "mix-blend": [...Q2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": Q2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", z, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [m] }], saturate: [{ saturate: [T] }], sepia: [{ sepia: [V2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [m] }], "backdrop-opacity": [{ "backdrop-opacity": [y] }], "backdrop-saturate": [{ "backdrop-saturate": [T] }], "backdrop-sepia": [{ "backdrop-sepia": [V2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: C() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: C() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [A2] }], "scale-x": [{ "scale-x": [A2] }], "scale-y": [{ "scale-y": [A2] }], rotate: [{ rotate: [N, l] }], "translate-x": [{ "translate-x": [q2] }], "translate-y": [{ "translate-y": [q2] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b() }], "scroll-mx": [{ "scroll-mx": b() }], "scroll-my": [{ "scroll-my": b() }], "scroll-ms": [{ "scroll-ms": b() }], "scroll-me": [{ "scroll-me": b() }], "scroll-mt": [{ "scroll-mt": b() }], "scroll-mr": [{ "scroll-mr": b() }], "scroll-mb": [{ "scroll-mb": b() }], "scroll-ml": [{ "scroll-ml": b() }], "scroll-p": [{ "scroll-p": b() }], "scroll-px": [{ "scroll-px": b() }], "scroll-py": [{ "scroll-py": b() }], "scroll-ps": [{ "scroll-ps": b() }], "scroll-pe": [{ "scroll-pe": b() }], "scroll-pt": [{ "scroll-pt": b() }], "scroll-pr": [{ "scroll-pr": b() }], "scroll-pb": [{ "scroll-pb": b() }], "scroll-pl": [{ "scroll-pl": b() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, U] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var et = (e2, { cacheSize: t, prefix: r, separator: o, experimentalParseClassName: s, extend: n = {}, override: a = {} }) => {
    I(e2, "cacheSize", t), I(e2, "prefix", r), I(e2, "separator", o), I(e2, "experimentalParseClassName", s);
    for (let i in a) tt(e2[i], a[i]);
    for (let i in n) rt(e2[i], n[i]);
    return e2;
  };
  var I = (e2, t, r) => {
    r !== void 0 && (e2[t] = r);
  };
  var tt = (e2, t) => {
    if (t) for (let r in t) I(e2, r, t[r]);
  };
  var rt = (e2, t) => {
    if (t) for (let r in t) {
      let o = t[r];
      o !== void 0 && (e2[r] = (e2[r] || []).concat(o));
    }
  };
  var de = (e2, ...t) => typeof e2 == "function" ? ne(se, e2, ...t) : ne(() => et(se(), e2), ...t);
  var ue = { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.0625rem", sizeBody: "0.875rem", sizeSm: "0.75rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
  var pe = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
  var ot = de({ extend: { classGroups: { "font-size": [{ text: Object.keys(ue) }], leading: [{ leading: Object.keys(pe) }] } } });
  function E(...e2) {
    return ot(O(e2));
  }
  function fe(e2, t) {
    if (typeof e2 == "function") return e2(t);
    e2 != null && (e2.current = t);
  }
  function be(...e2) {
    return (t) => {
      let r = false, o = e2.map((s) => {
        let n = fe(s, t);
        return !r && typeof n == "function" && (r = true), n;
      });
      if (r) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : fe(e2[s], null);
        }
      };
    };
  }
  var st = /* @__PURE__ */ Symbol.for("react.lazy");
  var W = x[" use ".trim().toString()];
  function it(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ge(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === st && "_payload" in e2 && it(e2._payload);
  }
  function at(e2) {
    let t = lt(e2), r = x.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ge(n) && typeof W == "function" && (n = W(n._payload));
      let i = x.Children.toArray(n), d = i.find(dt);
      if (d) {
        let c = d.props.children, u = i.map((m) => m === d ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : m);
        return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: n });
    });
    return r.displayName = `${e2}.Slot`, r;
  }
  var L = at("Slot");
  function lt(e2) {
    let t = x.forwardRef((r, o) => {
      let { children: s, ...n } = r;
      if (ge(s) && typeof W == "function" && (s = W(s._payload)), x.isValidElement(s)) {
        let a = pt(s), i = ut(n, s.props);
        return s.type !== x.Fragment && (i.ref = o ? be(o, a) : a), x.cloneElement(s, i);
      }
      return x.Children.count(s) > 1 ? x.Children.only(null) : null;
    });
    return t.displayName = `${e2}.SlotClone`, t;
  }
  var ct = /* @__PURE__ */ Symbol("radix.slottable");
  function dt(e2) {
    return x.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === ct;
  }
  function ut(e2, t) {
    let r = { ...t };
    for (let o in t) {
      let s = e2[o], n = t[o];
      /^on[A-Z]/.test(o) ? s && n ? r[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...n } : o === "className" && (r[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...r };
  }
  function pt(e2) {
    let t = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e2.ref : (t = Object.getOwnPropertyDescriptor(e2, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var xe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var he = O;
  var ye = (e2, t) => (r) => {
    var o;
    if (t?.variants == null) return he(e2, r?.class, r?.className);
    let { variants: s, defaultVariants: n } = t, a = Object.keys(s).map((c) => {
      let u = r?.[c], m = n?.[c];
      if (u === null) return null;
      let h2 = xe(u) || xe(m);
      return s[c][h2];
    }), i = r && Object.entries(r).reduce((c, u) => {
      let [m, h2] = u;
      return h2 === void 0 || (c[m] = h2), c;
    }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: m, className: h2, ...S } = u;
      return Object.entries(S).every((v) => {
        let [g, p] = v;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[g]) : { ...n, ...i }[g] === p;
      }) ? [...c, m, h2] : c;
    }, []);
    return he(e2, a, d, r?.class, r?.className);
  };
  var bt = ye("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ve = (0, import_react.forwardRef)(({ className: e2, variant: t, size: r, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? L : "button", { className: E(bt({ variant: t, size: r, className: e2 })), ref: n, ...s }));
  ve.displayName = "Button";
  var gt = { primary: "border-ds-foreground1 bg-ds-foreground1 text-ds-onPrimary", secondary: "border-transparent bg-ds-background1 text-ds-foreground1 shadow-[0_0_0_1px_var(--ds-hairline)] disabled:bg-ds-background2 disabled:shadow-[0_0_0_1px_var(--ds-hairline)]", ghost: "border-transparent bg-transparent font-semibold text-ds-foreground1 underline [text-underline-position:from-font] disabled:bg-transparent disabled:font-medium", destructive: "border-transparent bg-ds-dangerWash text-ds-danger", success: "border-transparent bg-ds-successWash text-ds-success" };
  function xt({ variant: e2 = "primary", fullWidth: t = false, large: r = false, className: o }) {
    return E("m-px box-border inline-flex h-[var(--ds-control-compact)] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-text text-sizeBody font-medium leading-none transition-[background-color,border-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-foreground4", "disabled:cursor-default disabled:border-transparent disabled:bg-ds-muted disabled:text-ds-foreground4 disabled:shadow-none", r ? "h-[var(--ds-control)] rounded-[var(--ds-radius)] px-3.5" : "rounded-[var(--ds-radius-compact)] px-2.5", t && "flex w-[calc(100%-2px)]", gt[e2], o);
  }
  var Se = (0, import_react2.forwardRef)(({ variant: e2, fullWidth: t, large: r, className: o, asChild: s = false, iconBefore: n, iconAfter: a, type: i = "button", children: d, ...c }, u) => {
    let m = xt({ variant: e2, fullWidth: t, large: r, className: o });
    return s ? (0, import_jsx_runtime3.jsx)(L, { ref: u, className: m, ...c, children: d }) : (0, import_jsx_runtime3.jsxs)("button", { ref: u, type: i, className: m, ...c, children: [n, d, a] });
  });
  Se.displayName = "DsButton";
  var Ce = (0, import_react2.forwardRef)(({ label: e2, className: t, asChild: r = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(r ? L : "button", { ref: n, type: r ? void 0 : o, "aria-label": e2, title: e2, className: E("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[var(--ds-radius-compact)] border-0 bg-transparent p-2 leading-none text-ds-ink transition-[background-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.94] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...s }));
  Ce.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react22 = __toESM(require_react(), 1);
  var import_react23 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react24 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react25 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
  var import_react26 = __toESM(require_react(), 1);
  var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
  var import_react27 = __toESM(require_react(), 1);
  var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
  var import_react28 = __toESM(require_react(), 1);
  var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
  var Qs = Object.create;
  var Li = Object.defineProperty;
  var el = Object.getOwnPropertyDescriptor;
  var tl = Object.getOwnPropertyNames;
  var nl = Object.getPrototypeOf;
  var rl = Object.prototype.hasOwnProperty;
  var ol = (e2, t) => () => (t || e2((t = { exports: {} }).exports, t), t.exports);
  var il = (e2, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let o of tl(t)) !rl.call(e2, o) && o !== n && Li(e2, o, { get: () => t[o], enumerable: !(r = el(t, o)) || r.enumerable });
    return e2;
  };
  var Mi = (e2, t, n) => (n = e2 != null ? Qs(nl(e2)) : {}, il(t || !e2 || !e2.__esModule ? Li(n, "default", { value: e2, enumerable: true }) : n, e2));
  var yo = ol((L1, Zn) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function t() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          a && (o = r(o, n(a)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number") return o;
        if (typeof o != "object") return "";
        if (Array.isArray(o)) return t.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
        var i = "";
        for (var a in o) e2.call(o, a) && o[a] && (i = r(i, a));
        return i;
      }
      function r(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      typeof Zn < "u" && Zn.exports ? (t.default = t, Zn.exports = t) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return t;
      }) : window.classNames = t;
    })();
  });
  var ae2 = (e2) => e2;
  var Q = (e2) => e2.toLocaleLowerCase();
  var gn = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e2, t) => `${e2} of ${t}`, photosOf: (e2) => `Photos of ${e2}`, fullScreen: (e2) => `${e2}, full screen`, view: (e2) => `View ${e2}`, viewAt: (e2) => `View at ${e2}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e2) => `Choose ${/^[aeiou]/i.test(e2) ? "an" : "a"} ${Q(e2)}`, chooseToCheckStock: (e2) => `${gn.choose(e2)} to check stock`, soldOutIn: (e2) => `Sold out in ${e2}`, onlyLeftIn: (e2, t) => `Only ${e2} left in ${t}`, inStockIn: (e2) => `In stock in ${e2}`, inStock: (e2) => `${e2} in stock`, valuesSoldOut: (e2) => `${e2.join(", ")} sold out`, valueSoldOut: (e2, t) => `${e2}, sold out${t ? ` in ${t}` : ""}`, plural: (e2) => /(s|sh|ch|x|z)$/i.test(e2) ? `${e2}es` : /[^aeiou]y$/i.test(e2) ? `${e2.slice(0, -1)}ies` : `${e2}s`, optionIn: (e2, t) => `${e2} in ${t}`, andMore: (e2) => ` and ${e2} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e2) => `Please wait ${e2} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here.", listAdd: "Add an item", listItem: "Item", listDetail: "Add a detail", listNote: "Add a note", listMore: "More actions", listDelete: "Delete", listOpenLink: "Open link", listEdit: (e2) => `Edit ${e2}`, locale: "en" };
  var sl = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e2) => `Observaci\xF3n ${e2}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e2, t) => `${e2} de ${t}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, pantalla completa`, view: (e2) => `Ver ${e2}`, viewAt: (e2) => `Ver en ${e2}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e2) => `Elige ${Q(e2)}`, chooseToCheckStock: (e2) => `Elige ${Q(e2)} para ver la disponibilidad`, soldOutIn: (e2) => `Agotado en ${e2}`, onlyLeftIn: (e2, t) => `Solo quedan ${e2} en ${t}`, inStockIn: (e2) => `Disponible en ${e2}`, inStock: (e2) => `${e2} disponible`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e2, t) => `${e2}, agotado${t ? ` en ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} en ${t}`, andMore: (e2) => ` y ${e2} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e2) => `Espera ${e2} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED.", listAdd: "A\xF1adir un elemento", listItem: "Elemento", listDetail: "A\xF1adir un detalle", listNote: "A\xF1adir una nota", listMore: "M\xE1s acciones", listDelete: "Eliminar", listOpenLink: "Abrir enlace", listEdit: (e2) => `Editar ${e2}`, locale: "es" };
  var ll = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e2, t) => `${e2} sur ${t}`, photosOf: (e2) => `Photos de ${e2}`, fullScreen: (e2) => `${e2}, plein \xE9cran`, view: (e2) => `Voir ${e2}`, viewAt: (e2) => `Voir chez ${e2}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e2) => `${e2} \xE0 choisir`, chooseToCheckStock: (e2) => `Choisissez ${Q(e2)} pour voir le stock`, soldOutIn: (e2) => `\xC9puis\xE9 en ${e2}`, onlyLeftIn: (e2, t) => `Plus que ${e2} en ${t}`, inStockIn: (e2) => `En stock en ${e2}`, inStock: (e2) => `${e2} en stock`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e2, t) => `${e2}, \xE9puis\xE9${t ? ` en ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} en ${t}`, andMore: (e2) => ` et ${e2} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e2) => `Attendez ${e2} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici.", listAdd: "Ajouter un \xE9l\xE9ment", listItem: "\xC9l\xE9ment", listDetail: "Ajouter un d\xE9tail", listNote: "Ajouter une note", listMore: "Plus d\u2019actions", listDelete: "Supprimer", listOpenLink: "Ouvrir le lien", listEdit: (e2) => `Modifier ${e2}`, locale: "fr" };
  var cl = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e2) => `Messpunkt ${e2}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e2, t) => `${e2} von ${t}`, photosOf: (e2) => `Fotos von ${e2}`, fullScreen: (e2) => `${e2}, Vollbild`, view: (e2) => `${e2} ansehen`, viewAt: (e2) => `Bei ${e2} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e2) => `${e2} w\xE4hlen`, chooseToCheckStock: (e2) => `${e2} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e2) => `Ausverkauft in ${e2}`, onlyLeftIn: (e2, t) => `Nur noch ${e2} in ${t}`, inStockIn: (e2) => `Verf\xFCgbar in ${e2}`, inStock: (e2) => `${e2} verf\xFCgbar`, valuesSoldOut: (e2) => `${e2.join(", ")} ausverkauft`, valueSoldOut: (e2, t) => `${e2}, ausverkauft${t ? ` in ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} in ${t}`, andMore: (e2) => ` und ${e2} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e2) => `Bitte warte ${e2} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar.", listAdd: "Eintrag hinzuf\xFCgen", listItem: "Eintrag", listDetail: "Detail hinzuf\xFCgen", listNote: "Notiz hinzuf\xFCgen", listMore: "Weitere Aktionen", listDelete: "L\xF6schen", listOpenLink: "Link \xF6ffnen", listEdit: (e2) => `${e2} bearbeiten`, locale: "de" };
  var ul = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e2) => `Osservazione ${e2}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e2, t) => `${e2} di ${t}`, photosOf: (e2) => `Foto di ${e2}`, fullScreen: (e2) => `${e2}, schermo intero`, view: (e2) => `Vedi ${e2}`, viewAt: (e2) => `Vedi su ${e2}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e2) => `Scegli ${Q(e2)}`, chooseToCheckStock: (e2) => `Scegli ${Q(e2)} per vedere la disponibilit\xE0`, soldOutIn: (e2) => `Esaurito in ${e2}`, onlyLeftIn: (e2, t) => `Solo ${e2} rimasti in ${t}`, inStockIn: (e2) => `Disponibile in ${e2}`, inStock: (e2) => `${e2} disponibile`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e2, t) => `${e2}, esaurito${t ? ` in ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} in ${t}`, andMore: (e2) => ` e altri ${e2}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e2) => `Aspetta ${e2} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui.", listAdd: "Aggiungi un elemento", listItem: "Elemento", listDetail: "Aggiungi un dettaglio", listNote: "Aggiungi una nota", listMore: "Altre azioni", listDelete: "Elimina", listOpenLink: "Apri link", listEdit: (e2) => `Modifica ${e2}`, locale: "it" };
  var dl = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e2) => `Observa\xE7\xE3o ${e2}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close: "Fechar", previousPhoto: "Foto anterior", nextPhoto: "Pr\xF3xima foto", photoCount: (e2, t) => `${e2} de ${t}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, tela cheia`, view: (e2) => `Ver ${e2}`, viewAt: (e2) => `Ver em ${e2}`, buy: "Vamos comprar", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado ao Instinct", sent: "Enviado", soldOut: "Esgotado", retry: "Tentar de novo", copy: "Copiar", copied: "Copiado", copyFailed: "C\xF3pia bloqueada", choose: (e2) => `Selecione ${Q(e2)}`, chooseToCheckStock: (e2) => `Selecione ${Q(e2)} para ver o estoque`, soldOutIn: (e2) => `Esgotado em ${e2}`, onlyLeftIn: (e2, t) => `S\xF3 restam ${e2} em ${t}`, inStockIn: (e2) => `Dispon\xEDvel em ${e2}`, inStock: (e2) => `${e2} dispon\xEDvel`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esgotados" : "esgotado"}`, valueSoldOut: (e2, t) => `${e2}, esgotado${t ? ` em ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} em ${t}`, andMore: (e2) => ` e mais ${e2}`, loadingState: "Carregando o que foi salvo\u2026", savingState: "Salvando\u2026", savedState: "Salvo neste dispositivo", unsavedState: "N\xE3o salvo. As altera\xE7\xF5es duram s\xF3 enquanto este File estiver aberto.", wakeAccepted: "Enviado ao seu agente", wakeWait: (e2) => `Aguarde ${e2} segundos e tente de novo.`, wakeRetryNow: "Voc\xEA j\xE1 pode tentar de novo.", wakeUnconfirmed: "Entrega n\xE3o confirmada. Tente de novo para verificar sem enviar duas vezes.", wakeForbidden: "Entre como dono do File para enviar isto ao seu agente.", wakeCanceled: "Esta solicita\xE7\xE3o foi cancelada. Voc\xEA pode enviar uma nova.", wakeFailed: "N\xE3o foi poss\xEDvel enviar esta solicita\xE7\xE3o.", wakeUnavailable: "As a\xE7\xF5es do agente n\xE3o est\xE3o dispon\xEDveis aqui.", listAdd: "Adicionar um item", listItem: "Item", listDetail: "Adicionar um detalhe", listNote: "Adicionar uma nota", listMore: "Mais a\xE7\xF5es", listDelete: "Excluir", listOpenLink: "Abrir link", listEdit: (e2) => `Editar ${e2}`, locale: "pt" };
  var pl = { myPick: "La meva tria", recommended: "Recomanat", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE0x.", noPhoto: "Sense foto", noData: "No hi ha dades per mostrar.", noMatches: "Cap resultat.", chartData: "Mostra les dades del gr\xE0fic", observation: "Observaci\xF3", observationNumber: (e2) => `Observaci\xF3 ${e2}`, value: "Valor", noObservation: "Sense observaci\xF3", attribute: "Atribut", price: "Preu", was: ", abans ", close: "Tanca", previousPhoto: "Foto anterior", nextPhoto: "Foto seg\xFCent", photoCount: (e2, t) => `${e2} de ${t}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, pantalla completa`, view: (e2) => `Mostra ${e2}`, viewAt: (e2) => `Mostra a ${e2}`, buy: "Comprem-ho", buyShort: "Compra", sending: "S\u2019est\xE0 enviant\u2026", sentToInstinct: "Enviat a Instinct", sent: "Enviat", soldOut: "Esgotat", retry: "Torna-ho a provar", copy: "Copia", copied: "Copiat", copyFailed: "No s\u2019ha pogut copiar", choose: (e2) => `Tria ${Q(e2)}`, chooseToCheckStock: (e2) => `Tria ${Q(e2)} per veure la disponibilitat`, soldOutIn: (e2) => `Esgotat en ${e2}`, onlyLeftIn: (e2, t) => `Nom\xE9s en queden ${e2} en ${t}`, inStockIn: (e2) => `Disponible en ${e2}`, inStock: (e2) => `${e2} disponible`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esgotats" : "esgotat"}`, valueSoldOut: (e2, t) => `${e2}, esgotat${t ? ` en ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} en ${t}`, andMore: (e2) => ` i ${e2} m\xE9s`, loadingState: "S\u2019est\xE0 carregant l\u2019estat desat\u2026", savingState: "S\u2019est\xE0 desant\u2026", savedState: "Desat en aquest dispositiu", unsavedState: "No desat. Els canvis nom\xE9s duren mentre aquest File estigui obert.", wakeAccepted: "Enviat al teu agent", wakeWait: (e2) => `Espera ${e2} segons i torna-ho a provar.`, wakeRetryNow: "Ja ho pots tornar a provar.", wakeUnconfirmed: "Lliurament no confirmat. Torna-ho a provar per comprovar-ho sense enviar-ho dues vegades.", wakeForbidden: "Inicia la sessi\xF3 com a propietari del File per enviar-ho al teu agent.", wakeCanceled: "S\u2019ha cancel\xB7lat aquesta sol\xB7licitud. Pots enviar-ne una de nova.", wakeFailed: "No s\u2019ha pogut enviar aquesta sol\xB7licitud.", wakeUnavailable: "Les accions de l\u2019agent no estan disponibles aqu\xED.", listAdd: "Afegeix un element", listItem: "Element", listDetail: "Afegeix un detall", listNote: "Afegeix una nota", listMore: "M\xE9s accions", listDelete: "Suprimeix", listOpenLink: "Obre l\u2019enlla\xE7", listEdit: (e2) => `Edita ${e2}`, locale: "ca" };
  var fl = { myPick: "Mijn keuze", recommended: "Aanbevolen", rangeLegend: "laag \xB7 nu \xB7 hoog", noPhoto: "Geen foto", noData: "Geen gegevens om te tonen.", noMatches: "Geen resultaten.", chartData: "Grafiekgegevens bekijken", observation: "Meting", observationNumber: (e2) => `Meting ${e2}`, value: "Waarde", noObservation: "Geen meting", attribute: "Kenmerk", price: "Prijs", was: ", was ", close: "Sluiten", previousPhoto: "Vorige foto", nextPhoto: "Volgende foto", photoCount: (e2, t) => `${e2} van ${t}`, photosOf: (e2) => `Foto\u2019s van ${e2}`, fullScreen: (e2) => `${e2}, volledig scherm`, view: (e2) => `${e2} bekijken`, viewAt: (e2) => `Bekijken bij ${e2}`, buy: "Laten we dit kopen", buyShort: "Kopen", sending: "Versturen\u2026", sentToInstinct: "Naar Instinct gestuurd", sent: "Verstuurd", soldOut: "Uitverkocht", retry: "Opnieuw", copy: "Kopi\xEBren", copied: "Gekopieerd", copyFailed: "Kopi\xEBren geblokkeerd", choose: (e2) => `Kies ${Q(e2)}`, chooseToCheckStock: (e2) => `Kies ${Q(e2)} om de voorraad te zien`, soldOutIn: (e2) => `Uitverkocht in ${e2}`, onlyLeftIn: (e2, t) => `Nog maar ${e2} in ${t}`, inStockIn: (e2) => `Op voorraad in ${e2}`, inStock: (e2) => `${e2} op voorraad`, valuesSoldOut: (e2) => `${e2.join(", ")} uitverkocht`, valueSoldOut: (e2, t) => `${e2}, uitverkocht${t ? ` in ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} in ${t}`, andMore: (e2) => ` en nog ${e2}`, loadingState: "Opgeslagen stand laden\u2026", savingState: "Opslaan\u2026", savedState: "Opgeslagen op dit apparaat", unsavedState: "Niet opgeslagen. Wijzigingen blijven alleen zolang dit File open is.", wakeAccepted: "Naar je agent gestuurd", wakeWait: (e2) => `Wacht ${e2} seconden en probeer het dan opnieuw.`, wakeRetryNow: "Je kunt het nu opnieuw proberen.", wakeUnconfirmed: "Bezorging niet bevestigd. Probeer opnieuw om te controleren zonder dubbel te versturen.", wakeForbidden: "Log in als eigenaar van dit File om dit naar je agent te sturen.", wakeCanceled: "Dit verzoek is geannuleerd. Je kunt een nieuw verzoek sturen.", wakeFailed: "Dit verzoek kon niet worden verstuurd.", wakeUnavailable: "Agentacties zijn hier niet beschikbaar.", listAdd: "Item toevoegen", listItem: "Item", listDetail: "Detail toevoegen", listNote: "Notitie toevoegen", listMore: "Meer acties", listDelete: "Verwijderen", listOpenLink: "Link openen", listEdit: (e2) => `${e2} bewerken`, locale: "nl" };
  var ml = { myPick: "Alegerea mea", recommended: "Recomandat", rangeLegend: "min. \xB7 acum \xB7 max.", noPhoto: "F\u0103r\u0103 fotografie", noData: "Nu exist\u0103 date de afi\u0219at.", noMatches: "Niciun rezultat.", chartData: "Vezi datele graficului", observation: "Observa\u021Bie", observationNumber: (e2) => `Observa\u021Bia ${e2}`, value: "Valoare", noObservation: "F\u0103r\u0103 observa\u021Bie", attribute: "Atribut", price: "Pre\u021B", was: ", \xEEnainte ", close: "\xCEnchide", previousPhoto: "Fotografia anterioar\u0103", nextPhoto: "Fotografia urm\u0103toare", photoCount: (e2, t) => `${e2} din ${t}`, photosOf: (e2) => `Fotografii cu ${e2}`, fullScreen: (e2) => `${e2}, ecran complet`, view: (e2) => `Vezi ${e2}`, viewAt: (e2) => `Vezi la ${e2}`, buy: "Hai s\u0103-l cump\u0103r\u0103m", buyShort: "Cump\u0103r\u0103", sending: "Se trimite\u2026", sentToInstinct: "Trimis la Instinct", sent: "Trimis", soldOut: "Epuizat", retry: "Re\xEEncearc\u0103", copy: "Copiaz\u0103", copied: "Copiat", copyFailed: "Copiere blocat\u0103", choose: (e2) => `Alege ${Q(e2)}`, chooseToCheckStock: (e2) => `Alege ${Q(e2)} ca s\u0103 vezi stocul`, soldOutIn: (e2) => `Epuizat \xEEn ${e2}`, onlyLeftIn: (e2, t) => `Doar ${e2} r\u0103mase \xEEn ${t}`, inStockIn: (e2) => `\xCEn stoc \xEEn ${e2}`, inStock: (e2) => `${e2} \xEEn stoc`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "epuizate" : "epuizat"}`, valueSoldOut: (e2, t) => `${e2}, epuizat${t ? ` \xEEn ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} \xEEn ${t}`, andMore: (e2) => ` \u0219i \xEEnc\u0103 ${e2}`, loadingState: "Se \xEEncarc\u0103 starea salvat\u0103\u2026", savingState: "Se salveaz\u0103\u2026", savedState: "Salvat pe acest dispozitiv", unsavedState: "Nesalvat. Modific\u0103rile r\u0103m\xE2n doar c\xE2t timp acest File e deschis.", wakeAccepted: "Trimis agentului t\u0103u", wakeWait: (e2) => `A\u0219teapt\u0103 ${e2} secunde, apoi re\xEEncearc\u0103.`, wakeRetryNow: "Po\u021Bi re\xEEncerca acum.", wakeUnconfirmed: "Livrare neconfirmat\u0103. Re\xEEncearc\u0103 pentru a verifica f\u0103r\u0103 a trimite de dou\u0103 ori.", wakeForbidden: "Conecteaz\u0103-te ca proprietar al File-ului ca s\u0103-l trimi\u021Bi agentului t\u0103u.", wakeCanceled: "Cererea a fost anulat\u0103. Po\u021Bi trimite una nou\u0103.", wakeFailed: "Cererea nu a putut fi trimis\u0103.", wakeUnavailable: "Ac\u021Biunile agentului nu sunt disponibile aici.", listAdd: "Adaug\u0103 un element", listItem: "Element", listDetail: "Adaug\u0103 un detaliu", listNote: "Adaug\u0103 o not\u0103", listMore: "Mai multe ac\u021Biuni", listDelete: "\u0218terge", listOpenLink: "Deschide linkul", listEdit: (e2) => `Editeaz\u0103 ${e2}`, locale: "ro" };
  var hl = { myPick: "\u041C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440", recommended: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E", rangeLegend: "\u043C\u0438\u043D. \xB7 \u0441\u0435\u0439\u0447\u0430\u0441 \xB7 \u043C\u0430\u043A\u0441.", noPhoto: "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E", noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.", noMatches: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", chartData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430", observation: "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", observationNumber: (e2) => `\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 ${e2}`, value: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", noObservation: "\u041D\u0435\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F", attribute: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440", price: "\u0426\u0435\u043D\u0430", was: ", \u0431\u044B\u043B\u043E ", close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", previousPhoto: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", nextPhoto: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", photoCount: (e2, t) => `${e2} \u0438\u0437 ${t}`, photosOf: (e2) => `\u0424\u043E\u0442\u043E: ${e2}`, fullScreen: (e2) => `${e2}, \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D`, view: (e2) => `\u041E\u0442\u043A\u0440\u044B\u0442\u044C ${e2}`, viewAt: (e2) => `\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 ${e2}`, buy: "\u0414\u0430\u0432\u0430\u0439 \u043A\u0443\u043F\u0438\u043C", buyShort: "\u041A\u0443\u043F\u0438\u0442\u044C", sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026", sentToInstinct: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Instinct", sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", soldOut: "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438", retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", copyFailed: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E", choose: (e2) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Q(e2)}`, chooseToCheckStock: (e2) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Q(e2)}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435`, soldOutIn: (e2) => `\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e2}`, onlyLeftIn: (e2, t) => `\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e2}: ${t}`, inStockIn: (e2) => `\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e2}`, inStock: (e2) => `${e2} \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valuesSoldOut: (e2) => `${e2.join(", ")} \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valueSoldOut: (e2, t) => `${e2}, \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438${t ? ` (${t})` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2}: ${t}`, andMore: (e2) => ` \u0438 \u0435\u0449\u0451 ${e2}`, loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E\u2026", savingState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026", savedState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435", unsavedState: "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442, \u043F\u043E\u043A\u0430 \u044D\u0442\u043E\u0442 File \u043E\u0442\u043A\u0440\u044B\u0442.", wakeAccepted: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0433\u0435\u043D\u0442\u0443", wakeWait: (e2) => `\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 ${e2} \u0441 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.`, wakeRetryNow: "\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.", wakeUnconfirmed: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.", wakeForbidden: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 File, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0430\u0433\u0435\u043D\u0442\u0443.", wakeCanceled: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439.", wakeFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441.", wakeUnavailable: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B.", listAdd: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u043D\u043A\u0442", listItem: "\u041F\u0443\u043D\u043A\u0442", listDetail: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u044C", listNote: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443", listMore: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F", listDelete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", listOpenLink: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", listEdit: (e2) => `\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \xAB${e2}\xBB`, locale: "ru" };
  var Si = { myPick: "\u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9", recommended: "\u05DE\u05D5\u05DE\u05DC\u05E5", rangeLegend: "\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \xB7 \u05E2\u05DB\u05E9\u05D9\u05D5 \xB7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD", noPhoto: "\u05D0\u05D9\u05DF \u05EA\u05DE\u05D5\u05E0\u05D4", noData: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.", noMatches: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA.", chartData: "\u05D4\u05E6\u05D2\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E8\u05E9\u05D9\u05DD", observation: "\u05DE\u05D3\u05D9\u05D3\u05D4", observationNumber: (e2) => `\u05DE\u05D3\u05D9\u05D3\u05D4 ${e2}`, value: "\u05E2\u05E8\u05DA", noObservation: "\u05D0\u05D9\u05DF \u05DE\u05D3\u05D9\u05D3\u05D4", attribute: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF", price: "\u05DE\u05D7\u05D9\u05E8", was: ", \u05D1\u05DE\u05E7\u05D5\u05DD ", close: "\u05E1\u05D2\u05D9\u05E8\u05D4", previousPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA", nextPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4", photoCount: (e2, t) => `${e2} \u05DE\u05EA\u05D5\u05DA ${t}`, photosOf: (e2) => `\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC ${e2}`, fullScreen: (e2) => `${e2}, \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0`, view: (e2) => `\u05D4\u05E6\u05D2\u05EA ${e2}`, viewAt: (e2) => `\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1-${e2}`, buy: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05E7\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4", buyShort: "\u05DC\u05E7\u05E0\u05D5\u05EA", sending: "\u05E9\u05D5\u05DC\u05D7\u2026", sentToInstinct: "\u05E0\u05E9\u05DC\u05D7 \u05DC-Instinct", sent: "\u05E0\u05E9\u05DC\u05D7", soldOut: "\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9", retry: "\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1", copy: "\u05D4\u05E2\u05EA\u05E7\u05D4", copied: "\u05D4\u05D5\u05E2\u05EA\u05E7", copyFailed: "\u05D4\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4", choose: (e2) => `\u05D1\u05D7\u05E8\u05D5 ${e2}`, chooseToCheckStock: (e2) => `\u05D1\u05D7\u05E8\u05D5 ${e2} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05DC\u05D0\u05D9`, soldOutIn: (e2) => `\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9 \u05D1-${e2}`, onlyLeftIn: (e2, t) => `\u05E0\u05E9\u05D0\u05E8\u05D5 \u05E8\u05E7 ${e2} \u05D1-${t}`, inStockIn: (e2) => `\u05D1\u05DE\u05DC\u05D0\u05D9 \u05D1-${e2}`, inStock: (e2) => `${e2} \u05D1\u05DE\u05DC\u05D0\u05D9`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\u05D0\u05D6\u05DC\u05D5" : "\u05D0\u05D6\u05DC"}`, valueSoldOut: (e2, t) => `${e2}, \u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9${t ? ` \u05D1-${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} \u05D1-${t}`, andMore: (e2) => ` \u05D5\u05E2\u05D5\u05D3 ${e2}`, loadingState: "\u05D8\u05D5\u05E2\u05DF \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8\u2026", savingState: "\u05E9\u05D5\u05DE\u05E8\u2026", savedState: "\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4", unsavedState: "\u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E8\u05E7 \u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4-File \u05E4\u05EA\u05D5\u05D7.", wakeAccepted: "\u05E0\u05E9\u05DC\u05D7 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA", wakeWait: (e2) => `\u05D9\u05E9 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF ${e2} \u05E9\u05E0\u05D9\u05D5\u05EA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.`, wakeRetryNow: "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05E2\u05DB\u05E9\u05D9\u05D5.", wakeUnconfirmed: "\u05D4\u05DE\u05E1\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D0\u05D5\u05E9\u05E8\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05DC\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD.", wakeForbidden: "\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D1\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4-File \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D6\u05D4 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA.", wakeCanceled: "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4.", wakeFailed: "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4.", wakeUnavailable: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E1\u05D5\u05DB\u05DF \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF.", listAdd: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E4\u05E8\u05D9\u05D8", listItem: "\u05E4\u05E8\u05D9\u05D8", listDetail: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E4\u05E8\u05D8", listNote: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D4\u05E2\u05E8\u05D4", listMore: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA", listDelete: "\u05DE\u05D7\u05D9\u05E7\u05D4", listOpenLink: "\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8", listEdit: (e2) => `\u05E2\u05E8\u05D9\u05DB\u05EA ${e2}`, locale: "he" };
  var gl = { myPick: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A", recommended: "\u0645\u0648\u0635\u0649 \u0628\u0647", rangeLegend: "\u0627\u0644\u0623\u062F\u0646\u0649 \xB7 \u0627\u0644\u062D\u0627\u0644\u064A \xB7 \u0627\u0644\u0623\u0639\u0644\u0649", noPhoto: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0648\u0631\u0629", noData: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.", noMatches: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.", chartData: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0633\u0645", observation: "\u0642\u064A\u0627\u0633", observationNumber: (e2) => `\u0627\u0644\u0642\u064A\u0627\u0633 ${e2}`, value: "\u0627\u0644\u0642\u064A\u0645\u0629", noObservation: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0642\u064A\u0627\u0633", attribute: "\u0627\u0644\u062E\u0627\u0635\u064A\u0629", price: "\u0627\u0644\u0633\u0639\u0631", was: "\u060C \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 ", close: "\u0625\u063A\u0644\u0627\u0642", previousPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629", nextPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629", photoCount: (e2, t) => `${e2} \u0645\u0646 ${t}`, photosOf: (e2) => `\u0635\u0648\u0631 ${e2}`, fullScreen: (e2) => `${e2}\u060C \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629`, view: (e2) => `\u0639\u0631\u0636 ${e2}`, viewAt: (e2) => `\u0639\u0631\u0636 \u0644\u062F\u0649 ${e2}`, buy: "\u0644\u0646\u0634\u062A\u0631\u0650 \u0647\u0630\u0627", buyShort: "\u0634\u0631\u0627\u0621", sending: "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026", sentToInstinct: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 Instinct", sent: "\u0623\u064F\u0631\u0633\u0644", soldOut: "\u0646\u0641\u062F", retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629", copy: "\u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", copyFailed: "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0646\u0633\u062E", choose: (e2) => `\u0627\u062E\u062A\u0631 ${e2}`, chooseToCheckStock: (e2) => `\u0627\u062E\u062A\u0631 ${e2} \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631`, soldOutIn: (e2) => `\u0646\u0641\u062F \u0641\u064A ${e2}`, onlyLeftIn: (e2, t) => `\u0628\u0642\u064A ${e2} \u0641\u0642\u0637 \u0641\u064A ${t}`, inStockIn: (e2) => `\u0645\u062A\u0648\u0641\u0631 \u0641\u064A ${e2}`, inStock: (e2) => `${e2} \u0645\u062A\u0648\u0641\u0631`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\u0646\u0641\u062F\u062A" : "\u0646\u0641\u062F"}`, valueSoldOut: (e2, t) => `${e2}\u060C \u0646\u0641\u062F${t ? ` \u0641\u064A ${t}` : ""}`, plural: ae2, optionIn: (e2, t) => `${e2} \u0641\u064A ${t}`, andMore: (e2) => ` \u0648${e2} \u0623\u062E\u0631\u0649`, loadingState: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026", savingState: "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026", savedState: "\u0645\u062D\u0641\u0648\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632", unsavedState: "\u063A\u064A\u0631 \u0645\u062D\u0641\u0648\u0638. \u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0627 \u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0640 File \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0641\u0642\u0637.", wakeAccepted: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643", wakeWait: (e2) => `\u0627\u0646\u062A\u0638\u0631 ${e2} \u062B\u0627\u0646\u064A\u0629\u060C \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.`, wakeRetryNow: "\u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646.", wakeUnconfirmed: "\u0644\u0645 \u064A\u062A\u0623\u0643\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u062F\u0648\u0646 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u062A\u064A\u0646.", wakeForbidden: "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0635\u0641\u062A\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u0640 File \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643.", wakeCanceled: "\u0623\u064F\u0644\u063A\u064A \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627.", listAdd: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631", listItem: "\u0639\u0646\u0635\u0631", listDetail: "\u0625\u0636\u0627\u0641\u0629 \u062A\u0641\u0635\u064A\u0644", listNote: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062D\u0638\u0629", listMore: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0623\u062E\u0631\u0649", listDelete: "\u062D\u0630\u0641", listOpenLink: "\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637", listEdit: (e2) => `\u062A\u0639\u062F\u064A\u0644 ${e2}`, locale: "ar" };
  var vl = new Map(Object.entries({ en: gn, es: sl, fr: ll, de: cl, it: ul, pt: dl, ca: pl, nl: fl, ro: ml, ru: hl, he: Si, iw: Si, ar: gl }));
  function fr(e2) {
    return vl.get((e2 ?? "").toLowerCase().split("-")[0]) ?? gn;
  }
  var bl = /* @__PURE__ */ new Set(["he", "iw", "ar", "fa", "ur"]);
  function vn(e2) {
    return bl.has((e2 ?? "").toLowerCase().split("-")[0]) ? "rtl" : "auto";
  }
  var rt2 = (0, import_react4.createContext)(gn);
  function R2() {
    return (0, import_react4.useContext)(rt2);
  }
  function ot2(e2) {
    let t = (0, import_react4.useContext)(rt2);
    return e2 ? fr(e2) : t;
  }
  var xl = "root";
  var wl = "Region";
  var It = "Collection";
  var Ft = "Item";
  function Pi() {
    return { values: {}, nodes: { [xl]: { type: wl, props: {}, children: [] } } };
  }
  function kl(e2, t) {
    return Object.keys(e2.nodes).find((n) => e2.nodes[n].children.includes(t));
  }
  function Ri(e2, t) {
    let n = e2[t];
    delete e2[t];
    for (let r of n.children) Ri(e2, r);
  }
  function Vt(e2, t) {
    if (t.op === "set") return { ...e2, values: { ...e2.values, [t.key]: t.value } };
    if (t.op === "add") {
      if (e2.nodes[t.id]) return e2;
      let o = { ...e2.nodes, [t.id]: { type: t.type, props: t.props ?? {}, children: [] } };
      if (!t.parent) return { ...e2, nodes: o };
      let i = e2.nodes[t.parent], a = t.after ? i.children.indexOf(t.after) + 1 : i.children.length;
      return o[t.parent] = { ...i, children: [...i.children.slice(0, a), t.id, ...i.children.slice(a)] }, { ...e2, nodes: o };
    }
    if (t.op === "update") {
      let o = { ...e2.nodes[t.id].props };
      for (let [i, a] of Object.entries(t.props)) a === null ? delete o[i] : o[i] = a;
      return { ...e2, nodes: { ...e2.nodes, [t.id]: { ...e2.nodes[t.id], props: o } } };
    }
    if (!e2.nodes[t.id]) return e2;
    let n = { ...e2.nodes }, r = kl(e2, t.id);
    return r && (n[r] = { ...n[r], children: n[r].children.filter((o) => o !== t.id) }), Ri(n, t.id), { ...e2, nodes: n };
  }
  function He2(e2, t) {
    return e2 == null || t == null ? NaN : e2 < t ? -1 : e2 > t ? 1 : e2 >= t ? 0 : NaN;
  }
  function hr(e2, t) {
    return e2 == null || t == null ? NaN : t < e2 ? -1 : t > e2 ? 1 : t >= e2 ? 0 : NaN;
  }
  function wn(e2) {
    let t, n, r;
    e2.length !== 2 ? (t = He2, n = (s, l2) => He2(e2(s), l2), r = (s, l2) => e2(s) - l2) : (t = e2 === He2 || e2 === hr ? e2 : Ll, n = e2, r = e2);
    function o(s, l2, c = 0, u = s.length) {
      if (c < u) {
        if (t(l2, l2) !== 0) return u;
        do {
          let d = c + u >>> 1;
          n(s[d], l2) < 0 ? c = d + 1 : u = d;
        } while (c < u);
      }
      return c;
    }
    function i(s, l2, c = 0, u = s.length) {
      if (c < u) {
        if (t(l2, l2) !== 0) return u;
        do {
          let d = c + u >>> 1;
          n(s[d], l2) <= 0 ? c = d + 1 : u = d;
        } while (c < u);
      }
      return c;
    }
    function a(s, l2, c = 0, u = s.length) {
      let d = o(s, l2, c, u - 1);
      return d > c && r(s[d - 1], l2) > -r(s[d], l2) ? d - 1 : d;
    }
    return { left: o, center: a, right: i };
  }
  function Ll() {
    return 0;
  }
  function gr(e2) {
    return e2 === null ? NaN : +e2;
  }
  var Ti = wn(He2);
  var $i = Ti.right;
  var Ml = Ti.left;
  var Sl = wn(gr).center;
  var vr = $i;
  var it2 = class extends Map {
    constructor(t, n = Pl) {
      if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (let [r, o] of t) this.set(r, o);
    }
    get(t) {
      return super.get(Oi(this, t));
    }
    has(t) {
      return super.has(Oi(this, t));
    }
    set(t, n) {
      return super.set(Cl(this, t), n);
    }
    delete(t) {
      return super.delete(Nl(this, t));
    }
  };
  function Oi({ _intern: e2, _key: t }, n) {
    let r = t(n);
    return e2.has(r) ? e2.get(r) : n;
  }
  function Cl({ _intern: e2, _key: t }, n) {
    let r = t(n);
    return e2.has(r) ? e2.get(r) : (e2.set(r, n), n);
  }
  function Nl({ _intern: e2, _key: t }, n) {
    let r = t(n);
    return e2.has(r) && (n = e2.get(r), e2.delete(r)), n;
  }
  function Pl(e2) {
    return e2 !== null && typeof e2 == "object" ? e2.valueOf() : e2;
  }
  var br = Math.sqrt(50);
  var yr = Math.sqrt(10);
  var xr = Math.sqrt(2);
  function kn(e2, t, n) {
    var r, o = -1, i, a, s;
    if (t = +t, e2 = +e2, n = +n, e2 === t && n > 0) return [e2];
    if ((r = t < e2) && (i = e2, e2 = t, t = i), (s = Ln(e2, t, n)) === 0 || !isFinite(s)) return [];
    if (s > 0) {
      let l2 = Math.round(e2 / s), c = Math.round(t / s);
      for (l2 * s < e2 && ++l2, c * s > t && --c, a = new Array(i = c - l2 + 1); ++o < i; ) a[o] = (l2 + o) * s;
    } else {
      s = -s;
      let l2 = Math.round(e2 * s), c = Math.round(t * s);
      for (l2 / s < e2 && ++l2, c / s > t && --c, a = new Array(i = c - l2 + 1); ++o < i; ) a[o] = (l2 + o) / s;
    }
    return r && a.reverse(), a;
  }
  function Ln(e2, t, n) {
    var r = (t - e2) / Math.max(0, n), o = Math.floor(Math.log(r) / Math.LN10), i = r / Math.pow(10, o);
    return o >= 0 ? (i >= br ? 10 : i >= yr ? 5 : i >= xr ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= br ? 10 : i >= yr ? 5 : i >= xr ? 2 : 1);
  }
  function wr(e2, t, n) {
    var r = Math.abs(t - e2) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), i = r / o;
    return i >= br ? o *= 10 : i >= yr ? o *= 5 : i >= xr && (o *= 2), t < e2 ? -o : o;
  }
  function Mn(e2, t, n) {
    e2 = +e2, t = +t, n = (o = arguments.length) < 2 ? (t = e2, e2 = 0, 1) : o < 3 ? 1 : +n;
    for (var r = -1, o = Math.max(0, Math.ceil((t - e2) / n)) | 0, i = new Array(o); ++r < o; ) i[r] = e2 + r * n;
    return i;
  }
  function at2(e2, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e2);
        break;
      default:
        this.range(t).domain(e2);
        break;
    }
    return this;
  }
  var Ei = /* @__PURE__ */ Symbol("implicit");
  function Sn() {
    var e2 = new it2(), t = [], n = [], r = Ei;
    function o(i) {
      let a = e2.get(i);
      if (a === void 0) {
        if (r !== Ei) return r;
        e2.set(i, a = t.push(i) - 1);
      }
      return n[a % n.length];
    }
    return o.domain = function(i) {
      if (!arguments.length) return t.slice();
      t = [], e2 = new it2();
      for (let a of i) e2.has(a) || e2.set(a, t.push(a) - 1);
      return o;
    }, o.range = function(i) {
      return arguments.length ? (n = Array.from(i), o) : n.slice();
    }, o.unknown = function(i) {
      return arguments.length ? (r = i, o) : r;
    }, o.copy = function() {
      return Sn(t, n).unknown(r);
    }, at2.apply(o, arguments), o;
  }
  function Ht() {
    var e2 = Sn().unknown(void 0), t = e2.domain, n = e2.range, r = 0, o = 1, i, a, s = false, l2 = 0, c = 0, u = 0.5;
    delete e2.unknown;
    function d() {
      var p = t().length, f2 = o < r, g = f2 ? o : r, b = f2 ? r : o;
      i = (b - g) / Math.max(1, p - l2 + c * 2), s && (i = Math.floor(i)), g += (b - g - i * (p - l2)) * u, a = i * (1 - l2), s && (g = Math.round(g), a = Math.round(a));
      var m = Mn(p).map(function(v) {
        return g + i * v;
      });
      return n(f2 ? m.reverse() : m);
    }
    return e2.domain = function(p) {
      return arguments.length ? (t(p), d()) : t();
    }, e2.range = function(p) {
      return arguments.length ? ([r, o] = p, r = +r, o = +o, d()) : [r, o];
    }, e2.rangeRound = function(p) {
      return [r, o] = p, r = +r, o = +o, s = true, d();
    }, e2.bandwidth = function() {
      return a;
    }, e2.step = function() {
      return i;
    }, e2.round = function(p) {
      return arguments.length ? (s = !!p, d()) : s;
    }, e2.padding = function(p) {
      return arguments.length ? (l2 = Math.min(1, c = +p), d()) : l2;
    }, e2.paddingInner = function(p) {
      return arguments.length ? (l2 = Math.min(1, p), d()) : l2;
    }, e2.paddingOuter = function(p) {
      return arguments.length ? (c = +p, d()) : c;
    }, e2.align = function(p) {
      return arguments.length ? (u = Math.max(0, Math.min(1, p)), d()) : u;
    }, e2.copy = function() {
      return Ht(t(), [r, o]).round(s).paddingInner(l2).paddingOuter(c).align(u);
    }, at2.apply(d(), arguments);
  }
  function ve2(e2, t, n) {
    e2.prototype = t.prototype = n, n.constructor = e2;
  }
  function Me2(e2, t) {
    var n = Object.create(e2.prototype);
    for (var r in t) n[r] = t[r];
    return n;
  }
  function de2() {
  }
  var Se2 = 0.7;
  var ze2 = 1 / Se2;
  var st2 = "\\s*([+-]?\\d+)\\s*";
  var Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var ue2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Rl = /^#([0-9a-f]{3,8})$/;
  var Tl = new RegExp(`^rgb\\(${st2},${st2},${st2}\\)$`);
  var $l = new RegExp(`^rgb\\(${ue2},${ue2},${ue2}\\)$`);
  var Ol = new RegExp(`^rgba\\(${st2},${st2},${st2},${Bt}\\)$`);
  var El = new RegExp(`^rgba\\(${ue2},${ue2},${ue2},${Bt}\\)$`);
  var Al = new RegExp(`^hsl\\(${Bt},${ue2},${ue2}\\)$`);
  var Dl = new RegExp(`^hsla\\(${Bt},${ue2},${ue2},${Bt}\\)$`);
  var Ai = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  ve2(de2, Ce2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: Di, formatHex: Di, formatHex8: Il, formatHsl: Fl, formatRgb: Ii, toString: Ii });
  function Di() {
    return this.rgb().formatHex();
  }
  function Il() {
    return this.rgb().formatHex8();
  }
  function Fl() {
    return zi(this).formatHsl();
  }
  function Ii() {
    return this.rgb().formatRgb();
  }
  function Ce2(e2) {
    var t, n;
    return e2 = (e2 + "").trim().toLowerCase(), (t = Rl.exec(e2)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fi(t) : n === 3 ? new Z(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Cn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Cn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Tl.exec(e2)) ? new Z(t[1], t[2], t[3], 1) : (t = $l.exec(e2)) ? new Z(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ol.exec(e2)) ? Cn(t[1], t[2], t[3], t[4]) : (t = El.exec(e2)) ? Cn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Al.exec(e2)) ? Bi(t[1], t[2] / 100, t[3] / 100, 1) : (t = Dl.exec(e2)) ? Bi(t[1], t[2] / 100, t[3] / 100, t[4]) : Ai.hasOwnProperty(e2) ? Fi(Ai[e2]) : e2 === "transparent" ? new Z(NaN, NaN, NaN, 0) : null;
  }
  function Fi(e2) {
    return new Z(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Cn(e2, t, n, r) {
    return r <= 0 && (e2 = t = n = NaN), new Z(e2, t, n, r);
  }
  function _t(e2) {
    return e2 instanceof de2 || (e2 = Ce2(e2)), e2 ? (e2 = e2.rgb(), new Z(e2.r, e2.g, e2.b, e2.opacity)) : new Z();
  }
  function lt2(e2, t, n, r) {
    return arguments.length === 1 ? _t(e2) : new Z(e2, t, n, r ?? 1);
  }
  function Z(e2, t, n, r) {
    this.r = +e2, this.g = +t, this.b = +n, this.opacity = +r;
  }
  ve2(Z, lt2, Me2(de2, { brighter(e2) {
    return e2 = e2 == null ? ze2 : Math.pow(ze2, e2), new Z(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Se2 : Math.pow(Se2, e2), new Z(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new Z(_e2(this.r), _e2(this.g), _e2(this.b), Pn(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: Vi, formatHex: Vi, formatHex8: Vl, formatRgb: Hi, toString: Hi }));
  function Vi() {
    return `#${Be2(this.r)}${Be2(this.g)}${Be2(this.b)}`;
  }
  function Vl() {
    return `#${Be2(this.r)}${Be2(this.g)}${Be2(this.b)}${Be2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Hi() {
    let e2 = Pn(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${_e2(this.r)}, ${_e2(this.g)}, ${_e2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function Pn(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function _e2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function Be2(e2) {
    return e2 = _e2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Bi(e2, t, n, r) {
    return r <= 0 ? e2 = t = n = NaN : n <= 0 || n >= 1 ? e2 = t = NaN : t <= 0 && (e2 = NaN), new se2(e2, t, n, r);
  }
  function zi(e2) {
    if (e2 instanceof se2) return new se2(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof de2 || (e2 = Ce2(e2)), !e2) return new se2();
    if (e2 instanceof se2) return e2;
    e2 = e2.rgb();
    var t = e2.r / 255, n = e2.g / 255, r = e2.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l2 = (i + o) / 2;
    return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l2 < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l2 > 0 && l2 < 1 ? 0 : a, new se2(a, s, l2, e2.opacity);
  }
  function zt(e2, t, n, r) {
    return arguments.length === 1 ? zi(e2) : new se2(e2, t, n, r ?? 1);
  }
  function se2(e2, t, n, r) {
    this.h = +e2, this.s = +t, this.l = +n, this.opacity = +r;
  }
  ve2(se2, zt, Me2(de2, { brighter(e2) {
    return e2 = e2 == null ? ze2 : Math.pow(ze2, e2), new se2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Se2 : Math.pow(Se2, e2), new se2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e2) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Z(kr(e2 >= 240 ? e2 - 240 : e2 + 120, o, r), kr(e2, o, r), kr(e2 < 120 ? e2 + 240 : e2 - 120, o, r), this.opacity);
  }, clamp() {
    return new se2(_i(this.h), Nn(this.s), Nn(this.l), Pn(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = Pn(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${_i(this.h)}, ${Nn(this.s) * 100}%, ${Nn(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function _i(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function Nn(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function kr(e2, t, n) {
    return (e2 < 60 ? t + (n - t) * e2 / 60 : e2 < 180 ? n : e2 < 240 ? t + (n - t) * (240 - e2) / 60 : t) * 255;
  }
  var Rn = Math.PI / 180;
  var Tn = 180 / Math.PI;
  var $n = 18;
  var qi = 0.96422;
  var Wi = 1;
  var Ui = 0.82521;
  var ji = 4 / 29;
  var ct2 = 6 / 29;
  var Zi = 3 * ct2 * ct2;
  var Hl = ct2 * ct2 * ct2;
  function Ki(e2) {
    if (e2 instanceof pe2) return new pe2(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof be2) return Gi(e2);
    e2 instanceof Z || (e2 = _t(e2));
    var t = Cr(e2.r), n = Cr(e2.g), r = Cr(e2.b), o = Lr((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / Wi), i, a;
    return t === n && n === r ? i = a = o : (i = Lr((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / qi), a = Lr((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / Ui)), new pe2(116 * o - 16, 500 * (i - o), 200 * (o - a), e2.opacity);
  }
  function ut2(e2, t, n, r) {
    return arguments.length === 1 ? Ki(e2) : new pe2(e2, t, n, r ?? 1);
  }
  function pe2(e2, t, n, r) {
    this.l = +e2, this.a = +t, this.b = +n, this.opacity = +r;
  }
  ve2(pe2, ut2, Me2(de2, { brighter(e2) {
    return new pe2(this.l + $n * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new pe2(this.l - $n * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, t = isNaN(this.a) ? e2 : e2 + this.a / 500, n = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return t = qi * Mr(t), e2 = Wi * Mr(e2), n = Ui * Mr(n), new Z(Sr(3.1338561 * t - 1.6168667 * e2 - 0.4906146 * n), Sr(-0.9787684 * t + 1.9161415 * e2 + 0.033454 * n), Sr(0.0719453 * t - 0.2289914 * e2 + 1.4052427 * n), this.opacity);
  } }));
  function Lr(e2) {
    return e2 > Hl ? Math.pow(e2, 1 / 3) : e2 / Zi + ji;
  }
  function Mr(e2) {
    return e2 > ct2 ? e2 * e2 * e2 : Zi * (e2 - ji);
  }
  function Sr(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Cr(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Bl(e2) {
    if (e2 instanceof be2) return new be2(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof pe2 || (e2 = Ki(e2)), e2.a === 0 && e2.b === 0) return new be2(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var t = Math.atan2(e2.b, e2.a) * Tn;
    return new be2(t < 0 ? t + 360 : t, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function qt(e2, t, n, r) {
    return arguments.length === 1 ? Bl(e2) : new be2(e2, t, n, r ?? 1);
  }
  function be2(e2, t, n, r) {
    this.h = +e2, this.c = +t, this.l = +n, this.opacity = +r;
  }
  function Gi(e2) {
    if (isNaN(e2.h)) return new pe2(e2.l, 0, 0, e2.opacity);
    var t = e2.h * Rn;
    return new pe2(e2.l, Math.cos(t) * e2.c, Math.sin(t) * e2.c, e2.opacity);
  }
  ve2(be2, qt, Me2(de2, { brighter(e2) {
    return new be2(this.h, this.c, this.l + $n * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new be2(this.h, this.c, this.l - $n * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Gi(this).rgb();
  } }));
  var Qi = -0.14861;
  var Nr = 1.78277;
  var Pr = -0.29227;
  var On = -0.90649;
  var Wt = 1.97294;
  var Yi = Wt * On;
  var Xi = Wt * Nr;
  var Ji = Nr * Pr - On * Qi;
  function _l(e2) {
    if (e2 instanceof qe2) return new qe2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof Z || (e2 = _t(e2));
    var t = e2.r / 255, n = e2.g / 255, r = e2.b / 255, o = (Ji * r + Yi * t - Xi * n) / (Ji + Yi - Xi), i = r - o, a = (Wt * (n - o) - Pr * i) / On, s = Math.sqrt(a * a + i * i) / (Wt * o * (1 - o)), l2 = s ? Math.atan2(a, i) * Tn - 120 : NaN;
    return new qe2(l2 < 0 ? l2 + 360 : l2, s, o, e2.opacity);
  }
  function dt2(e2, t, n, r) {
    return arguments.length === 1 ? _l(e2) : new qe2(e2, t, n, r ?? 1);
  }
  function qe2(e2, t, n, r) {
    this.h = +e2, this.s = +t, this.l = +n, this.opacity = +r;
  }
  ve2(qe2, dt2, Me2(de2, { brighter(e2) {
    return e2 = e2 == null ? ze2 : Math.pow(ze2, e2), new qe2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Se2 : Math.pow(Se2, e2), new qe2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * Rn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e2), o = Math.sin(e2);
    return new Z(255 * (t + n * (Qi * r + Nr * o)), 255 * (t + n * (Pr * r + On * o)), 255 * (t + n * (Wt * r)), this.opacity);
  } }));
  function Rr(e2, t, n, r, o) {
    var i = e2 * e2, a = i * e2;
    return ((1 - 3 * e2 + 3 * i - a) * t + (4 - 6 * i + 3 * a) * n + (1 + 3 * e2 + 3 * i - 3 * a) * r + a * o) / 6;
  }
  function ea(e2) {
    var t = e2.length - 1;
    return function(n) {
      var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), o = e2[r], i = e2[r + 1], a = r > 0 ? e2[r - 1] : 2 * o - i, s = r < t - 1 ? e2[r + 2] : 2 * i - o;
      return Rr((n - r / t) * t, a, o, i, s);
    };
  }
  function ta(e2) {
    var t = e2.length;
    return function(n) {
      var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), o = e2[(r + t - 1) % t], i = e2[r % t], a = e2[(r + 1) % t], s = e2[(r + 2) % t];
      return Rr((n - r / t) * t, o, i, a, s);
    };
  }
  var pt2 = (e2) => () => e2;
  function na(e2, t) {
    return function(n) {
      return e2 + n * t;
    };
  }
  function zl(e2, t, n) {
    return e2 = Math.pow(e2, n), t = Math.pow(t, n) - e2, n = 1 / n, function(r) {
      return Math.pow(e2 + r * t, n);
    };
  }
  function ft2(e2, t) {
    var n = t - e2;
    return n ? na(e2, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : pt2(isNaN(e2) ? t : e2);
  }
  function ra(e2) {
    return (e2 = +e2) == 1 ? _ : function(t, n) {
      return n - t ? zl(t, n, e2) : pt2(isNaN(t) ? n : t);
    };
  }
  function _(e2, t) {
    var n = t - e2;
    return n ? na(e2, n) : pt2(isNaN(e2) ? t : e2);
  }
  var mt2 = (function e(t) {
    var n = ra(t);
    function r(o, i) {
      var a = n((o = lt2(o)).r, (i = lt2(i)).r), s = n(o.g, i.g), l2 = n(o.b, i.b), c = _(o.opacity, i.opacity);
      return function(u) {
        return o.r = a(u), o.g = s(u), o.b = l2(u), o.opacity = c(u), o + "";
      };
    }
    return r.gamma = e, r;
  })(1);
  function oa(e2) {
    return function(t) {
      var n = t.length, r = new Array(n), o = new Array(n), i = new Array(n), a, s;
      for (a = 0; a < n; ++a) s = lt2(t[a]), r[a] = s.r || 0, o[a] = s.g || 0, i[a] = s.b || 0;
      return r = e2(r), o = e2(o), i = e2(i), s.opacity = 1, function(l2) {
        return s.r = r(l2), s.g = o(l2), s.b = i(l2), s + "";
      };
    };
  }
  var ql = oa(ea);
  var Wl = oa(ta);
  function ia(e2, t) {
    t || (t = []);
    var n = e2 ? Math.min(t.length, e2.length) : 0, r = t.slice(), o;
    return function(i) {
      for (o = 0; o < n; ++o) r[o] = e2[o] * (1 - i) + t[o] * i;
      return r;
    };
  }
  function aa(e2) {
    return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
  }
  function sa(e2, t) {
    var n = t ? t.length : 0, r = e2 ? Math.min(n, e2.length) : 0, o = new Array(r), i = new Array(n), a;
    for (a = 0; a < r; ++a) o[a] = We2(e2[a], t[a]);
    for (; a < n; ++a) i[a] = t[a];
    return function(s) {
      for (a = 0; a < r; ++a) i[a] = o[a](s);
      return i;
    };
  }
  function la(e2, t) {
    var n = /* @__PURE__ */ new Date();
    return e2 = +e2, t = +t, function(r) {
      return n.setTime(e2 * (1 - r) + t * r), n;
    };
  }
  function Ne2(e2, t) {
    return e2 = +e2, t = +t, function(n) {
      return e2 * (1 - n) + t * n;
    };
  }
  function ca(e2, t) {
    var n = {}, r = {}, o;
    (e2 === null || typeof e2 != "object") && (e2 = {}), (t === null || typeof t != "object") && (t = {});
    for (o in t) o in e2 ? n[o] = We2(e2[o], t[o]) : r[o] = t[o];
    return function(i) {
      for (o in n) r[o] = n[o](i);
      return r;
    };
  }
  var $r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Tr = new RegExp($r.source, "g");
  function Ul(e2) {
    return function() {
      return e2;
    };
  }
  function jl(e2) {
    return function(t) {
      return e2(t) + "";
    };
  }
  function ua(e2, t) {
    var n = $r.lastIndex = Tr.lastIndex = 0, r, o, i, a = -1, s = [], l2 = [];
    for (e2 = e2 + "", t = t + ""; (r = $r.exec(e2)) && (o = Tr.exec(t)); ) (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l2.push({ i: a, x: Ne2(r, o) })), n = Tr.lastIndex;
    return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l2[0] ? jl(l2[0].x) : Ul(t) : (t = l2.length, function(c) {
      for (var u = 0, d; u < t; ++u) s[(d = l2[u]).i] = d.x(c);
      return s.join("");
    });
  }
  function We2(e2, t) {
    var n = typeof t, r;
    return t == null || n === "boolean" ? pt2(t) : (n === "number" ? Ne2 : n === "string" ? (r = Ce2(t)) ? (t = r, mt2) : ua : t instanceof Ce2 ? mt2 : t instanceof Date ? la : aa(t) ? ia : Array.isArray(t) ? sa : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ca : Ne2)(e2, t);
  }
  function Ut(e2, t) {
    return e2 = +e2, t = +t, function(n) {
      return Math.round(e2 * (1 - n) + t * n);
    };
  }
  function da(e2) {
    return function(t, n) {
      var r = e2((t = zt(t)).h, (n = zt(n)).h), o = _(t.s, n.s), i = _(t.l, n.l), a = _(t.opacity, n.opacity);
      return function(s) {
        return t.h = r(s), t.s = o(s), t.l = i(s), t.opacity = a(s), t + "";
      };
    };
  }
  var Or = da(ft2);
  var Er = da(_);
  function En(e2, t) {
    var n = _((e2 = ut2(e2)).l, (t = ut2(t)).l), r = _(e2.a, t.a), o = _(e2.b, t.b), i = _(e2.opacity, t.opacity);
    return function(a) {
      return e2.l = n(a), e2.a = r(a), e2.b = o(a), e2.opacity = i(a), e2 + "";
    };
  }
  function pa(e2) {
    return function(t, n) {
      var r = e2((t = qt(t)).h, (n = qt(n)).h), o = _(t.c, n.c), i = _(t.l, n.l), a = _(t.opacity, n.opacity);
      return function(s) {
        return t.h = r(s), t.c = o(s), t.l = i(s), t.opacity = a(s), t + "";
      };
    };
  }
  var Ar = pa(ft2);
  var Dr = pa(_);
  function fa(e2) {
    return (function t(n) {
      n = +n;
      function r(o, i) {
        var a = e2((o = dt2(o)).h, (i = dt2(i)).h), s = _(o.s, i.s), l2 = _(o.l, i.l), c = _(o.opacity, i.opacity);
        return function(u) {
          return o.h = a(u), o.s = s(u), o.l = l2(Math.pow(u, n)), o.opacity = c(u), o + "";
        };
      }
      return r.gamma = t, r;
    })(1);
  }
  var Ir = fa(ft2);
  var Fr = fa(_);
  function Vr(e2) {
    return function() {
      return e2;
    };
  }
  function Hr(e2) {
    return +e2;
  }
  var ma = [0, 1];
  function ht2(e2) {
    return e2;
  }
  function Br(e2, t) {
    return (t -= e2 = +e2) ? function(n) {
      return (n - e2) / t;
    } : Vr(isNaN(t) ? NaN : 0.5);
  }
  function Zl(e2, t) {
    var n;
    return e2 > t && (n = e2, e2 = t, t = n), function(r) {
      return Math.max(e2, Math.min(t, r));
    };
  }
  function Kl(e2, t, n) {
    var r = e2[0], o = e2[1], i = t[0], a = t[1];
    return o < r ? (r = Br(o, r), i = n(a, i)) : (r = Br(r, o), i = n(i, a)), function(s) {
      return i(r(s));
    };
  }
  function Gl(e2, t, n) {
    var r = Math.min(e2.length, t.length) - 1, o = new Array(r), i = new Array(r), a = -1;
    for (e2[r] < e2[0] && (e2 = e2.slice().reverse(), t = t.slice().reverse()); ++a < r; ) o[a] = Br(e2[a], e2[a + 1]), i[a] = n(t[a], t[a + 1]);
    return function(s) {
      var l2 = vr(e2, s, 1, r) - 1;
      return i[l2](o[l2](s));
    };
  }
  function ha(e2, t) {
    return t.domain(e2.domain()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
  }
  function Yl() {
    var e2 = ma, t = ma, n = We2, r, o, i, a = ht2, s, l2, c;
    function u() {
      var p = Math.min(e2.length, t.length);
      return a !== ht2 && (a = Zl(e2[0], e2[p - 1])), s = p > 2 ? Gl : Kl, l2 = c = null, d;
    }
    function d(p) {
      return p == null || isNaN(p = +p) ? i : (l2 || (l2 = s(e2.map(r), t, n)))(r(a(p)));
    }
    return d.invert = function(p) {
      return a(o((c || (c = s(t, e2.map(r), Ne2)))(p)));
    }, d.domain = function(p) {
      return arguments.length ? (e2 = Array.from(p, Hr), u()) : e2.slice();
    }, d.range = function(p) {
      return arguments.length ? (t = Array.from(p), u()) : t.slice();
    }, d.rangeRound = function(p) {
      return t = Array.from(p), n = Ut, u();
    }, d.clamp = function(p) {
      return arguments.length ? (a = p ? true : ht2, u()) : a !== ht2;
    }, d.interpolate = function(p) {
      return arguments.length ? (n = p, u()) : n;
    }, d.unknown = function(p) {
      return arguments.length ? (i = p, d) : i;
    }, function(p, f2) {
      return r = p, o = f2, u();
    };
  }
  function _r() {
    return Yl()(ht2, ht2);
  }
  function ga(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function Ue2(e2, t) {
    if ((n = (e2 = t ? e2.toExponential(t - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var n, r = e2.slice(0, n);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +e2.slice(n + 1)];
  }
  function fe2(e2) {
    return e2 = Ue2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function va(e2, t) {
    return function(n, r) {
      for (var o = n.length, i = [], a = 0, s = e2[0], l2 = 0; o > 0 && s > 0 && (l2 + s + 1 > r && (s = Math.max(1, r - l2)), i.push(n.substring(o -= s, o + s)), !((l2 += s + 1) > r)); ) s = e2[a = (a + 1) % e2.length];
      return i.reverse().join(t);
    };
  }
  function ba(e2) {
    return function(t) {
      return t.replace(/[0-9]/g, function(n) {
        return e2[+n];
      });
    };
  }
  var Xl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Pe2(e2) {
    if (!(t = Xl.exec(e2))) throw new Error("invalid format: " + e2);
    var t;
    return new An({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  Pe2.prototype = An.prototype;
  function An(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  An.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function ya(e2) {
    e: for (var t = e2.length, n = 1, r = -1, o; n < t; ++n) switch (e2[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), o = n;
        break;
      default:
        if (!+e2[n]) break e;
        r > 0 && (r = 0);
        break;
    }
    return r > 0 ? e2.slice(0, r) + e2.slice(o + 1) : e2;
  }
  var zr;
  function xa(e2, t) {
    var n = Ue2(e2, t);
    if (!n) return e2 + "";
    var r = n[0], o = n[1], i = o - (zr = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = r.length;
    return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Ue2(e2, Math.max(0, t + i - 1))[0];
  }
  function qr(e2, t) {
    var n = Ue2(e2, t);
    if (!n) return e2 + "";
    var r = n[0], o = n[1];
    return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
  }
  var Wr = { "%": (e2, t) => (e2 * 100).toFixed(t), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: ga, e: (e2, t) => e2.toExponential(t), f: (e2, t) => e2.toFixed(t), g: (e2, t) => e2.toPrecision(t), o: (e2) => Math.round(e2).toString(8), p: (e2, t) => qr(e2 * 100, t), r: qr, s: xa, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Ur(e2) {
    return e2;
  }
  var wa = Array.prototype.map;
  var ka = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function La(e2) {
    var t = e2.grouping === void 0 || e2.thousands === void 0 ? Ur : va(wa.call(e2.grouping, Number), e2.thousands + ""), n = e2.currency === void 0 ? "" : e2.currency[0] + "", r = e2.currency === void 0 ? "" : e2.currency[1] + "", o = e2.decimal === void 0 ? "." : e2.decimal + "", i = e2.numerals === void 0 ? Ur : ba(wa.call(e2.numerals, String)), a = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", l2 = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function c(d) {
      d = Pe2(d);
      var p = d.fill, f2 = d.align, g = d.sign, b = d.symbol, m = d.zero, v = d.width, L2 = d.comma, $ = d.precision, M2 = d.trim, T = d.type;
      T === "n" ? (L2 = true, T = "g") : Wr[T] || ($ === void 0 && ($ = 12), M2 = true, T = "g"), (m || p === "0" && f2 === "=") && (m = true, p = "0", f2 = "=");
      var j = b === "$" ? n : b === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", O2 = b === "$" ? r : /[%p]/.test(T) ? a : "", P2 = Wr[T], x2 = /[defgprs%]/.test(T);
      $ = $ === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
      function S(C) {
        var B2 = j, y = O2, Y, Ot, Fe2;
        if (T === "c") y = P2(C) + y, C = "";
        else {
          C = +C;
          var Ve2 = C < 0 || 1 / C < 0;
          if (C = isNaN(C) ? l2 : P2(Math.abs(C), $), M2 && (C = ya(C)), Ve2 && +C == 0 && g !== "+" && (Ve2 = false), B2 = (Ve2 ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + B2, y = (T === "s" ? ka[8 + zr / 3] : "") + y + (Ve2 && g === "(" ? ")" : ""), x2) {
            for (Y = -1, Ot = C.length; ++Y < Ot; ) if (Fe2 = C.charCodeAt(Y), 48 > Fe2 || Fe2 > 57) {
              y = (Fe2 === 46 ? o + C.slice(Y + 1) : C.slice(Y)) + y, C = C.slice(0, Y);
              break;
            }
          }
        }
        L2 && !m && (C = t(C, 1 / 0));
        var hn = B2.length + C.length + y.length, ge2 = hn < v ? new Array(v - hn + 1).join(p) : "";
        switch (L2 && m && (C = t(ge2 + C, ge2.length ? v - y.length : 1 / 0), ge2 = ""), f2) {
          case "<":
            C = B2 + C + y + ge2;
            break;
          case "=":
            C = B2 + ge2 + C + y;
            break;
          case "^":
            C = ge2.slice(0, hn = ge2.length >> 1) + B2 + C + y + ge2.slice(hn);
            break;
          default:
            C = ge2 + B2 + C + y;
            break;
        }
        return i(C);
      }
      return S.toString = function() {
        return d + "";
      }, S;
    }
    function u(d, p) {
      var f2 = c((d = Pe2(d), d.type = "f", d)), g = Math.max(-8, Math.min(8, Math.floor(fe2(p) / 3))) * 3, b = Math.pow(10, -g), m = ka[8 + g / 3];
      return function(v) {
        return f2(b * v) + m;
      };
    }
    return { format: c, formatPrefix: u };
  }
  var Dn;
  var In;
  var Fn;
  jr({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function jr(e2) {
    return Dn = La(e2), In = Dn.format, Fn = Dn.formatPrefix, Dn;
  }
  function Zr(e2) {
    return Math.max(0, -fe2(Math.abs(e2)));
  }
  function Kr(e2, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(fe2(t) / 3))) * 3 - fe2(Math.abs(e2)));
  }
  function Gr(e2, t) {
    return e2 = Math.abs(e2), t = Math.abs(t) - e2, Math.max(0, fe2(t) - fe2(e2)) + 1;
  }
  function Yr(e2, t, n, r) {
    var o = wr(e2, t, n), i;
    switch (r = Pe2(r ?? ",f"), r.type) {
      case "s": {
        var a = Math.max(Math.abs(e2), Math.abs(t));
        return r.precision == null && !isNaN(i = Kr(o, a)) && (r.precision = i), Fn(r, a);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        r.precision == null && !isNaN(i = Gr(o, Math.max(Math.abs(e2), Math.abs(t)))) && (r.precision = i - (r.type === "e"));
        break;
      }
      case "f":
      case "%": {
        r.precision == null && !isNaN(i = Zr(o)) && (r.precision = i - (r.type === "%") * 2);
        break;
      }
    }
    return In(r);
  }
  function Jl(e2) {
    var t = e2.domain;
    return e2.ticks = function(n) {
      var r = t();
      return kn(r[0], r[r.length - 1], n ?? 10);
    }, e2.tickFormat = function(n, r) {
      var o = t();
      return Yr(o[0], o[o.length - 1], n ?? 10, r);
    }, e2.nice = function(n) {
      n == null && (n = 10);
      var r = t(), o = 0, i = r.length - 1, a = r[o], s = r[i], l2, c, u = 10;
      for (s < a && (c = a, a = s, s = c, c = o, o = i, i = c); u-- > 0; ) {
        if (c = Ln(a, s, n), c === l2) return r[o] = a, r[i] = s, t(r);
        if (c > 0) a = Math.floor(a / c) * c, s = Math.ceil(s / c) * c;
        else if (c < 0) a = Math.ceil(a * c) / c, s = Math.floor(s * c) / c;
        else break;
        l2 = c;
      }
      return e2;
    }, e2;
  }
  function jt() {
    var e2 = _r();
    return e2.copy = function() {
      return ha(e2, jt());
    }, at2.apply(e2, arguments), Jl(e2);
  }
  var Xr = /* @__PURE__ */ new Date();
  var Jr = /* @__PURE__ */ new Date();
  function z2(e2, t, n, r) {
    function o(i) {
      return e2(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
    }
    return o.floor = (i) => (e2(i = /* @__PURE__ */ new Date(+i)), i), o.ceil = (i) => (e2(i = new Date(i - 1)), t(i, 1), e2(i), i), o.round = (i) => {
      let a = o(i), s = o.ceil(i);
      return i - a < s - i ? a : s;
    }, o.offset = (i, a) => (t(i = /* @__PURE__ */ new Date(+i), a == null ? 1 : Math.floor(a)), i), o.range = (i, a, s) => {
      let l2 = [];
      if (i = o.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < a) || !(s > 0)) return l2;
      let c;
      do
        l2.push(c = /* @__PURE__ */ new Date(+i)), t(i, s), e2(i);
      while (c < i && i < a);
      return l2;
    }, o.filter = (i) => z2((a) => {
      if (a >= a) for (; e2(a), !i(a); ) a.setTime(a - 1);
    }, (a, s) => {
      if (a >= a) if (s < 0) for (; ++s <= 0; ) for (; t(a, -1), !i(a); ) ;
      else for (; --s >= 0; ) for (; t(a, 1), !i(a); ) ;
    }), n && (o.count = (i, a) => (Xr.setTime(+i), Jr.setTime(+a), e2(Xr), e2(Jr), Math.floor(n(Xr, Jr))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(r ? (a) => r(a) % i === 0 : (a) => o.count(0, a) % i === 0) : o)), o;
  }
  var je2 = z2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, t) => {
    e2.setTime(+e2 + t * 1e3);
  }, (e2, t) => (t - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Ma = je2.range;
  var Vn = z2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 6e4);
  }, (e2, t) => (t - e2) / 6e4, (e2) => e2.getMinutes());
  var Ql = Vn.range;
  var Hn = z2((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 6e4);
  }, (e2, t) => (t - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var ec = Hn.range;
  var Bn = z2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 36e5);
  }, (e2, t) => (t - e2) / 36e5, (e2) => e2.getHours());
  var tc = Bn.range;
  var _n = z2((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 36e5);
  }, (e2, t) => (t - e2) / 36e5, (e2) => e2.getUTCHours());
  var nc = _n.range;
  var zn = z2((e2) => e2.setHours(0, 0, 0, 0), (e2, t) => e2.setDate(e2.getDate() + t), (e2, t) => (t - e2 - (t.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var rc = zn.range;
  var qn = z2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCDate(e2.getUTCDate() + t);
  }, (e2, t) => (t - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var oc = qn.range;
  var Sa = z2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCDate(e2.getUTCDate() + t);
  }, (e2, t) => (t - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var ic = Sa.range;
  function Ze2(e2) {
    return z2((t) => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e2) % 7), t.setHours(0, 0, 0, 0);
    }, (t, n) => {
      t.setDate(t.getDate() + n * 7);
    }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var Zt = Ze2(0);
  var Ca = Ze2(1);
  var Na = Ze2(2);
  var Pa = Ze2(3);
  var Ra = Ze2(4);
  var Ta = Ze2(5);
  var $a = Ze2(6);
  var Oa = Zt.range;
  var sc = Ca.range;
  var lc = Na.range;
  var cc = Pa.range;
  var uc = Ra.range;
  var dc = Ta.range;
  var pc = $a.range;
  function Ke2(e2) {
    return z2((t) => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e2) % 7), t.setUTCHours(0, 0, 0, 0);
    }, (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    }, (t, n) => (n - t) / 6048e5);
  }
  var Kt = Ke2(0);
  var Ea = Ke2(1);
  var Aa = Ke2(2);
  var Da = Ke2(3);
  var Ia = Ke2(4);
  var Fa = Ke2(5);
  var Va = Ke2(6);
  var Ha = Kt.range;
  var fc = Ea.range;
  var mc = Aa.range;
  var hc = Da.range;
  var gc = Ia.range;
  var vc = Fa.range;
  var bc = Va.range;
  var Wn = z2((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setMonth(e2.getMonth() + t);
  }, (e2, t) => t.getMonth() - e2.getMonth() + (t.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var yc = Wn.range;
  var Un = z2((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCMonth(e2.getUTCMonth() + t);
  }, (e2, t) => t.getUTCMonth() - e2.getUTCMonth() + (t.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var xc = Un.range;
  var Gt = z2((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setFullYear(e2.getFullYear() + t);
  }, (e2, t) => t.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Gt.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : z2((t) => {
    t.setFullYear(Math.floor(t.getFullYear() / e2) * e2), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setFullYear(t.getFullYear() + n * e2);
  });
  var wc = Gt.range;
  var Yt = z2((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + t);
  }, (e2, t) => t.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  Yt.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : z2((t) => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e2) * e2), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCFullYear(t.getUTCFullYear() + n * e2);
  });
  var kc = Yt.range;
  function no(e2, t) {
    t.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(t.domain));
  }
  function ro(e2, t) {
    t.range && ("padding" in e2, e2.range(t.range));
  }
  function oo(e2, t) {
    "align" in e2 && "align" in t && typeof t.align < "u" && e2.align(t.align);
  }
  function io(e2, t) {
    "base" in e2 && "base" in t && typeof t.base < "u" && e2.base(t.base);
  }
  function ao(e2, t) {
    "clamp" in e2 && "clamp" in t && typeof t.clamp < "u" && e2.clamp(t.clamp);
  }
  function so(e2, t) {
    "constant" in e2 && "constant" in t && typeof t.constant < "u" && e2.constant(t.constant);
  }
  function lo(e2, t) {
    "exponent" in e2 && "exponent" in t && typeof t.exponent < "u" && e2.exponent(t.exponent);
  }
  var Ba = { lab: En, hcl: Ar, "hcl-long": Dr, hsl: Or, "hsl-long": Er, cubehelix: Ir, "cubehelix-long": Fr, rgb: mt2 };
  function co(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Ba[e2];
      default:
    }
    var t = e2.type, n = e2.gamma, r = Ba[t];
    return typeof n > "u" ? r : r.gamma(n);
  }
  function uo(e2, t) {
    if ("interpolate" in t && "interpolate" in e2 && typeof t.interpolate < "u") {
      var n = co(t.interpolate);
      e2.interpolate(n);
    }
  }
  var Lc = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var Mc = "%Y-%m-%d %H:%M";
  function po(e2) {
    var t = e2.tickFormat(1, Mc)(Lc);
    return t === "2020-02-02 03:04";
  }
  var _a = { day: zn, hour: Bn, minute: Vn, month: Wn, second: je2, week: Zt, year: Gt };
  var za = { day: qn, hour: _n, minute: Hn, month: Un, second: je2, week: Kt, year: Yt };
  function fo(e2, t) {
    if ("nice" in t && typeof t.nice < "u" && "nice" in e2) {
      var n = t.nice;
      if (typeof n == "boolean") n && e2.nice();
      else if (typeof n == "number") e2.nice(n);
      else {
        var r = e2, o = po(r);
        if (typeof n == "string") r.nice(o ? za[n] : _a[n]);
        else {
          var i = n.interval, a = n.step, s = (o ? za[i] : _a[i]).every(a);
          s != null && r.nice(s);
        }
      }
    }
  }
  function mo(e2, t) {
    "padding" in e2 && "padding" in t && typeof t.padding < "u" && e2.padding(t.padding), "paddingInner" in e2 && "paddingInner" in t && typeof t.paddingInner < "u" && e2.paddingInner(t.paddingInner), "paddingOuter" in e2 && "paddingOuter" in t && typeof t.paddingOuter < "u" && e2.paddingOuter(t.paddingOuter);
  }
  function ho(e2, t) {
    if (t.reverse) {
      var n = e2.range().slice().reverse();
      "padding" in e2, e2.range(n);
    }
  }
  function go(e2, t) {
    "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e2 ? e2.round(t.round) : "interpolate" in e2 && t.round && e2.interpolate(Ut));
  }
  function vo(e2, t) {
    "unknown" in e2 && "unknown" in t && typeof t.unknown < "u" && e2.unknown(t.unknown);
  }
  function bo(e2, t) {
    if ("zero" in t && t.zero === true) {
      var n = e2.domain(), r = n[0], o = n[1], i = o < r, a = i ? [o, r] : [r, o], s = a[0], l2 = a[1], c = [Math.min(0, s), Math.max(0, l2)];
      e2.domain(i ? c.reverse() : c);
    }
  }
  var Sc = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var Cc = { domain: no, nice: fo, zero: bo, interpolate: uo, round: go, align: oo, base: io, clamp: ao, constant: so, exponent: lo, padding: mo, range: ro, reverse: ho, unknown: vo };
  function Xt() {
    for (var e2 = arguments.length, t = new Array(e2), n = 0; n < e2; n++) t[n] = arguments[n];
    var r = new Set(t), o = Sc.filter(function(i) {
      return r.has(i);
    });
    return function(a, s) {
      return typeof s < "u" && o.forEach(function(l2) {
        Cc[l2](a, s);
      }), a;
    };
  }
  var Nc = Xt("domain", "range", "reverse", "align", "padding", "round");
  function jn(e2) {
    return Nc(Ht(), e2);
  }
  var Pc = Xt("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  function Ge2(e2) {
    return Pc(jt(), e2);
  }
  var xo = Math.PI;
  var wo = 2 * xo;
  var Ye2 = 1e-6;
  var Rc = wo - Ye2;
  function ko() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function qa() {
    return new ko();
  }
  ko.prototype = qa.prototype = { constructor: ko, moveTo: function(e2, t) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +t);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, t) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +t);
  }, quadraticCurveTo: function(e2, t, n, r) {
    this._ += "Q" + +e2 + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  }, bezierCurveTo: function(e2, t, n, r, o, i) {
    this._ += "C" + +e2 + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i);
  }, arcTo: function(e2, t, n, r, o) {
    e2 = +e2, t = +t, n = +n, r = +r, o = +o;
    var i = this._x1, a = this._y1, s = n - e2, l2 = r - t, c = i - e2, u = a - t, d = c * c + u * u;
    if (o < 0) throw new Error("negative radius: " + o);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = t);
    else if (d > Ye2) if (!(Math.abs(u * s - l2 * c) > Ye2) || !o) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = t);
    else {
      var p = n - i, f2 = r - a, g = s * s + l2 * l2, b = p * p + f2 * f2, m = Math.sqrt(g), v = Math.sqrt(d), L2 = o * Math.tan((xo - Math.acos((g + d - b) / (2 * m * v))) / 2), $ = L2 / v, M2 = L2 / m;
      Math.abs($ - 1) > Ye2 && (this._ += "L" + (e2 + $ * c) + "," + (t + $ * u)), this._ += "A" + o + "," + o + ",0,0," + +(u * p > c * f2) + "," + (this._x1 = e2 + M2 * s) + "," + (this._y1 = t + M2 * l2);
    }
  }, arc: function(e2, t, n, r, o, i) {
    e2 = +e2, t = +t, n = +n, i = !!i;
    var a = n * Math.cos(r), s = n * Math.sin(r), l2 = e2 + a, c = t + s, u = 1 ^ i, d = i ? r - o : o - r;
    if (n < 0) throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + l2 + "," + c : (Math.abs(this._x1 - l2) > Ye2 || Math.abs(this._y1 - c) > Ye2) && (this._ += "L" + l2 + "," + c), n && (d < 0 && (d = d % wo + wo), d > Rc ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e2 - a) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = l2) + "," + (this._y1 = c) : d > Ye2 && (this._ += "A" + n + "," + n + ",0," + +(d >= xo) + "," + u + "," + (this._x1 = e2 + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))));
  }, rect: function(e2, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  }, toString: function() {
    return this._;
  } };
  function Wa(e2) {
    this._context = e2;
  }
  Wa.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, t) {
    switch (e2 = +e2, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, t);
        break;
    }
  } };
  var Ga = Mi(yo());
  var Ya = Mi(yo());
  var Oc = ["className", "innerRef"];
  function No() {
    return No = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e2[r] = n[r]);
      }
      return e2;
    }, No.apply(this, arguments);
  }
  function Ec(e2, t) {
    if (e2 == null) return {};
    var n = {}, r = Object.keys(e2), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e2[o]);
    return n;
  }
  function Qt(e2) {
    var t = e2.className, n = e2.innerRef, r = Ec(e2, Oc);
    return import_react9.default.createElement("rect", No({ ref: n, className: (0, Ya.default)("visx-bar", t) }, r));
  }
  var vt = (0, import_react10.createContext)(null);
  function V(e2) {
    let t = (0, import_react10.useContext)(vt);
    return t === null ? {} : en(t, { mark: e2 });
  }
  function Po() {
    return (0, import_react10.useContext)(vt) === null ? {} : { "data-live-mark-text": "" };
  }
  function en(e2, t = {}) {
    return t.mark ? { "data-live-id": e2, "data-live-mark": t.mark } : { "data-live-id": e2 };
  }
  var ye2 = (e2, t = {}) => (0, import_jsx_runtime4.jsx)("path", { d: e2, vectorEffect: "non-scaling-stroke", ...t });
  var Ro = (e2) => (0, import_jsx_runtime4.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: e2 });
  var Ja = Ro(ye2("M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75", { strokeLinecap: "round" }));
  var bt2 = Ro(ye2("M15.0002 20L8.4144 13.4142C7.63335 12.6332 7.63335 11.3669 8.4144 10.5858L15.0002 4", { strokeLinecap: "round", strokeLinejoin: "round" }));
  var yt = Ro(ye2("M9 4L15.5858 10.5858C16.3668 11.3668 16.3668 12.6331 15.5858 13.4142L9 20", { strokeLinecap: "round", strokeLinejoin: "round" }));
  var Qa = { photo: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }), food: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 2v20" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })] }), poultry: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), (0, import_jsx_runtime4.jsx)("path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" })] }), meat: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), (0, import_jsx_runtime4.jsx)("path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "12.5", cy: "8.5", r: "2.5" })] }), fish: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 12v.5" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), (0, import_jsx_runtime4.jsx)("path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" })] }), salad: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M7 21h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), (0, import_jsx_runtime4.jsx)("path", { d: "m13 12 4-4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })] }), bowl: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 21h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M19.5 12 22 6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), (0, import_jsx_runtime4.jsx)("path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" })] }), bread: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), (0, import_jsx_runtime4.jsx)("path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" })] }), pizza: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m12 14-1 1" }), (0, import_jsx_runtime4.jsx)("path", { d: "m13.75 18.25-1.25 1.42" }), (0, import_jsx_runtime4.jsx)("path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" })] }), sandwich: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), (0, import_jsx_runtime4.jsx)("path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), (0, import_jsx_runtime4.jsx)("rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" })] }), dessert: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16 13H3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 17H3" }), (0, import_jsx_runtime4.jsx)("path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "9", cy: "7", r: "2" })] }), fruit: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" })] }), vegetable: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), (0, import_jsx_runtime4.jsx)("path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" })] }), drink: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M5 8h14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), (0, import_jsx_runtime4.jsx)("path", { d: "m12 8 1-6h2" })] }), coffee: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 2v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M14 2v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 2v2" })] }), wine: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M8 22h8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 10h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 15v7" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" })] }), cocktail: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M8 22h8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 11v11" }), (0, import_jsx_runtime4.jsx)("path", { d: "m19 3-7 8-7-8Z" })] }), place: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }), hotel: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 4v6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M2 18h20" })] }), home: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })] }), building: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 12h4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10 8h4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })] }), flight: (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) }), car: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "7", cy: "17", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M9 17h6" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "17", cy: "17", r: "2" })] }), nature: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 16v6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 19v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" })] }), product: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3.103 6.034h17.794" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" })] }), clothing: (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsx)("path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }) }), device: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 18h.01" })] }), furniture: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M4 18v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 18v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 4v9" })] }), gift: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 7v14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), (0, import_jsx_runtime4.jsx)("rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" })] }), book: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 7v14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })] }), person: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "8", r: "5" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 21a8 8 0 0 0-16 0" })] }), pet: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("circle", { cx: "11", cy: "4", r: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "18", cy: "8", r: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "20", cy: "16", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })] }), music: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M9 18V5l12-2v13" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "6", cy: "18", r: "3" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "18", cy: "16", r: "3" })] }), event: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 5v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 17v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 11v2" })] }) };
  var Vc = Object.keys(Qa);
  function es(e2 = "photo") {
    let t = import_react13.Children.toArray(Qa[Vc.includes(e2) ? e2 : "photo"].props.children);
    return (0, import_jsx_runtime4.jsx)("svg", { className: "file-placeholder-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { "--file-strokes": t.length }, children: t.map((n, r) => (0, import_react13.cloneElement)(n, { pathLength: 1, style: { "--file-stroke": r } })) });
  }
  var Xe2 = (e2) => function({ size: n = 16, className: r }) {
    return (0, import_jsx_runtime4.jsx)("svg", { width: n, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: r, "aria-hidden": "true", children: e2 });
  };
  var xt2 = Xe2(ye2("M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18", { strokeLinecap: "round", strokeLinejoin: "round" }));
  var Yn = Xe2(ye2("M4.75 12.7768L10 19.25L19.25 4.75", { strokeLinecap: "round" }));
  var ts = Xe2(ye2("M15.25 8.75V4C15.25 3.30964 14.6904 2.75 14 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V14C2.75 14.6904 3.30964 15.25 4 15.25H8.75M10 8.75H20C20.6904 8.75 21.25 9.30964 21.25 10V20C21.25 20.6904 20.6904 21.25 20 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20V10C8.75 9.30964 9.30964 8.75 10 8.75Z", { strokeLinecap: "round", strokeLinejoin: "round" }));
  var ns = Xe2((0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [ye2("M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12", { strokeOpacity: 0.3 }), ye2("M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25", { strokeLinecap: "round" })] }));
  var To = Xe2(ye2("M12 5.25V12M12 12V18.75M12 12H5.25M12 12H18.75", { strokeLinecap: "round" }));
  var rs = Xe2((0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: [3.75, 12, 20.25].map((e2) => (0, import_jsx_runtime4.jsx)("circle", { cx: e2, cy: "12", r: "1", fill: "currentColor", vectorEffect: "non-scaling-stroke" }, e2)) }));
  var os = Xe2((0, import_jsx_runtime4.jsx)("path", { d: "M13.3602 1.8549C12.8126 0.715033 11.1861 0.715035 10.6384 1.8549L8.26986 6.78487C8.26986 6.78487 8.26707 6.78867 8.26265 6.78925L2.81303 7.50272C1.55724 7.66713 1.04518 9.21568 1.97288 10.0903L5.95701 13.8466C5.9588 13.8483 5.95864 13.8502 5.95864 13.8502L4.95808 19.2169C4.72462 20.4691 6.04988 21.4152 7.15912 20.8172L11.9937 18.2111C11.9971 18.2093 12.0015 18.2093 12.0049 18.2111L16.8395 20.8172C17.9488 21.4152 19.274 20.4691 19.0406 19.2169L18.04 13.8502C18.04 13.8502 18.0398 13.8483 18.0416 13.8466L22.0258 10.0903C22.9535 9.21568 22.4414 7.66713 21.1856 7.50272L15.736 6.78925C15.7316 6.78867 15.7288 6.78487 15.7288 6.78487L13.3602 1.8549Z", fill: "currentColor", stroke: "none" }));
  function ne2({ variant: e2 = "secondary", compact: t = false, pill: n = false, selected: r, unavailable: o = false, states: i, state: a, className: s, children: l2, ...c }) {
    let u = ["file-button", t && "is-compact", n && "is-pill", o && "is-unavailable", s].filter(Boolean).join(" "), d = i && a !== void 0 ? { states: i, state: a } : null, p = d?.states[d.state];
    return (0, import_jsx_runtime5.jsx)("button", { type: "button", ...c, className: u, "data-variant": e2, "data-state": d?.state, "aria-pressed": r, disabled: o || c.disabled || p?.variant === "disabled", children: d ? (0, import_jsx_runtime5.jsx)(jc, { ...d }) : l2 });
  }
  function Je2({ label: e2, className: t, ...n }) {
    let r = R2();
    return (0, import_jsx_runtime5.jsx)(ne2, { variant: "ghost", ...n, className: ["file-close", t].filter(Boolean).join(" "), "aria-label": e2 ?? r.close, children: Ja });
  }
  var Wc = 320;
  var Uc = typeof window > "u" ? import_react15.useEffect : import_react15.useLayoutEffect;
  function is({ state: e2, className: t, hidden: n = false, faceRef: r }) {
    return (0, import_jsx_runtime5.jsxs)("span", { ref: r, className: t, "aria-hidden": n || void 0, children: [e2.icon, (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function jc({ states: e2, state: t }) {
    let n = (0, import_react15.useRef)(null), r = (0, import_react15.useRef)(null), o = (0, import_react15.useRef)(null), [i, a] = (0, import_react15.useState)(null);
    return Uc(() => {
      let s = r.current.offsetWidth, l2 = o.current;
      if (o.current = { state: t, width: s }, !l2 || l2.state === t) return;
      let c = n.current;
      c.style.width = `${l2.width}px`, c.offsetWidth, c.style.width = `${s}px`, a(l2.state);
      let u = setTimeout(() => {
        c.style.width = "", a(null);
      }, Wc);
      return () => clearTimeout(u);
    }, [t]), (0, import_jsx_runtime5.jsxs)("span", { ref: n, className: "file-button-slot", children: [i !== null && (0, import_jsx_runtime5.jsx)(is, { state: e2[i], className: "file-button-face is-leaving", hidden: true }, `leaving-${i}`), (0, import_jsx_runtime5.jsx)(is, { state: e2[t], className: i !== null ? "file-button-face is-entering" : "file-button-face", faceRef: r }, t)] });
  }
  function Eo({ href: e2, variant: t = "secondary", compact: n = false, pill: r = false, children: o }) {
    let i = tn(e2), a = V(), s = ["file-button", n && "is-compact", r && "is-pill"].filter(Boolean).join(" ");
    if (!i) return (0, import_jsx_runtime5.jsx)("span", { ...a, className: s, "data-variant": t, children: o });
    let l2 = /^(?:https?:|mailto:|tel:|\/\/)/i.test(i);
    return (0, import_jsx_runtime5.jsxs)("a", { ...a, className: s, "data-variant": t, href: i, target: l2 ? "_blank" : void 0, rel: "noopener noreferrer", children: [(0, import_jsx_runtime5.jsx)("span", { children: o }), l2 && (0, import_jsx_runtime5.jsx)(xt2, { size: 16 })] });
  }
  function Zc({ label: e2, options: t, value: n, onChange: r }) {
    let o = import_react15.default.useId();
    return (0, import_jsx_runtime5.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": o, children: [(0, import_jsx_runtime5.jsx)("span", { id: o, className: "file-control-label", children: e2 }), (0, import_jsx_runtime5.jsx)("div", { className: "file-choice-row", children: t.map((i) => (0, import_jsx_runtime5.jsx)(ne2, { compact: true, selected: i.value === n, unavailable: i.unavailable, onClick: () => r(i.value), children: i.label }, i.value)) })] });
  }
  function Kc({ label: e2, value: t, onChange: n, ...r }) {
    let o = import_react15.default.useId();
    return (0, import_jsx_runtime5.jsxs)("div", { className: "file-control", children: [(0, import_jsx_runtime5.jsx)("label", { htmlFor: o, className: "file-control-label", children: e2 }), (0, import_jsx_runtime5.jsx)("input", { id: o, className: "file-field", type: "text", value: t, onChange: (i) => n(i.target.value), ...r })] });
  }
  function wt(e2, t) {
    return (0, import_react16.useEffect)(() => {
      if (!t) return;
      let n = e2.current, r = n.ownerDocument.activeElement, o = !r.matches(":focus-visible"), i = [];
      for (let a = n.parentElement; a; a = a.parentElement) {
        let s = n.ownerDocument.defaultView.getComputedStyle(a);
        if (a !== n.ownerDocument.scrollingElement && !["auto", "scroll"].includes(s.overflowY)) continue;
        i.push({ element: a, overflow: a.style.getPropertyValue("overflow-y"), priority: a.style.getPropertyPriority("overflow-y"), gutter: a.style.getPropertyValue("scrollbar-gutter"), gutterPriority: a.style.getPropertyPriority("scrollbar-gutter") }), (a === n.ownerDocument.documentElement ? n.ownerDocument.defaultView.innerWidth - a.clientWidth : a.offsetWidth - a.clientWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.borderRightWidth)) > 0 && !s.scrollbarGutter.includes("stable") && a.style.setProperty("scrollbar-gutter", "stable", "important"), a.style.setProperty("overflow-y", "hidden", "important");
      }
      return n.showModal(), n.focus({ preventScroll: true }), () => {
        n.close();
        for (let { element: a, overflow: s, priority: l2, gutter: c, gutterPriority: u } of i) a.style.setProperty("overflow-y", s, l2), a.style.setProperty("scrollbar-gutter", c, u);
        r.isConnected && (o && (r.setAttribute("data-quiet-focus", ""), r.addEventListener("blur", () => r.removeAttribute("data-quiet-focus"), { once: true })), r.focus({ preventScroll: true }));
      };
    }, [e2, t]), (0, import_react16.useCallback)((n) => {
      let r = e2.current;
      r.hasAttribute("data-leaving") || (r.setAttribute("data-leaving", ""), Promise.allSettled(r.getAnimations().map((o) => o.finished)).then(n));
    }, [e2]);
  }
  var nn = { scale: 1, x: 0, y: 0 };
  var ps = (e2) => Math.min(4, Math.max(1, e2));
  var cs = (e2, t) => Math.min(t, Math.max(-t, e2));
  var us = (e2, t) => Math.hypot(e2.x - t.x, e2.y - t.y);
  var ds = (e2, t) => ({ x: (e2.x + t.x) / 2, y: (e2.y + t.y) / 2 });
  function eu(e2, t, n) {
    let r = ps(t.scale), o = r === 1 ? nn : { scale: r, x: cs(t.x, e2.offsetWidth * (r - 1) / 2), y: cs(t.y, e2.offsetHeight * (r - 1) / 2) };
    return e2.style.transition = n ? "transform 200ms ease-out" : "none", e2.style.transform = `translate(${o.x}px, ${o.y}px) scale(${o.scale})`, o;
  }
  function Do(e2, t, n, r) {
    let o = e2.parentElement.getBoundingClientRect(), i = { x: o.left + e2.offsetLeft + e2.offsetWidth / 2, y: o.top + e2.offsetTop + e2.offsetHeight / 2 }, a = ps(t), s = a / r.scale;
    return { scale: a, x: r.x + (n.x - i.x - r.x) * (1 - s), y: r.y + (n.y - i.y - r.y) * (1 - s) };
  }
  function xe2({ photos: e2, start: t, title: n, detail: r, onClose: o }) {
    let i = R2(), a = (0, import_react14.useRef)(null), s = (0, import_react14.useRef)(null), l2 = (0, import_react14.useRef)(nn), c = (0, import_react14.useRef)(/* @__PURE__ */ new Map()), u = (0, import_react14.useRef)(null), d = (0, import_react14.useRef)(null), [p, f2] = (0, import_react14.useState)(t), [g, b] = (0, import_react14.useState)(false), m = wt(a, true), v = () => m(o), L2 = (0, import_react14.useCallback)((x2, S) => {
      l2.current = eu(s.current, x2, S), b(l2.current.scale > 1);
    }, []);
    (0, import_react14.useEffect)(() => {
      let x2 = a.current, S = (C) => {
        C.preventDefault(), C.ctrlKey ? L2(Do(s.current, l2.current.scale * Math.exp(-C.deltaY * 0.01), { x: C.clientX, y: C.clientY }, l2.current), false) : l2.current.scale > 1 && L2({ ...l2.current, x: l2.current.x - C.deltaX, y: l2.current.y - C.deltaY }, false);
      };
      return x2.addEventListener("wheel", S, { passive: false }), () => x2.removeEventListener("wheel", S);
    }, [L2]), (0, import_react14.useEffect)(() => {
      let x2 = a.current, S = x2.ownerDocument.activeElement;
      g && S !== x2 && x2.contains(S) && x2.focus({ preventScroll: true });
    }, [g]), (0, import_react14.useEffect)(() => {
      let x2 = a.current, S = x2.ownerDocument.activeElement;
      (!S || !x2.contains(S) || S.matches(":disabled")) && x2.focus({ preventScroll: true });
    }, [p]);
    let $ = (x2) => {
      let S = Math.min(e2.length - 1, Math.max(0, p + x2));
      S !== p && (l2.current = nn, b(false), f2(S));
    }, M2 = (x2) => {
      let S = x2.target;
      if (S.closest("button")) return;
      let C = S.closest(".file-viewer-stage") ? d.current : "outside";
      d.current = null, !(C === null || C === "handled") && (l2.current.scale > 1 ? L2(nn, true) : C === "outside" && v());
    }, T = (x2) => {
      if (x2.target.closest("button")) return;
      x2.preventDefault(), d.current = null;
      try {
        x2.currentTarget.setPointerCapture(x2.pointerId);
      } catch {
      }
      c.current.set(x2.pointerId, { x: x2.clientX, y: x2.clientY });
      let [S, C] = [...c.current.values()];
      c.current.size === 1 ? u.current = { type: l2.current.scale > 1 ? "pan" : "swipe", start: S, origin: l2.current, time: Date.now(), onPhoto: x2.target === s.current } : c.current.size === 2 && (u.current = { type: "pinch", distance: us(S, C), middle: ds(S, C), origin: l2.current });
    }, j = (x2) => {
      let S = u.current;
      if (!S || !c.current.has(x2.pointerId)) return;
      c.current.set(x2.pointerId, { x: x2.clientX, y: x2.clientY });
      let [C, B2] = [...c.current.values()];
      if (S.type === "pinch" && B2) {
        let y = ds(C, B2);
        L2(Do(s.current, S.origin.scale * us(C, B2) / S.distance, y, { scale: S.origin.scale, x: S.origin.x + y.x - S.middle.x, y: S.origin.y + y.y - S.middle.y }), false);
      } else S.type === "pan" && L2({ scale: l2.current.scale, x: S.origin.x + x2.clientX - S.start.x, y: S.origin.y + x2.clientY - S.start.y }, false);
    }, O2 = (x2) => {
      if (!c.current.delete(x2.pointerId)) return;
      let S = u.current, [C] = [...c.current.values()];
      if (C) {
        S?.type === "pinch" && (u.current = { type: "pan", start: C, origin: l2.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (u.current = null, !S) return;
      if (S.type === "pinch" || S.afterPinch) {
        l2.current.scale < 1.05 && L2(nn, true);
        return;
      }
      let B2 = { x: x2.clientX - S.start.x, y: x2.clientY - S.start.y }, y = Date.now();
      if (Math.hypot(B2.x, B2.y) < 10 && y - S.time < 300) {
        S.onPhoto && l2.current.scale === 1 ? (d.current = "handled", L2(Do(s.current, 4, { x: x2.clientX, y: x2.clientY }, l2.current), true)) : d.current = S.onPhoto ? "photo" : "outside";
        return;
      }
      S.type === "swipe" && Math.abs(B2.x) > 40 && Math.abs(B2.x) > Math.abs(B2.y) && $(B2.x < 0 ? 1 : -1);
    }, P2 = e2[p];
    return (0, import_jsx_runtime6.jsxs)("dialog", { ref: a, className: "file-viewer", "data-zoomed": g || void 0, "aria-label": i.photosOf(n), tabIndex: -1, onClick: M2, onCancel: (x2) => {
      x2.preventDefault(), x2.stopPropagation(), v();
    }, onKeyDown: (x2) => {
      x2.key === "Escape" ? (x2.preventDefault(), x2.stopPropagation(), v()) : (x2.key === "ArrowRight" || x2.key === "ArrowLeft") && (x2.preventDefault(), $(x2.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-bar", children: (0, import_jsx_runtime6.jsx)(Je2, { className: "file-viewer-button", onClick: v }) }), (0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-stage", onPointerDown: T, onPointerMove: j, onPointerUp: O2, onPointerCancel: O2, onDragStart: (x2) => x2.preventDefault(), children: (0, import_jsx_runtime6.jsx)("img", { ref: s, src: P2.src, alt: P2.alt, draggable: false }, P2.src) }), (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-footer", children: [e2.length > 1 && (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-steps", children: [(0, import_jsx_runtime6.jsx)(ne2, { variant: "ghost", className: "file-viewer-button", "aria-label": i.previousPhoto, disabled: p === 0, onClick: () => $(-1), children: bt2 }), (0, import_jsx_runtime6.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: i.photoCount(p + 1, e2.length) }), (0, import_jsx_runtime6.jsx)(ne2, { variant: "ghost", className: "file-viewer-button", "aria-label": i.nextPhoto, disabled: p === e2.length - 1, onClick: () => $(1), children: yt })] }), (0, import_jsx_runtime6.jsxs)("span", { className: "file-viewer-title", children: [n, r && ` \xB7 ${r}`] })] })] });
  }
  var Lt = ["pointerdown", "wheel", "touchstart"];
  function ms({ atStart: e2, atEnd: t, onPrevious: n, onNext: r }) {
    let o = R2();
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip-arrows", children: [(0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": o.previousPhoto, disabled: e2, onClick: n, children: bt2 }), (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": o.nextPhoto, disabled: t, onClick: r, children: yt })] });
  }
  function ru(e2) {
    let [t, n] = (0, import_react17.useState)(null), r = (0, import_react17.useRef)(null);
    (0, import_react17.useEffect)(() => {
      let i = e2.current, a = i.ownerDocument.defaultView, s = () => {
        r.current = null;
      }, l2 = () => {
        r.current !== null && Math.abs(i.scrollLeft - r.current) < 2 && s();
        let c = i.scrollWidth - i.clientWidth;
        n(c < 2 ? null : { atStart: i.scrollLeft < 2, atEnd: i.scrollLeft > c - 2 });
      };
      l2(), i.addEventListener("scroll", l2, { passive: true });
      for (let c of Lt) i.addEventListener(c, s, { passive: true });
      return i.addEventListener("load", l2, true), a.addEventListener("resize", l2), () => {
        i.removeEventListener("scroll", l2);
        for (let c of Lt) i.removeEventListener(c, s);
        i.removeEventListener("load", l2, true), a.removeEventListener("resize", l2);
      };
    }, [e2]);
    let o = (i) => {
      let a = e2.current, s = [...a.children], l2 = s.map((p) => p.offsetLeft - s[0].offsetLeft), c = r.current ?? a.scrollLeft, u = i > 0 ? l2.find((p) => p > c + 2) : [...l2].reverse().find((p) => p < c - 2), d = Math.min(a.scrollWidth - a.clientWidth, Math.max(0, u ?? (i > 0 ? a.scrollWidth : 0)));
      r.current = d, a.scrollTo({ left: d, behavior: "smooth" });
    };
    return t && { ...t, onPrevious: () => o(-1), onNext: () => o(1) };
  }
  function Qn({ bleed: e2, className: t, children: n, ...r }) {
    let o = (0, import_react17.useRef)(null), i = ru(o);
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip", "data-bleed": e2 || void 0, children: [(0, import_jsx_runtime7.jsx)("div", { ref: o, ...r, className: [t, e2 && "file-bleed"].filter(Boolean).join(" "), children: n }), i && (0, import_jsx_runtime7.jsx)(ms, { ...i })] });
  }
  function Te2() {
    let e2 = (0, import_react18.useRef)(null), t = (0, import_react18.useRef)(false), n = (r) => {
      e2.current?.pointerId === r.pointerId && (e2.current = null, delete r.currentTarget.dataset.dragging, r.currentTarget.hasPointerCapture(r.pointerId) && r.currentTarget.releasePointerCapture(r.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (r) => {
      r.currentTarget.toggleAttribute("data-can-drag", r.pointerType === "mouse" && r.currentTarget.scrollWidth > r.currentTarget.clientWidth);
    }, onPointerDown: (r) => {
      t.current = false, !(r.pointerType !== "mouse" || r.button !== 0 || r.currentTarget.scrollWidth <= r.currentTarget.clientWidth) && r.target.closest("[data-drag-scroll], dialog") === r.currentTarget && (e2.current = { pointerId: r.pointerId, startX: r.clientX, scrollLeft: r.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (r) => {
      let o = e2.current;
      if (!o || o.pointerId !== r.pointerId) return;
      let i = r.clientX - o.startX;
      !o.active && Math.abs(i) < 5 || (o.active || (o.active = true, t.current = true, r.currentTarget.dataset.dragging = "", r.currentTarget.setPointerCapture(r.pointerId)), r.preventDefault(), r.currentTarget.scrollLeft = o.scrollLeft - i);
    }, onPointerUp: n, onPointerCancel: n, onLostPointerCapture: n, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (r) => r.preventDefault(), onClickCapture: (r) => {
      !t.current || r.detail === 0 || (t.current = false, r.preventDefault(), r.stopPropagation());
    } };
  }
  function K(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function Io({ icon: e2 }) {
    return (0, import_jsx_runtime8.jsx)("span", { className: "file-placeholder", "aria-hidden": "true", children: es(e2) });
  }
  function cu({ children: e2, width: t = "fluid", className: n, ...r }) {
    return (0, import_jsx_runtime8.jsx)(rt2.Provider, { value: ot2(r.lang), children: (0, import_jsx_runtime8.jsx)("main", { dir: vn(r.lang), ...r, className: n ? `file-card ${n}` : "file-card", "data-width": t, children: e2 }) });
  }
  var uu = ["https:", "http:", "mailto:", "tel:"];
  function tn(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return uu.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function Fo({ title: e2, fact: t, factKnown: n = false, intro: r }) {
    return (0, import_jsx_runtime8.jsxs)("header", { ...V(), className: "file-header", children: [(0, import_jsx_runtime8.jsx)("h1", { className: "file-title", children: e2 }), t && (0, import_jsx_runtime8.jsx)("p", { className: n ? "file-fact is-known" : "file-fact", children: t }), r && (0, import_jsx_runtime8.jsx)("p", { className: "file-intro", children: r })] });
  }
  function Vo({ label: e2, heading: t = false, children: n }) {
    let r = import_react12.default.useId();
    return (0, import_jsx_runtime8.jsxs)("section", { ...V("loop"), className: "file-group", "aria-labelledby": r, children: [typeof t == "string" ? (0, import_jsx_runtime8.jsxs)("hgroup", { className: "file-group-head", children: [(0, import_jsx_runtime8.jsx)("p", { className: "file-group-label", children: e2 }), (0, import_jsx_runtime8.jsx)("h2", { id: r, className: "file-group-heading", children: t })] }) : (0, import_jsx_runtime8.jsx)("h2", { id: r, className: t ? "file-group-heading" : "file-group-label", children: e2 }), n] });
  }
  var vs = (0, import_react12.createContext)(false);
  function Ho({ numbered: e2 = false, children: t }) {
    let n = V();
    return e2 ? (0, import_jsx_runtime8.jsx)(vs.Provider, { value: true, children: (0, import_jsx_runtime8.jsx)("ol", { ...n, className: "file-rows is-numbered", children: t }) }) : (0, import_jsx_runtime8.jsx)("div", { ...n, className: "file-rows", children: t });
  }
  function Bo({ number: e2, thumbnail: t, name: n, detail: r, value: o, valueKnown: i = false, checked: a }) {
    let s = (0, import_react12.useContext)(vs);
    return (0, import_jsx_runtime8.jsxs)(s ? "li" : "div", { ...V("stroke"), className: "file-row", style: s && e2 !== void 0 ? { counterSet: `file-row ${e2}` } : void 0, children: [e2 !== void 0 ? (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : s && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number is-counted" }), a !== void 0 && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-check", role: "checkbox", "aria-checked": a, "aria-readonly": "true", "aria-label": n }), t && (0, import_jsx_runtime8.jsxs)("span", { className: "file-row-slot", children: [(0, import_jsx_runtime8.jsx)(Io, { icon: t.icon }), t.src && (0, import_jsx_runtime8.jsx)("img", { src: t.src, alt: t.alt, style: K(t), loading: "lazy" })] }), (0, import_jsx_runtime8.jsxs)("div", { className: "file-row-body", children: [(0, import_jsx_runtime8.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime8.jsx)("span", { ...Po(), className: "file-strong", children: n }), r && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-detail", children: r })] }), o && (0, import_jsx_runtime8.jsx)("bdi", { className: i ? "file-row-value file-known" : "file-row-value", children: o })] })] });
  }
  function et2({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("dl", { ...V(), className: "file-facts", children: e2.map((t) => (0, import_jsx_runtime8.jsxs)("div", { children: [(0, import_jsx_runtime8.jsx)("dt", { children: t.label }), (0, import_jsx_runtime8.jsx)("dd", { children: (0, import_jsx_runtime8.jsx)("bdi", { children: t.value }) })] }, t.label)) });
  }
  function _o({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("div", { ...V(), className: "file-text", children: e2 });
  }
  function zo({ children: e2, sub: t }) {
    return (0, import_jsx_runtime8.jsxs)("div", { ...V("stroke"), className: "file-heading", children: [(0, import_jsx_runtime8.jsx)("span", { ...Po(), className: "file-strong", children: e2 }), t && (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: t })] });
  }
  function qo({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...V("stroke"), className: "file-p", children: e2 });
  }
  function Wo({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("ul", { ...V(), className: "file-bullets", children: e2.map((t, n) => (0, import_jsx_runtime8.jsx)("li", { children: t }, n)) });
  }
  function Uo({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...V("stroke"), className: "file-key file-bar", children: e2 });
  }
  function jo({ src: e2, alt: t, caption: n, fit: r = "contain", width: o, height: i }) {
    let a = r === "contain" && o && i ? { width: `min(${o}px, 100%, var(--file-photo-max-height) * ${o / i})` } : void 0;
    return (0, import_jsx_runtime8.jsxs)("figure", { ...V("loop"), className: "file-figure", "data-fit": r, children: [(0, import_jsx_runtime8.jsx)("img", { src: e2, alt: t, width: o, height: i, style: a, loading: "lazy" }), (0, import_jsx_runtime8.jsx)("figcaption", { children: n })] });
  }
  function Zo({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...V("stroke"), className: "file-caption", children: e2 });
  }
  function Ko() {
    return (0, import_jsx_runtime8.jsx)("hr", { ...V(), className: "file-rule" });
  }
  function rn({ href: e2, children: t }) {
    let n = tn(e2);
    return n ? (0, import_jsx_runtime8.jsx)("a", { className: "file-link", href: n, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(n) ? "_blank" : void 0, rel: "noopener noreferrer", children: t }) : (0, import_jsx_runtime8.jsx)("span", { className: "file-link", children: t });
  }
  function Go({ title: e2, children: t, tone: n = "note" }) {
    return (0, import_jsx_runtime8.jsxs)("aside", { ...V(), className: "file-callout file-bar", "data-tone": n, children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: e2 }), (0, import_jsx_runtime8.jsx)("span", { children: t })] });
  }
  function Yo({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("ol", { ...V(), className: "file-steps", children: e2.map((t, n) => (0, import_jsx_runtime8.jsxs)("li", { children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-step-n", children: n + 1 }), (0, import_jsx_runtime8.jsx)("span", { children: t })] }, n)) });
  }
  function Xo({ caption: e2, options: t, rows: n }) {
    let r = R2(), o = V("loop"), i = (a, s) => ({ order: a * (n.length + 1) + s });
    return (0, import_jsx_runtime8.jsx)("div", { ...o, className: "file-table-scroll", role: "region", "aria-label": e2, tabIndex: 0, children: (0, import_jsx_runtime8.jsxs)("table", { className: "file-table is-options is-stacking", style: { "--file-table-columns": t.length + 1 }, children: [(0, import_jsx_runtime8.jsx)("caption", { className: "file-visually-hidden", children: e2 }), (0, import_jsx_runtime8.jsx)("thead", { children: (0, import_jsx_runtime8.jsxs)("tr", { children: [(0, import_jsx_runtime8.jsx)("th", { scope: "col", className: "file-table-corner", children: (0, import_jsx_runtime8.jsx)("span", { className: "file-visually-hidden", children: r.attribute }) }), t.map((a, s) => (0, import_jsx_runtime8.jsxs)("th", { scope: "col", style: i(s, 0), children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: a.name }), (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: a.number })] }, a.number))] }) }), (0, import_jsx_runtime8.jsx)("tbody", { children: n.map((a, s) => (0, import_jsx_runtime8.jsxs)("tr", { children: [(0, import_jsx_runtime8.jsx)("th", { scope: "row", children: a.label }), a.values.map((l2, c) => (0, import_jsx_runtime8.jsxs)("td", { className: a.best === c ? "is-best" : void 0, style: i(c, s + 1), children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-cell-label", children: a.label }), (0, import_jsx_runtime8.jsx)("bdi", { children: l2 })] }, c))] }, a.label)) })] }) });
  }
  function on({ items: e2, label: t, title: n = t, layout: r = "grid", bleed: o = r === "strip" && e2.length > 1 }) {
    let i = R2(), a = Te2(), s = V(), [l2, c] = (0, import_react12.useState)(null), u = e2.map((p, f2) => (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": i.fullScreen(p.alt), onClick: () => c(f2), children: (0, import_jsx_runtime8.jsx)("img", { src: p.src, alt: p.alt, style: K(p), loading: "lazy" }) }, p.src)), d = e2.length === 1 ? " is-single" : "";
    return (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [r === "strip" && e2.length > 1 ? (0, import_jsx_runtime8.jsx)(Qn, { ...a, ...s, bleed: o, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: u }) : (0, import_jsx_runtime8.jsx)("div", { ...r === "strip" ? a : {}, ...s, className: `file-photos${d}${r === "strip" && o ? " file-bleed" : ""}`, "data-layout": r, role: "region", "aria-label": t, children: u }), l2 !== null && (0, import_jsx_runtime8.jsx)(xe2, { photos: e2, start: l2, title: n, onClose: () => c(null) })] });
  }
  function Jo({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("footer", { ...V(), className: "file-closing", children: e2 });
  }
  var mu = (0, import_jsx_runtime9.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, import_jsx_runtime9.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });
  var ys = (e2) => String(e2);
  var tt2 = "var(--ds-teal)";
  var tr = ["var(--ds-ink-2)", "var(--ds-ink-3)", "var(--ds-ink-4)"];
  var an = (e2) => tr[e2 % tr.length];
  var wu = 350;
  function ti() {
    let [e2, t] = (0, import_react7.useState)(null), [n, r] = (0, import_react7.useState)(wu);
    return (0, import_react7.useLayoutEffect)(() => {
      if (!e2) return;
      let o = () => {
        let a = Math.round(e2.getBoundingClientRect().width);
        a > 0 && r(a);
      };
      o();
      let i = new ResizeObserver(o);
      return i.observe(e2), () => i.disconnect();
    }, [e2]), [t, n];
  }
  function $e2({ label: e2, summary: t }) {
    return (0, import_jsx_runtime10.jsxs)("div", { className: "file-chart-head", children: [(0, import_jsx_runtime10.jsx)("span", { children: e2 }), t && (0, import_jsx_runtime10.jsx)("span", { children: t })] });
  }
  function ni(e2, t) {
    if (e2.some((i) => !Number.isFinite(i))) throw new RangeError("Chart values must be finite; use null for missing line observations.");
    let n = Math.min(...e2), r = Math.max(...e2);
    if (t) {
      if (!t.every(Number.isFinite) || t[0] >= t[1] || t[0] > n || t[1] < r) throw new RangeError("Chart bounds must be finite, ascending and contain every value.");
      return t;
    }
    let o = n === r ? Math.max(Math.abs(n) * 0.15, 1) : (r - n) * 0.15;
    return [n - o, r + o];
  }
  var bs = (e2) => [...e2].reduce((t, n) => t + (n >= "\u2E80" ? 2 : 1), 0);
  function ku(e2) {
    let t = Math.floor(30 / e2.length);
    return e2.length <= 5 && e2.every((n) => bs(n.label) <= t * 2 && n.label.split(/\s+/).every((r) => bs(r) <= t));
  }
  function ri({ label: e2, data: t, format: n = ys, max: r, orientation: o = ku(t) ? "columns" : "bars" }) {
    let i = R2(), a = V(), [s, l2] = ti();
    if (t.length === 0) return (0, import_jsx_runtime10.jsxs)("div", { ...a, className: "file-chart", children: [(0, import_jsx_runtime10.jsx)($e2, { label: e2 }), (0, import_jsx_runtime10.jsx)("p", { children: i.noData })] });
    let c = [0, ...t.map((v) => v.value)], u = Math.min(...c), d = Math.max(...c), p = u === d ? 1 : (d - u) * 0.15, f2 = [u < 0 ? u - p : 0, d > 0 ? d + p : u < 0 ? 0 : 1], g = ni(c, r === void 0 ? f2 : [u, r]), b = Ge2({ domain: g, range: o === "bars" ? [0, 250] : [120, 0] }), m = jn({ domain: t.map((v, L2) => L2), range: [0, l2], paddingInner: 0.35, paddingOuter: 0.35 / 2 });
    return (0, import_jsx_runtime10.jsxs)("div", { ...a, className: "file-chart file-drawn-chart", children: [(0, import_jsx_runtime10.jsx)($e2, { label: e2 }), o === "bars" ? u < 0 ? (0, import_jsx_runtime10.jsx)("div", { className: "file-signed-bars", children: t.map((v, L2) => (0, import_jsx_runtime10.jsxs)("div", { children: [(0, import_jsx_runtime10.jsx)("span", { children: v.label }), (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 -2 250 24", preserveAspectRatio: "none", "aria-hidden": "true", children: [(0, import_jsx_runtime10.jsx)("line", { x1: b(0), x2: b(0), y1: -2, y2: 22, stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" }), (0, import_jsx_runtime10.jsx)(Qt, { x: Math.min(b(0), b(v.value)), y: 2, width: Math.abs(b(v.value) - b(0)), height: 16, fill: v.highlight ? tt2 : an(L2), stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" })] }), (0, import_jsx_runtime10.jsx)("strong", { children: (0, import_jsx_runtime10.jsx)("bdi", { children: v.valueLabel ?? n(v.value) }) })] }, L2)) }) : (0, import_jsx_runtime10.jsx)("div", { className: "file-filled-bars", children: t.map((v, L2) => (0, import_jsx_runtime10.jsxs)("div", { className: "file-filled-bar", children: [(0, import_jsx_runtime10.jsx)("span", { className: "file-filled-bar-fill", style: { width: v.value > 0 ? `max(8px, ${v.value / (r ?? d) * 100}%)` : 0, background: tt2 } }), v.icon && (0, import_jsx_runtime10.jsx)("span", { className: "file-filled-bar-icon", "aria-hidden": "true", children: v.icon }), (0, import_jsx_runtime10.jsx)("span", { className: "file-filled-bar-label", children: v.label }), (0, import_jsx_runtime10.jsxs)("span", { className: "file-filled-bar-value", children: [(0, import_jsx_runtime10.jsx)("bdi", { children: v.valueLabel ?? n(v.value) }), v.note && (0, import_jsx_runtime10.jsxs)("span", { className: "file-filled-bar-note", children: [" ", (0, import_jsx_runtime10.jsx)("bdi", { children: v.note })] })] })] }, L2)) }) : (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsxs)("svg", { ref: s, viewBox: `0 -20 ${l2} 160`, role: "img", "aria-label": `${e2}: ${t.map((v) => `${v.label} ${v.valueLabel ?? n(v.value)}`).join(", ")}`, children: [b.ticks(3).map((v) => (0, import_jsx_runtime10.jsx)("line", { x1: 0, x2: l2, y1: b(v), y2: b(v), stroke: v === 0 ? "var(--ds-ink-2)" : "var(--ds-hairline)" }, v)), t.map((v, L2) => (0, import_jsx_runtime10.jsxs)("g", { children: [(0, import_jsx_runtime10.jsx)(Qt, { x: m(L2), y: Math.min(b(0), b(v.value)), width: m.bandwidth(), height: Math.abs(b(v.value) - b(0)), fill: v.highlight ? tt2 : an(L2), stroke: "var(--ds-ink-2)" }), (0, import_jsx_runtime10.jsx)("text", { x: m(L2) + m.bandwidth() / 2, y: b(v.value) + (v.value < 0 ? 16 : -6), textAnchor: "middle", fill: "var(--ds-ink-2)", fontSize: 13, children: v.valueLabel ?? n(v.value) })] }, L2))] }), (0, import_jsx_runtime10.jsx)("div", { className: "file-bar-labels", children: t.map((v, L2) => (0, import_jsx_runtime10.jsx)("span", { children: v.label }, L2)) })] })] });
  }
  function oi({ children: e2 }) {
    return (0, import_jsx_runtime11.jsx)("div", { ...V(), className: "file-photo-cards", children: e2 });
  }
  function ii({ name: e2, detail: t, icon: n, photo: r, checked: o = false, open: i, onOpenChange: a, children: s }) {
    let [l2, c] = (0, import_react19.useState)(false), u = import_react19.Children.count(s) > 0, d = (f2) => {
      c(f2), a?.(f2);
    }, p = (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [(0, import_jsx_runtime11.jsxs)("span", { className: "file-photo-card-photo", children: [(0, import_jsx_runtime11.jsx)(Io, { icon: n }), r?.src && (0, import_jsx_runtime11.jsx)("img", { src: r.src, alt: r.alt, style: K(r), loading: "lazy" }), o && (0, import_jsx_runtime11.jsx)("span", { className: "file-row-check file-photo-card-check", role: "checkbox", "aria-checked": true, "aria-readonly": "true", "aria-label": e2 })] }), (0, import_jsx_runtime11.jsxs)("span", { className: "file-photo-card-text", children: [(0, import_jsx_runtime11.jsx)("span", { className: "file-strong", children: e2 }), t && (0, import_jsx_runtime11.jsx)("span", { className: "file-row-detail", children: t })] })] });
    return (0, import_jsx_runtime11.jsxs)("div", { ...V("loop"), className: "file-photo-card", children: [u ? (0, import_jsx_runtime11.jsx)("button", { type: "button", className: "file-photo-card-open", "aria-haspopup": "dialog", onClick: () => d(true), children: p }) : p, u && (i ?? l2) && (0, import_jsx_runtime11.jsx)(ws, { name: e2, detail: t, photo: r, onClose: () => d(false), children: s })] });
  }
  function ws({ name: e2, detail: t, photo: n, onClose: r, children: o }) {
    let i = (0, import_react19.useRef)(null), a = wt(i, true), s = () => a(r);
    return (0, import_jsx_runtime11.jsxs)("dialog", { ref: i, className: "file-drawer", "aria-label": e2, tabIndex: -1, onCancel: (l2) => {
      l2.preventDefault(), s();
    }, onClick: (l2) => {
      if (l2.target !== l2.currentTarget) return;
      let c = l2.currentTarget.getBoundingClientRect();
      (l2.clientX < c.left || l2.clientX > c.right || l2.clientY < c.top || l2.clientY > c.bottom) && s();
    }, children: [(0, import_jsx_runtime11.jsx)("div", { className: "file-drawer-header", children: (0, import_jsx_runtime11.jsx)(Je2, { onClick: s }) }), n?.src && (0, import_jsx_runtime11.jsx)("img", { className: "file-drawer-photo", src: n.src, alt: n.alt, style: K(n) }), (0, import_jsx_runtime11.jsxs)("hgroup", { className: "file-drawer-title", children: [(0, import_jsx_runtime11.jsx)("h2", { className: "file-group-heading", children: e2 }), t && (0, import_jsx_runtime11.jsx)("p", { className: "file-secondary", children: t })] }), (0, import_jsx_runtime11.jsx)("div", { className: "file-drawer-body", children: o })] });
  }
  var Eu = "M0.42 3.09L1.61 2.89L0.48 2.69L1.62 2.43L0.99 2.17L1.97 2.13L1.43 1.9L2.46 1.86L2.15 1.73L2.75 1.64L2.37 1.39L3.35 0.96L2.98 0.79L8.51 0.11L26.87 0.15L26.4 0.56L27.63 0.18L31.8 0.62L38.9 0.13L45.68 0.81L47.76 0.4L55.48 0.77L56.29 1.18L55.58 1.23L58.14 1.65L59.81 1.57L60.9 0.86L60.75 1.02L60.99 1.16L60.77 1.29L60.96 1.36L60.12 1.53L61 1.98L60.66 2.11L60.78 2.4L60.62 2.54L60.91 2.62L60.59 2.74L60.77 2.86L60.64 3.13L60.21 3.27L60.83 4.03L60.31 4.49L60.77 4.95L60.3 5.23L60.56 5.37L60.37 5.65L60.88 5.7L60.33 5.9L60.73 6.04L60.24 6.22L60.41 6.56L53.72 6.69L51.56 7.12L53.3 7.17L53.68 7.37L52.95 7.49L43.88 7.49L43.34 7.17L44.31 7.17L44.04 6.91L36.19 6.62L21.85 7.21L21.55 6.53L20.27 6.65L21.36 6.91L19.71 7.23L16.12 7.16L16.75 7.45L16.16 7.64L16.78 7.65L15.91 7.79L6.54 7.78L2.19 7.22L2.59 6.92L1.52 6.51L1.67 6.34L1.46 6.11L1.89 6.11L1.25 5.8L1.75 5.46L1.07 5.17L1.42 5.03L1.18 4.66L1.6 4.6L0.78 4.06L1.65 3.81L0.57 3.8L1.45 3.75L1.26 3.62L1.67 3.27L1.31 3.25L1.96 3.02L0.68 3.51ZM4.51 7.91L5.27 7.67ZM11.88 7.73L12.5 7.71ZM18.52 7.52L19.25 7.58ZM48.59 7.44L49.2 7.51ZM56.71 7.35L57.69 7.39ZM46.44 7.35L47.22 7.29ZM42.12 7.21L42.92 7.23ZM40.43 7.11L41.23 7.11ZM44.47 7.25L44.94 7.28ZM19.76 7.21L20.66 7.19ZM54.52 7.24L55.14 7.2ZM46.78 7.12L49.14 7.11ZM25.38 7L25.99 7.05ZM40.06 7.06L40.64 6.92ZM17.92 6.98L18.45 6.98ZM31.56 6.87L32.37 6.87ZM51.56 6.74L53.26 6.67ZM59.1 6.78L59.62 6.72ZM21.76 6.42L22.95 6.75ZM16.15 6.52L16.67 6.42ZM17.54 6.49L18.05 6.51ZM0.81 3.97L1.43 3.86ZM58.65 2.16L59.99 2.16ZM0 2.15L0.9 2.03ZM57.21 1.79L57.78 2.15L58.45 1.72ZM0.39 1.96L0.96 1.94ZM59.2 1.89L60.35 1.77ZM55.93 1.38L57.07 1.33ZM59.1 1.38L59.57 1.39ZM57.17 1.29L58.35 1.28ZM59.18 1.23L59.86 1.17ZM55.19 1.1L55.75 1.02ZM53.92 1.05L54.38 1.08ZM2.03 0.84L2.99 0.9ZM59.36 1.02L59.87 1.09ZM56.26 0.83L56.73 0.76ZM46.89 0.54L47.4 0.59ZM48.54 0.56L51.82 0.61ZM28.76 0.57L29.23 0.53ZM30.84 0.35L32.27 0.45ZM32.23 0.33L33.89 0.31ZM39.33 0.17L40.33 0.19Z";
  var Au = "0 0 61 8";
  var ks = "http://www.w3.org/2000/svg";
  var Ls = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  function Du(e2) {
    let t = [];
    for (let n of e2.filter((r) => r.width > 0 && r.height > 0).sort((r, o) => r.top - o.top || r.left - o.left)) {
      let r = n.top + n.height / 2, o = t.find((s) => r > s.top && r < s.top + s.height);
      if (!o) {
        t.push({ ...n });
        continue;
      }
      let i = Math.max(o.left + o.width, n.left + n.width), a = Math.max(o.top + o.height, n.top + n.height);
      o.left = Math.min(o.left, n.left), o.top = Math.min(o.top, n.top), o.width = i - o.left, o.height = a - o.top, o.size = Math.max(o.size, n.size);
    }
    return t;
  }
  function Iu(e2, t, n) {
    if (n.length === 0) return "loop";
    if (e2 === "stroke" || e2 === "loop") return e2;
    let r = n[n.length - 1];
    return n.length <= 3 && t.height <= r.top + r.height - n[0].top + 48 ? "stroke" : "loop";
  }
  function Fu(e2) {
    let t = Math.round(Math.max(160, Math.min(550, 1400 / e2)));
    return Array.from({ length: e2 }, (n, r) => ({ ms: t, wait: Math.round(r * t * 0.9) }));
  }
  function Vu(e2, t, n, r, o, i) {
    let a = n - e2 - 2 * o, s = r - t - 2 * o, l2 = Math.PI / 2 * o, c = (d, p, f2, g) => {
      let b = f2 + g / l2 * (Math.PI / 2);
      return [d + o * Math.cos(b), p + o * Math.sin(b), Math.cos(b), Math.sin(b)];
    }, u = i;
    return u < a ? [e2 + o + u, t, 0, -1] : (u -= a, u < l2 ? c(n - o, t + o, -Math.PI / 2, u) : (u -= l2, u < s ? [n, t + o + u, 1, 0] : (u -= s, u < l2 ? c(n - o, r - o, 0, u) : (u -= l2, u < a ? [n - o - u, r, 0, 1] : (u -= a, u < l2 ? c(e2 + o, r - o, Math.PI / 2, u) : (u -= l2, u < s ? [e2, r - o - u, -1, 0] : c(e2 + o, t + o, Math.PI, u - s)))))));
  }
  var te2 = (e2) => Math.round(e2 * 10) / 10;
  function Hu(e2, t) {
    let r = 7 + e2 + 3, o = 7 + t + 3, i = Math.min(18, (r - 4) / 4, (o - 4) / 4), a = r - 4 - 2 * i, s = 2 * (a + o - 4 - 2 * i) + 2 * Math.PI * i, l2 = a * 0.22, c = a * 0.42, u = Math.round(Math.max(24, Math.min(160, (s + c) / 8))), d = [];
    for (let f2 = 0; f2 <= u; f2++) {
      let g = (s + c) * f2 / u, [b, m, v, L2] = Vu(4, 4, r, o, i, (l2 + g) % s), M2 = (g < s ? -1 + 4.7 * (g / s) : 3.7 + 3.2 * ((g - s) / c)) + 0.7 * Math.sin(g / 23 + e2) + 0.4 * Math.sin(g / 9 + t);
      d.push([b + v * M2, m + L2 * M2]);
    }
    let p = `M${te2(d[0][0])} ${te2(d[0][1])}`;
    for (let f2 = 0; f2 < d.length - 1; f2++) {
      let g = d[Math.max(0, f2 - 1)], b = d[f2], m = d[f2 + 1], v = d[Math.min(d.length - 1, f2 + 2)];
      p += `C${te2(b[0] + (m[0] - g[0]) / 6)} ${te2(b[1] + (m[1] - g[1]) / 6)} ${te2(m[0] - (v[0] - b[0]) / 6)} ${te2(m[1] - (v[1] - b[1]) / 6)} ${te2(m[0])} ${te2(m[1])}`;
    }
    return p;
  }
  function Bu(e2, t) {
    return Math.round(Math.max(600, Math.min(1100, 400 + (e2 + t) * 0.96)));
  }
  function _u(e2) {
    for (let t of e2.querySelectorAll("[data-live-mark-text]")) if (t.closest("[data-live-id]") === e2) return t;
    return e2;
  }
  function zu(e2) {
    let t = [], n = e2.closest("dialog"), r = document.createTreeWalker(e2, NodeFilter.SHOW_TEXT), o = document.createRange();
    for (let i = r.nextNode(); i; i = r.nextNode()) {
      let a = i.parentElement;
      if (a.closest(".file-visually-hidden") || a.closest("dialog") !== n) continue;
      let s = parseFloat(getComputedStyle(a).fontSize);
      o.selectNodeContents(i);
      for (let l2 of o.getClientRects()) t.push({ left: l2.left, top: l2.top, width: l2.width, height: l2.height, size: s });
    }
    return t;
  }
  function Ms(e2) {
    for (let n of e2.children) if (n.hasAttribute("data-live-marks")) return n;
    let t = document.createElement("div");
    return t.setAttribute("data-live-marks", ""), t.setAttribute("aria-hidden", "true"), e2.appendChild(t);
  }
  function Ss(e2, t, n, r, o, i, a) {
    let s = document.createElementNS(ks, "svg");
    s.setAttribute("data-live-drawn", e2), s.setAttribute("data-live-for", t), s.setAttribute("viewBox", r), s.setAttribute("preserveAspectRatio", "none"), s.style.cssText = `left:${te2(n.left)}px;top:${te2(n.top)}px;width:${te2(n.width)}px;height:${te2(n.height)}px;--file-live-mark-ms:${i}ms;--file-live-mark-wait:${a}ms`;
    let l2 = document.createElementNS(ks, "path");
    return l2.setAttribute("d", o), e2 === "loop" && l2.setAttribute("pathLength", "1"), s.appendChild(l2), s;
  }
  function qu(e2, t) {
    let n = () => {
      o.disconnect(), clearTimeout(i);
    }, r = () => {
      n(), t();
    }, o = new IntersectionObserver((a) => a.some((s) => s.intersectionRatio >= 0.5) && r(), { threshold: 0.5 }), i = setTimeout(r, 700);
    return o.observe(e2), n;
  }
  var nr = class {
    drawn = /* @__PURE__ */ new Map();
    point(t, n, r) {
      let o = this.drawn.get(t);
      if (o?.id === n && o.element === r) {
        o.nodes.length > 0 && this.stay(t, o);
        return;
      }
      o && this.release(o, 200);
      let i = { id: n, element: r, nodes: [], drawMs: 0, stop: () => {
      } };
      this.drawn.set(t, i), i.stop = qu(r, () => this.draw(t, i));
    }
    check() {
      for (let [t, n] of this.drawn) {
        if (!n.place) continue;
        let r = n.element.isConnected ? this.place(n.element) : void 0;
        r && Math.abs(r.left - n.place.left) < 1 && Math.abs(r.top - n.place.top) < 1 && Math.abs(r.width - n.place.width) < 1 && Math.abs(r.height - n.place.height) < 1 || (this.drawn.delete(t), this.release(n, 200));
      }
    }
    area(t) {
      return t.closest("dialog") ?? document.body;
    }
    within(t, n) {
      let r = Ms(this.area(t)).getBoundingClientRect();
      return { left: n.left - r.left, top: n.top - r.top, width: n.width, height: n.height };
    }
    place(t) {
      return this.within(t, t.getBoundingClientRect());
    }
    draw(t, n) {
      if (!n.element.isConnected) {
        this.drawn.delete(t);
        return;
      }
      let r = Ms(this.area(n.element)), o = this.place(n.element), i = Du(zu(_u(n.element)));
      if (Iu(n.element.getAttribute("data-live-mark"), o, i) === "stroke") {
        let a = Fu(i.length);
        if (i.forEach((s, l2) => {
          let c = this.within(n.element, s), u = { left: c.left - 0.18 * s.size, top: c.top + c.height - (0.13 + 0.42) * s.size, width: c.width + 2 * 0.18 * s.size, height: 0.42 * s.size };
          n.nodes.push(Ss("stroke", n.id, u, Au, Eu, a[l2].ms, a[l2].wait));
        }), n.drawMs = a[a.length - 1].wait + a[a.length - 1].ms, getComputedStyle(n.element).direction === "rtl") for (let s of n.nodes) s.setAttribute("data-rtl", "");
      } else {
        let s = Math.max(o.left, 10), l2 = Math.min(o.left + o.width, this.area(n.element).clientWidth - 10) - s, c = { left: s - 7, top: o.top - 7, width: l2 + 14, height: o.height + 14 };
        n.drawMs = Bu(l2, o.height), n.nodes.push(Ss("loop", n.id, c, `0 0 ${te2(c.width)} ${te2(c.height)}`, Hu(l2, o.height), n.drawMs, 0));
      }
      Ls() && (n.drawMs = 0), n.place = o;
      for (let a of n.nodes) r.appendChild(a);
      r.getBoundingClientRect();
      for (let a of n.nodes) a.setAttribute("data-phase", "shown");
      this.stay(t, n);
    }
    stay(t, n) {
      clearTimeout(n.hold), n.hold = setTimeout(() => {
        this.drawn.get(t) === n && this.drawn.delete(t), this.release(n, 400);
      }, n.drawMs + 1100);
    }
    release(t, n) {
      t.stop(), clearTimeout(t.hold);
      for (let r of t.nodes) {
        if (Ls()) {
          r.remove();
          continue;
        }
        r.style.setProperty("--file-live-mark-fade", `${n}ms`), r.setAttribute("data-phase", "leaving"), setTimeout(() => r.remove(), n);
      }
    }
  };
  var Uu = 30;
  var ju = 500;
  var Zu = 250;
  var Ku = 5;
  var Gu = 360;
  var Yu = 200;
  var Xu = 2e3;
  var Ju = 280;
  var Qu = "cubic-bezier(0.2, 0.7, 0.2, 1)";
  var rr = () => [...document.querySelectorAll("[data-live-id]")];
  var ai = () => [...document.querySelectorAll("[data-live-reveal]")];
  var Ns = [];
  var ed = /* @__PURE__ */ new Set(["PhotoCard"]);
  var Cs = 16;
  function td(e2, t) {
    let n = e2.getBoundingClientRect(), r = e2.querySelector(".file-drawer-header")?.getBoundingClientRect().bottom ?? n.top, o = n.bottom - (parseFloat(getComputedStyle(e2).scrollPaddingBottom) || 0), i = t.getBoundingClientRect(), a = o - r - i.height, s = a > 2 * Cs ? a / 2 : Cs, l2 = matchMedia("(prefers-reduced-motion: reduce)").matches;
    e2.scrollTo({ top: e2.scrollTop + i.top - r - s, behavior: l2 ? "auto" : "smooth" });
  }
  function sn(e2, t) {
    let n = e2.nodes;
    return t.op === "update" ? n[t.id] !== void 0 : t.op === "add" ? !t.parent || n[t.parent] !== void 0 : true;
  }
  var si = class {
    constructor(t) {
      this.runtime = t;
    }
    base = Pi();
    data = this.base;
    seq = null;
    own = [];
    sending = Promise.resolve();
    reading = false;
    pending = [];
    started = false;
    listeners = /* @__PURE__ */ new Set();
    marks = new nr();
    open = null;
    details = /* @__PURE__ */ new Set();
    entering = /* @__PURE__ */ new Map();
    gliding = /* @__PURE__ */ new WeakMap();
    enterSlot = 0;
    itemOf = /* @__PURE__ */ new WeakMap();
    lists = /* @__PURE__ */ new Map();
    subscribe = (t) => (this.listeners.add(t), () => {
      this.listeners.delete(t);
    });
    getData = () => this.data;
    getOpen = () => this.open;
    setOpen(t) {
      this.open !== t && (this.open = t, this.emit());
    }
    holdDetail(t) {
      return this.details.add(t), () => {
        this.details.delete(t);
      };
    }
    drawerOf(t) {
      let n = this.data.nodes;
      for (let r = t; r !== void 0; r = Object.keys(n).find((o) => n[o].children.includes(r))) {
        let o = n[r];
        if (o && o.children.length > 0 && (ed.has(o.type) || this.details.has(r))) return r;
      }
      return null;
    }
    start() {
      if (this.started || typeof window > "u") return;
      this.started = true;
      let t = this.runtime()?.live;
      t?.subscribe((r) => this.receive(r));
      let n = this.read();
      n && t?.hold?.(n);
    }
    item(t) {
      let n = this.data.nodes[t];
      if (n?.type !== Ft) return;
      let r = this.itemOf.get(n);
      return r || (r = { ...n.props, id: t }, this.itemOf.set(n, r)), r;
    }
    items(t) {
      let n = this.data.nodes[t];
      if (n?.type !== It) return Ns;
      let r = n.children.map((a) => this.data.nodes[a]), o = this.lists.get(t);
      if (o?.collection === n && r.every((a, s) => a === o.nodes[s])) return o.items;
      let i = n.children.map((a) => this.item(a));
      return this.lists.set(t, { collection: n, nodes: r, items: i }), i;
    }
    emit() {
      for (let t of [...this.listeners]) t();
    }
    read() {
      let t = this.runtime();
      if (!(this.reading || !t?.request)) return this.reading = true, t.request("live.read", null).then((n) => {
        this.reading = false, n.status === "ok" && typeof n.seq == "number" && typeof n.data == "string" && (this.seq === null || n.seq > this.seq) ? this.load(n.seq, JSON.parse(n.data)) : this.drain(), n.status === "ok" && this.readBehind();
      }, () => {
        this.reading = false, this.drain();
      });
    }
    readBehind() {
      let t = this.seq, n = this.own.filter((o) => o.at !== void 0 && (t === null || o.at > t));
      if (n.length === 0) return;
      let r = n[n.length - 1];
      r.behind = (r.behind ?? 0) + 1, r.behind === 1 ? this.read() : r.behind <= Ku && setTimeout(() => {
        this.own.includes(r) && this.read();
      }, Zu * 2 ** (r.behind - 2));
    }
    load(t, n) {
      this.base = n, this.seq = t, this.show(), this.drain();
    }
    show() {
      let t = this.seq;
      t !== null && (this.own = this.own.filter((n) => n.at === void 0 || n.at > t)), this.data = this.own.reduce((n, r) => sn(n, r.op) ? Vt(n, r.op) : n, this.base);
    }
    drain() {
      let t = this.pending;
      this.pending = [];
      for (let n of t) this.apply(n);
      this.emit();
    }
    inStep(t) {
      return this.seq !== null && t.seq === this.seq + 1;
    }
    apply(t) {
      this.inStep(t) && (sn(this.base, t.op) && (this.base = Vt(this.base, t.op)), this.seq = t.seq, this.show());
    }
    change(t) {
      let n = new Map(rr().map((o) => [o, o.getBoundingClientRect()])), r = new Set(ai());
      t(), this.emit(), requestAnimationFrame(() => this.settle(n, r));
    }
    write(t) {
      sn(this.data, t) && this.change(() => {
        this.base = Vt(this.base, t), this.show();
      });
    }
    edit(t) {
      let n = this.runtime();
      if (!n?.request) return this.write(t);
      if (!sn(this.data, t)) return;
      let r = { op: t };
      this.change(() => {
        this.own.push(r), this.show();
      });
      let o = async () => {
        for (; ; ) {
          let i = await n.request("live.write", { op: t }).catch(() => ({ status: "unknown" }));
          if (i.status !== "rate_limited") return i;
          await new Promise((a) => setTimeout(a, Math.max(i.retryAfterMs ?? 0, ju)));
        }
      };
      this.sending = this.sending.then(o).then((i) => this.answer(r, i)).catch((i) => {
        console.error(i), this.own = this.own.filter((a) => a !== r), this.show(), this.read();
      });
    }
    answer(t, n) {
      if (this.own.includes(t)) {
        if (n.status === "local") return this.own = this.own.filter((r) => r !== t), this.change(() => {
          sn(this.base, t.op) && (this.base = Vt(this.base, t.op)), this.show();
        });
        if (n.status === "ok" && typeof n.seq == "number") return n.applied ? t.at = n.seq : this.own = this.own.filter((r) => r !== t), n.applied && !this.reading && this.inStep({ seq: n.seq }) ? this.change(() => this.apply({ seq: n.seq, op: t.op })) : ((this.seq === null || n.seq > this.seq) && this.read(), this.change(() => this.show()));
        this.own = this.own.filter((r) => r !== t), this.change(() => this.show()), n.status === "unknown" && this.read();
      }
    }
    receive(t) {
      if (t.kind === "resync") this.read();
      else if (t.kind === "op") {
        if (this.seq !== null && t.seq <= this.seq) return;
        if (this.reading || !this.inStep(t)) {
          this.pending.push(t), this.read();
          return;
        }
        let n = this.data.nodes, r = new Map(rr().map((i) => [i, i.getBoundingClientRect()])), o = new Set(ai());
        this.apply(t), t.op.op === "add" && !(t.op.id in n) && this.entering.set(t.op.id, this.nextEnter()), this.emit(), requestAnimationFrame(() => this.settle(r, o));
      } else this.setOpen(this.drawerOf(t.id)), this.focus(t, Uu);
    }
    nextEnter() {
      let t = performance.now();
      return this.enterSlot = Math.min(Math.max(t, this.enterSlot + Yu), t + Xu), this.enterSlot - t;
    }
    settle(t, n) {
      let r = rr();
      for (let s of r) this.gliding.get(s)?.cancel();
      let o = ai().filter((s) => !n.has(s));
      for (let s of o) {
        let l2 = r.find((c) => s.contains(c) && this.entering.has(c.getAttribute("data-live-id")));
        this.enter(s, l2 ? this.entering.get(l2.getAttribute("data-live-id")) : this.nextEnter());
      }
      let i = new Map(r.map((s) => [s, s.getBoundingClientRect()])), a = /* @__PURE__ */ new Map();
      for (let s of r) {
        let l2 = t.get(s), c = this.entering.get(s.getAttribute("data-live-id"));
        if (!l2) {
          c !== void 0 && !o.some((b) => b.contains(s)) && this.enter(s, c);
          continue;
        }
        let u = i.get(s), d = { x: l2.left - u.left, y: l2.top - u.top };
        a.set(s, d);
        let p = s.parentElement?.closest("[data-live-id]"), f2 = (p && a.get(p)) ?? { x: 0, y: 0 }, g = { x: d.x - f2.x, y: d.y - f2.y };
        Math.abs(g.x) < 1 && Math.abs(g.y) < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches || this.gliding.set(s, s.animate([{ transform: `translate(${g.x}px, ${g.y}px)` }, { transform: "none" }], { duration: Ju, easing: Qu }));
      }
      this.entering.clear(), this.marks.check();
    }
    enter(t, n) {
      t.style.setProperty("--file-live-enter-delay", `${Math.round(n)}ms`), t.setAttribute("data-live-enter", ""), setTimeout(() => this.endEnter(t), n + Gu);
    }
    endEnter(t) {
      t.removeAttribute("data-live-enter"), t.style.removeProperty("--file-live-enter-delay");
    }
    focus(t, n) {
      let r = rr().find((i) => i.getAttribute("data-live-id") === t.id);
      if (!r) {
        n > 0 && requestAnimationFrame(() => this.focus(t, n - 1));
        return;
      }
      if (this.open === t.id) return;
      let o = r.closest("dialog");
      o ? td(o, r) : this.runtime()?.live?.reveal(t.request, r);
      for (let i = r; i; i = i.parentElement?.closest("[data-live-id]")) this.endEnter(i), this.gliding.get(i)?.cancel();
      this.marks.point(t.actor, t.id, r);
    }
  };
  var X2 = new si(() => window.instinctFile);
  function ln(e2, t) {
    return X2.start(), (0, import_react20.useSyncExternalStore)(X2.subscribe, e2, () => t);
  }
  function ir() {
    return ln(X2.getOpen, null);
  }
  function St(e2) {
    return ln(() => X2.getData().nodes[e2], void 0);
  }
  function Oe2(e2) {
    return typeof e2 == "string" ? e2 : "";
  }
  function ad({ props: e2, children: t }) {
    let n = (0, import_react6.useContext)(vt), r = ir() === n;
    return (0, import_jsx_runtime12.jsx)(ii, { ...e2, open: r, onOpenChange: (o) => X2.setOpen(o ? n : null), children: t });
  }
  var Ps = { Region: (e2, t) => (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: t }), Group: (e2, t) => (0, import_jsx_runtime12.jsx)(Vo, { ...e2, children: t }), Rows: (e2, t) => (0, import_jsx_runtime12.jsx)(Ho, { ...e2, children: t }), PhotoCards: (e2, t) => (0, import_jsx_runtime12.jsx)(oi, { children: t }), Text: (e2, t) => (0, import_jsx_runtime12.jsx)(_o, { children: t }), Header: (e2) => (0, import_jsx_runtime12.jsx)(Fo, { ...e2 }), Row: (e2) => (0, import_jsx_runtime12.jsx)(Bo, { ...e2 }), PhotoCard: (e2, t) => (0, import_jsx_runtime12.jsx)(ad, { props: e2, children: t }), Facts: (e2) => (0, import_jsx_runtime12.jsx)(et2, { ...e2 }), Heading: (e2) => (0, import_jsx_runtime12.jsx)(zo, { sub: typeof e2.sub == "string" ? e2.sub : void 0, children: Oe2(e2.text) }), Paragraph: (e2) => (0, import_jsx_runtime12.jsx)(qo, { children: Oe2(e2.text) }), Bullets: (e2) => (0, import_jsx_runtime12.jsx)(Wo, { ...e2 }), KeySentence: (e2) => (0, import_jsx_runtime12.jsx)(Uo, { children: Oe2(e2.text) }), Callout: (e2) => (0, import_jsx_runtime12.jsx)(Go, { title: Oe2(e2.title), tone: e2.tone, children: Oe2(e2.text) }), NumberedList: (e2) => (0, import_jsx_runtime12.jsx)(Yo, { ...e2 }), Table: (e2) => (0, import_jsx_runtime12.jsx)(Xo, { ...e2 }), Caption: (e2) => (0, import_jsx_runtime12.jsx)(Zo, { children: Oe2(e2.text) }), Rule: () => (0, import_jsx_runtime12.jsx)(Ko, {}), Closing: (e2) => (0, import_jsx_runtime12.jsx)(Jo, { children: Oe2(e2.text) }), Figure: (e2) => (0, import_jsx_runtime12.jsx)(jo, { ...e2 }), Photos: (e2) => (0, import_jsx_runtime12.jsx)(on, { ...e2 }), BarChart: (e2) => (0, import_jsx_runtime12.jsx)(ri, { ...e2 }), ButtonLink: (e2) => (0, import_jsx_runtime12.jsx)(Eo, { ...e2, children: Oe2(e2.label) }) };
  var Rs = /* @__PURE__ */ new Set();
  function Ts(e2, t) {
    let n = `${e2}:${t}`;
    Rs.has(n) || (Rs.add(n), console.warn(`Live node "${e2}" ${t}`));
  }
  var ui = class extends import_react5.Component {
    state = { failed: false };
    static getDerivedStateFromError() {
      return { failed: true };
    }
    componentDidCatch(t) {
      Ts(this.props.id, `could not render as ${this.props.node.type}: ${t.message}`);
    }
    componentDidUpdate(t) {
      this.state.failed && t.node !== this.props.node && this.setState({ failed: false });
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  };
  var $s = (0, import_react5.memo)(function({ id: t }) {
    let n = St(t);
    if (!n || n.type === It || n.type === Ft) return null;
    let r = Ps[n.type];
    if (!r) return Ts(t, `has unknown type "${n.type}"; this File's kit cannot render it`), null;
    let o = n.children.map((i) => (0, import_jsx_runtime13.jsx)($s, { id: i }, i));
    return (0, import_jsx_runtime13.jsx)(ui, { id: t, node: n, children: (0, import_jsx_runtime13.jsx)(vt.Provider, { value: t, children: r(n.props, o) }) });
  });
  var Us = [0, 1, 2, 3, 4].map((e2) => (0, import_jsx_runtime19.jsx)(os, { size: 12 }, e2));

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to
        )}`
      );
      return location;
    }
    function createHref2(to) {
      return typeof to === "string" ? to : createPath(to);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to) {
        return new URL(createHref2(to), "http://localhost");
      },
      encodeLocation(to) {
        let path = typeof to === "string" ? parsePath(to) : to;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to, state) {
        action = "PUSH";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to = _to;
    if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to
      };
    }
    let absoluteURL = to;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to) ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol)) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b) {
    return a.origin === b.origin && (a.origin !== "null" || a.protocol === b.protocol && a.host === b.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to === "string" ? to : createPath(to),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          await router.navigate(to);
        } else {
          await router.navigate(to, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
      let parsed = parseToInfo(to, basename);
      to = parsed.to;
      let href = useHref(to, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v) => v === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v) => v).forEach((v) => params.append("index", v));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react29.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react29.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react30 = __toESM(require_react());

  // src/photos/training.jpg
  var training_default = "./assets/4PNG3Z7B.jpg";

  // src/photos/preparation.jpg
  var preparation_default = "./assets/XSU32VRS.jpg";

  // src/photos/logo.jpg
  var logo_default = "./assets/B7W4P4RW.jpg";

  // src/App.tsx
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  var news = [
    { id: 1, category: "\u0627\u0644\u0641\u0631\u064A\u0642 \u0627\u0644\u0623\u0648\u0644", date: "\u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666", title: "\u0633\u062A\u0629 \u063A\u064A\u0627\u0628\u0627\u062A \u0641\u064A \u062A\u0642\u0631\u064A\u0631 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062C\u0648\u0646\u0629", body: "\u0628\u062D\u0633\u0628 \u0627\u0644\u0648\u0637\u0646\u060C \u064A\u063A\u064A\u0628 \u0645\u062D\u0645\u062F \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0648\u0645\u062D\u0645\u062F \u0627\u0644\u0633\u064A\u062F \u0648\u0645\u0635\u0637\u0641\u0649 \u0627\u0644\u0632\u0646\u0627\u0631\u064A \u0644\u0644\u0625\u0635\u0627\u0628\u0629\u060C \u0625\u0644\u0649 \u062C\u0627\u0646\u0628 \u0633\u064A\u0641 \u0641\u0627\u0631\u0648\u0642 \u062C\u0639\u0641\u0631 \u0648\u0639\u0645\u0631\u0648 \u0646\u0627\u0635\u0631 \u0648\u0623\u062D\u0645\u062F \u0627\u0644\u062C\u0641\u0627\u0644\u064A \u0644\u0623\u0633\u0628\u0627\u0628 \u0641\u0646\u064A\u0629. \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u064A\u0639\u0644\u0646\u0647\u0627 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0641\u0646\u064A.", source: "\u0627\u0644\u0648\u0637\u0646", url: "https://www.elwatannews.com/news/details/8401024" },
    { id: 2, category: "\u0645\u0646 \u0627\u0644\u0645\u0644\u0639\u0628", date: "\u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666", title: "\u0639\u0648\u062F\u0629 \u0639\u0646\u0627\u0635\u0631 \u062C\u062F\u064A\u062F\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628\u0627\u062A \u0627\u0644\u062C\u0645\u0627\u0639\u064A\u0629", body: "\u0630\u0643\u0631\u062A \u0627\u0644\u0648\u0637\u0646 \u0627\u0646\u062A\u0638\u0627\u0645 \u0623\u062D\u0645\u062F \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u064A\u0645 \u0625\u064A\u0634\u0648 \u0648\u062D\u0633\u0627\u0645 \u0623\u0634\u0631\u0641 \u0648\u0645\u062D\u0645\u0648\u062F \u0628\u0646\u062A\u0627\u064A\u062C \u0648\u0639\u062F\u064A \u0627\u0644\u062F\u0628\u0627\u063A \u0641\u064A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u0627\u062A \u0627\u0644\u062C\u0645\u0627\u0639\u064A\u0629. \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0631\u0627\u0646 \u0644\u0627 \u062A\u0639\u0646\u064A \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629.", source: "\u0627\u0644\u0648\u0637\u0646", url: "https://www.elwatannews.com/news/details/8401024" },
    { id: 3, category: "\u0627\u0633\u062A\u0639\u062F\u0627\u062F\u0627\u062A", date: "\u0662\u0660 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666", title: "\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0644\u0645\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u062C\u0648\u0646\u0629", body: "\u0646\u0642\u0644\u062A \u0627\u0644\u0648\u0637\u0646 \u0645\u0637\u0627\u0644\u0628\u0629 \u0645\u0639\u062A\u0645\u062F \u062C\u0645\u0627\u0644 \u0644\u0644\u0627\u0639\u0628\u064A\u0647 \u0628\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0648\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u062E\u0644\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0639\u062F\u0627\u062F \u0644\u0644\u0645\u0648\u0627\u062C\u0647\u0629\u060C \u0645\u0639 \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u0627\u0646\u0628 \u0627\u0644\u062A\u0643\u062A\u064A\u0643\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0646.", source: "\u0627\u0644\u0648\u0637\u0646", url: "https://www.elwatannews.com/news/details/8400224" },
    { id: 4, category: "\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", date: "\u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666", title: "\u0645\u0648\u0639\u062F \u0627\u0644\u0644\u0642\u0627\u0621 \u0648\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0646\u0627\u0642\u0644\u0629", body: "\u062A\u0642\u0627\u0645 \u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644\u062C\u0648\u0646\u0629 \u0648\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u064A\u0648\u0645 \u0627\u0644\u0627\u062B\u0646\u064A\u0646 \u0662\u0663 \u0646\u0648\u0641\u0645\u0628\u0631 \u0641\u064A \u0627\u0644\u062E\u0627\u0645\u0633\u0629 \u0645\u0633\u0627\u0621\u064B \u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0642\u0627\u0647\u0631\u0629. \u0648\u0628\u062D\u0633\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0662\u0664\u060C \u062A\u0646\u0642\u0644\u0647\u0627 \u0642\u0646\u0648\u0627\u062A \u0623\u0648\u0646 \u0633\u0628\u0648\u0631\u062A \u0636\u0645\u0646 \u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0635\u0631\u064A.", source: "\u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0662\u0664", url: "https://www.cairo24.com/2533174" }
  ];
  function App() {
    const [period, setPeriod] = (0, import_react30.useState)("all");
    const [query, setQuery] = (0, import_react30.useState)("");
    const archived = [...news].sort((a, b) => (a.id === 3 ? 1 : 0) - (b.id === 3 ? 1 : 0)).filter((item) => (period === "all" || (period === "latest" ? item.id !== 3 : item.id === 3)) && (item.title + " " + item.body).includes(query.trim()));
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(cu, { lang: "ar", dir: "rtl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: logo_default, alt: "\u0634\u0639\u0627\u0631 ZAMALEK NEW NEWS: \u0631\u0627\u0645\u064A \u0633\u0647\u0645 \u0628\u0627\u0644\u0623\u0633\u0648\u062F \u0648\u0627\u0644\u0630\u0647\u0628\u064A", className: "zn-logo" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-brand-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "ZAMALEK NEW NEWS" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0645\u0646 \u0627\u0644\u0645\u062F\u0631\u062C \u0627\u0644\u0623\u0628\u064A\u0636" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "zn-edition", children: "\u0646\u0633\u062E\u0629 \u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Fo, { title: "Zamalek New News", fact: "\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0642\u0644\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", intro: "\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0648\u0645\u0648\u0627\u0639\u064A\u062F \u0645\u0628\u0627\u0631\u064A\u0627\u062A\u0647\u060C \u0641\u064A \u0645\u0633\u0627\u062D\u0629 \u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0641\u0627\u0631\u0633 \u0627\u0644\u0623\u0628\u064A\u0636." }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "zn-stripe" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-section-line", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0627\u0644\u0641\u0631\u064A\u0642 \u0627\u0644\u0623\u0648\u0644" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0627\u0644\u0645\u0628\u0627\u0631\u064A\u0627\u062A" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0623\u0631\u0634\u064A\u0641 \u0627\u0644\u0623\u062E\u0628\u0627\u0631" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-lead", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "zn-photo", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(jo, { src: training_default, alt: "\u0644\u0627\u0639\u0628\u0648 \u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0628\u0627\u0644\u0632\u064A \u0627\u0644\u0623\u0628\u064A\u0636 \u064A\u0642\u0641\u0648\u0646 \u0645\u0639\u064B\u0627 \u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0635\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u064A\u0642", caption: "\u0635\u0648\u0631\u0629 \u0623\u0631\u0634\u064A\u0641\u064A\u0629 \u0644\u0644\u0641\u0631\u064A\u0642\u060C \u0639\u0628\u0631 \u0627\u0644\u0648\u0637\u0646. \u0644\u064A\u0633\u062A \u0635\u0648\u0631\u0629 \u0645\u0646 \u0645\u0631\u0627\u0646 \u0627\u0644\u064A\u0648\u0645." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-headline", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "zn-kicker", children: "\u0641\u064A \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \xB7 \u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0635\u0631\u064A" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: "\u0643\u0644 \u0627\u0644\u0623\u0646\u0638\u0627\u0631 \u0646\u062D\u0648 \u0627\u0644\u062C\u0648\u0646\u0629" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u064A\u0633\u062A\u0639\u062F \u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0633\u0639\u0629 \u0639\u0644\u0649 \u0633\u062A\u0627\u062F \u062E\u0627\u0644\u062F \u0628\u0634\u0627\u0631\u0629. \u0627\u0644\u0645\u0648\u0639\u062F \u0627\u0644\u0627\u062B\u0646\u064A\u0646\u060C \u0648\u0627\u0644\u062E\u0627\u0645\u0633\u0629 \u0645\u0633\u0627\u0621\u064B \u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0642\u0627\u0647\u0631\u0629." }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(rn, { href: "https://www.cairo24.com/2533174", children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0648\u0639\u062F \u0645\u0646 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0662\u0664 \u2197" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Vo, { label: "\u0627\u062D\u0641\u0638 \u0627\u0644\u0645\u0648\u0639\u062F", heading: "\u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644\u0645\u0642\u0628\u0644\u0629", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "zn-match", "aria-label": "\u0627\u0644\u062C\u0648\u0646\u0629 \u0648\u0627\u0644\u0632\u0645\u0627\u0644\u0643\u060C \u0627\u0644\u0627\u062B\u0646\u064A\u0646 \u0662\u0663 \u0646\u0648\u0641\u0645\u0628\u0631 \u0627\u0644\u062E\u0627\u0645\u0633\u0629 \u0645\u0633\u0627\u0621 \u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0642\u0627\u0647\u0631\u0629", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "zn-match-top", children: "\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0635\u0631\u064A \xB7 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0633\u0639\u0629" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-teams", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "\u0627\u0644\u062C\u0648\u0646\u0629" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0636\u062F" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "\u0627\u0644\u0632\u0645\u0627\u0644\u0643" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-kickoff", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "\u0665:\u0660\u0660 \u0645\u0633\u0627\u0621\u064B" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0627\u0644\u0627\u062B\u0646\u064A\u0646 \u0662\u0663 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666 \xB7 \u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0642\u0627\u0647\u0631\u0629" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-match-bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0633\u062A\u0627\u062F \u062E\u0627\u0644\u062F \u0628\u0634\u0627\u0631\u0629" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u0627\u0644\u0646\u0642\u0644: \u0623\u0648\u0646 \u0633\u0628\u0648\u0631\u062A" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Vo, { label: "\u0645\u0646 \u0627\u0644\u0635\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629", heading: "\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0623\u0628\u064A\u0636", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "zn-news-grid", children: news.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("article", { className: "zn-news", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: item.category }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("time", { children: item.date })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: item.body }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(rn, { href: item.url, children: [
          "\u0627\u0642\u0631\u0623 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0639\u0644\u0649 ",
          item.source,
          " \u2197"
        ] })
      ] }, item.id)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Vo, { label: "\u0645\u0646 \u062A\u0642\u0627\u0631\u064A\u0631 \u0662\u0660 \u0646\u0648\u0641\u0645\u0628\u0631", heading: "\u0641\u064A \u0643\u0648\u0627\u0644\u064A\u0633 \u0627\u0644\u0627\u0633\u062A\u0639\u062F\u0627\u062F", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-feature", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(jo, { src: preparation_default, alt: "\u0644\u0627\u0639\u0628 \u0628\u0642\u0645\u064A\u0635 \u064A\u062D\u0645\u0644 \u0634\u0639\u0627\u0631 \u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0648\u062D\u0642\u064A\u0628\u0629 \u0638\u0647\u0631 \u0623\u0645\u0627\u0645 \u062D\u0627\u0641\u0644\u0629", caption: "\u0635\u0648\u0631\u0629 \u0645\u0631\u0641\u0642\u0629 \u0628\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0627\u0633\u062A\u0639\u062F\u0627\u062F\u0627\u062A\u060C \u0639\u0628\u0631 \u0627\u0644\u0648\u0637\u0646." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { children: news[2].title }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: news[2].body }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(rn, { href: news[2].url, children: "\u0627\u0642\u0631\u0623 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0648\u0637\u0646 \u2197" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Vo, { label: "\u0627\u0644\u0623\u0642\u062F\u0645 \u0648\u0627\u0644\u062C\u062F\u064A\u062F \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F", heading: "\u0623\u0631\u0634\u064A\u0641 \u0627\u0644\u0623\u062E\u0628\u0627\u0631", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-archive-tools", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Zc, { label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0634\u0631", options: [{ value: "all", label: "\u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631" }, { value: "latest", label: "\u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631" }, { value: "previous", label: "\u0662\u0660 \u0646\u0648\u0641\u0645\u0628\u0631" }], value: period, onChange: setPeriod }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Kc, { label: "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644", value: query, onChange: setQuery })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "zn-archive-count", children: [
          archived.length.toLocaleString("ar-EG"),
          " \u0645\u0646 ",
          news.length.toLocaleString("ar-EG"),
          " \u0623\u062E\u0628\u0627\u0631"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "zn-archive", children: archived.map((item) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("article", { className: "zn-archive-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "zn-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: item.category }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("time", { children: item.date })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { children: item.title }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: item.body }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(rn, { href: item.url, children: [
            "\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0623\u0635\u0644\u064A \u0639\u0644\u0649 ",
            item.source,
            " \u2197"
          ] })
        ] }, item.id)) }),
        archived.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "\u0645\u0641\u064A\u0634 \u0623\u062E\u0628\u0627\u0631 \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0628\u062D\u062B. \u062C\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u062A\u0627\u0646\u064A\u0629 \u0623\u0648 \u0627\u062E\u062A\u0627\u0631 \u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Vo, { label: "\u0639\u0646 \u0627\u0644\u0645\u0648\u0642\u0639", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(qo, { children: [
        "\u0645\u0633\u0627\u062D\u0629 \u062C\u0645\u0627\u0647\u064A\u0631\u064A\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u0628\u0627\u0633\u0645 ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("bdi", { children: "Zamalek New News" }),
        "\u060C \u0648\u0644\u064A\u0633\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0646\u0627\u062F\u064A \u0627\u0644\u0632\u0645\u0627\u0644\u0643. \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0645\u0644\u062E\u0635\u0627\u062A \u062A\u062D\u0631\u064A\u0631\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0643\u0644 \u062E\u0628\u0631."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Jo, { children: "\u0622\u062E\u0631 \u0645\u0631\u0627\u062C\u0639\u0629: \u0662\u0661 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0666. \u0647\u0630\u0647 \u0646\u0633\u062E\u0629 \u0645\u0624\u0631\u062E\u0629 \u0648\u0644\u064A\u0633\u062A \u062E\u062F\u0645\u0629 \u0623\u062E\u0628\u0627\u0631 \u0645\u0628\u0627\u0634\u0631\u0629\u061B \u0644\u0627 \u062A\u062A\u062D\u062F\u062B \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0623\u0648 \u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627." })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
