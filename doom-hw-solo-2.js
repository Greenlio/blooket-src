(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        "2qfb": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("OA+j"),
                _ = a.n(c),
                m = a("gvfT"),
                d = a("lWrb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return p(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
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
                    var a, s = C(e);
                    if (t) {
                        var n = C(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return g(this, a)
                }
            }

            function g(e, t) {
                if (t && ("object" === u(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return b(e)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function x(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(a), !0).forEach((function(t) {
                        k(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function k(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var E = [v({
                    blook: "Chick"
                }, m.c.Chick), "Piggy Bank", v({
                    blook: "Capuchin"
                }, m.c.Capuchin)],
                T = function(e) {
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
                    var t, a, s, o = w(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this, e)).state = {
                            cards: e.isTutorial ? E : Object(m.d)(e.type, 3, e.noArtifacts),
                            flippedArray: [!0, !0, !0],
                            showDeck: !1
                        }, t.hasSelected = !1, t.select = t.select.bind(b(t)), t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = 0;
                            this.flipInterval = setInterval((function() {
                                var a = f(e.state.flippedArray);
                                a[t] = !1, e.setState({
                                    flippedArray: a
                                }), t += 1
                            }), 300)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.flipInterval)
                        }
                    }, {
                        key: "select",
                        value: function(e) {
                            this.state.flippedArray[2] || this.hasSelected || (this.hasSelected = !0, this.props.onClick(this.state.cards[e]))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return n.a.createElement("div", {
                                className: _.a.container
                            }, n.a.createElement("div", {
                                className: _.a.header
                            }, "Choose a Card!"), n.a.createElement("div", {
                                className: l()(_.a.cardContainer, this.props.noThird ? _.a.card1Only : _.a.card1),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(0)
                                },
                                id: "card1"
                            }, n.a.createElement(d.a, {
                                card: this.state.cards[0],
                                flipped: this.state.flippedArray[0],
                                isArtifact: !this.state.cards[0].blook
                            })), n.a.createElement("div", {
                                className: l()(_.a.cardContainer, this.props.noThird ? _.a.card2Only : _.a.card2),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(1)
                                },
                                id: "card2"
                            }, n.a.createElement(d.a, {
                                card: this.state.cards[1],
                                flipped: this.state.flippedArray[1],
                                isArtifact: !this.state.cards[1].blook
                            })), this.props.noThird ? null : n.a.createElement("div", {
                                className: l()(_.a.cardContainer, _.a.card3),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(2)
                                },
                                id: "card3"
                            }, n.a.createElement(d.a, {
                                card: this.state.cards[2],
                                flipped: this.state.flippedArray[2],
                                isArtifact: !this.state.cards[2].blook
                            })), this.props.coins ? n.a.createElement("div", {
                                className: _.a.coinsText
                            }, "+".concat(this.props.coins, " Coins")) : null, n.a.createElement("div", {
                                className: _.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !0
                                    })
                                }
                            }, n.a.createElement("i", {
                                className: l()("fas fa-layer-group", _.a.deckIcon)
                            }), n.a.createElement("div", {
                                className: _.a.deckText
                            }, "View Deck")), this.state.showDeck ? n.a.createElement("div", {
                                className: _.a.deckContainer
                            }, this.props.cards.map((function(e, t) {
                                return n.a.createElement("div", {
                                    className: _.a.deckCardContainer,
                                    key: t
                                }, n.a.createElement(d.a, {
                                    card: e,
                                    flipped: !1,
                                    isArtifact: !e.blook
                                }))
                            })), n.a.createElement("i", {
                                className: l()("fas fa-times", _.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !1
                                    })
                                }
                            })) : null)
                        }
                    }]) && y(t.prototype, a), s && y(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(n.a.Component);
            T.propTypes = {
                type: r.a.string.isRequired,
                onClick: r.a.func,
                coins: r.a.number,
                cards: r.a.array,
                noArtifacts: r.a.bool,
                noThird: r.a.bool,
                isTutorial: r.a.bool
            }, t.a = T
        },
        "3lxn": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__containerBig___48wq9-camelCase{width:460px}.styles__container___3SqSB-camelCase,.styles__containerBig___48wq9-camelCase{opacity:1;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .25s linear;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__container___3SqSB-camelCase{width:400px}.styles__header___3rdHC-camelCase{font-size:44px;margin:15px 10px 20px}.styles__footer___2XG1Y-camelCase,.styles__header___3rdHC-camelCase{color:#0bc2cf;text-align:center;font-family:Titan One,sans-serif}.styles__footer___2XG1Y-camelCase{font-size:26px;width:90%;margin:0 auto;padding:15px 0 10px}.styles__invisible___1qPEn-camelCase{opacity:0;transition:all .5s linear}@media only screen and (max-width:600px){.styles__container___3SqSB-camelCase,.styles__containerBig___48wq9-camelCase{width:280px}.styles__header___3rdHC-camelCase{font-size:36px}.styles__footer___2XG1Y-camelCase{font-size:24px}}", ""]), t.locals = {
                containerBig: "styles__containerBig___48wq9-camelCase",
                container: "styles__container___3SqSB-camelCase",
                header: "styles__header___3rdHC-camelCase",
                footer: "styles__footer___2XG1Y-camelCase",
                invisible: "styles__invisible___1qPEn-camelCase"
            }
        },
        "7t86": function(e, t, a) {
            var s = a("u++o");
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
        "7uOW": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("Ruj+"),
                l = a.n(i),
                c = a("XOuL"),
                _ = function(e) {
                    var t = e.header,
                        a = e.footer,
                        s = e.blook,
                        o = e.transition;
                    return n.a.createElement("div", {
                        className: o ? l.a.invisible : null
                    }, n.a.createElement("div", {
                        className: a ? l.a.containerBig : l.a.container
                    }, n.a.createElement("div", {
                        className: l.a.header
                    }, t), n.a.createElement(c.a, {
                        blook: s
                    }), a ? n.a.createElement("div", {
                        className: l.a.footer
                    }, a) : null))
                };
            _.propTypes = {
                header: r.a.string,
                footer: r.a.string,
                blook: r.a.string,
                transition: r.a.bool
            }, t.a = _
        },
        "9BmH": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2Gxlh-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__container___2Gxlh-camelCase,.styles__text___1a41k-camelCase{position:absolute}.styles__text___1a41k-camelCase{width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw;opacity:0}.styles__n1___2zMcs-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 0ms forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 2.5s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 0ms forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 2.5s forwards}.styles__n2___psMc4-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 2.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 4.5s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 2.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 4.5s forwards}.styles__n3___3sfdG-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 4.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 6.5s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 4.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 6.5s forwards}.styles__n4___3OOEn-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 6.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 9s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 6.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 9s forwards}.styles__n5___3aLc8-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 9s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 11.5s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 9s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 11.5s forwards}.styles__n6___39Nu0-camelCase{-webkit-animation:styles__fadeIn___2_sut-camelCase .15s linear 11.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 14s forwards;animation:styles__fadeIn___2_sut-camelCase .15s linear 11.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 14s forwards}@-webkit-keyframes styles__fadeIn___2_sut-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeIn___2_sut-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@-webkit-keyframes styles__fadeOut___2Ni2R-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}@keyframes styles__fadeOut___2Ni2R-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}", ""]), t.locals = {
                container: "styles__container___2Gxlh-camelCase",
                text: "styles__text___1a41k-camelCase",
                n1: "styles__n1___2zMcs-camelCase",
                fadeIn: "styles__fadeIn___2_sut-camelCase",
                fadeOut: "styles__fadeOut___2Ni2R-camelCase",
                n2: "styles__n2___psMc4-camelCase",
                n3: "styles__n3___3sfdG-camelCase",
                n4: "styles__n4___3OOEn-camelCase",
                n5: "styles__n5___3aLc8-camelCase",
                n6: "styles__n6___39Nu0-camelCase"
            }
        },
        "9TPi": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("L4GU"),
                _ = a.n(c),
                m = a("lmLo");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    var a, s = w(e);
                    if (t) {
                        var n = w(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && f(e, t)
                }(r, e);
                var t, a, s, o = p(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        step: {},
                        stepNum: 0
                    }, t.waiting = !1, t.lastElement = null, t.lastZIndex = 1, t.lastOnClick = null, t.lastColor = "", t.lastBorderRadius = 0, t.tourModalRef = n.a.createRef(), t.setStep = t.setStep.bind(h(t)), t.endTour = t.endTour.bind(h(t)), t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        this.parentNode = this.tourModalRef.current.parentNode.id, this.setStep(0)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.waitTimeout)
                    }
                }, {
                    key: "setStep",
                    value: function(e) {
                        var t = this;
                        if (!this.waiting || 0 !== e && this.props.steps[e - 1].elementClick)
                            if (this.lastElement && (this.lastElement.style.zIndex = this.lastZIndex, this.lastOnClick && (this.lastElement.onclick = this.lastOnClick, this.lastOnClick = null), this.lastColor && (this.lastElement.style.backgroundColor = this.lastColor, this.lastColor = "", this.lastElement.style.borderRadius = this.lastBorderRadius, this.lastBorderRadius = "")), e >= this.props.steps.length) this.endTour();
                            else {
                                var a = this.props.steps[e];
                                e - 1 >= 0 && void 0 !== this.props.steps[e - 1].functionIndex && (document.getElementById("body").appendChild(document.getElementById("tourModal")), this.props.functions[this.props.steps[e - 1].functionIndex]()), a.elementId ? (this.lastElement = document.getElementById(a.elementId), this.lastZIndex = this.lastElement.style.zIndex, this.lastElement.style.zIndex = 100, this.lastElement.parentNode.appendChild(document.getElementById("tourModal")), a.elementClick && (this.lastOnClick = this.lastElement.onclick, this.lastElement.onclick = function() {
                                    return t.setStep(e + 1)
                                }), a.backgroundColor && (this.lastColor = this.lastElement.style.backgroundColor, this.lastElement.style.backgroundColor = a.backgroundColor, this.lastBorderRadius = this.lastElement.style.borderRadius, this.lastElement.style.borderRadius = "5px")) : document.getElementById("body").appendChild(document.getElementById("tourModal")), this.setState({
                                    step: a,
                                    stepNum: e
                                }, (function() {
                                    t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                        t.waiting = !1
                                    }), 400)
                                }))
                            }
                    }
                }, {
                    key: "endTour",
                    value: function() {
                        document.getElementById(this.parentNode) && document.getElementById(this.parentNode).appendChild(document.getElementById("tourModal")), this.props.onExit()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            id: "tourModal",
                            ref: this.tourModalRef,
                            className: _.a.modal,
                            hidden: !(this.state.step && this.state.step.text)
                        }, this.state.step && this.state.step.text ? n.a.createElement("div", {
                            className: l()(_.a.messageContainer, this.state.step.className)
                        }, n.a.createElement("div", {
                            className: _.a.textRow
                        }, this.state.step.img ? n.a.createElement("img", {
                            src: this.state.step.img,
                            alt: "Step",
                            className: _.a.messageImg,
                            draggable: !1
                        }) : null, this.state.step.text), this.state.step.nextButtonText ? n.a.createElement(m.a, {
                            color: "#0bc2cf",
                            outsideClass: _.a.nextButton,
                            insideClass: _.a.nextButtonInside,
                            onClick: function() {
                                return e.setStep(e.state.stepNum + 1)
                            }
                        }, this.state.step.nextButtonText) : null) : null)
                    }
                }]) && u(t.prototype, a), s && u(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            g.propTypes = {
                steps: r.a.array,
                onExit: r.a.func,
                functions: r.a.array
            }, t.a = g
        },
        "9WQd": function(e, t, a) {
            var s = a("ROpq");
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
        CTLQ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2Ixqm-camelCase{position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:hidden;background-color:rgba(0,0,0,.6)}.styles__messageContainer___2feZC-camelCase{position:absolute;max-width:280px;width:80%;padding:10px 10px 17px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:column;background-color:#fff;border-radius:7px;font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;z-index:110}.styles__messageImg___2c8tp-camelCase{width:15%;margin:auto 4%}.styles__textRow___2FKnb-camelCase{display:flex;flex-direction:row;align-items:center;width:100%}.styles__nextButton___18VHO-camelCase{margin-top:10px;margin-left:auto}.styles__nextButtonInside___1_Tcv-camelCase{height:20px;padding:5px 15px}", ""]), t.locals = {
                modal: "styles__modal___2Ixqm-camelCase",
                messageContainer: "styles__messageContainer___2feZC-camelCase",
                messageImg: "styles__messageImg___2c8tp-camelCase",
                textRow: "styles__textRow___2FKnb-camelCase",
                nextButton: "styles__nextButton___18VHO-camelCase",
                nextButtonInside: "styles__nextButtonInside___1_Tcv-camelCase"
            }
        },
        EqiX: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("ZtAu"),
                _ = a.n(c),
                m = a("0oXL");
            var d = function(e) {
                var t, a, s, o = e.icon,
                    r = e.blook,
                    i = e.color,
                    c = e.name,
                    d = e.desc,
                    u = e.onYes,
                    f = e.yesText,
                    p = e.onNo,
                    y = e.noLeave;
                return n.a.createElement("div", {
                    className: l()(_.a.container, (t = {}, a = _.a.noLeave, s = y, a in t ? Object.defineProperty(t, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[a] = s, t)),
                    style: {
                        backgroundColor: i
                    }
                }, r ? n.a.createElement(m.a, {
                    name: r,
                    className: _.a.blook
                }) : n.a.createElement("i", {
                    className: l()(o, _.a.icon),
                    style: {
                        color: i
                    }
                }), n.a.createElement("div", {
                    className: _.a.name
                }, c), n.a.createElement("div", {
                    className: _.a.desc
                }, d), u || p ? n.a.createElement("div", {
                    className: _.a.buttonContainer
                }, u ? n.a.createElement("div", {
                    className: _.a.button,
                    role: "button",
                    tabIndex: 0,
                    onClick: u
                }, f || "Yes") : null, p ? n.a.createElement("div", {
                    className: _.a.button,
                    role: "button",
                    tabIndex: 0,
                    onClick: p
                }, "No") : null) : null)
            };
            d.propTypes = {
                icon: r.a.string,
                blook: r.a.string,
                color: r.a.string,
                name: r.a.string,
                desc: r.a.string,
                onYes: r.a.func,
                yesText: r.a.string,
                onNo: r.a.func,
                noLeave: r.a.bool
            }, t.a = d
        },
        GmZ3: function(e, t, a) {
            var s = a("eTNz");
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
        HM3J: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___z3WcL-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:550px;width:80%;max-height:90%;min-height:60%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;overflow-x:hidden;overflow-y:auto}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mainContainer___z3WcL-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__closeIcon___hvFwA-camelCase{position:absolute;top:10px;right:10px;font-size:26px;color:#3a3a3a;cursor:pointer;transition:.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__closeIcon___hvFwA-camelCase:focus,.styles__closeIcon___hvFwA-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__searchContainer___3M_mS-camelCase{width:85%;min-width:300px;margin:20px auto;border:3px solid #0bc2cf;border-radius:6px;height:50px;display:flex;flex-direction:row;background-color:#fff}.styles__searchIcon___3GRxf-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;line-height:42px;margin:3px 3px 3px 10px;width:46px;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__searchInput___3mwUX-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3mwUX-camelCase::-webkit-search-cancel-button,.styles__searchInput___3mwUX-camelCase::-webkit-search-decoration,.styles__searchInput___3mwUX-camelCase::-webkit-search-results-button,.styles__searchInput___3mwUX-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__loaderContainer___2i1Ip-camelCase{width:100%;margin:40px 0;display:flex;flex-direction:row;justify-content:center}.styles__logoText___2CmN6-camelCase{font-family:Nunito,sans-serif;font-size:22px;color:#3a3a3a}.styles__logoLink___2a3H9-camelCase{text-decoration:none;outline:none}.styles__unsplashLogo___vuHDR-camelCase{margin-top:10px;width:100px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__imagesHolder___1wGgU-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__imageContainer___18Alg-camelCase{width:160px;height:180px;display:flex;flex-direction:column;margin:10px}.styles__imageButton___3HvFX-camelCase{outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;width:160px;height:160px;border-radius:5px;transition:.2s}.styles__imageButton___3HvFX-camelCase:focus,.styles__imageButton___3HvFX-camelCase:hover{transform:scale(.95)}.styles__image___pl4lW-camelCase{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px}.styles__imageText___1LnP6-camelCase{font-family:Nunito,sans-serif;font-size:12px;margin-top:5px;text-align:left}.styles__imageLink___3yT-X-camelCase,.styles__imageText___1LnP6-camelCase{color:#3a3a3a}.styles__showMoreButton___nKuF3-camelCase{padding:5px 25px;display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;border-radius:7px;margin:25px auto;cursor:pointer;outline:none;font-family:Nunito,sans-serif;font-size:20px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__showMoreButton___nKuF3-camelCase:hover{transform:scale(.95)}@media only screen and (max-width:600px){.styles__mainContainer___z3WcL-camelCase{min-width:300px;width:90%;min-height:90%;max-height:90%;height:90%}.styles__searchContainer___3M_mS-camelCase{width:calc(100% - 30px);margin:40px auto 15px}.styles__imageContainer___18Alg-camelCase{width:120px;height:140px;margin:9px 7px}.styles__imageButton___3HvFX-camelCase{width:120px;height:120px}.styles__imageText___1LnP6-camelCase{font-size:11px}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___z3WcL-camelCase",
                closeIcon: "styles__closeIcon___hvFwA-camelCase",
                searchContainer: "styles__searchContainer___3M_mS-camelCase",
                searchIcon: "styles__searchIcon___3GRxf-camelCase",
                searchInput: "styles__searchInput___3mwUX-camelCase",
                loaderContainer: "styles__loaderContainer___2i1Ip-camelCase",
                logoText: "styles__logoText___2CmN6-camelCase",
                logoLink: "styles__logoLink___2a3H9-camelCase",
                unsplashLogo: "styles__unsplashLogo___vuHDR-camelCase",
                imagesHolder: "styles__imagesHolder___1wGgU-camelCase",
                imageContainer: "styles__imageContainer___18Alg-camelCase",
                imageButton: "styles__imageButton___3HvFX-camelCase",
                image: "styles__image___pl4lW-camelCase",
                imageText: "styles__imageText___1LnP6-camelCase",
                imageLink: "styles__imageLink___3yT-X-camelCase",
                showMoreButton: "styles__showMoreButton___nKuF3-camelCase"
            }
        },
        L4GU: function(e, t, a) {
            var s = a("CTLQ");
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
        NieF: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___zdR87-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:10;-webkit-animation:styles__inAndOut___tutcD-camelCase 5.9s forwards;animation:styles__inAndOut___tutcD-camelCase 5.9s forwards}@-webkit-keyframes styles__inAndOut___tutcD-camelCase{0%{transform:scale(0)}6%{transform:scale(1)}94%{transform:scale(1)}to{transform:scale(0)}}@keyframes styles__inAndOut___tutcD-camelCase{0%{transform:scale(0)}6%{transform:scale(1)}94%{transform:scale(1)}to{transform:scale(0)}}.styles__noLeave___9CGEe-camelCase{-webkit-animation:styles__justIn___mJRJm-camelCase 354ms forwards;animation:styles__justIn___mJRJm-camelCase 354ms forwards}@-webkit-keyframes styles__justIn___mJRJm-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__justIn___mJRJm-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__blook___1fFTe-camelCase,.styles__icon___3P4Br-camelCase{width:20vw;margin-bottom:5vh}.styles__icon___3P4Br-camelCase{height:20vw;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:11vw}.styles__name___3VGbA-camelCase{font-family:Titan One,sans-serif;font-size:5vw;margin:0 auto}.styles__desc___Zd8LL-camelCase,.styles__name___3VGbA-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;width:90%}.styles__desc___Zd8LL-camelCase{font-family:Nunito,sans-serif;font-size:2.5vw;margin:2px auto}.styles__buttonContainer___3gKiQ-camelCase{width:90%;max-width:500px;flex-flow:row wrap;justify-content:space-evenly;margin:15px auto}.styles__button___Xdeg4-camelCase,.styles__buttonContainer___3gKiQ-camelCase{display:flex;align-items:center}.styles__button___Xdeg4-camelCase{width:180px;height:60px;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:32px;color:#3a3a3a;font-family:Nunito,sans-serif;justify-content:center;margin:10px;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__button___Xdeg4-camelCase:hover{transform:scale(.95)}@media only screen and (max-width:800px){.styles__blook___1fFTe-camelCase,.styles__icon___3P4Br-camelCase{width:40vw}.styles__icon___3P4Br-camelCase{height:40vw;font-size:22vw}.styles__name___3VGbA-camelCase{font-size:10vw}.styles__desc___Zd8LL-camelCase{font-size:5vw}.styles__button___Xdeg4-camelCase{width:120px;height:40px;font-size:24px}}", ""]), t.locals = {
                container: "styles__container___zdR87-camelCase",
                inAndOut: "styles__inAndOut___tutcD-camelCase",
                noLeave: "styles__noLeave___9CGEe-camelCase",
                justIn: "styles__justIn___mJRJm-camelCase",
                blook: "styles__blook___1fFTe-camelCase",
                icon: "styles__icon___3P4Br-camelCase",
                name: "styles__name___3VGbA-camelCase",
                desc: "styles__desc___Zd8LL-camelCase",
                buttonContainer: "styles__buttonContainer___3gKiQ-camelCase",
                button: "styles__button___Xdeg4-camelCase"
            }
        },
        "OA+j": function(e, t, a) {
            var s = a("QoYg");
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
        QoYg: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___Tz59A-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#292929;opacity:0;-webkit-animation:styles__fadeIn___2pMT4-camelCase .3s linear forwards;animation:styles__fadeIn___2pMT4-camelCase .3s linear forwards}.styles__header___2YFfE-camelCase{font-size:68px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;top:7.5%;left:15%;width:70%;font-family:Creepster,sans-serif}.styles__cardContainer___1Fc_j-camelCase,.styles__header___2YFfE-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__cardContainer___1Fc_j-camelCase{width:25vw;height:32.5vw;top:calc(60% - 18vw);left:calc(50% - 12.5vw);transform:scale(.8);outline:none;cursor:pointer;transition:.2s}.styles__cardContainer___1Fc_j-camelCase:hover{transform:scale(.85)}.styles__card1___2MXAw-camelCase{left:calc(50% - 42.5vw)}.styles__card1Only___38uD9-camelCase{left:calc(50% - 30vw)}.styles__card2___3MS9N-camelCase{left:calc(50% - 12.5vw)}.styles__card2Only___1JQr7-camelCase{left:calc(50% + 5vw)}.styles__card3___5W141-camelCase{left:calc(50% + 17.5vw)}.styles__coinsText___zfgEX-camelCase{position:absolute;width:80%;bottom:1%;left:10%;text-align:center;font-size:35px;font-weight:700;color:#fff;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey;opacity:0;-webkit-animation:styles__fadeIn___2pMT4-camelCase .3s linear .5s forwards;animation:styles__fadeIn___2pMT4-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeIn___2pMT4-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2pMT4-camelCase{0%{opacity:0}to{opacity:1}}.styles__deckButton___2aT9K-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___2aT9K-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___3UUxu-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___3UUxu-camelCase,.styles__deckText___2YTlR-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___2YTlR-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___1EBm2-camelCase{position:absolute;top:0;left:0;width:calc(100% - 10vw);padding:5vh 5vw;min-height:calc(100% - 10vh);background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__deckCardContainer___YkFFx-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___2PBHu-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___2PBHu-camelCase:focus,.styles__closeIcon___2PBHu-camelCase:hover{transform:scale(1.05)}@media only screen and (max-width:800px){.styles__header___2YFfE-camelCase{font-size:10vw;top:6%;left:5%;width:90%}.styles__cardContainer___1Fc_j-camelCase,.styles__cardContainer___1Fc_j-camelCase:hover{transform:scale(1.3)}.styles__card1___2MXAw-camelCase{top:calc(50% - 30vw)}.styles__card1___2MXAw-camelCase,.styles__card1Only___38uD9-camelCase{left:calc(50% - 35vw)}.styles__card1Only___38uD9-camelCase{top:calc(50% - 15vw)}.styles__card2___3MS9N-camelCase{top:calc(50% - 30vw)}.styles__card2___3MS9N-camelCase,.styles__card2Only___1JQr7-camelCase{left:calc(50% + 10vw)}.styles__card2Only___1JQr7-camelCase{top:calc(50% - 15vw)}.styles__card3___5W141-camelCase{top:calc(50% + 15.5vw);left:calc(50% - 12.5vw)}.styles__coinsText___zfgEX-camelCase{font-size:25px}.styles__deckButton___2aT9K-camelCase{right:0}.styles__deckButton___2aT9K-camelCase,.styles__deckButton___2aT9K-camelCase:hover{transform:scale(.8)}.styles__deckContainer___1EBm2-camelCase{height:100%;overflow-y:auto}.styles__deckCardContainer___YkFFx-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___2PBHu-camelCase{top:2vw;right:2vw}}@media only screen and (max-width:600px){.styles__header___2YFfE-camelCase{font-size:12.5vw;line-height:13vw;top:10%}.styles__card1___2MXAw-camelCase{left:calc(50% - 35vw)}.styles__card1___2MXAw-camelCase,.styles__card2___3MS9N-camelCase{top:calc(50% - 25vw)}.styles__card2___3MS9N-camelCase{left:calc(50% + 10vw)}.styles__card3___5W141-camelCase{top:calc(50% + 20.5vw);left:calc(50% - 12.5vw)}}", ""]), t.locals = {
                container: "styles__container___Tz59A-camelCase",
                fadeIn: "styles__fadeIn___2pMT4-camelCase",
                header: "styles__header___2YFfE-camelCase",
                cardContainer: "styles__cardContainer___1Fc_j-camelCase",
                card1: "styles__card1___2MXAw-camelCase",
                card1Only: "styles__card1Only___38uD9-camelCase",
                card2: "styles__card2___3MS9N-camelCase",
                card2Only: "styles__card2Only___1JQr7-camelCase",
                card3: "styles__card3___5W141-camelCase",
                coinsText: "styles__coinsText___zfgEX-camelCase",
                deckButton: "styles__deckButton___2aT9K-camelCase",
                deckIcon: "styles__deckIcon___3UUxu-camelCase",
                deckText: "styles__deckText___2YTlR-camelCase",
                deckContainer: "styles__deckContainer___1EBm2-camelCase",
                deckCardContainer: "styles__deckCardContainer___YkFFx-camelCase",
                closeIcon: "styles__closeIcon___2PBHu-camelCase"
            }
        },
        ROpq: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__container___3Jgsy-camelCase{height:100%;width:100%;top:0;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:17;background-color:#000}.styles__container___3Jgsy-camelCase,.styles__starWars___2u8bX-camelCase{position:absolute;overflow:hidden}.styles__starWars___2u8bX-camelCase{width:80vw;height:160vw;bottom:0;left:50%;margin-left:-40vw;font-size:4.5vw;color:#feda4a;font-family:Arial,sans-serif;font-weight:700;text-align:justify;transform-origin:50% 100%;transform:perspective(300px) rotateX(25deg)}.styles__starWars___2u8bX-camelCase:after{position:absolute;content:" ";left:0;right:0;top:0;bottom:60%}.styles__crawl___2OSAd-camelCase{position:absolute;top:100%;-webkit-animation:styles__scroll___1WC1u-camelCase 16s linear 2s forwards;animation:styles__scroll___1WC1u-camelCase 16s linear 2s forwards}@-webkit-keyframes styles__scroll___1WC1u-camelCase{0%{top:100%}to{top:0}}@keyframes styles__scroll___1WC1u-camelCase{0%{top:100%}to{top:0}}.styles__titleOne___33mpL-camelCase{font-size:4vw}.styles__titleOne___33mpL-camelCase,.styles__titleTwo___pcojn-camelCase{text-align:center;font-weight:700}.styles__titleTwo___pcojn-camelCase{margin:0 0 100px;font-size:8vw;text-transform:uppercase}', ""]), t.locals = {
                container: "styles__container___3Jgsy-camelCase",
                starWars: "styles__starWars___2u8bX-camelCase",
                crawl: "styles__crawl___2OSAd-camelCase",
                scroll: "styles__scroll___1WC1u-camelCase",
                titleOne: "styles__titleOne___33mpL-camelCase",
                titleTwo: "styles__titleTwo___pcojn-camelCase"
            }
        },
        "Ruj+": function(e, t, a) {
            var s = a("3lxn");
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
        Truy: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("ySNN"),
                l = a.n(i),
                c = a("74sb"),
                _ = function(e) {
                    var t = e.currentLife,
                        a = e.maxLife,
                        s = e.top,
                        o = e.left,
                        r = e.scale,
                        i = Object(c.D)("15vw"),
                        _ = Object(c.D)("1.5vw"),
                        m = .5 * i,
                        d = m - .5 * _,
                        u = 2 * Math.PI * d,
                        f = "".concat(t / a * 100 * u / 100, "px ").concat(u, "px");
                    return n.a.createElement("div", {
                        className: l.a.container,
                        style: {
                            top: s,
                            left: o,
                            width: "".concat(i, "px"),
                            height: "".concat(i, "px"),
                            transform: "scale(".concat(r || 1, ")")
                        }
                    }, n.a.createElement("svg", {
                        width: "".concat(i, "px"),
                        height: "".concat(i, "px"),
                        className: l.a.donut
                    }, n.a.createElement("circle", {
                        r: "".concat(d, "px"),
                        cx: "".concat(m, "px"),
                        cy: "".concat(m, "px"),
                        strokeWidth: "".concat(_, "px"),
                        className: l.a.track
                    }), n.a.createElement("circle", {
                        r: "".concat(d, "px"),
                        cx: "".concat(m, "px"),
                        cy: "".concat(m, "px"),
                        strokeWidth: "".concat(_, "px"),
                        strokeDasharray: f,
                        className: l.a.indicator
                    }), n.a.createElement("text", {
                        className: l.a.text,
                        x: "50%",
                        y: "50%",
                        textAnchor: "middle",
                        alignmentBaseline: "middle"
                    }, t, n.a.createElement("tspan", {
                        style: {
                            fontSize: "1vw"
                        }
                    }, " "), "/", n.a.createElement("tspan", {
                        style: {
                            fontSize: "1vw"
                        }
                    }, " "), a)))
                };
            _.propTypes = {
                currentLife: r.a.number,
                maxLife: r.a.number,
                top: r.a.string,
                left: r.a.string,
                scale: r.a.number
            }, t.a = _
        },
        VUSw: function(e, t, a) {
            var s = a("HM3J");
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
        ZtAu: function(e, t, a) {
            var s = a("NieF");
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
        eTNz: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__card___2x7h1-camelCase{background-color:transparent;width:25vw;height:32.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__card___2x7h1-camelCase,.styles__innerCard___3mqgd-camelCase{position:relative}.styles__innerCard___3mqgd-camelCase{width:100%;height:100%;text-align:center;transition:.8s;transform-style:preserve-3d;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px}.styles__flipped___29kGa-camelCase{transform:rotateY(180deg)}.styles__cardBack___1wCzl-camelCase,.styles__cardFront___XIiT8-camelCase{position:absolute;width:calc(100% - 2vw);height:calc(100% - 2vw);background-color:#404040;border:1vw solid #333;border-radius:6px;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column}.styles__cardBack___1wCzl-camelCase{align-items:center;justify-content:center;font-size:12vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;transform:rotateY(180deg);pointer-events:none}.styles__headerContainer___1SQez-camelCase{position:absolute;width:95%;top:1vw;left:2.5%;text-align:left;font-family:Nunito,sans-serif;color:#fff}.styles__nameText___yhmIT-camelCase{font-size:2.7vw;line-height:2.8vw;text-shadow:2px 2px 8px #333;font-weight:700}.styles__rarityText___CemE2-camelCase{font-size:1.4vw;letter-spacing:.5px;font-weight:700;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__classText___3-DKX-camelCase{font-size:2vw}.styles__artifactIcon___27XqN-camelCase{position:absolute;top:42.5%;left:50%;transform:translate(-50%,-50%);font-size:11vw;text-shadow:2px 2px 8px #333}.styles__artifactDesc___1iB8m-camelCase{position:absolute;top:67.5%;left:5%;width:calc(90% - 20px);height:30%;padding:0 10px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-size:2vw;line-height:2.13vw;color:#fff;background-color:#333}.styles__blookHolder___1-TmR-camelCase{position:absolute;top:1%;left:0;width:100%;height:56.5%}.styles__blook___BsMGw-camelCase{height:18.5vw;margin:0 0 2.5% 20%;transform:rotate(10deg)}.styles__powerContainer___2YeJJ-camelCase{position:absolute;top:57.5%;left:0;width:100%;display:flex;flex-direction:column}.styles__powerRow___2hG1K-camelCase{display:flex;flex-direction:row;align-items:center;width:95%;padding:.2vw 1.5%;height:3.5vw;margin:calc(.2vw - 3px) auto;border:3px solid transparent;border-radius:4px;outline:none;z-index:10}.styles__powerSelect___399o6-camelCase:hover{cursor:pointer}.styles__powerSelect___399o6-camelCase:hover,.styles__powerSelected___2cp-x-camelCase,.styles__selected___c5HWX-camelCase{border:3px solid #0bc2cf}.styles__outerPower___1zNJV-camelCase{flex-grow:1;height:82.5%;margin:0 auto;background-color:#595959;color:#fff;display:flex;flex-direction:column;overflow:hidden}.styles__innerPower___3tJ6M-camelCase,.styles__outerPower___1zNJV-camelCase{border-bottom-left-radius:4px;border-top-left-radius:4px}.styles__innerPower___3tJ6M-camelCase{height:100%;width:5%}.styles__powerInfo___1Pm7f-camelCase{height:2.8875vw;margin-top:-2.8875vw;margin-left:.5vw;display:flex;flex-direction:row;align-items:center}.styles__powerIcon___aFs8v-camelCase{font-size:1.6vw;margin-right:.75vw;width:2vw;text-align:center}.styles__powerText___kebq4-camelCase{font-size:1.7vw}.styles__powerBox___2sDuh-camelCase,.styles__powerText___kebq4-camelCase{font-family:Nunito,sans-serif}.styles__powerBox___2sDuh-camelCase{width:3.5vw;height:3.5vw;font-size:2.4vw;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:7%;box-shadow:inset 0 0 0 .2vw hsla(0,0%,39.2%,.6)}@media only screen and (max-width:800px){.styles__powerRow___2hG1K-camelCase{margin:calc(.2vw - 1px) auto;border:1px solid transparent}.styles__powerSelect___399o6-camelCase:hover,.styles__powerSelected___2cp-x-camelCase,.styles__selected___c5HWX-camelCase{border:1px solid #0bc2cf}}", ""]), t.locals = {
                card: "styles__card___2x7h1-camelCase",
                innerCard: "styles__innerCard___3mqgd-camelCase",
                flipped: "styles__flipped___29kGa-camelCase",
                cardBack: "styles__cardBack___1wCzl-camelCase",
                cardFront: "styles__cardFront___XIiT8-camelCase",
                headerContainer: "styles__headerContainer___1SQez-camelCase",
                nameText: "styles__nameText___yhmIT-camelCase",
                rarityText: "styles__rarityText___CemE2-camelCase",
                classText: "styles__classText___3-DKX-camelCase",
                artifactIcon: "styles__artifactIcon___27XqN-camelCase",
                artifactDesc: "styles__artifactDesc___1iB8m-camelCase",
                blookHolder: "styles__blookHolder___1-TmR-camelCase",
                blook: "styles__blook___BsMGw-camelCase",
                powerContainer: "styles__powerContainer___2YeJJ-camelCase",
                powerRow: "styles__powerRow___2hG1K-camelCase",
                powerSelect: "styles__powerSelect___399o6-camelCase",
                powerSelected: "styles__powerSelected___2cp-x-camelCase",
                selected: "styles__selected___c5HWX-camelCase",
                outerPower: "styles__outerPower___1zNJV-camelCase",
                innerPower: "styles__innerPower___3tJ6M-camelCase",
                powerInfo: "styles__powerInfo___1Pm7f-camelCase",
                powerIcon: "styles__powerIcon___aFs8v-camelCase",
                powerText: "styles__powerText___kebq4-camelCase",
                powerBox: "styles__powerBox___2sDuh-camelCase"
            }
        },
        gvfT: function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return i
            })), a.d(t, "b", (function() {
                return l
            })), a.d(t, "a", (function() {
                return c
            })), a.d(t, "e", (function() {
                return u
            })), a.d(t, "d", (function() {
                return f
            }));
            var s = a("74sb");

            function n(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(a), !0).forEach((function(t) {
                        r(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function r(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var i = {
                    Chick: {
                        strength: 1,
                        charisma: 16,
                        wisdom: 5,
                        class: "🌽"
                    },
                    Chicken: {
                        strength: 4,
                        charisma: 10,
                        wisdom: 10,
                        class: "🌽"
                    },
                    Cow: {
                        strength: 12,
                        charisma: 6,
                        wisdom: 6,
                        class: "🌽"
                    },
                    Goat: {
                        strength: 10,
                        charisma: 6,
                        wisdom: 6,
                        class: "🌽"
                    },
                    Horse: {
                        strength: 9,
                        charisma: 6,
                        wisdom: 12,
                        class: "🌽"
                    },
                    Pig: {
                        strength: 12,
                        charisma: 8,
                        wisdom: 5,
                        class: "🌽"
                    },
                    Sheep: {
                        strength: 7,
                        charisma: 11,
                        wisdom: 7,
                        class: "🌽"
                    },
                    Duck: {
                        strength: 4,
                        charisma: 8,
                        wisdom: 12,
                        class: "🌽"
                    },
                    Dog: {
                        strength: 9,
                        charisma: 8,
                        wisdom: 9,
                        class: "🌽"
                    },
                    Cat: {
                        strength: 7,
                        charisma: 7,
                        wisdom: 9,
                        class: "🐾"
                    },
                    Rabbit: {
                        strength: 6,
                        charisma: 9,
                        wisdom: 8,
                        class: "🐾"
                    },
                    Goldfish: {
                        strength: 4,
                        charisma: 15,
                        wisdom: 3,
                        class: "🐾"
                    },
                    Hamster: {
                        strength: 5,
                        charisma: 11,
                        wisdom: 7,
                        class: "🐾"
                    },
                    Turtle: {
                        strength: 5,
                        charisma: 7,
                        wisdom: 12,
                        class: "🐾"
                    },
                    Kitten: {
                        strength: 5,
                        charisma: 14,
                        wisdom: 4,
                        class: "🐾"
                    },
                    Puppy: {
                        strength: 5,
                        charisma: 15,
                        wisdom: 3,
                        class: "🐾"
                    },
                    Bear: {
                        strength: 13,
                        charisma: 6,
                        wisdom: 9,
                        class: "🌲"
                    },
                    Moose: {
                        strength: 11,
                        charisma: 7,
                        wisdom: 9,
                        class: "🌲"
                    },
                    Fox: {
                        strength: 10,
                        charisma: 8,
                        wisdom: 8,
                        class: "🌲"
                    },
                    Raccoon: {
                        strength: 6,
                        charisma: 4,
                        wisdom: 12,
                        class: "🌲"
                    },
                    Squirrel: {
                        strength: 4,
                        charisma: 15,
                        wisdom: 6,
                        class: "🌲"
                    },
                    Owl: {
                        strength: 6,
                        charisma: 2,
                        wisdom: 15,
                        class: "🌲"
                    },
                    Hedgehog: {
                        strength: 11,
                        charisma: 6,
                        wisdom: 7,
                        class: "🌲"
                    },
                    "Baby Penguin": {
                        strength: 4,
                        charisma: 14,
                        wisdom: 6,
                        class: "❄️"
                    },
                    Penguin: {
                        strength: 14,
                        charisma: 6,
                        wisdom: 6,
                        class: "❄️"
                    },
                    "Arctic Fox": {
                        strength: 9,
                        charisma: 7,
                        wisdom: 9,
                        class: "❄️"
                    },
                    "Snowy Owl": {
                        strength: 7,
                        charisma: 4,
                        wisdom: 13,
                        class: "❄️"
                    },
                    "Polar Bear": {
                        strength: 12,
                        charisma: 7,
                        wisdom: 9,
                        class: "❄️"
                    },
                    "Arctic Hare": {
                        strength: 8,
                        charisma: 7,
                        wisdom: 7,
                        class: "❄️"
                    },
                    Seal: {
                        strength: 7,
                        charisma: 11,
                        wisdom: 8,
                        class: "❄️"
                    },
                    Walrus: {
                        strength: 15,
                        charisma: 6,
                        wisdom: 5,
                        class: "❄️"
                    },
                    Tiger: {
                        strength: 15,
                        charisma: 7,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Panther: {
                        strength: 14,
                        charisma: 9,
                        wisdom: 6,
                        class: "🌴"
                    },
                    Cockatoo: {
                        strength: 4,
                        charisma: 10,
                        wisdom: 10,
                        class: "🌴"
                    },
                    Orangutan: {
                        strength: 12,
                        charisma: 8,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Anaconda: {
                        strength: 11,
                        charisma: 5,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Macaw: {
                        strength: 5,
                        charisma: 12,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Jaguar: {
                        strength: 13,
                        charisma: 7,
                        wisdom: 7,
                        class: "🌴"
                    },
                    Capuchin: {
                        strength: 7,
                        charisma: 7,
                        wisdom: 7,
                        class: "🌴"
                    },
                    Toucan: {
                        strength: 6,
                        charisma: 10,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Parrot: {
                        strength: 5,
                        charisma: 14,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Elf: {
                        strength: 10,
                        charisma: 12,
                        wisdom: 14,
                        class: "⚔️"
                    },
                    Witch: {
                        strength: 9,
                        charisma: 8,
                        wisdom: 15,
                        class: "⚔️"
                    },
                    Wizard: {
                        strength: 9,
                        charisma: 10,
                        wisdom: 17,
                        class: "⚔️"
                    },
                    Fairy: {
                        strength: 8,
                        charisma: 11,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    "Slime Monster": {
                        strength: 14,
                        charisma: 10,
                        wisdom: 10,
                        class: "⚔️"
                    },
                    Jester: {
                        strength: 12,
                        charisma: 18,
                        wisdom: 12,
                        class: "⚔️"
                    },
                    Dragon: {
                        strength: 18,
                        charisma: 10,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    Unicorn: {
                        strength: 16,
                        charisma: 17,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    Queen: {
                        strength: 10,
                        charisma: 16,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    King: {
                        strength: 18,
                        charisma: 16,
                        wisdom: 18,
                        class: "⚔️"
                    },
                    "Snow Globe": {
                        strength: 8,
                        charisma: 15,
                        wisdom: 11,
                        class: "☃️"
                    },
                    "Holiday Gift": {
                        strength: 7,
                        charisma: 16,
                        wisdom: 8,
                        class: "☃️"
                    },
                    "Hot Chocolate": {
                        strength: 10,
                        charisma: 10,
                        wisdom: 13,
                        class: "☃️"
                    },
                    "Gingerbread Man": {
                        strength: 10,
                        charisma: 18,
                        wisdom: 13,
                        class: "☃️"
                    },
                    "Gingerbread House": {
                        strength: 11,
                        charisma: 17,
                        wisdom: 12,
                        class: "☃️"
                    },
                    "Holiday Wreath": {
                        strength: 7,
                        charisma: 13,
                        wisdom: 12,
                        class: "☃️"
                    },
                    Snowman: {
                        strength: 14,
                        charisma: 18,
                        wisdom: 16,
                        class: "☃️"
                    },
                    "Santa Claus": {
                        strength: 16,
                        charisma: 19,
                        wisdom: 17,
                        class: "☃️"
                    },
                    "Two of Spades": {
                        strength: 7,
                        charisma: 10,
                        wisdom: 16,
                        class: "🏰"
                    },
                    "Eat Me": {
                        strength: 12,
                        charisma: 12,
                        wisdom: 12,
                        class: "🏰"
                    },
                    "Drink Me": {
                        strength: 10,
                        charisma: 13,
                        wisdom: 11,
                        class: "🏰"
                    },
                    Alice: {
                        strength: 8,
                        charisma: 16,
                        wisdom: 8,
                        class: "🏰"
                    },
                    "Queen of Hearts": {
                        strength: 14,
                        charisma: 6,
                        wisdom: 12,
                        class: "🏰"
                    },
                    Dormouse: {
                        strength: 16,
                        charisma: 10,
                        wisdom: 14,
                        class: "🏰"
                    },
                    "White Rabbit": {
                        strength: 11,
                        charisma: 14,
                        wisdom: 17,
                        class: "🏰"
                    },
                    "Cheshire Cat": {
                        strength: 10,
                        charisma: 17,
                        wisdom: 15,
                        class: "🏰"
                    },
                    Caterpillar: {
                        strength: 13,
                        charisma: 14,
                        wisdom: 18,
                        class: "🏰"
                    },
                    "Mad Hatter": {
                        strength: 12,
                        charisma: 18,
                        wisdom: 15,
                        class: "🏰"
                    },
                    "King of Hearts": {
                        strength: 17,
                        charisma: 19,
                        wisdom: 16,
                        class: "🏰"
                    }
                },
                l = {
                    common: ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Baby Penguin", "Penguin", "Arctic Fox", "Snowy Owl", "Polar Bear", "Arctic Hare", "Seal", "Walrus", "Tiger", "Panther", "Cockatoo", "Orangutan", "Anaconda", "Macaw", "Jaguar", "Capuchin", "Toucan", "Parrot"],
                    uncommon: ["Elf", "Witch", "Wizard", "Fairy", "Slime Monster", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts"],
                    rare: ["Jester", "Dragon", "Queen", "Gingerbread Man", "Gingerbread House", "Dormouse", "White Rabbit", "Cheshire Cat"],
                    epic: ["Unicorn", "Snowman", "Caterpillar", "Mad Hatter"],
                    legendary: ["King", "Santa Claus", "King of Hearts"]
                },
                c = {
                    "Medical Kit": {
                        desc: "Heal for +3 health after combat",
                        icon: "fas fa-medkit",
                        color: "#33cc33",
                        rarity: "Rare"
                    },
                    "Fury Relic": {
                        desc: "x2 ALL damage in combat turn 1",
                        icon: "fas fa-angry",
                        color: "#b30000",
                        rarity: "Common"
                    },
                    "Survival Guide": {
                        desc: "Heal for +3 health at the start of combat",
                        icon: "fas fa-book-medical",
                        color: "#66ff99",
                        rarity: "Rare"
                    },
                    "Steel Socks": {
                        desc: "Attack for 2 damage each time you take damage",
                        icon: "fas fa-socks",
                        color: "#8ea0a4",
                        rarity: "Common"
                    },
                    "Piggy Bank": {
                        desc: "+6 coins each time you gain coins",
                        icon: "fas fa-piggy-bank",
                        color: "#f6a9cb",
                        rarity: "Common"
                    },
                    "Lucky Feather": {
                        desc: "Increase your odds to get lucky in ? stages",
                        icon: "fas fa-feather",
                        color: "#ffe6cc",
                        rarity: "Uncommon"
                    },
                    Coupon: {
                        desc: "+10% off items in the shop",
                        icon: "fas fa-ticket-alt",
                        color: "#4dc3ff",
                        rarity: "Uncommon"
                    },
                    Cheese: {
                        desc: "Heal for +5 health after visiting a shop",
                        icon: "fas fa-cheese",
                        color: "#ffcd05",
                        rarity: "Rare"
                    },
                    "Tasty Egg": {
                        desc: "Heal for +7 when recovering in a Rest stage",
                        icon: "fas fa-egg",
                        color: "#f2f2f2",
                        rarity: "Common"
                    },
                    "Training Weights": {
                        desc: "+2 stats when upgrading a card in a Rest stage",
                        icon: "fas fa-dumbbell",
                        color: "#999999",
                        rarity: "Common"
                    },
                    "Mighty Shield": {
                        desc: "Block the first damage you would take every combat",
                        icon: "fas fa-shield-alt",
                        color: "#3366ff",
                        rarity: "Epic"
                    },
                    "Toxic Waste": {
                        desc: "x2 ALL damage in combat",
                        icon: "fas fa-skull-crossbones",
                        color: "#33ff33",
                        rarity: "Epic"
                    },
                    "Lifeline Totem": {
                        desc: "Attack with x2 damage when you're below 20 health",
                        icon: "fas fa-heartbeat",
                        color: "#ff3333",
                        rarity: "Uncommon"
                    },
                    "Cursed Hourglass": {
                        desc: "At the start of combat, take 3 and deal 10 damage",
                        icon: "fas fa-hourglass-half",
                        color: "#730099",
                        rarity: "Common"
                    },
                    "Band-Aid": {
                        desc: "Heal for +15 health before boss battles",
                        icon: "fas fa-band-aid",
                        color: "#f5b575",
                        rarity: "Uncommon"
                    },
                    "Elder Coins": {
                        desc: "On pick up, gain 100 coins",
                        icon: "fas fa-coins",
                        color: "#e6c97e",
                        rarity: "Epic"
                    },
                    "Captain's Anchor": {
                        desc: "When you take damage, take 1 less",
                        icon: "fas fa-anchor",
                        color: "#7575a3",
                        rarity: "Epic"
                    },
                    "Chess Pieces": {
                        desc: "Deal 4 damage to the enemy when you tie",
                        icon: "fas fa-chess",
                        color: "#e0e0eb",
                        rarity: "Uncommon"
                    },
                    "Pink Hippo": {
                        desc: "+2 Strength for your cards, but card select only has 2 options",
                        icon: "fas fa-hippo",
                        color: "#ffb3ff",
                        rarity: "Legendary"
                    },
                    "Anorak's Wizard Cap": {
                        desc: "+2 Wisdom for your cards, but you skip over rest stages",
                        icon: "fas fa-hat-wizard",
                        color: "#5c85d6",
                        rarity: "Legendary"
                    },
                    "Dave's Doggo": {
                        desc: "+2 Charisma for your cards, but ? stages are always bad",
                        icon: "fas fa-dog",
                        color: "#994d00",
                        rarity: "Legendary"
                    },
                    "Anubis' Obelisk": {
                        desc: "-1 to ALL enemy attributes, but no more gaining gold",
                        icon: "fas fa-monument",
                        color: "#d8b470",
                        rarity: "Legendary"
                    },
                    "Farm Tractor": {
                        desc: "For your attributes, +1 to 🌽, but -1 to 🌴 Blooks",
                        icon: "fas fa-tractor",
                        color: "#367c2b",
                        rarity: "Common"
                    },
                    "Magic Seedling": {
                        desc: "For your attributes, +1 to 🌲 & 🌴, but -1 to 🌽 & 🐾 Blooks",
                        icon: "fas fa-seedling",
                        color: "#60b649",
                        rarity: "Rare"
                    },
                    "Just A Bone": {
                        desc: "For your attributes, +1 to 🐾, but -1 to 🌲 Blooks",
                        icon: "fas fa-bone",
                        color: "#f2f2f2",
                        rarity: "Common"
                    },
                    "Cozy Igloo": {
                        desc: "For your attributes, +1 to ❄️ & ☃️, but -1 to ⚔️ & 🏰 Blooks",
                        icon: "fas fa-igloo",
                        color: "#d6ecef",
                        rarity: "Rare"
                    },
                    "King's Crown": {
                        desc: "For your attributes, +1 to ⚔️, but -1 to 🏰 Blooks",
                        icon: "fas fa-crown",
                        color: "#ffd700",
                        rarity: "Common"
                    },
                    "Sacred Scroll": {
                        desc: "For your attributes, +1 to 🏰, but -1 to ⚔️ Blooks",
                        icon: "fas fa-scroll",
                        color: "#d7bb93",
                        rarity: "Common"
                    }
                },
                _ = {
                    common: ["Fury Relic", "Steel Socks", "Piggy Bank", "Tasty Egg", "Training Weights", "Cursed Hourglass", "Farm Tractor", "Just A Bone", "King's Crown", "Sacred Scroll"],
                    uncommon: ["Lucky Feather", "Coupon", "Lifeline Totem", "Band-Aid", "Chess Pieces"],
                    rare: ["Medical Kit", "Survival Guide", "Cheese", "Magic Seedling", "Cozy Igloo"],
                    epic: ["Mighty Shield", "Toxic Waste", "Elder Coins", "Captain's Anchor"],
                    legendary: ["Pink Hippo", "Anorak's Wizard Cap", "Dave's Doggo", "Anubis' Obelisk"]
                },
                m = {
                    small: [
                        ["legendary", 1],
                        ["epic", 5],
                        ["rare", 15],
                        ["uncommon", 20],
                        ["common", 59]
                    ],
                    big: [
                        ["legendary", 5],
                        ["epic", 10],
                        ["rare", 25],
                        ["uncommon", 30],
                        ["common", 30]
                    ],
                    boss: [
                        ["legendary", 20],
                        ["epic", 20],
                        ["rare", 20],
                        ["uncommon", 20],
                        ["common", 20]
                    ]
                },
                d = {
                    small: [
                        ["legendary", .001],
                        ["epic", .099],
                        ["rare", 2],
                        ["uncommon", 7],
                        ["common", 90]
                    ],
                    big: [
                        ["legendary", 1],
                        ["epic", 5],
                        ["rare", 12],
                        ["uncommon", 50],
                        ["common", 32]
                    ],
                    boss: [
                        ["legendary", 2],
                        ["epic", 7],
                        ["rare", 17],
                        ["uncommon", 55],
                        ["common", 19]
                    ]
                },
                u = o({
                    blook: "Chick"
                }, i.Chick),
                f = function(e, t, a) {
                    for (var n = [], r = [], c = [], u = d[e], f = m[e]; n.length < (t || 3);) {
                        var p = 100 * Math.random(),
                            y = 0;
                        if (Math.random() <= ("boss" === e ? .2 : .05) && !a) {
                            for (var h = 0; h < f.length; h++)
                                if ((y += f[h][1]) >= p) {
                                    var w = Object(s.p)(_[f[h][0]]);
                                    c.includes(w) || (n.push(w), c.push(w));
                                    break
                                }
                        } else
                            for (var g = 0; g < u.length; g++)
                                if ((y += u[g][1]) >= p) {
                                    var b = Object(s.p)(l[u[g][0]]);
                                    r.includes(b) || (n.push(o({
                                        blook: b
                                    }, i[b])), r.push(b));
                                    break
                                }
                    }
                    return n
                }
        },
        kOqK: function(e, t, a) {
            var s = a("9BmH");
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
        lWrb: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("GmZ3"),
                _ = a.n(c),
                m = a("0oXL"),
                d = a("pMTK"),
                u = a("74sb"),
                f = a("gvfT");

            function p(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var y = function(e) {
                var t = e.card,
                    a = e.flipped,
                    s = e.onClick,
                    o = e.attribute,
                    r = e.content,
                    i = e.isArtifact;
                return n.a.createElement("div", {
                    className: _.a.card
                }, n.a.createElement("div", {
                    className: l()(_.a.innerCard, p({}, _.a.flipped, a))
                }, n.a.createElement("div", {
                    className: _.a.cardBack
                }, "B"), r ? n.a.createElement("div", {
                    className: _.a.cardFront
                }, r) : i ? n.a.createElement("div", {
                    className: _.a.cardFront
                }, n.a.createElement("div", {
                    className: _.a.headerContainer
                }, n.a.createElement("div", {
                    className: _.a.nameText
                }, t), n.a.createElement("div", {
                    className: _.a.rarityText,
                    style: {
                        color: u.t[f.a[t].rarity]
                    }
                }, f.a[t].rarity)), n.a.createElement("i", {
                    className: l()(f.a[t].icon, _.a.artifactIcon),
                    style: {
                        color: f.a[t].color
                    }
                }), n.a.createElement("div", {
                    className: _.a.artifactDesc
                }, f.a[t].desc)) : n.a.createElement("div", {
                    className: _.a.cardFront
                }, t.blook ? n.a.createElement("div", {
                    className: _.a.blookHolder
                }, n.a.createElement(m.a, {
                    name: t.blook,
                    className: _.a.blook
                })) : null, n.a.createElement("div", {
                    className: _.a.headerContainer
                }, n.a.createElement("div", {
                    className: _.a.nameText
                }, t.blook), n.a.createElement("div", {
                    className: _.a.rarityText,
                    style: {
                        color: u.t[Object(d.a)(t.blook)]
                    }
                }, Object(d.a)(t.blook)), n.a.createElement("div", {
                    className: _.a.classText
                }, t.class || "")), n.a.createElement("div", {
                    className: _.a.powerContainer
                }, n.a.createElement("div", {
                    className: l()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "strength" === o)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("strength")
                    } : function() {}
                }, n.a.createElement("div", {
                    className: _.a.outerPower
                }, n.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.strength / 20 * 100, "%"),
                        backgroundColor: "rgb(151, 15, 5)"
                    }
                }), n.a.createElement("div", {
                    className: _.a.powerInfo
                }, n.a.createElement("i", {
                    className: l()("fas fa-fist-raised", _.a.powerIcon)
                }), n.a.createElement("div", {
                    className: _.a.powerText
                }, "Strength"))), n.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(151, 15, 5)"
                    }
                }, t.strength)), n.a.createElement("div", {
                    className: l()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "charisma" === o)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("charisma")
                    } : function() {}
                }, n.a.createElement("div", {
                    className: _.a.outerPower
                }, n.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.charisma / 20 * 100, "%"),
                        backgroundColor: "rgb(7, 21, 93)"
                    }
                }), n.a.createElement("div", {
                    className: _.a.powerInfo
                }, n.a.createElement("i", {
                    className: l()("fas fa-heart", _.a.powerIcon)
                }), n.a.createElement("div", {
                    className: _.a.powerText
                }, "Charisma"))), n.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(7, 21, 93)"
                    }
                }, t.charisma)), n.a.createElement("div", {
                    className: l()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "wisdom" === o)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("wisdom")
                    } : function() {}
                }, n.a.createElement("div", {
                    className: _.a.outerPower
                }, n.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.wisdom / 20 * 100, "%"),
                        backgroundColor: "rgb(148, 12, 128)"
                    }
                }), n.a.createElement("div", {
                    className: _.a.powerInfo
                }, n.a.createElement("i", {
                    className: l()("fas fa-question", _.a.powerIcon)
                }), n.a.createElement("div", {
                    className: _.a.powerText
                }, "Wisdom"))), n.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(148, 12, 128)"
                    }
                }, t.wisdom))))))
            };
            y.propTypes = {
                card: r.a.oneOfType([r.a.shape({
                    blook: r.a.string,
                    strength: r.a.number,
                    charisma: r.a.number,
                    wisdom: r.a.number
                }), r.a.string]),
                flipped: r.a.bool,
                onClick: r.a.func,
                attribute: r.a.string,
                content: r.a.element,
                isArtifact: r.a.bool
            }, t.a = y
        },
        ozTy: function(e, t, a) {
            "use strict";
            var s = a("74sb"),
                n = ["Unlock new Blooks in the Market!", "Tokens can be used to unlock Blooks in the Market!", "In Factory, match Blooks of the same class for bonuses!", "Check your lifetime Stats on the Stats page!", "Anyone can create a Question Set on the Create page!", "You can sell duplicate Blooks on the Blooks page!", "Follow us on social media @PlayBlooket for updates!", "In Factory, make sure to keep upgrading your Blooks!", "Use the Discover page to find new question sets!", "Create or login to an account to unlock more Blooks!", "Create or login to an account to participate in events!", "Create or login to an account to track your stats!", "Yes, we are always working on new game modes and Blooks!", "Having fun while you learn can help you remember information!", "Never give up in a game, comebacks happen all the time!"];
            t.a = function() {
                return Object(s.p)(n)
            }
        },
        pkss: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("TSYQ"),
                r = a.n(o),
                i = a("17x9"),
                l = a.n(i),
                c = a("H1WH"),
                _ = a("Xst1"),
                m = a.n(_),
                d = a("VUSw"),
                u = a.n(d),
                f = a("LHn/"),
                p = a("XOuL"),
                y = a("htno");

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return g(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function b(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = E(e);
                    if (t) {
                        var n = E(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return v(this, a)
                }
            }

            function v(e, t) {
                if (t && ("object" === h(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && C(e, t)
                }(i, e);
                var t, a, s, o = x(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = o.call(this, e)).state = {
                        loading: !1,
                        searchText: "",
                        images: [],
                        page: 1,
                        pagesLeft: 0
                    }, t.loading = !1, t.onSelect = t.onSelect.bind(k(t)), t.search = t.search.bind(k(t)), t.showMore = t.showMore.bind(k(t)), t
                }
                return t = i, (a = [{
                    key: "onSelect",
                    value: function(e) {
                        this.loading = !0, y.a.put("/c/unsplash/track-download/".concat(e.id)).catch((function(e) {
                            console.error(e)
                        })), this.props.select(e.urls.small)
                    }
                }, {
                    key: "search",
                    value: function(e) {
                        var t = this;
                        e.preventDefault(), this.loading || (this.loading = !0, this.setState({
                            loading: !0
                        }), y.a.get("/c/unsplash/search", {
                            params: {
                                query: this.state.searchText,
                                page: 1
                            }
                        }).then((function(e) {
                            t.loading = !1, t.setState({
                                images: e.data.results,
                                loading: !1,
                                page: 1,
                                pagesLeft: e.data.total_pages - 1
                            })
                        })).catch((function(e) {
                            console.error(e), t.loading = !1, t.setState({
                                loading: !1,
                                page: 1,
                                pagesLeft: 0,
                                images: []
                            })
                        })))
                    }
                }, {
                    key: "showMore",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            this.loading = !0;
                            var t = this.state.page + 1,
                                a = this.state.pagesLeft - 1;
                            y.a.get("/c/unsplash/search", {
                                params: {
                                    query: this.state.searchText,
                                    page: t
                                }
                            }).then((function(s) {
                                e.loading = !1, e.setState({
                                    images: [].concat(w(e.state.images), w(s.data.results)),
                                    page: t,
                                    pagesLeft: a
                                })
                            })).catch((function(t) {
                                console.error(t), e.loading = !1
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            className: m.a.modal
                        }, n.a.createElement("div", {
                            className: u.a.mainContainer
                        }, n.a.createElement("i", {
                            className: r()(u.a.closeIcon, "fas fa-times"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.close
                        }), n.a.createElement("form", {
                            onSubmit: this.search,
                            className: u.a.searchContainer
                        }, n.a.createElement("input", {
                            className: u.a.searchInput,
                            type: "search",
                            value: this.state.searchText,
                            onChange: function(t) {
                                return e.setState({
                                    searchText: t.target.value
                                })
                            },
                            placeholder: "Search for Images...",
                            autoFocus: c.isMobile ? "" : "autofocus"
                        }), n.a.createElement("i", {
                            className: r()(u.a.searchIcon, "fas fa-search"),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.search
                        })), this.state.loading ? n.a.createElement("div", {
                            className: u.a.loaderContainer
                        }, n.a.createElement(p.a, null)) : 0 === this.state.images.length ? n.a.createElement("div", {
                            className: u.a.loaderContainer
                        }, n.a.createElement("div", {
                            className: u.a.logoText
                        }, "Images By:", n.a.createElement("br", null), n.a.createElement("a", {
                            className: u.a.logoLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.unsplash.com/?utm_source=blooket&utm_medium=referral"
                        }, n.a.createElement("img", {
                            src: f.a.basic.unsplashLogo,
                            alt: "Images By Unsplash",
                            className: u.a.unsplashLogo,
                            draggable: !1
                        })))) : n.a.createElement("div", {
                            className: u.a.imagesHolder
                        }, this.state.images.map((function(t) {
                            return n.a.createElement("div", {
                                className: u.a.imageContainer,
                                key: t.id
                            }, n.a.createElement("div", {
                                className: u.a.imageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onSelect(t)
                                }
                            }, n.a.createElement("img", {
                                src: t.urls.small,
                                alt: t.alt_description,
                                className: u.a.image,
                                draggable: !1
                            })), n.a.createElement("div", {
                                className: u.a.imageText
                            }, "By: ", n.a.createElement("a", {
                                className: u.a.imageLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.unsplash.com/@".concat(t.user.username, "?utm_source=blooket&utm_medium=referral")
                            }, t.user.name)))
                        }))), this.state.pagesLeft > 0 && !this.state.loading ? n.a.createElement("div", {
                            style: {
                                display: "inline-block",
                                margin: "0 auto"
                            }
                        }, n.a.createElement("div", {
                            className: u.a.showMoreButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.showMore
                        }, "Show More")) : null, n.a.createElement("div", {
                            style: {
                                height: 20
                            }
                        })))
                    }
                }]) && b(t.prototype, a), s && b(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(n.a.Component);
            T.propTypes = {
                select: l.a.func.isRequired,
                close: l.a.func.isRequired
            }, t.a = T
        },
        "r+wn": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___Dnq5V-camelCase{width:15vw;left:15vw;display:flex;align-items:center;justify-content:center;resize:both;position:absolute;top:0;left:0}.styles__donut___23PPs-camelCase{border-radius:50%}.styles__track___24e9b-camelCase{fill:transparent;stroke:#c43a35}.styles__indicator___zXS36-camelCase{fill:transparent;stroke:#4bc22e;transform:rotate(-90deg);transform-origin:center;transition:stroke-dasharray .4s ease}.styles__text___2HaZR-camelCase{font-family:Nunito,sans-serif;fill:#fff;font-weight:700;font-size:2.8vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                container: "styles__container___Dnq5V-camelCase",
                donut: "styles__donut___23PPs-camelCase",
                track: "styles__track___24e9b-camelCase",
                indicator: "styles__indicator___zXS36-camelCase",
                text: "styles__text___2HaZR-camelCase"
            }
        },
        r9Y0: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("7t86"),
                l = a.n(i);

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
                    var a, s = f(e);
                    if (t) {
                        var n = f(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(e, t) {
                if (t && ("object" === c(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var p = function() {
                    var e, t = 0;

                    function a(e, t, a, s, n) {
                        this.size = e, this.x = t, this.y = a, this.vx = s, this.vy = n, this.div = document.createElement("div"), this.div.classList.add(l.a.snowflake), this.div.style.width = "".concat(this.size, "px"), this.div.style.height = "".concat(this.size, "px")
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
                            var i = 12 * (Math.random() + .2) + 1,
                                l = new a(i, Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() - .5, .3 * i);
                            n.appendChild(l.div), e.push(l)
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
                    var t, a, s, o = d(r);

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
                                className: l.a.snow,
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
        "u++o": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__snowflake___26V8F-camelCase{display:block;border-radius:50%;transform:translateZ(0);-webkit-user-select:none;-moz-user-select:none;user-select:none;background:radial-gradient(circle farthest-corner,#fff 40%,hsla(0,0%,100%,0) 100%)}.styles__snow___1rkMP-camelCase,.styles__snowflake___26V8F-camelCase{position:absolute}.styles__snow___1rkMP-camelCase{height:100%;width:100%;top:0;left:0;overflow:hidden;pointer-events:none;z-index:-1}", ""]), t.locals = {
                snowflake: "styles__snowflake___26V8F-camelCase",
                snow: "styles__snow___1rkMP-camelCase"
            }
        },
        u6qL: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("TSYQ"),
                l = a.n(i),
                c = a("kOqK"),
                _ = a.n(c),
                m = a("LHn/"),
                d = a("74sb"),
                u = function(e) {
                    var t = e.mode,
                        a = e.amount;
                    return n.a.createElement("div", {
                        className: _.a.container,
                        style: {
                            backgroundImage: "linear-gradient(#31aae0, #bdf)"
                        }
                    }, n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n1)
                    }, "Answer Questions"), n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n2)
                    }, "Build Toys (", n.a.createElement("img", {
                        src: m.a.basic.toy,
                        alt: "Toy",
                        style: {
                            width: "5vw"
                        },
                        draggable: !1
                    }), ")"), n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n3)
                    }, "Choose Helpers"), n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n4)
                    }, "Sabotage, Steal, and Multiply Toys"), n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n5)
                    }, "Time" === t ? "Most toys after ".concat(Object(d.o)(a), " ").concat("1" === a ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(d.o)(a), " Toys wins!")), n.a.createElement("div", {
                        className: l()(_.a.text, _.a.n6)
                    }, "Good Luck & Happy Holidays!"))
                };
            u.propTypes = {
                mode: r.a.string,
                amount: r.a.any
            }, t.a = u
        },
        yCIc: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("9WQd"),
                r = a.n(o),
                i = function() {
                    return n.a.createElement("div", {
                        className: r.a.container
                    }, n.a.createElement("div", {
                        className: r.a.starWars
                    }, n.a.createElement("div", {
                        className: r.a.crawl
                    }, n.a.createElement("div", {
                        className: r.a.titleOne
                    }, "Episode VIII.2"), n.a.createElement("div", {
                        className: r.a.titleTwo
                    }, "The Last Blook"), n.a.createElement("div", null, "\n              The FIRST ORDER reigns. Having decimated the peaceful Republic of Blooks,\n              Supreme Leader King Blook now deploys the merciless Unicorns to seize the\n              remaining Medieval boxes in the galaxy.\n            ", n.a.createElement("br", null), n.a.createElement("br", null), "\n              Only General Panther Blook’s band of RESISTANCE fighters stand against the\n              rising tyranny, certain that Jedi Master Tiger Blook will return and restore\n              a spark of hope to the fight.\n            ", n.a.createElement("br", null), n.a.createElement("br", null), "\n              Howdy folks, it’s Ben from Blooket! Sorry about this little interruption. You’ll\n              get back to learning in just a second. Thanks for playing and Happy Holidays!\n            "))))
                };
            i.propTypes = {}, t.a = i
        },
        ySNN: function(e, t, a) {
            var s = a("r+wn");
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
        }
    }
]);