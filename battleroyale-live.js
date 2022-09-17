(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        "+3yP": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("5gzV"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
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
                    var a, s = h(e);
                    if (t) {
                        var n = h(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
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

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var g = function(e) {
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
                    }), t && d(e, t)
                }(r, e);
                var t, a, s, o = p(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        me: {},
                        opp: {},
                        myEnergyArray: [],
                        oppEnergyArray: []
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.name && this.props.match && this.props.match[0] && this.setState({
                            me: this.props.match[0].name === this.props.name ? this.props.match[0] : this.props.match[1],
                            opp: this.props.match[0].name === this.props.name ? this.props.match[1] : this.props.match[0]
                        }, (function() {
                            for (var t = [], a = [], s = 0; s < e.props.maxEnergy; s++) e.state.me.energy > s ? t.push(!0) : t.push(!1), e.state.opp.energy > s ? a.push(!0) : a.push(!1);
                            a.reverse(), e.setState({
                                myEnergyArray: t,
                                oppEnergyArray: a
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            className: c.a.background
                        }, n.a.createElement("div", {
                            className: c.a.rightBackground
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                            alt: "Background",
                            className: c.a.backgroundOverlay
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Top.svg",
                            alt: "Lightning Top",
                            className: c.a.lightningTop
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg",
                            alt: "Lightning Bottom",
                            className: c.a.lightningBottom
                        }), n.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow3
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752040/Media/br/Resized_Orange_Nameplate_No_Tilt.svg",
                            alt: "Nameplate",
                            className: c.a.leftNameplate
                        }), n.a.createElement(l.Textfit, {
                            className: c.a.leftName,
                            mode: "single",
                            min: 1,
                            max: Object(m.D)("8vw"),
                            forceSingleModeWidth: !1
                        }, this.state.me.name), n.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow2
                        }), n.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow1
                        }), n.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlook
                        }), n.a.createElement("div", {
                            className: c.a.leftEnergyContainer
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_BG_No_Tilt.svg",
                            alt: "Energy Bar",
                            className: c.a.leftEnergyBar
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                            alt: "Energy Bolt",
                            className: c.a.leftEnergyBolt
                        }), this.state.myEnergyArray.map((function(t, a) {
                            return n.a.createElement("img", {
                                key: a,
                                src: t ? "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Blue.svg" : "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Empty.svg",
                                alt: "Energy",
                                className: c.a.leftEnergy,
                                style: {
                                    marginRight: a === e.state.myEnergyArray.length - 1 ? "17%" : null
                                }
                            })
                        }))), n.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow3
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752040/Media/br/Resized_Blue_Nameplate_No_Tilt.svg",
                            alt: "Nameplate",
                            className: c.a.rightNameplate
                        }), n.a.createElement(l.Textfit, {
                            className: c.a.rightName,
                            mode: "single",
                            min: 1,
                            max: Object(m.D)("8vw"),
                            forceSingleModeWidth: !1
                        }, this.state.opp.name), n.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow2
                        }), n.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow1
                        }), n.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlook
                        }), n.a.createElement("div", {
                            className: c.a.rightEnergyContainer
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_BG_No_Tilt.svg",
                            alt: "Energy Bar",
                            className: c.a.rightEnergyBar
                        }), this.state.oppEnergyArray.map((function(e, t) {
                            return n.a.createElement("img", {
                                key: t,
                                src: e ? "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Orange.svg" : "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Empty.svg",
                                alt: "Energy",
                                className: c.a.rightEnergy,
                                style: {
                                    marginLeft: 0 === t ? "17%" : null
                                }
                            })
                        })), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg",
                            alt: "Energy Bolt",
                            className: c.a.rightEnergyBolt
                        })), 3 === this.props.timer ? n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_3.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : 2 === this.props.timer ? n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_2.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : this.props.timer <= 1 ? n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_1.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS.png",
                            alt: "VS",
                            className: c.a.vs
                        }))
                    }
                }]) && f(t.prototype, a), s && f(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            g.propTypes = {
                name: r.a.string,
                match: r.a.array,
                maxEnergy: r.a.number,
                timer: r.a.number
            }, t.a = g
        },
        "0n6o": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("4HzQ"),
                _ = a("y18I"),
                m = a.n(_),
                u = a("0oXL"),
                f = a("74sb");
            var d = function(e) {
                var t = e.team,
                    a = e.noEnergy,
                    s = e.selected,
                    o = e.onSelect,
                    r = e.canClick;
                return n.a.createElement("div", {
                    className: m.a.teamHolder
                }, n.a.createElement("div", {
                    className: m.a.teamContainer
                }, a ? null : n.a.createElement("div", {
                    className: m.a.energyContainer
                }, n.a.createElement("div", {
                    className: m.a.energyText,
                    style: {
                        letterSpacing: t.energy >= 10 ? "-4px" : "normal"
                    }
                }, t.energy), n.a.createElement("i", {
                    className: i()(m.a.energyIcon, "fas fa-bolt")
                })), n.a.createElement(u.a, {
                    name: t.blook,
                    className: m.a.teamBlook
                }), n.a.createElement("div", {
                    className: m.a.teamText
                }, t.name)), n.a.createElement("div", {
                    className: m.a.teamPlayersContainer
                }, t.players.map((function(e) {
                    return n.a.createElement("div", {
                        className: i()(r ? m.a.playerContainer : m.a.playerContainerNo, (t = {}, a = m.a.selected, l = s === e.name, a in t ? Object.defineProperty(t, a, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = l, t)),
                        key: e.name,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return o(e.name)
                        }
                    }, n.a.createElement(u.a, {
                        name: e.blook,
                        className: m.a.playerBlook
                    }), n.a.createElement(c.Textfit, {
                        className: m.a.playerText,
                        mode: "single",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(f.D)("5vw")
                    }, e.name));
                    var t, a, l
                }))))
            };
            d.propTypes = {
                team: r.a.object,
                noEnergy: r.a.bool,
                selected: r.a.string,
                onSelect: r.a.func,
                canClick: r.a.bool
            }, t.a = d
        },
        "25NL": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("TSYQ"),
                r = a.n(o),
                l = a("17x9"),
                i = a.n(l),
                c = a("yzbm"),
                _ = a("H1WH"),
                m = a("bQY/"),
                u = a.n(m),
                f = a("pkss"),
                d = a("qnYv");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    n = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    r = s.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function i(e, t, a, s) {
                    var n = t && t.prototype instanceof m ? t : m,
                        o = Object.create(n.prototype),
                        r = new E(s || []);
                    return o._invoke = function(e, t, a) {
                        var s = "suspendedStart";
                        return function(n, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === n) throw o;
                                return I()
                            }
                            for (a.method = n, a.arg = o;;) {
                                var r = a.delegate;
                                if (r) {
                                    var l = C(r, a);
                                    if (l) {
                                        if (l === _) continue;
                                        return l
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === s) throw s = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                s = "executing";
                                var i = c(e, t, a);
                                if ("normal" === i.type) {
                                    if (s = a.done ? "completed" : "suspendedYield", i.arg === _) continue;
                                    return {
                                        value: i.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === i.type && (s = "completed", a.method = "throw", a.arg = i.arg)
                            }
                        }
                    }(e, a, r), o
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
                e.wrap = i;
                var _ = {};

                function m() {}

                function u() {}

                function f() {}
                var d = {};
                l(d, n, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    g = h && h(h(N([])));
                g && g !== t && a.call(g, n) && (d = g);
                var x = f.prototype = m.prototype = Object.create(d);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var s;
                    this._invoke = function(n, o) {
                        function r() {
                            return new t((function(s, r) {
                                ! function s(n, o, r, l) {
                                    var i = c(e[n], e, o);
                                    if ("throw" !== i.type) {
                                        var _ = i.arg,
                                            m = _.value;
                                        return m && "object" == p(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            s("next", e, r, l)
                                        }), (function(e) {
                                            s("throw", e, r, l)
                                        })) : t.resolve(m).then((function(e) {
                                            _.value = e, r(_)
                                        }), (function(e) {
                                            return s("throw", e, r, l)
                                        }))
                                    }
                                    l(i.arg)
                                }(n, o, s, r)
                            }))
                        }
                        return s = s ? s.then(r, r) : r()
                    }
                }

                function C(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, C(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var s = c(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                    var n = s.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
                }

                function v(e) {
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
                    }], e.forEach(v, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[n];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return u.prototype = f, l(x, "constructor", f), l(f, "constructor", u), u.displayName = l(f, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, r, "GeneratorFunction")), e.prototype = Object.create(x), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(w.prototype), l(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, a, s, n, o) {
                    void 0 === o && (o = Promise);
                    var r = new w(i(t, a, s, n), o);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, b(x), l(x, r, "Generator"), l(x, n, (function() {
                    return this
                })), l(x, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return a.value = s, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = N, E.prototype = {
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

                        function s(a, s) {
                            return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var l = a.call(o, "catchLoc"),
                                    i = a.call(o, "finallyLoc");
                                if (l && i) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!i) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), _
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    k(a)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), _
                    }
                }, e
            }

            function h(e, t, a, s, n, o, r) {
                try {
                    var l = e[o](r),
                        i = l.value
                } catch (e) {
                    return void a(e)
                }
                l.done ? t(i) : Promise.resolve(i).then(s, n)
            }

            function g(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = v(e);
                    if (t) {
                        var n = v(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return w(this, a)
                }
            }

            function w(e, t) {
                if (t && ("object" === p(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return C(e)
            }

            function C(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var k = function(e) {
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
                }(m, e);
                var t, a, s, o, l, i = b(m);

                function m(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), (t = i.call(this, e)).state = {
                        error: "",
                        showUnsplash: !1,
                        urlInput: "",
                        showURL: !1
                    }, t.loading = !1, t.dropzoneRef = n.a.createRef(), t.onImageDrop = t.onImageDrop.bind(C(t)), t.onURLSubmit = t.onURLSubmit.bind(C(t)), t
                }
                return t = m, (a = [{
                    key: "onImageDrop",
                    value: function(e) {
                        var t = e[0];
                        t ? this.props.onDone(URL.createObjectURL(t), t) : this.setState({
                            error: "Error Uploading the File."
                        })
                    }
                }, {
                    key: "onURLSubmit",
                    value: (o = y().mark((function e(t) {
                        var a, s = this;
                        return y().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.preventDefault(), !this.loading) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (this.loading = !0, a = "", this.state.urlInput) {
                                        e.next = 9;
                                        break
                                    }
                                    a = "Where's the URL?", e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11, new Promise((function(e) {
                                        d.a.get("/api/games/is-image", {
                                            params: {
                                                url: s.state.urlInput
                                            }
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function() {
                                            return e(!1)
                                        }))
                                    }));
                                case 11:
                                    e.sent || (a = "We can't find a supported image for that URL.");
                                case 13:
                                    a ? this.setState({
                                        error: a
                                    }) : this.props.onDone(this.state.urlInput), this.loading = !1;
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), l = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, s) {
                            var n = o.apply(e, t);

                            function r(e) {
                                h(n, a, s, r, l, "next", e)
                            }

                            function l(e) {
                                h(n, a, s, r, l, "throw", e)
                            }
                            r(void 0)
                        }))
                    }, function(e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, s = this;
                        return this.state.showUnsplash ? n.a.createElement(f.a, {
                            select: function(e) {
                                return s.props.onDone(e, null)
                            },
                            close: function() {
                                return s.setState({
                                    showUnsplash: !1
                                })
                            }
                        }) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: u.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), n.a.createElement("div", {
                            className: u.a.mainContainer
                        }, this.state.showURL ? n.a.createElement("form", {
                            onSubmit: this.onURLSubmit
                        }, n.a.createElement("div", {
                            className: u.a.header
                        }, "Upload by URL"), n.a.createElement("div", {
                            className: u.a.text
                        }, "Enter image address:"), n.a.createElement("input", {
                            className: r()(u.a.urlInput, (e = {}, t = u.a.inputFilled, a = this.state.urlInput, t in e ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = a, e)),
                            placeholder: "Image url...",
                            onChange: function(e) {
                                return s.setState({
                                    urlInput: e.target.value,
                                    error: ""
                                })
                            },
                            value: this.state.urlInput,
                            type: "text",
                            autoFocus: _.isMobile ? "" : "autofocus"
                        }), n.a.createElement("div", {
                            className: u.a.buttonRow
                        }, n.a.createElement("div", {
                            className: u.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return s.setState({
                                    showURL: !1
                                })
                            }
                        }, "Back"), n.a.createElement("div", {
                            className: u.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.onURLSubmit
                        }, "Submit"))) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: u.a.header
                        }, "Image Uploader"), n.a.createElement("div", {
                            className: u.a.uploadButtonContainer
                        }, n.a.createElement("div", {
                            className: u.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return s.setState({
                                    showUnsplash: !0
                                })
                            }
                        }, n.a.createElement("i", {
                            className: r()(u.a.uploadIcon, "fas fa-image")
                        }), n.a.createElement("div", {
                            className: u.a.uploadText
                        }, "Image", n.a.createElement("br", null), "Gallery")), n.a.createElement("div", {
                            className: u.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return s.dropzoneRef.current.open()
                            }
                        }, n.a.createElement("i", {
                            className: r()(u.a.uploadIcon, "fas fa-file-upload")
                        }), n.a.createElement("div", {
                            className: u.a.uploadText
                        }, "Upload", n.a.createElement("br", null), "a File")), n.a.createElement("div", {
                            className: u.a.uploadButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return s.setState({
                                    showURL: !0,
                                    urlInput: ""
                                })
                            }
                        }, n.a.createElement("i", {
                            className: r()(u.a.uploadIcon, "fas fa-link")
                        }), n.a.createElement("div", {
                            className: u.a.uploadText
                        }, "Upload", n.a.createElement("br", null), "by URL"))), n.a.createElement(c.a, {
                            multiple: !1,
                            accept: "image/jpeg, image/png, image/gif, image/svg+xml",
                            onDropAccepted: this.onImageDrop,
                            onDropRejected: function() {
                                s.setState({
                                    error: "Image Denied (Check Size < 2.5 MB)"
                                })
                            },
                            className: u.a.dropContainer,
                            activeClassName: u.a.activeDropContainer,
                            ref: this.dropzoneRef,
                            maxSize: 25e5
                        }, n.a.createElement("i", {
                            className: r()("fas fa-file-image", u.a.dropzoneIcon)
                        }), "Or Drag and Drop a File Here (< 2.5 MB)")), this.state.error ? n.a.createElement("div", {
                            className: u.a.errorContainer
                        }, n.a.createElement("i", {
                            className: r()(u.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: u.a.errorText
                        }, this.state.error)) : null))
                    }
                }]) && g(t.prototype, a), s && g(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), m
            }(n.a.Component);
            k.propTypes = {
                onClose: i.a.func.isRequired,
                onDone: i.a.func.isRequired
            }, t.a = k
        },
        "2hgL": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("SHTr"),
                i = a.n(l),
                c = a("0oXL"),
                _ = a("74sb");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = y(e);
                    if (t) {
                        var n = y(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var h = function(e) {
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
                    }), t && f(e, t)
                }(r, e);
                var t, a, s, o = d(r);

                function r(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), t = o.call(this, e);
                    for (var a = [], s = 0; s < Object(_.r)(5, 7); s++) a.push({
                        top: "".concat(Object(_.r)(10, 90), "%"),
                        left: "".concat(Object(_.r)(10, 90), "%"),
                        width: "".concat(Object(_.r)(26, 36), "vh"),
                        animationDuration: "".concat(Object(_.r)(2500, 6e3), "ms"),
                        animationDelay: "".concat(Object(_.r)(1e3, 3e3), "ms"),
                        transform: "translate(-50%, -50%) rotate(".concat(Object(_.r)(-90, 90), "deg)")
                    });
                    return t.state = {
                        blookStylings: a
                    }, t
                }
                return t = r, (a = [{
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            className: i.a.container
                        }, this.state.blookStylings.map((function(t, a) {
                            return n.a.createElement(c.a, {
                                name: e.props.blook,
                                className: i.a.blook,
                                style: t,
                                key: a
                            })
                        })))
                    }
                }]) && u(t.prototype, a), s && u(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            h.propTypes = {
                blook: r.a.string
            }, t.a = h
        },
        "4Zpe": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("4HzQ"),
                _ = a("j0Ua"),
                m = a.n(_),
                u = a("Xst1"),
                f = a.n(u),
                d = a("74sb");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
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
                    var a, s = b(e);
                    if (t) {
                        var n = b(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return x(this, a)
                }
            }

            function x(e, t) {
                if (t && ("object" === p(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var w = function(e) {
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
                    }), t && h(e, t)
                }(r, e);
                var t, a, s, o = g(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        time: e.incorrectTime,
                        next: !1
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.correct ? this.setState({
                            next: !0
                        }) : this.nextInterval = setInterval((function() {
                            var t = e.state.time - 1;
                            t <= 0 ? (e.setState({
                                next: !0
                            }), clearInterval(e.nextInterval)) : e.setState({
                                time: t
                            })
                        }), 1e3)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.nextTimeout), clearInterval(this.nextInterval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return n.a.createElement("div", {
                            className: i()(f.a.regularBody, m.a.background),
                            style: {
                                backgroundColor: this.props.correct ? "#4bc22e" : "#c43a35",
                                cursor: this.state.next ? "pointer" : null
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.next ? this.props.onNext : null
                        }, "hacker" === this.props.theme ? n.a.createElement("div", {
                            className: m.a.overlay
                        }) : null, this.props.reward ? n.a.createElement(c.Textfit, {
                            className: m.a.rewardHeader,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: 250
                        }, this.props.reward) : n.a.createElement("div", {
                            className: m.a.header
                        }, this.props.correct ? "CORRECT" : "INCORRECT"), n.a.createElement("div", {
                            className: m.a.container
                        }, n.a.createElement("i", {
                            className: this.props.correct ? "fas fa-check" : "fas fa-times"
                        })), this.props.correct ? null : n.a.createElement("div", {
                            className: m.a.correctAnswers
                        }, "Correct ".concat(this.props.correctAnswers.length > 1 ? "Answers" : "Answer", ": "), Object(d.f)(this.props.correctAnswers, "#fff", 28)), this.state.next || this.state.time && !this.props.correct ? n.a.createElement("div", {
                            className: m.a.nextText,
                            style: {
                                textDecoration: this.state.next ? "underline" : "none"
                            }
                        }, this.state.next ? "Click Anywhere to Go Next" : this.state.time) : null)
                    }
                }]) && y(t.prototype, a), s && y(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            w.propTypes = {
                incorrectTime: r.a.number,
                correctAnswers: r.a.array,
                correct: r.a.bool,
                onNext: r.a.func,
                reward: r.a.string,
                theme: r.a.string
            }, t.a = w
        },
        "5gzV": function(e, t, a) {
            var s = a("Lx4A");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "5nyl": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___3YKeO-camelCase{left:0;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___6hjAF-camelCase,.styles__modal___3YKeO-camelCase{position:fixed;top:0;width:100%;height:100%}.styles__mainContainer___6hjAF-camelCase{right:0;max-width:1050px;background-color:#fff;z-index:5;-webkit-animation:styles__slideIn___PweGA-camelCase .3s linear forwards;animation:styles__slideIn___PweGA-camelCase .3s linear forwards}@-webkit-keyframes styles__slideIn___PweGA-camelCase{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes styles__slideIn___PweGA-camelCase{0%{transform:translateX(100%)}to{transform:translateX(0)}}.styles__slideOut___2qPxq-camelCase{-webkit-animation:styles__slideOut___2qPxq-camelCase .15s linear forwards;animation:styles__slideOut___2qPxq-camelCase .15s linear forwards}@-webkit-keyframes styles__slideOut___2qPxq-camelCase{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes styles__slideOut___2qPxq-camelCase{0%{transform:translateX(0)}to{transform:translateX(100%)}}.styles__closeIcon___2dOk--camelCase{position:absolute;top:5px;left:5px;font-size:22px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;display:none}.styles__top___2Rv9d-camelCase{height:95px;justify-content:center;align-items:center;border-bottom:3px solid #e0e0e0;padding-top:5px;box-sizing:border-box;z-index:3}.styles__searchContainer___200va-camelCase,.styles__top___2Rv9d-camelCase{display:flex;flex-direction:row}.styles__searchContainer___200va-camelCase{width:85%;min-width:300px;border:3px solid #0bc2cf;border-radius:6px;height:50px;background-color:#fff}.styles__searchIcon___-YGln-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;line-height:42px;margin:3px 3px 3px 10px;width:46px;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__searchInput___3YyVQ-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3YyVQ-camelCase::-webkit-search-cancel-button,.styles__searchInput___3YyVQ-camelCase::-webkit-search-decoration,.styles__searchInput___3YyVQ-camelCase::-webkit-search-results-button,.styles__searchInput___3YyVQ-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__filtersHolder___Np-g6-camelCase{position:relative;display:block}.styles__filterIcon___3B3jN-camelCase{font-size:23px;color:#fff;background-color:#9a49aa;border-radius:5px;margin-left:10px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (max-width:750px){.styles__filtersHolder___Np-g6-camelCase{display:none}}.styles__filtersColumn___3gQQN-camelCase{display:none;flex-direction:column;position:absolute;top:46px;right:0;width:200px}.styles__filtersHolder___Np-g6-camelCase:hover>.styles__filtersColumn___3gQQN-camelCase{display:flex}.styles__filterRow___31wnb-camelCase{background-color:#fff;border-radius:5px;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;padding:5px 10px;margin:2.5px 0;font-family:Nunito,sans-serif;font-size:16px;color:#3a3a3a;flex:1}.styles__filters___2QcHy-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-top:3px}.styles__checkBox___1aHZZ-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__checkIcon___3NhOg-camelCase{font-size:14px;margin:auto}.styles__checkYes___16d0X-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___A3ur5-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__left___36IK7-camelCase{position:absolute;top:95px;left:0;width:35%;height:calc(100% - 95px);padding:10px;box-sizing:border-box;border-right:3px solid #e0e0e0;z-index:2}.styles__nothingContainer___377mF-camelCase{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:24px;font-weight:700}.styles__nothingBlook___2uW5j-camelCase{width:100px;height:115px;margin-bottom:10px}.styles__hitsHolder___LLk1k-camelCase{flex-direction:column;padding:0 5px;height:100%;overflow-y:auto;overflow-x:hidden}.styles__hitContainer___11utO-camelCase,.styles__hitsHolder___LLk1k-camelCase{display:flex;width:100%;box-sizing:border-box}.styles__hitContainer___11utO-camelCase{flex-direction:row;align-items:center;margin:5px 0;padding:5px;border-radius:7px;border:3px solid #e0e0e0;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__hitContainer___11utO-camelCase:hover{transform:scale(.95)}.styles__hitImageContainer___1qVuH-camelCase{width:100px;min-width:100px;height:90px;border-radius:5px;margin-right:5px;overflow:hidden;display:flex;justify-content:center;align-items:center;position:relative}.styles__coverImage___1ad2Z-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__setFillerText___3OORu-camelCase{font-family:Titan One,sans-serif;font-size:20px;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__setQuestionsText___1TN7B-camelCase{position:absolute;bottom:5px;right:5px;background-color:rgba(0,0,0,.6);border-radius:4px;color:#fff;font-size:12px;padding:3px 5px}.styles__hitRight___3-sgR-camelCase{display:flex;flex-direction:column;min-height:90px;overflow-x:hidden;width:calc(100% - 105px)}.styles__setHeader___3JIfH-camelCase{font-size:16px;line-height:18px;font-weight:700;word-wrap:break-word}.styles__setSpacer___26nnk-camelCase{width:100%;height:5px;flex-grow:2}.styles__setPlays___18iwg-camelCase{font-size:12px;display:flex;flex-direction:row;align-items:center}.styles__verifiedIcon___3BZTt-camelCase{color:#0bc2cf;margin-left:8px}.styles__setDescText___pOM_u-camelCase{font-size:12px}.styles__setAuthorContainer___3-8GJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__authorIcon___2XXXs-camelCase{font-size:10px;margin-right:5px}.styles__showMoreButton___1LpHt-camelCase{width:170px;min-height:40px;background-color:#0bc2cf;border-radius:5px;margin:15px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:none;font-family:Nunito,sans-serif;font-size:20px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__showMoreButton___1LpHt-camelCase:hover{transform:scale(.95)}.styles__right___1iD6k-camelCase{position:absolute;top:95px;right:0;width:65%;height:calc(100% - 95px);padding:10px;box-sizing:border-box;background-color:#f7f7f7;z-index:-1}.styles__questionsHolder___1CTvY-camelCase{padding:0 10px;width:100%;height:100%;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.styles__questionSection___PMWu3-camelCase,.styles__questionsHolder___1CTvY-camelCase{display:flex;flex-direction:column}.styles__questionContainer___2Nudz-camelCase{width:100%;min-height:100px;padding:0;margin:15px 0 0;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___1qfQ6-camelCase{width:120px;height:100px;background-color:#333;margin:auto 0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__questionImage___3rY_C-camelCase,.styles__questionImageContainer___1qfQ6-camelCase{border-top-left-radius:7px;border-bottom-left-radius:7px}.styles__questionImage___3rY_C-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.styles__imageNumber___zbsWP-camelCase{font-family:Titan One,sans-serif;font-size:36px;color:#fff;text-shadow:2px 2px 8px grey;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionFunc___ORpa_-camelCase{margin:10px;width:27.5%;display:flex;justify-content:center;align-items:center}.styles__qMathField___3hW_w-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:16px!important}.styles__questionCenterContainer___n9Jtl-camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 210px);min-height:85px}.styles__questionWithFunc___fFsXT-camelCase{width:calc(72.5% - 230px)}.styles__questionText___14Agk-camelCase{font-size:18px;line-height:21px;padding:5px 0;box-sizing:border-box;color:#3a3a3a;word-wrap:break-word;flex-grow:1;white-space:pre-line}.styles__addedContainer___1O2sq-camelCase,.styles__addQuestionButton___10JG--camelCase{width:80px;min-width:80px;height:80px;margin:auto 10px;display:flex;justify-content:center;align-items:center;font-weight:700}.styles__addQuestionButton___10JG--camelCase{border-radius:5px;background-color:#9a49aa;box-shadow:0 0 4px 2px rgba(0,0,0,.2);flex-direction:column;font-size:13px;line-height:15px;font-family:Nunito,sans-serif;color:#fff;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__addQuestionButton___10JG--camelCase:hover{transform:scale(.95)}.styles__addIcon___99Ryd-camelCase{font-size:32px;margin-bottom:5px}.styles__answerContainer___25d56-camelCase{width:calc(95% - 10px);padding:0 5px;margin:0 2.5% 10px;overflow:hidden;background-color:#fff;border-bottom-left-radius:7px;border-bottom-right-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__answerText___3oGNk-camelCase{font-family:Nunito,sans-serif;font-size:14px;line-height:16px;color:#fff;text-align:center}.styles__answer___3CahM-camelCase{padding:5px;word-wrap:break-word;overflow-x:hidden}.styles__answer___3CahM-camelCase,.styles__answerImgContainer___3Lggr-camelCase{min-height:40px;margin:10px 5px;border-radius:7px;flex-grow:1;flex-basis:25%;display:flex;justify-content:center;align-items:center}.styles__answerImgContainer___3Lggr-camelCase{max-height:60px;overflow:none}.styles__answerImg___3He3q-camelCase{margin:auto;width:90%;height:90%;-o-object-fit:contain;object-fit:contain}.styles__answerImg___3He3q-camelCase,.styles__mathField___195d--camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___195d--camelCase{cursor:default!important;color:#fff;border-color:#fff;font-size:12px!important}.styles__faded___DWtFK-camelCase{opacity:.5}@media only screen and (max-width:1200px){.styles__closeIcon___2dOk--camelCase{display:block}}@media only screen and (max-width:900px){.styles__mainContainer___6hjAF-camelCase{top:0;height:100%;z-index:20}.styles__left___36IK7-camelCase{top:unset;bottom:0;width:100%;height:120px;padding:10px;border-right:none;border-top:3px solid #e0e0e0}.styles__nothingContainer___377mF-camelCase{font-size:20px}.styles__nothingBlook___2uW5j-camelCase{width:70px;height:80.5px;margin-bottom:5px}.styles__hitsHolder___LLk1k-camelCase{display:flex;flex-direction:row;padding:5px 0;overflow-y:hidden;overflow-x:auto}.styles__hitContainer___11utO-camelCase{width:90vw;min-width:320px;margin:0 5px}.styles__hitImageContainer___1qVuH-camelCase{width:80px;min-width:80px;height:60px}.styles__setFillerText___3OORu-camelCase{font-size:16px;padding:2px 4px}.styles__setQuestionsText___1TN7B-camelCase{font-size:10px}.styles__hitRight___3-sgR-camelCase{min-height:60px;width:calc(100% - 85px)}.styles__setHeader___3JIfH-camelCase{font-size:12px;line-height:14px}.styles__setSpacer___26nnk-camelCase{height:0;flex-grow:2}.styles__setDescText___pOM_u-camelCase,.styles__setPlays___18iwg-camelCase{font-size:10px}.styles__setEditedText___3gPsH-camelCase{display:none}.styles__authorIcon___2XXXs-camelCase{font-size:8px;margin-right:3px}.styles__showMoreButton___1LpHt-camelCase{min-width:140px;min-height:35px;margin:auto 15px;font-size:18px}.styles__right___1iD6k-camelCase{top:95px;right:0;width:100%;height:calc(100% - 215px)}}@media only screen and (max-width:600px){.styles__questionContainer___2Nudz-camelCase{flex-direction:column}.styles__questionImageContainer___1qfQ6-camelCase{width:100%;height:100px;border-bottom-left-radius:0;border-top-right-radius:7px}.styles__questionImage___3rY_C-camelCase{-o-object-fit:contain;object-fit:contain}.styles__imageNumber___zbsWP-camelCase{font-size:42px}.styles__questionFunc___ORpa_-camelCase{width:90%;margin:10px auto}.styles__questionCenterContainer___n9Jtl-camelCase{margin:5px auto;width:90%;height:auto}.styles__questionText___14Agk-camelCase{margin-bottom:10px}.styles__addedContainer___1O2sq-camelCase,.styles__addQuestionButton___10JG--camelCase{width:160px;min-width:160px;height:40px;margin:5px auto}.styles__addQuestionButton___10JG--camelCase{flex-direction:row;font-size:16px;line-height:18px}.styles__addIcon___99Ryd-camelCase{font-size:18px;margin-bottom:0;margin-right:5px}.styles__answerContainer___25d56-camelCase{flex-direction:column}.styles__answer___3CahM-camelCase,.styles__answerImgContainer___3Lggr-camelCase{margin:4px}}", ""]), t.locals = {
                modal: "styles__modal___3YKeO-camelCase",
                mainContainer: "styles__mainContainer___6hjAF-camelCase",
                slideIn: "styles__slideIn___PweGA-camelCase",
                slideOut: "styles__slideOut___2qPxq-camelCase",
                closeIcon: "styles__closeIcon___2dOk--camelCase",
                top: "styles__top___2Rv9d-camelCase",
                searchContainer: "styles__searchContainer___200va-camelCase",
                searchIcon: "styles__searchIcon___-YGln-camelCase",
                searchInput: "styles__searchInput___3YyVQ-camelCase",
                filtersHolder: "styles__filtersHolder___Np-g6-camelCase",
                filterIcon: "styles__filterIcon___3B3jN-camelCase",
                filtersColumn: "styles__filtersColumn___3gQQN-camelCase",
                filterRow: "styles__filterRow___31wnb-camelCase",
                filters: "styles__filters___2QcHy-camelCase",
                checkBox: "styles__checkBox___1aHZZ-camelCase",
                checkIcon: "styles__checkIcon___3NhOg-camelCase",
                checkYes: "styles__checkYes___16d0X-camelCase",
                checkNo: "styles__checkNo___A3ur5-camelCase",
                left: "styles__left___36IK7-camelCase",
                nothingContainer: "styles__nothingContainer___377mF-camelCase",
                nothingBlook: "styles__nothingBlook___2uW5j-camelCase",
                hitsHolder: "styles__hitsHolder___LLk1k-camelCase",
                hitContainer: "styles__hitContainer___11utO-camelCase",
                hitImageContainer: "styles__hitImageContainer___1qVuH-camelCase",
                coverImage: "styles__coverImage___1ad2Z-camelCase",
                setFillerText: "styles__setFillerText___3OORu-camelCase",
                setQuestionsText: "styles__setQuestionsText___1TN7B-camelCase",
                hitRight: "styles__hitRight___3-sgR-camelCase",
                setHeader: "styles__setHeader___3JIfH-camelCase",
                setSpacer: "styles__setSpacer___26nnk-camelCase",
                setPlays: "styles__setPlays___18iwg-camelCase",
                verifiedIcon: "styles__verifiedIcon___3BZTt-camelCase",
                setDescText: "styles__setDescText___pOM_u-camelCase",
                setAuthorContainer: "styles__setAuthorContainer___3-8GJ-camelCase",
                authorIcon: "styles__authorIcon___2XXXs-camelCase",
                showMoreButton: "styles__showMoreButton___1LpHt-camelCase",
                right: "styles__right___1iD6k-camelCase",
                questionsHolder: "styles__questionsHolder___1CTvY-camelCase",
                questionSection: "styles__questionSection___PMWu3-camelCase",
                questionContainer: "styles__questionContainer___2Nudz-camelCase",
                questionImageContainer: "styles__questionImageContainer___1qfQ6-camelCase",
                questionImage: "styles__questionImage___3rY_C-camelCase",
                imageNumber: "styles__imageNumber___zbsWP-camelCase",
                questionFunc: "styles__questionFunc___ORpa_-camelCase",
                qMathField: "styles__qMathField___3hW_w-camelCase",
                questionCenterContainer: "styles__questionCenterContainer___n9Jtl-camelCase",
                questionWithFunc: "styles__questionWithFunc___fFsXT-camelCase",
                questionText: "styles__questionText___14Agk-camelCase",
                addedContainer: "styles__addedContainer___1O2sq-camelCase",
                addQuestionButton: "styles__addQuestionButton___10JG--camelCase",
                addIcon: "styles__addIcon___99Ryd-camelCase",
                answerContainer: "styles__answerContainer___25d56-camelCase",
                answerText: "styles__answerText___3oGNk-camelCase",
                answer: "styles__answer___3CahM-camelCase",
                answerImgContainer: "styles__answerImgContainer___3Lggr-camelCase",
                answerImg: "styles__answerImg___3He3q-camelCase",
                mathField: "styles__mathField___195d--camelCase",
                faded: "styles__faded___DWtFK-camelCase",
                setEditedText: "styles__setEditedText___3gPsH-camelCase"
            }
        },
        "5rT7": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___lRkq8-camelCase{background-color:#9a49aa;width:100%;height:55px;margin:0;padding:0;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;z-index:15;position:fixed;top:0;left:0}.styles__headerTextLeft___3pmok-camelCase{font-size:40px;text-align:left;margin-left:40px;font-family:Titan One,sans-serif;text-decoration:none}.styles__headerTextLeft___3pmok-camelCase,.styles__mHamburgerIcon___2Je1h-camelCase{color:#fff;line-height:55px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__mHamburgerIcon___2Je1h-camelCase{font-size:30px;width:40px;position:absolute;top:0;right:20px;opacity:0;text-align:center;display:none}.styles__mNavMenu___AQ1_Z-camelCase{position:fixed;left:100vw;top:0;width:80vw;height:100%;background-color:rgba(154,73,170,.95);overflow-x:hidden;overflow-y:scroll;z-index:50;transition:.2s;display:none}.styles__closeIcon___6Bq7v-camelCase{position:absolute;top:25px;right:35px;color:#f1f1f1;font-size:35px;font-weight:700;transition:.3s;outline:none;text-decoration:none;cursor:pointer}.styles__closeIcon___6Bq7v-camelCase:focus,.styles__closeIcon___6Bq7v-camelCase:hover{color:#bbb}.styles__mNavColumn___2P-Hi-camelCase{position:absolute;display:flex;flex-direction:column;justify-content:flex-start;top:60px;left:34px}.styles__mNavContainer___1hW0E-camelCase{height:40px;width:400px;display:flex;flex-direction:row;align-items:center;margin-top:3px;margin-bottom:3px;outline:none;text-decoration:none}.styles__mNavText___hwM-N-camelCase{font-family:Nunito,sans-serif;font-size:24px;padding-left:9px}.styles__mNavIcon___2lvnV-camelCase,.styles__mNavText___hwM-N-camelCase{line-height:40px;color:#fff}.styles__mNavIcon___2lvnV-camelCase{font-size:25px;width:35px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___3MqKm-camelCase{margin-right:40px;justify-content:right}.styles__headerRight___3MqKm-camelCase,.styles__navContainer___361rJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__navContainer___361rJ-camelCase{height:52px;border-bottom:3px;border-bottom-color:hsla(0,0%,100%,0);border-bottom-style:solid;padding:0 15px;max-width:28px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:all .3s linear;overflow:hidden;text-decoration:none}.styles__selected___5nUkk-camelCase{border-bottom-color:#fff}.styles__expand___2FhE3-camelCase{max-width:175px}.styles__navContainer___361rJ-camelCase:focus,.styles__navContainer___361rJ-camelCase:hover{max-width:175px;border-bottom-color:#fff;transition:all .3s linear}.styles__navContainer___361rJ-camelCase:focus>.styles__navText___1wmac-camelCase,.styles__navContainer___361rJ-camelCase:hover>.styles__navText___1wmac-camelCase{opacity:1;transition:all .3s linear}.styles__navText___1wmac-camelCase{font-family:Nunito,sans-serif;line-height:55px;font-size:20px;color:#fff;padding-left:9px;opacity:0}.styles__listIcon___14Cum-camelCase{line-height:52px}.styles__createIcon___26fPU-camelCase,.styles__listIcon___14Cum-camelCase{font-size:25px;color:#fff;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__createIcon___26fPU-camelCase{line-height:50px}.styles__statsIcon___1liMg-camelCase{font-size:29px;line-height:53px}.styles__statsIcon___1liMg-camelCase,.styles__storeIcon___oQj2v-camelCase{color:#fff;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__storeIcon___oQj2v-camelCase{font-size:24px;line-height:51px}.styles__logoutIcon___1wJ2--camelCase{font-size:26px;color:#fff;line-height:52px;width:25px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (max-width:850px){.styles__header___lRkq8-camelCase{position:absolute}.styles__headerTextLeft___3pmok-camelCase{font-size:36px;margin-left:20px}.styles__mHamburgerIcon___2Je1h-camelCase{display:block;opacity:1}.styles__mNavMenu___AQ1_Z-camelCase{display:block}.styles__headerRight___3MqKm-camelCase{display:none}}", ""]), t.locals = {
                header: "styles__header___lRkq8-camelCase",
                headerTextLeft: "styles__headerTextLeft___3pmok-camelCase",
                mHamburgerIcon: "styles__mHamburgerIcon___2Je1h-camelCase",
                mNavMenu: "styles__mNavMenu___AQ1_Z-camelCase",
                closeIcon: "styles__closeIcon___6Bq7v-camelCase",
                mNavColumn: "styles__mNavColumn___2P-Hi-camelCase",
                mNavContainer: "styles__mNavContainer___1hW0E-camelCase",
                mNavText: "styles__mNavText___hwM-N-camelCase",
                mNavIcon: "styles__mNavIcon___2lvnV-camelCase",
                headerRight: "styles__headerRight___3MqKm-camelCase",
                navContainer: "styles__navContainer___361rJ-camelCase",
                selected: "styles__selected___5nUkk-camelCase",
                expand: "styles__expand___2FhE3-camelCase",
                navText: "styles__navText___1wmac-camelCase",
                listIcon: "styles__listIcon___14Cum-camelCase",
                createIcon: "styles__createIcon___26fPU-camelCase",
                statsIcon: "styles__statsIcon___1liMg-camelCase",
                storeIcon: "styles__storeIcon___oQj2v-camelCase",
                logoutIcon: "styles__logoutIcon___1wJ2--camelCase"
            }
        },
        "60T2": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___3e1g7-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;z-index:12}.styles__blook___3tdqO-camelCase{position:absolute;transform:translate(-50%,-50%);-webkit-animation:styles__fadeOut___3vaSu-camelCase 2s linear 2s forwards;animation:styles__fadeOut___3vaSu-camelCase 2s linear 2s forwards}@-webkit-keyframes styles__fadeOut___3vaSu-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___3vaSu-camelCase{0%{opacity:1}to{opacity:0}}", ""]), t.locals = {
                container: "styles__container___3e1g7-camelCase",
                blook: "styles__blook___3tdqO-camelCase",
                fadeOut: "styles__fadeOut___3vaSu-camelCase"
            }
        },
        "8RFr": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("TSYQ"),
                r = a.n(o),
                l = a("17x9"),
                i = a.n(l),
                c = a("sbeJ"),
                _ = a("j9P7"),
                m = a.n(_);

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
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
                    var a, s = g(e);
                    if (t) {
                        var n = g(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var x = function(e) {
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
                    }), t && d(e, t)
                }(l, e);
                var t, a, s, o = p(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = o.call(this, e)).state = {
                        timer: 15,
                        recordState: c.a.NONE,
                        audioData: null,
                        error: ""
                    }, t.uploadInput = n.a.createRef(), t.onStop = t.onStop.bind(h(t)), t.onUpload = t.onUpload.bind(h(t)), t.startRecording = t.startRecording.bind(h(t)), t.pauseRecording = t.pauseRecording.bind(h(t)), t.stopRecording = t.stopRecording.bind(h(t)), t
                }
                return t = l, (a = [{
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timerInterval)
                    }
                }, {
                    key: "onStop",
                    value: function(e) {
                        var t = this;
                        this.setState({
                            audioData: null
                        }, (function() {
                            t.setState({
                                audioData: e,
                                error: ""
                            })
                        }))
                    }
                }, {
                    key: "onUpload",
                    value: function(e) {
                        var t = this;
                        e.stopPropagation(), e.preventDefault();
                        var a = e.target.files[0];
                        if (a) return a.size > 2e6 ? this.setState({
                            error: "File too big (2MB Max)"
                        }) : void this.setState({
                            audioData: null
                        }, (function() {
                            t.setState({
                                error: "",
                                audioData: {
                                    blob: a,
                                    url: URL.createObjectURL(a)
                                }
                            })
                        }))
                    }
                }, {
                    key: "startRecording",
                    value: function() {
                        var e = this;
                        this.setState({
                            recordState: c.a.START
                        }, (function() {
                            e.timerInterval = setInterval((function() {
                                var t = e.state.timer - 1;
                                e.setState({
                                    timer: t
                                }), t <= 0 && e.stopRecording()
                            }), 1e3)
                        }))
                    }
                }, {
                    key: "pauseRecording",
                    value: function() {
                        clearInterval(this.timerInterval), this.setState({
                            recordState: c.a.PAUSE
                        })
                    }
                }, {
                    key: "stopRecording",
                    value: function() {
                        clearInterval(this.timerInterval), this.setState({
                            recordState: c.a.STOP,
                            timer: 15
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: m.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), n.a.createElement("div", {
                            className: m.a.mainContainer
                        }, n.a.createElement("div", {
                            className: m.a.header
                        }, "Audio Recorder"), n.a.createElement("div", {
                            className: m.a.text
                        }, "Record your audio:"), n.a.createElement("div", {
                            className: m.a.audioRow
                        }, n.a.createElement("div", {
                            className: m.a.audioWrapper
                        }, n.a.createElement(c.b, {
                            state: this.state.recordState,
                            onStop: this.onStop,
                            type: "audio/mpeg",
                            backgroundColor: "#fff",
                            foregroundColor: "#3a3a3a",
                            canvasWidth: 200,
                            canvasHeight: 100
                        })), [c.a.PAUSE, c.a.START].includes(this.state.recordState) ? n.a.createElement("div", {
                            className: m.a.timer
                        }, this.state.timer) : null), n.a.createElement("div", {
                            className: m.a.buttonRow
                        }, n.a.createElement("i", {
                            className: r()("fas fa-file-upload", m.a.iconButton),
                            title: "Upload",
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.uploadInput.current.click()
                            }
                        }), n.a.createElement("i", {
                            className: r()(this.state.recordState !== c.a.NONE ? "fas fa-play" : "fas fa-microphone-alt", m.a.iconButton),
                            title: "Record",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.startRecording
                        }), this.state.recordState !== c.a.NONE ? n.a.createElement(n.a.Fragment, null, n.a.createElement("i", {
                            className: r()("fas fa-pause", m.a.iconButton),
                            title: "Pause",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.pauseRecording
                        }), n.a.createElement("i", {
                            className: r()("fas fa-stop", m.a.iconButton),
                            title: "Stop",
                            role: "button",
                            tabIndex: 0,
                            onClick: this.stopRecording
                        })) : null), n.a.createElement("input", {
                            type: "file",
                            style: {
                                display: "none"
                            },
                            onChange: this.onUpload,
                            ref: this.uploadInput,
                            accept: "audio/*"
                        }), this.state.error ? n.a.createElement("div", {
                            className: m.a.errorContainer
                        }, n.a.createElement("i", {
                            className: r()(m.a.errorIcon, "fas fa-times-circle")
                        }), n.a.createElement("div", {
                            className: m.a.errorText
                        }, this.state.error)) : this.state.audioData ? n.a.createElement(n.a.Fragment, null, n.a.createElement("audio", {
                            controls: !0,
                            className: m.a.audio
                        }, n.a.createElement("source", {
                            src: this.state.audioData.url,
                            type: "audio/mpeg"
                        })), n.a.createElement("div", {
                            className: m.a.insertButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.props.onDone(e.state.audioData)
                            }
                        }, "Insert")) : null))
                    }
                }]) && f(t.prototype, a), s && f(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            x.propTypes = {
                onDone: i.a.func.isRequired,
                onClose: i.a.func.isRequired
            }, t.a = x
        },
        AYCC: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___1D9RE-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__one___UQTF4-camelCase 7s linear;animation:styles__one___UQTF4-camelCase 7s linear}@-webkit-keyframes styles__one___UQTF4-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}@keyframes styles__one___UQTF4-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___1-pa4-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__two___3N_St-camelCase 7s linear;animation:styles__two___3N_St-camelCase 7s linear}@-webkit-keyframes styles__two___3N_St-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}@keyframes styles__two___3N_St-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__leftBlook___qQ1hk-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);right:100vw;-webkit-animation:styles__leftBlook___qQ1hk-camelCase 7s linear;animation:styles__leftBlook___qQ1hk-camelCase 7s linear}@-webkit-keyframes styles__leftBlook___qQ1hk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}92.5%{right:60vw}97.5%{right:140vw}to{right:140vw}}@keyframes styles__leftBlook___qQ1hk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}92.5%{right:60vw}97.5%{right:140vw}to{right:140vw}}.styles__vsText___2I8md-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:7vw;text-align:center;position:absolute;opacity:0;top:57.5%;left:-50%;transform:translate(-50%,-50%);-webkit-animation:styles__vsText___2I8md-camelCase 7s linear;animation:styles__vsText___2I8md-camelCase 7s linear}@-webkit-keyframes styles__vsText___2I8md-camelCase{0%{opacity:0;left:50%}25%{opacity:0}30%{opacity:1}92.5%{left:50%}97.5%{left:-50%}to{opacity:1;left:-50%}}@keyframes styles__vsText___2I8md-camelCase{0%{opacity:0;left:50%}25%{opacity:0}30%{opacity:1}92.5%{left:50%}97.5%{left:-50%}to{opacity:1;left:-50%}}.styles__rightBlook___2L1J5-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);left:100vw;-webkit-animation:styles__rightBlook___2L1J5-camelCase 7s linear;animation:styles__rightBlook___2L1J5-camelCase 7s linear}@-webkit-keyframes styles__rightBlook___2L1J5-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}92.5%{left:60vw}97.5%{left:-40vw}to{left:-40vw}}@keyframes styles__rightBlook___2L1J5-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}92.5%{left:60vw}97.5%{left:-40vw}to{left:-40vw}}.styles__headerThree___1S9Iw-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__six___5-YZP-camelCase 7s linear;animation:styles__six___5-YZP-camelCase 7s linear}@-webkit-keyframes styles__six___5-YZP-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}@keyframes styles__six___5-YZP-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___u_azo-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___1D9RE-camelCase",
                one: "styles__one___UQTF4-camelCase",
                headerTwo: "styles__headerTwo___1-pa4-camelCase",
                two: "styles__two___3N_St-camelCase",
                leftBlook: "styles__leftBlook___qQ1hk-camelCase",
                vsText: "styles__vsText___2I8md-camelCase",
                rightBlook: "styles__rightBlook___2L1J5-camelCase",
                headerThree: "styles__headerThree___1S9Iw-camelCase",
                six: "styles__six___5-YZP-camelCase",
                container: "styles__container___u_azo-camelCase"
            }
        },
        CUKT: function(e, t, a) {
            var s = a("j8ID");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        D5Nu: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("TSYQ"),
                c = a.n(i),
                _ = a("fSAT"),
                m = a.n(_),
                u = a("74sb"),
                f = function(e) {
                    var t = e.mode;
                    return n.a.createElement("div", {
                        className: m.a.container
                    }, n.a.createElement(l.Textfit, {
                        className: m.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(u.D)("12vw")
                    }, "Royale" === t || "Royale Teams" === t ? "Step Two:" : "Step One:"), n.a.createElement(l.Textfit, {
                        className: m.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(u.D)("10vw")
                    }, "Answer Questions Correctly"), n.a.createElement("div", {
                        className: m.a.answerBox
                    }, n.a.createElement("div", {
                        className: m.a.answerHeader
                    }), n.a.createElement("div", {
                        className: m.a.answerOne
                    }), n.a.createElement("div", {
                        className: m.a.answerTwo
                    }), n.a.createElement("div", {
                        className: m.a.answerThree
                    }), n.a.createElement("div", {
                        className: m.a.answerFour
                    })), n.a.createElement("div", {
                        className: m.a.arrowContainer
                    }, n.a.createElement("i", {
                        className: c()(m.a.arrow, "fas fa-arrow-right")
                    })), n.a.createElement("div", {
                        className: m.a.checkBoxBorder
                    }, n.a.createElement("div", {
                        className: m.a.checkBox
                    }, n.a.createElement("i", {
                        className: c()(m.a.check, "fas fa-check")
                    }))), n.a.createElement(l.Textfit, {
                        className: m.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(u.D)("8vw")
                    }, "Royale" === t ? "Answer Quickly to Beat Your Opponent" : "Royale Teams" === t ? "Incorrect Answers Count For The Maximum Time" : "Random" === t ? "There's No Bonus For Answering Quickly" : "Flex" === t ? "Answer Quickly For Better Point Prizes" : "You Get More Points For Answering Quickly"))
                };
            f.propTypes = {
                mode: r.a.string
            }, t.a = f
        },
        Ec9F: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("X/4e"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                u = function(e) {
                    var t = e.team;
                    return n.a.createElement("div", {
                        className: c.a.container
                    }, n.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("12vw")
                    }, "Step One:"), n.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("10vw")
                    }, "Prepare"), n.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.leftBlook
                    }), n.a.createElement("div", {
                        className: c.a.vsText
                    }, "VS"), n.a.createElement(_.a, {
                        name: "Cat",
                        className: c.a.rightBlook
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("8vw")
                    }, "Each Round You'll Be Randomly Matched Up Against ".concat(t ? "A Team" : "Someone")))
                };
            u.propTypes = {
                team: r.a.bool
            }, t.a = u
        },
        Hq7Z: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___2_kIV-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__one___1SLJK-camelCase 8s linear;animation:styles__one___1SLJK-camelCase 8s linear}@-webkit-keyframes styles__one___1SLJK-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}@keyframes styles__one___1SLJK-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___1sGw1-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__two___375r6-camelCase 8s linear;animation:styles__two___375r6-camelCase 8s linear}@-webkit-keyframes styles__two___375r6-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}@keyframes styles__two___375r6-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__blookOne___2tbGF-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;-webkit-animation:styles__blookOne___2tbGF-camelCase 8s linear;animation:styles__blookOne___2tbGF-camelCase 8s linear}@-webkit-keyframes styles__blookOne___2tbGF-camelCase{0%{left:100vw}25%{left:100vw}40%{left:4.5vw}55%{opacity:1}60%{opacity:0}to{left:4.5vw;opacity:0}}@keyframes styles__blookOne___2tbGF-camelCase{0%{left:100vw}25%{left:100vw}40%{left:4.5vw}55%{opacity:1}60%{opacity:0}to{left:4.5vw;opacity:0}}.styles__blookTwo___39B3h-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;-webkit-animation:styles__blookTwo___39B3h-camelCase 8s linear;animation:styles__blookTwo___39B3h-camelCase 8s linear}@-webkit-keyframes styles__blookTwo___39B3h-camelCase{0%{left:100vw}25%{left:100vw}37.5%{left:23.5vw}92.5%{left:23.5vw}97.5%{left:-15vw}to{left:-15vw}}@keyframes styles__blookTwo___39B3h-camelCase{0%{left:100vw}25%{left:100vw}37.5%{left:23.5vw}92.5%{left:23.5vw}97.5%{left:-15vw}to{left:-15vw}}.styles__blookThree___1FsiH-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;-webkit-animation:styles__blookThree___1FsiH-camelCase 8s linear;animation:styles__blookThree___1FsiH-camelCase 8s linear}@-webkit-keyframes styles__blookThree___1FsiH-camelCase{0%{left:100vw}25%{left:100vw}35%{left:42.5vw}65%{opacity:1}70%{opacity:0}to{left:42.5vw;opacity:0}}@keyframes styles__blookThree___1FsiH-camelCase{0%{left:100vw}25%{left:100vw}35%{left:42.5vw}65%{opacity:1}70%{opacity:0}to{left:42.5vw;opacity:0}}.styles__blookFour___FJrBH-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;-webkit-animation:styles__blookFour___FJrBH-camelCase 8s linear;animation:styles__blookFour___FJrBH-camelCase 8s linear}@-webkit-keyframes styles__blookFour___FJrBH-camelCase{0%{left:100vw}25%{left:100vw}32.5%{left:61.5vw}60%{opacity:1}65%{opacity:0}to{left:61.5vw;opacity:0}}@keyframes styles__blookFour___FJrBH-camelCase{0%{left:100vw}25%{left:100vw}32.5%{left:61.5vw}60%{opacity:1}65%{opacity:0}to{left:61.5vw;opacity:0}}.styles__blookFive___29u6I-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;-webkit-animation:styles__blookFive___29u6I-camelCase 8s linear;animation:styles__blookFive___29u6I-camelCase 8s linear}@-webkit-keyframes styles__blookFive___29u6I-camelCase{0%{left:100vw}25%{left:100vw}30%{left:80.5vw}70%{opacity:1}75%{opacity:0}to{left:80.5vw;opacity:0}}@keyframes styles__blookFive___29u6I-camelCase{0%{left:100vw}25%{left:100vw}30%{left:80.5vw}70%{opacity:1}75%{opacity:0}to{left:80.5vw;opacity:0}}.styles__headerThree___3MhE8-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__six___1vXn7-camelCase 8s linear;animation:styles__six___1vXn7-camelCase 8s linear}@-webkit-keyframes styles__six___1vXn7-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}@keyframes styles__six___1vXn7-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___1l_Bo-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___2_kIV-camelCase",
                one: "styles__one___1SLJK-camelCase",
                headerTwo: "styles__headerTwo___1sGw1-camelCase",
                two: "styles__two___375r6-camelCase",
                blookOne: "styles__blookOne___2tbGF-camelCase",
                blookTwo: "styles__blookTwo___39B3h-camelCase",
                blookThree: "styles__blookThree___1FsiH-camelCase",
                blookFour: "styles__blookFour___FJrBH-camelCase",
                blookFive: "styles__blookFive___29u6I-camelCase",
                headerThree: "styles__headerThree___3MhE8-camelCase",
                six: "styles__six___1vXn7-camelCase",
                container: "styles__container___1l_Bo-camelCase"
            }
        },
        IGEA: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___2daxi-camelCase{font-size:44px;top:12.5%;left:50%;transform:translateX(-50%)}.styles__header___2daxi-camelCase,.styles__rewardHeader___B9UyO-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;font-family:Titan One,sans-serif;opacity:0;-webkit-animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__rewardHeader___B9UyO-camelCase{top:7.5%;left:5%;width:90%;height:30%;display:flex;justify-content:center;align-items:center}.styles__container___1-bHf-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px;-webkit-animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__container___1-bHf-camelCase,.styles__correctAnswers___2G7Wf-camelCase{text-align:center;position:absolute;color:#fff;opacity:0}.styles__correctAnswers___2G7Wf-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;bottom:20%;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;-webkit-animation:styles__fadeIn___q5EEU-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___q5EEU-camelCase .3s linear 1.3s forwards}.styles__background___2GulD-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;-webkit-animation:styles__fadeIn___q5EEU-camelCase .3s linear 0s forwards;animation:styles__fadeIn___q5EEU-camelCase .3s linear 0s forwards}.styles__nextText___2QnHA-camelCase{font-size:26px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:5%;left:7.5%;width:85%;font-family:Nunito,sans-serif;font-weight:700;opacity:0;-webkit-animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__overlay___19SSf-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}@-webkit-keyframes styles__fadeIn___q5EEU-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___q5EEU-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__nextText___2QnHA-camelCase{font-size:22px}}", ""]), t.locals = {
                header: "styles__header___2daxi-camelCase",
                rewardHeader: "styles__rewardHeader___B9UyO-camelCase",
                fadeIn: "styles__fadeIn___q5EEU-camelCase",
                container: "styles__container___1-bHf-camelCase",
                correctAnswers: "styles__correctAnswers___2G7Wf-camelCase",
                background: "styles__background___2GulD-camelCase",
                nextText: "styles__nextText___2QnHA-camelCase",
                overlay: "styles__overlay___19SSf-camelCase"
            }
        },
        IPze: function(e, t, a) {
            var s = a("y7sT");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        Ip1f: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("TSYQ"),
                r = a.n(o),
                l = a("17x9"),
                i = a.n(l),
                c = a("IPze"),
                _ = a.n(c),
                m = a("XOuL");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
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
                    var a, s = g(e);
                    if (t) {
                        var n = g(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var x = function(e) {
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
                    }), t && d(e, t)
                }(l, e);
                var t, a, s, o = p(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = o.call(this, e)).state = {
                        stage: 1,
                        input: "",
                        loading: !1,
                        isFlipped: !1
                    }, t.onCreate = t.onCreate.bind(h(t)), t
                }
                return t = l, (a = [{
                    key: "onCreate",
                    value: function(e) {
                        this.setState({
                            loading: !0
                        }), this.props.done(e, this.state.input, this.state.isFlipped)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            className: _.a.mainContainer
                        }, n.a.createElement("i", {
                            className: r()(_.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.props.close()
                            }
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549659668/SVG/QuizletFullLogo.svg",
                            alt: "Quizlet",
                            className: _.a.logoHeader
                        }), n.a.createElement("div", {
                            className: _.a.stepHeader
                        }, 1 === this.state.stage ? "Step 1: Find a Set" : 2 === this.state.stage ? "Step 2: How to Export" : "Step 3: Paste and Create"), 1 === this.state.stage ? n.a.createElement("div", null, n.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Any of Quizlet's sets can quickly be converted into a Blooket set! Then, you can go back and edit it to make it your own. Once you find a set, hit the next button below.", " For the best results, use Quizlet sets that list the answer first and the question second."), n.a.createElement("div", {
                            className: _.a.buttonContainer
                        }, n.a.createElement("a", {
                            className: _.a.button,
                            href: "https://quizlet.com/latest",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, n.a.createElement("i", {
                            className: r()(_.a.userIcon, "fas fa-user-astronaut")
                        }), n.a.createElement("div", {
                            className: _.a.buttonText
                        }, "Your Quizlet")), n.a.createElement("a", {
                            className: _.a.button,
                            href: "https://quizlet.com/subject",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, n.a.createElement("i", {
                            className: r()(_.a.searchIcon, "fas fa-search")
                        }), n.a.createElement("div", {
                            className: _.a.buttonText
                        }, "Search Quizlet")))) : 2 === this.state.stage ? n.a.createElement("div", null, n.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Follow the steps below to export a set from Quizlet. Then, hit the next button after copying the set."), n.a.createElement("div", {
                            className: _.a.exportStep
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep1.png",
                            alt: "Export Step One",
                            className: _.a.imageStep
                        }), n.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Click the '3 dots' button on the set you want to export")), n.a.createElement("div", {
                            className: _.a.exportStep
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep2.png",
                            alt: "Export Step Two",
                            className: _.a.imageStep
                        }), n.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Under the dropdown menu, click 'Export'")), n.a.createElement("div", {
                            className: _.a.exportStep
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1549673561/QuizletImportStep3.png",
                            alt: "Export Step Three",
                            className: _.a.imageStep3
                        }), n.a.createElement("div", {
                            className: _.a.exportInstructions
                        }, "Leave 'Tab' and 'New line' selected, then click 'Copy Text'"))) : n.a.createElement("div", null, n.a.createElement("div", {
                            className: _.a.stepDesc
                        }, "Now, paste the text into the text box below and hit the 'Add Questions' button under it."), n.a.createElement("div", {
                            className: _.a.stepRow
                        }, n.a.createElement("div", {
                            className: r()(_.a.checkBox, this.state.isFlipped ? _.a.checkYes : _.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isFlipped: !e.state.isFlipped
                                })
                            }
                        }, n.a.createElement("i", {
                            className: r()(_.a.checkIcon, "fas fa-check")
                        })), n.a.createElement("div", {
                            className: _.a.checkText
                        }, "Flip questions and answers")), n.a.createElement("textarea", {
                            className: _.a.input,
                            onChange: function(t) {
                                return e.setState({
                                    input: t.target.value
                                })
                            },
                            "data-gramm_editor": "false"
                        })), this.state.loading ? n.a.createElement(m.a, null) : 3 === this.state.stage ? n.a.createElement("div", {
                            className: _.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function(t) {
                                return e.onCreate(t)
                            }
                        }, "Add Questions") : n.a.createElement("div", {
                            className: _.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    stage: e.state.stage + 1
                                })
                            }
                        }, "Next Step"))
                    }
                }]) && f(t.prototype, a), s && f(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            x.propTypes = {
                done: i.a.func.isRequired,
                close: i.a.func.isRequired
            }, t.a = x
        },
        JyFv: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("jIL8"),
                i = a.n(l);

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
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
                    var a, s = d(e);
                    if (t) {
                        var n = d(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(e, t) {
                if (t && ("object" === c(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var p = function() {
                    var e, t = 0;

                    function a(e, t, a, s, n) {
                        this.size = e, this.x = t, this.y = a, this.vx = s, this.vy = n, this.div = document.createElement("div"), this.div.classList.add(i.a.snowflake), this.div.style.width = "".concat(this.size, "px"), this.div.style.height = "".concat(this.size, "px")
                    }

                    function s() {
                        for (var t = e.length; t--;) {
                            var a = e[t];
                            a.move(), a.draw()
                        }
                        window.requestAnimationFrame(s)
                    }
                    return a.prototype.move = function() {
                        this.x += this.vx + Math.min(Math.max(t, -10), 10), this.y += this.vy, this.x > window.innerWidth + this.size && (this.x -= window.innerWidth + this.size), this.x < -this.size && (this.x += window.innerWidth + this.size), this.y > window.innerHeight + this.size && (this.x = Math.random() * window.innerWidth, this.y -= window.innerHeight + 2 * this.size)
                    }, a.prototype.draw = function() {
                        var e = "translate3d(".concat(this.x, "px, ").concat(this.y, "px, 0)");
                        this.div.style.transform = e, this.div.style.MozTransform = e, this.div.style.webkitTransform = e
                    }, a.init = function(n, o) {
                        e = [];
                        for (var r = o; r--;) {
                            var l = 12 * (Math.random() + .2) + 1,
                                i = new a(l, Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() - .5, .3 * l);
                            n.appendChild(i.div), e.push(i)
                        }
                        window.ondeviceorientation = function(e) {
                            e && (t = e.gamma / 10)
                        }, s()
                    }, a
                }(),
                y = function(e) {
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
                        }), t && m(e, t)
                    }(r, e);
                    var t, a, s, o = u(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this, e)).state = {}, t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.startTimeout = setTimeout((function() {
                                p.init(document.getElementById("snow"), e.props.count)
                            }), 500)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.startTimeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.a.createElement("div", {
                                id: "snow",
                                className: i.a.snow,
                                style: {
                                    zIndex: this.props.zIndex
                                }
                            })
                        }
                    }]) && _(t.prototype, a), s && _(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(n.a.Component);
            y.propTypes = {
                zIndex: r.a.number,
                count: r.a.number
            }, t.a = y
        },
        Lx4A: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___iJHm8-camelCase{width:100%;background-color:#2705ab;overflow:hidden}.styles__background___iJHm8-camelCase,.styles__rightBackground___1MlHs-camelCase{position:absolute;height:100%}.styles__rightBackground___1MlHs-camelCase{width:57%;right:0;background-color:#fe6f45;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 76%,27% 59%,12% 40%,12% 37%,16% 37%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 76%,27% 59%,12% 40%,12% 37%,16% 37%);opacity:0;-webkit-animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards;animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards}.styles__backgroundOverlay___30oLa-camelCase{width:130%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:1;mix-blend-mode:overlay}.styles__lightningTop___2HGFQ-camelCase{height:40%;position:absolute;top:-101%;left:47%;transform:translateX(-50%);-webkit-animation:styles__lightDown___28I2j-camelCase 1s ease .75s forwards;animation:styles__lightDown___28I2j-camelCase 1s ease .75s forwards}@-webkit-keyframes styles__lightDown___28I2j-camelCase{0%{top:-101%}to{top:-1%}}@keyframes styles__lightDown___28I2j-camelCase{0%{top:-101%}to{top:-1%}}.styles__lightningBottom___1BQHj-camelCase{height:82%;position:absolute;bottom:-107%;left:50%;transform:translateX(-50%);-webkit-animation:styles__lightUp___2AohX-camelCase 1s ease .75s forwards;animation:styles__lightUp___2AohX-camelCase 1s ease .75s forwards}@-webkit-keyframes styles__lightUp___2AohX-camelCase{0%{bottom:-107%}to{bottom:-7%}}@keyframes styles__lightUp___2AohX-camelCase{0%{bottom:-107%}to{bottom:-7%}}.styles__vs___2UQ3M-camelCase{position:absolute;top:50%;left:51%;transform:translate(-50%,-50%);width:14%;opacity:0;-webkit-animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards;animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards}@-webkit-keyframes styles__vs___2UQ3M-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__vs___2UQ3M-camelCase{0%{opacity:0}to{opacity:1}}.styles__numText___Jq-cI-camelCase{position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:14%}.styles__leftBlook___3dmVL-camelCase,.styles__leftBlookShadow1___z5rQ0-camelCase,.styles__leftBlookShadow2___2DRl_-camelCase,.styles__leftBlookShadow3___o4trU-camelCase{width:17%;position:absolute;top:55%;left:-80%;-webkit-animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .25s forwards;animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .25s forwards}.styles__leftBlook___3dmVL-camelCase{transform:translate(-50%,-50%) rotate(-10deg)}.styles__leftBlookShadow1___z5rQ0-camelCase{transform:translate(-50%,-50%) translate(-7px,-7px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__leftBlookShadow2___2DRl_-camelCase{transform:translate(-50%,-50%) translate(-35px,-35px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__leftBlookShadow3___o4trU-camelCase{transform:translate(-55%,-60%) rotate(-10deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%);-webkit-animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .5s forwards;animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-80%}to{left:20%}}@keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-80%}to{left:20%}}.styles__leftEnergyContainer___3o_YW-camelCase{position:absolute;bottom:-100%;left:0;width:30%;height:25%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;transform:rotate(5deg);-webkit-animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards;animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideUp___2FVnm-camelCase{0%{bottom:-100%}to{bottom:0}}@keyframes styles__slideUp___2FVnm-camelCase{0%{bottom:-100%}to{bottom:0}}.styles__leftEnergyBar___3HQ8Z-camelCase{position:absolute;transform:rotateY(180deg) translateX(2%);width:100%;z-index:-1}.styles__leftEnergyBolt___2zRoz-camelCase{width:18%;margin-right:1vw}.styles__leftEnergy___1XTrK-camelCase{width:13%;margin:0 -.5vw;transform:rotateY(180deg) translateY(-7%)}.styles__leftNameplate___2pIMB-camelCase{width:30%;position:absolute;top:-85%;left:-2%;transform:rotate(5deg) translateY(-50%);-webkit-animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards;animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideDown___1BhYU-camelCase{0%{top:-85%}to{top:15%}}@keyframes styles__slideDown___1BhYU-camelCase{0%{top:-85%}to{top:15%}}.styles__leftName___1yVwZ-camelCase{position:absolute;top:-86%;left:1.5%;width:21vw;height:10vh;transform:rotate(5deg) translateY(-50%);color:#fff;font-family:Titan One,sans-serif;display:flex;justify-content:center;align-items:center;text-shadow:5px 5px rgba(0,0,0,.25);-webkit-animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards;animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideDown2___3A8QH-camelCase{0%{top:-86%}to{top:14%}}@keyframes styles__slideDown2___3A8QH-camelCase{0%{top:-86%}to{top:14%}}.styles__rightBlook___3wMbl-camelCase,.styles__rightBlookShadow1___3EuAf-camelCase,.styles__rightBlookShadow2___2_SxU-camelCase,.styles__rightBlookShadow3___2zMg0-camelCase{width:17%;position:absolute;top:55%;right:-80%;-webkit-animation:styles__slideInRight___1KE7c-camelCase 1s ease .25s forwards;animation:styles__slideInRight___1KE7c-camelCase 1s ease .25s forwards}.styles__rightBlook___3wMbl-camelCase{transform:translate(50%,-50%) rotate(10deg)}.styles__rightBlookShadow1___3EuAf-camelCase{transform:translate(50%,-50%) translate(7px,-7px) rotate(10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__rightBlookShadow2___2_SxU-camelCase{transform:translate(50%,-50%) translate(35px,-35px) rotate(10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__rightBlookShadow3___2zMg0-camelCase{transform:translate(55%,-60%) rotate(10deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%);-webkit-animation:styles__slideInRight___1KE7c-camelCase 1s ease .5s forwards;animation:styles__slideInRight___1KE7c-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-80%}to{right:20%}}@keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-80%}to{right:20%}}.styles__rightNameplate___35gSa-camelCase{width:30%;position:absolute;top:-85%;right:-2%;transform:rotate(-5deg) translateY(-50%);-webkit-animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards;animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards}.styles__rightName___K8CAu-camelCase{top:-86%;right:1.5%;width:21vw;height:10vh;transform:rotate(-5deg) translateY(-50%);color:#fff;font-family:Titan One,sans-serif;justify-content:center;text-shadow:5px 5px rgba(0,0,0,.25);-webkit-animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards;animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards}.styles__rightEnergyContainer___ZrFU2-camelCase,.styles__rightName___K8CAu-camelCase{position:absolute;display:flex;align-items:center}.styles__rightEnergyContainer___ZrFU2-camelCase{bottom:-100%;right:0;width:30%;height:25%;flex-direction:row;justify-content:flex-start;transform:rotate(-5deg);-webkit-animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards;animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards}.styles__rightEnergyBar___1-o1j-camelCase{position:absolute;transform:translateX(2%);width:100%;z-index:-1}.styles__rightEnergyBolt___GsfCS-camelCase{width:18%;margin-left:1vw}.styles__rightEnergy___euKt3-camelCase{width:13%;margin:0 -.5vw;transform:translateY(-7%)}@media only screen and (max-width:1050px){.styles__rightBackground___1MlHs-camelCase{width:100%;height:50%;bottom:0;-webkit-clip-path:none;clip-path:none;opacity:1;-webkit-animation:none;animation:none}.styles__backgroundOverlay___30oLa-camelCase{width:unset;height:130%}.styles__lightningBottom___1BQHj-camelCase,.styles__lightningTop___2HGFQ-camelCase{opacity:0}.styles__vs___2UQ3M-camelCase{position:absolute;top:50%;left:51%;transform:translate(-50%,-50%) scale(0);width:34%;max-width:200px;opacity:1;-webkit-animation:styles__vs___2UQ3M-camelCase .5s 1s forwards;animation:styles__vs___2UQ3M-camelCase .5s 1s forwards}@-webkit-keyframes styles__vs___2UQ3M-camelCase{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes styles__vs___2UQ3M-camelCase{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}.styles__numText___Jq-cI-camelCase{top:50%;width:30%;max-width:140px}.styles__leftNameplate___2pIMB-camelCase{width:60%;top:10%;left:-102%;transform:rotate(5deg) translateY(-50%)}@-webkit-keyframes styles__slideDown___1BhYU-camelCase{0%{left:-102%}to{left:-2%}}@keyframes styles__slideDown___1BhYU-camelCase{0%{left:-102%}to{left:-2%}}.styles__leftName___1yVwZ-camelCase{top:10%;left:-101.5%;width:51vw;height:5vh;transform:rotate(5deg) translateY(-50%)}@-webkit-keyframes styles__slideDown2___3A8QH-camelCase{0%{left:-101.5%}to{left:1.5%}}@keyframes styles__slideDown2___3A8QH-camelCase{0%{left:-101.5%}to{left:1.5%}}.styles__leftBlook___3dmVL-camelCase,.styles__leftBlookShadow1___z5rQ0-camelCase,.styles__leftBlookShadow2___2DRl_-camelCase,.styles__leftBlookShadow3___o4trU-camelCase{width:30%;top:27%;left:-30%}.styles__leftBlookShadow1___z5rQ0-camelCase{transform:translate(-50%,-50%) translate(-3px,-3px) rotate(-10deg)}.styles__leftBlookShadow2___2DRl_-camelCase{transform:translate(-50%,-50%) translate(-10px,-10px) rotate(-10deg)}.styles__leftBlookShadow3___o4trU-camelCase{transform:translate(-55%,-65%) rotate(-10deg) scale(1.6)}@-webkit-keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-30%}to{left:70%}}@keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-30%}to{left:70%}}.styles__leftEnergyContainer___3o_YW-camelCase{bottom:60%;left:-100%;width:40%;height:10%}@-webkit-keyframes styles__slideUp___2FVnm-camelCase{0%{left:-100%}to{left:0}}@keyframes styles__slideUp___2FVnm-camelCase{0%{left:-100%}to{left:0}}.styles__leftEnergy___1XTrK-camelCase{width:11%;margin:0 -.6vw;transform:rotateY(180deg) translateY(-9%)}.styles__rightBlook___3wMbl-camelCase,.styles__rightBlookShadow1___3EuAf-camelCase,.styles__rightBlookShadow2___2_SxU-camelCase,.styles__rightBlookShadow3___2zMg0-camelCase{width:30%;top:73%;right:-30%}.styles__rightBlookShadow1___3EuAf-camelCase{transform:translate(50%,-50%) translate(3px,-3px) rotate(10deg)}.styles__rightBlookShadow2___2_SxU-camelCase{transform:translate(50%,-50%) translate(10px,-10px) rotate(10deg)}.styles__rightBlookShadow3___2zMg0-camelCase{transform:translate(55%,-60%) rotate(10deg) scale(1.6)}@-webkit-keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-30%}to{right:70%}}@keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-30%}to{right:70%}}.styles__rightNameplate___35gSa-camelCase{width:60%;top:90%;right:-102%;transform:rotate(-5deg) translateY(-50%);-webkit-animation:styles__slideDown-2___3eg5l-camelCase 1s ease .5s forwards;animation:styles__slideDown-2___3eg5l-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideDown-2___3eg5l-camelCase{0%{right:-102%}to{right:-2%}}@keyframes styles__slideDown-2___3eg5l-camelCase{0%{right:-102%}to{right:-2%}}.styles__rightName___K8CAu-camelCase{top:90%;right:-101.5%;width:51vw;height:5vh;-webkit-animation:styles__slideDown2-2___2Sd9X-camelCase 1s ease .5s forwards;animation:styles__slideDown2-2___2Sd9X-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideDown2-2___2Sd9X-camelCase{0%{right:-101.5%}to{right:1.5%}}@keyframes styles__slideDown2-2___2Sd9X-camelCase{0%{right:-101.5%}to{right:1.5%}}.styles__rightEnergyContainer___ZrFU2-camelCase{bottom:30%;right:-100%;width:40%;height:10%;-webkit-animation:styles__slideUp-2___3Xyfb-camelCase 1s ease .5s forwards;animation:styles__slideUp-2___3Xyfb-camelCase 1s ease .5s forwards}@-webkit-keyframes styles__slideUp-2___3Xyfb-camelCase{0%{right:-100%}to{right:0}}@keyframes styles__slideUp-2___3Xyfb-camelCase{0%{right:-100%}to{right:0}}.styles__rightEnergy___euKt3-camelCase{width:11%;margin:0 -.6vw;transform:translateY(-9%)}}", ""]), t.locals = {
                background: "styles__background___iJHm8-camelCase",
                rightBackground: "styles__rightBackground___1MlHs-camelCase",
                vs: "styles__vs___2UQ3M-camelCase",
                backgroundOverlay: "styles__backgroundOverlay___30oLa-camelCase",
                lightningTop: "styles__lightningTop___2HGFQ-camelCase",
                lightDown: "styles__lightDown___28I2j-camelCase",
                lightningBottom: "styles__lightningBottom___1BQHj-camelCase",
                lightUp: "styles__lightUp___2AohX-camelCase",
                numText: "styles__numText___Jq-cI-camelCase",
                leftBlook: "styles__leftBlook___3dmVL-camelCase",
                leftBlookShadow1: "styles__leftBlookShadow1___z5rQ0-camelCase",
                leftBlookShadow2: "styles__leftBlookShadow2___2DRl_-camelCase",
                leftBlookShadow3: "styles__leftBlookShadow3___o4trU-camelCase",
                slideInLeft: "styles__slideInLeft___3ZQsq-camelCase",
                leftEnergyContainer: "styles__leftEnergyContainer___3o_YW-camelCase",
                slideUp: "styles__slideUp___2FVnm-camelCase",
                leftEnergyBar: "styles__leftEnergyBar___3HQ8Z-camelCase",
                leftEnergyBolt: "styles__leftEnergyBolt___2zRoz-camelCase",
                leftEnergy: "styles__leftEnergy___1XTrK-camelCase",
                leftNameplate: "styles__leftNameplate___2pIMB-camelCase",
                slideDown: "styles__slideDown___1BhYU-camelCase",
                leftName: "styles__leftName___1yVwZ-camelCase",
                slideDown2: "styles__slideDown2___3A8QH-camelCase",
                rightBlook: "styles__rightBlook___3wMbl-camelCase",
                rightBlookShadow1: "styles__rightBlookShadow1___3EuAf-camelCase",
                rightBlookShadow2: "styles__rightBlookShadow2___2_SxU-camelCase",
                rightBlookShadow3: "styles__rightBlookShadow3___2zMg0-camelCase",
                slideInRight: "styles__slideInRight___1KE7c-camelCase",
                rightNameplate: "styles__rightNameplate___35gSa-camelCase",
                rightName: "styles__rightName___K8CAu-camelCase",
                rightEnergyContainer: "styles__rightEnergyContainer___ZrFU2-camelCase",
                rightEnergyBar: "styles__rightEnergyBar___1-o1j-camelCase",
                rightEnergyBolt: "styles__rightEnergyBolt___GsfCS-camelCase",
                rightEnergy: "styles__rightEnergy___euKt3-camelCase",
                "slideDown-2": "styles__slideDown-2___3eg5l-camelCase",
                "slideDown2-2": "styles__slideDown2-2___2Sd9X-camelCase",
                "slideUp-2": "styles__slideUp-2___3Xyfb-camelCase"
            }
        },
        NZV8: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__snowflake___2ZPyL-camelCase{display:block;position:absolute;border-radius:50%;transform:translateZ(0);-webkit-user-select:none;-moz-user-select:none;user-select:none;background:radial-gradient(circle farthest-corner,#fff 40%,hsla(0,0%,100%,0) 100%);opacity:0;-webkit-animation:styles__fadeIn___2UF_k-camelCase .2s linear 0ms forwards;animation:styles__fadeIn___2UF_k-camelCase .2s linear 0ms forwards}@-webkit-keyframes styles__fadeIn___2UF_k-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2UF_k-camelCase{0%{opacity:0}to{opacity:1}}.styles__snow___2FzYe-camelCase{position:absolute;height:100%;width:100%;top:0;left:0;overflow:hidden;pointer-events:none}", ""]), t.locals = {
                snowflake: "styles__snowflake___2ZPyL-camelCase",
                fadeIn: "styles__fadeIn___2UF_k-camelCase",
                snow: "styles__snow___2FzYe-camelCase"
            }
        },
        "O/BK": function(e, t, a) {
            var s = a("qRUB");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "RIy+": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___3Kd2e-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:30%;top:17.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__one___2DH-Z-camelCase 2.5s linear;animation:styles__one___2DH-Z-camelCase 2.5s linear}@-webkit-keyframes styles__one___2DH-Z-camelCase{0%{left:100%}17.5%{left:15%}65%{left:15%}82.5%{left:-70%}to{left:-70%}}@keyframes styles__one___2DH-Z-camelCase{0%{left:100%}17.5%{left:15%}65%{left:15%}82.5%{left:-70%}to{left:-70%}}.styles__headerTwo___2UcxZ-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:30%;top:52.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__two___Q5WZ9-camelCase 2.5s linear;animation:styles__two___Q5WZ9-camelCase 2.5s linear}@-webkit-keyframes styles__two___Q5WZ9-camelCase{0%{left:100%}22.5%{left:100%}40%{left:15%}72.5%{left:15%}90%{left:-70%}to{left:-70%}}@keyframes styles__two___Q5WZ9-camelCase{0%{left:100%}22.5%{left:100%}40%{left:15%}72.5%{left:15%}90%{left:-70%}to{left:-70%}}.styles__expandBackground___3ngJx-camelCase{width:100%;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#e4e4e4;-webkit-animation:styles__three___102bG-camelCase 2.5s linear;animation:styles__three___102bG-camelCase 2.5s linear}@-webkit-keyframes styles__three___102bG-camelCase{0%{width:0;height:0%}90%{width:0;height:0%}to{width:100%;height:100%}}@keyframes styles__three___102bG-camelCase{0%{width:0;height:0%}90%{width:0;height:0%}to{width:100%;height:100%}}.styles__container___3GMVw-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0}", ""]), t.locals = {
                headerOne: "styles__headerOne___3Kd2e-camelCase",
                one: "styles__one___2DH-Z-camelCase",
                headerTwo: "styles__headerTwo___2UcxZ-camelCase",
                two: "styles__two___Q5WZ9-camelCase",
                expandBackground: "styles__expandBackground___3ngJx-camelCase",
                three: "styles__three___102bG-camelCase",
                container: "styles__container___3GMVw-camelCase"
            }
        },
        SHTr: function(e, t, a) {
            var s = a("60T2");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        T7Yb: function(e, t, a) {
            var s = a("Veel");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        Veel: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___2doOd-camelCase{position:absolute;width:100%;height:100%;background-color:#2705ab;overflow:hidden}.styles__resultsOverlay___3ARXU-camelCase,.styles__winnerOverlay___2R4HG-camelCase{width:130%;position:absolute;top:50%;left:50%;mix-blend-mode:overlay;transform:translate(-50%,-50%)}.styles__winnerBackground___2jJ6Q-camelCase,.styles__winnerOverlay___2R4HG-camelCase{opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .5s linear 4.5s forwards;animation:styles__fadeIn___3PNPp-camelCase .5s linear 4.5s forwards}.styles__winnerBackground___2jJ6Q-camelCase{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#fe6f45}.styles__resultsOverlay___3ARXU-camelCase{opacity:0;-webkit-animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards;animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards}@-webkit-keyframes styles__fadeInFadeOut___3pl9--camelCase{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.styles__loserOverlay___IiaoT-camelCase{position:absolute;top:-5%;width:100%;transform:translateY(-100%);mix-blend-mode:multiply;-webkit-animation:styles__slideIn___2GCai-camelCase 1s linear 4.5s forwards;animation:styles__slideIn___2GCai-camelCase 1s linear 4.5s forwards}@-webkit-keyframes styles__slideIn___2GCai-camelCase{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes styles__slideIn___2GCai-camelCase{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.styles__loserOverlay2___1pUAf-camelCase{position:absolute;bottom:0;width:100%;opacity:0;mix-blend-mode:overlay;-webkit-animation:styles__fadeIn___3PNPp-camelCase .5s linear 5s forwards;animation:styles__fadeIn___3PNPp-camelCase .5s linear 5s forwards}.styles__resultsText___3W8kq-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:8vw;width:40vw;position:absolute;left:30vw;top:50%;transform:translateY(-50%);text-align:center;opacity:0;-webkit-animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards;animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards}@keyframes styles__fadeInFadeOut___3pl9--camelCase{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.styles__victoryTextBg___1u4Xy-camelCase{width:60%}.styles__victoryText___yCjyX-camelCase,.styles__victoryTextBg___1u4Xy-camelCase{position:absolute;top:20%;left:28%;transform:translate(-50%,-50%) rotate(-5deg);opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__victoryText___yCjyX-camelCase{width:34%}.styles__winnerBlookContainer___GpQg7-camelCase,.styles__winnerBlookShadow3___gza0m-camelCase{width:22%;position:absolute;top:50%;left:30%;opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__winnerBlook___2oTx7-camelCase,.styles__winnerBlookShadow1___3Yc41-camelCase,.styles__winnerBlookShadow2___2CFEk-camelCase{position:absolute;width:100%}.styles__winnerBlook___2oTx7-camelCase{transform:translate(-50%,-50%) rotate(-10deg)}.styles__winnerBlookShadow1___3Yc41-camelCase{transform:translate(-50%,-50%) translateY(7px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__winnerBlookShadow2___2CFEk-camelCase{transform:translate(-50%,-50%) translateY(35px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__winnerBlookShadow3___gza0m-camelCase{transform:translate(-55%,-60%) rotate(5deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%)}.styles__winnerNameplate___2eL5d-camelCase{width:22%;left:30%}.styles__winnerName___2C6ZT-camelCase,.styles__winnerNameplate___2eL5d-camelCase{position:absolute;bottom:9%;transform:translate(-50%,50%);opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__winnerName___2C6ZT-camelCase{left:29%;width:18%;height:7vh;color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px rgba(0,0,0,.25)}.styles__winnerCorrectContainer___29dKA-camelCase,.styles__winnerName___2C6ZT-camelCase{display:flex;justify-content:center;align-items:center}.styles__winnerCorrectContainer___29dKA-camelCase{flex-direction:row;position:absolute;right:145%;width:70%;top:1vw;transform:rotate(-10deg)}.styles__winnerCorrectBg___2dlJ_-camelCase{position:absolute;width:100%;z-index:-1}.styles__winnerCheck___2yjvC-camelCase{width:30%;margin-right:5%;padding-bottom:.5vw}.styles__winnerTime___3nbp1-camelCase{font-family:Titan One,sans-serif;font-size:1.8vw;text-shadow:2px 2px rgba(0,0,0,.2);padding-bottom:.5vw}.styles__winnerEnergyContainer___28lLt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;right:120%;width:70%;top:5vw;transform:rotate(-10deg)}.styles__winnerEnergy___3xBsk-camelCase{font-family:Titan One,sans-serif;font-size:2.2vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#ff490f;padding-bottom:.5vw}.styles__winnerEnergyIcon___27N-T-camelCase{width:14%;margin-right:17%;margin-left:5%;padding-bottom:.5vw}.styles__defeatTextBg___kd38G-camelCase{width:30%}.styles__defeatText___3VwUK-camelCase,.styles__defeatTextBg___kd38G-camelCase{position:absolute;top:45%;right:20%;transform:translate(50%,-50%) rotate(5deg);opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__defeatText___3VwUK-camelCase{width:22%}.styles__loserBlookContainer___3rpaH-camelCase,.styles__loserBlookShadow3___2jhmn-camelCase{width:12%;position:absolute;top:65%;right:22%;opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__loserBlook___3K4Yz-camelCase,.styles__loserBlookShadow1___3FQLc-camelCase,.styles__loserBlookShadow2___2FbUp-camelCase{position:absolute;width:100%}.styles__loserBlook___3K4Yz-camelCase{transform:translate(50%,-50%) rotate(-10deg);filter:grayscale(1)}.styles__loserBlookShadow1___3FQLc-camelCase{transform:translate(50%,-50%) translateY(5px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__loserBlookShadow2___2FbUp-camelCase{transform:translate(50%,-50%) translateY(25px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__loserBlookShadow3___2jhmn-camelCase{transform:translate(55%,-60%) rotate(5deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%)}.styles__loserNameplate___OBayt-camelCase{width:16%}.styles__loserName___3x34A-camelCase,.styles__loserNameplate___OBayt-camelCase{position:absolute;bottom:9%;right:22%;transform:translate(50%,50%);opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__loserName___3x34A-camelCase{width:12%;height:4vh;color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px rgba(0,0,0,.25)}.styles__loserCorrectContainer___2guae-camelCase,.styles__loserName___3x34A-camelCase{display:flex;justify-content:center;align-items:center}.styles__loserCorrectContainer___2guae-camelCase{flex-direction:row;position:absolute;right:45%;width:100%;top:0;transform:rotate(-10deg)}.styles__loserCorrectBg___261VT-camelCase{position:absolute;width:100%;z-index:-1}.styles__loserCheck___1MS9e-camelCase{width:25%;margin-right:5%;padding-bottom:.5vw}.styles__loserTime___LNWNT-camelCase{font-family:Titan One,sans-serif;font-size:1.3vw;text-shadow:2px 2px rgba(0,0,0,.2);padding-bottom:.5vw}.styles__loserEnergyContainer___3GzYk-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;right:10%;width:90%;top:3vw;transform:rotate(-10deg)}.styles__loserEnergy___Ol4FK-camelCase{font-family:Titan One,sans-serif;font-size:1.6vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#324cff;padding-bottom:.5vw}.styles__loserEnergyIcon___3bVUA-camelCase{width:14%;margin-right:12%;margin-left:5%;padding-bottom:.5vw}.styles__rightText___1wBm5-camelCase{position:absolute;top:5%;right:5%;width:25%;font-family:Titan One,sans-serif;font-size:3.5vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#fff;text-align:center;opacity:0;-webkit-animation:styles__fadeIn___3PNPp-camelCase .25s linear 5.5s forwards;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5.5s forwards}@-webkit-keyframes styles__fadeIn___3PNPp-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3PNPp-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:900px){.styles__resultsOverlay___3ARXU-camelCase,.styles__winnerOverlay___2R4HG-camelCase{height:130%;width:unset}.styles__resultsText___3W8kq-camelCase{font-size:12vw;width:60vw;left:20vw}.styles__rightText___1wBm5-camelCase{top:unset;bottom:2%;right:5%;width:90%;font-size:6vw}.styles__victoryTextBg___1u4Xy-camelCase{width:80%}.styles__victoryText___yCjyX-camelCase,.styles__victoryTextBg___1u4Xy-camelCase{top:9%;left:50%;transform:translate(-50%,-50%) rotate(-5deg)}.styles__victoryText___yCjyX-camelCase{width:54%}.styles__winnerBlookContainer___GpQg7-camelCase,.styles__winnerBlookShadow3___gza0m-camelCase{width:35%;top:22%;left:50%}.styles__winnerBlookShadow1___3Yc41-camelCase{transform:translate(-50%,-50%) translateY(3px) rotate(-10deg)}.styles__winnerBlookShadow2___2CFEk-camelCase{transform:translate(-50%,-50%) translateY(10px) rotate(-10deg)}.styles__winnerBlookShadow3___gza0m-camelCase{transform:translate(-55%,-60%) rotate(5deg) scale(1.4)}.styles__winnerNameplate___2eL5d-camelCase{width:50%;left:50%}.styles__winnerName___2C6ZT-camelCase,.styles__winnerNameplate___2eL5d-camelCase{bottom:unset;top:42%;transform:translate(-50%,-50%)}.styles__winnerName___2C6ZT-camelCase{left:48%;width:38%;height:5vh}.styles__winnerCorrectContainer___29dKA-camelCase{right:145%;width:90%;top:2vw}.styles__winnerCheck___2yjvC-camelCase{width:30%;margin-right:5%;padding-bottom:1.5vw}.styles__winnerTime___3nbp1-camelCase{font-size:4vw;padding-bottom:1.5vw}.styles__winnerEnergyContainer___28lLt-camelCase{right:120%;width:80%;top:9vw}.styles__winnerEnergy___3xBsk-camelCase{font-size:5vw;padding-bottom:1.5vw}.styles__winnerEnergyIcon___27N-T-camelCase{width:18%;margin-right:15%;margin-left:5%;padding-bottom:1.5vw}.styles__defeatTextBg___kd38G-camelCase{width:50%;top:62%;right:50%}.styles__defeatText___3VwUK-camelCase{width:32%;top:62%;right:50%}.styles__loserBlookContainer___3rpaH-camelCase,.styles__loserBlookShadow3___2jhmn-camelCase{width:25%;top:73%;right:50%}.styles__loserBlookShadow1___3FQLc-camelCase{transform:translate(50%,-50%) translateY(2px) rotate(-10deg)}.styles__loserBlookShadow2___2FbUp-camelCase{transform:translate(50%,-50%) translateY(7px) rotate(-10deg)}.styles__loserBlookShadow3___2jhmn-camelCase{transform:translate(55%,-60%) rotate(5deg) scale(1.4)}.styles__loserNameplate___OBayt-camelCase{width:40%;bottom:12%;right:50%}.styles__loserName___3x34A-camelCase{bottom:12%;right:52%;width:32%;height:3.5vh}.styles__loserCorrectContainer___2guae-camelCase{right:45%;width:110%;top:0}.styles__loserCheck___1MS9e-camelCase{width:25%;margin-right:5%;padding-bottom:1.5vw}.styles__loserTime___LNWNT-camelCase{font-size:3vw;padding-bottom:1.5vw}.styles__loserEnergyContainer___3GzYk-camelCase{right:10%;width:90%;top:6vw}.styles__loserEnergy___Ol4FK-camelCase{font-size:4vw;padding-bottom:1.5vw}.styles__loserEnergyIcon___3bVUA-camelCase{width:18%;margin-right:12%;margin-left:5%;padding-bottom:1.5vw}}", ""]), t.locals = {
                background: "styles__background___2doOd-camelCase",
                resultsOverlay: "styles__resultsOverlay___3ARXU-camelCase",
                winnerOverlay: "styles__winnerOverlay___2R4HG-camelCase",
                winnerBackground: "styles__winnerBackground___2jJ6Q-camelCase",
                fadeIn: "styles__fadeIn___3PNPp-camelCase",
                fadeInFadeOut: "styles__fadeInFadeOut___3pl9--camelCase",
                loserOverlay: "styles__loserOverlay___IiaoT-camelCase",
                slideIn: "styles__slideIn___2GCai-camelCase",
                loserOverlay2: "styles__loserOverlay2___1pUAf-camelCase",
                resultsText: "styles__resultsText___3W8kq-camelCase",
                victoryTextBg: "styles__victoryTextBg___1u4Xy-camelCase",
                victoryText: "styles__victoryText___yCjyX-camelCase",
                winnerBlookContainer: "styles__winnerBlookContainer___GpQg7-camelCase",
                winnerBlookShadow3: "styles__winnerBlookShadow3___gza0m-camelCase",
                winnerBlook: "styles__winnerBlook___2oTx7-camelCase",
                winnerBlookShadow1: "styles__winnerBlookShadow1___3Yc41-camelCase",
                winnerBlookShadow2: "styles__winnerBlookShadow2___2CFEk-camelCase",
                winnerNameplate: "styles__winnerNameplate___2eL5d-camelCase",
                winnerName: "styles__winnerName___2C6ZT-camelCase",
                winnerCorrectContainer: "styles__winnerCorrectContainer___29dKA-camelCase",
                winnerCorrectBg: "styles__winnerCorrectBg___2dlJ_-camelCase",
                winnerCheck: "styles__winnerCheck___2yjvC-camelCase",
                winnerTime: "styles__winnerTime___3nbp1-camelCase",
                winnerEnergyContainer: "styles__winnerEnergyContainer___28lLt-camelCase",
                winnerEnergy: "styles__winnerEnergy___3xBsk-camelCase",
                winnerEnergyIcon: "styles__winnerEnergyIcon___27N-T-camelCase",
                defeatTextBg: "styles__defeatTextBg___kd38G-camelCase",
                defeatText: "styles__defeatText___3VwUK-camelCase",
                loserBlookContainer: "styles__loserBlookContainer___3rpaH-camelCase",
                loserBlookShadow3: "styles__loserBlookShadow3___2jhmn-camelCase",
                loserBlook: "styles__loserBlook___3K4Yz-camelCase",
                loserBlookShadow1: "styles__loserBlookShadow1___3FQLc-camelCase",
                loserBlookShadow2: "styles__loserBlookShadow2___2FbUp-camelCase",
                loserNameplate: "styles__loserNameplate___OBayt-camelCase",
                loserName: "styles__loserName___3x34A-camelCase",
                loserCorrectContainer: "styles__loserCorrectContainer___2guae-camelCase",
                loserCorrectBg: "styles__loserCorrectBg___261VT-camelCase",
                loserCheck: "styles__loserCheck___1MS9e-camelCase",
                loserTime: "styles__loserTime___LNWNT-camelCase",
                loserEnergyContainer: "styles__loserEnergyContainer___3GzYk-camelCase",
                loserEnergy: "styles__loserEnergy___Ol4FK-camelCase",
                loserEnergyIcon: "styles__loserEnergyIcon___3bVUA-camelCase",
                rightText: "styles__rightText___1wBm5-camelCase"
            }
        },
        VgLj: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("55Ip"),
                _ = a("H1WH"),
                m = a("Yz+4"),
                u = a.n(m),
                f = a("qnYv");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function y(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
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
                    var a, s = b(e);
                    if (t) {
                        var n = b(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return x(this, a)
                }
            }

            function x(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var w = function(e) {
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
                    }), t && h(e, t)
                }(r, e);
                var t, a, s, o = g(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        ready: !1,
                        open: !1,
                        logoutLink: ""
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        f.a.get("/api/config").then((function(t) {
                            e.setState({
                                logoutLink: "".concat(t.data.frontendIDBase, "/logout")
                            })
                        })), this.timeout = setTimeout((function() {
                            e.setState({
                                ready: !0
                            })
                        }), 100)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, s, o, r, l, m = this;
                        return n.a.createElement("div", {
                            className: u.a.header
                        }, _.isMobile ? n.a.createElement("div", {
                            className: u.a.headerTextLeft
                        }, "Blooket") : n.a.createElement(c.b, {
                            className: u.a.headerTextLeft,
                            to: "/"
                        }, "Blooket"), n.a.createElement("i", {
                            className: i()(u.a.mHamburgerIcon, "fas fa-bars"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return m.setState({
                                    open: !0
                                })
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavMenu,
                            style: {
                                transform: this.state.open ? "translateX(-100%)" : null
                            }
                        }, n.a.createElement("i", {
                            className: i()(u.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return m.setState({
                                    open: !1
                                })
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavColumn
                        }, n.a.createElement("a", {
                            className: u.a.mNavContainer,
                            href: "https://www.blooket.com"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-paper-plane")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Landing Page")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/play"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-play")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Play")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/discover"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-compass")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Discover")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/dashboard"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-home"),
                            style: {
                                fontSize: 26
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Dashboard")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/create"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-edit")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Create")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/stats"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-chart-bar"),
                            style: {
                                fontSize: 29
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Stats")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/market"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-store")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Market")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/blooks"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-suitcase")
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Blooks")), n.a.createElement(c.b, {
                            className: u.a.mNavContainer,
                            to: "/settings"
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-cog"),
                            style: {
                                fontSize: 26
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Settings")), n.a.createElement("a", {
                            className: u.a.mNavContainer,
                            href: this.state.logoutLink
                        }, n.a.createElement("i", {
                            className: i()(u.a.mNavIcon, "fas fa-sign-out-alt"),
                            style: {
                                fontSize: 26
                            }
                        }), n.a.createElement("div", {
                            className: u.a.mNavText
                        }, "Logout")))), n.a.createElement("div", {
                            className: u.a.headerRight
                        }, n.a.createElement(c.b, {
                            className: u.a.navContainer,
                            to: "/play"
                        }, n.a.createElement("i", {
                            className: i()(u.a.listIcon, "fas fa-play")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Play")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (e = {}, p(e, u.a.selected, "Discover" === this.props.page), p(e, u.a.expand, "Discover" === this.props.page && !this.state.ready), e)),
                            to: "/discover"
                        }, n.a.createElement("i", {
                            className: i()(u.a.listIcon, "fas fa-compass")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Discover")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (t = {}, p(t, u.a.selected, "Dashboard" === this.props.page), p(t, u.a.expand, "Dashboard" === this.props.page && !this.state.ready), t)),
                            to: "/dashboard"
                        }, n.a.createElement("i", {
                            className: i()(u.a.listIcon, "fas fa-home")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Dashboard")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (a = {}, p(a, u.a.selected, "Create" === this.props.page), p(a, u.a.expand, "Create" === this.props.page && !this.state.ready), a)),
                            to: "/create"
                        }, n.a.createElement("i", {
                            className: i()(u.a.createIcon, "fas fa-edit")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Create")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (s = {}, p(s, u.a.selected, "Stats" === this.props.page), p(s, u.a.expand, "Stats" === this.props.page && !this.state.ready), s)),
                            to: "/stats"
                        }, n.a.createElement("i", {
                            className: i()(u.a.statsIcon, "fas fa-chart-bar")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Stats")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (o = {}, p(o, u.a.selected, "Market" === this.props.page), p(o, u.a.expand, "Market" === this.props.page && !this.state.ready), o)),
                            to: "/market"
                        }, n.a.createElement("i", {
                            className: i()(u.a.storeIcon, "fas fa-store")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Market")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (r = {}, p(r, u.a.selected, "Blooks" === this.props.page), p(r, u.a.expand, "Blooks" === this.props.page && !this.state.ready), r)),
                            to: "/blooks"
                        }, n.a.createElement("i", {
                            className: i()(u.a.listIcon, "fas fa-suitcase")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Blooks")), n.a.createElement(c.b, {
                            className: i()(u.a.navContainer, (l = {}, p(l, u.a.selected, "Settings" === this.props.page), p(l, u.a.expand, "Settings" === this.props.page && !this.state.ready), l)),
                            to: "/settings"
                        }, n.a.createElement("i", {
                            className: i()(u.a.listIcon, "fas fa-cog")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Settings")), n.a.createElement("a", {
                            className: u.a.navContainer,
                            href: this.state.logoutLink
                        }, n.a.createElement("i", {
                            className: i()(u.a.logoutIcon, "fas fa-sign-out-alt")
                        }), n.a.createElement("div", {
                            className: u.a.navText
                        }, "Logout"))))
                    }
                }]) && y(t.prototype, a), s && y(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            w.propTypes = {
                page: r.a.string,
                logoutLink: r.a.string
            }, t.a = w
        },
        Vy2N: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2wtJM-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___3sH0Q-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden}.styles__header___3Vtay-camelCase{position:absolute;top:0;left:0;width:100%;height:50px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__text___2JvVh-camelCase{text-align:center;width:95%;margin:70px auto 5px;font-size:22px}.styles__uploadButtonContainer___3cMeT-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:65px auto 0}.styles__uploadButton___2esYM-camelCase{border-radius:5px;width:95px;height:42px;margin:5px 15px;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__uploadButton___2esYM-camelCase:focus,.styles__uploadButton___2esYM-camelCase:hover{background-color:#004de6}.styles__uploadIcon___1udog-camelCase{font-size:20px;margin-right:7px;width:22px;text-align:center}.styles__uploadText___2FOVV-camelCase{font-size:14px;line-height:15px}.styles__dropContainer___20eYZ-camelCase{height:100px;width:80%;border:1px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:15px auto;font-size:14px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__activeDropContainer___31k9F-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropzoneIcon___3stiE-camelCase{color:#fff;background-color:#3378ff;border-radius:7px;width:35px;height:35px;font-size:18px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}.styles__urlInput___H4nKR-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;padding:5px 10px;width:90%;margin:10px auto;box-sizing:border-box;font-size:18px;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__urlInput___H4nKR-camelCase:-moz-placeholder,.styles__urlInput___H4nKR-camelCase:-ms-input-placeholder,.styles__urlInput___H4nKR-camelCase::-moz-placeholder,.styles__urlInput___H4nKR-camelCase::-webkit-input-placeholder{color:#999}.styles__urlInput___H4nKR-camelCase::-webkit-inner-spin-button,.styles__urlInput___H4nKR-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__inputFilled___1jI7h-camelCase,.styles__urlInput___H4nKR-camelCase:focus{border-color:#3378ff}.styles__buttonRow___rgfPg-camelCase{flex-direction:row;justify-content:space-evenly;width:80%;margin:10px auto 25px}.styles__button___2Eg2o-camelCase,.styles__buttonRow___rgfPg-camelCase{display:flex;align-items:center}.styles__button___2Eg2o-camelCase{border-radius:5px;width:90px;height:35px;font-size:18px;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__button___2Eg2o-camelCase:focus,.styles__button___2Eg2o-camelCase:hover{background-color:#004de6}.styles__errorContainer___1aUPm-camelCase{border:2px solid #ce1313;border-radius:4px;width:90%;padding:5px 10px;box-sizing:border-box;margin:0 auto 15px;display:flex;flex-direction:row;align-items:center}.styles__errorIcon___Gu1MQ-camelCase{font-size:16px;color:#ce1313;margin-right:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___oPNrh-camelCase{font-size:14px}", ""]), t.locals = {
                modal: "styles__modal___2wtJM-camelCase",
                mainContainer: "styles__mainContainer___3sH0Q-camelCase",
                header: "styles__header___3Vtay-camelCase",
                text: "styles__text___2JvVh-camelCase",
                uploadButtonContainer: "styles__uploadButtonContainer___3cMeT-camelCase",
                uploadButton: "styles__uploadButton___2esYM-camelCase",
                uploadIcon: "styles__uploadIcon___1udog-camelCase",
                uploadText: "styles__uploadText___2FOVV-camelCase",
                dropContainer: "styles__dropContainer___20eYZ-camelCase",
                activeDropContainer: "styles__activeDropContainer___31k9F-camelCase",
                dropzoneIcon: "styles__dropzoneIcon___3stiE-camelCase",
                urlInput: "styles__urlInput___H4nKR-camelCase",
                inputFilled: "styles__inputFilled___1jI7h-camelCase",
                buttonRow: "styles__buttonRow___rgfPg-camelCase",
                button: "styles__button___2Eg2o-camelCase",
                errorContainer: "styles__errorContainer___1aUPm-camelCase",
                errorIcon: "styles__errorIcon___Gu1MQ-camelCase",
                errorText: "styles__errorText___oPNrh-camelCase"
            }
        },
        "X/4e": function(e, t, a) {
            var s = a("AYCC");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        YHq4: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("eMKS"),
                i = a.n(l),
                c = a("TSYQ"),
                _ = a.n(c),
                m = a("4HzQ"),
                u = a("ahDL"),
                f = a.n(u),
                d = a("0oXL"),
                p = a("74sb");

            function y(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var h = function(e) {
                var t, a = e.energy,
                    s = e.name,
                    o = e.blook,
                    r = e.done,
                    l = e.win,
                    i = e.left,
                    c = e.ready,
                    u = e.safe;
                return n.a.createElement("div", {
                    className: _()(f.a.row, (t = {}, y(t, f.a.rowLose, !l && r), y(t, f.a.rowRight, !i), t))
                }, n.a.createElement("img", {
                    src: "https://media.blooket.com/image/upload/v1662596209/Media/br/Resize_Host_Lobby_Nameplate_Left.svg",
                    alt: "background",
                    className: _()(f.a.background, y({}, f.a.backgroundRight, !i))
                }), n.a.createElement(d.a, {
                    name: o,
                    className: _()(f.a.blook, y({}, f.a.blookRight, !i))
                }), n.a.createElement(m.Textfit, {
                    className: f.a.name,
                    mode: "single",
                    forceSingleModeWidth: !1,
                    min: 1,
                    max: Object(p.D)("5vw")
                }, s), n.a.createElement("div", {
                    className: f.a.energyContainer
                }, n.a.createElement("div", {
                    className: f.a.energyText,
                    style: {
                        color: i ? "#ff490f" : "#324cff"
                    }
                }, r && c && !l && !u ? a - 1 : a), n.a.createElement("img", {
                    src: i ? "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg" : "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                    alt: "Energy",
                    className: f.a.energyIcon
                })))
            };
            h.propTypes = {
                energy: r.a.number,
                name: r.a.string,
                blook: r.a.string,
                done: r.a.bool,
                win: r.a.bool,
                left: r.a.bool,
                ready: r.a.bool,
                safe: r.a.bool
            };
            var g = h,
                x = function(e) {
                    var t = e.match,
                        a = e.ready,
                        s = e.safe,
                        o = Boolean(t[0].time || t[1].time);
                    return n.a.createElement("div", {
                        className: i.a.container
                    }, n.a.createElement(g, {
                        energy: t[0].energy,
                        name: t[0].name,
                        blook: t[0].blook,
                        done: o,
                        win: t[0].correct && !t[1].correct || t[0].correct && t[0].time < t[1].time,
                        ready: a,
                        safe: s,
                        left: !0
                    }), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662503029/Media/br/Host_Lobby_VS.png",
                        alt: "VS",
                        className: i.a.vsImg
                    }), n.a.createElement(g, {
                        energy: t[1].energy,
                        name: t[1].clone ? "".concat(t[1].name, " 👾") : t[1].name,
                        blook: t[1].blook,
                        done: o,
                        win: t[1].correct && !t[0].correct || t[1].correct && t[1].time < t[0].time,
                        safe: s,
                        ready: a
                    }))
                };
            x.propTypes = {
                match: r.a.array,
                ready: r.a.bool,
                safe: r.a.bool
            };
            t.a = x
        },
        "Yz+4": function(e, t, a) {
            var s = a("5rT7");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "Z+lD": function(e, t, a) {
            "use strict";
            (function(e) {
                var s = a("q1tI"),
                    n = a.n(s),
                    o = a("TSYQ"),
                    r = a.n(o),
                    l = a("17x9"),
                    i = a.n(l),
                    c = a("UiDi"),
                    _ = a.n(c),
                    m = a("cpGi"),
                    u = a("EDFO"),
                    f = a("CUKT"),
                    d = a.n(f),
                    p = a("qnYv"),
                    y = a("swc+"),
                    h = a("FVRk"),
                    g = a("25NL"),
                    x = a("Z1o9"),
                    b = a("8RFr"),
                    w = a("j03a"),
                    C = a("vCpj"),
                    v = a("ca/f");

                function k(e) {
                    return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function E(e) {
                    return function(e) {
                        if (Array.isArray(e)) return N(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return N(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return N(e, t)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function N(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                    return s
                }

                function I(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function T(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(a), !0).forEach((function(t) {
                            B(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function(t) {
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

                function S(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
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
                        var a, s = R(e);
                        if (t) {
                            var n = R(this).constructor;
                            a = Reflect.construct(s, arguments, n)
                        } else a = s.apply(this, arguments);
                        return z(this, a)
                    }
                }

                function z(e, t) {
                    if (t && ("object" === k(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return q(e)
                }

                function q(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function R(e) {
                    return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function P() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    P = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        a = t.hasOwnProperty,
                        s = "function" == typeof Symbol ? Symbol : {},
                        n = s.iterator || "@@iterator",
                        o = s.asyncIterator || "@@asyncIterator",
                        r = s.toStringTag || "@@toStringTag";

                    function l(e, t, a) {
                        return Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, t, a) {
                            return e[t] = a
                        }
                    }

                    function i(e, t, a, s) {
                        var n = t && t.prototype instanceof m ? t : m,
                            o = Object.create(n.prototype),
                            r = new v(s || []);
                        return o._invoke = function(e, t, a) {
                            var s = "suspendedStart";
                            return function(n, o) {
                                if ("executing" === s) throw new Error("Generator is already running");
                                if ("completed" === s) {
                                    if ("throw" === n) throw o;
                                    return N()
                                }
                                for (a.method = n, a.arg = o;;) {
                                    var r = a.delegate;
                                    if (r) {
                                        var l = b(r, a);
                                        if (l) {
                                            if (l === _) continue;
                                            return l
                                        }
                                    }
                                    if ("next" === a.method) a.sent = a._sent = a.arg;
                                    else if ("throw" === a.method) {
                                        if ("suspendedStart" === s) throw s = "completed", a.arg;
                                        a.dispatchException(a.arg)
                                    } else "return" === a.method && a.abrupt("return", a.arg);
                                    s = "executing";
                                    var i = c(e, t, a);
                                    if ("normal" === i.type) {
                                        if (s = a.done ? "completed" : "suspendedYield", i.arg === _) continue;
                                        return {
                                            value: i.arg,
                                            done: a.done
                                        }
                                    }
                                    "throw" === i.type && (s = "completed", a.method = "throw", a.arg = i.arg)
                                }
                            }
                        }(e, a, r), o
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
                    e.wrap = i;
                    var _ = {};

                    function m() {}

                    function u() {}

                    function f() {}
                    var d = {};
                    l(d, n, (function() {
                        return this
                    }));
                    var p = Object.getPrototypeOf,
                        y = p && p(p(E([])));
                    y && y !== t && a.call(y, n) && (d = y);
                    var h = f.prototype = m.prototype = Object.create(d);

                    function g(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function x(e, t) {
                        var s;
                        this._invoke = function(n, o) {
                            function r() {
                                return new t((function(s, r) {
                                    ! function s(n, o, r, l) {
                                        var i = c(e[n], e, o);
                                        if ("throw" !== i.type) {
                                            var _ = i.arg,
                                                m = _.value;
                                            return m && "object" == k(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                                s("next", e, r, l)
                                            }), (function(e) {
                                                s("throw", e, r, l)
                                            })) : t.resolve(m).then((function(e) {
                                                _.value = e, r(_)
                                            }), (function(e) {
                                                return s("throw", e, r, l)
                                            }))
                                        }
                                        l(i.arg)
                                    }(n, o, s, r)
                                }))
                            }
                            return s = s ? s.then(r, r) : r()
                        }
                    }

                    function b(e, t) {
                        var a = e.iterator[t.method];
                        if (void 0 === a) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return _;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return _
                        }
                        var s = c(a, e.iterator, t.arg);
                        if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                        var n = s.arg;
                        return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
                    }

                    function w(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function C(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function v(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(w, this), this.reset(!0)
                    }

                    function E(e) {
                        if (e) {
                            var t = e[n];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var s = -1,
                                    o = function t() {
                                        for (; ++s < e.length;)
                                            if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: N
                        }
                    }

                    function N() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return u.prototype = f, l(h, "constructor", f), l(f, "constructor", u), u.displayName = l(f, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, r, "GeneratorFunction")), e.prototype = Object.create(h), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, g(x.prototype), l(x.prototype, o, (function() {
                        return this
                    })), e.AsyncIterator = x, e.async = function(t, a, s, n, o) {
                        void 0 === o && (o = Promise);
                        var r = new x(i(t, a, s, n), o);
                        return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                            return e.done ? e.value : r.next()
                        }))
                    }, g(h), l(h, r, "Generator"), l(h, n, (function() {
                        return this
                    })), l(h, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var a in e) t.push(a);
                        return t.reverse(),
                            function a() {
                                for (; t.length;) {
                                    var s = t.pop();
                                    if (s in e) return a.value = s, a.done = !1, a
                                }
                                return a.done = !0, a
                            }
                    }, e.values = E, v.prototype = {
                        constructor: v,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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

                            function s(a, s) {
                                return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                            }
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var o = this.tryEntries[n],
                                    r = o.completion;
                                if ("root" === o.tryLoc) return s("end");
                                if (o.tryLoc <= this.prev) {
                                    var l = a.call(o, "catchLoc"),
                                        i = a.call(o, "finallyLoc");
                                    if (l && i) {
                                        if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                    } else {
                                        if (!i) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                var n = this.tryEntries[s];
                                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var o = n;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var r = o ? o.completion : {};
                            return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), _
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.tryLoc === e) {
                                    var s = a.completion;
                                    if ("throw" === s.type) {
                                        var n = s.arg;
                                        C(a)
                                    }
                                    return n
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, a) {
                            return this.delegate = {
                                iterator: E(e),
                                resultName: t,
                                nextLoc: a
                            }, "next" === this.method && (this.arg = void 0), _
                        }
                    }, e
                }

                function L(e, t, a, s, n, o, r) {
                    try {
                        var l = e[o](r),
                            i = l.value
                    } catch (e) {
                        return void a(e)
                    }
                    l.done ? t(i) : Promise.resolve(i).then(s, n)
                }

                function F(e) {
                    return function() {
                        var t = this,
                            a = arguments;
                        return new Promise((function(s, n) {
                            var o = e.apply(t, a);

                            function r(e) {
                                L(o, s, n, r, l, "next", e)
                            }

                            function l(e) {
                                L(o, s, n, r, l, "throw", e)
                            }
                            r(void 0)
                        }))
                    }
                }
                Object(u.addStyles)();
                var D = function(e) {
                        if (e !== document.activeElement)
                            if (e.focus(), void 0 !== window.getSelection && void 0 !== document.createRange) {
                                var t = document.createRange();
                                t.selectNodeContents(e), t.collapse(!1);
                                var a = window.getSelection();
                                a.removeAllRanges(), a.addRange(t)
                            } else if (void 0 !== document.body.createTextRange) {
                            var s = document.body.createTextRange();
                            s.moveToElementText(e), s.collapse(!1), s.select()
                        }
                    },
                    M = function() {
                        var t = F(P().mark((function t(a) {
                            return P().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise(function() {
                                            var t = F(P().mark((function t(s) {
                                                var n;
                                                return P().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!a.id) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return", s(a));
                                                        case 2:
                                                            if (n = {}, !a.file) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            return t.next = 6, new Promise((function(t) {
                                                                var s = new FormData;
                                                                s.append("file", a.file), s.append("tags", ""), s.append("upload_preset", "normal"), s.append("api_key", e.env.CLOUDINARY_API_KEY), s.append("timestamp", parseInt(Date.now() / 1e3, 10)), y.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", s, {
                                                                    headers: {
                                                                        "X-Requested-With": "XMLHttpRequest"
                                                                    },
                                                                    withCredentials: !1
                                                                }).then((function(e) {
                                                                    t({
                                                                        url: e.data.secure_url,
                                                                        id: e.data.public_id
                                                                    })
                                                                })).catch((function() {
                                                                    t({})
                                                                }))
                                                            }));
                                                        case 6:
                                                            n = t.sent, t.next = 10;
                                                            break;
                                                        case 9:
                                                            a.url && (n.url = a.url, n.id = "", a.url.includes("https://images.unsplash.com") && (n.id = "u"));
                                                        case 10:
                                                            s(n);
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    A = function(e) {
                        return new Promise((function(t) {
                            var a = new FileReader;
                            a.onloadend = function() {
                                return t(a.result)
                            }, a.readAsDataURL(e)
                        }))
                    },
                    Q = function() {
                        var t = F(P().mark((function t(a) {
                            return P().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise(function() {
                                            var t = F(P().mark((function t(s) {
                                                var n, o;
                                                return P().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (a && !a.id) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return", s(a || {}));
                                                        case 2:
                                                            if (n = {}, !a.blob) {
                                                                t.next = 10;
                                                                break
                                                            }
                                                            return t.next = 6, A(a.blob);
                                                        case 6:
                                                            return o = t.sent, t.next = 9, new Promise((function(t) {
                                                                var a = new FormData;
                                                                a.append("file", o), a.append("tags", ""), a.append("upload_preset", "to_mp3"), a.append("api_key", e.env.CLOUDINARY_API_KEY), a.append("timestamp", parseInt(Date.now() / 1e3, 10)), y.a.post("https://api.cloudinary.com/v1_1/blooket/upload", a, {
                                                                    headers: {
                                                                        "X-Requested-With": "XMLHttpRequest"
                                                                    },
                                                                    withCredentials: !1
                                                                }).then((function(e) {
                                                                    t({
                                                                        url: e.data.secure_url,
                                                                        id: e.data.public_id
                                                                    })
                                                                })).catch((function() {
                                                                    t({})
                                                                }))
                                                            }));
                                                        case 9:
                                                            n = t.sent;
                                                        case 10:
                                                            s(n);
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    H = function(e) {
                        for (var t = "", a = 0; a < e.childNodes.length; a++) e.childNodes[a].textContent ? t += e.childNodes[a].textContent : t += "\n";
                        return t = t.trim()
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
                            }), t && O(e, t)
                        }(c, e);
                        var t, a, s, o, l, i = j(c);

                        function c(e) {
                            var t;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), t = i.call(this, e);
                            var a = e.question || {},
                                s = [];
                            if (a.correctAnswers)
                                for (var o = 0; o < a.correctAnswers.length; o++) s.push(a.answers.indexOf(a.correctAnswers[o]) + 1);
                            var r = {},
                                l = a.question || "",
                                _ = ["", ""];
                            l.includes("`*`") ? (_[1] = l.slice(l.indexOf("`*`") + 3, l.length - 3), _[0] = l.slice(0, l.indexOf("`*`"))) : _[0] = l, console.log(_[0]), r.question = _[0] ? _[0].replaceAll("\n", "<br>") : "", r.qEq = _[1];
                            for (var m = {}, u = 1; u <= 4; u++) {
                                var f = a.answers && a.answers.length >= u ? a.answers[u - 1] : "",
                                    d = ["", "", {}],
                                    p = f.split("`~`");
                                2 === p.length ? d[2] = {
                                    id: p[0],
                                    url: p[1]
                                } : "`*`" === f.slice(0, 3) ? d[1] = f.slice(3, f.length - 3) : d[0] = f, m["answer".concat(u)] = d[0], m["answer".concat(u, "Eq")] = d[1], m["answer".concat(u, "Img")] = d[2]
                            }
                            return t.state = T(T(T({}, r), {}, {
                                qImg: a.image || {},
                                qAudio: a.audio || null
                            }, m), {}, {
                                equation: "",
                                correctAnswers: s,
                                timeLimit: a.timeLimit || 20,
                                random: void 0 === a.random || a.random,
                                number: a.number,
                                addingImgNum: 0,
                                addingQImg: !1,
                                addingEqNum: 0,
                                addingAudio: !1,
                                symbolTarget: 0,
                                loading: !1,
                                error: {},
                                plusMsg: ""
                            }), t.questionText = n.a.createRef(), t.answer1Text = n.a.createRef(), t.answer2Text = n.a.createRef(), t.answer3Text = n.a.createRef(), t.answer4Text = n.a.createRef(), t.gotPlus = !1, t.plus = !1, t.onKeyPress = t.onKeyPress.bind(q(t)), t.setCorrect = t.setCorrect.bind(q(t)), t.addEquation = t.addEquation.bind(q(t)), t.addAudio = t.addAudio.bind(q(t)), t.addSymbol = t.addSymbol.bind(q(t)), t.save = t.save.bind(q(t)), t
                        }
                        return t = c, (a = [{
                            key: "componentDidMount",
                            value: function() {
                                document.addEventListener("keydown", this.onKeyPress), this.state.question || D(this.questionText.current)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                document.removeEventListener("keydown", this.onKeyPress)
                            }
                        }, {
                            key: "onKeyPress",
                            value: function(e) {
                                this.state.addingImgNum || this.state.addingQImg || this.state.addingAudio || this.state.addingEqNum || this.state.symbolTarget || 13 === e.keyCode && !1 === e.shiftKey && this.save(e)
                            }
                        }, {
                            key: "getIsPlus",
                            value: (l = F(P().mark((function e(t, a) {
                                return P().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.gotPlus) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, new Promise((function(e) {
                                                p.a.put("/api/users/plan").then((function(t) {
                                                    e("Starter" !== t.data.plan)
                                                })).catch((function() {
                                                    e(!1)
                                                }))
                                            }));
                                        case 3:
                                            this.plus = e.sent, this.gotPlus = !0;
                                        case 5:
                                            if (this.plus) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", this.setState({
                                                plusMsg: t
                                            }));
                                        case 7:
                                            a();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return l.apply(this, arguments)
                            })
                        }, {
                            key: "setCorrect",
                            value: function(e) {
                                var t = this.state.error;
                                ("correctAnswers" === t.type || "answer3" === t.type && 3 === e || "answer4" === t.type && 4 === e) && (t = {});
                                var a = E(this.state.correctAnswers),
                                    s = a.indexOf(e); - 1 === s ? a.push(e) : a.splice(s, 1), this.setState({
                                    correctAnswers: a,
                                    error: t
                                })
                            }
                        }, {
                            key: "addEquation",
                            value: function(e) {
                                var t, a = "q";
                                this.state.addingEqNum < 5 && (a = "answer".concat(this.state.addingEqNum)), this.setState((B(t = {}, "".concat(a, "Eq"), e), B(t, "".concat(a, "Img"), {}), B(t, "qAudio", "q" === a ? null : this.state.qAudio), B(t, "addingEqNum", 0), t))
                            }
                        }, {
                            key: "addAudio",
                            value: function(e) {
                                this.setState({
                                    addingAudio: !1,
                                    qAudio: e || this.state.qAudio,
                                    qImg: {},
                                    qEq: ""
                                })
                            }
                        }, {
                            key: "addSymbol",
                            value: function(e) {
                                5 === this.state.symbolTarget ? (this.setState({
                                    question: this.state.question + e
                                }), this.questionText.current.focus()) : (this.setState(B({}, "answer".concat(this.state.symbolTarget), this.state["answer".concat(this.state.symbolTarget)] + e)), this["answer".concat(this.state.symbolTarget, "Text")].current.focus()), this.setState({
                                    symbolTarget: 0
                                })
                            }
                        }, {
                            key: "save",
                            value: (o = F(P().mark((function e(t) {
                                var a, s, n, o, r, l, i, c, _, m, u, f, d, y, h, g = this;
                                return P().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !this.state.loading) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            for (this.setState({
                                                    loading: !0
                                                }), a = "".concat(H(this.questionText.current)).concat(this.state.qEq ? "`*`".concat(this.state.qEq, "`*`") : "").replaceAll("<br>", "\n").replaceAll("&nbsp;", " "), s = [], n = [], o = 0; o < 4; o++) r = this.state["answer".concat(o + 1, "Img")], s.push(r), l = this.state["answer".concat(o + 1, "Eq")], r.url ? n.push("img".concat(o + 1)) : l ? n.push("`*`".concat(l, "`*`")) : n.push(H(this["answer".concat(o + 1, "Text")].current).replaceAll("<br>", "\n").replaceAll("&nbsp;", " "));
                                            if (i = {}, a || (i = {
                                                    msg: "Where's the question?",
                                                    type: "question"
                                                }), this.state.correctAnswers[0] || (i = {
                                                    msg: "Which answer is correct?",
                                                    type: "correctAnswers"
                                                }), n[0] || (i = {
                                                    msg: "Answers 1 and 2 must be filled.",
                                                    type: "answer1"
                                                }), n[1] || (i = {
                                                    msg: "Answers 1 and 2 must be filled.",
                                                    type: "answer2"
                                                }), this.state.correctAnswers.includes(3) && !n[2] && (i = {
                                                    msg: "Answer 3 can't be correct if it doesn't exist.",
                                                    type: "answer3"
                                                }), this.state.correctAnswers.includes(4) && !n[3] && (i = {
                                                    msg: "Answer 4 can't be correct if it doesn't exist.",
                                                    type: "answer4"
                                                }), n[0] === n[1] && (i = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer2"
                                                }), c = [n[0], n[1]], _ = [s[0], s[1]], m = [], this.state.correctAnswers.includes(1) && m.push(c[0]), this.state.correctAnswers.includes(2) && m.push(c[1]), n[2] && (c.includes(n[2]) ? i = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer3"
                                                } : (c.push(n[2]), _.push(s[2]), this.state.correctAnswers.includes(3) && m.push(n[2]))), n[3] && (c.includes(n[3]) ? i = {
                                                    msg: "No duplicate answers.",
                                                    type: "answer4"
                                                } : (c.push(n[3]), _.push(s[3]), this.state.correctAnswers.includes(4) && m.push(n[3]))), this.setState({
                                                    error: i
                                                }), !i.msg) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.abrupt("return", this.setState({
                                                loading: !1
                                            }));
                                        case 26:
                                            return u = [M(this.state.qImg), Q(this.state.qAudio)], c.forEach((function(e, t) {
                                                u.push(M(_[t]))
                                            })), e.next = 30, Promise.all(u);
                                        case 30:
                                            f = e.sent, d = f[0], y = f[1], h = f.slice(2), this.props.isAdding ? p.a.put("/api/games/addquestion", {
                                                gameId: this.props.gameId,
                                                question: a,
                                                answers: c,
                                                correctAnswers: m,
                                                timeLimit: Number(this.state.timeLimit),
                                                random: this.state.random,
                                                image: d,
                                                audio: y,
                                                answerImages: h
                                            }).then((function(e) {
                                                e.data.success ? g.props.onDone(!0) : g.setState({
                                                    error: {
                                                        msg: e.data.msg,
                                                        type: "question"
                                                    },
                                                    loading: !1
                                                })
                                            })).catch((function(e) {
                                                g.setState({
                                                    error: {
                                                        type: "question",
                                                        msg: e.response ? e.response.data : "Something went wrong."
                                                    },
                                                    loading: !1
                                                }), console.error(e)
                                            })) : p.a.put("/api/games/updatequestion", {
                                                number: this.state.number,
                                                gameId: this.props.gameId,
                                                question: a,
                                                answers: c,
                                                correctAnswers: m,
                                                timeLimit: Number(this.state.timeLimit),
                                                random: this.state.random,
                                                image: d,
                                                audio: y,
                                                answerImages: h
                                            }).then((function(e) {
                                                e.data.success ? g.props.onDone(!0) : g.setState({
                                                    error: {
                                                        msg: e.data.msg,
                                                        type: "question"
                                                    },
                                                    loading: !1
                                                })
                                            })).catch((function(e) {
                                                g.setState({
                                                    error: {
                                                        type: "question",
                                                        msg: e.response ? e.response.data : "Something went wrong."
                                                    },
                                                    loading: !1
                                                }), console.error(e)
                                            }));
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "render",
                            value: function() {
                                var e = this;
                                return n.a.createElement("div", {
                                    className: d.a.wrapper
                                }, n.a.createElement("div", {
                                    className: d.a.modal
                                }, n.a.createElement("div", {
                                    className: d.a.mainContainer
                                }, n.a.createElement(m.a, {
                                    place: "bottom",
                                    effect: "solid",
                                    className: d.a.tooltip
                                }), n.a.createElement("div", {
                                    className: d.a.header
                                }, n.a.createElement("div", {
                                    className: d.a.headerRow
                                }, n.a.createElement("div", {
                                    className: d.a.headerContainer,
                                    "data-tip": "The max time a student can spend on a question."
                                }, n.a.createElement("i", {
                                    className: r()("far fa-clock", d.a.headerIcon)
                                }), n.a.createElement("div", {
                                    className: d.a.headerText
                                }, "Time", n.a.createElement("br", null), "Limit"), n.a.createElement("input", {
                                    className: d.a.timeInput,
                                    onChange: function(t) {
                                        return e.setState({
                                            timeLimit: Math.max(0, Math.min(300, Math.floor(t.target.value)))
                                        })
                                    },
                                    type: "number",
                                    value: this.state.timeLimit
                                })), n.a.createElement("div", {
                                    className: d.a.headerContainer,
                                    "data-tip": "When checked, answers will be given in a random order."
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-random", d.a.headerIcon)
                                }), n.a.createElement("div", {
                                    className: d.a.headerText
                                }, "Random", n.a.createElement("br", null), "Order"), n.a.createElement("div", {
                                    className: r()(d.a.randomButton, B({}, d.a.isRandom, this.state.random)),
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            random: !e.state.random
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-check", d.a.randomCheck)
                                })))), n.a.createElement("div", {
                                    className: d.a.headerRow
                                }, n.a.createElement("div", {
                                    className: d.a.cancelButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.props.onDone(!1)
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-times", d.a.cancelIcon)
                                }), n.a.createElement("div", {
                                    className: d.a.cancelText
                                }, "Cancel")), n.a.createElement("div", {
                                    className: d.a.saveButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: this.save
                                }, this.state.loading ? n.a.createElement("i", {
                                    className: r()("fas fa-sync", d.a.loadingIcon)
                                }) : n.a.createElement(n.a.Fragment, null, n.a.createElement("i", {
                                    className: r()("fas fa-save", d.a.saveIcon)
                                }), n.a.createElement("div", {
                                    className: d.a.saveText
                                }, "Save"))))), n.a.createElement("div", {
                                    className: d.a.questionRegularBody
                                }, n.a.createElement("div", {
                                    className: d.a.questionContainer,
                                    style: {
                                        backgroundColor: h.b.default.background
                                    }
                                }, n.a.createElement("div", {
                                    className: d.a.questionLeftContainer
                                }, n.a.createElement("div", {
                                    className: d.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            addingQImg: !0
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-image", d.a.questionIcon)
                                }), "Image"), n.a.createElement("div", {
                                    className: d.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            addingEqNum: 5,
                                            equation: e.state.qEq
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-superscript", d.a.questionIcon)
                                }), "Math"), n.a.createElement("div", {
                                    className: d.a.questionButton,
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.getIsPlus("Record Question Audio", (function() {
                                            return e.setState({
                                                addingAudio: !0
                                            })
                                        }))
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-microphone-alt", d.a.questionIcon)
                                }), "Audio")), this.state.qAudio ? n.a.createElement("div", {
                                    className: d.a.questionImgWrapper
                                }, n.a.createElement(C.a, {
                                    audioUrl: this.state.qAudio.url
                                }), n.a.createElement("div", {
                                    className: d.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qAudio: null
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-trash-alt", d.a.removeQIcon)
                                }), "Remove")) : this.state.qImg.url ? n.a.createElement("div", {
                                    className: d.a.questionImgWrapper
                                }, n.a.createElement("div", {
                                    className: d.a.questionImgContainer
                                }, n.a.createElement("img", {
                                    src: this.state.qImg.url,
                                    alt: "Upload",
                                    className: d.a.img,
                                    draggable: !1
                                })), n.a.createElement("div", {
                                    className: d.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qImg: {}
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-trash-alt", d.a.removeQIcon)
                                }), "Remove")) : this.state.qEq ? n.a.createElement("div", {
                                    className: d.a.questionEqWrapper
                                }, n.a.createElement(u.StaticMathField, {
                                    className: d.a.mathField,
                                    style: {
                                        marginBottom: 5
                                    }
                                }, this.state.qEq), n.a.createElement("div", {
                                    className: d.a.removeQButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            qEq: ""
                                        })
                                    }
                                }, n.a.createElement("i", {
                                    className: r()("fas fa-trash-alt", d.a.removeQIcon)
                                }), "Remove")) : null, n.a.createElement("div", {
                                    className: r()(d.a.questionTextContainer, B({}, d.a.errorBorder, "question" === this.state.error.type)),
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return D(e.questionText.current)
                                    }
                                }, this.state.question ? null : n.a.createElement("div", {
                                    className: d.a.placeholder,
                                    style: {
                                        color: h.b.default.text
                                    }
                                }, "Question Text"), n.a.createElement(_.a, {
                                    className: d.a.questionText,
                                    style: {
                                        color: h.b.default.text
                                    },
                                    onChange: function(t) {
                                        return e.setState({
                                            question: t.target.value,
                                            error: "question" === e.state.error.type ? {} : e.state.error
                                        })
                                    },
                                    html: this.state.question,
                                    innerRef: this.questionText,
                                    "data-gramm_editor": !1
                                }), n.a.createElement("i", {
                                    className: r()(d.a.keyboardIcon, "far fa-keyboard"),
                                    "data-tip": "Show Symbol Keyboard",
                                    role: "button",
                                    tabIndex: -1,
                                    onClick: function() {
                                        return e.setState({
                                            symbolTarget: 5
                                        })
                                    }
                                })), this.state.error.msg ? n.a.createElement("div", {
                                    className: d.a.errorContainer
                                }, this.state.error.msg) : null), n.a.createElement("div", {
                                    className: d.a.answersHolder
                                }, [1, 2, 3, 4].map((function(t) {
                                    return n.a.createElement("div", {
                                        className: d.a.answerWrapper,
                                        key: t
                                    }, n.a.createElement("div", {
                                        className: d.a.answerContainer,
                                        style: {
                                            backgroundColor: h.b.default.answers[t - 1].background
                                        }
                                    }, n.a.createElement("div", {
                                        className: d.a.answerLeftContainer
                                    }, n.a.createElement("div", {
                                        className: r()(d.a.correctButton, B({}, d.a.correctAnswer, e.state.correctAnswers.includes(t))),
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setCorrect(t)
                                        }
                                    }, n.a.createElement("i", {
                                        className: r()("fas fa-check", d.a.correctCheck)
                                    })), n.a.createElement("div", {
                                        className: d.a.answerButtonRow
                                    }, n.a.createElement("div", {
                                        className: d.a.answerIconButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.getIsPlus("Add Answer Images", (function() {
                                                return e.setState({
                                                    addingImgNum: t
                                                })
                                            }))
                                        },
                                        "data-tip": "Add Image"
                                    }, n.a.createElement("i", {
                                        className: r()("fas fa-image", d.a.answerIcon)
                                    })), n.a.createElement("div", {
                                        className: d.a.answerIconButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState({
                                                addingEqNum: t,
                                                equation: e.state["answer".concat(t, "Eq")]
                                            })
                                        },
                                        "data-tip": "Add Math"
                                    }, n.a.createElement("i", {
                                        className: r()("fas fa-superscript", d.a.answerIcon)
                                    })))), e.state["answer".concat(t, "Img")].url ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                        className: d.a.answerImgContainer
                                    }, n.a.createElement("img", {
                                        src: e.state["answer".concat(t, "Img")].url,
                                        alt: "Upload",
                                        className: d.a.img,
                                        draggable: !1
                                    })), n.a.createElement("div", {
                                        className: d.a.removeButton,
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState(B({}, "answer".concat(t, "Img"), {}))
                                        }
                                    }, n.a.createElement("i", {
                                        className: r()("fas fa-trash-alt", d.a.answerIcon)
                                    }))) : e.state["answer".concat(t, "Eq")] ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                        className: d.a.answerImgContainer
                                    }, n.a.createElement(u.StaticMathField, {
                                        className: d.a.mathAnswerField
                                    }, e.state["answer".concat(t, "Eq")])), n.a.createElement("div", {
                                        className: d.a.removeButton,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setState(B({}, "answer".concat(t, "Eq"), ""))
                                        }
                                    }, n.a.createElement("i", {
                                        className: r()("fas fa-trash-alt", d.a.answerIcon)
                                    }))) : n.a.createElement("div", {
                                        className: r()(d.a.answerTextContainer, B({}, d.a.errorBorder, e.state.error.type === "answer".concat(t) || "correctAnswers" === e.state.error.type && [1, 2].includes(t))),
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return D(e["answer".concat(t, "Text")].current)
                                        }
                                    }, e.state["answer".concat(t)] ? null : n.a.createElement("div", {
                                        className: d.a.placeholder,
                                        style: {
                                            color: h.b.default.answers[t - 1].text
                                        }
                                    }, "Answer ".concat(t).concat(t > 2 ? " (Optional)" : "")), n.a.createElement(_.a, {
                                        className: d.a.answerText,
                                        style: {
                                            color: h.b.default.answers[t - 1].text
                                        },
                                        onChange: function(a) {
                                            var s;
                                            return e.setState((B(s = {}, "answer".concat(t), a.target.value), B(s, "error", e.state.error.type === "answer".concat(t) ? {} : e.state.error), s))
                                        },
                                        html: e.state["answer".concat(t)],
                                        innerRef: e["answer".concat(t, "Text")],
                                        "data-gramm_editor": !1
                                    }), n.a.createElement("i", {
                                        className: r()(d.a.keyboardIcon, "far fa-keyboard"),
                                        "data-tip": "Show Symbol Keyboard",
                                        role: "button",
                                        tabIndex: -1,
                                        onClick: function() {
                                            return e.setState({
                                                symbolTarget: t
                                            })
                                        }
                                    }))))
                                })))))), this.state.addingImgNum || this.state.addingQImg ? n.a.createElement(g.a, {
                                    onClose: function() {
                                        return e.setState({
                                            addingImgNum: 0,
                                            addingQImg: !1
                                        })
                                    },
                                    onDone: function(t, a) {
                                        var s;
                                        return e.setState((B(s = {
                                            addingImgNum: 0,
                                            addingQImg: !1
                                        }, e.state.addingQImg ? "qImg" : "answer".concat(e.state.addingImgNum, "Img"), {
                                            url: t,
                                            file: a
                                        }), B(s, "qEq", e.state.addingQImg ? "" : e.state.qEq), B(s, "qAudio", e.state.addingQImg ? null : e.state.qAudio), B(s, "answer".concat(e.state.addingImgNum, "Eq"), e.state.addingQImg ? e.state["answer".concat(e.state.addingImgNum, "Eq")] : ""), s))
                                    }
                                }) : this.state.addingEqNum ? n.a.createElement(x.a, {
                                    equation: this.state.equation,
                                    onDone: this.addEquation,
                                    onClose: function() {
                                        return e.setState({
                                            addingEqNum: 0
                                        })
                                    }
                                }) : this.state.addingAudio ? n.a.createElement(b.a, {
                                    onDone: this.addAudio,
                                    onClose: function() {
                                        return e.setState({
                                            addingAudio: !1
                                        })
                                    }
                                }) : this.state.symbolTarget ? n.a.createElement(w.a, {
                                    select: this.addSymbol
                                }) : this.state.plusMsg ? n.a.createElement(v.a, {
                                    text: "Get Blooket Plus to ".concat(this.state.plusMsg, "!"),
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
                                            return e.setState({
                                                plusMsg: ""
                                            })
                                        },
                                        color: "blue"
                                    }
                                }) : null)
                            }
                        }]) && S(t.prototype, a), s && S(t, s), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(n.a.Component);
                U.propTypes = {
                    onDone: i.a.func.isRequired,
                    question: i.a.object,
                    gameId: i.a.string,
                    isAdding: i.a.bool,
                    history: i.a.object.isRequired
                }, t.a = U
            }).call(this, a("8oxB"))
        },
        Z1o9: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("EDFO"),
                i = [
                    [{
                        text: "+",
                        latex: "+"
                    }, {
                        text: "-",
                        latex: "-"
                    }, {
                        text: "\\cdot",
                        latex: "\\cdot"
                    }, {
                        text: "\\times",
                        latex: "\\times"
                    }, {
                        text: "\\div",
                        latex: "\\div"
                    }, {
                        text: "=",
                        latex: "="
                    }, {
                        text: "\\pm",
                        latex: "\\pm"
                    }, {
                        text: "\\ne",
                        latex: "\\ne"
                    }, {
                        text: "\\pi",
                        latex: "\\pi"
                    }, {
                        text: "∞",
                        latex: "∞"
                    }],
                    [{
                        text: "a^2",
                        latex: "^2"
                    }, {
                        text: "a^b",
                        latex: "^{ }",
                        offset: 1
                    }, {
                        text: "\\frac{a}{b}",
                        latex: "\\frac{ }{ }",
                        offset: 2
                    }, {
                        text: "a_b",
                        latex: "_{ }",
                        offset: 1
                    }, {
                        text: "|a|",
                        latex: "| |",
                        offset: 1
                    }, {
                        text: "\\sqrt{a}",
                        latex: "\\sqrt{ }",
                        offset: 1
                    }, {
                        text: "\\sqrt[b]{a}",
                        latex: "\\sqrt[ ]{ }",
                        offset: 2
                    }, {
                        text: "\\overline{a}",
                        latex: "\\overline{ }",
                        offset: 1
                    }, {
                        text: "\\overleftarrow{ab}",
                        latex: "\\overleftarrow{ }",
                        offset: 1
                    }, {
                        text: "\\overrightarrow{ab}",
                        latex: "\\overrightarrow{ }",
                        offset: 1
                    }, {
                        text: "\\lim _{a \\to b}",
                        latex: "\\lim _{ \\to }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\sum _{b}^{a}",
                        latex: "\\sum _{ }^{ }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\prod _{b}^{a}",
                        latex: "\\prod _{ }^{ }",
                        offset: 2,
                        fontSize: 12
                    }, {
                        text: "\\lceil a\\rceil",
                        latex: "\\lceil { }\\rceil",
                        offset: 1
                    }, {
                        text: "\\lfloor a\\rfloor",
                        latex: "\\lfloor { }\\rfloor",
                        offset: 1
                    }, {
                        text: "\\ln a",
                        latex: "\\ln { }"
                    }, {
                        text: "\\log _ba",
                        latex: "\\log _{ }{ }",
                        offset: 1,
                        fontSize: 14
                    }, {
                        text: "\\int _b^a",
                        latex: "\\int _{ }^{ }",
                        offset: 2,
                        fontSize: 14
                    }],
                    [{
                        text: "<",
                        latex: "<"
                    }, {
                        text: ">",
                        latex: ">"
                    }, {
                        text: "∠",
                        latex: "∠"
                    }, {
                        text: "\\degree",
                        latex: "\\degree"
                    }, {
                        text: "\\circ",
                        latex: "\\circ"
                    }, {
                        text: "\\le",
                        latex: "\\le"
                    }, {
                        text: "\\ge",
                        latex: "\\ge"
                    }, {
                        text: "⊥",
                        latex: "⊥"
                    }, {
                        text: "\\parallel",
                        latex: "\\parallel"
                    }, {
                        text: "⇐",
                        latex: "⇐"
                    }, {
                        text: "⇒",
                        latex: "⇒"
                    }, {
                        text: "⇔",
                        latex: "⇔"
                    }, {
                        text: "~",
                        latex: "~"
                    }, {
                        text: "\\approx",
                        latex: "\\approx"
                    }, {
                        text: "\\cong",
                        latex: "\\cong"
                    }, {
                        text: "←",
                        latex: "←"
                    }, {
                        text: "→",
                        latex: "→"
                    }, {
                        text: "↔",
                        latex: "↔"
                    }],
                    [{
                        text: "ℕ",
                        latex: "ℕ"
                    }, {
                        text: "ℤ",
                        latex: "ℤ"
                    }, {
                        text: "ℚ",
                        latex: "ℚ"
                    }, {
                        text: "ℝ",
                        latex: "ℝ"
                    }, {
                        text: "ℂ",
                        latex: "ℂ"
                    }, {
                        text: "∀",
                        latex: "∀"
                    }, {
                        text: "∃",
                        latex: "∃"
                    }, {
                        text: "∈",
                        latex: "∈"
                    }, {
                        text: "∉",
                        latex: "∉"
                    }, {
                        text: "∅",
                        latex: "∅"
                    }, {
                        text: "∧",
                        latex: "∧"
                    }, {
                        text: "∨",
                        latex: "∨"
                    }, {
                        text: "⊂",
                        latex: "⊂"
                    }, {
                        text: "⊄",
                        latex: "⊄"
                    }, {
                        text: "∩",
                        latex: "∩"
                    }, {
                        text: "∪",
                        latex: "∪"
                    }, {
                        text: "⊆",
                        latex: "⊆"
                    }, {
                        text: "⊈",
                        latex: "⊈"
                    }],
                    [{
                        text: "Α",
                        latex: "Α"
                    }, {
                        text: "Β",
                        latex: "Β"
                    }, {
                        text: "Γ",
                        latex: "Γ"
                    }, {
                        text: "Δ",
                        latex: "Δ"
                    }, {
                        text: "Ε",
                        latex: "Ε"
                    }, {
                        text: "Ζ",
                        latex: "Ζ"
                    }, {
                        text: "Η",
                        latex: "Η"
                    }, {
                        text: "Θ",
                        latex: "Θ"
                    }, {
                        text: "Ι",
                        latex: "Ι"
                    }, {
                        text: "Κ",
                        latex: "Κ"
                    }, {
                        text: "Λ",
                        latex: "Λ"
                    }, {
                        text: "Μ",
                        latex: "Μ"
                    }, {
                        text: "Ν",
                        latex: "Ν"
                    }, {
                        text: "Ξ",
                        latex: "Ξ"
                    }, {
                        text: "Ο",
                        latex: "Ο"
                    }, {
                        text: "Π",
                        latex: "Π"
                    }, {
                        text: "Ρ",
                        latex: "Ρ"
                    }, {
                        text: "Σ",
                        latex: "Σ"
                    }, {
                        text: "Τ",
                        latex: "Τ"
                    }, {
                        text: "Υ",
                        latex: "Υ"
                    }, {
                        text: "Φ",
                        latex: "Φ"
                    }, {
                        text: "Χ",
                        latex: "Χ"
                    }, {
                        text: "Ψ",
                        latex: "Ψ"
                    }, {
                        text: "Ω",
                        latex: "Ω"
                    }, {
                        text: "∇",
                        latex: "∇"
                    }],
                    [{
                        text: "α",
                        latex: "α"
                    }, {
                        text: "β",
                        latex: "β"
                    }, {
                        text: "γ",
                        latex: "γ"
                    }, {
                        text: "δ",
                        latex: "δ"
                    }, {
                        text: "ε",
                        latex: "ε"
                    }, {
                        text: "ζ",
                        latex: "ζ"
                    }, {
                        text: "η",
                        latex: "η"
                    }, {
                        text: "θ",
                        latex: "θ"
                    }, {
                        text: "ι",
                        latex: "ι"
                    }, {
                        text: "κ",
                        latex: "κ"
                    }, {
                        text: "λ",
                        latex: "λ"
                    }, {
                        text: "μ",
                        latex: "μ"
                    }, {
                        text: "ν",
                        latex: "ν"
                    }, {
                        text: "ξ",
                        latex: "ξ"
                    }, {
                        text: "ο",
                        latex: "ο"
                    }, {
                        text: "\\pi",
                        latex: "\\pi"
                    }, {
                        text: "ρ",
                        latex: "ρ"
                    }, {
                        text: "ς",
                        latex: "ς"
                    }, {
                        text: "σ",
                        latex: "σ"
                    }, {
                        text: "τ",
                        latex: "τ"
                    }, {
                        text: "υ",
                        latex: "υ"
                    }, {
                        text: "φ",
                        latex: "φ"
                    }, {
                        text: "χ",
                        latex: "χ"
                    }, {
                        text: "ψ",
                        latex: "ψ"
                    }, {
                        text: "ω",
                        latex: "ω"
                    }, {
                        text: "∂",
                        latex: "∂"
                    }, {
                        text: "ϵ",
                        latex: "ϵ"
                    }, {
                        text: "ϑ",
                        latex: "ϑ"
                    }, {
                        text: "ϰ",
                        latex: "ϰ"
                    }, {
                        text: "ɸ",
                        latex: "ɸ"
                    }, {
                        text: "ϱ",
                        latex: "ϱ"
                    }]
                ],
                c = a("rI6f"),
                _ = a.n(c);

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = h(e);
                    if (t) {
                        var n = h(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return y(e)
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(l.addStyles)();
            var g = function(e) {
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
                    }), t && f(e, t)
                }(r, e);
                var t, a, s, o = d(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        latex: e.equation || ""
                    }, t.mathField = null, t.onKeyPress = t.onKeyPress.bind(y(t)), t.addLatex = t.addLatex.bind(y(t)), t.submitLatex = t.submitLatex.bind(y(t)), t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("keypress", this.onKeyPress)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("keypress", this.onKeyPress)
                    }
                }, {
                    key: "onKeyPress",
                    value: function(e) {
                        13 === (e || window.event).keyCode && this.submitLatex()
                    }
                }, {
                    key: "addLatex",
                    value: function(e) {
                        this.mathField.write(e.latex), this.mathField.focus();
                        for (var t = 0; t < e.offset; t++) this.mathField.keystroke("Left")
                    }
                }, {
                    key: "submitLatex",
                    value: function(e) {
                        e && e.preventDefault(), this.props.onDone(this.state.latex)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: _.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        }), n.a.createElement("div", {
                            className: _.a.mainContainer
                        }, n.a.createElement("div", {
                            className: _.a.header
                        }, "Equation Editor"), n.a.createElement("form", {
                            onSubmit: this.submitLatex,
                            className: _.a.topRow
                        }, n.a.createElement("div", {
                            className: _.a.mathInputWrapper
                        }, n.a.createElement(l.EditableMathField, {
                            latex: this.state.latex,
                            onChange: function(t) {
                                e.setState({
                                    latex: t.latex()
                                })
                            },
                            mathquillDidMount: function(t) {
                                e.mathField = t, e.mathField.focus()
                            },
                            className: _.a.mathInput
                        })), n.a.createElement("div", {
                            className: _.a.insertButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.submitLatex
                        }, "Insert")), n.a.createElement("div", {
                            className: _.a.bottomWrapper
                        }, n.a.createElement("div", {
                            className: _.a.buttonRow
                        }, n.a.createElement("div", {
                            className: _.a.importantButtons
                        }, i[0].map((function(t, a) {
                            return n.a.createElement("div", {
                                key: a,
                                className: _.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.addLatex(t)
                                }
                            }, n.a.createElement(l.StaticMathField, {
                                className: _.a.mathField,
                                style: {
                                    fontSize: t.fontSize
                                }
                            }, t.text))
                        })))), n.a.createElement("div", {
                            style: {
                                height: 10
                            }
                        }), n.a.createElement("div", {
                            className: _.a.buttonRow
                        }, i.slice(1, 4).map((function(t, a) {
                            return n.a.createElement("div", {
                                className: _.a.topButtons,
                                key: a
                            }, t.map((function(t, a) {
                                return n.a.createElement("div", {
                                    key: a,
                                    className: _.a.button,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.addLatex(t)
                                    }
                                }, n.a.createElement(l.StaticMathField, {
                                    className: _.a.mathField,
                                    style: {
                                        fontSize: t.fontSize
                                    }
                                }, t.text))
                            })))
                        }))), n.a.createElement("div", {
                            style: {
                                height: 15
                            }
                        }), n.a.createElement("div", {
                            className: _.a.buttonRow
                        }, i.slice(4).map((function(t, a) {
                            return n.a.createElement("div", {
                                className: _.a.bottomButtons,
                                key: a
                            }, t.map((function(t, a) {
                                return n.a.createElement("div", {
                                    key: a,
                                    className: _.a.button,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.addLatex(t)
                                    }
                                }, n.a.createElement(l.StaticMathField, {
                                    className: _.a.mathField,
                                    style: {
                                        fontSize: t.fontSize
                                    }
                                }, t.text))
                            })))
                        }))))))
                    }
                }]) && u(t.prototype, a), s && u(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            g.propTypes = {
                equation: r.a.string,
                onDone: r.a.func.isRequired,
                onClose: r.a.func.isRequired
            };
            t.a = g
        },
        ZRb8: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___16a0f-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___2y5Yx-camelCase{position:absolute;top:calc(50% + 100px);left:50%;transform:translate(-50%,-50%);width:90%;max-width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden}.styles__header___1Wk6X-camelCase{position:absolute;top:0;left:0;width:100%;height:50px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__text___2a02P-camelCase{text-align:center;width:95%;margin:65px auto 5px;font-size:22px}.styles__audioRow___3YY7Y-camelCase{margin:10px 0;width:100%;position:relative;height:104px}.styles__audioWrapper___1TJ_0-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:200px;height:100px;margin:0 auto;overflow:hidden}.styles__timer___1sggT-camelCase{position:absolute;font-size:18px;width:60px;text-align:center;top:50%;right:20px;transform:translateY(-50%)}.styles__buttonRow___FFEHZ-camelCase{flex-flow:row wrap;width:90%;margin:10px 5%}.styles__buttonRow___FFEHZ-camelCase,.styles__iconButton___35SDU-camelCase{display:flex;align-items:center;justify-content:center}.styles__iconButton___35SDU-camelCase{width:45px;height:45px;font-size:20px;color:#fff;background-color:#3378ff;border-radius:5px;margin:5px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__iconButton___35SDU-camelCase:focus,.styles__iconButton___35SDU-camelCase:hover{background-color:#004de6}.styles__audio___1u7Ra-camelCase{margin:0 auto}.styles__insertButton___2ifT4-camelCase{border-radius:5px;width:90px;height:35px;font-size:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:10px auto 20px;color:#fff;background-color:#3378ff;transition:.2s}.styles__insertButton___2ifT4-camelCase:focus,.styles__insertButton___2ifT4-camelCase:hover{background-color:#004de6}.styles__errorContainer___1kSq1-camelCase{border:2px solid #ce1313;border-radius:4px;width:90%;padding:5px 10px;box-sizing:border-box;margin:0 auto 15px;display:flex;flex-direction:row;align-items:center}.styles__errorIcon___2ZURM-camelCase{font-size:16px;color:#ce1313;margin-right:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___1DCmd-camelCase{font-size:14px}", ""]), t.locals = {
                modal: "styles__modal___16a0f-camelCase",
                mainContainer: "styles__mainContainer___2y5Yx-camelCase",
                header: "styles__header___1Wk6X-camelCase",
                text: "styles__text___2a02P-camelCase",
                audioRow: "styles__audioRow___3YY7Y-camelCase",
                audioWrapper: "styles__audioWrapper___1TJ_0-camelCase",
                timer: "styles__timer___1sggT-camelCase",
                buttonRow: "styles__buttonRow___FFEHZ-camelCase",
                iconButton: "styles__iconButton___35SDU-camelCase",
                audio: "styles__audio___1u7Ra-camelCase",
                insertButton: "styles__insertButton___2ifT4-camelCase",
                errorContainer: "styles__errorContainer___1kSq1-camelCase",
                errorIcon: "styles__errorIcon___2ZURM-camelCase",
                errorText: "styles__errorText___1DCmd-camelCase"
            }
        },
        ZVxu: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("TSYQ"),
                r = a.n(o),
                l = a("55Ip"),
                i = a("17x9"),
                c = a.n(i),
                _ = a("H1WH"),
                m = a("JeI0"),
                u = a.n(m),
                f = a("wd/R"),
                d = a.n(f),
                p = a("EDFO"),
                y = a("Xst1"),
                h = a.n(y),
                g = a("kb5n"),
                x = a.n(g),
                b = a("XOuL"),
                w = a("0oXL"),
                C = a("vCpj"),
                v = a("FVRk"),
                k = a("qnYv"),
                E = a("74sb");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    n = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    r = s.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function i(e, t, a, s) {
                    var n = t && t.prototype instanceof m ? t : m,
                        o = Object.create(n.prototype),
                        r = new v(s || []);
                    return o._invoke = function(e, t, a) {
                        var s = "suspendedStart";
                        return function(n, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === n) throw o;
                                return E()
                            }
                            for (a.method = n, a.arg = o;;) {
                                var r = a.delegate;
                                if (r) {
                                    var l = b(r, a);
                                    if (l) {
                                        if (l === _) continue;
                                        return l
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === s) throw s = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                s = "executing";
                                var i = c(e, t, a);
                                if ("normal" === i.type) {
                                    if (s = a.done ? "completed" : "suspendedYield", i.arg === _) continue;
                                    return {
                                        value: i.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === i.type && (s = "completed", a.method = "throw", a.arg = i.arg)
                            }
                        }
                    }(e, a, r), o
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
                e.wrap = i;
                var _ = {};

                function m() {}

                function u() {}

                function f() {}
                var d = {};
                l(d, n, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    y = p && p(p(k([])));
                y && y !== t && a.call(y, n) && (d = y);
                var h = f.prototype = m.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var s;
                    this._invoke = function(n, o) {
                        function r() {
                            return new t((function(s, r) {
                                ! function s(n, o, r, l) {
                                    var i = c(e[n], e, o);
                                    if ("throw" !== i.type) {
                                        var _ = i.arg,
                                            m = _.value;
                                        return m && "object" == N(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                                            s("next", e, r, l)
                                        }), (function(e) {
                                            s("throw", e, r, l)
                                        })) : t.resolve(m).then((function(e) {
                                            _.value = e, r(_)
                                        }), (function(e) {
                                            return s("throw", e, r, l)
                                        }))
                                    }
                                    l(i.arg)
                                }(n, o, s, r)
                            }))
                        }
                        return s = s ? s.then(r, r) : r()
                    }
                }

                function b(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var s = c(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                    var n = s.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function v(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[n];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return u.prototype = f, l(h, "constructor", f), l(f, "constructor", u), u.displayName = l(f, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, r, "GeneratorFunction")), e.prototype = Object.create(h), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(x.prototype), l(x.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, a, s, n, o) {
                    void 0 === o && (o = Promise);
                    var r = new x(i(t, a, s, n), o);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, g(h), l(h, r, "Generator"), l(h, n, (function() {
                    return this
                })), l(h, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return a.value = s, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, v.prototype = {
                    constructor: v,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
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

                        function s(a, s) {
                            return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var l = a.call(o, "catchLoc"),
                                    i = a.call(o, "finallyLoc");
                                if (l && i) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!i) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), _
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    C(a)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), _
                    }
                }, e
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return S(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function O(e, t, a, s, n, o, r) {
                try {
                    var l = e[o](r),
                        i = l.value
                } catch (e) {
                    return void a(e)
                }
                l.done ? t(i) : Promise.resolve(i).then(s, n)
            }

            function j(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function z(e, t) {
                return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = L(e);
                    if (t) {
                        var n = L(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return R(this, a)
                }
            }

            function R(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return P(e)
            }

            function P(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(p.addStyles)();
            var F = function(e) {
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
                }(m, e);
                var t, a, s, o, i, c = q(m);

                function m(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), (t = c.call(this, e)).state = {
                        searchQuery: "",
                        searched: !1,
                        hits: [],
                        hasMore: !1,
                        pageIndex: 0,
                        minQuestions: 1,
                        hasCoverImage: !1,
                        minPlays: 10,
                        setSelected: null,
                        zoomedImage: "",
                        addingNum: 0,
                        addedNums: [],
                        isClosing: !1,
                        hasPlus: !1
                    }, t.loading = !1, t.setsContainer = n.a.createRef(), t.questionsContainer = n.a.createRef(), t.onSearch = t.onSearch.bind(P(t)), t.getSet = t.getSet.bind(P(t)), t.addQuestion = t.addQuestion.bind(P(t)), t.close = t.close.bind(P(t)), t
                }
                return t = m, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        k.a.put("/api/users/plan").then((function(t) {
                            e.setState({
                                hasPlus: "Starter" !== t.data.plan
                            })
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.closeTimeout)
                    }
                }, {
                    key: "onSearch",
                    value: function(e, t) {
                        var a = this;
                        if (e && e.preventDefault(), !this.loading) {
                            this.loading = !0;
                            var s = t;
                            s || (s = 0), k.a.get("/api/games/search", {
                                params: {
                                    text: this.state.searchQuery,
                                    page: s,
                                    minQuestions: this.state.minQuestions,
                                    hasCoverImage: this.state.hasCoverImage,
                                    minPlays: this.state.minPlays
                                }
                            }).then((function(e) {
                                a.loading = !1;
                                var t = e.data;
                                if (0 === s) {
                                    var n = {
                                        searched: !0,
                                        hits: t,
                                        hasMore: 24 === t.length,
                                        pageIndex: s,
                                        setSelected: null
                                    };
                                    a.setState(n, (function() {
                                        a.setsContainer && a.setsContainer.current && (a.setsContainer.current.scrollTop = 0, a.setsContainer.current.scrollLeft = 0)
                                    }))
                                } else a.setState({
                                    hits: a.state.hits.concat(t),
                                    hasMore: 24 === t.length,
                                    pageIndex: s
                                })
                            })).catch((function(e) {
                                a.loading = !1, console.error(e)
                            }))
                        }
                    }
                }, {
                    key: "getSet",
                    value: function(e) {
                        var t = this;
                        k.a.get("/api/games", {
                            params: {
                                gameId: e._id
                            }
                        }).then((function(e) {
                            var a = e.data;
                            a.questions.sort((function(e, t) {
                                return e.number - t.number
                            })), t.setState({
                                setSelected: a,
                                addedNums: []
                            }, (function() {
                                t.questionsContainer && t.questionsContainer.current && (t.questionsContainer.current.scrollTop = 0)
                            }))
                        }))
                    }
                }, {
                    key: "addQuestion",
                    value: (o = T().mark((function e(t) {
                        var a = this;
                        return T().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.state.addingNum) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.setState({
                                        addingNum: t.number
                                    }), e.next = 5, new Promise((function(e) {
                                        return a.props.onAdd(t, e)
                                    }));
                                case 5:
                                    this.setState({
                                        addedNums: [].concat(B(this.state.addedNums), [t.number]),
                                        addingNum: 0
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, s) {
                            var n = o.apply(e, t);

                            function r(e) {
                                O(n, a, s, r, l, "next", e)
                            }

                            function l(e) {
                                O(n, a, s, r, l, "throw", e)
                            }
                            r(void 0)
                        }))
                    }, function(e) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        this.setState({
                            isClosing: !0
                        }), this.closeTimeout = setTimeout((function() {
                            e.props.onClose()
                        }), 200)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: x.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.close
                        }), n.a.createElement("div", {
                            className: r()(x.a.mainContainer, I({}, x.a.slideOut, this.state.isClosing))
                        }, n.a.createElement("i", {
                            className: r()(x.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.close
                        }), n.a.createElement("div", {
                            className: x.a.top
                        }, n.a.createElement("form", {
                            onSubmit: this.onSearch,
                            className: x.a.searchContainer
                        }, n.a.createElement("input", {
                            className: x.a.searchInput,
                            type: "search",
                            value: this.state.searchQuery,
                            onChange: function(t) {
                                return e.setState({
                                    searchQuery: t.target.value.slice(0, 50)
                                })
                            },
                            placeholder: "Search for a Set...",
                            autoFocus: _.isMobile ? "" : "autofocus"
                        }), n.a.createElement("i", {
                            className: r()(x.a.searchIcon, "fas fa-search"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.onSearch
                        })), this.state.searched && this.state.searchQuery ? n.a.createElement("div", {
                            className: x.a.filtersHolder
                        }, n.a.createElement("i", {
                            className: r()(x.a.filterIcon, "fas fa-sliders-h")
                        }), n.a.createElement("div", {
                            className: x.a.filtersColumn
                        }, n.a.createElement("div", {
                            className: x.a.filterRow,
                            style: {
                                alignItems: "center"
                            }
                        }, "Has Cover Image:", n.a.createElement("div", {
                            className: r()(x.a.checkBox, this.state.hasCoverImage ? x.a.checkYes : x.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            style: {
                                marginLeft: "auto"
                            },
                            onClick: function() {
                                return e.setState({
                                    hasCoverImage: !e.state.hasCoverImage
                                }, (function(t) {
                                    return e.onSearch(t, 0)
                                }))
                            }
                        }, n.a.createElement("i", {
                            className: r()(x.a.checkIcon, "fas fa-check")
                        }))), n.a.createElement("div", {
                            className: x.a.filterRow,
                            style: {
                                flexDirection: "column"
                            }
                        }, "Minimum Questions:", n.a.createElement("div", {
                            className: x.a.filters
                        }, [1, 5, 10, 25, 50].map((function(t) {
                            return n.a.createElement("div", {
                                className: r()(x.a.checkBox, e.state.minQuestions === t ? x.a.checkYes : x.a.checkNo),
                                role: "button",
                                tabIndex: 0,
                                key: t,
                                onClick: function() {
                                    return e.setState({
                                        minQuestions: t
                                    }, (function(t) {
                                        return e.onSearch(t, 0)
                                    }))
                                }
                            }, n.a.createElement("div", {
                                className: x.a.checkIcon
                            }, t))
                        })))), n.a.createElement("div", {
                            className: x.a.filterRow,
                            style: {
                                flexDirection: "column"
                            }
                        }, "Minimum Plays:", n.a.createElement("div", {
                            className: x.a.filters
                        }, [10, 100, 500, 1e3].map((function(t) {
                            return n.a.createElement("div", {
                                className: r()(x.a.checkBox, e.state.minPlays === t ? x.a.checkYes : x.a.checkNo),
                                role: "button",
                                tabIndex: 0,
                                key: t,
                                style: {
                                    width: 30
                                },
                                onClick: function() {
                                    return e.setState({
                                        minPlays: t
                                    }, (function(t) {
                                        return e.onSearch(t, 0)
                                    }))
                                }
                            }, n.a.createElement("div", {
                                className: x.a.checkIcon
                            }, Object(E.v)(t)))
                        })))))) : null), n.a.createElement("div", {
                            className: x.a.left
                        }, this.state.loading ? n.a.createElement("div", {
                            className: x.a.nothingContainer
                        }, n.a.createElement(b.a, null)) : this.state.searched ? 0 === this.state.hits.length ? n.a.createElement("div", {
                            className: x.a.nothingContainer
                        }, n.a.createElement(w.a, {
                            name: "Blobfish",
                            className: x.a.nothingBlook
                        }), "No Results") : n.a.createElement("div", {
                            className: x.a.hitsHolder,
                            ref: this.setsContainer
                        }, this.state.hits.map((function(t) {
                            return n.a.createElement("div", {
                                className: x.a.hitContainer,
                                key: t._id,
                                style: {
                                    borderColor: e.state.setSelected && e.state.setSelected._id === t._id ? "#0bc2cf" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.getSet(t)
                                }
                            }, n.a.createElement("div", {
                                className: x.a.hitImageContainer,
                                style: {
                                    backgroundColor: t.coverImage ? "#333" : "#0bc2cf"
                                }
                            }, t.coverImage ? n.a.createElement(u.a, {
                                height: 100
                            }, n.a.createElement("img", {
                                src: Object(E.g)(t.coverImage.url),
                                alt: "Cover",
                                className: x.a.coverImage,
                                draggable: !1
                            })) : n.a.createElement("div", {
                                className: x.a.setFillerText
                            }, "Blooket"), n.a.createElement("div", {
                                className: x.a.setQuestionsText
                            }, "".concat(Object(E.o)(t.questions.length), " Qs"))), n.a.createElement("div", {
                                className: x.a.hitRight
                            }, n.a.createElement("div", {
                                className: x.a.setHeader
                            }, t.title), n.a.createElement("div", {
                                className: x.a.setSpacer
                            }), n.a.createElement("div", {
                                className: x.a.setPlays
                            }, "".concat(Object(E.o)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays"), t.verified ? n.a.createElement("i", {
                                className: r()("fas fa-check-square", x.a.verifiedIcon)
                            }) : null), n.a.createElement("div", {
                                className: r()(x.a.setDescText, x.a.setEditedText)
                            }, "Edited ".concat(d()(t.date).fromNow())), n.a.createElement("div", {
                                className: x.a.setAuthorContainer
                            }, n.a.createElement("i", {
                                className: r()(x.a.authorIcon, "fas fa-user")
                            }), n.a.createElement("div", {
                                className: x.a.setDescText
                            }, t.author))))
                        })), this.state.hasMore > 0 && !this.state.loading ? n.a.createElement("div", {
                            className: x.a.showMoreButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function(t) {
                                return e.onSearch(t, e.state.pageIndex + 1)
                            }
                        }, "Show More") : null) : n.a.createElement("div", {
                            className: x.a.nothingContainer
                        }, n.a.createElement(w.a, {
                            name: "Chameleon",
                            className: x.a.nothingBlook
                        }), "Waiting to Search")), n.a.createElement("div", {
                            className: x.a.right
                        }, this.state.setSelected ? n.a.createElement("div", {
                            className: x.a.questionsHolder,
                            ref: this.questionsContainer
                        }, this.state.setSelected.questions.map((function(t) {
                            return n.a.createElement("div", {
                                key: t.number,
                                className: x.a.questionSection
                            }, n.a.createElement("div", {
                                className: x.a.questionContainer
                            }, n.a.createElement("div", {
                                className: x.a.questionImageContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: !t.image || !t.image.url || t.audio && t.audio.url ? function() {} : function() {
                                    return e.setState({
                                        zoomedImage: t.image.url
                                    })
                                },
                                style: {
                                    cursor: !t.image || !t.image.url || t.audio && t.audio.url ? "default" : "cursor",
                                    backgroundColor: !t.image || !t.image.url || t.audio && t.audio.url ? "#0bc2cf" : "#333333"
                                }
                            }, !t.image || !t.image.url || t.audio && t.audio.url ? null : _.isMobile ? n.a.createElement("img", {
                                src: Object(E.g)(t.image.url),
                                alt: "Question Background",
                                className: x.a.questionImage
                            }) : n.a.createElement(u.a, {
                                height: 130,
                                width: 170
                            }, n.a.createElement("img", {
                                src: Object(E.g)(t.image.url),
                                alt: "Question Background",
                                className: x.a.questionImage
                            })), n.a.createElement("div", {
                                className: x.a.imageNumber
                            }, t.number)), t.audio && t.audio.url ? n.a.createElement("div", {
                                className: x.a.questionFunc
                            }, n.a.createElement(C.a, {
                                audioUrl: t.audio.url,
                                width: "40%"
                            })) : t.question.includes("`*`") ? n.a.createElement("div", {
                                className: x.a.questionFunc
                            }, n.a.createElement(p.StaticMathField, {
                                className: x.a.qMathField
                            }, t.question.slice(t.question.indexOf("`*`") + 3, t.question.length - 3))) : null, n.a.createElement("div", {
                                className: r()(x.a.questionCenterContainer, I({}, x.a.questionWithFunc, t.question.includes("`*`") || t.audio && t.audio.url))
                            }, n.a.createElement("div", {
                                className: x.a.questionText
                            }, t.question.includes("`*`") ? t.question.slice(0, t.question.indexOf("`*`")) : t.question)), e.state.addingNum === t.number ? n.a.createElement("div", {
                                className: x.a.addedContainer
                            }, n.a.createElement(b.a, null)) : e.state.addedNums.includes(t.number) ? n.a.createElement("div", {
                                className: x.a.addedContainer
                            }, "Added!") : (t.audio && t.audio.url || t.answers.join("").includes("`~`")) && !e.state.hasPlus ? n.a.createElement(l.b, {
                                to: "/upgrade",
                                className: x.a.addQuestionButton,
                                style: {
                                    backgroundColor: "#ff7b24"
                                }
                            }, n.a.createElement("i", {
                                className: r()("fas fa-plus-square", x.a.addIcon)
                            }), "Plus Required") : n.a.createElement("div", {
                                className: x.a.addQuestionButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.addQuestion(t)
                                }
                            }, n.a.createElement("i", {
                                className: r()("fas fa-plus-square", x.a.addIcon)
                            }), "Add Question")), n.a.createElement("div", {
                                className: x.a.answerContainer
                            }, t.answers.map((function(e, a) {
                                return 2 === e.split("`~`").length ? n.a.createElement("div", {
                                    className: r()(x.a.answerImgContainer, I({}, x.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: v.b.default.answers[a].background
                                    },
                                    key: e
                                }, n.a.createElement("img", {
                                    src: Object(E.g)(e.split("`~`")[1]),
                                    alt: "Answer",
                                    className: x.a.answerImg,
                                    draggable: !1
                                })) : "`*`" === e.slice(0, 3) ? n.a.createElement("div", {
                                    className: r()(x.a.answerImgContainer, I({}, x.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: v.b.default.answers[a].background
                                    },
                                    key: e
                                }, n.a.createElement(p.StaticMathField, {
                                    className: x.a.mathField
                                }, e.slice(3, e.length - 3))) : n.a.createElement("div", {
                                    className: r()(x.a.answer, I({}, x.a.faded, !t.correctAnswers.includes(e))),
                                    style: {
                                        backgroundColor: v.b.default.answers[a].background
                                    },
                                    key: e
                                }, n.a.createElement("div", {
                                    className: x.a.answerText
                                }, e))
                            }))))
                        }))) : n.a.createElement("div", {
                            className: x.a.nothingContainer
                        }, "Select a set to view it here"))), this.state.zoomedImage ? n.a.createElement("div", {
                            className: r()(h.a.modal, h.a.modalButton),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    zoomedImage: ""
                                })
                            }
                        }, n.a.createElement("img", {
                            src: Object(E.g)(this.state.zoomedImage, !0),
                            alt: "Upload",
                            className: h.a.bigImage,
                            draggable: !1
                        })) : null)
                    }
                }]) && j(t.prototype, a), s && j(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), m
            }(n.a.Component);
            F.propTypes = {
                onAdd: c.a.func.isRequired,
                onClose: c.a.func.isRequired
            }, t.a = F
        },
        ZXaF: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2nvjP-camelCase{position:absolute;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__mainContainer___1RAiv-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:650px;height:800px;max-height:90%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;z-index:16;overflow:hidden;flex-direction:column}.styles__header___1U0IH-camelCase,.styles__mainContainer___1RAiv-camelCase{position:absolute;display:flex}.styles__header___1U0IH-camelCase{top:0;left:0;width:100%;height:50px;flex-direction:row;align-items:center;justify-content:center;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;font-size:24px}.styles__topRow___2VUb9-camelCase{margin:70px auto 10px;justify-content:space-between;width:90%}.styles__mathInputWrapper___323bt-camelCase,.styles__topRow___2VUb9-camelCase{display:flex;flex-direction:row;align-items:center}.styles__mathInputWrapper___323bt-camelCase{width:calc(100% - 110px);min-height:70px;padding:5px 10px;box-sizing:border-box;border:2px solid rgba(0,0,0,.17)!important;border-radius:5px!important;text-align:left}.styles__mathInputWrapper___323bt-camelCase[focus-within]{border-color:#3378ff!important}.styles__mathInputWrapper___323bt-camelCase:focus-within{border-color:#3378ff!important}.styles__mathInput___3a-iu-camelCase{box-shadow:none!important;border:none!important;width:100%}.styles__insertButton___1oyLR-camelCase,.styles__mathInput___3a-iu-camelCase{font-size:18px;outline:none}.styles__insertButton___1oyLR-camelCase{border-radius:5px;width:90px;height:35px;display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;background-color:#3378ff;transition:.2s}.styles__insertButton___1oyLR-camelCase:focus,.styles__insertButton___1oyLR-camelCase:hover{background-color:#004de6}.styles__bottomWrapper___2aAol-camelCase{margin:10px auto 15px;width:calc(95% - 20px);padding:0 10px;flex-grow:1;overflow-y:auto}.styles__button___1sh0e-camelCase{border:1px solid rgba(0,0,0,.4);border-radius:3px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:transparent}.styles__button___1sh0e-camelCase:hover{background-color:rgba(0,0,0,.1)}.styles__mathField____d8YC-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer!important;color:#3a3a3a;border-color:#3a3a3a}.styles__buttonRow___LbqX8-camelCase{display:flex;flex-flow:row wrap;justify-content:space-between;margin:5px 0;width:100%}.styles__bottomButtons___1Nkoy-camelCase,.styles__importantButtons___WH7-H-camelCase,.styles__topButtons___2ETH_-camelCase{width:100%;display:grid;justify-content:center;align-content:flex-start;grid-template-columns:repeat(auto-fill,50px);grid-gap:8px}.styles__topButtons___2ETH_-camelCase{width:30%}.styles__bottomButtons___1Nkoy-camelCase{width:49%}", ""]), t.locals = {
                modal: "styles__modal___2nvjP-camelCase",
                mainContainer: "styles__mainContainer___1RAiv-camelCase",
                header: "styles__header___1U0IH-camelCase",
                topRow: "styles__topRow___2VUb9-camelCase",
                mathInputWrapper: "styles__mathInputWrapper___323bt-camelCase",
                mathInput: "styles__mathInput___3a-iu-camelCase",
                insertButton: "styles__insertButton___1oyLR-camelCase",
                bottomWrapper: "styles__bottomWrapper___2aAol-camelCase",
                button: "styles__button___1sh0e-camelCase",
                mathField: "styles__mathField____d8YC-camelCase",
                buttonRow: "styles__buttonRow___LbqX8-camelCase",
                bottomButtons: "styles__bottomButtons___1Nkoy-camelCase",
                importantButtons: "styles__importantButtons___WH7-H-camelCase",
                topButtons: "styles__topButtons___2ETH_-camelCase"
            }
        },
        aKVx: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("rtQy"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                u = function(e) {
                    var t = e.team;
                    return n.a.createElement("div", {
                        className: c.a.container
                    }, n.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("12vw")
                    }, "Step Three:"), n.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("10vw")
                    }, "Showdown"), n.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.leftBlook
                    }), n.a.createElement("div", {
                        className: c.a.vsText
                    }, "VS"), n.a.createElement(_.a, {
                        name: "Cat",
                        className: c.a.rightBlook
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("8vw")
                    }, t ? "The Team With The Lowest Average Time Will Keep Their Energy" : "Answer Correctly and More Quickly To Keep Your Energy"))
                };
            u.propTypes = {
                team: r.a.bool
            }, t.a = u
        },
        ahDL: function(e, t, a) {
            var s = a("eBQA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "bQY/": function(e, t, a) {
            var s = a("Vy2N");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "ca/f": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("H1WH"),
                i = a("TSYQ"),
                c = a.n(i),
                _ = a("O/BK"),
                m = a.n(_),
                u = a("Xst1"),
                f = a.n(u),
                d = a("lmLo"),
                p = a("XOuL"),
                y = a("LHn/"),
                h = a("0oXL"),
                g = a("74sb");

            function x(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var b = ["#1f77b4", "#ffa31e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#b3dc23", "#0bc2cf"],
                w = function(e) {
                    var t = e.text,
                        a = e.content,
                        s = e.buttonOne,
                        o = e.buttonTwo,
                        r = e.loading,
                        i = e.numValue,
                        _ = e.numChange,
                        u = e.numTotal,
                        w = e.priceValue,
                        C = e.priceChange,
                        v = e.timeValue,
                        k = e.timeChange,
                        E = e.stringValue,
                        N = e.stringChange,
                        I = e.stringPlaceholder,
                        T = e.stringValue2,
                        B = e.stringChange2,
                        S = e.stringPlaceholder2,
                        O = e.colorValue,
                        j = e.colorChange,
                        z = e.error,
                        q = e.onSubmit,
                        R = e.isDark,
                        P = e.blook;
                    return n.a.createElement("div", {
                        className: f.a.modal
                    }, n.a.createElement("form", {
                        onSubmit: q ? function(e) {
                            return q(e)
                        } : function(e) {
                            return e.preventDefault()
                        },
                        className: m.a.container,
                        style: {
                            backgroundColor: R ? "#1a1a1a" : null
                        }
                    }, n.a.createElement("div", {
                        className: m.a.text,
                        style: {
                            color: R ? "#fff" : null
                        }
                    }, P ? n.a.createElement(h.a, {
                        name: P,
                        className: m.a.blook
                    }) : null, t || a), r ? n.a.createElement(p.a, null) : n.a.createElement("div", {
                        className: m.a.holder
                    }, void 0 !== i ? n.a.createElement("div", {
                        className: m.a.numRow
                    }, n.a.createElement("div", {
                        className: c()(m.a.inputContainer, x({}, m.a.inputFilled, i)),
                        style: {
                            width: 80,
                            margin: 0
                        }
                    }, n.a.createElement("input", {
                        className: m.a.input,
                        style: {
                            width: 60
                        },
                        placeholder: "",
                        onChange: _,
                        value: i,
                        type: "tel",
                        autoFocus: l.isMobile ? "" : "autofocus"
                    })), n.a.createElement("div", {
                        className: m.a.numTotal
                    }, "/ ".concat(Object(g.o)(u)))) : null, void 0 !== w ? n.a.createElement("div", {
                        className: c()(m.a.inputContainer, x({}, m.a.inputFilled, w))
                    }, n.a.createElement("input", {
                        className: m.a.input,
                        placeholder: "Price",
                        onChange: C,
                        value: w,
                        type: "number",
                        autoFocus: l.isMobile ? "" : "autofocus"
                    }), n.a.createElement("img", {
                        src: y.a.basic.token,
                        alt: "Token",
                        className: m.a.token,
                        draggable: !1
                    })) : null, void 0 !== v ? n.a.createElement("div", {
                        className: c()(m.a.inputContainer, x({}, m.a.inputFilled, v))
                    }, n.a.createElement("input", {
                        className: m.a.input,
                        placeholder: "Time",
                        onChange: k,
                        value: v,
                        type: "number",
                        autoFocus: l.isMobile || void 0 !== w ? "" : "autofocus"
                    }), n.a.createElement("i", {
                        className: c()(m.a.icon, "far fa-clock")
                    })) : null, void 0 !== E ? n.a.createElement("div", {
                        className: c()(m.a.inputContainer, x({}, m.a.inputFilled, E)),
                        style: {
                            width: "80%"
                        }
                    }, n.a.createElement("input", {
                        className: m.a.longInput,
                        placeholder: I || "Name",
                        onChange: N,
                        value: E,
                        type: "text",
                        autoFocus: l.isMobile || void 0 !== E ? "" : "autofocus"
                    })) : null, void 0 !== T ? n.a.createElement("div", {
                        className: c()(m.a.inputContainer, x({}, m.a.inputFilled, T)),
                        style: {
                            width: "80%"
                        }
                    }, n.a.createElement("input", {
                        className: m.a.longInput,
                        placeholder: S || "Name",
                        onChange: B,
                        value: T,
                        type: "text",
                        autoFocus: l.isMobile || void 0 !== T ? "" : "autofocus"
                    })) : null, void 0 !== O ? n.a.createElement("div", {
                        className: m.a.colorsHolder
                    }, b.map((function(e) {
                        return n.a.createElement("div", {
                            className: m.a.colorContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return j(e)
                            },
                            key: e,
                            style: {
                                backgroundColor: e
                            }
                        }, e === O ? n.a.createElement("i", {
                            className: "fas fa-check"
                        }) : null)
                    }))) : null, z ? n.a.createElement("div", {
                        className: m.a.errorContainer
                    }, n.a.createElement("i", {
                        className: c()(m.a.errorIcon, "fas fa-times-circle")
                    }), n.a.createElement("div", {
                        className: m.a.errorText
                    }, z)) : null, n.a.createElement("div", {
                        className: m.a.buttonContainer
                    }, s ? n.a.createElement(d.a, {
                        onClick: s.click,
                        outsideClass: m.a.button,
                        insideClass: m.a.buttonInside,
                        color: "orange" === s.color ? "#ff7b24" : "red" === s.color ? "#ce1313" : "green" === s.color ? "#4bc22e" : "black" === s.color ? "#3a3a3a" : "#0bc2cf"
                    }, s.text) : null, o ? n.a.createElement(d.a, {
                        onClick: o.click,
                        outsideClass: m.a.button,
                        insideClass: m.a.buttonInside,
                        color: "orange" === o.color ? "#ff7b24" : "red" === o.color ? "#ce1313" : "green" === o.color ? "#4bc22e" : "black" === o.color ? "#3a3a3a" : "#0bc2cf"
                    }, o.text) : null)), n.a.createElement("input", {
                        type: "submit",
                        style: {
                            opacity: 0,
                            display: "none"
                        }
                    })))
                };
            w.propTypes = {
                text: r.a.string,
                content: r.a.element,
                buttonOne: r.a.shape({
                    text: r.a.string,
                    click: r.a.func,
                    color: r.a.string
                }),
                buttonTwo: r.a.shape({
                    text: r.a.string,
                    click: r.a.func,
                    color: r.a.string
                }),
                loading: r.a.bool,
                numValue: r.a.number,
                numChange: r.a.func,
                numTotal: r.a.number,
                priceValue: r.a.any,
                priceChange: r.a.func,
                timeValue: r.a.any,
                timeChange: r.a.func,
                stringValue: r.a.string,
                stringChange: r.a.func,
                stringPlaceholder: r.a.string,
                stringValue2: r.a.string,
                stringChange2: r.a.func,
                stringPlaceholder2: r.a.string,
                colorValue: r.a.string,
                colorChange: r.a.func,
                error: r.a.string,
                onSubmit: r.a.func,
                isDark: r.a.bool,
                blook: r.a.string
            }, t.a = w
        },
        ctjG: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("cyLU"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                u = function(e) {
                    var t = e.team;
                    return n.a.createElement("div", {
                        className: c.a.container
                    }, n.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("12vw")
                    }, "Step Four:"), n.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("10vw")
                    }, "Survive"), n.a.createElement(_.a, {
                        name: "Chicken",
                        className: c.a.blookOne
                    }), n.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.blookTwo
                    }), n.a.createElement(_.a, {
                        name: "Fox",
                        className: c.a.blookThree
                    }), n.a.createElement(_.a, {
                        name: "Pig",
                        className: c.a.blookFour
                    }), n.a.createElement(_.a, {
                        name: "Sheep",
                        className: c.a.blookFive
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.D)("8vw")
                    }, "The Last ".concat(t ? "Team" : "Player", " With Energy Remaining Wins")))
                };
            u.propTypes = {
                team: r.a.bool
            }, t.a = u
        },
        cyLU: function(e, t, a) {
            var s = a("Hq7Z");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        eBQA: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__row___103Xq-camelCase{align-items:center;height:10vh;width:25vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.styles__row___103Xq-camelCase,.styles__rowLose___1nWj9-camelCase{display:flex;flex-direction:row}.styles__rowLose___1nWj9-camelCase{-webkit-animation:styles__fadeOut___Wd_fa-camelCase .5s linear 4.5s forwards;animation:styles__fadeOut___Wd_fa-camelCase .5s linear 4.5s forwards}@-webkit-keyframes styles__fadeOut___Wd_fa-camelCase{0%{opacity:1}to{opacity:.6}}@keyframes styles__fadeOut___Wd_fa-camelCase{0%{opacity:1}to{opacity:.6}}.styles__rowRight___1Q_hn-camelCase{flex-direction:row-reverse}.styles__background___-bpq4-camelCase{position:absolute;width:95%;z-index:-1;right:0}.styles__backgroundRight___25c1e-camelCase{right:unset;left:0;transform:rotateY(180deg)}.styles__energyContainer___v4ZTK-camelCase{width:5vw;margin:0 .5vw;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__energyText___3nF_X-camelCase{font-family:Titan One,sans-serif;font-size:2.6vw;text-shadow:2px 2px rgba(0,0,0,.2)}.styles__energyIcon___3Ip1T-camelCase{width:1.5vw;margin-left:.5vw}.styles__blook___3T0YC-camelCase{margin:0 1vw 0 .5vw;width:5vw;filter:drop-shadow(2px 2px #e8269c);transform:rotate(-5deg)}.styles__blookRight___1uTpx-camelCase{filter:drop-shadow(-2px 2px #e8269c);transform:rotate(5deg)}.styles__name___rQTuH-camelCase{color:#3a3a3a;text-align:center;height:80%;width:calc(17.5vw - 7vh);margin:10% 1vw 10% 0;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}", ""]), t.locals = {
                row: "styles__row___103Xq-camelCase",
                rowLose: "styles__rowLose___1nWj9-camelCase",
                fadeOut: "styles__fadeOut___Wd_fa-camelCase",
                rowRight: "styles__rowRight___1Q_hn-camelCase",
                background: "styles__background___-bpq4-camelCase",
                backgroundRight: "styles__backgroundRight___25c1e-camelCase",
                energyContainer: "styles__energyContainer___v4ZTK-camelCase",
                energyText: "styles__energyText___3nF_X-camelCase",
                energyIcon: "styles__energyIcon___3Ip1T-camelCase",
                blook: "styles__blook___3T0YC-camelCase",
                blookRight: "styles__blookRight___1uTpx-camelCase",
                name: "styles__name___rQTuH-camelCase"
            }
        },
        eMKS: function(e, t, a) {
            var s = a("y0MH");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        fSAT: function(e, t, a) {
            var s = a("kIZ0");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "i4/Q": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("55Ip"),
                _ = a("cpGi"),
                m = a("kRG3"),
                u = a.n(m),
                f = a("Xst1"),
                d = a.n(f),
                p = a("LHn/"),
                y = a("0oXL"),
                h = a("y9k9"),
                g = a("lmLo");

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || C(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        l = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        l = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (l) throw n
                        }
                    }
                    return o
                }(e, t) || C(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? v(e, t) : void 0
                }
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }
            var k = {
                    Play: {
                        icon: "fas fa-play",
                        link: "/play"
                    },
                    Discover: {
                        icon: "fas fa-compass",
                        link: "/discover"
                    },
                    "Set Creator": {
                        icon: "fas fa-edit",
                        link: "/create"
                    },
                    "My Sets": {
                        icon: "fas fa-list",
                        link: "/my-sets"
                    },
                    Favorites: {
                        icon: "fas fa-star",
                        link: "/favorites"
                    },
                    Homework: {
                        icon: "fas fa-file-alt",
                        link: "/homeworks",
                        noMobile: !0
                    },
                    History: {
                        icon: "fas fa-history",
                        link: "/history",
                        noMobile: !0
                    },
                    Classes: {
                        icon: "fas fa-chalkboard-teacher",
                        link: "/classes",
                        showIf: function(e) {
                            return "Bot" === e.name
                        },
                        noMobile: !0
                    },
                    "Group Plan": {
                        icon: "fas fa-users",
                        link: "/group-plan",
                        showIf: function(e) {
                            return e.groupId
                        }
                    },
                    Market: {
                        icon: "fas fa-store",
                        link: "/market"
                    },
                    Blooks: {
                        icon: "fas fa-suitcase",
                        link: "/blooks"
                    },
                    Stats: {
                        icon: "fas fa-chart-bar",
                        link: "/stats"
                    },
                    Settings: {
                        icon: "fas fa-cog",
                        link: "/settings"
                    },
                    Logout: {
                        icon: "fas fa-sign-out-alt",
                        link: "/logout"
                    }
                },
                E = {
                    big: "Play",
                    medium: ["Stats", "Blooks", "Market", "Discover", "Set Creator", "My Sets", "Favorites", "Group Plan"],
                    small: ["History", "Homework", "Settings"]
                },
                N = {
                    big: "Set Creator",
                    medium: ["Discover", "My Sets", "Favorites", "History", "Homework", "Classes", "Play", "Group Plan", "Settings"],
                    small: ["Stats", "Blooks", "Market"]
                },
                I = function(e) {
                    var t = e.page,
                        a = e.user,
                        o = e.topContent,
                        r = e.newNews,
                        l = e.afterNews,
                        m = w(Object(s.useState)(!1), 2),
                        f = m[0],
                        C = m[1],
                        v = w(Object(s.useState)(!1), 2),
                        I = v[0],
                        T = v[1],
                        B = a || {},
                        S = "Student" === B.role ? E : N;
                    return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: u.a.sidebar
                    }, n.a.createElement("img", {
                        src: p.a.basic.blooket,
                        alt: "Blooket",
                        className: u.a.logo
                    }), n.a.createElement(g.a, {
                        color: "#0bc2cf",
                        linkTo: k[S.big].link,
                        outsideClass: u.a.bigButton
                    }, n.a.createElement("div", {
                        className: u.a.bigButtonInside
                    }, n.a.createElement("i", {
                        className: i()(k[S.big].icon, u.a.bigIcon)
                    }), "Set Creator" === S.big ? "Create" : S.big)), S.medium.filter((function(e) {
                        return !k[e].showIf || k[e].showIf(B)
                    })).map((function(e) {
                        var a;
                        return n.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: i()(u.a.pageButton, (a = {}, b(a, u.a.pageSelected, t === e), b(a, u.a.noMobile, k[e].noMobile), a))
                        }, n.a.createElement("i", {
                            className: i()(u.a.pageIcon, k[e].icon)
                        }), n.a.createElement("div", {
                            className: u.a.pageText
                        }, e))
                    })), B.role ? n.a.createElement("div", {
                        className: u.a.bottomRow
                    }, n.a.createElement(_.a, {
                        place: "top",
                        effect: "solid",
                        className: d.a.tooltip
                    }), S.small.map((function(e) {
                        return n.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            "data-tip": e,
                            className: i()(u.a.smallButton, b({}, u.a.noMobile, k[e].noMobile))
                        }, n.a.createElement("i", {
                            className: i()(u.a.bottomIcon, k[e].icon)
                        }))
                    })), n.a.createElement("div", {
                        className: u.a.smallButton,
                        "data-tip": "News",
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return C(!0)
                        }
                    }, n.a.createElement("i", {
                        className: i()("far fa-newspaper", u.a.bottomIcon)
                    }))) : null, "Starter" === B.plan && "Teacher" === B.role ? n.a.createElement(c.b, {
                        className: u.a.plusButton,
                        to: "/upgrade"
                    }, n.a.createElement("i", {
                        className: i()("fas fa-plus", u.a.plusIcon)
                    }), "Upgrade to Plus") : null), n.a.createElement("div", {
                        className: u.a.topRightRow
                    }, o, n.a.createElement("div", {
                        className: u.a.profileContainer,
                        role: "button",
                        tabIndex: 0
                    }, n.a.createElement("div", {
                        className: u.a.profileRow
                    }, n.a.createElement(y.a, {
                        name: B.blook || "Chick",
                        className: u.a.profileBlook
                    }), B.name || ""), n.a.createElement("i", {
                        className: i()("fas fa-angle-down", u.a.profileDropdownIcon)
                    }), n.a.createElement("div", {
                        className: u.a.profileDropdownMenu
                    }, n.a.createElement(c.b, {
                        className: u.a.profileDropdownOption,
                        to: "/settings"
                    }, n.a.createElement("i", {
                        className: i()("fas fa-cog", u.a.profileDropdownOptionIcon)
                    }), "Settings"), n.a.createElement(c.b, {
                        className: u.a.profileDropdownOption,
                        to: "/logout"
                    }, n.a.createElement("i", {
                        className: i()("fas fa-sign-out-alt", u.a.profileDropdownOptionIcon)
                    }), "Logout")))), n.a.createElement("div", {
                        className: u.a.mNavBar
                    }, n.a.createElement("img", {
                        src: p.a.basic.blooket,
                        alt: "Blooket",
                        className: u.a.mLogo
                    }), n.a.createElement("i", {
                        className: i()(u.a.mHamburgerIcon, "fas fa-bars"),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return T(!0)
                        }
                    })), n.a.createElement("div", {
                        className: d.a.modal,
                        style: {
                            opacity: I ? 1 : 0,
                            transition: "200ms",
                            pointerEvents: "none"
                        }
                    }), n.a.createElement("div", {
                        className: u.a.mSidebar,
                        style: {
                            transform: I ? "translateX(-100%)" : null
                        }
                    }, n.a.createElement("i", {
                        className: i()(u.a.closeIcon, "fas fa-times"),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return T(!1)
                        }
                    }), n.a.createElement(g.a, {
                        color: "#0bc2cf",
                        linkTo: k[S.big].link,
                        outsideClass: u.a.bigButton
                    }, n.a.createElement("div", {
                        className: u.a.bigButtonInside
                    }, n.a.createElement("i", {
                        className: i()(k[S.big].icon, u.a.bigIcon)
                    }), "Set Creator" === S.big ? "Create" : S.big)), [].concat(x(S.medium), ["Logout"]).filter((function(e) {
                        return !k[e].showIf || k[e].showIf(B)
                    })).map((function(e) {
                        var a;
                        return n.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: i()(u.a.pageButton, (a = {}, b(a, u.a.pageSelected, t === e), b(a, u.a.noMobile, k[e].noMobile), a))
                        }, n.a.createElement("i", {
                            className: i()(u.a.pageIcon, k[e].icon)
                        }), n.a.createElement("div", {
                            className: u.a.pageText
                        }, e))
                    })), n.a.createElement("div", {
                        className: u.a.bottomRow,
                        style: {
                            marginBottom: 15
                        }
                    }, S.small.map((function(e) {
                        return n.a.createElement(c.b, {
                            to: k[e].link,
                            key: e,
                            className: i()(u.a.smallButton, b({}, u.a.noMobile, k[e].noMobile))
                        }, n.a.createElement("i", {
                            className: i()(u.a.bottomIcon, k[e].icon)
                        }))
                    })), n.a.createElement("div", {
                        className: u.a.smallButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return C(!0)
                        }
                    }, n.a.createElement("i", {
                        className: i()("far fa-newspaper", u.a.bottomIcon)
                    })))), n.a.createElement(h.a, {
                        isShown: f || r,
                        onClose: function() {
                            r && l(), C(!1)
                        }
                    }))
                };
            I.propTypes = {
                page: r.a.string,
                user: r.a.object,
                topContent: r.a.element,
                newNews: r.a.bool,
                afterNews: r.a.func
            }, t.a = I
        },
        ipU3: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___3AqHR-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__one___1re73-camelCase 8s linear;animation:styles__one___1re73-camelCase 8s linear}@-webkit-keyframes styles__one___1re73-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}@keyframes styles__one___1re73-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___fE1pk-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__two___3rMIq-camelCase 8s linear;animation:styles__two___3rMIq-camelCase 8s linear}@-webkit-keyframes styles__two___3rMIq-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}@keyframes styles__two___3rMIq-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__leftBlook___2HRpk-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);right:100vw;-webkit-animation:styles__leftBlook___2HRpk-camelCase 8s linear;animation:styles__leftBlook___2HRpk-camelCase 8s linear}@-webkit-keyframes styles__leftBlook___2HRpk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}55%{right:60vw}60%{right:calc(50vw - 17.5vh)}92.5%{right:calc(50vw - 17.5vh)}97.5%{right:100vw}to{right:100vw}}@keyframes styles__leftBlook___2HRpk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}55%{right:60vw}60%{right:calc(50vw - 17.5vh)}92.5%{right:calc(50vw - 17.5vh)}97.5%{right:100vw}to{right:100vw}}.styles__vsText___516Yx-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:7vw;text-align:center;position:absolute;opacity:0;top:57.5%;left:50%;transform:translate(-50%,-50%);-webkit-animation:styles__vsText___516Yx-camelCase 8s linear;animation:styles__vsText___516Yx-camelCase 8s linear}@-webkit-keyframes styles__vsText___516Yx-camelCase{0%{opacity:0}25%{opacity:0}30%{opacity:1}55%{opacity:1}57.5%{opacity:0}to{opacity:0}}@keyframes styles__vsText___516Yx-camelCase{0%{opacity:0}25%{opacity:0}30%{opacity:1}55%{opacity:1}57.5%{opacity:0}to{opacity:0}}.styles__rightBlook___PsIhT-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);left:100vw;-webkit-animation:styles__rightBlook___PsIhT-camelCase 8s linear;animation:styles__rightBlook___PsIhT-camelCase 8s linear}@-webkit-keyframes styles__rightBlook___PsIhT-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}55%{opacity:1}57.5%{opacity:0}to{left:60vw;opacity:0}}@keyframes styles__rightBlook___PsIhT-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}55%{opacity:1}57.5%{opacity:0}to{left:60vw;opacity:0}}.styles__headerThree___1qsKi-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__six___38mzy-camelCase 8s linear;animation:styles__six___38mzy-camelCase 8s linear}@-webkit-keyframes styles__six___38mzy-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}@keyframes styles__six___38mzy-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___2Yga6-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___3AqHR-camelCase",
                one: "styles__one___1re73-camelCase",
                headerTwo: "styles__headerTwo___fE1pk-camelCase",
                two: "styles__two___3rMIq-camelCase",
                leftBlook: "styles__leftBlook___2HRpk-camelCase",
                vsText: "styles__vsText___516Yx-camelCase",
                rightBlook: "styles__rightBlook___PsIhT-camelCase",
                headerThree: "styles__headerThree___1qsKi-camelCase",
                six: "styles__six___38mzy-camelCase",
                container: "styles__container___2Yga6-camelCase"
            }
        },
        j0Ua: function(e, t, a) {
            var s = a("IGEA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        j8ID: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__wrapper___29Oho-camelCase{margin:0;padding:0;position:fixed;z-index:5}.styles__modal___3It9q-camelCase,.styles__wrapper___29Oho-camelCase{height:100%;width:100%;top:0;left:0}.styles__modal___3It9q-camelCase{position:absolute;z-index:15;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__mainContainer___3D-r6-camelCase{width:85%;height:85%;max-width:1100px;max-height:700px;background-color:#fff;border-radius:7px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__header___36gb1-camelCase{position:absolute;top:0;left:0;width:100%;height:55px;justify-content:space-between;padding:0 10px;box-sizing:border-box;background-color:#9a49aa;box-shadow:0 6px 8px rgba(0,0,0,.2);color:#fff;border-top-left-radius:7px;border-top-right-radius:7px}.styles__header___36gb1-camelCase,.styles__headerContainer___PuqBU-camelCase,.styles__headerRow___16jFw-camelCase{display:flex;flex-direction:row;align-items:center}.styles__headerContainer___PuqBU-camelCase{height:42px;border:2px solid #fff;border-radius:5px;color:#fff;padding:0 7px;box-sizing:border-box;margin:auto 10px}.styles__headerIcon___1oSqv-camelCase{font-size:26px}.styles__headerText___2ojyr-camelCase{margin:auto 10px;font-size:14px;line-height:14px}.styles__timeInput___206Z4-camelCase{border:2px solid #fff;border-radius:5px;background-color:#9a49aa;padding:0 5px;width:38px;font-size:18px;font-family:Nunito,sans-serif;text-align:right;color:#fff;outline:none}.styles__timeInput___206Z4-camelCase::-webkit-inner-spin-button,.styles__timeInput___206Z4-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__randomButton___2HsrZ-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__randomCheck___2Us1Y-camelCase{font-size:16px;color:#fff;opacity:0;transition:.2s}.styles__isRandom___3g16D-camelCase>.styles__randomCheck___2Us1Y-camelCase,.styles__randomButton___2HsrZ-camelCase:hover>.styles__randomCheck___2Us1Y-camelCase{opacity:1}.styles__cancelButton___38eWZ-camelCase{border:3px solid #fff;border-radius:5px;color:#fff;padding:0 7px;box-sizing:border-box;margin:auto 10px;font-size:16px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__cancelButton___38eWZ-camelCase:hover{transform:scale(.95)}.styles__cancelIcon___3I-Ya-camelCase{font-size:18px;display:none}.styles__cancelText___33X_I-camelCase{font-size:16px}.styles__saveButton___1Mdgu-camelCase{border-radius:5px;color:#9a49aa;background-color:#fff;display:flex;flex-direction:row;align-items:center;padding:7px 12px;box-sizing:border-box;margin:auto 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__saveButton___1Mdgu-camelCase:hover{transform:scale(.95)}.styles__saveIcon___1I1z5-camelCase{font-size:18px;margin-right:7px}.styles__saveText___GfbGg-camelCase{font-size:18px;font-weight:700}.styles__loadingIcon___3a3fN-camelCase{font-size:18px;-webkit-animation:styles__spin___1rbXp-camelCase 1s linear infinite;animation:styles__spin___1rbXp-camelCase 1s linear infinite}@-webkit-keyframes styles__spin___1rbXp-camelCase{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes styles__spin___1rbXp-camelCase{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.styles__questionRegularBody___2lrUv-camelCase{position:absolute;left:0;top:55px;height:calc(100% - 55px);width:100%}.styles__questionContainer___-CrZi-camelCase{width:90%;height:40%;background-color:#fff;position:absolute;top:2.5%;left:5%;display:flex;flex-direction:row;align-items:center}.styles__questionLeftContainer___1K9Du-camelCase{width:85px;height:100%;margin-right:4%}.styles__questionButton___1-47Y-camelCase,.styles__questionLeftContainer___1K9Du-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__questionButton___1-47Y-camelCase{background-color:#3378ff;color:#fff;font-size:14px;border-radius:5px;margin:5px 0;width:65px;height:60px;box-shadow:2px 2px 0 0 #2960cc;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__questionButton___1-47Y-camelCase:hover{background-color:#004de6}.styles__questionIcon___1ym67-camelCase{font-size:24px}.styles__questionImgWrapper___FoBkL-camelCase{width:30%;height:100%;margin-right:4%;flex-direction:column}.styles__questionImgContainer___1f59d-camelCase,.styles__questionImgWrapper___FoBkL-camelCase{display:flex;justify-content:center;align-items:center}.styles__questionImgContainer___1f59d-camelCase{width:100%;height:80%}.styles__questionEqWrapper___x-bqP-camelCase{width:40%;height:100%;margin-right:4%;flex-direction:column}.styles__questionEqWrapper___x-bqP-camelCase,.styles__removeQButton___2CRbg-camelCase{display:flex;justify-content:center;align-items:center}.styles__removeQButton___2CRbg-camelCase{margin-top:7px;flex-direction:row;font-size:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;background-color:rgba(0,0,0,.1);border-radius:5px;padding:3px 7px;opacity:.7}.styles__removeQButton___2CRbg-camelCase:hover{opacity:.9}.styles__removeQIcon___4V5Jb-camelCase{font-size:10px;margin-right:5px}.styles__questionTextContainer___39Cd5-camelCase{width:calc(85% - 85px);height:80%;text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-grow:1;border-radius:5px;border:3px solid #fff;box-sizing:border-box;outline:none;cursor:text;position:relative;font-size:20px}.styles__questionTextContainer___39Cd5-camelCase:hover,.styles__questionTextContainer___39Cd5-camelCase[focus-within]{border:3px solid #0bc2cf}.styles__questionTextContainer___39Cd5-camelCase:focus-within,.styles__questionTextContainer___39Cd5-camelCase:hover{border:3px solid #0bc2cf}.styles__questionTextContainer___39Cd5-camelCase[focus-within]{background-color:rgba(0,0,0,.02)}.styles__questionTextContainer___39Cd5-camelCase:focus-within{background-color:rgba(0,0,0,.02)}.styles__questionText___3-Uio-camelCase{padding:10px;box-sizing:border-box;outline:none}.styles__placeholder___2G84o-camelCase,.styles__questionText___3-Uio-camelCase{width:100%;text-align:center}.styles__placeholder___2G84o-camelCase{opacity:.6;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;font-size:20px}.styles__errorContainer___3ba57-camelCase{border:2px solid #ce1313;border-radius:5px;width:330px;width:20%;margin-left:2.5%;padding:10px;box-sizing:border-box;font-size:16px;line-height:18px;text-align:center}.styles__imageContainer___1Hz7z-camelCase{width:30%;height:85%;margin-right:5%;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__img___2BpS6-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__answersHolder___1sYeZ-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:space-evenly;position:absolute;top:45%;left:0;height:calc(55% - 5px);width:calc(100% - 10px);padding:0 5px 5px}.styles__answerWrapper___2bsy8-camelCase{margin:auto;width:calc(50% - 6px);height:calc(50% - 6px);overflow:hidden}.styles__answerContainer___1ZDcZ-camelCase{margin:auto;width:100%;height:calc(100% - .9vh);border-radius:5px;overflow:hidden;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2)}.styles__answerContainer___1ZDcZ-camelCase,.styles__answerLeftContainer___1dHXT-camelCase{display:flex;justify-content:center;align-items:center}.styles__answerLeftContainer___1dHXT-camelCase{width:75px;height:100%;flex-direction:column;margin-right:5%}.styles__correctButton___3QZva-camelCase{display:flex;justify-content:center;align-items:center;border:4px solid #fff;border-radius:5px;box-sizing:border-box;width:45px;height:45px;box-shadow:2px 2px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__correctButton___3QZva-camelCase:hover{transform:scale(.95)}.styles__correctCheck___3UggB-camelCase{font-size:22px;color:#fff;opacity:0;transition:.2s}.styles__correctButton___3QZva-camelCase:hover>.styles__correctCheck___3UggB-camelCase{opacity:1}.styles__correctAnswer___30Xyg-camelCase{background-color:#4bc22e}.styles__correctAnswer___30Xyg-camelCase>.styles__correctCheck___3UggB-camelCase{opacity:1}.styles__answerButtonRow___DK6WB-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin-top:15px}.styles__answerIconButton___1jaiF-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:22px;box-shadow:1px 1px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__answerIconButton___1jaiF-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__answerIcon___R716B-camelCase{font-size:12px;color:#fff}.styles__answerTextContainer___3NOPU-camelCase{height:80%;width:calc(85% - 75px);text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;border-radius:5px;border:3px solid transparent;box-sizing:border-box;outline:none;cursor:text;position:relative;font-size:20px}.styles__answerTextContainer___3NOPU-camelCase:hover,.styles__answerTextContainer___3NOPU-camelCase[focus-within]{border:3px solid #0bc2cf}.styles__answerTextContainer___3NOPU-camelCase:focus-within,.styles__answerTextContainer___3NOPU-camelCase:hover{border:3px solid #0bc2cf}.styles__answerTextContainer___3NOPU-camelCase[focus-within]{background-color:rgba(0,0,0,.2)}.styles__answerTextContainer___3NOPU-camelCase:focus-within{background-color:rgba(0,0,0,.2)}.styles__answerText___12Rxt-camelCase{padding:10px;width:100%;box-sizing:border-box;text-align:center;outline:none}.styles__answerImgContainer___1Fg_v-camelCase{height:80%;width:calc(85% - 115px);display:flex;justify-content:center;align-items:center}.styles__answerImg___1lA6N-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__removeButton___2TXR9-camelCase{display:flex;justify-content:center;align-items:center;border:2px solid #fff;border-radius:5px;box-sizing:border-box;width:30px;height:30px;margin-left:10px;box-shadow:1px 1px 0 0 #646464;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__removeButton___2TXR9-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__mathField___Kj8_5-camelCase{cursor:pointer!important;color:#3a3a3a;border-color:#3a3a3a}.styles__mathAnswerField___2U8_U-camelCase,.styles__mathField___Kj8_5-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:20px!important}.styles__mathAnswerField___2U8_U-camelCase{cursor:default!important;color:#fff;border-color:#fff}.styles__keyboardIcon___1aY9f-camelCase{width:20px;display:flex;justify-content:center;align-items:center;margin:auto 0 auto auto;font-size:18px;cursor:pointer;color:rgba(0,0,0,.3);position:absolute;bottom:2px;right:5px;opacity:0;pointer-events:all}.styles__answerTextContainer___3NOPU-camelCase>.styles__keyboardIcon___1aY9f-camelCase{color:hsla(0,0%,100%,.3)}.styles__keyboardIcon___1aY9f-camelCase:hover{color:#0bc2cf}.styles__answerTextContainer___3NOPU-camelCase[focus-within]>.styles__keyboardIcon___1aY9f-camelCase,.styles__questionTextContainer___39Cd5-camelCase[focus-within]>.styles__keyboardIcon___1aY9f-camelCase{opacity:1}.styles__answerTextContainer___3NOPU-camelCase:focus-within>.styles__keyboardIcon___1aY9f-camelCase,.styles__questionTextContainer___39Cd5-camelCase:focus-within>.styles__keyboardIcon___1aY9f-camelCase{opacity:1}.styles__errorBorder___2OH1U-camelCase{border:2px solid #ce1313}.styles__tooltip___3zlqF-camelCase{font-family:Nunito,sans-serif!important;font-size:14px!important;padding:5px 10px!important;max-width:185px!important;text-align:center!important}@media only screen and (max-width:700px){.styles__wrapper___29Oho-camelCase{height:100%;width:100%;top:0;z-index:15}.styles__mainContainer___3D-r6-camelCase{width:95%;height:90%}.styles__headerContainer___PuqBU-camelCase{margin:auto 3px}.styles__headerIcon___1oSqv-camelCase{font-size:26px;margin-right:5px}.styles__headerText___2ojyr-camelCase{display:none}.styles__randomButton___2HsrZ-camelCase:hover>.styles__randomCheck___2Us1Y-camelCase{opacity:unset}.styles__cancelButton___38eWZ-camelCase{margin:auto 5px}.styles__cancelIcon___3I-Ya-camelCase{display:block}.styles__cancelText___33X_I-camelCase{display:none}.styles__saveIcon___1I1z5-camelCase{font-size:20px;margin-right:0}.styles__saveText___GfbGg-camelCase{display:none}.styles__placeholder___2G84o-camelCase,.styles__questionTextContainer___39Cd5-camelCase{font-size:16px}.styles__answerLeftContainer___1dHXT-camelCase{width:100px;display:flex;flex-direction:row;margin-right:2.5%}.styles__answerButtonRow___DK6WB-camelCase{display:flex;flex-direction:column;justify-content:space-evenly;align-items:space-evenly;width:40px;height:90%;margin-top:0}.styles__answerTextContainer___3NOPU-camelCase{height:85%;width:calc(90% - 100px);font-size:16px}.styles__answersHolder___1sYeZ-camelCase{flex-direction:column}.styles__answerWrapper___2bsy8-camelCase{margin:3px auto;width:calc(100% - 6px);flex-grow:1}.styles__answerTwo___2gDr8-camelCase,.styles__answerWrapper___2bsy8-camelCase{height:calc(25% - 6px)}.styles__mathField___Kj8_5-camelCase{font-size:10px!important}.styles__mathAnswerField___2U8_U-camelCase{font-size:14px!important}}", ""]), t.locals = {
                wrapper: "styles__wrapper___29Oho-camelCase",
                modal: "styles__modal___3It9q-camelCase",
                mainContainer: "styles__mainContainer___3D-r6-camelCase",
                header: "styles__header___36gb1-camelCase",
                headerContainer: "styles__headerContainer___PuqBU-camelCase",
                headerRow: "styles__headerRow___16jFw-camelCase",
                headerIcon: "styles__headerIcon___1oSqv-camelCase",
                headerText: "styles__headerText___2ojyr-camelCase",
                timeInput: "styles__timeInput___206Z4-camelCase",
                randomButton: "styles__randomButton___2HsrZ-camelCase",
                randomCheck: "styles__randomCheck___2Us1Y-camelCase",
                isRandom: "styles__isRandom___3g16D-camelCase",
                cancelButton: "styles__cancelButton___38eWZ-camelCase",
                cancelIcon: "styles__cancelIcon___3I-Ya-camelCase",
                cancelText: "styles__cancelText___33X_I-camelCase",
                saveButton: "styles__saveButton___1Mdgu-camelCase",
                saveIcon: "styles__saveIcon___1I1z5-camelCase",
                saveText: "styles__saveText___GfbGg-camelCase",
                loadingIcon: "styles__loadingIcon___3a3fN-camelCase",
                spin: "styles__spin___1rbXp-camelCase",
                questionRegularBody: "styles__questionRegularBody___2lrUv-camelCase",
                questionContainer: "styles__questionContainer___-CrZi-camelCase",
                questionLeftContainer: "styles__questionLeftContainer___1K9Du-camelCase",
                questionButton: "styles__questionButton___1-47Y-camelCase",
                questionIcon: "styles__questionIcon___1ym67-camelCase",
                questionImgWrapper: "styles__questionImgWrapper___FoBkL-camelCase",
                questionImgContainer: "styles__questionImgContainer___1f59d-camelCase",
                questionEqWrapper: "styles__questionEqWrapper___x-bqP-camelCase",
                removeQButton: "styles__removeQButton___2CRbg-camelCase",
                removeQIcon: "styles__removeQIcon___4V5Jb-camelCase",
                questionTextContainer: "styles__questionTextContainer___39Cd5-camelCase",
                questionText: "styles__questionText___3-Uio-camelCase",
                placeholder: "styles__placeholder___2G84o-camelCase",
                errorContainer: "styles__errorContainer___3ba57-camelCase",
                imageContainer: "styles__imageContainer___1Hz7z-camelCase",
                img: "styles__img___2BpS6-camelCase",
                answersHolder: "styles__answersHolder___1sYeZ-camelCase",
                answerWrapper: "styles__answerWrapper___2bsy8-camelCase",
                answerContainer: "styles__answerContainer___1ZDcZ-camelCase",
                answerLeftContainer: "styles__answerLeftContainer___1dHXT-camelCase",
                correctButton: "styles__correctButton___3QZva-camelCase",
                correctCheck: "styles__correctCheck___3UggB-camelCase",
                correctAnswer: "styles__correctAnswer___30Xyg-camelCase",
                answerButtonRow: "styles__answerButtonRow___DK6WB-camelCase",
                answerIconButton: "styles__answerIconButton___1jaiF-camelCase",
                answerIcon: "styles__answerIcon___R716B-camelCase",
                answerTextContainer: "styles__answerTextContainer___3NOPU-camelCase",
                answerText: "styles__answerText___12Rxt-camelCase",
                answerImgContainer: "styles__answerImgContainer___1Fg_v-camelCase",
                answerImg: "styles__answerImg___1lA6N-camelCase",
                removeButton: "styles__removeButton___2TXR9-camelCase",
                mathField: "styles__mathField___Kj8_5-camelCase",
                mathAnswerField: "styles__mathAnswerField___2U8_U-camelCase",
                keyboardIcon: "styles__keyboardIcon___1aY9f-camelCase",
                errorBorder: "styles__errorBorder___2OH1U-camelCase",
                tooltip: "styles__tooltip___3zlqF-camelCase",
                answerTwo: "styles__answerTwo___2gDr8-camelCase"
            }
        },
        j9P7: function(e, t, a) {
            var s = a("ZRb8");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        jIL8: function(e, t, a) {
            var s = a("NZV8");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        kIZ0: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___11U29-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__one___1bk8b-camelCase 8s linear;animation:styles__one___1bk8b-camelCase 8s linear}@-webkit-keyframes styles__one___1bk8b-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}@keyframes styles__one___1bk8b-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___2f98D-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__two___HYG8w-camelCase 8s linear;animation:styles__two___HYG8w-camelCase 8s linear}@-webkit-keyframes styles__two___HYG8w-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}@keyframes styles__two___HYG8w-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__answerBox___2sasI-camelCase{position:absolute;height:40%;width:30%;top:40%;left:-70%;background-color:#fff;overflow:hidden;border-radius:15px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__three___5V96E-camelCase 8s linear;animation:styles__three___5V96E-camelCase 8s linear}@-webkit-keyframes styles__three___5V96E-camelCase{0%{left:-30%}20%{left:-30%}25%{left:15%}92.5%{left:15%}97.5%{left:-70%}to{left:-70%}}@keyframes styles__three___5V96E-camelCase{0%{left:-30%}20%{left:-30%}25%{left:15%}92.5%{left:15%}97.5%{left:-70%}to{left:-70%}}.styles__answerHeader___1JZtY-camelCase{position:absolute;height:10%;width:100%;top:0;left:0;background-color:#9a49aa}.styles__answerOne___2el-R-camelCase{left:1%;background-color:#ffa31e}.styles__answerOne___2el-R-camelCase,.styles__answerTwo___b-Vh7-camelCase{position:absolute;height:29%;width:48.5%;top:40%;border-radius:8px}.styles__answerTwo___b-Vh7-camelCase{left:50.5%;background-color:#3378ff}.styles__answerThree___1Fii5-camelCase{left:1%;background-color:#00cf77}.styles__answerFour___aWiQd-camelCase,.styles__answerThree___1Fii5-camelCase{position:absolute;height:29%;width:48.5%;top:70%;border-radius:8px}.styles__answerFour___aWiQd-camelCase{left:50.5%;background-color:#ff462b}.styles__arrow___1Mfqh-camelCase{font-size:10vw;color:#fff;position:absolute;top:60%;left:57.5%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey}.styles__arrowContainer___31fax-camelCase{position:absolute;top:0;left:-100%;height:100%;width:100%;-webkit-animation:styles__four___1p2PQ-camelCase 8s linear;animation:styles__four___1p2PQ-camelCase 8s linear}@-webkit-keyframes styles__four___1p2PQ-camelCase{0%{left:0;opacity:0;transform:scale(.5)}27%{opacity:0;transform:scale(.5)}29%{opacity:1;transform:scale(1)}30%{transform:scale(1.2)}31.5%{transform:scale(1)}92.5%{left:0}97.5%{left:-100%}to{left:-100%}}@keyframes styles__four___1p2PQ-camelCase{0%{left:0;opacity:0;transform:scale(.5)}27%{opacity:0;transform:scale(.5)}29%{opacity:1;transform:scale(1)}30%{transform:scale(1.2)}31.5%{transform:scale(1)}92.5%{left:0}97.5%{left:-100%}to{left:-100%}}.styles__check___2E2G3-camelCase{font-size:8.5vw;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey}.styles__checkBox___27ZDp-camelCase{height:80%;width:80%;top:10%;left:10%;background-color:#0bc2cf}.styles__checkBox___27ZDp-camelCase,.styles__checkBoxBorder___2dRtG-camelCase{position:absolute;border-radius:10%}.styles__checkBoxBorder___2dRtG-camelCase{height:15vw;width:15vw;top:60%;left:-15vw;transform:translateY(-50%);background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__five___34gNr-camelCase 8s linear;animation:styles__five___34gNr-camelCase 8s linear}@-webkit-keyframes styles__five___34gNr-camelCase{0%{left:100%}35%{left:100%}40%{left:70%}92.5%{left:70%}97.5%{left:-15vw}to{left:-15vw}}@keyframes styles__five___34gNr-camelCase{0%{left:100%}35%{left:100%}40%{left:70%}92.5%{left:70%}97.5%{left:-15vw}to{left:-15vw}}.styles__headerThree___JnHIz-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__six___2yD4_-camelCase 8s linear;animation:styles__six___2yD4_-camelCase 8s linear}@-webkit-keyframes styles__six___2yD4_-camelCase{0%{left:10%;top:100%}45%{top:100%}50%{top:84%}95%{left:10%}to{left:-80%}}@keyframes styles__six___2yD4_-camelCase{0%{left:10%;top:100%}45%{top:100%}50%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___1RRMm-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0}", ""]), t.locals = {
                headerOne: "styles__headerOne___11U29-camelCase",
                one: "styles__one___1bk8b-camelCase",
                headerTwo: "styles__headerTwo___2f98D-camelCase",
                two: "styles__two___HYG8w-camelCase",
                answerBox: "styles__answerBox___2sasI-camelCase",
                three: "styles__three___5V96E-camelCase",
                answerHeader: "styles__answerHeader___1JZtY-camelCase",
                answerOne: "styles__answerOne___2el-R-camelCase",
                answerTwo: "styles__answerTwo___b-Vh7-camelCase",
                answerThree: "styles__answerThree___1Fii5-camelCase",
                answerFour: "styles__answerFour___aWiQd-camelCase",
                arrow: "styles__arrow___1Mfqh-camelCase",
                arrowContainer: "styles__arrowContainer___31fax-camelCase",
                four: "styles__four___1p2PQ-camelCase",
                check: "styles__check___2E2G3-camelCase",
                checkBox: "styles__checkBox___27ZDp-camelCase",
                checkBoxBorder: "styles__checkBoxBorder___2dRtG-camelCase",
                five: "styles__five___34gNr-camelCase",
                headerThree: "styles__headerThree___JnHIz-camelCase",
                six: "styles__six___2yD4_-camelCase",
                container: "styles__container___1RRMm-camelCase"
            }
        },
        kRG3: function(e, t, a) {
            var s = a("vSJx");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        kb5n: function(e, t, a) {
            var s = a("5nyl");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        qRUB: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___1BPm9-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__text___KSL4--camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__blook___1vk2V-camelCase{height:34.5px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 9px -5px 0;display:inline-block}.styles__holder___3CEfN-camelCase{width:100%}.styles__inputContainer___2Fn7J-camelCase{border:3px solid rgba(0,0,0,.17);border-radius:6px;width:180px;height:50px;margin:0 auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___2Fn7J-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___2Fn7J-camelCase:focus-within{border-color:#0bc2cf}.styles__input___2vJSW-camelCase{border:none;margin:5px 0 5px 5px;padding-right:5px;padding-left:5px;width:115px;height:40px;line-height:40px;font-size:28px;text-align:right;font-weight:700;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___2vJSW-camelCase:-moz-placeholder,.styles__input___2vJSW-camelCase:-ms-input-placeholder,.styles__input___2vJSW-camelCase::-moz-placeholder,.styles__input___2vJSW-camelCase::-webkit-input-placeholder{color:#999}.styles__input___2vJSW-camelCase::-webkit-inner-spin-button,.styles__input___2vJSW-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__longInput___QVduj-camelCase{border:none;margin:5px 0 5px 5px;padding-right:5px;padding-left:5px;width:calc(100% - 20px);height:36px;line-height:36px;font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__longInput___QVduj-camelCase:-moz-placeholder,.styles__longInput___QVduj-camelCase:-ms-input-placeholder,.styles__longInput___QVduj-camelCase::-moz-placeholder,.styles__longInput___QVduj-camelCase::-webkit-input-placeholder{color:#999}.styles__longInput___QVduj-camelCase::-webkit-inner-spin-button,.styles__longInput___QVduj-camelCase::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.styles__inputFilled___3AmpF-camelCase{border-color:#3a3a3a}.styles__token___17MV4-camelCase{border-radius:6px}.styles__icon___Z-5-g-camelCase,.styles__token___17MV4-camelCase{height:30px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:10px}.styles__icon___Z-5-g-camelCase{line-height:30px;font-size:28px;text-align:center}.styles__colorsHolder___162vx-camelCase{width:330px;height:50px;margin:0 auto 20px;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.styles__colorContainer___1-6bJ-camelCase{border-radius:5px;width:25px;height:25px;color:#fff;font-size:14px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__buttonContainer___2EaVD-camelCase,.styles__colorContainer___1-6bJ-camelCase{display:flex;justify-content:center;align-items:center}.styles__buttonContainer___2EaVD-camelCase{width:100%;margin-top:30px;margin-bottom:25px;flex-direction:row}.styles__button___3zpwV-camelCase{margin:auto}.styles__buttonInside___39vdp-camelCase{min-width:100px;height:35px;font-size:22px;padding:5px 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}.styles__errorContainer___2idI5-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___2Ey5t-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___2tWcX-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__numRow___xh98F-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;margin:0 auto 20px}.styles__numTotal___3LQaw-camelCase{line-height:40px;font-size:32px;font-weight:700;margin-left:10px}@media only screen and (max-width:600px){.styles__container___1BPm9-camelCase{width:310px}.styles__colorsHolder___162vx-camelCase,.styles__errorContainer___2idI5-camelCase{width:280px}.styles__colorContainer___1-6bJ-camelCase{border-radius:5px;width:23px;height:23px}}", ""]), t.locals = {
                container: "styles__container___1BPm9-camelCase",
                text: "styles__text___KSL4--camelCase",
                blook: "styles__blook___1vk2V-camelCase",
                holder: "styles__holder___3CEfN-camelCase",
                inputContainer: "styles__inputContainer___2Fn7J-camelCase",
                input: "styles__input___2vJSW-camelCase",
                longInput: "styles__longInput___QVduj-camelCase",
                inputFilled: "styles__inputFilled___3AmpF-camelCase",
                token: "styles__token___17MV4-camelCase",
                icon: "styles__icon___Z-5-g-camelCase",
                colorsHolder: "styles__colorsHolder___162vx-camelCase",
                colorContainer: "styles__colorContainer___1-6bJ-camelCase",
                buttonContainer: "styles__buttonContainer___2EaVD-camelCase",
                button: "styles__button___3zpwV-camelCase",
                buttonInside: "styles__buttonInside___39vdp-camelCase",
                errorContainer: "styles__errorContainer___2idI5-camelCase",
                errorIcon: "styles__errorIcon___2Ey5t-camelCase",
                errorText: "styles__errorText___2tWcX-camelCase",
                numRow: "styles__numRow___xh98F-camelCase",
                numTotal: "styles__numTotal___3LQaw-camelCase"
            }
        },
        rI6f: function(e, t, a) {
            var s = a("ZXaF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        rtQy: function(e, t, a) {
            var s = a("ipU3");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        t4Pf: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("yUSY"),
                c = a.n(i),
                _ = a("74sb"),
                m = function(e) {
                    var t = e.noExpand;
                    return n.a.createElement("div", {
                        className: c.a.container
                    }, t ? null : n.a.createElement("div", {
                        className: c.a.expandBackground
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(_.D)("15vw")
                    }, "Good Luck"), n.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(_.D)("15vw")
                    }, "& Let's Go!"))
                };
            m.propTypes = {
                noExpand: r.a.bool
            }, t.a = m
        },
        t5EX: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__teamHolder___11xsi-camelCase{display:flex;flex-direction:column;width:30vw;margin:0 auto 6vh}.styles__teamContainer___3dT3x-camelCase{height:11vh;width:100%;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);z-index:2}.styles__energyContainer___rR31w-camelCase,.styles__teamContainer___3dT3x-camelCase{display:flex;flex-direction:row;align-items:center}.styles__energyContainer___rR31w-camelCase{height:9vh;width:4vw;margin:1vh 0 1vh .5vw;justify-content:center}.styles__energyText___1uwus-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-size:3vw;text-align:right}.styles__energyIcon___1HRmW-camelCase{color:#9a49aa;font-size:2.25vw;padding-left:.5vw}.styles__teamBlook___4BQGU-camelCase{margin:auto .75vw auto 1vw;height:8.05vh;width:7vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__teamText___dAm74-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-weight:700;font-size:2.5vw;text-align:left;white-space:nowrap}.styles__teamPlayersContainer___2wAXK-camelCase{margin:-2vh auto 0;padding-top:2.5vh;min-height:8vh;width:90%;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);align-content:flex-start;flex-flow:row wrap;z-index:1}.styles__playerContainer___1E6kQ-camelCase,.styles__teamPlayersContainer___2wAXK-camelCase{justify-content:flex-start;display:flex}.styles__playerContainer___1E6kQ-camelCase{flex-direction:row;align-items:center;height:8vh;width:50%;color:#3a3a3a;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .3s cubic-bezier(.39,.5,.15,1.36)}.styles__playerContainer___1E6kQ-camelCase:hover{transform:scale(.9);color:#0bc2cf}.styles__playerContainerNo___ypbiN-camelCase{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;height:8vh;width:50%;color:#3a3a3a;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__selected___30Icr-camelCase{color:#0bc2cf}.styles__playerBlook___2EcNf-camelCase{margin:auto .7vw auto 1vw;height:6.325vh;width:5.5vh}.styles__playerText___26TNI-camelCase{font-family:Nunito,sans-serif;height:6vh;margin-top:auto;margin-bottom:auto;width:calc(100% - 5.5vh - 2.2vw);text-align:left;display:flex;justify-content:center;align-content:center;flex-direction:column}", ""]), t.locals = {
                teamHolder: "styles__teamHolder___11xsi-camelCase",
                teamContainer: "styles__teamContainer___3dT3x-camelCase",
                energyContainer: "styles__energyContainer___rR31w-camelCase",
                energyText: "styles__energyText___1uwus-camelCase",
                energyIcon: "styles__energyIcon___1HRmW-camelCase",
                teamBlook: "styles__teamBlook___4BQGU-camelCase",
                teamText: "styles__teamText___dAm74-camelCase",
                teamPlayersContainer: "styles__teamPlayersContainer___2wAXK-camelCase",
                playerContainer: "styles__playerContainer___1E6kQ-camelCase",
                playerContainerNo: "styles__playerContainerNo___ypbiN-camelCase",
                selected: "styles__selected___30Icr-camelCase",
                playerBlook: "styles__playerBlook___2EcNf-camelCase",
                playerText: "styles__playerText___26TNI-camelCase"
            }
        },
        vSJx: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__sidebar___1XqWi-camelCase{position:fixed;top:0;left:0;width:220px;height:100%;padding:20px 10px 20px 0;box-sizing:border-box;background-color:#9a49aa;box-shadow:inset -10px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;z-index:5}.styles__logo___16pGV-camelCase{width:80%;margin:0 auto 10px}.styles__bigButton___ifX-_-camelCase{margin:15px auto 10px}.styles__bigButtonInside___p39Zq-camelCase{font-family:Titan One,sans-serif;color:#fff;font-size:26px;text-shadow:2px 2px rgba(0,0,0,.2);height:40px;padding:0 15px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__bigIcon___2-Xcu-camelCase{font-size:20px;margin-right:10px}.styles__plusButton___2dH73-camelCase{background-color:#ff7b24;border-radius:5px;margin:15px auto 0;padding:5px 10px;font-size:18px;font-weight:700;color:#fff;display:flex;flex-direction:row;align-items:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__plusButton___2dH73-camelCase:hover{transform:scale(.95)}.styles__plusIcon___3DQkg-camelCase{margin-right:10px;font-size:18px}.styles__pageButton___1wFuu-camelCase{position:relative;display:flex;flex-direction:row;align-items:center;height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:#fff;transition:.2s linear}.styles__pageButton___1wFuu-camelCase:hover,.styles__pageSelected___MugaH-camelCase{background-color:#fff;color:#9a49aa}.styles__pageIcon___3OSy9-camelCase{font-size:22px;width:26px;text-align:center}.styles__pageText___1eo7q-camelCase{font-family:Nunito,sans-serif;margin-left:10px;font-size:20px}.styles__bottomRow___3OozA-camelCase{flex-direction:row;justify-content:space-evenly;width:100%;margin-top:auto}.styles__bottomRow___3OozA-camelCase,.styles__smallButton___sQuq8-camelCase{display:flex;align-items:center}.styles__smallButton___sQuq8-camelCase{width:30px;height:30px;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;text-decoration:none}.styles__bottomIcon___3Fswk-camelCase{color:#fff;font-size:20px}.styles__topRightRow___dQvxc-camelCase{position:absolute;top:0;right:0;display:flex;flex-direction:row;z-index:5}.styles__profileContainer___CSuIE-camelCase{min-width:200px;height:55px;margin-left:10px;background-color:#9a49aa;border-bottom-left-radius:10px;box-sizing:border-box;padding:0 10px 8px;box-shadow:inset 0 -8px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);justify-content:center;font-size:20px;color:#fff;position:relative}.styles__profileContainer___CSuIE-camelCase,.styles__profileRow___cJa4E-camelCase{display:flex;align-items:center}.styles__profileRow___cJa4E-camelCase{flex-direction:row;height:100%}.styles__profileBlook___37mfP-camelCase{width:30px;margin-right:10px}.styles__profileDropdownIcon___3iLIX-camelCase{margin-left:auto;padding-left:10px}.styles__profileDropdownMenu___2jUAA-camelCase{position:absolute;min-width:130px;right:5px;top:calc(100% - 7px);transition:.2s;transform:rotateX(-90deg);transform-origin:top center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__profileContainer___CSuIE-camelCase:focus>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase[focus-within]>.styles__profileDropdownMenu___2jUAA-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__profileContainer___CSuIE-camelCase:focus-within>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:focus>.styles__profileDropdownMenu___2jUAA-camelCase,.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__profileDropdownOption___ljZXD-camelCase{width:100%;background-color:#fff;font-size:18px;color:#3a3a3a;height:32px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;position:relative;text-decoration:none;transition:.2s}.styles__profileDropdownOption___ljZXD-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__profileDropdownOptionIcon___15VKX-camelCase{font-size:16px;width:22px;text-align:center;margin-right:7px;opacity:.8}.styles__mNavBar___1SC0e-camelCase{background-color:#9a49aa;width:100%;box-sizing:border-box;height:55px;padding:0 15px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:space-between;z-index:15;position:absolute;top:0;left:0;visibility:hidden}.styles__mLogo___34lD1-camelCase{width:150px}.styles__mHamburgerIcon___1Bz-E-camelCase{font-size:30px;color:#fff;width:40px;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__mSidebar___rQisY-camelCase{position:fixed;left:100vw;top:0;width:300px;height:100%;padding-top:20px;box-sizing:border-box;background-color:#9a49aa;overflow-x:hidden;overflow-y:scroll;z-index:20;display:flex;flex-direction:column;visibility:hidden;transition:transform .2s}.styles__closeIcon___IgsQm-camelCase{position:absolute;top:15px;right:25px;color:#fff;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}@media only screen and (max-width:850px){.styles__profileContainer___CSuIE-camelCase,.styles__sidebar___1XqWi-camelCase{visibility:hidden}.styles__mNavBar___1SC0e-camelCase,.styles__mSidebar___rQisY-camelCase{visibility:visible}.styles__noMobile___30L3d-camelCase{display:none}}", ""]), t.locals = {
                sidebar: "styles__sidebar___1XqWi-camelCase",
                logo: "styles__logo___16pGV-camelCase",
                bigButton: "styles__bigButton___ifX-_-camelCase",
                bigButtonInside: "styles__bigButtonInside___p39Zq-camelCase",
                bigIcon: "styles__bigIcon___2-Xcu-camelCase",
                plusButton: "styles__plusButton___2dH73-camelCase",
                plusIcon: "styles__plusIcon___3DQkg-camelCase",
                pageButton: "styles__pageButton___1wFuu-camelCase",
                pageSelected: "styles__pageSelected___MugaH-camelCase",
                pageIcon: "styles__pageIcon___3OSy9-camelCase",
                pageText: "styles__pageText___1eo7q-camelCase",
                bottomRow: "styles__bottomRow___3OozA-camelCase",
                smallButton: "styles__smallButton___sQuq8-camelCase",
                bottomIcon: "styles__bottomIcon___3Fswk-camelCase",
                topRightRow: "styles__topRightRow___dQvxc-camelCase",
                profileContainer: "styles__profileContainer___CSuIE-camelCase",
                profileRow: "styles__profileRow___cJa4E-camelCase",
                profileBlook: "styles__profileBlook___37mfP-camelCase",
                profileDropdownIcon: "styles__profileDropdownIcon___3iLIX-camelCase",
                profileDropdownMenu: "styles__profileDropdownMenu___2jUAA-camelCase",
                profileDropdownOption: "styles__profileDropdownOption___ljZXD-camelCase",
                profileDropdownOptionIcon: "styles__profileDropdownOptionIcon___15VKX-camelCase",
                mNavBar: "styles__mNavBar___1SC0e-camelCase",
                mLogo: "styles__mLogo___34lD1-camelCase",
                mHamburgerIcon: "styles__mHamburgerIcon___1Bz-E-camelCase",
                mSidebar: "styles__mSidebar___rQisY-camelCase",
                closeIcon: "styles__closeIcon___IgsQm-camelCase",
                noMobile: "styles__noMobile___30L3d-camelCase"
            }
        },
        y0MH: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2QX49-camelCase{height:10vh;width:90vw;margin:3vh auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__vsImg___3jvmf-camelCase{width:5vw;margin:0 3vw}", ""]), t.locals = {
                container: "styles__container___2QX49-camelCase",
                vsImg: "styles__vsImg___3jvmf-camelCase"
            }
        },
        y18I: function(e, t, a) {
            var s = a("t5EX");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        y7sT: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___F-l_7-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mainContainer___F-l_7-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__closeIcon___2QOPB-camelCase{position:absolute;top:15px;right:17px;font-size:26px;color:#3a3a3a;cursor:pointer;transition:.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__closeIcon___2QOPB-camelCase:focus,.styles__closeIcon___2QOPB-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__logoHeader___RXMe1-camelCase{height:53px;width:244px;margin:25px auto 15px}.styles__stepHeader___2w9rW-camelCase{font-size:38px;font-weight:700;margin:10px auto}.styles__stepDesc___1No_X-camelCase,.styles__stepHeader___2w9rW-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a}.styles__stepDesc___1No_X-camelCase{font-size:22px;margin:0 7.25% 10px}.styles__buttonContainer___3lLB0-camelCase{display:flex;flex-direction:row;width:90%;margin:20px 5%}.styles__button___2XIbe-camelCase{width:45%;height:100px;margin:0 2.5%;color:#666;border:2px solid #666;border-radius:6px;text-decoration:none;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.2s}.styles__button___2XIbe-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__userIcon___2rnWF-camelCase{font-size:40px}.styles__searchIcon___K1x1D-camelCase,.styles__userIcon___2rnWF-camelCase{margin:10px auto;line-height:40px}.styles__searchIcon___K1x1D-camelCase{font-size:36px}.styles__buttonText___3Miva-camelCase{font-size:22px;margin:2px auto 0}.styles__buttonText___3Miva-camelCase,.styles__nextButton___1uHi6-camelCase{font-family:Nunito,sans-serif}.styles__nextButton___1uHi6-camelCase{width:85.5%;height:50px;line-height:50px;margin:10px auto 25px;color:#666;font-size:26px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;border:2px solid #666;border-radius:6px;cursor:pointer;transition:.2s}.styles__nextButton___1uHi6-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__exportStep___2hhQ0-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__imageStep___2_hBc-camelCase,.styles__imageStep3___7dWar-camelCase{margin:15px auto 5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__imageStep3___7dWar-camelCase{width:530px;height:auto}.styles__exportInstructions___yJWKA-camelCase{font-size:18px;text-align:center;margin:5px 7.25% 10px}.styles__exportInstructions___yJWKA-camelCase,.styles__input___16Z20-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__input___16Z20-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:10px;width:calc(85.5% - 24px);height:200px;font-size:16px;line-height:20px;text-align:left;outline:none;resize:none}.styles__input___16Z20-camelCase:focus{border-color:#0bc2cf}.styles__stepRow___19C9G-camelCase{flex-direction:row}.styles__checkBox___2hPoD-camelCase,.styles__stepRow___19C9G-camelCase{display:flex;justify-content:center;align-items:center}.styles__checkBox___2hPoD-camelCase{width:20px;height:20px;border-width:2px;border-style:solid;border-radius:4px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__checkIcon___1TjIY-camelCase{font-size:14px;margin:auto}.styles__checkYes___Ophdg-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___3pChq-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__checkText___2YkWn-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;margin-left:10px}@media only screen and (max-width:600px){.styles__mainContainer___F-l_7-camelCase{min-width:100px;width:90%}.styles__searchIcon___K1x1D-camelCase{margin:10px auto 0}.styles__buttonText___3Miva-camelCase{line-height:23px}.styles__imageStep___2_hBc-camelCase,.styles__imageStep3___7dWar-camelCase{margin:15px auto 5px;width:90%}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___F-l_7-camelCase",
                closeIcon: "styles__closeIcon___2QOPB-camelCase",
                logoHeader: "styles__logoHeader___RXMe1-camelCase",
                stepHeader: "styles__stepHeader___2w9rW-camelCase",
                stepDesc: "styles__stepDesc___1No_X-camelCase",
                buttonContainer: "styles__buttonContainer___3lLB0-camelCase",
                button: "styles__button___2XIbe-camelCase",
                userIcon: "styles__userIcon___2rnWF-camelCase",
                searchIcon: "styles__searchIcon___K1x1D-camelCase",
                buttonText: "styles__buttonText___3Miva-camelCase",
                nextButton: "styles__nextButton___1uHi6-camelCase",
                exportStep: "styles__exportStep___2hhQ0-camelCase",
                imageStep: "styles__imageStep___2_hBc-camelCase",
                imageStep3: "styles__imageStep3___7dWar-camelCase",
                exportInstructions: "styles__exportInstructions___yJWKA-camelCase",
                input: "styles__input___16Z20-camelCase",
                stepRow: "styles__stepRow___19C9G-camelCase",
                checkBox: "styles__checkBox___2hPoD-camelCase",
                checkIcon: "styles__checkIcon___1TjIY-camelCase",
                checkYes: "styles__checkYes___Ophdg-camelCase",
                checkNo: "styles__checkNo___3pChq-camelCase",
                checkText: "styles__checkText___2YkWn-camelCase"
            }
        },
        yUSY: function(e, t, a) {
            var s = a("RIy+");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        zYB6: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                l = a("4HzQ"),
                i = a("T7Yb"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                u = function(e) {
                    var t = e.winner,
                        a = e.loser,
                        s = e.bothWin,
                        o = e.bothLose,
                        r = e.win,
                        i = e.safe;
                    return n.a.createElement("div", {
                        className: c.a.background
                    }, r ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: c.a.winnerBackground
                    }), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                        alt: "Background",
                        className: c.a.winnerOverlay
                    })) : n.a.createElement(n.a.Fragment, null, n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662759696/Media/br/Defeat_BG_Line_Overlay_V2.svg",
                        alt: "Sadness",
                        className: c.a.loserOverlay
                    }), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                        alt: "Waves",
                        className: c.a.loserOverlay2
                    })), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                        alt: "Background",
                        className: c.a.resultsOverlay
                    }), n.a.createElement("div", {
                        className: c.a.resultsText
                    }, "Match Results"), n.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow3
                    }), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400412/Media/br/Main_Victor_or_Defeat_Title_BG.svg",
                        alt: "Nameplate",
                        className: c.a.victoryTextBg
                    }), n.a.createElement("img", {
                        src: r ? "https://media.blooket.com/image/upload/v1663059931/Media/br/Victory_Text.png" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Defeated_Text.svg",
                        alt: r ? "Victory" : "Defeat",
                        className: c.a.victoryText
                    }), n.a.createElement("div", {
                        className: c.a.winnerBlookContainer
                    }, n.a.createElement("div", {
                        className: c.a.winnerCorrectContainer
                    }, n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerCorrectBg
                    }), n.a.createElement("img", {
                        src: t.correct ? "https://media.blooket.com/image/upload/v1662400414/Media/br/Green_Check.svg" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Red_X.svg",
                        alt: t.correct ? "Correct" : "Incorrect",
                        className: c.a.winnerCheck
                    }), n.a.createElement("div", {
                        className: c.a.winnerTime,
                        style: {
                            color: t.correct ? "#4fcb11" : "#ff1700"
                        }
                    }, "".concat((t.time / 1e3 || 0).toFixed(3), "s"))), n.a.createElement("div", {
                        className: c.a.winnerEnergyContainer
                    }, n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerCorrectBg
                    }), n.a.createElement("div", {
                        className: c.a.winnerEnergy
                    }, t.energy), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg",
                        alt: "Energy",
                        className: c.a.winnerEnergyIcon
                    })), n.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow2
                    }), n.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow1
                    }), n.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlook
                    })), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Orange_Nameplate_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerNameplate
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.winnerName,
                        mode: "single",
                        min: 1,
                        max: Object(m.D)("8vw"),
                        forceSingleModeWidth: !1
                    }, t.clone ? "".concat(t.name, " 👾") : t.name), n.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow3
                    }), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400412/Media/br/Side_Victor_or_Defeat_Title_BG.svg",
                        alt: "Nameplate",
                        className: c.a.defeatTextBg
                    }), n.a.createElement("img", {
                        src: s ? "https://media.blooket.com/image/upload/v1663059931/Media/br/Victory_Text.png" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Defeated_Text.svg",
                        alt: s ? "Victory" : "Defeat",
                        className: c.a.defeatText
                    }), n.a.createElement("div", {
                        className: c.a.loserBlookContainer
                    }, n.a.createElement("div", {
                        className: c.a.loserCorrectContainer
                    }, n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.loserCorrectBg
                    }), n.a.createElement("img", {
                        src: a.correct ? "https://media.blooket.com/image/upload/v1662400414/Media/br/Green_Check.svg" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Red_X.svg",
                        alt: a.correct ? "Correct" : "Incorrect",
                        className: c.a.loserCheck
                    }), n.a.createElement("div", {
                        className: c.a.loserTime,
                        style: {
                            color: a.correct ? "#4fcb11" : "#ff1700"
                        }
                    }, "".concat((a.time / 1e3 || 0).toFixed(3), "s"))), n.a.createElement("div", {
                        className: c.a.loserEnergyContainer
                    }, n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.loserCorrectBg
                    }), n.a.createElement("div", {
                        className: c.a.loserEnergy
                    }, a.energy), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                        alt: "Energy",
                        className: c.a.loserEnergyIcon
                    })), n.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow2
                    }), n.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow1
                    }), n.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlook
                    })), n.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936180/Media/br/Blue_Nameplate.svg",
                        alt: "Nameplate",
                        className: c.a.loserNameplate
                    }), n.a.createElement(l.Textfit, {
                        className: c.a.loserName,
                        mode: "single",
                        min: 1,
                        max: Object(m.D)("8vw"),
                        forceSingleModeWidth: !1
                    }, a.clone ? "".concat(a.name, " 👾") : a.name), o || s ? n.a.createElement("div", {
                        className: c.a.rightText
                    }, i ? "You Can't All Lose" : o ? "You Both Lose" : s ? "You Both Win" : "") : null)
                };
            u.propTypes = {
                winner: r.a.object,
                loser: r.a.object,
                bothWin: r.a.bool,
                bothLose: r.a.bool,
                win: r.a.bool,
                safe: r.a.bool
            }, t.a = u
        }
    }
]);