(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        "4XkD": function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__statContainer___37gtS-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;display:flex;flex-direction:row;align-items:center}.styles__statIcon___1dHBT-camelCase{font-size:26px;margin-left:6px}", ""]), t.locals = {
                statContainer: "styles__statContainer___37gtS-camelCase",
                statIcon: "styles__statIcon___1dHBT-camelCase"
            }
        },
        "Gf+q": function(e, t, s) {
            var o = s("UQ6I");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        LqZZ: function(e, t, s) {
            "use strict";
            var o = s("q1tI"),
                a = s.n(o),
                n = s("ANjH"),
                r = s("/MKj"),
                i = s("17x9"),
                l = s.n(i),
                u = s("Ty5D"),
                c = s("H1WH"),
                m = s("TSYQ"),
                p = s.n(m),
                h = s("E8Bj"),
                g = s("mPK+"),
                d = s("Xst1"),
                y = s.n(d),
                f = s("Gf+q"),
                _ = s.n(f),
                b = s("Rnav"),
                w = s("XTAU"),
                k = s("LHn/"),
                v = s("0oXL"),
                C = s("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

                function i(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, o) {
                    var a = t && t.prototype instanceof m ? t : m,
                        n = Object.create(a.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, s) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return S()
                            }
                            for (s.method = a, s.arg = n;;) {
                                var r = s.delegate;
                                if (r) {
                                    var i = w(r, s);
                                    if (i) {
                                        if (i === c) continue;
                                        return i
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === o) throw o = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                o = "executing";
                                var l = u(e, t, s);
                                if ("normal" === l.type) {
                                    if (o = s.done ? "completed" : "suspendedYield", l.arg === c) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, r), n
                }

                function u(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var c = {};

                function m() {}

                function p() {}

                function h() {}
                var g = {};
                i(g, a, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    y = d && d(d(O([])));
                y && y !== t && s.call(y, a) && (g = y);
                var f = h.prototype = m.prototype = Object.create(g);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(a, n, r, i) {
                                    var l = u(e[a], e, n);
                                    if ("throw" !== l.type) {
                                        var c = l.arg,
                                            m = c.value;
                                        return m && "object" == x(m) && s.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            c.value = e, r(c)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(a, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
                    }
                }

                function w(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return c;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return c
                    }
                    var o = u(s, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, c;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function v(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (s.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return p.prototype = h, i(f, "constructor", h), i(h, "constructor", p), p.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(f), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, s, o, a, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, s, o, a), n);
                    return e.isGeneratorFunction(s) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, _(f), i(f, r, "Generator"), i(f, a, (function() {
                    return this
                })), i(f, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return s.value = o, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = O, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(v), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function o(s, o) {
                            return r.type = "throw", r.arg = e, t.next = s, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = s.call(n, "catchLoc"),
                                    l = s.call(n, "finallyLoc");
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
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, c) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), v(s), c
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var o = s.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    v(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), c
                    }
                }, e
            }

            function O(e, t, s, o, a, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void s(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, a)
            }

            function S(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var o = t[s];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
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
                    var s, o = H(e);
                    if (t) {
                        var a = H(this).constructor;
                        s = Reflect.construct(o, arguments, a)
                    } else s = o.apply(this, arguments);
                    return N(this, s)
                }
            }

            function N(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && T(e, t)
                }(l, e);
                var t, s, o, n, r, i = E(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        questions: [],
                        ready: !1
                    }, t.redirect = !1, t.here = !0, t.startGame = t.startGame.bind(j(t)), t
                }
                return t = l, (s = [{
                    key: "componentDidMount",
                    value: (n = I().mark((function e() {
                        var t = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.id || this.props.client && this.props.client.hwId) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    e.sent || this.setState({
                                        notLoggedIn: !0
                                    }), this.props.setKingdom({
                                        stage: "start"
                                    }), this.props.client && this.props.client.hwId && this.props.client.questions ? this.setState({
                                        questions: this.props.client.questions,
                                        ready: !0
                                    }) : C.a.get("/api/games", {
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
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), r = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(s, o) {
                            var a = n.apply(e, t);

                            function r(e) {
                                O(a, s, o, r, i, "next", e)
                            }

                            function i(e) {
                                O(a, s, o, r, i, "throw", e)
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
                        this.state.ready && (this.props.setKingdom({
                            setId: this.props.id,
                            hwGoal: this.props.client && this.props.client.amount ? this.props.client.amount : null,
                            questions: this.state.questions,
                            stage: "kingdom"
                        }), this.props.history.push("/kingdom"))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.id && (!this.props.client || !this.props.client.hwId) || this.state.ready && 0 === this.state.questions.length ? a.a.createElement(u.a, {
                            to: "/play"
                        }) : a.a.createElement("div", {
                            className: c.isMobile ? y.a.mBody : y.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, a.a.createElement(w.a, {
                            title: "Start Crazy Kingdom | Blooket",
                            desc: "Start a new game of Blooket's Crazy Kingdom."
                        }), a.a.createElement(b.a, {
                            name: this.props.client && this.props.client.name ? this.props.client.name : "",
                            noRight: !0
                        }), a.a.createElement("div", {
                            className: p()(y.a.regularBody, _.a.background),
                            style: {
                                backgroundImage: "url(".concat(k.a.basic.castleTile, ")"),
                                overflow: "hidden"
                            },
                            id: "regularBody"
                        }, a.a.createElement("div", {
                            className: _.a.contentHolder
                        }, a.a.createElement("div", {
                            className: _.a.header
                        }, a.a.createElement("div", {
                            className: _.a.headerInside
                        }, "Crazy", a.a.createElement("br", null), "Kingdom")), a.a.createElement("div", {
                            className: _.a.buttonContainer
                        }, a.a.createElement("div", {
                            className: _.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.startGame
                        }, a.a.createElement("div", {
                            className: _.a.buttonInside
                        }, "Start Game")))), a.a.createElement(v.a, {
                            name: "King",
                            className: _.a.blook
                        })))
                    }
                }]) && S(t.prototype, s), o && S(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(a.a.Component);
            P.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                id: l.a.string,
                setKingdom: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(h.c)(Object(u.g)(Object(r.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(n.b)({
                    setKingdom: g.a
                }, e)
            }))(P)))
        },
        UQ6I: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__background___3uQMQ-camelCase{background-size:74.5px}.styles__contentHolder___U4owR-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___XkqsK-camelCase{border-radius:5px;box-shadow:.5vw .5vw 0 rgba(0,0,0,.2);margin:20px 0;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:Eczar,sans-serif;color:#fff;font-size:8vw;line-height:8.3vw;display:flex;justify-content:center;align-items:center}.styles__header___XkqsK-camelCase,.styles__headerInside___gwn9G-camelCase{background-color:#d52423}.styles__headerInside___gwn9G-camelCase{width:calc(100% - 30px);height:calc(100% - 30px);border:5px solid #ffd329;margin:10px;padding:1vw 3vw}.styles__buttonContainer___2m1qI-camelCase{margin:20px 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___sZyYj-camelCase{font-size:2.6vw;line-height:3.6vw;font-family:Eczar,sans-serif;border-radius:5px;color:#fff;margin:7px 0;background-color:#d52423;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;text-decoration:none;display:flex;justify-content:center;align-items:center;box-shadow:.3vw .3vw 0 rgba(0,0,0,.2);transition:.2s}.styles__button___sZyYj-camelCase:hover{transform:scale(.95)}.styles__buttonInside___3L4B8-camelCase{width:calc(100% - 24px);height:calc(100% - 24px);background-color:#d52423;border:5px solid #ffd329;margin:7px;padding:0 1vw}.styles__blook___OCh9P-camelCase{position:absolute;top:50%;right:22%;display:block;width:25%;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate(50%,-50%) rotate(15deg)}@media only screen and (max-width:800px){.styles__blook___OCh9P-camelCase{display:none}.styles__header___XkqsK-camelCase{font-size:16vw;line-height:17.6vw;box-shadow:1.5vw 1.5vw 0 rgba(0,0,0,.2)}.styles__button___sZyYj-camelCase{font-size:8.6vw;line-height:9.6vw;box-shadow:1vw 1vw 0 rgba(0,0,0,.2)}.styles__buttonInside___3L4B8-camelCase{padding:2vw}}", ""]), t.locals = {
                background: "styles__background___3uQMQ-camelCase",
                contentHolder: "styles__contentHolder___U4owR-camelCase",
                header: "styles__header___XkqsK-camelCase",
                headerInside: "styles__headerInside___gwn9G-camelCase",
                buttonContainer: "styles__buttonContainer___2m1qI-camelCase",
                button: "styles__button___sZyYj-camelCase",
                buttonInside: "styles__buttonInside___3L4B8-camelCase",
                blook: "styles__blook___OCh9P-camelCase"
            }
        },
        bBDR: function(e, t, s) {
            var o = s("ryCR");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        bjc5: function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            var o = "SET_KINGDOM"
        },
        cfJg: function(e, t, s) {
            "use strict";
            var o = s("q1tI"),
                a = s.n(o),
                n = s("/MKj"),
                r = s("ANjH"),
                i = s("17x9"),
                l = s.n(i),
                u = s("Ty5D"),
                c = s("H1WH"),
                m = s("TSYQ"),
                p = s.n(m),
                h = {
                    Hamster1: {
                        blook: "Hamster",
                        msg: "Sup, gimme 15 gold!",
                        yes: {
                            msg: "Oh dang, that actually worked. Cya.",
                            gold: -15
                        },
                        no: {
                            msg: "Ok, you make a fair point. Have a nice day, kind sir."
                        }
                    },
                    Hamster2: {
                        blook: "Hamster",
                        msg: "Sup, can I go spray paint some houses?",
                        yes: {
                            msg: "Wow, you said yes. People will not like this.",
                            happiness: -15
                        },
                        no: {
                            msg: "Yeah, that's what I figured. Enjoy your evening."
                        }
                    },
                    Hamster3: {
                        blook: "Hamster",
                        msg: "Sup human, give me 17 materials to build a bowling alley.",
                        yes: {
                            msg: "Yesss, finally a bowling alley! Thanks!",
                            materials: -17,
                            happiness: 17
                        },
                        no: {
                            msg: "No bowling alley, that's fair. Hope you have a good weekend.",
                            happiness: -6
                        }
                    },
                    Chick1: {
                        blook: "Chick",
                        msg: "Hi, my mom said you would give me 10 wood planks for my school project.",
                        yes: {
                            msg: "Thanks!",
                            materials: -10,
                            happiness: 7
                        },
                        no: {
                            msg: "WHAAAAA! My mom's gonna be mad!",
                            happiness: -7,
                            spawn: "Chicken1",
                            delay: 2
                        }
                    },
                    Chicken1: {
                        blook: "Chicken",
                        msg: "You didn't give my son what he wanted. Now I'll be taking some extra.",
                        materials: -30
                    },
                    Chicken2: {
                        blook: "Chicken",
                        msg: "Can I have 17 materials to build a coop for some new chickens?",
                        yes: {
                            msg: "Thanks so much! The other chickens will love this!",
                            materials: -17,
                            people: 17
                        },
                        no: {
                            msg: "Oh, well now I'm sad.",
                            happiness: -6
                        }
                    },
                    Waffle: {
                        blook: "Waffle",
                        msg: "Do you like waffles?",
                        yes: {
                            msg: "Yeah, we like waffles!",
                            happiness: 5,
                            spawn: "Pancakes",
                            forceNext: !0
                        },
                        no: {
                            msg: "NOOOOOOOOOOOOO!!!!!",
                            happiness: -25
                        }
                    },
                    Pancakes: {
                        blook: "Pancakes",
                        msg: "Do you like pancakes?",
                        yes: {
                            msg: "Yeah, we like pancakes!",
                            happiness: 5,
                            spawn: "French Toast",
                            forceNext: !0
                        },
                        no: {
                            msg: "NOOOOOOOOOOOOO!!!!!",
                            happiness: -25
                        }
                    },
                    "French Toast": {
                        blook: "French Toast",
                        msg: "Do you like French Toast?",
                        yes: {
                            msg: "Yeah, we like French Toast! Do-do-do-do, can't wait to get a mouthful!",
                            happiness: 10,
                            spawn: "Owl1",
                            forceNext: !0
                        },
                        no: {
                            msg: "NOOOOOOOOOOOOO!!!!!",
                            happiness: -25
                        }
                    },
                    Owl1: {
                        blook: "Owl",
                        msg: "Judgmental Owl judges you, and takes your people.",
                        people: -5
                    },
                    Sheep1: {
                        blook: "Sheep",
                        msg: "Heyyy, so, like, I kind of want to start a barber shop. You think, like, I could buy some materials? I can pay.",
                        yes: {
                            msg: "Ayyyy, party at my place!! Thanks so much.",
                            materials: -20,
                            gold: 17,
                            happiness: 5,
                            spawn: "Sheep2",
                            delay: 4
                        },
                        no: {
                            msg: "Fine, I just won't, like, follow my dreams, you know.",
                            happiness: -8
                        }
                    },
                    Sheep2: {
                        blook: "Sheep",
                        msg: "Umm, so like this is awkward, but like, do you want a haircut? From me?",
                        yes: {
                            msg: "Ayyyy, you're going to look so good!",
                            happiness: 10
                        },
                        no: {
                            msg: "Oh, I see how it is. I guess I'll never be good enough for you.",
                            happiness: -14
                        }
                    },
                    Horse1: {
                        blook: "Horse",
                        msg: "Howdy partner, you think I could have 15 wood for new stables. I'll pay for it.",
                        yes: {
                            msg: "Thanks partner.",
                            materials: -15,
                            gold: 10,
                            happiness: 3
                        },
                        no: {
                            msg: "Well, alright then. The other horses aren't going to be happy about this one.",
                            happiness: -5
                        }
                    },
                    Horse2: {
                        blook: "Horse",
                        msg: "Howdy, the fields are ready to harvest. You think I could get 10 people to help out.",
                        yes: {
                            msg: "Thanks partner.",
                            materials: 15,
                            people: -10
                        },
                        no: {
                            msg: "Darn it, well, that's another year of wasted crops.",
                            happiness: -6
                        }
                    },
                    Horse3: {
                        blook: "Horse",
                        msg: "Howdy, you think I could have some extra hay?",
                        yes: {
                            msg: "Well thanks, partner.",
                            materials: -12,
                            happiness: 12
                        },
                        no: {
                            msg: "Neigh...",
                            happiness: -7
                        }
                    },
                    Cow1: {
                        blook: "Cow",
                        msg: "The cows are having some friends over, you mind if we MOO-ve to some new land?",
                        yes: {
                            msg: "That's MOO-tastic!",
                            materials: -12,
                            happiness: 6,
                            people: 10
                        },
                        no: {
                            msg: "Wow, you're so MOO-dy.",
                            happiness: -10
                        }
                    },
                    Cow2: {
                        blook: "Cow",
                        msg: "Hey, can I get some gold for a guitar for MOO-sic class?",
                        yes: {
                            msg: "That's MOO-gnificent!",
                            happiness: 13,
                            gold: -7
                        },
                        no: {
                            msg: "Hmmm, well you're in a really bad MOO-d.",
                            happiness: -10
                        }
                    },
                    Cow3: {
                        blook: "Cow",
                        msg: "So the Cows want to throw a big MOO-vie party, can we get some resources?",
                        yes: {
                            msg: "Thanks! It will be a truly MOO-ving experience!",
                            happiness: 9,
                            people: 15,
                            gold: -8,
                            materials: -15
                        },
                        no: {
                            msg: "MOOOOOO!!!!",
                            happiness: -7
                        }
                    },
                    Cat1: {
                        blook: "Cat",
                        msg: "I CAN HAS GOLD 4 HAMBURGER??",
                        yes: {
                            msg: "THANK U KIND HOOMAN",
                            happiness: 10,
                            gold: -7
                        },
                        no: {
                            msg: "I IS SAD NAO",
                            happiness: -8
                        }
                    },
                    Cat2: {
                        blook: "Cat",
                        msg: "LOOK, I HAS GOLD COIN.",
                        yes: {
                            msg: "I HOPE U LIEK MAH PRESENT",
                            gold: 10
                        },
                        no: {
                            msg: "OH, FINE IZ MAH GOLD COIN NAO",
                            happiness: -5
                        }
                    },
                    Cat3: {
                        blook: "Cat",
                        msg: "GIMIE PETS PLZ",
                        yes: {
                            msg: "YAYYY! THANKS HOOMAN!",
                            happiness: 7
                        },
                        no: {
                            msg: "¿POR QUÉ?",
                            happiness: -10
                        }
                    },
                    Goat1: {
                        blook: "Goat",
                        msg: "Hello, Your Majesty. I am Goatee The Second. I request resources to go on an adventure to the Mountains of Winterfrost.",
                        yes: {
                            msg: "Thank you. I will speak to you again once I return.",
                            gold: -8,
                            materials: -9,
                            people: -7,
                            spawnArray: ["Goat2", "Goat3", "Goat4"],
                            delay: 4
                        },
                        no: {
                            msg: "Very well, Your Highness, I shall obey your orders.",
                            happiness: -5
                        }
                    },
                    Goat2: {
                        blook: "Goat",
                        msg: "Your Majesty, I am ashamed to say that I failed to reach the Mountains of Winterfrost."
                    },
                    Goat3: {
                        blook: "Goat",
                        msg: "Your Majesty, I have returned with a chest full of gold from my quest!",
                        gold: 30
                    },
                    Goat4: {
                        blook: "Goat",
                        msg: "Your Majesty, I have returned with resources and brave warriors I met on my travels.",
                        materials: 17,
                        people: 17
                    },
                    Toucan1: {
                        blook: "Toucan",
                        msg: "Hello! I'm Tax Toucan. It's time to pay your kingdom's taxes. 15 gold please.",
                        yes: {
                            msg: "Great! Thank you!",
                            gold: -15
                        },
                        no: {
                            msg: "Very well. I apologize for what comes next.",
                            spawn: "Dragon1",
                            forceNext: !0
                        }
                    },
                    Dragon1: {
                        blook: "Dragon",
                        msg: "PAY. YOUR. TAXES.",
                        materials: -35,
                        people: -35,
                        happiness: -35
                    },
                    Pig1: {
                        blook: "Pig",
                        msg: "Ummmmmm... Oh yeah, I need to cover stuff in mud for, ummm..., new pigs?",
                        yes: {
                            msg: "Ummmm... yeah thanks, sorry if people don't like the mud",
                            materials: -7,
                            happiness: -10,
                            people: 14
                        },
                        no: {
                            msg: "Hmmmm..., ok.",
                            happiness: -6
                        }
                    },
                    Pig2: {
                        blook: "Pig",
                        msg: "Ummmmm... Can you let my 3 little pig friends in?",
                        yes: {
                            msg: "Ummmm... cool, they're kind of annoying though.",
                            people: 3,
                            spawn: "Pig3",
                            forceNext: !0
                        },
                        no: {
                            msg: "Ummm... whatever...",
                            happiness: -5
                        }
                    },
                    Pig3: {
                        blook: "Pig",
                        msg: "Heyo, I'm Wilbur. You think I could get some hay to build a super secure house for my friends?",
                        yes: {
                            msg: "Awesome, dude! This will for sure protect me.",
                            materials: -10,
                            people: 5,
                            happiness: 5,
                            spawn: "Pig4",
                            forceNext: !0
                        },
                        no: {
                            msg: "Come on man, it was such a good idea.",
                            happiness: -6,
                            spawn: "Pig4",
                            forceNext: !0
                        }
                    },
                    Pig4: {
                        blook: "Pig",
                        msg: "Yo dawg, I'm Albert. You think I could get a gold necklace to look super cool?",
                        yes: {
                            msg: "Right on, my man.",
                            gold: -10,
                            happiness: 10,
                            spawn: "Pig5",
                            forceNext: !0
                        },
                        no: {
                            msg: "Awww man, not cool.",
                            happiness: -10,
                            spawn: "Pig5",
                            forceNext: !0
                        }
                    },
                    Pig5: {
                        blook: "Pig",
                        msg: "Hey man, I'm Oliver. You wanna play some Fortnite?",
                        yes: {
                            msg: "Yeah dude, we're cool!",
                            happiness: 10,
                            materials: 5,
                            spawn: "Owl1",
                            forceNext: !0
                        },
                        no: {
                            msg: "Yeah, that's probably smart.",
                            happiness: -5
                        }
                    },
                    Bear1: {
                        blook: "Bear",
                        msg: "Hey, do you think I could eat some people?",
                        yes: {
                            msg: "Thanks!",
                            people: -10,
                            happiness: 7
                        },
                        no: {
                            msg: "Ok, maybe next time.",
                            happiness: -5
                        }
                    },
                    Bear2: {
                        blook: "Bear",
                        msg: "Hey, I just ate some people out back, can I pay you back for my mistake?",
                        yes: {
                            msg: "Cool, and sorry about the whole eating people thing.",
                            people: -10,
                            happiness: -5,
                            gold: 15
                        },
                        no: {
                            msg: "Dang, well, I still ate them.",
                            people: -10,
                            happiness: -5
                        }
                    },
                    Bear3: {
                        blook: "Bear",
                        msg: "Ok, I won't eat people if you buy me some salmon. How does that sound?",
                        yes: {
                            msg: "Great!",
                            gold: -14,
                            happiness: 10
                        },
                        no: {
                            msg: "Welp, sorry.",
                            people: -15
                        }
                    },
                    Duck1: {
                        blook: "Duck",
                        msg: "Hey, got any grapes?",
                        yes: {
                            msg: "Thanks!",
                            materials: -7,
                            happiness: 10
                        },
                        no: {
                            msg: "Oh, ok. (Then he waddled away)",
                            happiness: -5
                        }
                    },
                    Duck2: {
                        blook: "Duck",
                        msg: "Can I bring some annoying ducklings to add people to the kingdom?",
                        yes: {
                            msg: "Yay, sorry if they're a little loud. (Quacks echo in the background)",
                            people: 12,
                            happiness: -10
                        },
                        no: {
                            msg: "I guess that makes sense.",
                            happiness: -5
                        }
                    },
                    Duck3: {
                        blook: "Duck",
                        msg: "I need some resources for a trampoline. Can I take them from people and give you some?",
                        yes: {
                            msg: "Here you go! Good working with you.",
                            materials: 12,
                            happiness: -13
                        },
                        no: {
                            msg: "Whatever.",
                            happiness: -5
                        }
                    },
                    Fox1: {
                        blook: "Fox",
                        msg: "I'd like to do some swiping? I promise I'll give you gold for it.",
                        yes: {
                            msg: "You aren't so bad after all.",
                            gold: 14,
                            happiness: -17
                        },
                        no: {
                            msg: "You're not any fun.",
                            happiness: -5
                        }
                    },
                    Fox2: {
                        blook: "Fox",
                        msg: "Can I invite some friends to the kingdom? We're going to rob the bank.",
                        yes: {
                            msg: "Ok then.",
                            people: 12,
                            gold: -18
                        },
                        no: {
                            msg: "I really don't understand your reasoning.",
                            happiness: -4
                        }
                    },
                    Fox3: {
                        blook: "Fox",
                        msg: "Can I get a few people from your kingdom to join my crew? I'll pay gold for them.",
                        yes: {
                            msg: "This is perfect!",
                            people: -14,
                            gold: 15
                        },
                        no: {
                            msg: "Whatever you say.",
                            happiness: -6
                        }
                    },
                    Rabbit1: {
                        blook: "Rabbit",
                        msg: "Ok. Ok. I'll sell you 10 carrots for 10 gold. Sound good?",
                        yes: {
                            msg: "SOLD!",
                            materials: 10,
                            gold: -10
                        },
                        no: {
                            msg: "Apparently you don't know what a good deal is.",
                            happiness: -7
                        }
                    },
                    Rabbit2: {
                        blook: "Rabbit",
                        msg: "Hey, can I invite some fellow businessmen to the kingdom?",
                        yes: {
                            msg: "Thanks! Trust me, they're good guys.",
                            people: 10,
                            happiness: -5
                        },
                        no: {
                            msg: "Why not?",
                            happiness: -5
                        }
                    },
                    Rabbit3: {
                        blook: "Rabbit",
                        msg: "Hear me out, we dig a river through some homes, make some people mad, but make a bunch of gold from the trade route?",
                        yes: {
                            msg: "Now, we're doing business.",
                            gold: 15,
                            happiness: -15,
                            materials: 7,
                            people: -7
                        },
                        no: {
                            msg: "Jeez, some people just don't want to be rich.",
                            happiness: -6
                        }
                    },
                    Kitten1: {
                        blook: "Kitten",
                        msg: "I SPEEK LIEK DIS 2, NAO GIMIE GOLD 4 HAMBURGER",
                        yes: {
                            msg: "THX HOOMAN",
                            gold: -8,
                            happiness: 10
                        },
                        no: {
                            msg: "NOOOOOOOOOO",
                            happiness: -10
                        }
                    },
                    Moose1: {
                        blook: "Moose",
                        msg: "Look, I'm a cow!",
                        yes: {
                            msg: "Thanks, I'm really trying.",
                            happiness: 7,
                            spawn: "Moose2",
                            delay: 4
                        },
                        no: {
                            msg: "But I try so hard.",
                            happiness: -10,
                            spawn: "Moose2",
                            delay: 4
                        }
                    },
                    Moose2: {
                        blook: "Moose",
                        msg: "MOOOOOOO!!!",
                        yes: {
                            msg: "I know, I'm getting better, right?",
                            happiness: 7,
                            spawn: "Moose3",
                            delay: 4
                        },
                        no: {
                            msg: "Come on, I've been working on that.",
                            happiness: -10,
                            spawn: "Moose3",
                            delay: 4
                        }
                    },
                    Moose3: {
                        blook: "Moose",
                        msg: "Look, I'm a MOO-se!",
                        yes: {
                            msg: "I knew that would work!",
                            happiness: 7
                        },
                        no: {
                            msg: "I really thought that would work.",
                            happiness: -10
                        }
                    },
                    Raccoon1: {
                        blook: "Raccoon",
                        msg: "Come on, it's overcrowded here. Let's kick some people out or we'll use too many materials.",
                        yes: {
                            msg: "You're a smart person.",
                            materials: 15,
                            people: -13
                        },
                        no: {
                            msg: "Wahhhhhhh.",
                            materials: -10
                        }
                    },
                    Raccoon2: {
                        blook: "Raccoon",
                        msg: "Come on, I'm bored. Can I go prank some people? Otherwise, I'm just stealing your stuff.",
                        yes: {
                            msg: "Finally.",
                            happiness: -16
                        },
                        no: {
                            msg: "You're choice, not mine.",
                            materials: -16
                        }
                    },
                    Raccoon3: {
                        blook: "Raccoon",
                        msg: "Come on, don't you think you're a little selfish? Give me some gold. Otherwise, I'm chasing people out of this kingdom.",
                        yes: {
                            msg: "Wow, look at the selfish ruler being a little bit kind.",
                            gold: -16
                        },
                        no: {
                            msg: "Whatever, bye, bye people.",
                            people: -16
                        }
                    },
                    Turtle1: {
                        blook: "Turtle",
                        msg: "Hello! I just met some new turtles. Can they come over and play?",
                        yes: {
                            msg: "Yayyy! Thanks! I just needed some materials for them too.",
                            people: 10,
                            happiness: 5,
                            materials: -10
                        },
                        no: {
                            msg: "Awwww, ok.",
                            happiness: -8
                        }
                    },
                    Turtle2: {
                        blook: "Turtle",
                        msg: "Do you think I'm getting too fat?",
                        yes: {
                            msg: "Dang, my mom was right.",
                            happiness: -15
                        },
                        no: {
                            msg: "That's what I said. Here's some gold, you're the best.",
                            happiness: 7,
                            gold: 7
                        }
                    },
                    Turtle3: {
                        blook: "Turtle",
                        msg: "I've been mining some gold, but I think I should start a farm. Should I be a farmer?",
                        yes: {
                            msg: "Great, I love farming.",
                            materials: 12
                        },
                        no: {
                            msg: "I guess mining for gold is fine.",
                            gold: 10
                        }
                    },
                    Dog1: {
                        blook: "Dog",
                        msg: "There's going to be a Puppy talking to you in a while, please do not give him gold.",
                        spawn: "Puppy1",
                        delay: 3
                    },
                    Dog2: {
                        blook: "Dog",
                        msg: "I told you not to give him gold. He just spent it all on candy and trashed a bunch of resources.",
                        materials: -25,
                        happiness: -10
                    },
                    Dog3: {
                        blook: "Dog",
                        msg: "Great job not giving him gold! Now I can trust this kingdom with my other puppies.",
                        people: 7,
                        happiness: 7
                    },
                    Dog4: {
                        blook: "Dog",
                        msg: "Can I have some people and we'll get you a treasure chest?",
                        yes: {
                            msg: "Radical!",
                            gold: 15,
                            people: -11
                        },
                        no: {
                            msg: "You don't want more gold?",
                            happiness: -5
                        }
                    },
                    Puppy1: {
                        blook: "Puppy",
                        msg: "I feel really sick, can I have some gold to buy medicine?",
                        yes: {
                            msg: "Thanks, hopefully I feel better soon!",
                            happiness: 15,
                            gold: -12,
                            spawn: "Dog2",
                            forceNext: !0
                        },
                        no: {
                            msg: "Dang it, you got me!",
                            spawn: "Dog3",
                            forceNext: !0
                        }
                    },
                    Goldfish1: {
                        blook: "Goldfish",
                        msg: "Do you think I could flood the city so I can swim everywhere?",
                        yes: {
                            msg: "Great, this might not be great for everyone else though.",
                            happiness: 5,
                            people: -15,
                            materials: -15
                        },
                        no: {
                            msg: "Fine.",
                            happiness: -5
                        }
                    },
                    Goldfish2: {
                        blook: "Goldfish",
                        msg: "Let's buy a cotton candy machine and invite everyone we know!",
                        yes: {
                            msg: "PARTY TIME!",
                            gold: -18,
                            happiness: 10,
                            people: 7
                        },
                        no: {
                            msg: "What do you have against cotton candy?",
                            happiness: -5
                        }
                    },
                    Goldfish3: {
                        blook: "Goldfish",
                        msg: "I forget, where did I leave my phone?",
                        yes: {
                            msg: "Ok, not really a yes or no question though.",
                            happiness: 5
                        },
                        no: {
                            msg: "Ok, not really a yes or no question though.",
                            happiness: 5
                        }
                    },
                    Squirrel1: {
                        blook: "Squirrel",
                        msg: "I'm going NUTS dude, can I have some gold to get some help?",
                        yes: {
                            msg: "Hopefully this works.",
                            gold: -14,
                            happiness: 14
                        },
                        no: {
                            msg: "Ahhh, ok, but I don't think everyone else is very happy with me.",
                            happiness: -12
                        }
                    },
                    Squirrel2: {
                        blook: "Squirrel",
                        msg: "Can I get some wood to build a treehouse for my cousins?",
                        yes: {
                            msg: "Thanks, I love trees.",
                            materials: -12,
                            people: 14
                        },
                        no: {
                            msg: "Oh, so I guess they're not going over for dinner.",
                            happiness: -6
                        }
                    },
                    Squirrel3: {
                        blook: "Squirrel",
                        msg: "I should be gathering nuts, but can I go to a party instead?",
                        yes: {
                            msg: "That's what we're talking about.",
                            happiness: 10
                        },
                        no: {
                            msg: "Fine, more nuts for you.",
                            materials: 12,
                            happiness: -10
                        }
                    },
                    Hedgehog1: {
                        blook: "Hedgehog",
                        msg: "Can I get some gold for hedge trimmers to do some hedging, I'll give you the extra branches?",
                        yes: {
                            msg: "You're the best!",
                            gold: -14,
                            materials: 14
                        },
                        no: {
                            msg: "But, I like hedging.",
                            happiness: -6
                        }
                    },
                    Hedgehog2: {
                        blook: "Hedgehog",
                        msg: "Hey, can we kick out everyone named Chad?",
                        yes: {
                            msg: "Take that, Chad.",
                            people: -11,
                            happiness: 12
                        },
                        no: {
                            msg: "So we're just going to have Chad's walking around?",
                            happiness: -9
                        }
                    },
                    Hedgehog3: {
                        blook: "Hedgehog",
                        msg: "Can I go hurt some people with my spikes?",
                        yes: {
                            msg: "I like you're styling.",
                            people: -8,
                            happiness: -12
                        },
                        no: {
                            msg: "Boring...",
                            happiness: -5
                        }
                    },
                    Tiger1: {
                        blook: "Tiger",
                        msg: "Can I get some materials and gold to build a cereal factory? It'll bring jobs to the kingdom.",
                        yes: {
                            msg: "They're grrrrrreat!",
                            gold: -10,
                            materials: -15,
                            people: 15,
                            happiness: 10
                        },
                        no: {
                            msg: "Cereal is so good though.",
                            happiness: -9
                        }
                    },
                    Tiger2: {
                        blook: "Tiger",
                        msg: "Can I play tag with some other people in the kingdom?",
                        yes: {
                            msg: "Oh, I think I may have hurt some of them.",
                            people: -12,
                            happiness: 12
                        },
                        no: {
                            msg: "Fine, I'll just chase my tail.",
                            happiness: -7
                        }
                    },
                    Tiger3: {
                        blook: "Tiger",
                        msg: "Hey, I need to cut down part of the rainforest to build shelter for my cubs.",
                        yes: {
                            msg: "Thanks, people don't seem to be happy about the rainforest though.",
                            materials: -10,
                            people: 15,
                            happiness: -14
                        },
                        no: {
                            msg: "I guess we just have to leave the kingdom then.",
                            people: -9
                        }
                    },
                    Orangutan1: {
                        blook: "Orangutan",
                        msg: "Hello. I am Dr. Stephen Norwitz. May have some resources to perform scientific research?",
                        yes: {
                            msg: "Thank you, I will report back soon with my findings.",
                            materials: -12,
                            people: -8,
                            gold: -8,
                            spawnArray: ["Orangutan2", "Orangutan3", "Orangutan4"],
                            delay: 4
                        },
                        no: {
                            msg: "Very well, perhaps another time.",
                            happiness: -4
                        }
                    },
                    Orangutan2: {
                        blook: "Orangutan",
                        msg: "Your Majesty, my research has been very successful, but I request more resources to finish up?",
                        yes: {
                            msg: "Thank you, I will return soon.",
                            materials: -10,
                            people: -7,
                            gold: -7,
                            spawnArray: ["Orangutan5", "Orangutan6"],
                            delay: 4
                        },
                        no: {
                            msg: "Oh, well I guess I'll just scrap that project then.",
                            happiness: -8
                        }
                    },
                    Orangutan3: {
                        blook: "Orangutan",
                        msg: "So, my research went a little bit wrong. I accidentally mutated a monkey to make it extremely evil.",
                        people: -5,
                        happiness: -15
                    },
                    Orangutan4: {
                        blook: "Orangutan",
                        msg: "Finally, I have completed my research. We were able to modify the genes of our plants to improve their output.",
                        materials: 27,
                        people: 9
                    },
                    Orangutan5: {
                        blook: "Orangutan",
                        msg: "YES! My research has created a very profitable and entertaining Battle Royale game.",
                        gold: 30,
                        happiness: 30
                    },
                    Orangutan6: {
                        blook: "Orangutan",
                        msg: "YES! My research has created a miracle pill to cure disease around the kingdom.",
                        people: 35,
                        happiness: 25
                    },
                    Cockatoo1: {
                        blook: "Cockatoo",
                        msg: "Ok, look, do not trust anything the red parrot says.",
                        spawnArray: ["Parrot1", "Parrot2", "Parrot3", "Parrot3"],
                        delay: 2
                    },
                    Parrot1: {
                        blook: "Parrot",
                        msg: "Hey, can I invite some of my friends to the kingdom? They're really good birds.",
                        yes: {
                            msg: "Oh no, I didn't think they would steal all that stuff, sorry.",
                            materials: -15,
                            gold: -15,
                            people: 10,
                            happiness: -10,
                            spawn: "Owl1",
                            forceNext: !0
                        },
                        no: {
                            msg: "Dang it, you're too smart for me."
                        }
                    },
                    Parrot2: {
                        blook: "Parrot",
                        msg: "I just learned how to duplicate gold! Give me 15 gold, and I'll give you 30 back!",
                        yes: {
                            msg: "Sorry, it didn't work that time.",
                            gold: -15
                        },
                        no: {
                            msg: "Fine, more gold for me."
                        }
                    },
                    Parrot3: {
                        blook: "Parrot",
                        msg: "Look, do not listen to the Macaw, he's such a liar.",
                        spawnArray: ["Macaw1", "Macaw2", "Macaw3"],
                        delay: 1
                    },
                    Macaw1: {
                        blook: "Macaw",
                        msg: "Come on, the Parrot keeps pooping everywhere. Can we kick him out?",
                        yes: {
                            msg: "Thank goodness.",
                            happiness: 12,
                            people: -1
                        },
                        no: {
                            msg: "Why not? Didn't you listen to the Cockatoo?",
                            happiness: -17
                        }
                    },
                    Macaw2: {
                        blook: "Macaw",
                        msg: "Hey, do you want this treasure chest that is definitely not a trap?",
                        yes: {
                            msg: "Cool! Here you go!",
                            materials: 15,
                            gold: 15
                        },
                        no: {
                            msg: "Fine, more for me!"
                        }
                    },
                    Macaw3: {
                        blook: "Macaw",
                        msg: "Hey, can I invite my friends over? They are definitely not bad people that will make you regret this decision.",
                        yes: {
                            msg: "Yayyy! They're so nice!",
                            people: 15,
                            happiness: 5
                        },
                        no: {
                            msg: "Fine, then I'm taking my friends to a different kingdom.",
                            people: -10,
                            happiness: -7
                        }
                    },
                    Anaconda1: {
                        blook: "Anaconda",
                        msg: "Let me slither around people's houses. Now.",
                        yes: {
                            msg: "Yes. Finally.",
                            happiness: -15,
                            people: -5
                        },
                        no: {
                            msg: "You're no fun.",
                            happiness: -7
                        }
                    },
                    Anaconda2: {
                        blook: "Anaconda",
                        msg: "You are going to let me bite some people.",
                        yes: {
                            msg: "Just as I planned.",
                            happiness: -15,
                            people: -8
                        },
                        no: {
                            msg: "Really?",
                            happiness: -7
                        }
                    },
                    Anaconda3: {
                        blook: "Anaconda",
                        msg: "You are giving me materials. Otherwise, I'm taking your gold.",
                        yes: {
                            msg: "Good choice.",
                            materials: -10
                        },
                        no: {
                            msg: "Works for me.",
                            gold: -15
                        }
                    },
                    Jaguar1: {
                        blook: "Jaguar",
                        msg: "What's up everyone? I'm Jaggy! Y'all think you can go hit that like and subscribe button?",
                        yes: {
                            msg: "Thanks so much! Welcome to the Jaggy Squad!",
                            happiness: 12
                        },
                        no: {
                            msg: "Awwwww, come on people.",
                            happiness: -8
                        }
                    },
                    Jaguar2: {
                        blook: "Jaguar",
                        msg: "Heyo! Can I get 20 gold to turn a pool into a super useful rainbow ball pit?",
                        yes: {
                            msg: "This may not have been a great investment.",
                            gold: -20,
                            happiness: 15
                        },
                        no: {
                            msg: "Ok, alright, ok.",
                            happiness: -7
                        }
                    },
                    Jaguar3: {
                        blook: "Jaguar",
                        msg: "Ok. Can I get some people to test my vegetarian bacon?",
                        yes: {
                            msg: "I don't think they liked it.",
                            people: -10,
                            happiness: -13
                        },
                        no: {
                            msg: "Fine, I'll just eat it myself.",
                            happiness: -6
                        }
                    },
                    Panther1: {
                        blook: "Panther",
                        msg: "Hello, would you like to buy some advanced minerals for 15 gold?",
                        yes: {
                            msg: "I think you'll be happy with your purchase.",
                            gold: -15,
                            materials: 16
                        },
                        no: {
                            msg: "Very well.",
                            happiness: -6
                        }
                    },
                    Panther2: {
                        blook: "Panther",
                        msg: "Hey, can I have some gold for a karaoke machine?",
                        yes: {
                            msg: "Nice. You're singing with me, right?",
                            gold: -14,
                            happiness: 17
                        },
                        no: {
                            msg: "You missed a big opportunity here.",
                            happiness: -6
                        }
                    },
                    Panther3: {
                        blook: "Panther",
                        msg: "I know it'll make some people mad, but you should build houses instead of that new park. Right?",
                        yes: {
                            msg: "I think this is a good decision.",
                            people: 15,
                            happiness: -17
                        },
                        no: {
                            msg: "Well, that still makes me upset.",
                            happiness: -6
                        }
                    },
                    Capuchin1: {
                        blook: "Capuchin",
                        msg: "Hey, can I get 17 materials to create an invention?",
                        yes: {
                            msg: "Awesome, I'll let you know how it goes.",
                            materials: -17,
                            spawnArray: ["Capuchin2", "Capuchin2", "Capuchin3", "Capuchin3", "Capuchin4"],
                            delay: 3
                        },
                        no: {
                            msg: "You don't trust me? I shall return.",
                            happiness: -5
                        }
                    },
                    Capuchin2: {
                        blook: "Capuchin",
                        msg: "Look, I created the Super Pogo Stick 4000! It's selling like crazy!",
                        gold: 17,
                        happiness: 12
                    },
                    Capuchin3: {
                        blook: "Capuchin",
                        msg: "Look, I created ice cream that allows people to clone themselves!",
                        people: 20
                    },
                    Capuchin4: {
                        blook: "Capuchin",
                        msg: "My invention did not go well.",
                        people: -10,
                        happiness: -10
                    },
                    SnowyOwl1: {
                        blook: "Snowy Owl",
                        msg: "Shhhh... Give me 15 gold and I'll be a spy for you.",
                        yes: {
                            msg: "I'll report back soon.",
                            gold: -15,
                            spawnArray: ["SnowyOwl2", "SnowyOwl3", "SnowyOwl4"],
                            delay: 3
                        },
                        no: {
                            msg: "Good luck without me.",
                            happiness: -5
                        }
                    },
                    SnowyOwl2: {
                        blook: "Snowy Owl",
                        msg: "Reporting back. I found someone stealing materials from your warehouse.",
                        materials: 15
                    },
                    SnowyOwl3: {
                        blook: "Snowy Owl",
                        msg: "Reporting back. I found some people hiding in your kingdom.",
                        people: 15
                    },
                    SnowyOwl4: {
                        blook: "Snowy Owl",
                        msg: "Reporting back. I found some people not paying taxes.",
                        gold: 20
                    },
                    PolarBear1: {
                        blook: "Polar Bear",
                        msg: "Do you think we could turn down the air so our ice doesn't melt?",
                        yes: {
                            msg: "Maybe we made it too cold.",
                            materials: 18,
                            happiness: -12,
                            people: -10
                        },
                        no: {
                            msg: "Well it won't be ice for much longer then.",
                            materials: -10
                        }
                    },
                    PolarBear2: {
                        blook: "Polar Bear",
                        msg: "Do you think I could test out my freeze ray on some people?",
                        yes: {
                            msg: "It works!",
                            people: -10,
                            happiness: -5
                        },
                        no: {
                            msg: "Then I guess we'll never know if it works or not.",
                            happiness: -5
                        }
                    },
                    PolarBear3: {
                        blook: "Polar Bear",
                        msg: "Let's buy a snow cone machine for 14 gold?",
                        yes: {
                            msg: "Yayyyyy!!!",
                            gold: -14,
                            happiness: 17
                        },
                        no: {
                            msg: "That is disappointing.",
                            happiness: -7
                        }
                    },
                    ArcticFox1: {
                        blook: "Arctic Fox",
                        msg: "Do you know what the Arctic Fox says?",
                        yes: {
                            msg: "Oh, cool.",
                            happiness: 7
                        },
                        no: {
                            msg: "Oh, ok.",
                            happiness: 7
                        }
                    },
                    ArcticFox2: {
                        blook: "Arctic Fox",
                        msg: "Here's the deal: you let me steal from people, I'll give you half the profits.",
                        yes: {
                            msg: "Pleasure doing business with you.",
                            happiness: -15,
                            gold: 17
                        },
                        no: {
                            msg: "Maybe next time.",
                            happiness: -5
                        }
                    },
                    ArcticFox3: {
                        blook: "Arctic Fox",
                        msg: "Hey, can I buy 13 acres of land for 15 gold?",
                        yes: {
                            msg: "Perfect!",
                            gold: 15,
                            materials: -13
                        },
                        no: {
                            msg: "That was a great deal.",
                            happiness: -5
                        }
                    },
                    Penguin1: {
                        blook: "Penguin",
                        msg: "Give me some materials and gold, and I'll build the best amusement park ever!",
                        yes: {
                            msg: "I told you it would be the best ever.",
                            materials: -15,
                            people: 15,
                            happiness: 20,
                            gold: -15
                        },
                        no: {
                            msg: "So, no amusement park?",
                            happiness: -5
                        }
                    },
                    Penguin2: {
                        blook: "Penguin",
                        msg: "Can I get some materials to go ice fishing and make some friends?",
                        yes: {
                            msg: "My dreams are coming true!",
                            materials: -15,
                            people: 5,
                            happiness: 10
                        },
                        no: {
                            msg: "Normal fishing it is.",
                            happiness: -5
                        }
                    },
                    Penguin3: {
                        blook: "Penguin",
                        msg: "Hey, two baby penguins are going to come by, only listen to the one named Timmy.",
                        spawnArray: ["BabyPenguin1", "BabyPenguin2"],
                        delay: 2
                    },
                    BabyPenguin1: {
                        blook: "Baby Penguin",
                        msg: "Hey, I'm Timmy. You want to open this super safe box?",
                        yes: {
                            msg: "That was awesome!",
                            gold: 15,
                            materials: 15,
                            spawn: "BabyPenguin3",
                            delay: 2
                        },
                        no: {
                            msg: "Now we'll never know what was inside.",
                            happiness: -5
                        }
                    },
                    BabyPenguin2: {
                        blook: "Baby Penguin",
                        msg: "Hey, I'm Paul. You want to open this sweet raffle for 15 gold?",
                        yes: {
                            msg: "Dang it, you didn't win",
                            gold: -15,
                            spawn: "BabyPenguin4",
                            delay: 2
                        },
                        no: {
                            msg: "Well, you can't lose if you don't enter, I guess.",
                            happiness: -5
                        }
                    },
                    BabyPenguin3: {
                        blook: "Baby Penguin",
                        msg: "Hey, I'm Paul. Can you give everyone these cookies I just baked?",
                        yes: {
                            msg: "Hmmmm... People didn't seem to like them.",
                            people: -10,
                            happiness: -10
                        },
                        no: {
                            msg: "Yeah, it was my first time baking anyway. They probably weren't great.",
                            happiness: -5
                        }
                    },
                    BabyPenguin4: {
                        blook: "Baby Penguin",
                        msg: "Hey, I'm Timmy. You should buy this heated igloo for 17 gold.",
                        yes: {
                            msg: "I actually can't believe that worked.",
                            people: 10,
                            happiness: 10,
                            gold: -17
                        },
                        no: {
                            msg: "I guess it doesn't sound like the best idea.",
                            happiness: -5
                        }
                    },
                    ArcticHare1: {
                        blook: "Arctic Hare",
                        msg: "Can I bring my family to the kingdom?",
                        yes: {
                            msg: "Niceeeee!",
                            people: 9
                        },
                        no: {
                            msg: "I don't understand.",
                            happiness: -9
                        }
                    },
                    ArcticHare2: {
                        blook: "Arctic Hare",
                        msg: "It'll annoy some people, but can I jump around like crazy in the kingdom? I'll pay some gold to do it.",
                        yes: {
                            msg: "Bouncy time!",
                            happiness: -16,
                            gold: 16
                        },
                        no: {
                            msg: "So, no bouncy?",
                            happiness: -5
                        }
                    },
                    ArcticHare3: {
                        blook: "Arctic Hare",
                        msg: "Can I build a factory in the kingdom to produce materials? It won't smell too good.",
                        yes: {
                            msg: "I think you made the right decision.",
                            happiness: -16,
                            materials: 20,
                            gold: -5
                        },
                        no: {
                            msg: "Ok.",
                            happiness: -7
                        }
                    },
                    ArcticHare4: {
                        blook: "Arctic Hare",
                        msg: "Can I build a trampoline park? It will take 20 materials?",
                        yes: {
                            msg: "Let's Bounce!",
                            happiness: 12,
                            people: 7,
                            gold: 5,
                            materials: -20
                        },
                        no: {
                            msg: "Fine. No bouncing.",
                            happiness: -8
                        }
                    },
                    Seal1: {
                        blook: "Seal",
                        msg: "Can I build a theater and put on a show?",
                        yes: {
                            msg: "Thanks! Everyone loves the show!",
                            happiness: 17,
                            gold: -5,
                            materials: -12
                        },
                        no: {
                            msg: "I won't let you crush my dreams.",
                            happiness: -7
                        }
                    },
                    Seal2: {
                        blook: "Seal",
                        msg: "Hey, can I invite my relatives to the kingdom? People probably won't like them though.",
                        yes: {
                            msg: "Yeah, people don't like them",
                            happiness: -15,
                            people: 10
                        },
                        no: {
                            msg: "That makes sense."
                        }
                    },
                    Seal3: {
                        blook: "Seal",
                        msg: "Hey, can I get 12 rubber ducks? I can't pay for them though.",
                        yes: {
                            msg: "That was easy! Thank you!",
                            happiness: 7,
                            materials: -12
                        },
                        no: {
                            msg: "It was still worth asking.",
                            happiness: -5
                        }
                    },
                    Walrus1: {
                        blook: "Walrus",
                        msg: "Ay, we need to build some defenses to protect our kingdom.",
                        yes: {
                            msg: "Good choice, mate.",
                            materials: -17,
                            happiness: 10
                        },
                        no: {
                            msg: "That's unfortunate.",
                            people: -15,
                            happiness: -5
                        }
                    },
                    Walrus2: {
                        blook: "Walrus",
                        msg: "Ay, do you want some gold? What do you say we organize a wagon wash to raise some money?",
                        yes: {
                            msg: "I'll get everything set up!",
                            materials: -10,
                            people: -7,
                            gold: 18
                        },
                        no: {
                            msg: "Alright then.",
                            happiness: -5
                        }
                    },
                    Walrus3: {
                        blook: "Walrus",
                        msg: "Ay, can I get some people to go mine for minerals?",
                        yes: {
                            msg: "Great thinking!",
                            people: -14,
                            materials: 17
                        },
                        no: {
                            msg: "Whatever you say, mate.",
                            happiness: -3
                        }
                    },
                    Wizard1: {
                        blook: "Wizard",
                        msg: "I've been learning magic. Do you think I could cast a spell on your kingdom? It could be good.",
                        yes: {
                            array: [{
                                msg: "YES! The spell made a bunch of gold appear!",
                                gold: 25
                            }, {
                                msg: "NO! The spell didn't go so well.",
                                people: -15,
                                materials: -15,
                                happiness: -15
                            }, {
                                msg: "YES! The spell produced many great rewards!",
                                materials: 15,
                                people: 15
                            }]
                        },
                        no: {
                            msg: "I'll just keep practicing then.",
                            happiness: -7
                        }
                    },
                    Wizard2: {
                        blook: "Wizard",
                        msg: "So, I've been learning about potion brewing. Can I give my potions to a few people in town?",
                        yes: {
                            array: [{
                                msg: "WOW! The potion cloned everyone who drank it!",
                                people: 20
                            }, {
                                msg: "OUCH! The potion turned people into fire-breathing frogs.",
                                people: -10,
                                materials: -15,
                                happiness: -15
                            }, {
                                msg: "AWESOME! The potion made your workers extra productive!",
                                gold: 15,
                                materials: 15
                            }]
                        },
                        no: {
                            msg: "I'll just keep learning then.",
                            happiness: -7
                        }
                    },
                    Wizard3: {
                        blook: "Wizard",
                        msg: "Hey, I think the Giant Slime Monster is going to attack soon. Can I get 25 materials to create a spell to defend us?",
                        yes: {
                            msg: "Thanks. We should be protected now",
                            materials: -25,
                            happiness: 5
                        },
                        no: {
                            msg: "Oh, well this is bad.",
                            spawn: "SlimeMonster1",
                            forceNext: !0
                        }
                    },
                    SlimeMonster1: {
                        blook: "Slime Monster",
                        msg: "GET SLIMED!",
                        materials: -10,
                        people: -15,
                        happiness: -20,
                        gold: -15
                    },
                    Elf1: {
                        blook: "Elf",
                        msg: "Please don't cut down the forest for materials. What if I give you 15 gold to not cut it down?",
                        yes: {
                            msg: "Thanks so much!",
                            gold: 15
                        },
                        no: {
                            msg: "The poor trees.",
                            materials: 15,
                            happiness: -9
                        }
                    },
                    Elf2: {
                        blook: "Elf",
                        msg: "For 10 gold, I'll move my entire elf tribe into the kingdom. What do you say?",
                        yes: {
                            msg: "Great call!",
                            people: 15,
                            gold: -10,
                            happiness: 5
                        },
                        no: {
                            msg: "Fine, we'll find another kingdom.",
                            happiness: -7
                        }
                    },
                    Elf3: {
                        blook: "Elf",
                        msg: "People will hate this, but I need you to cancel the carnival. The Slime Monster is coming and we can't have people outside.",
                        yes: {
                            msg: "That's a great decision.",
                            happiness: -15
                        },
                        no: {
                            msg: "This will go terribly.",
                            spawn: "SlimeMonster2",
                            forceNext: !0
                        }
                    },
                    SlimeMonster2: {
                        blook: "Slime Monster",
                        msg: "GET SLIMED!",
                        materials: -15,
                        people: -20,
                        happiness: -10,
                        gold: -10
                    },
                    Elf4: {
                        blook: "Elf",
                        msg: "Some of our houses burned down in a fire. Can I get some materials to rebuild?",
                        yes: {
                            msg: "Thanks so much!",
                            materials: -16,
                            happiness: 6
                        },
                        no: {
                            msg: "But, our houses are gone...",
                            people: -10,
                            happiness: -11
                        }
                    },
                    Fairy1: {
                        blook: "Fairy",
                        msg: "Hey, can I be released for a few hours?",
                        yes: {
                            msg: "Great! I'll let you know what happens!",
                            happiness: 7,
                            spawnArray: ["Fairy2", "Fairy3", "Fairy4"],
                            delay: 3
                        },
                        no: {
                            msg: "I guess I'll just stay in this bottle then.",
                            happiness: -10
                        }
                    },
                    Fairy2: {
                        blook: "Fairy",
                        msg: "Look! I turned some things gold while I was released.",
                        materials: -10,
                        gold: 17
                    },
                    Fairy3: {
                        blook: "Fairy",
                        msg: "I... I... I don't know what happened.",
                        materials: -5,
                        people: -10,
                        happiness: -10,
                        gold: -5
                    },
                    Fairy4: {
                        blook: "Fairy",
                        msg: "Hey, I did some exploring while you let me free, and I found some cool stuff.",
                        materials: 15,
                        people: 10
                    },
                    Fairy5: {
                        blook: "Fairy",
                        msg: "I'll give you some gold if you let me take some of your people to the Fairy World.",
                        yes: {
                            msg: "They're going to love it there!",
                            gold: 15,
                            people: -12
                        },
                        no: {
                            msg: "I guess we'll just stay here.",
                            happiness: -7
                        }
                    },
                    Fairy6: {
                        blook: "Fairy",
                        msg: "Can I get some gold to have a sleepover with some friends?",
                        yes: {
                            msg: "This will be the best sleepover ever!",
                            people: 7,
                            happiness: 13,
                            gold: -12
                        },
                        no: {
                            msg: "Wahhhhhhhhh!",
                            happiness: -10
                        }
                    },
                    Witch1: {
                        blook: "Witch",
                        msg: "Would you like to take a gaze into my crystal ball?",
                        yes: {
                            array: [{
                                msg: "Hmmmm... It looks like your future involves lots of interesting people.",
                                people: 20
                            }, {
                                msg: "Hmmmm... It looks like your future is full of tragedy.",
                                happiness: -15,
                                gold: -10,
                                materials: -10,
                                people: -5
                            }, {
                                msg: "Hmmmm... It looks like your future has plenty of riches.",
                                materials: 10,
                                gold: 15
                            }]
                        },
                        no: {
                            msg: "It must be too spooky for you.",
                            happiness: -5
                        }
                    },
                    Witch2: {
                        blook: "Witch",
                        msg: "Can I place a charm on a few of your people? It'll probably work well.",
                        yes: {
                            array: [{
                                msg: "Hmmmm... The charm seems to have turned people to gold.",
                                people: -10,
                                gold: 15
                            }, {
                                msg: "Hmmmm... The charm seems to have made people very sad.",
                                happiness: -20
                            }, {
                                msg: "Hmmm... The charm seems to have given people more motivation.",
                                materials: 20,
                                gold: 5,
                                happiness: 10
                            }]
                        },
                        no: {
                            msg: "Do you always play it safe?",
                            happiness: -5
                        }
                    },
                    Witch3: {
                        blook: "Witch",
                        msg: "Ok, I'll give you materials for it, but can I go scare some people?",
                        yes: {
                            msg: "Let the spookiness begin!",
                            materials: 15,
                            people: -3,
                            happiness: -15
                        },
                        no: {
                            msg: "Very well.",
                            happiness: -4
                        }
                    },
                    Witch4: {
                        blook: "Witch",
                        msg: "So, I accidentally cursed the kingdom? I'll need some people to help remove it.",
                        yes: {
                            msg: "That was close.",
                            people: -12,
                            happiness: 7
                        },
                        no: {
                            msg: "It wasn't a good curse.",
                            materials: -12,
                            people: -6,
                            happiness: -10,
                            gold: -6
                        }
                    },
                    Jester1: {
                        blook: "Jester",
                        msg: "Heyo! Can I get some gold for new juggling balls? The people will love them.",
                        yes: {
                            msg: "Thanks! These are the best!",
                            gold: -10,
                            happiness: 15
                        },
                        no: {
                            msg: "Sad. :(",
                            happiness: -7
                        }
                    },
                    Jester2: {
                        blook: "Jester",
                        msg: "Heyo! Can I get some materials to throw an epic festival?",
                        yes: {
                            msg: "Thanks! The festival is a huge success!",
                            materials: -20,
                            people: 10,
                            happiness: 20,
                            gold: 10
                        },
                        no: {
                            msg: "We are all disappointed.",
                            happiness: -10
                        }
                    },
                    Jester3: {
                        blook: "Jester",
                        msg: "Heyo! This may upset some people, but do you think I could take a break and go fishing?",
                        yes: {
                            msg: "Thanks! It means a lot that you care about me too! Here are some of my fish.",
                            materials: 10,
                            people: 5,
                            happiness: -15
                        },
                        no: {
                            msg: "I guess it's more juggling for me.",
                            happiness: -5
                        }
                    },
                    Jester4: {
                        blook: "Jester",
                        msg: "Heyo! Can I get some gold to recruit new performers?",
                        yes: {
                            msg: "Fantastic!",
                            people: 10,
                            happiness: 7,
                            gold: -14
                        },
                        no: {
                            msg: "I guess I understand.",
                            happiness: -6
                        }
                    },
                    Unicorn1: {
                        blook: "Unicorn",
                        msg: "Hello! Can I have some resources to go explore the magical forest?",
                        yes: {
                            msg: "Thanks! I will return soon.",
                            people: -7,
                            gold: -7,
                            materials: -10,
                            spawnArray: ["Unicorn2", "Unicorn3", "Unicorn4"],
                            delay: 4
                        },
                        no: {
                            msg: "I'm disappointed.",
                            happiness: -10
                        }
                    },
                    Unicorn2: {
                        blook: "Unicorn",
                        msg: "I've returned from my journey! I was able to collect some enchanted plants from the magical forest.",
                        materials: 25
                    },
                    Unicorn3: {
                        blook: "Unicorn",
                        msg: "I've returned from my journey! I met some very powerful fairies who wish to give you some gold.",
                        gold: 15,
                        people: 15
                    },
                    Unicorn4: {
                        blook: "Unicorn",
                        msg: "I've returned from my journey. I got lost on the way to the magical forest, so I have returned with nothing but my sadness.",
                        happiness: -10
                    },
                    Unicorn5: {
                        blook: "Unicorn",
                        msg: "Heyyy! Can I get some materials and workers to open a profitable doughnut shop?",
                        yes: {
                            msg: "Sick!",
                            materials: -12,
                            people: -10,
                            gold: 20,
                            happiness: 10
                        },
                        no: {
                            msg: "But, no one makes good doughnuts around here.",
                            happiness: -8
                        }
                    },
                    Unicorn6: {
                        blook: "Unicorn",
                        msg: "Can I get some gold to enter a mystical race? If I win, I'll give you half of the prize.",
                        yes: {
                            msg: "Great! I'll get to training immediately.",
                            gold: -12,
                            spawnArray: ["Unicorn7", "Unicorn8"],
                            delay: 3
                        },
                        no: {
                            msg: "Maybe next race.",
                            happiness: -7
                        }
                    },
                    Unicorn7: {
                        blook: "Unicorn",
                        msg: "I won the race!",
                        gold: 15,
                        materials: 10,
                        people: 5,
                        happiness: 5
                    },
                    Unicorn8: {
                        blook: "Unicorn",
                        msg: "I lost the race...",
                        happiness: -10
                    },
                    King1: {
                        blook: "King",
                        msg: "Give me 20 people for my kingdom, or I'll release my dragon on your city.",
                        yes: {
                            msg: "Great decision",
                            people: -20
                        },
                        no: {
                            msg: "Very well.",
                            spawn: "Dragon2",
                            forceNext: 0
                        }
                    },
                    King2: {
                        blook: "King",
                        msg: "Repair the bridge between our kingdoms. It'll take 20 materials. If you don't, I'll release my dragon on your kingdom.",
                        yes: {
                            msg: "Good choice.",
                            materials: -20
                        },
                        no: {
                            msg: "This is all your fault.",
                            spawn: "Dragon2",
                            forceNext: 0
                        }
                    },
                    King3: {
                        blook: "King",
                        msg: "I may be harsh sometimes, but right now I would like to offer you a gift.",
                        yes: {
                            msg: "I hope we can continue our friendship.",
                            materials: 10,
                            people: 10,
                            happiness: 10,
                            gold: 10
                        },
                        no: {
                            msg: "Oh, I see how it is.",
                            happiness: -10
                        }
                    },
                    King4: {
                        blook: "King",
                        msg: "Hey, I have some scary people in my kingdom. Do you want them?",
                        yes: {
                            msg: "Great, here you go.",
                            people: 10,
                            happiness: -14
                        },
                        no: {
                            msg: "That makes sense.",
                            happiness: -4
                        }
                    },
                    Dragon2: {
                        blook: "Dragon",
                        msg: "LISTEN. TO. THE. KING.",
                        materials: -15,
                        people: -15,
                        happiness: -15,
                        gold: -15
                    },
                    Queen1: {
                        blook: "Queen",
                        msg: "Do you think I could get some resources to go save some children outside the kingdom?",
                        yes: {
                            msg: "Oh thank you!",
                            materials: -12,
                            people: 14
                        },
                        no: {
                            msg: "Those poor children.",
                            happiness: -10
                        }
                    },
                    Queen2: {
                        blook: "Queen",
                        msg: "Can I start forcing people in the kingdom to eat healthy? It will help them live longer.",
                        yes: {
                            msg: "Thanks! Some people seem to not like these rules though.",
                            people: 10,
                            happiness: -15
                        },
                        no: {
                            msg: "We can't just let everyone keep getting fat.",
                            happiness: -5,
                            people: -5
                        }
                    },
                    Queen3: {
                        blook: "Queen",
                        msg: "Do you think I could buy a new gold crown?",
                        yes: {
                            msg: "Thanks! You're the best!",
                            gold: -10,
                            happiness: 15
                        },
                        no: {
                            msg: "But, I hate my old crown.",
                            happiness: -6
                        }
                    },
                    Queen4: {
                        blook: "Queen",
                        msg: "Can I get some people to try the cake I just baked?",
                        yes: {
                            array: [{
                                msg: "They loved the cake!",
                                happiness: 15
                            }, {
                                msg: "The cake turned them into gold!",
                                people: -14,
                                gold: 14
                            }, {
                                msg: "They didn't really like it.",
                                happiness: -10,
                                people: -10
                            }]
                        },
                        no: {
                            msg: "Fine, more for me.",
                            happiness: -5
                        }
                    },
                    TwoOfSpades1: {
                        blook: "Two of Spades",
                        msg: "(The card just stares at you, it looks like it wants to move into your kingdom)",
                        yes: {
                            array: [{
                                msg: "(The Two of Spades just started giving people paper cuts)",
                                happiness: -13,
                                people: -7
                            }, {
                                msg: "(The Two of Spades did a cool card trick)",
                                happiness: 17
                            }, {
                                msg: "(The Two of Spades scammed a bunch of people in card games, but gave you the gold)",
                                happiness: -15,
                                gold: 15
                            }]
                        },
                        no: {
                            msg: "(It just walked away)"
                        }
                    },
                    EatMe1: {
                        blook: "Eat Me",
                        msg: "Eat Me?",
                        yes: {
                            array: [{
                                msg: "(It did not taste good)",
                                happiness: -15
                            }, {
                                msg: "(It made you fall asleep, but when you woke up, there was gold all around you)",
                                gold: 20
                            }, {
                                msg: "(You try to take a bite, but the biscuit is full of stones)",
                                materials: 10
                            }]
                        },
                        no: {
                            msg: "...",
                            happiness: -8
                        }
                    },
                    DrinkMe1: {
                        blook: "Drink Me",
                        msg: "Drink Me?",
                        yes: {
                            array: [{
                                msg: "(It did not taste good)",
                                happiness: -15
                            }, {
                                msg: "(As you went to take a sip, a bunch of fish people jumped out of the drink)",
                                people: 15
                            }, {
                                msg: "(It tasted really good)",
                                happiness: 17
                            }]
                        },
                        no: {
                            msg: "...",
                            happiness: -8
                        }
                    },
                    Dormouse1: {
                        blook: "Dormouse",
                        msg: "Hiiiii! Would you like to buy some of my tea?",
                        yes: {
                            msg: "Yayyy! Enjoy the tea!",
                            gold: -8,
                            happiness: 15
                        },
                        no: {
                            msg: "Awwww... I guess more tea for me!",
                            happiness: -6
                        }
                    },
                    Dormouse2: {
                        blook: "Dormouse",
                        msg: "Hiiiii! Can I have some materials to build a playground and make some new friends?",
                        yes: {
                            msg: "Yayyy! So many friends.",
                            happiness: 15,
                            materials: -12,
                            people: 7
                        },
                        no: {
                            msg: "Awwww... I'm so lonely now.",
                            happiness: -10
                        }
                    },
                    Dormouse3: {
                        blook: "Dormouse",
                        msg: "Hiiiii! Can I get some gold to go pick blueberries?",
                        yes: {
                            msg: "Yayyy! Here, you can have some too.",
                            happiness: 7,
                            materials: 15,
                            gold: -12
                        },
                        no: {
                            msg: "Awww... I really like blueberries.",
                            happiness: -7
                        }
                    },
                    WhiteRabbit1: {
                        blook: "White Rabbit",
                        msg: "Most people in the kingdom love strawberries. However, if we grow carrots instead, we'll produce way more.",
                        yes: {
                            msg: "That's a great call!",
                            materials: 15,
                            happiness: -10
                        },
                        no: {
                            msg: "I hate inefficiency.",
                            happiness: 5
                        }
                    },
                    WhiteRabbit2: {
                        blook: "White Rabbit",
                        msg: "Can I have some gold to buy books that will help me with my studies?",
                        yes: {
                            msg: "Perfect! I'll report back with the results of my study.",
                            gold: -10,
                            spawnArray: ["WhiteRabbit3", "WhiteRabbit4", "WhiteRabbit5"],
                            delay: 4
                        },
                        no: {
                            msg: "I'm not done asking for this.",
                            happiness: -6
                        }
                    },
                    WhiteRabbit3: {
                        blook: "White Rabbit",
                        msg: "I'm not sure how, but my research ended up with a whole bunch of mini-rabbits!",
                        people: 18
                    },
                    WhiteRabbit4: {
                        blook: "White Rabbit",
                        msg: "I think I messed up with my research and created an explosion. I apologize.",
                        materials: -10,
                        people: -10,
                        happiness: -15
                    },
                    WhiteRabbit5: {
                        blook: "White Rabbit",
                        msg: "I've completed my research and it led me to some hidden treasure!",
                        gold: 20,
                        materials: 20
                    },
                    WhiteRabbit6: {
                        blook: "White Rabbit",
                        msg: "I'll only ask once, can I get 20 materials to build a time machine?",
                        yes: {
                            msg: "Great, I'll report back on my progress in a bit.",
                            materials: -20,
                            spawn: "WhiteRabbit7",
                            delay: 5
                        },
                        no: {
                            msg: "You're seriously missing an opportunity here.",
                            happiness: -7
                        }
                    },
                    WhiteRabbit7: {
                        blook: "White Rabbit",
                        msg: "Ok. I'm going to need 20 gold to continue building the time machine?",
                        yes: {
                            msg: "Sweet, I'll come back with my progress soon.",
                            gold: -20,
                            spawn: "WhiteRabbit8",
                            delay: 5
                        },
                        no: {
                            msg: "All my progress is lost.",
                            happiness: -10
                        }
                    },
                    WhiteRabbit8: {
                        blook: "White Rabbit",
                        msg: "So, I need to release some smoke to get my time machine working. People won't like it, but is it ok with you?",
                        yes: {
                            msg: "Awesome, I'll be back soon.",
                            happiness: -20,
                            spawn: "WhiteRabbit9",
                            delay: 5
                        },
                        no: {
                            msg: "All my progress is lost.",
                            happiness: -10
                        }
                    },
                    WhiteRabbit9: {
                        blook: "White Rabbit",
                        msg: "Last time, I just need 20 people to test out the time machine. Is that ok?",
                        yes: {
                            msg: "Amazing, I'll be back with the final results.",
                            people: -20,
                            spawn: "WhiteRabbit10",
                            delay: 5
                        },
                        no: {
                            msg: "All my progress is lost.",
                            happiness: -10
                        }
                    },
                    WhiteRabbit10: {
                        blook: "White Rabbit",
                        msg: "We did it!!! We have traveled to the past and returned with glorious rewards!",
                        materials: 60,
                        people: 60,
                        happiness: 60,
                        gold: 60
                    },
                    CheshireCat1: {
                        blook: "Cheshire Cat",
                        msg: 'Helllooooo, can I please "borrow" some humans?',
                        yes: {
                            msg: "Very gooooood.",
                            people: -13,
                            happiness: 10
                        },
                        no: {
                            msg: "Booooooo...",
                            happiness: -5
                        }
                    },
                    CheshireCat2: {
                        blook: "Cheshire Cat",
                        msg: "Helllooooo, can I please get gold to open a trading post? I'll trade some stuff for you.",
                        yes: {
                            msg: "Purrrrfect.",
                            gold: -12,
                            materials: 10,
                            people: 5,
                            happiness: 8
                        },
                        no: {
                            msg: "Whyyyyyyyy?",
                            happiness: -7
                        }
                    },
                    CheshireCat3: {
                        blook: "Cheshire Cat",
                        msg: "Helllooooo, can I please get some people to help start my garden?",
                        yes: {
                            msg: "Ohhhhhh, thank you!",
                            people: -12,
                            materials: 15,
                            happiness: 4
                        },
                        no: {
                            msg: "Saaaaaaaaad.",
                            happiness: -9
                        }
                    },
                    Alice1: {
                        blook: "Alice",
                        msg: "Heyyyyy! Soooo, I'm like, lost. Is Wonderland over there?",
                        yes: {
                            msg: "Woah, thanks kind person!",
                            happiness: 9
                        },
                        no: {
                            msg: "Woah, thanks kind person!",
                            happiness: 9
                        }
                    },
                    Alice2: {
                        blook: "Alice",
                        msg: "Heyyyyy! Can I, you know, sell some of your flowers? I'll give you the profits.",
                        yes: {
                            msg: "I am an excellent salesperson.",
                            gold: 15,
                            materials: -12,
                            happiness: 5
                        },
                        no: {
                            msg: "Oh, ok then.",
                            happiness: -7
                        }
                    },
                    Alice3: {
                        blook: "Alice",
                        msg: "Heyyyyy! Can I go take pretty things from people's houses? I'll give some of them to you.",
                        yes: {
                            msg: "Yayyyy! We're like, best friends, right?",
                            happiness: -15,
                            materials: 15
                        },
                        no: {
                            msg: "Wahhhhh. It would have been so much fun.",
                            happiness: -7
                        }
                    },
                    QueenOfHearts1: {
                        blook: "Queen of Hearts",
                        msg: "Let's tax our people more. They won't like it, but you'll get more gold.",
                        yes: {
                            msg: "Great choice.",
                            happiness: -16,
                            gold: 17
                        },
                        no: {
                            msg: "We're going to be poor.",
                            happiness: -7
                        }
                    },
                    QueenOfHearts2: {
                        blook: "Queen of Hearts",
                        msg: "Hey, let's force our people to gather more resources. What do you say?",
                        yes: {
                            msg: "Well, it's working, but I don't think they like it.",
                            happiness: -15,
                            gold: 8,
                            materials: 13
                        },
                        no: {
                            msg: "Grow up.",
                            happiness: -5
                        }
                    },
                    QueenOfHearts3: {
                        blook: "Queen of Hearts",
                        msg: "Tell people to stop working and pay more attention to me.",
                        yes: {
                            msg: "I like this.",
                            happiness: 7,
                            gold: -10,
                            materials: -15
                        },
                        no: {
                            msg: "You're no fun.",
                            happiness: -7
                        }
                    },
                    Caterpillar1: {
                        blook: "Caterpillar",
                        msg: "hewo, can I turn some of my mushrooms into people? :3",
                        yes: {
                            msg: "oh thank you",
                            materials: -13,
                            people: 13,
                            happiness: 7
                        },
                        no: {
                            msg: "ok",
                            happiness: -7
                        }
                    },
                    Caterpillar2: {
                        blook: "Caterpillar",
                        msg: "hewo, even though not everyone likes mushrooms, can I go get some more? :3",
                        yes: {
                            msg: "yay, you're the best",
                            happiness: -13,
                            materials: 15
                        },
                        no: {
                            msg: "i am sad",
                            happiness: -7
                        }
                    },
                    Caterpillar3: {
                        blook: "Caterpillar",
                        msg: "hewo, can I show off my dance moves?",
                        yes: {
                            msg: "nice, here's some gold",
                            happiness: 9,
                            gold: 7
                        },
                        no: {
                            msg: "awwww... ok",
                            happiness: -10
                        }
                    },
                    MadHatter1: {
                        blook: "Mad Hatter",
                        msg: "Hello, can you buy me an elephant?",
                        yes: {
                            msg: "I love elephants.",
                            gold: -12,
                            happiness: 12,
                            people: 1
                        },
                        no: {
                            msg: "But, I love elephants...",
                            happiness: -7
                        }
                    },
                    MadHatter2: {
                        blook: "Mad Hatter",
                        msg: "Can I get some materials and gold to set up a live trivia game show?",
                        yes: {
                            msg: "This is amazing!",
                            happiness: 20,
                            gold: -10,
                            materials: -15,
                            people: 10
                        },
                        no: {
                            msg: "Dang, it would have been so much fun.",
                            happiness: -7
                        }
                    },
                    MadHatter3: {
                        blook: "Mad Hatter",
                        msg: "You want to open this box?",
                        yes: {
                            array: [{
                                msg: "Yay, the box had paper clips!",
                                materials: 15
                            }, {
                                msg: "Yay, the box had a golden cat statue!",
                                gold: 15
                            }, {
                                msg: "Dang it, the box had lots of annoying bugs.",
                                people: -7,
                                happiness: -17
                            }]
                        },
                        no: {
                            msg: "Why? Are you scared?",
                            happiness: -6
                        }
                    },
                    KingOfHearts1: {
                        blook: "King of Hearts",
                        msg: "Hello, my kingdom is so successful. Would you like some extra people?",
                        yes: {
                            msg: "Here you go.",
                            people: 15
                        },
                        no: {
                            msg: "Very well."
                        }
                    },
                    KingOfHearts2: {
                        blook: "King of Hearts",
                        msg: "Hello. I'll trade you 20 materials if you give me 15 gold?",
                        yes: {
                            msg: "Great doing business with you.",
                            materials: 20,
                            gold: -15
                        },
                        no: {
                            msg: "Very well.",
                            happiness: -6
                        }
                    },
                    KingOfHearts3: {
                        blook: "King of Hearts",
                        msg: "Let's throw a music festival between our kingdoms. We'll each pay for half. How does that sound?",
                        yes: {
                            msg: "Fantastic!",
                            materials: -15,
                            gold: -12,
                            happiness: 18,
                            people: 12
                        },
                        no: {
                            msg: "Very well.",
                            happiness: -7
                        }
                    },
                    GingerbreadMan1: {
                        blook: "Gingerbread Man",
                        msg: "Can I transform some people into cookies, it'll make people happy?",
                        yes: {
                            msg: "Delicious!",
                            people: -16,
                            happiness: 16
                        },
                        no: {
                            msg: "I WANT COOKIES!",
                            happiness: -7
                        }
                    },
                    GingerbreadMan2: {
                        blook: "Gingerbread Man",
                        msg: "Yo, let me buy some fresh icing so I can look cool!",
                        yes: {
                            msg: "I look great!",
                            happiness: 13,
                            gold: -12
                        },
                        no: {
                            msg: "I'm so ugly.",
                            happiness: -6
                        }
                    },
                    GingerbreadMan3: {
                        blook: "Gingerbread Man",
                        msg: "Hey, can I get some materials to build a house?",
                        yes: {
                            msg: "Thanks, it will be super grateful.",
                            materials: -16,
                            spawn: "GingerbreadHouse1",
                            forceNext: !0
                        },
                        no: {
                            msg: "That's disappointing.",
                            happiness: -6
                        }
                    },
                    GingerbreadHouse1: {
                        blook: "Gingerbread House",
                        msg: "Thanks for building me!",
                        happiness: 8,
                        people: 8,
                        gold: 5
                    },
                    Snowman1: {
                        blook: "Snowman",
                        msg: "Do you want to build a snowman?",
                        yes: {
                            msg: "Yayyyy!",
                            materials: -10,
                            happiness: 15,
                            people: 1
                        },
                        no: {
                            msg: "Awwwwww...",
                            happiness: -6
                        }
                    },
                    Snowman2: {
                        blook: "Snowman",
                        msg: "Hey, can you make it summer?",
                        yes: {
                            msg: "Oh, I don't like this heat very much.",
                            happiness: -10,
                            people: -5
                        },
                        no: {
                            msg: "Why not?",
                            happiness: -5
                        }
                    },
                    Snowman3: {
                        blook: "Snowman",
                        msg: "Can I get some people to transform into ice sculptures that I'll sell?",
                        yes: {
                            msg: "They look great!",
                            people: -12,
                            gold: 16
                        },
                        no: {
                            msg: "This is a missed opportunity.",
                            happiness: -6
                        }
                    },
                    SantaClaus1: {
                        blook: "Santa Claus",
                        msg: "Would you like a present?",
                        yes: {
                            msg: "Ho! Ho! Ho!",
                            materials: 7,
                            happiness: 7,
                            gold: 7
                        },
                        no: {
                            msg: "You're mean.",
                            happiness: -10
                        }
                    },
                    SantaClaus2: {
                        blook: "Santa Claus",
                        msg: "Can I get some carrots to feed my reindeer?",
                        yes: {
                            msg: "Ho! Ho! Ho!",
                            materials: -14,
                            happiness: 14
                        },
                        no: {
                            msg: "But, they're hungry.",
                            happiness: -10
                        }
                    },
                    SantaClaus3: {
                        blook: "Santa Claus",
                        msg: "Hey, can you send some people to the North Pole to help make toys?",
                        yes: {
                            msg: "Ho! Ho! Ho!",
                            people: -13,
                            happiness: 5,
                            materials: 10
                        },
                        no: {
                            msg: "We're not going to have enough toys this year...",
                            happiness: -10
                        }
                    }
                },
                g = ["Hamster1", "Hamster2", "Hamster3", "Chick1", "Chicken2", "Waffle", "Sheep1", "Horse1", "Horse2", "Horse3", "Cow1", "Cow2", "Cow3", "Cat1", "Cat2", "Cat3", "Goat1", "Pig1", "Pig2", "Bear1", "Bear2", "Bear3", "Duck1", "Duck2", "Duck3", "Fox1", "Fox2", "Fox3", "Rabbit1", "Rabbit2", "Rabbit3", "Kitten1", "Moose1", "Raccoon1", "Raccoon2", "Raccoon3", "Turtle1", "Turtle2", "Turtle3", "Dog1", "Dog4", "Goldfish1", "Goldfish2", "Goldfish3", "Squirrel1", "Squirrel2", "Squirrel3", "Hedgehog1", "Hedgehog2", "Hedgehog3", "Tiger1", "Tiger2", "Tiger3", "Orangutan1", "Cockatoo1", "Anaconda1", "Anaconda2", "Anaconda3", "Jaguar1", "Jaguar2", "Jaguar3", "Panther1", "Panther2", "Panther3", "Capuchin1", "SnowyOwl1", "PolarBear1", "PolarBear2", "PolarBear3", "ArcticFox1", "ArcticFox2", "ArcticFox3", "Penguin1", "Penguin2", "Penguin3", "ArcticHare1", "ArcticHare2", "ArcticHare3", "ArcticHare4", "Seal1", "Seal2", "Seal3", "Walrus1", "Walrus2", "Walrus3", "Wizard1", "Wizard2", "Wizard3", "Elf1", "Elf2", "Elf3", "Elf4", "Fairy1", "Fairy5", "Fairy6", "Witch1", "Witch2", "Witch3", "Witch4", "Jester1", "Jester2", "Jester3", "Jester4", "Unicorn1", "Unicorn5", "Unicorn6", "King1", "King2", "King3", "King4", "Queen1", "Queen2", "Queen3", "Queen4", "TwoOfSpades1", "EatMe1", "DrinkMe1", "Dormouse1", "Dormouse2", "Dormouse3", "WhiteRabbit1", "WhiteRabbit2", "WhiteRabbit6", "CheshireCat1", "CheshireCat2", "CheshireCat3", "Alice1", "Alice2", "Alice3", "QueenOfHearts1", "QueenOfHearts2", "QueenOfHearts3", "Caterpillar1", "Caterpillar2", "Caterpillar3", "MadHatter1", "MadHatter2", "MadHatter3", "KingOfHearts1", "KingOfHearts2", "KingOfHearts3", "GingerbreadMan1", "GingerbreadMan2", "GingerbreadMan3", "Snowman1", "Snowman2", "Snowman3", "SantaClaus1", "SantaClaus2", "SantaClaus3"],
                d = ["Waffle", "Sheep1", "Horse1", "Pig2", "Duck1", "Moose1", "Queen2", "WhiteRabbit6"],
                y = s("mPK+"),
                f = s("XTAU"),
                _ = s("tf9F"),
                b = s.n(_),
                w = s("Xst1"),
                k = s.n(w),
                v = s("Rnav"),
                C = s("+fLB"),
                x = s("0oXL"),
                I = s("FVRk"),
                O = s("4Zpe"),
                S = s("ca/f"),
                T = s("9TPi"),
                E = s("bBDR"),
                N = s.n(E),
                j = s("LHn/"),
                H = s("74sb"),
                P = s("E8Bj");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var o, a, n = [],
                        r = !0,
                        i = !1;
                    try {
                        for (s = s.call(e); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return B(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, o = new Array(t); s < t; s++) o[s] = e[s];
                return o
            }

            function L(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, o)
                }
                return s
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(s), !0).forEach((function(t) {
                        W(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : L(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function W(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function Y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Y = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

                function i(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, o) {
                    var a = t && t.prototype instanceof m ? t : m,
                        n = Object.create(a.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, s) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return I()
                            }
                            for (s.method = a, s.arg = n;;) {
                                var r = s.delegate;
                                if (r) {
                                    var i = w(r, s);
                                    if (i) {
                                        if (i === c) continue;
                                        return i
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === o) throw o = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                o = "executing";
                                var l = u(e, t, s);
                                if ("normal" === l.type) {
                                    if (o = s.done ? "completed" : "suspendedYield", l.arg === c) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, r), n
                }

                function u(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var c = {};

                function m() {}

                function p() {}

                function h() {}
                var g = {};
                i(g, a, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    y = d && d(d(x([])));
                y && y !== t && s.call(y, a) && (g = y);
                var f = h.prototype = m.prototype = Object.create(g);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(a, n, r, i) {
                                    var l = u(e[a], e, n);
                                    if ("throw" !== l.type) {
                                        var c = l.arg,
                                            m = c.value;
                                        return m && "object" == A(m) && s.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            c.value = e, r(c)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(a, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
                    }
                }

                function w(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return c;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return c
                    }
                    var o = u(s, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, c;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function v(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (s.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, i(f, "constructor", h), i(h, "constructor", p), p.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(f), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, s, o, a, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, s, o, a), n);
                    return e.isGeneratorFunction(s) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, _(f), i(f, r, "Generator"), i(f, a, (function() {
                    return this
                })), i(f, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return s.value = o, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = x, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(v), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function o(s, o) {
                            return r.type = "throw", r.arg = e, t.next = s, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = s.call(n, "catchLoc"),
                                    l = s.call(n, "finallyLoc");
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
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, c) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), v(s), c
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var o = s.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    v(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), c
                    }
                }, e
            }

            function M(e, t, s, o, a, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void s(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, a)
            }

            function D(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(o, a) {
                        var n = e.apply(t, s);

                        function r(e) {
                            M(n, o, a, r, i, "next", e)
                        }

                        function i(e) {
                            M(n, o, a, r, i, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function q(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var o = t[s];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Q(e) {
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
                    var s, o = z(e);
                    if (t) {
                        var a = z(this).constructor;
                        s = Reflect.construct(o, arguments, a)
                    } else s = o.apply(this, arguments);
                    return U(this, s)
                }
            }

            function U(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return K(e)
            }

            function K(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = function(e) {
                    return Math.max(0, Math.min(100, e))
                },
                J = {
                    materials: "fas fa-tree",
                    people: "fas fa-users",
                    happiness: "fas fa-grin-alt",
                    gold: "fas fa-coins"
                },
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
                        }), t && F(e, t)
                    }(l, e);
                    var t, s, o, n, r, i = Q(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            materials: 50,
                            people: 50,
                            happiness: 50,
                            gold: 50,
                            guest: {},
                            guestAnswer: !1,
                            isGuestAnswered: !1,
                            showNextButton: !1,
                            isGuestLeaving: !1,
                            gameOverMsg: "",
                            phase: "",
                            question: {},
                            correct: !1,
                            isRandomChoice: !1,
                            results: {},
                            noQuestion: !1,
                            noQuestionNext: !1,
                            guestScore: 0,
                            guestResult: {},
                            askTour: !1,
                            showTour: !1,
                            isSmall: !1,
                            goalCompleted: !1,
                            hwGoal: 0,
                            readId: ""
                        }, t.here = !0, t.isGuestAnswered = !1, t.isGuestLeaving = !1, t.waiting = !1, t.choiceWaiting = !1, t.futureGuests = [], t.questions = [], t.freeQuestions = [], t.corrects = {}, t.incorrects = {}, t.usedGuests = [], t.taxCounter = 10, t.last10Guests = [], t.isGoalCompleted = !1, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(K(t)), t.getQuestion = t.getQuestion.bind(K(t)), t.getGuest = t.getGuest.bind(K(t)), t.answerNext = t.answerNext.bind(K(t)), t.nextGuest = t.nextGuest.bind(K(t)), t.answerGuest = t.answerGuest.bind(K(t)), t.byeGuest = t.byeGuest.bind(K(t)), t.resolveResult = t.resolveResult.bind(K(t)), t.answerTour = t.answerTour.bind(K(t)), t.endNow = t.endNow.bind(K(t)), t.readQuestion = t.readQuestion.bind(K(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (r = D(Y().mark((function e() {
                            return Y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.kingdom && "kingdom" === this.props.kingdom.stage && this.props.kingdom.questions && this.props.kingdom.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), Object(H.c)(), this.questions = JSON.parse(JSON.stringify(this.props.kingdom.questions)), this.setState({
                                            isSmall: window.innerWidth <= 1e3,
                                            askTour: !0,
                                            hwGoal: this.props.kingdom.hwGoal ? parseInt(this.props.kingdom.hwGoal, 10) : 0
                                        });
                                    case 9:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(H.u)(), this.here = !1, clearTimeout(this.waitGuestTimeout), clearTimeout(this.questionTimeout), clearTimeout(this.guestNextTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.noQuestionTimeout), clearTimeout(this.choiceTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.gameOverTimeout)
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    s = this.state.question.number;
                                t ? this.corrects[s] ? this.corrects[s] += 1 : this.corrects[s] = 1 : this.incorrects[s] ? this.incorrects[s] += 1 : this.incorrects[s] = 1, this.setState({
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
                            if (this.here) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(H.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(H.w)(t.answers)), this.setState({
                                    question: t,
                                    phase: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "getGuest",
                        value: function(e) {
                            var t = "";
                            if (this.futureGuests.length > 0 && !e) t = this.futureGuests.splice(0, 1)[0];
                            else if (this.taxCounter <= 0) t = "Toucan1", this.taxCounter = 10;
                            else
                                for (this.taxCounter -= 1; !t || this.usedGuests.includes(t) || this.last10Guests.includes(t);) t = Object(H.p)(g);
                            return this.last10Guests.push(t), this.last10Guests.length > 10 && this.last10Guests.splice(0, 1), d.includes(t) && this.usedGuests.push(t), t
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            var e = this;
                            this.choiceWaiting = !0, this.setState({
                                phase: "choice",
                                showNextButton: !this.state.correct
                            }, (function() {
                                e.choiceTimeout = setTimeout((function() {
                                    e.choiceWaiting = !1
                                }), 500)
                            }))
                        }
                    }, {
                        key: "nextGuest",
                        value: function() {
                            var e = this,
                                t = h[this.state.showTour ? "Duck2" : this.getGuest()];
                            this.state.showTour && this.usedGuests.push("Duck2"), this.isGuestAnswered = !1, this.setState({
                                guest: t,
                                isGuestLeaving: !1,
                                isGuestAnswered: !1,
                                phase: t.yes ? "guest" : "choice",
                                showNextButton: !t.yes,
                                noQuestion: !t.yes,
                                noQuestionNext: !1
                            }, (function() {
                                e.state.showNextButton ? e.guestNextTimeout = setTimeout((function() {
                                    e.isGuestLeaving = !1
                                }), 500) : e.questionTimeout = setTimeout((function() {
                                    e.state.showTour || e.getQuestion()
                                }), 700)
                            }))
                        }
                    }, {
                        key: "answerGuest",
                        value: function(e, t) {
                            var s = this;
                            if (!this.isGuestAnswered && !this.choiceWaiting) {
                                this.isGuestAnswered = !0, this.choiceWaiting = !0;
                                var o = this.state.guest[e ? "yes" : "no"];
                                o.array && (o = Object(H.p)(o.array)), this.setState({
                                    guestAnswer: e,
                                    guestResult: o,
                                    isGuestAnswered: !0,
                                    showNextButton: !1,
                                    isRandomChoice: t
                                }), this.resolveResult(o), this.isGuestLeaving = !1, this.nextTimeout = setTimeout((function() {
                                    s.setState({
                                        showNextButton: !0
                                    })
                                }), t ? 2700 : this.state.showTour ? 200 : 1200)
                            }
                        }
                    }, {
                        key: "byeGuest",
                        value: function() {
                            var e = this;
                            if (!this.isGuestLeaving && !this.state.gameOverMsg) {
                                this.isGuestLeaving = !0, this.state.guest.yes || this.resolveResult(this.state.guest);
                                var t = function() {
                                    e.setState({
                                        isGuestLeaving: !0
                                    }, (function() {
                                        e.waitGuestTimeout = setTimeout((function() {
                                            e.nextGuest()
                                        }), 1e3)
                                    }))
                                };
                                this.state.noQuestion ? (this.setState({
                                    noQuestionNext: !0
                                }), this.noQuestionTimeout = setTimeout((function() {
                                    t()
                                }), 2e3)) : t()
                            }
                        }
                    }, {
                        key: "resolveResult",
                        value: function(e) {
                            var t = this,
                                s = {},
                                o = this.state.materials,
                                a = this.state.people,
                                n = this.state.happiness,
                                r = this.state.gold;
                            if (e.materials && (o = X(o + e.materials), s.materials = e.materials), e.people && (a = X(a + e.people), s.people = e.people), e.happiness && (n = X(n + e.happiness), s.happiness = e.happiness), e.gold && (r = X(r + e.gold), s.gold = e.gold), e.spawn || e.spawnArray) {
                                var i = e.spawnArray ? Object(H.p)(e.spawnArray) : e.spawn;
                                if (e.forceNext) this.futureGuests.unshift(i);
                                else {
                                    for (var l = Math.max(0, e.delay - this.futureGuests.length), u = 0; u < l; u++) this.futureGuests.push(this.getGuest(!0));
                                    this.futureGuests.push(i)
                                }
                            }
                            var c = "";
                            o <= 0 ? c = "You ran out of materials." : a <= 0 ? c = "Everyone abandoned your kingdom." : n <= 0 ? c = "Your kingdom became extremely angry and overthrew you." : r <= 0 && (c = "You ran out of gold."), this.setState({
                                materials: o,
                                people: a,
                                happiness: n,
                                gold: r,
                                gameOverMsg: c,
                                results: s
                            }, (function() {
                                if (t.state.gameOverMsg) t.gameOverTimeout = setTimeout((function() {
                                    t.endNow()
                                }), 5e3);
                                else {
                                    var e = t.state.guestScore + 1;
                                    t.setState({
                                        guestScore: e
                                    }), !t.isGoalCompleted && t.props.kingdom.hwGoal && e >= t.props.kingdom.hwGoal && (t.isGoalCompleted = !0, t.setState({
                                        goalCompleted: !0
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "answerTour",
                        value: function(e) {
                            this.here && this.setState({
                                showTour: e,
                                askTour: !1
                            }, this.nextGuest)
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.props.setKingdom(R(R({}, this.props.kingdom), {}, {
                                corrects: this.corrects,
                                incorrects: this.incorrects,
                                guestScore: this.state.guestScore
                            })), this.props.history.push("/kingdom/final")
                        }
                    }, {
                        key: "readQuestion",
                        value: (n = D(Y().mark((function e() {
                            var t, s = this;
                            return Y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, o) {
                                            var a = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return o();
                                            e.includes("`*`") && (a = e.slice(0, e.indexOf("`*`"))), s.msg = new SpeechSynthesisUtterance(a), s.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(s.msg), s.msg.onend = function() {
                                                s.setState({
                                                    readId: ""
                                                }), o()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(s.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(s.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(s.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(s.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(s.state.question.answers[3], "q4", e)
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
                            var e, t, s, o, n = this;
                            return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.kingdom && "kingdom" === this.props.kingdom.stage && this.props.kingdom.questions && this.props.kingdom.questions[0] ? a.a.createElement("div", {
                                className: c.isMobile ? k.a.mBody : k.a.body,
                                id: "body"
                            }, a.a.createElement(f.a, {
                                title: "Play Crazy Kingdom | Blooket",
                                desc: "Keep your Kingdom running by answering questions and making decisions to strategically balance your resources."
                            }), a.a.createElement(v.a, {
                                customers: this.state.guestScore,
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), a.a.createElement("div", {
                                className: p()(k.a.regularBody, b.a.background),
                                style: {
                                    backgroundImage: "url(".concat(j.a.basic.castleTile, ")"),
                                    overflow: "hidden"
                                },
                                id: "regularBody"
                            }, this.state.showTour ? a.a.createElement(T.a, {
                                steps: (o = this.state.isSmall, [{
                                    text: "Welcome to Crazy Kingdom! Your goal is to keep your kingdom running for as long as possible.",
                                    nextButtonText: "Next",
                                    className: N.a.centered
                                }, {
                                    elementId: o ? "mCategories" : "materials",
                                    text: "To do this, you'll have to manage four resources. If any of these resources reach 0, your game is over.",
                                    nextButtonText: "Next",
                                    className: N.a.materials
                                }, {
                                    elementId: o ? "m-materials" : "materials",
                                    text: "This is the number of materials in your kingdom.",
                                    nextButtonText: "Next",
                                    backgroundColor: o ? "#d52423" : null,
                                    className: N.a.materials
                                }, {
                                    elementId: o ? "m-people" : "people",
                                    text: "This is the number of people in your kingdom.",
                                    nextButtonText: "Next",
                                    backgroundColor: o ? "#d52423" : null,
                                    className: N.a.people
                                }, {
                                    elementId: o ? "m-happiness" : "happiness",
                                    text: "This shows how happy people are in your kingdom.",
                                    nextButtonText: "Next",
                                    backgroundColor: o ? "#d52423" : null,
                                    className: N.a.happiness
                                }, {
                                    elementId: o ? "m-gold" : "gold",
                                    text: "This is the amount of gold in your kingdom.",
                                    nextButtonText: "Next",
                                    backgroundColor: o ? "#d52423" : null,
                                    className: N.a.gold
                                }, {
                                    elementId: "guest",
                                    text: "Random guests will come to your castle and make different requests. You'll have to answer 'Yes' or 'No' to these requests.",
                                    nextButtonText: "Next",
                                    className: N.a.guest,
                                    functionIndex: 0
                                }, {
                                    text: "You'll also have to answer a question before each guest. Answer incorrectly and you won't get to pick your response to the guest, it will be random.",
                                    nextButtonText: "Next",
                                    className: N.a.centered
                                }, {
                                    elementId: "speech",
                                    text: "We'll answer the questions correctly for you right now. Then, we can read the guest's request.",
                                    nextButtonText: "Next",
                                    className: N.a.speech
                                }, {
                                    elementId: "speech",
                                    text: "If we say yes, we'll get more ducks (people) in the kingdom, but we'll lose some happiness because the ducks are annoying.",
                                    nextButtonText: "Next",
                                    className: N.a.speech
                                }, {
                                    elementId: "speech",
                                    text: "If we say no, the duck will probably be upset that we won't let ducklings into the kingdom.",
                                    nextButtonText: "Next",
                                    className: N.a.speech
                                }, {
                                    elementId: "yes",
                                    text: "Let's go ahead and answer 'Yes' to let the ducklings in this time.",
                                    elementClick: !0,
                                    className: N.a.bottomButton
                                }, {
                                    elementId: "speech",
                                    text: "As you can see, the guest will give us a response based on our choice.",
                                    nextButtonText: "Next",
                                    className: N.a.speech
                                }, {
                                    elementId: "results",
                                    text: "Letting the ducklings in increased our population, but they also annoyed people and lowered our happiness.",
                                    nextButtonText: "Next",
                                    className: N.a.results
                                }, {
                                    text: "You'll need to answer as many guests as possible while trying to keep all your resources above 0.",
                                    nextButtonText: "Next",
                                    className: N.a.centered
                                }, {
                                    elementId: "customersText",
                                    text: "You can see how many guests you've answered in the top right. The more the better.",
                                    nextButtonText: "Next",
                                    backgroundColor: "#9a49aa",
                                    className: N.a.topRight
                                }, {
                                    elementId: "next",
                                    text: "That's it for the tutorial! Go ahead and click 'Next' to get a new guest and start the game.",
                                    elementClick: !0,
                                    className: N.a.bottomButton
                                }]),
                                onExit: function() {
                                    return n.setState({
                                        showTour: !1
                                    })
                                },
                                functions: [function() {
                                    return n.setState({
                                        phase: "choice",
                                        showNextButton: !1
                                    })
                                }]
                            }) : null, a.a.createElement("div", {
                                className: b.a.statsPair,
                                style: {
                                    right: "calc(50% + 200px)"
                                }
                            }, a.a.createElement("div", {
                                className: b.a.statHolder,
                                id: "materials"
                            }, a.a.createElement("div", {
                                className: b.a.statContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBarContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBar,
                                style: {
                                    transform: "scaleY(".concat(this.state.materials / 100, ")")
                                }
                            })), a.a.createElement("div", {
                                className: b.a.statText
                            }, this.state.materials), a.a.createElement("i", {
                                className: p()(b.a.statIcon, J.materials)
                            }))), a.a.createElement("div", {
                                className: b.a.statHolder,
                                id: "people"
                            }, a.a.createElement("div", {
                                className: b.a.statContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBarContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBar,
                                style: {
                                    transform: "scaleY(".concat(this.state.people / 100, ")")
                                }
                            })), a.a.createElement("div", {
                                className: b.a.statText
                            }, this.state.people), a.a.createElement("i", {
                                className: p()(b.a.statIcon, J.people)
                            })))), a.a.createElement("div", {
                                className: b.a.statsPair,
                                style: {
                                    left: "calc(50% + 200px)"
                                }
                            }, a.a.createElement("div", {
                                className: b.a.statHolder,
                                id: "happiness"
                            }, a.a.createElement("div", {
                                className: b.a.statContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBarContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBar,
                                style: {
                                    transform: "scaleY(".concat(this.state.happiness / 100, ")")
                                }
                            })), a.a.createElement("div", {
                                className: b.a.statText
                            }, this.state.happiness), a.a.createElement("i", {
                                className: p()(b.a.statIcon, J.happiness)
                            }))), a.a.createElement("div", {
                                className: b.a.statHolder,
                                id: "gold"
                            }, a.a.createElement("div", {
                                className: b.a.statContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBarContainer
                            }, a.a.createElement("div", {
                                className: b.a.statBar,
                                style: {
                                    transform: "scaleY(".concat(this.state.gold / 100, ")")
                                }
                            })), a.a.createElement("div", {
                                className: b.a.statText
                            }, this.state.gold), a.a.createElement("i", {
                                className: p()(b.a.statIcon, J.gold),
                                style: {
                                    fontSize: 34
                                }
                            })))), a.a.createElement("div", {
                                className: b.a.centerContainer
                            }, a.a.createElement("div", {
                                className: b.a.mStatsHolder,
                                id: "mCategories"
                            }, a.a.createElement("div", {
                                className: b.a.mStatsContainer
                            }, Object.entries(J).map((function(e) {
                                var t = G(e, 2),
                                    s = t[0],
                                    o = t[1];
                                return a.a.createElement("div", {
                                    className: b.a.mStatRow,
                                    id: "m-".concat(s),
                                    key: s
                                }, n.state[s], a.a.createElement("i", {
                                    className: p()(b.a.mStatIcon, o)
                                }))
                            })))), this.state.guest && this.state.guest.blook ? a.a.createElement("div", {
                                className: b.a.guestContainer
                            }, "choice" === this.state.phase ? a.a.createElement("div", {
                                className: p()(b.a.speechBubble, W({}, b.a.speechBubbleOut, this.state.isGuestLeaving)),
                                id: "speech"
                            }, a.a.createElement("div", {
                                className: b.a.speechArrow
                            }), a.a.createElement("div", {
                                className: b.a.speechText
                            }, this.state.isGuestAnswered ? this.state.guestResult.msg : this.state.guest.msg)) : null, a.a.createElement("div", {
                                className: b.a.guestImageContainer,
                                id: "guest"
                            }, a.a.createElement(x.a, {
                                name: this.state.guest.blook,
                                className: p()(b.a.guestBlook, W({}, b.a.guestLeaving, this.state.isGuestLeaving))
                            }), a.a.createElement("div", {
                                className: b.a.guestCircle
                            }, a.a.createElement("div", {
                                className: b.a.guestCircleInside
                            }))), (this.state.isGuestAnswered || this.state.noQuestion && this.state.noQuestionNext) && Object.keys(this.state.results).length > 0 ? a.a.createElement("div", {
                                className: p()(b.a.resultsContainer, W({}, b.a.resultsContainerOut, this.state.isGuestLeaving)),
                                id: "results"
                            }, Object.entries(this.state.results).map((function(e) {
                                var t = G(e, 2),
                                    s = t[0],
                                    o = t[1];
                                return a.a.createElement("div", {
                                    className: b.a.resultRow,
                                    key: s,
                                    style: {
                                        color: o > 0 ? "#4bc22e" : "#c43a35"
                                    }
                                }, "".concat(o > 0 ? "+" : "-", " ").concat(Math.abs(o)), a.a.createElement("i", {
                                    className: p()(J[s], b.a.resultIcon)
                                }))
                            }))) : null, "choice" === this.state.phase ? a.a.createElement("div", {
                                className: p()(b.a.guestButtonContainer, (e = {}, W(e, b.a.guestButtonContainerOut, this.state.isGuestLeaving || this.state.noQuestionNext), W(e, b.a.guestButtonContainerDelayOut, this.state.isGuestAnswered && !this.state.showNextButton && !this.state.isRandomChoice), W(e, b.a.guestButtonContainerLongDelayOut, this.state.isGuestAnswered && !this.state.showNextButton && this.state.isRandomChoice), e))
                            }, this.state.showNextButton ? a.a.createElement("div", {
                                className: b.a.guestButton,
                                style: {
                                    backgroundColor: "#0bc2cf",
                                    width: "70%"
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.isGuestAnswered || this.state.noQuestion ? this.byeGuest : function() {
                                    return n.answerGuest(Object(H.p)([!0, !1]), !0)
                                },
                                id: "next"
                            }, a.a.createElement("div", {
                                className: b.a.guestButtonInside
                            }, this.state.isGuestAnswered || this.state.noQuestion ? "Next" : "I Don't Know")) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                                className: p()(b.a.guestButton, (t = {}, W(t, b.a.guestButtonOut, this.state.isGuestAnswered && !this.state.guestAnswer), W(t, b.a.guestButtonNoHover, !this.state.correct), t)),
                                style: {
                                    backgroundColor: "#4bc22e"
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.answerGuest(!0)
                                },
                                id: "yes"
                            }, a.a.createElement("div", {
                                className: b.a.guestButtonInside
                            }, "Yes")), a.a.createElement("div", {
                                className: p()(b.a.guestButton, (s = {}, W(s, b.a.guestButtonOut, this.state.isGuestAnswered && this.state.guestAnswer), W(s, b.a.guestButtonNoHover, !this.state.correct), s)),
                                style: {
                                    backgroundColor: "#c43a35"
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.answerGuest(!1)
                                },
                                id: "no"
                            }, a.a.createElement("div", {
                                className: b.a.guestButtonInside
                            }, "No")))) : a.a.createElement("div", {
                                className: b.a.noButtonContainer
                            })) : null)), "question" === this.state.phase ? a.a.createElement("div", {
                                className: b.a.questionContainer
                            }, a.a.createElement(I.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            })) : "feedback" === this.state.phase ? a.a.createElement("div", {
                                className: b.a.feedbackContainer
                            }, a.a.createElement(O.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, this.state.askTour ? a.a.createElement(S.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return n.answerTour(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return n.answerTour(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.hwGoal && !this.state.showTour ? a.a.createElement(S.a, {
                                text: "Your goal for this homework is to survive for ".concat(this.state.hwGoal, " ").concat(1 === this.state.hwGoal ? "Guest" : "Guests", "!"),
                                buttonOne: {
                                    text: "Cool",
                                    click: function() {
                                        return n.setState({
                                            hwGoal: 0
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.goalCompleted ? a.a.createElement(S.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Keep Playing",
                                    click: function() {
                                        return n.setState({
                                            goalCompleted: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "End Now",
                                    click: this.endNow,
                                    color: "blue"
                                }
                            }) : null, this.state.gameOverMsg ? a.a.createElement("div", {
                                className: p()(k.a.modal, b.a.modalFadeIn)
                            }, a.a.createElement("div", {
                                className: b.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: b.a.gameOverText
                            }, "Game Over"), a.a.createElement("div", {
                                className: b.a.gameOverTextSmall
                            }, this.state.gameOverMsg))) : null) : a.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && q(t.prototype, s), o && q(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            V.propTypes = {
                client: l.a.object,
                kingdom: l.a.object,
                history: l.a.object.isRequired,
                setKingdom: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(P.c)(Object(u.g)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    kingdom: e.clients.client ? e.clients.client.kingdom : null
                }
            }), (function(e) {
                return Object(r.b)({
                    setKingdom: y.a
                }, e)
            }))(Object(C.d)(V))))
        },
        jCti: function(e, t, s) {
            "use strict";
            var o = s("q1tI"),
                a = s.n(o),
                n = s("ANjH"),
                r = s("/MKj"),
                i = s("17x9"),
                l = s.n(i),
                u = s("Ty5D"),
                c = s("H1WH"),
                m = s("TSYQ"),
                p = s.n(m),
                h = s("ZrUs"),
                g = s("mPK+"),
                d = s("xUJr"),
                y = s.n(d),
                f = s("Xst1"),
                _ = s.n(f),
                b = s("oQ+7"),
                w = s("XTAU"),
                k = s("E8Bj"),
                v = s("2ZNs"),
                C = s("dLfW"),
                x = s("uFVu"),
                I = s("74sb"),
                O = s("+fLB"),
                S = s("qnYv");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                E = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    n = o.asyncIterator || "@@asyncIterator",
                    r = o.toStringTag || "@@toStringTag";

                function i(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, o) {
                    var a = t && t.prototype instanceof m ? t : m,
                        n = Object.create(a.prototype),
                        r = new C(o || []);
                    return n._invoke = function(e, t, s) {
                        var o = "suspendedStart";
                        return function(a, n) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw n;
                                return I()
                            }
                            for (s.method = a, s.arg = n;;) {
                                var r = s.delegate;
                                if (r) {
                                    var i = w(r, s);
                                    if (i) {
                                        if (i === c) continue;
                                        return i
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === o) throw o = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                o = "executing";
                                var l = u(e, t, s);
                                if ("normal" === l.type) {
                                    if (o = s.done ? "completed" : "suspendedYield", l.arg === c) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (o = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, r), n
                }

                function u(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var c = {};

                function m() {}

                function p() {}

                function h() {}
                var g = {};
                i(g, a, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    y = d && d(d(x([])));
                y && y !== t && s.call(y, a) && (g = y);
                var f = h.prototype = m.prototype = Object.create(g);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    this._invoke = function(a, n) {
                        function r() {
                            return new t((function(o, r) {
                                ! function o(a, n, r, i) {
                                    var l = u(e[a], e, n);
                                    if ("throw" !== l.type) {
                                        var c = l.arg,
                                            m = c.value;
                                        return m && "object" == T(m) && s.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            o("next", e, r, i)
                                        }), (function(e) {
                                            o("throw", e, r, i)
                                        })) : t.resolve(m).then((function(e) {
                                            c.value = e, r(c)
                                        }), (function(e) {
                                            return o("throw", e, r, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(a, n, o, r)
                            }))
                        }
                        return o = o ? o.then(r, r) : r()
                    }
                }

                function w(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return c;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return c
                    }
                    var o = u(s, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, c;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function v(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                n = function t() {
                                    for (; ++o < e.length;)
                                        if (s.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, i(f, "constructor", h), i(h, "constructor", p), p.displayName = i(h, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, r, "GeneratorFunction")), e.prototype = Object.create(f), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(b.prototype), i(b.prototype, n, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, s, o, a, n) {
                    void 0 === n && (n = Promise);
                    var r = new b(l(t, s, o, a), n);
                    return e.isGeneratorFunction(s) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, _(f), i(f, r, "Generator"), i(f, a, (function() {
                    return this
                })), i(f, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return s.value = o, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = x, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(v), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function o(s, o) {
                            return r.type = "throw", r.arg = e, t.next = s, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var n = this.tryEntries[a],
                                r = n.completion;
                            if ("root" === n.tryLoc) return o("end");
                            if (n.tryLoc <= this.prev) {
                                var i = s.call(n, "catchLoc"),
                                    l = s.call(n, "finallyLoc");
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
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var n = a;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, c) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), v(s), c
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var o = s.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    v(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), c
                    }
                }, e
            }

            function N(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, o)
                }
                return s
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(s), !0).forEach((function(t) {
                        H(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function H(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function P(e, t, s, o, a, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value
                } catch (e) {
                    return void s(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(o, a)
            }

            function A(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var o = t[s];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function G(e, t) {
                return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function B(e) {
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
                    var s, o = W(e);
                    if (t) {
                        var a = W(this).constructor;
                        s = Reflect.construct(o, arguments, a)
                    } else s = o.apply(this, arguments);
                    return L(this, s)
                }
            }

            function L(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Y = function(e) {
                    if (e >= 50) return 1;
                    var t = 50 - e;
                    return Math.floor(t / 5) + 1
                },
                M = function(e) {
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
                    var t, s, o, n, r, i = B(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            message: "",
                            name: "",
                            nameUsed: "",
                            guestScore: 0
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(R(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (n = E().mark((function e() {
                            var t, s, o, a, n, r, i, l, u = this;
                            return E().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if ((t = e.sent) || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.kingdom) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (this.props.setKingdom(j(j({}, this.props.kingdom), {}, {
                                                stage: "final"
                                            })), this.isHw = Boolean(this.props.client.hwId), this.isHw && S.a.post("/api/results", {
                                                hwId: this.props.client.hwId,
                                                name: this.props.client.name,
                                                data: {
                                                    corrects: this.props.kingdom.corrects,
                                                    incorrects: this.props.kingdom.incorrects,
                                                    guests: Number(this.props.kingdom.guestScore)
                                                }
                                            }).catch((function(e) {
                                                return console.error(e)
                                            })), s = 0, o = 0, Object.values(this.props.kingdom.corrects).forEach((function(e) {
                                                s += e, o += e
                                            })), Object.values(this.props.kingdom.incorrects).forEach((function(e) {
                                                o += e
                                            })), a = Object(I.p)(Object.keys(x.a)), n = this.props.client && this.props.client.name ? this.props.client.name : "You", r = [{
                                                name: n,
                                                blook: a,
                                                place: Y(this.props.kingdom.guestScore),
                                                guests: this.props.kingdom.guestScore
                                            }], -1 !== (i = r.map((function(e) {
                                                return e.name
                                            })).indexOf(n))) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 19:
                                        l = r[i].place, this.stats = {
                                            place: l,
                                            guests: this.props.kingdom.guestScore,
                                            correctAnswers: s,
                                            blookUsed: a,
                                            nameUsed: n,
                                            setId: this.props.kingdom.setId
                                        }, this.setState({
                                            numCorrect: s,
                                            numQuestions: o,
                                            guestScore: this.props.kingdom.guestScore,
                                            message: Object(C.a)((l - 1) / 30),
                                            nameUsed: n,
                                            standings: r
                                        }, (function() {
                                            t ? (u.saveStats(t.name, (function() {})), S.a.put("/api/users/plan").then((function(e) {
                                                u.here && u.setState({
                                                    ready: !0,
                                                    name: t.name,
                                                    plus: "Starter" !== e.data.plan || u.props.client && u.props.client.plus
                                                })
                                            })).catch((function(e) {
                                                console.error(e)
                                            }))) : u.setState({
                                                ready: !0
                                            })
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), r = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(s, o) {
                                var a = n.apply(e, t);

                                function r(e) {
                                    P(a, s, o, r, i, "next", e)
                                }

                                function i(e) {
                                    P(a, s, o, r, i, "throw", e)
                                }
                                r(void 0)
                            }))
                        }, function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteClient(), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            S.a.put("/api/users/kingdomstats", {
                                name: e,
                                place: this.stats.place,
                                guests: this.stats.guests,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers,
                                setId: this.state.setId
                            }).then(t).catch((function(e) {
                                return console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.kingdom || !this.props.kingdom.questions || !this.props.kingdom.questions[0]) return a.a.createElement(u.a, {
                                to: "/play"
                            });
                            var e = this.props.client && this.props.client.hwId;
                            return a.a.createElement("div", {
                                className: c.isMobile ? _.a.mBody : _.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement(w.a, {
                                title: "Play Crazy Kingdom | Blooket",
                                desc: "Keep your Kingdom running by answering questions and making decisions to strategically balance your resources."
                            }), a.a.createElement(b.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? a.a.createElement(v.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Answered ".concat(this.state.guestScore, " ").concat(1 === this.state.guestScore ? "Guest" : "Guests"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return function(e) {
                                        return a.a.createElement("div", {
                                            className: y.a.statContainer
                                        }, Object(I.o)(e.guests), a.a.createElement("i", {
                                            className: p()("fas fa-users", y.a.statIcon)
                                        }))
                                    }(e)
                                },
                                renderStats: function() {},
                                customMessage: this.state.message,
                                corrects: this.props.kingdom.corrects,
                                incorrects: this.props.kingdom.incorrects,
                                questions: this.props.kingdom.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .4
                            }) : null)
                        }
                    }]) && A(t.prototype, s), o && A(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            M.propTypes = {
                client: l.a.object,
                kingdom: l.a.object,
                deleteClient: l.a.func.isRequired,
                setKingdom: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(k.c)(Object(u.g)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client,
                    kingdom: e.clients.client ? e.clients.client.kingdom : null
                }
            }), (function(e) {
                return Object(n.b)({
                    deleteClient: h.a,
                    setKingdom: g.a
                }, e)
            }))(Object(O.d)(M))))
        },
        "mPK+": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return a
            }));
            var o = s("bjc5");

            function a(e) {
                return {
                    type: o.a,
                    kingdom: e
                }
            }
        },
        ryCR: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".tourSteps__centered___2rDfi-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__materials___1qnid-camelCase{left:17.5%}.tourSteps__materials___1qnid-camelCase,.tourSteps__people___3o6wd-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__people___3o6wd-camelCase{left:32.5%}.tourSteps__happiness___1OjM_-camelCase{right:32.5%}.tourSteps__gold___RAphs-camelCase,.tourSteps__happiness___1OjM_-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__gold___RAphs-camelCase{right:17.5%}.tourSteps__guest___1-ylT-camelCase{top:20%}.tourSteps__guest___1-ylT-camelCase,.tourSteps__speech___n6e_L-camelCase{left:50%;transform:translateX(-50%)}.tourSteps__speech___n6e_L-camelCase{top:50%}.tourSteps__bottomButton___Ee2LI-camelCase{bottom:30%;left:50%;transform:translateX(-50%)}.tourSteps__results___-ubkA-camelCase{right:46%;top:60%;transform:translateY(-50%)}.tourSteps__nextButton___zBWYG-camelCase{bottom:30%;left:50%;transform:translateX(-50%)}.tourSteps__topRight___3JP6c-camelCase{top:65px;right:10px}@media only screen and (max-width:1000px){.tourSteps__gold___RAphs-camelCase,.tourSteps__happiness___1OjM_-camelCase,.tourSteps__materials___1qnid-camelCase,.tourSteps__people___3o6wd-camelCase{top:37%;right:auto;left:50%;transform:translateX(-50%)}.tourSteps__guest___1-ylT-camelCase{top:30%}.tourSteps__speech___n6e_L-camelCase{top:auto;bottom:10%}.tourSteps__bottomButton___Ee2LI-camelCase{bottom:16.5%}.tourSteps__results___-ubkA-camelCase{right:50%;top:37.5%;transform:translateX(50%)}}@media only screen and (min-height:800px) and (max-width:1000px){.tourSteps__gold___RAphs-camelCase,.tourSteps__happiness___1OjM_-camelCase,.tourSteps__materials___1qnid-camelCase,.tourSteps__people___3o6wd-camelCase{top:40%;right:auto;left:50%;transform:translateX(-50%)}.tourSteps__guest___1-ylT-camelCase{top:35%}.tourSteps__speech___n6e_L-camelCase{top:auto;bottom:20%}.tourSteps__bottomButton___Ee2LI-camelCase{bottom:26.5%}.tourSteps__results___-ubkA-camelCase{right:50%;top:40%;transform:translateX(50%)}}", ""]), t.locals = {
                centered: "tourSteps__centered___2rDfi-camelCase",
                materials: "tourSteps__materials___1qnid-camelCase",
                people: "tourSteps__people___3o6wd-camelCase",
                happiness: "tourSteps__happiness___1OjM_-camelCase",
                gold: "tourSteps__gold___RAphs-camelCase",
                guest: "tourSteps__guest___1-ylT-camelCase",
                speech: "tourSteps__speech___n6e_L-camelCase",
                bottomButton: "tourSteps__bottomButton___Ee2LI-camelCase",
                results: "tourSteps__results___-ubkA-camelCase",
                nextButton: "tourSteps__nextButton___zBWYG-camelCase",
                topRight: "tourSteps__topRight___3JP6c-camelCase"
            }
        },
        sO4g: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, '.styles__background___aRz7S-camelCase{background-size:74.5px}.styles__statsPair___hwkeO-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;position:absolute;top:15%;height:75%;width:calc(50% - 200px)}.styles__statHolder___2AES1-camelCase{position:relative;width:130px;height:100%;background-color:#d52423;border-radius:5px;box-shadow:.5vw .5vw 0 rgba(0,0,0,.2)}.styles__statContainer___3TN1V-camelCase{width:calc(100% - 30px);height:calc(100% - 30px);background-color:#d52423;border:5px solid #ffd329;position:absolute;top:10px;left:10px;display:flex;flex-direction:column;align-items:center;color:#fff;font-family:Nunito,sans-serif}.styles__statBarContainer___1ztt5-camelCase{margin:15px auto 10px;width:35%;border-radius:5px;overflow:hidden;height:70%;flex-grow:1;background-color:rgba(0,0,0,.1)}.styles__statBar___21oB2-camelCase{width:100%;height:100%;background-color:#fff;transform-origin:bottom center;transition:.5s}.styles__statText___2gjRM-camelCase{font-size:24px;margin:0 auto}.styles__statIcon___FWX-u-camelCase{font-size:36px;margin:0 auto 10px;height:40px;justify-self:center}.styles__guestContainer___16Veq-camelCase,.styles__statIcon___FWX-u-camelCase{display:flex;align-items:center}.styles__guestContainer___16Veq-camelCase{flex-direction:column;justify-content:flex-end;position:absolute;width:380px;height:70%;top:15%;left:calc(50% - 190px)}.styles__speechBubble___2labD-camelCase{background:#fff;border:3px solid #a7a7a7;border-radius:5px;box-shadow:4px 4px 0 rgba(0,0,0,.2);width:90%;position:relative;margin-bottom:25px;display:flex;flex-direction:column;transform-origin:80% bottom;transform:scale(0);-webkit-animation:styles__bubbleGrow___3wqxc-camelCase .4s .2s forwards;animation:styles__bubbleGrow___3wqxc-camelCase .4s .2s forwards}@-webkit-keyframes styles__bubbleGrow___3wqxc-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__bubbleGrow___3wqxc-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__speechBubbleOut___2UmxZ-camelCase{transform:scale(1);-webkit-animation:styles__bubbleShrink___2aYlP-camelCase .4s 0ms forwards;animation:styles__bubbleShrink___2aYlP-camelCase .4s 0ms forwards}@-webkit-keyframes styles__bubbleShrink___2aYlP-camelCase{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes styles__bubbleShrink___2aYlP-camelCase{0%{transform:scale(1)}to{transform:scale(0)}}.styles__speechArrow___1A_i6-camelCase{border-right:21px solid transparent;bottom:-27px;position:absolute;left:80%}.styles__speechArrow___1A_i6-camelCase:before{border-right:25px solid transparent;border-top:25px solid #a7a7a7;bottom:2px;content:"";position:absolute;right:6px}.styles__speechArrow___1A_i6-camelCase:after{border-right:21px solid transparent;border-top:21px solid #fff;bottom:10px;content:"";position:absolute;right:7px}.styles__speechText___2rE5h-camelCase{font-family:Nunito,sans-serif;font-size:20px;width:calc(100% - 20px);text-align:left;color:#3a3a3a;margin:auto;padding:10px;opacity:0;-webkit-animation:styles__fadeIn___20shj-camelCase .2s .3s forwards;animation:styles__fadeIn___20shj-camelCase .2s .3s forwards}.styles__guestImageContainer___1rhyg-camelCase{height:40%;width:100%;position:relative;display:flex;flex-direction:column;justify-content:flex-end;pointer-events:none}.styles__resultsContainer___2wq5I-camelCase{position:absolute;left:80%;bottom:35%;width:85px;display:flex;flex-direction:column;align-items:flex-end;background:#fff;border:3px solid #a7a7a7;border-radius:5px;box-shadow:4px 4px 0 rgba(0,0,0,.2);padding:5px;opacity:0;-webkit-animation:styles__fadeIn___20shj-camelCase .5s forwards;animation:styles__fadeIn___20shj-camelCase .5s forwards}.styles__resultsContainerOut___19ka3-camelCase{opacity:1;-webkit-animation:styles__fadeOut___XbEAk-camelCase .3s forwards;animation:styles__fadeOut___XbEAk-camelCase .3s forwards}.styles__resultRow___L1gAL-camelCase{flex-direction:row;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:22px;font-weight:700;font-family:Nunito,sans-serif}.styles__resultIcon___2mUXt-camelCase,.styles__resultRow___L1gAL-camelCase{display:flex;align-items:center}.styles__resultIcon___2mUXt-camelCase{margin-left:5px;width:30px;justify-content:center}.styles__guestBlook___3RdsC-camelCase{height:100%;width:55%;margin:0 auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translateY(100vh);-webkit-animation:styles__guestIn___1axig-camelCase .5s ease-out 0ms forwards;animation:styles__guestIn___1axig-camelCase .5s ease-out 0ms forwards}@-webkit-keyframes styles__guestIn___1axig-camelCase{0%{transform:translateY(100vh)}to{transform:translateY(0)}}@keyframes styles__guestIn___1axig-camelCase{0%{transform:translateY(100vh)}to{transform:translateY(0)}}.styles__guestLeaving___ejIvN-camelCase{transform:translateY(0);-webkit-animation:styles__guestOut___3AKRY-camelCase .5s ease-in .5s forwards;animation:styles__guestOut___3AKRY-camelCase .5s ease-in .5s forwards}@-webkit-keyframes styles__guestOut___3AKRY-camelCase{0%{transform:translateY(0)}to{transform:translateY(100vh)}}@keyframes styles__guestOut___3AKRY-camelCase{0%{transform:translateY(0)}to{transform:translateY(100vh)}}.styles__guestCircle___2UfgF-camelCase{bottom:5%;transform:translate(-50%,50%);box-shadow:0 .5vw 0 rgba(0,0,0,.2);z-index:-1;border-radius:50%;width:70%;height:30%}.styles__guestCircle___2UfgF-camelCase,.styles__guestCircleInside___1gnlp-camelCase{position:absolute;left:50%;background-color:#d52423}.styles__guestCircleInside___1gnlp-camelCase{top:50%;transform:translate(-50%,-50%);width:calc(100% - 25px);height:calc(100% - 22px);border-radius:50%;border:5px solid #ffd329}.styles__guestButtonContainer___2efgh-camelCase{margin-top:45px;width:100%;height:75px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;opacity:0;-webkit-animation:styles__fadeIn___20shj-camelCase .2s .2s forwards;animation:styles__fadeIn___20shj-camelCase .2s .2s forwards}.styles__guestButtonContainerOut___oteS--camelCase{opacity:1;-webkit-animation:styles__fadeOut___XbEAk-camelCase .2s 0ms forwards;animation:styles__fadeOut___XbEAk-camelCase .2s 0ms forwards}.styles__guestButtonContainerOut___oteS--camelCase>.styles__guestButton___2wjXM-camelCase{cursor:default}.styles__guestButtonContainerDelayOut___2ku9E-camelCase{opacity:1;-webkit-animation:styles__fadeOut___XbEAk-camelCase .2s 1s forwards;animation:styles__fadeOut___XbEAk-camelCase .2s 1s forwards}.styles__guestButtonContainerDelayOut___2ku9E-camelCase>.styles__guestButton___2wjXM-camelCase{cursor:default}.styles__guestButtonContainerLongDelayOut___3V9ym-camelCase{opacity:1;-webkit-animation:styles__fadeOut___XbEAk-camelCase .2s 2.5s forwards;animation:styles__fadeOut___XbEAk-camelCase .2s 2.5s forwards}.styles__guestButtonContainerLongDelayOut___3V9ym-camelCase>.styles__guestButton___2wjXM-camelCase{cursor:default}.styles__noButtonContainer___2Ds8Z-camelCase{height:120px}.styles__guestButton___2wjXM-camelCase{width:125px;height:75px;display:flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;box-shadow:.3vw .3vw 0 rgba(0,0,0,.2);border-radius:5px;transition:transform .2s}.styles__guestButton___2wjXM-camelCase:hover{transform:scale(.95)}.styles__guestButtonNoHover___snfXx-camelCase{cursor:default}.styles__guestButtonNoHover___snfXx-camelCase:hover{transform:scale(1)}.styles__guestButtonInside___1C1uV-camelCase{width:calc(100% - 25px);height:calc(100% - 25px);display:flex;align-items:center;justify-content:center;margin:auto;border:5px solid rgba(0,0,0,.2);color:#fff;font-family:Nunito,sans-serif;font-size:34px;font-weight:700}.styles__guestButtonOut___zYfYV-camelCase{opacity:1;cursor:default;-webkit-animation:styles__fadeOut___XbEAk-camelCase .3s linear forwards;animation:styles__fadeOut___XbEAk-camelCase .3s linear forwards}.styles__questionContainer___2l60B-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2;-webkit-animation:styles__growIn___1YnQu-camelCase .4s linear forwards;animation:styles__growIn___1YnQu-camelCase .4s linear forwards}@-webkit-keyframes styles__growIn___1YnQu-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___1YnQu-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___1cUeX-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f7f7f7}.styles__modalFadeIn___2kSPJ-camelCase{opacity:0;-webkit-animation:styles__fadeIn___20shj-camelCase .4s linear .5s forwards;animation:styles__fadeIn___20shj-camelCase .4s linear .5s forwards}.styles__gameOverContainer___2g-5B-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___vTtNE-camelCase{font-family:Titan One,sans-serif;font-size:12vw;-webkit-animation:styles__fadeIn___20shj-camelCase .4s linear 1s forwards;animation:styles__fadeIn___20shj-camelCase .4s linear 1s forwards}.styles__gameOverText___vTtNE-camelCase,.styles__gameOverTextSmall___i32ci-camelCase{opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__gameOverTextSmall___i32ci-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;-webkit-animation:styles__fadeIn___20shj-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___20shj-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___20shj-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___20shj-camelCase{0%{opacity:0}to{opacity:1}}@-webkit-keyframes styles__fadeOut___XbEAk-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___XbEAk-camelCase{0%{opacity:1}to{opacity:0}}.styles__mStatsHolder___2P4Q8-camelCase{display:none}@media only screen and (max-width:1000px){.styles__mStatsHolder___2P4Q8-camelCase{width:calc(90% - 30px);max-width:410px;height:120px;background-color:#d52423;border-radius:5px;box-shadow:1.2vw 1.2vw 0 rgba(0,0,0,.2);position:relative;display:block}.styles__mStatsContainer___1PIOy-camelCase{width:calc(100% - 30px);height:calc(100% - 30px);background-color:#d52423;border:5px solid #ffd329;position:absolute;top:10px;left:10px;flex-flow:row wrap}.styles__mStatRow___3yRoj-camelCase,.styles__mStatsContainer___1PIOy-camelCase{display:flex;align-items:center;justify-content:center;color:#fff;font-family:Nunito,sans-serif}.styles__mStatRow___3yRoj-camelCase{flex-direction:column;width:25%;height:100%;font-size:24px;font-weight:700}.styles__mStatIcon___1dgmL-camelCase{margin-top:7px;line-height:28px;font-size:26px}.styles__guestContainer___16Veq-camelCase{width:95%;max-width:380px;height:calc(100% - 140px);max-height:420px;position:relative;top:20px;left:0}.styles__guestButton___2wjXM-camelCase{width:100px;height:60px;box-shadow:.9vw .9vw 0 rgba(0,0,0,.2)}.styles__guestButton___2wjXM-camelCase:hover{transform:scale(1)}.styles__guestButtonInside___1C1uV-camelCase{width:calc(100% - 20px);height:calc(100% - 20px);border:5px solid rgba(0,0,0,.2);font-size:30px}.styles__guestButtonContainer___2efgh-camelCase{margin-top:19px;margin-bottom:6px;width:100%;height:60px}.styles__noButtonContainer___2Ds8Z-camelCase{height:85px}.styles__guestCircle___2UfgF-camelCase{box-shadow:0 .8vw 0 rgba(0,0,0,.2)}.styles__speechText___2rE5h-camelCase{font-size:18px;padding:5px}.styles__statsPair___hwkeO-camelCase{display:none}.styles__centerContainer___1_Io0-camelCase{position:absolute;top:10px;left:0;width:100%;height:calc(100% - 20px);display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__resultsContainer___2wq5I-camelCase{left:75%;bottom:32%;width:68px}.styles__resultRow___L1gAL-camelCase{font-size:17px}.styles__resultIcon___2mUXt-camelCase{margin-left:5px;width:25px}}@media only screen and (max-width:800px){.styles__gameOverText___vTtNE-camelCase{font-size:15vw}.styles__gameOverTextSmall___i32ci-camelCase{font-size:5vw}}', ""]), t.locals = {
                background: "styles__background___aRz7S-camelCase",
                statsPair: "styles__statsPair___hwkeO-camelCase",
                statHolder: "styles__statHolder___2AES1-camelCase",
                statContainer: "styles__statContainer___3TN1V-camelCase",
                statBarContainer: "styles__statBarContainer___1ztt5-camelCase",
                statBar: "styles__statBar___21oB2-camelCase",
                statText: "styles__statText___2gjRM-camelCase",
                statIcon: "styles__statIcon___FWX-u-camelCase",
                guestContainer: "styles__guestContainer___16Veq-camelCase",
                speechBubble: "styles__speechBubble___2labD-camelCase",
                bubbleGrow: "styles__bubbleGrow___3wqxc-camelCase",
                speechBubbleOut: "styles__speechBubbleOut___2UmxZ-camelCase",
                bubbleShrink: "styles__bubbleShrink___2aYlP-camelCase",
                speechArrow: "styles__speechArrow___1A_i6-camelCase",
                speechText: "styles__speechText___2rE5h-camelCase",
                fadeIn: "styles__fadeIn___20shj-camelCase",
                guestImageContainer: "styles__guestImageContainer___1rhyg-camelCase",
                resultsContainer: "styles__resultsContainer___2wq5I-camelCase",
                resultsContainerOut: "styles__resultsContainerOut___19ka3-camelCase",
                fadeOut: "styles__fadeOut___XbEAk-camelCase",
                resultRow: "styles__resultRow___L1gAL-camelCase",
                resultIcon: "styles__resultIcon___2mUXt-camelCase",
                guestBlook: "styles__guestBlook___3RdsC-camelCase",
                guestIn: "styles__guestIn___1axig-camelCase",
                guestLeaving: "styles__guestLeaving___ejIvN-camelCase",
                guestOut: "styles__guestOut___3AKRY-camelCase",
                guestCircle: "styles__guestCircle___2UfgF-camelCase",
                guestCircleInside: "styles__guestCircleInside___1gnlp-camelCase",
                guestButtonContainer: "styles__guestButtonContainer___2efgh-camelCase",
                guestButtonContainerOut: "styles__guestButtonContainerOut___oteS--camelCase",
                guestButton: "styles__guestButton___2wjXM-camelCase",
                guestButtonContainerDelayOut: "styles__guestButtonContainerDelayOut___2ku9E-camelCase",
                guestButtonContainerLongDelayOut: "styles__guestButtonContainerLongDelayOut___3V9ym-camelCase",
                noButtonContainer: "styles__noButtonContainer___2Ds8Z-camelCase",
                guestButtonNoHover: "styles__guestButtonNoHover___snfXx-camelCase",
                guestButtonInside: "styles__guestButtonInside___1C1uV-camelCase",
                guestButtonOut: "styles__guestButtonOut___zYfYV-camelCase",
                questionContainer: "styles__questionContainer___2l60B-camelCase",
                growIn: "styles__growIn___1YnQu-camelCase",
                feedbackContainer: "styles__feedbackContainer___1cUeX-camelCase",
                modalFadeIn: "styles__modalFadeIn___2kSPJ-camelCase",
                gameOverContainer: "styles__gameOverContainer___2g-5B-camelCase",
                gameOverText: "styles__gameOverText___vTtNE-camelCase",
                gameOverTextSmall: "styles__gameOverTextSmall___i32ci-camelCase",
                mStatsHolder: "styles__mStatsHolder___2P4Q8-camelCase",
                mStatsContainer: "styles__mStatsContainer___1PIOy-camelCase",
                mStatRow: "styles__mStatRow___3yRoj-camelCase",
                mStatIcon: "styles__mStatIcon___1dgmL-camelCase",
                centerContainer: "styles__centerContainer___1_Io0-camelCase"
            }
        },
        tf9F: function(e, t, s) {
            var o = s("sO4g");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        xUJr: function(e, t, s) {
            var o = s("4XkD");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        }
    }
]);