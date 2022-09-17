(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "/vfi": function(t, e, r) {
            var n = r("8b/J");
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
        "57Jf": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                p = r("H1WH"),
                h = r("E8Bj"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("/vfi"),
                v = r.n(y),
                g = r("oQ+7"),
                b = r("XTAU"),
                _ = r("XOuL"),
                w = r("VWYR"),
                E = r("74sb"),
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

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
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
                        i = new x(n || []);
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
                                    var s = _(i, r);
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
                    }(t, r, i), a
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
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(j([])));
                y && y !== e && r.call(y, o) && (d = y);
                var v = h.prototype = f.prototype = Object.create(d);

                function g(t) {
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
                                    var c = l(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, i(u)
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

                function E(t) {
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, g(v), s(v, i, "Generator"), s(v, o, (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
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

            function C(t, e, r, n, o, a, i) {
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

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && N(t, e)
                }(c, t);
                var e, r, n, a, i, s = k(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        name: "",
                        nameError: "",
                        loading: !1
                    }, e.loading = !1, e.name = "", e.onSubmit = e.onSubmit.bind(T(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = L().mark((function t() {
                        var e;
                        return L().wrap((function(t) {
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
                                    this.name = e.name;
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
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(E.A)(this.state.name);
                            this.setState({
                                nameError: r
                            }, (function() {
                                e.state.nameError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : x.a.put("/api/users/change/name", {
                                    name: e.name,
                                    newName: e.state.name
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(w.b)() : (e.loading = !1, e.setState(j({
                                        loading: !1
                                    }, "".concat(t.data.errType, "Error"), t.data.msg)))
                                })).catch((function(t) {
                                    console.error(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(b.a, {
                            title: "Change Name | Blooket",
                            desc: "Change the name for your Blooket account."
                        }), o.a.createElement(g.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: m.a.slantBackground
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: v.a.container
                        }, o.a.createElement("div", {
                            className: v.a.containerHeader
                        }, "Change Name"), o.a.createElement("div", null, o.a.createElement("div", {
                            className: f()(v.a.inputContainer, j({}, v.a.inputFilled, this.state.name), j({}, v.a.inputError, this.state.nameError))
                        }, o.a.createElement("i", {
                            className: f()(v.a.icon, "fas fa-user", j({}, v.a.iconFilled, this.state.name), j({}, v.a.iconError, this.state.nameError))
                        }), o.a.createElement("input", {
                            className: f()(v.a.input, j({}, v.a.inputError, this.state.nameError)),
                            placeholder: "New Name",
                            onChange: function(e) {
                                return t.setState({
                                    name: e.target.value.trim().slice(0, 15),
                                    nameError: ""
                                })
                            },
                            value: this.state.name,
                            type: "text",
                            autoFocus: p.isMobile ? "" : "autofocus"
                        })), this.state.loading ? o.a.createElement(_.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Change Name",
                            className: f()(v.a.button, j({}, v.a.buttonFilled, this.state.name), j({}, v.a.buttonError, this.state.nameError)),
                            tabIndex: 0
                        })), this.state.nameError ? o.a.createElement("div", {
                            className: v.a.errorContainer
                        }, o.a.createElement("i", {
                            className: f()(v.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: v.a.errorText
                        }, this.state.nameError)) : null)))
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            F.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            e.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(F)))
        },
        "8b/J": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__container___d9MYU-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___2740i-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___1lpQB-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1lpQB-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase[focus-within]>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputContainer___1lpQB-camelCase:focus-within>.styles__icon___2ZH9L-camelCase{color:#0bc2cf}.styles__inputFilled___2pDFI-camelCase{border-color:#3a3a3a}.styles__inputError___15dDm-camelCase{border-color:#ce1313}.styles__icon___2ZH9L-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___3JEbe-camelCase{color:#3a3a3a}.styles__iconError___1v0UD-camelCase{color:#ce1313}.styles__input___1x6Zg-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___1x6Zg-camelCase:-moz-placeholder,.styles__input___1x6Zg-camelCase:-ms-input-placeholder,.styles__input___1x6Zg-camelCase::-moz-placeholder,.styles__input___1x6Zg-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___sGUIc-camelCase:-moz-placeholder,.styles__mInput___sGUIc-camelCase:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase::-moz-placeholder,.styles__mInput___sGUIc-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___15dDm-camelCase,.styles__inputError___15dDm-camelCase:-moz-placeholder,.styles__inputError___15dDm-camelCase:-ms-input-placeholder,.styles__inputError___15dDm-camelCase::-moz-placeholder,.styles__inputError___15dDm-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___1x6Zg-camelCase:focus,.styles__input___1x6Zg-camelCase:focus:-moz-placeholder,.styles__input___1x6Zg-camelCase:focus:-ms-input-placeholder,.styles__input___1x6Zg-camelCase:focus::-moz-placeholder,.styles__input___1x6Zg-camelCase:focus::-webkit-input-placeholder,.styles__mInput___sGUIc-camelCase:focus,.styles__mInput___sGUIc-camelCase:focus:-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus:-ms-input-placeholder,.styles__mInput___sGUIc-camelCase:focus::-moz-placeholder,.styles__mInput___sGUIc-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___d9MYU-camelCase{width:320px}.styles__inputContainer___1lpQB-camelCase{width:280px}.styles__input___1x6Zg-camelCase{width:210px}}.styles__button___2e3MR-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___2e3MR-camelCase:focus,.styles__button___2e3MR-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___3Aa5b-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___xwiCq-camelCase,.styles__buttonError___xwiCq-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___xwiCq-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___3L947-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___27g6U-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1BA55-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__google___3QHN--camelCase{width:160px;margin:10px auto 30px}", ""]), e.locals = {
                container: "styles__container___d9MYU-camelCase",
                containerHeader: "styles__containerHeader___2740i-camelCase",
                inputContainer: "styles__inputContainer___1lpQB-camelCase",
                icon: "styles__icon___2ZH9L-camelCase",
                inputFilled: "styles__inputFilled___2pDFI-camelCase",
                inputError: "styles__inputError___15dDm-camelCase",
                iconFilled: "styles__iconFilled___3JEbe-camelCase",
                iconError: "styles__iconError___1v0UD-camelCase",
                input: "styles__input___1x6Zg-camelCase",
                mInput: "styles__mInput___sGUIc-camelCase",
                button: "styles__button___2e3MR-camelCase",
                buttonFilled: "styles__buttonFilled___3Aa5b-camelCase",
                buttonError: "styles__buttonError___xwiCq-camelCase",
                errorContainer: "styles__errorContainer___3L947-camelCase",
                errorIcon: "styles__errorIcon___27g6U-camelCase",
                errorText: "styles__errorText___1BA55-camelCase",
                google: "styles__google___3QHN--camelCase"
            }
        },
        fLDY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                p = r("H1WH"),
                h = r("E8Bj"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("/vfi"),
                v = r.n(y),
                g = r("oQ+7"),
                b = r("XTAU"),
                _ = r("XOuL"),
                w = r("VWYR"),
                E = r("74sb"),
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

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
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
                        i = new x(n || []);
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
                                    var s = _(i, r);
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
                    }(t, r, i), a
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
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(j([])));
                y && y !== e && r.call(y, o) && (d = y);
                var v = h.prototype = f.prototype = Object.create(d);

                function g(t) {
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
                                    var c = l(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == O(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, i(u)
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

                function E(t) {
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, g(v), s(v, i, "Generator"), s(v, o, (function() {
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
                }, t.values = j, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
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

            function C(t, e, r, n, o, a, i) {
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

            function N(t, e) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && N(t, e)
                }(c, t);
                var e, r, n, a, i, s = k(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        email: "",
                        emailError: "",
                        loading: !1
                    }, e.loading = !1, e.email = "", e.onSubmit = e.onSubmit.bind(T(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = L().mark((function t() {
                        var e;
                        return L().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.props.user.getData();
                                case 2:
                                    if ((e = t.sent) && e.hasPassword) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", this.props.history.push("/login"));
                                case 5:
                                    this.email = e.email;
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
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = Object(E.x)(this.state.email),
                                n = "";
                            this.state.password || (n = "Where's the password?"), this.setState({
                                emailError: r,
                                passwordError: n
                            }, (function() {
                                e.state.emailError || e.state.passwordError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : x.a.put("/api/users/change/email", {
                                    email: e.email,
                                    newEmail: e.state.email.toLowerCase(),
                                    password: e.state.password
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(w.b)() : (e.loading = !1, e.setState(j({
                                        loading: !1
                                    }, "".concat(t.data.errType, "Error"), t.data.msg)))
                                })).catch((function(t) {
                                    console.error(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(b.a, {
                            title: "Change Email | Blooket",
                            desc: "Change the email for your Blooket account."
                        }), o.a.createElement(g.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: m.a.slantBackground
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: v.a.container
                        }, o.a.createElement("div", {
                            className: v.a.containerHeader
                        }, "Change Email"), o.a.createElement("div", null, o.a.createElement("div", {
                            className: f()(v.a.inputContainer, j({}, v.a.inputFilled, this.state.email), j({}, v.a.inputError, this.state.emailError))
                        }, o.a.createElement("i", {
                            className: f()(v.a.icon, "fas fa-envelope", j({}, v.a.iconFilled, this.state.email), j({}, v.a.iconError, this.state.emailError))
                        }), o.a.createElement("input", {
                            className: f()(v.a.input, j({}, v.a.inputError, this.state.emailError)),
                            placeholder: "New Email",
                            onChange: function(e) {
                                return t.setState({
                                    email: e.target.value.trim().slice(0, 50),
                                    emailError: ""
                                })
                            },
                            value: this.state.email,
                            type: "text",
                            autoFocus: p.isMobile ? "" : "autofocus"
                        })), o.a.createElement("div", {
                            className: f()(v.a.inputContainer, j({}, v.a.inputFilled, this.state.password), j({}, v.a.inputError, this.state.passwordError))
                        }, o.a.createElement("i", {
                            className: f()(v.a.icon, "fas fa-lock", j({}, v.a.iconFilled, this.state.password), j({}, v.a.iconError, this.state.passwordError))
                        }), o.a.createElement("input", {
                            className: f()(v.a.input, j({}, v.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value,
                                    passwordError: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? o.a.createElement(_.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Change Email",
                            className: f()(v.a.button, j({}, v.a.buttonFilled, this.state.email && this.state.password), j({}, v.a.buttonError, this.state.emailError || this.state.passwordError)),
                            tabIndex: 0
                        })), this.state.emailError || this.state.passwordError ? o.a.createElement("div", {
                            className: v.a.errorContainer
                        }, o.a.createElement("i", {
                            className: f()(v.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: v.a.errorText
                        }, this.state.emailError || this.state.passwordError)) : null)))
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            F.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            e.a = Object(h.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(F)))
        },
        fuSh: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("TSYQ"),
                l = r.n(c),
                u = r("H1WH"),
                f = r("E8Bj"),
                p = r("Xst1"),
                h = r.n(p),
                d = r("/vfi"),
                m = r.n(d),
                y = r("oQ+7"),
                v = r("XTAU"),
                g = r("XOuL"),
                b = r("74sb"),
                _ = r("qnYv");

            function w(t) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    var r, n = C(t);
                    if (e) {
                        var o = C(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(t, e) {
                if (e && ("object" === w(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function C(t) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && x(t, e)
                }(i, t);
                var e, r, n, a = O(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = a.call(this, t)).state = {
                        loading: !1,
                        success: !1,
                        done: !1
                    }, e.email = Object(b.j)("e"), e.onSubmit = e.onSubmit.bind(L(e)), e
                }
                return e = i, (r = [{
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        t.preventDefault(), this.state.loading || (this.setState({
                            loading: !0
                        }), _.a.put("/api/users/unsubscribe", {
                            email: decodeURIComponent(this.email).toLowerCase()
                        }).then((function(t) {
                            e.setState({
                                success: t.data.success,
                                done: !0
                            })
                        })).catch((function(t) {
                            console.error(t)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.email ? o.a.createElement("div", {
                            className: u.isMobile ? h.a.mBody : h.a.body
                        }, o.a.createElement(v.a, {
                            title: "Unsubscribe | Blooket",
                            desc: "Unsubscribe from Blooket emails."
                        }), o.a.createElement(y.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: h.a.slantBackground
                        }), o.a.createElement("div", {
                            className: h.a.regularBody
                        }, o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: m.a.container
                        }, o.a.createElement("div", {
                            className: m.a.containerHeader
                        }, this.state.done ? this.state.success ? "Successfully Unsubscribed!" : "Please Refresh and Try Again" : "Unsubscribe from Emails?"), this.state.done ? null : o.a.createElement("div", null, this.state.loading ? o.a.createElement(g.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Yes",
                            className: l()(m.a.button, m.a.buttonFilled),
                            tabIndex: 0
                        }))))) : o.a.createElement(s.a, {
                            to: "/login"
                        })
                    }
                }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(o.a.Component);
            S.propTypes = {};
            e.a = Object(f.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(S)))
        },
        kAC4: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("Ty5D"),
                c = r("17x9"),
                l = r.n(c),
                u = r("TSYQ"),
                f = r.n(u),
                p = r("H1WH"),
                h = r("3HZZ"),
                d = r("E8Bj"),
                m = r("Xst1"),
                y = r.n(m),
                v = r("/vfi"),
                g = r.n(v),
                b = r("oQ+7"),
                _ = r("XTAU"),
                w = r("XOuL"),
                E = r("LHn/"),
                x = r("VWYR"),
                O = r("qnYv");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function L(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
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
                        i = new x(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return L()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = _(i, r);
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
                    }(t, r, i), a
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
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== e && r.call(y, o) && (d = y);
                var v = h.prototype = f.prototype = Object.create(d);

                function g(t) {
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
                                    var c = l(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == j(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, i(u)
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

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function O(t) {
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
                        next: L
                    }
                }

                function L() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, g(v), s(v, i, "Generator"), s(v, o, (function() {
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
                }, t.values = O, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
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

            function S(t, e, r, n, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function N(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = t.apply(e, r);

                        function i(t) {
                            S(a, n, o, i, s, "next", t)
                        }

                        function s(t) {
                            S(a, n, o, i, s, "throw", t)
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
                    var r, n = B(t);
                    if (e) {
                        var o = B(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return F(t)
            }

            function F(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var G = function(t) {
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
                }(s, t);
                var e, r, n, a, i = T(s);

                function s(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (e = i.call(this, t)).state = {
                        password: "",
                        passwordError: "",
                        loading: !1,
                        hasPassword: !1,
                        ready: !1,
                        googleClientId: ""
                    }, e.loading = !1, e.email = "", e.onSubmit = e.onSubmit.bind(F(e)), e.googleSuccess = e.googleSuccess.bind(F(e)), e.googleFailure = e.googleFailure.bind(F(e)), e
                }
                return e = s, (r = [{
                    key: "componentDidMount",
                    value: (a = N(C().mark((function t() {
                        var e, r = this;
                        return C().wrap((function(t) {
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
                                    this.email = e.email, this.setState({
                                        hasPassword: e.hasPassword,
                                        ready: !0
                                    }), O.a.get("/api/users/check-auth").then((function() {
                                        O.a.get("/api/config").then(function() {
                                            var t = N(C().mark((function t(e) {
                                                return C().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (e.data && e.data.googleClientId) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            throw Error("could not get googleClientId from backend");
                                                        case 4:
                                                            r.setState({
                                                                googleClientId: e.data.googleClientId
                                                            });
                                                        case 5:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "onSubmit",
                    value: function(t) {
                        var e = this;
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "";
                            this.state.password || (r = "Where's The Password?"), this.setState({
                                passwordError: r
                            }, (function() {
                                e.state.passwordError ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : O.a.delete("/api/users", {
                                    params: {
                                        email: e.email,
                                        password: e.state.password
                                    }
                                }).then((function(t) {
                                    t.data.success ? Object(x.b)() : (e.loading = !1, e.setState({
                                        loading: !1,
                                        passwordError: t.data.msg
                                    }))
                                })).catch((function(t) {
                                    console.error(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "googleSuccess",
                    value: function(t) {
                        var e = this;
                        this.setState({
                            loading: !0,
                            passwordError: ""
                        }), O.a.delete("/api/users/google", {
                            params: {
                                access_token: t.accessToken,
                                email: this.email
                            }
                        }).then((function(t) {
                            t.data.success ? Object(x.b)() : e.setState({
                                passwordError: t.data.msg,
                                loading: !1
                            })
                        })).catch((function() {
                            e.setState({
                                passwordError: "Failed to delete account. Please try again.",
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "googleFailure",
                    value: function() {
                        this.setState({
                            passwordError: "Failed to verify account with Google.",
                            loading: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? y.a.mBody : y.a.body
                        }, o.a.createElement(_.a, {
                            title: "Delete Account | Blooket",
                            desc: "Delete your Blooket account."
                        }), o.a.createElement(b.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: y.a.slantBackground
                        }), o.a.createElement("div", {
                            className: y.a.regularBody
                        }, this.state.ready ? o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: g.a.container
                        }, o.a.createElement("div", {
                            className: g.a.containerHeader
                        }, "Delete Account"), o.a.createElement("div", null, this.state.hasPassword ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: f()(g.a.inputContainer, L({}, g.a.inputFilled, this.state.password), L({}, g.a.inputError, this.state.passwordError))
                        }, o.a.createElement("i", {
                            className: f()(g.a.icon, "fas fa-lock", L({}, g.a.iconFilled, this.state.password), L({}, g.a.iconError, this.state.passwordError))
                        }), o.a.createElement("input", {
                            className: f()(g.a.input, L({}, g.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: p.isMobile ? "" : "autofocus"
                        })), this.state.loading ? o.a.createElement(w.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Delete",
                            className: f()(g.a.button, L({}, g.a.buttonFilled, this.state.password), L({}, g.a.buttonError, this.state.passwordError)),
                            tabIndex: 0
                        })) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, this.state.googleClientId ? o.a.createElement(h.GoogleLogin, {
                            clientId: this.state.googleClientId,
                            onSuccess: this.googleSuccess,
                            onFailure: this.googleFailure,
                            render: function(t) {
                                return o.a.createElement("div", {
                                    className: f()(y.a.googleButton, g.a.google),
                                    disabled: t.disabled,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: t.onClick
                                }, o.a.createElement("img", {
                                    src: E.a.basic.googleLogo,
                                    alt: "Google Logo",
                                    className: y.a.googleLogo,
                                    draggable: !1
                                }), "Delete Now")
                            }
                        }) : null), this.state.loading ? o.a.createElement(w.a, null) : null)), this.state.passwordError ? o.a.createElement("div", {
                            className: g.a.errorContainer
                        }, o.a.createElement("i", {
                            className: f()(g.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: g.a.errorText
                        }, this.state.passwordError)) : null) : null))
                    }
                }]) && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            G.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            e.a = Object(d.c)(Object(s.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(G)))
        },
        kVNV: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                f = r.n(u),
                p = r("H1WH"),
                h = r("E8Bj"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("/vfi"),
                v = r.n(y),
                g = r("oQ+7"),
                b = r("XTAU"),
                _ = r("XOuL"),
                w = r("VWYR"),
                E = r("qnYv");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
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
                                    var s = _(i, r);
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
                    }(t, r, i), a
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
                var d = {};
                s(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(L([])));
                y && y !== e && r.call(y, o) && (d = y);
                var v = h.prototype = f.prototype = Object.create(d);

                function g(t) {
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
                                    var c = l(t[o], t, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == x(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            n("next", t, i, s)
                                        }), (function(t) {
                                            n("throw", t, i, s)
                                        })) : e.resolve(f).then((function(t) {
                                            u.value = t, i(u)
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

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(w, this), this.reset(!0)
                }

                function L(t) {
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), s(b.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(c(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, g(v), s(v, i, "Generator"), s(v, o, (function() {
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
                }, t.values = L, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: L(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function L(t, e, r, n, o, a, i) {
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

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = T(t);
                    if (e) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && S(t, e)
                }(c, t);
                var e, r, n, a, i, s = N(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        password: "",
                        password2: "",
                        passwordError: "",
                        password2Error: "",
                        loading: !1
                    }, e.loading = !1, e.name = "", e.onSubmit = e.onSubmit.bind(P(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = j().mark((function t() {
                        var e;
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
                                    this.name = e.name;
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
                                L(o, r, n, i, s, "next", t)
                            }

                            function s(t) {
                                L(o, r, n, i, s, "throw", t)
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
                        if (t.preventDefault(), !this.loading) {
                            this.loading = !0, this.setState({
                                loading: !0
                            });
                            var r = "",
                                n = "";
                            this.state.password ? this.state.password.length < 8 ? r = "Password must have at least 8 characters." : this.state.password.length > 72 ? r = "Password is too long (trouble encrypting)." : /(?=.*[A-Z])/.test(this.state.password) ? /(?=.*[a-z])/.test(this.state.password) ? /(?=.*[0-9])/.test(this.state.password) || (r = "Password must have at least 1 number digit.") : r = "Password must have at least 1 lowercase letter." : r = "Password must have at least 1 uppercase letter." : r = "Where's The Password?", this.state.password !== this.state.password2 && (n = "The passwords don't match."), this.state.password2 || (n = "Where's The Confirming Password?"), this.setState({
                                passwordError: r,
                                password2Error: n
                            }, (function() {
                                e.state.passwordError || e.state.password2Error ? (e.loading = !1, e.setState({
                                    loading: !1
                                })) : E.a.put("/api/users/addpassword", {
                                    name: e.name,
                                    password: e.state.password
                                }).then((function(t) {
                                    !0 === t.data.success ? Object(w.b)() : (e.loading = !1, e.setState({
                                        loading: !1,
                                        passwordError: t.data.msg
                                    }))
                                })).catch((function(t) {
                                    console.error(t)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return o.a.createElement("div", {
                            className: p.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(b.a, {
                            title: "Add Password | Blooket",
                            desc: "Add a password for your Blooket account."
                        }), o.a.createElement(g.a, {
                            rightText: "Settings",
                            rightLink: "/settings"
                        }), o.a.createElement("div", {
                            className: m.a.slantBackground
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("form", {
                            onSubmit: this.onSubmit,
                            className: v.a.container
                        }, o.a.createElement("div", {
                            className: v.a.containerHeader
                        }, "Add Password"), o.a.createElement("div", null, o.a.createElement("div", {
                            className: f()(v.a.inputContainer, O({}, v.a.inputFilled, this.state.password), O({}, v.a.inputError, this.state.passwordError))
                        }, o.a.createElement("i", {
                            className: f()(v.a.icon, "fas fa-lock", O({}, v.a.iconFilled, this.state.password), O({}, v.a.iconError, this.state.passwordError))
                        }), o.a.createElement("input", {
                            className: f()(v.a.input, O({}, v.a.inputError, this.state.passwordError)),
                            placeholder: "Password",
                            onChange: function(e) {
                                return t.setState({
                                    password: e.target.value.trim(),
                                    passwordError: ""
                                })
                            },
                            type: "password",
                            autoFocus: p.isMobile ? "" : "autofocus"
                        })), o.a.createElement("div", {
                            className: f()(v.a.inputContainer, O({}, v.a.inputFilled, this.state.password2), O({}, v.a.inputError, this.state.password2Error))
                        }, o.a.createElement("i", {
                            className: f()(v.a.icon, "fas fa-lock", O({}, v.a.iconFilled, this.state.password2), O({}, v.a.iconError, this.state.password2Error))
                        }), o.a.createElement("input", {
                            className: f()(v.a.input, O({}, v.a.inputError, this.state.password2Error)),
                            placeholder: "Confirm Password",
                            onChange: function(e) {
                                return t.setState({
                                    password2: e.target.value,
                                    password2Error: ""
                                })
                            },
                            type: "password"
                        })), this.state.loading ? o.a.createElement(_.a, null) : o.a.createElement("input", {
                            type: "submit",
                            value: "Add Password",
                            className: f()(v.a.button, O({}, v.a.buttonFilled, this.state.password && this.state.password2), O({}, v.a.buttonError, this.state.passwordError || this.state.password2Error)),
                            tabIndex: 0
                        })), this.state.passwordError || this.state.password2Error ? o.a.createElement("div", {
                            className: v.a.errorContainer
                        }, o.a.createElement("i", {
                            className: f()(v.a.errorIcon, "fas fa-times-circle")
                        }), o.a.createElement("div", {
                            className: v.a.errorText
                        }, this.state.passwordError || this.state.password2Error)) : null)))
                    }
                }]) && C(e.prototype, r), n && C(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            I.propTypes = {
                history: c.a.object,
                user: c.a.object
            };
            e.a = Object(h.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(a.b)({}, t)
            }))(I)))
        }
    }
]);