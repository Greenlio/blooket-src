! function(o) {
    function a(a) {
        for (var t, l, n = a[0], i = a[1], m = a[2], u = 0, p = []; u < n.length; u++) l = n[u], Object.prototype.hasOwnProperty.call(s, l) && s[l] && p.push(s[l][0]), s[l] = 0;
        for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (o[t] = i[t]);
        for (c && c(a); p.length;) p.shift()();
        return r.push.apply(r, m || []), e()
    }

    function e() {
        for (var o, a = 0; a < r.length; a++) {
            for (var e = r[a], t = !0, n = 1; n < e.length; n++) {
                var i = e[n];
                0 !== s[i] && (t = !1)
            }
            t && (r.splice(a--, 1), o = l(l.s = e[0]))
        }
        return o
    }
    var t = {},
        s = {
            9: 0
        },
        r = [];

    function l(a) {
        if (t[a]) return t[a].exports;
        var e = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return o[a].call(e.exports, e, e.exports, l), e.l = !0, e.exports
    }
    l.e = function(o) {
        var a = [],
            e = s[o];
        if (0 !== e)
            if (e) a.push(e[2]);
            else {
                var t = new Promise((function(a, t) {
                    e = s[o] = [a, t]
                }));
                a.push(e[2] = t);
                var r, n = document.createElement("script");
                n.charset = "utf-8", n.timeout = 120, l.nc && n.setAttribute("nonce", l.nc), n.src = function(o) {
                    return l.p + "" + ({
                        29: "polyfills-dom~9aedfade",
                        59: "vendors~polyfills-core-js~34a2b07d"
                    } [o] || o) + "." + {
                        29: "df62f4a760d69ed22cba",
                        59: "d778190cc49cb0b86119",
                        60: "7d5bc800b6891fb7c25e",
                        61: "37cb71e2d23f80acecbe"
                    } [o] + ".js"
                }(o);
                var i = new Error;
                r = function(a) {
                    n.onerror = n.onload = null, clearTimeout(m);
                    var e = s[o];
                    if (0 !== e) {
                        if (e) {
                            var t = a && ("load" === a.type ? "missing" : a.type),
                                r = a && a.target && a.target.src;
                            i.message = "Loading chunk " + o + " failed.\n(" + t + ": " + r + ")", i.name = "ChunkLoadError", i.type = t, i.request = r, e[1](i)
                        }
                        s[o] = void 0
                    }
                };
                var m = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: n
                    })
                }), 12e4);
                n.onerror = n.onload = r, document.head.appendChild(n)
            } return Promise.all(a)
    }, l.m = o, l.c = t, l.d = function(o, a, e) {
        l.o(o, a) || Object.defineProperty(o, a, {
            enumerable: !0,
            get: e
        })
    }, l.r = function(o) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, l.t = function(o, a) {
        if (1 & a && (o = l(o)), 8 & a) return o;
        if (4 & a && "object" == typeof o && o && o.__esModule) return o;
        var e = Object.create(null);
        if (l.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: o
            }), 2 & a && "string" != typeof o)
            for (var t in o) l.d(e, t, function(a) {
                return o[a]
            }.bind(null, t));
        return e
    }, l.n = function(o) {
        var a = o && o.__esModule ? function() {
            return o.default
        } : function() {
            return o
        };
        return l.d(a, "a", a), a
    }, l.o = function(o, a) {
        return Object.prototype.hasOwnProperty.call(o, a)
    }, l.p = "/", l.oe = function(o) {
        throw console.error(o), o
    };
    var n = window.webpackJsonp = window.webpackJsonp || [],
        i = n.push.bind(n);
    n.push = a, n = n.slice();
    for (var m = 0; m < n.length; m++) a(n[m]);
    var c = i;
    r.push([2, 34, 30, 41, 47, 39, 48, 44, 54, 33, 45, 56, 36, 49, 46, 51, 52, 43, 37, 55, 31, 50, 53, 32, 38, 40, 42, 57, 35, 58, 13, 4, 22, 6, 14, 18, 20, 3, 27, 23, 12, 2, 15, 28, 10, 17, 26, 1, 7, 21, 25, 0, 19, 5, 11, 24, 16, 8]), e()
}({
    "+5wV": function(o, a, e) {
        "use strict";
        a.a = {
            Chick: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
            Chicken: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
            Cow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
            Goat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
            Horse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
            Pig: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
            Sheep: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
            Duck: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg"
        }
    },
    "/WU8": function(o, a, e) {
        "use strict";
        a.a = {
            Dog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
            Cat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
            Rabbit: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
            Goldfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
            Hamster: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
            Turtle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
            Kitten: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
            Puppy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg"
        }
    },
    "/iB7": function(o, a, e) {
        "use strict";
        a.a = {
            Pumpkin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
            "Swamp Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
            Frankenstein: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
            Vampire: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
            Zombie: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
            Mummy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
            Werewolf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
            Ghost: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg"
        }
    },
    "1u4q": function(o, a, e) {
        "use strict";
        a.a = function(o) {
            switch (o) {
                case "Elf":
                case "Witch":
                case "Wizard":
                case "Fairy":
                case "Slime Monster":
                    return 5;
                case "Jester":
                case "Dragon":
                    return 20;
                case "Unicorn":
                    return 75;
                case "Queen":
                    return 20;
                case "King":
                    return 200;
                case "Agent Owl":
                    return 300;
                case "Master Elf":
                    return 350;
                case "Phantom King":
                    return 1e3;
                case "Snow Globe":
                case "Holiday Gift":
                case "Hot Chocolate":
                case "Holiday Wreath":
                    return 5;
                case "Gingerbread Man":
                case "Gingerbread House":
                    return 20;
                case "Snowman":
                    return 75;
                case "Santa Claus":
                    return 200;
                case "Frost Wreath":
                case "Tropical Globe":
                    return 300;
                case "Two of Spades":
                case "Eat Me":
                case "Drink Me":
                case "Alice":
                case "Queen of Hearts":
                    return 5;
                case "Dormouse":
                case "White Rabbit":
                case "Cheshire Cat":
                    return 20;
                case "Caterpillar":
                case "Mad Hatter":
                    return 75;
                case "King of Hearts":
                    return 200;
                case "Toast":
                case "Cereal":
                case "Yogurt":
                case "Breakfast Combo":
                case "Orange Juice":
                case "Milk":
                    return 5;
                case "Waffle":
                case "Pancakes":
                    return 20;
                case "French Toast":
                case "Pizza":
                case "Sandwich":
                    return 75;
                case "Pumpkin":
                case "Swamp Monster":
                case "Frankenstein":
                case "Vampire":
                    return 5;
                case "Zombie":
                case "Mummy":
                    return 20;
                case "Werewolf":
                    return 75;
                case "Ghost":
                    return 200;
                case "Haunted Pumpkin":
                case "Spooky Pumpkin":
                    return 300;
                case "Spooky Mummy":
                    return 350;
                case "Spooky Ghost":
                    return 1e3;
                case "Earth":
                case "Meteor":
                case "Stars":
                case "Alien":
                    return 5;
                case "Planet":
                case "UFO":
                    return 20;
                case "Spaceship":
                    return 75;
                case "Astronaut":
                    return 200;
                case "Red Astronaut":
                case "Blue Astronaut":
                case "Green Astronaut":
                case "Pink Astronaut":
                case "Orange Astronaut":
                case "Yellow Astronaut":
                case "Black Astronaut":
                case "Purple Astronaut":
                case "Brown Astronaut":
                case "Cyan Astronaut":
                case "Lime Astronaut":
                    return 300;
                case "Tim the Alien":
                case "Rainbow Astronaut":
                    return 1e3;
                case "Lil Bot":
                case "Lovely Bot":
                case "Angry Bot":
                case "Happy Bot":
                    return 5;
                case "Watson":
                case "Buddy Bot":
                    return 20;
                case "Brainy Bot":
                    return 75;
                case "Mega Bot":
                    return 200;
                case "Old Boot":
                case "Jellyfish":
                case "Clownfish":
                case "Frog":
                case "Crab":
                    return 5;
                case "Pufferfish":
                case "Blobfish":
                case "Octopus":
                    return 20;
                case "Narwhal":
                    return 75;
                case "Baby Shark":
                    return 200;
                case "Megalodon":
                    return 250;
                case "Rainbow Jellyfish":
                case "Blizzard Clownfish":
                case "Lovely Frog":
                case "Lucky Frog":
                case "Spring Frog":
                case "Poison Dart Frog":
                case "Lemon Crab":
                case "Pirate Pufferfish":
                case "Donut Blobfish":
                case "Crimson Octopus":
                case "Rainbow Narwhal":
                    return 300;
                case "Panda":
                case "Sloth":
                case "Tenrec":
                case "Flamingo":
                case "Zebra":
                    return 5;
                case "Elephant":
                case "Lemur":
                case "Peacock":
                    return 20;
                case "Chameleon":
                    return 75;
                case "Lion":
                    return 200;
                case "Rainbow Panda":
                case "White Peacock":
                case "Tiger Zebra":
                    return 300;
                case "Amber":
                case "Dino Egg":
                case "Dino Fossil":
                case "Stegosaurus":
                    return 5;
                case "Velociraptor":
                case "Brontosaurus":
                    return 20;
                case "Triceratops":
                    return 75;
                case "Tyrannosaurus Rex":
                    return 200;
                case "Ice Bat":
                case "Ice Bug":
                case "Ice Elemental":
                case "Rock Monster":
                    return 5;
                case "Dink":
                case "Donk":
                    return 20;
                case "Bush Monster":
                    return 75;
                case "Yeti":
                    return 200;
                case "Ice Slime":
                case "Frozen Fossil":
                case "Ice Crab":
                    return 300;
                default:
                    return 0
            }
        }
    },
    "2m0V": function(o, a, e) {
        "use strict";
        a.a = {
            Earth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
            Meteor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
            Stars: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
            Alien: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
            Planet: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
            UFO: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
            Spaceship: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
            Astronaut: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg"
        }
    },
    "4otK": function(o, a, e) {
        "use strict";
        a.a = ["Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Sandwich", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Werewolf", "Ghost", "Haunted Pumpkin", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Agent Owl", "Master Elf", "Phantom King", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Ice Slime", "Frozen Fossil", "Ice Crab"]
    },
    "74sb": function(o, a, e) {
        "use strict";
        e.d(a, "D", (function() {
            return g
        })), e.d(a, "o", (function() {
            return b
        })), e.d(a, "h", (function() {
            return v
        })), e.d(a, "v", (function() {
            return w
        })), e.d(a, "j", (function() {
            return y
        })), e.d(a, "C", (function() {
            return B
        })), e.d(a, "l", (function() {
            return z
        })), e.d(a, "r", (function() {
            return A
        })), e.d(a, "q", (function() {
            return C
        })), e.d(a, "p", (function() {
            return S
        })), e.d(a, "k", (function() {
            return P
        })), e.d(a, "w", (function() {
            return U
        })), e.d(a, "i", (function() {
            return M
        })), e.d(a, "t", (function() {
            return N
        })), e.d(a, "g", (function() {
            return T
        })), e.d(a, "e", (function() {
            return F
        })), e.d(a, "f", (function() {
            return O
        })), e.d(a, "c", (function() {
            return L
        })), e.d(a, "u", (function() {
            return H
        })), e.d(a, "x", (function() {
            return R
        })), e.d(a, "A", (function() {
            return G
        })), e.d(a, "B", (function() {
            return D
        })), e.d(a, "b", (function() {
            return W
        })), e.d(a, "z", (function() {
            return x
        })), e.d(a, "a", (function() {
            return q
        })), e.d(a, "y", (function() {
            return I
        })), e.d(a, "s", (function() {
            return j
        })), e.d(a, "m", (function() {
            return J
        })), e.d(a, "d", (function() {
            return Y
        })), e.d(a, "n", (function() {
            return K
        }));
        var t = e("uFVl"),
            s = e.n(t),
            r = e("q1tI"),
            l = e.n(r),
            n = e("EDFO"),
            i = (e("dOT4"), e("bZbD"));

        function m(o) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            })(o)
        }

        function c() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            c = function() {
                return o
            };
            var o = {},
                a = Object.prototype,
                e = a.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                s = t.iterator || "@@iterator",
                r = t.asyncIterator || "@@asyncIterator",
                l = t.toStringTag || "@@toStringTag";

            function n(o, a, e) {
                return Object.defineProperty(o, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), o[a]
            }
            try {
                n({}, "")
            } catch (o) {
                n = function(o, a, e) {
                    return o[a] = e
                }
            }

            function i(o, a, e, t) {
                var s = a && a.prototype instanceof k ? a : k,
                    r = Object.create(s.prototype),
                    l = new C(t || []);
                return r._invoke = function(o, a, e) {
                    var t = "suspendedStart";
                    return function(s, r) {
                        if ("executing" === t) throw new Error("Generator is already running");
                        if ("completed" === t) {
                            if ("throw" === s) throw r;
                            return P()
                        }
                        for (e.method = s, e.arg = r;;) {
                            var l = e.delegate;
                            if (l) {
                                var n = B(l, e);
                                if (n) {
                                    if (n === p) continue;
                                    return n
                                }
                            }
                            if ("next" === e.method) e.sent = e._sent = e.arg;
                            else if ("throw" === e.method) {
                                if ("suspendedStart" === t) throw t = "completed", e.arg;
                                e.dispatchException(e.arg)
                            } else "return" === e.method && e.abrupt("return", e.arg);
                            t = "executing";
                            var i = u(o, a, e);
                            if ("normal" === i.type) {
                                if (t = e.done ? "completed" : "suspendedYield", i.arg === p) continue;
                                return {
                                    value: i.arg,
                                    done: e.done
                                }
                            }
                            "throw" === i.type && (t = "completed", e.method = "throw", e.arg = i.arg)
                        }
                    }
                }(o, e, l), r
            }

            function u(o, a, e) {
                try {
                    return {
                        type: "normal",
                        arg: o.call(a, e)
                    }
                } catch (o) {
                    return {
                        type: "throw",
                        arg: o
                    }
                }
            }
            o.wrap = i;
            var p = {};

            function k() {}

            function d() {}

            function g() {}
            var b = {};
            n(b, s, (function() {
                return this
            }));
            var h = Object.getPrototypeOf,
                v = h && h(h(S([])));
            v && v !== a && e.call(v, s) && (b = v);
            var f = g.prototype = k.prototype = Object.create(b);

            function w(o) {
                ["next", "throw", "return"].forEach((function(a) {
                    n(o, a, (function(o) {
                        return this._invoke(a, o)
                    }))
                }))
            }

            function y(o, a) {
                var t;
                this._invoke = function(s, r) {
                    function l() {
                        return new a((function(t, l) {
                            ! function t(s, r, l, n) {
                                var i = u(o[s], o, r);
                                if ("throw" !== i.type) {
                                    var c = i.arg,
                                        p = c.value;
                                    return p && "object" == m(p) && e.call(p, "__await") ? a.resolve(p.__await).then((function(o) {
                                        t("next", o, l, n)
                                    }), (function(o) {
                                        t("throw", o, l, n)
                                    })) : a.resolve(p).then((function(o) {
                                        c.value = o, l(c)
                                    }), (function(o) {
                                        return t("throw", o, l, n)
                                    }))
                                }
                                n(i.arg)
                            }(s, r, t, l)
                        }))
                    }
                    return t = t ? t.then(l, l) : l()
                }
            }

            function B(o, a) {
                var e = o.iterator[a.method];
                if (void 0 === e) {
                    if (a.delegate = null, "throw" === a.method) {
                        if (o.iterator.return && (a.method = "return", a.arg = void 0, B(o, a), "throw" === a.method)) return p;
                        a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var t = u(e, o.iterator, a.arg);
                if ("throw" === t.type) return a.method = "throw", a.arg = t.arg, a.delegate = null, p;
                var s = t.arg;
                return s ? s.done ? (a[o.resultName] = s.value, a.next = o.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, p) : s : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, p)
            }

            function z(o) {
                var a = {
                    tryLoc: o[0]
                };
                1 in o && (a.catchLoc = o[1]), 2 in o && (a.finallyLoc = o[2], a.afterLoc = o[3]), this.tryEntries.push(a)
            }

            function A(o) {
                var a = o.completion || {};
                a.type = "normal", delete a.arg, o.completion = a
            }

            function C(o) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], o.forEach(z, this), this.reset(!0)
            }

            function S(o) {
                if (o) {
                    var a = o[s];
                    if (a) return a.call(o);
                    if ("function" == typeof o.next) return o;
                    if (!isNaN(o.length)) {
                        var t = -1,
                            r = function a() {
                                for (; ++t < o.length;)
                                    if (e.call(o, t)) return a.value = o[t], a.done = !1, a;
                                return a.value = void 0, a.done = !0, a
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return d.prototype = g, n(f, "constructor", g), n(g, "constructor", d), d.displayName = n(g, l, "GeneratorFunction"), o.isGeneratorFunction = function(o) {
                var a = "function" == typeof o && o.constructor;
                return !!a && (a === d || "GeneratorFunction" === (a.displayName || a.name))
            }, o.mark = function(o) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(o, g) : (o.__proto__ = g, n(o, l, "GeneratorFunction")), o.prototype = Object.create(f), o
            }, o.awrap = function(o) {
                return {
                    __await: o
                }
            }, w(y.prototype), n(y.prototype, r, (function() {
                return this
            })), o.AsyncIterator = y, o.async = function(a, e, t, s, r) {
                void 0 === r && (r = Promise);
                var l = new y(i(a, e, t, s), r);
                return o.isGeneratorFunction(e) ? l : l.next().then((function(o) {
                    return o.done ? o.value : l.next()
                }))
            }, w(f), n(f, l, "Generator"), n(f, s, (function() {
                return this
            })), n(f, "toString", (function() {
                return "[object Generator]"
            })), o.keys = function(o) {
                var a = [];
                for (var e in o) a.push(e);
                return a.reverse(),
                    function e() {
                        for (; a.length;) {
                            var t = a.pop();
                            if (t in o) return e.value = t, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, o.values = S, C.prototype = {
                constructor: C,
                reset: function(o) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), !o)
                        for (var a in this) "t" === a.charAt(0) && e.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var o = this.tryEntries[0].completion;
                    if ("throw" === o.type) throw o.arg;
                    return this.rval
                },
                dispatchException: function(o) {
                    if (this.done) throw o;
                    var a = this;

                    function t(e, t) {
                        return l.type = "throw", l.arg = o, a.next = e, t && (a.method = "next", a.arg = void 0), !!t
                    }
                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var r = this.tryEntries[s],
                            l = r.completion;
                        if ("root" === r.tryLoc) return t("end");
                        if (r.tryLoc <= this.prev) {
                            var n = e.call(r, "catchLoc"),
                                i = e.call(r, "finallyLoc");
                            if (n && i) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            } else if (n) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                            } else {
                                if (!i) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(o, a) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var s = this.tryEntries[t];
                        if (s.tryLoc <= this.prev && e.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                            var r = s;
                            break
                        }
                    }
                    r && ("break" === o || "continue" === o) && r.tryLoc <= a && a <= r.finallyLoc && (r = null);
                    var l = r ? r.completion : {};
                    return l.type = o, l.arg = a, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(l)
                },
                complete: function(o, a) {
                    if ("throw" === o.type) throw o.arg;
                    return "break" === o.type || "continue" === o.type ? this.next = o.arg : "return" === o.type ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : "normal" === o.type && a && (this.next = a), p
                },
                finish: function(o) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var e = this.tryEntries[a];
                        if (e.finallyLoc === o) return this.complete(e.completion, e.afterLoc), A(e), p
                    }
                },
                catch: function(o) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var e = this.tryEntries[a];
                        if (e.tryLoc === o) {
                            var t = e.completion;
                            if ("throw" === t.type) {
                                var s = t.arg;
                                A(e)
                            }
                            return s
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(o, a, e) {
                    return this.delegate = {
                        iterator: S(o),
                        resultName: a,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, o
        }

        function u(o, a, e, t, s, r, l) {
            try {
                var n = o[r](l),
                    i = n.value
            } catch (o) {
                return void e(o)
            }
            n.done ? a(i) : Promise.resolve(i).then(t, s)
        }

        function p(o) {
            return function() {
                var a = this,
                    e = arguments;
                return new Promise((function(t, s) {
                    var r = o.apply(a, e);

                    function l(o) {
                        u(r, t, s, l, n, "next", o)
                    }

                    function n(o) {
                        u(r, t, s, l, n, "throw", o)
                    }
                    l(void 0)
                }))
            }
        }

        function k(o) {
            return function(o) {
                if (Array.isArray(o)) return d(o)
            }(o) || function(o) {
                if ("undefined" != typeof Symbol && null != o[Symbol.iterator] || null != o["@@iterator"]) return Array.from(o)
            }(o) || function(o, a) {
                if (!o) return;
                if ("string" == typeof o) return d(o, a);
                var e = Object.prototype.toString.call(o).slice(8, -1);
                "Object" === e && o.constructor && (e = o.constructor.name);
                if ("Map" === e || "Set" === e) return Array.from(o);
                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return d(o, a)
            }(o) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function d(o, a) {
            (null == a || a > o.length) && (a = o.length);
            for (var e = 0, t = new Array(a); e < a; e++) t[e] = o[e];
            return t
        }
        Object(n.addStyles)();
        var g = function(o) {
                var a = o.match(/([0-9\.]+)(vh|vw)/),
                    e = Number(a[1]);
                return window[["innerHeight", "innerWidth"][
                    ["vh", "vw"].indexOf(a[2])
                ]] * (e / 100)
            },
            b = function(o) {
                return o || 0 === o ? o.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
            },
            h = ["st", "nd", "rd", "th"],
            v = function(o) {
                return o % 100 < 11 || o % 100 > 13 ? o % 10 == 1 ? h[0] : o % 10 == 2 ? h[1] : o % 10 == 3 ? h[2] : h[3] : h[3]
            },
            f = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
            w = function(o) {
                var a = o;
                if (o >= 1e3) {
                    var e = ["", "K", "M", "B", "T"],
                        t = Math.floor((o.toString().length - 1) / 3);
                    if (t < e.length) {
                        for (var s = "", r = 3; r >= 1; r--) {
                            if ((s = parseFloat((0 !== t ? o / Math.pow(1e3, t) : o).toPrecision(r))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3) break
                        }
                        s % 1 != 0 && (s = s.toFixed(1)), a = s + e[t]
                    } else {
                        for (var l = o, n = 0; l >= 100;) l = Math.floor(l / 10), n += 1;
                        a = "".concat(l / 10, " × 10").concat(function(o) {
                            var a = "";
                            return o.toString().split("").forEach((function(o) {
                                a += f[Number(o)]
                            })), a
                        }(n + 1))
                    }
                }
                return a
            },
            y = function(o) {
                for (var a = window.location.search.substring(1).split("&"), e = 0; e < a.length; e++) {
                    var t = a[e].split("=");
                    if (t[0] === o) return t[1]
                }
                return !1
            },
            B = function() {
                var o = window.document,
                    a = o.documentElement,
                    e = a.requestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullScreen || a.msRequestFullscreen,
                    t = o.exitFullscreen || o.mozCancelFullScreen || o.webkitExitFullscreen || o.msExitFullscreen;
                return o.fullscreenElement || o.mozFullScreenElement || o.webkitFullscreenElement || o.msFullscreenElement ? (t && t.call(o), !1) : (e && e.call(a), !0)
            },
            z = function() {
                var o = window.document;
                return !!(o.fullscreenElement || o.mozFullScreenElement || o.webkitFullscreenElement || o.msFullscreenElement || window.screen.width === window.innerWidth && window.screen.height === window.innerHeight)
            },
            A = function(o, a) {
                return Math.floor(Math.random() * (a - o)) + o
            },
            C = function(o, a) {
                return Math.random() * (a - o) + o
            },
            S = function(o) {
                return o[Math.floor(Math.random() * o.length)]
            },
            P = function(o, a) {
                for (var e = [], t = k(o); e.length < a;) {
                    0 === t.length && (t = k(o));
                    var s = t.splice(A(0, t.length), 1);
                    e.push(s[0])
                }
                return e
            },
            U = function(o) {
                for (var a = k(o), e = a.length; 0 !== e;) {
                    var t = Math.floor(Math.random() * e),
                        s = a[e -= 1];
                    a[e] = a[t], a[t] = s
                }
                return a
            },
            M = function(o) {
                var a = k(Object.keys(o)),
                    e = a[0];
                if (2 === a.length) e += " & ".concat(a[1]);
                else
                    for (var t = 1; t < a.length; t++) t === a.length - 1 ? e += ", & ".concat(a[t]) : e += ", ".concat(a[t]);
                return e
            },
            N = {
                Common: "#ffffff",
                Uncommon: "#4bc22e",
                Rare: "#0a14fa",
                Epic: "#be0000",
                Legendary: "#ff910f",
                Chroma: "#00ccff",
                Mystical: "#a335ee"
            },
            T = function(o, a) {
                if (!o) return o;
                var e = o.indexOf("upload/");
                if (-1 === e || o.includes("images.unsplash.com")) return o;
                e += 7;
                var t = a ? "f_auto" : "c_limit,f_auto,h_250,fl_lossy,q_auto:low";
                return "".concat(o.slice(0, e)).concat(t).concat(o.slice(e - 1, o.length))
            },
            F = function(o) {
                if (!o) return o;
                var a = o.indexOf("upload/");
                if (-1 === a) return o;
                a += 7;
                return "".concat(o.slice(0, a)).concat("f_auto,q_auto:best").concat(o.slice(a - 1, o.length))
            },
            O = function(o, a, e) {
                return o.map((function(o, t) {
                    return l.a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            margin: "0 5px"
                        },
                        key: t
                    }, 0 !== t ? l.a.createElement("span", {
                        style: {
                            marginLeft: "-5px"
                        }
                    }, "& ") : null, 2 === o.split("`~`").length ? l.a.createElement("img", {
                        src: T(o.split("`~`")[1]),
                        alt: "Answer",
                        draggable: !1,
                        style: {
                            maxWidth: 1.5 * (e || 20),
                            maxHeight: 1.5 * (e || 20),
                            objectFit: "contain",
                            userSelect: "none"
                        }
                    }) : "`*`" === o.slice(0, 3) ? l.a.createElement(n.StaticMathField, {
                        style: {
                            color: a || "#3a3a3a",
                            borderColor: a || "#3a3a3a",
                            fontSize: "".concat(e || 20, "px"),
                            cursor: "default"
                        }
                    }, o.slice(3, o.length - 3)) : l.a.createElement("span", null, o))
                }))
            },
            E = function(o) {
                var a = o || window.event;
                return a && (a.returnValue = "Are you sure you want to leave?"), "Are you sure you want to leave?"
            },
            L = function() {
                window.addEventListener("beforeunload", E)
            },
            H = function() {
                window.removeEventListener("beforeunload", E)
            },
            R = function(o) {
                return o ? o.indexOf('"') >= 0 ? "Emails can't have quotations." : function(o) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(o).toLowerCase())
                }(o) ? o.length > 50 ? "Ok, that email is a little too long." : null : "That's not a real email, silly." : "Where's the email?"
            },
            G = function(o) {
                return o ? o.indexOf(" ") >= 0 ? "Usernames can't have spaces." : o.indexOf("\t") >= 0 ? "Usernames can't have tabs." : o.indexOf('"') >= 0 ? "Usernames can't have quotations." : function(o) {
                    return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(o)
                }(o) ? "Usernames can't have extra special characters." : s()().test(o) ? "Sorry, no emojis allowed." : o.length > 15 ? "Sorry, that name is too long." : null : "Where's The Name?"
            },
            D = function(o) {
                return o ? o.indexOf("\t") >= 0 ? "Usernames can't have tabs." : o.indexOf('"') >= 0 ? "Usernames can't have quotations." : o.length > 35 ? "Sorry, that name is too long." : null : "Where's The Name?"
            },
            W = 75,
            x = function(o) {
                return o ? o.length > W ? "Sorry, that title is too long." : null : "Where's The Title?"
            },
            q = 300,
            I = function(o) {
                return o.length > q ? "Sorry, that description is too long." : null
            },
            j = function(o, a) {
                for (var e = []; e.length < a;) {
                    for (var t = Math.random(), s = 0, r = null, l = 0; l < o.length; l++)
                        if ((s += o[l].rate) >= t) {
                            r = o[l];
                            break
                        } r && !e.includes(r) && e.push(r)
                }
                return e
            },
            J = function(o) {
                return /([.:#$/[\]\t])/g.test(o)
            },
            Y = function(o) {
                var a = document.createElement("textarea");
                a.value = o, a.setAttribute("readonly", ""), a.style.position = "absolute", a.style.left = "-9999px", document.body.appendChild(a);
                var e = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                a.select(), document.execCommand("copy"), document.body.removeChild(a), e && (document.getSelection().removeAllRanges(), document.getSelection().addRange(e))
            },
            K = function() {
                var o = p(c().mark((function o() {
                    return c().wrap((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.abrupt("return", i.a.post("/dep", {
                                    href: window.location.href
                                }));
                            case 1:
                            case "end":
                                return o.stop()
                        }
                    }), o)
                })));
                return function() {
                    return o.apply(this, arguments)
                }
            }()
    },
    E8Bj: function(o, a, e) {
        "use strict";
        e.d(a, "a", (function() {
            return k
        })), e.d(a, "c", (function() {
            return d
        }));
        var t = e("q1tI"),
            s = e.n(t),
            r = e("qnYv");

        function l(o) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            })(o)
        }

        function n() {
            return (n = Object.assign ? Object.assign.bind() : function(o) {
                for (var a = 1; a < arguments.length; a++) {
                    var e = arguments[a];
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
                }
                return o
            }).apply(this, arguments)
        }

        function i() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            i = function() {
                return o
            };
            var o = {},
                a = Object.prototype,
                e = a.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                s = t.iterator || "@@iterator",
                r = t.asyncIterator || "@@asyncIterator",
                n = t.toStringTag || "@@toStringTag";

            function m(o, a, e) {
                return Object.defineProperty(o, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), o[a]
            }
            try {
                m({}, "")
            } catch (o) {
                m = function(o, a, e) {
                    return o[a] = e
                }
            }

            function c(o, a, e, t) {
                var s = a && a.prototype instanceof k ? a : k,
                    r = Object.create(s.prototype),
                    l = new C(t || []);
                return r._invoke = function(o, a, e) {
                    var t = "suspendedStart";
                    return function(s, r) {
                        if ("executing" === t) throw new Error("Generator is already running");
                        if ("completed" === t) {
                            if ("throw" === s) throw r;
                            return P()
                        }
                        for (e.method = s, e.arg = r;;) {
                            var l = e.delegate;
                            if (l) {
                                var n = B(l, e);
                                if (n) {
                                    if (n === p) continue;
                                    return n
                                }
                            }
                            if ("next" === e.method) e.sent = e._sent = e.arg;
                            else if ("throw" === e.method) {
                                if ("suspendedStart" === t) throw t = "completed", e.arg;
                                e.dispatchException(e.arg)
                            } else "return" === e.method && e.abrupt("return", e.arg);
                            t = "executing";
                            var i = u(o, a, e);
                            if ("normal" === i.type) {
                                if (t = e.done ? "completed" : "suspendedYield", i.arg === p) continue;
                                return {
                                    value: i.arg,
                                    done: e.done
                                }
                            }
                            "throw" === i.type && (t = "completed", e.method = "throw", e.arg = i.arg)
                        }
                    }
                }(o, e, l), r
            }

            function u(o, a, e) {
                try {
                    return {
                        type: "normal",
                        arg: o.call(a, e)
                    }
                } catch (o) {
                    return {
                        type: "throw",
                        arg: o
                    }
                }
            }
            o.wrap = c;
            var p = {};

            function k() {}

            function d() {}

            function g() {}
            var b = {};
            m(b, s, (function() {
                return this
            }));
            var h = Object.getPrototypeOf,
                v = h && h(h(S([])));
            v && v !== a && e.call(v, s) && (b = v);
            var f = g.prototype = k.prototype = Object.create(b);

            function w(o) {
                ["next", "throw", "return"].forEach((function(a) {
                    m(o, a, (function(o) {
                        return this._invoke(a, o)
                    }))
                }))
            }

            function y(o, a) {
                var t;
                this._invoke = function(s, r) {
                    function n() {
                        return new a((function(t, n) {
                            ! function t(s, r, n, i) {
                                var m = u(o[s], o, r);
                                if ("throw" !== m.type) {
                                    var c = m.arg,
                                        p = c.value;
                                    return p && "object" == l(p) && e.call(p, "__await") ? a.resolve(p.__await).then((function(o) {
                                        t("next", o, n, i)
                                    }), (function(o) {
                                        t("throw", o, n, i)
                                    })) : a.resolve(p).then((function(o) {
                                        c.value = o, n(c)
                                    }), (function(o) {
                                        return t("throw", o, n, i)
                                    }))
                                }
                                i(m.arg)
                            }(s, r, t, n)
                        }))
                    }
                    return t = t ? t.then(n, n) : n()
                }
            }

            function B(o, a) {
                var e = o.iterator[a.method];
                if (void 0 === e) {
                    if (a.delegate = null, "throw" === a.method) {
                        if (o.iterator.return && (a.method = "return", a.arg = void 0, B(o, a), "throw" === a.method)) return p;
                        a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var t = u(e, o.iterator, a.arg);
                if ("throw" === t.type) return a.method = "throw", a.arg = t.arg, a.delegate = null, p;
                var s = t.arg;
                return s ? s.done ? (a[o.resultName] = s.value, a.next = o.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, p) : s : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, p)
            }

            function z(o) {
                var a = {
                    tryLoc: o[0]
                };
                1 in o && (a.catchLoc = o[1]), 2 in o && (a.finallyLoc = o[2], a.afterLoc = o[3]), this.tryEntries.push(a)
            }

            function A(o) {
                var a = o.completion || {};
                a.type = "normal", delete a.arg, o.completion = a
            }

            function C(o) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], o.forEach(z, this), this.reset(!0)
            }

            function S(o) {
                if (o) {
                    var a = o[s];
                    if (a) return a.call(o);
                    if ("function" == typeof o.next) return o;
                    if (!isNaN(o.length)) {
                        var t = -1,
                            r = function a() {
                                for (; ++t < o.length;)
                                    if (e.call(o, t)) return a.value = o[t], a.done = !1, a;
                                return a.value = void 0, a.done = !0, a
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return d.prototype = g, m(f, "constructor", g), m(g, "constructor", d), d.displayName = m(g, n, "GeneratorFunction"), o.isGeneratorFunction = function(o) {
                var a = "function" == typeof o && o.constructor;
                return !!a && (a === d || "GeneratorFunction" === (a.displayName || a.name))
            }, o.mark = function(o) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(o, g) : (o.__proto__ = g, m(o, n, "GeneratorFunction")), o.prototype = Object.create(f), o
            }, o.awrap = function(o) {
                return {
                    __await: o
                }
            }, w(y.prototype), m(y.prototype, r, (function() {
                return this
            })), o.AsyncIterator = y, o.async = function(a, e, t, s, r) {
                void 0 === r && (r = Promise);
                var l = new y(c(a, e, t, s), r);
                return o.isGeneratorFunction(e) ? l : l.next().then((function(o) {
                    return o.done ? o.value : l.next()
                }))
            }, w(f), m(f, n, "Generator"), m(f, s, (function() {
                return this
            })), m(f, "toString", (function() {
                return "[object Generator]"
            })), o.keys = function(o) {
                var a = [];
                for (var e in o) a.push(e);
                return a.reverse(),
                    function e() {
                        for (; a.length;) {
                            var t = a.pop();
                            if (t in o) return e.value = t, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, o.values = S, C.prototype = {
                constructor: C,
                reset: function(o) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), !o)
                        for (var a in this) "t" === a.charAt(0) && e.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var o = this.tryEntries[0].completion;
                    if ("throw" === o.type) throw o.arg;
                    return this.rval
                },
                dispatchException: function(o) {
                    if (this.done) throw o;
                    var a = this;

                    function t(e, t) {
                        return l.type = "throw", l.arg = o, a.next = e, t && (a.method = "next", a.arg = void 0), !!t
                    }
                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var r = this.tryEntries[s],
                            l = r.completion;
                        if ("root" === r.tryLoc) return t("end");
                        if (r.tryLoc <= this.prev) {
                            var n = e.call(r, "catchLoc"),
                                i = e.call(r, "finallyLoc");
                            if (n && i) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            } else if (n) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                            } else {
                                if (!i) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(o, a) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var s = this.tryEntries[t];
                        if (s.tryLoc <= this.prev && e.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                            var r = s;
                            break
                        }
                    }
                    r && ("break" === o || "continue" === o) && r.tryLoc <= a && a <= r.finallyLoc && (r = null);
                    var l = r ? r.completion : {};
                    return l.type = o, l.arg = a, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(l)
                },
                complete: function(o, a) {
                    if ("throw" === o.type) throw o.arg;
                    return "break" === o.type || "continue" === o.type ? this.next = o.arg : "return" === o.type ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : "normal" === o.type && a && (this.next = a), p
                },
                finish: function(o) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var e = this.tryEntries[a];
                        if (e.finallyLoc === o) return this.complete(e.completion, e.afterLoc), A(e), p
                    }
                },
                catch: function(o) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var e = this.tryEntries[a];
                        if (e.tryLoc === o) {
                            var t = e.completion;
                            if ("throw" === t.type) {
                                var s = t.arg;
                                A(e)
                            }
                            return s
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(o, a, e) {
                    return this.delegate = {
                        iterator: S(o),
                        resultName: a,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, o
        }

        function m(o, a, e, t, s, r, l) {
            try {
                var n = o[r](l),
                    i = n.value
            } catch (o) {
                return void e(o)
            }
            n.done ? a(i) : Promise.resolve(i).then(t, s)
        }

        function c(o) {
            return function() {
                var a = this,
                    e = arguments;
                return new Promise((function(t, s) {
                    var r = o.apply(a, e);

                    function l(o) {
                        m(r, t, s, l, n, "next", o)
                    }

                    function n(o) {
                        m(r, t, s, l, n, "throw", o)
                    }
                    l(void 0)
                }))
            }
        }

        function u(o, a) {
            for (var e = 0; e < a.length; e++) {
                var t = a[e];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, t.key, t)
            }
        }
        var p = function() {
                function o() {
                    ! function(o, a) {
                        if (!(o instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), this.data = null, this.loading = !0, this.getLoggedIn()
                }
                var a, e, t, s, l;
                return a = o, (e = [{
                    key: "getData",
                    value: (l = c(i().mark((function o() {
                        return i().wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (!this.loading) {
                                        o.next = 3;
                                        break
                                    }
                                    return o.next = 3, this.getLoggedIn();
                                case 3:
                                    return o.abrupt("return", this.data);
                                case 4:
                                case "end":
                                    return o.stop()
                            }
                        }), o, this)
                    }))), function() {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "getLoggedIn",
                    value: (s = c(i().mark((function o() {
                        var a = this;
                        return i().wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (this.loading = !0, "undefined" == typeof window) {
                                        o.next = 3;
                                        break
                                    }
                                    return o.abrupt("return", r.a.get("/api/users/verify-session").then((function(o) {
                                        a.data = o.data, a.loading = !1
                                    })).catch((function() {
                                        a.data = null, a.loading = !1
                                    })));
                                case 3:
                                    this.data = null, this.loading = !1;
                                case 5:
                                case "end":
                                    return o.stop()
                            }
                        }), o, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }]) && u(a.prototype, e), t && u(a, t), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), o
            }(),
            k = Object(t.createContext)(null),
            d = function(o) {
                return function(a) {
                    return s.a.createElement(k.Consumer, null, (function(e) {
                        return s.a.createElement(o, n({}, a, {
                            user: e
                        }))
                    }))
                }
            };
        a.b = p
    },
    It6Q: function(o, a, e) {
        "use strict";
        a.a = {
            "Snowy Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
            "Polar Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
            "Arctic Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
            "Baby Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
            Penguin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
            "Arctic Hare": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
            Seal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
            Walrus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg"
        }
    },
    "L+rC": function(o, a, e) {
        "use strict";
        a.a = {
            Bear: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
            Moose: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
            Fox: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
            Raccoon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
            Squirrel: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
            Owl: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
            Hedgehog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg"
        }
    },
    LAIx: function(o, a, e) {
        "use strict";
        var t = {
            Chick: "#ffcd05",
            Chicken: "#ed1c24",
            Cow: "#58595b",
            Goat: "#c59a74",
            Horse: "#995b3c",
            Pig: "#f6a9cb",
            Sheep: "#414042",
            Duck: "#4ab96d",
            Dog: "#995b3c",
            Cat: "#f49849",
            Rabbit: "#e7bf9a",
            Goldfish: "#f18221",
            Hamster: "#ce9176",
            Turtle: "#619a3c",
            Kitten: "#58595b",
            Puppy: "#414042",
            Bear: "#995b3c",
            Moose: "#995b3c",
            Fox: "#f49849",
            Raccoon: "#6d6e71",
            Squirrel: "#d25927",
            Owl: "#594a42",
            Hedgehog: "#3f312b",
            "Baby Penguin": "#414042",
            Penguin: "#fb8640",
            "Arctic Fox": "#7ca1d5",
            "Snowy Owl": "#feda3f",
            "Polar Bear": "#7ca1d5",
            "Arctic Hare": "#7ca1d5",
            Seal: "#7ca1d5",
            Walrus: "#7d4f33",
            Tiger: "#f18221",
            Panther: "#2f2c38",
            Cockatoo: "#7ca1d5",
            Orangutan: "#bc6234",
            Anaconda: "#8a9143",
            Macaw: "#00aeef",
            Jaguar: "#fbb040",
            Capuchin: "#e0b0a6",
            Toucan: "#ffca34",
            Parrot: "#ed1c24",
            Elf: "#a7d054",
            Witch: "#4ab96d",
            Wizard: "#5a459c",
            Fairy: "#df6d9c",
            "Slime Monster": "#2fa04a",
            Jester: "#be1e2d",
            Dragon: "#2fa04a",
            Unicorn: "#f6afce",
            Queen: "#9e1f63",
            King: "#ee2640",
            "Agent Owl": "#32da4e",
            "Master Elf": "#3a3a3a",
            "Phantom King": "#2cf4e1",
            "Snow Globe": "#10afd1",
            "Holiday Gift": "#4ab96d",
            "Hot Chocolate": "#663723",
            "Gingerbread Man": "#995b3c",
            "Gingerbread House": "#995b3c",
            "Holiday Wreath": "#6c9355",
            Snowman: "#7ca1d5",
            "Santa Claus": "#d62027",
            "Frost Wreath": "#2086df",
            "Tropical Globe": "#fb7c2f",
            "Two of Spades": "#414042",
            "Eat Me": "#d58c55",
            "Drink Me": "#dd7399",
            Alice: "#4cc9f5",
            "Queen of Hearts": "#d62027",
            Dormouse: "#89d6f8",
            "White Rabbit": "#ffcd05",
            "Cheshire Cat": "#dd7399",
            "Mad Hatter": "#914f93",
            "King of Hearts": "#c62127",
            Caterpillar: "#00c0f3",
            Toast: "#e9a058",
            Cereal: "#2fa04a",
            Yogurt: "#00aeef",
            "Breakfast Combo": "#c3d8ea",
            "Orange Juice": "#f7941d",
            Milk: "#77c6e2",
            Waffle: "#f9a241",
            Pancakes: "#f9a241",
            "French Toast": "#f9a241",
            Pizza: "#fdb913",
            Sandwich: "#8cbd40",
            "Light Blue": "#0bc2cf",
            Black: "#3a3a3a",
            Red: "#d62728",
            Purple: "#9a49aa",
            Pink: "#e377c2",
            Orange: "#ff7f0f",
            Lime: "#b3dc23",
            Green: "#2ca02c",
            Teal: "#007788",
            Tan: "#d2b48c",
            Maroon: "#800000",
            Gray: "#999999",
            Mint: "#aaf0d1",
            Salmon: "#fa8072",
            Burgandy: "#99254d",
            "Baby Blue": "#99ccff",
            Dust: "#999966",
            Brown: "#86592d",
            "Dull Blue": "#666699",
            Yellow: "#ffff4d",
            Blue: "#005ce6",
            Pumpkin: "#f7941d",
            "Swamp Monster": "#2fa04a",
            Frankenstein: "#56884b",
            Vampire: "#a15095",
            Zombie: "#80a55d",
            Mummy: "#e8d8c7",
            Werewolf: "#594a42",
            Ghost: "#c2def4",
            "Haunted Pumpkin": "#939385",
            "Spooky Pumpkin": "#66f59b",
            "Spooky Mummy": "#66f59b",
            "Spooky Ghost": "#66f59b",
            Earth: "#416eb5",
            Meteor: "#c68c3c",
            Stars: "#19184d",
            Alien: "#8dc63f",
            Planet: "#9dc6ea",
            UFO: "#a15095",
            Spaceship: "#ffcb29",
            Astronaut: "#9bd4ee",
            "Red Astronaut": "#ee2324",
            "Blue Astronaut": "#2867b1",
            "Green Astronaut": "#197b42",
            "Pink Astronaut": "#e573ac",
            "Orange Astronaut": "#f79320",
            "Yellow Astronaut": "#edcb1f",
            "Black Astronaut": "#413f56",
            "Purple Astronaut": "#9068ad",
            "Brown Astronaut": "#9e5a3a",
            "Cyan Astronaut": "#74cbcb",
            "Lime Astronaut": "#61b446",
            "Tim the Alien": "#8dc63f",
            "Rainbow Astronaut": "#9068ad",
            "Lil Bot": "#3e564a",
            "Lovely Bot": "#f179af",
            "Angry Bot": "#f1613a",
            "Happy Bot": "#51ba6b",
            Watson: "#d69b5a",
            "Buddy Bot": "#9dc6ea",
            "Brainy Bot": "#9ecf7a",
            "Mega Bot": "#d71f27",
            "Old Boot": "#995b3c",
            Jellyfish: "#c385b9",
            Clownfish: "#f7941d",
            Frog: "#a7d054",
            Crab: "#cf1f3d",
            Pufferfish: "#ddc4a6",
            Blobfish: "#f3c1da",
            Octopus: "#a15095",
            Narwhal: "#dae6f5",
            "Baby Shark": "#5588b7",
            Megalodon: "#3d5d80",
            "Rainbow Jellyfish": "#c9d6ed",
            "Blizzard Clownfish": "#dae6f5",
            "Lovely Frog": "#f38db6",
            "Lucky Frog": "#4eb151",
            "Spring Frog": "#f2bd8c",
            "Poison Dart Frog": "#ffcb29",
            "Lemon Crab": "#f7d959",
            "Pirate Pufferfish": "#8b5aa5",
            "Donut Blobfish": "#f3c1da",
            "Crimson Octopus": "#b3303b",
            "Rainbow Narwhal": "#cfe8e9",
            Panda: "#2f2c38",
            Sloth: "#765b46",
            Tenrec: "#ffcb29",
            Flamingo: "#f38db6",
            Zebra: "#2f2c38",
            Elephant: "#bac4e4",
            Lemur: "#aeaba7",
            Peacock: "#2b3990",
            Chameleon: "#8dc63f",
            Lion: "#f47e20",
            "Rainbow Panda": "#2f2c38",
            "White Peacock": "#69c1d3",
            "Tiger Zebra": "#f18221",
            Amber: "#f7913f",
            "Dino Egg": "#d69b5a",
            "Dino Fossil": "#a46735",
            Stegosaurus: "#6c9355",
            Velociraptor: "#cf1f3d",
            Brontosaurus: "#416eb5",
            Triceratops: "#f1613a",
            "Tyrannosaurus Rex": "#6c9355",
            "Ice Bat": "#295eb6",
            "Ice Bug": "#337ae2",
            "Ice Elemental": "#58c7f0",
            "Rock Monster": "#5a617f",
            Dink: "#8f78a5",
            Donk: "#677c9e",
            "Bush Monster": "#44c649",
            Yeti: "#5a81c5",
            "Ice Slime": "#42b7ea",
            "Frozen Fossil": "#9ed2ef",
            "Ice Crab": "#3ea8cf"
        };
        a.a = function(o) {
            return o.includes("#") ? "#0bc2cf" : t[o]
        }
    },
    MDrD: function(o, a, e) {
        "use strict";
        var t = e("+5wV"),
            s = e("/WU8"),
            r = e("L+rC"),
            l = e("Pld/"),
            n = e("It6Q"),
            i = e("uFVu"),
            m = e("wUzO"),
            c = e("yjv5"),
            u = e("pz6q"),
            p = {
                Pizza: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
                Sandwich: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg"
            },
            k = e("2m0V"),
            d = e("T33n"),
            g = e("ZoJE"),
            b = e("QwrL"),
            h = e("TG0S"),
            v = {
                "Ice Bat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBat.svg",
                "Ice Bug": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBug.svg",
                "Ice Elemental": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceElemental.svg",
                "Rock Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/rockMonster.svg",
                Dink: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/dink.svg",
                Donk: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/donk.svg",
                "Bush Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/bushMonster.svg",
                Yeti: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/yeti.svg",
                "Ice Slime": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceSlime.svg",
                "Frozen Fossil": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/frozenFossil.svg",
                "Ice Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceCrab.svg"
            },
            f = {
                "Light Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                Black: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
                Red: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
                Purple: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
                Pink: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
                Orange: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
                Lime: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
                Green: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
                Teal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
                Tan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
                Maroon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
                Gray: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
                Mint: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
                Salmon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
                Burgandy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
                "Baby Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
                Dust: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
                Brown: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
                "Dull Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
                Yellow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
                Blue: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg"
            },
            w = e("/iB7"),
            y = {
                "Red Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
                "Blue Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
                "Green Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
                "Pink Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
                "Orange Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
                "Yellow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
                "Black Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
                "Purple Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                "Brown Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
                "Cyan Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
                "Lime Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
                "Rainbow Jellyfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
                "Blizzard Clownfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
                "Lovely Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
                "Lucky Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg",
                "Spring Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg",
                "Poison Dart Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
                "Lemon Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
                "Pirate Pufferfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
                "Donut Blobfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
                "Crimson Octopus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
                "Rainbow Narwhal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",
                "Haunted Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
                "Spooky Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
                "Spooky Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
                "Frost Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
                "Tropical Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
                "White Peacock": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg",
                "Tiger Zebra": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg",
                "Agent Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
                "Master Elf": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
                "Spooky Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
                "Tim the Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
                "Phantom King": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
                "Rainbow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg"
            };

        function B(o, a) {
            var e = Object.keys(o);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(o);
                a && (t = t.filter((function(a) {
                    return Object.getOwnPropertyDescriptor(o, a).enumerable
                }))), e.push.apply(e, t)
            }
            return e
        }

        function z(o) {
            for (var a = 1; a < arguments.length; a++) {
                var e = null != arguments[a] ? arguments[a] : {};
                a % 2 ? B(Object(e), !0).forEach((function(a) {
                    A(o, a, e[a])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : B(Object(e)).forEach((function(a) {
                    Object.defineProperty(o, a, Object.getOwnPropertyDescriptor(e, a))
                }))
            }
            return o
        }

        function A(o, a, e) {
            return a in o ? Object.defineProperty(o, a, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[a] = e, o
        }
        var C = z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z({}, t.a), s.a), r.a), l.a), n.a), i.a), c.a), u.a), p), k.a), d.a), g.a), b.a), h.a), v), m.a), f), w.a), y);
        a.a = C
    },
    MldR: function(o, a, e) {
        "use strict";
        a.a = {
            Chick: "Happy Hatchers",
            Chicken: "Early Birds",
            Cow: "Udder Chaos",
            Goat: "Goatee OG's",
            Horse: "Radical Racers",
            Pig: "Orderly Oinkers",
            Sheep: "Wool Winners",
            Duck: "Quirky Quackers",
            Dog: "Diligent Doggos",
            Cat: "Meow Mates",
            Rabbit: "Fluffy Bunnies",
            Goldfish: "Pretty Fishies",
            Hamster: "HAMSTA TIME",
            Turtle: "Shell Shocked",
            Kitten: "Purrfect People",
            Puppy: "Super Puppers",
            Bear: "Bear Necessities",
            Moose: "Moose Caboose",
            Fox: "Swifty Swipers",
            Raccoon: "Trash Pandas",
            Squirrel: "Nutty Buddies",
            Owl: "Hooooooooo",
            Hedgehog: "Spikey Friends",
            "Baby Penguin": "Party Penguins",
            Penguin: "Better Birds",
            "Arctic Fox": "Chilly Chosen",
            "Snowy Owl": "Kool Kids",
            "Polar Bear": "Snowy Students",
            "Arctic Hare": "Arctic Achievers",
            Seal: "Super Seals",
            Walrus: "Wordy Walruses",
            Tiger: "Brave Bengals",
            Panther: "Wakanda Forever",
            Cockatoo: "Not Chickens",
            Orangutan: "Hairy Hipsters",
            Anaconda: "Sneaky Snakes",
            Macaw: "CA CAWWWW",
            Jaguar: "Super Spotters",
            Capuchin: "Monkey Madness",
            Toucan: "Toucan't Beat Us",
            Parrot: "Polly's People",
            Elf: "Agile Archers",
            Witch: "Cauldron City",
            Wizard: "Wiz Kids",
            Fairy: "Mighty Myths",
            "Slime Monster": "Slimy McSlimes",
            Jester: "Jolly Jokesters",
            Dragon: "Fire Hazards",
            Unicorn: "Land Narwhals",
            Queen: "Royal Rebels",
            King: "THE SQUAD",
            "Agent Owl": "Secret Agents",
            "Master Elf": "The Masters",
            "Phantom King": "The True Kings",
            "Snow Globe": "Globetrotters",
            "Holiday Gift": "Generous Givers",
            "Hot Chocolate": "Cocoa Coziness",
            "Gingerbread Man": "Cookie Crunchers",
            "Gingerbread House": "Healthy Houses",
            "Holiday Wreath": "Wreath Wreckers",
            Snowman: "Summer Puddles",
            "Santa Claus": "Santa's Squad",
            "Frost Wreath": "TEAM FREEZE",
            "Tropical Globe": "WARM HUGS",
            "Two of Spades": "Dueling Deuces",
            "Eat Me": "Hungry Heroes",
            "Drink Me": "Potion Power",
            Alice: "Wonderland",
            "Queen of Hearts": "❤️❤️❤️",
            Dormouse: "Short and Stout",
            "White Rabbit": "Classy Classmates",
            "Cheshire Cat": "Cool Cats",
            Caterpillar: "Caterpillar Cuties",
            "Mad Hatter": "Goofy Gurus",
            "King of Hearts": "The Royals",
            Toast: "Toasty Teammates",
            Cereal: "Fruity Friends",
            Yogurt: "Yogurt Youngins",
            "Breakfast Combo": "Combo Cooks",
            "Orange Juice": "OJ OG's",
            Milk: "Got Milk?",
            Waffle: "Holey Pancakes",
            Pancakes: "Flat Waffles",
            "French Toast": "Bonjour Boomers",
            Pizza: "Pizza Popstars",
            Sandwich: "Super Sandwiches",
            "Light Blue": "Blooket Buds",
            Black: "Black Team",
            Red: "Red Team",
            Purple: "Purple Team",
            Pink: "Pink Team",
            Orange: "Orange Team",
            Lime: "Lime Team",
            Green: "Green Team",
            Teal: "Teal Team",
            Tan: "Tan Team",
            Maroon: "Maroon Team",
            Gray: "Gray Team",
            Mint: "Mint Team",
            Salmon: "Salmon Team",
            Burgandy: "Burgandy Team",
            "Baby Blue": "Baby Blue Team",
            Dust: "Dust Team",
            Brown: "Brown Team",
            "Dull Blue": "Dim Blue Team",
            Yellow: "Yellow Team",
            Blue: "Blue Team",
            Pumpkin: "Pumpkin Smashers",
            "Swamp Monster": "Swamp Things",
            Frankenstein: "The Monsters",
            Vampire: "Valiant Vampires",
            Zombie: "Walking Dead",
            Mummy: "Motivated Mummies",
            Werewolf: "Werewolf Warriors",
            Ghost: "BOO!",
            "Haunted Pumpkin": "Haunted Helpers",
            "Spooky Pumpkin": "Ghostly Geniuses",
            "Spooky Mummy": "Spooky 'n' Scary",
            "Spooky Ghost": "Spooksters",
            Earth: "Earthlings",
            Meteor: "Meteorites",
            Stars: "Shooting Stars",
            Alien: "Awesome Aliens",
            Planet: "Galactic Warriors",
            UFO: "Unidentified Students",
            Spaceship: "We Have a Problem",
            Astronaut: "Astro Aviators",
            "Red Astronaut": "Red Crewmates",
            "Blue Astronaut": "Blue Crewmates",
            "Green Astronaut": "Green Crewmates",
            "Pink Astronaut": "Pink Crewmates",
            "Orange Astronaut": "Orange Crewmates",
            "Yellow Astronaut": "Yellow Crewmates",
            "Black Astronaut": "Black Crewmates",
            "Purple Astronaut": "Purple Crewmates",
            "Brown Astronaut": "Brown Crewmates",
            "Cyan Astronaut": "Cyan Crewmates",
            "Lime Astronaut": "Lime Crewmates",
            "Tim the Alien": "Tim's Friends",
            "Rainbow Astronaut": "RAINBOW",
            "Lil Bot": "Lil Bots",
            "Lovely Bot": "Lovely Leaders",
            "Angry Bot": "Evil Geniuses",
            "Happy Bot": "The Calculators",
            Watson: "Sophistication",
            "Buddy Bot": "Best Buddies",
            "Brainy Bot": "Big Brain Bots",
            "Mega Bot": "THE MEGA BOTS",
            "Old Boot": "Da Boots",
            Jellyfish: "Jelly Jumpers",
            Clownfish: "Nemo Extras",
            Frog: "Hippity Hoppers",
            Crab: "Cool Claws",
            Pufferfish: "TEAM BIG",
            Blobfish: "blob blob blob",
            Octopus: "Team 8",
            Narwhal: "NARWHALLLLL",
            "Baby Shark": "BABY SHARK",
            Megalodon: "Megan's the Name",
            "Rainbow Jellyfish": "Underwater Disco",
            "Blizzard Clownfish": "Winter Circus",
            "Lovely Frog": "Cute Companions",
            "Lucky Frog": "Lucky Leapers",
            "Spring Frog": "Spring Spirit",
            "Poison Dart Frog": "TOXIC HAZARD",
            "Lemon Crab": "Citrus Claws",
            "Pirate Pufferfish": "Perfect Pirates",
            "Donut Blobfish": "Donut Mess Up",
            "Crimson Octopus": "Red Team 8",
            "Rainbow Narwhal": "Sea Unicorns",
            Panda: "Prime Pandas",
            Sloth: "Silly Sloths",
            Tenrec: "Troubling Tenrecs",
            Flamingo: "Pink And Proud",
            Zebra: "Super Stripes",
            Elephant: "Erudite Elephants",
            Lemur: "Leaping Lemurs",
            Peacock: "Fearless Feathers",
            Chameleon: "Cool Chameleons",
            Lion: "The Pride",
            "Rainbow Panda": "The Rainbows",
            "White Peacock": "Fast Feathers",
            "Tiger Zebra": "Agent Zs",
            Amber: "Ambitious Ambers",
            "Dino Egg": "Eggcellence",
            "Dino Fossil": "Fighting Fossils",
            Stegosaurus: "Hearty Herbivores",
            Velociraptor: "Prehistorics",
            Brontosaurus: "Big Giraffes",
            Triceratops: "Daring Dinos",
            "Tyrannosaurus Rex": "The Terror",
            "Ice Bat": "Frozen Wings",
            "Ice Bug": "Bold Bugs",
            "Ice Elemental": "ICED",
            "Rock Monster": "Ready Rocks",
            Dink: "Dink Donk 1",
            Donk: "Dink Donk 2",
            "Bush Monster": "Brave Bushes",
            Yeti: "Everest",
            "Ice Slime": "Slip n Slide",
            "Frozen Fossil": "Ice Age",
            "Ice Crab": "ICE ICE BABY"
        }
    },
    "Pld/": function(o, a, e) {
        "use strict";
        a.a = {
            Tiger: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
            Orangutan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
            Cockatoo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
            Parrot: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
            Anaconda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
            Jaguar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
            Macaw: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
            Toucan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
            Panther: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
            Capuchin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg"
        }
    },
    QwrL: function(o, a, e) {
        "use strict";
        a.a = {
            Panda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg",
            Sloth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg",
            Tenrec: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg",
            Flamingo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg",
            Zebra: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg",
            Elephant: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg",
            Lemur: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg",
            Peacock: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg",
            Chameleon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg",
            Lion: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg",
            "Rainbow Panda": "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg"
        }
    },
    T33n: function(o, a, e) {
        "use strict";
        a.a = {
            "Lil Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
            "Lovely Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
            "Angry Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
            "Happy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
            Watson: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
            "Buddy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
            "Brainy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
            "Mega Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg"
        }
    },
    TG0S: function(o, a, e) {
        "use strict";
        a.a = {
            Amber: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg",
            "Dino Egg": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg",
            "Dino Fossil": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg",
            Stegosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg",
            Velociraptor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg",
            Brontosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg",
            Triceratops: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg",
            "Tyrannosaurus Rex": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg"
        }
    },
    ZoJE: function(o, a, e) {
        "use strict";
        a.a = {
            "Old Boot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
            Jellyfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
            Clownfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
            Frog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
            Crab: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
            Pufferfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
            Blobfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
            Octopus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
            Narwhal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
            "Baby Shark": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
            Megalodon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg"
        }
    },
    fGzD: function(o, a, e) {
        "use strict";
        e.d(a, "b", (function() {
            return l
        })), e.d(a, "a", (function() {
            return n
        }));
        var t = e("wd/R"),
            s = e.n(t),
            r = {
                Monday: "Pink Astronaut",
                Tuesday: "Yellow Astronaut",
                Wednesday: "Black Astronaut",
                Thursday: "Orange Astronaut",
                Friday: "Red Astronaut",
                Saturday: "Brown Astronaut",
                Sunday: "Green Astronaut"
            },
            l = function(o) {
                return "Medieval" === o ? [
                    ["Elf", 13.4],
                    ["Witch", 13.4],
                    ["Wizard", 13.4],
                    ["Fairy", 13.4],
                    ["Slime Monster", 13.4],
                    ["Jester", 9],
                    ["Dragon", 9],
                    ["Queen", 9],
                    ["Unicorn", 5],
                    ["King", 1]
                ] : "Blizzard" === o ? [
                    ["Snow Globe", 17.75],
                    ["Holiday Gift", 17.75],
                    ["Hot Chocolate", 17.75],
                    ["Holiday Wreath", 17.75],
                    ["Gingerbread Man", 11.45],
                    ["Gingerbread House", 11.45],
                    ["Snowman", 5.05],
                    ["Santa Claus", 1],
                    ["Frost Wreath", .03],
                    ["Tropical Globe", .02]
                ] : "Wonderland" === o ? [
                    ["Two of Spades", 15.2],
                    ["Eat Me", 15],
                    ["Drink Me", 15],
                    ["Alice", 15],
                    ["Queen of Hearts", 15],
                    ["Dormouse", 6.5],
                    ["White Rabbit", 6.5],
                    ["Cheshire Cat", 6.5],
                    ["Caterpillar", 2.5],
                    ["Mad Hatter", 2.5],
                    ["King of Hearts", .3]
                ] : "Breakfast" === o ? [
                    ["Toast", 12.5],
                    ["Cereal", 12.5],
                    ["Yogurt", 12.5],
                    ["Breakfast Combo", 12.5],
                    ["Orange Juice", 12.5],
                    ["Milk", 12.5],
                    ["Waffle", 9],
                    ["Pancakes", 9],
                    ["French Toast", 5],
                    ["Pizza", 2]
                ] : "Spooky" === o ? [
                    ["Pumpkin", 18.5],
                    ["Swamp Monster", 18.5],
                    ["Frankenstein", 18.5],
                    ["Vampire", 18.5],
                    ["Zombie", 10.15],
                    ["Mummy", 10.15],
                    ["Werewolf", 5],
                    ["Ghost", .65],
                    ["Haunted Pumpkin", .05]
                ] : "Space" === o ? [
                    ["Earth", 18.75],
                    ["Meteor", 18.75],
                    ["Stars", 18.75],
                    ["Alien", 18.75],
                    ["Planet", 10],
                    ["UFO", 10],
                    ["Spaceship", 4.5],
                    ["Astronaut", .45],
                    [r[s.a.utc().subtract(5, "hours").format("dddd")], .05]
                ] : "Bot" === o ? [
                    ["Lil Bot", 19.5],
                    ["Lovely Bot", 19.5],
                    ["Angry Bot", 19.5],
                    ["Happy Bot", 19.5],
                    ["Watson", 9],
                    ["Buddy Bot", 9],
                    ["Brainy Bot", 3.7],
                    ["Mega Bot", .3]
                ] : "Aquatic" === o ? [
                    ["Old Boot", 15],
                    ["Jellyfish", 15],
                    ["Clownfish", 15],
                    ["Frog", 15],
                    ["Crab", 15],
                    ["Pufferfish", 6.8],
                    ["Blobfish", 6.8],
                    ["Octopus", 6.8],
                    ["Narwhal", 3.9],
                    ["Baby Shark", .5],
                    ["Megalodon", .2]
                ] : "Safari" === o ? [
                    ["Panda", 15],
                    ["Sloth", 15],
                    ["Tenrec", 15],
                    ["Flamingo", 15],
                    ["Zebra", 15],
                    ["Elephant", 7],
                    ["Lemur", 7],
                    ["Peacock", 7],
                    ["Chameleon", 3.48],
                    ["Lion", .5],
                    ["Rainbow Panda", .02]
                ] : "Dino" === o ? [
                    ["Amber", 19.5],
                    ["Dino Egg", 19.5],
                    ["Dino Fossil", 19.5],
                    ["Stegosaurus", 19.5],
                    ["Velociraptor", 9],
                    ["Brontosaurus", 9],
                    ["Triceratops", 3.7],
                    ["Tyrannosaurus Rex", .3]
                ] : "Ice Monster" === o ? [
                    ["Ice Bat", 19.5],
                    ["Ice Bug", 19.5],
                    ["Ice Elemental", 19.5],
                    ["Rock Monster", 19.5],
                    ["Dink", 8.5],
                    ["Donk", 8.5],
                    ["Bush Monster", 4.5],
                    ["Yeti", .35],
                    ["Ice Slime", .08],
                    ["Frozen Fossil", .05],
                    ["Ice Crab", .02]
                ] : []
            },
            n = {
                Medieval: 15,
                Breakfast: 15,
                Wonderland: 15,
                Space: 20,
                Bot: 20,
                Aquatic: 20,
                Safari: 20,
                Dino: 25,
                "Ice Monster": 25
            }
    },
    mkC0: function(o, a, e) {
        "use strict";
        a.a = {
            Chick: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
            Chicken: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
            Cow: "https://media.blooket.com/image/upload/v1556829562/Blooks/cow.svg",
            Goat: "https://media.blooket.com/image/upload/v1556829562/Blooks/goat.svg",
            Horse: "https://media.blooket.com/image/upload/v1556829562/Blooks/horse.svg",
            Pig: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
            Sheep: "https://media.blooket.com/image/upload/v1556829564/Blooks/sheep.svg",
            Duck: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg",
            Dog: "https://media.blooket.com/image/upload/v1556831934/Blooks/dog.svg",
            Cat: "https://media.blooket.com/image/upload/v1556831934/Blooks/cat.svg",
            Rabbit: "https://media.blooket.com/image/upload/v1556831935/Blooks/rabbit.svg",
            Goldfish: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
            Hamster: "https://media.blooket.com/image/upload/v1556831934/Blooks/hamster.svg",
            Turtle: "https://media.blooket.com/image/upload/v1556831935/Blooks/turtle.svg",
            Kitten: "https://media.blooket.com/image/upload/v1556831934/Blooks/kitten.svg",
            Puppy: "https://media.blooket.com/image/upload/v1556831934/Blooks/puppy.svg",
            Bear: "https://media.blooket.com/image/upload/v1556832316/Blooks/bear.svg",
            Moose: "https://media.blooket.com/image/upload/v1556832316/Blooks/moose.svg",
            Fox: "https://media.blooket.com/image/upload/v1556832316/Blooks/fox.svg",
            Raccoon: "https://media.blooket.com/image/upload/v1556832316/Blooks/raccoon.svg",
            Squirrel: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
            Owl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
            Hedgehog: "https://media.blooket.com/image/upload/v1556832316/Blooks/hedgehog.svg",
            "Baby Penguin": "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
            Penguin: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
            "Arctic Fox": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
            "Snowy Owl": "https://media.blooket.com/image/upload/v1566679726/Blooks/snowyOwl.svg",
            "Polar Bear": "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
            "Arctic Hare": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
            Seal: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
            Walrus: "https://media.blooket.com/image/upload/v1582775344/Blooks/walrus.svg",
            Tiger: "https://media.blooket.com/image/upload/v1566681190/Blooks/tiger.svg",
            Panther: "https://media.blooket.com/image/upload/v1566681189/Blooks/panther.svg",
            Cockatoo: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
            Orangutan: "https://media.blooket.com/image/upload/v1566681188/Blooks/orangutan.svg",
            Anaconda: "https://media.blooket.com/image/upload/v1566681187/Blooks/anaconda.svg",
            Macaw: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
            Jaguar: "https://media.blooket.com/image/upload/v1566681188/Blooks/jaguar.svg",
            Capuchin: "https://media.blooket.com/image/upload/v1566681187/Blooks/capuchinMonkey.svg",
            Toucan: "https://media.blooket.com/image/upload/v1566681191/Blooks/toucan.svg",
            Parrot: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
            Elf: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
            Witch: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
            Wizard: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
            Fairy: "https://media.blooket.com/image/upload/v1566683612/Blooks/fairy.svg",
            "Slime Monster": "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
            Jester: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
            Dragon: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
            Unicorn: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
            Queen: "https://media.blooket.com/image/upload/v1566683612/Blooks/queen.svg",
            King: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
            "Agent Owl": "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
            "Master Elf": "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
            "Phantom King": "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
            "Snow Globe": "https://media.blooket.com/image/upload/v1575848338/Blooks/snowGlobe.svg",
            "Holiday Gift": "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayGift.svg",
            "Hot Chocolate": "https://media.blooket.com/image/upload/v1575848338/Blooks/hotChocolate.svg",
            "Gingerbread Man": "https://media.blooket.com/image/upload/v1575604963/Blooks/gingerbreadMan.svg",
            "Gingerbread House": "https://media.blooket.com/image/upload/v1575605860/Blooks/gingerbreadHouse.svg",
            "Holiday Wreath": "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayWreath.svg",
            Snowman: "https://media.blooket.com/image/upload/v1575604963/Blooks/snowman.svg",
            "Santa Claus": "https://media.blooket.com/image/upload/v1575606016/Blooks/santaClaus.svg",
            "Frost Wreath": "https://media.blooket.com/image/upload/v1607304954/Blooks/frostWreath.svg",
            "Tropical Globe": "https://media.blooket.com/image/upload/v1607304954/Blooks/tropicalGlobe.svg",
            "Two of Spades": "https://media.blooket.com/image/upload/v1582080264/Blooks/twoOfSpades.svg",
            "Eat Me": "https://media.blooket.com/image/upload/v1620676285/Blooks/eat.svg",
            "Drink Me": "https://media.blooket.com/image/upload/v1620676285/Blooks/drink.svg",
            Alice: "https://media.blooket.com/image/upload/v1582080264/Blooks/alice.svg",
            "Queen of Hearts": "https://media.blooket.com/image/upload/v1582080266/Blooks/queenOfHearts.svg",
            Dormouse: "https://media.blooket.com/image/upload/v1582080264/Blooks/dormouse.svg",
            "White Rabbit": "https://media.blooket.com/image/upload/v1582080266/Blooks/whiteRabbit.svg",
            "Cheshire Cat": "https://media.blooket.com/image/upload/v1582080264/Blooks/cheshireCat.svg",
            "Mad Hatter": "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
            "King of Hearts": "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
            Caterpillar: "https://media.blooket.com/image/upload/v1581831553/Blooks/caterpillar.svg",
            Toast: "https://media.blooket.com/image/upload/v1584483097/Blooks/toast.svg",
            Cereal: "https://media.blooket.com/image/upload/v1584483097/Blooks/cereal.svg",
            Yogurt: "https://media.blooket.com/image/upload/v1584483097/Blooks/yogurt.svg",
            "Breakfast Combo": "https://media.blooket.com/image/upload/v1584483097/Blooks/breakfastCombo.svg",
            "Orange Juice": "https://media.blooket.com/image/upload/v1584483099/Blooks/orangeJuice.svg",
            Milk: "https://media.blooket.com/image/upload/v1584483097/Blooks/milk.svg",
            Waffle: "https://media.blooket.com/image/upload/v1584483099/Blooks/waffle.svg",
            Pancakes: "https://media.blooket.com/image/upload/v1584483099/Blooks/pancakes.svg",
            "French Toast": "https://media.blooket.com/image/upload/v1584483097/Blooks/frenchToast.svg",
            Pizza: "https://media.blooket.com/image/upload/v1599952272/Blooks/pizza.svg",
            Sandwich: "https://media.blooket.com/image/upload/v1599952272/Blooks/sandwich.svg",
            "Light Blue": "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
            Black: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
            Red: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
            Purple: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
            Pink: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
            Orange: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
            Lime: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
            Green: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
            Teal: "https://media.blooket.com/image/upload/v1594135104/Blooks/colors/tealBlook.svg",
            Tan: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/tanBlook.svg",
            Maroon: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/maroonBlook.svg",
            Gray: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/grayBlook.svg",
            Mint: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/mintBlook.svg",
            Salmon: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/salmonColorBlook.svg",
            Burgandy: "https://media.blooket.com/image/upload/v1594135101/Blooks/colors/burgandyBlook.svg",
            "Baby Blue": "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/babyBlueBlook.svg",
            Dust: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dustBlook.svg",
            Brown: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/brownBlook.svg",
            "Dull Blue": "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dullBlueBlook.svg",
            Yellow: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/yellowBlook.svg",
            Blue: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/blueBlook.svg",
            Pumpkin: "https://media.blooket.com/image/upload/v1601168910/Blooks/pumpkin.svg",
            "Swamp Monster": "https://media.blooket.com/image/upload/v1601168910/Blooks/swampMonster.svg",
            Frankenstein: "https://media.blooket.com/image/upload/v1601168910/Blooks/frankenstein.svg",
            Vampire: "https://media.blooket.com/image/upload/v1601168910/Blooks/vampire.svg",
            Zombie: "https://media.blooket.com/image/upload/v1601168912/Blooks/zombie.svg",
            Mummy: "https://media.blooket.com/image/upload/v1601168910/Blooks/mummy.svg",
            Werewolf: "https://media.blooket.com/image/upload/v1601168912/Blooks/werewolf.svg",
            Ghost: "https://media.blooket.com/image/upload/v1601168910/Blooks/ghost.svg",
            "Haunted Pumpkin": "https://media.blooket.com/image/upload/v1641935071/Blooks/hauntedPumpkin.svg",
            "Spooky Pumpkin": "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyPumpkin.svg",
            "Spooky Mummy": "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyMummy.svg",
            "Spooky Ghost": "https://media.blooket.com/image/upload/v1603684063/Blooks/spookyGhost.svg",
            Earth: "https://media.blooket.com/image/upload/v1613003831/Blooks/earth.svg",
            Meteor: "https://media.blooket.com/image/upload/v1613003835/Blooks/meteor.svg",
            Stars: "https://media.blooket.com/image/upload/v1613003833/Blooks/stars.svg",
            Alien: "https://media.blooket.com/image/upload/v1613004231/Blooks/alien.svg",
            Planet: "https://media.blooket.com/image/upload/v1613003832/Blooks/planet.svg",
            UFO: "https://media.blooket.com/image/upload/v1613004088/Blooks/UFO.svg",
            Spaceship: "https://media.blooket.com/image/upload/v1613003833/Blooks/spaceship.svg",
            Astronaut: "https://media.blooket.com/image/upload/v1613003835/Blooks/astronaut.svg",
            "Red Astronaut": "https://media.blooket.com/image/upload/v1613003832/Blooks/redAstronaut.svg",
            "Blue Astronaut": "https://media.blooket.com/image/upload/v1613003835/Blooks/blueAstronaut.svg",
            "Green Astronaut": "https://media.blooket.com/image/upload/v1613003832/Blooks/greenAstronaut.svg",
            "Pink Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/pinkAstronaut.svg",
            "Orange Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/orangeAstronaut.svg",
            "Yellow Astronaut": "https://media.blooket.com/image/upload/v1613003833/Blooks/yellowAstronaut.svg",
            "Black Astronaut": "https://media.blooket.com/image/upload/v1613003835/Blooks/blackAstronaut.svg",
            "Purple Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
            "Brown Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/brownAstronaut.svg",
            "Cyan Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/cyanAstronaut.svg",
            "Lime Astronaut": "https://media.blooket.com/image/upload/v1613003834/Blooks/limeAstronaut.svg",
            "Tim the Alien": "https://media.blooket.com/image/upload/v1627827707/Blooks/timTheAlien.svg",
            "Rainbow Astronaut": "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
            "Lil Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/lilBot.svg",
            "Lovely Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/lovelyBot.svg",
            "Angry Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/angryBot.svg",
            "Happy Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/happyBot.svg",
            Watson: "https://media.blooket.com/image/upload/v1620677388/Blooks/watson.svg",
            "Buddy Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/buddyBot.svg",
            "Brainy Bot": "https://media.blooket.com/image/upload/v1620677386/Blooks/brainyBot.svg",
            "Mega Bot": "https://media.blooket.com/image/upload/v1620677388/Blooks/megaBot.svg",
            "Old Boot": "https://media.blooket.com/image/upload/v1628956580/Blooks/oldBoot.svg",
            Jellyfish: "https://media.blooket.com/image/upload/v1628956578/Blooks/jellyfish.svg",
            Clownfish: "https://media.blooket.com/image/upload/v1628956576/Blooks/clownfish.svg",
            Frog: "https://media.blooket.com/image/upload/v1628956578/Blooks/frog.svg",
            Crab: "https://media.blooket.com/image/upload/v1628956578/Blooks/crab.svg",
            Pufferfish: "https://media.blooket.com/image/upload/v1628956580/Blooks/pufferFish.svg",
            Blobfish: "https://media.blooket.com/image/upload/v1628956576/Blooks/blobfish.svg",
            Octopus: "https://media.blooket.com/image/upload/v1628956580/Blooks/octopus.svg",
            Narwhal: "https://media.blooket.com/image/upload/v1628956578/Blooks/narwhal.svg",
            "Baby Shark": "https://media.blooket.com/image/upload/v1628956576/Blooks/babyShark.svg",
            Megalodon: "https://media.blooket.com/image/upload/v1628956576/Blooks/megalodon.svg",
            "Rainbow Jellyfish": "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowJellyfish.svg",
            "Blizzard Clownfish": "https://media.blooket.com/image/upload/v1628956578/Blooks/blizzardClownfish.svg",
            "Lovely Frog": "https://media.blooket.com/image/upload/v1628956576/Blooks/lovelyFrog.svg",
            "Lucky Frog": "https://media.blooket.com/image/upload/v1647451022/Blooks/luckyFrog.svg",
            "Spring Frog": "https://media.blooket.com/image/upload/v1649909367/Blooks/springFrog.svg",
            "Poison Dart Frog": "https://media.blooket.com/image/upload/v1628956580/Blooks/poisonDartFrog.svg",
            "Lemon Crab": "https://media.blooket.com/image/upload/v1628956576/Blooks/lemonCrab.svg",
            "Pirate Pufferfish": "https://media.blooket.com/image/upload/v1641935517/Blooks/piratePufferfish.svg",
            "Donut Blobfish": "https://media.blooket.com/image/upload/v1641935517/Blooks/donutBlobfish.svg",
            "Crimson Octopus": "https://media.blooket.com/image/upload/v1628956578/Blooks/crimsonOctopus.svg",
            "Rainbow Narwhal": "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowNarwhal.svg",
            Panda: "https://media.blooket.com/image/upload/v1643835595/Blooks/panda.svg",
            Sloth: "https://media.blooket.com/image/upload/v1643835594/Blooks/sloth.svg",
            Tenrec: "https://media.blooket.com/image/upload/v1643835594/Blooks/tenrec.svg",
            Flamingo: "https://media.blooket.com/image/upload/v1643835592/Blooks/flamingo.svg",
            Zebra: "https://media.blooket.com/image/upload/v1643835592/Blooks/zebra.svg",
            Elephant: "https://media.blooket.com/image/upload/v1643835592/Blooks/elephant.svg",
            Lemur: "https://media.blooket.com/image/upload/v1643835594/Blooks/lemur.svg",
            Peacock: "https://media.blooket.com/image/upload/v1643835594/Blooks/peacock.svg",
            Chameleon: "https://media.blooket.com/image/upload/v1643835592/Blooks/chameleon.svg",
            Lion: "https://media.blooket.com/image/upload/v1643835592/Blooks/lion.svg",
            "Rainbow Panda": "https://media.blooket.com/image/upload/v1643835594/Blooks/rainbowPanda.svg",
            "White Peacock": "https://media.blooket.com/image/upload/v1643835592/Blooks/whitePeacock.svg",
            "Tiger Zebra": "https://media.blooket.com/image/upload/v1643835596/Blooks/tigerZebra.svg",
            Amber: "https://media.blooket.com/image/upload/v1650433846/Blooks/amber.svg",
            "Dino Egg": "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoEgg.svg",
            "Dino Fossil": "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoFossil.svg",
            Stegosaurus: "https://media.blooket.com/image/upload/v1650433846/Blooks/stegosaurus.svg",
            Velociraptor: "https://media.blooket.com/image/upload/v1650433848/Blooks/velociraptor.svg",
            Brontosaurus: "https://media.blooket.com/image/upload/v1650433846/Blooks/brontosaurus.svg",
            Triceratops: "https://media.blooket.com/image/upload/v1650433848/Blooks/triceratops.svg",
            "Tyrannosaurus Rex": "https://media.blooket.com/image/upload/v1650433848/Blooks/tyrannosaurusRex.svg",
            "Ice Bat": "https://media.blooket.com/image/upload/v1663061338/Blooks/iceBat.svg",
            "Ice Bug": "https://media.blooket.com/image/upload/v1663061339/Blooks/iceBug.svg",
            "Ice Elemental": "https://media.blooket.com/image/upload/v1663061336/Blooks/iceElemental.svg",
            "Rock Monster": "https://media.blooket.com/image/upload/v1663061337/Blooks/rockMonster.svg",
            Dink: "https://media.blooket.com/image/upload/v1663061338/Blooks/dink.svg",
            Donk: "https://media.blooket.com/image/upload/v1663061338/Blooks/donk.svg",
            "Bush Monster": "https://media.blooket.com/image/upload/v1663061336/Blooks/bushMonster.svg",
            Yeti: "https://media.blooket.com/image/upload/v1663061336/Blooks/yeti.svg",
            "Ice Slime": "https://media.blooket.com/image/upload/v1663061336/Blooks/iceSlime.svg",
            "Frozen Fossil": "https://media.blooket.com/image/upload/v1663061338/Blooks/frozenFossil.svg",
            "Ice Crab": "https://media.blooket.com/image/upload/v1663061336/Blooks/iceCrab.svg"
        }
    },
    pMTK: function(o, a, e) {
        "use strict";
        a.a = function(o) {
            switch (o) {
                case "Elf":
                case "Witch":
                case "Wizard":
                case "Fairy":
                case "Slime Monster":
                    return "Uncommon";
                case "Jester":
                case "Dragon":
                    return "Rare";
                case "Unicorn":
                    return "Epic";
                case "Queen":
                    return "Rare";
                case "King":
                    return "Legendary";
                case "Agent Owl":
                case "Master Elf":
                    return "Chroma";
                case "Phantom King":
                    return "Mystical";
                case "Snow Globe":
                case "Holiday Gift":
                case "Hot Chocolate":
                case "Holiday Wreath":
                    return "Uncommon";
                case "Gingerbread Man":
                case "Gingerbread House":
                    return "Rare";
                case "Snowman":
                    return "Epic";
                case "Santa Claus":
                    return "Legendary";
                case "Frost Wreath":
                case "Tropical Globe":
                    return "Chroma";
                case "Two of Spades":
                case "Eat Me":
                case "Drink Me":
                case "Alice":
                case "Queen of Hearts":
                    return "Uncommon";
                case "Dormouse":
                case "White Rabbit":
                case "Cheshire Cat":
                    return "Rare";
                case "Caterpillar":
                case "Mad Hatter":
                    return "Epic";
                case "King of Hearts":
                    return "Legendary";
                case "Toast":
                case "Cereal":
                case "Yogurt":
                case "Breakfast Combo":
                case "Orange Juice":
                case "Milk":
                    return "Uncommon";
                case "Waffle":
                case "Pancakes":
                    return "Rare";
                case "French Toast":
                case "Pizza":
                case "Sandwich":
                    return "Epic";
                case "Pumpkin":
                case "Swamp Monster":
                case "Frankenstein":
                case "Vampire":
                    return "Uncommon";
                case "Zombie":
                case "Mummy":
                    return "Rare";
                case "Werewolf":
                    return "Epic";
                case "Ghost":
                    return "Legendary";
                case "Haunted Pumpkin":
                case "Spooky Pumpkin":
                case "Spooky Mummy":
                    return "Chroma";
                case "Spooky Ghost":
                    return "Mystical";
                case "Earth":
                case "Meteor":
                case "Stars":
                case "Alien":
                    return "Uncommon";
                case "Planet":
                case "UFO":
                    return "Rare";
                case "Spaceship":
                    return "Epic";
                case "Astronaut":
                    return "Legendary";
                case "Red Astronaut":
                case "Blue Astronaut":
                case "Green Astronaut":
                case "Pink Astronaut":
                case "Orange Astronaut":
                case "Yellow Astronaut":
                case "Black Astronaut":
                case "Purple Astronaut":
                case "Brown Astronaut":
                case "Cyan Astronaut":
                case "Lime Astronaut":
                    return "Chroma";
                case "Tim the Alien":
                case "Rainbow Astronaut":
                    return "Mystical";
                case "Lil Bot":
                case "Lovely Bot":
                case "Angry Bot":
                case "Happy Bot":
                    return "Uncommon";
                case "Watson":
                case "Buddy Bot":
                    return "Rare";
                case "Brainy Bot":
                    return "Epic";
                case "Mega Bot":
                    return "Legendary";
                case "Old Boot":
                case "Jellyfish":
                case "Clownfish":
                case "Frog":
                case "Crab":
                    return "Uncommon";
                case "Pufferfish":
                case "Blobfish":
                case "Octopus":
                    return "Rare";
                case "Narwhal":
                    return "Epic";
                case "Baby Shark":
                case "Megalodon":
                    return "Legendary";
                case "Rainbow Jellyfish":
                case "Blizzard Clownfish":
                case "Lovely Frog":
                case "Lucky Frog":
                case "Spring Frog":
                case "Poison Dart Frog":
                case "Lemon Crab":
                case "Pirate Pufferfish":
                case "Donut Blobfish":
                case "Crimson Octopus":
                case "Rainbow Narwhal":
                    return "Chroma";
                case "Panda":
                case "Sloth":
                case "Tenrec":
                case "Flamingo":
                case "Zebra":
                    return "Uncommon";
                case "Elephant":
                case "Lemur":
                case "Peacock":
                    return "Rare";
                case "Chameleon":
                    return "Epic";
                case "Lion":
                    return "Legendary";
                case "Rainbow Panda":
                case "White Peacock":
                case "Tiger Zebra":
                    return "Chroma";
                case "Amber":
                case "Dino Egg":
                case "Dino Fossil":
                case "Stegosaurus":
                    return "Uncommon";
                case "Velociraptor":
                case "Brontosaurus":
                    return "Rare";
                case "Triceratops":
                    return "Epic";
                case "Tyrannosaurus Rex":
                    return "Legendary";
                case "Ice Bat":
                case "Ice Bug":
                case "Ice Elemental":
                case "Rock Monster":
                    return "Uncommon";
                case "Dink":
                case "Donk":
                    return "Rare";
                case "Bush Monster":
                    return "Epic";
                case "Yeti":
                    return "Legendary";
                case "Ice Slime":
                case "Frozen Fossil":
                case "Ice Crab":
                    return "Chroma";
                default:
                    return "Common"
            }
        }
    },
    pz6q: function(o, a, e) {
        "use strict";
        a.a = {
            Toast: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
            Cereal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
            Yogurt: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
            "Breakfast Combo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
            "Orange Juice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
            Milk: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
            Waffle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
            Pancakes: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
            "French Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg"
        }
    },
    qspi: function(o, a, e) {
        "use strict";
        var t, s, r = e("74sb"),
            l = ["basil", "gold", "crypto"],
            n = function(o) {
                var a = !1;
                l.forEach((function(e) {
                    o.toLowerCase().includes(e) && (a = !0)
                })), a && (Object(r.u)(), window.location.href = "https://www.blooket.com/")
            };
        window.alert = n, window.prompt = n, window.confirm = n, t = new URL(window.location.href).hostname, s = !1, ["blooket.com", "packcomputing.com", "localhost", "127.0.0.1"].forEach((function(o) {
                t.endsWith(o) && (s = !0)
            })), s || (window.location.href = "https://www.blooket.com/terms"),
            function() {
                var o = !1;
                window.blooketUtility && (o = !0), localStorage.getItem("blooket-utility") && (o = !0), localStorage.removeItem("blooket-utility"), o && (window.location.href = "https://www.blooket.com/terms"), delete window.blooketUtility, delete window._fetch;
                var a = document.createElement("iframe");
                a.style.display = "none", document.body.appendChild(a);
                var e = a.contentWindow;
                window.fetch = e.fetch, XMLHttpRequest.prototype.open = e.XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send = e.XMLHttpRequest.prototype.send, String.prototype.concat = e.String.prototype.concat, window.ontouchstart = null, window.onkeydown = null
            }()
    },
    sfIM: function(o, a, e) {
        "use strict";
        e.d(a, "a", (function() {
            return t
        }));
        a.b = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus"];
        var t = ["Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"]
    },
    uFVu: function(o, a, e) {
        "use strict";
        a.a = {
            Witch: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
            Wizard: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
            Elf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
            Fairy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
            "Slime Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
            Jester: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
            Dragon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
            Queen: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
            Unicorn: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
            King: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg"
        }
    },
    uzwL: function(o, a, e) {
        "use strict";

        function t(o, a) {
            var e = Object.keys(o);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(o);
                a && (t = t.filter((function(a) {
                    return Object.getOwnPropertyDescriptor(o, a).enumerable
                }))), e.push.apply(e, t)
            }
            return e
        }

        function s(o) {
            for (var a = 1; a < arguments.length; a++) {
                var e = null != arguments[a] ? arguments[a] : {};
                a % 2 ? t(Object(e), !0).forEach((function(a) {
                    r(o, a, e[a])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : t(Object(e)).forEach((function(a) {
                    Object.defineProperty(o, a, Object.getOwnPropertyDescriptor(e, a))
                }))
            }
            return o
        }

        function r(o, a, e) {
            return a in o ? Object.defineProperty(o, a, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[a] = e, o
        }
        var l = s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s({}, {
            Chick: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Happy Hatchers"
            },
            Chicken: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Early Birds"
            },
            Cow: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/cow.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Udder Chaos"
            },
            Goat: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/goat.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Goatee OG's"
            },
            Horse: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/horse.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Radical Racers"
            },
            Pig: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Orderly Oinkers"
            },
            Sheep: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829564/Blooks/sheep.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Wool Winners"
            },
            Duck: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Quirky Quackers"
            }
        }), {
            Dog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/dog.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Diligent Doggos"
            },
            Cat: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/cat.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Meow Mates"
            },
            Rabbit: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831935/Blooks/rabbit.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Fluffy Bunnies"
            },
            Goldfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Pretty Fishies"
            },
            Hamster: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/hamster.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "HAMSTA TIME"
            },
            Turtle: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831935/Blooks/turtle.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Shell Shocked"
            },
            Kitten: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/kitten.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Purrfect People"
            },
            Puppy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/puppy.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Super Puppers"
            }
        }), {
            Bear: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/bear.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Bear Necessities"
            },
            Moose: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/moose.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Moose Caboose"
            },
            Fox: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/fox.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Swifty Swipers"
            },
            Raccoon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/raccoon.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Trash Pandas"
            },
            Squirrel: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Nutty Buddies"
            },
            Owl: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Hooooooooo"
            },
            Hedgehog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/hedgehog.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Spikey Friends"
            }
        }), {
            Tiger: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681190/Blooks/tiger.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Brave Bengals"
            },
            Orangutan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/orangutan.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Hairy Hipsters"
            },
            Cockatoo: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Not Chickens"
            },
            Parrot: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Polly's People"
            },
            Anaconda: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681187/Blooks/anaconda.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Sneaky Snakes"
            },
            Jaguar: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/jaguar.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Super Spotters"
            },
            Macaw: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "CA CAWWWW"
            },
            Toucan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681191/Blooks/toucan.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Toucan't Beat Us"
            },
            Panther: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681189/Blooks/panther.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Wakanda Forever"
            },
            Capuchin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681187/Blooks/capuchinMonkey.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Monkey Madness"
            }
        }), {
            "Snowy Owl": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/snowyOwl.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Kool Kids"
            },
            "Polar Bear": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Snowy Students"
            },
            "Arctic Fox": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Chilly Chosen"
            },
            "Baby Penguin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Party Penguins"
            },
            Penguin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Better Birds"
            },
            "Arctic Hare": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Arctic Achievers"
            },
            Seal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Super Seals"
            },
            Walrus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/walrus.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Wordy Walruses"
            }
        }), {
            Witch: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Cauldron City"
            },
            Wizard: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Wiz Kids"
            },
            Elf: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Agile Archers"
            },
            Fairy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/fairy.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Mighty Myths"
            },
            "Slime Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Slimy McSlimes"
            },
            Jester: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Jolly Jokesters"
            },
            Dragon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Fire Hazards"
            },
            Queen: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/queen.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Royal Rebels"
            },
            Unicorn: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
                set: "Medieval",
                rarity: "Epic",
                teamName: "Land Narwhals"
            },
            King: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
                set: "Medieval",
                rarity: "Legendary",
                teamName: "THE SQUAD"
            },
            "Agent Owl": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
                set: "Medieval",
                rarity: "Chroma",
                teamName: "Secret Agents"
            },
            "Master Elf": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                set: "Medieval",
                rarity: "Chroma",
                teamName: "The Masters"
            },
            "Phantom King": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                set: "Medieval",
                rarity: "Mystical",
                teamName: "The True Kings"
            }
        }), {
            "Two of Spades": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/twoOfSpades.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Dueling Deuces"
            },
            "Eat Me": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620676285/Blooks/eat.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Hungry Heroes"
            },
            "Drink Me": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620676285/Blooks/drink.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Potion Power"
            },
            Alice: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/alice.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Wonderland"
            },
            "Queen of Hearts": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/queenOfHearts.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "❤️❤️❤️"
            },
            Dormouse: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/dormouse.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Short and Stout"
            },
            "White Rabbit": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/whiteRabbit.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Classy Classmates"
            },
            "Cheshire Cat": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/cheshireCat.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Cool Cats"
            },
            Caterpillar: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1581831553/Blooks/caterpillar.svg",
                set: "Wonderland",
                rarity: "Epic",
                teamName: "Caterpillar Cuties"
            },
            "Mad Hatter": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
                set: "Wonderland",
                rarity: "Epic",
                teamName: "Goofy Gurus"
            },
            "King of Hearts": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
                set: "Wonderland",
                rarity: "Legendary",
                teamName: "The Royals"
            }
        }), {
            Toast: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/toast.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Toasty Teammates"
            },
            Cereal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/cereal.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Fruity Friends"
            },
            Yogurt: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/yogurt.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Yogurt Youngins"
            },
            "Breakfast Combo": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/breakfastCombo.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Combo Cooks"
            },
            "Orange Juice": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/orangeJuice.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "OJ OG's"
            },
            Milk: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/milk.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Got Milk?"
            },
            Waffle: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/waffle.svg",
                set: "Breakfast",
                rarity: "Rare",
                teamName: "Holey Pancakes"
            },
            Pancakes: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/pancakes.svg",
                set: "Breakfast",
                rarity: "Rare",
                teamName: "Flat Waffles"
            },
            "French Toast": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/frenchToast.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Bonjour Boomers"
            },
            Pizza: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1599952272/Blooks/pizza.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Pizza Popstars"
            },
            Sandwich: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1599952272/Blooks/sandwich.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Super Sandwiches"
            }
        }), {
            Earth: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/earth.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Earthlings"
            },
            Meteor: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/meteor.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Meteorites"
            },
            Stars: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/stars.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Shooting Stars"
            },
            Alien: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613004231/Blooks/alien.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Awesome Aliens"
            },
            Planet: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/planet.svg",
                set: "Space",
                rarity: "Rare",
                teamName: "Galactic Warriors"
            },
            UFO: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613004088/Blooks/UFO.svg",
                set: "Space",
                rarity: "Rare",
                teamName: "Unidentified Students"
            },
            Spaceship: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/spaceship.svg",
                set: "Space",
                rarity: "Epic",
                teamName: "We Have a Problem"
            },
            Astronaut: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/astronaut.svg",
                set: "Space",
                rarity: "Legendary",
                teamName: "Astro Aviators"
            },
            "Red Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/redAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Red Crewmates"
            },
            "Blue Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/blueAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Blue Crewmates"
            },
            "Green Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/greenAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Green Crewmates"
            },
            "Pink Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/pinkAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Pink Crewmates"
            },
            "Orange Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/orangeAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Orange Crewmates"
            },
            "Yellow Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/yellowAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Yellow Crewmates"
            },
            "Black Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/blackAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Black Crewmates"
            },
            "Purple Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Purple Crewmates"
            },
            "Brown Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/brownAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Brown Crewmates"
            },
            "Cyan Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/cyanAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Cyan Crewmates"
            },
            "Lime Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003834/Blooks/limeAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Lime Crewmates"
            },
            "Tim the Alien": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1627827707/Blooks/timTheAlien.svg",
                set: "Space",
                rarity: "Mystical",
                teamName: "Tim's Friends"
            },
            "Rainbow Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
                set: "Space",
                rarity: "Mystical",
                teamName: "RAINBOW"
            }
        }), {
            "Lil Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/lilBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Lil Bots"
            },
            "Lovely Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/lovelyBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Lovely Leaders"
            },
            "Angry Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/angryBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Evil Geniuses"
            },
            "Happy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/happyBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "The Calculators"
            },
            Watson: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677388/Blooks/watson.svg",
                set: "Bot",
                rarity: "Rare",
                teamName: "Sophistication"
            },
            "Buddy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/buddyBot.svg",
                set: "Bot",
                rarity: "Rare",
                teamName: "Best Buddies"
            },
            "Brainy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/brainyBot.svg",
                set: "Bot",
                rarity: "Epic",
                teamName: "Big Brain Bots"
            },
            "Mega Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677388/Blooks/megaBot.svg",
                set: "Bot",
                rarity: "Legendary",
                teamName: "THE MEGA BOTS"
            }
        }), {
            "Old Boot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/oldBoot.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Da Boots"
            },
            Jellyfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/jellyfish.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Jelly Jumpers"
            },
            Clownfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/clownfish.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Nemo Extras"
            },
            Frog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/frog.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Hippity Hoppers"
            },
            Crab: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/crab.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Cool Claws"
            },
            Pufferfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/pufferFish.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "TEAM BIG"
            },
            Blobfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/blobfish.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "blob blob blob"
            },
            Octopus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/octopus.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "Team 8"
            },
            Narwhal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/narwhal.svg",
                set: "Aquatic",
                rarity: "Epic",
                teamName: "NARWHALLLLL"
            },
            "Baby Shark": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/babyShark.svg",
                set: "Aquatic",
                rarity: "Legendary",
                teamName: "BABY SHARK"
            },
            Megalodon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/megalodon.svg",
                set: "Aquatic",
                rarity: "Legendary",
                teamName: "Megan's the Name"
            },
            "Rainbow Jellyfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowJellyfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Underwater Disco"
            },
            "Blizzard Clownfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/blizzardClownfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Winter Circus"
            },
            "Lovely Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/lovelyFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Cute Companions"
            },
            "Lucky Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1647451022/Blooks/luckyFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Lucky Leapers"
            },
            "Spring Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1649909367/Blooks/springFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Spring Spirit"
            },
            "Poison Dart Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/poisonDartFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "TOXIC HAZARD"
            },
            "Lemon Crab": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/lemonCrab.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Citrus Claws"
            },
            "Pirate Pufferfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935517/Blooks/piratePufferfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Perfect Pirates"
            },
            "Donut Blobfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935517/Blooks/donutBlobfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Donut Mess Up"
            },
            "Crimson Octopus": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/crimsonOctopus.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Red Team 8"
            },
            "Rainbow Narwhal": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowNarwhal.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Sea Unicorns"
            }
        }), {
            Panda: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835595/Blooks/panda.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Prime Pandas"
            },
            Sloth: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/sloth.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Silly Sloths"
            },
            Tenrec: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/tenrec.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Troubling Tenrecs"
            },
            Flamingo: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/flamingo.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Pink And Proud"
            },
            Zebra: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/zebra.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Super Stripes"
            },
            Elephant: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/elephant.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Erudite Elephants"
            },
            Lemur: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/lemur.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Leaping Lemurs"
            },
            Peacock: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/peacock.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Fearless Feathers"
            },
            Chameleon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/chameleon.svg",
                set: "Safari",
                rarity: "Epic",
                teamName: "Cool Chameleons"
            },
            Lion: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/lion.svg",
                set: "Safari",
                rarity: "Legendary",
                teamName: "The Pride"
            },
            "Rainbow Panda": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/rainbowPanda.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "The Rainbows"
            },
            "White Peacock": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/whitePeacock.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "Fast Feathers"
            },
            "Tiger Zebra": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835596/Blooks/tigerZebra.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "Agent Zs"
            }
        }), {
            Amber: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/amber.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Ambitious Ambers"
            },
            "Dino Egg": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoEgg.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Eggcellence"
            },
            "Dino Fossil": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoFossil.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Fighting Fossils"
            },
            Stegosaurus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/stegosaurus.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Hearty Herbivores"
            },
            Velociraptor: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/velociraptor.svg",
                set: "Dino",
                rarity: "Rare",
                teamName: "Prehistorics"
            },
            Brontosaurus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/brontosaurus.svg",
                set: "Dino",
                rarity: "Rare",
                teamName: "Big Giraffes"
            },
            Triceratops: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/triceratops.svg",
                set: "Dino",
                rarity: "Epic",
                teamName: "Daring Dinos"
            },
            "Tyrannosaurus Rex": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/tyrannosaurusRex.svg",
                set: "Dino",
                rarity: "Legendary",
                teamName: "The Terror"
            }
        }), {
            "Ice Bat": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/iceBat.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Frozen Wings"
            },
            "Ice Bug": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBug.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061339/Blooks/iceBug.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Bold Bugs"
            },
            "Ice Elemental": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceElemental.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceElemental.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "ICED"
            },
            "Rock Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/rockMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061337/Blooks/rockMonster.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Ready Rocks"
            },
            Dink: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/dink.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/dink.svg",
                set: "Ice Monster",
                rarity: "Rare",
                teamName: "Dink Donk 1"
            },
            Donk: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/donk.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/donk.svg",
                set: "Ice Monster",
                rarity: "Rare",
                teamName: "Dink Donk 2"
            },
            "Bush Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/bushMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/bushMonster.svg",
                set: "Ice Monster",
                rarity: "Epic",
                teamName: "Brave Bushes"
            },
            Yeti: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/yeti.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/yeti.svg",
                set: "Ice Monster",
                rarity: "Legendary",
                teamName: "Everest"
            },
            "Ice Slime": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceSlime.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceSlime.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "Slip n Slide"
            },
            "Frozen Fossil": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/frozenFossil.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/frozenFossil.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "Ice Age"
            },
            "Ice Crab": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceCrab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceCrab.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "ICE ICE BABY"
            }
        }), {
            "Snow Globe": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/snowGlobe.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Globetrotters"
            },
            "Holiday Gift": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayGift.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Generous Givers"
            },
            "Hot Chocolate": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/hotChocolate.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Cocoa Coziness"
            },
            "Holiday Wreath": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayWreath.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Wreath Wreckers"
            },
            "Gingerbread Man": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575604963/Blooks/gingerbreadMan.svg",
                set: "Blizzard",
                rarity: "Rare",
                teamName: "Cookie Crunchers"
            },
            "Gingerbread House": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575605860/Blooks/gingerbreadHouse.svg",
                set: "Blizzard",
                rarity: "Rare",
                teamName: "Healthy Houses"
            },
            Snowman: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575604963/Blooks/snowman.svg",
                set: "Blizzard",
                rarity: "Epic",
                teamName: "Summer Puddles"
            },
            "Santa Claus": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575606016/Blooks/santaClaus.svg",
                set: "Blizzard",
                rarity: "Legendary",
                teamName: "Santa's Squad"
            },
            "Frost Wreath": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1607304954/Blooks/frostWreath.svg",
                set: "Blizzard",
                rarity: "Chroma",
                teamName: "TEAM FREEZE"
            },
            "Tropical Globe": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1607304954/Blooks/tropicalGlobe.svg",
                set: "Blizzard",
                rarity: "Chroma",
                teamName: "WARM HUGS"
            }
        }), {
            Pumpkin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/pumpkin.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Pumpkin Smashers"
            },
            "Swamp Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/swampMonster.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Swamp Things"
            },
            Frankenstein: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/frankenstein.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "The Monsters"
            },
            Vampire: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/vampire.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Valiant Vampires"
            },
            Zombie: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168912/Blooks/zombie.svg",
                set: "Spooky",
                rarity: "Rare",
                teamName: "Walking Dead"
            },
            Mummy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/mummy.svg",
                set: "Spooky",
                rarity: "Rare",
                teamName: "Motivated Mummies"
            },
            Werewolf: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168912/Blooks/werewolf.svg",
                set: "Spooky",
                rarity: "Epic",
                teamName: "Werewolf Warriors"
            },
            Ghost: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/ghost.svg",
                set: "Spooky",
                rarity: "Legendary",
                teamName: "BOO!"
            },
            "Haunted Pumpkin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935071/Blooks/hauntedPumpkin.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Haunted Helpers"
            },
            "Spooky Pumpkin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyPumpkin.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Ghostly Geniuses"
            },
            "Spooky Mummy": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyMummy.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Spooky 'n' Scary"
            },
            "Spooky Ghost": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603684063/Blooks/spookyGhost.svg",
                set: "Spooky",
                rarity: "Mystical",
                teamName: "Spooksters"
            }
        }), {
            "Light Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Blooket Buds"
            },
            Black: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Black Team"
            },
            Red: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Red Team"
            },
            Purple: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Purple Team"
            },
            Pink: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Pink Team"
            },
            Orange: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Orange Team"
            },
            Lime: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Lime Team"
            },
            Green: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Green Team"
            },
            Teal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135104/Blooks/colors/tealBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Teal Team"
            },
            Tan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/tanBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Tan Team"
            },
            Maroon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/maroonBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Maroon Team"
            },
            Gray: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/grayBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Gray Team"
            },
            Mint: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/mintBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Mint Team"
            },
            Salmon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/salmonColorBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Salmon Team"
            },
            Burgandy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135101/Blooks/colors/burgandyBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Burgandy Team"
            },
            "Baby Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/babyBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Baby Blue Team"
            },
            Dust: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dustBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Dust Team"
            },
            Brown: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/brownBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Brown Team"
            },
            "Dull Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dullBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Dim Blue Team"
            },
            Yellow: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/yellowBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Yellow Team"
            },
            Blue: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/blueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Blue Team"
            }
        });
        a.a = l
    },
    wUzO: function(o, a, e) {
        "use strict";
        a.a = {
            "Snow Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
            "Holiday Gift": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
            "Hot Chocolate": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
            "Holiday Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
            "Gingerbread Man": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
            "Gingerbread House": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
            Snowman: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
            "Santa Claus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg"
        }
    },
    yjv5: function(o, a, e) {
        "use strict";
        a.a = {
            "Two of Spades": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
            "Eat Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
            "Drink Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
            Alice: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
            "Queen of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
            Dormouse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
            "White Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
            "Cheshire Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
            Caterpillar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
            "Mad Hatter": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
            "King of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg"
        }
    }
});