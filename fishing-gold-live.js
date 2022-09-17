(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        "386b": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("17x9"),
                s = a.n(o),
                i = a("ANjH"),
                l = a("/MKj"),
                c = a("Ty5D"),
                u = a("H1WH"),
                f = a("wd/R"),
                _ = a.n(f),
                d = a("1F66"),
                p = a.n(d),
                h = a("ZRP+"),
                m = a("4HzQ"),
                y = a("TSYQ"),
                g = a.n(y),
                b = a("Xst1"),
                v = a.n(b),
                x = a("LCjO"),
                w = a.n(x),
                C = a("XTAU"),
                k = a("kQZX"),
                O = a("0oXL"),
                E = a("ca/f"),
                T = a("WTww"),
                j = a("+fLB"),
                S = a("E8Bj"),
                I = a("HbJ1"),
                N = a("+xn+"),
                z = a("VgyX"),
                F = a("mgm6"),
                B = a("74sb"),
                P = a("E5Gn");

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(a), !0).forEach((function(t) {
                        D(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : R(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function D(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function q(e) {
                return function(e) {
                    if (Array.isArray(e)) return H(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return H(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? H(e, t) : void 0
                }
            }

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function W() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                W = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var u = {};

                function f() {}

                function _() {}

                function d() {}
                var p = {};
                i(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    m = h && h(h(k([])));
                m && m !== t && a.call(m, r) && (p = m);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == L(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = d, i(y, "constructor", d), i(d, "constructor", _), _.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), w(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    w(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function U(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function X(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Q(e, t) {
                return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = K(e);
                    if (t) {
                        var r = K(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return J(this, a)
                }
            }

            function J(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return V(e)
            }

            function V(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function K(e) {
                return (K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && Q(e, t)
                }(l, e);
                var t, a, n, o, s, i = Y(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        muted: !!e.host && e.host.muted,
                        fish: [],
                        party: "",
                        isFrenzy: !1,
                        userToBlock: ""
                    }, t.here = !0, t.ok = !1, t.fishCounter = -1, t.getClients = t.getClients.bind(V(t)), t.goNext = t.goNext.bind(V(t)), t.changeMuted = t.changeMuted.bind(V(t)), t.blockUser = t.blockUser.bind(V(t)), t.audio = new Audio(P.a), t.audio.muted = t.state.muted, t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (o = W().mark((function e() {
                        var t, a, n = this;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.host && this.props.host.settings) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        n.audio.currentTime = 0, n.audio.play()
                                    }), !1), this.props.firebase.setStage({
                                        id: this.props.host.id,
                                        stage: "fish"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, a = 4, this.setState({
                                        timer: _.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        t -= 1, n.setState({
                                            timer: _.a.duration(t, "seconds").format("mm:ss")
                                        }), t <= 0 ? (n.getClients(!0), clearInterval(n.timerInterval)) : 0 === a ? (n.getClients(!1), a = 4) : a -= 1
                                    }), 1e3)) : this.clientsInterval = setInterval((function() {
                                        n.getClients(!1)
                                    }), 4e3);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function s(e) {
                                U(r, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                U(r, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        this.here = !1, clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearTimeout(this.frenzyTimeout), clearTimeout(this.partyTimeout), clearTimeout(this.shortFrenzyTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(a) {
                            var n = a || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var r = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    s = Object.entries(n).map((function(e) {
                                        var t = G(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            weight: n.w || 0,
                                            fish: n.f,
                                            isSpecial: n.s
                                        }
                                    })),
                                    i = [],
                                    l = "";
                                s.forEach((function(e) {
                                    if (e.fish) {
                                        if ("Lure" === e.fish.split(" ")[0]) i.push({
                                            lure: e.fish.split(" ")[1],
                                            name: e.name
                                        });
                                        else if ("Frenzy" === e.fish) {
                                            if (t.state.isFrenzy) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "act",
                                                val: "Frenzy"
                                            }), t.shortFrenzyTimeout = setTimeout((function() {
                                                t.props.firebase.removeVal(t.props.host.id, "act")
                                            }), 1e3), t.audio.playbackRate = 2, t.audio.volume = .5, t.setState({
                                                isFrenzy: !0
                                            }, (function() {
                                                clearTimeout(t.frenzyTimeout), t.frenzyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        isFrenzy: !1
                                                    }), t.audio.playbackRate = 1, t.audio.volume = .4
                                                }), 2e4)
                                            }))
                                        } else i.push({
                                            fish: e.fish,
                                            name: e.name
                                        }), e.isSpecial && (l = e.fish, t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/s")));
                                        t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/f"))
                                    }
                                })), l && (t.props.firebase.setVal({
                                    id: t.props.host.id,
                                    path: "act",
                                    val: l
                                }), t.setState({
                                    party: t.state.party || l
                                }, (function() {
                                    t.partyTimeout = setTimeout((function() {
                                        t.setState({
                                            party: ""
                                        }), t.props.firebase.removeVal(t.props.host.id, "act")
                                    }), 7100)
                                }))), i.forEach((function(e) {
                                    t.fishCounter += 1;
                                    var a = {
                                        name: e.fish,
                                        lure: e.lure,
                                        id: t.fishCounter,
                                        left: "".concat(Object(B.q)(41.5, 87.5), "%"),
                                        top: "".concat(Object(B.q)(100, 145), "%"),
                                        zIndex: Object(B.r)(2, 5),
                                        fisher: e.name
                                    };
                                    setTimeout((function() {
                                        t.here && t.setState({
                                            fish: [].concat(q(t.state.fish), [a])
                                        }, (function() {
                                            setTimeout((function() {
                                                if (t.here) {
                                                    var e = JSON.parse(JSON.stringify(t.state.fish));
                                                    e.splice(e.map((function(e) {
                                                        return e.id
                                                    })).indexOf(a.id), 1), t.setState({
                                                        fish: e
                                                    })
                                                }
                                            }), 3100)
                                        }))
                                    }), Object(B.r)(100, 4e3))
                                })), s.sort((function(e, t) {
                                    return t.weight - e.weight
                                }));
                                for (var c = 0; c < s.length; c++) s[c].place = c + 1, r && s[c].weight >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(q(s)) : t.setState({
                                    players: s
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var a = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                w: e.weight,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: a
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/fishing/final")
                            }))
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "blockUser",
                    value: function() {
                        var e = this.state.userToBlock,
                            t = JSON.parse(JSON.stringify(this.state.players)),
                            a = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            n = t.length; - 1 !== a && (n = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return A(A({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser(this.props.host.id, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? r.a.createElement("div", {
                            className: u.isMobile ? v.a.mBody : v.a.body
                        }, r.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(k.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(B.o)(this.props.host.settings.amount), " lbs"),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), r.a.createElement("div", {
                            className: v.a.hostRegularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, r.a.createElement("div", {
                            className: g()(w.a.background, D({}, w.a.frenzyBackground, this.state.isFrenzy))
                        }), r.a.createElement("div", {
                            className: g()(w.a.wave1, D({}, w.a.wave1Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(w.a.wave2, D({}, w.a.wave2Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(w.a.wave3, D({}, w.a.wave3Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(w.a.wave4, D({}, w.a.wave4Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement(p.a, {
                            data: this.state.players,
                            keyAccessor: function(e) {
                                return e.name
                            },
                            start: function(e) {
                                return {
                                    x: -60,
                                    y: 12.5 * (e.place - 1)
                                }
                            },
                            enter: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 1e3,
                                        ease: h.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: h.a
                                    }
                                }
                            },
                            leave: function() {
                                return {
                                    x: [-60],
                                    timing: 1e3
                                }
                            }
                        }, (function(t) {
                            return r.a.createElement("div", {
                                className: g()(w.a.left, w.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    n = t.data,
                                    o = t.state,
                                    s = o.x,
                                    i = o.y;
                                return r.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === n.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(i, "vh)"),
                                        backgroundColor: e.state.isFrenzy ? n.place % 3 == 0 ? "#9b97d6" : n.place % 3 == 1 ? "#9ccfe7" : "#f5a9cb" : null
                                    },
                                    className: w.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: n.name
                                        })
                                    }
                                }, r.a.createElement("div", {
                                    className: w.a.standingInside
                                }, r.a.createElement(m.Textfit, {
                                    className: w.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.D)("4vw")
                                }, n.place), r.a.createElement("div", {
                                    className: w.a.superPlaceText
                                }, Object(B.h)(n.place)), r.a.createElement(O.a, {
                                    name: n.blook,
                                    className: w.a.blookBox
                                }), r.a.createElement(m.Textfit, {
                                    className: w.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.D)("3vw")
                                }, n.name), r.a.createElement(m.Textfit, {
                                    className: w.a.weightText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.D)("3vw")
                                }, "".concat(n.weight < 1e4 ? Object(B.o)(n.weight) : Object(B.v)(n.weight), " lbs"))))
                            })))
                        })), this.state.fish.map((function(e) {
                            return e.lure ? r.a.createElement("div", {
                                key: e.id,
                                className: w.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, r.a.createElement("div", {
                                className: w.a.lureUpgrade
                            }, r.a.createElement("div", {
                                className: w.a.lureUpgradeInside
                            }, r.a.createElement("img", {
                                src: F.b[e.lure],
                                alt: "Lure",
                                className: w.a.lureUpgradeImg,
                                draggable: !1
                            }))), r.a.createElement("div", {
                                className: w.a.jumpingText
                            }, e.fisher)) : r.a.createElement("div", {
                                key: e.id,
                                className: w.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, r.a.createElement(O.a, {
                                name: e.name,
                                className: w.a.jumpingFish
                            }), r.a.createElement("div", {
                                className: w.a.jumpingText
                            }, e.fisher))
                        }))), this.state.isFrenzy ? r.a.createElement("div", {
                            className: w.a.frenzyText
                        }, "Frenzy!") : null, this.state.party ? r.a.createElement(T.a, {
                            fish: this.state.party
                        }) : null, this.state.userToBlock ? r.a.createElement(E.a, {
                            text: "Remove ".concat(this.state.userToBlock, " from the game?"),
                            buttonOne: {
                                text: "Yes",
                                click: this.blockUser,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        userToBlock: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && X(t.prototype, a), n && X(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            Z.propTypes = {
                history: s.a.object,
                firebase: s.a.object,
                host: s.a.object,
                updateStandings: s.a.func,
                deleteHost: s.a.func,
                setMuted: s.a.func.isRequired
            };
            t.a = Object(S.c)(Object(c.g)(Object(l.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(i.b)({
                    updateStandings: N.b,
                    deleteHost: z.d,
                    setMuted: I.a
                }, e)
            }))(Object(j.d)(Z))))
        },
        "5k1d": function(e, t, a) {
            var n = a("C+1Y");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "6OEu": function(e, t, a) {
            var n = a("ff2+");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "8zml": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("VgyX"),
                f = a("Xst1"),
                _ = a.n(f),
                d = a("ZVoO"),
                p = a("XTAU"),
                h = a("74sb"),
                m = a("+fLB"),
                y = a("qnYv");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function x(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function C(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return k(this, a)
                }
            }

            function k(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && w(e, t)
                }(s, e);
                var t, a, n, o = C(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var a = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(n) {
                                        var r = n || {};
                                        Object.entries(r).forEach((function(e) {
                                            var t = b(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                o = {};
                                            if (r.i)
                                                if (Array.isArray(r.i))
                                                    for (var s = 0; s < r.i.length; s++) {
                                                        var i = r.i[s];
                                                        i && (o[s] = i)
                                                    } else o = r.i;
                                                else o = {};
                                            var l = {};
                                            if (r.c)
                                                if (Array.isArray(r.c))
                                                    for (var c = 0; c < r.c.length; c++) {
                                                        var u = r.c[c];
                                                        u && (l[c] = u)
                                                    } else l = r.c;
                                                else l = {};
                                            a[n] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && y.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        weight: isNaN(e.weight) ? 0 : Math.round(Number(e.weight)),
                                                        corrects: a[e.name] ? a[e.name].corrects : {},
                                                        incorrects: a[e.name] ? a[e.name].incorrects : {}
                                                    }
                                                })),
                                                settings: t.settings,
                                                set: t.hostName,
                                                setId: t.setId
                                            }).then((function(t) {
                                                e.setState({
                                                    historyId: t.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(e) {
                                                console.error(e)
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
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? r.a.createElement("div", {
                            className: _.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                background: "linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)"
                            }
                        }, r.a.createElement(p.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? r.a.createElement(d.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(h.o)(e.weight), " lbs")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "fish"
                        }) : null) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && x(t.prototype, a), n && x(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            E.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: u.d
                }, e)
            }))(Object(m.d)(E)))
        },
        B5MT: function(e, t, a) {
            var n = a("xlKT");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        BjUn: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___1cDcE-camelCase{position:absolute;height:90%;top:0;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;z-index:4}.styles__invisibleScrollbar___1dCcL-camelCase::-webkit-scrollbar{display:none}.styles__standingContainer___37vkB-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;background-color:#ff751a;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___37vkB-camelCase:hover{opacity:.4}.styles__standingInside___Auz7o-camelCase{border-radius:7px;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___3xe6w-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;height:7vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___3xe6w-camelCase,.styles__superPlaceText___2CFmQ-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2CFmQ-camelCase{text-align:left;width:1.4vw;font-size:1.2vw;margin-top:4px;margin-left:1px}.styles__blookBox___EgEoF-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___37wxQ-camelCase{font-weight:700;padding:1.5vh 1vw;text-align:left;flex-grow:1}.styles__nameText___37wxQ-camelCase,.styles__weightText___1ZyYA-camelCase{color:#fff;line-height:5vh;font-family:Nunito,sans-serif}.styles__weightText___1ZyYA-camelCase{width:6.5vw;margin:1.5vh 1vw;text-align:right}.styles__background___3kTOw-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__frenzyBackground___nu6-P-camelCase{background-color:#cdedfd;background:linear-gradient(to bottom right,#ffffc2 15%,#f5a9cb 40%,#9ccfe7 65%,#9b97d6 90%)}.styles__wave1___329JT-camelCase,.styles__wave2___2IPMq-camelCase,.styles__wave3___1p_te-camelCase,.styles__wave4___26N24-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___329JT-camelCase{z-index:2;height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;-webkit-animation:styles__anim-h-wave___fGQ69-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.75s infinite alternate;animation:styles__anim-h-wave___fGQ69-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.75s infinite alternate}.styles__wave2___2IPMq-camelCase{z-index:3;height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___fGQ69-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.5s infinite alternate;animation:styles__anim-h-wave___fGQ69-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.5s infinite alternate}.styles__wave3___1p_te-camelCase{z-index:4;height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___fGQ69-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.25s infinite alternate;animation:styles__anim-h-wave___fGQ69-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.25s infinite alternate}.styles__wave4___26N24-camelCase{z-index:5;height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___fGQ69-camelCase 3s linear infinite,styles__anim-v-wave___2Dv_p-camelCase 2s infinite alternate;animation:styles__anim-h-wave___fGQ69-camelCase 3s linear infinite,styles__anim-v-wave___2Dv_p-camelCase 2s infinite alternate}@-webkit-keyframes styles__anim-h-wave___fGQ69-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-h-wave___fGQ69-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@-webkit-keyframes styles__anim-v-wave___2Dv_p-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}@keyframes styles__anim-v-wave___2Dv_p-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}.styles__wave1Frenzy___16jD4-camelCase{background:radial-gradient(circle,transparent 40%,#9b97d6 0,#9ccfe7 65%);background-position:center -140px}.styles__wave2Frenzy___3nvcU-camelCase{background:radial-gradient(circle,transparent 40%,#9ccfe7 0,#f5a9cb 65%);background-position:center -140px}.styles__wave3Frenzy___5MCbp-camelCase{background:radial-gradient(circle,transparent 40%,#f5a9cb 0,#ffffc2 65%);background-position:center -140px}.styles__wave4Frenzy___3ltGe-camelCase{background:radial-gradient(circle,transparent 40%,#ffffc2 0,#9ccfe7 65%);background-position:center -140px}.styles__frenzyText___1tFox-camelCase{font-family:Titan One,sans-serif;font-size:7.5vw;text-shadow:2px 2px 8px grey;color:#fff;position:absolute;top:50%;left:0;pointer-events:none;z-index:40;-webkit-animation:styles__frenzyText___1tFox-camelCase 2s linear forwards;animation:styles__frenzyText___1tFox-camelCase 2s linear forwards}@-webkit-keyframes styles__frenzyText___1tFox-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}@keyframes styles__frenzyText___1tFox-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}.styles__jumpingContainer___1c2TE-camelCase{position:absolute;top:calc(100% + 55px);left:70%;width:10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center;-webkit-animation:styles__jump___iXRNw-camelCase 3s ease-in-out;animation:styles__jump___iXRNw-camelCase 3s ease-in-out}@-webkit-keyframes styles__jump___iXRNw-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-95vh)}to{transform:translateY(0)}}@keyframes styles__jump___iXRNw-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-95vh)}to{transform:translateY(0)}}.styles__jumpingFish___1TIAB-camelCase{width:100%}.styles__jumpingText___22NEG-camelCase{color:#fff;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;font-size:1.25vw;font-weight:700;margin-top:5px}.styles__lureUpgrade___WGbsY-camelCase{width:10vw;height:10vw;padding:7px;background-color:#369;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%}.styles__lureUpgrade___WGbsY-camelCase,.styles__lureUpgradeInside___2BBqk-camelCase{box-sizing:border-box;display:flex;justify-content:center;align-items:center}.styles__lureUpgradeInside___2BBqk-camelCase{border:5px solid #fff;border-radius:50%;width:100%;height:100%}.styles__lureUpgradeImg___OUWYr-camelCase{width:75%}", ""]), t.locals = {
                left: "styles__left___1cDcE-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___1dCcL-camelCase",
                standingContainer: "styles__standingContainer___37vkB-camelCase",
                standingInside: "styles__standingInside___Auz7o-camelCase",
                placeText: "styles__placeText___3xe6w-camelCase",
                superPlaceText: "styles__superPlaceText___2CFmQ-camelCase",
                blookBox: "styles__blookBox___EgEoF-camelCase",
                nameText: "styles__nameText___37wxQ-camelCase",
                weightText: "styles__weightText___1ZyYA-camelCase",
                background: "styles__background___3kTOw-camelCase",
                frenzyBackground: "styles__frenzyBackground___nu6-P-camelCase",
                wave1: "styles__wave1___329JT-camelCase",
                wave2: "styles__wave2___2IPMq-camelCase",
                wave3: "styles__wave3___1p_te-camelCase",
                wave4: "styles__wave4___26N24-camelCase",
                "anim-h-wave": "styles__anim-h-wave___fGQ69-camelCase",
                "anim-v-wave": "styles__anim-v-wave___2Dv_p-camelCase",
                wave1Frenzy: "styles__wave1Frenzy___16jD4-camelCase",
                wave2Frenzy: "styles__wave2Frenzy___3nvcU-camelCase",
                wave3Frenzy: "styles__wave3Frenzy___5MCbp-camelCase",
                wave4Frenzy: "styles__wave4Frenzy___3ltGe-camelCase",
                frenzyText: "styles__frenzyText___1tFox-camelCase",
                jumpingContainer: "styles__jumpingContainer___1c2TE-camelCase",
                jump: "styles__jump___iXRNw-camelCase",
                jumpingFish: "styles__jumpingFish___1TIAB-camelCase",
                jumpingText: "styles__jumpingText___22NEG-camelCase",
                lureUpgrade: "styles__lureUpgrade___WGbsY-camelCase",
                lureUpgradeInside: "styles__lureUpgradeInside___2BBqk-camelCase",
                lureUpgradeImg: "styles__lureUpgradeImg___OUWYr-camelCase"
            }
        },
        "C+1Y": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__feedbackContainer___1fuws-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__header___2W8zd-camelCase{font-size:48px;color:#fff;text-align:center;position:absolute;top:10%;left:50%;transform:translateX(-50%);width:640px;height:110px;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__header___2W8zd-camelCase,.styles__headerInside___x--63-camelCase{background-color:#d52423}.styles__headerInside___x--63-camelCase{border:5px solid #ffd329;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__header2___1lYXH-camelCase{font-size:44px;left:50%;width:640px;height:110px;transform:translateX(-50%);background-color:#d52423;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chooseText___2ck0h-camelCase,.styles__header2___1lYXH-camelCase{color:#fff;text-align:center;position:absolute;top:10%}.styles__chooseText___2ck0h-camelCase{left:15%;width:70%;font-family:Titan One,sans-serif;font-size:50px;text-shadow:2px 2px 8px grey}.styles__choiceContainer1___mCdGP-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:200px;position:absolute;left:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice1___27uim-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice1___27uim-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer2___1ypO_-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:200px;position:absolute;right:calc(50% - 100px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice2___1aP2D-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice2___1aP2D-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer3___36E0a-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:200px;position:absolute;right:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice3___2L6Q--camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice3___2L6Q--camelCase:hover{transform:scale(1.03)}.styles__chest___2oDth-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2)}.styles__choiceImage___10bG7-camelCase{height:88px;width:76.55px}.styles__goldImage___1EcO9-camelCase{height:78px}.styles__choiceText___3GXgq-camelCase{font-family:Nunito,sans-serif;font-size:26px;margin-top:10px;text-align:center;color:#fff;font-weight:700}.styles__noSelect___1orhQ-camelCase{transform:scale(.7);opacity:.6}.styles__fadeOut___3JYXX-camelCase{opacity:1;-webkit-animation:styles__fadeOut___3JYXX-camelCase .2s linear 0s forwards;animation:styles__fadeOut___3JYXX-camelCase .2s linear 0s forwards}@-webkit-keyframes styles__fadeOut___3JYXX-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___3JYXX-camelCase{0%{opacity:1}to{opacity:0}}.styles__fadeIn___2Qenu-camelCase{opacity:0;-webkit-animation:styles__fadeIn___2Qenu-camelCase .2s linear 0s forwards;animation:styles__fadeIn___2Qenu-camelCase .2s linear 0s forwards}.styles__playerWrapper___2T5wi-camelCase{flex-flow:column;width:100%;height:100%;position:absolute;top:0;left:0;overflow-x:hidden}.styles__playerHolder___bHsY0-camelCase,.styles__playerWrapper___2T5wi-camelCase{display:flex;-webkit-animation:styles__fadeIn___2Qenu-camelCase .2s;animation:styles__fadeIn___2Qenu-camelCase .2s}.styles__playerHolder___bHsY0-camelCase{flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto}@-webkit-keyframes styles__fadeIn___2Qenu-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2Qenu-camelCase{0%{opacity:0}to{opacity:1}}.styles__playerHeader___1bsCr-camelCase{font-size:38px;margin:30px auto 0;position:relative;width:650px;height:110px;box-shadow:7px 7px 0 rgba(0,0,0,.2)}.styles__noPlayers___1Wz34-camelCase,.styles__playerHeader___1bsCr-camelCase{color:#fff;background-color:#d52423;border-radius:5px;text-align:center;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__noPlayers___1Wz34-camelCase{width:220px;height:80px;line-height:60px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;cursor:pointer;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__noPlayers___1Wz34-camelCase:hover{transform:scale(.95)}.styles__playerInside___3dEQj-camelCase{border:5px solid #ffd329;width:100%;flex-direction:row}.styles__playerContainer___3zoyU-camelCase,.styles__playerInside___3dEQj-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___3zoyU-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___3zoyU-camelCase:focus,.styles__playerContainer___3zoyU-camelCase:hover{transform:scale(.97)}.styles__playerBlook___2Ozfx-camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___38AOO-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___fC_KC-camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__goldRow___3wqD_-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerGold___1CzJc-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__goldIcon___1fk0M-camelCase{height:50%;width:auto;margin:auto 5px auto 10px}@media only screen and (max-width:800px){.styles__choiceContainer1___mCdGP-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:125px;left:calc(50% - 162.5px)}.styles__choice1___27uim-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer2___1ypO_-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:125px;right:calc(50% - 162.5px)}.styles__choice2___1aP2D-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer3___36E0a-camelCase{height:100px;top:calc(50% + 118px)}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:125px;right:calc(50% - 62.5px)}.styles__choice3___2L6Q--camelCase{height:125px;top:calc(50% + 90px)}.styles__header___2W8zd-camelCase{width:500px;font-size:34px;line-height:36px}.styles__choiceText___3GXgq-camelCase{font-size:20px;margin-top:10px}.styles__choiceImage___10bG7-camelCase{height:68px;width:59.15px}.styles__goldImage___1EcO9-camelCase{height:58px}.styles__playerColumn___38AOO-camelCase{width:calc(100% - 70px)}.styles__header2___1lYXH-camelCase,.styles__playerHeader___1bsCr-camelCase{font-size:34px;line-height:36px;width:500px;height:130px}}@media only screen and (max-width:600px){.styles__header___2W8zd-camelCase,.styles__header2___1lYXH-camelCase,.styles__playerHeader___1bsCr-camelCase{width:300px}.styles__playerContainer___3zoyU-camelCase{width:100%}}", ""]), t.locals = {
                feedbackContainer: "styles__feedbackContainer___1fuws-camelCase",
                header: "styles__header___2W8zd-camelCase",
                headerInside: "styles__headerInside___x--63-camelCase",
                header2: "styles__header2___1lYXH-camelCase",
                chooseText: "styles__chooseText___2ck0h-camelCase",
                choiceContainer1: "styles__choiceContainer1___mCdGP-camelCase",
                choice1: "styles__choice1___27uim-camelCase",
                choiceContainer2: "styles__choiceContainer2___1ypO_-camelCase",
                choice2: "styles__choice2___1aP2D-camelCase",
                choiceContainer3: "styles__choiceContainer3___36E0a-camelCase",
                choice3: "styles__choice3___2L6Q--camelCase",
                chest: "styles__chest___2oDth-camelCase",
                choiceImage: "styles__choiceImage___10bG7-camelCase",
                goldImage: "styles__goldImage___1EcO9-camelCase",
                choiceText: "styles__choiceText___3GXgq-camelCase",
                noSelect: "styles__noSelect___1orhQ-camelCase",
                fadeOut: "styles__fadeOut___3JYXX-camelCase",
                fadeIn: "styles__fadeIn___2Qenu-camelCase",
                playerWrapper: "styles__playerWrapper___2T5wi-camelCase",
                playerHolder: "styles__playerHolder___bHsY0-camelCase",
                playerHeader: "styles__playerHeader___1bsCr-camelCase",
                noPlayers: "styles__noPlayers___1Wz34-camelCase",
                playerInside: "styles__playerInside___3dEQj-camelCase",
                playerContainer: "styles__playerContainer___3zoyU-camelCase",
                playerBlook: "styles__playerBlook___2Ozfx-camelCase",
                playerColumn: "styles__playerColumn___38AOO-camelCase",
                playerText: "styles__playerText___fC_KC-camelCase",
                goldRow: "styles__goldRow___3wqD_-camelCase",
                playerGold: "styles__playerGold___1CzJc-camelCase",
                goldIcon: "styles__goldIcon___1fk0M-camelCase"
            }
        },
        D4er: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("TSYQ"),
                f = a.n(u),
                _ = a("wd/R"),
                d = a.n(_),
                p = a("cpGi"),
                h = a("JeI0"),
                m = a.n(h),
                y = a("H1WH"),
                g = a("E8Bj"),
                b = a("XTAU"),
                v = a("ca/f"),
                x = a("B5MT"),
                w = a.n(x),
                C = a("Xst1"),
                k = a.n(C),
                O = a("74sb"),
                E = a("qnYv"),
                T = a("i4/Q"),
                j = a("lmLo");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || L(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var u = {};

                function f() {}

                function _() {}

                function d() {}
                var p = {};
                i(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    m = h && h(h(k([])));
                m && m !== t && a.call(m, r) && (p = m);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == S(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = d, i(y, "constructor", d), i(d, "constructor", _), _.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), w(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    w(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function z(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(a), !0).forEach((function(t) {
                        B(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : z(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function B(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function P(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || L(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? R(e, t) : void 0
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function A(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function D(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            A(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            A(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function q(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function G(e, t) {
                return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function M(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = U(e);
                    if (t) {
                        var r = U(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return H(this, a)
                }
            }

            function H(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return W(e)
            }

            function W(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && G(e, t)
                }(l, e);
                var t, a, n, o, s, i = M(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        allFavorites: [],
                        favorites: [],
                        unfavoriting: !1,
                        folders: {},
                        loading: !1,
                        noFolder: !1,
                        creatingFolder: !1,
                        editingFolder: !1,
                        folderName: "",
                        oldFolderName: "",
                        folderColor: "#1f77b4",
                        folderError: "",
                        deleteFolder: "",
                        inFolder: !1,
                        searchInput: "",
                        user: null
                    }, t.loading = !1, t.here = !0, t.onUnfavorite = t.onUnfavorite.bind(W(t)), t.onHost = t.onHost.bind(W(t)), t.onSolo = t.onSolo.bind(W(t)), t.getIsPlus = t.getIsPlus.bind(W(t)), t.setDisplay = t.setDisplay.bind(W(t)), t.openFolder = t.openFolder.bind(W(t)), t.newFolder = t.newFolder.bind(W(t)), t.createFolder = t.createFolder.bind(W(t)), t.editFolder = t.editFolder.bind(W(t)), t.addToFolder = t.addToFolder.bind(W(t)), t.removeFromFolder = t.removeFromFolder.bind(W(t)), t.deleteFolder = t.deleteFolder.bind(W(t)), t.shouldShowFolder = t.shouldShowFolder.bind(W(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (s = D(N().mark((function e() {
                        var t, a = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    this.setState({
                                        user: t
                                    }), E.a.get("/api/users/favoriteGames").then((function(e) {
                                        var t = P(e.data.games).map((function(e) {
                                            return F(F({}, e), {}, {
                                                questions: e.questions || []
                                            })
                                        }));
                                        t.sort((function(e, t) {
                                            return t.playCount - e.playCount
                                        }));
                                        var n = P(t),
                                            r = F({}, e.data.folders),
                                            o = t.map((function(e) {
                                                return e._id
                                            }));
                                        Object.values(r).forEach((function(e) {
                                            e.sets.forEach((function(e) {
                                                var a = o.indexOf(e); - 1 !== a && (t.splice(a, 1), o.splice(a, 1))
                                            }))
                                        })), a.setState({
                                            favorites: t,
                                            allFavorites: n,
                                            folders: r,
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        console.error(e)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.loading = !0, this.here = !1
                    }
                }, {
                    key: "onUnfavorite",
                    value: function(e) {
                        var t = this;
                        this.loading || (this.loading = !0, this.setState({
                            unfavoriting: !0
                        }), E.a.put("/api/users/updatefavorites", {
                            id: e,
                            isUnfavoriting: !0
                        }).then((function() {
                            if (t.here) {
                                var a = P(t.state.favorites.map((function(e) {
                                        return e._id
                                    }))).indexOf(e),
                                    n = P(t.state.favorites);
                                n.splice(a, 1), t.setState({
                                    favorites: n,
                                    unfavoriting: !1
                                }, (function() {
                                    t.loading = !1
                                }))
                            }
                        })).catch((function(e) {
                            console.error(e), t.setState({
                                unfavoriting: !1
                            }), t.loading = !1
                        })))
                    }
                }, {
                    key: "onHost",
                    value: function(e) {
                        this.loading || (this.loading = !0, window.open("/host?id=".concat(e), "_blank").focus(), window.location.reload())
                    }
                }, {
                    key: "onSolo",
                    value: function(e) {
                        this.loading || (this.loading = !0, window && (window.open("/solo?id=".concat(e), "_blank").focus(), window.location.reload()))
                    }
                }, {
                    key: "getIsPlus",
                    value: function(e) {
                        var t = this;
                        E.a.put("/api/users/plan").then((function(a) {
                            t.here && (t.gotPlus = !0, "Starter" === a.data.plan ? t.plus = !1 : t.plus = !0, e())
                        })).catch((function(a) {
                            t.here && (console.error(a), t.loading = !1, t.setState({
                                noFolder: !0
                            }, e))
                        }))
                    }
                }, {
                    key: "setDisplay",
                    value: function(e) {
                        var t = F({}, e),
                            a = this.state.allFavorites.map((function(e) {
                                return e._id
                            })),
                            n = P(this.state.allFavorites);
                        Object.values(t).forEach((function(e) {
                            e.sets.forEach((function(e) {
                                var t = a.indexOf(e); - 1 !== t && (n.splice(t, 1), a.splice(t, 1))
                            }))
                        })), this.setState({
                            favorites: n,
                            folders: t,
                            inFolder: !1
                        })
                    }
                }, {
                    key: "openFolder",
                    value: function(e, t) {
                        var a = this,
                            n = t.sets,
                            r = this.state.allFavorites.filter((function(e) {
                                return n.includes(e._id)
                            }));
                        r.sort((function(e, t) {
                            return t.playCount - e.playCount
                        })), setTimeout((function() {
                            a.state.editingFolder || a.state.deleteFolder || a.setState({
                                favorites: r,
                                folderName: e,
                                folderColor: t.color,
                                inFolder: !0,
                                searchInput: e.toLowerCase().includes(a.state.searchInput.toLowerCase()) ? "" : a.state.searchInput
                            })
                        }))
                    }
                }, {
                    key: "newFolder",
                    value: (o = D(N().mark((function e() {
                        var t = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.loading = !0, this.gotPlus) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, new Promise((function(e) {
                                        return t.getIsPlus(e)
                                    }));
                                case 6:
                                    this.plus ? this.setState({
                                        creatingFolder: !0,
                                        folderName: "",
                                        folderColor: "#1f77b4"
                                    }) : this.setState({
                                        noFolder: !0
                                    }), this.loading = !1;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "createFolder",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                folderError: "You need a folder name."
                            });
                            this.setState({
                                loading: !0
                            }), E.a.put("/api/users/favorite-folders/new", {
                                folderName: this.state.folderName,
                                folderColor: this.state.folderColor
                            }).then((function(t) {
                                e.here && (t.data.success ? e.setState({
                                    folders: t.data.user.favoriteFolders,
                                    creatingFolder: !1,
                                    loading: !1
                                }) : e.setState({
                                    folderError: t.data.msg,
                                    loading: !1
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (console.error(t), e.loading = !1, e.setState({
                                    creatingFolder: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "editFolder",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                folderError: "You need a folder name."
                            });
                            this.setState({
                                loading: !0
                            }), E.a.put("/api/users/favorite-folders/edit", {
                                oldFolderName: this.state.oldFolderName,
                                folderName: this.state.folderName,
                                folderColor: this.state.folderColor
                            }).then((function(t) {
                                e.here && (t.data.success ? e.setState({
                                    folders: t.data.user.favoriteFolders,
                                    editingFolder: !1,
                                    loading: !1
                                }) : e.setState({
                                    folderError: t.data.msg,
                                    loading: !1
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (console.error(t), e.loading = !1, e.setState({
                                    editingFolder: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "addToFolder",
                    value: function() {
                        var e = this;
                        this.loading || (this.loading = !0, E.a.put("/api/users/favorite-folders/addsets", {
                            folderName: this.state.moveLocation,
                            sets: [this.state.movingFavorite._id]
                        }).then((function(t) {
                            if (e.here) {
                                var a = t.data || e.state.folders;
                                e.setDisplay(a), e.setState({
                                    movingFavorite: ""
                                }), e.loading = !1
                            }
                        })).catch((function(t) {
                            e.here && (console.error(t), e.loading = !1, e.setState({
                                movingFavorite: ""
                            }))
                        })))
                    }
                }, {
                    key: "removeFromFolder",
                    value: function(e) {
                        var t = this;
                        this.loading || (this.loading = !0, E.a.put("/api/users/favorite-folders/removeset", {
                            folderName: this.state.folderName,
                            setId: e
                        }).then((function(a) {
                            if (t.here) {
                                var n = a.data || t.state.folders,
                                    r = JSON.parse(JSON.stringify(t.state.favorites)),
                                    o = r.map((function(e) {
                                        return e._id
                                    })).indexOf(e); - 1 !== o && r.splice(o, 1), t.setState({
                                    folders: n,
                                    favorites: r
                                }), t.loading = !1
                            }
                        })).catch((function(e) {
                            t.here && (console.error(e), t.loading = !1)
                        })))
                    }
                }, {
                    key: "deleteFolder",
                    value: function() {
                        var e = this;
                        this.loading || (this.loading = !0, this.setState({
                            loading: !0
                        }), E.a.put("/api/users/favorite-folders/delete", {
                            folderName: this.state.deleteFolder
                        }).then((function(t) {
                            if (e.here) {
                                var a = t.data || e.state.folders;
                                e.setDisplay(a), e.setState({
                                    deleteFolder: "",
                                    loading: !1
                                }), e.loading = !1
                            }
                        })).catch((function(t) {
                            e.here && (console.error(t), e.loading = !1, e.setState({
                                deleteFolder: "",
                                loading: !1
                            }))
                        })))
                    }
                }, {
                    key: "shouldShowFolder",
                    value: function(e, t) {
                        if (e.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                        for (var a = t.sets, n = this.state.allFavorites.filter((function(e) {
                                return a.includes(e._id)
                            })), r = 0; r < n.length; r++)
                            if (n[r].title.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: y.isMobile ? k.a.mBody : k.a.body
                        }, r.a.createElement(b.a, {
                            title: "Favorites | Blooket",
                            desc: "Manage your favorite Blooket sets."
                        }), r.a.createElement(T.a, {
                            user: this.state.user,
                            page: "Favorites",
                            topContent: this.state.ready && (this.state.favorites.length > 0 || Object.keys(this.state.folders).length > 0) ? r.a.createElement(r.a.Fragment, null, this.state.inFolder ? null : r.a.createElement("div", {
                                className: w.a.topFolderButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.newFolder
                            }, r.a.createElement("i", {
                                className: f()("fas fa-folder-plus", w.a.topFolderIcon)
                            })), r.a.createElement("div", {
                                className: w.a.searchBar
                            }, r.a.createElement("i", {
                                className: f()("fas fa-search", w.a.searchIcon)
                            }), r.a.createElement("input", {
                                className: w.a.searchInput,
                                placeholder: "Search your favorites...",
                                onChange: function(t) {
                                    return e.setState({
                                        searchInput: t.target.value
                                    })
                                },
                                value: this.state.searchInput,
                                type: "text"
                            }))) : null
                        }), r.a.createElement("div", {
                            className: k.a.profileBody
                        }, r.a.createElement("div", {
                            className: w.a.header
                        }, "Favorites"), 0 === this.state.allFavorites.length && this.state.ready ? r.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, r.a.createElement("div", {
                            className: w.a.nothingContainer
                        }, r.a.createElement("div", {
                            className: w.a.nothingHeader
                        }, "You don't have any favorites :("), r.a.createElement("div", {
                            className: w.a.nothingButtonsRow
                        }, r.a.createElement(j.a, {
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.props.history.push("/discover")
                            },
                            outsideClass: w.a.nothingButton
                        }, r.a.createElement("div", {
                            className: w.a.nothingButtonInside
                        }, r.a.createElement("i", {
                            className: f()("fas fa-compass", w.a.nothingIcon)
                        }), "Discover Favorites"))))) : null, this.state.allFavorites.length > 0 ? r.a.createElement("div", {
                            className: w.a.folderHolder
                        }, this.state.inFolder ? r.a.createElement(j.a, {
                            outsideClass: w.a.folderButton,
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.setDisplay(e.state.folders)
                            }
                        }, r.a.createElement("div", {
                            className: w.a.folderButtonInside,
                            style: {
                                minWidth: 0
                            }
                        }, r.a.createElement("i", {
                            className: f()("fas fa-reply", w.a.folderButtonIcon)
                        }), "Back")) : Object.entries(this.state.folders).map((function(t) {
                            var a = I(t, 2),
                                n = a[0],
                                o = a[1];
                            return e.shouldShowFolder(n, o) ? r.a.createElement(j.a, {
                                outsideClass: w.a.folderButton,
                                color: o.color,
                                key: n,
                                onClick: function() {
                                    return e.openFolder(n, o)
                                }
                            }, r.a.createElement("div", {
                                className: w.a.folderButtonInside
                            }, r.a.createElement("i", {
                                className: f()("fas fa-folder", w.a.folderButtonIcon)
                            }), n, r.a.createElement("div", {
                                className: w.a.folderButtonDropdown,
                                role: "button",
                                tabIndex: 0
                            }, r.a.createElement("i", {
                                className: f()("fas fa-ellipsis-v", w.a.folderButtonDropdownIcon)
                            }), r.a.createElement("div", {
                                className: w.a.folderButtonDropdownMenu
                            }, r.a.createElement("div", {
                                className: w.a.folderButtonDropdownOption,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingFolder: !0,
                                        folderName: n,
                                        folderColor: o.color,
                                        oldFolderName: n
                                    })
                                }
                            }, r.a.createElement("i", {
                                className: f()("fas fa-pencil-alt", w.a.folderButtonDropdownOptionIcon)
                            }), "Edit"), r.a.createElement("div", {
                                className: w.a.folderButtonDropdownOption,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteFolder: n
                                    })
                                }
                            }, r.a.createElement("i", {
                                className: f()("fas fa-trash-alt", w.a.folderButtonDropdownOptionIcon)
                            }), "Delete"))))) : null
                        }))) : null, r.a.createElement("div", {
                            className: w.a.container
                        }, this.state.favorites.filter((function(t) {
                            return t.title.toLowerCase().includes(e.state.searchInput.toLowerCase())
                        })).map((function(t) {
                            return r.a.createElement("div", {
                                key: t._id,
                                className: w.a.setContainer
                            }, t.coverImage ? r.a.createElement("div", {
                                className: w.a.setImageFiller
                            }, r.a.createElement(m.a, {
                                height: 180
                            }, r.a.createElement("img", {
                                src: Object(O.g)(t.coverImage.url),
                                alt: "Cover",
                                className: w.a.coverImage,
                                draggable: !1
                            }))) : r.a.createElement("div", {
                                className: w.a.setFillerContainer
                            }, r.a.createElement("div", {
                                className: w.a.setFillerText
                            }, "Blooket")), e.state.inFolder ? r.a.createElement("div", {
                                "data-tip": "Remove from Folder",
                                className: w.a.removeFromFolder,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.removeFromFolder(t._id)
                                }
                            }, r.a.createElement("i", {
                                className: "fas fa-folder-minus"
                            })) : null, r.a.createElement("div", {
                                className: w.a.setQuestionsContainer
                            }, r.a.createElement("div", {
                                className: w.a.setQuestionsText
                            }, "".concat(Object(O.o)(t.questions.length), " ").concat(1 === t.questions.length ? "Question" : "Questions"))), r.a.createElement("div", {
                                className: w.a.setHeader
                            }, t.title), r.a.createElement("div", {
                                className: w.a.setSpacer
                            }), r.a.createElement("div", {
                                className: w.a.setPlays
                            }, "".concat(Object(O.o)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays")), r.a.createElement("div", {
                                className: w.a.setLastEdit
                            }, "Edited ".concat(d()(t.date).fromNow())), r.a.createElement("div", {
                                className: w.a.setHorizontalDivider
                            }), r.a.createElement("div", {
                                className: w.a.setBottomContainer
                            }, r.a.createElement(p.a, {
                                place: "top",
                                effect: "solid",
                                className: k.a.tooltip
                            }), r.a.createElement("i", {
                                "data-tip": "Unfavorite",
                                className: f()(w.a.starIcon, "fas fa-star"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onUnfavorite(t._id)
                                }
                            }), r.a.createElement("div", {
                                className: w.a.setVerticalDivider
                            }), r.a.createElement("i", {
                                "data-tip": "View",
                                className: f()(w.a.starIcon, "far fa-eye"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.props.history.push("/set/".concat(t._id))
                                }
                            }), r.a.createElement("div", {
                                className: w.a.setVerticalDivider
                            }), r.a.createElement("i", {
                                "data-tip": "Move",
                                className: f()(w.a.starIcon, "fas fa-folder"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        movingFavorite: t,
                                        oldMoveLocation: "",
                                        moveLocation: ""
                                    })
                                }
                            })), r.a.createElement("div", {
                                className: w.a.setHorizontalDivider
                            }), r.a.createElement("div", {
                                className: w.a.setPlayContainer
                            }, r.a.createElement("div", {
                                className: w.a.playButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onSolo(t._id)
                                }
                            }, r.a.createElement("i", {
                                className: f()(w.a.playIcon, "fas fa-user-astronaut")
                            }), r.a.createElement("div", {
                                className: w.a.setPlayText
                            }, "Solo")), r.a.createElement("div", {
                                className: w.a.setVerticalDivider,
                                style: {
                                    height: 50
                                }
                            }), r.a.createElement(j.a, {
                                outsideClass: w.a.hostButton,
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.onHost(t._id)
                                }
                            }, r.a.createElement("div", {
                                className: w.a.hostButtonInside
                            }, r.a.createElement("i", {
                                className: f()(w.a.playIcon, "fas fa-play")
                            }), r.a.createElement("div", {
                                className: w.a.setPlayText
                            }, "Host")))))
                        }))), r.a.createElement("div", {
                            style: {
                                height: 30
                            }
                        }), this.state.unfavoriting ? r.a.createElement(v.a, {
                            text: "Removing Favorite...",
                            loading: !0
                        }) : this.state.deleteFolder ? r.a.createElement(v.a, {
                            text: "Do you really want to delete this folder (this will not delete the sets inside)?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: this.deleteFolder,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        deleteFolder: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.noFolder ? r.a.createElement(v.a, {
                            text: "Get Blooket Plus to Create Folders",
                            buttonOne: {
                                text: "Upgrade",
                                click: function() {
                                    return e.props.history.push("/upgrade")
                                },
                                color: "orange"
                            },
                            buttonTwo: {
                                text: "Not Now",
                                click: function() {
                                    e.setState({
                                        loading: !1,
                                        noFolder: !1
                                    }), e.loading = !1
                                },
                                color: "blue"
                            }
                        }) : this.state.creatingFolder || this.state.editingFolder ? r.a.createElement(v.a, {
                            text: this.state.creatingFolder ? "Enter a folder name and select a color:" : "You can change the folder name and color below:",
                            loading: this.state.loading,
                            stringValue: this.state.folderName,
                            stringChange: function(t) {
                                return e.setState({
                                    folderName: t.target.value
                                })
                            },
                            colorChange: function(t) {
                                return e.setState({
                                    folderColor: t
                                })
                            },
                            colorValue: this.state.folderColor,
                            onSubmit: function(t) {
                                t.preventDefault(), e.state.creatingFolder ? e.createFolder() : e.editFolder()
                            },
                            error: this.state.folderError,
                            buttonOne: {
                                text: this.state.creatingFolder ? "Create" : "Edit",
                                click: this.state.creatingFolder ? this.createFolder : this.editFolder,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        creatingFolder: !1,
                                        editingFolder: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.movingFavorite ? r.a.createElement(v.a, {
                            loading: this.state.loading,
                            buttonOne: this.state.moveLocation !== this.state.oldMoveLocation ? {
                                text: "Move",
                                click: this.addToFolder,
                                color: "blue"
                            } : null,
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        movingFavorite: !1
                                    })
                                },
                                color: "blue"
                            },
                            content: r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: w.a.moveText
                            }, "Choose a location to move the set to:"), r.a.createElement("div", {
                                className: w.a.locationsHolder
                            }, Object.keys(this.state.folders).length > 0 ? Object.entries(this.state.folders).map((function(t) {
                                var a = I(t, 2),
                                    n = a[0],
                                    o = a[1];
                                return r.a.createElement(j.a, {
                                    outsideClass: w.a.locationFolderButton,
                                    color: o.color,
                                    key: n,
                                    onClick: function() {
                                        return e.setState({
                                            moveLocation: n
                                        })
                                    }
                                }, r.a.createElement("div", {
                                    className: w.a.locationFolderButtonInside
                                }, r.a.createElement("i", {
                                    className: f()("fas fa-folder", w.a.locationFolderButtonIcon)
                                }), n))
                            })) : r.a.createElement("div", {
                                className: w.a.noFoldersText
                            }, "No Folders Created")), r.a.createElement("div", {
                                className: w.a.moveLocation
                            }, "Location: ".concat("" === this.state.moveLocation ? "No Folder" : this.state.moveLocation)))
                        }) : null))
                    }
                }]) && q(t.prototype, a), n && q(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            X.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(g.c)(Object(c.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(X)))
        },
        D9AY: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                f = a("ZrUs"),
                _ = a("oQ+7"),
                d = a("dQHb"),
                p = a.n(d),
                h = a("Xst1"),
                m = a.n(h),
                y = a("XTAU"),
                g = a("2ZNs"),
                b = a("74sb"),
                v = a("+fLB"),
                x = a("qnYv");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(a), !0).forEach((function(t) {
                        O(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function O(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function E(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function T(e, t) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function j(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = N(e);
                    if (t) {
                        var r = N(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return S(this, a)
                }
            }

            function S(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var z = function(e) {
                    return r.a.createElement("div", {
                        className: p.a.weightText
                    }, "".concat(Object(b.v)(e.weight), " lbs"))
                },
                F = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && T(e, t)
                    }(s, e);
                    var t, a, n, o = j(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(I(t)), t
                    }
                    return t = s, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: k({}, this.props.client.corrects),
                                        i: k({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var a = 0,
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var r = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: r,
                                        weight: this.props.client.standing[t].weight,
                                        playersDefeated: this.props.client.standing.length - r,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: n,
                                            me: e.props.client.standing[t]
                                        })
                                    }), 4750)
                                } else this.setState({
                                    isBlocked: !0
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.props.deleteClient()
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            x.a.put("/api/users/fishstats", {
                                name: e,
                                place: this.stats.place,
                                weight: this.stats.weight,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, r.a.createElement(y.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), r.a.createElement(_.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? r.a.createElement(g.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(b.o)(this.state.me.weight), " lbs"),
                                saveStats: this.saveStats,
                                renderStandingStat: z,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? r.a.createElement("div", {
                                className: m.a.blockedText
                            }, "You were blocked from this game.") : null) : r.a.createElement(c.a, {
                                to: "/play"
                            })
                        }
                    }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            F.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(v.d)(F)))
        },
        DRyJ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___2DUaK-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingContainer___3YM5t-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;background-color:#d52423;border-radius:8px;box-shadow:5px 5px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___3YM5t-camelCase:hover{opacity:.4}.styles__standingInside___1AsiY-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___2ifyl-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;height:8.5vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___2ifyl-camelCase,.styles__superPlaceText___2xxWc-camelCase{color:#fff;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2xxWc-camelCase{text-align:left;width:1.4vw;font-size:1.4vw;margin-top:4px;margin-left:1px}.styles__blookBox___3CuKA-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___2RIW0-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__goldContainer___6dtLv-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__goldText___3TNk_-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__goldIcon___2OcdT-camelCase{height:40%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___20Oki-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#d52423;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___tLoBf-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___12XOT-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___11BnA-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___2hH_M-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___1QxFu-camelCase{font-weight:700;font-family:Eczar,sans-serif;font-size:3vw}.styles__totalGoldContainer___3iaOD-camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalGoldContainer___3iaOD-camelCase,.styles__totalGoldInside___31bNr-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalGoldInside___31bNr-camelCase{border:5px solid #ffd329;width:100%;height:100%}.styles__totalGoldText___3SHlS-camelCase{font-weight:700;color:#fff;font-family:Eczar,sans-serif;font-size:4vw}.styles__totalGoldIcon___1SjiG-camelCase{height:40%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                left: "styles__left___2DUaK-camelCase",
                standingContainer: "styles__standingContainer___3YM5t-camelCase",
                standingInside: "styles__standingInside___1AsiY-camelCase",
                placeText: "styles__placeText___2ifyl-camelCase",
                superPlaceText: "styles__superPlaceText___2xxWc-camelCase",
                blookBox: "styles__blookBox___3CuKA-camelCase",
                nameText: "styles__nameText___2RIW0-camelCase",
                goldContainer: "styles__goldContainer___6dtLv-camelCase",
                goldText: "styles__goldText___3TNk_-camelCase",
                goldIcon: "styles__goldIcon___2OcdT-camelCase",
                chatroom: "styles__chatroom___20Oki-camelCase",
                chatroomInside: "styles__chatroomInside___tLoBf-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___12XOT-camelCase",
                noAlerts: "styles__noAlerts___11BnA-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___2hH_M-camelCase",
                noAlertsText: "styles__noAlertsText___1QxFu-camelCase",
                totalGoldContainer: "styles__totalGoldContainer___3iaOD-camelCase",
                totalGoldInside: "styles__totalGoldInside___31bNr-camelCase",
                totalGoldText: "styles__totalGoldText___3SHlS-camelCase",
                totalGoldIcon: "styles__totalGoldIcon___1SjiG-camelCase"
            }
        },
        "GK/W": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                f = a("TSYQ"),
                _ = a.n(f),
                d = a("yiF6"),
                p = a("ZrUs"),
                h = a("qnYv"),
                m = a("Xst1"),
                y = a.n(m),
                g = a("5k1d"),
                b = a.n(g),
                v = a("XTAU"),
                x = a("Rnav"),
                w = a("FVRk"),
                C = a("4Zpe"),
                k = a("7No7"),
                O = a("LHn/"),
                E = a("0oXL"),
                T = a("74sb"),
                j = a("+fLB");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return z(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function F() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                F = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var u = {};

                function f() {}

                function _() {}

                function d() {}
                var p = {};
                i(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    m = h && h(h(k([])));
                m && m !== t && a.call(m, r) && (p = m);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == S(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = d, i(y, "constructor", d), i(d, "constructor", _), _.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), w(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    w(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function B(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function P(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            B(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            B(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function L(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function A(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = G(e);
                    if (t) {
                        var r = G(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return D(this, a)
                }
            }

            function D(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return q(e)
            }

            function q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function G(e) {
                return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var M = [{
                    type: "gold",
                    val: 10,
                    text: "+ 10 Gold"
                }, {
                    type: "gold",
                    val: 20,
                    text: "+ 20 Gold"
                }, {
                    type: "gold",
                    val: 30,
                    text: "+ 30 Gold"
                }, {
                    type: "gold",
                    val: 40,
                    text: "+ 40 Gold"
                }, {
                    type: "gold",
                    val: 50,
                    text: "+ 50 Gold"
                }, {
                    type: "gold",
                    val: 100,
                    text: "+ 100 Gold"
                }, {
                    type: "multiply",
                    val: 2,
                    text: "Double Gold!",
                    blook: "Jester"
                }, {
                    type: "multiply",
                    val: 3,
                    text: "Triple Gold!",
                    blook: "Unicorn"
                }, {
                    type: "divide",
                    val: .75,
                    text: "Lose 25%",
                    blook: "Slime Monster"
                }, {
                    type: "divide",
                    val: .5,
                    text: "Lose 50%",
                    blook: "Dragon"
                }, {
                    type: "swap",
                    text: "SWAP!",
                    blook: "King"
                }, {
                    type: "take",
                    val: .1,
                    text: "Take 10%",
                    blook: "Elf"
                }, {
                    type: "take",
                    val: .25,
                    text: "Take 25%",
                    blook: "Wizard"
                }, {
                    type: "nothing",
                    text: "Nothing!",
                    blook: "Fairy"
                }],
                H = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && R(e, t)
                    }(l, e);
                    var t, a, n, o, s, i = A(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            choices: [],
                            choice: -1,
                            choiceObj: {},
                            ready: !1,
                            phaseTwo: !1,
                            players: [],
                            gold: 0,
                            gold2: 0,
                            stage: "",
                            attackerMsg: "",
                            attackerBlook: "",
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(q(t)), t.answerNext = t.answerNext.bind(q(t)), t.randomQ = t.randomQ.bind(q(t)), t.choosePrize = t.choosePrize.bind(q(t)), t.claimPrize = t.claimPrize.bind(q(t)), t.selectPlayer = t.selectPlayer.bind(q(t)), t.readQuestion = t.readQuestion.bind(q(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (s = P(F().mark((function e() {
                            var t = this;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(T.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 5:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var a = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                gold: e.g || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, a), t.props.history.push("/play/gold/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                                    case 9:
                                        this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val()) {
                                                var a = e.val().split(":"),
                                                    n = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0)),
                                                    r = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold2 - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0));
                                                t.setState({
                                                    attackerMsg: "".concat(a[0], " just ").concat("swap" === a[2] ? "swapped gold with you!" : "took ".concat(Object(T.o)(a[2]), " gold from you!")),
                                                    attackerBlook: a[1],
                                                    gold: n,
                                                    gold2: r
                                                }), t.props.firebase.setVal({
                                                    id: t.props.client.hostId,
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        g: n
                                                    }
                                                })
                                            }
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.u)(), clearTimeout(this.timeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    a = this.state.question.number;
                                t ? this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1 : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.nextReady = !0, this.setState({
                                    correct: t,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? (this.picking = !0, this.setState({
                                choices: Object(T.k)(M, 3),
                                stage: "prize",
                                ready: !1,
                                choice: -1,
                                phaseTwo: !1
                            })) : this.randomQ())
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.w)(t.answers)), this.setState({
                                    question: t,
                                    stage: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "choosePrize",
                        value: function(e) {
                            var t = this;
                            if (this.picking) {
                                this.picking = !1;
                                var a = this.state.gold,
                                    n = this.state.gold2,
                                    r = this.state.choices[e];
                                "gold" === r.type ? (a += r.val, n += r.val) : ["multiply", "divide"].includes(r.type) ? (a = Math.round(a * r.val), n = Math.round(n * r.val)) : (clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                                    t.randomQ()
                                }), 12e3), this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                                    var a = e ? Object.entries(e).map((function(e) {
                                        var t = N(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            gold: n.g || 0
                                        }
                                    })).filter((function(e) {
                                        return e.name !== t.props.client.name
                                    })) : [];
                                    a.sort((function(e, t) {
                                        return t.gold - e.gold
                                    })), t.setState({
                                        players: a
                                    })
                                }))), this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        g: a
                                    }
                                }), n !== a && (h.a.put("/api/users/suspend-me").catch((function(e) {
                                    console.error(e)
                                })), Object(T.u)(), window.location.reload()), this.setState({
                                    choice: e,
                                    choiceObj: r,
                                    gold: a,
                                    gold2: n
                                }, (function() {
                                    t.timeout = setTimeout((function() {
                                        t.next = !1, t.setState({
                                            ready: !0
                                        })
                                    }), 450)
                                }))
                            }
                        }
                    }, {
                        key: "claimPrize",
                        value: function() {
                            this.state.ready && !this.next && (this.next = !0, ["take", "swap"].includes(this.state.choiceObj.type) ? this.setState({
                                phaseTwo: !0
                            }) : this.randomQ())
                        }
                    }, {
                        key: "selectPlayer",
                        value: function(e) {
                            if (clearTimeout(this.claimTimeout), "swap" === this.state.choiceObj.type) this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name),
                                val: {
                                    b: this.props.client.blook,
                                    g: e.gold || 0,
                                    tat: "".concat(e.name, ":swap:").concat(this.state.gold)
                                }
                            }), this.setState({
                                gold: e.gold || 0,
                                gold2: e.gold || 0
                            });
                            else {
                                var t = Math.round((e.gold || 0) * this.state.choiceObj.val);
                                if (t > 0) {
                                    var a = this.state.gold + t,
                                        n = this.state.gold2 + t;
                                    this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            b: this.props.client.blook,
                                            g: a,
                                            tat: "".concat(e.name, ":").concat(t)
                                        }
                                    }), this.setState({
                                        gold: a,
                                        gold2: n
                                    })
                                }
                            }
                            this.randomQ()
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = P(F().mark((function e() {
                            var t, a = this;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, n) {
                                            var r = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                            e.includes("`*`") && (r = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(r), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), n()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? r.a.createElement("div", {
                                className: u.isMobile ? y.a.mBody : y.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundImage: "url(".concat(O.a.basic.castleTile, ")"),
                                    backgroundSize: 74.5
                                }
                            }, r.a.createElement(v.a, {
                                title: "Play Gold Rush | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you collect gold by answering questions."
                            }), r.a.createElement(x.a, {
                                name: this.props.client.name,
                                gold: this.state.gold,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), "question" === this.state.stage ? r.a.createElement(w.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            }) : "feedback" === this.state.stage ? r.a.createElement("div", {
                                className: b.a.feedbackContainer
                            }, r.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : "prize" === this.state.stage ? r.a.createElement("div", {
                                className: y.a.regularBody,
                                style: {
                                    outline: "none",
                                    cursor: this.state.ready && !this.state.phaseTwo ? "pointer" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: this.claimPrize
                            }, r.a.createElement("div", {
                                className: _()(b.a.header, I({}, b.a.fadeOut, this.state.ready))
                            }, r.a.createElement("div", {
                                className: b.a.headerInside
                            }, "Choose a Chest!")), this.state.ready ? r.a.createElement("div", {
                                className: _()(b.a.header2, this.state.phaseTwo ? b.a.fadeOut : b.a.fadeIn)
                            }, r.a.createElement("div", {
                                className: b.a.headerInside
                            }, "Click Anywhere to Go Next")) : null, r.a.createElement("div", {
                                className: this.state.phaseTwo ? b.a.fadeOut : null
                            }, 0 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: _()(b.a.choiceContainer1, I({}, b.a.noSelect, 0 !== this.state.choice))
                            }, this.state.choices[0].blook ? r.a.createElement(E.a, {
                                name: this.state.choices[0].blook,
                                className: b.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: O.a.basic.gold,
                                alt: "Gold",
                                className: b.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: b.a.choiceText
                            }, this.state.choices[0].text)) : null, r.a.createElement("div", {
                                className: _()(b.a.choice1, I({}, b.a.fadeOut, 0 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(0)
                                }
                            }, r.a.createElement("img", {
                                src: O.a.basic.chest1,
                                alt: "Chest 1",
                                className: b.a.chest,
                                draggable: !1
                            })), 1 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: _()(b.a.choiceContainer2, I({}, b.a.noSelect, 1 !== this.state.choice))
                            }, this.state.choices[1].blook ? r.a.createElement(E.a, {
                                name: this.state.choices[1].blook,
                                className: b.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: O.a.basic.gold,
                                alt: "Gold",
                                className: b.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: b.a.choiceText
                            }, this.state.choices[1].text)) : null, r.a.createElement("div", {
                                className: _()(b.a.choice2, I({}, b.a.fadeOut, 1 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(1)
                                }
                            }, r.a.createElement("img", {
                                src: O.a.basic.chest2,
                                alt: "Chest 2",
                                className: b.a.chest,
                                draggable: !1
                            })), 2 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: _()(b.a.choiceContainer3, I({}, b.a.noSelect, 2 !== this.state.choice))
                            }, this.state.choices[2].blook ? r.a.createElement(E.a, {
                                name: this.state.choices[2].blook,
                                className: b.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: O.a.basic.gold,
                                alt: "Gold",
                                className: b.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: b.a.choiceText
                            }, this.state.choices[2].text)) : null, r.a.createElement("div", {
                                className: _()(b.a.choice3, I({}, b.a.fadeOut, 2 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(2)
                                }
                            }, r.a.createElement("img", {
                                src: O.a.basic.chest3,
                                alt: "Chest 3",
                                className: b.a.chest,
                                draggable: !1
                            }))), this.state.phaseTwo ? this.state.players.length > 0 ? r.a.createElement("div", {
                                className: b.a.playerWrapper
                            }, r.a.createElement("div", {
                                className: b.a.playerHeader
                            }, r.a.createElement("div", {
                                className: b.a.headerInside
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From")), r.a.createElement("div", {
                                className: b.a.playerHolder
                            }, this.state.players.map((function(t) {
                                return r.a.createElement("div", {
                                    className: b.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    }
                                }, r.a.createElement("div", {
                                    className: b.a.playerInside
                                }, r.a.createElement(E.a, {
                                    name: t.blook,
                                    className: b.a.playerBlook
                                }), r.a.createElement("div", {
                                    className: b.a.playerColumn
                                }, r.a.createElement("div", {
                                    className: b.a.playerText
                                }, t.name), r.a.createElement("div", {
                                    className: b.a.goldRow
                                }, r.a.createElement("div", {
                                    className: b.a.playerGold
                                }, Object(T.o)(t.gold)), r.a.createElement("img", {
                                    src: O.a.basic.gold,
                                    alt: "Gold",
                                    className: b.a.goldIcon,
                                    draggable: !1
                                })))))
                            })), r.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : r.a.createElement("div", {
                                className: b.a.playerWrapper
                            }, r.a.createElement("div", {
                                className: b.a.playerHeader
                            }, r.a.createElement("div", {
                                className: b.a.headerInside
                            }, "No Players to Interact With")), r.a.createElement("div", {
                                className: b.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ
                            }, r.a.createElement("div", {
                                className: b.a.playerInside
                            }, "Next"))) : null) : null, this.state.attackerBlook ? r.a.createElement(k.a, {
                                text: this.state.attackerMsg,
                                blook: this.state.attackerBlook,
                                onClick: function() {
                                    return e.setState({
                                        attackerMsg: "",
                                        attackerBlook: ""
                                    })
                                }
                            }) : null) : r.a.createElement(c.a, {
                                to: "/play"
                            })
                        }
                    }]) && L(t.prototype, a), n && L(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(r.a.Component);
            H.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                firebase: l.a.object,
                deleteClient: l.a.func.isRequired,
                setGoldFinal: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: p.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(j.d)(H)))
        },
        "L+3L": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = "SET_GOLD_FINAL"
        },
        LCjO: function(e, t, a) {
            var n = a("BjUn");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        Mgwj: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                f = a("TSYQ"),
                _ = a.n(f),
                d = a("wd/R"),
                p = a.n(d),
                h = a("cpGi"),
                m = a("G5je"),
                y = a("H1WH"),
                g = a("E8Bj"),
                b = a("XTAU"),
                v = a("ca/f"),
                x = a("xBVA"),
                w = a.n(x),
                C = a("Xst1"),
                k = a.n(C),
                O = a("qnYv"),
                E = a("i4/Q"),
                T = a("mOsA");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var u = {};

                function f() {}

                function _() {}

                function d() {}
                var p = {};
                i(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    m = h && h(h(k([])));
                m && m !== t && a.call(m, r) && (p = m);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == j(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = d, i(y, "constructor", d), i(d, "constructor", _), _.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), w(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    w(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function z(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function F(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            z(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            z(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function B(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e, t) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function L(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = D(e);
                    if (t) {
                        var r = D(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return R(this, a)
                }
            }

            function R(e, t) {
                if (t && ("object" === j(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e) {
                return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && P(e, t)
                }(l, e);
                var t, a, n, o, s, i = L(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        members: [],
                        plan: {},
                        lastDate: "",
                        inviteLink: "",
                        justCopied: !1,
                        memberToRemove: "",
                        groupName: "",
                        isDeleting: !1,
                        isPO: !1,
                        loading: !1
                    }, t.here = !0, t.copyToClipboard = t.copyToClipboard.bind(A(t)), t.removeMember = t.removeMember.bind(A(t)), t.deleteGroup = t.deleteGroup.bind(A(t)), t.editStripe = t.editStripe.bind(A(t)), t.dowloadReport = t.dowloadReport.bind(A(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (s = F(N().mark((function e() {
                        var t, a = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    this.setState({
                                        user: t
                                    }), O.a.get("/api/groups", {
                                        params: {
                                            id: t.groupId
                                        }
                                    }).then((function(e) {
                                        var n = T.b.map((function(e) {
                                            return e.name
                                        })).indexOf(e.data.planName);
                                        if ((-1 !== n || "Custom" === e.data.planName) && a.here) {
                                            var r = -1 !== n ? T.b[n] : {
                                                name: "Custom",
                                                numPlans: e.data.numPlans
                                            };
                                            a.setState({
                                                plan: r,
                                                groupName: e.data.groupName,
                                                members: e.data.members,
                                                lastDate: e.data.lastDate,
                                                inviteLink: "https://www.blooket.com/group/join/".concat(t.groupId),
                                                isPO: e.data.isPO
                                            })
                                        }
                                    })).catch((function(e) {
                                        console.error(e)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "copyToClipboard",
                    value: function() {
                        var e = this,
                            t = document.createElement("textarea");
                        t.value = this.state.inviteLink, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
                        var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        t.select(), document.execCommand("copy"), document.body.removeChild(t), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a)), clearTimeout(this.copyTimeout), this.setState({
                            justCopied: !0
                        }, (function() {
                            e.copyTimeout = setTimeout((function() {
                                e.setState({
                                    justCopied: !1
                                })
                            }), 1500)
                        }))
                    }
                }, {
                    key: "removeMember",
                    value: function() {
                        var e = S(this.state.members);
                        e.splice(e.indexOf(this.state.memberToRemove), 1), this.setState({
                            members: e,
                            memberToRemove: ""
                        }), O.a.put("/api/groups/remove-member", {
                            groupId: this.state.user.groupId,
                            member: this.state.memberToRemove
                        }).catch((function(e) {
                            console.error(e)
                        }))
                    }
                }, {
                    key: "deleteGroup",
                    value: function() {
                        this.state.loading || (this.setState({
                            loading: !0
                        }), O.a.delete("/api/groups", {
                            params: {
                                groupId: this.state.user.groupId
                            }
                        }).then((function() {
                            window.location.reload()
                        })).catch((function(e) {
                            console.error(e)
                        })))
                    }
                }, {
                    key: "editStripe",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), O.a.post("/api/users/stripe/billing").then((function(e) {
                            window.open(e.data, "_self")
                        })).catch((function(t) {
                            console.error(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "dowloadReport",
                    value: (o = F(N().mark((function e() {
                        var t, a, n, r, o, s = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.state.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.setState({
                                        loading: !0
                                    }), a = [{
                                        value: "Email"
                                    }], (t = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]).forEach((function(e) {
                                        a.push({
                                            value: "".concat(e, " Hosts")
                                        })
                                    })), a.push({
                                        value: "Total Year Hosts"
                                    }), a.push({
                                        value: "Question Sets"
                                    }), n = [a], e.next = 11, new Promise((function(e) {
                                        O.a.get("/api/groups/generate-report", {
                                            params: {
                                                groupId: s.state.user.groupId
                                            }
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function() {
                                            e([])
                                        }))
                                    }));
                                case 11:
                                    (r = e.sent).sort((function(e, t) {
                                        return e.email < t.email ? -1 : e.email > t.email ? 1 : 0
                                    })), r.forEach((function(e) {
                                        var a = [{
                                            value: e.email
                                        }];
                                        t.forEach((function(t, n) {
                                            a.push({
                                                value: e.histories[n],
                                                type: "number"
                                            })
                                        })), a.push({
                                            value: e.histories.reduce((function(e, t) {
                                                return e + t
                                            })),
                                            type: "number"
                                        }), a.push({
                                            value: e.numGames,
                                            type: "number"
                                        }), n.push(a)
                                    })), o = {
                                        filename: "".concat(this.state.groupName, " Blooket Usage Report"),
                                        sheet: {
                                            data: n
                                        }
                                    }, Object(m.a)(o), this.setState({
                                        loading: !1
                                    });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: y.isMobile ? k.a.mBody : k.a.body
                        }, r.a.createElement(b.a, {
                            title: "Group Plan | Blooket",
                            desc: "Manage your Blooket group."
                        }), r.a.createElement(E.a, {
                            user: this.state.user,
                            page: "Group Plan"
                        }), r.a.createElement("div", {
                            className: k.a.profileBody
                        }, r.a.createElement("div", {
                            className: w.a.header
                        }, "Group Plan"), this.state.plan && this.state.plan.name ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: w.a.infoRow
                        }, r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("i", {
                            className: _()("fas fa-school", w.a.infoIcon)
                        }), this.state.groupName), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("i", {
                            className: _()("fas fa-users", w.a.infoIcon)
                        }), "".concat(this.state.plan.numPlans - this.state.members.length, " Unused Plans")), r.a.createElement("div", {
                            className: w.a.infoContainer
                        }, r.a.createElement("i", {
                            className: _()("far fa-clock", w.a.infoIcon)
                        }), "Plan End: ".concat(p()(this.state.lastDate).add(1, "year").format("MM/DD/YYYY"))), r.a.createElement(h.a, {
                            place: "left",
                            effect: "solid",
                            className: k.a.tooltip
                        }), this.state.members.length > 0 ? r.a.createElement("div", {
                            className: w.a.reportButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.dowloadReport,
                            "data-tip": "Download Report"
                        }, r.a.createElement("i", {
                            className: _()("fas fa-table", w.a.infoIcon),
                            style: {
                                marginRight: 0
                            }
                        })) : null), r.a.createElement("div", {
                            className: w.a.infoRow
                        }, r.a.createElement("div", {
                            className: w.a.linkButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.copyToClipboard
                        }, "Invite Link: ", r.a.createElement("u", null, this.state.inviteLink), this.state.justCopied ? r.a.createElement("div", {
                            className: w.a.copiedNotification
                        }, "Copied!") : null)), p()(this.state.lastDate).add(1, "year").subtract(9, "months").isBefore() ? r.a.createElement("div", {
                            className: w.a.smallButtonRow
                        }, this.state.isPO ? r.a.createElement(c.b, {
                            className: w.a.smallButton,
                            to: "/group/renew/".concat(this.state.user.groupId)
                        }, r.a.createElement("i", {
                            className: _()("fas fa-sync-alt", w.a.smallButtonIcon)
                        }), "Renew Plan Now") : r.a.createElement("div", {
                            className: w.a.smallButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.editStripe
                        }, r.a.createElement("i", {
                            className: _()("far fa-credit-card", w.a.smallButtonIcon)
                        }), "Edit Renewal"), r.a.createElement("div", {
                            className: w.a.smallButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isDeleting: !0
                                })
                            },
                            style: {
                                backgroundColor: "#ce1313"
                            }
                        }, r.a.createElement("i", {
                            className: _()("fas fa-trash-alt", w.a.smallButtonIcon)
                        }), "Delete Group")) : null, r.a.createElement("div", {
                            className: w.a.subheaderRow
                        }, r.a.createElement("div", {
                            className: w.a.subheader
                        }, "Members", r.a.createElement("span", {
                            className: w.a.subheaderSmall
                        }, "(Click to Remove)"))), this.state.members.length > 0 ? r.a.createElement("div", {
                            className: w.a.membersHolder
                        }, this.state.members.map((function(t) {
                            return r.a.createElement("div", {
                                key: t,
                                className: w.a.memberContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        memberToRemove: t
                                    })
                                }
                            }, t)
                        }))) : r.a.createElement("div", {
                            className: w.a.nothingText
                        }, "No Members Yet", r.a.createElement("br", null), r.a.createElement("span", {
                            style: {
                                fontSize: 20,
                                fontWeight: "normal"
                            }
                        }, "If you want Plus, you must join this group yourself"))) : null, this.state.memberToRemove ? r.a.createElement(v.a, {
                            text: "Do you really want to remove this member from the group?",
                            buttonOne: {
                                text: "Yes",
                                click: this.removeMember,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        memberToRemove: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.isDeleting ? r.a.createElement(v.a, {
                            text: "Do you really want to delete this group?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: this.deleteGroup,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        isDeleting: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.loading ? r.a.createElement(v.a, {
                            text: "Loading...",
                            loading: this.state.loading
                        }) : null))
                    }
                }]) && B(t.prototype, a), n && B(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            q.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(g.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(q)))
        },
        NV8W: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__questionContainer___3Aq4Z-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9}@-webkit-keyframes styles__growIn___3fTrA-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___3fTrA-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___2ahGM-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9;background-color:#f7f7f7}.styles__wave1___2QRAF-camelCase,.styles__wave2___3Rnl--camelCase,.styles__wave3___35RBM-camelCase,.styles__wave4___2hP7P-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___2QRAF-camelCase{height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;-webkit-animation:styles__anim-h-wave___2W9f1-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.75s infinite alternate;animation:styles__anim-h-wave___2W9f1-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.75s infinite alternate}.styles__wave2___3Rnl--camelCase{z-index:3;height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___2W9f1-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.5s infinite alternate;animation:styles__anim-h-wave___2W9f1-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.5s infinite alternate}.styles__wave3___35RBM-camelCase{z-index:4;height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___2W9f1-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.25s infinite alternate;animation:styles__anim-h-wave___2W9f1-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.25s infinite alternate}.styles__wave4___2hP7P-camelCase{z-index:5;height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___2W9f1-camelCase 3s linear infinite,styles__anim-v-wave___3v1m--camelCase 2s infinite alternate;animation:styles__anim-h-wave___2W9f1-camelCase 3s linear infinite,styles__anim-v-wave___3v1m--camelCase 2s infinite alternate}@-webkit-keyframes styles__anim-h-wave___2W9f1-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-h-wave___2W9f1-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@-webkit-keyframes styles__anim-v-wave___3v1m--camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}@keyframes styles__anim-v-wave___3v1m--camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}.styles__wave1Frenzy___1hj3s-camelCase{background:radial-gradient(circle,transparent 40%,#9b97d6 0,#9ccfe7 65%);background-position:center -140px}.styles__wave2Frenzy___1VU2X-camelCase{background:radial-gradient(circle,transparent 40%,#9ccfe7 0,#f5a9cb 65%);background-position:center -140px}.styles__wave3Frenzy___PEv19-camelCase{background:radial-gradient(circle,transparent 40%,#f5a9cb 0,#ffffc2 65%);background-position:center -140px}.styles__wave4Frenzy___KOlgm-camelCase{background:radial-gradient(circle,transparent 40%,#ffffc2 0,#9ccfe7 65%);background-position:center -140px}.styles__cloud___-w_V2-camelCase{width:350px;height:120px;box-shadow:0 8px 5px rgba(0,0,0,.1);border-radius:100px;top:0;left:-350px}.styles__cloud___-w_V2-camelCase,.styles__cloud___-w_V2-camelCase:after,.styles__cloud___-w_V2-camelCase:before{background-color:#f2f9fe;position:absolute}.styles__cloud___-w_V2-camelCase:after,.styles__cloud___-w_V2-camelCase:before{content:""}.styles__cloud___-w_V2-camelCase:after{width:100px;height:100px;top:-50px;left:50px;border-radius:100px}.styles__cloud___-w_V2-camelCase:before{width:180px;height:180px;top:-90px;right:50px;border-radius:200px}.styles__cloud1___2IA2J-camelCase{top:calc(55px - 5%);transform:scale(.5);-webkit-animation:styles__cloud1___2IA2J-camelCase 60s linear -50s infinite;animation:styles__cloud1___2IA2J-camelCase 60s linear -50s infinite}@-webkit-keyframes styles__cloud1___2IA2J-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}@keyframes styles__cloud1___2IA2J-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}.styles__cloud2___368TM-camelCase{top:calc(55px + 1%);transform:scale(.45);-webkit-animation:styles__cloud2___368TM-camelCase 60s linear -40s infinite;animation:styles__cloud2___368TM-camelCase 60s linear -40s infinite}@-webkit-keyframes styles__cloud2___368TM-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}@keyframes styles__cloud2___368TM-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}.styles__cloud3___3jFrq-camelCase{top:calc(55px + 14%);transform:scale(.4);-webkit-animation:styles__cloud3___3jFrq-camelCase 60s linear -30s infinite;animation:styles__cloud3___3jFrq-camelCase 60s linear -30s infinite}@-webkit-keyframes styles__cloud3___3jFrq-camelCase{0%{transform:translateX(0) scale(.4)}to{transform:translateX(calc(100vw + 350px)) scale(.4)}}@keyframes styles__cloud3___3jFrq-camelCase{0%{transform:translateX(0) scale(.4)}to{transform:translateX(calc(100vw + 350px)) scale(.4)}}.styles__cloud4___1WO7C-camelCase{top:calc(55px + 6%);transform:scale(.45);-webkit-animation:styles__cloud4___1WO7C-camelCase 60s linear -20s infinite;animation:styles__cloud4___1WO7C-camelCase 60s linear -20s infinite}@-webkit-keyframes styles__cloud4___1WO7C-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}@keyframes styles__cloud4___1WO7C-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}.styles__cloud5___3XyfE-camelCase{top:55px;transform:scale(.5);-webkit-animation:styles__cloud5___3XyfE-camelCase 60s linear -10s infinite;animation:styles__cloud5___3XyfE-camelCase 60s linear -10s infinite}@-webkit-keyframes styles__cloud5___3XyfE-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}@keyframes styles__cloud5___3XyfE-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}.styles__cloud6___qsLXt-camelCase{top:calc(55px + 5%);transform:scale(.35);-webkit-animation:styles__cloud6___qsLXt-camelCase 60s linear 0s infinite;animation:styles__cloud6___qsLXt-camelCase 60s linear 0s infinite}@-webkit-keyframes styles__cloud6___qsLXt-camelCase{0%{transform:translateX(0) scale(.35)}to{transform:translateX(calc(100vw + 350px)) scale(.35)}}@keyframes styles__cloud6___qsLXt-camelCase{0%{transform:translateX(0) scale(.35)}to{transform:translateX(calc(100vw + 350px)) scale(.35)}}.styles__background___2kiyu-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__frenzyBackground___3YKI_-camelCase{background-color:#cdedfd;background:linear-gradient(to bottom right,#ffffc2 15%,#f5a9cb 40%,#9ccfe7 65%,#9b97d6 90%)}.styles__pier___3Sz3u-camelCase{bottom:160px;height:58px;background-color:#e17135}.styles__pier___3Sz3u-camelCase,.styles__pierBottom___1bvO_-camelCase{position:absolute;left:0;width:500px}.styles__pierBottom___1bvO_-camelCase{bottom:150px;height:12px;background-color:#c8591e}.styles__pillar1___1mRBj-camelCase,.styles__pillar2___S2r3N-camelCase{position:absolute;bottom:50px;background-color:#bb4829;height:100px;width:60px;box-shadow:inset 0 15px 10px rgba(0,0,0,.2)}.styles__pillar1___1mRBj-camelCase{left:150px}.styles__pillar2___S2r3N-camelCase{left:350px}.styles__blook___3Gqgu-camelCase{position:absolute;bottom:180px;left:375px;width:100px}.styles__fishingRod___YvXa3-camelCase{height:230px;left:435px;bottom:210px;transform-origin:bottom left;transform:rotate(50deg)}.styles__fishingRod___YvXa3-camelCase,.styles__string___3lFrl-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute}.styles__string___3lFrl-camelCase{background-color:#9a9c9e;width:1px;height:30px;left:628px;bottom:303px;transform-origin:top center;transform:scaleY(1);transition:transform .6s}.styles__stringOut___BY7pE-camelCase{transform:scaleY(10)}.styles__lure___FOpRm-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;width:28px;height:14px;left:619px;bottom:286px;transform-origin:top center;transform:translateY(0) rotate(90deg);transition:transform .6s}.styles__lureOut___34wNt-camelCase{transform:translateY(270px) rotate(90deg)}.styles__fishModal___PqTdM-camelCase{opacity:0;z-index:6;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;-webkit-animation:styles__fadeIn___To_b0-camelCase .3s .9s forwards;animation:styles__fadeIn___To_b0-camelCase .3s .9s forwards}.styles__fishModalButton___2-VaN-camelCase{cursor:pointer}.styles__fish___3lPi7-camelCase{width:80px;height:92px;position:absolute;left:630px;bottom:-62px;pointer-events:none;-webkit-animation:styles__fishIn___2XoGf-camelCase 1.2s forwards;animation:styles__fishIn___2XoGf-camelCase 1.2s forwards}@-webkit-keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}@keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgrade___3FJFm-camelCase{position:absolute;width:80px;height:80px;left:630px;bottom:-50px;transform:translate(-50%,-50%);padding:7px;box-sizing:border-box;background-color:#369;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;border-radius:50%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards;animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards}@-webkit-keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}@keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgradeInside___38mEH-camelCase{border:5px solid #fff;border-radius:50%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.styles__lureUpgradeImg___EuYue-camelCase{width:75%}.styles__specialFish___Y5GQw-camelCase{width:62.5%}.styles__frenzyIcon___33oU7-camelCase{color:#fff;font-size:60%;transform:rotate(-25deg);-webkit-animation:styles__fishInFrenzy___2wmhE-camelCase 1.2s forwards;animation:styles__fishInFrenzy___2wmhE-camelCase 1.2s forwards}@-webkit-keyframes styles__fishInFrenzy___2wmhE-camelCase{0%{font-size:30px}50%{font-size:30px}to{font-size:60px}}@keyframes styles__fishInFrenzy___2wmhE-camelCase{0%{font-size:30px}50%{font-size:30px}to{font-size:60px}}.styles__caughtContainer___3NiSN-camelCase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);justify-content:center;border-radius:10px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:7;opacity:0;-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 1.1s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.1s forwards}.styles__caughtContainer___3NiSN-camelCase,.styles__caughtContainerInside___2zdV1-camelCase{box-sizing:border-box;background-color:#ff751a;display:flex;align-items:center}.styles__caughtContainerInside___2zdV1-camelCase{color:#fff;border:5px solid #fff;padding:10px 20px;border-radius:7px;flex-direction:column;justify-content:space-between;width:290px;height:350px}.styles__caughtGroup___T1uPz-camelCase{display:flex;flex-direction:column;align-items:center}.styles__claimText___PMybv-camelCase,.styles__fishText___3CQP1-camelCase,.styles__lureText___1WSBu-camelCase,.styles__rarityText___2Jfb3-camelCase,.styles__specialText___3zdoG-camelCase,.styles__tierText___2RWMF-camelCase,.styles__weightText___3Vjmw-camelCase{font-size:28px;font-weight:700;opacity:0;text-align:center;pointer-events:none}.styles__rarityText___2Jfb3-camelCase{font-size:22px;letter-spacing:.5px;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__fishText___3CQP1-camelCase,.styles__rarityText___2Jfb3-camelCase{-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__fishText___3CQP1-camelCase{font-size:26px}.styles__tierText___2RWMF-camelCase{font-size:28px;display:flex;flex-direction:row;align-items:center;-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__tier___3O2NL-camelCase{font-family:Titan One,sans-serif;font-weight:400;font-size:36px;margin-right:5px;margin-bottom:5px}.styles__weightText___3Vjmw-camelCase{font-size:22px;font-weight:400}.styles__specialText___3zdoG-camelCase,.styles__weightText___3Vjmw-camelCase{-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__specialText___3zdoG-camelCase{font-size:28px;margin-bottom:5px}.styles__lureText___1WSBu-camelCase{font-size:22px;font-weight:400;width:80%;margin:0 auto;-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__claimText___PMybv-camelCase{font-size:16px;font-weight:400;text-shadow:2px 2px 8px grey;position:absolute;left:5%;bottom:10px;width:90%;text-align:center;color:#fff;z-index:7;-webkit-animation:styles__fadeIn___To_b0-camelCase .2s linear 4s forwards;animation:styles__fadeIn___To_b0-camelCase .2s linear 4s forwards}@-webkit-keyframes styles__fadeIn___To_b0-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___To_b0-camelCase{0%{opacity:0}to{opacity:1}}.styles__pageButton___3uI22-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__hookedText___1L1H5-camelCase,.styles__lostText___1yqpU-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;left:75%;top:40%;transform:translate(-50%,-50%) rotate(35deg);padding:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:10px;pointer-events:none;white-space:nowrap;-webkit-animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards;animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards}.styles__hookedText___1L1H5-camelCase,.styles__hookedTextInside___1IlYY-camelCase,.styles__lostText___1yqpU-camelCase,.styles__lostTextInside___vpPvz-camelCase{box-sizing:border-box;background-color:#ff751a;display:flex;justify-content:center;align-items:center}.styles__hookedTextInside___1IlYY-camelCase,.styles__lostTextInside___vpPvz-camelCase{font-family:Titan One,sans-serif;font-size:5vw;color:#fff;border:5px solid #fff;padding:10px 20px;border-radius:7px;flex-direction:column}.styles__hookedSmallText___1nedJ-camelCase{font-family:Nunito,sans-serif;font-size:18px}.styles__lostText___1yqpU-camelCase,.styles__lostTextInside___vpPvz-camelCase{background-color:#ff4d4d}.styles__lostTextInside___vpPvz-camelCase{min-width:30vw}.styles__hookedOverlay___2d-_J-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;box-shadow:inset 0 0 5vw 5vw rgba(248,206,178,.4);pointer-events:none;z-index:20;-webkit-animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards;animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards}@-webkit-keyframes styles__hookedFadeIn___29pL_-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__hookedFadeIn___29pL_-camelCase{0%{opacity:0}to{opacity:1}}.styles__frenzyText___3HpBp-camelCase{font-family:Titan One,sans-serif;font-size:7.5vw;text-shadow:2px 2px 8px grey;color:#fff;position:absolute;top:50%;left:0;pointer-events:none;z-index:40;-webkit-animation:styles__frenzyText___3HpBp-camelCase 2s linear forwards;animation:styles__frenzyText___3HpBp-camelCase 2s linear forwards}@-webkit-keyframes styles__frenzyText___3HpBp-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}@keyframes styles__frenzyText___3HpBp-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}.styles__invis___29h9O-camelCase{opacity:0}@media only screen and (max-width:950px){.styles__cloud2___368TM-camelCase{opacity:0}.styles__cloud3___3jFrq-camelCase{top:calc(55px - 10%)}.styles__cloud4___1WO7C-camelCase,.styles__cloud6___qsLXt-camelCase{opacity:0}.styles__pier___3Sz3u-camelCase{bottom:160px;width:140px;height:58px}.styles__pierBottom___1bvO_-camelCase{bottom:150px;width:140px;height:12px}.styles__pillar1___1mRBj-camelCase,.styles__pillar2___S2r3N-camelCase{bottom:50px;height:100px;width:60px}.styles__pillar1___1mRBj-camelCase{opacity:0}.styles__pillar2___S2r3N-camelCase{left:40px}.styles__blook___3Gqgu-camelCase{position:absolute;bottom:180px;left:25px;width:100px}.styles__fishingRod___YvXa3-camelCase{height:230px;left:85px;bottom:210px}.styles__string___3lFrl-camelCase{width:1px;height:30px;left:278px;bottom:303px}.styles__lure___FOpRm-camelCase{width:28px;height:14px;left:269px;bottom:286px}.styles__fish___3lPi7-camelCase{width:80px;height:92px;left:280px;bottom:-62px;-webkit-animation:styles__fishIn___2XoGf-camelCase 1.2s forwards;animation:styles__fishIn___2XoGf-camelCase 1.2s forwards}@-webkit-keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}@keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgrade___3FJFm-camelCase{width:80px;height:80px;left:280px;bottom:-50px;-webkit-animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards;animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards}@-webkit-keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}@keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}.styles__hookedText___1L1H5-camelCase,.styles__lostText___1yqpU-camelCase{left:50%;top:10%;transform:translateX(-50%) rotate(10deg)}.styles__hookedTextInside___1IlYY-camelCase,.styles__lostTextInside___vpPvz-camelCase{font-size:14vw;padding:10px 20px}}', ""]), t.locals = {
                questionContainer: "styles__questionContainer___3Aq4Z-camelCase",
                feedbackContainer: "styles__feedbackContainer___2ahGM-camelCase",
                wave1: "styles__wave1___2QRAF-camelCase",
                wave2: "styles__wave2___3Rnl--camelCase",
                wave3: "styles__wave3___35RBM-camelCase",
                wave4: "styles__wave4___2hP7P-camelCase",
                "anim-h-wave": "styles__anim-h-wave___2W9f1-camelCase",
                "anim-v-wave": "styles__anim-v-wave___3v1m--camelCase",
                wave1Frenzy: "styles__wave1Frenzy___1hj3s-camelCase",
                wave2Frenzy: "styles__wave2Frenzy___1VU2X-camelCase",
                wave3Frenzy: "styles__wave3Frenzy___PEv19-camelCase",
                wave4Frenzy: "styles__wave4Frenzy___KOlgm-camelCase",
                cloud: "styles__cloud___-w_V2-camelCase",
                cloud1: "styles__cloud1___2IA2J-camelCase",
                cloud2: "styles__cloud2___368TM-camelCase",
                cloud3: "styles__cloud3___3jFrq-camelCase",
                cloud4: "styles__cloud4___1WO7C-camelCase",
                cloud5: "styles__cloud5___3XyfE-camelCase",
                cloud6: "styles__cloud6___qsLXt-camelCase",
                background: "styles__background___2kiyu-camelCase",
                frenzyBackground: "styles__frenzyBackground___3YKI_-camelCase",
                pier: "styles__pier___3Sz3u-camelCase",
                pierBottom: "styles__pierBottom___1bvO_-camelCase",
                pillar1: "styles__pillar1___1mRBj-camelCase",
                pillar2: "styles__pillar2___S2r3N-camelCase",
                blook: "styles__blook___3Gqgu-camelCase",
                fishingRod: "styles__fishingRod___YvXa3-camelCase",
                string: "styles__string___3lFrl-camelCase",
                stringOut: "styles__stringOut___BY7pE-camelCase",
                lure: "styles__lure___FOpRm-camelCase",
                lureOut: "styles__lureOut___34wNt-camelCase",
                fishModal: "styles__fishModal___PqTdM-camelCase",
                fadeIn: "styles__fadeIn___To_b0-camelCase",
                fishModalButton: "styles__fishModalButton___2-VaN-camelCase",
                fish: "styles__fish___3lPi7-camelCase",
                fishIn: "styles__fishIn___2XoGf-camelCase",
                lureUpgrade: "styles__lureUpgrade___3FJFm-camelCase",
                fishInLure: "styles__fishInLure___1-7oh-camelCase",
                lureUpgradeInside: "styles__lureUpgradeInside___38mEH-camelCase",
                lureUpgradeImg: "styles__lureUpgradeImg___EuYue-camelCase",
                specialFish: "styles__specialFish___Y5GQw-camelCase",
                frenzyIcon: "styles__frenzyIcon___33oU7-camelCase",
                fishInFrenzy: "styles__fishInFrenzy___2wmhE-camelCase",
                caughtContainer: "styles__caughtContainer___3NiSN-camelCase",
                caughtContainerInside: "styles__caughtContainerInside___2zdV1-camelCase",
                caughtGroup: "styles__caughtGroup___T1uPz-camelCase",
                claimText: "styles__claimText___PMybv-camelCase",
                fishText: "styles__fishText___3CQP1-camelCase",
                lureText: "styles__lureText___1WSBu-camelCase",
                rarityText: "styles__rarityText___2Jfb3-camelCase",
                specialText: "styles__specialText___3zdoG-camelCase",
                tierText: "styles__tierText___2RWMF-camelCase",
                weightText: "styles__weightText___3Vjmw-camelCase",
                tier: "styles__tier___3O2NL-camelCase",
                pageButton: "styles__pageButton___3uI22-camelCase",
                hookedText: "styles__hookedText___1L1H5-camelCase",
                lostText: "styles__lostText___1yqpU-camelCase",
                hookedFadeIn: "styles__hookedFadeIn___29pL_-camelCase",
                hookedTextInside: "styles__hookedTextInside___1IlYY-camelCase",
                lostTextInside: "styles__lostTextInside___vpPvz-camelCase",
                hookedSmallText: "styles__hookedSmallText___1nedJ-camelCase",
                hookedOverlay: "styles__hookedOverlay___2d-_J-camelCase",
                frenzyText: "styles__frenzyText___3HpBp-camelCase",
                invis: "styles__invis___29h9O-camelCase",
                growIn: "styles__growIn___3fTrA-camelCase"
            }
        },
        P7cB: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                f = a("ZrUs"),
                _ = a("oQ+7"),
                d = a("6OEu"),
                p = a.n(d),
                h = a("Xst1"),
                m = a.n(h),
                y = a("XTAU"),
                g = a("2ZNs"),
                b = a("LHn/"),
                v = a("74sb"),
                x = a("+fLB"),
                w = a("qnYv");

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(a), !0).forEach((function(t) {
                        E(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function E(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function T(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = z(e);
                    if (t) {
                        var r = z(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return I(this, a)
                }
            }

            function I(e, t) {
                if (t && ("object" === C(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return N(e)
            }

            function N(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = function(e) {
                    return r.a.createElement("div", {
                        className: p.a.statContainer
                    }, r.a.createElement("div", {
                        className: p.a.goldText
                    }, Object(v.v)(e.gold)), r.a.createElement("img", {
                        src: b.a.basic.gold,
                        alt: "Gold",
                        className: p.a.goldImage,
                        draggable: !1
                    }))
                },
                B = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && j(e, t)
                    }(s, e);
                    var t, a, n, o = S(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(N(t)), t
                    }
                    return t = s, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: O({}, this.props.client.corrects),
                                        i: O({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var a = 0,
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var r = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: r,
                                        gold: this.props.client.standing[t].gold,
                                        playersDefeated: this.props.client.standing.length - r,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: n,
                                            me: e.props.client.standing[t]
                                        })
                                    }), 4750)
                                } else this.setState({
                                    isBlocked: !0
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.props.deleteClient()
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            w.a.put("/api/users/goldstats", {
                                name: e,
                                place: this.stats.place,
                                gold: this.stats.gold,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, r.a.createElement(y.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), r.a.createElement(_.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? r.a.createElement(g.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(v.o)(this.state.me.gold), " Gold"),
                                saveStats: this.saveStats,
                                renderStandingStat: F,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? r.a.createElement("div", {
                                className: m.a.blockedText
                            }, "You were blocked from this game.") : null) : r.a.createElement(c.a, {
                                to: "/play"
                            })
                        }
                    }]) && T(t.prototype, a), n && T(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            B.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(x.d)(B)))
        },
        "Ry/P": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___zZwkx-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__infoRow___HHPF8-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:90%;margin:0 5% 5px}.styles__infoContainer___1bBlb-camelCase{background-color:#fff;border-radius:5px;display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;font-size:20px;font-weight:700;color:#3a3a3a;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:5px;flex:1;max-width:30%}.styles__infoIcon___cxLYs-camelCase{font-size:24px;margin-right:10px}.styles__reportButton___2s4g5-camelCase{background-color:#007337;border-radius:5px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;margin:5px;width:50px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__reportButton___2s4g5-camelCase:hover{transform:scale(.95)}.styles__linkButton___3Zu35-camelCase{width:80%;margin:10px auto;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#0bc2cf;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:20px;font-weight:700;outline:none;cursor:pointer;position:relative;word-break:break-word;transition:.2s}.styles__linkButton___3Zu35-camelCase:hover{transform:scale(.95)}.styles__endText___2doxT-camelCase{background-color:#fff;border-radius:5px;align-items:center;justify-content:center;font-family:Nunito,sans-serif;font-size:20px;font-weight:700;color:#3a3a3a;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:5px auto;max-width:50%}.styles__endText___2doxT-camelCase,.styles__smallButtonRow___7mET1-camelCase{display:flex;flex-direction:row}.styles__smallButtonRow___7mET1-camelCase{justify-content:space-evenly;width:60%;margin:0 auto}.styles__smallButton___3ISXg-camelCase{width:42.5%;margin:5px auto;box-sizing:border-box;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#ff7b24;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:20px;font-weight:700;outline:none;cursor:pointer;text-decoration:none;transition:.2s}.styles__smallButton___3ISXg-camelCase:hover{transform:scale(.95)}.styles__smallButtonIcon___2wr4M-camelCase{font-size:22px;margin-right:7px}.styles__copiedNotification___37Dn2-camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__subheaderRow___3pRLb-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;width:90%;margin:0 auto}.styles__subheader___26-hK-camelCase{font-size:32px;font-weight:700}.styles__subheaderSmall___3vlET-camelCase{font-size:16px;opacity:.6;margin-left:10px}.styles__nothingText___3lTVj-camelCase{margin:55px auto;width:80%;text-align:center;font-family:Nunito,sans-serif;font-size:30px;font-weight:700;color:#3a3a3a}.styles__membersHolder___20Rea-camelCase{width:90%;margin:10px auto 25px;display:flex;flex-flow:row wrap}.styles__memberContainer___3V0Ei-camelCase{font-family:Nunito,sans-serif;background-color:#fff;border-radius:5px;color:#3a3a3a;box-sizing:border-box;padding:5px 10px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:10px;font-size:22px;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__memberContainer___3V0Ei-camelCase:hover{transform:scale(.97);text-decoration:line-through;color:#c43a35}@media only screen and (max-width:865px){.styles__infoContainer___1bBlb-camelCase{max-width:100%}.styles__linkButton___3Zu35-camelCase{width:100%;flex-direction:column}}", ""]), t.locals = {
                header: "styles__header___zZwkx-camelCase",
                infoRow: "styles__infoRow___HHPF8-camelCase",
                infoContainer: "styles__infoContainer___1bBlb-camelCase",
                infoIcon: "styles__infoIcon___cxLYs-camelCase",
                reportButton: "styles__reportButton___2s4g5-camelCase",
                linkButton: "styles__linkButton___3Zu35-camelCase",
                endText: "styles__endText___2doxT-camelCase",
                smallButtonRow: "styles__smallButtonRow___7mET1-camelCase",
                smallButton: "styles__smallButton___3ISXg-camelCase",
                smallButtonIcon: "styles__smallButtonIcon___2wr4M-camelCase",
                copiedNotification: "styles__copiedNotification___37Dn2-camelCase",
                subheaderRow: "styles__subheaderRow___3pRLb-camelCase",
                subheader: "styles__subheader___26-hK-camelCase",
                subheaderSmall: "styles__subheaderSmall___3vlET-camelCase",
                nothingText: "styles__nothingText___3lTVj-camelCase",
                membersHolder: "styles__membersHolder___20Rea-camelCase",
                memberContainer: "styles__memberContainer___3V0Ei-camelCase"
            }
        },
        YRmt: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("HbJ1"),
                f = a("VgyX"),
                _ = a("kQZX"),
                d = a("XTAU"),
                p = a("Xst1"),
                h = a.n(p),
                m = a("hpu6"),
                y = a("PDe1"),
                g = a("+fLB");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return C(this, a)
                }
            }

            function C(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && x(e, t)
                }(s, e);
                var t, a, n, o = w(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t.audio = new Audio(y.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .45, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            e.skip()
                        }), 14500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/gold")
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? r.a.createElement("div", {
                            className: h.a.body
                        }, r.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(_.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), r.a.createElement("div", {
                            className: h.a.regularBody
                        }, r.a.createElement(m.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), r.a.createElement("div", {
                            className: h.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip")) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && v(t.prototype, a), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            E.propTypes = {
                host: l.a.object,
                id: l.a.string,
                history: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: f.d,
                    setMuted: u.a
                }, e)
            }))(Object(g.d)(E)))
        },
        dQHb: function(e, t, a) {
            var n = a("rKKi");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "ff2+": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__statContainer___2-wJZ-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__goldText___24cXG-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__goldImage___2uwZ6-camelCase{height:40%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___2-wJZ-camelCase",
                goldText: "styles__goldText___24cXG-camelCase",
                goldImage: "styles__goldImage___2uwZ6-camelCase"
            }
        },
        huBP: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("4HzQ"),
                f = a("1F66"),
                _ = a.n(f),
                d = a("ZRP+"),
                p = a("TSYQ"),
                h = a.n(p),
                m = a("wd/R"),
                y = a.n(m),
                g = (a("RiPy"), a("HbJ1")),
                b = a("+xn+"),
                v = a("VgyX"),
                x = a("kQZX"),
                w = a("qFIf"),
                C = a("XTAU"),
                k = a("ca/f"),
                O = a("Xst1"),
                E = a.n(O),
                T = a("le2p"),
                j = a.n(T),
                S = a("0oXL"),
                I = a("LHn/"),
                N = a("PDe1"),
                z = a("+fLB"),
                F = a("74sb");

            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(a), !0).forEach((function(t) {
                        R(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function R(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || q(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                if (e) {
                    if ("string" == typeof e) return G(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? G(e, t) : void 0
                }
            }

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function M(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function W(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Q(e);
                    if (t) {
                        var r = Q(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return U(this, a)
                }
            }

            function U(e, t) {
                if (t && ("object" === B(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return X(e)
            }

            function X(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Q(e) {
                return (Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && H(e, t)
                }(s, e);
                var t, a, n, o = W(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalGold: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = r.a.createRef(), t.getClients = t.getClients.bind(X(t)), t.goNext = t.goNext.bind(X(t)), t.addAlert = t.addAlert.bind(X(t)), t.scrollToBottom = t.scrollToBottom.bind(X(t)), t.changeMuted = t.changeMuted.bind(X(t)), t.blockUser = t.blockUser.bind(X(t)), t.audio = new Audio(N.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.firebase.setStage({
                                    id: this.props.host.id,
                                    stage: "gold"
                                }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                var t = 60 * this.props.host.settings.amount,
                                    a = 4;
                                this.setState({
                                    timer: y.a.duration(t, "seconds").format("mm:ss")
                                }), this.timerInterval = setInterval((function() {
                                    t -= 1, e.setState({
                                        timer: y.a.duration(t, "seconds").format("mm:ss")
                                    }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1), a = 4) : a -= 1
                                }), 1e3)
                            } else this.clientsInterval = setInterval((function() {
                                e.getClients(!1)
                            }), 4e3);
                            this.alertContainer = document.querySelector("#alerts")
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(a) {
                            var n = a || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var r = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    s = Object.entries(n).map((function(e) {
                                        var t = D(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            gold: n.g || 0,
                                            toAttack: n.tat
                                        }
                                    })),
                                    i = s.map((function(e) {
                                        return e.name
                                    }));
                                s.forEach((function(e) {
                                    if (e.toAttack) {
                                        var a = e.toAttack.split(":"),
                                            n = i.indexOf(a[0]);
                                        if (-1 === n) return;
                                        var r = s[n];
                                        if ("swap" === a[1]) {
                                            if (a.length < 3) return;
                                            r.name !== e.name && (t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(r.name),
                                                val: {
                                                    b: r.blook,
                                                    g: a[2],
                                                    at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(a[2])
                                                }
                                            }), s[n].gold = a[2], t.addAlert(e.name, e.blook, "just swapped gold with ".concat(r.name)))
                                        } else {
                                            if (a.length < 2) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(r.name),
                                                val: {
                                                    b: r.blook,
                                                    g: Math.max((r.gold || 0) - a[1], 0),
                                                    at: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                                }
                                            }), s[n].gold = Math.max((r.gold || 0) - a[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(F.o)(a[1]), " gold from ").concat(r.name))
                                        }
                                        t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                                    }
                                })), s.sort((function(e, t) {
                                    return t.gold - e.gold
                                }));
                                for (var l = 0, c = 0; c < s.length; c++) s[c].place = c + 1, l += Number(s[c].gold), r && s[c].gold >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(A(s)) : t.setState({
                                    players: s,
                                    totalGold: l
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var a = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                g: e.gold,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: a
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/gold/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, a, n) {
                        var r = this,
                            o = [].concat(A(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                info: n
                            }]),
                            s = Array.from(new Set(o.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        s.length > 15 && s.splice(0, 1), this.setState({
                            alerts: s
                        }, (function() {
                            return r.scrollToBottom()
                        }))
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        this.alertContainer.scrollTop = this.alertContainer.scrollHeight
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "blockUser",
                    value: function() {
                        var e = this.state.userToBlock,
                            t = JSON.parse(JSON.stringify(this.state.players)),
                            a = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            n = t.length; - 1 !== a && (n = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return L(L({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser(this.props.host.id, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? r.a.createElement("div", {
                            className: E.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundImage: "url(".concat(I.a.basic.castleTile, ")"),
                                backgroundSize: 74.5
                            }
                        }, r.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(x.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(F.o)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), r.a.createElement("div", {
                            className: E.a.hostRegularBody
                        }, r.a.createElement(_.a, {
                            data: this.state.players,
                            keyAccessor: function(e) {
                                return e.name
                            },
                            start: function(e) {
                                return {
                                    x: -60,
                                    y: 12.5 * (e.place - 1)
                                }
                            },
                            enter: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 1e3,
                                        ease: d.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: d.a
                                    }
                                }
                            },
                            leave: function() {
                                return {
                                    x: [-60],
                                    timing: 1e3
                                }
                            }
                        }, (function(t) {
                            return r.a.createElement("div", {
                                className: h()(j.a.left, j.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    n = t.data,
                                    o = t.state,
                                    s = o.x,
                                    i = o.y;
                                return r.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === n.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(i, "vh)")
                                    },
                                    className: j.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: n.name
                                        })
                                    }
                                }, r.a.createElement("div", {
                                    className: j.a.standingInside
                                }, r.a.createElement(u.Textfit, {
                                    className: j.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(F.D)("5vw")
                                }, n.place), r.a.createElement("div", {
                                    className: j.a.superPlaceText
                                }, Object(F.h)(n.place)), r.a.createElement(S.a, {
                                    name: n.blook,
                                    className: j.a.blookBox
                                }), r.a.createElement(u.Textfit, {
                                    className: j.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(F.D)("4vw")
                                }, n.name), r.a.createElement("div", {
                                    className: j.a.goldContainer
                                }, r.a.createElement(u.Textfit, {
                                    className: j.a.goldText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(F.D)("5vw")
                                }, n.gold < 1e4 ? Object(F.o)(n.gold) : Object(F.v)(n.gold)), r.a.createElement("img", {
                                    src: I.a.basic.gold,
                                    alt: "Gold",
                                    className: j.a.goldIcon,
                                    draggable: !1
                                }))))
                            })))
                        })), r.a.createElement("div", {
                            className: j.a.chatroom
                        }, r.a.createElement("div", {
                            className: h()(j.a.chatroomInside, j.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return r.a.createElement(w.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : r.a.createElement("div", {
                            className: j.a.noAlerts
                        }, r.a.createElement("i", {
                            className: h()(j.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), r.a.createElement("div", {
                            className: j.a.noAlertsText
                        }, "Waiting To Party...")))), r.a.createElement("div", {
                            className: j.a.totalGoldContainer
                        }, r.a.createElement("div", {
                            className: j.a.totalGoldInside
                        }, r.a.createElement("div", {
                            className: j.a.totalGoldText
                        }, Object(F.o)(this.state.totalGold)), r.a.createElement("img", {
                            src: I.a.basic.gold,
                            alt: "Gold",
                            className: j.a.totalGoldIcon,
                            draggable: !1
                        })))), this.state.userToBlock ? r.a.createElement(k.a, {
                            text: "Remove ".concat(this.state.userToBlock, " from the game?"),
                            buttonOne: {
                                text: "Yes",
                                click: this.blockUser,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        userToBlock: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && M(t.prototype, a), n && M(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            Y.propTypes = {
                host: l.a.object,
                firebase: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: b.b,
                    deleteHost: v.d,
                    setMuted: g.a
                }, e)
            }))(Object(z.d)(Y)))
        },
        le2p: function(e, t, a) {
            var n = a("DRyJ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        mgm6: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return H
            }));
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("Ty5D"),
                l = a("H1WH"),
                c = a("17x9"),
                u = a.n(c),
                f = a("TSYQ"),
                _ = a.n(f),
                d = a("yiF6"),
                p = a("ZrUs"),
                h = a("XTAU"),
                m = a("z49m"),
                y = a.n(m),
                g = a("Xst1"),
                b = a.n(g),
                v = a("Rnav"),
                x = a("0oXL"),
                w = a("FVRk"),
                C = a("4Zpe"),
                k = a("WTww"),
                O = a("+fLB"),
                E = a("E8Bj"),
                T = a("74sb"),
                j = {
                    "Old Boot": {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    Waffle: {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    "Two of Spades": {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    Jellyfish: {
                        rarity: "Easy One",
                        minWeight: 10,
                        maxWeight: 25,
                        tiers: ["D", "C", "B"]
                    },
                    Clownfish: {
                        rarity: "Easy One",
                        minWeight: 20,
                        maxWeight: 45,
                        tiers: ["D", "C", "B"]
                    },
                    Goldfish: {
                        rarity: "Easy One",
                        minWeight: 30,
                        maxWeight: 65,
                        tiers: ["D", "C", "B"]
                    },
                    Frog: {
                        rarity: "Easy One",
                        minWeight: 50,
                        maxWeight: 100,
                        tiers: ["D", "C", "B"]
                    },
                    "Blizzard Clownfish": {
                        rarity: "Great Catch",
                        minWeight: 75,
                        maxWeight: 125,
                        tiers: ["D", "C", "B"]
                    },
                    Turtle: {
                        rarity: "Great Catch",
                        minWeight: 100,
                        maxWeight: 150,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Cat: {
                        rarity: "Great Catch",
                        minWeight: 100,
                        maxWeight: 200,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Lovely Frog": {
                        rarity: "Great Catch",
                        minWeight: 150,
                        maxWeight: 350,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Lucky Frog": {
                        rarity: "Great Catch",
                        minWeight: 200,
                        maxWeight: 400,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Poison Dart Frog": {
                        rarity: "Great Catch",
                        minWeight: 250,
                        maxWeight: 750,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Seal: {
                        rarity: "Rare Find",
                        minWeight: 500,
                        maxWeight: 1e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Walrus: {
                        rarity: "Rare Find",
                        minWeight: 700,
                        maxWeight: 2200,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Fairy: {
                        rarity: "Rare Find",
                        minWeight: 1500,
                        maxWeight: 2500,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Crab: {
                        rarity: "Rare Find",
                        minWeight: 1e3,
                        maxWeight: 3e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Pufferfish: {
                        rarity: "Rare Find",
                        minWeight: 2e3,
                        maxWeight: 4e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Blobfish: {
                        rarity: "Rare Find",
                        minWeight: 3e3,
                        maxWeight: 5e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Rainbow Jellyfish": {
                        rarity: "Epic Grab",
                        minWeight: 7e3,
                        maxWeight: 1e4,
                        tiers: ["C", "B", "A"]
                    },
                    Octopus: {
                        rarity: "Epic Grab",
                        minWeight: 1e4,
                        maxWeight: 15e3,
                        tiers: ["C", "B", "A"]
                    },
                    "Pirate Pufferfish": {
                        rarity: "Epic Grab",
                        minWeight: 12e3,
                        maxWeight: 2e4,
                        tiers: ["C", "B", "A"]
                    },
                    "Donut Blobfish": {
                        rarity: "Epic Grab",
                        minWeight: 13e3,
                        maxWeight: 25e3,
                        tiers: ["C", "B", "A"]
                    },
                    "Crimson Octopus": {
                        rarity: "Epic Grab",
                        minWeight: 15e3,
                        maxWeight: 3e4,
                        tiers: ["B", "A"]
                    },
                    Narwhal: {
                        rarity: "Catch of the Day",
                        minWeight: 25e3,
                        maxWeight: 5e4,
                        tiers: ["B", "A", "S"]
                    },
                    "Baby Shark": {
                        rarity: "Catch of the Day",
                        minWeight: 5e4,
                        maxWeight: 1e5,
                        tiers: ["B", "A", "S"]
                    },
                    Megalodon: {
                        rarity: "Catch of the Day",
                        minWeight: 25e4,
                        maxWeight: 5e5,
                        tiers: ["B", "A", "S"]
                    },
                    Alien: {
                        rarity: "Angler's Legend",
                        minWeight: 5e5,
                        maxWeight: 7e5,
                        tiers: ["A", "S"]
                    },
                    "Rainbow Narwhal": {
                        rarity: "Angler's Legend",
                        minWeight: 75e4,
                        maxWeight: 1e6,
                        tiers: ["A", "S", "S+"]
                    },
                    UFO: {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Santa Claus": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Swamp Monster": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Red Astronaut": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Spooky Pumpkin": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    Dragon: {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Tim the Alien": {
                        rarity: "Angler's Legend",
                        minWeight: 15e5,
                        maxWeight: 25e5,
                        tiers: ["A", "S", "S+"]
                    }
                },
                S = [
                    [
                        ["Old Boot", 15],
                        ["Waffle", 5],
                        ["Two of Spades", 5],
                        ["Jellyfish", 15],
                        ["Clownfish", 15],
                        ["Goldfish", 10],
                        ["Frog", 15],
                        ["Blizzard Clownfish", 5],
                        ["Turtle", 5],
                        ["Cat", 5],
                        ["Lovely Frog", 3],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 1]
                    ],
                    [
                        ["Old Boot", 3],
                        ["Waffle", 1],
                        ["Two of Spades", 1],
                        ["Jellyfish", 10],
                        ["Clownfish", 5],
                        ["Goldfish", 3],
                        ["Frog", 10],
                        ["Blizzard Clownfish", 7],
                        ["Turtle", 5],
                        ["Cat", 3],
                        ["Lovely Frog", 6],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 7],
                        ["Seal", 7],
                        ["Walrus", 7],
                        ["Fairy", 2],
                        ["Crab", 10],
                        ["Pufferfish", 7],
                        ["Blobfish", 5]
                    ],
                    [
                        ["Jellyfish", 5],
                        ["Frog", 5],
                        ["Blizzard Clownfish", 2],
                        ["Turtle", 1],
                        ["Cat", 1],
                        ["Lovely Frog", 1],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 2],
                        ["Seal", 5],
                        ["Walrus", 5],
                        ["Fairy", 2],
                        ["Crab", 10],
                        ["Pufferfish", 10],
                        ["Blobfish", 10],
                        ["Rainbow Jellyfish", 8],
                        ["Octopus", 15],
                        ["Pirate Pufferfish", 6],
                        ["Donut Blobfish", 6],
                        ["Crimson Octopus", 5]
                    ],
                    [
                        ["Seal", 3],
                        ["Walrus", 3],
                        ["Fairy", 2],
                        ["Crab", 7],
                        ["Pufferfish", 8],
                        ["Blobfish", 8],
                        ["Rainbow Jellyfish", 10],
                        ["Octopus", 15],
                        ["Pirate Pufferfish", 8],
                        ["Donut Blobfish", 8],
                        ["Crimson Octopus", 7],
                        ["Narwhal", 8],
                        ["Baby Shark", 7],
                        ["Megalodon", 6]
                    ],
                    [
                        ["Crab", 1],
                        ["Pufferfish", 2],
                        ["Blobfish", 3],
                        ["Rainbow Jellyfish", 6],
                        ["Octopus", 12],
                        ["Pirate Pufferfish", 8],
                        ["Donut Blobfish", 8],
                        ["Crimson Octopus", 10],
                        ["Narwhal", 17],
                        ["Baby Shark", 14],
                        ["Megalodon", 12],
                        ["Alien", 1.2],
                        ["Rainbow Narwhal", 4.25],
                        ["UFO", 1],
                        ["Santa Claus", .1],
                        ["Swamp Monster", .1],
                        ["Red Astronaut", .1],
                        ["Spooky Pumpkin", .1],
                        ["Dragon", .1],
                        ["Tim the Alien", .05]
                    ]
                ],
                I = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"],
                N = a("qnYv");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function F(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function B() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var u = {};

                function f() {}

                function _() {}

                function d() {}
                var p = {};
                i(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    m = h && h(h(k([])));
                m && m !== t && a.call(m, r) && (p = m);
                var y = d.prototype = f.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == z(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = d, i(y, "constructor", d), i(d, "constructor", _), _.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), w(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    w(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function P(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function L(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            P(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            P(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function R(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function D(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = M(e);
                    if (t) {
                        var r = M(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return q(this, a)
                }
            }

            function q(e, t) {
                if (t && ("object" === z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return G(e)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var H = ["https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure1.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure2.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure3.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure4.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure5.svg"],
                W = [5, 7, 13, 15],
                U = {
                    Trash: "#995b3c",
                    "Easy One": "#ffffff",
                    "Great Catch": "#4bc22e",
                    "Rare Find": "#0a14fa",
                    "Epic Grab": "#be0000",
                    "Catch of the Day": "#ff910f",
                    "Angler's Legend": "#a335ee"
                },
                X = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && A(e, t)
                    }(u, e);
                    var t, a, n, o, s, c = D(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = c.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            stage: "",
                            isCast: !1,
                            castReady: !0,
                            claimReady: !1,
                            isHooked: !1,
                            fish: null,
                            weight: 0,
                            weight2: 0,
                            lure: 0,
                            party: "",
                            isFrenzy: !1,
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefAction = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.here = !0, t.waiting = !1, t.nextReady = !1, t.correctCounter = 0, t.lureCounter = 0, t.safe = !1, t.msg = {}, t.isReading = !1, t.onKeyPress = t.onKeyPress.bind(G(t)), t.onCast = t.onCast.bind(G(t)), t.onHook = t.onHook.bind(G(t)), t.onAnswer = t.onAnswer.bind(G(t)), t.answerNext = t.answerNext.bind(G(t)), t.randomQ = t.randomQ.bind(G(t)), t.claimFish = t.claimFish.bind(G(t)), t.readQuestion = t.readQuestion.bind(G(t)), t
                    }
                    return t = u, (a = [{
                        key: "componentDidMount",
                        value: (s = L(B().mark((function e() {
                            var t = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(T.c)(), document.addEventListener("keypress", this.onKeyPress), e.next = 6, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 6:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var a = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                weight: e.w || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, a), t.props.history.push("/play/fishing/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 10, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                                    case 10:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            e.val() && (t.safe && "Frenzy" !== e.val() ? t.safe = !1 : t.setState({
                                                party: t.state.party || "Frenzy" === e.val() ? t.state.party : e.val(),
                                                isFrenzy: t.state.isFrenzy || "Frenzy" === e.val()
                                            }, (function() {
                                                "Frenzy" === e.val() ? (clearTimeout(t.frenzyTimeout), t.frenzyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        isFrenzy: !1
                                                    })
                                                }), 2e4)) : t.partyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        party: ""
                                                    })
                                                }), 7100)
                                            })))
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.u)(), this.here = !1, clearTimeout(this.hookTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.lostTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.frenzyTimeout), clearTimeout(this.partyTimeout), document.removeEventListener("keypress", this.onKeyPress), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                        }
                    }, {
                        key: "onKeyPress",
                        value: function(e) {
                            13 === (e || window.event).keyCode && (!this.state.isCast && this.state.castReady ? this.onCast() : this.state.isHooked ? this.onHook() : this.state.claimReady && this.claimFish())
                        }
                    }, {
                        key: "onCast",
                        value: function() {
                            var e = this;
                            !this.state.isCast && this.state.castReady && (this.setState({
                                isCast: !0,
                                castReady: !1,
                                stage: ""
                            }), this.hookTimeout = setTimeout((function() {
                                e.setState({
                                    isHooked: !0
                                })
                            }), Object(T.r)(1e3, 2500) / (this.state.isFrenzy ? 3 : 1)))
                        }
                    }, {
                        key: "onHook",
                        value: function() {
                            this.state.isHooked && (this.setState({
                                isHooked: !1
                            }), this.correctCounter = 0, this.randomQ())
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    a = this.state.question.number;
                                t ? (this.correctCounter += 1, this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1) : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.nextReady = !0, this.setState({
                                    correct: t,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            var e = this;
                            if (this.nextReady && this.here)
                                if (this.nextReady = !1, this.state.correct && 1 === this.correctCounter) {
                                    var t = function(e) {
                                        for (var t = S[e], a = "", n = 100 * Math.random(), r = 0, o = 0; o < t.length; o++)
                                            if ((r += t[o][1]) >= n) {
                                                a = t[o][0];
                                                break
                                            } if (Object(T.r)(0, 201) < 1) return "Frenzy";
                                        var s = j[a],
                                            i = Object(T.r)(s.minWeight, s.maxWeight + 1),
                                            l = s.tiers[Math.round((i - s.minWeight) / (s.maxWeight - s.minWeight) * (s.tiers.length - 1))];
                                        return {
                                            name: a,
                                            rarity: s.rarity,
                                            weight: i,
                                            tier: l,
                                            isSpecial: I.includes(a) && Object(T.r)(0, 100) < 8
                                        }
                                    }(this.state.isFrenzy ? Math.min(this.state.lure + 1, 4) : this.state.lure);
                                    this.state.lure < 4 && this.lureCounter >= W[this.state.lure] && (this.lureCounter = 0, t = "Lure Upgrade"), this.setState({
                                        stage: "caught",
                                        isCast: !1,
                                        fish: t,
                                        claimReady: !1
                                    }, (function() {
                                        e.claimTimeout = setTimeout((function() {
                                            e.setState({
                                                claimReady: !0
                                            })
                                        }), 1600)
                                    }))
                                } else this.state.correct ? this.randomQ() : this.setState({
                                    stage: "lost",
                                    isCast: !1
                                }, (function() {
                                    e.lostTimeout = setTimeout((function() {
                                        e.setState({
                                            castReady: !0
                                        })
                                    }), 1e3)
                                }))
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.w)(t.answers)), this.setState({
                                    question: t,
                                    stage: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "claimFish",
                        value: function() {
                            if (this.state.claimReady) {
                                "Lure Upgrade" !== this.state.fish && (this.lureCounter += 1);
                                var e = ["Lure Upgrade", "Frenzy"].includes(this.state.fish) ? this.state.weight : this.state.weight + this.state.fish.weight,
                                    t = ["Lure Upgrade", "Frenzy"].includes(this.state.fish) ? this.state.weight2 : this.state.weight2 + this.state.fish.weight,
                                    a = {
                                        b: this.props.client.blook,
                                        w: e,
                                        f: "Lure Upgrade" === this.state.fish ? "Lure ".concat(this.state.lure + 1) : "Frenzy" === this.state.fish ? "Frenzy" : this.state.fish.name
                                    };
                                this.state.fish.isSpecial && (this.safe = !0, a.s = !0), this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: a
                                }), t !== e && (N.a.put("/api/users/suspend-me").catch((function(e) {
                                    console.error(e)
                                })), Object(T.u)(), window.location.reload()), this.setState({
                                    weight: e,
                                    weight2: t,
                                    claimReady: !1,
                                    lure: "Lure Upgrade" === this.state.fish ? this.state.lure + 1 : this.state.lure,
                                    castReady: !0,
                                    fish: null,
                                    stage: ""
                                })
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = L(B().mark((function e() {
                            var t, a = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, n) {
                                            var r = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                            e.includes("`*`") && (r = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(r), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), n()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, o, s;
                            if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return r.a.createElement(i.a, {
                                to: "/play"
                            });
                            var c = ["question", "feedback"].includes(this.state.stage);
                            return r.a.createElement("div", {
                                className: l.isMobile ? b.a.mBody : b.a.body
                            }, r.a.createElement(h.a, {
                                title: "Play Fishing Frenzy | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you catch fish by answering questions."
                            }), r.a.createElement(v.a, {
                                name: this.props.client.name,
                                rightText: "".concat(Object(T.o)(this.state.weight), " lbs"),
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), r.a.createElement("div", {
                                className: b.a.regularBody,
                                style: {
                                    overflow: "hidden"
                                }
                            }, r.a.createElement("div", {
                                className: _()(y.a.background, F({}, y.a.frenzyBackground, this.state.isFrenzy))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud1, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud2, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud3, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud4, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud5, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.cloud, y.a.cloud6, F({}, y.a.invis, c))
                            }), r.a.createElement("div", {
                                className: _()(y.a.wave1, (e = {}, F(e, y.a.wave1Frenzy, this.state.isFrenzy), F(e, y.a.invis, c), e)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.pillar1, F({}, y.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.pillar2, F({}, y.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.pier, F({}, y.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#fff" : null
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.pierBottom, F({}, y.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement(x.a, {
                                name: this.props.client.blook,
                                className: _()(y.a.blook, F({}, y.a.invis, c))
                            }), r.a.createElement("img", {
                                src: "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/fishingRod.svg",
                                alt: "Fishing Rod",
                                className: _()(y.a.fishingRod, F({}, y.a.invis, c)),
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: _()(y.a.string, (t = {}, F(t, y.a.stringOut, this.state.isCast), F(t, y.a.invis, c), t))
                            }), r.a.createElement("img", {
                                src: H[this.state.lure],
                                alt: "Lure",
                                className: _()(y.a.lure, (a = {}, F(a, y.a.lureOut, this.state.isCast), F(a, y.a.invis, c), a)),
                                draggable: !1
                            }), "caught" === this.state.stage ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: _()(b.a.modal, y.a.fishModal, F({}, y.a.fishModalButton, this.state.claimReady)),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.claimReady ? this.claimFish : function() {}
                            }), r.a.createElement("div", {
                                className: y.a.caughtContainer
                            }, "Lure Upgrade" === this.state.fish ? r.a.createElement("div", {
                                className: y.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: y.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: y.a.rarityText,
                                style: {
                                    color: "#00ccff"
                                }
                            }, "Upgrade"), r.a.createElement("div", {
                                className: y.a.fishText
                            }, "New Lure! (Rank ".concat(this.state.lure + 2, ")"))), r.a.createElement("div", {
                                className: y.a.lureText
                            }, "You can now catch better fish!")) : "Frenzy" === this.state.fish ? r.a.createElement("div", {
                                className: y.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: y.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: y.a.rarityText,
                                style: {
                                    color: "#9ccfe7"
                                }
                            }, "Special"), r.a.createElement("div", {
                                className: y.a.fishText
                            }, "Fishing Frenzy!")), r.a.createElement("div", {
                                className: y.a.lureText
                            }, "Faster and better catches for all!")) : r.a.createElement("div", {
                                className: y.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: y.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: y.a.rarityText,
                                style: {
                                    color: U[this.state.fish.rarity]
                                }
                            }, "".concat(this.state.fish.rarity).concat(this.state.fish.isSpecial ? " +" : "")), r.a.createElement("div", {
                                className: y.a.fishText
                            }, this.state.fish.name)), r.a.createElement("div", {
                                className: y.a.caughtGroup
                            }, this.state.fish.isSpecial ? r.a.createElement("div", {
                                className: y.a.specialText
                            }, "Distraction!") : r.a.createElement("div", {
                                className: y.a.tierText
                            }, r.a.createElement("span", {
                                className: y.a.tier
                            }, this.state.fish.tier), " Tier"), r.a.createElement("div", {
                                className: y.a.weightText
                            }, "".concat(Object(T.o)(this.state.fish.weight), " lbs"))))), "Lure Upgrade" === this.state.fish ? r.a.createElement("div", {
                                className: y.a.lureUpgrade
                            }, r.a.createElement("div", {
                                className: y.a.lureUpgradeInside
                            }, r.a.createElement("img", {
                                src: H[this.state.lure + 1],
                                alt: "Lure",
                                className: y.a.lureUpgradeImg,
                                draggable: !1
                            }))) : "Frenzy" === this.state.fish ? r.a.createElement("div", {
                                className: y.a.lureUpgrade,
                                style: {
                                    background: "linear-gradient(to bottom right, #ffffc2 15%, #f5a9cb 40%, #9ccfe7 65%, #9b97d6 90%)"
                                }
                            }, r.a.createElement("div", {
                                className: y.a.lureUpgradeInside
                            }, r.a.createElement("i", {
                                className: _()(y.a.frenzyIcon, "fas fa-fish")
                            }))) : this.state.fish.isSpecial ? r.a.createElement("div", {
                                className: y.a.lureUpgrade,
                                style: {
                                    backgroundColor: "#a335ee"
                                }
                            }, r.a.createElement("div", {
                                className: y.a.lureUpgradeInside
                            }, r.a.createElement(x.a, {
                                name: this.state.fish.name,
                                className: y.a.specialFish
                            }))) : r.a.createElement(x.a, {
                                name: this.state.fish.name,
                                className: y.a.fish
                            }), r.a.createElement("div", {
                                className: y.a.claimText
                            }, "Click Anywhere to Claim Fish")) : null, r.a.createElement("div", {
                                className: _()(y.a.wave2, (n = {}, F(n, y.a.wave2Frenzy, this.state.isFrenzy), F(n, y.a.invis, c), n)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.wave3, (o = {}, F(o, y.a.wave3Frenzy, this.state.isFrenzy), F(o, y.a.invis, c), o)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: _()(y.a.wave4, (s = {}, F(s, y.a.wave4Frenzy, this.state.isFrenzy), F(s, y.a.invis, c), s)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), !this.state.isCast && this.state.castReady || this.state.isHooked ? r.a.createElement("div", {
                                className: y.a.pageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.isHooked ? this.onHook : this.onCast
                            }) : null, this.state.isHooked ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: y.a.hookedText
                            }, r.a.createElement("div", {
                                className: y.a.hookedTextInside
                            }, "Hooked!", r.a.createElement("div", {
                                className: y.a.hookedSmallText
                            }, "Click Anywhere to Reel"))), r.a.createElement("div", {
                                className: y.a.hookedOverlay
                            })) : "lost" === this.state.stage ? r.a.createElement("div", {
                                className: y.a.lostText
                            }, r.a.createElement("div", {
                                className: y.a.lostTextInside
                            }, "Fish Lost!", r.a.createElement("div", {
                                className: y.a.hookedSmallText
                            }, "Click to Cast Again"))) : null), "question" === this.state.stage ? r.a.createElement("div", {
                                className: 0 === this.correctCounter ? y.a.questionContainer : null
                            }, r.a.createElement(w.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            })) : "feedback" === this.state.stage ? r.a.createElement("div", {
                                className: y.a.feedbackContainer
                            }, r.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, !this.state.isCast && this.state.castReady ? r.a.createElement("div", {
                                className: y.a.claimText
                            }, "Click Anywhere to Cast") : null, this.state.isFrenzy ? r.a.createElement("div", {
                                className: y.a.frenzyText
                            }, "Frenzy!") : null, this.state.party ? r.a.createElement(k.a, {
                                fish: this.state.party
                            }) : null)
                        }
                    }]) && R(t.prototype, a), n && R(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(r.a.Component);
            X.propTypes = {
                history: u.a.object,
                client: u.a.object,
                firebase: u.a.object,
                deleteClient: u.a.func.isRequired,
                setGoldFinal: u.a.func.isRequired
            };
            t.a = Object(E.c)(Object(i.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: p.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(O.d)(X))))
        },
        oT7l: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("Ty5D"),
                l = a("74sb");

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(e, t) {
                if (t && ("object" === c(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && _(e, t)
                }(o, e);
                var t, a, n, r = d(o);

                function o() {
                    return u(this, o), r.apply(this, arguments)
                }
                return t = o, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        Object(l.n)(), window.location.href = "".concat("https://id.blooket.com", "/forgot")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && f(t.prototype, a), n && f(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), o
            }(r.a.Component);
            m.propTypes = {};
            t.a = Object(i.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(m))
        },
        pLIe: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("VgyX"),
                f = a("Xst1"),
                _ = a.n(f),
                d = a("ZVoO"),
                p = a("XTAU"),
                h = a("LHn/"),
                m = a("74sb"),
                y = a("+fLB"),
                g = a("qnYv");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function w(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = E(e);
                    if (t) {
                        var r = E(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return O(this, a)
                }
            }

            function O(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && C(e, t)
                }(s, e);
                var t, a, n, o = k(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var a = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(n) {
                                        var r = n || {};
                                        Object.entries(r).forEach((function(e) {
                                            var t = v(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                o = {};
                                            if (r.i)
                                                if (Array.isArray(r.i))
                                                    for (var s = 0; s < r.i.length; s++) {
                                                        var i = r.i[s];
                                                        i && (o[s] = i)
                                                    } else o = r.i;
                                                else o = {};
                                            var l = {};
                                            if (r.c)
                                                if (Array.isArray(r.c))
                                                    for (var c = 0; c < r.c.length; c++) {
                                                        var u = r.c[c];
                                                        u && (l[c] = u)
                                                    } else l = r.c;
                                                else l = {};
                                            a[n] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && g.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        gold: isNaN(e.gold) ? 0 : Math.round(Number(e.gold)),
                                                        corrects: a[e.name] ? a[e.name].corrects : {},
                                                        incorrects: a[e.name] ? a[e.name].incorrects : {}
                                                    }
                                                })),
                                                settings: t.settings,
                                                set: t.hostName,
                                                setId: t.setId
                                            }).then((function(t) {
                                                e.setState({
                                                    historyId: t.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(e) {
                                                console.error(e)
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
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? r.a.createElement("div", {
                            className: _.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "url(".concat(h.a.basic.castleTile, ")"),
                                backgroundSize: 74.5
                            }
                        }, r.a.createElement(p.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? r.a.createElement(d.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(m.o)(e.gold), " Gold")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "royal"
                        }) : null) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && w(t.prototype, a), n && w(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            T.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: u.d
                }, e)
            }))(Object(y.d)(T)))
        },
        rKKi: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__weightText___3Tl6Y-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                weightText: "styles__weightText___3Tl6Y-camelCase"
            }
        },
        uXkI: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("HbJ1"),
                f = a("VgyX"),
                _ = a("kQZX"),
                d = a("XTAU"),
                p = a("Xst1"),
                h = a.n(p),
                m = a("E5Gn"),
                y = a("+fLB"),
                g = a("nTIR");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return C(this, a)
                }
            }

            function C(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && x(e, t)
                }(s, e);
                var t, a, n, o = w(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t.audio = new Audio(m.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            e.skip()
                        }), 24500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/fishing")
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? r.a.createElement("div", {
                            className: h.a.body
                        }, r.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(_.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), r.a.createElement("div", {
                            className: h.a.regularBody
                        }, r.a.createElement(g.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), r.a.createElement("div", {
                            className: h.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip")) : r.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && v(t.prototype, a), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            E.propTypes = {
                host: l.a.object,
                id: l.a.string,
                history: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: f.d,
                    setMuted: u.a
                }, e)
            }))(Object(y.d)(E)))
        },
        xBVA: function(e, t, a) {
            var n = a("Ry/P");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        xlKT: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___2UjpZ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__topFolderButton___2OaKp-camelCase{height:55px;width:55px;margin:0 10px;background-color:#0bc2cf;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__topFolderButton___2OaKp-camelCase:hover{filter:brightness(110%)}.styles__topFolderIcon___1Dpyv-camelCase{text-shadow:0 1.5px rgba(0,0,0,.2);font-size:26px;color:#fff}.styles__searchBar___1BqiF-camelCase{height:55px;margin:0 10px;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding:0 10px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center}.styles__searchBar___1BqiF-camelCase,.styles__searchIcon___oR83L-camelCase{font-size:20px;color:#3a3a3a}.styles__searchIcon___oR83L-camelCase{width:26px;text-align:center;opacity:.8;margin-right:7px}.styles__searchInput___114hs-camelCase{height:30px;width:calc(100% - 33px);font-size:18px;color:#3a3a3a;font-family:Nunito,sans-serif;border:none;outline:none}.styles__searchInput___114hs-camelCase:focus>.styles__searchIcon___oR83L-camelCase{color:#0bc2cf}.styles__container___1zgv7-camelCase{display:grid;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5%}.styles__mergeContainer___3MKS8-camelCase{width:265px;min-height:392px;height:100%;display:flex;flex-direction:column;justify-content:space-between;font-family:Nunito,sans-serif;color:#3a3a3a;overflow:hidden;position:absolute;background-color:#fff}.styles__mergeName___32Vqt-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 0;word-wrap:break-word}.styles__mergeButton___jcOsB-camelCase{width:100%;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:23px;font-weight:700;opacity:.85;transition:.15s}.styles__mergeButton___jcOsB-camelCase:focus,.styles__mergeButton___jcOsB-camelCase:hover{opacity:1}.styles__setContainer___1vhA_-camelCase{width:265px;min-height:392px;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__setImageFiller___2sqqV-camelCase{background-color:#333}.styles__coverImage___2SFsw-camelCase,.styles__setImageFiller___2sqqV-camelCase{width:100%;height:180px;border-top-left-radius:7px;border-top-right-radius:7px}.styles__coverImage___2SFsw-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:auto;-o-object-fit:cover;object-fit:cover}.styles__setFillerContainer___2lXXr-camelCase{width:100%;height:180px;background-color:#0bc2cf;border-top-left-radius:7px;border-top-right-radius:7px;display:flex;justify-content:center;align-items:center}.styles__setFillerText___3UUcD-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey}.styles__removeFromFolder___2SowU-camelCase,.styles__setFillerText___3UUcD-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__removeFromFolder___2SowU-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);height:35px;width:35px;border-radius:4px;position:absolute;top:5px;left:5px;color:#3a3a3a;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:26px;transition:.15s}.styles__removeFromFolder___2SowU-camelCase:hover{transform:scale(.95)}.styles__viewButton___1bdQ5-camelCase{width:25px;position:absolute;top:147px;left:10px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;font-size:16px;display:flex;justify-content:center;align-items:center;text-decoration:none}.styles__setQuestionsContainer___1tdgQ-camelCase,.styles__viewButton___1bdQ5-camelCase{background-color:rgba(0,0,0,.6);height:25px;border-radius:4px}.styles__setQuestionsContainer___1tdgQ-camelCase{width:145px;margin:-33px 10px 8px auto}.styles__setQuestionsText___LouFO-camelCase{font-size:18px;line-height:25px;margin:auto;text-align:center;color:#fff}.styles__setHeader___3cQBW-camelCase,.styles__setQuestionsText___LouFO-camelCase{font-family:Nunito,sans-serif}.styles__setHeader___3cQBW-camelCase{font-size:24px;font-weight:700;margin:10px 5% 5px;color:#3a3a3a;line-height:27px;word-wrap:break-word}.styles__setSpacer___22caa-camelCase{width:100%;height:15px;flex-grow:2}.styles__setPlays___1zTiS-camelCase{font-size:18px;font-weight:700;margin:5px 5% 0}.styles__setLastEdit___2QVio-camelCase,.styles__setPlays___1zTiS-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__setLastEdit___2QVio-camelCase{font-size:16px;margin:2px 5% 5px}.styles__setHorizontalDivider___1MX_i-camelCase{width:100%;height:3px;background-color:#e0e0e0}.styles__setVerticalDivider___SXjSn-camelCase{width:3px;height:40px;background-color:#e0e0e0}.styles__setBottomContainer___3m_ys-camelCase{width:100%;display:flex;flex-direction:row}.styles__starIcon___GFtn3-camelCase{font-size:23px;color:#3a3a3a;line-height:40px;height:40px;width:calc(33.33333% - 2px);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none}.styles__starIcon___GFtn3-camelCase:focus,.styles__starIcon___GFtn3-camelCase:hover{color:#0bc2cf}.styles__setPlayContainer___2MStR-camelCase{width:100%}.styles__playButton___2x7Vv-camelCase,.styles__setPlayContainer___2MStR-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__playButton___2x7Vv-camelCase{width:calc(50% - 1.5px);cursor:pointer;outline:none;color:#3a3a3a}.styles__playButton___2x7Vv-camelCase:focus,.styles__playButton___2x7Vv-camelCase:hover{color:#0bc2cf}.styles__playIcon___2kOO5-camelCase{font-size:20px;width:24px;text-align:center;transition:all .15s linear}.styles__hostButton___3mDra-camelCase{margin:auto}.styles__hostButtonInside___2Vh25-camelCase{width:100px;height:26px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#fff;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__setPlayText___5tJr9-camelCase{font-family:Nunito,sans-serif;line-height:51px;font-size:23px;font-weight:700;padding-left:9px;transition:all .15s linear}.styles__addSetButton___13jj6-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;color:#fff;font-size:110px;display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:.25;transition:.15s}.styles__addSetButton___13jj6-camelCase:hover{opacity:.35}.styles__mergeSetButton___iQrsC-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:0;transition:.2s}.styles__mergeSetButton___iQrsC-camelCase:hover{opacity:.15}.styles__nothingContainer___1bY81-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background-color:rgba(0,0,0,.1);border:2px solid #3a3a3a;border-radius:7px;margin:50px auto;max-width:80%}.styles__nothingHeader___2YDJb-camelCase{font-size:30px;font-weight:700;color:#3a3a3a}.styles__nothingButtonsRow___3ouJS-camelCase{display:flex;flex-flow:row wrap;justify-content:center;margin:10px 0}.styles__nothingButton___3k3Yn-camelCase{margin:10px 20px}.styles__nothingButtonInside___1J9_--camelCase{height:35px;font-size:26px;padding:0 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__nothingIcon___lZYev-camelCase{font-size:24px;margin-right:10px}.styles__modal___2qAPA-camelCase{display:block;position:fixed;z-index:15;left:0;top:55px;width:100%;height:calc(100% - 55px);overflow:auto;background-color:rgba(0,0,0,.6)}.styles__folderHolder___3nOFr-camelCase{display:flex;flex-flow:row wrap;width:calc(90% + 14px);margin:0 auto 15px;position:relative;z-index:4}.styles__folderButton___1M9h--camelCase{margin:7px}.styles__folderButtonInside___1VU0S-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;min-width:150px;padding:0 10px;height:30px;font-size:20px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__folderButtonIcon___cRPAF-camelCase{margin-right:10px;font-size:22px}.styles__folderButtonDropdown___3mTSK-camelCase{margin-left:auto;width:25px;height:25px;background-color:rgba(0,0,0,.3);border-radius:5px;display:flex;justify-content:center;align-items:center;position:relative;opacity:0;outline:none;transition:.2s}.styles__folderButtonDropdownIcon___1TtVQ-camelCase{font-size:12px;color:#fff}.styles__folderButtonInside___1VU0S-camelCase:hover .styles__folderButtonDropdown___3mTSK-camelCase{opacity:1}.styles__folderButtonDropdownMenu___szpD0-camelCase{position:absolute;min-width:100px;right:0;top:calc(100% - 3px);transition:.2s;transform:rotateX(-90deg);transform-origin:top center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__folderButtonDropdown___3mTSK-camelCase:focus>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:hover>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase[focus-within]>.styles__folderButtonDropdownMenu___szpD0-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdown___3mTSK-camelCase:focus-within>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:focus>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:hover>.styles__folderButtonDropdownMenu___szpD0-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdownOption___2B44q-camelCase{width:100%;background-color:#fff;font-size:14px;color:#3a3a3a;height:22px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__folderButtonDropdownOption___2B44q-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__folderButtonDropdownOptionIcon___1mHwa-camelCase{font-size:12px;margin-right:7px;opacity:.8}.styles__moveText___SIQFv-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__locationsHolder___S7Fs7-camelCase{height:250px;width:100%;padding:10px;border:2px solid #666;box-sizing:border-box;margin:0 auto;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;align-items:center;overflow-y:auto}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar{width:10px}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__noFoldersText___1JUyI-camelCase{font-size:20px}.styles__locationFolderButton___3t-Af-camelCase{margin:7px auto;width:90%}.styles__locationFolderButtonInside___Miiry-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:100%;padding:0 10px;height:40px;font-size:24px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__locationFolderButtonIcon___2uxJh-camelCase{margin-right:10px;font-size:22px}.styles__moveLocation___F8Ilp-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}@media only screen and (max-width:850px){.styles__container___1zgv7-camelCase{justify-content:center}}", ""]), t.locals = {
                header: "styles__header___2UjpZ-camelCase",
                topFolderButton: "styles__topFolderButton___2OaKp-camelCase",
                topFolderIcon: "styles__topFolderIcon___1Dpyv-camelCase",
                searchBar: "styles__searchBar___1BqiF-camelCase",
                searchIcon: "styles__searchIcon___oR83L-camelCase",
                searchInput: "styles__searchInput___114hs-camelCase",
                container: "styles__container___1zgv7-camelCase",
                mergeContainer: "styles__mergeContainer___3MKS8-camelCase",
                mergeName: "styles__mergeName___32Vqt-camelCase",
                mergeButton: "styles__mergeButton___jcOsB-camelCase",
                setContainer: "styles__setContainer___1vhA_-camelCase",
                setImageFiller: "styles__setImageFiller___2sqqV-camelCase",
                coverImage: "styles__coverImage___2SFsw-camelCase",
                setFillerContainer: "styles__setFillerContainer___2lXXr-camelCase",
                setFillerText: "styles__setFillerText___3UUcD-camelCase",
                removeFromFolder: "styles__removeFromFolder___2SowU-camelCase",
                viewButton: "styles__viewButton___1bdQ5-camelCase",
                setQuestionsContainer: "styles__setQuestionsContainer___1tdgQ-camelCase",
                setQuestionsText: "styles__setQuestionsText___LouFO-camelCase",
                setHeader: "styles__setHeader___3cQBW-camelCase",
                setSpacer: "styles__setSpacer___22caa-camelCase",
                setPlays: "styles__setPlays___1zTiS-camelCase",
                setLastEdit: "styles__setLastEdit___2QVio-camelCase",
                setHorizontalDivider: "styles__setHorizontalDivider___1MX_i-camelCase",
                setVerticalDivider: "styles__setVerticalDivider___SXjSn-camelCase",
                setBottomContainer: "styles__setBottomContainer___3m_ys-camelCase",
                starIcon: "styles__starIcon___GFtn3-camelCase",
                setPlayContainer: "styles__setPlayContainer___2MStR-camelCase",
                playButton: "styles__playButton___2x7Vv-camelCase",
                playIcon: "styles__playIcon___2kOO5-camelCase",
                hostButton: "styles__hostButton___3mDra-camelCase",
                hostButtonInside: "styles__hostButtonInside___2Vh25-camelCase",
                setPlayText: "styles__setPlayText___5tJr9-camelCase",
                addSetButton: "styles__addSetButton___13jj6-camelCase",
                mergeSetButton: "styles__mergeSetButton___iQrsC-camelCase",
                nothingContainer: "styles__nothingContainer___1bY81-camelCase",
                nothingHeader: "styles__nothingHeader___2YDJb-camelCase",
                nothingButtonsRow: "styles__nothingButtonsRow___3ouJS-camelCase",
                nothingButton: "styles__nothingButton___3k3Yn-camelCase",
                nothingButtonInside: "styles__nothingButtonInside___1J9_--camelCase",
                nothingIcon: "styles__nothingIcon___lZYev-camelCase",
                modal: "styles__modal___2qAPA-camelCase",
                folderHolder: "styles__folderHolder___3nOFr-camelCase",
                folderButton: "styles__folderButton___1M9h--camelCase",
                folderButtonInside: "styles__folderButtonInside___1VU0S-camelCase",
                folderButtonIcon: "styles__folderButtonIcon___cRPAF-camelCase",
                folderButtonDropdown: "styles__folderButtonDropdown___3mTSK-camelCase",
                folderButtonDropdownIcon: "styles__folderButtonDropdownIcon___1TtVQ-camelCase",
                folderButtonDropdownMenu: "styles__folderButtonDropdownMenu___szpD0-camelCase",
                folderButtonDropdownOption: "styles__folderButtonDropdownOption___2B44q-camelCase",
                folderButtonDropdownOptionIcon: "styles__folderButtonDropdownOptionIcon___1mHwa-camelCase",
                moveText: "styles__moveText___SIQFv-camelCase",
                locationsHolder: "styles__locationsHolder___S7Fs7-camelCase",
                noFoldersText: "styles__noFoldersText___1JUyI-camelCase",
                locationFolderButton: "styles__locationFolderButton___3t-Af-camelCase",
                locationFolderButtonInside: "styles__locationFolderButtonInside___Miiry-camelCase",
                locationFolderButtonIcon: "styles__locationFolderButtonIcon___2uxJh-camelCase",
                moveLocation: "styles__moveLocation___F8Ilp-camelCase"
            }
        },
        yiF6: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a("L+3L");

            function r(e, t, a) {
                return {
                    type: n.a,
                    corrects: e,
                    incorrects: t,
                    standing: a
                }
            }
        },
        z49m: function(e, t, a) {
            var n = a("NV8W");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        }
    }
]);