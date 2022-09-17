(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        "34+p": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__track___CGtUP-camelCase{border-radius:5px;background-color:#de633a;position:absolute;top:3%;left:2%;width:96%;height:94%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__line___1FIVh-camelCase{width:100%;background-color:#fff}.styles__line___1FIVh-camelCase,.styles__racer___1eawH-camelCase{position:absolute;left:0}.styles__racer___1eawH-camelCase{transition:transform .8s linear}.styles__finishLine___2op_s-camelCase{position:absolute;top:0;right:0;height:4%;transform:translateX(25%)}.styles__centerText___1C9m2-camelCase{font-size:11.5vw;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:rgba(0,0,0,.6);padding:1vw 2vw;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}", ""]), e.locals = {
                track: "styles__track___CGtUP-camelCase",
                line: "styles__line___1FIVh-camelCase",
                racer: "styles__racer___1eawH-camelCase",
                finishLine: "styles__finishLine___2op_s-camelCase",
                centerText: "styles__centerText___1C9m2-camelCase"
            }
        },
        "9G+h": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("Ty5D"),
                c = r("74sb");

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = d(t);
                    if (e) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(t, e) {
                if (e && ("object" === l(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && p(t, e)
                }(i, t);
                var e, r, n, o = h(i);

                function i() {
                    return u(this, i), o.apply(this, arguments)
                }
                return e = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        Object(c.n)();
                        var t = window.location.pathname;
                        window.location.href = "".concat("https://id.blooket.com").concat(t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && f(e.prototype, r), n && f(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            m.propTypes = {};
            e.a = Object(s.g)(Object(a.b)((function() {
                return {}
            }), (function(t) {
                return Object(i.b)({}, t)
            }))(m))
        },
        CVrY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("VgyX"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("XTAU"),
                y = r("ZVoO"),
                d = r("ca/f"),
                m = r("+fLB"),
                v = r("qnYv");

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function b() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                b = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return T()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = x(a, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(C([])));
                m && m !== e && r.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function _(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == g(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: T
                    }
                }

                function T() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(_.prototype), s(_.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = _, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = C, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function w(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return x(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function k(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function O(t, e) {
                return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function j(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = E(t);
                    if (e) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function E(t) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && O(t, e)
                }(c, t);
                var e, r, n, i, a, s = j(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        goalAmount: t.host && t.host.settings ? t.host.settings.amount : 0,
                        askPlayAgain: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.leaving = !1, e.onPlayAgainAnswer = e.onPlayAgainAnswer.bind(T(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings
                            }, (function() {
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.firebase.getDatabaseVal(e.id, "c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = _(t, 2),
                                                n = e[0],
                                                o = e[1],
                                                i = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var a = 0; a < o.i.length; a++) {
                                                        var s = o.i[a];
                                                        s && (i[a] = s)
                                                    } else i = o.i;
                                                else i = {};
                                            var c = {};
                                            if (o.c)
                                                if (Array.isArray(o.c))
                                                    for (var l = 0; l < o.c.length; l++) {
                                                        var u = o.c[l];
                                                        u && (c[l] = u)
                                                    } else c = o.c;
                                                else c = {};
                                            r[n] = {
                                                corrects: c,
                                                incorrects: i
                                            }
                                        })), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && v.a.post("/api/history", {
                                                standings: e.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        progress: isNaN(t.progress) ? 0 : Math.round(Number(t.progress)),
                                                        corrects: r[t.name] ? r[t.name].corrects : {},
                                                        incorrects: r[t.name] ? r[t.name].incorrects : {}
                                                    }
                                                })),
                                                settings: e.settings,
                                                set: e.hostName,
                                                setId: e.setId
                                            }).then((function(e) {
                                                t.setState({
                                                    historyId: e.data._id,
                                                    ready: !0
                                                }), t.askTimeout = setTimeout((function() {
                                                    t.setState({
                                                        askPlayAgain: !0
                                                    })
                                                }), 3e3)
                                            })).catch((function(t) {
                                                console.error(t)
                                            }))
                                        }), 2e3)
                                    }))
                                }), 3500)
                            }))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.askTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "onPlayAgainAnswer",
                    value: (i = b().mark((function t(e) {
                        var r = this;
                        return b().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.leaving) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!e) {
                                        t.next = 10;
                                        break
                                    }
                                    return this.leaving = !0, this.props.firebase.removeVal(this.props.host.id, "st"), t.next = 7, new Promise((function(t) {
                                        return r.props.firebase.removeVal(r.props.host.id, "c", t)
                                    }));
                                case 7:
                                    this.props.firebase.setStage({
                                        id: this.props.host.id,
                                        stage: "join"
                                    }, (function() {
                                        r.ok = !0, r.props.history.push("/host/join")
                                    })), t.next = 13;
                                    break;
                                case 10:
                                    this.setState({
                                        askPlayAgain: !1
                                    }), this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost();
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                w(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                w(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? o.a.createElement("div", {
                            className: p.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(y.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(t.state.goalAmount - e.progress, " Left")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null, this.state.askPlayAgain ? o.a.createElement(d.a, {
                            text: "Would you like to play again right now with the same players and settings?",
                            buttonOne: {
                                text: "Yes!",
                                click: function() {
                                    return t.onPlayAgainAnswer(!0)
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.onPlayAgainAnswer(!1)
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            S.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                history: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    gameId: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: u.d
                }, t)
            }))(Object(m.d)(S)))
        },
        "DCI/": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__questionContainer___1a7Xf-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;background-color:#fff}.styles__powerUpBody___33jZ--camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#0bc2cf;cursor:pointer;outline:none}.styles__powerUpBody___33jZ--camelCase,.styles__powerUpHeader___3tJt9-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__powerUpHeader___3tJt9-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:5vw}.styles__powerUpIconContainer___3rksC-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:8vh;width:15vw;height:15vw;display:flex;justify-content:center;align-items:center}.styles__powerUpIcon___Yt0CA-camelCase{color:#fff;font-size:9.5vw;margin:auto}.styles__powerUpDesc___285Bo-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-size:2vw;width:80%;margin:-5vh 10% 7vh;text-align:center;font-family:Nunito,sans-serif}.styles__powerUpName___3oc05-camelCase{font-weight:700;font-size:3vw}.styles__powerUpInstruct___2rVcx-camelCase{text-shadow:2px 2px 8px grey;font-size:1.8vw;text-decoration:underline;width:80%;margin:0 10%;text-align:center}.styles__notifyContainer___2IByM-camelCase,.styles__powerUpInstruct___2rVcx-camelCase{color:#fff;font-family:Nunito,sans-serif}.styles__notifyContainer___2IByM-camelCase{position:absolute;top:75px;right:20px;z-index:10;padding:5px 10px 10px;display:flex;flex-direction:column;align-items:center;max-width:80px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:rgba(0,0,0,.6);border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fadeOut___1SLOn-camelCase .3s linear 1.4s forwards;animation:styles__fadeOut___1SLOn-camelCase .3s linear 1.4s forwards}@-webkit-keyframes styles__fadeOut___1SLOn-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___1SLOn-camelCase{0%{opacity:1}to{opacity:0}}.styles__notifyText___Hle7u-camelCase{font-size:36px}.styles__notifyRow___3z-f3-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__notifyBlook___8MHR7-camelCase{width:24px}.styles__notifyIcon___1qgED-camelCase{font-size:22px}.styles__playerHeader___Aw_Bz-camelCase{font-size:4.5vw;width:80%;margin:40px auto 0;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__playerHolder___10dwj-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___3RV1t-camelCase{width:200px;height:60px;line-height:60px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;margin:50px auto 30px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__noPlayers___3RV1t-camelCase:hover{transform:scale(.95)}.styles__playerContainer___3CZTg-camelCase{background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:.2s}.styles__playerContainer___3CZTg-camelCase:focus,.styles__playerContainer___3CZTg-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___37T6r-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___SkxOx-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px;color:#3a3a3a;font-family:Nunito,sans-serif}.styles__playerText___F7-Gn-camelCase{font-weight:700;font-size:28px;margin-right:10px;line-height:35px;word-break:break-word}.styles__playerProgress___3LFs_-camelCase{height:35px;line-height:35px;font-size:26px}.styles__freezeContainer___hoBm4-camelCase{z-index:11;background-image:linear-gradient(#31aae0,#bdf);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__freezeIcon___260Z5-camelCase{font-size:14vw;padding-bottom:8vh}.styles__freezeHeader___3tM1X-camelCase,.styles__freezeIcon___260Z5-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__freezeHeader___3tM1X-camelCase{font-family:Titan One,sans-serif;font-size:5vw}.styles__freezeRow___3vQ6M-camelCase{margin:4vh auto;display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:3vw}.styles__freezeBlook___1IZ05-camelCase{width:4.5vw;margin-right:2vw}.styles__zoomedIn___1lz8b-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(.3);-webkit-animation:styles__zoom___3YlLC-camelCase 3s linear 6.5s forwards;animation:styles__zoom___3YlLC-camelCase 3s linear 6.5s forwards}@-webkit-keyframes styles__zoom___3YlLC-camelCase{0%{transform:scale(.3)}to{transform:scale(1)}}@keyframes styles__zoom___3YlLC-camelCase{0%{transform:scale(.3)}to{transform:scale(1)}}@media only screen and (max-width:800px){.styles__powerUpHeader___3tJt9-camelCase{font-size:13vw}.styles__powerUpIconContainer___3rksC-camelCase{margin:6vh;width:34vw;height:34vw}.styles__powerUpIcon___Yt0CA-camelCase{font-size:21vw}.styles__powerUpDesc___285Bo-camelCase{font-size:6vw;width:90%;margin:-2.5vh 5% 3.5vh}.styles__powerUpName___3oc05-camelCase{font-size:8vw}.styles__powerUpInstruct___2rVcx-camelCase{font-size:5.5vw}.styles__playerHeader___Aw_Bz-camelCase{font-size:11vw}.styles__playerHolder___10dwj-camelCase{width:90%}.styles__playerContainer___3CZTg-camelCase{width:100%}.styles__freezeIcon___260Z5-camelCase{font-size:26vw;padding-bottom:8vh}.styles__freezeHeader___3tM1X-camelCase{font-size:12vw}.styles__freezeRow___3vQ6M-camelCase{margin:3vh auto;font-size:6vw}.styles__freezeBlook___1IZ05-camelCase{width:7.5vw;margin-right:2vw}}", ""]), e.locals = {
                questionContainer: "styles__questionContainer___1a7Xf-camelCase",
                powerUpBody: "styles__powerUpBody___33jZ--camelCase",
                powerUpHeader: "styles__powerUpHeader___3tJt9-camelCase",
                powerUpIconContainer: "styles__powerUpIconContainer___3rksC-camelCase",
                powerUpIcon: "styles__powerUpIcon___Yt0CA-camelCase",
                powerUpDesc: "styles__powerUpDesc___285Bo-camelCase",
                powerUpName: "styles__powerUpName___3oc05-camelCase",
                powerUpInstruct: "styles__powerUpInstruct___2rVcx-camelCase",
                notifyContainer: "styles__notifyContainer___2IByM-camelCase",
                fadeOut: "styles__fadeOut___1SLOn-camelCase",
                notifyText: "styles__notifyText___Hle7u-camelCase",
                notifyRow: "styles__notifyRow___3z-f3-camelCase",
                notifyBlook: "styles__notifyBlook___8MHR7-camelCase",
                notifyIcon: "styles__notifyIcon___1qgED-camelCase",
                playerHeader: "styles__playerHeader___Aw_Bz-camelCase",
                playerHolder: "styles__playerHolder___10dwj-camelCase",
                noPlayers: "styles__noPlayers___3RV1t-camelCase",
                playerContainer: "styles__playerContainer___3CZTg-camelCase",
                playerBlook: "styles__playerBlook___37T6r-camelCase",
                playerColumn: "styles__playerColumn___SkxOx-camelCase",
                playerText: "styles__playerText___F7-Gn-camelCase",
                playerProgress: "styles__playerProgress___3LFs_-camelCase",
                freezeContainer: "styles__freezeContainer___hoBm4-camelCase",
                freezeIcon: "styles__freezeIcon___260Z5-camelCase",
                freezeHeader: "styles__freezeHeader___3tM1X-camelCase",
                freezeRow: "styles__freezeRow___3vQ6M-camelCase",
                freezeBlook: "styles__freezeBlook___1IZ05-camelCase",
                zoomedIn: "styles__zoomedIn___1lz8b-camelCase",
                zoom: "styles__zoom___3YlLC-camelCase"
            }
        },
        "IB8/": function(t, e, r) {
            var n = r("34+p");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        IVFQ: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "RACING_RESULTS"
        },
        IaGH: function(t, e, r) {
            var n = r("DCI/");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        OksP: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("cpGi"),
                f = r("+xn+"),
                p = r("HbJ1"),
                h = r("VgyX"),
                y = r("kQZX"),
                d = r("XTAU"),
                m = r("Xst1"),
                v = r.n(m),
                g = r("IB8/"),
                b = r.n(g),
                w = r("LHn/"),
                _ = r("0oXL"),
                x = r("74sb"),
                k = r("Qovi"),
                O = r("a/yZ"),
                j = r("YSr+"),
                C = r("BmZc"),
                T = r("+fLB");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function S(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return P(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return j()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(O([])));
                m && m !== e && r.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function L(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function A(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function z(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = B(t);
                    if (e) {
                        var o = B(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return U(this, r)
                }
            }

            function U(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return R(t)
            }

            function R(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = [{
                    text: "Ready",
                    time: 5500
                }, {
                    text: "Set",
                    time: 2500
                }, {
                    text: "Go!",
                    time: 2e3
                }, {
                    text: "",
                    time: 1e3
                }],
                D = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && N(t, e)
                    }(c, t);
                    var e, r, n, i, a, s = z(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (e = s.call(this, t)).state = {
                            racers: [],
                            size: 0,
                            padding: 0,
                            goalAmount: t.host && t.host.settings ? t.host.settings.amount : 0,
                            centerText: "Loading",
                            muted: !!t.host && t.host.muted
                        }, e.ok = !1, e.here = !0, e.getClients = e.getClients.bind(R(e)), e.updateDimensions = e.updateDimensions.bind(R(e)), e.changeMuted = e.changeMuted.bind(R(e)), e.audio = new Audio(k.a), e.readySetGoAudios = [new Audio(O.a), new Audio(j.a), new Audio(C.a)], e
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: (i = I().mark((function t() {
                            var e, r = this;
                            return I().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.host && this.props.host.settings) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        e = 0,
                                            function t() {
                                                r.rsgTimeout = setTimeout((function() {
                                                    r.setState({
                                                        centerText: q[e].text
                                                    }, (function() {
                                                        e < q.length - 1 && (r.state.muted || r.readySetGoAudios[e].play(), e += 1, t())
                                                    }))
                                                }), q[e].time)
                                            }(), this.audioTimeout = setTimeout((function() {
                                                r.audio.volume = .6, r.audio.play(), r.audio.addEventListener("ended", (function() {
                                                    r.audio.currentTime = 0, r.audio.play()
                                                }), !1)
                                            }), 10500), this.props.firebase.setStage({
                                                id: this.props.host.id,
                                                stage: "race"
                                            }), this.getClients(), this.clientsInterval = setInterval((function() {
                                                r.getClients()
                                            }), 2e3);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), a = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(t, e);

                                function a(t) {
                                    L(o, r, n, a, s, "next", t)
                                }

                                function s(t) {
                                    L(o, r, n, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var t = this;
                            clearTimeout(this.audioTimeout), clearTimeout(this.rsgTimeout), clearInterval(this.timerInterval), clearInterval(this.clientsInterval), this.here = !1, !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "getClients",
                        value: function() {
                            var t = this;
                            this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(e) {
                                var r = e || {};
                                if (r && 0 !== Object.keys(r).length) {
                                    var n = !1,
                                        o = Object.entries(r).map((function(e) {
                                            var r = S(e, 2),
                                                o = r[0],
                                                i = r[1],
                                                a = Number(t.props.host.settings.amount),
                                                s = i.pr ? Math.min(i.pr, a) : 0;
                                            return s >= a && (n = !0), {
                                                name: o,
                                                blook: i.b,
                                                progress: s,
                                                toAttack: i.tat
                                            }
                                        }));
                                    if (n) {
                                        o.sort((function(t, e) {
                                            return e.progress - t.progress
                                        }));
                                        var i = 0,
                                            a = [];
                                        return o.forEach((function(t, e) {
                                            0 !== e && t.progress === o[e - 1].progress || !t.blook || (i += 1), o[e].place = i, t.blook && a.push({
                                                n: t.name,
                                                b: t.blook,
                                                pr: t.progress,
                                                pl: i
                                            })
                                        })), t.props.updateStandings(o), void t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "st",
                                            val: a
                                        }, (function() {
                                            t.props.firebase.setStage({
                                                id: t.props.host.id,
                                                stage: "fin"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/racing/final")
                                            }))
                                        }))
                                    }
                                    var s = o.map((function(t) {
                                        return t.name
                                    }));
                                    o.forEach((function(e) {
                                        if (e.toAttack) {
                                            var r = e.toAttack.split(":");
                                            if (1 === r.length) return void t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "act",
                                                val: "".concat(e.name, ":").concat(e.blook, ":").concat(r[0])
                                            });
                                            var n = s.indexOf(r[0]);
                                            if (-1 === n) return;
                                            var i = o[n];
                                            if (r.length < 2) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(i.name, "/at"),
                                                val: "".concat(e.name, ":").concat(e.blook, ":").concat(r[1])
                                            }), t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                                        }
                                    }));
                                    var c = t.state.racers.length;
                                    t.setState({
                                        racers: o
                                    }, (function() {
                                        o.length !== c && t.updateDimensions()
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            var t = .94 * (window.innerHeight - 75),
                                e = 75,
                                r = 25,
                                n = this.state.racers.length || 1,
                                o = t / n;
                            o / 1.15 >= 75 ? (e = o / 1.15, r = o) : r = 1.15 * (e = 75) + (t - n * (1.15 * e)) / (n - 1), this.here && this.setState({
                                size: e,
                                padding: r
                            })
                        }
                    }, {
                        key: "changeMuted",
                        value: function() {
                            var t = this;
                            this.setState({
                                muted: !this.state.muted
                            }, (function() {
                                t.audio.muted = t.state.muted, t.props.setMuted(t.state.muted)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            if (!this.props.host || !this.props.host.settings) return o.a.createElement(l.a, {
                                to: "/dashboard"
                            });
                            var e = Math.floor(this.state.racers.length / 10) + 1;
                            return o.a.createElement("div", {
                                className: v.a.body,
                                style: {
                                    overflow: "hidden"
                                }
                            }, o.a.createElement(d.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), o.a.createElement(y.a, {
                                left: "Blooket",
                                right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                muted: this.state.muted,
                                changeMuted: this.changeMuted
                            }), o.a.createElement("div", {
                                className: v.a.hostRegularBody
                            }, o.a.createElement("div", {
                                className: b.a.track
                            }, this.state.racers.map((function(r, n) {
                                return o.a.createElement("div", {
                                    key: r.name
                                }, e && (t.state.racers.length - n - 1) % e == 0 ? o.a.createElement("div", {
                                    className: b.a.line,
                                    style: {
                                        height: "".concat(1.15 * t.state.size / 15, "px"),
                                        top: n * t.state.padding + 1.15 * t.state.size - 1.15 * t.state.size / 15
                                    }
                                }) : null, o.a.createElement(u.a, {
                                    place: "bottom",
                                    effect: "solid",
                                    offset: {
                                        bottom: -10
                                    },
                                    className: v.a.tooltip
                                }), o.a.createElement(_.a, {
                                    className: b.a.racer,
                                    name: r.blook,
                                    style: {
                                        width: t.state.size,
                                        top: n * t.state.padding,
                                        zIndex: n + 1,
                                        transform: "translateX(".concat(r.progress / (t.state.goalAmount - 1) * (Object(x.D)("96vw") - t.state.size), "px)")
                                    },
                                    tip: "".concat(r.name, " - ").concat(r.progress, "/").concat(t.state.goalAmount)
                                }))
                            })), new Array(25).fill(0).map((function(t, e) {
                                return o.a.createElement("img", {
                                    src: e % 2 == 0 ? w.a.basic.finishLine : w.a.basic.finishLine2,
                                    alt: "Finish Line",
                                    key: e,
                                    className: b.a.finishLine,
                                    style: {
                                        top: "".concat(4 * e, "%")
                                    },
                                    draggable: !1
                                })
                            }))), this.state.centerText ? o.a.createElement("div", {
                                className: b.a.centerText,
                                style: {
                                    fontSize: "Loading" === this.state.centerText ? "6vw" : "11.5vw"
                                }
                            }, this.state.centerText) : null))
                        }
                    }]) && A(e.prototype, r), n && A(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            D.propTypes = {
                host: c.a.object,
                firebase: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    updateStandings: f.b,
                    setMuted: p.a,
                    deleteHost: h.d
                }, t)
            }))(Object(T.d)(D)))
        },
        Zm5x: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("lSH5");

            function p() {
                return {
                    type: f.a
                }
            }
            var h = r("ZrUs"),
                y = r("oQ+7"),
                d = r("oG50"),
                m = r.n(d),
                v = r("Xst1"),
                g = r.n(v),
                b = r("LAIx"),
                w = r("ca/f"),
                _ = r("XTAU"),
                x = r("2ZNs"),
                k = r("+fLB"),
                O = r("qnYv"),
                j = r("9coQ");

            function C(t) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return j()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(O([])));
                m && m !== e && r.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == C(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function E(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(r), !0).forEach((function(e) {
                        P(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function P(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function L(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            I(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            I(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function A(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function z(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = B(t);
                    if (e) {
                        var o = B(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return U(this, r)
                }
            }

            function U(t, e) {
                if (e && ("object" === C(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return R(t)
            }

            function R(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = function(t) {
                    return o.a.createElement("div", {
                        className: m.a.progressText
                    }, t.progress || 0)
                },
                D = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && N(t, e)
                    }(s, t);
                    var e, r, n, i, a = z(s);

                    function s(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (e = a.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            progress: 0,
                            goalAmount: 0,
                            askPlayAgain: !1,
                            isBlocked: !1
                        }, e.ok = !1, e.dbRefStage = {}, e.onPlayAgainAnswer = e.onPlayAgainAnswer.bind(R(e)), e.saveStats = e.saveStats.bind(R(e)), e
                    }
                    return e = s, (r = [{
                        key: "componentDidMount",
                        value: (i = L(T().mark((function t() {
                            var e, r, n, o, i, a, s = this;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 4:
                                        if (this.dbRefStage = t.sent, this.dbRefStage.on("value", (function(t) {
                                                "join" === t.val() && s.setState({
                                                    askPlayAgain: !0
                                                })
                                            })), e = this.props.client.standing.map((function(t) {
                                                return t.name
                                            })).indexOf(this.props.client.name), this.props.firebase.setVal({
                                                id: this.props.client.hostId,
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: S({}, this.props.client.corrects),
                                                    i: S({}, this.props.client.incorrects)
                                                }
                                            }), -1 !== e) {
                                            t.next = 11;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), t.abrupt("return");
                                    case 11:
                                        r = 0, n = 0, Object.values(this.props.client.corrects).forEach((function(t) {
                                            r += t, n += t
                                        })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                            n += t
                                        })), o = this.props.client.standing[e], i = o.place, a = this.props.client.standing.length - i, this.stats = {
                                            place: i,
                                            progress: o.progress,
                                            goalAmount: this.props.client.amount,
                                            playersDefeated: a,
                                            correctAnswers: r,
                                            blookUsed: this.props.client.blook,
                                            nameUsed: this.props.client.name
                                        }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                            s.setState({
                                                ready: !0,
                                                numCorrect: r,
                                                numQuestions: n,
                                                progress: o.progress,
                                                goalAmount: s.props.client.amount
                                            })
                                        }), 4750);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.ok ? this.props.clearStandings() : this.props.deleteClient(), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value")
                        }
                    }, {
                        key: "onPlayAgainAnswer",
                        value: function(t) {
                            var e = this;
                            t ? (this.ok = !0, j.a.put("/c/firebase/join", {
                                id: this.props.client.hostId,
                                name: this.props.client.name
                            }).then(function() {
                                var t = L(T().mark((function t(r) {
                                    var n;
                                    return T().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!(n = r.data).success) {
                                                    t.next = 12;
                                                    break
                                                }
                                                return t.next = 4, new Promise((function(t) {
                                                    return e.props.firebase.setAuth(e.props.client.hostId, n.fbToken, t)
                                                }));
                                            case 4:
                                                if (new Promise((function(t) {
                                                        e.props.firebase.setClient(e.props.client.hostId, e.props.client.name, n.blook, (function(e) {
                                                            return t(e)
                                                        }))
                                                    }))) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.abrupt("return", e.props.history.push("/play"));
                                            case 7:
                                                window.addEventListener("beforeunload", (function() {
                                                    e.props.client && e.props.client.hostId && e.props.client.name && e.props.firebase.removeVal(e.props.client.hostId, "c/".concat(e.props.client.name))
                                                })), e.props.setBlook(n.blook, Object(b.a)(n.blook)), e.props.history.push("/play/lobby"), t.next = 13;
                                                break;
                                            case 12:
                                                e.setState({
                                                    askPlayAgain: !1
                                                });
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()).catch((function(t) {
                                console.error(t), e.setState({
                                    askPlayAgain: !1
                                })
                            }))) : this.setState({
                                askPlayAgain: !1
                            })
                        }
                    }, {
                        key: "saveStats",
                        value: function(t, e) {
                            O.a.put("/api/users/racingstats", {
                                name: t,
                                place: this.stats.place,
                                progress: this.stats.progress,
                                goalAmount: this.stats.goalAmount,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                e()
                            })).catch((function(t) {
                                console.error(t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: u.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(_.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(y.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(x.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(this.state.progress, " / ").concat(this.state.goalAmount),
                                saveStats: this.saveStats,
                                renderStandingStat: q,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null, this.state.askPlayAgain && !this.state.isBlocked ? o.a.createElement(w.a, {
                                text: "The host is playing again with the same settings, would you like to join?",
                                buttonOne: {
                                    text: "Yes!",
                                    click: function() {
                                        return t.onPlayAgainAnswer(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return t.onPlayAgainAnswer(!1)
                                    },
                                    color: "blue"
                                }
                            }) : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && A(e.prototype, r), n && A(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), s
                }(o.a.Component);
            D.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                setBlook: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                clearStandings: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    setBlook: h.d,
                    deleteClient: h.a,
                    clearStandings: p
                }, t)
            }))(Object(k.d)(D)))
        },
        lSH5: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "CLEAR_STANDINGS"
        },
        oG50: function(t, e, r) {
            var n = r("uS/B");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        uFfG: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                p = r.n(f),
                h = r("IVFQ");

            function y(t, e, r) {
                return {
                    type: h.a,
                    standing: t,
                    corrects: e,
                    incorrects: r
                }
            }
            var d = r("ZrUs"),
                m = r("Xst1"),
                v = r.n(m),
                g = r("IaGH"),
                b = r.n(g),
                w = r("Rnav"),
                _ = r("XTAU"),
                x = r("FVRk"),
                k = r("4Zpe"),
                O = r("ca/f");

            function j(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(r), !0).forEach((function(e) {
                        T(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function T(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var E = [
                    [{
                        name: "boost",
                        rate: 10
                    }, {
                        name: "wind",
                        rate: 55
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "rocket",
                        rate: 20
                    }, {
                        name: "party",
                        rate: 1
                    }, {
                        name: "zoom",
                        rate: 1
                    }, {
                        name: "freeze",
                        rate: 3
                    }],
                    [{
                        name: "boost",
                        rate: 25
                    }, {
                        name: "wind",
                        rate: 20
                    }, {
                        name: "shield",
                        rate: 20
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "party",
                        rate: 1
                    }, {
                        name: "fire",
                        rate: 2
                    }, {
                        name: "freeze",
                        rate: 2
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "boost",
                        rate: 37
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "rocket",
                        rate: 40
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "rockets",
                        rate: 3
                    }, {
                        name: "fire",
                        rate: 3
                    }],
                    [{
                        name: "freeze",
                        rate: 10
                    }, {
                        name: "boost",
                        rate: 30
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "party",
                        rate: 2
                    }, {
                        name: "fire",
                        rate: 9
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 10
                    }, {
                        name: "baby",
                        rate: 1
                    }, {
                        name: "boost",
                        rate: 36
                    }, {
                        name: "party",
                        rate: 4
                    }, {
                        name: "fire",
                        rate: 4
                    }, {
                        name: "rocket",
                        rate: 35
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "hot",
                        rate: 1
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "baby",
                        rate: 5
                    }, {
                        name: "boost",
                        rate: 40
                    }, {
                        name: "party",
                        rate: 4
                    }, {
                        name: "fire",
                        rate: 5
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "zoom",
                        rate: 1
                    }, {
                        name: "hot",
                        rate: 3
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "baby",
                        rate: 10
                    }, {
                        name: "boost",
                        rate: 40
                    }, {
                        name: "rocket",
                        rate: 25
                    }, {
                        name: "hot",
                        rate: 15
                    }, {
                        name: "rockets",
                        rate: 5
                    }],
                    [{
                        name: "baby",
                        rate: 50
                    }, {
                        name: "hot",
                        rate: 50
                    }]
                ],
                S = {
                    freeze: {
                        title: "FREEZE",
                        icon: "far fa-snowflake",
                        desc: "Freeze a player for 10 seconds",
                        color: "#64bee8"
                    },
                    baby: {
                        title: "Baby Booster",
                        icon: "fas fa-baby-carriage",
                        desc: "Move up 4 questions",
                        color: "#ffb3ff"
                    },
                    wind: {
                        title: "Whoosh",
                        icon: "fas fa-wind",
                        desc: "Blow a player behind you back 1 question",
                        color: "#809fff"
                    },
                    boost: {
                        title: "Energy Boost",
                        icon: "fas fa-bolt",
                        desc: "Move up 1 question",
                        color: "#e6e600"
                    },
                    shield: {
                        title: "Mighty Shield",
                        icon: "fas fa-shield-alt",
                        desc: "Block the next harmful power-up",
                        color: "#3366ff"
                    },
                    party: {
                        title: "Blook Fiesta",
                        icon: "fas fa-birthday-cake",
                        desc: "Distract other players with Blooks",
                        color: "#bb99ff",
                        time: 9e3
                    },
                    fire: {
                        title: "Dumpster Fire",
                        icon: "fas fa-dumpster-fire",
                        desc: "Send the player in 1st back 3 questions",
                        color: "#ff8533"
                    },
                    rocket: {
                        title: "Rocket Attack",
                        icon: "fas fa-rocket",
                        desc: "Send any player back 1 question",
                        color: "#9a49aa"
                    },
                    zoom: {
                        title: "Minify",
                        icon: "fas fa-search-minus",
                        desc: "Shrink everyone else's screens",
                        color: "#d8b470",
                        time: 1e4
                    },
                    hot: {
                        title: "Spicy Pepper",
                        icon: "fas fa-pepper-hot",
                        desc: "The next 3 questions are worth double",
                        color: "#ff3333"
                    },
                    rockets: {
                        title: "Mega Rocket Attack",
                        icon: "fas fa-rocket",
                        desc: "Send 3 players back 1 question",
                        color: "#0bc2cf"
                    }
                },
                P = r("2hgL"),
                I = r("JyFv"),
                L = r("0oXL"),
                A = r("+fLB"),
                N = r("74sb");

            function z(t) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function U(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return R(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function B(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(r), !0).forEach((function(e) {
                        D(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function D(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function H() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                H = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return j()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(O([])));
                m && m !== e && r.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == z(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function M(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function G(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            M(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            M(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function F(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Q(t, e) {
                return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function V(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = J(t);
                    if (e) {
                        var o = J(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return Z(this, r)
                }
            }

            function Z(t, e) {
                if (e && ("object" === z(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Y(t)
            }

            function Y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function J(t) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var X = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && Q(t, e)
                }(c, t);
                var e, r, n, i, a, s = V(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        question: {},
                        phase: "",
                        correct: !1,
                        progress: 0,
                        goalAmount: t.client ? t.client.amount : 0,
                        powerUp: {},
                        powerUpDisplay: {},
                        isChosen: !1,
                        players: [],
                        numTargets: 3,
                        notifyText: "",
                        notifyBlook: "",
                        notifyIcon: "",
                        isZoomed: !1,
                        partyBlook: "",
                        isWaiting: t.client && !e.props.client.late,
                        showInstructions: !0,
                        readId: ""
                    }, e.dbRefStage = {}, e.dbRefMe = {}, e.dbRefAction = {}, e.questions = [], e.freeQuestions = [], e.corrects = {}, e.incorrects = {}, e.here = !0, e.waiting = !1, e.powerUpCd = 4, e.shield = !1, e.hotCounter = 0, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(Y(e)), e.getQuestion = e.getQuestion.bind(Y(e)), e.getPowerUp = e.getPowerUp.bind(Y(e)), e.choosePowerUp = e.choosePowerUp.bind(Y(e)), e.usePowerUp = e.usePowerUp.bind(Y(e)), e.answerNext = e.answerNext.bind(Y(e)), e.readQuestion = e.readQuestion.bind(Y(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = G(H().mark((function t() {
                        var e = this;
                        return H().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && "Racing" === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(N.c)(), this.waitingTimeout = setTimeout((function() {
                                        e.setState({
                                            isWaiting: !1
                                        })
                                    }), 1e4), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.getQuestion(), t.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 9:
                                    return this.dbRefStage = t.sent, this.dbRefStage.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "fin":
                                                e.props.firebase.getDatabaseVal(e.props.client.hostId, "st", (function(t) {
                                                    var r = t ? t.map((function(t) {
                                                        return {
                                                            name: t.n,
                                                            blook: t.b,
                                                            progress: t.pr,
                                                            place: t.pl
                                                        }
                                                    })).filter((function(t) {
                                                        return t.progress || 0 === t.progress
                                                    })) : [];
                                                    r.sort((function(t, e) {
                                                        return t.place - e.place
                                                    })), e.props.racingResults(r, e.corrects, e.incorrects), e.props.history.push("/play/racing/final")
                                                }));
                                                break;
                                            case null:
                                                e.props.firebase.getDatabaseVal(e.props.client.hostId, "stg", (function(t) {
                                                    t || (e.props.deleteClient(), e.props.history.push("/play"))
                                                }))
                                        }
                                    })), t.next = 13, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                                case 13:
                                    return this.dbRefMe = t.sent, this.dbRefMe.on("value", (function(t) {
                                        if (t.val() && !e.state.notifyPowerUp) {
                                            var r = t.val().split(":");
                                            if (3 === r.length) {
                                                var n = e.state.progress;
                                                if (e.shield) {
                                                    if (e.shield = !1, !e.here) return;
                                                    e.setState({
                                                        notifyIcon: S.shield.icon,
                                                        notifyBlook: r[1],
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700)
                                                    }))
                                                } else {
                                                    var o = r[2],
                                                        i = "";
                                                    switch (o) {
                                                        case "wind":
                                                        case "rocket":
                                                            i = "+1", n -= 1;
                                                            break;
                                                        case "fire":
                                                            i = "+3", n -= 3;
                                                            break;
                                                        case "freeze":
                                                            i = r[0]
                                                    }
                                                    if (!e.here) return;
                                                    e.setState({
                                                        notifyBlook: r[1],
                                                        notifyIcon: S[o].icon,
                                                        notifyText: i,
                                                        progress: n
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), "freeze" === o ? 1e4 : 1700)
                                                    }))
                                                }
                                                e.props.firebase.setVal({
                                                    id: e.props.client.hostId,
                                                    path: "c/".concat(e.props.client.name),
                                                    val: {
                                                        b: e.props.client.blook,
                                                        pr: n
                                                    }
                                                })
                                            }
                                        }
                                    })), t.next = 17, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                                case 17:
                                    this.dbRefAction = t.sent, this.dbRefAction.on("value", (function(t) {
                                        if (t.val() && !e.state.notifyPowerUp) {
                                            var r = t.val().split(":");
                                            if (3 === r.length && r[0] !== e.props.client.name)
                                                if (e.shield) {
                                                    if (e.shield = !1, !e.here) return;
                                                    e.setState({
                                                        notifyIcon: S.shield.icon,
                                                        notifyBlook: r[1],
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700)
                                                    }))
                                                } else {
                                                    if (!e.here) return;
                                                    var n = r[2];
                                                    switch (n) {
                                                        case "zoom":
                                                            e.setState({
                                                                isZoomed: !0
                                                            });
                                                            break;
                                                        case "party":
                                                            if (r[1] === e.state.partyBlook) return;
                                                            e.setState({
                                                                partyBlook: r[1]
                                                            })
                                                    }
                                                    e.setState({
                                                        notifyBlook: r[1],
                                                        notifyIcon: S[n].icon,
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700), "zoom" === n ? (clearTimeout(e.zoomTimeout), e.zoomTimeout = setTimeout((function() {
                                                            e.setState({
                                                                isZoomed: !1
                                                            })
                                                        }), S[n].time)) : "party" === n && (clearTimeout(e.partyTimeout), e.partyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                partyBlook: ""
                                                            })
                                                        }), S[n].time))
                                                    }))
                                                }
                                        }
                                    }));
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), this.here = !1, Object(N.u)(), clearInterval(this.powerUpInterval), clearTimeout(this.powerUpTimeout), clearTimeout(this.notifyText), clearTimeout(this.waitTimeout), clearTimeout(this.waitingTimeout), clearTimeout(this.partyTimeout), clearTimeout(this.zoomTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (!this.waiting) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var e = this.state.question.correctAnswers.includes(t),
                                r = this.state.question.number;
                            e ? this.corrects[r] ? this.corrects[r] += 1 : this.corrects[r] = 1 : this.incorrects[r] ? this.incorrects[r] += 1 : this.incorrects[r] = 1;
                            var n = this.state.progress;
                            e && (n += 1, this.hotCounter > 0 && (n += 1), this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name),
                                val: {
                                    b: this.props.client.blook,
                                    pr: n
                                }
                            }), this.powerUpCd -= 1), this.hotCounter > 0 && (this.hotCounter -= 1), n > this.state.goalAmount && (n = this.state.goalAmount), this.here && this.setState({
                                correct: e,
                                phase: "feedback",
                                progress: n,
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var t = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                        var e = Object(N.p)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(e), 1), e.random && (e.answers = Object(N.w)(e.answers)), this.here && this.setState({
                            question: e,
                            phase: "question",
                            powerUp: "",
                            numTargets: 0
                        }, (function() {
                            t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                t.waiting = !1
                            }), 400)
                        }))
                    }
                }, {
                    key: "getPowerUp",
                    value: function() {
                        var t = this;
                        this.here && (this.setState({
                            phase: "powerup",
                            powerUpDisplay: Object(N.p)(Object.values(S)),
                            isChosen: !1
                        }, (function() {
                            t.powerUpInterval = setInterval((function() {
                                t.here && t.setState({
                                    powerUpDisplay: Object(N.p)(Object.values(S).filter((function(e) {
                                        return e !== t.state.powerUpDisplay && "rockets" !== e
                                    })))
                                })
                            }), 150)
                        })), this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                            if (e && t.here) {
                                var r = Object.values(e);
                                r.sort((function(t, e) {
                                    return (e.pr || 0) - (t.pr || 0)
                                }));
                                var n = function(t) {
                                    for (var e = Math.min(t, 7), r = 100 * Math.random(), n = 0, o = {}, i = 0; i < E[e].length; i++)
                                        if ((n += E[e][i].rate) >= r) {
                                            var a = E[e][i].name;
                                            o = C({
                                                name: a
                                            }, S[a]);
                                            break
                                        } return o
                                }((r[0].pr || 0) - t.state.progress);
                                clearTimeout(t.powerUpTimeout), t.setState({
                                    powerUp: n
                                })
                            }
                        })), this.powerUpTimeout = setTimeout((function() {
                            t.setState({
                                powerUp: q(q({}, S.boost), {}, {
                                    name: "boost"
                                })
                            })
                        }), 3e3))
                    }
                }, {
                    key: "choosePowerUp",
                    value: function() {
                        var t = this;
                        this.state.powerUp && this.here && (clearInterval(this.powerUpInterval), clearTimeout(this.waitTimeout), this.setState({
                            isChosen: !0
                        }, (function() {
                            t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                t.waiting = !1
                            }), 300)
                        })))
                    }
                }, {
                    key: "usePowerUp",
                    value: function() {
                        var t = this;
                        if (!this.waiting) {
                            var e = this.state.progress;
                            switch (this.state.powerUp.name) {
                                case "boost":
                                case "baby":
                                    if (e += "baby" === this.state.powerUp.name ? 4 : 1, this.props.firebase.setVal({
                                            id: this.props.client.hostId,
                                            path: "c/".concat(this.props.client.name),
                                            val: {
                                                b: this.props.client.blook,
                                                pr: e
                                            }
                                        }), clearTimeout(this.notifyTimeout), !this.here) return;
                                    this.setState({
                                        progress: e,
                                        notifyText: "baby" === this.state.powerUp.name ? "-4" : "-1",
                                        notifyIcon: S[this.state.powerUp.name].icon,
                                        notifyBlook: ""
                                    }, (function() {
                                        t.notifyTimeout = setTimeout((function() {
                                            t.setState({
                                                notifyText: "",
                                                notifyIcon: ""
                                            })
                                        }), 1700)
                                    })), this.getQuestion();
                                    break;
                                case "wind":
                                case "rocket":
                                case "rockets":
                                case "freeze":
                                    this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                                        var r = e ? Object.entries(e).map((function(t) {
                                            var e = U(t, 2),
                                                r = e[0],
                                                n = e[1];
                                            return {
                                                name: r,
                                                blook: n.b,
                                                progress: n.pr || 0
                                            }
                                        })).filter((function(e) {
                                            return e.name !== t.props.client.name
                                        })) : [];
                                        "wind" === t.state.powerUp.name && (r = r.filter((function(e) {
                                            return e.progress <= t.state.progress
                                        }))), r.sort((function(t, e) {
                                            return e.progress - t.progress
                                        })), t.here && t.setState({
                                            players: r,
                                            numTargets: "rockets" === t.state.powerUp.name ? 3 : 1,
                                            phase: "target"
                                        })
                                    }));
                                    break;
                                case "fire":
                                    this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                                        var r = Object.entries(e).map((function(t) {
                                            var e = U(t, 2),
                                                r = e[0],
                                                n = e[1];
                                            return {
                                                name: r,
                                                blook: n.b,
                                                progress: n.pr || 0
                                            }
                                        })).filter((function(e) {
                                            return e.name !== t.props.client.name
                                        }));
                                        r.length > 0 && (r.sort((function(t, e) {
                                            return e.progress - t.progress
                                        })), t.props.firebase.setVal({
                                            id: t.props.client.hostId,
                                            path: "c/".concat(t.props.client.name, "/tat"),
                                            val: "".concat(r[0].name, ":fire")
                                        }))
                                    })), this.getQuestion();
                                    break;
                                case "zoom":
                                case "party":
                                    this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name, "/tat"),
                                        val: this.state.powerUp.name
                                    }), this.getQuestion();
                                    break;
                                case "hot":
                                    this.hotCounter = 3, this.getQuestion();
                                    break;
                                case "shield":
                                    this.shield = !0, this.getQuestion();
                                    break;
                                default:
                                    this.getQuestion()
                            }
                        }
                    }
                }, {
                    key: "targetPlayer",
                    value: function(t) {
                        if (t) {
                            var e = "rockets" === this.state.powerUp.name ? "rocket" : this.state.powerUp.name;
                            this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name, "/tat"),
                                val: "".concat(t.name, ":").concat(e)
                            })
                        }
                        var r = this.state.numTargets - 1;
                        r <= 0 ? this.getQuestion() : this.setState({
                            numTargets: r,
                            players: this.state.players.filter((function(e) {
                                return e !== t
                            }))
                        })
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        this.powerUpCd <= 0 ? (this.powerUpCd = 4, this.getPowerUp()) : this.getQuestion()
                    }
                }, {
                    key: "readQuestion",
                    value: (i = G(H().mark((function t() {
                        var e, r = this;
                        return H().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.isReading = !0, e = function(t, e, n) {
                                        var o = t;
                                        if ("`*`" === t.slice(0, 3) || t.includes("`~`")) return n();
                                        t.includes("`*`") && (o = t.slice(0, t.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: e
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, t.next = 6, new Promise((function(t) {
                                        return e(r.state.question.text, "qText", t)
                                    }));
                                case 6:
                                    return t.next = 8, new Promise((function(t) {
                                        return e(r.state.question.answers[0], "q1", t)
                                    }));
                                case 8:
                                    return t.next = 10, new Promise((function(t) {
                                        return e(r.state.question.answers[1], "q2", t)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, new Promise((function(t) {
                                        return e(r.state.question.answers[2], "q3", t)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16, new Promise((function(t) {
                                        return e(r.state.question.answers[3], "q4", t)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.client && "Racing" === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0] ? o.a.createElement("div", {
                            className: u.isMobile ? v.a.mBody : v.a.body
                        }, o.a.createElement(_.a, {
                            title: "Play Racing | Blooket",
                            desc: "Answer questions quickly to race against your opponents and use power-ups to help you get to the finish line first."
                        }), o.a.createElement(w.a, {
                            name: this.props.client.name,
                            rightText: "".concat(this.state.goalAmount - this.state.progress, " Left"),
                            showRead: "question" === this.state.phase,
                            readQuestion: this.readQuestion
                        }), o.a.createElement("div", {
                            className: this.state.isZoomed ? b.a.zoomedIn : null
                        }, "question" === this.state.phase ? o.a.createElement("div", {
                            className: b.a.questionContainer
                        }, o.a.createElement(x.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId
                        })) : "feedback" === this.state.phase ? o.a.createElement("div", {
                            className: b.a.questionContainer,
                            style: {
                                backgroundColor: "#f7f7f7"
                            }
                        }, o.a.createElement(k.a, {
                            incorrectTime: 3,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        })) : "powerup" === this.state.phase ? o.a.createElement("div", {
                            className: p()(v.a.regularBody, b.a.powerUpBody),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.isChosen ? this.usePowerUp : this.choosePowerUp
                        }, o.a.createElement("div", {
                            className: b.a.powerUpHeader
                        }, "Power-Up"), o.a.createElement("div", {
                            className: b.a.powerUpIconContainer
                        }, o.a.createElement("i", {
                            className: p()(this.state.isChosen ? this.state.powerUp.icon : this.state.powerUpDisplay.icon, b.a.powerUpIcon),
                            style: {
                                color: this.state.isChosen ? this.state.powerUp.color : this.state.powerUpDisplay.color
                            }
                        })), this.state.isChosen ? o.a.createElement("div", {
                            className: b.a.powerUpDesc
                        }, o.a.createElement("div", {
                            className: b.a.powerUpName
                        }, this.state.powerUp.title), this.state.powerUp.desc) : null, o.a.createElement("div", {
                            className: b.a.powerUpInstruct
                        }, "Click Anywhere To ".concat(this.state.isChosen ? "Use This" : "Choose A", " Power-Up"))) : "target" === this.state.phase ? o.a.createElement("div", {
                            className: v.a.regularBody,
                            style: {
                                backgroundColor: "#0bc2cf",
                                overflowY: "auto"
                            }
                        }, o.a.createElement("div", {
                            className: b.a.playerHeader
                        }, this.state.players.length > 0 ? "Choose ".concat(this.state.numTargets, " ").concat(1 === this.state.numTargets ? "Player" : "Players") : "No Players to Interact With"), this.state.players.length > 0 ? o.a.createElement("div", {
                            className: b.a.playerHolder
                        }, this.state.players.map((function(e) {
                            return o.a.createElement("div", {
                                className: b.a.playerContainer,
                                key: e.name,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.targetPlayer(e)
                                }
                            }, o.a.createElement(L.a, {
                                name: e.blook,
                                className: b.a.playerBlook
                            }), o.a.createElement("div", {
                                className: b.a.playerColumn
                            }, o.a.createElement("div", {
                                className: b.a.playerText
                            }, e.name), o.a.createElement("div", {
                                className: b.a.playerProgress
                            }, "".concat(t.state.goalAmount - e.progress, " Left"))))
                        }))) : o.a.createElement("div", {
                            className: b.a.noPlayers,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.targetPlayer(null)
                            }
                        }, "Next"), o.a.createElement("div", {
                            style: {
                                height: 30
                            }
                        })) : null, this.state.notifyIcon === S.freeze.icon ? o.a.createElement("div", {
                            className: p()(v.a.regularBody, b.a.freezeContainer)
                        }, o.a.createElement(I.a, {
                            count: u.isMobile ? 85 : 170
                        }), o.a.createElement("i", {
                            className: p()(S.freeze.icon, b.a.freezeIcon)
                        }), o.a.createElement("div", {
                            className: b.a.freezeHeader
                        }, "FROZEN"), o.a.createElement("div", {
                            className: b.a.freezeRow
                        }, o.a.createElement(L.a, {
                            name: this.state.notifyBlook,
                            className: b.a.freezeBlook
                        }), this.state.notifyText)) : null), this.state.notifyIcon && this.state.notifyIcon !== S.freeze.icon ? o.a.createElement("div", {
                            className: b.a.notifyContainer
                        }, o.a.createElement("div", {
                            className: b.a.notifyText
                        }, this.state.notifyText || o.a.createElement("i", {
                            className: this.state.notifyIcon
                        })), o.a.createElement("div", {
                            className: b.a.notifyRow
                        }, this.state.notifyBlook ? o.a.createElement(L.a, {
                            name: this.state.notifyBlook,
                            className: b.a.notifyBlook
                        }) : null, this.state.notifyBlook && this.state.notifyIcon && this.state.notifyText ? o.a.createElement("div", {
                            style: {
                                width: 10
                            }
                        }) : null, this.state.notifyIcon && this.state.notifyText ? o.a.createElement("i", {
                            className: p()(this.state.notifyIcon, b.a.notifyIcon)
                        }) : null)) : null, this.state.partyBlook ? o.a.createElement(P.a, {
                            blook: this.state.partyBlook
                        }) : null, this.state.isWaiting || this.state.showInstructions ? o.a.createElement(O.a, {
                            text: this.state.showInstructions ? "Your goal is to be the first to answer ".concat(this.state.goalAmount, " questions correctly!") : "Waiting For Race To Start",
                            loading: !this.state.showInstructions,
                            buttonOne: {
                                text: "OK!",
                                click: function() {
                                    return t.setState({
                                        showInstructions: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && F(e.prototype, r), n && F(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            X.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                racingResults: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    id: t.hosts.id,
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    racingResults: y,
                    deleteClient: d.a
                }, t)
            }))(Object(A.d)(X)))
        },
        "uS/B": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__progressText___Jhu1v-camelCase{font-size:28px;font-weight:700;margin-right:15px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                progressText: "styles__progressText___Jhu1v-camelCase"
            }
        }
    }
]);