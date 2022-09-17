(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        "+Oo3": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                h = r.n(f),
                p = r("E7S3");

            function d(e, t, r, n, o, a) {
                return {
                    type: p.a,
                    towerId: e,
                    resultId: t,
                    questions: r,
                    mapNodes: n,
                    setId: o,
                    hwId: a
                }
            }

            function m(e, t, r, n, o, a) {
                return {
                    type: p.b,
                    saveData: e,
                    towerId: t,
                    resultId: r,
                    questions: n,
                    setId: o,
                    hwId: a
                }
            }
            var y = r("ZTK6"),
                _ = r("+trR"),
                w = r("L1pz"),
                v = r("zUlG"),
                g = r("Xst1"),
                b = r.n(g),
                x = r("ntfh"),
                C = r.n(x),
                k = r("Rnav"),
                T = r("XTAU"),
                E = r("E8Bj"),
                S = r("ca/f"),
                O = r("2ZNs"),
                N = r("dLfW"),
                j = r("lWrb"),
                L = r("gvfT"),
                I = r("H0Bl"),
                P = r("qnYv");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function B(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(r), !0).forEach((function(t) {
                        q(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function q(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == R(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function M(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function G(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            M(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            M(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function z(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function F(e) {
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
                    var r, n = J(e);
                    if (t) {
                        var o = J(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return W(this, r)
                }
            }

            function W(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Y(e)
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q = function(e) {
                    switch (e) {
                        case "small":
                            return "fas fa-robot";
                        case "big":
                            return "fas fa-skull";
                        case "shop":
                            return "fas fa-store";
                        case "rest":
                            return "fas fa-bed";
                        case "risk":
                            return "fas fa-question";
                        case "boss":
                            return "fas fa-exclamation-triangle";
                        default:
                            return "fas fa-map"
                    }
                },
                U = function(e) {
                    return o.a.createElement("div", {
                        className: C.a.stageText
                    }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
                },
                K = function(e) {
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
                    }(f, e);
                    var t, r, n, a, s, i, c = F(f);

                    function f(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, f), (t = c.call(this, e)).state = {
                            questions: [],
                            ready: !1,
                            isSave: !1,
                            warn: !1,
                            loggedIn: !1,
                            savesPhase: !1,
                            savesArray: [],
                            loading: !1,
                            replaceIndex: 0,
                            name: "",
                            nameUsed: "",
                            numCorrect: 0,
                            numQuestions: 0,
                            stagesCleared: 0,
                            message: "",
                            showFinal: !1,
                            standings: [],
                            noId: !1,
                            noIdPopUp: !1,
                            noQuestions: !1
                        }, t.redirect = !1, t.name = "", t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(Y(t)), t.newGame = t.newGame.bind(Y(t)), t.endGame = t.endGame.bind(Y(t)), t
                    }
                    return t = f, (r = [{
                        key: "componentDidMount",
                        value: (i = G(D().mark((function e() {
                            var t, r = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.props.deleteTower(), e.next = 3, this.props.user.getData();
                                    case 3:
                                        (t = e.sent) ? (this.name = t.name, this.setState({
                                            loggedIn: !0
                                        }), P.a.get("/api/towers/byuser").then((function(e) {
                                            r.here && r.setState({
                                                isSave: e.data.success && !(r.props.client && r.props.client.hwId && r.props.client.questions),
                                                savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                            }, (function() {
                                                r.working = !1
                                            }))
                                        })).catch((function(e) {
                                            console.error(e)
                                        }))) : this.setState({
                                            notLoggedIn: !0
                                        }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                                            questions: this.props.client.questions,
                                            ready: !0
                                        })) : this.props.id ? P.a.get("/api/games", {
                                            params: {
                                                gameId: this.props.id
                                            }
                                        }).then((function(e) {
                                            r.here && r.setState({
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
                                        })) : this.setState({
                                            noId: !0,
                                            ready: !0
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "loadGame",
                        value: (s = G(D().mark((function e(t) {
                            var r, n, o, a = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, r = this.state.savesArray[t], n = [], o = !1, !r.setId) {
                                            e.next = 15;
                                            break
                                        }
                                        if (!this.state.noId) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 10, new Promise((function(e) {
                                            P.a.get("/api/games", {
                                                params: {
                                                    gameId: r.setId
                                                }
                                            }).then((function(t) {
                                                t.data ? n = t.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        image: e.image ? e.image.url : null,
                                                        audio: e.audio ? e.audio.url : null
                                                    }
                                                })) : o = !0, e()
                                            })).catch((function(t) {
                                                o = !0, console.error(t), e()
                                            }))
                                        }));
                                    case 10:
                                        e.next = 13;
                                        break;
                                    case 12:
                                        n = this.state.questions;
                                    case 13:
                                        e.next = 17;
                                        break;
                                    case 15:
                                        return e.next = 17, new Promise((function(e) {
                                            P.a.get("/api/homeworks/byid", {
                                                params: {
                                                    id: r.hwId
                                                }
                                            }).then((function(t) {
                                                t.data ? n = t.data.questions : a.state.noId ? o = !0 : n = a.state.questions, e()
                                            })).catch((function(t) {
                                                a.state.noId ? o = !0 : n = a.state.questions, console.error(t), e()
                                            }))
                                        }));
                                    case 17:
                                        if (!o) {
                                            e.next = 21;
                                            break
                                        }
                                        return this.setState({
                                            noIdPopUp: !0,
                                            noQuestions: !0
                                        }), this.working = !1, e.abrupt("return");
                                    case 21:
                                        r.hwName && (this.props.addClientName(r.hwName), this.props.addHwClient(r.hwId, "Tower", 0, r.hwPlus)), this.props.loadTower(r, r._id, r.resultId, n, r.setId, r.hwId), ["small", "big", "boss"].includes(r.stage) ? this.props.history.push("/tower/battle") : "victory" === r.stage ? (this.props.setTowerStage("final"), this.props.history.push("/tower/final")) : this.props.history.push("/tower/".concat(r.stage));
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "newGame",
                        value: (a = G(D().mark((function e(t) {
                            var r, n, o, a = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, r = Object(I.a)(), n = "", !this.props.client || !this.props.client.hwId) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, new Promise((function(e, t) {
                                            P.a.post("/api/results", {
                                                hwId: a.props.client.hwId,
                                                name: a.props.client.name,
                                                data: {
                                                    corrects: {},
                                                    incorrects: {},
                                                    stage: 0,
                                                    alive: !0
                                                }
                                            }).then((function(t) {
                                                n = t.data._id, e()
                                            })).catch((function(e) {
                                                console.error(e), t()
                                            }))
                                        }));
                                    case 8:
                                        if (o = {}, !this.name) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, new Promise((function(e, o) {
                                            P.a.post("/api/towers", {
                                                setId: a.props.id,
                                                name: a.name,
                                                mapNodes: r,
                                                hwId: a.props.client && a.props.client.hwId ? a.props.client.hwId : null,
                                                hwName: a.props.client && a.props.client.name ? a.props.client.name : null,
                                                hwPlus: !(!a.props.client || !a.props.client.plus) && a.props.client.plus,
                                                saveIndex: t,
                                                resultId: n
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function(e) {
                                                console.error(e), o()
                                            }))
                                        }));
                                    case 12:
                                        o = e.sent;
                                    case 13:
                                        this.props.createTower(o.newSaveId, n, this.state.questions, r, this.props.id, this.props.client && this.props.client.hwId ? this.props.client.hwId : null), o.oldSave && o.oldSave.stage ? this.endGame(o.oldSave) : this.props.history.push("/tower/start");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "endGame",
                        value: function(e) {
                            var t = this;
                            P.a.put("/api/users/plan").then((function(e) {
                                t.here && t.setState({
                                    showFinal: !0,
                                    plus: "Starter" !== e.data.plan
                                })
                            })).catch((function(e) {
                                console.error(e)
                            }));
                            var r = e.hwName || "You",
                                n = 0,
                                o = 0;
                            Object.values(e.corrects).forEach((function(e) {
                                n += e, o += e
                            })), Object.values(e.incorrects).forEach((function(e) {
                                o += e
                            }));
                            var a = Math.max(e.numNodes, 0),
                                s = 34 - a,
                                i = "Chick",
                                c = 0;
                            e.cards.forEach((function(e) {
                                var t = e.strength + e.charisma + e.wisdom;
                                t > c && (c = t, i = e.blook)
                            })), P.a.put("/api/users/towerstats", {
                                name: this.name,
                                place: s,
                                stagesCleared: a,
                                blookUsed: i,
                                nameUsed: r,
                                correctAnswers: n
                            }).catch((function(e) {
                                console.error(e)
                            })), this.setState({
                                warn: !1,
                                name: this.name,
                                nameUsed: r,
                                numCorrect: n,
                                numQuestions: o,
                                stagesCleared: a,
                                message: Object(N.a)((s - 1) / 33),
                                showFinal: !this.name || this.state.showFinal,
                                standings: [{
                                    name: r,
                                    blook: i,
                                    place: s,
                                    stagesCleared: a
                                }]
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? o.a.createElement(l.a, {
                                to: "/login"
                            }) : o.a.createElement("div", {
                                className: u.isMobile ? b.a.mBody : b.a.body,
                                style: {
                                    backgroundColor: "#292929"
                                }
                            }, o.a.createElement(T.a, {
                                title: "Load Tower of Doom | Blooket",
                                desc: "Start a new game or load a saved game of Blooket's Tower of Doom."
                            }), o.a.createElement(k.a, {
                                noRight: !0
                            }), this.state.savesPhase ? o.a.createElement("div", {
                                className: b.a.regularBody
                            }, o.a.createElement("div", {
                                className: C.a.backButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !1,
                                        loading: !1
                                    })
                                }
                            }, "Back"), o.a.createElement("div", {
                                className: C.a.savesHeader
                            }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), o.a.createElement("div", {
                                className: C.a.savesHolder
                            }, this.state.savesArray.map((function(t, r) {
                                return t ? o.a.createElement("div", {
                                    className: C.a.saveContainer,
                                    key: t._id
                                }, o.a.createElement("div", {
                                    className: C.a.saveTitle
                                }, "Stage ".concat(t.nodePath.length)), o.a.createElement("div", {
                                    className: C.a.saveSubTitle
                                }, "Level ".concat(t.level)), o.a.createElement("div", {
                                    className: C.a.saveRow
                                }, t.coins, o.a.createElement("i", {
                                    className: h()(C.a.saveIcon, "fas fa-coins")
                                })), o.a.createElement("div", {
                                    className: C.a.saveRow
                                }, t.stage.charAt(0).toUpperCase() + t.stage.slice(1), o.a.createElement("i", {
                                    className: h()(C.a.saveIcon, Q(t.stage))
                                })), o.a.createElement("div", {
                                    className: C.a.saveRow
                                }, t.hwName || "Not Homework", o.a.createElement("i", {
                                    className: h()(C.a.saveIcon, "fas fa-file-alt")
                                })), o.a.createElement("div", {
                                    className: C.a.saveRow
                                }, o.a.createElement("div", {
                                    className: C.a.saveHealthHolder
                                }, o.a.createElement("div", {
                                    className: C.a.saveHealthBar,
                                    style: {
                                        transform: "scaleX(".concat(t.life / 100, ")")
                                    }
                                })), o.a.createElement("i", {
                                    className: h()(C.a.saveIcon, "fas fa-heart")
                                })), o.a.createElement("div", {
                                    className: C.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.loading ? function() {
                                        return e.loadGame(r)
                                    } : e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.setState({
                                            warn: !0,
                                            replaceIndex: r
                                        })
                                    }
                                }, e.state.loading ? "Load Game" : "Replace Game")) : o.a.createElement("div", {
                                    className: C.a.saveContainer,
                                    key: r
                                }, o.a.createElement("div", {
                                    className: C.a.emptySave
                                }, "Empty"), e.state.loading ? null : o.a.createElement("div", {
                                    className: C.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.newGame(r)
                                    }
                                }, "New Game"))
                            })))) : o.a.createElement("div", {
                                className: b.a.regularBody,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    overflow: "hidden"
                                }
                            }, o.a.createElement("div", {
                                className: C.a.header
                            }, "Tower", o.a.createElement("br", null), "of Doom"), o.a.createElement("div", {
                                className: C.a.buttonContainer
                            }, this.state.isSave ? o.a.createElement("div", {
                                className: C.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !0
                                    })
                                }
                            }, "Load Game") : null, o.a.createElement("div", {
                                className: C.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.loggedIn ? function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !1
                                    })
                                } : this.newGame
                            }, "New Game")), o.a.createElement("div", {
                                className: h()(C.a.cardContainer, C.a.card1)
                            }, o.a.createElement(j.a, {
                                card: A({
                                    blook: "Chicken"
                                }, L.c.Chicken),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: h()(C.a.cardContainer, C.a.card2)
                            }, o.a.createElement(j.a, {
                                card: A({
                                    blook: "Goldfish"
                                }, L.c.Goldfish),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: h()(C.a.cardContainer, C.a.card3)
                            }, o.a.createElement(j.a, {
                                card: A({
                                    blook: "Wizard"
                                }, L.c.Wizard),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: h()(C.a.cardContainer, C.a.card4)
                            }, o.a.createElement(j.a, {
                                card: A({
                                    blook: "Tiger"
                                }, L.c.Tiger),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: h()(C.a.cardContainer, C.a.card5)
                            }, o.a.createElement(j.a, {
                                card: A({
                                    blook: "Arctic Fox"
                                }, L.c["Arctic Fox"]),
                                flipped: !1
                            })), this.state.loggedIn ? o.a.createElement("div", {
                                className: C.a.loginText
                            }, "Your progress will automatically be saved") : o.a.createElement("div", {
                                className: C.a.loginText
                            }, o.a.createElement("a", {
                                href: "https://www.blooket.com/login",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#fff"
                                }
                            }, "Login"), " to save your progress")), this.state.warn ? o.a.createElement(S.a, {
                                text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                                isDark: !0,
                                buttonOne: {
                                    text: "Continue",
                                    click: function() {
                                        return e.newGame(e.state.replaceIndex)
                                    },
                                    color: "black"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            warn: !1
                                        })
                                    },
                                    color: "black"
                                }
                            }) : this.state.noIdPopUp ? o.a.createElement(S.a, {
                                text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                                isDark: !0,
                                buttonOne: {
                                    text: "Find A Set",
                                    click: function() {
                                        return e.props.history.push("/discover")
                                    },
                                    color: "black"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            noIdPopUp: !1,
                                            noQuestions: !1
                                        })
                                    },
                                    color: "black"
                                }
                            }) : null, this.state.showFinal ? o.a.createElement("div", {
                                className: b.a.modal
                            }, o.a.createElement(O.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
                                saveStats: this.saveStats,
                                renderStandingStat: U,
                                renderStats: function() {},
                                customMessage: this.state.message,
                                tokenMultiplier: .3,
                                buttonFunc: function() {
                                    return e.props.history.push("/tower/start")
                                },
                                noWait: !0
                            })) : null)
                        }
                    }]) && z(t.prototype, r), n && z(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), f
                }(o.a.Component);
            K.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                id: c.a.string,
                createTower: c.a.func.isRequired,
                loadTower: c.a.func.isRequired,
                deleteTower: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                addClientName: c.a.func.isRequired,
                addHwClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(E.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    createTower: d,
                    loadTower: m,
                    deleteTower: _.a,
                    setTowerStage: y.g,
                    addClientName: v.a,
                    addHwClient: w.b
                }, e)
            }))(K)))
        },
        "+trR": function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r("SEuU");

            function o() {
                return {
                    type: n.a
                }
            }
        },
        "/+s7": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".tourSteps__centered___3uhxe-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__card1___3KwCn-camelCase{left:calc(50% - 15vw)}.tourSteps__card1___3KwCn-camelCase,.tourSteps__card2___11s6f-camelCase{top:60%;transform:translateY(-50%)}.tourSteps__card2___11s6f-camelCase{left:calc(50% + 15vw)}@media only screen and (max-width:800px){.tourSteps__card1___3KwCn-camelCase,.tourSteps__card2___11s6f-camelCase{left:50%;top:calc(50% + 23vw);transform:translateX(-50%)}}", ""]), t.locals = {
                centered: "tourSteps__centered___3uhxe-camelCase",
                card1: "tourSteps__card1___3KwCn-camelCase",
                card2: "tourSteps__card2___11s6f-camelCase"
            }
        },
        "/DjJ": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__welcomeText___1i2Bw-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:7vw;position:absolute;width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___3oVMI-camelCase .3s;animation:styles__fadeIn___3oVMI-camelCase .3s}.styles__lifeContainer___fTvKq-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}.styles__deckButton___ESWlf-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___ESWlf-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___E5ZTN-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___E5ZTN-camelCase,.styles__deckText___21WeM-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___21WeM-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___SF9Tx-camelCase{position:absolute;top:0;left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap}.styles__cardContainer___2kcZn-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___1-CoQ-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.3s}.styles__closeIcon___1-CoQ-camelCase:focus,.styles__closeIcon___1-CoQ-camelCase:hover{transform:scale(1.05)}.styles__chooseText___2V1Yo-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:6vw;bottom:70%;text-align:center;-webkit-animation:styles__fadeIn___3oVMI-camelCase .3s;animation:styles__fadeIn___3oVMI-camelCase .3s}.styles__chooseText___2V1Yo-camelCase,.styles__restButtonContainer___29dDc-camelCase{position:absolute;width:80%;left:10%}.styles__restButtonContainer___29dDc-camelCase{flex-flow:row wrap;top:40%;opacity:0;-webkit-animation:styles__fadeIn___3oVMI-camelCase .3s linear .2s forwards;animation:styles__fadeIn___3oVMI-camelCase .3s linear .2s forwards}.styles__restButton___2YVaS-camelCase,.styles__restButtonContainer___29dDc-camelCase{display:flex;align-items:center;justify-content:center}.styles__restButton___2YVaS-camelCase{width:17.5vw;height:17.5vw;margin:2vw 4vw;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;flex-direction:column;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;font-size:3vw;transition:.2s}.styles__restButton___2YVaS-camelCase:hover{transform:scale(1.03)}.styles__buttonIcon___20ndZ-camelCase{font-size:6vw;margin-bottom:.75vw}.styles__upgradeDeckContainer___3PU7i-camelCase{position:absolute;top:calc(10% + 3vw);left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;z-index:3;display:flex;flex-flow:row wrap}.styles__upgradeCardContainer___17M8S-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;transition:.2s}.styles__upgradeCardContainer___17M8S-camelCase:hover{transform:scale(.75)}.styles__upgradeText___1a8br-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:5vw;position:absolute;width:80%;top:5%;left:10%;text-align:center;-webkit-animation:styles__fadeIn___3oVMI-camelCase .3s;animation:styles__fadeIn___3oVMI-camelCase .3s}.styles__lifeHealContainer___i6qZ2-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(1.5);top:calc(60% - 7.5vw);left:calc(50% - 7.5vw)}.styles__cardReveal___136vo-camelCase{width:25vw;height:32.5vw;position:absolute;top:calc(50% - 12vw);left:calc(50% - 12.5vw);-webkit-animation:styles__spinReveal___2N2Cc-camelCase 4s ease-in-out .5s;animation:styles__spinReveal___2N2Cc-camelCase 4s ease-in-out .5s}@-webkit-keyframes styles__spinReveal___2N2Cc-camelCase{0%{transform:rotateY(0deg)}to{transform:rotateY(10turn)}}@keyframes styles__spinReveal___2N2Cc-camelCase{0%{transform:rotateY(0deg)}to{transform:rotateY(10turn)}}@-webkit-keyframes styles__fadeIn___3oVMI-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3oVMI-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__welcomeText___1i2Bw-camelCase{font-size:12vw}.styles__lifeContainer___fTvKq-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__deckButton___ESWlf-camelCase{right:0}.styles__deckButton___ESWlf-camelCase,.styles__deckButton___ESWlf-camelCase:hover{transform:scale(.8)}.styles__cardContainer___2kcZn-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___1-CoQ-camelCase{top:2vw;right:2vw}.styles__chooseText___2V1Yo-camelCase{font-size:54px;bottom:60%}.styles__restButton___2YVaS-camelCase{margin:auto}.styles__restButton___2YVaS-camelCase,.styles__restButton___2YVaS-camelCase:hover{transform:scale(1.5)}.styles__restButtonContainer___29dDc-camelCase{top:55%;left:5%;width:90%}.styles__upgradeText___1a8br-camelCase{font-size:9.25vw;top:6.5%}.styles__upgradeDeckContainer___3PU7i-camelCase{top:17.5%;align-content:flex-start;min-height:75%;width:95%;padding:5% 2.5%}.styles__upgradeCardContainer___17M8S-camelCase{width:25vw;height:32.5vw;transform:scale(.95);margin:2vw 3vw}.styles__upgradeCardContainer___17M8S-camelCase:hover{transform:scale(.95)}.styles__lifeHealContainer___i6qZ2-camelCase{transform:scale(2.5)}.styles__cardReveal___136vo-camelCase{transform:scale(1.5);-webkit-animation:styles__spinReveal___2N2Cc-camelCase 4s ease-in-out .5s;animation:styles__spinReveal___2N2Cc-camelCase 4s ease-in-out .5s}@-webkit-keyframes styles__spinReveal___2N2Cc-camelCase{0%{transform:scale(1.5) rotateY(0deg)}to{transform:scale(1.5) rotateY(10turn)}}@keyframes styles__spinReveal___2N2Cc-camelCase{0%{transform:scale(1.5) rotateY(0deg)}to{transform:scale(1.5) rotateY(10turn)}}}", ""]), t.locals = {
                welcomeText: "styles__welcomeText___1i2Bw-camelCase",
                fadeIn: "styles__fadeIn___3oVMI-camelCase",
                lifeContainer: "styles__lifeContainer___fTvKq-camelCase",
                deckButton: "styles__deckButton___ESWlf-camelCase",
                deckIcon: "styles__deckIcon___E5ZTN-camelCase",
                deckText: "styles__deckText___21WeM-camelCase",
                deckContainer: "styles__deckContainer___SF9Tx-camelCase",
                cardContainer: "styles__cardContainer___2kcZn-camelCase",
                closeIcon: "styles__closeIcon___1-CoQ-camelCase",
                chooseText: "styles__chooseText___2V1Yo-camelCase",
                restButtonContainer: "styles__restButtonContainer___29dDc-camelCase",
                restButton: "styles__restButton___2YVaS-camelCase",
                buttonIcon: "styles__buttonIcon___20ndZ-camelCase",
                upgradeDeckContainer: "styles__upgradeDeckContainer___3PU7i-camelCase",
                upgradeCardContainer: "styles__upgradeCardContainer___17M8S-camelCase",
                upgradeText: "styles__upgradeText___1a8br-camelCase",
                lifeHealContainer: "styles__lifeHealContainer___i6qZ2-camelCase",
                cardReveal: "styles__cardReveal___136vo-camelCase",
                spinReveal: "styles__spinReveal___2N2Cc-camelCase"
            }
        },
        "1yBc": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                h = r.n(f),
                p = r("Xst1"),
                d = r.n(p),
                m = r("ciu7"),
                y = r.n(m),
                _ = r("Rnav"),
                w = r("XTAU"),
                v = r("9TPi"),
                g = r("H+xr"),
                b = r.n(g),
                x = [{
                    text: "You've encountered an evil Blook! In order to survive, you'll have to reduce its health to 0 while keeping yours above 0.",
                    nextButtonText: "Next",
                    className: b.a.centered
                }, {
                    text: "Battles are broken down into rounds. Each round you'll have to answer one question.",
                    nextButtonText: "Next",
                    className: b.a.centered
                }, {
                    elementId: "myCard",
                    text: "Before that, you can take a look at the card you drew this round.",
                    nextButtonText: "Next",
                    className: b.a.myCard
                }, {
                    elementId: "oppCard",
                    text: "Similarly, your opponent also drew a card this round. Your goal each round is for your card to be stronger than this one.",
                    nextButtonText: "Next",
                    className: b.a.oppCard
                }, {
                    elementId: "myCard",
                    text: "To determine the stronger card, one attribute (Strength, Charisma, or Wisdom) will be chosen each round.",
                    nextButtonText: "Next",
                    className: b.a.myCard
                }, {
                    elementId: "oppCard",
                    text: "Unfortunately, you can't see your opponent's card before battle. You're best bet is to choose your strongest attribute.",
                    nextButtonText: "Next",
                    className: b.a.oppCard
                }, {
                    text: "Whoever's card has the highest value of that attribute wins. Then, the winner deals damage equal to how much stronger they were.",
                    nextButtonText: "Next",
                    className: b.a.centered
                }, {
                    text: "Also, winning multiple rounds in a row will give you a streak. The damage you deal will be multiplied by that streak number.",
                    nextButtonText: "Next",
                    className: b.a.centered
                }, {
                    text: "If you answer the question correctly each round, you'll get to pick the attribute. Answering incorrectly means your opponent gets to choose.",
                    nextButtonText: "Next",
                    functionIndex: 0,
                    className: b.a.centered
                }, {
                    elementId: "myCard",
                    text: "Let's assume you answer the first question correctly. Now, go ahead and click an attribute bar on your card.",
                    className: b.a.myCard
                }, {}, {
                    text: "Great work! If your health drops to 0 your game is over, but if you win the battle then you'll get to add another card to your deck.",
                    nextButtonText: "Next",
                    className: b.a.centered
                }, {
                    text: "That's all for the tutorial. Good luck ascending the Tower of Doom!",
                    nextButtonText: "Done",
                    className: b.a.centered
                }],
                C = r("E8Bj"),
                k = r("VIao");

            function T(e) {
                return {
                    type: k.a,
                    mapNodes: e
                }
            }
            var E = r("Dq49"),
                S = r("ZTK6"),
                O = r("lWrb"),
                N = r("0oXL"),
                j = r("Truy"),
                L = r("FVRk"),
                I = r("4Zpe"),
                P = r("2qfb"),
                R = r("hcJe"),
                B = r("gvfT"),
                A = r("H0Bl"),
                q = r("74sb"),
                D = r("qnYv");

            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (r = r.call(e); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || J(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(r), !0).forEach((function(t) {
                        F(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function F(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function W() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                W = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == M(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function Y(e) {
                return function(e) {
                    if (Array.isArray(e)) return Q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || J(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J(e, t) {
                if (e) {
                    if ("string" == typeof e) return Q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Q(e, t) : void 0
                }
            }

            function Q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function U(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function K(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            U(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            U(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function X(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function V(e, t) {
                return (V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Z(e) {
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
                    var r, n = te(e);
                    if (t) {
                        var o = te(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return $(this, r)
                }
            }

            function $(e, t) {
                if (t && ("object" === M(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ee(e)
            }

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e) {
                return (te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var re = function(e) {
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
                }(c, e);
                var t, r, n, a, s, i = Z(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        enemy: {},
                        myCards: [],
                        phase: "draw",
                        enemyCard: {},
                        myCard: {},
                        myFlipped: !0,
                        enemyFlipped: !0,
                        myLife: 100,
                        result: "tie",
                        damage: 0,
                        rawDamage: 0,
                        question: {},
                        correct: !1,
                        streak: 0,
                        myStreak: !0,
                        coins: 0,
                        usedShield: !1,
                        showTour: e.tower && e.tower.instruct,
                        readId: ""
                    }, t.waitingCard = !1, t.waitingQuestion = !1, t.allEnemyCards = [], t.freeQuestions = [], t.isFirstTurn = !0, t.hasShield = !1, t.msg = {}, t.isReading = !1, t.tourRef = o.a.createRef(), t.onSelect = t.onSelect.bind(ee(t)), t.onAnswer = t.onAnswer.bind(ee(t)), t.onWin = t.onWin.bind(ee(t)), t.getQuestion = t.getQuestion.bind(ee(t)), t.answerNext = t.answerNext.bind(ee(t)), t.drawCards = t.drawCards.bind(ee(t)), t.selectCard = t.selectCard.bind(ee(t)), t.readQuestion = t.readQuestion.bind(ee(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (s = K(W().mark((function e() {
                        var t, r, n, o, a, s = this;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && ["small", "big", "boss"].includes(this.props.tower.stage) && this.props.tower.questions && this.props.tower.questions.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    if (e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.setTowerInstruct(!1), (t = {
                                            blooks: this.props.tower.enemy
                                        }).blook = this.props.tower.enemy, r = R.a[t.blook].maxLife + 10 * (this.props.tower.level - 1), t.life = r, t.maxLife = r, n = R.a[t.blook].deckBlooks, t.cards = [], n.forEach((function(e) {
                                            var r = B.c[e];
                                            t.cards.push({
                                                blook: e,
                                                class: r.class,
                                                strength: Math.min(r.strength + s.props.tower.level - 1, 20),
                                                charisma: Math.min(r.charisma + s.props.tower.level - 1, 20),
                                                wisdom: Math.min(r.wisdom + s.props.tower.level - 1, 20)
                                            })
                                        })), this.allEnemyCards = t.cards, o = this.props.tower.life, a = !1, this.props.tower.artifacts.forEach((function(e) {
                                            "Survival Guide" === e ? o = Math.min(100, o + 3) : "Band-Aid" === e && "boss" === s.props.tower.stage ? o = Math.min(100, o + 15) : "Mighty Shield" === e ? s.hasShield = !0 : "Cursed Hourglass" === e && (o = Math.max(0, o - 3), t.life = Math.max(0, t.life - 10), o <= 0 ? (a = !0, s.props.setTowerLife(0), s.props.setTowerStage("final"), s.props.history.push("/tower/final")) : t.life <= 0 && (a = !0, s.setState({
                                                myLife: o
                                            }, (function() {
                                                s.onWin()
                                            }))))
                                        })), !a) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 21:
                                    this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.setState({
                                        enemy: t,
                                        myCards: Y(this.props.tower.cards),
                                        myLife: o
                                    }, this.drawCards);
                                case 23:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.revealTimeout), clearTimeout(this.waitQuestionTimeout), clearTimeout(this.flipTimeout), clearTimeout(this.damageTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.questionTImeout), clearTimeout(this.waitCardTimeout), clearTimeout(this.enemyPickTimeout), clearTimeout(this.questionTimeout)
                    }
                }, {
                    key: "onSelect",
                    value: function(e) {
                        var t = this;
                        if (!this.waitingCard) {
                            this.state.showTour && this.tourRef.current.setStep(10);
                            var r = Math.abs(this.state.myCard[e] - this.state.enemyCard[e]),
                                n = this.state.streak,
                                o = this.state.myStreak,
                                a = "loss";
                            this.state.myCard[e] > this.state.enemyCard[e] ? (a = "win", o ? n += 1 : (o = !0, n = 1)) : 0 === r ? a = "tie" : o ? (o = !1, n = 1) : n += 1;
                            var s = r;
                            r *= Math.max(n, 1);
                            var i = this.state.enemy.life,
                                c = !1;
                            "tie" === a && this.props.tower.artifacts.includes("Chess Pieces") && (r = 4), this.props.tower.artifacts.forEach((function(e) {
                                "Fury Relic" === e && t.isFirstTurn && (r *= 2), "Toxic Waste" === e && (r *= 2), "win" === a && "Lifeline Totem" === e && t.state.myLife < 20 && (r *= 2)
                            })), this.props.tower.artifacts.forEach((function(e) {
                                "loss" === a && (t.hasShield && (c = !0, t.hasShield = !1), t.hasShield || c || ("Captain's Anchor" === e ? r = Math.max(0, r - 1) : "Steel Socks" === e && s - t.props.tower.artifacts.filter((function(e) {
                                    return "Captain's Anchor" === e
                                })).length > 0 && (i = Math.max(0, i - 2))))
                            })), this.isFirstTurn && (this.isFirstTurn = !1), this.setState({
                                enemyFlipped: !1,
                                phase: "flipping",
                                attribute: e
                            }, (function() {
                                t.flipTimeout = setTimeout((function() {
                                    t.setState({
                                        result: a,
                                        streak: n,
                                        myStreak: o,
                                        rawDamage: s,
                                        usedShield: c,
                                        damage: r,
                                        phase: "fight"
                                    }, (function() {
                                        t.damageTimeout = setTimeout((function() {
                                            t.setState({
                                                enemy: H(H({}, t.state.enemy), {}, {
                                                    life: "win" === t.state.result || "tie" === t.state.result ? Math.max(t.state.enemy.life - t.state.damage, 0) : i
                                                }),
                                                myLife: "loss" === t.state.result ? Math.max(c ? t.state.myLife : t.state.myLife - t.state.damage, 0) : t.state.myLife
                                            }, (function() {
                                                t.nextTimeout = setTimeout((function() {
                                                    t.props.setTowerLife(t.state.myLife), 0 === t.state.enemy.life ? t.onWin() : 0 === t.state.myLife ? (t.props.setTowerStage("final"), t.props.history.push("/tower/final")) : (t.drawCards(), t.state.showTour && t.tourRef.current.setStep(11))
                                                }), 3500)
                                            }))
                                        }), 500)
                                    }))
                                }), 900)
                            }))
                        }
                    }
                }, {
                    key: "onWin",
                    value: function() {
                        if (3 === this.props.tower.level && "boss" === this.props.tower.stage) this.props.addTowerNode(100), this.props.setTowerStage("victory"), this.props.history.push("/tower/victory");
                        else {
                            var e = "boss" === this.props.tower.stage ? Object(q.r)(70, 100) : "big" === this.props.tower.stage ? Object(q.r)(30, 55) : Object(q.r)(15, 35);
                            this.props.tower.artifacts.forEach((function(t) {
                                "Piggy Bank" === t && (e += 6)
                            })), this.setState({
                                phase: "prize",
                                coins: e
                            })
                        }
                    }
                }, {
                    key: "onAnswer",
                    value: function(e) {
                        if (!this.waitingQuestion) {
                            this.waitingQuestion = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var t = this.state.question.correctAnswers.includes(e),
                                r = JSON.parse(JSON.stringify(this.props.tower.corrects)),
                                n = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
                                o = this.state.question.number;
                            t ? r[o] ? r[o] += 1 : r[o] = 1 : n[o] ? n[o] += 1 : n[o] = 1, this.props.answerTower(r, n, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
                                correct: t,
                                phase: "feedback",
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var e = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
                        var t = Object(q.p)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(q.w)(t.answers)), this.waitingQuestion = !0, this.setState({
                            question: t,
                            phase: "question"
                        }, (function() {
                            e.waitQuestionTimeout = setTimeout((function() {
                                e.waitingQuestion = !1
                            }), 800)
                        }))
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        var e = this;
                        this.waitingCard = !0, this.state.correct ? this.setState({
                            phase: "select"
                        }, (function() {
                            e.waitCardTimeout = setTimeout((function() {
                                e.waitingCard = !1
                            }), 400)
                        })) : this.setState({
                            phase: "enemySelect"
                        }, (function() {
                            e.enemyPickTimeout = setTimeout((function() {
                                var t = "";
                                if (1 === e.props.tower.level || 2 === e.props.tower.level && 0 === Object(q.r)(0, 2)) {
                                    var r = 0;
                                    Object.entries(e.state.enemyCard).forEach((function(e) {
                                        var n = G(e, 2),
                                            o = n[0],
                                            a = n[1];
                                        "blook" !== o && a > r && (t = o, r = a)
                                    }))
                                } else {
                                    var n = -21;
                                    Object.entries(e.state.enemyCard).forEach((function(r) {
                                        var o = G(r, 2),
                                            a = o[0],
                                            s = o[1];
                                        "blook" !== a && s - e.state.myCard[a] > n && (t = a, n = s - e.state.myCard[a])
                                    }))
                                }
                                e.waitingCard = !1, e.onSelect(t)
                            }), 2e3)
                        }))
                    }
                }, {
                    key: "drawCards",
                    value: function() {
                        var e = this;
                        this.waitingCard = !0;
                        var t = JSON.parse(JSON.stringify(this.state.enemy.cards));
                        0 === t.length && (t = JSON.parse(JSON.stringify(this.allEnemyCards)));
                        var r = JSON.parse(JSON.stringify(this.state.myCards));
                        0 === r.length && (r = JSON.parse(JSON.stringify(this.props.tower.cards)));
                        var n = t.splice(Object(q.r)(0, t.length), 1),
                            o = r.splice(Object(q.r)(0, r.length), 1),
                            a = n[0],
                            s = o[0];
                        this.props.tower.artifacts.includes("Pink Hippo") && (s.strength = Math.min(s.strength + 2, 20)), this.props.tower.artifacts.includes("Dave's Doggo") && (s.charisma = Math.min(s.charisma + 2, 20)), this.props.tower.artifacts.includes("Anorak's Wizard Cap") && (s.wisdom = Math.min(s.wisdom + 2, 20)), this.props.tower.artifacts.includes("Anubis' Obelisk") && (a.strength = Math.max(a.strength - 1, 0), a.charisma = Math.max(a.charisma - 1, 0), a.wisdom = Math.max(a.wisdom - 1, 0));
                        var i = 0;
                        this.props.tower.artifacts.forEach((function(e) {
                            "Farm Tractor" === e ? "🌽" === s.class ? i += 1 : "🌴" === s.class && (i -= 1) : "Magic Seedling" === e ? ["🌲", "🌴"].includes(s.class) ? i += 1 : ["🌽", "🐾"].includes(s.class) && (i -= 1) : "Just A Bone" === e ? "🐾" === s.class ? i += 1 : "🌲" === s.class && (i -= 1) : "Cozy Igloo" === e ? ["❄️", "☃️"].includes(s.class) ? i += 1 : ["⚔️", "🏰"].includes(s.class) && (i -= 1) : "King's Crown" === e ? "⚔️" === s.class ? i += 1 : "🏰" === s.class && (i -= 1) : "Sacred Scroll" === e && ("🏰" === s.class ? i += 1 : "⚔️" === s.class && (i -= 1))
                        })), 0 !== i && (s.strength = Math.max(0, Math.min(s.strength + i, 20)), s.charisma = Math.max(0, Math.min(s.charisma + i, 20)), s.wisdom = Math.max(0, Math.min(s.wisdom + i, 20))), this.setState({
                            myFlipped: !0,
                            enemyFlipped: !0,
                            phase: "draw"
                        }, (function() {
                            e.revealTimeout = setTimeout((function() {
                                e.setState({
                                    myFlipped: !1,
                                    enemyCard: a,
                                    myCard: s,
                                    enemy: H(H({}, e.state.enemy), {}, {
                                        cards: t
                                    }),
                                    myCards: r,
                                    attribute: ""
                                }, (function() {
                                    e.state.showTour || (e.questionTimeout = setTimeout((function() {
                                        e.getQuestion()
                                    }), 800))
                                }))
                            }), 900)
                        }))
                    }
                }, {
                    key: "selectCard",
                    value: function(e) {
                        var t = this,
                            r = Y(this.props.tower.cards),
                            n = Y(this.props.tower.artifacts),
                            o = this.props.tower.coins;
                        e.blook ? (r.push(e), this.props.setTowerCards(r)) : (n.push(e), "Elder Coins" !== e || n.includes("Anubis' Obelisk") || (o += 100), this.props.setTowerArtifacts(n)), n.includes("Anubis' Obelisk") || (o += this.state.coins), this.props.setTowerCoins(o);
                        var a = this.props.tower.mapNodes,
                            s = this.props.tower.level,
                            i = this.props.tower.currentNode,
                            c = this.props.tower.nodePath;
                        "boss" === this.props.tower.stage && (s += 1, i = 0, c = [], a = Object(A.a)(), this.props.newTowerLevel(a));
                        var l = this.state.myLife;
                        n.forEach((function(e) {
                            "Medical Kit" === e && (l = Math.min(100, l + 3))
                        })), this.props.setTowerLife(l), this.props.tower.towerId ? D.a.put("/api/towers/save", {
                            id: this.props.tower.towerId,
                            stage: "map",
                            cards: r,
                            artifacts: n,
                            life: l,
                            coins: o,
                            corrects: this.props.tower.corrects,
                            incorrects: this.props.tower.incorrects,
                            mapNodes: a,
                            level: s,
                            currentNode: i,
                            nodePath: c
                        }).then((function() {
                            t.props.setTowerStage("map"), t.props.history.push("/tower/map")
                        })).catch((function(e) {
                            console.error(e)
                        })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
                    }
                }, {
                    key: "readQuestion",
                    value: (a = K(W().mark((function e() {
                        var t, r = this;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.isReading = !0, t = function(e, t, n) {
                                        var o = e;
                                        if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                        e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: t
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, e.next = 6, new Promise((function(e) {
                                        return t(r.state.question.text, "qText", e)
                                    }));
                                case 6:
                                    return e.next = 8, new Promise((function(e) {
                                        return t(r.state.question.answers[0], "q1", e)
                                    }));
                                case 8:
                                    return e.next = 10, new Promise((function(e) {
                                        return t(r.state.question.answers[1], "q2", e)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13, new Promise((function(e) {
                                        return t(r.state.question.answers[2], "q3", e)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 16, new Promise((function(e) {
                                        return t(r.state.question.answers[3], "q4", e)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower || !this.props.tower.questions || !this.props.tower.questions.length) return o.a.createElement(l.a, {
                            to: "/login"
                        });
                        var t = Math.min(this.state.rawDamage, this.props.tower.artifacts.filter((function(e) {
                            return "Captain's Anchor" === e
                        })).length);
                        return o.a.createElement("div", {
                            className: u.isMobile ? d.a.mBody : d.a.body,
                            id: "body",
                            style: {
                                backgroundColor: "#292929",
                                oveflow: "hidden"
                            }
                        }, o.a.createElement(w.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(_.a, {
                            coins: this.props.tower.coins,
                            showRead: "question" === this.state.phase,
                            readQuestion: this.readQuestion
                        }), this.state.myCard && "prize" !== this.state.phase ? o.a.createElement("div", {
                            className: d.a.regularBody,
                            id: "regularBody"
                        }, this.state.showTour ? o.a.createElement(v.a, {
                            steps: x,
                            onExit: function() {
                                return e.setState({
                                    showTour: !1
                                }, e.getQuestion)
                            },
                            functions: [function() {
                                e.waitingCard = !1, e.setState({
                                    phase: "select"
                                })
                            }],
                            ref: this.tourRef
                        }) : null, o.a.createElement("div", {
                            className: y.a.myName
                        }, "You", o.a.createElement("br", null), o.a.createElement("span", {
                            style: {
                                fontSize: u.isMobile ? "4vw" : "1.5vw"
                            }
                        }, this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), o.a.createElement("div", {
                            className: y.a.myLife
                        }, o.a.createElement(j.a, {
                            currentLife: this.state.myLife,
                            maxLife: 100,
                            top: "0px",
                            left: "0px"
                        })), o.a.createElement("div", {
                            className: y.a.myCircle
                        }), o.a.createElement("div", {
                            className: h()(y.a.cardContainer, y.a.myCard, F({}, y.a.myCardAttack, "fight" === this.state.phase && "win" === this.state.result), F({}, y.a.myCardHit, "fight" === this.state.phase && "loss" === this.state.result)),
                            id: "myCard"
                        }, o.a.createElement(O.a, {
                            card: this.state.myCard,
                            flipped: this.state.myFlipped,
                            attribute: this.state.attribute,
                            onClick: "select" === this.state.phase ? this.onSelect : void 0
                        })), o.a.createElement("div", {
                            className: y.a.oppCircle
                        }), o.a.createElement("div", {
                            className: h()(y.a.cardContainer, y.a.oppCard, F({}, y.a.enemyCardAttack, "fight" === this.state.phase && "loss" === this.state.result), F({}, y.a.enemyCardHit, "fight" === this.state.phase && "win" === this.state.result)),
                            id: "oppCard"
                        }, o.a.createElement(O.a, {
                            card: ["flipping", "fight", "draw"].includes(this.state.phase) ? this.state.enemyCard : {},
                            flipped: this.state.enemyFlipped,
                            attribute: this.state.attribute
                        })), o.a.createElement("div", {
                            className: y.a.oppBlookStage
                        }), o.a.createElement(N.a, {
                            name: this.state.enemy.blook,
                            className: y.a.oppBlook
                        }), o.a.createElement("div", {
                            className: y.a.oppName
                        }, "Evil ".concat(this.state.enemy.blook), o.a.createElement("br", null), o.a.createElement("span", {
                            style: {
                                fontSize: u.isMobile ? "3vw" : "1.6vw"
                            }
                        }, !this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), o.a.createElement("div", {
                            className: y.a.oppLife
                        }, o.a.createElement(j.a, {
                            currentLife: this.state.enemy.life,
                            maxLife: this.state.enemy.maxLife
                        })), "select" === this.state.phase ? o.a.createElement("div", {
                            className: y.a.text
                        }, "Choose an attribute on your card") : "enemySelect" === this.state.phase ? o.a.createElement("div", {
                            className: y.a.text
                        }, "Waiting for the enemy to choose an attribute") : "fight" === this.state.phase ? o.a.createElement("div", {
                            className: y.a.text
                        }, "win" === this.state.result ? "You Win" : "loss" === this.state.result ? "You Lose" : "Tie", o.a.createElement("br", null), "".concat(this.state.rawDamage, " x ").concat(Math.round((("tie" === this.state.result ? 0 : this.state.damage) + ("loss" !== this.state.result || this.state.usedShield ? 0 : t)) / (this.state.rawDamage || 1))).concat(t > 0 && "loss" === this.state.result && !this.state.usedShield ? " - ".concat(t) : "", " = ").concat("tie" === this.state.result ? 0 : this.state.damage), o.a.createElement("br", null), this.state.usedShield ? "Blocked with Shield" : "tie" === this.state.result && 0 === this.state.damage ? "No Damage Dealt" : "".concat("loss" === this.state.result ? "Take" : "Deal", " ").concat(this.state.damage, " Damage")) : null) : null, "question" === this.state.phase ? o.a.createElement(L.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId,
                            className: y.a.questionContainer,
                            theme: "tower"
                        }) : "feedback" === this.state.phase ? o.a.createElement("div", {
                            className: y.a.feedbackContainer
                        }, o.a.createElement(I.a, {
                            incorrectTime: 3,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        })) : "prize" === this.state.phase ? o.a.createElement("div", {
                            className: d.a.regularBody,
                            style: {
                                backgroundColor: "#292929"
                            }
                        }, o.a.createElement(P.a, {
                            type: this.props.tower.stage,
                            onClick: this.selectCard,
                            coins: this.state.coins,
                            cards: [].concat(Y(this.props.tower.artifacts), Y(this.props.tower.cards)),
                            noThird: this.props.tower.artifacts.includes("Pink Hippo")
                        })) : null)
                    }
                }]) && X(t.prototype, r), n && X(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            re.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                answerTower: c.a.func.isRequired,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerCoins: c.a.func.isRequired,
                setTowerLife: c.a.func.isRequired,
                newTowerLevel: c.a.func.isRequired,
                addTowerNode: c.a.func.isRequired,
                setTowerArtifacts: c.a.func.isRequired,
                setTowerInstruct: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(C.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    answerTower: S.a,
                    setTowerCards: S.c,
                    setTowerStage: S.g,
                    setTowerCoins: S.d,
                    setTowerLife: S.f,
                    newTowerLevel: T,
                    addTowerNode: E.a,
                    setTowerArtifacts: S.b,
                    setTowerInstruct: S.e
                }, e)
            }))(re)))
        },
        "32v5": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".tourSteps__centered___23cEy-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___2vKaN-camelCase{right:2vw;top:calc(115px + 5vw)}@media only screen and (max-width:800px){.tourSteps__topRight___2vKaN-camelCase{top:calc(80px + 16vw)}}", ""]), t.locals = {
                centered: "tourSteps__centered___23cEy-camelCase",
                topRight: "tourSteps__topRight___2vKaN-camelCase"
            }
        },
        "6+nO": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".tourSteps__centered___3ccHe-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__myCard___1z-pO-camelCase{top:50%;left:50vw}.tourSteps__myCard___1z-pO-camelCase,.tourSteps__oppCard___2q0rX-camelCase{transform:translateY(-50%)}.tourSteps__oppCard___2q0rX-camelCase{top:calc(15.6875vw + 55px);right:45vw}@media only screen and (max-width:600px){.tourSteps__myCard___1z-pO-camelCase{top:auto;left:5vw;bottom:calc(20% + 45vw);transform:none}.tourSteps__oppCard___2q0rX-camelCase{top:75vw;right:5vw;transform:none}}", ""]), t.locals = {
                centered: "tourSteps__centered___3ccHe-camelCase",
                myCard: "tourSteps__myCard___1z-pO-camelCase",
                oppCard: "tourSteps__oppCard___2q0rX-camelCase"
            }
        },
        Ad39: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                h = r.n(f),
                p = r("ZTK6"),
                d = r("qIdB"),
                m = r.n(d),
                y = r("Xst1"),
                _ = r.n(y),
                w = r("Rnav"),
                v = r("XTAU"),
                g = r("E8Bj"),
                b = r("gvfT"),
                x = r("74sb"),
                C = r("pMTK"),
                k = {
                    Common: [10, 26],
                    Uncommon: [30, 56],
                    Rare: [50, 76],
                    Epic: [75, 101],
                    Legendary: [100, 126]
                },
                T = function() {
                    var e = Object(b.d)("boss", 6),
                        t = [];
                    return e.forEach((function(e) {
                        var r = e.blook ? k[Object(C.a)(e.blook)] : k[b.a[e].rarity];
                        t.push({
                            card: e,
                            price: Object(x.r)(r[0], r[1])
                        })
                    })), t
                },
                E = r("Truy"),
                S = r("lWrb"),
                O = r("ca/f"),
                N = r("qnYv");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == j(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function R(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function B(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function q(e) {
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
                    var r, n = G(e);
                    if (t) {
                        var o = G(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return D(this, r)
                }
            }

            function D(e, t) {
                if (t && ("object" === j(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return M(e)
            }

            function M(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function G(e) {
                return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var z = function(e) {
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
                }(c, e);
                var t, r, n, a, s, i = q(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        cards: [],
                        artifacts: [],
                        shopItems: [],
                        coins: 0,
                        noBuy: !1,
                        showDeck: !1,
                        phase: "",
                        buyCard: {},
                        buyPrice: 0,
                        shopMultiplier: 1
                    }, t.ready = !1, t.removeReady = !1, t.onBuy = t.onBuy.bind(M(t)), t.leave = t.leave.bind(M(t)), t.selectCard = t.selectCard.bind(M(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (a = L().mark((function e() {
                        var t, r = this;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && "shop" === this.props.tower.stage) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    e.sent || this.setState({
                                        notLoggedIn: !0
                                    }), t = 1, this.props.tower.artifacts.forEach((function(e) {
                                        "Coupon" === e && (t -= .1)
                                    })), this.setState({
                                        shopItems: T(),
                                        cards: JSON.parse(JSON.stringify(this.props.tower.cards)),
                                        artifacts: I(this.props.tower.artifacts),
                                        coins: this.props.tower.coins,
                                        shopMultiplier: t,
                                        phase: "shop"
                                    }, (function() {
                                        r.waitTimeout = setTimeout((function() {
                                            r.ready = !0
                                        }), 1e3)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function s(e) {
                                R(o, r, n, s, i, "next", e)
                            }

                            function i(e) {
                                R(o, r, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.waitTimeout), clearTimeout(this.removeTimeout)
                    }
                }, {
                    key: "onBuy",
                    value: function(e, t, r) {
                        var n = this;
                        if (this.ready) {
                            if (this.ready = !1, t > this.state.coins) return this.setState({
                                noBuy: !0
                            }), void(this.ready = !0);
                            if ("card" === e) {
                                var o = I(this.state.shopItems),
                                    a = o.map((function(e) {
                                        return e.card
                                    })).indexOf(r);
                                if (-1 === a) return void(this.ready = !0);
                                o.splice(a, 1);
                                var s = I(this.state.cards),
                                    i = I(this.state.artifacts);
                                r.blook ? (s.push(r), this.props.setTowerCards(s)) : (i.push(r), this.props.setTowerArtifacts(i));
                                var c = 1;
                                i.forEach((function(e) {
                                    "Coupon" === e && (c -= .1)
                                }));
                                var l = this.state.coins - t;
                                "Elder Coins" !== r || this.state.artifacts.includes("Anubis' Obelisk") || (l += 100), this.props.setTowerCoins(l), this.setState({
                                    shopItems: o,
                                    cards: s,
                                    artifacts: i,
                                    coins: l,
                                    buyCard: {},
                                    buyPrice: 0,
                                    shopMultiplier: c
                                }, (function() {
                                    n.ready = !0
                                }))
                            } else this.ready = !0, this.removeReady = !1, this.setState({
                                phase: "removeSelect"
                            }, (function() {
                                n.removeTimeout = setTimeout((function() {
                                    n.removeReady = !0
                                }), 1e3)
                            }))
                        }
                    }
                }, {
                    key: "leave",
                    value: function() {
                        var e = this,
                            t = this.props.tower.life;
                        this.state.artifacts.forEach((function(e) {
                            "Cheese" === e && (t = Math.min(100, t + 5))
                        })), t !== this.props.tower.life && this.props.setTowerLife(t), this.props.tower.towerId ? N.a.put("/api/towers/save", {
                            id: this.props.tower.towerId,
                            stage: "map",
                            cards: this.state.cards,
                            artifacts: this.state.artifacts,
                            coins: this.state.coins,
                            life: t
                        }).then((function() {
                            e.props.setTowerStage("map"), e.props.history.push("/tower/map")
                        })).catch((function(e) {
                            console.error(e)
                        })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
                    }
                }, {
                    key: "selectCard",
                    value: function(e) {
                        var t = this;
                        if (this.removeReady) {
                            var r = I(this.state.cards),
                                n = I(this.state.artifacts);
                            r.includes(e) ? (r.splice(r.indexOf(e), 1), this.props.setTowerCards(r)) : n.includes(e) && (n.splice(n.indexOf(e), 1), this.props.setTowerArtifacts(n));
                            var o = Math.round(50 * this.state.shopMultiplier);
                            this.props.setTowerCoins(this.props.tower.coins - o);
                            var a = 1;
                            n.forEach((function(e) {
                                "Coupon" === e && (a -= .1)
                            })), this.setState({
                                phase: "removeReveal",
                                card: e
                            }, (function() {
                                t.removeTimeout = setTimeout((function() {
                                    t.setState({
                                        phase: "shop",
                                        cards: r,
                                        artifacts: n,
                                        coins: t.state.coins - o,
                                        shopMultiplier: a
                                    }, (function() {
                                        t.waitTimeout = setTimeout((function() {
                                            t.ready = !0
                                        }), 1e3)
                                    }))
                                }), 5e3)
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? o.a.createElement(l.a, {
                            to: "/login"
                        }) : o.a.createElement("div", {
                            className: u.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#292929"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(w.a, {
                            coins: this.state.coins
                        }), "shop" === this.state.phase ? o.a.createElement("div", {
                            className: _.a.regularBody,
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            }
                        }, o.a.createElement("div", {
                            className: m.a.lifeContainer
                        }, o.a.createElement(E.a, {
                            currentLife: this.props.tower.life,
                            maxLife: 100
                        })), o.a.createElement("div", {
                            className: m.a.deckButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    showDeck: !0
                                })
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-layer-group", m.a.deckIcon)
                        }), o.a.createElement("div", {
                            className: m.a.deckText
                        }, "View Deck")), o.a.createElement("div", {
                            className: m.a.leaveButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.leave
                        }, o.a.createElement("i", {
                            className: h()("fas fa-door-open", m.a.deckIcon)
                        }), o.a.createElement("div", {
                            className: m.a.deckText
                        }, "Leave Shop")), o.a.createElement("div", {
                            className: m.a.shopContainer
                        }, this.state.cards.length > 1 ? o.a.createElement("div", {
                            className: m.a.removeButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.onBuy("remove", Math.round(50 * e.state.shopMultiplier))
                            }
                        }, o.a.createElement("div", {
                            className: m.a.removeButtonText
                        }, "Remove", o.a.createElement("br", null), "a Card"), o.a.createElement("i", {
                            className: h()("fas fa-trash-alt", m.a.removeIcon)
                        }), o.a.createElement("div", {
                            className: m.a.removeCost
                        }, Math.round(50 * this.state.shopMultiplier), o.a.createElement("i", {
                            className: h()("fas fa-coins", m.a.removeCostIcon)
                        }))) : null, o.a.createElement("div", {
                            className: m.a.cardsHolder
                        }, this.state.shopItems.map((function(t, r) {
                            return o.a.createElement("div", {
                                className: m.a.shopCardContainer,
                                key: r,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return Math.round(t.price * e.state.shopMultiplier) > e.state.coins ? e.setState({
                                        noBuy: !0
                                    }) : e.setState({
                                        buyCard: t.card,
                                        buyPrice: Math.round(t.price * e.state.shopMultiplier)
                                    })
                                }
                            }, o.a.createElement(S.a, {
                                card: t.card,
                                flipped: !1,
                                isArtifact: !t.card.blook
                            }), o.a.createElement("div", {
                                className: m.a.priceText
                            }, Math.round(t.price * e.state.shopMultiplier), o.a.createElement("i", {
                                className: h()("fas fa-coins", m.a.priceIcon)
                            })))
                        })))), this.state.showDeck ? o.a.createElement("div", {
                            className: m.a.deckContainer
                        }, [].concat(I(this.state.artifacts), I(this.state.cards)).map((function(e, t) {
                            return o.a.createElement("div", {
                                className: m.a.cardContainer,
                                key: t
                            }, o.a.createElement(S.a, {
                                card: e,
                                flipped: !1,
                                isArtifact: !e.blook
                            }))
                        })), o.a.createElement("i", {
                            className: h()("fas fa-times", m.a.closeIcon),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    showDeck: !1
                                })
                            }
                        })) : null) : "removeSelect" === this.state.phase ? o.a.createElement("div", {
                            className: _.a.regularBody
                        }, o.a.createElement("div", {
                            className: m.a.removeText
                        }, "Choose a Card to Remove"), o.a.createElement("div", {
                            className: m.a.backButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    phase: "shop"
                                })
                            }
                        }, "Back"), o.a.createElement("div", {
                            className: m.a.removeDeckContainer
                        }, [].concat(I(this.state.artifacts), I(this.state.cards)).map((function(t, r) {
                            return o.a.createElement("div", {
                                className: m.a.removeCardContainer,
                                key: r,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.selectCard(t)
                                }
                            }, o.a.createElement(S.a, {
                                card: t,
                                flipped: !1,
                                isArtifact: !t.blook
                            }))
                        })))) : "removeReveal" === this.state.phase ? o.a.createElement("div", {
                            className: _.a.regularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement("div", {
                            className: m.a.removeText
                        }, "Removing Card from Deck"), o.a.createElement("div", {
                            className: m.a.cardRemove
                        }, o.a.createElement(S.a, {
                            card: this.state.card,
                            flipped: !1,
                            isArtifact: !this.state.card.blook
                        }))) : null, this.state.noBuy ? o.a.createElement(O.a, {
                            text: "You don't have enough coins to buy this item!",
                            isDark: !0,
                            buttonOne: {
                                text: "Ok",
                                click: function() {
                                    return e.setState({
                                        noBuy: !1
                                    })
                                },
                                color: "black"
                            }
                        }) : this.state.buyPrice ? o.a.createElement(O.a, {
                            text: "Buy the ".concat(this.state.buyCard.blook || this.state.buyCard, " card for ").concat(this.state.buyPrice, " coins?"),
                            isDark: !0,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return e.onBuy("card", e.state.buyPrice, e.state.buyCard)
                                },
                                color: "black"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        buyCard: {},
                                        buyPrice: 0
                                    })
                                },
                                color: "black"
                            }
                        }) : null)
                    }
                }]) && B(t.prototype, r), n && B(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            z.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerCoins: c.a.func.isRequired,
                setTowerArtifacts: c.a.func.isRequired,
                setTowerLife: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(g.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    setTowerCards: p.c,
                    setTowerStage: p.g,
                    setTowerCoins: p.d,
                    setTowerArtifacts: p.b,
                    setTowerLife: p.f
                }, e)
            }))(z)))
        },
        Dq49: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return a
            }));
            var n = r("dHXX");

            function o(e, t) {
                return {
                    type: n.b,
                    enemy: e,
                    enemyType: t
                }
            }

            function a(e) {
                return {
                    type: n.a,
                    node: e
                }
            }
        },
        E7S3: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = "CREATE_TOWER",
                o = "LOAD_TOWER"
        },
        EDTP: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                h = r.n(f),
                p = r("ZTK6"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("uUIW"),
                _ = r.n(y),
                w = r("Rnav"),
                v = r("XTAU"),
                g = r("FVRk"),
                b = r("4Zpe"),
                x = r("lWrb"),
                C = r("Truy"),
                k = r("74sb"),
                T = r("E8Bj"),
                E = r("qnYv");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        j(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function L(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                P = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == S(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function R(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function B(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            R(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            R(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function A(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function q(e, t) {
                return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = z(e);
                    if (t) {
                        var o = z(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return M(this, r)
                }
            }

            function M(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return G(e)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var H = function(e) {
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
                    }), t && q(e, t)
                }(c, e);
                var t, r, n, a, s, i = D(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        question: {},
                        phase: "",
                        correct: !1,
                        showDeck: !1,
                        card: {},
                        life: 100,
                        healAmount: 20,
                        bonusStats: 2,
                        readId: ""
                    }, t.freeQuestions = [], t.waiting = !1, t.qRemaining = 3, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(G(t)), t.onHeal = t.onHeal.bind(G(t)), t.getQuestion = t.getQuestion.bind(G(t)), t.answerNext = t.answerNext.bind(G(t)), t.selectCard = t.selectCard.bind(G(t)), t.readQuestion = t.readQuestion.bind(G(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (s = B(P().mark((function e() {
                        var t, r, n = this;
                        return P().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && "rest" === this.props.tower.stage && this.props.tower.questions && this.props.tower.questions.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    if (e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), !this.props.tower.artifacts.includes("Anorak's Wizard Cap")) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.props.tower.towerId ? E.a.put("/api/towers/save", {
                                        id: this.props.tower.towerId,
                                        stage: "map"
                                    }).then((function() {
                                        n.props.setTowerStage("map"), n.props.history.push("/tower/map")
                                    })).catch((function(e) {
                                        console.error(e)
                                    })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map")), e.abrupt("return");
                                case 9:
                                    t = 20, r = 2, this.props.tower.artifacts.forEach((function(e) {
                                        "Tasty Egg" === e ? t += 7 : "Training Weights" === e && (r += 2)
                                    })), t = Math.min(t, 100 - this.props.tower.life), this.setState({
                                        healAmount: t,
                                        bonusStats: r,
                                        phase: "welcome"
                                    }), this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.welcomeTimeout = setTimeout((function() {
                                        n.getQuestion()
                                    }), 3e3);
                                case 16:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.welcomeTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.cardTimeout), clearTimeout(this.healTimeout), clearInterval(this.healInterval)
                    }
                }, {
                    key: "onAnswer",
                    value: function(e) {
                        if (!this.waiting) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var t = this.state.question.correctAnswers.includes(e),
                                r = JSON.parse(JSON.stringify(this.props.tower.corrects)),
                                n = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
                                o = this.state.question.number;
                            t ? r[o] ? r[o] += 1 : r[o] = 1 : n[o] ? n[o] += 1 : n[o] = 1, this.props.answerTower(r, n, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
                                correct: t,
                                phase: "feedback",
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "onHeal",
                    value: function() {
                        var e = this;
                        this.setState({
                            life: this.props.tower.life,
                            phase: "healing"
                        }, (function() {
                            e.healTimeout = setTimeout((function() {
                                var t = e.state.healAmount;
                                e.healInterval = setInterval((function() {
                                    t <= 0 ? (clearInterval(e.healInterval), e.healTimeout = setTimeout((function() {
                                        var t = Math.min(e.props.tower.life + e.state.healAmount, 100);
                                        e.props.tower.towerId ? E.a.put("/api/towers/save", {
                                            id: e.props.tower.towerId,
                                            stage: "map",
                                            life: t,
                                            corrects: e.props.tower.corrects,
                                            incorrects: e.props.tower.incorrects
                                        }).then((function() {
                                            e.props.setTowerLife(t), e.props.setTowerStage("map"), e.props.history.push("/tower/map")
                                        })).catch((function(e) {
                                            console.error(e)
                                        })) : (e.props.setTowerLife(t), e.props.setTowerStage("map"), e.props.history.push("/tower/map"))
                                    }), 1500)) : (t -= 1, e.setState({
                                        life: e.state.life + 1
                                    }))
                                }), 100)
                            }), 1500)
                        }))
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var e = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
                        var t = Object(k.p)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(k.w)(t.answers)), this.setState({
                            question: t,
                            phase: "question"
                        }, (function() {
                            e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                e.waiting = !1
                            }), 400)
                        }))
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        this.state.correct ? this.qRemaining -= 1 : (this.props.setTowerStage("map"), this.props.history.push("/tower/map")), this.qRemaining > 0 ? this.getQuestion() : this.setState({
                            phase: "rest"
                        })
                    }
                }, {
                    key: "selectCard",
                    value: function(e) {
                        var t = this,
                            r = L(this.props.tower.cards),
                            n = N({}, r[e]);
                        r[e] = N(N({}, n), {}, {
                            strength: Math.min(n.strength + this.state.bonusStats, 20),
                            charisma: Math.min(n.charisma + this.state.bonusStats, 20),
                            wisdom: Math.min(n.wisdom + this.state.bonusStats, 20)
                        }), this.setState({
                            card: n,
                            phase: "upgradeReveal"
                        }, (function() {
                            t.cardTimeout = setTimeout((function() {
                                t.setState({
                                    card: r[e]
                                }, (function() {
                                    t.cardTimeout = setTimeout((function() {
                                        t.props.tower.towerId ? E.a.put("/api/towers/save", {
                                            id: t.props.tower.towerId,
                                            stage: "map",
                                            cards: r,
                                            corrects: t.props.tower.corrects,
                                            incorrects: t.props.tower.incorrects
                                        }).then((function() {
                                            t.props.setTowerStage("map"), t.props.setTowerCards(r), t.props.history.push("/tower/map")
                                        })).catch((function(e) {
                                            console.error(e)
                                        })) : (t.props.setTowerStage("map"), t.props.setTowerCards(r), t.props.history.push("/tower/map"))
                                    }), 3500)
                                }))
                            }), 2500)
                        }))
                    }
                }, {
                    key: "readQuestion",
                    value: (a = B(P().mark((function e() {
                        var t, r = this;
                        return P().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.isReading = !0, t = function(e, t, n) {
                                        var o = e;
                                        if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                        e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: t
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, e.next = 6, new Promise((function(e) {
                                        return t(r.state.question.text, "qText", e)
                                    }));
                                case 6:
                                    return e.next = 8, new Promise((function(e) {
                                        return t(r.state.question.answers[0], "q1", e)
                                    }));
                                case 8:
                                    return e.next = 10, new Promise((function(e) {
                                        return t(r.state.question.answers[1], "q2", e)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13, new Promise((function(e) {
                                        return t(r.state.question.answers[2], "q3", e)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 16, new Promise((function(e) {
                                        return t(r.state.question.answers[3], "q4", e)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower && this.props.tower.questions && this.props.tower.questions.length ? o.a.createElement("div", {
                            className: u.isMobile ? m.a.mBody : m.a.body,
                            style: {
                                backgroundColor: "#292929"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(w.a, {
                            coins: this.props.tower.coins,
                            showRead: "question" === this.state.phase,
                            readQuestion: this.readQuestion
                        }), "question" === this.state.phase ? o.a.createElement(g.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId,
                            theme: "tower"
                        }) : "feedback" === this.state.phase ? o.a.createElement(b.a, {
                            incorrectTime: 3,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        }) : "welcome" === this.state.phase ? o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.welcomeText
                        }, "Answer 3 Questions Correctly to Rest")) : "rest" === this.state.phase ? o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.lifeContainer
                        }, o.a.createElement(C.a, {
                            currentLife: this.props.tower.life,
                            maxLife: 100
                        })), o.a.createElement("div", {
                            className: _.a.deckButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    showDeck: !0
                                })
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-layer-group", _.a.deckIcon)
                        }), o.a.createElement("div", {
                            className: _.a.deckText
                        }, "View Deck")), this.state.showDeck ? o.a.createElement("div", {
                            className: _.a.deckContainer
                        }, [].concat(L(this.props.tower.artifacts), L(this.props.tower.cards)).map((function(e, t) {
                            return o.a.createElement("div", {
                                className: _.a.cardContainer,
                                key: t
                            }, o.a.createElement(x.a, {
                                card: e,
                                flipped: !1,
                                isArtifact: !e.blook
                            }))
                        })), o.a.createElement("i", {
                            className: h()("fas fa-times", _.a.closeIcon),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    showDeck: !1
                                })
                            }
                        })) : null, o.a.createElement("div", {
                            className: _.a.chooseText
                        }, "Choose an Option"), o.a.createElement("div", {
                            className: _.a.restButtonContainer
                        }, o.a.createElement("div", {
                            className: _.a.restButton,
                            role: "button",
                            tabIndex: 0,
                            style: {
                                backgroundColor: "#ff9933"
                            },
                            onClick: function() {
                                return e.setState({
                                    phase: "upgradeSelect"
                                })
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-wrench", _.a.buttonIcon)
                        }), "Upgrade", o.a.createElement("span", {
                            style: {
                                fontSize: "2vw"
                            }
                        }, "+".concat(this.state.bonusStats, " Attributes"))), o.a.createElement("div", {
                            className: _.a.restButton,
                            role: "button",
                            tabIndex: 0,
                            style: {
                                backgroundColor: "#33cc33"
                            },
                            onClick: function() {
                                return e.onHeal()
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-medkit", _.a.buttonIcon)
                        }), "Recover", o.a.createElement("span", {
                            style: {
                                fontSize: "2vw"
                            }
                        }, "+".concat(this.state.healAmount, " Health"))))) : "upgradeSelect" === this.state.phase ? o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.upgradeText
                        }, "Choose a Card to Upgrade"), o.a.createElement("div", {
                            className: _.a.upgradeDeckContainer
                        }, this.props.tower.cards.map((function(t, r) {
                            return o.a.createElement("div", {
                                className: _.a.upgradeCardContainer,
                                key: r,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.selectCard(r)
                                }
                            }, o.a.createElement(x.a, {
                                card: t,
                                flipped: !1
                            }))
                        })))) : "upgradeReveal" === this.state.phase ? o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.upgradeText
                        }, "Adding +".concat(this.state.bonusStats, " to All Attributes")), o.a.createElement("div", {
                            className: _.a.cardReveal
                        }, o.a.createElement(x.a, {
                            card: this.state.card,
                            flipped: !1
                        }))) : "healing" === this.state.phase ? o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.upgradeText
                        }, "Adding +".concat(this.state.healAmount, " Health")), o.a.createElement("div", {
                            className: _.a.lifeHealContainer
                        }, o.a.createElement(C.a, {
                            currentLife: this.state.life,
                            maxLife: 100
                        }))) : null) : o.a.createElement(l.a, {
                            to: "/login"
                        })
                    }
                }]) && A(t.prototype, r), n && A(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            H.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                answerTower: c.a.func.isRequired,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerLife: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(T.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    answerTower: p.a,
                    setTowerCards: p.c,
                    setTowerStage: p.g,
                    setTowerLife: p.f
                }, e)
            }))(H)))
        },
        EbnR: function(e, t, r) {
            var n = r("L2c0");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        FEl8: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("ZTK6"),
                h = r("l7v6"),
                p = r.n(h),
                d = r("Xst1"),
                m = r.n(d),
                y = r("Rnav"),
                _ = r("XTAU"),
                w = r("74sb"),
                v = r("E8Bj"),
                g = r("qnYv");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new T(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(E([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == b(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function T(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = E, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function C(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function k(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function T(e, t) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
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
                    var r, n = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return S(this, r)
                }
            }

            function S(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return O(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var j = function(e) {
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
                }(c, e);
                var t, r, n, a, s, i = E(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        wins: 0
                    }, t.endGame = t.endGame.bind(O(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (a = x().mark((function e() {
                        var t = this;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && "victory" === this.props.tower.stage) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    g.a.put("/api/towers/victory").then((function(e) {
                                        t.setState({
                                            wins: e.data.wins
                                        })
                                    })).catch((function(e) {
                                        console.error(e), t.endGame()
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function s(e) {
                                C(o, r, n, s, i, "next", e)
                            }

                            function i(e) {
                                C(o, r, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "endGame",
                    value: function() {
                        this.props.setTowerStage("final"), this.props.history.push("/tower/final")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.tower && this.props.tower.hwId && (this.redirect = !1), this.redirect || !this.props.tower ? o.a.createElement(l.a, {
                            to: "/login"
                        }) : o.a.createElement("div", {
                            className: u.isMobile ? m.a.mBody : m.a.body,
                            style: {
                                backgroundColor: "#292929",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }, o.a.createElement(_.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(y.a, {
                            coins: this.props.tower.coins
                        }), this.state.wins > 0 ? o.a.createElement("div", {
                            className: p.a.container
                        }, o.a.createElement("div", {
                            className: p.a.header
                        }, "Victory"), o.a.createElement("div", {
                            className: p.a.winText
                        }, "You are the ".concat(Object(w.o)(this.state.wins)).concat(Object(w.h)(this.state.wins), " adventurer to ascend the Tower of Doom!")), o.a.createElement("div", {
                            className: p.a.endButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.endGame
                        }, "End Game")) : null)
                    }
                }]) && k(t.prototype, r), n && k(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            j.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                setTowerStage: c.a.func.isRequired
            };
            t.a = Object(v.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    setTowerStage: f.g
                }, e)
            }))(j)))
        },
        GgYP: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "c", (function() {
                return o
            })), r.d(t, "g", (function() {
                return a
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "f", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "e", (function() {
                return l
            }));
            var n = "ANSWER_TOWER",
                o = "SET_TOWER_CARDS",
                a = "SET_TOWER_STAGE",
                s = "SET_TOWER_COINS",
                i = "SET_TOWER_LIFE",
                c = "SET_TOWER_ARTIFACTS",
                l = "SET_TOWER_INSTRUCT"
        },
        "H+xr": function(e, t, r) {
            var n = r("6+nO");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        H0Bl: function(e, t, r) {
            "use strict";
            var n = r("74sb"),
                o = [
                    ["small", 60],
                    ["big", 13],
                    ["shop", 9],
                    ["rest", 8],
                    ["risk", 10]
                ],
                a = function() {
                    for (var e = 100 * Math.random(), t = 0, r = "", n = 0; n < o.length; n++)
                        if ((t += o[n][1]) >= e) {
                            r = o[n][0];
                            break
                        } return r
                };
            t.a = function() {
                for (var e = [], t = [], r = 5, o = function(o) {
                        e[o] = [0, 0, 0, 0, 0, 0, 0];
                        for (var s = 0 === Object(n.r)(0, 3) ? 3 : 4, i = Object(n.r)(s, 6), c = []; c.length < i;) {
                            var l = Object(n.r)(0, e[o].length);
                            c.includes(l) || c.push(l)
                        }
                        c.sort();
                        var u = 0;
                        c.forEach((function(n) {
                            var s = t.length + 1;
                            e[o][n] = s;
                            var i = Math.min(80, Math.max(8.5 * n + 24 + 8 * Math.random() - 4, u + 5));
                            t.push({
                                id: s,
                                y: r + 4 * Math.random() - 2,
                                x: i,
                                type: a(),
                                connected: []
                            }), u = i
                        })), r += 10
                    }, s = 0; s < 10; s++) o(s);
                for (var i = [], c = 0, l = 0; l < 9; l++) {
                    var u = e[l].map((function(e, t) {
                            return 0 !== e ? t : null
                        })).filter((function(e) {
                            return null !== e
                        })),
                        f = e[l + 1].map((function(e, t) {
                            return 0 !== e ? t : null
                        })).filter((function(e) {
                            return null !== e
                        }));
                    8 === l && (i = e[l + 1].filter((function(e) {
                        return 0 !== e
                    })));
                    for (var h = 0, p = !1, d = 0; d < e[l].length; d++)
                        if (u.includes(d)) {
                            var m = t[c],
                                y = !1,
                                _ = h;
                            if (p) {
                                var w = f.indexOf(h);
                                _ = w !== f.length - 1 && d - h > 1 ? f[w + 1] : h
                            }
                            for (; !y || _ <= (u[u.length - 1] === d ? e[l].length - 1 : d + 1);) 0 !== e[l + 1][_] && (m.connected.push(e[l + 1][_]), y = !0, h = _, p = !0), _ += 1;
                            c += 1
                        }
                }
                t.push({
                    id: t.length + 1,
                    x: 50,
                    y: 110,
                    color: "#fff",
                    type: "boss",
                    connected: []
                });
                for (var v = t.length, g = 0; g < i.length; g++) t[t.length - i.length - 1 + g].connected.push(v);
                return t
            }
        },
        L2c0: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__blook___a5BeJ-camelCase{width:30vw;position:absolute;top:55%;left:15vw;transform:rotate(-10deg) translateY(-50%)}.styles__textContainer___2aVBU-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:45%;height:90%;left:50%;top:5%}.styles__riskText___3qtBy-camelCase{text-shadow:2px 2px 8px grey;color:#fff;font-family:Nunito,sans-serif;font-weight:700;text-align:center;width:100%;font-size:3.5vw}.styles__buttonContainer___D4GM9-camelCase{flex-direction:row;justify-content:space-evenly;width:100%;margin-top:3.5vw}.styles__button___3GIx--camelCase,.styles__buttonContainer___D4GM9-camelCase{display:flex;align-items:center}.styles__button___3GIx--camelCase{justify-content:center;color:#fff;font-family:Nunito,sans-serif;font-weight:700;text-align:center;font-size:3vw;padding:.5vw 2vw;margin:0 auto;border:3px solid #fff;border-radius:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__button___3GIx--camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___1tlVx-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}@media only screen and (max-width:600px){.styles__lifeContainer___1tlVx-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__blook___a5BeJ-camelCase{width:50vw;top:7.5%;left:50%;transform:rotate(-10deg) translateX(-50%)}.styles__textContainer___2aVBU-camelCase{width:90%;height:50%;left:5%;top:55%}.styles__riskText___3qtBy-camelCase{font-size:6.75vw;line-height:6.95vw}.styles__buttonContainer___D4GM9-camelCase{margin-top:5vw}.styles__button___3GIx--camelCase{font-size:6vw;padding:1.5vw 3.5vw}.styles__button___3GIx--camelCase:hover{transform:scale(1)}}", ""]), t.locals = {
                blook: "styles__blook___a5BeJ-camelCase",
                textContainer: "styles__textContainer___2aVBU-camelCase",
                riskText: "styles__riskText___3qtBy-camelCase",
                buttonContainer: "styles__buttonContainer___D4GM9-camelCase",
                button: "styles__button___3GIx--camelCase",
                lifeContainer: "styles__lifeContainer___1tlVx-camelCase"
            }
        },
        MZQ5: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("+trR"),
                h = r("ZrUs"),
                p = r("afdj"),
                d = r.n(p),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("oQ+7"),
                w = r("XTAU"),
                v = r("E8Bj"),
                g = r("2ZNs"),
                b = r("dLfW"),
                x = r("qnYv");

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                k = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new T(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(E([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == C(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function T(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = E, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function T(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
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
                    var r, n = L(e);
                    if (t) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }

            function N(e, t) {
                if (t && ("object" === C(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var I = function(e) {
                    return o.a.createElement("div", {
                        className: d.a.stageText
                    }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
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
                        }), t && S(e, t)
                    }(c, e);
                    var t, r, n, a, s, i = O(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            stagesCleared: 0,
                            message: "",
                            name: ""
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(j(t)), t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (a = k().mark((function e() {
                            var t, r, n, o, a, s, i, c, l = this;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.tower && "final" === this.props.tower.stage) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        (t = e.sent) || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.tower && this.props.tower.resultId && x.a.put("/api/results", {
                                            id: this.props.tower.resultId,
                                            data: {
                                                corrects: this.props.tower.corrects,
                                                incorrects: this.props.tower.incorrects,
                                                stage: Number(this.props.tower.numNodes),
                                                alive: !1
                                            }
                                        }).catch((function(e) {
                                            return console.error(e)
                                        })), r = 0, n = 0, Object.values(this.props.tower.corrects).forEach((function(e) {
                                            r += e, n += e
                                        })), Object.values(this.props.tower.incorrects).forEach((function(e) {
                                            n += e
                                        })), o = Math.max(this.props.tower.numNodes - 1, 0), a = 34 - o, s = "Chick", i = 0, this.props.tower.cards.forEach((function(e) {
                                            var t = e.strength + e.charisma + e.wisdom;
                                            t > i && (i = t, s = e.blook)
                                        })), c = this.props.client && this.props.client.name ? this.props.client.name : "You", this.stats = {
                                            place: a,
                                            stagesCleared: o,
                                            correctAnswers: r,
                                            blookUsed: s,
                                            nameUsed: c
                                        }, t && (this.saveStats(t.name, (function() {})), x.a.put("/api/users/plan").then((function(e) {
                                            l.here && l.setState({
                                                ready: !0,
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || l.props.client && l.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        })), this.props.tower.towerId && x.a.delete("/api/towers", {
                                            params: {
                                                name: t.name,
                                                id: this.props.tower.towerId
                                            }
                                        }).catch((function(e) {
                                            console.error(e)
                                        }))), this.setState({
                                            numCorrect: r,
                                            numQuestions: n,
                                            stagesCleared: o,
                                            message: Object(b.a)((a - 1) / 33),
                                            ready: !this.props.tower.towerId || this.state.ready,
                                            standings: [{
                                                name: c,
                                                blook: s,
                                                place: a,
                                                stagesCleared: o
                                            }]
                                        });
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    T(o, r, n, s, i, "next", e)
                                }

                                function i(e) {
                                    T(o, r, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteTower(), this.props.deleteClient(), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            x.a.put("/api/users/towerstats", {
                                name: e,
                                place: this.stats.place,
                                stagesCleared: this.stats.stagesCleared,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.tower && this.props.tower.resultId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower) return o.a.createElement(l.a, {
                                to: "/login"
                            });
                            var e = this.props.tower && this.props.tower.resultId;
                            return o.a.createElement("div", {
                                className: u.isMobile ? y.a.mBody : y.a.body,
                                style: {
                                    backgroundColor: "#292929"
                                }
                            }, o.a.createElement(w.a, {
                                title: "Play Tower of Doom | Blooket",
                                desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                            }), o.a.createElement(_.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(g.a, {
                                standings: this.state.standings,
                                name: this.props.client && this.props.client.name ? this.props.client.name : "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
                                saveStats: this.saveStats,
                                renderStandingStat: I,
                                renderStats: function() {},
                                customMessage: this.state.message,
                                corrects: this.props.tower.corrects,
                                incorrects: this.props.tower.incorrects,
                                questions: this.props.tower.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null)
                        }
                    }]) && E(t.prototype, r), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            P.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                client: c.a.object,
                deleteTower: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(v.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteTower: f.a,
                    deleteClient: h.a
                }, e)
            }))(P)))
        },
        RYeQ: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___3plVF-camelCase{font-size:72px;font-family:Creepster,sans-serif;color:#b3ffb3;margin:30px auto 10px}.styles__header___3plVF-camelCase,.styles__subheader___1T2uN-camelCase{text-shadow:2px 2px 8px grey;text-align:center;width:80%}.styles__subheader___1T2uN-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700;color:#fff;margin:10px auto}.styles__network___yj8rt-camelCase{position:absolute;top:150px;left:-1px;width:100%;height:110vw;outline:none;border:none}.styles__buttonContainer___CJNfo-camelCase{position:absolute;top:0;right:0;padding:1vw;display:flex;flex-direction:column;align-items:flex-end}.styles__deckButton___35y_j-camelCase{display:flex;flex-direction:row;align-items:center;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;margin:0;transition:.2s}.styles__deckButton___35y_j-camelCase:hover{transform:scale(.95)}.styles__deckIcon___2iunN-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___2iunN-camelCase,.styles__deckText___1Kbx5-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___1Kbx5-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___1-JXm-camelCase{position:absolute;top:0;left:0;width:calc(100% - 10vw);min-height:calc(100% - 10vh);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__cardContainer___2V6kF-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___ef4JS-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___ef4JS-camelCase:focus,.styles__closeIcon___ef4JS-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___2DfEe-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}.styles__keyContainer___2sbk2-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;background-color:#292929;color:#fff;font-family:Nunito,sans-serif;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__keyHeader___3lvio-camelCase{font-size:52px;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;margin:10px auto}.styles__keyRow___2viu7-camelCase{display:flex;flex-direction:row;align-items:center;width:90%;margin:9px auto;font-size:18px}.styles__keyIcon___1fFUo-camelCase{width:60px;font-size:36px;text-align:center;margin-right:10px}@media only screen and (max-width:800px){.styles__header___3plVF-camelCase{font-size:52px;margin-top:70px}.styles__subheader___1T2uN-camelCase{font-size:24px}.styles__network___yj8rt-camelCase{top:200px}.styles__buttonContaner___2yH90-camelCase{right:0}.styles__deckButton___35y_j-camelCase{margin:2px 5px}.styles__deckIcon___2iunN-camelCase{font-size:22px}.styles__deckText___1Kbx5-camelCase{font-size:20px}.styles__deckContainer___1-JXm-camelCase{height:100%;overflow-y:auto}.styles__cardContainer___2V6kF-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___ef4JS-camelCase{top:2vw;right:2vw}.styles__lifeContainer___2DfEe-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__keyContainer___2sbk2-camelCase{min-width:100px;width:90%}}", ""]), t.locals = {
                header: "styles__header___3plVF-camelCase",
                subheader: "styles__subheader___1T2uN-camelCase",
                network: "styles__network___yj8rt-camelCase",
                buttonContainer: "styles__buttonContainer___CJNfo-camelCase",
                deckButton: "styles__deckButton___35y_j-camelCase",
                deckIcon: "styles__deckIcon___2iunN-camelCase",
                deckText: "styles__deckText___1Kbx5-camelCase",
                deckContainer: "styles__deckContainer___1-JXm-camelCase",
                cardContainer: "styles__cardContainer___2V6kF-camelCase",
                closeIcon: "styles__closeIcon___ef4JS-camelCase",
                lifeContainer: "styles__lifeContainer___2DfEe-camelCase",
                keyContainer: "styles__keyContainer___2sbk2-camelCase",
                keyHeader: "styles__keyHeader___3lvio-camelCase",
                keyRow: "styles__keyRow___2viu7-camelCase",
                keyIcon: "styles__keyIcon___1fFUo-camelCase",
                buttonContaner: "styles__buttonContaner___2yH90-camelCase"
            }
        },
        SEuU: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = "DELETE_TOWER"
        },
        VIao: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = "NEW_TOWER_LEVEL"
        },
        XprQ: function(e, t, r) {
            var n = r("32v5");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        "ZG/c": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("w2Ah"),
                f = r("H1WH"),
                h = r("TSYQ"),
                p = r.n(h),
                d = r("A0Lk"),
                m = r.n(d),
                y = r("Dq49"),
                _ = r("ZTK6"),
                w = r("hcJe"),
                v = r("Xst1"),
                g = r.n(v),
                b = r("nmSx"),
                x = r.n(b),
                C = r("Rnav"),
                k = r("XTAU"),
                T = r("9TPi"),
                E = r("XprQ"),
                S = r.n(E),
                O = [{
                    text: "This is the map of the 1st level. Each time you play, the maps for each level will be different.",
                    nextButtonText: "Next",
                    className: S.a.centered
                }, {
                    text: "Your goal is to go down the map. Each time you're on this page, you have to pick a highlighted icon to enter that stage.",
                    nextButtonText: "Next",
                    className: S.a.centered
                }, {
                    elementId: "buttonContainer",
                    backgroundColor: "#292929",
                    text: "You can use the 'View Deck' button to view your current Deck, and the 'Map Key' is helpful to learn about what the map icons mean.",
                    nextButtonText: "Next",
                    className: S.a.topRight
                }, {
                    text: "Once you choose a stage, you can't go back. You'll only be able to enter stages lower on the map that are connected by the paths.",
                    nextButtonText: "Next",
                    className: S.a.centered
                }, {
                    text: "Go ahead and click a non-white icon now to enter that stage. Good Luck!",
                    nextButtonText: "Done",
                    className: S.a.centered
                }],
                N = r("E8Bj"),
                j = r("lWrb"),
                L = r("Truy"),
                I = r("74sb"),
                P = r("qnYv");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function B() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == R(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function D(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function M(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function G(e, t) {
                return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
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
                    var r, n = F(e);
                    if (t) {
                        var o = F(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return H(this, r)
                }
            }

            function H(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function F(e) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var W = {
                    small: {
                        code: "",
                        color: "#6666ff",
                        size: Object(I.D)("1.7vw")
                    },
                    big: {
                        code: "",
                        color: "#ff5050",
                        size: Object(I.D)("2.5vw")
                    },
                    shop: {
                        code: "",
                        color: "#ffff66",
                        size: Object(I.D)("2vw")
                    },
                    rest: {
                        code: "",
                        color: "#ffa31a",
                        size: Object(I.D)("2vw")
                    },
                    risk: {
                        code: "",
                        color: "#cc33ff",
                        size: Object(I.D)("2.2vw")
                    },
                    boss: {
                        code: "",
                        color: "#990000",
                        size: Object(I.D)("7vw")
                    }
                },
                Y = function(e) {
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
                    }(c, e);
                    var t, r, n, a, s, i = z(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            showDeck: !1,
                            showKey: !1,
                            showTour: e.tower && 0 === e.tower.currentNode && e.tower.instruct
                        }, t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (a = B().mark((function e() {
                            var t, r, n, o, a, s, i, c, l, h, p = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.tower && "map" === this.props.tower.stage) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.tower && this.props.tower.resultId && P.a.put("/api/results", {
                                            id: this.props.tower.resultId,
                                            data: {
                                                corrects: this.props.tower.corrects,
                                                incorrects: this.props.tower.incorrects,
                                                stage: Number(this.props.tower.numNodes),
                                                alive: !0
                                            }
                                        }).catch((function(e) {
                                            return console.error(e)
                                        })), t = this.props.tower.currentNode, r = this.props.tower.mapNodes, n = 0 === t ? r.filter((function(e) {
                                            return e.y < 10
                                        })).map((function(e) {
                                            return e.id
                                        })) : r.filter((function(e) {
                                            return e.id === t
                                        }))[0].connected, o = new u.DataSet(r.map((function(e) {
                                            return {
                                                id: e.id,
                                                x: Object(I.D)("".concat(f.isMobile ? e.x + .5 * (e.x - 50) : e.x, "vw")),
                                                y: Object(I.D)("".concat(e.y).concat(f.isMobile ? "vh" : "vw")),
                                                color: "#fff",
                                                shape: "icon",
                                                icon: {
                                                    face: '"Font Awesome 5 Free"',
                                                    weight: "bold",
                                                    code: t === e.id ? "" : W[e.type].code,
                                                    color: t === e.id || p.props.tower.nodePath.includes(e.id) ? "#fff" : n.includes(e.id) ? W[e.type].color : "rgba(255, 255, 255, 0.6)",
                                                    size: t === e.id ? Object(I.D)(f.isMobile ? "3.5vh" : "3vw") : n.includes(e.id) ? W[e.type].size + Object(I.D)("1.2vw") : W[e.type].size
                                                }
                                            }
                                        }))), a = [], r.forEach((function(e) {
                                            e.connected.forEach((function(r) {
                                                a.push({
                                                    from: e.id,
                                                    to: r,
                                                    width: e.id === t || p.props.tower.nodePath.includes(e.id) && [].concat(A(p.props.tower.nodePath), [e.id]).includes(r) ? 3 : 1
                                                })
                                            }))
                                        })), s = new u.DataSet(a), i = document.getElementById("mynetwork"), c = {
                                            nodes: o,
                                            edges: s
                                        }, l = {
                                            interaction: {
                                                dragNodes: !1,
                                                zoomView: !1,
                                                dragView: !0,
                                                selectConnectedEdges: !1
                                            },
                                            autoResize: !1,
                                            physics: !1,
                                            height: "".concat(Object(I.D)(f.isMobile ? "110vh" : "110vw"), "px"),
                                            width: "100%",
                                            edges: {
                                                dashes: !0,
                                                smooth: !1
                                            }
                                        }, (h = new u.Network(i, c, l)).on("selectNode", (function(e) {
                                            if (n.includes(e.nodes[0])) {
                                                var t = [].concat(A(p.props.tower.nodePath), [e.nodes[0]]),
                                                    o = p.props.tower.numNodes + 1;
                                                p.props.addTowerNode(e.nodes[0]);
                                                var a = r.filter((function(t) {
                                                    return t.id === e.nodes[0]
                                                }))[0];
                                                if (p.props.tower.towerId) switch (a.type) {
                                                    case "shop":
                                                    case "rest":
                                                        P.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id
                                                        }).then((function() {
                                                            p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type))
                                                        })).catch((function(e) {
                                                            console.error(e)
                                                        }));
                                                        break;
                                                    case "risk":
                                                        P.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id,
                                                            enemy: p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(I.p)(["+", "+", "-"]) : Object(I.p)(["-", "-", "+"])
                                                        }).then((function(e) {
                                                            p.props.setTowerEnemy(e.data.enemy, "small"), p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type))
                                                        })).catch((function(e) {
                                                            console.error(e)
                                                        }));
                                                        break;
                                                    case "small":
                                                    case "big":
                                                    case "boss":
                                                        P.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id,
                                                            enemy: Object(w.b)(a.type, p.props.tower.level)
                                                        }).then((function(e) {
                                                            p.props.setTowerEnemy(e.data.enemy, a.type), p.props.history.push("/tower/battle")
                                                        })).catch((function(e) {
                                                            console.error(e)
                                                        }))
                                                } else switch (a.type) {
                                                    case "shop":
                                                    case "rest":
                                                        p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type));
                                                        break;
                                                    case "risk":
                                                        p.props.setTowerEnemy(p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(I.p)(["+", "+", "-"]) : Object(I.p)(["-", "-", "+"]), "small"), p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type));
                                                        break;
                                                    case "small":
                                                    case "big":
                                                    case "boss":
                                                        p.props.setTowerEnemy(Object(w.b)(a.type, p.props.tower.level), a.type), p.props.history.push("/tower/battle")
                                                }
                                            }
                                        })), new m.a("FontAwesome", {}).load("", 12500).then((function() {
                                            p.redrawTimeout = setTimeout((function() {
                                                h.redraw()
                                            }), 1e3)
                                        }));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    D(o, r, n, s, i, "next", e)
                                }

                                function i(e) {
                                    D(o, r, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.redrawTimeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? o.a.createElement(l.a, {
                                to: "/login"
                            }) : o.a.createElement("div", {
                                className: f.isMobile ? g.a.mBody : g.a.body,
                                id: "body",
                                style: {
                                    backgroundColor: "#292929",
                                    overflow: f.isMobile ? "hidden" : null,
                                    height: f.isMobile ? "100%" : null
                                }
                            }, o.a.createElement(k.a, {
                                title: "Play Tower of Doom | Blooket",
                                desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                            }), o.a.createElement(C.a, {
                                coins: this.props.tower.coins
                            }), o.a.createElement("div", {
                                className: g.a.regularBody,
                                id: "regularBody"
                            }, this.state.showTour ? o.a.createElement(T.a, {
                                steps: O,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                }
                            }) : null, o.a.createElement("div", {
                                className: x.a.header
                            }, 3 === this.props.tower.level ? "Final Map" : "Level ".concat(this.props.tower.level, " Map")), o.a.createElement("div", {
                                className: x.a.subheader
                            }, "Choose a Highlighted Location"), o.a.createElement("div", {
                                className: x.a.buttonContainer,
                                id: "buttonContainer"
                            }, o.a.createElement("div", {
                                className: x.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.showTour ? function() {} : function() {
                                    return e.setState({
                                        showDeck: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: p()("fas fa-layer-group", x.a.deckIcon)
                            }), o.a.createElement("div", {
                                className: x.a.deckText
                            }, "View Deck")), o.a.createElement("div", {
                                className: x.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.showTour ? function() {} : function() {
                                    return e.setState({
                                        showKey: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: p()("fas fa-map", x.a.deckIcon)
                            }), o.a.createElement("div", {
                                className: x.a.deckText
                            }, "Map Key"))), o.a.createElement("div", {
                                className: x.a.lifeContainer
                            }, o.a.createElement(L.a, {
                                currentLife: this.props.tower.life,
                                maxLife: 100
                            })), o.a.createElement("div", {
                                id: "mynetwork",
                                className: x.a.network
                            }), this.state.showDeck ? o.a.createElement("div", {
                                className: x.a.deckContainer
                            }, [].concat(A(this.props.tower.artifacts), A(this.props.tower.cards)).map((function(e, t) {
                                return o.a.createElement("div", {
                                    className: x.a.cardContainer,
                                    key: t
                                }, o.a.createElement(j.a, {
                                    card: e,
                                    flipped: !1,
                                    isArtifact: !e.blook
                                }))
                            })), o.a.createElement("i", {
                                className: p()("fas fa-times", x.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !1
                                    })
                                }
                            })) : this.state.showKey ? o.a.createElement("div", {
                                className: g.a.modal,
                                style: {
                                    top: 55,
                                    height: "calc(100% - 55px)"
                                }
                            }, o.a.createElement("div", {
                                className: x.a.keyContainer
                            }, o.a.createElement("div", {
                                className: x.a.keyHeader
                            }, "Map Key"), o.a.createElement("i", {
                                className: p()("fas fa-times", x.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showKey: !1
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-bed", x.a.keyIcon),
                                style: {
                                    color: "#ffa31a"
                                }
                            }), "Rest to restore health or upgrade cards"), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-question", x.a.keyIcon),
                                style: {
                                    color: "#cc33ff"
                                }
                            }), "Take a risk with your health and cards"), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-store", x.a.keyIcon),
                                style: {
                                    color: "#ffff66"
                                }
                            }), "Use coins to remove cards or buy new ones"), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-robot", x.a.keyIcon),
                                style: {
                                    color: "#6666ff"
                                }
                            }), "Fight an easy enemy for a small reward"), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-skull", x.a.keyIcon),
                                style: {
                                    color: "#ff5050"
                                }
                            }), "Fight a larger enemy for a better reward"), o.a.createElement("div", {
                                className: x.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-exclamation-triangle", x.a.keyIcon),
                                style: {
                                    color: "#990000"
                                }
                            }), "Fight the boss to clear the level"), o.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : null))
                        }
                    }]) && M(t.prototype, r), n && M(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            Y.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                setTowerEnemy: c.a.func.isRequired,
                addTowerNode: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(N.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    setTowerEnemy: y.b,
                    addTowerNode: y.a,
                    setTowerStage: _.g
                }, e)
            }))(Y)))
        },
        ZTK6: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            })), r.d(t, "c", (function() {
                return a
            })), r.d(t, "g", (function() {
                return s
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "f", (function() {
                return c
            })), r.d(t, "b", (function() {
                return l
            })), r.d(t, "e", (function() {
                return u
            }));
            var n = r("GgYP");

            function o(e, t, r) {
                return {
                    type: n.a,
                    corrects: e,
                    incorrects: t,
                    freeQuestions: r
                }
            }

            function a(e) {
                return {
                    type: n.c,
                    cards: e
                }
            }

            function s(e) {
                return {
                    type: n.g,
                    stage: e
                }
            }

            function i(e) {
                return {
                    type: n.d,
                    coins: e
                }
            }

            function c(e) {
                return {
                    type: n.f,
                    life: e
                }
            }

            function l(e) {
                return {
                    type: n.b,
                    artifacts: e
                }
            }

            function u(e) {
                return {
                    type: n.e,
                    instruct: e
                }
            }
        },
        afdj: function(e, t, r) {
            var n = r("w6lF");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        ciu7: function(e, t, r) {
            var n = r("rhfU");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        dHXX: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = "SET_TOWER_ENEMY",
                o = "ADD_TOWER_NODE"
        },
        dXfR: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___12aUr-camelCase{font-size:8vw;width:80%;margin:0 5%;text-align:left;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___2amXV-camelCase{width:80%;margin:40px 5% 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___1htei-camelCase{font-size:3vw;font-family:Creepster,sans-serif;font-weight:700;text-shadow:2px 2px 8px grey;color:#fff;opacity:.8;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___1htei-camelCase:hover{transform:scale(1.05);opacity:1}.styles__cardContainer___2ccAJ-camelCase{width:25vw;height:32.5vw;z-index:-1;position:absolute}.styles__card1___1tNIz-camelCase{top:50%;left:80%;transform:scale(.65) rotate(-20deg) translate(-50%,-50%)}.styles__card2___EvByM-camelCase{top:20%;left:60%;transform:scale(.65) rotate(10deg) translate(-50%,-50%)}.styles__card3___2N_G4-camelCase{top:20%;left:40%;transform:scale(.65) rotate(5deg) translate(-50%,-50%)}.styles__card4___1zJ2J-camelCase{top:55%;left:50%;transform:scale(.65) rotate(-10deg) translate(-50%,-50%)}.styles__card5___1_Kl2-camelCase{top:19%;left:80%;transform:scale(.65) rotate(15deg) translate(-50%,-50%)}.styles__loginText___KKoDX-camelCase{position:absolute;bottom:1%;width:90%;left:5%;font-size:18px;font-family:Nunito,sans-serif}.styles__loginText___KKoDX-camelCase,.styles__savesHeader___2Xx3P-camelCase{text-align:center;text-shadow:2px 2px 8px grey;color:#fff}.styles__savesHeader___2Xx3P-camelCase{font-size:68px;width:80%;margin:70px 10% 50px;font-family:Creepster,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__savesHolder___2467j-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3f4Nw-camelCase{background-color:#404040;border:7px solid #333;border-radius:6px;display:flex;flex-direction:column;max-width:300px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___3lYYt-camelCase{font-size:42px;line-height:45px;margin:5px 5% 0}.styles__saveSubTitle___3RgzW-camelCase,.styles__saveTitle___3lYYt-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___3RgzW-camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___2bI0C-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___3ooT1-camelCase{width:38px;text-align:center;margin-left:5px}.styles__saveHealthHolder___Jh1G0-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___3PCZo-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___1rFRR-camelCase{background-color:#404040;border:7px solid #333;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___1rFRR-camelCase:hover{transform:scale(.95)}.styles__emptySave___2KNXU-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___1jrG_-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;text-shadow:2px 2px 8px grey}.styles__backButton___1jrG_-camelCase,.styles__stageText___zNmJB-camelCase{font-family:Nunito,sans-serif}.styles__stageText___zNmJB-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___12aUr-camelCase{font-size:25vw}.styles__button___1htei-camelCase{font-size:10vw}.styles__cardContainer___2ccAJ-camelCase{display:none;opacity:0}.styles__savesHolder___2467j-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3f4Nw-camelCase{width:300px;margin:15px 20px}.styles__savesHeader___2Xx3P-camelCase{font-size:68px;margin:40px 10% 10px}.styles__backButton___1jrG_-camelCase{font-size:26px}}", ""]), t.locals = {
                header: "styles__header___12aUr-camelCase",
                buttonContainer: "styles__buttonContainer___2amXV-camelCase",
                button: "styles__button___1htei-camelCase",
                cardContainer: "styles__cardContainer___2ccAJ-camelCase",
                card1: "styles__card1___1tNIz-camelCase",
                card2: "styles__card2___EvByM-camelCase",
                card3: "styles__card3___2N_G4-camelCase",
                card4: "styles__card4___1zJ2J-camelCase",
                card5: "styles__card5___1_Kl2-camelCase",
                loginText: "styles__loginText___KKoDX-camelCase",
                savesHeader: "styles__savesHeader___2Xx3P-camelCase",
                savesHolder: "styles__savesHolder___2467j-camelCase",
                saveContainer: "styles__saveContainer___3f4Nw-camelCase",
                saveTitle: "styles__saveTitle___3lYYt-camelCase",
                saveSubTitle: "styles__saveSubTitle___3RgzW-camelCase",
                saveRow: "styles__saveRow___2bI0C-camelCase",
                saveIcon: "styles__saveIcon___3ooT1-camelCase",
                saveHealthHolder: "styles__saveHealthHolder___Jh1G0-camelCase",
                saveHealthBar: "styles__saveHealthBar___3PCZo-camelCase",
                loadButton: "styles__loadButton___1rFRR-camelCase",
                emptySave: "styles__emptySave___2KNXU-camelCase",
                backButton: "styles__backButton___1jrG_-camelCase",
                stageText: "styles__stageText___zNmJB-camelCase"
            }
        },
        fLLE: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__deckButton___3ggQR-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___3ggQR-camelCase:hover{transform:scale(1.05)}.styles__leaveButton___3WDUM-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;bottom:1vw;right:1vw;color:#ff5050;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__leaveButton___3WDUM-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___2RNz9-camelCase{font-size:27px;margin-right:10px}.styles__deckText___3LMeb-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___1Xlyp-camelCase{position:absolute;top:0;left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__cardContainer___2E4v0-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___gnqMR-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___gnqMR-camelCase:focus,.styles__closeIcon___gnqMR-camelCase:hover{transform:scale(1.05)}.styles__shopContainer___2Dw-A-camelCase{flex-direction:row;width:75vw;height:95%;margin:auto auto auto 14vw}.styles__cardsHolder___2Q3m4-camelCase,.styles__shopContainer___2Dw-A-camelCase{display:flex;align-items:center}.styles__cardsHolder___2Q3m4-camelCase{flex-flow:row wrap;justify-content:center;width:82.5%;height:100%}.styles__shopCardContainer___2Nxgl-camelCase{display:flex;flex-direction:column;width:25vw;transform:scale(.55);margin:-9vw -3.25vw;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__shopCardContainer___2Nxgl-camelCase:hover{transform:scale(.53)}.styles__priceText___fGWiF-camelCase{font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;width:100%;text-align:center;margin-top:.5vw;font-size:3.5vw;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__priceIcon___121Hl-camelCase{margin-left:1vw;font-size:3vw}.styles__removeButton___2KSZb-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;font-size:2.5vw;line-height:2.65vw;box-shadow:0 0 8px 3px rgba(0,0,0,.2);height:50%;width:17.5%;margin:auto;border-radius:6px;background-color:#ff5050;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__removeButton___2KSZb-camelCase:hover{transform:scale(.95)}.styles__removeButtonText___1ckw6-camelCase{margin:0 auto}.styles__removeIcon___25wZY-camelCase{font-size:6vw;margin:2vw auto}.styles__removeCost___1arir-camelCase{display:flex;flex-direction:row;align-items:center;font-size:2.5vw;margin:0 auto}.styles__removeCostIcon___29GDz-camelCase{margin-left:1vw;font-size:2.2vw}.styles__removeDeckContainer___3SXec-camelCase{position:absolute;top:calc(10% + 3vw);left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;z-index:3;display:flex;flex-flow:row wrap;-webkit-animation:styles__fadeIn___3YkFX-camelCase .3s;animation:styles__fadeIn___3YkFX-camelCase .3s}.styles__removeCardContainer___2C43w-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;transition:.2s}.styles__removeCardContainer___2C43w-camelCase:hover{transform:scale(.75)}.styles__removeText___3kbQl-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:5vw;position:absolute;width:80%;top:5%;left:10%;text-align:center;-webkit-animation:styles__fadeIn___3YkFX-camelCase .3s;animation:styles__fadeIn___3YkFX-camelCase .3s}.styles__backButton___1CFT9-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;left:1vw;color:#fff;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__backButton___1CFT9-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___1i1BT-camelCase{position:absolute;top:0;left:0;transform:scale(.6);height:15vw;width:15vw}.styles__cardRemove___2IWhZ-camelCase{width:25vw;height:32.5vw;position:absolute;top:calc(50% - 12vw);left:calc(50% - 12.5vw);-webkit-animation:styles__spinRemove___2R4Y6-camelCase 4s ease-in .5s forwards;animation:styles__spinRemove___2R4Y6-camelCase 4s ease-in .5s forwards}@-webkit-keyframes styles__spinRemove___2R4Y6-camelCase{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(10turn) scale(0)}}@keyframes styles__spinRemove___2R4Y6-camelCase{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(10turn) scale(0)}}@-webkit-keyframes styles__fadeIn___3YkFX-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3YkFX-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__deckButton___3ggQR-camelCase{right:0}.styles__deckButton___3ggQR-camelCase,.styles__deckButton___3ggQR-camelCase:hover{transform:scale(.8)}.styles__deckContainer___1Xlyp-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___gnqMR-camelCase{top:5vw;right:8.5vw}.styles__lifeContainer___1i1BT-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__shopContainer___2Dw-A-camelCase{flex-direction:column;margin:20% auto 5%;align-items:center;width:95%;height:75%}.styles__removeButton___2KSZb-camelCase{flex-direction:row;justify-content:space-evenly;font-size:5vw;line-height:5.15vw;height:15%;width:75%;margin:auto}.styles__removeIcon___25wZY-camelCase{display:none}.styles__removeCost___1arir-camelCase{font-weight:700;font-size:5.5vw}.styles__removeCostIcon___29GDz-camelCase{margin-left:3vw;font-size:5.2vw}.styles__shopCardContainer___2Nxgl-camelCase{width:25vw;height:32.5vw;margin:-4vw 3vw}.styles__shopCardContainer___2Nxgl-camelCase,.styles__shopCardContainer___2Nxgl-camelCase:hover{transform:scale(.95)}.styles__priceText___fGWiF-camelCase{margin-top:2vw}.styles__cardsHolder___2Q3m4-camelCase{display:flex;flex-flow:row wrap;justify-content:center;align-items:center;width:100%}.styles__removeText___3kbQl-camelCase{font-size:9vw;top:7.5%}.styles__removeDeckContainer___3SXec-camelCase{top:17.5%;align-content:flex-start;min-height:75%;width:95%;padding:5% 2.5%}.styles__removeCardContainer___2C43w-camelCase{width:25vw;height:32.5vw;transform:scale(.95);margin:2vw 3vw}.styles__removeCardContainer___2C43w-camelCase:hover{transform:scale(.95)}.styles__cardRemove___2IWhZ-camelCase{transform:scale(1.5);-webkit-animation:styles__spinRemove___2R4Y6-camelCase 4s ease-in .5s forwards;animation:styles__spinRemove___2R4Y6-camelCase 4s ease-in .5s forwards}@-webkit-keyframes styles__spinRemove___2R4Y6-camelCase{0%{transform:rotate(0deg) scale(1.5)}to{transform:rotate(10turn) scale(0)}}@keyframes styles__spinRemove___2R4Y6-camelCase{0%{transform:rotate(0deg) scale(1.5)}to{transform:rotate(10turn) scale(0)}}}", ""]), t.locals = {
                deckButton: "styles__deckButton___3ggQR-camelCase",
                leaveButton: "styles__leaveButton___3WDUM-camelCase",
                deckIcon: "styles__deckIcon___2RNz9-camelCase",
                deckText: "styles__deckText___3LMeb-camelCase",
                deckContainer: "styles__deckContainer___1Xlyp-camelCase",
                cardContainer: "styles__cardContainer___2E4v0-camelCase",
                closeIcon: "styles__closeIcon___gnqMR-camelCase",
                shopContainer: "styles__shopContainer___2Dw-A-camelCase",
                cardsHolder: "styles__cardsHolder___2Q3m4-camelCase",
                shopCardContainer: "styles__shopCardContainer___2Nxgl-camelCase",
                priceText: "styles__priceText___fGWiF-camelCase",
                priceIcon: "styles__priceIcon___121Hl-camelCase",
                removeButton: "styles__removeButton___2KSZb-camelCase",
                removeButtonText: "styles__removeButtonText___1ckw6-camelCase",
                removeIcon: "styles__removeIcon___25wZY-camelCase",
                removeCost: "styles__removeCost___1arir-camelCase",
                removeCostIcon: "styles__removeCostIcon___29GDz-camelCase",
                removeDeckContainer: "styles__removeDeckContainer___3SXec-camelCase",
                fadeIn: "styles__fadeIn___3YkFX-camelCase",
                removeCardContainer: "styles__removeCardContainer___2C43w-camelCase",
                removeText: "styles__removeText___3kbQl-camelCase",
                backButton: "styles__backButton___1CFT9-camelCase",
                lifeContainer: "styles__lifeContainer___1i1BT-camelCase",
                cardRemove: "styles__cardRemove___2IWhZ-camelCase",
                spinRemove: "styles__spinRemove___2R4Y6-camelCase"
            }
        },
        hcJe: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            })), r.d(t, "b", (function() {
                return s
            }));
            var n = r("74sb"),
                o = {
                    Chicken: {
                        maxLife: 25,
                        deckBlooks: ["Chick", "Chick", "Chicken", "Chicken", "Duck", "Duck", "Cow", "Pig", "Jester", "Cheshire Cat"]
                    },
                    Pig: {
                        maxLife: 40,
                        deckBlooks: ["Pig", "Pig", "Cow", "Cow", "Goat", "Walrus", "Sheep", "Horse", "Slime Monster", "Dormouse"]
                    },
                    Dog: {
                        maxLife: 28,
                        deckBlooks: ["Dog", "Dog", "Puppy", "Puppy", "Bear", "Goldfish", "Turtle", "Moose", "Walrus", "Gingerbread Man", "Eat Me", "Two of Spades"]
                    },
                    Cat: {
                        maxLife: 30,
                        deckBlooks: ["Cat", "Cat", "Kitten", "Kitten", "Rabbit", "Hamster", "Turtle", "Tiger", "Panther", "Unicorn", "Cheshire Cat"]
                    },
                    Bear: {
                        maxLife: 43,
                        deckBlooks: ["Bear", "Bear", "Polar Bear", "Penguin", "Orangutan", "Moose", "Fox", "Tiger", "Dragon", "Queen of Hearts"]
                    },
                    Raccoon: {
                        maxLife: 27,
                        deckBlooks: ["Raccoon", "Raccoon", "Raccoon", "Fox", "Squirrel", "Owl", "Hedgehog", "Anaconda", "Goldfish", "Jester", "Cheshire Cat"]
                    },
                    Tiger: {
                        maxLife: 33,
                        deckBlooks: ["Tiger", "Tiger", "Orangutan", "Panther", "Jaguar", "Toucan", "Macaw", "Horse", "Walrus", "Queen of Hearts"]
                    },
                    Parrot: {
                        maxLife: 32,
                        deckBlooks: ["Parrot", "Parrot", "Macaw", "Toucan", "Cockatoo", "Cockatoo", "Owl", "Snowy Owl", "Tiger", "Wizard", "Mad Hatter"]
                    },
                    "Arctic Fox": {
                        maxLife: 30,
                        deckBlooks: ["Arctic Fox", "Arctic Fox", "Fox", "Penguin", "Snowy Owl", "Polar Bear", "Baby Penguin", "Arctic Hare", "Seal", "Walrus", "Walrus", "Fairy", "Drink Me", "Alice"]
                    },
                    Panther: {
                        maxLife: 35,
                        deckBlooks: ["Panther", "Panther", "Tiger", "Orangutan", "Owl", "Raccoon", "Cow", "Baby Penguin", "Penguin", "Kitten", "Puppy", "Witch", "Dormouse"]
                    },
                    Rabbit: {
                        maxLife: 41,
                        deckBlooks: ["Rabbit", "Rabbit", "Hamster", "Arctic Hare", "Baby Penguin", "Raccoon", "Fox", "Puppy", "White Rabbit", "Squirrel", "Cheshire Cat"]
                    },
                    Orangutan: {
                        maxLife: 48,
                        deckBlooks: ["Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "King of Hearts"]
                    },
                    Witch: {
                        maxLife: 65,
                        deckBlooks: ["Witch", "Witch", "Wizard", "Wizard", "Fairy", "Dragon", "White Rabbit", "Caterpillar", "Turtle", "Owl", "Snowy Owl", "Horse"]
                    },
                    "Slime Monster": {
                        maxLife: 73,
                        deckBlooks: ["Slime Monster", "Slime Monster", "Bear", "Walrus", "Tiger", "Hedgehog", "Wizard", "Dragon", "Dormouse", "Queen of Hearts"]
                    },
                    Dragon: {
                        maxLife: 67,
                        deckBlooks: ["Dragon", "Dragon", "Jester", "Wizard", "Elf", "Moose", "Jaguar", "Tiger", "Dormouse", "Queen of Hearts", "Eat Me"]
                    },
                    "Gingerbread Man": {
                        maxLife: 63,
                        deckBlooks: ["Gingerbread Man", "Gingerbread Man", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread House", "Gingerbread House", "Snowy Owl", "Penguin", "Cheshire Cat", "Walrus", "Polar Bear"]
                    },
                    Elf: {
                        maxLife: 56,
                        deckBlooks: ["Elf", "Elf", "Fairy", "Slime Monster", "Dragon", "Anaconda", "Turtle", "Capuchin", "Witch", "Two of Spades", "Wizard", "White Rabbit"]
                    },
                    Jester: {
                        maxLife: 58,
                        deckBlooks: ["Jester", "Jester", "Chick", "Parrot", "Macaw", "Slime Monster", "Mad Hatter", "Cheshire Cat", "Eat Me", "Drink Me", "Queen of Hearts"]
                    },
                    Alice: {
                        maxLife: 54,
                        deckBlooks: ["Alice", "Alice", "Cheshire Cat", "Drink Me", "Eat Me", "Two of Spades", "Dormouse", "White Rabbit", "Unicorn", "Parrot", "Macaw", "Seal"]
                    },
                    Unicorn: {
                        maxLife: 70,
                        deckBlooks: ["Unicorn", "Unicorn", "Witch", "Wizard", "Dragon", "Queen", "White Rabbit", "Cheshire Cat", "Jester", "Caterpillar", "Snowman", "Horse", "Jaguar", "Tiger", "Orangutan"]
                    },
                    "Santa Claus": {
                        maxLife: 90,
                        deckBlooks: ["Santa Claus", "Santa Claus", "Snowman", "Snowman", "Gingerbread Man", "Gingerbread Man", "Gingerbread House", "Holiday Wreath", "Hot Chocolate", "Holiday Gift", "Snow Globe", "Penguin", "White Rabbit", "Eat Me", "Walrus"]
                    },
                    King: {
                        maxLife: 130,
                        deckBlooks: ["King", "King", "King of Hearts", "King of Hearts", "Caterpillar", "Unicorn", "Santa Claus", "Jester", "Dragon", "Elf", "Witch", "Wizard", "Slime Monster", "White Rabbit", "Cheshire Cat", "Alice", "Queen", "Two of Spades", "Fairy"]
                    }
                },
                a = {
                    small: ["Chicken", "Pig", "Dog", "Cat", "Bear", "Raccoon", "Tiger", "Parrot", "Arctic Fox", "Panther", "Rabbit", "Orangutan"],
                    big: ["Witch", "Slime Monster", "Dragon", "Gingerbread Man", "Elf", "Jester", "Alice"],
                    boss: ["Unicorn", "Santa Claus", "King"]
                },
                s = function(e, t) {
                    return "boss" === e ? a.boss[t - 1] : Object(n.p)(a[e])
                }
        },
        jT6b: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("ZTK6"),
                h = r("EbnR"),
                p = r.n(h),
                d = r("Xst1"),
                m = r.n(d),
                y = r("Rnav"),
                _ = r("XTAU"),
                w = r("E8Bj"),
                v = r("74sb"),
                g = r("gvfT"),
                b = function(e, t) {
                    var r = {},
                        n = 0;
                    if ("+" === t) {
                        n = Math.round(.01 * Object(v.r)(25, 41) * (100 - e)) || 10;
                        var o = Object(v.p)(g.b[0 === Object(v.r)(0, 2) ? "uncommon" : "rare"]);
                        r = {
                            blook: o,
                            strength: Object(v.r)(16, 19),
                            charisma: Object(v.r)(16, 19),
                            wisdom: Object(v.r)(16, 19),
                            class: g.c[o].class
                        }
                    } else {
                        n = -Math.round(.01 * Object(v.r)(30, 46) * e) || -10;
                        var a = Object(v.p)(g.b.common);
                        r = {
                            blook: a,
                            strength: Object(v.r)(0, 5),
                            charisma: Object(v.r)(0, 5),
                            wisdom: Object(v.r)(0, 5),
                            class: g.c[a].class
                        }
                    }
                    return {
                        card: r,
                        health: n
                    }
                },
                x = r("Truy"),
                C = r("0oXL"),
                k = r("qnYv");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return E()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == T(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function N(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function j(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function L(e, t) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function I(e) {
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
                    var r, n = B(e);
                    if (t) {
                        var o = B(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function B(e) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
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
                    }), t && L(e, t)
                }(c, e);
                var t, r, n, a, s, i = I(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        card: {},
                        health: 0,
                        riskText: ""
                    }, t.ready = !1, t.onSelect = t.onSelect.bind(R(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (a = O().mark((function e() {
                        var t, r, n = this;
                        return O().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && "risk" === this.props.tower.stage) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    e.sent || this.setState({
                                        notLoggedIn: !0
                                    }), t = b(this.props.tower.life, this.props.tower.enemy), r = "".concat(t.card.strength, "/").concat(t.card.charisma, "/").concat(t.card.wisdom, " ").concat(t.card.blook, " Card"), this.setState({
                                        card: t.card,
                                        health: t.health,
                                        riskText: "Gain a ".concat(r, " or ").concat(t.health > 0 ? "Heal for" : "Sacrifice", " ").concat(Math.abs(t.health), " Health?")
                                    }, (function() {
                                        n.waitTimeout = setTimeout((function() {
                                            n.ready = !0
                                        }), 1e3)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function s(e) {
                                N(o, r, n, s, i, "next", e)
                            }

                            function i(e) {
                                N(o, r, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.waitTimeout)
                    }
                }, {
                    key: "onSelect",
                    value: function(e) {
                        var t = this;
                        if (this.ready) {
                            var r = E(this.props.tower.cards),
                                n = this.props.tower.life;
                            e ? (r = [].concat(E(this.props.tower.cards), [this.state.card]), this.props.setTowerCards(r)) : (n += this.state.health, this.props.setTowerLife(n)), this.props.tower.towerId ? k.a.put("/api/towers/save", {
                                id: this.props.tower.towerId,
                                stage: "map",
                                cards: r,
                                life: n
                            }).then((function() {
                                t.props.setTowerStage("map"), t.props.history.push("/tower/map")
                            })).catch((function(e) {
                                console.error(e)
                            })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? o.a.createElement(l.a, {
                            to: "/login"
                        }) : o.a.createElement("div", {
                            className: u.isMobile ? m.a.mBody : m.a.body,
                            style: {
                                backgroundColor: "#292929"
                            }
                        }, o.a.createElement(_.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(y.a, {
                            coins: this.props.tower.coins
                        }), this.state.health ? o.a.createElement("div", {
                            className: m.a.regularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement("div", {
                            className: p.a.lifeContainer
                        }, o.a.createElement(x.a, {
                            currentLife: this.props.tower.life,
                            maxLife: 100
                        })), o.a.createElement(C.a, {
                            name: this.state.card.blook,
                            className: p.a.blook
                        }), o.a.createElement("div", {
                            className: p.a.textContainer
                        }, o.a.createElement("div", {
                            className: p.a.riskText
                        }, this.state.riskText), o.a.createElement("div", {
                            className: p.a.buttonContainer
                        }, o.a.createElement("div", {
                            className: p.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.onSelect(!0)
                            }
                        }, "Card"), o.a.createElement("div", {
                            className: p.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.onSelect(!1)
                            }
                        }, "Health")))) : null)
                    }
                }]) && j(t.prototype, r), n && j(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            A.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerLife: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(w.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    setTowerCards: f.c,
                    setTowerStage: f.g,
                    setTowerLife: f.f
                }, e)
            }))(A)))
        },
        l7v6: function(e, t, r) {
            var n = r("xWMB");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        nmSx: function(e, t, r) {
            var n = r("RYeQ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        ntfh: function(e, t, r) {
            var n = r("dXfR");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        q2wa: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("uyiU"),
                h = r.n(f),
                p = [{
                    text: "Welcome to the Tower of Doom! Your goal is to ascend the Tower's 3 Haunted Floors.",
                    nextButtonText: "Next",
                    className: h.a.centered
                }, {
                    text: "Unfortunately, these floors are covered with enemies. You're going to need a deck to defend yourself.",
                    nextButtonText: "Next",
                    className: h.a.centered
                }, {
                    text: "Before you start climbing the Tower, you'll answer 5 questions to get your deck started! Answer 1 question now.",
                    nextButtonText: "OK",
                    className: h.a.centered
                }, {}, {
                    text: "Great work! Now you get to choose a card to add to your deck.",
                    nextButtonText: "Next",
                    className: h.a.centered
                }, {
                    elementId: "card1",
                    text: "You'll use Blook cards to battle. Each card has 3 attributes: Strength, Charisma, and Wisdom.",
                    nextButtonText: "Next",
                    elementClick: !0,
                    className: h.a.card1
                }, {
                    elementId: "card1",
                    text: "The greater the attribute, the better. Therefore, even though the Chick appears weak, its Charisma can be very powerful.",
                    nextButtonText: "Next",
                    elementClick: !0,
                    className: h.a.card1
                }, {
                    elementId: "card2",
                    text: "This card is an Artifact. They aren't used in battle, but they apply effects that can help you.",
                    nextButtonText: "Next",
                    elementClick: !0,
                    className: h.a.card2
                }, {
                    elementId: "card2",
                    text: "Coins are earned after battles and are used to purchase cards in Shops. The Piggy Bank would help you earn more of these coins.",
                    nextButtonText: "Next",
                    elementClick: !0,
                    className: h.a.card2
                }, {
                    elementId: "card1",
                    text: "For now, let's just stick with the Chick. Go ahead and click the card to add it to your Deck!",
                    elementClick: !0,
                    functionIndex: 0,
                    className: h.a.card1
                }, {
                    text: "Awesome, now answer 4 more questions and choose 4 more cards. Then you'll be ready to take on the Tower of Doom!",
                    nextButtonText: "OK",
                    className: h.a.centered
                }],
                d = r("ZTK6"),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("Rnav"),
                w = r("XTAU"),
                v = r("ca/f"),
                g = r("9TPi"),
                b = r("E8Bj"),
                x = r("FVRk"),
                C = r("4Zpe"),
                k = r("2qfb"),
                T = r("gvfT"),
                E = r("74sb"),
                S = r("qnYv");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return j(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
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
                    }(e, r, s), a
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function f() {}

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
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
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function I(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function P(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            I(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            I(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function R(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return q(this, r)
                }
            }

            function q(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return D(e)
            }

            function D(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var G = function(e) {
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
                    }), t && B(e, t)
                }(c, e);
                var t, r, n, a, s, i = A(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        question: {},
                        phase: "question",
                        correct: !1,
                        cards: [],
                        artifacts: [],
                        coins: 0,
                        askTour: !0,
                        showTour: !1,
                        readId: ""
                    }, t.freeQuestions = [], t.waiting = !1, t.done = !1, t.qRemaining = 5, t.msg = {}, t.isReading = !1, t.tourRef = o.a.createRef(), t.onAnswer = t.onAnswer.bind(D(t)), t.getQuestion = t.getQuestion.bind(D(t)), t.answerNext = t.answerNext.bind(D(t)), t.selectCard = t.selectCard.bind(D(t)), t.endTour = t.endTour.bind(D(t)), t.readQuestion = t.readQuestion.bind(D(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (s = P(L().mark((function e() {
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && "start" === this.props.tower.stage && this.props.tower.questions && this.props.tower.questions.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    e.sent || this.setState({
                                        notLoggedIn: !0
                                    }), this.setState({
                                        coins: this.props.tower.coins
                                    }), this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.getQuestion();
                                case 9:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.waitTimeout)
                    }
                }, {
                    key: "onAnswer",
                    value: function(e) {
                        if (!this.waiting) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var t = this.state.question.correctAnswers.includes(e),
                                r = JSON.parse(JSON.stringify(this.props.tower.corrects)),
                                n = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
                                o = this.state.question.number;
                            t ? r[o] ? r[o] += 1 : r[o] = 1 : n[o] ? n[o] += 1 : n[o] = 1, this.props.answerTower(r, n, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
                                correct: t,
                                phase: "feedback",
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var e = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
                        var t = Object(E.p)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(E.w)(t.answers)), this.setState({
                            question: t,
                            phase: "question"
                        }, (function() {
                            e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                e.waiting = !1
                            }), 400)
                        }))
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        var e = this;
                        this.state.correct ? (this.qRemaining -= 1, this.setState({
                            phase: "card"
                        }, (function() {
                            e.state.showTour && e.tourRef.current.setStep(4)
                        }))) : this.getQuestion()
                    }
                }, {
                    key: "selectCard",
                    value: function(e, t) {
                        var r = this;
                        if (!(this.done || this.state.showTour && !t)) {
                            var n = N(this.state.cards),
                                o = N(this.state.artifacts),
                                a = this.state.coins;
                            e.blook ? (n.push(JSON.parse(JSON.stringify(e))), this.setState({
                                cards: n
                            })) : (o.push(e), "Elder Coins" !== e || o.includes("Anubis' Obelisk") || (a += 100), this.setState({
                                artifacts: o,
                                coins: a
                            })), this.qRemaining <= 0 ? (this.done = !0, this.props.setTowerCards(n), this.props.setTowerArtifacts(o), this.props.setTowerCoins(a), this.props.tower.towerId ? S.a.put("/api/towers/save", {
                                id: this.props.tower.towerId,
                                cards: n,
                                artifacts: o,
                                corrects: this.props.tower.corrects,
                                incorrects: this.props.tower.incorrects,
                                stage: "map"
                            }).then((function() {
                                r.props.setTowerStage("map"), r.props.history.push("/tower/map")
                            })).catch((function(e) {
                                console.error(e)
                            })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))) : this.getQuestion()
                        }
                    }
                }, {
                    key: "endTour",
                    value: function() {
                        this.setState({
                            showTour: !1
                        }), this.props.setTowerInstruct(!0)
                    }
                }, {
                    key: "readQuestion",
                    value: (a = P(L().mark((function e() {
                        var t, r = this;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.isReading = !0, t = function(e, t, n) {
                                        var o = e;
                                        if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                        e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: t
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, e.next = 6, new Promise((function(e) {
                                        return t(r.state.question.text, "qText", e)
                                    }));
                                case 6:
                                    return e.next = 8, new Promise((function(e) {
                                        return t(r.state.question.answers[0], "q1", e)
                                    }));
                                case 8:
                                    return e.next = 10, new Promise((function(e) {
                                        return t(r.state.question.answers[1], "q2", e)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13, new Promise((function(e) {
                                        return t(r.state.question.answers[2], "q3", e)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 16, new Promise((function(e) {
                                        return t(r.state.question.answers[3], "q4", e)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower && this.props.tower.questions && this.props.tower.questions.length ? o.a.createElement("div", {
                            className: u.isMobile ? y.a.mBody : y.a.body,
                            id: "body",
                            style: {
                                backgroundColor: "#292929"
                            }
                        }, o.a.createElement(w.a, {
                            title: "Play Tower of Doom | Blooket",
                            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                        }), o.a.createElement(_.a, {
                            coins: this.state.coins || this.props.tower.coins,
                            showRead: this.state.question.correctAnswers && "question" === this.state.phase,
                            readQuestion: this.readQuestion
                        }), this.state.showTour ? o.a.createElement(g.a, {
                            steps: p,
                            onExit: this.endTour,
                            functions: [function() {
                                return e.selectCard(T.e, !0)
                            }],
                            ref: this.tourRef
                        }) : null, this.state.question.correctAnswers ? "question" === this.state.phase ? o.a.createElement(x.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId,
                            theme: "tower"
                        }) : "feedback" === this.state.phase ? o.a.createElement(C.a, {
                            incorrectTime: 3,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        }) : o.a.createElement("div", {
                            className: y.a.regularBody
                        }, o.a.createElement(k.a, {
                            type: "small",
                            onClick: this.selectCard,
                            cards: [].concat(N(this.state.artifacts), N(this.state.cards)),
                            noArtifacts: 0 === this.state.cards.length,
                            noThird: this.state.artifacts.includes("Pink Hippo"),
                            isTutorial: this.state.showTour
                        })) : null, this.state.askTour ? o.a.createElement(v.a, {
                            text: "Would you like a quick tutorial?",
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return e.setState({
                                        askTour: !1,
                                        showTour: !0
                                    })
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        askTour: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(l.a, {
                            to: "/login"
                        })
                    }
                }]) && R(t.prototype, r), n && R(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            G.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                answerTower: c.a.func.isRequired,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerArtifacts: c.a.func.isRequired,
                setTowerCoins: c.a.func.isRequired,
                setTowerInstruct: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(b.c)(Object(l.g)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    answerTower: d.a,
                    setTowerCards: d.c,
                    setTowerStage: d.g,
                    setTowerArtifacts: d.b,
                    setTowerCoins: d.d,
                    setTowerInstruct: d.e
                }, e)
            }))(G)))
        },
        qIdB: function(e, t, r) {
            var n = r("fLLE");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        rhfU: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__myCircle___2m0on-camelCase{width:30vw;height:10vw;border-radius:50%;background-color:#404040;position:absolute;top:calc(50% + 16.25vw);left:35vw;transform:translate(-50%,-50%)}.styles__myName___17zOY-camelCase{font-family:Nunito,sans-serif;font-size:3.5vw;font-weight:700;top:calc(50% + 9vw);text-align:center;color:#fff}.styles__myLife___JPhpe-camelCase,.styles__myName___17zOY-camelCase{position:absolute;left:2.5vw;width:15vw}.styles__myLife___JPhpe-camelCase{top:calc(50% - 7.5vw);height:15vw}.styles__oppCircle___3gJVX-camelCase{width:21vw;height:7vw;border-radius:50%;background-color:#404040;position:absolute;top:26.25vw;left:68.75vw;transform:translate(-50%,-50%)}.styles__oppBlook___1seiS-camelCase{height:13.8vw;width:12vw;position:absolute;top:3.5vw;left:82.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__oppBlookStage___3OPbR-camelCase{height:5vw;border-radius:2vw;background-color:#404040;top:13.8vw}.styles__oppBlookStage___3OPbR-camelCase,.styles__oppName___3E-vc-camelCase{width:16vw;position:absolute;left:80.75vw}.styles__oppName___3E-vc-camelCase{font-family:Nunito,sans-serif;font-size:2vw;line-height:2.2vw;font-weight:700;top:20vw;text-align:center;color:#fff}.styles__oppLife___K7u_u-camelCase{position:absolute;top:26vw;left:81.25vw;height:15vw;width:15vw;transform:scale(.7)}.styles__cardContainer___2pHej-camelCase{position:absolute;width:25vw;height:32.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__myCard___2EA2h-camelCase{top:50%;left:35vw;transform:translate(-50%,-50%)}.styles__oppCard___1PoAG-camelCase{top:10vw;left:65vw;transform:scale(.7) translate(-50%,-50%)}.styles__myCardAttack___ntLQe-camelCase{-webkit-animation:styles__myAttack___341kx-camelCase .35s ease-out;animation:styles__myAttack___341kx-camelCase .35s ease-out}@-webkit-keyframes styles__myAttack___341kx-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-40%,-60%)}to{transform:translate(-50%,-50%)}}@keyframes styles__myAttack___341kx-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-40%,-60%)}to{transform:translate(-50%,-50%)}}.styles__myCardHit___18tiT-camelCase{-webkit-animation:styles__myHit___2L0nr-camelCase .35s ease-out 185ms;animation:styles__myHit___2L0nr-camelCase .35s ease-out 185ms}@-webkit-keyframes styles__myHit___2L0nr-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-60%,-40%)}to{transform:translate(-50%,-50%)}}@keyframes styles__myHit___2L0nr-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-60%,-40%)}to{transform:translate(-50%,-50%)}}.styles__enemyCardAttack___1WfpN-camelCase{-webkit-animation:styles__enemyAttack___3hwMl-camelCase .35s ease-out;animation:styles__enemyAttack___3hwMl-camelCase .35s ease-out}@-webkit-keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-60%,-40%)}to{transform:scale(.7) translate(-50%,-50%)}}@keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-60%,-40%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__enemyCardHit___1GNlV-camelCase{-webkit-animation:styles__enemyHit___PVxrF-camelCase .35s ease-out 185ms;animation:styles__enemyHit___PVxrF-camelCase .35s ease-out 185ms}@-webkit-keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-40%,-60%)}to{transform:scale(.7) translate(-50%,-50%)}}@keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-40%,-60%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__text___2iB_C-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:27.5vw;height:10.5vw;left:53.5vw;top:32vw;font-size:2.3vw;font-family:Nunito,sans-serif;font-weight:700;text-align:center;color:#fff;text-shadow:2px 2px 8px grey}.styles__questionContainer___6eJ0Y-camelCase{-webkit-animation:styles__growIn___2B80I-camelCase .5s;animation:styles__growIn___2B80I-camelCase .5s}@-webkit-keyframes styles__growIn___2B80I-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___2B80I-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___14fgm-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929}@media only screen and (max-width:600px){.styles__myCard___2EA2h-camelCase{transform:scale(1.8) translate(-50%,-50%);top:80%;left:40vw}.styles__myCircle___2m0on-camelCase{width:55vw;height:18vw;top:calc(80% + 16.25vw);left:30vw}.styles__oppCard___1PoAG-camelCase{transform:scale(1.5) translate(-50%,-50%);top:37.5vw;left:80vw}.styles__oppCircle___3gJVX-camelCase{width:45vw;height:15vw;top:53.75vw;left:73.75vw}.styles__text___2iB_C-camelCase{width:40vw;height:50vw;left:5vw;top:7.5vw;font-size:6vw}.styles__oppBlook___1seiS-camelCase{height:17.25vw;width:15vw;top:65vw;left:80vw}.styles__oppBlookStage___3OPbR-camelCase{width:20vw;height:7vw;border-radius:2vw;top:77.25vw;left:77.5vw}.styles__oppName___3E-vc-camelCase{font-size:4vw;line-height:4.2vw;left:77.5vw;top:88vw;width:20vw}.styles__oppLife___K7u_u-camelCase{top:69.5vw;left:57.5vw;transform:scale(1.2)}.styles__myName___17zOY-camelCase{font-size:6vw;line-height:6vw;left:77vw;top:calc(81.5% - 3.75vw);width:23vw}.styles__myLife___JPhpe-camelCase{top:calc(81.5% - 7.5vw);left:60vw;transform:scale(1.5)}@-webkit-keyframes styles__myAttack___341kx-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-40%,-60%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__myAttack___341kx-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-40%,-60%)}to{transform:scale(1.8) translate(-50%,-50%)}}@-webkit-keyframes styles__myHit___2L0nr-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-60%,-40%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__myHit___2L0nr-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-60%,-40%)}to{transform:scale(1.8) translate(-50%,-50%)}}@-webkit-keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-60%,-40%)}to{transform:scale(1.5) translate(-50%,-50%)}}@keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-60%,-40%)}to{transform:scale(1.5) translate(-50%,-50%)}}@-webkit-keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-40%,-60%)}to{transform:scale(1.5) translate(-50%,-50%)}}@keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-40%,-60%)}to{transform:scale(1.5) translate(-50%,-50%)}}}", ""]), t.locals = {
                myCircle: "styles__myCircle___2m0on-camelCase",
                myName: "styles__myName___17zOY-camelCase",
                myLife: "styles__myLife___JPhpe-camelCase",
                oppCircle: "styles__oppCircle___3gJVX-camelCase",
                oppBlook: "styles__oppBlook___1seiS-camelCase",
                oppBlookStage: "styles__oppBlookStage___3OPbR-camelCase",
                oppName: "styles__oppName___3E-vc-camelCase",
                oppLife: "styles__oppLife___K7u_u-camelCase",
                cardContainer: "styles__cardContainer___2pHej-camelCase",
                myCard: "styles__myCard___2EA2h-camelCase",
                oppCard: "styles__oppCard___1PoAG-camelCase",
                myCardAttack: "styles__myCardAttack___ntLQe-camelCase",
                myAttack: "styles__myAttack___341kx-camelCase",
                myCardHit: "styles__myCardHit___18tiT-camelCase",
                myHit: "styles__myHit___2L0nr-camelCase",
                enemyCardAttack: "styles__enemyCardAttack___1WfpN-camelCase",
                enemyAttack: "styles__enemyAttack___3hwMl-camelCase",
                enemyCardHit: "styles__enemyCardHit___1GNlV-camelCase",
                enemyHit: "styles__enemyHit___PVxrF-camelCase",
                text: "styles__text___2iB_C-camelCase",
                questionContainer: "styles__questionContainer___6eJ0Y-camelCase",
                growIn: "styles__growIn___2B80I-camelCase",
                feedbackContainer: "styles__feedbackContainer___14fgm-camelCase"
            }
        },
        uUIW: function(e, t, r) {
            var n = r("/DjJ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        uyiU: function(e, t, r) {
            var n = r("/+s7");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        w6lF: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__stageText___3dZxF-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                stageText: "styles__stageText___3dZxF-camelCase"
            }
        },
        xWMB: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, '.styles__container___Fi8YC-camelCase{display:"flex";flex-direction:column;width:100%;-webkit-animation:styles__fadeIn___L7JaM-camelCase 3s ease-in;animation:styles__fadeIn___L7JaM-camelCase 3s ease-in}@-webkit-keyframes styles__fadeIn___L7JaM-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___L7JaM-camelCase{0%{opacity:0}to{opacity:1}}.styles__header___3dKzw-camelCase{font-size:16vw;margin:0 auto 20px;font-family:Creepster,sans-serif;color:#b3ffb3}.styles__header___3dKzw-camelCase,.styles__winText___ZENUl-camelCase{text-align:center;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__winText___ZENUl-camelCase{font-size:2.7vw;width:95%;margin:0 auto;font-family:Nunito,sans-serif;color:#fff;font-weight:700}.styles__endButton___1FJT_-camelCase{font-size:5vw;width:25%;margin:20px auto 0;text-align:center;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__endButton___1FJT_-camelCase:focus,.styles__endButton___1FJT_-camelCase:hover{transform:scale(1.05)}@media only screen and (max-width:700px){.styles__header___3dKzw-camelCase{font-size:100px}.styles__winText___ZENUl-camelCase{font-size:24px}.styles__endButton___1FJT_-camelCase{font-size:60px;width:250px}}', ""]), t.locals = {
                container: "styles__container___Fi8YC-camelCase",
                fadeIn: "styles__fadeIn___L7JaM-camelCase",
                header: "styles__header___3dKzw-camelCase",
                winText: "styles__winText___ZENUl-camelCase",
                endButton: "styles__endButton___1FJT_-camelCase"
            }
        }
    }
]);