(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        "+ccq": function(e, t, a) {
            var o = a("t7f9");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var s = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(o, s);
            o.locals && (e.exports = o.locals)
        },
        "8pR5": function(e, t, a) {
            "use strict";
            var o = a("q1tI"),
                s = a.n(o),
                n = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("4HzQ"),
                m = a("1F66"),
                f = a.n(m),
                h = a("ZRP+"),
                d = a("TSYQ"),
                _ = a.n(d),
                p = a("wd/R"),
                y = a.n(p),
                g = (a("RiPy"), a("+xn+")),
                b = a("HbJ1"),
                v = a("VgyX"),
                x = a("kQZX"),
                w = a("qFIf"),
                C = a("XTAU"),
                k = a("ca/f"),
                T = a("Xst1"),
                N = a.n(T),
                E = a("GZ6H"),
                O = a.n(E),
                j = a("h/RO"),
                S = a("+MJO"),
                B = a("W0Af"),
                I = a("FD/C"),
                F = a("4f5i"),
                P = a("0oXL"),
                A = a("HFYo"),
                z = a("aMAJ"),
                L = a("74sb"),
                q = a("Qovi"),
                R = a("ddTY"),
                M = a("+fLB");

            function U(e) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(a), !0).forEach((function(t) {
                        D(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : H(Object(a)).forEach((function(t) {
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

            function Q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var o, s, n = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, s = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw s
                        }
                    }
                    return n
                }(e, t) || Y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                W = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    s = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

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

                function l(e, t, a, o) {
                    var s = t && t.prototype instanceof m ? t : m,
                        n = Object.create(s.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, a) {
                        var o = "suspendedStart";
                        return function(s, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === s) throw n;
                                return T()
                            }
                            for (a.method = s, a.arg = n;;) {
                                var r = a.delegate;
                                if (r) {
                                    var i = v(r, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === o) throw o = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                o = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (o = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, r), n
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

                function m() {}

                function f() {}

                function h() {}
                var d = {};
                i(d, s, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    p = _ && _(_(k([])));
                p && p !== t && a.call(p, s) && (d = p);
                var y = h.prototype = m.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(s, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(s, n, r, i) {
                                    var l = c(e[s], e, n);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            m = u.value;
                                        return m && "object" == U(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            u.value = e, r(u)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(s, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
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
                    var o = c(a, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var s = o.arg;
                    return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[s];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (a.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return f.prototype = h, i(y, "constructor", h), i(h, "constructor", f), f.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, o, s, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, a, o, s), n);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, g(y), i(y, r, "Generator"), i(y, s, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return a.value = o, a.done = !1, a
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

                        function o(a, o) {
                            return r.type = "throw", r.arg = e, t.next = a, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = a.call(n, "catchLoc"),
                                    l = a.call(n, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (i) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o];
                            if (s.tryLoc <= this.prev && a.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                                var n = s;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(r)
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
                                var o = a.completion;
                                if ("throw" === o.type) {
                                    var s = o.arg;
                                    w(a)
                                }
                                return s
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

            function J(e) {
                return function(e) {
                    if (Array.isArray(e)) return X(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e, t) {
                if (e) {
                    if ("string" == typeof e) return X(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? X(e, t) : void 0
                }
            }

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                return o
            }

            function K(e, t, a, o, s, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, s)
            }

            function Z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function V(e, t) {
                return (V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $(e) {
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
                    var a, o = ae(e);
                    if (t) {
                        var s = ae(this).constructor;
                        a = Reflect.construct(o, arguments, s)
                    } else a = o.apply(this, arguments);
                    return ee(this, a)
                }
            }

            function ee(e, t) {
                if (t && ("object" === U(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return te(e)
            }

            function te(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ae(e) {
                return (ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var oe = ["#FF00FF", "#FF6600", "#FFFF00", "#00FFFF", "#FF0000", "#00FF00"],
                se = function(e) {
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
                        }), t && V(e, t)
                    }(l, e);
                    var t, a, o, n, r, i = $(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            timer: "00:00",
                            players: [],
                            alerts: [],
                            totalCash: 0,
                            glitch: "",
                            glitcherName: "",
                            glitcherBlook: "",
                            ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            hazards: ["", "", "", "", ""],
                            lunch: !1,
                            lol: !1,
                            joke: !1,
                            slow: !1,
                            dance: !1,
                            color: "",
                            muted: !!e.host && e.host.muted,
                            userToBlock: ""
                        }, t.ok = !1, t.dbRefAction = {}, t.alertContainer = s.a.createRef(), t.getClients = t.getClients.bind(te(t)), t.goNext = t.goNext.bind(te(t)), t.addAlert = t.addAlert.bind(te(t)), t.scrollToBottom = t.scrollToBottom.bind(te(t)), t.changeMuted = t.changeMuted.bind(te(t)), t.blockUser = t.blockUser.bind(te(t)), t.audio = new Audio(q.a), t.danceAudio = new Audio(R.a), t.audio.muted = t.state.muted, t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (n = W().mark((function e() {
                            var t, a, o = this;
                            return W().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.host && this.props.host.settings) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.audio.volume = .6, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                            o.audio.currentTime = 0, o.audio.play()
                                        }), !1), this.props.firebase.setStage({
                                            id: this.props.host.id,
                                            stage: "fact"
                                        }), this.getClients(!1), e.next = 9, this.props.firebase.getDatabaseRef(this.props.host.id, "act");
                                    case 9:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            var t = e.val();
                                            if (t)
                                                if (t.g) {
                                                    var a = z.b[t.g],
                                                        s = A.b[A.b.map((function(e) {
                                                            return e.name
                                                        })).indexOf(a)],
                                                        n = s.time;
                                                    if ("Lunch Break" === a) clearTimeout(o.lunchTimeout), o.setState({
                                                        lunch: !1
                                                    }, (function() {
                                                        o.setState({
                                                            lunch: !0
                                                        }, (function() {
                                                            o.lunchTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    lunch: !1
                                                                })
                                                            }), n)
                                                        }))
                                                    }));
                                                    else if ("Ad Spam" === a) clearTimeout(o.adTimeout), o.setState({
                                                        ads: J(o.state.ads).fill(0)
                                                    }, (function() {
                                                        var e = 0;
                                                        o.adTimeout = setTimeout((function t() {
                                                            var a = J(o.state.ads);
                                                            a[e] = 1, o.setState({
                                                                ads: a
                                                            }), (e += 1) < o.state.ads.length ? o.adTimeout = setTimeout(t, 800) : o.adTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    ads: J(o.state.ads).fill(0)
                                                                })
                                                            }), n - 8e3)
                                                        }), 800)
                                                    }));
                                                    else if ("Error 37" === a) {
                                                        clearInterval(o.hazardInterval), clearTimeout(o.nightTimeout);
                                                        var r = 3,
                                                            i = function() {
                                                                var e = Object(L.w)(oe).slice(0, 5);
                                                                o.setState({
                                                                    color: "error",
                                                                    hazards: e
                                                                })
                                                            };
                                                        i(), o.hazardInterval = setInterval((function() {
                                                            i(), r <= 0 ? (clearInterval(o.hazardInterval), o.setState({
                                                                color: ""
                                                            })) : r -= 1
                                                        }), 3250)
                                                    } else "Night Time" === a ? (clearInterval(o.hazardInterval), clearTimeout(o.nightTimeout), o.setState({
                                                        color: "night"
                                                    }, (function() {
                                                        o.nightTimeout = setTimeout((function() {
                                                            o.setState({
                                                                color: ""
                                                            })
                                                        }), n)
                                                    }))) : "#LOL" === a ? (clearTimeout(o.lolTimeout), o.setState({
                                                        lol: !1
                                                    }, (function() {
                                                        o.setState({
                                                            lol: !0
                                                        }, (function() {
                                                            o.lolTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    lol: !1
                                                                })
                                                            }), n)
                                                        }))
                                                    }))) : "Jokester" === a ? (clearTimeout(o.jokeTimeout), o.setState({
                                                        joke: !1
                                                    }, (function() {
                                                        o.setState({
                                                            joke: !0
                                                        }, (function() {
                                                            o.jokeTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    joke: !1
                                                                })
                                                            }), n)
                                                        }))
                                                    }))) : "Slow Mo" === a ? (clearTimeout(o.slowTimeout), o.setState({
                                                        slow: !1
                                                    }, (function() {
                                                        o.setState({
                                                            slow: !0
                                                        }, (function() {
                                                            o.slowTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    slow: !1
                                                                })
                                                            }), n)
                                                        }))
                                                    }))) : "Dance Party" === a ? (clearTimeout(o.danceTimeout), o.setState({
                                                        dance: !1
                                                    }, (function() {
                                                        o.setState({
                                                            dance: !0
                                                        }, (function() {
                                                            o.audio.pause(), o.danceAudio.currentTime = 0, o.danceAudio.play(), o.danceTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    dance: !1
                                                                }), o.danceAudio.pause(), o.audio.play()
                                                            }), n)
                                                        }))
                                                    }))) : (clearTimeout(o.glitchTimeout), o.setState({
                                                        glitch: ""
                                                    }, (function() {
                                                        o.setState({
                                                            glitch: a
                                                        }, (function() {
                                                            o.glitchTimeout = setTimeout((function() {
                                                                o.setState({
                                                                    glitch: ""
                                                                })
                                                            }), n)
                                                        }))
                                                    })));
                                                    o.setState({
                                                        glitcherName: t.n,
                                                        glitcherBlook: t.b
                                                    }), o.addAlert(t.n, t.b, "activated the ".concat(a, " glitch!"), "", [s.icon, s.color])
                                                } else if (t.s) {
                                                var l = t.s.split("-");
                                                o.addAlert(t.n, t.b, "has a ".concat(l[0], " ").concat(l[1], " synergy!"))
                                            } else t.t && o.addAlert(t.n, t.b, "now has 10 Blooks!")
                                        })), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, a = 4, this.setState({
                                            timer: y.a.duration(t, "seconds").format("mm:ss")
                                        }), this.timerInterval = setInterval((function() {
                                            t -= 1, o.setState({
                                                timer: y.a.duration(t, "seconds").format("mm:ss")
                                            }), t <= 0 ? (o.getClients(!0), clearInterval(o.timerInterval)) : 0 === a ? (o.getClients(!1), a = 4) : a -= 1
                                        }), 1e3)) : this.clientsInterval = setInterval((function() {
                                            o.getClients(!1)
                                        }), 4e3), this.alertContainer = document.querySelector("#alerts");
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), r = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, o) {
                                var s = n.apply(e, t);

                                function r(e) {
                                    K(s, a, o, r, i, "next", e)
                                }

                                function i(e) {
                                    K(s, a, o, r, i, "throw", e)
                                }
                                r(void 0)
                            }))
                        }, function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this;
                            clearInterval(this.timerInterval), clearInterval(this.hazardInterval), clearInterval(this.clientsInterval), clearTimeout(this.glitchTimeout), clearTimeout(this.adTimeout), clearTimeout(this.lunchTimeout), clearTimeout(this.jokeTimeout), clearTimeout(this.lolTimeout), clearTimeout(this.slowTimeout), clearTimeout(this.danceTimeout), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value"), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                e.audio.currentTime = 0, e.audio.play()
                            }), !1), this.danceAudio.currentTime = 0, this.danceAudio.pause()
                        }
                    }, {
                        key: "getClients",
                        value: function(e) {
                            var t = this;
                            this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(a) {
                                var o = a || {};
                                if (o && 0 !== Object.keys(o).length) {
                                    var s = !1,
                                        n = Object.entries(o).map((function(e) {
                                            var t = Q(e, 2),
                                                a = t[0],
                                                o = t[1];
                                            return {
                                                name: a,
                                                blook: o.b,
                                                cash: o.ca || 0,
                                                toAttack: o.tat,
                                                synergy: o.s
                                            }
                                        }));
                                    n.forEach((function(e) {
                                        if (e.toAttack && (t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "act",
                                                val: {
                                                    n: e.name,
                                                    b: e.blook,
                                                    g: e.toAttack
                                                }
                                            }), t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))), e.synergy) {
                                            var a = e.synergy.split("-");
                                            t.addAlert(e.name, e.blook, "has a ".concat(a[0], " ").concat(a[1], " synergy!")), t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/s"))
                                        }
                                    })), n.sort((function(e, t) {
                                        return t.cash - e.cash
                                    }));
                                    for (var r = 0, i = 0; i < n.length; i++) n[i].place = i + 1, r += n[i].cash, "Cash" === t.props.host.settings.mode && n[i].cash >= t.props.host.settings.amount && (s = !0);
                                    s ? t.goNext(J(n)) : t.setState({
                                        players: n,
                                        totalCash: r
                                    }), e && t.goNext(J(n))
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
                                    c: e.cash,
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
                                    t.ok = !0, t.props.history.push("/host/factory/final")
                                }))
                            }))
                        }
                    }, {
                        key: "addAlert",
                        value: function(e, t, a, o, s) {
                            var n = [].concat(J(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                endBlook: o,
                                glitchInfo: s
                            }]);
                            n.length > 15 && n.splice(0, 1), this.setState({
                                alerts: n
                            }, this.scrollToBottom)
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
                                o = t.length; - 1 !== a && (o = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                                return G(G({}, e), {}, {
                                    place: e.place > o ? e.place - 1 : e.place
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
                            if (!this.props.host || !this.props.host.settings) return s.a.createElement(c.a, {
                                to: "/dashboard"
                            });
                            var t = "night" === this.state.color,
                                a = "error" === this.state.color,
                                o = this.state.hazards;
                            return s.a.createElement("div", {
                                className: N.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundColor: t ? "#000" : a ? o[0] : null
                                }
                            }, s.a.createElement(C.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), s.a.createElement("div", {
                                className: "Vortex" === this.state.glitch ? N.a.factorySpin : "Reverse" === this.state.glitch ? N.a.factoryReverse : "Flip" === this.state.glitch ? N.a.factoryFlip : "Micro" === this.state.glitch ? N.a.factoryMicro : null
                            }, s.a.createElement(x.a, {
                                left: "Blooket",
                                center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: $".concat(Object(L.o)(this.props.host.settings.amount)),
                                right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                color: t ? "#000" : a ? o[1] : null,
                                muted: this.state.muted,
                                changeMuted: this.changeMuted,
                                onRightClick: function() {
                                    return e.getClients(!0)
                                }
                            }), s.a.createElement("div", {
                                className: N.a.hostRegularBody
                            }, s.a.createElement(f.a, {
                                data: this.state.players,
                                keyAccessor: function(e) {
                                    return e.name
                                },
                                start: function(e) {
                                    return {
                                        x: -60,
                                        y: 11 * (e.place - 1)
                                    }
                                },
                                enter: function(e) {
                                    return {
                                        x: [0],
                                        y: [11 * (e.place - 1)],
                                        timing: {
                                            duration: 1e3,
                                            ease: h.a
                                        }
                                    }
                                },
                                update: function(e) {
                                    return {
                                        x: [0],
                                        y: [11 * (e.place - 1)],
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
                            }, (function(n) {
                                return s.a.createElement("div", {
                                    className: _()(O.a.left, O.a.invisibleScrollbar)
                                }, n.map((function(n) {
                                    var r = n.key,
                                        i = n.data,
                                        l = n.state,
                                        c = l.x,
                                        m = l.y;
                                    return s.a.createElement("div", {
                                        key: r,
                                        style: {
                                            opacity: e.state.userToBlock === i.name ? .4 : null,
                                            transform: "translate(".concat(c, "vw, ").concat(m, "vh)"),
                                            backgroundColor: t ? "#000" : a ? o[2] : "#fff"
                                        },
                                        className: O.a.standingContainer,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setState({
                                                userToBlock: i.name
                                            })
                                        }
                                    }, s.a.createElement(u.Textfit, {
                                        className: O.a.placeText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        min: 1,
                                        max: Object(L.D)("5vw"),
                                        style: {
                                            color: t ? "#fff" : null
                                        }
                                    }, i.place), s.a.createElement("div", {
                                        className: O.a.superPlaceText,
                                        style: {
                                            color: t ? "#fff" : null
                                        }
                                    }, Object(L.h)(i.place)), s.a.createElement(P.a, {
                                        name: i.blook,
                                        className: O.a.blookBox
                                    }), s.a.createElement(u.Textfit, {
                                        className: O.a.nameText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        min: 1,
                                        max: Object(L.D)("4vw"),
                                        style: {
                                            color: t ? "#fff" : null
                                        }
                                    }, i.name), s.a.createElement(u.Textfit, {
                                        className: O.a.cashText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        min: 1,
                                        max: Object(L.D)("5vw"),
                                        style: {
                                            color: t ? "#fff" : null
                                        }
                                    }, "$".concat(Object(L.v)(i.cash))))
                                })))
                            })), s.a.createElement("div", {
                                className: _()(O.a.chatroom, O.a.invisibleScrollbar),
                                id: "alerts",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[3] : null
                                }
                            }, this.state.alerts[0] ? this.state.alerts.map((function(e, a) {
                                return s.a.createElement(w.a, {
                                    key: a,
                                    name: e.name,
                                    blook: e.blook,
                                    message: e.msg,
                                    endBlook: e.endBlook,
                                    glitchInfo: e.glitchInfo,
                                    night: t
                                })
                            })) : s.a.createElement("div", {
                                className: O.a.noAlerts,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, s.a.createElement("i", {
                                className: _()(O.a.noAlertsIcon, "far fa-clock")
                            }), s.a.createElement("div", {
                                className: O.a.noAlertsText
                            }, "Waiting For Action..."))), s.a.createElement(u.Textfit, {
                                className: O.a.totalCashText,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(L.D)("7vw"),
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : null,
                                    color: t ? "#fff" : null
                                }
                            }, "$".concat(Object(L.o)(this.state.totalCash)))), this.state.lunch ? s.a.createElement("div", {
                                className: N.a.modal
                            }, s.a.createElement("i", {
                                className: _()("fas fa-hamburger", O.a.burger),
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }), s.a.createElement("div", {
                                className: O.a.burgerText
                            }, "Lunch Break")) : null, this.state.ads.reduce((function(e, t) {
                                return e + t
                            }), 0) > 0 ? s.a.createElement(S.a, {
                                ads: this.state.ads,
                                onClick: function() {},
                                night: t,
                                hazards: [a].concat(J(o))
                            }) : null, this.state.lol ? s.a.createElement(j.a, null) : null, this.state.joke ? s.a.createElement(B.a, null) : null, this.state.slow ? s.a.createElement(I.a, {
                                night: t
                            }) : null), this.state.dance ? s.a.createElement(F.a, {
                                name: this.state.glitcherName,
                                blook: this.state.glitcherBlook
                            }) : null, this.state.userToBlock ? s.a.createElement(k.a, {
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
                            }) : null)
                        }
                    }]) && Z(t.prototype, a), o && Z(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(s.a.Component);
            se.propTypes = {
                host: l.a.object,
                firebase: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                setMuted: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(n.b)({
                    updateStandings: g.b,
                    setMuted: b.a,
                    deleteHost: v.d
                }, e)
            }))(Object(M.d)(se)))
        },
        AAdL: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___25cFz-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;overflow-x:visible}.styles__left___25cFz-camelCase,.styles__standingContainer___2n9nm-camelCase{position:absolute;width:35vw}.styles__standingContainer___2n9nm-camelCase{height:8vh;border-radius:8px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___2n9nm-camelCase:hover{opacity:.4}.styles__placeText___3aJzG-camelCase{text-align:center;padding:1vh 0 1vh .5vw;min-width:2vw;line-height:6vh;text-align:right}.styles__placeText___3aJzG-camelCase,.styles__superPlaceText___2JeiS-camelCase{color:#3a3a3a;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2JeiS-camelCase{text-align:left;width:1vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___2E1Kg-camelCase{margin-left:1.5vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___e9dmN-camelCase{padding:1vh 1vw;text-align:left;flex-grow:1}.styles__cashText___2A7mF-camelCase,.styles__nameText___e9dmN-camelCase{font-weight:700;color:#3a3a3a;line-height:6vh;font-family:Nunito,sans-serif}.styles__cashText___2A7mF-camelCase{padding:1vh 1.5vw;width:7vw;text-align:right;overflow:hidden}.styles__chatroom___1yUfO-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;padding:15px 0;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:8px;overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___3-NaW-camelCase::-webkit-scrollbar{width:0}.styles__noAlerts___3dunJ-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#3a3a3a}.styles__noAlertsIcon___i0aLh-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___atCX9-camelCase{font-size:3vw}.styles__noAlertsText___atCX9-camelCase,.styles__totalCashText___1fJbY-camelCase{font-weight:700;font-family:Nunito,sans-serif}.styles__totalCashText___1fJbY-camelCase{color:#fff;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;text-align:center;position:absolute;left:45vw;top:80%;width:46vw;height:calc(15% - 2vh);padding:1vh 2vw}.styles__burger___2OI7t-camelCase{top:45%;font-size:37vh;color:#f60}.styles__burger___2OI7t-camelCase,.styles__burgerText___3ni73-camelCase{position:absolute;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__burgerText___3ni73-camelCase{font-family:Nunito,sans-serif;font-size:8vh;width:80%;font-weight:700;color:#fff;top:80%;text-align:center}", ""]), t.locals = {
                left: "styles__left___25cFz-camelCase",
                standingContainer: "styles__standingContainer___2n9nm-camelCase",
                placeText: "styles__placeText___3aJzG-camelCase",
                superPlaceText: "styles__superPlaceText___2JeiS-camelCase",
                blookBox: "styles__blookBox___2E1Kg-camelCase",
                nameText: "styles__nameText___e9dmN-camelCase",
                cashText: "styles__cashText___2A7mF-camelCase",
                chatroom: "styles__chatroom___1yUfO-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___3-NaW-camelCase",
                noAlerts: "styles__noAlerts___3dunJ-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___i0aLh-camelCase",
                noAlertsText: "styles__noAlertsText___atCX9-camelCase",
                totalCashText: "styles__totalCashText___1fJbY-camelCase",
                burger: "styles__burger___2OI7t-camelCase",
                burgerText: "styles__burgerText___3ni73-camelCase"
            }
        },
        FRAn: function(e, t, a) {
            "use strict";
            var o = a("q1tI"),
                s = a.n(o),
                n = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                m = a("ZrUs"),
                f = a("oQ+7"),
                h = a("oK/k"),
                d = a.n(h),
                _ = a("Xst1"),
                p = a.n(_),
                y = a("XTAU"),
                g = a("pQbs"),
                b = a("2ZNs"),
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
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(a), !0).forEach((function(t) {
                        N(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function N(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function E(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function O(e, t) {
                return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, o = I(e);
                    if (t) {
                        var s = I(this).constructor;
                        a = Reflect.construct(o, arguments, s)
                    } else a = o.apply(this, arguments);
                    return S(this, a)
                }
            }

            function S(e, t) {
                if (t && ("object" === C(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return B(e)
            }

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = function(e) {
                    return s.a.createElement("div", {
                        className: d.a.cashText
                    }, "$".concat(Object(v.v)(e.cash)))
                },
                P = function(e) {
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
                        }), t && O(e, t)
                    }(r, e);
                    var t, a, o, n = j(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = n.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            standings: [],
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(B(t)), t.renderStats = t.renderStats.bind(B(t)), t.isSolo = !1, t.isHW = !1, t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.isSolo = this.props.client.mode.includes("Solo"), this.isHW = Boolean(this.props.client.hwId), this.isSolo || this.isHW || this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: T({}, this.props.client.corrects),
                                        i: T({}, this.props.client.incorrects)
                                    }
                                });
                                var t = JSON.parse(JSON.stringify(this.props.client.standing));
                                t.sort((function(e, t) {
                                    return e.place - t.place
                                }));
                                var a = t.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name || "You");
                                if (-1 !== a) {
                                    var o = 0,
                                        s = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        o += e, s += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        s += e
                                    })), this.isHW && w.a.post("/api/results", {
                                        hwId: this.props.client.hwId,
                                        name: this.props.client.name,
                                        data: {
                                            corrects: this.props.client.corrects,
                                            incorrects: this.props.client.incorrects,
                                            cash: Number(t[a].cash)
                                        }
                                    }).catch((function(e) {
                                        return console.error(e)
                                    }));
                                    var n = t[a].place;
                                    this.stats = {
                                        place: n,
                                        cash: t[a].cash,
                                        playersDefeated: t.length - n,
                                        correctAnswers: o,
                                        upgrades: this.props.client.upgrades,
                                        blookUsed: this.props.client.blook || t[a].blook,
                                        nameUsed: this.props.client.name || "You",
                                        mode: this.props.client.mode
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            standings: t,
                                            numCorrect: o,
                                            numQuestions: s,
                                            me: t[a]
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
                            w.a.put("/api/users/factorystats", {
                                name: e,
                                place: this.stats.place,
                                cash: this.stats.cash,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                upgrades: this.stats.upgrades,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                mode: this.stats.mode
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return s.a.createElement(g.a, {
                                title: "Upgrades",
                                stat: this.props.client.upgrades
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? s.a.createElement("div", {
                                className: u.isMobile ? p.a.mBody : p.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, s.a.createElement(y.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), s.a.createElement(f.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? s.a.createElement(b.a, {
                                standings: this.state.standings,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "$".concat(Object(v.o)(this.state.me.cash)),
                                saveStats: this.saveStats,
                                renderStandingStat: F,
                                renderStats: this.renderStats,
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? s.a.createElement("div", {
                                className: p.a.blockedText
                            }, "You were blocked from this game.") : null) : s.a.createElement(c.a, {
                                to: "/play"
                            })
                        }
                    }]) && E(t.prototype, a), o && E(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(s.a.Component);
            P.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(n.b)({
                    deleteClient: m.a
                }, e)
            }))(Object(x.d)(P)))
        },
        GQvx: function(e, t, a) {
            "use strict";
            var o = a("q1tI"),
                s = a.n(o),
                n = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("H1WH"),
                m = a("TSYQ"),
                f = a.n(m),
                h = a("zUlG"),
                d = a("Xst1"),
                _ = a.n(d),
                p = a("+ccq"),
                y = a.n(p),
                g = a("Rnav"),
                b = a("XTAU"),
                v = a("E8Bj"),
                x = a("0oXL"),
                w = a("LAIx"),
                C = a("74sb"),
                k = a("qnYv");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    s = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

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

                function l(e, t, a, o) {
                    var s = t && t.prototype instanceof m ? t : m,
                        n = Object.create(s.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, a) {
                        var o = "suspendedStart";
                        return function(s, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === s) throw n;
                                return E()
                            }
                            for (a.method = s, a.arg = n;;) {
                                var r = a.delegate;
                                if (r) {
                                    var i = v(r, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === o) throw o = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                o = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (o = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, r), n
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

                function m() {}

                function f() {}

                function h() {}
                var d = {};
                i(d, s, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    p = _ && _(_(k([])));
                p && p !== t && a.call(p, s) && (d = p);
                var y = h.prototype = m.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(s, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(s, n, r, i) {
                                    var l = c(e[s], e, n);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            m = u.value;
                                        return m && "object" == T(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            u.value = e, r(u)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(s, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
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
                    var o = c(a, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var s = o.arg;
                    return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[s];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (a.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return f.prototype = h, i(y, "constructor", h), i(h, "constructor", f), f.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, o, s, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, a, o, s), n);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, g(y), i(y, r, "Generator"), i(y, s, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return a.value = o, a.done = !1, a
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

                        function o(a, o) {
                            return r.type = "throw", r.arg = e, t.next = a, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = a.call(n, "catchLoc"),
                                    l = a.call(n, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (i) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o];
                            if (s.tryLoc <= this.prev && a.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                                var n = s;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(r)
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
                                var o = a.completion;
                                if ("throw" === o.type) {
                                    var s = o.arg;
                                    w(a)
                                }
                                return s
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

            function E(e, t, a, o, s, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, s)
            }

            function O(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var a, o = F(e);
                    if (t) {
                        var s = F(this).constructor;
                        a = Reflect.construct(o, arguments, s)
                    } else a = o.apply(this, arguments);
                    return B(this, a)
                }
            }

            function B(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function F(e) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = function(e) {
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
                }(l, e);
                var t, a, o, n, r, i = S(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        questions: [],
                        ready: !1
                    }, t.redirect = !1, t.here = !0, t.startGame = t.startGame.bind(I(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (n = N().mark((function e() {
                        var t = this;
                        return N().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.id || this.props.client && this.props.client.hwId) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    this.props.client && this.props.client.hwId && this.props.client.questions ? this.setState({
                                        questions: this.props.client.questions,
                                        ready: !0
                                    }) : k.a.get("/api/games", {
                                        params: {
                                            gameId: this.props.id
                                        }
                                    }).then((function(e) {
                                        t.here && t.setState({
                                            questions: e.data.questions.map((function(e) {
                                                return {
                                                    text: e.question,
                                                    answers: e.answers,
                                                    correctAnswers: e.correctAnswers,
                                                    number: e.number,
                                                    random: e.random,
                                                    image: e.image ? e.image.url : null,
                                                    audio: e.audio ? e.audio.url : null
                                                }
                                            })),
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
                    })), r = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, o) {
                            var s = n.apply(e, t);

                            function r(e) {
                                E(s, a, o, r, i, "next", e)
                            }

                            function i(e) {
                                E(s, a, o, r, i, "throw", e)
                            }
                            r(void 0)
                        }))
                    }, function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "startGame",
                    value: function() {
                        this.state.ready && (this.props.addQuestions(this.state.questions), this.props.history.push("/play/factory"))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.id && (!this.props.client || !this.props.client.hwId) || this.state.ready && 0 === this.state.questions.length ? s.a.createElement(c.a, {
                            to: "/play"
                        }) : s.a.createElement("div", {
                            className: u.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, s.a.createElement(b.a, {
                            title: "Load Factory | Blooket",
                            desc: "Start a new game or load a saved game of Blooket's Factory."
                        }), s.a.createElement(g.a, {
                            name: this.props.client && this.props.client.name ? this.props.client.name : "",
                            noRight: !0
                        }), s.a.createElement("div", {
                            className: _.a.regularBody,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                overflow: "hidden"
                            }
                        }, s.a.createElement("div", {
                            className: y.a.header
                        }, "Factory"), s.a.createElement("div", {
                            className: y.a.buttonContainer
                        }, s.a.createElement("div", {
                            className: y.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.startGame
                        }, "Start Game")), s.a.createElement("div", {
                            className: y.a.factoriesContainer
                        }, s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Chick",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-50%)",
                                backgroundColor: Object(w.a)("Chick")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "III: $".concat(Object(C.v)(65), " / 1s")), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#4bc22e"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(3e4)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "🌽"))), s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Jester",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-30%)",
                                backgroundColor: Object(w.a)("Jester")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "I: $".concat(Object(C.v)(25e3), " / 3s")), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#999"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(2e6)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "⚔️"))), s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Walrus",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-60%)",
                                backgroundColor: Object(w.a)("Walrus")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "IV: $".concat(Object(C.v)(3700), " / 4s")), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#999"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(1e6)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "❄️"))), s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Hamster",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-45%)",
                                backgroundColor: Object(w.a)("Hamster")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "III: $450 / 4s"), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#4bc22e"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(8e4)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "🐾"))), s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Macaw",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-80%)",
                                backgroundColor: Object(w.a)("Macaw")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "II: $8 / 1s"), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#4bc22e"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(5400)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "🌴"))), s.a.createElement("div", {
                            className: y.a.factory
                        }, s.a.createElement("div", {
                            className: y.a.blookHolder
                        }, s.a.createElement(x.a, {
                            name: "Jaguar",
                            className: y.a.factoryBlook
                        }), s.a.createElement("div", {
                            className: y.a.factoryBarHolder
                        }, s.a.createElement("div", {
                            className: y.a.factoryBar,
                            style: {
                                transform: "translateX(-20%)",
                                backgroundColor: Object(w.a)("Jaguar")
                            }
                        }))), s.a.createElement("div", {
                            className: y.a.blookDesc
                        }, "I: $8 / 3s"), s.a.createElement("div", {
                            className: y.a.factoryButtonContainer
                        }, s.a.createElement("div", {
                            className: y.a.factoryUpgrade,
                            style: {
                                color: "#4bc22e"
                            }
                        }, s.a.createElement("i", {
                            className: f()(y.a.upgradeIcon, "fas fa-angle-double-up")
                        }), s.a.createElement("div", {
                            className: y.a.upgradeText
                        }, "$".concat(Object(C.v)(390)))), s.a.createElement("div", {
                            className: y.a.factoryClass
                        }, "🌴"))))))
                    }
                }]) && O(t.prototype, a), o && O(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(s.a.Component);
            P.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                id: l.a.string,
                addQuestions: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(v.c)(Object(c.g)(Object(r.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(n.b)({
                    addQuestions: h.b
                }, e)
            }))(P)))
        },
        GZ6H: function(e, t, a) {
            var o = a("AAdL");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var s = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(o, s);
            o.locals && (e.exports = o.locals)
        },
        HFYo: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "a", (function() {
                return i
            }));
            var o = a("LAIx"),
                s = [{
                    name: "Chick",
                    color: Object(o.a)("Chick"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [3, 7, 65, 400, 2500],
                    time: [1, 1, 1, 1, 1],
                    price: [300, 3e3, 3e4, 2e5]
                }, {
                    name: "Chicken",
                    color: Object(o.a)("Chicken"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [10, 40, 200, 1400, 1e4],
                    time: [5, 4, 3, 2, 1],
                    price: [570, 4e3, 5e4, 8e5]
                }, {
                    name: "Cow",
                    color: Object(o.a)("Cow"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [25, 75, 1500, 25e3, 25e4],
                    time: [15, 10, 10, 10, 5],
                    price: [500, 9500, 16e4, 4e6]
                }, {
                    name: "Duck",
                    color: Object(o.a)("Duck"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [4, 24, 200, 3e3, 4e4],
                    time: [3, 3, 3, 3, 3],
                    price: [450, 4200, 7e4, 11e5]
                }, {
                    name: "Goat",
                    color: Object(o.a)("Goat"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [5, 28, 200, 1300, 12e3],
                    time: [3, 3, 2, 2, 2],
                    price: [500, 6400, 45e3, 5e5]
                }, {
                    name: "Horse",
                    color: Object(o.a)("Horse"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [5, 20, 270, 1800, 15e3],
                    time: [2, 2, 2, 2, 2],
                    price: [550, 8200, 65e3, 6e5]
                }, {
                    name: "Pig",
                    color: Object(o.a)("Pig"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [20, 50, 1300, 8e3, 8e4],
                    time: [7, 7, 7, 7, 5],
                    price: [400, 11e3, 8e4, 13e5]
                }, {
                    name: "Sheep",
                    color: Object(o.a)("Sheep"),
                    class: "🌽",
                    rarity: "Common",
                    cash: [6, 25, 250, 1500, 11e3],
                    time: [3, 3, 3, 2, 2],
                    price: [500, 5e3, 5e4, 43e4]
                }, {
                    name: "Cat",
                    color: Object(o.a)("Cat"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [5, 18, 170, 1700, 13e3],
                    time: [2, 2, 2, 2, 2],
                    price: [480, 5500, 6e4, 5e5]
                }, {
                    name: "Dog",
                    color: Object(o.a)("Dog"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [7, 25, 220, 1900, 9e3],
                    time: [3, 3, 2, 2, 1],
                    price: [460, 6600, 7e4, 73e4]
                }, {
                    name: "Goldfish",
                    color: Object(o.a)("Goldfish"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [5, 40, 350, 3500, 35e3],
                    time: [3, 3, 3, 3, 3],
                    price: [750, 7200, 84e3, 95e4]
                }, {
                    name: "Rabbit",
                    color: Object(o.a)("Rabbit"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [3, 18, 185, 800, 7e3],
                    time: [2, 2, 2, 1, 1],
                    price: [500, 5800, 56e3, 55e4]
                }, {
                    name: "Hamster",
                    color: Object(o.a)("Hamster"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [10, 45, 450, 4500, 45e3],
                    time: [4, 4, 4, 4, 4],
                    price: [650, 6500, 8e4, 93e4]
                }, {
                    name: "Turtle",
                    color: Object(o.a)("Turtle"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [23, 120, 1400, 15e3, 17e4],
                    time: [10, 10, 10, 10, 10],
                    price: [700, 8500, 11e4, 13e5]
                }, {
                    name: "Puppy",
                    color: Object(o.a)("Puppy"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [4, 10, 75, 500, 3e3],
                    time: [1, 1, 1, 1, 1],
                    price: [450, 4e3, 35e3, 25e4]
                }, {
                    name: "Kitten",
                    color: Object(o.a)("Kitten"),
                    class: "🐾",
                    rarity: "Common",
                    cash: [4, 8, 60, 400, 2e3],
                    time: [1, 1, 1, 1, 1],
                    price: [350, 3500, 26e3, 17e4]
                }, {
                    name: "Bear",
                    color: Object(o.a)("Bear"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [12, 70, 550, 4500, 1e5],
                    time: [7, 7, 6, 5, 5],
                    price: [550, 5500, 63e3, 16e5]
                }, {
                    name: "Moose",
                    color: Object(o.a)("Moose"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [8, 45, 400, 3500, 26e3],
                    time: [5, 5, 4, 4, 3],
                    price: [520, 6500, 58e3, 7e5]
                }, {
                    name: "Fox",
                    color: Object(o.a)("Fox"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [7, 15, 80, 550, 3e3],
                    time: [2, 2, 1, 1, 1],
                    price: [400, 4e3, 36e3, 24e4]
                }, {
                    name: "Raccoon",
                    color: Object(o.a)("Raccoon"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [5, 14, 185, 1900, 19e3],
                    time: [2, 2, 2, 2, 2],
                    price: [400, 5e3, 71e3, 8e5]
                }, {
                    name: "Squirrel",
                    color: Object(o.a)("Squirrel"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [3, 10, 65, 470, 2600],
                    time: [1, 1, 1, 1, 1],
                    price: [420, 3600, 32e3, 21e4]
                }, {
                    name: "Owl",
                    color: Object(o.a)("Owl"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [4, 17, 155, 1500, 15e3],
                    time: [2, 2, 2, 2, 2],
                    price: [500, 4800, 55e3, 58e4]
                }, {
                    name: "Hedgehog",
                    color: Object(o.a)("Hedgehog"),
                    class: "🌲",
                    rarity: "Common",
                    cash: [11, 37, 340, 2200, 3e4],
                    time: [5, 4, 3, 2, 2],
                    price: [540, 7e3, 77e3, 12e5]
                }, {
                    name: "Seal",
                    color: Object(o.a)("Seal"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [6, 17, 150, 1200, 13e3],
                    time: [2, 2, 2, 2, 2],
                    price: [480, 4500, 43e3, 52e4]
                }, {
                    name: "Arctic Fox",
                    color: Object(o.a)("Arctic Fox"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [5, 18, 180, 850, 8500],
                    time: [2, 2, 2, 1, 1],
                    price: [520, 550, 61e3, 68e4]
                }, {
                    name: "Snowy Owl",
                    color: Object(o.a)("Snowy Owl"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [5, 20, 190, 1900, 16e3],
                    time: [3, 3, 2, 2, 2],
                    price: [370, 5300, 76e3, 62e4]
                }, {
                    name: "Arctic Hare",
                    color: Object(o.a)("Arctic Hare"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [6, 19, 85, 900, 7e3],
                    time: [2, 2, 1, 1, 1],
                    price: [540, 5200, 66e3, 55e4]
                }, {
                    name: "Penguin",
                    color: Object(o.a)("Penguin"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [4, 21, 310, 3200, 33e3],
                    time: [3, 3, 3, 3, 3],
                    price: [400, 6500, 76e3, 87e4]
                }, {
                    name: "Baby Penguin",
                    color: Object(o.a)("Baby Penguin"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [3, 8, 70, 450, 2700],
                    time: [1, 1, 1, 1, 1],
                    price: [420, 3300, 33e3, 23e4]
                }, {
                    name: "Polar Bear",
                    color: Object(o.a)("Polar Bear"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [12, 75, 700, 6500, 85e3],
                    time: [8, 7, 6, 5, 5],
                    price: [630, 7e3, 91e3, 14e5]
                }, {
                    name: "Walrus",
                    color: Object(o.a)("Walrus"),
                    class: "❄️",
                    rarity: "Common",
                    cash: [11, 46, 420, 3700, 51e3],
                    time: [5, 5, 4, 4, 4],
                    price: [550, 6200, 68e3, 1e6]
                }, {
                    name: "Tiger",
                    color: Object(o.a)("Tiger"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [6, 20, 100, 975, 7500],
                    time: [3, 3, 1, 1, 1],
                    price: [390, 6e3, 7e4, 61e4]
                }, {
                    name: "Jaguar",
                    color: Object(o.a)("Jaguar"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [8, 28, 230, 1600, 17e3],
                    time: [3, 3, 2, 2, 2],
                    price: [390, 6e3, 7e4, 61e4]
                }, {
                    name: "Toucan",
                    color: Object(o.a)("Toucan"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [9, 20, 175, 625, 3800],
                    time: [2, 2, 2, 1, 1],
                    price: [520, 4800, 42e3, 3e5]
                }, {
                    name: "Cockatoo",
                    color: Object(o.a)("Cockatoo"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [6, 35, 160, 1700, 18e3],
                    time: [4, 4, 2, 2, 2],
                    price: [500, 5e3, 63e3, 7e5]
                }, {
                    name: "Macaw",
                    color: Object(o.a)("Macaw"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 8, 85, 850, 8500],
                    time: [1, 1, 1, 1, 1],
                    price: [480, 5400, 62e3, 63e4]
                }, {
                    name: "Parrot",
                    color: Object(o.a)("Parrot"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 9, 90, 900, 9e3],
                    time: [1, 1, 1, 1, 1],
                    price: [540, 5700, 65e3, 69e4]
                }, {
                    name: "Panther",
                    color: Object(o.a)("Panther"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [12, 28, 215, 2100, 21e3],
                    time: [5, 3, 2, 2, 2],
                    price: [530, 6500, 76e3, 87e4]
                }, {
                    name: "Anaconda",
                    color: Object(o.a)("Anaconda"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 15, 85, 1500, 7600],
                    time: [1, 2, 1, 2, 1],
                    price: [410, 5100, 58e3, 59e4]
                }, {
                    name: "Orangutan",
                    color: Object(o.a)("Orangutan"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [13, 52, 570, 4300, 7e4],
                    time: [5, 5, 5, 4, 4],
                    price: [600, 7e3, 8e4, 14e5]
                }, {
                    name: "Capuchin",
                    color: Object(o.a)("Capuchin"),
                    class: "🌴",
                    rarity: "Common",
                    cash: [4, 14, 160, 780, 8200],
                    time: [2, 2, 2, 1, 1],
                    price: [390, 4700, 57e3, 68e4]
                }],
                n = [{
                    name: "Elf",
                    color: Object(o.a)("Elf"),
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                    time: [1, 1, 1, 1, 1],
                    price: [8e5, 9e6, 11e7, 8e8]
                }, {
                    name: "Witch",
                    color: Object(o.a)("Witch"),
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                    time: [3, 3, 2, 2, 2],
                    price: [11e5, 12e6, 15e7, 14e8]
                }, {
                    name: "Wizard",
                    color: Object(o.a)("Wizard"),
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [19500, 65e3, 44e4, 46e5, 4e6],
                    time: [3, 3, 2, 2, 2],
                    price: [13e5, 135e5, 16e7, 16e8]
                }, {
                    name: "Fairy",
                    color: Object(o.a)("Fairy"),
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [18500, 6e4, 62e4, 44e5, 38e6],
                    time: [3, 3, 3, 2, 2],
                    price: [12e5, 125e5, 15e6, 15e8]
                }, {
                    name: "Slime Monster",
                    color: Object(o.a)("Slime Monster"),
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                    time: [5, 5, 4, 4, 4],
                    price: [16e5, 15e6, 2e8, 23e8]
                }, {
                    name: "Jester",
                    color: Object(o.a)("Jester"),
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                    time: [3, 3, 2, 2, 1],
                    price: [2e6, 21e6, 23e7, 26e8]
                }, {
                    name: "Dragon",
                    color: Object(o.a)("Dragon"),
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                    time: [4, 4, 4, 4, 4],
                    price: [23e5, 24e6, 27e7, 3e9]
                }, {
                    name: "Unicorn",
                    color: Object(o.a)("Unicorn"),
                    class: "⚔️",
                    rarity: "Epic",
                    cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                    time: [2, 2, 2, 1, 1],
                    price: [45e5, 45e6, 55e7, 65e8]
                }, {
                    name: "Queen",
                    color: Object(o.a)("Queen"),
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                    time: [3, 3, 3, 3, 3],
                    price: [19e5, 2e7, 23e7, 25e8]
                }, {
                    name: "King",
                    color: Object(o.a)("King"),
                    class: "⚔️",
                    rarity: "Legendary",
                    cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                    time: [5, 5, 5, 5, 5],
                    price: [6e6, 95e6, 16e8, 25e9]
                }, {
                    name: "Two of Spades",
                    color: Object(o.a)("Two of Spades"),
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [4500, 14e3, 14e4, 14e5, 9e6],
                    time: [1, 1, 1, 1, 1],
                    price: [77e4, 83e5, 98e6, 71e7]
                }, {
                    name: "Eat Me",
                    color: Object(o.a)("Eat Me"),
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                    time: [2, 2, 2, 2, 2],
                    price: [13e5, 14e6, 16e7, 2e9]
                }, {
                    name: "Drink Me",
                    color: Object(o.a)("Drink Me"),
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                    time: [2, 2, 2, 2, 2],
                    price: [12e5, 12e6, 14e7, 18e8]
                }, {
                    name: "Alice",
                    color: Object(o.a)("Alice"),
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                    time: [2, 2, 1, 1, 1],
                    price: [12e5, 13e6, 15e7, 19e8]
                }, {
                    name: "Queen of Hearts",
                    color: Object(o.a)("Queen of Hearts"),
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                    time: [4, 4, 3, 3, 3],
                    price: [13e5, 13e6, 18e7, 24e8]
                }, {
                    name: "Dormouse",
                    color: Object(o.a)("Dormouse"),
                    class: "🏰",
                    rarity: "Rare",
                    cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                    time: [2, 2, 1, 1, 1],
                    price: [2e6, 22e6, 25e7, 28e8]
                }, {
                    name: "White Rabbit",
                    color: Object(o.a)("White Rabbit"),
                    class: "🏰",
                    rarity: "Rare",
                    cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                    time: [3, 3, 3, 2, 2],
                    price: [2e6, 23e6, 28e7, 29e8]
                }, {
                    name: "Cheshire Cat",
                    color: Object(o.a)("Cheshire Cat"),
                    class: "🏰",
                    rarity: "Rare",
                    cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                    time: [4, 3, 3, 3, 2],
                    price: [18e5, 19e6, 22e7, 24e8]
                }, {
                    name: "Caterpillar",
                    color: Object(o.a)("Caterpillar"),
                    class: "🏰",
                    rarity: "Epic",
                    cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                    time: [1, 1, 1, 1, 1],
                    price: [42e5, 42e6, 54e7, 69e8]
                }, {
                    name: "Mad Hatter",
                    color: Object(o.a)("Mad Hatter"),
                    class: "🏰",
                    rarity: "Epic",
                    cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                    time: [3, 3, 2, 2, 1],
                    price: [48e5, 48e6, 52e7, 6e8]
                }, {
                    name: "King of Hearts",
                    color: Object(o.a)("King of Hearts"),
                    class: "🏰",
                    rarity: "Legendary",
                    cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                    time: [5, 5, 5, 5, 5],
                    price: [7e6, 11e7, 18e8, 3e10]
                }, {
                    name: "Earth",
                    color: Object(o.a)("Earth"),
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                    time: [3, 3, 3, 3, 3],
                    price: [1e6, 11e6, 15e7, 17e8]
                }, {
                    name: "Meteor",
                    color: Object(o.a)("Meteor"),
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                    time: [5, 4, 3, 2, 1],
                    price: [95e4, 13e6, 16e7, 16e8]
                }, {
                    name: "Stars",
                    color: Object(o.a)("Stars"),
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                    time: [2, 2, 1, 1, 1],
                    price: [14e5, 14e6, 15e7, 15e8]
                }, {
                    name: "Alien",
                    color: Object(o.a)("Alien"),
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                    time: [4, 4, 4, 4, 4],
                    price: [15e5, 17e6, 19e7, 17e8]
                }, {
                    name: "Planet",
                    color: Object(o.a)("Planet"),
                    class: "🚀",
                    rarity: "Rare",
                    cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                    time: [3, 3, 3, 3, 3],
                    price: [2e6, 21e6, 21e7, 24e8]
                }, {
                    name: "UFO",
                    color: Object(o.a)("UFO"),
                    class: "🚀",
                    rarity: "Rare",
                    cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                    time: [2, 2, 2, 2, 2],
                    price: [21e5, 23e6, 25e7, 28e8]
                }, {
                    name: "Spaceship",
                    color: Object(o.a)("Spaceship"),
                    class: "🚀",
                    rarity: "Epic",
                    cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                    time: [5, 4, 3, 2, 1],
                    price: [48e5, 46e6, 54e7, 68e8]
                }, {
                    name: "Astronaut",
                    color: Object(o.a)("Astronaut"),
                    class: "🚀",
                    rarity: "Legendary",
                    cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                    time: [3, 3, 2, 2, 2],
                    price: [65e5, 1e8, 17e8, 27e9]
                }, {
                    name: "Lil Bot",
                    color: Object(o.a)("Lil Bot"),
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                    time: [1, 1, 1, 1, 1],
                    price: [73e4, 12e6, 13e7, 19e8]
                }, {
                    name: "Lovely Bot",
                    color: Object(o.a)("Lovely Bot"),
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                    time: [3, 3, 3, 2, 2],
                    price: [13e5, 14e6, 17e7, 16e8]
                }, {
                    name: "Angry Bot",
                    color: Object(o.a)("Angry Bot"),
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                    time: [4, 4, 4, 3, 3],
                    price: [12e5, 13e6, 15e7, 17e8]
                }, {
                    name: "Happy Bot",
                    color: Object(o.a)("Happy Bot"),
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                    time: [2, 2, 2, 1, 1],
                    price: [14e5, 15e6, 18e7, 24e8]
                }, {
                    name: "Watson",
                    color: Object(o.a)("Watson"),
                    class: "🤖",
                    rarity: "Rare",
                    cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                    time: [3, 3, 3, 3, 3],
                    price: [2e6, 22e6, 24e7, 26e8]
                }, {
                    name: "Buddy Bot",
                    color: Object(o.a)("Buddy Bot"),
                    class: "🤖",
                    rarity: "Rare",
                    cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                    time: [3, 3, 2, 2, 2],
                    price: [19e5, 21e6, 23e7, 25e8]
                }, {
                    name: "Brainy Bot",
                    color: Object(o.a)("Brainy Bot"),
                    class: "🤖",
                    rarity: "Epic",
                    cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                    time: [4, 3, 3, 3, 2],
                    price: [5e6, 46e6, 5e8, 67e8]
                }, {
                    name: "Mega Bot",
                    color: Object(o.a)("Mega Bot"),
                    class: "🤖",
                    rarity: "Legendary",
                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                    time: [5, 5, 3, 3, 3],
                    price: [7e6, 12e7, 19e8, 35e9]
                }],
                r = [{
                    name: "#LOL",
                    class: "g",
                    icon: "fas fa-hashtag",
                    color: "#ff00ff",
                    msg: "You just spammed everyone with annoying hashtags!",
                    time: 8750,
                    rate: .1
                }, {
                    name: "Vortex",
                    class: "g",
                    icon: "fas fa-fan",
                    color: "#9a49aa",
                    msg: "You just put everyone in a vortex!",
                    time: 8050,
                    rate: .1
                }, {
                    name: "Reverse",
                    class: "g",
                    icon: "fas fa-exchange-alt",
                    color: "#fd7e15",
                    msg: "You just reversed everyone's screens!",
                    time: 6550,
                    rate: .05
                }, {
                    name: "Flip",
                    class: "g",
                    icon: "fas fa-sync-alt",
                    color: "#15a9bd",
                    msg: "You just flipped everyone's screens!",
                    time: 10050,
                    rate: .075
                }, {
                    name: "Micro",
                    class: "g",
                    icon: "fas fa-microscope",
                    color: "#3333ff",
                    msg: "You just made everyone's screens really small!",
                    time: 10050,
                    rate: .05
                }, {
                    name: "Night Time",
                    class: "g",
                    icon: "fas fa-moon",
                    color: "#000033",
                    msg: "You just made everyone's screens really dark!",
                    time: 15050,
                    rate: .15
                }, {
                    name: "Lunch Break",
                    class: "g",
                    icon: "fas fa-hamburger",
                    color: "#ff6600",
                    msg: "You just made everyone eat a hamburger!",
                    time: 8050,
                    rate: .1
                }, {
                    name: "Ad Spam",
                    class: "g",
                    icon: "fas fa-ad",
                    color: "#3a3a3a",
                    msg: "You just spammed everyone with ads!",
                    time: 10050,
                    rate: .1
                }, {
                    name: "Error 37",
                    class: "g",
                    icon: "fas fa-biohazard",
                    color: "#00FF00",
                    msg: "You just made everyone's screens crazy colors!",
                    time: 13050,
                    rate: .1
                }, {
                    name: "Jokester",
                    class: "g",
                    icon: "fas fa-grin-tears",
                    color: "#0099ff",
                    msg: "You just told everyone a funny joke!",
                    time: 7050,
                    rate: .1
                }, {
                    name: "Slow Mo",
                    class: "g",
                    icon: "far fa-clock",
                    color: "#c43a35",
                    msg: "You just slowed everyone's production down!",
                    time: 10050,
                    rate: .05
                }, {
                    name: "Dance Party",
                    class: "g",
                    icon: "fas fa-music",
                    color: "#333333",
                    msg: "You just threw everyone a dance party!",
                    time: 14350,
                    rate: .025
                }];

            function i(e, t, a) {
                return function(e, t, a) {
                    for (var o = a ? .05 : .03, s = []; s.length < 3;) {
                        var n = Math.random(),
                            i = e[Math.floor(Math.random() * e.length)];
                        if (n < o && t)
                            for (var l = n / o, c = 0, u = 0; u < r.length; u++)
                                if ((c += r[u].rate) >= l) {
                                    i = r[u];
                                    break
                                } s.includes(i) || s.push(i)
                    }
                    return s
                }(a ? [].concat(s, n) : s, e, t)
            }
        },
        IOGW: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__showLeft___3hbhZ-camelCase{top:50%;left:53%}.tourSteps__blook___3OuID-camelCase,.tourSteps__showLeft___3hbhZ-camelCase{transform:translateY(-50%)}.tourSteps__blook___3OuID-camelCase{top:42%;right:50%}.tourSteps__topRight___5X13e-camelCase{top:155px;left:75%;transform:translateX(-50%)}.tourSteps__centered___1dYYP-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__mBottom___3roI2-camelCase{bottom:75px}.tourSteps__mBottom___3roI2-camelCase,.tourSteps__mTop___1hLWR-camelCase{left:50%;transform:translateX(-50%)}.tourSteps__mTop___1hLWR-camelCase{top:130px}.tourSteps__mBlook___2zaSG-camelCase{top:calc(110px + 18vh + 30vw);left:50%;transform:translateX(-50%)}", ""]), t.locals = {
                showLeft: "tourSteps__showLeft___3hbhZ-camelCase",
                blook: "tourSteps__blook___3OuID-camelCase",
                topRight: "tourSteps__topRight___5X13e-camelCase",
                centered: "tourSteps__centered___1dYYP-camelCase",
                mBottom: "tourSteps__mBottom___3roI2-camelCase",
                mTop: "tourSteps__mTop___1hLWR-camelCase",
                mBlook: "tourSteps__mBlook___2zaSG-camelCase"
            }
        },
        MnXr: function(e, t, a) {
            "use strict";
            var o = a("q1tI"),
                s = a.n(o),
                n = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("VgyX"),
                m = a("Xst1"),
                f = a.n(m),
                h = a("ZVoO"),
                d = a("74sb"),
                _ = a("XTAU"),
                p = a("+fLB"),
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
                    var o, s, n = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, s = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw s
                        }
                    }
                    return n
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
                for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                return o
            }

            function x(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var a, o = T(e);
                    if (t) {
                        var s = T(this).constructor;
                        a = Reflect.construct(o, arguments, s)
                    } else a = o.apply(this, arguments);
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

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var N = function(e) {
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
                }(r, e);
                var t, a, o, n = C(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = n.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = r, (a = [{
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
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(o) {
                                        var s = o || {};
                                        Object.entries(s).forEach((function(e) {
                                            var t = b(e, 2),
                                                o = t[0],
                                                s = t[1],
                                                n = {};
                                            if (s.i)
                                                if (Array.isArray(s.i))
                                                    for (var r = 0; r < s.i.length; r++) {
                                                        var i = s.i[r];
                                                        i && (n[r] = i)
                                                    } else n = s.i;
                                                else n = {};
                                            var l = {};
                                            if (s.c)
                                                if (Array.isArray(s.c))
                                                    for (var c = 0; c < s.c.length; c++) {
                                                        var u = s.c[c];
                                                        u && (l[c] = u)
                                                    } else l = s.c;
                                                else l = {};
                                            a[o] = {
                                                corrects: l,
                                                incorrects: n
                                            }
                                        })), t && t.id && (e.props.firebase.removeHost(t.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && y.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        cash: isNaN(e.cash) ? 0 : Math.round(Number(e.cash)),
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
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? s.a.createElement("div", {
                            className: f.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, s.a.createElement(_.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? s.a.createElement(h.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "$".concat(Object(d.o)(e.cash))
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null) : s.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && x(t.prototype, a), o && x(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(s.a.Component);
            N.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(n.b)({
                    deleteHost: u.d
                }, e)
            }))(Object(p.d)(N)))
        },
        S5NC: function(e, t, a) {
            "use strict";
            var o = a("q1tI"),
                s = a.n(o),
                n = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("4HzQ"),
                m = a("TSYQ"),
                f = a.n(m),
                h = a("wd/R"),
                d = a.n(h),
                _ = a("H1WH"),
                p = a("EDFO"),
                y = a("tCm/"),
                g = a.n(y),
                b = [{
                    elementId: "left",
                    text: "To start your factory, we have to answer questions. Go ahead and answer one correctly.",
                    className: g.a.showLeft
                }, {
                    elementId: "topRight",
                    text: "Each correct answer will fill this bar. Once it's full, you'll get a Blook for your factory!",
                    nextButtonText: "Next",
                    className: g.a.topRight
                }, {
                    elementId: "left",
                    text: "Now answer 2 more questions correctly to fill the bar.",
                    className: g.a.showLeft
                }, {
                    elementId: "choices",
                    text: "Great work! Now it's time to make some money. Blooks will do this for you, so go ahead and select any Blook!",
                    className: g.a.showLeft
                }, {
                    elementId: "blook0",
                    text: "Nice, now you can see how much money the Blook is making for you every time its bar fills. The 'I' next to the numbers shows the Blook is Level 1.",
                    nextButtonText: "Next",
                    className: g.a.blook
                }, {
                    elementId: "upgrade0",
                    text: "As you get more cash, you'll be able to upgrade this Blook to produce more cash per second. This button will turn green once we can afford it, but for now let's continue.",
                    nextButtonText: "Next",
                    className: g.a.blook
                }, {
                    elementId: "class0",
                    text: "Also, try to choose Blooks of the same class (emoji). This will multiply your earnings for all Blooks with that class, so the more the better!",
                    nextButtonText: "Next",
                    className: g.a.blook
                }, {
                    text: "Unfortunately, your factory can only hold 10 Blooks, but you can replace them to increase your class multipliers once you get to 10.",
                    nextButtonText: "Next",
                    className: g.a.centered
                }, {
                    text: "So you've completed the tutorial. Now go get more Blooks, make money, and watch out for evil Glitch power-ups!",
                    nextButtonText: "Finish",
                    className: g.a.centered
                }],
                v = [{
                    elementId: "mBottom",
                    text: "To start your factory, we have to answer questions. Go ahead and click the button below to get one.",
                    elementClick: !0,
                    functionIndex: 0,
                    className: g.a.mBottom
                }, {
                    text: "Perfect! Now answer a question correctly.",
                    nextButtonText: "Next",
                    className: g.a.centered
                }, {}, {
                    elementId: "mProgress",
                    text: "Each correct answer will fill this bar. Once it's full, you'll get a Blook for your factory!",
                    nextButtonText: "Next",
                    className: g.a.mTop
                }, {
                    text: "Now go ahead and answer 2 more questions correctly.",
                    nextButtonText: "Next",
                    className: g.a.centered
                }, {}, {
                    text: "Great work! Now it's time to make some money. Blooks will do this for you, so go ahead and select any Blook!",
                    nextButtonText: "Next",
                    className: g.a.centered
                }, {}, {
                    elementId: "mBlook0",
                    text: "Nice, now you can see how much money the Blook is making for you every time its bar fills.",
                    nextButtonText: "Next",
                    className: g.a.mBlook
                }, {
                    elementId: "mUpgrade0",
                    text: "As you get more cash, you'll be able to upgrade this Blook to produce more cash per second, but for now let's continue.",
                    nextButtonText: "Next",
                    className: g.a.mBlook
                }, {
                    elementId: "mClass0",
                    text: "Also, try to choose Blooks of the same class (emoji). This will multiply your earnings for all Blooks with that class!",
                    nextButtonText: "Next",
                    className: g.a.mBlook
                }, {
                    text: "Unfortunately, your factory can only hold 10 Blooks, but you can replace them to increase your class multipliers once you get to 10.",
                    nextButtonText: "Next",
                    className: g.a.centered
                }, {
                    text: "So you've completed the tutorial. Now go get more Blooks, make money, and watch out for evil Glitch power-ups!",
                    nextButtonText: "Finish",
                    className: g.a.centered
                }],
                x = a("y5cn");

            function w(e, t, a, o) {
                return {
                    type: x.b,
                    upgrades: e,
                    corrects: t,
                    incorrects: a,
                    standing: o
                }
            }

            function C(e, t, a, o, s) {
                return {
                    type: x.a,
                    upgrades: e,
                    corrects: t,
                    incorrects: a,
                    cash: o,
                    blooks: s
                }
            }
            var k = a("ZrUs"),
                T = a("HFYo"),
                N = a("Xst1"),
                E = a.n(N),
                O = a("d0kj"),
                j = a.n(O),
                S = a("XTAU"),
                B = a("ca/f"),
                I = a("0oXL"),
                F = a("FVRk"),
                P = a("9TPi"),
                A = a("h/RO"),
                z = a("+MJO"),
                L = a("W0Af"),
                q = a("FD/C"),
                R = a("4f5i"),
                M = a("vCpj"),
                U = a("aMAJ"),
                H = a("+fLB"),
                G = a("74sb");

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Q = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    s = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

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

                function l(e, t, a, o) {
                    var s = t && t.prototype instanceof m ? t : m,
                        n = Object.create(s.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, a) {
                        var o = "suspendedStart";
                        return function(s, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === s) throw n;
                                return T()
                            }
                            for (a.method = s, a.arg = n;;) {
                                var r = a.delegate;
                                if (r) {
                                    var i = v(r, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === o) throw o = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                o = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (o = a.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, r), n
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

                function m() {}

                function f() {}

                function h() {}
                var d = {};
                i(d, s, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    p = _ && _(_(k([])));
                p && p !== t && a.call(p, s) && (d = p);
                var y = h.prototype = m.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(s, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(s, n, r, i) {
                                    var l = c(e[s], e, n);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            m = u.value;
                                        return m && "object" == D(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            u.value = e, r(u)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(s, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
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
                    var o = c(a, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var s = o.arg;
                    return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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
                        var t = e[s];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (a.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return f.prototype = h, i(y, "constructor", h), i(h, "constructor", f), f.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, o, s, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, a, o, s), n);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, g(y), i(y, r, "Generator"), i(y, s, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return a.value = o, a.done = !1, a
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

                        function o(a, o) {
                            return r.type = "throw", r.arg = e, t.next = a, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = a.call(n, "catchLoc"),
                                    l = a.call(n, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0);
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                } else if (i) {
                                    if (this.prev < n.catchLoc) return o(n.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < n.finallyLoc) return o(n.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o];
                            if (s.tryLoc <= this.prev && a.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                                var n = s;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(r)
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
                                var o = a.completion;
                                if ("throw" === o.type) {
                                    var s = o.arg;
                                    w(a)
                                }
                                return s
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

            function W(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        Y(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function Y(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function X(e) {
                return function(e) {
                    if (Array.isArray(e)) return K(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return K(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                return o
            }

            function Z(e, t, a, o, s, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, s)
            }

            function V(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(o, s) {
                        var n = e.apply(t, a);

                        function r(e) {
                            Z(n, o, s, r, i, "next", e)
                        }

                        function i(e) {
                            Z(n, o, s, r, i, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function $(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function ee(e, t) {
                return (ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function te(e) {
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
                    var a, o = se(e);
                    if (t) {
                        var s = se(this).constructor;
                        a = Reflect.construct(o, arguments, s)
                    } else a = o.apply(this, arguments);
                    return ae(this, a)
                }
            }

            function ae(e, t) {
                if (t && ("object" === D(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return oe(e)
            }

            function oe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function se(e) {
                return (se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(p.addStyles)();
            var ne = function(e) {
                    switch (e) {
                        case 1:
                            return "rgba(0, 0, 0, 0.2) 0px 0px 8px 3px";
                        case 1.5:
                            return "rgba(228, 121, 5, 0.45) 0px 0px 8px 3px";
                        case 2:
                            return "rgba(3, 0, 229, 0.45) 0px 0px 8px 3px";
                        case 2.5:
                            return "rgba(228, 9, 5, 0.45) 0px 0px 8px 3px";
                        default:
                            return "rgba(119, 14, 133, 0.45) 0px 0px 8px 3px"
                    }
                },
                re = ["I", "II", "III", "IV", "V"],
                ie = ["#FF00FF", "#FF6600", "#FFFF00", "#00FFFF", "#FF0000", "#00FF00"],
                le = function(e) {
                    var t = e.length;
                    if (0 === t) return "";
                    if (1 === t) return "".concat(e[0]);
                    if (2 === t) return "".concat(e[0], " or ").concat(e[1]);
                    for (var a = "", o = 0; o < e.length - 1; o++) a += "".concat(e[o], ", ");
                    return "".concat(a, "or ").concat(e[e.length - 1])
                },
                ce = function(e) {
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
                        }), t && ee(e, t)
                    }(l, e);
                    var t, a, o, n, r, i = te(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            name: "",
                            ready: !1,
                            question: {},
                            feedback: !1,
                            prefeedback: !1,
                            waiting: !1,
                            timer: 0,
                            progress: 0,
                            progressNeeded: 3,
                            choices: [],
                            blooks: [],
                            classes: [],
                            cash: 0,
                            deleteFor: {},
                            showQ: !1,
                            remind: !1,
                            full: Object(G.l)(),
                            oneMin: !1,
                            glitchMsg: "",
                            glitch: "",
                            glitcherName: "",
                            glitcherBlook: "",
                            bites: 0,
                            ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            hazards: ["", "", "", "", ""],
                            lol: !1,
                            joke: !1,
                            slow: !1,
                            dance: !1,
                            color: "",
                            fullTimer: "",
                            popUpAmount: 0,
                            popUpType: "",
                            showTour: !1,
                            askTour: !0,
                            zoomedImage: ""
                        }, t.dbRefStage = {}, t.dbRefAction = {}, t.waiting = !1, t.timeouts = [], t.upgrades = 0, t.corrects = {}, t.incorrects = {}, t.reminder = 0, t.reminding = !1, t.safe = !1, t.winSent = !1, t.isSolo = !1, t.isHW = !1, t.fullTimer = 60, t.questions = [], t.freeQuestions = [], t.msg = {}, t.isReading = !1, t.tourRef = s.a.createRef(), t.randomQ = t.randomQ.bind(oe(t)), t.onAnswer = t.onAnswer.bind(oe(t)), t.onKeyPress = t.onKeyPress.bind(oe(t)), t.goNext = t.goNext.bind(oe(t)), t.chooseBlook = t.chooseBlook.bind(oe(t)), t.addCash = t.addCash.bind(oe(t)), t.upgrade = t.upgrade.bind(oe(t)), t.deleteBlook = t.deleteBlook.bind(oe(t)), t.closeAd = t.closeAd.bind(oe(t)), t.checkResize = t.checkResize.bind(oe(t)), t.readToMe = t.readToMe.bind(oe(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (r = V(Q().mark((function e() {
                            var t, a, o = this;
                            return Q().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (Object(G.c)(), this.isSolo = this.props.client.mode && this.props.client.mode.includes("Solo"), this.isHW = Boolean(this.props.client.hwId), window.addEventListener("resize", this.checkResize), this.isSolo || this.isHW && this.props.client.mode && "Time" === this.props.client.mode ? (t = this.props.client.amount < 1.5, this.fullTimer = Math.max(60 * this.props.client.amount, 60), this.setState({
                                                fullTimer: d.a.duration(this.fullTimer, "seconds").format("mm:ss")
                                            }, (function() {
                                                o.timerInterval = setInterval((function() {
                                                    if (o.fullTimer -= 1, o.setState({
                                                            fullTimer: d.a.duration(o.fullTimer, "seconds").format("mm:ss"),
                                                            oneMin: !t && o.fullTimer > 57 && o.fullTimer <= 60
                                                        }), o.fullTimer <= 0) {
                                                        var e = "Chick",
                                                            a = 0;
                                                        o.state.blooks.forEach((function(t) {
                                                            var o = t.cash[t.level] * t.bonus;
                                                            o > a && (a = o, e = t.name)
                                                        }));
                                                        var s = [{
                                                            name: o.props.client.name || "You",
                                                            blook: e,
                                                            cash: o.state.cash,
                                                            place: 1
                                                        }];
                                                        o.props.factoryResults(o.upgrades, o.corrects, o.incorrects, s), o.props.history.push("/play/factory/final")
                                                    }
                                                }), 1e3)
                                            }))) : this.props.client.mode && "Time" === this.props.client.mode && this.props.client.amount > 1.5 && !this.props.client.late && (this.reminderTimeout = setTimeout((function() {
                                                o.setState({
                                                    oneMin: !0
                                                }, (function() {
                                                    o.minuteTimeout = setTimeout((function() {
                                                        o.setState({
                                                            oneMin: !1
                                                        }), clearInterval(o.cashInterval), o.cashInterval = setInterval((function() {
                                                            o.props.firebase.setVal({
                                                                id: o.props.client.hostId,
                                                                path: "c/".concat(o.props.client.name, "/ca"),
                                                                val: o.state.cash
                                                            })
                                                        }), 5e3)
                                                    }), 3e3)
                                                }))
                                            }), 6e4 * (this.props.client.amount - 1))), this.isHW && this.setState({
                                                popUpAmount: this.props.client.amount,
                                                popUpType: this.props.client.mode
                                            }), this.isSolo || this.isHW) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 11, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 11:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    o.props.firebase.getDatabaseVal(o.props.client.hostId, "st", (function(e) {
                                                        var t = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                cash: e.c,
                                                                place: e.p
                                                            }
                                                        })).filter((function(e) {
                                                            return e.cash || 0 === e.cash
                                                        })) : [];
                                                        o.props.factoryResults(o.upgrades, o.corrects, o.incorrects, t), o.props.history.push("/play/factory/final")
                                                    }));
                                                    break;
                                                case null:
                                                    o.props.firebase.getDatabaseVal(o.props.client.hostId, "stg", (function(e) {
                                                        e || (o.props.deleteClient(), o.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 15, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                                    case 15:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            if (e.val() && e.val().g)
                                                if (o.safe) o.safe = !1;
                                                else if (!o.state.askTour && !o.state.showTour) {
                                                var t = U.b[e.val().g],
                                                    a = T.b[T.b.map((function(e) {
                                                        return e.name
                                                    })).indexOf(t)].time;
                                                if (clearTimeout(o.nameTimeout), "Lunch Break" === t) o.setState({
                                                    bites: 20
                                                });
                                                else if ("Ad Spam" === t) {
                                                    clearTimeout(o.adTimeout);
                                                    var s = 0;
                                                    o.adTimeout = setTimeout((function e() {
                                                        var t = X(o.state.ads);
                                                        t[s] = 1, o.setState({
                                                            ads: t
                                                        }), (s += 1) < o.state.ads.length && (o.adTimeout = setTimeout(e, 800))
                                                    }), 800)
                                                } else if ("Error 37" === t) {
                                                    clearInterval(o.hazardInterval), clearTimeout(o.nightTimeout);
                                                    var n = 3,
                                                        r = function() {
                                                            var e = Object(G.w)(ie).slice(0, 5);
                                                            o.setState({
                                                                color: "error",
                                                                hazards: e
                                                            })
                                                        };
                                                    r(), o.hazardInterval = setInterval((function() {
                                                        r(), n <= 0 ? (clearInterval(o.hazardInterval), o.setState({
                                                            color: ""
                                                        })) : n -= 1
                                                    }), 3250)
                                                } else "Night Time" === t ? (clearInterval(o.hazardInterval), clearTimeout(o.nightTimeout), o.setState({
                                                    color: "night"
                                                }, (function() {
                                                    o.nightTimeout = setTimeout((function() {
                                                        o.setState({
                                                            color: ""
                                                        })
                                                    }), a)
                                                }))) : "#LOL" === t ? (clearTimeout(o.lolTimeout), o.setState({
                                                    lol: !1
                                                }, (function() {
                                                    o.setState({
                                                        lol: !0
                                                    }, (function() {
                                                        o.lolTimeout = setTimeout((function() {
                                                            o.setState({
                                                                lol: !1
                                                            })
                                                        }), a)
                                                    }))
                                                }))) : "Jokester" === t ? (clearTimeout(o.jokeTimeout), o.setState({
                                                    joke: !1
                                                }, (function() {
                                                    o.setState({
                                                        joke: !0
                                                    }, (function() {
                                                        o.jokeTimeout = setTimeout((function() {
                                                            o.setState({
                                                                joke: !1
                                                            })
                                                        }), a)
                                                    }))
                                                }))) : "Slow Mo" === t ? (clearTimeout(o.slowTimeout), o.setState({
                                                    slow: !1
                                                }, (function() {
                                                    o.setState({
                                                        slow: !0
                                                    }, (function() {
                                                        o.slowTimeout = setTimeout((function() {
                                                            o.setState({
                                                                slow: !1
                                                            })
                                                        }), a)
                                                    }))
                                                }))) : "Dance Party" === t ? (clearTimeout(o.danceTimeout), o.setState({
                                                    dance: !1
                                                }, (function() {
                                                    o.setState({
                                                        dance: !0
                                                    }, (function() {
                                                        o.danceTimeout = setTimeout((function() {
                                                            o.setState({
                                                                dance: !1
                                                            })
                                                        }), a)
                                                    }))
                                                }))) : (clearTimeout(o.glitchTimeout), o.setState({
                                                    glitch: ""
                                                }, (function() {
                                                    o.setState({
                                                        glitch: t
                                                    }, (function() {
                                                        o.glitchTimeout = setTimeout((function() {
                                                            o.setState({
                                                                glitch: ""
                                                            })
                                                        }), a)
                                                    }))
                                                })));
                                                o.setState({
                                                    glitcherName: e.val().n,
                                                    glitcherBlook: e.val().b
                                                }, (function() {
                                                    o.nameTimeout = setTimeout((function() {
                                                        o.setState({
                                                            glitcherName: "",
                                                            glitcherBlook: ""
                                                        })
                                                    }), "Dance Party" === t ? a : 6e3)
                                                }))
                                            }
                                        }));
                                    case 17:
                                        this.questions = JSON.parse(JSON.stringify(this.props.client.questions)), this.freeQuestions = [], a = this.randomQ(), this.setState({
                                            question: a,
                                            ready: !0,
                                            name: this.props.client.name
                                        }), !this.props.client.cash || this.isSolo || this.isHW || (this.upgrades = this.props.client.upgrades, this.corrects = J({}, this.props.client.corrects), this.incorrects = J({}, this.props.client.incorrects), this.setState({
                                            cash: this.props.client.cash,
                                            blooks: JSON.parse(JSON.stringify(this.props.client.blooks))
                                        }, (function() {
                                            o.props.client && o.props.client.hostId && o.props.client.name && o.props.client.blook ? o.props.firebase.setVal({
                                                id: o.props.client.hostId,
                                                path: "c/".concat(o.props.client.name, "/ca"),
                                                val: o.state.cash
                                            }) : o.props.history.push("/play")
                                        }))), this.isHW || this.isSolo || (this.cashInterval = setInterval((function() {
                                            o.props.client.blook && o.props.client.hostId && o.props.client.name && o.props.firebase.setVal({
                                                id: o.props.client.hostId,
                                                path: "c/".concat(o.props.client.name, "/ca"),
                                                val: o.state.cash
                                            })
                                        }), 8e3)), this.props.client.mode && this.props.client.mode.includes("Time") ? this.props.client.amount <= 1 ? this.reminder = 3 : this.props.client.amount <= 2 ? this.reminder = 2 : this.props.client.amount <= 3 && (this.reminder = 1) : this.props.client.amount <= 1e3 ? this.reminder = 3 : this.props.client.amount < 5e3 ? this.reminder = 2 : this.props.client.amount < 1e4 && (this.reminder = 1), document.addEventListener("keypress", this.onKeyPress);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.factoryDisconnect(this.upgrades, this.corrects, this.incorrects, this.state.cash, this.state.blooks), Object(G.u)(), document.removeEventListener("keypress", this.onKeyPress), clearTimeout(this.remindTimeout), clearInterval(this.cashInterval), clearInterval(this.timerInterval), clearInterval(this.incorrectInterval), clearTimeout(this.questionTimeout), clearTimeout(this.feedbackTimeout), clearTimeout(this.minuteTimeout), clearTimeout(this.adTimeout), clearInterval(this.hazardInterval), clearTimeout(this.nightTimeout), clearTimeout(this.glitchTimeout), clearTimeout(this.lolTimeout), clearTimeout(this.jokeTimeout), clearTimeout(this.slowTimeout), clearTimeout(this.danceTimeout), clearTimeout(this.nameTimeout), clearTimeout(this.reminderTimeout), this.timeouts.forEach((function(e) {
                                clearTimeout(e)
                            })), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value"), window.removeEventListener("resize", this.checkResize)
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            var t = this;
                            this.waiting || (this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel(), this.state.question.correctAnswers.includes(e) ? (this.corrects[this.state.question.number] ? this.corrects[this.state.question.number] += 1 : this.corrects[this.state.question.number] = 1, this.setState({
                                prefeedback: !0,
                                correct: !0,
                                progress: this.state.progress + 1
                            }, (function() {
                                t.feedbackTimeout = setTimeout((function() {
                                    t.setState({
                                        prefeedback: !1,
                                        feedback: !0
                                    }, (function() {
                                        t.waiting = !1
                                    }))
                                }), 200)
                            }))) : (this.incorrects[this.state.question.number] ? this.incorrects[this.state.question.number] += 1 : this.incorrects[this.state.question.number] = 1, this.setState({
                                prefeedback: !0,
                                correct: !1,
                                waiting: !0
                            }, (function() {
                                t.feedbackTimeout = setTimeout((function() {
                                    t.setState({
                                        prefeedback: !1,
                                        feedback: !0
                                    }, (function() {
                                        var e = 5;
                                        t.setState({
                                            timer: e
                                        }, (function() {
                                            t.incorrectInterval = setInterval((function() {
                                                if (0 == (e -= 1)) return t.waiting = !1, t.setState({
                                                    waiting: !1,
                                                    timer: e
                                                }), void clearInterval(t.incorrectInterval);
                                                t.setState({
                                                    timer: e
                                                })
                                            }), 1e3)
                                        }))
                                    }))
                                }), 200)
                            }))))
                        }
                    }, {
                        key: "onKeyPress",
                        value: function(e) {
                            if (!this.state.feedback && !this.state.choices[0]) {
                                var t = (e || window.event).keyCode;
                                49 !== t && 97 !== t || this.onAnswer(this.state.question.answers[0]), 50 !== t && 98 !== t || this.onAnswer(this.state.question.answers[1]), (51 === t || 99 === t) && this.state.question.answers.length > 2 && this.onAnswer(this.state.question.answers[2]), (52 === t || 100 === t) && this.state.question.answers.length > 3 && this.onAnswer(this.state.question.answers[3])
                            }
                        }
                    }, {
                        key: "closeAd",
                        value: function(e) {
                            var t = X(this.state.ads);
                            t[e] = 0, this.setState({
                                ads: t
                            })
                        }
                    }, {
                        key: "checkResize",
                        value: function() {
                            this.setState({
                                full: Object(G.l)()
                            })
                        }
                    }, {
                        key: "goNext",
                        value: function() {
                            var e = this;
                            if (!this.waiting && !this.state.choices[0])
                                if (this.state.correct && this.state.showTour && 1 === Object.values(this.corrects).reduce((function(e, t) {
                                        return e + t
                                    })) && this.tourRef.current.setStep(_.isMobile ? 3 : 1), this.waiting = !0, this.state.progress >= this.state.progressNeeded) {
                                    var t = this.randomQ();
                                    this.setState({
                                        choices: Object(T.a)(!this.state.showTour && this.props.client.glitchesOn, this.state.blooks.length >= 10, this.state.cash > 6e3),
                                        waiting: !0,
                                        feedback: !1,
                                        question: t
                                    }, (function() {
                                        e.state.showTour && e.tourRef.current.setStep(_.isMobile ? 6 : 3), e.feedbackTimeout = setTimeout((function() {
                                            e.waiting = !1
                                        }), 700)
                                    }))
                                } else {
                                    var a = this.randomQ();
                                    this.setState({
                                        feedback: !1,
                                        question: a,
                                        showQ: !1
                                    }, (function() {
                                        e.questionTimeout = setTimeout((function() {
                                            e.waiting = !1
                                        }), 300)
                                    }))
                                }
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                            var e = Object(G.p)(this.freeQuestions);
                            return this.freeQuestions.splice(this.freeQuestions.indexOf(e), 1), e.random && (e.answers = Object(G.w)(e.answers)), e
                        }
                    }, {
                        key: "chooseBlook",
                        value: function(e) {
                            var t = this;
                            if (!this.waiting) {
                                if (this.waiting = !0, !e) return this.setState({
                                    choices: [],
                                    waiting: !1,
                                    progress: 0,
                                    deleteFor: {},
                                    showQ: !1
                                }), void(this.questionTimeout = setTimeout((function() {
                                    t.waiting = !1
                                }), 300));
                                if (this.state.blooks.length >= 10) return this.waiting = !1, void(_.isMobile ? this.setState({
                                    deleteFor: e,
                                    choices: [],
                                    feedback: !1,
                                    showQ: !1,
                                    progress: 0
                                }) : this.setState({
                                    deleteFor: e
                                }));
                                var a = X(this.state.blooks),
                                    o = J(J({}, e), {}, {
                                        active: !1,
                                        level: 0,
                                        bonus: 1
                                    }),
                                    s = a.map((function(e) {
                                        return e.name
                                    })).lastIndexOf(e.name),
                                    n = a.map((function(e) {
                                        return e.class
                                    })).lastIndexOf(e.class); - 1 !== s ? a.splice(s + 1, 0, o) : -1 !== n ? a.splice(n + 1, 0, o) : a.push(o), this.state.classes.includes(e.class) || this.setState({
                                    classes: [].concat(X(this.state.classes), [e.class])
                                });
                                var r = a.filter((function(t) {
                                    return t.class === e.class
                                }));
                                ![5, 7, 10].includes(r.length) || this.isSolo || this.isHW || this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name, "/s"),
                                    val: "".concat(r.length, "-").concat(e.class)
                                }), r.forEach((function(e) {
                                    a[a.indexOf(e)].bonus = 1 + .5 * (r.length - 1)
                                })), this.setState({
                                    blooks: a,
                                    choices: [],
                                    waiting: !1,
                                    progress: 0,
                                    showQ: !1,
                                    deleteFor: {}
                                }, (function() {
                                    t.state.showTour && t.tourRef.current.setStep(_.isMobile ? 8 : 4), t.questionTimeout = setTimeout((function() {
                                        t.waiting = !1
                                    }), 300)
                                })), this.upgrades += 1
                            }
                        }
                    }, {
                        key: "chooseGlitch",
                        value: function(e) {
                            this.waiting || (this.waiting = !1, this.safe = !0, this.props.client.name && this.props.client.blook && this.props.client.hostId && this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name, "/tat"),
                                val: U.a[e.name]
                            }), this.setState({
                                choices: [],
                                waiting: !1,
                                progress: 0,
                                glitchMsg: e.msg
                            }))
                        }
                    }, {
                        key: "deleteBlook",
                        value: function(e) {
                            var t = this;
                            if (this.state.deleteFor.name) {
                                var a = JSON.parse(JSON.stringify(this.state.blooks)),
                                    o = this.state.blooks.indexOf(e);
                                if (-1 !== o) {
                                    a.splice(o, 1);
                                    var s = a.filter((function(t) {
                                        return t.class === e.class
                                    }));
                                    if (s.forEach((function(e) {
                                            a[a.indexOf(e)].bonus = 1 + .5 * (s.length - 1)
                                        })), 0 === s.length) {
                                        var n = JSON.parse(JSON.stringify(this.state.classes));
                                        n.splice(n.indexOf(e.class), 1), this.setState({
                                            classes: n
                                        })
                                    }
                                    this.setState({
                                        blooks: a
                                    }, (function() {
                                        return t.chooseBlook(t.state.deleteFor)
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "addCash",
                        value: function(e) {
                            var t = this,
                                a = X(this.state.blooks);
                            a[a.indexOf(e)].active = !0;
                            var o = this.state.cash + Math.round(e.cash[e.level] * e.bonus);
                            if ("Cash" === this.props.client.mode && o >= this.props.client.amount && this.props.client.hostId && this.props.client.blook && !this.winSent && !this.isHW) this.winSent = !0, this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name, "/ca"),
                                val: o
                            });
                            else if (this.isHW && "Cash" === this.props.client.mode && o >= this.props.client.amount) {
                                var s = "Chick",
                                    n = 0;
                                this.state.blooks.forEach((function(e) {
                                    var t = e.cash[e.level] * e.bonus;
                                    t > n && (n = t, s = e.name)
                                }));
                                var r = [{
                                    name: this.props.client.name || "You",
                                    blook: s,
                                    cash: o,
                                    place: 1
                                }];
                                return this.props.factoryResults(this.upgrades, this.corrects, this.incorrects, r), void this.props.history.push("/play/factory/final")
                            }
                            if (this.reminder < 3 && !this.state.remind && !this.reminding)
                                for (var i = function(e) {
                                        var s = a[e];
                                        if (s.price[s.level] < o) return t.reminding = !0, t.remindTimeout = setTimeout((function() {
                                            t.reminding = !1, s.price[s.level] < o && t.setState({
                                                remind: !0
                                            })
                                        }), 7e3), "break"
                                    }, l = 0; l < a.length && "break" !== i(l); l++);
                            this.setState({
                                cash: o,
                                blooks: a
                            });
                            var c = setTimeout((function() {
                                var o = (a = X(t.state.blooks)).indexOf(e);
                                if (-1 !== o) {
                                    a[o].active = !1, t.setState({
                                        blooks: a
                                    });
                                    var s = t.timeouts.indexOf(c); - 1 !== s && t.timeouts.splice(s, 1)
                                }
                            }), 600);
                            this.timeouts.push(c)
                        }
                    }, {
                        key: "upgrade",
                        value: function(e) {
                            if (!this.state.deleteFor.name) {
                                var t = e.price[e.level];
                                if (!(this.state.cash < t)) {
                                    this.reminder < 3 && (clearTimeout(this.remindTimeout), this.reminding = !1, this.setState({
                                        remind: !1
                                    }), this.reminder += 1);
                                    var a = X(this.state.blooks),
                                        o = a.indexOf(e); - 1 !== o && (a[o].level += 1), this.setState({
                                        blooks: a,
                                        cash: this.state.cash - t
                                    }), this.upgrades += 1
                                }
                            }
                        }
                    }, {
                        key: "readToMe",
                        value: (n = V(Q().mark((function e() {
                            var t, a = this;
                            return Q().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, o) {
                                            var s = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return o();
                                            e.includes("`*`") && (s = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(s), document.getElementById(t) && (document.getElementById(t).style.textDecoration = "underline"), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                document.getElementById(t) && (document.getElementById(t).style.textDecoration = "none"), o()
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
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return s.a.createElement(c.a, {
                                to: "/play"
                            });
                            var t = "night" === this.state.color,
                                a = "error" === this.state.color,
                                o = this.state.hazards;
                            return s.a.createElement("div", {
                                className: _.isMobile ? E.a.mBody : E.a.body,
                                id: "body",
                                style: {
                                    overflow: "hidden",
                                    backgroundColor: t ? "#000" : a ? o[0] : null
                                }
                            }, s.a.createElement(S.a, {
                                title: "Play Factory | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you collect Blooks and earn money through answering questions."
                            }), s.a.createElement("div", {
                                className: "Vortex" === this.state.glitch ? E.a.factorySpin : "Reverse" === this.state.glitch ? E.a.factoryReverse : "Flip" === this.state.glitch ? E.a.factoryFlip : "Micro" === this.state.glitch ? E.a.factoryMicro : null
                            }, s.a.createElement("div", {
                                className: j.a.header,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.headerTextLeft
                            }, _.isMobile ? null : s.a.createElement("i", {
                                className: f()(j.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        full: Object(G.C)()
                                    })
                                }
                            }), this.state.feedback || this.state.choices[0] || _.isMobile && !this.state.showQ || !window.speechSynthesis ? null : s.a.createElement("i", {
                                className: f()(j.a.expandIcon, "fas fa-volume-up"),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.readToMe
                            }), _.isMobile && this.state.cash > 1e9 ? "" : this.state.fullTimer || this.state.name), s.a.createElement("div", {
                                className: j.a.headerTextRight
                            }, "$".concat(Object(G.o)(this.state.cash)))), this.state.ready && !_.isMobile ? s.a.createElement("div", {
                                className: E.a.regularBody,
                                id: "regularBody",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[2] : null
                                }
                            }, this.state.showTour ? s.a.createElement(P.a, {
                                steps: b,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                },
                                ref: this.tourRef
                            }) : null, s.a.createElement("div", {
                                className: j.a.right
                            }, s.a.createElement("div", {
                                className: j.a.topRight,
                                id: "topRight",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[0] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.progressContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.progressBar,
                                style: {
                                    transform: "translateX(-".concat(100 - this.state.progress / this.state.progressNeeded * 100, "%)"),
                                    backgroundColor: t ? "#fff" : null
                                }
                            })), s.a.createElement("div", {
                                className: j.a.progressBox,
                                style: {
                                    backgroundColor: t ? "#fff" : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.progressText,
                                style: {
                                    color: t ? "#000" : a ? o[2] : null
                                }
                            }, this.state.progressNeeded - this.state.progress))), s.a.createElement("div", {
                                className: j.a.bottomRight
                            }, s.a.createElement("div", {
                                className: j.a.factories
                            }, this.state.blooks[0] ? this.state.blooks.map((function(n, r) {
                                return s.a.createElement("div", {
                                    key: e.state.blooks.indexOf(n),
                                    className: f()(e.state.deleteFor.name ? j.a.factoryButton : j.a.factory),
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.deleteBlook(n)
                                    },
                                    id: "blook".concat(r)
                                }, n.active ? s.a.createElement("div", {
                                    className: j.a.factoryFloat
                                }, "+$".concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)))) : null, s.a.createElement("div", {
                                    className: j.a.blookHolder,
                                    style: {
                                        boxShadow: ne(n.bonus),
                                        backgroundColor: t ? "#000" : a ? o[3] : null
                                    }
                                }, s.a.createElement(I.a, {
                                    name: n.name,
                                    className: j.a.factoryBlook
                                }), s.a.createElement("div", {
                                    className: j.a.factoryBarHolder,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[4] : null
                                    }
                                }, s.a.createElement("div", {
                                    className: j.a.factoryBar,
                                    onAnimationIteration: function() {
                                        return e.addCash(n)
                                    },
                                    style: {
                                        backgroundColor: t ? "#fff" : n.color,
                                        animationDuration: "".concat(e.state.slow ? 1.75 * n.time[n.level] : n.time[n.level], "s")
                                    }
                                }))), n.bonus > 1 ? s.a.createElement("div", {
                                    className: j.a.blookBonus,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[0] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "x".concat(n.bonus.toFixed(1))) : null, s.a.createElement("div", {
                                    className: j.a.blookDesc,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[1] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "".concat(re[n.level], ": $").concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)), " / ").concat(n.time[n.level], "s")), s.a.createElement("div", {
                                    className: j.a.factoryButtonContainer
                                }, 4 !== n.level ? s.a.createElement("div", {
                                    className: j.a.factoryUpgrade,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : e.state.cash >= n.price[n.level] ? "#4bc22e" : null,
                                        color: t || e.state.cash >= n.price[n.level] ? "#fff" : "#999"
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.upgrade(n)
                                    },
                                    id: "upgrade".concat(r)
                                }, s.a.createElement("i", {
                                    className: f()(j.a.upgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.upgradeText,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "$".concat(Object(G.v)(n.price[n.level])))) : s.a.createElement("div", {
                                    className: j.a.factoryUpgradeMax,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[3] : null
                                    }
                                }, s.a.createElement("i", {
                                    className: f()(j.a.upgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.upgradeText,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "MAX")), s.a.createElement("div", {
                                    className: j.a.factoryClass,
                                    id: "class".concat(r),
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[4] : null
                                    }
                                }, e.state.slow ? "⏰" : n.class)))
                            })) : s.a.createElement("div", {
                                className: j.a.nothingText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "Answer Questions To", s.a.createElement("br", null), "Start Your Factory")))), s.a.createElement("div", {
                                className: j.a.left,
                                id: "left",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[3] : null
                                }
                            }, this.state.feedback || this.state.choices[0] ? this.state.remind && !this.state.choices[0] ? s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.questionContainerFaded : j.a.questionContainer
                            }, s.a.createElement("div", {
                                className: j.a.remindText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "You should probably upgrade a unit"), s.a.createElement("div", {
                                className: j.a.remindButton,
                                tabIndex: 0,
                                role: "button",
                                onClick: function() {
                                    e.reminder += 1, e.setState({
                                        remind: !1
                                    })
                                },
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : null,
                                    color: t ? "#fff" : null
                                }
                            }, "No, I Want To Lose")) : this.state.feedback ? s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.feedbackContainerFaded : j.a.feedbackContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[0] : this.state.correct ? "#4bc22e" : "#c43a35",
                                    cursor: this.state.waiting ? null : "pointer"
                                },
                                onClick: function() {
                                    return e.goNext()
                                },
                                role: "button",
                                tabIndex: "0"
                            }, this.state.choices[0] ? null : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: j.a.feedbackText
                            }, this.state.correct ? "CORRECT" : "INCORRECT"), s.a.createElement("div", {
                                className: j.a.feedbackTextTwo
                            }, s.a.createElement("i", {
                                className: this.state.correct ? "fas fa-check" : "fas fa-times"
                            })), this.state.correct ? null : s.a.createElement("div", {
                                className: j.a.feedbackTextThree
                            }, "Correct ".concat(this.state.question.correctAnswers.length > 1 ? "Answers" : "Answer", ": "), Object(G.f)(this.state.question.correctAnswers, "#fff", 28)), s.a.createElement("div", {
                                className: j.a.feedbackTextNext,
                                style: {
                                    textDecoration: this.state.next ? "underline" : "none"
                                }
                            }, this.state.waiting ? this.state.timer : "Click Anywhere to Go Next"))) : s.a.createElement("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: t ? "#000" : a ? o[0] : "#0bc2cf"
                                }
                            }) : s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.questionContainerFaded : j.a.questionContainer
                            }, s.a.createElement("div", {
                                className: j.a.questionTextContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[3] : F.b.default.background
                                }
                            }, this.state.question.audio ? s.a.createElement("div", {
                                className: j.a.imageContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                }
                            }, s.a.createElement(M.a, {
                                audioUrl: this.state.question.audio,
                                autoplay: !0,
                                width: "80%"
                            })) : this.state.question.image ? s.a.createElement("div", {
                                className: j.a.imageContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: e.state.question.image
                                    })
                                }
                            }, s.a.createElement("img", {
                                src: Object(G.g)(this.state.question.image),
                                alt: "Upload",
                                className: j.a.image,
                                draggable: !1
                            })) : this.state.question.text.includes("`*`") ? s.a.createElement("div", {
                                className: f()(j.a.imageContainer, j.a.funcContainer),
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                }
                            }, s.a.createElement(p.StaticMathField, {
                                className: j.a.qMathField,
                                style: {
                                    color: t ? "#fff" : F.b.default.text,
                                    borderColor: t ? "#fff" : F.b.default.text
                                }
                            }, this.state.question.text.slice(this.state.question.text.indexOf("`*`") + 3, this.state.question.text.length - 3))) : null, s.a.createElement(u.Textfit, {
                                className: j.a.questionText,
                                style: {
                                    color: t ? "#fff" : F.b.default.text
                                },
                                mode: "multi",
                                min: 1,
                                max: 38,
                                id: "qText"
                            }, this.state.question.text.includes("`*`") ? this.state.question.text.slice(0, this.state.question.text.indexOf("`*`")) : this.state.question.text)), s.a.createElement("div", {
                                className: j.a.answersHolder
                            }, this.state.question.answers.map((function(n, r) {
                                return s.a.createElement("div", {
                                    className: j.a.answerWrapper,
                                    key: n
                                }, s.a.createElement("div", {
                                    className: j.a.answerContainer,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[0] : F.b.default.answers[r].background
                                    },
                                    onClick: function() {
                                        return e.onAnswer(n)
                                    },
                                    role: "button",
                                    tabIndex: "0"
                                }, 2 === n.split("`~`").length ? s.a.createElement("div", {
                                    className: j.a.answerImgContainer
                                }, s.a.createElement("img", {
                                    src: Object(G.g)(n.split("`~`")[1]),
                                    alt: "Answer",
                                    className: j.a.answerImg,
                                    draggable: !1
                                })) : "`*`" === n.slice(0, 3) ? s.a.createElement("div", {
                                    className: j.a.answerImgContainer
                                }, s.a.createElement(p.StaticMathField, {
                                    className: j.a.mathField,
                                    style: {
                                        color: F.b.default.answers[r].text,
                                        borderColor: F.b.default.answers[r].text
                                    }
                                }, n.slice(3, n.length - 3))) : s.a.createElement(u.Textfit, {
                                    className: j.a.answerText,
                                    mode: "multi",
                                    min: 1,
                                    max: 28,
                                    style: {
                                        color: F.b.default.answers[r].text
                                    },
                                    id: "q".concat(r + 1)
                                }, n)))
                            })))), this.state.choices[0] ? s.a.createElement("div", {
                                className: j.a.choiceContainer,
                                id: "choices",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.choiceText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, this.state.deleteFor.name ? "Choose a Blook to Replace >" : "Choose a Blook"), s.a.createElement("div", {
                                className: j.a.blookChoices
                            }, this.state.choices.map((function(n) {
                                return e.state.deleteFor.name && e.state.deleteFor.name !== n.name ? null : "g" === n.class ? s.a.createElement("div", {
                                    key: n.name,
                                    className: j.a.blookChoice,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : null
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.chooseGlitch(n)
                                    }
                                }, s.a.createElement("i", {
                                    className: f()(j.a.glitchIcon, n.icon),
                                    style: {
                                        color: t ? "#fff" : n.color,
                                        fontSize: "fas fa-grin-tears" === n.icon ? "5.5vw" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.blookChoiceInfo,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, n.name), s.a.createElement("div", {
                                    className: j.a.blookChoiceName,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "Glitch")) : s.a.createElement("div", {
                                    key: n.name,
                                    className: j.a.blookChoice,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[3] : null
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.chooseBlook(n)
                                    }
                                }, s.a.createElement(I.a, {
                                    name: n.name,
                                    className: j.a.blookChoiceImage
                                }), s.a.createElement("div", {
                                    className: j.a.blookChoiceInfo,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "$".concat(Object(G.v)(n.cash[0]), " / ").concat(n.time[0], "s")), s.a.createElement("div", {
                                    className: j.a.blookChoiceName,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "".concat(n.name, " ").concat(n.class)))
                            }))), this.state.blooks.length >= 10 ? s.a.createElement("div", {
                                className: j.a.skipButton,
                                role: "button",
                                tabIndex: "0",
                                onClick: function() {
                                    return e.chooseBlook()
                                },
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : null,
                                    color: t ? "#fff" : null
                                }
                            }, "Skip") : this.state.classes.length > 0 ? s.a.createElement("div", {
                                className: j.a.classHelperText
                            }, "Match Blooks with ".concat(le(this.state.classes), " for the Class Synergy Bonus!")) : null) : null), this.state.zoomedImage ? s.a.createElement("div", {
                                className: f()(E.a.modal, E.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, s.a.createElement("img", {
                                src: Object(G.g)(this.state.zoomedImage, !0),
                                alt: "Upload",
                                className: E.a.bigImage,
                                draggable: !1
                            })) : null) : this.state.ready && _.isMobile ? s.a.createElement("div", {
                                className: E.a.regularBody,
                                id: "regularBody",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[0] : null
                                }
                            }, this.state.showTour ? s.a.createElement(P.a, {
                                steps: v,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                },
                                functions: [function() {
                                    return e.setState({
                                        showQ: !0
                                    })
                                }],
                                ref: this.tourRef
                            }) : null, s.a.createElement("div", {
                                className: j.a.mProgressHolder,
                                id: "mProgress",
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : null
                                }
                            }, this.state.deleteFor.name ? s.a.createElement("div", {
                                className: j.a.mDeleteText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "Replace a Blook") : s.a.createElement("div", null, s.a.createElement("div", {
                                className: j.a.mProgressContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[2] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.mProgressBar,
                                style: {
                                    transform: "translateX(-".concat(100 - this.state.progress / this.state.progressNeeded * 100, "%)"),
                                    backgroundColor: t ? "#fff" : null
                                }
                            })), s.a.createElement("div", {
                                className: j.a.mProgressBox,
                                style: {
                                    backgroundColor: t ? "#fff" : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.mProgressText,
                                style: {
                                    color: t ? "#000" : a ? o[3] : null
                                }
                            }, this.state.progressNeeded - this.state.progress)))), this.state.showTour && this.state.blooks[0] ? this.state.blooks.map((function(n, r) {
                                return s.a.createElement("div", {
                                    key: e.state.blooks.indexOf(n),
                                    className: f()(e.state.deleteFor.name ? j.a.mFactoryButton : j.a.mFactory),
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[4] : null,
                                        margin: "calc(6vh + 55px) auto 0 auto"
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.deleteBlook(n)
                                    },
                                    id: "mBlook".concat(r)
                                }, n.active ? s.a.createElement("div", {
                                    className: j.a.mFactoryFloat,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "+$".concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)))) : null, s.a.createElement("div", {
                                    className: j.a.mBlookHolder,
                                    style: {
                                        boxShadow: ne(n.bonus),
                                        backgroundColor: t ? "#000" : a ? o[0] : null
                                    }
                                }, s.a.createElement(I.a, {
                                    name: n.name,
                                    className: j.a.factoryBlook
                                }), s.a.createElement("div", {
                                    className: j.a.factoryBarHolder,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[1] : null
                                    }
                                }, s.a.createElement("div", {
                                    className: j.a.factoryBar,
                                    onAnimationIteration: function() {
                                        return e.addCash(n)
                                    },
                                    style: {
                                        backgroundColor: t ? "#fff" : n.color,
                                        animationDuration: "".concat(e.state.slow ? 1.75 * n.time[n.level] : n.time[n.level], "s")
                                    }
                                }))), n.bonus > 1 ? s.a.createElement("div", {
                                    className: j.a.mBlookBonus,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "x".concat(n.bonus.toFixed(1))) : null, s.a.createElement("div", {
                                    className: j.a.blookDesc,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[3] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "".concat(re[n.level], ": $").concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)), " / ").concat(n.time[n.level], "s")), s.a.createElement("div", {
                                    className: j.a.factoryButtonContainer
                                }, 4 !== n.level ? s.a.createElement("div", {
                                    className: j.a.mFactoryUpgrade,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : e.state.cash >= n.price[n.level] ? "#4bc22e" : null,
                                        color: t || e.state.cash >= n.price[n.level] ? "#fff" : "#999"
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.upgrade(n)
                                    },
                                    id: "mUpgrade".concat(r)
                                }, s.a.createElement("i", {
                                    className: f()(j.a.mUpgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.mUpgradeText
                                }, "$".concat(Object(G.v)(n.price[n.level])))) : s.a.createElement("div", {
                                    className: j.a.factoryUpgradeMax,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[0] : null
                                    }
                                }, s.a.createElement("i", {
                                    className: f()(j.a.mUpgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.mUpgradeText,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "MAX")), s.a.createElement("div", {
                                    className: j.a.factoryClass,
                                    id: "mClass".concat(r),
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[1] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, e.state.slow ? "⏰" : n.class)))
                            })) : null, s.a.createElement("div", null, s.a.createElement("div", {
                                className: j.a.mNoQ
                            }, s.a.createElement("div", {
                                className: j.a.mFactories
                            }, this.state.blooks[0] ? s.a.createElement("div", {
                                style: {
                                    height: 15
                                }
                            }) : null, !this.state.showTour && this.state.blooks[0] ? this.state.blooks.map((function(n, r) {
                                return s.a.createElement("div", {
                                    key: e.state.blooks.indexOf(n),
                                    className: f()(e.state.deleteFor.name ? j.a.mFactoryButton : j.a.mFactory),
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[4] : null
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.deleteBlook(n)
                                    },
                                    id: "mBlook".concat(r)
                                }, n.active ? s.a.createElement("div", {
                                    className: j.a.mFactoryFloat,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "+$".concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)))) : null, s.a.createElement("div", {
                                    className: j.a.mBlookHolder,
                                    style: {
                                        boxShadow: ne(n.bonus),
                                        backgroundColor: t ? "#000" : a ? o[0] : null
                                    }
                                }, s.a.createElement(I.a, {
                                    name: n.name,
                                    className: j.a.factoryBlook
                                }), s.a.createElement("div", {
                                    className: j.a.factoryBarHolder,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[1] : null
                                    }
                                }, s.a.createElement("div", {
                                    className: j.a.factoryBar,
                                    onAnimationIteration: function() {
                                        return e.addCash(n)
                                    },
                                    style: {
                                        backgroundColor: t ? "#fff" : n.color,
                                        animationDuration: "".concat(e.state.slow ? 1.75 * n.time[n.level] : n.time[n.level], "s")
                                    }
                                }))), n.bonus > 1 ? s.a.createElement("div", {
                                    className: j.a.mBlookBonus,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "x".concat(n.bonus.toFixed(1))) : null, s.a.createElement("div", {
                                    className: j.a.blookDesc,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[3] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, "".concat(re[n.level], ": $").concat(Object(G.v)(Math.round(n.cash[n.level] * n.bonus)), " / ").concat(n.time[n.level], "s")), s.a.createElement("div", {
                                    className: j.a.factoryButtonContainer
                                }, 4 !== n.level ? s.a.createElement("div", {
                                    className: j.a.mFactoryUpgrade,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[2] : e.state.cash >= n.price[n.level] ? "#4bc22e" : null,
                                        color: t || e.state.cash >= n.price[n.level] ? "#fff" : "#999"
                                    },
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.upgrade(n)
                                    },
                                    id: "mUpgrade".concat(r)
                                }, s.a.createElement("i", {
                                    className: f()(j.a.mUpgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.mUpgradeText
                                }, "$".concat(Object(G.v)(n.price[n.level])))) : s.a.createElement("div", {
                                    className: j.a.factoryUpgradeMax,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[0] : null
                                    }
                                }, s.a.createElement("i", {
                                    className: f()(j.a.mUpgradeIcon, "fas fa-angle-double-up"),
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.mUpgradeText,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "MAX")), s.a.createElement("div", {
                                    className: j.a.factoryClass,
                                    id: "mClass".concat(r),
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[1] : null,
                                        color: t ? "#fff" : null
                                    }
                                }, e.state.slow ? "⏰" : n.class)))
                            })) : this.state.blooks[0] ? null : s.a.createElement("div", {
                                className: j.a.mNothingText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "Answer", s.a.createElement("br", null), "Questions", s.a.createElement("br", null), "To Start", s.a.createElement("br", null), "Your Factory")), this.state.blooks[0] ? s.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            }) : null), !this.state.showQ && this.state.deleteFor.name ? s.a.createElement("div", {
                                className: j.a.mNextQuestion,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[2] : null,
                                    color: t ? "#fff" : null
                                },
                                role: "button",
                                tabIndex: "0",
                                onClick: function() {
                                    return e.setState({
                                        deleteFor: {}
                                    })
                                }
                            }, "Skip") : this.state.showQ ? null : s.a.createElement("div", {
                                className: j.a.mNextQuestion,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[3] : null,
                                    color: t ? "#fff" : null
                                },
                                role: "button",
                                tabIndex: "0",
                                onClick: function() {
                                    return e.setState({
                                        showQ: !0
                                    })
                                },
                                id: "mBottom"
                            }, "Next Question")), this.state.showQ ? s.a.createElement("div", {
                                className: j.a.mQuestion,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : null
                                }
                            }, this.state.feedback || this.state.choices[0] ? this.state.remind && !this.state.choices[0] ? s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.mQuestionContainerFaded : j.a.mQuestionContainer
                            }, s.a.createElement("div", {
                                className: j.a.remindText,
                                style: {
                                    fontSize: 36,
                                    color: t ? "#fff" : null
                                }
                            }, "You should probably upgrade a unit"), s.a.createElement("div", {
                                className: j.a.mNextQuestion,
                                tabIndex: 0,
                                role: "button",
                                onClick: function() {
                                    e.reminder += 1, e.setState({
                                        remind: !1
                                    })
                                },
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[0] : null,
                                    color: t ? "#fff" : null
                                }
                            }, "OK")) : this.state.feedback ? s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.mFeedbackContainerFaded : j.a.mFeedbackContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : this.state.correct ? "#4bc22e" : "#c43a35",
                                    cursor: this.state.waiting ? null : "pointer"
                                },
                                onClick: function() {
                                    return e.goNext()
                                },
                                role: "button",
                                tabIndex: "0"
                            }, this.state.choices[0] ? null : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: j.a.feedbackText
                            }, this.state.correct ? "CORRECT" : "INCORRECT"), s.a.createElement("div", {
                                className: j.a.feedbackTextTwo
                            }, s.a.createElement("i", {
                                className: this.state.correct ? "fas fa-check" : "fas fa-times"
                            })), this.state.correct ? null : s.a.createElement("div", {
                                className: j.a.feedbackTextThree
                            }, "Correct ".concat(this.state.question.correctAnswers.length > 1 ? "Answers" : "Answer", ": "), Object(G.f)(this.state.question.correctAnswers, "#fff", 28)), s.a.createElement("div", {
                                className: j.a.feedbackTextNext,
                                style: {
                                    textDecoration: this.state.next ? "underline" : "none"
                                }
                            }, this.state.waiting ? this.state.timer : "Click Anywhere to Go Next"))) : s.a.createElement("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: t ? "#000" : a ? o[0] : "#0bc2cf"
                                }
                            }) : s.a.createElement("div", {
                                className: this.state.prefeedback ? j.a.mQuestionContainerFaded : j.a.mQuestionContainer
                            }, s.a.createElement("div", {
                                className: j.a.questionTextContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[3] : F.b.default.background
                                }
                            }, this.state.question.audio ? s.a.createElement("div", {
                                className: j.a.imageContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                }
                            }, s.a.createElement(M.a, {
                                audioUrl: this.state.question.audio,
                                autoplay: !0,
                                width: "80%"
                            })) : this.state.question.image ? s.a.createElement("div", {
                                className: j.a.imageContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: e.state.question.image
                                    })
                                }
                            }, s.a.createElement("img", {
                                src: Object(G.g)(this.state.question.image),
                                alt: "Upload",
                                className: j.a.image,
                                draggable: !1
                            })) : this.state.question.text.includes("`*`") ? s.a.createElement("div", {
                                className: f()(j.a.imageContainer, j.a.funcContainer),
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[4] : F.b.default.background
                                }
                            }, s.a.createElement(p.StaticMathField, {
                                className: j.a.mQMathField,
                                style: {
                                    color: t ? "#fff" : F.b.default.text,
                                    borderColor: t ? "#fff" : F.b.default.text
                                }
                            }, this.state.question.text.slice(this.state.question.text.indexOf("`*`") + 3, this.state.question.text.length - 3))) : null, s.a.createElement(u.Textfit, {
                                className: j.a.questionText,
                                style: {
                                    color: t ? "#fff" : F.b.default.text
                                },
                                mode: "multi",
                                min: 1,
                                max: 36,
                                id: "qText"
                            }, this.state.question.text.includes("`*`") ? this.state.question.text.slice(0, this.state.question.text.indexOf("`*`")) : this.state.question.text)), s.a.createElement("div", {
                                className: j.a.answersHolder
                            }, this.state.question.answers.map((function(n, r) {
                                return s.a.createElement("div", {
                                    className: j.a.answerWrapper,
                                    key: n
                                }, s.a.createElement("div", {
                                    className: j.a.mAnswerContainer,
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[0] : F.b.default.answers[r].background
                                    },
                                    onClick: function() {
                                        return e.onAnswer(n)
                                    },
                                    role: "button",
                                    tabIndex: "0"
                                }, 2 === n.split("`~`").length ? s.a.createElement("div", {
                                    className: j.a.answerImgContainer
                                }, s.a.createElement("img", {
                                    src: Object(G.g)(n.split("`~`")[1]),
                                    alt: "Answer",
                                    className: j.a.answerImg,
                                    draggable: !1
                                })) : "`*`" === n.slice(0, 3) ? s.a.createElement("div", {
                                    className: j.a.answerImgContainer
                                }, s.a.createElement(p.StaticMathField, {
                                    className: j.a.mathField,
                                    style: {
                                        color: F.b.default.answers[r].text,
                                        borderColor: F.b.default.answers[r].text
                                    }
                                }, n.slice(3, n.length - 3))) : s.a.createElement(u.Textfit, {
                                    className: j.a.answerText,
                                    mode: "multi",
                                    min: 1,
                                    max: 28,
                                    style: {
                                        color: F.b.default.answers[r].text
                                    },
                                    id: "q".concat(r + 1)
                                }, n)))
                            })))), this.state.choices[0] ? s.a.createElement("div", {
                                className: j.a.mChoiceContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[2] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.mChoiceText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "Choose a Blook"), s.a.createElement("div", {
                                className: j.a.mBlookChoices
                            }, this.state.choices.map((function(n) {
                                return e.state.deleteFor.name && e.state.deleteFor.name !== n.name ? null : "g" === n.class ? s.a.createElement("div", {
                                    key: n.name,
                                    className: j.a.mBlookChoice,
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.chooseGlitch(n)
                                    },
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[3] : null
                                    }
                                }, s.a.createElement("i", {
                                    className: f()(j.a.mGlitchIcon, n.icon),
                                    style: {
                                        color: t ? "#fff" : n.color,
                                        fontSize: "fas fa-grin-tears" === n.icon ? "14vw" : null
                                    }
                                }), s.a.createElement("div", {
                                    className: j.a.mBlookChoiceInfo,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, n.name), s.a.createElement("div", {
                                    className: j.a.mBlookChoiceName,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "Glitch")) : s.a.createElement("div", {
                                    key: n.name,
                                    className: j.a.mBlookChoice,
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        return e.chooseBlook(n)
                                    },
                                    style: {
                                        backgroundColor: t ? "#000" : a ? o[4] : null
                                    }
                                }, s.a.createElement(I.a, {
                                    name: n.name,
                                    className: j.a.mBlookChoiceImage
                                }), s.a.createElement("div", {
                                    className: j.a.mBlookChoiceInfo,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "$".concat(Object(G.v)(n.cash[0]), " / ").concat(n.time[0], "s")), s.a.createElement("div", {
                                    className: j.a.mBlookChoiceName,
                                    style: {
                                        color: t ? "#fff" : null
                                    }
                                }, "".concat(n.name, " ").concat(n.class)))
                            }))), this.state.blooks.length >= 10 ? s.a.createElement("div", {
                                className: j.a.mSkipButton,
                                role: "button",
                                tabIndex: "0",
                                onClick: function() {
                                    return e.chooseBlook()
                                },
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[0] : null,
                                    color: t ? "#fff" : null
                                }
                            }, "Skip") : this.state.classes.length > 0 ? s.a.createElement("div", {
                                className: j.a.mClassHelperText
                            }, "Match Blooks with ".concat(le(this.state.classes), " for the Class Synergy Bonus!")) : null) : null) : null, this.state.zoomedImage ? s.a.createElement("div", {
                                className: f()(E.a.modal, E.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, s.a.createElement("img", {
                                src: Object(G.g)(this.state.zoomedImage, !0),
                                alt: "Upload",
                                className: E.a.bigImage,
                                draggable: !1
                            })) : null) : null, this.state.glitcherName ? s.a.createElement("div", {
                                className: _.isMobile ? j.a.mGlitcherContainer : j.a.glitcherContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[1] : null
                                }
                            }, s.a.createElement("div", {
                                className: _.isMobile ? j.a.mGlitcherText : j.a.glitcherText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "Glitch By: ".concat(this.state.glitcherName)), s.a.createElement(I.a, {
                                name: this.state.glitcherBlook,
                                className: _.isMobile ? j.a.mGlitcherBlook : j.a.glitcherBlook
                            })) : null, this.state.glitchMsg ? s.a.createElement(B.a, {
                                text: this.state.glitchMsg,
                                buttonOne: {
                                    text: "Nice!",
                                    click: function() {
                                        return e.setState({
                                            glitchMsg: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null, this.state.bites > 0 ? s.a.createElement("div", {
                                className: E.a.modal,
                                role: "button",
                                tabIndex: 0,
                                style: {
                                    outline: "none",
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return e.setState({
                                        bites: e.state.bites - 1
                                    })
                                }
                            }, s.a.createElement("i", {
                                className: f()("fas fa-hamburger", j.a.burger),
                                style: {
                                    opacity: .1 + this.state.bites / 20 * .9,
                                    color: t ? "#fff" : null
                                }
                            }), s.a.createElement("div", {
                                className: j.a.burgerText
                            }, "Click to Eat the Burger")) : null, this.state.ads.reduce((function(e, t) {
                                return e + t
                            }), 0) > 0 ? s.a.createElement(z.a, {
                                ads: this.state.ads,
                                onClick: this.closeAd,
                                night: t,
                                hazards: [a].concat(X(o))
                            }) : null, this.state.lol ? s.a.createElement(A.a, null) : null, this.state.joke ? s.a.createElement(L.a, null) : null, this.state.slow ? s.a.createElement(q.a, {
                                night: t
                            }) : null, this.state.oneMin ? s.a.createElement("div", {
                                className: j.a.minuteModal
                            }, s.a.createElement("div", {
                                className: j.a.modalContainer,
                                style: {
                                    backgroundColor: t ? "#000" : a ? o[2] : null
                                }
                            }, s.a.createElement("div", {
                                className: j.a.modalText,
                                style: {
                                    color: t ? "#fff" : null
                                }
                            }, "One Minute Remaining"))) : null), this.state.dance ? s.a.createElement(R.a, {
                                name: this.state.glitcherName,
                                blook: this.state.glitcherBlook
                            }) : null, this.state.askTour ? s.a.createElement(B.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return e.setState({
                                            showTour: !0,
                                            askTour: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            showTour: !1,
                                            askTour: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.popUpAmount > 0 && !this.state.showTour ? s.a.createElement(B.a, {
                                text: "Cash" === this.state.popUpType ? "Your goal is to make $".concat(Object(G.o)(this.state.popUpAmount), "!") : "Your goal is to make as much money as you can in ".concat(this.state.popUpAmount, " ").concat(1 === this.state.popUpAmount ? "minute" : "minutes", "!"),
                                buttonOne: {
                                    text: "OK",
                                    click: function() {
                                        return e.setState({
                                            popUpAmount: 0
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && $(t.prototype, a), o && $(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(s.a.Component);
            ce.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                firebase: l.a.object,
                deleteClient: l.a.func.isRequired,
                factoryResults: l.a.func.isRequired,
                factoryDisconnect: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(n.b)({
                    deleteClient: k.a,
                    factoryResults: w,
                    factoryDisconnect: C
                }, e)
            }))(Object(H.d)(ce)))
        },
        aMAJ: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            })), a.d(t, "b", (function() {
                return s
            }));
            var o = {
                    "Lunch Break": "lb",
                    "Ad Spam": "as",
                    "Error 37": "e37",
                    "Night Time": "nt",
                    "#LOL": "lo",
                    Jokester: "j",
                    "Slow Mo": "sm",
                    "Dance Party": "dp",
                    Vortex: "v",
                    Reverse: "r",
                    Flip: "f",
                    Micro: "m"
                },
                s = {
                    lb: "Lunch Break",
                    as: "Ad Spam",
                    e37: "Error 37",
                    nt: "Night Time",
                    lo: "#LOL",
                    j: "Jokester",
                    sm: "Slow Mo",
                    dp: "Dance Party",
                    v: "Vortex",
                    r: "Reverse",
                    f: "Flip",
                    m: "Micro"
                }
        },
        d0kj: function(e, t, a) {
            var o = a("nn0I");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var s = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(o, s);
            o.locals && (e.exports = o.locals)
        },
        iErj: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__cashText___1p8qu-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                cashText: "styles__cashText___1p8qu-camelCase"
            }
        },
        nn0I: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___22WpZ-camelCase{background-color:#9a49aa;width:100vw;height:55px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__expandIcon___2EBUo-camelCase{font-size:22px;line-height:55px;margin-right:15px;cursor:pointer;outline:none}.styles__headerTextLeft___2sidO-camelCase{text-align:left;padding-left:20px}.styles__headerTextLeft___2sidO-camelCase,.styles__headerTextRight___I3Smw-camelCase{font-size:28px;color:#fff;line-height:55px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerTextRight___I3Smw-camelCase{text-align:right;margin-right:20px}.styles__left___1WYwh-camelCase{width:50vw;height:calc(100vh - 55px);background-color:#fff;position:absolute;top:0;left:0;display:flex;flex-direction:column;box-shadow:6px 0 8px rgba(0,0,0,.2)}.styles__feedbackContainer___2EWRn-camelCase{opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__feedbackContainer___2EWRn-camelCase,.styles__feedbackContainerFaded___MDyIL-camelCase{width:50vw;height:calc(100vh - 55px);position:absolute;top:0;left:0;display:flex;flex-direction:column;outline:none;transition:opacity .2s cubic-bezier(.39,.5,.15,1.36)}.styles__feedbackContainerFaded___MDyIL-camelCase{opacity:0}.styles__remindText___25J6V-camelCase{font-size:4vw;color:#3a3a3a;width:60%;top:20%;left:20%;opacity:1}.styles__remindButton___1gTTO-camelCase,.styles__remindText___25J6V-camelCase{text-align:center;font-weight:700;position:absolute;font-family:Nunito,sans-serif}.styles__remindButton___1gTTO-camelCase{font-size:32px;color:#fff;left:0;top:calc(100% - 70px);width:100%;height:70px;line-height:70px;background-color:#0bc2cf;z-index:2;box-shadow:0 -6px 8px rgba(0,0,0,.2);outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__feedbackText___XcGN4-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__feedbackText___XcGN4-camelCase,.styles__feedbackTextTwo___2BOS0-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;-webkit-animation:styles__fadeIn___1ZPJI-camelCase .3s linear .3s forwards;animation:styles__fadeIn___1ZPJI-camelCase .3s linear .3s forwards}.styles__feedbackTextTwo___2BOS0-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__feedbackTextThree___LSO3o-camelCase{font-size:30px;bottom:20%;left:15%;width:70%;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;-webkit-animation:styles__fadeIn___1ZPJI-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___1ZPJI-camelCase .3s linear 1.3s forwards}.styles__feedbackTextNext___bKfnr-camelCase,.styles__feedbackTextThree___LSO3o-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;font-family:Nunito,sans-serif;opacity:0}.styles__feedbackTextNext___bKfnr-camelCase{font-size:26px;bottom:5%;left:7.5%;width:85%;font-weight:700;-webkit-animation:styles__fadeIn___1ZPJI-camelCase .3s linear .3s forwards;animation:styles__fadeIn___1ZPJI-camelCase .3s linear .3s forwards}@-webkit-keyframes styles__fadeIn___1ZPJI-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1ZPJI-camelCase{0%{opacity:0}to{opacity:1}}.styles__questionContainer___KBSUf-camelCase{opacity:1}.styles__questionContainer___KBSUf-camelCase,.styles__questionContainerFaded___ZtN4k-camelCase{width:50vw;height:calc(100vh - 55px);position:absolute;top:0;left:0;display:flex;flex-direction:column;transition:opacity .2s linear}.styles__questionContainerFaded___ZtN4k-camelCase{opacity:0}.styles__questionTextContainer___3mGZG-camelCase{width:90%;height:40%;background-color:#fff;position:absolute;top:2.5%;left:5%;display:flex;flex-direction:row;align-items:center}.styles__questionText___2XG8r-camelCase{color:#3a3a3a;width:85%;font-family:Nunito,sans-serif;text-align:center;overflow:hidden;float:left;word-wrap:break-word;flex-grow:1;white-space:pre-line}.styles__imageContainer___3K3fz-camelCase,.styles__questionText___2XG8r-camelCase{height:90%;display:flex;justify-content:center;align-items:center}.styles__imageContainer___3K3fz-camelCase{width:40%;margin-right:5%;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__image___3SQtz-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__funcContainer___WUg0Q-camelCase{cursor:default}.styles__qMathField___3EB9O-camelCase{font-size:24px!important}.styles__mQMathField___3OtPl-camelCase,.styles__qMathField___3EB9O-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a}.styles__mQMathField___3OtPl-camelCase{font-size:12px!important}.styles__answersHolder___340cg-camelCase{display:flex;justify-content:space-evenly;align-items:space-evenly;position:absolute;top:55%;top:45%;flex-direction:column;height:calc(55% - 5px);width:calc(100% - 10px);padding:0 5px 5px}.styles__answerWrapper___1d4VO-camelCase{width:calc(100% - 6px);height:calc(25% - 6px - .9vh);flex-grow:1;margin:3px auto;overflow:hidden}.styles__answerContainer____unYj-camelCase{margin:auto;width:100%;height:calc(100% - .9vh);border-radius:5px;overflow:hidden;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__answerContainer____unYj-camelCase:focus,.styles__answerContainer____unYj-camelCase:hover{filter:brightness(.96);box-shadow:none;padding-bottom:0;height:100%}.styles__answerContainer____unYj-camelCase:focus>.styles__answerText___SyUG8-camelCase,.styles__answerContainer____unYj-camelCase:hover>.styles__answerText___SyUG8-camelCase{height:calc(85% - .765vh)}.styles__mAnswerContainer___26I4m-camelCase{margin:auto;width:100%;height:calc(100% - .9vh);border-radius:5px;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2)}.styles__answerText___SyUG8-camelCase,.styles__mAnswerContainer___26I4m-camelCase{overflow:hidden;display:flex;justify-content:center;align-items:center}.styles__answerText___SyUG8-camelCase{color:#fff;height:85%;width:90%;font-family:Nunito,sans-serif;text-align:center;float:left;word-wrap:break-word;transition:height .2s cubic-bezier(.39,.5,.15,1.36)}.styles__answerImgContainer___3Uo5_-camelCase{height:90%;width:90%;display:flex;justify-content:center;align-items:center}.styles__answerImg___3TAtC-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3TAtC-camelCase,.styles__mathField___33vGq-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___33vGq-camelCase{cursor:pointer!important;color:#fff;border-color:#fff;font-size:24px!important}.styles__right___1nFpe-camelCase{height:calc(100vh - 55px);left:50vw;flex-direction:column}.styles__right___1nFpe-camelCase,.styles__topRight___UJSoC-camelCase{width:50vw;position:absolute;top:0;display:flex}.styles__topRight___UJSoC-camelCase{height:80px;background-color:#fff;left:0;flex-direction:row;box-shadow:0 6px 8px rgba(0,0,0,.2)}.styles__progressContainer___f0Lnj-camelCase{width:30vw;height:40px;background-color:#dfdfdf;position:absolute;top:20px;left:5vw;overflow:hidden;border-radius:7px}.styles__progressBar___T6L_F-camelCase{width:30vw;height:100%;top:0;left:0;transition:all .5s linear}.styles__progressBar___T6L_F-camelCase,.styles__progressBox___7swZF-camelCase{background-color:#0bc2cf;position:absolute}.styles__progressBox___7swZF-camelCase{height:50px;width:50px;top:15px;left:40vw;border-radius:5px}.styles__progressText___2aMw5-camelCase{font-size:38px;color:#fff;text-align:center;line-height:48px;width:50px;font-family:Titan One,sans-serif}.styles__choiceContainer___3qFK7-camelCase{width:45vw;max-height:calc(90vh - 55px);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;opacity:1;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__choices___1BcXt-camelCase .3s linear;animation:styles__choices___1BcXt-camelCase .3s linear}@-webkit-keyframes styles__choices___1BcXt-camelCase{0%{opacity:0}40%{opacity:0}50%{transform:scale(1) translate(-50%,-50%)}70%{transform:scale(1.05) translate(-50%,-50%)}80%{transform:scale(1.025) translate(-50%,-50%)}90%{transform:scale(1) translate(-50%,-50%)}to{opacity:1}}.styles__choiceText___22GBO-camelCase{font-size:4vw;color:#3a3a3a;text-align:center;font-family:Titan One,sans-serif;margin:5vh 2vw 1vh}.styles__blookChoices____ksoH-camelCase{width:40vw;display:flex;flex-direction:row;justify-content:space-around;align-content:center;margin:5vh auto 7vh}.styles__blookChoice___1kAAj-camelCase{width:10vw;display:flex;flex-direction:column;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);transition:all .2s cubic-bezier(.39,.5,.15,1.36);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__blookChoice___1kAAj-camelCase:hover{transform:scale(1.05)}.styles__blookChoiceImage___wpfo3-camelCase{margin:2.5vh 1.5vw}.styles__blookChoiceImage___wpfo3-camelCase,.styles__glitchIcon___2P05P-camelCase{width:7vw;height:8.05vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__glitchIcon___2P05P-camelCase{font-size:6.5vw;text-align:center;line-height:8.05vw;margin:3.5vh 1.5vw 1.5vh}.styles__mGlitchIcon___34IgZ-camelCase{font-size:16vw;text-align:center;width:17vw;height:17.55vw;line-height:17.55vw;margin:calc(2vh + 2vw) 4.5vw 2vh}.styles__glitcherContainer___PT0mq-camelCase,.styles__mGlitchIcon___34IgZ-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__glitcherContainer___PT0mq-camelCase{height:6vw;max-width:calc(100vw - 20px);position:absolute;top:65px;right:10px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;outline:none;cursor:pointer;display:flex;flex-direction:row;align-items:center;opacity:0;-webkit-animation:styles__glitcherFade___2mhWL-camelCase 6s linear;animation:styles__glitcherFade___2mhWL-camelCase 6s linear}.styles__glitcherText___bMwqt-camelCase{margin:auto 10px;font-size:2.5vw;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__glitcherBlook___1Cb0z-camelCase{height:4.5vw;width:3.915vw;margin:auto 10px auto 0}.styles__glitcherBlook___1Cb0z-camelCase,.styles__mGlitcherContainer___2WSQA-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mGlitcherContainer___2WSQA-camelCase{height:15vw;max-width:calc(100vw - 20px);position:absolute;top:65px;right:10px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;outline:none;cursor:pointer;display:flex;flex-direction:row;align-items:center;opacity:0;-webkit-animation:styles__glitcherFade___2mhWL-camelCase 6s linear;animation:styles__glitcherFade___2mhWL-camelCase 6s linear}@-webkit-keyframes styles__glitcherFade___2mhWL-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@keyframes styles__glitcherFade___2mhWL-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}.styles__mGlitcherText___2BlJI-camelCase{margin:auto 10px;font-size:5.5vw;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__mGlitcherBlook___3SZij-camelCase{height:12.5vw;width:10.87vw;margin:auto 10px auto 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__blookChoiceInfo___TCynK-camelCase{margin-bottom:0;font-weight:700}.styles__blookChoiceInfo___TCynK-camelCase,.styles__blookChoiceName___2wjIW-camelCase{font-size:1.5vw;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__blookChoiceName___2wjIW-camelCase{margin-bottom:12px}.styles__skipButton___3Ppa_-camelCase{font-size:4vh;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700;width:15vw;height:7vh;line-height:7vh;margin:0 auto 5vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__skipButton___3Ppa_-camelCase:hover{transform:scale(1.05)}.styles__classHelperText___ZbKSx-camelCase{margin:0 auto 3.5vh;padding:0 5px;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-size:2.2vh}.styles__bottomRight___2_4yh-camelCase{width:50vw;height:calc(100vh - 135px);position:absolute;top:80px;left:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__nothingText___3OTB2-camelCase{font-size:32px;color:#3a3a3a;text-align:center;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif}.styles__factories___2hwWi-camelCase{width:calc(48vw - 17px);height:calc(28.4vh + 18.4vw);display:flex;flex-flow:row wrap;align-content:flex-start}.styles__factory___2kl0w-camelCase,.styles__factoryButton___2w-rx-camelCase{display:flex;flex-direction:column;width:7.6vw;margin:2vh calc(1vw - 1.7px);position:relative;outline:none}.styles__factoryButton___2w-rx-camelCase{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:1;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__factoryButton___2w-rx-camelCase:focus,.styles__factoryButton___2w-rx-camelCase:hover{opacity:.5}.styles__blookHolder___3T71c-camelCase{background-color:#fff;width:7.6vw;height:8.74vw;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px}.styles__factoryBlook___3fhQZ-camelCase{width:75%;height:75%;margin-left:12.5%;margin-top:2.5%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__factoryFloat___1MNST-camelCase{font-size:1.6vw;text-align:center;font-family:Nunito,sans-serif;font-weight:700;width:100%;height:5vh;opacity:0;position:absolute;color:#fff;text-shadow:2px 2px 8px grey;-webkit-animation:styles__float___2n0Jn-camelCase .5s linear;animation:styles__float___2n0Jn-camelCase .5s linear}@-webkit-keyframes styles__float___2n0Jn-camelCase{0%{transform:translateY(7vw);opacity:0}10%{opacity:1}70%{opacity:1}to{transform:translateY(0);opacity:0}}@keyframes styles__float___2n0Jn-camelCase{0%{transform:translateY(7vw);opacity:0}10%{opacity:1}70%{opacity:1}to{transform:translateY(0);opacity:0}}.styles__factoryBarHolder___F_Zvd-camelCase{width:85%;height:10%;margin-top:5%;margin-left:7.5%;background-color:#dfdfdf;border-radius:6px;overflow:hidden}.styles__factoryBar___dHE0M-camelCase{height:100%;width:100%;border-top-right-radius:6px;border-bottom-right-radius:6px;-webkit-animation-name:styles__grow___1J9hI-camelCase;animation-name:styles__grow___1J9hI-camelCase;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes styles__grow___1J9hI-camelCase{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes styles__grow___1J9hI-camelCase{0%{transform:translateX(-100%)}to{transform:translateX(0)}}.styles__blookBonus___1BybX-camelCase{font-size:1.6vh;position:absolute;right:-1vw;top:-.625vw;width:2vw;height:1.25vw;line-height:1.25vw;border-radius:4px}.styles__blookBonus___1BybX-camelCase,.styles__blookDesc___35S7k-camelCase{color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__blookDesc___35S7k-camelCase{font-size:2vh;width:100%;height:4vh;line-height:4vh;margin-top:1.2vh;border-radius:6px}.styles__factoryButtonContainer___ptsOf-camelCase{display:flex;flex-direction:row;width:100%;height:4vh;margin-top:1vh}.styles__tooltip___FOSSI-camelCase{font-family:Nunito,sans-serif;font-size:15px;padding:6px 13px;text-align:center}.styles__factoryUpgrade___Jyl9m-camelCase{width:65%;height:4vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__factoryUpgrade___Jyl9m-camelCase:hover{transform:scale(1.05)}.styles__factoryUpgradeMax___1foAV-camelCase{width:65%;height:4vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#9a49aa}.styles__upgradeIcon___cDo7K-camelCase{font-size:2.4vh;text-align:right;margin:0 3px 0 auto;line-height:4vh}.styles__upgradeIcon___cDo7K-camelCase,.styles__upgradeText___3Q0so-camelCase{font-weight:700;transition:.2s}.styles__upgradeText___3Q0so-camelCase{font-size:2.2vh;text-align:left;margin:.15vh auto 0 3px;line-height:3.85vh}.styles__factoryClass___29TXR-camelCase,.styles__upgradeText___3Q0so-camelCase{font-family:Nunito,sans-serif}.styles__factoryClass___29TXR-camelCase{font-size:2vh;color:#3a3a3a;text-align:center;width:30%;margin-left:5%;height:4vh;line-height:4vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mProgressHolder___1tBGg-camelCase{width:100%;background-color:#fff;left:0;z-index:2;display:flex;flex-direction:row;box-shadow:0 6px 8px rgba(0,0,0,.2)}.styles__mDeleteText___1tzWa-camelCase,.styles__mProgressHolder___1tBGg-camelCase{height:55px;position:absolute;top:0}.styles__mDeleteText___1tzWa-camelCase{font-size:32px;width:90%;line-height:55px;color:#3a3a3a;text-align:center;font-weight:700;left:5%;font-family:Nunito,sans-serif}.styles__mProgressContainer___WWM6--camelCase{width:60%;height:22.5px;background-color:#dfdfdf;position:absolute;top:17.5px;left:10%;overflow:hidden;border-radius:7px}.styles__mProgressBar___3GP3u-camelCase{width:100%;height:100%;top:0;left:0;transition:all .5s linear}.styles__mProgressBar___3GP3u-camelCase,.styles__mProgressBox___3jAGR-camelCase{background-color:#0bc2cf;position:absolute}.styles__mProgressBox___3jAGR-camelCase{height:35px;width:35px;top:10px;left:80%;border-radius:5px}.styles__mProgressText___3TXxY-camelCase{font-size:27px;color:#fff;text-align:center;line-height:33px;width:35px;font-family:Titan One,sans-serif}.styles__mQuestion___1c5_a-camelCase{width:100%;height:calc(100% - 55px);background-color:#fff;position:absolute;top:55px;left:0;z-index:1;display:flex;flex-direction:column;box-shadow:6px 0 8px rgba(0,0,0,.2)}.styles__mQuestionContainer___3Bh6f-camelCase{opacity:1}.styles__mQuestionContainer___3Bh6f-camelCase,.styles__mQuestionContainerFaded___3LjCP-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column;transition:opacity .2s linear}.styles__mQuestionContainerFaded___3LjCP-camelCase{opacity:0}.styles__mFeedbackContainer___3glM4-camelCase{opacity:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mFeedbackContainer___3glM4-camelCase,.styles__mFeedbackContainerFaded___1lcCX-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column;outline:none;transition:opacity .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mFeedbackContainerFaded___1lcCX-camelCase{opacity:0}.styles__mChoiceContainer___cb8bs-camelCase{width:94vw;max-height:90%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;opacity:1;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__choices___1BcXt-camelCase .3s linear;animation:styles__choices___1BcXt-camelCase .3s linear}@keyframes styles__choices___1BcXt-camelCase{0%{opacity:0}40%{opacity:0}50%{transform:scale(1) translate(-50%,-50%)}70%{transform:scale(1.05) translate(-50%,-50%)}80%{transform:scale(1.025) translate(-50%,-50%)}90%{transform:scale(1) translate(-50%,-50%)}to{opacity:1}}.styles__mChoiceText___8CQPh-camelCase{font-size:42px;color:#3a3a3a;text-align:center;font-family:Titan One,sans-serif;margin:3vh 2vw 1vh}.styles__mBlookChoices___2MRoN-camelCase{width:86vw;display:flex;flex-direction:row;justify-content:space-around;align-content:center;margin:3vh auto 4vh}.styles__mBlookChoice___2n75a-camelCase{width:25vw;display:flex;flex-direction:column;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);transition:all .2s cubic-bezier(.39,.5,.15,1.36);cursor:pointer;outline:none}.styles__mBlookChoice___2n75a-camelCase,.styles__mBlookChoiceImage___3uFt4-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mBlookChoiceImage___3uFt4-camelCase{width:17vw;height:19.55vw;margin:2vh 4.5vw}.styles__mBlookChoiceInfo___2e4Nq-camelCase{margin-bottom:0;font-weight:700}.styles__mBlookChoiceInfo___2e4Nq-camelCase,.styles__mBlookChoiceName___1T3MH-camelCase{font-size:4vw;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__mBlookChoiceName___1T3MH-camelCase{margin-bottom:12px}.styles__mSkipButton___1SxVU-camelCase{font-size:30px;font-weight:700;width:40vw;height:45px;line-height:45px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mClassHelperText___2ZKF7-camelCase,.styles__mSkipButton___1SxVU-camelCase{color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;margin:0 auto 3vh}.styles__mClassHelperText___2ZKF7-camelCase{padding:0 5px;font-size:12px}.styles__mNoQ___H9s_b-camelCase{width:100vw;height:calc(100% - 115px);position:absolute;top:55px;left:0;overflow-y:auto;-webkit-overflow-scrolling:touch;display:flex;flex-direction:column}.styles__mNothingText___2LVsb-camelCase{font-size:32px;width:90%;color:#3a3a3a;text-align:center;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif}.styles__mFactories___2rBzD-camelCase{width:96vw;padding:4vh 0;margin:0 2vw;display:flex;flex-flow:row wrap;align-content:flex-start;justify-content:center}.styles__mNextQuestion___3G4z5-camelCase{font-size:30px;color:#fff;text-align:center;font-family:Nunito,sans-serif;font-weight:700;position:absolute;left:0;top:calc(100% - 60px);width:100vw;height:60px;line-height:60px;background-color:#0bc2cf;box-shadow:0 -6px 8px rgba(0,0,0,.2);outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mFactory___ILBaH-camelCase{margin:2vh 3vw}.styles__mFactory___ILBaH-camelCase,.styles__mFactoryButton___3zOk8-camelCase{display:flex;flex-direction:column;width:26vw;position:relative;outline:none}.styles__mFactoryButton___3zOk8-camelCase{margin:1.5vh 3vw;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mBlookHolder___1RVdK-camelCase{background-color:#fff;width:26vw;height:29.9vw;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px}.styles__mFactoryFloat___3wAOP-camelCase{font-size:3vh;text-align:center;font-family:Nunito,sans-serif;font-weight:700;width:100%;height:5vh;opacity:0;position:absolute;color:#fff;text-shadow:2px 2px 8px grey;-webkit-animation:styles__mFloat___h64-T-camelCase .5s linear;animation:styles__mFloat___h64-T-camelCase .5s linear}@-webkit-keyframes styles__mFloat___h64-T-camelCase{0%{transform:translateY(25vw);opacity:0}10%{opacity:1}70%{opacity:1}to{transform:translateY(0);opacity:0}}@keyframes styles__mFloat___h64-T-camelCase{0%{transform:translateY(25vw);opacity:0}10%{opacity:1}70%{opacity:1}to{transform:translateY(0);opacity:0}}.styles__mBlookBonus___4tDPJ-camelCase{font-size:3.2vw;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700;position:absolute;right:-3vw;top:-2.5vw;width:8vw;height:5vw;line-height:5vw;border-radius:4px}.styles__mBlookBonus___4tDPJ-camelCase,.styles__mFactoryUpgrade___1WI8h-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__mFactoryUpgrade___1WI8h-camelCase{width:65%;height:4vh;border-radius:6px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__mUpgradeIcon___2ehzL-camelCase{font-size:2.2vh;text-align:right;margin:0 3px 0 auto;line-height:4vh}.styles__mUpgradeIcon___2ehzL-camelCase,.styles__mUpgradeText___3SsmY-camelCase{font-weight:700;transition:.2s}.styles__mUpgradeText___3SsmY-camelCase{font-size:2vh;text-align:left;font-family:Nunito,sans-serif;margin:.15vh auto 0 3px;line-height:3.85vh}.styles__minuteModal___1ovLC-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__popUp___2GHKF-camelCase 3s linear;animation:styles__popUp___2GHKF-camelCase 3s linear}@-webkit-keyframes styles__popUp___2GHKF-camelCase{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}@keyframes styles__popUp___2GHKF-camelCase{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.styles__modalContainer___1a_se-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;z-index:100;text-align:center}@media only screen and (max-width:800px){.styles__feedbackTextNext___bKfnr-camelCase{font-size:22px}}@media only screen and (max-width:600px){.styles__modalContainer___1a_se-camelCase{width:310px}}.styles__modalText___2UuNo-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__burger___1hH_A-camelCase{top:45%;font-size:37vh;color:#f60}.styles__burger___1hH_A-camelCase,.styles__burgerText___1x4kR-camelCase{position:absolute;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__burgerText___1x4kR-camelCase{font-family:Nunito,sans-serif;font-size:8vh;width:80%;font-weight:700;color:#fff;top:80%;text-align:center}", ""]), t.locals = {
                header: "styles__header___22WpZ-camelCase",
                expandIcon: "styles__expandIcon___2EBUo-camelCase",
                headerTextLeft: "styles__headerTextLeft___2sidO-camelCase",
                headerTextRight: "styles__headerTextRight___I3Smw-camelCase",
                left: "styles__left___1WYwh-camelCase",
                feedbackContainer: "styles__feedbackContainer___2EWRn-camelCase",
                feedbackContainerFaded: "styles__feedbackContainerFaded___MDyIL-camelCase",
                remindText: "styles__remindText___25J6V-camelCase",
                remindButton: "styles__remindButton___1gTTO-camelCase",
                feedbackText: "styles__feedbackText___XcGN4-camelCase",
                feedbackTextTwo: "styles__feedbackTextTwo___2BOS0-camelCase",
                fadeIn: "styles__fadeIn___1ZPJI-camelCase",
                feedbackTextThree: "styles__feedbackTextThree___LSO3o-camelCase",
                feedbackTextNext: "styles__feedbackTextNext___bKfnr-camelCase",
                questionContainer: "styles__questionContainer___KBSUf-camelCase",
                questionContainerFaded: "styles__questionContainerFaded___ZtN4k-camelCase",
                questionTextContainer: "styles__questionTextContainer___3mGZG-camelCase",
                questionText: "styles__questionText___2XG8r-camelCase",
                imageContainer: "styles__imageContainer___3K3fz-camelCase",
                image: "styles__image___3SQtz-camelCase",
                funcContainer: "styles__funcContainer___WUg0Q-camelCase",
                qMathField: "styles__qMathField___3EB9O-camelCase",
                mQMathField: "styles__mQMathField___3OtPl-camelCase",
                answersHolder: "styles__answersHolder___340cg-camelCase",
                answerWrapper: "styles__answerWrapper___1d4VO-camelCase",
                answerContainer: "styles__answerContainer____unYj-camelCase",
                answerText: "styles__answerText___SyUG8-camelCase",
                mAnswerContainer: "styles__mAnswerContainer___26I4m-camelCase",
                answerImgContainer: "styles__answerImgContainer___3Uo5_-camelCase",
                answerImg: "styles__answerImg___3TAtC-camelCase",
                mathField: "styles__mathField___33vGq-camelCase",
                right: "styles__right___1nFpe-camelCase",
                topRight: "styles__topRight___UJSoC-camelCase",
                progressContainer: "styles__progressContainer___f0Lnj-camelCase",
                progressBar: "styles__progressBar___T6L_F-camelCase",
                progressBox: "styles__progressBox___7swZF-camelCase",
                progressText: "styles__progressText___2aMw5-camelCase",
                choiceContainer: "styles__choiceContainer___3qFK7-camelCase",
                choices: "styles__choices___1BcXt-camelCase",
                choiceText: "styles__choiceText___22GBO-camelCase",
                blookChoices: "styles__blookChoices____ksoH-camelCase",
                blookChoice: "styles__blookChoice___1kAAj-camelCase",
                blookChoiceImage: "styles__blookChoiceImage___wpfo3-camelCase",
                glitchIcon: "styles__glitchIcon___2P05P-camelCase",
                mGlitchIcon: "styles__mGlitchIcon___34IgZ-camelCase",
                glitcherContainer: "styles__glitcherContainer___PT0mq-camelCase",
                glitcherFade: "styles__glitcherFade___2mhWL-camelCase",
                glitcherText: "styles__glitcherText___bMwqt-camelCase",
                glitcherBlook: "styles__glitcherBlook___1Cb0z-camelCase",
                mGlitcherContainer: "styles__mGlitcherContainer___2WSQA-camelCase",
                mGlitcherText: "styles__mGlitcherText___2BlJI-camelCase",
                mGlitcherBlook: "styles__mGlitcherBlook___3SZij-camelCase",
                blookChoiceInfo: "styles__blookChoiceInfo___TCynK-camelCase",
                blookChoiceName: "styles__blookChoiceName___2wjIW-camelCase",
                skipButton: "styles__skipButton___3Ppa_-camelCase",
                classHelperText: "styles__classHelperText___ZbKSx-camelCase",
                bottomRight: "styles__bottomRight___2_4yh-camelCase",
                nothingText: "styles__nothingText___3OTB2-camelCase",
                factories: "styles__factories___2hwWi-camelCase",
                factory: "styles__factory___2kl0w-camelCase",
                factoryButton: "styles__factoryButton___2w-rx-camelCase",
                blookHolder: "styles__blookHolder___3T71c-camelCase",
                factoryBlook: "styles__factoryBlook___3fhQZ-camelCase",
                factoryFloat: "styles__factoryFloat___1MNST-camelCase",
                float: "styles__float___2n0Jn-camelCase",
                factoryBarHolder: "styles__factoryBarHolder___F_Zvd-camelCase",
                factoryBar: "styles__factoryBar___dHE0M-camelCase",
                grow: "styles__grow___1J9hI-camelCase",
                blookBonus: "styles__blookBonus___1BybX-camelCase",
                blookDesc: "styles__blookDesc___35S7k-camelCase",
                factoryButtonContainer: "styles__factoryButtonContainer___ptsOf-camelCase",
                tooltip: "styles__tooltip___FOSSI-camelCase",
                factoryUpgrade: "styles__factoryUpgrade___Jyl9m-camelCase",
                factoryUpgradeMax: "styles__factoryUpgradeMax___1foAV-camelCase",
                upgradeIcon: "styles__upgradeIcon___cDo7K-camelCase",
                upgradeText: "styles__upgradeText___3Q0so-camelCase",
                factoryClass: "styles__factoryClass___29TXR-camelCase",
                mProgressHolder: "styles__mProgressHolder___1tBGg-camelCase",
                mDeleteText: "styles__mDeleteText___1tzWa-camelCase",
                mProgressContainer: "styles__mProgressContainer___WWM6--camelCase",
                mProgressBar: "styles__mProgressBar___3GP3u-camelCase",
                mProgressBox: "styles__mProgressBox___3jAGR-camelCase",
                mProgressText: "styles__mProgressText___3TXxY-camelCase",
                mQuestion: "styles__mQuestion___1c5_a-camelCase",
                mQuestionContainer: "styles__mQuestionContainer___3Bh6f-camelCase",
                mQuestionContainerFaded: "styles__mQuestionContainerFaded___3LjCP-camelCase",
                mFeedbackContainer: "styles__mFeedbackContainer___3glM4-camelCase",
                mFeedbackContainerFaded: "styles__mFeedbackContainerFaded___1lcCX-camelCase",
                mChoiceContainer: "styles__mChoiceContainer___cb8bs-camelCase",
                mChoiceText: "styles__mChoiceText___8CQPh-camelCase",
                mBlookChoices: "styles__mBlookChoices___2MRoN-camelCase",
                mBlookChoice: "styles__mBlookChoice___2n75a-camelCase",
                mBlookChoiceImage: "styles__mBlookChoiceImage___3uFt4-camelCase",
                mBlookChoiceInfo: "styles__mBlookChoiceInfo___2e4Nq-camelCase",
                mBlookChoiceName: "styles__mBlookChoiceName___1T3MH-camelCase",
                mSkipButton: "styles__mSkipButton___1SxVU-camelCase",
                mClassHelperText: "styles__mClassHelperText___2ZKF7-camelCase",
                mNoQ: "styles__mNoQ___H9s_b-camelCase",
                mNothingText: "styles__mNothingText___2LVsb-camelCase",
                mFactories: "styles__mFactories___2rBzD-camelCase",
                mNextQuestion: "styles__mNextQuestion___3G4z5-camelCase",
                mFactory: "styles__mFactory___ILBaH-camelCase",
                mFactoryButton: "styles__mFactoryButton___3zOk8-camelCase",
                mBlookHolder: "styles__mBlookHolder___1RVdK-camelCase",
                mFactoryFloat: "styles__mFactoryFloat___3wAOP-camelCase",
                mFloat: "styles__mFloat___h64-T-camelCase",
                mBlookBonus: "styles__mBlookBonus___4tDPJ-camelCase",
                mFactoryUpgrade: "styles__mFactoryUpgrade___1WI8h-camelCase",
                mUpgradeIcon: "styles__mUpgradeIcon___2ehzL-camelCase",
                mUpgradeText: "styles__mUpgradeText___3SsmY-camelCase",
                minuteModal: "styles__minuteModal___1ovLC-camelCase",
                popUp: "styles__popUp___2GHKF-camelCase",
                modalContainer: "styles__modalContainer___1a_se-camelCase",
                modalText: "styles__modalText___2UuNo-camelCase",
                burger: "styles__burger___1hH_A-camelCase",
                burgerText: "styles__burgerText___1x4kR-camelCase"
            }
        },
        "oK/k": function(e, t, a) {
            var o = a("iErj");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var s = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(o, s);
            o.locals && (e.exports = o.locals)
        },
        t7f9: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___q5KeF-camelCase{font-size:8vw;width:80%;margin:0 5%;text-align:left;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___xYOsb-camelCase{width:80%;margin:40px 5% 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___3LSjA-camelCase{font-size:3vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___3LSjA-camelCase:hover{transform:scale(1.05)}.styles__factoriesContainer___1UchH-camelCase{display:flex;flex-flow:row wrap;width:30vw;position:absolute;transform:scale(1.2) rotate(10deg) translate(-50%,-50%);top:62.5%;left:70%}.styles__factory___2O-0p-camelCase{margin:1.2vw}.styles__factory___2O-0p-camelCase,.styles__factoryButton___1SfYq-camelCase{display:flex;flex-direction:column;width:7.6vw}.styles__factoryButton___1SfYq-camelCase{margin:2vh calc(1vw - 1.7px);position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__blookHolder___iScFr-camelCase{background-color:#fff;width:7.6vw;height:8.74vw;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px}.styles__factoryBlook___1lcBP-camelCase{width:75%;height:75%;margin-left:12.5%;margin-top:2.5%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__factoryBarHolder___30tr4-camelCase{width:85%;height:10%;margin-top:5%;margin-left:7.5%;background-color:#dfdfdf;border-radius:6px;overflow:hidden}.styles__factoryBar___3iZZL-camelCase{height:100%;width:100%;border-top-right-radius:6px;border-bottom-right-radius:6px}.styles__blookDesc___1lgC9-camelCase{font-size:2vh;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif;font-weight:700;width:100%;height:4vh;line-height:4vh;margin-top:1.2vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__factoryButtonContainer___HCh2c-camelCase{width:100%;margin-top:1vh}.styles__factoryButtonContainer___HCh2c-camelCase,.styles__factoryUpgrade___SknaE-camelCase{display:flex;flex-direction:row;height:4vh}.styles__factoryUpgrade___SknaE-camelCase{width:65%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none;justify-content:center;align-items:center}.styles__upgradeIcon___2tk6A-camelCase{font-size:2.4vh;text-align:right;margin:0 3px 0 auto;line-height:4vh}.styles__upgradeIcon___2tk6A-camelCase,.styles__upgradeText___pWX9y-camelCase{font-weight:700;transition:.2s}.styles__upgradeText___pWX9y-camelCase{font-size:2.2vh;text-align:left;margin:.15vh auto 0 3px;line-height:3.85vh}.styles__factoryClass___h8f6P-camelCase,.styles__upgradeText___pWX9y-camelCase{font-family:Nunito,sans-serif}.styles__factoryClass___h8f6P-camelCase{font-size:2vh;color:#3a3a3a;text-align:center;width:30%;margin-left:5%;height:4vh;line-height:4vh;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (max-width:800px){.styles__header___q5KeF-camelCase{font-size:20vw}.styles__button___3LSjA-camelCase{font-size:10vw}.styles__factoriesContainer___1UchH-camelCase{display:none;opacity:0}}", ""]), t.locals = {
                header: "styles__header___q5KeF-camelCase",
                buttonContainer: "styles__buttonContainer___xYOsb-camelCase",
                button: "styles__button___3LSjA-camelCase",
                factoriesContainer: "styles__factoriesContainer___1UchH-camelCase",
                factory: "styles__factory___2O-0p-camelCase",
                factoryButton: "styles__factoryButton___1SfYq-camelCase",
                blookHolder: "styles__blookHolder___iScFr-camelCase",
                factoryBlook: "styles__factoryBlook___1lcBP-camelCase",
                factoryBarHolder: "styles__factoryBarHolder___30tr4-camelCase",
                factoryBar: "styles__factoryBar___3iZZL-camelCase",
                blookDesc: "styles__blookDesc___1lgC9-camelCase",
                factoryButtonContainer: "styles__factoryButtonContainer___HCh2c-camelCase",
                factoryUpgrade: "styles__factoryUpgrade___SknaE-camelCase",
                upgradeIcon: "styles__upgradeIcon___2tk6A-camelCase",
                upgradeText: "styles__upgradeText___pWX9y-camelCase",
                factoryClass: "styles__factoryClass___h8f6P-camelCase"
            }
        },
        "tCm/": function(e, t, a) {
            var o = a("IOGW");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var s = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(o, s);
            o.locals && (e.exports = o.locals)
        },
        y5cn: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return o
            })), a.d(t, "a", (function() {
                return s
            }));
            var o = "FACTORY_RESULTS",
                s = "FACTORY_DISCONNECT"
        }
    }
]);