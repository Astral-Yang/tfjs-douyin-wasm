/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
! function(e, t) {
	t(e.tf = e.tf || {}, e.tf)
}(TTWebAssembly, (function(e, t) {
	"use strict";

	function n(e) {
		var t = Object.create(null);
		return e && Object.keys(e).forEach((function(n) {
			if ("default" !== n) {
				var r = Object.getOwnPropertyDescriptor(e, n);
				Object.defineProperty(t, n, r.get ? r : {
					enumerable: !0,
					get: function() {
						return e[n]
					}
				})
			}
		})), t.default = e, t
	}

	function r(e, t) {
		return t.forEach((function(t) {
			t && "string" != typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
				if ("default" !== n && !(n in e)) {
					var r = Object.getOwnPropertyDescriptor(t, n);
					Object.defineProperty(e, n, r.get ? r : {
						enumerable: !0,
						get: function() {
							return t[n]
						}
					})
				}
			}))
		})), e
	}
	var a = n(t);
	t.env().registerFlag("KEEP_INTERMEDIATE_TENSORS", (function() {
		return !1
	}), (function(e) {
		e && console.warn(
			"Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance."
		)
	}));
	var o, s, i = function(e, t) {
		return i = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(e, t) {
			e.__proto__ = t
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
		}, i(e, t)
	};

	function u(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
			" is not a constructor or null");

		function n() {
			this.constructor = e
		}
		i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
	}

	function c(e, t, n, r) {
		return new(n || (n = Promise))((function(a, o) {
			function s(e) {
				try {
					u(r.next(e))
				} catch (e) {
					o(e)
				}
			}

			function i(e) {
				try {
					u(r.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function u(e) {
				var t;
				e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(s, i)
			}
			u((r = r.apply(e, t || [])).next())
		}))
	}

	function p(e, t) {
		var n, r, a, o, s = {
			label: 0,
			sent: function() {
				if (1 & a[0]) throw a[1];
				return a[1]
			},
			trys: [],
			ops: []
		};
		return o = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
			return this
		}), o;

		function i(o) {
			return function(i) {
				return function(o) {
					if (n) throw new TypeError("Generator is already executing.");
					for (; s;) try {
						if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r
								.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done)
							return a;
						switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
							case 0:
							case 1:
								a = o;
								break;
							case 4:
								return s.label++, {
									value: o[1],
									done: !1
								};
							case 5:
								s.label++, r = o[1], o = [0];
								continue;
							case 7:
								o = s.ops.pop(), s.trys.pop();
								continue;
							default:
								if (!(a = s.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[
										0] && 2 !== o[0])) {
									s = 0;
									continue
								}
								if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
									s.label = o[1];
									break
								}
								if (6 === o[0] && s.label < a[1]) {
									s.label = a[1], a = o;
									break
								}
								if (a && s.label < a[2]) {
									s.label = a[2], s.ops.push(o);
									break
								}
								a[2] && s.ops.pop(), s.trys.pop();
								continue
						}
						o = t.call(e, s)
					} catch (e) {
						o = [6, e], r = 0
					} finally {
						n = a = 0
					}
					if (5 & o[0]) throw o[1];
					return {
						value: o[0] ? o[1] : void 0,
						done: !0
					}
				}([o, i])
			}
		}
	}

	function l(e) {
		var t = "function" == typeof Symbol && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && "number" == typeof e.length) return {
			next: function() {
				return e && r >= e.length && (e = void 0), {
					value: e && e[r++],
					done: !e
				}
			}
		};
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}

	function d(e, t) {
		var n = "function" == typeof Symbol && e[Symbol.iterator];
		if (!n) return e;
		var r, a, o = n.call(e),
			s = [];
		try {
			for (;
				(void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
		} catch (e) {
			a = {
				error: e
			}
		} finally {
			try {
				r && !r.done && (n = o.return) && n.call(o)
			} finally {
				if (a) throw a.error
			}
		}
		return s
	}

	function h(e, t, n) {
		if (n || 2 === arguments.length)
			for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(
				t, 0, a)), r[a] = t[a]);
		return e.concat(r || Array.prototype.slice.call(t))
	}! function(e) {
		e[e.DT_INVALID = 0] = "DT_INVALID", e[e.DT_FLOAT = 1] = "DT_FLOAT", e[e.DT_DOUBLE = 2] = "DT_DOUBLE", e[
				e.DT_INT32 = 3] = "DT_INT32", e[e.DT_UINT8 = 4] = "DT_UINT8", e[e.DT_INT16 = 5] = "DT_INT16", e[
				e.DT_INT8 = 6] = "DT_INT8", e[e.DT_STRING = 7] = "DT_STRING", e[e.DT_COMPLEX64 = 8] =
			"DT_COMPLEX64", e[e.DT_INT64 = 9] = "DT_INT64", e[e.DT_BOOL = 10] = "DT_BOOL", e[e.DT_QINT8 = 11] =
			"DT_QINT8", e[e.DT_QUINT8 = 12] = "DT_QUINT8", e[e.DT_QINT32 = 13] = "DT_QINT32", e[e.DT_BFLOAT16 =
				14] = "DT_BFLOAT16", e[e.DT_QINT16 = 15] = "DT_QINT16", e[e.DT_QUINT16 = 16] = "DT_QUINT16", e[e
				.DT_UINT16 = 17] = "DT_UINT16", e[e.DT_COMPLEX128 = 18] = "DT_COMPLEX128", e[e.DT_HALF = 19] =
			"DT_HALF", e[e.DT_RESOURCE = 20] = "DT_RESOURCE", e[e.DT_VARIANT = 21] = "DT_VARIANT", e[e
				.DT_UINT32 = 22] = "DT_UINT32", e[e.DT_UINT64 = 23] = "DT_UINT64", e[e.DT_FLOAT_REF = 101] =
			"DT_FLOAT_REF", e[e.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF", e[e.DT_INT32_REF = 103] =
			"DT_INT32_REF", e[e.DT_UINT8_REF = 104] = "DT_UINT8_REF", e[e.DT_INT16_REF = 105] = "DT_INT16_REF",
			e[e.DT_INT8_REF = 106] = "DT_INT8_REF", e[e.DT_STRING_REF = 107] = "DT_STRING_REF", e[e
				.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF", e[e.DT_INT64_REF = 109] = "DT_INT64_REF", e[e
				.DT_BOOL_REF = 110] = "DT_BOOL_REF", e[e.DT_QINT8_REF = 111] = "DT_QINT8_REF", e[e
				.DT_QUINT8_REF = 112] = "DT_QUINT8_REF", e[e.DT_QINT32_REF = 113] = "DT_QINT32_REF", e[e
				.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF", e[e.DT_QINT16_REF = 115] = "DT_QINT16_REF", e[e
				.DT_QUINT16_REF = 116] = "DT_QUINT16_REF", e[e.DT_UINT16_REF = 117] = "DT_UINT16_REF", e[e
				.DT_COMPLEX128_REF = 118] = "DT_COMPLEX128_REF", e[e.DT_HALF_REF = 119] = "DT_HALF_REF", e[e
				.DT_RESOURCE_REF = 120] = "DT_RESOURCE_REF", e[e.DT_VARIANT_REF = 121] = "DT_VARIANT_REF", e[e
				.DT_UINT32_REF = 122] = "DT_UINT32_REF", e[e.DT_UINT64_REF = 123] = "DT_UINT64_REF"
	}(o || (o = {})),
	function(e) {
		var t;
		(t = e.CheckpointFormatVersion || (e.CheckpointFormatVersion = {}))[t.LEGACY = 0] = "LEGACY", t[t.V1 =
			1] = "V1", t[t.V2 = 2] = "V2"
	}(s || (s = {}));
	var f = {};

	function m(e) {
		return f[e]
	}

	function y(e, n, r, a, o) {
		var s = n.inputParams[e];
		if (s && void 0 !== s.inputIndexStart) {
			var i = s.inputIndexStart,
				u = 0 === s.inputIndexEnd ? void 0 : void 0 === s.inputIndexEnd ? i + 1 : s.inputIndexEnd,
				c = i < 0 ? n.inputNames.length + i : i;
			if ("tensor" === s.type) return v(n.inputNames[c], r, a, o);
			if ("tensors" === s.type) {
				var p = n.inputs.slice(i, u);
				return n.inputNames.slice(i, u).filter((function(e, t) {
					var n;
					return "NoOp" !== (null === (n = p[t]) || void 0 === n ? void 0 : n.op)
				})).map((function(e) {
					return v(e, r, a, o)
				}))
			}
			var l = v(n.inputNames[c], r, a, o),
				d = l.dataSync();
			return "number" === s.type ? d[0] : t.util.toNestedArray(l.shape, d)
		}
		var h = n.attrParams[e];
		return h && h.value
	}

	function v(e, t, n, r) {
		var a = d(N(e, n), 2),
			o = a[0],
			s = a[1];
		if (null != r) {
			var i = r.getHashTableHandleByName(o);
			if (null != i) return i
		}
		var u = n.currentContextIds.find((function(e) {
			return !!t[x(o, e)]
		}));
		return void 0 !== u ? t[x(o, u)][s] : void 0
	}

	function g(e, t, n) {
		return t[x(e, n.currentContextId)]
	}

	function b(e, t) {
		var n = d(N(e, t), 3),
			r = n[0],
			a = n[1],
			o = n[2];
		return [x(r, t && t.currentContextId), a, o]
	}

	function x(e, t) {
		return t ? "".concat(e, "-").concat(t) : e
	}

	function N(e, t) {
		if ("" === e) return ["", 0, void 0];
		var n = null != t && null != t.parseNodeNameCache;
		if (n) {
			var r = t.parseNodeNameCache.get(e);
			if (null != r) return r
		}
		var a, o = e.split(":");
		if (1 === o.length) a = [e, 0, void 0];
		else {
			var s = o[0],
				i = 3 === o.length ? o[1] : void 0;
			a = [s, Number(o[o.length - 1]), i]
		}
		return n && t.parseNodeNameCache.set(e, a), a
	}

	function w(e, t, n) {
		var r = y("pad", e, t, n);
		if ("explicit" === r) {
			r = y("explicitPaddings", e, t, n);
			for (var a = [
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
				], o = 0; o < 4; o++) a[o][0] = r[2 * o], a[o][1] = r[2 * o + 1];
			return a
		}
		return r
	}

	function k(e) {
		return e.kept ? e : t.clone(e)
	}
	var T = {
			__proto__: null,
			json: [{
				tfOpName: "Add",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "AddV2",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "AddN",
				category: "arithmetic",
				inputs: [{
					start: 0,
					end: 0,
					name: "tensors",
					type: "tensors"
				}]
			}, {
				tfOpName: "BiasAdd",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sub",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "RealDiv",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Div",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "DivNoNan",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "FloorDiv",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Mul",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Maximum",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Minimum",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Pow",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "SquaredDifference",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Mod",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "FloorMod",
				category: "arithmetic",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}]
		},
		S = {
			__proto__: null,
			json: [{
				tfOpName: "Abs",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Acos",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Asin",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Atan",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Atan2",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "y",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Ceil",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "ClipByValue",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "clipValueMin",
					type: "number"
				}, {
					start: 2,
					name: "clipValueMax",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Complex",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "real",
					type: "tensor"
				}, {
					start: 1,
					name: "imag",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "ComplexAbs",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Cos",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Cosh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Elu",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Exp",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Floor",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Log",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Imag",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "outputType",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Neg",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Real",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "outputType",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Prelu",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "alpha",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Relu",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Relu6",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Selu",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sigmoid",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sin",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sinh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sqrt",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Rsqrt",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Square",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Tan",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Tanh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Sign",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Round",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Expm1",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Log1p",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Reciprocal",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Softplus",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Asinh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Acosh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Atanh",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Erf",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LeakyRelu",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "alpha",
					name: "alpha",
					type: "number",
					defaultValue: .2
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "IsNan",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "IsFinite",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "IsInf",
				category: "basic_math",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}]
		},
		_ = {
			__proto__: null,
			json: [{
				tfOpName: "EmptyTensorList",
				category: "control",
				inputs: [{
					start: 0,
					name: "elementShape",
					type: "shape"
				}, {
					start: 1,
					name: "maxNumElements",
					type: "number"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "LoopCond",
				category: "control",
				inputs: [{
					start: 0,
					name: "pred",
					type: "tensor"
				}]
			}, {
				tfOpName: "Switch",
				category: "control",
				inputs: [{
					start: 0,
					name: "data",
					type: "tensor"
				}, {
					start: 1,
					name: "pred",
					type: "tensor"
				}]
			}, {
				tfOpName: "Merge",
				category: "control",
				inputs: [{
					start: 0,
					end: 0,
					name: "tensors",
					type: "tensors"
				}]
			}, {
				tfOpName: "Enter",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "frame_name",
					name: "frameName",
					type: "string"
				}, {
					tfName: "is_constant",
					name: "isConstant",
					type: "bool"
				}]
			}, {
				tfOpName: "Exit",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "NextIteration",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "TensorArrayV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "size",
					type: "number"
				}],
				attrs: [{
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "element_shape",
					name: "elementShape",
					type: "shape"
				}, {
					tfName: "dynamic_size",
					name: "dynamicSize",
					type: "bool"
				}, {
					tfName: "clear_after_read",
					name: "clearAfterRead",
					type: "bool"
				}, {
					tfName: "identical_element_shapes",
					name: "identicalElementShapes",
					type: "bool"
				}, {
					tfName: "tensor_array_name",
					name: "name",
					type: "string"
				}]
			}, {
				tfOpName: "TensorArrayWriteV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "index",
					type: "number"
				}, {
					start: 2,
					name: "tensor",
					type: "tensor"
				}, {
					start: 3,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "TensorArrayReadV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "index",
					type: "number"
				}, {
					start: 2,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "dtype",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "TensorArrayGatherV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "number[]"
				}, {
					start: 2,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "element_shape",
					name: "elementShape",
					type: "shape"
				}]
			}, {
				tfOpName: "TensorArrayScatterV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "number[]"
				}, {
					start: 2,
					name: "tensor",
					type: "tensor"
				}, {
					start: 3,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorArrayConcatV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "element_shape_except0",
					name: "elementShapeExcept0",
					type: "shape",
					notSupported: !0
				}]
			}, {
				tfOpName: "TensorArraySplitV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "tensor",
					type: "tensor"
				}, {
					start: 2,
					name: "lengths",
					type: "number[]"
				}, {
					start: 3,
					name: "flowIn",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorArraySizeV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}, {
					start: 1,
					name: "flowIn",
					type: "number"
				}]
			}, {
				tfOpName: "TensorArrayCloseV3",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorArrayId",
					type: "tensor"
				}]
			}, {
				tfOpName: "StatelessIf",
				category: "control",
				inputs: [{
					start: 0,
					name: "cond",
					type: "tensor"
				}, {
					start: 1,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "then_branch",
					name: "thenBranch",
					type: "func"
				}, {
					tfName: "else_branch",
					name: "elseBranch",
					type: "func"
				}]
			}, {
				tfOpName: "If",
				category: "control",
				inputs: [{
					start: 0,
					name: "cond",
					type: "tensor"
				}, {
					start: 1,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "then_branch",
					name: "thenBranch",
					type: "func"
				}, {
					tfName: "else_branch",
					name: "elseBranch",
					type: "func"
				}]
			}, {
				tfOpName: "StatelessWhile",
				category: "control",
				inputs: [{
					start: 0,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "cond",
					name: "cond",
					type: "func"
				}, {
					tfName: "body",
					name: "body",
					type: "func"
				}]
			}, {
				tfOpName: "While",
				category: "control",
				inputs: [{
					start: 0,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "cond",
					name: "cond",
					type: "func"
				}, {
					tfName: "body",
					name: "body",
					type: "func"
				}]
			}, {
				tfOpName: "TensorListScatter",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "number[]"
				}, {
					start: 2,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListScatterV2",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "number[]"
				}, {
					start: 2,
					name: "elementShape",
					type: "shape"
				}, {
					start: 3,
					name: "numElements",
					type: "number"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListGather",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "number[]"
				}, {
					start: 2,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListGetItem",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "index",
					type: "number"
				}, {
					start: 2,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListSetItem",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "index",
					type: "number"
				}, {
					start: 2,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListReserve",
				category: "control",
				inputs: [{
					start: 0,
					name: "elementShape",
					type: "shape"
				}, {
					start: 1,
					name: "numElements",
					type: "number"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListFromTensor",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}, {
					start: 1,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListStack",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}, {
					tfName: "num_elements",
					name: "numElements",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListSplit",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}, {
					start: 1,
					name: "elementShape",
					type: "shape"
				}, {
					start: 2,
					name: "lengths",
					type: "number[]"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListConcat",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}],
				attrs: [{
					tfName: "element_shape",
					name: "elementShape",
					type: "shape"
				}, {
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListConcatV2",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}],
				attrs: [{
					tfName: "element_shape",
					name: "elementShape",
					type: "shape"
				}, {
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListPopBack",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "elementShape",
					type: "shape"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListPushBack",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "element_dtype",
					name: "elementDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "TensorListLength",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}]
			}, {
				tfOpName: "TensorListResize",
				category: "control",
				inputs: [{
					start: 0,
					name: "tensorListId",
					type: "tensor"
				}, {
					start: 1,
					name: "size",
					type: "number"
				}]
			}]
		},
		E = {
			__proto__: null,
			json: [{
				tfOpName: "AvgPool",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}, {
					tfName: "ksize",
					name: "kernelSize",
					type: "number[]"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "MaxPool",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}, {
					tfName: "ksize",
					name: "kernelSize",
					type: "number[]"
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: [],
					notSupported: !0
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "MaxPoolWithArgmax",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "ksize",
					name: "kernelSize",
					type: "number[]"
				}, {
					tfName: "include_batch_in_index",
					name: "includeBatchInIndex",
					type: "bool"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "AvgPool3D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}, {
					tfName: "ksize",
					name: "kernelSize",
					type: "number[]"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "MaxPool3D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}, {
					tfName: "ksize",
					name: "kernelSize",
					type: "number[]"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Conv1D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "stride",
					name: "stride",
					type: "number"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NWC"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "dilation",
					name: "dilation",
					type: "number",
					defaultValue: 1
				}]
			}, {
				tfOpName: "Conv2D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "useCudnnOnGpu",
					name: "useCudnnOnGpu",
					type: "bool"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]"
				}]
			}, {
				tfOpName: "_FusedConv2D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}, {
					start: 2,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "num_args",
					name: "numArgs",
					type: "number"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}, {
					tfName: "use_cudnn_on_gpu",
					name: "useCudnnOnGpu",
					type: "bool",
					defaultValue: !0
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]",
					defaultValue: [1, 1, 1, 1]
				}, {
					tfName: "fused_ops",
					name: "fusedOps",
					type: "string[]",
					defaultValue: []
				}, {
					tfName: "epsilon",
					name: "epsilon",
					type: "number",
					defaultValue: 1e-4
				}, {
					tfName: "leakyrelu_alpha",
					name: "leakyreluAlpha",
					type: "number",
					defaultValue: .2
				}]
			}, {
				tfOpName: "Conv2DBackpropInput",
				category: "convolution",
				inputs: [{
					start: 2,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}, {
					start: 0,
					name: "outputShape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]",
					notSupported: !0
				}]
			}, {
				tfOpName: "DepthwiseConv2d",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "input",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]"
				}]
			}, {
				tfOpName: "DepthwiseConv2dNative",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "input",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]"
				}]
			}, {
				tfOpName: "FusedDepthwiseConv2dNative",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}, {
					start: 2,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "num_args",
					name: "numArgs",
					type: "number"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]",
					defaultValue: [1, 1, 1, 1]
				}, {
					tfName: "fused_ops",
					name: "fusedOps",
					type: "string[]",
					defaultValue: []
				}, {
					tfName: "explicit_paddings",
					name: "explicitPaddings",
					type: "number[]",
					defaultValue: []
				}]
			}, {
				tfOpName: "Conv3D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					defaultValue: "NHWC"
				}, {
					tfName: "dilations",
					name: "dilations",
					type: "number[]"
				}]
			}, {
				tfOpName: "Dilation2D",
				category: "convolution",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "filter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "strides",
					name: "strides",
					type: "number[]"
				}, {
					tfName: "rates",
					name: "dilations",
					type: "number[]"
				}, {
					tfName: "padding",
					name: "pad",
					type: "string"
				}]
			}]
		},
		I = {
			__proto__: null,
			json: [{
				tfOpName: "Fill",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}, {
					start: 1,
					name: "value",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "LinSpace",
				category: "creation",
				inputs: [{
					start: 0,
					name: "start",
					type: "number"
				}, {
					start: 1,
					name: "stop",
					type: "number"
				}, {
					start: 2,
					name: "num",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "OneHot",
				category: "creation",
				inputs: [{
					start: 0,
					name: "indices",
					type: "tensor"
				}, {
					start: 1,
					name: "depth",
					type: "number"
				}, {
					start: 2,
					name: "onValue",
					type: "number",
					defaultValue: 1
				}, {
					start: 3,
					name: "offValue",
					type: "number",
					defaultValue: 0
				}],
				attrs: [{
					tfName: "axis",
					name: "axis",
					type: "number",
					notSupported: !0
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "Ones",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "OnesLike",
				category: "creation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "RandomStandardNormal",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "seed",
					name: "seed",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "seed2",
					name: "seed2",
					type: "number",
					defaultValue: 0,
					notSupported: !0
				}, {
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "T",
					name: "T",
					type: "number",
					notSupported: !0
				}]
			}, {
				tfOpName: "RandomUniform",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "minval",
					name: "minval",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "maxval",
					name: "maxval",
					type: "number",
					defaultValue: 1
				}, {
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "seed",
					name: "seed",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "seed2",
					name: "seed2",
					type: "number",
					defaultValue: 0,
					notSupported: !0
				}, {
					tfName: "T",
					name: "T",
					type: "number",
					notSupported: !0
				}]
			}, {
				tfOpName: "RandomUniformInt",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "minval",
					name: "minval",
					type: "number"
				}, {
					tfName: "maxval",
					name: "maxval",
					type: "number"
				}, {
					tfName: "seed",
					name: "seed",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "seed2",
					name: "seed2",
					type: "number",
					defaultValue: 0,
					notSupported: !0
				}]
			}, {
				tfOpName: "Range",
				category: "creation",
				inputs: [{
					start: 0,
					name: "start",
					type: "number"
				}, {
					start: 1,
					name: "stop",
					type: "number"
				}, {
					start: 2,
					name: "step",
					type: "number",
					defaultValue: 0
				}],
				attrs: [{
					tfName: "Tidx",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "TruncatedNormal",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "means",
					name: "mean",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "stddev",
					name: "stdDev",
					type: "number",
					defaultValue: 1
				}, {
					tfName: "seed",
					name: "seed",
					type: "number"
				}, {
					tfName: "seed2",
					name: "seed2",
					type: "number",
					defaultValue: 0,
					notSupported: !0
				}, {
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "T",
					name: "T",
					type: "number",
					notSupported: !0
				}]
			}, {
				tfOpName: "Zeros",
				category: "creation",
				inputs: [{
					start: 0,
					name: "shape",
					type: "number[]"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "ZerosLike",
				category: "creation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "Multinomial",
				category: "creation",
				inputs: [{
					start: 0,
					name: "logits",
					type: "tensor"
				}, {
					start: 1,
					name: "numSamples",
					type: "number"
				}],
				attrs: [{
					tfName: "seed",
					name: "seed",
					type: "number"
				}, {
					tfName: "seed2",
					name: "seed2",
					type: "number"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}, {
					tfName: "output_dtype",
					name: "output_dtype",
					type: "dtype"
				}]
			}]
		},
		O = {
			__proto__: null,
			json: [{
				tfOpName: "NonMaxSuppressionV2",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "boxes",
					type: "tensor"
				}, {
					start: 1,
					name: "scores",
					type: "tensor"
				}, {
					start: 2,
					name: "maxOutputSize",
					type: "number"
				}, {
					start: 3,
					name: "iouThreshold",
					type: "number"
				}]
			}, {
				tfOpName: "NonMaxSuppressionV3",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "boxes",
					type: "tensor"
				}, {
					start: 1,
					name: "scores",
					type: "tensor"
				}, {
					start: 2,
					name: "maxOutputSize",
					type: "number"
				}, {
					start: 3,
					name: "iouThreshold",
					type: "number"
				}, {
					start: 4,
					name: "scoreThreshold",
					type: "number"
				}]
			}, {
				tfOpName: "NonMaxSuppressionV4",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "boxes",
					type: "tensor"
				}, {
					start: 1,
					name: "scores",
					type: "tensor"
				}, {
					start: 2,
					name: "maxOutputSize",
					type: "number"
				}, {
					start: 3,
					name: "iouThreshold",
					type: "number"
				}, {
					start: 4,
					name: "scoreThreshold",
					type: "number"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "T_threshold",
					name: "threshold",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "pad_to_max_output_size",
					name: "padToMaxOutputSize",
					type: "bool"
				}]
			}, {
				tfOpName: "NonMaxSuppressionV5",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "boxes",
					type: "tensor"
				}, {
					start: 1,
					name: "scores",
					type: "tensor"
				}, {
					start: 2,
					name: "maxOutputSize",
					type: "number"
				}, {
					start: 3,
					name: "iouThreshold",
					type: "number"
				}, {
					start: 4,
					name: "scoreThreshold",
					type: "number"
				}, {
					start: 5,
					name: "softNmsSigma",
					type: "number"
				}]
			}, {
				tfOpName: "Where",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "condition",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "ListDiff",
				category: "dynamic",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "y",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}]
		},
		A = {
			__proto__: null,
			json: [{
				tfOpName: "LowerBound",
				category: "evaluation",
				inputs: [{
					start: 0,
					name: "sortedSequence",
					type: "tensor"
				}, {
					start: 1,
					name: "values",
					type: "tensor"
				}]
			}, {
				tfOpName: "TopKV2",
				category: "evaluation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "k",
					type: "number"
				}],
				attrs: [{
					tfName: "sorted",
					name: "sorted",
					type: "bool"
				}]
			}, {
				tfOpName: "UpperBound",
				category: "evaluation",
				inputs: [{
					start: 0,
					name: "sortedSequence",
					type: "tensor"
				}, {
					start: 1,
					name: "values",
					type: "tensor"
				}]
			}, {
				tfOpName: "Unique",
				category: "evaluation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "UniqueV2",
				category: "evaluation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}]
			}]
		},
		D = {
			__proto__: null,
			json: [{
				tfOpName: "PlaceholderWithDefault",
				category: "graph",
				inputs: [{
					start: 0,
					name: "default",
					type: "tensor"
				}],
				attrs: [{
					tfName: "shape",
					name: "shape",
					type: "shape"
				}, {
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "Placeholder",
				category: "graph",
				attrs: [{
					tfName: "shape",
					name: "shape",
					type: "shape"
				}, {
					tfName: "dtype",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "Const",
				category: "graph"
			}, {
				tfOpName: "Identity",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "IdentityN",
				category: "graph",
				inputs: [{
					start: 0,
					end: 0,
					name: "x",
					type: "tensors"
				}]
			}, {
				tfOpName: "Snapshot",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "Rank",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "Size",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "Shape",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "ShapeN",
				category: "graph",
				inputs: [{
					start: 0,
					end: 0,
					name: "x",
					type: "tensors"
				}]
			}, {
				tfOpName: "Print",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "data",
					type: "tensors"
				}],
				attrs: [{
					tfName: "message",
					name: "message",
					type: "string"
				}, {
					tfName: "first_n",
					name: "firstN",
					type: "number",
					notSupported: !0
				}, {
					tfName: "summarize",
					name: "summarize",
					type: "number",
					defaultValue: 3
				}]
			}, {
				tfOpName: "NoOp",
				category: "graph",
				inputs: []
			}, {
				tfOpName: "StopGradient",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "FakeQuantWithMinMaxVars",
				category: "graph",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "min",
					name: "min",
					type: "number"
				}, {
					tfName: "max",
					name: "max",
					type: "number"
				}]
			}]
		},
		M = {
			__proto__: null,
			json: [{
				tfOpName: "HashTable",
				category: "hash_table",
				inputs: [],
				attrs: [{
					tfName: "shared_name",
					name: "sharedName",
					type: "string"
				}, {
					tfName: "use_node_name_sharing",
					name: "useNodeNameSharing",
					type: "bool"
				}, {
					tfName: "key_dtype",
					name: "keyDType",
					type: "dtype"
				}, {
					tfName: "value_dtype",
					name: "valueDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "HashTableV2",
				category: "hash_table",
				inputs: [],
				attrs: [{
					tfName: "shared_name",
					name: "sharedName",
					type: "string"
				}, {
					tfName: "use_node_name_sharing",
					name: "useNodeNameSharing",
					type: "bool"
				}, {
					tfName: "key_dtype",
					name: "keyDType",
					type: "dtype"
				}, {
					tfName: "value_dtype",
					name: "valueDType",
					type: "dtype"
				}]
			}, {
				tfOpName: "LookupTableImport",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "values",
					type: "tensor"
				}],
				attrs: [{
					tfName: "Tin",
					name: "tIn",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "tOut",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LookupTableImportV2",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "values",
					type: "tensor"
				}],
				attrs: [{
					tfName: "Tin",
					name: "tIn",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "tOut",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LookupTableFind",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "defaultValue",
					type: "tensor"
				}],
				attrs: [{
					tfName: "Tin",
					name: "tIn",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "tOut",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LookupTableFindV2",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "defaultValue",
					type: "tensor"
				}],
				attrs: [{
					tfName: "Tin",
					name: "tIn",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "Tout",
					name: "tOut",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LookupTableSize",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}]
			}, {
				tfOpName: "LookupTableSizeV2",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}]
			}, {
				tfOpName: "InitializeTable",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "values",
					type: "tensor"
				}]
			}, {
				tfOpName: "InitializeTableV2",
				category: "hash_table",
				inputs: [{
					start: 0,
					name: "tableHandle",
					type: "tensor"
				}, {
					start: 1,
					name: "keys",
					type: "tensor"
				}, {
					start: 2,
					name: "values",
					type: "tensor"
				}]
			}]
		},
		C = {
			__proto__: null,
			json: [{
				tfOpName: "ResizeBilinear",
				category: "image",
				inputs: [{
					start: 0,
					name: "images",
					type: "tensor"
				}, {
					start: 1,
					name: "size",
					type: "number[]"
				}],
				attrs: [{
					tfName: "align_corners",
					name: "alignCorners",
					type: "bool"
				}, {
					tfName: "half_pixel_centers",
					name: "halfPixelCenters",
					type: "bool"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "ResizeNearestNeighbor",
				category: "image",
				inputs: [{
					start: 0,
					name: "images",
					type: "tensor"
				}, {
					start: 1,
					name: "size",
					type: "number[]"
				}],
				attrs: [{
					tfName: "align_corners",
					name: "alignCorners",
					type: "bool"
				}, {
					tfName: "half_pixel_centers",
					name: "halfPixelCenters",
					type: "bool"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "CropAndResize",
				category: "image",
				inputs: [{
					start: 0,
					name: "image",
					type: "tensor"
				}, {
					start: 1,
					name: "boxes",
					type: "tensor"
				}, {
					start: 2,
					name: "boxInd",
					type: "tensor"
				}, {
					start: 3,
					name: "cropSize",
					type: "number[]"
				}],
				attrs: [{
					tfName: "method",
					name: "method",
					type: "string"
				}, {
					tfName: "extrapolation_value",
					name: "extrapolationValue",
					type: "number"
				}]
			}, {
				tfOpName: "ImageProjectiveTransformV3",
				category: "image",
				inputs: [{
					start: 0,
					name: "images",
					type: "tensor"
				}, {
					start: 1,
					name: "transforms",
					type: "tensor"
				}, {
					start: 2,
					name: "outputShape",
					type: "number[]"
				}, {
					start: 3,
					name: "fillValue",
					type: "number"
				}],
				attrs: [{
					tfName: "interpolation",
					name: "interpolation",
					type: "string"
				}, {
					tfName: "fill_mode",
					name: "fillMode",
					type: "string"
				}]
			}]
		},
		F = {
			__proto__: null,
			json: [{
				tfOpName: "Equal",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "NotEqual",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Greater",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "GreaterEqual",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Less",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LessEqual",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LogicalAnd",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LogicalNot",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "LogicalOr",
				category: "logical",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Select",
				category: "logical",
				inputs: [{
					start: 0,
					name: "condition",
					type: "tensor"
				}, {
					start: 1,
					name: "a",
					type: "tensor"
				}, {
					start: 2,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "SelectV2",
				category: "logical",
				inputs: [{
					start: 0,
					name: "condition",
					type: "tensor"
				}, {
					start: 1,
					name: "a",
					type: "tensor"
				}, {
					start: 2,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "BitwiseAnd",
				category: "logical",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "y",
					type: "tensor"
				}]
			}]
		},
		R = {
			__proto__: null,
			json: [{
				tfOpName: "_FusedMatMul",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}, {
					start: 2,
					end: 0,
					name: "args",
					type: "tensors"
				}],
				attrs: [{
					tfName: "num_args",
					name: "numArgs",
					type: "number"
				}, {
					tfName: "fused_ops",
					name: "fusedOps",
					type: "string[]",
					defaultValue: []
				}, {
					tfName: "epsilon",
					name: "epsilon",
					type: "number",
					defaultValue: 1e-4
				}, {
					tfName: "transpose_a",
					name: "transposeA",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "transpose_b",
					name: "transposeB",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "leakyrelu_alpha",
					name: "leakyreluAlpha",
					type: "number",
					defaultValue: .2
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "MatMul",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "transpose_a",
					name: "transposeA",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "transpose_b",
					name: "transposeB",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "BatchMatMul",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "adj_x",
					name: "transposeA",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "adj_y",
					name: "transposeB",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "BatchMatMulV2",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "b",
					type: "tensor"
				}],
				attrs: [{
					tfName: "adj_x",
					name: "transposeA",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "adj_y",
					name: "transposeB",
					type: "bool",
					defaultValue: !1
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Transpose",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "perm",
					type: "number[]"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Einsum",
				category: "matrices",
				inputs: [{
					start: 0,
					end: 0,
					name: "tensors",
					type: "tensors"
				}],
				attrs: [{
					tfName: "equation",
					name: "equation",
					type: "string"
				}, {
					tfName: "N",
					name: "n",
					type: "number",
					defaultValue: 2
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "MatrixBandPart",
				category: "matrices",
				inputs: [{
					start: 0,
					name: "a",
					type: "tensor"
				}, {
					start: 1,
					name: "numLower",
					type: "tensor"
				}, {
					start: 1,
					name: "numUpper",
					type: "tensor"
				}]
			}]
		},
		z = {
			__proto__: null,
			json: [{
				tfOpName: "EuclideanNorm",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool",
					defaultValue: !1
				}]
			}, {
				tfOpName: "FusedBatchNorm",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "scale",
					type: "tensor"
				}, {
					start: 2,
					name: "offset",
					type: "tensor"
				}, {
					start: 3,
					name: "mean",
					type: "tensor"
				}, {
					start: 4,
					name: "variance",
					type: "tensor"
				}],
				attrs: [{
					tfName: "epsilon",
					name: "epsilon",
					type: "number",
					defaultValue: .001
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}]
			}, {
				tfOpName: "FusedBatchNormV2",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "scale",
					type: "tensor"
				}, {
					start: 2,
					name: "offset",
					type: "tensor"
				}, {
					start: 3,
					name: "mean",
					type: "tensor"
				}, {
					start: 4,
					name: "variance",
					type: "tensor"
				}],
				attrs: [{
					tfName: "epsilon",
					name: "epsilon",
					type: "number",
					defaultValue: .001
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}]
			}, {
				tfOpName: "FusedBatchNormV3",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "scale",
					type: "tensor"
				}, {
					start: 2,
					name: "offset",
					type: "tensor"
				}, {
					start: 3,
					name: "mean",
					type: "tensor"
				}, {
					start: 4,
					name: "variance",
					type: "tensor"
				}],
				attrs: [{
					tfName: "epsilon",
					name: "epsilon",
					type: "number",
					defaultValue: .001
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string",
					notSupported: !0
				}]
			}, {
				tfOpName: "LRN",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "depth_radius",
					name: "radius",
					type: "number",
					defaultValue: 5
				}, {
					tfName: "bias",
					name: "bias",
					type: "number",
					defaultValue: 1
				}, {
					tfName: "alpha",
					name: "alpha",
					type: "number",
					defaultValue: 1
				}, {
					tfName: "beta",
					name: "beta",
					type: "number",
					defaultValue: .5
				}]
			}, {
				tfOpName: "Softmax",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "LogSoftmax",
				category: "normalization",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}]
		},
		L = {
			__proto__: null,
			json: [{
				tfOpName: "Bincount",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "size",
					type: "number"
				}, {
					start: 2,
					name: "weights",
					type: "tensor"
				}]
			}, {
				tfOpName: "DenseBincount",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "size",
					type: "number"
				}, {
					start: 2,
					name: "weights",
					type: "tensor"
				}],
				attrs: [{
					tfName: "binary_output",
					name: "binaryOutput",
					type: "bool"
				}]
			}, {
				tfOpName: "Max",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "Mean",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "Min",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "Sum",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "All",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "Any",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}]
			}, {
				tfOpName: "ArgMax",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}]
			}, {
				tfOpName: "ArgMin",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}]
			}, {
				tfOpName: "Prod",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}],
				attrs: [{
					tfName: "keep_dims",
					name: "keepDims",
					type: "bool"
				}, {
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "Cumprod",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}],
				attrs: [{
					tfName: "exclusive",
					name: "exclusive",
					type: "bool"
				}, {
					tfName: "reverse",
					name: "reverse",
					type: "bool"
				}]
			}, {
				tfOpName: "Cumsum",
				category: "reduction",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}],
				attrs: [{
					tfName: "exclusive",
					name: "exclusive",
					type: "bool"
				}, {
					tfName: "reverse",
					name: "reverse",
					type: "bool"
				}]
			}]
		},
		V = {
			__proto__: null,
			json: [{
				tfOpName: "ConcatV2",
				category: "slice_join",
				inputs: [{
					start: 0,
					end: -1,
					name: "tensors",
					type: "tensors"
				}, {
					start: -1,
					name: "axis",
					type: "number"
				}],
				attrs: [{
					tfName: "N",
					name: "n",
					type: "number",
					defaultValue: 2
				}]
			}, {
				tfOpName: "Concat",
				category: "slice_join",
				inputs: [{
					start: 1,
					end: 0,
					name: "tensors",
					type: "tensors"
				}, {
					start: 0,
					name: "axis",
					type: "number"
				}],
				attrs: [{
					tfName: "N",
					name: "n",
					type: "number",
					defaultValue: 2
				}]
			}, {
				tfOpName: "GatherV2",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}, {
					start: 2,
					name: "axis",
					type: "number",
					defaultValue: 0
				}],
				attrs: [{
					tfName: "batch_dims",
					name: "batchDims",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "Gather",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}],
				attrs: [{
					tfName: "validate_indices",
					name: "validateIndices",
					type: "bool",
					notSupported: !0
				}]
			}, {
				tfOpName: "Reverse",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "dims",
					type: "bool[]"
				}]
			}, {
				tfOpName: "ReverseV2",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number[]"
				}]
			}, {
				tfOpName: "Slice",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "begin",
					type: "number[]"
				}, {
					start: 2,
					name: "size",
					type: "number[]"
				}]
			}, {
				tfOpName: "StridedSlice",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "begin",
					type: "number[]"
				}, {
					start: 2,
					name: "end",
					type: "number[]"
				}, {
					start: 3,
					name: "strides",
					type: "number[]"
				}],
				attrs: [{
					tfName: "begin_mask",
					name: "beginMask",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "end_mask",
					name: "endMask",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "new_axis_mask",
					name: "newAxisMask",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "ellipsis_mask",
					name: "ellipsisMask",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "shrink_axis_mask",
					name: "shrinkAxisMask",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "Pack",
				category: "slice_join",
				inputs: [{
					start: 0,
					end: 0,
					name: "tensors",
					type: "tensors"
				}],
				attrs: [{
					tfName: "axis",
					name: "axis",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "Unpack",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}],
				attrs: [{
					tfName: "axis",
					name: "axis",
					type: "number",
					defaultValue: 0
				}, {
					tfName: "num",
					name: "num",
					type: "number",
					defaultValue: 0,
					notSupported: !0
				}]
			}, {
				tfOpName: "Tile",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "reps",
					type: "number[]"
				}]
			}, {
				tfOpName: "Split",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "axis",
					type: "number",
					defaultValue: 0
				}, {
					start: 1,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "num_split",
					name: "numOrSizeSplits",
					type: "number",
					defaultValue: 1
				}]
			}, {
				tfOpName: "SplitV",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "numOrSizeSplits",
					type: "number[]"
				}, {
					start: 2,
					name: "axis",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "ScatterNd",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "indices",
					type: "tensor"
				}, {
					start: 1,
					name: "values",
					type: "tensor"
				}, {
					start: 2,
					name: "shape",
					type: "number[]"
				}]
			}, {
				tfOpName: "GatherNd",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}]
			}, {
				tfOpName: "SparseToDense",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "sparseIndices",
					type: "tensor"
				}, {
					start: 1,
					name: "outputShape",
					type: "number[]"
				}, {
					start: 2,
					name: "sparseValues",
					type: "tensor"
				}, {
					start: 3,
					name: "defaultValue",
					type: "tensor"
				}],
				attrs: [{
					tfName: "validate_indices",
					name: "validateIndices",
					type: "bool",
					defaultValue: !1,
					notSupported: !0
				}]
			}, {
				tfOpName: "TensorScatterUpdate",
				category: "slice_join",
				inputs: [{
					start: 0,
					name: "tensor",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}, {
					start: 2,
					name: "values",
					type: "tensor"
				}]
			}]
		},
		P = {
			__proto__: null,
			json: [{
				tfOpName: "SparseFillEmptyRows",
				category: "sparse",
				inputs: [{
					start: 0,
					name: "indices",
					type: "tensor"
				}, {
					start: 1,
					name: "values",
					type: "tensor"
				}, {
					start: 2,
					name: "denseShape",
					type: "tensor"
				}, {
					start: 3,
					name: "defaultValue",
					type: "tensor"
				}]
			}, {
				tfOpName: "SparseReshape",
				category: "sparse",
				inputs: [{
					start: 0,
					name: "inputIndices",
					type: "tensor"
				}, {
					start: 1,
					name: "inputShape",
					type: "tensor"
				}, {
					start: 2,
					name: "newShape",
					type: "tensor"
				}],
				attrs: [{
					tfName: "T",
					name: "dtype",
					type: "dtype",
					notSupported: !0
				}]
			}, {
				tfOpName: "SparseSegmentMean",
				category: "sparse",
				inputs: [{
					start: 0,
					name: "data",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}, {
					start: 2,
					name: "segmentIds",
					type: "tensor"
				}]
			}, {
				tfOpName: "SparseSegmentSum",
				category: "sparse",
				inputs: [{
					start: 0,
					name: "data",
					type: "tensor"
				}, {
					start: 1,
					name: "indices",
					type: "tensor"
				}, {
					start: 2,
					name: "segmentIds",
					type: "tensor"
				}]
			}]
		},
		B = {
			__proto__: null,
			json: [{
				tfOpName: "FFT",
				category: "spectral",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "IFFT",
				category: "spectral",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}]
			}, {
				tfOpName: "RFFT",
				category: "spectral",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "fft_length",
					type: "number",
					notSupported: !0
				}]
			}, {
				tfOpName: "IRFFT",
				category: "spectral",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "fft_length",
					type: "number",
					notSupported: !0
				}]
			}]
		},
		K = {
			__proto__: null,
			json: [{
				tfOpName: "StaticRegexReplace",
				category: "string",
				inputs: [{
					start: 0,
					name: "input",
					type: "tensor"
				}],
				attrs: [{
					tfName: "pattern",
					name: "pattern",
					type: "string"
				}, {
					tfName: "rewrite",
					name: "rewrite",
					type: "string"
				}, {
					tfName: "replace_global",
					name: "replaceGlobal",
					type: "bool"
				}]
			}, {
				tfOpName: "StringNGrams",
				category: "string",
				inputs: [{
					start: 0,
					name: "data",
					type: "tensor"
				}, {
					start: 1,
					name: "dataSplits",
					type: "tensor"
				}],
				attrs: [{
					tfName: "separator",
					name: "separator",
					type: "string"
				}, {
					tfName: "ngram_widths",
					name: "nGramWidths",
					type: "number[]"
				}, {
					tfName: "left_pad",
					name: "leftPad",
					type: "string"
				}, {
					tfName: "right_pad",
					name: "rightPad",
					type: "string"
				}, {
					tfName: "pad_width",
					name: "padWidth",
					type: "number"
				}, {
					tfName: "preserve_short_sequences",
					name: "preserveShortSequences",
					type: "bool"
				}],
				outputs: ["ngrams", "ngrams_splits"]
			}, {
				tfOpName: "StringSplit",
				category: "string",
				inputs: [{
					start: 0,
					name: "input",
					type: "tensor"
				}, {
					start: 1,
					name: "delimiter",
					type: "tensor"
				}],
				attrs: [{
					tfName: "skip_empty",
					name: "skipEmpty",
					type: "bool"
				}],
				outputs: ["indices", "values", "shape"]
			}, {
				tfOpName: "StringToHashBucketFast",
				category: "string",
				inputs: [{
					start: 0,
					name: "input",
					type: "tensor"
				}],
				attrs: [{
					tfName: "num_buckets",
					name: "numBuckets",
					type: "number"
				}]
			}]
		},
		j = {
			__proto__: null,
			json: [{
				tfOpName: "Cast",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "SrcT",
					name: "sdtype",
					type: "dtype",
					notSupported: !0
				}, {
					tfName: "DstT",
					name: "dtype",
					type: "dtype"
				}]
			}, {
				tfOpName: "ExpandDims",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "axis",
					type: "number"
				}]
			}, {
				tfOpName: "MirrorPad",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "padding",
					type: "number[]"
				}],
				attrs: [{
					tfName: "mode",
					name: "mode",
					type: "string"
				}]
			}, {
				tfOpName: "Pad",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "padding",
					type: "number[]"
				}],
				attrs: [{
					tfName: "constant_value",
					name: "constantValue",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "PadV2",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "padding",
					type: "number[]"
				}, {
					start: 2,
					name: "constantValue",
					type: "number",
					defaultValue: 0
				}]
			}, {
				tfOpName: "Reshape",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "shape",
					type: "number[]"
				}]
			}, {
				tfOpName: "EnsureShape",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "shape",
					type: "number[]"
				}]
			}, {
				tfOpName: "Squeeze",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "axis",
					tfDeprecatedName: "squeeze_dims",
					name: "axis",
					type: "number[]"
				}]
			}, {
				tfOpName: "SpaceToBatchND",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "blockShape",
					type: "number[]"
				}, {
					start: 2,
					name: "paddings",
					type: "number[]"
				}]
			}, {
				tfOpName: "BatchToSpaceND",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "blockShape",
					type: "number[]"
				}, {
					start: 2,
					name: "crops",
					type: "number[]"
				}]
			}, {
				tfOpName: "DepthToSpace",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}],
				attrs: [{
					tfName: "block_size",
					name: "blockSize",
					type: "number"
				}, {
					tfName: "data_format",
					name: "dataFormat",
					type: "string"
				}]
			}, {
				tfOpName: "BroadcastTo",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "x",
					type: "tensor"
				}, {
					start: 1,
					name: "shape",
					type: "number[]"
				}],
				attrs: []
			}, {
				tfOpName: "BroadcastArgs",
				category: "transformation",
				inputs: [{
					start: 0,
					name: "s0",
					type: "tensor"
				}, {
					start: 1,
					name: "s1",
					type: "tensor"
				}],
				attrs: []
			}]
		},
		q = function() {
			function e() {
				var e = [T, S, _, E, I, O, A, D, M, C, F, R, z, L, V, P, B, K, j],
					t = [].concat.apply([], h([], d(e.map((function(e) {
						return e.json
					}))), !1));
				this.opMappers = t.reduce((function(e, t) {
					return e[t.tfOpName] = t, e
				}), {})
			}
			return Object.defineProperty(e, "Instance", {
				get: function() {
					return this._instance || (this._instance = new this)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.transformGraph = function(e, t) {
				var n = this;
				void 0 === t && (t = {});
				var r = e.node,
					a = [],
					o = [],
					s = [],
					i = r.reduce((function(e, t) {
						return e[t.name] = n.mapNode(t), t.op.startsWith("Placeholder") ? a.push(e[t
								.name]) : "Const" === t.op ? o.push(e[t.name]) : null != t.input &&
							0 !== t.input.length || s.push(e[t.name]), e
					}), {}),
					u = [],
					c = [],
					p = {},
					l = {};
				null != t && (p = this.mapSignatureEntries(t.inputs), l = this.mapSignatureEntries(t
					.outputs));
				var h = Object.keys(i);
				h.forEach((function(e) {
					var t = i[e];
					t.inputNames.forEach((function(e, n) {
						var r = d(b(e), 3),
							a = r[0],
							o = r[2],
							s = i[a];
						if (null != s.outputs) {
							var u = s.outputs.indexOf(o);
							if (-1 !== u) {
								var c = "".concat(a, ":").concat(u);
								t.inputNames[n] = c
							}
						}
						t.inputs.push(s), s.children.push(t)
					}))
				})), 0 === Object.keys(l).length ? h.forEach((function(e) {
					var t = i[e];
					0 === t.children.length && c.push(t)
				})) : Object.keys(l).forEach((function(e) {
					var t = d(b(e), 1)[0],
						n = i[t];
					null != n && (n.signatureKey = l[e], c.push(n))
				})), Object.keys(p).length > 0 ? Object.keys(p).forEach((function(e) {
					var t = d(b(e), 1)[0],
						n = i[t];
					n && (n.signatureKey = p[e], u.push(n))
				})) : u = a;
				var f = {};
				null != e.library && null != e.library.function && (f = e.library.function.reduce((function(
					e, t) {
					return e[t.signature.name] = n.mapFunction(t), e
				}), {}));
				var m = {
					nodes: i,
					inputs: u,
					outputs: c,
					weights: o,
					placeholders: a,
					signature: t,
					functions: f
				};
				return s.length > 0 && (m.initNodes = s), m
			}, e.prototype.mapSignatureEntries = function(e) {
				return Object.keys(e || {}).reduce((function(t, n) {
					return t[e[n].name] = n, t
				}), {})
			}, e.prototype.mapNode = function(e) {
				var t = m(e.op) || this.opMappers[e.op] || {};
				null == e.attr && (e.attr = {});
				var n = {
					name: e.name,
					op: e.op,
					category: t.category,
					inputNames: (e.input || []).map((function(e) {
						return e.startsWith("^") ? e.slice(1) : e
					})),
					inputs: [],
					children: [],
					inputParams: {},
					attrParams: {},
					rawAttrs: e.attr,
					outputs: t.outputs
				};
				return null != t.inputs && (n.inputParams = t.inputs.reduce((function(e, t) {
					return e[t.name] = {
						type: t.type,
						inputIndexStart: t.start,
						inputIndexEnd: t.end
					}, e
				}), {})), null != t.attrs && (n.attrParams = t.attrs.reduce((function(t, n) {
					var r = n.type,
						a = void 0;
					switch (n.type) {
						case "string":
							void 0 === (a = W(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = W(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "string[]":
							void 0 === (a = te(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = te(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "number":
							void 0 === (a = H(e.attr, n.tfName, n.defaultValue || 0)) && n
								.tfDeprecatedName && (a = H(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "number[]":
							void 0 === (a = ee(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = ee(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "bool":
							void 0 === (a = G(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = G(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "bool[]":
							void 0 === (a = re(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = re(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "shape":
							void 0 === (a = $(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = $(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "shape[]":
							void 0 === (a = ne(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = ne(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "dtype":
							void 0 === (a = X(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = X(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "dtype[]":
							void 0 === (a = Y(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = Y(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "func":
							void 0 === (a = Q(e.attr, n.tfName, n.defaultValue)) && n
								.tfDeprecatedName && (a = Q(e.attr, n.tfDeprecatedName, n
									.defaultValue));
							break;
						case "tensor":
						case "tensors":
							break;
						default:
							throw new Error("Unsupported param type: ".concat(n.type,
								" for op: ").concat(e.op))
					}
					return t[n.name] = {
						value: a,
						type: r
					}, t
				}), {})), n
			}, e.prototype.mapFunction = function(e) {
				var t = this,
					n = e.nodeDef,
					r = [],
					a = {};
				null != n && (a = n.reduce((function(e, n) {
					return e[n.name] = t.mapNode(n), "Const" === n.op && r.push(e[n.name]),
						e
				}), {}));
				var o = [],
					s = [];
				e.signature.inputArg.forEach((function(e) {
					var t = d(b(e.name), 1)[0],
						n = {
							name: t,
							op: "Placeholder",
							inputs: [],
							inputNames: [],
							category: "graph",
							inputParams: {},
							attrParams: {
								dtype: {
									value: Z(e.type),
									type: "dtype"
								}
							},
							children: []
						};
					n.signatureKey = e.name, o.push(n), a[t] = n
				})), Object.keys(a).forEach((function(e) {
					var t = a[e];
					t.inputNames.forEach((function(e, n) {
						var r = d(b(e), 3),
							o = r[0],
							s = r[2],
							i = a[o];
						if (null != i.outputs) {
							var u = i.outputs.indexOf(s);
							if (-1 !== u) {
								var c = "".concat(o, ":").concat(u);
								t.inputNames[n] = c
							}
						}
						t.inputs.push(i), i.children.push(t)
					}))
				}));
				var i = e.ret;
				e.signature.outputArg.forEach((function(e) {
					var t = d(b(i[e.name]), 2),
						n = t[0],
						r = t[1],
						o = a[n];
					null != o && (o.defaultOutput = r, s.push(o))
				}));
				var u = this.mapArgsToSignature(e);
				return {
					nodes: a,
					inputs: o,
					outputs: s,
					weights: r,
					placeholders: [],
					signature: u
				}
			}, e.prototype.mapArgsToSignature = function(e) {
				var t = this;
				return {
					methodName: e.signature.name,
					inputs: e.signature.inputArg.reduce((function(e, n) {
						return e[n.name] = t.mapArgToTensorInfo(n), e
					}), {}),
					outputs: e.signature.outputArg.reduce((function(n, r) {
						return n[r.name] = t.mapArgToTensorInfo(r, e.ret), n
					}), {})
				}
			}, e.prototype.mapArgToTensorInfo = function(e, t) {
				var n = e.name;
				return null != t && (n = t[n]), {
					name: n,
					dtype: e.type
				}
			}, e
		}();

	function U(e, n) {
		var r = Array.isArray(e) ? String.fromCharCode.apply(null, e) : function(e) {
			return TTWebAssembly.atob(e);
			throw new Error(
				"Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")
		}(e);
		return n ? r : r.toLowerCase()
	}

	function W(e, t, n, r) {
		void 0 === r && (r = !1);
		var a = e[t];
		return null != a ? U(a.s, r) : n
	}

	function G(e, t, n) {
		var r = e[t];
		return r ? r.b : n
	}

	function H(e, t, n) {
		var r = e[t] || {},
			a = null != r.i ? r.i : null != r.f ? r.f : n;
		return "number" == typeof a ? a : parseInt(a, 10)
	}

	function Z(e) {
		switch ("string" == typeof e && (e = o[e]), e) {
			case o.DT_FLOAT:
			case o.DT_HALF:
				return "float32";
			case o.DT_INT32:
			case o.DT_INT64:
			case o.DT_INT8:
			case o.DT_UINT8:
				return "int32";
			case o.DT_BOOL:
				return "bool";
			case o.DT_DOUBLE:
				return "float32";
			case o.DT_STRING:
				return "string";
			case o.DT_COMPLEX64:
			case o.DT_COMPLEX128:
				return "complex64";
			default:
				return null
		}
	}

	function Q(e, t, n) {
		var r = e[t];
		return r && r.func ? r.func.name : n
	}

	function X(e, t, n) {
		var r = e[t];
		return r && r.type ? Z(r.type) : n
	}

	function Y(e, t, n) {
		var r = e[t];
		return r && r.list && r.list.type ? r.list.type.map((function(e) {
			return Z(e)
		})) : n
	}

	function J(e) {
		if (!e.unknownRank) return null != e.dim ? e.dim.map((function(e) {
			return "number" == typeof e.size ? e.size : parseInt(e.size, 10)
		})) : []
	}

	function $(e, t, n) {
		var r = e[t];
		return r && r.shape ? J(r.shape) : n
	}

	function ee(e, t, n) {
		var r = e[t];
		return r ? ((r.list.f && r.list.f.length ? r.list.f : r.list.i) || []).map((function(e) {
			return "number" == typeof e ? e : parseInt(e, 10)
		})) : n
	}

	function te(e, t, n, r) {
		void 0 === r && (r = !1);
		var a = e[t];
		return a && a.list && a.list.s ? a.list.s.map((function(e) {
			return U(e, r)
		})) : n
	}

	function ne(e, t, n) {
		var r = e[t];
		return r && r.list && r.list.shape ? r.list.shape.map((function(e) {
			return J(e)
		})) : n
	}

	function re(e, t, n) {
		var r = e[t];
		return r && r.list && r.list.b ? r.list.b : n
	}
	var ae = function() {
			function e(e, t, n) {
				var r = this;
				this.node = e, this.tensorMap = t, this.context = n, this.inputs = [], this.attrs = {}, this
					.inputs = e.inputNames.map((function(e) {
						return r.getInput(e)
					})), null != e.rawAttrs && (this.attrs = Object.keys(e.rawAttrs).reduce((function(e, t) {
						return e[t] = r.getAttr(t), e
					}), {}))
			}
			return e.prototype.getInput = function(e) {
				return v(e, this.tensorMap, this.context)
			}, e.prototype.getAttr = function(e, t) {
				var n = this.node.rawAttrs[e];
				if (null != n.tensor) return v(e, this.tensorMap, this.context);
				if (null != n.i || null != n.f) return H(this.node.rawAttrs, e, t);
				if (null != n.s) return W(this.node.rawAttrs, e, t);
				if (null != n.b) return G(this.node.rawAttrs, e, t);
				if (null != n.shape) return $(this.node.rawAttrs, e, t);
				if (null != n.type) return X(this.node.rawAttrs, e, t);
				if (null != n.list) {
					if (null != n.list.i || null != n.list.f) return ee(this.node.rawAttrs, e, t);
					if (null != n.list.s) return te(this.node.rawAttrs, e, t);
					if (null != n.list.shape) return ne(this.node.rawAttrs, e, t);
					if (null != n.list.b) return re(this.node.rawAttrs, e, t);
					if (null != n.list.type) return Y(this.node.rawAttrs, e, t)
				}
				return t
			}, e
		}(),
		oe = function() {
			function e() {}
			return e.prototype.refCount = function(e) {
				return se("refCount")
			}, e.prototype.incRef = function(e) {
				return se("incRef")
			}, e.prototype.timerAvailable = function() {
				return !0
			}, e.prototype.time = function(e) {
				return se("time")
			}, e.prototype.read = function(e) {
				return se("read")
			}, e.prototype.readSync = function(e) {
				return se("readSync")
			}, e.prototype.readToGPU = function(e, t) {
				return se("readToGPU")
			}, e.prototype.numDataIds = function() {
				return se("numDataIds")
			}, e.prototype.disposeData = function(e, t) {
				return se("disposeData")
			}, e.prototype.write = function(e, t, n) {
				return se("write")
			}, e.prototype.move = function(e, t, n, r, a) {
				return se("move")
			}, e.prototype.createTensorFromGPUData = function(e, t, n) {
				return se("createTensorFromGPUData")
			}, e.prototype.memory = function() {
				return se("memory")
			}, e.prototype.floatPrecision = function() {
				return se("floatPrecision")
			}, e.prototype.epsilon = function() {
				return 32 === this.floatPrecision() ? 1e-7 : 1e-4
			}, e.prototype.dispose = function() {
				return se("dispose")
			}, e
		}();

	function se(e) {
		throw new Error("'".concat(e, "' not yet implemented or not found in the registry. ") +
			"This kernel may not be supported by the tfjs backend you have chosen")
	}

	function ie(e, t) {
		if (!e) throw new Error("string" == typeof t ? t : t())
	}

	function ue(e, t, n) {
		void 0 === n && (n = ""), ie(le(e, t), (function() {
			return n + " Shapes ".concat(e, " and ").concat(t, " must match")
		}))
	}

	function ce(e) {
		ie(null != e, (function() {
			return "The input to the tensor constructor must be a non-null value."
		}))
	}

	function pe(e) {
		if (0 === e.length) return 1;
		for (var t = e[0], n = 1; n < e.length; n++) t *= e[n];
		return t
	}

	function le(e, t) {
		if (e === t) return !0;
		if (null == e || null == t) return !1;
		if (e.length !== t.length) return !1;
		for (var n = 0; n < e.length; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}

	function de(e) {
		return e % 1 == 0
	}

	function he(e, t) {
		return t <= e.length ? e : e + " ".repeat(t - e.length)
	}

	function fe(e, t) {
		var n = t.length;
		return ie((e = null == e ? t.map((function(e, t) {
			return t
		})) : [].concat(e)).every((function(e) {
			return e >= -n && e < n
		})), (function() {
			return "All values in axis param must be in range [-".concat(n, ", ").concat(n,
				") but ") + "got axis ".concat(e)
		})), ie(e.every((function(e) {
			return de(e)
		})), (function() {
			return "All values in axis param must be integers but " + "got axis ".concat(e)
		})), e.map((function(e) {
			return e < 0 ? n + e : e
		}))
	}

	function me(e, t) {
		var n = null;
		if (null == e || "float32" === e) n = new Float32Array(t);
		else if ("int32" === e) n = new Int32Array(t);
		else if ("bool" === e) n = new Uint8Array(t);
		else {
			if ("string" !== e) throw new Error("Unknown data type ".concat(e));
			n = new Array(t)
		}
		return n
	}

	function ye(e) {
		if ("float32" === e || "int32" === e) return 4;
		if ("complex64" === e) return 8;
		if ("bool" === e) return 1;
		throw new Error("Unknown dtype ".concat(e))
	}

	function ve(e) {
		return "string" == typeof e || e instanceof String
	}

	function ge(e) {
		return Array.isArray(e) ? ge(e[0]) : e instanceof Float32Array ? "float32" : e instanceof Int32Array ||
			e instanceof Uint8Array || e instanceof Uint8ClampedArray ? "int32" : "number" == typeof e ?
			"float32" : ve(e) ? "string" : function(e) {
				return "boolean" == typeof e
			}(e) ? "bool" : "float32"
	}

	function be(e) {
		return !!(e && e.constructor && e.call && e.apply)
	}

	function xe(e) {
		var t = e.length;
		if (t < 2) return [];
		var n = new Array(t - 1);
		n[t - 2] = e[t - 1];
		for (var r = t - 3; r >= 0; --r) n[r] = n[r + 1] * e[r + 1];
		return n
	}

	function Ne(e, t, n, r) {
		void 0 === r && (r = !1);
		var a = new Array;
		if (1 === t.length)
			for (var o = t[0] * (r ? 2 : 1), s = 0; s < o; s++) a[s] = n[e + s];
		else {
			o = t[0];
			var i = t.slice(1),
				u = i.reduce((function(e, t) {
					return e * t
				})) * (r ? 2 : 1);
			for (s = 0; s < o; s++) a[s] = Ne(e + s * u, i, n, r)
		}
		return a
	}

	function we(e, t, n) {
		if (void 0 === n && (n = !1), 0 === e.length) return t[0];
		var r = e.reduce((function(e, t) {
			return e * t
		})) * (n ? 2 : 1);
		if (0 === r) return [];
		if (r !== t.length) throw new Error("[".concat(e, "] does not match the input size ").concat(t.length)
			.concat(n ? " for a complex tensor" : "", "."));
		return Ne(0, e, t, n)
	}

	function ke(e, t) {
		for (var n = Te(e, t), r = 0; r < n.length; r++) n[r] = 1;
		return n
	}

	function Te(e, t) {
		if (null == t || "float32" === t || "complex64" === t) return new Float32Array(e);
		if ("int32" === t) return new Int32Array(e);
		if ("bool" === t) return new Uint8Array(e);
		throw new Error("Unknown data type ".concat(t))
	}

	function Se(e) {
		e.forEach((function(t) {
			ie(Number.isInteger(t) && t >= 0, (function() {
				return "Tensor must have a shape comprised of positive integers but got " +
					"shape [".concat(e, "].")
			}))
		}))
	}

	function _e(e) {
		return e && e.then && "function" == typeof e.then
	}
	var Ee = "tfjsflags",
		Ie = function() {
			function e(e) {
				this.global = e, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this
					.getQueryParams = Oe, this.populateURLFlags()
			}
			return e.prototype.setPlatform = function(e, t) {
				null != this.platform && (De().getBool("IS_TEST") || De().getBool("PROD") || console.warn(
						"Platform ".concat(this.platformName, " has already been set. ") +
						"Overwriting the platform with ".concat(e, "."))), this.platformName = e, this
					.platform = t
			}, e.prototype.registerFlag = function(e, t, n) {
				if (this.flagRegistry[e] = {
						evaluationFn: t,
						setHook: n
					}, null != this.urlFlags[e]) {
					var r = this.urlFlags[e];
					De().getBool("IS_TEST") || De().getBool("PROD") || console.warn(
						"Setting feature override from URL ".concat(e, ": ").concat(r, ".")), this.set(
						e, r)
				}
			}, e.prototype.getAsync = function(e) {
				return c(this, void 0, void 0, (function() {
					var t, n;
					return p(this, (function(r) {
						switch (r.label) {
							case 0:
								return e in this.flags ? [2, this.flags[e]] : (t =
									this.flags, n = e, [4, this.evaluateFlag(e)]
								);
							case 1:
								return t[n] = r.sent(), [2, this.flags[e]]
						}
					}))
				}))
			}, e.prototype.get = function(e) {
				if (e in this.flags) return this.flags[e];
				var t = this.evaluateFlag(e);
				if (_e(t)) throw new Error("Flag ".concat(e, " cannot be synchronously evaluated. ") +
					"Please use getAsync() instead.");
				return this.flags[e] = t, this.flags[e]
			}, e.prototype.getNumber = function(e) {
				return this.get(e)
			}, e.prototype.getBool = function(e) {
				return this.get(e)
			}, e.prototype.getString = function(e) {
				return this.get(e)
			}, e.prototype.getFlags = function() {
				return this.flags
			}, Object.defineProperty(e.prototype, "features", {
				get: function() {
					return this.flags
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.set = function(e, t) {
				if (null == this.flagRegistry[e]) throw new Error("Cannot set flag ".concat(e,
					" as it has not been registered."));
				this.flags[e] = t, null != this.flagRegistry[e].setHook && this.flagRegistry[e].setHook(t)
			}, e.prototype.evaluateFlag = function(e) {
				if (null == this.flagRegistry[e]) throw new Error("Cannot evaluate flag '".concat(e,
					"': no evaluation function found."));
				return this.flagRegistry[e].evaluationFn()
			}, e.prototype.setFlags = function(e) {
				this.flags = Object.assign({}, e)
			}, e.prototype.reset = function() {
				this.flags = {}, this.urlFlags = {}, this.populateURLFlags()
			}, e.prototype.populateURLFlags = function() {
				var e = this;
				if ("undefined" != typeof this.global && "undefined" != typeof this.global.location &&
					"undefined" != typeof this.global.location.search) {
					var t = this.getQueryParams(this.global.location.search);
					if (Ee in t) t.tfjsflags.split(",").forEach((function(t) {
						var n = d(t.split(":"), 2),
							r = n[0],
							a = n[1];
						e.urlFlags[r] = function(e, t) {
							var n = t.toLowerCase();
							return "true" === n || "false" === n ? "true" === n : "".concat(
								+n) === n ? +n : t
						}(0, a)
					}))
				}
			}, e
		}();

	function Oe(e) {
		var t = {};
		return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (function(e) {
			for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			return Ae(t, n[0], n[1]), n.join("=")
		})), t
	}

	function Ae(e, t, n) {
		e[decodeURIComponent(t)] = decodeURIComponent(n || "")
	}

	function De() {
		return Ce
	}
	var Me, Ce = null;

	function Fe() {
		if (null == Me) {
			var e = void 0;
			if ("undefined" != typeof window) e = window;
			else if ("undefined" != typeof global) e = global;
			else if ("undefined" != typeof process) e = process;
			else {
				if ("undefined" == typeof self) throw new Error("Could not find a global object");
				e = self
			}
			Me = e
		}
		return Me
	}

	function Re(e, t) {
		var n, r = (null == (n = Fe())._tfGlobals && (n._tfGlobals = new Map), n._tfGlobals);
		if (r.has(e)) return r.get(e);
		var a = t();
		return r.set(e, a), r.get(e)
	}
	var ze = "Cast",
		Le = "Einsum",
		Ve = "Identity",
		Pe = "Tile",
		Be = "Transpose",
		Ke = "_FusedMatMul",
		je = "FusedConv2D",
		qe = "FusedDepthwiseConv2D";

	function Ue() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		De().getBool("IS_TEST") || De().getBool("PROD") || console.warn.apply(console, h([], d(e), !1))
	}
	var We = Re("kernelRegistry", (function() {
			return new Map
		})),
		Ge = Re("gradRegistry", (function() {
			return new Map
		}));

	function He(e, t) {
		var n = function(e, t) {
			return "".concat(t, "_").concat(e)
		}(e, t);
		return We.get(n)
	}

	function Ze(e) {
		return Ge.get(e)
	}

	function Qe(e) {
		for (var t = We.entries(), n = [];;) {
			var r = t.next(),
				a = r.done,
				o = r.value;
			if (a) break;
			var s = d(o, 2),
				i = s[0],
				u = s[1];
			d(i.split("_"), 1)[0] === e && n.push(u)
		}
		return n
	}
	var Xe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window :
		"undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function Ye(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
	}

	function Je(e) {
		if (e.__esModule) return e;
		var t = e.default;
		if ("function" == typeof t) {
			var n = function e() {
				if (this instanceof e) {
					var n = [null];
					n.push.apply(n, arguments);
					var r = Function.bind.apply(t, n);
					return new r
				}
				return t.apply(this, arguments)
			};
			n.prototype = t.prototype
		} else n = {};
		return Object.defineProperty(n, "__esModule", {
			value: !0
		}), Object.keys(e).forEach((function(t) {
			var r = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(n, t, r.get ? r : {
				enumerable: !0,
				get: function() {
					return e[t]
				}
			})
		})), n
	}
	var $e = tt,
		et = null;
	try {
		et = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13,
			2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6,
			6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
			115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
			101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1,
			6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2,
			173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
			11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
			66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
			126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
			132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173,
			32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4,
			66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
			32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135,
			167, 36, 0, 32, 4, 167, 11
		])), {}).exports
	} catch (e) {}

	function tt(e, t, n) {
		this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
	}

	function nt(e) {
		return !0 === (e && e.__isLong__)
	}
	tt.prototype.__isLong__, Object.defineProperty(tt.prototype, "__isLong__", {
		value: !0
	}), tt.isLong = nt;
	var rt = {},
		at = {};

	function ot(e, t) {
		var n, r, a;
		return t ? (a = 0 <= (e >>>= 0) && e < 256) && (r = at[e]) ? r : (n = it(e, (0 | e) < 0 ? -1 : 0, !0),
			a && (at[e] = n), n) : (a = -128 <= (e |= 0) && e < 128) && (r = rt[e]) ? r : (n = it(e, e < 0 ?
			-1 : 0, !1), a && (rt[e] = n), n)
	}

	function st(e, t) {
		if (isNaN(e)) return t ? yt : mt;
		if (t) {
			if (e < 0) return yt;
			if (e >= dt) return Nt
		} else {
			if (e <= -ht) return wt;
			if (e + 1 >= ht) return xt
		}
		return e < 0 ? st(-e, t).neg() : it(e % lt | 0, e / lt | 0, t)
	}

	function it(e, t, n) {
		return new tt(e, t, n)
	}
	tt.fromInt = ot, tt.fromNumber = st, tt.fromBits = it;
	var ut = Math.pow;

	function ct(e, t, n) {
		if (0 === e.length) throw Error("empty string");
		if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return mt;
		if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError(
			"radix");
		var r;
		if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
		if (0 === r) return ct(e.substring(1), t, n).neg();
		for (var a = st(ut(n, 8)), o = mt, s = 0; s < e.length; s += 8) {
			var i = Math.min(8, e.length - s),
				u = parseInt(e.substring(s, s + i), n);
			if (i < 8) {
				var c = st(ut(n, i));
				o = o.mul(c).add(st(u))
			} else o = (o = o.mul(a)).add(st(u))
		}
		return o.unsigned = t, o
	}

	function pt(e, t) {
		return "number" == typeof e ? st(e, t) : "string" == typeof e ? ct(e, t) : it(e.low, e.high,
			"boolean" == typeof t ? t : e.unsigned)
	}
	tt.fromString = ct, tt.fromValue = pt;
	var lt = 4294967296,
		dt = lt * lt,
		ht = dt / 2,
		ft = ot(1 << 24),
		mt = ot(0);
	tt.ZERO = mt;
	var yt = ot(0, !0);
	tt.UZERO = yt;
	var vt = ot(1);
	tt.ONE = vt;
	var gt = ot(1, !0);
	tt.UONE = gt;
	var bt = ot(-1);
	tt.NEG_ONE = bt;
	var xt = it(-1, 2147483647, !1);
	tt.MAX_VALUE = xt;
	var Nt = it(-1, -1, !0);
	tt.MAX_UNSIGNED_VALUE = Nt;
	var wt = it(0, -2147483648, !1);
	tt.MIN_VALUE = wt;
	var kt = tt.prototype;
	kt.toInt = function() {
		return this.unsigned ? this.low >>> 0 : this.low
	}, kt.toNumber = function() {
		return this.unsigned ? (this.high >>> 0) * lt + (this.low >>> 0) : this.high * lt + (this.low >>> 0)
	}, kt.toString = function(e) {
		if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
		if (this.isZero()) return "0";
		if (this.isNegative()) {
			if (this.eq(wt)) {
				var t = st(e),
					n = this.div(t),
					r = n.mul(t).sub(this);
				return n.toString(e) + r.toInt().toString(e)
			}
			return "-" + this.neg().toString(e)
		}
		for (var a = st(ut(e, 6), this.unsigned), o = this, s = "";;) {
			var i = o.div(a),
				u = (o.sub(i.mul(a)).toInt() >>> 0).toString(e);
			if ((o = i).isZero()) return u + s;
			for (; u.length < 6;) u = "0" + u;
			s = "" + u + s
		}
	}, kt.getHighBits = function() {
		return this.high
	}, kt.getHighBitsUnsigned = function() {
		return this.high >>> 0
	}, kt.getLowBits = function() {
		return this.low
	}, kt.getLowBitsUnsigned = function() {
		return this.low >>> 0
	}, kt.getNumBitsAbs = function() {
		if (this.isNegative()) return this.eq(wt) ? 64 : this.neg().getNumBitsAbs();
		for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
		return 0 != this.high ? t + 33 : t + 1
	}, kt.isZero = function() {
		return 0 === this.high && 0 === this.low
	}, kt.eqz = kt.isZero, kt.isNegative = function() {
		return !this.unsigned && this.high < 0
	}, kt.isPositive = function() {
		return this.unsigned || this.high >= 0
	}, kt.isOdd = function() {
		return 1 == (1 & this.low)
	}, kt.isEven = function() {
		return 0 == (1 & this.low)
	}, kt.equals = function(e) {
		return nt(e) || (e = pt(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>>
			31 != 1) && (this.high === e.high && this.low === e.low)
	}, kt.eq = kt.equals, kt.notEquals = function(e) {
		return !this.eq(e)
	}, kt.neq = kt.notEquals, kt.ne = kt.notEquals, kt.lessThan = function(e) {
		return this.comp(e) < 0
	}, kt.lt = kt.lessThan, kt.lessThanOrEqual = function(e) {
		return this.comp(e) <= 0
	}, kt.lte = kt.lessThanOrEqual, kt.le = kt.lessThanOrEqual, kt.greaterThan = function(e) {
		return this.comp(e) > 0
	}, kt.gt = kt.greaterThan, kt.greaterThanOrEqual = function(e) {
		return this.comp(e) >= 0
	}, kt.gte = kt.greaterThanOrEqual, kt.ge = kt.greaterThanOrEqual, kt.compare = function(e) {
		if (nt(e) || (e = pt(e)), this.eq(e)) return 0;
		var t = this.isNegative(),
			n = e.isNegative();
		return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high ===
			this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
	}, kt.comp = kt.compare, kt.negate = function() {
		return !this.unsigned && this.eq(wt) ? wt : this.not().add(vt)
	}, kt.neg = kt.negate, kt.add = function(e) {
		nt(e) || (e = pt(e));
		var t = this.high >>> 16,
			n = 65535 & this.high,
			r = this.low >>> 16,
			a = 65535 & this.low,
			o = e.high >>> 16,
			s = 65535 & e.high,
			i = e.low >>> 16,
			u = 0,
			c = 0,
			p = 0,
			l = 0;
		return p += (l += a + (65535 & e.low)) >>> 16, c += (p += r + i) >>> 16, u += (c += n + s) >>> 16,
			u += t + o, it((p &= 65535) << 16 | (l &= 65535), (u &= 65535) << 16 | (c &= 65535), this
				.unsigned)
	}, kt.subtract = function(e) {
		return nt(e) || (e = pt(e)), this.add(e.neg())
	}, kt.sub = kt.subtract, kt.multiply = function(e) {
		if (this.isZero()) return mt;
		if (nt(e) || (e = pt(e)), et) return it(et.mul(this.low, this.high, e.low, e.high), et.get_high(),
			this.unsigned);
		if (e.isZero()) return mt;
		if (this.eq(wt)) return e.isOdd() ? wt : mt;
		if (e.eq(wt)) return this.isOdd() ? wt : mt;
		if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
		if (e.isNegative()) return this.mul(e.neg()).neg();
		if (this.lt(ft) && e.lt(ft)) return st(this.toNumber() * e.toNumber(), this.unsigned);
		var t = this.high >>> 16,
			n = 65535 & this.high,
			r = this.low >>> 16,
			a = 65535 & this.low,
			o = e.high >>> 16,
			s = 65535 & e.high,
			i = e.low >>> 16,
			u = 65535 & e.low,
			c = 0,
			p = 0,
			l = 0,
			d = 0;
		return l += (d += a * u) >>> 16, p += (l += r * u) >>> 16, l &= 65535, p += (l += a * i) >>> 16,
			c += (p += n * u) >>> 16, p &= 65535, c += (p += r * i) >>> 16, p &= 65535, c += (p += a *
				s) >>> 16, c += t * u + n * i + r * s + a * o, it((l &= 65535) << 16 | (d &= 65535), (c &=
				65535) << 16 | (p &= 65535), this.unsigned)
	}, kt.mul = kt.multiply, kt.divide = function(e) {
		if (nt(e) || (e = pt(e)), e.isZero()) throw Error("division by zero");
		var t, n, r;
		if (et) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? it((
				this.unsigned ? et.div_u : et.div_s)(this.low, this.high, e.low, e.high), et
			.get_high(), this.unsigned) : this;
		if (this.isZero()) return this.unsigned ? yt : mt;
		if (this.unsigned) {
			if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return yt;
			if (e.gt(this.shru(1))) return gt;
			r = yt
		} else {
			if (this.eq(wt)) return e.eq(vt) || e.eq(bt) ? wt : e.eq(wt) ? vt : (t = this.shr(1).div(e).shl(
				1)).eq(mt) ? e.isNegative() ? vt : bt : (n = this.sub(e.mul(t)), r = t.add(n.div(
				e)));
			if (e.eq(wt)) return this.unsigned ? yt : mt;
			if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e)
				.neg();
			if (e.isNegative()) return this.div(e.neg()).neg();
			r = mt
		}
		for (n = this; n.gte(e);) {
			t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
			for (var a = Math.ceil(Math.log(t) / Math.LN2), o = a <= 48 ? 1 : ut(2, a - 48), s = st(t), i =
					s.mul(e); i.isNegative() || i.gt(n);) i = (s = st(t -= o, this.unsigned)).mul(e);
			s.isZero() && (s = vt), r = r.add(s), n = n.sub(i)
		}
		return r
	}, kt.div = kt.divide, kt.modulo = function(e) {
		return nt(e) || (e = pt(e)), et ? it((this.unsigned ? et.rem_u : et.rem_s)(this.low, this.high, e
			.low, e.high), et.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
	}, kt.mod = kt.modulo, kt.rem = kt.modulo, kt.not = function() {
		return it(~this.low, ~this.high, this.unsigned)
	}, kt.and = function(e) {
		return nt(e) || (e = pt(e)), it(this.low & e.low, this.high & e.high, this.unsigned)
	}, kt.or = function(e) {
		return nt(e) || (e = pt(e)), it(this.low | e.low, this.high | e.high, this.unsigned)
	}, kt.xor = function(e) {
		return nt(e) || (e = pt(e)), it(this.low ^ e.low, this.high ^ e.high, this.unsigned)
	}, kt.shiftLeft = function(e) {
		return nt(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? it(this.low << e, this.high << e |
			this.low >>> 32 - e, this.unsigned) : it(0, this.low << e - 32, this.unsigned)
	}, kt.shl = kt.shiftLeft, kt.shiftRight = function(e) {
		return nt(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? it(this.low >>> e | this.high <<
			32 - e, this.high >> e, this.unsigned) : it(this.high >> e - 32, this.high >= 0 ? 0 : -1,
			this.unsigned)
	}, kt.shr = kt.shiftRight, kt.shiftRightUnsigned = function(e) {
		if (nt(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
		var t = this.high;
		return e < 32 ? it(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : it(32 === e ? t : t >>>
			e - 32, 0, this.unsigned)
	}, kt.shru = kt.shiftRightUnsigned, kt.shr_u = kt.shiftRightUnsigned, kt.toSigned = function() {
		return this.unsigned ? it(this.low, this.high, !1) : this
	}, kt.toUnsigned = function() {
		return this.unsigned ? this : it(this.low, this.high, !0)
	}, kt.toBytes = function(e) {
		return e ? this.toBytesLE() : this.toBytesBE()
	}, kt.toBytesLE = function() {
		var e = this.high,
			t = this.low;
		return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255,
			e >>> 24
		]
	}, kt.toBytesBE = function() {
		var e = this.high,
			t = this.low;
		return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255,
			255 & t
		]
	}, tt.fromBytes = function(e, t, n) {
		return n ? tt.fromBytesLE(e, t) : tt.fromBytesBE(e, t)
	}, tt.fromBytesLE = function(e, t) {
		return new tt(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] <<
			24, t)
	}, tt.fromBytesBE = function(e, t) {
		return new tt(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[
			3], t)
	};
	var Tt = Ye($e),
		St = Tt || r({
			__proto__: null,
			default: Tt
		}, [$e]);

	function _t(e) {
		return St.fromString(e, !0, 16)
	}

	function Et(e, t) {
		if ("string" === t) throw new Error("Cannot convert a string[] to a TypedArray");
		if (Array.isArray(e) && (e = Dt(e)), De().getBool("DEBUG") && function(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					if (isNaN(r) || !isFinite(r)) throw Error("A tensor of type ".concat(t,
						" being uploaded contains ").concat(r, "."))
				}
			}(e, t), function(e, t) {
				return e instanceof Float32Array && "float32" === t || e instanceof Int32Array && "int32" ===
					t || e instanceof Uint8Array && "bool" === t
			}(e, t)) return e;
		if (null == t || "float32" === t || "complex64" === t) return new Float32Array(e);
		if ("int32" === t) return new Int32Array(e);
		if ("bool" === t) {
			for (var n = new Uint8Array(e.length), r = 0; r < n.length; ++r) 0 !== Math.round(e[r]) && (n[r] =
				1);
			return n
		}
		throw new Error("Unknown data type ".concat(t))
	}

	function It() {
		return De().platform.now()
	}

	function Ot(e, t) {
		return void 0 === t && (t = "utf-8"), t = t || "utf-8", De().platform.decode(e, t)
	}

	function At(e) {
		return null != De().platform.isTypedArray ? De().platform.isTypedArray(e) : function(e) {
			return e instanceof Float32Array || e instanceof Int32Array || e instanceof Uint8Array ||
				e instanceof Uint8ClampedArray
		}(e)
	}

	function Dt(e, t, n) {
		var r, a;
		if (void 0 === t && (t = []), void 0 === n && (n = !1), null == t && (t = []), "boolean" == typeof e ||
			"number" == typeof e || "string" == typeof e || _e(e) || null == e || At(e) && n) t.push(e);
		else if (Array.isArray(e) || At(e))
			for (var o = 0; o < e.length; ++o) Dt(e[o], t, n);
		else {
			var s = -1;
			try {
				for (var i = l(Object.keys(e)), u = i.next(); !u.done; u = i.next()) {
					var c = u.value;
					/^([1-9]+[0-9]*|0)$/.test(c) && (s = Math.max(s, Number(c)))
				}
			} catch (e) {
				r = {
					error: e
				}
			} finally {
				try {
					u && !u.done && (a = i.return) && a.call(i)
				} finally {
					if (r) throw r.error
				}
			}
			for (o = 0; o <= s; o++) Dt(e[o], t, n)
		}
		return t
	}
	_t("c3a5c85c97cb3127"), _t("b492b66fbe98f273"), _t("9ae16a3b2f90404f");
	var Mt = function() {
		function e(e, t) {
			this.backendTimer = e, this.logger = t, null == t && (this.logger = new Ct)
		}
		return e.prototype.profileKernel = function(e, t, n) {
			var r, a, o, s, i = function() {
					o = n()
				},
				u = It();
			if (this.backendTimer.timerAvailable()) s = this.backendTimer.time(i);
			else {
				i();
				try {
					for (var c = l(o), p = c.next(); !p.done; p = c.next()) {
						p.value.dataSync()
					}
				} catch (e) {
					r = {
						error: e
					}
				} finally {
					try {
						p && !p.done && (a = c.return) && a.call(c)
					} finally {
						if (r) throw r.error
					}
				}
				s = Promise.resolve({
					kernelMs: It() - u
				})
			}
			if (De().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
				for (var d = function(t) {
						var n = o[t];
						n.data().then((function(t) {
							! function(e, t, n) {
								if ("float32" !== t) return !1;
								for (var r = 0; r < e.length; r++) {
									var a = e[r];
									if (isNaN(a) || !isFinite(a)) return console.warn(
										"Found ".concat(a,
											" in the result of '").concat(n,
											"'")), !0
								}
							}(t, n.dtype, e)
						}))
					}, h = 0; h < o.length; h++) d(h);
			return {
				kernelName: e,
				outputs: o,
				inputs: t,
				timeMs: s.then((function(e) {
					return e.kernelMs
				})),
				extraInfo: s.then((function(e) {
					return null != e.getExtraProfileInfo ? e.getExtraProfileInfo() : ""
				}))
			}
		}, e.prototype.logKernelProfile = function(e) {
			var t = this,
				n = e.kernelName,
				r = e.outputs,
				a = e.timeMs,
				o = e.inputs,
				s = e.extraInfo;
			r.forEach((function(e) {
				Promise.all([e.data(), a, s]).then((function(r) {
					t.logger.logKernelProfile(n, e, r[0], r[1], o, r[2])
				}))
			}))
		}, e
	}();
	var Ct = function() {
		function e() {}
		return e.prototype.logKernelProfile = function(e, t, n, r, a, o) {
			var s = "number" == typeof r ? he("".concat(r, "ms"), 9) : r.error,
				i = he(e, 25),
				u = t.rank,
				c = t.size,
				p = he(t.shape.toString(), 14),
				l = "";
			for (var d in a) {
				var h = a[d];
				if (null != h) {
					var f = h.shape || t.shape,
						m = f.length;
					l += "".concat(d, ": ").concat(m, "D ").concat(m > 0 ? f : "", " ")
				}
			}
			console.log("%c".concat(i, "\t%c").concat(s, "\t%c").concat(u, "D ").concat(p, "\t%c")
				.concat(c, "\t%c").concat(l, "\t%c").concat(o), "font-weight:bold", "color:red",
				"color:blue", "color: orange", "color: green", "color: steelblue")
		}, e
	}();

	function Ft(e, t, n, r) {
		var a = xe(t),
			o = function(e, t, n, r) {
				var a = pe(t),
					o = r[r.length - 1],
					s = new Array(o).fill(0),
					i = t.length,
					u = "complex64" === n ? Vt(e) : e;
				if (i > 1)
					for (var c = 0; c < a / o; c++)
						for (var p = c * o, l = 0; l < o; l++) s[l] = Math.max(s[l], Rt(u[p + l], 0, n).length);
				return s
			}(e, t, n, a),
			s = t.length,
			i = Lt(e, t, n, a, o),
			u = ["Tensor"];
		return r && (u.push("  dtype: ".concat(n)), u.push("  rank: ".concat(s)), u.push("  shape: [".concat(t,
			"]")), u.push("  values:")), u.push(i.map((function(e) {
			return "    " + e
		})).join("\n")), u.join("\n")
	}

	function Rt(e, t, n) {
		return he(Array.isArray(e) ? "".concat(parseFloat(e[0].toFixed(7)), " + ") + "".concat(parseFloat(e[1]
			.toFixed(7)), "j") : ve(e) ? "'".concat(e, "'") : "bool" === n ? zt(e) : parseFloat(e
			.toFixed(7)).toString(), t)
	}

	function zt(e) {
		return 0 === e ? "false" : "true"
	}

	function Lt(e, t, n, r, a, o) {
		void 0 === o && (o = !0);
		var s = "complex64" === n ? 2 : 1,
			i = t[0],
			u = t.length;
		if (0 === u) return "complex64" === n ? [Rt(Vt(e)[0], 0, n)] : "bool" === n ? [zt(e[0])] : [e[0]
			.toString()
		];
		if (1 === u) {
			if (i > 20) {
				var c = 3 * s,
					p = Array.from(e.slice(0, c)),
					l = Array.from(e.slice((i - 3) * s, i * s));
				return "complex64" === n && (p = Vt(p), l = Vt(l)), ["[" + p.map((function(e, t) {
					return Rt(e, a[t], n)
				})).join(", ") + ", ..., " + l.map((function(e, t) {
					return Rt(e, a[i - 3 + t], n)
				})).join(", ") + "]"]
			}
			return ["[" + ("complex64" === n ? Vt(e) : Array.from(e)).map((function(e, t) {
				return Rt(e, a[t], n)
			})).join(", ") + "]"]
		}
		var f = t.slice(1),
			m = r.slice(1),
			y = r[0] * s,
			v = [];
		if (i > 20) {
			for (var g = 0; g < 3; g++) {
				var b = (x = g * y) + y;
				v.push.apply(v, h([], d(Lt(e.slice(x, b), f, n, m, a, !1)), !1))
			}
			v.push("...");
			for (g = i - 3; g < i; g++) {
				b = (x = g * y) + y;
				v.push.apply(v, h([], d(Lt(e.slice(x, b), f, n, m, a, g === i - 1)), !1))
			}
		} else
			for (g = 0; g < i; g++) {
				var x;
				b = (x = g * y) + y;
				v.push.apply(v, h([], d(Lt(e.slice(x, b), f, n, m, a, g === i - 1)), !1))
			}
		var N = 2 === u ? "," : "";
		v[0] = "[" + (i > 0 ? v[0] + N : "");
		for (g = 1; g < v.length - 1; g++) v[g] = " " + v[g] + N;
		var w = ",\n";
		for (g = 2; g < u; g++) w += "\n";
		return v[v.length - 1] = " " + v[v.length - 1] + "]" + (o ? "" : w), v
	}

	function Vt(e) {
		for (var t = [], n = 0; n < e.length; n += 2) t.push([e[n], e[n + 1]]);
		return t
	}
	var Pt = function() {
			function e(e, t, n) {
				var r = this;
				if (this.dtype = t, this.shape = e.slice(), this.size = pe(e), null != n) {
					var a = n.length;
					ie(a === this.size, (function() {
						return "Length of values '".concat(a, "' does not match the size ") +
							"inferred by the shape '".concat(r.size, "'.")
					}))
				}
				if ("complex64" === t) throw new Error(
					"complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag)."
				);
				this.values = n || me(t, this.size), this.strides = xe(e)
			}
			return e.prototype.set = function(e) {
				for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				0 === n.length && (n = [0]), ie(n.length === this.rank, (function() {
					return "The number of provided coordinates (".concat(n.length, ") must ") +
						"match the rank (".concat(t.rank, ")")
				}));
				var a = this.locToIndex(n);
				this.values[a] = e
			}, e.prototype.get = function() {
				for (var e, t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				0 === n.length && (n = [0]);
				var a = 0;
				try {
					for (var o = l(n), s = o.next(); !s.done; s = o.next()) {
						var i = s.value;
						if (i < 0 || i >= this.shape[a]) {
							var u = "Requested out of range element at ".concat(n, ". ") + "  Buffer shape="
								.concat(this.shape);
							throw new Error(u)
						}
						a++
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						s && !s.done && (t = o.return) && t.call(o)
					} finally {
						if (e) throw e.error
					}
				}
				for (var c = n[n.length - 1], p = 0; p < n.length - 1; ++p) c += this.strides[p] * n[p];
				return this.values[c]
			}, e.prototype.locToIndex = function(e) {
				if (0 === this.rank) return 0;
				if (1 === this.rank) return e[0];
				for (var t = e[e.length - 1], n = 0; n < e.length - 1; ++n) t += this.strides[n] * e[n];
				return t
			}, e.prototype.indexToLoc = function(e) {
				if (0 === this.rank) return [];
				if (1 === this.rank) return [e];
				for (var t = new Array(this.shape.length), n = 0; n < t.length - 1; ++n) t[n] = Math.floor(
					e / this.strides[n]), e -= t[n] * this.strides[n];
				return t[t.length - 1] = e, t
			}, Object.defineProperty(e.prototype, "rank", {
				get: function() {
					return this.shape.length
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.toTensor = function() {
				return Bt().makeTensor(this.values, this.shape, this.dtype)
			}, e
		}(),
		Bt = null,
		Kt = null;
	var jt = function() {
		function e(e, t, n, r) {
			this.kept = !1, this.isDisposedInternal = !1, this.shape = e.slice(), this.dtype = t ||
				"float32", this.size = pe(e), this.strides = xe(e), this.dataId = n, this.id = r, this
				.rankType = this.rank < 5 ? this.rank.toString() : "higher"
		}
		return Object.defineProperty(e.prototype, "rank", {
			get: function() {
				return this.shape.length
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.buffer = function() {
			return c(this, void 0, void 0, (function() {
				var e;
				return p(this, (function(t) {
					switch (t.label) {
						case 0:
							return [4, this.data()];
						case 1:
							return e = t.sent(), [2, Kt.buffer(this.shape, this
								.dtype, e)]
					}
				}))
			}))
		}, e.prototype.bufferSync = function() {
			return Kt.buffer(this.shape, this.dtype, this.dataSync())
		}, e.prototype.array = function() {
			return c(this, void 0, void 0, (function() {
				var e;
				return p(this, (function(t) {
					switch (t.label) {
						case 0:
							return [4, this.data()];
						case 1:
							return e = t.sent(), [2, we(this.shape, e,
								"complex64" === this.dtype)]
					}
				}))
			}))
		}, e.prototype.arraySync = function() {
			return we(this.shape, this.dataSync(), "complex64" === this.dtype)
		}, e.prototype.data = function() {
			return c(this, void 0, void 0, (function() {
				var e, t;
				return p(this, (function(n) {
					switch (n.label) {
						case 0:
							return this.throwIfDisposed(), e = Bt().read(this
									.dataId), "string" !== this.dtype ? [3, 2] :
								[4, e];
						case 1:
							t = n.sent();
							try {
								return [2, t.map((function(e) {
									return Ot(e)
								}))]
							} catch (e) {
								throw new Error(
									"Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes()."
								)
							}
							n.label = 2;
						case 2:
							return [2, e]
					}
				}))
			}))
		}, e.prototype.dataToGPU = function(e) {
			return this.throwIfDisposed(), Bt().readToGPU(this.dataId, e)
		}, e.prototype.dataSync = function() {
			this.throwIfDisposed();
			var e = Bt().readSync(this.dataId);
			if ("string" === this.dtype) try {
				return e.map((function(e) {
					return Ot(e)
				}))
			} catch (e) {
				throw new Error(
					"Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes()."
				)
			}
			return e
		}, e.prototype.bytes = function() {
			return c(this, void 0, void 0, (function() {
				var e;
				return p(this, (function(t) {
					switch (t.label) {
						case 0:
							return this.throwIfDisposed(), [4, Bt().read(this
								.dataId)];
						case 1:
							return e = t.sent(), "string" === this.dtype ? [2,
								e
							] : [2, new Uint8Array(e.buffer)]
					}
				}))
			}))
		}, e.prototype.dispose = function() {
			this.isDisposed || (this.kerasMask && this.kerasMask.dispose(), Bt().disposeTensor(this),
				this.isDisposedInternal = !0)
		}, Object.defineProperty(e.prototype, "isDisposed", {
			get: function() {
				return this.isDisposedInternal
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.throwIfDisposed = function() {
			if (this.isDisposed) throw new Error("Tensor is disposed.")
		}, e.prototype.print = function(e) {
			return void 0 === e && (e = !1), Kt.print(this, e)
		}, e.prototype.clone = function() {
			return this.throwIfDisposed(), Kt.clone(this)
		}, e.prototype.toString = function(e) {
			return void 0 === e && (e = !1), Ft(this.dataSync(), this.shape, this.dtype, e)
		}, e.prototype.cast = function(e) {
			return this.throwIfDisposed(), Kt.cast(this, e)
		}, e.prototype.variable = function(e, t, n) {
			return void 0 === e && (e = !0), this.throwIfDisposed(), Bt().makeVariable(this, e, t, n)
		}, e
	}();

	function qt() {
		return Re("Tensor", (function() {
			return jt
		}))
	}
	Object.defineProperty(jt, Symbol.hasInstance, {
		value: function(e) {
			return !!e && null != e.data && null != e.dataSync && null != e.throwIfDisposed
		}
	}), qt();
	var Ut, Wt, Gt, Ht, Zt, Qt = function(e) {
		function t(t, n, r, a) {
			var o = e.call(this, t.shape, t.dtype, t.dataId, a) || this;
			return o.trainable = n, o.name = r, o
		}
		return u(t, e), t.prototype.assign = function(e) {
			if (e.dtype !== this.dtype) throw new Error("dtype of the new value (".concat(e.dtype,
				") and ") + "previous value (".concat(this.dtype, ") must match"));
			if (!le(e.shape, this.shape)) throw new Error("shape of the new value (".concat(e.shape,
				") and ") + "previous value (".concat(this.shape, ") must match"));
			Bt().disposeTensor(this), this.dataId = e.dataId, Bt().incRef(this, null)
		}, t.prototype.dispose = function() {
			Bt().disposeVariable(this), this.isDisposedInternal = !0
		}, t
	}(jt);
	Object.defineProperty(Qt, Symbol.hasInstance, {
			value: function(e) {
				return e instanceof jt && null != e.assign && e.assign instanceof Function
			}
		}),
		function(e) {
			e.R0 = "R0", e.R1 = "R1", e.R2 = "R2", e.R3 = "R3", e.R4 = "R4", e.R5 = "R5", e.R6 = "R6"
		}(Ut || (Ut = {})),
		function(e) {
			e.float32 = "float32", e.int32 = "int32", e.bool = "int32", e.complex64 = "complex64"
		}(Wt || (Wt = {})),
		function(e) {
			e.float32 = "float32", e.int32 = "int32", e.bool = "bool", e.complex64 = "complex64"
		}(Gt || (Gt = {})),
		function(e) {
			e.float32 = "float32", e.int32 = "float32", e.bool = "float32", e.complex64 = "complex64"
		}(Ht || (Ht = {})),
		function(e) {
			e.float32 = "complex64", e.int32 = "complex64", e.bool = "complex64", e.complex64 = "complex64"
		}(Zt || (Zt = {}));
	var Xt = {
		float32: Ht,
		int32: Wt,
		bool: Gt,
		complex64: Zt
	};

	function Yt(e) {
		return null != e && "object" == typeof e && "texture" in e && e.texture instanceof WebGLTexture
	}

	function Jt(e) {
		return "undefined" != typeof GPUBuffer && null != e && "object" == typeof e && "buffer" in e && e
			.buffer instanceof GPUBuffer
	}

	function $t(e, t) {
		if (e.dtype === t.dtype) return [e, t];
		var n = function(e, t) {
			if ("string" === e || "string" === t) {
				if ("string" === e && "string" === t) return "string";
				throw new Error("Can not upcast ".concat(e, " with ").concat(t))
			}
			return Xt[e][t]
		}(e.dtype, t.dtype);
		return [e.cast(n), t.cast(n)]
	}

	function en(e) {
		var t = [];
		return tn(e, t, new Set), t
	}

	function tn(e, t, n) {
		if (null != e)
			if (e instanceof jt) t.push(e);
			else if (r = e, Array.isArray(r) || "object" == typeof r) {
			var r, a = e;
			for (var o in a) {
				var s = a[o];
				n.has(s) || (n.add(s), tn(s, t, n))
			}
		}
	}

	function nn(e) {
		return null != e.kernelName
	}
	var rn = function() {
			function e() {
				this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0,
					this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this
					.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0,
					this.tensorInfo = new WeakMap, this.profiling = !1, this.activeProfile = {
						newBytes: 0,
						newTensors: 0,
						peakBytes: 0,
						kernels: [],
						result: null,
						get kernelNames() {
							return Array.from(new Set(this.kernels.map((function(e) {
								return e.name
							}))))
						}
					}
			}
			return e.prototype.dispose = function() {
				for (var e in this.registeredVariables) this.registeredVariables[e].dispose()
			}, e
		}(),
		an = function() {
			function e(e) {
				this.ENV = e, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this
					.state = new rn
			}
			return e.prototype.ready = function() {
				return c(this, void 0, void 0, (function() {
					var e, t, n;
					return p(this, (function(r) {
						switch (r.label) {
							case 0:
								if (null != this.pendingBackendInit) return [2, this
									.pendingBackendInit.then((
										function() {}))
								];
								if (null != this.backendInstance) return [2];
								e = this.getSortedBackends(), t = 0, r.label = 1;
							case 1:
								return t < e.length ? (n = e[t], [4, this
									.initializeBackend(n).success
								]) : [3, 5];
							case 2:
								return r.sent() ? [4, this.setBackend(n)] : [3, 4];
							case 3:
								return r.sent(), [2];
							case 4:
								return t++, [3, 1];
							case 5:
								throw new Error(
									"Could not initialize any backends, all backend initializations failed."
								)
						}
					}))
				}))
			}, Object.defineProperty(e.prototype, "backend", {
				get: function() {
					if (null != this.pendingBackendInit) throw new Error("Backend '".concat(this
							.backendName, "' has not yet been initialized. Make ") +
						"sure to await tf.ready() or await tf.setBackend() before calling other methods"
					);
					if (null == this.backendInstance) {
						var e = this.initializeBackendsAndReturnBest(),
							t = e.name;
						if (e.asyncInit) throw new Error("The highest priority backend '".concat(t,
								"' has not yet been ") +
							"initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods"
						);
						this.setBackend(t)
					}
					return this.backendInstance
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.backendNames = function() {
				return Object.keys(this.registryFactory)
			}, e.prototype.findBackend = function(e) {
				if (!(e in this.registry)) {
					if (!(e in this.registryFactory)) return null;
					if (this.initializeBackend(e).asyncInit) return null
				}
				return this.registry[e]
			}, e.prototype.findBackendFactory = function(e) {
				return e in this.registryFactory ? this.registryFactory[e].factory : null
			}, e.prototype.registerBackend = function(e, t, n) {
				return void 0 === n && (n = 1), e in this.registryFactory ? (Ue("".concat(e,
					" backend was already registered. ") + "Reusing existing backend factory."), !1) : (
					this.registryFactory[e] = {
						factory: t,
						priority: n
					}, !0)
			}, e.prototype.setBackend = function(e) {
				return c(this, void 0, void 0, (function() {
					var t, n, r;
					return p(this, (function(a) {
						switch (a.label) {
							case 0:
								if (null == this.registryFactory[e])
									throw new Error("Backend name '".concat(e,
										"' not found in registry"));
								return this.backendName = e, null != this.registry[
									e] ? [3, 4] : (this.backendInstance = null,
									t = this.initializeBackend(e), n = t
									.success, t.asyncInit ? [4, n] : [3, 2]);
							case 1:
								return r = a.sent(), [3, 3];
							case 2:
								r = n, a.label = 3;
							case 3:
								if (!r) return [2, !1];
								a.label = 4;
							case 4:
								return this.backendInstance = this.registry[e], this
									.setupRegisteredKernels(), this.profiler =
									new Mt(this.backendInstance), [2, !0]
						}
					}))
				}))
			}, e.prototype.setupRegisteredKernels = function() {
				var e = this;
				Qe(this.backendName).forEach((function(t) {
					null != t.setupFunc && t.setupFunc(e.backendInstance)
				}))
			}, e.prototype.disposeRegisteredKernels = function(e) {
				var t = this;
				Qe(e).forEach((function(n) {
					null != n.disposeFunc && n.disposeFunc(t.registry[e])
				}))
			}, e.prototype.initializeBackend = function(e) {
				var t = this,
					n = this.registryFactory[e];
				if (null == n) throw new Error("Cannot initialize backend ".concat(e,
					", no registration found."));
				try {
					var r = n.factory();
					if (!r || r instanceof oe || "function" != typeof r.then) return this.registry[e] = r, {
						success: !0,
						asyncInit: !1
					};
					var a = ++this.pendingBackendInitId,
						o = r.then((function(n) {
							return !(a < t.pendingBackendInitId) && (t.registry[e] = n, t
								.pendingBackendInit = null, !0)
						})).catch((function(n) {
							return a < t.pendingBackendInitId || (t.pendingBackendInit = null, Ue(
								"Initialization of backend ".concat(e, " failed")), Ue(n
								.stack || n.message)), !1
						}));
					return this.pendingBackendInit = o, {
						success: o,
						asyncInit: !0
					}
				} catch (t) {
					return Ue("Initialization of backend ".concat(e, " failed")), Ue(t.stack || t
						.message), {
						success: !1,
						asyncInit: !1
					}
				}
			}, e.prototype.removeBackend = function(e) {
				if (!(e in this.registryFactory)) throw new Error("".concat(e,
					" backend not found in registry"));
				this.backendName === e && null != this.pendingBackendInit && this.pendingBackendInitId++,
					e in this.registry && (this.disposeRegisteredKernels(e), this.registry[e].dispose(),
						delete this.registry[e]), delete this.registryFactory[e], this.backendName === e &&
					(this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null)
			}, e.prototype.getSortedBackends = function() {
				var e = this;
				if (0 === Object.keys(this.registryFactory).length) throw new Error(
					"No backend found in registry.");
				return Object.keys(this.registryFactory).sort((function(t, n) {
					return e.registryFactory[n].priority - e.registryFactory[t].priority
				}))
			}, e.prototype.initializeBackendsAndReturnBest = function() {
				for (var e = this.getSortedBackends(), t = 0; t < e.length; t++) {
					var n = e[t],
						r = this.initializeBackend(n),
						a = r.success,
						o = r.asyncInit;
					if (o || a) return {
						name: n,
						asyncInit: o
					}
				}
				throw new Error("Could not initialize any backends, all backend initializations failed.")
			}, e.prototype.moveData = function(e, t) {
				var n = this.state.tensorInfo.get(t),
					r = n.backend,
					a = this.readSync(t),
					o = r.refCount(t);
				r.disposeData(t, !0), n.backend = e, e.move(t, a, n.shape, n.dtype, o), this
					.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack
						.length - 1]++
			}, e.prototype.tidy = function(e, t) {
				var n, r = this,
					a = null;
				if (null == t) {
					if ("function" != typeof e) throw new Error("Please provide a function to tidy()");
					t = e
				} else {
					if ("string" != typeof e && !(e instanceof String)) throw new Error(
						"When calling with two arguments, the first argument to tidy() must be a string"
					);
					if ("function" != typeof t) throw new Error(
						"When calling with two arguments, the 2nd argument to tidy() must be a function"
					);
					a = e
				}
				return this.scopedRun((function() {
					return r.startScope(a)
				}), (function() {
					return r.endScope(n)
				}), (function() {
					return (n = t()) instanceof Promise && console.error(
						"Cannot return a Promise inside of tidy."), n
				}))
			}, e.prototype.scopedRun = function(e, t, n) {
				e();
				try {
					var r = n();
					return t(), r
				} catch (e) {
					throw t(), e
				}
			}, e.prototype.nextTensorId = function() {
				return e.nextTensorId++
			}, e.prototype.nextVariableId = function() {
				return e.nextVariableId++
			}, e.prototype.clone = function(e) {
				var t = on.runKernel(Ve, {
						x: e
					}),
					n = {
						x: e
					};
				return this.addTapeNode(this.state.activeScope.name, n, [t], (function(e) {
					return {
						x: function() {
							var t = {
									x: e
								},
								n = {
									dtype: "float32"
								};
							return on.runKernel(ze, t, n)
						}
					}
				}), [], {}), t
			}, e.prototype.runKernel = function(e, t, n) {
				if (null == this.backendName && this.backend, !(null != He(e, this.backendName)))
					throw new Error("Kernel '".concat(e, "' not registered for backend '").concat(this
						.backendName, "'"));
				return this.runKernelFunc({
					kernelName: e,
					inputs: t,
					attrs: n
				})
			}, e.prototype.shouldCheckForMemLeaks = function() {
				return this.ENV.getBool("IS_TEST")
			}, e.prototype.checkKernelForMemLeak = function(e, t, n) {
				var r = this.backend.numDataIds(),
					a = 0;
				n.forEach((function(e) {
					a += "complex64" === e.dtype ? 3 : 1
				}));
				var o = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1],
					s = r - t - a - o;
				if (s > 0) throw new Error("Backend '".concat(this.backendName,
					"' has an internal memory leak ") + "(".concat(s,
					" data ids) after running '").concat(e, "'"))
			}, e.prototype.runKernelFunc = function(e) {
				var t, n, r, a = this,
					o = [],
					s = this.isTapeOn(),
					i = this.state.numBytes,
					u = this.state.numTensors;
				this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0), null == this
					.backendName && this.backend;
				var c = nn(e) ? e.kernelName : null != this.state.activeScope ? this.state.activeScope
					.name : "";
				if (nn(e)) {
					var p = e.kernelName,
						l = e.inputs,
						d = e.attrs;
					null == this.backendName && this.backend;
					var h = He(p, this.backendName);
					ie(null != h, (function() {
						return "Cannot find registered kernel '".concat(p, "' for backend '")
							.concat(a.backendName, "'")
					})), n = function() {
						var e = a.backend.numDataIds();
						r = h.kernelFunc({
							inputs: l,
							attrs: d,
							backend: a.backend
						});
						var t = Array.isArray(r) ? r : [r];
						a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(p, e, t);
						var n = t.map((function(e) {
							return null != e.rank ? e : a.makeTensorFromTensorInfo(e)
						}));
						if (s) {
							var i = a.getTensorsForGradient(p, l, n);
							o = a.saveTensorsForBackwardMode(i)
						}
						return n
					}
				} else {
					var f = e.forwardFunc,
						m = function(e) {
							s && (o = e.map((function(e) {
								return a.keep(a.clone(e))
							})))
						};
					n = function() {
						var e = a.backend.numDataIds();
						r = a.tidy((function() {
							return f(a.backend, m)
						}));
						var t = Array.isArray(r) ? r : [r];
						return a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(c, e, t), t
					}
				}
				var y, v = e.inputs,
					g = e.attrs,
					b = nn(e) ? null : e.backwardsFunc;
				return this.scopedRun((function() {
						return a.state.kernelDepth++
					}), (function() {
						return a.state.kernelDepth--
					}), (function() {
						a.ENV.getBool("DEBUG") || a.state.profiling ? (y = a.profiler.profileKernel(
								c, v, (function() {
									return n()
								})), a.ENV.getBool("DEBUG") && a.profiler.logKernelProfile(y),
							t = y.outputs) : t = n()
					})), s && this.addTapeNode(c, v, t, b, o, g), this.state.profiling && this.state
					.activeProfile.kernels.push({
						name: c,
						bytesAdded: this.state.numBytes - i,
						totalBytesSnapshot: this.state.numBytes,
						tensorsAdded: this.state.numTensors - u,
						totalTensorsSnapshot: this.state.numTensors,
						inputShapes: Object.keys(v).map((function(e) {
							return null != v[e] ? v[e].shape : null
						})),
						outputShapes: t.map((function(e) {
							return e.shape
						})),
						kernelTimeMs: y.timeMs,
						extraInfo: y.extraInfo
					}), Array.isArray(r) ? t : t[0]
			}, e.prototype.saveTensorsForBackwardMode = function(e) {
				var t = this,
					n = e.map((function(e) {
						return t.keep(t.clone(e))
					}));
				return n
			}, e.prototype.getTensorsForGradient = function(e, t, n) {
				var r = Ze(e);
				if (null != r) {
					var a = r.inputsToSave || [],
						o = r.outputsToSave || [],
						s = void 0;
					r.saveAllInputs ? (ie(Array.isArray(t), (function() {
						return "saveAllInputs is true, expected inputs to be an array."
					})), s = Object.keys(t).map((function(e) {
						return t[e]
					}))) : s = a.map((function(e) {
						return t[e]
					}));
					var i = n.filter((function(e, t) {
						return o[t]
					}));
					return s.concat(i)
				}
				return []
			}, e.prototype.makeTensor = function(e, t, n, r) {
				if (null == e) throw new Error("Values passed to engine.makeTensor() are null");
				n = n || "float32", r = r || this.backend;
				var a = e;
				"string" === n && ve(e[0]) && (a = e.map((function(e) {
					return t = e, void 0 === n && (n = "utf-8"), n = n || "utf-8", De()
						.platform.encode(t, n);
					var t, n
				})));
				var o = r.write(a, t, n),
					s = new jt(t, n, o, this.nextTensorId());
				if (this.trackTensor(s, r), "string" === n) {
					var i = this.state.tensorInfo.get(o),
						u = function(e) {
							if (null == e) return 0;
							var t = 0;
							return e.forEach((function(e) {
								return t += e.length
							})), t
						}(a);
					this.state.numBytes += u - i.bytes, i.bytes = u
				}
				return s
			}, e.prototype.makeTensorFromDataId = function(e, t, n, r) {
				var a = {
					dataId: e,
					shape: t,
					dtype: n = n || "float32"
				};
				return this.makeTensorFromTensorInfo(a, r)
			}, e.prototype.makeTensorFromTensorInfo = function(e, t) {
				var n = e.dataId,
					r = e.shape,
					a = e.dtype,
					o = new jt(r, a, n, this.nextTensorId());
				return this.trackTensor(o, t), o
			}, e.prototype.makeVariable = function(e, t, n, r) {
				void 0 === t && (t = !0), n = n || this.nextVariableId().toString(), null != r && r !== e
					.dtype && (e = e.cast(r));
				var a = new Qt(e, t, n, this.nextTensorId());
				if (null != this.state.registeredVariables[a.name]) throw new Error("Variable with name "
					.concat(a.name, " was already registered"));
				return this.state.registeredVariables[a.name] = a, this.incRef(a, this.backend), a
			}, e.prototype.trackTensor = function(e, t) {
				this.state.numTensors++, "string" === e.dtype && this.state.numStringTensors++;
				var n = 0;
				"complex64" !== e.dtype && "string" !== e.dtype && (n = e.size * ye(e.dtype)), this.state
					.numBytes += n, this.state.tensorInfo.has(e.dataId) || (this.state.numDataBuffers++,
						this.state.tensorInfo.set(e.dataId, {
							backend: t || this.backend,
							dtype: e.dtype,
							shape: e.shape,
							bytes: n
						})), e instanceof Qt || this.track(e)
			}, e.prototype.incRef = function(e, t) {
				this.trackTensor(e, t), this.backend.incRef(e.dataId)
			}, e.prototype.removeDataId = function(e, t) {
				this.state.tensorInfo.has(e) && this.state.tensorInfo.get(e).backend === t && (this.state
					.tensorInfo.delete(e), this.state.numDataBuffers--)
			}, e.prototype.disposeTensor = function(e) {
				if (this.state.tensorInfo.has(e.dataId)) {
					var t = this.state.tensorInfo.get(e.dataId);
					if (this.state.numTensors--, "string" === e.dtype && (this.state.numStringTensors--,
							this.state.numBytes -= t.bytes), "complex64" !== e.dtype && "string" !== e
						.dtype) {
						var n = e.size * ye(e.dtype);
						this.state.numBytes -= n
					}
					t.backend.disposeData(e.dataId) && this.removeDataId(e.dataId, t.backend)
				}
			}, e.prototype.disposeVariables = function() {
				for (var e in this.state.registeredVariables) {
					var t = this.state.registeredVariables[e];
					this.disposeVariable(t)
				}
			}, e.prototype.disposeVariable = function(e) {
				this.disposeTensor(e), null != this.state.registeredVariables[e.name] && delete this.state
					.registeredVariables[e.name]
			}, e.prototype.memory = function() {
				var e = this.backend.memory();
				return e.numTensors = this.state.numTensors, e.numDataBuffers = this.state.numDataBuffers, e
					.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (e.unreliable = !0,
						null == e.reasons && (e.reasons = []), e.reasons.push(
							"Memory usage by string tensors is approximate (2 bytes per character)")), e
			}, e.prototype.profile = function(e) {
				return c(this, void 0, void 0, (function() {
					var t, n, r, a, o, s, i, u, c, f, m;
					return p(this, (function(p) {
						switch (p.label) {
							case 0:
								return this.state.profiling = !0, t = this.state
									.numBytes, n = this.state.numTensors, this.state
									.activeProfile.kernels = [], r = this.state
									.activeProfile, [4, e()];
							case 1:
								r.result = p.sent(), this.state.profiling = !1, this
									.state.activeProfile.peakBytes = Math.max.apply(
										Math, h([], d(this.state.activeProfile
											.kernels.map((function(e) {
												return e
													.totalBytesSnapshot
											}))), !1)), this.state.activeProfile
									.newBytes = this.state.numBytes - t, this.state
									.activeProfile.newTensors = this.state
									.numTensors - n, p.label = 2;
							case 2:
								p.trys.push([2, 8, 9, 10]), a = l(this.state
										.activeProfile.kernels), o = a.next(), p
									.label = 3;
							case 3:
								return o.done ? [3, 7] : (s = o.value, i = s, [4, s
									.kernelTimeMs
								]);
							case 4:
								return i.kernelTimeMs = p.sent(), u = s, [4, s
									.extraInfo
								];
							case 5:
								u.extraInfo = p.sent(), p.label = 6;
							case 6:
								return o = a.next(), [3, 3];
							case 7:
								return [3, 10];
							case 8:
								return c = p.sent(), f = {
									error: c
								}, [3, 10];
							case 9:
								try {
									o && !o.done && (m = a.return) && m.call(a)
								} finally {
									if (f) throw f.error
								}
								return [7];
							case 10:
								return [2, this.state.activeProfile]
						}
					}))
				}))
			}, e.prototype.isTapeOn = function() {
				return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth
			}, e.prototype.addTapeNode = function(e, t, n, r, a, o) {
				var s = this,
					i = {
						id: this.state.nextTapeNodeId++,
						kernelName: e,
						inputs: t,
						outputs: n,
						saved: a
					},
					u = Ze(e);
				null != u && (r = u.gradFunc), null != r && (i.gradient = function(e) {
					return e = e.map((function(e, t) {
						if (null == e) {
							var r = n[t],
								a = Te(r.size, r.dtype);
							return s.makeTensor(a, r.shape, r.dtype)
						}
						return e
					})), r(e.length > 1 ? e : e[0], a, o)
				}), this.state.activeTape.push(i)
			}, e.prototype.keep = function(e) {
				return e.kept = !0, e
			}, e.prototype.startTape = function() {
				0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++
			}, e.prototype.endTape = function() {
				this.state.gradientDepth--
			}, e.prototype.startScope = function(e) {
				var t = {
					track: [],
					name: "unnamed scope",
					id: this.state.nextScopeId++
				};
				e && (t.name = e), this.state.scopeStack.push(t), this.state.activeScope = t
			}, e.prototype.endScope = function(e) {
				for (var t = this, n = en(e), r = new Set(n.map((function(e) {
						return e.id
					}))), a = 0; a < this.state.activeScope.track.length; a++) {
					var o = this.state.activeScope.track[a];
					o.kept || r.has(o.id) || o.dispose()
				}
				var s = this.state.scopeStack.pop();
				this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[
					this.state.scopeStack.length - 1], n.forEach((function(e) {
					e.kept || e.scopeId !== s.id || t.track(e)
				}))
			}, e.prototype.gradients = function(e, t, n, r) {
				var a = this;
				if (void 0 === r && (r = !1), ie(t.length > 0, (function() {
						return "gradients() received an empty list of xs."
					})), null != n && "float32" !== n.dtype) throw new Error(
					"dy must have 'float32' dtype, but has '".concat(n.dtype, "'"));
				var o = this.scopedRun((function() {
					return a.startTape()
				}), (function() {
					return a.endTape()
				}), (function() {
					return a.tidy("forward", e)
				}));
				ie(o instanceof jt, (function() {
					return "The result y returned by f() must be a tensor."
				}));
				var s = function(e, t, n) {
					for (var r = {}, a = {}, o = 0; o < t.length; o++) r[t[o].id] = !0;
					for (o = 0; o < e.length; o++) {
						var s = (f = e[o]).inputs;
						for (var i in s) {
							for (var u = s[i], c = !1, p = 0; p < t.length; p++)
								if (r[u.id]) {
									f.outputs.forEach((function(e) {
										return r[e.id] = !0
									})), c = !0, a[f.id] = !0;
									break
								} if (c) break
						}
					}
					var l = {};
					l[n.id] = !0;
					var d = {};
					for (o = e.length - 1; o >= 0; o--)
						for (s = (f = e[o]).inputs, p = 0; p < f.outputs.length; p++)
							if (l[f.outputs[p].id]) {
								for (var i in s) l[s[i].id] = !0, d[f.id] = !0;
								break
							} var h = [];
					for (o = 0; o < e.length; o++) {
						var f;
						if (a[(f = e[o]).id] && d[f.id]) {
							var m = {};
							for (var i in f.inputs) {
								var y = f.inputs[i];
								r[y.id] && (m[i] = y)
							}
							var v = Object.assign({}, f);
							v.inputs = m, v.outputs = f.outputs, h.push(v)
						}
					}
					return h
				}(this.state.activeTape, t, o);
				if (!r && 0 === s.length && t.length > 0) throw new Error(
					"Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y."
				);
				return this.tidy("backward", (function() {
					var e, r, i = {};
					i[o.id] = null == n ? (e = o.shape, r = ke(pe(e), "float32"), on.makeTensor(
							r, e, "float32")) : n,
						function(e, t, n, r) {
							for (var a = function(a) {
									var o = t[a],
										s = [];
									if (o.outputs.forEach((function(t) {
											var n = e[t.id];
											null != n ? s.push(n) : s.push(null)
										})), null == o.gradient) throw new Error(
										"Cannot compute gradient: gradient function not found " +
										"for ".concat(o.kernelName, "."));
									var i = o.gradient(s),
										u = function(t) {
											if (!(t in i)) throw new Error(
												"Cannot backprop through input "
												.concat(t, ". ") +
												"Available gradients found: "
												.concat(Object.keys(i), "."));
											var a = n((function() {
												return i[t]()
											}));
											if ("float32" !== a.dtype) throw new Error(
												"Error in gradient for op ".concat(o
													.kernelName,
													". The gradient of input ") + ""
												.concat(t,
													" must have 'float32' dtype, but has '"
												).concat(a.dtype, "'"));
											var s = o.inputs[t];
											if (!le(a.shape, s.shape)) throw new Error(
												"Error in gradient for op ".concat(o
													.kernelName,
													". The gradient of input ") +
												"'".concat(t, "' has shape '")
												.concat(a.shape,
													"', which does not match ") +
												"the shape of the input '".concat(s
													.shape, "'"));
											if (null == e[s.id]) e[s.id] = a;
											else {
												var u = e[s.id];
												e[s.id] = r(u, a), u.dispose()
											}
										};
									for (var c in o.inputs) u(c)
								}, o = t.length - 1; o >= 0; o--) a(o)
						}(i, s, (function(e) {
							return a.tidy(e)
						}), sn);
					var u = t.map((function(e) {
						return i[e.id]
					}));
					return 0 === a.state.gradientDepth && (a.state.activeTape.forEach((function(
						e) {
						var t, n;
						try {
							for (var r = l(e.saved), a = r.next(); !a.done; a =
								r.next()) {
								a.value.dispose()
							}
						} catch (e) {
							t = {
								error: e
							}
						} finally {
							try {
								a && !a.done && (n = r.return) && n.call(r)
							} finally {
								if (t) throw t.error
							}
						}
					})), a.state.activeTape = null), {
						value: o,
						grads: u
					}
				}))
			}, e.prototype.customGrad = function(e) {
				var t = this;
				return ie(be(e), (function() {
						return "The f passed in customGrad(f) must be a function."
					})),
					function() {
						for (var n, r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
						ie(r.every((function(e) {
							return e instanceof jt
						})), (function() {
							return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
						}));
						var o = {};
						r.forEach((function(e, t) {
							o[t] = e
						}));
						var s = function(t, a) {
								return ie((n = e.apply(void 0, h([], d(h(h([], d(r), !1), [a], !1)), !1)))
									.value instanceof jt, (function() {
										return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
									})), ie(be(n.gradFunc), (function() {
									return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
								})), n.value
							},
							i = function(e, t) {
								var a = n.gradFunc(e, t),
									o = Array.isArray(a) ? a : [a];
								ie(o.length === r.length, (function() {
									return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
								})), ie(o.every((function(e) {
									return e instanceof jt
								})), (function() {
									return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
								}));
								var s = {};
								return o.forEach((function(e, t) {
									s[t] = function() {
										return e
									}
								})), s
							};
						return t.runKernelFunc({
							forwardFunc: s,
							backwardsFunc: i,
							inputs: o
						})
					}
			}, e.prototype.readSync = function(e) {
				return this.state.tensorInfo.get(e).backend.readSync(e)
			}, e.prototype.read = function(e) {
				return this.state.tensorInfo.get(e).backend.read(e)
			}, e.prototype.readToGPU = function(e, t) {
				return this.state.tensorInfo.get(e).backend.readToGPU(e, t)
			}, e.prototype.time = function(e) {
				return c(this, void 0, void 0, (function() {
					var t, n;
					return p(this, (function(r) {
						switch (r.label) {
							case 0:
								return t = It(), [4, this.backend.time(e)];
							case 1:
								return (n = r.sent()).wallMs = It() - t, [2, n]
						}
					}))
				}))
			}, e.prototype.track = function(e) {
				return null != this.state.activeScope && (e.scopeId = this.state.activeScope.id, this.state
					.activeScope.track.push(e)), e
			}, Object.defineProperty(e.prototype, "registeredVariables", {
				get: function() {
					return this.state.registeredVariables
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.reset = function() {
				for (var e in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this
						.state = new rn, this.registry) this.disposeRegisteredKernels(e), this.registry[e]
					.dispose(), delete this.registry[e];
				this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null
			}, e
		}();
	an.nextTensorId = 0, an.nextVariableId = 0;
	var on = function() {
		var e = Fe();
		if (null == e._tfengine) {
			var t = new Ie(e);
			e._tfengine = new an(t)
		}
		return function(e) {
			Ce = e
		}(e._tfengine.ENV), Bt = function() {
			return e._tfengine
		}, e._tfengine
	}();

	function sn(e, t) {
		var n = {
			a: e,
			b: t
		};
		return on.runKernel("Add", n)
	}

	function un(e, t) {
		var n = e;
		if (At(e)) return "string" === t ? [] : [e.length];
		if (Yt(e)) {
			var r = e.channels || "RGBA";
			return [e.height, e.width * r.length]
		}
		if (Jt(e)) return [e.buffer.size / (null == t ? 4 : ye(t))];
		if (!Array.isArray(e)) return [];
		for (var a = []; Array.isArray(n) || At(n) && "string" !== t;) a.push(n.length), n = n[0];
		return Array.isArray(e) && De().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && cn(e, a, []), a
	}

	function cn(e, t, n) {
		if (n = n || [], Array.isArray(e) || At(e)) {
			ie(t.length > 0, (function() {
				return "Element arr[".concat(n.join("]["), "] should be a primitive, ") +
					"but is an array of ".concat(e.length, " elements")
			})), ie(e.length === t[0], (function() {
				return "Element arr[".concat(n.join("]["), "] should have ").concat(t[0], " ") +
					"elements, but has ".concat(e.length, " elements")
			}));
			for (var r = t.slice(1), a = 0; a < e.length; ++a) cn(e[a], r, n.concat(a))
		} else ie(0 === t.length, (function() {
			return "Element arr[".concat(n.join("]["), "] is a primitive, ") +
				"but should be an array/TypedArray of ".concat(t[0], " elements")
		}))
	}

	function pn(e, t, n, r) {
		if ("string_or_numeric" !== e) {
			if (null == e) throw new Error("Expected dtype cannot be null.");
			if ("numeric" !== e && e !== t || "numeric" === e && "string" === t) throw new Error("Argument '"
				.concat(n, "' passed to '").concat(r, "' must ") + "be ".concat(e, " tensor, but got ")
				.concat(t, " tensor"))
		}
	}

	function ln(e, t, n, r) {
		if (void 0 === r && (r = "numeric"), e instanceof qt()) return pn(r, e.dtype, t, n), e;
		var a = ge(e);
		if ("string" !== a && ["bool", "int32", "float32"].indexOf(r) >= 0 && (a = r), pn(r, a, t, n), null ==
			e || !At(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" !=
			typeof e) {
			var o = null == e ? "null" : e.constructor.name;
			throw new Error("Argument '".concat(t, "' passed to '").concat(n, "' must be a ") +
				"Tensor or TensorLike, but got '".concat(o, "'"))
		}
		var s = un(e, a);
		At(e) || Array.isArray(e) || (e = [e]);
		var i = "string" !== a ? Et(e, a) : Dt(e, [], !0);
		return on.makeTensor(i, s, a)
	}

	function dn(e, t, n, r) {
		if (void 0 === r && (r = "numeric"), !Array.isArray(e)) throw new Error("Argument ".concat(t,
			" passed to ").concat(n, " must be a ") + "`Tensor[]` or `TensorLike[]`");
		return e.map((function(e, a) {
			return ln(e, "".concat(t, "[").concat(a, "]"), n, r)
		}))
	}
	var hn = "__op";

	function fn(e) {
		var t = Object.keys(e);
		if (1 !== t.length) throw new Error(
			"Please provide an object with a single key (operation name) mapping to a function. Got an object with " +
			"".concat(t.length, " keys."));
		var n = t[0],
			r = e[n];
		n.endsWith("_") && (n = n.substring(0, n.length - 1)), n += hn;
		var a = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			on.startScope(n);
			try {
				var a = r.apply(void 0, h([], d(e), !1));
				return _e(a) && console.error("Cannot return a Promise inside of tidy."), on.endScope(a), a
			} catch (e) {
				throw on.endScope(null), e
			}
		};
		return Object.defineProperty(a, "name", {
			value: n,
			configurable: !0
		}), a
	}
	var mn = fn({
		abs_: function(e) {
			var t = ln(e, "x", "abs");
			if ("complex64" === t.dtype) {
				var n = {
					x: t
				};
				return on.runKernel("ComplexAbs", n)
			}
			return n = {
				x: t
			}, on.runKernel("Abs", n)
		}
	});
	var yn = fn({
		acos_: function(e) {
			var t = {
				x: ln(e, "x", "acos")
			};
			return on.runKernel("Acos", t)
		}
	});
	var vn = fn({
		acosh_: function(e) {
			var t = {
				x: ln(e, "x", "acosh")
			};
			return on.runKernel("Acosh", t)
		}
	});
	var gn = fn({
		add_: function(e, t) {
			var n, r = ln(e, "a", "add"),
				a = ln(t, "b", "add"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Add", o)
		}
	});
	var bn = fn({
		addN_: function(e) {
			ie(Array.isArray(e), (function() {
				return "The argument passed to tf.addN() must be a list of tensors"
			})), ie(e.length >= 1, (function() {
				return "Must pass at least one tensor to tf.addN(), but got " + ""
					.concat(e.length)
			}));
			var t = e.map((function(e, t) {
					return ln(e, "tensors".concat(t), "addN")
				})),
				n = t[0];
			t.forEach((function(e) {
				if (e.dtype !== n.dtype) throw new Error(
					"All tensors passed to tf.addN() must have the same dtype")
			})), t.forEach((function(e) {
				if (!le(e.shape, n.shape)) throw new Error(
					"All tensors passed to tf.addN() must have the same shape")
			}));
			var r = t;
			return on.runKernel("AddN", r)
		}
	});
	var xn = fn({
		all_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = {
					x: ln(e, "x", "all", "bool")
				},
				a = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("All", r, a)
		}
	});
	var Nn = fn({
		any_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = {
					x: ln(e, "x", "any", "bool")
				},
				a = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("Any", r, a)
		}
	});
	var wn = fn({
		argMax_: function(e, t) {
			void 0 === t && (t = 0);
			var n = {
					x: ln(e, "x", "argMax")
				},
				r = {
					axis: t
				};
			return on.runKernel("ArgMax", n, r)
		}
	});
	var kn = fn({
		argMin_: function(e, t) {
			void 0 === t && (t = 0);
			var n = {
					x: ln(e, "x", "argMin")
				},
				r = {
					axis: t
				};
			return on.runKernel("ArgMin", n, r)
		}
	});
	var Tn = fn({
		asin_: function(e) {
			var t = {
				x: ln(e, "x", "asin")
			};
			return on.runKernel("Asin", t)
		}
	});
	var Sn = fn({
		asinh_: function(e) {
			var t = {
				x: ln(e, "x", "asinh")
			};
			return on.runKernel("Asinh", t)
		}
	});
	var _n = fn({
		atan_: function(e) {
			var t = {
				x: ln(e, "x", "atan")
			};
			return on.runKernel("Atan", t)
		}
	});
	var En = fn({
		atan2_: function(e, t) {
			var n, r = ln(e, "a", "atan2"),
				a = ln(t, "b", "atan2"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Atan2", o)
		}
	});
	var In = fn({
		atanh_: function(e) {
			var t = {
				x: ln(e, "x", "atanh")
			};
			return on.runKernel("Atanh", t)
		}
	});
	var On = fn({
		cast_: function(e, t) {
			var n = ln(e, "x", "cast");
			if (! function(e) {
					return "bool" === e || "complex64" === e || "float32" === e || "int32" === e ||
						"string" === e
				}(t)) throw new Error("Failed to cast to unknown dtype ".concat(t));
			if ("string" === t && "string" !== n.dtype || "string" !== t && "string" === n.dtype)
				throw new Error("Only strings can be casted to strings");
			var r = {
					x: n
				},
				a = {
					dtype: t
				};
			return on.runKernel(ze, r, a)
		}
	});

	function An(e, t, n, r, a, o, s, i) {
		var u, c;
		void 0 === s && (s = !1), void 0 === i && (i = "channelsLast");
		var p = d([-1, -1, -1, -1], 4),
			l = p[0],
			h = p[1],
			f = p[2],
			m = p[3];
		if ("channelsLast" === i) l = (u = d(e, 4))[0], h = u[1], f = u[2], m = u[3];
		else {
			if ("channelsFirst" !== i) throw new Error("Unknown dataFormat ".concat(i));
			l = (c = d(e, 4))[0], m = c[1], h = c[2], f = c[3]
		}
		var y, v = d(t, 4),
			g = v[0],
			b = v[1],
			x = v[3],
			N = d(Dn(n), 2),
			w = N[0],
			k = N[1],
			T = d(Dn(r), 2),
			S = T[0],
			_ = T[1],
			E = Mn(g, S),
			I = Mn(b, _),
			O = function(e, t, n, r, a, o, s, i, u) {
				var c, p, l;
				if ("number" == typeof e) {
					c = {
						top: e,
						bottom: e,
						left: e,
						right: e,
						type: 0 === e ? "VALID" : "NUMBER"
					};
					var d = function(e, t, n, r, a) {
						null == r && (r = function(e, t, n, r) {
							void 0 === r && (r = 1);
							var a = Mn(t, r);
							return Math.floor((e[0] * (n - 1) - n + a) / 2)
						}(e, t, n));
						var o = e[0],
							s = e[1],
							i = Cn((o - t + 2 * r) / n + 1, a),
							u = Cn((s - t + 2 * r) / n + 1, a);
						return [i, u]
					}([t, n], o, r, e, i);
					p = d[0], l = d[1]
				} else if ("same" === e) {
					p = Math.ceil(t / r), l = Math.ceil(n / a);
					var h = Math.max(0, (p - 1) * r + o - t),
						f = Math.max(0, (l - 1) * a + s - n);
					c = {
						top: m = Math.floor(h / 2),
						bottom: y = h - m,
						left: v = Math.floor(f / 2),
						right: g = f - v,
						type: "SAME"
					}
				} else if ("valid" === e) c = {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					type: "VALID"
				}, p = Math.ceil((t - o + 1) / r), l = Math.ceil((n - s + 1) / a);
				else {
					if ("object" != typeof e) throw Error("Unknown padding parameter: ".concat(e));
					var m, y, v, g;
					c = {
						top: m = "channelsLast" === u ? e[1][0] : e[2][0],
						bottom: y = "channelsLast" === u ? e[1][1] : e[2][1],
						left: v = "channelsLast" === u ? e[2][0] : e[3][0],
						right: g = "channelsLast" === u ? e[2][1] : e[3][1],
						type: 0 === m && 0 === y && 0 === v && 0 === g ? "VALID" : "EXPLICIT"
					}, p = Cn((t - o + m + y) / r + 1, i), l = Cn((n - s + v + g) / a + 1, i)
				}
				return {
					padInfo: c,
					outHeight: p,
					outWidth: l
				}
			}(a, h, f, w, k, E, I, o, i),
			A = O.padInfo,
			D = O.outHeight,
			M = O.outWidth,
			C = s ? x * m : x;
		return "channelsFirst" === i ? y = [l, C, D, M] : "channelsLast" === i && (y = [l, D, M, C]), {
			batchSize: l,
			dataFormat: i,
			inHeight: h,
			inWidth: f,
			inChannels: m,
			outHeight: D,
			outWidth: M,
			outChannels: C,
			padInfo: A,
			strideHeight: w,
			strideWidth: k,
			filterHeight: g,
			filterWidth: b,
			effectiveFilterHeight: E,
			effectiveFilterWidth: I,
			dilationHeight: S,
			dilationWidth: _,
			inShape: e,
			outShape: y,
			filterShape: t
		}
	}

	function Dn(e) {
		return "number" == typeof e ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e
	}

	function Mn(e, t) {
		return t <= 1 ? e : e + (e - 1) * (t - 1)
	}

	function Cn(e, t) {
		if (!t) return Math.trunc(e);
		switch (t) {
			case "round":
				return Math.round(e);
			case "ceil":
				return Math.ceil(e);
			case "floor":
				return Math.floor(e);
			default:
				throw new Error("Unknown roundingMode ".concat(t))
		}
	}

	function Fn(e) {
		var t = d(Dn(e), 3),
			n = t[0],
			r = t[1],
			a = t[2];
		return 1 === n && 1 === r && 1 === a
	}

	function Rn(e, t) {
		return Fn(e) || Fn(t)
	}

	function zn(e) {
		return Dn(e).every((function(e) {
			return e > 0
		}))
	}

	function Ln(e, t, n) {
		if (null != n) {
			if ("string" == typeof t) throw Error("Error in ".concat(e,
					": pad must be an integer when using ") + "dimRoundingMode ".concat(n,
					" but got pad ")
				.concat(t, "."));
			if ("number" == typeof t) ie(de(t), (function() {
				return "Error in ".concat(e, ": pad must be an integer when using ") +
					"dimRoundingMode ".concat(n, " but got pad ").concat(t, ".")
			}));
			else {
				if ("object" != typeof t) throw Error("Error in ".concat(e, ": Unknown padding parameter: ")
					.concat(t));
				t.forEach((function(t) {
					t.forEach((function(t) {
						ie(de(t), (function() {
							return "Error in ".concat(e,
								": pad must be an integer when using "
							) + "dimRoundingMode ".concat(n,
								" but got pad ").concat(t, ".")
						}))
					}))
				}))
			}
		}
	}
	var Vn = fn({
		reshape_: function(e, t) {
			var n = {
					x: ln(e, "x", "reshape", "string_or_numeric")
				},
				r = {
					shape: t
				};
			return on.runKernel("Reshape", n, r)
		}
	});
	var Pn = fn({
		avgPool_: function(e, t, n, r, a) {
			var o = ln(e, "x", "avgPool", "float32");
			ie(Rn(n, 1), (function() {
				return "Error in avgPool: Either strides or dilations must be 1. " +
					"Got strides ".concat(n, " and dilations '").concat(1, "'")
			}));
			var s = o,
				i = !1;
			3 === o.rank && (i = !0, s = Vn(o, [1, o.shape[0], o.shape[1], o.shape[2]])), ie(4 === s
				.rank, (function() {
					return "Error in avgPool: x must be rank 4 but got rank ".concat(s.rank,
						".")
				})), Ln("avgPool", r, a);
			var u = {
					x: s
				},
				c = {
					filterSize: t,
					strides: n,
					pad: r,
					dimRoundingMode: a
				},
				p = on.runKernel("AvgPool", u, c);
			return p = On(p, o.dtype), i ? Vn(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
		}
	});
	var Bn = fn({
		avgPool3d_: function(e, t, n, r, a, o) {
			void 0 === o && (o = "NDHWC");
			var s = ln(e, "x", "avgPool3d", "float32"),
				i = s,
				u = !1;
			4 === s.rank && (u = !0, i = Vn(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[
				3]])), ie(5 === i.rank, (function() {
				return "Error in avgPool3d: x must be rank 5 but got rank ".concat(i
					.rank, ".")
			})), ie("NDHWC" === o, (function() {
				return "Error in avgPool3d: Only NDHWC is currently supported, " +
					"but got dataFormat of ".concat(o)
			})), ie("number" == typeof n && n > 0 || Array.isArray(n) && n[0] > 0 && n[1] > 0 &&
				n[2] > 0, (function() {
					return "Error in avgPool3d: Stride must be > 0, but got '".concat(n,
						"'")
				})), Ln("avgPool3d", r, a);
			var c = {
					x: i
				},
				p = {
					filterSize: t,
					strides: n,
					pad: r,
					dimRoundingMode: a,
					dataFormat: o
				},
				l = on.runKernel("AvgPool3D", c, p);
			return l = On(l, i.dtype), u ? Vn(l, [l.shape[1], l.shape[2], l.shape[3], l.shape[4]]) :
				l
		}
	});
	var Kn = fn({
		clone_: function(e) {
			var t = {
				x: ln(e, "x", "clone", "string_or_numeric")
			};
			return on.runKernel(Ve, t)
		}
	});
	var jn = fn({
		concat_: function(e, t) {
			void 0 === t && (t = 0), ie(e.length >= 1, (function() {
				return "Pass at least one tensor to concat"
			}));
			var n = dn(e, "tensors", "concat", "string_or_numeric");
			if ("complex64" === n[0].dtype && n.forEach((function(e) {
					if ("complex64" !== e.dtype) throw new Error(
						"Cannot concatenate complex64 tensors with a tensor\n          with dtype "
						.concat(e.dtype, ". "))
				})), 1 === n.length) return Kn(n[0]);
			var r = n,
				a = {
					axis: t
				};
			return on.runKernel("Concat", r, a)
		}
	});
	var qn = fn({
		matMul_: function(e, t, n, r) {
			var a;
			void 0 === n && (n = !1), void 0 === r && (r = !1);
			var o = ln(e, "a", "matMul"),
				s = ln(t, "b", "matMul"),
				i = {
					a: o = (a = d($t(o, s), 2))[0],
					b: s = a[1]
				},
				u = {
					transposeA: n,
					transposeB: r
				};
			return on.runKernel("BatchMatMul", i, u)
		}
	});
	var Un = fn({
		mul_: function(e, t) {
			var n, r = ln(e, "a", "mul"),
				a = ln(t, "b", "mul"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Multiply", o)
		}
	});
	var Wn = fn({
		sigmoid_: function(e) {
			var t = {
				x: ln(e, "x", "sigmoid", "float32")
			};
			return on.runKernel("Sigmoid", t)
		}
	});
	var Gn = fn({
		slice_: function(e, t, n) {
			var r = ln(e, "x", "slice", "string_or_numeric");
			if (0 === r.rank) throw new Error("Slicing scalar is not possible");
			var a = {
					x: r
				},
				o = {
					begin: t,
					size: n
				};
			return on.runKernel("Slice", a, o)
		}
	});
	var Hn = fn({
		tanh_: function(e) {
			var t = {
				x: ln(e, "x", "tanh", "float32")
			};
			return on.runKernel("Tanh", t)
		}
	});
	var Zn = fn({
		basicLSTMCell_: function(e, t, n, r, a, o) {
			var s = ln(e, "forgetBias", "basicLSTMCell"),
				i = ln(t, "lstmKernel", "basicLSTMCell"),
				u = ln(n, "lstmBias", "basicLSTMCell"),
				c = ln(r, "data", "basicLSTMCell"),
				p = ln(a, "c", "basicLSTMCell"),
				l = ln(o, "h", "basicLSTMCell"),
				d = jn([c, l], 1),
				h = qn(d, i),
				f = gn(h, u),
				m = f.shape[0],
				y = f.shape[1] / 4,
				v = [m, y],
				g = Gn(f, [0, 0], v),
				b = Gn(f, [0, y], v),
				x = Gn(f, [0, 2 * y], v),
				N = Gn(f, [0, 3 * y], v),
				w = gn(Un(Wn(g), Hn(b)), Un(p, Wn(gn(s, x))));
			return [w, Un(Hn(w), Wn(N))]
		}
	});
	var Qn = fn({
		batchToSpaceND_: function(e, t, n) {
			var r = ln(e, "x", "batchToSpaceND"),
				a = t.reduce((function(e, t) {
					return e * t
				}));
			ie(r.rank >= 1 + t.length, (function() {
				return "input rank is ".concat(r.rank,
					" but should be > than blockShape.length ").concat(t.length)
			})), ie(n.length === t.length, (function() {
				return "crops.length is ".concat(n.length,
					" but should be equal to blockShape.length  ").concat(t.length)
			})), ie(r.shape[0] % a == 0, (function() {
				return "input tensor batch is ".concat(r.shape[0],
						" but is not divisible by the product of ") +
					"the elements of blockShape ".concat(t.join(" * "), " === ").concat(
						a)
			}));
			var o = {
					x: r
				},
				s = {
					blockShape: t,
					crops: n
				};
			return on.runKernel("BatchToSpaceND", o, s)
		}
	});
	var Xn = fn({
		batchNorm_: function(e, t, n, r, a, o) {
			null == o && (o = .001);
			var s, i, u = ln(e, "x", "batchNorm"),
				c = ln(t, "mean", "batchNorm"),
				p = ln(n, "variance", "batchNorm");
			null != a && (s = ln(a, "scale", "batchNorm")), null != r && (i = ln(r, "offset",
				"batchNorm")), ie(c.rank === p.rank, (function() {
				return "Batch normalization gradient requires mean and variance to have equal ranks."
			})), ie(null == i || c.rank === i.rank, (function() {
				return "Batch normalization gradient requires mean and offset to have equal ranks."
			})), ie(null == s || c.rank === s.rank, (function() {
				return "Batch normalization gradient requires mean and scale to have equal ranks."
			}));
			var l = function(e) {
					return 0 === e.rank || 1 === e.rank ? Vn(e, [1, 1, 1, e.size]) : 2 === e.rank ?
						Vn(e, [1, 1, e.shape[0], e.shape[1]]) : 3 === e.rank ? Vn(e, [1, e.shape[0],
							e.shape[1], e.shape[2]
						]) : e
				}(u),
				d = {
					x: l,
					scale: s,
					offset: i,
					mean: c,
					variance: p
				},
				h = {
					varianceEpsilon: o
				},
				f = on.runKernel("FusedBatchNorm", d, h);
			return Vn(f, u.shape)
		}
	});
	var Yn = fn({
		batchNorm2d_: function(e, t, n, r, a, o) {
			var s, i, u = ln(e, "x", "batchNorm"),
				c = ln(t, "mean", "batchNorm"),
				p = ln(n, "variance", "batchNorm");
			return null != a && (s = ln(a, "scale", "batchNorm")), null != r && (i = ln(r, "offset",
				"batchNorm")), ie(2 === u.rank, (function() {
				return "Error in batchNorm2D: x must be rank 2 but got rank " + ""
					.concat(u.rank, ".")
			})), ie(2 === c.rank || 1 === c.rank, (function() {
				return "Error in batchNorm2D: mean must be rank 2 or rank 1 but " +
					"got rank ".concat(c.rank, ".")
			})), ie(2 === p.rank || 1 === p.rank, (function() {
				return "Error in batchNorm2D: variance must be rank 2 or rank 1 " +
					"but got rank ".concat(p.rank, ".")
			})), null != s && ie(2 === s.rank || 1 === s.rank, (function() {
				return "Error in batchNorm2D: scale must be rank 2 or rank 1 " +
					"but got rank ".concat(s.rank, ".")
			})), null != i && ie(2 === i.rank || 1 === i.rank, (function() {
				return "Error in batchNorm2D: offset must be rank 2 or rank 1 " +
					"but got rank ".concat(i.rank, ".")
			})), Xn(u, c, p, i, s, o)
		}
	});
	var Jn = fn({
		batchNorm3d_: function(e, t, n, r, a, o) {
			var s, i, u = ln(e, "x", "batchNorm"),
				c = ln(t, "mean", "batchNorm"),
				p = ln(n, "variance", "batchNorm");
			return null != a && (s = ln(a, "scale", "batchNorm")), null != r && (i = ln(r, "offset",
				"batchNorm")), ie(3 === u.rank, (function() {
				return "Error in batchNorm3D: x must be rank 3 but got rank " + ""
					.concat(u.rank, ".")
			})), ie(3 === c.rank || 1 === c.rank, (function() {
				return "Error in batchNorm3D: mean must be rank 3 or rank 1 but " +
					"got rank ".concat(c.rank, ".")
			})), ie(3 === p.rank || 1 === p.rank, (function() {
				return "Error in batchNorm3D: variance must be rank 3 or rank 1 " +
					"but got rank ".concat(p.rank, ".")
			})), null != s && ie(3 === s.rank || 1 === s.rank, (function() {
				return "Error in batchNorm3D: scale must be rank 3 or rank 1 " +
					"but got rank ".concat(s.rank, ".")
			})), null != i && ie(3 === i.rank || 1 === i.rank, (function() {
				return "Error in batchNorm3D: offset must be rank 3 or rank 1 " +
					"but got rank ".concat(i.rank, ".")
			})), Xn(u, c, p, i, s, o)
		}
	});
	var $n = fn({
		batchNorm4d_: function(e, t, n, r, a, o) {
			var s, i, u = ln(e, "x", "batchNorm"),
				c = ln(t, "mean", "batchNorm"),
				p = ln(n, "variance", "batchNorm");
			return null != a && (s = ln(a, "scale", "batchNorm")), null != r && (i = ln(r, "offset",
				"batchNorm")), ie(4 === u.rank, (function() {
				return "Error in batchNorm4D: x must be rank 4 but got rank " + ""
					.concat(u.rank, ".")
			})), ie(4 === c.rank || 1 === c.rank, (function() {
				return "Error in batchNorm4D: mean must be rank 4 or rank 1 but " +
					"got rank ".concat(c.rank, ".")
			})), ie(4 === p.rank || 1 === p.rank, (function() {
				return "Error in batchNorm4D: variance must be rank 4 or rank 1 " +
					"but got rank ".concat(p.rank, ".")
			})), null != s && ie(4 === s.rank || 1 === s.rank, (function() {
				return "Error in batchNorm4D: scale must be rank 4 or rank 1 " +
					"but got rank ".concat(s.rank, ".")
			})), null != i && ie(4 === i.rank || 1 === i.rank, (function() {
				return "Error in batchNorm4D: offset must be rank 4 or rank 1 " +
					"but got rank ".concat(i.rank, ".")
			})), Xn(u, c, p, i, s, o)
		}
	});
	var er = fn({
		bincount_: function(e, t, n) {
			var r = ln(e, "x", "bincount"),
				a = ln(t, "weights", "bincount");
			ie("int32" === r.dtype, (function() {
				return "Error in bincount: input " + "dtype must be int32, but got "
					.concat(r.dtype)
			})), ie(n >= 0, (function() {
				return "size must be non-negative, but got ".concat(n, ".")
			})), ie(a.size === r.size || 0 === a.size, (function() {
				return "Error in bincount: weights must have the same size as input or" +
					"0-length, but got input shape: ".concat(r.shape,
						", weights shape: ") + "".concat(a.shape, ".")
			}));
			var o = {
					x: r,
					weights: a
				},
				s = {
					size: n
				};
			return on.runKernel("Bincount", o, s)
		}
	});
	var tr = fn({
		bitwiseAnd_: function(e, t) {
			var n = ln(e, "x", "bitwiseAnd"),
				r = ln(t, "y", "bitwiseAnd");
			if (!le(n.shape, r.shape)) throw new Error(
				"BitwiseAnd: Tensors must have the same shape. x: ".concat(n.shape, ", y: ")
				.concat(r.shape));
			if ("int32" !== n.dtype || "int32" !== r.dtype) throw new Error(
				"BitwiseAnd: Only supports 'int32' values in tensor, found type of x: "
				.concat(n.dtype, " and type of y: ").concat(r.dtype));
			var a = {
				a: n,
				b: r
			};
			return on.runKernel("BitwiseAnd", a)
		}
	});
	var nr = fn({
		broadcastArgs_: function(e, t) {
			var n = ln(e, "s0", "broadcastArgs", "int32"),
				r = ln(t, "s1", "broadcastArgs", "int32");
			if (1 !== n.rank) throw new Error(
				"broadcastArgs(): first input must be a vector (rank=1). " + "Has rank "
				.concat(n.rank));
			if (1 !== r.rank) throw new Error(
				"broadcastArgs(): second input must be a vector (rank=1). " + "Has rank "
				.concat(r.rank));
			var a = {
				s0: n,
				s1: r
			};
			return on.runKernel("BroadcastArgs", a)
		}
	});
	var rr = fn({
		broadcastTo_: function(e, t) {
			var n = ln(e, "broadcastTo", "x"),
				r = n.shape;
			if (Se(t), t.length < n.rank) throw new Error("broadcastTo(): shape.length=".concat(t
				.length, " < input.rank=").concat(n.rank, "."));
			if (t.length > n.rank) {
				for (var a = n.shape.slice(); a.length < t.length;) a.unshift(1);
				n = Vn(n, a)
			}
			for (var o = n.shape, s = Array.from(t), i = t.length - 1; i >= 0; i--)
				if (o[i] === t[i]) s[i] = 1;
				else if (1 !== n.shape[i]) throw new Error("broadcastTo(): [".concat(r,
				"] cannot be broadcast to [").concat(t, "]."));
			var u = s.map((function(e, t) {
				return e > 1 ? t : -1
			})).filter((function(e) {
				return e >= 0
			}));
			if (0 === u.length) return Kn(n);
			var c = {
					x: n
				},
				p = {
					reps: s
				};
			return on.runKernel(Pe, c, p)
		}
	});

	function ar(e, t, n) {
		return void 0 === t && (t = "float32"), t = t || "float32", Se(e), new Pt(e, t, n)
	}
	var or = fn({
		ceil_: function(e) {
			var t = {
				x: ln(e, "x", "ceil", "float32")
			};
			return on.runKernel("Ceil", t)
		}
	});

	function sr(e, t, n) {
		Se(e);
		var r = {
			shape: e,
			value: t,
			dtype: n = n || ge(t)
		};
		return on.runKernel("Fill", {}, r)
	}
	var ir = fn({
		clipByValue_: function(e, t, n) {
			var r = ln(e, "x", "clipByValue");
			if (ie(t <= n, (function() {
					return "Error in clip: min (".concat(t, ") must be ") +
						"less than or equal to max (".concat(n, ").")
				})), t === n) return sr(r.shape, t, r.dtype);
			var a = {
					x: r
				},
				o = {
					clipValueMin: t,
					clipValueMax: n
				};
			return on.runKernel("ClipByValue", a, o)
		}
	});
	var ur = fn({
		complex_: function(e, t) {
			var n = ln(e, "real", "complex"),
				r = ln(t, "imag", "complex");
			ue(n.shape, r.shape, "real and imag shapes, ".concat(n.shape, " and ").concat(r.shape,
				", ") + "must match in call to tf.complex().");
			var a = {
				real: n,
				imag: r
			};
			return on.runKernel("Complex", a)
		}
	});
	var cr = fn({
		concat1d_: function(e) {
			return jn(e, 0)
		}
	});
	var pr = fn({
		concat2d_: function(e, t) {
			return jn(e, t)
		}
	});
	var lr = fn({
		concat3d_: function(e, t) {
			return jn(e, t)
		}
	});
	var dr = fn({
		concat4d_: function(e, t) {
			return jn(e, t)
		}
	});
	var hr = fn({
		conv2d_: function(e, t, n, r, a, o, s) {
			void 0 === a && (a = "NHWC"), void 0 === o && (o = [1, 1]);
			var i = ln(e, "x", "conv2d", "float32"),
				u = ln(t, "filter", "conv2d", "float32"),
				c = i,
				p = !1;
			3 === i.rank && (p = !0, c = Vn(i, [1, i.shape[0], i.shape[1], i.shape[2]])), ie(4 === c
				.rank, (function() {
					return "Error in conv2d: input must be rank 4, but got rank ".concat(c
						.rank, ".")
				})), ie(4 === u.rank, (function() {
				return "Error in conv2d: filter must be rank 4, but got rank " + ""
					.concat(u.rank, ".")
			})), Ln("conv2d", r, s);
			var l = "NHWC" === a ? c.shape[3] : c.shape[1];
			ie(l === u.shape[2], (function() {
				return "Error in conv2d: depth of input (".concat(l, ") must match ") +
					"input depth for filter ".concat(u.shape[2], ".")
			})), ie(Rn(n, o), (function() {
				return "Error in conv2D: Either strides or dilations must be 1. " +
					"Got strides ".concat(n, " and dilations '").concat(o, "'")
			})), ie(zn(o), (function() {
				return "Error in conv2D: Dilated rates should be larger than 0."
			})), ie(zn(n), (function() {
				return "Error in conv2D: Strides should be larger than 0."
			}));
			var d = {
					x: c,
					filter: u
				},
				h = {
					strides: n,
					pad: r,
					dataFormat: a,
					dilations: o,
					dimRoundingMode: s
				},
				f = on.runKernel("Conv2D", d, h);
			return p ? Vn(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
		}
	});
	var fr = fn({
		conv1d_: function(e, t, n, r, a, o, s) {
			void 0 === a && (a = "NWC"), void 0 === o && (o = 1);
			var i = ln(e, "x", "conv1d"),
				u = ln(t, "filter", "conv1d"),
				c = i,
				p = !1;
			2 === i.rank && (p = !0, c = Vn(i, [1, i.shape[0], i.shape[1]])), ie(3 === c.rank, (
				function() {
					return "Error in conv1d: input must be rank 3, but got rank ".concat(c
						.rank, ".")
				})), ie(3 === u.rank, (function() {
				return "Error in conv1d: filter must be rank 3, but got rank " + ""
					.concat(u.rank, ".")
			})), Ln("conv1d", r, s), ie(c.shape[2] === u.shape[1], (function() {
				return "Error in conv1d: depth of input (".concat(c.shape[2],
					") must match ") + "input depth for filter ".concat(u.shape[1],
					".")
			})), ie(Rn(n, o), (function() {
				return "Error in conv1D: Either stride or dilation must be 1. " +
					"Got stride ".concat(n, " and dilation '").concat(o, "'")
			})), ie(zn(o), (function() {
				return "Error in conv1D: Dilated rates should be larger than 0."
			})), ie(zn(n), (function() {
				return "Error in conv1D: Stride should be larger than 0."
			})), ie("NWC" === a, (function() {
				return "Error in conv1d: got dataFormat of ".concat(a,
					" but only NWC is currently supported.")
			}));
			var l = Vn(u, [1, u.shape[0], u.shape[1], u.shape[2]]),
				d = Vn(c, [c.shape[0], 1, c.shape[1], c.shape[2]]),
				h = hr(d, l, [1, n], r, "NHWC", [1, o], s);
			return Vn(h, p ? [h.shape[2], h.shape[3]] : [h.shape[0], h.shape[2], h.shape[3]])
		}
	});
	var mr = fn({
		conv2DBackpropInput_: function(e, t, n, r, a, o, s) {
			void 0 === o && (o = "NHWC"), ie(e.length === t.rank, (function() {
				return "Length of inShape " + "(".concat(e.length, ") and rank of dy (")
					.concat(t.rank, ") must match")
			}));
			var i = e,
				u = t,
				c = !1;
			3 === t.rank && (c = !0, u = Vn(t, [1, t.shape[0], t.shape[1], t.shape[2]]), i = [1, e[
				0], e[1], e[2]]), ie(4 === i.length, (function() {
				return "Error in conv2dDerInput: inShape must be length 4, but got length " +
					"".concat(i.length, ".")
			})), ie(4 === u.rank, (function() {
				return "Error in conv2dDerInput: dy must be rank 4, but got " + "rank "
					.concat(u.rank)
			})), ie(4 === n.rank, (function() {
				return "Error in conv2dDerInput: filter must be rank 4, but got " +
					"rank ".concat(n.rank)
			}));
			var p = "NHWC" === o ? i[3] : i[1],
				l = "NHWC" === o ? u.shape[3] : u.shape[1];
			ie(p === n.shape[2], (function() {
				return "Error in conv2dDerInput: depth of input (".concat(p,
					") must ") + "match input depth for filter ".concat(n.shape[2],
					".")
			})), ie(l === n.shape[3], (function() {
				return "Error in conv2dDerInput: depth of output (".concat(l,
					") must ") + "match output depth for filter ".concat(n.shape[3],
					".")
			})), Ln("conv2dDerInput", a, s);
			var d = {
					dy: u,
					filter: n
				},
				h = {
					strides: r,
					pad: a,
					dataFormat: o,
					dimRoundingMode: s,
					inputShape: i
				},
				f = on.runKernel("Conv2DBackpropInput", d, h);
			return c ? Vn(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
		}
	});
	var yr = fn({
		conv2dTranspose_: function(e, t, n, r, a, o) {
			var s = ln(e, "x", "conv2dTranspose"),
				i = ln(t, "filter", "conv2dTranspose");
			return mr(n, s, i, r, a, "NHWC", o)
		}
	});
	var vr = fn({
		conv3d_: function(e, t, n, r, a, o) {
			void 0 === a && (a = "NDHWC"), void 0 === o && (o = [1, 1, 1]);
			var s = ln(e, "x", "conv3d"),
				i = ln(t, "filter", "conv3d"),
				u = s,
				c = !1;
			4 === s.rank && (c = !0, u = Vn(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[
				3]])), ie(5 === u.rank, (function() {
				return "Error in conv3d: input must be rank 5, but got rank ".concat(u
					.rank, ".")
			})), ie(5 === i.rank, (function() {
				return "Error in conv3d: filter must be rank 5, but got rank " + ""
					.concat(i.rank, ".")
			})), ie(u.shape[4] === i.shape[3], (function() {
				return "Error in conv3d: depth of input (".concat(u.shape[4],
					") must match ") + "input depth for filter ".concat(i.shape[3],
					".")
			})), ie(Rn(n, o), (function() {
				return "Error in conv3D: Either strides or dilations must be 1. " +
					"Got strides ".concat(n, " and dilations '").concat(o, "'")
			})), ie("NDHWC" === a, (function() {
				return "Error in conv3d: got dataFormat of ".concat(a,
					" but only NDHWC is currently supported.")
			})), ie(zn(o), (function() {
				return "Error in conv3D: Dilated rates should be larger than 0."
			})), ie(zn(n), (function() {
				return "Error in conv3D: Strides should be larger than 0."
			}));
			var p = {
					x: u,
					filter: i
				},
				l = {
					strides: n,
					pad: r,
					dataFormat: a,
					dilations: o
				},
				d = on.runKernel("Conv3D", p, l);
			return c ? Vn(d, [d.shape[1], d.shape[2], d.shape[3], d.shape[4]]) : d
		}
	});
	var gr = fn({
		conv3DBackpropInput_: function(e, t, n, r, a) {
			ie(e.length === t.rank, (function() {
				return "Length of inShape " + "(".concat(e.length, ") and rank of dy (")
					.concat(t.rank, ") must match")
			}));
			var o = e,
				s = t,
				i = !1;
			4 === t.rank && (i = !0, s = Vn(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]]),
				o = [1, e[0], e[1], e[2], e[3]]);
			var u = o[4],
				c = s.shape[4];
			ie(5 === o.length, (function() {
				return "Error in conv3dDerInput: inShape must be length 5, but got length " +
					"".concat(o.length, ".")
			})), ie(5 === s.rank, (function() {
				return "Error in conv3dDerInput: dy must be rank 5, but got " + "rank "
					.concat(s.rank)
			})), ie(5 === n.rank, (function() {
				return "Error in conv3dDerInput: filter must be rank 5, but got " +
					"rank ".concat(n.rank)
			})), ie(u === n.shape[3], (function() {
				return "Error in conv3dDerInput: depth of input (".concat(u,
					") must ") + "match input depth for filter ".concat(n.shape[3],
					".")
			})), ie(c === n.shape[4], (function() {
				return "Error in conv3dDerInput: depth of output (".concat(c,
					") must ") + "match output depth for filter ".concat(n.shape[4],
					".")
			}));
			var p = {
					dy: s,
					filter: n
				},
				l = {
					pad: a,
					strides: r,
					inputShape: o
				},
				d = on.runKernel("Conv3DBackpropInputV2", p, l);
			return i ? Vn(d, [d.shape[1], d.shape[2], d.shape[3], d.shape[4]]) : d
		}
	});
	var br = fn({
		conv3dTranspose_: function(e, t, n, r, a) {
			var o = ln(e, "x", "conv3dTranspose"),
				s = ln(t, "filter", "conv3dTranspose");
			return gr(n, o, s, r, a)
		}
	});
	var xr = fn({
		cos_: function(e) {
			var t = {
				x: ln(e, "x", "cos", "float32")
			};
			return on.runKernel("Cos", t)
		}
	});
	var Nr = fn({
		cosh_: function(e) {
			var t = {
				x: ln(e, "x", "cosh", "float32")
			};
			return on.runKernel("Cosh", t)
		}
	});
	var wr = fn({
		cumprod_: function(e, t, n, r) {
			void 0 === t && (t = 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
			var a = {
					x: ln(e, "x", "cumprod")
				},
				o = {
					axis: t,
					exclusive: n,
					reverse: r
				};
			return on.runKernel("Cumprod", a, o)
		}
	});
	var kr = fn({
		cumsum_: function(e, t, n, r) {
			void 0 === t && (t = 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
			var a = {
					x: ln(e, "x", "cumsum")
				},
				o = {
					axis: t,
					exclusive: n,
					reverse: r
				};
			return on.runKernel("Cumsum", a, o)
		}
	});
	var Tr = fn({
		denseBincount_: function(e, t, n, r) {
			void 0 === r && (r = !1);
			var a = ln(e, "x", "denseBincount"),
				o = ln(t, "weights", "denseBincount");
			ie("int32" === a.dtype, (function() {
				return "Error in denseBincount: input " +
					"dtype must be int32, but got ".concat(a.dtype)
			})), ie(a.rank <= 2, (function() {
				return "Error in denseBincount: input must be at most rank 2, but got " +
					"rank ".concat(a.rank, ".")
			})), ie(n >= 0, (function() {
				return "size must be non-negative, but got ".concat(n, ".")
			})), ie(o.size === a.size || 0 === o.size, (function() {
				return "Error in denseBincount: weights must have the same shape as x or " +
					"0-length, but got x shape: ".concat(a.shape, ", weights shape: ") +
					"".concat(o.shape, ".")
			}));
			var s = {
					x: a,
					weights: o
				},
				i = {
					size: n,
					binaryOutput: r
				};
			return on.runKernel("DenseBincount", s, i)
		}
	});
	var Sr = fn({
		depthToSpace_: function(e, t, n) {
			void 0 === n && (n = "NHWC");
			var r = ln(e, "x", "depthToSpace", "float32"),
				a = "NHWC" === n ? r.shape[1] : r.shape[2],
				o = "NHWC" === n ? r.shape[2] : r.shape[3],
				s = "NHWC" === n ? r.shape[3] : r.shape[1];
			ie(t > 1, (function() {
				return "blockSize should be > 1 for depthToSpace, but was: ".concat(t)
			})), ie(a * t >= 0, (function() {
				return "Negative dimension size caused by overflow when multiplying\n    "
					.concat(a, " and ").concat(t,
						"  for depthToSpace with input shape\n    ").concat(r.shape)
			})), ie(o * t >= 0, (function() {
				return "Negative dimension size caused by overflow when multiplying\n    "
					.concat(o, " and ").concat(t,
						" for depthToSpace with input shape\n        ").concat(r.shape)
			})), ie(s % (t * t) == 0, (function() {
				return "Dimension size must be evenly divisible by ".concat(t * t,
						" but is ").concat(s, " for depthToSpace with input shape ")
					.concat(r.shape)
			}));
			var i = {
					x: r
				},
				u = {
					blockSize: t,
					dataFormat: n
				};
			return on.runKernel("DepthToSpace", i, u)
		}
	});
	var _r = fn({
		depthwiseConv2d_: function(e, t, n, r, a, o, s) {
			void 0 === a && (a = "NHWC"), void 0 === o && (o = [1, 1]);
			var i = ln(e, "x", "depthwiseConv2d", "float32"),
				u = ln(t, "filter", "depthwiseConv2d", "float32"),
				c = i,
				p = !1;
			3 === i.rank && (p = !0, c = Vn(i, [1, i.shape[0], i.shape[1], i.shape[2]])), ie(4 === c
				.rank, (function() {
					return "Error in depthwiseConv2d: input must be rank 4, but got " +
						"rank ".concat(c.rank, ".")
				})), ie(4 === u.rank, (function() {
				return "Error in depthwiseConv2d: filter must be rank 4, but got rank " +
					"".concat(u.rank, ".")
			}));
			var l = "NHWC" === a ? c.shape[3] : c.shape[1];
			ie(l === u.shape[2], (function() {
				return "Error in depthwiseConv2d: number of input channels " + "("
					.concat(l, ") must match the inChannels dimension in ") + "filter "
					.concat(u.shape[2], ".")
			})), Ln("depthwiseConv2d", r, s);
			var d = {
					x: c,
					filter: u
				},
				h = {
					strides: n,
					pad: r,
					dataFormat: a,
					dilations: o,
					dimRoundingMode: s
				},
				f = on.runKernel("DepthwiseConv2dNative", d, h);
			return p ? Vn(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
		}
	});
	var Er = fn({
		diag_: function(e) {
			var t = {
				x: ln(e, "x", "diag")
			};
			return on.runKernel("Diag", t)
		}
	});
	var Ir = fn({
		dilation2d_: function(e, t, n, r, a, o) {
			void 0 === a && (a = [1, 1]), void 0 === o && (o = "NHWC");
			var s = ln(e, "x", "dilation2d"),
				i = ln(t, "filter", "dilation2d");
			ie(3 === s.rank || 4 === s.rank, (function() {
				return "Error in dilation2d: input must be rank 3 or 4, but got rank " +
					"".concat(s.rank, ".")
			})), ie(3 === i.rank, (function() {
				return "Error in dilation2d: filter must be rank 3, but got rank " + ""
					.concat(i.rank, ".")
			})), ie("NHWC" === o, (function() {
				return "Error in dilation2d: Only NHWC is currently supported, " +
					"but got dataFormat of ".concat(o)
			}));
			var u = s,
				c = !1;
			3 === s.rank && (u = Vn(s, [1, s.shape[0], s.shape[1], s.shape[2]]), c = !0), ie(u
				.shape[3] === i.shape[2], (function() {
					return "Error in dilation2d:  input and filter must have the same depth: "
						.concat(u.shape[3], " vs ").concat(i.shape[2])
				}));
			var p = {
					x: u,
					filter: i
				},
				l = {
					strides: n,
					pad: r,
					dilations: a
				},
				d = on.runKernel("Dilation2D", p, l);
			return c ? Vn(d, [d.shape[1], d.shape[2], d.shape[3]]) : d
		}
	});
	var Or = fn({
		floorDiv_: function(e, t) {
			var n, r = ln(e, "a", "floorDiv"),
				a = ln(t, "b", "floorDiv"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("FloorDiv", o)
		}
	});
	var Ar = fn({
		div_: function(e, t) {
			var n, r = ln(e, "a", "div"),
				a = ln(t, "b", "div");
			if (r = (n = d($t(r, a), 2))[0], a = n[1], "int32" === r.dtype && "int32" === a.dtype)
				return Or(r, a);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("RealDiv", o, {})
		}
	});

	function Dr(e, t) {
		for (var n = Math.max(e.length, t.length), r = new Array(n), a = 0; a < n; a++) {
			var o = e[e.length - a - 1];
			null == o && (o = 1);
			var s = t[t.length - a - 1];
			if (null == s && (s = 1), 1 === o) r[n - a - 1] = s;
			else if (1 === s) r[n - a - 1] = o;
			else {
				if (o !== s) {
					var i = "Operands could not be broadcast together with shapes " + "".concat(e, " and ")
						.concat(t, ".");
					throw Error(i)
				}
				r[n - a - 1] = o
			}
		}
		return r
	}
	var Mr = fn({
		equal_: function(e, t) {
			var n, r = ln(e, "a", "equal", "string_or_numeric"),
				a = ln(t, "b", "equal", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("Equal", o)
		}
	});
	var Cr = fn({
		where_: function(e, t, n) {
			var r = ln(t, "a", "where"),
				a = ln(n, "b", "where"),
				o = ln(e, "condition", "where", "bool"),
				s = Dr(Dr(o.shape, r.shape), a.shape),
				i = {
					condition: rr(o, s),
					t: rr(r, s),
					e: rr(a, s)
				};
			return on.runKernel("Select", i)
		}
	});
	var Fr = fn({
		zerosLike_: function(e) {
			var t = {
				x: ln(e, "x", "zerosLike")
			};
			return on.runKernel("ZerosLike", t)
		}
	});
	var Rr = fn({
		divNoNan_: function(e, t) {
			var n, r = ln(e, "a", "div"),
				a = ln(t, "b", "div");
			r = (n = d($t(r, a), 2))[0], a = n[1];
			var o = Ar(r, a),
				s = Fr(o),
				i = Mr(a, s);
			return Cr(i, s, o)
		}
	});
	var zr = fn({
		dot_: function(e, t) {
			var n = ln(e, "t1", "dot"),
				r = ln(t, "t2", "dot");
			ie(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), (function() {
				return "Error in dot: inputs must all be rank 1 or 2, but got ranks " +
					"".concat(n.rank, " and ").concat(r.rank, ".")
			}));
			var a = 1 === n.rank ? n.size : n.shape[1],
				o = 1 === r.rank ? r.size : r.shape[0];
			if (ie(a === o, (function() {
					return "Error in dot: inner dimensions of inputs must match, but got " +
						"".concat(a, " and ").concat(o, ".")
				})), 1 === n.rank && 1 === r.rank) {
				var s = Vn(n, [1, -1]),
					i = Vn(r, [-1, 1]),
					u = qn(s, i);
				return Vn(u, [])
			}
			if (1 === n.rank && 2 === r.rank) {
				s = Vn(n, [1, -1]), i = Vn(r, [r.shape[0], r.shape[1]]), u = qn(s, i);
				return Vn(u, [u.size])
			}
			if (2 === n.rank && 1 === r.rank) {
				i = Vn(r, [-1, 1]), u = qn(n, i);
				return Vn(u, [u.size])
			}
			return i = Vn(r, [r.shape[0], r.shape[1]]), u = qn(n, i)
		}
	});
	var Lr = fn({
		einsum_: function(e) {
			for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			var r = t.map((function(e, t) {
					return ln(e, "tensors".concat(t), "einsum")
				})),
				a = {
					equation: e
				};
			return on.runKernel(Le, r, a)
		}
	});
	var Vr = fn({
		elu_: function(e) {
			var t = {
				x: ln(e, "x", "elu", "float32")
			};
			return on.runKernel("Elu", t)
		}
	});
	var Pr = fn({
		ensureShape_: function(e, t) {
			var n = ln(e, "x", "ensureShape", "string_or_numeric");
			if (! function(e, t) {
					if (e === t) return !0;
					if (null == e || null == t) return !1;
					if (e.length !== t.length) return !1;
					for (var n = 0; n < e.length; n++)
						if (null !== e[n] && null !== t[n] && e[n] !== t[n]) return !1;
					return !0
				}(n.shape, t)) throw new Error("EnsureShape: Shape of tensor ".concat(n.shape,
				" is not compatible with expected shape ").concat(t));
			return e
		}
	});
	var Br = fn({
		erf_: function(e) {
			var t = ln(e, "x", "erf");
			ie("int32" === t.dtype || "float32" === t.dtype, (function() {
				return "Input dtype must be `int32` or `float32`."
			})), "int32" === t.dtype && (t = On(t, "float32"));
			var n = {
				x: t
			};
			return on.runKernel("Erf", n)
		}
	});

	function Kr(e, t) {
		return function(e, t, n) {
			for (var r = e.length + t.length, a = [], o = 0, s = 0, i = 0; i < r; i++) - 1 === n.indexOf(
				i) ? a.push(e[o++]) : a.push(t[s++]);
			return a
		}(e, t.map((function(e) {
			return 1
		})), t)
	}
	var jr = fn({
		max_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = {
					x: ln(e, "x", "max")
				},
				a = {
					reductionIndices: t,
					keepDims: n
				};
			return on.runKernel("Max", r, a)
		}
	});
	var qr = fn({
		min_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = {
					x: ln(e, "x", "min")
				},
				a = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("Min", r, a)
		}
	});
	var Ur = fn({
		pow_: function(e, t) {
			var n, r = ln(e, "base", "pow"),
				a = ln(t, "exp", "pow"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Pow", o)
		}
	});

	function Wr(e, t, n, r) {
		if (null == r) r = ge(e);
		else if ("complex64" === r) throw new Error(
			"Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
		if (Jt(e) || Yt(e)) {
			if ("float32" !== r && "int32" !== r) throw new Error(
				"Creating tensor from GPU data only supports " +
				"'float32'|'int32' dtype, while the dtype is ".concat(r, "."));
			return on.backend.createTensorFromGPUData(e, t || n, r)
		}
		if (!At(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" !=
			typeof e) throw new Error(
			"values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray"
		);
		if (null != t) {
			Se(t);
			var a = pe(t),
				o = pe(n);
			ie(a === o, (function() {
				return "Based on the provided shape, [".concat(t, "], the tensor should have ") + ""
					.concat(a, " values but has ").concat(o)
			}));
			for (var s = 0; s < n.length; ++s) {
				var i = n[s],
					u = s !== n.length - 1 || i !== pe(t.slice(s));
				ie(n[s] === t[s] || !u, (function() {
					return "Error creating a new Tensor. Inferred shape " + "(".concat(n,
						") does not match the provided ") + "shape (".concat(t, "). ")
				}))
			}
		}
		return At(e) || Array.isArray(e) || (e = [e]), t = t || n, e = "string" !== r ? Et(e, r) : Dt(e, [], !
			0), on.makeTensor(e, t, r)
	}

	function Gr(e, t) {
		if ((At(e) && "string" !== t || Array.isArray(e)) && "complex64" !== t) throw new Error(
			"Error creating a new Scalar: value must be a primitive (number|boolean|string)");
		if ("string" === t && At(e) && !(e instanceof Uint8Array)) throw new Error(
			"When making a scalar from encoded string, the value must be `Uint8Array`.");
		return Wr(e, [], [], t)
	}
	var Hr = fn({
		sqrt_: function(e) {
			var t = {
				x: ln(e, "x", "sqrt", "float32")
			};
			return on.runKernel("Sqrt", t)
		}
	});
	var Zr = fn({
		square_: function(e) {
			var t = ln(e, "x", "square");
			return on.runKernel("Square", {
				x: t
			}, {})
		}
	});
	var Qr = fn({
		sum_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = ln(e, "x", "sum");
			"bool" === r.dtype && (r = On(r, "int32"));
			var a = {
					x: r
				},
				o = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("Sum", a, o)
		}
	});

	function Xr(e, t, n) {
		if (void 0 === n && (n = null), 0 === e.rank) return mn(e);
		if (1 !== e.rank && null === n) return Xr(Vn(e, [-1]), t, n);
		if (1 === e.rank || "number" == typeof n || Array.isArray(n) && 1 === n.length) {
			if (1 === t) return Qr(mn(e), n);
			if (t === 1 / 0) return jr(mn(e), n);
			if (t === -1 / 0) return qr(mn(e), n);
			if ("euclidean" === t || 2 === t) return Hr(Qr(Ur(mn(e), Gr(2, "int32")), n));
			throw new Error("Error in norm: invalid ord value: ".concat(t))
		}
		if (Array.isArray(n) && 2 === n.length) {
			if (1 === t) return jr(Qr(mn(e), n[0]), n[1] - 1);
			if (t === 1 / 0) return jr(Qr(mn(e), n[1]), n[0]);
			if (t === -1 / 0) return qr(Qr(mn(e), n[1]), n[0]);
			if ("fro" === t || "euclidean" === t) return Hr(Qr(Zr(e), n));
			throw new Error("Error in norm: invalid ord value: ".concat(t))
		}
		throw new Error("Error in norm: invalid axis: ".concat(n))
	}
	var Yr = fn({
		norm_: function(e, t, n, r) {
			void 0 === t && (t = "euclidean"), void 0 === n && (n = null), void 0 === r && (r = !1);
			var a = Xr(e = ln(e, "x", "norm"), t, n),
				o = a.shape;
			if (r) {
				var s = fe(n, e.shape);
				o = Kr(a.shape, s)
			}
			return Vn(a, o)
		}
	});
	var Jr = fn({
		euclideanNorm_: function(e, t, n) {
			return void 0 === t && (t = null), void 0 === n && (n = !1), Yr(e, "euclidean", t, n)
		}
	});
	var $r = fn({
		exp_: function(e) {
			var t = {
				x: ln(e, "x", "exp")
			};
			return on.runKernel("Exp", t)
		}
	});
	var ea = fn({
		expandDims_: function(e, t) {
			void 0 === t && (t = 0);
			var n = ln(e, "x", "expandDims", "string_or_numeric");
			ie(t <= n.rank, (function() {
				return "Axis must be <= rank of the tensor"
			}));
			var r = {
					input: n
				},
				a = {
					dim: t
				};
			return on.runKernel("ExpandDims", r, a)
		}
	});
	var ta = fn({
		expm1_: function(e) {
			var t = {
				x: ln(e, "x", "expm1")
			};
			return on.runKernel("Expm1", t)
		}
	});
	var na = fn({
		tile_: function(e, t) {
			var n = ln(e, "x", "tile", "string_or_numeric");
			ie(n.rank === t.length, (function() {
				return "Error in transpose: rank of input ".concat(n.rank, " ") +
					"must match length of reps ".concat(t, ".")
			}));
			var r = {
					x: n
				},
				a = {
					reps: t
				};
			return on.runKernel(Pe, r, a)
		}
	});
	var ra = fn({
		eye_: function(e, t, n, r) {
			void 0 === r && (r = "float32"), null == t && (t = e);
			for (var a = ar([e, t], r), o = e <= t ? e : t, s = 0; s < o; ++s) a.set(1, s, s);
			var i = Vn(a.toTensor(), [e, t]);
			if (null == n) return i;
			if (1 === n.length) return na(ea(i, 0), [n[0], 1, 1]);
			if (2 === n.length) return na(ea(ea(i, 0), 0), [n[0], n[1], 1, 1]);
			if (3 === n.length) return na(ea(ea(ea(i, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
			throw new Error("eye() currently supports only 1D and 2D " +
				"batchShapes, but received ".concat(n.length, "D."))
		}
	});
	var aa = fn({
		floor_: function(e) {
			var t = {
				x: ln(e, "x", "floor", "float32")
			};
			return on.runKernel("Floor", t)
		}
	});
	var oa = fn({
		gather_: function(e, t, n, r) {
			void 0 === n && (n = 0), void 0 === r && (r = 0);
			var a = {
					x: ln(e, "x", "gather"),
					indices: ln(t, "indices", "gather", "int32")
				},
				o = {
					axis: n,
					batchDims: r
				};
			return on.runKernel("GatherV2", a, o)
		}
	});
	var sa = fn({
		greater_: function(e, t) {
			var n, r = ln(e, "a", "greater", "string_or_numeric"),
				a = ln(t, "b", "greater", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("Greater", o)
		}
	});
	var ia = fn({
		greaterEqual_: function(e, t) {
			var n, r = ln(e, "a", "greaterEqual", "string_or_numeric"),
				a = ln(t, "b", "greaterEqual", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("GreaterEqual", o)
		}
	});
	var ua = fn({
		imag_: function(e) {
			var t = {
				input: ln(e, "input", "imag")
			};
			return on.runKernel("Imag", t)
		}
	});
	var ca = fn({
		isFinite_: function(e) {
			var t = {
				x: ln(e, "x", "isFinite")
			};
			return on.runKernel("IsFinite", t)
		}
	});
	var pa = fn({
		isInf_: function(e) {
			var t = {
				x: ln(e, "x", "isInf")
			};
			return on.runKernel("IsInf", t)
		}
	});
	var la = fn({
		isNaN_: function(e) {
			var t = {
				x: ln(e, "x", "isNaN")
			};
			return on.runKernel("IsNan", t)
		}
	});
	var da = fn({
		leakyRelu_: function(e, t) {
			void 0 === t && (t = .2);
			var n = {
					x: ln(e, "x", "leakyRelu")
				},
				r = {
					alpha: t
				};
			return on.runKernel("LeakyRelu", n, r)
		}
	});
	var ha = fn({
		less_: function(e, t) {
			var n, r = ln(e, "a", "less", "string_or_numeric"),
				a = ln(t, "b", "less", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("Less", o)
		}
	});
	var fa = fn({
		lessEqual_: function(e, t) {
			var n, r = ln(e, "a", "lessEqual", "string_or_numeric"),
				a = ln(t, "b", "lessEqual", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("LessEqual", o)
		}
	});
	var ma = fn({
		localResponseNormalization_: function(e, t, n, r, a) {
			void 0 === t && (t = 5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 ===
				a && (a = .5);
			var o = ln(e, "x", "localResponseNormalization");
			ie(4 === o.rank || 3 === o.rank, (function() {
				return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "
					.concat(o.rank, ".")
			})), ie(de(t), (function() {
				return "Error in localResponseNormalization: depthRadius must be an " +
					"integer but got depthRadius ".concat(t, ".")
			}));
			var s = o,
				i = !1;
			3 === o.rank && (i = !0, s = Vn(o, [1, o.shape[0], o.shape[1], o.shape[2]]));
			var u = {
					x: s
				},
				c = {
					depthRadius: t,
					bias: n,
					alpha: r,
					beta: a
				},
				p = on.runKernel("LRN", u, c);
			return i ? Vn(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
		}
	});
	var ya = fn({
		log_: function(e) {
			var t = {
				x: ln(e, "x", "log", "float32")
			};
			return on.runKernel("Log", t)
		}
	});
	var va = fn({
		log1p_: function(e) {
			var t = {
				x: ln(e, "x", "log1p")
			};
			return on.runKernel("Log1p", t)
		}
	});

	function ga(e) {
		return on.customGrad(e)
	}
	var ba = fn({
		neg_: function(e) {
			var t = {
				x: ln(e, "x", "neg")
			};
			return on.runKernel("Neg", t)
		}
	});
	var xa = fn({
		softplus_: function(e) {
			var t = {
				x: ln(e, "x", "softplus")
			};
			return on.runKernel("Softplus", t)
		}
	});
	var Na = fn({
		logSigmoid_: function(e) {
			var t = ln(e, "x", "logSigmoid"),
				n = ga((function(e) {
					return {
						value: ba(xa(ba(e))),
						gradFunc: function(t) {
							return Un(t, Wn(ba(e)))
						}
					}
				}));
			return n(t)
		}
	});
	var wa = fn({
		sub_: function(e, t) {
			var n, r = ln(e, "a", "sub"),
				a = ln(t, "b", "sub"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Sub", o)
		}
	});
	var ka = fn({
		logSoftmax_: function(e, t) {
			void 0 === t && (t = -1);
			var n = ln(e, "logits", "logSoftmax");
			if (-1 === t && (t = n.rank - 1), t !== n.rank - 1) throw Error(
				"Log Softmax along a non-last dimension is not yet supported. " +
				"Logits was rank ".concat(n.rank, " and axis was ").concat(t));
			var r = ga((function(e, n) {
				var r = jr(e, t, !0),
					a = wa(e, r),
					o = wa(On(a, "float32"), ya(Qr($r(a), t, !0)));
				n([o]);
				return {
					value: o,
					gradFunc: function(e, n) {
						var r = d(n, 1)[0],
							a = $r(r);
						return wa(e, Un(Qr(e, t, !0), a))
					}
				}
			}));
			return r(n)
		}
	});
	var Ta = fn({
		logSumExp_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = ln(e, "x", "logSumExp"),
				a = fe(t, r.shape),
				o = jr(r, a, !0),
				s = wa(r, o),
				i = $r(s),
				u = Qr(i, a),
				c = ya(u),
				p = gn(Vn(o, c.shape), c);
			if (n) {
				var l = Kr(p.shape, a);
				return Vn(p, l)
			}
			return p
		}
	});
	var Sa = fn({
		logicalAnd_: function(e, t) {
			var n = ln(e, "a", "logicalAnd", "bool"),
				r = ln(t, "b", "logicalAnd", "bool");
			Dr(n.shape, r.shape);
			var a = {
				a: n,
				b: r
			};
			return on.runKernel("LogicalAnd", a)
		}
	});
	var _a = fn({
		logicalNot_: function(e) {
			var t = {
				x: ln(e, "x", "logicalNot", "bool")
			};
			return on.runKernel("LogicalNot", t)
		}
	});
	var Ea = fn({
		logicalOr_: function(e, t) {
			var n = ln(e, "a", "logicalOr", "bool"),
				r = ln(t, "b", "logicalOr", "bool");
			Dr(n.shape, r.shape);
			var a = {
				a: n,
				b: r
			};
			return on.runKernel("LogicalOr", a)
		}
	});
	var Ia = fn({
			logicalXor_: function(e, t) {
				var n = ln(e, "a", "logicalXor", "bool"),
					r = ln(t, "b", "logicalXor", "bool");
				return Dr(n.shape, r.shape), Sa(Ea(e, t), _a(Sa(e, t)))
			}
		}),
		Oa = 2147483648;
	var Aa = fn({
		searchSorted_: function(e, t, n) {
			void 0 === n && (n = "left");
			var r = ln(e, "sortedSequence", "searchSorted"),
				a = ln(t, "values", "searchSorted"),
				o = r.shape[r.shape.length - 1],
				s = a.shape[a.shape.length - 1],
				i = Vn(r, [-1, o]),
				u = Vn(a, [-1, s]);
			if (i.rank < 2) throw new Error("Sorted input argument must be at least 2-dimensional");
			if (i.shape[0] !== u.shape[0]) throw new Error(
				"Leading dimension of 'sortedSequence' and 'values' must match.");
			if (pe(u.shape) >= Oa) throw new Error("values tensor size must less than ".concat(Oa));
			if (i.shape[1] >= Oa) throw new Error("trailing dim_size must less than ".concat(Oa,
				" for int32 output type, was ").concat(i.shape[1]));
			var c = {
					sortedSequence: i,
					values: u
				},
				p = {
					side: n
				};
			return on.runKernel("SearchSorted", c, p)
		}
	});
	var Da = fn({
		maxPool_: function(e, t, n, r, a) {
			var o = ln(e, "x", "maxPool"),
				s = o,
				i = !1;
			3 === o.rank && (i = !0, s = Vn(o, [1, o.shape[0], o.shape[1], o.shape[2]])), ie(4 === s
				.rank, (function() {
					return "Error in maxPool: input must be rank 4 but got rank ".concat(s
						.rank, ".")
				})), ie(Rn(n, 1), (function() {
				return "Error in maxPool: Either strides or dilations must be 1. " +
					"Got strides ".concat(n, " and dilations '").concat(1, "'")
			})), Ln("maxPool", r, a);
			var u = {
					x: s
				},
				c = {
					filterSize: t,
					strides: n,
					pad: r,
					dimRoundingMode: a
				},
				p = on.runKernel("MaxPool", u, c);
			return i ? Vn(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
		}
	});
	var Ma = fn({
		maxPool3d_: function(e, t, n, r, a, o) {
			void 0 === t && (t = [1, 1, 1]), void 0 === o && (o = "NDHWC");
			var s = ln(e, "x", "maxPool3d"),
				i = s,
				u = !1;
			4 === s.rank && (u = !0, i = Vn(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[
				3]])), ie(5 === i.rank, (function() {
				return "Error in maxPool3d: x must be rank 5 but got rank ".concat(i
					.rank, ".")
			})), ie("NDHWC" === o, (function() {
				return "Error in maxPool3d: Only NDHWC is currently supported, " +
					"but got dataFormat of ".concat(o)
			})), Ln("maxPool3d", r, a);
			var c = {
					x: i
				},
				p = {
					filterSize: t,
					strides: n,
					pad: r,
					dimRoundingMode: a,
					dataFormat: o
				},
				l = on.runKernel("MaxPool3D", c, p);
			return u ? Vn(l, [l.shape[1], l.shape[2], l.shape[3], l.shape[4]]) : l
		}
	});
	var Ca = fn({
		maxPoolWithArgmax_: function(e, t, n, r, a) {
			void 0 === a && (a = !1);
			var o = {
					x: ln(e, "x", "maxPoolWithArgmax")
				},
				s = {
					filterSize: t,
					strides: n,
					pad: r,
					includeBatchInIndex: a
				},
				i = on.runKernel("MaxPoolWithArgmax", o, s);
			return {
				result: i[0],
				indexes: i[1]
			}
		}
	});
	var Fa = fn({
		maximum_: function(e, t) {
			var n, r = ln(e, "a", "maximum"),
				a = ln(t, "b", "maximum");
			r = (n = d($t(r, a), 2))[0], a = n[1], "bool" === r.dtype && (r = On(r, "int32"), a =
				On(a, "int32")), Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("Maximum", o)
		}
	});
	var Ra = fn({
		mean_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = {
					x: ln(e, "x", "mean")
				},
				a = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("Mean", r, a)
		}
	});

	function za(e, t) {
		if (void 0 === t && (t = "float32"), Se(e), "complex64" === t) {
			var n = za(e, "float32"),
				r = za(e, "float32");
			return ur(n, r)
		}
		var a = Te(pe(e), t);
		return on.makeTensor(a, e, t)
	}

	function La(e, t) {
		if (void 0 === t && (t = "float32"), Se(e), "complex64" === t) {
			var n = La(e, "float32"),
				r = za(e, "float32");
			return ur(n, r)
		}
		var a = ke(pe(e), t);
		return on.makeTensor(a, e, t)
	}
	var Va = fn({
		minimum_: function(e, t) {
			var n, r = ln(e, "a", "minimum"),
				a = ln(t, "b", "minimum");
			r = (n = d($t(r, a), 2))[0], a = n[1], "bool" === r.dtype && (r = On(r, "int32"), a =
				On(a, "int32")), Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("Minimum", o)
		}
	});
	var Pa = fn({
		mirrorPad_: function(e, t, n) {
			ie("reflect" === n || "symmetric" === n, (function() {
				return "Invalid mode. Mode must be either reflect or symmetric. " +
					"Got ".concat(n, ".")
			}));
			var r = ln(e, "x", "mirrorPad");
			if (0 === r.rank) throw new Error(
				"mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");
			ie(t.length === r.rank, (function() {
				return "Padding doesn't match input. Must be ".concat(r.rank, ". ") +
					"Got ".concat(t.length, ".")
			}));
			for (var a = "reflect" === n ? 1 : 0, o = function(e) {
					ie(2 === t[e].length, (function() {
						return "Invalid number of paddings. Must be length of 2 each."
					})), ie(t[e][0] >= 0 && t[e][0] <= r.shape[e] - a && t[e][1] >= 0 && t[
						e][1] <= r.shape[e] - a, (function() {
						return "Padding in dimension ".concat(e,
								" cannot be greater than or equal ") + "to ".concat(
								r.shape[e] - a, " or less than 0 for input of ") +
							"shape ".concat(r.shape)
					}))
				}, s = 0; s < r.rank; s++) o(s);
			var i = {
					paddings: t,
					mode: n
				},
				u = {
					x: r
				};
			return on.runKernel("MirrorPad", u, i)
		}
	});
	var Ba = fn({
		mod_: function(e, t) {
			var n, r = ln(e, "a", "mod"),
				a = ln(t, "b", "mod"),
				o = {
					a: r = (n = d($t(r, a), 2))[0],
					b: a = n[1]
				};
			return on.runKernel("Mod", o)
		}
	});
	var Ka = fn({
		moments_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = fe(t, (e = ln(e, "x", "moments")).shape),
				a = Ra(e, r, n),
				o = a.shape;
			n || (o = Kr(a.shape, r));
			var s = Zr(wa(On(e, "float32"), Vn(a, o)));
			return {
				mean: a,
				variance: Ra(s, r, n)
			}
		}
	});
	var ja = fn({
		multiRNNCell_: function(e, t, n, r) {
			for (var a = ln(t, "data", "multiRNNCell"), o = dn(n, "c", "multiRNNCell"), s = dn(r,
					"h", "multiRNNCell"), i = a, u = [], c = 0; c < e.length; c++) {
				var p = e[c](i, o[c], s[c]);
				u.push(p[0]), u.push(p[1]), i = p[1]
			}
			var l = [],
				d = [];
			for (c = 0; c < u.length; c += 2) l.push(u[c]), d.push(u[c + 1]);
			return [l, d]
		}
	});
	var qa = fn({
		multinomial_: function(e, t, n, r) {
			void 0 === r && (r = !1);
			var a = ln(e, "logits", "multinomial"),
				o = a.size,
				s = a.rank;
			if (o < 2) throw new Error(
				"Error in multinomial: you need at least 2 outcomes, but got " + "".concat(
					o, "."));
			if (s > 2) throw new Error("Rank of probabilities must be 1 or 2, but is ".concat(s));
			n = n || Math.random();
			var i = {
					logits: 1 === s ? Vn(a, [1, -1]) : a
				},
				u = {
					numSamples: t,
					seed: n,
					normalized: r
				},
				c = on.runKernel("Multinomial", i, u);
			return 1 === s ? Vn(c, [c.size]) : c
		}
	});
	var Ua = fn({
		notEqual_: function(e, t) {
			var n, r = ln(e, "a", "notEqual", "string_or_numeric"),
				a = ln(t, "b", "notEqual", "string_or_numeric");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("NotEqual", o)
		}
	});
	var Wa = fn({
		oneHot_: function(e, t, n, r, a) {
			if (void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === a && (a = "int32"), t <
				2) throw new Error("Error in oneHot: depth must be >=2, but it is ".concat(t));
			var o = {
					indices: ln(e, "indices", "oneHot", "int32")
				},
				s = {
					dtype: a,
					depth: t,
					onValue: n,
					offValue: r
				};
			return on.runKernel("OneHot", o, s)
		}
	});
	var Ga = fn({
		onesLike_: function(e) {
			var t = {
				x: ln(e, "x", "onesLike")
			};
			return on.runKernel("OnesLike", t)
		}
	});
	var Ha = fn({
		outerProduct_: function(e, t) {
			var n = ln(e, "v1", "outerProduct"),
				r = ln(t, "v2", "outerProduct");
			ie(1 === n.rank && 1 === r.rank, (function() {
				return "Error in outerProduct: inputs must be rank 1, but got ranks " +
					"".concat(n.rank, " and ").concat(r.rank, ".")
			}));
			var a = Vn(n, [-1, 1]),
				o = Vn(r, [1, -1]);
			return qn(a, o)
		}
	});
	var Za = fn({
		pad_: function(e, t, n) {
			void 0 === n && (n = 0);
			var r = ln(e, "x", "pad");
			if (0 === r.rank) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
			var a = {
					paddings: t,
					constantValue: n
				},
				o = {
					x: r
				};
			return on.runKernel("PadV2", o, a)
		}
	});
	var Qa = fn({
		pad1d_: function(e, t, n) {
			return void 0 === n && (n = 0), ie(2 === t.length, (function() {
				return "Invalid number of paddings. Must be length of 2."
			})), Za(e, [t], n)
		}
	});
	var Xa = fn({
		pad2d_: function(e, t, n) {
			return void 0 === n && (n = 0), ie(2 === t.length && 2 === t[0].length && 2 === t[1]
				.length, (function() {
					return "Invalid number of paddings. Must be length of 2 each."
				})), Za(e, t, n)
		}
	});
	var Ya = fn({
		pad3d_: function(e, t, n) {
			return void 0 === n && (n = 0), ie(3 === t.length && 2 === t[0].length && 2 === t[1]
				.length && 2 === t[2].length, (function() {
					return "Invalid number of paddings. Must be length of 2 each."
				})), Za(e, t, n)
		}
	});
	var Ja = fn({
		pad4d_: function(e, t, n) {
			return void 0 === n && (n = 0), ie(4 === t.length && 2 === t[0].length && 2 === t[1]
				.length && 2 === t[2].length && 2 === t[3].length, (function() {
					return "Invalid number of paddings. Must be length of 2 each."
				})), Za(e, t, n)
		}
	});
	var $a = fn({
		spaceToBatchND_: function(e, t, n) {
			var r = ln(e, "x", "spaceToBatchND");
			ie(r.rank >= 1 + t.length, (function() {
				return "input rank ".concat(r.rank, " should be > than [blockShape] ")
					.concat(t.length)
			})), ie(n.length === t.length, (function() {
				return "paddings.shape[0] ".concat(n.length,
					" must be equal to [blockShape] ").concat(t.length)
			})), ie(r.shape.reduce((function(e, r, a) {
				return a > 0 && a <= t.length ? e && (r + n[a - 1][0] + n[a - 1][
					1
				]) % t[a - 1] == 0 : e
			}), !0), (function() {
				return "input spatial dimensions ".concat(r.shape.slice(1),
					" with paddings ").concat(n.toString(),
					" must be divisible by blockShapes ").concat(t.toString())
			}));
			var a = {
					x: r
				},
				o = {
					blockShape: t,
					paddings: n
				};
			return on.runKernel("SpaceToBatchND", a, o)
		}
	});
	var eo = fn({
		pool_: function(e, t, n, r, a, o, s) {
			null == a && (a = [1, 1]), null == o && (o = 1), 0 === r && (r = "valid");
			var i = ln(e, "x", "maxPool"),
				u = i,
				c = !1;
			3 === i.rank && (c = !0, u = Vn(i, [1, i.shape[0], i.shape[1], i.shape[2]])), ie(Rn(o,
				a), (function() {
				return "Error in pool: Either strides or dilations must be 1. " +
					"Got strides ".concat(o, " and dilations '").concat(a, "'")
			}));
			var p, l = function(e, t, n, r, a, o, s) {
					void 0 === s && (s = "channelsLast");
					var i, u = d(Dn(t), 2),
						c = u[0],
						p = u[1];
					if ("channelsLast" === s) i = [c, p, e[3], e[3]];
					else {
						if ("channelsFirst" !== s) throw new Error("Unknown dataFormat ".concat(s));
						i = [c, p, e[1], e[1]]
					}
					return An(e, i, n, r, a, o, !1, s)
				}(u.shape, t, o, a, r),
				h = [l.dilationHeight, l.dilationWidth];
			p = "same" === r ? function(e, t) {
				var n = e.map((function(e, n) {
						return e + (e - 1) * (t[n] - 1)
					})).map((function(e) {
						return e - 1
					})),
					r = n.map((function(e) {
						return Math.floor(e / 2)
					})),
					a = n.map((function(e, t) {
						return e - r[t]
					}));
				return n.map((function(e, t) {
					return [r[t], a[t]]
				}))
			}([l.filterHeight, l.filterWidth], h) : [
				[0, 0],
				[0, 0]
			];
			var f = 1 === h[0] && 1 === h[1],
				m = d(function(e, t, n) {
					var r = n.map((function(e) {
							return e[0]
						})),
						a = n.map((function(e) {
							return e[1]
						})),
						o = e.concat(r, a),
						s = t.map((function(e, t) {
							return (e - o[t] % e) % e
						})),
						i = a.map((function(e, t) {
							return e + s[t]
						})),
						u = t.map((function(e, t) {
							return [r[t], i[t]]
						})),
						c = t.map((function(e, t) {
							return [0, s[t]]
						}));
					return [u, c]
				}([l.inHeight, l.inWidth], h, p), 2),
				y = m[0],
				v = m[1],
				g = f ? r : "valid",
				b = f ? u : $a(u, h, y),
				x = ("avg" === n ? function() {
					return Pn(b, t, o, g, s)
				} : function() {
					return Da(b, t, o, g, s)
				})(),
				N = f ? x : Qn(x, h, v);
			return c ? Vn(N, [N.shape[1], N.shape[2], N.shape[3]]) : N
		}
	});
	var to = fn({
		prelu_: function(e, t) {
			var n = {
				x: ln(e, "x", "prelu"),
				alpha: ln(t, "alpha", "prelu")
			};
			return on.runKernel("Prelu", n)
		}
	});
	var no = fn({
		prod_: function(e, t, n) {
			void 0 === t && (t = null), void 0 === n && (n = !1);
			var r = ln(e, "x", "prod");
			"bool" === r.dtype && (r = On(r, "int32"));
			var a = {
					x: r
				},
				o = {
					axis: t,
					keepDims: n
				};
			return on.runKernel("Prod", a, o)
		}
	});
	var ro = fn({
		raggedGather_: function(e, t, n, r) {
			var a = {
					paramsNestedSplits: e.map((function(e, t) {
						return ln(e, "tensors".concat(t), "raggedGather", "int32")
					})),
					paramsDenseValues: ln(t, "paramsDenseValues", "raggedGather"),
					indices: ln(n, "indices", "raggedGather", "int32")
				},
				o = {
					outputRaggedRank: r
				},
				s = on.runKernel("RaggedGather", a, o);
			return {
				outputNestedSplits: s.slice(0, s.length - 1),
				outputDenseValues: s[s.length - 1]
			}
		}
	});
	var ao = fn({
		raggedRange_: function(e, t, n) {
			var r = ln(e, "starts", "raggedRange"),
				a = {
					starts: r,
					limits: ln(t, "limits", "raggedRange", r.dtype),
					deltas: ln(n, "deltas", "raggedRange", r.dtype)
				},
				o = on.runKernel("RaggedRange", a);
			return {
				rtNestedSplits: o[0],
				rtDenseValues: o[1]
			}
		}
	});
	var oo = fn({
		raggedTensorToTensor_: function(e, t, n, r, a) {
			var o = ln(e, "shape", "raggedTensorToTensor", "int32"),
				s = ln(t, "values", "raggedTensorToTensor"),
				i = {
					shape: o,
					values: s,
					defaultValue: ln(n, "defaultValue", "raggedTensorToTensor", s.dtype),
					rowPartitionTensors: r.map((function(e, t) {
						return ln(e, "tensors".concat(t), "raggedTensorToTensor",
							"int32")
					}))
				},
				u = {
					rowPartitionTypes: a
				};
			return on.runKernel("RaggedTensorToTensor", i, u)
		}
	});
	var so = fn({
			rand_: function(e, t, n) {
				Se(e);
				var r = pe(e),
					a = null;
				if (null == n || "float32" === n) a = new Float32Array(r);
				else if ("int32" === n) a = new Int32Array(r);
				else {
					if ("bool" !== n) throw new Error("Unknown data type ".concat(n));
					a = new Uint8Array(r)
				}
				for (var o = 0; o < r; o++) a[o] = t();
				return on.makeTensor(a, e, n)
			}
		}),
		io = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t, n = this,
					r = (t = 4022871197, function(e) {
						e = String(e);
						for (var n = 0; n < e.length; n++) {
							var r = .02519603282416938 * (t += e.charCodeAt(n));
							r -= t = r >>> 0, t = (r *= t) >>> 0, t += 4294967296 * (r -= t)
						}
						return 2.3283064365386963e-10 * (t >>> 0)
					});
				n.next = function() {
						var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
						return n.s0 = n.s1, n.s1 = n.s2, n.s2 = e - (n.c = 0 | e)
					}, n.c = 1, n.s0 = r(" "), n.s1 = r(" "), n.s2 = r(" "), n.s0 -= r(e), n.s0 < 0 && (n.s0 +=
						1), n.s1 -= r(e), n.s1 < 0 && (n.s1 += 1), n.s2 -= r(e), n.s2 < 0 && (n.s2 += 1), r =
					null
			}

			function a(e, t) {
				return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t
			}

			function o(e, t) {
				var n = new r(e),
					o = t && t.state,
					s = n.next;
				return s.int32 = function() {
					return 4294967296 * n.next() | 0
				}, s.double = function() {
					return s() + 11102230246251565e-32 * (2097152 * s() | 0)
				}, s.quick = s, o && ("object" == typeof o && a(o, n), s.state = function() {
					return a(n, {})
				}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.alea = o
		}(0, e, !1)
	}(io);
	var uo = io.exports,
		co = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t = this,
					n = "";
				t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function() {
					var e = t.x ^ t.x << 11;
					return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^ e >>> 8
				}, e === (0 | e) ? t.x = e : n += e;
				for (var r = 0; r < n.length + 64; r++) t.x ^= 0 | n.charCodeAt(r), t.next()
			}

			function a(e, t) {
				return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t
			}

			function o(e, t) {
				var n = new r(e),
					o = t && t.state,
					s = function() {
						return (n.next() >>> 0) / 4294967296
					};
				return s.double = function() {
					do {
						var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === e);
					return e
				}, s.int32 = n.next, s.quick = s, o && ("object" == typeof o && a(o, n), s.state =
					function() {
						return a(n, {})
					}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.xor128 = o
		}(0, e, !1)
	}(co);
	var po = co.exports,
		lo = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t = this,
					n = "";
				t.next = function() {
					var e = t.x ^ t.x >>> 2;
					return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t
						.v ^ t.v << 4 ^ e ^ e << 1) | 0
				}, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (0 | e) ? t.x = e : n += e;
				for (var r = 0; r < n.length + 64; r++) t.x ^= 0 | n.charCodeAt(r), r == n.length && (t.d = t
					.x << 10 ^ t.x >>> 4), t.next()
			}

			function a(e, t) {
				return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t
			}

			function o(e, t) {
				var n = new r(e),
					o = t && t.state,
					s = function() {
						return (n.next() >>> 0) / 4294967296
					};
				return s.double = function() {
					do {
						var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === e);
					return e
				}, s.int32 = n.next, s.quick = s, o && ("object" == typeof o && a(o, n), s.state =
					function() {
						return a(n, {})
					}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.xorwow = o
		}(0, e, !1)
	}(lo);
	var ho = lo.exports,
		fo = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t = this;
				t.next = function() {
						var e, n, r = t.x,
							a = t.i;
						return e = r[a], n = (e ^= e >>> 7) ^ e << 24, n ^= (e = r[a + 1 & 7]) ^ e >>> 10, n ^=
							(e = r[a + 3 & 7]) ^ e >>> 3, n ^= (e = r[a + 4 & 7]) ^ e << 7, e = r[a + 7 & 7],
							n ^= (e ^= e << 13) ^ e << 9, r[a] = n, t.i = a + 1 & 7, n
					},
					function(e, t) {
						var n, r = [];
						if (t === (0 | t)) r[0] = t;
						else
							for (t = "" + t, n = 0; n < t.length; ++n) r[7 & n] = r[7 & n] << 15 ^ t.charCodeAt(
								n) + r[n + 1 & 7] << 13;
						for (; r.length < 8;) r.push(0);
						for (n = 0; n < 8 && 0 === r[n]; ++n);
						for (8 == n ? r[7] = -1 : r[n], e.x = r, e.i = 0, n = 256; n > 0; --n) e.next()
					}(t, e)
			}

			function a(e, t) {
				return t.x = e.x.slice(), t.i = e.i, t
			}

			function o(e, t) {
				null == e && (e = +new Date);
				var n = new r(e),
					o = t && t.state,
					s = function() {
						return (n.next() >>> 0) / 4294967296
					};
				return s.double = function() {
					do {
						var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === e);
					return e
				}, s.int32 = n.next, s.quick = s, o && (o.x && a(o, n), s.state = function() {
					return a(n, {})
				}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.xorshift7 = o
		}(0, e, !1)
	}(fo);
	var mo = fo.exports,
		yo = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t = this;
				t.next = function() {
						var e, n, r = t.w,
							a = t.X,
							o = t.i;
						return t.w = r = r + 1640531527 | 0, n = a[o + 34 & 127], e = a[o = o + 1 & 127], n ^=
							n << 13, e ^= e << 17, n ^= n >>> 15, e ^= e >>> 12, n = a[o] = n ^ e, t.i = o, n +
							(r ^ r >>> 16) | 0
					},
					function(e, t) {
						var n, r, a, o, s, i = [],
							u = 128;
						for (t === (0 | t) ? (r = t, t = null) : (t += "\0", r = 0, u = Math.max(u, t.length)),
							a = 0, o = -32; o < u; ++o) t && (r ^= t.charCodeAt((o + 32) % t.length)), 0 ===
							o && (s = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, o >= 0 && (
								s = s + 1640531527 | 0, a = 0 == (n = i[127 & o] ^= r + s) ? a + 1 : 0);
						for (a >= 128 && (i[127 & (t && t.length || 0)] = -1), a = 127, o = 512; o > 0; --o) r =
							i[a + 34 & 127], n = i[a = a + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15,
							n ^= n >>> 12, i[a] = r ^ n;
						e.w = s, e.X = i, e.i = a
					}(t, e)
			}

			function a(e, t) {
				return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t
			}

			function o(e, t) {
				null == e && (e = +new Date);
				var n = new r(e),
					o = t && t.state,
					s = function() {
						return (n.next() >>> 0) / 4294967296
					};
				return s.double = function() {
					do {
						var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === e);
					return e
				}, s.int32 = n.next, s.quick = s, o && (o.X && a(o, n), s.state = function() {
					return a(n, {})
				}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.xor4096 = o
		}(0, e, !1)
	}(yo);
	var vo = yo.exports,
		go = {
			exports: {}
		};
	! function(e) {
		! function(e, t, n) {
			function r(e) {
				var t = this,
					n = "";
				t.next = function() {
					var e = t.b,
						n = t.c,
						r = t.d,
						a = t.a;
					return e = e << 25 ^ e >>> 7 ^ n, n = n - r | 0, r = r << 24 ^ r >>> 8 ^ a, a = a - e |
						0, t.b = e = e << 20 ^ e >>> 12 ^ n, t.c = n = n - r | 0, t.d = r << 16 ^ n >>> 16 ^
						a, t.a = a - e | 0
				}, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math.floor(e) ? (t.a = e /
					4294967296 | 0, t.b = 0 | e) : n += e;
				for (var r = 0; r < n.length + 20; r++) t.b ^= 0 | n.charCodeAt(r), t.next()
			}

			function a(e, t) {
				return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t
			}

			function o(e, t) {
				var n = new r(e),
					o = t && t.state,
					s = function() {
						return (n.next() >>> 0) / 4294967296
					};
				return s.double = function() {
					do {
						var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === e);
					return e
				}, s.int32 = n.next, s.quick = s, o && ("object" == typeof o && a(o, n), s.state =
					function() {
						return a(n, {})
					}), s
			}
			t && t.exports ? t.exports = o : n && n.amd ? n((function() {
				return o
			})) : this.tychei = o
		}(0, e, !1)
	}(go);
	var bo = go.exports,
		xo = {
			exports: {}
		},
		No = Je({
			__proto__: null,
			default: {}
		});
	! function(e) {
		! function(t, n, r) {
			var a, o = 256,
				s = r.pow(o, 6),
				i = r.pow(2, 52),
				u = 2 * i,
				c = 255;

			function p(e, c, p) {
				var y = [],
					v = f(h((c = 1 == c ? {
						entropy: !0
					} : c || {}).entropy ? [e, m(n)] : null == e ? function() {
						try {
							var e;
							return a && (e = a.randomBytes) ? e = e(o) : (e = new Uint8Array(o), (t
								.crypto || t.msCrypto).getRandomValues(e)), m(e)
						} catch (e) {
							var r = t.navigator,
								s = r && r.plugins;
							return [+new Date, t, s, t.screen, m(n)]
						}
					}() : e, 3), y),
					g = new l(y),
					b = function() {
						for (var e = g.g(6), t = s, n = 0; e < i;) e = (e + n) * o, t *= o, n = g.g(1);
						for (; e >= u;) e /= 2, t /= 2, n >>>= 1;
						return (e + n) / t
					};
				return b.int32 = function() {
					return 0 | g.g(4)
				}, b.quick = function() {
					return g.g(4) / 4294967296
				}, b.double = b, f(m(g.S), n), (c.pass || p || function(e, t, n, a) {
					return a && (a.S && d(a, g), e.state = function() {
						return d(g, {})
					}), n ? (r.random = e, t) : e
				})(b, v, "global" in c ? c.global : this == r, c.state)
			}

			function l(e) {
				var t, n = e.length,
					r = this,
					a = 0,
					s = r.i = r.j = 0,
					i = r.S = [];
				for (n || (e = [n++]); a < o;) i[a] = a++;
				for (a = 0; a < o; a++) i[a] = i[s = c & s + e[a % n] + (t = i[a])], i[s] = t;
				(r.g = function(e) {
					for (var t, n = 0, a = r.i, s = r.j, i = r.S; e--;) t = i[a = c & a + 1], n = n * o + i[
						c & (i[a] = i[s = c & s + t]) + (i[s] = t)];
					return r.i = a, r.j = s, n
				})(o)
			}

			function d(e, t) {
				return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
			}

			function h(e, t) {
				var n, r = [],
					a = typeof e;
				if (t && "object" == a)
					for (n in e) try {
						r.push(h(e[n], t - 1))
					} catch (e) {}
				return r.length ? r : "string" == a ? e : e + "\0"
			}

			function f(e, t) {
				for (var n, r = e + "", a = 0; a < r.length;) t[c & a] = c & (n ^= 19 * t[c & a]) + r
					.charCodeAt(a++);
				return m(t)
			}

			function m(e) {
				return String.fromCharCode.apply(0, e)
			}
			if (f(r.random(), n), e.exports) {
				e.exports = p;
				try {
					a = No
				} catch (e) {}
			} else r.seedrandom = p
		}("undefined" != typeof self ? self : Xe, [], Math)
	}(xo);
	var wo = uo,
		ko = po,
		To = ho,
		So = mo,
		_o = vo,
		Eo = bo,
		Io = xo.exports;
	Io.alea = wo, Io.xor128 = ko, Io.xorwow = To, Io.xorshift7 = So, Io.xor4096 = _o, Io.tychei = Eo;
	var Oo = Io,
		Ao = function() {
			function e(e, t, n, r, a) {
				this.mean = e, this.stdDev = t, this.dtype = n, this.nextVal = NaN, this.truncated = r, this
					.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this
						.stdDev);
				var o = a || Math.random();
				this.random = Oo.alea(o.toString())
			}
			return e.prototype.nextValue = function() {
				if (!isNaN(this.nextVal)) {
					var e = this.nextVal;
					return this.nextVal = NaN, e
				}
				for (var t, n, r = !1; !r;) {
					var a = void 0,
						o = void 0,
						s = void 0;
					do {
						s = (a = 2 * this.random() - 1) * a + (o = 2 * this.random() - 1) * o
					} while (s >= 1 || 0 === s);
					var i = Math.sqrt(-2 * Math.log(s) / s);
					t = this.mean + this.stdDev * a * i, n = this.mean + this.stdDev * o * i, this
						.truncated && !this.isValidTruncated(t) || (r = !0)
				}
				return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)),
					this.convertValue(t)
			}, e.prototype.convertValue = function(e) {
				return null == this.dtype || "float32" === this.dtype ? e : Math.round(e)
			}, e.prototype.isValidTruncated = function(e) {
				return e <= this.upper && e >= this.lower
			}, e
		}(),
		Do = function() {
			function e(e, t, n, r) {
				this.alpha = e, this.beta = 1 / t, this.dtype = n;
				var a = r || Math.random();
				this.randu = Oo.alea(a.toString()), this.randn = new Ao(0, 1, n, !1, this.randu()), this.d = e <
					1 ? e + 2 / 3 : e - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d)
			}
			return e.prototype.nextValue = function() {
				for (var e, t, n, r, a, o;;) {
					do {
						r = this.randn.nextValue(), o = 1 + this.c * r
					} while (o <= 0);
					if (o *= o * o, t = 1 - .331 * (e = r * r) * e, n = .5 * e + this.d * (1 - o + Math.log(
							o)), (a = this.randu()) < t || Math.log(a) < n) break
				}
				return o = 1 / this.beta * this.d * o, this.alpha < 1 && (o *= Math.pow(this.randu(), 1 /
					this.alpha)), this.convertValue(o)
			}, e.prototype.convertValue = function(e) {
				return "float32" === this.dtype ? e : Math.round(e)
			}, e
		}(),
		Mo = function() {
			function e(e, t, n, r) {
				void 0 === e && (e = 0), void 0 === t && (t = 1);
				var a = this;
				if (this.canReturnFloat = function() {
						return null == a.dtype || "float32" === a.dtype
					}, this.min = e, this.range = t - e, this.dtype = n, null == r && (r = Math.random()),
					"number" == typeof r && (r = r.toString()), !this.canReturnFloat() && this.range <= 1)
					throw new Error("The difference between ".concat(e, " - ").concat(t,
						" <= 1 and dtype is not float"));
				this.random = Oo.alea(r)
			}
			return e.prototype.convertValue = function(e) {
				return this.canReturnFloat() ? e : Math.round(e)
			}, e.prototype.nextValue = function() {
				return this.convertValue(this.min + this.range * this.random())
			}, e
		}();
	var Co = fn({
		randomGamma_: function(e, t, n, r, a) {
			if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), Se(e), null == n && (n =
					1), null == r && (r = "float32"), "float32" !== r && "int32" !== r)
				throw new Error("Unsupported data type ".concat(r));
			for (var o = new Do(t, n, r, a), s = ar(e, r), i = 0; i < s.values.length; i++) s
				.values[i] = o.nextValue();
			return s.toTensor()
		}
	});
	var Fo = fn({
		randomNormal_: function(e, t, n, r, a) {
			if (void 0 === t && (t = 0), void 0 === n && (n = 1), Se(e), null != r && "bool" === r)
				throw new Error("Unsupported data type ".concat(r));
			for (var o = new Ao(t, n, r, !1, a), s = ar(e, r), i = 0; i < s.values.length; i++) s
				.values[i] = o.nextValue();
			return s.toTensor()
		}
	});
	var Ro = fn({
		randomStandardNormal_: function(e, t, n) {
			if (null != t && "bool" === t) throw new Error("Unsupported data type ".concat(t));
			return Fo(e, 0, 1, t, n)
		}
	});
	var zo = fn({
		randomUniform_: function(e, t, n, r, a) {
			void 0 === t && (t = 0), void 0 === n && (n = 1), void 0 === r && (r = "float32"), Se(
				e);
			for (var o = ar(e, r), s = new Mo(t, n, null, a), i = 0; i < o.values.length; i++) o
				.values[i] = s.nextValue();
			return o.toTensor()
		}
	});
	var Lo = fn({
		randomUniformInt_: function(e, t, n, r) {
			return zo(e, t, n, "int32", r)
		}
	});

	function Vo(e, t, n, r) {
		if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), 0 === n) throw new Error(
			"Cannot have a step of zero");
		var a = {
			start: e,
			stop: t,
			step: n,
			dtype: r
		};
		return on.runKernel("Range", {}, a)
	}
	var Po = fn({
		real_: function(e) {
			var t = {
				input: ln(e, "input", "real")
			};
			return on.runKernel("Real", t)
		}
	});
	var Bo = fn({
		reciprocal_: function(e) {
			var t = {
				x: ln(e, "x", "reciprocal")
			};
			return on.runKernel("Reciprocal", t)
		}
	});
	var Ko = fn({
		relu_: function(e) {
			var t = {
				x: ln(e, "x", "relu")
			};
			return on.runKernel("Relu", t)
		}
	});
	var jo = fn({
		relu6_: function(e) {
			var t = {
				x: ln(e, "x", "relu6")
			};
			return on.runKernel("Relu6", t)
		}
	});
	var qo = fn({
		reverse_: function(e, t) {
			var n = {
					x: ln(e, "x", "reverse")
				},
				r = {
					dims: t
				};
			return on.runKernel("Reverse", n, r)
		}
	});
	var Uo = fn({
		reverse1d_: function(e) {
			var t = ln(e, "x", "reverse");
			return ie(1 === t.rank, (function() {
				return "Error in reverse1D: x must be rank 1 but got rank ".concat(t
					.rank, ".")
			})), qo(t, 0)
		}
	});
	var Wo = fn({
		reverse2d_: function(e, t) {
			var n = ln(e, "x", "reverse");
			return ie(2 === n.rank, (function() {
				return "Error in reverse2D: x must be rank 2 but got rank ".concat(n
					.rank, ".")
			})), qo(n, t)
		}
	});
	var Go = fn({
		reverse3d_: function(e, t) {
			var n = ln(e, "x", "reverse");
			return ie(3 === n.rank, (function() {
				return "Error in reverse3D: x must be rank 3 but got rank ".concat(n
					.rank, ".")
			})), qo(n, t)
		}
	});
	var Ho = fn({
		reverse4d_: function(e, t) {
			var n = ln(e, "x", "reverse");
			return ie(4 === n.rank, (function() {
				return "Error in reverse4D: x must be rank 4 but got rank ".concat(n
					.rank, ".")
			})), qo(n, t)
		}
	});
	var Zo = fn({
		round_: function(e) {
			var t = {
				x: ln(e, "x", "round")
			};
			return on.runKernel("Round", t)
		}
	});
	var Qo = fn({
		rsqrt_: function(e) {
			var t = {
				x: ln(e, "x", "rsqrt", "float32")
			};
			return on.runKernel("Rsqrt", t)
		}
	});
	var Xo = fn({
		selu_: function(e) {
			var t = {
				x: ln(e, "x", "selu")
			};
			return on.runKernel("Selu", t)
		}
	});
	var Yo = fn({
		separableConv2d_: function(e, t, n, r, a, o, s) {
			void 0 === o && (o = [1, 1]), void 0 === s && (s = "NHWC");
			var i = ln(e, "x", "separableConv2d"),
				u = ln(t, "depthwiseFilter", "separableConv2d"),
				c = ln(n, "pointwiseFilter", "separableConv2d"),
				p = i,
				l = !1;
			if (3 === i.rank && (l = !0, p = Vn(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
				"NCHW" === s) throw new Error(
				"separableConv2d currently does not support dataFormat NCHW; only NHWC is supported"
			);
			ie(4 === p.rank, (function() {
				return "Error in separableConv2d: input must be rank 4, but got " +
					"rank ".concat(p.rank, ".")
			})), ie(4 === u.rank, (function() {
				return "Error in separableConv2d: depthwise filter must be rank 4, but " +
					"got rank ".concat(u.rank, ".")
			})), ie(4 === c.rank, (function() {
				return "Error in separableConv2d: pointwise filter must be rank 4, but " +
					"got rank ".concat(u.rank, ".")
			})), ie(1 === c.shape[0], (function() {
				return "Error in separableConv2d: the first dimension of pointwise filter " +
					" must be 1, but got ".concat(c.shape[0], ".")
			})), ie(1 === c.shape[1], (function() {
				return "Error in separableConv2d: the second dimension of pointwise " +
					"filter must be 1, but got ".concat(c.shape[1], ".")
			}));
			var d = u.shape[2],
				h = u.shape[3];
			ie(c.shape[2] === d * h, (function() {
				return "Error in separableConv2d: the third dimension of pointwise filter " +
					"must be ".concat(d * h, ", ") + "but got ".concat(c.shape[2], ".")
			}));
			var f = _r(p, u, r, a, s, o),
				m = hr(f, c, 1, "valid", s);
			return l ? Vn(m, [m.shape[1], m.shape[2], m.shape[3]]) : m
		}
	});
	var Jo = function(e, t) {
		return c(this, void 0, void 0, (function() {
			var n, r, a, o, s, i, u, c, l, d;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						return n = ln(e, "x", "setdiff1d"), r = ln(t, "y",
							"setdiff1d"), ie(n.dtype === r.dtype, (function() {
							return "x and y should have the same dtype, but got x ("
								.concat(n.dtype, ") and y (").concat(r
									.dtype, ").")
						})), ie(1 === n.rank, (function() {
							return "x should be 1D tensor, but got x ("
								.concat(n.shape, ").")
						})), ie(1 === r.rank, (function() {
							return "y should be 1D tensor, but got y ("
								.concat(r.shape, ").")
						})), [4, n.data()];
					case 1:
						return a = p.sent(), [4, r.data()];
					case 2:
						for (o = p.sent(), s = new Set(o), i = 0, l = 0; l < a
							.length; l++) s.has(a[l]) || i++;
						for (u = new Pt([i], n.dtype), c = new Pt([i], "int32"), l =
							0, d = 0; l < a.length; l++) s.has(a[l]) || (u.values[
							d] = a[l], c.values[d] = l, d++);
						return [2, [u.toTensor(), c.toTensor()]]
				}
			}))
		}))
	};
	var $o = fn({
		sign_: function(e) {
			var t = {
				x: ln(e, "x", "sign")
			};
			return on.runKernel("Sign", t)
		}
	});
	var es = fn({
		sin_: function(e) {
			var t = {
				x: ln(e, "x", "sin", "float32")
			};
			return on.runKernel("Sin", t)
		}
	});
	var ts = fn({
		sinh_: function(e) {
			var t = {
				x: ln(e, "x", "sinh")
			};
			return on.runKernel("Sinh", t)
		}
	});
	var ns = fn({
		slice1d_: function(e, t, n) {
			var r = ln(e, "x", "slice1d");
			return ie(1 === r.rank, (function() {
				return "slice1d expects a rank-1 tensor, but got a rank-".concat(r.rank,
					" tensor")
			})), Gn(r, [t], [n])
		}
	});
	var rs = fn({
		slice2d_: function(e, t, n) {
			var r = ln(e, "x", "slice2d");
			return ie(2 === r.rank, (function() {
				return "slice2d expects a rank-2 tensor, but got a rank-".concat(r.rank,
					" tensor")
			})), Gn(r, t, n)
		}
	});
	var as = fn({
		slice3d_: function(e, t, n) {
			var r = ln(e, "x", "slice3d");
			return ie(3 === r.rank, (function() {
				return "slice3d expects a rank-3 tensor, but got a rank-".concat(r.rank,
					" tensor")
			})), Gn(r, t, n)
		}
	});
	var os = fn({
		slice4d_: function(e, t, n) {
			var r = ln(e, "x", "slice4d");
			return ie(4 === r.rank, (function() {
				return "slice4d expects a rank-4 tensor, but got a rank-".concat(r.rank,
					" tensor")
			})), Gn(r, t, n)
		}
	});
	var ss = fn({
		softmax_: function(e, t) {
			void 0 === t && (t = -1);
			var n = ln(e, "logits", "softmax", "float32");
			if (-1 === t && (t = n.rank - 1), t !== n.rank - 1) throw Error(
				"Softmax along a non-last dimension is not yet supported. " +
				"Logits was rank ".concat(n.rank, " and dim was ").concat(t));
			var r = {
					logits: n
				},
				a = {
					dim: t
				};
			return on.runKernel("Softmax", r, a)
		}
	});
	var is = fn({
		fft_: function(e) {
			ie("complex64" === e.dtype, (function() {
				return "The dtype for tf.spectral.fft() must be complex64 " + "but got "
					.concat(e.dtype, ".")
			}));
			var t = {
				input: e
			};
			return on.runKernel("FFT", t)
		}
	});
	var us = fn({
		ifft_: function(e) {
			ie("complex64" === e.dtype, (function() {
				return "The dtype for tf.spectral.ifft() must be complex64 " +
					"but got ".concat(e.dtype, ".")
			}));
			var t = {
				input: e
			};
			return on.runKernel("IFFT", t)
		}
	});
	var cs = fn({
		irfft_: function(e) {
			var t, n = e.shape[e.shape.length - 1],
				r = e.size / n;
			if (n <= 2) {
				var a = Vn(e, [r, n]);
				t = us(a)
			} else {
				var o = [r, 2 * (n - 1)],
					s = Vn(Po(e), [r, n]),
					i = Vn(ua(e), [r, n]),
					u = qo(Gn(s, [0, 1], [r, n - 2]), 1),
					c = Un(qo(Gn(i, [0, 1], [r, n - 2]), 1), Gr(-1)),
					p = jn([s, u], 1),
					l = jn([i, c], 1);
				a = Vn(ur(p, l), [o[0], o[1]]);
				t = us(a)
			}
			if (t = Po(t), 3 === e.rank && 0 !== e.shape[0]) {
				var d = t,
					h = e.shape[0];
				t = Vn(t, [h, t.shape[0] / h, t.shape[1]]), d.dispose()
			}
			return t
		}
	});
	var ps = fn({
		split_: function(e, t, n) {
			void 0 === n && (n = 0);
			var r = {
					x: ln(e, "x", "split")
				},
				a = {
					numOrSizeSplits: t,
					axis: n
				};
			return on.runKernel("SplitV", r, a)
		}
	});
	var ls = fn({
		rfft_: function(e, t) {
			ie("float32" === e.dtype, (function() {
				return "The dtype for rfft() must be real value but got ".concat(e
					.dtype)
			}));
			var n, r = e.shape[e.shape.length - 1],
				a = e.size / r;
			if (null != t && t < r) {
				var o = e.shape.map((function(e) {
						return 0
					})),
					s = e.shape.map((function(e) {
						return e
					}));
				s[e.shape.length - 1] = t, n = Gn(e, o, s), r = t
			} else if (null != t && t > r) {
				var i = e.shape.map((function(e) {
					return e
				}));
				i[e.shape.length - 1] = t - r, n = jn([e, za(i)], e.shape.length - 1), r = t
			} else n = e;
			var u = Fr(n),
				c = Vn(ur(n, u), [a, r]),
				p = is(c),
				l = Math.floor(r / 2) + 1,
				d = Po(p),
				h = ua(p),
				f = ps(d, [l, r - l], d.shape.length - 1),
				m = ps(h, [l, r - l], h.shape.length - 1),
				y = n.shape.slice();
			return y[n.shape.length - 1] = l, Vn(ur(f[0], m[0]), y)
		}
	});
	var ds = fn({
		squaredDifference_: function(e, t) {
			var n, r = ln(e, "a", "squaredDifference"),
				a = ln(t, "b", "squaredDifference");
			r = (n = d($t(r, a), 2))[0], a = n[1], Dr(r.shape, a.shape);
			var o = {
				a: r,
				b: a
			};
			return on.runKernel("SquaredDifference", o, {})
		}
	});
	var hs = fn({
		squeeze_: function(e, t) {
			var n = ln(e, "x", "squeeze", "string_or_numeric");
			return Vn(n, function(e, t) {
				for (var n = [], r = [], a = null != t && Array.isArray(t) && 0 === t
						.length, o = null == t || a ? null : fe(t, e).sort(), s = 0, i =
						0; i < e.length; ++i) {
					if (null != o) {
						if (o[s] === i && 1 !== e[i]) throw new Error("Can't squeeze axis "
							.concat(i, " since its dim '").concat(e[i],
								"' is not 1"));
						(null == o[s] || o[s] > i) && 1 === e[i] && (n.push(e[i]), r.push(
							i)), o[s] <= i && s++
					}
					1 !== e[i] && (n.push(e[i]), r.push(i))
				}
				return {
					newShape: n,
					keptDims: r
				}
			}(n.shape, t).newShape)
		}
	});
	var fs = fn({
		stack_: function(e, t) {
			void 0 === t && (t = 0);
			var n = dn(e, "tensors", "stack", "string_or_numeric");
			ie(n.length >= 1, (function() {
				return "Pass at least one tensor to tf.stack"
			})), n.length > 0 && ie(t <= n[0].rank, (function() {
				return "Axis must be <= rank of the tensor"
			}));
			var r = n,
				a = {
					axis: t
				};
			return on.runKernel("Pack", r, a)
		}
	});
	var ms = fn({
		step_: function(e, t) {
			void 0 === t && (t = 0);
			var n = {
					x: ln(e, "x", "step")
				},
				r = {
					alpha: t
				};
			return on.runKernel("Step", n, r)
		}
	});
	var ys = fn({
		stridedSlice_: function(e, t, n, r, a, o, s, i, u) {
			void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 ===
				i && (i = 0), void 0 === u && (u = 0);
			var c = {
					x: ln(e, "x", "stridedSlice", "string_or_numeric")
				},
				p = {
					begin: t,
					end: n,
					strides: r,
					beginMask: a,
					endMask: o,
					ellipsisMask: s,
					newAxisMask: i,
					shrinkAxisMask: u
				};
			return on.runKernel("StridedSlice", c, p)
		}
	});
	var vs = fn({
		tan_: function(e) {
			var t = {
				x: ln(e, "x", "tan", "float32")
			};
			return on.runKernel("Tan", t)
		}
	});

	function gs(e, t, n) {
		return Wr(e, t, un(e, n), n)
	}

	function bs(e, t) {
		ce(e);
		var n = un(e, t);
		if (1 !== n.length) throw new Error("tensor1d() requires values to be a flat/TypedArray");
		return Wr(e, null, n, t)
	}

	function xs(e, t, n) {
		if (ce(e), null != t && 2 !== t.length) throw new Error(
			"tensor2d() requires shape to have two numbers");
		var r = un(e, n);
		if (2 !== r.length && 1 !== r.length) throw new Error(
			"tensor2d() requires values to be number[][] or flat/TypedArray");
		if (1 === r.length && null == t) throw new Error(
			"tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
		return Wr(e, t, r, n)
	}

	function Ns(e, t, n) {
		if (t.rank < 1) throw new Error("tf.scatterND() expects the indices to be rank 1 or higher," +
			" but the rank was ".concat(t.rank, "."));
		if (e.rank < 1) throw new Error("tf.scatterND() expects the updates to be rank 1 or higher," +
			" but the rank was ".concat(e.rank, "."));
		if ("int32" !== t.dtype) throw new Error("The dtype of 'indices' should be int32, but got dtype: "
			.concat(t.dtype));
		if (n.length < 1) throw new Error("Output rank must be greater or equal to 1, but got shape: ".concat(
			n));
		if (0 === n.length) {
			if (0 === t.size) throw new Error("Indices specified for empty output. indices shape: ".concat(t
				.shape));
			if (0 === e.size) throw new Error("Updates specified for empty output. updates shape: ".concat(e
				.shape))
		}! function(e, t, n) {
			var r = t.rank > 1 ? t.shape[t.rank - 1] : 1,
				a = t.rank > 1 ? t.rank - 1 : 1,
				o = "Must have updates.shape = indices.shape[:batchDim] + " +
				"shape[sliceDim:], got updates.shape: ".concat(n.shape) + ", indices.shape: ".concat(t.shape,
					", shape: ").concat(e) + ", sliceDim: ".concat(r, ", and batchDim: ").concat(a, ".");
			if (n.rank < a) throw new Error(o + " update.rank < ".concat(a, ". "));
			if (e.length < r + (n.rank - a)) throw new Error(o + " Output shape length < ".concat(r + (n.rank -
				a)));
			if (n.rank !== a + e.length - r) throw new Error(o + " update.rank != ".concat(a + e.length - r));
			for (var s = 0; s < a; ++s)
				if (n.shape[s] !== t.shape[s]) throw new Error(o + " updates.shape[".concat(s, "] (").concat(n
					.shape[s], ") != indices.shape[").concat(s, "] (").concat(t.shape[s], ")."));
			for (s = 0; s < n.rank - a; ++s)
				if (n.shape[s + a] !== e[s + r]) throw new Error(o + " updates.shape[".concat(s + a, "] (")
					.concat(n.shape[s + a], ") != shape[").concat(s + a, "] (").concat(e[s + a], ")"))
		}(n, t, e)
	}
	var ws = fn({
		tensorScatterUpdate_: function(e, t, n) {
			var r = ln(e, "tensor", "tensorScatterupdate"),
				a = ln(t, "indices", "tensorScatterupdate", "int32"),
				o = ln(n, "updates", "tensorScatterupdate");
			if (Ns(o, a, r.shape), r.dtype !== o.dtype) throw new Error(
				"tensor and updates must have the same dtype, instead they are ".concat(r
					.dtype, " and ").concat(o.dtype, "."));
			var s = {
				tensor: r,
				indices: a,
				updates: o
			};
			return on.runKernel("TensorScatterUpdate", s, {})
		}
	});
	var ks = fn({
		topk_: function(e, t, n) {
			void 0 === t && (t = 1), void 0 === n && (n = !0);
			var r = ln(e, "x", "topk");
			if (0 === r.rank) throw new Error("topk() expects the input to be of rank 1 or higher");
			var a = r.shape[r.shape.length - 1];
			if (t < 0) throw new Error("'k' passed to topk() must be >= 0 but got ".concat(t));
			if (t > a) throw new Error("'k' passed to topk() must be <= the last dimension ("
				.concat(a, ") ") + "but got ".concat(t));
			var o = {
					x: r
				},
				s = {
					k: t,
					sorted: n
				},
				i = d(on.runKernel("TopK", o, s), 2);
			return {
				values: i[0],
				indices: i[1]
			}
		}
	});
	var Ts = fn({
		truncatedNormal_: function(e, t, n, r, a) {
			if (void 0 === t && (t = 0), void 0 === n && (n = 1), Se(e), null != r && "bool" === r)
				throw new Error("Unsupported data type $ { dtype }");
			for (var o = new Ao(t, n, r, !0, a), s = ar(e, r), i = 0; i < s.values.length; i++) s
				.values[i] = o.nextValue();
			return s.toTensor()
		}
	});
	var Ss = fn({
		unique_: function(e, t) {
			void 0 === t && (t = 0);
			var n = ln(e, "x", "unique", "string_or_numeric");
			ie(n.rank > 0, (function() {
				return "The input tensor must be at least 1D"
			}));
			var r = {
					x: n
				},
				a = {
					axis: t
				},
				o = d(on.runKernel("Unique", r, a), 2);
			return {
				values: o[0],
				indices: o[1]
			}
		}
	});
	var _s = fn({
		unsortedSegmentSum_: function(e, t, n) {
			var r = ln(e, "x", "unsortedSegmentSum"),
				a = ln(t, "segmentIds", "unsortedSegmentSum", "int32");
			ie(de(n), (function() {
				return "numSegments must be of dtype int"
			}));
			var o = {
					x: r,
					segmentIds: a
				},
				s = {
					numSegments: n
				};
			return on.runKernel("UnsortedSegmentSum", o, s)
		}
	});
	var Es = fn({
		unstack_: function(e, t) {
			void 0 === t && (t = 0);
			var n = ln(e, "x", "unstack", "string_or_numeric");
			ie(t >= -n.shape.length && t < n.shape.length, (function() {
				return "Axis = ".concat(t, " is not in [-").concat(n.shape.length, ", ")
					.concat(n.shape.length, ")")
			}));
			var r = {
					value: n
				},
				a = {
					axis: t
				};
			return on.runKernel("Unpack", r, a)
		}
	});
	var Is = function(e) {
		return c(this, void 0, void 0, (function() {
			var t, n, r;
			return p(this, (function(a) {
				switch (a.label) {
					case 0:
						return [4, (t = ln(e, "condition", "whereAsync", "bool"))
							.data()
						];
					case 1:
						return n = a.sent(), r = function(e, t) {
							for (var n = [], r = 0; r < t.length; r++) t[r] && n
								.push(r);
							var a = ar(e, "int32"),
								o = ar([n.length, e.length], "int32");
							for (r = 0; r < n.length; r++) {
								var s = a.indexToLoc(n[r]),
									i = r * e.length;
								o.values.set(s, i)
							}
							return o.toTensor()
						}(t.shape, n), e !== t && t.dispose(), [2, r]
				}
			}))
		}))
	};
	var Os = function(e, t, n) {
		return c(this, void 0, void 0, (function() {
			var r, a, o, s, i, u, c, l, d, h, f, m, y;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						for (r = ln(e, "tensor", "boolMask"), a = ln(t, "mask",
								"boolMask", "bool"), o = null == n ? 0 : n, s = a
							.rank, i = r.shape, ie(s > 0, (function() {
								return "mask cannot be scalar"
							})), ue(i.slice(o, o + s), a.shape,
								"mask's shape must match the first K dimensions of tensor's shape,"
							), u = 1, c = o; c < o + s; c++) u *= i[c];
						return l = i.slice(0, o).concat([u], i.slice(o + s)), d =
							Vn(r, l), h = Vn(a, [-1]), [4, Is(h)];
					case 1:
						return f = p.sent(), m = hs(f, [1]), y = oa(d, m, o), e !==
							r && r.dispose(), t !== a && a.dispose(), m.dispose(), d
							.dispose(), h.dispose(), f.dispose(), [2, y]
				}
			}))
		}))
	};
	var As = fn({
		transpose_: function(e, t, n) {
			var r = ln(e, "x", "transpose");
			if (null == t && (t = r.shape.map((function(e, t) {
					return t
				})).reverse()), ie(r.rank === t.length, (function() {
					return "Error in transpose: rank of input ".concat(r.rank, " ") +
						"must match length of perm ".concat(t, ".")
				})), t.forEach((function(e) {
					ie(e >= 0 && e < r.rank, (function() {
						return "All entries in 'perm' must be between 0 and "
							.concat(r.rank - 1) + " but got ".concat(t)
					}))
				})), r.rank <= 1) return r.clone();
			var a, o, s = {
					x: r
				},
				i = {
					perm: t
				};
			return "complex64" === r.dtype ? (a = function() {
				var e = Po(r),
					t = ua(r);
				return e = on.runKernel(Be, {
					x: e
				}, i), t = on.runKernel(Be, {
					x: t
				}, i), n && (t = ba(t)), ur(e, t)
			}, on.tidy(a, o)) : on.runKernel(Be, s, i)
		}
	});
	var Ds = fn({
		movingAverage_: function(e, t, n, r, a) {
			void 0 === a && (a = !0);
			var o, s, i = ln(e, "v", "movingAverage"),
				u = ln(t, "x", "movingAverage"),
				c = ln(n, "decay", "movingAverage");
			s = u, ie((o = i).dtype === s.dtype, (function() {
				return "The dtypes of the first(".concat(o.dtype, ") and") + " second("
					.concat(s.dtype, ") input must match")
			})), ie(le(i.shape, u.shape), (function() {
				return "Shape mismatch in v and x"
			}));
			var p = Gr(1),
				l = wa(p, c),
				d = Un(wa(u, i), l);
			if (a) {
				ie(null != r, (function() {
					return "When using zeroDebias: true, step is required."
				}));
				var h = ln(r, "step", "movingAverage");
				d = Ar(d, wa(p, Ur(c, h)))
			}
			return gn(i, d)
		}
	});
	var Ms = fn({
		scatterND_: function(e, t, n) {
			Se(n);
			var r = ln(e, "indices", "scatterND", "int32"),
				a = ln(t, "updates", "scatterND");
			Ns(a, r, n);
			var o = {
					indices: r,
					updates: a
				},
				s = {
					shape: n
				};
			return on.runKernel("ScatterNd", o, s)
		}
	});
	var Cs = fn({
		sparseToDense_: function(e, t, n, r) {
			void 0 === r && (r = 0), Se(n);
			var a = ln(e, "sparseIndices", "sparseToDense", "int32"),
				o = ln(t, "sparseValues", "sparseToDense", "string_or_numeric"),
				s = ln(r, "defaultValue", "sparseToDense", o.dtype);
			! function(e, t, n, r) {
				if ("int32" !== e.dtype) throw new Error(
					"tf.sparseToDense() expects the indices to be int32 type," +
					" but the dtype was ".concat(e.dtype, "."));
				if (e.rank > 2) throw new Error(
					"sparseIndices should be a scalar, vector, or matrix," +
					" but got shape ".concat(e.shape, "."));
				var a = e.rank > 0 ? e.shape[0] : 1,
					o = e.rank > 1 ? e.shape[1] : 1;
				if (n.length !== o) throw new Error(
					"outputShape has incorrect number of elements:," + " ".concat(n.length,
						", should be: ").concat(o, "."));
				var s = t.size;
				if (0 !== t.rank && (1 !== t.rank || s !== a)) throw new Error(
					"sparseValues has incorrect shape " + "".concat(t.shape,
						", should be [] or [").concat(a, "]"));
				if (t.dtype !== r.dtype) throw new Error(
					"sparseValues.dtype must match defaultValues.dtype")
			}(a, o, n, s);
			var i = {
					sparseIndices: a,
					sparseValues: o,
					defaultValue: s
				},
				u = {
					outputShape: n
				};
			return on.runKernel("SparseToDense", i, u)
		}
	});
	var Fs = fn({
		gatherND_: function(e, t) {
			var n = ln(t, "indices", "gatherND", "int32"),
				r = {
					params: ln(e, "x", "gatherND", "string_or_numeric"),
					indices: n
				};
			return on.runKernel("GatherNd", r)
		}
	});
	var Rs = fn({
		dropout_: function(e, t, n, r) {
			var a = ln(e, "x", "dropout");
			if (ie("float32" === a.dtype, (function() {
					return "x has to be a floating point tensor since it's going to be " +
						"scaled, but got a ".concat(a.dtype, " tensor instead.")
				})), ie(t >= 0 && t < 1, (function() {
					return "rate must be a float in the range [0, 1), but got ".concat(t,
						".")
				})), 0 === t) return e instanceof jt ? a.clone() : a;
			var o = function(e, t) {
					if (null == t) return e.shape.slice();
					if (le(e.shape, t)) return t;
					if (e.shape.length === t.length) {
						for (var n = [], r = 0; r < e.shape.length; r++) null == t[r] && null != e
							.shape[r] ? n.push(e.shape[r]) : n.push(t[r]);
						return n
					}
					return t
				}(a, n),
				s = 1 - t,
				i = Ar(aa(gn(zo(o, 0, 1, "float32", r), s)), s);
			return Un(a, i)
		}
	});

	function zs(e) {
		return Math.floor(Math.pow(2, Math.ceil(Math.log(e) / Math.log(2))))
	}

	function Ls(e, t, n) {
		for (var r = 1 - e % 2, a = new Float32Array(e), o = 0; o < e; ++o) {
			var s = 2 * Math.PI * o / (e + r - 1);
			a[o] = t - n * Math.cos(s)
		}
		return bs(a, "float32")
	}
	var Vs = function(e, t, n) {
		return void 0 === n && (n = 1), c(this, void 0, void 0, (function() {
			var r, a, o, s, i, u, c, l, h, f, m, y, v, g;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						return r = ln(e, "predictions", "inTopK"), a = ln(t,
							"targets", "inTopK"), ie(r.rank > 1, (function() {
							return "inTopK() expects the predictions to be of rank 2 or higher, " +
								"but got ".concat(r.rank)
						})), ie(r.rank - 1 === a.rank, (function() {
							return "predictions rank should be 1 larger than targets rank, but got predictions rank " +
								"".concat(r.rank, " and targets rank ")
								.concat(a.rank)
						})), ue(r.shape.slice(0, r.shape.length - 1), a.shape,
							"predictions's shape should be align with the targets' shape, except the last dimension."
						), o = r.shape[r.shape.length - 1], ie(n > 0 && n <=
							o, (function() {
								return "'k' passed to inTopK() must be > 0 && <= the predictions last " +
									"dimension (".concat(o, "), but got ")
									.concat(n)
							})), [4, r.data()];
					case 1:
						return s = p.sent(), [4, a.data()];
					case 2:
						for (i = p.sent(), u = d([s.length / o, o], 2), c = u[0],
							l = u[1], h = function(e, t) {
								return me(e, t)
							}("bool", c), f = 0; f < c; f++) {
							for (m = f * l, y = s.subarray(m, m + l), v = [], g =
								0; g < y.length; g++) v.push({
								value: y[g],
								index: g
							});
							for (v.sort((function(e, t) {
									return t.value - e.value
								})), h[f] = 0, g = 0; g < n; g++)
								if (v[g].index === i[f]) {
									h[f] = 1;
									break
								}
						}
						return e !== r && r.dispose(), t !== a && a.dispose(), [2,
							gs(h, a.shape, "bool")
						]
				}
			}))
		}))
	};
	var Ps = fn({
		conv2DBackpropFilter_: function(e, t, n, r, a, o, s) {
			void 0 === o && (o = "NHWC");
			var i = e;
			3 === e.rank && (i = Vn(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
			var u = t;
			3 === u.rank && (u = Vn(t, [1, t.shape[0], t.shape[1], t.shape[2]])), ie(4 === i.rank, (
				function() {
					return "Error in conv2dDerFilter: input must be rank 4, but got shape " +
						"".concat(i.shape, ".")
				})), ie(4 === u.rank, (function() {
				return "Error in conv2dDerFilter: dy must be rank 4, but got shape " +
					"".concat(u.shape, ".")
			})), ie(4 === n.length, (function() {
				return "Error in conv2dDerFilter: filterShape must be length 4, but got " +
					"".concat(n, ".")
			}));
			var c = "NHWC" === o ? i.shape[3] : i.shape[1],
				p = "NHWC" === o ? u.shape[3] : u.shape[1];
			ie(c === n[2], (function() {
				return "Error in conv2dDerFilter: depth of input ".concat(c,
					") must ") + "match input depth in filter (".concat(n[2], ".")
			})), ie(p === n[3], (function() {
				return "Error in conv2dDerFilter: depth of dy (".concat(p, ") must ") +
					"match output depth for filter (".concat(n[3], ").")
			})), Ln("conv2dDerFilter", a, s);
			var l = {
					x: i,
					dy: u
				},
				d = {
					strides: r,
					pad: a,
					dataFormat: o,
					dimRoundingMode: s,
					filterShape: n
				};
			return on.runKernel("Conv2DBackpropFilter", l, d)
		}
	});

	function Bs(e, t, n) {
		if (null == n || "linear" === n) return e;
		if ("relu" === n) return Un(e, ms(t));
		throw new Error("Cannot compute gradient for fused activation ".concat(n, "."))
	}

	function Ks(e, t) {
		var n = t,
			r = function(e, t) {
				for (var n = [], r = 0; r < t.length; r++) {
					var a = e[e.length - r - 1],
						o = t.length - r - 1,
						s = t[o];
					(null == a || 1 === a && s > 1) && n.unshift(o)
				}
				return n
			}(e.shape, t.shape);
		return r.length > 0 && (n = Qr(n, r)), Vn(n, e.shape)
	}

	function js(e, t, n, r) {
		if ("linear" === t) return e;
		if ("relu" === t) return Ko(e);
		if ("elu" === t) return Vr(e);
		if ("relu6" === t) return jo(e);
		if ("prelu" === t) return to(e, n);
		if ("leakyrelu" === t) return da(e, r);
		if ("sigmoid" === t) return Wn(e);
		throw new Error("Unknown fused activation ".concat(t, "."))
	}
	var qs = function(e, t) {
		return !(e > 0) || "linear" === t
	};
	var Us = fn({
		fusedConv2d_: function(e) {
			var t, n = e.x,
				r = e.filter,
				a = e.strides,
				o = e.pad,
				s = e.dataFormat,
				i = void 0 === s ? "NHWC" : s,
				u = e.dilations,
				c = void 0 === u ? [1, 1] : u,
				p = e.dimRoundingMode,
				l = e.bias,
				h = e.activation,
				f = void 0 === h ? "linear" : h,
				m = e.preluActivationWeights,
				y = e.leakyreluAlpha;
			if (f = f || "linear", !1 === qs(on.state.gradientDepth, f)) {
				ie("NHWC" === i, (function() {
					return "Error in fused conv2d: got dataFormat of ".concat(i,
							" but ") +
						"only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear."
				}));
				var v = hr(n, r, a, o, i, c, p);
				return null != l && (v = gn(v, l)), js(v, f, m, y)
			}
			var g = ln(n, "x", "conv2d", "float32"),
				b = ln(r, "filter", "conv2d", "float32"),
				x = g,
				N = !1;
			3 === g.rank && (N = !0, x = Vn(g, [1, g.shape[0], g.shape[1], g.shape[2]])), ie(4 === x
				.rank, (function() {
					return "Error in fused conv2d: input must be rank 4, but got rank " + ""
						.concat(x.rank, ".")
				})), ie(4 === b.rank, (function() {
				return "Error in fused conv2d: filter must be rank 4, but got rank " +
					"".concat(b.rank, ".")
			})), Ln("fused conv2d", o, p);
			var w = "NHWC" === i ? x.shape[3] : x.shape[1];
			ie(b.shape[2] === w, (function() {
				return "Error in conv2d: depth of input (".concat(w, ") must match ") +
					"input depth for filter ".concat(b.shape[2], ".")
			})), ie(Rn(a, c), (function() {
				return "Error in conv2D: Either strides or dilations must be 1. " +
					"Got strides ".concat(a, " and dilations '").concat(c, "'")
			}));
			var k, T, S = An(x.shape, b.shape, a, c, o, p);
			if (null != l && (t = d($t(k = ln(l, "bias", "fused conv2d"), g), 1), k = t[0],
					"NHWC" === i ? Dr(S.outShape, k.shape) : (ie(k.shape.length <= 1, (function() {
						return "Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of " +
							"rank-".concat(k.shape.length, ".")
					})), ie(0 === k.shape.length || k.shape[0] === S.outChannels || 1 === k
						.shape[0], (function() {
							return "Error in fused conv2d: bias shape (".concat(k.shape,
									") is not ") +
								"compatible with the number of output channels " + "("
								.concat(S.outChannels, ")")
						})))), null != m) {
				var _ = m.shape;
				if (ie(_.length <= 1 || 3 === _.length, (function() {
						return "Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of " +
							"rank-".concat(_.length, ".")
					})), 1 === _.length) ie(1 === _[0] || _[0] === S.outChannels, (function() {
					return "Error in fused conv2d: PReLU activation weights " + "("
						.concat(_, ") is not compatible with the number of output ") +
						"channels (".concat(S.outChannels, ").")
				}));
				else if (3 === _.length) try {
					Dr(_, S.outShape)
				} catch (e) {
					var E = "Error in fused conv2d: PReLU activation weights (".concat(_,
							") ") + "is not compatible with the output shape of the conv2d " +
						"("
						.concat(S.outShape, ").");
					throw Error(E)
				}
				T = ln(m, "prelu weights", "fused conv2d")
			}
			var I = function(e, t) {
					ie("NHWC" === i, (function() {
						return "Error in gradient of fused conv2D: got dataFormat of "
							.concat(i, " but only NHWC is currently supported.")
					}));
					var n = d(t, 4),
						r = n[0],
						s = n[1],
						u = n[2],
						p = n[3],
						l = Bs(e, u, f);
					ie(Fn(c), (function() {
						return "Error in gradient of fused conv2D: dilation rates greater than 1 " +
							"are not yet supported in gradients. Got dilations '"
							.concat(c, "'")
					}));
					var h = [mr(s.shape, l, r, a, o), Ps(s, l, r.shape, a, o)];
					if (null != p) {
						var m = Ks(p, l);
						h.push(m)
					}
					return h
				},
				O = {
					x: x,
					filter: b,
					bias: k,
					preluActivationWeights: T
				},
				A = {
					strides: a,
					pad: o,
					dataFormat: i,
					dilations: c,
					dimRoundingMode: p,
					activation: f,
					leakyreluAlpha: y
				};
			if (null == l) {
				var D = ga((function(e, t, n) {
					var r = on.runKernel(je, O, A);
					return n([t, e, r]), N && (r = Vn(r, [r.shape[1], r.shape[2], r
						.shape[3]
					])), {
						value: r,
						gradFunc: I
					}
				}));
				return D(x, b)
			}
			var M = ga((function(e, t, n, r) {
				var a = on.runKernel(je, O, A);
				return r([t, e, a, n]), N && (a = Vn(a, [a.shape[1], a.shape[2], a
					.shape[3]
				])), {
					value: a,
					gradFunc: I
				}
			}));
			return M(x, b, k)
		}
	});
	var Ws = fn({
		depthwiseConv2dNativeBackpropFilter_: function(e, t, n, r, a, o, s) {
			void 0 === o && (o = [1, 1]);
			var i = e;
			3 === e.rank && (i = Vn(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
			var u = t;
			3 === u.rank && (u = Vn(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
			var c = {
					x: i,
					dy: u
				},
				p = {
					strides: r,
					pad: a,
					dimRoundingMode: s,
					dilations: o,
					filterShape: n
				};
			return on.runKernel("DepthwiseConv2dNativeBackpropFilter", c, p)
		}
	});
	var Gs = fn({
		depthwiseConv2dNativeBackpropInput_: function(e, t, n, r, a, o, s) {
			void 0 === o && (o = [1, 1]);
			var i = t,
				u = !1;
			3 === t.rank && (u = !0, i = Vn(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
			var c = {
					dy: i,
					filter: n
				},
				p = {
					strides: r,
					pad: a,
					dimRoundingMode: s,
					dilations: o,
					inputShape: e
				},
				l = on.runKernel("DepthwiseConv2dNativeBackpropInput", c, p);
			return u ? Vn(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
		}
	});
	var Hs = fn({
		fusedDepthwiseConv2d_: function(e) {
			var t, n = e.x,
				r = e.filter,
				a = e.strides,
				o = e.pad,
				s = e.dataFormat,
				i = void 0 === s ? "NHWC" : s,
				u = e.dilations,
				c = void 0 === u ? [1, 1] : u,
				p = e.dimRoundingMode,
				l = e.bias,
				h = e.activation,
				f = void 0 === h ? "linear" : h,
				m = e.preluActivationWeights,
				y = e.leakyreluAlpha;
			if (!1 === qs(on.state.gradientDepth, f)) {
				var v = _r(n, r, a, o, i, c, p);
				return null != l && (v = gn(v, l)), js(v, f, m, y)
			}
			var g = ln(n, "x", "depthwiseConv2d", "float32"),
				b = ln(r, "filter", "depthwiseConv2d", "float32"),
				x = g,
				N = !1;
			3 === g.rank && (N = !0, x = Vn(g, [1, g.shape[0], g.shape[1], g.shape[2]])), ie(4 === x
				.rank, (function() {
					return "Error in fused depthwiseConv2d: input must be rank 4, but got " +
						"rank ".concat(x.rank, ".")
				})), ie(4 === b.rank, (function() {
				return "Error in fused depthwiseConv2d: filter must be rank 4, " +
					"but got rank ".concat(b.rank, ".")
			})), ie(x.shape[3] === b.shape[2], (function() {
				return "Error in fused depthwiseConv2d: number of input channels " + "("
					.concat(x.shape[3], ") must match the inChannels dimension in ") +
					"filter ".concat(b.shape[2], ".")
			})), null == c && (c = [1, 1]), ie(Rn(a, c), (function() {
				return "Error in fused depthwiseConv2d: Either strides or dilations must " +
					"be 1. Got strides ".concat(a, " and dilations '").concat(c, "'")
			})), Ln("fused depthwiseConv2d", o, p);
			var w, k, T = An(x.shape, b.shape, a, c, o, p, !0);
			null != l && (t = d($t(w = ln(l, "bias", "fused conv2d"), g), 1), w = t[0], Dr(T
				.outShape, w.shape)), null != m && (k = ln(m, "prelu weights",
				"fused depthwiseConv2d"));
			var S = function(e, t) {
					ie(Fn(c), (function() {
						return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations " +
							"'".concat(c, "'")
					}));
					var n = d(t, 4),
						r = n[0],
						s = n[1],
						i = n[2],
						u = n[3],
						l = Bs(e, i, f),
						h = Gs(s.shape, l, r, a, o, c, p),
						m = Ws(s, l, r.shape, a, o, c, p);
					return null != u ? [h, m, Ks(w, l)] : [h, m]
				},
				_ = {
					x: x,
					filter: b,
					bias: w,
					preluActivationWeights: k
				},
				E = {
					strides: a,
					pad: o,
					dataFormat: i,
					dilations: c,
					dimRoundingMode: p,
					activation: f,
					leakyreluAlpha: y
				};
			if (null == l) {
				var I = ga((function(e, t, n) {
					var r = on.runKernel(qe, _, E);
					return n([t, e, r]), N && (r = Vn(r, [r.shape[1], r.shape[2], r
						.shape[3]
					])), {
						value: r,
						gradFunc: S
					}
				}));
				return I(x, b)
			}
			var O = ga((function(e, t, n, r) {
				var a = on.runKernel(qe, _, E);
				return r([t, e, a, n]), N && (a = Vn(a, [a.shape[1], a.shape[2], a
					.shape[3]
				])), {
					value: a,
					gradFunc: S
				}
			}));
			return O(x, b, w)
		}
	});
	var Zs = {
		__proto__: null,
		conv2d: Us,
		depthwiseConv2d: Hs,
		matMul: fn({
			fusedMatMul_: function(e) {
				var t, n = e.a,
					r = e.b,
					a = e.transposeA,
					o = void 0 !== a && a,
					s = e.transposeB,
					i = void 0 !== s && s,
					u = e.bias,
					c = e.activation,
					p = void 0 === c ? "linear" : c,
					l = e.preluActivationWeights,
					h = e.leakyreluAlpha,
					f = void 0 === h ? .2 : h;
				if (!1 === qs(on.state.gradientDepth, p)) {
					var m = qn(n, r, o, i);
					return null != u && (m = gn(m, u)), js(m, p, l, f)
				}
				var y = ln(n, "a", "fused matMul"),
					v = ln(r, "b", "fused matMul");
				t = d($t(y, v), 2), y = t[0], v = t[1];
				var g = o ? y.shape[y.rank - 2] : y.shape[y.rank - 1],
					b = i ? v.shape[v.rank - 1] : v.shape[v.rank - 2],
					x = o ? y.shape[y.rank - 1] : y.shape[y.rank - 2],
					N = i ? v.shape[v.rank - 2] : v.shape[v.rank - 1],
					w = y.shape.slice(0, -2),
					k = v.shape.slice(0, -2),
					T = pe(w),
					S = pe(k);
				ie(g === b, (function() {
					return "Error in fused matMul: inner shapes (".concat(g,
							") and (") + "".concat(b, ") of Tensors with shapes ")
						.concat(y.shape, " and ") + "".concat(v.shape,
							" and transposeA=").concat(o) + " and transposeB="
						.concat(i, " must match.")
				}));
				var _, E, I = Dr(y.shape.slice(0, -2), v.shape.slice(0, -2)).concat([x, N]),
					O = Vn(y, o ? [T, g, x] : [T, x, g]),
					A = Vn(v, i ? [S, N, b] : [S, b, N]);
				null != u && (_ = d($t(_ = ln(u, "bias", "fused matMul"), y), 1)[0], Dr(I, _
					.shape)), null != l && (E = ln(l, "prelu weights", "fused matMul"));
				var D = function(e, t) {
						var n, r, a = d(t, 4),
							s = a[0],
							c = a[1],
							l = a[2],
							h = a[3],
							f = Bs(Vn(e, l.shape), l, p);
						return o || i ? !o && i ? (n = qn(f, c, !1, !1), r = qn(f, s, !0, !1)) :
							o && !i ? (n = qn(c, f, !1, !0), r = qn(s, f, !1, !1)) : (n = qn(c,
								f, !0, !0), r = qn(f, s, !0, !0)) : (n = qn(f, c, !1, !0), r =
								qn(s, f, !0, !1)), null != u ? [n, r, Ks(h, f)] : [n, r]
					},
					M = {
						a: O,
						b: A,
						bias: _,
						preluActivationWeights: E
					},
					C = {
						transposeA: o,
						transposeB: i,
						activation: p,
						leakyreluAlpha: f
					};
				if (null == u) {
					var F = ga((function(e, t, n) {
						var r = on.runKernel(Ke, M, C);
						return n([e, t, r]), {
							value: Vn(r, I),
							gradFunc: D
						}
					}));
					return F(O, A)
				}
				var R = ga((function(e, t, n, r) {
					var a = on.runKernel(Ke, M, C);
					return r([e, t, a, n]), {
						value: Vn(a, I),
						gradFunc: D
					}
				}));
				return R(O, A, _)
			}
		})
	};
	var Qs = fn({
		hammingWindow_: function(e) {
			return Ls(e, .54, .46)
		}
	});
	var Xs = fn({
		hannWindow_: function(e) {
			return Ls(e, .5, .5)
		}
	});
	var Ys = fn({
		frame_: function(e, t, n, r, a) {
			void 0 === r && (r = !1), void 0 === a && (a = 0);
			for (var o = 0, s = []; o + t <= e.size;) s.push(Gn(e, o, t)), o += n;
			if (r)
				for (; o < e.size;) {
					var i = o + t - e.size,
						u = jn([Gn(e, o, t - i), sr([i], a)]);
					s.push(u), o += n
				}
			return 0 === s.length ? xs([], [0, t]) : Vn(jn(s), [s.length, t])
		}
	});
	var Js = fn({
		stft_: function(e, t, n, r, a) {
			void 0 === a && (a = Xs), null == r && (r = zs(t));
			var o = Ys(e, t, n),
				s = Un(o, a(t));
			return ls(s, r)
		}
	});
	var $s = fn({
		cropAndResize_: function(e, t, n, r, a, o) {
			void 0 === a && (a = "bilinear"), void 0 === o && (o = 0);
			var s = ln(e, "image", "cropAndResize"),
				i = ln(t, "boxes", "cropAndResize", "float32"),
				u = ln(n, "boxInd", "cropAndResize", "int32"),
				c = i.shape[0];
			ie(4 === s.rank, (function() {
				return "Error in cropAndResize: image must be rank 4," + "but got rank "
					.concat(s.rank, ".")
			})), ie(2 === i.rank && 4 === i.shape[1], (function() {
				return "Error in cropAndResize: boxes must be have size [".concat(c,
					",4] ") + "but had shape ".concat(i.shape, ".")
			})), ie(1 === u.rank && u.shape[0] === c, (function() {
				return "Error in cropAndResize: boxInd must be have size [".concat(c,
					"] ") + "but had shape ".concat(i.shape, ".")
			})), ie(2 === r.length, (function() {
				return "Error in cropAndResize: cropSize must be of length 2, but got " +
					"length ".concat(r.length, ".")
			})), ie(r[0] >= 1 && r[1] >= 1, (function() {
				return "cropSize must be atleast [1,1], but was ".concat(r)
			})), ie("bilinear" === a || "nearest" === a, (function() {
				return "method must be bilinear or nearest, but was ".concat(a)
			}));
			var p = {
					image: s,
					boxes: i,
					boxInd: u
				},
				l = {
					method: a,
					extrapolationValue: o,
					cropSize: r
				};
			return on.runKernel("CropAndResize", p, l)
		}
	});
	var ei = fn({
		flipLeftRight_: function(e) {
			var t = ln(e, "image", "flipLeftRight", "float32");
			ie(4 === t.rank, (function() {
				return "Error in flipLeftRight: image must be rank 4," + "but got rank "
					.concat(t.rank, ".")
			}));
			var n = {
				image: t
			};
			return on.runKernel("FlipLeftRight", n, {})
		}
	});
	var ti = fn({
		grayscaleToRGB_: function(e) {
			var t = ln(e, "image", "grayscaleToRGB"),
				n = t.rank - 1,
				r = t.shape[n];
			ie(t.rank >= 2, (function() {
				return "Error in grayscaleToRGB: images must be at least rank 2, " +
					"but got rank ".concat(t.rank, ".")
			})), ie(1 === r, (function() {
				return "Error in grayscaleToRGB: last dimension of a grayscale image " +
					"should be size 1, but got size ".concat(r, ".")
			}));
			var a = new Array(t.rank);
			return a.fill(1, 0, n), a[n] = 3, na(t, a)
		}
	});
	var ni = fn({
		rgbToGrayscale_: function(e) {
			var t = ln(e, "image", "RGBToGrayscale"),
				n = t.rank - 1,
				r = t.shape[n];
			ie(t.rank >= 2, (function() {
				return "Error in RGBToGrayscale: images must be at least rank 2, " +
					"but got rank ".concat(t.rank, ".")
			})), ie(3 === r, (function() {
				return "Error in RGBToGrayscale: last dimension of an RGB image " +
					"should be size 3, but got size ".concat(r, ".")
			}));
			var a, o = t.dtype,
				s = On(t, "float32"),
				i = bs([.2989, .587, .114]);
			switch (t.rank) {
				case 2:
					a = Lr("ij,j->i", s, i);
					break;
				case 3:
					a = Lr("ijk,k->ij", s, i);
					break;
				case 4:
					a = Lr("ijkl,l->ijk", s, i);
					break;
				case 5:
					a = Lr("ijklm,m->ijkl", s, i);
					break;
				case 6:
					a = Lr("ijklmn,n->ijklm", s, i);
					break;
				default:
					throw new Error("Not a valid tensor rank.")
			}
			return a = ea(a, -1), On(a, o)
		}
	});
	var ri = fn({
		rotateWithOffset_: function(e, t, n, r) {
			void 0 === n && (n = 0), void 0 === r && (r = .5);
			var a = ln(e, "image", "rotateWithOffset", "float32");
			ie(4 === a.rank, (function() {
				return "Error in rotateWithOffset: image must be rank 4," +
					"but got rank ".concat(a.rank, ".")
			}));
			var o = {
					image: a
				},
				s = {
					radians: t,
					fillValue: n,
					center: r
				};
			return on.runKernel("RotateWithOffset", o, s)
		}
	});

	function ai(e, t, n, r, a, o) {
		null == r && (r = .5), null == a && (a = Number.NEGATIVE_INFINITY), null == o && (o = 0);
		var s = e.shape[0];
		return n = Math.min(n, s), ie(0 <= r && r <= 1, (function() {
			return "iouThreshold must be in [0, 1], but was '".concat(r, "'")
		})), ie(2 === e.rank, (function() {
			return "boxes must be a 2D tensor, but was of rank '".concat(e.rank, "'")
		})), ie(4 === e.shape[1], (function() {
			return "boxes must have 4 columns, but 2nd dimension was ".concat(e.shape[1])
		})), ie(1 === t.rank, (function() {
			return "scores must be a 1D tensor"
		})), ie(t.shape[0] === s, (function() {
			return "scores has incompatible shape with boxes. Expected ".concat(s, ", ") +
				"but was ".concat(t.shape[0])
		})), ie(0 <= o && o <= 1, (function() {
			return "softNmsSigma must be in [0, 1], but was '".concat(o, "'")
		})), {
			maxOutputSize: n,
			iouThreshold: r,
			scoreThreshold: a,
			softNmsSigma: o
		}
	}
	var oi = fn({
		nonMaxSuppression_: function(e, t, n, r, a) {
			void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY);
			var o = ln(e, "boxes", "nonMaxSuppression", "float32"),
				s = ln(t, "scores", "nonMaxSuppression", "float32"),
				i = ai(o, s, n, r, a),
				u = {
					maxOutputSize: n = i.maxOutputSize,
					iouThreshold: r = i.iouThreshold,
					scoreThreshold: a = i.scoreThreshold
				};
			return on.runKernel("NonMaxSuppressionV3", {
				boxes: o,
				scores: s
			}, u)
		}
	});

	function si(e, t, n) {
		var r = function(e, t, n) {
				return function(e, t, n) {
					var r = 0,
						a = e.length,
						o = 0,
						s = !1;
					for (; r < a;) {
						var i = n(t, e[o = r + (a - r >>> 1)]);
						i > 0 ? r = o + 1 : (a = o, s = !i)
					}
					return s ? r : -r - 1
				}(e, t, n || ii)
			}(e, t, n),
			a = r < 0 ? -(r + 1) : r;
		e.splice(a, 0, t)
	}

	function ii(e, t) {
		return e > t ? 1 : e < t ? -1 : 0
	}

	function ui(e, t, n, r, a, o, s, i, u) {
		void 0 === s && (s = !1), void 0 === i && (i = !1), void 0 === u && (u = !1);
		for (var c = [], p = 0; p < t.length; p++) t[p] > a && c.push({
			score: t[p],
			boxIndex: p,
			suppressBeginIndex: 0
		});
		c.sort(li);
		for (var l = o > 0 ? -.5 / o : 0, f = [], m = []; f.length < n && c.length > 0;) {
			var y = c.pop(),
				v = y.score,
				g = y.boxIndex,
				b = y.suppressBeginIndex;
			if (v < a) break;
			for (var x = !1, N = f.length - 1; N >= b; --N) {
				var w = ci(e, g, f[N]);
				if (w >= r) {
					x = !0;
					break
				}
				if (y.score = y.score * pi(r, l, w), y.score <= a) break
			}
			y.suppressBeginIndex = f.length, x || (y.score === v ? (f.push(g), m.push(y.score)) : y.score > a &&
				si(c, y, li))
		}
		var k = f.length,
			T = n - k;
		i && T > 0 && (f.push.apply(f, h([], d(new Array(T).fill(0)), !1)), m.push.apply(m, h([], d(new Array(T)
			.fill(0)), !1)));
		var S = {
			selectedIndices: f
		};
		return s && (S.selectedScores = m), u && (S.validOutputs = k), S
	}

	function ci(e, t, n) {
		var r = e.subarray(4 * t, 4 * t + 4),
			a = e.subarray(4 * n, 4 * n + 4),
			o = Math.min(r[0], r[2]),
			s = Math.min(r[1], r[3]),
			i = Math.max(r[0], r[2]),
			u = Math.max(r[1], r[3]),
			c = Math.min(a[0], a[2]),
			p = Math.min(a[1], a[3]),
			l = Math.max(a[0], a[2]),
			d = Math.max(a[1], a[3]),
			h = (i - o) * (u - s),
			f = (l - c) * (d - p);
		if (h <= 0 || f <= 0) return 0;
		var m = Math.max(o, c),
			y = Math.max(s, p),
			v = Math.min(i, l),
			g = Math.min(u, d),
			b = Math.max(v - m, 0) * Math.max(g - y, 0);
		return b / (h + f - b)
	}

	function pi(e, t, n) {
		var r = Math.exp(t * n * n);
		return n <= e ? r : 0
	}

	function li(e, t) {
		return e.score - t.score || e.score === t.score && t.boxIndex - e.boxIndex
	}
	var di = function(e, t, n, r, a) {
		return void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY), c(this, void 0,
			void 0, (function() {
				var o, s, i, u, c, l, d;
				return p(this, (function(p) {
					switch (p.label) {
						case 0:
							return o = ln(e, "boxes", "nonMaxSuppressionAsync"), s = ln(
									t, "scores", "nonMaxSuppressionAsync"), i = ai(o, s,
									n, r, a), n = i.maxOutputSize, r = i.iouThreshold,
								a = i.scoreThreshold, [4, Promise.all([o.data(), s
									.data()
								])];
						case 1:
							return u = p.sent(), c = u[0], l = u[1], d = function(e, t,
									n, r, a) {
									return ui(e, t, n, r, a, 0)
								}(c, l, n, r, a).selectedIndices, o !== e && o
								.dispose(), s !== t && s.dispose(), [2, bs(d, "int32")]
					}
				}))
			}))
	};
	var hi = fn({
		nonMaxSuppressionWithScore_: function(e, t, n, r, a, o) {
			void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY), void 0 ===
				o && (o = 0);
			var s = ln(e, "boxes", "nonMaxSuppression"),
				i = ln(t, "scores", "nonMaxSuppression"),
				u = ai(s, i, n, r, a, o),
				c = {
					boxes: s,
					scores: i
				},
				p = {
					maxOutputSize: n = u.maxOutputSize,
					iouThreshold: r = u.iouThreshold,
					scoreThreshold: a = u.scoreThreshold,
					softNmsSigma: o = u.softNmsSigma
				},
				l = on.runKernel("NonMaxSuppressionV5", c, p);
			return {
				selectedIndices: l[0],
				selectedScores: l[1]
			}
		}
	});
	var fi = function(e, t, n, r, a, o) {
		return void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY), void 0 === o && (
			o = 0), c(this, void 0, void 0, (function() {
			var s, i, u, c, l, d, h, f, m;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						return s = ln(e, "boxes", "nonMaxSuppressionAsync"), i = ln(
								t, "scores", "nonMaxSuppressionAsync"), u = ai(s, i,
								n, r, a, o), n = u.maxOutputSize, r = u
							.iouThreshold, a = u.scoreThreshold, o = u.softNmsSigma,
							[4, Promise.all([s.data(), i.data()])];
					case 1:
						return c = p.sent(), l = c[0], d = c[1], h = function(e, t,
								n, r, a, o) {
								return ui(e, t, n, r, a, o, !0)
							}(l, d, n, r, a, o), f = h.selectedIndices, m = h
							.selectedScores, s !== e && s.dispose(), i !== t && i
							.dispose(), [2, {
								selectedIndices: bs(f, "int32"),
								selectedScores: bs(m)
							}]
				}
			}))
		}))
	};
	var mi = fn({
		nonMaxSuppressionPadded_: function(e, t, n, r, a, o) {
			void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY), void 0 ===
				o && (o = !1);
			var s = ln(e, "boxes", "nonMaxSuppression"),
				i = ln(t, "scores", "nonMaxSuppression"),
				u = ai(s, i, n, r, a, null),
				c = {
					boxes: s,
					scores: i
				},
				p = {
					maxOutputSize: u.maxOutputSize,
					iouThreshold: u.iouThreshold,
					scoreThreshold: u.scoreThreshold,
					padToMaxOutputSize: o
				},
				l = on.runKernel("NonMaxSuppressionV4", c, p);
			return {
				selectedIndices: l[0],
				validOutputs: l[1]
			}
		}
	});
	var yi = function(e, t, n, r, a, o) {
		return void 0 === r && (r = .5), void 0 === a && (a = Number.NEGATIVE_INFINITY), void 0 === o && (
			o = !1), c(this, void 0, void 0, (function() {
			var s, i, u, c, l, h, f, m, y, v, g, b;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						return s = ln(e, "boxes", "nonMaxSuppressionAsync"), i = ln(
								t, "scores", "nonMaxSuppressionAsync"), u = ai(s, i,
								n, r, a, null), c = u.maxOutputSize, l = u
							.iouThreshold, h = u.scoreThreshold, [4, Promise.all([s
								.data(), i.data()
							])];
					case 1:
						return f = d.apply(void 0, [p.sent(), 2]), m = f[0], y = f[
								1], v = function(e, t, n, r, a, o) {
								return ui(e, t, n, r, a, 0, !1, o, !0)
							}(m, y, c, l, h, o), g = v.selectedIndices, b = v
							.validOutputs, s !== e && s.dispose(), i !== t && i
							.dispose(), [2, {
								selectedIndices: bs(g, "int32"),
								validOutputs: Gr(b, "int32")
							}]
				}
			}))
		}))
	};
	var vi = fn({
		resizeBilinear_: function(e, t, n, r) {
			void 0 === n && (n = !1), void 0 === r && (r = !1);
			var a = ln(e, "images", "resizeBilinear");
			ie(3 === a.rank || 4 === a.rank, (function() {
				return "Error in resizeBilinear: x must be rank 3 or 4, but got " +
					"rank ".concat(a.rank, ".")
			})), ie(2 === t.length, (function() {
				return "Error in resizeBilinear: new shape must 2D, but got shape " + ""
					.concat(t, ".")
			})), ie(!1 === r || !1 === n, (function() {
				return "Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."
			}));
			var o = a,
				s = !1;
			3 === a.rank && (s = !0, o = Vn(a, [1, a.shape[0], a.shape[1], a.shape[2]])), d(t, 0);
			var i = {
					images: o
				},
				u = {
					alignCorners: n,
					halfPixelCenters: r,
					size: t
				},
				c = on.runKernel("ResizeBilinear", i, u);
			return s ? Vn(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
		}
	});
	var gi = fn({
		resizeNearestNeighbor_: function(e, t, n, r) {
			void 0 === n && (n = !1), void 0 === r && (r = !1);
			var a = ln(e, "images", "resizeNearestNeighbor");
			ie(3 === a.rank || 4 === a.rank, (function() {
				return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got " +
					"rank ".concat(a.rank, ".")
			})), ie(2 === t.length, (function() {
				return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " +
					"".concat(t, ".")
			})), ie("float32" === a.dtype || "int32" === a.dtype, (function() {
				return "`images` must have `int32` or `float32` as dtype"
			})), ie(!1 === r || !1 === n, (function() {
				return "Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."
			}));
			var o = a,
				s = !1;
			3 === a.rank && (s = !0, o = Vn(a, [1, a.shape[0], a.shape[1], a.shape[2]])), d(t, 0);
			var i = {
					images: o
				},
				u = {
					alignCorners: n,
					halfPixelCenters: r,
					size: t
				},
				c = on.runKernel("ResizeNearestNeighbor", i, u);
			return s ? Vn(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
		}
	});
	var bi = fn({
		threshold_: function(e, t, n, r) {
			var a;
			void 0 === t && (t = "binary"), void 0 === n && (n = !1), void 0 === r && (r = .5);
			var o, s, i, u, c = ln(e, "image", "threshold"),
				p = c.shape[0] * c.shape[1],
				l = Un(bs([r]), 255);
			if (ie(3 === c.rank, (function() {
					return "Error in threshold: image must be rank 3," + "but got rank "
						.concat(c.rank, ".")
				})), ie(3 === c.shape[2] || 1 === c.shape[2], (function() {
					return "Error in threshold: image color channel must be equal to 3 or 1" +
						"but got ".concat(c.shape[2], ".")
				})), ie("int32" === c.dtype || "float32" === c.dtype, (function() {
					return "Error in dtype: image dtype must be int32 or float32," +
						"but got dtype ".concat(c.dtype, ".")
				})), ie("otsu" === t || "binary" === t, (function() {
					return "Method must be binary or otsu, but was ".concat(t)
				})), 3 === c.shape[2]) {
				o = (a = d(ps(c, [1, 1, 1], -1), 3))[0], s = a[1], i = a[2];
				var h = Un(o, .2989),
					f = Un(s, .587),
					m = Un(i, .114);
				u = gn(gn(h, f), m)
			} else u = e;
			"otsu" === t && (l = function(e, t) {
				for (var n, r, a, o, s, i, u = bs([-1]), c = bs([0]), p = bs([0]), l =
						0; l < e.size - 1; l++) {
					n = Gn(e, 0, l + 1), r = Gn(e, l + 1), s = Ar(Qr(n), t), i = Ar(Qr(r),
						t);
					var d = Qr(Un(n, Vo(0, n.size)));
					a = Ar(d, Qr(n));
					var h = sr(r.shape, n.size),
						f = gn(Vo(0, r.size), h),
						m = Un(r, f);
					o = Ar(Qr(m), Qr(r));
					var y = wa(a, o),
						v = wa(a, o),
						g = Un(s, i);
					p = Un(Un(g, y), v);
					var b = sa(p, c);
					c = Cr(b, p, c), u = Cr(b, bs([l]), u)
				}
				return u
			}(er(On(Zo(u), "int32"), gs([]), 256), p));
			var y = n ? fa(u, l) : sa(u, l);
			return On(Un(y, 255), "int32")
		}
	});
	var xi = fn({
		transform_: function(e, t, n, r, a, o) {
			void 0 === n && (n = "nearest"), void 0 === r && (r = "constant"), void 0 === a && (a =
				0);
			var s = ln(e, "image", "transform", "float32"),
				i = ln(t, "transforms", "transform", "float32");
			ie(4 === s.rank, (function() {
				return "Error in transform: image must be rank 4," + "but got rank "
					.concat(s.rank, ".")
			})), ie(2 === i.rank && (i.shape[0] === s.shape[0] || 1 === i.shape[0]) && 8 === i
				.shape[1], (function() {
					return "Error in transform: Input transform should be batch x 8 or 1 x 8"
				})), ie(null == o || 2 === o.length, (function() {
				return "Error in transform: outputShape must be [height, width] or null, " +
					"but got ".concat(o, ".")
			}));
			var u = {
					image: s,
					transforms: i
				},
				c = {
					interpolation: n,
					fillMode: r,
					fillValue: a,
					outputShape: o
				};
			return on.runKernel("Transform", u, c)
		}
	});
	var Ni = fn({
		bandPart_: function(e, t, n) {
			var r = ln(e, "a", "bandPart");
			ie(r.rank >= 2, (function() {
				return "bandPart(): Rank must be at least 2, got ".concat(r.rank, ".")
			}));
			var a, o, s = r.shape,
				i = d(r.shape.slice(-2), 2),
				u = i[0],
				c = i[1];
			"number" == typeof t ? (ie(t % 1 == 0, (function() {
				return "bandPart(): numLower must be an integer, got ".concat(t,
					".")
			})), ie(t <= u, (function() {
				return "bandPart(): numLower (".concat(t, ")") +
					" must not be greater than the number of rows (".concat(u, ").")
			})), a = ln(t < 0 ? u : t, "numLower", "bandPart")) : (ie("int32" === t.dtype, (
				function() {
					return "bandPart(): numLower's dtype must be an int32."
				})), a = Cr(ha(t, 0), u, Va(t, u))), "number" == typeof n ? (ie(n % 1 == 0, (
				function() {
					return "bandPart(): numUpper must be an integer, got ".concat(n,
						".")
				})), ie(n <= c, (function() {
				return "bandPart(): numUpper (".concat(n, ")") +
					" must not be greater than the number of columns (".concat(c,
						").")
			})), o = ln(n < 0 ? c : n, "numUpper", "bandPart")) : (ie("int32" === n.dtype, (
				function() {
					return "bandPart(): numUpper's dtype must be an int32."
				})), o = Cr(ha(n, 0), c, Va(n, c)));
			var p = Vn(Vo(0, u, 1, "int32"), [-1, 1]),
				l = Vo(0, c, 1, "int32"),
				h = wa(p, l),
				f = Sa(fa(h, a), ia(h, ba(o))),
				m = za([u, c], r.dtype);
			return Vn(fs(Es(Vn(r, [-1, u, c])).map((function(e) {
				return Cr(f, e, m)
			}))), s)
		}
	});
	var wi = fn({
		gramSchmidt_: function(e) {
			var t;
			if (Array.isArray(e)) {
				t = !1, ie(null != e && e.length > 0, (function() {
					return "Gram-Schmidt process: input must not be null, undefined, or empty"
				}));
				for (var n = e[0].shape[0], r = function(t) {
						ie(e[t].shape[0] === n, (function() {
							return "Gram-Schmidt: Non-unique lengths found in the input vectors: " +
								"(".concat(e[t].shape[0], " vs. ").concat(n, ")")
						}))
					}, a = 1; a < e.length; ++a) r(a)
			} else t = !0, e = ps(e, e.shape[0], 0).map((function(e) {
				return hs(e, [0])
			}));
			ie(e.length <= e[0].shape[0], (function() {
				return "Gram-Schmidt: Number of vectors (".concat(e.length,
					") exceeds ") + "number of dimensions (".concat(e[0].shape[0],
					").")
			}));
			var o = [],
				s = e,
				i = function(e) {
					o.push(on.tidy((function() {
						var t = s[e];
						if (e > 0)
							for (var n = 0; n < e; ++n) {
								var r = Un(Qr(Un(o[n], t)), o[n]);
								t = wa(t, r)
							}
						return Ar(t, Yr(t, "euclidean"))
					})))
				};
			for (a = 0; a < e.length; ++a) i(a);
			return t ? fs(o, 0) : o
		}
	});

	function ki(e, t) {
		return void 0 === t && (t = !1), on.tidy((function() {
			ie(2 === e.shape.length, (function() {
				return "qr2d() requires a 2D Tensor, but got a ".concat(e.shape.length,
					"D Tensor.")
			}));
			for (var n = e.shape[0], r = e.shape[1], a = ra(n), o = Kn(e), s = xs([
					[1]
				], [1, 1]), i = Kn(s), u = n >= r ? r : n, c = function(e) {
					var t, u = o,
						c = i,
						p = a;
					t = d(on.tidy((function() {
						var t = Gn(o, [e, e], [n - e, 1]),
							u = Yr(t),
							c = Gn(o, [e, e], [1, 1]),
							p = Cr(sa(c, 0), xs([
								[-1]
							]), xs([
								[1]
							])),
							l = wa(c, Un(p, u)),
							d = Ar(t, l);
						i = 1 === d.shape[0] ? Kn(s) : jn([s, Gn(d, [1, 0], [d
							.shape[0] - 1, d.shape[1]
						])], 0);
						var h = ba(Ar(qn(p, l), u)),
							f = Gn(o, [e, 0], [n - e, r]),
							m = Un(h, i),
							y = As(i);
						if (0 === e) o = wa(f, qn(m, qn(y, f)));
						else {
							var v = wa(f, qn(m, qn(y, f)));
							o = jn([Gn(o, [0, 0], [e, r]), v], 0)
						}
						var g = As(m),
							b = Gn(a, [0, e], [n, a.shape[1] - e]);
						if (0 === e) a = wa(b, qn(qn(b, i), g));
						else {
							var x = wa(b, qn(qn(b, i), g));
							a = jn([Gn(a, [0, 0], [n, e]), x], 1)
						}
						return [i, o, a]
					})), 3), i = t[0], o = t[1], a = t[2], en([u, c, p]).forEach((function(
						e) {
						return e.dispose()
					}))
				}, p = 0; p < u; ++p) c(p);
			return !t && n > r && (a = Gn(a, [0, 0], [n, r]), o = Gn(o, [0, 0], [r, r])), [a, o]
		}))
	}
	var Ti, Si = fn({
		qr_: function(e, t) {
			if (void 0 === t && (t = !1), ie(e.rank >= 2, (function() {
					return "qr() requires input tensor to have a rank >= 2, but got rank "
						.concat(e.rank)
				})), 2 === e.rank) return ki(e, t);
			var n = e.shape.slice(0, e.shape.length - 2).reduce((function(e, t) {
					return e * t
				})),
				r = Es(Vn(e, [n, e.shape[e.shape.length - 2], e.shape[e.shape.length - 1]]), 0),
				a = [],
				o = [];
			return r.forEach((function(e) {
				var n = d(ki(e, t), 2),
					r = n[0],
					s = n[1];
				a.push(r), o.push(s)
			})), [Vn(fs(a, 0), e.shape), Vn(fs(o, 0), e.shape)]
		}
	});
	! function(e) {
		e[e.NONE = 0] = "NONE", e[e.MEAN = 1] = "MEAN", e[e.SUM = 2] = "SUM", e[e.SUM_BY_NONZERO_WEIGHTS = 3] =
			"SUM_BY_NONZERO_WEIGHTS"
	}(Ti || (Ti = {}));
	var _i = fn({
		computeWeightedLoss_: function(e, t, n) {
			void 0 === n && (n = Ti.SUM_BY_NONZERO_WEIGHTS);
			var r = ln(e, "losses", "computeWeightedLoss"),
				a = null;
			null != t && (a = ln(t, "weights", "computeWeightedLoss"));
			var o = null == a ? r : Un(r, a);
			if (n === Ti.NONE) return o;
			if (n === Ti.SUM) return Qr(o);
			if (n === Ti.MEAN) {
				if (null == a) return Ra(o);
				var s = r.size / a.size,
					i = Ar(Qr(o), Qr(a));
				return s > 1 ? Ar(i, Gr(s)) : i
			}
			if (n === Ti.SUM_BY_NONZERO_WEIGHTS) {
				if (null == a) return Ar(Qr(o), Gr(r.size));
				var u = Un(a, La(r.shape)),
					c = On(Qr(Ua(u, Gr(0))), "float32");
				return Ar(Qr(o), c)
			}
			throw Error("Unknown reduction: ".concat(n))
		}
	});
	var Ei = fn({
		absoluteDifference_: function(e, t, n, r) {
			void 0 === r && (r = Ti.SUM_BY_NONZERO_WEIGHTS);
			var a = ln(e, "labels", "absoluteDifference"),
				o = ln(t, "predictions", "absoluteDifference"),
				s = null;
			null != n && (s = ln(n, "weights", "absoluteDifference")), ue(a.shape, o.shape,
				"Error in absoluteDifference: ");
			var i = mn(wa(a, o));
			return _i(i, s, r)
		}
	});
	var Ii = fn({
		cosineDistance_: function(e, t, n, r, a) {
			void 0 === a && (a = Ti.SUM_BY_NONZERO_WEIGHTS);
			var o = ln(e, "labels", "cosineDistance"),
				s = ln(t, "predictions", "cosineDistance"),
				i = null;
			null != r && (i = ln(r, "weights", "cosineDistance")), ue(o.shape, s.shape,
				"Error in cosineDistance: ");
			var u = Gr(1),
				c = wa(u, Qr(Un(o, s), n, !0));
			return _i(c, i, a)
		}
	});
	var Oi = fn({
		hingeLoss_: function(e, t, n, r) {
			void 0 === r && (r = Ti.SUM_BY_NONZERO_WEIGHTS);
			var a = ln(e, "labels", "hingeLoss"),
				o = ln(t, "predictions", "hingeLoss"),
				s = null;
			null != n && (s = ln(n, "weights", "hingeLoss")), ue(a.shape, o.shape,
				"Error in hingeLoss: ");
			var i = Gr(1);
			a = wa(Un(Gr(2), a), i);
			var u = Ko(wa(i, Un(a, o)));
			return _i(u, s, r)
		}
	});
	var Ai = fn({
		huberLoss_: function(e, t, n, r, a) {
			void 0 === r && (r = 1), void 0 === a && (a = Ti.SUM_BY_NONZERO_WEIGHTS);
			var o = ln(e, "labels", "huberLoss"),
				s = ln(t, "predictions", "huberLoss"),
				i = null;
			null != n && (i = ln(n, "weights", "huberLoss")), ue(o.shape, s.shape,
				"Error in huberLoss: ");
			var u = Gr(r),
				c = mn(wa(s, o)),
				p = Va(c, u),
				l = wa(c, p),
				d = gn(Un(Gr(.5), Zr(p)), Un(u, l));
			return _i(d, i, a)
		}
	});
	var Di = fn({
		logLoss_: function(e, t, n, r, a) {
			void 0 === r && (r = 1e-7), void 0 === a && (a = Ti.SUM_BY_NONZERO_WEIGHTS);
			var o = ln(e, "labels", "logLoss"),
				s = ln(t, "predictions", "logLoss"),
				i = null;
			null != n && (i = ln(n, "weights", "logLoss")), ue(o.shape, s.shape,
				"Error in logLoss: ");
			var u = Gr(1),
				c = Gr(r),
				p = ba(Un(o, ya(gn(s, c)))),
				l = Un(wa(u, o), ya(gn(wa(u, s), c))),
				d = wa(p, l);
			return _i(d, i, a)
		}
	});
	var Mi = fn({
		meanSquaredError_: function(e, t, n, r) {
			void 0 === r && (r = Ti.SUM_BY_NONZERO_WEIGHTS);
			var a = ln(e, "labels", "meanSquaredError"),
				o = ln(t, "predictions", "meanSquaredError"),
				s = null;
			null != n && (s = ln(n, "weights", "meanSquaredError")), ue(a.shape, o.shape,
				"Error in meanSquaredError: ");
			var i = ds(a, o);
			return _i(i, s, r)
		}
	});
	var Ci = fn({
		sigmoidCrossEntropy_: function(e, t, n, r, a) {
			void 0 === r && (r = 0), void 0 === a && (a = Ti.SUM_BY_NONZERO_WEIGHTS);
			var o = ln(e, "multiClassLabels", "sigmoidCrossEntropy"),
				s = ln(t, "logits", "sigmoidCrossEntropy"),
				i = null;
			if (null != n && (i = ln(n, "weights", "sigmoidCrossEntropy")), ue(o.shape, s.shape,
					"Error in sigmoidCrossEntropy: "), r > 0) {
				var u = Gr(r),
					c = Gr(1),
					p = Gr(.5);
				o = gn(Un(o, wa(c, u)), Un(p, u))
			}
			var l = function(e, t) {
				var n = ln(e, "labels", "sigmoidCrossEntropyWithLogits"),
					r = ln(t, "logits", "sigmoidCrossEntropyWithLogits");
				ue(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
				var a = Ko(r),
					o = Un(r, n),
					s = va($r(ba(mn(r))));
				return gn(wa(a, o), s)
			}(o, s);
			return _i(l, i, a)
		}
	});
	var Fi = fn({
		softmaxCrossEntropy_: function(e, t, n, r, a) {
			void 0 === r && (r = 0), void 0 === a && (a = Ti.SUM_BY_NONZERO_WEIGHTS);
			var o = ln(e, "onehotLabels", "softmaxCrossEntropy"),
				s = ln(t, "logits", "softmaxCrossEntropy"),
				i = null;
			if (null != n && (i = ln(n, "weights", "softmaxCrossEntropy")), ue(o.shape, s.shape,
					"Error in softmaxCrossEntropy: "), r > 0) {
				var u = Gr(r),
					c = Gr(1),
					p = Gr(o.shape[1]);
				o = gn(Un(o, wa(c, u)), Ar(u, p))
			}
			var l = function(e, t, n) {
				if (void 0 === n && (n = -1), -1 === n && (n = t.rank - 1), n !== t.rank - 1)
					throw Error("Softmax cross entropy along a non-last dimension is not yet " +
						"supported. Labels / logits was rank ".concat(t.rank, " ") +
						"and dim was ".concat(n));
				var r = ga((function(e, t, r) {
					var a = Ta(t, [n], !0),
						o = wa(On(t, "float32"), a);
					r([e, o]);
					var s = ba(Un(o, e));
					return {
						value: Qr(s, [n]),
						gradFunc: function(e, t) {
							var r = d(t, 2),
								a = r[0],
								o = r[1],
								s = Kr(e.shape, [n]);
							return [Un(Vn(e, s), wa(On(a, "float32"), $r(o))),
								Un(Vn(e, s), wa($r(o), On(a, "float32")))
							]
						}
					}
				}));
				return r(e, t)
			}(o, s);
			return _i(l, i, a)
		}
	});
	var Ri = fn({
		sparseFillEmptyRows_: function(e, t, n, r) {
			var a = ln(e, "indices", "sparseFillEmptyRows", "int32"),
				o = ln(t, "values", "sparseFillEmptyRows"),
				s = ln(n, "denseShape", "sparseFillEmptyRows", "int32"),
				i = ln(r, "defaultValue", "sparseFillEmptyRows", o.dtype);
			if (2 !== a.rank) throw new Error(
				"Indices should be Tensor2D but received shape\n        ".concat(a.shape));
			if (1 !== o.rank) throw new Error("Values should be Tensor1D but received shape "
				.concat(o.shape));
			if (1 !== s.rank) throw new Error("Dense shape should be Tensor1D but received shape "
				.concat(s.shape));
			if (0 !== i.rank) throw new Error("Default value should be a scalar but received shape "
				.concat(i.shape));
			var u = {
					indices: a,
					values: o,
					denseShape: s,
					defaultValue: i
				},
				c = on.runKernel("SparseFillEmptyRows", u);
			return {
				outputIndices: c[0],
				outputValues: c[1],
				emptyRowIndicator: c[2],
				reverseIndexMap: c[3]
			}
		}
	});
	var zi = fn({
		sparseReshape_: function(e, t, n) {
			var r = ln(e, "inputIndices", "sparseReshape", "int32"),
				a = ln(t, "inputShape", "sparseReshape", "int32"),
				o = ln(n, "newShape", "sparseReshape", "int32");
			if (2 !== r.rank) throw new Error(
				"Input indices should be Tensor2D but received shape\n        ".concat(r
					.shape));
			if (1 !== a.rank) throw new Error("Input shape should be Tensor1D but received shape "
				.concat(a.shape));
			if (1 !== o.rank) throw new Error("New shape should be Tensor1D but received shape "
				.concat(o.shape));
			var s = {
					inputIndices: r,
					inputShape: a,
					newShape: o
				},
				i = on.runKernel("SparseReshape", s);
			return {
				outputIndices: i[0],
				outputShape: i[1]
			}
		}
	});
	var Li = fn({
		sparseSegmentMean_: function(e, t, n) {
			var r = ln(e, "data", "sparseSegmentMean"),
				a = ln(t, "indices", "sparseSegmentMean", "int32"),
				o = ln(n, "segmentIds", "sparseSegmentMean", "int32");
			if (r.rank < 1) throw new Error(
				"Data should be at least 1 dimensional but received scalar");
			if (1 !== a.rank) throw new Error(
				"Indices should be Tensor1D but received shape\n          ".concat(a.shape));
			if (1 !== o.rank) throw new Error(
				"Segment ids should be Tensor1D but received shape\n          ".concat(o
					.shape));
			var s = {
				data: r,
				indices: a,
				segmentIds: o
			};
			return on.runKernel("SparseSegmentMean", s)
		}
	});
	var Vi = fn({
		sparseSegmentSum_: function(e, t, n) {
			var r = ln(e, "data", "sparseSegmentSum"),
				a = ln(t, "indices", "sparseSegmentSum", "int32"),
				o = ln(n, "segmentIds", "sparseSegmentSum", "int32");
			if (r.rank < 1) throw new Error(
				"Data should be at least 1 dimensional but received scalar");
			if (1 !== a.rank) throw new Error(
				"Indices should be Tensor1D but received shape\n         ".concat(a.shape));
			if (1 !== o.rank) throw new Error(
				"Segment ids should be Tensor1D but received shape\n         ".concat(o
					.shape));
			var s = {
				data: r,
				indices: a,
				segmentIds: o
			};
			return on.runKernel("SparseSegmentSum", s)
		}
	});
	var Pi = fn({
		stringNGrams_: function(e, t, n, r, a, o, s, i) {
			var u = ln(e, "data", "stringNGrams", "string");
			if ("string" !== u.dtype) throw new Error("Data must be of datatype string");
			if (1 !== u.shape.length) throw new Error("Data must be a vector, saw: ".concat(u
				.shape));
			var c = ln(t, "dataSplits", "stringNGrams");
			if ("int32" !== c.dtype) throw new Error("Data splits must be of datatype int32");
			var p = {
					separator: n,
					nGramWidths: r,
					leftPad: a,
					rightPad: o,
					padWidth: s,
					preserveShortSequences: i
				},
				l = {
					data: u,
					dataSplits: c
				},
				d = on.runKernel("StringNGrams", l, p);
			return {
				nGrams: d[0],
				nGramsSplits: d[1]
			}
		}
	});
	var Bi = {
		__proto__: null,
		OP_SCOPE_SUFFIX: hn,
		abs: mn,
		acos: yn,
		acosh: vn,
		add: gn,
		addN: bn,
		all: xn,
		any: Nn,
		argMax: wn,
		argMin: kn,
		asin: Tn,
		asinh: Sn,
		atan: _n,
		atan2: En,
		atanh: In,
		avgPool: Pn,
		avgPool3d: Bn,
		basicLSTMCell: Zn,
		batchNorm: Xn,
		batchNorm2d: Yn,
		batchNorm3d: Jn,
		batchNorm4d: $n,
		batchToSpaceND: Qn,
		bincount: er,
		bitwiseAnd: tr,
		booleanMaskAsync: Os,
		broadcastArgs: nr,
		broadcastTo: rr,
		buffer: ar,
		cast: On,
		ceil: or,
		clipByValue: ir,
		clone: Kn,
		complex: ur,
		concat: jn,
		concat1d: cr,
		concat2d: pr,
		concat3d: lr,
		concat4d: dr,
		conv1d: fr,
		conv2d: hr,
		conv2dTranspose: yr,
		conv3d: vr,
		conv3dTranspose: br,
		cos: xr,
		cosh: Nr,
		cosineWindow: Ls,
		cumprod: wr,
		cumsum: kr,
		denseBincount: Tr,
		depthToSpace: Sr,
		depthwiseConv2d: _r,
		diag: Er,
		dilation2d: Ir,
		div: Ar,
		divNoNan: Rr,
		dot: zr,
		dropout: Rs,
		einsum: Lr,
		elu: Vr,
		enclosingPowerOfTwo: zs,
		ensureShape: Pr,
		equal: Mr,
		erf: Br,
		euclideanNorm: Jr,
		exp: $r,
		expandDims: ea,
		expm1: ta,
		eye: ra,
		fft: is,
		fill: sr,
		floor: aa,
		floorDiv: Or,
		fused: Zs,
		gather: oa,
		gatherND: Fs,
		greater: sa,
		greaterEqual: ia,
		ifft: us,
		imag: ua,
		image: {
			flipLeftRight: ei,
			grayscaleToRGB: ti,
			resizeNearestNeighbor: gi,
			resizeBilinear: vi,
			rgbToGrayscale: ni,
			rotateWithOffset: ri,
			cropAndResize: $s,
			nonMaxSuppression: oi,
			nonMaxSuppressionAsync: di,
			nonMaxSuppressionWithScore: hi,
			nonMaxSuppressionWithScoreAsync: fi,
			nonMaxSuppressionPadded: mi,
			nonMaxSuppressionPaddedAsync: yi,
			threshold: bi,
			transform: xi
		},
		inTopKAsync: Vs,
		irfft: cs,
		isFinite: ca,
		isInf: pa,
		isNaN: la,
		leakyRelu: da,
		less: ha,
		lessEqual: fa,
		linalg: {
			bandPart: Ni,
			gramSchmidt: wi,
			qr: Si
		},
		linspace: function(e, t, n) {
			if (n <= 0) throw new Error("The number of values should be positive.");
			var r = {
				start: e,
				stop: t,
				num: n
			};
			return on.runKernel("LinSpace", {}, r)
		},
		localResponseNormalization: ma,
		log: ya,
		log1p: va,
		logSigmoid: Na,
		logSoftmax: ka,
		logSumExp: Ta,
		logicalAnd: Sa,
		logicalNot: _a,
		logicalOr: Ea,
		logicalXor: Ia,
		losses: {
			absoluteDifference: Ei,
			computeWeightedLoss: _i,
			cosineDistance: Ii,
			hingeLoss: Oi,
			huberLoss: Ai,
			logLoss: Di,
			meanSquaredError: Mi,
			sigmoidCrossEntropy: Ci,
			softmaxCrossEntropy: Fi
		},
		lowerBound: function(e, t) {
			return Aa(e, t, "left")
		},
		matMul: qn,
		max: jr,
		maxPool: Da,
		maxPool3d: Ma,
		maxPoolWithArgmax: Ca,
		maximum: Fa,
		mean: Ra,
		meshgrid: function(e, t, n) {
			var r = (void 0 === n ? {} : n).indexing,
				a = void 0 === r ? "xy" : r;
			if ("xy" !== a && "ij" !== a) throw new TypeError("".concat(a,
				" is not a valid third argument to meshgrid"));
			if (void 0 === e) return [];
			var o = ln(e, "x", "meshgrid", e instanceof jt ? e.dtype : "float32");
			if (void 0 === t) return [o];
			var s = ln(t, "y", "meshgrid", t instanceof jt ? t.dtype : "float32"),
				i = pe(o.shape),
				u = pe(s.shape);
			return "xy" === a ? (o = Vn(o, [1, -1]), s = Vn(s, [-1, 1]), [qn(La([u, 1], o.dtype), o),
				qn(s, La([1, i], s.dtype))
			]) : (o = Vn(o, [-1, 1]), s = Vn(s, [1, -1]), [qn(o, La([1, u], o.dtype)), qn(La([i, 1],
				s.dtype), s)])
		},
		min: qr,
		minimum: Va,
		mirrorPad: Pa,
		mod: Ba,
		moments: Ka,
		movingAverage: Ds,
		mul: Un,
		multiRNNCell: ja,
		multinomial: qa,
		neg: ba,
		norm: Yr,
		notEqual: Ua,
		oneHot: Wa,
		ones: La,
		onesLike: Ga,
		op: fn,
		outerProduct: Ha,
		pad: Za,
		pad1d: Qa,
		pad2d: Xa,
		pad3d: Ya,
		pad4d: Ja,
		pool: eo,
		pow: Ur,
		prelu: to,
		print: function(e, t) {
			void 0 === t && (t = !1), console.log(e.toString(t))
		},
		prod: no,
		raggedGather: ro,
		raggedRange: ao,
		raggedTensorToTensor: oo,
		rand: so,
		randomGamma: Co,
		randomNormal: Fo,
		randomStandardNormal: Ro,
		randomUniform: zo,
		randomUniformInt: Lo,
		range: Vo,
		real: Po,
		reciprocal: Bo,
		relu: Ko,
		relu6: jo,
		reshape: Vn,
		reverse: qo,
		reverse1d: Uo,
		reverse2d: Wo,
		reverse3d: Go,
		reverse4d: Ho,
		rfft: ls,
		round: Zo,
		rsqrt: Qo,
		scalar: Gr,
		scatterND: Ms,
		searchSorted: Aa,
		selu: Xo,
		separableConv2d: Yo,
		setdiff1dAsync: Jo,
		sigmoid: Wn,
		sign: $o,
		signal: {
			hammingWindow: Qs,
			hannWindow: Xs,
			frame: Ys,
			stft: Js
		},
		sin: es,
		sinh: ts,
		slice: Gn,
		slice1d: ns,
		slice2d: rs,
		slice3d: as,
		slice4d: os,
		softmax: ss,
		softplus: xa,
		spaceToBatchND: $a,
		sparse: {
			sparseFillEmptyRows: Ri,
			sparseReshape: zi,
			sparseSegmentMean: Li,
			sparseSegmentSum: Vi
		},
		sparseToDense: Cs,
		spectral: {
			fft: is,
			ifft: us,
			rfft: ls,
			irfft: cs
		},
		split: ps,
		sqrt: Hr,
		square: Zr,
		squaredDifference: ds,
		squeeze: hs,
		stack: fs,
		step: ms,
		stridedSlice: ys,
		string: {
			stringNGrams: Pi,
			stringSplit: fn({
				stringSplit_: function(e, t, n) {
					void 0 === n && (n = !0);
					var r = ln(e, "input", "stringSplit", "string"),
						a = ln(t, "delimiter", "stringSplit", "string");
					if (1 !== r.rank) throw new Error(
						"Input should be Tensor1D but received shape ".concat(r.shape));
					if (0 !== a.rank) throw new Error(
						"Delimiter should be a scalar but received shape ".concat(a
							.shape));
					var o = {
							skipEmpty: n
						},
						s = {
							input: r,
							delimiter: a
						},
						i = on.runKernel("StringSplit", s, o);
					return {
						indices: i[0],
						values: i[1],
						shape: i[2]
					}
				}
			}),
			stringToHashBucketFast: fn({
				stringToHashBucketFast_: function(e, t) {
					var n = ln(e, "input", "stringToHashBucketFast", "string"),
						r = {
							numBuckets: t
						};
					if (t <= 0) throw new Error("Number of buckets must be at least 1");
					var a = {
						input: n
					};
					return on.runKernel("StringToHashBucketFast", a, r)
				}
			}),
			staticRegexReplace: fn({
				staticRegexReplace_: function(e, t, n, r) {
					void 0 === r && (r = !0);
					var a = ln(e, "input", "staticRegexReplace", "string"),
						o = {
							pattern: t,
							rewrite: n,
							replaceGlobal: r
						};
					return on.runKernel("StaticRegexReplace", {
						x: a
					}, o)
				}
			})
		},
		sub: wa,
		sum: Qr,
		tan: vs,
		tanh: Hn,
		tensor: gs,
		tensor1d: bs,
		tensor2d: xs,
		tensor3d: function(e, t, n) {
			if (ce(e), null != t && 3 !== t.length) throw new Error(
				"tensor3d() requires shape to have three numbers");
			var r = un(e, n);
			if (3 !== r.length && 1 !== r.length) throw new Error(
				"tensor3d() requires values to be number[][][] or flat/TypedArray");
			if (1 === r.length && null == t) throw new Error(
				"tensor3d() requires shape to be provided when `values` are a flat array");
			return Wr(e, t, r, n)
		},
		tensor4d: function(e, t, n) {
			if (ce(e), null != t && 4 !== t.length) throw new Error(
				"tensor4d() requires shape to have four numbers");
			var r = un(e, n);
			if (4 !== r.length && 1 !== r.length) throw new Error(
				"tensor4d() requires values to be number[][][][] or flat/TypedArray");
			if (1 === r.length && null == t) throw new Error(
				"tensor4d() requires shape to be provided when `values` are a flat array");
			return Wr(e, t, r, n)
		},
		tensor5d: function(e, t, n) {
			if (ce(e), null != t && 5 !== t.length) throw new Error(
				"tensor5d() requires shape to have five numbers");
			var r = un(e, n);
			if (5 !== r.length && 1 !== r.length) throw new Error(
				"tensor5d() requires values to be number[][][][][] or flat/TypedArray");
			if (1 === r.length && null == t) throw new Error(
				"tensor5d() requires shape to be provided when `values` are a flat array");
			return Wr(e, t, r, n)
		},
		tensor6d: function(e, t, n) {
			if (ce(e), null != t && 6 !== t.length) throw new Error(
				"tensor6d() requires shape to have six numbers");
			var r = un(e, n);
			if (6 !== r.length && 1 !== r.length) throw new Error(
				"tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
			if (1 === r.length && null == t) throw new Error(
				"tensor6d() requires shape to be provided when `values` are a flat array");
			return Wr(e, t = t || r, r, n)
		},
		tensorScatterUpdate: ws,
		tile: na,
		topk: ks,
		transpose: As,
		truncatedNormal: Ts,
		unique: Ss,
		unsortedSegmentSum: _s,
		unstack: Es,
		upperBound: function(e, t) {
			return Aa(e, t, "right")
		},
		variable: function(e, t, n, r) {
			return void 0 === t && (t = !0), on.makeVariable(e, t, n, r)
		},
		where: Cr,
		whereAsync: Is,
		zeros: za,
		zerosLike: Fr
	};

	function Ki(e, n, r) {
		if (void 0 === r && (r = ""), "number" != typeof e && "number" != typeof n) {
			t.util.assert(e.length === n.length, (function() {
				return r + " Shapes ".concat(e, " and ").concat(n, " must match")
			}));
			for (var a = 0; a < e.length; a++) {
				var o = e[a],
					s = n[a];
				t.util.assert(o < 0 || s < 0 || o === s, (function() {
					return r + " Shapes ".concat(e, " and ").concat(n, " must match")
				}))
			}
		}
	}

	function ji(e) {
		return "number" != typeof e && !e.some((function(e) {
			return e < 0
		}))
	}

	function qi(e, t, n) {
		var r = Ui(e, n),
			a = !ji(r);
		if (a && 0 === t.length) throw new Error("Tried to calculate elements of an empty list" +
			" with non-fully-defined elementShape: ".concat(r));
		if (a && t.forEach((function(e) {
				r = Ui(e.shape, r)
			})), !ji(r)) throw new Error("Non-fully-defined elementShape: ".concat(r));
		return r
	}

	function Ui(e, t) {
		if ("number" == typeof e) return t;
		if ("number" == typeof t) return e;
		if (e.length !== t.length) throw new Error("Incompatible ranks during merge: ".concat(e, " vs. ")
			.concat(t));
		for (var n = [], r = 0; r < e.length; ++r) {
			var a = e[r],
				o = t[r];
			if (a >= 0 && o >= 0 && a !== o) throw new Error("Incompatible shape during merge: ".concat(e,
				" vs. ").concat(t));
			n[r] = a >= 0 ? a : o
		}
		return n
	}
	var Wi = function() {
			function e(e, n, r, a, o, s, i) {
				this.name = e, this.dtype = n, this.maxSize = r, this.elementShape = a, this
					.identicalElementShapes = o, this.dynamicSize = s, this.clearAfterRead = i, this
					.tensors = [], this.closed_ = !1, this.idTensor = t.scalar(0), t.keep(this.idTensor)
			}
			return Object.defineProperty(e.prototype, "id", {
				get: function() {
					return this.idTensor.id
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "closed", {
				get: function() {
					return this.closed_
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.clearAndClose = function(e) {
				this.tensors.forEach((function(t) {
					null != e && e.has(t.tensor.id) || t.tensor.dispose()
				})), this.tensors = [], this.closed_ = !0, this.idTensor.dispose()
			}, e.prototype.size = function() {
				return this.tensors.length
			}, e.prototype.read = function(e) {
				if (this.closed_) throw new Error("TensorArray ".concat(this.name,
					" has already been closed."));
				if (e < 0 || e >= this.size()) throw new Error("Tried to read from index ".concat(e,
					", but array size is: ").concat(this.size()));
				var t = this.tensors[e];
				if (t.cleared) throw new Error("TensorArray ".concat(this.name, ": Could not read index ")
					.concat(e, " twice because it was cleared after a previous read ") +
					"(perhaps try setting clear_after_read = false?).");
				return this.clearAfterRead && (t.cleared = !0), t.read = !0, t.tensor
			}, e.prototype.readMany = function(e) {
				var t = this;
				return e.map((function(e) {
					return t.read(e)
				}))
			}, e.prototype.write = function(e, n) {
				if (this.closed_) throw new Error("TensorArray ".concat(this.name,
					" has already been closed."));
				if (e < 0 || !this.dynamicSize && e >= this.maxSize) throw new Error(
					"Tried to write to index ".concat(e,
						", but array is not resizeable and size is: ").concat(this.maxSize));
				var r = this.tensors[e] || {};
				if (n.dtype !== this.dtype) throw new Error("TensorArray ".concat(this.name,
					": Could not write to TensorArray index ").concat(e,
					",\n          because the value dtype is ").concat(n.dtype,
					", but TensorArray dtype is ").concat(this.dtype, "."));
				if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (
						this.elementShape = n.shape), Ki(this.elementShape, n.shape, "TensorArray ".concat(
						this.name, ": Could not write to TensorArray index ").concat(e, ".")), r.read)
					throw new Error("TensorArray ".concat(this.name,
						": Could not write to TensorArray index ").concat(e,
						", because it has already been read."));
				if (r.written) throw new Error("TensorArray ".concat(this.name,
					": Could not write to TensorArray index ").concat(e,
					", because it has already been written."));
				r.tensor = n, t.keep(n), r.written = !0, this.tensors[e] = r
			}, e.prototype.writeMany = function(e, t) {
				var n = this;
				if (e.length !== t.length) throw new Error("TensorArray ".concat(this.name,
					": could not write multiple tensors,") + "because the index size: ".concat(e
					.length, " is not the same as tensors size: ").concat(t.length, "."));
				e.forEach((function(e, r) {
					return n.write(e, t[r])
				}))
			}, e.prototype.gather = function(e, n) {
				if (n && n !== this.dtype) throw new Error("TensorArray dtype is ".concat(this.dtype,
					" but gather requested dtype ").concat(n));
				if (e) e = e.slice(0, this.size());
				else {
					e = [];
					for (var r = 0; r < this.size(); r++) e.push(r)
				}
				if (0 === e.length) return t.tensor([], [0].concat(this.elementShape));
				var a = this.readMany(e);
				return Ki(this.elementShape, a[0].shape, "TensorArray shape mismatch: "), t.stack(a, 0)
			}, e.prototype.concat = function(e) {
				if (e && e !== this.dtype) throw new Error("TensorArray dtype is ".concat(this.dtype,
					" but concat requested dtype ").concat(e));
				if (0 === this.size()) return t.tensor([], [0].concat(this.elementShape));
				for (var n = [], r = 0; r < this.size(); r++) n.push(r);
				var a = this.readMany(n);
				return Ki(this.elementShape, a[0].shape, "TensorArray shape mismatch: tensor array shape ("
						.concat(this.elementShape, ") vs first tensor shape (").concat(a[0].shape, ")")), t
					.concat(a, 0)
			}, e.prototype.scatter = function(e, n) {
				if (n.dtype !== this.dtype) throw new Error("TensorArray dtype is ".concat(this.dtype,
					" but tensor has dtype ").concat(n.dtype));
				if (e.length !== n.shape[0]) throw new Error(
					"Expected len(indices) == tensor.shape[0], but saw: ".concat(e.length, " vs. ")
					.concat(n.shape[0]));
				var r = Math.max.apply(Math, h([], d(e), !1));
				if (!this.dynamicSize && r >= this.maxSize) throw new Error(
					"Max index must be < array size (".concat(r, "  vs. ").concat(this.maxSize, ")")
				);
				this.writeMany(e, t.unstack(n, 0))
			}, e.prototype.split = function(e, n) {
				var r = this;
				if (n.dtype !== this.dtype) throw new Error("TensorArray dtype is ".concat(this.dtype,
					" but tensor has dtype ").concat(n.dtype));
				var a = 0,
					o = e.map((function(e) {
						return a += e
					}));
				if (a !== n.shape[0]) throw new Error(
					"Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        "
					.concat(a, ", and tensor's shape is: ").concat(n.shape));
				if (!this.dynamicSize && e.length !== this.maxSize) throw new Error(
					"TensorArray's size is not equal to the size of lengths (".concat(this.maxSize,
						" vs. ").concat(e.length, "), ") +
					"and the TensorArray is not marked as dynamically resizeable");
				var s = 0 === a ? 0 : n.size / a,
					i = [];
				t.tidy((function() {
					n = t.reshape(n, [1, a, s]);
					for (var u = 0; u < e.length; ++u) {
						var c = [0, 0 === u ? 0 : o[u - 1], 0],
							p = [1, e[u], s];
						i[u] = t.reshape(t.slice(n, c, p), r.elementShape)
					}
					return i
				}));
				for (var u = [], c = 0; c < e.length; c++) u[c] = c;
				this.writeMany(u, i)
			}, e
		}(),
		Gi = function() {
			function e(e, n, r, a) {
				void 0 === a && (a = -1), this.tensors = e, this.elementShape = n, this.elementDtype = r,
					null != e && e.forEach((function(e) {
						if (r !== e.dtype) throw new Error("Invalid data types; op elements ".concat(r,
							", but list elements ").concat(e.dtype));
						Ki(n, e.shape, "TensorList shape mismatch: "), t.keep(e)
					})), this.idTensor = t.scalar(0), this.maxNumElements = a, t.keep(this.idTensor)
			}
			return Object.defineProperty(e.prototype, "id", {
				get: function() {
					return this.idTensor.id
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.copy = function() {
				return new e(h([], d(this.tensors), !1), this.elementShape, this.elementDtype)
			}, e.prototype.clearAndClose = function(e) {
				this.tensors.forEach((function(t) {
					null != e && e.has(t.id) || t.dispose()
				})), this.tensors.length = 0, this.idTensor.dispose()
			}, e.prototype.size = function() {
				return this.tensors.length
			}, e.prototype.stack = function(e, n, r) {
				var a = this;
				if (void 0 === r && (r = -1), n !== this.elementDtype) throw new Error(
					"Invalid data types; op elements ".concat(n, ", but list elements ").concat(this
						.elementDtype));
				if (-1 !== r && this.tensors.length !== r) throw new Error("Operation expected a list with "
					.concat(r, " elements but got a list with ").concat(this.tensors.length,
						" elements."));
				Ki(e, this.elementShape, "TensorList shape mismatch: ");
				var o = qi(this.elementShape, this.tensors, e);
				return t.tidy((function() {
					var e = a.tensors.map((function(e) {
						return t.reshape(e, o)
					}));
					return t.stack(e, 0)
				}))
			}, e.prototype.popBack = function(e, n) {
				if (n !== this.elementDtype) throw new Error("Invalid data types; op elements ".concat(n,
					", but list elements ").concat(this.elementDtype));
				if (0 === this.size()) throw new Error("Trying to pop from an empty list.");
				var r = qi(this.elementShape, this.tensors, e),
					a = this.tensors.pop();
				return a.kept = !1, Ki(a.shape, e, "TensorList shape mismatch: "), t.reshape(a, r)
			}, e.prototype.pushBack = function(e) {
				if (e.dtype !== this.elementDtype) throw new Error("Invalid data types; op elements "
					.concat(e.dtype, ", but list elements ").concat(this.elementDtype));
				if (Ki(e.shape, this.elementShape, "TensorList shape mismatch: "), this.maxNumElements ===
					this.size()) throw new Error("Trying to push element into a full list.");
				t.keep(e), this.tensors.push(e)
			}, e.prototype.resize = function(t) {
				if (t < 0) throw new Error("TensorListResize expects size to be non-negative. Got: ".concat(
					t));
				if (-1 !== this.maxNumElements && t > this.maxNumElements) throw new Error(
					"TensorListResize input size ".concat(t, " is greater maxNumElement ").concat(
						this.maxNumElements, "."));
				var n = new e([], this.elementShape, this.elementDtype, this.maxNumElements);
				n.tensors.length = t;
				for (var r = 0; r < Math.min(this.tensors.length, t); ++r) n.tensors[r] = this.tensors[r];
				return n
			}, e.prototype.getItem = function(e, n, r) {
				if (r !== this.elementDtype) throw new Error("Invalid data types; op elements ".concat(r,
					", but list elements ").concat(this.elementDtype));
				if (e < 0 || e > this.tensors.length) throw new Error("Trying to access element ".concat(e,
					" in a list with ").concat(this.tensors.length, " elements."));
				if (null == this.tensors[e]) throw new Error("element at index ".concat(e, " is null."));
				Ki(this.tensors[e].shape, n, "TensorList shape mismatch: ");
				var a = qi(this.elementShape, this.tensors, n);
				return t.reshape(this.tensors[e], a)
			}, e.prototype.setItem = function(e, n) {
				if (n.dtype !== this.elementDtype) throw new Error("Invalid data types; op elements "
					.concat(n.dtype, ", but list elements ").concat(this.elementDtype));
				if (e < 0 || -1 !== this.maxNumElements && e >= this.maxNumElements) throw new Error(
					"Trying to set element ".concat(e, " in a list with max ").concat(this
						.maxNumElements, " elements."));
				Ki(this.elementShape, n.shape, "TensorList shape mismatch: "), t.keep(n), null != this
					.tensors[e] && (this.tensors[e].kept = !1), this.tensors[e] = n
			}, e.prototype.gather = function(e, n, r) {
				var a = this;
				if (n !== this.elementDtype) throw new Error("Invalid data types; op elements ".concat(n,
					", but list elements ").concat(this.elementDtype));
				Ki(this.elementShape, r, "TensorList shape mismatch: "), e = e.slice(0, this.size());
				var o = qi(this.elementShape, this.tensors, r);
				return 0 === e.length ? t.tensor([], [0].concat(o)) : t.tidy((function() {
					var n = e.map((function(e) {
						return t.reshape(a.tensors[e], o)
					}));
					return t.stack(n, 0)
				}))
			}, e.prototype.concat = function(e, n) {
				var r = this;
				if (e && e !== this.elementDtype) throw new Error("TensorList dtype is ".concat(this
					.elementDtype, " but concat requested dtype ").concat(e));
				Ki(this.elementShape, n, "TensorList shape mismatch: ");
				var a = qi(this.elementShape, this.tensors, n);
				return 0 === this.size() ? t.tensor([], [0].concat(a)) : t.tidy((function() {
					var e = r.tensors.map((function(e) {
						return t.reshape(e, a)
					}));
					return t.concat(e, 0)
				}))
			}, e
		}();
	var Hi = function(e, n, r) {
		return c(void 0, void 0, void 0, (function() {
			var a, o, s, i, u, c, l, f, m, g, b, x, N, w, T, S, _, E, I, O, A, D, M, C, F, R, z,
				L, V, P, B, K, j, q, U, W, G, H, Z, Q, X, Y, J, $, ee, te, ne, re, ae, oe, se,
				ie, ue, ce, pe, le, de;
			return p(this, (function(he) {
				switch (he.label) {
					case 0:
						switch (e.op) {
							case "If":
							case "StatelessIf":
								return [3, 1];
							case "While":
							case "StatelessWhile":
								return [3, 3];
							case "LoopCond":
								return [3, 9];
							case "Switch":
								return [3, 10];
							case "Merge":
								return [3, 12];
							case "Enter":
								return [3, 13];
							case "Exit":
								return [3, 14];
							case "NextIteration":
								return [3, 15];
							case "TensorArrayV3":
								return [3, 16];
							case "TensorArrayWriteV3":
								return [3, 17];
							case "TensorArrayReadV3":
								return [3, 18];
							case "TensorArrayGatherV3":
								return [3, 19];
							case "TensorArrayScatterV3":
								return [3, 20];
							case "TensorArrayConcatV3":
								return [3, 21];
							case "TensorArraySplitV3":
								return [3, 22];
							case "TensorArraySizeV3":
								return [3, 23];
							case "TensorArrayCloseV3":
								return [3, 24];
							case "TensorListSetItem":
								return [3, 25];
							case "TensorListGetItem":
								return [3, 26];
							case "TensorListScatterV2":
							case "TensorListScatter":
								return [3, 27];
							case "TensorListReserve":
							case "EmptyTensorList":
								return [3, 28];
							case "TensorListGather":
								return [3, 29];
							case "TensorListStack":
								return [3, 30];
							case "TensorListFromTensor":
								return [3, 31];
							case "TensorListConcat":
							case "TensorListConcatV2":
								return [3, 32];
							case "TensorListPushBack":
								return [3, 33];
							case "TensorListPopBack":
								return [3, 34];
							case "TensorListSplit":
								return [3, 35];
							case "TensorListLength":
								return [3, 36];
							case "TensorListResize":
								return [3, 37]
						}
						return [3, 38];
					case 1:
						return a = y("thenBranch", e, n, r), o = y("elseBranch", e,
							n, r), s = y("cond", e, n, r), c = y("args", e, n,
							r), [4, s.data()];
					case 2:
						return (m = he.sent())[0] ? [2, r.functionMap[a]
							.executeFunctionAsync(c, r.tensorArrayMap, r
								.tensorListMap)
						] : [2, r.functionMap[o].executeFunctionAsync(c, r
							.tensorArrayMap, r.tensorListMap)];
					case 3:
						return i = y("body", e, n, r), u = y("cond", e, n, r), c =
							y("args", e, n, r), [4, r.functionMap[u]
								.executeFunctionAsync(c, r.tensorArrayMap, r
									.tensorListMap)
							];
					case 4:
						return l = he.sent(), f = c.map((function(e) {
							return e.id
						})), [4, l[0].data()];
					case 5:
						m = he.sent(), l.forEach((function(e) {
							e.kept || -1 !== f.indexOf(e.id) || e
								.dispose()
						})), g = c, b = function() {
							var e, t, n;
							return p(this, (function(a) {
								switch (a.label) {
									case 0:
										return e = g, [4, r
											.functionMap[i]
											.executeFunctionAsync(
												g, r
												.tensorArrayMap,
												r.tensorListMap)
										];
									case 1:
										return g = a.sent(), t = g
											.map((function(e) {
												return e.id
											})), e.forEach((
												function(e) {
													e.kept || -
														1 !== f
														.indexOf(
															e.id
														) ||
														-1 !== t
														.indexOf(
															e.id
														) ||
														e
														.dispose()
												})), [4, r
												.functionMap[u]
												.executeFunctionAsync(
													g, r
													.tensorArrayMap,
													r.tensorListMap)
											];
									case 2:
										return [4, (n = a.sent())[0]
											.data()
										];
									case 3:
										return m = a.sent(), n
											.forEach((function(e) {
												e.kept || -
													1 !== f
													.indexOf(
														e.id
													) ||
													-1 !== t
													.indexOf(
														e.id
													) ||
													e
													.dispose()
											})), [2]
								}
							}))
						}, he.label = 6;
					case 6:
						return m[0] ? [5, b()] : [3, 8];
					case 7:
						return he.sent(), [3, 6];
					case 8:
						return [2, g];
					case 9:
						return [2, [k(x = y("pred", e, n, r))]];
					case 10:
						return x = y("pred", e, n, r), (T = y("data", e, n, r))
							.kept || (T = k(T)), [4, x.data()];
					case 11:
						return [2, he.sent()[0] ? [void 0, T] : [T, void 0]];
					case 12:
						return N = e.inputNames.find((function(e) {
							return void 0 !== v(e, n, r)
						})), N ? [2, [k(T = v(N, n, r))]] : [2, void 0];
					case 13:
						return w = y("frameName", e, n, r), T = y("tensor", e, n,
							r), r.enterFrame(w), [2, [k(T)]];
					case 14:
						return T = y("tensor", e, n, r), r.exitFrame(), [2, [k(T)]];
					case 15:
						return T = y("tensor", e, n, r), r.nextIteration(), [2, [k(
							T)]];
					case 16:
						return pe = y("size", e, n, r), S = y("dtype", e, n, r),
							se = y("elementShape", e, n, r), _ = y("dynamicSize", e,
								n, r), E = y("clearAfterRead", e, n, r), I = y(
								"identicalElementShapes", e, n, r), O = y("name", e,
								n, r), A = new Wi(O, S, pe, se, I, _, E), r
							.addTensorArray(A), [2, [A.idTensor, t.scalar(1)]];
					case 17:
						return D = y("tensorArrayId", e, n, r), U = y("index", e, n,
							r), re = y("tensor", e, n, r), (M = r
							.getTensorArray(D.id)).write(U, re), [2, [M
							.idTensor
						]];
					case 18:
						return C = y("tensorArrayId", e, n, r), W = y("index", e, n,
							r), [2, [r.getTensorArray(C.id).read(W)]];
					case 19:
						return X = y("tensorArrayId", e, n, r), Y = y("indices", e,
							n, r), F = y("dtype", e, n, r), [2, [r
							.getTensorArray(X.id).gather(Y, F)
						]];
					case 20:
						return R = y("tensorArrayId", e, n, r), G = y("indices", e,
							n, r), H = y("tensor", e, n, r), (z = r
							.getTensorArray(R.id)).scatter(G, H), [2, [z
							.idTensor
						]];
					case 21:
						return te = y("tensorArrayId", e, n, r), L = r
							.getTensorArray(te.id), ne = y("dtype", e, n, r), [2, [L
								.concat(ne)
							]];
					case 22:
						return V = y("tensorArrayId", e, n, r), oe = y("tensor", e,
							n, r), ie = y("lengths", e, n, r), (P = r
							.getTensorArray(V.id)).split(ie, oe), [2, [P
							.idTensor
						]];
					case 23:
						return B = y("tensorArrayId", e, n, r), K = r
							.getTensorArray(B.id), [2, [t.scalar(K.size(),
								"int32")]];
					case 24:
						return j = y("tensorArrayId", e, n, r), (q = r
							.getTensorArray(j.id)).clearAndClose(), [2, [q
							.idTensor
						]];
					case 25:
						return ce = y("tensorListId", e, n, r), U = y("index", e, n,
							r), re = y("tensor", e, n, r), (ue = r
							.getTensorList(ce.id)).setItem(U, re), [2, [ue
							.idTensor
						]];
					case 26:
						return ce = y("tensorListId", e, n, r), W = y("index", e, n,
							r), se = y("elementShape", e, n, r), ae = y(
							"elementDType", e, n, r), [2, [(ue = r
							.getTensorList(ce.id)).getItem(W, se, ae)]];
					case 27:
						return G = y("indices", e, n, r), H = y("tensor", e, n, r),
							se = y("elementShape", e, n, r), J = y("numElements", e,
								n, r), ue = function(e, n, r, a) {
								if (n.length !== e.shape[0]) throw new Error(
									"Expected len(indices) == tensor.shape[0], but saw: "
									.concat(n.length, " vs. ").concat(e
										.shape[0]));
								var o = Math.max.apply(Math, h([], d(n), !1));
								if (null != a && -1 !== a && o >= a)
									throw new Error(
										"Max index must be < array size ("
										.concat(o, "  vs. ").concat(a, ")"));
								var s = new Gi([], r, e.dtype, a),
									i = t.unstack(e, 0);
								return n.forEach((function(e, t) {
									s.setItem(e, i[t])
								})), s
							}(H, G, se, J), r.addTensorList(ue), [2, [ue.idTensor]];
					case 28:
						return se = y("elementShape", e, n, r), ee = y(
								"elementDType", e, n, r), Z = void 0, Z =
							"TensorListReserve" === e.op ? "numElements" :
							"maxNumElements", J = y(Z, e, n, r), Q =
							"TensorListReserve" === e.op ? -1 : J, ue = function(e,
								t, n, r) {
								return new Gi([], e, t, r)
							}(se, ee, 0, Q), r.addTensorList(ue), [2, [ue
								.idTensor
							]];
					case 29:
						return X = y("tensorListId", e, n, r), Y = y("indices", e,
							n, r), se = y("elementShape", e, n, r), ee = y(
							"elementDType", e, n, r), [2, [(ue = r
							.getTensorList(X.id)).gather(Y, ee, se)]];
					case 30:
						return ce = y("tensorListId", e, n, r), se = y(
							"elementShape", e, n, r), ee = y("elementDType", e,
							n, r), J = y("numElements", e, n, r), [2, [(ue = r
							.getTensorList(ce.id)).stack(se, ee, J)]];
					case 31:
						return $ = y("tensor", e, n, r), se = y("elementShape", e,
								n, r), ee = y("elementDType", e, n, r), ue =
							function(e, n, r) {
								var a = e.dtype;
								if (e.shape.length < 1) throw new Error(
									"Tensor must be at least a vector, but saw shape: "
									.concat(e.shape));
								if (e.dtype !== r) throw new Error(
									"Invalid data types; op elements "
									.concat(e.dtype, ", but list elements ")
									.concat(r));
								Ki(e.shape.slice(1), n,
									"TensorList shape mismatch: ");
								var o = t.unstack(e);
								return new Gi(o, n, a)
							}($, se, ee), r.addTensorList(ue), [2, [ue.idTensor]];
					case 32:
						return te = y("tensorListId", e, n, r), ue = r
							.getTensorList(te.id), ne = y("dtype", e, n, r), se = y(
								"elementShape", e, n, r), [2, [ue.concat(ne, se)]];
					case 33:
						return ce = y("tensorListId", e, n, r), re = y("tensor", e,
							n, r), (ue = r.getTensorList(ce.id)).pushBack(re), [
							2, [ue.idTensor]
						];
					case 34:
						return ce = y("tensorListId", e, n, r), se = y(
							"elementShape", e, n, r), ae = y("elementDType", e,
							n, r), [2, [(ue = r.getTensorList(ce.id)).popBack(
							se, ae)]];
					case 35:
						return oe = y("tensor", e, n, r), se = y("elementShape", e,
							n, r), ie = y("lengths", e, n, r), ue = function(e,
							n, r) {
							var a = 0,
								o = n.map((function(e) {
									return a += e
								}));
							if (a !== e.shape[0]) throw new Error(
								"Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        "
								.concat(a, ", and tensor's shape is: ")
								.concat(e.shape));
							for (var s = Ui(e.shape.slice(1), r), i = 0 === a ?
									0 : e.size / a, u = t.tidy((function() {
										var r = [];
										e = t.reshape(e, [1, a, i]);
										for (var u = 0; u < n.length; ++
											u) {
											var c = [0, 0 === u ? 0 : o[
													u - 1], 0],
												p = [1, n[u], i];
											r[u] = t.reshape(t.slice(e,
												c, p), s)
										}
										return e.dispose(), r
									})), c = new Gi([], r, e.dtype, n.length),
									p = 0; p < u.length; p++) c.setItem(p, u[
								p]);
							return c
						}(oe, ie, se), r.addTensorList(ue), [2, [ue.idTensor]];
					case 36:
						return ce = y("tensorListId", e, n, r), ue = r
							.getTensorList(ce.id), [2, [t.scalar(ue.size(),
								"int32")]];
					case 37:
						return ce = y("tensorListId", e, n, r), pe = y("size", e, n,
								r), le = r.getTensorList(ce.id), de = le.resize(pe),
							r.addTensorList(de), [2, [de.idTensor]];
					case 38:
						throw TypeError("Node type ".concat(e.op,
							" is not implemented"))
				}
			}))
		}))
	};

	function Zi(e, t, n) {
		var r = d(y("fusedOps", e, t, n), 2),
			a = r[0],
			o = r[1],
			s = "biasadd" === a,
			i = !s,
			u = "prelu" === o,
			c = "fusedbatchnorm" === a,
			p = y("numArgs", e, t, n);
		if (s) {
			if (u && 2 !== p) throw new Error(
				"FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha."
			);
			if (!u && s && 1 !== p) throw new Error(
				"FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")
		}
		if (c) throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
		var l = y("strides", e, t, n),
			h = w(e, t, n),
			f = y("dataFormat", e, t, n).toUpperCase(),
			m = y("dilations", e, t, n),
			v = d(y("args", e, t, n), 2),
			g = v[0],
			b = v[1];
		return i && (b = g, g = void 0), {
			stride: l,
			pad: h,
			dataFormat: f,
			dilations: m,
			biasArg: g,
			preluArg: b,
			activationFunc: o,
			leakyreluAlpha: y("leakyreluAlpha", e, t, n)
		}
	}

	function Qi(e, t, n) {
		return {
			boxes: y("boxes", e, t, n),
			scores: y("scores", e, t, n),
			maxOutputSize: y("maxOutputSize", e, t, n),
			iouThreshold: y("iouThreshold", e, t, n),
			scoreThreshold: y("scoreThreshold", e, t, n),
			softNmsSigma: y("softNmsSigma", e, t, n)
		}
	}
	var Xi = function() {
		function e(e, n) {
			this.keyDType = e, this.valueDType = n, this.handle = t.scalar(0), this.tensorMap = new Map, t
				.keep(this.handle)
		}
		return Object.defineProperty(e.prototype, "id", {
			get: function() {
				return this.handle.id
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.clearAndClose = function() {
			this.tensorMap.forEach((function(e) {
				return e.dispose()
			})), this.tensorMap.clear(), this.handle.dispose()
		}, e.prototype.size = function() {
			return this.tensorMap.size
		}, e.prototype.tensorSize = function() {
			return Gr(this.size(), "int32")
		}, e.prototype.import = function(e, n) {
			return c(this, void 0, void 0, (function() {
				var r, a = this;
				return p(this, (function(o) {
					switch (o.label) {
						case 0:
							return this.checkKeyAndValueTensor(e, n), [4, e
								.data()
							];
						case 1:
							return r = o.sent(), this.tensorMap.forEach((
								function(e) {
									return e.dispose()
								})), this.tensorMap.clear(), [2, t.tidy((
								function() {
									var e = t.unstack(n),
										o = r.length,
										s = e.length;
									t.util.assert(o === s, (
										function() {
											return "The number of elements doesn't match, keys has " +
												"".concat(o,
													" elements, the values has "
												)
												.concat(s,
													" ") +
												"elements."
										}));
									for (var i = 0; i < o; i++) {
										var u = r[i],
											c = e[i];
										t.keep(c), a.tensorMap.set(
											u, c)
									}
									return a.handle
								}))]
					}
				}))
			}))
		}, e.prototype.find = function(e, n) {
			return c(this, void 0, void 0, (function() {
				var r, a = this;
				return p(this, (function(o) {
					switch (o.label) {
						case 0:
							return this.checkKeyAndValueTensor(e, n), [4, e
								.data()
							];
						case 1:
							return r = o.sent(), [2, t.tidy((function() {
								for (var e = [], o = 0; o < r
									.length; o++) {
									var s = r[o],
										i = a.findWithDefault(s,
											n);
									e.push(i)
								}
								return t.stack(e)
							}))]
					}
				}))
			}))
		}, e.prototype.findWithDefault = function(e, t) {
			var n = this.tensorMap.get(e);
			return null != n ? n : t
		}, e.prototype.checkKeyAndValueTensor = function(e, t) {
			if (e.dtype !== this.keyDType) throw new Error("Expect key dtype ".concat(this.keyDType,
				", but got ") + "".concat(e.dtype));
			if (t.dtype !== this.valueDType) throw new Error("Expect value dtype ".concat(this
				.valueDType, ", but got ") + "".concat(t.dtype))
		}, e
	}();

	function Yi(e, n, r, o, s) {
		void 0 === s && (s = a.tidy);
		var i = function(e, n, r) {
			switch (e.category) {
				case "arithmetic":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "BiasAdd":
								case "AddV2":
								case "Add":
									return [r.add(y("a", e, t, n), y("b", e, t, n))];
								case "AddN":
									return [r.addN(y("tensors", e, t, n))];
								case "FloorMod":
								case "Mod":
									return [r.mod(y("a", e, t, n), y("b", e, t, n))];
								case "Mul":
									return [r.mul(y("a", e, t, n), y("b", e, t, n))];
								case "RealDiv":
								case "Div":
									return [r.div(y("a", e, t, n), y("b", e, t, n))];
								case "DivNoNan":
									return [r.divNoNan(y("a", e, t, n), y("b", e, t, n))];
								case "FloorDiv":
									return [r.floorDiv(y("a", e, t, n), y("b", e, t, n))];
								case "Sub":
									return [r.sub(y("a", e, t, n), y("b", e, t, n))];
								case "Minimum":
									return [r.minimum(y("a", e, t, n), y("b", e, t, n))];
								case "Maximum":
									return [r.maximum(y("a", e, t, n), y("b", e, t, n))];
								case "Pow":
									return [r.pow(y("a", e, t, n), y("b", e, t, n))];
								case "SquaredDifference":
									return [r.squaredDifference(y("a", e, t, n), y("b", e,
										t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "basic_math":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Abs":
								case "ComplexAbs":
									return [r.abs(y("x", e, t, n))];
								case "Acos":
									return [r.acos(y("x", e, t, n))];
								case "Acosh":
									return [r.acosh(y("x", e, t, n))];
								case "Asin":
									return [r.asin(y("x", e, t, n))];
								case "Asinh":
									return [r.asinh(y("x", e, t, n))];
								case "Atan":
									return [r.atan(y("x", e, t, n))];
								case "Atan2":
									return [r.atan2(y("x", e, t, n), y("y", e, t, n))];
								case "Atanh":
									return [r.atanh(y("x", e, t, n))];
								case "Ceil":
									return [r.ceil(y("x", e, t, n))];
								case "Complex":
									return [r.complex(y("real", e, t, n), y("imag", e, t,
										n))];
								case "Cos":
									return [r.cos(y("x", e, t, n))];
								case "Cosh":
									return [r.cosh(y("x", e, t, n))];
								case "Elu":
									return [r.elu(y("x", e, t, n))];
								case "Erf":
									return [r.erf(y("x", e, t, n))];
								case "Exp":
									return [r.exp(y("x", e, t, n))];
								case "Expm1":
									return [r.expm1(y("x", e, t, n))];
								case "Floor":
									return [r.floor(y("x", e, t, n))];
								case "Log":
									return [r.log(y("x", e, t, n))];
								case "Log1p":
									return [r.log1p(y("x", e, t, n))];
								case "Imag":
									return [r.imag(y("x", e, t, n))];
								case "Neg":
									return [r.neg(y("x", e, t, n))];
								case "Reciprocal":
									return [r.reciprocal(y("x", e, t, n))];
								case "Real":
									return [r.real(y("x", e, t, n))];
								case "Relu":
									return [r.relu(y("x", e, t, n))];
								case "Round":
									return [r.round(y("x", e, t, n))];
								case "Selu":
									return [r.selu(y("x", e, t, n))];
								case "Sigmoid":
									return [r.sigmoid(y("x", e, t, n))];
								case "Sin":
									return [r.sin(y("x", e, t, n))];
								case "Sign":
									return [r.sign(y("x", e, t, n))];
								case "Sinh":
									return [r.sinh(y("x", e, t, n))];
								case "Softplus":
									return [r.softplus(y("x", e, t, n))];
								case "Sqrt":
									return [r.sqrt(y("x", e, t, n))];
								case "Square":
									return [r.square(y("x", e, t, n))];
								case "Tanh":
									return [r.tanh(y("x", e, t, n))];
								case "Tan":
									return [r.tan(y("x", e, t, n))];
								case "ClipByValue":
									return [r.clipByValue(y("x", e, t, n), y("clipValueMin",
										e, t, n), y("clipValueMax", e, t, n))];
								case "Relu6":
									return [r.relu6(y("x", e, t, n))];
								case "Rsqrt":
									return [r.rsqrt(v(e.inputNames[0], t, n))];
								case "LeakyRelu":
									return [r.leakyRelu(y("x", e, t, n), y("alpha", e, t,
										n))];
								case "Prelu":
									return [r.prelu(y("x", e, t, n), y("alpha", e, t, n))];
								case "IsNan":
									return [r.isNaN(v(e.inputNames[0], t, n))];
								case "IsInf":
									return [r.isInf(v(e.inputNames[0], t, n))];
								case "IsFinite":
									return [r.isFinite(v(e.inputNames[0], t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "control":
					return Hi(e, n, r);
				case "convolution":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Conv1D":
									var a = y("stride", e, t, n),
										o = y("pad", e, t, n),
										s = y("dataFormat", e, t, n).toUpperCase(),
										i = y("dilation", e, t, n);
									return [r.conv1d(y("x", e, t, n), y("filter", e, t, n),
										a, o, s, i)];
								case "Conv2D":
									a = y("strides", e, t, n), o = w(e, t, n), s = y(
										"dataFormat", e, t, n).toUpperCase();
									var u = y("dilations", e, t, n);
									return [r.conv2d(y("x", e, t, n), y("filter", e, t, n),
										[a[1], a[2]], o, s, [u[1], u[2]])];
								case "_FusedConv2D":
									var c = Zi(e, t, n),
										p = (a = c.stride, o = c.pad, s = c.dataFormat, u =
											c.dilations, c.biasArg),
										l = c.preluArg,
										d = c.activationFunc,
										h = c.leakyreluAlpha;
									return [r.fused.conv2d({
										x: y("x", e, t, n),
										filter: y("filter", e, t, n),
										strides: [a[1], a[2]],
										pad: o,
										dataFormat: s,
										dilations: [u[1], u[2]],
										bias: p,
										activation: d,
										preluActivationWeights: l,
										leakyreluAlpha: h
									})];
								case "FusedDepthwiseConv2dNative":
									var f = Zi(e, t, n);
									return a = f.stride, o = f.pad, s = f.dataFormat, u = f
										.dilations, p = f.biasArg, l = f.preluArg, d = f
										.activationFunc, h = f.leakyreluAlpha, [r.fused
											.depthwiseConv2d({
												x: y("x", e, t, n),
												filter: y("filter", e, t, n),
												strides: [a[1], a[2]],
												pad: o,
												dataFormat: s,
												dilations: [u[1], u[2]],
												bias: p,
												activation: d,
												preluActivationWeights: l,
												leakyreluAlpha: h
											})
										];
								case "Conv2DBackpropInput":
								case "Conv2dTranspose":
									var m = y("outputShape", e, t, n);
									return a = y("strides", e, t, n), o = w(e, t, n), [r
										.conv2dTranspose(y("x", e, t, n), y("filter", e,
											t, n), m, [a[1], a[2]], o)
									];
								case "DepthwiseConv2dNative":
								case "DepthwiseConv2d":
									return a = y("strides", e, t, n), o = w(e, t, n), u = y(
										"dilations", e, t, n), s = y("dataFormat", e, t,
										n).toUpperCase(), [r.depthwiseConv2d(y("input",
										e, t, n), y("filter", e, t, n), [a[1],
										a[2]
									], o, s, [u[1], u[2]])];
								case "Conv3D":
									return a = y("strides", e, t, n), o = y("pad", e, t, n),
										s = y("dataFormat", e, t, n).toUpperCase(), u = y(
											"dilations", e, t, n), [r.conv3d(y("x", e, t,
											n), y("filter", e, t, n), [a[1], a[2],
											a[
												3]
										], o, s, [u[1], u[2], u[3]])];
								case "AvgPool":
									a = y("strides", e, t, n), o = y("pad", e, t, n);
									var v = y("kernelSize", e, t, n);
									return [r.avgPool(y("x", e, t, n), [v[1], v[2]], [a[1],
										a[2]
									], o)];
								case "MaxPool":
									return a = y("strides", e, t, n), o = y("pad", e, t, n),
										v = y("kernelSize", e, t, n), [r.maxPool(y("x", e,
											t, n), [v[1], v[2]], [a[1], a[2]], o)];
								case "MaxPoolWithArgmax":
									a = y("strides", e, t, n), o = y("pad", e, t, n), v = y(
										"kernelSize", e, t, n);
									var g = y("includeBatchInIndex", e, t, n),
										b = r.maxPoolWithArgmax(y("x", e, t, n), [v[1], v[
											2]], [a[1], a[2]], o, g);
									return [b.result, b.indexes];
								case "AvgPool3D":
									return a = y("strides", e, t, n), o = y("pad", e, t, n),
										v = y("kernelSize", e, t, n), [r.avgPool3d(y("x", e,
											t, n), [v[1], v[2], v[3]], [a[1], a[2],
											a[3]
										], o)];
								case "MaxPool3D":
									return a = y("strides", e, t, n), o = y("pad", e, t, n),
										v = y("kernelSize", e, t, n), [r.maxPool3d(y("x", e,
											t, n), [v[1], v[2], v[3]], [a[1], a[2],
											a[3]
										], o)];
								case "Dilation2D":
									var x = y("strides", e, t, n),
										N = (o = y("pad", e, t, n), u = y("dilations", e, t,
											n), x[1]),
										k = x[2],
										T = u[1],
										S = u[2];
									return [r.dilation2d(y("x", e, t, n), y("filter", e, t,
										n), [N, k], o, [T, S], "NHWC")];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "creation":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Fill":
									var a = y("shape", e, t, n),
										o = y("dtype", e, t, n),
										s = y("value", e, t, n);
									return [r.fill(a, s, o)];
								case "LinSpace":
									var i = y("start", e, t, n),
										u = y("stop", e, t, n),
										c = y("num", e, t, n);
									return [r.linspace(i, u, c)];
								case "Multinomial":
									var p = y("logits", e, t, n),
										l = y("numSamples", e, t, n),
										d = y("seed", e, t, n);
									return [r.multinomial(p, l, d)];
								case "OneHot":
									var h = y("indices", e, t, n),
										f = y("depth", e, t, n),
										m = y("onValue", e, t, n),
										v = y("offValue", e, t, n);
									return o = y("dtype", e, t, n), [r.oneHot(h, f, m, v,
										o)];
								case "Ones":
									return [r.ones(y("shape", e, t, n), y("dtype", e, t,
										n))];
								case "OnesLike":
									return [r.onesLike(y("x", e, t, n))];
								case "RandomStandardNormal":
									return [r.randomStandardNormal(y("shape", e, t, n), y(
										"dtype", e, t, n), y("seed", e, t, n))];
								case "RandomUniform":
									return [r.randomUniform(y("shape", e, t, n), y("minval",
										e, t, n), y("maxval", e, t, n), y(
										"dtype", e, t, n))];
								case "RandomUniformInt":
									return [r.randomUniformInt(y("shape", e, t, n), y(
										"minval", e, t, n), y("maxval", e, t,
										n), y("seed", e, t, n))];
								case "Range":
									i = y("start", e, t, n), u = y("stop", e, t, n);
									var g = y("step", e, t, n);
									return [r.range(i, u, g, y("dtype", e, t, n))];
								case "TruncatedNormal":
									a = y("shape", e, t, n);
									var b = y("mean", e, t, n),
										x = y("stdDev", e, t, n);
									return d = y("seed", e, t, n), [r.truncatedNormal(a, b,
										x, y("dtype", e, t, n), d)];
								case "Zeros":
									return [r.zeros(y("shape", e, t, n), y("dtype", e, t,
										n))];
								case "ZerosLike":
									return [r.zerosLike(y("x", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "dynamic":
					return function(e, t, n, r, a) {
						return void 0 === a && (a = Bi), c(void 0, void 0, void 0, (function() {
							var r, o, s, i, u, c, l, d, h, f, m, v;
							return p(this, (function(p) {
								switch (p.label) {
									case 0:
										switch (e.op) {
											case "NonMaxSuppressionV5":
												return [3, 1];
											case "NonMaxSuppressionV4":
												return [3, 3];
											case "NonMaxSuppressionV3":
											case "NonMaxSuppressionV2":
												return [3, 5];
											case "Where":
												return [3, 7];
											case "ListDiff":
												return [3, 9]
										}
										return [3, 10];
									case 1:
										return r = Qi(e, t, n), c = r.boxes, l =
											r.scores, d = r.maxOutputSize, h = r
											.iouThreshold, f = r.scoreThreshold,
											o = r.softNmsSigma, [4, a.image
												.nonMaxSuppressionWithScoreAsync(
													c, l, d, h, f, o)
											];
									case 2:
										return [2, [(v = p.sent())
											.selectedIndices, v
											.selectedScores
										]];
									case 3:
										return s = Qi(e, t, n), c = s.boxes, l =
											s.scores, d = s.maxOutputSize, h = s
											.iouThreshold, f = s.scoreThreshold,
											i = y("padToMaxOutputSize", e, t,
												n), [4, a.image
												.nonMaxSuppressionPaddedAsync(c,
													l, d, h, f, i)
											];
									case 4:
										return [2, [(v = p.sent())
											.selectedIndices, v
											.validOutputs
										]];
									case 5:
										return u = Qi(e, t, n), c = u.boxes, l =
											u.scores, d = u.maxOutputSize, h = u
											.iouThreshold, f = u.scoreThreshold,
											[4, a.image.nonMaxSuppressionAsync(
												c, l, d, h, f)];
									case 6:
										return [2, [p.sent()]];
									case 7:
										return m = a.cast(y("condition", e, t,
											n), "bool"), [4, a.whereAsync(
											m)];
									case 8:
										return v = [p.sent()], m.dispose(), [2,
											v
										];
									case 9:
										return [2, a.setdiff1dAsync(y("x", e, t,
											n), y("y", e, t, n))];
									case 10:
										throw TypeError("Node type ".concat(e
											.op, " is not implemented"))
								}
							}))
						}))
					}(e, n, r);
				case "evaluation":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "LowerBound":
									var a = y("sortedSequence", e, t, n),
										o = y("values", e, t, n);
									return [r.lowerBound(a, o)];
								case "TopKV2":
									var s = y("x", e, t, n),
										i = y("k", e, t, n),
										u = y("sorted", e, t, n);
									return [(c = r.topk(s, i, u)).values, c.indices];
								case "UpperBound":
									return a = y("sortedSequence", e, t, n), o = y("values",
										e, t, n), [r.upperBound(a, o)];
								case "Unique":
									return s = y("x", e, t, n), [(c = r.unique(s)).values, c
										.indices
									];
								case "UniqueV2":
									s = y("x", e, t, n);
									var c, p = y("axis", e, t, n);
									return [(c = r.unique(s, p)).values, c.indices];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "image":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "ResizeBilinear":
									var a = y("images", e, t, n),
										o = y("size", e, t, n),
										s = y("alignCorners", e, t, n),
										i = y("halfPixelCenters", e, t, n);
									return [r.image.resizeBilinear(a, [o[0], o[1]], s, i)];
								case "ResizeNearestNeighbor":
									return a = y("images", e, t, n), o = y("size", e, t, n),
										s = y("alignCorners", e, t, n), i = y(
											"halfPixelCenters", e, t, n), [r.image
											.resizeNearestNeighbor(a, [o[0], o[1]], s, i)
										];
								case "CropAndResize":
									var u = y("image", e, t, n),
										c = y("boxes", e, t, n),
										p = y("boxInd", e, t, n),
										l = y("cropSize", e, t, n),
										d = y("method", e, t, n),
										h = y("extrapolationValue", e, t, n);
									return [r.image.cropAndResize(u, c, p, l, d, h)];
								case "ImageProjectiveTransformV3":
									a = y("images", e, t, n);
									var f = y("transforms", e, t, n),
										m = y("outputShape", e, t, n),
										v = y("fillValue", e, t, n),
										g = y("interpolation", e, t, n),
										b = y("fillMode", e, t, n);
									return [r.image.transform(a, f, g.toLowerCase(), b
										.toLowerCase(), v, m)];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "graph":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Const":
									return t[e.name];
								case "PlaceholderWithDefault":
									var a = y("default", e, t, n);
									return [v(e.name, t, n) || a];
								case "Placeholder":
									return [v(e.name, t, n)];
								case "Identity":
								case "StopGradient":
								case "FakeQuantWithMinMaxVars":
								case "Snapshot":
									return [k(y("x", e, t, n))];
								case "IdentityN":
									return y("x", e, t, n).map((function(e) {
										return k(e)
									}));
								case "Shape":
									return [r.tensor1d(y("x", e, t, n).shape, "int32")];
								case "ShapeN":
									return y("x", e, t, n).map((function(e) {
										return r.tensor1d(e.shape)
									}));
								case "Size":
									return [r.scalar(y("x", e, t, n).size, "int32")];
								case "Rank":
									return [r.scalar(y("x", e, t, n).rank, "int32")];
								case "NoOp":
									return [r.scalar(1)];
								case "Print":
									var o = y("x", e, t, n),
										s = y("data", e, t, n),
										i = y("message", e, t, n),
										u = y("summarize", e, t, n);
									console.warn(
										"The graph has a tf.print() operation,usually used for debugging, which slows down performance."
									), console.log(i);
									for (var c = 0; c < s.length; c++) console.log(Array
										.prototype.slice.call(s[c].dataSync()).slice(0,
											u));
									return [o];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "logical":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Equal":
									return [r.equal(y("a", e, t, n), y("b", e, t, n))];
								case "NotEqual":
									return [r.notEqual(y("a", e, t, n), y("b", e, t, n))];
								case "Greater":
									return [r.greater(y("a", e, t, n), y("b", e, t, n))];
								case "GreaterEqual":
									return [r.greaterEqual(y("a", e, t, n), y("b", e, t,
										n))];
								case "Less":
									return [r.less(y("a", e, t, n), y("b", e, t, n))];
								case "LessEqual":
									return [r.lessEqual(y("a", e, t, n), y("b", e, t, n))];
								case "LogicalAnd":
									return [r.logicalAnd(y("a", e, t, n), y("b", e, t, n))];
								case "LogicalNot":
									return [r.logicalNot(y("a", e, t, n))];
								case "LogicalOr":
									return [r.logicalOr(y("a", e, t, n), y("b", e, t, n))];
								case "Select":
								case "SelectV2":
									return [r.where(y("condition", e, t, n), y("a", e, t,
										n), y("b", e, t, n))];
								case "BitwiseAnd":
									return [r.bitwiseAnd(y("a", e, t, n), y("b", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "matrices":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "BatchMatMul":
								case "BatchMatMulV2":
								case "MatMul":
									return [r.matMul(y("a", e, t, n), y("b", e, t, n), y(
										"transposeA", e, t, n), y("transposeB",
										e, t, n))];
								case "Einsum":
									return [r.einsum.apply(r, h([y("equation", e, t, n)], d(
										y("tensors", e, t, n)), !1))];
								case "Transpose":
									return [r.transpose(y("x", e, t, n), y("perm", e, t,
										n))];
								case "_FusedMatMul":
									var a = d(y("fusedOps", e, t, n), 2),
										o = a[0],
										s = a[1],
										i = "biasadd" === o,
										u = "prelu" === s,
										c = y("numArgs", e, t, n),
										p = y("leakyreluAlpha", e, t, n);
									if (i) {
										if (u && 2 !== c) throw new Error(
											"Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha."
										);
										if (!u && 1 !== c) throw new Error(
											"Fused MatMul with BiasAdd must have one extra argument: bias."
										)
									}
									var l = d(y("args", e, t, n), 2),
										f = l[0],
										m = l[1];
									return [r.fused.matMul({
										a: y("a", e, t, n),
										b: y("b", e, t, n),
										transposeA: y("transposeA", e, t, n),
										transposeB: y("transposeB", e, t, n),
										bias: f,
										activation: s,
										preluActivationWeights: m,
										leakyreluAlpha: p
									})];
								case "MatrixBandPart":
									return [r.linalg.bandPart(y("a", e, t, n), y("numLower",
										e, t, n), y("numUpper", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "normalization":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "EuclideanNorm":
									return [r.euclideanNorm(y("x", e, t, n), y("axis", e, t,
										n), y("keepDims", e, t, n))];
								case "FusedBatchNorm":
								case "FusedBatchNormV2":
								case "FusedBatchNormV3":
									return [r.batchNorm(y("x", e, t, n), y("mean", e, t, n),
										y("variance", e, t, n), y("offset", e, t,
											n), y("scale", e, t, n), y("epsilon", e,
											t,
											n))];
								case "LRN":
									return [r.localResponseNormalization(y("x", e, t, n), y(
											"radius", e, t, n), y("bias", e, t, n),
										y("alpha", e, t, n), y("beta", e, t, n))];
								case "Softmax":
									return [r.softmax(y("x", e, t, n))];
								case "LogSoftmax":
									return [r.logSoftmax(y("x", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "ragged":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "RaggedGather":
									var a = r.raggedGather(y("paramsNestedSplits", e, t, n),
											y("paramsDenseValues", e, t, n), y("indices", e,
												t, n), y("outputRaggedRank", e, t, n)),
										o = a.outputNestedSplits,
										s = a.outputDenseValues;
									return o.concat(s);
								case "RaggedRange":
									var i = r.raggedRange(y("starts", e, t, n), y("limits",
										e, t, n), y("splits", e, t, n));
									return [i.rtNestedSplits, i.rtDenseValues];
								case "RaggedTensorToTensor":
									return [r.raggedTensorToTensor(y("shape", e, t, n), y(
										"values", e, t, n), y("defaultValue", e,
										t, n), y("rowPartitionTensors", e, t,
										n), y("rowPartitionTypes", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "reduction":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Max":
									var a = y("axis", e, t, n),
										o = y("keepDims", e, t, n);
									return [r.max(y("x", e, t, n), a, o)];
								case "Mean":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.mean(y("x", e, t, n), a, o)];
								case "Min":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.min(y("x", e, t, n), a, o)];
								case "Sum":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.sum(y("x", e, t, n), a, o)];
								case "All":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.all(y("x", e, t, n), a, o)];
								case "Any":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.any(y("x", e, t, n), a, o)];
								case "ArgMax":
									return a = y("axis", e, t, n), [r.argMax(y("x", e, t,
										n), a)];
								case "ArgMin":
									return a = y("axis", e, t, n), [r.argMin(y("x", e, t,
										n), a)];
								case "Prod":
									return a = y("axis", e, t, n), o = y("keepDims", e, t,
										n), [r.prod(y("x", e, t, n), a, o)];
								case "Cumprod":
									a = y("axis", e, t, n);
									var s = y("exclusive", e, t, n),
										i = y("reverse", e, t, n);
									return [r.cumprod(y("x", e, t, n), a, s, i)];
								case "Cumsum":
									return a = y("axis", e, t, n), s = y("exclusive", e, t,
										n), i = y("reverse", e, t, n), [r.cumsum(y("x",
										e, t, n), a, s, i)];
								case "Bincount":
									var u = y("x", e, t, n),
										c = y("weights", e, t, n),
										p = y("size", e, t, n);
									return [r.bincount(u, c, p)];
								case "DenseBincount":
									var l = y("x", e, t, n),
										d = y("weights", e, t, n),
										h = y("size", e, t, n),
										f = y("binaryOutput", e, t, n);
									return [r.denseBincount(l, d, h, f)];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "slice_join":
					return s((function() {
						return function(e, n, r, a) {
							switch (void 0 === a && (a = Bi), e.op) {
								case "ConcatV2":
								case "Concat":
									var o = y("n", e, n, r),
										s = y("axis", e, n, r),
										i = y("tensors", e, n, r);
									return i = i.slice(0, o), [a.concat(i, s)];
								case "Gather":
									var u = y("x", e, n, r),
										c = y("indices", e, n, r);
									return [a.gather(u, a.cast(c, "int32"), 0)];
								case "GatherV2":
									s = y("axis", e, n, r);
									var p = y("batchDims", e, n, r);
									return u = y("x", e, n, r), c = y("indices", e, n, r), [
										a.gather(u, a.cast(c, "int32"), s, p)
									];
								case "Reverse":
									for (var l = y("dims", e, n, r), d = (s = [], 0); d < l
										.length; d++) l[d] && s.push(d);
									return u = y("x", e, n, r), [a.reverse(u, s)];
								case "ReverseV2":
									return s = y("axis", e, n, r), u = y("x", e, n, r), [a
										.reverse(u, s)
									];
								case "Slice":
									var h = y("begin", e, n, r),
										f = y("size", e, n, r);
									return [a.slice(y("x", e, n, r), h, f)];
								case "StridedSlice":
									h = y("begin", e, n, r);
									var m = y("end", e, n, r),
										v = y("strides", e, n, r),
										g = y("beginMask", e, n, r),
										b = y("endMask", e, n, r),
										x = y("ellipsisMask", e, n, r),
										N = y("newAxisMask", e, n, r),
										w = y("shrinkAxisMask", e, n, r),
										k = y("x", e, n, r);
									return [a.stridedSlice(k, h, m, v, g, b, x, N, w)];
								case "Pack":
									return t.tidy((function() {
										var o = y("axis", e, n, r),
											s = y("tensors", e, n, r),
											i = s[0].shape,
											u = a.squeeze(s[0]).shape,
											c = s.map((function(e) {
												var n = t.util
													.arraysEqual(e
														.shape, i);
												if (!n && !t.util
													.arraysEqual(a
														.squeeze(e)
														.shape, u))
													throw new Error(
														"the input tensors shape does not match"
													);
												return n ? e : a
													.reshape(e, i)
											}));
										return [a.stack(c, o)]
									}));
								case "Unpack":
									return s = y("axis", e, n, r), k = y("tensor", e, n, r),
										a.unstack(k, s);
								case "Tile":
									var T = y("reps", e, n, r);
									return [a.tile(y("x", e, n, r), T)];
								case "Split":
								case "SplitV":
									s = y("axis", e, n, r);
									var S = y("numOrSizeSplits", e, n, r);
									return k = y("x", e, n, r), a.split(k, S, s);
								case "ScatterNd":
									c = y("indices", e, n, r);
									var _ = y("values", e, n, r),
										E = y("shape", e, n, r);
									return [a.scatterND(c, _, E)];
								case "GatherNd":
									var I = y("x", e, n, r);
									return c = y("indices", e, n, r), [a.gatherND(I, c)];
								case "SparseToDense":
									c = y("sparseIndices", e, n, r), E = y("outputShape", e,
										n, r);
									var O = y("sparseValues", e, n, r),
										A = y("defaultValue", e, n, r);
									return [a.sparseToDense(c, O, E, O.dtype === A.dtype ?
										A : a.cast(A, O.dtype))];
								case "TensorScatterUpdate":
									return c = y("indices", e, n, r), _ = y("values", e, n,
										r), k = y("tensor", e, n, r), [a
										.tensorScatterUpdate(k, c, _)
									];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "sparse":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "SparseFillEmptyRows":
									var a = r.sparse.sparseFillEmptyRows(y("indices", e, t,
										n), y("values", e, t, n), y("denseShape", e,
										t, n), y("defaultValue", e, t, n));
									return [a.outputIndices, a.outputValues, a
										.emptyRowIndicator, a.reverseIndexMap
									];
								case "SparseReshape":
									var o = r.sparse.sparseReshape(y("inputIndices", e, t,
										n), y("inputShape", e, t, n), y("newShape",
										e, t, n));
									return [o.outputIndices, o.outputShape];
								case "SparseSegmentMean":
									return [r.sparse.sparseSegmentMean(y("data", e, t, n),
										y("indices", e, t, n), y("segmentIds", e, t,
											n))];
								case "SparseSegmentSum":
									return [r.sparse.sparseSegmentSum(y("data", e, t, n), y(
										"indices", e, t, n), y("segmentIds", e,
										t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "spectral":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "FFT":
									return [r.fft(y("x", e, t, n))];
								case "IFFT":
									return [r.ifft(y("x", e, t, n))];
								case "RFFT":
									return [r.rfft(y("x", e, t, n))];
								case "IRFFT":
									return [r.irfft(y("x", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "string":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "StaticRegexReplace":
									return [r.string.staticRegexReplace(y("input", e, t, n),
										y("pattern", e, t, n), y("rewrite", e, t,
											n), y("replaceGlobal", e, t, n))];
								case "StringNGrams":
									var a = r.string.stringNGrams(y("data", e, t, n), y(
										"dataSplits", e, t, n), y("separator", e, t,
										n), y("nGramWidths", e, t, n), y("leftPad",
										e, t, n), y("rightPad", e, t, n), y(
										"padWidth", e, t, n), y(
										"preserveShortSequences", e, t, n));
									return [a.nGrams, a.nGramsSplits];
								case "StringSplit":
									var o = r.string.stringSplit(y("input", e, t, n), y(
										"delimiter", e, t, n), y("skipEmpty", e, t,
										n));
									return [o.indices, o.values, o.shape];
								case "StringToHashBucketFast":
									return [r.string.stringToHashBucketFast(y("input", e, t,
										n), y("numBuckets", e, t, n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "transformation":
					return s((function() {
						return function(e, t, n, r) {
							switch (void 0 === r && (r = Bi), e.op) {
								case "Cast":
									return [r.cast(y("x", e, t, n), y("dtype", e, t, n))];
								case "ExpandDims":
									var a = y("axis", e, t, n);
									return [r.expandDims(y("x", e, t, n), a)];
								case "Squeeze":
									return a = y("axis", e, t, n), [r.squeeze(y("x", e, t,
										n), a)];
								case "Reshape":
									return [r.reshape(y("x", e, t, n), y("shape", e, t,
										n))];
								case "EnsureShape":
									return [r.ensureShape(y("x", e, t, n), y("shape", e, t,
										n))];
								case "MirrorPad":
									return [r.mirrorPad(y("x", e, t, n), y("padding", e, t,
										n), y("mode", e, t, n))];
								case "PadV2":
								case "Pad":
									return [r.pad(y("x", e, t, n), y("padding", e, t, n), y(
										"constantValue", e, t, n))];
								case "SpaceToBatchND":
									var o = y("blockShape", e, t, n),
										s = y("paddings", e, t, n);
									return [r.spaceToBatchND(y("x", e, t, n), o, s)];
								case "BatchToSpaceND":
									o = y("blockShape", e, t, n);
									var i = y("crops", e, t, n);
									return [r.batchToSpaceND(y("x", e, t, n), o, i)];
								case "DepthToSpace":
									var u = y("blockSize", e, t, n),
										c = y("dataFormat", e, t, n).toUpperCase();
									return [r.depthToSpace(y("x", e, t, n), u, c)];
								case "BroadcastTo":
									return [r.broadcastTo(y("x", e, t, n), y("shape", e, t,
										n))];
								case "BroadcastArgs":
									return [r.broadcastArgs(y("s0", e, t, n), y("s1", e, t,
										n))];
								default:
									throw TypeError("Node type ".concat(e.op,
										" is not implemented"))
							}
						}(e, n, r)
					}));
				case "hash_table":
					return function(e, t, n, r) {
						return c(void 0, void 0, void 0, (function() {
							var a, o, s, i, u, c, l, d;
							return p(this, (function(p) {
								switch (p.label) {
									case 0:
										switch (e.op) {
											case "HashTable":
											case "HashTableV2":
												return [3, 1];
											case "InitializeTable":
											case "InitializeTableV2":
											case "LookupTableImport":
											case "LookupTableImportV2":
												return [3, 2];
											case "LookupTableFind":
											case "LookupTableFindV2":
												return [3, 4];
											case "LookupTableSize":
											case "LookupTableSizeV2":
												return [3, 6]
										}
										return [3, 7];
									case 1:
										return null != (a = r
											.getHashTableHandleByName(e
												.name)) ? [2, [a]] : (o = y(
												"keyDType", e, t, n), s = y(
												"valueDType", e, t, n), d =
											new Xi(o, s), r.addHashTable(e
												.name, d), [2, [d.handle]]);
									case 2:
										return l = y("tableHandle", e, t, n, r),
											u = y("keys", e, t, n), i = y(
												"values", e, t, n), [4, (d = r
													.getHashTableById(l.id))
												.import(u, i)
											];
									case 3:
									case 5:
										return [2, [p.sent()]];
									case 4:
										return l = y("tableHandle", e, t, n, r),
											u = y("keys", e, t, n), c = y(
												"defaultValue", e, t, n), [4, (
												d = r.getHashTableById(l.id)
											).find(u, c)];
									case 6:
										return l = y("tableHandle", e, t, n, r),
											[2, [(d = r.getHashTableById(l.id))
												.tensorSize()
											]];
									case 7:
										throw TypeError("Node type ".concat(e
											.op, " is not implemented"))
								}
							}))
						}))
					}(e, n, r, o);
				case "custom":
					var a = m(e.op);
					if (a && a.customExecutor) return a.customExecutor(new ae(e, n, r));
					throw TypeError("Custom op ".concat(e.op, " is not registered."));
				default:
					throw TypeError("Unknown op '".concat(e.op, "'. File an issue at ") +
						"https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()"
					)
			}
		}(e, n, r);
		return a.util.isPromise(i) ? i.then((function(e) {
			return [].concat(e)
		})) : [].concat(i)
	}
	var Ji = function() {
		function e(e, t, n, r, a) {
			void 0 === e && (e = {}), void 0 === t && (t = {}), void 0 === n && (n = {}), void 0 === r && (
					r = {}), this.weightMap = e, this.tensorArrayMap = t, this.tensorListMap = n, this
				.functionMap = r, this.parseNodeNameCache = a, this.rootContext = {
					id: 0,
					frameName: "",
					iterationId: 0
				}, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds()
		}
		return e.prototype.newFrame = function(e, t) {
			return {
				id: e,
				frameName: t,
				iterationId: 0
			}
		}, Object.defineProperty(e.prototype, "currentContext", {
			get: function() {
				return this.contexts
			},
			set: function(e) {
				this.contexts !== e && (this.contexts = e, this.generateCurrentContextIds())
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "currentContextId", {
			get: function() {
				return this._currentContextIds[0]
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "currentContextIds", {
			get: function() {
				return this._currentContextIds
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.generateCurrentContextIds = function() {
			for (var e = [], t = 0; t < this.contexts.length - 1; t++) {
				var n = this.contexts.slice(0, this.contexts.length - t);
				e.push(this.contextIdforContexts(n))
			}
			e.push(""), this._currentContextIds = e
		}, e.prototype.contextIdforContexts = function(e) {
			return e ? e.map((function(e) {
				return 0 === e.id && 0 === e.iterationId ? "" : "".concat(e.frameName, "-")
					.concat(e.iterationId)
			})).join("/") : ""
		}, e.prototype.enterFrame = function(e) {
			this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(
				this.newFrame(this.lastId, e)), this._currentContextIds.unshift(this
				.contextIdforContexts(this.contexts)))
		}, e.prototype.exitFrame = function() {
			if (!(this.contexts && this.contexts.length > 1)) throw new Error(
				"Cannot exit frame, the context is empty");
			this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds
				.shift()
		}, e.prototype.nextIteration = function() {
			if (!(this.contexts && this.contexts.length > 0)) throw new Error(
				"Cannot increase frame iteration, the context is empty");
			this.contexts = this.contexts.slice(), this.lastId++;
			var e = Object.assign({}, this.contexts[this.contexts.length - 1]);
			e.iterationId += 1, e.id = this.lastId, this.contexts.splice(-1, 1, e), this
				._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts))
		}, e.prototype.getWeight = function(e) {
			return this.weightMap[e]
		}, e.prototype.addTensorArray = function(e) {
			this.tensorArrayMap[e.id] = e
		}, e.prototype.getTensorArray = function(e) {
			return this.tensorArrayMap[e]
		}, e.prototype.addTensorList = function(e) {
			this.tensorListMap[e.id] = e
		}, e.prototype.getTensorList = function(e) {
			return this.tensorListMap[e]
		}, e.prototype.dispose = function(e) {
			for (var t in this.tensorArrayMap) this.tensorArrayMap[t].clearAndClose(e);
			for (var t in this.tensorListMap) this.tensorListMap[t].clearAndClose(e)
		}, e
	}();

	function $i(e, t, n, r) {
		var a = new Set,
			o = [],
			s = null,
			i = null,
			u = new Set,
			c = new Set(Object.keys(e).map((function(e) {
				return N(e)[0]
			})));
		r = r || [];
		for (var p = new Set(r.map((function(e) {
				return N(e.name)[0]
			}))), l = h([], d(t), !1); l.length > 0;) {
			var f = l.pop();
			(ou(f) || su(f) || iu(f)) && null == s && (i = (s = f).children.map((function(e) {
				return e.name
			})).filter((function(e) {
				return a.has(e)
			}))), a.add(f.name), null == n[f.name] && (c.has(f.name) || p.has(f.name) || (0 !== f.inputs
				.length ? f.inputs.forEach((function(e) {
					u.has(e.name) || (u.add(e.name), l.push(e))
				})) : o.push(f.name)))
		}
		return {
			inputs: e,
			outputs: t,
			usedNodes: a,
			missingInputs: o,
			dynamicNode: s,
			syncInputs: i
		}
	}

	function eu(e, t) {
		var n, r, a, o, s, i, u = t.usedNodes,
			c = t.inputs,
			p = Object.keys(c).map((function(e) {
				return N(e)[0]
			})).map((function(t) {
				return e.nodes[t]
			})),
			f = e.initNodes || [],
			m = function(e) {
				return u.has("string" == typeof e ? e : e.name)
			};

		function y(e) {
			return h([], d(new Map(e.map((function(e) {
				return [e.name, e]
			}))).values()), !1)
		}
		var v = y(h(h(h([], d(p), !1), d(e.weights), !1), d(f), !1)).filter(m),
			g = y(h(h([], d(v), !1), d(Object.values(e.nodes)), !1)).filter(m),
			b = new Map(g.map((function(e) {
				return [e.name, e]
			}))),
			x = {};
		try {
			for (var w = l(g), k = w.next(); !k.done; k = w.next()) {
				x[(O = k.value).name] = x[O.name] || 0;
				try {
					for (var T = (a = void 0, l(O.children)), S = T.next(); !S.done; S = T.next()) {
						m(M = S.value) || (x[M.name] = Number.POSITIVE_INFINITY), x[M.name] = (x[M.name] || 0) +
							1
					}
				} catch (e) {
					a = {
						error: e
					}
				} finally {
					try {
						S && !S.done && (o = T.return) && o.call(T)
					} finally {
						if (a) throw a.error
					}
				}
			}
		} catch (e) {
			n = {
				error: e
			}
		} finally {
			try {
				k && !k.done && (r = w.return) && r.call(w)
			} finally {
				if (n) throw n.error
			}
		}
		for (var _ = Object.entries(x).filter((function(e) {
				return 0 === d(e, 2)[1]
			})).map((function(e) {
				return d(e, 1)[0]
			})), E = h([], d(_), !1); _.length > 0;) {
			var I = _.pop(),
				O = b.get(I);
			try {
				for (var A = (s = void 0, l(O.children.filter(m))), D = A.next(); !D.done; D = A.next()) {
					var M;
					0 == --x[(M = D.value).name] && (E.push(M.name), _.push(M.name))
				}
			} catch (e) {
				s = {
					error: e
				}
			} finally {
				try {
					D && !D.done && (i = A.return) && i.call(A)
				} finally {
					if (s) throw s.error
				}
			}
		}
		var C = function(e, t) {
			var n, r, a = new Map(e.map((function(e) {
					return [e.name, e]
				}))),
				o = t.map((function(e) {
					return e.name
				})),
				s = new Set(o);
			for (; o.length > 0;) {
				var i = o.pop(),
					u = a.get(i);
				try {
					for (var c = (n = void 0, l(u.children)), p = c.next(); !p.done; p = c.next()) {
						var d = p.value;
						a.has(d.name) && !s.has(d.name) && (s.add(d.name), o.push(d.name))
					}
				} catch (e) {
					n = {
						error: e
					}
				} finally {
					try {
						p && !p.done && (r = c.return) && r.call(c)
					} finally {
						if (n) throw n.error
					}
				}
			}
			var h = e.filter((function(e) {
				return s.has(e.name)
			}));
			return h
		}(E.map((function(e) {
			return b.get(e)
		})), v);
		return function(e, t) {
			var n, r, a, o, s, i, u = new Map(e.map((function(e, t) {
					return [e.name, t]
				}))),
				c = new Set(t.map((function(e) {
					return e.name
				}))),
				p = function(e) {
					return c.has("string" == typeof e ? e : e.name)
				},
				d = new Set(e.map((function(e) {
					return e.name
				}))),
				h = function(e) {
					return d.has("string" == typeof e ? e : e.name)
				};
			try {
				for (var f = l(e), m = f.next(); !m.done; m = f.next()) {
					var y = m.value;
					try {
						for (var v = (a = void 0, l(y.children.filter(h))), g = v.next(); !g.done; g = v
							.next()) {
							var b = g.value;
							if (!u.has(b.name)) throw new tu("Child ".concat(b.name, " of node ").concat(y
								.name, " is unreachable."));
							if (u.get(y.name) > u.get(b.name)) throw new tu("Node ".concat(y.name,
								" is scheduled to run after its child ").concat(b.name, "."))
						}
					} catch (e) {
						a = {
							error: e
						}
					} finally {
						try {
							g && !g.done && (o = v.return) && o.call(v)
						} finally {
							if (a) throw a.error
						}
					}
					if (!p(y)) try {
						for (var x = (s = void 0, l(y.inputs)), N = x.next(); !N.done; N = x.next()) {
							var w = N.value;
							if (!u.has(w.name)) throw new tu("Input ".concat(w.name, " of node ")
								.concat(y.name, " is unreachable."));
							if (u.get(w.name) > u.get(y.name)) throw new tu("Node ".concat(y.name,
								" is scheduled to run before its input ").concat(w.name,
								"."))
						}
					} catch (e) {
						s = {
							error: e
						}
					} finally {
						try {
							N && !N.done && (i = x.return) && i.call(x)
						} finally {
							if (s) throw s.error
						}
					}
				}
			} catch (e) {
				n = {
					error: e
				}
			} finally {
				try {
					m && !m.done && (r = f.return) && r.call(f)
				} finally {
					if (n) throw n.error
				}
			}
		}(C, v), C
	}
	var tu = function(e) {
		function t(t) {
			return e.call(this, "NodesExecutionOrderError: ".concat(t)) || this
		}
		return u(t, e), t
	}(Error);
	var nu = new Set(["Switch", "Merge", "Enter", "Exit", "NextIteration", "StatelessIf", "StatelessWhile",
			"if", "While"
		]),
		ru = new Set(["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"]),
		au = new Set(["HashTable", "HashTableV2", "LookupTableImport", "LookupTableImportV2", "LookupTableFind",
			"LookupTableFindV2", "LookupTableSize", "LookupTableSizeV2"
		]);

	function ou(e) {
		return nu.has(e.op)
	}

	function su(e) {
		return ru.has(e.op)
	}

	function iu(e) {
		return au.has(e.op)
	}
	var uu = function() {
			function e(t, n) {
				var r = this;
				this.graph = t, this.parent = n, this.compiledMap = new Map, this.parseNodeNameCache = new Map,
					this._weightMap = {}, this.SEPARATOR = ",", this._functions = {}, this
					._functionExecutorMap = {}, this.keepIntermediateTensors = !1, this._outputs = t.outputs,
					this._inputs = t.inputs, this._initNodes = t.initNodes, this._signature = t.signature, this
					._functions = t.functions, null != t.functions && Object.keys(t.functions).forEach((
						function(n) {
							r._functionExecutorMap[n] = new e(t.functions[n], r)
						}))
			}
			return Object.defineProperty(e.prototype, "weightIds", {
				get: function() {
					return this.parent ? this.parent.weightIds : this._weightIds
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "functionExecutorMap", {
				get: function() {
					return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "weightMap", {
				get: function() {
					return this.parent ? this.parent.weightMap : this._weightMap
				},
				set: function(e) {
					var t = Object.keys(e).map((function(t) {
						return e[t].map((function(e) {
							return e.id
						}))
					}));
					this._weightIds = [].concat.apply([], h([], d(t), !1)), this._weightMap = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "resourceManager", {
				set: function(e) {
					this._resourceManager = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "inputs", {
				get: function() {
					return this._inputs.map((function(e) {
						return {
							name: e.name,
							shape: e.attrParams.shape ? e.attrParams.shape.value :
								void 0,
							dtype: e.attrParams.dtype ? e.attrParams.dtype.value :
								void 0
						}
					}))
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "outputs", {
				get: function() {
					return this._outputs.map((function(e) {
						return {
							name: e.name,
							shape: e.attrParams.shape ? e.attrParams.shape.value :
								void 0,
							dtype: e.attrParams.dtype ? e.attrParams.dtype.value :
								void 0
						}
					}))
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "inputNodes", {
				get: function() {
					return this._inputs.map((function(e) {
						return e.signatureKey || e.name
					}))
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "outputNodes", {
				get: function() {
					return this._outputs.map((function(e) {
						var t = e.signatureKey || e.name;
						return e.defaultOutput ? "".concat(t, ":").concat(e
							.defaultOutput) : t
					}))
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "functions", {
				get: function() {
					var e = this;
					return Object.keys(this._functions).reduce((function(t, n) {
						return t[n] = e._functions[n].signature, t
					}), {})
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.getCompilationKey = function(e, t) {
				var n = e.map((function(e) {
						return e.name
					})).sort(),
					r = t.map((function(e) {
						return e.name
					})).sort();
				return n.join(this.SEPARATOR) + "--" + r.join(this.SEPARATOR)
			}, e.prototype.compile = function(e, t) {
				var n = $i(e, t, this.weightMap, this._initNodes),
					r = n.missingInputs,
					a = n.dynamicNode,
					o = n.syncInputs;
				if (null != a) throw new Error("This execution contains the node '".concat(a.name,
						"', which has ") + "the dynamic op '".concat(a.op, "'. Please use ") +
					"model.executeAsync() instead. Alternatively, to avoid the " +
					"dynamic ops, specify the inputs [".concat(o, "]"));
				if (r.length > 0) {
					var s = t.map((function(e) {
							return e.name
						})),
						i = Object.keys(e);
					throw new Error("Cannot compute the outputs [".concat(s,
						"] from the provided inputs ") + "[".concat(i,
						"]. Missing the following inputs: [").concat(r, "]"))
				}
				var u = eu(this.graph, n),
					c = function(e) {
						for (var t = new Map(e.map((function(e, t) {
								return [e.name, t]
							}))), n = Number.MAX_SAFE_INTEGER, r = e.map((function(e, t) {
								return ou(e) ? n : t
							})), a = function(e) {
								var n = r[t.get(e.name)];
								return null == n ? -1 : n
							}, o = e.map((function(e, t) {
								return e.children.map(a).reduce((function(e, t) {
									return Math.max(e, t)
								}), r[t])
							})), s = new Map, i = 0; i < e.length; ++i) {
							var u = o[i];
							if (u !== n) {
								var c = e[i],
									p = e[u];
								s.has(p.name) || s.set(p.name, []), s.get(p.name).push(c)
							}
						}
						return s
					}(u);
				return {
					orderedNodes: u,
					nodeLiveUntilMap: c
				}
			}, e.prototype.cloneAndKeepTensor = function(e) {
				if (null == e) return null;
				var n = e.clone();
				return t.keep(n), n
			}, e.prototype.cloneTensorList = function(e) {
				var t = this;
				if (!e) return null;
				var n = e.map((function(e) {
					return t.cloneAndKeepTensor(e)
				}));
				return n
			}, e.prototype.cloneTensorMap = function(e) {
				var t = this;
				return Object.fromEntries(Object.entries(e).map((function(e) {
					var n = d(e, 2),
						r = n[0],
						a = n[1];
					return [r, t.cloneTensorList(a)]
				})))
			}, e.prototype.execute = function(e, n) {
				var r = this;
				this.disposeIntermediateTensors(), e = this.mapInputs(e);
				var a = Object.keys(e).sort();
				this.checkInputs(e), this.checkInputShapeAndType(e), n = this.mapOutputs(n), this
					.checkOutputs(n);
				var o = a.map((function(e) {
						return r.graph.nodes[N(e)[0]]
					})),
					s = n.map((function(e) {
						return N(e)[0]
					})),
					i = new Set(s),
					u = s.map((function(e) {
						return r.graph.nodes[e]
					}));
				0 === u.length && (u = this._outputs);
				var c = this.getCompilationKey(o, u),
					p = this.compiledMap.get(c);
				null == p && (p = this.compile(e, u), this.compiledMap.set(c, p));
				try {
					this.keepIntermediateTensors = t.env().getBool("KEEP_INTERMEDIATE_TENSORS")
				} catch (e) {
					this.keepIntermediateTensors = !1, console.warn(e.message)
				}
				var h = {},
					f = {};
				return t.tidy((function() {
					var a, o, s = new Ji(r.weightMap, h, f, r.functionExecutorMap, r
							.parseNodeNameCache),
						u = Object.assign({}, r.weightMap);
					r.keepIntermediateTensors && (r.clonedTensorsMap = r.cloneTensorMap(r
						.weightMap)), Object.keys(e).forEach((function(t) {
						var n = d(N(t, s), 2),
							a = n[0],
							o = [];
						o[n[1]] = e[t], u[a] = o, r.keepIntermediateTensors && (r
							.clonedTensorsMap[a] = r.cloneTensorList(o))
					}));
					var c = r.getFrozenTensorIds(u),
						m = p.orderedNodes,
						y = p.nodeLiveUntilMap;
					try {
						for (var g = l(m), b = g.next(); !b.done; b = g.next()) {
							var x = b.value;
							if (!u[x.name]) {
								var w = Yi(x, u, s, r._resourceManager);
								if (t.util.isPromise(w)) throw new Error(
									"The execution of the op '".concat(x.op,
										"' returned a promise. ") +
									"Please use model.executeAsync() instead.");
								u[x.name] = w, r.keepIntermediateTensors && (r.clonedTensorsMap[
										x.name] = r.cloneTensorList(w)), r
									.checkTensorForDisposalWithNodeLiveUntilInfo(x, u, s, c, i,
										y.get(x.name))
							}
						}
					} catch (e) {
						a = {
							error: e
						}
					} finally {
						try {
							b && !b.done && (o = g.return) && o.call(g)
						} finally {
							if (a) throw a.error
						}
					}
					return null == r.parent && s.dispose(c), n.map((function(e) {
						return v(e, u, s)
					}))
				}))
			}, e.prototype.getFrozenTensorIds = function(e) {
				var t = [].concat.apply([], Object.keys(e).map((function(t) {
					return e[t]
				})).map((function(e) {
					return e.map((function(e) {
						return e.id
					}))
				})));
				return new Set(t)
			}, e.prototype.checkTensorForDisposal = function(e, t, n, r, a, o, s) {
				var i, u, c, p, d, h;
				if (!ou(t) && !o.has(e)) {
					try {
						for (var f = l(n[e]), m = f.next(); !m.done; m = f.next()) {
							null != (k = m.value) && (s[k.id] = (s[k.id] || 0) + t.children.length)
						}
					} catch (e) {
						i = {
							error: e
						}
					} finally {
						try {
							m && !m.done && (u = f.return) && u.call(f)
						} finally {
							if (i) throw i.error
						}
					}
					try {
						for (var y = l(t.inputs), v = y.next(); !v.done; v = y.next()) {
							var b = v.value;
							if (!ou(b)) {
								var x = g(b.name, n, r);
								if (null != x) try {
									for (var N = (d = void 0, l(x)), w = N.next(); !w.done; w = N
										.next()) {
										var k;
										if ((k = w.value) && !k.kept && !a.has(k.id)) {
											var T = s[k.id];
											1 === T ? (k.dispose(), delete s[k.id]) : null != T && s[k
												.id]--
										}
									}
								} catch (e) {
									d = {
										error: e
									}
								} finally {
									try {
										w && !w.done && (h = N.return) && h.call(N)
									} finally {
										if (d) throw d.error
									}
								}
							}
						}
					} catch (e) {
						c = {
							error: e
						}
					} finally {
						try {
							v && !v.done && (p = y.return) && p.call(y)
						} finally {
							if (c) throw c.error
						}
					}
				}
			}, e.prototype.checkTensorForDisposalWithNodeLiveUntilInfo = function(e, t, n, r, a, o) {
				var s, i, u, c;

				function p(e) {
					return ou(e) || a.has(e.name)
				}
				if (!ou(e) && null != o) try {
					for (var d = l(o), h = d.next(); !h.done; h = d.next()) {
						var f = h.value;
						if (!p(f)) {
							var m = g(f.name, t, n);
							try {
								for (var y = (u = void 0, l(m)), v = y.next(); !v.done; v = y.next()) {
									var b = v.value;
									!b || b.kept || r.has(b.id) || b.dispose()
								}
							} catch (e) {
								u = {
									error: e
								}
							} finally {
								try {
									v && !v.done && (c = y.return) && c.call(y)
								} finally {
									if (u) throw u.error
								}
							}
						}
					}
				} catch (e) {
					s = {
						error: e
					}
				} finally {
					try {
						h && !h.done && (i = d.return) && i.call(d)
					} finally {
						if (s) throw s.error
					}
				}
			}, e.prototype.executeAsync = function(e, t) {
				return c(this, void 0, void 0, (function() {
					return p(this, (function(n) {
						return [2, this._executeAsync(e, t)]
					}))
				}))
			}, e.prototype.disposeIntermediateTensors = function() {
				this.clonedTensorsMap && (Object.values(this.clonedTensorsMap).forEach((function(e) {
					var t, n;
					try {
						for (var r = l(e), a = r.next(); !a.done; a = r.next()) {
							var o = a.value;
							o && !o.isDisposed && o.dispose()
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							a && !a.done && (n = r.return) && n.call(r)
						} finally {
							if (t) throw t.error
						}
					}
				})), this.clonedTensorsMap = null)
			}, e.prototype.getIntermediateTensors = function() {
				return this.clonedTensorsMap
			}, e.prototype._executeAsync = function(e, n, r, a, o) {
				return void 0 === r && (r = !1), void 0 === a && (a = {}), void 0 === o && (o = {}), c(this,
					void 0, void 0, (function() {
						var s, i, u, c, l, f;
						return p(this, (function(p) {
							switch (p.label) {
								case 0:
									this.disposeIntermediateTensors(), r || (e = this
										.mapInputs(e), this.checkInputs(e), this
										.checkInputShapeAndType(e), n = this
										.mapOutputs(n), this.checkOutputs(n));
									try {
										this.keepIntermediateTensors = t.env().getBool(
											"KEEP_INTERMEDIATE_TENSORS")
									} catch (e) {
										this.keepIntermediateTensors = !1, console.warn(
											e.message)
									}
									return s = new Ji(this.weightMap, a, o, this
											.functionExecutorMap, this
											.parseNodeNameCache), this
										.keepIntermediateTensors && (this
											.clonedTensorsMap = this.cloneTensorMap(this
												.weightMap)), [4, this
											.executeWithControlFlow(e, s, n, r)
										];
								case 1:
									return i = p.sent(), u = n.map((function(e) {
											return v(e, i, s)
										})), c = u.map((function(e) {
											return e.id
										})), l = Object.keys(e).map((function(t) {
											return e[t].id
										})), f = new Set(h(h(h([], d(c), !1), d(l), !1),
											d(this.weightIds), !1)), Object.values(i)
										.forEach((function(e) {
											e.forEach((function(e) {
												!e || e
													.isDisposed || f
													.has(e.id) || e
													.dispose()
											}))
										})), null == this.parent && s.dispose(f), [2, u]
							}
						}))
					}))
			}, e.prototype.executeFunctionAsync = function(e, t, n) {
				return c(this, void 0, void 0, (function() {
					var r, a = this;
					return p(this, (function(o) {
						return r = e.reduce((function(e, t, n) {
							return e[a.inputs[n].name] = t, e
						}), {}), [2, this._executeAsync(r, this.outputNodes, !0,
							t, n)]
					}))
				}))
			}, e.prototype.executeWithControlFlow = function(e, t, n, r) {
				return c(this, void 0, void 0, (function() {
					var a, o, s, i, u, c, l, f, m, y, g, b, x, w, k, T, S, _, E = this;
					return p(this, (function(p) {
						switch (p.label) {
							case 0:
								a = Object.keys(e), o = a.map((function(e) {
										return E.graph.nodes[N(e)[0]]
									})), s = n.map((function(e) {
										return N(e)[0]
									})), i = new Set(s), 0 === (u = s.map((function(
										e) {
										return E.graph.nodes[e]
									}))).length && (u = this._outputs), c = $i(e, u,
										this.weightMap, this._initNodes), l = c
									.usedNodes, f = c.missingInputs, m = c
									.dynamicNode, y = c.syncInputs, g = h(h(h([], d(
										o), !1), d(this.graph.weights), !1), d(
										this._initNodes || []), !1).map((function(
										e) {
										return {
											node: e,
											contexts: t.currentContext
										}
									})), b = Object.assign({}, this.weightMap),
									Object.keys(e).forEach((function(t) {
										var n = d(N(t), 2),
											r = n[0],
											a = [];
										a[n[1]] = e[t], b[r] = a
									})), x = {}, w = this.getFrozenTensorIds(b),
									k = {}, p.label = 1;
							case 1:
								return g.length > 0 ? (T = this.processStack(o, g,
									t, b, k, w, i, x, l), [4, Promise.all(
									T)]) : [3, 3];
							case 2:
								return p.sent(), [3, 1];
							case 3:
								if (null != m || r || console.warn(
										"This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."
									), (S = u.filter((function(e) {
										return !ou(e) && !v(e.name, b,
											t)
									})).map((function(e) {
										return e.name
									}))).length > 0) throw _ = "", null != m && (_ =
									"Alternatively, to avoid the dynamic ops, use model.execute() " +
									"and specify the inputs [".concat(y,
										"]")), new Error(
									"Cannot compute the outputs [".concat(S,
										"] from the provided ") + "inputs ["
									.concat(a,
										"]. Consider providing the following inputs: "
									) + "[".concat(f, "]. ").concat(_));
								return [2, b]
						}
					}))
				}))
			}, e.prototype.processStack = function(e, n, r, a, o, s, i, u, c) {
				for (var p = this, l = [], h = function() {
						var e, h, m = n.pop();
						r.currentContext = m.contexts;
						var v = "";
						if ("Enter" === m.node.op && y("isConstant", m.node, a, r) && (e = d(b(m.node
								.name, r), 1), v = e[0]), null == a[m.node.name]) {
							var g = Yi(m.node, a, r, f._resourceManager);
							v || (h = d(b(m.node.name, r), 1), v = h[0]);
							var x = r.currentContext;
							t.util.isPromise(g) ? l.push(g.then((function(e) {
								return a[v] = e, p.keepIntermediateTensors && (p
										.clonedTensorsMap[v] = p.cloneTensorList(e)), r
									.currentContext = x, p.checkTensorForDisposal(v, m
										.node, a, r, s, i, u), p.processChildNodes(m
										.node, n, r, a, o, c), e
							}))) : (a[v] = g, f.keepIntermediateTensors && (f.clonedTensorsMap[v] =
								f.cloneTensorList(g)), f.checkTensorForDisposal(v, m.node, a, r,
								s, i, u), f.processChildNodes(m.node, n, r, a, o, c))
						} else f.processChildNodes(m.node, n, r, a, o, c)
					}, f = this; n.length > 0;) h();
				return l
			}, e.prototype.processChildNodes = function(e, t, n, r, a, o) {
				e.children.forEach((function(e) {
					var s = d(b(e.name, n), 1)[0];
					!a[s] && o.has(e.name) && ("Merge" === e.op ? e.inputNames.some((function(
						e) {
						return !!v(e, r, n)
					})) && (a[s] = !0, t.push({
						contexts: n.currentContext,
						node: e
					})) : e.inputNames.every((function(e) {
						return !!v(e, r, n)
					})) && (a[s] = !0, t.push({
						contexts: n.currentContext,
						node: e
					})))
				}))
			}, e.prototype.dispose = function() {
				var e = this;
				Object.keys(this.weightMap).forEach((function(t) {
					return e.weightMap[t].forEach((function(e) {
						return e.dispose()
					}))
				}))
			}, e.prototype.checkInputShapeAndType = function(e) {
				var n = this;
				Object.keys(e).forEach((function(r) {
					var a = e[r],
						o = d(N(r), 1)[0],
						s = n.graph.nodes[o];
					if (s.attrParams.shape && s.attrParams.shape.value) {
						var i = s.attrParams.shape.value,
							u = i.length === a.shape.length && a.shape.every((function(e, t) {
								return -1 === i[t] || i[t] === e
							}));
						t.util.assert(u, (function() {
							return "The shape of dict['".concat(s.name,
									"'] provided in ") +
								"model.execute(dict) must be [".concat(i,
									"], but was ") + "[".concat(a.shape, "]")
						}))
					}
					s.attrParams.dtype && s.attrParams.dtype.value && t.util.assert(a.dtype ===
						s.attrParams.dtype.value, (function() {
							return "The dtype of dict['".concat(s.name,
									"'] provided in ") +
								"model.execute(dict) must be " + "".concat(s.attrParams
									.dtype.value, ", but was ").concat(a.dtype)
						}))
				}))
			}, e.prototype.mapInputs = function(e) {
				var t, n, r = {};
				for (var a in e) {
					var o = null === (n = null === (t = this._signature) || void 0 === t ? void 0 : t
						.inputs) || void 0 === n ? void 0 : n[a];
					null != o ? r[o.name] = e[a] : r[a] = e[a]
				}
				return r
			}, e.prototype.checkInputs = function(e) {
				var t = this,
					n = Object.keys(e).filter((function(e) {
						var n = d(N(e), 1)[0];
						return null == t.graph.nodes[n]
					}));
				if (n.length > 0) throw new Error("The dict provided in model.execute(dict) has " +
					"keys: [".concat(n, "] that are not part of graph"))
			}, e.prototype.mapOutputs = function(e) {
				var t = this;
				return e.map((function(e) {
					var n, r, a = null === (r = null === (n = t._signature) || void 0 === n ?
						void 0 : n.outputs) || void 0 === r ? void 0 : r[e];
					return null != a ? a.name : e
				}), {})
			}, e.prototype.checkOutputs = function(e) {
				var t = this;
				e.forEach((function(e) {
					var n = d(N(e), 1)[0];
					if (!t.graph.nodes[n]) throw new Error("The output '".concat(e,
						"' is not found in the graph"))
				}))
			}, e
		}(),
		cu = function() {
			function e(e, t) {
				void 0 === e && (e = {}), void 0 === t && (t = {}), this.hashTableNameToHandle = e, this
					.hashTableMap = t
			}
			return e.prototype.addHashTable = function(e, t) {
				this.hashTableNameToHandle[e] = t.handle, this.hashTableMap[t.id] = t
			}, e.prototype.getHashTableHandleByName = function(e) {
				return this.hashTableNameToHandle[e]
			}, e.prototype.getHashTableById = function(e) {
				return this.hashTableMap[e]
			}, e.prototype.dispose = function() {
				for (var e in this.hashTableMap) this.hashTableMap[e].clearAndClose(), delete this
					.hashTableMap[e];
				for (var t in this.hashTableNameToHandle) this.hashTableNameToHandle[t].dispose(),
					delete this.hashTableNameToHandle[t]
			}, e
		}(),
		pu = {
			float32: 4,
			float16: 2,
			int32: 4,
			uint16: 2,
			uint8: 1,
			bool: 1,
			complex64: 8
		};

	function lu(e, t) {
		return c(this, void 0, void 0, (function() {
			var n, r, a, o, s, i, u, c;
			return p(this, (function(p) {
				switch (p.label) {
					case 0:
						return n = pe(e.shape), "quantization" in e ? (a = e
							.quantization, r = pu[a.dtype], [3, 7]) : [3, 1];
					case 1:
						if ("string" !== e.dtype) return [3, 6];
						o = 0, s = 0, p.label = 2;
					case 2:
						return s < n ? (i = o, u = 4, c = Uint32Array.bind, [4, t(o, o +
							4)]) : [3, 5];
					case 3:
						o = i + (u + (new(c.apply(Uint32Array, [void 0, p.sent()])))[
							0]), p.label = 4;
					case 4:
						return s++, [3, 2];
					case 5:
						return [2, o];
					case 6:
						r = pu[e.dtype], p.label = 7;
					case 7:
						return [2, n * r]
				}
			}))
		}))
	}

	function du(e, t) {
		var n, r, a, o, s = e.name,
			i = e.dtype,
			u = e.shape,
			c = pe(u),
			p = 0;
		if ("quantization" in e) {
			var l = e.quantization;
			if ("uint8" === l.dtype || "uint16" === l.dtype) {
				if (!("min" in l) || !("scale" in l)) throw new Error("Weight ".concat(e.name,
						" with quantization ").concat(l.dtype, " ") +
					"doesn't have corresponding metadata min and scale.")
			} else {
				if ("float16" !== l.dtype) throw new Error("Weight ".concat(e.name, " has unknown ") +
					"quantization dtype ".concat(l.dtype, ". ") +
					"Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.");
				if ("float32" !== i) throw new Error("Weight ".concat(e.name, " is quantized with ").concat(l
					.dtype, " ") + "which only supports weights of type float32 not ".concat(i,
					"."))
			}
			var d = pu[l.dtype],
				h = "uint8" === l.dtype ? new Uint8Array(t) : new Uint16Array(t);
			if ("float32" === i)
				if ("uint8" === l.dtype || "uint16" === l.dtype) {
					n = new Float32Array(h.length);
					for (var f = 0; f < h.length; f++) {
						var m = h[f];
						n[f] = m * l.scale + l.min
					}
				} else {
					if ("float16" !== l.dtype) throw new Error("Unsupported quantization type ".concat(l.dtype,
						" ") + "for weight type float32.");
					var y = (r = function() {
						var e = function(e) {
								for (var t = e << 13, n = 0; 0 == (8388608 & t);) n -= 8388608, t <<= 1;
								return (t &= -8388609) | (n += 947912704)
							},
							t = new Uint32Array(2048);
						t[0] = 0;
						for (var n = 1; n < 1024; n++) t[n] = e(n);
						for (n = 1024; n < 2048; n++) t[n] = 939524096 + (n - 1024 << 13);
						return t
					}(), a = function() {
						var e = new Uint32Array(64);
						e[0] = 0, e[31] = 1199570944, e[32] = 2147483648, e[63] = 3347054592;
						for (var t = 1; t < 31; t++) e[t] = t << 23;
						for (t = 33; t < 63; t++) e[t] = 2147483648 + (t - 32 << 23);
						return e
					}(), o = function() {
						for (var e = new Uint32Array(64), t = 0; t < 64; t++) e[t] = 1024;
						return e[0] = e[32] = 0, e
					}(), function(e) {
						for (var t = new ArrayBuffer(4 * e.length), n = new Uint32Array(t), s = 0; s < e
							.length; s++) {
							var i = e[s],
								u = r[o[i >> 10] + (1023 & i)] + a[i >> 10];
							n[s] = u
						}
						return new Float32Array(t)
					});
					n = y(h)
				}
			else {
				if ("int32" !== i) throw new Error("Unsupported dtype in weight '".concat(s, "': ").concat(i));
				if ("uint8" !== l.dtype && "uint16" !== l.dtype) throw new Error(
					"Unsupported quantization type ".concat(l.dtype, " ") + "for weight type int32.");
				n = new Int32Array(h.length);
				for (f = 0; f < h.length; f++) {
					m = h[f];
					n[f] = Math.round(m * l.scale + l.min)
				}
			}
			p += c * d
		} else if ("string" === i) {
			var v = pe(e.shape);
			n = [];
			for (f = 0; f < v; f++) {
				var g = new Uint32Array(t.slice(p, p + 4))[0];
				p += 4;
				var b = new Uint8Array(t.slice(p, p + g));
				n.push(b), p += g
			}
		} else {
			var x = pu[i];
			if ("float32" === i) n = new Float32Array(t);
			else if ("int32" === i) n = new Int32Array(t);
			else {
				if ("bool" !== i) {
					if ("complex64" === i) {
						n = new Float32Array(t);
						var N = new Float32Array(n.length / 2),
							w = new Float32Array(n.length / 2);
						for (f = 0; f < N.length; f++) N[f] = n[2 * f], w[f] = n[2 * f + 1];
						var k = gs(N, u, "float32"),
							T = gs(w, u, "float32"),
							S = ur(k, T);
						return k.dispose(), T.dispose(), S
					}
					throw new Error("Unsupported dtype in weight '".concat(s, "': ").concat(i))
				}
				n = new Uint8Array(t)
			}
			p += c * x
		}
		return gs(n, u, i)
	}

	function hu(e, t, n) {
		return c(this, void 0, void 0, (function() {
			var r, a, o, s, i, u;
			return p(this, (function(c) {
				switch (c.label) {
					case 0:
						r = new Uint8Array(t), c.label = 1;
					case 1:
						return r.byteLength < n ? [4, e.read()] : [3, 3];
					case 2:
						if (a = c.sent(), o = a.done, s = a.value, o && null == s)
							throw i = n - r.byteLength, new Error("Reader is done but "
								.concat(i, " bytes are still expected"));
						return (u = new Uint8Array(r.length + s.byteLength)).set(r, 0),
							u.set(new Uint8Array(s), r.length), r = u, [3, 1];
					case 3:
						return [2, r.buffer]
				}
			}))
		}))
	}

	function fu(e, t) {
		return c(this, void 0, void 0, (function() {
			var n, r, a, o, s, i, u, d, h, f, m, y, v, g = this;
			return p(this, (function(b) {
				switch (b.label) {
					case 0:
						n = {}, r = e.getReader(), a = new ArrayBuffer(0), b.label = 1;
					case 1:
						b.trys.push([1, 7, 8, 9]), o = l(t), s = o.next(), b.label = 2;
					case 2:
						return s.done ? [3, 6] : [4, lu(i = s.value, (function(e, t) {
							return c(g, void 0, void 0, (function() {
								return p(this, (function(
									n) {
									switch (n
										.label
									) {
										case 0:
											return [4,
												hu(r,
													a,
													t
												)
											];
										case 1:
											return [2,
												(a = n
													.sent()
												)
												.slice(
													e,
													t
												)
											]
									}
								}))
							}))
						}))];
					case 3:
						return u = b.sent(), [4, hu(r, a, u)];
					case 4:
						a = b.sent(), d = a.slice(0, u), a = a.slice(u), h = du(i, d),
							n[i.name] = h, "webgpu" === on.backendName &&
							"uploadToGPU" in (f = on.backend) && pe(h.shape) >= De()
							.get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD") && f.uploadToGPU(h
								.dataId), b.label = 5;
					case 5:
						return s = o.next(), [3, 2];
					case 6:
						return [3, 9];
					case 7:
						return m = b.sent(), y = {
							error: m
						}, [3, 9];
					case 8:
						try {
							s && !s.done && (v = o.return) && v.call(o)
						} finally {
							if (y) throw y.error
						}
						return [7];
					case 9:
						return [2, n]
				}
			}))
		}))
	}
	var mu = "?tfjs-format=file",
		yu = "model.json",
		vu = function() {
			function e(e, n, r) {
				void 0 === n && (n = {}), void 0 === r && (r = t.io), this.modelUrl = e, this.loadOptions = n,
					this.version = "n/a", this.io = r, null == n && (this.loadOptions = {}), this
					.resourceManager = new cu
			}
			return Object.defineProperty(e.prototype, "modelVersion", {
				get: function() {
					return this.version
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "inputNodes", {
				get: function() {
					return this.executor.inputNodes
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "outputNodes", {
				get: function() {
					return this.executor.outputNodes
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "inputs", {
				get: function() {
					return this.executor.inputs
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "outputs", {
				get: function() {
					return this.executor.outputs
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "weights", {
				get: function() {
					return this.executor.weightMap
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "metadata", {
				get: function() {
					return this.artifacts.userDefinedMetadata
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "modelSignature", {
				get: function() {
					return this.signature
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "modelStructuredOutputKeys", {
				get: function() {
					return this.structuredOutputKeys
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.findIOHandler = function() {
				var e = this.modelUrl;
				if (null != e.load) this.handler = e;
				else if (null != this.loadOptions.requestInit) this.handler = this.io.browserHTTPRequest(e,
					this.loadOptions);
				else {
					var t = this.io.getLoadHandlers(e, this.loadOptions);
					if (0 === t.length) t.push(this.io.browserHTTPRequest(e, this.loadOptions));
					else if (t.length > 1) throw new Error("Found more than one (".concat(t.length,
						") load handlers for ") + "URL '".concat([e], "'"));
					this.handler = t[0]
				}
			}, e.prototype.load = function() {
				var e = this;
				if (this.findIOHandler(), null == this.handler.load) throw new Error(
					"Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented."
				);
				var n = this.handler.load();
				return t.util.isPromise(n) ? n.then((function(t) {
					return null == t.getWeightStream ? e.loadSync(t) : e.loadStreaming(t)
				})) : this.loadSync(n)
			}, e.prototype.loadSync = function(e) {
				var t = this.io.decodeWeights(e.weightData, e.weightSpecs);
				return this.loadWithWeightMap(e, t)
			}, e.prototype.loadStreaming = function(e) {
				return c(this, void 0, void 0, (function() {
					var t;
					return p(this, (function(n) {
						switch (n.label) {
							case 0:
								if (null == e.getWeightStream) throw new Error(
									"Model artifacts missing streamWeights function"
								);
								return [4, fu(e.getWeightStream(), e.weightSpecs)];
							case 1:
								return t = n.sent(), [2, this.loadWithWeightMap(e,
									t)]
						}
					}))
				}))
			}, e.prototype.loadWithWeightMap = function(e, t) {
				this.artifacts = e;
				var n = this.artifacts.modelTopology,
					r = this.artifacts.signature;
				if (null != this.artifacts.userDefinedMetadata) {
					var a = this.artifacts.userDefinedMetadata;
					null != a.signature && (r = a.signature), null != a.structuredOutputKeys && (this
						.structuredOutputKeys = a.structuredOutputKeys)
				}
				if (this.signature = r, this.version = "".concat(n.versions.producer, ".").concat(n.versions
						.minConsumer), this.executor = new uu(q.Instance.transformGraph(n, this.signature)),
					this.executor.weightMap = this.convertTensorMapToTensorsMap(t), this.executor
					.resourceManager = this.resourceManager, null != e.modelInitializer && null != e
					.modelInitializer.node) {
					var o = q.Instance.transformGraph(e.modelInitializer);
					this.initializer = new uu(o), this.initializer.weightMap = this.executor.weightMap, this
						.initializer.resourceManager = this.resourceManager, this.initializerSignature = e
						.initializerSignature
				}
				return !0
			}, e.prototype.save = function(e, t) {
				return c(this, void 0, void 0, (function() {
					var t;
					return p(this, (function(n) {
						if ("string" == typeof e) {
							if (0 === (t = this.io.getSaveHandlers(e)).length)
								throw new Error(
									"Cannot find any save handlers for URL '"
									.concat(e, "'"));
							if (t.length > 1) throw new Error(
								"Found more than one (".concat(t.length,
									") save handlers for ") + "URL '"
								.concat(e, "'"));
							e = t[0]
						}
						if (null == e.save) throw new Error(
							"GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined."
						);
						return [2, e.save(this.artifacts)]
					}))
				}))
			}, e.prototype.addStructuredOutputNames = function(e) {
				var n = this;
				if (this.structuredOutputKeys) {
					var r = e instanceof t.Tensor ? [e] : e,
						a = {};
					return r.forEach((function(e, t) {
						return a[n.structuredOutputKeys[t]] = e
					})), a
				}
				return e
			}, e.prototype.predict = function(e, t) {
				var n = this.execute(e, this.outputNodes);
				return this.addStructuredOutputNames(n)
			}, e.prototype.predictAsync = function(e, t) {
				return c(this, void 0, void 0, (function() {
					var t;
					return p(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, this.executeAsync(e, this.outputNodes)];
							case 1:
								return t = n.sent(), [2, this
									.addStructuredOutputNames(t)
								]
						}
					}))
				}))
			}, e.prototype.normalizeInputs = function(e) {
				var n, r = this;
				if (!(e instanceof t.Tensor || Array.isArray(e))) {
					var a = null === (n = this.signature) || void 0 === n ? void 0 : n.inputs;
					if (null != a)
						for (var o in a) {
							var s = a[o];
							null != s.resourceId && (e[o] = this.resourceIdToCapturedInput[s.resourceId])
						}
					return e
				}
				e = Array.isArray(e) ? e : [e];
				var i = Object.keys(this.resourceIdToCapturedInput).length;
				if (e.length + i !== this.inputNodes.length) throw new Error(
					"Input tensor count mismatch, the graph model has ".concat(this.inputNodes
						.length - i, " non-resource placeholders, while there are ").concat(e
						.length, " input tensors provided."));
				var u = 0;
				return this.inputNodes.reduce((function(t, n) {
					var a, o, s, i = null === (s = null === (o = null === (a = r.signature) ||
						void 0 === a ? void 0 : a.inputs) || void 0 === o ? void 0 : o[
						n]) || void 0 === s ? void 0 : s.resourceId;
					return t[n] = null != i ? r.resourceIdToCapturedInput[i] : e[u++], t
				}), {})
			}, e.prototype.normalizeOutputs = function(e) {
				return e = e || this.outputNodes, Array.isArray(e) ? e : [e]
			}, e.prototype.executeInitializerGraph = function() {
				return null == this.initializer ? [] : null == this.initializerSignature ? this.initializer
					.execute({}, []) : this.initializer.execute({}, Object.keys(this.initializerSignature
						.outputs))
			}, e.prototype.executeInitializerGraphAsync = function() {
				return c(this, void 0, void 0, (function() {
					return p(this, (function(e) {
						return null == this.initializer ? [2, []] : null == this
							.initializerSignature ? [2, this.initializer
								.executeAsync({}, [])
							] : [2, this.initializer.executeAsync({}, Object.keys(
								this.initializerSignature.outputs))]
					}))
				}))
			}, e.prototype.setResourceIdToCapturedInput = function(e) {
				if (this.resourceIdToCapturedInput = {}, this.initializerSignature)
					for (var t = this.initializerSignature.outputs, n = Object.keys(t), r = 0; r < n
						.length; r++) {
						var a = t[n[r]];
						this.resourceIdToCapturedInput[a.resourceId] = e[r]
					}
			}, e.prototype.execute = function(e, t) {
				null == this.resourceIdToCapturedInput && this.setResourceIdToCapturedInput(this
					.executeInitializerGraph()), e = this.normalizeInputs(e), t = this.normalizeOutputs(
					t);
				var n = this.executor.execute(e, t);
				return n.length > 1 ? n : n[0]
			}, e.prototype.executeAsync = function(e, t) {
				return c(this, void 0, void 0, (function() {
					var n, r;
					return p(this, (function(a) {
						switch (a.label) {
							case 0:
								return null != this.resourceIdToCapturedInput ? [3,
									2
								] : (n = this.setResourceIdToCapturedInput, [4,
									this.executeInitializerGraphAsync()
								]);
							case 1:
								n.apply(this, [a.sent()]), a.label = 2;
							case 2:
								return e = this.normalizeInputs(e), t = this
									.normalizeOutputs(t), [4, this.executor
										.executeAsync(e, t)
									];
							case 3:
								return [2, (r = a.sent()).length > 1 ? r : r[0]]
						}
					}))
				}))
			}, e.prototype.getIntermediateTensors = function() {
				return this.executor.getIntermediateTensors()
			}, e.prototype.disposeIntermediateTensors = function() {
				this.executor.disposeIntermediateTensors()
			}, e.prototype.convertTensorMapToTensorsMap = function(e) {
				return Object.keys(e).reduce((function(t, n) {
					return t[n] = [e[n]], t
				}), {})
			}, e.prototype.dispose = function() {
				this.executor.dispose(), this.initializer && (this.initializer.dispose(), this
						.resourceIdToCapturedInput && t.dispose(this.resourceIdToCapturedInput)), this
					.resourceManager.dispose()
			}, e
		}();
	e.GraphModel = vu, e.deregisterOp = function(e) {
		delete f[e]
	}, e.loadGraphModel = function(e, n, r) {
		return void 0 === n && (n = {}), void 0 === r && (r = t.io), c(this, void 0, void 0, (function() {
			var t;
			return p(this, (function(a) {
				switch (a.label) {
					case 0:
						if (null == e) throw new Error(
							"modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model"
						);
						return null == n && (n = {}), n.fromTFHub && "string" ==
							typeof e && (e = function(e) {
								e.endsWith("/") || (e += "/");
								return "".concat(e).concat(yu).concat(mu)
							}(e)), [4, (t = new vu(e, n, r)).load()];
					case 1:
						return a.sent(), [2, t]
				}
			}))
		}))
	}, e.loadGraphModelSync = function(e) {
		if (null == e) throw new Error(
			"modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model"
		);
		var n;
		if (e instanceof Array) {
			var r = d(e, 2),
				a = r[0],
				o = r[1];
			if (!a) throw new Error("modelJSON must be the first element of the array");
			if (!(o && o instanceof ArrayBuffer)) throw new Error(
				"An ArrayBuffer of weights must be the second element of the array");
			if (!("modelTopology" in a)) throw new Error("Model JSON is missing 'modelTopology'");
			if (!("weightsManifest" in a)) throw new Error("Model JSON is missing 'weightsManifest'");
			var s = t.io.getWeightSpecs(a.weightsManifest),
				i = t.io.getModelArtifactsForJSONSync(a, s, o);
			n = t.io.fromMemorySync(i)
		} else if ("load" in e) n = e;
		else {
			if (!("modelTopology" in e && "weightSpecs" in e && "weightData" in e)) throw new Error(
				"Unknown model format");
			n = t.io.fromMemorySync(e)
		}
		var u = new vu(n);
		return u.load(), u
	}, e.registerOp = function(e, t) {
		var n = {
			tfOpName: e,
			category: "custom",
			inputs: [],
			attrs: [],
			customExecutor: t
		};
		f[e] = n
	}, e.version_converter = "4.22.0"
}));
//# sourceMappingURL=tf-converter.min.js.map