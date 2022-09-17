(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        "0eKu": function(e, t, a) {
            var n = a("BNho");
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
        "4Ao/": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("55Ip"),
                u = a("Ty5D"),
                f = a("wd/R"),
                m = a.n(f),
                h = a("TSYQ"),
                d = a.n(h),
                p = a("H1WH"),
                _ = a("E8Bj"),
                y = a("Xst1"),
                g = a.n(y),
                v = a("GZss"),
                b = a.n(v),
                w = a("i4/Q"),
                x = a("XTAU"),
                C = a("ca/f"),
                k = a("lmLo"),
                E = a("qnYv");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return E()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = b(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    _ = p && p(p(k([])));
                _ && _ !== t && a.call(_, r) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == S(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(y, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
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

            function N(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function T(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function i(e) {
                            N(o, n, r, i, s, "next", e)
                        }

                        function s(e) {
                            N(o, n, r, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function O(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = R(e);
                    if (t) {
                        var r = R(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return P(this, a)
                }
            }

            function P(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return L(e)
            }

            function L(e) {
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
                    }), t && B(e, t)
                }(s, e);
                var t, a, n, o, i = I(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = i.call(this, e)).state = {
                        user: null,
                        role: "",
                        date: "",
                        plan: "",
                        planEnd: "",
                        planRenew: !1,
                        loading: !1,
                        end: "",
                        hasPassword: ""
                    }, t.name = "", t.here = !0, t.switchRole = t.switchRole.bind(L(t)), t.editStripe = t.editStripe.bind(L(t)), t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: (o = T(j().mark((function e() {
                        var t, a = this;
                        return j().wrap((function(e) {
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
                                        user: t,
                                        role: t.role,
                                        date: m()(t.dateCreated).format("dddd, MMMM Do, YYYY"),
                                        hasPassword: t.hasPassword
                                    }), this.name = t.name, E.a.put("/api/users/plan").then((function(e) {
                                        a.setState({
                                            plan: e.data.plan,
                                            planEnd: m()(e.data.planEnd).format("dddd, MMMM Do, YYYY"),
                                            planRenew: e.data.planRenew
                                        })
                                    })).catch((function(e) {
                                        console.error(e)
                                    }));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "switchRole",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        });
                        var t = "Teacher" === this.state.role ? "Student" : "Teacher";
                        E.a.put("/api/users/setrole", {
                            name: this.name,
                            role: t
                        }).then(T(j().mark((function a() {
                            var n;
                            return j().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return e.props.user.getLoggedIn(), a.next = 3, e.props.user.getData();
                                    case 3:
                                        if (n = a.sent, e.here) {
                                            a.next = 6;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 6:
                                        e.setState({
                                            loading: !1,
                                            role: t,
                                            user: n
                                        });
                                    case 7:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))).catch((function(t) {
                            console.error(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "editStripe",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), E.a.post("/api/users/stripe/billing").then((function(e) {
                            window.open(e.data, "_self")
                        })).catch((function(t) {
                            console.error(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: p.isMobile ? g.a.mBody : g.a.body
                        }, r.a.createElement(x.a, {
                            title: "Settings | Blooket",
                            desc: "View your settings and basic information about your account. You can also request a password reset or contact the help team here."
                        }), r.a.createElement(w.a, {
                            user: this.state.user,
                            page: "Settings"
                        }), r.a.createElement("div", {
                            className: g.a.profileBody
                        }, r.a.createElement("div", {
                            className: b.a.header
                        }, "Settings"), this.state.user ? r.a.createElement("div", {
                            className: b.a.mainContainer
                        }, r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-user", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Profile")), r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("b", null, "Username:"), " ", this.state.user.name), r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("b", null, "Email:"), " ", this.state.user.email), r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("b", null, "Role:"), " ", this.state.role), r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("b", null, "Joined:"), " ", this.state.date)), r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-clipboard-list", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Plan")), r.a.createElement("div", {
                            className: b.a.subscriptionText
                        }, r.a.createElement("div", {
                            className: b.a.blooketText
                        }, "Blooket"), r.a.createElement("div", {
                            className: b.a.planText,
                            style: {
                                color: "Starter" !== this.state.plan ? "#ff7b24" : "#0bc2cf"
                            }
                        }, this.state.plan)), "Starter" === this.state.plan ? r.a.createElement(k.a, {
                            color: "#ff7b24",
                            onClick: function() {
                                return e.props.history.push("/upgrade")
                            },
                            outsideClass: b.a.upgradeButton,
                            insideClass: b.a.upgradeButtonInside
                        }, "Upgrade Now!") : ["Plus", "Plus Flex"].includes(this.state.plan) ? r.a.createElement("div", null, r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("b", null, "End Date:"), " ", this.state.planEnd), this.state.planRenew ? r.a.createElement("div", {
                            className: b.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.editStripe
                        }, "Edit Subscription") : null) : null), r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-pencil-alt", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Edit Info")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/change/name"
                        }, "Change Name")), r.a.createElement("div", null, r.a.createElement("div", {
                            className: b.a.link,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.switchRole
                        }, "Teacher" === this.state.role ? "Switch to Student Account" : "Switch to Teacher Account")), this.state.hasPassword ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/forgot"
                        }, "Request Password Reset")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/change/email"
                        }, "Change Email"))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/add-password"
                        }, "Add Blooket Password")), r.a.createElement("div", {
                            className: b.a.text
                        }, r.a.createElement("u", null, "Change Email"), " (Add a Password First)")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/delete"
                        }, "Delete Account"))), r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-comments", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Social")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: b.a.link,
                            href: "https://twitter.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Twitter (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: b.a.link,
                            href: "https://www.instagram.com/playblooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-instagram-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Instagram (@PlayBlooket)")), r.a.createElement("div", null, r.a.createElement("a", {
                            className: b.a.link,
                            href: "https://www.facebook.com/PlayBlooket",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-facebook-square",
                            style: {
                                marginRight: 7
                            }
                        }), "Facebook (@PlayBlooket)"))), r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-question-circle", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Support")), r.a.createElement("div", {
                            className: b.a.text
                        }, "Contact us at: ", r.a.createElement("a", {
                            className: b.a.link,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/faq"
                        }, "Frequently Asked Questions"))), r.a.createElement("div", {
                            className: b.a.infoContainer
                        }, r.a.createElement("div", {
                            className: b.a.headerRow
                        }, r.a.createElement("i", {
                            className: d()("fas fa-lock", b.a.headerIcon)
                        }), r.a.createElement("div", {
                            className: b.a.infoHeader
                        }, "Privacy")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/privacy"
                        }, "Privacy Policy")), r.a.createElement("div", null, r.a.createElement(c.b, {
                            className: b.a.link,
                            to: "/terms"
                        }, "Terms of Service")))) : null), this.state.loading || this.state.end ? r.a.createElement(C.a, {
                            text: this.state.end || "Processing...",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Success!" === this.state.end ? "Thanks!" : "Refresh",
                                click: function() {
                                    return e.setState({
                                        loading: !1,
                                        end: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.referPop ? r.a.createElement(C.a, {
                            text: this.state.loading ? "Loading..." : "Enter Referrer's Username:",
                            loading: this.state.loading,
                            stringValue: this.state.referInput,
                            stringChange: function(t) {
                                return e.setState({
                                    referInput: t.target.value
                                })
                            },
                            onSubmit: this.onRefer,
                            buttonOne: {
                                text: "Done",
                                click: this.onRefer,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        referPop: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.referRes ? r.a.createElement(C.a, {
                            text: this.state.referRes,
                            buttonOne: {
                                text: "Done",
                                click: function() {
                                    return e.setState({
                                        referRes: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && O(t.prototype, a), n && O(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            z.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(_.c)(Object(u.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(z)))
        },
        "6Zcq": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("Ty5D"),
                l = a("E8Bj"),
                c = a("74sb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                f = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof h ? t : h,
                        o = Object.create(r.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return j()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = x(i, a);
                                    if (s) {
                                        if (s === m) continue;
                                        return s
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
                                    if (n = a.done ? "completed" : "suspendedYield", l.arg === m) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, i), o
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
                var m = {};

                function h() {}

                function d() {}

                function p() {}
                var _ = {};
                s(_, r, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(S([])));
                g && g !== t && a.call(g, r) && (_ = g);
                var v = p.prototype = h.prototype = Object.create(_);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            m = f.value;
                                        return m && "object" == u(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(m).then((function(e) {
                                            f.value = e, i(f)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return m;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, m;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, m) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
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

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function S(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, s(v, "constructor", p), s(p, "constructor", d), d.displayName = s(p, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(w.prototype), s(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, b(v), s(v, i, "Generator"), s(v, r, (function() {
                    return this
                })), s(v, "toString", (function() {
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
                }, e.values = S, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), m
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    k(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), m
                    }
                }, e
            }

            function m(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _(e) {
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
                    var a, n = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var v = function(e) {
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
                    }), t && p(e, t)
                }(s, e);
                var t, a, n, r, o, i = _(s);

                function s() {
                    return h(this, s), i.apply(this, arguments)
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: (r = f().mark((function e() {
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    Object(c.n)(), window.location.href = "".concat("https://id.blooket.com", "/signup");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), o = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var o = r.apply(e, t);

                            function i(e) {
                                m(o, a, n, i, s, "next", e)
                            }

                            function s(e) {
                                m(o, a, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && d(t.prototype, a), n && d(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            v.propTypes = {};
            t.a = Object(l.c)(Object(s.g)(Object(i.b)((function(e) {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(v)))
        },
        "8eya": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("H1WH"),
                f = a("ZrUs"),
                m = a("VgyX"),
                h = a("Xst1"),
                d = a.n(h),
                p = a("oVzD"),
                _ = a.n(p),
                y = a("XTAU"),
                g = a("E8Bj"),
                v = {
                    Defense: {
                        name: "Tower Defense",
                        img: "https://media.blooket.com/image/upload/v1594599807/Media/towerDefense.png",
                        active: !0,
                        mobile: !0,
                        canLoad: !0
                    },
                    Cafe: {
                        name: "Café",
                        img: "https://media.blooket.com/image/upload/v1594599609/Media/Cafe.png",
                        active: !0,
                        mobile: !0,
                        canLoad: !0
                    },
                    Tower: {
                        name: "Tower of Doom",
                        img: "https://media.blooket.com/image/upload/v1594599953/Media/Tower.png",
                        active: !0,
                        mobile: !0,
                        canLoad: !0
                    },
                    Kingdom: {
                        name: "Crazy Kingdom",
                        img: "https://media.blooket.com/image/upload/v1596390340/Media/CrazyKingdom.png",
                        active: !0,
                        mobile: !0,
                        canLoad: !1
                    },
                    Factory: {
                        name: "Factory",
                        img: "https://media.blooket.com/image/upload/v1561128265/Media/Factory.png",
                        active: !0,
                        mobile: !0,
                        canLoad: !1
                    }
                },
                b = a("ca/f"),
                w = a("74sb"),
                x = a("+fLB");

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new k(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return j()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = b(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    _ = p && p(p(E([])));
                _ && _ !== t && a.call(_, r) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == C(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function E(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(y, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                }, e.values = E, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function j(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function N(e, t) {
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
                    var a, n = P(e);
                    if (t) {
                        var r = P(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return B(this, a)
                }
            }

            function B(e, t) {
                if (t && ("object" === C(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var L = function(e) {
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
                var t, a, n, o, i, s = O(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = s.call(this, e)).state = {
                        settings: {
                            type: "",
                            method: ""
                        },
                        factoryPopUp: !1,
                        factoryTime: 7,
                        ready: !1,
                        isBen: !1
                    }, t.loading = !1, t.name = "", t.onPlay = t.onPlay.bind(I(t)), t.selectMode = t.selectMode.bind(I(t)), t.startFactory = t.startFactory.bind(I(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (o = S().mark((function e() {
                        var t, a;
                        return S().wrap((function(e) {
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
                                    this.name = t.name, ["Bot", "Ben", "test"].includes(t.name) && this.setState({
                                        isBen: !0
                                    }), this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), (a = Object(w.j)("id")) ? (this.props.addGameId(a), this.setState({
                                        ready: !0
                                    })) : this.setState({
                                        loading: !0,
                                        ready: !0
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function i(e) {
                                j(r, a, n, i, s, "next", e)
                            }

                            function s(e) {
                                j(r, a, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "onPlay",
                    value: function() {
                        "Tower" === this.state.settings.type ? this.props.history.push("/tower/load") : "Cafe" === this.state.settings.type ? this.props.history.push("/cafe/load") : "Defense" === this.state.settings.type ? this.props.history.push("/defense/load") : "Kingdom" === this.state.settings.type ? this.props.history.push("/kingdom/start") : this.setState({
                            factoryPopUp: !0,
                            factoryTime: 7
                        })
                    }
                }, {
                    key: "selectMode",
                    value: function(e) {
                        var t = this;
                        this.setState({
                            settings: {
                                type: e
                            }
                        }, (function() {
                            t.onPlay()
                        }))
                    }
                }, {
                    key: "startFactory",
                    value: function() {
                        this.loading || (this.loading = !0, this.setState({
                            loading: !0
                        }), this.props.login(this.name), this.props.setFactory("Time-Solo", this.state.factoryTime, !1, !1), this.props.history.push("/play/factory/start"))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: u.isMobile ? d.a.mBody : d.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, r.a.createElement(y.a, {
                            title: "Play Solo | Blooket",
                            desc: "Play a game of Blooket solo. No need for a host or other players, just you, the game, and a whole bunch of learning."
                        }), this.state.ready ? r.a.createElement("div", {
                            className: _.a.selectText
                        }, this.state.loading ? "Select a Game Mode to Load" : "Select a Game Mode") : null, r.a.createElement("div", {
                            className: _.a.modesArray
                        }, Object.entries(v).map((function(t) {
                            var a = k(t, 2),
                                n = a[0],
                                o = a[1];
                            return !o.active && !e.state.isBen || !o.canLoad && e.state.loading || u.isMobile && !o.mobile ? null : r.a.createElement("div", {
                                className: _.a.modeContainer,
                                role: "button",
                                tabIndex: 0,
                                key: n,
                                onClick: function() {
                                    return e.selectMode(n)
                                }
                            }, r.a.createElement("img", {
                                src: Object(w.e)(v[n].img),
                                alt: n,
                                className: _.a.modeImage,
                                draggable: "false"
                            }), v[n].name.split(" ").length > 1 ? r.a.createElement("div", {
                                className: _.a.modeTextTwo
                            }, v[n].name.split(" ")[0], r.a.createElement("br", null), v[n].name.split(" ").length > 2 ? "".concat(v[n].name.split(" ")[1], " ").concat(v[n].name.split(" ")[2]) : v[n].name.split(" ")[1]) : r.a.createElement("div", {
                                className: _.a.modeText
                            }, v[n].name), v[n].limited ? r.a.createElement("div", {
                                className: _.a.limitedTime
                            }, "Limited Time") : null)
                        }))), this.state.factoryPopUp ? r.a.createElement(b.a, {
                            text: "How long would you like to play for (minutes)?",
                            loading: this.state.loading,
                            timeValue: this.state.factoryTime,
                            timeChange: function(t) {
                                return e.setState({
                                    factoryTime: Math.max(0, Math.min(60, t.target.value))
                                })
                            },
                            onSubmit: function(t) {
                                t.preventDefault(), e.startFactory()
                            },
                            buttonOne: {
                                text: "Start",
                                click: function() {
                                    return e.startFactory()
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        factoryPopUp: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && N(t.prototype, a), n && N(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(r.a.Component);
            L.propTypes = {
                host: l.a.object,
                id: l.a.string,
                deleteHost: l.a.func.isRequired,
                addGameId: l.a.func.isRequired,
                setFactory: l.a.func.isRequired,
                login: l.a.func.isRequired,
                history: l.a.object.isRequired,
                firebase: l.a.object,
                user: l.a.object
            };
            t.a = Object(g.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: m.d,
                    addGameId: m.a,
                    setFactory: f.e,
                    login: f.b
                }, e)
            }))(Object(x.d)(L))))
        },
        "9ZgN": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___2J-JA-camelCase{position:fixed;width:100%;height:100%;left:0;top:0;background-color:#0bc2cf;overflow:hidden}.styles__blooksBackground___3oQ7Y-camelCase{position:absolute;width:200%;height:200%;top:50%;left:50%;background-size:550px;background-position:-100px -100px;opacity:.1;transform:translate(-50%,-50%) rotate(15deg)}.styles__fullContainer___3Wl6C-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:10px 5%}.styles__headerRow___3mqZi-camelCase{display:flex;flex-flow:row wrap;width:100%;margin:10px auto 20px}.styles__headerLeft___1Hu3N-camelCase{width:400px;display:flex;flex-direction:column}.styles__headerLeftRow___8vTJL-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;width:100%}.styles__headerBlookContainer___36zY5-camelCase{width:100px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__headerBlook___DdSHd-camelCase{width:100%;filter:drop-shadow(0 4px rgba(0,0,0,.2))}.styles__headerBanner___3Uuuk-camelCase,.styles__headerInfo___1oWlb-camelCase{display:flex;flex-direction:column}.styles__headerBanner___3Uuuk-camelCase{width:280px;height:70px;border-radius:10px;background-color:#655dca;padding:5px 10px 11px;box-sizing:border-box;box-shadow:inset 0 -6px rgba(0,0,0,.2);color:#fff;font-size:16px;text-shadow:1px 1px rgba(0,0,0,.2);margin-bottom:10px;justify-content:center}.styles__headerName___1GBcl-camelCase{font-weight:700;font-size:26px;line-height:28px}.styles__levelBarContainer___1xi-9-camelCase{width:280px;height:18px;position:relative}.styles__levelStarContainer___7ABEf-camelCase{width:40px;height:40px;position:absolute;left:-10px;top:calc(50% - 20px);display:flex;justify-content:center;align-items:center}.styles__levelStar___LHq_y-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__levelStarText___2Myxg-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-text-stroke:1px #3a3a3a;font-size:20px}.styles__levelBar___2SU0x-camelCase{width:100%;height:100%;border-radius:10px;overflow:hidden;background-color:#50425b}.styles__levelBarInside___3FLAG-camelCase{background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);height:100%;width:100%;transform-origin:left center}.styles__headerLeftButtons___3zGk0-camelCase{width:100%;margin-top:15px;display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between}.styles__headerButtonInside___26e_U-camelCase{width:115px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;font-size:12px;font-weight:700}.styles__headerButtonIcon___1pOun-camelCase{font-size:12px;margin-right:5px;margin-left:5px}.styles__featuredBlooksContainer___OHnma-camelCase{margin:0 30px;height:156px;width:308px;position:relative}.styles__featuredBlooksBg___M5r9M-camelCase{width:100%;height:100%;position:absolute}.styles__bottomContainer___3kOrb-camelCase{display:flex;flex-flow:row wrap;justify-content:space-between;width:100%;margin:40px auto 10px}.styles__left___a1a11-camelCase{width:320px}.styles__right___13qxc-camelCase{width:calc(100% - 340px)}.styles__customBlookContainer___3wjWt-camelCase{background-color:#40115f;width:100%;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center;color:#fff;position:relative}.styles__containerHeader___3xghM-camelCase,.styles__customBlookContainer___3wjWt-camelCase{border-radius:7px;box-sizing:border-box}.styles__containerHeader___3xghM-camelCase{position:absolute;top:-28px;left:-10px;height:45px;background-color:#ef7426;padding:4px 4px 8px;box-shadow:0 4px rgba(0,0,0,.2),inset 0 -4px rgba(0,0,0,.2)}.styles__containerHeaderInside___2omQm-camelCase{height:100%;width:100%;box-sizing:border-box;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);padding:0 15px;border-radius:5px;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464;font-family:Titan One,sans-serif;color:#fff;font-size:26px}.styles__containerHeaderInside___2omQm-camelCase,.styles__noBlookContainer___1azSz-camelCase{display:flex;justify-content:center;align-items:center}.styles__noBlookContainer___1azSz-camelCase{width:18%;height:175px;font-size:16px;font-weight:700;opacity:.6;flex-direction:column;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__noBlookContainer___1azSz-camelCase:hover{transform:scale(.95)}.styles__noBlookIcon___HAmDA-camelCase{font-size:40px;margin-bottom:10px}.styles__blookContainer___1RJ4W-camelCase{width:18%;height:175px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__customBlook___1I-NI-camelCase{width:75%;max-width:110px;margin-bottom:5px}.styles__customIconRow___3FyUU-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:80%;margin-top:0;height:0;overflow:hidden;transition:.2s}.styles__blookContainer___1RJ4W-camelCase:hover>.styles__customIconRow___3FyUU-camelCase{height:20px;margin-top:7px}.styles__customIcon___2AL28-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;opacity:.6;transition:.2s}.styles__customIcon___2AL28-camelCase:hover{opacity:1}.styles__blookUsageContainer___1skDN-camelCase{border-radius:7px;background-color:#9a49aa;width:100%;padding:30px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative}.styles__blookUsageRow___3BmOZ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:45px}.styles__blookUsageBlook___20QoJ-camelCase{width:36px}.styles__blookUsageBarContainer___3he3D-camelCase{width:calc(100% - 50px);height:26px}.styles__blookUsageBar___iYjir-camelCase{width:100%;height:100%;transform-origin:left center;background:linear-gradient(transparent,transparent 50%,rgba(0,0,0,.1) 50.01%,rgba(0,0,0,.1));box-shadow:0 4px rgba(0,0,0,.3)}.styles__blookUsageScale___2g-Ky-camelCase{width:calc(100% - 40px);height:25px;margin-left:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__blookUsageNum___1v4U8-camelCase{font-size:12px;color:#fff;width:25px;text-align:center}.styles__blookUsageScaleBar___3w1PT-camelCase{background-color:#fff;height:3px;width:calc(100% - 45px)}.styles__blookUsageText___3s235-camelCase{width:calc(100% - 50px);margin-left:auto;margin-top:-5px;font-size:14px;text-align:center;color:#fff}.styles__historyContainer___kQ6kc-camelCase{background-color:#9a49aa;padding:30px 15px 16px;position:relative;margin:40px 0}.styles__historyContainer___kQ6kc-camelCase,.styles__historyGameContainer___1ncNG-camelCase{border-radius:7px;width:100%;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box}.styles__historyGameContainer___1ncNG-camelCase{background-color:#7a039d;margin:5px 0;padding:5px 10px 11px;display:flex;flex-direction:row;align-items:center;color:#fff}.styles__historyBlook___3dMsx-camelCase{width:32px}.styles__historyInfo___11Lo0-camelCase{margin:0 7px;display:flex;flex-direction:column;justify-content:center;font-size:14px}.styles__historyName___3REcG-camelCase{font-size:16px;font-weight:700}.styles__historyNothing___3Js4--camelCase{width:100%;text-align:center;font-size:20px;color:#fff;font-weight:700}.styles__gameStatContainer___lqtJn-camelCase{display:flex;flex-direction:row;align-items:center;height:100%;margin-left:auto}.styles__gameStatText___2PxtE-camelCase{font-weight:700;margin-right:5px}.styles__gameStatText___2PxtE-camelCase,.styles__snowIcon___c3oRi-camelCase{font-size:16px}.styles__fossilIcon___3JBcz-camelCase{font-size:14px;transform:rotate(-45deg)}.styles__gameStatImg___205th-camelCase{width:22px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__pointsText___2tau--camelCase{font-size:16px;font-weight:700;text-align:right;margin:auto 0 auto auto}.styles__statsContainer___QnrRB-camelCase{border-radius:7px;background-color:#40115f;width:100%;padding:15px 5px 11px;margin:40px 0;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;color:#fff;position:relative}.styles__statsWrapper___r9VCh-camelCase,.styles__topStats___3qffP-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-evenly}.styles__statContainer___QKuOF-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:200px;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__statTitle___z4wSV-camelCase{color:#fff;font-size:16px}.styles__statNum___5RYSd-camelCase{font-family:Titan One,sans-serif;color:#fff;font-size:28px}.styles__statImg___3DBXt-camelCase{width:50px;transform:translateY(-50%) rotate(-15deg)}.styles__statImg___3DBXt-camelCase,.styles__tokenImg___a08fY-camelCase{position:absolute;top:65%;left:-20px;filter:drop-shadow(0 0 6px rgba(0,0,0,.2))}.styles__tokenImg___a08fY-camelCase{width:44px;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translateY(-50%) rotate(-35deg)}@media only screen and (max-width:1150px){.styles__bottomContainer___3kOrb-camelCase{flex-flow:row-reverse wrap}.styles__left___a1a11-camelCase,.styles__right___13qxc-camelCase{width:100%}}@media only screen and (max-width:650px){.styles__noBlookContainer___1azSz-camelCase{width:40%;height:135px;font-size:14px;margin:0 auto}.styles__noBlookIcon___HAmDA-camelCase{font-size:32px;margin-bottom:7px}.styles__blookContainer___1RJ4W-camelCase{width:40%;height:135px;margin:0 auto}.styles__customBlook___1I-NI-camelCase{width:65%;max-width:80px}}@media only screen and (max-width:450px){.styles__headerLeftRow___8vTJL-camelCase{flex-direction:column;align-items:center}.styles__headerBlookContainer___36zY5-camelCase{margin-bottom:15px}.styles__headerLeftButtons___3zGk0-camelCase{margin-top:20px;justify-content:space-evenly}.styles__headerButton___36TRh-camelCase{margin:5px}}", ""]), t.locals = {
                background: "styles__background___2J-JA-camelCase",
                blooksBackground: "styles__blooksBackground___3oQ7Y-camelCase",
                fullContainer: "styles__fullContainer___3Wl6C-camelCase",
                headerRow: "styles__headerRow___3mqZi-camelCase",
                headerLeft: "styles__headerLeft___1Hu3N-camelCase",
                headerLeftRow: "styles__headerLeftRow___8vTJL-camelCase",
                headerBlookContainer: "styles__headerBlookContainer___36zY5-camelCase",
                headerBlook: "styles__headerBlook___DdSHd-camelCase",
                headerBanner: "styles__headerBanner___3Uuuk-camelCase",
                headerInfo: "styles__headerInfo___1oWlb-camelCase",
                headerName: "styles__headerName___1GBcl-camelCase",
                levelBarContainer: "styles__levelBarContainer___1xi-9-camelCase",
                levelStarContainer: "styles__levelStarContainer___7ABEf-camelCase",
                levelStar: "styles__levelStar___LHq_y-camelCase",
                levelStarText: "styles__levelStarText___2Myxg-camelCase",
                levelBar: "styles__levelBar___2SU0x-camelCase",
                levelBarInside: "styles__levelBarInside___3FLAG-camelCase",
                headerLeftButtons: "styles__headerLeftButtons___3zGk0-camelCase",
                headerButtonInside: "styles__headerButtonInside___26e_U-camelCase",
                headerButtonIcon: "styles__headerButtonIcon___1pOun-camelCase",
                featuredBlooksContainer: "styles__featuredBlooksContainer___OHnma-camelCase",
                featuredBlooksBg: "styles__featuredBlooksBg___M5r9M-camelCase",
                bottomContainer: "styles__bottomContainer___3kOrb-camelCase",
                left: "styles__left___a1a11-camelCase",
                right: "styles__right___13qxc-camelCase",
                customBlookContainer: "styles__customBlookContainer___3wjWt-camelCase",
                containerHeader: "styles__containerHeader___3xghM-camelCase",
                containerHeaderInside: "styles__containerHeaderInside___2omQm-camelCase",
                noBlookContainer: "styles__noBlookContainer___1azSz-camelCase",
                noBlookIcon: "styles__noBlookIcon___HAmDA-camelCase",
                blookContainer: "styles__blookContainer___1RJ4W-camelCase",
                customBlook: "styles__customBlook___1I-NI-camelCase",
                customIconRow: "styles__customIconRow___3FyUU-camelCase",
                customIcon: "styles__customIcon___2AL28-camelCase",
                blookUsageContainer: "styles__blookUsageContainer___1skDN-camelCase",
                blookUsageRow: "styles__blookUsageRow___3BmOZ-camelCase",
                blookUsageBlook: "styles__blookUsageBlook___20QoJ-camelCase",
                blookUsageBarContainer: "styles__blookUsageBarContainer___3he3D-camelCase",
                blookUsageBar: "styles__blookUsageBar___iYjir-camelCase",
                blookUsageScale: "styles__blookUsageScale___2g-Ky-camelCase",
                blookUsageNum: "styles__blookUsageNum___1v4U8-camelCase",
                blookUsageScaleBar: "styles__blookUsageScaleBar___3w1PT-camelCase",
                blookUsageText: "styles__blookUsageText___3s235-camelCase",
                historyContainer: "styles__historyContainer___kQ6kc-camelCase",
                historyGameContainer: "styles__historyGameContainer___1ncNG-camelCase",
                historyBlook: "styles__historyBlook___3dMsx-camelCase",
                historyInfo: "styles__historyInfo___11Lo0-camelCase",
                historyName: "styles__historyName___3REcG-camelCase",
                historyNothing: "styles__historyNothing___3Js4--camelCase",
                gameStatContainer: "styles__gameStatContainer___lqtJn-camelCase",
                gameStatText: "styles__gameStatText___2PxtE-camelCase",
                snowIcon: "styles__snowIcon___c3oRi-camelCase",
                fossilIcon: "styles__fossilIcon___3JBcz-camelCase",
                gameStatImg: "styles__gameStatImg___205th-camelCase",
                pointsText: "styles__pointsText___2tau--camelCase",
                statsContainer: "styles__statsContainer___QnrRB-camelCase",
                statsWrapper: "styles__statsWrapper___r9VCh-camelCase",
                topStats: "styles__topStats___3qffP-camelCase",
                statContainer: "styles__statContainer___QKuOF-camelCase",
                statTitle: "styles__statTitle___z4wSV-camelCase",
                statNum: "styles__statNum___5RYSd-camelCase",
                statImg: "styles__statImg___3DBXt-camelCase",
                tokenImg: "styles__tokenImg___a08fY-camelCase",
                headerButton: "styles__headerButton___36TRh-camelCase"
            }
        },
        BNho: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainRow___3T58f-camelCase{margin:20px 5%;width:90%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.styles__leftColumn___1iY1q-camelCase{background-color:#fff;border-radius:7px;width:330px;padding:15px 15px 22px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:column;margin-bottom:20px}.styles__coverFillerContainer___3xH4j-camelCase,.styles__coverImageContainer___3mlyV-camelCase{width:100%;height:205px;margin:0 auto 10px;background-color:#333;border-radius:7px;overflow:hidden;display:flex;justify-content:center;align-items:center}.styles__coverImage___1sSHa-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__coverFillerContainer___3xH4j-camelCase{background-color:#0bc2cf}.styles__coverFillerImage___23G64-camelCase{margin:auto;width:80%;height:80%;max-width:400px;-o-object-fit:contain;object-fit:contain}.styles__headerTitle___gKy2Z-camelCase{font-size:30px;line-height:32px;font-weight:700}.styles__headerDesc___3OfnC-camelCase{font-size:18px;overflow-x:hidden;word-wrap:break-word;margin:7px 0}.styles__headerBottomContainer___2HQcH-camelCase{display:flex;flex-direction:row;align-items:center;height:30px;margin-top:auto}.styles__headerAuthorIcon___1fAWR-camelCase{font-size:18px;margin-right:7px}.styles__headerAuthorText___2jrIU-camelCase{font-family:Nunito,sans-serif;font-size:16px;color:#0bc2cf}.styles__deleteButton___IQMHR-camelCase{font-family:Nunito,sans-serif;font-size:20px;margin-left:15px;color:#cf180b;text-decoration:underline;cursor:pointer}.styles__headerStatsWrapper___34sB5-camelCase{width:100%;display:flex;flex-direction:row;align-items:center}.styles__headerStat___2_MCT-camelCase{font-size:18px;font-weight:700}.styles__headerStatDivider___3L50s-camelCase{font-size:10px;margin:0 5px;opacity:.8}.styles__headerStatSmall___3isMp-camelCase{font-size:12px;opacity:.8}.styles__headerButtonRow___15T4p-camelCase{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;margin:20px 0 10px}.styles__soloButton___lVCzA-camelCase{box-shadow:0 0 4px rgba(0,0,0,.15)}.styles__headerButtonInside___1A20f-camelCase{width:100px;height:35px;display:flex;flex-direction:row;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:22px;font-weight:700}.styles__noHostText___No8Mu-camelCase{width:140px;font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;text-align:center}.styles__hostIcon___3BjGq-camelCase{font-size:20px;margin-right:7px}.styles__smallButtonsContainer___8783W-camelCase{width:100%;margin:5px 0;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__smallButton___2fnLv-camelCase{width:90px;height:26px;margin:5px;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px;background-color:rgba(0,0,0,.1);border-radius:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;transition:.2s}.styles__smallButton___2fnLv-camelCase:focus,.styles__smallButton___2fnLv-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__smallIcon___2syMb-camelCase{font-size:10px;margin-right:5px}.styles__questionSection___3vBL6-camelCase{display:flex;flex-direction:column;width:calc(100% - 350px)}.styles__questionSectionTop___6Y00i-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:10px;width:310px}.styles__numQuestions___2_rh8-camelCase{width:160px;padding:10px 10px 17px;box-sizing:border-box;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px;font-size:18px;font-weight:700;text-align:center}.styles__showAnswersButtonInside___3pgzn-camelCase{width:120px;height:30px;display:flex;align-items:center;justify-content:center;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:16px;font-weight:700}.styles__questionContainer___2YC9r-camelCase{width:100%;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:10px 0;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;transition:.2s}.styles__questionContainer___2YC9r-camelCase:hover{transform:scale(.98)}.styles__questionRow___381Uy-camelCase{justify-content:space-between;min-height:120px;width:100%;position:relative}.styles__questionInfoRow___3Dw_X-camelCase,.styles__questionRow___381Uy-camelCase{display:flex;flex-direction:row}.styles__questionInfoRow___3Dw_X-camelCase{position:absolute;bottom:5px;right:3px;height:22px}.styles__questionInfo___2KDqj-camelCase{margin:0 2px;background-color:rgba(0,0,0,.6);padding:0 7px;border-radius:5px;color:#fff;font-size:12px;height:100%}.styles__questionImageContainer___tYoyI-camelCase,.styles__questionInfo___2KDqj-camelCase{display:flex;justify-content:center;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:165px;min-width:165px;height:120px;background-color:#333;overflow:hidden;border-top-right-radius:7px;border-bottom-right-radius:7px;margin:auto 0;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__questionImage___33pJw-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__questionTextContainer___2Mp1o-camelCase{display:flex;flex-direction:column;padding:5px 15px;flex-grow:1;box-sizing:border-box;outline:none;cursor:pointer}.styles__questionNum___2n7LQ-camelCase{font-size:18px;margin-bottom:5px;font-weight:700}.styles__questionTextRow___3ZAIS-camelCase{display:flex;flex-direction:row;align-items:center;min-height:70px}.styles__questionText___1gLDI-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;word-wrap:break-word;white-space:pre-line;margin-bottom:auto}.styles__questionFunc___2kG17-camelCase{margin:auto 0;width:120px;display:flex;justify-content:center;align-items:center}.styles__qMathField___BT4-f-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:16px!important}.styles__answerContainer___3A1qQ-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-between;padding:5px 10px;box-sizing:border-box;outline:none;cursor:pointer}.styles__answer___gD6Vh-camelCase{min-height:60px;padding:5px 5px 10px;box-shadow:inset 0 -5px rgba(0,0,0,.2);margin:5px 0;border-radius:7px;width:48%;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__answerIcon___Rm_Gi-camelCase{font-size:28px;color:#fff;width:45px;text-align:center}.styles__answerMediaContainer___2EASb-camelCase{width:calc(100% - 35px);text-align:center;display:flex;justify-content:center;align-items:center}.styles__answerText___37qIQ-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#fff;word-wrap:break-word;overflow-x:hidden}.styles__answerImg___3DXal-camelCase{margin:auto;max-width:100%;max-height:80px;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3DXal-camelCase,.styles__mathField___2R8OP-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___2R8OP-camelCase{cursor:pointer!important;color:#fff;border-color:#fff;font-size:18px!important}.styles__faded___2yQHe-camelCase{opacity:.5}.styles__bottomSpacer___3BJoH-camelCase{height:30px}.styles__reportModal___1_Bcq-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__reportContainer___1F_dD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__reportHeader___1WfcX-camelCase{margin:25px auto 15px}.styles__duplicateHeader___1aNN0-camelCase,.styles__reportHeader___1WfcX-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;color:#3a3a3a}.styles__duplicateHeader___1aNN0-camelCase{margin:25px auto}.styles__reportText___3Qmub-camelCase{margin:10px 25px 15px}.styles__reportInput___q6fb9-camelCase,.styles__reportText___3Qmub-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a}.styles__reportInput___q6fb9-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:15px;width:400px;height:100px;text-align:left;outline:none;resize:none}.styles__reportInput___q6fb9-camelCase:focus{border-color:#0bc2cf}.styles__reportInputFilled___2whfm-camelCase{border-color:#3a3a3a}.styles__reportButtonContainer___3Fkhm-camelCase{width:100%;margin-top:15px;margin-bottom:25px;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__reportYesButton___22wrf-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportYesButton___22wrf-camelCase:focus,.styles__reportYesButton___22wrf-camelCase:hover{border-color:#ce1313;color:#ce1313;font-weight:700}.styles__reportNoButton___3SmKY-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportNoButton___3SmKY-camelCase:focus,.styles__reportNoButton___3SmKY-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__smallScreen___28ZM3-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___lcywH-camelCase{display:none}.styles__smallScreen___28ZM3-camelCase{display:flex}}.styles__highlight___1Mzyo-camelCase{background-color:#ff0}@media only screen and (max-width:1150px){.styles__mainRow___3T58f-camelCase{margin:20px 2.5%;width:95%;flex-direction:column;align-items:center}.styles__leftColumn___1iY1q-camelCase,.styles__questionSection___3vBL6-camelCase{width:100%}}@media only screen and (max-width:600px){.styles__questionRow___381Uy-camelCase{flex-direction:column;align-items:center}.styles__questionImageContainer___tYoyI-camelCase{width:100%;background-color:transparent!important;border-top-right-radius:0;border-bottom-right-radius:0;margin:0}.styles__questionTextContainer___2Mp1o-camelCase{width:100%}.styles__questionImage___33pJw-camelCase{-o-object-fit:contain;object-fit:contain}.styles__answer___gD6Vh-camelCase{width:100%;margin:2px 0}}", ""]), t.locals = {
                mainRow: "styles__mainRow___3T58f-camelCase",
                leftColumn: "styles__leftColumn___1iY1q-camelCase",
                coverFillerContainer: "styles__coverFillerContainer___3xH4j-camelCase",
                coverImageContainer: "styles__coverImageContainer___3mlyV-camelCase",
                coverImage: "styles__coverImage___1sSHa-camelCase",
                coverFillerImage: "styles__coverFillerImage___23G64-camelCase",
                headerTitle: "styles__headerTitle___gKy2Z-camelCase",
                headerDesc: "styles__headerDesc___3OfnC-camelCase",
                headerBottomContainer: "styles__headerBottomContainer___2HQcH-camelCase",
                headerAuthorIcon: "styles__headerAuthorIcon___1fAWR-camelCase",
                headerAuthorText: "styles__headerAuthorText___2jrIU-camelCase",
                deleteButton: "styles__deleteButton___IQMHR-camelCase",
                headerStatsWrapper: "styles__headerStatsWrapper___34sB5-camelCase",
                headerStat: "styles__headerStat___2_MCT-camelCase",
                headerStatDivider: "styles__headerStatDivider___3L50s-camelCase",
                headerStatSmall: "styles__headerStatSmall___3isMp-camelCase",
                headerButtonRow: "styles__headerButtonRow___15T4p-camelCase",
                soloButton: "styles__soloButton___lVCzA-camelCase",
                headerButtonInside: "styles__headerButtonInside___1A20f-camelCase",
                noHostText: "styles__noHostText___No8Mu-camelCase",
                hostIcon: "styles__hostIcon___3BjGq-camelCase",
                smallButtonsContainer: "styles__smallButtonsContainer___8783W-camelCase",
                smallButton: "styles__smallButton___2fnLv-camelCase",
                smallIcon: "styles__smallIcon___2syMb-camelCase",
                questionSection: "styles__questionSection___3vBL6-camelCase",
                questionSectionTop: "styles__questionSectionTop___6Y00i-camelCase",
                numQuestions: "styles__numQuestions___2_rh8-camelCase",
                showAnswersButtonInside: "styles__showAnswersButtonInside___3pgzn-camelCase",
                questionContainer: "styles__questionContainer___2YC9r-camelCase",
                questionRow: "styles__questionRow___381Uy-camelCase",
                questionInfoRow: "styles__questionInfoRow___3Dw_X-camelCase",
                questionInfo: "styles__questionInfo___2KDqj-camelCase",
                questionImageContainer: "styles__questionImageContainer___tYoyI-camelCase",
                questionImage: "styles__questionImage___33pJw-camelCase",
                questionTextContainer: "styles__questionTextContainer___2Mp1o-camelCase",
                questionNum: "styles__questionNum___2n7LQ-camelCase",
                questionTextRow: "styles__questionTextRow___3ZAIS-camelCase",
                questionText: "styles__questionText___1gLDI-camelCase",
                questionFunc: "styles__questionFunc___2kG17-camelCase",
                qMathField: "styles__qMathField___BT4-f-camelCase",
                answerContainer: "styles__answerContainer___3A1qQ-camelCase",
                answer: "styles__answer___gD6Vh-camelCase",
                answerIcon: "styles__answerIcon___Rm_Gi-camelCase",
                answerMediaContainer: "styles__answerMediaContainer___2EASb-camelCase",
                answerText: "styles__answerText___37qIQ-camelCase",
                answerImg: "styles__answerImg___3DXal-camelCase",
                mathField: "styles__mathField___2R8OP-camelCase",
                faded: "styles__faded___2yQHe-camelCase",
                bottomSpacer: "styles__bottomSpacer___3BJoH-camelCase",
                reportModal: "styles__reportModal___1_Bcq-camelCase",
                reportContainer: "styles__reportContainer___1F_dD-camelCase",
                reportHeader: "styles__reportHeader___1WfcX-camelCase",
                duplicateHeader: "styles__duplicateHeader___1aNN0-camelCase",
                reportText: "styles__reportText___3Qmub-camelCase",
                reportInput: "styles__reportInput___q6fb9-camelCase",
                reportInputFilled: "styles__reportInputFilled___2whfm-camelCase",
                reportButtonContainer: "styles__reportButtonContainer___3Fkhm-camelCase",
                reportYesButton: "styles__reportYesButton___22wrf-camelCase",
                reportNoButton: "styles__reportNoButton___3SmKY-camelCase",
                smallScreen: "styles__smallScreen___28ZM3-camelCase",
                bigScreen: "styles__bigScreen___lcywH-camelCase",
                highlight: "styles__highlight___1Mzyo-camelCase"
            }
        },
        Bihk: function(e, t, a) {
            var n = a("sP9o");
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
        Fg4B: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("/MKj"),
                i = a("Ty5D"),
                s = a("H1WH"),
                l = a("17x9"),
                c = a.n(l),
                u = a("lNlg"),
                f = a("TSYQ"),
                m = a.n(f),
                h = a("1O+K"),
                d = a.n(h);

            function p(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _(e, t, a) {
                return t && p(e.prototype, t), a && p(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var y = new(_((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.scene = null, this.projectiles = {}, this.enemies = null, this.towers = null, this.numColumns = 10, this.numRows = 11, this.tileSize = 0, this.enemyPath = null, this.map = null, this.isPaused = !1, this.buyTower = "", this.tempTower = null, this.texts = null
                }))),
                g = a("mkC0"),
                v = {
                    map: {
                        url: "https://media.blooket.com/image/upload/v1593095357/Media/defense/mapTemplate.svg",
                        width: 10,
                        height: 11
                    },
                    turtle: {
                        url: g.a.Turtle,
                        width: .7,
                        height: .7 * 1.15
                    },
                    "shell-1": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        width: .35,
                        height: .405
                    },
                    "shell-2": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl5.svg",
                        width: .35,
                        height: .405
                    },
                    "shell-3": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl10.svg",
                        width: .4,
                        height: .4
                    },
                    "enemy-blue": {
                        url: g.a["Light Blue"],
                        width: .5,
                        height: .575
                    }
                },
                b = {
                    "enemy-blue": {
                        texture: "enemy-blue",
                        width: .5,
                        hp: 10,
                        speed: 1 / 3e4,
                        dmg: 5
                    }
                },
                w = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, y.scene, 0, 0, "enemy-blue"), this.setDepth(2)
                    },
                    start: function(e) {
                        var t = b[e];
                        this.setTexture(t.texture), this.setScale(t.width * y.tileSize / this.width), this.hp = t.hp, this.speed = t.speed, this.dmg = t.dmg, this.setActive(!0), this.setVisible(!0), this.pathProg = 0, this.pathPos = new d.a.Math.Vector2, y.enemyPath.getPoint(this.pathProg, this.pathPos), this.setPosition(this.pathPos.x, this.pathPos.y)
                    },
                    receiveDamage: function(e) {
                        var t = this;
                        this.hp -= e,
                            function(e, t, a) {
                                if (!(y.texts.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 30)) {
                                    var n = y.texts.get();
                                    n && n.show(e, t, a)
                                }
                            }(this.x, this.y - 50, e), this.setTintFill(16777215), setTimeout((function() {
                                t.clearTint()
                            }), 100), this.hp <= 0 && (this.setActive(!1), this.setVisible(!1))
                    },
                    update: function(e, t) {
                        this.pathProg += this.speed * t, this.pathPos = new d.a.Math.Vector2, y.enemyPath.getPoint(this.pathProg, this.pathPos), this.setPosition(this.pathPos.x, this.pathPos.y), this.pathProg >= 1 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                x = function(e, t, a, n) {
                    var r = 0,
                        o = null;
                    return y.enemies.getChildren().filter((function(r) {
                        return r.active && function(e, t, a, n, r) {
                            return Math.pow(e - a, 2) + Math.pow(t - n, 2) < Math.pow(r, 2)
                        }(r.x, r.y, e, t, a * y.tileSize) && !(n || []).includes(r)
                    })).forEach((function(e) {
                        e.pathProg > r && (r = e.pathProg, o = e)
                    })), o
                },
                C = function(e, t) {
                    return t * y.tileSize / e
                },
                k = function(e, t, a, n) {
                    e.clear(), e.lineStyle(2, 3815994, .5), e.fillStyle(3815994, .05);
                    var r = function(e, t) {
                        return new d.a.Math.Vector2((e + .5) * y.tileSize, (t + .5) * y.tileSize)
                    }(t, a);
                    e.fillCircle(r.x, r.y, n * y.tileSize), e.strokePath()
                },
                E = {
                    turtle: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Twirling Turtle",
                        blook: "Turtle",
                        img: g.a.Turtle,
                        baseStats: {
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 1e3,
                            intervalRate: 100,
                            speed: 5,
                            numProjectiles: 1,
                            range: 3,
                            lifespanMult: 1,
                            texture: "turtle",
                            width: .7,
                            projectile: "shell",
                            projectileTexture: "shell-1",
                            projectileWidth: .35
                        },
                        upgrades: [
                            [{
                                desc: "+5 damage per shell",
                                dmg: 5
                            }, {
                                desc: "Fire 1 more shell",
                                numProjectiles: 1
                            }],
                            [{
                                desc: "+5 damage per shell",
                                dmg: 5
                            }, {
                                desc: "Fire 1 more shell",
                                numProjectiles: 1
                            }],
                            [{
                                desc: "",
                                dmg: 5
                            }, {
                                desc: "",
                                dmg: 10
                            }],
                            [{
                                desc: "",
                                dmg: 5
                            }, {
                                desc: "",
                                dmg: 10
                            }]
                        ]
                    }
                },
                S = function(e, t) {
                    var a = JSON.parse(JSON.stringify(E[e].baseStats));
                    return t.forEach((function(t, n) {
                        var r = E[e].upgrades[n][t];
                        r.dmg && (a.dmg += r.dmg), r.numProjectiles && (a.numProjectiles += r.numProjectiles)
                    })), a
                },
                j = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, y.scene, 0, 0, "turtle"), this.setDepth(4)
                    },
                    spawn: function(e, t, a, n) {
                        var r = S(e, t);
                        this.setTexture(r.texture), this.setScale(C(this.width, r.width)), this.type = e, this.upgrades = t, this.nextProjectileRound = 0, this.projectilesRemaining = 0, this.nextProjectile = 0, this.lastAngle = 0, this.gridPos = {
                            x: a,
                            y: n
                        }, this.setPosition((a + .5) * y.tileSize, (n + .5) * y.tileSize), this.setActive(!0), this.setVisible(!0)
                    },
                    update: function(e, t) {
                        if (this.nextProjectileRound -= t, this.nextProjectile -= t, this.nextProjectileRound <= 0) {
                            var a = S(this.type, this.upgrades),
                                n = x(this.x, this.y, a.range);
                            if (!n) return;
                            this.lastAngle = d.a.Math.Angle.Between(this.x, this.y, n.x, n.y), this.projectilesRemaining = a.numProjectiles, this.nextProjectile = 0, this.nextProjectileRound = a.fireRate
                        }
                        if (this.projectilesRemaining > 0 && this.nextProjectile <= 0) {
                            var r = S(this.type, this.upgrades),
                                o = x(this.x, this.y, r.range);
                            o && (this.lastAngle = d.a.Math.Angle.Between(this.x, this.y, o.x, o.y)), this.setRotation(this.lastAngle - Math.PI / 2), this.projectilesRemaining -= 1, this.nextProjectile = r.intervalRate, i = r, s = this.x, l = this.y, (c = y.projectiles[i.projectile].get()) && c.fire(i, s, l)
                        }
                        var i, s, l, c
                    },
                    upgrade: function(e) {
                        this.upgrades.push(e);
                        var t = S(this.type, this.upgrades);
                        this.setTexture(t.texture), this.setScale(C(this.width, t.width))
                    }
                }),
                N = a("74sb"),
                T = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, y.scene, 0, 0, "shell-1"), this.setDepth(3)
                    },
                    fire: function(e, t, a) {
                        var n = x(t, a, e.range);
                        if (!n) return this.setActive(!1), void this.setVisible(!1);
                        this.setTexture(e.projectileTexture), this.setScale(C(this.width, e.projectileWidth)), this.setPosition(t, a), this.dmg = e.dmg, this.maxTargets = e.maxTargets, this.targets = [];
                        var r = d.a.Math.Angle.Between(t, a, n.x, n.y);
                        y.scene.physics.velocityFromAngle(d.a.Math.RadToDeg(r), e.speed * y.tileSize, this.body.velocity), this.setRotation(r + Math.PI / 2), this.body.setAngularVelocity((r > 0 ? 1 : -1) * Object(N.q)(720, 800)), this.lifespan = (e.range + .5) / e.speed * 1e3 * e.lifespanMult, this.setActive(!0), this.setVisible(!0)
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                O = new d.a.Class({
                    Extends: d.a.GameObjects.Text,
                    initialize: function() {
                        d.a.GameObjects.Text.call(this, y.scene, 0, 0, "", {
                            fontFamily: "Arial",
                            fontSize: y.tileSize / 3,
                            color: "#fff",
                            align: "center"
                        }), this.style.stroke = "#3a3a3a", this.style.strokeThickness = 4, this.setOrigin(.5), this.setDepth(15)
                    },
                    show: function(e, t, a) {
                        var n;
                        this.setActive(!0), this.setVisible(!0), this.setText(a), this.setScale(.4), this.setColor((n = Number(a)) <= 10 ? "#fff" : n <= 30 ? "#ff9933" : "#ff3333"), this.setPosition(e + Object(N.q)(-.15, .15) * y.tileSize, t + Object(N.q)(.4, .7) * y.tileSize), y.scene.addTween({
                            targets: this,
                            scaleX: 1,
                            scaleY: 1,
                            ease: "Sine.easeInOut",
                            duration: 250,
                            yoyo: !0
                        }), setTimeout(this.hide.bind(this), 500)
                    },
                    hide: function() {
                        this.setActive(!1), this.setVisible(!1)
                    }
                });

            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function z(e, t) {
                return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = M(e);
                    if (t) {
                        var r = M(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return q(this, a)
                }
            }

            function q(e, t) {
                if (t && ("object" === B(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = [
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [2, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
                    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                    [2, 1, 1, 1, 1, 0, 0, 0, 1, 2],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                G = function(e, t) {
                    e.active && t.active && !t.noDmg && !t.targets.includes(e) && (t.targets.length + 1 >= t.maxTargets ? (t.setActive(!1), t.setVisible(!1)) : t.targets.push(e), e.receiveDamage(Math.min(e.hp, t.dmg), t.knockback))
                },
                U = function(e) {
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
                        }), t && z(e, t)
                    }(o, e);
                    var t, a, n, r = A(o);

                    function o() {
                        return L(this, o), r.apply(this, arguments)
                    }
                    return t = o, (a = [{
                        key: "preload",
                        value: function() {
                            var e = this,
                                t = Math.floor(document.getElementById("phaser-td").offsetWidth / y.numColumns),
                                a = Math.floor(document.getElementById("phaser-td").offsetHeight / y.numRows);
                            y.tileSize = Math.min(t, a), Object.entries(v).forEach((function(t) {
                                var a = I(t, 2),
                                    n = a[0],
                                    r = a[1];
                                e.load.svg(n, r.url, {
                                    width: y.tileSize * r.width,
                                    height: y.tileSize * r.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            y.scene = this, y.map = JSON.parse(JSON.stringify(F));
                            var t = y.numColumns * y.tileSize,
                                a = y.numRows * y.tileSize;
                            this.game.scale.resize(t, a), this.cameras.main.setBounds(0, 0, t, a), this.physics.world.setBounds(0, 0, t, a);
                            var n = this.add.image(t / 2, a / 2, "map");
                            n.setScale(t / n.width),
                                function(e) {
                                    e.lineStyle(1, 3815994, .5);
                                    for (var t = 1; t < y.numColumns; t++) e.moveTo(t * y.tileSize, 0), e.lineTo(t * y.tileSize, y.numRows * y.tileSize);
                                    for (var a = 1; a < y.numRows; a++) e.moveTo(0, a * y.tileSize), e.lineTo(y.numColumns * y.tileSize, a * y.tileSize);
                                    e.strokePath()
                                }(this.add.graphics()), this.rangeGraphics = this.add.graphics(), y.enemyPath = this.add.path(-.5 * y.tileSize, 5.5 * y.tileSize), y.enemyPath.lineTo(2.5 * y.tileSize, 5.5 * y.tileSize), y.enemyPath.lineTo(2.5 * y.tileSize, 1.5 * y.tileSize), y.enemyPath.lineTo(4.5 * y.tileSize, 1.5 * y.tileSize), y.enemyPath.lineTo(4.5 * y.tileSize, 7.5 * y.tileSize), y.enemyPath.lineTo(1.5 * y.tileSize, 7.5 * y.tileSize), y.enemyPath.lineTo(1.5 * y.tileSize, 9.5 * y.tileSize), y.enemyPath.lineTo(8.5 * y.tileSize, 9.5 * y.tileSize), y.enemyPath.lineTo(8.5 * y.tileSize, 6.5 * y.tileSize), y.enemyPath.lineTo(6.5 * y.tileSize, 6.5 * y.tileSize), y.enemyPath.lineTo(6.5 * y.tileSize, 2.5 * y.tileSize), y.enemyPath.lineTo(10.5 * y.tileSize, 2.5 * y.tileSize), y.enemies = this.physics.add.group({
                                    classType: w,
                                    runChildUpdate: !0
                                }), this.nextEnemy = 0, y.texts = this.add.group({
                                    classType: O
                                }), y.towers = this.add.group({
                                    classType: j,
                                    runChildUpdate: !0
                                }), y.projectiles.shell = this.physics.add.group({
                                    classType: T,
                                    runChildUpdate: !0
                                }), this.physics.add.overlap(y.enemies, y.projectiles.shell, G), this.input.on("pointermove", (function(t) {
                                    if (y.buyingTower) {
                                        var a = {
                                            x: Math.floor(t.x / y.tileSize),
                                            y: Math.floor(t.y / y.tileSize)
                                        };
                                        if (y.map[a.y][a.x]) return e.tempTower && e.tempTower.destroy(), void e.rangeGraphics.clear();
                                        var n = S(y.buyingTower, []);
                                        e.tempTower && e.tempTower.destroy(), e.tempTower = e.add.image((a.x + .5) * y.tileSize, (a.y + .5) * y.tileSize, n.texture), e.tempTower.setScale(C(e.tempTower.width, n.width)), e.tempTower.setAlpha(.7), k(e.rangeGraphics, a.x, a.y, n.range)
                                    }
                                })), this.input.on("pointerdown", (function(t) {
                                    var a = {
                                        x: Math.floor(t.x / y.tileSize),
                                        y: Math.floor(t.y / y.tileSize)
                                    };
                                    if (y.map[a.y][a.x]) {
                                        if (3 === y.map[a.y][a.x]) {
                                            var n = y.towers.getChildren(),
                                                r = null;
                                            n.forEach((function(e) {
                                                e.gridPos.x === a.x && e.gridPos.y === a.y && (r = e)
                                            })), r && e.game.events.emit("select-tower", r)
                                        }
                                        return y.buyingTower = "", e.input.setDefaultCursor("default"), e.tempTower && e.tempTower.destroy(), void e.rangeGraphics.clear()
                                    }
                                    if (y.buyingTower) {
                                        y.map[a.y][a.x] = 3;
                                        var o = y.towers.get();
                                        o && (o.spawn(y.buyingTower, [], a.x, a.y), y.buyingTower = "", e.input.setDefaultCursor("default"), e.tempTower && e.tempTower.destroy(), e.rangeGraphics.clear())
                                    }
                                })), this.game.events.on("user-pause", (function() {
                                    y.isPaused = !0, e.scene.pause()
                                })), this.game.events.on("user-resume", (function() {
                                    y.isPaused = !1, e.scene.resume()
                                })), this.game.events.on("hidden", (function() {
                                    e.scene.pause()
                                })), this.game.events.on("visible", (function() {
                                    y.isPaused ? e.scene.pause() : e.scene.resume()
                                })), this.game.events.on("preview-tower", (function(t) {
                                    y.buyingTower = t, e.input.setDefaultCursor("pointer")
                                })), this.game.events.on("upgrade-tower", (function(t, a) {
                                    var n = y.towers.getChildren(),
                                        r = null;
                                    n.forEach((function(e) {
                                        e.gridPos.x === t.gridPos.x && e.gridPos.y === t.gridPos.y && (r = e)
                                    })), r && r.upgrade(a), e.game.events.emit("select-tower", r)
                                }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (this.nextEnemy -= t, this.nextEnemy <= 0) {
                                var a = y.enemies.get();
                                a && (a.start("enemy-blue"), this.nextEnemy = 500)
                            }
                        }
                    }, {
                        key: "addTween",
                        value: function(e) {
                            this.tweens.add(e)
                        }
                    }]) && R(t.prototype, a), n && R(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), o
                }(d.a.Scene),
                D = {
                    type: d.a.WEBGL,
                    parent: "phaser-td",
                    width: "100%",
                    height: "100%",
                    scale: {
                        mode: d.a.Scale.NONE,
                        autoCenter: d.a.Scale.CENTER_BOTH
                    },
                    physics: {
                        default: "arcade"
                    },
                    scene: U
                },
                H = a("XTAU"),
                Y = a("Bihk"),
                Q = a.n(Y),
                W = a("Xst1"),
                J = a.n(W),
                V = a("+fLB"),
                X = a("E8Bj"),
                K = a("0oXL");

            function Z(e) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ee(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function te() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                te = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return E()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = b(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    _ = p && p(p(k([])));
                _ && _ !== t && a.call(_, r) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == Z(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(y, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
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

            function ae(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function ne(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function re(e, t) {
                return (re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function oe(e) {
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
                    var a, n = le(e);
                    if (t) {
                        var r = le(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return ie(this, a)
                }
            }

            function ie(e, t) {
                if (t && ("object" === Z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return se(e)
            }

            function se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function le(e) {
                return (le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ce = function(e) {
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
                    }), t && re(e, t)
                }(c, e);
                var t, a, n, o, i, l = oe(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = l.call(this, e)).state = {
                        game: D,
                        isPaused: !1,
                        selectedTower: null
                    }, t.pause = t.pause.bind(se(t)), t.selectTower = t.selectTower.bind(se(t)), t.upgradeTower = t.upgradeTower.bind(se(t)), t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (o = te().mark((function e() {
                        var t, a = this;
                        return te().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if ((t = e.sent) && ["Bot", "test"].includes(t.name)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    if (this.state.game.instance) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8, new Promise((function(e) {
                                        return setTimeout(e, 500)
                                    }));
                                case 8:
                                    e.next = 5;
                                    break;
                                case 10:
                                    this.state.game.instance.events.on("select-tower", (function(e) {
                                        a.setState({
                                            selectedTower: e || null
                                        })
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function i(e) {
                                ae(r, a, n, i, s, "next", e)
                            }

                            function s(e) {
                                ae(r, a, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "pause",
                    value: function() {
                        this.state.isPaused ? (this.setState({
                            isPaused: !1
                        }), this.state.game.instance.events.emit("user-resume")) : (this.setState({
                            isPaused: !0
                        }), this.state.game.instance.events.emit("user-pause"))
                    }
                }, {
                    key: "selectTower",
                    value: function(e) {
                        this.state.game.instance.events.emit("preview-tower", e)
                    }
                }, {
                    key: "upgradeTower",
                    value: function(e) {
                        this.state.game.instance.events.emit("upgrade-tower", this.state.selectedTower, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n = this;
                        return r.a.createElement("div", {
                            className: s.isMobile ? J.a.mBody : J.a.body
                        }, r.a.createElement(H.a, {
                            title: "Test 2 Blooket",
                            desc: "Pls don't come here."
                        }), r.a.createElement(u.a, {
                            game: this.state.game
                        }), r.a.createElement("div", {
                            className: Q.a.phaserHolder,
                            id: "phaser-td"
                        }), r.a.createElement("i", {
                            className: m()(this.state.isPaused ? "fas fa-play" : "fas fa-pause", Q.a.pauseButton),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.pause
                        }), r.a.createElement("div", {
                            className: Q.a.right
                        }, Object.entries(E).map((function(e) {
                            var t = $(e, 2),
                                a = t[0],
                                o = t[1];
                            return r.a.createElement("div", {
                                className: Q.a.towerContainer,
                                key: a,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.selectTower(a)
                                }
                            }, r.a.createElement(K.a, {
                                name: o.blook,
                                className: Q.a.towerBlook
                            }))
                        }))), r.a.createElement("div", {
                            className: m()(Q.a.left, (e = {}, t = Q.a.leftIn, a = this.state.selectedTower, t in e ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = a, e))
                        }, this.state.selectedTower ? r.a.createElement("div", {
                            className: Q.a.leftContainer
                        }, r.a.createElement("div", {
                            className: Q.a.leftName
                        }, E[this.state.selectedTower.type].title), E[this.state.selectedTower.type].upgrades[this.state.selectedTower.upgrades.length].map((function(e, t) {
                            return r.a.createElement("div", {
                                className: Q.a.upgradeContainer,
                                key: t,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.upgradeTower(t)
                                }
                            }, e.desc)
                        }))) : null))
                    }
                }]) && ne(t.prototype, a), n && ne(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(r.a.Component);
            ce.propTypes = {
                history: c.a.object,
                user: c.a.object
            };
            t.a = Object(X.c)(Object(i.g)(Object(o.b)()(Object(V.d)(ce))))
        },
        GZss: function(e, t, a) {
            var n = a("yFhE");
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
        N3JU: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("TSYQ"),
                f = a.n(u),
                m = a("cpGi"),
                h = a("H1WH"),
                d = a("wd/R"),
                p = a.n(d),
                _ = a("LAIx"),
                y = a("OoaU"),
                g = a.n(y),
                v = a("Xst1"),
                b = a.n(v),
                w = a("i4/Q"),
                x = a("XTAU"),
                C = a("0oXL"),
                k = a("vL5Z"),
                E = a("lmLo"),
                S = a("EJZK"),
                j = a("Cc5n"),
                N = a("E8Bj"),
                T = a("LHn/"),
                O = a("HRwi"),
                B = a("74sb"),
                I = a("qnYv"),
                P = a("SURz");

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                R = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return E()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = b(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    _ = p && p(p(k([])));
                _ && _ !== t && a.call(_, r) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == L(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(y, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
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

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(a), !0).forEach((function(t) {
                        q(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : z(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function q(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(e, t) : void 0
                }
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function D(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function H(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Y(e, t) {
                return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = V(e);
                    if (t) {
                        var r = V(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return W(this, a)
                }
            }

            function W(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return J(e)
            }

            function J(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = [{
                    name: "Total Tokens",
                    desc: "Total Tokens Earned at Any Time",
                    stat: "totalTokens",
                    url: T.a.basic.token,
                    topStat: !0
                }, {
                    name: "Blooks Unlocked",
                    desc: "Total Unique Blooks Unlocked in the Market",
                    stat: "numUnlocks",
                    url: "https://media.blooket.com/image/upload/v1661496296/Media/uiTest/Blooks_Unlocked.svg",
                    topStat: !0
                }, {
                    name: "Wins",
                    desc: "1st Place Finishes in Any Game Mode",
                    stat: "wins",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Wins.svg"
                }, {
                    name: "Top 5s",
                    desc: "Top 5 Finishes in Any Game Mode",
                    stat: "topFives",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Top_5s.svg"
                }, {
                    name: "Total Points",
                    desc: "Total Points Earned in Classic",
                    stat: "classicPoints",
                    url: "https://media.blooket.com/image/upload/v1661496294/Media/uiTest/points.svg"
                }, {
                    name: "Racing Progress",
                    desc: "Total Correct Answers in Racing",
                    stat: "racingProgress",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg"
                }, {
                    name: "Total Cash",
                    desc: "Total Cash at the end of Factory Games",
                    stat: "totalCash",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Total_Cash.svg"
                }, {
                    name: "Players Defeated",
                    desc: "Players You've Placed Ahead of in Any Game Mode",
                    stat: "playersDefeated",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Players_Defeated.svg"
                }, {
                    name: "Correct Answers",
                    desc: "Total Correct Answers in Any Game Mode",
                    stat: "correctAnswers",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Correct_Answers.svg"
                }, {
                    name: "Games Played",
                    desc: "Total Games Played in Any Game Mode",
                    stat: "gamesPlayed",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg"
                }, {
                    name: "Factory Upgrades",
                    desc: "Total Times You've Upgraded Blooks in Factory",
                    stat: "upgrades",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg"
                }, {
                    name: "Showdown Wins",
                    desc: "Wins in Showdowns during Battle Royale",
                    stat: "showdownWins",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Showdown_Wins.svg"
                }, {
                    name: "Total Crypto",
                    desc: "Total Crypto at the end of Crypto Hack Games",
                    stat: "totalCrypto",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg"
                }, {
                    name: "Total Gold",
                    desc: "Total Gold at the end of Gold Quest Games",
                    stat: "totalGold",
                    url: "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg"
                }, {
                    name: "Total Fish Weight",
                    desc: "Total weight (lbs) of fish caught in Fishing Frenzy",
                    stat: "totalFishWeight",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg"
                }, {
                    name: "Daily Tokens Available",
                    desc: "Remaining Tokens before reaching Daily Limit",
                    stat: "tokensAvailable",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Days.svg"
                }, {
                    name: "Time Before Reset",
                    desc: "Time before Daily Token Limit resets",
                    stat: "timeLeft",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Time_Before_Reset.svg",
                    nonUser: !0
                }],
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
                        }), t && Y(e, t)
                    }(l, e);
                    var t, a, n, o, i, s = Q(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = s.call(this, e)).state = {
                            ready: !1,
                            user: null,
                            mostUsedBlook: "Light Blue",
                            level: 0,
                            xp: 0,
                            tokensAvailable: 0,
                            timeLeft: "",
                            blookUsage: [],
                            gameHistory: [],
                            customBlooks: ["", "", "", "", ""],
                            editingBlook: -1
                        }, t.here = !0, t.stopEditing = t.stopEditing.bind(J(t)), t.deleteBlook = t.deleteBlook.bind(J(t)), t.changeBlook = t.changeBlook.bind(J(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (o = R().mark((function e() {
                            var t, a, n, r, o = this;
                            return R().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Object(B.j)("name"), a = Object(B.j)("id"), e.next = 4, this.props.user.getData();
                                    case 4:
                                        if (n = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 7:
                                        this.setState({
                                            user: n
                                        }), r = a ? {
                                            params: {
                                                id: a
                                            }
                                        } : t ? {
                                            params: {
                                                name: t
                                            }
                                        } : null, I.a.get(a ? "/api/users/byid" : "/api/users", r).then((function(e) {
                                            if (e.data) {
                                                var t = F(e.data.gameHistory.slice(Math.max(e.data.gameHistory.length - 7, 0), e.data.gameHistory.length));
                                                t.reverse();
                                                var a = "Light Blue",
                                                    r = F(Object.entries(e.data.blookUsage).map((function(e) {
                                                        var t = M(e, 2);
                                                        return {
                                                            name: t[0],
                                                            uses: t[1]
                                                        }
                                                    })));
                                                r.sort((function(e, t) {
                                                    return t.uses - e.uses
                                                })), (r = r.slice(0, 5)).length > 0 && (a = r[0].name);
                                                var i = e.data.xp || 0,
                                                    s = Object(O.b)(i);
                                                if (o.here) {
                                                    var l = p.a.duration(p.a.utc().add(1, "day").startOf("day").diff(p.a.utc()));
                                                    o.setState({
                                                        ready: !0,
                                                        level: s.level,
                                                        xp: s.xp,
                                                        mostUsedBlook: a,
                                                        user: A(A({}, n), e.data),
                                                        customBlooks: 5 === e.data.customBlooks.length ? e.data.customBlooks : o.state.customBlooks,
                                                        tokensAvailable: p.a.utc(e.data.lastTokenDay).isSame(p.a.utc(), "d") ? e.data.tokensAvailable : 500,
                                                        timeLeft: "".concat(l.hours(), ":").concat(l.minutes() < 10 ? "0" : "").concat(l.minutes()),
                                                        gameHistory: t,
                                                        blookUsage: r
                                                    }, (function() {
                                                        o.timeInterval = setInterval((function() {
                                                            var e = p.a.duration(p.a.utc().add(1, "day").startOf("day").diff(p.a.utc()));
                                                            o.setState({
                                                                timeLeft: "".concat(e.hours(), ":").concat(e.minutes() < 10 ? "0" : "").concat(e.minutes())
                                                            })
                                                        }), 6e4)
                                                    }))
                                                }
                                            }
                                        })).catch((function(e) {
                                            console.error(e)
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = o.apply(e, t);

                                function i(e) {
                                    D(r, a, n, i, s, "next", e)
                                }

                                function s(e) {
                                    D(r, a, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }, function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1, clearInterval(this.timeInterval)
                        }
                    }, {
                        key: "stopEditing",
                        value: function(e, t) {
                            var a = this;
                            if (!e) return this.setState({
                                editingBlook: -1
                            });
                            var n = F(this.state.customBlooks);
                            n[this.state.editingBlook] = "", this.setState({
                                customBlooks: n
                            }, (function() {
                                n[a.state.editingBlook] = t, a.setState({
                                    customBlooks: n,
                                    editingBlook: -1
                                })
                            })), I.a.put("/api/users/custom-blooks", {
                                blookIndex: this.state.editingBlook,
                                customBlook: t
                            }).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "deleteBlook",
                        value: function(e) {
                            var t = F(this.state.customBlooks);
                            t[e] = "", this.setState({
                                customBlooks: t,
                                editingBlook: -1
                            }), I.a.put("/api/users/custom-blooks", {
                                blookIndex: e,
                                customBlook: ""
                            }).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "changeBlook",
                        value: function(e) {
                            var t = this;
                            if (e === this.state.user.blook) return this.setState({
                                isChangingBlook: !1
                            });
                            this.setState({
                                user: A(A({}, this.state.user), {}, {
                                    blook: e
                                }),
                                isChangingBlook: !1
                            }), I.a.put("/api/users/change/blook", {
                                blook: e
                            }).then((function() {
                                t.props.user.getLoggedIn()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement("div", {
                                className: h.isMobile ? g.a.mBody : g.a.body
                            }, r.a.createElement(x.a, {
                                title: "".concat(this.state.user ? this.state.user.name : "Stats", " | Blooket")
                            }), r.a.createElement(w.a, {
                                user: this.state.user,
                                page: "Stats"
                            }), r.a.createElement("div", {
                                className: g.a.background
                            }, r.a.createElement("div", {
                                className: g.a.blooksBackground,
                                style: {
                                    backgroundImage: "url(".concat(T.a.basic.blookCheckers, ")")
                                }
                            })), r.a.createElement("div", {
                                className: b.a.profileBodyMax,
                                style: {
                                    maxWidth: 1266
                                }
                            }, this.state.ready ? r.a.createElement("div", {
                                className: g.a.fullContainer
                            }, r.a.createElement("div", {
                                className: g.a.headerRow
                            }, r.a.createElement("div", {
                                className: g.a.headerLeft
                            }, r.a.createElement("div", {
                                className: g.a.headerLeftRow
                            }, r.a.createElement("div", {
                                className: g.a.headerBlookContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        isChangingBlook: !0
                                    })
                                }
                            }, r.a.createElement(C.a, {
                                name: this.state.user.blook || "Chick",
                                className: g.a.headerBlook
                            })), r.a.createElement("div", {
                                className: g.a.headerInfo
                            }, r.a.createElement("div", {
                                className: g.a.headerBanner
                            }, r.a.createElement("div", {
                                className: g.a.headerName
                            }, this.state.user.name), "Newbie"), r.a.createElement("div", {
                                className: g.a.levelBarContainer
                            }, r.a.createElement("div", {
                                className: g.a.levelBar
                            }, r.a.createElement("div", {
                                className: g.a.levelBarInside,
                                style: {
                                    transform: "scaleX(".concat(100 === this.state.level ? 1 : this.state.xp / O.a[this.state.level].xp, ")")
                                }
                            })), r.a.createElement("div", {
                                className: g.a.levelStarContainer
                            }, r.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1660352045/Media/uiTest/LVL_Bar.svg",
                                alt: "Star",
                                className: g.a.levelStar,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: g.a.levelStarText
                            }, this.state.level))))), r.a.createElement("div", {
                                className: g.a.headerLeftButtons
                            }, r.a.createElement(E.a, {
                                color: "#9a49aa",
                                outsideClass: g.a.headerButton,
                                onClick: function() {
                                    return e.props.history.push("/play")
                                }
                            }, r.a.createElement("div", {
                                className: g.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: f()(g.a.headerButtonIcon, "fas fa-play")
                            }), "Play Now!")), r.a.createElement(E.a, {
                                color: "#ffa31e",
                                outsideClass: g.a.headerButton,
                                onClick: function() {
                                    return e.props.history.push("/market")
                                }
                            }, r.a.createElement("div", {
                                className: g.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: f()(g.a.headerButtonIcon, "fas fa-store")
                            }), "Unlock Blooks")), r.a.createElement(E.a, {
                                color: "#1e92ff",
                                outsideClass: g.a.headerButton,
                                onClick: function() {
                                    return e.props.history.push("/blooks")
                                }
                            }, r.a.createElement("div", {
                                className: g.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: f()(g.a.headerButtonIcon, "fas fa-suitcase")
                            }), "Manage Blooks"))))), r.a.createElement(j.a, {
                                level: this.state.level,
                                xp: this.state.xp
                            }), r.a.createElement("div", {
                                className: g.a.bottomContainer
                            }, r.a.createElement("div", {
                                className: g.a.left
                            }, this.state.blookUsage.length > 0 ? r.a.createElement("div", {
                                className: g.a.blookUsageContainer
                            }, r.a.createElement("div", {
                                className: g.a.containerHeader
                            }, r.a.createElement("div", {
                                className: g.a.containerHeaderInside
                            }, "Blook Usage")), this.state.blookUsage.map((function(t) {
                                return r.a.createElement("div", {
                                    key: t.name,
                                    className: g.a.blookUsageRow
                                }, r.a.createElement(C.a, {
                                    name: t.name,
                                    className: g.a.blookUsageBlook
                                }), r.a.createElement("div", {
                                    className: g.a.blookUsageBarContainer
                                }, r.a.createElement("div", {
                                    className: g.a.blookUsageBar,
                                    style: {
                                        transform: "scaleX(".concat(t.uses / e.state.blookUsage[0].uses, ")"),
                                        backgroundColor: Object(_.a)(t.name)
                                    }
                                })))
                            })), r.a.createElement("div", {
                                className: g.a.blookUsageScale
                            }, r.a.createElement("div", {
                                className: g.a.blookUsageNum
                            }, "0"), r.a.createElement("div", {
                                className: g.a.blookUsageScaleBar
                            }), r.a.createElement("div", {
                                className: g.a.blookUsageNum
                            }, this.state.blookUsage[0].uses)), r.a.createElement("div", {
                                className: g.a.blookUsageText
                            }, "Plays")) : null, r.a.createElement("div", {
                                className: g.a.historyContainer,
                                style: {
                                    marginTop: 0 === this.state.blookUsage.length ? 0 : null
                                }
                            }, r.a.createElement("div", {
                                className: g.a.containerHeader
                            }, r.a.createElement("div", {
                                className: g.a.containerHeaderInside
                            }, "History")), this.state.gameHistory.length > 0 ? this.state.gameHistory.map((function(e, t) {
                                return r.a.createElement("div", {
                                    key: t,
                                    className: g.a.historyGameContainer
                                }, r.a.createElement(C.a, {
                                    name: e.blookUsed,
                                    className: g.a.historyBlook
                                }), r.a.createElement("div", {
                                    className: g.a.historyInfo
                                }, r.a.createElement("div", {
                                    className: g.a.historyName
                                }, e.name), r.a.createElement("div", {
                                    className: g.a.historyPlace
                                }, "".concat(e.place).concat(Object(B.h)(e.place), " Place"))), void 0 !== e.candy ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.candy)), r.a.createElement("img", {
                                    src: T.a.basic.candyDark,
                                    alt: "Candy",
                                    className: g.a.gameStatImg,
                                    draggable: !1
                                })) : void 0 !== e.gold ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.gold)), r.a.createElement("img", {
                                    src: T.a.basic.gold,
                                    alt: "Gold",
                                    className: g.a.gameStatImg,
                                    draggable: !1
                                })) : void 0 !== e.xp ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.xp)), r.a.createElement("img", {
                                    src: T.a.basic.xp,
                                    alt: "Xp",
                                    className: g.a.gameStatImg,
                                    style: {
                                        width: 18
                                    },
                                    draggable: !1
                                })) : void 0 !== e.toys ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.toys)), r.a.createElement("img", {
                                    src: T.a.basic.toy,
                                    alt: "Toy",
                                    className: g.a.gameStatImg,
                                    draggable: !1
                                })) : void 0 !== e.shamrocks ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.shamrocks)), r.a.createElement("img", {
                                    src: T.a.shamrock.shamrockBlack,
                                    alt: "Shamrock",
                                    className: g.a.gameStatImg,
                                    draggable: !1
                                })) : void 0 !== e.snow ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.v)(e.snow)), r.a.createElement("i", {
                                    className: f()(g.a.snowIcon, "fas fa-snowflake")
                                })) : void 0 !== e.cash ? r.a.createElement("div", {
                                    className: g.a.pointsText
                                }, "$".concat(Object(B.v)(e.cash))) : void 0 !== e.crypto ? r.a.createElement("div", {
                                    className: g.a.pointsText
                                }, "₿ ".concat(Object(B.v)(e.crypto))) : void 0 !== e.weight ? r.a.createElement("div", {
                                    className: g.a.pointsText
                                }, "".concat(Object(B.v)(e.weight), " lbs")) : void 0 !== e.classicPoints ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.o)(e.classicPoints)), r.a.createElement("i", {
                                    className: f()(g.a.snowIcon, "far fa-check-square")
                                })) : void 0 !== e.wins ? r.a.createElement("div", {
                                    className: g.a.pointsText
                                }, "".concat(e.wins, " ").concat(1 === e.wins ? "Win" : "Wins")) : void 0 !== e.result ? r.a.createElement("div", {
                                    className: g.a.pointsText
                                }, e.result) : void 0 !== e.guests ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.o)(e.guests)), r.a.createElement("i", {
                                    className: f()(g.a.snowIcon, "fas fa-users")
                                })) : void 0 !== e.dmg ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.o)(e.dmg)), r.a.createElement("i", {
                                    className: f()(g.a.snowIcon, "fas fa-splotch")
                                })) : void 0 !== e.numBlooks ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.o)(e.numBlooks)), r.a.createElement(C.a, {
                                    name: e.blookUsed,
                                    className: g.a.standingBlook
                                })) : void 0 !== e.fossils ? r.a.createElement("div", {
                                    className: g.a.gameStatContainer
                                }, r.a.createElement("div", {
                                    className: g.a.gameStatText
                                }, Object(B.o)(e.fossils)), r.a.createElement("i", {
                                    className: f()(g.a.fossilIcon, "fas fa-bone")
                                })) : null)
                            })) : r.a.createElement("div", {
                                className: g.a.historyNothing
                            }, "No Games Played Yet"))), r.a.createElement("div", {
                                className: g.a.right
                            }, r.a.createElement("div", {
                                className: g.a.customBlookContainer
                            }, r.a.createElement("div", {
                                className: g.a.containerHeader
                            }, r.a.createElement("div", {
                                className: g.a.containerHeaderInside
                            }, "Custom Blooks")), this.state.customBlooks.map((function(t, a) {
                                return t ? r.a.createElement("div", {
                                    key: a,
                                    className: g.a.blookContainer
                                }, r.a.createElement(S.c, {
                                    code: t,
                                    className: g.a.customBlook
                                }), r.a.createElement("div", {
                                    className: g.a.customIconRow
                                }, r.a.createElement("i", {
                                    className: f()("fas fa-pencil-alt", g.a.customIcon),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            editingBlook: a
                                        })
                                    }
                                }), r.a.createElement("i", {
                                    className: f()("fas fa-trash-alt", g.a.customIcon),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.deleteBlook(a)
                                    }
                                }))) : r.a.createElement("div", {
                                    key: a,
                                    className: g.a.noBlookContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            editingBlook: a
                                        })
                                    }
                                }, r.a.createElement("i", {
                                    className: f()("fas fa-plus-square", g.a.noBlookIcon)
                                }), "New Blook")
                            }))), r.a.createElement("div", {
                                className: g.a.statsContainer
                            }, r.a.createElement("div", {
                                className: g.a.containerHeader
                            }, r.a.createElement("div", {
                                className: g.a.containerHeaderInside
                            }, "Stats")), r.a.createElement("div", {
                                className: g.a.topStats
                            }, r.a.createElement(m.a, {
                                place: "bottom",
                                effect: "solid",
                                className: b.a.tooltip
                            }), X.filter((function(e) {
                                return e.topStat
                            })).map((function(t) {
                                return r.a.createElement("div", {
                                    key: t.name,
                                    className: g.a.statContainer,
                                    "data-tip": t.desc
                                }, r.a.createElement("div", {
                                    className: g.a.statTitle
                                }, t.name), r.a.createElement("div", {
                                    className: g.a.statNum
                                }, e.state.user[t.stat] > 9999999999 ? Object(B.v)(e.state.user[t.stat]) : Object(B.o)(e.state.user[t.stat])), t.url ? r.a.createElement("img", {
                                    src: t.url,
                                    alt: t.name,
                                    className: "Total Tokens" === t.name ? g.a.tokenImg : g.a.statImg,
                                    draggable: !1
                                }) : null)
                            }))), r.a.createElement("div", {
                                className: g.a.statsWrapper
                            }, X.filter((function(e) {
                                return !e.topStat
                            })).map((function(t) {
                                return r.a.createElement("div", {
                                    key: t.name,
                                    className: g.a.statContainer
                                }, r.a.createElement("div", {
                                    className: g.a.statTitle
                                }, t.name), r.a.createElement("div", {
                                    className: g.a.statNum
                                }, t.nonUser ? e.state[t.stat] : e.state.user[t.stat] > 9999999999 ? Object(B.v)(e.state.user[t.stat]) : Object(B.o)(e.state.user[t.stat])), t.url ? r.a.createElement("img", {
                                    src: t.url,
                                    alt: t.name,
                                    className: g.a.statImg,
                                    draggable: !1
                                }) : null)
                            }))))))) : null), this.state.editingBlook >= 0 ? r.a.createElement(k.a, {
                                startCode: this.state.customBlooks[this.state.editingBlook],
                                level: this.state.level,
                                close: this.stopEditing
                            }) : this.state.isChangingBlook ? r.a.createElement(P.a, {
                                unlocks: this.state.user.unlocks || {},
                                onSelect: function(t) {
                                    return e.changeBlook(t)
                                },
                                onClose: function() {
                                    return e.setState({
                                        isChangingBlook: !1
                                    })
                                }
                            }) : null)
                        }
                    }]) && H(t.prototype, a), n && H(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(r.a.Component);
            K.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(N.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(K)))
        },
        OoaU: function(e, t, a) {
            var n = a("9ZgN");
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
        RLYa: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                i = a("/MKj"),
                s = a("17x9"),
                l = a.n(s),
                c = a("Ty5D"),
                u = a("55Ip"),
                f = a("n5rO"),
                m = a.n(f),
                h = a("TSYQ"),
                d = a.n(h),
                p = a("JeI0"),
                _ = a.n(p),
                y = a("wd/R"),
                g = a.n(y),
                v = a("H1WH"),
                b = a("EDFO"),
                w = a("Xst1"),
                x = a.n(w),
                C = a("0eKu"),
                k = a.n(C),
                E = a("XTAU"),
                S = a("ca/f"),
                j = a("XOuL"),
                N = a("E8Bj"),
                T = a("74sb"),
                O = a("qnYv"),
                B = a("vCpj"),
                I = a("FVRk"),
                P = a("i4/Q"),
                L = a("LHn/"),
                R = a("lmLo");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function A(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                q = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return E()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = b(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    _ = p && p(p(k([])));
                _ && _ !== t && a.call(_, r) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == z(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(y, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(y), s(y, i, "Generator"), s(y, r, (function() {
                    return this
                })), s(y, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
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

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(e, t) : void 0
                }
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function D(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function H(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Y(e, t) {
                return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = V(e);
                    if (t) {
                        var r = V(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return W(this, a)
                }
            }

            function W(e, t) {
                if (t && ("object" === z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return J(e)
            }

            function J(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(b.addStyles)();
            var X = new m.a;
            X.removeWords.apply(X, ["god"]);
            var K = ["Bot", "Tom@Blooket", "Spencer@Blooket"],
                Z = function(e) {
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
                        }), t && Y(e, t)
                    }(l, e);
                    var t, a, n, o, i, s = Q(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = s.call(this, e)).state = {
                            game: {
                                title: "",
                                author: "",
                                desc: "",
                                id: t.props.match.params.id || "",
                                private: !1,
                                questions: [],
                                coverImage: {}
                            },
                            playCount: 0,
                            favoriteCount: 0,
                            isVerified: !1,
                            isFavorited: !1,
                            isAdmin: !1,
                            showingAnswers: [],
                            reporting: !1,
                            loadingReport: !1,
                            report: "",
                            copying: !1,
                            canCopy: !1,
                            loadingCopy: !1,
                            ready: !1,
                            deletePop: !1,
                            loadingDelete: !1,
                            zoomedImage: ""
                        }, t.onShowAnswers = t.onShowAnswers.bind(J(t)), t.onHost = t.onHost.bind(J(t)), t.onSolo = t.onSolo.bind(J(t)), t.onFavorite = t.onFavorite.bind(J(t)), t.onReport = t.onReport.bind(J(t)), t.onCopy = t.onCopy.bind(J(t)), t.onCopyConfirm = t.onCopyConfirm.bind(J(t)), t.onDelete = t.onDelete.bind(J(t)), t.loading = !1, t.here = !0, t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (o = q().mark((function e() {
                            var t, a, n, r, o, i, s, l, c;
                            return q().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props.match.params.id, e.next = 3, this.props.user.getData();
                                    case 3:
                                        if (a = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 6:
                                        return n = [new Promise((function(e) {
                                            O.a.get("/api/games", {
                                                params: {
                                                    gameId: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(null)
                                            }))
                                        })), new Promise((function(e) {
                                            O.a.get("/api/users/favorited", {
                                                params: {
                                                    id: t
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(!1)
                                            }))
                                        }))], e.next = 9, Promise.all(n);
                                    case 9:
                                        if (r = e.sent, o = F(r, 2), i = o[0], s = o[1], (l = M(i.questions)).sort((function(e, t) {
                                                return e.number - t.number
                                            })), c = [], "true" === Object(T.j)("open") && (c = l.map((function(e) {
                                                return e.number
                                            }))), this.here) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 19:
                                        this.setState({
                                            game: {
                                                title: i.title,
                                                author: i.author,
                                                desc: i.desc,
                                                id: t,
                                                questions: l,
                                                private: i.private,
                                                coverImage: i.coverImage
                                            },
                                            playCount: i.playCount,
                                            favoriteCount: i.favoriteCount,
                                            isVerified: i.verified,
                                            lastChecked: i.lastChecked,
                                            showingAnswers: c,
                                            user: a,
                                            isAdmin: K.includes(a.name),
                                            isFavorited: s,
                                            ready: !0
                                        });
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = o.apply(e, t);

                                function i(e) {
                                    D(r, a, n, i, s, "next", e)
                                }

                                function s(e) {
                                    D(r, a, n, i, s, "throw", e)
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
                        key: "onShowAnswers",
                        value: function(e) {
                            var t = M(this.state.showingAnswers),
                                a = t.indexOf(e); - 1 === a ? t.push(e) : t.splice(a, 1), this.setState({
                                showingAnswers: t
                            })
                        }
                    }, {
                        key: "onFavorite",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, O.a.put("/api/users/updatefavorites", {
                                id: this.props.match.params.id,
                                isUnfavoriting: this.state.isFavorited
                            }).then((function() {
                                e.here && e.setState({
                                    isFavorited: !e.state.isFavorited,
                                    favoriteCount: e.state.isFavorited ? e.state.favoriteCount - 1 : e.state.favoriteCount + 1
                                }, (function() {
                                    e.loading = !1
                                }))
                            })).catch((function(t) {
                                console.error(t), e.loading = !1
                            })))
                        }
                    }, {
                        key: "onHost",
                        value: function() {
                            this.loading || (this.loading = !0, window.open("/host?id=".concat(this.state.game.id), "_blank").focus(), window.location.reload())
                        }
                    }, {
                        key: "onSolo",
                        value: function() {
                            this.loading || (this.loading = !0, this.state.game.id && window ? (window.open("/solo?id=".concat(this.state.game.id), "_blank").focus(), window.location.reload()) : this.loading = !1)
                        }
                    }, {
                        key: "onReport",
                        value: function(e) {
                            var t = this;
                            this.loading || (this.loading = !0, this.state.game.id ? !e || this.state.isVerified || this.state.lastChecked && g()(this.state.lastChecked).add(1, "week").isAfter() ? (this.loading = !1, this.setState({
                                reporting: !1,
                                loadingReport: !1
                            })) : (this.setState({
                                loadingReport: !0
                            }), O.a.post("/api/reports", {
                                id: this.state.game.id
                            }).then((function() {
                                t.here && (t.setState({
                                    reporting: !1,
                                    loadingReport: !1,
                                    report: ""
                                }), t.loading = !1)
                            })).catch((function(e) {
                                console.error(e)
                            }))) : this.loading = !1)
                        }
                    }, {
                        key: "onCopy",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, O.a.put("/api/users/plan").then((function(t) {
                                e.here && ("Starter" === t.data.plan ? e.setState({
                                    copying: !0
                                }) : e.setState({
                                    canCopy: !0,
                                    copying: !0
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (console.error(t), e.loading = !1, e.setState({
                                    copying: !1
                                }))
                            })))
                        }
                    }, {
                        key: "onCopyConfirm",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loadingCopy: !0
                            }), O.a.post("/api/games/copy", {
                                id: this.state.game.id,
                                isDuplicate: !0
                            }).then((function(t) {
                                e.here && e.props.history.push("/edit?id=".concat(t.data._id))
                            })).catch((function(t) {
                                e.here && (console.error(t), e.loading = !1, e.setState({
                                    copying: !1,
                                    loadingCopy: !1
                                }))
                            })))
                        }
                    }, {
                        key: "onDelete",
                        value: function() {
                            var e = this;
                            this.loading || (this.loading = !0, this.setState({
                                loadingDelete: !0
                            }), O.a.delete("/api/games", {
                                params: {
                                    gameId: this.state.game.id
                                }
                            }).then((function() {
                                e.props.history.push("/discover"), window.close()
                            })).catch((function(t) {
                                console.error(t), e.setState({
                                    loadingDelete: !1
                                })
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.ready && !this.state.game.title ? r.a.createElement(c.a, {
                                to: "/404"
                            }) : r.a.createElement("div", {
                                className: v.isMobile ? x.a.mBody : x.a.body
                            }, r.a.createElement(E.a, {
                                title: "".concat(this.state.ready ? this.state.game.title : "View Set", " | Blooket"),
                                desc: "View a Blooket question set to see the questions and their answers. Also, you can host, favorite, report, or duplicate a set here."
                            }), r.a.createElement(P.a, {
                                user: this.state.user,
                                page: "Discover"
                            }), this.state.ready ? r.a.createElement("div", {
                                className: x.a.profileBody
                            }, r.a.createElement("div", {
                                className: k.a.mainRow
                            }, r.a.createElement("div", {
                                className: k.a.leftColumn
                            }, this.state.game.coverImage ? r.a.createElement("div", {
                                className: k.a.coverImageContainer
                            }, r.a.createElement("img", {
                                src: Object(T.g)(this.state.game.coverImage.url),
                                alt: "Cover",
                                className: k.a.coverImage
                            })) : r.a.createElement("div", {
                                className: k.a.coverFillerContainer
                            }, r.a.createElement("img", {
                                src: L.a.basic.blooket,
                                alt: "Blooket",
                                className: k.a.coverFillerImage
                            })), r.a.createElement("div", {
                                className: k.a.headerTitle
                            }, this.state.game.title), r.a.createElement("div", {
                                className: k.a.headerDesc
                            }, this.state.game.desc), r.a.createElement("div", {
                                className: k.a.headerStatsWrapper
                            }, r.a.createElement("div", {
                                className: k.a.headerStat
                            }, "".concat(Object(T.o)(this.state.playCount), " ").concat(1 === this.state.playCount ? "Play" : "Plays")), r.a.createElement("div", {
                                className: k.a.headerStatDivider
                            }, "•"), r.a.createElement("div", {
                                className: k.a.headerStatSmall
                            }, "".concat(Object(T.o)(this.state.favoriteCount), " ").concat(1 === this.state.favoriteCount ? "Favorite" : "Favorites"))), r.a.createElement("div", {
                                className: k.a.headerButtonRow
                            }, r.a.createElement(R.a, {
                                color: "#f2f2f2",
                                onClick: this.onSolo,
                                outsideClass: k.a.soloButton
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside,
                                style: {
                                    color: "#3a3a3a"
                                }
                            }, r.a.createElement("i", {
                                className: d()(k.a.hostIcon, "fas fa-user-astronaut")
                            }), "Solo")), r.a.createElement(R.a, {
                                color: "#0bc2cf",
                                onClick: this.onHost,
                                outsideClass: k.a.bigScreen
                            }, r.a.createElement("div", {
                                className: k.a.headerButtonInside
                            }, r.a.createElement("i", {
                                className: d()(k.a.hostIcon, "fas fa-play")
                            }), "Host")), r.a.createElement("div", {
                                className: d()(k.a.noHostText, k.a.smallScreen)
                            }, "No Hosting on Mobile")), r.a.createElement("div", {
                                className: k.a.smallButtonsContainer
                            }, r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onFavorite
                            }, r.a.createElement("i", {
                                className: d()(k.a.smallIcon, this.state.isFavorited ? "fas fa-star" : "far fa-star")
                            }), this.state.isFavorited ? "Unfavorite" : "Favorite"), r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.onCopy
                            }, r.a.createElement("i", {
                                className: d()(k.a.smallIcon, "far fa-clone")
                            }), "Copy"), r.a.createElement("div", {
                                className: k.a.smallButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        reporting: !0
                                    })
                                }
                            }, r.a.createElement("i", {
                                className: d()(k.a.smallIcon, "far fa-flag")
                            }), "Report")), r.a.createElement("div", {
                                className: k.a.headerBottomContainer
                            }, r.a.createElement("i", {
                                className: d()(k.a.headerAuthorIcon, "fas fa-user")
                            }), r.a.createElement(u.b, {
                                className: k.a.headerAuthorText,
                                to: "/discover?n=".concat(encodeURIComponent(this.state.game.author))
                            }, this.state.game.author), this.state.isAdmin ? r.a.createElement("div", {
                                className: k.a.deleteButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deletePop: !0
                                    })
                                }
                            }, "Delete") : null)), r.a.createElement("div", {
                                className: k.a.questionSection
                            }, r.a.createElement("div", {
                                className: k.a.questionSectionTop
                            }, r.a.createElement("div", {
                                className: k.a.numQuestions
                            }, "".concat(Object(T.o)(this.state.game.questions.length), " Question").concat(1 === this.state.game.questions.length ? "" : "s")), r.a.createElement(R.a, {
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.setState({
                                        showingAnswers: e.state.showingAnswers.length === e.state.game.questions.length ? [] : e.state.game.questions.map((function(e) {
                                            return e.number
                                        }))
                                    })
                                }
                            }, r.a.createElement("div", {
                                className: k.a.showAnswersButtonInside
                            }, this.state.showingAnswers.length === this.state.game.questions.length ? "Hide Answers" : "Show Answers"))), this.state.game.questions.map((function(t) {
                                return r.a.createElement("div", {
                                    key: t.number,
                                    className: k.a.questionContainer
                                }, r.a.createElement("div", {
                                    className: k.a.questionRow
                                }, r.a.createElement("div", {
                                    className: k.a.questionTextContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onShowAnswers(t.number)
                                    }
                                }, r.a.createElement("div", {
                                    className: k.a.questionNum
                                }, "Question ".concat(t.number)), r.a.createElement("div", {
                                    className: k.a.questionTextRow
                                }, r.a.createElement("div", {
                                    className: d()(k.a.questionText, A({}, k.a.highlight, e.state.isAdmin && X.isProfane(t.question)))
                                }, t.question.includes("`*`") ? t.question.slice(0, t.question.indexOf("`*`")) : t.question))), t.image && t.image.url || t.audio && t.audio.url || t.question.includes("`*`") ? r.a.createElement("div", {
                                    className: k.a.questionImageContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: !t.image || !t.image.url || t.audio && t.audio.url ? function() {} : function() {
                                        return e.setState({
                                            zoomedImage: t.image.url
                                        })
                                    },
                                    style: {
                                        cursor: !t.image || !t.image.url || t.audio && t.audio.url ? "default" : "cursor",
                                        backgroundColor: !t.image || !t.image.url || t.audio && t.audio.url ? "#fff" : "#333333"
                                    }
                                }, t.audio && t.audio.url ? r.a.createElement("div", {
                                    className: k.a.questionFunc
                                }, r.a.createElement(B.a, {
                                    audioUrl: t.audio.url,
                                    width: "60%"
                                })) : t.image && t.image.url ? v.isMobile ? r.a.createElement("img", {
                                    src: Object(T.g)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                }) : r.a.createElement(_.a, {
                                    height: 120,
                                    width: 165
                                }, r.a.createElement("img", {
                                    src: Object(T.g)(t.image.url),
                                    alt: "Question Background",
                                    className: k.a.questionImage
                                })) : t.question.includes("`*`") ? r.a.createElement("div", {
                                    className: k.a.questionFunc
                                }, r.a.createElement(b.StaticMathField, {
                                    className: k.a.qMathField
                                }, t.question.slice(t.question.indexOf("`*`") + 3, t.question.length - 3))) : null) : null, r.a.createElement("div", {
                                    className: k.a.questionInfoRow
                                }, t.random ? r.a.createElement("i", {
                                    className: d()("fas fa-random", k.a.questionInfo)
                                }) : null, r.a.createElement("div", {
                                    className: k.a.questionInfo
                                }, "".concat(t.timeLimit, " sec")))), e.state.showingAnswers.includes(t.number) ? r.a.createElement("div", {
                                    className: k.a.answerContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.onShowAnswers(t.number)
                                    }
                                }, t.answers.map((function(a, n) {
                                    return r.a.createElement("div", {
                                        className: d()(k.a.answer, A({}, k.a.faded, !(t.correctAnswers.includes(a) || e.state.isAdmin && X.isProfane(a)))),
                                        style: {
                                            backgroundColor: e.state.isAdmin && X.isProfane(a) ? "#e6e600" : I.b.default.answers[n].background
                                        },
                                        key: a
                                    }, r.a.createElement("i", {
                                        className: d()(t.correctAnswers.includes(a) ? "fas fa-check" : "fas fa-times", k.a.answerIcon)
                                    }), r.a.createElement("div", {
                                        className: k.a.answerMediaContainer,
                                        style: {
                                            maxHeight: 2 === a.split("`~`").length || "`*`" === a.slice(0, 3) ? "80px" : null
                                        }
                                    }, 2 === a.split("`~`").length ? r.a.createElement("img", {
                                        src: Object(T.g)(a.split("`~`")[1]),
                                        alt: "Answer",
                                        className: k.a.answerImg,
                                        draggable: !1
                                    }) : "`*`" === a.slice(0, 3) ? r.a.createElement(b.StaticMathField, {
                                        className: k.a.mathField
                                    }, a.slice(3, a.length - 3)) : r.a.createElement("div", {
                                        className: k.a.answerText
                                    }, a)))
                                }))) : null)
                            })), r.a.createElement("div", {
                                className: k.a.bottomSpacer
                            })))) : null, this.state.zoomedImage ? r.a.createElement("div", {
                                className: d()(x.a.modal, x.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, r.a.createElement("img", {
                                src: Object(T.g)(this.state.zoomedImage),
                                alt: "Upload",
                                className: x.a.bigImage,
                                draggable: !1
                            })) : null, this.state.reporting ? r.a.createElement("div", {
                                className: k.a.reportModal
                            }, r.a.createElement("div", {
                                className: k.a.reportContainer
                            }, r.a.createElement("div", {
                                className: k.a.reportHeader
                            }, "Report Set"), r.a.createElement("div", {
                                className: k.a.reportText
                            }, "If this set is offensive, abusive, inappropriate, misleading, and/or contains false information, please let us know below.", " We appreciate your time and hope that together we can make Blooket a safe place to learn."), r.a.createElement("textarea", {
                                className: d()(k.a.reportInput, A({}, k.a.reportInputFilled, this.state.report)),
                                onChange: function(t) {
                                    e.setState({
                                        report: t.target.value
                                    })
                                },
                                value: this.state.report,
                                "data-gramm_editor": "false"
                            }), this.state.loadingReport ? r.a.createElement(j.a, null) : r.a.createElement("div", {
                                className: k.a.reportButtonContainer
                            }, r.a.createElement("div", {
                                className: k.a.reportYesButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onReport(!0)
                                }
                            }, "Report"), r.a.createElement("div", {
                                className: k.a.reportNoButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onReport(!1)
                                }
                            }, "Cancel")))) : null, this.state.copying ? this.state.canCopy ? r.a.createElement(S.a, {
                                text: this.state.loadingCopy ? "Copying..." : "Do you want to create a copy of this question set?",
                                loading: this.state.loadingCopy,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onCopyConfirm,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        e.setState({
                                            copying: !1,
                                            loadingCopy: !1,
                                            canCopy: !1
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : r.a.createElement(S.a, {
                                text: "Get Blooket Plus to Duplicate Sets",
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
                                            copying: !1,
                                            loadingCopy: !1
                                        }), e.loading = !1
                                    },
                                    color: "blue"
                                }
                            }) : null, this.state.deletePop ? r.a.createElement(S.a, {
                                text: "Do you really want to delete this set?",
                                loading: this.state.loadingDelete,
                                buttonOne: {
                                    text: "Yes",
                                    click: this.onDelete,
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            deletePop: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && H(t.prototype, a), n && H(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(r.a.Component);
            Z.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(N.c)(Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(Z)))
        },
        dP0E: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__selectText___2_GE--camelCase{font-family:Titan One,sans-serif;font-size:62px;line-height:65px;margin:5vh 5% 3vh;width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___2KQl5-camelCase .3s linear forwards;animation:styles__fadeIn___2KQl5-camelCase .3s linear forwards}.styles__modesArray___329Y9-camelCase{overflow:hidden;width:90%;max-width:800px;margin:3vh auto;justify-content:center;align-content:flex-start;display:flex;flex-flow:row wrap;opacity:0;-webkit-animation:styles__fadeIn___2KQl5-camelCase .3s linear 1.5s forwards;animation:styles__fadeIn___2KQl5-camelCase .3s linear 1.5s forwards}@-webkit-keyframes styles__fadeIn___2KQl5-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2KQl5-camelCase{0%{opacity:0}to{opacity:1}}.styles__modeContainer___3CW_k-camelCase{width:350px;height:250px;margin:3vh 25px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__modeContainer___3CW_k-camelCase:hover{transform:scale(1.03)}.styles__modeImage___39YqG-camelCase{margin:auto;width:350px;height:250px;-o-object-fit:cover;object-fit:cover;border-radius:10px}.styles__modeText___dM5-y-camelCase{top:95px;height:60px;line-height:60px}.styles__modeText___dM5-y-camelCase,.styles__modeTextTwo___z9qR--camelCase{position:absolute;left:calc(50% - 105px);color:#fff;text-align:center;font-size:40px;width:210px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;background-color:rgba(11,194,207,.9);border-radius:10px}.styles__modeTextTwo___z9qR--camelCase{top:75px;height:90px;padding-top:8px;line-height:40px}.styles__limitedTime___BBeXG-camelCase{position:absolute;top:-12.5px;left:75px;color:#fff;text-align:center;font-size:26px;line-height:35px;width:200px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;background-color:#31aae0;border-radius:6px;box-shadow:0 0 8px 3px #fff}@media only screen and (max-width:800px){.styles__selectText___2_GE--camelCase{font-size:50px;line-height:53px;margin:4vh 5% 3vh}.styles__modesArray___329Y9-camelCase{width:100%;margin:3vh auto}.styles__modeContainer___3CW_k-camelCase,.styles__modeImage___39YqG-camelCase{max-width:90vw}}", ""]), t.locals = {
                selectText: "styles__selectText___2_GE--camelCase",
                fadeIn: "styles__fadeIn___2KQl5-camelCase",
                modesArray: "styles__modesArray___329Y9-camelCase",
                modeContainer: "styles__modeContainer___3CW_k-camelCase",
                modeImage: "styles__modeImage___39YqG-camelCase",
                modeText: "styles__modeText___dM5-y-camelCase",
                modeTextTwo: "styles__modeTextTwo___z9qR--camelCase",
                limitedTime: "styles__limitedTime___BBeXG-camelCase"
            }
        },
        oVzD: function(e, t, a) {
            var n = a("dP0E");
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
        qTkc: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("/MKj"),
                i = a("Ty5D"),
                s = a("H1WH"),
                l = a("17x9"),
                c = a.n(l),
                u = a("XTAU"),
                f = a("Xst1"),
                m = a.n(f),
                h = a("+fLB"),
                d = a("E8Bj");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                _ = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return j()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var i = a.delegate;
                                if (i) {
                                    var s = x(i, a);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
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
                    }(e, a, i), o
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

                function m() {}

                function h() {}
                var d = {};
                s(d, r, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(S([])));
                g && g !== t && a.call(g, r) && (d = g);
                var v = h.prototype = f.prototype = Object.create(d);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(r, o, i, s) {
                                    var l = c(e[r], e, o);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            f = u.value;
                                        return f && "object" == p(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(r, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function x(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = c(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function S(e) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = h, s(v, "constructor", h), s(h, "constructor", m), m.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(w.prototype), s(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new w(l(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, b(v), s(v, i, "Generator"), s(v, r, (function() {
                    return this
                })), s(v, "toString", (function() {
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
                }, e.values = S, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
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
                            return i.type = "throw", i.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
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
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    k(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function y(e, t, a, n, r, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void a(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, r)
            }

            function g(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
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
                    var a, n = x(e);
                    if (t) {
                        var r = x(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return w(this, a)
                }
            }

            function w(e, t) {
                if (t && ("object" === p(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function x(e) {
                return (x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var C = function(e) {
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
                    }), t && v(e, t)
                }(c, e);
                var t, a, n, o, i, l = b(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = l.call(this, e)).state = {}, t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (o = _().mark((function e() {
                        var t;
                        return _().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if ((t = e.sent) && ["Bot", "test", "xzombiexx"].includes(t.name)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function i(e) {
                                y(r, a, n, i, s, "next", e)
                            }

                            function s(e) {
                                y(r, a, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: s.isMobile ? m.a.mBody : m.a.body
                        }, r.a.createElement(u.a, {
                            title: "Test Blooket",
                            desc: "Pls don't come here."
                        }))
                    }
                }]) && g(t.prototype, a), n && g(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(r.a.Component);
            C.propTypes = {
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(d.c)(Object(i.g)(Object(o.b)()(Object(h.d)(C))))
        },
        sP9o: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__phaserHolder___3HkrS-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.styles__pauseButton___1zD4h-camelCase{color:#fff;-webkit-text-stroke:1px #3a3a3a;font-size:20px;position:absolute;top:10px;right:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;z-index:15}.styles__right___2TLS6-camelCase{position:absolute;top:0;right:0;width:200px;height:100%;padding:30px 0;display:grid;grid-template-columns:repeat(auto-fill,50px);grid-gap:10px;background-color:#fff}.styles__right___2TLS6-camelCase,.styles__towerContainer___3Qheq-camelCase{box-sizing:border-box;justify-content:center}.styles__towerContainer___3Qheq-camelCase{width:50px;height:60px;border:2px solid rgba(0,0,0,.4);border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;transition:.2s}.styles__towerContainer___3Qheq-camelCase:hover{transform:scale(.95)}.styles__towerBlook___2607o-camelCase{width:90%}.styles__left___3NlkY-camelCase{position:absolute;top:0;left:0;width:200px;height:100%;padding:30px 0;box-sizing:border-box;background-color:#fff;transition:.2s;transform:translateX(-100%)}.styles__leftIn___2URVe-camelCase{transform:translateX(0)}.styles__leftName___3vkJ1-camelCase{font-size:28px}.styles__upgradeContainer___13MR5-camelCase{width:100%;border:2px solid rgba(0,0,0,.4);border-radius:5px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__upgradeContainer___13MR5-camelCase:hover{transform:scale(.95)}", ""]), t.locals = {
                phaserHolder: "styles__phaserHolder___3HkrS-camelCase",
                pauseButton: "styles__pauseButton___1zD4h-camelCase",
                right: "styles__right___2TLS6-camelCase",
                towerContainer: "styles__towerContainer___3Qheq-camelCase",
                towerBlook: "styles__towerBlook___2607o-camelCase",
                left: "styles__left___3NlkY-camelCase",
                leftIn: "styles__leftIn___2URVe-camelCase",
                leftName: "styles__leftName___3vkJ1-camelCase",
                upgradeContainer: "styles__upgradeContainer___13MR5-camelCase"
            }
        },
        yFhE: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___WE435-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__mainContainer___4TLvi-camelCase{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:5px calc(5% - 12px);width:calc(90% - 24px);max-width:1200px}.styles__infoContainer___2uI-S-camelCase{border-radius:7px;background-color:#fff;padding:15px 20px 22px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:12px;min-width:460px;display:flex;flex-direction:column;color:#3a3a3a}.styles__headerRow___1tdPa-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:3px}.styles__headerIcon___1ykdN-camelCase{padding-right:10px;font-size:28px;color:#669}.styles__infoHeader___1lsZY-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700}.styles__text___1x37n-camelCase{padding:2px 0}.styles__link___5UR6_-camelCase,.styles__text___1x37n-camelCase{text-align:left;font-size:20px;font-family:Nunito,sans-serif}.styles__link___5UR6_-camelCase{color:#0bc2cf;display:inline-block;text-decoration:underline;padding-top:4px;padding-bottom:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__subscriptionText___2BvF7-camelCase{display:flex;flex-direction:row;align-items:center;margin:2px 0;font-size:26px}.styles__blooketText___QMe9h-camelCase{font-family:Titan One,sans-serif;margin-right:5px;padding-bottom:3px}.styles__planText___1m0nS-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__upgradeButton___3UQMv-camelCase{margin:10px 0;width:180px}.styles__upgradeButtonInside___396BT-camelCase{height:35px;font-size:22px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:1200px){.styles__infoContainer___2uI-S-camelCase{flex-grow:1}}@media only screen and (max-width:600px){.styles__mainContainer___4TLvi-camelCase{min-width:320px;margin:auto;width:95%}.styles__infoContainer___2uI-S-camelCase{min-width:290px;padding:15px;flex-grow:1}}", ""]), t.locals = {
                header: "styles__header___WE435-camelCase",
                mainContainer: "styles__mainContainer___4TLvi-camelCase",
                infoContainer: "styles__infoContainer___2uI-S-camelCase",
                headerRow: "styles__headerRow___1tdPa-camelCase",
                headerIcon: "styles__headerIcon___1ykdN-camelCase",
                infoHeader: "styles__infoHeader___1lsZY-camelCase",
                text: "styles__text___1x37n-camelCase",
                link: "styles__link___5UR6_-camelCase",
                subscriptionText: "styles__subscriptionText___2BvF7-camelCase",
                blooketText: "styles__blooketText___QMe9h-camelCase",
                planText: "styles__planText___1m0nS-camelCase",
                upgradeButton: "styles__upgradeButton___3UQMv-camelCase",
                upgradeButtonInside: "styles__upgradeButtonInside___396BT-camelCase"
            }
        }
    }
]);