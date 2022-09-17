(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "4vHg": function(t, e, r) {
            var n = r("xBM5");
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
        "9ddr": function(t, e, r) {
            var n = r("o1xO");
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
        "C/JS": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("TSYQ"),
                f = r.n(l),
                p = r("H1WH"),
                h = r("E8Bj"),
                d = r("XTAU"),
                y = r("ca/f"),
                m = r("t/SN"),
                _ = r.n(m),
                v = r("Xst1"),
                b = r.n(v),
                g = r("qnYv"),
                w = r("i4/Q"),
                x = r("lmLo");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(C([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = C, E.prototype = {
                    constructor: E,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function E(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function C(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    return S(this, r)
                }
            }

            function S(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && k(t, e)
                }(c, t);
                var e, r, n, a, i, s = P(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        user: null,
                        classes: [],
                        isPlus: !1,
                        ready: !1,
                        isCreating: !1,
                        loading: !1,
                        className: "",
                        classColor: "#1f77b4",
                        classError: ""
                    }, e.here = !0, e.createClass = e.createClass.bind(T(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = j().mark((function t() {
                        var e, r, n = this;
                        return j().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    return this.setState({
                                        user: e
                                    }), t.next = 8, new Promise((function(t) {
                                        g.a.put("/api/users/plan").then((function(e) {
                                            n.here && t("Starter" !== e.data.plan)
                                        })).catch((function() {
                                            t(!1)
                                        }))
                                    }));
                                case 8:
                                    (r = t.sent) ? g.a.get("/api/classes/user").then((function(t) {
                                        n.here && t && n.setState({
                                            classes: t.data,
                                            isPlus: r,
                                            ready: !0
                                        })
                                    })).catch((function(t) {
                                        console.error(t)
                                    })): this.setState({
                                        ready: !0,
                                        isPlus: r
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                E(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                E(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "createClass",
                    value: function(t) {
                        var e = this;
                        if (t && t.preventDefault(), !this.loading) {
                            if (this.loading = !0, !this.state.className) return this.loading = !1, void this.setState({
                                classError: "You need a class name."
                            });
                            this.setState({
                                loading: !0
                            }), g.a.post("/api/classes", {
                                name: this.state.className,
                                color: this.state.classColor
                            }).then((function(t) {
                                e.here && e.props.history.push("/class/".concat(t.data))
                            })).catch((function(t) {
                                e.here && (console.error(t), e.loading = !1, e.setState({
                                    isCreating: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? b.a.mBody : b.a.body
                        }, o.a.createElement(d.a, {
                            title: "Classes | Blooket",
                            desc: "Create and manage your classes!"
                        }), o.a.createElement(w.a, {
                            user: this.state.user,
                            page: "Classes"
                        }), o.a.createElement("div", {
                            className: b.a.profileBody
                        }, o.a.createElement("div", {
                            className: _.a.header
                        }, "Classes"), this.state.ready ? this.state.isPlus ? 0 === this.state.classes.length ? o.a.createElement("div", {
                            className: _.a.bigContainer
                        }, o.a.createElement("div", {
                            className: _.a.bigText
                        }, "No Classes Yet"), o.a.createElement("div", {
                            className: _.a.addButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isCreating: !0
                                })
                            }
                        }, o.a.createElement("i", {
                            className: f()("fas fa-plus-circle", _.a.addIcon)
                        }), o.a.createElement("div", {
                            className: _.a.addText
                        }, "New Class"))) : o.a.createElement("div", {
                            className: _.a.container
                        }, this.state.classes.map((function(e) {
                            return o.a.createElement(x.a, {
                                key: e._id,
                                outsideClass: _.a.class,
                                color: e.color,
                                onClick: function() {
                                    return t.props.history.push("/class/".concat(e._id))
                                }
                            }, o.a.createElement("div", {
                                className: _.a.classInside
                            }, o.a.createElement("div", {
                                className: _.a.name
                            }, e.name), o.a.createElement("div", {
                                className: _.a.studentsText
                            }, "".concat(e.students.length, " Student").concat(1 === e.students.length ? "" : "s"))))
                        })), o.a.createElement(x.a, {
                            outsideClass: _.a.addButton,
                            color: "#fff",
                            onClick: function() {
                                return t.setState({
                                    isCreating: !0
                                })
                            }
                        }, o.a.createElement("div", {
                            className: _.a.addButtonInside
                        }, o.a.createElement("i", {
                            className: f()("fas fa-plus-circle", _.a.addIcon)
                        }), o.a.createElement("div", {
                            className: _.a.addText
                        }, "New Class")))) : o.a.createElement("div", {
                            className: _.a.bigContainer
                        }, o.a.createElement("div", {
                            className: _.a.bigText
                        }, "Blooket Plus Required"), o.a.createElement(x.a, {
                            outsideClass: _.a.upgradeButton,
                            color: "#ff7b24",
                            onClick: function() {
                                return t.props.history.push("/upgrade")
                            }
                        }, o.a.createElement("div", {
                            className: _.a.upgradeButtonInside
                        }, "Upgrade"))) : null, this.state.isCreating ? o.a.createElement(y.a, {
                            text: "Enter a class name and choose a color:",
                            loading: this.state.loading,
                            stringValue: this.state.className,
                            stringChange: function(e) {
                                return t.setState({
                                    className: e.target.value.slice(0, 60),
                                    classError: ""
                                })
                            },
                            colorChange: function(e) {
                                return t.setState({
                                    classColor: e
                                })
                            },
                            colorValue: this.state.classColor,
                            onSubmit: this.createClass,
                            error: this.state.classError,
                            buttonOne: {
                                text: "Create",
                                click: this.createClass,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return t.setState({
                                        isCreating: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null))
                    }
                }]) && C(e.prototype, r), n && C(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                history: c.a.object,
                user: c.a.object
            };
            e.a = Object(h.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(N)))
        },
        Dhu9: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("H1WH"),
                f = r("bQgK"),
                p = r.n(f),
                h = r("wMg7");

            function d(t) {
                return {
                    type: h.a,
                    answer: t
                }
            }
            var y = r("ZrUs"),
                m = r("Rnav"),
                _ = r("XTAU"),
                v = r("Xst1"),
                b = r.n(v),
                g = r("FVRk"),
                w = r("+fLB"),
                x = r("74sb");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(C([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = C, E.prototype = {
                    constructor: E,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function E(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function C(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = t.apply(e, r);

                        function i(t) {
                            E(a, n, o, i, s, "next", t)
                        }

                        function s(t) {
                            E(a, n, o, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function k(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = N(t);
                    if (e) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }

            function T(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && P(t, e)
                }(c, t);
                var e, r, n, a, i, s = S(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 10,
                        readId: ""
                    }, e.dbRef = {}, e.startTime = 0, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(L(e)), e.readQuestion = e.readQuestion.bind(L(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = C(j().mark((function t() {
                        var e, r = this;
                        return j().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(x.c)(), t.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "cres":
                                                r.props.history.push("/play/classic/answer/result");
                                                break;
                                            case "cstd":
                                                r.props.history.push("/play/classic/standings");
                                                break;
                                            case "cfin":
                                                r.props.history.push("/play/classic/final");
                                                break;
                                            case "crdy":
                                                r.props.history.push("/play/classic/get-ready");
                                                break;
                                            case null:
                                                r.props.deleteClient(), r.props.history.push("/play")
                                        }
                                    })), this.ready = !1, this.readyTimeout = setTimeout((function() {
                                        r.startTime = p()(), r.ready = !0
                                    }), 250), e = this.props.client.question.timeLimit, this.setState({
                                        timer: e
                                    }), this.interval = setInterval((function() {
                                        (e -= 1) <= 0 || r.setState({
                                            timer: e
                                        })
                                    }), 1e3);
                                case 12:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(x.u)(), clearInterval(this.interval), clearTimeout(this.readyTimeout)
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (this.ready) {
                            if (this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel(), !this.props.client.answer) {
                                this.props.addAnswer(t);
                                var e = Math.round(p()() - this.startTime);
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        a: this.props.client.question.answers.indexOf(t),
                                        t: e,
                                        b: this.props.client.blook
                                    }
                                })
                            }
                            this.props.history.push("/play/classic/answer/sent")
                        }
                    }
                }, {
                    key: "readQuestion",
                    value: (a = C(j().mark((function t() {
                        var e, r = this;
                        return j().wrap((function(t) {
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
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.answers ? o.a.createElement("div", {
                            className: l.isMobile ? b.a.mBody : b.a.body
                        }, o.a.createElement(_.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(m.a, {
                            name: this.props.client.name,
                            rightText: this.state.timer,
                            showRead: !0,
                            readQuestion: this.readQuestion
                        }), o.a.createElement(g.a, {
                            onAnswer: this.onAnswer,
                            text: this.props.client.question.text,
                            answers: this.props.client.question.answers,
                            image: this.props.client.question.image,
                            audio: this.props.client.question.audio,
                            readId: this.state.readId
                        })) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
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
                    question: c.a.object,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object,
                    mode: c.a.string
                }),
                history: c.a.object.isRequired,
                firebase: c.a.object,
                deleteClient: c.a.func.isRequired,
                addAnswer: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: y.a,
                    addAnswer: d
                }, t)
            }))(Object(w.d)(I)))
        },
        HwL9: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "SET_CLASSIC_RESULTS"
        },
        J2Be: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("H1WH"),
                f = r("ZrUs"),
                p = r("oQ+7"),
                h = r("ju8O"),
                d = r.n(h),
                y = r("Xst1"),
                m = r.n(y),
                _ = r("XTAU"),
                v = r("2ZNs"),
                b = r("74sb"),
                g = r("+fLB"),
                w = r("qnYv");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e) {
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
                    e % 2 ? O(Object(r), !0).forEach((function(e) {
                        E(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(e) {
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

            function C(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    return S(this, r)
                }
            }

            function S(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = function(t) {
                    return o.a.createElement("div", {
                        className: d.a.pointsText
                    }, Object(b.o)(t.points || 0))
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
                        }), e && k(t, e)
                    }(i, t);
                    var e, r, n, a = P(i);

                    function i(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (e = a.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            points: 0,
                            isBlocked: !1
                        }, e.saveStats = e.saveStats.bind(T(e)), e
                    }
                    return e = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                var e = this.props.client.standing.map((function(t) {
                                        return t.name
                                    })).indexOf(this.props.client.name),
                                    r = 0,
                                    n = 0;
                                if (Object.values(this.props.client.corrects).forEach((function(t) {
                                        r += t, n += t
                                    })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                        n += t
                                    })), this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            c: j({}, this.props.client.corrects),
                                            i: j({}, this.props.client.incorrects)
                                        }
                                    }), -1 !== e) {
                                    var o = this.props.client.standing[e],
                                        a = o.place,
                                        i = this.props.client.standing.length - a;
                                    this.stats = {
                                        place: a,
                                        points: o.points,
                                        playersDefeated: i,
                                        correctAnswers: r,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        t.setState({
                                            ready: !0,
                                            numCorrect: r,
                                            numQuestions: n,
                                            points: o.points
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
                            w.a.put("/api/users/classicstats", {
                                name: t,
                                place: this.stats.place,
                                classicPoints: this.stats.points,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: l.isMobile ? m.a.mBody : m.a.body,
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
                                myStat: "".concat(Object(b.o)(this.state.points), " ").concat(1 === this.state.points ? "Point" : "Points"),
                                saveStats: this.saveStats,
                                renderStandingStat: N,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .5
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: m.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && C(e.prototype, r), n && C(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), i
                }(o.a.Component);
            I.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: f.a
                }, t)
            }))(Object(g.d)(I)))
        },
        "Lb+f": function(t, e, r) {
            var n = r("yFdg");
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
        Lkbc: function(t, e, r) {
            var n = r("jbf7");
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
        Ozwx: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "GET_QUESTION"
        },
        TTww: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("HwL9");

            function f(t, e) {
                return {
                    type: l.a,
                    numClients: t,
                    standings: e
                }
            }
            var p = r("HbJ1"),
                h = r("VgyX"),
                d = r("kQZX"),
                y = r("Xst1"),
                m = r.n(y),
                _ = r("XTAU"),
                v = r("goVm"),
                b = r("DrLq"),
                g = r.n(b),
                w = r("+fLB");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t) {
                return function(t) {
                    if (Array.isArray(t)) return C(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || E(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(i = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); i = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(t, e) || E(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t, e) {
                if (t) {
                    if ("string" == typeof t) return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? C(t, e) : void 0
                }
            }

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
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
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new j(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return C()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(E([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == x(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function j(t) {
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
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = E, j.prototype = {
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
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
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function P(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
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

            function T(t, e) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = q(t);
                    if (e) {
                        var o = q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }

            function N(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return I(t)
            }

            function I(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var R = function(t) {
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
                }(c, t);
                var e, r, n, a, i, s = L(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        numAnswers: 0,
                        numClients: 0,
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.here = !0, e.ok = !1, e.dbRef = {}, e.responseData = {}, e.next = e.next.bind(I(e)), e.changeMuted = e.changeMuted.bind(I(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = k().mark((function t() {
                        var e = this;
                        return k().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(t) {
                                        e.here && e.setState({
                                            numClients: Object.keys(t || {}).length
                                        })
                                    })), t.next = 5, this.props.firebase.getDatabaseRef(this.props.host.id, "c");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var r = t.val() || {};
                                        e.responseData = r;
                                        var n = Object.values(r),
                                            o = n.length,
                                            a = n.filter((function(t) {
                                                return t.a || 0 === t.a
                                            })).length;
                                        a > 0 && !e.state.muted && new Audio(g.a).play(), e.setState({
                                            numAnswers: a,
                                            numClients: o
                                        }), a === o && 0 !== o && e.next()
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                P(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                P(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off("value"), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.setState({
                            transitioning: !0
                        }, (function() {
                            t.transitionTimeout = setTimeout((function() {
                                var e = {},
                                    r = t.props.host.question.correctAnswers.map((function(e) {
                                        return t.props.host.question.answers.indexOf(e)
                                    })),
                                    n = Object.entries(t.responseData).map((function(e) {
                                        var n = j(e, 2),
                                            o = n[0],
                                            a = n[1];
                                        return {
                                            name: o,
                                            blook: a.b,
                                            answer: a.a,
                                            correct: r.includes(a.a),
                                            time: a.t || 1e3 * t.props.host.question.timeLimit
                                        }
                                    }));
                                n.sort((function(t, e) {
                                    return t.time - e.time
                                }));
                                var o = n.filter((function(t) {
                                        return !t.correct
                                    })),
                                    a = n.filter((function(t) {
                                        return t.correct
                                    }));
                                n = [].concat(O(a), O(o));
                                var i = t.props.host.standings ? JSON.parse(JSON.stringify(t.props.host.standings)) : [],
                                    s = i.map((function(t) {
                                        return t.name
                                    })),
                                    c = 0;
                                n.forEach((function(e, o) {
                                    (0 === o || e.correct && e.time !== n[o - 1].time || !e.correct && n[o - 1].correct) && (c += 1), n[o].questionPlace = c;
                                    var a = t.state.numClients + 1 - c;
                                    1 === c ? a += 3 : 2 === c && (a += 1), r.includes(e.answer) || (a = 0), n[o].questionPoints = a;
                                    var u = s.indexOf(e.name); - 1 !== u ? (n[o].points = a + i[u].points, s.splice(u, 1), i.splice(u, 1)) : n[o].points = a
                                })), i.forEach((function(t) {
                                    n.push({
                                        name: t.name,
                                        blook: t.blook,
                                        correct: !1,
                                        time: -1,
                                        questionPlace: c,
                                        questionPoints: 0,
                                        points: t.points || 0
                                    })
                                })), n.sort((function(t, e) {
                                    var r = e.points - t.points;
                                    return 0 === r ? t.time - e.time : r
                                })), c = 0, n.forEach((function(t, r) {
                                    0 !== r && t.points === n[r - 1].points || (c += 1), n[r].place = c, t.blook && (e[t.name] = {
                                        b: t.blook,
                                        co: t.correct || !1,
                                        t: t.time || 0,
                                        qPl: t.questionPlace,
                                        qP: t.questionPoints || 0,
                                        pl: c,
                                        p: t.points || 0
                                    })
                                })), t.props.setClassicResults(t.state.numClients, n), t.props.firebase.setVal({
                                    id: t.props.host.id,
                                    path: "c",
                                    val: e
                                }, (function() {
                                    t.props.firebase.setStage({
                                        id: t.props.host.id,
                                        stage: "cres"
                                    }, (function() {
                                        t.ok = !0, t.props.history.push("/host/classic/results")
                                    }))
                                }))
                            }), 200)
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
                        return this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions ? o.a.createElement("div", {
                            className: m.a.body
                        }, o.a.createElement(_.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(d.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
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
                        })) : o.a.createElement(u.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            R.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    standings: c.a.array,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setClassicResults: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(a.b)({
                    setClassicResults: f,
                    setMuted: p.a,
                    deleteHost: h.d
                }, t)
            }))(Object(w.d)(R)))
        },
        Ynp4: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("1F66"),
                f = r.n(l),
                p = r("ZRP+"),
                h = r("4HzQ"),
                d = r("TSYQ"),
                y = r.n(d),
                m = r("HbJ1"),
                _ = r("VgyX"),
                v = r("kQZX"),
                b = r("Xst1"),
                g = r.n(b),
                w = r("Lkbc"),
                x = r.n(w),
                O = r("XTAU"),
                j = r("0oXL"),
                E = r("74sb"),
                C = r("+fLB");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function P(t, e) {
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
                    e % 2 ? P(Object(r), !0).forEach((function(e) {
                        T(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(e) {
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

            function L(t, e) {
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

            function I(t) {
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
                    return q(this, r)
                }
            }

            function q(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
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
            var A = function(t) {
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
                }(i, t);
                var e, r, n, a = I(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        display: [],
                        preShowPoints: !1,
                        showPoints: !1,
                        move: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.here = !0, e.next = e.next.bind(R(e)), e.changeMuted = e.changeMuted.bind(R(e)), e
                }
                return e = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.question) {
                            var e = JSON.parse(JSON.stringify(this.props.host.standings)),
                                r = JSON.parse(JSON.stringify(this.props.host.standings));
                            r.sort((function(t, e) {
                                var r = t.questionPlace - e.questionPlace;
                                return 0 === r ? t.time - e.time : r
                            })), this.setState({
                                display: r.slice(0, 5).map((function(t) {
                                    return S(S({}, t), {}, {
                                        points: t.points - t.questionPoints,
                                        totalPoints: t.points
                                    })
                                }))
                            }, (function() {
                                t.pointsTimeout = setTimeout((function() {
                                    t.here && t.setState({
                                        preShowPoints: !0
                                    }, (function() {
                                        t.pointsTimeout = setTimeout((function() {
                                            t.here && (t.setState({
                                                showPoints: !0
                                            }), t.pointsTimeout = setTimeout((function() {
                                                t.interval = setInterval((function() {
                                                    var e = JSON.parse(JSON.stringify(t.state.display));
                                                    e.forEach((function(r, n) {
                                                        r.points < r.totalPoints ? e[n].points += 1 : 0 === n && clearInterval(t.interval)
                                                    })), t.here && t.setState({
                                                        display: e
                                                    })
                                                }), Math.max(5, t.state.display.length > 0 && t.state.display[0] && t.state.display[0].questionPoints ? 1200 / t.state.display[0].questionPoints : 5))
                                            }), 1e3), t.moveTimeout = setTimeout((function() {
                                                t.here && t.setState({
                                                    display: e.slice(0, 5),
                                                    move: !0
                                                })
                                            }), 3e3))
                                        }), 500)
                                    }))
                                }), 3e3)
                            })), this.exitTimeout = setTimeout((function() {
                                t.here && t.setState({
                                    display: []
                                }, (function() {
                                    t.transitionTimeout = setTimeout((function() {
                                        t.next()
                                    }), 1500)
                                }))
                            }), 9e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "crdy"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/get-ready")
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
                        var t = this;
                        return this.props.host && this.props.host.standings && this.props.host.question ? o.a.createElement("div", {
                            className: g.a.hostBody
                        }, o.a.createElement(O.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(v.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Standings",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: x.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.next
                        }, "Next"), o.a.createElement(f.a, {
                            data: this.state.display,
                            keyAccessor: function(t) {
                                return t.name
                            },
                            start: function(t, e) {
                                return {
                                    opacity: 1e-6,
                                    x: 100,
                                    y: 13 * (e + 1) - 44
                                }
                            },
                            enter: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 1) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            update: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 1) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            leave: function(t, e) {
                                return {
                                    opacity: [1e-6],
                                    x: [-160],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * e,
                                        ease: p.a
                                    }
                                }
                            }
                        }, (function(e) {
                            return o.a.createElement("div", {
                                className: x.a.nodesContainer
                            }, e.map((function(e) {
                                var r = e.key,
                                    n = e.data,
                                    a = e.state,
                                    i = a.x,
                                    s = a.y,
                                    c = a.opacity;
                                return o.a.createElement("div", {
                                    className: x.a.standingContainer,
                                    style: {
                                        opacity: c,
                                        transform: "translate(".concat(i, "vw, ").concat(s, "vh)")
                                    },
                                    key: r
                                }, o.a.createElement("div", {
                                    className: x.a.placeText
                                }, t.state.move ? n.place : n.questionPlace), o.a.createElement("div", {
                                    className: x.a.superPlaceText
                                }, Object(E.h)(t.state.move ? n.place : n.questionPlace)), o.a.createElement(j.a, {
                                    name: n.blook,
                                    className: x.a.blookBox
                                }), o.a.createElement(h.Textfit, {
                                    className: x.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(E.D)("5vh")
                                }, n.name), o.a.createElement("div", {
                                    className: y()(x.a.pointsText, T({}, x.a.fadeIn, t.state.showPoints), T({}, x.a.fadeOut, t.state.preShowPoints && !t.state.showPoints)),
                                    style: {
                                        fontSize: t.state.showPoints || !n.correct ? "5.35vh" : "4.5vh"
                                    }
                                }, t.state.showPoints ? Object(E.o)(n.points) : n.correct ? "".concat((n.time / 1e3).toFixed(3), "s") : o.a.createElement("i", {
                                    className: "fas fa-times"
                                })), o.a.createElement("div", {
                                    className: y()(x.a.addText, t.state.move ? x.a.fadeOut : x.a.fadeIn)
                                }, "+".concat(n.questionPoints)))
                            })))
                        }))) : o.a.createElement(u.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && L(e.prototype, r), n && L(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            A.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    standings: c.a.array,
                    numberOfQuestions: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(a.b)({
                    setMuted: m.a,
                    deleteHost: _.d
                }, t)
            }))(Object(C.d)(A)))
        },
        bwEY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("TSYQ"),
                f = r.n(l),
                p = r("H1WH"),
                h = r("ZrUs"),
                d = r("Rnav"),
                y = r("XTAU"),
                m = r("7uOW"),
                _ = r("Xst1"),
                v = r.n(_),
                b = r("Lb+f"),
                g = r.n(b),
                w = r("ozTy"),
                x = r("+fLB"),
                O = r("74sb");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new O(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(C([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == j(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = C, O.prototype = {
                    constructor: O,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function C(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function k(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }

            function T(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && P(t, e)
                }(c, t);
                var e, r, n, a, i, s = S(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        transitioning: !1,
                        tip: Object(w.a)()
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = E().mark((function t() {
                        var e = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(O.c)(), t.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "cres":
                                                e.props.history.push("/play/classic/answer/result");
                                                break;
                                            case "cstd":
                                                e.props.history.push("/play/classic/standings");
                                                break;
                                            case "cfin":
                                                e.props.history.push("/play/classic/final");
                                                break;
                                            case "crdy":
                                                e.props.history.push("/play/classic/get-ready");
                                                break;
                                            case null:
                                                e.props.deleteClient(), e.props.history.push("/play")
                                        }
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                C(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                C(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(O.u)(), clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client ? o.a.createElement("div", {
                            className: p.isMobile ? v.a.mBody : v.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(y.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(d.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement("div", {
                            className: v.a.regularBody
                        }, o.a.createElement(m.a, {
                            header: "Answer Sent!",
                            blook: this.props.client.blook,
                            transition: this.state.transitioning
                        }), o.a.createElement("div", {
                            className: f()(v.a.bottomTipText, (t = {}, e = g.a.textFade, r = this.state.transitioning, e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r, t))
                        }, this.state.tip), o.a.createElement("div", {
                            className: this.state.transitioning ? g.a.fade : g.a.fadeWaiting
                        }))) : o.a.createElement(u.a, {
                            to: "/play"
                        });
                        var t, e, r
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    blook: c.a.string,
                    question: c.a.object,
                    questions: c.a.array,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: h.a
                }, t)
            }))(Object(x.d)(N)))
        },
        d0x8: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__header___doxi2-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___2Yprs-camelCase,.styles__header___doxi2-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;-webkit-animation:styles__fadeIn___1fKjO-camelCase .3s linear .3s forwards;animation:styles__fadeIn___1fKjO-camelCase .3s linear .3s forwards}.styles__container___2Yprs-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___2m9aR-camelCase{bottom:20%;flex-flow:row wrap;-webkit-animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.3s forwards}.styles__correctAnswers___2m9aR-camelCase,.styles__pointsText___1b2dm-camelCase{font-size:30px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;align-items:center;justify-content:center;opacity:0}.styles__pointsText___1b2dm-camelCase{bottom:5%;-webkit-animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.8s forwards;animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.8s forwards}.styles__background___MIkK6-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___1fKjO-camelCase .3s linear 0s forwards;animation:styles__fadeIn___1fKjO-camelCase .3s linear 0s forwards}@-webkit-keyframes styles__fadeIn___1fKjO-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1fKjO-camelCase{0%{opacity:0}to{opacity:1}}", ""]), e.locals = {
                header: "styles__header___doxi2-camelCase",
                container: "styles__container___2Yprs-camelCase",
                fadeIn: "styles__fadeIn___1fKjO-camelCase",
                correctAnswers: "styles__correctAnswers___2m9aR-camelCase",
                pointsText: "styles__pointsText___1b2dm-camelCase",
                background: "styles__background___MIkK6-camelCase"
            }
        },
        eWHQ: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("1F66"),
                f = r.n(l),
                p = r("ZRP+"),
                h = r("4HzQ"),
                d = r("H1WH"),
                y = r("TSYQ"),
                m = r.n(y),
                _ = r("iY5W"),
                v = r("ZrUs"),
                b = r("Rnav"),
                g = r("XTAU"),
                w = r("Xst1"),
                x = r.n(w),
                O = r("4vHg"),
                j = r.n(O),
                E = r("0oXL"),
                C = r("74sb"),
                k = r("+fLB");

            function P(t) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
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
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new O(n || []);
                    return a._invoke = function(t, e, r) {
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
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == P(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function O(t) {
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
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = j, O.prototype = {
                    constructor: O,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function T(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(r), !0).forEach((function(e) {
                        N(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function N(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t) {
                return function(t) {
                    if (Array.isArray(t)) return q(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return q(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function R(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function B(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function A(t, e) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function D(t) {
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
                    return M(this, r)
                }
            }

            function M(t, e) {
                if (e && ("object" === P(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function H(t) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var F = function(t) {
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
                    }), e && A(t, e)
                }(c, t);
                var e, r, n, a, i, s = D(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        display: [],
                        preShowPoints: !1,
                        showPoints: !1,
                        move: !1
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = S().mark((function t() {
                        var e, r, n, o, a, i = this;
                        return S().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.name && this.props.client.standing) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(C.c)(), t.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 5:
                                    if (this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                            var e = t.val();
                                            if (e)
                                                if (3 === e.split("-").length) {
                                                    var r = e.split("-"),
                                                        n = i.props.client.questions.map((function(t) {
                                                            return t.number
                                                        })).indexOf(parseInt(r[1], 10));
                                                    if (n < 0) return;
                                                    for (var o = JSON.parse(JSON.stringify(i.props.client.questions[n])), a = I(o.answers), s = r[2].split(""), c = 0; c < a.length; c++) o.answers[s[c]] = a[c];
                                                    i.props.getQuestion(o), i.props.history.push("/play/classic/question")
                                                } else "cfin" === e ? i.props.history.push("/play/classic/final") : "crdy" === e ? i.props.history.push("/play/classic/get-ready") : "cres" === e && i.props.history.push("/play/classic/answer/result");
                                            else i.props.deleteClient(), i.props.history.push("/play")
                                        })), e = JSON.parse(JSON.stringify(this.props.client.standing)), (r = JSON.parse(JSON.stringify(e))).sort((function(t, e) {
                                            var r = t.questionPlace - e.questionPlace;
                                            return 0 === r ? t.time - e.time : r
                                        })), -1 !== (n = r.map((function(t) {
                                            return t.name
                                        })).indexOf(this.props.client.name))) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 13:
                                    o = r.length, a = 0 === n ? [0, 3] : n === o - 1 ? [Math.max(0, n - 2), o] : [n - 1, n + 2], this.setState({
                                        display: r.slice(a[0], a[1]).map((function(t) {
                                            return L(L({}, t), {}, {
                                                points: t.points - t.questionPoints,
                                                totalPoints: t.points
                                            })
                                        }))
                                    }, (function() {
                                        i.pointsTimeout = setTimeout((function() {
                                            i.setState({
                                                preShowPoints: !0
                                            }, (function() {
                                                i.pointsTimeout = setTimeout((function() {
                                                    i.setState({
                                                        showPoints: !0
                                                    }), i.pointsTimeout = setTimeout((function() {
                                                        i.interval = setInterval((function() {
                                                            var t = JSON.parse(JSON.stringify(i.state.display));
                                                            t.forEach((function(e, r) {
                                                                e.points < e.totalPoints ? t[r].points += 1 : 0 === r && clearInterval(i.interval)
                                                            })), i.setState({
                                                                display: t
                                                            })
                                                        }), Math.max(5, i.state.display.length > 0 && i.state.display[0] && i.state.display[0].questionPoints ? 1200 / i.state.display[0].questionPoints : 5))
                                                    }), 1e3), i.moveTimeout = setTimeout((function() {
                                                        n = e.map((function(t) {
                                                            return t.name
                                                        })).indexOf(i.props.client.name), o = e.length, a = 0 === n ? [0, 3] : n === o - 1 ? [Math.max(0, n - 2), o] : [n - 1, n + 2], i.setState({
                                                            display: e.slice(a[0], a[1]),
                                                            move: !0
                                                        })
                                                    }), 3e3)
                                                }), 500)
                                            }))
                                        }), 3e3)
                                    })), this.exitTimeout = setTimeout((function() {
                                        i.setState({
                                            display: []
                                        })
                                    }), 1e4);
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                R(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                R(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(C.u)(), clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.client && this.props.client.name ? o.a.createElement("div", {
                            className: d.isMobile ? x.a.mBody : x.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(g.a, {
                            title: "Play Race | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(b.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement(f.a, {
                            data: this.state.display,
                            keyAccessor: function(t) {
                                return t.name
                            },
                            start: function(t, e) {
                                return {
                                    opacity: 1e-6,
                                    x: 100,
                                    y: 13 * (e + 2) - 44
                                }
                            },
                            enter: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 2) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            update: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 2) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            leave: function(t, e) {
                                return {
                                    opacity: [1e-6],
                                    x: [-160],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * e,
                                        ease: p.a
                                    }
                                }
                            }
                        }, (function(e) {
                            return o.a.createElement("div", {
                                className: j.a.nodesContainer
                            }, e.map((function(e) {
                                var r = e.key,
                                    n = e.data,
                                    a = e.state,
                                    i = a.x,
                                    s = a.y,
                                    c = a.opacity;
                                return o.a.createElement("div", {
                                    className: j.a.standingHolder,
                                    style: {
                                        opacity: c,
                                        transform: "translate(".concat(i, "vw, ").concat(s, "vh)")
                                    },
                                    key: r
                                }, o.a.createElement("div", {
                                    className: j.a.standingContainer
                                }, o.a.createElement("div", {
                                    className: j.a.placeText
                                }, t.state.move ? n.place : n.questionPlace), o.a.createElement("div", {
                                    className: j.a.superPlaceText
                                }, Object(C.h)(t.state.move ? n.place : n.questionPlace)), o.a.createElement(E.a, {
                                    name: n.blook,
                                    className: j.a.blookBox
                                }), o.a.createElement(h.Textfit, {
                                    className: j.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(C.D)("5vh")
                                }, n.name), o.a.createElement("div", {
                                    className: m()(j.a.pointsText, N({}, j.a.fadeIn, t.state.showPoints), N({}, j.a.fadeOut, t.state.preShowPoints && !t.state.showPoints))
                                }, t.state.showPoints ? Object(C.o)(n.points) : n.correct ? "".concat((n.time / 1e3).toFixed(3), "s") : o.a.createElement("i", {
                                    className: "fas fa-times"
                                })), o.a.createElement("div", {
                                    className: m()(j.a.addText, t.state.move ? j.a.fadeOut : j.a.fadeIn)
                                }, "+".concat(n.questionPoints))))
                            })))
                        }))) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && B(e.prototype, r), n && B(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            F.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    answer: c.a.string,
                    raceResult: c.a.array,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object,
                    standing: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: v.a,
                    getQuestion: _.a
                }, t)
            }))(Object(k.d)(F)))
        },
        fkpy: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("HbJ1"),
                f = r("VgyX"),
                p = r("kQZX"),
                h = r("Xst1"),
                d = r.n(h),
                y = r("XTAU"),
                m = r("3Ak+"),
                _ = r("+fLB");

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e) {
                return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    return x(this, r)
                }
            }

            function x(t, e) {
                if (e && ("object" === v(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return O(t)
            }

            function O(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && g(t, e)
                }(i, t);
                var e, r, n, a = w(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.next = e.next.bind(O(e)), e.changeMuted = e.changeMuted.bind(O(e)), e.endGame = e.endGame.bind(O(e)), e
                }
                return e = i, (r = [{
                    key: "componentWillUnmount",
                    value: function() {
                        !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.host.question.number === this.props.host.questions.length ? this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "cfin"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/final")
                        })) : this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "cstd"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/standings")
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
                    key: "endGame",
                    value: function() {
                        var t = this;
                        this.props.firebase.setStage({
                            id: this.props.host.id,
                            stage: "cfin"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/final")
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions ? o.a.createElement("div", {
                            className: d.a.body
                        }, o.a.createElement(y.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: this.endGame
                        }), o.a.createElement(m.a, {
                            next: this.next,
                            time: 7,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            correctAnswers: this.props.host.question.correctAnswers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            clientAnswers: this.props.host.standings.filter((function(t) {
                                return t.answer || 0 === t.answer
                            })).map((function(t) {
                                return t.answer
                            })),
                            numClients: this.props.host.numClients,
                            muted: this.state.muted,
                            canSkip: !0
                        })) : o.a.createElement(u.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && b(e.prototype, r), n && b(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            E.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    numClients: c.a.number,
                    settings: c.a.object,
                    standings: c.a.array,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(a.b)({
                    setMuted: l.a,
                    deleteHost: f.d
                }, t)
            }))(Object(_.d)(E)))
        },
        glmF: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("H1WH"),
                f = r("iY5W"),
                p = r("ZrUs"),
                h = r("Rnav"),
                d = r("XTAU"),
                y = r("Xst1"),
                m = r.n(y),
                _ = r("g0a9"),
                v = r("+fLB"),
                b = r("74sb");

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new E(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = x(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(C([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == g(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = C, E.prototype = {
                    constructor: E,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), l
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
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return O(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return O(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function j(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function E(t, e) {
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
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function S(t) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var T = function(t) {
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
                var e, r, n, a, i, s = k(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {}, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = w().mark((function t() {
                        var e = this;
                        return w().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(b.c)(), t.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var r = t.val();
                                        if (r)
                                            if (3 === r.split("-").length) {
                                                var n = r.split("-"),
                                                    o = e.props.client.questions.map((function(t) {
                                                        return t.number
                                                    })).indexOf(parseInt(n[1], 10));
                                                if (o < 0) return;
                                                for (var a = JSON.parse(JSON.stringify(e.props.client.questions[o])), i = x(a.answers), s = n[2].split(""), c = 0; c < i.length; c++) a.answers[s[c]] = i[c];
                                                e.props.getQuestion(a), e.props.history.push("/play/classic/question")
                                            } else "cstd" === r ? e.props.history.push("/play/classic/standings") : "cfin" === r ? e.props.history.push("/play/classic/final") : "cres" === r && e.props.history.push("/play/classic/answer/result");
                                        else e.props.deleteClient(), e.props.history.push("/play")
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                j(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                j(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(b.u)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.questions && this.props.client.questions[0] ? o.a.createElement("div", {
                            className: l.isMobile ? m.a.mBody : m.a.body,
                            style: {
                                backgroundColor: "#0bc2cf",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(h.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement(_.a, null))) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            T.propTypes = {
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
                    team: c.a.object,
                    questions: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: p.a,
                    getQuestion: f.a
                }, t)
            }))(Object(v.d)(T)))
        },
        iY5W: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("Ozwx");

            function o(t) {
                return {
                    type: n.a,
                    question: t
                }
            }
        },
        jbf7: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__nodesContainer___3P57S-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingContainer___3AsLr-camelCase{position:absolute;height:10vh;width:60vw;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center}.styles__placeText___q0P2X-camelCase{text-align:right;width:2.35vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___q0P2X-camelCase,.styles__superPlaceText___11Ifl-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___11Ifl-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.25vw;text-align:left}.styles__blookBox___V6Bye-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___3WBet-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:39vw}.styles__nameText___3WBet-camelCase,.styles__pointsText___38WXT-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___38WXT-camelCase{margin:auto 2vw auto auto;font-size:4.5vh;font-weight:700;text-align:right;min-width:7vw}.styles__addText___JePeu-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__nextButton___j_ImS-camelCase{background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Titan One,sans-serif;font-size:2.5vw;height:4vw;width:10vw;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:absolute;top:85px;right:20px;transition:.2s}.styles__nextButton___j_ImS-camelCase:focus,.styles__nextButton___j_ImS-camelCase:hover{transform:scale(.97)}.styles__fadeIn___k5S8d-camelCase{opacity:0;-webkit-animation:styles__fadeIn___k5S8d-camelCase .3s linear forwards;animation:styles__fadeIn___k5S8d-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeIn___k5S8d-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___k5S8d-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___1ucaE-camelCase{opacity:1;-webkit-animation:styles__fadeOut___1ucaE-camelCase .3s linear forwards;animation:styles__fadeOut___1ucaE-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeOut___1ucaE-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___1ucaE-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                nodesContainer: "styles__nodesContainer___3P57S-camelCase",
                standingContainer: "styles__standingContainer___3AsLr-camelCase",
                placeText: "styles__placeText___q0P2X-camelCase",
                superPlaceText: "styles__superPlaceText___11Ifl-camelCase",
                blookBox: "styles__blookBox___V6Bye-camelCase",
                nameText: "styles__nameText___3WBet-camelCase",
                pointsText: "styles__pointsText___38WXT-camelCase",
                addText: "styles__addText___JePeu-camelCase",
                nextButton: "styles__nextButton___j_ImS-camelCase",
                fadeIn: "styles__fadeIn___k5S8d-camelCase",
                fadeOut: "styles__fadeOut___1ucaE-camelCase"
            }
        },
        ju8O: function(t, e, r) {
            var n = r("kjH4");
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
        kjH4: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__pointsText___8_MsR-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                pointsText: "styles__pointsText___8_MsR-camelCase"
            }
        },
        m4Vc: function(t, e, r) {
            var n = r("o7zh");
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
        mWSW: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "SET_QUESTION"
        },
        mpcV: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                u = r.n(c),
                l = r("TSYQ"),
                f = r.n(l),
                p = r("H1WH"),
                h = r("E8Bj"),
                d = r("Xst1"),
                y = r.n(d),
                m = r("m4Vc"),
                _ = r.n(m),
                v = r("oQ+7"),
                b = r("XTAU"),
                g = r("XOuL"),
                w = r("74sb"),
                x = r("qnYv");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
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
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new j(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(C([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function C(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function C(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function k(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = N(t);
                    if (e) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }

            function T(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && P(t, e)
                }(c, t);
                var e, r, n, a, i, s = S(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        name: "",
                        nameError: "",
                        loading: !1,
                        className: "",
                        alreadyJoined: !1
                    }, e.classId = t.match.params.id, e.onSubmit = e.onSubmit.bind(L(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = E().mark((function t() {
                        var e, r = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if (e = t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    x.a.get("/api/classes", {
                                        params: {
                                            id: this.classId
                                        }
                                    }).then((function(t) {
                                        r.setState({
                                            className: t.data.name,
                                            alreadyJoined: !!t.data.students && t.data.students.map((function(t) {
                                                return t.id
                                            })).includes(e._id)
                                        })
                                    })).catch((function() {
                                        r.props.history.push("/404")
                                    }));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                C(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                C(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.state.loading) {
                            this.setState({
                                loading: !0
                            });
                            var r = Object(w.B)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                e.state.nameError ? e.setState({
                                    loading: !1
                                }) : x.a.put("/api/classes/join", {
                                    id: e.classId,
                                    name: e.state.name
                                }).then((function(t) {
                                    !0 === t.data.success ? e.props.history.push("/stats") : e.setState({
                                        loading: !1,
                                        nameError: t.data.msg
                                    })
                                })).catch((function(t) {
                                    console.error(t), e.setState({
                                        loading: !1,
                                        nameError: t.response.data
                                    })
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e, r, n = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? y.a.mBody : y.a.body
                        }, o.a.createElement(b.a, {
                            title: "Join Class | Blooket",
                            desc: "Use an invite link to join a Blooket class."
                        }), o.a.createElement(v.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: y.a.slantBackground
                        }), o.a.createElement("div", {
                            className: y.a.regularBody
                        }, this.state.className ? o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: _.a.container
                        }, o.a.createElement("div", {
                            className: _.a.header
                        }, "Join Class"), o.a.createElement("div", {
                            className: _.a.subheader
                        }, this.state.className), this.state.alreadyJoined ? o.a.createElement("div", {
                            className: _.a.subheader
                        }, "You are already in this class.") : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: _.a.miniHeader
                        }, "Enter your name", o.a.createElement("br", null), "(Make sure your teacher will recognize it):"), o.a.createElement("div", {
                            className: f()(_.a.inputContainer, (t = {}, j(t, _.a.inputFilled, this.state.name), j(t, _.a.inputError, this.state.nameError), t))
                        }, o.a.createElement("i", {
                            className: f()(_.a.icon, "fas fa-user", (e = {}, j(e, _.a.iconFilled, this.state.name), j(e, _.a.iconError, this.state.nameError), e))
                        }), o.a.createElement("input", {
                            className: f()(_.a.input, j({}, _.a.inputError, this.state.nameError)),
                            placeholder: "Name",
                            onChange: function(t) {
                                return n.setState({
                                    name: t.target.value.slice(0, 35),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: p.isMobile ? "" : "autofocus"
                        })), this.state.loading ? o.a.createElement(g.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Join Class",
                            className: f()(_.a.button, (r = {}, j(r, _.a.buttonFilled, this.state.name), j(r, _.a.buttonError, this.state.nameError), r)),
                            tabIndex: 0
                        }), this.state.nameError ? o.a.createElement("div", {
                            className: _.a.errorContainer
                        }, o.a.createElement("i", {
                            className: f()(_.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: _.a.errorText
                        }, this.state.nameError)) : null)) : null))
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            I.propTypes = {
                history: u.a.object,
                user: u.a.object,
                match: u.a.object
            };
            e.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(I)))
        },
        o1xO: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__fullContainer___qVeWI-camelCase{align-items:center;width:85%;margin:0 7.5% 10px;font-family:Nunito,sans-serif}.styles__fullContainer___qVeWI-camelCase,.styles__header___10sXq-camelCase{display:flex;flex-direction:column}.styles__header___10sXq-camelCase{width:100%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:30px auto 0;padding:10px 15px;box-sizing:border-box}.styles__headerText___3iLda-camelCase{color:#3a3a3a;font-size:52px;font-weight:700}.styles__headerBar___37IdV-camelCase{border-radius:5px;width:260px;height:8px}.styles__headerButtons___BkvE9-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:100%;margin:15px auto}.styles__button___1PoHi-camelCase{display:flex;flex-direction:row;align-items:center;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;color:#3a3a3a;font-weight:700;width:220px;height:50px;padding:0 15px;margin:10px;box-sizing:border-box;font-size:20px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;transition:.2s}.styles__button___1PoHi-camelCase:hover{transform:scale(.95)}.styles__buttonIcon___11KvZ-camelCase{font-size:24px;margin-right:7px}.styles__copiedNotification___2y4Z--camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__noStudentsText___2XNgE-camelCase{color:#3a3a3a;font-size:32px;font-weight:700;width:90%;margin:20px auto;text-align:center}.styles__studentsHeader___3RU3T-camelCase{color:#3a3a3a;font-size:30px;font-weight:700;width:100%;margin:10px auto}.styles__studentsContainer___1oDh1-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:20px;max-width:100%;margin:0 auto}.styles__studentInfo___1EX3a-camelCase{display:flex;flex-direction:row;align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:260px;height:50px;padding:5px 10px;box-sizing:border-box;font-size:24px;position:relative;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__studentBlook___2nyGf-camelCase{height:40px;margin-right:10px}.styles__extra___3j4jP-camelCase{display:none;position:absolute;top:100%;left:0;width:100%;height:35px;justify-content:space-between;align-items:flex-end}.styles__extra___3j4jP-camelCase,.styles__extraRow___2oaCq-camelCase{flex-direction:row}.styles__extraRow___2oaCq-camelCase{display:flex;align-items:center;width:47.5%;height:30px;padding:0 10px;box-sizing:border-box;font-size:16px;color:#3a3a3a;background-color:#fff;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);border-radius:5px;margin:2px 0;outline:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:relative;transition:.2s}.styles__extraRow___2oaCq-camelCase:focus,.styles__extraRow___2oaCq-camelCase:hover{transform:scale(.95);color:#0bc2cf}.styles__extraRowRed___2Z9-l-camelCase:focus,.styles__extraRowRed___2Z9-l-camelCase:hover{color:#ce1313}.styles__extraRowIcon___157Zo-camelCase{margin-right:7px}.styles__studentInfo___1EX3a-camelCase:hover>.styles__extra___3j4jP-camelCase{display:flex}", ""]), e.locals = {
                fullContainer: "styles__fullContainer___qVeWI-camelCase",
                header: "styles__header___10sXq-camelCase",
                headerText: "styles__headerText___3iLda-camelCase",
                headerBar: "styles__headerBar___37IdV-camelCase",
                headerButtons: "styles__headerButtons___BkvE9-camelCase",
                button: "styles__button___1PoHi-camelCase",
                buttonIcon: "styles__buttonIcon___11KvZ-camelCase",
                copiedNotification: "styles__copiedNotification___2y4Z--camelCase",
                noStudentsText: "styles__noStudentsText___2XNgE-camelCase",
                studentsHeader: "styles__studentsHeader___3RU3T-camelCase",
                studentsContainer: "styles__studentsContainer___1oDh1-camelCase",
                studentInfo: "styles__studentInfo___1EX3a-camelCase",
                studentBlook: "styles__studentBlook___2nyGf-camelCase",
                extra: "styles__extra___3j4jP-camelCase",
                extraRow: "styles__extraRow___2oaCq-camelCase",
                extraRowRed: "styles__extraRowRed___2Z9-l-camelCase",
                extraRowIcon: "styles__extraRowIcon___157Zo-camelCase"
            }
        },
        o7zh: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__container___3CYK_-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__header___xrnFr-camelCase{font-size:40px;line-height:40px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___fFYOC-camelCase{font-size:26px;margin:10px;font-weight:700}.styles__miniHeader___3giyw-camelCase,.styles__subheader___fFYOC-camelCase{font-family:Nunito,sans-serif}.styles__miniHeader___3giyw-camelCase{font-size:14px;margin:5px 30px}.styles__inputContainer___1Y8Pu-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1Y8Pu-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase[focus-within]>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputContainer___1Y8Pu-camelCase:focus-within>.styles__icon___1LE1v-camelCase{color:#0bc2cf}.styles__inputFilled___3rfUA-camelCase{border-color:#3a3a3a}.styles__inputError___33z-v-camelCase{border-color:#ce1313}.styles__icon___1LE1v-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3p2oj-camelCase{color:#3a3a3a}.styles__iconError___3Rt-G-camelCase{color:#ce1313}.styles__input___37wlC-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___37wlC-camelCase:-moz-placeholder,.styles__input___37wlC-camelCase:-ms-input-placeholder,.styles__input___37wlC-camelCase::-moz-placeholder,.styles__input___37wlC-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___1KupC-camelCase:-moz-placeholder,.styles__mInput___1KupC-camelCase:-ms-input-placeholder,.styles__mInput___1KupC-camelCase::-moz-placeholder,.styles__mInput___1KupC-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___33z-v-camelCase,.styles__inputError___33z-v-camelCase:-moz-placeholder,.styles__inputError___33z-v-camelCase:-ms-input-placeholder,.styles__inputError___33z-v-camelCase::-moz-placeholder,.styles__inputError___33z-v-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___37wlC-camelCase:focus,.styles__input___37wlC-camelCase:focus:-moz-placeholder,.styles__input___37wlC-camelCase:focus:-ms-input-placeholder,.styles__input___37wlC-camelCase:focus::-moz-placeholder,.styles__input___37wlC-camelCase:focus::-webkit-input-placeholder,.styles__mInput___1KupC-camelCase:focus,.styles__mInput___1KupC-camelCase:focus:-moz-placeholder,.styles__mInput___1KupC-camelCase:focus:-ms-input-placeholder,.styles__mInput___1KupC-camelCase:focus::-moz-placeholder,.styles__mInput___1KupC-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___3CYK_-camelCase{width:320px}.styles__inputContainer___1Y8Pu-camelCase{width:280px}.styles__input___37wlC-camelCase{width:210px}}.styles__button___SyFRq-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___SyFRq-camelCase:focus,.styles__button___SyFRq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___k9wIF-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___3PfoI-camelCase,.styles__buttonError___3PfoI-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___3PfoI-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___1G46E-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___3csY5-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1mBGe-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), e.locals = {
                container: "styles__container___3CYK_-camelCase",
                header: "styles__header___xrnFr-camelCase",
                subheader: "styles__subheader___fFYOC-camelCase",
                miniHeader: "styles__miniHeader___3giyw-camelCase",
                inputContainer: "styles__inputContainer___1Y8Pu-camelCase",
                icon: "styles__icon___1LE1v-camelCase",
                inputFilled: "styles__inputFilled___3rfUA-camelCase",
                inputError: "styles__inputError___33z-v-camelCase",
                iconFilled: "styles__iconFilled___3p2oj-camelCase",
                iconError: "styles__iconError___3Rt-G-camelCase",
                input: "styles__input___37wlC-camelCase",
                mInput: "styles__mInput___1KupC-camelCase",
                button: "styles__button___SyFRq-camelCase",
                buttonFilled: "styles__buttonFilled___k9wIF-camelCase",
                buttonError: "styles__buttonError___3PfoI-camelCase",
                errorContainer: "styles__errorContainer___1G46E-camelCase",
                errorIcon: "styles__errorIcon___3csY5-camelCase",
                errorText: "styles__errorText___1mBGe-camelCase"
            }
        },
        "oq/Q": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("55Ip"),
                f = r("H1WH"),
                p = r("TSYQ"),
                h = r.n(p),
                d = r("Xst1"),
                y = r.n(d),
                m = r("9ddr"),
                _ = r.n(m),
                v = r("VgLj"),
                b = r("XTAU"),
                g = r("ca/f"),
                w = r("0oXL"),
                x = r("E8Bj"),
                O = r("A92q"),
                j = r("qnYv");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C(t) {
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

            function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                P = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new O(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return C()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function O(t) {
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
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = j, O.prototype = {
                    constructor: O,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function S(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
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

            function L(t, e) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function N(t) {
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
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return q(t)
            }

            function q(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var B = function(t) {
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
                    }), e && L(t, e)
                }(c, t);
                var e, r, n, a, i, s = N(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        ready: !1,
                        name: "",
                        color: "",
                        students: [],
                        isDeleting: !1,
                        isEditing: !1,
                        editName: "",
                        editColor: "",
                        editError: "",
                        loading: !1,
                        justCopied: !1,
                        kickUser: null
                    }, e.classId = "", e.here = !0, e.onDeleteConfirm = e.onDeleteConfirm.bind(q(e)), e.onEdit = e.onEdit.bind(q(e)), e.onKickUser = e.onKickUser.bind(q(e)), e.copyToClipboard = e.copyToClipboard.bind(q(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = P().mark((function t() {
                        var e = this;
                        return P().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.match.params.id) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.classId = this.props.match.params.id, t.next = 5, this.props.user.getData();
                                case 5:
                                    if (t.sent) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", this.props.history.push("/login"));
                                case 8:
                                    j.a.get("/api/classes", {
                                        params: {
                                            id: this.props.match.params.id
                                        }
                                    }).then((function(t) {
                                        if (e.here) {
                                            var r = t.data;
                                            console.log(r), r && r.name ? e.setState({
                                                ready: !0,
                                                name: r.name,
                                                color: r.color,
                                                students: r.students
                                            }) : e.setState({
                                                ready: !0
                                            })
                                        }
                                    })).catch((function(t) {
                                        e.setState({
                                            ready: !0
                                        }), console.error(t)
                                    }));
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                S(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                S(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearTimeout(this.copyTimeout)
                    }
                }, {
                    key: "onDeleteConfirm",
                    value: function(t) {
                        var e = this;
                        this.state.loading || (t ? (this.setState({
                            loading: !0
                        }), j.a.delete("/api/classes", {
                            params: {
                                id: this.classId
                            }
                        }).then((function() {
                            e.here && e.props.history.push("/dashboard?p=Classes")
                        })).catch((function(t) {
                            console.error(t)
                        }))) : this.setState({
                            isDeleting: !1
                        }))
                    }
                }, {
                    key: "onEdit",
                    value: function(t) {
                        var e = this;
                        t && t.preventDefault(), this.state.loading || (this.state.editName ? (this.setState({
                            loading: !0
                        }), j.a.put("/api/classes/edit", {
                            id: this.classId,
                            name: this.state.editName,
                            color: this.state.editColor
                        }).then((function(t) {
                            e.here && e.setState({
                                name: t.data.name,
                                color: t.data.color,
                                isEditing: !1,
                                loading: !1
                            })
                        })).catch((function(t) {
                            e.here && (console.error(t), e.setState({
                                isEditing: !1,
                                loading: !1
                            }))
                        }))) : this.setState({
                            editError: "You need a class name."
                        }))
                    }
                }, {
                    key: "onKickUser",
                    value: function() {
                        var t = this;
                        this.state.loading || (this.setState({
                            loading: !0
                        }), j.a.put("/api/classes/remove", {
                            id: this.classId,
                            studentId: this.state.kickUser.id
                        }).then((function() {
                            if (t.here) {
                                var e = C(t.state.students),
                                    r = e.indexOf(t.state.kickUser); - 1 !== r && e.splice(r, 1), t.setState({
                                    loading: !1,
                                    kickUser: null,
                                    students: e
                                })
                            }
                        })).catch((function(e) {
                            console.error(e), t.setState({
                                loading: !1,
                                kickUser: null
                            })
                        })))
                    }
                }, {
                    key: "copyToClipboard",
                    value: function() {
                        var t = this,
                            e = document.createElement("textarea");
                        e.value = "https://www.blooket.com/class/join/".concat(this.classId), e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e);
                        var r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        e.select(), document.execCommand("copy"), document.body.removeChild(e), r && (document.getSelection().removeAllRanges(), document.getSelection().addRange(r)), clearTimeout(this.copyTimeout), this.setState({
                            justCopied: !0
                        }, (function() {
                            t.copyTimeout = setTimeout((function() {
                                t.setState({
                                    justCopied: !1
                                })
                            }), 1500)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.match.params.id ? this.state.ready && !this.state.name ? o.a.createElement(u.a, {
                            to: "/404"
                        }) : o.a.createElement("div", {
                            className: f.isMobile ? y.a.mBody : y.a.body
                        }, o.a.createElement(b.a, {
                            title: "".concat(this.state.ready ? this.state.name : "Class", " | Blooket"),
                            desc: "Manage your class by adding students and tracking their progress or assigning live games and homework."
                        }), o.a.createElement(v.a, {
                            history: this.props.history,
                            page: "Dashboard"
                        }), o.a.createElement("div", {
                            className: y.a.regularBodyMax
                        }, this.state.ready ? o.a.createElement("div", {
                            className: _.a.fullContainer
                        }, o.a.createElement("div", {
                            className: _.a.header
                        }, o.a.createElement("div", {
                            className: _.a.headerText
                        }, this.state.name), o.a.createElement("div", {
                            className: _.a.headerBar,
                            style: {
                                backgroundColor: this.state.color
                            }
                        })), o.a.createElement("div", {
                            className: _.a.headerButtons
                        }, o.a.createElement("div", {
                            className: _.a.button,
                            style: {
                                color: "#fff",
                                backgroundColor: this.state.color
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.copyToClipboard
                        }, o.a.createElement("i", {
                            className: h()("fas fa-plus-square", _.a.buttonIcon)
                        }), "Invite Link", this.state.justCopied ? o.a.createElement("div", {
                            className: _.a.copiedNotification
                        }, "Copied!") : null), o.a.createElement("div", {
                            className: _.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isEditing: !0,
                                    editName: t.state.name,
                                    editColor: t.state.color,
                                    editError: ""
                                })
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-pencil-alt", _.a.buttonIcon)
                        }), "Edit Class Info"), o.a.createElement("div", {
                            className: _.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.setState({
                                    isDeleting: !0
                                })
                            }
                        }, o.a.createElement("i", {
                            className: h()("fas fa-trash-alt", _.a.buttonIcon)
                        }), "Delete Class"), o.a.createElement(l.b, {
                            className: _.a.button,
                            to: "/dashboard?p=Classes"
                        }, o.a.createElement("i", {
                            className: h()("fas fa-reply", _.a.buttonIcon)
                        }), "Back to Classes")), this.state.students.length > 0 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: _.a.studentsHeader
                        }, "Students"), o.a.createElement("div", {
                            className: _.a.studentsContainer
                        }, this.state.students.map((function(e) {
                            return o.a.createElement("div", {
                                className: _.a.studentInfo,
                                key: e.name
                            }, o.a.createElement(w.a, {
                                name: e.blook,
                                className: _.a.studentBlook
                            }), e.name, o.a.createElement("div", {
                                className: _.a.extra
                            }, o.a.createElement("a", {
                                className: _.a.extraRow,
                                href: "https://www.blooket.com/stats?id=".concat(e.id),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, o.a.createElement("i", {
                                className: h()(_.a.extraRowIcon, "fas fa-eye")
                            }), "View"), o.a.createElement("div", {
                                className: h()(_.a.extraRow, _.a.extraRowRed),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.setState({
                                        kickUser: e
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: h()(_.a.extraRowIcon, "fas fa-user-slash")
                            }), "Kick")))
                        })))) : o.a.createElement("div", {
                            className: _.a.noStudentsText
                        }, "No Students Yet")) : null), this.state.isDeleting ? o.a.createElement(g.a, {
                            text: "Do you really want to delete this class?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return t.onDeleteConfirm(!0)
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.onDeleteConfirm(!1)
                                },
                                color: "blue"
                            }
                        }) : this.state.isEditing ? o.a.createElement(g.a, {
                            text: "Edit the class name and/or color:",
                            loading: this.state.loading,
                            stringValue: this.state.editName,
                            stringChange: function(e) {
                                return t.setState({
                                    editName: e.target.value.slice(0, O.a),
                                    editError: ""
                                })
                            },
                            colorChange: function(e) {
                                return t.setState({
                                    editColor: e
                                })
                            },
                            colorValue: this.state.editColor,
                            onSubmit: this.onEdit,
                            error: this.state.editError,
                            buttonOne: {
                                text: "Edit",
                                click: this.onEdit,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return t.setState({
                                        isEditing: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.kickUser ? o.a.createElement(g.a, {
                            text: "Kick ".concat(this.state.kickUser.name, " from the class?"),
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return t.onKickUser()
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.setState({
                                        kickUser: null
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(u.a, {
                            to: "/login"
                        })
                    }
                }]) && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            B.propTypes = {
                match: c.a.object,
                history: c.a.object.isRequired,
                user: c.a.object
            };
            e.a = Object(x.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(B)))
        },
        qyYI: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("mWSW");

            function f(t) {
                return {
                    type: l.a,
                    question: t
                }
            }
            var p = r("HbJ1"),
                h = r("VgyX"),
                d = r("kQZX"),
                y = r("Xst1"),
                m = r.n(y),
                _ = r("XTAU"),
                v = r("mNpU"),
                b = r("74sb"),
                g = r("+fLB");

            function w(t) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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

            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(r), !0).forEach((function(e) {
                        j(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return C(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(t, e) {
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

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = N(t);
                    if (e) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }

            function T(t, e) {
                if (e && ("object" === w(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && P(t, e)
                }(i, t);
                var e, r, n, a = S(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.question = {}, e.answerString = "", e.next = e.next.bind(L(e)), e.changeMuted = e.changeMuted.bind(L(e)), e
                }
                return e = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.props.host && this.props.host.questions && !(this.props.host.question && this.props.host.question.number > this.props.host.questions.length)) {
                            var t = this.props.host.questions.map((function(t) {
                                return t.number
                            })).indexOf(this.props.host.question ? this.props.host.question.number + 1 : 1);
                            if (-1 !== t) {
                                var e = this.props.host.questions[t],
                                    r = E(e.answers);
                                e.random && (r = Object(b.w)(r));
                                var n = O(O({}, e), {}, {
                                    answers: r
                                });
                                this.props.setQuestion(n);
                                for (var o = [], a = 0; a < e.answers.length; a++) o.push(r.indexOf(e.answers[a]));
                                this.answerString = o.join(""), this.question = n
                            }
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.firebase.setStage({
                            id: this.props.host.id,
                            clearAnswers: !0,
                            stage: "q-".concat(this.question.stdNumber, "-").concat(this.answerString)
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/question")
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
                        return !this.props.host || !this.props.host.questions || this.props.host.question && this.props.host.question.number > this.props.host.questions.length ? o.a.createElement(u.a, {
                            to: "/dashboard"
                        }) : o.a.createElement("div", {
                            className: m.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(_.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(d.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question ? this.props.host.question.number : 1, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement(v.a, {
                            normal: 1 === (this.props.host.question ? this.props.host.question.number : 1),
                            done: this.next
                        })))
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            I.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    muted: c.a.bool
                }),
                firebase: c.a.object,
                history: c.a.object,
                setQuestion: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(a.b)({
                    setQuestion: f,
                    setMuted: p.a,
                    deleteHost: h.d
                }, t)
            }))(Object(g.d)(I)))
        },
        rfo6: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__header___1mCVl-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__container___2A6Gp-camelCase{display:grid;align-items:flex-start;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:10px 5%}.styles__classInside___wK79a-camelCase{width:255px;min-height:190px;display:flex;flex-direction:column;justify-content:space-between;color:#fff}.styles__name___2jSjK-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 30px;word-wrap:break-word}.styles__studentsText___1sgEM-camelCase{font-size:20px;margin:0 5%;text-align:right}.styles__addButtonInside___2jU2--camelCase{width:200px;height:30px;display:flex;flex-direction:row;align-items:center;color:#3a3a3a}.styles__addIcon___Wovoi-camelCase{font-size:22px;padding:0 5px;margin-right:3px}.styles__addText___3OeFB-camelCase{font-size:24px;font-weight:700}.styles__bigContainer___2yBVm-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:95%;margin:50px auto}.styles__bigText___2TwdE-camelCase{font-family:Nunito,sans-serif;font-size:40px;line-height:44px;font-weight:700;margin:50px 5% 30px;width:90%;text-align:center;color:#3a3a3a}.styles__upgradeButtonInside___2X4bP-camelCase{width:180px;height:50px;color:#fff;font-size:30px;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}", ""]), e.locals = {
                header: "styles__header___1mCVl-camelCase",
                container: "styles__container___2A6Gp-camelCase",
                classInside: "styles__classInside___wK79a-camelCase",
                name: "styles__name___2jSjK-camelCase",
                studentsText: "styles__studentsText___1sgEM-camelCase",
                addButtonInside: "styles__addButtonInside___2jU2--camelCase",
                addIcon: "styles__addIcon___Wovoi-camelCase",
                addText: "styles__addText___3OeFB-camelCase",
                bigContainer: "styles__bigContainer___2yBVm-camelCase",
                bigText: "styles__bigText___2TwdE-camelCase",
                upgradeButtonInside: "styles__upgradeButtonInside___2X4bP-camelCase"
            }
        },
        "t/SN": function(t, e, r) {
            var n = r("rfo6");
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
        uoLs: function(t, e, r) {
            var n = r("d0x8");
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
        wMg7: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "ADD_ANSWER"
        },
        x4iN: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("VgyX"),
                f = r("Xst1"),
                p = r.n(f),
                h = r("ZVoO"),
                d = r("XTAU"),
                y = r("74sb"),
                m = r("+fLB"),
                _ = r("qnYv");

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(i = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); i = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return g(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(t, e) {
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

            function x(t, e) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = E(t);
                    if (e) {
                        var o = E(this).constructor;
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

            function E(t) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && x(t, e)
                }(i, t);
                var e, r, n, a = O(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!t.host && t.host.muted
                    }, e
                }
                return e = i, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings
                            }, (function() {
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.firebase.getDatabaseVal(e.id, "c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = b(t, 2),
                                                n = e[0],
                                                o = e[1],
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
                                                    for (var u = 0; u < o.c.length; u++) {
                                                        var l = o.c[u];
                                                        l && (c[u] = l)
                                                    } else c = o.c;
                                                else c = {};
                                            r[n] = {
                                                corrects: c,
                                                incorrects: a
                                            }
                                        })), t.props.host && t.props.host.id && (t.props.firebase.removeHost(t.props.host.id), t.props.deleteHost()), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && _.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        points: isNaN(t.points) ? 0 : Math.round(Number(t.points)),
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
                            className: p.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(h.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(t) {
                                return "".concat(Object(y.o)(t.points), " ").concat(1 === t.points ? "Point" : "Points")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null) : o.a.createElement(u.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && w(e.prototype, r), n && w(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            C.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    host: t.hosts.host,
                    gameId: t.hosts.id
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteHost: l.d
                }, t)
            }))(Object(m.d)(C)))
        },
        xBM5: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__nodesContainer___1YQHv-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingHolder___2QEW3-camelCase{position:absolute;height:10vh;width:60vw}.styles__standingContainer___2wzyc-camelCase,.styles__standingHolder___2QEW3-camelCase{display:flex;flex-direction:row;align-items:center}.styles__standingContainer___2wzyc-camelCase{margin:auto;height:100%;width:100%;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__placeText___2XMSP-camelCase{text-align:right;width:4.5vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___2XMSP-camelCase,.styles__superPlaceText___3RH71-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___3RH71-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.7vw;text-align:left}.styles__blookBox___3fb1L-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___e6Q59-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:36vw}.styles__nameText___e6Q59-camelCase,.styles__pointsText___11lPM-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___11lPM-camelCase{margin:auto 1.5vw auto auto;font-size:5.2vh;font-weight:700;text-align:right;min-width:9.5vw}.styles__addText___3OZhW-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__fadeIn___1Ftcg-camelCase{opacity:0;-webkit-animation:styles__fadeIn___1Ftcg-camelCase .3s linear forwards;animation:styles__fadeIn___1Ftcg-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeIn___1Ftcg-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1Ftcg-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___2KBPj-camelCase{opacity:1;-webkit-animation:styles__fadeOut___2KBPj-camelCase .3s linear forwards;animation:styles__fadeOut___2KBPj-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeOut___2KBPj-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___2KBPj-camelCase{0%{opacity:1}to{opacity:0}}@media only screen and (max-width:800px){.styles__nodesContainer___1YQHv-camelCase{left:7.5vw}.styles__standingHolder___2QEW3-camelCase{width:85vw}.styles__standingContainer___2wzyc-camelCase{height:80%}.styles__placeText___2XMSP-camelCase{width:8vw;font-size:6vw;margin:auto 0 auto 1vw}.styles__superPlaceText___3RH71-camelCase{margin:1vh 0 auto;font-size:3.5vw;width:5.5vw}.styles__blookBox___3fb1L-camelCase{height:5vh;margin:auto 1vw auto .5vw}.styles__nameText___e6Q59-camelCase{height:5.5vh;margin:auto 1.5vw auto 0;width:37vw}.styles__pointsText___11lPM-camelCase{margin:auto 2vw auto auto;font-size:5.6vw;min-width:20vw}.styles__addText___3OZhW-camelCase{display:none}}@media only screen and (max-width:600px){.styles__placeText___2XMSP-camelCase{font-size:8.5vw;width:11vw}.styles__superPlaceText___3RH71-camelCase{width:7vw;font-size:3.9vw}.styles__nameText___e6Q59-camelCase{height:4vh}.styles__pointsText___11lPM-camelCase{font-size:6.5vw}}", ""]), e.locals = {
                nodesContainer: "styles__nodesContainer___1YQHv-camelCase",
                standingHolder: "styles__standingHolder___2QEW3-camelCase",
                standingContainer: "styles__standingContainer___2wzyc-camelCase",
                placeText: "styles__placeText___2XMSP-camelCase",
                superPlaceText: "styles__superPlaceText___3RH71-camelCase",
                blookBox: "styles__blookBox___3fb1L-camelCase",
                nameText: "styles__nameText___e6Q59-camelCase",
                pointsText: "styles__pointsText___11lPM-camelCase",
                addText: "styles__addText___3OZhW-camelCase",
                fadeIn: "styles__fadeIn___1Ftcg-camelCase",
                fadeOut: "styles__fadeOut___2KBPj-camelCase"
            }
        },
        xYqp: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "UPDATE_CLASSIC"
        },
        xsDw: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                u = r("Ty5D"),
                l = r("TSYQ"),
                f = r.n(l),
                p = r("H1WH"),
                h = r("xYqp");

            function d(t, e, r, n) {
                return {
                    type: h.a,
                    corrects: t,
                    incorrects: e,
                    standing: r,
                    points: n
                }
            }
            var y = r("iY5W"),
                m = r("ZrUs"),
                _ = r("Rnav"),
                v = r("XTAU"),
                b = r("Xst1"),
                g = r.n(b),
                w = r("uoLs"),
                x = r.n(w),
                O = r("+fLB"),
                j = r("74sb");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

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
                        a = Object.create(o.prototype),
                        i = new O(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return k()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = g(i, r);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function u(t, e, r) {
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
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    m = y && y(y(j([])));
                m && m !== e && r.call(m, o) && (d = m);
                var _ = h.prototype = f.prototype = Object.create(d);

                function v(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    var n;
                    this._invoke = function(o, a) {
                        function i() {
                            return new e((function(n, i) {
                                ! function n(o, a, i, s) {
                                    var c = u(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == E(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, i(l)
                                        }), (function(t) {
                                            return n("throw", t, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, a, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = u(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
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

                function O(t) {
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
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
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
                return p.prototype = h, s(_, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, v(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, v(_), s(_, i, "Generator"), s(_, o, (function() {
                    return this
                })), s(_, "toString", (function() {
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
                }, t.values = j, O.prototype = {
                    constructor: O,
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
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
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
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(r), !0).forEach((function(e) {
                        S(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function S(t, e, r) {
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
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(i = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); i = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(t, e) || N(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(t) {
                return function(t) {
                    if (Array.isArray(t)) return I(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || N(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(t, e) {
                if (t) {
                    if ("string" == typeof t) return I(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? I(t, e) : void 0
                }
            }

            function I(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function q(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
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

            function B(t, e) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = M(t);
                    if (e) {
                        var o = M(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return D(this, r)
                }
            }

            function D(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function M(t) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var H = function(t) {
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
                    }), e && B(t, e)
                }(c, t);
                var e, r, n, a, i, s = A(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        points: 0,
                        totalPoints: t.client ? t.client.points : 0,
                        place: 0,
                        isCorrect: !1,
                        correctAnswers: [],
                        ready: !1,
                        isDataSet: !1
                    }, e.here = !0, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = C().mark((function t() {
                        var e = this;
                        return C().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(j.c)(), t.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var r = t.val();
                                        if (r)
                                            if (3 === r.split("-").length) {
                                                var n = r.split("-"),
                                                    o = e.props.client.questions.map((function(t) {
                                                        return t.number
                                                    })).indexOf(parseInt(n[1], 10));
                                                if (o < 0) return;
                                                for (var a = JSON.parse(JSON.stringify(e.props.client.questions[o])), i = L(a.answers), s = n[2].split(""), c = 0; c < i.length; c++) a.answers[s[c]] = i[c];
                                                e.props.getQuestion(a), e.props.history.push("/play/classic/question")
                                            } else "cstd" === r ? e.props.history.push("/play/classic/standings") : "cfin" === r ? e.props.history.push("/play/classic/final") : "crdy" === r && e.props.history.push("/play/classic/get-ready");
                                        else e.props.deleteClient(), e.props.history.push("/play")
                                    })), this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(t) {
                                        if (t) {
                                            var r = !!e.props.client.question && e.props.client.question.correctAnswers.includes(e.props.client.answer);
                                            if (e.here) {
                                                e.setState({
                                                    isCorrect: r,
                                                    correctAnswers: e.props.client.question ? e.props.client.question.correctAnswers : null
                                                });
                                                var n = Object.entries(t).map((function(t) {
                                                    var e = T(t, 2),
                                                        r = e[0],
                                                        n = e[1];
                                                    return {
                                                        name: r,
                                                        blook: n.b,
                                                        questionPoints: n.qP,
                                                        questionPlace: n.qPl,
                                                        points: n.p,
                                                        place: n.pl,
                                                        time: n.t,
                                                        correct: n.co
                                                    }
                                                })).filter((function(t) {
                                                    return t.points || 0 === t.points
                                                }));
                                                n.sort((function(t, e) {
                                                    var r = t.place - e.place;
                                                    return 0 === r ? t.time - e.time : r
                                                }));
                                                var o = n.map((function(t) {
                                                    return t.name
                                                })).indexOf(e.props.client.name); - 1 !== o && (e.props.client.gotPoints || (r ? e.props.updateClassic(e.props.client.question ? P(P({}, e.props.client.corrects), {}, S({}, e.props.client.question.number, 1)) : e.props.client.corrects, e.props.client.incorrects, n, n[o].points) : e.props.updateClassic(e.props.client.corrects, e.props.client.question ? P(P({}, e.props.client.incorrects), {}, S({}, e.props.client.question.number, 1)) : e.props.client.incorrects, n, e.props.client.points), e.here && e.setState({
                                                    points: n[o].questionPoints,
                                                    place: n[o].questionPlace,
                                                    isDataSet: !0
                                                }, (function() {
                                                    e.waitTimeout = setTimeout((function() {
                                                        var t = e.state.totalPoints;
                                                        e.pointsInterval = setInterval((function() {
                                                            t < n[o].points && e.here ? (t += 1, e.setState({
                                                                totalPoints: t
                                                            })) : clearInterval(e.pointsInterval)
                                                        }), 30)
                                                    }), 3e3)
                                                }))))
                                            }
                                        }
                                    })), this.readyTimeout = setTimeout((function() {
                                        e.here && e.setState({
                                            ready: !0
                                        })
                                    }), 1e3);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(t, e);

                            function i(t) {
                                q(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                q(o, r, n, i, s, "throw", t)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(j.u)(), clearTimeout(this.readyTimeout), clearTimeout(this.setTimeout), clearTimeout(this.waitTimeout), clearInterval(this.pointsInterval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client ? o.a.createElement("div", {
                            className: p.isMobile ? g.a.mBody : g.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(_.a, {
                            name: this.props.client.name,
                            rightText: -1 !== this.state.totalPoints ? this.state.totalPoints : this.props.client.points
                        }), this.state.ready && this.state.isDataSet ? o.a.createElement("div", {
                            className: f()(g.a.regularBody, x.a.background),
                            style: {
                                backgroundColor: this.state.isCorrect ? "#4bc22e" : "#c43a35"
                            }
                        }, o.a.createElement("div", {
                            className: x.a.header
                        }, this.state.isCorrect ? "CORRECT" : "INCORRECT"), o.a.createElement("div", {
                            className: x.a.container
                        }, o.a.createElement("i", {
                            className: this.state.isCorrect ? "fas fa-check" : "fas fa-times"
                        })), this.state.isCorrect ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: x.a.correctAnswers
                        }, "".concat(this.state.place).concat(Object(j.h)(this.state.place), " Place")), o.a.createElement("div", {
                            className: x.a.pointsText
                        }, "+".concat(this.state.points, " Points"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: x.a.correctAnswers
                        }, "Correct ".concat(1 === this.state.correctAnswers.length ? "Answer" : "Answers", ": "), Object(j.f)(this.state.correctAnswers, "#fff", 28)), o.a.createElement("div", {
                            className: x.a.pointsText
                        }, "+0 Points"))) : null) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && R(e.prototype, r), n && R(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            H.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    mode: c.a.string,
                    time: c.a.number,
                    team: c.a.object,
                    gotPoints: c.a.bool
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                updateClassic: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                firebase: c.a.object
            };
            e.a = Object(u.g)(Object(i.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(a.b)({
                    deleteClient: m.a,
                    updateClassic: d,
                    getQuestion: y.a
                }, t)
            }))(Object(O.d)(H)))
        },
        yFdg: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__fadeWaiting___34xT--camelCase{opacity:1}.styles__fade___3-9Ou-camelCase,.styles__fadeWaiting___34xT--camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___3-9Ou-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___1CMGt-camelCase{-webkit-animation:styles__fadeOut___zjEWv-camelCase .3s linear .5s forwards;animation:styles__fadeOut___zjEWv-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeOut___zjEWv-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___zjEWv-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                fadeWaiting: "styles__fadeWaiting___34xT--camelCase",
                fade: "styles__fade___3-9Ou-camelCase",
                textFade: "styles__textFade___1CMGt-camelCase",
                fadeOut: "styles__fadeOut___zjEWv-camelCase"
            }
        }
    }
]);