(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        "+39q": function(e, t, i) {
            var s = i("ZXFw");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "179K": function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                o = i("ANjH"),
                r = i("/MKj"),
                n = i("17x9"),
                l = i.n(n),
                c = i("Ty5D"),
                h = i("H1WH"),
                u = i("ZrUs"),
                d = i("oQ+7"),
                m = i("+39q"),
                p = i.n(m),
                g = i("Xst1"),
                f = i.n(g),
                b = i("XTAU"),
                y = i("2ZNs"),
                v = i("LHn/"),
                _ = i("74sb"),
                k = i("+fLB"),
                x = i("qnYv");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(i), !0).forEach((function(t) {
                        T(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function T(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function O(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
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
                    var i, s = S(e);
                    if (t) {
                        var a = S(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return P(this, i)
                }
            }

            function P(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return M(e)
            }

            function M(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
                    return a.a.createElement("div", {
                        className: p.a.statContainer
                    }, a.a.createElement("div", {
                        className: p.a.xpText
                    }, Object(_.v)(e.xp)), a.a.createElement("img", {
                        src: v.a.basic.xp,
                        alt: "Xp",
                        className: p.a.xpImage,
                        draggable: !1
                    }))
                },
                E = function(e) {
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
                    }(r, e);
                    var t, i, s, o = I(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(M(t)), t
                    }
                    return t = r, (i = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: j({}, this.props.client.corrects),
                                        i: j({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var i = 0,
                                        s = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        i += e, s += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        s += e
                                    }));
                                    var a = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: a,
                                        xp: this.props.client.standing[t].xp,
                                        playersDefeated: this.props.client.standing.length - a,
                                        correctAnswers: i,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: i,
                                            numQuestions: s,
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
                            x.a.put("/api/users/brawlstats", {
                                name: e,
                                place: this.stats.place,
                                xp: this.stats.xp,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? a.a.createElement("div", {
                                className: h.isMobile ? f.a.mBody : f.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), a.a.createElement(d.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? a.a.createElement(y.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(_.o)(this.state.me.xp), " XP"),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? a.a.createElement("div", {
                                className: f.a.blockedText
                            }, "You were blocked from this game.") : null) : a.a.createElement(c.a, {
                                to: "/play"
                            })
                        }
                    }]) && O(t.prototype, i), s && O(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(a.a.Component);
            E.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: u.a
                }, e)
            }))(Object(k.d)(E)))
        },
        "1pXr": function(e, t, i) {
            var s = i("qRPF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "7dx4": function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".tourSteps__centered___VRBCu-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}", ""]), t.locals = {
                centered: "tourSteps__centered___VRBCu-camelCase"
            }
        },
        "8UQz": function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__left___2S16Y-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__left___2S16Y-camelCase,.styles__standingContainer___1cyeV-camelCase{position:absolute;width:35vw}.styles__standingContainer___1cyeV-camelCase{height:calc(8vh + 20px);box-sizing:border-box;padding:7px 7px 13px;box-shadow:inset 0 -6px rgba(0,0,0,.2);background-color:#374154;border-radius:8px;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___1cyeV-camelCase:hover{opacity:.4}.styles__placeRow___LDHOy-camelCase{display:flex;flex-direction:row}.styles__placeText___45dYQ-camelCase{padding:.5vh 0 1vh .5vw;min-width:2vw;height:7vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___45dYQ-camelCase,.styles__superPlaceText___2Hc-6-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2Hc-6-camelCase{text-align:left;width:1.3vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___1LLFN-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___1kReH-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__xpContainer___3zhf0-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__xpText___yK60T-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__xpIcon___LzT7s-camelCase{height:70%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___3i8JD-camelCase{width:55vw;height:65%;box-sizing:border-box;position:absolute;left:42.5vw;top:7.5%;background-color:#374154;border-radius:8px;padding:10px 10px 20px;box-shadow:inset 0 -10px rgba(0,0,0,.2);overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___34DoD-camelCase::-webkit-scrollbar{display:none}.styles__leftCracks___2W65r-camelCase,.styles__rightCracks___3SqYw-camelCase{position:absolute;top:5%;height:90%}.styles__leftCracks___2W65r-camelCase{left:0}.styles__rightCracks___3SqYw-camelCase{right:0}.styles__noAlerts___2oyr8-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___26YSE-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___2JPVl-camelCase{font-family:Titan One,sans-serif;font-size:3vw}.styles__totalXpContainer___3OHDO-camelCase{background-color:#374154;padding:10px 10px 20px;box-shadow:inset 0 -10px rgba(0,0,0,.2);box-sizing:border-box;border-radius:6px;display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalXpText___NV1OT-camelCase{color:#fff;font-family:Titan One,sans-serif;font-size:4vw;z-index:1}.styles__totalXpIcon___mwQJz-camelCase{height:70%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}", ""]), t.locals = {
                left: "styles__left___2S16Y-camelCase",
                standingContainer: "styles__standingContainer___1cyeV-camelCase",
                placeRow: "styles__placeRow___LDHOy-camelCase",
                placeText: "styles__placeText___45dYQ-camelCase",
                superPlaceText: "styles__superPlaceText___2Hc-6-camelCase",
                blookBox: "styles__blookBox___1LLFN-camelCase",
                nameText: "styles__nameText___1kReH-camelCase",
                xpContainer: "styles__xpContainer___3zhf0-camelCase",
                xpText: "styles__xpText___yK60T-camelCase",
                xpIcon: "styles__xpIcon___LzT7s-camelCase",
                chatroom: "styles__chatroom___3i8JD-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___34DoD-camelCase",
                leftCracks: "styles__leftCracks___2W65r-camelCase",
                rightCracks: "styles__rightCracks___3SqYw-camelCase",
                noAlerts: "styles__noAlerts___2oyr8-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___26YSE-camelCase",
                noAlertsText: "styles__noAlertsText___2JPVl-camelCase",
                totalXpContainer: "styles__totalXpContainer___3OHDO-camelCase",
                totalXpText: "styles__totalXpText___NV1OT-camelCase",
                totalXpIcon: "styles__totalXpIcon___mwQJz-camelCase"
            }
        },
        KM4Z: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                o = i("ANjH"),
                r = i("/MKj"),
                n = i("17x9"),
                l = i.n(n),
                c = i("Ty5D"),
                h = i("4HzQ"),
                u = i("1F66"),
                d = i.n(u),
                m = i("ZRP+"),
                p = i("TSYQ"),
                g = i.n(p),
                f = i("wd/R"),
                b = i.n(f),
                y = (i("RiPy"), i("HbJ1")),
                v = i("+xn+"),
                _ = i("VgyX"),
                k = i("kQZX"),
                x = i("qFIf"),
                w = i("XTAU"),
                C = i("ca/f"),
                j = i("Xst1"),
                T = i.n(j),
                O = i("ODJL"),
                B = i.n(O),
                I = i("0oXL"),
                P = i("LHn/"),
                M = i("Afl9"),
                S = i("+fLB"),
                A = i("74sb"),
                E = i("KPA1");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(i), !0).forEach((function(t) {
                        D(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : N(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function D(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function F(e) {
                return function(e) {
                    if (Array.isArray(e)) return L(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || V(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || V(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                if (e) {
                    if ("string" == typeof e) return L(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? L(e, t) : void 0
                }
            }

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function q(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function X(e) {
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
                    var i, s = W(e);
                    if (t) {
                        var a = W(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return G(this, i)
                }
            }

            function G(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Y(e)
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q = function(e) {
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
                }(r, e);
                var t, i, s, o = X(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalXp: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = a.a.createRef(), t.getClients = t.getClients.bind(Y(t)), t.goNext = t.goNext.bind(Y(t)), t.addAlert = t.addAlert.bind(Y(t)), t.scrollToBottom = t.scrollToBottom.bind(Y(t)), t.changeMuted = t.changeMuted.bind(Y(t)), t.blockUser = t.blockUser.bind(Y(t)), t.audio = new Audio(M.a), t.audio.muted = t.state.muted, t
                }
                return t = r, (i = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .5, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.firebase.setStage({
                                    id: this.props.host.id,
                                    stage: "brawl"
                                }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                var t = 60 * this.props.host.settings.amount,
                                    i = 4;
                                this.setState({
                                    timer: b.a.duration(t, "seconds").format("mm:ss")
                                }), this.timerInterval = setInterval((function() {
                                    t -= 1, e.setState({
                                        timer: b.a.duration(t, "seconds").format("mm:ss")
                                    }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === i ? (e.getClients(!1), i = 4) : i -= 1
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
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(i) {
                            var s = i || {};
                            if (s && 0 !== Object.keys(s).length) {
                                var a = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    r = [];
                                Object.entries(s).forEach((function(e) {
                                    var i = U(e, 2),
                                        s = i[0],
                                        a = i[1];
                                    if (r.push({
                                            name: s,
                                            blook: a.b,
                                            xp: a.xp || 0
                                        }), a.up) {
                                        var o = a.up.split(":");
                                        2 === o.length && E.a[o[0]] && t.addAlert(s, a.b, "upgraded ".concat(E.a[o[0]].title, " to Level ").concat(o[1]), o[0])
                                    }
                                })), r.sort((function(e, t) {
                                    return t.xp - e.xp
                                }));
                                for (var n = 0, l = 0; l < r.length; l++) r[l].place = l + 1, n += Number(r[l].xp), a && r[l].xp >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext([].concat(r)) : t.setState({
                                    players: r,
                                    totalXp: n
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var i = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                xp: e.xp,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: i
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/brawl/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, i, s) {
                        var a = this,
                            o = [].concat(F(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: i,
                                info: s
                            }]),
                            r = Array.from(new Set(o.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        r.length > 15 && r.splice(0, 1), this.setState({
                            alerts: r
                        }, (function() {
                            return a.scrollToBottom()
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
                            i = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            s = t.length; - 1 !== i && (s = t[i].place, t.splice(i, 1)), t = t.map((function(e) {
                            return z(z({}, e), {}, {
                                place: e.place > s ? e.place - 1 : e.place
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
                        return this.props.host && this.props.host.settings ? a.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundImage: "url(https://media.blooket.com/image/upload/v1663050923/Media/survivor/FinalSnowTile.png)",
                                backgroundSize: 400,
                                backgroundPosition: "-100px -100px"
                            }
                        }, a.a.createElement(w.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), a.a.createElement(k.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(A.o)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), a.a.createElement("div", {
                            className: T.a.hostRegularBody
                        }, a.a.createElement(d.a, {
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
                                        ease: m.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: m.a
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
                            return a.a.createElement("div", {
                                className: g()(B.a.left, B.a.invisibleScrollbar)
                            }, t.map((function(t, i) {
                                var s = t.key,
                                    o = t.data,
                                    r = t.state,
                                    n = r.x,
                                    l = r.y;
                                return a.a.createElement("div", {
                                    key: s,
                                    style: {
                                        opacity: e.state.userToBlock === o.name ? .4 : null,
                                        transform: "translate(".concat(n, "vw, ").concat(l, "vh)")
                                    },
                                    className: B.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: o.name
                                        })
                                    }
                                }, i % 3 == 0 ? a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_left.svg",
                                    alt: "Cracks",
                                    className: B.a.leftCracks,
                                    style: {
                                        zIndex: -1
                                    },
                                    draggable: !1
                                }) : null, i % 4 == 1 ? a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_right.svg",
                                    alt: "Cracks",
                                    className: B.a.rightCracks,
                                    style: {
                                        zIndex: -1
                                    },
                                    draggable: !1
                                }) : null, a.a.createElement("div", {
                                    className: B.a.placeRow
                                }, a.a.createElement(h.Textfit, {
                                    className: B.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.D)("5vw")
                                }, o.place), a.a.createElement("div", {
                                    className: B.a.superPlaceText
                                }, Object(A.h)(o.place))), a.a.createElement(I.a, {
                                    name: o.blook,
                                    className: B.a.blookBox
                                }), a.a.createElement(h.Textfit, {
                                    className: B.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.D)("4vw")
                                }, o.name), a.a.createElement("div", {
                                    className: B.a.xpContainer
                                }, a.a.createElement(h.Textfit, {
                                    className: B.a.xpText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.D)("5vw")
                                }, o.xp < 1e4 ? Object(A.o)(o.xp) : Object(A.v)(o.xp)), a.a.createElement("img", {
                                    src: P.a.basic.xp,
                                    alt: "Xp",
                                    className: B.a.xpIcon,
                                    draggable: !1
                                })))
                            })))
                        })), a.a.createElement("div", {
                            className: g()(B.a.chatroom, B.a.invisibleScrollbar),
                            id: "alerts"
                        }, a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/LEADERBOARD_CRACKS_left.svg",
                            alt: "Cracks",
                            className: B.a.leftCracks,
                            draggable: !1
                        }), a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/LEADERBOARD_CRACKS_right.svg",
                            alt: "Cracks",
                            className: B.a.rightCracks,
                            draggable: !1
                        }), this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return a.a.createElement(x.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                night: !0
                            })
                        })) : a.a.createElement("div", {
                            className: B.a.noAlerts
                        }, a.a.createElement("i", {
                            className: g()(B.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), a.a.createElement("div", {
                            className: B.a.noAlertsText
                        }, "Waiting To Brawl..."))), a.a.createElement("div", {
                            className: B.a.totalXpContainer
                        }, a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_left.svg",
                            alt: "Cracks",
                            className: B.a.leftCracks,
                            draggable: !1
                        }), a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_right.svg",
                            alt: "Cracks",
                            className: B.a.rightCracks,
                            draggable: !1
                        }), a.a.createElement("div", {
                            className: B.a.totalXpText
                        }, Object(A.o)(this.state.totalXp)), a.a.createElement("img", {
                            src: P.a.basic.xp,
                            alt: "Xp",
                            className: B.a.totalXpIcon,
                            draggable: !1
                        }))), this.state.userToBlock ? a.a.createElement(C.a, {
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
                        }) : null) : a.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && q(t.prototype, i), s && q(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(a.a.Component);
            Q.propTypes = {
                host: l.a.object,
                firebase: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: v.b,
                    deleteHost: _.d,
                    setMuted: y.a
                }, e)
            }))(Object(S.d)(Q)))
        },
        KPA1: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return r
            })), i.d(t, "b", (function() {
                return n
            }));
            var s = i("74sb");

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }
            var r = {
                    egg: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Rapid Eggs",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Chicken.svg",
                        imgAng: 45,
                        levels: [{
                            desc: "Fire eggs in the direction you're moving.",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1e3,
                            intervalRate: 100,
                            speed: 600,
                            numProjectiles: 1,
                            width: 15,
                            lifespan: 1e3,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per egg",
                            dmg: 5
                        }, {
                            desc: "Rapid-Fire: Increase firing rate and piercing",
                            fireRate: 200,
                            maxTargets: 1
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per egg",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "+10 damage per egg",
                            dmg: 10
                        }, {
                            desc: "EGGS EGGS EGGS: Double the number of eggs fired",
                            numProjectiles: 4
                        }]
                    },
                    nut: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Crazy Acorns",
                        img: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Squirrel.svg",
                        levels: [{
                            desc: "Fire acorns at the nearest enemy",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1200,
                            intervalRate: 150,
                            speed: 450,
                            numProjectiles: 1,
                            width: 18,
                            lifespan: 1200,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more acorn",
                            numProjectiles: 1
                        }, {
                            desc: "Fire 1 more acorn",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per acorn",
                            dmg: 5
                        }, {
                            desc: "Burst Fire: Fire acorns in more frequent bursts",
                            fireRate: 200,
                            intervalRate: 100
                        }, {
                            desc: "Pass through 1 more enemy",
                            maxTargets: 1
                        }, {
                            desc: "Increase firing rate",
                            fireRate: 300
                        }, {
                            desc: "+5 damage per acorn",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Rapid Fire: Never stop firing acorns",
                            fireRate: 575
                        }]
                    },
                    slime: {
                        active: !0,
                        title: "Bouncing Slime",
                        img: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-01.svg",
                        levels: [{
                            desc: "Shoot out bouncy slime balls",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 3500,
                            intervalRate: 250,
                            speed: 500,
                            numProjectiles: 1,
                            width: 23,
                            lifespan: 2500,
                            knockback: 0
                        }, {
                            desc: "+5 damage per slime",
                            dmg: 5
                        }, {
                            desc: "Increase slime lifespan",
                            lifespan: 500
                        }, {
                            desc: "Increase fire rate",
                            fireRate: 500
                        }, {
                            desc: "More Slime: +2 Slime Balls",
                            numProjectiles: 2,
                            width: 5
                        }, {
                            desc: "+5 damage per slime",
                            dmg: 5
                        }, {
                            desc: "Increase slime lifespan",
                            lifespan: 500
                        }, {
                            desc: "+7 damage per slime",
                            dmg: 7
                        }, {
                            desc: "Increase fire rate",
                            fireRate: 500
                        }, {
                            desc: "Operation Slime: +2 Slime Balls",
                            numProjectiles: 2,
                            width: 5
                        }]
                    },
                    jesterBall: {
                        active: !0,
                        title: "Juggling Balls",
                        img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                        levels: [{
                            desc: "Throw arching Jester juggling balls",
                            dmg: 10,
                            maxTargets: 3,
                            fireRate: 4e3,
                            intervalRate: 200,
                            speed: 575,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2500,
                            texture: "jesterBall-1",
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Spiked Balls: +15 damage per ball",
                            texture: "jesterBall-2",
                            width: 10,
                            dmg: 15
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "+15 damage per ball",
                            dmg: 15
                        }, {
                            desc: "Wheel of Balls: Fire balls in all directions",
                            width: 15,
                            numProjectiles: 4,
                            evolution: 1,
                            speed: -150
                        }]
                    },
                    horseshoe: {
                        active: !0,
                        title: "Revolving Horseshoes",
                        img: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl1.svg",
                        levels: [{
                            desc: "Spin horseshoes around yourself",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 4e3,
                            speed: 400,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2e3,
                            targetRefresh: 1200,
                            texture: "horseshoe-1",
                            knockback: .3
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Increase damage by 5",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Steel Upgrade: Increase size and speed",
                            texture: "horseshoe-2",
                            width: 10,
                            speed: 50
                        }, {
                            desc: "Increase effect duration",
                            lifespan: 500
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Increase damage by 10",
                            dmg: 10
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Obsidian Upgrade: Increase size and speed",
                            texture: "horseshoe-3",
                            width: 10,
                            speed: 50,
                            dmg: 10
                        }]
                    },
                    shell: {
                        active: !0,
                        title: "Rebounding Shell",
                        img: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        levels: [{
                            desc: "Throw a shell that rebounds off enemies",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 3e3,
                            intervalRate: 250,
                            speed: 300,
                            numProjectiles: 1,
                            width: 30,
                            lifespan: 2e3,
                            texture: "shell-1",
                            evolution: 0,
                            knockback: 1
                        }, {
                            desc: "Throw 1 more shell",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per shell",
                            dmg: 5
                        }, {
                            desc: "Bounces for longer",
                            lifespan: 300,
                            maxTargets: 5
                        }, {
                            desc: "Auto-Target Shells: Shells guide themselves towards enemies",
                            texture: "shell-2",
                            evolution: 1,
                            width: 10,
                            speed: 50
                        }, {
                            desc: "Throw 1 more shell",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per shell",
                            dmg: 5
                        }, {
                            desc: "Bounces for longer",
                            lifespan: 500,
                            maxTargets: 10
                        }, {
                            desc: "+10 damage per shell",
                            dmg: 10
                        }, {
                            desc: "Destruction Shells: These shells stop for nothing",
                            texture: "shell-3",
                            evolution: 2,
                            width: 20,
                            speed: 50,
                            dmg: 10
                        }]
                    },
                    pizza: {
                        active: !0,
                        title: "Boomerang Pizza",
                        img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                        levels: [{
                            desc: "Throw a boomeranging pizza",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 2e3,
                            intervalRate: 150,
                            speed: 400,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2500,
                            texture: "pizza-1",
                            knockback: .3
                        }, {
                            desc: "Increase pizza size",
                            width: 10
                        }, {
                            desc: "+5 damage per slice",
                            dmg: 5
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Pepperoni Slice: Throw larger slices that deal more damage",
                            texture: "pizza-2",
                            width: 10,
                            dmg: 10
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Increase speed of throw",
                            speed: 100
                        }, {
                            desc: "Increase speed and damage",
                            speed: 100,
                            dmg: 5
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Combo Slice: Throw larger slices that deal more damage",
                            texture: "pizza-3",
                            width: 10,
                            dmg: 5
                        }]
                    },
                    banana: {
                        active: !0,
                        title: "Curving Banana",
                        img: "https://media.blooket.com/image/upload/v1655161187/Media/survivor/Orangutan_lvl1.svg",
                        levels: [{
                            desc: "Throw a curving banana",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 1500,
                            intervalRate: 100,
                            speed: 400,
                            numProjectiles: 1,
                            width: 50,
                            lifespan: 1500,
                            texture: "banana",
                            evolution: 0,
                            knockback: .3
                        }, {
                            desc: "Fire 1 more banana",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per banana",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more banana",
                            numProjectiles: 1
                        }, {
                            desc: "Go Bananas: Fire 3 more bananas",
                            numProjectiles: 3,
                            evolution: 1
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "+7 damage per banana",
                            dmg: 7
                        }, {
                            desc: "Increase banana speed",
                            speed: 100
                        }, {
                            desc: "+8 damage per banana",
                            dmg: 8
                        }, {
                            desc: "Banana Whirl: Fire 3 more bananas",
                            numProjectiles: 3,
                            evolution: 2
                        }]
                    },
                    arrow: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Speeding Arrows",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Elf_lvl1.svg",
                        levels: [{
                            desc: "Fire arrows in the direction you're moving",
                            dmg: 5,
                            maxTargets: 3,
                            fireRate: 1500,
                            speed: 600,
                            numProjectiles: 1,
                            width: 8,
                            lifespan: 1e3,
                            texture: "arrow-1",
                            evolution: 0,
                            knockback: .7
                        }, {
                            desc: "Fire one more arrow",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per arrow",
                            dmg: 5
                        }, {
                            desc: "Fire one more arrow",
                            numProjectiles: 1
                        }, {
                            desc: "Arrow Upgrade: Fire 2 more stronger arrows",
                            texture: "arrow-2",
                            numProjectiles: 2,
                            width: 4,
                            dmg: 5,
                            evolution: 1
                        }, {
                            desc: "Arrows pass thruogh 3 more enemies",
                            maxTargets: 3
                        }, {
                            desc: "Fire arrows more often",
                            fireRate: 300
                        }, {
                            desc: "Fire two more arrows",
                            numProjectiles: 2
                        }, {
                            desc: "Arrows pass thruogh 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Enchanted Upgrade: Fire 2 more stronger arrows",
                            texture: "arrow-3",
                            numProjectiles: 2,
                            width: 6,
                            dmg: 10
                        }]
                    },
                    peacock: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Peacock Feathers",
                        img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Peacock_lvl1.svg",
                        levels: [{
                            desc: "Fire peacock feathers at the nearest enemy",
                            dmg: 3,
                            maxTargets: 3,
                            fireRate: 3500,
                            intervalRate: 200,
                            pullBackRate: 4e3,
                            speed: 1e3,
                            numProjectiles: 1,
                            width: 15,
                            lifespan: 350,
                            texture: "peacock-1",
                            knockback: 0
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Better Feathers: Fire larger, more damaging feathers",
                            texture: "peacock-2",
                            width: 4,
                            dmg: 7,
                            lifespan: 150
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 1150
                        }, {
                            desc: "+10 damage per feather",
                            dmg: 10
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 1150
                        }, {
                            desc: "Feather Excellence: Fire larger, faster feathers",
                            texture: "peacock-3",
                            width: 6,
                            dmg: 10,
                            speed: 100
                        }]
                    },
                    bone: {
                        active: !0,
                        title: "Whirling Bones",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                        levels: [{
                            desc: "Summon bones that whirl across the screen",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 3e3,
                            speed: 600,
                            width: 35,
                            knockback: 0
                        }, {
                            desc: "+5 damage per bone",
                            dmg: 5
                        }, {
                            desc: "Summon larger bones",
                            width: 10
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "More Bones: Summon bones way more frequently",
                            fireRate: 1300
                        }, {
                            desc: "+5 damage per bone",
                            dmg: 5
                        }, {
                            desc: "Pass through 10 more enemies",
                            maxTargets: 10
                        }, {
                            desc: "Summon larger bones",
                            width: 10
                        }, {
                            desc: "+7 damage per bone",
                            dmg: 7
                        }, {
                            desc: "Bone Rampage: Summon bones even more often",
                            fireRate: 1200
                        }]
                    },
                    bee: {
                        active: !0,
                        title: "Buzzing Bees",
                        img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Bear_lvl1.svg",
                        levels: [{
                            desc: "Fire bees that buzz in a back and forth",
                            dmg: 5,
                            maxTargets: 3,
                            fireRate: 2500,
                            intervalRate: 100,
                            speed: 400,
                            waveAmplitude: 50,
                            numProjectiles: 1,
                            width: 35,
                            lifespan: 1200,
                            texture: "bee-1",
                            knockback: .5
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per bee",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "Stronger Bees: Increase buzzing and damage of bees",
                            dmg: 10,
                            waveAmplitude: 75,
                            texture: "bee-2",
                            width: 10
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Pass through 7 more enemies",
                            maxTargets: 7
                        }, {
                            desc: "+8 damage per bee",
                            dmg: 8
                        }, {
                            desc: "Bee Swarm: Double the number of bees",
                            numProjectiles: 4,
                            texture: "bee-3"
                        }]
                    },
                    bubble: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Booming Bubbles",
                        img: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Fish.svg",
                        levels: [{
                            desc: "Fire growing bubbles",
                            dmg: 1,
                            maxTargets: 1,
                            fireRate: 2e3,
                            intervalRate: 100,
                            speed: 450,
                            numProjectiles: 3,
                            width: 15,
                            lifespan: 900,
                            knockback: .3
                        }, {
                            desc: "+2 damage per bubble",
                            dmg: 2
                        }, {
                            desc: "Increase bubble size",
                            width: 5
                        }, {
                            desc: "Pass through 2 more targets",
                            maxTargets: 2
                        }, {
                            desc: "Bubble Blaster: Increase bubble spread",
                            evolution: 1,
                            numProjectiles: 3,
                            dmg: 2
                        }, {
                            desc: "+5 damage per bubble",
                            dmg: 5
                        }, {
                            desc: "Increase bubble size",
                            width: 5
                        }, {
                            desc: "Fire bubbles more often",
                            fireRate: 500
                        }, {
                            desc: "+10 damage per bubble",
                            dmg: 10
                        }, {
                            desc: "Bubble Storm: Fire bubbles from everywhere",
                            evolution: 2,
                            numProjectiles: 6,
                            intervalRate: 70,
                            fireRate: 500,
                            dmg: 3
                        }]
                    },
                    card: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Slicing Cards",
                        img: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                        levels: [{
                            desc: "Throw cards at enemies",
                            dmg: 3,
                            maxTargets: 1,
                            fireRate: 1200,
                            intervalRate: 300,
                            speed: 600,
                            numProjectiles: 1,
                            width: 25,
                            lifespan: 1e3,
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "+2 damage per card",
                            dmg: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Throw cards more often",
                            fireRate: 200
                        }, {
                            desc: "Four Suits: Fire 4 cards each time",
                            width: 5,
                            evolution: 1
                        }, {
                            desc: "+5 damage per card",
                            dmg: 5
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Throw cards more often",
                            fireRate: 350
                        }, {
                            desc: "+5 damage per card",
                            dmg: 5
                        }, {
                            desc: "Card Shuffle: Fire 2 bursts of cards",
                            width: 5,
                            numProjectiles: 2
                        }]
                    },
                    laser: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Rapid-fire Lasers",
                        img: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                        levels: [{
                            desc: "Fire lasers quickly",
                            dmg: 1,
                            maxTargets: 1,
                            fireRate: 300,
                            speed: 700,
                            width: 35,
                            numProjectiles: 1,
                            lifespan: 700,
                            texture: "laser-1",
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "+2 damage per laser",
                            dmg: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire lasers more quickly",
                            fireRate: 50
                        }, {
                            desc: "Double Laser: Shoot two lasers at once",
                            texture: "laser-2",
                            width: 5,
                            evolution: 1,
                            numProjectiles: 1
                        }, {
                            desc: "+2 damage per laser",
                            dmg: 2
                        }, {
                            desc: "Fire lasers more quickly",
                            fireRate: 50
                        }, {
                            desc: "+5 damage per laser",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Laser Cannon: Shoot a larger, more powerful laser",
                            texture: "laser-3",
                            width: 45,
                            dmg: 25,
                            maxTargets: 15,
                            evolution: 2,
                            numProjectiles: -1
                        }]
                    },
                    darkEnergy: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Dark Energy",
                        img: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/Witch_lvl1.svg",
                        levels: [{
                            desc: "Summon dark energy around you",
                            dmg: 3,
                            maxTargets: 1e3,
                            speed: 90,
                            width: 130,
                            targetRefresh: 1200,
                            texture: "darkEnergy-1",
                            knockback: .2
                        }, {
                            desc: "+2 damage",
                            dmg: 2
                        }, {
                            desc: "Increase size of energy",
                            width: 20
                        }, {
                            desc: "+5 damage",
                            dmg: 5
                        }, {
                            desc: "Dark Magic: Increase power and size of energy",
                            texture: "darkEnergy-2",
                            width: 25,
                            targetRefresh: 100
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Increase size of energy",
                            width: 40
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Increase size of energy",
                            width: 35
                        }, {
                            desc: "The Darkness: Increase power and size of energy",
                            texture: "darkEnergy-3",
                            width: 65,
                            targetRefresh: 100,
                            dmg: 5
                        }]
                    },
                    syrup: {
                        active: !0,
                        title: "Sticky Syrup",
                        img: "https://media.blooket.com/image/upload/v1657235019/Media/survivor/Maple_Bottle_V2.svg",
                        levels: [{
                            desc: "Drop syrup puddles around the map",
                            dmg: 10,
                            maxTargets: 1e3,
                            fireRate: 4e3,
                            intervalRate: 200,
                            bottleWidth: 40,
                            width: 100,
                            numProjectiles: 1,
                            targetRefresh: 500,
                            lifespan: 1500,
                            knockback: 0
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Increase syrup puddle size",
                            width: 20
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Big Puddles: Increase syrup puddle size",
                            width: 20
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Increase syrup puddle duration",
                            lifespan: 500
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Dropzone: Increase rate of syrup dropping",
                            fireRate: 1500,
                            dmg: 10
                        }]
                    },
                    birdFeather: {
                        active: !0,
                        title: "Flying Feathers",
                        img: "https://media.blooket.com/image/upload/v1655592799/Media/survivor/Bird_1.svg",
                        levels: [{
                            desc: "Summon a bird that shoots feathers",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1500,
                            birdSpeed: 100,
                            speed: 600,
                            birdWidth: 40,
                            width: 12,
                            numProjectiles: 1,
                            lifespan: 800,
                            evolution: 0,
                            knockback: 0
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Mighty Macaw: Recruit to fly around and fire feathers",
                            evolution: 1,
                            numProjectiles: 1,
                            width: 3
                        }, {
                            desc: "+5 damage per feather",
                            dmg: 5
                        }, {
                            desc: "Pass through 3 more targets",
                            maxTargets: 3
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 500
                        }, {
                            desc: "+8 damage per feather",
                            dmg: 8
                        }, {
                            desc: "Cool Cockatoo: Recruit to fly around and fire feathers",
                            evolution: 2,
                            numProjectiles: 1,
                            width: 3
                        }]
                    }
                },
                n = function(e, t) {
                    var i = function(e) {
                            return [1, 3, 5, 10, 15, 25, 35].includes(e)
                        }(t),
                        o = Object.entries(r).filter((function(s) {
                            var o = a(s, 2),
                                r = o[0],
                                n = o[1];
                            return n.active && (i ? !e[r] : e[r] && e[r] < 10) && (1 !== t || n.canBeFirst)
                        })).map((function(t) {
                            var i = a(t, 2),
                                s = i[0],
                                o = i[1];
                            return {
                                name: s,
                                title: o.title,
                                img: o.img,
                                imgAng: o.imgAng,
                                data: o.levels[e[s] || 0],
                                level: e[s] || 0
                            }
                        })),
                        n = Math.max(o.length, o.reduce((function(e, t) {
                            return e + (10 - t.level)
                        }), 0));
                    return o.forEach((function(e, t) {
                        o[t].rate = (10 - e.level) / n
                    })), Object(s.s)(o, Math.min(3, o.length))
                }
        },
        NS2D: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                o = i("ANjH"),
                r = i("/MKj"),
                n = i("Ty5D"),
                l = i("H1WH"),
                c = i("17x9"),
                h = i.n(c),
                u = i("lNlg"),
                d = i("TSYQ"),
                m = i.n(d),
                p = i("1O+K"),
                g = i.n(p);

            function f(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function b(e, t, i) {
                return t && f(e.prototype, t), i && f(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var y = new(b((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.player = null, this.scene = null, this.hp = 100, this.hpBar = null, this.playerDmgTimeout = null, this.abilities = {}, this.projectiles = {}, this.drops = {}, this.dmgCounts = {}, this.obstacles = null, this.enemies = null, this.allXP = null, this.texts = null, this.dir = {
                        x: 1,
                        y: 0
                    }, this.isPaused = !0, this.magnetTime = 0, this.level = 1, this.canvasWidth = 0, this.invulnerableTime = 0
                }))),
                v = i("74sb"),
                _ = i("mkC0"),
                k = i("KPA1"),
                x = function(e) {
                    return 0 === e.x ? -1 === e.y ? Math.PI / 2 : -Math.PI / 2 : 1 === e.x ? -1 === e.y ? Math.PI / 4 : 1 === e.y ? -Math.PI / 4 : 0 : -1 === e.x ? -1 === e.y ? 3 * Math.PI / 4 : 1 === e.y ? 3 * -Math.PI / 4 : -Math.PI : 0
                },
                w = function(e, t, i) {
                    var s = Number.MAX_SAFE_INTEGER,
                        a = null;
                    return t.getChildren().filter((function(e) {
                        return !(i || []).includes(e)
                    })).forEach((function(t) {
                        var i = g.a.Math.Distance.Between(e.x, e.y, t.x, t.y);
                        i < s && t.active && (s = i, a = t)
                    })), a
                },
                C = function(e, t) {
                    return t / e.width * (y.canvasWidth / 1500) * (y.canvasWidth < 550 ? 2 : y.canvasWidth < 800 ? 1.5 : 1)
                },
                j = function(e) {
                    return e * (y.canvasWidth / 1500) * (y.canvasWidth < 550 ? 2 : y.canvasWidth < 800 ? 1.5 : 1)
                },
                T = [{
                    x: -1,
                    y: 0
                }, {
                    x: -1,
                    y: 1
                }, {
                    x: 0,
                    y: 1
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 1,
                    y: -1
                }, {
                    x: 0,
                    y: -1
                }, {
                    x: -1,
                    y: -1
                }, {
                    x: -1,
                    y: 0
                }],
                O = function(e, t, i) {
                    var s = y.projectiles[e].get();
                    s && s.fire(t, i)
                },
                B = function(e, t, i) {
                    var s = y.obstacles.get();
                    s && s.spawn(e, t, i)
                },
                I = function(e, t) {
                    e.active && t.active && !t.noDmg && !t.targets.includes(e) && (t.targets.length + 1 >= y.abilities[t.name].maxTargets ? (t.setActive(!1), t.setVisible(!1)) : t.targets.push(e), e.receiveDamage(Math.min(e.hp, y.abilities[t.name].dmg), y.abilities[t.name].knockback), y.dmgCounts[t.name] += y.abilities[t.name].dmg)
                },
                P = function(e, t) {
                    e.active && t.active && t.dmgCd <= 0 && y.invulnerableTime <= 0 && (t.attack(), y.hp = Math.max(y.hp - t.dmg, 0), y.hpBar.draw(), y.player.setTintFill(16777215), clearTimeout(y.playerDmgTimeout), y.playerDmgTimeout = setTimeout((function() {
                        y.player.clearTint()
                    }), 100), y.hp <= 0 && y.scene.game.events.emit("game-over"))
                },
                M = function(e, t) {
                    t.setActive(!1), t.setVisible(!1)
                },
                S = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "egg"), this.setDepth(3), this.name = "egg", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(C(this, y.abilities.egg.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var e = y.player.width * y.player.scaleX;
                        this.setPosition(0 !== y.dir.y ? y.player.x + Object(v.q)(-e / 2, e / 2) : y.player.x, 0 !== y.dir.x ? y.player.y + Object(v.q)(-e / 2, e / 2) : y.player.y);
                        var t = x(y.dir);
                        y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(t), j(y.abilities.egg.speed), this.body.velocity), this.setRotation(t + Math.PI / 2), this.lifespan = y.abilities.egg.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                A = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "nut"), this.setScale(.5), this.setDepth(3), this.name = "nut", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(C(this, y.abilities.nut.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var e = y.player.width * y.player.scaleX,
                            t = y.player.height * y.player.scaleY;
                        this.setPosition(0 !== y.dir.y ? y.player.x + .2 * Object(v.q)(-e / 2, e / 2) : y.player.x, 0 !== y.dir.x ? y.player.y + .2 * Object(v.q)(-t / 2, t / 2) : y.player.y);
                        var i = w(y.player, y.enemies),
                            s = i ? g.a.Math.Angle.Between(y.player.x, y.player.y, i.x, i.y) : Object(v.q)(-Math.PI, Math.PI);
                        y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(s), j(y.abilities.nut.speed), this.body.velocity), this.setRotation(s - Math.PI / 2), this.lifespan = y.abilities.nut.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                E = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "slime"), this.setDepth(3), this.name = "slime", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture("slime-".concat(e + 1)), this.setScale(C(this, y.abilities.slime.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [];
                        var t = Object(v.q)(0, 360);
                        y.scene.physics.velocityFromAngle(t, j(y.abilities.slime.speed), this.body.velocity), this.lifespan = y.abilities.slime.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t;
                        var i = !1;
                        this.x - this.width * this.scaleX * .5 < y.scene.cameras.main.worldView.x ? (this.body.setVelocityX(Math.abs(this.body.velocity.x)), i = !0) : this.x + this.width * this.scaleX * .5 > y.scene.cameras.main.worldView.x + y.scene.cameras.main.worldView.width && (this.body.setVelocityX(-Math.abs(this.body.velocity.x)), i = !0), this.y - this.height * this.scaleY * .5 < y.scene.cameras.main.worldView.y ? (this.body.setVelocityY(Math.abs(this.body.velocity.y)), i = !0) : this.y + this.height * this.scaleY * .5 > y.scene.cameras.main.worldView.y + y.scene.cameras.main.worldView.height && (this.body.setVelocityY(-Math.abs(this.body.velocity.y)), i = !0), i && (this.targets = this.targets.fill(null)), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                R = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "jesterBall-1"), this.setDepth(3), this.name = "jesterBall", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        if (this.setTexture(y.abilities.jesterBall.texture), this.setScale(C(this, y.abilities.jesterBall.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [], 1 === y.abilities.jesterBall.evolution) y.scene.physics.velocityFromAngle(e, j(y.abilities.jesterBall.speed), this.body.velocity), this.body.setGravityY(0), this.body.setAngularVelocity(Object(v.q)(125, 175));
                        else {
                            var t = Object(v.q)(-115, -65);
                            y.scene.physics.velocityFromAngle(t, Object(v.q)(j(y.abilities.jesterBall.speed - 75), j(y.abilities.jesterBall.speed + 75)), this.body.velocity), this.body.setGravityY(700), this.body.setAngularVelocity((t > -90 ? 1 : -1) * Object(v.q)(125, 175))
                        }
                        this.lifespan = y.abilities.jesterBall.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                N = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "horseshoe-1"), this.setDepth(3), this.name = "horseshoe", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(y.abilities.horseshoe.texture), this.setScale(0), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [], this.targetRefresh = y.abilities.horseshoe.targetRefresh, this.posAngle = e, g.a.Math.RotateAroundDistance(this, y.player.x, y.player.y, g.a.Math.DegToRad(this.posAngle), j(150)), this.setRotation(g.a.Math.Angle.Between(y.player.x, y.player.y, this.x, this.y) - Math.PI / 2), this.lifespan = y.abilities.horseshoe.lifespan, y.scene.addTween({
                            targets: this,
                            scaleX: C(this, y.abilities.horseshoe.width),
                            scaleY: C(this, y.abilities.horseshoe.width),
                            ease: "linear",
                            duration: 250
                        }), y.scene.addTween({
                            targets: this,
                            scaleX: 0,
                            scaleY: 0,
                            ease: "linear",
                            duration: 250,
                            delay: y.abilities.horseshoe.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = y.abilities.horseshoe.targetRefresh);
                        var i = g.a.Math.GetSpeed(j(y.abilities.horseshoe.speed), 1) / (2 * Math.PI * j(150)) * 360;
                        this.posAngle += i * t, this.setPosition(y.player.x, y.player.y), g.a.Math.RotateAroundDistance(this, y.player.x, y.player.y, g.a.Math.DegToRad(this.posAngle), j(150)), this.setRotation(g.a.Math.Angle.Between(y.player.x, y.player.y, this.x, this.y) - Math.PI / 2), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                z = function(e, t) {
                    t.body.velocity.normalize().scale(j(y.abilities.shell.speed)), 2 === y.abilities.shell.evolution && t.targets.length > 0 && (t.targets = t.targets.fill(null), t.targets[t.targets.length - 1] = e)
                },
                D = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "shell-1"), this.setDepth(3), this.name = "shell", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(y.abilities.shell.texture), this.setScale(C(this, y.abilities.shell.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [], this.isTargeting = !1;
                        var e = Object(v.q)(-180, 180);
                        y.scene.physics.velocityFromAngle(e, j(y.abilities.shell.speed), this.body.velocity), this.body.setAngularVelocity((e > 0 ? 1 : -1) * Object(v.q)(720, 800)), this.lifespan = y.abilities.shell.lifespan
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, 0 !== y.abilities.shell.evolution) {
                            var i = w(this, y.enemies, this.targets);
                            if (i || this.isTargeting) {
                                var s = i ? g.a.Math.Angle.Between(this.x, this.y, i.x, i.y) : Object(v.q)(-Math.PI, Math.PI);
                                y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(s), j(y.abilities.shell.speed), this.body.velocity), i || (this.isTargeting = !1)
                            }
                        }
                        this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                F = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "pizza-1"), this.setDepth(3), this.name = "pizza", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(y.abilities.pizza.texture), this.setScale(C(this, y.abilities.pizza.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [], this.isTargeting = !1, this.hasChangedDir = !1;
                        var e = Object(v.q)(-180, 180);
                        y.scene.physics.velocityFromAngle(e, j(y.abilities.pizza.speed), this.body.velocity), this.dir = {
                            x: this.body.velocity.x > 0 ? 1 : -1,
                            y: this.body.velocity.y > 0 ? 1 : -1
                        }, this.body.setAcceleration(-1.3 * this.body.velocity.x, -1.3 * this.body.velocity.y), this.body.setAngularVelocity(1e3 * (e > 0 ? 1 : -1)), this.lifespan = y.abilities.pizza.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.hasChangedDir || (this.dir.x > 0 && this.body.velocity.x < 0 || this.dir.x < 0 && this.body.velocity.x > 0 || this.dir.y > 0 && this.body.velocity.y < 0 || this.dir.y < 0 && this.body.velocity.y > 0) && (this.hasChangedDir = !0, this.targets = []), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                U = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "banana-1"), this.setDepth(3), this.name = "banana", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("".concat(y.abilities.banana.texture, "-").concat(t + 1)), this.setScale(C(this, y.abilities.banana.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.targets = [], y.scene.physics.velocityFromAngle(e, j(y.abilities.banana.speed), this.body.velocity);
                        var i = new g.a.Math.Vector2(this.body.velocity);
                        i.normalizeLeftHand(), this.body.setAcceleration(2 * i.x, 2 * i.y), this.body.setAngularVelocity(-1e3), this.lifespan = y.abilities.banana.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t;
                        var i = new g.a.Math.Vector2(this.body.velocity);
                        i.normalizeLeftHand(), this.body.setAcceleration(2 * i.x, 2 * i.y), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                V = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "arrow-1"), this.setDepth(3), this.name = "arrow", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(y.abilities.arrow.texture), this.setScale(C(this, y.abilities.arrow.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(y.player.x, y.player.y);
                        var t = g.a.Math.RadToDeg(x(y.dir)) + e;
                        y.scene.physics.velocityFromAngle(t, j(y.abilities.arrow.speed), this.body.velocity), this.setRotation(g.a.Math.DegToRad(t) + Math.PI / 2), this.lifespan = y.abilities.arrow.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                L = function(e, t) {
                    t.isPulledBack && (t.setActive(!1), t.setVisible(!1))
                },
                q = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "peacock-1"), this.setDepth(3), this.name = "peacock", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(y.abilities.peacock.texture), this.setScale(C(this, y.abilities.peacock.width)), this.setActive(!0), this.setVisible(!0), this.isPulledBack = !1, this.noDmg = !1, this.targets = [], this.setPosition(y.player.x, y.player.y);
                        var e = w(y.player, y.enemies),
                            t = e ? g.a.Math.Angle.Between(y.player.x, y.player.y, e.x, e.y) : Object(v.q)(-Math.PI, Math.PI);
                        y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(t), j(y.abilities.peacock.speed), this.body.velocity), this.setRotation(t - Math.PI / 2), this.lifespan = y.abilities.peacock.lifespan
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, this.isPulledBack) {
                            var i = g.a.Math.Angle.Between(this.x, this.y, y.player.x, y.player.y);
                            y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(i), j(1.5 * y.abilities.peacock.speed), this.body.velocity), this.setRotation(i - Math.PI / 2)
                        }
                        this.lifespan <= 0 && !this.isPulledBack && (this.body.setVelocity(0), this.noDmg = !0)
                    },
                    pullBack: function() {
                        this.isPulledBack = !0, this.noDmg = !1, this.targets = []
                    }
                }),
                H = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "bone"), this.setDepth(3), this.name = "bone", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(C(this, y.abilities.bone.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(y.player.x, y.player.y);
                        var e = Object(v.q)(0, 2 * Math.PI),
                            t = Math.sqrt(Math.pow(y.scene.cameras.main.width / 2, 2) + Math.pow(y.scene.cameras.main.height / 2, 2)),
                            i = Object(v.q)(t, t + 100);
                        this.setPosition(y.player.x + i * Math.cos(e), y.player.y + i * Math.sin(e));
                        var s = g.a.Math.Angle.Between(this.x, this.y, y.player.x, y.player.y);
                        y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(s), j(y.abilities.bone.speed), this.body.velocity), this.body.setAngularVelocity((e > Math.PI ? 1 : -1) * Object(v.q)(600, 700)), this.lifespan = 2 * g.a.Math.Distance.Between(this.x, this.y, y.player.x, y.player.y) / j(y.abilities.bone.speed) * 1e3
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                X = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "bee-1"), this.setDepth(3), this.name = "bee", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(y.abilities.bee.texture), this.setScale(C(this, y.abilities.bee.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(y.player.x, y.player.y), this.straightX = this.x, this.straightY = this.y, this.dirAngle = g.a.Math.DegToRad(e), this.dx = Math.cos(this.dirAngle), this.dy = Math.sin(this.dirAngle), this.setRotation(this.dirAngle + Math.PI / 2), this.lifespan = y.abilities.bee.lifespan, this.duration = 0
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.duration += t, this.straightX += this.dx * (g.a.Math.GetSpeed(j(y.abilities.bee.speed), 1) * t), this.straightY += this.dy * (g.a.Math.GetSpeed(j(y.abilities.bee.speed), 1) * t), this.x = this.straightX + Math.sin(.01 * this.duration) * y.abilities.bee.waveAmplitude * Math.cos(Math.PI / 2 + Math.abs(this.dirAngle)), this.y = this.straightY + Math.sin(.01 * this.duration) * y.abilities.bee.waveAmplitude * Math.sin(Math.PI / 2 + Math.abs(this.dirAngle)), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                G = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "bubble"), this.setScale(.5), this.setDepth(3), this.name = "bubble", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setScale(C(this, y.abilities.bubble.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var t = y.player.width * y.player.scaleX,
                            i = y.player.height * y.player.scaleY;
                        this.setPosition(0 !== y.dir.y ? y.player.x + .2 * Object(v.q)(-t / 2, t / 2) : y.player.x, 0 !== y.dir.x ? y.player.y + .2 * Object(v.q)(-i / 2, i / 2) : y.player.y);
                        var s = 2 !== y.abilities.bubble.evolution ? w(y.player, y.enemies) : null,
                            a = s ? g.a.Math.RadToDeg(g.a.Math.Angle.Between(y.player.x, y.player.y, s.x, s.y)) : e,
                            o = 2 === y.abilities.bubble.evolution ? 180 : 1 === y.abilities.bubble.evolution ? 30 : 10,
                            r = Object(v.q)(a - o, a + o);
                        y.scene.physics.velocityFromAngle(r, j(y.abilities.bubble.speed), this.body.velocity), this.setRotation(Object(v.q)(-Math.PI, Math.PI)), this.lifespan = y.abilities.bubble.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.setScale(this.scale + .0014 * this.scale * t), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                Y = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "card-1"), this.setDepth(3), this.name = "card", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("card-".concat(t + 1)), this.setScale(C(this, y.abilities.card.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(y.player.x, y.player.y), y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(e), j(y.abilities.card.speed), this.body.velocity), this.setRotation(e + Math.PI / 2), this.lifespan = y.abilities.card.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                W = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "laser-1"), this.setDepth(3), this.name = "laser", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(y.abilities.laser.texture), this.setScale(C(this, y.abilities.laser.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var t = y.player.width * y.player.scaleX;
                        this.setPosition(0 !== y.dir.y && 1 === y.abilities.laser.evolution ? y.player.x + (0 === e ? 1 : -1) * y.dir.y * (t / 5) : y.player.x, 0 !== y.dir.x && 1 === y.abilities.laser.evolution ? y.player.y + (0 === e ? 1 : -1) * y.dir.x * (t / 5) : y.player.y);
                        var i = x(y.dir);
                        y.scene.physics.velocityFromAngle(g.a.Math.RadToDeg(i), j(y.abilities.laser.speed), this.body.velocity), this.setRotation(i), this.lifespan = y.abilities.laser.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                Q = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "darkEnergy-1"), this.setDepth(2), this.name = "darkEnergy", this.targets = []
                    },
                    fire: function() {
                        this.setScale(C(this, y.abilities.darkEnergy.width)), this.body.setCircle(this.width / 2), this.setActive(!0), this.setVisible(!0), this.targets = [], this.targetRefresh = y.abilities.darkEnergy.targetRefresh, this.setPosition(y.player.x, y.player.y), this.body.setAngularVelocity(-y.abilities.darkEnergy.speed)
                    },
                    update: function(e, t) {
                        this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = y.abilities.darkEnergy.targetRefresh), this.setPosition(y.player.x, y.player.y)
                    },
                    levelUp: function() {
                        this.setTexture(y.abilities.darkEnergy.texture), this.setScale(C(this, y.abilities.darkEnergy.width)), this.body.setCircle(this.width / 2)
                    }
                }),
                K = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "syrup"), this.setDepth(2), this.name = "syrup", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setScale(0), this.setAlpha(1), this.setActive(!0), this.setVisible(!0), this.setPosition(e.x, e.y), this.targets = [], this.targetRefresh = y.abilities.syrup.targetRefresh, this.lifespan = y.abilities.syrup.lifespan, y.scene.addTween({
                            targets: this,
                            scaleX: C(this, y.abilities.syrup.width),
                            scaleY: C(this, y.abilities.syrup.width),
                            ease: "linear",
                            duration: 250
                        }), y.scene.addTween({
                            targets: this,
                            alpha: 0,
                            ease: "linear",
                            duration: 250,
                            delay: y.abilities.syrup.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = y.abilities.syrup.targetRefresh), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                J = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "syrupBottle"), this.setDepth(3), this.name = "syrupBottle", this.lifespan = 0
                    },
                    fire: function(e) {
                        this.setScale(C(this, y.abilities.syrup.bottleWidth)), this.setActive(!0), this.setVisible(!0), this.setPosition(e.x, e.y - y.scene.cameras.main.worldView.height - 50), this.body.setVelocityY(1e3 * g.a.Math.GetSpeed(j(y.scene.cameras.main.worldView.height + 50), 1)), this.body.setAngularVelocity(Object(v.p)([1, -1]) * Object(v.q)(300, 400)), this.lifespan = 1e3
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, this.lifespan <= 0) {
                            this.setActive(!1), this.setVisible(!1);
                            var i = y.projectiles.syrup.get();
                            i && i.fire({
                                x: this.x,
                                y: this.y
                            })
                        }
                    }
                }),
                Z = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "shield"), this.setDepth(1), this.name = "shield", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(C(this, y.abilities.shield.width)), this.body.setCircle(this.width / 2), this.setAlpha(0), this.setActive(!0), this.setVisible(!0), this.targets = [], this.targetRefresh = y.abilities.shield.targetRefresh, this.health = y.abilities.shield.maxHealth, this.setPosition(y.player.x, y.player.y), this.lifespan = y.abilities.shield.lifespan, y.scene.addTween({
                            targets: this,
                            alpha: 1,
                            ease: "linear",
                            duration: 250
                        }), y.scene.addTween({
                            targets: this,
                            alpha: 0,
                            ease: "linear",
                            duration: 250,
                            delay: y.abilities.shield.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.setPosition(y.player.x, y.player.y), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                $ = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "bird-1"), this.setDepth(3), this.name = "bird"
                    },
                    fire: function(e, t) {
                        this.setTexture("bird-".concat(t + 1)), this.birdIndex = t, this.setScale(C(this, y.abilities.birdFeather.birdWidth)), this.setActive(!0), this.setVisible(!0), this.setPosition(y.player.x, y.player.y), this.fireCd = y.abilities.birdFeather.fireRate, this.posAngle = e, g.a.Math.RotateAroundDistance(this, y.player.x, y.player.y, g.a.Math.DegToRad(this.posAngle), j(200)), this.setRotation(g.a.Math.Angle.Between(y.player.x, y.player.y, this.x, this.y) - Math.PI)
                    },
                    update: function(e, t) {
                        this.fireCd -= t;
                        var i = g.a.Math.GetSpeed(j(y.abilities.birdFeather.birdSpeed), 1) / (2 * Math.PI * j(200)) * 360;
                        if (this.posAngle += i * t, this.setPosition(y.player.x, y.player.y), g.a.Math.RotateAroundDistance(this, y.player.x, y.player.y, g.a.Math.DegToRad(this.posAngle), j(200)), this.setRotation(g.a.Math.Angle.Between(y.player.x, y.player.y, this.x, this.y) - Math.PI), this.fireCd <= 0) {
                            this.fireCd = y.abilities.birdFeather.fireRate;
                            for (var s = 0; s < y.abilities.birdFeather.numProjectiles; s++) {
                                var a = y.projectiles.birdFeather.get();
                                a && a.fire(this, s * (360 / y.abilities.birdFeather.numProjectiles) + g.a.Math.RadToDeg(this.rotation) - 90)
                            }
                        }
                    }
                }),
                ee = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "birdFeather-1"), this.setDepth(3), this.name = "birdFeather", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("birdFeather-".concat(e.birdIndex + 1)), this.setScale(C(this, y.abilities.birdFeather.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(e.x, e.y), y.scene.physics.velocityFromAngle(t, j(y.abilities.birdFeather.speed), this.body.velocity), this.setRotation(g.a.Math.DegToRad(t) + Math.PI / 2), this.lifespan = y.abilities.birdFeather.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                te = new g.a.Class({
                    Extends: g.a.GameObjects.Text,
                    initialize: function() {
                        g.a.GameObjects.Text.call(this, y.scene, 0, 0, "", {
                            fontFamily: "Arial",
                            fontSize: j(32),
                            color: "#fff",
                            align: "center"
                        }), this.style.stroke = "#3a3a3a", this.style.strokeThickness = 4, this.setOrigin(.5), this.setDepth(15)
                    },
                    show: function(e, t, i) {
                        var s;
                        this.setActive(!0), this.setVisible(!0), this.setText(i), this.setScale(.4), this.setColor((s = Number(i)) <= 10 ? "#fff" : s <= 30 ? "#ff9933" : "#ff3333"), this.setPosition(e + j(Object(v.q)(-30, 30)), t + j(Object(v.q)(-15, 45))), y.scene.addTween({
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
                }),
                ie = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), y.scene.game.events.emit("xp", t.val))
                },
                se = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "xp-1"), this.setScale(C(this, 20)), this.setDepth(1)
                    },
                    spawn: function(e, t, i) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.body.setVelocity(0), this.isMoving = !1, this.val = i, this.backwardsTime = 150, 1 === i ? this.setTexture("xp-1") : i <= 3 ? this.setTexture("xp-2") : this.setTexture("xp-3")
                    },
                    update: function(e, t) {
                        if (this.isMoving) {
                            var i = g.a.Math.Angle.Between(this.x, this.y, y.player.x, y.player.y);
                            this.dx = Math.cos(i), this.dy = Math.sin(i);
                            var s = j(250);
                            this.backwardsTime = Math.max(0, this.backwardsTime - t), this.body.setVelocity(this.dx * s * (this.backwardsTime ? -1 : 1), this.dy * s * (this.backwardsTime ? -1 : 1))
                        } else {
                            g.a.Math.Distance.Between(y.player.x, y.player.y, this.x, this.y) < j(y.magnetTime > 0 ? 2500 : 150) && (this.isMoving = !0)
                        }
                    }
                }),
                ae = {
                    slime: {
                        texture: "slime",
                        width: 50,
                        hp: 5,
                        speed: 60,
                        xp: 1,
                        dmg: 5
                    },
                    bat: {
                        texture: "bat",
                        width: 60,
                        hp: 20,
                        speed: 50,
                        xp: 1,
                        dmg: 10
                    },
                    fossil: {
                        texture: "fossil",
                        width: 80,
                        hp: 40,
                        speed: 40,
                        xp: 1,
                        dmg: 10
                    },
                    bush: {
                        texture: "bush",
                        width: 70,
                        hp: 50,
                        speed: 50,
                        xp: 1,
                        dmg: 20
                    },
                    bug: {
                        texture: "bug",
                        width: 60,
                        hp: 70,
                        speed: 65,
                        xp: 1,
                        dmg: 5
                    },
                    crab: {
                        texture: "crab",
                        width: 80,
                        hp: 100,
                        speed: 50,
                        xp: 1,
                        dmg: 10
                    },
                    "troll-1": {
                        texture: "troll-1",
                        width: 70,
                        hp: 120,
                        speed: 55,
                        xp: 1,
                        dmg: 5
                    },
                    "troll-2": {
                        texture: "troll-2",
                        width: 90,
                        hp: 200,
                        speed: 40,
                        xp: 1,
                        dmg: 10
                    },
                    elemental: {
                        texture: "elemental",
                        width: 80,
                        hp: 300,
                        speed: 60,
                        xp: 1,
                        dmg: 10
                    },
                    rock: {
                        texture: "rock",
                        width: 100,
                        hp: 500,
                        speed: 45,
                        xp: 2,
                        dmg: 20
                    },
                    yeti: {
                        texture: "yeti",
                        width: 140,
                        hp: 1e3,
                        speed: 40,
                        xp: 3,
                        dmg: 30
                    },
                    "red-slime": {
                        texture: "red-slime",
                        width: 120,
                        hp: 400,
                        speed: 40,
                        xp: 3,
                        dmg: 30
                    },
                    "giant-crab": {
                        texture: "giant-crab",
                        width: 140,
                        hp: 1e3,
                        speed: 40,
                        xp: 5,
                        dmg: 30
                    },
                    "giant-troll": {
                        texture: "giant-troll",
                        width: 160,
                        hp: 2e3,
                        speed: 40,
                        xp: 5,
                        dmg: 30
                    },
                    "giant-rock": {
                        texture: "giant-rock",
                        width: 180,
                        hp: 4500,
                        speed: 35,
                        xp: 7,
                        dmg: 30
                    },
                    "giant-yeti": {
                        texture: "giant-yeti",
                        width: 220,
                        hp: 7500,
                        speed: 35,
                        xp: 10,
                        dmg: 30
                    }
                },
                oe = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "bat"), this.setDepth(2)
                    },
                    start: function(e) {
                        var t = ae[e];
                        this.setTexture(t.texture), this.setScale(C(this, t.width)), this.body.setSize(t.width, t.width), this.body.setOffset(0, t.width * (1 / 7)), this.hp = t.hp, this.speed = t.speed, this.val = t.xp, this.dmg = t.dmg, this.dmgCd = 300, this.backwardsTime = 0, this.setActive(!0), this.setVisible(!0);
                        var i = Object(v.q)(0, 2 * Math.PI),
                            s = Math.sqrt(Math.pow(y.scene.cameras.main.width / 2, 2) + Math.pow(y.scene.cameras.main.height / 2, 2)),
                            a = Object(v.q)(s, s + j(400));
                        this.setPosition(y.player.x + a * Math.cos(i), y.player.y + a * Math.sin(i))
                    },
                    receiveDamage: function(e, t) {
                        if (this.hp -= e, function(e, t, i) {
                                if (!(y.texts.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 30)) {
                                    var s = y.texts.get();
                                    s && s.show(e, t, i)
                                }
                            }(this.x, this.y - 50, e), this.hp <= 0) {
                            if (this.setActive(!1), this.setVisible(!1), y.enemies.getChildren().filter((function(e) {
                                    return e.active
                                })).length < 500) {
                                var i = y.allXP.get();
                                i && i.spawn(this.x, this.y, this.val)
                            }
                            if (0 === Object(v.r)(0, 150)) {
                                var s = y.drops.cheese.get();
                                s && s.spawn(this.x, this.y)
                            } else if (0 === Object(v.r)(0, 400) && y.level < 51) {
                                var a = y.drops.magnet.get();
                                a && a.spawn(this.x, this.y)
                            }
                            this.destroy()
                        } else this.backwardsTime = 100 * t
                    },
                    attack: function() {
                        this.backwardsTime = 100, this.dmgCd = 300
                    },
                    update: function(e, t) {
                        var i = g.a.Math.Angle.Between(this.x, this.y, y.player.x, y.player.y);
                        this.dx = Math.cos(i), this.dy = Math.sin(i), this.backwardsTime = Math.max(0, this.backwardsTime - t), this.dmgCd -= t, this.body.setVelocity(this.dx * j(this.speed) * (this.backwardsTime ? -5 : 1), this.dy * j(this.speed) * (this.backwardsTime ? -5 : 1))
                    }
                }),
                re = {
                    tile: {
                        url: "https://media.blooket.com/image/upload/v1663050923/Media/survivor/FinalSnowTile.png",
                        width: 400,
                        nonVector: !0
                    },
                    egg: {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Chicken.svg",
                        width: 15,
                        height: 20
                    },
                    nut: {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Squirrel.svg",
                        width: 18,
                        height: 21
                    },
                    "slime-1": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-01.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-2": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-02.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-3": {
                        url: "https://media.blooket.com/image/upload/v1655161192/Media/survivor/Slime-03.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-4": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-04.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-5": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-05.svg",
                        width: 33,
                        height: 33
                    },
                    "jesterBall-1": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                        width: 40,
                        height: 40
                    },
                    "jesterBall-2": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl5.svg",
                        width: 65,
                        height: 63
                    },
                    "xp-1": {
                        url: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                        width: 20,
                        height: 25
                    },
                    "xp-2": {
                        url: "https://media.blooket.com/image/upload/v1655233785/Media/survivor/xp/Red_xp_2.svg",
                        width: 20,
                        height: 25
                    },
                    "xp-3": {
                        url: "https://media.blooket.com/image/upload/v1663039631/Media/survivor/xp/New_Exp_Points-02.svg",
                        width: 20,
                        height: 25
                    },
                    "horseshoe-1": {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl1.svg",
                        width: 40,
                        height: 40
                    },
                    "horseshoe-2": {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl5.svg",
                        width: 50,
                        height: 50
                    },
                    "horseshoe-3": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Horse_lvl10.svg",
                        width: 60,
                        height: 60
                    },
                    "shell-1": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        width: 30,
                        height: 35
                    },
                    "shell-2": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl5.svg",
                        width: 40,
                        height: 46
                    },
                    "shell-3": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl10.svg",
                        width: 60,
                        height: 62
                    },
                    "pizza-1": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                        width: 50,
                        height: 55
                    },
                    "pizza-2": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl5.svg",
                        width: 60,
                        height: 66
                    },
                    "pizza-3": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl10.svg",
                        width: 70,
                        height: 76
                    },
                    "banana-1": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-05.svg",
                        width: 50,
                        height: 40
                    },
                    "banana-2": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-02.svg",
                        width: 50,
                        height: 48
                    },
                    "banana-3": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-04.svg",
                        width: 50,
                        height: 46
                    },
                    "arrow-1": {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Elf_lvl1.svg",
                        width: 8,
                        height: 46
                    },
                    "arrow-2": {
                        url: "https://media.blooket.com/image/upload/v1655161326/Media/survivor/Elf_lvl5.svg",
                        width: 12,
                        height: 50
                    },
                    "arrow-3": {
                        url: "https://media.blooket.com/image/upload/v1655161326/Media/survivor/Elf_lvl10.svg",
                        width: 18,
                        height: 57
                    },
                    "peacock-1": {
                        url: "https://media.blooket.com/image/upload/v1658214638/Media/survivor/Peacock_Feather-01.svg",
                        width: 15,
                        height: 41
                    },
                    "peacock-2": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Peacock_Feather-02.svg",
                        width: 19,
                        height: 41
                    },
                    "peacock-3": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Peacock_Feather-03.svg",
                        width: 25,
                        height: 47
                    },
                    bone: {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                        width: 55,
                        height: 115
                    },
                    "bee-1": {
                        url: "https://media.blooket.com/image/upload/v1663016775/Media/survivor/Bee_lvl1_v2.svg",
                        width: 46,
                        height: 44
                    },
                    "bee-2": {
                        url: "https://media.blooket.com/image/upload/v1663016779/Media/survivor/Bee_lvl5_v2.svg",
                        width: 45,
                        height: 30
                    },
                    "bee-3": {
                        url: "https://media.blooket.com/image/upload/v1663016784/Media/survivor/Bee_lvl10_v2.svg",
                        width: 45,
                        height: 28
                    },
                    bubble: {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Fish.svg",
                        width: 50,
                        height: 50
                    },
                    "card-1": {
                        url: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                        width: 35,
                        height: 48
                    },
                    "card-2": {
                        url: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-04.svg",
                        width: 35,
                        height: 48
                    },
                    "card-3": {
                        url: "https://media.blooket.com/image/upload/v1657235024/Media/survivor/cards-07.svg",
                        width: 35,
                        height: 48
                    },
                    "card-4": {
                        url: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/cards-03.svg",
                        width: 35,
                        height: 48
                    },
                    "laser-1": {
                        url: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                        width: 35,
                        height: 21
                    },
                    "laser-2": {
                        url: "https://media.blooket.com/image/upload/v1658214638/Media/survivor/Laser_lvl5.svg",
                        width: 40,
                        height: 27
                    },
                    "laser-3": {
                        url: "https://media.blooket.com/image/upload/v1657235020/Media/survivor/Laser_lvl10.svg",
                        width: 50,
                        height: 55
                    },
                    "darkEnergy-1": {
                        url: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/Witch_lvl1.svg",
                        width: 145,
                        height: 145
                    },
                    "darkEnergy-2": {
                        url: "https://media.blooket.com/image/upload/v1657312519/Media/survivor/Witch_lvl5.svg",
                        width: 248,
                        height: 248
                    },
                    "darkEnergy-3": {
                        url: "https://media.blooket.com/image/upload/v1657235022/Media/survivor/Witch_lvl10.svg",
                        width: 285,
                        height: 285
                    },
                    syrupBottle: {
                        url: "https://media.blooket.com/image/upload/v1657235019/Media/survivor/Maple_Bottle_V2.svg",
                        width: 40,
                        height: 36
                    },
                    syrup: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Moose_v3.svg",
                        width: 140,
                        height: 140
                    },
                    shield: {
                        url: "https://media.blooket.com/image/upload/v1655592801/Media/survivor/Robot.svg",
                        width: 140,
                        height: 140
                    },
                    "bird-1": {
                        url: _.a.Parrot,
                        width: 40,
                        height: 46
                    },
                    "bird-2": {
                        url: _.a.Macaw,
                        width: 40,
                        height: 46
                    },
                    "bird-3": {
                        url: _.a.Cockatoo,
                        width: 40,
                        height: 46
                    },
                    "birdFeather-1": {
                        url: "https://media.blooket.com/image/upload/v1655592799/Media/survivor/Bird_1.svg",
                        width: 18,
                        height: 45
                    },
                    "birdFeather-2": {
                        url: "https://media.blooket.com/image/upload/v1655592800/Media/survivor/Bird_4.svg",
                        width: 18,
                        height: 45
                    },
                    "birdFeather-3": {
                        url: "https://media.blooket.com/image/upload/v1655592800/Media/survivor/Bird_5.svg",
                        width: 18,
                        height: 45
                    },
                    cheese: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Cheese_Blook_2.svg",
                        width: 35,
                        height: 40
                    },
                    magnet: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Magnet_2.svg",
                        width: 35,
                        height: 40
                    },
                    chick: {
                        url: _.a.Chick,
                        width: 60,
                        height: 69
                    },
                    slime: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Ice_Slime.svg",
                        width: 50,
                        height: 58
                    },
                    bat: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Bat.svg",
                        width: 60,
                        height: 69
                    },
                    fossil: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Fossil.svg",
                        width: 80,
                        height: 92
                    },
                    bush: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Bush_Monster.svg",
                        width: 70,
                        height: 91
                    },
                    bug: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Bug.svg",
                        width: 60,
                        height: 69
                    },
                    crab: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Crab.svg",
                        width: 80,
                        height: 92
                    },
                    "giant-crab": {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Crab.svg",
                        width: 140,
                        height: 161
                    },
                    "troll-1": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_2.svg",
                        width: 70,
                        height: 91
                    },
                    "troll-2": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_1.svg",
                        width: 90,
                        height: 104
                    },
                    "giant-troll": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_1.svg",
                        width: 160,
                        height: 184
                    },
                    elemental: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Elemental.svg",
                        width: 80,
                        height: 92
                    },
                    rock: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Rock_Monster.svg",
                        width: 100,
                        height: 115
                    },
                    "giant-rock": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Rock_Monster.svg",
                        width: 180,
                        height: 207
                    },
                    yeti: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Yeti.svg",
                        width: 140,
                        height: 161
                    },
                    "giant-yeti": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Yeti.svg",
                        width: 220,
                        height: 253
                    },
                    "red-slime": {
                        url: "https://media.blooket.com/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
                        width: 120,
                        height: 138
                    },
                    "obstacle-1": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_1.svg",
                        width: 100,
                        height: 78,
                        hitbox: {
                            x: 80,
                            y: 50
                        }
                    },
                    "obstacle-2": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_2.svg",
                        width: 85,
                        height: 169,
                        hitbox: {
                            x: 60,
                            y: 140
                        }
                    },
                    "obstacle-3": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_3_v1.svg",
                        width: 100,
                        height: 105,
                        hitbox: {
                            x: 80,
                            y: 75
                        }
                    },
                    "obstacle-4": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_4.svg",
                        width: 100,
                        height: 88,
                        hitbox: {
                            x: 80,
                            y: 63
                        }
                    },
                    "obstacle-5": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_5.svg",
                        width: 100,
                        height: 70,
                        hitbox: {
                            x: 80,
                            y: 45
                        }
                    }
                },
                ne = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "obstacle-1"), this.setDepth(13)
                    },
                    spawn: function(e, t, i) {
                        this.setTexture(e), this.setScale(C(this, re[e].width) * Object(v.q)(.95, 1.2));
                        var s = re[e].hitbox;
                        this.body.setSize(s.x, s.y, !0), this.setPosition(t, i)
                    }
                }),
                le = [{
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 500
                }, {
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 450
                }, {
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 400
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [10, 10],
                    interval: 400
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [10, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 20],
                    interval: 350
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 2],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 4],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 6],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 8],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 10],
                    interval: 300
                }, {
                    enemies: ["bat", "red-slime"],
                    amounts: [50, 1],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [25],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [30],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [35],
                    interval: 250
                }, {
                    enemies: ["fossil", "bush"],
                    amounts: [40, 4],
                    interval: 250
                }, {
                    enemies: ["fossil", "bush"],
                    amounts: [30, 10],
                    interval: 250
                }, {
                    enemies: ["bush"],
                    amounts: [35],
                    interval: 200
                }, {
                    enemies: ["bush"],
                    amounts: [45],
                    interval: 200
                }, {
                    enemies: ["bush"],
                    amounts: [55],
                    interval: 200
                }, {
                    enemies: ["bug"],
                    amounts: [40],
                    interval: 200
                }, {
                    enemies: ["bug", "giant-crab"],
                    amounts: [40, 1],
                    interval: 200
                }, {
                    enemies: ["bug"],
                    amounts: [45],
                    interval: 200
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 5],
                    interval: 150
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 10],
                    interval: 150
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 15],
                    interval: 150
                }, {
                    enemies: ["crab"],
                    amounts: [35],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [40],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [45],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [50],
                    interval: 100
                }, {
                    enemies: ["troll-1"],
                    amounts: [35],
                    interval: 100
                }, {
                    enemies: ["troll-1", "giant-troll"],
                    amounts: [45, 1],
                    interval: 75
                }, {
                    enemies: ["troll-1"],
                    amounts: [45],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [45, 5],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 5],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 10],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 20],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 25],
                    interval: 75
                }, {
                    enemies: ["troll-2", "elemental"],
                    amounts: [50, 10],
                    interval: 75
                }, {
                    enemies: ["elemental"],
                    amounts: [35],
                    interval: 75
                }, {
                    enemies: ["elemental"],
                    amounts: [45],
                    interval: 75
                }, {
                    enemies: ["elemental", "giant-rock"],
                    amounts: [55, 1],
                    interval: 50
                }, {
                    enemies: ["elemental"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [50, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [60, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [60, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock", "giant-yeti"],
                    amounts: [60, 20, 1],
                    interval: 50
                }, {
                    enemies: ["rock"],
                    amounts: [55],
                    interval: 50
                }, {
                    enemies: ["rock", "yeti"],
                    amounts: [70, 5],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [30],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [45],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }],
                ce = new g.a.Class({
                    Extends: g.a.GameObjects.Graphics,
                    initialize: function() {
                        g.a.GameObjects.Graphics.call(this, y.scene, 0, 0), this.setDepth(15)
                    },
                    draw: function() {
                        this.clear();
                        var e = y.player.width * y.player.scaleX,
                            t = j(10),
                            i = y.player.x,
                            s = y.player.y + j(40);
                        this.setPosition(i - (e + t) / 2, s), this.fillStyle(0), this.fillRect(0, 0, e + t, j(10)), this.fillStyle(65280), this.fillRect(0, 0, (e + t) * (y.hp / 100), j(10))
                    }
                }),
                he = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), y.hp = Math.min(100, y.hp + 15))
                },
                ue = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "cheese"), this.setScale(C(this, 35)), this.setDepth(1)
                    },
                    spawn: function(e, t) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t)
                    }
                }),
                de = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), y.magnetTime = 1500)
                },
                me = new g.a.Class({
                    Extends: g.a.GameObjects.Image,
                    initialize: function() {
                        g.a.GameObjects.Image.call(this, y.scene, 0, 0, "magnet"), this.setScale(C(this, 35)), this.setDepth(1)
                    },
                    spawn: function(e, t) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t)
                    }
                });

            function pe(e) {
                return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ge(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return fe(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return fe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function be(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function ye(e, t) {
                return (ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ve(e) {
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
                    var i, s = ke(e);
                    if (t) {
                        var a = ke(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return _e(this, i)
                }
            }

            function _e(e, t) {
                if (t && ("object" === pe(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ke(e) {
                return (ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var xe = function(e) {
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
                        }), t && ye(e, t)
                    }(o, e);
                    var t, i, s, a = ve(o);

                    function o(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), (t = a.call(this)).blook = e, t
                    }
                    return t = o, (i = [{
                        key: "preload",
                        value: function() {
                            var e = this;
                            Object.entries(re).forEach((function(t) {
                                var i = ge(t, 2),
                                    s = i[0],
                                    a = i[1];
                                a.nonVector ? e.load.image(s, a.url, a.width) : e.load.svg(s, "chick" === s ? _.a[e.blook] : a.url, {
                                    width: a.width,
                                    height: a.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            y.scene = this, y.canvasWidth = document.getElementById("phaser-monster-brawl").offsetWidth, this.level = 0, this.enemyQueue = [];
                            var t = j(1e4),
                                i = t,
                                s = j(400);
                            this.cameras.main.setBounds(0, 0, t, i), this.physics.world.setBounds(0, 0, t, i), y.obstacles = this.physics.add.group({
                                classType: ne,
                                immovable: !0
                            });
                            for (var a = Object(v.r)(3, 6), o = 0; o < t / s; o++)
                                for (var r = 0; r < i / s; r++) {
                                    var n = this.add.image(o * s, r * s, "tile").setOrigin(0);
                                    n.setScale(C(n, 400)), (a -= 1) < 0 && (a = Object(v.r)(3, 6), B("obstacle-".concat(Object(v.r)(1, 6)), o * s + Object(v.q)(0, s), r * s + Object(v.q)(0, s)))
                                }
                            this.cursors = this.input.keyboard.createCursorKeys(), this.cursors.keyW = this.input.keyboard.addKey(g.a.Input.Keyboard.KeyCodes.W), this.cursors.keyA = this.input.keyboard.addKey(g.a.Input.Keyboard.KeyCodes.A), this.cursors.keyS = this.input.keyboard.addKey(g.a.Input.Keyboard.KeyCodes.S), this.cursors.keyD = this.input.keyboard.addKey(g.a.Input.Keyboard.KeyCodes.D), y.player = this.physics.add.image(t / 2, i / 2, "chick"), y.player.setScale(C(y.player, 60)), y.player.setDepth(10), y.player.setCollideWorldBounds(!0), y.player.body.setSize(60, 60), y.player.body.setOffset(0, 10), y.hp = 100;
                            var l = this.physics.add.group({
                                classType: ce,
                                runChildUpdate: !0
                            });
                            y.hpBar = l.get(), y.hpBar.draw(), y.enemies = this.physics.add.group({
                                classType: oe,
                                runChildUpdate: !0,
                                collideWorldBounds: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.collider(y.enemies, y.enemies), this.physics.add.collider(y.obstacles, y.enemies), this.physics.add.overlap(y.player, y.enemies, P), this.nextEnemy = 0, y.texts = this.add.group({
                                classType: te
                            }), this.ticks = {}, y.projectiles.egg = this.physics.add.group({
                                classType: S,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.egg, I), this.physics.add.overlap(y.obstacles, y.projectiles.egg, M), y.projectiles.nut = this.physics.add.group({
                                classType: A,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.nut, I), this.physics.add.overlap(y.obstacles, y.projectiles.nut, M), y.projectiles.slime = this.physics.add.group({
                                classType: E,
                                runChildUpdate: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.overlap(y.enemies, y.projectiles.slime, I), this.physics.add.collider(y.obstacles, y.projectiles.slime), y.projectiles.jesterBall = this.physics.add.group({
                                classType: R,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.jesterBall, I), y.projectiles.horseshoe = this.physics.add.group({
                                classType: N,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.horseshoe, I), y.projectiles.shell = this.physics.add.group({
                                classType: D,
                                runChildUpdate: !0,
                                collideWorldBounds: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.overlap(y.enemies, y.projectiles.shell, I);
                            var c = this.physics.add.collider(y.enemies, y.projectiles.shell, z);
                            this.physics.add.collider(y.projectiles.shell, y.projectiles.shell, z), this.physics.add.collider(y.obstacles, y.projectiles.shell, z), y.projectiles.pizza = this.physics.add.group({
                                classType: F,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.pizza, I), y.projectiles.banana = this.physics.add.group({
                                classType: U,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.banana, I), y.projectiles.arrow = this.physics.add.group({
                                classType: V,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.arrow, I), this.physics.add.overlap(y.obstacles, y.projectiles.arrow, M), y.projectiles.peacock = this.physics.add.group({
                                classType: q,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.peacock, I), this.physics.add.overlap(y.player, y.projectiles.peacock, L), this.physics.add.overlap(y.obstacles, y.projectiles.peacock, M), y.projectiles.bone = this.physics.add.group({
                                classType: H,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.bone, I), y.projectiles.bee = this.physics.add.group({
                                classType: X,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.bee, I), y.projectiles.bubble = this.physics.add.group({
                                classType: G,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.bubble, I), this.physics.add.overlap(y.obstacles, y.projectiles.bubble, M), y.projectiles.card = this.physics.add.group({
                                classType: Y,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.card, I), this.physics.add.overlap(y.obstacles, y.projectiles.card, M), y.projectiles.laser = this.physics.add.group({
                                classType: W,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.laser, I), this.physics.add.overlap(y.obstacles, y.projectiles.laser, M), y.projectiles.darkEnergy = this.physics.add.group({
                                classType: Q,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.darkEnergy, I), y.projectiles.syrupBottle = this.physics.add.group({
                                classType: J,
                                runChildUpdate: !0
                            }), y.projectiles.syrup = this.physics.add.group({
                                classType: K,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.syrup, I), y.projectiles.shield = this.physics.add.group({
                                classType: Z,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.shield, I), y.projectiles.bird = this.physics.add.group({
                                classType: $,
                                runChildUpdate: !0
                            }), y.projectiles.birdFeather = this.physics.add.group({
                                classType: ee,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.enemies, y.projectiles.birdFeather, I), y.allXP = this.physics.add.group({
                                classType: se,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(y.player, y.allXP, ie), y.drops.cheese = this.physics.add.group({
                                classType: ue
                            }), this.physics.add.overlap(y.player, y.drops.cheese, he), y.drops.magnet = this.physics.add.group({
                                classType: me
                            }), this.physics.add.overlap(y.player, y.drops.magnet, de), this.physics.add.collider(y.player, y.obstacles), this.cameras.main.startFollow(y.player, !0), this.dmgCountRefresh = 1e4, this.game.events.on("level up", (function(t, i) {
                                if (y.isPaused = !1, y.level += 1, 0 === i) e.ticks[t] = 0, y.abilities[t] = k.a[t].levels[0], y.dmgCounts[t] = 0, "egg" === t ? (e.ticks.miniEgg = 0, e.eggCount = 0) : "nut" === t ? (e.ticks.miniNut = 0, e.nutCount = 0) : "slime" === t ? (e.ticks.miniSlime = 0, e.slimeCount = 0) : "jesterBall" === t ? (e.ticks.miniJesterBall = 0, e.jesterBallCount = 0) : "shell" === t ? (e.ticks.miniShell = 0, e.shellCount = 0) : "pizza" === t ? (e.ticks.miniPizza = 0, e.pizzaCount = 0) : "banana" === t ? (e.ticks.miniBanana = 0, e.bananaCount = 0, e.bananaAngle = 0) : "peacock" === t ? (e.ticks.miniPeacock = 0, e.peacockCount = 0, e.ticks.peacockPullBack = y.abilities.peacock.pullBackRate) : "bee" === t ? (e.ticks.miniBee = 0, e.beeCount = 0, e.beeAngle = 0) : "bubble" === t ? (e.ticks.miniBubble = 0, e.bubbleCount = 0, e.bubbleAngle = 0) : "card" === t ? (e.ticks.miniCard = 0, e.cardCount = 0, e.cardAngle = 0) : "darkEnergy" === t ? O("darkEnergy") : "syrup" === t ? (e.ticks.miniSyrup = 0, e.syrupCount = 0) : "birdFeather" === t && O("bird", 0, 0);
                                else {
                                    var s = k.a[t].levels[i];
                                    if (s.dmg && (y.abilities[t].dmg += s.dmg), s.maxTargets && (y.abilities[t].maxTargets += s.maxTargets), s.fireRate && (y.abilities[t].fireRate -= s.fireRate), s.numProjectiles && (y.abilities[t].numProjectiles += s.numProjectiles), s.intervalRate && (y.abilities[t].intervalRate = s.intervalRate), s.speed && (y.abilities[t].speed += s.speed), s.width && (y.abilities[t].width += s.width), s.lifespan && (y.abilities[t].lifespan += s.lifespan), s.texture && (y.abilities[t].texture = s.texture), s.evolution && (y.abilities[t].evolution = s.evolution), s.waveAmplitude && (y.abilities[t].waveAmplitude = s.waveAmplitude), "shell" === t && 1 === s.evolution) e.physics.world.removeCollider(c);
                                    else if ("darkEnergy" === t) y.projectiles.darkEnergy.getChildren()[0].levelUp();
                                    else if ("birdFeather" === t && (1 === s.evolution || 2 === s.evolution)) {
                                        var a = y.projectiles.bird.getChildren();
                                        O("bird", a[a.length - 1].posAngle + 120, s.evolution)
                                    }
                                }
                                e.level += 1;
                                var o = le[e.level - 1];
                                o.amounts.forEach((function(t, i) {
                                    for (var s = 0; s < t; s++) e.enemyQueue.push(o.enemies[i])
                                })), e.scene.resume()
                            })), this.game.events.on("user-pause", (function() {
                                y.isPaused = !0, e.scene.pause()
                            })), this.game.events.on("user-resume", (function() {
                                y.isPaused = !1, e.scene.resume()
                            })), this.game.events.on("hidden", (function() {
                                e.scene.pause()
                            })), this.game.events.on("game-over", (function() {
                                e.scene.pause()
                            })), this.game.events.on("visible", (function() {
                                y.isPaused ? e.scene.pause() : e.scene.resume()
                            })), this.game.events.on("respawn", (function() {
                                y.hp = 100, y.invulnerableTime = 3e3, e.scene.resume()
                            })), this.scene.pause()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            y.player.setVelocity(0), y.hpBar.body.setVelocity(0);
                            var s = j(225),
                                a = s / 1.44,
                                o = y.projectiles.darkEnergy.getChildren(),
                                r = null;
                            o.length > 0 && (r = o[0]).body.setVelocity(0);
                            var n = y.projectiles.shield.getChildren(),
                                l = null;
                            if (n.length > 0 && (l = n[0]).body.setVelocity(0), this.cursors.left.isDown || this.cursors.keyA.isDown ? (y.player.setVelocityX(-s), y.hpBar.body.setVelocityX(-s), y.dir.x = -1, r && r.body.setVelocityX(-s), l && l.body.setVelocityX(-s)) : this.cursors.right.isDown || this.cursors.keyD.isDown ? (y.player.setVelocityX(s), y.hpBar.body.setVelocityX(s), y.dir.x = 1, r && r.body.setVelocityX(s), l && l.body.setVelocityX(s)) : (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.keyW.isDown || this.cursors.keyS.isDown) && (y.dir.x = 0), this.cursors.up.isDown || this.cursors.keyW.isDown ? (y.player.setVelocityY(-s), y.hpBar.body.setVelocityY(-s), y.dir.y = 1, r && r.body.setVelocityY(-s), l && l.body.setVelocityY(-s)) : this.cursors.down.isDown || this.cursors.keyS.isDown ? (y.player.setVelocityY(s), y.hpBar.body.setVelocityY(s), y.dir.y = -1, r && r.body.setVelocityY(s), l && l.body.setVelocityY(s)) : (this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.keyA.isDown || this.cursors.keyD.isDown) && (y.dir.y = 0), 0 !== y.dir.x && 0 !== y.dir.y && (this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.keyA.isDown || this.cursors.keyD.isDown) && (y.player.setVelocity(0), y.hpBar.body.setVelocity(0), 1 === y.dir.x ? (y.player.setVelocityX(a), y.hpBar.body.setVelocityX(a), r && r.body.setVelocityX(a), l && l.body.setVelocityX(a)) : (y.player.setVelocityX(-a), y.hpBar.body.setVelocityX(-a), r && r.body.setVelocityX(-a), l && l.body.setVelocityX(-a)), 1 === y.dir.y ? (y.player.setVelocityY(-a), y.hpBar.body.setVelocityY(-a), r && r.body.setVelocityY(-a), l && l.body.setVelocityY(-a)) : (y.player.setVelocityY(a), y.hpBar.body.setVelocityY(a), r && r.body.setVelocityY(a), l && l.body.setVelocityY(a))), this.input.activePointer.isDown) {
                                y.player.setVelocity(0), y.hpBar.body.setVelocity(0);
                                var c = this.input.activePointer.position,
                                    h = g.a.Math.Angle.BetweenPoints(y.player, {
                                        x: c.x + y.scene.cameras.main.worldView.x,
                                        y: c.y + y.scene.cameras.main.worldView.y
                                    });
                                y.player.setVelocity(Math.cos(h) * s, Math.sin(h) * s), y.hpBar.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), r && r.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), l && l.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), y.dir = function(e) {
                                    for (var t = -7 * Math.PI / 8, i = 0; i < T.length; i++) {
                                        if (e < t) return T[i];
                                        t += Math.PI / 4
                                    }
                                    return {
                                        x: 0,
                                        y: 0
                                    }
                                }(h)
                            }
                            if (Object.keys(this.ticks).forEach((function(e) {
                                    i.ticks[e] -= t
                                })), this.ticks.egg <= 0 && (this.eggCount = y.abilities.egg.numProjectiles, this.ticks.miniEgg = 0, this.ticks.egg = y.abilities.egg.fireRate), this.eggCount > 0 && this.ticks.miniEgg <= 0 && (O("egg"), this.eggCount -= 1, this.eggCount > 0 && (this.ticks.miniEgg = y.abilities.egg.intervalRate)), this.ticks.nut <= 0 && (this.nutCount = y.abilities.nut.numProjectiles, this.ticks.miniNut = 0, this.ticks.nut = y.abilities.nut.fireRate), this.nutCount > 0 && this.ticks.miniNut <= 0 && (O("nut"), this.nutCount -= 1, this.nutCount > 0 && (this.ticks.miniNut = y.abilities.nut.intervalRate)), this.ticks.slime <= 0 && (this.slimeCount = y.abilities.slime.numProjectiles, this.ticks.miniSlime = 0, this.ticks.slime = y.abilities.slime.fireRate), this.slimeCount > 0 && this.ticks.miniSlime <= 0 && (O("slime", (this.slimeCount - 1) % 5), this.slimeCount -= 1, this.slimeCount > 0 && (this.ticks.miniSlime = y.abilities.slime.intervalRate)), this.ticks.jesterBall <= 0 && (this.jesterBallCount = y.abilities.jesterBall.numProjectiles, this.ticks.miniJesterBall = 0, this.ticks.jesterBall = y.abilities.jesterBall.fireRate), this.jesterBallCount > 0 && this.ticks.miniJesterBall <= 0)
                                if (1 === y.abilities.jesterBall.evolution) {
                                    for (var u = 0; u < 8; u++) O("jesterBall", 45 * u);
                                    this.jesterBallCount = 0
                                } else O("jesterBall", (this.jesterBallCount - 1) % 8 * 45), this.jesterBallCount -= 1, this.jesterBallCount > 0 && (this.ticks.miniJesterBall = y.abilities.jesterBall.intervalRate);
                            if (this.ticks.horseshoe <= 0) {
                                this.ticks.horseshoe = y.abilities.horseshoe.fireRate;
                                for (var d = 0; d < y.abilities.horseshoe.numProjectiles; d++) O("horseshoe", d * (360 / y.abilities.horseshoe.numProjectiles))
                            }
                            if (this.ticks.shell <= 0 && (this.shellCount = y.abilities.shell.numProjectiles, this.ticks.miniShell = 0, this.ticks.shell = y.abilities.shell.fireRate), this.shellCount > 0 && this.ticks.miniShell <= 0 && (O("shell"), this.shellCount -= 1, this.shellCount > 0 && (this.ticks.miniShell = y.abilities.shell.intervalRate)), this.ticks.pizza <= 0 && (this.pizzaCount = y.abilities.pizza.numProjectiles, this.ticks.miniPizza = 0, this.ticks.pizza = y.abilities.pizza.fireRate), this.pizzaCount > 0 && this.ticks.miniPizza <= 0 && (O("pizza"), this.pizzaCount -= 1, this.pizzaCount > 0 && (this.ticks.miniPizza = y.abilities.pizza.intervalRate)), this.ticks.banana <= 0 && (this.bananaCount = y.abilities.banana.numProjectiles, this.ticks.miniBanana = 0, this.ticks.banana = y.abilities.banana.fireRate, this.bananaAngle = Object(v.q)(-180, 180)), this.bananaCount > 0 && this.ticks.miniBanana <= 0 && (this.bananaCount -= 1, O("banana", this.bananaCount * (360 / y.abilities.banana.numProjectiles) + this.bananaAngle, (this.bananaCount + 1) % (y.abilities.banana.evolution + 1)), this.bananaCount > 0 && (this.ticks.miniBanana = y.abilities.banana.intervalRate)), this.ticks.arrow <= 0) {
                                this.ticks.arrow = y.abilities.arrow.fireRate;
                                for (var m = 0; m < y.abilities.arrow.numProjectiles; m++) O("arrow", 1 === y.abilities.arrow.numProjectiles ? 0 : m * (20 * Math.ceil(y.abilities.arrow.numProjectiles / 2) / (y.abilities.arrow.numProjectiles - 1)) - 10 * Math.ceil(y.abilities.arrow.numProjectiles / 2))
                            }
                            if (this.ticks.peacock <= 0 && (this.peacockCount = y.abilities.peacock.numProjectiles, this.ticks.miniPeacock = 0, this.ticks.peacock = y.abilities.peacock.fireRate), this.peacockCount > 0 && this.ticks.miniPeacock <= 0 && (O("peacock"), this.peacockCount -= 1, this.peacockCount > 0 && (this.ticks.miniPeacock = y.abilities.peacock.intervalRate)), this.ticks.peacockPullBack <= 0 && (this.ticks.peacockPullBack = y.abilities.peacock.pullBackRate, y.projectiles.peacock.getChildren().filter((function(e) {
                                    return e.active
                                })).forEach((function(e) {
                                    e.pullBack()
                                }))), this.ticks.bone <= 0 && (this.ticks.bone = y.abilities.bone.fireRate, O("bone")), this.ticks.bee <= 0 && (this.beeCount = y.abilities.bee.numProjectiles, this.ticks.miniBee = 0, this.ticks.bee = y.abilities.bee.fireRate, this.beeAngle = Object(v.q)(0, 360)), this.beeCount > 0 && this.ticks.miniBee <= 0 && (this.beeCount -= 1, O("bee", this.beeCount * (360 / y.abilities.bee.numProjectiles) + this.beeAngle), this.beeCount > 0 && (this.ticks.miniBee = y.abilities.bee.intervalRate)), this.ticks.bubble <= 0 && (this.bubbleCount = y.abilities.bubble.numProjectiles, this.ticks.miniBubble = 0, this.ticks.bubble = y.abilities.bubble.fireRate, this.bubbleAngle = Object(v.q)(0, 360)), this.bubbleCount > 0 && this.ticks.miniBubble <= 0 && (this.bubbleCount -= 1, O("bubble", this.bubbleAngle), this.bubbleCount > 0 && (this.ticks.miniBubble = y.abilities.bubble.intervalRate)), this.ticks.card <= 0 && (this.cardCount = y.abilities.card.numProjectiles, this.ticks.miniCard = 0, this.ticks.card = y.abilities.card.fireRate, this.cardAngle = x(y.dir)), this.cardCount > 0 && this.ticks.miniCard <= 0) {
                                if (this.cardCount -= 1, 1 === y.abilities.card.evolution)
                                    for (var p = 0; p < 4; p++) O("card", this.cardAngle + Math.PI / 2 * p + Math.PI / 4 * this.cardCount, p);
                                else O("card", this.cardAngle, this.cardCount);
                                this.cardCount > 0 && (this.ticks.miniCard = y.abilities.card.intervalRate)
                            }
                            if (this.ticks.laser <= 0) {
                                this.ticks.laser = y.abilities.laser.fireRate;
                                for (var f = 0; f < y.abilities.laser.numProjectiles; f++) O("laser", f)
                            }
                            if (this.ticks.syrup <= 0 && (this.syrupCount = y.abilities.syrup.numProjectiles, this.ticks.miniSyrup = 0, this.ticks.syrup = y.abilities.syrup.fireRate), this.syrupCount > 0 && this.ticks.miniSyrup <= 0 && (O("syrupBottle", {
                                    x: y.scene.cameras.main.worldView.x + Object(v.q)(20, y.scene.cameras.main.worldView.width - 20),
                                    y: y.scene.cameras.main.worldView.y + Object(v.q)(20, y.scene.cameras.main.worldView.height - 20)
                                }), this.syrupCount -= 1, this.syrupCount > 0 && (this.ticks.miniSyrup = y.abilities.syrup.intervalRate)), this.ticks.shield <= 0 && (this.ticks.shield = y.abilities.shield.fireRate, O("shield")), this.nextEnemy -= t, this.level && this.enemyQueue.length > 0 && this.nextEnemy <= 0) {
                                if (y.enemies.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 140) return;
                                var b = y.enemies.get();
                                if (b) {
                                    var _ = this.enemyQueue.shift();
                                    b.start(_), this.nextEnemy = le[this.level - 1].interval
                                }
                            }
                            y.magnetTime > 0 && (y.magnetTime -= t), y.invulnerableTime > 0 && (y.invulnerableTime -= t), e > this.dmgCountRefresh && (this.game.events.emit("dmgCounts", y.dmgCounts), Object.keys(y.dmgCounts).forEach((function(e) {
                                y.dmgCounts[e] = 0
                            })), this.dmgCountRefresh = e + 1e4), y.hpBar.draw()
                        }
                    }, {
                        key: "addTween",
                        value: function(e) {
                            this.tweens.add(e)
                        }
                    }]) && be(t.prototype, i), s && be(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), o
                }(g.a.Scene),
                we = function(e) {
                    return {
                        type: g.a.WEBGL,
                        parent: "phaser-monster-brawl",
                        width: "100%",
                        height: "100%",
                        scale: {
                            mode: g.a.Scale.FIT,
                            autoCenter: g.a.Scale.CENTER_BOTH
                        },
                        physics: {
                            default: "arcade"
                        },
                        scene: new xe(e)
                    }
                },
                Ce = i("yiF6"),
                je = i("ZrUs"),
                Te = i("XTAU"),
                Oe = i("1pXr"),
                Be = i.n(Oe),
                Ie = i("Xst1"),
                Pe = i.n(Ie),
                Me = i("lmLo"),
                Se = i("Rnav"),
                Ae = i("FVRk"),
                Ee = i("4Zpe"),
                Re = i("+fLB"),
                Ne = i("ca/f"),
                ze = i("9TPi"),
                De = i("r07w"),
                Fe = i.n(De),
                Ue = [{
                    img: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                    text: "Your goal is to collect these XP crystals.",
                    nextButtonText: "Next",
                    className: Fe.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Ice_Slime.svg",
                    text: "To do this you'll need to eliminate monsters.",
                    nextButtonText: "Next",
                    className: Fe.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl5.svg",
                    text: "Collect XP to level up and unlock new abilities to fight monsters.",
                    nextButtonText: "Next",
                    className: Fe.a.centered
                }, {
                    text: "Use your arrow keys or tap and drag to move around the map.",
                    nextButtonText: "Next",
                    className: Fe.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Cheese_Blook_2.svg",
                    text: "Avoid running into monsters to keep up your health. Cheese restores health.",
                    nextButtonText: "Next",
                    className: Fe.a.centered
                }, {
                    text: "That's all there is to it! Now go survive the Monster Brawl!",
                    nextButtonText: "Finish",
                    className: Fe.a.centered
                }];

            function Ve(e) {
                return (Ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Le() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Le = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    i = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    a = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    r = s.toStringTag || "@@toStringTag";

                function n(e, t, i) {
                    return Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    n({}, "")
                } catch (e) {
                    n = function(e, t, i) {
                        return e[t] = i
                    }
                }

                function l(e, t, i, s) {
                    var a = t && t.prototype instanceof u ? t : u,
                        o = Object.create(a.prototype),
                        r = new w(s || []);
                    return o._invoke = function(e, t, i) {
                        var s = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === a) throw o;
                                return j()
                            }
                            for (i.method = a, i.arg = o;;) {
                                var r = i.delegate;
                                if (r) {
                                    var n = _(r, i);
                                    if (n) {
                                        if (n === h) continue;
                                        return n
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === s) throw s = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = "executing";
                                var l = c(e, t, i);
                                if ("normal" === l.type) {
                                    if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                            }
                        }
                    }(e, i, r), o
                }

                function c(e, t, i) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, i)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function m() {}
                var p = {};
                n(p, a, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    f = g && g(g(C([])));
                f && f !== t && i.call(f, a) && (p = f);
                var b = m.prototype = u.prototype = Object.create(p);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        n(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(a, o) {
                        function r() {
                            return new t((function(s, r) {
                                ! function s(a, o, r, n) {
                                    var l = c(e[a], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == Ve(u) && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, r, n)
                                        }), (function(e) {
                                            s("throw", e, r, n)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, r(h)
                                        }), (function(e) {
                                            return s("throw", e, r, n)
                                        }))
                                    }
                                    n(l.arg)
                                }(a, o, s, r)
                            }))
                        }
                        return s = s ? s.then(r, r) : r()
                    }
                }

                function _(e, t) {
                    var i = e.iterator[t.method];
                    if (void 0 === i) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(i, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var a = s.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function w(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return d.prototype = m, n(b, "constructor", m), n(m, "constructor", d), d.displayName = n(m, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, n(e, r, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(v.prototype), n(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, i, s, a, o) {
                    void 0 === o && (o = Promise);
                    var r = new v(l(t, i, s, a), o);
                    return e.isGeneratorFunction(i) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, y(b), n(b, r, "Generator"), n(b, a, (function() {
                    return this
                })), n(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t.reverse(),
                        function i() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return i.value = s, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, e.values = C, w.prototype = {
                    constructor: w,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(i, s) {
                            return r.type = "throw", r.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var n = i.call(o, "catchLoc"),
                                    l = i.call(o, "finallyLoc");
                                if (n && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (n) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var a = this.tryEntries[s];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), x(i), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var s = i.completion;
                                if ("throw" === s.type) {
                                    var a = s.arg;
                                    x(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function qe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return He(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return He(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function Xe(e, t, i, s, a, o, r) {
                try {
                    var n = e[o](r),
                        l = n.value
                } catch (e) {
                    return void i(e)
                }
                n.done ? t(l) : Promise.resolve(l).then(s, a)
            }

            function Ge(e) {
                return function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(s, a) {
                        var o = e.apply(t, i);

                        function r(e) {
                            Xe(o, s, a, r, n, "next", e)
                        }

                        function n(e) {
                            Xe(o, s, a, r, n, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function Ye(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function We(e, t) {
                return (We = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Qe(e) {
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
                    var i, s = Ze(e);
                    if (t) {
                        var a = Ze(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return Ke(this, i)
                }
            }

            function Ke(e, t) {
                if (t && ("object" === Ve(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Je(e)
            }

            function Je(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ze(e) {
                return (Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var $e = function(e) {
                    return 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100
                },
                et = function(e) {
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
                        }), t && We(e, t)
                    }(h, e);
                    var t, i, s, o, r, c = Qe(h);

                    function h(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (t = c.call(this, e)).dbRefStage = {}, t.xp = 0, t.totalXp = 0, t.lastXp = 0, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, e.client && e.client.blook ? (t.state = {
                            game: we(e.client.blook),
                            xp: 0,
                            totalXp: 0,
                            level: 1,
                            levelUpOptions: [],
                            abilities: {},
                            isFirstLevel: !0,
                            isPaused: !1,
                            debug: !1,
                            dmgArray: [],
                            stage: "",
                            gameWon: !1,
                            gameLost: !1,
                            showTour: !1,
                            askTour: !0
                        }, t.onAnswer = t.onAnswer.bind(Je(t)), t.answerNext = t.answerNext.bind(Je(t)), t.randomQ = t.randomQ.bind(Je(t)), t.addXp = t.addXp.bind(Je(t)), t.levelUp = t.levelUp.bind(Je(t)), t.pause = t.pause.bind(Je(t)), t.readQuestion = t.readQuestion.bind(Je(t)), t) : Ke(t)
                    }
                    return t = h, (i = [{
                        key: "componentDidMount",
                        value: (r = Ge(Le().mark((function e() {
                            var t = this;
                            return Le().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.state.game.instance) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 5, new Promise((function(e) {
                                            return setTimeout(e, 500)
                                        }));
                                    case 5:
                                        e.next = 2;
                                        break;
                                    case 7:
                                        return Object(v.c)(), e.next = 10, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 10:
                                        this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var i = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                xp: e.xp || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, i), t.props.history.push("/play/brawl/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ(), this.updateInterval = setInterval((function() {
                                            t.totalXp !== t.lastXp && (t.lastXp = t.totalXp, t.props.firebase.setVal({
                                                id: t.props.client.hostId,
                                                path: "c/".concat(t.props.client.name),
                                                val: {
                                                    b: t.props.client.blook,
                                                    xp: t.totalXp
                                                }
                                            }))
                                        }), 5e3), this.state.game.instance.events.on("xp", (function(e) {
                                            t.addXp(e)
                                        })), this.state.game.instance.events.on("dmgCounts", (function(e) {
                                            var i = Object.entries(e).map((function(e) {
                                                var t = qe(e, 2);
                                                return {
                                                    ability: t[0],
                                                    dmg: t[1]
                                                }
                                            }));
                                            i.sort((function(e, t) {
                                                return t.dmg - e.dmg
                                            })), t.setState({
                                                dmgArray: i
                                            })
                                        })), this.state.game.instance.events.on("game-over", (function() {
                                            t.setState({
                                                gameLost: !0
                                            }), t.gameOverTimeout = setTimeout((function() {
                                                t.setState({
                                                    gameLost: !1
                                                }), t.gameOverCount = 3, t.randomQ()
                                            }), 5e3)
                                        }));
                                    case 19:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(v.u)(), clearTimeout(this.timeout), clearTimeout(this.waitTimeout), clearTimeout(this.gameOverTimeout), clearInterval(this.updateInterval), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    i = this.state.question.number;
                                t ? this.corrects[i] ? this.corrects[i] += 1 : this.corrects[i] = 1 : this.incorrects[i] ? this.incorrects[i] += 1 : this.incorrects[i] = 1, this.nextReady = !0, this.setState({
                                    correct: t,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            if (this.nextReady && this.here)
                                if (this.nextReady = !1, this.state.correct) {
                                    if (this.gameOverCount > 0) return this.gameOverCount -= 1, void(this.gameOverCount <= 0 ? (this.state.game.instance.events.emit("respawn"), this.setState({
                                        stage: ""
                                    })) : this.randomQ());
                                    if (this.state.level >= 60) return void this.setState({
                                        gameWon: !0
                                    });
                                    this.picking = !0, this.setState({
                                        stage: "level up",
                                        levelUpOptions: Object(k.b)(this.state.abilities, this.state.isFirstLevel ? 1 : this.state.level + 1)
                                    })
                                } else this.randomQ()
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(v.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(v.w)(t.answers)), this.setState({
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
                        key: "addXp",
                        value: function(e) {
                            this.xp += e, this.totalXp += e, this.setState({
                                xp: this.xp,
                                totalXp: this.totalXp
                            }), this.xp >= $e(this.state.level) && (this.state.game.instance.events.emit("user-pause"), this.randomQ())
                        }
                    }, {
                        key: "levelUp",
                        value: function(e, t) {
                            var i = this;
                            if (this.picking) {
                                var s = JSON.parse(JSON.stringify(this.state.abilities));
                                s[e] = t + 1, this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        xp: this.totalXp,
                                        up: "".concat(e, ":").concat(t + 1)
                                    }
                                }), this.xp -= this.state.isFirstLevel ? 0 : $e(this.state.level), this.setState({
                                    xp: 0,
                                    level: this.state.isFirstLevel ? 1 : this.state.level + 1,
                                    levelUpOptions: [],
                                    abilities: s,
                                    isFirstLevel: !1
                                }, (function() {
                                    i.state.game.instance.events.emit("level up", e, t), i.addXp(0)
                                }))
                            }
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.state.levelUpOptions.length > 0 || this.gameOverCount > 0 || (this.state.isPaused ? (this.setState({
                                isPaused: !1
                            }), this.state.game.instance.events.emit("user-resume")) : (this.setState({
                                isPaused: !0
                            }), this.state.game.instance.events.emit("user-pause")))
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = Ge(Le().mark((function e() {
                            var t, i = this;
                            return Le().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, s) {
                                            var a = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return s();
                                            e.includes("`*`") && (a = e.slice(0, e.indexOf("`*`"))), i.msg = new SpeechSynthesisUtterance(a), i.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(i.msg), i.msg.onend = function() {
                                                i.setState({
                                                    readId: ""
                                                }), s()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(i.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(i.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(i.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(i.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(i.state.question.answers[3], "q4", e)
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
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? a.a.createElement("div", {
                                className: l.isMobile ? Pe.a.mBody : Pe.a.body,
                                id: "body"
                            }, a.a.createElement(Te.a, {
                                title: "Test Blooket",
                                desc: "Pls don't come here."
                            }), "question" === this.state.stage || "feedback" === this.state.stage ? a.a.createElement("div", {
                                className: Be.a.questionContainer
                            }, a.a.createElement(Se.a, {
                                name: "Ben",
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion,
                                xp: this.state.totalXp
                            }), "question" === this.state.stage ? a.a.createElement(Ae.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            }) : "feedback" === this.state.stage ? a.a.createElement("div", {
                                className: Be.a.feedbackContainer
                            }, a.a.createElement(Ee.a, {
                                incorrectTime: 7,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null) : null, a.a.createElement(u.a, {
                                game: this.state.game
                            }), a.a.createElement("div", {
                                className: Be.a.phaserHolder,
                                id: "phaser-monster-brawl"
                            }), a.a.createElement("i", {
                                className: m()(this.state.isPaused ? "fas fa-play" : "fas fa-pause", Be.a.pauseButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.pause
                            }), this.state.debug ? a.a.createElement("div", {
                                className: Be.a.dmgHolder
                            }, this.state.dmgArray.map((function(t) {
                                return a.a.createElement("div", {
                                    className: Be.a.dmgRow,
                                    key: t.ability
                                }, a.a.createElement("div", {
                                    className: Be.a.dmgBar,
                                    style: {
                                        transform: "scaleX(".concat(t.dmg / e.state.dmgArray[0].dmg, ")")
                                    }
                                }), a.a.createElement("div", null, t.ability), a.a.createElement("div", null, t.dmg))
                            }))) : null, a.a.createElement("div", {
                                className: Be.a.xpHolder
                            }, a.a.createElement("div", {
                                className: Be.a.xpBar,
                                style: {
                                    width: "".concat(Math.max(5, 100 * Math.min(this.state.xp / $e(this.state.level), 1)), "%")
                                }
                            }, a.a.createElement("div", {
                                className: Be.a.xpHighlight
                            })), a.a.createElement("div", {
                                className: Be.a.levelText
                            }, "Lvl ".concat(this.state.level))), this.state.levelUpOptions.length > 0 ? a.a.createElement("div", {
                                className: Be.a.levelUpHolder
                            }, a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/Right_Cracks.svg",
                                alt: "Cracks",
                                className: Be.a.rightCracks,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/Left_Cracks.svg",
                                alt: "Cracks",
                                className: Be.a.leftCracks,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1658214641/Media/survivor/Text-02.svg",
                                alt: "Level Up",
                                className: Be.a.levelUpImage,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1658214641/Media/survivor/Text-01.svg",
                                alt: "Choose an Upgrade",
                                className: Be.a.levelUpSubImage,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/UI_ARTBOARD-02.svg",
                                alt: "Evil Blook",
                                className: Be.a.levelUpTopper,
                                draggable: !1
                            }), this.state.levelUpOptions.map((function(t) {
                                return a.a.createElement(Me.a, {
                                    key: t.name,
                                    outsideClass: Be.a.levelUpOption,
                                    onClick: function() {
                                        return e.levelUp(t.name, t.level)
                                    },
                                    color: "#2d3343"
                                }, a.a.createElement("div", {
                                    className: Be.a.levelUpInside
                                }, a.a.createElement("div", {
                                    className: Be.a.levelUpLeftContainer
                                }, a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/UI_ARTBOARD-03.svg",
                                    alt: "Background",
                                    className: Be.a.levelUpImgBackground,
                                    draggable: !1
                                }), a.a.createElement("img", {
                                    src: t.img,
                                    alt: t.name,
                                    className: Be.a.levelUpImg,
                                    style: {
                                        transform: "rotate(".concat(t.imgAng || 225, "deg)")
                                    }
                                }), a.a.createElement("div", {
                                    className: Be.a.levelUpLevel,
                                    style: {
                                        color: 0 === t.level ? "#d3effc" : null
                                    }
                                }, 0 === t.level ? "NEW!" : "Lvl ".concat(t.level + 1))), a.a.createElement("div", {
                                    className: Be.a.levelUpRight
                                }, a.a.createElement("div", {
                                    className: Be.a.levelUpAbility
                                }, t.title), a.a.createElement("div", {
                                    className: Be.a.levelUpDesc
                                }, t.data.desc))))
                            }))) : null, a.a.createElement("div", {
                                className: Be.a.abilitiesRow
                            }, Object.entries(this.state.abilities).map((function(e) {
                                var t = qe(e, 2),
                                    i = t[0],
                                    s = t[1];
                                return a.a.createElement("div", {
                                    key: i,
                                    className: Be.a.abilityContainer
                                }, a.a.createElement("img", {
                                    src: k.a[i].img,
                                    alt: k.a[i].title,
                                    className: Be.a.abilityImg,
                                    style: {
                                        transform: "rotate(".concat(k.a[i].rotation || 0, "deg)")
                                    }
                                }), a.a.createElement("div", {
                                    className: Be.a.abilityLevel
                                }, s))
                            }))), this.state.gameWon ? a.a.createElement("div", {
                                className: Be.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: Be.a.gameOverText
                            }, "Victory")) : this.state.gameLost ? a.a.createElement("div", {
                                className: Be.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: Be.a.gameOverText
                            }, "Defeat"), a.a.createElement("div", {
                                className: Be.a.gameOverDesc
                            }, "Answer 3 questions to respawn")) : null, this.state.askTour ? a.a.createElement(Ne.a, {
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
                            }) : this.state.showTour ? a.a.createElement(ze.a, {
                                steps: Ue,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                }
                            }) : null) : a.a.createElement(n.a, {
                                to: "/play"
                            })
                        }
                    }]) && Ye(t.prototype, i), s && Ye(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), h
                }(a.a.Component);
            et.propTypes = {
                client: h.a.object,
                history: h.a.object.isRequired,
                firebase: h.a.object,
                deleteClient: h.a.func.isRequired,
                setGoldFinal: h.a.func.isRequired
            };
            t.a = Object(n.g)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: je.a,
                    setGoldFinal: Ce.a
                }, e)
            }))(Object(Re.d)(et)))
        },
        ODJL: function(e, t, i) {
            var s = i("8UQz");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        ZXFw: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__statContainer___GUsbi-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__xpText___3_HCd-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__xpImage___RzMYa-camelCase{height:40%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___GUsbi-camelCase",
                xpText: "styles__xpText___3_HCd-camelCase",
                xpImage: "styles__xpImage___RzMYa-camelCase"
            }
        },
        bSFd: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__right___385mx-camelCase{position:absolute;top:50%;transform:translateY(-50%);right:2.5%;width:400px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:10px}.styles__rightBackground___36mp5-camelCase{width:100%;height:100%}.styles__rightBottom___F7qsO-camelCase{width:100%;position:absolute;bottom:0;left:0;height:50px;box-shadow:inset 0 -9px rgba(0,0,0,.2);border-bottom-left-radius:10px;border-bottom-right-radius:10px}.styles__rightBlook___1JkY7-camelCase{position:absolute;bottom:85px;left:105px;width:190px}.styles__rightTopText___2VrKK-camelCase{position:absolute;top:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center}.styles__highlightedName___2wOtf-camelCase{text-shadow:0 3px 3px rgba(0,0,0,.2);width:100%;height:50px;text-align:center}.styles__highlightedRarity___1EXx_-camelCase{font-size:30px;-webkit-text-stroke:#3a3a3a 1.5px}.styles__highlightedBottom___QmY2Y-camelCase{position:absolute;bottom:15px;left:5%;width:90%;font-family:Titan One,sans-serif;color:#fff;text-align:center;font-size:30px;text-shadow:0 0 4px rgba(0,0,0,.4)}.styles__rightButtonRow___3a0GF-camelCase{position:absolute;top:calc(50% + 220px);right:2.5%;width:400px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__rightButton___2_ZIX-camelCase{width:180px;margin:10px}.styles__rightButtonInside___14imT-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:28px}.styles__rightButtonImg___1WJdo-camelCase{width:28px;height:28px;margin-right:7px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:28px;margin-right:7px}.styles__topButtonRow___2HIbg-camelCase{position:absolute;top:15px;left:2.5%;width:calc(95% - 430px);flex-flow:row wrap;justify-content:flex-end}.styles__settingButton___2xaQu-camelCase,.styles__topButtonRow___2HIbg-camelCase{display:flex;align-items:center}.styles__settingButton___2xaQu-camelCase{background-color:rgba(0,0,0,.1);color:#3a3a3a;border-radius:5px;font-size:12px;height:20px;padding:0 10px;margin:0 5px;flex-direction:row;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__settingButton___2xaQu-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__left___9beun-camelCase{position:absolute;top:45px;left:2.5%;height:calc(100% - 60px);width:calc(95% - 430px);border-radius:10px;background-color:#9a49aa;padding:10px 10px 19px;box-shadow:inset 0 -9px rgba(0,0,0,.2),0 5px rgba(0,0,0,.25)}.styles__blooksHolder___3qZR1-camelCase,.styles__left___9beun-camelCase{box-sizing:border-box}.styles__blooksHolder___3qZR1-camelCase{width:100%;height:100%;padding:5px;overflow-y:auto}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb,.styles__blooksHolder___3qZR1-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase{width:100%;height:100%;padding:5px;box-sizing:border-box;overflow-y:auto;display:grid;justify-content:center;align-content:flex-start;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb,.styles__soloBlooksHolder___1f8ku-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__setHolder___rVq3Z-camelCase{margin-bottom:20px;position:relative}.styles__setTop___wIaVS-camelCase{margin-bottom:5px;position:relative;height:50px;width:100%;display:flex;flex-direction:column}.styles__setTopBackground___342Wr-camelCase{position:absolute;left:0;top:0;background-size:50px 50px;opacity:.15;width:100%;height:100%}.styles__setText___1PQLQ-camelCase{margin:auto 0;font-family:Titan One,sans-serif;color:#fff;text-shadow:3px 3px rgba(0,0,0,.2);font-size:26px}.styles__setDivider___3da0c-camelCase{width:100%;height:3px;background-color:#fff;border-radius:2px}.styles__setBlooks___3xamH-camelCase{display:grid;grid-template-columns:repeat(auto-fill,60px);grid-gap:10px}.styles__blookContainer___3JrKb-camelCase{width:60px;height:70px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;will-change:transform}.styles__blook___bNr_t-camelCase{width:55px}.styles__lockedBlook___3oGaX-camelCase{filter:brightness(0)}.styles__blookLock___3Kgua-camelCase{font-size:24px;opacity:.7;top:55%;left:50%;transform:translate(-50%,-50%)}.styles__blookLock___3Kgua-camelCase,.styles__blookText___3AMdK-camelCase{color:#fff;position:absolute}.styles__blookText___3AMdK-camelCase{font-size:10px;font-family:Titan One,sans-serif;font-size:12px;-webkit-text-stroke:#3a3a3a 1px;background-color:#fff;border-radius:7px;padding:0 5px;height:14px;line-height:14px;display:flex;justify-content:center;align-items:center;bottom:2px;left:-2px}@media only screen and (max-width:1000px){.styles__right___385mx-camelCase{width:300px}.styles__rightBlook___1JkY7-camelCase{bottom:64px;left:78.5px;width:143px}.styles__rightTopText___2VrKK-camelCase{top:5px;left:2.5%;width:95%}.styles__highlightedName___2wOtf-camelCase{height:30px}.styles__highlightedRarity___1EXx_-camelCase{font-size:20px}.styles__highlightedBottom___QmY2Y-camelCase{bottom:15px;font-size:20px}.styles__rightButtonRow___3a0GF-camelCase{top:calc(50% + 180px);width:300px}.styles__rightButton___2_ZIX-camelCase{width:140px}.styles__rightButtonInside___14imT-camelCase{height:30px;font-size:22px}.styles__rightButtonImg___1WJdo-camelCase{width:22px;height:22px;margin-top:3px}.styles__rightButtonIcon___29lC9-camelCase{font-size:20px}.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{width:calc(95% - 320px)}}.styles__mBlooksButton___3f-YA-camelCase{position:absolute!important;bottom:calc(50% + 180px);left:50%;transform:translateX(-50%);visibility:hidden}.styles__mBlooksButtonInside___2RBAk-camelCase{width:200px;height:30px;color:#fff;text-shadow:1px 2px rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:22px;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:685px){.styles__left___9beun-camelCase,.styles__topButtonRow___2HIbg-camelCase{visibility:hidden}.styles__left___9beun-camelCase{top:15px;left:2.5%;height:calc(100% - 30px);width:95%;z-index:5}.styles__right___385mx-camelCase{right:calc(50% - 150px)}.styles__rightButtonRow___3a0GF-camelCase{right:5%;width:90%}.styles__mBlooksButton___3f-YA-camelCase,.styles__mShowLeft___1IXx3-camelCase{visibility:visible}}", ""]), t.locals = {
                right: "styles__right___385mx-camelCase",
                rightBackground: "styles__rightBackground___36mp5-camelCase",
                rightBottom: "styles__rightBottom___F7qsO-camelCase",
                rightBlook: "styles__rightBlook___1JkY7-camelCase",
                rightTopText: "styles__rightTopText___2VrKK-camelCase",
                highlightedName: "styles__highlightedName___2wOtf-camelCase",
                highlightedRarity: "styles__highlightedRarity___1EXx_-camelCase",
                highlightedBottom: "styles__highlightedBottom___QmY2Y-camelCase",
                rightButtonRow: "styles__rightButtonRow___3a0GF-camelCase",
                rightButton: "styles__rightButton___2_ZIX-camelCase",
                rightButtonInside: "styles__rightButtonInside___14imT-camelCase",
                rightButtonImg: "styles__rightButtonImg___1WJdo-camelCase",
                rightButtonIcon: "styles__rightButtonIcon___29lC9-camelCase",
                topButtonRow: "styles__topButtonRow___2HIbg-camelCase",
                settingButton: "styles__settingButton___2xaQu-camelCase",
                left: "styles__left___9beun-camelCase",
                blooksHolder: "styles__blooksHolder___3qZR1-camelCase",
                soloBlooksHolder: "styles__soloBlooksHolder___1f8ku-camelCase",
                setHolder: "styles__setHolder___rVq3Z-camelCase",
                setTop: "styles__setTop___wIaVS-camelCase",
                setTopBackground: "styles__setTopBackground___342Wr-camelCase",
                setText: "styles__setText___1PQLQ-camelCase",
                setDivider: "styles__setDivider___3da0c-camelCase",
                setBlooks: "styles__setBlooks___3xamH-camelCase",
                blookContainer: "styles__blookContainer___3JrKb-camelCase",
                blook: "styles__blook___bNr_t-camelCase",
                lockedBlook: "styles__lockedBlook___3oGaX-camelCase",
                blookLock: "styles__blookLock___3Kgua-camelCase",
                blookText: "styles__blookText___3AMdK-camelCase",
                mBlooksButton: "styles__mBlooksButton___3f-YA-camelCase",
                mBlooksButtonInside: "styles__mBlooksButtonInside___2RBAk-camelCase",
                mShowLeft: "styles__mShowLeft___1IXx3-camelCase"
            }
        },
        byOs: function(e, t, i) {
            var s = i("bSFd");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        kSiZ: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                o = i("ANjH"),
                r = i("/MKj"),
                n = i("17x9"),
                l = i.n(n),
                c = i("Ty5D"),
                h = i("VgyX"),
                u = i("Xst1"),
                d = i.n(u),
                m = i("ZVoO"),
                p = i("XTAU"),
                g = i("74sb"),
                f = i("+fLB"),
                b = i("qnYv");

            function y(e) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function k(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
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
                    var i, s = j(e);
                    if (t) {
                        var a = j(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return C(this, i)
                }
            }

            function C(e, t) {
                if (t && ("object" === y(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && x(e, t)
                }(r, e);
                var t, i, s, o = w(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = r, (i = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var i = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(s) {
                                        var a = s || {};
                                        Object.entries(a).forEach((function(e) {
                                            var t = v(e, 2),
                                                s = t[0],
                                                a = t[1],
                                                o = {};
                                            if (a.i)
                                                if (Array.isArray(a.i))
                                                    for (var r = 0; r < a.i.length; r++) {
                                                        var n = a.i[r];
                                                        n && (o[r] = n)
                                                    } else o = a.i;
                                                else o = {};
                                            var l = {};
                                            if (a.c)
                                                if (Array.isArray(a.c))
                                                    for (var c = 0; c < a.c.length; c++) {
                                                        var h = a.c[c];
                                                        h && (l[c] = h)
                                                    } else l = a.c;
                                                else l = {};
                                            i[s] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && b.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        xp: isNaN(e.xp) ? 0 : Math.round(Number(e.xp)),
                                                        corrects: i[e.name] ? i[e.name].corrects : {},
                                                        incorrects: i[e.name] ? i[e.name].incorrects : {}
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
                        return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? a.a.createElement("div", {
                            className: d.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "url(https://media.blooket.com/image/upload/v1663050923/Media/survivor/FinalSnowTile.png)",
                                backgroundSize: 400,
                                backgroundPosition: "-100px -100px"
                            }
                        }, a.a.createElement(p.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? a.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(g.o)(e.xp), " XP")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "brawl"
                        }) : null) : a.a.createElement(c.a, {
                            to: "/dashboard"
                        })
                    }
                }]) && k(t.prototype, i), s && k(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(a.a.Component);
            T.propTypes = {
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
                return Object(o.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(f.d)(T)))
        },
        qRPF: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__phaserHolder___2taSj-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.styles__dmgHolder___GitHv-camelCase{width:250px;position:absolute;top:5px;left:5px;display:flex;flex-direction:column}.styles__dmgRow___3YJYO-camelCase{height:14px;margin:2px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:relative;color:#3a3a3a;font-size:12px}.styles__dmgBar___3_Gz3-camelCase,.styles__dmgRow___3YJYO-camelCase{width:100%;transition:.2s}.styles__dmgBar___3_Gz3-camelCase{background-color:#0bc2cf;height:100%;position:absolute;top:0;left:0;opacity:.4;transform-origin:left center}.styles__pauseButton___1OYOT-camelCase{color:#fff;-webkit-text-stroke:1px #3a3a3a;font-size:20px;position:absolute;top:10px;right:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__xpHolder___2PMh_-camelCase{width:calc(100% - 20px);height:20px;bottom:5px;left:10px}.styles__xpBar___2BFKm-camelCase,.styles__xpHolder___2PMh_-camelCase{position:absolute}.styles__xpBar___2BFKm-camelCase{border-radius:10px;background-color:#0bc2cf;width:100%;height:100%;transition:.2s;top:0;left:0}.styles__xpHighlight___cW-pk-camelCase{border-radius:3px;height:6px;background-color:#6eeef7;width:calc(100% - 20px);position:absolute;top:4px;left:10px}.styles__levelText___3NLee-camelCase{font-size:18px;font-weight:700;color:#fff;right:10px;bottom:0;padding:2px 5px;background-color:rgba(0,0,0,.4);border-radius:5px}.styles__levelText___3NLee-camelCase,.styles__levelUpHolder___1Ewkg-camelCase{position:absolute;display:flex;justify-content:center;align-items:center}.styles__levelUpHolder___1Ewkg-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:400px;border-radius:10px;background-color:#4f5b74;background:linear-gradient(0deg,#374154,#4f5b74);color:#d3effc;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.25);padding:7px 20px 14px;box-sizing:border-box;flex-direction:column}.styles__levelUpTopper___2vvLw-camelCase{width:200px;left:50%;bottom:calc(100% - 25px);transform:translateX(-50%)}.styles__leftCracks___PBlm9-camelCase,.styles__levelUpTopper___2vvLw-camelCase,.styles__rightCracks___1IA4k-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__leftCracks___PBlm9-camelCase,.styles__rightCracks___1IA4k-camelCase{bottom:6px;left:0;height:calc(100% - 20px)}.styles__rightCracks___1IA4k-camelCase{left:unset;right:0}.styles__levelUpImage___3Wqrq-camelCase{width:150px;margin-top:20px}.styles__levelUpSubImage___3GT2C-camelCase{width:220px;margin-bottom:7px}.styles__levelUpOption___rMU2B-camelCase{margin:6px 0;width:100%}.styles__levelUpInside___FAr8h-camelCase{display:flex;flex-direction:row;align-items:center;width:100%;text-align:left;color:#d3effc}.styles__levelUpLeftContainer___3cpI0-camelCase{width:50px;height:53.5px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;margin-right:10px;margin-left:5px}.styles__levelUpImgBackground___2ari2-camelCase{width:100%;position:absolute;z-index:-1}.styles__levelUpImg___3KCIw-camelCase{width:45%;height:45%;-o-object-fit:contain;object-fit:contain;transform:rotate(225deg);filter:drop-shadow(0 0 4px rgba(0,0,0,.3))}.styles__levelUpRight___2kBQn-camelCase{width:calc(100% - 55px);display:flex;flex-direction:column}.styles__levelUpLevel___32TJk-camelCase{font-size:8px;color:#d3effc;font-weight:700;margin-top:5px;margin-bottom:4px}.styles__levelUpAbility___2dIR9-camelCase{font-size:18px;font-weight:700}.styles__levelUpDesc___HG13I-camelCase{font-size:16px;margin-top:3px}.styles__abilitiesRow___cTZq5-camelCase{position:absolute;bottom:30px;left:7px;width:300px;display:flex;flex-direction:row}.styles__abilityContainer___2lkXE-camelCase{width:25px;height:25px;margin:0 3px;display:flex;align-items:center;justify-content:center;position:relative}.styles__abilityImg___is0Nm-camelCase{width:80%;height:80%;-o-object-fit:contain;object-fit:contain;transform:rotate(225deg)}.styles__abilityLevel___34-02-camelCase{position:absolute;bottom:0;right:0;color:#3a3a3a;font-size:12px;font-weight:700}.styles__questionContainer___3jqqB-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;-webkit-animation:styles__growIn___m1-6h-camelCase .4s linear forwards;animation:styles__growIn___m1-6h-camelCase .4s linear forwards}@-webkit-keyframes styles__growIn___m1-6h-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___m1-6h-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___19xZP-camelCase{background-color:#fff;z-index:1}.styles__feedbackContainer___19xZP-camelCase,.styles__gameOverContainer___11xEm-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__gameOverContainer___11xEm-camelCase{background-color:rgba(0,0,0,.6);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;-webkit-animation:styles__fadeIn___2pugN-camelCase .5s forwards;animation:styles__fadeIn___2pugN-camelCase .5s forwards}@-webkit-keyframes styles__fadeIn___2pugN-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2pugN-camelCase{0%{opacity:0}to{opacity:1}}.styles__gameOverText___3mv9W-camelCase{font-family:Titan One,sans-serif;font-size:9vw}.styles__gameOverDesc___3NqL_-camelCase,.styles__gameOverText___3mv9W-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverDesc___3NqL_-camelCase{font-size:3vw;width:80%;text-align:center;margin:10px auto}@media only screen and (max-height:450px){.styles__levelUpTopper___2vvLw-camelCase{display:none}.styles__levelUpImage___3Wqrq-camelCase{margin-top:5px}}@media only screen and (max-width:600px){.styles__gameOverText___3mv9W-camelCase{font-size:15vw}.styles__gameOverDesc___3NqL_-camelCase{font-size:5vw}}", ""]), t.locals = {
                phaserHolder: "styles__phaserHolder___2taSj-camelCase",
                dmgHolder: "styles__dmgHolder___GitHv-camelCase",
                dmgRow: "styles__dmgRow___3YJYO-camelCase",
                dmgBar: "styles__dmgBar___3_Gz3-camelCase",
                pauseButton: "styles__pauseButton___1OYOT-camelCase",
                xpHolder: "styles__xpHolder___2PMh_-camelCase",
                xpBar: "styles__xpBar___2BFKm-camelCase",
                xpHighlight: "styles__xpHighlight___cW-pk-camelCase",
                levelText: "styles__levelText___3NLee-camelCase",
                levelUpHolder: "styles__levelUpHolder___1Ewkg-camelCase",
                levelUpTopper: "styles__levelUpTopper___2vvLw-camelCase",
                leftCracks: "styles__leftCracks___PBlm9-camelCase",
                rightCracks: "styles__rightCracks___1IA4k-camelCase",
                levelUpImage: "styles__levelUpImage___3Wqrq-camelCase",
                levelUpSubImage: "styles__levelUpSubImage___3GT2C-camelCase",
                levelUpOption: "styles__levelUpOption___rMU2B-camelCase",
                levelUpInside: "styles__levelUpInside___FAr8h-camelCase",
                levelUpLeftContainer: "styles__levelUpLeftContainer___3cpI0-camelCase",
                levelUpImgBackground: "styles__levelUpImgBackground___2ari2-camelCase",
                levelUpImg: "styles__levelUpImg___3KCIw-camelCase",
                levelUpRight: "styles__levelUpRight___2kBQn-camelCase",
                levelUpLevel: "styles__levelUpLevel___32TJk-camelCase",
                levelUpAbility: "styles__levelUpAbility___2dIR9-camelCase",
                levelUpDesc: "styles__levelUpDesc___HG13I-camelCase",
                abilitiesRow: "styles__abilitiesRow___cTZq5-camelCase",
                abilityContainer: "styles__abilityContainer___2lkXE-camelCase",
                abilityImg: "styles__abilityImg___is0Nm-camelCase",
                abilityLevel: "styles__abilityLevel___34-02-camelCase",
                questionContainer: "styles__questionContainer___3jqqB-camelCase",
                growIn: "styles__growIn___m1-6h-camelCase",
                feedbackContainer: "styles__feedbackContainer___19xZP-camelCase",
                gameOverContainer: "styles__gameOverContainer___11xEm-camelCase",
                fadeIn: "styles__fadeIn___2pugN-camelCase",
                gameOverText: "styles__gameOverText___3mv9W-camelCase",
                gameOverDesc: "styles__gameOverDesc___3NqL_-camelCase"
            }
        },
        r07w: function(e, t, i) {
            var s = i("7dx4");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "xP+p": function(e, t, i) {
            "use strict";
            i.d(t, "c", (function() {
                return H
            })), i.d(t, "b", (function() {
                return X
            })), i.d(t, "d", (function() {
                return Y
            }));
            var s = i("q1tI"),
                a = i.n(s),
                o = i("ANjH"),
                r = i("/MKj"),
                n = i("17x9"),
                l = i.n(n),
                c = i("Ty5D"),
                h = i("H1WH"),
                u = i("4HzQ"),
                d = i("TSYQ"),
                m = i.n(d),
                p = i("E8Bj"),
                g = i("byOs"),
                f = i.n(g),
                b = i("Xst1"),
                y = i.n(b),
                v = i("XTAU"),
                _ = i("ca/f"),
                k = i("0oXL"),
                x = i("lmLo"),
                w = i("uzwL"),
                C = i("4otK"),
                j = i("sfIM"),
                T = i("1u4q"),
                O = i("pMTK"),
                B = i("74sb"),
                I = i("qnYv"),
                P = i("i4/Q"),
                M = i("LHn/");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function A(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, o = [],
                        r = !0,
                        n = !1;
                    try {
                        for (i = i.call(e); !(r = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    i = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    a = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    r = s.toStringTag || "@@toStringTag";

                function n(e, t, i) {
                    return Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    n({}, "")
                } catch (e) {
                    n = function(e, t, i) {
                        return e[t] = i
                    }
                }

                function l(e, t, i, s) {
                    var a = t && t.prototype instanceof u ? t : u,
                        o = Object.create(a.prototype),
                        r = new w(s || []);
                    return o._invoke = function(e, t, i) {
                        var s = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === a) throw o;
                                return j()
                            }
                            for (i.method = a, i.arg = o;;) {
                                var r = i.delegate;
                                if (r) {
                                    var n = _(r, i);
                                    if (n) {
                                        if (n === h) continue;
                                        return n
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === s) throw s = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = "executing";
                                var l = c(e, t, i);
                                if ("normal" === l.type) {
                                    if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                            }
                        }
                    }(e, i, r), o
                }

                function c(e, t, i) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, i)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function m() {}
                var p = {};
                n(p, a, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    f = g && g(g(C([])));
                f && f !== t && i.call(f, a) && (p = f);
                var b = m.prototype = u.prototype = Object.create(p);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        n(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(a, o) {
                        function r() {
                            return new t((function(s, r) {
                                ! function s(a, o, r, n) {
                                    var l = c(e[a], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == S(u) && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, r, n)
                                        }), (function(e) {
                                            s("throw", e, r, n)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, r(h)
                                        }), (function(e) {
                                            return s("throw", e, r, n)
                                        }))
                                    }
                                    n(l.arg)
                                }(a, o, s, r)
                            }))
                        }
                        return s = s ? s.then(r, r) : r()
                    }
                }

                function _(e, t) {
                    var i = e.iterator[t.method];
                    if (void 0 === i) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(i, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var a = s.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function w(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return d.prototype = m, n(b, "constructor", m), n(m, "constructor", d), d.displayName = n(m, r, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, n(e, r, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(v.prototype), n(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, i, s, a, o) {
                    void 0 === o && (o = Promise);
                    var r = new v(l(t, i, s, a), o);
                    return e.isGeneratorFunction(i) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, y(b), n(b, r, "Generator"), n(b, a, (function() {
                    return this
                })), n(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t.reverse(),
                        function i() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return i.value = s, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, e.values = C, w.prototype = {
                    constructor: w,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(i, s) {
                            return r.type = "throw", r.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var n = i.call(o, "catchLoc"),
                                    l = i.call(o, "finallyLoc");
                                if (n && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (n) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var a = this.tryEntries[s];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), x(i), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var s = i.completion;
                                if ("throw" === s.type) {
                                    var a = s.arg;
                                    x(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function z(e, t, i, s, a, o, r) {
                try {
                    var n = e[o](r),
                        l = n.value
                } catch (e) {
                    return void i(e)
                }
                n.done ? t(l) : Promise.resolve(l).then(s, a)
            }

            function D(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function U(e) {
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
                    var i, s = q(e);
                    if (t) {
                        var a = q(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return V(this, i)
                }
            }

            function V(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return L(e)
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var H = {
                    Spooky: "https://media.blooket.com/image/upload/v1657660845/Media/blooksUI/Highlighted_Background_Spooky_Square_Corners.svg",
                    Safari: "https://media.blooket.com/image/upload/v1657660847/Media/blooksUI/Highlighted_Background_Safari.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657660847/Media/blooksUI/Highlighted_Background_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657357204/Media/blooksUI/Highlighted_Background_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1658124813/Media/blooksUI/Highlighted_Background_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657660845/Media/blooksUI/Highlighted_Background_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657703782/Media/blooksUI/Highlighted_Background_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1658124813/Media/blooksUI/Highlighted_Background_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063883/Media/blooksUI/Highlighted_Background_Ice_Monster.svg"
                },
                X = "https://media.blooket.com/image/upload/v1657825741/Media/blooksUI/Highlighted_Background_Generic.svg",
                G = {
                    Spooky: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Spooky.svg",
                    Safari: "https://media.blooket.com/image/upload/v1658611113/Media/blooksUI/Array_Tile_Safari_2.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657937256/Media/blooksUI/Array_Tile_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1657937255/Media/blooksUI/Array_Tile_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1658612399/Media/blooksUI/Array_Tile_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1657937254/Media/blooksUI/Array_Tile_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1657937256/Media/blooksUI/Array_Tile_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1657937252/Media/blooksUI/Array_Tile_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063885/Media/blooksUI/Array_Tile_Ice_Monster.svg"
                },
                Y = {
                    Spooky: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Spooky.svg",
                    Safari: "https://media.blooket.com/image/upload/v1658611113/Media/blooksUI/Nav_Icon_Safari_2.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657323226/Media/blooksUI/Nav_Icon_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1657323225/Media/blooksUI/Nav_Icon_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657323226/Media/blooksUI/Nav_Icon_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1657323222/Media/blooksUI/Nav_Icon_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1657323224/Media/blooksUI/Nav_Icon_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1658099364/Media/blooksUI/Nav_Icon_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063881/Media/blooksUI/Nav_Icon_Ice_Monster.svg"
                },
                W = {
                    Spooky: {
                        visible: !1,
                        free: !1
                    },
                    Safari: {
                        visible: !0,
                        free: !1
                    },
                    "Forest Animal": {
                        visible: !0,
                        free: !0
                    },
                    Space: {
                        visible: !0,
                        free: !1
                    },
                    "Arctic Animal": {
                        visible: !0,
                        free: !0
                    },
                    Breakfast: {
                        visible: !0,
                        free: !1
                    },
                    Dino: {
                        visible: !0,
                        free: !1
                    },
                    Aquatic: {
                        visible: !0,
                        free: !1
                    },
                    Blizzard: {
                        visible: !1,
                        free: !1
                    },
                    Medieval: {
                        visible: !0,
                        free: !1
                    },
                    Pet: {
                        visible: !0,
                        free: !0
                    },
                    Wonderland: {
                        visible: !0,
                        free: !1
                    },
                    Bot: {
                        visible: !0,
                        free: !1
                    },
                    "Farm Animal": {
                        visible: !0,
                        free: !0
                    },
                    "Tropical Animal": {
                        visible: !0,
                        free: !0
                    },
                    "Ice Monster": {
                        visible: !0,
                        free: !1
                    },
                    Color: {
                        visible: !1
                    }
                },
                Q = function(e) {
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
                    var t, i, s, o, r, n = U(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = n.call(this, e)).state = {
                            user: null,
                            blookData: {},
                            allSets: [],
                            ready: !1,
                            blook: "",
                            selling: !1,
                            loadingSell: !1,
                            numToSell: 0,
                            showFree: !1,
                            showPacks: !0,
                            showMobileBlooks: !1
                        }, t.here = !0, t.setBlook = t.setBlook.bind(L(t)), t.setNewBlooks = t.setNewBlooks.bind(L(t)), t.sellBlook = t.sellBlook.bind(L(t)), t
                    }
                    return t = l, (i = [{
                        key: "componentDidMount",
                        value: (o = N().mark((function e() {
                            var t, i = this;
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
                                        }), I.a.get("/api/users/blooks").then((function(e) {
                                            i.setNewBlooks(e.data, i.state.showFree)
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
                            return new Promise((function(i, s) {
                                var a = o.apply(e, t);

                                function r(e) {
                                    z(a, i, s, r, n, "next", e)
                                }

                                function n(e) {
                                    z(a, i, s, r, n, "throw", e)
                                }
                                r(void 0)
                            }))
                        }, function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1, clearTimeout(this.timeout)
                        }
                    }, {
                        key: "setBlook",
                        value: function(e) {
                            this.state.blookData[e] && this.setState({
                                blook: e,
                                showMobileBlooks: !1,
                                showFree: !this.state.showMobileBlooks && this.state.showFree
                            })
                        }
                    }, {
                        key: "setNewBlooks",
                        value: function(e, t) {
                            var i = [];
                            if (Object.entries(w.a).forEach((function(s) {
                                    var a = E(s, 2),
                                        o = a[0],
                                        r = a[1];
                                    i.includes(r.set) || !e[o] && !W[r.set].visible || W[r.set].free && !t || i.push(r.set)
                                })), !this.state.blook || !e[this.state.blook]) {
                                var s = Object.keys(e);
                                0 === s.length ? this.setState({
                                    blook: Object(B.p)(j.b)
                                }) : this.setState({
                                    blook: Object(B.p)(s)
                                })
                            }
                            this.setState({
                                ready: !0,
                                selling: !1,
                                loadingSell: !1,
                                blookData: e,
                                allSets: i,
                                showFree: t
                            })
                        }
                    }, {
                        key: "sellBlook",
                        value: function(e, t) {
                            var i = this;
                            if (e.preventDefault(), !t || !this.state.numToSell) return this.setState({
                                selling: !1
                            });
                            this.setState({
                                loadingSell: !0
                            }), I.a.put("/api/users/sellblook", {
                                name: this.state.user.name,
                                blook: this.state.blook,
                                numSold: this.state.numToSell
                            }).then((function(e) {
                                i.here && i.setNewBlooks(e.data.unlocks, i.state.showFree)
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return a.a.createElement("div", {
                                className: h.isMobile ? y.a.mBody : y.a.body,
                                id: "body"
                            }, a.a.createElement(v.a, {
                                title: "My Blooks | Blooket",
                                desc: "Blooks represent players and compete in races during games. Use this page to view, sell, and manage your Blooks."
                            }), a.a.createElement(P.a, {
                                user: this.state.user,
                                page: "Blooks"
                            }), this.state.ready ? a.a.createElement("div", {
                                className: y.a.profileBody
                            }, a.a.createElement("div", {
                                className: f.a.topButtonRow
                            }, a.a.createElement("div", {
                                className: f.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setNewBlooks(e.state.blookData, !e.state.showFree)
                                }
                            }, this.state.showFree ? "Hide Free Blooks" : "Show Free Blooks"), a.a.createElement("div", {
                                className: f.a.settingButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showPacks: !e.state.showPacks
                                    })
                                }
                            }, this.state.showPacks ? "Hide Packs" : "Show Packs")), a.a.createElement("div", {
                                className: m()(f.a.left, A({}, f.a.mShowLeft, this.state.showMobileBlooks))
                            }, this.state.showPacks ? a.a.createElement("div", {
                                className: f.a.blooksHolder
                            }, this.state.allSets.map((function(t) {
                                return a.a.createElement("div", {
                                    className: f.a.setHolder,
                                    key: t
                                }, a.a.createElement("div", {
                                    className: f.a.setTop
                                }, a.a.createElement("div", {
                                    className: f.a.setTopBackground,
                                    style: {
                                        backgroundImage: "url(".concat(G[t], ")")
                                    }
                                }), a.a.createElement("div", {
                                    className: f.a.setText
                                }, "".concat(t, " Pack")), a.a.createElement("div", {
                                    className: f.a.setDivider
                                })), a.a.createElement("div", {
                                    className: f.a.setBlooks
                                }, Object.entries(w.a).filter((function(i) {
                                    var s = E(i, 2),
                                        a = s[0];
                                    return s[1].set === t && (e.state.blookData[a] || !C.a.includes(a))
                                })).map((function(t) {
                                    var i = E(t, 1)[0];
                                    return a.a.createElement("div", {
                                        className: f.a.blookContainer,
                                        key: i,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setBlook(i)
                                        }
                                    }, a.a.createElement(k.a, {
                                        name: i,
                                        className: m()(f.a.blook, A({}, f.a.lockedBlook, !j.b.includes(i) && !e.state.blookData[i]))
                                    }), j.b.includes(i) || e.state.blookData[i] ? j.b.includes(i) ? null : a.a.createElement("div", {
                                        className: f.a.blookText,
                                        style: {
                                            backgroundColor: B.t[Object(O.a)(i)]
                                        }
                                    }, e.state.blookData[i] ? Object(B.o)(e.state.blookData[i]) : 0) : a.a.createElement("i", {
                                        className: m()("fas fa-lock", f.a.blookLock)
                                    }))
                                }))))
                            }))) : a.a.createElement("div", {
                                className: f.a.soloBlooksHolder
                            }, Object.entries(w.a).filter((function(t) {
                                var i = E(t, 2),
                                    s = i[0],
                                    a = i[1];
                                return !(W[a.set].free && !e.state.showFree) && (e.state.blookData[s] || !C.a.includes(s))
                            })).map((function(t) {
                                var i = E(t, 1)[0];
                                return a.a.createElement("div", {
                                    className: f.a.blookContainer,
                                    key: i,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setBlook(i)
                                    }
                                }, a.a.createElement(k.a, {
                                    name: i,
                                    className: m()(f.a.blook, A({}, f.a.lockedBlook, !j.b.includes(i) && !e.state.blookData[i]))
                                }), j.b.includes(i) || e.state.blookData[i] ? j.b.includes(i) ? null : a.a.createElement("div", {
                                    className: f.a.blookText,
                                    style: {
                                        backgroundColor: B.t[Object(O.a)(i)]
                                    }
                                }, e.state.blookData[i] ? Object(B.o)(e.state.blookData[i]) : 0) : a.a.createElement("i", {
                                    className: m()("fas fa-lock", f.a.blookLock)
                                }))
                            })))), a.a.createElement(x.a, {
                                outsideClass: f.a.mBlooksButton,
                                onClick: function() {
                                    return e.setState({
                                        showMobileBlooks: !0,
                                        showFree: !0
                                    })
                                },
                                color: "#9a49aa"
                            }, a.a.createElement("div", {
                                className: f.a.mBlooksButtonInside
                            }, "Change Blook")), a.a.createElement("div", {
                                className: f.a.right
                            }, a.a.createElement("img", {
                                src: H[w.a[this.state.blook].set] || X,
                                alt: "Background",
                                className: f.a.rightBackground,
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: f.a.rightTopText
                            }, a.a.createElement(u.Textfit, {
                                className: f.a.highlightedName,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: 40
                            }, this.state.blook), a.a.createElement("div", {
                                className: f.a.highlightedRarity,
                                style: {
                                    color: B.t[Object(O.a)(this.state.blook)]
                                }
                            }, Object(O.a)(this.state.blook))), a.a.createElement(k.a, {
                                name: this.state.blook,
                                className: f.a.rightBlook
                            }), a.a.createElement("div", {
                                className: f.a.highlightedBottom
                            }, j.b.includes(this.state.blook) ? "Free Blook" : this.state.blookData[this.state.blook] ? "".concat(Object(B.o)(this.state.blookData[this.state.blook]), " Owned") : "Locked"), a.a.createElement("div", {
                                className: f.a.rightBottom
                            })), a.a.createElement("div", {
                                className: f.a.rightButtonRow
                            }, a.a.createElement(x.a, {
                                outsideClass: f.a.rightButton,
                                onClick: function() {
                                    return e.setState({
                                        selling: !0,
                                        numToSell: 1
                                    })
                                },
                                color: "#1f77b4"
                            }, a.a.createElement("div", {
                                className: f.a.rightButtonInside
                            }, a.a.createElement("img", {
                                src: M.a.basic.token,
                                alt: "Token",
                                className: f.a.rightButtonImg,
                                draggable: !1
                            }), "Sell")))) : null, this.state.selling ? a.a.createElement(_.a, {
                                text: "Sell ".concat(this.state.blook, " Blooks for ").concat(Object(T.a)(this.state.blook), " tokens each:"),
                                loading: this.state.loadingSell,
                                numValue: this.state.numToSell,
                                numChange: function(t) {
                                    return e.setState({
                                        numToSell: Math.max(Math.min(t.target.value, e.state.blookData[e.state.blook]), 0)
                                    })
                                },
                                numTotal: this.state.blookData[this.state.blook],
                                buttonOne: {
                                    text: "Yes",
                                    click: function(t) {
                                        return e.sellBlook(t, !0)
                                    },
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function(t) {
                                        return e.sellBlook(t, !1)
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && D(t.prototype, i), s && D(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            Q.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(p.c)(Object(c.g)(Object(r.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(Q)))
        }
    }
]);