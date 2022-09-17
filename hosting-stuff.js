(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "+IZH": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("GC+6"),
                f = r("ZrUs"),
                h = r("Rnav"),
                d = r("XTAU"),
                y = r("mlez"),
                m = r.n(y),
                b = r("Xst1"),
                v = r.n(b),
                g = r("zYB6"),
                _ = r("74sb"),
                w = r("+fLB");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
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
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function E(t) {
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
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = E, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

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

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(r), !0).forEach((function(e) {
                        E(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function E(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function T(t, e) {
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
                    if ("string" == typeof t) return S(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function C(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function q(t) {
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
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function I(t) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var B = ["Way to Go!", "Nice Work!", "Good Job!", "Keep It Up!", "Well Done!", "Rock On!", "Awesome Sauce!", "Let's Go!"],
                N = ["Great Effort!", "You Got This!", "Don't Give Up!"],
                A = function(t) {
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
                        }), e && R(t, e)
                    }(c, t);
                    var e, r, n, i, a, s = q(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (e = s.call(this, t)).state = {
                            win: !1,
                            winner: {},
                            loser: {},
                            bothLose: !1,
                            bothWin: !1,
                            deadHeader: "",
                            myEnergy: -1
                        }, e.dbRef = {}, e
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: (i = x().mark((function t() {
                            var e, r, n, o, i, a, s, c = this;
                            return x().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.maxEnergy) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return Object(_.c)(), e = this.props.client.team, r = e ? this.props.client.team.name : this.props.client.name, t.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 7:
                                        if (this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                                switch (t.val()) {
                                                    case "prv":
                                                        c.props.firebase.getDatabaseVal(c.props.client.hostId, "c/".concat(r), (function(t) {
                                                            t && t.op ? c.props.firebase.getDatabaseVal(c.props.client.hostId, "c/".concat(t.op), (function(n) {
                                                                n ? (c.props.prepareMatch(t.e, [{
                                                                    name: r,
                                                                    energy: t.e,
                                                                    blook: e ? c.props.client.team.blook : c.props.client.blook,
                                                                    players: t.p
                                                                }, {
                                                                    name: t.op,
                                                                    energy: n.e,
                                                                    blook: n.b,
                                                                    players: n.p,
                                                                    clone: n.op !== r
                                                                }]), c.props.history.push("/play/battle-royale/match/preview")) : (c.props.prepareMatch(t.e, null), c.props.history.push("/play/battle-royale/match/preview"))
                                                            })) : (c.props.prepareMatch(0, null), c.props.history.push("/play/battle-royale/match/preview"))
                                                        }));
                                                        break;
                                                    case "fin":
                                                        c.props.firebase.getDatabaseVal(c.props.client.hostId, "st", (function(t) {
                                                            t ? (c.props.setStanding(Object.entries(t).map((function(t) {
                                                                var e = T(t, 2),
                                                                    r = e[0],
                                                                    n = e[1];
                                                                return {
                                                                    name: r,
                                                                    blook: n.b,
                                                                    place: n.p,
                                                                    wins: n.w,
                                                                    numPlayers: n.nu
                                                                }
                                                            })).filter((function(t) {
                                                                return t.wins || 0 === t.wins
                                                            }))), c.props.history.push("/play/battle-royale/final")) : c.props.history.push("/play")
                                                        }));
                                                        break;
                                                    case null:
                                                        c.props.deleteClient(), c.props.history.push("/play")
                                                }
                                            })), this.props.client.energy && this.props.client.match && this.props.client.match[0]) {
                                            t.next = 12;
                                            break
                                        }
                                        return this.setState({
                                            deadHeader: this.props.client.defeated > 0 ? Object(_.p)(B) : Object(_.p)(N)
                                        }), t.abrupt("return");
                                    case 12:
                                        n = this.props.client.team ? this.props.client.team.name : this.props.client.name, o = this.props.client.match[0].name === n ? this.props.client.match[0] : this.props.client.match[1], i = this.props.client.match[0].name === n ? this.props.client.match[1] : this.props.client.match[0], a = o.correct && !i.correct || o.correct && o.time <= i.time, s = i.correct && !o.correct || i.correct && i.time <= o.time, this.setState({
                                            myEnergy: this.props.client.energy,
                                            winner: a ? o : i,
                                            loser: a ? i : o,
                                            bothLose: !a && !s,
                                            bothWin: a && s,
                                            win: a
                                        }, (function() {
                                            c.state.bothWin || c.props.client.safe || (c.decreaseTimeout = setTimeout((function() {
                                                c.setState({
                                                    loser: k(k({}, c.state.loser), {}, {
                                                        energy: u.isMobile ? c.state.loser.energy - 1 : c.state.loser.energy
                                                    }),
                                                    myEnergy: c.state.win ? c.state.myEnergy : c.state.myEnergy - 1
                                                })
                                            }), 8600))
                                        }));
                                    case 18:
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
                                    C(o, r, n, a, s, "next", t)
                                }

                                function s(t) {
                                    C(o, r, n, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.decreaseTimeout), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(_.u)()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.maxEnergy ? o.a.createElement("div", {
                                className: u.isMobile ? v.a.mBody : v.a.body,
                                style: {
                                    overflow: "hidden"
                                }
                            }, o.a.createElement(d.a, {
                                title: "Play Royale | Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(h.a, {
                                name: this.props.client.name,
                                energy: -1 === this.state.myEnergy ? this.props.client.energy : this.state.myEnergy
                            }), o.a.createElement("div", {
                                className: v.a.regularBody,
                                style: {
                                    overflow: "hidden"
                                }
                            }, this.props.client.energy <= 0 ? o.a.createElement("div", {
                                className: m.a.eliminatedContainer
                            }, o.a.createElement("div", {
                                className: m.a.eliminatedHeader
                            }, this.state.deadHeader), o.a.createElement("div", {
                                className: m.a.eliminatedText
                            }, this.props.client.defeated > 0 ? "You would have beaten ".concat(this.props.client.defeated, " ").concat(1 === this.props.client.defeated ? "player" : "players", "!") : "Waiting For Matches to Finish Up...")) : o.a.createElement(g.a, {
                                winner: this.state.winner,
                                loser: this.state.loser,
                                bothWin: this.state.bothWin,
                                bothLose: this.state.bothLose,
                                win: this.state.win,
                                safe: this.props.client.safe,
                                team: Boolean(this.props.client.team)
                            }))) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && P(e.prototype, r), n && P(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            A.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    energy: c.a.number,
                    question: c.a.object,
                    match: c.a.array,
                    maxEnergy: c.a.number,
                    defeated: c.a.number,
                    safe: c.a.bool,
                    times: c.a.array,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object,
                prepareMatch: c.a.func.isRequired,
                setStanding: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: f.a,
                    prepareMatch: p.a,
                    setStanding: p.b
                }, t)
            }))(Object(w.d)(A)))
        },
        "+UJF": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("kQZX"),
                p = r("XTAU"),
                f = r("Xst1"),
                h = r.n(f),
                d = r("VgyX"),
                y = r("HbJ1"),
                m = r("+xn+"),
                b = r("bB3c"),
                v = r("Ec9F"),
                g = r("D5Nu"),
                _ = r("aKVx"),
                w = r("ctjG"),
                O = r("t4Pf"),
                x = r("Qovi"),
                j = r("+fLB");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function T(t, e) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function S(t) {
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
                    var r, n = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = [4200, 2850, 7150, 8150, 8150, 8150, 2575],
                L = function(t) {
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
                        }), e && T(t, e)
                    }(a, t);
                    var e, r, n, i = S(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            stage: 2,
                            muted: !!t.host && t.host.muted
                        }, e.ok = !0, e.changeMuted = e.changeMuted.bind(P(e)), e.audio = new Audio(x.a), e.audio.muted = e.state.muted, e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            this.props.host && this.props.host.settings && (this.audio.volume = .45, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1), function e() {
                                t.timeout = setTimeout((function() {
                                    t.setState({
                                        stage: t.state.stage + 1
                                    }, (function() {
                                        t.state.stage >= 7 ? t.skip() : e()
                                    }))
                                }), q[t.state.stage])
                            }())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var t = this;
                            clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "skip",
                        value: function() {
                            var t = this,
                                e = Object(b.b)(this.props.host.players, "Teams" === this.props.host.settings.mode, this.props.host.usedQuestions, this.props.host.questionsPlayed, this.props.host.questions, this.props.host.dead);
                            this.props.prepareRoyale(1, e.usedQuestions, e.questionsPlayed, "q-".concat(e.question.stdNumber, "-").concat(e.answerString), e.question, e.matches), this.props.firebase.setVal({
                                id: this.props.host.id,
                                path: "c",
                                val: e.dbPlayers
                            }, (function() {
                                t.props.firebase.setStage({
                                    id: t.props.host.id,
                                    stage: "prv"
                                }, (function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/match/preview")
                                }))
                            }))
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
                            return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                                className: h.a.hostBody
                            }, o.a.createElement(p.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), o.a.createElement(u.a, {
                                left: "",
                                center: "Instructions",
                                muted: this.state.muted,
                                changeMuted: this.changeMuted
                            }), 2 === this.state.stage ? o.a.createElement(v.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 3 === this.state.stage ? o.a.createElement(g.a, {
                                mode: "Teams" === this.props.host.settings.mode ? "Royale Teams" : "Royale"
                            }) : null, 4 === this.state.stage ? o.a.createElement(_.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 5 === this.state.stage ? o.a.createElement(w.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 6 === this.state.stage ? o.a.createElement(O.a, {
                                noExpand: !0
                            }) : null, o.a.createElement("div", {
                                className: h.a.skipButton,
                                onClick: function() {
                                    return t.skip()
                                },
                                role: "button",
                                tabIndex: "0"
                            }, "Skip")) : o.a.createElement(l.a, {
                                to: "/dashboard"
                            })
                        }
                    }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            L.propTypes = {
                host: c.a.object,
                id: c.a.string,
                firebase: c.a.object,
                history: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                prepareRoyale: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    id: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: d.d,
                    setMuted: y.a,
                    prepareRoyale: m.a
                }, t)
            }))(Object(j.d)(L)))
        },
        "+xn+": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("/R+8");

            function o(t, e, r, o, i, a) {
                return {
                    type: n.a,
                    round: t,
                    usedQuestions: e,
                    questionsPlayed: r,
                    questionString: o,
                    question: i,
                    matches: a
                }
            }

            function i(t) {
                return {
                    type: n.b,
                    standings: t
                }
            }
        },
        "/R+8": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = "PREPARE_ROYALE",
                o = "UPDATE_STANDINGS"
        },
        "0OU0": function(t, e, r) {
            var n = r("qSUq");
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
        "13lp": function(t, e, r) {
            var n = r("y5Sv");
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
        "1exF": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__winsText___FikR0-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                winsText: "styles__winsText___FikR0-camelCase"
            }
        },
        "2BtG": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = "PREPARE_MATCH",
                o = "SET_STANDING"
        },
        "2dGD": function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "a", (function() {
                return o
            }));
            var n = "SET_MATCH_RESULT",
                o = "SET_DEFEATED"
        },
        "50tE": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("VgyX"),
                p = r("Xst1"),
                f = r.n(p),
                h = r("ZVoO"),
                d = r("XTAU"),
                y = r("+fLB"),
                m = r("MDrD"),
                b = r("qnYv");

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
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
                    if ("string" == typeof t) return _(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function w(t, e) {
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

            function x(t) {
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
                    var r, n = k(t);
                    if (e) {
                        var o = k(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(t, e) {
                if (e && ("object" === v(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function k(t) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var E = function(t) {
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
                }(a, t);
                var e, r, n, i = x(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        isTeam: !1,
                        muted: !!t.host && t.host.muted
                    }, e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings,
                                isTeam: "Teams" === e.settings.mode
                            }, (function() {
                                for (var r = e.questionsPlayed, n = e.questions, o = n.map((function(t) {
                                        return t.number
                                    })), i = [], a = 0; a < r.length; a++) i[a] = n[o.indexOf(r[a])];
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.firebase.getDatabaseVal(e.id, "c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = g(t, 2),
                                                n = e[0],
                                                o = e[1];
                                            if (!Object.keys(m.a).includes(n)) {
                                                var i = {};
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
                                            }
                                        })), t.props.host && t.props.host.id && (t.props.firebase.removeHost(t.props.host.id), t.props.deleteHost()), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && (t.state.isTeam ? b.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        wins: isNaN(t.wins) ? 0 : Math.round(Number(t.wins)),
                                                        players: Object.entries(t.players).map((function(t) {
                                                            var e = g(t, 2),
                                                                n = e[0];
                                                            return {
                                                                name: n,
                                                                blook: e[1].blook,
                                                                corrects: r[n] ? r[n].corrects : {},
                                                                incorrects: r[n] ? r[n].incorrects : {}
                                                            }
                                                        }))
                                                    }
                                                })),
                                                settings: e.settings,
                                                set: e.hostName,
                                                setId: e.setId
                                            }).then((function(e) {
                                                t.setState({
                                                    historyId: e.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(t) {
                                                console.error(t)
                                            })) : b.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        wins: isNaN(t.wins) ? 0 : Math.round(Number(t.wins)),
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
                                                })
                                            })).catch((function(t) {
                                                console.error(t)
                                            })))
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
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? o.a.createElement("div", {
                            className: f.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(h.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(t) {
                                return "".concat(t.wins, " ").concat(1 === t.wins ? "Win" : "Wins")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            team: this.state.isTeam,
                            muted: this.state.muted
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && w(e.prototype, r), n && w(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            E.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
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
            }))(Object(y.d)(E)))
        },
        "6L5a": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("TSYQ"),
                f = r.n(p),
                h = r("GC+6"),
                d = r("ZrUs"),
                y = r("Rnav"),
                m = r("XTAU"),
                b = r("vZaZ"),
                v = r.n(b),
                g = r("Xst1"),
                _ = r.n(g),
                w = r("7uOW"),
                O = r("ozTy"),
                x = r("+fLB"),
                j = r("74sb");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                E = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
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
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == k(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function j(t) {
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
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function T(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function C(t, e) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function P(t) {
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
                    var r, n = q(t);
                    if (e) {
                        var o = q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return R(this, r)
                }
            }

            function R(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var L = function(t) {
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
                    }), e && C(t, e)
                }(c, t);
                var e, r, n, i, a, s = P(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        tip: Object(O.a)()
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = E().mark((function t() {
                        var e, r, n = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(j.c)(), e = this.props.client.team, r = e ? this.props.client.team.name : this.props.client.name, t.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 7:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "bres":
                                                n.props.history.push("/play/battle-royale/answer/result");
                                                break;
                                            case "prv":
                                                n.props.firebase.getDatabaseVal(n.props.client.hostId, "c/".concat(r), (function(t) {
                                                    t && t.op ? n.props.firebase.getDatabaseVal(n.props.client.hostId, "c/".concat(t.op), (function(o) {
                                                        o ? (n.props.prepareMatch(t.e, [{
                                                            name: r,
                                                            energy: t.e,
                                                            blook: e ? n.props.client.team.blook : n.props.client.blook,
                                                            players: t.p
                                                        }, {
                                                            name: t.op,
                                                            energy: o.e,
                                                            blook: o.b,
                                                            players: o.p,
                                                            clone: o.op !== r
                                                        }]), n.props.history.push("/play/battle-royale/match/preview")) : (n.props.prepareMatch(t.e, null), n.props.history.push("/play/battle-royale/match/preview"))
                                                    })) : (n.props.prepareMatch(0, null), n.props.history.push("/play/battle-royale/match/preview"))
                                                }));
                                                break;
                                            case null:
                                                n.props.deleteClient(), n.props.history.push("/play")
                                        }
                                    }));
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
                                T(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                T(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(j.u)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer ? o.a.createElement("div", {
                            className: u.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(m.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(y.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), o.a.createElement("div", {
                            className: _.a.regularBody
                        }, o.a.createElement(w.a, {
                            header: "Answer Sent!",
                            blook: this.props.client.team ? this.props.client.team.blook : this.props.client.blook,
                            transition: this.state.transitioning
                        }), o.a.createElement("div", {
                            className: f()(_.a.bottomTipText, (t = {}, e = v.a.textFade, r = this.state.transitioning, e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r, t))
                        }, this.state.tip), o.a.createElement("div", {
                            className: this.state.transitioning ? v.a.fade : v.a.fadeWaiting
                        }))) : o.a.createElement(l.a, {
                            to: "/play"
                        });
                        var t, e, r
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            L.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: d.a,
                    prepareMatch: h.a
                }, t)
            }))(Object(x.d)(L)))
        },
        "7rY/": function(t, e, r) {
            var n = r("ouoo");
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
        A0wD: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                p = r.n(u),
                f = r("H1WH"),
                h = r("2dGD");

            function d(t, e, r) {
                return {
                    type: h.b,
                    match: t,
                    win: e,
                    safe: r
                }
            }

            function y(t) {
                return {
                    type: h.a,
                    defeated: t
                }
            }
            var m = r("GC+6"),
                b = r("ZrUs"),
                v = r("Rnav"),
                g = r("XTAU"),
                _ = r("bsaY"),
                w = r.n(_),
                O = r("Xst1"),
                x = r.n(O),
                j = r("+fLB"),
                k = r("74sb");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == E(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function j(t) {
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
                        next: k
                    }
                }

                function k() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
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
                    if ("string" == typeof t) return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function P(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function R(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function q(t, e) {
                return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function L(t) {
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
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = function(t) {
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
                    }), e && q(t, e)
                }(c, t);
                var e, r, n, i, a, s = L(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        correctAnswers: "",
                        isCorrect: !1,
                        ready: !1
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = T().mark((function t() {
                        var e, r, n, o = this;
                        return T().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.correctAnswers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(k.c)(), this.readyTimeout = setTimeout((function() {
                                        o.props.client && o.props.client.question && o.props.client.question.correctAnswers && o.setState({
                                            correctAnswers: o.props.client.question.correctAnswers,
                                            isCorrect: o.props.client.question.correctAnswers.includes(o.props.client.answer),
                                            ready: !0
                                        })
                                    }), 1e3), e = function() {
                                        o.transitionTimeout = setTimeout((function() {
                                            o.props.history.push("/play/battle-royale/match/result")
                                        }), 300)
                                    }, r = this.props.client.team, n = r ? this.props.client.team.name : this.props.client.name, t.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 9:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        if (t.val()) {
                                            if ("prv" === t.val()) o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(n), (function(t) {
                                                t && t.op ? o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(t.op), (function(e) {
                                                    e ? (o.props.prepareMatch(t.e, [{
                                                        name: n,
                                                        energy: t.e,
                                                        blook: r ? o.props.client.team.blook : o.props.client.blook,
                                                        players: t.p
                                                    }, {
                                                        name: t.op,
                                                        energy: e.e,
                                                        blook: e.b,
                                                        players: e.p,
                                                        clone: e.op !== n
                                                    }]), o.props.history.push("/play/battle-royale/match/preview")) : (o.props.prepareMatch(t.e, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                })) : (o.props.prepareMatch(0, null), o.props.history.push("/play/battle-royale/match/preview"))
                                            }));
                                            else if (2 === t.val().split("-").length && "pmat" === t.val().split("-")[0]) {
                                                var i = o.props.client.question.correctAnswers.map((function(t) {
                                                    return o.props.client.question.answers.indexOf(t)
                                                }));
                                                if (o.props.client.energy)
                                                    if (o.props.client.team) {
                                                        if (!(o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit)) return;
                                                        o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(o.props.client.match[0].name), (function(r) {
                                                            if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                var n = r || 1e3 * o.props.client.question.timeLimit,
                                                                    i = n !== 1e3 * o.props.client.question.timeLimit;
                                                                o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(o.props.client.match[1].name), (function(r) {
                                                                    if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                        var a = r || 1e3 * o.props.client.question.timeLimit,
                                                                            s = a !== 1e3 * o.props.client.question.timeLimit,
                                                                            c = Boolean(parseInt(t.val().split("-")[1], 10)),
                                                                            l = i && !s || i && n < a,
                                                                            u = [{
                                                                                name: o.props.client.match[0].name,
                                                                                energy: o.props.client.match[0].energy,
                                                                                blook: o.props.client.match[0].blook,
                                                                                players: o.props.client.match[0].players,
                                                                                correct: i,
                                                                                time: n
                                                                            }, {
                                                                                name: o.props.client.match[1].name,
                                                                                energy: o.props.client.match[1].energy,
                                                                                blook: o.props.client.match[1].blook,
                                                                                players: o.props.client.match[1].players,
                                                                                correct: s,
                                                                                time: a,
                                                                                clone: o.props.client.match[1].clone
                                                                            }];
                                                                        o.props.setMatchResult(u, l, c), e()
                                                                    }
                                                                }))
                                                            }
                                                        }))
                                                    } else {
                                                        if (!o.props.client.match || !o.props.client.match[1]) return;
                                                        o.props.firebase.getDatabaseVal(o.props.client.hostId, "a/".concat(o.props.client.match[1].name), (function(r) {
                                                            if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                var n = r || {},
                                                                    a = n.t || 1e3 * o.props.client.question.timeLimit,
                                                                    s = o.props.client.question.correctAnswers.includes(o.props.client.answer),
                                                                    c = i.includes(n.a),
                                                                    l = o.props.client.times[o.props.client.times.length - 1],
                                                                    u = Boolean(parseInt(t.val().split("-")[1], 10)),
                                                                    p = s && !c || s && l < a,
                                                                    f = [{
                                                                        name: o.props.client.name,
                                                                        energy: o.props.client.energy,
                                                                        blook: o.props.client.blook,
                                                                        correct: s,
                                                                        time: l
                                                                    }, {
                                                                        name: o.props.client.match[1].name,
                                                                        energy: o.props.client.match[1].energy,
                                                                        blook: o.props.client.match[1].blook,
                                                                        correct: c,
                                                                        time: a,
                                                                        clone: o.props.client.match[1].clone
                                                                    }];
                                                                o.props.setMatchResult(f, p, u), e()
                                                            }
                                                        }))
                                                    }
                                                else if (o.props.client.question.correctAnswers.includes(o.props.client.answer)) {
                                                    var a = 0;
                                                    o.props.firebase.getDatabaseVal(o.props.client.hostId, "a", (function(t) {
                                                        var r = o.props.client.times && o.props.client.times[0] ? o.props.client.times[o.props.client.times.length - 1] : o.props.client.question ? 1e3 * o.props.client.question.timeLimit : 1e5,
                                                            n = t || {};
                                                        Object.entries(n).forEach((function(t) {
                                                            var e = S(t, 2),
                                                                n = e[0],
                                                                s = e[1];
                                                            n !== o.props.client.name && (s.t > r || !i.includes(s.a)) && (a += 1)
                                                        })), o.props.setDefeated(a), e()
                                                    }))
                                                } else o.props.setDefeated(0), e()
                                            }
                                        } else o.props.deleteClient(), o.props.history.push("/play")
                                    }));
                                case 11:
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
                                P(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                P(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(k.u)(), clearTimeout(this.timeout), clearTimeout(this.transitionTimeout), clearTimeout(this.readyTimeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.correctAnswers ? o.a.createElement("div", {
                            className: f.isMobile ? x.a.mBody : x.a.body,
                            style: {
                                backgroundColor: this.state.transition ? "#f7f7f7" : "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(g.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(v.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), this.state.ready ? o.a.createElement("div", {
                            className: p()(x.a.regularBody, w.a.background),
                            style: {
                                backgroundColor: this.state.isCorrect ? "#4bc22e" : "#c43a35"
                            }
                        }, o.a.createElement("div", {
                            className: w.a.header
                        }, this.state.isCorrect ? "CORRECT" : "INCORRECT"), o.a.createElement("div", {
                            className: w.a.container
                        }, o.a.createElement("i", {
                            className: this.state.isCorrect ? "fas fa-check" : "fas fa-times"
                        })), this.state.isCorrect ? null : o.a.createElement("div", {
                            className: w.a.correctAnswers
                        }, "Correct ".concat(1 === this.state.correctAnswers.length ? "Answer:" : "Answers:"), Object(k.f)(this.state.correctAnswers, "#fff", 28))) : null) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && R(e.prototype, r), n && R(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object,
                    match: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object,
                setMatchResult: c.a.func.isRequired,
                setDefeated: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: b.a,
                    setMatchResult: d,
                    setDefeated: y,
                    prepareMatch: m.a
                }, t)
            }))(Object(j.d)(N)))
        },
        C9LY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("HbJ1"),
                p = r("VgyX"),
                f = r("kQZX"),
                h = r("XTAU"),
                d = r("Xst1"),
                y = r.n(d),
                m = r("3VbC"),
                b = r("p0c8"),
                v = r("+fLB");

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function _(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function w(t, e) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function O(t) {
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
                    var r, n = k(t);
                    if (e) {
                        var o = k(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return x(this, r)
                }
            }

            function x(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return j(t)
            }

            function j(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function k(t) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var E = function(t) {
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
                    }), e && w(t, e)
                }(a, t);
                var e, r, n, i = O(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.skip = e.skip.bind(j(e)), e.changeMuted = e.changeMuted.bind(j(e)), e.audio = new Audio(b.a), e.audio.muted = e.state.muted, e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .2, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            t.audio.currentTime = 0, t.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            t.skip()
                        }), 22500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var t = this;
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            t.audio.currentTime = 0, t.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/rush")
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
                        return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                            className: y.a.body
                        }, o.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(f.a, {
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: y.a.regularBody
                        }, o.a.createElement(m.a, {
                            amount: this.props.host.settings.amount
                        })), o.a.createElement("div", {
                            className: y.a.skipButton,
                            onClick: function() {
                                return t.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip")) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && _(e.prototype, r), n && _(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            E.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    id: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: p.d,
                    setMuted: u.a
                }, t)
            }))(Object(v.d)(E)))
        },
        "GC+6": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("2BtG");

            function o(t, e) {
                return {
                    type: n.a,
                    energy: t,
                    match: e
                }
            }

            function i(t) {
                return {
                    type: n.b,
                    standing: t
                }
            }
        },
        HGQr: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                p = r.n(u),
                f = r("VgyX"),
                h = r("0OU0"),
                d = r.n(h),
                y = r("Xst1"),
                m = r.n(y),
                b = r("ZVoO"),
                v = r("XTAU"),
                g = r("74sb"),
                _ = r("+fLB"),
                w = r("qnYv");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x(t, e) {
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
                    if ("string" == typeof t) return j(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
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

            function E(t, e) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function T(t) {
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
                    var r, n = C(t);
                    if (e) {
                        var o = C(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return S(this, r)
                }
            }

            function S(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function C(t) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var P = function(t) {
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
                    }), e && E(t, e)
                }(a, t);
                var e, r, n, i = T(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        isTeam: !1,
                        muted: !!t.host && t.host.muted
                    }, e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings,
                                isTeam: "Teams" === e.settings.mode
                            }, (function() {
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.firebase.getDatabaseVal(e.id, "c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = x(t, 2),
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
                                        })), t.props.host && t.props.host.id && (t.props.firebase.removeHost(t.props.host.id), t.props.deleteHost()), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && (t.state.isTeam ? w.a.post("/api/history", {
                                                standings: e.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        numBlooks: isNaN(t.numBlooks) ? 0 : Math.round(Number(t.numBlooks)),
                                                        players: Object.entries(t.players).map((function(t) {
                                                            var e = x(t, 2),
                                                                n = e[0];
                                                            return {
                                                                name: n,
                                                                blook: e[1].blook,
                                                                corrects: r[n] ? r[n].corrects : {},
                                                                incorrects: r[n] ? r[n].incorrects : {}
                                                            }
                                                        }))
                                                    }
                                                })),
                                                settings: e.settings,
                                                set: e.hostName,
                                                setId: e.setId
                                            }).then((function(e) {
                                                t.setState({
                                                    historyId: e.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(t) {
                                                console.error(t)
                                            })) : w.a.post("/api/history", {
                                                standings: e.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        numBlooks: isNaN(t.numBlooks) ? 0 : Math.round(Number(t.numBlooks)),
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
                                                })
                                            })).catch((function(t) {
                                                console.error(t)
                                            })))
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
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? o.a.createElement("div", {
                            className: p()(m.a.body, d.a.background),
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(b.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(t) {
                                return "".concat(Object(g.o)(t.numBlooks), " ").concat(1 === t.numBlooks ? "Blook" : "Blooks")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            team: this.state.isTeam,
                            muted: this.state.muted,
                            theme: "rush"
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            P.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
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
                    deleteHost: f.d
                }, t)
            }))(Object(_.d)(P)))
        },
        KVnH: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__eliminatedContainer___3gN3A-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;-webkit-animation:styles__fadeIn___9Ao4w-camelCase .1s linear .5s forwards;animation:styles__fadeIn___9Ao4w-camelCase .1s linear .5s forwards}@-webkit-keyframes styles__fadeIn___9Ao4w-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___9Ao4w-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___1EAk7-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___2hJci-camelCase{font-size:26px;font-family:Nunito,sans-serif}", ""]), e.locals = {
                eliminatedContainer: "styles__eliminatedContainer___3gN3A-camelCase",
                fadeIn: "styles__fadeIn___9Ao4w-camelCase",
                eliminatedHeader: "styles__eliminatedHeader___1EAk7-camelCase",
                eliminatedText: "styles__eliminatedText___2hJci-camelCase"
            }
        },
        NUMY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                p = r.n(u),
                f = r("wd/R"),
                h = r.n(f),
                d = r("2O3R"),
                y = r("HbJ1"),
                m = r("+xn+"),
                b = r("VgyX"),
                v = r("kQZX"),
                g = r("XTAU"),
                _ = r("ca/f"),
                w = r("Xst1"),
                O = r.n(w),
                x = r("0OU0"),
                j = r.n(x),
                k = r("GxJ0"),
                E = r("p0c8"),
                T = r("+fLB");

            function S(t) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                C = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == S(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function j(t) {
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
                        next: k
                    }
                }

                function k() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function P(t) {
                return function(t) {
                    if (Array.isArray(t)) return N(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || B(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(t, e) {
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
                    e % 2 ? R(Object(r), !0).forEach((function(e) {
                        L(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function L(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t, e) {
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
                }(t, e) || B(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(t, e) {
                if (t) {
                    if ("string" == typeof t) return N(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? N(t, e) : void 0
                }
            }

            function N(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function A(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function D(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function M(t, e) {
                return (M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function H(t) {
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
                    var r, n = Q(t);
                    if (e) {
                        var o = Q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return z(this, r)
                }
            }

            function z(t, e) {
                if (e && ("object" === S(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return G(t)
            }

            function G(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Q(t) {
                return (Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var U = function(t) {
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
                    }), e && M(t, e)
                }(c, t);
                var e, r, n, i, a, s = H(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: "00:00",
                        players: [],
                        muted: !!t.host && t.host.muted,
                        userToBlock: ""
                    }, e.ok = !1, e.isTeam = t.host && t.host.settings && "Teams" === t.host.settings.mode, e.getClients = e.getClients.bind(G(e)), e.goNext = e.goNext.bind(G(e)), e.changeMuted = e.changeMuted.bind(G(e)), e.blockUser = e.blockUser.bind(G(e)), e.audio = new Audio(E.a), e.audio.muted = e.state.muted, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.settings) {
                            this.audio.volume = .15, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1), this.props.firebase.setStage({
                                id: this.props.host.id,
                                stage: "rush"
                            }), this.getClients(!1, !0);
                            var e = 60 * this.props.host.settings.amount,
                                r = 2;
                            this.setState({
                                timer: h.a.duration(e, "seconds").format("mm:ss")
                            }), this.timerInterval = setInterval((function() {
                                e -= 1, t.setState({
                                    timer: h.a.duration(e, "seconds").format("mm:ss")
                                }), e <= 0 ? (t.getClients(!0), clearInterval(t.timerInterval)) : 0 === r ? (t.getClients(!1), r = 2) : r -= 1
                            }), 1e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var t = this;
                        clearInterval(this.timerInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            t.audio.currentTime = 0, t.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: (i = C().mark((function t(e, r) {
                        var n, o, i, a, s, c, l = this;
                        return C().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = [], !this.isTeam) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 4, new Promise((function(t) {
                                        l.props.firebase.getDatabaseVal(l.props.host.id, "a", (function(e) {
                                            var n = e || {},
                                                o = Object.entries(n).map((function(t) {
                                                    var e = I(t, 2),
                                                        r = e[0],
                                                        n = e[1];
                                                    return {
                                                        name: r,
                                                        newBlooks: n.bs || 0,
                                                        newDefense: n.d || 0,
                                                        toAttack: n.tat
                                                    }
                                                }));
                                            l.props.firebase.removeVal(l.props.host.id, "a");
                                            var i = [],
                                                a = o.map((function(t) {
                                                    return t.name
                                                })),
                                                s = l.state.players.map((function(t) {
                                                    return t.name
                                                }));
                                            l.props.host.players.forEach((function(t) {
                                                var e = {
                                                    name: t.name,
                                                    blook: t.blook,
                                                    numBlooks: r ? 3 : l.state.players[s.indexOf(t.name)].numBlooks,
                                                    numDefense: r ? 0 : l.state.players[s.indexOf(t.name)].numDefense
                                                };
                                                Object.keys(t.players).forEach((function(t) {
                                                    var r = a.indexOf(t); - 1 !== r && (e.numBlooks += o[r].newBlooks, e.numDefense += o[r].newDefense)
                                                })), i.push(e)
                                            }));
                                            var c = i.map((function(t) {
                                                return t.name
                                            }));
                                            o.forEach((function(t) {
                                                if (t.toAttack) {
                                                    var e = c.indexOf(t.toAttack);
                                                    if (-1 === e) return;
                                                    var r = i[e],
                                                        n = r.numDefense;
                                                    if (n > 0) n -= 1, i[e].numDefense = n;
                                                    else {
                                                        var o = r.numBlooks - 1;
                                                        if (o >= 0) {
                                                            i[e].numBlooks = o;
                                                            for (var a = null, s = 0; s < l.props.host.players.length; s++)
                                                                if (Object.keys(l.props.host.players[s].players).includes(t.name)) {
                                                                    a = i[s].name;
                                                                    break
                                                                } var u = c.indexOf(a);
                                                            a && -1 !== u && (i[u].numBlooks += 1)
                                                        }
                                                    }
                                                }
                                            })), t(i.map((function(t) {
                                                return q(q({}, t), {}, {
                                                    numDefense: Math.min(t.numDefense, 4)
                                                })
                                            })))
                                        }))
                                    }));
                                case 4:
                                    n = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    return t.next = 9, new Promise((function(t) {
                                        l.props.firebase.getDatabaseVal(l.props.host.id, "c", (function(e) {
                                            var n = e || {};
                                            if (n && 0 !== Object.keys(n).length) {
                                                var o = Object.entries(n).map((function(t) {
                                                        var e = I(t, 2),
                                                            n = e[0],
                                                            o = e[1];
                                                        return {
                                                            name: n,
                                                            blook: o.b,
                                                            numBlooks: r ? o.bs || 3 : o.bs || 0,
                                                            numDefense: o.d || 0,
                                                            toAttack: o.tat
                                                        }
                                                    })),
                                                    i = o.map((function(t) {
                                                        return t.name
                                                    }));
                                                o.forEach((function(t, e) {
                                                    if (t.toAttack) {
                                                        var r = i.indexOf(t.toAttack);
                                                        if (-1 === r) return;
                                                        var n = o[r],
                                                            a = n.numDefense;
                                                        if (a > 0) a -= 1, o[r].numDefense = a;
                                                        else {
                                                            var s = n.numBlooks - 1;
                                                            s >= 0 && (o[r].numBlooks = s, o[e].numBlooks += 1)
                                                        }
                                                    }
                                                })), t(o)
                                            } else t()
                                        }))
                                    }));
                                case 9:
                                    n = t.sent;
                                case 10:
                                    for (o = {}, n.forEach((function(t) {
                                            o[t.name] = {
                                                b: t.blook,
                                                bs: t.numBlooks,
                                                d: t.numDefense
                                            }
                                        })), this.props.firebase.setVal({
                                            id: this.props.host.id,
                                            path: "c",
                                            val: o
                                        }), n.sort((function(t, e) {
                                            return e.numBlooks !== t.numBlooks ? e.numBlooks - t.numBlooks : e.numDefense - t.numDefense
                                        })), i = 0, a = Number.MAX_SAFE_INTEGER, s = 0; s < n.length; s++) n[s].numBlooks < a && (i += 1, a = n[s].numBlooks), n[s].place = i;
                                    this.isTeam && (c = this.props.host.players.map((function(t) {
                                        return t.name
                                    })), n = n.map((function(t) {
                                        return q(q({}, t), {}, {
                                            players: l.props.host.players[c.indexOf(t.name)].players
                                        })
                                    }))), e ? this.goNext(P(n)) : this.setState({
                                        players: n
                                    });
                                case 19:
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
                                A(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                A(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t, e) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "goNext",
                    value: function(t) {
                        var e = this;
                        this.props.updateStandings(t);
                        var r = t.map((function(t) {
                            return {
                                n: t.name,
                                b: t.blook,
                                bs: t.numBlooks,
                                p: t.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: r
                        }, (function() {
                            e.props.firebase.setStage({
                                id: e.props.host.id,
                                stage: "fin"
                            }, (function() {
                                e.ok = !0, e.props.history.push("/host/rush/final")
                            }))
                        }))
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
                    key: "blockUser",
                    value: function() {
                        var t = this.state.userToBlock,
                            e = JSON.parse(JSON.stringify(this.state.players)),
                            r = e.map((function(t) {
                                return t.name
                            })).indexOf(t); - 1 !== r && e.splice(r, 1), this.setState({
                            players: e,
                            userToBlock: ""
                        }), this.props.firebase.blockUser(this.props.host.id, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                            className: p()(O.a.body, j.a.background)
                        }, o.a.createElement(g.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(v.a, {
                            left: "Blooket",
                            center: this.state.timer,
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return t.getClients(!0)
                            }
                        }), o.a.createElement("div", {
                            className: O.a.hostRegularBody
                        }, o.a.createElement("div", {
                            className: j.a.shelves
                        }, new Array(Math.ceil(Math.min(Object.keys(this.state.players).length, 8) / 4)).fill(0).map((function(t, e) {
                            return o.a.createElement("div", {
                                className: j.a.shelfContainer,
                                key: e
                            }, o.a.createElement("div", {
                                className: j.a.shelf
                            }), o.a.createElement("div", {
                                className: j.a.shelfBot
                            }))
                        }))), o.a.createElement(d.a, {
                            className: j.a.rushBoxesHolder,
                            duration: 1e3,
                            style: {
                                position: "absolute"
                            }
                        }, this.state.players.slice(0, 8).map((function(e) {
                            return o.a.createElement(k.a, {
                                key: e.name,
                                name: e.name,
                                blook: e.blook,
                                numBlooks: e.numBlooks,
                                numDefense: e.numDefense,
                                onClick: t.isTeam ? void 0 : function() {
                                    return t.setState({
                                        userToBlock: e.name
                                    })
                                },
                                letMove: !0
                            })
                        })))), this.state.userToBlock ? o.a.createElement(_.a, {
                            text: "Remove ".concat(this.state.userToBlock, " from the game?"),
                            buttonOne: {
                                text: "Yes",
                                click: this.blockUser,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.setState({
                                        userToBlock: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && D(e.prototype, r), n && D(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            U.propTypes = {
                host: c.a.object,
                firebase: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    updateStandings: m.b,
                    deleteHost: b.d,
                    setMuted: y.a
                }, t)
            }))(Object(T.d)(U)))
        },
        "RX+X": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("iY5W"),
                f = r("ZrUs"),
                h = r("Rnav"),
                d = r("XTAU"),
                y = r("Xst1"),
                m = r.n(y),
                b = r("13lp"),
                v = r.n(b),
                g = r("+3yP"),
                _ = r("+fLB"),
                w = r("74sb");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
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
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function E(t) {
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
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = E, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
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
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function j(t) {
                return function(t) {
                    if (Array.isArray(t)) return k(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return k(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return k(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function E(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t) {
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
                    var r, n = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = function(t) {
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
                    }), e && S(t, e)
                }(c, t);
                var e, r, n, i, a, s = C(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 8
                    }, e.here = !0, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = x().mark((function t() {
                        var e, r = this;
                        return x().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.maxEnergy) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e = 8, this.timerInterval = setInterval((function() {
                                        e -= 1, r.here && (r.setState({
                                            timer: e
                                        }), e <= 0 && clearInterval(r.timerInterval))
                                    }), 1e3), Object(w.c)(), t.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 7:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var e = t.val();
                                        if (null === e) r.props.deleteClient(), r.props.history.push("/play");
                                        else if (3 === e.split("-").length) {
                                            for (var n = e.split("-"), o = r.props.client.questions.map((function(t) {
                                                    return t.number
                                                })).indexOf(parseInt(n[1], 10)), i = JSON.parse(JSON.stringify(r.props.client.questions[o])), a = j(i.answers), s = n[2].split(""), c = 0; c < a.length; c++) i.answers[s[c]] = a[c];
                                            r.props.getQuestion(i), r.props.history.push("/play/battle-royale/question")
                                        }
                                    }));
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
                                E(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                E(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearInterval(this.timerInterval), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(w.u)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.maxEnergy ? o.a.createElement("div", {
                            className: u.isMobile ? m.a.mBody : m.a.body,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(h.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), o.a.createElement("div", {
                            className: m.a.regularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, this.props.client.match && this.props.client.match[0] ? o.a.createElement(g.a, {
                            name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
                            match: this.props.client.match,
                            maxEnergy: this.props.client.maxEnergy,
                            team: Boolean(this.props.client.team),
                            timer: this.state.timer
                        }) : o.a.createElement("div", {
                            className: v.a.eliminatedContainer
                        }, o.a.createElement("div", {
                            className: v.a.eliminatedHeader
                        }, "You've Been Eliminated"), o.a.createElement("div", {
                            className: v.a.eliminatedText,
                            style: {
                                marginBottom: 20
                            }
                        }, "Keep answering questions to boost your stats, earn rewards, and enhance your learning!"), o.a.createElement("div", {
                            className: v.a.eliminatedText
                        }, o.a.createElement("b", null, "Question in ".concat(this.state.timer)))))) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            q.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    answer: c.a.string,
                    blook: c.a.string,
                    energy: c.a.number,
                    match: c.a.array,
                    maxEnergy: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    times: c.a.array,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: f.a,
                    getQuestion: p.a
                }, t)
            }))(Object(_.d)(q)))
        },
        TxEy: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("ZrUs"),
                f = r("oQ+7"),
                h = r("sDqx"),
                d = r.n(h),
                y = r("Xst1"),
                m = r.n(y),
                b = r("XTAU"),
                v = r("pQbs"),
                g = r("2ZNs"),
                _ = r("+fLB"),
                w = r("qnYv");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(r), !0).forEach((function(e) {
                        k(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function k(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function T(t, e) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function S(t) {
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
                    var r, n = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = function(t) {
                    return o.a.createElement("div", {
                        className: d.a.winsText
                    }, "".concat(t.wins, " ").concat(1 === t.wins ? "Win" : "Wins"))
                },
                L = function(t) {
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
                        }), e && T(t, e)
                    }(a, t);
                    var e, r, n, i = S(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            standings: [],
                            isBlocked: !1
                        }, e.saveStats = e.saveStats.bind(P(e)), e.renderStats = e.renderStats.bind(P(e)), e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                var e = JSON.parse(JSON.stringify(this.props.client.standing));
                                e.sort((function(t, e) {
                                    return t.place - e.place
                                }));
                                var r = e.map((function(t) {
                                    return t.name
                                })).indexOf(this.props.client.team ? this.props.client.team.name : this.props.client.name);
                                if (-1 !== r) {
                                    var n = 0,
                                        o = 0;
                                    Object.values(this.props.client.corrects).forEach((function(t) {
                                        n += t, o += t
                                    })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                        o += t
                                    })), this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            c: j({}, this.props.client.corrects),
                                            i: j({}, this.props.client.incorrects)
                                        }
                                    });
                                    var i = e[r].place,
                                        a = 0;
                                    this.props.client.times.forEach((function(t) {
                                        a += t
                                    })), a /= Math.max(1, this.props.client.times.length), a = (Math.round(a) / 1e3).toFixed(3);
                                    var s = 0;
                                    this.props.client.team ? e.forEach((function(t) {
                                        i < t.place && (s += t.numPlayers)
                                    })) : s = e.length - i, this.stats = {
                                        place: i,
                                        wins: e[r].wins,
                                        playersDefeated: s,
                                        correctAnswers: n,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        t.setState({
                                            ready: !0,
                                            standings: e,
                                            numCorrect: n,
                                            numQuestions: o,
                                            avgTime: a,
                                            me: e[r]
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
                        value: function(t, e) {
                            w.a.put("/api/users/royalestats", {
                                name: t,
                                place: this.stats.place,
                                showdownWins: this.stats.wins,
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
                        key: "renderStats",
                        value: function() {
                            return o.a.createElement(v.a, {
                                title: "Avg Time",
                                stat: "".concat(this.state.avgTime, "s")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(f.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(g.a, {
                                standings: this.state.standings,
                                name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(this.state.me.wins, " ").concat(1 === this.state.me.wins ? "Win" : "Wins"),
                                saveStats: this.saveStats,
                                renderStandingStat: q,
                                renderStats: this.renderStats,
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: 1
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: m.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            L.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: p.a
                }, t)
            }))(Object(_.d)(L)))
        },
        YoTu: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("bQgK"),
                p = r.n(u),
                f = r("H1WH"),
                h = r("qgFL");

            function d(t, e, r, n) {
                return {
                    type: h.a,
                    answer: t,
                    correct: e,
                    time: r,
                    qNum: n
                }
            }
            var y = r("GC+6"),
                m = r("ZrUs"),
                b = r("Rnav"),
                v = r("XTAU"),
                g = r("Xst1"),
                _ = r.n(g),
                w = r("FVRk"),
                O = r("+fLB"),
                x = r("74sb");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function k() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                k = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
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
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == j(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function E(t) {
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
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = E, x.prototype = {
                    constructor: x,
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
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function E(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function T(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            E(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            E(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function C(t, e) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function P(t) {
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
                    var r, n = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return R(this, r)
                }
            }

            function R(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return q(t)
            }

            function q(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var I = function(t) {
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
                    }), e && C(t, e)
                }(c, t);
                var e, r, n, i, a, s = P(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 10,
                        readId: ""
                    }, e.ready = !1, e.answer = "", e.dbRef = {}, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(q(e)), e.readQuestion = e.readQuestion.bind(q(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = T(k().mark((function t() {
                        var e, r, n, o = this;
                        return k().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(x.c)(), this.startTime = p()(), this.answer = "", this.ready = !1, this.readyTimeout = setTimeout((function() {
                                        o.ready = !0
                                    }), 250), e = this.props.client.question.timeLimit, this.setState({
                                        timer: e
                                    }), this.interval = setInterval((function() {
                                        (e -= 1) <= 0 ? clearInterval(o.interval) : o.setState({
                                            timer: e
                                        })
                                    }), 1e3), r = this.props.client.team, n = r ? this.props.client.team.name : this.props.client.name, t.next = 14, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 14:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "bres":
                                                o.props.history.push("/play/battle-royale/answer/result");
                                                break;
                                            case "prv":
                                                o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(n), (function(t) {
                                                    t && t.op ? o.props.firebase.getDatabaseVal(o.props.client.hostId, "c/".concat(t.op), (function(e) {
                                                        e ? (o.props.prepareMatch(t.e, [{
                                                            name: n,
                                                            energy: t.e,
                                                            blook: r ? o.props.client.team.blook : o.props.client.blook,
                                                            players: t.p
                                                        }, {
                                                            name: t.op,
                                                            energy: e.e,
                                                            blook: e.b,
                                                            players: e.p,
                                                            clone: e.op !== n
                                                        }]), o.props.history.push("/play/battle-royale/match/preview")) : (o.props.prepareMatch(t.e, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                    })) : (o.props.prepareMatch(0, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                }));
                                                break;
                                            case null:
                                                o.props.deleteClient(), o.props.history.push("/play")
                                        }
                                    }));
                                case 16:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.readyTimeout), clearInterval(this.interval), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(x.u)()
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (this.ready && !this.answer) {
                            this.answer = t, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var e = p()() - this.startTime;
                            this.props.client.answer || (this.props.answerRoyale(this.answer, this.props.client.question.correctAnswers.includes(this.answer), parseFloat(e.toFixed(0)), this.props.client.question.number), this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "a/".concat(this.props.client.name),
                                val: {
                                    a: this.props.client.question.answers.indexOf(this.answer),
                                    t: parseFloat(e.toFixed(0))
                                }
                            })), this.props.history.push("/play/battle-royale/answer/sent")
                        }
                    }
                }, {
                    key: "readQuestion",
                    value: (i = T(k().mark((function t() {
                        var e, r = this;
                        return k().wrap((function(t) {
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
                                        return e(r.props.client.question.text, "qText", t)
                                    }));
                                case 6:
                                    return t.next = 8, new Promise((function(t) {
                                        return e(r.props.client.question.answers[0], "q1", t)
                                    }));
                                case 8:
                                    return t.next = 10, new Promise((function(t) {
                                        return e(r.props.client.question.answers[1], "q2", t)
                                    }));
                                case 10:
                                    if (!this.props.client.question.answers[2]) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, new Promise((function(t) {
                                        return e(r.props.client.question.answers[2], "q3", t)
                                    }));
                                case 13:
                                    if (!this.props.client.question.answers[3]) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16, new Promise((function(t) {
                                        return e(r.props.client.question.answers[3], "q4", t)
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
                        return this.props.client && this.props.client.question && this.props.client.question.answers ? o.a.createElement("div", {
                            className: f.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(b.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy,
                            rightText: this.state.timer.toString(),
                            showRead: !0,
                            readQuestion: this.readQuestion
                        }), o.a.createElement(w.a, {
                            onAnswer: this.onAnswer,
                            text: this.props.client.question.text,
                            answers: this.props.client.question.answers,
                            image: this.props.client.question.image,
                            audio: this.props.client.question.audio,
                            readId: this.state.readId
                        })) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            I.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                answerRoyale: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: m.a,
                    answerRoyale: d,
                    prepareMatch: y.a
                }, t)
            }))(Object(O.d)(I)))
        },
        Z49x: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "SET_ROYALE_RESULTS"
        },
        azI4: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__header___3Qd3O-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___2NJqr-camelCase,.styles__header___3Qd3O-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;-webkit-animation:styles__fadeIn___2QwhX-camelCase .3s linear .3s forwards;animation:styles__fadeIn___2QwhX-camelCase .3s linear .3s forwards}.styles__container___2NJqr-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___hzzsr-camelCase{font-size:30px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:20%;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;opacity:0;-webkit-animation:styles__fadeIn___2QwhX-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___2QwhX-camelCase .3s linear 1.3s forwards}.styles__background___WwuTj-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___2QwhX-camelCase .3s linear 0s forwards;animation:styles__fadeIn___2QwhX-camelCase .3s linear 0s forwards}@-webkit-keyframes styles__fadeIn___2QwhX-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2QwhX-camelCase{0%{opacity:0}to{opacity:1}}", ""]), e.locals = {
                header: "styles__header___3Qd3O-camelCase",
                container: "styles__container___2NJqr-camelCase",
                fadeIn: "styles__fadeIn___2QwhX-camelCase",
                correctAnswers: "styles__correctAnswers___hzzsr-camelCase",
                background: "styles__background___WwuTj-camelCase"
            }
        },
        bB3c: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return M
            }));
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("oqc9"),
                p = r("+xn+"),
                f = r("HbJ1"),
                h = r("VgyX"),
                d = r("kQZX"),
                y = r("Xst1"),
                m = r.n(y),
                b = r("eeML"),
                v = r.n(b),
                g = r("XTAU"),
                _ = r("YHq4"),
                w = r("zYB6"),
                O = r("Ne9t"),
                x = r("+fLB"),
                j = r("74sb");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function T(t, e) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function S(t) {
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
                    var r, n = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function q(t, e) {
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
                }(t, e) || I(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(t) {
                return function(t) {
                    if (Array.isArray(t)) return B(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || I(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t, e) {
                if (t) {
                    if ("string" == typeof t) return B(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? B(t, e) : void 0
                }
            }

            function B(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function N(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(r), !0).forEach((function(e) {
                        D(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(e) {
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
            var M = function(t, e, r, n, o, i) {
                    var a = JSON.parse(JSON.stringify(t || [])),
                        s = Object(j.w)(a.map((function(t) {
                            return A({}, t)
                        })).filter((function(t) {
                            return t && t.name && t.blook
                        }))),
                        c = JSON.parse(JSON.stringify(o || []));
                    if (0 === c.length) return null;
                    var l = JSON.parse(JSON.stringify(r || []));
                    l.length === c.length && (l = []);
                    var u = c.filter((function(t) {
                            return !l.includes(t.number)
                        })),
                        p = Object(j.p)(u);
                    l.push(p.number);
                    var f = n ? L(n) : [];
                    f.length < c.length && f.push(p.number);
                    var h = L(p.answers);
                    p.random && (h = Object(j.w)(h));
                    for (var d = A(A({}, p), {}, {
                            answers: h
                        }), y = [], m = 0; m < p.answers.length; m++) y.push(h.indexOf(p.answers[m]));
                    var b = y.join(""),
                        v = [],
                        g = {};
                    if (s.length % 2 == 1) {
                        var _ = Object(j.p)(s);
                        s.splice(s.indexOf(_), 1);
                        var w = Object(j.p)(s);
                        v.push([A(A({}, _), {}, {
                            time: 0,
                            correct: !1
                        }), A(A({}, w), {}, {
                            clone: !0,
                            time: 0,
                            correct: !1
                        })]), g[_.name] = {
                            b: _.blook,
                            e: _.energy,
                            op: w.name
                        }
                    }
                    for (var O = 0; O < s.length; O += 2) v.unshift([A(A({}, s[O]), {}, {
                        time: 0,
                        correct: !1
                    }), A(A({}, s[O + 1]), {}, {
                        time: 0,
                        correct: !1
                    })]), g[s[O].name] = {
                        b: s[O].blook,
                        e: s[O].energy,
                        op: s[O + 1].name
                    }, g[s[O + 1].name] = {
                        b: s[O + 1].blook,
                        e: s[O + 1].energy,
                        op: s[O].name
                    };
                    if (Object.values(i).forEach((function(t) {
                            t.forEach((function(t) {
                                g[t.name] = {
                                    b: t.blook,
                                    e: 0
                                }
                            }))
                        })), e) {
                        var x = {};
                        Object.entries(g).forEach((function(t) {
                            var e = q(t, 2),
                                r = e[0],
                                n = e[1],
                                o = JSON.parse(JSON.stringify(a)).filter((function(t) {
                                    return t.blook === n.b
                                }));
                            if (o[0] && o[0].players) {
                                var i = o[0].players;
                                Object.entries(i).forEach((function(t) {
                                    var e = q(t, 2),
                                        r = e[0],
                                        n = e[1];
                                    i[r] = n.blook
                                })), x[r] = {
                                    e: n.e,
                                    b: n.b,
                                    op: n.op,
                                    p: i
                                }
                            }
                        })), g = x
                    }
                    return {
                        question: d,
                        usedQuestions: l,
                        questionsPlayed: f,
                        matches: v,
                        answerString: b,
                        dbPlayers: g
                    }
                },
                H = function(t) {
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
                        }), e && T(t, e)
                    }(a, t);
                    var e, r, n, i = S(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            winner: {},
                            loser: {},
                            bothWin: !1,
                            bothLose: !1,
                            ready: !1,
                            matches: [],
                            muted: !!t.host && t.host.muted
                        }, e.ok = !1, e.changeMuted = e.changeMuted.bind(P(e)), e.audio = new Audio(O.a), e.audio.muted = e.state.muted, e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.host && this.props.host.round && this.props.host.matches) {
                                var e = this.props.host,
                                    r = Math.max(10500, 6e3 + 500 * e.matches.length);
                                1 !== e.matches.length && u.animateScroll.scrollToBottom({
                                    duration: .3 * r,
                                    delay: .4 * r,
                                    smooth: "linear",
                                    containerId: "matches"
                                }), this.readyTimeout = setTimeout((function() {
                                    t.audio.play(), t.setState({
                                        ready: !0
                                    })
                                }), 4600);
                                var n = e.matches[0][0],
                                    o = e.matches[0][1],
                                    i = n.correct && !o.correct || n.correct && n.time <= o.time,
                                    a = o.correct && !n.correct || o.correct && o.time <= n.time;
                                this.setState({
                                    winner: i ? n : o,
                                    loser: i ? o : n,
                                    bothLose: !i && !a,
                                    bothWin: i && a,
                                    matches: JSON.parse(JSON.stringify(this.props.host.matches))
                                }), this.timeout = setTimeout((function() {
                                    if (1 === t.props.host.players.length) {
                                        var e = [],
                                            r = t.props.host.dead,
                                            n = t.props.host.settings.energy,
                                            o = t.props.host.safes,
                                            i = 2;
                                        Object.values(r).forEach((function(t) {
                                            i += t.length
                                        }));
                                        for (var a = n; a <= t.props.host.round; a++)
                                            if (r[a]) {
                                                i -= r[a].length;
                                                var s = a - n;
                                                if (o[0] && o[0] < a)
                                                    for (var c = 0; c < o.length; c++) o[c] < a && (s -= 1);
                                                for (var l = 0; l < r[a].length; l++) "Teams" === t.props.host.settings.mode ? e.push({
                                                    name: r[a][l].name,
                                                    blook: r[a][l].blook,
                                                    players: r[a][l].players,
                                                    place: i,
                                                    wins: s
                                                }) : e.push({
                                                    name: r[a][l].name,
                                                    blook: r[a][l].blook,
                                                    place: i,
                                                    wins: s
                                                })
                                            }
                                        "Teams" === t.props.host.settings.mode ? e.push({
                                            name: t.props.host.players[0].name,
                                            blook: t.props.host.players[0].blook,
                                            players: t.props.host.players[0].players,
                                            place: 1,
                                            wins: e.length > 0 ? e[e.length - 1].wins + t.props.host.players[0].energy : t.props.host.players[0].energy
                                        }) : e.push({
                                            name: t.props.host.players[0].name,
                                            blook: t.props.host.players[0].blook,
                                            place: 1,
                                            wins: e.length > 0 ? e[e.length - 1].wins + t.props.host.players[0].energy : t.props.host.players[0].energy
                                        }), e = e.reverse(), t.props.updateStandings(e);
                                        var u = {};
                                        e.forEach((function(e) {
                                            e.blook && (u[e.name] = {
                                                n: e.name,
                                                b: e.blook,
                                                p: e.place,
                                                w: e.wins,
                                                nu: "Teams" === t.props.host.settings.mode ? Object.keys(e.players).length : 1
                                            })
                                        })), t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "st",
                                            val: u
                                        }, (function() {
                                            t.props.firebase.setStage({
                                                id: t.props.host.id,
                                                stage: "fin"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/final")
                                            }))
                                        }))
                                    } else {
                                        var p = M(t.props.host.players, "Teams" === t.props.host.settings.mode, t.props.host.usedQuestions, t.props.host.questionsPlayed, t.props.host.questions, t.props.host.dead);
                                        t.props.prepareRoyale(t.props.host.round + 1, p.usedQuestions, p.questionsPlayed, "q-".concat(p.question.stdNumber, "-").concat(p.answerString), p.question, p.matches), t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "c",
                                            val: p.dbPlayers
                                        }, (function() {
                                            t.props.firebase.setStage({
                                                id: t.props.host.id,
                                                stage: "prv"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/match/preview")
                                            }))
                                        }))
                                    }
                                }), r + 600)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
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
                            if (!this.props.host || !this.props.host.round || !this.props.host.matches) return o.a.createElement(l.a, {
                                to: "/dashboard"
                            });
                            var e = this.props.host;
                            return o.a.createElement("div", {
                                className: m.a.body
                            }, o.a.createElement(g.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), o.a.createElement(d.a, {
                                left: "Round ".concat(e.round),
                                right: this.state.ready ? "".concat(e.players.length, " ").concat(1 === e.players.length ? "".concat("Teams" === e.settings.mode ? "Team" : "Player", " Remains") : "".concat("Teams" === e.settings.mode ? "Teams" : "Players", " Remain")) : "".concat(e.players.length + (e.dead[e.round] ? e.dead[e.round].length : 0), " ").concat("Teams" === e.settings.mode ? "Teams" : "Players", " Remain"),
                                muted: this.state.muted,
                                changeMuted: this.changeMuted
                            }), o.a.createElement("div", {
                                className: m.a.hostRegularBody,
                                style: {
                                    backgroundColor: "#3907c0"
                                }
                            }, 1 !== e.matches.length ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                                alt: "Waves",
                                className: v.a.wavesBg
                            }), o.a.createElement("div", {
                                className: v.a.header
                            }, "Match Results"), o.a.createElement(u.Element, {
                                className: v.a.matchArray,
                                id: "matches"
                            }, this.state.matches.map((function(r) {
                                return o.a.createElement(_.a, {
                                    match: r,
                                    key: r[0].name,
                                    ready: t.state.ready,
                                    safe: e.safe
                                })
                            })))) : o.a.createElement(w.a, {
                                winner: this.state.winner,
                                loser: this.state.loser,
                                bothWin: this.state.bothWin,
                                bothLose: this.state.bothLose,
                                win: !(this.state.bothLose || e.safe),
                                safe: e.safe,
                                team: "Teams" === e.settings.mode
                            })))
                        }
                    }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            H.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    players: c.a.array,
                    round: c.a.number,
                    usedQuestions: c.a.array,
                    questionsPlayed: c.a.array,
                    matches: c.a.array,
                    dead: c.a.object,
                    safe: c.a.bool,
                    safes: c.a.array,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                prepareRoyale: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    updateStandings: p.b,
                    prepareRoyale: p.a,
                    setMuted: f.a,
                    deleteHost: h.d
                }, t)
            }))(Object(x.d)(H)))
        },
        bsaY: function(t, e, r) {
            var n = r("azI4");
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
        eeML: function(t, e, r) {
            var n = r("grrT");
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
        en9I: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__fadeWaiting___250uL-camelCase{opacity:1}.styles__fade___1cvkw-camelCase,.styles__fadeWaiting___250uL-camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___1cvkw-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___2HfGM-camelCase{-webkit-animation:styles__fadeOut___1Q_QK-camelCase .3s linear .5s forwards;animation:styles__fadeOut___1Q_QK-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeOut___1Q_QK-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___1Q_QK-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                fadeWaiting: "styles__fadeWaiting___250uL-camelCase",
                fade: "styles__fade___1cvkw-camelCase",
                textFade: "styles__textFade___2HfGM-camelCase",
                fadeOut: "styles__fadeOut___1Q_QK-camelCase"
            }
        },
        "f1Y/": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("HbJ1"),
                p = r("VgyX"),
                f = r("kQZX"),
                h = r("Xst1"),
                d = r.n(h),
                y = r("XTAU"),
                m = r("3Ak+"),
                b = r("+fLB");

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function _(t, e) {
                return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function w(t) {
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
                    var r, n = j(t);
                    if (e) {
                        var o = j(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(t, e) {
                if (e && ("object" === v(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return x(t)
            }

            function x(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var k = function(t) {
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
                    }), e && _(t, e)
                }(a, t);
                var e, r, n, i = w(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.next = e.next.bind(x(e)), e.changeMuted = e.changeMuted.bind(x(e)), e
                }
                return e = a, (r = [{
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "pmat-".concat(this.props.host.safe ? "1" : "0")
                        }, (function() {
                            t.setState({
                                transitioning: !0
                            }, (function() {
                                t.transitionTimeout = setTimeout((function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/match/results")
                                }), 300)
                            }))
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.host && this.props.host.question && this.props.host.question.text ? o.a.createElement("div", {
                            className: d.a.body
                        }, o.a.createElement(y.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(f.a, {
                            left: "Round ".concat(this.props.host.round),
                            right: "".concat(this.props.host.players.length + (this.props.host.dead[this.props.host.round] ? this.props.host.dead[this.props.host.round].length : 0), " ").concat("Teams" === this.props.host.settings.mode ? "Teams" : "Players", " Remain"),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement(m.a, {
                            next: this.next,
                            time: 7,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            correctAnswers: this.props.host.question.correctAnswers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            clientAnswers: this.props.host.clientAnswers,
                            numClients: this.props.host.numClients,
                            transitioning: this.state.transitioning,
                            muted: this.state.muted,
                            canSkip: !0
                        })) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && g(e.prototype, r), n && g(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            k.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    round: c.a.number,
                    players: c.a.array,
                    matches: c.a.array,
                    clientAnswers: c.a.array,
                    forDead: c.a.array,
                    numClients: c.a.number,
                    dead: c.a.object,
                    safe: c.a.bool,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setMuted: u.a,
                    deleteHost: p.d
                }, t)
            }))(Object(b.d)(k)))
        },
        grrT: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__wavesBg___2URcc-camelCase{position:absolute;bottom:0;left:0;width:100%;mix-blend-mode:overlay}.styles__header___2zco1-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;margin:4vh auto;width:100%;text-align:center;-webkit-animation:styles__fadeInPop___2O_Zq-camelCase .3s linear .5s forwards;animation:styles__fadeInPop___2O_Zq-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeInPop___2O_Zq-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}@keyframes styles__fadeInPop___2O_Zq-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.styles__matchArray___2iZVn-camelCase{overflow:hidden;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;padding:1vh 0;box-sizing:border-box;display:flex;flex-direction:column;align-content:flex-start;opacity:0;-webkit-animation:styles__fadeIn___1lPIs-camelCase .3s linear .75s forwards;animation:styles__fadeIn___1lPIs-camelCase .3s linear .75s forwards}@-webkit-keyframes styles__fadeIn___1lPIs-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1lPIs-camelCase{0%{opacity:0}to{opacity:1}}.styles__invisible___3zprf-camelCase{opacity:0;transition:opacity .5s linear}", ""]), e.locals = {
                wavesBg: "styles__wavesBg___2URcc-camelCase",
                header: "styles__header___2zco1-camelCase",
                fadeInPop: "styles__fadeInPop___2O_Zq-camelCase",
                matchArray: "styles__matchArray___2iZVn-camelCase",
                fadeIn: "styles__fadeIn___1lPIs-camelCase",
                invisible: "styles__invisible___3zprf-camelCase"
            }
        },
        "l/mY": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__statContainer___3Usxp-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__blookText___bAdYE-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__blookImg___iW4VE-camelCase{margin-left:5px;width:25px}", ""]), e.locals = {
                statContainer: "styles__statContainer___3Usxp-camelCase",
                blookText: "styles__blookText___bAdYE-camelCase",
                blookImg: "styles__blookImg___iW4VE-camelCase"
            }
        },
        lwdi: function(t, e, r) {
            var n = r("l/mY");
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
        mlez: function(t, e, r) {
            var n = r("KVnH");
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
        oQpA: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("TSYQ"),
                f = r.n(p),
                h = r("yiF6"),
                d = r("ZrUs"),
                y = r("Xst1"),
                m = r.n(y),
                b = r("7rY/"),
                v = r.n(b),
                g = r("XTAU"),
                _ = r("Rnav"),
                w = r("FVRk"),
                O = r("4Zpe"),
                x = r("0oXL"),
                j = r("LHn/"),
                k = r("GxJ0"),
                E = r("74sb"),
                T = r("+fLB");

            function S(t) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function P(t, e) {
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

            function q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                q = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == S(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function j(t) {
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
                        next: k
                    }
                }

                function k() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
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
                            iterator: j(t),
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

            function I(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            L(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            L(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function B(t, e) {
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

            function A(t) {
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
                    var r, n = H(t);
                    if (e) {
                        var o = H(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return D(this, r)
                }
            }

            function D(t, e) {
                if (e && ("object" === S(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return M(t)
            }

            function M(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function H(t) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var z = function(t) {
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
                var e, r, n, i, a, s = A(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        question: {},
                        correct: !1,
                        ready: !1,
                        prize: "",
                        players: [],
                        stage: "",
                        numBlooks: 3,
                        numDefense: 0,
                        readId: "",
                        canGather: !1,
                        fadeOut: !1
                    }, e.dbRefStage = {}, e.dbRefMe = {}, e.corrects = {}, e.incorrects = {}, e.questions = [], e.freeQuestions = [], e.waiting = !1, e.picking = !1, e.nextReady = !0, e.here = !0, e.msg = {}, e.isReading = !1, e.isTeam = t.client && t.client.team, e.onAnswer = e.onAnswer.bind(M(e)), e.answerNext = e.answerNext.bind(M(e)), e.randomQ = e.randomQ.bind(M(e)), e.choosePrize = e.choosePrize.bind(M(e)), e.selectPlayer = e.selectPlayer.bind(M(e)), e.readQuestion = e.readQuestion.bind(M(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = I(q().mark((function t() {
                        var e = this;
                        return q().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(E.c)(), this.isTeam || this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name, "/bs"),
                                        val: 3
                                    }), t.next = 6, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 6:
                                    return this.dbRefStage = t.sent, this.dbRefStage.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "fin":
                                                e.props.firebase.getDatabaseVal(e.props.client.hostId, "st", (function(t) {
                                                    var r = t ? t.map((function(t) {
                                                        return {
                                                            name: t.n,
                                                            blook: t.b,
                                                            numBlooks: t.bs || 0,
                                                            place: t.p
                                                        }
                                                    })) : [];
                                                    e.props.setGoldFinal(e.corrects, e.incorrects, r), e.props.history.push("/play/rush/final")
                                                }));
                                                break;
                                            case null:
                                                e.props.firebase.getDatabaseVal(e.props.client.hostId, "stg", (function(t) {
                                                    t || (e.props.deleteClient(), e.props.history.push("/play"))
                                                }))
                                        }
                                    })), t.next = 10, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.isTeam ? this.props.client.team.name : this.props.client.name));
                                case 10:
                                    this.dbRefMe = t.sent, this.dbRefMe.on("value", (function(t) {
                                        t.val() && e.setState({
                                            numBlooks: t.val().bs || 0,
                                            numDefense: t.val().d || 0
                                        })
                                    })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                case 15:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(E.u)(), clearTimeout(this.nextTimeout), clearTimeout(this.nextReadyTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.pickingTimeout), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        var e = this;
                        if (!this.waiting && this.here) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var r = this.state.question.correctAnswers.includes(t),
                                n = this.state.question.number;
                            r ? this.corrects[n] ? this.corrects[n] += 1 : this.corrects[n] = 1 : this.incorrects[n] ? this.incorrects[n] += 1 : this.incorrects[n] = 1, this.setState({
                                correct: r,
                                stage: "feedback",
                                readId: ""
                            }, (function() {
                                e.nextReady = !1, e.nextReadyTimeout = setTimeout((function() {
                                    e.nextReady = !0
                                }), 350)
                            }))
                        }
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        var t = this;
                        this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? this.setState({
                            stage: "prize",
                            canGather: 0 === Object(E.r)(0, 20),
                            ready: !1,
                            prize: ""
                        }, (function() {
                            t.pickingTimeout = setTimeout((function() {
                                t.picking = !0
                            }), 350)
                        })) : this.randomQ())
                    }
                }, {
                    key: "randomQ",
                    value: function() {
                        var t = this;
                        if (this.here) {
                            clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                            var e = Object(E.p)(this.freeQuestions);
                            this.freeQuestions.splice(this.freeQuestions.indexOf(e), 1), e.random && (e.answers = Object(E.w)(e.answers)), this.setState({
                                question: e,
                                stage: "question",
                                fadeOut: !1
                            }, (function() {
                                t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                    t.waiting = !1
                                }), 400)
                            }))
                        }
                    }
                }, {
                    key: "choosePrize",
                    value: function(t) {
                        var e = this;
                        if (this.picking)
                            if (this.picking = !1, "defend" === t) {
                                var r = Math.min(this.state.numDefense + 1, 4);
                                this.setState({
                                    numDefense: r
                                }), this.isTeam ? this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "a/".concat(this.props.client.name, "/d"),
                                    val: 1
                                }) : this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name, "/d"),
                                    val: r
                                }), this.setState({
                                    prize: t,
                                    numDefense: r,
                                    fadeOut: !0
                                }, (function() {
                                    e.nextTimeout = setTimeout((function() {
                                        e.randomQ()
                                    }), 450)
                                }))
                            } else if ("gather" === t && this.state.canGather) {
                            var n = this.state.numBlooks + 1;
                            this.setState({
                                numBlooks: n
                            }), this.isTeam ? this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "a/".concat(this.props.client.name, "/bs"),
                                val: 1
                            }) : this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name, "/bs"),
                                val: n
                            }), this.setState({
                                prize: t,
                                numBlooks: n,
                                fadeOut: !0
                            }, (function() {
                                e.nextTimeout = setTimeout((function() {
                                    e.randomQ()
                                }), 450)
                            }))
                        } else clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                            e.randomQ()
                        }), 15e3), this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(r) {
                            var n = r ? Object.entries(r).map((function(t) {
                                var e = P(t, 2),
                                    r = e[0],
                                    n = e[1];
                                return {
                                    name: r,
                                    blook: n.b,
                                    numBlooks: n.bs || 0,
                                    numDefense: n.d || 0
                                }
                            })).filter((function(t) {
                                return t.name !== (e.isTeam ? e.props.client.team.name : e.props.client.name) && !(0 === t.numBlooks && 0 === t.numDefense)
                            })) : [];
                            n.sort((function(t, e) {
                                return e.numBlooks !== t.numBlooks ? e.numBlooks - t.numBlooks : e.numDefense - t.numDefense
                            })), n = n.slice(0, 8), e.setState({
                                players: n,
                                prize: t
                            }, (function() {
                                e.nextTimeout = setTimeout((function() {
                                    e.next = !1, e.setState({
                                        ready: !0
                                    })
                                }), 450)
                            }))
                        }))
                    }
                }, {
                    key: "selectPlayer",
                    value: function(t) {
                        var e = this;
                        this.state.ready && !this.next && (this.next = !0, clearTimeout(this.claimTimeout), this.props.firebase.setVal({
                            id: this.props.client.hostId,
                            path: this.isTeam ? "a/".concat(this.props.client.name, "/tat") : "c/".concat(this.props.client.name, "/tat"),
                            val: t.name
                        }), this.setState({
                            fadeOut: !0
                        }, (function() {
                            e.nextTimeout = setTimeout((function() {
                                e.randomQ()
                            }), 450)
                        })))
                    }
                }, {
                    key: "readQuestion",
                    value: (i = I(q().mark((function t() {
                        var e, r = this;
                        return q().wrap((function(t) {
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
                        if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return o.a.createElement(l.a, {
                            to: "/play"
                        });
                        var e = this.isTeam ? this.props.client.team.blook : this.props.client.blook;
                        return o.a.createElement("div", {
                            className: u.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(g.a, {
                            title: "Play Blook Rush | Blooket",
                            desc: "Engage in an exciting, fast-paced review game where you collect Blooks by answering questions."
                        }), o.a.createElement(_.a, {
                            name: this.props.client.name,
                            showRead: "question" === this.state.stage,
                            readQuestion: this.readQuestion,
                            blook: e,
                            numBlooks: this.state.numBlooks,
                            numDefense: this.state.numDefense
                        }), "question" === this.state.stage ? o.a.createElement("div", {
                            className: v.a.fadeIn
                        }, o.a.createElement(w.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId
                        })) : "feedback" === this.state.stage ? o.a.createElement("div", {
                            className: v.a.feedbackContainer
                        }, o.a.createElement(O.a, {
                            incorrectTime: 5,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        })) : "attack" === this.state.prize ? o.a.createElement("div", {
                            className: f()(m.a.regularBody, v.a.background, C({}, v.a.fadeOut, this.state.fadeOut))
                        }, this.state.players.length > 0 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: v.a.playerHeader
                        }, o.a.createElement("div", {
                            className: v.a.headerInside
                        }, "Choose a Player to Attack")), o.a.createElement("div", {
                            className: v.a.shelves
                        }, new Array(Math.ceil(Object.keys(this.state.players).length / 4)).fill(0).map((function(t, e) {
                            return o.a.createElement("div", {
                                className: v.a.shelfContainer,
                                key: e
                            }, o.a.createElement("div", {
                                className: v.a.shelf
                            }), o.a.createElement("div", {
                                className: v.a.shelfBot
                            }))
                        }))), o.a.createElement("div", {
                            className: v.a.rushBoxesHolder
                        }, this.state.players.slice(0, 8).map((function(e) {
                            return o.a.createElement(k.a, {
                                key: e.name,
                                name: e.name,
                                blook: e.blook,
                                numBlooks: e.numBlooks,
                                numDefense: e.numDefense,
                                onClick: function() {
                                    return t.selectPlayer(e)
                                }
                            })
                        })))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: v.a.header
                        }, o.a.createElement("div", {
                            className: v.a.headerInside
                        }, "No Valid Targets")), o.a.createElement("div", {
                            className: v.a.nothingButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.randomQ
                        }, o.a.createElement("div", {
                            className: v.a.headerInside
                        }, "Next")))) : "prize" === this.state.stage ? o.a.createElement("div", {
                            className: f()(m.a.regularBody, v.a.background, C({}, v.a.fadeOut, this.state.fadeOut))
                        }, o.a.createElement("div", {
                            className: v.a.bigShelf
                        }), o.a.createElement("div", {
                            className: v.a.bigShelfBot
                        }), o.a.createElement("div", {
                            className: v.a.left
                        }, o.a.createElement(k.a, {
                            name: this.isTeam ? this.props.client.team.name : this.props.client.name,
                            blook: e,
                            numBlooks: this.state.numBlooks,
                            numDefense: this.state.numDefense,
                            bigBox: !0
                        })), o.a.createElement("div", {
                            className: v.a.right
                        }, o.a.createElement("div", {
                            className: v.a.header
                        }, o.a.createElement("div", {
                            className: v.a.headerInside
                        }, "Choose an Action!")), o.a.createElement("div", {
                            className: v.a.prizeRow
                        }, this.state.canGather ? o.a.createElement("div", {
                            className: v.a.longPrizeContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.choosePrize("gather")
                            }
                        }, o.a.createElement("div", {
                            className: v.a.prizeInside
                        }, o.a.createElement("div", {
                            className: v.a.prizeText
                        }, "Gather Free Blook"), o.a.createElement(x.a, {
                            name: e,
                            className: v.a.gatherBlook
                        }))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: v.a.prizeContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.choosePrize("attack")
                            }
                        }, o.a.createElement("div", {
                            className: v.a.prizeInside
                        }, o.a.createElement("div", {
                            className: v.a.prizeText
                        }, "Attack"), o.a.createElement("img", {
                            src: j.a.basic.sword,
                            alt: "Sword",
                            className: v.a.prizeImg,
                            draggable: !1
                        }))), o.a.createElement("div", {
                            className: f()(v.a.prizeContainer, C({}, v.a.noButton, this.state.numDefense >= 4)),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.numDefense >= 4 ? function() {} : function() {
                                return t.choosePrize("defend")
                            }
                        }, o.a.createElement("div", {
                            className: v.a.prizeInside
                        }, o.a.createElement("div", {
                            className: v.a.prizeText
                        }, this.state.numDefense >= 4 ? "Max (".concat(4, ")") : "Defend"), o.a.createElement("img", {
                            src: j.a.basic.shield,
                            alt: "Shield",
                            className: v.a.prizeImg,
                            draggable: !1
                        }))))))) : null)
                    }
                }]) && B(e.prototype, r), n && B(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            z.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                firebase: c.a.object,
                deleteClient: c.a.func.isRequired,
                setGoldFinal: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: d.a,
                    setGoldFinal: h.a
                }, t)
            }))(Object(T.d)(z)))
        },
        ouoo: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__feedbackContainer___cIMVp-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__background___3RZ_c-camelCase{background:repeating-linear-gradient(45deg,transparent,transparent 16vw,#e6e6e6 0,#e6e6e6 32vw)}.styles__background___3RZ_c-camelCase,.styles__fadeIn___27sq--camelCase{opacity:0;-webkit-animation:styles__fadeIn___27sq--camelCase .25s forwards;animation:styles__fadeIn___27sq--camelCase .25s forwards}@-webkit-keyframes styles__fadeIn___27sq--camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___27sq--camelCase{0%{opacity:0}to{opacity:1}}.styles__left___hKOp2-camelCase{position:absolute;top:45%;right:72.5%;transform:translate(50%,-50%)}.styles__bigShelf___P3if4-camelCase{top:calc(45% + 15.2vw);height:18.2vw;background-color:#36c}.styles__bigShelf___P3if4-camelCase,.styles__bigShelfBot___3PYHs-camelCase{position:absolute;right:72.5%;width:35vw;transform:translate(50%,-100%)}.styles__bigShelfBot___3PYHs-camelCase{top:calc(45% + 17.5vw);height:2.5vw;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}.styles__right___114Qi-camelCase{left:52.5%;height:80%;width:40%}.styles__header___d0wD9-camelCase,.styles__right___114Qi-camelCase{position:absolute;top:10%}.styles__header___d0wD9-camelCase{font-size:3.5vw;color:#fff;text-align:center;left:50%;transform:translateX(-50%);width:40vw;height:7.5vw;background-color:#36c;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerInside___qmln7-camelCase{background-color:#36c;border:5px solid #fff;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);border-radius:5px;flex-direction:column;justify-content:center}.styles__headerInside___qmln7-camelCase,.styles__prizeRow___2ujov-camelCase{display:flex;align-items:center}.styles__prizeRow___2ujov-camelCase{flex-direction:row;justify-content:space-evenly;position:absolute;top:65%;left:50%;width:100%;max-width:700px;transform:translate(-50%,-50%)}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{display:flex;align-items:center;justify-content:center;width:14vw;height:14vw;border-radius:5px;background-color:#36c;box-shadow:7px 7px 0 rgba(0,0,0,.2);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__longPrizeContainer___3dlWq-camelCase:hover,.styles__prizeContainer___2eaHT-camelCase:hover{transform:scale(.95)}.styles__longPrizeContainer___3dlWq-camelCase{width:30vw;height:15vw}.styles__noButton___1QMma-camelCase{cursor:default;opacity:.4}.styles__noButton___1QMma-camelCase:hover{transform:scale(1)}.styles__prizeInside___2wuAK-camelCase{background-color:#36c;border:5px solid #fff;margin:9px;width:calc(100% - 28px);height:calc(100% - 28px);border-radius:5px;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__prizeText___9Ym4y-camelCase{font-family:Titan One,sans-serif;font-size:2.5vw;color:#fff;margin-bottom:1vw}.styles__prizeImg___imshQ-camelCase{width:50%}.styles__gatherBlook___2yj_v-camelCase{width:20%}.styles__nothingButton___2IZqZ-camelCase{position:absolute;top:calc(50% - 3.25vw);left:calc(50% - 6.25vw);display:flex;align-items:center;justify-content:center;width:12.5vw;height:6.5vw;border-radius:5px;background-color:#36c;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:2.5vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__nothingButton___2IZqZ-camelCase:hover{transform:scale(.95)}.styles__playerHeader___9Tdp--camelCase{font-size:30px;color:#fff;text-align:center;position:absolute;top:2.5%;left:50%;transform:translateX(-50%);width:500px;height:80px;background-color:#36c;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__rushBoxesHolder___dF1BJ-camelCase{left:5%;width:90%;flex-flow:row wrap;align-content:space-evenly}.styles__rushBoxesHolder___dF1BJ-camelCase,.styles__shelves___6GL1D-camelCase{position:absolute;top:calc(4% + 80px);height:calc(91% - 80px);display:flex;justify-content:space-evenly}.styles__shelves___6GL1D-camelCase{width:100%;left:0;flex-direction:column}.styles__shelfContainer___YMayW-camelCase{width:100%;height:45%;position:relative;margin:0 auto}.styles__shelf___2jGCM-camelCase{bottom:-5%;height:70%;background-color:#36c}.styles__shelf___2jGCM-camelCase,.styles__shelfBot___1ZbPk-camelCase{position:absolute;left:0;width:100%}.styles__shelfBot___1ZbPk-camelCase{bottom:-15%;height:10%;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}@media only screen and (max-width:850px){.styles__header___d0wD9-camelCase{font-size:3.5vw;width:40vw;height:10vw}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:16vw;height:16vw}.styles__longPrizeContainer___3dlWq-camelCase{width:32vw;height:17vw}}@media only screen and (max-width:700px){.styles__left___hKOp2-camelCase{top:unset;bottom:60%;right:50%;transform:translate(50%)}.styles__bigShelf___P3if4-camelCase{bottom:57%;height:calc(3% + 23vh)}.styles__bigShelf___P3if4-camelCase,.styles__bigShelfBot___3PYHs-camelCase{top:unset;right:7.5%;width:85%;transform:none}.styles__bigShelfBot___3PYHs-camelCase{bottom:53.5%;height:4.5%}.styles__right___114Qi-camelCase{position:absolute;top:50%;left:2.5%;height:45%;width:95%}.styles__header___d0wD9-camelCase{font-size:7vw;top:2.5%;width:80vw;height:17vw}.styles__headerInside___qmln7-camelCase{border:4px solid #fff;margin:7px;width:calc(100% - 22px);height:calc(100% - 22px)}.styles__prizeRow___2ujov-camelCase{top:75%;left:50%;width:100%;max-width:700px;transform:translate(-50%,-50%)}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:25vw;height:25vw;border-radius:5px}.styles__prizeText___9Ym4y-camelCase{font-size:4.7vw;margin-bottom:2vw}.styles__longPrizeContainer___3dlWq-camelCase{width:75vw;height:23vw}.styles__prizeInside___2wuAK-camelCase{margin:7px;width:calc(100% - 22px);height:calc(100% - 22px)}.styles__gatherBlook___2yj_v-camelCase{width:12.5%}.styles__nothingButton___2IZqZ-camelCase{top:calc(50% - 7.5vw);left:calc(50% - 17.5vw);width:35vw;height:15vw;font-size:7vw}.styles__rushBoxesHolder___dF1BJ-camelCase{top:calc(4% + 80px);height:calc(94% - 80px);left:5%;width:90%}.styles__shelves___6GL1D-camelCase{display:none}}@media only screen and (max-width:500px){.styles__prizeRow___2ujov-camelCase{top:70%}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:35vw;height:35vw;border-radius:5px}.styles__prizeText___9Ym4y-camelCase{font-size:6vw;margin-bottom:3vw}.styles__longPrizeContainer___3dlWq-camelCase{width:75vw;height:32vw}.styles__gatherBlook___2yj_v-camelCase{width:15%}.styles__playerHeader___9Tdp--camelCase{font-size:18px;top:2.5%;width:300px;height:55px}.styles__rushBoxesHolder___dF1BJ-camelCase{top:calc(4% + 55px);height:calc(94% - 55px);left:5%;width:90%}}.styles__fadeOut___P3x7S-camelCase{opacity:1;-webkit-animation:styles__fadeOut___P3x7S-camelCase .25s forwards;animation:styles__fadeOut___P3x7S-camelCase .25s forwards}@-webkit-keyframes styles__fadeOut___P3x7S-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___P3x7S-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                feedbackContainer: "styles__feedbackContainer___cIMVp-camelCase",
                background: "styles__background___3RZ_c-camelCase",
                fadeIn: "styles__fadeIn___27sq--camelCase",
                left: "styles__left___hKOp2-camelCase",
                bigShelf: "styles__bigShelf___P3if4-camelCase",
                bigShelfBot: "styles__bigShelfBot___3PYHs-camelCase",
                right: "styles__right___114Qi-camelCase",
                header: "styles__header___d0wD9-camelCase",
                headerInside: "styles__headerInside___qmln7-camelCase",
                prizeRow: "styles__prizeRow___2ujov-camelCase",
                longPrizeContainer: "styles__longPrizeContainer___3dlWq-camelCase",
                prizeContainer: "styles__prizeContainer___2eaHT-camelCase",
                noButton: "styles__noButton___1QMma-camelCase",
                prizeInside: "styles__prizeInside___2wuAK-camelCase",
                prizeText: "styles__prizeText___9Ym4y-camelCase",
                prizeImg: "styles__prizeImg___imshQ-camelCase",
                gatherBlook: "styles__gatherBlook___2yj_v-camelCase",
                nothingButton: "styles__nothingButton___2IZqZ-camelCase",
                playerHeader: "styles__playerHeader___9Tdp--camelCase",
                rushBoxesHolder: "styles__rushBoxesHolder___dF1BJ-camelCase",
                shelves: "styles__shelves___6GL1D-camelCase",
                shelfContainer: "styles__shelfContainer___YMayW-camelCase",
                shelf: "styles__shelf___2jGCM-camelCase",
                shelfBot: "styles__shelfBot___1ZbPk-camelCase",
                fadeOut: "styles__fadeOut___P3x7S-camelCase"
            }
        },
        qSUq: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__background___2Dwm_-camelCase{background:repeating-linear-gradient(45deg,transparent,transparent 12vw,#e6e6e6 0,#e6e6e6 24vw)}.styles__rushBoxesHolder___18_t3-camelCase{left:5%;width:90%;flex-flow:row wrap;align-content:space-evenly}.styles__rushBoxesHolder___18_t3-camelCase,.styles__shelves___16K60-camelCase{position:absolute;top:1.5%;height:93.5%;display:flex;justify-content:space-evenly}.styles__shelves___16K60-camelCase{width:100%;left:0;flex-direction:column}.styles__shelfContainer___qvsIo-camelCase{width:100%;height:45%;position:relative;margin:0 auto}.styles__shelf___2GdNc-camelCase{bottom:-5%;height:70%;background-color:#36c}.styles__shelf___2GdNc-camelCase,.styles__shelfBot___2enFi-camelCase{position:absolute;left:0;width:100%}.styles__shelfBot___2enFi-camelCase{bottom:-15%;height:10%;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}", ""]), e.locals = {
                background: "styles__background___2Dwm_-camelCase",
                rushBoxesHolder: "styles__rushBoxesHolder___18_t3-camelCase",
                shelves: "styles__shelves___16K60-camelCase",
                shelfContainer: "styles__shelfContainer___qvsIo-camelCase",
                shelf: "styles__shelf___2GdNc-camelCase",
                shelfBot: "styles__shelfBot___2enFi-camelCase"
            }
        },
        qgFL: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "ANSWER_ROYALE"
        },
        sDqx: function(t, e, r) {
            var n = r("1exF");
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
        tmkA: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                p = r("ZrUs"),
                f = r("oQ+7"),
                h = r("lwdi"),
                d = r.n(h),
                y = r("Xst1"),
                m = r.n(y),
                b = r("XTAU"),
                v = r("2ZNs"),
                g = r("0oXL"),
                _ = r("74sb"),
                w = r("+fLB"),
                O = r("qnYv");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

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

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(r), !0).forEach((function(e) {
                        E(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function E(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t) {
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
                    var r, n = q(t);
                    if (e) {
                        var o = q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return R(t)
            }

            function R(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var L = function(t) {
                    return o.a.createElement("div", {
                        className: d.a.statContainer
                    }, o.a.createElement("div", {
                        className: d.a.blookText
                    }, Object(_.v)(t.numBlooks)), o.a.createElement(g.a, {
                        name: t.blook,
                        className: d.a.blookImg
                    }))
                },
                I = function(t) {
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
                        }), e && S(t, e)
                    }(a, t);
                    var e, r, n, i = C(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, e.isTeam = t.client && t.client.team, e.saveStats = e.saveStats.bind(R(e)), e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: k({}, this.props.client.corrects),
                                        i: k({}, this.props.client.incorrects)
                                    }
                                });
                                var e = this.props.client.standing.map((function(t) {
                                    return t.name
                                })).indexOf(this.isTeam ? this.props.client.team.name : this.props.client.name);
                                if (-1 !== e) {
                                    var r = 0,
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(t) {
                                        r += t, n += t
                                    })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                        n += t
                                    }));
                                    var o = this.props.client.standing[e].place;
                                    this.stats = {
                                        place: o,
                                        numBlooks: this.props.client.standing[e].numBlooks,
                                        playersDefeated: this.props.client.standing.length - o,
                                        correctAnswers: r,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        t.setState({
                                            ready: !0,
                                            numCorrect: r,
                                            numQuestions: n,
                                            me: t.props.client.standing[e]
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
                        value: function(t, e) {
                            O.a.put("/api/users/rushstats", {
                                name: t,
                                place: this.stats.place,
                                numBlooks: this.stats.numBlooks,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then(e).catch((function(t) {
                                console.error(t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(f.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.isTeam ? this.props.client.team.name : this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(_.o)(this.state.me.numBlooks), " ").concat(1 === this.state.me.numBlooks ? "Blook" : "Blooks"),
                                saveStats: this.saveStats,
                                renderStandingStat: L,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: m.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            I.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: p.a
                }, t)
            }))(Object(w.d)(I)))
        },
        uJ2A: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("oqc9"),
                p = r("HbJ1"),
                f = r("VgyX"),
                h = r("kQZX"),
                d = r("Xst1"),
                y = r.n(d),
                m = r("ufNI"),
                b = r.n(m),
                v = r("XTAU"),
                g = r("YHq4"),
                _ = r("+3yP"),
                w = r("+fLB");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function j(t, e) {
                return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function k(t) {
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
                    var r, n = S(t);
                    if (e) {
                        var o = S(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return E(this, r)
                }
            }

            function E(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function S(t) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var C = function(t) {
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
                    }), e && j(t, e)
                }(a, t);
                var e, r, n, i = k(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        timer: 8,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.changeMuted = e.changeMuted.bind(T(e)), e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.round && this.props.host.matches) {
                            u.animateScroll.scrollToBottom({
                                duration: 3e3,
                                delay: 2e3,
                                smooth: "linear",
                                containerId: "matches"
                            });
                            var e = 8;
                            this.timerInterval = setInterval((function() {
                                e -= 1, t.setState({
                                    timer: e
                                }), e <= 0 && (clearInterval(t.timerInterval), t.props.firebase.setStage({
                                    id: t.props.host.id,
                                    clearAnswers: !0,
                                    stage: t.props.host.questionString
                                }, (function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/question")
                                })))
                            }), 1e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timerInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (!this.props.host || !this.props.host.round || !this.props.host.matches) return o.a.createElement(l.a, {
                            to: "/dashboard"
                        });
                        var t = this.props.host;
                        return o.a.createElement("div", {
                            className: y.a.body,
                            style: {
                                backgroundColor: 1 === t.matches.length ? "#f7f7f7" : "#0bc2cf",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(h.a, {
                            left: "Round ".concat(t.round),
                            right: "".concat(t.players.length, " ").concat("Teams" === t.settings.mode ? "Teams" : "Players", " Remain"),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), 1 !== t.matches.length ? o.a.createElement("div", {
                            className: y.a.hostRegularBody,
                            style: {
                                backgroundColor: "#3907c0"
                            }
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                            alt: "Waves",
                            className: b.a.wavesBg
                        }), o.a.createElement("div", {
                            className: b.a.header
                        }, "Starting In ".concat(this.state.timer)), o.a.createElement(u.Element, {
                            className: b.a.matchArray,
                            id: "matches"
                        }, t.matches.map((function(t) {
                            return o.a.createElement(g.a, {
                                match: t,
                                key: t[0].name
                            })
                        })))) : o.a.createElement("div", {
                            className: y.a.hostRegularBody
                        }, o.a.createElement(_.a, {
                            name: t.matches[0][0].name,
                            match: t.matches[0],
                            maxEnergy: t.settings.energy,
                            team: "Teams" === t.settings.mode,
                            timer: this.state.timer
                        })))
                    }
                }]) && x(e.prototype, r), n && x(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            C.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    questionString: c.a.string,
                    settings: c.a.object,
                    players: c.a.array,
                    round: c.a.number,
                    usedQuestions: c.a.array,
                    matches: c.a.array,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: f.d,
                    setMuted: p.a
                }, t)
            }))(Object(w.d)(C)))
        },
        ufNI: function(t, e, r) {
            var n = r("vypJ");
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
        vRck: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("Z49x");

            function p(t, e, r, n, o, i, a) {
                return {
                    type: u.a,
                    clientAnswers: t,
                    matches: e,
                    players: r,
                    numClients: n,
                    dead: o,
                    forDead: i,
                    safe: a
                }
            }
            var f = r("HbJ1"),
                h = r("VgyX"),
                d = r("kQZX"),
                y = r("Xst1"),
                m = r.n(y),
                b = r("XTAU"),
                v = r("goVm"),
                g = r("DrLq"),
                _ = r.n(g),
                w = r("+fLB");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(r), !0).forEach((function(e) {
                        k(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function k(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function E(t, e) {
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
                    if ("string" == typeof t) return T(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
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
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = _(a, r);
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

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(k([])));
                m && m !== e && r.call(m, o) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
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

                function _(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function w(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function k(t) {
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, s(b, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, v(b), s(b, a, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, t.values = k, j.prototype = {
                    constructor: j,
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
                            iterator: k(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function C(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function q(t) {
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
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return I(t)
            }

            function I(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = function(t) {
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
                    }), e && R(t, e)
                }(c, t);
                var e, r, n, i, a, s = q(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        numAnswers: 0,
                        numClients: 0,
                        players: 0,
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !0, e.dbRef = {}, e.answerObj = {}, e.next = e.next.bind(I(e)), e.changeMuted = e.changeMuted.bind(I(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = S().mark((function t() {
                        var e, r = this;
                        return S().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return "Teams" === this.props.host.settings.mode ? (e = Object.values(this.props.host.players).reduce((function(t, e) {
                                        return t + Object.keys(e.players).length
                                    }), 0), this.props.host.dead && Object.keys(this.props.host.dead).length && Object.values(this.props.host.dead).forEach((function(t) {
                                        t.forEach((function(t) {
                                            e += Object.keys(t.players).length
                                        }))
                                    })), this.setState({
                                        numClients: e
                                    })) : this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(t) {
                                        if (r.props.host && r.props.host.settings && r.props.host.settings.mode) {
                                            var e = t || {};
                                            r.setState({
                                                numClients: Object.keys(e).length
                                            })
                                        }
                                    })), this.setState({
                                        players: this.props.host.players.length
                                    }), t.next = 6, this.props.firebase.getDatabaseRef(this.props.host.id, "a");
                                case 6:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var e = t.val() ? Object.values(t.val()) : [];
                                        e.length > 0 && !r.state.muted && new Audio(_.a).play(), r.answerObj = t.val() || {}, r.setState({
                                            numAnswers: e.length
                                        }), e.length === r.state.numClients && 0 !== r.state.numClients && r.next()
                                    }));
                                case 8:
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
                                C(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                C(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), Object.keys(this.dbRef).length && this.dbRef.off("value"), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.setState({
                            transitioning: !0
                        }, (function() {
                            if (t.props.host && t.props.host.matches) {
                                var e = JSON.parse(JSON.stringify(t.props.host.matches)),
                                    r = [];
                                Object.entries(t.answerObj).forEach((function(n) {
                                    var o = E(n, 2),
                                        i = o[0],
                                        a = o[1],
                                        s = t.props.host.question.correctAnswers.includes(t.props.host.question.answers[a.a]);
                                    if (s && r.push(a.t), "Teams" === t.props.host.settings.mode) {
                                        for (var c = s ? a.t : 1e3 * t.props.host.question.timeLimit, l = e.length - 1; l >= 0; l--)
                                            if (Object.keys(e[l][0].players).includes(i)) {
                                                if (e[l][0].players[i].time = c, s && (e[l][0].correct = !0), !e[l][0].clone) break
                                            } else if (Object.keys(e[l][1].players).includes(i) && (e[l][1].players[i].time = c, s && (e[l][1].correct = !0), !e[l][1].clone)) break
                                    } else
                                        for (var u = e.length - 1; u >= 0; u--)
                                            if (e[u][0].name === i) {
                                                if (e[u][0] = j(j({}, e[u][0]), {}, {
                                                        time: a.t,
                                                        correct: s
                                                    }), !e[u][0].clone) break
                                            } else if (e[u][1].name === i && (e[u][1] = j(j({}, e[u][1]), {}, {
                                            time: a.t,
                                            correct: s
                                        }), !e[u][1].clone)) break
                                }));
                                var n = function(e) {
                                    return e[1].time || 1e3 * t.props.host.question.timeLimit
                                };
                                if ("Teams" === t.props.host.settings.mode)
                                    for (var o = 0; o < e.length; o++) e[o][0].time = parseFloat((Object.entries(e[o][0].players).map(n).reduce((function(t, e) {
                                        return t + e
                                    }), 0) / Object.keys(e[o][0].players).length).toFixed(3)), e[o][1].time = parseFloat((Object.entries(e[o][1].players).map(n).reduce((function(t, e) {
                                        return t + e
                                    }), 0) / Object.keys(e[o][1].players).length).toFixed(3));
                                for (var i = t.props.host.players.map((function(t) {
                                        return j({}, t)
                                    })), a = t.props.host.players.map((function(t) {
                                        return t.name
                                    })), s = 0; s < e.length; s++) {
                                    var c = e[s];
                                    0 === c[0].time ? (e[s][0].time = 1e3 * t.props.host.question.timeLimit, -1 !== a.indexOf(c[0].name) && (i[a.indexOf(c[0].name)].energy -= 1)) : (!c[0].correct || c[1].correct && !c[0].correct || c[1].correct && c[1].time < c[0].time) && -1 !== a.indexOf(c[0].name) && (i[a.indexOf(c[0].name)].energy -= 1), c[1].clone ? 0 === c[1].time && (e[s][1].time = 1e3 * t.props.host.question.timeLimit) : 0 === c[1].time ? (e[s][1].time = 1e3 * t.props.host.question.timeLimit, -1 !== a.indexOf(c[1].name) && (i[a.indexOf(c[1].name)].energy -= 1)) : (!c[1].correct || c[0].correct && !c[1].correct || c[0].correct && c[0].time < c[1].time) && -1 !== a.indexOf(c[1].name) && (i[a.indexOf(c[1].name)].energy -= 1)
                                }
                                var l = j({}, t.props.host.dead),
                                    u = !1,
                                    p = i.filter((function(t) {
                                        return t.energy > 0
                                    }));
                                0 === p.length ? (u = !0, p = i.map((function(t) {
                                    return j(j({}, t), {}, {
                                        energy: 1
                                    })
                                }))) : l[t.props.host.round] = i.filter((function(t) {
                                    return t.energy <= 0
                                }));
                                for (var f = t.state.numClients - r.length, h = 0; h < f; h++) r.push(1e3 * t.props.host.question.timeLimit + 1);
                                t.transitionTimeout = setTimeout((function() {
                                    if (t.props.setRoyaleResults(Object.values(t.answerObj).map((function(t) {
                                            return t.a
                                        })), e, p, t.state.numClients, l, r, u), "Teams" === t.props.host.settings.mode) {
                                        var n = {};
                                        e.forEach((function(t) {
                                            n[t[0].name] = t[0].time, n[t[1].name] = t[1].time
                                        })), t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "c",
                                            val: n
                                        }, (function() {
                                            t.props.firebase.setStage({
                                                id: t.props.host.id,
                                                stage: "bres"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/question/results")
                                            }))
                                        }))
                                    } else t.props.firebase.setStage({
                                        id: t.props.host.id,
                                        stage: "bres"
                                    }, (function() {
                                        t.ok = !0, t.props.history.push("/host/battle-royale/question/results")
                                    }))
                                }), 300)
                            }
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches ? o.a.createElement("div", {
                            className: m.a.body
                        }, o.a.createElement(b.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(d.a, {
                            left: "Round ".concat(this.props.host.round),
                            right: "".concat(this.state.players || this.props.host.players.length, " ").concat("Teams" === this.props.host.settings.mode ? "Teams" : "Players", " Remain"),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement(v.a, {
                            next: this.next,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            timeLimit: this.props.host.question.timeLimit,
                            numAnswers: this.state.numAnswers,
                            numClients: this.state.numClients,
                            transitioning: this.state.transitioning,
                            muted: this.state.muted
                        })) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && P(e.prototype, r), n && P(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    round: c.a.number,
                    players: c.a.array,
                    matches: c.a.array,
                    dead: c.a.object,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setRoyaleResults: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.g)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setRoyaleResults: p,
                    setMuted: f.a,
                    deleteHost: h.d
                }, t)
            }))(Object(w.d)(N)))
        },
        vZaZ: function(t, e, r) {
            var n = r("en9I");
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
        vypJ: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__wavesBg___3LFvY-camelCase{position:absolute;bottom:0;left:0;width:100%;mix-blend-mode:overlay}.styles__header___3sxWE-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;margin:4vh auto;width:100%;text-align:center;-webkit-animation:styles__fadeInPop___30zIC-camelCase .3s linear .5s forwards;animation:styles__fadeInPop___30zIC-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeInPop___30zIC-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}@keyframes styles__fadeInPop___30zIC-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.styles__matchArray___1EXkh-camelCase{overflow:hidden;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;padding:1vh 0;box-sizing:border-box;display:flex;flex-direction:column;align-content:flex-start;opacity:0;-webkit-animation:styles__fadeIn___R7i1h-camelCase .3s linear .75s forwards;animation:styles__fadeIn___R7i1h-camelCase .3s linear .75s forwards}@-webkit-keyframes styles__fadeIn___R7i1h-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___R7i1h-camelCase{0%{opacity:0}to{opacity:1}}.styles__invisible___24KJJ-camelCase{opacity:0;transition:opacity .5s linear}", ""]), e.locals = {
                wavesBg: "styles__wavesBg___3LFvY-camelCase",
                header: "styles__header___3sxWE-camelCase",
                fadeInPop: "styles__fadeInPop___30zIC-camelCase",
                matchArray: "styles__matchArray___1EXkh-camelCase",
                fadeIn: "styles__fadeIn___R7i1h-camelCase",
                invisible: "styles__invisible___24KJJ-camelCase"
            }
        },
        y5Sv: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__eliminatedContainer___1wZ8Z-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;-webkit-animation:styles__fadeIn___1NQpJ-camelCase .1s linear .5s forwards;animation:styles__fadeIn___1NQpJ-camelCase .1s linear .5s forwards}@-webkit-keyframes styles__fadeIn___1NQpJ-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1NQpJ-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___1sthB-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___38YuM-camelCase{font-size:26px;font-family:Nunito,sans-serif}", ""]), e.locals = {
                eliminatedContainer: "styles__eliminatedContainer___1wZ8Z-camelCase",
                fadeIn: "styles__fadeIn___1NQpJ-camelCase",
                eliminatedHeader: "styles__eliminatedHeader___1sthB-camelCase",
                eliminatedText: "styles__eliminatedText___38YuM-camelCase"
            }
        }
    }
]);