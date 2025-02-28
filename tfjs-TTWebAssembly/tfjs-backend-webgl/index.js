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
!function (e, n) {
    n(e.tf = e.tf || {}, e.tf)
}(TTWebAssembly, (function (e, n) {
    "use strict";

    function t(e) {
        var n = Object.create(null);
        return e && Object.keys(e).forEach((function (t) {
            if ("default" !== t) {
                var a = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(n, t, a.get ? a : {
                    enumerable: !0, get: function () {
                        return e[t]
                    }
                })
            }
        })), n.default = e, n
    }

    var a = t(n), r = function (e, n) {
        return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, n) {
            e.__proto__ = n
        } || function (e, n) {
            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }, r(e, n)
    };

    function o(e, n, t, a) {
        return new (t || (t = Promise))((function (r, o) {
            function i(e) {
                try {
                    s(a.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    s(a.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var n;
                e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t((function (e) {
                    e(n)
                }))).then(i, c)
            }

            s((a = a.apply(e, n || [])).next())
        }))
    }

    function i(e, n) {
        var t, a, r, o, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function c(o) {
            return function (c) {
                return function (o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r;
                        switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return i.label++, {value: o[1], done: !1};
                            case 5:
                                i.label++, a = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < r[1]) {
                                    i.label = r[1], r = o;
                                    break
                                }
                                if (r && i.label < r[2]) {
                                    i.label = r[2], i.ops.push(o);
                                    break
                                }
                                r[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = n.call(e, i)
                    } catch (e) {
                        o = [6, e], a = 0
                    } finally {
                        t = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, c])
            }
        }
    }

    function c(e) {
        var n = "function" == typeof Symbol && Symbol.iterator, t = n && e[n], a = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function () {
                return e && a >= e.length && (e = void 0), {value: e && e[a++], done: !e}
            }
        };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function s(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var a, r, o = t.call(e), i = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(a = o.next()).done;) i.push(a.value)
        } catch (e) {
            r = {error: e}
        } finally {
            try {
                a && !a.done && (t = o.return) && t.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return i
    }

    function u(e, n, t) {
        if (t || 2 === arguments.length) for (var a, r = 0, o = n.length; r < o; r++) !a && r in n || (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
        return e.concat(a || Array.prototype.slice.call(n))
    }

    var l, d, p, h = {}, f = {
        alpha: !1,
        antialias: !1,
        premultipliedAlpha: !1,
        preserveDrawingBuffer: !1,
        depth: !1,
        stencil: !1,
        failIfMajorPerformanceCaveat: !0
    };

    function x(e, n) {
        h[e] = n
    }

    function v(e, t) {
        if (!(e in h) || null != t) {
            var a = function (e, t) {
                if (1 !== e && 2 !== e) throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
                var a = null == t ? function (e) {
                    return tt.createOffscreenCanvas()
                }(e) : t;
                a.addEventListener("webglcontextlost", (function (n) {
                    n.preventDefault(), delete h[e]
                }), !1), n.env().getBool("SOFTWARE_WEBGL_ENABLED") && (f.failIfMajorPerformanceCaveat = !1);
                if (1 === e) return a.getContext("webgl") || a.getContext("experimental-webgl", f);
                return a.getContext("webgl2", f)
            }(e, t);
            if (null === a) return console.log("Could not get context for WebGL version", e), null;
            h[e] = a
        }
        var r = h[e];
        return null == r || r.isContextLost() ? (delete h[e], v(e)) : (r.disable(r.DEPTH_TEST), r.disable(r.STENCIL_TEST), r.disable(r.BLEND), r.disable(r.DITHER), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SAMPLE_COVERAGE), r.enable(r.SCISSOR_TEST), r.enable(r.CULL_FACE), r.cullFace(r.BACK), h[e])
    }

    function g(e, n) {
        return [n, e]
    }

    function m(e) {
        var t = n.util.sizeFromShape(e), a = Math.ceil(t / 4);
        return n.util.sizeToSquarishShape(a)
    }

    function b(e, n) {
        return [Math.max(1, Math.ceil(n / 2)), Math.max(1, Math.ceil(e / 2))]
    }

    function C(e, t) {
        var a, r, o, i, c, s, u, l, d, p, h = e;
        return 2 === n.env().getNumber("WEBGL_VERSION") ? (a = h.R32F, r = h.R16F, o = h.RGBA16F, i = h.RGBA32F, c = h.RED, u = 4, l = 1, d = h.HALF_FLOAT, p = h.FLOAT, s = h.RGBA8) : (a = e.RGBA, r = e.RGBA, o = e.RGBA, i = h.RGBA, c = e.RGBA, u = 4, l = 4, d = null != t ? t.HALF_FLOAT_OES : null, p = e.FLOAT, s = e.RGBA), {
            internalFormatFloat: a,
            internalFormatHalfFloat: r,
            internalFormatPackedHalfFloat: o,
            internalFormatPackedFloat: i,
            textureFormatFloat: c,
            downloadTextureFormat: s,
            downloadUnpackNumChannels: u,
            defaultNumChannels: l,
            textureTypeHalfFloat: d,
            textureTypeFloat: p
        }
    }

    function y(e, t) {
        var a = t();
        return n.env().getBool("DEBUG") && function (e) {
            var n = e.getError();
            if (n !== e.NO_ERROR) throw new Error("WebGL Error: " + I(e, n))
        }(e), a
    }

    !function (e) {
        e[e.DENSE = 0] = "DENSE", e[e.SHARED_BATCH = 1] = "SHARED_BATCH"
    }(l || (l = {})), function (e) {
        e[e.RENDER = 0] = "RENDER", e[e.UPLOAD = 1] = "UPLOAD", e[e.PIXELS = 2] = "PIXELS", e[e.DOWNLOAD = 3] = "DOWNLOAD"
    }(d || (d = {})), function (e) {
        e[e.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", e[e.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", e[e.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", e[e.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", e[e.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16"
    }(p || (p = {}));

    function w(e) {
        return !!(n.env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === e || 5.96e-8 < Math.abs(e) && Math.abs(e) < 65504)
    }

    function I(e, n) {
        switch (n) {
            case e.NO_ERROR:
                return "NO_ERROR";
            case e.INVALID_ENUM:
                return "INVALID_ENUM";
            case e.INVALID_VALUE:
                return "INVALID_VALUE";
            case e.INVALID_OPERATION:
                return "INVALID_OPERATION";
            case e.INVALID_FRAMEBUFFER_OPERATION:
                return "INVALID_FRAMEBUFFER_OPERATION";
            case e.OUT_OF_MEMORY:
                return "OUT_OF_MEMORY";
            case e.CONTEXT_LOST_WEBGL:
                return "CONTEXT_LOST_WEBGL";
            default:
                return "Unknown error code ".concat(n)
        }
    }

    function S(e, n) {
        return q(e, (function () {
            return e.getExtension(n)
        }), 'Extension "' + n + '" not supported on this browser.')
    }

    function k(e, n) {
        var t = q(e, (function () {
            return e.createShader(e.VERTEX_SHADER)
        }), "Unable to create vertex WebGLShader.");
        if (y(e, (function () {
            return e.shaderSource(t, n)
        })), y(e, (function () {
            return e.compileShader(t)
        })), !1 === e.getShaderParameter(t, e.COMPILE_STATUS)) throw console.log(e.getShaderInfoLog(t)), new Error("Failed to compile vertex shader.");
        return t
    }

    function R(e, t) {
        var a = q(e, (function () {
            return e.createShader(e.FRAGMENT_SHADER)
        }), "Unable to create fragment WebGLShader.");
        if (y(e, (function () {
            return e.shaderSource(a, t)
        })), y(e, (function () {
            return e.compileShader(a)
        })), n.env().get("ENGINE_COMPILE_ONLY")) return a;
        if (!1 === e.getShaderParameter(a, e.COMPILE_STATUS)) throw A(t, e.getShaderInfoLog(a)), new Error("Failed to compile fragment shader.");
        return a
    }

    var T, N, E = /ERROR: [0-9]+:([0-9]+):/g;

    function A(e, t) {
        var a = E.exec(t);
        if (null == a) return console.log("Couldn't parse line number in error: ".concat(t)), void console.log(e);
        for (var r = +a[1], o = e.split("\n"), i = o.length.toString().length + 2, c = o.map((function (e, t) {
            return n.util.rightPad((t + 1).toString(), i) + e
        })), s = 0, u = 0; u < c.length; u++) s = Math.max(c[u].length, s);
        var l = c.slice(0, r - 1), d = c.slice(r - 1, r), p = c.slice(r);
        console.log(l.join("\n")), console.log(t.split("\n")[0]), console.log("%c ".concat(n.util.rightPad(d[0], s)), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(p.join("\n"))
    }

    function _(e) {
        return q(e, (function () {
            return e.createProgram()
        }), "Unable to create WebGLProgram.")
    }

    function O(e, t) {
        if (y(e, (function () {
            return e.linkProgram(t)
        })), !n.env().get("ENGINE_COMPILE_ONLY") && !1 === e.getProgramParameter(t, e.LINK_STATUS)) throw console.log(e.getProgramInfoLog(t)), new Error("Failed to link vertex and fragment shaders.")
    }

    function F(e, n) {
        if (y(e, (function () {
            return e.validateProgram(n)
        })), !1 === e.getProgramParameter(n, e.VALIDATE_STATUS)) throw console.log(e.getProgramInfoLog(n)), new Error("Shader program validation failed.")
    }

    function D(e, n) {
        var t = q(e, (function () {
            return e.createBuffer()
        }), "Unable to create WebGLBuffer");
        return y(e, (function () {
            return e.bindBuffer(e.ARRAY_BUFFER, t)
        })), y(e, (function () {
            return e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW)
        })), t
    }

    function P(e, n) {
        var t = q(e, (function () {
            return e.createBuffer()
        }), "Unable to create WebGLBuffer");
        return y(e, (function () {
            return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t)
        })), y(e, (function () {
            return e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW)
        })), t
    }

    function L(e) {
        return q(e, (function () {
            return e.createTexture()
        }), "Unable to create WebGLTexture.")
    }

    function B(e, t) {
        var a = n.env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
        if (e <= 0 || t <= 0) {
            var r = "[".concat(e, "x").concat(t, "]");
            throw new Error("Requested texture size " + r + " is invalid.")
        }
        if (e > a || t > a) {
            r = "[".concat(e, "x").concat(t, "]");
            var o = "[".concat(a, "x").concat(a, "]");
            throw new Error("Requested texture size " + r + " greater than WebGL maximum on this browser / GPU " + o + ".")
        }
    }

    function V(e) {
        return q(e, (function () {
            return e.createFramebuffer()
        }), "Unable to create WebGLFramebuffer.")
    }

    function W(e, n, t, a, r, o, i) {
        var c = e.getAttribLocation(n, t);
        return -1 !== c && (y(e, (function () {
            return e.bindBuffer(e.ARRAY_BUFFER, a)
        })), y(e, (function () {
            return e.vertexAttribPointer(c, r, e.FLOAT, !1, o, i)
        })), y(e, (function () {
            return e.enableVertexAttribArray(c)
        })), !0)
    }

    function U(e, n, t) {
        Y(e, t), y(e, (function () {
            return e.activeTexture(e.TEXTURE0 + t)
        })), y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, n)
        }))
    }

    function M(e, n, t) {
        return q(e, (function () {
            return e.getUniformLocation(n, t)
        }), 'uniform "' + t + '" not present in program.')
    }

    function G(e, n, t) {
        return e.getUniformLocation(n, t)
    }

    function z(e, n, t, a) {
        y(e, (function () {
            return U(e, n, a)
        })), y(e, (function () {
            return e.uniform1i(t, a)
        }))
    }

    function X(e, n, t) {
        y(e, (function () {
            return e.bindFramebuffer(e.FRAMEBUFFER, t)
        })), y(e, (function () {
            return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0)
        }))
    }

    function H(e, n) {
        y(e, (function () {
            return e.bindFramebuffer(e.FRAMEBUFFER, n)
        })), y(e, (function () {
            return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0)
        }))
    }

    function j(e) {
        var n = e.checkFramebufferStatus(e.FRAMEBUFFER);
        if (n !== e.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + K(e, n))
    }

    function K(e, n) {
        switch (n) {
            case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
            case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
            case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
            case e.FRAMEBUFFER_UNSUPPORTED:
                return "FRAMEBUFFER_UNSUPPORTED";
            default:
                return "unknown error ".concat(n)
        }
    }

    function q(e, n, t) {
        var a = y(e, (function () {
            return n()
        }));
        if (null == a) throw new Error(t);
        return a
    }

    function Y(e, n) {
        var t = e.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, a = n + e.TEXTURE0;
        if (a < e.TEXTURE0 || a > t) {
            var r = "[gl.TEXTURE0, gl.TEXTURE".concat(t, "]");
            throw new Error("textureUnit must be in ".concat(r, "."))
        }
    }

    function Q(e, t) {
        return void 0 === t && (t = 2), n.util.sizeFromShape(e.slice(0, e.length - t))
    }

    function Z(e) {
        if (0 === e.length) throw Error("Cannot get rows and columns of an empty shape array.");
        return [e.length > 1 ? e[e.length - 2] : 1, e[e.length - 1]]
    }

    function J(e) {
        var n = [1, 1, 1];
        return 0 === e.length || 1 === e.length && 1 === e[0] || (n = u([Q(e)], s(Z(e)), !1)), n
    }

    function $(e, t) {
        var a;
        void 0 === t && (t = !1);
        var r = n.env().getNumber("WEBGL_MAX_TEXTURE_SIZE"), o = n.env().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");
        if (o === 1 / 0 && n.env().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE") && (o = r / 2), t && (r *= 2, o *= 2, 1 === (e = e.map((function (t, a) {
            return a >= e.length - 2 ? n.util.nearestLargerEven(e[a]) : e[a]
        }))).length && (e = [2, e[0]])), 2 !== e.length) {
            var i = n.util.squeezeShape(e);
            e = i.newShape
        }
        var c = n.util.sizeFromShape(e), l = null;
        e.length <= 1 && c <= r ? l = [1, c] : 2 === e.length && e[0] <= r && e[1] <= r ? l = e : 3 === e.length && e[0] * e[1] <= r && e[2] <= r ? l = [e[0] * e[1], e[2]] : 3 === e.length && e[0] <= r && e[1] * e[2] <= r ? l = [e[0], e[1] * e[2]] : 4 === e.length && e[0] * e[1] * e[2] <= r && e[3] <= r ? l = [e[0] * e[1] * e[2], e[3]] : 4 === e.length && e[0] <= r && e[1] * e[2] * e[3] <= r && (l = [e[0], e[1] * e[2] * e[3]]);
        var d = null != l && Math.max.apply(Math, u([], s(l), !1)) > o && Math.min.apply(Math, u([], s(l), !1)) <= (t ? 2 : 1) && Math.min.apply(Math, u([], s(l), !1)) > 0;
        if (null == l || d) if (t) {
            var p = Q(e), h = 2, f = 2;
            e.length && (h = (a = s(Z(e), 2))[0], f = a[1]), c = p * (h / 2) * (f / 2), l = n.util.sizeToSquarishShape(c).map((function (e) {
                return 2 * e
            }))
        } else l = n.util.sizeToSquarishShape(c);
        return l
    }

    function ee(e) {
        return e % 2 == 0
    }

    function ne(e, t) {
        if (e = e.slice(-2), t = t.slice(-2), n.util.arraysEqual(e, t)) return !0;
        if (!e.length || !t.length) return !0;
        if (0 === e[0] || 0 === e[1] || 0 === t[0] || 0 === t[1]) return !0;
        if (e.length !== t.length) {
            var a = e[e.length - 1], r = t[t.length - 1];
            if (a === r) return !0;
            if (ee(a) && ee(r) && (1 === e[0] || 1 === t[0])) return !0
        }
        return e[1] === t[1] && ee(e[0]) && ee(t[0])
    }

    function te(e) {
        if (null == T) {
            var n = v(e);
            T = n.getParameter(n.MAX_TEXTURE_SIZE)
        }
        return T
    }

    function ae(e) {
        if (null == N) {
            var n = v(e);
            N = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)
        }
        return Math.min(16, N)
    }

    function re(e) {
        if (0 === e) return 0;
        var n = v(e);
        return oe(n, "EXT_disjoint_timer_query_webgl2") && 2 === e ? 2 : oe(n, "EXT_disjoint_timer_query") ? 1 : 0
    }

    function oe(e, n) {
        return null != e.getExtension(n)
    }

    function ie(e) {
        try {
            if (null != v(e)) return !0
        } catch (e) {
            return console.log("Error when getting WebGL context: ", e), !1
        }
        return !1
    }

    function ce(e) {
        if (0 === e) return !1;
        var n = v(e);
        if (1 === e) {
            if (!oe(n, "OES_texture_float")) return !1
        } else if (!oe(n, "EXT_color_buffer_float")) return !1;
        return ue(n)
    }

    function se(e) {
        if (0 === e) return !1;
        var n = v(e);
        if (1 !== e) {
            if (oe(n, "EXT_color_buffer_float")) return ue(n);
            var t = "EXT_color_buffer_half_float";
            if (oe(n, t)) {
                var a = n.getExtension(t);
                return function (e, n) {
                    var t = C(e, n), a = e.createTexture();
                    e.bindTexture(e.TEXTURE_2D, a);
                    var r = 1, o = 1;
                    e.texImage2D(e.TEXTURE_2D, 0, t.internalFormatHalfFloat, r, o, 0, t.textureFormatFloat, t.textureTypeHalfFloat, null);
                    var i = e.createFramebuffer();
                    e.bindFramebuffer(e.FRAMEBUFFER, i), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, a, 0);
                    var c = e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE;
                    return e.bindTexture(e.TEXTURE_2D, null), e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteTexture(a), e.deleteFramebuffer(i), c
                }(n, a)
            }
            return !1
        }
        return !!oe(n, "OES_texture_float") && (!!oe(n, "WEBGL_color_buffer_float") && ue(n))
    }

    function ue(e) {
        var n = C(e), t = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, t);
        e.texImage2D(e.TEXTURE_2D, 0, n.internalFormatFloat, 1, 1, 0, n.textureFormatFloat, n.textureTypeFloat, null);
        var a = e.createFramebuffer();
        e.bindFramebuffer(e.FRAMEBUFFER, a), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
        var r = e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE;
        return e.bindTexture(e.TEXTURE_2D, null), e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteTexture(t), e.deleteFramebuffer(a), r
    }

    function le(e) {
        return 2 === e && null != v(e).fenceSync
    }

    function de(e, t) {
        Array.isArray(e) || (e = [e]), e.forEach((function (e) {
            null != e && n.util.assert("complex64" !== e.dtype, (function () {
                return "".concat(t, " does not support complex64 tensors ") + "in the WebGL backend."
            }))
        }))
    }

    var pe = {
        __proto__: null,
        assertNotComplex: de,
        bindCanvasToFramebuffer: function (e) {
            y(e, (function () {
                return e.bindFramebuffer(e.FRAMEBUFFER, null)
            })), y(e, (function () {
                return e.viewport(0, 0, e.canvas.width, e.canvas.height)
            })), y(e, (function () {
                return e.scissor(0, 0, e.canvas.width, e.canvas.height)
            }))
        },
        bindColorTextureToFramebuffer: X,
        bindTextureToProgramUniformSampler: z,
        bindTextureUnit: U,
        bindVertexBufferToProgramAttribute: W,
        callAndCheck: y,
        canBeRepresented: w,
        createFragmentShader: R,
        createFramebuffer: V,
        createProgram: _,
        createStaticIndexBuffer: P,
        createStaticVertexBuffer: D,
        createTexture: L,
        createVertexShader: k,
        getBatchDim: Q,
        getExtensionOrThrow: S,
        getFramebufferErrorMessage: K,
        getMaxTexturesInShader: ae,
        getNumChannels: function () {
            return 2 === n.env().getNumber("WEBGL_VERSION") ? 1 : 4
        },
        getProgramUniformLocation: G,
        getProgramUniformLocationOrThrow: M,
        getRowsCols: Z,
        getShapeAs3D: J,
        getTextureShapeFromLogicalShape: $,
        getWebGLDisjointQueryTimerVersion: re,
        getWebGLErrorMessage: I,
        getWebGLMaxTextureSize: te,
        hasExtension: oe,
        isCapableOfRenderingToFloatTexture: ce,
        isDownloadFloatTextureEnabled: se,
        isReshapeFree: ne,
        isWebGLFenceEnabled: le,
        isWebGLVersionEnabled: ie,
        linkProgram: O,
        logShaderSourceAndInfoLog: A,
        resetMaxTextureSize: function () {
            T = null
        },
        resetMaxTexturesInShader: function () {
            N = null
        },
        unbindColorTextureFromFramebuffer: H,
        unbindTextureUnit: function (e, n) {
            Y(e, n), y(e, (function () {
                return e.activeTexture(e.TEXTURE0 + n)
            })), y(e, (function () {
                return e.bindTexture(e.TEXTURE_2D, null)
            }))
        },
        validateFramebuffer: j,
        validateProgram: F,
        validateTextureSize: B
    }, he = n.env();

    function fe() {
        var e, t, a, r, o, i, c, s, u, l;
        return 2 === n.env().getNumber("WEBGL_VERSION") ? (e = "#version 300 es", t = "in", a = "out", r = "in", o = "texture", i = "outputColor", c = "out vec4 outputColor;", s = n.env().getBool("WEBGL2_ISNAN_CUSTOM") ? "\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    " : "", u = "", l = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (e = "", t = "attribute", a = "varying", r = "varying", o = "texture2D", i = "gl_FragColor", c = "", s = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", u = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", l = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), {
            version: e,
            attribute: t,
            varyingVs: a,
            varyingFs: r,
            texture2D: o,
            output: i,
            defineOutput: c,
            defineSpecialNaN: s,
            defineSpecialInf: u,
            defineRound: l
        }
    }

    function xe(e, t, a) {
        void 0 === a && (a = "index");
        var r = n.util.computeStrides(t);
        return r.map((function (n, t) {
            var o = "int ".concat(e[t], " = ").concat(a, " / ").concat(n),
                i = t === r.length - 1 ? "int ".concat(e[t + 1], " = ").concat(a, " - ").concat(e[t], " * ").concat(n) : "index -= ".concat(e[t], " * ").concat(n);
            return "".concat(o, "; ").concat(i, ";")
        })).join("")
    }

    function ve(e, t, a) {
        void 0 === a && (a = "index");
        var r = n.util.computeStrides(t);
        return r.map((function (n, t) {
            var o = "int ".concat(e[t], " = ").concat(a, " / outShapeStrides[").concat(t, "]"),
                i = t === r.length - 1 ? "int ".concat(e[t + 1], " = ").concat(a, " - ").concat(e[t], " * outShapeStrides[").concat(t, "]") : "index -= ".concat(e[t], " * outShapeStrides[").concat(t, "]");
            return "".concat(o, "; ").concat(i, ";")
        })).join("")
    }

    function ge(e, n, t) {
        void 0 === t && (t = "index");
        var a = function (e, n) {
            var t = e.length, a = e.map((function (e) {
                return "".concat(n, "[").concat(e, "]")
            })), r = new Array(t - 1);
            r[t - 2] = a[t - 1];
            for (var o = t - 3; o >= 0; --o) r[o] = "(".concat(r[o + 1], " * ").concat(a[o + 1], ")");
            return r
        }(e.map((function (e, n) {
            return n
        })), n);
        return a.map((function (n, r) {
            var o = "int ".concat(e[r], " = ").concat(t, " / ").concat(a[r]),
                i = r === a.length - 1 ? "int ".concat(e[r + 1], " = ").concat(t, " - ").concat(e[r], " * ").concat(a[r]) : "index -= ".concat(e[r], " * ").concat(a[r]);
            return "".concat(o, "; ").concat(i, ";")
        })).join("")
    }

    function me(e) {
        var t = n.util.computeStrides(e).map((function (e) {
            return e.toString()
        }));
        return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ".concat(t[0], " + coords.y * ").concat(t[1], " + coords.z;\n  }\n")
    }

    he.registerFlag("HAS_WEBGL", (function () {
        return he.getNumber("WEBGL_VERSION") > 0
    })), he.registerFlag("WEBGL_VERSION", (function () {
        return ie(2) ? 2 : ie(1) ? 1 : 0
    })), he.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS", (function () {
        return !1
    })), he.registerFlag("WEBGL_BUFFER_SUPPORTED", (function () {
        return 2 === he.get("WEBGL_VERSION")
    })), he.registerFlag("WEBGL_CPU_FORWARD", (function () {
        return !0
    })), he.registerFlag("WEBGL_FORCE_F16_TEXTURES", (function () {
        return !1
    })), he.registerFlag("WEBGL_PACK", (function () {
        return he.getBool("HAS_WEBGL")
    })), he.registerFlag("WEBGL_PACK_NORMALIZATION", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_CLIP", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_DEPTHWISECONV", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_REDUCE", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_LAZILY_UNPACK", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_CONV_IM2COL", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE", (function () {
        return he.getBool("WEBGL_PACK")
    })), he.registerFlag("WEBGL_MAX_TEXTURE_SIZE", (function () {
        return te(he.getNumber("WEBGL_VERSION"))
    })), he.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", (function () {
        return ae(he.getNumber("WEBGL_VERSION"))
    })), he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", (function () {
        var e = he.getNumber("WEBGL_VERSION");
        return 0 === e ? 0 : re(e)
    })), he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", (function () {
        return he.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && !n.device_util.isMobile()
    })), he.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", (function () {
        return ce(he.getNumber("WEBGL_VERSION"))
    })), he.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", (function () {
        return !he.getBool("WEBGL_FORCE_F16_TEXTURES") && he.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")
    })), he.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", (function () {
        return se(he.getNumber("WEBGL_VERSION"))
    })), he.registerFlag("WEBGL_FENCE_API_ENABLED", (function () {
        return le(he.getNumber("WEBGL_VERSION"))
    })), he.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", (function () {
        return he.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0
    })), he.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD", (function () {
        return -1
    }), (function (e) {
        if ("number" != typeof e) throw new Error("WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but " + "got ".concat(e, "."));
        if (e < 0 && -1 !== e) throw new Error("WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never " + "delete) or at least 0, but got ".concat(e, "."))
    })), he.registerFlag("WEBGL_FLUSH_THRESHOLD", (function () {
        return n.device_util.isMobile() ? 1 : -1
    }), (function (e) {
        if ("number" != typeof e) throw new Error("WEBGL_FLUSH_THRESHOLD must be a number but got " + "".concat(e, "."));
        if (e < 0 && -1 !== e) throw new Error("WEBGL_FLUSH_THRESHOLD must be -1 (indicating never " + "manual flush) or at least 0, but got ".concat(e, "."))
    })), he.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD", (function () {
        return 128
    })), he.registerFlag("WEBGL_USE_SHAPES_UNIFORMS", (function () {
        return !1
    })), he.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", (function () {
        return 1e5
    })), he.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD", (function () {
        return 128
    })), he.registerFlag("WEBGL_EXP_CONV", (function () {
        return !1
    })), he.registerFlag("SOFTWARE_WEBGL_ENABLED", (function () {
        return he.getBool("IS_TEST")
    })), he.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE", (function () {
        return 1 / 0
    })), he.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE", (function () {
        return !1
    })), he.registerFlag("WEBGL2_ISNAN_CUSTOM", (function () {
        return !1
    })), he.registerFlag("ENGINE_COMPILE_ONLY", (function () {
        return !1
    }));
    var be = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n",
        Ce = n.backend_util.getBroadcastDims;

    function ye(e, t, a) {
        var r = [];
        if (e.forEach((function (e) {
            var t = n.util.sizeFromShape(e.shapeInfo.logicalShape);
            if (e.shapeInfo.isUniform ? r.push("uniform float ".concat(e.name).concat(t > 1 ? "[".concat(t, "]") : "", ";")) : (r.push("uniform sampler2D ".concat(e.name, ";")), r.push("uniform int offset".concat(e.name, ";"))), a.enableShapeUniforms) {
                switch (_e(a.packedInputs, e.shapeInfo.logicalShape, e.shapeInfo.texShape).uniformShape.length) {
                    case 1:
                        r.push("uniform int ".concat(e.name, "Shape;"));
                        break;
                    case 2:
                        r.push("uniform ivec2 ".concat(e.name, "Shape;"));
                        break;
                    case 3:
                        r.push("uniform ivec3 ".concat(e.name, "Shape;"));
                        break;
                    case 4:
                        r.push("uniform ivec4 ".concat(e.name, "Shape;"))
                }
                r.push("uniform ivec2 ".concat(e.name, "TexShape;"))
            }
        })), a.enableShapeUniforms) {
            switch (t.logicalShape.length) {
                case 1:
                    r.push("uniform int outShape;");
                    break;
                case 2:
                    r.push("uniform ivec2 outShape;"), r.push("uniform int outShapeStrides;");
                    break;
                case 3:
                    r.push("uniform ivec3 outShape;"), r.push("uniform ivec2 outShapeStrides;");
                    break;
                case 4:
                    r.push("uniform ivec4 outShape;"), r.push("uniform ivec3 outShapeStrides;")
            }
            r.push("uniform ivec2 outTexShape;")
        }
        a.customUniforms && a.customUniforms.forEach((function (e) {
            r.push("uniform ".concat(e.type, " ").concat(e.name).concat(e.arrayIndex ? "[".concat(e.arrayIndex, "]") : "", ";"))
        }));
        var o, i, c = r.join("\n"), s = e.map((function (e) {
            return function (e, t, a, r) {
                void 0 === a && (a = !1);
                var o = "";
                o += a ? Ie(e, r) : we(e, r);
                var i = e.shapeInfo.logicalShape, c = t.logicalShape;
                i.length <= c.length && (o += a ? function (e, t) {
                    var a, r = e.name, o = r.charAt(0).toUpperCase() + r.slice(1), i = "get" + o + "AtOutCoords",
                        c = e.shapeInfo.logicalShape.length, s = t.logicalShape.length,
                        u = Ce(e.shapeInfo.logicalShape, t.logicalShape), l = Ae(s), d = s - c,
                        p = ["x", "y", "z", "w", "u", "v"];
                    a = 0 === c ? "" : s < 2 && u.length >= 1 ? "coords = 0;" : u.map((function (e) {
                        return "coords.".concat(p[e + d], " = 0;")
                    })).join("\n");
                    var h = "";
                    h = s < 2 && c > 0 ? "coords" : e.shapeInfo.logicalShape.map((function (e, n) {
                        return "coords.".concat(p[n + d])
                    })).join(", ");
                    var f = "return outputValue;", x = 1 === n.util.sizeFromShape(e.shapeInfo.logicalShape),
                        v = 1 === n.util.sizeFromShape(t.logicalShape);
                    if (1 !== c || x || v) {
                        if (x && !v) f = 1 === s ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      "; else if (u.length) {
                            var g = c - 2, m = c - 1;
                            u.indexOf(g) > -1 && u.indexOf(m) > -1 ? f = "return vec4(outputValue.x);" : u.indexOf(g) > -1 ? f = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : u.indexOf(m) > -1 && (f = "return vec4(outputValue.xx, outputValue.zz);")
                        }
                    } else f = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
                    return "\n    vec4 ".concat(i, "() {\n      ").concat(l, " coords = getOutputCoords();\n      ").concat(a, "\n      vec4 outputValue = get").concat(o, "(").concat(h, ");\n      ").concat(f, "\n    }\n  ")
                }(e, t) : function (e, t) {
                    var a = e.name, r = a.charAt(0).toUpperCase() + a.slice(1), o = "get" + r + "AtOutCoords",
                        i = t.texShape, c = e.shapeInfo.texShape, s = e.shapeInfo.logicalShape.length,
                        u = t.logicalShape.length;
                    if (!e.shapeInfo.isUniform && s === u && null == e.shapeInfo.flatOffset && n.util.arraysEqual(c, i)) return "\n      float ".concat(o, "() {\n        return sampleTexture(").concat(a, ", resultUV);\n      }\n    ");
                    var l, d = Ae(u), p = Ce(e.shapeInfo.logicalShape, t.logicalShape), h = u - s,
                        f = ["x", "y", "z", "w", "u", "v"];
                    l = 0 === s ? "" : u < 2 && p.length >= 1 ? "coords = 0;" : p.map((function (e) {
                        return "coords.".concat(f[e + h], " = 0;")
                    })).join("\n");
                    var x = "";
                    x = u < 2 && s > 0 ? "coords" : e.shapeInfo.logicalShape.map((function (e, n) {
                        return "coords.".concat(f[n + h])
                    })).join(", ");
                    return "\n    float ".concat(o, "() {\n      ").concat(d, " coords = getOutputCoords();\n      ").concat(l, "\n      return get").concat(r, "(").concat(x, ");\n    }\n  ")
                }(e, t));
                return o
            }(e, t, a.packedInputs, a.enableShapeUniforms)
        })).join("\n"), u = t.texShape, l = fe(), d = function (e) {
            return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ".concat(e.texture2D, "(textureSampler, uv).r;\n    }\n  ")
        }(l), p = function (e) {
            return "".concat(e.version, "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ").concat(e.varyingFs, " vec2 resultUV;\n    ").concat(e.defineOutput, "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ").concat(e.defineSpecialNaN, "\n    ").concat(e.defineSpecialInf, "\n    ").concat(e.defineRound, "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ").concat(Se, "\n    ").concat(ke, "\n    ").concat(Re, "\n  ")
        }(l);
        return t.isPacked ? (o = function (e, t, a) {
            switch (e.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return function (e, n, t) {
                        var a = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)];
                        if (1 === a[0]) return t ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    " : "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ".concat(a[1], ".0);\n      }\n    ");
                        if (1 === a[1]) return t ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    " : "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ".concat(a[0], ".0);\n      }\n    ");
                        if (t) return "\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";
                        return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(a[0], ", ").concat(a[1], "));\n      return 2 * (resTexRC.x * ").concat(a[1], " + resTexRC.y);\n    }\n  ")
                    }(0, t, a);
                case 2:
                    return function (e, t, a) {
                        var r = [Math.ceil(t[0] / 2), Math.ceil(t[1] / 2)];
                        if (n.util.arraysEqual(e, t)) return a ? "\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(".concat(r[0], ", ").concat(r[1], "));\n      }\n    ");
                        var o = Math.ceil(e[1] / 2);
                        if (a) return "\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(r[0], ", ").concat(r[1], "));\n\n      int index = resTexRC.x * ").concat(r[1], " + resTexRC.y;\n      int r = 2 * (index / ").concat(o, ");\n      int c = imod(index, ").concat(o, ") * 2;\n\n      return ivec2(r, c);\n    }\n  ")
                    }(e, t, a);
                case 3:
                    return function (e, n, t) {
                        if (t) return "\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
                        var a = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)], r = Math.ceil(e[2] / 2),
                            o = r * Math.ceil(e[1] / 2);
                        return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(a[0], ", ").concat(a[1], "));\n      int index = resTexRC.x * ").concat(a[1], " + resTexRC.y;\n\n      int b = index / ").concat(o, ";\n      index -= b * ").concat(o, ";\n\n      int r = 2 * (index / ").concat(r, ");\n      int c = imod(index, ").concat(r, ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ")
                    }(e, t, a);
                default:
                    return function (e, n, t) {
                        if (t) return "\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";
                        for (var a = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)], r = Math.ceil(e[e.length - 1] / 2), o = r * Math.ceil(e[e.length - 2] / 2), i = o, c = "", s = "b, r, c", u = 2; u < e.length - 1; u++) i *= e[e.length - u - 1], c = "\n      int b".concat(u, " = index / ").concat(i, ";\n      index -= b").concat(u, " * ").concat(i, ";\n    ") + c, s = "b".concat(u, ", ") + s;
                        return "\n    ivec".concat(e.length, " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(").concat(a[0], ", ").concat(a[1], "));\n      int index = resTexRC.x * ").concat(a[1], " + resTexRC.y;\n\n      ").concat(c, "\n\n      int b = index / ").concat(o, ";\n      index -= b * ").concat(o, ";\n\n      int r = 2 * (index / ").concat(r, ");\n      int c = imod(index, ").concat(r, ") * 2;\n\n      return ivec").concat(e.length, "(").concat(s, ");\n    }\n  ")
                    }(e, t, a)
            }
        }(t.logicalShape, u, a.enableShapeUniforms), i = function (e) {
            return "\n    void setOutput(vec4 val) {\n      ".concat(e.output, " = val;\n    }\n  ")
        }(l)) : (o = function (e, t, a) {
            switch (e.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return function (e, n, t) {
                        if (1 === n[0]) return t ? "\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    " : "\n      int getOutputCoords() {\n        return int(resultUV.x * ".concat(n[1], ".0);\n      }\n    ");
                        if (1 === n[1]) return t ? "\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    " : "\n      int getOutputCoords() {\n        return int(resultUV.y * ".concat(n[0], ".0);\n      }\n    ");
                        if (t) return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";
                        return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(n[0], ", ").concat(n[1], "));\n      return resTexRC.x * ").concat(n[1], " + resTexRC.y;\n    }\n  ")
                    }(0, t, a);
                case 2:
                    return function (e, t, a) {
                        if (n.util.arraysEqual(e, t)) return a ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(".concat(t[0], ", ").concat(t[1], "));\n      }\n    ");
                        if (1 === e[1]) return a ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(".concat(t[0], ", ").concat(t[1], "));\n        int index = resTexRC.x * ").concat(t[1], " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ");
                        if (1 === e[0]) return a ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(".concat(t[0], ", ").concat(t[1], "));\n        int index = resTexRC.x * ").concat(t[1], " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ");
                        if (a) return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(t[0], ", ").concat(t[1], "));\n      int index = resTexRC.x * ").concat(t[1], " + resTexRC.y;\n      int r = index / ").concat(e[1], ";\n      int c = index - r * ").concat(e[1], ";\n      return ivec2(r, c);\n    }\n  ")
                    }(e, t, a);
                case 3:
                    return function (e, n, t) {
                        if (t) {
                            var a = ve(["r", "c", "d"], e);
                            return "\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ".concat(a, "\n    return ivec3(r, c, d);\n  }\n")
                        }
                        var r = xe(["r", "c", "d"], e);
                        return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(".concat(n[0], ", ").concat(n[1], "));\n      int index = resTexRC.x * ").concat(n[1], " + resTexRC.y;\n      ").concat(r, "\n      return ivec3(r, c, d);\n    }\n  ")
                    }(e, t, a);
                case 4:
                    return function (e, n, t) {
                        if (t) {
                            var a = ve(["r", "c", "d", "d2"], e);
                            return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ".concat(a, "\n      return ivec4(r, c, d, d2);\n    }\n  ")
                        }
                        var r = xe(["r", "c", "d", "d2"], e);
                        return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(".concat(n[0], ", ").concat(n[1], "));\n      int index = resTexRC.x * ").concat(n[1], " + resTexRC.y;\n      ").concat(r, "\n      return ivec4(r, c, d, d2);\n    }\n  ")
                    }(e, t, a);
                case 5:
                    return r = t, o = xe(["r", "c", "d", "d2", "d3"], e), "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(".concat(r[0], ",\n                             ").concat(r[1], "));\n\n      int index = resTexRC.x * ").concat(r[1], " + resTexRC.y;\n\n      ").concat(o, "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ");
                case 6:
                    return function (e, n) {
                        var t = xe(["r", "c", "d", "d2", "d3", "d4"], e);
                        return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(".concat(n[0], ", ").concat(n[1], "));\n      int index = resTexRC.x * ").concat(n[1], " + resTexRC.y;\n\n      ").concat(t, "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ")
                    }(e, t);
                default:
                    throw new Error("".concat(e.length, "-D output sampling is not yet supported"))
            }
            var r, o
        }(t.logicalShape, u, a.enableShapeUniforms), i = function (e) {
            return "\n    void setOutput(float val) {\n      ".concat(e.output, " = vec4(val, 0, 0, 0);\n    }\n  ")
        }(l)), a.packedInputs && (p += Te), [p, d, i, c, o, s, a.userCode].join("\n")
    }

    function we(e, t) {
        void 0 === t && (t = !1);
        var a = e.shapeInfo.logicalShape;
        switch (a.length) {
            case 0:
                return function (e, n) {
                    var t = e.name, a = "get" + t.charAt(0).toUpperCase() + t.slice(1);
                    if (e.shapeInfo.isUniform) return "float ".concat(a, "() {return ").concat(t, ";}");
                    var r = s(e.shapeInfo.texShape, 2), o = r[0], i = r[1];
                    if (1 === o && 1 === i) return "\n      float ".concat(a, "() {\n        return sampleTexture(").concat(t, ", halfCR);\n      }\n    ");
                    var c = Ne(t);
                    if (n) return "\n    float ".concat(a, "() {\n      vec2 uv = uvFromFlat(").concat(t, "TexShape[0], ").concat(t, "TexShape[1], ").concat(c, ");\n      return sampleTexture(").concat(t, ", uv);\n    }\n  ");
                    var u = s(e.shapeInfo.texShape, 2), l = u[0], d = u[1];
                    return "\n    float ".concat(a, "() {\n      vec2 uv = uvFromFlat(").concat(l, ", ").concat(d, ", ").concat(c, ");\n      return sampleTexture(").concat(t, ", uv);\n    }\n  ")
                }(e, t);
            case 1:
                return function (e, n) {
                    var t = e.name, a = "get" + t.charAt(0).toUpperCase() + t.slice(1);
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(a, "(int index) {\n        ").concat(Ee(e), "\n      }\n    ");
                    var r = e.shapeInfo.texShape, o = r[0], i = r[1];
                    if (1 === i && 1 === o) return "\n      float ".concat(a, "(int index) {\n        return sampleTexture(").concat(t, ", halfCR);\n      }\n    ");
                    var c = Ne(t);
                    if (1 === i) return n ? "\n      float ".concat(a, "(int index) {\n        vec2 uv = vec2(0.5, (float(index + ").concat(c, ") + 0.5) / float(").concat(t, "TexShape[0]));\n        return sampleTexture(").concat(t, ", uv);\n      }\n    ") : "\n      float ".concat(a, "(int index) {\n        vec2 uv = vec2(0.5, (float(index + ").concat(c, ") + 0.5) / ").concat(o, ".0);\n        return sampleTexture(").concat(t, ", uv);\n      }\n    ");
                    if (1 === o) return n ? "\n      float ".concat(a, "(int index) {\n        vec2 uv = vec2((float(index + ").concat(c, ") + 0.5) / float(").concat(t, "TexShape[1]), 0.5);\n        return sampleTexture(").concat(t, ", uv);\n      }\n    ") : "\n      float ".concat(a, "(int index) {\n        vec2 uv = vec2((float(index + ").concat(c, ") + 0.5) / ").concat(i, ".0, 0.5);\n        return sampleTexture(").concat(t, ", uv);\n      }\n    ");
                    if (n) return "\n    float ".concat(a, "(int index) {\n      vec2 uv = uvFromFlat(").concat(t, "TexShape[0], ").concat(t, "TexShape[1], index + ").concat(c, ");\n      return sampleTexture(").concat(t, ", uv);\n    }\n  ");
                    return "\n    float ".concat(a, "(int index) {\n      vec2 uv = uvFromFlat(").concat(o, ", ").concat(i, ", index + ").concat(c, ");\n      return sampleTexture(").concat(t, ", uv);\n    }\n  ")
                }(e, t);
            case 2:
                return function (e, t) {
                    var a = e.shapeInfo.logicalShape, r = e.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1),
                        i = e.shapeInfo.texShape;
                    if (null != i && n.util.arraysEqual(a, i)) {
                        if (t) return "\n      float ".concat(o, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ");
                        var c = i[0], s = i[1];
                        return "\n    float ".concat(o, "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(s, ".0, ").concat(c, ".0);\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ")
                    }
                    var u = n.util.squeezeShape(a), l = u.newShape, d = u.keptDims, p = l;
                    if (p.length < a.length) {
                        var h = Oe(e, p), f = ["row", "col"];
                        return "\n      ".concat(we(h, t), "\n      float ").concat(o, "(int row, int col) {\n        return ").concat(o, "(").concat(Fe(f, d), ");\n      }\n    ")
                    }
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(o, "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(").concat(a[1], ", 1)));\n        ").concat(Ee(e), "\n      }\n    ");
                    var x = i[0], v = i[1], g = Ne(r);
                    if (1 === v) return t ? "\n      float ".concat(o, "(int row, int col) {\n        float index = dot(vec3(row, col, ").concat(g, "), vec3(").concat(r, "Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(").concat(r, "TexShape[0]));\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n    float ".concat(o, "(int row, int col) {\n      float index = dot(vec3(row, col, ").concat(g, "), vec3(").concat(a[1], ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ").concat(x, ".0);\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ");
                    if (1 === x) return t ? "\n      float ".concat(o, "(int row, int col) {\n        float index = dot(vec3(row, col, ").concat(g, "), vec3(").concat(r, "Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(").concat(r, "TexShape[1]), 0.5);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n    float ".concat(o, "(int row, int col) {\n      float index = dot(vec3(row, col, ").concat(g, "), vec3(").concat(a[1], ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / ").concat(v, ".0, 0.5);\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ");
                    if (t) return "\n      float ".concat(o, "(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ").concat(r, "Shape[1] + col + ").concat(g, ";\n        vec2 uv = uvFromFlat(").concat(r, "TexShape[0], ").concat(r, "TexShape[1], index);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ");
                    return "\n  float ".concat(o, "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ").concat(a[1], " + col + ").concat(g, ";\n    vec2 uv = uvFromFlat(").concat(x, ", ").concat(v, ", index);\n    return sampleTexture(").concat(r, ", uv);\n  }\n")
                }(e, t);
            case 3:
                return function (e, t) {
                    var a = e.shapeInfo.logicalShape, r = e.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1),
                        i = a[1] * a[2], c = a[2], s = n.util.squeezeShape(a), u = s.newShape, l = s.keptDims, d = u;
                    if (d.length < a.length) {
                        var p = Oe(e, d), h = ["row", "col", "depth"];
                        return "\n        ".concat(we(p, t), "\n        float ").concat(o, "(int row, int col, int depth) {\n          return ").concat(o, "(").concat(Fe(h, l), ");\n        }\n      ")
                    }
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(o, "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(").concat(i, ", ").concat(c, ", 1)));\n        ").concat(Ee(e), "\n      }\n    ");
                    var f = e.shapeInfo.texShape, x = f[0], v = f[1], g = e.shapeInfo.flatOffset;
                    if (v === i && null == g) return t ? "\n      float ".concat(o, "(int row, int col, int depth) {\n        int stride1 = ").concat(r, "Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n        float ".concat(o, "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(").concat(c, ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(").concat(v, ".0, ").concat(x, ".0);\n          return sampleTexture(").concat(r, ", uv);\n        }\n      ");
                    if (v === c && null == g) return t ? "\n      float ".concat(o, "(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(").concat(r, "Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n    float ".concat(o, "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(").concat(a[1], ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(v, ".0, ").concat(x, ".0);\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ");
                    var m = Ne(r);
                    if (t) return "\n    float ".concat(o, "(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ").concat(r, "Shape[1] * ").concat(r, "Shape[2];\n      int stride1 = ").concat(r, "Shape[2];\n      int index = row * stride0 + col * stride1 + depth + ").concat(m, ";\n      vec2 uv = uvFromFlat(").concat(r, "TexShape[0], ").concat(r, "TexShape[1], index);\n      return sampleTexture(").concat(r, ", uv);\n    }\n    ");
                    return "\n      float ".concat(o, "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ").concat(i, " + col * ").concat(c, " + depth + ").concat(m, ";\n        vec2 uv = uvFromFlat(").concat(x, ", ").concat(v, ", index);\n        return sampleTexture(").concat(r, ", uv);\n      }\n  ")
                }(e, t);
            case 4:
                return function (e, t) {
                    var a = e.shapeInfo.logicalShape, r = e.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1),
                        i = a[3], c = a[2] * i, s = a[1] * c, u = n.util.squeezeShape(a), l = u.newShape,
                        d = u.keptDims;
                    if (l.length < a.length) {
                        var p = Oe(e, l), h = ["row", "col", "depth", "depth2"];
                        return "\n      ".concat(we(p, t), "\n      float ").concat(o, "(int row, int col, int depth, int depth2) {\n        return ").concat(o, "(").concat(Fe(h, d), ");\n      }\n    ")
                    }
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(o, "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(").concat(s, ", ").concat(c, ", ").concat(i, ", 1)));\n        ").concat(Ee(e), "\n      }\n    ");
                    var f = e.shapeInfo.flatOffset, x = e.shapeInfo.texShape, v = x[0], g = x[1],
                        m = "int stride2 = ".concat(r, "Shape[3];"),
                        b = "int stride1 = ".concat(r, "Shape[2] * stride2;"),
                        C = "int stride0 = ".concat(r, "Shape[1] * stride1;");
                    if (g === s && null == f) return t ? "\n      float ".concat(o, "(int row, int col, int depth, int depth2) {\n        ").concat(m, "\n        ").concat(b, "\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n      float ".concat(o, "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(").concat(c, ", ").concat(i, ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(g, ".0, ").concat(v, ".0);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ");
                    if (g === i && null == f) return t ? "\n      float ".concat(o, "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(").concat(r, "Shape[1] * ").concat(r, "Shape[2], ").concat(r, "Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ") : "\n      float ".concat(o, "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(").concat(a[1] * a[2], ", ").concat(a[2], ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(g, ".0, ").concat(v, ".0);\n        return sampleTexture(").concat(r, ", uv);\n      }\n    ");
                    var y = Ne(r);
                    if (t) return "\n    float ".concat(o, "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ").concat(m, "\n      ").concat(b, "\n      ").concat(C, "\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(").concat(r, "TexShape[0], ").concat(r, "TexShape[1], index + ").concat(y, ");\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ");
                    return "\n    float ".concat(o, "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(s, " + col * ").concat(c, " +\n          depth * ").concat(i, " + depth2;\n      vec2 uv = uvFromFlat(").concat(v, ", ").concat(g, ", index + ").concat(y, ");\n      return sampleTexture(").concat(r, ", uv);\n    }\n  ")
                }(e, t);
            case 5:
                return function (e) {
                    var t = e.shapeInfo.logicalShape, a = e.name, r = "get" + a.charAt(0).toUpperCase() + a.slice(1),
                        o = t[4], i = t[3] * o, c = t[2] * i, s = t[1] * c, u = n.util.squeezeShape(t), l = u.newShape,
                        d = u.keptDims;
                    if (l.length < t.length) {
                        var p = Oe(e, l), h = ["row", "col", "depth", "depth2", "depth3"];
                        return "\n      ".concat(we(p), "\n      float ").concat(r, "(int row, int col, int depth, int depth2, int depth3) {\n        return ").concat(r, "(").concat(Fe(h, d), ");\n      }\n    ")
                    }
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(r, "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(s, ", ").concat(c, ", ").concat(i, ", ").concat(o, ")) +\n          depth3;\n        ").concat(Ee(e), "\n      }\n    ");
                    var f = e.shapeInfo.flatOffset, x = e.shapeInfo.texShape, v = x[0], g = x[1];
                    if (g === s && null == f) return "\n      float ".concat(r, "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(").concat(c, ", ").concat(i, ", ").concat(o, ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(g, ".0, ").concat(v, ".0);\n        return sampleTexture(").concat(a, ", uv);\n      }\n    ");
                    if (g === o && null == f) return "\n      float ".concat(r, "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(t[1] * t[2] * t[3], ",\n               ").concat(t[2] * t[3], ", ").concat(t[3], ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(g, ".0, ").concat(v, ".0);\n        return sampleTexture(").concat(a, ", uv);\n      }\n    ");
                    var m = Ne(a);
                    return "\n    float ".concat(r, "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(s, " + col * ").concat(c, " + depth * ").concat(i, " +\n          depth2 * ").concat(o, " + depth3 + ").concat(m, ";\n      vec2 uv = uvFromFlat(").concat(v, ", ").concat(g, ", index);\n      return sampleTexture(").concat(a, ", uv);\n    }\n  ")
                }(e);
            case 6:
                return function (e) {
                    var t = e.shapeInfo.logicalShape, a = e.name, r = "get" + a.charAt(0).toUpperCase() + a.slice(1),
                        o = n.util.squeezeShape(t), i = o.newShape, c = o.keptDims;
                    if (i.length < t.length) {
                        var s = Oe(e, i), u = ["row", "col", "depth", "depth2", "depth3", "depth4"];
                        return "\n      ".concat(we(s), "\n      float ").concat(r, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ").concat(r, "(").concat(Fe(u, c), ");\n      }\n    ")
                    }
                    var l = t[5], d = t[4] * l, p = t[3] * d, h = t[2] * p, f = t[1] * h;
                    if (e.shapeInfo.isUniform) return "\n      float ".concat(r, "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(").concat(f, ", ").concat(h, ", ").concat(p, ", ").concat(d, ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(").concat(l, ", 1)));\n        ").concat(Ee(e), "\n      }\n    ");
                    var x = e.shapeInfo.flatOffset, v = e.shapeInfo.texShape, g = v[0], m = v[1];
                    if (m === f && null == x) return "\n      float ".concat(r, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(").concat(h, ", ").concat(p, ", ").concat(d, ", ").concat(l, ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(").concat(m, ".0, ").concat(g, ".0);\n        return sampleTexture(").concat(a, ", uv);\n      }\n    ");
                    if (m === l && null == x) return "\n      float ".concat(r, "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(").concat(t[1] * t[2] * t[3] * t[4], ",\n               ").concat(t[2] * t[3] * t[4], ",\n               ").concat(t[3] * t[4], ",\n               ").concat(t[4], ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(").concat(m, ".0, ").concat(g, ".0);\n        return sampleTexture(").concat(a, ", uv);\n      }\n    ");
                    var b = Ne(a);
                    return "\n    float ".concat(r, "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ").concat(f, " + col * ").concat(h, " + depth * ").concat(p, " +\n          depth2 * ").concat(d, " + depth3 * ").concat(l, " + depth4 + ").concat(b, ";\n      vec2 uv = uvFromFlat(").concat(g, ", ").concat(m, ", index);\n      return sampleTexture(").concat(a, ", uv);\n    }\n  ")
                }(e);
            default:
                throw new Error("".concat(a.length, "-D input sampling") + " is not yet supported")
        }
    }

    function Ie(e, t) {
        var a, r, o;
        switch (e.shapeInfo.logicalShape.length) {
            case 0:
                return a = e.name, r = "get" + a.charAt(0).toUpperCase() + a.slice(1), o = fe(), "\n    vec4 ".concat(r, "() {\n      return ").concat(o.texture2D, "(").concat(a, ", halfCR);\n    }\n  ");
            case 1:
                return function (e, n) {
                    var t = e.name, a = "get" + t.charAt(0).toUpperCase() + t.slice(1), r = e.shapeInfo.texShape,
                        o = fe();
                    if (n) return "\n    vec4 ".concat(a, "(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(t, "TexShape[0]) / 2.0), ceil(float(").concat(t, "TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ").concat(o.texture2D, "(").concat(t, ", uv);\n    }\n  ");
                    var i = [Math.ceil(r[0] / 2), Math.ceil(r[1] / 2)];
                    return "\n    vec4 ".concat(a, "(int index) {\n      vec2 uv = packedUVfrom1D(\n        ").concat(i[0], ", ").concat(i[1], ", index);\n      return ").concat(o.texture2D, "(").concat(t, ", uv);\n    }\n  ")
                }(e, t);
            case 2:
                return function (e, t) {
                    var a = e.shapeInfo.logicalShape, r = e.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1),
                        i = e.shapeInfo.texShape, c = i[0], s = i[1], u = fe();
                    if (null != i && n.util.arraysEqual(a, i)) return t ? "\n      vec4 ".concat(o, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(r, "TexShape[1], ").concat(r, "TexShape[0]);\n\n        return ").concat(u.texture2D, "(").concat(r, ", uv);\n      }\n    ") : "\n      vec4 ".concat(o, "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(").concat(s, ".0, ").concat(c, ".0);\n\n        return ").concat(u.texture2D, "(").concat(r, ", uv);\n      }\n    ");
                    if (t) return "\n    vec4 ".concat(o, "(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(r, "TexShape[0]) / 2.0), ceil(float(").concat(r, "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(").concat(r, "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ").concat(u.texture2D, "(").concat(r, ", uv);\n    }\n  ");
                    var l = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)], d = Math.ceil(a[1] / 2);
                    return "\n    vec4 ".concat(o, "(int row, int col) {\n      vec2 uv = packedUVfrom2D(").concat(d, ", ").concat(l[0], ", ").concat(l[1], ", row, col);\n      return ").concat(u.texture2D, "(").concat(r, ", uv);\n    }\n  ")
                }(e, t);
            case 3:
                return function (e, n) {
                    var t = e.shapeInfo.logicalShape, a = e.name, r = "get" + a.charAt(0).toUpperCase() + a.slice(1),
                        o = e.shapeInfo.texShape, i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
                    if (1 === t[0]) {
                        var c = [1, 2], s = Oe(e, t.slice(1)), u = ["b", "row", "col"];
                        return "\n        ".concat(Ie(s, n), "\n        vec4 ").concat(r, "(int b, int row, int col) {\n          return ").concat(r, "(").concat(Fe(u, c), ");\n        }\n      ")
                    }
                    var l = fe();
                    if (n) return "\n    vec4 ".concat(r, "(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(a, "TexShape[0]) / 2.0), ceil(float(").concat(a, "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(").concat(a, "Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(").concat(a, "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ").concat(l.texture2D, "(").concat(a, ", uv);\n    }\n  ");
                    var d = i[0], p = i[1], h = Math.ceil(t[2] / 2), f = h * Math.ceil(t[1] / 2);
                    return "\n    vec4 ".concat(r, "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ").concat(d, ", ").concat(p, ", ").concat(f, ", ").concat(h, ", b, row, col);\n      return ").concat(l.texture2D, "(").concat(a, ", uv);\n    }\n  ")
                }(e, t);
            default:
                return function (e, n) {
                    var t = e.name, a = "get" + t.charAt(0).toUpperCase() + t.slice(1), r = fe();
                    if (n) return "\n    vec4 ".concat(a, "(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(").concat(t, "Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(").concat(t, "Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ").concat(t, "Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(").concat(t, "TexShape[0]) / 2.0), ceil(float(").concat(t, "TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ").concat(r.texture2D, "(").concat(t, ", uv);\n    }\n  ");
                    for (var o = e.shapeInfo.logicalShape, i = o.length, c = e.shapeInfo.texShape, s = [Math.ceil(c[0] / 2), Math.ceil(c[1] / 2)], u = s[0], l = s[1], d = Math.ceil(o[i - 1] / 2), p = d * Math.ceil(o[i - 2] / 2), h = "int b, int row, int col", f = "b * ".concat(p, " + (row / 2) * ").concat(d, " + (col / 2)"), x = 2; x < i - 1; x++) h = "int b".concat(x, ", ") + h, p *= o[i - x - 1], f = "b".concat(x, " * ").concat(p, " + ") + f;
                    return "\n    vec4 ".concat(a, "(").concat(h, ") {\n      int index = ").concat(f, ";\n      int texR = index / ").concat(l, ";\n      int texC = index - texR * ").concat(l, ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(").concat(l, ", ").concat(u, ");\n      return ").concat(r.texture2D, "(").concat(t, ", uv);\n    }\n  ")
                }(e, t)
        }
    }

    var Se = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        ke = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        Re = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        Te = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";

    function Ne(e) {
        return "offset".concat(e)
    }

    function Ee(e) {
        var t = e.name, a = n.util.sizeFromShape(e.shapeInfo.logicalShape);
        return a < 2 ? "return ".concat(t, ";") : "\n    for (int i = 0; i < ".concat(a, "; i++) {\n      if (i == index) {\n        return ").concat(t, "[i];\n      }\n    }\n  ")
    }

    function Ae(e) {
        if (e <= 1) return "int";
        if (2 === e) return "ivec2";
        if (3 === e) return "ivec3";
        if (4 === e) return "ivec4";
        if (5 === e) return "ivec5";
        if (6 === e) return "ivec6";
        throw Error("GPU for rank ".concat(e, " is not yet supported"))
    }

    function _e(e, t, a) {
        var r = n.util.squeezeShape(t), o = r.newShape, i = r.keptDims, c = t.length, s = e && 3 === c && 1 === t[0],
            u = s ? t.slice(1) : o, l = !e && c > 1 && !n.util.arraysEqual(t, a) && o.length < c || s;
        return {useSqueezeShape: l, uniformShape: l ? u : t, keptDims: i}
    }

    function Oe(e, n) {
        var t = JSON.parse(JSON.stringify(e));
        return t.shapeInfo.logicalShape = n, t
    }

    function Fe(e, n) {
        return n.map((function (n) {
            return e[n]
        })).join(", ")
    }

    function De(e, t, a) {
        var r, o, i, s, u, l, d, p, h = [], f = [], x = null;
        p = e.getUniformLocation(a, "NAN", !1), 1 === n.env().getNumber("WEBGL_VERSION") && (x = e.getUniformLocation(a, "INFINITY", !1));
        var v = !1;
        try {
            for (var g = c(t.variableNames), m = g.next(); !m.done; m = g.next()) {
                var b = m.value, C = {
                    name: b,
                    uniform: e.getUniformLocation(a, b, v),
                    offset: e.getUniformLocation(a, "offset".concat(b), v)
                };
                t.enableShapeUniforms && (C.shape = e.getUniformLocation(a, "".concat(b, "Shape"), v), C.texShape = e.getUniformLocation(a, "".concat(b, "TexShape"), v)), h.push(C)
            }
        } catch (e) {
            r = {error: e}
        } finally {
            try {
                m && !m.done && (o = g.return) && o.call(g)
            } finally {
                if (r) throw r.error
            }
        }
        if (t.enableShapeUniforms && (u = e.getUniformLocation(a, "outShape", v), d = e.getUniformLocation(a, "outShapeStrides", v), l = e.getUniformLocation(a, "outTexShape", v)), t.customUniforms) try {
            for (var y = c(t.customUniforms), w = y.next(); !w.done; w = y.next()) {
                var I = w.value;
                f.push(e.getUniformLocation(a, I.name, v))
            }
        } catch (e) {
            i = {error: e}
        } finally {
            try {
                w && !w.done && (s = y.return) && s.call(y)
            } finally {
                if (i) throw i.error
            }
        }
        return {
            variablesLocations: h,
            customUniformLocations: f,
            infLoc: x,
            nanLoc: p,
            outShapeLocation: u,
            outShapeStridesLocation: d,
            outTexShapeLocation: l
        }
    }

    function Pe(e, t) {
        if (e.length !== t.length) throw Error("Binary was compiled with ".concat(e.length, " inputs, but ") + "was executed with ".concat(t.length, " inputs"));
        e.forEach((function (e, a) {
            var r = e.logicalShape, o = t[a], i = o.shape;
            if (!n.util.arraysEqual(r, i)) throw Error("Binary was compiled with different shapes than " + "the current args. Shapes ".concat(r, " and ").concat(i, " must match"));
            if (!e.isUniform || !o.isUniform) {
                var c = e.texShape, s = o.isUniform ? null : o.texData.texShape;
                if (!n.util.arraysEqual(c, s)) throw Error("Binary was compiled with different texture shapes than the" + " current args. Shape ".concat(c, " and ").concat(s, " must match"))
            }
        }))
    }

    function Le(e) {
        return n.env().getBool("WEBGL_USE_SHAPES_UNIFORMS") && e <= 4
    }

    var Be = function (e) {
        this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.outPackingScheme = l.DENSE, this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var n = fe();
        this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length), this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ".concat(this.enableShapeUniforms ? ve(["r", "c", "d"], e) : xe(["r", "c", "d"], e), "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ").concat(n.output, " = result;\n      }\n    ")
    }, Ve = function (e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outPackingScheme = l.DENSE, this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var n = fe();
        this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length), this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ".concat(this.enableShapeUniforms ? ve(["r", "c", "d"], e) : xe(["r", "c", "d"], e), "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ").concat(n.output, " = result;\n      }\n    ")
    }, We = function (e) {
        this.variableNames = ["A"], this.outTexUsage = d.DOWNLOAD;
        var n = fe();
        this.outputShape = e, this.userCode = "\n      ".concat(be, "\n\n      void main() {\n        float x = getAAtOutCoords();\n        ").concat(n.output, " = encode_float(x);\n      }\n    ")
    }, Ue = function (e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1, this.outTexUsage = d.DOWNLOAD;
        var n = fe();
        this.outputShape = e, this.userCode = "\n      ".concat(be, "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ").concat(n.output, " = encode_float(x);\n      }\n    ")
    }, Me = {R: 0, G: 1, B: 2, A: 3}, Ge = function (e, n, t) {
        void 0 === n && (n = !1), void 0 === t && (t = "RGBA"), this.variableNames = ["A"], this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var a = fe();
        this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length);
        var r = "result";
        n && (r = "floor(result * 255. + 0.5)");
        for (var o = "", i = 0; i < t.length; i++) {
            var c = t[i];
            o += "\n          if(offset == ".concat(i, ") {\n            result = values[").concat(Me[c], "];\n          }")
        }
        this.userCode = "\n      ".concat(this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e), "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int flatIndex = getFlatIndex(coords);\n        float result = 0.;\n        int offset = imod(flatIndex, ").concat(t.length, ");\n\n        flatIndex = idiv(flatIndex, ").concat(t.length, ", 1.);\n\n        int r = flatIndex / texShape[1];\n        if (r < texShape[0]) {\n          int c = imod(flatIndex, texShape[1]);\n          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n          vec4 values = ").concat(a.texture2D, "(A, uv);\n          ").concat(o, "\n        }\n        ").concat(a.output, " = vec4(").concat(r, ", 0., 0., 0.);\n      }\n    ")
    }, ze = function (e, n) {
        void 0 === n && (n = !1), this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var t = fe();
        this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length);
        var a = "", r = "result";
        n && (r = "floor(result * 255. + 0.5)");
        for (var o = 0; o <= 1; o++) for (var i = 0; i <= 1; i++) {
            var c = 2 * o + i;
            a += "\n          localCoords = coords;\n          if(localCoords[2] + ".concat(i, " < ").concat(this.enableShapeUniforms ? "outShape[2]" : "".concat(e[2]), ") {\n          localCoords[2] += ").concat(i, ";\n          if (localCoords[1] + ").concat(o, " < ").concat(this.enableShapeUniforms ? "outShape[1]" : "".concat(e[1]), ") {\n            localCoords[1] += ").concat(o, ";\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ").concat(t.texture2D, "(A, uv);\n\n            if (offset == 0) {\n              result[").concat(c, "] = values[0];\n            } else if (offset == 1) {\n              result[").concat(c, "] = values[1];\n            } else if (offset == 2) {\n              result[").concat(c, "] = values[2];\n            } else {\n              result[").concat(c, "] = values[3];\n            }\n          }\n        }\n        ")
        }
        this.userCode = "\n        ".concat(this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e), "\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ").concat(a, "\n\n          ").concat(t.output, " = ").concat(r, ";\n        }\n    ")
    };

    function Xe(e) {
        var n = fe();
        return k(e, "".concat(n.version, "\n    precision highp float;\n    ").concat(n.attribute, " vec3 clipSpacePos;\n    ").concat(n.attribute, " vec2 uv;\n    ").concat(n.varyingVs, " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }"))
    }

    function He(e) {
        return D(e, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]))
    }

    function je(e) {
        return P(e, new Uint16Array([0, 1, 2, 2, 1, 3]))
    }

    function Ke(e, t, a, r, o, i) {
        B(t, a);
        var c = L(e), s = e.TEXTURE_2D;
        return y(e, (function () {
            return e.bindTexture(s, c)
        })), y(e, (function () {
            return e.texParameteri(s, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE)
        })), y(e, (function () {
            return e.texParameteri(s, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
        })), y(e, (function () {
            return e.texParameteri(s, e.TEXTURE_MIN_FILTER, e.NEAREST)
        })), y(e, (function () {
            return e.texParameteri(s, e.TEXTURE_MAG_FILTER, e.NEAREST)
        })), 1 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function () {
            return e.texImage2D(s, 0, r, t, a, 0, o, i, null)
        })) : y(e, (function () {
            return e.texStorage2D(s, 1, r, t, a)
        })), y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, null)
        })), {texture: c, texShape: [a, t]}
    }

    function qe(e) {
        return e.internalFormatFloat
    }

    function Ye(e, n, t, a) {
        var r = s(g(n, t), 2);
        return Ke(e, r[0], r[1], qe(a), a.textureFormatFloat, e.FLOAT)
    }

    function Qe(e) {
        return e.internalFormatHalfFloat
    }

    function Ze(e, n, t, a) {
        var r = s(g(n, t), 2);
        return Ke(e, r[0], r[1], Qe(a), a.textureFormatFloat, a.textureTypeHalfFloat)
    }

    function Je(e) {
        return e.downloadTextureFormat
    }

    function $e(e, n, t, a) {
        var r = s(g(n, t), 2);
        return Ke(e, r[0], r[1], Je(a), e.RGBA, e.UNSIGNED_BYTE)
    }

    function en(e) {
        return e.internalFormatPackedFloat
    }

    function nn(e, n, t, a) {
        var r = s(b(n, t), 2);
        return Ke(e, r[0], r[1], en(a), e.RGBA, e.FLOAT)
    }

    function tn(e) {
        return e.internalFormatPackedHalfFloat
    }

    function an(e, n, t, a) {
        var r = s(b(n, t), 2);
        return Ke(e, r[0], r[1], tn(a), e.RGBA, a.textureTypeHalfFloat)
    }

    function rn(e, n, t) {
        return y(e, (function () {
            return e.bindBuffer(e.ARRAY_BUFFER, t)
        })), W(e, n, "clipSpacePos", t, 3, 20, 0) && W(e, n, "uv", t, 2, 20, 12)
    }

    function on(e, t, a, r, o, i) {
        var c, s, u;
        y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, t)
        })), o instanceof Uint8Array ? (c = new Uint8Array(a * r * 4), s = e.UNSIGNED_BYTE, u = e.RGBA) : (c = new Float32Array(a * r * 4), s = e.FLOAT, u = i.internalFormatPackedFloat), c.set(o), 2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function () {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, a, r, e.RGBA, s, c)
        })) : y(e, (function () {
            return e.texImage2D(e.TEXTURE_2D, 0, u, a, r, 0, e.RGBA, s, c)
        })), y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, null)
        }))
    }

    function cn(e, t, a) {
        y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, t)
        })), a.data instanceof Uint8Array ? 2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function () {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, a.width, a.height, e.RGBA, e.UNSIGNED_BYTE, a.data)
        })) : y(e, (function () {
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, a.width, a.height, 0, e.RGBA, e.UNSIGNED_BYTE, a.data)
        })) : 2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function () {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, a)
        })) : y(e, (function () {
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, a)
        })), y(e, (function () {
            return e.bindTexture(e.TEXTURE_2D, null)
        }))
    }

    function sn(e, n, t, a) {
        var r = e.createBuffer();
        y(e, (function () {
            return e.bindBuffer(e.PIXEL_PACK_BUFFER, r)
        }));
        var o = 16 * n * t;
        return y(e, (function () {
            return e.bufferData(e.PIXEL_PACK_BUFFER, o, e.STREAM_READ)
        })), y(e, (function () {
            return e.readPixels(0, 0, t, n, e.RGBA, e.FLOAT, 0)
        })), y(e, (function () {
            return e.bindBuffer(e.PIXEL_PACK_BUFFER, null)
        })), r
    }

    function un(e, n, t) {
        var a = e, r = new Float32Array(t);
        return a.bindBuffer(a.PIXEL_PACK_BUFFER, n), a.getBufferSubData(a.PIXEL_PACK_BUFFER, 0, r), a.bindBuffer(a.PIXEL_PACK_BUFFER, null), r
    }

    function ln(e, n, t, a) {
        var r = s(g(n, t), 2), o = r[0], i = r[1], c = new Uint8Array(n * t * 4);
        return y(e, (function () {
            return e.readPixels(0, 0, o, i, a.downloadTextureFormat, e.UNSIGNED_BYTE, c)
        })), new Float32Array(c.buffer)
    }

    function dn(e, n, t, a, r, o, i, c) {
        var u = e, l = new Float32Array(function (e, n) {
            var t = s(b(e, n), 2);
            return t[0] * t[1] * 4
        }(o, i));
        return u.bindBuffer(u.PIXEL_PACK_BUFFER, n), u.getBufferSubData(u.PIXEL_PACK_BUFFER, 0, l), u.bindBuffer(u.PIXEL_PACK_BUFFER, null), l
    }

    function pn(e, n, t) {
        var a = new Float32Array(n * t * 4);
        return y(e, (function () {
            return e.readPixels(0, 0, t, n, e.RGBA, e.FLOAT, a)
        })), a
    }

    var hn = {
        __proto__: null,
        bindVertexProgramAttributeStreams: rn,
        createBufferFromOutputTexture: sn,
        createFloat16MatrixTexture: Ze,
        createFloat16PackedMatrixTexture: an,
        createFloat32MatrixTexture: Ye,
        createIndexBuffer: je,
        createPackedMatrixTexture: nn,
        createUnsignedBytesMatrixTexture: $e,
        createVertexBuffer: He,
        createVertexShader: Xe,
        downloadByteEncodedFloatMatrixFromOutputTexture: ln,
        downloadFloat32MatrixFromBuffer: un,
        downloadMatrixFromPackedOutputTexture: pn,
        downloadPackedMatrixFromBuffer: dn,
        getInternalFormatForFloat16MatrixTexture: Qe,
        getInternalFormatForFloat16PackedMatrixTexture: tn,
        getInternalFormatForFloat32MatrixTexture: qe,
        getInternalFormatForPackedMatrixTexture: en,
        getInternalFormatForUnsignedBytesMatrixTexture: Je,
        uploadDenseMatrixToTexture: on,
        uploadPixelDataToTexture: cn
    }, fn = function () {
        function e(e) {
            this.outputTexture = null, this.program = null, this.disposed = !1, this.itemsToPoll = [];
            var t = n.env().getNumber("WEBGL_VERSION");
            if (null != e ? (this.gl = e, x(t, e)) : this.gl = v(t), e = this.gl, 2 === n.env().getNumber("WEBGL_VERSION")) {
                var a = e;
                this.createVertexArray = function () {
                    return y(a, (function () {
                        return a.createVertexArray()
                    }))
                }, this.bindVertexArray = function (e) {
                    return y(a, (function () {
                        return a.bindVertexArray(e)
                    }))
                }, this.deleteVertexArray = function (e) {
                    return y(a, (function () {
                        return a.deleteVertexArray(e)
                    }))
                }, this.getVertexArray = function () {
                    return y(a, (function () {
                        return a.getParameter(a.VERTEX_ARRAY_BINDING)
                    }))
                }
            } else if (null != e) {
                var r = e.getExtension("OES_vertex_array_object");
                if (null == r) throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");
                this.createVertexArray = function () {
                    return y(e, (function () {
                        return r.createVertexArrayOES()
                    }))
                }, this.bindVertexArray = function (n) {
                    return y(e, (function () {
                        return r.bindVertexArrayOES(n)
                    }))
                }, this.deleteVertexArray = function (n) {
                    return y(e, (function () {
                        return r.deleteVertexArrayOES(n)
                    }))
                }, this.getVertexArray = function () {
                    return y(e, (function () {
                        return e.getParameter(r.VERTEX_ARRAY_BINDING_OES)
                    }))
                }
            }
            var o = "WEBGL_color_buffer_float", i = "EXT_color_buffer_half_float";
            if (this.parallelCompilationExtension = this.gl.getExtension("KHR_parallel_shader_compile"), 1 === n.env().getNumber("WEBGL_VERSION")) {
                var c = "OES_texture_half_float";
                if (this.textureFloatExtension = S(this.gl, "OES_texture_float"), oe(this.gl, c)) this.textureHalfFloatExtension = S(this.gl, c); else if (n.env().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
                if (this.colorBufferFloatExtension = this.gl.getExtension(o), oe(this.gl, i)) this.colorBufferHalfFloatExtension = S(this.gl, i); else if (n.env().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")
            } else if (o = "EXT_color_buffer_float", oe(this.gl, o)) this.colorBufferFloatExtension = this.gl.getExtension(o); else {
                if (!oe(this.gl, i)) throw new Error("GL context does not support color renderable floats");
                this.colorBufferHalfFloatExtension = this.gl.getExtension(i)
            }
            this.vertexBuffer = He(this.gl), this.indexBuffer = je(this.gl), this.framebuffer = V(this.gl), this.textureConfig = C(this.gl, this.textureHalfFloatExtension)
        }

        return Object.defineProperty(e.prototype, "debug", {
            get: function () {
                return n.env().getBool("DEBUG")
            }, enumerable: !1, configurable: !0
        }), e.prototype.dispose = function () {
            var e = this;
            if (!this.disposed) {
                null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
                var n = this.gl;
                y(n, (function () {
                    return n.finish()
                })), y(n, (function () {
                    return n.bindFramebuffer(n.FRAMEBUFFER, null)
                })), y(n, (function () {
                    return n.deleteFramebuffer(e.framebuffer)
                })), y(n, (function () {
                    return n.bindBuffer(n.ARRAY_BUFFER, null)
                })), y(n, (function () {
                    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null)
                })), y(n, (function () {
                    return n.deleteBuffer(e.indexBuffer)
                })), this.disposed = !0
            }
        }, e.prototype.createFloat32MatrixTexture = function (e, n) {
            return this.throwIfDisposed(), Ye(this.gl, e, n, this.textureConfig)
        }, e.prototype.createFloat16MatrixTexture = function (e, n) {
            return this.throwIfDisposed(), Ze(this.gl, e, n, this.textureConfig)
        }, e.prototype.createUnsignedBytesMatrixTexture = function (e, n) {
            return this.throwIfDisposed(), $e(this.gl, e, n, this.textureConfig)
        }, e.prototype.uploadPixelDataToTexture = function (e, n) {
            this.throwIfDisposed(), cn(this.gl, e, n)
        }, e.prototype.uploadDenseMatrixToTexture = function (e, n, t, a) {
            this.throwIfDisposed(), on(this.gl, e, n, t, a, this.textureConfig)
        }, e.prototype.createFloat16PackedMatrixTexture = function (e, n) {
            return this.throwIfDisposed(), an(this.gl, e, n, this.textureConfig)
        }, e.prototype.createPackedMatrixTexture = function (e, n) {
            return this.throwIfDisposed(), nn(this.gl, e, n, this.textureConfig)
        }, e.prototype.deleteMatrixTexture = function (e) {
            var n = this;
            this.throwIfDisposed(), this.outputTexture === e && (H(this.gl, this.framebuffer), this.outputTexture = null), y(this.gl, (function () {
                return n.gl.deleteTexture(e)
            }))
        }, e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (e, n, t) {
            var a = this;
            return this.downloadMatrixDriver(e, (function () {
                return ln(a.gl, n, t, a.textureConfig)
            }))
        }, e.prototype.downloadPackedMatrixFromBuffer = function (e, n, t, a, r, o) {
            return dn(this.gl, e, 0, 0, 0, r, o, this.textureConfig)
        }, e.prototype.downloadFloat32MatrixFromBuffer = function (e, n) {
            return un(this.gl, e, n)
        }, e.prototype.createBufferFromTexture = function (e, n, t) {
            this.bindTextureToFrameBuffer(e);
            var a = sn(this.gl, n, t, this.textureConfig);
            return this.unbindTextureToFrameBuffer(), a
        }, e.prototype.createAndWaitForFence = function () {
            var e = this.createFence(this.gl);
            return this.pollFence(e)
        }, e.prototype.createFence = function (e) {
            var t, a, r = this;
            if (n.env().getBool("WEBGL_FENCE_API_ENABLED")) {
                var o = e, i = o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE, 0);
                e.flush(), a = function () {
                    var e = o.clientWaitSync(i, 0, 0);
                    return e === o.ALREADY_SIGNALED || e === o.CONDITION_SATISFIED
                }, t = i
            } else n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (t = this.beginQuery(), this.endQuery(), a = function () {
                return r.isQueryAvailable(t, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
            }) : a = function () {
                return !0
            };
            return {query: t, isFencePassed: a}
        }, e.prototype.downloadMatrixFromPackedTexture = function (e, n, t) {
            var a = this;
            return this.downloadMatrixDriver(e, (function () {
                return pn(a.gl, n, t)
            }))
        }, e.prototype.createProgram = function (e) {
            var n = this;
            this.throwIfDisposed();
            var t = this.gl;
            null == this.vertexShader && (this.vertexShader = Xe(t));
            var a = _(t);
            y(t, (function () {
                return t.attachShader(a, n.vertexShader)
            })), y(t, (function () {
                return t.attachShader(a, e)
            })), O(t, a);
            var r = Object.assign(a, {vao: this.createVertexArray()});
            return this.debug && F(t, r), r
        }, e.prototype.buildVao = function (e) {
            var n = this;
            this.setProgram(e), this.bindVertexArray(e.vao);
            var t = this.gl;
            y(t, (function () {
                return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.indexBuffer)
            })), rn(t, e, this.vertexBuffer)
        }, e.prototype.deleteProgram = function (e) {
            var n = this;
            this.throwIfDisposed(), e === this.program && (this.program = null), null != e && (y(this.gl, (function () {
                return n.gl.deleteProgram(e)
            })), this.deleteVertexArray(e.vao))
        }, e.prototype.setProgram = function (e) {
            var n = this;
            this.throwIfDisposed(), this.program = e, null != this.program && this.debug && F(this.gl, this.program), y(this.gl, (function () {
                return n.gl.useProgram(e)
            }))
        }, e.prototype.getUniformLocation = function (e, n, t) {
            return void 0 === t && (t = !0), this.throwIfDisposed(), t ? M(this.gl, e, n) : G(this.gl, e, n)
        }, e.prototype.getAttributeLocation = function (e, n) {
            var t = this;
            return this.throwIfDisposed(), y(this.gl, (function () {
                return t.gl.getAttribLocation(e, n)
            }))
        }, e.prototype.getUniformLocationNoThrow = function (e, n) {
            return this.throwIfDisposed(), this.gl.getUniformLocation(e, n)
        }, e.prototype.setInputMatrixTexture = function (e, n, t) {
            this.throwIfDisposed(), this.throwIfNoProgram(), z(this.gl, e, n, t)
        }, e.prototype.setOutputMatrixTexture = function (e, n, t) {
            this.setOutputMatrixTextureDriver(e, t, n)
        }, e.prototype.setOutputPackedMatrixTexture = function (e, n, t) {
            this.throwIfDisposed();
            var a = s(b(n, t), 2), r = a[0], o = a[1];
            this.setOutputMatrixTextureDriver(e, r, o)
        }, e.prototype.setOutputMatrixWriteRegion = function (e, n, t, a) {
            this.setOutputMatrixWriteRegionDriver(t, e, a, n)
        }, e.prototype.setOutputPackedMatrixWriteRegion = function (e, n, t, a) {
            throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
        }, e.prototype.debugValidate = function () {
            null != this.program && F(this.gl, this.program), j(this.gl)
        }, e.prototype.executeProgram = function () {
            this.throwIfDisposed(), this.throwIfNoProgram();
            var e = this.gl;
            if (this.debug) {
                var n = this.getVertexArray();
                console.assert(n === this.program.vao, "VAO changed between setProgram and executeProgram!"), this.debugValidate()
            }
            y(e, (function () {
                return e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
            }))
        }, e.prototype.blockUntilAllProgramsCompleted = function () {
            var e = this;
            this.throwIfDisposed(), y(this.gl, (function () {
                return e.gl.finish()
            }))
        }, e.prototype.getQueryTimerExtension = function () {
            return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = S(this.gl, 2 === n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension
        }, e.prototype.getQueryTimerExtensionWebGL2 = function () {
            return this.getQueryTimerExtension()
        }, e.prototype.getQueryTimerExtensionWebGL1 = function () {
            return this.getQueryTimerExtension()
        }, e.prototype.beginQuery = function () {
            if (2 === n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                var e = this.gl, t = this.getQueryTimerExtensionWebGL2(), a = e.createQuery();
                return e.beginQuery(t.TIME_ELAPSED_EXT, a), a
            }
            var r = this.getQueryTimerExtensionWebGL1(), o = r.createQueryEXT();
            return r.beginQueryEXT(r.TIME_ELAPSED_EXT, o), o
        }, e.prototype.endQuery = function () {
            if (2 !== n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                var e = this.getQueryTimerExtensionWebGL1();
                e.endQueryEXT(e.TIME_ELAPSED_EXT)
            } else {
                var t = this.gl, a = this.getQueryTimerExtensionWebGL2();
                t.endQuery(a.TIME_ELAPSED_EXT)
            }
        }, e.prototype.waitForQueryAndGetTime = function (e) {
            return o(this, void 0, void 0, (function () {
                var t = this;
                return i(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            return [4, n.util.repeatedTry((function () {
                                return t.disposed || t.isQueryAvailable(e, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                            }))];
                        case 1:
                            return a.sent(), [2, this.getQueryTime(e, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]
                    }
                }))
            }))
        }, e.prototype.getQueryTime = function (e, n) {
            if (0 === n) return null;
            if (2 === n) {
                var t = this.gl;
                return t.getQueryParameter(e, t.QUERY_RESULT) / 1e6
            }
            var a = this.getQueryTimerExtensionWebGL1();
            return a.getQueryObjectEXT(e, a.QUERY_RESULT_EXT) / 1e6
        }, e.prototype.isQueryAvailable = function (e, n) {
            if (0 === n) return !0;
            if (2 === n) {
                var t = this.gl, a = this.getQueryTimerExtensionWebGL2(),
                    r = t.getQueryParameter(e, t.QUERY_RESULT_AVAILABLE);
                return null == this.disjoint && (this.disjoint = this.gl.getParameter(a.GPU_DISJOINT_EXT)), r && !this.disjoint
            }
            r = (a = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e, a.QUERY_RESULT_AVAILABLE_EXT);
            return null == this.disjoint && (this.disjoint = this.gl.getParameter(a.GPU_DISJOINT_EXT)), r && !this.disjoint
        }, e.prototype.pollFence = function (e) {
            var n = this;
            return new Promise((function (t) {
                n.addItemToPoll((function () {
                    return e.isFencePassed()
                }), (function () {
                    return t()
                }))
            }))
        }, e.prototype.pollItems = function () {
            for (var e = function (e) {
                for (var n = 0; n < e.length; ++n) {
                    if (!e[n]()) break
                }
                return n - 1
            }(this.itemsToPoll.map((function (e) {
                return e.isDoneFn
            }))), n = 0; n <= e; ++n) {
                (0, this.itemsToPoll[n].resolveFn)()
            }
            this.itemsToPoll = this.itemsToPoll.slice(e + 1)
        }, e.prototype.addItemToPoll = function (e, t) {
            var a = this;
            if (this.itemsToPoll.push({isDoneFn: e, resolveFn: t}), !(this.itemsToPoll.length > 1)) {
                var r = void 0;
                "setTimeoutCustom" in n.env().platform && (r = n.env().platform.setTimeoutCustom.bind(n.env().platform)), n.util.repeatedTry((function () {
                    return a.pollItems(), 0 === a.itemsToPoll.length
                }), (function () {
                    return 0
                }), null, r)
            }
        }, e.prototype.bindTextureToFrameBuffer = function (e) {
            this.throwIfDisposed(), X(this.gl, e, this.framebuffer), this.debug && j(this.gl)
        }, e.prototype.unbindTextureToFrameBuffer = function () {
            null != this.outputTexture ? (X(this.gl, this.outputTexture, this.framebuffer), this.debug && j(this.gl)) : H(this.gl, this.framebuffer)
        }, e.prototype.downloadMatrixDriver = function (e, n) {
            this.bindTextureToFrameBuffer(e);
            var t = n();
            return this.unbindTextureToFrameBuffer(), t
        }, e.prototype.setOutputMatrixTextureDriver = function (e, n, t) {
            this.throwIfDisposed();
            var a = this.gl;
            X(a, e, this.framebuffer), this.debug && j(a), this.outputTexture = e, y(a, (function () {
                return a.viewport(0, 0, n, t)
            })), y(a, (function () {
                return a.scissor(0, 0, n, t)
            }))
        }, e.prototype.setOutputMatrixWriteRegionDriver = function (e, n, t, a) {
            var r = this;
            this.throwIfDisposed(), y(this.gl, (function () {
                return r.gl.scissor(e, n, t, a)
            }))
        }, e.prototype.throwIfDisposed = function () {
            if (this.disposed) throw new Error("Attempted to use disposed GPGPUContext.")
        }, e.prototype.throwIfNoProgram = function () {
            if (null == this.program) throw new Error("No GPU program is currently set.")
        }, e
    }();

    function xn(e) {
        return function (t, a, r, o, i) {
            var c = n.backend_util.assertAndGetBroadcastShape(t, a), s = c.length, u = n.util.computeStrides(c),
                l = n.util.sizeFromShape(c), d = n.util.getTypedArrayFromDType(i, l), p = t.length, h = a.length,
                f = n.util.computeStrides(t), x = n.util.computeStrides(a), v = n.backend_util.getBroadcastDims(t, c),
                g = n.backend_util.getBroadcastDims(a, c);
            if (v.length + g.length === 0) for (var m = 0; m < d.length; ++m) d[m] = e(r[m % r.length], o[m % o.length]); else {
                var b = function (t) {
                    var a = n.util.indexToLoc(t, s, u), i = a.slice(-p);
                    v.forEach((function (e) {
                        return i[e] = 0
                    }));
                    var c = n.util.locToIndex(i, p, f), l = a.slice(-h);
                    g.forEach((function (e) {
                        return l[e] = 0
                    }));
                    var m = n.util.locToIndex(l, h, x);
                    d[t] = e(r[c], o[m])
                };
                for (m = 0; m < d.length; ++m) b(m)
            }
            return [d, c]
        }
    }

    var vn = xn((function (e, n) {
        return e + n
    }));
    var gn = xn((function (e, n) {
        return e & n
    }));

    function mn(e) {
        return function (t, a, r) {
            for (var o = n.util.getArrayFromDType(a, t.length), i = 0; i < t.length; ++i) o[i] = e(t[i], r);
            return o
        }
    }

    var bn = mn((function (e) {
        return Math.ceil(e)
    }));
    var Cn = xn((function (e, n) {
        return e === n ? 1 : 0
    })), yn = mn((function (e) {
        return Math.exp(e)
    })), wn = mn((function (e) {
        return Math.expm1(e)
    })), In = mn((function (e) {
        return Math.floor(e)
    }));
    var Sn = xn((function (e, n) {
        return e > n ? 1 : 0
    })), kn = xn((function (e, n) {
        return e >= n ? 1 : 0
    })), Rn = xn((function (e, n) {
        return e < n ? 1 : 0
    })), Tn = xn((function (e, n) {
        return e <= n ? 1 : 0
    }));
    var Nn = mn((function (e) {
        return Math.log(e)
    }));
    var En = xn((function (e, n) {
        return Math.max(e, n)
    })), An = xn((function (e, n) {
        return Math.min(e, n)
    })), _n = xn((function (e, n) {
        return e * n
    }));
    var On = xn((function (e, n) {
        return e !== n ? 1 : 0
    }));

    function Fn(e, n, t, a) {
        var r = [], o = 0, i = n.length - 1 + t.length, c = new Array(i).fill(null).map((function () {
            return [0]
        }));
        !function (e, n) {
            for (var t = 0; t < e.length; ++t) {
                var a = e[t], r = t === e.length - 1 ? n : e[t + 1].length;
                if (0 === a.length) throw new Error("Ragged splits may not be empty");
                if (a[0] < 0) throw new Error("Ragged splits must be non-negative");
                if (a[a.length - 1] > r) throw new Error("Ragged splits must not point past values");
                for (var o = 1; o < a.length; ++o) if (a[o - 1] > a[o]) throw new Error("Ragged splits must be sorted in ascending order")
            }
        }(t, a);
        for (var s = 1, u = 0; u < n.length - 1; ++u) {
            s *= n[u];
            for (var l = n[u + 1], d = 1; d < s + 1; ++d) c[u].push(d * l)
        }
        for (d = 0; d < e.length; ++d) {
            var p = e[d], h = e[d] + 1;
            for (u = 0; u < t.length; ++u) {
                var f = t[u], x = u + n.length - 1;
                if (x >= 0) for (var v = c[x], g = v[v.length - 1] - f[p], m = p; m < h; ++m) c[x].push(f[m + 1] + g);
                p = f[p], h = f[h]
            }
            h !== p && (r.push([p, h]), o += h - p)
        }
        return {outSplits: c, valueSlices: r, numValues: o}
    }

    function Dn(e, n) {
        for (var t = e.slice(0, n); t.length < n;) t.push(1);
        for (var a = n; a < e.length; a++) t[n - 1] *= e[a];
        return t
    }

    function Pn(e, t, a, r, o) {
        var i = t.slice();
        i[0] = o;
        var s = n.util.getArrayFromDType(a, n.util.sizeFromShape(i)), u = e.length;
        return function (e, n, t, a, r, o) {
            var i, s, u = Dn(n, 2)[1], l = Dn(o, 2)[1], d = 0;
            try {
                for (var p = c(t), h = p.next(); !h.done; h = p.next()) for (var f = h.value, x = f[0]; x < f[1]; ++x) {
                    for (var v = 0; v < a; ++v) r[d * l + v] = e[x * u + v];
                    ++d
                }
            } catch (e) {
                i = {error: e}
            } finally {
                try {
                    h && !h.done && (s = p.return) && s.call(p)
                } finally {
                    if (i) throw i.error
                }
            }
        }(e, t, r, 0 === u ? 0 : u / t[0], s, i), [s, i]
    }

    var Ln = 2147483647;
    var Bn = n.backend_util.RowPartitionType, Vn = function () {
        function e(e, t, a, r, o, i, c, s, u, l) {
            this.shape = e, this.shapeShape = t, this.values = a, this.valuesShape = r, this.valuesDType = o, this.defaultValue = i, this.defaultValueShape = c, this.rowPartitionValues = s, this.rowPartitionValuesShapes = u, this.rowPartitionTypes = n.backend_util.getRowPartitionTypesHelper(l), this.raggedRank = n.backend_util.getRaggedRank(this.rowPartitionTypes)
        }

        return e.prototype.getRowPartitionTypeByDimension = function (e) {
            return this.rowPartitionTypes[0] === Bn.FIRST_DIM_SIZE ? this.rowPartitionTypes[e + 1] : this.rowPartitionTypes[e]
        }, e.prototype.getRowPartitionTensor = function (e) {
            return this.rowPartitionTypes[0] === Bn.FIRST_DIM_SIZE ? this.rowPartitionValues[e + 1] : this.rowPartitionValues[e]
        }, e.prototype.getMaxWidth = function (n) {
            var t = this.getRowPartitionTensor(n - 1);
            switch (this.getRowPartitionTypeByDimension(n - 1)) {
                case Bn.VALUE_ROWIDS:
                    return e.getMaxWidthValueRowID(t);
                case Bn.ROW_SPLITS:
                    return e.getMaxWidthRowSplit(t);
                default:
                    throw new Error("Cannot handle partition type ".concat(Bn[this.getRowPartitionTypeByDimension(n - 1)]))
            }
        }, e.getMaxWidthRowSplit = function (e) {
            var n = e.length;
            if (0 === n || 1 === n) return 0;
            for (var t = 0, a = 0; a < n - 1; ++a) {
                var r = e[a + 1] - e[a];
                r > t && (t = r)
            }
            return t
        }, e.getMaxWidthValueRowID = function (e) {
            var n = e.length;
            if (0 === n) return 0;
            for (var t = 0, a = e[0], r = 0, o = 1; o < n; ++o) {
                var i = e[o];
                i !== a && (a = i, r = Math.max(o - t, r), t = o)
            }
            return Math.max(n - t, r)
        }, e.prototype.tensorShapeFromTensor = function (e, n, t) {
            if (void 0 === t && (t = !0), 0 === n.length) {
                if (-1 === e[0]) return [];
                throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")
            }
            return Un(e, t)
        }, e.prototype.calculateOutputSize = function (e) {
            var t = this.valuesShape, a = this.defaultValueShape;
            n.backend_util.validateDefaultValueShape(a, t);
            var r = this.tensorShapeFromTensor(this.shape, this.shapeShape),
                o = n.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank, r, t);
            o[0] < 0 && (o[0] = e);
            for (var i = 1; i <= this.raggedRank; ++i) o[i] < 0 && (o[i] = this.getMaxWidth(i));
            return o
        }, e.prototype.calculateFirstParentOutputIndex = function (e, t, a) {
            for (var r = Math.min(e, a), o = [], i = 0, c = 0; c < r; ++c, i += t) o.push(i);
            for (c = r; c < e; ++c) o.push(-1);
            return n.util.assert(o.length === e, (function () {
                return "Final length of result must be equal to firstDimension."
            })), o
        }, e.prototype.calculateOutputIndexRowSplit = function (e, n, t, a) {
            for (var r = e.length, o = [], i = 0; i < r - 1; ++i) {
                var c = e[i + 1] - e[i], s = Math.min(a, c), u = n[i];
                -1 === u && (s = 0);
                for (var l = 0; l < s; ++l) o.push(u), u += t;
                for (l = 0; l < c - s; ++l) o.push(-1)
            }
            if (r > 0 && o.length !== e[r - 1]) throw new Error("Invalid row split size.");
            return o
        }, e.prototype.calculateOutputIndexValueRowID = function (e, n, t, a) {
            var r = e.length, o = [];
            if (0 === r) return [];
            var i = 0, c = e[0];
            if (c >= n.length) throw new Error("Got currentValueRowId=".concat(c, ", which is not less than ").concat(n.length));
            var s = n[c];
            o.push(s);
            for (var u = 1; u < r; ++u) {
                var l = e[u];
                if (l === c) s >= 0 && (++i < a ? s += t : s = -1); else {
                    if (i = 0, c = l, l >= n.length) throw new Error("Got nextValueRowId=".concat(l, " which is not less than ").concat(n.length));
                    s = n[l]
                }
                o.push(s)
            }
            if (o.length !== e.length) throw new Error("Invalid row ids.");
            return o
        }, e.prototype.calculateOutputIndex = function (e, n, t, a) {
            var r = this.getRowPartitionTensor(e), o = this.getRowPartitionTypeByDimension(e);
            switch (o) {
                case Bn.VALUE_ROWIDS:
                    return this.calculateOutputIndexValueRowID(r, n, t, a);
                case Bn.ROW_SPLITS:
                    if (r.length - 1 > n.length) throw new Error("Row partition size is greater than output size: ".concat(r.length - 1, " > ").concat(n.length));
                    return this.calculateOutputIndexRowSplit(r, n, t, a);
                default:
                    throw new Error("Unsupported partition type: ".concat(Bn[o]))
            }
        }, e.prototype.getFirstDimensionSize = function () {
            var e = this.rowPartitionValues[0];
            if (0 === this.rowPartitionTypes.length) throw new Error("No row_partition_types given.");
            var n = this.rowPartitionTypes[0];
            switch (n) {
                case Bn.FIRST_DIM_SIZE:
                    return e[0];
                case Bn.VALUE_ROWIDS:
                    throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");
                case Bn.ROW_SPLITS:
                    return this.rowPartitionValuesShapes[0][0] - 1;
                default:
                    throw new Error("Cannot handle type ".concat(Bn[n]))
            }
        }, e.prototype.compute = function () {
            if (this.rowPartitionValues[0].length <= 0) throw new Error("Invalid first partition input. Tensor requires at least one element.");
            var e = this.getFirstDimensionSize(), t = this.calculateOutputSize(e), a = new Array(this.raggedRank + 1);
            a[a.length - 1] = 1;
            for (var r = a.length - 2; r >= 0; --r) a[r] = a[r + 1] * t[r + 1];
            var o = Un(t, !1), i = n.util.getArrayFromDType(this.valuesDType, n.util.sizeFromShape(o));
            if (a[0] * t[0] > 0) {
                var c = this.calculateFirstParentOutputIndex(e, a[0], t[0]);
                for (r = 1; r <= this.raggedRank; ++r) {
                    c = this.calculateOutputIndex(r - 1, c, a[r], t[r])
                }
                this.setOutput(this.raggedRank, c, i, o)
            }
            return [o, i]
        }, e.prototype.setOutput = function (e, t, a, r) {
            if (0 !== a.length) {
                var o = this.values, i = a, c = r.slice();
                c = c.slice(e + 1);
                var s = n.util.sizeFromShape(c), u = t.length, l = this.defaultValue;
                if (l.length !== s && 1 !== l.length) {
                    var d = this.defaultValueShape;
                    n.tidy((function () {
                        var e = n.reshape(l, d), t = n.broadcastTo(e, c);
                        l = t.dataSync()
                    }))
                }
                for (var p = 0, h = 0, f = 0, x = 0; x <= u; ++x) {
                    var v = x < u ? t[x] : -1;
                    if (v !== f) {
                        if (h < f) {
                            var g = o.subarray(p * s);
                            Wn(i.subarray(h * s), g, (f - h) * s)
                        }
                        if (x >= u) {
                            var m = a.length;
                            v = Math.floor(m / s)
                        }
                        if (v > f) if (1 === this.defaultValue.length) i.subarray(f * s, v * s).fill(this.defaultValue[0]), f = v; else for (; v > f;) {
                            Wn(i.slice(f * s), l, s), ++f
                        }
                        v < 0 ? (p = x + 1, h = f) : (p = x, f = (h = f) + 1)
                    } else ++f
                }
            }
        }, e
    }();

    function Wn(e, n, t) {
        for (var a = 0; a < t; a++) e[a] = n[a]
    }

    function Un(e, n) {
        var t, a, r = [];
        try {
            for (var o = c(e), i = o.next(); !i.done; i = o.next()) {
                var s = i.value;
                if (s < 0) {
                    if (!n) throw new Error("Dimension ".concat(s, " must be >= 0"));
                    if (s < -1) throw new Error("Dimension ".concat(s, " must be >= -1"));
                    s = -1
                }
                r.push(s)
            }
        } catch (e) {
            t = {error: e}
        } finally {
            try {
                i && !i.done && (a = o.return) && a.call(o)
            } finally {
                if (t) throw t.error
            }
        }
        return r
    }

    var Mn = mn((function (e) {
        return 1 / Math.sqrt(e)
    }));
    var Gn = mn((function (e) {
        return 1 / (1 + Math.exp(-e))
    }));
    var zn = mn((function (e) {
        return Math.sqrt(e)
    })), Xn = mn((function (e, n) {
        var t = n.pattern, a = n.replaceGlobal, r = n.rewrite;
        return e.replace(new RegExp(t, a ? "g" : ""), r)
    }));
    var Hn = function () {
        function e(e, t, a, r, o, i) {
            this.separator = n.util.encodeString(e), this.nGramWidths = t, this.leftPad = n.util.encodeString(a), this.rightPad = n.util.encodeString(r), this.padWidth = o, this.preserveShort = i
        }

        return e.prototype.getPadWidth = function (e) {
            return Math.min(this.padWidth < 0 ? e - 1 : this.padWidth, e - 1)
        }, e.prototype.getNumNGrams = function (e, n) {
            var t = this.getPadWidth(n);
            return Math.max(0, e + 2 * t - n + 1)
        }, e.prototype.createNGrams = function (e, n, t, a, r, o) {
            for (var i = function (i) {
                var s = c.getPadWidth(o), u = Math.max(0, s - i), l = Math.max(0, s - (r - (i + 1))), d = o - (u + l),
                    p = n + (u > 0 ? 0 : i - s), h = 0;
                h += u * c.leftPad.length;
                for (var f = 0; f < d; ++f) h += e[p + f].length;
                h += l * c.rightPad.length, h += (u + l + d - 1) * c.separator.length, t[a + i] = new Uint8Array(h);
                var x = t[a + i], v = 0, g = function (e) {
                    return e.forEach((function (e) {
                        return x[v++] = e
                    }))
                };
                for (f = 0; f < u; ++f) g(c.leftPad), g(c.separator);
                for (f = 0; f < d - 1; ++f) g(e[p + f]), g(c.separator);
                if (d > 0) {
                    g(e[p + d - 1]);
                    for (f = 0; f < l; ++f) g(c.separator), g(c.rightPad)
                } else {
                    for (f = 0; f < l - 1; ++f) g(c.rightPad), g(c.separator);
                    g(c.rightPad)
                }
            }, c = this, s = 0; s < r; ++s) i(s)
        }, e.prototype.compute = function (e, t) {
            var a = this, r = e.length, o = t.length;
            if (o > 0) {
                var i = t[0];
                if (0 !== i) throw new Error("First split value must be 0, got ".concat(i));
                for (var c = 1; c < o; ++c) {
                    var s = t[c] >= i;
                    if (!(s = s && t[c] <= r)) throw new Error("Invalid split value ".concat(t[c], ", must be in [").concat(i, ", ").concat(r, "]"));
                    i = t[c]
                }
                if (i !== r) throw new Error("Last split value must be data size. Expected ".concat(r, ", got ").concat(i))
            }
            var u = o - 1, l = n.util.getArrayFromDType("int32", o);
            if (0 === r || 0 === o) {
                var d = new Array(r);
                for (c = 0; c <= u; ++c) l[c] = 0;
                return [d, l]
            }
            l[0] = 0;
            var p = function (e) {
                var n = t[e] - t[e - 1], r = 0;
                h.nGramWidths.forEach((function (e) {
                    r += a.getNumNGrams(n, e)
                })), h.preserveShort && n > 0 && 0 === r && (r = 1), l[e] = l[e - 1] + r
            }, h = this;
            for (c = 1; c <= u; ++c) p(c);
            var f = new Array(l[u]), x = function (n) {
                var r = t[n], o = l[n];
                if (v.nGramWidths.forEach((function (i) {
                    var c = t[n + 1] - t[n], s = a.getNumNGrams(c, i);
                    a.createNGrams(e, r, f, o, s, i), o += s
                })), v.preserveShort && o === l[n]) {
                    var i = t[n + 1] - t[n];
                    if (0 === i) return "continue";
                    var c = i + 2 * v.padWidth;
                    v.createNGrams(e, r, f, o, 1, c)
                }
            }, v = this;
            for (c = 0; c < u; ++c) x(c);
            return [f, l]
        }, e
    }();

    function jn(e, n, t, a) {
        if (e.length) if (0 !== n.length) if (1 !== n.length) {
            var r = 0;
            for (s = 0; s < e.length + 1; s++) if (s === e.length || -1 !== n.indexOf(e[s])) {
                c = e.subarray(r, s);
                t && 0 === c.length || a.push(c), r = s + 1
            }
        } else {
            for (var o = n[0], i = e.indexOf(o); -1 !== i;) {
                var c = e.subarray(0, i);
                t && 0 === c.length || a.push(c), i = (e = e.subarray(i + 1)).indexOf(o)
            }
            t && 0 === e.length || a.push(e)
        } else for (var s = 0; s < e.length; ++s) a.push(e.subarray(s, s + 1))
    }

    var Kn = xn((function (e, n) {
        return e - n
    }));
    var qn = function (e, n) {
        var t = n.value - e.value;
        return 0 === t ? e.index - n.index : t
    };

    function Yn(e, t, a, r) {
        for (void 0 === a && (a = 0), void 0 === r && (r = e.length - 1); r > a;) {
            if (r - a > 600) {
                var o = r - a + 1, i = t - a + 1, c = Math.log(o), s = .5 * Math.exp(2 * c / 3),
                    u = .5 * Math.sqrt(c * s * (o - s) / o) * Math.sign(i - o / 2);
                Yn(e, t, Math.max(a, Math.floor(t - i * s / o + u)), Math.min(r, Math.floor(t + (o - i) * s / o + u)))
            }
            var l = e[t], d = a, p = r;
            for (n.util.swap(e, a, t), qn(e[r], l) > 0 && n.util.swap(e, a, r); d < p;) {
                for (n.util.swap(e, d, p), d++, p--; qn(e[d], l) < 0;) d += 1;
                for (; qn(e[p], l) > 0;) p -= 1
            }
            0 === qn(e[a], l) ? n.util.swap(e, a, p) : (p += 1, n.util.swap(e, p, r)), p <= t && (a = p + 1), t <= p && (r = p - 1)
        }
    }

    var Qn = vn, Zn = function (e, t, a, r, o) {
        for (var i = n.util.sizeFromShape(r), c = n.util.makeZerosTypedArray(o, a), s = 0; s < e.length; s++) {
            var u = e[s];
            if (u < 0) throw new Error("Input x must be non-negative!");
            u >= o || (c[u] += i > 0 ? t[s] : 1)
        }
        return c
    }, Jn = function (e, t, a, r) {
        void 0 === r && (r = !1);
        for (var o = e.shape[0], i = e.shape[1], c = n.buffer([o, a], t.dtype), s = 0; s < o; s++) for (var u = 0; u < i; u++) {
            var l = e.get(s, u);
            if (l < 0) throw new Error("Input x must be non-negative!");
            l >= a || (r ? c.set(1, s, l) : t.size > 0 ? c.set(c.get(s, l) + t.get(s, u), s, l) : c.set(c.get(s, l) + 1, s, l))
        }
        return c
    }, $n = gn, et = function (e, t, a, r) {
        if ("int32" === r) return [t, "int32", Int32Array.from(e)];
        if ("bool" === r) {
            var o = n.util.toTypedArray([0], a), i = s(xn((function (e, n) {
                return e !== n ? 1 : 0
            }))(t, [], e, o, "bool"), 2), c = i[0];
            return [i[1], "bool", c]
        }
        throw new Error("Error in Cast: failed to cast ".concat(a, " to ").concat(r))
    }, nt = bn, ttt = function (e, t, a, r) {
        var o = n.util.getArrayFromDType(a, n.util.sizeFromShape(t));
        if (r && "string" !== a) {
            var i = 0;
            e.forEach((function (e) {
                var t = n.util.sizeFromShape(e.shape);
                o.set(e.vals, i), i += t
            }))
        } else {
            var c = 0;
            e.forEach((function (e) {
                for (var r = "string" === a ? n.backend_util.fromUint8ToStringArray(e.vals) : e.vals, i = 0, s = 0; s < e.shape[0]; ++s) for (var u = s * t[1] + c, l = 0; l < e.shape[1]; ++l) o[u + l] = r[i++];
                c += e.shape[1]
            }))
        }
        return o
    }, at = Cn, rt = yn, ot = wn, it = In, ct = function (e, t, a, r, o, i, c, l, d) {
        for (var p = n.buffer([r, i], a), h = 0; h < r; h++) {
            for (var f = [], x = 0, v = 0; v < o; v++) {
                var g = e[h * o + v];
                x += g * c[v], f.push(g)
            }
            if (x < 0 || x >= d / i) throw new Error("Invalid indices: ".concat(f, " does not index into ").concat(l));
            for (var m = 0; m < i; m++) p.values[h * i + m] = t.get.apply(t, u([], s(t.indexToLoc(x * i + m)), !1))
        }
        return p
    }, st = function (e, t, a) {
        for (var r = n.buffer(a, e.dtype), o = 0; o < r.size; ++o) {
            var i = r.indexToLoc(o).slice(), c = i[0], s = i[2], u = t.locToIndex([c, s]);
            i[2] = t.values[u];
            var l = e.locToIndex(i);
            0 <= l && l < e.values.length && (r.values[o] = e.values[l])
        }
        return r
    }, ut = Sn, lt = kn, dt = Rn, pt = Tn, ht = function (e, t, a) {
        var r = (t - e) / (a - 1), o = n.util.makeZerosTypedArray(a, "float32");
        o[0] = e;
        for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + r;
        return o
    }, ft = Nn, xt = function (e, t, a, r) {
        for (var o = n.util.getTypedArrayFromDType(r, n.util.sizeFromShape(a)), i = 0; i < o.length; ++i) {
            for (var c = i * t, s = e[c], u = 0; u < t; ++u) {
                var l = e[c + u];
                (Number.isNaN(l) || l > s) && (s = l)
            }
            o[i] = s
        }
        return o
    }, vt = En, gt = An, mt = _n, bt = function (e, t, a) {
        var r = n.util.createScalarValue(-1, a);
        return _n([], t, r, e, a)
    }, Ct = On, yt = function (e, t, a, r) {
        for (var o = s(n.backend_util.computeOutAndReduceShapes(e, r), 2), i = o[0], c = o[1], u = n.upcastType(t, "int32"), l = n.util.makeZerosTypedArray(n.util.sizeFromShape(i), u), d = n.util.sizeFromShape(c), p = 0; p < l.length; ++p) {
            for (var h = p * d, f = 1, x = 0; x < d; ++x) f *= a[h + x];
            l[p] = f
        }
        return {outVals: l, outShape: i, outDtype: u}
    }, wt = function (e, t, a, r, o, i, c, s) {
        if (0 === e.length) throw new Error("paramsNestedSplits must be non empty");
        if (0 === t[0].length) throw new Error("Split tensors must not be scalars");
        if (function (e, t, a) {
            e.forEach((function (e, r) {
                if (e < 0 || e >= a) {
                    var o = n.util.indexToLoc(r, t.length, n.util.computeStrides(t)).join(",");
                    throw new Error("indices[".concat(o, "] = ").concat(e, " is not in [0, ").concat(a, ")"))
                }
            }))
        }(i, c, t[0][0] - 1), 0 === r.length) throw new Error("params.rank must be nonzero");
        var u = Fn(i, c, e, r[0]), l = u.outSplits, d = u.valueSlices, p = u.numValues, h = function (e) {
            for (var t = [], a = function (a) {
                var r = e[a].length, o = n.util.getArrayFromDType("int32", r);
                t.push(o), e[a].forEach((function (e, n) {
                    return o[n] = e
                }))
            }, r = 0; r < e.length; ++r) a(r);
            return t
        }(l), f = Pn(a, r, o, d, p);
        return [h, f[0], f[1]]
    }, It = function (e, t, a, r, o, i, c) {
        if (t.length > 1) throw new Error("starts must be a scalar or vector");
        if (o.length > 1) throw new Error("limits must be a scalar or vector");
        if (c.length > 1) throw new Error("deltas must be a scalar or vector");
        var s = 0 === t.length, u = 0 === o.length, l = 0 === c.length, d = [];
        s || d.push(t[0]), u || d.push(o[0]), l || d.push(c[0]);
        for (var p = 1; p < d.length; ++p) if (d[p] !== d[p - 1]) throw new Error("starts, limits, and deltas must have the same shape");
        var h = 0 === d.length ? 1 : d[0], f = n.util.getArrayFromDType("int32", h + 1);
        f[0] = 0;
        for (var x = 0; x < h; ++x) {
            var v = s ? e[0] : e[x], g = u ? r[0] : r[x];
            if (0 === (S = l ? i[0] : i[x])) throw new Error("Requires delta != 0");
            var m = void 0;
            if (S > 0 && g < v || S < 0 && g > v) m = 0; else if ((m = Math.ceil(Math.abs((g - v) / S))) > Ln) throw new Error("Requires ((limit - start) / delta) <= ".concat(Ln));
            f[x + 1] = f[x] + m
        }
        var b = f[h], C = n.util.getArrayFromDType(a, b), y = 0;
        for (x = 0; x < h; ++x) {
            var w = f[x + 1] - f[x], I = s ? e[0] : e[x], S = l ? i[0] : i[x];
            for (p = 0; p < w; ++p) C[y++] = I, I += S
        }
        return [f, C]
    }, St = function (e, n, t, a, r, o, i, c, s, u) {
        return new Vn(e, n, t, a, r, o, i, c, s, u).compute()
    }, kt = function (e, t, a, r) {
        if (e === t || e < t && a < 0 || t < e && a > 1) return n.util.makeZerosTypedArray(0, r);
        var o = Math.abs(Math.ceil((t - e) / a)), i = n.util.makeZerosTypedArray(o, r);
        t < e && 1 === a && (a = -1), i[0] = e;
        for (var c = 1; c < i.length; c++) i[c] = i[c - 1] + a;
        return i
    }, Rt = Mn, Tt = function (e, t, a, r, o, i, c, s, u, l) {
        var d = [r / o, o], p = e.values, h = t.values;
        if (0 === r) return n.buffer(a, t.dtype);
        var f = u instanceof n.TensorBuffer ? u : n.buffer(d, t.dtype);
        "string" == typeof u || "number" == typeof u ? f.values.fill(u) : "boolean" == typeof u && f.values.fill(+u);
        for (var x = 0; x < i; x++) {
            for (var v = [], g = 0, m = 0; m < c; m++) {
                var b = p[x * c + m];
                v.push(b), g += b * s[m]
            }
            if (g < 0 || g >= r / o) throw new Error("Invalid indices: ".concat(v, " does not index into ").concat(a));
            for (var C = 0; C < o; C++) l ? f.values[g * o + C] += h[x * o + C] : f.values[g * o + C] = 0 === t.rank ? h[0] : h[x * o + C]
        }
        return f
    }, Nt = Gn, Et = function (e) {
        for (var n = new Float32Array(e.length), t = 0; t < e.length; ++t) n[t] = Math.abs(e[t]);
        return n
    }, At = function (e, t, a, r, o) {
        var i = n.slice_util.isSliceContinous(r, t, a), c = n.util.sizeFromShape(a), l = n.util.computeStrides(r);
        if (i) {
            var d = n.slice_util.computeFlatOffset(t, l);
            return "string" === o ? e.slice(d, d + c) : e.subarray(d, d + c)
        }
        for (var p = "string" === o ? n.backend_util.fromUint8ToStringArray(e) : e, h = n.buffer(r, o, p), f = n.buffer(a, o), x = 0; x < f.size; ++x) {
            var v = f.indexToLoc(x), g = v.map((function (e, n) {
                return e + t[n]
            }));
            f.set.apply(f, u([h.get.apply(h, u([], s(g), !1))], s(v), !1))
        }
        return "string" === o ? n.backend_util.fromStringArrayToUint8(f.values) : f.values
    }, _t = function (e, t, a, r, o, i, c) {
        var s = t[0], u = i[0], l = new Array(u), d = new Array(s), p = t[1];
        if (0 === u) {
            if (0 !== s) throw new Error(n.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(s));
            return [C = n.util.getArrayFromDType(a, 0), [0, p], y = n.util.getArrayFromDType(o, 0), l, d]
        }
        for (var h = !0, f = 0, x = new Array(u).fill(0), v = 0; v < s; ++v) {
            if ((m = e[v * p]) < 0) throw new Error(n.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(v, m));
            if (m >= u) throw new Error(n.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(v, m, u));
            ++x[m], h = h && m >= f, f = m
        }
        for (var g = !0, m = 0; m < u; ++m) {
            var b = 0 === x[m];
            l[m] = b, g = g && !b, x[m] = Math.max(x[m], 1), m > 0 && (x[m] += x[m - 1])
        }
        if (g && h) {
            var C = e, y = r;
            for (v = 0; v < s; ++v) d[v] = v;
            return [C, [s, p], y, l, d]
        }
        var w = x[u - 1],
            I = (C = n.util.getArrayFromDType(a, w * p), y = n.util.getArrayFromDType(o, w), new Array(u).fill(0));
        for (v = 0; v < s; ++v) {
            var S = I[m = e[v * p]], k = (0 === m ? 0 : x[m - 1]) + S;
            I[m]++;
            for (var R = 0; R < p; ++R) C[k * p + R] = e[v * p + R];
            y[k] = r[v], d[v] = k
        }
        for (m = 0; m < u; ++m) {
            if (0 === I[m]) {
                var T = 0 === m ? 0 : x[m - 1];
                C[T * p + 0] = m;
                for (var N = 1; N < p; ++N) C[T * p + N] = 0;
                y[T] = c
            }
        }
        return [C, [w, p], y, l, d]
    }, Ot = function (e, t, a, r, o) {
        for (var i = n.util.sizeFromShape(r), c = t[0], s = o.length, u = [], l = 1, d = -1, p = 0; p < s; ++p) {
            var h = o[p];
            if (-1 === h) {
                if (-1 !== d) throw new Error(n.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d, p));
                d = p, u.push(1)
            } else {
                if (h < 0) throw new Error(n.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(p, h));
                l *= h, u.push(h)
            }
        }
        if (-1 !== d) {
            if (l <= 0) throw new Error(n.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());
            var f = Math.trunc(i / l);
            if (l * f !== i) throw new Error(n.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(r, u));
            u[d] = f
        }
        if (n.util.sizeFromShape(u) !== i) throw new Error(n.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(r, u));
        var x = r.length, v = [];
        if (x > 0) {
            v[x - 1] = 1;
            for (p = x - 2; p >= 0; --p) v[p] = v[p + 1] * r[p + 1]
        }
        var g = [];
        if (s > 0) {
            g[s - 1] = 1;
            for (p = s - 2; p >= 0; --p) g[p] = g[p + 1] * u[p + 1]
        }
        for (var m = n.util.getArrayFromDType(a, c * s), b = 0; b < c; ++b) {
            for (var C = 0, y = 0; y < x; ++y) C += e[b * x + y] * v[y];
            for (y = 0; y < s; ++y) m[b * s + y] = Math.trunc(C / g[y]), C %= g[y]
        }
        return [m, [c, s], u]
    }, Ft = function (e, t, a, r, o, i, c) {
        void 0 === i && (i = !1), void 0 === c && (c = 0);
        var s = r.length, u = [t[0], e.length / t[0]], l = u[1], d = s > 0 ? o[s - 1] + 1 : 0;
        if (d < 0) throw new Error(n.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
        var p = t.slice();
        p[0] = d;
        var h = p.reduce((function (e, n) {
            return e * n
        }), 1), f = n.util.getArrayFromDType(a, h);
        if (0 === s) return d > 0 && f.fill(c), [f, p];
        if (d <= 0) throw new Error(n.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
        for (var x = 0, v = 1, g = 0, m = o[x]; ;) {
            var b = 0;
            if (v < s) {
                if (m === (b = o[v])) {
                    ++v;
                    continue
                }
                if (m >= b) throw new Error(n.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())
            }
            if (m < 0 || m >= d) throw new Error(n.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(m, d));
            m > g && f.fill(c, g * l, m * l);
            for (var C = x; C < v; ++C) {
                var y = r[C];
                if (y < 0 || y >= u[0]) throw new Error(n.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(C, r[C], u[0]));
                for (var w = 0; w < l; w++) f[m * l + w] += e[y * l + w]
            }
            if (i) for (w = 0; w < l; w++) f[m * l + w] /= v - x;
            if (x = v, g = m + 1, m = b, ++v > s) break
        }
        return g < d && f.fill(c, g * l, d * l), [f, p]
    }, Dt = zn, Pt = Xn, Lt = function (e, t, a, r) {
        for (var o = n.buffer(e, t.dtype), i = 0; i < o.size; i++) {
            for (var c = o.indexToLoc(i), l = new Array(c.length), d = 0; d < l.length; d++) l[d] = c[d] * a[d] + r[d];
            o.set.apply(o, u([t.get.apply(t, u([], s(l), !1))], s(c), !1))
        }
        return o
    }, Bt = function (e, n, t, a, r, o, i, c) {
        return new Hn(t, a, r, o, i, c).compute(e, n)
    }, Vt = function (e, t, a) {
        for (var r = e.length, o = [], i = 0, c = 0, s = new Array(r), u = 0; u < r; ++u) {
            var l = o.length;
            jn(e[u], t, a, o);
            var d = o.length - l;
            s[u] = d, i += d, c = Math.max(c, d)
        }
        var p = n.util.getArrayFromDType("int32", 2 * i), h = new Array(i), f = [r, c], x = 0;
        for (u = 0; u < r; ++u) for (var v = 0; v < s[u]; ++v) p[2 * x] = u, p[2 * x + 1] = v, h[x] = o[x], ++x;
        return [p, h, f]
    }, Wt = function (e, t) {
        for (var a = n.util.getArrayFromDType("int32", e.length), r = 0; r < e.length; ++r) a[r] = n.util.fingerPrint64(e[r]).modulo(t).getLowBitsUnsigned();
        return a
    }, Ut = Kn, Mt = function (e, t) {
        for (var a = new Array(e.rank), r = 0; r < a.length; r++) a[r] = e.shape[r] * t[r];
        var o = n.buffer(a, e.dtype);
        for (r = 0; r < o.values.length; ++r) {
            for (var i = o.indexToLoc(r), c = new Array(e.rank), s = 0; s < c.length; s++) c[s] = i[s] % e.shape[s];
            var u = e.locToIndex(c);
            o.values[r] = e.values[u]
        }
        return o
    }, Gt = function (e, t, a, r, o) {
        for (var i = t[t.length - 1], c = s([e.length / i, i], 2), u = c[0], l = c[1], d = n.util.getTypedArrayFromDType(a, u * r), p = n.util.getTypedArrayFromDType("int32", u * r), h = function (n) {
            var t = n * l, a = e.subarray(t, t + l), i = new Array(a.length);
            a.forEach((function (e, n) {
                return i[n] = {value: e, index: n}
            })), r < i.length && (Yn(i, r), i = i.slice(0, r)), o && i.sort(qn);
            for (var c = n * r, s = d.subarray(c, c + r), u = p.subarray(c, c + r), h = 0; h < r; h++) s[h] = i[h].value, u[h] = i[h].index
        }, f = 0; f < u; f++) h(f);
        var x = t.slice();
        return x[x.length - 1] = r, [n.buffer(x, a, d), n.buffer(x, "int32", p)]
    }, zt = function (e, t, a, r, o) {
        for (var i = t.length, c = n.util.sizeFromShape(t), s = n.util.computeStrides(t), u = n.util.computeStrides(o), l = n.util.getTypedArrayFromDType(a, n.util.sizeFromShape(o)), d = 0; d < c; ++d) {
            for (var p = n.util.indexToLoc(d, i, s), h = new Array(p.length), f = 0; f < h.length; f++) h[f] = p[r[f]];
            l[n.util.locToIndex(h, i, u)] = e[d]
        }
        return l
    }, Xt = function (e, t, a, r) {
        for (var o = n.util.parseAxisParam(t, a)[0], i = [1, a[0], 1], c = 0; c < o; c++) i[0] *= a[c];
        for (i[1] = a[o], c = o + 1; c < a.length; c++) i[2] *= a[c];
        var s = new Map, u = new Int32Array(a[o]), l = new n.TensorBuffer(i, r, e), d = [],
            p = 1 === i[0] && 1 === i[2];
        for (c = 0; c < a[o]; c++) {
            var h = void 0;
            if (p) h = e[c].toString(); else {
                for (var f = [], x = 0; x < i[0]; x++) for (var v = 0; v < i[2]; v++) f.push(l.get(x, c, v));
                h = f.join(",")
            }
            var g = s.get(h);
            if (null != g) u[c] = g; else {
                var m = s.size;
                s.set(h, m), u[c] = m, d.push(c)
            }
        }
        var b = i.slice();
        b[1] = s.size;
        var C = new n.TensorBuffer(b, r);
        d.forEach((function (e, n) {
            for (var t = 0; t < i[0]; t++) for (var a = 0; a < i[2]; a++) C.set(l.get(t, e, a), t, n, a)
        }));
        var y = a.slice();
        return y[o] = b[1], {outputValues: C.values, outputShape: y, indices: u}
    };

    function Ht(e, n) {
        return ["x", "y", "z", "w", "u", "v"].slice(0, n).map((function (n) {
            return "".concat(e, ".").concat(n)
        }))
    }

    function jt(e, n) {
        return 1 === n ? [e] : Ht(e, n)
    }

    var Kt = function () {
        function e(e) {
            if (this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.outputShape = e, this.rank = e.length, this.enableShapeUniforms = Le(this.outputShape.length), 0 === this.rank) this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      "; else {
                var n = jt("rc", this.rank), t = Ae(this.rank), a = this.getOutOfBoundsCondition(n),
                    r = this.getSetup(n), o = this.getOutput(n);
                this.userCode = "\n        void main() {\n          ".concat(t, " rc = getOutputCoords();\n\n          if(").concat(a, ") {\n            setOutput(vec4(0));\n          } else {\n            ").concat(r, "\n\n            setOutput(vec4(").concat(o, "));\n          }\n        }\n      ")
            }
        }

        return e.prototype.getSourceCoordsArr = function (e) {
            for (var n = [], t = 0; t <= 1; t++) for (var a = 0; a <= 1; a++) {
                for (var r = "".concat(0 === t ? "r" : "rp1", ", ").concat(0 === a ? "c" : "cp1"), o = 2; o < this.rank; o++) r = "".concat(e[e.length - 1 - o], ",") + r;
                n.push(r)
            }
            return n
        }, e.prototype.getOutOfBoundsCondition = function (e) {
            if (1 === this.rank) return "rc > ".concat(this.enableShapeUniforms ? "outShape" : this.outputShape[0]);
            for (var n = "", t = this.rank - 2; t < this.rank; t++) n += "".concat(e[t], " >= ").concat(this.enableShapeUniforms ? "outShape[".concat(t, "]") : this.outputShape[t]), t < this.rank - 1 && (n += "||");
            return n
        }, e.prototype.getSetup = function (e) {
            if (1 === this.rank) return "";
            var n = e.slice(-2),
                t = this.enableShapeUniforms ? "outShape[".concat(this.rank, " - 1]") : this.outputShape[this.rank - 1],
                a = this.enableShapeUniforms ? "outShape[".concat(this.rank, " - 2]") : this.outputShape[this.rank - 2];
            return "\n      int r = ".concat(n[0], ";\n      int c = ").concat(n[1], ";\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ").concat(t, ";\n      bool rEdge = rp1 >= ").concat(a, ";\n    ")
        }, e.prototype.getOutput = function (e) {
            var n = this.getSourceCoordsArr(e);
            if (1 === this.rank) {
                var t = this.enableShapeUniforms ? "outShape" : this.outputShape[0];
                return "getA(rc), (rc + 1 >= ".concat(t, " ? 0. : getA(rc + 1)), 0, 0")
            }
            return "getA(".concat(n[0], "),\n            cEdge ? 0. : getA(").concat(n[1], "),\n            rEdge ? 0. : getA(").concat(n[2], "),\n            rEdge || cEdge ? 0. : getA(").concat(n[3], ")")
        }, e
    }(), qt = function (e, n) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "inputShape",
            type: "ivec3"
        }], this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length);
        for (var t, a, r, o = "", i = 0; i < 4; i++) {
            var c = "thisRC = rc;";
            i % 2 == 1 && (c += "thisRC.z += 1;"), i > 1 && (c += "thisRC.y += 1;"), o += "\n        ".concat(c, "\n        ").concat(i > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "", "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[").concat(i, "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ").concat(i > 0 ? "}" : "", "\n      ")
        }
        this.userCode = "\n      ".concat((t = n, a = this.enableShapeUniforms, r = a ? ge(["r", "c", "d"], "inputShape") : xe(["r", "c", "d"], t), "\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ".concat(r, "\n      return ivec3(r, c, d);\n    }\n  ")), "\n      ").concat(this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e), "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ").concat(this.enableShapeUniforms ? "outShape[1]" : e[1], ";\n        int cols = ").concat(this.enableShapeUniforms ? "outShape[2]" : e[2], ";\n\n        ").concat(o, "\n\n        setOutput(result);\n      }\n    ")
    };
    var Yt = function () {
        function e(e) {
            this.gpgpu = e, this.numUsedTextures = 0, this.numFreeTextures = 0, this._numBytesAllocated = 0, this._numBytesFree = 0, this.freeTextures = {}, this.usedTextures = {}, this.logEnabled = !1
        }

        return e.prototype.acquireTexture = function (e, n, t) {
            var a = Zt(n, t), r = Jt(e, a, t);
            r in this.freeTextures || (this.freeTextures[r] = []), r in this.usedTextures || (this.usedTextures[r] = []);
            var o, i = Qt(e, a, this.gpgpu.gl, this.gpgpu.textureConfig, t);
            if (this.freeTextures[r].length > 0) {
                this.numFreeTextures--, this.numUsedTextures++, this._numBytesFree -= i, this.log();
                var c = this.freeTextures[r].pop();
                return this.usedTextures[r].push(c), c
            }
            return a === p.PACKED_2X2_FLOAT32 ? o = this.gpgpu.createPackedMatrixTexture(e[0], e[1]) : a === p.PACKED_2X2_FLOAT16 ? o = this.gpgpu.createFloat16PackedMatrixTexture(e[0], e[1]) : a === p.UNPACKED_FLOAT32 ? o = this.gpgpu.createFloat32MatrixTexture(e[0], e[1]) : a === p.UNPACKED_FLOAT16 ? o = this.gpgpu.createFloat16MatrixTexture(e[0], e[1]) : a === p.PACKED_4X1_UNSIGNED_BYTE && (o = this.gpgpu.createUnsignedBytesMatrixTexture(e[0], e[1])), this.usedTextures[r].push(o), this.numUsedTextures++, this._numBytesAllocated += i, this.log(), o
        }, e.prototype.releaseTexture = function (e, t, a, r) {
            if (null != this.freeTextures) {
                var o = Zt(a, r), i = Jt(t, o, r);
                i in this.freeTextures || (this.freeTextures[i] = []);
                var c = Qt(t, o, this.gpgpu.gl, this.gpgpu.textureConfig, r),
                    s = n.env().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");
                -1 !== s && this._numBytesAllocated > s ? (this.gpgpu.deleteMatrixTexture(e.texture), this._numBytesAllocated -= c) : (this.freeTextures[i].push(e), this.numFreeTextures++, this._numBytesFree += c), this.numUsedTextures--;
                var u = this.usedTextures[i], l = u && u.indexOf(e);
                if (null == l || l < 0) throw new Error("Cannot release a texture that was never provided by this texture manager");
                u[l] = u[u.length - 1], u.pop(), this.log()
            }
        }, e.prototype.log = function () {
            if (this.logEnabled) {
                var e = this.numFreeTextures + this.numUsedTextures;
                console.log("Free/Used", "".concat(this.numFreeTextures, " / ").concat(this.numUsedTextures), "(".concat(e, ")"));
                var n = this._numBytesFree / this._numBytesAllocated;
                console.log("Bytes allocated: ".concat(this._numBytesAllocated)), console.log("Bytes unused: ".concat(this._numBytesFree, " (").concat(Math.round(100 * n), "%)"))
            }
        }, Object.defineProperty(e.prototype, "numBytesAllocated", {
            get: function () {
                return this._numBytesAllocated
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "numBytesFree", {
            get: function () {
                return this._numBytesFree
            }, enumerable: !1, configurable: !0
        }), e.prototype.getNumUsedTextures = function () {
            return this.numUsedTextures
        }, e.prototype.getNumFreeTextures = function () {
            return this.numFreeTextures
        }, e.prototype.dispose = function () {
            var e = this;
            if (null != this.freeTextures) {
                for (var n in this.freeTextures) this.freeTextures[n].forEach((function (n) {
                    e.gpgpu.deleteMatrixTexture(n.texture)
                }));
                for (var n in this.usedTextures) this.usedTextures[n].forEach((function (n) {
                    e.gpgpu.deleteMatrixTexture(n.texture)
                }));
                this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0, this._numBytesAllocated = 0, this._numBytesFree = 0
            }
        }, e
    }();

    function Qt(e, n, t, a, r) {
        var o, i = function (e, n) {
            switch (e) {
                case p.PACKED_2X2_FLOAT32:
                    return en(n);
                case p.PACKED_2X2_FLOAT16:
                    return tn(n);
                case p.UNPACKED_FLOAT32:
                    return qe(n);
                case p.UNPACKED_FLOAT16:
                    return Qe(n);
                case p.PACKED_4X1_UNSIGNED_BYTE:
                    return Je(n);
                default:
                    throw new Error("Unknown physical texture type ".concat(e))
            }
        }(n, a);
        if (r) {
            var c = s(b(e[0], e[1]), 2);
            o = c[0] * c[1]
        } else {
            var u = s(g(e[0], e[1]), 2);
            o = u[0] * u[1]
        }
        var l = function (e, n) {
            var t = e;
            if (n === t.R32F) return 4;
            if (n === t.R16F) return 2;
            if (n === t.RGBA32F) return 16;
            if (n === e.RGBA) return 16;
            if (n === t.RGBA16F) return 8;
            if (n === t.RGBA8) return 4;
            throw new Error("Unknown internal format ".concat(n))
        }(t, i);
        return o * l
    }

    function Zt(e, t) {
        if (e === d.UPLOAD) return p.PACKED_2X2_FLOAT32;
        if (e === d.RENDER || null == e) return function (e) {
            return n.env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? e ? p.PACKED_2X2_FLOAT32 : p.UNPACKED_FLOAT32 : e ? p.PACKED_2X2_FLOAT16 : p.UNPACKED_FLOAT16
        }(t);
        if (e === d.DOWNLOAD || e === d.PIXELS) return p.PACKED_4X1_UNSIGNED_BYTE;
        throw new Error("Unknown logical texture type ".concat(e))
    }

    function Jt(e, n, t) {
        return "".concat(e[0], "_").concat(e[1], "_").concat(n, "_").concat(t)
    }

    var $t = function (e, n) {
        this.variableNames = ["A"], this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length), this.userCode = "\n      float unaryOperation(float x) {\n        ".concat(n, "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ")
    }, ea = "if (isnan(x)) return x;", na = "return abs(x);", ta = "return x;", aa = function (e, n) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length), this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        ".concat(n, "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ")
    }, ra = function (e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1, this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length);
        var n = e.length, t = jt("rc", n), a = Ae(n), r = function (e, n) {
            if (1 === e) return "rc";
            for (var t = "", a = 0; a < e; a++) t += n[a], a < e - 1 && (t += ",");
            return t
        }(n, t), o = t.slice(-2), i = n <= 1 ? "rc" : "vec2(".concat(o.join(","), ")");
        this.userCode = "\n      void main() {\n        ".concat(a, " rc = getOutputCoords();\n        vec4 packedInput = getA(").concat(r, ");\n\n        setOutput(getChannel(packedInput, ").concat(i, "));\n      }\n    ")
    }, oa = n.kernel_impls.whereImpl, ia = {};
    var ca = n.env().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");
    var sa = function (e) {
        function t(t) {
            var a, r, o = e.call(this) || this;
            if (o.pendingRead = new WeakMap, o.pendingDisposal = new WeakSet, o.dataRefCount = new WeakMap, o.numBytesInGPU = 0, o.uploadWaitMs = 0, o.downloadWaitMs = 0, o.lastGlFlushTime = 0, o.warnedAboutMemory = !1, o.pendingDeletes = 0, o.disposed = !1, !n.env().getBool("HAS_WEBGL")) throw new Error("WebGL is not supported on this device");
            if (null != t) {
                if (t instanceof fn) a = t; else {
                    var i = v(n.env().getNumber("WEBGL_VERSION"), t);
                    a = new fn(i)
                }
                o.binaryCache = {}, o.gpgpuCreatedLocally = !1
            } else {
                i = v(n.env().getNumber("WEBGL_VERSION"));
                a = new fn(i), o.binaryCache = ((r = n.env().getNumber("WEBGL_VERSION")) in ia || (ia[r] = {}), ia[r]), o.gpgpuCreatedLocally = !0
            }
            return o.gpgpu = a, o.canvas = o.gpgpu.gl.canvas, o.textureManager = new Yt(o.gpgpu), o.numMBBeforeWarning = null == n.env().global.screen ? 1024 : n.env().global.screen.height * n.env().global.screen.width * window.devicePixelRatio * 600 / 1024 / 1024, o.texData = new n.DataStorage(o, n.engine()), o
        }

        return function (e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

            function t() {
                this.constructor = e
            }

            r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
        }(t, e), t.prototype.nextDataId = function () {
            return t.nextDataId++
        }, t.prototype.numDataIds = function () {
            return this.texData.numDataIds() - this.pendingDeletes
        }, t.prototype.writeTexture = function (e, n, t, a, r, o) {
            var i = this.makeTensorInfo(n, t), c = this.texData.get(i.dataId);
            c.isPacked = !1, c.texture = {texture: e, texShape: [a, r]}, c.texShape = [a, r];
            var s = J(n), u = new Ge(s, !1, o), l = this.runWebGLProgram(u, [i], t, [[a, r]]);
            return l.shape = n, c.texture = null, this.disposeIntermediateTensorInfo(i), l.dataId
        }, t.prototype.write = function (e, t, a) {
            if ((n.env().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS") || n.env().getBool("DEBUG")) && this.checkNumericalProblems(e), "complex64" === a && null != e) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
            var r = {id: this.nextDataId()};
            return this.texData.set(r, {shape: t, dtype: a, values: e, usage: d.UPLOAD, refCount: 1}), r
        }, t.prototype.refCount = function (e) {
            return this.texData.has(e) ? this.texData.get(e).refCount : 0
        }, t.prototype.incRef = function (e) {
            this.texData.get(e).refCount++
        }, t.prototype.decRef = function (e) {
            this.texData.has(e) && this.texData.get(e).refCount--
        }, t.prototype.move = function (e, t, a, r, o) {
            if (n.env().getBool("DEBUG") && this.checkNumericalProblems(t), "complex64" === r) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
            this.texData.set(e, {shape: a, dtype: r, values: t, usage: d.UPLOAD, refCount: o})
        }, t.prototype.disposeIntermediateTensorInfo = function (e) {
            this.disposeData(e.dataId)
        }, t.prototype.readSync = function (e) {
            var t = this.texData.get(e), a = t.values, r = t.dtype, o = t.complexTensorInfos, i = t.slice, c = t.shape,
                s = t.isPacked;
            if (null != i) {
                var u = void 0;
                u = s ? new aa(c, ta) : new $t(c, ta);
                var l = this.runWebGLProgram(u, [{dataId: e, shape: c, dtype: r}], r), d = this.readSync(l.dataId);
                return this.disposeIntermediateTensorInfo(l), d
            }
            if (null != a) return this.convertAndCacheOnCPU(e);
            if ("string" === r) return a;
            var p, h, f = null != this.activeTimers;
            if (f && (p = n.util.now()), "complex64" === r) {
                var x = this.readSync(o.real.dataId), v = this.readSync(o.imag.dataId);
                h = n.backend_util.mergeRealAndImagArrays(x, v)
            } else h = this.getValuesFromTexture(e);
            return f && (this.downloadWaitMs += n.util.now() - p), this.convertAndCacheOnCPU(e, h)
        }, t.prototype.read = function (e) {
            return o(this, void 0, void 0, (function () {
                var t, a, r, o, c, l, d, p, h, f, x, v, g, b, C, w, I, S, k, R, T, N, E;
                return i(this, (function (i) {
                    switch (i.label) {
                        case 0:
                            if (this.pendingRead.has(e)) return t = this.pendingRead.get(e), [2, new Promise((function (e) {
                                return t.push(e)
                            }))];
                            if (a = this.texData.get(e), r = a.values, o = a.shape, c = a.slice, l = a.dtype, d = a.complexTensorInfos, p = a.isPacked, null != c) return h = void 0, h = p ? new aa(o, ta) : new $t(o, ta), f = this.runWebGLProgram(h, [{
                                dataId: e,
                                shape: o,
                                dtype: l
                            }], l), x = this.read(f.dataId), this.disposeIntermediateTensorInfo(f), [2, x];
                            if (null != r) return [2, this.convertAndCacheOnCPU(e)];
                            if (n.env().getBool("DEBUG") && !n.env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === n.env().getNumber("WEBGL_VERSION")) throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
                            return v = null, "complex64" !== l && n.env().get("WEBGL_BUFFER_SUPPORTED") && (g = this.decode(e), b = this.texData.get(g.dataId), v = (E = this.gpgpu).createBufferFromTexture.apply(E, u([b.texture.texture], s(m(o)), !1))), this.pendingRead.set(e, []), "complex64" === l ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
                        case 1:
                            i.sent(), i.label = 2;
                        case 2:
                            return "complex64" !== l ? [3, 4] : [4, Promise.all([this.read(d.real.dataId), this.read(d.imag.dataId)])];
                        case 3:
                            return w = i.sent(), I = w[0], S = w[1], C = n.backend_util.mergeRealAndImagArrays(I, S), [3, 5];
                        case 4:
                            null == v ? C = this.getValuesFromTexture(e) : (k = n.util.sizeFromShape(o), C = this.gpgpu.downloadFloat32MatrixFromBuffer(v, k)), i.label = 5;
                        case 5:
                            return null != g && this.disposeIntermediateTensorInfo(g), null != v && y(R = this.gpgpu.gl, (function () {
                                return R.deleteBuffer(v)
                            })), T = this.convertAndCacheOnCPU(e, C), N = this.pendingRead.get(e), this.pendingRead.delete(e), N.forEach((function (e) {
                                return e(T)
                            })), this.pendingDisposal.has(e) && (this.pendingDisposal.delete(e), this.disposeData(e) && n.engine().removeDataId(e, this), this.pendingDeletes--), [2, T]
                    }
                }))
            }))
        }, t.prototype.readToGPU = function (e, t) {
            void 0 === t && (t = {});
            var a = this.texData.get(e), r = a.values, o = a.shape, i = a.slice, c = a.dtype, s = a.isPacked,
                u = a.texture;
            if ("complex64" === c) throw new Error("Does not support reading texture for complex64 dtype.");
            if (null != i) {
                var l = void 0;
                l = s ? new aa(o, ta) : new $t(o, ta);
                var d = this.runWebGLProgram(l, [{dataId: e, shape: o, dtype: c}], c), p = this.readToGPU(d, t);
                return this.disposeIntermediateTensorInfo(d), p
            }
            if (null == u) throw null != r ? new Error("Data is not on GPU but on CPU.") : new Error("There is no data on GPU or CPU.");
            var h = this.decode(e, t.customTexShape), f = n.engine().makeTensorFromTensorInfo(h),
                x = this.texData.get(h.dataId);
            return Object.assign({tensorRef: f}, x.texture)
        }, t.prototype.bufferSync = function (e) {
            var t = this.readSync(e.dataId);
            if ("string" === e.dtype) try {
                var a = t.map((function (e) {
                    return n.util.decodeString(e)
                }));
                return n.buffer(e.shape, e.dtype, a)
            } catch (e) {
                throw new Error("Failed to decode encoded string bytes into utf-8")
            }
            return n.buffer(e.shape, e.dtype, t)
        }, t.prototype.checkNumericalProblems = function (e) {
            if (null != e) for (var t = 0; t < e.length; t++) {
                var a = e[t];
                if (!w(a)) {
                    if (n.env().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")) throw Error("The value ".concat(a, " cannot be represented with your ") + "current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
                    throw Error("The value ".concat(a, " cannot be represented on this device."))
                }
            }
        }, t.prototype.getValuesFromTexture = function (e) {
            var t, a = this.texData.get(e), r = a.shape, o = a.dtype, i = a.isPacked, c = n.util.sizeFromShape(r);
            if (n.env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
                var l = this.decode(e), d = this.texData.get(l.dataId),
                    p = (t = this.gpgpu).downloadMatrixFromPackedTexture.apply(t, u([d.texture.texture], s(m(r)), !1)).subarray(0, c);
                return this.disposeIntermediateTensorInfo(l), p
            }
            var h = n.env().getBool("WEBGL_PACK") && !0 === i, f = h ? J(r) : r, x = h ? new Ue(f) : new We(f),
                v = this.runWebGLProgram(x, [{shape: f, dtype: o, dataId: e}], "float32"),
                g = this.texData.get(v.dataId),
                b = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(g.texture.texture, g.texShape[0], g.texShape[1]).subarray(0, c);
            return this.disposeIntermediateTensorInfo(v), b
        }, t.prototype.timerAvailable = function () {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0
        }, t.prototype.time = function (e) {
            var t = this, a = this.activeTimers, r = [], c = !1;
            null == this.programTimersStack ? (this.programTimersStack = r, c = !0) : this.activeTimers.push(r), this.activeTimers = r, e();
            var s = n.util.flatten(this.activeTimers.map((function (e) {
                return e.query
            }))).filter((function (e) {
                return null != e
            })), u = n.util.flatten(this.activeTimers.map((function (e) {
                return e.name
            }))).filter((function (e) {
                return null != e
            }));
            this.activeTimers = a, c && (this.programTimersStack = null);
            var l = {
                uploadWaitMs: this.uploadWaitMs,
                downloadWaitMs: this.downloadWaitMs,
                kernelMs: null,
                wallMs: null
            };
            return o(t, void 0, void 0, (function () {
                var e;
                return i(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(s)] : [3, 2];
                        case 1:
                            return e = t.sent(), l.kernelMs = n.util.sum(e), l.getExtraProfileInfo = function () {
                                return e.map((function (e, n) {
                                    return {name: u[n], ms: e}
                                })).map((function (e) {
                                    return "".concat(e.name, ": ").concat(e.ms)
                                })).join(", ")
                            }, [3, 3];
                        case 2:
                            l.kernelMs = {error: "WebGL query timers are not supported in this environment."}, t.label = 3;
                        case 3:
                            return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, l]
                    }
                }))
            }))
        }, t.prototype.memory = function () {
            return {
                unreliable: !1,
                numBytesInGPU: this.numBytesInGPU,
                numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
                numBytesInGPUFree: this.textureManager.numBytesFree
            }
        }, t.prototype.startTimer = function () {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : {
                startMs: n.util.now(),
                endMs: null
            }
        }, t.prototype.endTimer = function (e) {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(), e) : (e.endMs = n.util.now(), e)
        }, t.prototype.getQueryTime = function (e) {
            return o(this, void 0, void 0, (function () {
                var t;
                return i(this, (function (a) {
                    return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(e)] : [2, (t = e).endMs - t.startMs]
                }))
            }))
        }, t.prototype.disposeData = function (e, n) {
            if (void 0 === n && (n = !1), this.pendingDisposal.has(e)) return !1;
            if (!this.texData.has(e)) return !0;
            if (n ? this.texData.get(e).refCount = 0 : this.texData.get(e).refCount--, !n && this.texData.get(e).refCount > 0) return !1;
            if (this.pendingRead.has(e)) return this.pendingDisposal.add(e), this.pendingDeletes++, !1;
            this.releaseGPUData(e);
            var t = this.texData.get(e).complexTensorInfos;
            return null != t && (this.disposeData(t.real.dataId, n), this.disposeData(t.imag.dataId, n)), this.texData.delete(e), !0
        }, t.prototype.releaseGPUData = function (e) {
            var n = this.texData.get(e), t = n.texture, a = n.dtype, r = n.texShape, o = n.usage, i = n.isPacked,
                c = n.slice, s = c && c.origDataId || e, u = this.dataRefCount.get(s);
            u > 1 ? this.dataRefCount.set(s, u - 1) : (this.dataRefCount.delete(s), null != t && (this.numBytesInGPU -= this.computeBytes(r, a), this.textureManager.releaseTexture(t, r, o, i)));
            var l = this.texData.get(e);
            l.texture = null, l.texShape = null, l.isPacked = !1, l.slice = null
        }, t.prototype.getTexture = function (e) {
            return this.uploadToGPU(e), this.texData.get(e).texture.texture
        }, t.prototype.getDataInfo = function (e) {
            return this.texData.get(e)
        }, t.prototype.shouldExecuteOnCPU = function (e, t) {
            var a = this;
            return void 0 === t && (t = ca), n.env().getBool("WEBGL_CPU_FORWARD") && e.every((function (e) {
                return null == a.texData.get(e.dataId).texture && n.util.sizeFromShape(e.shape) < t
            }))
        }, t.prototype.getGPGPUContext = function () {
            return this.gpgpu
        }, t.prototype.where = function (e) {
            n.backend_util.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
            var t = e.dataSync();
            return oa(e.shape, t)
        }, t.prototype.packedUnaryOp = function (e, t, a) {
            var r = new aa(e.shape, t), o = this.compileAndRun(r, [e], a);
            return n.engine().makeTensorFromTensorInfo(o)
        }, t.prototype.abs = function (e) {
            if (this.shouldExecuteOnCPU([e]) && "complex64" !== e.dtype) {
                var t = Et(this.texData.get(e.dataId).values);
                return this.makeOutput(e.shape, e.dtype, t)
            }
            if (n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(e, na, e.dtype);
            var a = new $t(e.shape, na), r = this.compileAndRun(a, [e]);
            return n.engine().makeTensorFromTensorInfo(r)
        }, t.prototype.makeTensorInfo = function (e, t, a) {
            var r;
            if ("string" === t && null != a && a.length > 0 && n.util.isString(a[0])) {
                var o = a.map((function (e) {
                    return n.util.encodeString(e)
                }));
                r = this.write(o, e, t)
            } else r = this.write(a, e, t);
            return this.texData.get(r).usage = null, {dataId: r, shape: e, dtype: t}
        }, t.prototype.makeOutput = function (e, t, a) {
            return n.engine().makeTensorFromTensorInfo(this.makeTensorInfo(e, t, a), this)
        }, t.prototype.unpackTensor = function (e) {
            var n = new ra(e.shape);
            return this.runWebGLProgram(n, [e], e.dtype)
        }, t.prototype.packTensor = function (e) {
            var n = new Kt(e.shape);
            return this.runWebGLProgram(n, [e], e.dtype, null, !0)
        }, t.prototype.packedReshape = function (e, n) {
            var t = u([Q(e.shape)], s(Z(e.shape)), !1), a = {dtype: e.dtype, shape: t, dataId: e.dataId},
                r = u([Q(n)], s(Z(n)), !1), o = new qt(r, t), i = [t], c = this.runWebGLProgram(o, [a], e.dtype, i, !0);
            return {dataId: c.dataId, shape: n, dtype: c.dtype}
        }, t.prototype.decode = function (e, t) {
            var a = this.texData.get(e), r = a.isPacked, o = a.shape, i = a.dtype;
            if (null != t) {
                var c = n.util.sizeFromShape(o), s = t[0] * t[1] * 4;
                n.util.assert(c <= s, (function () {
                    return "customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."
                }))
            }
            var u, l = J(o);
            u = r ? new Ve(l) : new Be(l);
            var d = [null != t ? t : m(l)];
            return {
                dtype: i,
                shape: o,
                dataId: this.runWebGLProgram(u, [{shape: l, dtype: i, dataId: e}], i, d, !0, t).dataId
            }
        }, t.prototype.runWebGLProgram = function (e, t, a, r, o, i) {
            var c = this;
            void 0 === o && (o = !1);
            var s = this.makeTensorInfo(e.outputShape, a), u = this.texData.get(s.dataId);
            if (e.packedOutput && (u.isPacked = !0), e.outPackingScheme === l.DENSE) {
                var d = null != i ? i : m(e.outputShape);
                u.texShape = d.map((function (e) {
                    return 2 * e
                }))
            }
            if (null != e.outTexUsage && (u.usage = e.outTexUsage), 0 === n.util.sizeFromShape(s.shape)) return u.values = n.util.getTypedArrayFromDType(s.dtype, 0), s;
            var p = [], h = t.map((function (t) {
                if ("complex64" === t.dtype) throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
                var a = c.texData.get(t.dataId);
                if (null == a.texture) {
                    if (!e.packedInputs && n.util.sizeFromShape(t.shape) <= n.env().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) return {
                        shape: t.shape,
                        texData: null,
                        isUniform: !0,
                        uniformValues: a.values
                    };
                    e.packedInputs && (a.isPacked = !0, a.shape = t.shape)
                }
                if (c.uploadToGPU(t.dataId), !!a.isPacked != !!e.packedInputs) t = a.isPacked ? c.unpackTensor(t) : c.packTensor(t), p.push(t), a = c.texData.get(t.dataId); else if (a.isPacked && !ne(a.shape, t.shape)) {
                    var r = t, o = t.shape;
                    t.shape = a.shape, t = c.packedReshape(t, o), p.push(t), a = c.texData.get(t.dataId), r.shape = o
                }
                return {shape: t.shape, texData: a, isUniform: !1}
            }));
            this.uploadToGPU(s.dataId);
            var f, x = {shape: s.shape, texData: u, isUniform: !1}, v = function (e, t, a) {
                var r = "";
                t.concat(a).forEach((function (t) {
                    var o = null != t.texData && null != t.texData.slice && t.texData.slice.flatOffset > 0;
                    if (e.enableShapeUniforms && !t.isUniform) {
                        var i = t.texData.texShape, c = _e(e.packedInputs, t.shape, i), s = c.useSqueezeShape,
                            u = c.uniformShape, l = c.keptDims, d = "", p = "", h = "";
                        if (1 === u.length && e.packedInputs) {
                            var f = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)];
                            d = "".concat(f[0] > 1, "_").concat(f[1] > 1)
                        } else if (2 !== u.length || e.packedInputs) {
                            if (u.length > 2 && !e.packedInputs) {
                                var x = n.util.computeStrides(u);
                                h = "".concat(x[0] === i[1], "_").concat(x[x.length - 1] === i[1])
                            }
                        } else p = "".concat(u[0] > 1, "_").concat(u[1] > 1);
                        var v = t.shape.length, g = 2 === u.length && n.util.arraysEqual(t.shape, i),
                            m = 1 === n.util.sizeFromShape(t.shape),
                            b = n.backend_util.getBroadcastDims(t.shape, a.shape),
                            C = !e.packedInputs && v === a.shape.length && n.util.arraysEqual(i, a.texData.texShape),
                            y = e.packedInputs || u.length > 2 ? "" : "".concat(i[0] > 1, "_").concat(i[1] > 1);
                        r += "".concat(v, "_").concat(C, "_").concat(s ? l : "", "_").concat(u.length, "_").concat(m, "_").concat(b, "_").concat(g, "_").concat(d, "_").concat(p, "_").concat(h, "_").concat(y, "_").concat(o)
                    } else {
                        var w = t.isUniform ? "uniform" : t.texData.texShape;
                        r += "".concat(t.shape, "_").concat(w, "_").concat(o)
                    }
                }));
                var o = e.userCode, i = e.constructor.name;
                return i + "_" + r + "_" + o + "".concat(n.env().getNumber("WEBGL_VERSION"))
            }(e, h, x), g = this.getAndSaveBinary(v, (function () {
                return function (e, t, a, r) {
                    var o = a.map((function (e, n) {
                        var a = {
                            logicalShape: e.shape,
                            texShape: e.isUniform ? null : e.texData.texShape,
                            isUniform: e.isUniform,
                            isPacked: !e.isUniform && e.texData.isPacked,
                            flatOffset: null
                        };
                        return null != e.texData && null != e.texData.slice && e.texData.slice.flatOffset > 0 && (a.flatOffset = e.texData.slice.flatOffset), {
                            name: t.variableNames[n],
                            shapeInfo: a
                        }
                    })), i = o.map((function (e) {
                        return e.shapeInfo
                    })), c = {
                        logicalShape: r.shape,
                        texShape: r.texData.texShape,
                        isUniform: !1,
                        isPacked: r.texData.isPacked,
                        flatOffset: null
                    }, s = ye(o, c, t), u = R(e.gl, s), l = e.createProgram(u);
                    return n.env().get("ENGINE_COMPILE_ONLY") ? {
                        program: t,
                        fragmentShader: u,
                        source: s,
                        webGLProgram: l,
                        inShapeInfos: i,
                        outShapeInfo: c,
                        variablesLocations: null,
                        customUniformLocations: null,
                        infLoc: null,
                        nanLoc: null,
                        outShapeLocation: null,
                        outShapeStridesLocation: null,
                        outTexShapeLocation: null
                    } : (e.buildVao(l), Object.assign({
                        program: t,
                        fragmentShader: u,
                        source: s,
                        webGLProgram: l,
                        inShapeInfos: i,
                        outShapeInfo: c
                    }, De(e, t, l)))
                }(c.gpgpu, e, h, x)
            })), b = null != this.activeTimers;
            b && (f = this.startTimer()), n.env().get("ENGINE_COMPILE_ONLY") || function (e, t, a, r, o) {
                t.program.enableShapeUniforms || (Pe(t.inShapeInfos, a), Pe([t.outShapeInfo], [r]));
                var i = r.texData.texture, c = r.texData.texShape;
                r.texData.isPacked ? e.setOutputPackedMatrixTexture(i.texture, c[0], c[1]) : e.setOutputMatrixTexture(i.texture, c[0], c[1]), e.setProgram(t.webGLProgram), e.bindVertexArray(t.webGLProgram.vao), 1 === n.env().getNumber("WEBGL_VERSION") && null !== t.infLoc && e.gl.uniform1f(t.infLoc, 1 / 0), null !== t.nanLoc && e.gl.uniform1f(t.nanLoc, NaN);
                for (var s = 0; s < a.length; ++s) {
                    var u = a[s], l = t.variablesLocations[s], d = l.uniform, p = l.offset, h = l.shape, f = l.texShape;
                    if (h) {
                        var x = _e(t.program.packedInputs, u.shape, u.texData.texShape).uniformShape;
                        switch (x.length) {
                            case 1:
                                e.gl.uniform1iv(h, new Int32Array(x));
                                break;
                            case 2:
                                e.gl.uniform2iv(h, new Int32Array(x));
                                break;
                            case 3:
                                e.gl.uniform3iv(h, new Int32Array(x));
                                break;
                            case 4:
                                e.gl.uniform4iv(h, new Int32Array(x))
                        }
                    }
                    if (f && e.gl.uniform2i(f, u.texData.texShape[0], u.texData.texShape[1]), null != d) if (u.isUniform) if (n.util.sizeFromShape(u.shape) < 2) e.gl.uniform1f(d, u.uniformValues[0]); else {
                        var v = u.uniformValues;
                        v instanceof Float32Array || (v = new Float32Array(v)), e.gl.uniform1fv(d, v)
                    } else null != u.texData.slice && null != p && e.gl.uniform1i(p, u.texData.slice.flatOffset), e.setInputMatrixTexture(u.texData.texture.texture, d, s)
                }
                var g = t.outShapeLocation;
                if (g) switch (r.shape.length) {
                    case 1:
                        e.gl.uniform1iv(g, new Int32Array(r.shape));
                        break;
                    case 2:
                        e.gl.uniform2iv(g, new Int32Array(r.shape));
                        break;
                    case 3:
                        e.gl.uniform3iv(g, new Int32Array(r.shape));
                        break;
                    case 4:
                        e.gl.uniform4iv(g, new Int32Array(r.shape))
                }
                if (t.outShapeStridesLocation) {
                    var m = n.util.computeStrides(r.shape);
                    switch (r.shape.length) {
                        case 2:
                            e.gl.uniform1iv(t.outShapeStridesLocation, new Int32Array(m));
                            break;
                        case 3:
                            e.gl.uniform2iv(t.outShapeStridesLocation, new Int32Array(m));
                            break;
                        case 4:
                            e.gl.uniform3iv(t.outShapeStridesLocation, new Int32Array(m))
                    }
                }
                if (t.outTexShapeLocation && e.gl.uniform2i(t.outTexShapeLocation, r.texData.texShape[0], r.texData.texShape[1]), t.program.customUniforms && o) for (s = 0; s < t.program.customUniforms.length; ++s) {
                    var b = t.program.customUniforms[s], C = t.customUniformLocations[s], y = o[s];
                    if ("float" === b.type) e.gl.uniform1fv(C, y); else if ("vec2" === b.type) e.gl.uniform2fv(C, y); else if ("vec3" === b.type) e.gl.uniform3fv(C, y); else if ("vec4" === b.type) e.gl.uniform4fv(C, y); else if ("int" === b.type) e.gl.uniform1iv(C, y); else if ("ivec2" === b.type) e.gl.uniform2iv(C, y); else if ("ivec3" === b.type) e.gl.uniform3iv(C, y); else {
                        if ("ivec4" !== b.type) throw Error("uniform type ".concat(b.type, " is not supported yet."));
                        e.gl.uniform4iv(C, y)
                    }
                }
                e.executeProgram()
            }(this.gpgpu, g, h, x, r), p.forEach((function (e) {
                return c.disposeIntermediateTensorInfo(e)
            })), b && (f = this.endTimer(f), this.activeTimers.push({
                name: e.constructor.name,
                query: this.getQueryTime(f)
            }));
            var C = n.env().getNumber("WEBGL_FLUSH_THRESHOLD");
            if (C > 0) {
                var y = n.util.now();
                y - this.lastGlFlushTime > C && (this.gpgpu.gl.flush(), this.lastGlFlushTime = y)
            }
            if (!n.env().getBool("WEBGL_LAZILY_UNPACK") && u.isPacked && !1 === o) {
                var w = this.unpackTensor(s);
                return this.disposeIntermediateTensorInfo(s), w
            }
            return s
        }, t.prototype.compileAndRun = function (e, n, t, a, r) {
            return void 0 === r && (r = !1), t = t || n[0].dtype, this.runWebGLProgram(e, n, t, a, r)
        }, t.prototype.getAndSaveBinary = function (e, n) {
            return e in this.binaryCache || (this.binaryCache[e] = n()), this.binaryCache[e]
        }, t.prototype.getTextureManager = function () {
            return this.textureManager
        }, t.prototype.dispose = function () {
            var e = this;
            if (!this.disposed) {
                if (!n.env().getBool("IS_TEST")) Object.keys(this.binaryCache).forEach((function (n) {
                    e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram), delete e.binaryCache[n]
                }));
                this.textureManager.dispose(), null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = !0
            }
        }, t.prototype.floatPrecision = function () {
            var e = this;
            return null == this.floatPrecisionValue && (this.floatPrecisionValue = n.tidy((function () {
                if (!n.env().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
                    var t = n.env().getBool("DEBUG");
                    n.env().set("DEBUG", !1);
                    var a = e.abs(n.scalar(1e-8)).dataSync()[0];
                    if (n.env().set("DEBUG", t), a > 0) return 32
                }
                return 16
            }))), this.floatPrecisionValue
        }, t.prototype.epsilon = function () {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4
        }, t.prototype.uploadToGPU = function (e) {
            var t, a = this.texData.get(e), r = a.shape, o = a.dtype, i = a.values, c = a.texture, u = a.usage,
                l = a.isPacked;
            if (null == c) {
                var p, h = null != this.activeTimers;
                h && (p = n.util.now());
                var f = a.texShape;
                if (null == f && (f = $(r, l), a.texShape = f), null != i) {
                    var x = J(r), v = void 0, g = f[1], m = f[0],
                        C = i instanceof Uint8Array || i instanceof Uint8ClampedArray;
                    !l && C || (g = (t = s(b(f[0], f[1]), 2))[0], m = t[1]), v = l ? new ze(x, C) : new Ge(x, C);
                    var y = C ? [m, g] : f, w = this.makeTensorInfo(y, o), I = this.texData.get(w.dataId);
                    I.usage = C ? d.PIXELS : d.UPLOAD, I.texShape = y, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId), g, m, i);
                    var S = [[m, g]], k = this.runWebGLProgram(v, [w], o, S, !0), R = this.texData.get(k.dataId);
                    a.texShape = R.texShape, a.isPacked = R.isPacked, a.usage = R.usage, n.env().get("ENGINE_COMPILE_ONLY") ? this.disposeData(k.dataId) : (a.texture = R.texture, a.values = null, this.texData.delete(k.dataId)), this.disposeIntermediateTensorInfo(w), h && (this.uploadWaitMs += n.util.now() - p)
                } else {
                    var T = this.acquireTexture(f, u, o, l);
                    a.texture = T
                }
            }
        }, t.prototype.convertAndCacheOnCPU = function (e, n) {
            var t = this.texData.get(e), a = t.dtype;
            return null != n && (t.values = function (e, n) {
                if ("float32" === n || "complex64" === n) return e;
                if ("int32" === n || "bool" === n) {
                    for (var t = "int32" === n ? new Int32Array(e.length) : new Uint8Array(e.length), a = 0; a < t.length; ++a) t[a] = Math.round(e[a]);
                    return t
                }
                throw new Error("Unknown dtype ".concat(n))
            }(n, a)), t.values
        }, t.prototype.acquireTexture = function (e, n, t, a) {
            if (this.numBytesInGPU += this.computeBytes(e, t), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
                var r = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
                this.warnedAboutMemory = !0, console.warn("High memory usage in GPU: ".concat(r, " MB, ") + "most likely due to a memory leak")
            }
            return this.textureManager.acquireTexture(e, n, a)
        }, t.prototype.computeBytes = function (e, t) {
            return e[0] * e[1] * n.util.bytesPerElement(t)
        }, t.prototype.checkCompileCompletion = function () {
            var e, n;
            try {
                for (var t = c(Object.entries(this.binaryCache)), a = t.next(); !a.done; a = t.next()) {
                    var r = s(a.value, 2)[1];
                    this.checkCompletion_(r)
                }
            } catch (n) {
                e = {error: n}
            } finally {
                try {
                    a && !a.done && (n = t.return) && n.call(t)
                } finally {
                    if (e) throw e.error
                }
            }
        }, t.prototype.checkCompileCompletionAsync = function () {
            return o(this, void 0, void 0, (function () {
                var e, n, t, a, r, o, u, l, d, p, h, f, x, v = this;
                return i(this, (function (i) {
                    if (e = [], this.gpgpu.parallelCompilationExtension) {
                        try {
                            for (n = c(Object.entries(this.binaryCache)), t = n.next(); !t.done; t = n.next()) a = s(t.value, 2), d = a[1], e.push(this.checkCompletionAsync_(d))
                        } catch (e) {
                            p = {error: e}
                        } finally {
                            try {
                                t && !t.done && (h = n.return) && h.call(n)
                            } finally {
                                if (p) throw p.error
                            }
                        }
                        return [2, Promise.all(e)]
                    }
                    r = function (n) {
                        var t = new Promise((function (e) {
                            try {
                                v.checkCompletion_(n), e(!0)
                            } catch (e) {
                                throw e
                            }
                        }));
                        e.push(t)
                    };
                    try {
                        for (o = c(Object.entries(this.binaryCache)), u = o.next(); !u.done; u = o.next()) l = s(u.value, 2), d = l[1], r(d)
                    } catch (e) {
                        f = {error: e}
                    } finally {
                        try {
                            u && !u.done && (x = o.return) && x.call(o)
                        } finally {
                            if (f) throw f.error
                        }
                    }
                    return [2, Promise.all(e)]
                }))
            }))
        }, t.prototype.checkCompletionAsync_ = function (e) {
            return o(this, void 0, void 0, (function () {
                return i(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return this.gpgpu.gl.getProgramParameter(e.webGLProgram, this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR) ? [2, this.checkCompletion_(e)] : [3, 1];
                        case 1:
                            return [4, n.nextFrame()];
                        case 2:
                            return t.sent(), [2, this.checkCompletionAsync_(e)]
                    }
                }))
            }))
        }, t.prototype.checkCompletion_ = function (e) {
            if (!1 === this.gpgpu.gl.getProgramParameter(e.webGLProgram, this.gpgpu.gl.LINK_STATUS)) {
                if (console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)), !1 === this.gpgpu.gl.getShaderParameter(e.fragmentShader, this.gpgpu.gl.COMPILE_STATUS)) throw A(e.source, this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)), new Error("Failed to compile fragment shader.");
                throw new Error("Failed to link vertex and fragment shaders.")
            }
            return !0
        }, t.prototype.getUniformLocations = function () {
            var e, n;
            try {
                for (var t = c(Object.values(this.binaryCache)), a = t.next(); !a.done; a = t.next()) {
                    var r = a.value;
                    this.gpgpu.buildVao(r.webGLProgram);
                    var o = De(this.gpgpu, r.program, r.webGLProgram), i = o.variablesLocations,
                        s = o.customUniformLocations, u = o.infLoc, l = o.nanLoc, d = o.outShapeLocation,
                        p = o.outShapeStridesLocation, h = o.outTexShapeLocation;
                    r.variablesLocations = i, r.customUniformLocations = s, r.infLoc = u, r.nanLoc = l, r.outShapeLocation = d, r.outShapeStridesLocation = p, r.outTexShapeLocation = h
                }
            } catch (n) {
                e = {error: n}
            } finally {
                try {
                    a && !a.done && (n = t.return) && n.call(t)
                } finally {
                    if (e) throw e.error
                }
            }
        }, t.prototype.createTensorFromGPUData = function (e, t, a) {
            e.channels = e.channels || "RGBA";
            var r = e.texture, o = e.height, i = e.width, c = e.channels, s = n.engine().backend;
            if (!s.gpgpu.gl.isTexture(r)) throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");
            var u = s.writeTexture(r, t, a, o, i, c);
            return n.engine().makeTensorFromDataId(u, t, a, s)
        }, t
    }(n.KernelBackend);
    sa.nextDataId = 0;

    function ua() {
        n.env().set("WEBGL_FORCE_F16_TEXTURES", !0)
    }

    n.device_util.isBrowser() && n.registerBackend("webgl", (function () {
        return new sa
    }), 2);
    var la = {forceHalfFloat: ua}, da = function (e, t, a) {
            this.variableNames = ["A", "B"], this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, a), this.enableShapeUniforms = Le(this.outputShape.length), this.userCode = "\n      float binaryOperation(float a, float b) {\n        ".concat(e, "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ")
        },
        pa = "\n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n",
        ha = function (e, t, a, r) {
            void 0 === r && (r = !1), this.variableNames = ["A", "B"], this.supportsBroadcasting = !0, this.packedInputs = !0, this.packedOutput = !0, this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, a);
            var o = this.outputShape.length;
            this.enableShapeUniforms = Le(o);
            var i = "";
            if (r) if (0 === o || 1 === n.util.sizeFromShape(this.outputShape)) i = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        "; else {
                var c = Ae(o);
                if (i = "\n          ".concat(c, " coords = getOutputCoords();\n        "), 1 === o) this.enableShapeUniforms ? i += "\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          " : i += "\n            result.y = (coords + 1) >= ".concat(this.outputShape[0], " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          "); else {
                    var s = jt("coords", o);
                    this.enableShapeUniforms ? i += "\n            bool nextRowOutOfBounds =\n              (".concat(s[o - 2], " + 1) >= outShape[").concat(o, " - 2];\n            bool nextColOutOfBounds =\n              (").concat(s[o - 1], " + 1) >= outShape[").concat(o, " - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ") : i += "\n            bool nextRowOutOfBounds =\n              (".concat(s[o - 2], " + 1) >= ").concat(this.outputShape[o - 2], ";\n            bool nextColOutOfBounds =\n              (").concat(s[o - 1], " + 1) >= ").concat(this.outputShape[o - 1], ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ")
                }
            }
            this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ".concat(e, "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ").concat(i, "\n\n        setOutput(result);\n      }\n    ")
        };

    function fa(e) {
        var n = e.inputs, t = e.backend, a = n.x;
        return t.incRef(a.dataId), {dataId: a.dataId, shape: a.shape, dtype: a.dtype}
    }

    var xa = {kernelName: n.Identity, backendName: "webgl", kernelFunc: fa};

    function va(e) {
        var n = e.inputs, t = e.backend, a = n.real, r = n.imag, o = t.makeTensorInfo(a.shape, "complex64"),
            i = t.texData.get(o.dataId), c = fa({inputs: {x: a}, backend: t}), s = fa({inputs: {x: r}, backend: t});
        return i.complexTensorInfos = {real: c, imag: s}, o
    }

    var ga = {kernelName: n.Complex, backendName: "webgl", kernelFunc: va}, ma = "return (a < 0.) ? b * a : a;",
        ba = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
    var Ca = {
            kernelName: n.LeakyRelu, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.alpha,
                    c = a.makeTensorInfo([], "float32", n.util.createScalarValue(i, "float32")),
                    s = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new ha(ba, o.shape, c.shape) : new da(ma, o.shape, c.shape),
                    u = a.runWebGLProgram(s, [o, c], "float32");
                return a.disposeIntermediateTensorInfo(c), u
            }
        }, ya = "return (a < 0.) ? b * a : a;",
        wa = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
    var Ia = {
        kernelName: n.Prelu, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = t.x, o = t.alpha,
                i = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new ha(wa, r.shape, o.shape) : new da(ya, r.shape, o.shape);
            return a.runWebGLProgram(i, [r, o], "float32")
        }
    };

    function Sa(e) {
        var t = e.opSnippet, a = e.packedOpSnippet, r = e.cpuKernelImpl, o = e.dtype;
        return function (e) {
            var i, c = e.inputs, s = e.backend, u = c.x, l = s, d = o || u.dtype;
            if (l.shouldExecuteOnCPU([u]) && null != r) {
                var p = l.texData.get(u.dataId), h = r(p.values, d);
                return l.makeTensorInfo(u.shape, d, h)
            }
            return i = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") && null != a ? new aa(u.shape, a) : new $t(u.shape, t), l.runWebGLProgram(i, [u], d)
        }
    }

    function ka(e) {
        var t = e.opSnippet, a = e.packedOpSnippet, r = e.checkOutOfBounds, o = void 0 !== r && r,
            i = e.supportsComplex, c = void 0 !== i && i, u = e.cpuKernelImpl, l = e.dtype;
        return function (e) {
            var r = e.inputs, i = e.backend, d = r.a, p = r.b, h = i;
            if (c && "complex64" === d.dtype) {
                var f = h.texData.get(d.dataId), x = h.texData.get(p.dataId),
                    v = s([[f.complexTensorInfos.real, x.complexTensorInfos.real], [f.complexTensorInfos.imag, x.complexTensorInfos.imag]].map((function (e) {
                        var a = s(e, 2), r = a[0], o = a[1], i = {dataId: r.dataId, dtype: r.dtype, shape: d.shape},
                            c = {dataId: o.dataId, dtype: o.dtype, shape: p.shape}, u = new da(t, d.shape, p.shape);
                        return h.runWebGLProgram(u, [i, c], n.upcastType(r.dtype, o.dtype))
                    })), 2), g = v[0], m = v[1], b = va({inputs: {real: g, imag: m}, backend: h});
                return h.disposeIntermediateTensorInfo(g), h.disposeIntermediateTensorInfo(m), b
            }
            var C, y = l || n.upcastType(d.dtype, p.dtype);
            if (("string" === d.dtype || "string" === p.dtype || h.shouldExecuteOnCPU([d, p])) && null != u) {
                var w = h.texData.get(d.dataId).values, I = h.texData.get(p.dataId).values,
                    S = "string" === d.dtype ? n.backend_util.fromUint8ToStringArray(w) : w,
                    k = "string" === d.dtype ? n.backend_util.fromUint8ToStringArray(I) : I,
                    R = s(u(d.shape, p.shape, S, k, y), 2), T = R[0], N = R[1], E = h.makeTensorInfo(N, y);
                return h.texData.get(E.dataId).values = T, E
            }
            return C = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") && null != a ? new ha(a, d.shape, p.shape, o) : new da(t, d.shape, p.shape), h.runWebGLProgram(C, [d, p], y)
        }
    }

    function Ra(e, n) {
        if (void 0 === n && (n = !1), "linear" === e) return "return x;";
        if ("relu" === e) return n ? "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n" : "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n";
        if ("elu" === e) return n ? "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n" : "return (x >= 0.0) ? x : (exp(x) - 1.0);";
        if ("relu6" === e) return n ? "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n" : "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
        if ("prelu" === e) return n ? wa : ya;
        if ("leakyrelu" === e) return n ? ba : ma;
        if ("sigmoid" === e) return "return 1.0 / (1.0 + exp(-1.0 * x));";
        throw new Error("Activation ".concat(e, " has not been implemented for the WebGL backend."))
    }

    var Ta = function (e, n, t, a, r, o, i, c, s) {
            void 0 === a && (a = !1), void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === i && (i = null), void 0 === c && (c = !1), void 0 === s && (s = !1), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.enableShapeUniforms = Le(this.outputShape.length);
            var u = a ? e[1] : e[2], l = Math.ceil(u / 2), d = a ? "i * 2, rc.y" : "rc.y, i * 2",
                p = r ? "rc.z, i * 2" : "i * 2, rc.z", h = a ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"],
                f = r ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], x = "", v = "";
            i && (x = c ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ".concat(i, "\n        }") : s ? "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ".concat(i, "\n        }") : "vec4 activation(vec4 x) {\n          ".concat(i, "\n        }"), v = "result = activation(result);");
            var g = o ? "result += getBiasAtOutCoords();" : "";
            o && this.variableNames.push("bias"), c && this.variableNames.push("preluActivationWeights"), s && this.variableNames.push("leakyreluAlpha");
            var m = "rc.x", b = "rc.x";
            e[0] < n[0] ? m = "imod(rc.x, ".concat(e[0], ")") : n[0] < e[0] && (b = "imod(rc.x, ".concat(n[0], ")")), this.userCode = "\n      ".concat(x, "\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ").concat(l, ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        int batchA = ").concat(m, ";\n        int batchB = ").concat(b, ";\n        for (int i = 0; i < ").concat(l, "; i++) {\n          vec4 a = getMatrixA(batchA, ").concat(d, ");\n          vec4 b = getMatrixB(batchB, ").concat(p, ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (").concat(h[0], " * ").concat(f[0], ");\n          result += (").concat(h[1], " * ").concat(f[1], ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ").concat(g, "\n\n        ").concat(v, "\n\n        setOutput(result);\n      }\n    ")
        }, Na = "return areal * breal - aimag * bimag;", Ea = "return areal * bimag + aimag * breal;",
        Aa = function (e, t, a) {
            this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, a), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ".concat(e, "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ")
        }, _a = "return a * b;";

    function Oa(e) {
        var t, a = e.inputs, r = e.backend, o = a.a, i = a.b, c = n.backend_util.upcastType(o.dtype, i.dtype);
        if ("complex64" === o.dtype) {
            var u = r.texData.get(o.dataId), l = r.texData.get(i.dataId), d = new Aa(Na, o.shape, i.shape),
                p = new Aa(Ea, o.shape, i.shape), h = [{
                    dataId: u.complexTensorInfos.real.dataId,
                    dtype: u.complexTensorInfos.real.dtype,
                    shape: o.shape
                }, {
                    dataId: u.complexTensorInfos.imag.dataId,
                    dtype: u.complexTensorInfos.imag.dtype,
                    shape: o.shape
                }, {
                    dataId: l.complexTensorInfos.real.dataId,
                    dtype: l.complexTensorInfos.real.dtype,
                    shape: i.shape
                }, {dataId: l.complexTensorInfos.imag.dataId, dtype: l.complexTensorInfos.imag.dtype, shape: i.shape}],
                f = r.runWebGLProgram(d, h, "float32"), x = r.runWebGLProgram(p, h, "float32"),
                v = va({inputs: {real: f, imag: x}, backend: r});
            return r.disposeIntermediateTensorInfo(f), r.disposeIntermediateTensorInfo(x), v
        }
        if (r.shouldExecuteOnCPU([o, i])) {
            u = r.texData.get(o.dataId), l = r.texData.get(i.dataId);
            var g = s(mt(o.shape, i.shape, u.values, l.values, c), 2), m = g[0], b = g[1], C = r.makeTensorInfo(b, c);
            return r.texData.get(C.dataId).values = m, C
        }
        return t = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new ha(_a, o.shape, i.shape) : new da(_a, o.shape, i.shape), r.runWebGLProgram(t, [o, i], c)
    }

    var Fa = {kernelName: n.Multiply, backendName: "webgl", kernelFunc: Oa};

    function Da(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.shape, c = a, l = n.util.sizeFromShape(o.shape),
            d = n.util.inferFromImplicitShape(i, l), p = n.util.sizeFromShape(d);
        n.util.assert(l === p, (function () {
            return "The new shape (".concat(d, ") has ").concat(p, " elements and the old ") + "shape (".concat(o.shape, ") has ").concat(l, " elements. The new shape and old ") + "shape must have the same number of elements."
        }));
        var h = c.texData.get(o.dataId);
        return !h.isPacked || ne(o.shape, d) || null !== h.texture && ne(h.shape, d) ? (c.incRef(o.dataId), {
            dataId: o.dataId,
            shape: d,
            dtype: o.dtype
        }) : function (e, n, t) {
            var a = u([Q(e.shape)], s(Z(e.shape)), !1), r = {dtype: e.dtype, shape: a, dataId: e.dataId},
                o = u([Q(n)], s(Z(n)), !1), i = new qt(o, a), c = [a], l = t.runWebGLProgram(i, [r], e.dtype, c, !0);
            return {dataId: l.dataId, shape: n, dtype: l.dtype}
        }(o, d, c)
    }

    var Pa = {kernelName: n.Reshape, backendName: "webgl", kernelFunc: Da}, La = function (e, t) {
        this.variableNames = ["x"];
        var a = e.windowSize, r = e.batchSize, o = e.inSize, i = e.outSize;
        this.outputShape = [r, i];
        var c = 4 * Math.floor(a / 4), s = a % 4, u = "sumValue += dot(values, ones);";
        if (null != t) {
            var l = 1 / t;
            u = "sumValue += dot(values * ".concat(n.util.isInt(l) ? l.toPrecision(2) : l, ", ones);")
        }
        var d = "";
        o % a > 0 && (d = "\n        if (inIdx < 0 || inIdx >= ".concat(o, ") {\n          return 0.0;\n        }\n      ")), this.userCode = "\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ".concat(d, "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ").concat(a, ";\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ").concat(c, "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ").concat(u, "\n        }\n\n        int inIdx = inOffset + ").concat(c, ";\n        if (").concat(1 === s, ") {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ").concat(u, "\n        } else if (").concat(2 === s, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ").concat(u, "\n        } else if (").concat(3 === s, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ").concat(u, "\n        }\n        setOutput(sumValue);\n      }\n    ")
    }, Ba = function (e, n) {
        this.variableNames = ["x"];
        var t = e.windowSize, a = e.batchSize, r = e.inSize, o = e.outSize;
        this.outputShape = [a, o];
        var i = "0.0", c = "";
        "prod" === n ? i = "1.0" : "min" === n ? (i = "1.0 / 1e-20", c = "min") : "max" === n && (i = "-1.0 / 1e-20", c = "max");
        var s = "".concat(n, "(").concat(n, "(").concat(n, "(") + "minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
        "sum" === n ? s = "sumValue" : "prod" === n ? s = "prodValue" : "all" === n ? s = "allValue" : "any" === n && (s = "anyValue");
        var u = 4 * Math.floor(t / 4), l = t % 4,
            d = "\n      if (".concat("sum" === n, ") {\n        sumValue += dot(values, ones);\n      } else if (").concat("prod" === n, ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ").concat(c, "(values, minMaxValue);\n        if (").concat("min" === n, " || ").concat("max" === n, ") {\n          minMaxValue = ").concat(c, "(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    "),
            p = "vec4";
        "all" === n ? (i = "1.0", d = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", p = "bvec4") : "any" === n && (i = "0.0", d = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", p = "bvec4");
        var h = "";
        r % t > 0 && (h = "\n        if (inIdx < 0 || inIdx >= ".concat(r, ") {\n          return initializationValue;\n        }\n      ")), this.userCode = "\n      const float initializationValue = ".concat(i, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ").concat(h, "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ").concat(t, ";\n\n        vec4 minMaxValue = vec4(").concat(i, ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ").concat(u, "; i += 4) {\n          int inIdx = inOffset + i;\n          ").concat(p, " values = ").concat(p, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ").concat(d, "\n        }\n\n        int inIdx = inOffset + ").concat(u, ";\n        if (").concat(1 === l, ") {\n          ").concat(p, " values = ").concat(p, "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ").concat(d, "\n        } else if (").concat(2 === l, ") {\n          ").concat(p, " values = ").concat(p, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ").concat(d, "\n        } else if (").concat(3 === l, ") {\n          ").concat(p, " values = ").concat(p, "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ").concat(d, "\n        }\n        setOutput(").concat(s, ");\n      }\n    ")
    };

    function Va(e, t, a, r) {
        for (var o = function (e) {
            for (var t = []; 0 === t.length || 1 !== t[t.length - 1].outSize;) {
                var a = t.length ? t[t.length - 1].outSize : e[1], r = n.backend_util.computeOptimalWindowSize(a);
                t.push({inSize: a, windowSize: r, outSize: Math.ceil(a / r)})
            }
            return t
        }(e.shape), i = e, c = 0; c < o.length; c++) {
            var s, u = o[c], l = u.inSize, d = u.windowSize, p = u.outSize, h = void 0;
            h = "mean" === a ? 0 === c ? new La({
                windowSize: d,
                inSize: l,
                batchSize: e.shape[0],
                outSize: p
            }, l) : new La({windowSize: d, inSize: l, batchSize: e.shape[0], outSize: p}) : new Ba({
                windowSize: d,
                inSize: l,
                batchSize: e.shape[0],
                outSize: p
            }, a), s = i, i = r.runWebGLProgram(h, [i], t), s.dataId !== e.dataId && r.disposeIntermediateTensorInfo(s)
        }
        return i
    }

    var Wa = function (e, n) {
        this.variableNames = ["A"];
        for (var t = new Array(e.length), a = 0; a < t.length; a++) t[a] = e[n[a]];
        this.outputShape = t, this.rank = t.length;
        var r = Ae(this.rank), o = function (e) {
            var n = e.length;
            if (n > 6) throw Error("Transpose for rank ".concat(n, " is not yet supported"));
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], a = new Array(n), r = 0; r < e.length; r++) a[e[r]] = t[r];
            return a.join()
        }(n);
        this.userCode = "\n    void main() {\n      ".concat(r, " resRC = getOutputCoords();\n      setOutput(getA(").concat(o, "));\n    }\n    ")
    };
    var Ua = function (e, n) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0;
        for (var t = new Array(e.length), a = 0; a < t.length; a++) t[a] = e[n[a]];
        if (this.outputShape = t, this.rank = t.length, this.rank > 6) throw Error("Packed transpose for rank ".concat(this.rank, " is not yet supported."));
        var r = Ae(this.rank), o = Ht("rc", this.rank), i = new Array(this.rank);
        for (a = 0; a < n.length; a++) i[n[a]] = o[a];
        var c = "vec2(".concat(i.slice(-2).join(), ")"),
            s = "++".concat(o[this.rank - 1], " < ").concat(t[this.rank - 1]),
            u = "getChannel(getA(".concat(i.join(), "), ").concat(c, ")");
        this.userCode = "\n    void main() {\n      ".concat(r, " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ").concat(u, ";\n      if(").concat(s, ") {\n        result[1] = ").concat(u, ";\n      }\n      --").concat(o[this.rank - 1], ";\n      if(++").concat(o[this.rank - 2], " < ").concat(t[this.rank - 2], ") {\n        result[2] = ").concat(u, ";\n        if(").concat(s, ") {\n          result[3] = ").concat(u, ";\n        }\n      }\n      setOutput(result);\n    }\n    ")
    };

    function Ma(e, t, a) {
        var r = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Ua(e.shape, t) : new Wa(e.shape, t);
        return a.runWebGLProgram(r, [e], e.dtype)
    }

    function Ga(e) {
        var t = e.inputs, a = e.backend, r = e.attrs;
        return function (e, t, a, r) {
            var o = t, i = e.shape.length, c = n.util.parseAxisParam(o, e.shape), u = c,
                l = n.backend_util.getAxesPermutation(u, i), d = null != l, p = e;
            d && (p = Ma(e, l, r), u = n.backend_util.getInnerMostAxes(u.length, i)), n.backend_util.assertAxesAreInnerMostDims("sum", u, i);
            var h = s(n.backend_util.computeOutAndReduceShapes(p.shape, u), 2), f = h[0], x = h[1], v = f;
            a && (v = n.backend_util.expandShapeToKeepDim(f, c));
            var g = n.util.sizeFromShape(x),
                m = Da({inputs: {x: p}, attrs: {shape: [n.util.sizeFromShape(e.shape) / g, g]}, backend: r}),
                b = Va(m, n.sumOutType(e.dtype), "sum", r), C = Da({inputs: {x: b}, attrs: {shape: v}, backend: r});
            return r.disposeIntermediateTensorInfo(m), r.disposeIntermediateTensorInfo(b), d && r.disposeIntermediateTensorInfo(p), C
        }(t.x, r.axis, r.keepDims, a)
    }

    var za = {kernelName: n.Sum, backendName: "webgl", kernelFunc: Ga};

    function Xa(e) {
        for (var n, t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.perm, c = a, s = o.shape.length, u = new Array(s), l = 0; l < u.length; l++) u[l] = o.shape[i[l]];
        if (c.shouldExecuteOnCPU([o])) {
            var d = c.texData.get(o.dataId).values, p = zt(d, o.shape, o.dtype, i, u);
            n = c.makeTensorInfo(u, o.dtype), c.texData.get(n.dataId).values = p
        } else n = Ma(o, i, c);
        return n
    }

    var Ha = {kernelName: n.Transpose, backendName: "webgl", kernelFunc: Xa};

    function ja(e) {
        var t, a, r = e.a, o = e.b, i = e.transposeA, s = e.transposeB, u = e.backend, l = e.bias,
            d = void 0 === l ? null : l, p = e.preluActivationWeights, h = void 0 === p ? null : p,
            f = e.leakyreluAlpha, x = void 0 === f ? 0 : f, v = e.activation, g = void 0 === v ? null : v,
            m = r.shape.length, b = o.shape.length, C = i ? r.shape[m - 2] : r.shape[m - 1],
            y = s ? o.shape[b - 1] : o.shape[b - 2], w = i ? r.shape[m - 1] : r.shape[m - 2],
            I = s ? o.shape[b - 2] : o.shape[b - 1], S = r.shape.slice(0, -2), k = o.shape.slice(0, -2),
            R = n.util.sizeFromShape(S), T = n.util.sizeFromShape(k),
            N = n.broadcast_util.assertAndGetBroadcastShape(r.shape.slice(0, -2), o.shape.slice(0, -2)).concat([w, I]);
        n.util.assert(C === y, (function () {
            return "Error in matMul: inner shapes (".concat(C, ") and (") + "".concat(y, ") of Tensors with shapes ").concat(r.shape, " and ") + "".concat(o.shape, " and transposeA=").concat(i) + " and transposeB=".concat(s, " must match.")
        }));
        var E, A = i ? [R, C, w] : [R, w, C], _ = s ? [T, I, y] : [T, y, I],
            O = Da({inputs: {x: r}, backend: u, attrs: {shape: A}}),
            F = Da({inputs: {x: o}, backend: u, attrs: {shape: _}}), D = [O, F], P = Math.max(R, T),
            L = i ? O.shape[1] : O.shape[2], B = null != d, V = null != h, W = "leakyrelu" === g,
            U = null != g ? Ra(g, !0) : null;
        if ((1 === w || 1 === I) && L > 1e3 && !1 === (B || V || W || null != U)) {
            var M = O, G = F;
            i && (M = Xa({
                inputs: {x: O},
                backend: u,
                attrs: {perm: [0, 2, 1]}
            }), D.push(M)), s && (G = Xa({inputs: {x: F}, backend: u, attrs: {perm: [0, 2, 1]}}), D.push(G));
            var z = 1 === I, X = M;
            1 !== I && (X = Da({inputs: {x: M}, backend: u, attrs: {shape: [P, L, 1]}}), D.push(X));
            var H = 1 === I ? 2 : 1, j = G;
            z && (j = Da({inputs: {x: G}, backend: u, attrs: {shape: [P, 1, L]}}), D.push(j));
            var K = Oa({inputs: {a: X, b: j}, backend: u});
            E = Ga({inputs: {x: K}, backend: u, attrs: {axis: H, keepDims: !0}}), D.push(K)
        } else {
            var q = n.upcastType(r.dtype, o.dtype), Y = new Ta(A, _, [P, w, I], i, s, B, U, V, W), Q = [O, F];
            if (null != d && Q.push(d), V && Q.push(h), W) {
                var Z = u.makeTensorInfo([], "float32", n.util.createScalarValue(x, "float32"));
                Q.push(Z), D.push(Z)
            }
            E = u.runWebGLProgram(Y, Q, q)
        }
        var J = Da({inputs: {x: E}, backend: u, attrs: {shape: N}});
        D.push(E);
        try {
            for (var $ = c(D), ee = $.next(); !ee.done; ee = $.next()) {
                var ne = ee.value;
                u.disposeIntermediateTensorInfo(ne)
            }
        } catch (e) {
            t = {error: e}
        } finally {
            try {
                ee && !ee.done && (a = $.return) && a.call($)
            } finally {
                if (t) throw t.error
            }
        }
        return J
    }

    var Ka = {
        kernelName: n._FusedMatMul, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.a, o = n.b, i = n.bias, c = n.preluActivationWeights,
                s = a.transposeA, u = a.transposeB, l = a.activation;
            return ja({
                a: r,
                b: o,
                transposeA: s,
                transposeB: u,
                backend: t,
                bias: i,
                preluActivationWeights: c,
                leakyreluAlpha: a.leakyreluAlpha,
                activation: l
            })
        }
    }, qa = "return abs(x);";
    var Ya = {
            kernelName: n.Abs, backendName: "webgl", kernelFunc: function (e) {
                var t, a = e.inputs, r = e.backend, o = a.x;
                if (r.shouldExecuteOnCPU([o]) && "complex64" !== o.dtype) {
                    var i = r.texData.get(o.dataId), c = Et(i.values);
                    return r.makeTensorInfo(o.shape, o.dtype, c)
                }
                return t = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") ? new aa(o.shape, qa) : new $t(o.shape, qa), r.runWebGLProgram(t, [o], o.dtype)
            }
        }, Qa = Sa({opSnippet: "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n"}),
        Za = {kernelName: n.Acos, backendName: "webgl", kernelFunc: Qa},
        Ja = Sa({opSnippet: "if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));"}),
        $a = {kernelName: n.Acosh, backendName: "webgl", kernelFunc: Ja}, er = "return a + b;",
        nr = ka({opSnippet: er, packedOpSnippet: er, supportsComplex: !0, cpuKernelImpl: Qn}),
        tr = {kernelName: n.Add, backendName: "webgl", kernelFunc: nr}, ar = function (e, n) {
            this.outputShape = [], this.outputShape = e, this.variableNames = n.map((function (e, n) {
                return "T".concat(n)
            }));
            var t = [];
            this.variableNames.forEach((function (e) {
                t.push("float v".concat(e, " = get").concat(e, "AtOutCoords();"))
            }));
            var a = this.variableNames.map((function (e) {
                return "v".concat(e)
            })).join(" + ");
            this.userCode = "\n      void main() {\n        ".concat(t.join("\n        "), "\n\n        float result = ").concat(a, ";\n        setOutput(result);\n      }\n    ")
        }, rr = function (e, n) {
            this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = e, this.variableNames = n.map((function (e, n) {
                return "T".concat(n)
            }));
            var t = [];
            this.variableNames.forEach((function (e) {
                t.push("vec4 v".concat(e, " = get").concat(e, "AtOutCoords();"))
            }));
            var a = this.variableNames.map((function (e) {
                return "v".concat(e)
            })).join(" + ");
            this.userCode = "\n      void main() {\n        ".concat(t.join("\n        "), "\n\n        vec4 result = ").concat(a, ";\n        setOutput(result);\n      }\n    ")
        };
    var or = {
        kernelName: n.AddN, backendName: "webgl", kernelFunc: function e(t) {
            var a = t.inputs, r = t.backend, o = a;
            if (1 === o.length) return fa({inputs: {x: o[0]}, backend: r});
            if (o.length > n.env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
                var i = Math.floor(o.length / 2), c = e({inputs: o.slice(0, i), backend: r}),
                    s = e({inputs: o.slice(i), backend: r});
                return e({inputs: [c, s], backend: r})
            }
            var u = o.map((function (e) {
                return e.dtype
            })).reduce((function (e, t) {
                return n.upcastType(e, t)
            })), l = o.map((function (e) {
                return e.shape
            })), d = n.env().getBool("WEBGL_PACK") ? new rr(o[0].shape, l) : new ar(o[0].shape, l);
            return r.runWebGLProgram(d, o, u)
        }
    };
    var ir = {
        kernelName: n.All, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.axis, c = r.keepDims, u = o.shape.length,
                l = n.util.parseAxisParam(i, o.shape), d = l, p = n.backend_util.getAxesPermutation(d, u), h = o;
            null != p && (h = Xa({
                inputs: {x: o},
                backend: a,
                attrs: {perm: p}
            }), d = n.backend_util.getInnerMostAxes(d.length, u)), n.backend_util.assertAxesAreInnerMostDims("all", d, u);
            var f, x = s(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], g = x[1],
                m = Da({inputs: {x: h}, backend: a, attrs: {shape: [-1, n.util.sizeFromShape(g)]}}),
                b = Va(m, m.dtype, "all", a);
            return f = Da(c ? {
                inputs: {x: b},
                backend: a,
                attrs: {shape: n.backend_util.expandShapeToKeepDim(v, l)}
            } : {
                inputs: {x: b},
                backend: a,
                attrs: {shape: v}
            }), a.disposeIntermediateTensorInfo(m), a.disposeIntermediateTensorInfo(b), null != p && a.disposeIntermediateTensorInfo(h), f
        }
    };
    var cr = {
        kernelName: n.Any, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.axis, c = r.keepDims, u = o.shape.length,
                l = n.util.parseAxisParam(i, o.shape), d = l, p = n.backend_util.getAxesPermutation(d, u), h = o;
            null != p && (h = Xa({
                inputs: {x: o},
                backend: a,
                attrs: {perm: p}
            }), d = n.backend_util.getInnerMostAxes(d.length, u)), n.backend_util.assertAxesAreInnerMostDims("any", d, u);
            var f, x = s(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], g = x[1],
                m = Da({inputs: {x: h}, backend: a, attrs: {shape: [-1, n.util.sizeFromShape(g)]}}),
                b = Va(m, m.dtype, "any", a);
            return f = Da(c ? {
                inputs: {x: b},
                backend: a,
                attrs: {shape: n.backend_util.expandShapeToKeepDim(v, l)}
            } : {
                inputs: {x: b},
                backend: a,
                attrs: {shape: v}
            }), a.disposeIntermediateTensorInfo(m), a.disposeIntermediateTensorInfo(b), null != p && a.disposeIntermediateTensorInfo(h), f
        }
    }, sr = function (e, n, t) {
        this.variableNames = ["A"];
        var a = e.windowSize, r = e.batchSize, o = e.outSize;
        t || this.variableNames.push("bestIndicesA"), this.outputShape = [r, o];
        var i = "max" === n ? ">" : "<", c = t ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ".concat(a, ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ").concat(a, "; i++) {\n          int inIdx = ").concat(c, ";\n          float candidate = getA(batch, inIdx);\n          if (candidate ").concat(i, " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ")
    }, ur = function (e, t, a, r) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, n.util.assert(e.length > 2, (function () {
            return "Packed arg".concat(a.charAt(0).toUpperCase() + a.slice(1), " supports only inputs with rank above 2.")
        }));
        var o = e[e.length - 1], i = Math.ceil(o / t);
        this.outputShape = e.slice(0, -1), i > 1 && this.outputShape.push(i), r || this.variableNames.push("bestIndicesA");
        var c, s, u = this.outputShape, l = u.length, d = Ae(l), p = jt("coords", l);
        if (1 === i) {
            var h = Ae(s = l + 1);
            c = "\n        ".concat(h, " sourceLocR = ").concat(h, "(").concat(p.join(), ", 0);\n        ++").concat(p[l - 1], ";\n        ").concat(h, " sourceLocG = ").concat(h, "(").concat(p.join(), ", 0);\n        ++").concat(p[l - 2], ";\n        ").concat(h, " sourceLocA = ").concat(h, "(").concat(p.join(), ", 0);\n        --").concat(p[l - 1], ";\n        ").concat(h, " sourceLocB = ").concat(h, "(").concat(p.join(), ", 0);\n        --").concat(p[l - 2], ";")
        } else s = l, c = "\n        ".concat(d, " sourceLocR = coords;\n        ++").concat(p[l - 1], ";\n        ").concat(d, " sourceLocG = coords;\n        ++").concat(p[l - 2], ";\n        ").concat(d, " sourceLocA = coords;\n        --").concat(p[l - 1], ";\n        ").concat(d, " sourceLocB = coords;\n        --").concat(p[l - 2], ";");
        var f = ["x", "y", "z", "w", "u", "v"].slice(0, s), x = "." + f[s - 1], v = f.map((function (e) {
                return "int " + e
            })), g = jt("sourceLocR", s - 1).concat("inIdx.r"), m = jt("sourceLocG", s - 1).concat("inIdx.g"),
            b = jt("sourceLocB", s - 1).concat("inIdx.b"), C = jt("sourceLocA", s - 1).concat("inIdx.a"),
            y = "max" === a ? "greaterThan" : "lessThan",
            w = r ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(".concat(g.join(), "),\n                             getBestIndicesAChannel(").concat(m.join(), "),\n                             getBestIndicesAChannel(").concat(b.join(), "),\n                             getBestIndicesAChannel(").concat(C.join(), ")));"),
            I = "vec4(\n            getAChannel(".concat(g.join(), "),\n            hasNextCol ? getAChannel(").concat(m.join(), ") : 0.,\n            hasNextRow ? getAChannel(").concat(b.join(), ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(").concat(C.join(), ") : 0.)"),
            S = r ? "" : "\n      float getBestIndicesAChannel(".concat(v.join(), ") {\n        return getChannel(getBestIndicesA(").concat(f.join(), "),\n                                          vec2(").concat(f.slice(-2).join(), "));\n      }");
        this.userCode = "\n      float getAChannel(".concat(v.join(), ") {\n        return getChannel(getA(").concat(f.join(), "),\n                               vec2(").concat(f.slice(-2).join(), "));\n      }\n      ").concat(S, "\n      void main() {\n        ").concat(d, " coords = getOutputCoords();\n        bool hasNextCol = ").concat(p[l - 1], " < ").concat(u[l - 1] - 1, ";\n        bool hasNextRow = ").concat(p[l - 2], " < ").concat(u[l - 2] - 1, ";\n        ").concat(c, "\n        ivec4 srcIdx = ivec4(sourceLocR").concat(x, ", sourceLocG").concat(x, ",\n          sourceLocB").concat(x, ", sourceLocA").concat(x, ") * ").concat(t, ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ").concat(I, ";\n\n        for (int i = 0; i < ").concat(t, "; i++) {\n          inIdx = srcIdx;\n          ").concat(w, "\n          vec4 candidate = ").concat(I, ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(").concat(y, "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ")
    };

    function lr(e, t, a, r) {
        void 0 === r && (r = null);
        var o = t.shape[0], i = t.shape[1];
        null != r && (o = r.shape[0], i = r.shape[1]);
        var c = n.backend_util.computeOptimalWindowSize(i),
            s = {windowSize: c, inSize: i, batchSize: o, outSize: Math.ceil(i / c)}, u = new sr(s, a, null == r),
            l = [t];
        null != r && l.push(r);
        var d = e.runWebGLProgram(u, l, "int32");
        if (1 === d.shape[1]) return d;
        var p = lr(e, t, a, d);
        return e.disposeIntermediateTensorInfo(d), p
    }

    function dr(e, t, a, r) {
        void 0 === r && (r = null);
        var o = null != r ? r.shape : t.shape, i = o[o.length - 1], c = n.backend_util.computeOptimalWindowSize(i),
            s = new ur(o, c, a, null == r), u = null == r ? [t] : [t, r], l = e.runWebGLProgram(s, u, "int32");
        if (l.shape.length === t.shape.length) {
            var d = dr(e, t, a, l);
            return e.disposeIntermediateTensorInfo(l), d
        }
        return l
    }

    function pr(e, t, a, r) {
        var o = [a];
        if (n.backend_util.assertAxesAreInnerMostDims("arg" + r.charAt(0).toUpperCase() + r.slice(1), o, t.shape.length), !n.env().getBool("WEBGL_PACK_REDUCE") || t.shape.length <= 2) {
            var i = [], c = e.texData.get(t.dataId), u = t;
            null !== c && c.isPacked && (u = e.unpackTensor(t), i.push(u));
            var l = s(n.backend_util.computeOutAndReduceShapes(u.shape, o), 2), d = l[0], p = l[1],
                h = n.util.sizeFromShape(p), f = Da({inputs: {x: u}, backend: e, attrs: {shape: [-1, h]}});
            i.push(f);
            var x = lr(e, f, r);
            i.push(x);
            var v = Da({inputs: {x: x}, backend: e, attrs: {shape: d}});
            return i.forEach((function (n) {
                return e.disposeIntermediateTensorInfo(n)
            })), v
        }
        return dr(e, t, r)
    }

    var hr = {
        kernelName: n.ArgMax, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.axis, c = n.util.parseAxisParam(i, o.shape),
                s = n.backend_util.getAxesPermutation(c, o.shape.length), u = o, l = [];
            null != s && (u = Xa({
                inputs: {x: o},
                backend: a,
                attrs: {perm: s}
            }), l.push(u), c = n.backend_util.getInnerMostAxes(c.length, u.shape.length)), n.backend_util.assertAxesAreInnerMostDims("argMax", [c[0]], u.shape.length);
            var d = pr(a, u, c[0], "max");
            return l.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), d
        }
    };
    var fr = {
            kernelName: n.ArgMin, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.axis, c = n.util.parseAxisParam(i, o.shape),
                    s = n.backend_util.getAxesPermutation(c, o.shape.length), u = o, l = [];
                null != s && (u = Xa({
                    inputs: {x: o},
                    backend: a,
                    attrs: {perm: s}
                }), l.push(u), c = n.backend_util.getInnerMostAxes(c.length, u.shape.length)), n.backend_util.assertAxesAreInnerMostDims("argMin", [c[0]], u.shape.length);
                var d = pr(a, u, c[0], "min");
                return l.forEach((function (e) {
                    return a.disposeIntermediateTensorInfo(e)
                })), d
            }
        }, xr = Sa({opSnippet: "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n"}),
        vr = {kernelName: n.Asin, backendName: "webgl", kernelFunc: xr},
        gr = Sa({opSnippet: "if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));"}),
        mr = {kernelName: n.Asinh, backendName: "webgl", kernelFunc: gr},
        br = Sa({opSnippet: "if (isnan(x)) return x;\n  return atan(x);\n"}),
        Cr = {kernelName: n.Atan, backendName: "webgl", kernelFunc: br}, yr = ka({
            opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",
            packedOpSnippet: "\n  vec4 result = atan(a, b);\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"
        }), wr = {kernelName: n.Atan2, backendName: "webgl", kernelFunc: yr},
        Ir = Sa({opSnippet: "if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;"}),
        Sr = {kernelName: n.Atanh, backendName: "webgl", kernelFunc: Ir}, kr = function (e, n, t, a, r) {
            if (void 0 === a && (a = !1), void 0 === r && (r = !1), this.variableNames = ["x"], "avg" === n && t) throw new Error("Cannot compute positions for average pool.");
            var o = e.filterWidth, i = e.strideHeight, c = e.strideWidth, s = e.dilationHeight, u = e.dilationWidth,
                l = e.effectiveFilterHeight, d = e.effectiveFilterWidth, p = e.padInfo.top, h = e.padInfo.left;
            this.outputShape = e.outShape;
            var f = "avg" === n,
                x = "((batch  * ".concat(e.inHeight, " + xR) * ").concat(e.inWidth, " + xC) * ").concat(e.inChannels, " + d"),
                v = "(xR * ".concat(e.inWidth, " + xC) * ").concat(e.inChannels, " + d"), g = "0.0";
            if (f || (g = "-1.0 / 1e-20"), t) this.userCode = "\n        const ivec2 strides = ivec2(".concat(i, ", ").concat(c, ");\n        const ivec2 pads = ivec2(").concat(p, ", ").concat(h, ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ").concat(l, ";\n              wR += ").concat(s, ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(d, ";\n                wC += ").concat(u, ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ").concat(">=", " currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ").concat(a ? r ? x : v : "wR * ".concat(d, " + wC"), ";\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      "); else {
                var m = "".concat(n, "(").concat(n, "(").concat(n, "(") + "minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
                "avg" === n && (m = "avgValue / max(count, 1.0)");
                var b = 4 * Math.floor(o / 4), C = o % 4,
                    y = "\n      if (".concat(f, ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ").concat("max", "(values, minMaxValue);\n      }\n    ");
                this.userCode = "\n      const ivec2 strides = ivec2(".concat(i, ", ").concat(c, ");\n      const ivec2 pads = ivec2(").concat(p, ", ").concat(h, ");\n      const float initializationValue = ").concat(g, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(").concat(g, ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ").concat(l, ";\n            wR += ").concat(s, ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(b, "; wC += 4) {\n            int xC = xCCorner + wC * ").concat(u, ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(u, ", d),\n              getValue(batch, xR, xC + 2 * ").concat(u, ", d),\n              getValue(batch, xR, xC + 3 * ").concat(u, ", d)\n            );\n\n            ").concat(y, "\n          }\n\n          int xC = xCCorner + ").concat(b, ";\n          if (").concat(1 === C, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ").concat(y, "\n          } else if (").concat(2 === C, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(u, ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            ").concat(y, "\n          } else if (").concat(3 === C, ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ").concat(u, ", d),\n              getValue(batch, xR, xC + 2 * ").concat(u, ", d),\n              initializationValue\n            );\n\n            ").concat(y, "\n          }\n        }\n        setOutput(").concat(m, ");\n      }\n    ")
            }
        }, Rr = function (e, n, t, a, r) {
            if (void 0 === a && (a = !1), void 0 === r && (r = !1), this.variableNames = ["x"], "avg" === n && t) throw new Error("Cannot compute positions for average pool.");
            var o = e.filterWidth, i = e.strideDepth, c = e.strideHeight, s = e.strideWidth, u = e.dilationDepth,
                l = e.dilationHeight, d = e.dilationWidth, p = e.effectiveFilterDepth, h = e.effectiveFilterHeight,
                f = e.effectiveFilterWidth, x = e.padInfo.front, v = e.padInfo.top, g = e.padInfo.left;
            this.outputShape = e.outShape;
            var m = "avg" === n, b = "0.0";
            if (m || (b = "-1.0 / 1e-20"), t) this.userCode = "\n        const ivec3 strides =\n            ivec3(".concat(i, ", ").concat(c, ", ").concat(s, ");\n        const ivec3 pads = ivec3(").concat(x, ", ").concat(v, ", ").concat(g, ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ").concat(p, ";\n              wD += ").concat(u, ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ").concat(e.inDepth, ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < ").concat(h, ";\n                wR += ").concat(l, ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < ").concat(f, ";\n                  wC += ").concat(d, ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ").concat(">=", " currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ").concat(a ? r ? "(((batch * ".concat(e.inDepth, " + xD) * ").concat(e.inHeight, " + xR) * ").concat(e.inWidth, " + xC) * ").concat(e.inChannels, " + ch") : "((xD * ".concat(e.inHeight, " + xR) * ").concat(e.inWidth, " + xC) * ").concat(e.inChannels, " + ch") : "wD * ".concat(h, " * ").concat(f, " +\n                      wR * ").concat(f, " + wC"), ";\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      "); else {
                var C = "".concat(n, "(").concat(n, "(").concat(n, "(") + "minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
                "avg" === n && (C = "avgValue / max(count, 1.0)");
                var y = 4 * Math.floor(o / 4), w = o % 4,
                    I = "\n      if (".concat(m, ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ").concat("max", "(values, minMaxValue);\n      }\n    ");
                this.userCode = "\n      const ivec3 strides =\n        ivec3(".concat(i, ", ").concat(c, ", ").concat(s, ");\n      const ivec3 pads = ivec3(").concat(x, ", ").concat(v, ", ").concat(g, ");\n      const float initializationValue = ").concat(b, ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(").concat(b, ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ").concat(p, ";\n            wD += ").concat(u, ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ").concat(e.inDepth, ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < ").concat(h, ";\n            wR += ").concat(l, ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(y, "; wC += 4) {\n              int xC = xCCorner + wC * ").concat(d, ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(d, ", ch),\n                getValue(batch, xD, xR, xC + 2 * ").concat(d, ", ch),\n                getValue(batch, xD, xR, xC + 3 * ").concat(d, ", ch)\n              );\n\n              ").concat(I, "\n            }\n\n            int xC = xCCorner + ").concat(y, ";\n            if (").concat(1 === w, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ").concat(I, "\n            } else if (").concat(2 === w, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(d, ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ").concat(I, "\n            } else if (").concat(3 === w, ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ").concat(d, ", ch),\n                getValue(batch, xD, xR, xC + 2 * ").concat(d, ", ch),\n                initializationValue\n              );\n\n              ").concat(I, "\n            }\n          }\n        }\n        setOutput(").concat(C, ");\n      }\n    ")
            }
        };
    var Tr = {
        kernelName: n.AvgPool, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x;
            de(o, "avgPool");
            var i = r.filterSize, c = r.strides, s = r.pad, u = r.dimRoundingMode;
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(c, 1), (function () {
                return "Error in avgPool: Either strides or dilations must be 1. " + "Got strides ".concat(c, " and dilations '").concat(1, "'")
            }));
            var l = n.backend_util.computePool2DInfo(o.shape, i, c, 1, s, u);
            if (1 === l.filterWidth && 1 === l.filterHeight && n.util.arraysEqual(l.inShape, l.outShape)) return fa({
                inputs: {x: o},
                backend: a
            });
            var d = new kr(l, "avg", !1);
            return a.runWebGLProgram(d, [o], "float32")
        }
    };
    var Nr = {
        kernelName: n.AvgPool3D, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.filterSize, c = r.strides, s = r.pad,
                u = r.dimRoundingMode, l = r.dataFormat,
                d = n.backend_util.computePool3DInfo(o.shape, i, c, [1, 1, 1], s, u, l), p = new Rr(d, "avg", !1);
            return a.runWebGLProgram(p, [o], "float32")
        }
    }, Er = function (e) {
        this.variableNames = ["dy"], this.outputShape = e.inShape;
        var n = e.filterHeight, t = e.filterWidth, a = e.strideHeight, r = e.strideWidth, o = e.dilationHeight,
            i = e.dilationWidth, c = e.effectiveFilterHeight, s = e.effectiveFilterWidth, u = c - 1 - e.padInfo.top,
            l = s - 1 - e.padInfo.left, d = 1 / (n * t);
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(u, ", ").concat(l, ");\n      const float avgMultiplier = float(").concat(d, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(c, ";\n            wR += ").concat(o, ") {\n          float dyR = float(dyRCorner + wR) / ").concat(a, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ").concat(s, ";\n            wC+= ").concat(i, ") {\n            float dyC = float(dyCCorner + wC) / ").concat(r, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, Ar = function (e) {
        this.variableNames = ["dy"], this.outputShape = e.inShape;
        var n = e.filterDepth, t = e.filterHeight, a = e.filterWidth, r = e.strideDepth, o = e.strideHeight,
            i = e.strideWidth, c = e.dilationDepth, s = e.dilationHeight, u = e.dilationWidth,
            l = e.effectiveFilterDepth, d = e.effectiveFilterHeight, p = e.effectiveFilterWidth,
            h = l - 1 - e.padInfo.front, f = d - 1 - e.padInfo.top, x = p - 1 - e.padInfo.left, v = 1 / (n * t * a);
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(h, ", ").concat(f, ", ").concat(x, ");\n      const float avgMultiplier = float(").concat(v, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ").concat(l, ";\n            wD += ").concat(c, ") {\n          float dyD = float(dyDCorner + wD) / ").concat(r, ".0;\n\n          if (dyD < 0.0 || dyD >= ").concat(e.outDepth, ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ").concat(d, ";\n              wR += ").concat(s, ") {\n            float dyR = float(dyRCorner + wR) / ").concat(o, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ").concat(p, ";\n                wC += ").concat(u, ") {\n              float dyC = float(dyCCorner + wC) / ").concat(i, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    };
    var _r = {
        kernelName: n.AvgPool3DGrad, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.input, c = r.filterSize, s = r.strides,
                u = r.pad, l = r.dimRoundingMode, d = n.backend_util.computePool3DInfo(i.shape, c, s, [1, 1, 1], u, l),
                p = new Ar(d);
            return a.runWebGLProgram(p, [o], i.dtype)
        }
    };
    var Or = {
        kernelName: n.AvgPoolGrad, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.input, c = i;
            de([o, i], "avgPoolGrad");
            var s = r.filterSize, u = r.strides, l = r.pad, d = n.backend_util.computePool2DInfo(c.shape, s, u, 1, l),
                p = new Er(d);
            return a.runWebGLProgram(p, [o], c.dtype)
        }
    };
    var Fr = {
        kernelName: n.BatchMatMul, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs;
            return ja({a: n.a, b: n.b, transposeA: a.transposeA, transposeB: a.transposeB, backend: t})
        }
    }, Dr = function (e, t, a, r, o, i) {
        this.outputShape = [], this.variableNames = ["x", "mean", "variance"], n.backend_util.assertAndGetBroadcastShape(e, t), n.backend_util.assertAndGetBroadcastShape(e, a);
        var c = "0.0";
        null != r && (n.backend_util.assertAndGetBroadcastShape(e, r), this.variableNames.push("offset"), c = "getOffsetAtOutCoords()");
        var s = "1.0";
        null != o && (n.backend_util.assertAndGetBroadcastShape(e, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = e, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ".concat(c, ";\n        float scale = ").concat(s, ";\n        float inv = scale * inversesqrt(variance + float(").concat(i, "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ")
    }, Pr = function (e, t, a, r, o, i) {
        this.packedInputs = !0, this.packedOutput = !0, this.variableNames = ["x", "mean", "variance"], n.backend_util.assertAndGetBroadcastShape(e, t), n.backend_util.assertAndGetBroadcastShape(e, a);
        var c = "vec4(0.0)";
        null != r && (n.backend_util.assertAndGetBroadcastShape(e, r), this.variableNames.push("offset"), c = "getOffsetAtOutCoords()");
        var s = "vec4(1.0)";
        null != o && (n.backend_util.assertAndGetBroadcastShape(e, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = e, this.userCode = "\n      void main() {\n        vec4 offset = ".concat(c, ";\n        vec4 scale = ").concat(s, ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(").concat(i, "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ")
    }, Lr = {
        kernelName: n.FusedBatchNorm, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.mean, c = t.variance, s = t.offset,
                u = t.scale;
            n.util.assert(i.shape.length === c.shape.length, (function () {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            })), n.util.assert(null == s || i.shape.length === s.shape.length, (function () {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            })), n.util.assert(null == u || i.shape.length === u.shape.length, (function () {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            }));
            var l = r.varianceEpsilon;
            null == l && (l = .001);
            var d = [o, i, c], p = null;
            null != s && (p = s.shape, d.push(s));
            var h = null;
            null != u && (h = u.shape, d.push(u));
            var f = n.env().getBool("WEBGL_PACK_NORMALIZATION") ? new Pr(o.shape, i.shape, c.shape, p, h, l) : new Dr(o.shape, i.shape, c.shape, p, h, l);
            return a.runWebGLProgram(f, d, d[0].dtype)
        }
    }, Br = function (e) {
        this.variableNames = ["source"], this.outputShape = e, this.rank = e.length;
        var n = Ae(this.rank);
        this.customUniforms = [{name: "start", arrayIndex: this.rank, type: "int"}];
        var t, a = function (e) {
            if (1 === e) return "sourceLoc";
            if (e <= 6) return Vr.slice(0, e).map((function (e) {
                return "sourceLoc." + e
            })).join(",");
            throw Error("Slicing for rank ".concat(e, " is not yet supported"))
        }(this.rank), r = e.map((function (e, n) {
            return "sourceLoc.".concat(Vr[n], " = start[").concat(n, "] + coords.").concat(Vr[n], ";")
        }));
        t = "\n        ".concat(n, " sourceLoc;\n        ").concat(n, " coords = getOutputCoords();\n        ").concat(r.join("\n"), "\n      "), this.userCode = "\n      void main() {\n        ".concat(t, "\n        setOutput(getSource(").concat(a, "));\n      }\n    ")
    }, Vr = ["x", "y", "z", "w", "u", "v"];
    var Wr = function (e) {
        this.variableNames = ["source"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = e, this.rank = e.length, this.customUniforms = [{
            name: "start",
            arrayIndex: this.rank,
            type: "int"
        }];
        var n = Ae(this.rank), t = jt("coords", this.rank), a = jt("sourceLoc", this.rank),
            r = 1 === this.rank ? "sourceLoc" : "vec2(".concat(a.slice(-2).join(), ")"),
            o = "getChannel(getSource(".concat(a.join(), "), ").concat(r, ")"),
            i = "\n      result.x = ".concat(o, ";\n      if (++").concat(t[this.rank - 1], " < ").concat(e[this.rank - 1], ") {\n        ++").concat(a[this.rank - 1], ";\n        result.y = ").concat(o, ";\n        --").concat(a[this.rank - 1], ";\n      }\n    "),
            c = 1 === this.rank ? "" : "\n      --".concat(t[this.rank - 1], ";\n      if (++").concat(t[this.rank - 2], " < ").concat(e[this.rank - 2], ") {\n        ++").concat(a[this.rank - 2], ";\n        result.z = ").concat(o, ";\n        if (++").concat(t[this.rank - 1], " < ").concat(e[this.rank - 1], ") {\n          ++").concat(a[this.rank - 1], ";\n          result.w = ").concat(o, ";\n        }\n      }\n    "),
            s = this.rank <= 4 ? "sourceLoc = coords +\n            ".concat(n, "(").concat(e.map((function (e, n) {
                return "start[".concat(n, "]")
            })).join(), ");") : e.map((function (e, n) {
                return "".concat(a[n], " = ").concat(t[n], " + start[").concat(n, "];")
            })).join("\n");
        this.userCode = "\n      void main() {\n        ".concat(n, " coords = getOutputCoords();\n        ").concat(n, " sourceLoc;\n        ").concat(s, "\n        vec4 result = vec4(0.);\n        ").concat(i, "\n        ").concat(c, "\n        setOutput(result);\n      }\n    ")
    };

    function Ur(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.begin, c = r.size,
            u = s(n.slice_util.parseSliceParams(o, i, c), 2), l = u[0], d = u[1];
        if (n.slice_util.assertParamsValid(o, l, d), 0 === n.util.sizeFromShape(d)) return a.makeTensorInfo(d, o.dtype, []);
        if (a.shouldExecuteOnCPU([o]) || "string" === o.dtype) {
            var p = a.texData.get(o.dataId), h = At(p.values, l, d, o.shape, o.dtype);
            return a.makeTensorInfo(d, o.dtype, h)
        }
        var f = a.texData.get(o.dataId).isPacked, x = n.slice_util.isSliceContinous(o.shape, l, d);
        if (f || !x) {
            var v = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Wr(d) : new Br(d), g = [l];
            return a.runWebGLProgram(v, [o], o.dtype, g)
        }
        return a.uploadToGPU(o.dataId), function (e, t, a, r) {
            var o = r.texData.get(e.dataId), i = r.makeTensorInfo(a, e.dtype), c = r.texData.get(i.dataId);
            Object.assign(c, o), c.refCount = 1, c.shape = a, c.dtype = e.dtype;
            var s = n.slice_util.computeFlatOffset(t, n.util.computeStrides(e.shape));
            o.slice && (s += o.slice.flatOffset), c.slice = {
                flatOffset: s,
                origDataId: o.slice && o.slice.origDataId || e.dataId
            };
            var u = r.dataRefCount.get(c.slice.origDataId) || 1;
            return r.dataRefCount.set(c.slice.origDataId, u + 1), i
        }(o, l, d, a)
    }

    var Mr = {kernelName: n.Slice, backendName: "webgl", kernelFunc: Ur}, Gr = {
        kernelName: n.BatchToSpaceND, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.blockShape, c = r.crops;
            n.util.assert(o.shape.length <= 4, (function () {
                return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"
            }));
            var s = i.reduce((function (e, n) {
                    return e * n
                })), u = n.backend_util.getReshaped(o.shape, i, s), l = n.backend_util.getPermuted(u.length, i.length),
                d = n.backend_util.getReshapedPermuted(o.shape, i, s),
                p = n.backend_util.getSliceBeginCoords(c, i.length), h = n.backend_util.getSliceSize(d, c, i.length),
                f = [], x = Da({inputs: {x: o}, backend: a, attrs: {shape: u}}),
                v = Xa({inputs: {x: x}, backend: a, attrs: {perm: l}}),
                g = Da({inputs: {x: v}, backend: a, attrs: {shape: d}}),
                m = Ur({inputs: {x: g}, backend: a, attrs: {begin: p, size: h}});
            return f.push(x), f.push(v), f.push(g), f.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), m
        }
    };
    var zr = {
        kernelName: n.Bincount, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = n.weights, i = a.size, c = t.readSync(r.dataId),
                s = t.readSync(o.dataId), u = Zn(c, s, o.dtype, o.shape, i);
            return t.makeTensorInfo([i], o.dtype, u)
        }
    };
    var Xr = {
        kernelName: n.BitwiseAnd, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = a.a, i = a.b, c = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS"),
                u = n.env().getNumber("WEBGL_VERSION");
            if (r.shouldExecuteOnCPU([o, i]) || 1 === u) {
                var l = r.texData.get(o.dataId).values, d = r.texData.get(i.dataId).values,
                    p = s($n(o.shape, i.shape, l, d, o.dtype), 2), h = p[0], f = p[1], x = r.makeTensorInfo(f, o.dtype);
                return r.texData.get(x.dataId).values = h, x
            }
            return t = c ? new ha("\n  int r = int(a.r) & int(b.r);\n  int g = int(a.g) & int(b.g);\n  int rb = int(a.b) & int(b.b);\n  int ra = int(a.a) & int(b.a);\n  return vec4(r, g, rb, ra);\n", o.shape, i.shape, !1) : new da("\n  return float(int(a.r) & int(b.r));\n", o.shape, i.shape), r.runWebGLProgram(t, [o, i], o.dtype)
        }
    };
    var Hr = {
            kernelName: n.BroadcastArgs, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = t.s0, o = t.s1, i = a.readSync(r.dataId), c = a.readSync(o.dataId),
                    s = n.backend_util.assertAndGetBroadcastShape(Array.from(i), Array.from(c));
                return a.makeTensorInfo([s.length], "int32", Int32Array.from(s))
            }
        }, jr = ka({opSnippet: "return float(a != b);", cpuKernelImpl: Ct, dtype: "bool"}),
        Kr = {kernelName: n.NotEqual, backendName: "webgl", kernelFunc: jr};

    function qr(e) {
        var n = e.inputs, t = e.backend, a = n.input;
        return fa({inputs: {x: t.texData.get(a.dataId).complexTensorInfos.real}, backend: t})
    }

    var Yr = {kernelName: n.Real, backendName: "webgl", kernelFunc: qr};
    var Qr = {
            kernelName: n.Cast, backendName: "webgl", kernelFunc: function e(t) {
                var r = t.inputs, o = t.backend, i = t.attrs, c = r.x, u = i.dtype;
                if ("complex64" === u) {
                    if ("complex64" === c.dtype) return fa({inputs: {x: c}, backend: o});
                    var l = a.zeros(c.shape), d = e({inputs: {x: c}, backend: o, attrs: {dtype: "float32"}}),
                        p = va({inputs: {real: d, imag: l}, backend: o});
                    return l.dispose(), o.disposeIntermediateTensorInfo(d), p
                }
                if ("complex64" === c.dtype) {
                    var h = qr({inputs: {input: c}, backend: o}), p = e({inputs: {x: h}, backend: o, attrs: {dtype: u}});
                    return o.disposeIntermediateTensorInfo(h), p
                }
                if (!n.util.hasEncodingLoss(c.dtype, u)) return {
                    dataId: (p = fa({inputs: {x: c}, backend: o})).dataId,
                    shape: p.shape,
                    dtype: u
                };
                if (o.shouldExecuteOnCPU([c])) {
                    var f = o.texData.get(c.dataId).values, x = s(et(f, c.shape, c.dtype, u), 3), v = x[0], g = x[1],
                        m = x[2];
                    return o.makeTensorInfo(v, g, m)
                }
                if ("int32" === u) return function (e, n) {
                    var t = new $t(e.shape, "return float(int(x));"), a = n.runWebGLProgram(t, [e], "int32");
                    return {dataId: a.dataId, shape: a.shape, dtype: a.dtype}
                }(c, o);
                if ("bool" === u) {
                    var b = o.makeTensorInfo([], "bool", n.util.getTypedArrayFromDType("bool", 1));
                    p = jr({inputs: {a: c, b: b}, backend: o});
                    return o.disposeIntermediateTensorInfo(b), p
                }
                throw new Error("Error in Cast: failed to cast ".concat(c.dtype, " to ").concat(u))
            }
        }, Zr = "return ceil(x);", Jr = Sa({opSnippet: Zr, packedOpSnippet: Zr, cpuKernelImpl: nt}),
        $r = {kernelName: n.Ceil, backendName: "webgl", kernelFunc: Jr}, eo = function (e) {
            this.variableNames = ["A"], this.customUniforms = [{name: "minVal", type: "float"}, {
                name: "maxVal",
                type: "float"
            }], this.outputShape = e, this.userCode = "\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "
        }, no = function (e) {
            this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
                name: "minVal",
                type: "float"
            }, {
                name: "maxVal",
                type: "float"
            }], this.outputShape = e, this.userCode = "\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "
        };
    var to = {
        kernelName: n.ClipByValue, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = o.clipValueMin, s = o.clipValueMax;
            t = n.env().getBool("WEBGL_PACK_CLIP") ? new no(i.shape) : new eo(i.shape);
            var u = [[c], [s]];
            return r.runWebGLProgram(t, [i], i.dtype, u)
        }
    }, ao = function (e) {
        this.variableNames = ["real", "imag"], this.outputShape = e, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "
    };

    function ro(e, n) {
        return {dataId: n.dataId, dtype: n.dtype, shape: e.shape}
    }

    var oo = {
        kernelName: n.ComplexAbs, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.x, r = t.texData.get(a.dataId), o = new ao(a.shape),
                i = [ro(a, r.complexTensorInfos.real), ro(a, r.complexTensorInfos.imag)];
            return t.runWebGLProgram(o, i, i[0].dtype)
        }
    }, io = function (e) {
        this.outputShape = [], this.outputShape = n.backend_util.computeOutShape(e, 1), this.variableNames = e.map((function (e, n) {
            return "T".concat(n)
        }));
        var t = new Array(e.length - 1);
        t[0] = e[0][1];
        for (var a = 1; a < t.length; a++) t[a] = t[a - 1] + e[a][1];
        var r = ["if (yC < ".concat(t[0], ") setOutput(getT0(yR, yC));")];
        for (a = 1; a < t.length; a++) {
            var o = t[a - 1];
            r.push("else if (yC < ".concat(t[a], ") ") + "setOutput(getT".concat(a, "(yR, yC-").concat(o, "));"))
        }
        var i = t.length, c = t[t.length - 1];
        r.push("else setOutput(getT".concat(i, "(yR, yC-").concat(c, "));")), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ".concat(r.join("\n        "), "\n      }\n    ")
    }, co = function (e, t) {
        this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [], this.outputShape = n.backend_util.computeOutShape(e, t);
        var a = this.outputShape, r = a.length, o = Ae(r), i = jt("coords", r),
            c = ["x", "y", "z", "w", "u", "v"].slice(0, r);
        this.variableNames = e.map((function (e, n) {
            return "T".concat(n)
        }));
        var s = new Array(e.length - 1);
        s[0] = e[0][t];
        for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + e[u][t];
        var l = c[t], d = c.slice(-2), p = c.join(),
            h = "if (".concat(l, " < ").concat(s[0], ") {\n        return getChannel(\n            getT0(").concat(p, "), vec2(").concat(d.join(), "));\n        }");
        for (u = 1; u < s.length; u++) {
            var f = s[u - 1];
            h += "\n        if (".concat(l, " < ").concat(s[u], "  && ").concat(l, " >= ").concat(s[u - 1], ") {\n          return getChannel(\n            getT").concat(u, "(").concat(so(c, l, f), "),\n            vec2(").concat(so(d, l, f), "));\n        }")
        }
        var x = s.length, v = s[s.length - 1];
        h += "\n        return getChannel(\n          getT".concat(x, "(").concat(so(c, l, v), "),\n          vec2(").concat(so(d, l, v), "));"), this.userCode = "\n      float getValue(".concat(c.map((function (e) {
            return "int " + e
        })), ") {\n        ").concat(h, "\n      }\n\n      void main() {\n        ").concat(o, " coords = getOutputCoords();\n        vec4 result = vec4(getValue(").concat(i, "), 0., 0., 0.);\n\n        ").concat(i[r - 1], " = ").concat(i[r - 1], " + 1;\n        if (").concat(i[r - 1], " < ").concat(a[r - 1], ") {\n          result.g = getValue(").concat(i, ");\n        }\n\n        ").concat(i[r - 2], " = ").concat(i[r - 2], " + 1;\n        if (").concat(i[r - 2], " < ").concat(a[r - 2], ") {\n          result.a = getValue(").concat(i, ");\n        }\n\n        ").concat(i[r - 1], " = ").concat(i[r - 1], " - 1;\n        if (").concat(i[r - 2], " < ").concat(a[r - 2], " &&\n            ").concat(i[r - 1], " < ").concat(a[r - 1], ") {\n          result.b = getValue(").concat(i, ");\n        }\n        setOutput(result);\n      }\n    ")
    };

    function so(e, n, t) {
        var a = e.indexOf(n);
        return e.map((function (e, n) {
            return n === a ? "".concat(e, " - ").concat(t) : e
        })).join()
    }

    function uo(e) {
        var n = e.inputs, t = e.backend, a = n.input;
        return fa({inputs: {x: t.texData.get(a.dataId).complexTensorInfos.imag}, backend: t})
    }

    var lo = {kernelName: n.Imag, backendName: "webgl", kernelFunc: uo};

    function po(e, t, a) {
        var r, o, i = e[0].dtype;
        if ("complex64" === i) {
            var s = e.map((function (e) {
                return qr({inputs: {input: e}, backend: a})
            })), u = e.map((function (e) {
                return uo({inputs: {input: e}, backend: a})
            })), l = po(s, t, a), d = po(u, t, a), p = va({inputs: {real: l, imag: d}, backend: a});
            return s.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), u.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), a.disposeIntermediateTensorInfo(l), a.disposeIntermediateTensorInfo(d), p
        }
        var h = a.shouldExecuteOnCPU(e);
        if ("string" === i && (h = !0), h) {
            var f = e.map((function (e) {
                    var r = n.util.sizeFromShape(e.shape.slice(t));
                    return Da({inputs: {x: e}, backend: a, attrs: {shape: [-1, r]}})
                })), x = f.map((function (e) {
                    return {vals: a.readSync(e.dataId), shape: e.shape}
                })), v = n.backend_util.computeOutShape(f.map((function (e) {
                    return e.shape
                })), 1), g = 1 === f[0].shape[0], m = ttt(x, v, i, g),
                b = n.backend_util.computeOutShape(e.map((function (e) {
                    return e.shape
                })), t), C = a.makeTensorInfo(b, i, m);
            return f.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), C
        }
        var y = e.filter((function (e) {
            return n.util.sizeFromShape(e.shape) > 0
        })), w = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && y[0].shape.length > 1;
        if (1 === y.length) {
            var I = w ? new $t(e[0].shape, ta) : new aa(e[0].shape, ta);
            return a.runWebGLProgram(I, e, i)
        }
        var S = n.env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");
        if (y.length > S) {
            for (var k = [], R = 0; R < y.length; R += S) {
                var T = y.slice(R, R + S);
                k.push(po(T, t, a))
            }
            var N = po(k, t, a);
            try {
                for (var E = c(k), A = E.next(); !A.done; A = E.next()) {
                    R = A.value;
                    a.disposeIntermediateTensorInfo(R)
                }
            } catch (e) {
                r = {error: e}
            } finally {
                try {
                    A && !A.done && (o = E.return) && o.call(E)
                } finally {
                    if (r) throw r.error
                }
            }
            return N
        }
        if (w) {
            var _ = new co(y.map((function (e) {
                return e.shape
            })), t);
            return a.runWebGLProgram(_, y, i)
        }
        var O = function (e, t, a) {
            var r = n.backend_util.computeOutShape(e.map((function (e) {
                return e.shape
            })), t);
            return {
                tensors2D: e.map((function (e) {
                    return Da({
                        inputs: {x: e},
                        attrs: {shape: [-1, n.util.sizeFromShape(e.shape.slice(t))]},
                        backend: a
                    })
                })), outShape: r
            }
        }(y, t, a), F = O.tensors2D, D = O.outShape, P = new io(F.map((function (e) {
            return e.shape
        }))), L = a.runWebGLProgram(P, F, i);
        F.forEach((function (e) {
            return a.disposeIntermediateTensorInfo(e)
        }));
        var B = Da({inputs: {x: L}, attrs: {shape: D}, backend: a});
        return a.disposeIntermediateTensorInfo(L), B
    }

    function ho(e) {
        var t = e.inputs, a = e.backend, r = e.attrs.axis, o = n.util.parseAxisParam(r, t[0].shape)[0],
            i = t.map((function (e) {
                return e.shape
            }));
        n.backend_util.assertParamsConsistent(i, o);
        var c = n.backend_util.computeOutShape(t.map((function (e) {
            return e.shape
        })), o);
        if (0 === n.util.sizeFromShape(c)) return a.makeTensorInfo(c, t[0].dtype, []);
        var s = t.filter((function (e) {
            return n.util.sizeFromShape(e.shape) > 0
        }));
        return 1 === s.length ? fa({inputs: {x: s[0]}, backend: a}) : po(s, o, a)
    }

    var fo = {kernelName: n.Concat, backendName: "webgl", kernelFunc: ho}, xo = function (e, n, t, a, r) {
        void 0 === n && (n = !1), void 0 === t && (t = null), void 0 === a && (a = !1), void 0 === r && (r = !1), this.variableNames = ["x", "W"], this.outputShape = e.outShape;
        var o = e.padInfo.top, i = e.padInfo.left, c = e.strideHeight, s = e.strideWidth, u = e.dilationHeight,
            l = e.dilationWidth, d = e.filterHeight, p = e.filterWidth, h = 4 * Math.floor(e.inChannels / 4),
            f = e.inChannels % 4, x = "channelsLast" === e.dataFormat, v = x ? 1 : 2, g = x ? 2 : 3, m = x ? 3 : 1,
            b = "", C = "";
        t && (b = a ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ".concat(t, "\n        }") : r ? "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ".concat(t, "\n        }") : "\n          float activation(float x) {\n            ".concat(t, "\n          }\n        "), C = "result = activation(result);");
        var y = n ? "result += getBiasAtOutCoords();" : "";
        n && this.variableNames.push("bias"), a && this.variableNames.push("preluActivationWeights"), r && this.variableNames.push("leakyreluAlpha"), this.userCode = "\n      ".concat(b, "\n\n      const ivec2 strides = ivec2(").concat(c, ", ").concat(s, ");\n      const ivec2 pads = ivec2(").concat(o, ", ").concat(i, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[").concat(m, "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[").concat(v, "], coords[").concat(g, "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(d, "; wR++) {\n          int xR = xRCorner + wR * ").concat(u, ";\n\n          if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(p, "; wC++) {\n            int xC = xCCorner + wC * ").concat(l, ";\n\n            if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ").concat(h, "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (").concat(x, ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (").concat(1 === f, ") {\n\n              if (").concat(x, ") {\n                dotProd +=\n                    getX(batch, xR, xC, ").concat(h, ") *\n                    getW(wR, wC, ").concat(h, ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, ").concat(h, ", xR, xC) *\n                    getW(wR, wC, ").concat(h, ", d2);\n              }\n\n            } else if (").concat(2 === f, ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, ").concat(h, ", d2),\n                getW(wR, wC, ").concat(h, " + 1, d2)\n              );\n\n              if (").concat(x, ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ").concat(h, "),\n                  getX(batch, xR, xC, ").concat(h, " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ").concat(h, ", xR, xC),\n                  getX(batch, ").concat(h, " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (").concat(3 === f, ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, ").concat(h, ", d2),\n                getW(wR, wC, ").concat(h, " + 1, d2),\n                getW(wR, wC, ").concat(h, " + 2, d2)\n              );\n\n              if (").concat(x, ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ").concat(h, "),\n                  getX(batch, xR, xC, ").concat(h, " + 1),\n                  getX(batch, xR, xC, ").concat(h, " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ").concat(h, ", xR, xC),\n                  getX(batch, ").concat(h, " + 1, xR, xC),\n                  getX(batch, ").concat(h, " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ").concat(y, "\n        ").concat(C, "\n        setOutput(result);\n      }\n    ")
    }, vo = function (e) {
        this.variableNames = ["x", "W"], this.outputShape = e.outShape;
        var n = e.padInfo.front, t = e.padInfo.top, a = e.padInfo.left, r = e.strideDepth, o = e.strideHeight,
            i = e.strideWidth, c = e.dilationDepth, s = e.dilationHeight, u = e.dilationWidth, l = e.filterDepth,
            d = e.filterHeight, p = e.filterWidth, h = 4 * Math.floor(e.inChannels / 4), f = e.inChannels % 4;
        this.userCode = "\n      const ivec3 strides = ivec3(".concat(r, ", ").concat(o, ", ").concat(i, ");\n      const ivec3 pads = ivec3(").concat(n, ", ").concat(t, ", ").concat(a, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ").concat(l, "; wF++) {\n          int xF = xFCorner + wF * ").concat(c, ";\n\n          if (xF < 0 || xF >= ").concat(e.inDepth, ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < ").concat(d, "; wR++) {\n            int xR = xRCorner + wR * ").concat(s, ";\n\n            if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < ").concat(p, "; wC++) {\n              int xC = xCCorner + wC * ").concat(u, ";\n\n              if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ").concat(h, "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (").concat(1 === f, ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ").concat(h, ") *\n                  getW(wF, wR, wC, ").concat(h, ", d2);\n              } else if (").concat(2 === f, ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ").concat(h, "),\n                  getX(batch, xF, xR, xC, ").concat(h, " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ").concat(h, ", d2),\n                  getW(wF, wR, wC, ").concat(h, " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (").concat(3 === f, ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ").concat(h, "),\n                  getX(batch, xF, xR, xC, ").concat(h, " + 1),\n                  getX(batch, xF, xR, xC, ").concat(h, " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ").concat(h, ", d2),\n                  getW(wF, wR, wC, ").concat(h, " + 1, d2),\n                  getW(wF, wR, wC, ").concat(h, " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, go = function (e, t, a, r, o) {
        void 0 === t && (t = !1), void 0 === a && (a = null), void 0 === r && (r = !1), void 0 === o && (o = !1), this.variableNames = ["x", "W"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "pads",
            type: "ivec2"
        }, {name: "strides", type: "ivec2"}, {name: "dilations", type: "ivec2"}, {
            name: "inDims",
            type: "ivec2"
        }], this.outputShape = e.outShape, this.enableShapeUniforms = Le(this.outputShape.length);
        for (var i = e.padInfo.left, c = e.strideWidth, s = e.dilationWidth, u = e.filterHeight, l = e.filterWidth, d = l, p = "\n       int xR; int xC; int xCOffset;\n       vec4 wTexel; vec4 previous; vec4 final;", h = 0; h < l; h++) p += "\n           vec4 xTexelC".concat(2 * h, ";\n           int xTexelC").concat(2 * h, "Ready;\n           vec4 xTexelC").concat(2 * h + 1, ";\n           int xTexelC").concat(2 * h + 1, "Ready;\n           vec4 xC").concat(h, ";");
        for (p += "\n     for (int r = 0; r < ".concat(u, "; r++) {\n      for (int d1 = 0; d1 < ").concat(e.inChannels, "; d1 += 2) {\n       "), h = 0; h < l; h++) p += "\n           xTexelC".concat(2 * h, " = vec4(0.0);\n           xTexelC").concat(2 * h, "Ready = 0;\n           xTexelC").concat(2 * h + 1, " = vec4(0.0);\n           xTexelC").concat(2 * h + 1, "Ready = 0;\n           xC").concat(h, " = vec4(0.0);");
        p += "\n         xR = xRCorner + r * dilations[0];\n         if (xR >=0 && xR < inDims[0]) {\n       ";
        for (var f = 0; f < (d + 1) / 2; f++) {
            var x = 2 * f;
            if (p += "\n           xC = xCCorner + ".concat(x * s, ";\n           "), 1 === c) {
                if (x < l && (i % 2 == 1 ? (p += "\n                 xCOffset = xC + 1;\n                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(x, "Ready == 0) {\n                   xTexelC").concat(x, " = getX(batch, xR, xCOffset, d1);\n\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(x, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(x, "Ready = 1;\n                 }\n               "), p += 1 === s && x > 0 ? "\n                 xC".concat(x, " = vec4(xTexelC").concat(x - 2, ".zw, xTexelC").concat(x, ".xy);\n                 ") : "\n                   xCOffset = xC + 1 - 2;\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       previous.zw = vec2(0.0);\n                     }\n\n                     xC".concat(x, " = vec4(previous.zw, xTexelC").concat(x, ".xy);\n                   } else {\n                     xC").concat(x, " = vec4(0.0, 0.0, xTexelC").concat(x, ".xy);\n                   }\n                   ")) : p += "\n                 if (xC >= 0 && xC < inDims[1] && xTexelC".concat(x, "Ready == 0) {\n                   xTexelC").concat(x, " = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC").concat(x, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(x, "Ready = 1;\n                 }\n\n                 xC").concat(x, " = xTexelC").concat(x, ";\n                 "), x + 1 < l)) {
                    var v = i % 2 == 0 ? n.util.nearestLargerEven(s) : s;
                    s % 2 == 0 && i % 2 == 1 || s % 2 != 0 && i % 2 != 1 ? (p += "\n                   xCOffset = xC + imod(pads[1], 2) + ".concat(v, ";\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(x + 1, "Ready == 0) {\n                     xTexelC").concat(x + 1, " = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       xTexelC").concat(x + 1, ".zw = vec2(0.0);\n                     }\n                     xTexelC").concat(x + 1, "Ready = 1;\n                   }\n                   "), p += s > 1 ? "\n                     xCOffset -= 2;\n                     if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                      previous = getX(batch, xR, xCOffset, d1);\n                      xC".concat(x + 1, " = vec4(previous.zw, xTexelC").concat(x + 1, ".xy);\n                     } else {\n                      xC").concat(x + 1, " = vec4(0.0, 0.0, xTexelC").concat(x + 1, ".xy);\n                     }\n                     ") : "\n                     xC".concat(x + 1, " = vec4(xTexelC").concat(x, ".zw, xTexelC").concat(x + 1, ".xy);\n                     ")) : p += 1 === v ? "\n                     xC".concat(x + 1, " = xTexelC").concat(x, ";\n                     ") : "\n                     xCOffset = xC + ".concat(v, ";\n\n                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(x + 1, "Ready == 0) {\n                       xTexelC").concat(x + 1, " = getX(batch, xR, xCOffset, d1);\n                       if (xCOffset + 1 >= inDims[1]) {\n                         xTexelC").concat(x + 1, ".zw = vec2(0.0);\n                       }\n                       xTexelC").concat(x + 1, "Ready = 1;\n                     }\n\n                     xC").concat(x + 1, " = xTexelC").concat(x + 1, ";\n                     ")
                }
            } else x < l && (i % 2 == 1 ? (p += "\n                 xCOffset = xC + 1 - strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(x, "Ready == 0) {\n                   xTexelC").concat(x, " = getX(batch, xR, xCOffset, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(x, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(x, "Ready = 1;\n                 }\n\n                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC").concat(x + 1, "Ready == 0) {\n                   xTexelC").concat(x + 1, " = getX(batch, xR, xC + 1, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xC + 2 >= inDims[1]) {\n                     xTexelC").concat(x + 1, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(x + 1, "Ready = 1;\n                 }\n\n                 xC").concat(x, " = vec4(xTexelC").concat(x, ".zw, xTexelC").concat(x + 1, ".zw);\n               "), x + 1 < l && (p += "\n                   final = vec4(0.0);\n                   xCOffset = xC + 1 + strides[1];\n                   if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                     final = getX(batch, xR, xCOffset, d1);\n                   }\n                   xC".concat(x + 1, " = vec4(xTexelC").concat(x + 1, ".xy, final.xy);\n                 "))) : (p += "\n                 if(xC >= 0 && xC < inDims[1] && xTexelC".concat(x, "Ready == 0) {\n                   xTexelC").concat(x, " = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC").concat(x, ".zw = vec2(0.0);\n                   }\n                   xTexelC").concat(x, "Ready = 1;\n                 }\n\n                 xCOffset = xC + strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(x + 1, "Ready == 0) {\n                   xTexelC").concat(x + 1, " = getX(batch, xR, xCOffset, d1);\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC").concat(x + 1, ".zw = vec2(0.);\n                   }\n                   xTexelC").concat(x + 1, "Ready = 1;\n                 }\n\n                 xC").concat(x, " = vec4(\n                   xTexelC").concat(x, ".xy, xTexelC").concat(x + 1, ".xy);\n               "), x + 1 < l && (p += "\n                   xC".concat(x + 1, " = vec4(xTexelC").concat(x, ".zw, xTexelC").concat(x + 1, ".zw);\n                 "))));
            x < l && (p += "\n             wTexel = getW(r, ".concat(x, ", d1, d2);\n             dotProd += xC").concat(x, ".xxzz * vec4(wTexel.xy, wTexel.xy);\n             if(d1 + 1 < ").concat(e.inChannels, ") {\n               dotProd += xC").concat(x, ".yyww * vec4(wTexel.zw, wTexel.zw);\n             }\n           "), x + 1 < l && (p += "\n               wTexel = getW(r, ".concat(x + 1, ", d1, d2);\n               dotProd += xC").concat(x + 1, ".xxzz * vec4(wTexel.xy, wTexel.xy);\n               if(d1 + 1 < ").concat(e.inChannels, ") {\n                 dotProd += xC").concat(x + 1, ".yyww * vec4(wTexel.zw, wTexel.zw);\n               }\n             ")))
        }
        p += "\n     }\n   ", p += "\n     }\n   ", p += "\n     }\n   ";
        var g = "", m = "";
        a && (g = r ? "vec4 activation(vec4 a) {\n           vec4 b = getPreluActivationWeightsAtOutCoords();\n           ".concat(a, "\n         }") : o ? "vec4 activation(vec4 a) {\n           vec4 b = getLeakyreluAlphaAtOutCoords();\n           ".concat(a, "\n         }") : "vec4 activation(vec4 x) {\n           ".concat(a, "\n         }"), m = "result = activation(result);");
        var b = t ? "result += getBiasAtOutCoords();" : "";
        t && this.variableNames.push("bias"), r && this.variableNames.push("preluActivationWeights"), o && this.variableNames.push("leakyreluAlpha"), this.userCode = "\n       ".concat(g, "\n\n       void main() {\n         ivec4 coords = getOutputCoords();\n         int batch = coords.x;\n         ivec2 xRCCorner = coords.yz * strides - pads;\n         int d2 = coords.w;\n         int xRCorner = xRCCorner.x;\n         int xCCorner = xRCCorner.y;\n\n         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n         vec4 dotProd = vec4(0.000000000000001);\n\n         ").concat(p, "\n\n         vec4 result = dotProd - vec4(0.000000000000001);\n         ").concat(b, "\n         ").concat(m, "\n         setOutput(result);\n       }\n     ")
    }, mo = function (e, n) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "inputShape",
            type: "ivec4"
        }, {name: "pad", type: "ivec2"}, {name: "stride", type: "ivec2"}, {
            name: "dilation",
            type: "ivec2"
        }, {name: "inChannels", type: "int"}, {name: "itemsPerBlockRow", type: "int"}, {
            name: "outWidth",
            type: "int"
        }], this.outputShape = e, this.enableShapeUniforms = Le(this.outputShape.length);
        for (var t = n.dataFormat, a = fe(), r = "channelsLast" === t, o = r ? 1 : 2, i = r ? 2 : 3, c = this.enableShapeUniforms ? "if(blockIndex < outShape[2] && pos < outShape[1]) {" : "if(blockIndex < ".concat(e[2], " && pos < ").concat(e[1], ") {"), s = "", u = 0; u <= 1; u++) for (var l = 0; l <= 1; l++) s += "\n          blockIndex = rc.z + ".concat(l, ";\n          pos = rc.y + ").concat(u, ";\n\n          ").concat(c, "\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[").concat(o, "] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[").concat(i, "] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (").concat(r, ") {\n                  innerDims = vec2(d1, ch);\n                  result[").concat(2 * u + l, "] = getChannel(\n                    getA(rc.x, d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[").concat(2 * u + l, "] = getChannel(\n                    getA(rc.x, ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ");
        this.userCode = "\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ".concat(s, "\n\n        ").concat(a.output, " = result;\n      }\n    ")
    };

    function bo(e, n) {
        var t = e.length;
        return t >= 3 ? u(u([], s(e.slice(0, -3)), !1), n ? [e[t - 3] * e[t - 2], e[t - 1]] : [e[t - 3], e[t - 2] * e[t - 1]], !1) : !n && 1 === t && e[0] > 1 ? [e[0], 1] : null
    }

    function Co(e) {
        var t, a, r, o = e.x, i = e.filter, s = e.convInfo, u = e.backend, l = e.bias, d = void 0 === l ? null : l,
            p = e.preluActivationWeights, h = void 0 === p ? null : p, f = e.leakyreluAlpha, x = void 0 === f ? 0 : f,
            v = e.activation, g = void 0 === v ? null : v, m = o.shape, b = u.texData.get(o.dataId), C = s.inChannels,
            y = m[0] * m[1] * m[2], w = s.outChannels, I = "channelsLast" === s.dataFormat, S = [];
        null != h && (null != (k = bo(h.shape, I)) && (h = Da({
            inputs: {x: h},
            backend: u,
            attrs: {shape: k}
        }), S.push(h)));
        null != d && (null != (k = bo(d.shape, I)) && (d = Da({
            inputs: {x: d},
            backend: u,
            attrs: {shape: k}
        }), S.push(d)));
        if (!((1 === y || 1 === w) && C > 1e3) && b.isPacked && I && null != b.texture && m[2] % 2 != 0 && n.util.arraysEqual(b.shape.slice(-3), m.slice(-3))) {
            var k = m[0] * m[1] * (m[2] + 1), R = {dataId: o.dataId, shape: [1, k, s.inChannels], dtype: o.dtype},
                T = b.shape;
            b.shape = b.shape.slice(), b.shape[b.shape.length - 2]++, n.util.assert(ne(b.shape, R.shape), (function () {
                return "packed reshape ".concat(b.shape, " to ").concat(R.shape, " isn't free")
            }));
            var N = Da({inputs: {x: i}, backend: u, attrs: {shape: [1, s.inChannels, s.outChannels]}});
            S.push(N);
            var E = ja({
                a: R,
                b: N,
                backend: u,
                transposeA: !1,
                transposeB: false,
                bias: d,
                activation: g,
                preluActivationWeights: h,
                leakyreluAlpha: x
            }), A = u.texData.get(E.dataId);
            n.util.assert(A.isPacked, (function () {
                return "batchMatMul result is expected to be packed"
            })), b.shape = T, A.shape = s.outShape, (r = fa({inputs: {x: E}, backend: u})).shape = s.outShape, S.push(E)
        } else {
            var _ = s.outHeight * s.outWidth, O = Da({
                inputs: {x: o},
                backend: u,
                attrs: {shape: I ? [s.batchSize, _, s.inChannels] : [s.batchSize, s.inChannels, _]}
            }), F = (N = Da({
                inputs: {x: i},
                backend: u,
                attrs: {shape: [1, s.inChannels, s.outChannels]}
            }), ja({
                a: I ? O : N,
                b: I ? N : O,
                transposeA: !I,
                transposeB: false,
                backend: u,
                bias: d,
                activation: g,
                preluActivationWeights: h,
                leakyreluAlpha: x
            }));
            r = Da({inputs: {x: F}, backend: u, attrs: {shape: s.outShape}}), S.push(O), S.push(N), S.push(F)
        }
        try {
            for (var D = c(S), P = D.next(); !P.done; P = D.next()) {
                var L = P.value;
                u.disposeIntermediateTensorInfo(L)
            }
        } catch (e) {
            t = {error: e}
        } finally {
            try {
                P && !P.done && (a = D.return) && a.call(D)
            } finally {
                if (t) throw t.error
            }
        }
        return r
    }

    function yo(e) {
        var t, a, r, o = e.x, i = e.filter, s = e.convInfo, u = e.backend, l = e.bias, d = void 0 === l ? null : l,
            p = e.preluActivationWeights, h = void 0 === p ? null : p, f = e.leakyreluAlpha, x = void 0 === f ? 0 : f,
            v = e.activation, g = void 0 === v ? null : v, m = s.filterWidth, b = s.filterHeight, C = s.inChannels,
            y = s.outWidth, w = s.outHeight, I = "channelsLast" === s.dataFormat, S = m * b * C, k = w * y,
            R = [s.batchSize, S, k], T = [];
        null != h && (null != (r = bo(h.shape, I)) && (h = Da({
            inputs: {x: h},
            backend: u,
            attrs: {shape: r}
        }), T.push(h)));
        null != d && (null != (r = bo(d.shape, I)) && (d = Da({
            inputs: {x: d},
            backend: u,
            attrs: {shape: r}
        }), T.push(d)));
        var N = Da({inputs: {x: i}, backend: u, attrs: {shape: [1, S, n.util.sizeFromShape(i.shape) / S]}});
        T.push(N);
        var E = new mo(R, s),
            A = [o.shape, [s.padInfo.top, s.padInfo.left], [s.strideHeight, s.strideWidth], [s.dilationHeight, s.dilationWidth], [s.inChannels], [s.filterWidth * s.inChannels], [s.outWidth]],
            _ = u.runWebGLProgram(E, [o], "float32", A), O = Da({inputs: {x: _}, backend: u, attrs: {shape: R}});
        T.push(_), T.push(O);
        var F = null != d, D = null != h, P = "leakyrelu" === g, L = g ? Ra(g, !0) : null,
            B = new Ta(I ? O.shape : N.shape, I ? N.shape : O.shape, I ? [s.batchSize, k, s.outChannels] : [s.batchSize, s.outChannels, k], !0, !1, F, L, D, P),
            V = I ? [O, N] : [N, O];
        if (d && V.push(d), D && V.push(h), P) {
            var W = u.makeTensorInfo([], "float32", n.util.createScalarValue(x, "float32"));
            V.push(W), T.push(W)
        }
        var U = u.runWebGLProgram(B, V, "float32"), M = Da({inputs: {x: U}, backend: u, attrs: {shape: s.outShape}});
        T.push(U);
        try {
            for (var G = c(T), z = G.next(); !z.done; z = G.next()) {
                var X = z.value;
                u.disposeIntermediateTensorInfo(X)
            }
        } catch (e) {
            t = {error: e}
        } finally {
            try {
                z && !z.done && (a = G.return) && a.call(G)
            } finally {
                if (t) throw t.error
            }
        }
        return M
    }

    var wo = {
        kernelName: n.Conv2D, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = a.filter, s = o.strides, u = o.pad,
                l = o.dataFormat, d = o.dilations, p = o.dimRoundingMode, h = n.backend_util.convertConv2DDataFormat(l),
                f = n.backend_util.computeConv2DInfo(i.shape, c.shape, s, d, u, p, !1, h);
            if (1 !== f.filterHeight || 1 !== f.filterWidth || 1 !== f.dilationHeight || 1 !== f.dilationWidth || 1 !== f.strideHeight || 1 !== f.strideWidth || "SAME" !== f.padInfo.type && "VALID" !== f.padInfo.type) if (f.strideWidth <= 2 && "channelsLast" === h && n.env().getBool("WEBGL_EXP_CONV")) {
                var x = new go(f),
                    v = [[f.padInfo.top, f.padInfo.left], [f.strideHeight, f.strideWidth], [f.dilationHeight, f.dilationWidth], [f.inHeight, f.inWidth]];
                t = r.runWebGLProgram(x, [i, c], "float32", v)
            } else if (n.env().getBool("WEBGL_CONV_IM2COL")) t = yo({x: i, filter: c, convInfo: f, backend: r}); else {
                x = new xo(f);
                t = r.runWebGLProgram(x, [i, c], "float32")
            } else t = Co({x: i, filter: c, convInfo: f, backend: r});
            var g = Da({inputs: {x: t}, backend: r, attrs: {shape: f.outShape}});
            return r.disposeIntermediateTensorInfo(t), g
        }
    }, Io = function (e) {
        this.variableNames = ["x", "dy"], this.outputShape = e.filterShape;
        var n = e.strideHeight, t = e.strideWidth, a = e.padInfo.top, r = e.padInfo.left,
            o = "channelsLast" === e.dataFormat;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ".concat(e.batchSize, "; b++) {\n          for (int yR = 0; yR < ").concat(e.outHeight, "; yR++) {\n            int xR = wR + yR * ").concat(n, " - ").concat(a, ";\n\n            if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < ").concat(e.outWidth, "; yC++) {\n              int xC = wC + yC * ").concat(t, " - ").concat(r, ";\n\n              if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                continue;\n              }\n\n              ").concat(o ? "float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);" : "float dyValue = getDy(b, d2, yR, yC);\n              float xValue = getX(b, d1, xR, xC);\n              dotProd += (xValue * dyValue);", "\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, So = function (e) {
        this.variableNames = ["dy", "W"], this.outputShape = e.inShape;
        var n = e.filterHeight, t = e.filterWidth, a = e.strideHeight, r = e.strideWidth,
            o = "channelsLast" === e.dataFormat, i = n - 1 - e.padInfo.top, c = t - 1 - e.padInfo.left, s = o ? 1 : 2,
            u = o ? 2 : 3, l = o ? 3 : 1;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(i, ", ").concat(c, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[").concat(l, "];\n\n        ivec2 dyCorner = ivec2(coords[").concat(s, "], coords[").concat(u, "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(n, "; wR++) {\n          float dyR = float(dyRCorner + wR) / ").concat(a, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ").concat(n, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(t, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(r, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ").concat(t, " - 1 - wC;\n\n            for (int d2 = 0; d2 < ").concat(e.outChannels, "; d2++) {\n\n              if (").concat(o, ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, ko = function (e) {
        this.variableNames = ["x", "dy"], this.outputShape = e.filterShape;
        var n = e.strideDepth, t = e.strideHeight, a = e.strideWidth, r = e.padInfo.front, o = e.padInfo.top,
            i = e.padInfo.left;
        this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ".concat(e.batchSize, "; b++) {\n          for (int yF = 0; yF < ").concat(e.outDepth, "; yF++) {\n            int xF = wF + yF * ").concat(n, " - ").concat(r, ";\n\n            if (xF < 0 || xF >= ").concat(e.inDepth, ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < ").concat(e.outHeight, "; yR++) {\n              int xR = wR + yR * ").concat(t, " - ").concat(o, ";\n\n              if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < ").concat(e.outWidth, "; yC++) {\n                int xC = wC + yC * ").concat(a, " - ").concat(i, ";\n\n                if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, Ro = function (e) {
        this.variableNames = ["dy", "W"], this.outputShape = e.inShape;
        var n = e.filterDepth, t = e.filterHeight, a = e.filterWidth, r = e.strideDepth, o = e.strideHeight,
            i = e.strideWidth, c = n - 1 - e.padInfo.front, s = t - 1 - e.padInfo.top, u = a - 1 - e.padInfo.left;
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(c, ", ").concat(s, ", ").concat(u, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ").concat(n, "; wF++) {\n          float dyF = float(dyFCorner + wF) / ").concat(r, ".0;\n\n          if (dyF < 0.0 || dyF >= ").concat(e.outDepth, ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ").concat(n, " - 1 - wF;\n\n          for (int wR = 0; wR < ").concat(t, "; wR++) {\n            float dyR = float(dyRCorner + wR) / ").concat(o, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ").concat(t, " - 1 - wR;\n\n            for (int wC = 0; wC < ").concat(a, "; wC++) {\n              float dyC = float(dyCCorner + wC) / ").concat(i, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ").concat(a, " - 1 - wC;\n\n              for (int d2 = 0; d2 < ").concat(e.outChannels, "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    };
    var To = {
        kernelName: n.Conv2DBackpropFilter, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.dy, c = r.strides, s = r.pad, u = r.dataFormat,
                l = r.dimRoundingMode, d = r.filterShape, p = n.backend_util.convertConv2DDataFormat(u),
                h = n.backend_util.computeConv2DInfo(o.shape, d, c, 1, s, l, !1, p), f = new Io(h);
            return a.runWebGLProgram(f, [o, i], "float32")
        }
    }, No = function (e) {
        this.variableNames = ["dy", "W"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "strides",
            type: "vec2"
        }], this.outputShape = e.inShape, this.enableShapeUniforms = Le(this.outputShape.length);
        var n = e.filterHeight, t = e.filterWidth, a = n - 1 - e.padInfo.top, r = t - 1 - e.padInfo.left;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(a, ", ").concat(r, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        vec4 result = vec4(0.);\n        for (int wR = 0; wR < ").concat(n, "; wR++) {\n          float dyR = float(dyRCorner + wR) / strides[0];\n          if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n          int wRPerm = ").concat(n, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(t, "; wC++) {\n            int wCPerm = ").concat(t, " - 1 - wC;\n\n            float dyC = float(dyCCorner + wC) / strides[1];\n            bool idyCVal = (dyC >= 0.0) && (dyC < ").concat(e.outWidth, ".0)\n              && (fract(dyC) == 0.0);\n            int idyC = int(dyC);\n\n            float dyC2 = float(dyCCorner + wC + 1) / strides[1];\n            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ").concat(e.outWidth, ".0)\n              && (fract(dyC2) == 0.0);\n            int idyC2 = int(dyC2);\n\n            if (idyCVal && idyCVal2) {\n              for (int d2 = 0; d2 < ").concat(e.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC, d2);\n                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?\n                  dySample : getDy(batch, idyR, idyC2, d2);\n\n                vec2 dyValue = mod(float(idyC), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.xy += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n\n                dyValue = mod(float(idyC2), 2.) == 0. ?\n                  dySample2.xy : dySample2.zw;\n                result.zw += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            } else if (idyCVal) {\n              for (int d2 = 0; d2 < ").concat(e.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC, d2);\n                vec2 dyValue = mod(float(idyC), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.xy += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            } else if (idyCVal2) {\n              for (int d2 = 0; d2 < ").concat(e.outChannels, "; d2 += 2) {\n                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);\n                vec4 dySample = getDy(batch, idyR, idyC2, d2);\n                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?\n                  dySample.xy : dySample.zw;\n                result.zw += vec2(dot(dyValue, wValue.xy),\n                  dot(dyValue, wValue.zw));\n              }\n            }\n          }\n        }\n        setOutput(result);\n      }\n    ")
    };
    var Eo = {
        kernelName: n.Conv2DBackpropInput, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.filter, c = r.inputShape, s = r.strides,
                u = r.pad, l = r.dataFormat, d = r.dimRoundingMode, p = n.backend_util.convertConv2DDataFormat(l),
                h = n.backend_util.computeConv2DInfo(c, i.shape, s, 1, u, d, !1, p);
            if (n.env().getBool("WEBGL_PACK_CONV2DTRANSPOSE") && "channelsLast" === p) {
                var f = [[h.strideHeight, h.strideWidth]], x = new No(h);
                return a.runWebGLProgram(x, [o, i], "float32", f)
            }
            return x = new So(h), a.runWebGLProgram(x, [o, i], "float32")
        }
    };
    var Ao = {
        kernelName: n.Conv3D, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.filter, c = r.strides, s = r.pad,
                u = r.dilations, l = n.backend_util.computeConv3DInfo(o.shape, i.shape, c, u, s), d = new vo(l);
            return a.runWebGLProgram(d, [o, i], "float32")
        }
    };
    var _o = {
        kernelName: n.Conv3DBackpropFilterV2, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.dy, c = r.strides, s = r.pad,
                u = r.filterShape, l = n.backend_util.computeConv3DInfo(o.shape, u, c, 1, s), d = new ko(l);
            return a.runWebGLProgram(d, [o, i], "float32")
        }
    };
    var Oo, Fo = {
            kernelName: n.Conv3DBackpropInputV2, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.filter, c = r.pad, s = r.strides,
                    u = r.inputShape, l = n.backend_util.computeConv3DInfo(u, i.shape, s, 1, c), d = new Ro(l);
                return a.runWebGLProgram(d, [o, i], "float32")
            }
        }, Do = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return cos(x);\n",
            packedOpSnippet: "\n  vec4 result = cos(x);\n  bvec4 isNaN = isnan(x);\n  ".concat(pa, "\n  return result;\n")
        }), Po = {kernelName: n.Cos, backendName: "webgl", kernelFunc: Do},
        Lo = Sa({opSnippet: "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"}),
        Bo = {kernelName: n.Cosh, backendName: "webgl", kernelFunc: Lo}, Vo = function (e, n, t, a, r) {
            this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
            var o = s(e, 4), i = o[0], c = o[1], u = o[2], l = o[3], d = s(n, 1)[0], p = s(t, 2), h = p[0], f = p[1];
            this.outputShape = [d, h, f, l];
            var x = "bilinear" === a ? 1 : 0, v = s(["".concat(c - 1, ".0"), "".concat(u - 1, ".0")], 2), g = v[0],
                m = v[1],
                b = s(h > 1 ? ["".concat((c - 1) / (h - 1)), "(y2-y1) * height_ratio", "y1*".concat(g, " + float(y)*(height_scale)")] : ["0.0", "0.0", "0.5 * (y1+y2) * ".concat(g)], 3),
                C = b[0], y = b[1], w = b[2],
                I = s(f > 1 ? ["".concat((u - 1) / (f - 1)), "(x2-x1) * width_ratio", "x1*".concat(m, " + float(x)*(width_scale)")] : ["0.0", "0.0", "0.5 * (x1+x2) * ".concat(m)], 3),
                S = I[0], k = I[1], R = I[2];
            this.userCode = "\n      const float height_ratio = float(".concat(C, ");\n      const float width_ratio = float(").concat(S, ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ").concat(i, ") {\n          return;\n        }\n\n        float height_scale = ").concat(y, ";\n        float width_scale = ").concat(k, ";\n\n        float in_y = ").concat(w, ";\n        if( in_y < 0.0 || in_y > ").concat(g, " ) {\n          setOutput(float(").concat(r, "));\n          return;\n        }\n        float in_x = ").concat(R, ";\n        if( in_x < 0.0 || in_x > ").concat(m, " ) {\n          setOutput(float(").concat(r, "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(").concat(x, " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ")
        }, Wo = {
            kernelName: n.CropAndResize, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend, a = e.attrs, r = n.image, o = n.boxes, i = n.boxInd, c = a.cropSize,
                    s = a.method, u = a.extrapolationValue, l = new Vo(r.shape, o.shape, c, s, u);
                return t.runWebGLProgram(l, [r, o, i], "float32")
            }
        };
    !function (e) {
        e.Prod = "*", e.Sum = "+"
    }(Oo || (Oo = {}));
    var Uo = function (e, n, t, a) {
        this.op = e, this.outputShape = n, this.variableNames = ["x"], this.customUniforms = [{
            name: "index",
            type: "float"
        }];
        var r = this.outputShape.length, o = this.op === Oo.Prod ? "1.0" : "0.0",
            i = t ? o : "getX(".concat(Mo(r, "coords", this.op), ")"),
            c = this.outputShape[this.outputShape.length - 1], s = "", u = "";
        t ? (s = a ? "end != ".concat(c - 1) : "end != 0", u = a ? "end + 1" : "end - 1") : (s = a ? "end + pow2 < ".concat(c) : "end >= pow2", u = a ? "end + pow2" : "end - pow2"), this.userCode = "\n      void main() {\n        ".concat(Ae(r), " coords = getOutputCoords();\n        int end = ").concat(Go(r, "coords", this.op), ";\n        float val = ").concat(i, ";\n        int pow2 = int(pow(2.0, index));\n        if (").concat(s, ") {\n          int idx = ").concat(u, ";\n          ").concat(Go(r, "coords", this.op), " = idx;\n          val ").concat(this.op, "= getX(").concat(Mo(r, "coords", this.op), ");\n        }\n        setOutput(val);\n      }\n    ")
    };

    function Mo(e, n, t) {
        if (1 === e) return "".concat(n);
        if (2 === e) return "".concat(n, ".x, ").concat(n, ".y");
        if (3 === e) return "".concat(n, ".x, ").concat(n, ".y, ").concat(n, ".z");
        if (4 === e) return "".concat(n, ".x, ").concat(n, ".y, ").concat(n, ".z, ").concat(n, ".w");
        throw new Error("Cumulative ".concat(t, " for rank ").concat(e, " is not yet supported"))
    }

    function Go(e, n, t) {
        if (1 === e) return "".concat(n);
        if (2 === e) return "".concat(n, ".y");
        if (3 === e) return "".concat(n, ".z");
        if (4 === e) return "".concat(n, ".w");
        throw new Error("Cumulative ".concat(t, " for rank ").concat(e, " is not yet supported"))
    }

    function zo(e, t, a, r, o, i) {
        var c = t.shape.length, s = n.backend_util.getAxesPermutation([r], c), u = t;
        null != s && (u = Xa({inputs: {x: t}, backend: a, attrs: {perm: s}}));
        var l = n.backend_util.getInnerMostAxes(1, c)[0];
        if (l !== c - 1) throw new Error("WebGL cumprod shader expects an inner-most axis=".concat(t.shape.length - 1, " ") + "but got axis=".concat(r));
        for (var d = u.shape[l], p = fa({inputs: {x: u}, backend: a}), h = 0; h <= Math.ceil(Math.log2(d)) - 1; h++) {
            var f = new Uo(e, u.shape, !1, i), x = [[h]], v = p;
            p = a.runWebGLProgram(f, [p], p.dtype, x), a.disposeIntermediateTensorInfo(v)
        }
        if (o) {
            f = new Uo(e, u.shape, o, i), v = p;
            p = a.runWebGLProgram(f, [p], p.dtype), a.disposeIntermediateTensorInfo(v)
        }
        if (null != s) {
            var g = Xa({inputs: {x: p}, backend: a, attrs: {perm: n.backend_util.getUndoAxesPermutation(s)}});
            return a.disposeIntermediateTensorInfo(p), a.disposeIntermediateTensorInfo(u), g
        }
        return p
    }

    var Xo = {
        kernelName: n.Cumprod, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = a.axis, i = a.exclusive, c = a.reverse;
            return zo(Oo.Prod, r, t, o, i, c)
        }
    };
    var Ho = {
        kernelName: n.Cumsum, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = a.axis, i = a.exclusive, c = a.reverse;
            return zo(Oo.Sum, r, t, o, i, c)
        }
    };
    var jo = {
        kernelName: n.DenseBincount, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = n.weights, i = a.size, c = a.binaryOutput;
            if (1 === r.shape.length) {
                var s = t.readSync(r.dataId), u = t.readSync(o.dataId), l = Zn(s, u, o.dtype, o.shape, i);
                return t.makeTensorInfo([i], o.dtype, l)
            }
            if (2 === r.shape.length) {
                var d = t.bufferSync(r), p = t.bufferSync(o), h = Jn(d, p, i, c);
                return t.makeTensorInfo(h.shape, o.dtype, h.values)
            }
            throw new Error("Error in denseBincount: input must be at most rank 2, but got rank" + "".concat(r.shape.length, "."))
        }
    }, Ko = function () {
        function e(e, n, t) {
            this.variableNames = ["x"], this.outputShape = [], this.outputShape = e, this.blockSize = n, this.dataFormat = t, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ".concat(this.getHeightCoordString(), ";\n      int w = ").concat(this.getWidthCoordString(), ";\n      int d = ").concat(this.getDepthCoordString(), ";\n\n      int in_h = h / ").concat(n, ";\n      int offset_h = imod(h, ").concat(n, ");\n      int in_w = w / ").concat(n, ";\n      int offset_w = imod(w, ").concat(n, ");\n      int offset_d = (offset_h * ").concat(n, " + offset_w) *\n        ").concat(this.getOutputDepthSize(), ";\n      int in_d = d + offset_d;\n\n      float result = ").concat(this.getInputSamplingString(), ";\n      setOutput(result);\n    }\n  ")
        }

        return e.prototype.getHeightCoordString = function () {
            return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]"
        }, e.prototype.getWidthCoordString = function () {
            return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]"
        }, e.prototype.getDepthCoordString = function () {
            return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]"
        }, e.prototype.getOutputDepthSize = function () {
            return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1]
        }, e.prototype.getInputSamplingString = function () {
            return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)"
        }, e
    }();
    var qo = {
        kernelName: n.DepthToSpace, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = a.blockSize, i = a.dataFormat, c = r.shape[0],
                s = ("NHWC" === i ? r.shape[1] : r.shape[2]) * o, u = ("NHWC" === i ? r.shape[2] : r.shape[3]) * o,
                l = ("NHWC" === i ? r.shape[3] : r.shape[1]) / (o * o),
                d = new Ko("NHWC" === i ? [c, s, u, l] : [c, l, s, u], o, i);
            return t.runWebGLProgram(d, [r], r.dtype)
        }
    }, Yo = function (e, n, t, a, r) {
        void 0 === n && (n = !1), void 0 === t && (t = null), void 0 === a && (a = !1), void 0 === r && (r = !1), this.variableNames = ["x", "W"], this.customUniforms = [{
            name: "pads",
            type: "ivec2"
        }, {name: "strides", type: "ivec2"}, {name: "dilations", type: "ivec2"}, {
            name: "inDims",
            type: "ivec2"
        }], this.outputShape = e.outShape, this.enableShapeUniforms = Le(this.outputShape.length);
        var o = e.filterHeight, i = e.filterWidth, c = e.outChannels / e.inChannels, s = "", u = "";
        t && (s = a ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ".concat(t, "\n        }") : r ? "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ".concat(t, "\n        }") : "\n          float activation(float x) {\n            ".concat(t, "\n          }\n        "), u = "result = activation(result);");
        var l = n ? "result += getBiasAtOutCoords();" : "";
        n && this.variableNames.push("bias"), a && this.variableNames.push("preluActivationWeights"), r && this.variableNames.push("leakyreluAlpha"), this.userCode = "\n      ".concat(s, "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ").concat(c, ";\n        int q = d2 - d1 * ").concat(c, ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ").concat(o, "; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ").concat(i, "; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ").concat(l, "\n        ").concat(u, "\n        setOutput(result);\n      }\n    ")
    }, Qo = function (e, t, a, r, o) {
        void 0 === t && (t = !1), void 0 === a && (a = null), void 0 === r && (r = !1), void 0 === o && (o = !1), this.variableNames = ["x", "W"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "pads",
            type: "ivec2"
        }, {name: "strides", type: "ivec2"}, {name: "dilations", type: "ivec2"}, {
            name: "inDims",
            type: "ivec2"
        }], this.outputShape = e.outShape, this.enableShapeUniforms = Le(this.outputShape.length);
        for (var i = e.outChannels / e.inChannels, c = e.padInfo.left, s = e.strideWidth, u = e.dilationWidth, l = e.filterHeight, d = e.filterWidth, p = d, h = "\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;", f = 0; f < d; f++) h += "\n          vec4 xTexelC".concat(2 * f, ";\n          int xTexelC").concat(2 * f, "Ready;\n          vec4 xTexelC").concat(2 * f + 1, ";\n          int xTexelC").concat(2 * f + 1, "Ready;\n          vec4 xC").concat(f, ";");
        for (h += "\n    for (int r = 0; r < ".concat(l, "; r++) {\n      "), f = 0; f < d; f++) h += "\n          xTexelC".concat(2 * f, " = vec4(0.0);\n          xTexelC").concat(2 * f, "Ready = 0;\n          xTexelC").concat(2 * f + 1, " = vec4(0.0);\n          xTexelC").concat(2 * f + 1, "Ready = 0;\n          xC").concat(f, " = vec4(0.0);");
        h += "\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";
        for (var x = 0; x < (p + 1) / 2; x++) {
            var v = 2 * x;
            if (h += "\n          xC = xCCorner + ".concat(v * u, ";\n          "), 1 === s) {
                if (v < d && (c % 2 == 1 ? (h += "\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(v, "Ready == 0) {\n                  xTexelC").concat(v, " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(v, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(v, "Ready = 1;\n                }\n              "), h += 1 === u && v > 0 ? "\n                xC".concat(v, " = vec4(xTexelC").concat(v - 2, ".zw, xTexelC").concat(v, ".xy);\n                ") : "\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC".concat(v, " = vec4(previous.zw, xTexelC").concat(v, ".xy);\n                  } else {\n                    xC").concat(v, " = vec4(0.0, 0.0, xTexelC").concat(v, ".xy);\n                  }\n                  ")) : h += "\n                if (xC >= 0 && xC < inDims[1] && xTexelC".concat(v, "Ready == 0) {\n                  xTexelC").concat(v, " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC").concat(v, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(v, "Ready = 1;\n                }\n\n                xC").concat(v, " = xTexelC").concat(v, ";\n                "), v + 1 < d)) {
                    var g = c % 2 == 0 ? n.util.nearestLargerEven(u) : u;
                    u % 2 == 0 && c % 2 == 1 || u % 2 != 0 && c % 2 != 1 ? (h += "\n                  xCOffset = xC + imod(pads[1], 2) + ".concat(g, ";\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(v + 1, "Ready == 0) {\n                    xTexelC").concat(v + 1, " = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC").concat(v + 1, ".zw = vec2(0.0);\n                    }\n                    xTexelC").concat(v + 1, "Ready = 1;\n                  }\n                  "), h += u > 1 ? "\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n                     xC".concat(v + 1, " = vec4(previous.zw, xTexelC").concat(v + 1, ".xy);\n                    } else {\n                     xC").concat(v + 1, " = vec4(0.0, 0.0, xTexelC").concat(v + 1, ".xy);\n                    }\n                    ") : "\n                    xC".concat(v + 1, " = vec4(xTexelC").concat(v, ".zw, xTexelC").concat(v + 1, ".xy);\n                    ")) : h += 1 === g ? "\n                    xC".concat(v + 1, " = xTexelC").concat(v, ";\n                    ") : "\n                    xCOffset = xC + ".concat(g, ";\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(v + 1, "Ready == 0) {\n                      xTexelC").concat(v + 1, " = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC").concat(v + 1, ".zw = vec2(0.0);\n                      }\n                      xTexelC").concat(v + 1, "Ready = 1;\n                    }\n\n                    xC").concat(v + 1, " = xTexelC").concat(v + 1, ";\n                    ")
                }
            } else v < d && (c % 2 == 1 ? (h += "\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC".concat(v, "Ready == 0) {\n                  xTexelC").concat(v, " = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(v, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(v, "Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC").concat(v + 1, "Ready == 0) {\n                  xTexelC").concat(v + 1, " = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC").concat(v + 1, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(v + 1, "Ready = 1;\n                }\n\n                xC").concat(v, " = vec4(xTexelC").concat(v, ".zw, xTexelC").concat(v + 1, ".zw);\n              "), v + 1 < d && (h += "\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC".concat(v + 1, " = vec4(xTexelC").concat(v + 1, ".xy, final.xy);\n                "))) : (h += "\n                if(xC >= 0 && xC < inDims[1] && xTexelC".concat(v, "Ready == 0) {\n                  xTexelC").concat(v, " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC").concat(v, ".zw = vec2(0.0);\n                  }\n                  xTexelC").concat(v, "Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC").concat(v + 1, "Ready == 0) {\n                  xTexelC").concat(v + 1, " = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC").concat(v + 1, ".zw = vec2(0.);\n                  }\n                  xTexelC").concat(v + 1, "Ready = 1;\n                }\n\n                xC").concat(v, " = vec4(\n                  xTexelC").concat(v, ".xy, xTexelC").concat(v + 1, ".xy);\n              "), v + 1 < d && (h += "\n                  xC".concat(v + 1, " = vec4(xTexelC").concat(v, ".zw, xTexelC").concat(v + 1, ".zw);\n                "))));
            v < d && (h += "\n            wTexel = getW(r, ".concat(v, ", d1, q);\n            dotProd += xC").concat(v, " * vec4(wTexel.xz, wTexel.xz);\n          "), v + 1 < d && (h += "\n              wTexel = getW(r, ".concat(v + 1, ", d1, q);\n              dotProd += xC").concat(v + 1, " * vec4(wTexel.xz, wTexel.xz);\n            ")))
        }
        h += "\n    }\n  ", h += "\n      }\n    ";
        var m = "", b = "";
        a && (m = r ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ".concat(a, "\n        }") : o ? "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ".concat(a, "\n        }") : "vec4 activation(vec4 x) {\n          ".concat(a, "\n        }"), b = "result = activation(result);");
        var C = t ? "result += getBiasAtOutCoords();" : "";
        t && this.variableNames.push("bias"), r && this.variableNames.push("preluActivationWeights"), o && this.variableNames.push("leakyreluAlpha"), this.userCode = "\n      ".concat(m, "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ").concat(i, ";\n        int q = d2 - d1 * ").concat(i, ";\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ").concat(h, "\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ").concat(C, "\n        ").concat(b, "\n        setOutput(result);\n      }\n    ")
    };
    var Zo = {
        kernelName: n.DepthwiseConv2dNative, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.filter, c = r.strides, s = r.pad,
                u = r.dilations, l = r.dimRoundingMode, d = u;
            null == d && (d = [1, 1]), n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(c, d), (function () {
                return "Error in depthwiseConv2d: Either strides or dilations must be " + "1. Got strides ".concat(c, " and dilations '").concat(d, "'")
            }));
            var p, h = n.backend_util.computeConv2DInfo(o.shape, i.shape, c, d, s, l, !0);
            p = n.env().getBool("WEBGL_PACK_DEPTHWISECONV") && h.strideWidth <= 2 && h.outChannels / h.inChannels == 1 ? new Qo(h) : new Yo(h);
            var f = [[h.padInfo.top, h.padInfo.left], [h.strideHeight, h.strideWidth], [h.dilationHeight, h.dilationWidth], [h.inHeight, h.inWidth]];
            return a.runWebGLProgram(p, [o, i], "float32", f)
        }
    }, Jo = function (e) {
        this.variableNames = ["x", "dy"], this.outputShape = e.filterShape;
        var n = e.strideHeight, t = e.strideWidth, a = e.padInfo.top, r = e.padInfo.left,
            o = e.outChannels / e.inChannels;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ".concat(o, " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ").concat(e.batchSize, "; b++) {\n          for (int yR = 0; yR < ").concat(e.outHeight, "; yR++) {\n            int xR = wR + yR * ").concat(n, " - ").concat(a, ";\n\n            if (xR < 0 || xR >= ").concat(e.inHeight, ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < ").concat(e.outWidth, "; yC++) {\n              int xC = wC + yC * ").concat(t, " - ").concat(r, ";\n\n              if (xC < 0 || xC >= ").concat(e.inWidth, ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, $o = function (e) {
        this.variableNames = ["dy", "W"], this.outputShape = e.inShape;
        var n = e.filterHeight, t = e.filterWidth, a = e.strideHeight, r = e.strideWidth, o = n - 1 - e.padInfo.top,
            i = t - 1 - e.padInfo.left, c = e.outChannels / e.inChannels;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(o, ", ").concat(i, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ").concat(n, "; wR++) {\n          float dyR = float(dyRCorner + wR) / ").concat(a, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ").concat(n, " - 1 - wR;\n\n          for (int wC = 0; wC < ").concat(t, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(r, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ").concat(t, " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ").concat(c, "; dm++) {\n              int d2 = d1 * ").concat(c, " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    };
    var ei = {
        kernelName: n.DepthwiseConv2dNativeBackpropFilter, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.dy, c = r.strides, s = r.dilations, u = r.pad,
                l = r.dimRoundingMode, d = r.filterShape,
                p = n.backend_util.computeConv2DInfo(o.shape, d, c, s, u, l, !0), h = new Jo(p);
            return a.runWebGLProgram(h, [o, i], "float32")
        }
    };
    var ni = {
        kernelName: n.DepthwiseConv2dNativeBackpropInput, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.filter, c = r.strides, s = r.dilations,
                u = r.pad, l = r.dimRoundingMode, d = r.inputShape,
                p = n.backend_util.computeConv2DInfo(d, i.shape, c, s, u, l, !0), h = new $o(p);
            return a.runWebGLProgram(h, [o, i], "float32")
        }
    }, ti = function (e) {
        this.variableNames = ["X"], this.outputShape = [e, e], this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "
    };
    var ai = {
        kernelName: n.Diag, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = t.x, o = u(u([], s(r.shape), !1), s(r.shape), !1),
                i = n.util.sizeFromShape(r.shape), c = Da({inputs: {x: r}, backend: a, attrs: {shape: [i]}}),
                l = new ti(i), d = a.runWebGLProgram(l, [c], c.dtype),
                p = Da({inputs: {x: d}, backend: a, attrs: {shape: o}});
            return a.disposeIntermediateTensorInfo(c), a.disposeIntermediateTensorInfo(d), p
        }
    }, ri = function (e) {
        this.variableNames = ["x", "W"], this.outputShape = e.outShape;
        var n = e.inHeight, t = e.inWidth, a = e.padInfo, r = e.strideHeight, o = e.strideWidth, i = e.filterHeight,
            c = e.filterWidth, s = e.dilationHeight, u = e.dilationWidth, l = a.top, d = a.left;
        this.userCode = "\n      const ivec2 strides = ivec2(".concat(r, ", ").concat(o, ");\n      const ivec2 pads = ivec2(").concat(l, ", ").concat(d, ");\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ").concat(i, "; h++) {\n          int hIn = hBeg + h * ").concat(s, ";\n\n          if (hIn >= 0 && hIn < ").concat(n, ") {\n            for (int w = 0; w < ").concat(c, "; w++) {\n              int wIn = wBeg + w * ").concat(u, ";\n\n              if (wIn >= 0 && wIn < ").concat(t, ") {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    ")
    };
    var oi = {
        kernelName: n.Dilation2D, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = a.filter, s = o.strides, u = o.pad,
                l = o.dilations, d = n.backend_util.computeDilation2DInfo(i.shape, c.shape, s, u, "NHWC", l),
                p = new ri(d), h = Da({
                    inputs: {x: t = r.runWebGLProgram(p, [i, c], "float32")},
                    backend: r,
                    attrs: {shape: d.outShape}
                });
            return r.disposeIntermediateTensorInfo(t), h
        }
    };
    var ii = {
            kernelName: n.Einsum, backendName: "webgl", kernelFunc: function (e) {
                var t, a, r, o, i = e.inputs, s = e.backend, u = e.attrs.equation, l = i,
                    d = n.backend_util.decodeEinsumEquation(u, l.length), p = d.allDims, h = d.summedDims, f = d.idDims;
                n.backend_util.checkEinsumDimSizes(p.length, f, l);
                for (var x = n.backend_util.getEinsumComputePath(h, f), v = x.path, g = x.steps, m = g.length, b = null, C = p.length, y = [], w = 0; w < m; ++w) {
                    try {
                        for (var I = (t = void 0, c(g[w])), S = I.next(); !S.done; S = I.next()) {
                            var k = S.value, R = n.backend_util.getEinsumPermutation(C, f[k]), T = R.permutationIndices,
                                N = R.expandDims, E = void 0;
                            n.backend_util.isIdentityPermutation(T) ? E = l[k] : (E = Xa({
                                inputs: {x: l[k]},
                                backend: s,
                                attrs: {perm: T}
                            }), y.push(E));
                            for (var A = E.shape.slice(), _ = 0; _ < N.length; ++_) A.splice(N[_], 0, 1);
                            n.util.arraysEqual(E.shape, A) || (E = Da({
                                inputs: {x: E},
                                backend: s,
                                attrs: {shape: A}
                            }), y.push(E)), null === b ? b = E : (b = Oa({inputs: {a: E, b: b}, backend: s}), y.push(b))
                        }
                    } catch (e) {
                        t = {error: e}
                    } finally {
                        try {
                            S && !S.done && (a = I.return) && a.call(I)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    w < m - 1 && (v[w] >= 0 && (b = Ga({
                        inputs: {x: b},
                        backend: s,
                        attrs: {axis: v[w] - (p.length - C), keepDims: !1}
                    }), y.push(b)), C--)
                }
                try {
                    for (var O = c(y), F = O.next(); !F.done; F = O.next()) {
                        var D = F.value;
                        D !== b && s.disposeIntermediateTensorInfo(D)
                    }
                } catch (e) {
                    r = {error: e}
                } finally {
                    try {
                        F && !F.done && (o = O.return) && o.call(O)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return b
            }
        }, ci = Sa({
            opSnippet: "return (x >= 0.0) ? x : (exp(x) - 1.0);",
            packedOpSnippet: "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"
        }), si = {kernelName: n.Elu, backendName: "webgl", kernelFunc: ci}, ui = {
            kernelName: n.EluGrad, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = t.dy, o = t.y,
                    i = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new ha("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", r.shape, o.shape) : new da("return (b >= 0.0) ? a : a * (b + 1.0);", r.shape, o.shape);
                return a.runWebGLProgram(i, [r, o], r.dtype)
            }
        }, li = ka({
            opSnippet: "return float(a == b);",
            packedOpSnippet: "\n  return vec4(equal(a, b));\n",
            dtype: "bool",
            cpuKernelImpl: at
        }), di = {kernelName: n.Equal, backendName: "webgl", kernelFunc: li},
        pi = Sa({opSnippet: '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = '.concat(n.backend_util.ERF_P, ";\n  float a1 = ").concat(n.backend_util.ERF_A1, ";\n  float a2 = ").concat(n.backend_util.ERF_A2, ";\n  float a3 = ").concat(n.backend_util.ERF_A3, ";\n  float a4 = ").concat(n.backend_util.ERF_A4, ";\n  float a5 = ").concat(n.backend_util.ERF_A5, ";\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n")}),
        hi = {kernelName: n.Erf, backendName: "webgl", kernelFunc: pi}, fi = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return exp(x);\n",
            packedOpSnippet: "\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
            cpuKernelImpl: rt,
            dtype: "float32"
        }), xi = {kernelName: n.Exp, backendName: "webgl", kernelFunc: fi};

    function vi(e) {
        var t = e.inputs, a = e.attrs, r = e.backend, o = a.dim, i = t.input, c = i.shape.length, s = i.shape.slice(),
            u = o;
        return o < 0 && (n.util.assert(-(c + 1) <= o, (function () {
            return "Axis must be in the interval [".concat(-(c + 1), ", ").concat(c, "]")
        })), u = c + o + 1), s.splice(u, 0, 1), Da({inputs: {x: i}, backend: r, attrs: {shape: s}})
    }

    var gi = {kernelName: n.ExpandDims, backendName: "webgl", kernelFunc: vi}, mi = "return exp(x) - 1.0;",
        bi = Sa({opSnippet: mi, packedOpSnippet: mi, cpuKernelImpl: ot}),
        Ci = {kernelName: n.Expm1, backendName: "webgl", kernelFunc: bi}, yi = function (e, n, t) {
            this.variableNames = ["real", "imag"];
            var a = n[1];
            this.outputShape = n;
            var r, o = t ? "2.0 * ".concat(Math.PI) : "-2.0 * ".concat(Math.PI), i = t ? "".concat(a, ".0") : "1.0";
            if ("real" === e) r = "return real * expR - imag * expI;"; else {
                if ("imag" !== e) throw new Error('FFT component must be either "real" or "imag", got '.concat(e, "."));
                r = "return real * expI + imag * expR;"
            }
            this.userCode = "\n      const float exponentMultiplier = ".concat(o, ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ").concat(r, "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(").concat(a, ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ").concat(a, "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ").concat(i, ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ")
        };

    function wi(e, t, a) {
        var r = a.texData.get(e.dataId), o = n.util.sizeFromShape(e.shape), i = e.shape[e.shape.length - 1],
            c = Da({inputs: {x: e}, backend: a, attrs: {shape: [o / i, i]}}), s = c.shape, u = new yi("real", s, t),
            l = new yi("imag", s, t), d = [{
                dataId: r.complexTensorInfos.real.dataId,
                dtype: r.complexTensorInfos.real.dtype,
                shape: s
            }, {dataId: r.complexTensorInfos.imag.dataId, dtype: r.complexTensorInfos.imag.dtype, shape: s}],
            p = a.runWebGLProgram(u, d, "float32"), h = a.runWebGLProgram(l, d, "float32"),
            f = va({inputs: {real: p, imag: h}, backend: a});
        a.disposeIntermediateTensorInfo(p), a.disposeIntermediateTensorInfo(h);
        var x = Da({inputs: {x: f}, backend: a, attrs: {shape: e.shape}});
        return a.disposeIntermediateTensorInfo(c), a.disposeIntermediateTensorInfo(f), x
    }

    var Ii = {
        kernelName: n.FFT, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend;
            return wi(n.input, !1, t)
        }
    }, Si = function (e, n) {
        this.outputShape = [], this.customUniforms = [{
            name: "value",
            type: "float"
        }], this.variableNames = ["x"], this.outputShape = e, this.userCode = "\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "
    };

    function ki(e) {
        var t = e.backend, a = e.attrs, r = a.shape, o = a.value, i = a.dtype;
        if ("string" === (i = i || n.util.inferDtype(o))) {
            var c = n.util.getArrayFromDType(i, n.util.sizeFromShape(r));
            return c.fill(o), t.makeTensorInfo(r, i, c)
        }
        var s = new Si(r, o), u = [[o]];
        return t.runWebGLProgram(s, [], i, u)
    }

    var Ri, Ti = {kernelName: n.Fill, backendName: "webgl", kernelFunc: ki}, Ni = function (e) {
            this.variableNames = ["Image"], this.outputShape = [];
            var n = e[2];
            this.outputShape = e, this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ".concat(n, " - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ").concat(n, ") {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    ")
        }, Ei = {
            kernelName: n.FlipLeftRight, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend, a = n.image, r = t, o = new Ni(a.shape);
                return r.runWebGLProgram(o, [a], a.dtype)
            }
        }, Ai = "return floor(x);", _i = Sa({opSnippet: Ai, packedOpSnippet: Ai, cpuKernelImpl: it}),
        Oi = {kernelName: n.Floor, backendName: "webgl", kernelFunc: _i}, Fi = ka({
            opSnippet: "\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",
            packedOpSnippet: "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",
            dtype: "int32"
        }), Di = {kernelName: n.FloorDiv, backendName: "webgl", kernelFunc: Fi}, Pi = function (e) {
            this.variableNames = ["A"];
            var n = fe(), t = s(e, 2), a = t[0], r = t[1];
            this.outputShape = e, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(".concat(r, ".0, ").concat(a, ".0);\n\n        vec4 values = ").concat(n.texture2D, "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ")
        }, Li = function (e) {
            this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
            var n = fe(), t = s(e, 2), a = t[0], r = t[1];
            this.outputShape = e, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(".concat(r, ".0, ").concat(a, ".0);\n            vec4 values = ").concat(n.texture2D, "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ").concat(n.output, " = result;\n      }\n    ")
        }, Bi = {
            kernelName: n.FromPixels, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.pixels, i = r.numChannels,
                    c = "undefined" != typeof HTMLVideoElement && o instanceof HTMLVideoElement,
                    u = "undefined" != typeof HTMLImageElement && o instanceof HTMLImageElement,
                    l = s(c ? [o.videoWidth, o.videoHeight] : [o.width, o.height], 2), p = l[0], h = l[1], f = [h, p],
                    x = [h, p, i];
                if (u || c) {
                    var v = n.env().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
                    null != Ri && v === Vi || (Vi = v, Ri = document.createElement("canvas").getContext("2d", {willReadFrequently: Vi})), Ri.canvas.width = p, Ri.canvas.height = h, Ri.drawImage(o, 0, 0, p, h), o = Ri.canvas
                }
                var g = a.makeTensorInfo(f, "int32");
                a.texData.get(g.dataId).usage = d.PIXELS, a.gpgpu.uploadPixelDataToTexture(a.getTexture(g.dataId), o);
                var m = n.env().getBool("WEBGL_PACK") ? new Li(x) : new Pi(x), b = a.runWebGLProgram(m, [g], "int32");
                return a.disposeData(g.dataId), b
            }
        }, Vi = n.env().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
    var Wi = {
        kernelName: n.FusedConv2D, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = a.filter, s = a.bias,
                u = a.preluActivationWeights, l = o.strides, d = o.pad, p = o.dataFormat, h = o.dilations,
                f = o.dimRoundingMode, x = o.activation, v = o.leakyreluAlpha,
                g = n.backend_util.convertConv2DDataFormat(p),
                m = n.backend_util.computeConv2DInfo(i.shape, c.shape, l, h, d, f, !1, g), b = [], C = null != s,
                y = null != u, w = "leakyrelu" === x, I = function () {
                    var e = [i, c], t = function (e, n) {
                        if ("NCHW" === n && 1 === e.shape.length && 1 !== e.shape[0]) {
                            var t = Da({inputs: {x: e}, backend: r, attrs: {shape: [e.shape[0], 1, 1]}});
                            return b.push(t), t
                        }
                        return e
                    };
                    if (C && e.push(t(s, p)), y && e.push(t(u, p)), w) {
                        var a = r.makeTensorInfo([], "float32", n.util.createScalarValue(v, "float32"));
                        e.push(a), b.push(a)
                    }
                    return e
                };
            if (1 !== m.filterHeight || 1 !== m.filterWidth || 1 !== m.dilationHeight || 1 !== m.dilationWidth || 1 !== m.strideHeight || 1 !== m.strideWidth || "SAME" !== m.padInfo.type && "VALID" !== m.padInfo.type) if (m.strideWidth <= 2 && "channelsLast" === g && n.env().getBool("WEBGL_EXP_CONV")) {
                var S = x ? Ra(x, !0) : null, k = new go(m, C, S, y, w),
                    R = [[m.padInfo.top, m.padInfo.left], [m.strideHeight, m.strideWidth], [m.dilationHeight, m.dilationWidth], [m.inHeight, m.inWidth]],
                    T = I();
                t = r.runWebGLProgram(k, T, "float32", R)
            } else if (n.env().getBool("WEBGL_CONV_IM2COL")) t = yo({
                x: i,
                filter: c,
                convInfo: m,
                backend: r,
                bias: s,
                activation: x,
                preluActivationWeights: u,
                leakyreluAlpha: v
            }); else {
                S = x ? Ra(x, !1) : null, k = new xo(m, C, S, y, w);
                var N = I();
                t = r.runWebGLProgram(k, N, "float32")
            } else t = Co({
                x: i,
                filter: c,
                convInfo: m,
                backend: r,
                bias: s,
                activation: x,
                preluActivationWeights: u,
                leakyreluAlpha: v
            });
            var E = Da({inputs: {x: t}, backend: r, attrs: {shape: m.outShape}});
            return b.push(t), b.forEach((function (e) {
                return r.disposeIntermediateTensorInfo(e)
            })), E
        }
    };
    var Ui = {
        kernelName: n.FusedDepthwiseConv2D, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.filter, c = t.bias,
                s = t.preluActivationWeights, u = r.strides, l = r.pad, d = r.dilations, p = r.dimRoundingMode,
                h = r.activation, f = r.leakyreluAlpha, x = [], v = d;
            null == v && (v = [1, 1]), n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(u, v), (function () {
                return "Error in depthwiseConv2d: Either strides or dilations must be " + "1. Got strides ".concat(u, " and dilations '").concat(v, "'")
            }));
            var g, m = n.backend_util.computeConv2DInfo(o.shape, i.shape, u, v, l, p, !0),
                b = n.env().getBool("WEBGL_PACK_DEPTHWISECONV") && m.strideWidth <= 2 && m.outChannels / m.inChannels == 1,
                C = h ? Ra(h, b) : null, y = [o, i], w = null != c, I = null != s, S = "leakyrelu" === h;
            if (w && y.push(c), I && y.push(s), S) {
                var k = a.makeTensorInfo([], "float32", n.util.createScalarValue(f, "float32"));
                y.push(k), x.push(k)
            }
            g = b ? new Qo(m, w, C, I, S) : new Yo(m, w, C, I, S);
            var R = [[m.padInfo.top, m.padInfo.left], [m.strideHeight, m.strideWidth], [m.dilationHeight, m.dilationWidth], [m.inHeight, m.inWidth]],
                T = a.runWebGLProgram(g, y, "float32", R);
            return x.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), T
        }
    }, Mi = function (e, n, t, a) {
        this.sliceDim = e, this.strides = n, this.paramsShape = a, this.variableNames = ["x", "indices"], this.outputShape = t;
        for (var r = Ae(t.length), o = "\n    int index;", i = 0; i < this.sliceDim; i++) o += "\n          index = round(getIndices(coords[0], ".concat(i, "));\n          out_of_bounds = out_of_bounds || index < 0;\n          out_of_bounds = out_of_bounds || index >= ").concat(this.paramsShape[i], ";\n          flattenIndex += index * ").concat(this.strides[i], ";");
        this.userCode = "\n         void main() {\n          ".concat(r, " coords = getOutputCoords();\n          int flattenIndex = 0;\n          bool out_of_bounds = false;\n\n          ").concat(o, "\n\n          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));\n        }\n      ")
    };
    var Gi = {
        kernelName: n.GatherNd, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = t.params, o = t.indices, i = o.shape, c = i[i.length - 1],
                u = n.util.sizeFromShape(r.shape), l = s(n.backend_util.prepareAndValidate(r, o), 4), d = l[0],
                p = l[1], h = l[2], f = l[3], x = Da({inputs: {x: o}, backend: a, attrs: {shape: [p, c]}}),
                v = Da({inputs: {x: r}, backend: a, attrs: {shape: [n.util.sizeFromShape(r.shape) / h, h]}});
            if (a.shouldExecuteOnCPU([r, o]) || "string" === r.dtype) {
                var g = a.readSync(o.dataId), m = a.bufferSync(r), b = ct(g, m, r.dtype, p, c, h, f, r.shape, u);
                return a.makeTensorInfo(d, r.dtype, b.values)
            }
            var C = new Mi(c, f, [p, h], r.shape), y = a.runWebGLProgram(C, [v, x], v.dtype),
                w = Da({inputs: {x: y}, backend: a, attrs: {shape: d}});
            return a.disposeIntermediateTensorInfo(x), a.disposeIntermediateTensorInfo(v), a.disposeIntermediateTensorInfo(y), w
        }
    }, zi = function (e, n) {
        this.variableNames = ["A", "indices"], this.outputShape = n, this.rank = n.length;
        var t = Ae(this.rank), a = function (e, n) {
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], a = [], r = 0; r < e.length; r++) 2 === r ? a.push("index") : a.push("".concat(t[r]));
            return a.join()
        }(e);
        this.userCode = "\n      void main() {\n        ".concat(t, " resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ").concat(e[2], ") ? 1.0 : 0.0;\n        setOutput(inBounds * getA(").concat(a, "));\n      }\n    ")
    };

    function Xi(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.indices, c = r.axis, s = r.batchDims,
            u = n.util.parseAxisParam(c, o.shape)[0];
        if (n.env().get("DEBUG")) for (var l = a.readSync(i.dataId), d = o.shape[u], p = function (e) {
            var t = l[e];
            n.util.assert(t <= d - 1 && t >= 0, (function () {
                return "GatherV2: the index value ".concat(t, " is not in [0, ").concat(d - 1, "]")
            }))
        }, h = 0; h < l.length; ++h) p(h);
        var f = n.backend_util.segment_util.collectGatherOpShapeInfo(o, i, u, s), x = n.util.sizeFromShape(i.shape),
            v = [],
            g = Da({inputs: {x: o}, backend: a, attrs: {shape: [f.batchSize, f.outerSize, f.dimSize, f.sliceSize]}}),
            m = Da({inputs: {x: i}, backend: a, attrs: {shape: [f.batchSize, x / f.batchSize]}});
        v.push(g), v.push(m);
        var b = [f.batchSize, f.outerSize, x / f.batchSize, f.sliceSize];
        if (a.shouldExecuteOnCPU([o, i]) || "string" === o.dtype) {
            var C = a.bufferSync(m), y = a.bufferSync(g), w = st(y, C, b);
            return v.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), a.makeTensorInfo(f.outputShape, w.dtype, w.values)
        }
        var I = new zi(g.shape, b), S = a.runWebGLProgram(I, [g, m], g.dtype);
        v.push(S);
        var k = Da({inputs: {x: S}, backend: a, attrs: {shape: f.outputShape}});
        return v.forEach((function (e) {
            return a.disposeIntermediateTensorInfo(e)
        })), k
    }

    var Hi = {kernelName: n.GatherV2, backendName: "webgl", kernelFunc: Xi}, ji = ka({
        opSnippet: "return float(a > b);",
        packedOpSnippet: "\n  return vec4(greaterThan(a, b));\n",
        cpuKernelImpl: ut,
        dtype: "bool"
    }), Ki = {kernelName: n.Greater, backendName: "webgl", kernelFunc: ji}, qi = ka({
        opSnippet: "return float(a >= b);",
        packedOpSnippet: "\n  return vec4(greaterThanEqual(a, b));\n",
        dtype: "bool",
        cpuKernelImpl: lt
    }), Yi = {kernelName: n.GreaterEqual, backendName: "webgl", kernelFunc: qi};
    var Qi = {
            kernelName: n.IFFT, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend;
                return wi(n.input, !0, t)
            }
        }, Zi = Sa({opSnippet: "return float(!isnan(x) && !isinf(x));", dtype: "bool"}),
        Ji = {kernelName: n.IsFinite, backendName: "webgl", kernelFunc: Zi},
        $i = Sa({opSnippet: "return float(isinf(x));", dtype: "bool"}),
        ec = {kernelName: n.IsInf, backendName: "webgl", kernelFunc: $i},
        nc = Sa({opSnippet: "return float(isnan(x));", dtype: "bool"}),
        tc = {kernelName: n.IsNan, backendName: "webgl", kernelFunc: nc}, ac = ka({
            opSnippet: "return float(a < b);",
            packedOpSnippet: "\n  return vec4(lessThan(a, b));\n",
            cpuKernelImpl: dt,
            dtype: "bool"
        }), rc = {kernelName: n.Less, backendName: "webgl", kernelFunc: ac}, oc = ka({
            opSnippet: "return float(a <= b);",
            packedOpSnippet: "\n  return vec4(lessThanEqual(a, b));\n",
            cpuKernelImpl: pt,
            dtype: "bool"
        }), ic = {kernelName: n.LessEqual, backendName: "webgl", kernelFunc: oc};
    var cc = {
            kernelName: n.LinSpace, backendName: "webgl", kernelFunc: function (e) {
                var n = e.backend, t = e.attrs, a = t.start, r = t.stop, o = t.num, i = ht(a, r, o);
                return n.makeTensorInfo([i.length], "float32", i)
            }
        }, sc = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return x < 0.0 ? 0./0. : log(x);\n",
            packedOpSnippet: "\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",
            cpuKernelImpl: ft
        }), uc = {kernelName: n.Log, backendName: "webgl", kernelFunc: sc},
        lc = Sa({opSnippet: "if (isnan(x)) return x;\n  return log(1.0 + x);\n"}),
        dc = {kernelName: n.Log1p, backendName: "webgl", kernelFunc: lc}, pc = ka({
            opSnippet: "return float(a >= 1.0 && b >= 1.0);",
            packedOpSnippet: "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",
            dtype: "bool"
        }), hc = {kernelName: n.LogicalAnd, backendName: "webgl", kernelFunc: pc},
        fc = Sa({opSnippet: "return float(!(x >= 1.0));"}),
        xc = {kernelName: n.LogicalNot, backendName: "webgl", kernelFunc: fc}, vc = ka({
            opSnippet: "return float(a >= 1.0 || b >= 1.0);",
            packedOpSnippet: "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",
            dtype: "bool"
        }), gc = {kernelName: n.LogicalOr, backendName: "webgl", kernelFunc: vc}, mc = function (e, n, t, a, r) {
            this.variableNames = ["x"], this.outputShape = [];
            var o, i = n, c = e[3] - 1;
            this.outputShape = e;
            var s = "float(".concat(t, ") + float(").concat(a, ") * sum");
            o = .5 === r ? "inversesqrt(".concat(s, ")") : 1 === r ? "1.0/(".concat(s, ")") : "exp(log(".concat(s, ") * float(-").concat(r, "));"), this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -".concat(i, "; j <= ").concat(i, "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ").concat(c, ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ").concat(o, ";\n        setOutput(val);\n      }\n    ")
        }, bc = function (e, n, t, a, r) {
            this.variableNames = ["x"], this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0;
            var o, i = n, c = e[3] - 1;
            this.outputShape = e;
            var s = "float(".concat(t, ") + float(").concat(a, ") * sum");
            o = .5 === r ? "inversesqrt(".concat(s, ")") : 1 === r ? "1.0/(".concat(s, ")") : "exp(log(".concat(s, ") * float(-").concat(r, "));"), this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ".concat(this.outputShape[3], ";\n        bool hasNextRow = c < ").concat(this.outputShape[2], ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ").concat(i, ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ").concat(i, "; j <= ").concat(i, "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(").concat(c, "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ").concat(o, ";\n        setOutput(result);\n      }\n    ")
        }, Cc = {
            kernelName: n.LRN, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.depthRadius, c = r.bias, s = r.alpha,
                    u = r.beta,
                    l = n.env().getBool("WEBGL_PACK_NORMALIZATION") ? new bc(o.shape, i, c, s, u) : new mc(o.shape, i, c, s, u);
                return a.runWebGLProgram(l, [o], o.dtype)
            }
        }, yc = function (e, n, t, a, r) {
            this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = e, this.depth = e[3], this.depthRadius = n, this.bias = t, this.alpha = a, this.beta = r, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ".concat(this.depth, "; ++d) {\n          int depthBegin = int(max(0.0, float(d - ").concat(n, ")));\n          int depthEnd = int(min(float(").concat(this.depth, "),\n              float(d + ").concat(n, " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ").concat(this.depth, ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(").concat(a, ") * norm + float(").concat(t, ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(").concat(a, ")\n                * float(").concat(r, ")\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ").concat(r, ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ")
        }, wc = {
            kernelName: n.LRNGrad, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend, a = e.attrs, r = n.x, o = n.y, i = n.dy, c = a.depthRadius, s = a.bias,
                    u = a.alpha, l = a.beta, d = new yc(r.shape, c, s, u, l);
                return t.runWebGLProgram(d, [r, o, i], r.dtype)
            }
        };

    function Ic(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.reductionIndices, c = r.keepDims,
            u = o.shape.length, l = n.util.parseAxisParam(i, o.shape), d = l,
            p = n.backend_util.getAxesPermutation(d, u), h = null != p, f = a.shouldExecuteOnCPU([o]), x = o;
        if (h) {
            if (f) {
                for (var v = a.texData.get(x.dataId).values, g = new Array(u), m = 0; m < g.length; m++) g[m] = o.shape[p[m]];
                var b = zt(v, o.shape, o.dtype, p, g);
                x = a.makeTensorInfo(g, o.dtype), a.texData.get(x.dataId).values = b
            } else x = Ma(o, p, a);
            d = n.backend_util.getInnerMostAxes(d.length, u)
        }
        n.backend_util.assertAxesAreInnerMostDims("max", d, u);
        var C, y = s(n.backend_util.computeOutAndReduceShapes(x.shape, d), 2), w = y[0], I = y[1], S = w;
        if (c && (S = n.backend_util.expandShapeToKeepDim(w, l)), f) {
            v = a.texData.get(x.dataId).values;
            var k = xt(v, n.util.sizeFromShape(I), S, o.dtype);
            C = a.makeTensorInfo(S, o.dtype), a.texData.get(C.dataId).values = k
        } else C = function (e, t, a, r) {
            var o = n.util.sizeFromShape(t),
                i = Da({inputs: {x: e}, attrs: {shape: [n.util.sizeFromShape(e.shape) / o, o]}, backend: r}),
                c = Va(i, e.dtype, "max", r), s = Da({inputs: {x: c}, attrs: {shape: a}, backend: r});
            return r.disposeIntermediateTensorInfo(i), r.disposeIntermediateTensorInfo(c), s
        }(x, I, S, a);
        return h && a.disposeIntermediateTensorInfo(x), C
    }

    var Sc = {kernelName: n.Max, backendName: "webgl", kernelFunc: Ic}, kc = ka({
        opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",
        packedOpSnippet: "\n  vec4 result = vec4(max(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n",
        cpuKernelImpl: vt
    }), Rc = {kernelName: n.Maximum, backendName: "webgl", kernelFunc: kc};
    var Tc = {
        kernelName: n.MaxPool, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x;
            de(o, "maxPool");
            var i = r.filterSize, c = r.strides, s = r.pad, u = r.dimRoundingMode;
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(c, 1), (function () {
                return "Error in maxPool: Either strides or dilations must be 1. " + "Got strides ".concat(c, " and dilations '").concat(1, "'")
            }));
            var l = n.backend_util.computePool2DInfo(o.shape, i, c, 1, s, u);
            if (1 === l.filterWidth && 1 === l.filterHeight && n.util.arraysEqual(l.inShape, l.outShape)) return fa({
                inputs: {x: o},
                backend: a
            });
            var d = new kr(l, "max", !1);
            return a.runWebGLProgram(d, [o], o.dtype)
        }
    };
    var Nc = {
        kernelName: n.MaxPool3D, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.filterSize, c = r.strides, s = r.pad,
                u = r.dataFormat, l = r.dimRoundingMode,
                d = n.backend_util.computePool3DInfo(o.shape, i, c, [1, 1, 1], s, l, u), p = new Rr(d, "max", !1);
            return a.runWebGLProgram(p, [o], o.dtype)
        }
    }, Ec = function (e) {
        this.variableNames = ["dy", "maxPos"], this.outputShape = e.inShape;
        var n = e.strideHeight, t = e.strideWidth, a = e.dilationHeight, r = e.effectiveFilterHeight,
            o = e.effectiveFilterWidth, i = r - 1 - e.padInfo.top, c = o - 1 - e.padInfo.left, s = r * o - 1;
        this.userCode = "\n      const ivec2 pads = ivec2(".concat(i, ", ").concat(c, ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ").concat(r, ";\n          wR += ").concat(a, ") {\n          float dyR = float(dyRCorner + wR) / ").concat(n, ".0;\n\n          if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ").concat(o, "; wC++) {\n            float dyC = float(dyCCorner + wC) / ").concat(t, ".0;\n\n            if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ").concat(s, " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ").concat(o, " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    }, Ac = function (e) {
        this.variableNames = ["dy", "maxPos"], this.outputShape = e.inShape;
        var n = e.strideDepth, t = e.strideHeight, a = e.strideWidth, r = e.dilationDepth, o = e.dilationHeight,
            i = e.dilationWidth, c = e.effectiveFilterDepth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth,
            l = c - 1 - e.padInfo.front, d = s - 1 - e.padInfo.top, p = u - 1 - e.padInfo.left, h = c * s * u - 1;
        this.userCode = "\n      const ivec3 pads = ivec3(".concat(l, ", ").concat(d, ", ").concat(p, ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ").concat(c, ";\n           wD += ").concat(r, ") {\n          float dyD = float(dyDCorner + wD) / ").concat(n, ".0;\n\n          if (dyD < 0.0 || dyD >= ").concat(e.outDepth, ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ").concat(s, ";\n              wR += ").concat(o, ") {\n            float dyR = float(dyRCorner + wR) / ").concat(t, ".0;\n\n            if (dyR < 0.0 || dyR >= ").concat(e.outHeight, ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ").concat(u, ";\n                wC += ").concat(i, ") {\n              float dyC = float(dyCCorner + wC) / ").concat(a, ".0;\n\n              if (dyC < 0.0 || dyC >= ").concat(e.outWidth, ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ").concat(h, " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ").concat(s, " * ").concat(u, " +\n                  wR * ").concat(u, " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ")
    };
    var _c = {
        kernelName: n.MaxPool3DGrad, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.input, c = r.filterSize, s = r.strides,
                u = r.pad, l = r.dimRoundingMode, d = n.backend_util.computePool3DInfo(i.shape, c, s, [1, 1, 1], u, l),
                p = new Rr(d, "max", !0), h = a.runWebGLProgram(p, [i], i.dtype), f = new Ac(d),
                x = a.runWebGLProgram(f, [o, h], i.dtype);
            return a.disposeIntermediateTensorInfo(h), x
        }
    };
    var Oc = {
        kernelName: n.MaxPoolGrad, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.dy, i = t.input, c = i;
            de([i, t.output], "maxPoolGrad");
            var s = r.filterSize, u = r.strides, l = r.pad, d = r.dimRoundingMode,
                p = n.backend_util.computePool2DInfo(c.shape, s, u, 1, l, d), h = new kr(p, "max", !0),
                f = a.runWebGLProgram(h, [c], c.dtype), x = new Ec(p), v = a.runWebGLProgram(x, [o, f], c.dtype);
            return a.disposeIntermediateTensorInfo(f), v
        }
    };
    var Fc = {
        kernelName: n.MaxPoolWithArgmax, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.attrs, r = e.backend, o = t.x, i = a.filterSize, c = a.strides, u = a.pad,
                l = a.includeBatchInIndex, d = r;
            n.util.assert(4 === o.shape.length, (function () {
                return "Error in maxPool: input must be rank 4 but got rank ".concat(o.shape.length, ".")
            }));
            var p = [1, 1];
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(c, p), (function () {
                return "Error in maxPool: Either strides or dilations must be 1. " + "Got strides ".concat(c, " and dilations '").concat(p, "'")
            }));
            var h = n.backend_util.computePool2DInfo(o.shape, i, c, p, u), f = s(function (e, n, t, a) {
                var r = new kr(t, "max", !1), o = a.runWebGLProgram(r, [e], "float32");
                return r = new kr(t, "max", !0, !0, n), [o, a.runWebGLProgram(r, [e], "float32")]
            }(o, l, h, d), 2);
            return [f[0], f[1]]
        }
    };
    var Dc = {
        kernelName: n.Mean, backendName: "webgl", kernelFunc: function (e) {
            var t, a, r = e.inputs, o = e.attrs, i = e.backend, u = r.x, l = o.keepDims, d = o.axis, p = i,
                h = u.shape.length, f = n.util.parseAxisParam(d, u.shape), x = f,
                v = n.backend_util.getAxesPermutation(x, h), g = null != v, m = p.shouldExecuteOnCPU([u]), b = [],
                C = u;
            if (g) {
                if (m) {
                    for (var y = p.texData.get(C.dataId).values, w = new Array(h), I = 0; I < w.length; I++) w[I] = u.shape[v[I]];
                    var S = zt(y, u.shape, u.dtype, v, w);
                    C = p.makeTensorInfo(w, u.dtype), p.texData.get(C.dataId).values = S
                } else C = Ma(u, v, p);
                b.push(C), x = n.backend_util.getInnerMostAxes(x.length, h)
            }
            n.backend_util.assertAxesAreInnerMostDims("sum", x, h);
            var k = s(n.backend_util.computeOutAndReduceShapes(C.shape, x), 2), R = k[0], T = k[1], N = R;
            l && (N = n.backend_util.expandShapeToKeepDim(R, f));
            var E = function (e, t, a, r) {
                var o = n.util.sizeFromShape(t),
                    i = Da({inputs: {x: e}, attrs: {shape: [n.util.sizeFromShape(e.shape) / o, o]}, backend: r}),
                    c = Va(i, "float32", "mean", r), s = Da({inputs: {x: c}, attrs: {shape: a}, backend: r});
                return r.disposeIntermediateTensorInfo(i), r.disposeIntermediateTensorInfo(c), s
            }(C, T, N, p);
            try {
                for (var A = c(b), _ = A.next(); !_.done; _ = A.next()) {
                    I = _.value;
                    p.disposeIntermediateTensorInfo(I)
                }
            } catch (e) {
                t = {error: e}
            } finally {
                try {
                    _ && !_.done && (a = A.return) && a.call(A)
                } finally {
                    if (t) throw t.error
                }
            }
            return E
        }
    };
    var Pc = {
            kernelName: n.Min, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.axis, c = r.keepDims, u = o.shape.length,
                    l = n.util.parseAxisParam(i, o.shape), d = l, p = n.backend_util.getAxesPermutation(d, u), h = o;
                null != p && (h = Xa({
                    inputs: {x: o},
                    backend: a,
                    attrs: {perm: p}
                }), d = n.backend_util.getInnerMostAxes(d.length, o.shape.length)), n.backend_util.assertAxesAreInnerMostDims("min", d, u);
                var f, x = s(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], g = x[1],
                    m = Da({inputs: {x: h}, backend: a, attrs: {shape: [-1, n.util.sizeFromShape(g)]}}),
                    b = Va(m, m.dtype, "min", a);
                return f = Da(c ? {
                    inputs: {x: b},
                    backend: a,
                    attrs: {shape: n.backend_util.expandShapeToKeepDim(v, l)}
                } : {
                    inputs: {x: b},
                    backend: a,
                    attrs: {shape: v}
                }), a.disposeIntermediateTensorInfo(m), a.disposeIntermediateTensorInfo(b), null != p && a.disposeIntermediateTensorInfo(h), f
            }
        }, Lc = ka({
            opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",
            packedOpSnippet: "\n  vec4 result = vec4(min(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n",
            cpuKernelImpl: gt
        }), Bc = {kernelName: n.Minimum, backendName: "webgl", kernelFunc: Lc}, Vc = function (e, n, t) {
            this.variableNames = ["x"], this.outputShape = n.map((function (n, t) {
                return n[0] + e[t] + n[1]
            }));
            var a = e.length, r = Ae(a), o = n.map((function (e) {
                    return e[0]
                })).join(","), i = n.map((function (n, t) {
                    return n[0] + e[t]
                })).join(","), c = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, a),
                s = "reflect" === t ? 0 : 1;
            this.userCode = 1 !== a ? "\n      ".concat(r, " start = ").concat(r, "(").concat(o, ");\n      ").concat(r, " end = ").concat(r, "(").concat(i, ");\n\n      void main() {\n        ").concat(r, " outC = getOutputCoords();\n        for (int i = 0; i < ").concat(a, "; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ").concat(s, ";\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ").concat(s, ";\n          }\n        }\n        ").concat(r, " coords = outC - start;\n        setOutput(getX(").concat(c, "));\n      }\n    ") : "\n        int start = ".concat(o, ";\n        int end = ").concat(i, ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ").concat(s, ";\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ").concat(s, ";\n          }\n          setOutput(getX(outC - start));\n        }\n      ")
        }, Wc = function (e, n, t) {
            this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = n.map((function (n, t) {
                return n[0] + e[t] + n[1]
            }));
            var a = e.length, r = Ae(a), o = n.map((function (e) {
                    return e[0]
                })).join(","), i = n.map((function (n, t) {
                    return n[0] + e[t]
                })).join(","), c = jt("rc", a), s = jt("source", a),
                u = "".concat(c[a - 1], " < ").concat(this.outputShape[a - 1]),
                l = 1 === a ? "source" : "vec2(".concat(s.slice(-2).join(), ")"), d = "reflect" === t ? 0 : 1, p = "";
            if (1 === a) {
                var h = "\n        ".concat(r, " source = rc;\n        if (source < start) {\n          source = start * 2 - source - ").concat(d, ";\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ").concat(d, ";\n        }\n        source -= start;\n      ");
                p = "\n        ".concat(r, " rc = outputLoc;\n        ").concat(h, "\n        result[0] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n        ").concat(c[a - 1], " += 1;\n        if(").concat(u, ") {\n          ").concat(h, "\n          result[1] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n        }\n      ")
            } else h = "\n        ".concat(r, " source = rc;\n        ").concat(r, " lt = ").concat(r, "(lessThan(source, start));\n        ").concat(r, " gte = ").concat(r, "(greaterThanEqual(source, end));\n        ").concat(r, " orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ").concat(d, ") +\n                gte * ((end - 1) * 2 - source + ").concat(d, ");\n        source -= start;\n      "), p = "\n        ".concat(r, " rc = outputLoc;\n        ").concat(h, "\n        result[0] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n        ").concat(c[a - 1], " += 1;\n        if(").concat(u, ") {\n          ").concat(h, "\n          result[1] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n        }\n        rc = outputLoc;\n        ").concat(c[a - 2], " += 1;\n        if(").concat(c[a - 2], " < ").concat(this.outputShape[a - 2], ") {\n          ").concat(h, "\n          result[2] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n          ").concat(c[a - 1], " += 1;\n          if(").concat(u, ") {\n            ").concat(h, "\n            result[3] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n          }\n        }\n      ");
            this.userCode = "\n      const ".concat(r, " start = ").concat(r, "(").concat(o, ");\n      const ").concat(r, " end = ").concat(r, "(").concat(i, ");\n\n      void main() {\n        ").concat(r, " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ").concat(p, "\n        setOutput(result);\n      }\n    ")
        }, Uc = {
            kernelName: n.MirrorPad, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.paddings, c = r.mode,
                    s = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Wc(o.shape, i, c) : new Vc(o.shape, i, c);
                return a.runWebGLProgram(s, [o], o.dtype)
            }
        }, Mc = ka({
            opSnippet: "if (b == 0.0) return NAN;\n  return mod(a, b);",
            packedOpSnippet: "\n  vec4 result = mod(a, b);\n  bvec4 isNaN = equal(b, vec4(0.0));\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"
        }), Gc = {kernelName: n.Mod, backendName: "webgl", kernelFunc: Mc}, zc = function (e, n, t) {
            this.variableNames = ["probs"], this.customUniforms = [{
                name: "seed",
                type: "float"
            }], this.outputShape = [e, t], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ".concat(n - 1, "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(").concat(n - 1, "));\n      }\n    ")
        }, Xc = ka({
            opSnippet: "\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",
            packedOpSnippet: "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",
            checkOutOfBounds: !0
        }), Hc = {kernelName: n.RealDiv, backendName: "webgl", kernelFunc: Xc}, jc = "return a - b;",
        Kc = ka({opSnippet: jc, packedOpSnippet: jc, supportsComplex: !0, cpuKernelImpl: Ut}),
        qc = {kernelName: n.Sub, backendName: "webgl", kernelFunc: Kc};

    function Yc(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.logits, i = r.dim, c = n.util.parseAxisParam([i], o.shape),
            s = Ic({inputs: {x: o}, backend: a, attrs: {reductionIndices: c, keepDims: !1}}),
            u = n.backend_util.expandShapeToKeepDim(s.shape, c),
            l = Da({inputs: {x: s}, backend: a, attrs: {shape: u}}), d = Kc({inputs: {a: o, b: l}, backend: a}),
            p = fi({inputs: {x: d}, backend: a}), h = Ga({inputs: {x: p}, backend: a, attrs: {axis: c, keepDims: !1}}),
            f = Da({inputs: {x: h}, backend: a, attrs: {shape: u}}), x = Xc({inputs: {a: p, b: f}, backend: a});
        return a.disposeIntermediateTensorInfo(s), a.disposeIntermediateTensorInfo(l), a.disposeIntermediateTensorInfo(d), a.disposeIntermediateTensorInfo(p), a.disposeIntermediateTensorInfo(h), a.disposeIntermediateTensorInfo(f), x
    }

    var Qc = {kernelName: n.Softmax, backendName: "webgl", kernelFunc: Yc};
    var Zc = {
        kernelName: n.Multinomial, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.logits, o = a.numSamples, i = a.seed, c = a.normalized,
                s = c ? r : Yc({inputs: {logits: r}, backend: t, attrs: {dim: r.shape.length - 1}}), u = s.shape[0],
                l = s.shape[1], d = new zc(u, l, o), p = [[i]], h = t.runWebGLProgram(d, [s], "int32", p);
            return c || t.disposeIntermediateTensorInfo(s), h
        }
    };
    var Jc = {
        kernelName: n.Neg, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = a.x;
            if (r.shouldExecuteOnCPU([o])) {
                var i = r.texData.get(o.dataId), c = s(bt(i.values, o.shape, o.dtype), 2), u = c[0], l = c[1];
                return r.makeTensorInfo(l, o.dtype, u)
            }
            return t = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") ? new aa(o.shape, "\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n") : new $t(o.shape, "if (isnan(x)) return x;\n  return -x;\n"), r.runWebGLProgram(t, [o], o.dtype)
        }
    }, $c = n.kernel_impls.nonMaxSuppressionV3Impl;
    var es = {
        kernelName: n.NonMaxSuppressionV3, backendName: "webgl", kernelFunc: function (e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.boxes, i = t.scores, c = r.maxOutputSize,
                s = r.iouThreshold, u = r.scoreThreshold, l = a.readSync(o.dataId), d = a.readSync(i.dataId),
                p = $c(l, d, c, s, u).selectedIndices;
            return a.makeTensorInfo([p.length], "int32", new Int32Array(p))
        }
    }, ns = n.kernel_impls.nonMaxSuppressionV4Impl;
    var ts = {
        kernelName: n.NonMaxSuppressionV4, backendName: "webgl", kernelFunc: function (e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.boxes, i = t.scores, c = r.maxOutputSize,
                s = r.iouThreshold, u = r.scoreThreshold, l = r.padToMaxOutputSize, d = a.readSync(o.dataId),
                p = a.readSync(i.dataId), h = ns(d, p, c, s, u, l), f = h.selectedIndices, x = h.validOutputs;
            return [a.makeTensorInfo([f.length], "int32", new Int32Array(f)), a.makeTensorInfo([], "int32", new Int32Array([x]))]
        }
    }, as = n.kernel_impls.nonMaxSuppressionV5Impl;
    var rs = {
        kernelName: n.NonMaxSuppressionV5, backendName: "webgl", kernelFunc: function (e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.boxes, i = t.scores, c = r.maxOutputSize,
                s = r.iouThreshold, u = r.scoreThreshold, l = r.softNmsSigma, d = a.readSync(o.dataId),
                p = a.readSync(i.dataId), h = as(d, p, c, s, u, l), f = h.selectedIndices, x = h.selectedScores;
            return [a.makeTensorInfo([f.length], "int32", new Int32Array(f)), a.makeTensorInfo([x.length], "float32", new Float32Array(x))]
        }
    }, os = function (e, n, t, a) {
        this.variableNames = ["indices"], this.outputShape = [e, n], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(".concat(a, "), float(").concat(t, "),\n                      float(index == coords.y)));\n      }\n    ")
    }, is = {
        kernelName: n.OneHot, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.indices, i = r.dtype, c = r.depth, l = r.onValue,
                d = r.offValue, p = n.util.sizeFromShape(o.shape), h = new os(p, c, l, d),
                f = Da({inputs: {x: o}, backend: a, attrs: {shape: [p]}}), x = a.runWebGLProgram(h, [f], i);
            a.disposeIntermediateTensorInfo(f);
            var v = Da({inputs: {x: x}, backend: a, attrs: {shape: u(u([], s(o.shape), !1), [c], !1)}});
            return a.disposeIntermediateTensorInfo(x), v
        }
    };

    function cs(e) {
        var n = e.inputs, t = e.backend, a = n.x;
        if ("complex64" === a.dtype) {
            var r = qr({inputs: {input: a}, backend: t}), o = cs({inputs: {x: r}, backend: t}),
                i = uo({inputs: {input: a}, backend: t}), c = cs({inputs: {x: i}, backend: t}),
                s = va({inputs: {real: o, imag: c}, backend: t});
            return t.disposeIntermediateTensorInfo(r), t.disposeIntermediateTensorInfo(o), t.disposeIntermediateTensorInfo(i), t.disposeIntermediateTensorInfo(c), s
        }
        return ki({attrs: {shape: a.shape, dtype: a.dtype, value: "string" === a.dtype ? "" : 0}, backend: t})
    }

    var ss = {kernelName: n.ZerosLike, backendName: "webgl", kernelFunc: cs};
    var us = {
        kernelName: n.OnesLike, backendName: "webgl", kernelFunc: function e(n) {
            var t = n.inputs, a = n.backend, r = t.x;
            if ("string" === r.dtype) throw new Error("onesLike is not supported under string dtype");
            if ("complex64" === r.dtype) {
                var o = qr({inputs: {input: r}, backend: a}), i = e({inputs: {x: o}, backend: a}),
                    c = uo({inputs: {input: r}, backend: a}), s = cs({inputs: {x: c}, backend: a}),
                    u = va({inputs: {real: i, imag: s}, backend: a});
                return a.disposeIntermediateTensorInfo(o), a.disposeIntermediateTensorInfo(i), a.disposeIntermediateTensorInfo(c), a.disposeIntermediateTensorInfo(s), u
            }
            return ki({attrs: {shape: r.shape, dtype: r.dtype, value: 1}, backend: a})
        }
    };
    var ls = {
        kernelName: n.Pack, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs.axis;
            if (1 === t.length) return vi({inputs: {input: t[0]}, backend: a, attrs: {dim: r}});
            var o = t[0].shape, i = t[0].dtype;
            t.forEach((function (e) {
                n.util.assertShapesMatch(o, e.shape, "All tensors passed to stack must have matching shapes"), n.util.assert(i === e.dtype, (function () {
                    return "All tensors passed to stack must have matching dtypes"
                }))
            }));
            var c = [], s = ho({
                inputs: t.map((function (e) {
                    var n = vi({inputs: {input: e}, backend: a, attrs: {dim: r}});
                    return c.push(n), n
                })), backend: a, attrs: {axis: r}
            });
            return c.forEach((function (e) {
                return a.disposeIntermediateTensorInfo(e)
            })), s
        }
    }, ds = function (e, n, t) {
        this.variableNames = ["x"], this.customUniforms = [{
            name: "value",
            type: "float"
        }], this.outputShape = n.map((function (n, t) {
            return n[0] + e[t] + n[1]
        }));
        var a = e.length, r = Ae(a), o = n.map((function (e) {
            return e[0]
        })).join(","), i = n.map((function (n, t) {
            return n[0] + e[t]
        })).join(","), c = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, a);
        this.userCode = 1 !== a ? "\n      ".concat(r, " start = ").concat(r, "(").concat(o, ");\n      ").concat(r, " end = ").concat(r, "(").concat(i, ");\n\n      void main() {\n        ").concat(r, " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ").concat(r, " coords = outC - start;\n          setOutput(getX(").concat(c, "));\n        }\n      }\n    ") : "\n        int start = ".concat(o, ";\n        int end = ").concat(i, ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ")
    }, ps = function (e, n, t) {
        this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0, this.customUniforms = [{
            name: "value",
            type: "float"
        }], this.outputShape = n.map((function (n, t) {
            return n[0] + e[t] + n[1]
        }));
        for (var a = e.length, r = Ae(a), o = n.map((function (e) {
            return e[0]
        })).join(","), i = n.map((function (n, t) {
            return n[0] + e[t]
        })).join(","), c = jt("rc", a), s = jt("source", a), u = "".concat(c[a - 1], " < ").concat(this.outputShape[a - 1]), l = 1 === a ? "source" : "vec2(".concat(s.slice(-2).join(), ")"), d = ["".concat(r, " rc = outputLoc;"), "".concat(c[a - 1], " += 1;\n       if(").concat(u, ") {\n      "), 1 === a ? "" : "}\n       rc = outputLoc;\n       ".concat(c[a - 2], " += 1;\n       if(").concat(c[a - 2], " < ").concat(this.outputShape[a - 2], ") {"), 1 === a ? "" : "  ".concat(c[a - 1], " += 1;\n         if(").concat(u, ") {")], p = 1 === a ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", h = "", f = 0, x = 1 === a ? 2 : 4; f < x; f++) h += "\n        ".concat(d[f], "\n        if (").concat(p, ") {\n          result[").concat(f, "] = float(value);\n        } else {\n          ").concat(r, " source = rc - start;\n          result[").concat(f, "] = getChannel(getX(").concat(s.join(), "), ").concat(l, ");\n        }\n      ");
        h += 1 === a ? "} " : "}}", this.userCode = "\n      const ".concat(r, " start = ").concat(r, "(").concat(o, ");\n      const ").concat(r, " end = ").concat(r, "(").concat(i, ");\n\n      void main() {\n        ").concat(r, " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ").concat(h, "\n        setOutput(result);\n      }\n    ")
    }, hs = function (e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.paddings, c = r.constantValue;
        if (0 === n.util.sizeFromShape(o.shape)) return ki({
            backend: a, attrs: {
                shape: i.map((function (e, n) {
                    return e[0] + o.shape[n] + e[1]
                })), value: c, dtype: o.dtype
            }
        });
        var s = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new ps(o.shape, i, c) : new ds(o.shape, i, c),
            u = [[c]];
        return a.runWebGLProgram(s, [o], o.dtype, u)
    }, fs = {kernelName: n.PadV2, backendName: "webgl", kernelFunc: hs}, xs = ka({
        opSnippet: "\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",
        packedOpSnippet: "\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  bvec4 isNaN1 = lessThan(a, vec4(0.0));\n  bvec4 isNaN2 = lessThan(floor(b), b);\n  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"
    }), vs = {kernelName: n.Pow, backendName: "webgl", kernelFunc: xs};
    var gs = {
        kernelName: n.Prod, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = o.axis, u = o.keepDims, l = i.shape.length,
                d = [], p = n.util.parseAxisParam(c, i.shape), h = p, f = n.backend_util.getAxesPermutation(h, l),
                x = i;
            if (null != f && (x = Xa({
                inputs: {x: i},
                backend: r,
                attrs: {perm: f}
            }), h = n.backend_util.getInnerMostAxes(h.length, l), d.push(x)), n.backend_util.assertAxesAreInnerMostDims("prod", h, l), r.shouldExecuteOnCPU([x])) {
                var v = r.texData.get(x.dataId).values, g = yt(x.shape, x.dtype, v, h), m = g.outVals, b = g.outShape,
                    C = g.outDtype;
                t = r.makeTensorInfo(b, C, m)
            } else {
                var y = s(n.backend_util.computeOutAndReduceShapes(x.shape, h), 2), w = (b = y[0], y[1]),
                    I = n.util.sizeFromShape(w), S = Da({inputs: {x: x}, backend: r, attrs: {shape: [-1, I]}}),
                    k = Va(S, n.sumOutType(i.dtype), "prod", r);
                t = Da({inputs: {x: k}, backend: r, attrs: {shape: b}}), d.push(S), d.push(k)
            }
            if (u) {
                d.push(t);
                var R = n.backend_util.expandShapeToKeepDim(t.shape, p);
                t = Da({inputs: {x: t}, backend: r, attrs: {shape: R}})
            }
            return d.forEach((function (e) {
                return r.disposeIntermediateTensorInfo(e)
            })), t
        }
    };
    var ms = {
        kernelName: n.RaggedGather, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.paramsNestedSplits, o = n.paramsDenseValues,
                i = n.indices;
            a.outputRaggedRank;
            var c = r.map((function (e) {
                    return t.readSync(e.dataId)
                })), u = r.map((function (e) {
                    return e.shape
                })), l = t.readSync(o.dataId), d = t.readSync(i.dataId),
                p = s(wt(c, u, l, o.shape, o.dtype, d, i.shape), 3), h = p[0], f = p[1], x = p[2],
                v = h.map((function (e) {
                    return t.makeTensorInfo([e.length], "int32", e)
                })), g = t.makeTensorInfo(x, o.dtype, f);
            return v.concat([g])
        }
    };
    var bs = {
        kernelName: n.RaggedRange, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.starts, r = n.limits, o = n.deltas, i = t.readSync(a.dataId),
                c = t.readSync(r.dataId), u = t.readSync(o.dataId),
                l = s(It(i, a.shape, a.dtype, c, r.shape, u, o.shape), 2), d = l[0], p = l[1];
            return [t.makeTensorInfo([d.length], "int32", d), t.makeTensorInfo([p.length], a.dtype, p)]
        }
    };
    var Cs = {
            kernelName: n.RaggedTensorToTensor, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend, a = e.attrs, r = n.shape, o = n.values, i = n.defaultValue,
                    c = n.rowPartitionTensors, u = a.rowPartitionTypes, l = t.readSync(r.dataId), d = t.readSync(o.dataId),
                    p = t.readSync(i.dataId), h = c.map((function (e) {
                        return t.readSync(e.dataId)
                    })), f = c.map((function (e) {
                        return e.shape
                    })), x = s(St(l, r.shape, d, o.shape, o.dtype, p, i.shape, h, f, u), 2), v = x[0], g = x[1];
                return t.makeTensorInfo(v, o.dtype, g)
            }
        }, ys = function (e) {
            var n = e.backend, t = e.attrs, a = t.start, r = t.stop, o = t.step, i = t.dtype, c = kt(a, r, o, i);
            return n.makeTensorInfo([c.length], i, c)
        }, ws = {kernelName: n.Range, backendName: "webgl", kernelFunc: ys}, Is = Sa({opSnippet: "return 1.0 / x;"}),
        Ss = {kernelName: n.Reciprocal, backendName: "webgl", kernelFunc: Is}, ks = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n",
            packedOpSnippet: "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"
        }), Rs = {kernelName: n.Relu, backendName: "webgl", kernelFunc: ks}, Ts = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",
            packedOpSnippet: "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"
        }), Ns = {kernelName: n.Relu6, backendName: "webgl", kernelFunc: Ts}, Es = function (e, n, t, a, r) {
            this.variableNames = ["A"], this.outputShape = [];
            var o = s(e, 4), i = o[0], c = o[1], u = o[2], l = o[3];
            this.outputShape = [i, n, t, l];
            var d, p = [a && n > 1 ? c - 1 : c, a && t > 1 ? u - 1 : u],
                h = [a && n > 1 ? n - 1 : n, a && t > 1 ? t - 1 : t];
            d = r ? "(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)" : "vec2(yRC) * effectiveInputOverOutputRatioRC", this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ".concat(p[0] / h[0], ",\n          ").concat(p[1] / h[1], ");\n      const vec2 inputShapeRC = vec2(").concat(c, ".0, ").concat(u, ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ").concat(d, ";\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ")
        }, As = function (e, n, t, a, r) {
            this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [];
            var o = s(e, 4), i = o[0], c = o[1], u = o[2], l = o[3];
            this.outputShape = [i, n, t, l];
            var d, p = [a && n > 1 ? c - 1 : c, a && t > 1 ? u - 1 : u],
                h = [a && n > 1 ? n - 1 : n, a && t > 1 ? t - 1 : t];
            d = r ? "(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)" : "vec3(yRC) * effectiveInputOverOutputRatioRC", this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ".concat(p[0] / h[0], ",\n          ").concat(p[1] / h[1], ",\n          ").concat(p[1] / h[1], ");\n      const vec3 inputShapeRC = vec3(").concat(c, ".0, ").concat(u, ".0,\n                                     ").concat(u, ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ").concat(d, ";\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ").concat(l - 1, ";\n        bool hasNextRow = coords.z < ").concat(t - 1, ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ")
        };
    var _s = {
        kernelName: n.ResizeBilinear, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.images, i = r.alignCorners, c = r.halfPixelCenters,
                u = s(r.size, 2), l = u[0], d = u[1],
                p = n.env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new As(o.shape, l, d, i, c) : new Es(o.shape, l, d, i, c);
            return a.runWebGLProgram(p, [o], "float32")
        }
    }, Os = function (e, n, t) {
        this.variableNames = ["dy"], this.outputShape = [], this.outputShape = n;
        var a = s(n, 3), r = a[1], o = a[2], i = s(e, 3), c = i[1], u = i[2],
            l = [t && c > 1 ? r - 1 : r, t && u > 1 ? o - 1 : o], d = [t && c > 1 ? c - 1 : c, t && u > 1 ? u - 1 : u],
            p = l[0] / d[0], h = l[1] / d[1], f = 1 / p, x = 1 / h, v = 2 * Math.ceil(f) + 2, g = 2 * Math.ceil(x) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(".concat(p, ");\n        const float widthScale = float(").concat(h, ");\n\n        const float invHeightScale = float(").concat(f, ");\n        const float invWidthScale = float(").concat(x, ");\n\n        const int winHeight = int(").concat(v, ");\n        const int winWidth = int(").concat(g, ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ").concat(c, ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ").concat(u, ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ").concat(r - 1, ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ").concat(o - 1, ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ")
    };
    var Fs = {
        kernelName: n.ResizeBilinearGrad, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.images, o = n.dy, i = a.alignCorners,
                c = new Os(o.shape, r.shape, i);
            return t.runWebGLProgram(c, [o], o.dtype)
        }
    }, Ds = function (e, n, t, a, r) {
        this.variableNames = ["A"], this.outputShape = [];
        var o = s(e, 4), i = o[0], c = o[1], u = o[2], l = o[3];
        this.outputShape = [i, n, t, l];
        var d, p = [a && n > 1 ? c - 1 : c, a && t > 1 ? u - 1 : u],
            h = [a && n > 1 ? n - 1 : n, a && t > 1 ? t - 1 : t], f = a ? "0.5" : "0.0";
        d = r ? "max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))" : "vec2(yRC) * effectiveInputOverOutputRatioRC", this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ".concat(p[0] / h[0], ",\n          ").concat(p[1] / h[1], ");\n      const vec2 inputShapeRC = vec2(").concat(c, ".0, ").concat(u, ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ").concat(d, ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ").concat(f, ")));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ")
    }, Ps = function (e, n, t, a, r) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [];
        var o = s(e, 4), i = o[0], c = o[1], u = o[2], l = o[3];
        this.outputShape = [i, n, t, l];
        var d, p = [a && n > 1 ? c - 1 : c, a && t > 1 ? u - 1 : u],
            h = [a && n > 1 ? n - 1 : n, a && t > 1 ? t - 1 : t], f = a ? "0.5" : "0.0";
        d = r ? "max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))" : "vec3(yRC) * effectiveInputOverOutputRatioRC", this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ".concat(p[0] / h[0], ",\n          ").concat(p[1] / h[1], ",\n          ").concat(p[1] / h[1], ");\n      const vec3 inputShapeRC = vec3(").concat(c, ".0, ").concat(u, ".0,\n                                     ").concat(u, ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ").concat(d, ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ").concat(f, ")));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ").concat(l - 1, ";\n        bool hasNextRow = coords.z < ").concat(t - 1, ";\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    ")
    };
    var Ls = {
        kernelName: n.ResizeNearestNeighbor, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.images, i = r.alignCorners, c = r.halfPixelCenters,
                u = s(r.size, 2), l = u[0], d = u[1],
                p = n.env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new Ps(o.shape, l, d, i, c) : new Ds(o.shape, l, d, i, c);
            return a.runWebGLProgram(p, [o], o.dtype)
        }
    }, Bs = function (e, n, t) {
        this.variableNames = ["dy"], this.outputShape = [], this.outputShape = n;
        var a = s(n, 3), r = a[1], o = a[2], i = s(e, 3), c = i[1], u = i[2],
            l = [t && c > 1 ? r - 1 : r, t && u > 1 ? o - 1 : o], d = [t && c > 1 ? c - 1 : c, t && u > 1 ? u - 1 : u],
            p = l[0] / d[0], h = l[1] / d[1], f = 1 / p, x = 1 / h, v = 2 * Math.ceil(f) + 2, g = 2 * Math.ceil(x) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(".concat(p, ");\n        const float widthScale = float(").concat(h, ");\n\n        const float invHeightScale = float(").concat(f, ");\n        const float invWidthScale = float(").concat(x, ");\n\n        const int winHeight = int(").concat(v, ");\n        const int winWidth = int(").concat(g, ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ").concat(c, ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ").concat(u, ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(").concat(l[0], ") *\n                (float(dyR) / float(").concat(d[0], "));\n\n            float sourceFracCol =\n                float(").concat(l[1], ") *\n                  (float(dyC) / float(").concat(d[1], "));\n\n            int sourceNearestRow = int(min(\n                float(int(").concat(r, ") - 1),\n                ").concat(t, " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(").concat(o, ") - 1),\n                ").concat(t, " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ")
    };
    var Vs = {
        kernelName: n.ResizeNearestNeighborGrad, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.images, o = n.dy, i = a.alignCorners,
                c = new Bs(o.shape, r.shape, i);
            return t.runWebGLProgram(c, [o], o.dtype)
        }
    }, Ws = function (e, n) {
        this.variableNames = ["x"];
        var t = e.length;
        if (t > 4) throw new Error("WebGL backend: Reverse of rank-".concat(t, " tensor is not yet supported"));
        if (this.outputShape = e, 1 !== t) {
            var a = e.map((function (t, a) {
                return function (t) {
                    return -1 !== n.indexOf(t) && 1 !== e[t] ? "".concat(e[t], " - coords[").concat(t, "] - 1") : "coords[".concat(t, "]")
                }(a)
            })).join(","), r = Ae(t);
            this.userCode = "\n      void main() {\n        ".concat(r, " coords = getOutputCoords();\n        setOutput(getX(").concat(a, "));\n      }\n    ")
        } else this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(".concat(e[0], " - coord - 1));\n        }\n      ")
    }, Us = function (e, n) {
        this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0;
        var t = e.length;
        if (t > 4) throw new Error("WebGL backend: Reverse of rank-".concat(t, " tensor is not yet supported"));
        this.outputShape = e;
        var a = jt("rc", t), r = "".concat(a[t - 1], " + 1 < ").concat(this.outputShape[t - 1]),
            o = "".concat(a[t - 2], " + 1 < ").concat(this.outputShape[t - 2]), i = Ae(t);

        function c(t) {
            var a = e.map((function (a, r) {
                return function (t, a) {
                    return -1 !== n.indexOf(t) && 1 !== e[t] ? "".concat(e[t], " - ").concat(a[t], " - 1") : "".concat(a[t])
                }(r, t)
            })), r = a.join(","), o = a.slice(-2).join(",");
            return "getChannel(getX(".concat(r, "), vec2(").concat(o, "))")
        }

        this.userCode = 1 === t ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(".concat(e[0], " - rc - 1),\n            ").concat(e[0], " - rc - 1);\n          if(").concat(r, "){\n              result.g = getChannel(getX(").concat(e[0], " - (rc  + 1) - 1),\n                ").concat(e[0], " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ") : "\n        void main() {\n          ".concat(i, " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ").concat(function (e) {
            return c(e)
        }(a.slice()), ";\n          if(").concat(r, "){\n            result.g = ").concat(function (e) {
            return e[t - 1] = "(" + e[t - 1] + " + 1)", c(e)
        }(a.slice()), ";\n          }\n          if(").concat(o, ") {\n            result.b = ").concat(function (e) {
            return e[t - 2] = "(" + e[t - 2] + " + 1)", c(e)
        }(a.slice()), ";\n            if(").concat(r, ") {\n              result.a = ").concat(function (e) {
            return e[t - 1] = "(" + e[t - 1] + " + 1)", e[t - 2] = "(" + e[t - 2] + " + 1)", c(e)
        }(a.slice()), ";\n            }\n          }\n          setOutput(result);\n        }\n    ")
    };
    var Ms = {
            kernelName: n.Reverse, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.dims, c = o.shape.length,
                    s = n.util.parseAxisParam(i, o.shape);
                if (0 === c) return fa({inputs: {x: o}, backend: a});
                var u = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Us(o.shape, s) : new Ws(o.shape, s);
                return a.runWebGLProgram(u, [o], o.dtype)
            }
        }, Gs = function (e, n) {
            this.variableNames = ["Image"], this.outputShape = [], this.customUniforms = [{name: "params", type: "vec4"}];
            var t = e[1], a = e[2];
            this.outputShape = e;
            var r = "";
            r = "number" == typeof n ? "float outputValue = ".concat(n.toFixed(2), ";") : "\n        vec3 fill = vec3(".concat(n.join(","), ");\n        float outputValue = fill[coords[3]];"), this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ".concat(r, "\n          if(coordX >= 0 && coordX < ").concat(a, " && coordY >= 0 && coordY < ").concat(t, ") {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    ")
        }, zs = {
            kernelName: n.RotateWithOffset, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.attrs, r = e.backend, o = t.image, i = a.radians, c = a.fillValue, u = a.center,
                    l = r, d = new Gs(o.shape, c), p = s(n.backend_util.getImageCenter(u, o.shape[1], o.shape[2]), 2),
                    h = [[p[0], p[1], Math.sin(i), Math.cos(i)]];
                return l.runWebGLProgram(d, [o], o.dtype, h)
            }
        },
        Xs = Sa({opSnippet: "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"}),
        Hs = {kernelName: n.Round, backendName: "webgl", kernelFunc: Xs},
        js = Sa({opSnippet: "return inversesqrt(x);", cpuKernelImpl: Rt}),
        Ks = {kernelName: n.Rsqrt, backendName: "webgl", kernelFunc: js}, qs = function (e, n, t, a, r, o, i, c) {
            void 0 === c && (c = !1), this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = o;
            var s = Ae(r.length), u = Ae(o.length), l = "";
            1 === t ? l = "i" : 2 === t && (l = "i, j");
            var d = "getIndices(".concat(l, ")"), p = "";
            1 === a ? p = "i" : 2 === a && (p = "i, coords[1]");
            var h = "getUpdates(".concat(p, ")"), f = "";
            c && (f = "coords[0], coords[1]");
            var x = "getDefaultValue(".concat(f, ")"), v = n > 1 ? "strides[j]" : "strides";
            this.userCode = "\n        ".concat(s, " strides = ").concat(s, "(").concat(r, ");\n\n        void main() {\n          ").concat(u, " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ").concat(e, "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ").concat(n, "; j++) {\n              int index = round(").concat(d, ");\n              flattenedIndex += index * ").concat(v, ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ").concat(h, ";\n              found = true;\n            }\n          }\n          setOutput(mix(").concat(x, ", sum, float(found)));\n        }\n      ")
        }, Ys = function (e, n, t, a, r, o, i, c) {
            void 0 === c && (c = !1), this.variableNames = ["updates", "indices", "defaultValue"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = o;
            var s = Ae(r.length), u = Ae(o.length), l = "";
            1 === t ? l = "i" : 2 === t && (l = "i, j");
            var d = "getIndices(".concat(l, ")"), p = "";
            1 === a ? p = "i" : 2 === a && (p = "i, coords[1]");
            var h = "getUpdates(".concat(p, ")"), f = "";
            c && (f = "coords[0], coords[1]");
            var x = "getDefaultValue(".concat(f, ")"), v = n > 1 ? "strides[j]" : "strides",
                g = n > 1 ? "strides[j + 1]" : "strides";
            this.userCode = "\n        ".concat(s, " strides = ").concat(s, "(").concat(r, ");\n\n        void main() {\n          ").concat(u, " coords = getOutputCoords();\n          vec4 sum = vec4(0.);\n          vec4 found = vec4(0.);\n          for (int i = 0; i < ").concat(e, "; i+=2) {\n            ivec2 flattenedIndex = ivec2(0);\n            for (int j = 0; j < ").concat(n, "; j+=2) {\n              ivec4 index = round(").concat(d, ");\n              flattenedIndex += index.xz * ").concat(v, ";\n              if (j + 1 < ").concat(n, ") {\n                flattenedIndex += index.yw * ").concat(g, ";\n              }\n            }\n            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||\n                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {\n              vec4 updVals = ").concat(h, ";\n              if (flattenedIndex[0] == coords[0]) {\n                sum.xy += updVals.xy;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[0] == coords[0] + 1) {\n                sum.zw += updVals.xy;\n                found.zw = vec2(1.);\n              }\n              if (flattenedIndex[1] == coords[0]) {\n                sum.xy += updVals.zw;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[1] == coords[0] + 1) {\n                sum.zw += updVals.zw;\n                found.zw = vec2(1.);\n              }\n            }\n          }\n          setOutput(mix(").concat(x, ", sum, found));\n        }\n      ")
        };
    var Qs = {
        kernelName: n.ScatterNd, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.indices, i = t.updates, c = r.shape,
                s = n.backend_util.calculateShapes(i, o, c), u = s.sliceRank, l = s.numUpdates, d = s.sliceSize,
                p = s.strides, h = s.outputSize, f = [h / d, d];
            if (0 === h) return a.makeTensorInfo(c, o.dtype);
            var x, v = Da({inputs: {x: o}, backend: a, attrs: {shape: [l, u]}}),
                g = Da({inputs: {x: i}, backend: a, attrs: {shape: [l, d]}}),
                m = a.makeTensorInfo([], "float32", new Float32Array([0]));
            x = n.env().getBool("WEBGL_PACK") ? new Ys(l, u, v.shape.length, g.shape.length, p, f) : new qs(l, u, v.shape.length, g.shape.length, p, f);
            var b = a.runWebGLProgram(x, [g, v, m], g.dtype), C = Da({inputs: {x: b}, backend: a, attrs: {shape: c}});
            return a.disposeIntermediateTensorInfo(v), a.disposeIntermediateTensorInfo(g), a.disposeIntermediateTensorInfo(b), a.disposeIntermediateTensorInfo(m), C
        }
    }, Zs = function (e, t, a, r) {
        this.variableNames = ["sortedSequence", "values"], this.customUniforms = [{
            name: "numInputs",
            type: "int"
        }], this.outputShape = [e, a];
        var o = "for (int i = 0; i < ".concat(Math.ceil(Math.log2(t + 1)), "; ++i) { if (left >= right) break;"),
            i = 2 === n.env().getNumber("WEBGL_VERSION") ? "while (left < right) {" : o, c = "left" === r ? "<" : "<=";
        this.userCode = "\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ".concat(i, "\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ").concat(c, " value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     ")
    };
    var Js = {
        kernelName: n.SearchSorted, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.sortedSequence, o = n.values, i = a.side,
                c = new Zs(r.shape[0], r.shape[1], o.shape[1], i), s = [[r.shape[1]]];
            return t.runWebGLProgram(c, [r, o], "int32", s)
        }
    }, $s = function (e, n, t) {
        var a, r;
        if (this.variableNames = ["c", "a", "b"], this.outputShape = n, t > 4) throw Error("Where for rank ".concat(t, " is not yet supported"));
        if (1 === t) r = "resRC", a = "resRC"; else {
            for (var o = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i = [], c = [], s = 0; s < n.length; s++) c.push("".concat(o[s])), s < e && i.push("".concat(o[s]));
            a = i.join(), r = c.join()
        }
        var u = Ae(t);
        this.userCode = "\n      void main() {\n        ".concat(u, " resRC = getOutputCoords();\n        float cVal = getC(").concat(a, ");\n        if (cVal >= 1.0) {\n          setOutput(getA(").concat(r, "));\n        } else {\n          setOutput(getB(").concat(r, "));\n        }\n      }\n    ")
    };
    var eu = {
            kernelName: n.Select, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = t.condition, o = t.t, i = t.e,
                    c = new $s(r.shape.length, o.shape, o.shape.length);
                return a.runWebGLProgram(c, [r, o, i], n.upcastType(o.dtype, i.dtype))
            }
        },
        nu = Sa({opSnippet: "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ".concat(n.backend_util.SELU_SCALEALPHA, ";\n  float scale = ").concat(n.backend_util.SELU_SCALE, ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n")}),
        tu = {kernelName: n.Selu, backendName: "webgl", kernelFunc: nu}, au = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",
            packedOpSnippet: "\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
            cpuKernelImpl: Nt
        }), ru = {kernelName: n.Sigmoid, backendName: "webgl", kernelFunc: au},
        ou = Sa({opSnippet: "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"}),
        iu = {kernelName: n.Sign, backendName: "webgl", kernelFunc: ou}, cu = Sa({
            opSnippet: "if (isnan(x)) return x;\n  return sin(x);\n",
            packedOpSnippet: "\n  vec4 result = sin(x);\n  bvec4 isNaN = isnan(x);\n  ".concat(pa, "\n  return result;\n")
        }), su = {kernelName: n.Sin, backendName: "webgl", kernelFunc: cu},
        uu = Sa({opSnippet: "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"}),
        lu = {kernelName: n.Sinh, backendName: "webgl", kernelFunc: uu},
        du = Sa({opSnippet: "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"}),
        pu = {kernelName: n.Softplus, backendName: "webgl", kernelFunc: du}, hu = {
            kernelName: n.SpaceToBatchND, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.blockShape, c = r.paddings;
                n.util.assert(o.shape.length <= 4, (function () {
                    return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"
                }));
                var l = i.reduce((function (e, n) {
                    return e * n
                })), d = [[0, 0]];
                d.push.apply(d, u([], s(c), !1));
                for (var p = 1 + i.length; p < o.shape.length; ++p) d.push([0, 0]);
                var h = [], f = hs({inputs: {x: o}, backend: a, attrs: {paddings: d, constantValue: 0}}),
                    x = n.backend_util.getReshaped(f.shape, i, l, !1),
                    v = n.backend_util.getPermuted(x.length, i.length, !1),
                    g = n.backend_util.getReshapedPermuted(f.shape, i, l, !1),
                    m = Da({inputs: {x: f}, backend: a, attrs: {shape: x}}),
                    b = Xa({inputs: {x: m}, backend: a, attrs: {perm: v}}),
                    C = Da({inputs: {x: b}, backend: a, attrs: {shape: g}});
                return h.push(f), h.push(m), h.push(b), h.forEach((function (e) {
                    return a.disposeIntermediateTensorInfo(e)
                })), C
            }
        };
    var fu = {
        kernelName: n.SparseFillEmptyRows, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.indices, r = n.values, o = n.denseShape, i = n.defaultValue;
            if (1 !== o.shape.length) throw new Error("Dense shape must be a vector, saw:\n         ".concat(o.shape));
            if (2 !== a.shape.length) throw new Error("Indices must be a matrix, saw:\n         ".concat(a.shape));
            if (1 !== r.shape.length) throw new Error("Values must be a vector, saw:\n         ".concat(r.shape));
            if (0 !== i.shape.length) throw new Error("Default value must be a scalar, saw:\n        ".concat(i.shape));
            var c = t.readSync(a.dataId), u = t.readSync(r.dataId), l = t.readSync(o.dataId),
                d = t.readSync(i.dataId)[0], p = s(_t(c, a.shape, a.dtype, u, r.dtype, l, d), 5), h = p[0], f = p[1],
                x = p[2], v = p[3], g = p[4];
            return [t.makeTensorInfo(f, a.dtype, h), t.makeTensorInfo([f[0]], r.dtype, x), t.makeTensorInfo([v.length], "bool", new Uint8Array(v.map((function (e) {
                return Number(e)
            })))), t.makeTensorInfo([g.length], a.dtype, new Int32Array(g))]
        }
    };
    var xu = {
        kernelName: n.SparseReshape, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.inputIndices, r = n.inputShape, o = n.newShape;
            if (2 !== a.shape.length) throw new Error("Input indices should be a matrix but received shape ".concat(a.shape));
            if (1 !== r.shape.length) throw new Error("Input shape should be a vector but received shape ".concat(r.shape));
            if (1 !== o.shape.length) throw new Error("Target shape should be a vector but received shape ".concat(o.shape));
            var i = Array.from(t.readSync(r.dataId)), c = t.readSync(a.dataId), u = Array.from(t.readSync(o.dataId)),
                l = s(Ot(c, a.shape, a.dtype, i, u), 3), d = l[0], p = l[1], h = l[2];
            return [t.makeTensorInfo(p, a.dtype, d), t.makeTensorInfo([h.length], o.dtype, new Int32Array(h))]
        }
    };
    var vu = {
        kernelName: n.SparseSegmentMean, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.data, r = n.indices, o = n.segmentIds;
            if (a.shape.length < 1) throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== r.shape.length) throw new Error("Indices should be a vector but received shape\n              ".concat(r.shape));
            if (1 !== o.shape.length) throw new Error("Segment ids should be a vector but received shape\n              ".concat(o.shape));
            var i = t.readSync(a.dataId), c = t.readSync(r.dataId), u = t.readSync(o.dataId),
                l = s(Ft(i, a.shape, a.dtype, c, u, !0), 2), d = l[0], p = l[1];
            return t.makeTensorInfo(p, a.dtype, d)
        }
    };
    var gu = {
        kernelName: n.SparseSegmentSum, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = n.data, r = n.indices, o = n.segmentIds;
            if (a.shape.length < 1) throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== r.shape.length) throw new Error("Indices should be a vector but received shape\n             ".concat(r.shape));
            if (1 !== o.shape.length) throw new Error("Segment ids should be a vector but received shape\n             ".concat(o.shape));
            var i = t.readSync(a.dataId), c = t.readSync(r.dataId), u = t.readSync(o.dataId),
                l = s(Ft(i, a.shape, a.dtype, c, u), 2), d = l[0], p = l[1];
            return t.makeTensorInfo(p, a.dtype, d)
        }
    };
    var mu = {
        kernelName: n.SparseToDense, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.sparseIndices, i = t.sparseValues, c = t.defaultValue,
                s = r.outputShape, u = n.backend_util.calculateShapes(i, o, s), l = u.sliceRank, d = u.numUpdates,
                p = u.sliceSize, h = u.strides, f = u.outputSize;
            if ("string" === i.dtype) {
                var x = a.bufferSync(o), v = a.bufferSync(i), g = n.util.decodeString(a.readSync(c.dataId)[0]),
                    m = Tt(x, v, s, f, p, d, l, h, g, false);
                return a.makeTensorInfo(s, m.dtype, m.values)
            }
            var b = new qs(d, l, o.shape.length, i.shape.length, h, [f, 1], false),
                C = a.runWebGLProgram(b, [i, o, c], i.dtype), y = Da({inputs: {x: C}, backend: a, attrs: {shape: s}});
            return a.disposeIntermediateTensorInfo(C), y
        }
    };
    var bu = {
            kernelName: n.SplitV, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.numOrSizeSplits, c = r.axis,
                    l = n.util.parseAxisParam(c, o.shape)[0], d = n.backend_util.prepareSplitSize(o, i, l),
                    p = o.shape.length, h = new Array(p).fill(0), f = o.shape.slice();
                return d.map((function (e) {
                    var n = u([], s(f), !1);
                    n[l] = e;
                    var t = Ur({inputs: {x: o}, backend: a, attrs: {begin: h, size: n}});
                    return h[l] += e, t
                }))
            }
        }, Cu = "return sqrt(x);", yu = Sa({opSnippet: Cu, packedOpSnippet: Cu, cpuKernelImpl: Dt}),
        wu = {kernelName: n.Sqrt, backendName: "webgl", kernelFunc: yu}, Iu = Sa({opSnippet: "return x * x;"}),
        Su = {kernelName: n.Square, backendName: "webgl", kernelFunc: Iu}, ku = "return (a - b) * (a - b);",
        Ru = ka({opSnippet: ku, packedOpSnippet: ku}),
        Tu = {kernelName: n.SquaredDifference, backendName: "webgl", kernelFunc: Ru};
    var Nu = {
        kernelName: n.StaticRegexReplace, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x;
            if ("string" !== o.dtype) throw new Error("Input must be of datatype string");
            var i = a.readSync(o.dataId), c = n.backend_util.fromUint8ToStringArray(i), s = Pt(c, "string", r);
            return a.makeTensorInfo(o.shape, "string", s)
        }
    };
    var Eu = {
        kernelName: n.Step, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.attrs, a = e.backend, r = n.x,
                o = ea + "\n    return x > 0.0 ? 1.0 : float(".concat(t.alpha, ");\n  "), i = new $t(r.shape, o);
            return a.runWebGLProgram(i, [r], r.dtype)
        }
    }, Au = function (e, n, t) {
        this.variableNames = ["x"], this.outputShape = t;
        var a = t.length, r = Ae(t.length), o = Ae(t.length), i = "";
        if (1 === a) i = "coords * strides + begin"; else {
            var c = 0;
            i = t.map((function (e, n) {
                return c++, 1 === t.length ? "coords * strides[".concat(n, "] + begin[").concat(n, "]") : "coords[".concat(c - 1, "] * strides[").concat(n, "] + begin[").concat(n, "]")
            })).join(",")
        }
        this.userCode = "\n      ".concat(r, " begin = ").concat(r, "(").concat(e, ");\n      ").concat(r, " strides = ").concat(r, "(").concat(n, ");\n\n      void main() {\n        ").concat(o, " coords = getOutputCoords();\n        setOutput(getX(").concat(i, "));\n      }\n    ")
    };
    var _u = {
        kernelName: n.StridedSlice, backendName: "webgl", kernelFunc: function (e) {
            var t, a = e.inputs, r = e.backend, o = e.attrs, i = a.x, c = o.begin, s = o.end, u = o.strides,
                l = o.beginMask, d = o.endMask, p = o.ellipsisMask, h = o.newAxisMask, f = o.shrinkAxisMask,
                x = n.slice_util.sliceInfo(i.shape, c, s, u, l, d, p, h, f), v = x.finalShapeSparse, g = x.finalShape,
                m = x.isIdentity, b = x.sliceDim0, C = x.isSimpleSlice, y = x.begin, w = x.end, I = x.strides;
            if (m) t = Da({inputs: {x: i}, backend: r, attrs: {shape: g}}); else if (b || C) {
                n.util.assert(i.shape.length >= 1, (function () {
                    return "Input must have rank at least 1, got: ".concat(i.shape.length)
                }));
                var S = n.slice_util.computeOutShape(y, w, I),
                    k = Ur({inputs: {x: i}, backend: r, attrs: {begin: y, size: S}});
                t = Da({inputs: {x: k}, backend: r, attrs: {shape: g}}), r.disposeIntermediateTensorInfo(k)
            } else {
                if (r.shouldExecuteOnCPU([i])) {
                    var R = r.readSync(i.dataId), T = n.buffer(i.shape, i.dtype, R), N = Lt(v, T, I, y);
                    t = r.makeTensorInfo(g, i.dtype, N.values)
                } else {
                    var E = new Au(y, I, v);
                    t = r.runWebGLProgram(E, [i], i.dtype)
                }
            }
            var A = Da({inputs: {x: t}, backend: r, attrs: {shape: g}});
            return r.disposeIntermediateTensorInfo(t), A
        }
    };
    var Ou = {
        kernelName: n.StringNGrams, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = a.separator, o = a.nGramWidths, i = a.leftPad,
                c = a.rightPad, u = a.padWidth, l = a.preserveShortSequences, d = n.data, p = n.dataSplits,
                h = t.readSync(d.dataId), f = t.readSync(p.dataId), x = s(Bt(h, f, r, o, i, c, u, l), 2), v = x[0],
                g = x[1];
            return [t.makeTensorInfo([v.length], "string", v), t.makeTensorInfo(p.shape, "int32", g)]
        }
    };
    var Fu = {
        kernelName: n.StringSplit, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs.skipEmpty, r = n.input, o = n.delimiter;
            if ("string" !== r.dtype) throw new Error("Input must be of datatype string");
            if (1 !== r.shape.length) throw new Error("Input must be a vector, got shape: ".concat(r.shape));
            if (0 !== o.shape.length) throw new Error("Delimiter must be a scalar, got shape: ".concat(o.shape));
            var i = t.readSync(r.dataId), c = t.readSync(o.dataId)[0], u = s(Vt(i, c, a), 3), l = u[0], d = u[1],
                p = u[2], h = d.length;
            return [t.makeTensorInfo([h, 2], "int32", l), t.makeTensorInfo([h], "string", d), t.makeTensorInfo([2], "int32", new Int32Array(p))]
        }
    };
    var Du = {
            kernelName: n.StringToHashBucketFast, backendName: "webgl", kernelFunc: function (e) {
                var n = e.inputs, t = e.backend, a = e.attrs.numBuckets, r = n.input;
                if ("string" !== r.dtype) throw new Error("Input must be of datatype string");
                if (a <= 0) throw new Error("Number of buckets must be at least 1");
                var o = t.readSync(r.dataId), i = Wt(o, a);
                return t.makeTensorInfo(r.shape, "int32", i)
            }
        }, Pu = Sa({opSnippet: "return tan(x);"}), Lu = {kernelName: n.Tan, backendName: "webgl", kernelFunc: Pu},
        Bu = Sa({opSnippet: "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"}),
        Vu = {kernelName: n.Tanh, backendName: "webgl", kernelFunc: Bu};
    var Wu = {
        kernelName: n.TensorScatterUpdate, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend;
            e.attrs;
            var r = t.tensor, o = t.indices, i = t.updates, c = n.backend_util.calculateShapes(i, o, r.shape),
                s = c.sliceRank, u = c.numUpdates, l = c.sliceSize, d = c.strides, p = c.outputSize, h = [p / l, l];
            if (0 === p) return a.makeTensorInfo(r.shape, o.dtype);
            var f = Da({inputs: {x: o}, backend: a, attrs: {shape: [u, s]}}),
                x = Da({inputs: {x: i}, backend: a, attrs: {shape: [u, l]}}),
                v = Da({inputs: {x: r}, backend: a, attrs: {shape: h}}),
                g = new qs(u, s, f.shape.length, x.shape.length, d, h, !1, !0),
                m = a.runWebGLProgram(g, [x, f, v], v.dtype),
                b = Da({inputs: {x: m}, backend: a, attrs: {shape: r.shape}});
            return a.disposeIntermediateTensorInfo(f), a.disposeIntermediateTensorInfo(x), a.disposeIntermediateTensorInfo(v), a.disposeIntermediateTensorInfo(m), b
        }
    }, Uu = function (e, n) {
        this.variableNames = ["A"];
        for (var t = new Array(e.length), a = 0; a < t.length; a++) t[a] = e[a] * n[a];
        this.outputShape = t, this.rank = t.length;
        var r = Ae(this.rank), o = function (e) {
            var n = e.length;
            if (n > 5) throw Error("Tile for rank ".concat(n, " is not yet supported"));
            if (1 === n) return "imod(resRC, ".concat(e[0], ")");
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], a = [], r = 0; r < e.length; r++) a.push("imod(".concat(t[r], ", ").concat(e[r], ")"));
            return a.join()
        }(e);
        this.userCode = "\n      void main() {\n        ".concat(r, " resRC = getOutputCoords();\n        setOutput(getA(").concat(o, "));\n      }\n    ")
    };

    function Mu(e) {
        var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.reps;
        if ("string" === o.dtype || o.shape.length > 5) {
            var c = a.readSync(o.dataId), s = "string" === o.dtype ? c.map((function (e) {
                return n.util.decodeString(e)
            })) : c, u = n.buffer(o.shape, o.dtype, s), l = Mt(u, i);
            return a.makeTensorInfo(l.shape, l.dtype, l.values)
        }
        var d = new Uu(o.shape, i);
        return a.runWebGLProgram(d, [o], o.dtype)
    }

    var Gu = {kernelName: n.Tile, backendName: "webgl", kernelFunc: Mu}, zu = function (e) {
        this.variableNames = ["x", "indices"], this.customUniforms = [{name: "n", type: "int"}, {
            name: "firstPass",
            type: "int"
        }, {name: "negativeInf", type: "float"}, {name: "dir", type: "int"}, {
            name: "inc",
            type: "int"
        }], this.outputShape = e, this.userCode = "\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "
    }, Xu = function (e) {
        this.variableNames = ["x", "indices"], this.customUniforms = [{name: "n", type: "int"}, {
            name: "firstPass",
            type: "int"
        }, {
            name: "k",
            type: "int"
        }], this.outputShape = e, this.userCode = "\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "
    };

    function Hu(e, n) {
        null !== n && e.disposeIntermediateTensorInfo(n)
    }

    function ju(e) {
        for (var n = 1; n < e;) n *= 2;
        return n
    }

    var Ku = {
        kernelName: n.TopK, backendName: "webgl", kernelFunc: function (e) {
            var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = r.k, c = r.sorted,
                u = n.env().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),
                l = n.env().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"), d = o.shape, p = d[d.length - 1];
            if (a.shouldExecuteOnCPU([o]) || p < u || i > l) {
                var h = a.readSync(o.dataId), f = s(Gt(h, d, o.dtype, i, c), 2), x = f[0], v = f[1];
                return [a.makeTensorInfo(x.shape, x.dtype, x.values), a.makeTensorInfo(v.shape, v.dtype, v.values)]
            }
            if (0 === i) return d[d.length - 1] = 0, [a.makeTensorInfo(d, o.dtype, []), a.makeTensorInfo(d, "int32", [])];
            if (1 === p) return [o, ki({attrs: {shape: d, dtype: "int32", value: 0}, backend: a})];
            var g = a.texData.get(o.dataId), m = null !== g && g.isPacked, b = m ? a.unpackTensor(o) : o,
                C = n.util.sizeFromShape(d) / p, y = Da({inputs: {x: b}, attrs: {shape: [C, p]}, backend: a});
            m && Hu(a, b);
            for (var w = ju(i), I = ju(p), S = null, k = function () {
                return null === S ? [y, y] : [y, S]
            }, R = function (e, n, t) {
                var r = k(), o = new zu(t), i = [[p], [null === S ? 1 : 0], [Number.NEGATIVE_INFINITY], [e], [n]],
                    c = S;
                S = a.runWebGLProgram(o, r, "int32", i), Hu(a, c)
            }, T = 1; T < w; T *= 2) for (var N = 2 * T, E = T; E >= 1; E /= 2) R(N, E, [C, I]);
            for (var A = I; A > w; A /= 2) {
                var _ = k(), O = new Xu([C, A / 2]), F = [[p], [null === S ? 1 : 0], [w]], D = S;
                S = a.runWebGLProgram(O, _, "int32", F), Hu(a, D);
                for (N = 2 * (T = w / 2), E = T; E >= 1; E /= 2) R(N, E, S.shape)
            }
            var P = S;
            S = Ur({inputs: {x: S}, backend: a, attrs: {begin: 0, size: [C, i]}}), Hu(a, P);
            var L = Xi({inputs: {x: y, indices: S}, backend: a, attrs: {axis: 1, batchDims: 1}});
            Hu(a, y);
            var B = d.slice(0, -1);
            B.push(i), P = S, S = Da({inputs: {x: S}, attrs: {shape: B}, backend: a}), Hu(a, P);
            var V = L;
            return L = Da({inputs: {x: L}, attrs: {shape: B}, backend: a}), Hu(a, V), [L, S]
        }
    }, qu = function (e, n, t, a, r, o) {
        this.variableNames = ["Image", "Transforms"], this.outputShape = o;
        var i, c = "nearest" === t ? 1 : 2;
        switch (a) {
            case"constant":
            default:
                i = 1;
                break;
            case"reflect":
                i = 2;
                break;
            case"wrap":
                i = 3;
                break;
            case"nearest":
                i = 4
        }
        this.userCode = "\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(".concat(i, " == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (").concat(i, " == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (").concat(i, " == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ").concat(e, " && 0 <= coordX && coordX < ").concat(n, ") {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(").concat(r, ");\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(").concat(r, ");\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(").concat(n, "));\n                float mapY = mapCoord(inY, float(").concat(e, "));\n\n                if (").concat(c, " == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        ")
    };
    var Yu = {
        kernelName: n.Transform, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.image, o = n.transforms, i = a.interpolation,
                c = a.fillMode, u = a.fillValue, l = a.outputShape, d = s(r.shape, 4), p = d[0], h = d[1], f = d[2],
                x = d[3], v = s(null != l ? l : [h, f], 2), g = v[0], m = v[1], b = new qu(h, f, i, c, u, [p, g, m, x]);
            return t.runWebGLProgram(b, [r, o], "float32")
        }
    };
    var Qu = {
        kernelName: n.Unique, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.attrs, a = e.backend, r = t.axis, o = n.x;
            de(o, "unique"), console.warn("WARNING: ", "UI might be locked temporarily as data is being downloaded");
            var i = a.readSync(o.dataId), c = Xt(i, r, o.shape, o.dtype), s = c.outputValues, u = c.outputShape,
                l = c.indices;
            return [a.makeTensorInfo(u, o.dtype, s), a.makeTensorInfo([l.length], "int32", l)]
        }
    };
    var Zu = {
        kernelName: n.Unpack, backendName: "webgl", kernelFunc: function (e) {
            var n = e.inputs, t = e.backend, a = e.attrs, r = n.value, o = a.axis;
            o < 0 && (o += r.shape.length);
            for (var i = r, c = i.shape.length, s = r.shape[o], u = new Array(c - 1), l = 0, d = 0; d < c; d++) d !== o && (u[l++] = i.shape[d]);
            var p = [], h = new Array(c).fill(0), f = i.shape.slice();
            f[o] = 1;
            var x = new Array(s);
            for (d = 0; d < x.length; d++) {
                h[o] = d;
                var v = Ur({inputs: {x: i}, backend: t, attrs: {begin: h, size: f}}),
                    g = Da({inputs: {x: v}, backend: t, attrs: {shape: u}});
                x[d] = g, p.push(v)
            }
            return p.forEach((function (e) {
                return t.disposeIntermediateTensorInfo(e)
            })), x
        }
    }, Ju = function (e, n) {
        this.variableNames = ["x", "segmentIds"];
        var t = e.windowSize, a = e.batchSize, r = e.inSize, o = e.numSegments, i = o * Math.ceil(r / t);
        this.outputShape = [a, i];
        var c = 4 * Math.floor(t / 4), s = t % 4, u = "\n        sumValue += dot(values, segFilter);\n    ", l = "";
        r % t > 0 && (l = "\n        if (inIdx < 0 || inIdx >= ".concat(r, ") {\n          return initializationValue;\n        }\n      "));
        var d = "";
        r % t > 0 && (d = "\n        if (inIdx < 0 || inIdx >= ".concat(r, ") {\n          return -1.0;\n        }\n      ")), this.userCode = "\n      const float initializationValue = ".concat("0.0", ";\n\n      float getValue(int batch, int inIdx) {\n        ").concat(l, "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ").concat(d, "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ").concat(o, ")) * float(").concat(t, "));\n        int currentSeg = int(mod(float(outIdx), float(").concat(o, ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ").concat(c, "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ").concat(u, "\n        }\n\n        int inIdx = inOffset + ").concat(c, ";\n        if (").concat(1 === s, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ").concat(u, "\n        } else if (").concat(2 === s, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ").concat(u, "\n        } else if (").concat(3 === s, ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ").concat(u, "\n        }\n        setOutput(").concat("sumValue", ");\n      }\n    ")
    };
    var $u, el,
        nl = [Ka, Ya, Za, $a, tr, or, ir, cr, hr, fr, vr, mr, Cr, wr, Sr, Tr, Nr, _r, Or, Fr, Lr, Gr, zr, Xr, Hr, Qr, $r, to, ga, oo, fo, wo, To, Eo, Ao, _o, Fo, Po, Bo, Wo, Xo, Ho, jo, qo, Zo, ei, ni, ai, oi, ii, si, ui, di, hi, xi, gi, Ci, Ii, Ti, Ei, Oi, Di, Bi, Wi, Ui, Gi, Hi, Ki, Yi, xa, Qi, lo, Ji, ec, tc, Ca, rc, ic, cc, uc, dc, hc, xc, gc, Cc, wc, Sc, Rc, Tc, Nc, _c, Oc, Fc, Dc, Pc, Bc, Uc, Gc, Zc, Fa, Jc, es, ts, rs, Kr, is, us, ls, fs, vs, Ia, gs, ms, bs, Cs, ws, Yr, Hc, Ss, Rs, Ns, Pa, _s, Fs, Ls, Vs, Ms, zs, Hs, Ks, Qs, Js, eu, tu, ru, iu, su, lu, Mr, Qc, pu, hu, fu, xu, vu, gu, mu, bu, wu, Su, Tu, Nu, Eu, _u, Ou, Fu, Du, qc, za, Lu, Vu, Wu, Gu, Ku, Yu, Ha, Qu, Zu, {
            kernelName: n.UnsortedSegmentSum, backendName: "webgl", kernelFunc: function (e) {
                var t = e.inputs, a = e.backend, r = e.attrs, o = t.x, i = t.segmentIds, c = r.numSegments,
                    s = o.shape.length, u = [], l = 0, d = n.backend_util.getAxesPermutation([l], s), p = o;
                null != d && (p = Xa({
                    inputs: {x: o},
                    backend: a,
                    attrs: {perm: d}
                }), u.push(p), l = n.backend_util.getInnerMostAxes(1, s)[0]);
                var h = n.backend_util.segment_util.computeOutShape(p.shape, l, c),
                    f = n.util.sizeFromShape([p.shape[l]]),
                    x = Da({inputs: {x: p}, backend: a, attrs: {shape: [-1, f]}});
                u.push(x);
                var v = n.sumOutType(o.dtype), g = function (e, t, r, o, i) {
                    var c = e.shape[0], s = e.shape[1],
                        l = n.backend_util.segment_util.segOpComputeOptimalWindowSize(s, i),
                        d = new Ju({windowSize: l, inSize: s, batchSize: c, numSegments: i}, t),
                        p = a.compileAndRun(d, [e, r], o);
                    if (u.push(p), p.shape[1] === i) return p;
                    var h = ys({backend: a, attrs: {start: 0, stop: i, step: 1, dtype: "float32"}}),
                        f = Mu({inputs: {x: h}, backend: a, attrs: {reps: [s / l]}});
                    return u.push(h), u.push(f), g(p, t, f, o, i)
                }, m = Da({inputs: {x: g(x, "unsortedSegmentSum", i, v, c)}, backend: a, attrs: {shape: h}}), b = m;
                if (null != d) {
                    u.push(m);
                    var C = n.backend_util.getUndoAxesPermutation(d);
                    b = Xa({inputs: {x: b}, backend: a, attrs: {perm: C}})
                }
                return u.forEach((function (e) {
                    return a.disposeIntermediateTensorInfo(e)
                })), b
            }
        }, ss];
    try {
        for (var tl = c(nl), al = tl.next(); !al.done; al = tl.next()) {
            var rl = al.value;
            n.registerKernel(rl)
        }
    } catch (e) {
        $u = {error: e}
    } finally {
        try {
            al && !al.done && (el = tl.return) && el.call(tl)
        } finally {
            if ($u) throw $u.error
        }
    }
    e.GPGPUContext = fn, e.MathBackendWebGL = sa, e.forceHalfFloat = ua, e.gpgpu_util = hn, e.setWebGLContext = x, e.version_webgl = "4.22.0", e.webgl = la, e.webgl_util = pe
}));
//# sourceMappingURL=tf-backend-webgl.min.js.map
