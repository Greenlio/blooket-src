(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        "+GaT": function(e, a, t) {
            var s = t("v9+r");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "+MJO": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("+GaT"),
                c = t.n(i),
                m = t("0oXL"),
                f = function(e) {
                    var a = e.top,
                        t = e.left,
                        s = e.blook,
                        r = e.msg,
                        l = e.onClick,
                        o = e.night,
                        i = e.hazard;
                    return n.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            top: a,
                            left: t,
                            backgroundColor: o ? "#000" : i[0] ? i[1] : null,
                            color: o ? "#fff" : null
                        },
                        role: "button",
                        tabIndex: 0,
                        onClick: l
                    }, n.a.createElement("i", {
                        className: _()(c.a.close, "fas fa-times")
                    }), n.a.createElement(m.a, {
                        name: s,
                        className: c.a.blook
                    }), n.a.createElement("div", {
                        className: c.a.msg
                    }, r))
                };
            f.propTypes = {
                top: l.a.string,
                left: l.a.string,
                blook: l.a.string,
                msg: l.a.string,
                onClick: l.a.func,
                night: l.a.bool,
                hazard: l.a.array
            };
            var d = f,
                y = function(e) {
                    var a = e.ads,
                        t = e.onClick,
                        s = e.night,
                        r = e.hazards;
                    return n.a.createElement("div", null, a[0] ? n.a.createElement(d, {
                        top: "30%",
                        left: "20%",
                        onClick: function() {
                            return t(0)
                        },
                        blook: "Chicken",
                        msg: "$0.99 Scrambled Eggs",
                        night: s,
                        hazard: [r[0], r[1]]
                    }) : null, a[1] ? n.a.createElement(d, {
                        top: "60%",
                        left: "80%",
                        onClick: function() {
                            return t(1)
                        },
                        blook: "Cow",
                        msg: "50% Off Soy Milk",
                        night: s,
                        hazard: [r[0], r[2]]
                    }) : null, a[2] ? n.a.createElement(d, {
                        top: "30%",
                        left: "80%",
                        onClick: function() {
                            return t(2)
                        },
                        blook: "Goat",
                        msg: "Red Goat Gives You Wings",
                        night: s,
                        hazard: [r[0], r[3]]
                    }) : null, a[3] ? n.a.createElement(d, {
                        top: "80%",
                        left: "50%",
                        onClick: function() {
                            return t(3)
                        },
                        blook: "Duck",
                        msg: "QUACK AH DOODLE DO",
                        night: s,
                        hazard: [r[0], r[4]]
                    }) : null, a[4] ? n.a.createElement(d, {
                        top: "25%",
                        left: "40%",
                        onClick: function() {
                            return t(4)
                        },
                        blook: "Baby Penguin",
                        msg: "$89 Hanglider Rides",
                        night: s,
                        hazard: [r[0], r[5]]
                    }) : null, a[5] ? n.a.createElement(d, {
                        top: "50%",
                        left: "50%",
                        onClick: function() {
                            return t(5)
                        },
                        blook: "Toucan",
                        msg: "Toucan Play At This Game",
                        night: s,
                        hazard: [r[0], r[1]]
                    }) : null, a[6] ? n.a.createElement(d, {
                        top: "60%",
                        left: "20%",
                        onClick: function() {
                            return t(6)
                        },
                        blook: "Owl",
                        msg: "Mixtape Dropping Next Week",
                        night: s,
                        hazard: [r[0], r[2]]
                    }) : null, a[7] ? n.a.createElement(d, {
                        top: "80%",
                        left: "80%",
                        onClick: function() {
                            return t(7)
                        },
                        blook: "Dragon",
                        msg: "Marty's Fireplace SALE",
                        night: s,
                        hazard: [r[0], r[3]]
                    }) : null, a[8] ? n.a.createElement(d, {
                        top: "40%",
                        left: "40%",
                        onClick: function() {
                            return t(8)
                        },
                        blook: "Rabbit",
                        msg: "$799 - Max Hops Series 9",
                        night: s,
                        hazard: [r[0], r[4]]
                    }) : null, a[9] ? n.a.createElement(d, {
                        top: "80%",
                        left: "20%",
                        onClick: function() {
                            return t(9)
                        },
                        blook: "Witch",
                        msg: "Spells & Potions Galore",
                        night: s,
                        hazard: [r[0], r[5]]
                    }) : null)
                };
            y.propTypes = {
                ads: l.a.array,
                onClick: l.a.func,
                night: l.a.bool,
                hazards: l.a.array
            };
            a.a = y
        },
        "//Pr": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__glitch1___3XigL-camelCase{font-size:18vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:30vh;left:25vw;transform:translate(-50%,-50%) rotate(-20deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear;animation:styles__glitchFade___2XP-u-camelCase 3s linear}.styles__glitch2___2Xsz3-camelCase{color:#f60;text-shadow:2px 2px 8px #f60;top:60vh;left:60vw;transform:translate(-50%,-50%) rotate(20deg);-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear .5s;animation:styles__glitchFade___2XP-u-camelCase 3s linear .5s}.styles__glitch2___2Xsz3-camelCase,.styles__glitch3___1LtkF-camelCase{font-size:10vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch3___1LtkF-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:25vh;left:75vw;transform:translate(-50%,-50%) rotate(5deg);-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 1s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 1s}.styles__glitch4___2DAcM-camelCase{font-size:8vw;color:#0ff;text-shadow:2px 2px 8px #0ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:70vh;left:35vw;transform:translate(-50%,-50%) rotate(10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 1.5s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 1.5s}.styles__glitch5___3-i36-camelCase{font-size:12vw;color:red;text-shadow:2px 2px 8px red;top:50vh;transform:translate(-50%,-50%) rotate(-5deg);-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 2s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 2s}.styles__glitch5___3-i36-camelCase,.styles__glitch6___dzy0O-camelCase{font-family:Nunito,sans-serif;font-weight:700;position:absolute;left:50vw;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch6___dzy0O-camelCase{font-size:7.5vw;color:#0f0;text-shadow:2px 2px 8px #0f0;top:90vh;transform:translate(-50%,-50%);-webkit-animation:styles__glitchFade___2XP-u-camelCase 4s linear 2.5s;animation:styles__glitchFade___2XP-u-camelCase 4s linear 2.5s}.styles__glitch7___3bJjt-camelCase{font-size:8vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:25vh;left:50vw;transform:translate(-50%,-50%) rotate(5deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 4s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 4s}.styles__glitch8___YPf3L-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:70vh;left:45vw;transform:translate(-50%,-50%) rotate(-10deg);-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 5s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 5s}.styles__glitch8___YPf3L-camelCase,.styles__glitch9___36VfB-camelCase{font-size:12vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch9___36VfB-camelCase{color:red;text-shadow:2px 2px 8px red;top:50vh;left:50vw;transform:translate(-50%,-50%);-webkit-animation:styles__glitchFade___2XP-u-camelCase 3s linear 5.5s;animation:styles__glitchFade___2XP-u-camelCase 3s linear 5.5s}.styles__glitch10___-FqMz-camelCase{font-size:7vw;color:#9d00ff;text-shadow:2px 2px 8px #9d00ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:80vh;left:75vw;transform:translate(-50%,-50%) rotate(-10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___2XP-u-camelCase 1s linear 6s;animation:styles__glitchFade___2XP-u-camelCase 1s linear 6s}@-webkit-keyframes styles__glitchFade___2XP-u-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@keyframes styles__glitchFade___2XP-u-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}", ""]), a.locals = {
                glitch1: "styles__glitch1___3XigL-camelCase",
                glitchFade: "styles__glitchFade___2XP-u-camelCase",
                glitch2: "styles__glitch2___2Xsz3-camelCase",
                glitch3: "styles__glitch3___1LtkF-camelCase",
                glitch4: "styles__glitch4___2DAcM-camelCase",
                glitch5: "styles__glitch5___3-i36-camelCase",
                glitch6: "styles__glitch6___dzy0O-camelCase",
                glitch7: "styles__glitch7___3bJjt-camelCase",
                glitch8: "styles__glitch8___YPf3L-camelCase",
                glitch9: "styles__glitch9___36VfB-camelCase",
                glitch10: "styles__glitch10___-FqMz-camelCase"
            }
        },
        "1bcp": function(e, a, t) {
            var s = t("wYzb");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "2Euj": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("1bcp"),
                c = t.n(i),
                m = t("LHn/"),
                f = {
                    backgroundImage: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.2)), url(".concat(m.a.dino.paperTexture, ")")
                },
                d = function(e) {
                    var a = e.content,
                        t = e.onClick,
                        s = e.className,
                        r = e.style;
                    return t ? n.a.createElement("div", {
                        className: _()(c.a.wrapper, c.a.button, s),
                        style: r,
                        role: "button",
                        tabIndex: 0,
                        onClick: t
                    }, n.a.createElement("div", {
                        className: c.a.inside
                    }, n.a.createElement("div", {
                        className: c.a.corner1,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner2,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner3,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner4,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.center
                    }, n.a.createElement("div", {
                        className: c.a.corner5,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner6,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner7,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner8,
                        style: f
                    }), a))) : n.a.createElement("div", {
                        className: _()(c.a.wrapper, s),
                        style: r
                    }, n.a.createElement("div", {
                        className: c.a.inside
                    }, n.a.createElement("div", {
                        className: c.a.corner1,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner2,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner3,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner4,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.center
                    }, n.a.createElement("div", {
                        className: c.a.corner5,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner6,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner7,
                        style: f
                    }), n.a.createElement("div", {
                        className: c.a.corner8,
                        style: f
                    }), a)))
                };
            d.propTypes = {
                content: l.a.element,
                onClick: l.a.func,
                className: l.a.string,
                style: l.a.object
            }, a.a = d
        },
        "3k2l": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("Xst1"),
                _ = t.n(o),
                i = t("tIMv"),
                c = t.n(i),
                m = t("lmLo");

            function f(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var s, n, r = [],
                        l = !0,
                        o = !1;
                    try {
                        for (t = t.call(e); !(l = (s = t.next()).done) && (r.push(s.value), !a || r.length !== a); l = !0);
                    } catch (e) {
                        o = !0, n = e
                    } finally {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return r
                }(e, a) || function(e, a) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, a)
                }(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }
            var y = [
                    ["Welcome to The World of Blooket!", "We're so excited that you're here! Thanks for joining our vibrant and diverse community! Let's make education awesome together!", "https://media.blooket.com/image/upload/v1564415754/Media/WelcomeBlooks.png", "Welcome Blooks"],
                    ["Built for Classrooms", "To play Blooket, a teacher hosts a question set with a unique game mode on their screen/projector, and students join in to compete on their own devices.", "https://media.blooket.com/image/upload/v1564425345/Media/Classroom.png", "Classroom"],
                    ["Designed for Teachers", "Teachers can create their own questions sets or discover new ones with our search feature. Blooket also includes detailed game history reports to see how students performed.", "https://media.blooket.com/image/upload/v1564425345/Media/Teachers.png", "Teachers"],
                    ["Focused on Students", "With Student accounts, students can track their stats, create their own question sets, buy and sell Blooks, and participate in upcoming community-wide events!", "https://media.blooket.com/image/upload/v1564425692/Media/Students.png", "Students"],
                    ["Blooket Your Way", "Feel free to explore and try new things! We're always updating Blooket with new events and innovative game modes to bring education the excitement it deserves!", "https://media.blooket.com/image/upload/v1564425692/Media/GameModes.png", "Game Modes"],
                    ["Get Involved!", "We love talking to educators and interacting with our community! Follow us on Twitter, Facebook, and Instagram @PlayBlooket to stay up to date and share your Blooket experience.", "https://media.blooket.com/image/upload/v1566861697/Media/SocialMedia.png", "Social Media"]
                ],
                p = function(e) {
                    var a = e.done,
                        t = f(Object(s.useState)(0), 2),
                        r = t[0],
                        l = t[1];
                    return n.a.createElement("div", {
                        className: _.a.modal
                    }, n.a.createElement("div", {
                        className: c.a.container
                    }, n.a.createElement("div", {
                        className: c.a.topContainer
                    }, n.a.createElement("div", {
                        className: c.a.welcomeText
                    }, "Welcome Tour"), n.a.createElement("div", {
                        className: c.a.laterButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return a(!1)
                        }
                    }, "Later")), n.a.createElement("div", {
                        className: c.a.contentContainer
                    }, n.a.createElement("div", {
                        className: c.a.imageContainer
                    }, n.a.createElement("img", {
                        src: y[r][2],
                        alt: y[r][3],
                        className: c.a.image,
                        draggable: !1
                    })), n.a.createElement("div", {
                        className: c.a.rightContainer
                    }, n.a.createElement("div", {
                        className: c.a.descText
                    }, n.a.createElement("b", {
                        style: {
                            fontSize: 33,
                            lineHeight: "34px"
                        }
                    }, y[r][0]), n.a.createElement("br", null), n.a.createElement("div", {
                        style: {
                            height: 15
                        }
                    }), y[r][1]), n.a.createElement(m.a, {
                        outsideClass: c.a.nextButton,
                        insideClass: c.a.nextButtonInside,
                        color: "#0bc2cf",
                        onClick: function() {
                            5 === r ? a(!0) : l(r + 1)
                        }
                    }, 5 === r ? "Done" : "Next")))))
                };
            p.propTypes = {
                done: l.a.func
            }, a.a = p
        },
        "4/Tn": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__wrapper___39hph-camelCase{top:0;width:100%;height:100%;z-index:50;overflow:hidden;pointer-events:none}.styles__crab___3fp_l-camelCase,.styles__wrapper___39hph-camelCase{position:absolute;left:0}.styles__crab___3fp_l-camelCase{bottom:0;height:28.75%}.styles__crabDance1___3RFom-camelCase{-webkit-animation:styles__crabDance___2HjXR-camelCase 1s linear -.25s infinite;animation:styles__crabDance___2HjXR-camelCase 1s linear -.25s infinite}.styles__crabDance2___1Fsop-camelCase{-webkit-animation:styles__crabDance___2HjXR-camelCase 1s linear -.75s infinite;animation:styles__crabDance___2HjXR-camelCase 1s linear -.75s infinite}.styles__crabDance3___1PlvL-camelCase{-webkit-animation:styles__crabDance___2HjXR-camelCase 1s linear 0ms infinite;animation:styles__crabDance___2HjXR-camelCase 1s linear 0ms infinite}.styles__crabDance4___39lqN-camelCase{-webkit-animation:styles__crabDance___2HjXR-camelCase 1s linear -.5s infinite;animation:styles__crabDance___2HjXR-camelCase 1s linear -.5s infinite}@-webkit-keyframes styles__crabDance___2HjXR-camelCase{0%{transform:rotate(0deg)}25%{transform:rotate(7deg)}75%{transform:rotate(-7deg)}to{transform:rotate(0deg)}}@keyframes styles__crabDance___2HjXR-camelCase{0%{transform:rotate(0deg)}25%{transform:rotate(7deg)}75%{transform:rotate(-7deg)}to{transform:rotate(0deg)}}.styles__crab1___3DRZ6-camelCase{bottom:75%;-webkit-animation:styles__crab1___3DRZ6-camelCase 6.25s ease-in-out forwards;animation:styles__crab1___3DRZ6-camelCase 6.25s ease-in-out forwards}@-webkit-keyframes styles__crab1___3DRZ6-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(30vw)}40%{transform:translateX(70vw)}60%{transform:translateX(5vw)}80%{transform:translateX(65vw)}to{transform:translateX(calc(100vw + 100%))}}@keyframes styles__crab1___3DRZ6-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(30vw)}40%{transform:translateX(70vw)}60%{transform:translateX(5vw)}80%{transform:translateX(65vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab2___2KQur-camelCase{bottom:50%;-webkit-animation:styles__crab2___2KQur-camelCase 6.75s ease-in-out forwards;animation:styles__crab2___2KQur-camelCase 6.75s ease-in-out forwards}@-webkit-keyframes styles__crab2___2KQur-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(80vw)}35%{transform:translateX(40vw)}55%{transform:translateX(60vw)}80%{transform:translateX(25vw)}to{transform:translateX(calc(100vw + 100%))}}@keyframes styles__crab2___2KQur-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(80vw)}35%{transform:translateX(40vw)}55%{transform:translateX(60vw)}80%{transform:translateX(25vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab3___4pUCp-camelCase{bottom:25%;-webkit-animation:styles__crab3___4pUCp-camelCase 7s ease-in-out forwards;animation:styles__crab3___4pUCp-camelCase 7s ease-in-out forwards}@-webkit-keyframes styles__crab3___4pUCp-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(10vw)}45%{transform:translateX(60vw)}70%{transform:translateX(15vw)}90%{transform:translateX(50vw)}to{transform:translateX(calc(100vw + 100%))}}@keyframes styles__crab3___4pUCp-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(10vw)}45%{transform:translateX(60vw)}70%{transform:translateX(15vw)}90%{transform:translateX(50vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab4___2smxC-camelCase{bottom:0;-webkit-animation:styles__crab4___2smxC-camelCase 6.5s ease-in-out forwards;animation:styles__crab4___2smxC-camelCase 6.5s ease-in-out forwards}@-webkit-keyframes styles__crab4___2smxC-camelCase{0%{transform:translateX(-100%)}10%{transform:translateX(40vw)}35%{transform:translateX(5vw)}55%{transform:translateX(75vw)}80%{transform:translateX(35vw)}to{transform:translateX(calc(100vw + 100%))}}@keyframes styles__crab4___2smxC-camelCase{0%{transform:translateX(-100%)}10%{transform:translateX(40vw)}35%{transform:translateX(5vw)}55%{transform:translateX(75vw)}80%{transform:translateX(35vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__jellyfish___2ZRz9-camelCase{position:absolute;top:0;left:0;width:25%}.styles__jellyfish1___2YxZS-camelCase{left:0;-webkit-animation:styles__jellyfish1___2YxZS-camelCase 6.5s ease-in-out forwards;animation:styles__jellyfish1___2YxZS-camelCase 6.5s ease-in-out forwards}@-webkit-keyframes styles__jellyfish1___2YxZS-camelCase{0%{transform:translateY(-100%)}15%{transform:translateY(5vh)}35%{transform:translateY(55vh)}60%{transform:translateY(35vh)}75%{transform:translateY(0)}to{transform:translateY(calc(100vh + 100%))}}@keyframes styles__jellyfish1___2YxZS-camelCase{0%{transform:translateY(-100%)}15%{transform:translateY(5vh)}35%{transform:translateY(55vh)}60%{transform:translateY(35vh)}75%{transform:translateY(0)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish2___1qtsU-camelCase{left:25%;-webkit-animation:styles__jellyfish2___1qtsU-camelCase 6.25s ease-in-out forwards;animation:styles__jellyfish2___1qtsU-camelCase 6.25s ease-in-out forwards}@-webkit-keyframes styles__jellyfish2___1qtsU-camelCase{0%{transform:translateY(-100%)}20%{transform:translateY(35vh)}45%{transform:translateY(-5vh)}65%{transform:translateY(45vh)}85%{transform:translateY(10vh)}to{transform:translateY(calc(100vh + 100%))}}@keyframes styles__jellyfish2___1qtsU-camelCase{0%{transform:translateY(-100%)}20%{transform:translateY(35vh)}45%{transform:translateY(-5vh)}65%{transform:translateY(45vh)}85%{transform:translateY(10vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish3___3Zg85-camelCase{left:50%;-webkit-animation:styles__jellyfish3___3Zg85-camelCase 7s ease-in-out forwards;animation:styles__jellyfish3___3Zg85-camelCase 7s ease-in-out forwards}@-webkit-keyframes styles__jellyfish3___3Zg85-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(65vh)}40%{transform:translateY(35vh)}55%{transform:translateY(0)}80%{transform:translateY(30vh)}to{transform:translateY(calc(100vh + 100%))}}@keyframes styles__jellyfish3___3Zg85-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(65vh)}40%{transform:translateY(35vh)}55%{transform:translateY(0)}80%{transform:translateY(30vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish4___3lkjU-camelCase{left:75%;-webkit-animation:styles__jellyfish4___3lkjU-camelCase 6.75s ease-in-out forwards;animation:styles__jellyfish4___3lkjU-camelCase 6.75s ease-in-out forwards}@-webkit-keyframes styles__jellyfish4___3lkjU-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(40vh)}45%{transform:translateY(25vh)}65%{transform:translateY(-5vh)}80%{transform:translateY(45vh)}to{transform:translateY(calc(100vh + 100%))}}@keyframes styles__jellyfish4___3lkjU-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(40vh)}45%{transform:translateY(25vh)}65%{transform:translateY(-5vh)}80%{transform:translateY(45vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__frog___2KI_F-camelCase{position:absolute;bottom:0;left:0;width:17.5vw}.styles__frog1___3t81c-camelCase{bottom:0;left:-30vw;-webkit-animation:styles__frog___2KI_F-camelCase 6.75s linear forwards;animation:styles__frog___2KI_F-camelCase 6.75s linear forwards}.styles__frog2___1i0Yg-camelCase{bottom:15%;left:-50vw;-webkit-animation:styles__frog___2KI_F-camelCase 7s linear forwards;animation:styles__frog___2KI_F-camelCase 7s linear forwards}.styles__frog3___2_MLI-camelCase{bottom:35%;left:-20vw;-webkit-animation:styles__frog___2KI_F-camelCase 6.25s linear forwards;animation:styles__frog___2KI_F-camelCase 6.25s linear forwards}.styles__frog4___2QmX6-camelCase{bottom:55%;left:-40vw;-webkit-animation:styles__frog___2KI_F-camelCase 6.5s linear forwards;animation:styles__frog___2KI_F-camelCase 6.5s linear forwards}@-webkit-keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-7.5vw)}10%{transform:translate(15vw,-15vw)}15%{transform:translate(22.5vw,-7.5vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-7.5vw)}30%{transform:translate(45vw,-15vw)}35%{transform:translate(52.5vw,-7.5vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-7.5vw)}50%{transform:translate(75vw,-15vw)}55%{transform:translate(82.5vw,-7.5vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-7.5vw)}70%{transform:translate(105vw,-15vw)}75%{transform:translate(112.5vw,-7.5vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-7.5vw)}90%{transform:translate(135vw,-15vw)}95%{transform:translate(142.5vw,-7.5vw)}to{transform:translate(150vw)}}@keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-7.5vw)}10%{transform:translate(15vw,-15vw)}15%{transform:translate(22.5vw,-7.5vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-7.5vw)}30%{transform:translate(45vw,-15vw)}35%{transform:translate(52.5vw,-7.5vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-7.5vw)}50%{transform:translate(75vw,-15vw)}55%{transform:translate(82.5vw,-7.5vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-7.5vw)}70%{transform:translate(105vw,-15vw)}75%{transform:translate(112.5vw,-7.5vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-7.5vw)}90%{transform:translate(135vw,-15vw)}95%{transform:translate(142.5vw,-7.5vw)}to{transform:translate(150vw)}}.styles__pufferfish___2EHoW-camelCase{position:absolute;top:0;left:0;transform:translate(-50%,-50%);width:12.5vw;opacity:0}.styles__pufferfish1___2s16n-camelCase{top:25%;left:20%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 0s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 0s}.styles__pufferfish2___2ahe_-camelCase{top:50%;left:80%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear .5s;animation:styles__pufferfish___2EHoW-camelCase 3s linear .5s}.styles__pufferfish3___34N9w-camelCase{top:35%;left:40%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 1s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 1s}.styles__pufferfish4___T3Jmv-camelCase{top:65%;left:60%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 1.5s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 1.5s}.styles__pufferfish5___2GdHj-camelCase{top:10%;left:85%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 2s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 2s}.styles__pufferfish6___1nuSb-camelCase{top:70%;left:15%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 2.5s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 2.5s}.styles__pufferfish7___MXy_b-camelCase{top:60%;left:75%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 3s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 3s}.styles__pufferfish8___2fpMJ-camelCase{top:15%;left:15%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 3.5s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 3.5s}.styles__pufferfish9___gd5ew-camelCase{top:50%;left:50%;-webkit-animation:styles__pufferfish___2EHoW-camelCase 3s linear 4s;animation:styles__pufferfish___2EHoW-camelCase 3s linear 4s}@-webkit-keyframes styles__pufferfish___2EHoW-camelCase{0%{transform:translate(-50%,-50%) scale(.1);opacity:1}to{transform:translate(-50%,-50%) scale(5);opacity:1}}@keyframes styles__pufferfish___2EHoW-camelCase{0%{transform:translate(-50%,-50%) scale(.1);opacity:1}to{transform:translate(-50%,-50%) scale(5);opacity:1}}.styles__octopus___3z5IQ-camelCase{position:absolute;top:0;left:0;transform:translate(-50%,-50%);width:12.5vw;opacity:0}.styles__octopus1___qroqd-camelCase{top:30%;left:20%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 0s;animation:styles__octopus___3z5IQ-camelCase 4s linear 0s}.styles__octopus2___2DqYp-camelCase{top:10%;left:60%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear .5s;animation:styles__octopus___3z5IQ-camelCase 4s linear .5s}.styles__octopus3___2_emh-camelCase{top:65%;left:30%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 1s;animation:styles__octopus___3z5IQ-camelCase 4s linear 1s}.styles__octopus4___2Hh0m-camelCase{top:70%;left:80%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 1.5s;animation:styles__octopus___3z5IQ-camelCase 4s linear 1.5s}.styles__octopus5___372Br-camelCase{top:65%;left:15%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 2s;animation:styles__octopus___3z5IQ-camelCase 4s linear 2s}.styles__octopus6___24Wyi-camelCase{top:30%;left:85%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 2.5s;animation:styles__octopus___3z5IQ-camelCase 4s linear 2.5s}.styles__octopus7___WEmEw-camelCase{top:50%;left:50%;-webkit-animation:styles__octopus___3z5IQ-camelCase 4s linear 3s;animation:styles__octopus___3z5IQ-camelCase 4s linear 3s}@-webkit-keyframes styles__octopus___3z5IQ-camelCase{0%{transform:translate(-50%,-50%) scale(.1) rotate(0deg);opacity:1}17%{transform:translate(-50%,-50%) scale(3) rotate(120deg)}34%{transform:translate(-50%,-50%) scale(1) rotate(240deg)}51%{transform:translate(-50%,-50%) scale(3.5) rotate(1turn)}68%{transform:translate(-50%,-50%) scale(.5) rotate(480deg)}85%{transform:translate(-50%,-50%) scale(3) rotate(600deg)}to{transform:translate(-50%,-50%) scale(.1) rotate(2turn);opacity:1}}@keyframes styles__octopus___3z5IQ-camelCase{0%{transform:translate(-50%,-50%) scale(.1) rotate(0deg);opacity:1}17%{transform:translate(-50%,-50%) scale(3) rotate(120deg)}34%{transform:translate(-50%,-50%) scale(1) rotate(240deg)}51%{transform:translate(-50%,-50%) scale(3.5) rotate(1turn)}68%{transform:translate(-50%,-50%) scale(.5) rotate(480deg)}85%{transform:translate(-50%,-50%) scale(3) rotate(600deg)}to{transform:translate(-50%,-50%) scale(.1) rotate(2turn);opacity:1}}.styles__narwhal___3jwIO-camelCase{position:absolute;bottom:0;left:0;height:32.5%;transform:translateX(-100%)}.styles__narwhalDance___d84PX-camelCase{-webkit-animation:styles__narwhalDance___d84PX-camelCase 1s linear infinite;animation:styles__narwhalDance___d84PX-camelCase 1s linear infinite}@-webkit-keyframes styles__narwhalDance___d84PX-camelCase{0%{transform:rotate(0deg)}17.5%{transform:rotate(9deg) translateY(0)}25%{transform:rotate(9deg) translateY(10%)}32.5%{transform:rotate(9deg) translateY(0)}67.5%{transform:rotate(-9deg) translateY(0)}75%{transform:rotate(-9deg) translateY(10%)}82.5%{transform:rotate(-9deg) translateY(0)}to{transform:rotate(0deg)}}@keyframes styles__narwhalDance___d84PX-camelCase{0%{transform:rotate(0deg)}17.5%{transform:rotate(9deg) translateY(0)}25%{transform:rotate(9deg) translateY(10%)}32.5%{transform:rotate(9deg) translateY(0)}67.5%{transform:rotate(-9deg) translateY(0)}75%{transform:rotate(-9deg) translateY(10%)}82.5%{transform:rotate(-9deg) translateY(0)}to{transform:rotate(0deg)}}.styles__narwhal1___4tFTI-camelCase{left:0}.styles__narwhal1___4tFTI-camelCase,.styles__narwhal2___1lu6V-camelCase{bottom:65%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards}.styles__narwhal2___1lu6V-camelCase{left:-30%}.styles__narwhal3___3U2fW-camelCase{bottom:65%;left:-60%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards}.styles__narwhal4___33coZ-camelCase{left:0}.styles__narwhal4___33coZ-camelCase,.styles__narwhal5___2v5w8-camelCase{bottom:32.5%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards}.styles__narwhal5___2v5w8-camelCase{left:-30%}.styles__narwhal6___3F75l-camelCase{bottom:32.5%;left:-60%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards}.styles__narwhal7___DuG-W-camelCase{left:0}.styles__narwhal7___DuG-W-camelCase,.styles__narwhal8___11bPt-camelCase{bottom:2.5%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards}.styles__narwhal8___11bPt-camelCase{left:-30%}.styles__narwhal9___2f6bZ-camelCase{bottom:2.5%;left:-60%;-webkit-animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards}@-webkit-keyframes styles__narwhal___3jwIO-camelCase{0%{transform:translateX(-100%)}to{transform:translateX(calc(160vw + 100%))}}@keyframes styles__narwhal___3jwIO-camelCase{0%{transform:translateX(-100%)}to{transform:translateX(calc(160vw + 100%))}}.styles__megalodon___2vS4S-camelCase{position:absolute;top:0;left:0;width:15vw;opacity:0}.styles__megalodon1___PjDrP-camelCase{top:70%;left:-20%;-webkit-animation:styles__megalodon1___PjDrP-camelCase 2s linear;animation:styles__megalodon1___PjDrP-camelCase 2s linear}@-webkit-keyframes styles__megalodon1___PjDrP-camelCase{0%{transform:rotate(60deg) translateY(0);opacity:1}to{transform:rotate(60deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon1___PjDrP-camelCase{0%{transform:rotate(60deg) translateY(0);opacity:1}to{transform:rotate(60deg) translateY(-250vh);opacity:1}}.styles__megalodon2___1WVIf-camelCase{top:-35%;left:30%;-webkit-animation:styles__megalodon2___1WVIf-camelCase 2s linear .5s;animation:styles__megalodon2___1WVIf-camelCase 2s linear .5s}@-webkit-keyframes styles__megalodon2___1WVIf-camelCase{0%{transform:rotate(150deg) translateY(0);opacity:1}to{transform:rotate(150deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon2___1WVIf-camelCase{0%{transform:rotate(150deg) translateY(0);opacity:1}to{transform:rotate(150deg) translateY(-250vh);opacity:1}}.styles__megalodon3___2n9EP-camelCase{top:75%;left:110%;-webkit-animation:styles__megalodon3___2n9EP-camelCase 2s linear 1s;animation:styles__megalodon3___2n9EP-camelCase 2s linear 1s}@-webkit-keyframes styles__megalodon3___2n9EP-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}@keyframes styles__megalodon3___2n9EP-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}.styles__megalodon4___12Wuj-camelCase{top:-35%;left:85%;-webkit-animation:styles__megalodon4___12Wuj-camelCase 2s linear 1.5s;animation:styles__megalodon4___12Wuj-camelCase 2s linear 1.5s}@-webkit-keyframes styles__megalodon4___12Wuj-camelCase{0%{transform:rotate(-160deg) translateY(0);opacity:1}to{transform:rotate(-160deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon4___12Wuj-camelCase{0%{transform:rotate(-160deg) translateY(0);opacity:1}to{transform:rotate(-160deg) translateY(-250vh);opacity:1}}.styles__megalodon5___1PF_y-camelCase{top:110%;left:30%;-webkit-animation:styles__megalodon5___1PF_y-camelCase 2s linear 2s;animation:styles__megalodon5___1PF_y-camelCase 2s linear 2s}@-webkit-keyframes styles__megalodon5___1PF_y-camelCase{0%{transform:rotate(-10deg) translateY(0);opacity:1}to{transform:rotate(-10deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon5___1PF_y-camelCase{0%{transform:rotate(-10deg) translateY(0);opacity:1}to{transform:rotate(-10deg) translateY(-250vh);opacity:1}}.styles__megalodon6___2S8ej-camelCase{top:35%;left:-20%;-webkit-animation:styles__megalodon6___2S8ej-camelCase 2s linear 2.5s;animation:styles__megalodon6___2S8ej-camelCase 2s linear 2.5s}@-webkit-keyframes styles__megalodon6___2S8ej-camelCase{0%{transform:rotate(95deg) translateY(0);opacity:1}to{transform:rotate(95deg) translateY(-250vw);opacity:1}}@keyframes styles__megalodon6___2S8ej-camelCase{0%{transform:rotate(95deg) translateY(0);opacity:1}to{transform:rotate(95deg) translateY(-250vw);opacity:1}}.styles__megalodon7___1B0bO-camelCase{top:110%;left:80%;-webkit-animation:styles__megalodon7___1B0bO-camelCase 2s linear 3s;animation:styles__megalodon7___1B0bO-camelCase 2s linear 3s}@-webkit-keyframes styles__megalodon7___1B0bO-camelCase{0%{transform:rotate(-25deg) translateY(0);opacity:1}to{transform:rotate(-25deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon7___1B0bO-camelCase{0%{transform:rotate(-25deg) translateY(0);opacity:1}to{transform:rotate(-25deg) translateY(-250vh);opacity:1}}.styles__megalodon8___N7GMc-camelCase{top:-35%;left:90%;-webkit-animation:styles__megalodon8___N7GMc-camelCase 2s linear 3.5s;animation:styles__megalodon8___N7GMc-camelCase 2s linear 3.5s}@-webkit-keyframes styles__megalodon8___N7GMc-camelCase{0%{transform:rotate(-105deg) translateY(0);opacity:1}to{transform:rotate(-105deg) translateY(-250vw);opacity:1}}@keyframes styles__megalodon8___N7GMc-camelCase{0%{transform:rotate(-105deg) translateY(0);opacity:1}to{transform:rotate(-105deg) translateY(-250vw);opacity:1}}.styles__megalodon9___2VMHf-camelCase{top:110%;left:10%;-webkit-animation:styles__megalodon9___2VMHf-camelCase 2s linear 4s;animation:styles__megalodon9___2VMHf-camelCase 2s linear 4s}@-webkit-keyframes styles__megalodon9___2VMHf-camelCase{0%{transform:rotate(30deg) translateY(0);opacity:1}to{transform:rotate(30deg) translateY(-250vh);opacity:1}}@keyframes styles__megalodon9___2VMHf-camelCase{0%{transform:rotate(30deg) translateY(0);opacity:1}to{transform:rotate(30deg) translateY(-250vh);opacity:1}}.styles__megalodon10___2SQrf-camelCase{top:70%;left:110%;-webkit-animation:styles__megalodon10___2SQrf-camelCase 2s linear 4.5s;animation:styles__megalodon10___2SQrf-camelCase 2s linear 4.5s}@-webkit-keyframes styles__megalodon10___2SQrf-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}@keyframes styles__megalodon10___2SQrf-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}.styles__megalodon11___3Zl78-camelCase{top:170%;left:42.5%;-webkit-animation:styles__megalodon11___3Zl78-camelCase 2s linear 5s;animation:styles__megalodon11___3Zl78-camelCase 2s linear 5s}@-webkit-keyframes styles__megalodon11___3Zl78-camelCase{0%{transform:rotate(0deg) translateY(0) scale(3);opacity:1}to{transform:rotate(0deg) translateY(-450vh) scale(3);opacity:1}}@keyframes styles__megalodon11___3Zl78-camelCase{0%{transform:rotate(0deg) translateY(0) scale(3);opacity:1}to{transform:rotate(0deg) translateY(-450vh) scale(3);opacity:1}}.styles__blobfish___2jRam-camelCase{position:absolute;bottom:0;left:0;height:115%;-webkit-animation:styles__blobfish___2jRam-camelCase 7s linear forwards;animation:styles__blobfish___2jRam-camelCase 7s linear forwards}@-webkit-keyframes styles__blobfish___2jRam-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(calc(25vw - 50%))}25%{transform:translateX(calc(25vw - 50%))}45%{transform:translateX(calc(50vw - 50%))}55%{transform:translateX(calc(50vw - 50%))}75%{transform:translateX(calc(75vw - 50%))}80%{transform:translateX(calc(75vw - 50%))}to{transform:translateX(calc(100vw + 100%))}}@keyframes styles__blobfish___2jRam-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(calc(25vw - 50%))}25%{transform:translateX(calc(25vw - 50%))}45%{transform:translateX(calc(50vw - 50%))}55%{transform:translateX(calc(50vw - 50%))}75%{transform:translateX(calc(75vw - 50%))}80%{transform:translateX(calc(75vw - 50%))}to{transform:translateX(calc(100vw + 100%))}}.styles__babyShark___tjAz5-camelCase{position:absolute;top:100%;left:0;width:20vw}.styles__babyShark1___1yiPk-camelCase{top:115%;left:5%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out}.styles__babyShark2___2AEsS-camelCase{top:135%;left:70%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out .5s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out .5s}.styles__babyShark3___25-Us-camelCase{top:100%;left:35%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1s}.styles__babyShark4___x123p-camelCase{top:125%;left:60%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1.5s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1.5s}.styles__babyShark5___17dWV-camelCase{top:105%;left:20%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2s}.styles__babyShark6___1vbYO-camelCase{top:115%;left:50%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2.5s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2.5s}.styles__babyShark7___2VKnR-camelCase{top:120%;left:80%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3s}.styles__babyShark8___29u-D-camelCase{top:125%;left:0;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3.5s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3.5s}.styles__babyShark9___2yAIC-camelCase{top:100%;left:40%;-webkit-animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 4s;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 4s}@-webkit-keyframes styles__babyShark___tjAz5-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-105vh)}to{transform:translateY(0)}}@keyframes styles__babyShark___tjAz5-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-105vh)}to{transform:translateY(0)}}@media only screen and (max-width:950px){.styles__jellyfish___2ZRz9-camelCase{width:35%}.styles__jellyfish1___2YxZS-camelCase{left:0}.styles__jellyfish2___1qtsU-camelCase{left:21.6%}.styles__jellyfish3___3Zg85-camelCase{left:43.3%}.styles__jellyfish4___3lkjU-camelCase{left:65%}.styles__frog___2KI_F-camelCase{width:35vw}.styles__frog1___3t81c-camelCase{left:-40vw}.styles__frog2___1i0Yg-camelCase{left:-50vw}.styles__frog3___2_MLI-camelCase{left:-35vw}.styles__frog4___2QmX6-camelCase{left:-45vw}@-webkit-keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-10vw)}10%{transform:translate(15vw,-20vw)}15%{transform:translate(22.5vw,-10vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-10vw)}30%{transform:translate(45vw,-20vw)}35%{transform:translate(52.5vw,-10vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-10vw)}50%{transform:translate(75vw,-20vw)}55%{transform:translate(82.5vw,-10vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-10vw)}70%{transform:translate(105vw,-20vw)}75%{transform:translate(112.5vw,-10vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-10vw)}90%{transform:translate(135vw,-20vw)}95%{transform:translate(142.5vw,-10vw)}to{transform:translate(150vw)}}@keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-10vw)}10%{transform:translate(15vw,-20vw)}15%{transform:translate(22.5vw,-10vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-10vw)}30%{transform:translate(45vw,-20vw)}35%{transform:translate(52.5vw,-10vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-10vw)}50%{transform:translate(75vw,-20vw)}55%{transform:translate(82.5vw,-10vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-10vw)}70%{transform:translate(105vw,-20vw)}75%{transform:translate(112.5vw,-10vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-10vw)}90%{transform:translate(135vw,-20vw)}95%{transform:translate(142.5vw,-10vw)}to{transform:translate(150vw)}}.styles__pufferfish___2EHoW-camelCase{width:20vw}.styles__octopus___3z5IQ-camelCase{width:22.5vw}.styles__narwhal___3jwIO-camelCase{height:27.5%}.styles__megalodon___2vS4S-camelCase{width:32.5vw}.styles__megalodon1___PjDrP-camelCase,.styles__megalodon6___2S8ej-camelCase{left:-35%}.styles__megalodon11___3Zl78-camelCase{left:33.75%}.styles__babyShark___tjAz5-camelCase{width:33vw}.styles__babyShark2___2AEsS-camelCase{left:60%}.styles__babyShark3___25-Us-camelCase{left:25%}.styles__babyShark4___x123p-camelCase{left:50%}.styles__babyShark5___17dWV-camelCase{left:10%}.styles__babyShark6___1vbYO-camelCase{left:40%}.styles__babyShark7___2VKnR-camelCase{left:67%}.styles__babyShark9___2yAIC-camelCase{left:33.5%}}", ""]), a.locals = {
                wrapper: "styles__wrapper___39hph-camelCase",
                crab: "styles__crab___3fp_l-camelCase",
                crabDance1: "styles__crabDance1___3RFom-camelCase",
                crabDance: "styles__crabDance___2HjXR-camelCase",
                crabDance2: "styles__crabDance2___1Fsop-camelCase",
                crabDance3: "styles__crabDance3___1PlvL-camelCase",
                crabDance4: "styles__crabDance4___39lqN-camelCase",
                crab1: "styles__crab1___3DRZ6-camelCase",
                crab2: "styles__crab2___2KQur-camelCase",
                crab3: "styles__crab3___4pUCp-camelCase",
                crab4: "styles__crab4___2smxC-camelCase",
                jellyfish: "styles__jellyfish___2ZRz9-camelCase",
                jellyfish1: "styles__jellyfish1___2YxZS-camelCase",
                jellyfish2: "styles__jellyfish2___1qtsU-camelCase",
                jellyfish3: "styles__jellyfish3___3Zg85-camelCase",
                jellyfish4: "styles__jellyfish4___3lkjU-camelCase",
                frog: "styles__frog___2KI_F-camelCase",
                frog1: "styles__frog1___3t81c-camelCase",
                frog2: "styles__frog2___1i0Yg-camelCase",
                frog3: "styles__frog3___2_MLI-camelCase",
                frog4: "styles__frog4___2QmX6-camelCase",
                pufferfish: "styles__pufferfish___2EHoW-camelCase",
                pufferfish1: "styles__pufferfish1___2s16n-camelCase",
                pufferfish2: "styles__pufferfish2___2ahe_-camelCase",
                pufferfish3: "styles__pufferfish3___34N9w-camelCase",
                pufferfish4: "styles__pufferfish4___T3Jmv-camelCase",
                pufferfish5: "styles__pufferfish5___2GdHj-camelCase",
                pufferfish6: "styles__pufferfish6___1nuSb-camelCase",
                pufferfish7: "styles__pufferfish7___MXy_b-camelCase",
                pufferfish8: "styles__pufferfish8___2fpMJ-camelCase",
                pufferfish9: "styles__pufferfish9___gd5ew-camelCase",
                octopus: "styles__octopus___3z5IQ-camelCase",
                octopus1: "styles__octopus1___qroqd-camelCase",
                octopus2: "styles__octopus2___2DqYp-camelCase",
                octopus3: "styles__octopus3___2_emh-camelCase",
                octopus4: "styles__octopus4___2Hh0m-camelCase",
                octopus5: "styles__octopus5___372Br-camelCase",
                octopus6: "styles__octopus6___24Wyi-camelCase",
                octopus7: "styles__octopus7___WEmEw-camelCase",
                narwhal: "styles__narwhal___3jwIO-camelCase",
                narwhalDance: "styles__narwhalDance___d84PX-camelCase",
                narwhal1: "styles__narwhal1___4tFTI-camelCase",
                narwhal2: "styles__narwhal2___1lu6V-camelCase",
                narwhal3: "styles__narwhal3___3U2fW-camelCase",
                narwhal4: "styles__narwhal4___33coZ-camelCase",
                narwhal5: "styles__narwhal5___2v5w8-camelCase",
                narwhal6: "styles__narwhal6___3F75l-camelCase",
                narwhal7: "styles__narwhal7___DuG-W-camelCase",
                narwhal8: "styles__narwhal8___11bPt-camelCase",
                narwhal9: "styles__narwhal9___2f6bZ-camelCase",
                megalodon: "styles__megalodon___2vS4S-camelCase",
                megalodon1: "styles__megalodon1___PjDrP-camelCase",
                megalodon2: "styles__megalodon2___1WVIf-camelCase",
                megalodon3: "styles__megalodon3___2n9EP-camelCase",
                megalodon4: "styles__megalodon4___12Wuj-camelCase",
                megalodon5: "styles__megalodon5___1PF_y-camelCase",
                megalodon6: "styles__megalodon6___2S8ej-camelCase",
                megalodon7: "styles__megalodon7___1B0bO-camelCase",
                megalodon8: "styles__megalodon8___N7GMc-camelCase",
                megalodon9: "styles__megalodon9___2VMHf-camelCase",
                megalodon10: "styles__megalodon10___2SQrf-camelCase",
                megalodon11: "styles__megalodon11___3Zl78-camelCase",
                blobfish: "styles__blobfish___2jRam-camelCase",
                babyShark: "styles__babyShark___tjAz5-camelCase",
                babyShark1: "styles__babyShark1___1yiPk-camelCase",
                babyShark2: "styles__babyShark2___2AEsS-camelCase",
                babyShark3: "styles__babyShark3___25-Us-camelCase",
                babyShark4: "styles__babyShark4___x123p-camelCase",
                babyShark5: "styles__babyShark5___17dWV-camelCase",
                babyShark6: "styles__babyShark6___1vbYO-camelCase",
                babyShark7: "styles__babyShark7___2VKnR-camelCase",
                babyShark8: "styles__babyShark8___29u-D-camelCase",
                babyShark9: "styles__babyShark9___2yAIC-camelCase"
            }
        },
        "4f5i": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("0oXL"),
                _ = t("fAPQ"),
                i = t.n(_),
                c = function(e) {
                    var a = e.name,
                        t = e.blook;
                    return n.a.createElement("div", {
                        className: i.a.background
                    }, n.a.createElement("div", {
                        className: i.a.text
                    }, "".concat(a, "'s"), n.a.createElement("br", null), "Dance Party!!!"), n.a.createElement("div", {
                        className: i.a.dancing
                    }, n.a.createElement(o.a, {
                        name: t,
                        className: i.a.blook
                    }), n.a.createElement("div", {
                        className: i.a.shadow
                    })))
                };
            c.propTypes = {
                name: l.a.string,
                blook: l.a.string
            }, a.a = c
        },
        "4kUR": function(e, a, t) {
            var s = t("PL6v");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "6D46": function(e, a, t) {
            var s = t("CL23");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "7No7": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("jaO2"),
                _ = t.n(o),
                i = t("Xst1"),
                c = t.n(i),
                m = t("0oXL"),
                f = function(e) {
                    var a = e.blook,
                        t = e.text,
                        s = e.onClick,
                        r = e.isMerry;
                    return n.a.createElement("div", {
                        className: c.a.modal
                    }, n.a.createElement("div", {
                        className: _.a.container,
                        style: {
                            backgroundColor: r ? "#eb2d37" : null
                        }
                    }, n.a.createElement("div", {
                        className: _.a.containerInside,
                        style: {
                            backgroundColor: r ? "#eb2d37" : null,
                            borderColor: r ? "#fff" : null
                        }
                    }, n.a.createElement("div", {
                        className: _.a.text
                    }, n.a.createElement(m.a, {
                        name: a,
                        className: _.a.blook
                    }), t), n.a.createElement("div", {
                        className: _.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: s
                    }, "OK"))))
                };
            f.propTypes = {
                blook: l.a.string,
                text: l.a.string,
                onClick: l.a.func,
                isMerry: l.a.bool
            }, a.a = f
        },
        "9WNt": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__extraStatLong___j--T3-camelCase{height:50px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:10px 35px}.styles__extraShortStats___2T80z-camelCase,.styles__extraStatLong___j--T3-camelCase{width:90%;display:flex;flex-direction:row}.styles__extraShortStats___2T80z-camelCase{justify-content:space-between;margin:10px 35px 25px}.styles__extraStatShort___TbqTT-camelCase{height:50px;width:47.5%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__extraLeftText___jFLFe-camelCase{text-align:left;margin-left:10px;flex-grow:1}.styles__extraLeftText___jFLFe-camelCase,.styles__extraRightText___3oeEn-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif}.styles__extraRightText___3oeEn-camelCase{text-align:right;margin-right:10px}.styles__extraMsg___PcPor-camelCase{width:90%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;margin:10px 35px}.styles__extraText___2wrwS-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:center;margin:10px 25px;flex-grow:1}@media only screen and (max-width:800px){.styles__extraShortStats___2T80z-camelCase{flex-direction:column;justify-content:normal}.styles__extraStatShort___TbqTT-camelCase{width:100%}.styles__extraStatLong___j--T3-camelCase{margin:10px 15px}.styles__extraLeftText___jFLFe-camelCase,.styles__extraText___2wrwS-camelCase{font-size:22px}.styles__extraMsg___PcPor-camelCase{width:280px;margin:10px 20px}}", ""]), a.locals = {
                extraStatLong: "styles__extraStatLong___j--T3-camelCase",
                extraShortStats: "styles__extraShortStats___2T80z-camelCase",
                extraStatShort: "styles__extraStatShort___TbqTT-camelCase",
                extraLeftText: "styles__extraLeftText___jFLFe-camelCase",
                extraRightText: "styles__extraRightText___3oeEn-camelCase",
                extraMsg: "styles__extraMsg___PcPor-camelCase",
                extraText: "styles__extraText___2wrwS-camelCase"
            }
        },
        A92q: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return T
            }));
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("55Ip"),
                c = t("Ty5D"),
                m = t("E8Bj"),
                f = t("RHuy"),
                d = t.n(f),
                y = t("ca/f"),
                p = t("qnYv");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                h = function() {
                    return e
                };
                var e = {},
                    a = Object.prototype,
                    t = a.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    n = s.iterator || "@@iterator",
                    r = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag";

                function o(e, a, t) {
                    return Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[a]
                }
                try {
                    o({}, "")
                } catch (e) {
                    o = function(e, a, t) {
                        return e[a] = t
                    }
                }

                function _(e, a, t, s) {
                    var n = a && a.prototype instanceof m ? a : m,
                        r = Object.create(n.prototype),
                        l = new T(s || []);
                    return r._invoke = function(e, a, t) {
                        var s = "suspendedStart";
                        return function(n, r) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === n) throw r;
                                return N()
                            }
                            for (t.method = n, t.arg = r;;) {
                                var l = t.delegate;
                                if (l) {
                                    var o = v(l, t);
                                    if (o) {
                                        if (o === c) continue;
                                        return o
                                    }
                                }
                                if ("next" === t.method) t.sent = t._sent = t.arg;
                                else if ("throw" === t.method) {
                                    if ("suspendedStart" === s) throw s = "completed", t.arg;
                                    t.dispatchException(t.arg)
                                } else "return" === t.method && t.abrupt("return", t.arg);
                                s = "executing";
                                var _ = i(e, a, t);
                                if ("normal" === _.type) {
                                    if (s = t.done ? "completed" : "suspendedYield", _.arg === c) continue;
                                    return {
                                        value: _.arg,
                                        done: t.done
                                    }
                                }
                                "throw" === _.type && (s = "completed", t.method = "throw", t.arg = _.arg)
                            }
                        }
                    }(e, t, l), r
                }

                function i(e, a, t) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(a, t)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = _;
                var c = {};

                function m() {}

                function f() {}

                function d() {}
                var y = {};
                o(y, n, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    w = p && p(p(E([])));
                w && w !== a && t.call(w, n) && (y = w);
                var g = d.prototype = m.prototype = Object.create(y);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(a) {
                        o(e, a, (function(e) {
                            return this._invoke(a, e)
                        }))
                    }))
                }

                function C(e, a) {
                    var s;
                    this._invoke = function(n, r) {
                        function l() {
                            return new a((function(s, l) {
                                ! function s(n, r, l, o) {
                                    var _ = i(e[n], e, r);
                                    if ("throw" !== _.type) {
                                        var c = _.arg,
                                            m = c.value;
                                        return m && "object" == u(m) && t.call(m, "__await") ? a.resolve(m.__await).then((function(e) {
                                            s("next", e, l, o)
                                        }), (function(e) {
                                            s("throw", e, l, o)
                                        })) : a.resolve(m).then((function(e) {
                                            c.value = e, l(c)
                                        }), (function(e) {
                                            return s("throw", e, l, o)
                                        }))
                                    }
                                    o(_.arg)
                                }(n, r, s, l)
                            }))
                        }
                        return s = s ? s.then(l, l) : l()
                    }
                }

                function v(e, a) {
                    var t = e.iterator[a.method];
                    if (void 0 === t) {
                        if (a.delegate = null, "throw" === a.method) {
                            if (e.iterator.return && (a.method = "return", a.arg = void 0, v(e, a), "throw" === a.method)) return c;
                            a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return c
                    }
                    var s = i(t, e.iterator, a.arg);
                    if ("throw" === s.type) return a.method = "throw", a.arg = s.arg, a.delegate = null, c;
                    var n = s.arg;
                    return n ? n.done ? (a[e.resultName] = n.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, c) : n : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, c)
                }

                function x(e) {
                    var a = {
                        tryLoc: e[0]
                    };
                    1 in e && (a.catchLoc = e[1]), 2 in e && (a.finallyLoc = e[2], a.afterLoc = e[3]), this.tryEntries.push(a)
                }

                function k(e) {
                    var a = e.completion || {};
                    a.type = "normal", delete a.arg, e.completion = a
                }

                function T(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var a = e[n];
                        if (a) return a.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                r = function a() {
                                    for (; ++s < e.length;)
                                        if (t.call(e, s)) return a.value = e[s], a.done = !1, a;
                                    return a.value = void 0, a.done = !0, a
                                };
                            return r.next = r
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
                return f.prototype = d, o(g, "constructor", d), o(d, "constructor", f), f.displayName = o(d, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var a = "function" == typeof e && e.constructor;
                    return !!a && (a === f || "GeneratorFunction" === (a.displayName || a.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, o(e, l, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(C.prototype), o(C.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = C, e.async = function(a, t, s, n, r) {
                    void 0 === r && (r = Promise);
                    var l = new C(_(a, t, s, n), r);
                    return e.isGeneratorFunction(t) ? l : l.next().then((function(e) {
                        return e.done ? e.value : l.next()
                    }))
                }, b(g), o(g, l, "Generator"), o(g, n, (function() {
                    return this
                })), o(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var a = [];
                    for (var t in e) a.push(t);
                    return a.reverse(),
                        function t() {
                            for (; a.length;) {
                                var s = a.pop();
                                if (s in e) return t.value = s, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = E, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var a in this) "t" === a.charAt(0) && t.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var a = this;

                        function s(t, s) {
                            return l.type = "throw", l.arg = e, a.next = t, s && (a.method = "next", a.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n],
                                l = r.completion;
                            if ("root" === r.tryLoc) return s("end");
                            if (r.tryLoc <= this.prev) {
                                var o = t.call(r, "catchLoc"),
                                    _ = t.call(r, "finallyLoc");
                                if (o && _) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                } else if (o) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0)
                                } else {
                                    if (!_) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, a) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && t.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var r = n;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= a && a <= r.finallyLoc && (r = null);
                        var l = r ? r.completion : {};
                        return l.type = e, l.arg = a, r ? (this.method = "next", this.next = r.finallyLoc, c) : this.complete(l)
                    },
                    complete: function(e, a) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && a && (this.next = a), c
                    },
                    finish: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), k(t), c
                        }
                    },
                    catch: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.tryLoc === e) {
                                var s = t.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    k(t)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, a, t) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: a,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = void 0), c
                    }
                }, e
            }

            function w(e, a, t, s, n, r, l) {
                try {
                    var o = e[r](l),
                        _ = o.value
                } catch (e) {
                    return void t(e)
                }
                o.done ? a(_) : Promise.resolve(_).then(s, n)
            }

            function g(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function b(e, a) {
                return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function C(e) {
                var a = function() {
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
                    var t, s = k(e);
                    if (a) {
                        var n = k(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return v(this, t)
                }
            }

            function v(e, a) {
                if (a && ("object" === u(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return x(e)
            }

            function x(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var T = 60,
                E = function(e) {
                    ! function(e, a) {
                        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(a && a.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), a && b(e, a)
                    }(c, e);
                    var a, t, s, r, l, o = C(c);

                    function c(e) {
                        var a;
                        return function(e, a) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (a = o.call(this, e)).state = {
                            classes: [],
                            isPlus: !1,
                            ready: !1,
                            isCreating: !1,
                            loading: !1,
                            className: "",
                            classColor: "#1f77b4",
                            classError: ""
                        }, a.here = !0, a.loading = !1, a.createClass = a.createClass.bind(x(a)), a
                    }
                    return a = c, (t = [{
                        key: "componentDidMount",
                        value: (r = h().mark((function e() {
                            var a, t = this;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return e.next = 7, new Promise((function(e) {
                                            p.a.put("/api/users/plan").then((function(a) {
                                                t.here && e("Starter" !== a.data.plan)
                                            })).catch((function() {
                                                e(!1)
                                            }))
                                        }));
                                    case 7:
                                        (a = e.sent) ? p.a.get("/api/classes/user").then((function(e) {
                                            t.here && e && t.setState({
                                                classes: e.data,
                                                isPlus: a,
                                                ready: !0
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        })): this.setState({
                                            ready: !0,
                                            isPlus: a
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), l = function() {
                            var e = this,
                                a = arguments;
                            return new Promise((function(t, s) {
                                var n = r.apply(e, a);

                                function l(e) {
                                    w(n, t, s, l, o, "next", e)
                                }

                                function o(e) {
                                    w(n, t, s, l, o, "throw", e)
                                }
                                l(void 0)
                            }))
                        }, function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "createClass",
                        value: function(e) {
                            var a = this;
                            if (e && e.preventDefault(), !this.loading) {
                                if (this.loading = !0, !this.state.className) return this.loading = !1, void this.setState({
                                    classError: "You need a class name."
                                });
                                this.setState({
                                    loading: !0
                                }), p.a.post("/api/classes", {
                                    name: this.state.className,
                                    color: this.state.classColor
                                }).then((function(e) {
                                    a.here && a.props.history.push("/class/".concat(e.data))
                                })).catch((function(e) {
                                    a.here && (console.error(e), a.loading = !1, a.setState({
                                        isCreating: !1,
                                        loading: !1
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return n.a.createElement("div", {
                                className: d.a.holder
                            }, n.a.createElement("div", {
                                className: d.a.header
                            }, "Classes"), this.state.ready ? this.state.isPlus ? 0 === this.state.classes.length ? n.a.createElement("div", {
                                className: d.a.bigContainer
                            }, n.a.createElement("div", {
                                className: d.a.bigText
                            }, "No Classes Yet"), n.a.createElement("div", {
                                className: d.a.addButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        isCreating: !0
                                    })
                                }
                            }, n.a.createElement("i", {
                                className: _()("fas fa-plus-circle", d.a.addIcon)
                            }), n.a.createElement("div", {
                                className: d.a.addText
                            }, "New Class"))) : n.a.createElement("div", {
                                className: d.a.container
                            }, this.state.classes.map((function(e) {
                                return n.a.createElement(i.b, {
                                    to: "/class/".concat(e._id),
                                    className: d.a.class,
                                    key: e._id,
                                    style: {
                                        backgroundColor: e.color
                                    }
                                }, n.a.createElement("div", {
                                    className: d.a.name
                                }, e.name), n.a.createElement("div", {
                                    className: d.a.studentsText
                                }, "".concat(e.students.length, " Student").concat(1 === e.students.length ? "" : "s")))
                            })), n.a.createElement("div", {
                                className: d.a.addButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        isCreating: !0
                                    })
                                }
                            }, n.a.createElement("i", {
                                className: _()("fas fa-plus-circle", d.a.addIcon)
                            }), n.a.createElement("div", {
                                className: d.a.addText
                            }, "New Class"))) : n.a.createElement("div", {
                                className: d.a.bigContainer
                            }, n.a.createElement("div", {
                                className: d.a.bigText
                            }, "Blooket Plus Required"), n.a.createElement(i.b, {
                                to: "/upgrade",
                                className: d.a.upgradeButton
                            }, "Upgrade")) : null, this.state.isCreating ? n.a.createElement(y.a, {
                                text: "Enter a class name and choose a color:",
                                loading: this.state.loading,
                                stringValue: this.state.className,
                                stringChange: function(a) {
                                    return e.setState({
                                        className: a.target.value.slice(0, T),
                                        classError: ""
                                    })
                                },
                                colorChange: function(a) {
                                    return e.setState({
                                        classColor: a
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
                                        return e.setState({
                                            isCreating: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && g(a.prototype, t), s && g(a, s), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), c
                }(n.a.Component);
            E.propTypes = {
                user: l.a.object,
                history: l.a.object
            };
            Object(c.g)(Object(m.c)(E))
        },
        AFGJ: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1sA08-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__container___1sA08-camelCase,.styles__text___3rWvw-camelCase{position:absolute}.styles__text___3rWvw-camelCase{width:80%;top:100%;left:10%;text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw}.styles__n1___d2BBc-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out forwards}.styles__n2___3-126-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out 4s forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out 4s forwards}.styles__n3___38OXb-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out 8s forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out 8s forwards}.styles__n4___1PYu0-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out 12s forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out 12s forwards}.styles__n5___UeiVz-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out 16s forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out 16s forwards}.styles__n6___330zC-camelCase{-webkit-animation:styles__jump___2dFef-camelCase 4s ease-in-out 20s forwards;animation:styles__jump___2dFef-camelCase 4s ease-in-out 20s forwards}@-webkit-keyframes styles__jump___2dFef-camelCase{0%{transform:translateY(0)}20%{transform:translateY(calc(-50% - 65vh))}25%{transform:translateY(calc(-50% - 55vh))}80%{transform:translateY(calc(-50% - 55vh))}to{transform:translateY(0)}}@keyframes styles__jump___2dFef-camelCase{0%{transform:translateY(0)}20%{transform:translateY(calc(-50% - 65vh))}25%{transform:translateY(calc(-50% - 55vh))}80%{transform:translateY(calc(-50% - 55vh))}to{transform:translateY(0)}}.styles__wave1___vDGOB-camelCase,.styles__wave2___13Aeh-camelCase,.styles__wave3___2oPbx-camelCase,.styles__wave4___yphBv-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___vDGOB-camelCase{height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;-webkit-animation:styles__anim-h-wave___KptaO-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.75s infinite alternate;animation:styles__anim-h-wave___KptaO-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.75s infinite alternate}.styles__wave2___13Aeh-camelCase{height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___KptaO-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.5s infinite alternate;animation:styles__anim-h-wave___KptaO-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.5s infinite alternate}.styles__wave3___2oPbx-camelCase{height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___KptaO-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.25s infinite alternate;animation:styles__anim-h-wave___KptaO-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.25s infinite alternate}.styles__wave4___yphBv-camelCase{height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;-webkit-animation:styles__anim-h-wave___KptaO-camelCase 3s linear infinite,styles__anim-v-wave___3r64M-camelCase 2s infinite alternate;animation:styles__anim-h-wave___KptaO-camelCase 3s linear infinite,styles__anim-v-wave___3r64M-camelCase 2s infinite alternate}@-webkit-keyframes styles__anim-h-wave___KptaO-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-h-wave___KptaO-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@-webkit-keyframes styles__anim-v-wave___3r64M-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}@keyframes styles__anim-v-wave___3r64M-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}", ""]), a.locals = {
                container: "styles__container___1sA08-camelCase",
                text: "styles__text___3rWvw-camelCase",
                n1: "styles__n1___d2BBc-camelCase",
                jump: "styles__jump___2dFef-camelCase",
                n2: "styles__n2___3-126-camelCase",
                n3: "styles__n3___38OXb-camelCase",
                n4: "styles__n4___1PYu0-camelCase",
                n5: "styles__n5___UeiVz-camelCase",
                n6: "styles__n6___330zC-camelCase",
                wave1: "styles__wave1___vDGOB-camelCase",
                wave2: "styles__wave2___13Aeh-camelCase",
                wave3: "styles__wave3___2oPbx-camelCase",
                wave4: "styles__wave4___yphBv-camelCase",
                "anim-h-wave": "styles__anim-h-wave___KptaO-camelCase",
                "anim-v-wave": "styles__anim-v-wave___3r64M-camelCase"
            }
        },
        CL23: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3Z55C-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;background-color:#ead49a;font-family:Macondo,sans-serif}.styles__text___2Kw-i-camelCase{position:absolute!important;top:50%;left:50%;transform:translate(-50%,calc(-100% - 50vh))}.styles__textInside___2XfJm-camelCase{text-align:center;font-size:6vw;line-height:6.25vw;padding:1.5vw 2.5vw}.styles__n1___3zxDU-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 0ms forwards,styles__slideOut___3vV1q-camelCase .3s linear 2.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 0ms forwards,styles__slideOut___3vV1q-camelCase .3s linear 2.5s forwards}.styles__n2___1Ufpg-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 2.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 5.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 2.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 5.5s forwards}.styles__n3___1aN9d-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 5.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 9.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 5.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 9.5s forwards}.styles__n4___3esVX-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 9.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 13.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 9.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 13.5s forwards}.styles__n5___1QdJn-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 13.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 17.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 13.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 17.5s forwards}.styles__n6___1_wdS-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 17.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 21.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 17.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 21.5s forwards}.styles__n7___13lT7-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 21.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 25.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 21.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 25.5s forwards}.styles__n8___391fY-camelCase{-webkit-animation:styles__slideIn___150p7-camelCase .3s linear 25.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 27.5s forwards;animation:styles__slideIn___150p7-camelCase .3s linear 25.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 27.5s forwards}@-webkit-keyframes styles__slideIn___150p7-camelCase{0%{transform:translate(-50%,calc(-100% - 50vh))}to{transform:translate(-50%,-50%)}}@keyframes styles__slideIn___150p7-camelCase{0%{transform:translate(-50%,calc(-100% - 50vh))}to{transform:translate(-50%,-50%)}}@-webkit-keyframes styles__slideOut___3vV1q-camelCase{0%{transform:translate(-50%,-50%)}to{transform:translate(-50%,calc(100% + 50vh))}}@keyframes styles__slideOut___3vV1q-camelCase{0%{transform:translate(-50%,-50%)}to{transform:translate(-50%,calc(100% + 50vh))}}", ""]), a.locals = {
                container: "styles__container___3Z55C-camelCase",
                text: "styles__text___2Kw-i-camelCase",
                textInside: "styles__textInside___2XfJm-camelCase",
                n1: "styles__n1___3zxDU-camelCase",
                slideIn: "styles__slideIn___150p7-camelCase",
                slideOut: "styles__slideOut___3vV1q-camelCase",
                n2: "styles__n2___1Ufpg-camelCase",
                n3: "styles__n3___1aN9d-camelCase",
                n4: "styles__n4___3esVX-camelCase",
                n5: "styles__n5___1QdJn-camelCase",
                n6: "styles__n6___1_wdS-camelCase",
                n7: "styles__n7___13lT7-camelCase",
                n8: "styles__n8___391fY-camelCase"
            }
        },
        CPuq: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___DGHB6-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:0;left:0;height:100%;width:100%;z-index:10;pointer-events:none}.styles__text___2Ab5w-camelCase{font-size:4vw;padding:1vw 3vw;text-align:center;color:#fff;font-family:Nunito,sans-serif;font-weight:700;max-width:70%;background-color:rgba(0,0,0,.6);border-radius:6px}@media only screen and (max-width:600px){.styles__text___2Ab5w-camelCase{font-size:3.5vh;padding:1vh 5vw}}", ""]), a.locals = {
                container: "styles__container___DGHB6-camelCase",
                text: "styles__text___2Ab5w-camelCase"
            }
        },
        EP0T: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s);

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function o(e, a) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function _(e) {
                var a = function() {
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
                    var t, s = c(e);
                    if (a) {
                        var n = c(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return i(this, t)
                }
            }

            function i(e, a) {
                if (a && ("object" === r(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var m = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && o(e, a)
                }(i, e);
                var a, t, s, r = _(i);

                function i(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (a = r.call(this, e)).state = {
                        hasError: !1
                    }, a
                }
                return a = i, s = [{
                    key: "getDerivedStateFromError",
                    value: function(e) {
                        return {
                            hasError: !0
                        }
                    }
                }], (t = [{
                    key: "componentDidCatch",
                    value: function(e, a) {
                        console.error(e, a)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.hasError ? n.a.createElement("h1", null, "Something went wrong.") : this.props.children
                    }
                }]) && l(a.prototype, t), s && l(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), i
            }(n.a.Component);
            a.a = m
        },
        "FD/C": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("KkQ+"),
                _ = t.n(o),
                i = function(e) {
                    var a = e.night;
                    return n.a.createElement("div", {
                        className: _.a.slow,
                        style: {
                            color: a ? "#fff" : null,
                            textShadow: a ? "2px 2px 8px #fff" : null
                        }
                    }, "Slow Mo")
                };
            i.propTypes = {
                night: l.a.bool
            }, a.a = i
        },
        JkFz: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3LSgB-camelCase{position:fixed;top:0;left:100%;height:100%;width:400px;background-color:#f7f7f7;box-shadow:-6px 0 8px rgba(0,0,0,.2);z-index:100;opacity:0;transition:.25s}.styles__header___2O21B-camelCase{position:absolute;top:0;left:0;z-index:10;display:flex;flex-direction:row;align-items:center;box-sizing:border-box;width:100%;height:65px;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:30px;color:#fff;background-color:#0bc2cf;text-shadow:0 2.5px rgba(0,0,0,.2);padding:5px 20px 12px;box-shadow:inset 0 -7px rgba(0,0,0,.2)}.styles__newsIcon___1Gixg-camelCase{margin-right:15px}.styles__headerText___1RCjc-camelCase{font-family:Titan One,sans-serif;font-size:34px;padding-bottom:4px}.styles__newsText___14273-camelCase{font-family:Nunito,sans-serif;font-weight:700;margin:auto auto auto 8px}.styles__closeIcon___16coI-camelCase{font-size:24px;margin-left:auto;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__closeIcon___16coI-camelCase:hover{transform:scale(.9)}.styles__postsContainer___39_IQ-camelCase{width:100%;overflow-y:auto;display:flex;flex-direction:column;padding:10px 0;height:calc(100% - 85px);position:absolute;top:65px;left:0}@media only screen and (max-width:865px){.styles__container___3LSgB-camelCase{width:100%}}", ""]), a.locals = {
                container: "styles__container___3LSgB-camelCase",
                header: "styles__header___2O21B-camelCase",
                newsIcon: "styles__newsIcon___1Gixg-camelCase",
                headerText: "styles__headerText___1RCjc-camelCase",
                newsText: "styles__newsText___14273-camelCase",
                closeIcon: "styles__closeIcon___16coI-camelCase",
                postsContainer: "styles__postsContainer___39_IQ-camelCase"
            }
        },
        "KkQ+": function(e, a, t) {
            var s = t("QB78");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        KpTr: function(e, a, t) {
            var s = t("//Pr");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        McVc: function(e, a, t) {
            var s = t("CPuq");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        NTuM: function(e, a, t) {
            var s = t("4/Tn");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        NoTM: function(e, a, t) {
            var s = t("Q8Bf");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        NqeJ: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__cardContainer___NGmjp-camelCase{box-sizing:border-box;width:90%;margin:10px auto;padding:10px 15px 17px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;color:#3a3a3a;font-family:Nunito,sans-serif}.styles__tagText___314Bv-camelCase{opacity:.7;font-size:14px}.styles__header___kLT5x-camelCase{font-size:24px;line-height:26px;font-weight:700;margin-bottom:5px}.styles__image___2uoLV-camelCase{width:100%;margin:5px auto}.styles__text___1L6DW-camelCase{font-size:16px;margin-bottom:12px}.styles__link___Fdkpv-camelCase{color:#0bc2cf;margin-bottom:2px}.styles__dateRow___1jkQT-camelCase{opacity:.45;font-size:12px;display:flex;flex-direction:row;align-items:center}", ""]), a.locals = {
                cardContainer: "styles__cardContainer___NGmjp-camelCase",
                tagText: "styles__tagText___314Bv-camelCase",
                header: "styles__header___kLT5x-camelCase",
                image: "styles__image___2uoLV-camelCase",
                text: "styles__text___1L6DW-camelCase",
                link: "styles__link___Fdkpv-camelCase",
                dateRow: "styles__dateRow___1jkQT-camelCase"
            }
        },
        PL6v: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, '.styles__header___2fYsr-camelCase{background-color:#9a49aa;width:100vw;height:65px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__expandIcon___2-Oui-camelCase{font-size:28px;color:#fff;text-align:left;line-height:65px;position:absolute;left:20px;cursor:pointer;outline:none}.styles__headerTextCenter___2Vw2--camelCase{font-size:38px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Titan One,sans-serif}.styles__headerRight___28epw-camelCase,.styles__headerTextCenter___2Vw2--camelCase{color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___28epw-camelCase{font-size:24px;font-weight:700;font-family:Nunito,sans-serif;text-align:right;text-decoration:underline;line-height:65px;padding-right:40px;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__headerRight___28epw-camelCase:hover{transform:scale(1.05)}.styles__again___3tJQu-camelCase{font-size:32px;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;text-decoration:none;position:absolute;top:20px;right:25px;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:0;transition:transform .4s cubic-bezier(.39,.5,.15,1.36);-webkit-animation:styles__fadeIn___3NOll-camelCase .5s linear 5.5s forwards;animation:styles__fadeIn___3NOll-camelCase .5s linear 5.5s forwards}.styles__again___3tJQu-camelCase:hover{transform:scale(1.05)}@-webkit-keyframes styles__fadeIn___3NOll-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3NOll-camelCase{0%{opacity:0}to{opacity:1}}.styles__placeText___1iW_M-camelCase{text-align:right;width:2.6vw;height:5vw;top:.5vw;left:.75vw}.styles__placeText___1iW_M-camelCase,.styles__superPlaceText___ib8cq-camelCase{position:absolute;font-family:Titan One,sans-serif;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left}.styles__superPlaceText___ib8cq-camelCase{text-align:center;top:.75vw;left:3.45vw;height:1.7vw;width:1.85vw;text-align:left}.styles__containerOne___6IQSF-camelCase{position:absolute;height:calc(85vh - 65px);width:25vw;top:105vh;left:37.5vw;border-radius:10px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___2Bror-camelCase .35s linear 4.75s forwards;animation:styles__slideUp___2Bror-camelCase .35s linear 4.75s forwards}@-webkit-keyframes styles__slideUp___2Bror-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}@keyframes styles__slideUp___2Bror-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}.styles__nameTextOne___1BI1W-camelCase{height:12.5vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextOne___1BI1W-camelCase,.styles__scoreTextOne___1gq0L-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextOne___1gq0L-camelCase{height:7.5vh;top:17vh;font-family:Nunito,sans-serif;font-weight:700}.styles__firstBlook___nxabn-camelCase{position:absolute;top:calc(100% - 22vw);left:50%;transform:translateX(-50%);height:20.7vw;width:18vw}.styles__placeOne___IH_So-camelCase{opacity:0;height:6vw;width:6vw;top:-3vw;right:-4.5vw;color:#fff;background-color:#ffe900;-webkit-animation:styles__fadeIn___3NOll-camelCase .25s linear 5.1s forwards;animation:styles__fadeIn___3NOll-camelCase .25s linear 5.1s forwards}.styles__containerTwo___20f21-camelCase,.styles__placeOne___IH_So-camelCase{position:absolute;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__containerTwo___20f21-camelCase{height:calc(67.5vh - 65px);width:25vw;top:105vh;left:7.5vw;background-color:#fff;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___2Bror-camelCase .35s linear 2.75s forwards;animation:styles__slideUp___2Bror-camelCase .35s linear 2.75s forwards}.styles__nameTextTwo___sO639-camelCase{height:10vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextTwo___sO639-camelCase,.styles__scoreTextTwo___3RnL0-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextTwo___3RnL0-camelCase{height:6vh;top:13.5vh;font-family:Nunito,sans-serif;font-weight:700}.styles__secondBlook___1Is9n-camelCase{position:absolute;top:calc(100% - 16.94vw);left:50%;transform:translateX(-50%);height:15.64vw;width:13.6vw}.styles__placeTwo___3tpD8-camelCase{opacity:0;height:6vw;width:6vw;top:-3vw;right:-4.5vw;color:#fff;background-color:#818181;-webkit-animation:styles__fadeIn___3NOll-camelCase .25s linear 3.1s forwards;animation:styles__fadeIn___3NOll-camelCase .25s linear 3.1s forwards}.styles__containerThree___2KgAT-camelCase,.styles__placeTwo___3tpD8-camelCase{position:absolute;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__containerThree___2KgAT-camelCase{height:calc(55vh - 65px);width:25vw;top:105vh;left:67.5vw;background-color:#fff;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___2Bror-camelCase .35s linear 1.5s forwards;animation:styles__slideUp___2Bror-camelCase .35s linear 1.5s forwards}.styles__nameTextThree___3unIe-camelCase{height:8.5vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextThree___3unIe-camelCase,.styles__scoreTextThree___5Qlk8-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextThree___5Qlk8-camelCase{height:5vh;top:11.75vh;font-family:Nunito,sans-serif;font-weight:700}.styles__thirdBlook___3qZV6-camelCase{position:absolute;top:calc(100% - 11.995vw);left:50%;transform:translateX(-50%);height:10.695vw;width:9.3vw}.styles__placeThree___3ao7I-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#cd7f32;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__fadeIn___3NOll-camelCase .25s linear 1.9s forwards;animation:styles__fadeIn___3NOll-camelCase .25s linear 1.9s forwards}.styles__standingsArray___5sYnN-camelCase{position:absolute;top:96vh;left:10vw;width:80vw;padding:1vh 0 4vh;justify-content:center;opacity:0;-webkit-animation:styles__fadeIn___3NOll-camelCase .4s linear 5.5s forwards;animation:styles__fadeIn___3NOll-camelCase .4s linear 5.5s forwards}.styles__standingHolder___2FRKC-camelCase,.styles__standingsArray___5sYnN-camelCase{display:flex;flex-direction:column}.styles__standingHolder___2FRKC-camelCase{width:100%;margin:12.5px auto}.styles__standingContainer___2jBqj-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#3a3a3a;display:flex;flex-direction:row;height:70px;width:100%}.styles__standingPlaceText___3ZrA7-camelCase{padding-left:10px;min-width:60px;line-height:70px;font-size:45px;text-align:right}.styles__standingPlaceText___3ZrA7-camelCase,.styles__standingSuperPlaceText___zLwPT-camelCase{font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingSuperPlaceText___zLwPT-camelCase{text-align:left;width:22px;font-size:22px;margin-top:8px;margin-left:2px;margin-right:10px}.styles__standingBlook___1w5m9-camelCase{height:57.5px;width:50px;margin:6.25px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingNameText___10lKu-camelCase{margin-left:12px;font-size:36px;text-align:left;flex-grow:1}.styles__standingNameText___10lKu-camelCase,.styles__standingStatText___2Sr7c-camelCase{font-weight:700;line-height:70px;font-family:Nunito,sans-serif}.styles__standingStatText___2Sr7c-camelCase{font-size:32px;text-align:right;margin-right:20px}.styles__standingPlayerContainer___1vrDb-camelCase{margin:-2vh auto 0;padding-top:3vh;min-height:8vh;width:90%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;z-index:-1}.styles__playerText___SmxK2-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-weight:700;font-size:2vw;margin:auto 20px;text-align:left}.styles__containerInside___315sX-camelCase{position:absolute;width:calc(100% - 20px);height:calc(100% - 20px);top:10px;left:10px;box-sizing:border-box}.styles__spookyContainer___2hJWg-camelCase{background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;color:#fff}.styles__winterContainer1___1vRnZ-camelCase{background-color:#f23941;color:#fff}.styles__winterInside1___2r_eh-camelCase{border:5px solid #fff;background-color:#f23941}.styles__winterContainer2___1BIC7-camelCase{background-color:#0cb04a;color:#fff}.styles__winterInside2___3daA2-camelCase{border:5px solid #fff;background-color:#0cb04a}.styles__royalBackground___1STe6-camelCase{background-size:74.5px}.styles__royalContainer___3nNWd-camelCase{background-color:#d52423;color:#fff}.styles__royalInside___3NKGa-camelCase{border:5px solid #ffd329;background-color:#d52423}.styles__cafeContainer___1AX7c-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 .6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);color:#fff}.styles__fishContainer___26qev-camelCase{background-color:#ff751a;color:#fff}.styles__fishInside___3EX6V-camelCase{border:5px solid #fff;background-color:#ff751a;border-radius:5px}.styles__rushContainer___3Up3E-camelCase{background-color:#36c;color:#fff}.styles__rushInside___IC-YE-camelCase{border:5px solid #fff;background-color:#36c;border-radius:5px}.styles__brawlContainer___yveeP-camelCase{background-color:#374154;color:#fff}.styles__hackContainer___3IVg6-camelCase{border:5px solid rgba(128,255,128,.8);background-color:#000;color:rgba(128,255,128,.8);text-shadow:0 0 1px rgba(51,255,51,.4),0 0 2px hsla(0,0%,100%,.8)}.styles__noise___29VJC-camelCase{background-image:url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.02}.styles__noise___29VJC-camelCase,.styles__overlay___37SHX-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.styles__overlay___37SHX-camelCase{background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__overlay___37SHX-camelCase:before{content:"";pointer-events:none;position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient(0deg,transparent,rgba(32,128,32,.2) 2%,rgba(32,128,32,.8) 3%,rgba(32,128,32,.2) 0,transparent);background-repeat:no-repeat;background-position:0 -100vh;-webkit-animation:styles__scan___e3OXW-camelCase 7.5s linear 12.5s infinite;animation:styles__scan___e3OXW-camelCase 7.5s linear 12.5s infinite}@-webkit-keyframes styles__scan___e3OXW-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}@keyframes styles__scan___e3OXW-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}', ""]), a.locals = {
                header: "styles__header___2fYsr-camelCase",
                expandIcon: "styles__expandIcon___2-Oui-camelCase",
                headerTextCenter: "styles__headerTextCenter___2Vw2--camelCase",
                headerRight: "styles__headerRight___28epw-camelCase",
                again: "styles__again___3tJQu-camelCase",
                fadeIn: "styles__fadeIn___3NOll-camelCase",
                placeText: "styles__placeText___1iW_M-camelCase",
                superPlaceText: "styles__superPlaceText___ib8cq-camelCase",
                containerOne: "styles__containerOne___6IQSF-camelCase",
                slideUp: "styles__slideUp___2Bror-camelCase",
                nameTextOne: "styles__nameTextOne___1BI1W-camelCase",
                scoreTextOne: "styles__scoreTextOne___1gq0L-camelCase",
                firstBlook: "styles__firstBlook___nxabn-camelCase",
                placeOne: "styles__placeOne___IH_So-camelCase",
                containerTwo: "styles__containerTwo___20f21-camelCase",
                nameTextTwo: "styles__nameTextTwo___sO639-camelCase",
                scoreTextTwo: "styles__scoreTextTwo___3RnL0-camelCase",
                secondBlook: "styles__secondBlook___1Is9n-camelCase",
                placeTwo: "styles__placeTwo___3tpD8-camelCase",
                containerThree: "styles__containerThree___2KgAT-camelCase",
                nameTextThree: "styles__nameTextThree___3unIe-camelCase",
                scoreTextThree: "styles__scoreTextThree___5Qlk8-camelCase",
                thirdBlook: "styles__thirdBlook___3qZV6-camelCase",
                placeThree: "styles__placeThree___3ao7I-camelCase",
                standingsArray: "styles__standingsArray___5sYnN-camelCase",
                standingHolder: "styles__standingHolder___2FRKC-camelCase",
                standingContainer: "styles__standingContainer___2jBqj-camelCase",
                standingPlaceText: "styles__standingPlaceText___3ZrA7-camelCase",
                standingSuperPlaceText: "styles__standingSuperPlaceText___zLwPT-camelCase",
                standingBlook: "styles__standingBlook___1w5m9-camelCase",
                standingNameText: "styles__standingNameText___10lKu-camelCase",
                standingStatText: "styles__standingStatText___2Sr7c-camelCase",
                standingPlayerContainer: "styles__standingPlayerContainer___1vrDb-camelCase",
                playerText: "styles__playerText___SmxK2-camelCase",
                containerInside: "styles__containerInside___315sX-camelCase",
                spookyContainer: "styles__spookyContainer___2hJWg-camelCase",
                winterContainer1: "styles__winterContainer1___1vRnZ-camelCase",
                winterInside1: "styles__winterInside1___2r_eh-camelCase",
                winterContainer2: "styles__winterContainer2___1BIC7-camelCase",
                winterInside2: "styles__winterInside2___3daA2-camelCase",
                royalBackground: "styles__royalBackground___1STe6-camelCase",
                royalContainer: "styles__royalContainer___3nNWd-camelCase",
                royalInside: "styles__royalInside___3NKGa-camelCase",
                cafeContainer: "styles__cafeContainer___1AX7c-camelCase",
                fishContainer: "styles__fishContainer___26qev-camelCase",
                fishInside: "styles__fishInside___3EX6V-camelCase",
                rushContainer: "styles__rushContainer___3Up3E-camelCase",
                rushInside: "styles__rushInside___IC-YE-camelCase",
                brawlContainer: "styles__brawlContainer___yveeP-camelCase",
                hackContainer: "styles__hackContainer___3IVg6-camelCase",
                noise: "styles__noise___29VJC-camelCase",
                overlay: "styles__overlay___37SHX-camelCase",
                scan: "styles__scan___e3OXW-camelCase"
            }
        },
        POi4: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("6D46"),
                c = t.n(i),
                m = t("LHn/"),
                f = t("2Euj"),
                d = t("74sb"),
                y = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return n.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            backgroundImage: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url(".concat(m.a.dino.paperTexture, ")")
                        }
                    }, n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n1),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Answer Questions")
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n2),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Excavate or Investigate")
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n3),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Excavate: Choose rocks to collect fossils")
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n4),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, 'You can also "Cheat" to see inside the rocks')
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n5),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Investigate: Check if a player is cheating")
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n6),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "If you catch a cheater, you'll take some of their fossils")
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n7),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Time" === a ? "Most fossils after ".concat(Object(d.o)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(d.o)(t), " Fossils wins!"))
                    }), n.a.createElement(f.a, {
                        className: _()(c.a.text, c.a.n8),
                        content: n.a.createElement("div", {
                            className: c.a.textInside
                        }, "Good Luck!")
                    }))
                };
            y.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = y
        },
        Q8Bf: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__header___18Vr4-camelCase{background-color:#9a49aa;width:100vw;height:65px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__expandIcon___3jWD8-camelCase{font-size:28px;color:#fff;text-align:left;line-height:65px;position:absolute;left:20px;cursor:pointer;outline:none}.styles__headerTextCenter___1_g2X-camelCase{font-size:38px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Titan One,sans-serif}.styles__headerRight___1NyBY-camelCase,.styles__headerTextCenter___1_g2X-camelCase{color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___1NyBY-camelCase{font-size:24px;font-weight:700;text-align:right;text-decoration:underline;line-height:65px;padding-right:40px;font-family:Nunito,sans-serif;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__headerRight___1NyBY-camelCase:hover{transform:scale(1.05)}.styles__again___3RPk--camelCase{font-size:32px;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;text-decoration:none;position:absolute;top:20px;right:25px;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:0;transition:transform .4s cubic-bezier(.39,.5,.15,1.36);-webkit-animation:styles__fadeIn___1dl0p-camelCase .5s linear 5.5s forwards;animation:styles__fadeIn___1dl0p-camelCase .5s linear 5.5s forwards}.styles__again___3RPk--camelCase:hover{transform:scale(1.05)}@-webkit-keyframes styles__fadeIn___1dl0p-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1dl0p-camelCase{0%{opacity:0}to{opacity:1}}.styles__placeText___3J_SM-camelCase{text-align:right;width:2.6vw;height:5vw;top:.5vw;left:.75vw}.styles__placeText___3J_SM-camelCase,.styles__superPlaceText___x5xZF-camelCase{position:absolute;font-family:Titan One,sans-serif;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left}.styles__superPlaceText___x5xZF-camelCase{text-align:center;top:.75vw;left:3.45vw;height:1.7vw;width:1.85vw;text-align:left}.styles__containerOne___2Og1Z-camelCase{position:absolute!important;height:calc(85vh - 65px);width:25vw;top:105vh;left:37.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___3M3uk-camelCase .35s linear 4.75s forwards;animation:styles__slideUp___3M3uk-camelCase .35s linear 4.75s forwards}@-webkit-keyframes styles__slideUp___3M3uk-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}@keyframes styles__slideUp___3M3uk-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}.styles__dino___2_v3j-camelCase{width:100%;height:100%}.styles__nameTextOne___39tjM-camelCase{height:12.5vh;top:2vh;font-weight:700}.styles__nameTextOne___39tjM-camelCase,.styles__scoreTextOne___1Eejl-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextOne___1Eejl-camelCase{height:7.5vh;top:17vh}.styles__firstBlook___NAvyb-camelCase{position:absolute;top:calc(100% - 22vw);left:50%;transform:translateX(-50%);height:20.7vw;width:18vw}.styles__placeOne___1YPAe-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#ffe900;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__fadeIn___1dl0p-camelCase .25s linear 5.1s forwards;animation:styles__fadeIn___1dl0p-camelCase .25s linear 5.1s forwards}.styles__containerTwo___ZwdST-camelCase{position:absolute!important;height:calc(67.5vh - 65px);width:25vw;top:105vh;left:7.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___3M3uk-camelCase .35s linear 2.75s forwards;animation:styles__slideUp___3M3uk-camelCase .35s linear 2.75s forwards}.styles__nameTextTwo___HL-t--camelCase{height:10vh;top:2vh;font-weight:700}.styles__nameTextTwo___HL-t--camelCase,.styles__scoreTextTwo___c3cXr-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextTwo___c3cXr-camelCase{height:6vh;top:13.5vh}.styles__secondBlook___3GCEF-camelCase{position:absolute;top:calc(100% - 16.94vw);left:50%;transform:translateX(-50%);height:15.64vw;width:13.6vw}.styles__placeTwo___3nwWM-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#818181;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__fadeIn___1dl0p-camelCase .25s linear 3.1s forwards;animation:styles__fadeIn___1dl0p-camelCase .25s linear 3.1s forwards}.styles__containerThree___2XocF-camelCase{position:absolute!important;height:calc(55vh - 65px);width:25vw;top:105vh;left:67.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-animation:styles__slideUp___3M3uk-camelCase .35s linear 1.5s forwards;animation:styles__slideUp___3M3uk-camelCase .35s linear 1.5s forwards}.styles__nameTextThree___Ry7xl-camelCase{height:8.5vh;top:2vh;font-weight:700}.styles__nameTextThree___Ry7xl-camelCase,.styles__scoreTextThree___3WuQ2-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextThree___3WuQ2-camelCase{height:5vh;top:11.75vh}.styles__thirdBlook___21CDM-camelCase{position:absolute;top:calc(100% - 11.995vw);left:50%;transform:translateX(-50%);height:10.695vw;width:9.3vw}.styles__placeThree___vtIfj-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#cd7f32;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-animation:styles__fadeIn___1dl0p-camelCase .25s linear 1.9s forwards;animation:styles__fadeIn___1dl0p-camelCase .25s linear 1.9s forwards}.styles__standingsArray___3qw_H-camelCase{position:absolute;top:96vh;left:10vw;width:80vw;padding:1vh 0 4vh;justify-content:center;opacity:0;-webkit-animation:styles__fadeIn___1dl0p-camelCase .4s linear 5.5s forwards;animation:styles__fadeIn___1dl0p-camelCase .4s linear 5.5s forwards}.styles__standingHolder___3pwph-camelCase,.styles__standingsArray___3qw_H-camelCase{display:flex;flex-direction:column}.styles__standingHolder___3pwph-camelCase{width:100%;margin:12.5px auto}.styles__standingContainer___1Xld--camelCase{display:flex;flex-direction:row;height:70px;width:100%}.styles__standingPlaceText___2JGMQ-camelCase{padding-left:10px;min-width:60px;line-height:70px;font-size:45px;text-align:right}.styles__standingPlaceText___2JGMQ-camelCase,.styles__standingSuperPlaceText___Wk4Ox-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingSuperPlaceText___Wk4Ox-camelCase{text-align:left;width:22px;font-size:22px;margin-top:8px;margin-left:2px;margin-right:10px}.styles__standingBlook___SfoyH-camelCase{height:57.5px;width:50px;margin:6.25px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingNameText___1c4eO-camelCase{font-weight:700;margin-left:12px;line-height:70px;font-size:36px;text-align:left;flex-grow:1}.styles__standingStatText___2U7ds-camelCase{font-size:32px;font-weight:700;line-height:70px;text-align:right;margin-right:20px}", ""]), a.locals = {
                header: "styles__header___18Vr4-camelCase",
                expandIcon: "styles__expandIcon___3jWD8-camelCase",
                headerTextCenter: "styles__headerTextCenter___1_g2X-camelCase",
                headerRight: "styles__headerRight___1NyBY-camelCase",
                again: "styles__again___3RPk--camelCase",
                fadeIn: "styles__fadeIn___1dl0p-camelCase",
                placeText: "styles__placeText___3J_SM-camelCase",
                superPlaceText: "styles__superPlaceText___x5xZF-camelCase",
                containerOne: "styles__containerOne___2Og1Z-camelCase",
                slideUp: "styles__slideUp___3M3uk-camelCase",
                dino: "styles__dino___2_v3j-camelCase",
                nameTextOne: "styles__nameTextOne___39tjM-camelCase",
                scoreTextOne: "styles__scoreTextOne___1Eejl-camelCase",
                firstBlook: "styles__firstBlook___NAvyb-camelCase",
                placeOne: "styles__placeOne___1YPAe-camelCase",
                containerTwo: "styles__containerTwo___ZwdST-camelCase",
                nameTextTwo: "styles__nameTextTwo___HL-t--camelCase",
                scoreTextTwo: "styles__scoreTextTwo___c3cXr-camelCase",
                secondBlook: "styles__secondBlook___3GCEF-camelCase",
                placeTwo: "styles__placeTwo___3nwWM-camelCase",
                containerThree: "styles__containerThree___2XocF-camelCase",
                nameTextThree: "styles__nameTextThree___Ry7xl-camelCase",
                scoreTextThree: "styles__scoreTextThree___3WuQ2-camelCase",
                thirdBlook: "styles__thirdBlook___21CDM-camelCase",
                placeThree: "styles__placeThree___vtIfj-camelCase",
                standingsArray: "styles__standingsArray___3qw_H-camelCase",
                standingHolder: "styles__standingHolder___3pwph-camelCase",
                standingContainer: "styles__standingContainer___1Xld--camelCase",
                standingPlaceText: "styles__standingPlaceText___2JGMQ-camelCase",
                standingSuperPlaceText: "styles__standingSuperPlaceText___Wk4Ox-camelCase",
                standingBlook: "styles__standingBlook___SfoyH-camelCase",
                standingNameText: "styles__standingNameText___1c4eO-camelCase",
                standingStatText: "styles__standingStatText___2U7ds-camelCase"
            }
        },
        QB78: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__slow___ZjmVE-camelCase{font-size:7vw;text-align:center;color:#3a3a3a;text-shadow:2px 2px 8px #3a3a3a;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;z-index:11;-webkit-animation:styles__slowMo___lWOT8-camelCase 3s linear;animation:styles__slowMo___lWOT8-camelCase 3s linear}@-webkit-keyframes styles__slowMo___lWOT8-camelCase{0%{opacity:0;transform:translate(-50%,-50%)}25%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}45%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}55%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}75%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}to{opacity:0;transform:translate(-50%,-50%)}}@keyframes styles__slowMo___lWOT8-camelCase{0%{opacity:0;transform:translate(-50%,-50%)}25%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}45%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}55%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}75%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}to{opacity:0;transform:translate(-50%,-50%)}}@media only screen and (max-width:600px){.styles__slow___ZjmVE-camelCase{font-size:6vh}}", ""]), a.locals = {
                slow: "styles__slow___ZjmVE-camelCase",
                slowMo: "styles__slowMo___lWOT8-camelCase"
            }
        },
        QjaI: function(e, a, t) {
            var s = t("9WNt");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        QlN9: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3rOMF-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:610px;background-color:#fff;border-radius:7px;text-align:center;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__topContainer___1xnwM-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:45px;width:100%;margin:0;border-bottom:2px solid #e0e0e0}.styles__welcomeText___3oMJf-camelCase{font-size:30px;font-weight:700;text-align:left;margin-left:20px}.styles__laterButton___SsFeq-camelCase,.styles__welcomeText___3oMJf-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__laterButton___SsFeq-camelCase{font-size:24px;text-align:right;opacity:.8;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;margin-right:20px;transition:all .15s linear}.styles__laterButton___SsFeq-camelCase:focus,.styles__laterButton___SsFeq-camelCase:hover{color:#0bc2cf}.styles__contentContainer___1pENY-camelCase{display:flex;flex-direction:row;margin:15px}.styles__imageContainer___3-2WB-camelCase{height:300px;width:200px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__image___G-jjt-camelCase{-o-object-fit:contain;object-fit:contain}.styles__rightContainer___2ooH7-camelCase{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;height:300px;margin-left:20px}.styles__descText___2e9Ls-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;text-align:center;width:100%}.styles__nextButton___Hmxh9-camelCase{margin:auto 0 0 auto}.styles__nextButtonInside___3u80O-camelCase{width:90px;height:30px;font-size:26px}", ""]), a.locals = {
                container: "styles__container___3rOMF-camelCase",
                topContainer: "styles__topContainer___1xnwM-camelCase",
                welcomeText: "styles__welcomeText___3oMJf-camelCase",
                laterButton: "styles__laterButton___SsFeq-camelCase",
                contentContainer: "styles__contentContainer___1pENY-camelCase",
                imageContainer: "styles__imageContainer___3-2WB-camelCase",
                image: "styles__image___G-jjt-camelCase",
                rightContainer: "styles__rightContainer___2ooH7-camelCase",
                descText: "styles__descText___2e9Ls-camelCase",
                nextButton: "styles__nextButton___Hmxh9-camelCase",
                nextButtonInside: "styles__nextButtonInside___3u80O-camelCase"
            }
        },
        RHuy: function(e, a, t) {
            var s = t("oxBM");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        TuVA: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3L0cd-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__container___3L0cd-camelCase,.styles__text___3IxTy-camelCase{position:absolute}.styles__text___3IxTy-camelCase{width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw;opacity:0}.styles__n1___UQ6tb-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 0ms forwards,styles__fadeOut___202mX-camelCase .15s linear 2.5s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 0ms forwards,styles__fadeOut___202mX-camelCase .15s linear 2.5s forwards}.styles__n2___2i0YB-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 2.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 4.5s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 2.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 4.5s forwards}.styles__n3___Murts-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 4.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 6.5s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 4.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 6.5s forwards}.styles__n4___13Ojp-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 6.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 9s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 6.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 9s forwards}.styles__n5___e627H-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 9s forwards,styles__fadeOut___202mX-camelCase .15s linear 11.5s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 9s forwards,styles__fadeOut___202mX-camelCase .15s linear 11.5s forwards}.styles__n6___dz2uu-camelCase{-webkit-animation:styles__fadeIn___3Ac_P-camelCase .15s linear 11.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 14s forwards;animation:styles__fadeIn___3Ac_P-camelCase .15s linear 11.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 14s forwards}@-webkit-keyframes styles__fadeIn___3Ac_P-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeIn___3Ac_P-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@-webkit-keyframes styles__fadeOut___202mX-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}@keyframes styles__fadeOut___202mX-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}", ""]), a.locals = {
                container: "styles__container___3L0cd-camelCase",
                text: "styles__text___3IxTy-camelCase",
                n1: "styles__n1___UQ6tb-camelCase",
                fadeIn: "styles__fadeIn___3Ac_P-camelCase",
                fadeOut: "styles__fadeOut___202mX-camelCase",
                n2: "styles__n2___2i0YB-camelCase",
                n3: "styles__n3___Murts-camelCase",
                n4: "styles__n4___13Ojp-camelCase",
                n5: "styles__n5___e627H-camelCase",
                n6: "styles__n6___dz2uu-camelCase"
            }
        },
        W0Af: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("McVc"),
                l = t.n(r),
                o = t("74sb"),
                _ = [
                    ["What do you call a fake noodle?", "An Im-pasta!"],
                    ["Why can't your nose be 12 inches long?", "Because then it would be a foot!"],
                    ["What kind of cheese isn't yours?", "Nacho cheese!"],
                    ["What do you call a mountain full of cats?", "A meowtain!"],
                    ["How many tickles does it take to make an octopus laugh?", "Ten-tickles!"],
                    ["What kind of room can't you enter?", "A mushroom!"],
                    ["What do you call an alligator in a vest?", "An investigator!"],
                    ["Why did the fish get bad grades?", "Because it was below sea level!"],
                    ["How do you put an alien baby to sleep?", "You rocket!"],
                    ["How do you organize a space party?", "You planet!"],
                    ["Where did the cow take his date?", "The MOOvies!"],
                    ["Why don't seagulls live by the bay?", "Because then they'd be bagels!"],
                    ["What do you call a group of unorganized cats?", "A cat-astrophe!"],
                    ["Have you heard the joke about pizza?", "Never mind, it's too cheesy!"],
                    ["What did the evil chicken lay?", "Deviled eggs!"],
                    ["Why wouldn't the shrimp share his treasure?", "He was a little shellfish!"],
                    ["How do you make a tissue dance?", "You put a little boogie in it!"],
                    ["When does a duck wake up?", "At the quack of dawn!"],
                    ["Why did the chicken cross the road?", "To get to the other side!"],
                    ["Why did the cow cross the road?", "To get to the udder side!"],
                    ["What do you call a cow with no legs?", "Ground Beef!"]
                ];

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function m(e, a) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function f(e) {
                var a = function() {
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
                    var t, s = y(e);
                    if (a) {
                        var n = y(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return d(this, t)
                }
            }

            function d(e, a) {
                if (a && ("object" === i(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var p = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && m(e, a)
                }(i, e);
                var a, t, s, r = f(i);

                function i(e) {
                    var a;
                    ! function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (a = r.call(this, e)).state = {
                        topProgress: "",
                        bottomProgress: ""
                    };
                    var t = Object(o.p)(_);
                    return a.topText = t[0], a.bottomText = t[1], a
                }
                return a = i, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            a = 0;
                        this.interval = setInterval((function() {
                            a += 1, e.setState({
                                topProgress: e.topText.substring(0, a)
                            }), a === e.topText.length && (clearInterval(e.interval), e.timeout = setTimeout((function() {
                                a = 0, e.interval = setInterval((function() {
                                    a += 1, e.setState({
                                        bottomProgress: e.bottomText.substring(0, a)
                                    }), a === e.bottomText.length && clearInterval(e.interval)
                                }), 1e3 / e.bottomText.length)
                            }), 2e3))
                        }), 2e3 / this.topText.length)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval), clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return n.a.createElement("div", {
                            className: l.a.container
                        }, this.state.topProgress ? n.a.createElement("div", {
                            className: l.a.text
                        }, this.state.topProgress) : null, this.state.bottomProgress ? n.a.createElement("div", {
                            className: l.a.text,
                            style: {
                                marginTop: 70
                            }
                        }, this.state.bottomProgress) : null)
                    }
                }]) && c(a.prototype, t), s && c(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), i
            }(n.a.Component);
            p.propTypes = {};
            a.a = p
        },
        W2j7: function(e, a, t) {
            var s = t("NqeJ");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        WTww: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("NTuM"),
                c = t.n(i),
                m = t("0oXL"),
                f = function(e) {
                    var a = e.fish;
                    return n.a.createElement("div", {
                        className: c.a.wrapper
                    }, "Crab" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Crab",
                        className: _()(c.a.crab, c.a.crab1),
                        blookClassName: c.a.crabDance1
                    }), n.a.createElement(m.a, {
                        name: "Crab",
                        className: _()(c.a.crab, c.a.crab2),
                        blookClassName: c.a.crabDance2
                    }), n.a.createElement(m.a, {
                        name: "Crab",
                        className: _()(c.a.crab, c.a.crab3),
                        blookClassName: c.a.crabDance3
                    }), n.a.createElement(m.a, {
                        name: "Crab",
                        className: _()(c.a.crab, c.a.crab4),
                        blookClassName: c.a.crabDance4
                    })) : "Jellyfish" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: _()(c.a.jellyfish, c.a.jellyfish1),
                        blookClassName: c.a.crabDance1
                    }), n.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: _()(c.a.jellyfish, c.a.jellyfish2),
                        blookClassName: c.a.crabDance2
                    }), n.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: _()(c.a.jellyfish, c.a.jellyfish3),
                        blookClassName: c.a.crabDance3
                    }), n.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: _()(c.a.jellyfish, c.a.jellyfish4),
                        blookClassName: c.a.crabDance4
                    })) : "Frog" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Frog",
                        className: _()(c.a.frog, c.a.frog1)
                    }), n.a.createElement(m.a, {
                        name: "Frog",
                        className: _()(c.a.frog, c.a.frog2)
                    }), n.a.createElement(m.a, {
                        name: "Frog",
                        className: _()(c.a.frog, c.a.frog3)
                    }), n.a.createElement(m.a, {
                        name: "Frog",
                        className: _()(c.a.frog, c.a.frog4)
                    })) : "Pufferfish" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish1),
                        blookClassName: c.a.crabDance1
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish2),
                        blookClassName: c.a.crabDance2
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish3),
                        blookClassName: c.a.crabDance3
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish4),
                        blookClassName: c.a.crabDance4
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish5),
                        blookClassName: c.a.crabDance1
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish6),
                        blookClassName: c.a.crabDance2
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish7),
                        blookClassName: c.a.crabDance3
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish8),
                        blookClassName: c.a.crabDance4
                    }), n.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: _()(c.a.pufferfish, c.a.pufferfish9),
                        blookClassName: c.a.crabDance1
                    })) : "Octopus" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus1)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus2)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus3)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus4)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus5)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus6)
                    }), n.a.createElement(m.a, {
                        name: "Octopus",
                        className: _()(c.a.octopus, c.a.octopus7)
                    })) : "Narwhal" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal1),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal2),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal3),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal4),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal5),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal6),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal7),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal8),
                        blookClassName: c.a.narwhalDance
                    }), n.a.createElement(m.a, {
                        name: "Narwhal",
                        className: _()(c.a.narwhal, c.a.narwhal9),
                        blookClassName: c.a.narwhalDance
                    })) : "Megalodon" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon1)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon2)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon3)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon4)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon5)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon6)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon7)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon8)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon9)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon10)
                    }), n.a.createElement(m.a, {
                        name: "Megalodon",
                        className: _()(c.a.megalodon, c.a.megalodon11)
                    })) : "Blobfish" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Blobfish",
                        className: c.a.blobfish
                    })) : "Baby Shark" === a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark1)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark2)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark3)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark4)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark5)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark6)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark7)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark8)
                    }), n.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: _()(c.a.babyShark, c.a.babyShark9)
                    })) : null)
                };
            f.propTypes = {
                fish: l.a.string
            }, a.a = f
        },
        WWaO: function(e, a, t) {
            "use strict";
            for (var s = t("q1tI"), n = t.n(s), r = t("dqw3"), l = t.n(r), o = t("74sb"), _ = t("0oXL"), i = ["Chick", "Horse", "Chicken", "Dragon", "Cow", "Lil Bot", "Rabbit", "Parrot", "Puppy"], c = [], m = Object(o.r)(-1, 2), f = 0; f < 30; f++)(m += 1) >= 3 && (m = 0), c.push({
                blook: Object(o.p)(i),
                delay: 200 * f - 5e3,
                duration: Object(o.r)(15e3, 2e4),
                left: 2 + Object(o.q)(0, 32) + 30 * m,
                top: 100 + 5 * f,
                scale: Object(o.q)(.5, 1),
                opacity: Object(o.q)(.2, .6)
            });
            var d = function() {
                return n.a.createElement("div", {
                    className: l.a.container
                }, c.map((function(e, a) {
                    return n.a.createElement("div", {
                        key: a,
                        className: l.a.blookContainer,
                        style: {
                            top: "".concat(e.top, "vh"),
                            left: "".concat(e.left, "vw"),
                            animationDuration: "".concat(e.duration, "ms"),
                            animationDelay: "".concat(e.delay, "ms"),
                            opacity: e.opacity
                        }
                    }, n.a.createElement(_.a, {
                        key: a,
                        name: e.blook,
                        className: l.a.blook,
                        style: {
                            transform: "scale(".concat(e.scale, ")")
                        }
                    }))
                })))
            };
            d.propTypes = {}, a.a = d
        },
        YrOF: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___30JBD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:7px;border-radius:7px;text-align:center}.styles__container___30JBD-camelCase,.styles__containerInside___25hGm-camelCase{background-color:#d52423;box-sizing:border-box}.styles__containerInside___25hGm-camelCase{border:5px solid #ffd329;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media only screen and (max-width:600px){.styles__container___30JBD-camelCase{width:310px}}.styles__text___1mBM2-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px 15px;color:#fff}.styles__blook___2VOum-camelCase{height:34.5px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 9px -5px 0;display:inline-block}.styles__button___1LCQN-camelCase{border-radius:6px;border:3px solid #fff;background-color:transparent;width:100px;height:45px;padding:0 15px;color:#fff;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;margin:20px auto;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1LCQN-camelCase:focus,.styles__button___1LCQN-camelCase:hover{font-weight:700}", ""]), a.locals = {
                container: "styles__container___30JBD-camelCase",
                containerInside: "styles__containerInside___25hGm-camelCase",
                text: "styles__text___1mBM2-camelCase",
                blook: "styles__blook___2VOum-camelCase",
                button: "styles__button___1LCQN-camelCase"
            }
        },
        ZVoO: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("4HzQ"),
                _ = t("55Ip"),
                i = t("TSYQ"),
                c = t.n(i),
                m = t("Zu/c"),
                f = t("Xst1"),
                d = t.n(f),
                y = t("4kUR"),
                p = t.n(y),
                u = t("0oXL"),
                h = t("74sb");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function b(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function C(e, a) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function v(e) {
                var a = function() {
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
                    var t, s = T(e);
                    if (a) {
                        var n = T(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return x(this, t)
                }
            }

            function x(e, a) {
                if (a && ("object" === w(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && C(e, a)
                }(l, e);
                var a, t, s, r = v(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        full: Object(h.l)()
                    }, a.checkResize = a.checkResize.bind(k(a)), a.audio = new Audio(m.a), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", this.checkResize), this.audio.volume = .7, this.props.muted && (this.audio.muted = !0), this.audioTimeout = setTimeout((function() {
                            e.audio.play()
                        }), 3500)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.checkResize), clearTimeout(this.audioTimeout)
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        this.setState({
                            full: Object(h.l)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, a, t, s, r, l, i, m, f, y = this,
                            w = "spooky" === this.props.theme,
                            b = "winter" === this.props.theme,
                            C = "royal" === this.props.theme,
                            v = "cafe" === this.props.theme,
                            x = "hack" === this.props.theme,
                            k = "fish" === this.props.theme,
                            T = "rush" === this.props.theme,
                            E = "brawl" === this.props.theme;
                        return n.a.createElement("div", null, n.a.createElement("div", {
                            className: p.a.header
                        }, n.a.createElement("i", {
                            className: c()(p.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return y.setState({
                                    full: Object(h.C)()
                                })
                            }
                        }), n.a.createElement("div", {
                            className: p.a.headerTextCenter
                        }, "Final Standings"), this.props.historyId ? n.a.createElement(_.b, {
                            className: p.a.headerRight,
                            to: "/history/game/".concat(this.props.historyId)
                        }, "View Report") : null), n.a.createElement("div", {
                            className: d.a.hostRegularBody
                        }, n.a.createElement("a", {
                            href: "https://www.blooket.com/host?id=".concat(this.props.gameId),
                            className: p.a.again
                        }, "Play Again"), this.props.standings[0] ? n.a.createElement("div", {
                            className: c()(p.a.containerOne, (e = {}, g(e, p.a.spookyContainer, w), g(e, p.a.winterContainer1, b), g(e, p.a.royalContainer, C), g(e, p.a.cafeContainer, v), g(e, p.a.hackContainer, x), g(e, p.a.fishContainer, k), g(e, p.a.rushContainer, T), g(e, p.a.brawlContainer, E), e))
                        }, n.a.createElement("div", {
                            className: c()(p.a.containerInside, (a = {}, g(a, p.a.winterInside1, b), g(a, p.a.royalInside, C), g(a, p.a.fishInside, k), g(a, p.a.rushInside, T), a))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.nameTextOne,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.standings[0].name), n.a.createElement(o.Textfit, {
                            className: p.a.scoreTextOne,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.stats[0]), n.a.createElement("div", {
                            className: c()(p.a.placeOne, (t = {}, g(t, p.a.spookyContainer, w), g(t, p.a.hackContainer, x), t))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("5.5vw")
                        }, "1"), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("2.5vw")
                        }, "st")), n.a.createElement(u.a, {
                            name: this.props.standings[0].blook,
                            className: p.a.firstBlook
                        }))) : null, this.props.standings[1] ? n.a.createElement("div", {
                            className: c()(p.a.containerTwo, (s = {}, g(s, p.a.spookyContainer, w), g(s, p.a.winterContainer2, b), g(s, p.a.royalContainer, C), g(s, p.a.cafeContainer, v), g(s, p.a.hackContainer, x), g(s, p.a.fishContainer, k), g(s, p.a.rushContainer, T), g(s, p.a.brawlContainer, E), s))
                        }, n.a.createElement("div", {
                            className: c()(p.a.containerInside, (r = {}, g(r, p.a.winterInside2, b), g(r, p.a.royalInside, C), g(r, p.a.fishInside, k), g(r, p.a.rushInside, T), r))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.nameTextTwo,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.standings[1].name), n.a.createElement(o.Textfit, {
                            className: p.a.scoreTextTwo,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.stats[1]), n.a.createElement("div", {
                            className: c()(p.a.placeTwo, (l = {}, g(l, p.a.spookyContainer, w), g(l, p.a.hackContainer, x), l))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("5.5vw")
                        }, this.props.standings[1].place), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("2.5vw")
                        }, Object(h.h)(this.props.standings[1].place))), n.a.createElement(u.a, {
                            name: this.props.standings[1].blook,
                            className: p.a.secondBlook
                        }))) : null, this.props.standings[2] ? n.a.createElement("div", {
                            className: c()(p.a.containerThree, (i = {}, g(i, p.a.spookyContainer, w), g(i, p.a.winterContainer2, b), g(i, p.a.royalContainer, C), g(i, p.a.cafeContainer, v), g(i, p.a.hackContainer, x), g(i, p.a.fishContainer, k), g(i, p.a.rushContainer, T), g(i, p.a.brawlContainer, E), i))
                        }, n.a.createElement("div", {
                            className: c()(p.a.containerInside, (m = {}, g(m, p.a.winterInside2, b), g(m, p.a.royalInside, C), g(m, p.a.fishInside, k), g(m, p.a.rushInside, T), m))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.nameTextThree,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.standings[2].name), n.a.createElement(o.Textfit, {
                            className: p.a.scoreTextThree,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("10vw")
                        }, this.props.stats[2]), n.a.createElement("div", {
                            className: c()(p.a.placeThree, (f = {}, g(f, p.a.spookyContainer, w), g(f, p.a.hackContainer, x), f))
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("5.5vw")
                        }, this.props.standings[2].place), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.D)("2.5vw")
                        }, Object(h.h)(this.props.standings[2].place))), n.a.createElement(u.a, {
                            name: this.props.standings[2].blook,
                            className: p.a.thirdBlook
                        }))) : null, this.props.standings[3] || this.props.team ? n.a.createElement("div", {
                            className: p.a.standingsArray
                        }, this.props.standings.slice(this.props.team ? 0 : 3, this.props.standings.length).map((function(e) {
                            var a;
                            return n.a.createElement("div", {
                                key: e.name,
                                className: p.a.standingHolder
                            }, n.a.createElement("div", {
                                className: c()(p.a.standingContainer, (a = {}, g(a, p.a.spookyContainer, w), g(a, p.a.hackContainer, x), g(a, p.a.fishContainer, k), g(a, p.a.rushContainer, T), g(a, p.a.brawlContainer, E), a))
                            }, n.a.createElement("div", {
                                className: p.a.standingPlaceText
                            }, e.place), n.a.createElement("div", {
                                className: p.a.standingSuperPlaceText
                            }, Object(h.h)(e.place)), n.a.createElement(u.a, {
                                name: e.blook,
                                className: p.a.standingBlook
                            }), n.a.createElement("div", {
                                className: p.a.standingNameText
                            }, e.name), n.a.createElement("div", {
                                className: p.a.standingStatText
                            }, y.props.stats[y.props.standings.indexOf(e)])), e.players ? n.a.createElement("div", {
                                className: p.a.standingPlayerContainer
                            }, n.a.createElement("div", {
                                className: p.a.playerText
                            }, Object(h.i)(e.players))) : null)
                        }))) : null, x ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                            className: p.a.noise
                        }), n.a.createElement("div", {
                            className: p.a.overlay
                        })) : null))
                    }
                }]) && b(a.prototype, t), s && b(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            E.propTypes = {
                standings: l.a.array,
                stats: l.a.array,
                historyId: l.a.string,
                gameId: l.a.string,
                team: l.a.bool,
                muted: l.a.bool,
                theme: l.a.string
            }, a.a = E
        },
        dqw3: function(e, a, t) {
            var s = t("srL4");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        fAPQ: function(e, a, t) {
            var s = t("nDuC");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        gn96: function(e, a, t) {
            var s = t("AFGJ");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "h/RO": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("KpTr"),
                l = t.n(r),
                o = function() {
                    return n.a.createElement("div", null, n.a.createElement("div", {
                        className: l.a.glitch1
                    }, "#LOL"), n.a.createElement("div", {
                        className: l.a.glitch2
                    }, "#TacoTuesday"), n.a.createElement("div", {
                        className: l.a.glitch3
                    }, "#SELFIE"), n.a.createElement("div", {
                        className: l.a.glitch4
                    }, "#StudiousSeason"), n.a.createElement("div", {
                        className: l.a.glitch5
                    }, "#NobodyCares"), n.a.createElement("div", {
                        className: l.a.glitch6
                    }, "#HashtagsAreFakeWaffles"), n.a.createElement("div", {
                        className: l.a.glitch7
                    }, "#NotTheNumberSymbol"), n.a.createElement("div", {
                        className: l.a.glitch8
                    }, "#TGIF...Maybe"), n.a.createElement("div", {
                        className: l.a.glitch9
                    }, "#STOPPPPPPPP"), n.a.createElement("div", {
                        className: l.a.glitch10
                    }, "#WhoDidThis?"))
                };
            o.propTypes = {}, a.a = o
        },
        hpu6: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("wto1"),
                c = t.n(i),
                m = t("LHn/"),
                f = t("74sb"),
                d = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return n.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            backgroundImage: "url(".concat(m.a.basic.castleTile, ")"),
                            backgroundSize: 74.5
                        }
                    }, n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n1)
                    }, "Answer Questions"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n2)
                    }, "Select Chests"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n3)
                    }, "Collect Gold"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n4)
                    }, "Take Gold From Others"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n5)
                    }, "Time" === a ? "Most gold after ".concat(Object(f.o)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(f.o)(t), " Gold wins!")), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n6)
                    }, "Good Luck!"))
                };
            d.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = d
        },
        jaO2: function(e, a, t) {
            var s = t("YrOF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        nDuC: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__background___mq13L-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#333;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__text___y0CeE-camelCase{color:#fff;font-size:6vw;font-family:Titan One,sans-serif;text-align:center;margin-top:75px}.styles__blook___HviQ7-camelCase{height:129.375px;width:112.5px;transform:rotate(-45deg);transition:all .3s ease-in-out;-webkit-animation-name:styles__blook___HviQ7-camelCase;animation-name:styles__blook___HviQ7-camelCase;bottom:0}.styles__blook___HviQ7-camelCase,.styles__shadow___gcYJJ-camelCase{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-play-state:running;animation-play-state:running;position:absolute;left:0;top:133.875px;z-index:1}.styles__dancing___2yjv6-camelCase{width:112.5px;height:133.875px;margin:150px auto;position:relative}.styles__shadow___gcYJJ-camelCase{-webkit-animation-name:styles__shadow___gcYJJ-camelCase;animation-name:styles__shadow___gcYJJ-camelCase;width:97.5px;height:10px;left:7.5px;position:absolute;bottom:0;display:inline-block;background:rgba(0,0,0,.2);border-radius:100px;z-index:0}@-webkit-keyframes styles__blook___HviQ7-camelCase{0%{top:0;transform:rotate(-15deg)}10%{top:-37.5px;transform:rotate(0deg)}50%{top:0;transform:rotate(15deg)}60%{top:-37.5px;transform:rotate(0deg)}to{top:0;transform:rotate(-15deg)}}@keyframes styles__blook___HviQ7-camelCase{0%{top:0;transform:rotate(-15deg)}10%{top:-37.5px;transform:rotate(0deg)}50%{top:0;transform:rotate(15deg)}60%{top:-37.5px;transform:rotate(0deg)}to{top:0;transform:rotate(-15deg)}}@-webkit-keyframes styles__shadow___gcYJJ-camelCase{0%{transform:scale(1)}10%{transform:scaleX(1.3)}50%{transform:scale(1)}60%{transform:scaleX(1.3)}to{transform:scale(1)}}@keyframes styles__shadow___gcYJJ-camelCase{0%{transform:scale(1)}10%{transform:scaleX(1.3)}50%{transform:scale(1)}60%{transform:scaleX(1.3)}to{transform:scale(1)}}@media only screen and (max-width:600px){.styles__text___y0CeE-camelCase{font-size:5vh}}", ""]), a.locals = {
                background: "styles__background___mq13L-camelCase",
                text: "styles__text___y0CeE-camelCase",
                blook: "styles__blook___HviQ7-camelCase",
                shadow: "styles__shadow___gcYJJ-camelCase",
                dancing: "styles__dancing___2yjv6-camelCase"
            }
        },
        nTIR: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("gn96"),
                c = t.n(i),
                m = t("74sb"),
                f = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return n.a.createElement("div", {
                        className: c.a.container
                    }, n.a.createElement("div", {
                        className: c.a.wave1,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n1)
                    }, "Click to Cast Your Line"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n2)
                    }, "Click to Reel Once You Hook a Fish"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n3)
                    }, "Answer Questions to Reel In The Fish"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n4)
                    }, "Watch Out For Catching Some Crazy Things!"), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n5)
                    }, "Time" === a ? "Most total fish weight after ".concat(Object(m.o)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(m.o)(t), " lbs of fish wins!")), n.a.createElement("div", {
                        className: _()(c.a.text, c.a.n6)
                    }, "Good Luck!"), n.a.createElement("div", {
                        className: c.a.wave2,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), n.a.createElement("div", {
                        className: c.a.wave3,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), n.a.createElement("div", {
                        className: c.a.wave4,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }))
                };
            f.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = f
        },
        oxBM: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__holder___2EUfm-camelCase{padding-left:220px;width:calc(100% - 220px)}.styles__header___20SmS-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;margin:25px 0 20px 5%;color:#3a3a3a;display:block}.styles__container___3GxEP-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5%}.styles__class___EfGi0-camelCase{width:265px;min-height:200px;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:space-between;font-family:Nunito,sans-serif;color:#fff;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;transition:.2s}.styles__class___EfGi0-camelCase:hover{transform:scale(.95)}.styles__name___1ZDfm-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 30px;word-wrap:break-word}.styles__studentsText___1NcIB-camelCase{font-size:20px;margin:10px 5%;text-align:right}.styles__addButton___2dxlJ-camelCase{width:200px;padding:10px;height:30px;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;color:#3a3a3a;background-color:#fff;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__addButton___2dxlJ-camelCase:hover{transform:scale(.95)}.styles__addIcon___2PRWU-camelCase{font-size:22px;padding:0 5px;margin-right:3px}.styles__addText___HiCFF-camelCase{font-size:24px;font-weight:700}.styles__bigContainer___2AF6h-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:95%;margin:50px auto}.styles__bigText___3PaC1-camelCase{font-size:40px;line-height:44px;margin:50px 5% 30px;width:90%;color:#3a3a3a}.styles__bigText___3PaC1-camelCase,.styles__upgradeButton___3vKKG-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:center}.styles__upgradeButton___3vKKG-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__upgradeButton___3vKKG-camelCase:hover{transform:scale(.95)}", ""]), a.locals = {
                holder: "styles__holder___2EUfm-camelCase",
                header: "styles__header___20SmS-camelCase",
                container: "styles__container___3GxEP-camelCase",
                class: "styles__class___EfGi0-camelCase",
                name: "styles__name___1ZDfm-camelCase",
                studentsText: "styles__studentsText___1NcIB-camelCase",
                addButton: "styles__addButton___2dxlJ-camelCase",
                addIcon: "styles__addIcon___2PRWU-camelCase",
                addText: "styles__addText___HiCFF-camelCase",
                bigContainer: "styles__bigContainer___2AF6h-camelCase",
                bigText: "styles__bigText___3PaC1-camelCase",
                upgradeButton: "styles__upgradeButton___3vKKG-camelCase"
            }
        },
        p4Pv: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("4HzQ"),
                _ = t("55Ip"),
                i = t("TSYQ"),
                c = t.n(i),
                m = t("Zu/c"),
                f = t("Xst1"),
                d = t.n(f),
                y = t("NoTM"),
                p = t.n(y),
                u = t("2Euj"),
                h = t("0oXL"),
                w = t("74sb");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function C(e, a) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function v(e) {
                var a = function() {
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
                    var t, s = T(e);
                    if (a) {
                        var n = T(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return x(this, t)
                }
            }

            function x(e, a) {
                if (a && ("object" === g(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && C(e, a)
                }(l, e);
                var a, t, s, r = v(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        full: Object(w.l)()
                    }, a.checkResize = a.checkResize.bind(k(a)), a.audio = new Audio(m.a), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", this.checkResize), this.audio.volume = .7, this.props.muted && (this.audio.muted = !0), this.audioTimeout = setTimeout((function() {
                            e.audio.play()
                        }), 3500)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.checkResize), clearTimeout(this.audioTimeout)
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        this.setState({
                            full: Object(w.l)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return n.a.createElement("div", {
                            style: {
                                fontFamily: '"Macondo", sans-serif'
                            }
                        }, n.a.createElement("div", {
                            className: p.a.header
                        }, n.a.createElement("i", {
                            className: c()(p.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    full: Object(w.C)()
                                })
                            }
                        }), n.a.createElement("div", {
                            className: p.a.headerTextCenter
                        }, "Final Standings"), this.props.historyId ? n.a.createElement(_.b, {
                            className: p.a.headerRight,
                            to: "/history/game/".concat(this.props.historyId)
                        }, "View Report") : null), n.a.createElement("div", {
                            className: d.a.hostRegularBody
                        }, n.a.createElement("a", {
                            href: "https://www.blooket.com/host?id=".concat(this.props.gameId),
                            className: p.a.again
                        }, "Play Again"), this.props.standings[0] ? n.a.createElement("div", {
                            className: p.a.containerOne
                        }, n.a.createElement(u.a, {
                            className: p.a.dino,
                            content: n.a.createElement(n.a.Fragment, null, n.a.createElement(o.Textfit, {
                                className: p.a.nameTextOne,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.standings[0].name), n.a.createElement(o.Textfit, {
                                className: p.a.scoreTextOne,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.stats[0]), n.a.createElement(h.a, {
                                name: this.props.standings[0].blook,
                                className: p.a.firstBlook
                            }))
                        }), n.a.createElement("div", {
                            className: p.a.placeOne
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("5.5vw")
                        }, "1"), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("2.5vw")
                        }, "st"))) : null, this.props.standings[1] ? n.a.createElement("div", {
                            className: p.a.containerTwo
                        }, n.a.createElement(u.a, {
                            className: p.a.dino,
                            content: n.a.createElement(n.a.Fragment, null, n.a.createElement(o.Textfit, {
                                className: p.a.nameTextTwo,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.standings[1].name), n.a.createElement(o.Textfit, {
                                className: p.a.scoreTextTwo,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.stats[1]), n.a.createElement(h.a, {
                                name: this.props.standings[1].blook,
                                className: p.a.secondBlook
                            }))
                        }), n.a.createElement("div", {
                            className: p.a.placeTwo
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("5.5vw")
                        }, this.props.standings[1].place), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("2.5vw")
                        }, Object(w.h)(this.props.standings[1].place)))) : null, this.props.standings[2] ? n.a.createElement("div", {
                            className: p.a.containerThree
                        }, n.a.createElement(u.a, {
                            className: p.a.dino,
                            content: n.a.createElement(n.a.Fragment, null, n.a.createElement(o.Textfit, {
                                className: p.a.nameTextThree,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.standings[2].name), n.a.createElement(o.Textfit, {
                                className: p.a.scoreTextThree,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(w.D)("10vw")
                            }, this.props.stats[2]), n.a.createElement(h.a, {
                                name: this.props.standings[2].blook,
                                className: p.a.thirdBlook
                            }))
                        }), n.a.createElement("div", {
                            className: p.a.placeThree
                        }, n.a.createElement(o.Textfit, {
                            className: p.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("5.5vw")
                        }, this.props.standings[2].place), n.a.createElement(o.Textfit, {
                            className: p.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(w.D)("2.5vw")
                        }, Object(w.h)(this.props.standings[2].place)))) : null, this.props.standings[3] ? n.a.createElement("div", {
                            className: p.a.standingsArray
                        }, this.props.standings.slice(3, this.props.standings.length).map((function(a) {
                            return n.a.createElement(u.a, {
                                key: a.name,
                                className: p.a.standingHolder,
                                content: n.a.createElement("div", {
                                    className: p.a.standingContainer
                                }, n.a.createElement("div", {
                                    className: p.a.standingPlaceText
                                }, a.place), n.a.createElement("div", {
                                    className: p.a.standingSuperPlaceText
                                }, Object(w.h)(a.place)), n.a.createElement(h.a, {
                                    name: a.blook,
                                    className: p.a.standingBlook
                                }), n.a.createElement("div", {
                                    className: p.a.standingNameText
                                }, a.name), n.a.createElement("div", {
                                    className: p.a.standingStatText
                                }, e.props.stats[e.props.standings.indexOf(a)]))
                            })
                        }))) : null))
                    }
                }]) && b(a.prototype, t), s && b(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            E.propTypes = {
                standings: l.a.array,
                stats: l.a.array,
                historyId: l.a.string,
                gameId: l.a.string,
                muted: l.a.bool
            }, a.a = E
        },
        pQbs: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("QjaI"),
                _ = t.n(o),
                i = function(e) {
                    var a = e.title,
                        t = e.stat,
                        s = e.titleTwo,
                        r = e.statTwo,
                        l = e.message;
                    return l ? n.a.createElement("div", {
                        className: _.a.extraMsg
                    }, n.a.createElement("div", {
                        className: _.a.extraText
                    }, l)) : s ? n.a.createElement("div", {
                        className: _.a.extraShortStats
                    }, n.a.createElement("div", {
                        className: _.a.extraStatShort
                    }, n.a.createElement("div", {
                        className: _.a.extraLeftText
                    }, a), n.a.createElement("div", {
                        className: _.a.extraRightText
                    }, t)), n.a.createElement("div", {
                        className: _.a.extraStatShort
                    }, n.a.createElement("div", {
                        className: _.a.extraLeftText
                    }, s), n.a.createElement("div", {
                        className: _.a.extraRightText
                    }, r))) : n.a.createElement("div", {
                        className: _.a.extraStatLong
                    }, n.a.createElement("div", {
                        className: _.a.extraLeftText
                    }, a), n.a.createElement("div", {
                        className: _.a.extraRightText
                    }, t))
                };
            i.propTypes = {
                title: l.a.string,
                stat: l.a.any,
                titleTwo: l.a.string,
                statTwo: l.a.any,
                message: l.a.string
            }, a.a = i
        },
        srL4: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___Ym2ej-camelCase{position:absolute;width:100%;height:100%;overflow:hidden}.styles__blookContainer___11r7f-camelCase{position:absolute;width:14vw;-webkit-animation-name:styles__rollUp___1ZydU-camelCase;animation-name:styles__rollUp___1ZydU-camelCase;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes styles__rollUp___1ZydU-camelCase{0%{transform:translate(-50%,-50%) rotate(0deg)}10%{transform:translate(-50%,calc(-50% - 30vh)) rotate(100deg)}20%{transform:translate(-50%,calc(-50% - 60vh)) rotate(200deg)}30%{transform:translate(-50%,calc(-50% - 90vh)) rotate(300deg)}40%{transform:translate(-50%,calc(-50% - 120vh)) rotate(400deg)}50%{transform:translate(-50%,calc(-50% - 150vh)) rotate(500deg)}60%{transform:translate(-50%,calc(-50% - 180vh)) rotate(600deg)}70%{transform:translate(-50%,calc(-50% - 210vh)) rotate(700deg)}80%{transform:translate(-50%,calc(-50% - 240vh)) rotate(800deg)}90%{transform:translate(-50%,calc(-50% - 270vh)) rotate(900deg)}to{transform:translate(-50%,calc(-50% - 300vh)) rotate(1000deg)}}@keyframes styles__rollUp___1ZydU-camelCase{0%{transform:translate(-50%,-50%) rotate(0deg)}10%{transform:translate(-50%,calc(-50% - 30vh)) rotate(100deg)}20%{transform:translate(-50%,calc(-50% - 60vh)) rotate(200deg)}30%{transform:translate(-50%,calc(-50% - 90vh)) rotate(300deg)}40%{transform:translate(-50%,calc(-50% - 120vh)) rotate(400deg)}50%{transform:translate(-50%,calc(-50% - 150vh)) rotate(500deg)}60%{transform:translate(-50%,calc(-50% - 180vh)) rotate(600deg)}70%{transform:translate(-50%,calc(-50% - 210vh)) rotate(700deg)}80%{transform:translate(-50%,calc(-50% - 240vh)) rotate(800deg)}90%{transform:translate(-50%,calc(-50% - 270vh)) rotate(900deg)}to{transform:translate(-50%,calc(-50% - 300vh)) rotate(1000deg)}}.styles__blook___2dMnT-camelCase{width:100%;filter:brightness(0) saturate(100%) invert(89%) sepia(51%) saturate(0) hue-rotate(46deg) brightness(112%) contrast(104%)}", ""]), a.locals = {
                container: "styles__container___Ym2ej-camelCase",
                blookContainer: "styles__blookContainer___11r7f-camelCase",
                rollUp: "styles__rollUp___1ZydU-camelCase",
                blook: "styles__blook___2dMnT-camelCase"
            }
        },
        tIMv: function(e, a, t) {
            var s = t("QlN9");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "v9+r": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1Q9ss-camelCase{position:absolute;background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:35vw;min-width:250px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;color:#3a3a3a;display:flex;flex-direction:row;align-items:center;transform:translate(-50%,-50%)}.styles__close___2jdDE-camelCase{font-size:14px;position:absolute;top:10px;right:10px}.styles__blook___3kMhk-camelCase{width:40%;margin:3vh 5%}.styles__msg___2cUVm-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;text-align:center;width:40%;margin:4vh 5% 4vh 0}@media only screen and (max-width:600px){.styles__msg___2cUVm-camelCase{font-size:3vh}.styles__container___1Q9ss-camelCase{width:25vw}}", ""]), a.locals = {
                container: "styles__container___1Q9ss-camelCase",
                close: "styles__close___2jdDE-camelCase",
                blook: "styles__blook___3kMhk-camelCase",
                msg: "styles__msg___2cUVm-camelCase"
            }
        },
        wYzb: function(e, a, t) {
            a = e.exports = t("JPst")(!1);
            var s = t("tgXZ")(t("IfDm"));
            a.push([e.i, ".styles__wrapper___1GQZ--camelCase{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-align:center;font-size:22px;color:#f4e1a4}.styles__button___2VTXx-camelCase{outline:none;cursor:pointer;transition:.2s}.styles__button___2VTXx-camelCase:hover{transform:scale(.95)}.styles__inside___1lFcD-camelCase{border:4px solid #af8942;padding:4px;box-sizing:border-box;width:100%;height:100%}.styles__corner1___2LAe6-camelCase,.styles__corner2___2T4sf-camelCase,.styles__corner3___ftZwC-camelCase,.styles__corner4___2Cc1e-camelCase,.styles__corner5___3QV10-camelCase,.styles__corner6___1or_5-camelCase,.styles__corner7___Vamu8-camelCase,.styles__corner8___2rMjB-camelCase{border:4px solid #af8942;background-color:#ead49a;background-image:radial-gradient(rgba(220,184,86,0),rgba(220,184,86,.2)),url(" + s + ");width:24px;height:24px;border-radius:50%;box-sizing:border-box;position:absolute;top:-12px;left:-12px}.styles__corner2___2T4sf-camelCase,.styles__corner3___ftZwC-camelCase{left:calc(100% - 12px)}.styles__corner3___ftZwC-camelCase,.styles__corner4___2Cc1e-camelCase{top:calc(100% - 12px)}.styles__corner5___3QV10-camelCase{top:-14px;left:-14px}.styles__corner6___1or_5-camelCase{top:-14px}.styles__corner6___1or_5-camelCase,.styles__corner7___Vamu8-camelCase{left:calc(100% - 10px)}.styles__corner7___Vamu8-camelCase,.styles__corner8___2rMjB-camelCase{top:calc(100% - 10px)}.styles__corner8___2rMjB-camelCase{left:-14px}.styles__center___RkEYP-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;overflow:hidden;width:100%;height:100%;background-color:#af8942}", ""]), a.locals = {
                wrapper: "styles__wrapper___1GQZ--camelCase",
                button: "styles__button___2VTXx-camelCase",
                inside: "styles__inside___1lFcD-camelCase",
                corner1: "styles__corner1___2LAe6-camelCase",
                corner2: "styles__corner2___2T4sf-camelCase",
                corner3: "styles__corner3___ftZwC-camelCase",
                corner4: "styles__corner4___2Cc1e-camelCase",
                corner5: "styles__corner5___3QV10-camelCase",
                corner6: "styles__corner6___1or_5-camelCase",
                corner7: "styles__corner7___Vamu8-camelCase",
                corner8: "styles__corner8___2rMjB-camelCase",
                center: "styles__center___RkEYP-camelCase"
            }
        },
        wto1: function(e, a, t) {
            var s = t("TuVA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        y9k9: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                n = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                o = t("TSYQ"),
                _ = t.n(o),
                i = t("wd/R"),
                c = t.n(i),
                m = t("zXVE"),
                f = t.n(m),
                d = t("Xst1"),
                y = t.n(d),
                p = t("55Ip"),
                u = t("W2j7"),
                h = t.n(u),
                w = function(e) {
                    var a = e.image,
                        t = e.imageAlt,
                        s = e.header,
                        r = e.tag,
                        l = e.text,
                        o = e.link,
                        _ = e.date;
                    return n.a.createElement("div", {
                        className: h.a.cardContainer
                    }, n.a.createElement("div", {
                        className: h.a.tagText
                    }, r), n.a.createElement("div", {
                        className: h.a.header
                    }, s), a ? n.a.createElement("img", {
                        src: a,
                        alt: t,
                        className: h.a.image,
                        draggable: !1
                    }) : null, n.a.createElement("div", {
                        className: h.a.text
                    }, l.split("***").map((function(e, a) {
                        return n.a.createElement("div", {
                            key: a
                        }, e, n.a.createElement("br", null))
                    }))), o ? n.a.createElement(p.b, {
                        className: h.a.link,
                        to: o
                    }, "Learn more...") : null, n.a.createElement("div", {
                        className: h.a.dateRow
                    }, n.a.createElement("i", {
                        className: "far fa-calendar-alt",
                        style: {
                            marginRight: 7
                        }
                    }), c()(_).fromNow()))
                };
            w.propTypes = {
                image: l.a.string,
                imageAlt: l.a.string,
                header: l.a.string,
                tag: l.a.string,
                text: l.a.string,
                link: l.a.string,
                date: l.a.string
            };
            var g = w,
                b = t("qnYv");

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, a) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return x(e, a)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }

            function k(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function T(e, a) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function E(e) {
                var a = function() {
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
                    var t, s = j(e);
                    if (a) {
                        var n = j(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return N(this, t)
                }
            }

            function N(e, a) {
                if (a && ("object" === C(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var O = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && T(e, a)
                }(l, e);
                var a, t, s, r = E(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        posts: []
                    }, a.here = !0, a.loaded = !1, a
                }
                return a = l, (t = [{
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this;
                        !this.loaded && this.props.isShown && (this.loaded = !0, b.a.get("/api/news").then((function(a) {
                            var t = v(a.data).filter((function(e) {
                                return e.date
                            }));
                            t.sort((function(e, a) {
                                return c()(a.date).diff(e.date)
                            })), e.here && e.setState({
                                posts: t
                            })
                        })).catch((function(e) {
                            console.error(e)
                        })))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return n.a.createElement(n.a.Fragment, null, this.props.isShown ? n.a.createElement("div", {
                            className: y.a.modal,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose,
                            style: {
                                outline: "none",
                                opacity: .8
                            }
                        }) : null, n.a.createElement("div", {
                            className: f.a.container,
                            style: {
                                transform: "translateX(".concat(this.props.isShown ? "-100%" : "0", ")"),
                                opacity: this.props.isShown ? 1 : 0
                            }
                        }, n.a.createElement("div", {
                            className: f.a.header
                        }, n.a.createElement("i", {
                            className: _()("far fa-newspaper", f.a.newsIcon)
                        }), n.a.createElement("div", {
                            className: f.a.headerText
                        }, "Blooket"), n.a.createElement("div", {
                            className: f.a.newsText
                        }, "News"), n.a.createElement("i", {
                            className: _()("fas fa-times", f.a.closeIcon),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClose
                        })), n.a.createElement("div", {
                            className: f.a.postsContainer
                        }, this.state.posts.map((function(e) {
                            return n.a.createElement(g, {
                                key: e.header,
                                tag: e.tag,
                                header: e.header,
                                image: e.image,
                                imageAlt: e.iamgeAlt,
                                text: e.text,
                                link: e.link,
                                date: e.date
                            })
                        })))))
                    }
                }]) && k(a.prototype, t), s && k(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            O.propTypes = {
                isShown: l.a.bool,
                onClose: l.a.func
            };
            a.a = O
        },
        zXVE: function(e, a, t) {
            var s = t("JkFz");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        }
    }
]);