(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "+fLB": function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return v
            })), r.d(t, "d", (function() {
                return x
            })), r.d(t, "a", (function() {
                return w
            }));
            var n = r("T2Ak"),
                o = (r("Wi35"), r("KXnt"), r("JWrT"), r("q1tI")),
                a = r.n(o),
                i = r("9coQ");

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                p = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function l(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
                                    if (s) {
                                        if (s === f) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), a
                }

                function u(e, t, r) {
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
                e.wrap = l;
                var f = {};

                function h() {}

                function d() {}

                function m() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    v = _ && _(_(O([])));
                v && v !== t && r.call(v, o) && (y = v);
                var b = m.prototype = h.prototype = Object.create(y);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, c) {
                                    var l = u(e[o], e, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            p = f.value;
                                        return p && "object" == s(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, c)
                                        }), (function(e) {
                                            n("throw", e, i, c)
                                        })) : t.resolve(p).then((function(e) {
                                            f.value = e, i(f)
                                        }), (function(e) {
                                            return n("throw", e, i, c)
                                        }))
                                    }
                                    c(l.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return f;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = u(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = m, c(b, "constructor", m), c(m, "constructor", d), d.displayName = c(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), c(w.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(l(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(b), c(b, i, "Generator"), c(b, o, (function() {
                    return this
                })), c(b, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), f
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }

            function h(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            h(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            h(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var y = {
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z"
                },
                _ = ["https://blooket-2020.firebaseio.com", "https://blooket-2021.firebaseio.com", "https://blooket-2022.firebaseio.com", "https://blooket-2023.firebaseio.com", "https://blooket-2024.firebaseio.com", "https://blooket-2025.firebaseio.com", "https://blooket-2026.firebaseio.com", "https://blooket-2027.firebaseio.com", "https://blooket-2028.firebaseio.com", "https://blooket-2029.firebaseio.com", "https://blooket-2030.firebaseio.com", "https://blooket-2031.firebaseio.com", "https://blooket-2032.firebaseio.com", "https://blooket-2033.firebaseio.com", "https://blooket-2034.firebaseio.com", "https://blooket-2035.firebaseio.com", "https://blooket-2036.firebaseio.com", "https://blooket-2037.firebaseio.com"],
                v = 6,
                b = function(e) {
                    return e < 149999 ? 0 : e < 2e5 ? 1 : e < 249999 ? 2 : e < 3e5 ? 3 : e < 349999 ? 4 : e < 4e5 ? 5 : e < 449999 ? 6 : e < 5e5 ? 7 : e < 549999 ? 8 : e < 6e5 ? 9 : e < 649999 ? 10 : e < 7e5 ? 11 : e < 749999 ? 12 : e < 8e5 ? 13 : e < 849999 ? 14 : e < 9e5 ? 15 : e < 949999 ? 16 : 17
                },
                g = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.liveApp = null, this.liveAppNum = -1
                    }
                    var t, r, o, a, s, c, l, f, h, v, g, w, x, k, C, E;
                    return t = e, (r = [{
                        key: "checkConnection",
                        value: (E = d(p().mark((function e(t) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.liveAppNum === t) {
                                            e.next = 5;
                                            break
                                        }
                                        if (-1 === this.liveAppNum) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, this.disconnectFromDb();
                                    case 4:
                                        this.connectToDb(t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "connectToDb",
                        value: function(e) {
                            this.liveApp = n.a.initializeApp(u(u({}, y), {}, {
                                databaseURL: _[e]
                            })), this.liveAppNum = e, n.a.analytics()
                        }
                    }, {
                        key: "disconnectFromDb",
                        value: (C = d(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.a.app().delete().then();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return C.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseVal",
                        value: (k = d(p().mark((function e(t, r, n) {
                            var o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = b(t), e.next = 3, this.checkConnection(o);
                                    case 3:
                                        this.liveApp.database().ref("".concat(t, "/").concat(r)).once("value").then((function(e) {
                                            n(e.val())
                                        })).catch((function() {
                                            n(null)
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseRef",
                        value: (x = d(p().mark((function e(t, r) {
                            var n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = b(t), e.next = 3, this.checkConnection(n);
                                    case 3:
                                        return e.abrupt("return", this.liveApp.database().ref("".concat(t, "/").concat(r)));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "setAuth",
                        value: (w = d(p().mark((function e(t, r, o) {
                            var a;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = b(t), e.next = 3, this.checkConnection(a);
                                    case 3:
                                        return e.next = 5, new Promise((function(e) {
                                            return n.a.auth().setPersistence(n.a.auth.Auth.Persistence.SESSION).then(e).catch(e)
                                        }));
                                    case 5:
                                        n.a.auth().signInWithCustomToken(r).then(o).catch((function(e) {
                                            console.error(e)
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "setHost",
                        value: (g = d(p().mark((function e(t, r, n, o, a) {
                            var s;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = {
                                            gameId: t,
                                            initialGame: {
                                                p: r,
                                                set: n,
                                                s: o,
                                                c: {},
                                                a: [],
                                                stg: "join",
                                                ho: a
                                            }
                                        }, e.next = 3, i.a.post("/c/firebase/games", s);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, r, n, o) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "blockUser",
                        value: (v = d(p().mark((function e(t, r) {
                            var n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            g: t,
                                            u: r
                                        }, e.next = 3, i.a.post("/c/firebase/block", n);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "testFirewall",
                        value: (h = d(p().mark((function e(t) {
                            var r, o, a;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, new Promise((function(e) {
                                            i.a.get("/c/firebase/firewall").then((function(t) {
                                                e(t.data.fbToken)
                                            })).catch((function() {
                                                return e()
                                            }))
                                        }));
                                    case 2:
                                        if (r = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 5:
                                        return o = n.a.initializeApp(u(u({}, y), {}, {
                                            databaseURL: "https://blooket-firewall.firebaseio.com/"
                                        })), e.next = 8, new Promise((function(e) {
                                            return n.a.auth().setPersistence(n.a.auth.Auth.Persistence.SESSION).then(e).catch(e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            n.a.auth().signInWithCustomToken(r).then((function() {
                                                return e(!0)
                                            })).catch((function(t) {
                                                console.error(t), e(!1)
                                            }))
                                        }));
                                    case 10:
                                        if (e.sent) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 13:
                                        return e.next = 15, new Promise((function(e) {
                                            o.database().ref("1000000").once("value").then((function(t) {
                                                e("DogsAreCool" === t.val())
                                            })).catch((function(t) {
                                                console.error(t), e(!1)
                                            }))
                                        }));
                                    case 15:
                                        a = e.sent, n.a.app().delete(), t(a);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return h.apply(this, arguments)
                        })
                    }, {
                        key: "setVal",
                        value: (f = d(p().mark((function e(t, r) {
                            var n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            id: t.id,
                                            path: t.path,
                                            value: t.val
                                        }, e.next = 3, i.a.post("/c/firebase/game-value", n);
                                    case 3:
                                        r && r();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "setClient",
                        value: (l = d(p().mark((function e(t, r, n) {
                            var o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = {
                                            id: t,
                                            path: "c/".concat(r),
                                            val: {
                                                b: n
                                            }
                                        }, e.next = 3, this.setVal(o);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "setStage",
                        value: (c = d(p().mark((function e(t, r) {
                            var n, o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.clearAnswers) {
                                            e.next = 4;
                                            break
                                        }
                                        return n = {
                                            id: t.id,
                                            path: "a",
                                            val: []
                                        }, e.next = 4, this.setVal(n);
                                    case 4:
                                        return o = {
                                            id: t.id,
                                            path: "stg",
                                            val: t.stage
                                        }, e.next = 7, this.setVal(o);
                                    case 7:
                                        r && r();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "removeVal",
                        value: (s = d(p().mark((function e(t, r, n) {
                            var o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        o = {
                                            id: t,
                                            path: r,
                                            val: null
                                        }, this.setVal(o), n && n();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "removeHost",
                        value: (a = d(p().mark((function e(t) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, i.a.delete("/c/firebase/game?id=".concat(t));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return a.apply(this, arguments)
                        })
                    }]) && m(t.prototype, r), o && m(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                w = a.a.createContext(null),
                x = function(e) {
                    return function(t) {
                        return a.a.createElement(w.Consumer, null, (function(r) {
                            return a.a.createElement(e, c({}, t, {
                                firebase: r
                            }))
                        }))
                    }
                };
            t.c = g
        },
        "/BoV": function(e, t, r) {
            var n = r("Ql8l");
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
        "0Oxh": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("XTAU"),
                l = r("oQ+7"),
                u = r("E8Bj"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("SY/F"),
                d = r.n(h),
                m = r("74sb"),
                y = r("qnYv"),
                _ = r("lmLo");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                b = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == v(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), s(w.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function g(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function w(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
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
            var O = function(e) {
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
                }(f, e);
                var t, r, n, i, s, u = k(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (t = u.call(this, e)).state = {
                        result: "",
                        isGroup: "group" === Object(m.j)("t")
                    }, t
                }
                return t = f, (r = [{
                    key: "componentDidMount",
                    value: (i = b().mark((function e() {
                        var t, r, n = this;
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(m.j)("session_id"), e.next = 3, this.props.user.getData();
                                case 3:
                                    (r = e.sent) && t ? this.state.isGroup ? y.a.post("/api/groups/stripe", {
                                        sessionId: t,
                                        email: r.email,
                                        groupName: decodeURIComponent(Object(m.j)("n"))
                                    }).then((function(e) {
                                        n.setState({
                                            result: e.data
                                        })
                                    })).catch((function(e) {
                                        n.setState({
                                            result: "failed"
                                        }), console.error(e)
                                    })) : y.a.put("/api/users/stripe/checkout", {
                                        sessionId: t,
                                        email: r.email
                                    }).then((function(e) {
                                        n.setState({
                                            result: e.data.success ? "success" : "failed"
                                        })
                                    })).catch((function(e) {
                                        n.setState({
                                            result: "failed"
                                        }), console.error(e)
                                    })) : this.props.history.push("/upgrade");
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(e, t);

                            function a(e) {
                                g(o, r, n, a, s, "next", e)
                            }

                            function s(e) {
                                g(o, r, n, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: a.isMobile ? p.a.mBody : p.a.body
                        }, o.a.createElement(c.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), o.a.createElement(l.a, null), o.a.createElement("div", {
                            className: p.a.slantBackground
                        }), o.a.createElement("div", {
                            className: p.a.regularBody
                        }, this.state.result ? o.a.createElement("div", {
                            className: d.a.container
                        }, o.a.createElement("div", {
                            className: d.a.header
                        }, "failed" !== this.state.result ? "Success!" : "Failed"), o.a.createElement("div", {
                            className: d.a.subheader
                        }, "failed" !== this.state.result ? "Thank you!" : "Error processing payment. Please contact support."), o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement(_.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            linkTo: "/dashboard"
                        }, "Dashboard"))) : null))
                    }
                }]) && w(t.prototype, r), n && w(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(o.a.Component);
            O.propTypes = {
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(u.c)(O)
        },
        "0YT7": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__feedbackContainer___27LWk-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__feedbackContainer___27LWk-camelCase,.styles__winterBackground___1ofbQ-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__winterBackground___1ofbQ-camelCase{overflow:hidden}.styles__header___2SQxX-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;top:10%;left:50%;transform:translateX(-50%);width:640px;font-family:Titan One,sans-serif;font-size:52px}.styles__choice___MzaKW-camelCase,.styles__header___2SQxX-camelCase{position:absolute}.styles__choice___MzaKW-camelCase{width:250px;height:250px;background-color:#f23941;top:45%;border-radius:50%;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__choice___MzaKW-camelCase:focus,.styles__choice___MzaKW-camelCase:hover{transform:scale(.96)}.styles__choiceInside___L7TR0-camelCase{width:220px;height:220px;background-color:#f23941;border-radius:50%;border:5px solid #fff;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__choiceLeft___2dhL8-camelCase{right:calc(50% + 50px)}.styles__choiceRight___3Kgrj-camelCase{left:calc(50% + 50px)}.styles__choiceBlook___2JPEm-camelCase{height:85px;width:74px;margin-bottom:10px}.styles__choiceText___1vlew-camelCase{font-family:Nunito,sans-serif;font-size:26px;line-height:28px;color:#fff;font-weight:700;text-align:center;width:75%}.styles__choiceDuck___3pznA-camelCase{height:24px}.styles__mountainsBackground___3g_Lb-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___3g_Lb-camelCase,.styles__plowSnow___1z2FM-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__plowSnow___1z2FM-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;-webkit-animation:styles__plowSnow___1z2FM-camelCase 8s linear 0s forwards;animation:styles__plowSnow___1z2FM-camelCase 8s linear 0s forwards}@-webkit-keyframes styles__plowSnow___1z2FM-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}@keyframes styles__plowSnow___1z2FM-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___31dtQ-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plow___31dtQ-camelCase 6s linear 2s forwards;animation:styles__plow___31dtQ-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plow___31dtQ-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}@keyframes styles__plow___31dtQ-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___mRyI5-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plowBlook___mRyI5-camelCase 6s linear 2s forwards;animation:styles__plowBlook___mRyI5-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plowBlook___mRyI5-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}@keyframes styles__plowBlook___mRyI5-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___1s9QA-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___1s9QA-camelCase,.styles__canada2___2iuT9-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2iuT9-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___1xQFF-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___1xQFF-camelCase,.styles__canadaIcon___NrhOF-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___NrhOF-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___2Z3Oe-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-animation:styles__blow___3rhsR-camelCase 5s linear 2s forwards;animation:styles__blow___3rhsR-camelCase 5s linear 2s forwards}@-webkit-keyframes styles__blow___3rhsR-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}@keyframes styles__blow___3rhsR-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___3nMhg-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;z-index:12;transition:.5s}.styles__treeContainer___3nMhg-camelCase:hover{transform:scale(1.03)}.styles__playerWrapper___2rHEi-camelCase,.styles__treeImg___GlM5D-camelCase{height:100%;width:100%}.styles__playerWrapper___2rHEi-camelCase{display:flex;flex-flow:column;position:absolute;top:0;left:0;overflow-x:hidden;-webkit-animation:styles__fadeIn___17Qx9-camelCase .2s;animation:styles__fadeIn___17Qx9-camelCase .2s}.styles__playerHeader___1Riic-camelCase{font-size:48px;margin:30px auto 0;text-shadow:2px 2px 8px grey;color:#fff;width:90%;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__playerHolder___3Lloe-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;-webkit-animation:styles__fadeIn___17Qx9-camelCase .2s;animation:styles__fadeIn___17Qx9-camelCase .2s}@-webkit-keyframes styles__fadeIn___17Qx9-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___17Qx9-camelCase{0%{opacity:0}to{opacity:1}}.styles__noPlayers___1OAgM-camelCase{width:220px;height:80px;line-height:60px;background-color:#eb2d37;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;font-family:Nunito,sans-serif;font-weight:700;cursor:pointer;text-align:center;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__noPlayers___1OAgM-camelCase:hover{transform:scale(.95)}.styles__playerInside___2jn8d-camelCase{border:5px solid #fff;width:100%;flex-direction:row}.styles__playerContainer___2uusq-camelCase,.styles__playerInside___2jn8d-camelCase{background-color:#eb2d37;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___2uusq-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Nunito,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___2uusq-camelCase:focus,.styles__playerContainer___2uusq-camelCase:hover{transform:scale(.97)}.styles__playerBlook___38evD-camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___2dgWP-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___3WUD--camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__toyRow___2Ivno-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerToys___czp20-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__toyIcon___3buJA-camelCase{height:60%;width:auto;margin:auto 5px auto 10px}.styles__sabotageContainer___2eAOv-camelCase{position:absolute;top:70px;left:15px;background-color:rgba(0,0,0,.4);border-radius:5px;padding:7px 10px;font-size:28px;font-weight:700;font-family:Nunito,sans-serif;color:#fff;display:flex;flex-direction:row;align-items:center;-webkit-animation:styles__sabotageFade___2Xrkd-camelCase 6s linear;animation:styles__sabotageFade___2Xrkd-camelCase 6s linear}@-webkit-keyframes styles__sabotageFade___2Xrkd-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@keyframes styles__sabotageFade___2Xrkd-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}.styles__sabotageBlook___aKQw8-camelCase{height:40px;width:35px;margin-right:7px}@media only screen and (max-width:650px){.styles__header___2SQxX-camelCase{top:5%;width:300px}.styles__header___2SQxX-camelCase,.styles__playerHeader___1Riic-camelCase{font-size:36px;line-height:38px}.styles__choice___MzaKW-camelCase{width:160px;height:160px;top:45%}.styles__choice___MzaKW-camelCase:focus,.styles__choice___MzaKW-camelCase:hover{transform:scale(1)}.styles__choiceInside___L7TR0-camelCase{width:140px;height:140px;border:5px solid #fff}.styles__choiceLeft___2dhL8-camelCase{right:calc(50% - 20px);bottom:calc(50% - 60px);top:auto}.styles__choiceRight___3Kgrj-camelCase{left:calc(50% - 20px);top:calc(50% + 40px)}.styles__choiceBlook___2JPEm-camelCase{height:56px;width:49px;margin-bottom:6px}.styles__choiceText___1vlew-camelCase{font-size:18px;line-height:20px;font-weight:700;width:75%}.styles__choiceDuck___3pznA-camelCase{height:18px}.styles__treeContainer___3nMhg-camelCase{height:30vw;width:30vw;margin-left:-15vw;margin-top:-15vw}.styles__playerContainer___2uusq-camelCase{width:100%}.styles__noPlayers___1OAgM-camelCase:hover,.styles__playerContainer___2uusq-camelCase:focus,.styles__playerContainer___2uusq-camelCase:hover{transform:scale(1)}}", ""]), t.locals = {
                feedbackContainer: "styles__feedbackContainer___27LWk-camelCase",
                winterBackground: "styles__winterBackground___1ofbQ-camelCase",
                header: "styles__header___2SQxX-camelCase",
                choice: "styles__choice___MzaKW-camelCase",
                choiceInside: "styles__choiceInside___L7TR0-camelCase",
                choiceLeft: "styles__choiceLeft___2dhL8-camelCase",
                choiceRight: "styles__choiceRight___3Kgrj-camelCase",
                choiceBlook: "styles__choiceBlook___2JPEm-camelCase",
                choiceText: "styles__choiceText___1vlew-camelCase",
                choiceDuck: "styles__choiceDuck___3pznA-camelCase",
                mountainsBackground: "styles__mountainsBackground___3g_Lb-camelCase",
                plowSnow: "styles__plowSnow___1z2FM-camelCase",
                plow: "styles__plow___31dtQ-camelCase",
                plowBlook: "styles__plowBlook___mRyI5-camelCase",
                canada1: "styles__canada1___1s9QA-camelCase",
                canada2: "styles__canada2___2iuT9-camelCase",
                canada3: "styles__canada3___1xQFF-camelCase",
                canadaIcon: "styles__canadaIcon___NrhOF-camelCase",
                wind: "styles__wind___2Z3Oe-camelCase",
                blow: "styles__blow___3rhsR-camelCase",
                treeContainer: "styles__treeContainer___3nMhg-camelCase",
                playerWrapper: "styles__playerWrapper___2rHEi-camelCase",
                treeImg: "styles__treeImg___GlM5D-camelCase",
                fadeIn: "styles__fadeIn___17Qx9-camelCase",
                playerHeader: "styles__playerHeader___1Riic-camelCase",
                playerHolder: "styles__playerHolder___3Lloe-camelCase",
                noPlayers: "styles__noPlayers___1OAgM-camelCase",
                playerInside: "styles__playerInside___2jn8d-camelCase",
                playerContainer: "styles__playerContainer___2uusq-camelCase",
                playerBlook: "styles__playerBlook___38evD-camelCase",
                playerColumn: "styles__playerColumn___2dgWP-camelCase",
                playerText: "styles__playerText___3WUD--camelCase",
                toyRow: "styles__toyRow___2Ivno-camelCase",
                playerToys: "styles__playerToys___czp20-camelCase",
                toyIcon: "styles__toyIcon___3buJA-camelCase",
                sabotageContainer: "styles__sabotageContainer___2eAOv-camelCase",
                sabotageFade: "styles__sabotageFade___2Xrkd-camelCase",
                sabotageBlook: "styles__sabotageBlook___aKQw8-camelCase"
            }
        },
        "1JjF": function(e, t, r) {
            var n = r("xppP");
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
        "1OWE": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___2mKcW-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;text-align:center;color:#3a3a3a}.styles__header___2iiY1-camelCase{font-size:50px;line-height:50px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___2fOn5-camelCase{font-size:24px;margin:10px;font-family:Nunito,sans-serif}.styles__buttonContainer___2_7ch-camelCase{width:150px;margin:15px auto 25px}.styles__button___3aqPp-camelCase{margin:auto}.styles__buttonInside___3BM3k-camelCase{min-width:100px;height:35px;font-size:22px;padding:5px 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:500px){.styles__container___2mKcW-camelCase{width:320px}}", ""]), t.locals = {
                container: "styles__container___2mKcW-camelCase",
                header: "styles__header___2iiY1-camelCase",
                subheader: "styles__subheader___2fOn5-camelCase",
                buttonContainer: "styles__buttonContainer___2_7ch-camelCase",
                button: "styles__button___3aqPp-camelCase",
                buttonInside: "styles__buttonInside___3BM3k-camelCase"
            }
        },
        "1yxc": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___1fmAs-camelCase{width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center}.styles__header___1XfK4-camelCase{font-size:85px;margin:50px auto 5px;font-family:Titan One,sans-serif}.styles__header___1XfK4-camelCase,.styles__subheader___19fPg-camelCase{width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__subheader___19fPg-camelCase{font-size:32px;margin:20px auto;font-family:Nunito,sans-serif}.styles__groupsHolder___cUbIf-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;max-width:1000px;margin:0 auto}.styles__groupButton___uZVWV-camelCase{margin:10px}.styles__groupButtonInside___33PPt-camelCase{min-width:200px;min-height:180px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__groupName___1cWzF-camelCase{font-size:22px;font-weight:700}.styles__groupPlans___2H7KI-camelCase{font-size:16px}.styles__groupPrice___1NjAI-camelCase{font-family:Titan One,sans-serif;font-size:52px}.styles__descContainer___20GLD-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1000px;background-color:#fff;border-radius:7px;font-family:Nunito,sans-serif;box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a;text-align:center;font-size:18px;margin:30px auto}.styles__detailsHolder___2IThg-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:75%;max-width:1000px;margin:10px auto}.styles__detailContainer___KYss5-camelCase{flex-direction:row;justify-content:flex-start;background-color:#fff;border-radius:7px;margin:10px;width:calc(48% - 20px);box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__detailCheck___1_WIw-camelCase,.styles__detailContainer___KYss5-camelCase{display:flex;align-items:center}.styles__detailCheck___1_WIw-camelCase{width:40px;height:40px;border-radius:5px;justify-content:center;background-color:#4bc22e;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:28px}.styles__detailText___3KVj--camelCase{font-family:Nunito,sans-serif;font-size:26px;width:calc(100% - 50px);font-weight:700;margin-left:10px}@media screen and (max-width:1050px){.styles__header___1XfK4-camelCase{font-size:55px;line-height:57px;margin:20px auto 5px}.styles__descContainer___20GLD-camelCase{max-width:90%}.styles__detailsHolder___2IThg-camelCase{width:90%}.styles__detailContainer___KYss5-camelCase{width:calc(100% - 20px)}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___1fmAs-camelCase",
                header: "styles__header___1XfK4-camelCase",
                subheader: "styles__subheader___19fPg-camelCase",
                groupsHolder: "styles__groupsHolder___cUbIf-camelCase",
                groupButton: "styles__groupButton___uZVWV-camelCase",
                groupButtonInside: "styles__groupButtonInside___33PPt-camelCase",
                groupName: "styles__groupName___1cWzF-camelCase",
                groupPlans: "styles__groupPlans___2H7KI-camelCase",
                groupPrice: "styles__groupPrice___1NjAI-camelCase",
                descContainer: "styles__descContainer___20GLD-camelCase",
                detailsHolder: "styles__detailsHolder___2IThg-camelCase",
                detailContainer: "styles__detailContainer___KYss5-camelCase",
                detailCheck: "styles__detailCheck___1_WIw-camelCase",
                detailText: "styles__detailText___3KVj--camelCase"
            }
        },
        "2DsE": function(e, t, r) {
            var n = r("l1WF");
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
        "8CkO": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("VgyX"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("ZVoO"),
                d = r("XTAU"),
                m = r("74sb"),
                y = r("+fLB"),
                _ = r("qnYv");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function w(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
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
            var O = function(e) {
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
                }(i, e);
                var t, r, n, a = k(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = a.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var r = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(e) {
                                            var t = b(e, 2),
                                                n = t[0],
                                                o = t[1],
                                                a = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var i = 0; i < o.i.length; i++) {
                                                        var s = o.i[i];
                                                        s && (a[i] = s)
                                                    } else a = o.i;
                                                else a = {};
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
                                                incorrects: a
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && _.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        toys: isNaN(e.toys) ? 0 : Math.round(Number(e.toys)),
                                                        corrects: r[e.name] ? r[e.name].corrects : {},
                                                        incorrects: r[e.name] ? r[e.name].incorrects : {}
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
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? o.a.createElement("div", {
                            className: p.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "linear-gradient(#31aae0, #bdf)"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(h.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(m.o)(e.toys), " Toys")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "winter"
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && w(t.prototype, r), n && w(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            O.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(i.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteHost: u.d
                }, e)
            }))(Object(y.d)(O)))
        },
        EHjQ: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("ZrUs"),
                p = r("oQ+7"),
                h = r("2DsE"),
                d = r.n(h),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("XTAU"),
                v = r("2ZNs"),
                b = r("LHn/"),
                g = r("74sb"),
                w = r("+fLB"),
                x = r("qnYv");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        O(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function O(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function j(e, t) {
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

            function N(e) {
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
                    return P(this, r)
                }
            }

            function P(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return S(e)
            }

            function S(e) {
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
                        className: d.a.statContainer
                    }, o.a.createElement("div", {
                        className: d.a.toysText
                    }, Object(g.v)(e.toys)), o.a.createElement("img", {
                        src: b.a.basic.toy,
                        alt: "Toy",
                        className: d.a.toyImage,
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
                        }), t && T(e, t)
                    }(i, e);
                    var t, r, n, a = N(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = a.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(S(t)), t
                    }
                    return t = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: E({}, this.props.client.corrects),
                                        i: E({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var r = 0,
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        r += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var o = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: o,
                                        toys: this.props.client.standing[t].toys,
                                        playersDefeated: this.props.client.standing.length - o,
                                        correctAnswers: r,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: r,
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
                            x.a.put("/api/users/toystats", {
                                name: e,
                                place: this.stats.place,
                                toys: this.stats.toys,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: u.isMobile ? y.a.mBody : y.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(_.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(p.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(g.o)(this.state.me.toys), " Toys"),
                                saveStats: this.saveStats,
                                renderStandingStat: I,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: y.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && j(t.prototype, r), n && j(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), i
                }(o.a.Component);
            B.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            t.a = Object(l.g)(Object(i.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(w.d)(B)))
        },
        EygS: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("Ty5D"),
                i = r("H1WH"),
                s = r("17x9"),
                c = r.n(s),
                l = r("TSYQ"),
                u = r.n(l),
                f = r("mOsA"),
                p = r("Xst1"),
                h = r.n(p),
                d = r("/BoV"),
                m = r.n(d),
                y = r("XTAU"),
                _ = r("oQ+7"),
                v = r("ca/f"),
                b = r("E8Bj"),
                g = r("LHn/"),
                w = r("qnYv"),
                x = r("lmLo");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                C = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == k(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
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

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
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
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach((function(t) {
                        j(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
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

            function T(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function N(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e, t) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var B = function(e) {
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
                }(p, e);
                var t, r, n, s, c, l = S(p);

                function p(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), (t = l.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1
                    }, t.here = !0, t.groupId = e.match.params.id, t
                }
                return t = p, (r = [{
                    key: "componentDidMount",
                    value: (s = C().mark((function e() {
                        var t, r = this;
                        return C().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent && this.groupId) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    return e.next = 7, new Promise((function(e) {
                                        w.a.get("/api/groups", {
                                            params: {
                                                id: r.groupId
                                            }
                                        }).then((function(t) {
                                            var n = f.b.map((function(e) {
                                                return e.name
                                            })).indexOf(t.data.planName);
                                            (-1 === n && "Custom" !== t.data.planName || !r.here) && e();
                                            var o = -1 !== n ? f.b[n] : {
                                                name: "Custom",
                                                numPlans: t.data.numPlans
                                            };
                                            e(O(O({}, t.data), {}, {
                                                plan: o
                                            }))
                                        })).catch((function(t) {
                                            console.error(t), e()
                                        }))
                                    }));
                                case 7:
                                    if (t = e.sent) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/group-plan"));
                                case 10:
                                    this.setState({
                                        plan: t.plan,
                                        groupName: t.groupName
                                    }), w.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: g.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: t.groupName,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(t.plan.name, " Plan (Renewal)"),
                                                quantity: 1,
                                                unit_cost: t.plan.price,
                                                description: "".concat(t.plan.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        r.setState({
                                            pdf: e.data.pdf
                                        })
                                    })).catch((function(e) {
                                        return console.error(e)
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), c = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = s.apply(e, t);

                            function a(e) {
                                T(o, r, n, a, i, "next", e)
                            }

                            function i(e) {
                                T(o, r, n, a, i, "throw", e)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.groupId ? o.a.createElement("div", {
                            className: i.isMobile ? h.a.mBody : h.a.body
                        }, o.a.createElement(y.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), o.a.createElement(_.a, null), o.a.createElement("div", {
                            className: h.a.slantBackground
                        }), o.a.createElement("div", {
                            className: u()(h.a.regularBody, m.a.bodyContainer)
                        }, this.state.pdf ? o.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Invoice",
                            className: m.a.quote
                        }, o.a.createElement("a", {
                            className: m.a.downloadButton,
                            download: "BlooketInvoice.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, o.a.createElement("div", {
                            className: m.a.leftColumn
                        }, o.a.createElement("div", {
                            className: m.a.textContainer
                        }, o.a.createElement("div", {
                            className: m.a.textBigHeader
                        }, this.state.groupName), o.a.createElement("div", {
                            className: m.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), o.a.createElement("div", {
                            className: m.a.textContainer
                        }, o.a.createElement("div", {
                            className: m.a.textHeader
                        }, "Renew With Purchase Order"), "Upload your PO and we'll renew your plans immediately!", o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement(x.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            linkTo: "/upgrade/group/po?id=".concat("Custom" === this.state.plan.name ? "Custom" : this.state.plan.id, "&n=").concat(encodeURIComponent(this.state.groupName), "&r=true")
                        }, "Renew With Purchase Order"))), o.a.createElement("div", {
                            className: m.a.textContainer
                        }, o.a.createElement("div", {
                            className: m.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), o.a.createElement("div", {
                            className: m.a.bigText
                        }, "Send us an email at: ", o.a.createElement("a", {
                            className: m.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? o.a.createElement(v.a, {
                            text: "Loading...",
                            loading: !0
                        }) : null) : o.a.createElement(a.a, {
                            to: "/group-plan"
                        })
                    }
                }]) && N(t.prototype, r), n && N(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), p
            }(o.a.Component);
            B.propTypes = {
                match: c.a.object,
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(b.c)(B)
        },
        FXJY: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___14t8J-camelCase{width:550px;margin:20px auto;display:flex;flex-direction:column}.styles__container___23vKM-camelCase{box-sizing:border-box;padding:10px 15px 15px;background-color:#fff;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#3a3a3a}.styles__header___3rLVH-camelCase{font-size:36px;font-weight:700}.styles__subtext___3iGoD-camelCase{font-size:20px}.styles__inputHeader___vnd6d-camelCase{font-size:24px;font-weight:700}.styles__inputContainer___5nyy3-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:80%;height:30px;margin-bottom:10px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__inputContainer___5nyy3-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___5nyy3-camelCase:focus-within{border-color:#0bc2cf}.styles__input___25PKw-camelCase{padding:5px 10px;border-radius:5px;box-sizing:border-box;width:100%;height:100%;font-size:16px;text-align:left;outline:none;border:none}.styles__input___25PKw-camelCase:-moz-placeholder,.styles__input___25PKw-camelCase:-ms-input-placeholder,.styles__input___25PKw-camelCase::-moz-placeholder,.styles__input___25PKw-camelCase::-webkit-input-placeholder{color:#999}.styles__inputFilled___3FEha-camelCase{border-color:#3a3a3a}.styles__inputError___2ijT8-camelCase{border-color:#ce1313}.styles__dropContainer___tZDyw-camelCase{height:200px;width:100%;box-sizing:border-box;border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#3a3a3a;font-size:14px;margin-top:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__activeDropContainer___2TI6F-camelCase,.styles__dropContainer___tZDyw-camelCase:hover{background-color:rgba(11,194,207,.3)}.styles__dropIcon___2VuPy-camelCase{font-size:48px;margin-bottom:10px}.styles__dropHeader___151oh-camelCase{font-size:16px;font-weight:700}.styles__pdfRow___Jp-lE-camelCase{display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;margin-top:10px;font-size:20px;color:#3a3a3a;border-bottom:2px solid #0bc2cf}.styles__removeIcon___10i9e-camelCase{margin-right:10px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__removeIcon___10i9e-camelCase:hover{color:#0bc2cf}.styles__errorContainer___35u9C-camelCase{box-sizing:border-box;padding:10px 15px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2);background-color:#cf180b;border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#fff;display:flex;flex-direction:row}.styles__errorIcon___u9icy-camelCase{font-size:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-right:10px}.styles__submitButton___2-Wwm-camelCase{width:100%;margin:10px 0 30px}.styles__submitButtonInside___3ApjA-camelCase{height:40px;font-size:20px;font-weight:700}@media only screen and (max-width:600px){.styles__centerWrapper___14t8J-camelCase{width:90%}.styles__inputContainer___5nyy3-camelCase{width:95%}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___14t8J-camelCase",
                container: "styles__container___23vKM-camelCase",
                header: "styles__header___3rLVH-camelCase",
                subtext: "styles__subtext___3iGoD-camelCase",
                inputHeader: "styles__inputHeader___vnd6d-camelCase",
                inputContainer: "styles__inputContainer___5nyy3-camelCase",
                input: "styles__input___25PKw-camelCase",
                inputFilled: "styles__inputFilled___3FEha-camelCase",
                inputError: "styles__inputError___2ijT8-camelCase",
                dropContainer: "styles__dropContainer___tZDyw-camelCase",
                activeDropContainer: "styles__activeDropContainer___2TI6F-camelCase",
                dropIcon: "styles__dropIcon___2VuPy-camelCase",
                dropHeader: "styles__dropHeader___151oh-camelCase",
                pdfRow: "styles__pdfRow___Jp-lE-camelCase",
                removeIcon: "styles__removeIcon___10i9e-camelCase",
                errorContainer: "styles__errorContainer___35u9C-camelCase",
                errorIcon: "styles__errorIcon___u9icy-camelCase",
                submitButton: "styles__submitButton___2-Wwm-camelCase",
                submitButtonInside: "styles__submitButtonInside___3ApjA-camelCase"
            }
        },
        HR5N: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__background___20rdi-camelCase{height:100vh;width:150vw;background-color:#0bc2cf;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.styles__header___1Boll-camelCase{font-size:85px;margin:50px auto 25px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__planContainer___3Cj3J-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin:45px auto;max-width:1200px}.styles__plan___1OEy4-camelCase{width:350px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:10px;margin:15px;overflow:hidden;display:flex;flex-direction:column;position:relative}.styles__plan___1OEy4-camelCase,.styles__planBackground___3Hn_x-camelCase{padding-bottom:7px;box-sizing:border-box}.styles__planBackground___3Hn_x-camelCase{height:125px;width:400px;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:-30px;left:-25px;transform:rotate(5deg)}.styles__planTop___2JfpA-camelCase{font-size:65px;color:#fff;position:absolute;top:0;left:0;width:100%}.styles__planPrice___2fwN6-camelCase,.styles__planTop___2JfpA-camelCase{text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__planPrice___2fwN6-camelCase{font-size:90px;color:#3a3a3a;margin-top:110px}.styles__planSubText___1fl5s-camelCase{font-size:16px;opacity:.8;margin-bottom:25px}.styles__planDetail___V2tYJ-camelCase,.styles__planSubText___1fl5s-camelCase{text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__planDetail___V2tYJ-camelCase{font-size:22px}.styles__planSpacer___LF8cN-camelCase{width:80%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__planButton___2UTVa-camelCase{width:80%;margin:25px auto 20px}.styles__planButtonInside___wAgJI-camelCase{height:40px;font-size:30px;font-weight:700}.styles__groupContainer___RJh5K-camelCase{margin:10px auto 50px;box-sizing:border-box;width:90%;max-width:840px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:34px;font-weight:700;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px 20px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px}.styles__groupButton___1Dv-n-camelCase{width:240px;margin:20px auto 0}.styles__middleWrapper___hjUyY-camelCase{width:100%;padding:20px;box-sizing:border-box;background-color:#40115f}.styles__middleHeader___1knI4-camelCase{font-size:65px;margin:15px auto 30px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__middlePerks___3JJQv-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__perkContainer___2rw2I-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:400px;height:120px;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;flex-direction:row;justify-content:space-between}.styles__perkContainer___2rw2I-camelCase,.styles__perkIcon___3Ke37-camelCase{display:flex;align-items:center}.styles__perkIcon___3Ke37-camelCase{min-width:75px;height:75px;justify-content:center;font-size:60px;text-shadow:2px 2px rgba(0,0,0,.2);color:#fff}.styles__perkInfo___1jvHA-camelCase{display:flex;flex-direction:column;color:#fff;font-size:18px;width:calc(100% - 90px)}.styles__perkTitle___3vmIt-camelCase{font-family:Titan One,sans-serif;font-size:26px;text-shadow:2px 2px rgba(0,0,0,.2)}.styles__questionsHeader___2DqH--camelCase{font-size:50px;width:80%;margin:60px auto 5px;text-align:center;font-weight:700}.styles__questionsWrapper___XkktX-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__questionContainer___2heRn-camelCase{width:48%;background-color:#fff;padding:25px 25px 32px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;border-radius:7px;margin:10px auto;display:flex;flex-direction:column;text-align:left}.styles__questionHeader___1ZfHa-camelCase{font-size:32px;font-weight:700;margin-bottom:7px}.styles__questionText___2JwGo-camelCase{font-size:22px}@media screen and (max-width:1050px){.styles__header___1Boll-camelCase{font-size:55px}.styles__planContainer___3Cj3J-camelCase{flex-direction:column}}@media screen and (max-width:650px){.styles__questionContainer___2heRn-camelCase{width:100%}}@media screen and (max-width:550px){.styles__middleHeader___1knI4-camelCase{font-size:50px}.styles__middlePerks___3JJQv-camelCase{width:100%}.styles__perkContainer___2rw2I-camelCase{width:100%;height:160px}}", ""]), t.locals = {
                background: "styles__background___20rdi-camelCase",
                header: "styles__header___1Boll-camelCase",
                planContainer: "styles__planContainer___3Cj3J-camelCase",
                plan: "styles__plan___1OEy4-camelCase",
                planBackground: "styles__planBackground___3Hn_x-camelCase",
                planTop: "styles__planTop___2JfpA-camelCase",
                planPrice: "styles__planPrice___2fwN6-camelCase",
                planSubText: "styles__planSubText___1fl5s-camelCase",
                planDetail: "styles__planDetail___V2tYJ-camelCase",
                planSpacer: "styles__planSpacer___LF8cN-camelCase",
                planButton: "styles__planButton___2UTVa-camelCase",
                planButtonInside: "styles__planButtonInside___wAgJI-camelCase",
                groupContainer: "styles__groupContainer___RJh5K-camelCase",
                groupButton: "styles__groupButton___1Dv-n-camelCase",
                middleWrapper: "styles__middleWrapper___hjUyY-camelCase",
                middleHeader: "styles__middleHeader___1knI4-camelCase",
                middlePerks: "styles__middlePerks___3JJQv-camelCase",
                perkContainer: "styles__perkContainer___2rw2I-camelCase",
                perkIcon: "styles__perkIcon___3Ke37-camelCase",
                perkInfo: "styles__perkInfo___1jvHA-camelCase",
                perkTitle: "styles__perkTitle___3vmIt-camelCase",
                questionsHeader: "styles__questionsHeader___2DqH--camelCase",
                questionsWrapper: "styles__questionsWrapper___XkktX-camelCase",
                questionContainer: "styles__questionContainer___2heRn-camelCase",
                questionHeader: "styles__questionHeader___1ZfHa-camelCase",
                questionText: "styles__questionText___2JwGo-camelCase"
            }
        },
        IStp: function(e, t, r) {
            var n = r("1yxc");
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
        IuJg: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return S
            }));
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("Ty5D"),
                s = r("17x9"),
                c = r.n(s),
                l = r("v4r+"),
                u = r("XTAU"),
                f = r("oQ+7"),
                p = r("ca/f"),
                h = r("E8Bj"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("1JjF"),
                _ = r.n(y),
                v = r("qnYv"),
                b = r("lmLo");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == g(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function k(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            x(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            x(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = {
                    plus: {
                        item: "Plus",
                        desc: "Billed Yearly",
                        price: 35.88,
                        id: "plan_FbbkTL7b40AUXS"
                    },
                    "plus-flex": {
                        item: "Plus Flex",
                        desc: "Billed Monthy",
                        price: 4.99,
                        id: "plan_FbblVAXHOLJone"
                    }
                },
                S = "pk_live_sTAha4EGyVFNR6iM0eGQ2HJN00g683d3lP",
                L = function(e) {
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
                        }), t && E(e, t)
                    }(h, e);
                    var t, r, n, s, c = O(h);

                    function h(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (t = c.call(this, e)).state = {
                            item: "",
                            desc: "",
                            price: 0,
                            id: "",
                            loading: !1,
                            end: ""
                        }, t.onCheckout = t.onCheckout.bind(T(t)), t
                    }
                    return t = h, (r = [{
                        key: "componentDidMount",
                        value: (s = k(w().mark((function e() {
                            var t;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = P[this.props.match.params.plan]).item && this.setState({
                                            item: t.item,
                                            desc: t.desc,
                                            price: t.price,
                                            id: t.id
                                        }), e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent || this.props.history.push("/login");
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "onCheckout",
                        value: function() {
                            var e = this;
                            this.state.loading || (this.setState({
                                loading: !0
                            }), v.a.post("/api/users/stripe/checkout", {
                                planId: this.state.id
                            }).then(function() {
                                var e = k(w().mark((function e(t) {
                                    return w().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(l.a)(S);
                                            case 2:
                                                e.sent.redirectToCheckout({
                                                    sessionId: t.data
                                                }).then((function(e) {
                                                    e.error && console.error(e.error)
                                                }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(t) {
                                e.setState({
                                    loading: !1
                                }), console.error(t)
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return ["plus", "plus-flex"].includes(this.props.match.params.plan) ? o.a.createElement("div", {
                                className: a.isMobile ? m.a.mBody : m.a.body
                            }, o.a.createElement(u.a, {
                                title: "Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), o.a.createElement(f.a, null), o.a.createElement("div", {
                                className: m.a.slantBackground
                            }), o.a.createElement("div", {
                                className: m.a.regularBody
                            }, o.a.createElement("div", {
                                className: _.a.centerWrapper
                            }, o.a.createElement("div", {
                                style: {
                                    height: 50
                                }
                            }), o.a.createElement("div", {
                                className: _.a.payContainer
                            }, o.a.createElement("div", {
                                className: _.a.payHeader
                            }, "Checkout"), o.a.createElement("div", {
                                className: _.a.paySpacer
                            }), o.a.createElement("div", {
                                className: _.a.payRow
                            }, o.a.createElement("div", {
                                className: _.a.payColumn
                            }, o.a.createElement("div", {
                                className: _.a.payItem
                            }, "Blooket ".concat(this.state.item)), o.a.createElement("div", {
                                className: _.a.payDesc
                            }, this.state.desc)), o.a.createElement("div", {
                                className: _.a.payPrice
                            }, "$".concat(this.state.price))), o.a.createElement("div", {
                                className: _.a.paySpacer
                            }), o.a.createElement(b.a, {
                                color: "#0bc2cf",
                                outsideClass: _.a.payButton,
                                insideClass: _.a.payButtonInside,
                                onClick: this.onCheckout
                            }, "Checkout Now")), o.a.createElement("div", {
                                style: {
                                    height: 50
                                }
                            }))), this.state.loading || this.state.end ? o.a.createElement(p.a, {
                                text: this.state.end || "Processing...",
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Success!" === this.state.end ? "Thanks!" : "Refresh",
                                    click: function() {
                                        return "Success!" === e.state.end ? e.props.history.push("/dashboard") : window.location.reload()
                                    },
                                    color: "blue"
                                }
                            }) : null) : o.a.createElement(i.a, {
                                to: "/upgrade"
                            })
                        }
                    }]) && C(t.prototype, r), n && C(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), h
                }(o.a.Component);
            L.propTypes = {
                match: c.a.object,
                history: c.a.object,
                user: c.a.object
            }, t.b = Object(h.c)(L)
        },
        LYWA: function(e, t, r) {
            var n = r("HR5N");
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
        MgHH: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("HbJ1"),
                f = r("VgyX"),
                p = r("kQZX"),
                h = r("XTAU"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("u6qL"),
                _ = r("pMer"),
                v = r("+fLB");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e) {
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
                    var r, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return C(e)
            }

            function C(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var O = function(e) {
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
                }(i, e);
                var t, r, n, a = x(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = a.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(C(t)), t.changeMuted = t.changeMuted.bind(C(t)), t.audio = new Audio(_.a), t.audio.muted = t.state.muted, t
                }
                return t = i, (r = [{
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
                        this.ok = !0, this.props.history.push("/host/toy")
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
                        return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                            className: m.a.body
                        }, o.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement(y.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), o.a.createElement("div", {
                            className: m.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip")) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && g(t.prototype, r), n && g(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            O.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(i.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteHost: f.d,
                    setMuted: u.a
                }, e)
            }))(Object(v.d)(O)))
        },
        Ql8l: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__quote___3eu3i-camelCase{position:fixed;left:52.5%;top:calc(50% + 27.5px);height:80vh;transform:translateY(-50%)}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{max-width:500px;width:40%}.styles__leftColumn___3r3Gh-camelCase{position:absolute;top:35px;right:52.5%;display:flex;flex-direction:column}.styles__textContainer___3cx4T-camelCase{border-radius:5px;color:#3a3a3a;background-color:#fff;font-size:16px;font-family:Nunito,sans-serif;padding:15px 15px 20px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;width:100%;margin:10px 0}.styles__textBigHeader___1EKGt-camelCase{font-weight:700;font-size:28px}.styles__bigText___1iSnj-camelCase{font-size:18px}.styles__textHeader___3AeW0-camelCase{font-weight:700;font-size:22px}.styles__linkText___1pXMN-camelCase{color:#0bc2cf}.styles__button___18xiR-camelCase{margin-top:10px;width:230px}.styles__buttonInside___1V59O-camelCase{font-size:16px;padding:5px 10px}.styles__downloadButton___1LDDm-camelCase{display:flex;justify-content:center;align-items:center;width:100%;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:22px;font-weight:700;padding:10px;margin:15px 0 10px;box-sizing:border-box;border:2px solid #ff7b24;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;text-decoration:none;cursor:pointer;transition:.2s}.styles__downloadButton___1LDDm-camelCase:hover{transform:scale(.97)}@media only screen and (max-width:800px){.styles__bodyContainer___1vjut-camelCase{position:absolute;top:65px;left:5%;width:90%}.styles__quote___3eu3i-camelCase{margin:20px auto;height:400px;transform:none}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{position:static;width:100%}.styles__leftColumn___3r3Gh-camelCase{margin-bottom:20px}}", ""]), t.locals = {
                quote: "styles__quote___3eu3i-camelCase",
                leftColumn: "styles__leftColumn___3r3Gh-camelCase",
                textContainer: "styles__textContainer___3cx4T-camelCase",
                textBigHeader: "styles__textBigHeader___1EKGt-camelCase",
                bigText: "styles__bigText___1iSnj-camelCase",
                textHeader: "styles__textHeader___3AeW0-camelCase",
                linkText: "styles__linkText___1pXMN-camelCase",
                button: "styles__button___18xiR-camelCase",
                buttonInside: "styles__buttonInside___1V59O-camelCase",
                downloadButton: "styles__downloadButton___1LDDm-camelCase",
                bodyContainer: "styles__bodyContainer___1vjut-camelCase"
            }
        },
        "SY/F": function(e, t, r) {
            var n = r("YMPk");
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
        "UNV/": function(e, t, r) {
            var n = r("dIBP");
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
        YMPk: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___3SSbI-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;box-sizing:border-box;background-color:#fff;border-radius:7px;text-align:center;padding:20px 10px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a}.styles__header___1rSfi-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:5px}.styles__subheader___2qsD6-camelCase{font-size:28px;line-height:30px;font-family:Nunito,sans-serif;margin-bottom:30px}.styles__button___3ADDq-camelCase{width:200px;margin:10px auto}.styles__buttonInside___2C0ee-camelCase{height:40px;font-size:30px;font-weight:700}@media only screen and (max-width:600px){.styles__container___3SSbI-camelCase{max-width:320px}}", ""]), t.locals = {
                container: "styles__container___3SSbI-camelCase",
                header: "styles__header___1rSfi-camelCase",
                subheader: "styles__subheader___2qsD6-camelCase",
                button: "styles__button___3ADDq-camelCase",
                buttonInside: "styles__buttonInside___2C0ee-camelCase"
            }
        },
        ZXWq: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("Ty5D"),
                s = r("17x9"),
                c = r.n(s),
                l = r("TSYQ"),
                u = r.n(l),
                f = r("XTAU"),
                p = r("oQ+7"),
                h = r("lmLo"),
                d = r("E8Bj"),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("LYWA"),
                v = r.n(_),
                b = r("qnYv");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == g(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function k(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var N = [{
                    title: "Folders",
                    desc: "Create folders to organize your question sets and favorites",
                    icon: "fas fa-folder"
                }, {
                    title: "Larger Live Games",
                    desc: "Host games with up to 300 players (60 player max with Starter)",
                    icon: "fas fa-users"
                }, {
                    title: "Enhanced Reports",
                    desc: "View question-by-question data and individual student breakdowns",
                    icon: "fas fa-chart-bar"
                }, {
                    title: "Early Game Access",
                    desc: "Gain access to game modes weeks before Starter users",
                    icon: "fas fa-gamepad"
                }, {
                    title: "Copy & Duplicate",
                    desc: "Create your own copy of any set to edit for yourself",
                    icon: "fas fa-copy"
                }, {
                    title: "Audio Questions",
                    desc: "Record or upload your own audio and add it to questions",
                    icon: "fas fa-microphone-alt"
                }, {
                    title: "Longer Deadlines",
                    desc: "Assign homeworks for up to 365 days (14 day max with Starter)",
                    icon: "fas fa-file-alt"
                }, {
                    title: "Merging Sets",
                    desc: "Combine two of your sets with only a few clicks",
                    icon: "fas fa-random"
                }, {
                    title: "Bonus Tokens",
                    desc: "10 extra tokens for students after every game",
                    icon: "fas fa-coins"
                }],
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
                        }), t && C(e, t)
                    }(l, e);
                    var t, r, n, i, s, c = E(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = c.call(this, e)).state = {
                            loggedIn: !1,
                            plan: "Starter",
                            idBase: "",
                            dashboardBase: ""
                        }, t.goToUpgradeLink = t.goToUpgradeLink.bind(j(t)), t
                    }
                    return t = l, (r = [{
                        key: "componentDidMount",
                        value: (i = w().mark((function e() {
                            var t = this;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b.a.get("/api/config").then((function(e) {
                                            t.setState({
                                                idBase: e.data.frontendIDBase,
                                                dashboardBase: e.data.frontendDashboardBase
                                            })
                                        }));
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent && b.a.put("/api/users/plan").then((function(e) {
                                            t.setState({
                                                loggedIn: !0,
                                                plan: e.data.plan
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(e, t);

                                function a(e) {
                                    x(o, r, n, a, s, "next", e)
                                }

                                function s(e) {
                                    x(o, r, n, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "goToUpgradeLink",
                        value: function(e) {
                            var t = "",
                                r = ["Plus", "Plus Flex"].includes(this.state.plan);
                            if (this.state.loggedIn) t = r ? "/dashboard" : "/upgrade/checkout/".concat(e);
                            else {
                                var n = "".concat(this.state.dashboardBase, "/upgrade/checkout/").concat(e);
                                t = "".concat(this.state.idBase, "/signup?n=").concat(n)
                            }
                            window.location.href = t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: a.isMobile ? y.a.mBody : y.a.body
                            }, o.a.createElement(f.a, {
                                title: "Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), o.a.createElement(p.a, null), o.a.createElement("div", {
                                className: v.a.background
                            }), o.a.createElement("div", {
                                className: y.a.regularBody
                            }, o.a.createElement("div", {
                                className: v.a.header
                            }, "Level Up Your Classroom"), o.a.createElement("div", {
                                className: v.a.planContainer
                            }, o.a.createElement("div", {
                                className: v.a.plan
                            }, o.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#7fba43"
                                }
                            }), o.a.createElement("div", {
                                className: v.a.planTop
                            }, "Starter"), o.a.createElement("div", {
                                className: v.a.planPrice
                            }, "Free"), o.a.createElement("div", {
                                className: v.a.planSubText
                            }, "forever"), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unlimited Sets & Edits"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unique Game Modes"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Search"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 60 Players"), o.a.createElement(h.a, {
                                color: "#7fba43",
                                linkTo: this.state.loggedIn ? "/dashboard" : "/signup",
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Already Owned" : "Get Started")), o.a.createElement("div", {
                                className: v.a.plan
                            }, o.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#ff7b24"
                                }
                            }), o.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus"), o.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$2.99"), o.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month, charged yearly ($35.88)"), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Starter Features"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Enhanced Game Reports"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Early Event Access"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Folders"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Student Bonus Tokens"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Copy & Duplicate Sets"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 300 Players"), o.a.createElement(h.a, {
                                color: "#ff7b24",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Plus" === this.state.plan ? "Already Owned" : "Plus Flex" === this.state.plan ? "Already On Plus Flex" : "Buy Now" : "Get Started")), o.a.createElement("div", {
                                className: v.a.plan
                            }, o.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#eb5726"
                                }
                            }), o.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus Flex"), o.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$4.99"), o.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month"), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Plus Features"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Pay Monthly"), o.a.createElement("div", {
                                className: v.a.planSpacer
                            }), o.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Cancel Whenever"), o.a.createElement(h.a, {
                                color: "#eb5726",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus-flex")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Plus Flex" === this.state.plan ? "Already Owned" : "Plus" === this.state.plan ? "Already On Plus" : "Buy Now" : "Get Started"))), o.a.createElement("div", {
                                className: v.a.groupContainer
                            }, "Looking for a discount? Try group subscriptions!", o.a.createElement(h.a, {
                                color: "#0bc2cf",
                                linkTo: "/upgrade/group/price",
                                outsideClass: v.a.groupButton,
                                insideClass: v.a.planButtonInside
                            }, "Group Pricing")), o.a.createElement("div", {
                                className: v.a.middleWrapper
                            }, o.a.createElement("div", {
                                className: v.a.middleHeader
                            }, "Perks of Plus"), o.a.createElement("div", {
                                className: v.a.middlePerks
                            }, N.map((function(e) {
                                return o.a.createElement("div", {
                                    key: e.title,
                                    className: v.a.perkContainer
                                }, o.a.createElement("i", {
                                    className: u()(e.icon, v.a.perkIcon)
                                }), o.a.createElement("div", {
                                    className: v.a.perkInfo
                                }, o.a.createElement("div", {
                                    className: v.a.perkTitle
                                }, e.title), e.desc))
                            })))), o.a.createElement("div", {
                                className: v.a.questionsHeader
                            }, "Common Questions"), o.a.createElement("div", {
                                className: v.a.questionsWrapper
                            }, o.a.createElement("div", {
                                className: v.a.questionContainer
                            }, o.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "How do I pay?"), o.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  We accept all major credits cards. Also, in order\n                  to keep your information secure, we use a trusted third party service\n                  to handle all payments. We will automatically renew Blooket Plus every\n                  year and Blooket Plus Flex every month unless you cancel the subscription\n                  in the Settings page of your profile.\n                ")), o.a.createElement("div", {
                                className: v.a.questionContainer
                            }, o.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "Can I use a purchase order?"), o.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  Unfortunately, we do not accept purchase orders for individual subscriptions.\n                  However, you can use a purchase order for group plans. We’ll generate a quote\n                  for you and send you a final invoice using your purchase order for these subscriptions.\n                "))), o.a.createElement("div", {
                                style: {
                                    height: 10
                                }
                            })))
                        }
                    }]) && k(t.prototype, r), n && k(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(o.a.Component);
            P.propTypes = {
                user: c.a.object
            }, t.a = Object(d.c)(Object(i.g)(P))
        },
        bm2Z: function(e, t, r) {
            var n = r("FXJY");
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
        dIBP: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__left___mQygb-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingContainer___1NL9x-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;border-radius:8px;box-shadow:5px 5px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___1NL9x-camelCase:hover{opacity:.4}.styles__standingInside___2z-2--camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___2m5zj-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;margin:auto 0;height:5.75vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___2m5zj-camelCase,.styles__superPlaceText___sjHE9-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___sjHE9-camelCase{text-align:left;width:1.4vw;font-size:1.2vw;margin-top:4px;margin-left:1px}.styles__blookBox___34JX1-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___2bF9e-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__toyContainer___3oO-r-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__toyText___2aW8f-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__toyIcon___F71de-camelCase{height:60%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___eBbCU-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#f23941;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___3iRj5-camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___lNYQp-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___35v85-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___1i69P-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___1fZTL-camelCase{font-family:Titan One,sans-serif;font-size:3vw}.styles__totalToyContainer___2XYuD-camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalToyContainer___2XYuD-camelCase,.styles__totalToyInside___2aeXQ-camelCase{background-color:#0cb04a;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalToyInside___2aeXQ-camelCase{border:5px solid #fff;width:100%;height:100%}.styles__totalToyText___2iPXY-camelCase{color:#fff;font-family:Titan One,sans-serif;font-size:3.5vw}.styles__totalToyIcon___ECbxp-camelCase{height:60%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__winterBackground___1rIxA-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__mountainsBackground___4yHfd-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___4yHfd-camelCase,.styles__plowSnow___3nROZ-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__plowSnow___3nROZ-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;-webkit-animation:styles__plowSnow___3nROZ-camelCase 8s linear 0s forwards;animation:styles__plowSnow___3nROZ-camelCase 8s linear 0s forwards}@-webkit-keyframes styles__plowSnow___3nROZ-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}@keyframes styles__plowSnow___3nROZ-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___1Zr3g-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plow___1Zr3g-camelCase 6s linear 2s forwards;animation:styles__plow___1Zr3g-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plow___1Zr3g-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}@keyframes styles__plow___1Zr3g-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___26Vmo-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plowBlook___26Vmo-camelCase 6s linear 2s forwards;animation:styles__plowBlook___26Vmo-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plowBlook___26Vmo-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}@keyframes styles__plowBlook___26Vmo-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___3qu1v-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___3qu1v-camelCase,.styles__canada2___2TdCw-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2TdCw-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___21S0a-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___21S0a-camelCase,.styles__canadaIcon___lhtS3-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___lhtS3-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___1kFjC-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-animation:styles__blow___2RGG7-camelCase 5s linear 2s forwards;animation:styles__blow___2RGG7-camelCase 5s linear 2s forwards}@-webkit-keyframes styles__blow___2RGG7-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}@keyframes styles__blow___2RGG7-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___2uujs-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;z-index:12;transition:.5s}.styles__treeImg___1Neub-camelCase{height:100%;width:100%}", ""]), t.locals = {
                left: "styles__left___mQygb-camelCase",
                standingContainer: "styles__standingContainer___1NL9x-camelCase",
                standingInside: "styles__standingInside___2z-2--camelCase",
                placeText: "styles__placeText___2m5zj-camelCase",
                superPlaceText: "styles__superPlaceText___sjHE9-camelCase",
                blookBox: "styles__blookBox___34JX1-camelCase",
                nameText: "styles__nameText___2bF9e-camelCase",
                toyContainer: "styles__toyContainer___3oO-r-camelCase",
                toyText: "styles__toyText___2aW8f-camelCase",
                toyIcon: "styles__toyIcon___F71de-camelCase",
                chatroom: "styles__chatroom___eBbCU-camelCase",
                chatroomInside: "styles__chatroomInside___3iRj5-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___lNYQp-camelCase",
                noAlerts: "styles__noAlerts___35v85-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___1i69P-camelCase",
                noAlertsText: "styles__noAlertsText___1fZTL-camelCase",
                totalToyContainer: "styles__totalToyContainer___2XYuD-camelCase",
                totalToyInside: "styles__totalToyInside___2aeXQ-camelCase",
                totalToyText: "styles__totalToyText___2iPXY-camelCase",
                totalToyIcon: "styles__totalToyIcon___ECbxp-camelCase",
                winterBackground: "styles__winterBackground___1rIxA-camelCase",
                mountainsBackground: "styles__mountainsBackground___4yHfd-camelCase",
                plowSnow: "styles__plowSnow___3nROZ-camelCase",
                plow: "styles__plow___1Zr3g-camelCase",
                plowBlook: "styles__plowBlook___26Vmo-camelCase",
                canada1: "styles__canada1___3qu1v-camelCase",
                canada2: "styles__canada2___2TdCw-camelCase",
                canada3: "styles__canada3___21S0a-camelCase",
                canadaIcon: "styles__canadaIcon___lhtS3-camelCase",
                wind: "styles__wind___1kFjC-camelCase",
                blow: "styles__blow___2RGG7-camelCase",
                treeContainer: "styles__treeContainer___2uujs-camelCase",
                treeImg: "styles__treeImg___1Neub-camelCase"
            }
        },
        fKgg: function(e, t, r) {
            var n = r("1OWE");
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
        fT0c: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r("q1tI"),
                    o = r.n(n),
                    a = r("Ty5D"),
                    i = r("H1WH"),
                    s = r("17x9"),
                    c = r.n(s),
                    l = r("TSYQ"),
                    u = r.n(l),
                    f = r("wd/R"),
                    p = r.n(f),
                    h = r("yzbm"),
                    d = r("WjD0"),
                    m = r.n(d),
                    y = r("mOsA"),
                    _ = r("Xst1"),
                    v = r.n(_),
                    b = r("bm2Z"),
                    g = r.n(b),
                    w = r("XTAU"),
                    x = r("oQ+7"),
                    k = r("ca/f"),
                    C = r("74sb"),
                    E = r("E8Bj"),
                    O = r("swc+"),
                    j = r("qnYv"),
                    T = r("lmLo");

                function N(e) {
                    return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function P(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function S() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    S = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        r = t.hasOwnProperty,
                        n = "function" == typeof Symbol ? Symbol : {},
                        o = n.iterator || "@@iterator",
                        a = n.asyncIterator || "@@asyncIterator",
                        i = n.toStringTag || "@@toStringTag";

                    function s(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        s({}, "")
                    } catch (e) {
                        s = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function c(e, t, r, n) {
                        var o = t && t.prototype instanceof f ? t : f,
                            a = Object.create(o.prototype),
                            i = new k(n || []);
                        return a._invoke = function(e, t, r) {
                            var n = "suspendedStart";
                            return function(o, a) {
                                if ("executing" === n) throw new Error("Generator is already running");
                                if ("completed" === n) {
                                    if ("throw" === o) throw a;
                                    return E()
                                }
                                for (r.method = o, r.arg = a;;) {
                                    var i = r.delegate;
                                    if (i) {
                                        var s = g(i, r);
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
                        }(e, r, i), a
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

                    function p() {}

                    function h() {}
                    var d = {};
                    s(d, o, (function() {
                        return this
                    }));
                    var m = Object.getPrototypeOf,
                        y = m && m(m(C([])));
                    y && y !== t && r.call(y, o) && (d = y);
                    var _ = h.prototype = f.prototype = Object.create(d);

                    function v(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            s(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function b(e, t) {
                        var n;
                        this._invoke = function(o, a) {
                            function i() {
                                return new t((function(n, i) {
                                    ! function n(o, a, i, s) {
                                        var c = l(e[o], e, a);
                                        if ("throw" !== c.type) {
                                            var u = c.arg,
                                                f = u.value;
                                            return f && "object" == N(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(f).then((function(e) {
                                                u.value = e, i(u)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(c.arg)
                                    }(o, a, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
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

                    function w(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function x(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function k(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(w, this), this.reset(!0)
                    }

                    function C(e) {
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
                    return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, v(b.prototype), s(b.prototype, a, (function() {
                        return this
                    })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                        void 0 === a && (a = Promise);
                        var i = new b(c(t, r, n, o), a);
                        return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                        return this
                    })), s(_, "toString", (function() {
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
                    }, e.values = C, k.prototype = {
                        constructor: k,
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
                                return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    i = a.completion;
                                if ("root" === a.tryLoc) return n("end");
                                if (a.tryLoc <= this.prev) {
                                    var s = r.call(a, "catchLoc"),
                                        c = r.call(a, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                    } else if (s) {
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
                            var i = a ? a.completion : {};
                            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
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
                                iterator: C(e),
                                resultName: t,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = void 0), u
                        }
                    }, e
                }

                function L(e, t, r, n, o, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(n, o)
                }

                function I(e, t) {
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

                function R(e) {
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
                        var r, n = D(e);
                        if (t) {
                            var o = D(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return z(this, r)
                    }
                }

                function z(e, t) {
                    if (t && ("object" === N(t) || "function" == typeof t)) return t;
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
                var F = function(t) {
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
                    }(d, t);
                    var r, n, s, c, l, f = R(d);

                    function d(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), (t = f.call(this, e)).state = {
                            plan: {},
                            groupName: "",
                            groupNameError: "",
                            poNumber: "",
                            poNumberError: "",
                            pdf: null,
                            pdfError: ""
                        }, t.email = "", t.isRenewal = Boolean(Object(C.j)("r")), t.onPdfDrop = t.onPdfDrop.bind(A(t)), t.onSubscribe = t.onSubscribe.bind(A(t)), t
                    }
                    return r = d, (n = [{
                        key: "componentDidMount",
                        value: (c = S().mark((function e() {
                            var t, r, n, o;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.setState({
                                                groupName: decodeURIComponent(Object(C.j)("n"))
                                            }), t = Object(C.j)("id"), -1 !== (r = y.b.map((function(e) {
                                                return e.id
                                            })).indexOf(t))) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return n = y.b[r], this.setState({
                                            plan: n
                                        }), e.next = 9, this.props.user.getData();
                                    case 9:
                                        if (o = e.sent) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 12:
                                        this.email = o.email;
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), l = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = c.apply(e, t);

                                function a(e) {
                                    L(o, r, n, a, i, "next", e)
                                }

                                function i(e) {
                                    L(o, r, n, a, i, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "onPdfDrop",
                        value: function(e) {
                            var t = e[0];
                            t ? this.setState({
                                pdfError: "",
                                pdf: t
                            }) : this.setState({
                                pdfError: "Error uploading the PDF",
                                pdf: null
                            })
                        }
                    }, {
                        key: "onSubscribe",
                        value: function(t) {
                            var r = this;
                            t.preventDefault(), this.setState({
                                loading: !0
                            });
                            var n = "",
                                o = "",
                                a = "";
                            if (this.state.groupName || (n = "Group Name is required."), this.state.poNumber || (o = "Purchase Order Number is required."), this.state.pdf || (a = "Purchase Order PDF is required."), this.setState({
                                    groupNameError: n,
                                    poNumberError: o,
                                    pdfError: a
                                }), n || o || a) this.setState({
                                loading: !1
                            });
                            else {
                                var i = new m.a;
                                i.append("file", this.state.pdf), i.append("folder", "POs"), i.append("upload_preset", "normal"), i.append("api_key", e.env.CLOUDINARY_API_KEY), i.append("timestamp", parseInt(Date.now() / 1e3, 10)), O.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", i, {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    withCredentials: !1
                                }).then((function(e) {
                                    r.isRenewal ? j.a.put("/api/groups/renew", {
                                        groupName: r.state.groupName,
                                        poNumber: r.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        r.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        console.error(e), r.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    })) : j.a.post("/api/groups/po", {
                                        email: r.email,
                                        plan: r.state.plan,
                                        groupName: r.state.groupName,
                                        poNumber: r.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        r.props.user.getLoggedIn(), r.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        console.error(e), r.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    }))
                                })).catch((function(e) {
                                    console.error(e), r.setState({
                                        loading: !1,
                                        groupNameError: "Something went very wrong. Please contact support."
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, r = this;
                            return -1 === y.b.map((function(e) {
                                return e.id
                            })).indexOf(Object(C.j)("id")) && "Custom" !== Object(C.j)("id") && (this.redirect = !0), this.redirect ? o.a.createElement(a.a, {
                                to: "/upgrade/group/price"
                            }) : o.a.createElement("div", {
                                className: i.isMobile ? v.a.mBody : v.a.body
                            }, o.a.createElement(w.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), o.a.createElement(x.a, null), o.a.createElement("div", {
                                className: v.a.slantBackground
                            }), o.a.createElement("div", {
                                className: v.a.regularBody
                            }, this.state.plan && this.state.plan.id || "Custom" === Object(C.j)("id") ? o.a.createElement("form", {
                                onSubmit: this.onSubscribe,
                                className: g.a.centerWrapper
                            }, o.a.createElement("div", {
                                className: g.a.container
                            }, o.a.createElement("div", {
                                className: g.a.header
                            }, "Pay With Purchase Order"), o.a.createElement("div", {
                                className: g.a.subtext
                            }, "Blooket Plus: ".concat("Custom" === Object(C.j)("id") ? "Custom" : this.state.plan.name, " Plan"))), o.a.createElement("div", {
                                className: g.a.container
                            }, o.a.createElement("div", {
                                className: g.a.inputHeader
                            }, "Subscription Group Name"), o.a.createElement("div", {
                                className: u()(g.a.inputContainer, (e = {}, P(e, g.a.inputFilled, this.state.groupName), P(e, g.a.inputError, this.state.groupNameError), e))
                            }, o.a.createElement("input", {
                                className: g.a.input,
                                placeholder: "Group Name...",
                                onChange: function(e) {
                                    return r.setState({
                                        groupName: e.target.value.slice(0, 50),
                                        groupNameError: ""
                                    })
                                },
                                value: this.state.groupName,
                                type: "text"
                            })), o.a.createElement("div", {
                                className: g.a.inputHeader
                            }, "Purchase Order Number"), o.a.createElement("div", {
                                className: u()(g.a.inputContainer, (t = {}, P(t, g.a.inputFilled, this.state.poNumber), P(t, g.a.inputErorr, this.state.poNumberError), t)),
                                style: {
                                    marginBottom: 10
                                }
                            }, o.a.createElement("input", {
                                className: g.a.input,
                                placeholder: "Purchase Order Number...",
                                onChange: function(e) {
                                    return r.setState({
                                        poNumber: e.target.value.slice(0, 50),
                                        poNumberError: ""
                                    })
                                },
                                value: this.state.poNumber,
                                type: "text"
                            }))), o.a.createElement("div", {
                                className: g.a.container
                            }, this.isRenewal ? "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The will extend the subscription for 1 year past the current end date.\n                " : "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The subscription will last for 1 year until ".concat(p()().format("MM/DD/YYYY"), ".\n                "), o.a.createElement("br", null), o.a.createElement("br", null), this.isRenewal ? "\n                  Your members' plans will automatically be extended, but all plans will\n                  be canceled if payment is not received within 30 days.\n                " : "\n                  You'll be able to distribute the plans as soon as you upload the PO, but all plans will\n                  be canceled if payment is not received within 30 days.\n                ", o.a.createElement("br", null), o.a.createElement("br", null), "\n                  WARNING: Uploading a fake purchase order can be punished through the deletion of your account.\n                "), o.a.createElement("div", {
                                className: g.a.container
                            }, o.a.createElement("div", {
                                className: g.a.inputHeader
                            }, "Upload Purchase Order PDF"), this.state.pdf ? o.a.createElement("div", {
                                className: g.a.pdfRow
                            }, o.a.createElement("i", {
                                className: u()("fas fa-times", g.a.removeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        pdf: null,
                                        pdfError: ""
                                    })
                                }
                            }), this.state.pdf.name) : o.a.createElement(h.a, {
                                multiple: !1,
                                accept: "application/pdf",
                                onDropAccepted: this.onPdfDrop,
                                onDropRejected: function() {
                                    return r.setState({
                                        pdfError: "PDF Denied (Check PDF Format & Size < 2.5 MB)"
                                    })
                                },
                                className: g.a.dropContainer,
                                activeClassName: g.a.activeDropContainer,
                                maxSize: 25e5
                            }, o.a.createElement("i", {
                                className: u()("fas fa-file-upload", g.a.dropIcon)
                            }), o.a.createElement("div", {
                                className: g.a.dropHeader
                            }, "Drag a PDF or Click to Upload"), "File must be less than 5MB")), this.state.groupNameError || this.state.poNumberError || this.state.pdfError ? o.a.createElement("div", {
                                className: g.a.errorContainer
                            }, o.a.createElement("i", {
                                className: u()("fas fa-times-circle", g.a.errorIcon)
                            }), this.state.groupNameError || this.state.poNumberError || this.state.pdfError) : null, o.a.createElement(T.a, {
                                color: "#0bc2cf",
                                outsideClass: g.a.submitButton,
                                insideClass: g.a.submitButtonInside,
                                onClick: this.onSubscribe
                            }, this.isRenewal ? "Renew Now" : "Subscribe Now"), o.a.createElement("input", {
                                type: "submit",
                                style: {
                                    opacity: 0,
                                    display: "none"
                                }
                            })) : null), this.state.loading ? o.a.createElement(k.a, {
                                text: "Processing...",
                                loading: !0
                            }) : null)
                        }
                    }]) && I(r.prototype, n), s && I(r, s), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), d
                }(o.a.Component);
                F.propTypes = {
                    history: c.a.object,
                    user: c.a.object
                }, t.a = Object(E.c)(F)
            }).call(this, r("8oxB"))
        },
        hTCb: function(e, t, r) {
            var n = r("0YT7");
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
        jgVY: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = {
                    "Oh Canada": "c",
                    Blizzard: "b",
                    "Fog Spell": "f",
                    "Dark & Dusk": "d",
                    "Howling Wind": "w",
                    "Gift Time!": "g",
                    TREES: "t",
                    "Snow Plow": "s",
                    "Use The Force": "fr"
                },
                o = {
                    c: "Oh Canada",
                    b: "Blizzard",
                    f: "Fog Spell",
                    d: "Dark & Dusk",
                    w: "Howling Wind",
                    g: "Gift Time!",
                    t: "TREES",
                    s: "Snow Plow",
                    fr: "Use The Force"
                }
        },
        l1WF: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__statContainer___3Oz9i-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__toysText___2JjdM-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__toyImage___3AKWo-camelCase{height:55%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___3Oz9i-camelCase",
                toysText: "styles__toysText___2JjdM-camelCase",
                toyImage: "styles__toyImage___3AKWo-camelCase"
            }
        },
        lGiS: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("4HzQ"),
                f = r("1F66"),
                p = r.n(f),
                h = r("ZRP+"),
                d = r("TSYQ"),
                m = r.n(d),
                y = r("wd/R"),
                _ = r.n(y),
                v = (r("RiPy"), r("HbJ1")),
                b = r("+xn+"),
                g = r("VgyX"),
                w = r("kQZX"),
                x = r("qFIf"),
                k = r("XTAU"),
                C = r("ca/f"),
                E = r("Xst1"),
                O = r.n(E),
                j = r("UNV/"),
                T = r.n(j),
                N = r("qecx"),
                P = r("jgVY"),
                S = r("LHn/"),
                L = r("0oXL"),
                I = r("yCIc"),
                B = r("r9Y0"),
                R = r("74sb"),
                z = r("r1Fc"),
                A = r("+fLB");

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function F(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(r), !0).forEach((function(t) {
                        q(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function(t) {
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

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return Q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || W(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(e, t) || W(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, t) {
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

            function U() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                U = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new k(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return E()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(C([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == D(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
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

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function C(e) {
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = C, k.prototype = {
                    constructor: k,
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
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
                            iterator: C(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function Y(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function X(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function J(e, t) {
                return (J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function V(e) {
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
                    var r, n = $(e);
                    if (t) {
                        var o = $(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return K(this, r)
                }
            }

            function K(e, t) {
                if (t && ("object" === D(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Z(e)
            }

            function Z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function $(e) {
                return ($ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ee = function(e) {
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
                    }), t && J(e, t)
                }(c, e);
                var t, r, n, a, i, s = V(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalToys: 0,
                        muted: !!e.host && e.host.muted,
                        fog: !1,
                        dusk: !1,
                        wind: !1,
                        plow: !1,
                        blizzard: !1,
                        force: !1,
                        canada: !1,
                        trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                        userToBlock: ""
                    }, t.ok = !1, t.dbRefAction = {}, t.alertContainer = o.a.createRef(), t.goNext = t.goNext.bind(Z(t)), t.addAlert = t.addAlert.bind(Z(t)), t.scrollToBottom = t.scrollToBottom.bind(Z(t)), t.changeMuted = t.changeMuted.bind(Z(t)), t.blockUser = t.blockUser.bind(Z(t)), t.audio = new Audio(z.a), t.audio.muted = t.state.muted, t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (a = U().mark((function e() {
                        var t, r, n = this;
                        return U().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.host && this.props.host.settings) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        n.audio.currentTime = 0, n.audio.play()
                                    }), !1), this.props.firebase.setStage({
                                        id: this.props.host.id,
                                        stage: "toy"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, r = 3, this.setState({
                                        timer: _.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        t -= 1, n.setState({
                                            timer: _.a.duration(t, "seconds").format("mm:ss")
                                        }), t <= 0 ? (n.getClients(!0), clearInterval(n.timerInterval)) : 0 === r ? (n.getClients(!1), r = 3) : r -= 1
                                    }), 1e3)) : this.clientsInterval = setInterval((function() {
                                        n.getClients(!1)
                                    }), 4e3), e.next = 10, this.props.firebase.getDatabaseRef(this.props.host.id, "act");
                                case 10:
                                    this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                        if (e.val() && e.val().s) {
                                            var t = P.b[e.val().s];
                                            "Oh Canada" === t ? (clearTimeout(n.canadaTimeout), n.setState({
                                                canada: !1
                                            }, (function() {
                                                n.setState({
                                                    canada: !0
                                                }, (function() {
                                                    n.canadaTimeout = setTimeout((function() {
                                                        n.setState({
                                                            canada: !1
                                                        })
                                                    }), 1e4)
                                                }))
                                            }))) : "Blizzard" === t ? (clearTimeout(n.blizzardTimeout), n.setState({
                                                blizzard: !1
                                            }, (function() {
                                                n.setState({
                                                    blizzard: !0
                                                }, (function() {
                                                    n.blizzardTimeout = setTimeout((function() {
                                                        n.setState({
                                                            blizzard: !1
                                                        })
                                                    }), 17e3)
                                                }))
                                            }))) : "Fog Spell" === t ? (clearTimeout(n.fogTimeout), n.setState({
                                                fog: !1
                                            }, (function() {
                                                n.setState({
                                                    fog: !0
                                                }, (function() {
                                                    n.fogTimeout = setTimeout((function() {
                                                        n.setState({
                                                            fog: !1
                                                        })
                                                    }), 8e3)
                                                }))
                                            }))) : "Dark & Dusk" === t ? (clearTimeout(n.duskTimeout), n.setState({
                                                dusk: !1
                                            }, (function() {
                                                n.setState({
                                                    dusk: !0
                                                }, (function() {
                                                    n.duskTimeout = setTimeout((function() {
                                                        n.setState({
                                                            dusk: !1
                                                        })
                                                    }), 1e4)
                                                }))
                                            }))) : "Howling Wind" === t ? (clearTimeout(n.windTimeout), n.setState({
                                                wind: !1
                                            }, (function() {
                                                n.setState({
                                                    wind: !0
                                                }, (function() {
                                                    n.windTimeout = setTimeout((function() {
                                                        n.setState({
                                                            wind: !1
                                                        })
                                                    }), 7050)
                                                }))
                                            }))) : "TREES" === t ? (clearTimeout(n.treeTimeout), n.setState({
                                                trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                                            }, (function() {
                                                n.treeTimeout = setTimeout((function() {
                                                    n.setState({
                                                        trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                                                    })
                                                }), 8050)
                                            }))) : "Snow Plow" === t ? (clearTimeout(n.plowTimeout), n.setState({
                                                plow: !1
                                            }, (function() {
                                                n.setState({
                                                    plow: !0
                                                }, (function() {
                                                    n.plowTimeout = setTimeout((function() {
                                                        n.setState({
                                                            plow: !1
                                                        })
                                                    }), 8050)
                                                }))
                                            }))) : "Use The Force" === t && (clearTimeout(n.forceTimeout), n.setState({
                                                force: !1
                                            }, (function() {
                                                n.setState({
                                                    force: !0
                                                }, (function() {
                                                    n.forceTimeout = setTimeout((function() {
                                                        n.setState({
                                                            force: !1
                                                        })
                                                    }), 18100)
                                                }))
                                            }))), n.addAlert(e.val().n, e.val().b, 'sabotaged with "'.concat(t, '"'))
                                        }
                                    })), this.alertContainer = document.querySelector("#alerts");
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function i(e) {
                                Y(o, r, n, i, s, "next", e)
                            }

                            function s(e) {
                                Y(o, r, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), clearTimeout(this.treeTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(r) {
                            var n = r || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var o = "Amount" === t.props.host.settings.mode,
                                    a = !1,
                                    i = Object.entries(n).map((function(e) {
                                        var t = M(e, 2),
                                            r = t[0],
                                            n = t[1];
                                        return {
                                            name: r,
                                            blook: n.b,
                                            toys: n.t || 0,
                                            toAttack: n.tat
                                        }
                                    })),
                                    s = i.map((function(e) {
                                        return e.name
                                    }));
                                i.forEach((function(e) {
                                    if (e.toAttack) {
                                        var r = e.toAttack.split(":");
                                        if (1 === r.length) return t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "act",
                                            val: {
                                                n: e.name,
                                                b: e.blook,
                                                s: r[0]
                                            }
                                        }), void t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"));
                                        var n = s.indexOf(r[0]);
                                        if (-1 === n) return;
                                        var o = i[n];
                                        if ("swap" === r[1]) {
                                            if (r.length < 3 || isNaN(r[2])) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(o.name),
                                                val: {
                                                    b: o.blook,
                                                    t: r[2],
                                                    at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(r[2])
                                                }
                                            }), i[n].toys = r[2], t.addAlert(e.name, e.blook, "just swapped toys with ".concat(o.name))
                                        } else {
                                            if (r.length < 2 || isNaN(r[1])) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(o.name),
                                                val: {
                                                    b: o.blook,
                                                    t: Math.max((o.toys || 0) - r[1], 0),
                                                    at: "".concat(e.name, ":").concat(e.blook, ":").concat(r[1])
                                                }
                                            }), i[n].toys = Math.max((o.toys || 0) - r[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(R.o)(r[1]), " ").concat("1" === r[1] ? "toy" : "toys", " from ").concat(o.name))
                                        }
                                        t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                                    }
                                })), i.sort((function(e, t) {
                                    return t.toys - e.toys
                                }));
                                for (var c = 0, l = 0; l < i.length; l++) i[l].place = l + 1, c += Number(i[l].toys), o && i[l].toys >= t.props.host.settings.amount && (a = !0);
                                a || e ? t.goNext(H(i)) : t.setState({
                                    players: i,
                                    totalToys: c
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var r = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                t: e.toys,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: r
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/toy/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, r, n) {
                        var o = this,
                            a = [].concat(H(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: r,
                                info: n
                            }]),
                            i = Array.from(new Set(a.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return a.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        i.length > 15 && i.splice(0, 1), this.setState({
                            alerts: i
                        }, (function() {
                            return o.scrollToBottom()
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
                            r = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            n = t.length; - 1 !== r && (n = t[r].place, t.splice(r, 1)), t = t.map((function(e) {
                            return G(G({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser({
                            gameId: this.props.host.id,
                            username: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                            className: O.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundColor: "#fff",
                                filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
                            }
                        }, o.a.createElement(k.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(w.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(R.o)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), o.a.createElement("div", {
                            className: m()(O.a.hostRegularBody, T.a.winterBackground, q({}, T.a.wind, this.state.wind))
                        }, o.a.createElement("img", {
                            src: S.a.basic.mountains,
                            alt: "Moutains",
                            className: T.a.mountainsBackground,
                            draggable: !1
                        }), o.a.createElement(p.a, {
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
                            return o.a.createElement("div", {
                                className: m()(T.a.left, T.a.invisibleScrollbar)
                            }, t.map((function(t, r) {
                                var n = t.key,
                                    a = t.data,
                                    i = t.state,
                                    s = i.x,
                                    c = i.y;
                                return o.a.createElement("div", {
                                    key: n,
                                    style: {
                                        opacity: e.state.userToBlock === a.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(c, "vh)"),
                                        backgroundColor: r % 2 == 0 ? "#0cb04a" : "#f23941"
                                    },
                                    className: T.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: a.name
                                        })
                                    }
                                }, o.a.createElement("div", {
                                    className: T.a.standingInside,
                                    style: {
                                        backgroundColor: r % 2 == 0 ? "#0cb04a" : "#f23941"
                                    }
                                }, o.a.createElement(u.Textfit, {
                                    className: T.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.D)("5vw")
                                }, a.place), o.a.createElement("div", {
                                    className: T.a.superPlaceText
                                }, Object(R.h)(a.place)), o.a.createElement(L.a, {
                                    name: a.blook,
                                    className: T.a.blookBox
                                }), o.a.createElement(u.Textfit, {
                                    className: T.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.D)("4vw")
                                }, a.name), o.a.createElement("div", {
                                    className: T.a.toyContainer
                                }, o.a.createElement(u.Textfit, {
                                    className: T.a.toyText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.D)("5vw")
                                }, a.toys < 1e4 ? Object(R.o)(a.toys) : Object(R.v)(a.toys)), o.a.createElement("img", {
                                    src: S.a.basic.toy,
                                    alt: "Toy",
                                    className: T.a.toyIcon,
                                    draggable: !1
                                }))))
                            })))
                        })), o.a.createElement("div", {
                            className: T.a.chatroom
                        }, o.a.createElement("div", {
                            className: m()(T.a.chatroomInside, T.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return o.a.createElement(x.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : o.a.createElement("div", {
                            className: T.a.noAlerts
                        }, o.a.createElement("i", {
                            className: m()(T.a.noAlertsIcon, "fas fa-snowman")
                        }), o.a.createElement("div", {
                            className: T.a.noAlertsText
                        }, "Waiting To Party...")))), o.a.createElement("div", {
                            className: T.a.totalToyContainer
                        }, o.a.createElement("div", {
                            className: T.a.totalToyInside
                        }, o.a.createElement("div", {
                            className: T.a.totalToyText
                        }, Object(R.o)(this.state.totalToys)), o.a.createElement("img", {
                            src: S.a.basic.toy,
                            alt: "Toy",
                            className: T.a.totalToyIcon,
                            draggable: !1
                        })))), this.state.trees.filter((function(e) {
                            return e
                        })).length > 0 ? this.state.trees.map((function(e, t) {
                            return e ? o.a.createElement("div", {
                                className: T.a.treeContainer,
                                style: {
                                    top: "".concat(N.b[t].top, "vh"),
                                    left: "".concat(N.b[t].left, "vw")
                                },
                                key: t
                            }, o.a.createElement("img", {
                                className: T.a.treeImg,
                                src: S.a.basic.tree,
                                alt: "tree",
                                draggable: !1
                            })) : null
                        })) : null, this.state.plow ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: T.a.plowSnow
                        }), o.a.createElement(L.a, {
                            name: "Werewolf",
                            className: T.a.plowBlook
                        }), o.a.createElement("i", {
                            className: m()(T.a.plow, "fas fa-snowplow")
                        })) : null, this.state.force ? o.a.createElement(I.a, null) : null, this.state.blizzard ? o.a.createElement(B.a, {
                            zIndex: 20,
                            count: 170
                        }) : null, this.state.canada ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: T.a.canada1
                        }), o.a.createElement("div", {
                            className: T.a.canada2
                        }), o.a.createElement("div", {
                            className: T.a.canada3
                        }), o.a.createElement("i", {
                            className: m()(T.a.canadaIcon, "fab fa-canadian-maple-leaf")
                        })) : null, this.state.userToBlock ? o.a.createElement(C.a, {
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
                        }) : null) : o.a.createElement(l.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && X(t.prototype, r), n && X(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            ee.propTypes = {
                host: c.a.object,
                firebase: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(i.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(a.b)({
                    updateStandings: b.b,
                    deleteHost: g.d,
                    setMuted: v.a
                }, e)
            }))(Object(A.d)(ee)))
        },
        mOsA: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return N
            }));
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("TSYQ"),
                s = r.n(i),
                c = r("17x9"),
                l = r.n(c),
                u = r("Xst1"),
                f = r.n(u),
                p = r("IStp"),
                h = r.n(p),
                d = r("XTAU"),
                m = r("oQ+7"),
                y = r("ca/f"),
                _ = r("E8Bj"),
                v = r("74sb"),
                b = r("lmLo");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == g(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function k(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var N = [{
                    name: "Friends",
                    price: 250,
                    numPlans: 10,
                    color: "#1f77b4",
                    id: "price_1I4uBqJF22PLdvj8qNAayD1W"
                }, {
                    name: "Department",
                    price: 450,
                    numPlans: 20,
                    color: "#ffa31e",
                    id: "price_1I4uCdJF22PLdvj88Prpinyc"
                }, {
                    name: "Small School",
                    price: 750,
                    numPlans: 40,
                    color: "#9467bd",
                    id: "price_1I4uDMJF22PLdvj8GtAEVYUh"
                }, {
                    name: "School",
                    price: 1e3,
                    numPlans: 80,
                    color: "#2ca02c",
                    id: "price_1I4uEKJF22PLdvj8o6asaDiT"
                }],
                P = ["Get Quote Immediately", "Huge Discount", "Admin Page to Manage Plans", "Pay With PO or Credit Card"],
                S = function(e) {
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
                    }(u, e);
                    var t, r, n, i, c, l = E(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = l.call(this, e)).state = {
                            loggedIn: !1,
                            popShown: "",
                            groupName: ""
                        }, t.planId = "", t.choosePlan = t.choosePlan.bind(j(t)), t.goToQuote = t.goToQuote.bind(j(t)), t
                    }
                    return t = u, (r = [{
                        key: "componentDidMount",
                        value: (i = w().mark((function e() {
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        e.sent && this.setState({
                                            loggedIn: !0
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), c = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(e, t);

                                function a(e) {
                                    x(o, r, n, a, s, "next", e)
                                }

                                function s(e) {
                                    x(o, r, n, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "choosePlan",
                        value: function(e) {
                            this.planId = e, this.setState({
                                popShown: this.state.loggedIn ? "name" : "login"
                            })
                        }
                    }, {
                        key: "goToQuote",
                        value: function(e) {
                            e.preventDefault(), this.props.history.push("/upgrade/group?id=".concat(this.planId, "&n=").concat(encodeURIComponent(this.state.groupName)))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: a.isMobile ? f.a.mBody : f.a.body
                            }, o.a.createElement(d.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), o.a.createElement(m.a, null), o.a.createElement("div", {
                                className: f.a.slantBackground
                            }), o.a.createElement("div", {
                                className: f.a.regularBody
                            }, o.a.createElement("div", {
                                className: h.a.centerWrapper
                            }, o.a.createElement("div", {
                                className: h.a.header
                            }, "Group Plans"), o.a.createElement("div", {
                                className: h.a.subheader
                            }, "Choose a Plan"), o.a.createElement("div", {
                                className: h.a.groupsHolder
                            }, N.map((function(t) {
                                return o.a.createElement(b.a, {
                                    outsideClass: h.a.groupButton,
                                    key: t.name,
                                    color: t.color,
                                    onClick: function() {
                                        return e.choosePlan(t.id)
                                    }
                                }, o.a.createElement("div", {
                                    className: h.a.groupButtonInside
                                }, o.a.createElement("div", {
                                    className: h.a.groupName
                                }, t.name), o.a.createElement("div", {
                                    className: h.a.groupPlans
                                }, "".concat(t.numPlans, " Plus Plans")), o.a.createElement("div", {
                                    className: h.a.groupPrice
                                }, "$".concat(Object(v.o)(t.price))), o.a.createElement("div", {
                                    className: h.a.groupPlans
                                }, "Per Year")))
                            }))), o.a.createElement("div", {
                                className: h.a.descContainer
                            }, "Choose a Plan. Pay with Credit Card or Purchase Order. Distribute Plus Plans Immediately.", o.a.createElement("b", null, "It's that simple.")), o.a.createElement("div", {
                                className: h.a.detailsHolder
                            }, P.map((function(e, t) {
                                return o.a.createElement("div", {
                                    className: h.a.detailContainer,
                                    key: t
                                }, o.a.createElement("i", {
                                    className: s()("fas fa-check", h.a.detailCheck)
                                }), o.a.createElement("div", {
                                    className: h.a.detailText
                                }, e))
                            }))), o.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))), "login" === this.state.popShown ? o.a.createElement(y.a, {
                                text: "You'll need an account to purchase a group plan.",
                                buttonOne: {
                                    text: "Ok",
                                    click: function() {
                                        return e.props.history.push("/login")
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            popShown: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : "name" === this.state.popShown ? o.a.createElement(y.a, {
                                text: "Enter the name of your group/school:",
                                stringValue: this.state.groupName,
                                stringChange: function(t) {
                                    return e.setState({
                                        groupName: t.target.value.slice(0, 50)
                                    })
                                },
                                onSubmit: this.goToQuote,
                                buttonOne: {
                                    text: "Get Quote",
                                    click: this.goToQuote,
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && k(t.prototype, r), n && k(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(o.a.Component);
            S.propTypes = {
                history: l.a.object,
                user: l.a.object
            }, t.a = Object(_.c)(S)
        },
        oIDt: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("XTAU"),
                l = r("oQ+7"),
                u = r("E8Bj"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("SY/F"),
                d = r.n(h),
                m = r("74sb"),
                y = r("lmLo");

            function _(e) {
                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                v = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var b = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == _(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(b, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), s(w.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(b), s(b, i, "Generator"), s(b, o, (function() {
                    return this
                })), s(b, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function b(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function g(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e) {
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
                    var r, n = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(e, t) {
                if (t && ("object" === _(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                }(f, e);
                var t, r, n, i, s, u = x(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (t = u.call(this, e)).state = {
                        isGroup: "group" === Object(m.j)("t")
                    }, t
                }
                return t = f, (r = [{
                    key: "componentDidMount",
                    value: (i = v().mark((function e() {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    e.sent || this.props.history.push("/login");
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(e, t);

                            function a(e) {
                                b(o, r, n, a, s, "next", e)
                            }

                            function s(e) {
                                b(o, r, n, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: a.isMobile ? p.a.mBody : p.a.body
                        }, o.a.createElement(c.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), o.a.createElement(l.a, null), o.a.createElement("div", {
                            className: p.a.slantBackground
                        }), o.a.createElement("div", {
                            className: p.a.regularBody
                        }, o.a.createElement("div", {
                            className: d.a.container
                        }, o.a.createElement("div", {
                            className: d.a.header
                        }, "Cancelled"), o.a.createElement("div", {
                            className: d.a.subheader
                        }, "We were unable to process your payment"), o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement(y.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            linkTo: this.state.isGroup ? "/upgrade/group/price" : "/upgrade"
                        }, "Go Back")))))
                    }
                }]) && g(t.prototype, r), n && g(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(o.a.Component);
            E.propTypes = {
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(u.c)(E)
        },
        qecx: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return J
            }));
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("H1WH"),
                f = r("TSYQ"),
                p = r.n(f),
                h = r("jgVY"),
                d = r("yiF6"),
                m = r("ZrUs"),
                y = r("XTAU"),
                _ = r("hTCb"),
                v = r.n(_),
                b = r("Xst1"),
                g = r.n(b),
                w = r("Rnav"),
                x = r("+fLB"),
                k = r("FVRk"),
                C = r("4Zpe"),
                E = r("0oXL"),
                O = r("LHn/"),
                j = r("r9Y0"),
                T = r("yCIc"),
                N = r("ca/f"),
                P = r("7No7"),
                S = r("74sb"),
                L = r("qnYv");

            function I(e) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(e, t) || z(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? A(e, t) : void 0
                }
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
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
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new k(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return E()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(C([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == I(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
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

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function C(e) {
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = C, k.prototype = {
                    constructor: k,
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
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
                            iterator: C(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function F(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function G(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            F(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            F(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function q(e, t) {
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
                    var r, n = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return W(this, r)
                }
            }

            function W(e, t) {
                if (t && ("object" === I(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Y = [{
                    type: "toys",
                    val: 10,
                    rate: .1,
                    blook: "Baby Penguin",
                    text: "+ 10 Toys"
                }, {
                    type: "toys",
                    val: 25,
                    rate: .11,
                    blook: "Seal",
                    text: "+ 25 Toys"
                }, {
                    type: "toys",
                    val: 50,
                    rate: .085,
                    blook: "Polar Bear",
                    text: "+ 50 Toys"
                }, {
                    type: "toys",
                    val: 75,
                    rate: .06,
                    blook: "Unicorn",
                    text: "+ 75 Toys"
                }, {
                    type: "toys",
                    val: 100,
                    rate: .035,
                    blook: "King",
                    text: "+ 100 Toys"
                }, {
                    type: "mult",
                    val: 2,
                    rate: .03,
                    blook: "Penguin",
                    text: "Double Toys"
                }, {
                    type: "mult",
                    val: 3,
                    rate: .015,
                    blook: "Holiday Wreath",
                    text: "Triple Toys"
                }, {
                    type: "tpq",
                    val: 1,
                    rate: .08,
                    blook: "Snowy Owl",
                    text: "+ 1 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 5,
                    rate: .11,
                    blook: "Arctic Hare",
                    text: "+ 5 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 10,
                    rate: .095,
                    blook: "Arctic Fox",
                    text: "+ 10 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 15,
                    rate: .07,
                    blook: "Walrus",
                    text: "+ 15 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 20,
                    rate: .05,
                    blook: "Dragon",
                    text: "+ 20 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 25,
                    rate: .025,
                    blook: "Wizard",
                    text: "+ 25 Toys Per Question"
                }, {
                    type: "mult-tpq",
                    val: 2,
                    rate: .03,
                    blook: "Hot Chocolate",
                    text: "Double Toys Per Question"
                }, {
                    type: "mult-tpq",
                    val: 3,
                    rate: .015,
                    blook: "Snowman",
                    text: "Triple Toys Per Question"
                }, {
                    type: "take",
                    val: .1,
                    rate: .025,
                    blook: "Gingerbread House",
                    text: "Take 10%"
                }, {
                    type: "take",
                    val: .25,
                    rate: .0242,
                    blook: "Gingerbread Man",
                    text: "Take 25%"
                }, {
                    type: "swap",
                    rate: .02,
                    blook: "Santa Claus",
                    text: "SWAP"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Moose",
                    text: "Oh Canada"
                }, {
                    type: "sab",
                    rate: .0065,
                    blook: "Snow Globe",
                    text: "Blizzard"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Fairy",
                    text: "Fog Spell"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Raccoon",
                    text: "Dark & Dusk"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Cockatoo",
                    text: "Howling Wind"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Holiday Gift",
                    text: "Gift Time!"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Elf",
                    text: "TREES"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Werewolf",
                    text: "Snow Plow"
                }, {
                    type: "sab",
                    rate: 3e-4,
                    blook: "Spooky Ghost",
                    text: "Use The Force"
                }],
                X = function(e) {
                    if (e.includes("Toys")) {
                        var t = e.split("Toys");
                        return o.a.createElement(o.a.Fragment, null, t[0], o.a.createElement("img", {
                            src: O.a.basic.toy,
                            alt: "Duck Toy",
                            className: v.a.choiceDuck,
                            draggable: !1
                        }), t[1])
                    }
                    return e
                },
                J = [{
                    top: 20,
                    left: 15
                }, {
                    top: 20,
                    left: 40
                }, {
                    top: 80,
                    left: 65
                }, {
                    top: 25,
                    left: 80
                }, {
                    top: 80,
                    left: 30
                }, {
                    top: 60,
                    left: 50
                }, {
                    top: 70,
                    left: 12.5
                }, {
                    top: 30,
                    left: 60
                }, {
                    top: 40,
                    left: 27.5
                }, {
                    top: 70,
                    left: 85
                }],
                V = function(e) {
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
                    }(c, e);
                    var t, r, n, a, i, s = M(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = s.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            toys: 0,
                            toysPerQ: 1,
                            stage: "",
                            choices: [],
                            gift: !1,
                            giftText: "",
                            fog: !1,
                            dusk: !1,
                            wind: !1,
                            plow: !1,
                            blizzard: !1,
                            force: !1,
                            canada: !1,
                            trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                            players: [],
                            phaseTwo: !1,
                            attackerMsg: "",
                            attackerBlook: "",
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.dbRefAction = {}, t.here = !0, t.waiting = !1, t.corrects = {}, t.incorrects = {}, t.nextReady = !1, t.picking = !1, t.choosingPlayer = !1, t.questions = [], t.freeQuestions = [], t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(Q(t)), t.answerNext = t.answerNext.bind(Q(t)), t.randomQ = t.randomQ.bind(Q(t)), t.choose = t.choose.bind(Q(t)), t.clickTree = t.clickTree.bind(Q(t)), t.sendGift = t.sendGift.bind(Q(t)), t.readQuestion = t.readQuestion.bind(Q(t)), t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (i = G(D().mark((function e() {
                            var t = this;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(S.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 5:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var r = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                toys: e.t || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, r), t.props.history.push("/play/toy/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                                    case 9:
                                        return this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val()) {
                                                var r = e.val().split(":"),
                                                    n = "swap" === r[2] ? Number(r[3]) : Math.max(0, t.state.toys - (r[2] && !isNaN(r[2]) ? Number(r[2]) : 0));
                                                t.setState({
                                                    attackerMsg: "".concat(r[0], " just ").concat("swap" === r[2] ? "swapped toys with you!" : "took ".concat(Object(S.o)(r[2]), " ").concat("1" === r[2] ? "toy" : "toys", " from you!")),
                                                    attackerBlook: r[1],
                                                    toys: n
                                                }), t.props.firebase.setVal({
                                                    id: t.props.client.hostId,
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        t: n
                                                    }
                                                })
                                            }
                                        })), e.next = 13, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                                    case 13:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            if (e.val() && e.val().s)
                                                if (t.safe) t.safe = !1;
                                                else {
                                                    var r = h.b[e.val().s];
                                                    clearTimeout(t.nameTimeout), "Oh Canada" === r ? (clearTimeout(t.canadaTimeout), t.setState({
                                                        canada: !1
                                                    }, (function() {
                                                        t.setState({
                                                            canada: !0
                                                        }, (function() {
                                                            t.canadaTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    canada: !1
                                                                })
                                                            }), 1e4)
                                                        }))
                                                    }))) : "Blizzard" === r ? (clearTimeout(t.blizzardTimeout), t.setState({
                                                        blizzard: !1
                                                    }, (function() {
                                                        t.setState({
                                                            blizzard: !0
                                                        }, (function() {
                                                            t.blizzardTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    blizzard: !1
                                                                })
                                                            }), 17e3)
                                                        }))
                                                    }))) : "Fog Spell" === r ? (clearTimeout(t.fogTimeout), t.setState({
                                                        fog: !1
                                                    }, (function() {
                                                        t.setState({
                                                            fog: !0
                                                        }, (function() {
                                                            t.fogTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    fog: !1
                                                                })
                                                            }), 8e3)
                                                        }))
                                                    }))) : "Dark & Dusk" === r ? (clearTimeout(t.duskTimeout), t.setState({
                                                        dusk: !1
                                                    }, (function() {
                                                        t.setState({
                                                            dusk: !0
                                                        }, (function() {
                                                            t.duskTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    dusk: !1
                                                                })
                                                            }), 1e4)
                                                        }))
                                                    }))) : "Howling Wind" === r ? (clearTimeout(t.windTimeout), t.setState({
                                                        wind: !1
                                                    }, (function() {
                                                        t.setState({
                                                            wind: !0
                                                        }, (function() {
                                                            t.windTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    wind: !1
                                                                })
                                                            }), 7050)
                                                        }))
                                                    }))) : "Gift Time!" === r ? t.setState({
                                                        gift: !0
                                                    }) : "TREES" === r ? t.setState({
                                                        trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                                                    }) : "Snow Plow" === r ? (clearTimeout(t.plowTimeout), t.setState({
                                                        plow: !1
                                                    }, (function() {
                                                        t.setState({
                                                            plow: !0
                                                        }, (function() {
                                                            t.plowTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    plow: !1
                                                                })
                                                            }), 8050)
                                                        }))
                                                    }))) : "Use The Force" === r && (clearTimeout(t.forceTimeout), t.setState({
                                                        force: !1
                                                    }, (function() {
                                                        t.setState({
                                                            force: !0
                                                        }, (function() {
                                                            t.forceTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    force: !1
                                                                })
                                                            }), 18100)
                                                        }))
                                                    }))), t.setState({
                                                        sabotageName: e.val().n,
                                                        sabotageBlook: e.val().b
                                                    }, (function() {
                                                        t.nameTimeout = setTimeout((function() {
                                                            t.setState({
                                                                sabotageName: "",
                                                                sabotageBlook: ""
                                                            })
                                                        }), 6e3)
                                                    }))
                                                }
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                    case 18:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), this.here = !1, Object(S.u)(), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.nextReadyTimeout), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            var t = this;
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var r = this.state.question.correctAnswers.includes(e),
                                    n = this.state.question.number;
                                r ? this.corrects[n] ? this.corrects[n] += 1 : this.corrects[n] = 1 : this.incorrects[n] ? this.incorrects[n] += 1 : this.incorrects[n] = 1, this.nextReady = !1, this.setState({
                                    correct: r,
                                    stage: "feedback",
                                    toys: r ? this.state.toys + this.state.toysPerQ : this.state.toys,
                                    readId: ""
                                }, (function() {
                                    t.nextReadyTimeout = setTimeout((function() {
                                        t.nextReady = !0
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            var e = this;
                            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? this.setState({
                                choices: Object(S.s)(Y, 2),
                                stage: "prize",
                                choiceObj: {}
                            }, (function() {
                                clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                                    e.picking = !0
                                }), 400), clearTimeout(e.claimTimeout), e.claimTimeout = setTimeout((function() {
                                    e.randomQ()
                                }), 12500)
                            })) : this.randomQ())
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(S.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(S.w)(t.answers)), this.setState({
                                    question: t,
                                    phaseTwo: !1,
                                    stage: "question"
                                }, (function() {
                                    e.waiting = !0, clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "choose",
                        value: function(e) {
                            var t = this;
                            if (this.picking) {
                                this.picking = !1;
                                var r = this.state.toys,
                                    n = this.state.toysPerQ,
                                    o = this.state.choices[e],
                                    a = !0,
                                    i = {
                                        b: this.props.client.blook
                                    };
                                "toys" === o.type ? r += o.val : "tpq" === o.type ? n += o.val : "mult" === o.type ? r = Math.round(r * o.val) : "mult-tpq" === o.type ? n = Math.round(n * o.val) : ["take", "swap"].includes(o.type) ? (a = !1, this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                                    var r = e ? Object.entries(e).map((function(e) {
                                        var t = R(e, 2),
                                            r = t[0],
                                            n = t[1];
                                        return {
                                            name: r,
                                            blook: n.b,
                                            toys: n.t || 0
                                        }
                                    })).filter((function(e) {
                                        return e.name !== t.props.client.name
                                    })) : [];
                                    r.sort((function(e, t) {
                                        return t.toys - e.toys
                                    })), t.choosingPlayer = !1, t.setState({
                                        players: r,
                                        choiceObj: o,
                                        phaseTwo: !0
                                    }, (function() {
                                        clearTimeout(t.waitTimeout), t.waitTimeout = setTimeout((function() {
                                            t.choosingPlayer = !0
                                        }), 300)
                                    }))
                                }))) : (this.safe = !0, i.tat = h.a[o.text]), i.t = r, this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: i
                                }), this.setState({
                                    toys: r,
                                    toysPerQ: n
                                }), a && this.randomQ()
                            }
                        }
                    }, {
                        key: "clickTree",
                        value: function(e) {
                            var t = B(this.state.trees);
                            t[e] = !1, this.setState({
                                trees: t
                            })
                        }
                    }, {
                        key: "sendGift",
                        value: function(e) {
                            if (e.preventDefault(), !(this.state.giftText.length < 3)) {
                                var t = this.state.giftText;
                                L.a.post("/api/gifts", {
                                    name: t.toLowerCase().trim()
                                }).catch((function(e) {
                                    console.error(e)
                                })), this.setState({
                                    gift: !1,
                                    giftText: ""
                                })
                            }
                        }
                    }, {
                        key: "selectPlayer",
                        value: function(e) {
                            if (this.choosingPlayer) {
                                if (this.choosingPlayer = !1, clearTimeout(this.claimTimeout), "swap" === this.state.choiceObj.type) this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        t: e.toys || 0,
                                        tat: "".concat(e.name, ":swap:").concat(this.state.toys)
                                    }
                                }), this.setState({
                                    toys: e.toys || 0
                                });
                                else {
                                    var t = Math.round((e.toys || 0) * this.state.choiceObj.val);
                                    if (t > 0) {
                                        var r = this.state.toys + t;
                                        this.props.firebase.setVal({
                                            id: this.props.client.hostId,
                                            path: "c/".concat(this.props.client.name),
                                            val: {
                                                b: this.props.client.blook,
                                                t: r,
                                                tat: "".concat(e.name, ":").concat(t)
                                            }
                                        }), this.setState({
                                            toys: r
                                        })
                                    }
                                }
                                this.randomQ()
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (a = G(D().mark((function e() {
                            var t, r = this;
                            return D().wrap((function(e) {
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
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? o.a.createElement("div", {
                                className: u.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundColor: "#fff",
                                    filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
                                },
                                id: "body"
                            }, o.a.createElement(y.a, {
                                title: "Play Santa's Workshop | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you build toys by answering questions."
                            }), o.a.createElement(w.a, {
                                name: this.props.client.name,
                                toys: this.state.toys,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), o.a.createElement("div", {
                                className: this.state.wind ? v.a.wind : null
                            }, "question" === this.state.stage ? o.a.createElement(k.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: "merry",
                                noAnswer: this.state.gift
                            }) : "feedback" === this.state.stage ? o.a.createElement("div", {
                                className: v.a.feedbackContainer
                            }, o.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext,
                                reward: this.state.correct ? "+".concat(Object(S.o)(this.state.toysPerQ)) : null
                            })) : "prize" === this.state.stage ? o.a.createElement("div", {
                                className: p()(g.a.regularBody, v.a.winterBackground),
                                id: "regularBody"
                            }, o.a.createElement("img", {
                                src: O.a.basic.mountains,
                                alt: "Mountains",
                                className: v.a.mountainsBackground,
                                draggable: !1
                            }), this.state.phaseTwo ? this.state.players.length > 0 ? o.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, o.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From"), o.a.createElement("div", {
                                className: v.a.playerHolder
                            }, this.state.players.map((function(t) {
                                return o.a.createElement("div", {
                                    className: v.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    }
                                }, o.a.createElement("div", {
                                    className: v.a.playerInside
                                }, o.a.createElement(E.a, {
                                    name: t.blook,
                                    className: v.a.playerBlook
                                }), o.a.createElement("div", {
                                    className: v.a.playerColumn
                                }, o.a.createElement("div", {
                                    className: v.a.playerText
                                }, t.name), o.a.createElement("div", {
                                    className: v.a.toyRow
                                }, o.a.createElement("div", {
                                    className: v.a.playerToys
                                }, Object(S.o)(t.toys)), o.a.createElement("img", {
                                    src: O.a.basic.toy,
                                    alt: "Toy",
                                    className: v.a.toyIcon,
                                    draggable: !1
                                })))))
                            })), o.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : o.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, o.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "No Players to Interact With"), o.a.createElement("div", {
                                className: v.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ
                            }, o.a.createElement("div", {
                                className: v.a.playerInside
                            }, "Next"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: v.a.header
                            }, "Choose a Helper!"), o.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choiceLeft),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choose(0)
                                }
                            }, o.a.createElement("div", {
                                className: v.a.choiceInside
                            }, o.a.createElement(E.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceBlook
                            }), o.a.createElement("div", {
                                className: v.a.choiceText
                            }, X(this.state.choices[0].text)))), o.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choiceRight),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choose(1)
                                }
                            }, o.a.createElement("div", {
                                className: v.a.choiceInside
                            }, o.a.createElement(E.a, {
                                name: this.state.choices[1].blook,
                                className: v.a.choiceBlook
                            }), o.a.createElement("div", {
                                className: v.a.choiceText
                            }, X(this.state.choices[1].text)))))) : null), this.state.gift ? o.a.createElement(N.a, {
                                text: "What gift do you want for the holidays? (3 letter minimum)",
                                buttonOne: {
                                    text: "Submit",
                                    click: this.sendGift,
                                    color: "blue"
                                },
                                stringValue: this.state.giftText,
                                stringChange: function(t) {
                                    return e.setState({
                                        giftText: t.target.value
                                    })
                                },
                                stringPlaceholder: "Gift",
                                onSubmit: this.sendGift
                            }) : null, this.state.trees.filter((function(e) {
                                return e
                            })).length > 0 ? this.state.trees.map((function(t, r) {
                                return t ? o.a.createElement("div", {
                                    className: v.a.treeContainer,
                                    style: {
                                        top: "".concat(J[r].top, "vh"),
                                        left: "".concat(J[r].left, "vw")
                                    },
                                    key: r,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.clickTree(r)
                                    }
                                }, o.a.createElement("img", {
                                    className: v.a.treeImg,
                                    src: O.a.basic.tree,
                                    alt: "tree",
                                    draggable: !1
                                })) : null
                            })) : null, this.state.plow ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: v.a.plowSnow
                            }), o.a.createElement(E.a, {
                                name: "Werewolf",
                                className: v.a.plowBlook
                            }), o.a.createElement("i", {
                                className: p()(v.a.plow, "fas fa-snowplow")
                            })) : null, this.state.force ? o.a.createElement(T.a, null) : null, this.state.blizzard ? o.a.createElement(j.a, {
                                zIndex: 20,
                                count: u.isMobile ? 85 : 170
                            }) : null, this.state.canada ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: v.a.canada1
                            }), o.a.createElement("div", {
                                className: v.a.canada2
                            }), o.a.createElement("div", {
                                className: v.a.canada3
                            }), o.a.createElement("i", {
                                className: p()(v.a.canadaIcon, "fab fa-canadian-maple-leaf")
                            })) : null, this.state.sabotageName ? o.a.createElement("div", {
                                className: v.a.sabotageContainer
                            }, o.a.createElement(E.a, {
                                name: this.state.sabotageBlook,
                                className: v.a.sabotageBlook
                            }), this.state.sabotageName) : null, this.state.attackerBlook ? o.a.createElement(P.a, {
                                text: this.state.attackerMsg,
                                blook: this.state.attackerBlook,
                                onClick: function() {
                                    return e.setState({
                                        attackerMsg: "",
                                        attackerBlook: ""
                                    })
                                },
                                isMerry: !0
                            }) : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && q(t.prototype, r), n && q(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            V.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                firebase: c.a.object,
                deleteClient: c.a.func.isRequired,
                setGoldFinal: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(i.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteClient: m.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(x.d)(V)))
        },
        qitz: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("wd/R"),
                l = r.n(c),
                u = r("E8Bj"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("fKgg"),
                d = r.n(h),
                m = r("XTAU"),
                y = r("oQ+7"),
                _ = r("XOuL"),
                v = r("mOsA"),
                b = r("qnYv"),
                g = r("lmLo");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == w(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
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

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = O, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function k(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && E(e, t)
                }(u, e);
                var t, r, n, i, s, c = O(u);

                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (t = c.call(this, e)).state = {
                        groupName: "",
                        isFull: !1,
                        isActive: !1,
                        isLoggedIn: !1,
                        ready: !1,
                        loading: !1,
                        done: "",
                        isAlreadyIn: !1,
                        isAlreadyGrouped: !1
                    }, t.here = !0, t.email = "", t.groupId = e.match.params.id, t.joinGroup = t.joinGroup.bind(T(t)), t
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: (i = x().mark((function e() {
                        var t, r = this;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    (t = e.sent) ? (this.email = t.email, b.a.get("/api/groups", {
                                        params: {
                                            id: this.groupId
                                        }
                                    }).then((function(e) {
                                        var t = v.b.map((function(e) {
                                            return e.name
                                        })).indexOf(e.data.planName);
                                        if ((-1 !== t || "Custom" === e.data.planName) && r.here) {
                                            var n = -1 !== t ? v.b[t] : {
                                                name: "Custom",
                                                numPlans: e.data.numPlans
                                            };
                                            b.a.put("/api/users/plan").then((function(t) {
                                                var o = t.data.planSource;
                                                r.setState({
                                                    ready: !0,
                                                    isLoggedIn: !0,
                                                    groupName: e.data.groupName,
                                                    isActive: l()(e.data.lastDate).add(1, "year").isAfter(l.a.utc()),
                                                    isFull: n.numPlans - e.data.members.length <= 0,
                                                    isAlreadyIn: e.data.members.includes(r.email),
                                                    isAlreadyGrouped: Boolean(o)
                                                })
                                            })).catch((function(e) {
                                                console.error(e)
                                            }))
                                        }
                                    })).catch((function() {
                                        r.props.history.push("/404")
                                    }))) : this.setState({
                                        ready: !0
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(e, t);

                            function a(e) {
                                k(o, r, n, a, s, "next", e)
                            }

                            function s(e) {
                                k(o, r, n, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "joinGroup",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), b.a.put("/api/groups/join", {
                            email: this.email,
                            groupId: this.groupId
                        }).then((function(t) {
                            t.data.success ? e.setState({
                                done: "Success",
                                loading: !1
                            }) : e.setState({
                                done: "Failed",
                                loading: !1
                            })
                        })).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), console.error(t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: a.isMobile ? p.a.mBody : p.a.body
                        }, o.a.createElement(m.a, {
                            title: "Join Group | Blooket",
                            desc: "Join a Upgrade Group to unlock the benefits of Blooket Plus."
                        }), o.a.createElement(y.a, null), o.a.createElement("div", {
                            className: p.a.slantBackground
                        }), this.state.ready ? o.a.createElement("div", {
                            className: p.a.regularBody
                        }, o.a.createElement("div", {
                            className: d.a.container
                        }, this.state.done ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: d.a.header
                        }, this.state.done), "Failed" === this.state.done ? o.a.createElement("div", {
                            className: d.a.subheader
                        }, "Please refresh and try again or contact support.") : null, o.a.createElement("div", {
                            className: d.a.buttonContainer
                        }, o.a.createElement(g.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            onClick: "Failed" === this.state.done ? function() {
                                return window.location.reload()
                            } : function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : this.state.isLoggedIn ? !this.state.isActive || this.state.isFull || this.state.isAlreadyIn || this.state.isAlreadyGrouped ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: d.a.header
                        }, "Failed"), o.a.createElement("div", {
                            className: d.a.subheader
                        }, this.state.isAlreadyIn ? "You're already in this group." : this.state.isAlreadyGrouped ? "You already are in a group!" : this.state.isFull ? "There are no more subscription plans in this group." : "This group is no longer active."), o.a.createElement("div", {
                            className: d.a.buttonContainer
                        }, o.a.createElement(g.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            onClick: function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: d.a.header
                        }, "Join Group:"), o.a.createElement("div", {
                            className: d.a.subheader
                        }, this.state.groupName), o.a.createElement("div", {
                            className: d.a.buttonContainer
                        }, this.state.loading ? o.a.createElement(_.a, null) : o.a.createElement(g.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            onClick: this.joinGroup
                        }, "Join Now"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: d.a.header
                        }, "Failed"), o.a.createElement("div", {
                            className: d.a.subheader
                        }, "You must be logged in to join a group."), o.a.createElement("div", {
                            className: d.a.buttonContainer
                        }, o.a.createElement(g.a, {
                            color: "#0bc2cf",
                            outsideClass: d.a.button,
                            insideClass: d.a.buttonInside,
                            onClick: function() {
                                return e.props.history.push("/login")
                            }
                        }, "Login"))))) : null)
                    }
                }]) && C(t.prototype, r), n && C(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), u
            }(o.a.Component);
            P.propTypes = {
                match: s.a.object,
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(u.c)(P)
        },
        "v/ol": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("Ty5D"),
                i = r("H1WH"),
                s = r("17x9"),
                c = r.n(s),
                l = r("v4r+"),
                u = r("TSYQ"),
                f = r.n(u),
                p = r("mOsA"),
                h = r("IuJg"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("/BoV"),
                _ = r.n(y),
                v = r("XTAU"),
                b = r("oQ+7"),
                g = r("ca/f"),
                w = r("74sb"),
                x = r("E8Bj"),
                k = r("LHn/"),
                C = r("qnYv"),
                E = r("lmLo");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        i = new k(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return E()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
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
                    }(e, r, i), a
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

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(C([])));
                y && y !== t && r.call(y, o) && (d = y);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
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

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function C(e) {
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, e.values = C, k.prototype = {
                    constructor: k,
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
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var s = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (s) {
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
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
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
                            iterator: C(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function T(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function N(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            T(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            T(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function P(e, t) {
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
                    var r, n = R(e);
                    if (t) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return B(e)
            }

            function B(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function R(e) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && S(e, t)
                }(u, e);
                var t, r, n, s, c = L(u);

                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (t = c.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1,
                        hasGroup: !1
                    }, t.onCheckout = t.onCheckout.bind(B(t)), t
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: (s = N(j().mark((function e() {
                        var t, r, n, o, a = this;
                        return j().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = Object(w.j)("id"), -1 !== (r = p.b.map((function(e) {
                                            return e.id
                                        })).indexOf(t))) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return n = p.b[r], e.next = 7, this.props.user.getData();
                                case 7:
                                    if (e.sent) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 10:
                                    o = decodeURIComponent(Object(w.j)("n")), this.setState({
                                        plan: n,
                                        groupName: o
                                    }), C.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: k.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: o,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(n.name, " Plan"),
                                                quantity: 1,
                                                unit_cost: n.price,
                                                description: "".concat(n.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        a.setState({
                                            pdf: e.data.pdf,
                                            hasGroup: e.data.hasGroup
                                        })
                                    })).catch((function(e) {
                                        return console.error(e)
                                    }));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "onCheckout",
                    value: function() {
                        var e = this;
                        this.state.plan && this.state.plan.id && (this.setState({
                            loading: !0
                        }), C.a.post("/api/groups/stripe/checkout", {
                            planId: this.state.plan.id,
                            groupName: this.state.groupName
                        }).then(function() {
                            var e = N(j().mark((function e(t) {
                                return j().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l.a)(h.a);
                                        case 2:
                                            e.sent.redirectToCheckout({
                                                sessionId: t.data
                                            }).then((function(e) {
                                                e.error && console.error(e.error)
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), console.error(t)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return -1 === p.b.map((function(e) {
                            return e.id
                        })).indexOf(Object(w.j)("id")) && (this.redirect = !0), this.redirect ? o.a.createElement(a.a, {
                            to: "/upgrade/group/price"
                        }) : o.a.createElement("div", {
                            className: i.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(v.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), o.a.createElement(b.a, null), o.a.createElement("div", {
                            className: m.a.slantBackground
                        }), o.a.createElement("div", {
                            className: f()(m.a.regularBody, _.a.bodyContainer)
                        }, this.state.pdf ? o.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Quote",
                            className: _.a.quote
                        }, o.a.createElement("a", {
                            className: _.a.downloadButton,
                            download: "BlooketQuote.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, o.a.createElement("div", {
                            className: _.a.leftColumn
                        }, o.a.createElement("div", {
                            className: _.a.textContainer
                        }, o.a.createElement("div", {
                            className: _.a.textBigHeader
                        }, this.state.groupName), o.a.createElement("div", {
                            className: _.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), o.a.createElement("div", {
                            className: _.a.textContainer
                        }, o.a.createElement("div", {
                            className: _.a.textHeader
                        }, "Pay With Purchase Order"), o.a.createElement("div", null, "Upload your PO and we'll get your plans started immediately!"), o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement(E.a, {
                            color: "#0bc2cf",
                            outsideClass: _.a.button,
                            insideClass: _.a.buttonInside,
                            linkTo: "/upgrade/group/po?id=".concat(this.state.plan.id, "&n=").concat(encodeURIComponent(this.state.groupName))
                        }, "Pay With Purchase Order"))), o.a.createElement("div", {
                            className: _.a.textContainer
                        }, o.a.createElement("div", {
                            className: _.a.textHeader
                        }, "Pay With Credit Card"), o.a.createElement("div", null, "Use a credit card to pay and get things done quickly!"), o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement(E.a, {
                            color: "#0bc2cf",
                            outsideClass: _.a.button,
                            insideClass: _.a.buttonInside,
                            onClick: this.onCheckout
                        }, "Pay With Credit Card"))), o.a.createElement("div", {
                            className: _.a.textContainer
                        }, o.a.createElement("div", {
                            className: _.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), o.a.createElement("div", {
                            className: _.a.bigText
                        }, "Send us an email at: ", o.a.createElement("a", {
                            className: _.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? o.a.createElement(g.a, {
                            text: "Loading...",
                            loading: !0
                        }) : this.state.hasGroup ? o.a.createElement(g.a, {
                            text: "You already have a group plan.",
                            buttonOne: {
                                text: "Go to Group",
                                click: function() {
                                    return e.props.history.push("/group-plan")
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && P(t.prototype, r), n && P(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), u
            }(o.a.Component);
            z.propTypes = {
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(x.c)(z)
        },
        xppP: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___KTRFs-camelCase{width:100%;min-height:100%;justify-content:center}.styles__centerWrapper___KTRFs-camelCase,.styles__payContainer___1YTNx-camelCase{display:flex;flex-direction:column}.styles__payContainer___1YTNx-camelCase{width:85%;max-width:600px;min-width:320px;margin:auto;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;align-items:center;color:#3a3a3a}.styles__payHeader___26Aou-camelCase{font-family:Nunito,sans-serif;text-align:center;font-size:45px;font-weight:700;margin:10px auto 0}.styles__paySpacer___1aale-camelCase{width:90%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__payMessage___xCCU1-camelCase{text-align:left;font-size:18px;padding:10px;margin:0 auto}.styles__payMessage___xCCU1-camelCase,.styles__payRow___2aaw0-camelCase{font-family:Nunito,sans-serif;width:90%}.styles__payRow___2aaw0-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:#3a3a3a}.styles__payColumn___2OFxz-camelCase{display:flex;flex-direction:column;height:90px;justify-content:center}.styles__payItem___2-aRp-camelCase{font-size:32px;font-weight:700}.styles__payDesc___2HNie-camelCase{font-size:18px;opacity:.8;font-weight:700}.styles__payPrice___2HpX0-camelCase{margin:auto 0;font-size:28px;font-weight:700}.styles__payButton___22hET-camelCase{width:240px;margin:25px auto 20px}.styles__payButtonInside___2X9zX-camelCase{height:40px;font-size:30px;font-weight:700}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___KTRFs-camelCase",
                payContainer: "styles__payContainer___1YTNx-camelCase",
                payHeader: "styles__payHeader___26Aou-camelCase",
                paySpacer: "styles__paySpacer___1aale-camelCase",
                payMessage: "styles__payMessage___xCCU1-camelCase",
                payRow: "styles__payRow___2aaw0-camelCase",
                payColumn: "styles__payColumn___2OFxz-camelCase",
                payItem: "styles__payItem___2-aRp-camelCase",
                payDesc: "styles__payDesc___2HNie-camelCase",
                payPrice: "styles__payPrice___2HpX0-camelCase",
                payButton: "styles__payButton___22hET-camelCase",
                payButtonInside: "styles__payButtonInside___2X9zX-camelCase"
            }
        }
    }
]);