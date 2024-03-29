/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        o = n.slice,
        r = n.flat ?
        function (e) {
            return n.flat.call(e);
        } :
        function (e) {
            return n.concat.apply([], e);
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        p = u.toString,
        f = p.call(Object),
        h = {},
        d = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        y = e.document,
        m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var i,
            o,
            r = (n = n || y).createElement("script");
        if (((r.text = e), t))
            for (i in m)(o = t[i] || (t.getAttribute && t.getAttribute(i))) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var x = "3.5.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        };

    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !d(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
    (w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            i,
            o,
            r,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++), "object" == typeof a || d(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    (i = e[t]),
                    "__proto__" !== t &&
                    a !== i &&
                    (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ?
                        ((n = a[t]), (r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}), (o = !1), (a[t] = w.extend(c, r, i))) :
                        void 0 !== i && (a[t] = i));
        return a;
    }),
    w.extend({
            expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e) || ((t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || p.call(n) !== f)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                v(e, {
                    nonce: t && t.nonce
                }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (_(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : s.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return (e.length = o), e;
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    o,
                    a = 0,
                    s = [];
                if (_(e))
                    for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
                return r(s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    var k = (function (e) {
        var t,
            n,
            i,
            o,
            r,
            a,
            s,
            l,
            c,
            u,
            p,
            f,
            h,
            d,
            g,
            y,
            m,
            v,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            _ = 0,
            k = 0,
            E = le(),
            T = le(),
            S = le(),
            C = le(),
            A = function (e, t) {
                return e === t && (p = !0), 0;
            },
            L = {}.hasOwnProperty,
            O = [],
            N = O.pop,
            M = O.push,
            j = O.push,
            D = O.slice,
            I = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
            F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            W = new RegExp(R + "+", "g"),
            z = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            U = new RegExp("^" + R + "*," + R + "*"),
            B = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            X = new RegExp(R + "|>"),
            Y = new RegExp(F),
            V = new RegExp("^" + H + "$"),
            $ = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                f();
            },
            ae = xe(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }, {
                    dir: "parentNode",
                    next: "legend"
                }
            );
        try {
            j.apply((O = D.call(w.childNodes)), w.childNodes), O[w.childNodes.length].nodeType;
        } catch (t) {
            j = {
                apply: O.length ?
                    function (e, t) {
                        M.apply(e, D.call(t));
                    } :
                    function (e, t) {
                        for (var n = e.length, i = 0;
                            (e[n++] = t[i++]););
                        e.length = n - 1;
                    },
            };
        }

        function se(e, t, i, o) {
            var r,
                s,
                c,
                u,
                p,
                d,
                m,
                v = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
            if (!o && (f(t), (t = t || h), g)) {
                if (11 !== w && (p = Z.exec(e)))
                    if ((r = p[1])) {
                        if (9 === w) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i;
                        } else if (v && (c = v.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
                    } else {
                        if (p[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(r)), i;
                    }
                if (n.qsa && !C[e + " "] && (!y || !y.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (((m = e), (v = t), 1 === w && (X.test(e) || B.test(e)))) {
                        for (((v = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, oe)) : t.setAttribute("id", (u = x))), s = (d = a(e)).length; s--;)
                            d[s] = (u ? "#" + u : ":scope") + " " + be(d[s]);
                        m = d.join(",");
                    }
                    try {
                        return j.apply(i, v.querySelectorAll(m)), i;
                    } catch (t) {
                        C(e, !0);
                    } finally {
                        u === x && t.removeAttribute("id");
                    }
                }
            }
            return l(e.replace(z, "$1"), t, i, o);
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o);
            };
        }

        function ce(e) {
            return (e[x] = !0), e;
        }

        function ue(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function pe(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t;
        }

        function fe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (;
                    (n = n.nextSibling);)
                    if (n === t) return -1;
            return e ? 1 : -1;
        }

        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }

        function de(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }

        function ge(e) {
            return function (t) {
                return "form" in t ?
                    t.parentNode && !1 === t.disabled ?
                    "label" in t ?
                    "label" in t.parentNode ?
                    t.parentNode.disabled === e :
                    t.disabled === e :
                    t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e) :
                    t.disabled === e :
                    "label" in t && t.disabled === e;
            };
        }

        function ye(e) {
            return ce(function (t) {
                return (
                    (t = +t),
                    ce(function (n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
                    })
                );
            });
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = se.support = {}),
                (r = se.isXML = function (e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Q.test(t || (n && n.nodeName) || "HTML");
                }),
                (f = se.setDocument = function (e) {
                    var t,
                        o,
                        a = e ? e.ownerDocument || e : w;
                    return (
                        a != h &&
                        9 === a.nodeType &&
                        a.documentElement &&
                        ((d = (h = a).documentElement),
                            (g = !r(h)),
                            w != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
                            (n.scope = ue(function (e) {
                                return d.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (n.attributes = ue(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (n.getElementsByTagName = ue(function (e) {
                                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
                            (n.getById = ue(function (e) {
                                return (d.appendChild(e).id = x), !h.getElementsByName || !h.getElementsByName(x).length;
                            })),
                            n.getById ?
                            ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                })) :
                            ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n,
                                            i,
                                            o,
                                            r = t.getElementById(e);
                                        if (r) {
                                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                            for (o = t.getElementsByName(e), i = 0;
                                                (r = o[i++]);)
                                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                        }
                                        return [];
                                    }
                                })),
                            (i.find.TAG = n.getElementsByTagName ?
                                function (e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                } :
                                function (e, t) {
                                    var n,
                                        i = [],
                                        o = 0,
                                        r = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (;
                                            (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return r;
                                }),
                            (i.find.CLASS =
                                n.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                }),
                            (m = []),
                            (y = []),
                            (n.qsa = J.test(h.querySelectorAll)) &&
                            (ue(function (e) {
                                    var t;
                                    (d.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + R + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || y.push("\\[" + R + "*(?:value|" + P + ")"),
                                        e.querySelectorAll("[id~=" + x + "-]").length || y.push("~="),
                                        (t = h.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || y.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || y.push(":checked"),
                                        e.querySelectorAll("a#" + x + "+*").length || y.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        y.push("[\\r\\n\\f]");
                                }),
                                ue(function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = h.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && y.push("name" + R + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                        (d.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        y.push(",.*:");
                                })),
                            (n.matchesSelector = J.test((v = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector))) &&
                            ue(function (e) {
                                (n.disconnectedMatch = v.call(e, "*")), v.call(e, "[s!='']:x"), m.push("!=", F);
                            }),
                            (y = y.length && new RegExp(y.join("|"))),
                            (m = m.length && new RegExp(m.join("|"))),
                            (t = J.test(d.compareDocumentPosition)),
                            (b =
                                t || J.test(d.contains) ?
                                function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                } :
                                function (e, t) {
                                    if (t)
                                        for (;
                                            (t = t.parentNode);)
                                            if (t === e) return !0;
                                    return !1;
                                }),
                            (A = t ?
                                function (e, t) {
                                    if (e === t) return (p = !0), 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        i ||
                                        (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i) ?
                                            e == h || (e.ownerDocument == w && b(w, e)) ?
                                            -1 :
                                            t == h || (t.ownerDocument == w && b(w, t)) ?
                                            1 :
                                            u ?
                                            I(u, e) - I(u, t) :
                                            0 :
                                            4 & i ?
                                            -1 :
                                            1)
                                    );
                                } :
                                function (e, t) {
                                    if (e === t) return (p = !0), 0;
                                    var n,
                                        i = 0,
                                        o = e.parentNode,
                                        r = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!o || !r) return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : u ? I(u, e) - I(u, t) : 0;
                                    if (o === r) return fe(e, t);
                                    for (n = e;
                                        (n = n.parentNode);) a.unshift(n);
                                    for (n = t;
                                        (n = n.parentNode);) s.unshift(n);
                                    for (; a[i] === s[i];) i++;
                                    return i ? fe(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0;
                                })),
                        h
                    );
                }),
                (se.matches = function (e, t) {
                    return se(e, null, null, t);
                }),
                (se.matchesSelector = function (e, t) {
                    if ((f(e), n.matchesSelector && g && !C[t + " "] && (!m || !m.test(t)) && (!y || !y.test(t))))
                        try {
                            var i = v.call(e, t);
                            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                        } catch (e) {
                            C(t, !0);
                        }
                    return 0 < se(t, h, null, [e]).length;
                }),
                (se.contains = function (e, t) {
                    return (e.ownerDocument || e) != h && f(e), b(e, t);
                }),
                (se.attr = function (e, t) {
                    (e.ownerDocument || e) != h && f(e);
                    var o = i.attrHandle[t.toLowerCase()],
                        r = o && L.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (se.escape = function (e) {
                    return (e + "").replace(ie, oe);
                }),
                (se.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (se.uniqueSort = function (e) {
                    var t,
                        i = [],
                        o = 0,
                        r = 0;
                    if (((p = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(A), p)) {
                        for (;
                            (t = e[r++]);) t === e[r] && (o = i.push(r));
                        for (; o--;) e.splice(i[o], 1);
                    }
                    return (u = null), e;
                }),
                (o = se.getText = function (e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else
                        for (;
                            (t = e[i++]);) n += o(t);
                    return n;
                }),
                ((i = se.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: $,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return $.CHILD.test(e[0]) ?
                                null :
                                (e[3] ? (e[2] = e[4] || e[5] || "") : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ?
                                function () {
                                    return !0;
                                } :
                                function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function (e) {
                            var t = E[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                                    E(e, function (e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (i) {
                                var o = se.attr(i, e);
                                return null == o ?
                                    "!=" === t :
                                    !t ||
                                    ((o += ""),
                                        "=" === t ?
                                        o === n :
                                        "!=" === t ?
                                        o !== n :
                                        "^=" === t ?
                                        n && 0 === o.indexOf(n) :
                                        "*=" === t ?
                                        n && -1 < o.indexOf(n) :
                                        "$=" === t ?
                                        n && o.slice(-n.length) === n :
                                        "~=" === t ?
                                        -1 < (" " + o.replace(W, " ") + " ").indexOf(n) :
                                        "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === o ?
                                function (e) {
                                    return !!e.parentNode;
                                } :
                                function (t, n, l) {
                                    var c,
                                        u,
                                        p,
                                        f,
                                        h,
                                        d,
                                        g = r !== a ? "nextSibling" : "previousSibling",
                                        y = t.parentNode,
                                        m = s && t.nodeName.toLowerCase(),
                                        v = !l && !s,
                                        b = !1;
                                    if (y) {
                                        if (r) {
                                            for (; g;) {
                                                for (f = t;
                                                    (f = f[g]);)
                                                    if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                                d = g = "only" === e && !d && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((d = [a ? y.firstChild : y.lastChild]), a && v)) {
                                            for (
                                                b = (h = (c = (u = (p = (f = y)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], f = h && y.childNodes[h];
                                                (f = (++h && f && f[g]) || (b = h = 0) || d.pop());

                                            )
                                                if (1 === f.nodeType && ++b && f === t) {
                                                    u[e] = [_, h, b];
                                                    break;
                                                }
                                        } else if ((v && (b = h = (c = (u = (p = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b))
                                            for (;
                                                (f = (++h && f && f[g]) || (b = h = 0) || d.pop()) &&
                                                ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (v && ((u = (p = f[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] = [_, b]), f !== t));

                                            );
                                        return (b -= o) === i || (b % i == 0 && 0 <= b / i);
                                    }
                                };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return o[x] ?
                                o(t) :
                                1 < o.length ?
                                ((n = [e, e, "", t]),
                                    i.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                    ce(function (e, n) {
                                        for (var i, r = o(e, t), a = r.length; a--;) e[(i = I(e, r[a]))] = !(n[i] = r[a]);
                                    }) :
                                    function (e) {
                                        return o(e, 0, n);
                                    }) :
                                o;
                        },
                    },
                    pseudos: {
                        not: ce(function (e) {
                            var t = [],
                                n = [],
                                i = s(e.replace(z, "$1"));
                            return i[x] ?
                                ce(function (e, t, n, o) {
                                    for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r));
                                }) :
                                function (e, o, r) {
                                    return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                                };
                        }),
                        has: ce(function (e) {
                            return function (t) {
                                return 0 < se(e, t).length;
                            };
                        }),
                        contains: ce(function (e) {
                            return (
                                (e = e.replace(te, ne)),
                                function (t) {
                                    return -1 < (t.textContent || o(t)).indexOf(e);
                                }
                            );
                        }),
                        lang: ce(function (e) {
                            return (
                                V.test(e || "") || se.error("unsupported lang: " + e),
                                (e = e.replace(te, ne).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === d;
                        },
                        focus: function (e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !i.pseudos.empty(e);
                        },
                        header: function (e) {
                            return G.test(e.nodeName);
                        },
                        input: function (e) {
                            return K.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ye(function () {
                            return [0];
                        }),
                        last: ye(function (e, t) {
                            return [t - 1];
                        }),
                        eq: ye(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ye(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ye(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ye(function (e, t, n) {
                            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                            return e;
                        }),
                        gt: ye(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = i.pseudos.eq), {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }))
            i.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = de(t);

        function ve() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }

        function xe(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                a = n && "parentNode" === r,
                s = k++;
            return t.first ?
                function (t, n, o) {
                    for (;
                        (t = t[i]);)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                } :
                function (t, n, l) {
                    var c,
                        u,
                        p,
                        f = [_, s];
                    if (l) {
                        for (;
                            (t = t[i]);)
                            if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                        for (;
                            (t = t[i]);)
                            if (1 === t.nodeType || a)
                                if (((u = (p = t[x] || (t[x] = {}))[t.uniqueID] || (p[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                                else {
                                    if ((c = u[r]) && c[0] === _ && c[1] === s) return (f[2] = c[2]);
                                    if (((u[r] = f)[2] = e(t, n, l))) return !0;
                                }
                    return !1;
                };
        }

        function we(e) {
            return 1 < e.length ?
                function (t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0;
                } :
                e[0];
        }

        function _e(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)));
            return a;
        }

        function ke(e, t, n, i, o, r) {
            return (
                i && !i[x] && (i = ke(i)),
                o && !o[x] && (o = ke(o, r)),
                ce(function (r, a, s, l) {
                    var c,
                        u,
                        p,
                        f = [],
                        h = [],
                        d = a.length,
                        g =
                        r ||
                        (function (e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
                            return n;
                        })(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!r && t) ? g : _e(g, f, e, s, l),
                        m = n ? (o || (r ? e : d || i) ? [] : a) : y;
                    if ((n && n(y, m, s, l), i))
                        for (c = _e(m, h), i(c, [], s, l), u = c.length; u--;)(p = c[u]) && (m[h[u]] = !(y[h[u]] = p));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = m.length; u--;)(p = m[u]) && c.push((y[u] = p));
                                o(null, (m = []), c, l);
                            }
                            for (u = m.length; u--;)(p = m[u]) && -1 < (c = o ? I(r, p) : f[u]) && (r[c] = !(a[c] = p));
                        }
                    } else(m = _e(m === a ? m.splice(d, m.length) : m)), o ? o(null, a, m, l) : j.apply(a, m);
                })
            );
        }

        function Ee(e) {
            for (
                var t,
                    n,
                    o,
                    r = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    l = a ? 1 : 0,
                    u = xe(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    p = xe(
                        function (e) {
                            return -1 < I(t, e);
                        },
                        s,
                        !0
                    ),
                    f = [
                        function (e, n, i) {
                            var o = (!a && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : p(e, n, i));
                            return (t = null), o;
                        },
                    ]; l < r; l++
            )
                if ((n = i.relative[e[l].type])) f = [xe(we(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return ke(1 < l && we(f), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, l < o && Ee(e.slice(l, o)), o < r && Ee((e = e.slice(o))), o < r && be(e));
                    }
                    f.push(n);
                }
            return we(f);
        }
        return (
            (ve.prototype = i.filters = i.pseudos),
            (i.setFilters = new ve()),
            (a = se.tokenize = function (e, t) {
                var n,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u = T[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = i.preFilter; s;) {
                    for (a in ((n && !(o = U.exec(s))) || (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
                            (n = !1),
                            (o = B.exec(s)) && ((n = o.shift()), r.push({
                                value: n,
                                type: o[0].replace(z, " ")
                            }), (s = s.slice(n.length))),
                            i.filter))
                        !(o = $[a].exec(s)) || (c[a] && !(o = c[a](o))) || ((n = o.shift()), r.push({
                            value: n,
                            type: a,
                            matches: o
                        }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : T(e, l).slice(0);
            }),
            (s = se.compile = function (e, t) {
                var n,
                    o,
                    r,
                    s,
                    l,
                    u,
                    p = [],
                    d = [],
                    y = S[e + " "];
                if (!y) {
                    for (t || (t = a(e)), n = t.length; n--;)(y = Ee(t[n]))[x] ? p.push(y) : d.push(y);
                    (y = S(
                        e,
                        ((o = d),
                            (s = 0 < (r = p).length),
                            (l = 0 < o.length),
                            (u = function (e, t, n, a, u) {
                                var p,
                                    d,
                                    y,
                                    m = 0,
                                    v = "0",
                                    b = e && [],
                                    x = [],
                                    w = c,
                                    k = e || (l && i.find.TAG("*", u)),
                                    E = (_ += null == w ? 1 : Math.random() || 0.1),
                                    T = k.length;
                                for (u && (c = t == h || t || u); v !== T && null != (p = k[v]); v++) {
                                    if (l && p) {
                                        for (d = 0, t || p.ownerDocument == h || (f(p), (n = !g));
                                            (y = o[d++]);)
                                            if (y(p, t || h, n)) {
                                                a.push(p);
                                                break;
                                            }
                                        u && (_ = E);
                                    }
                                    s && ((p = !y && p) && m--, e && b.push(p));
                                }
                                if (((m += v), s && v !== m)) {
                                    for (d = 0;
                                        (y = r[d++]);) y(b, x, t, n);
                                    if (e) {
                                        if (0 < m)
                                            for (; v--;) b[v] || x[v] || (x[v] = N.call(a));
                                        x = _e(x);
                                    }
                                    j.apply(a, x), u && !e && 0 < x.length && 1 < m + r.length && se.uniqueSort(a);
                                }
                                return u && ((_ = E), (c = w)), b;
                            }),
                            s ? ce(u) : u)
                    )).selector = e;
                }
                return y;
            }),
            (l = se.select = function (e, t, n, o) {
                var r,
                    l,
                    c,
                    u,
                    p,
                    f = "function" == typeof e && e,
                    h = !o && a((e = f.selector || e));
                if (((n = n || []), 1 === h.length)) {
                    if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (r = $.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !i.relative[(u = c.type)]);)
                        if ((p = i.find[u]) && (o = p(c.matches[0].replace(te, ne), (ee.test(l[0].type) && me(t.parentNode)) || t))) {
                            if ((l.splice(r, 1), !(e = o.length && be(l)))) return j.apply(n, o), n;
                            break;
                        }
                }
                return (f || s(e, h))(o, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
            }),
            (n.sortStable = x.split("").sort(A).join("") === x),
            (n.detectDuplicates = !!p),
            f(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            pe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            pe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            pe(P, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }),
            se
        );
    })(e);
    (w.find = k), (w.expr = k.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = k.uniqueSort), (w.text = k.getText), (w.isXMLDoc = k.isXML), (w.contains = k.contains), (w.escapeSelector = k.escape);
    var E = function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        S = w.expr.match.needsContext;

    function C(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
        return d(t) ?
            w.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
            }) :
            t.nodeType ?
            w.grep(e, function (e) {
                return (e === t) !== n;
            }) :
            "string" != typeof t ?
            w.grep(e, function (e) {
                return -1 < s.call(t, e) !== n;
            }) :
            w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ?
            w.find.matchesSelector(i, e) ?
            [i] :
            [] :
            w.find.matches(
                e,
                w.grep(t, function (e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    w.fn.extend({
        find: function (e) {
            var t,
                n,
                i = this.length,
                o = this;
            if ("string" != typeof e)
                return this.pushStack(
                    w(e).filter(function () {
                        for (t = 0; t < i; t++)
                            if (w.contains(o[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n;
        },
        filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
        },
        not: function (e) {
            return this.pushStack(L(this, e || [], !0));
        },
        is: function (e) {
            return !!L(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length;
        },
    });
    var O,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || O), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), A.test(i[1]) && w.isPlainObject(t)))
                    for (i in t) d(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = y.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : d(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
    (O = w(y));
    var M = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    w.fn.extend({
            has: function (e) {
                var t = w(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (w.contains(this, t[e])) return !0;
                });
            },
            closest: function (e, t) {
                var n,
                    i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof e && w(e);
                if (!S.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                r.push(n);
                                break;
                            }
                return this.pushStack(1 < r.length ? w.uniqueSort(r) : r);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        w.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return E(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return E(e, "parentNode", n);
                },
                next: function (e) {
                    return D(e, "nextSibling");
                },
                prev: function (e) {
                    return D(e, "previousSibling");
                },
                nextAll: function (e) {
                    return E(e, "nextSibling");
                },
                prevAll: function (e) {
                    return E(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return E(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return E(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (C(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                },
            },
            function (e, t) {
                w.fn[e] = function (n, i) {
                    var o = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (j[e] || w.uniqueSort(o), M.test(e) && o.reverse()), this.pushStack(o);
                };
            }
        );
    var I = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e;
    }

    function R(e) {
        throw e;
    }

    function H(e, t, n, i) {
        var o;
        try {
            e && d((o = e.promise)) ? o.call(e).done(t).fail(n) : e && d((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (w.Callbacks = function (e) {
        var t, n;
        e =
            "string" == typeof e ?
            ((t = e),
                (n = {}),
                w.each(t.match(I) || [], function (e, t) {
                    n[t] = !0;
                }),
                n) :
            w.extend({}, e);
        var i,
            o,
            r,
            a,
            s = [],
            l = [],
            c = -1,
            u = function () {
                for (a = a || e.once, r = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < s.length;) !1 === s[c].apply(o[0], o[1]) && e.stopOnFalse && ((c = s.length), (o = !1));
                e.memory || (o = !1), (i = !1), a && (s = o ? [] : "");
            },
            p = {
                add: function () {
                    return (
                        s &&
                        (o && !i && ((c = s.length - 1), l.push(o)),
                            (function t(n) {
                                w.each(n, function (n, i) {
                                    d(i) ? (e.unique && p.has(i)) || s.push(i) : i && i.length && "string" !== b(i) && t(i);
                                });
                            })(arguments),
                            o && !i && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = l = []), (s = o = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = l = []), o || i || (s = o = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i || u()), this;
                },
                fire: function () {
                    return p.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return p;
    }),
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                i = "pending",
                o = {
                    state: function () {
                        return i;
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return o.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, i) {
                                        var o = d(e[i[4]]) && e[i[4]];
                                        r[i[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && d(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
                                        });
                                    }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, i, o) {
                        var r = 0;

                        function a(t, n, i, o) {
                            return function () {
                                var s = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                            d(c) ?
                                                o ?
                                                c.call(e, a(r, n, P, o), a(r, n, R, o)) :
                                                (r++, c.call(e, a(r, n, P, o), a(r, n, R, o), a(r, n, P, n.notifyWith))) :
                                                (i !== P && ((s = void 0), (l = [e])), (o || n.resolveWith)(s, l));
                                        }
                                    },
                                    u = o ?
                                    c :
                                    function () {
                                        try {
                                            c();
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (i !== R && ((s = void 0), (l = [e])), n.rejectWith(s, l));
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, d(o) ? o : P, e.notifyWith)), n[1][3].add(a(0, e, d(t) ? t : P)), n[2][3].add(a(0, e, d(i) ? i : R));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, o) : o;
                    },
                },
                r = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (o[t[1]] = a.add),
                    s &&
                        a.add(
                            function () {
                                i = s;
                            },
                            n[3 - e][2].disable,
                            n[3 - e][3].disable,
                            n[0][2].lock,
                            n[0][3].lock
                        ),
                        a.add(t[3].fire),
                        (r[t[0]] = function () {
                            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                        }),
                        (r[t[0] + "With"] = a.fireWith);
                }),
                o.promise(r),
                t && t.call(r, r),
                r
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (i[e] = this), (r[e] = 1 < arguments.length ? o.call(arguments) : n), --t || a.resolveWith(i, r);
                    };
                };
            if (t <= 1 && (H(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || d(r[n] && r[n].then))) return a.then();
            for (; n--;) H(r[n], s(n), a.reject);
            return a.promise();
        },
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
    (w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    });
    var F = w.Deferred();

    function W() {
        y.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready();
    }
    (w.fn.ready = function (e) {
        return (
            F.then(e).catch(function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
    w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || F.resolveWith(y, [w]);
            },
        }),
        (w.ready.then = F.then),
        "complete" === y.readyState || ("loading" !== y.readyState && !y.documentElement.doScroll) ? e.setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var z = function (e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in ((o = !0), n)) z(e, t, s, n[s], !0, r, a);
            else if (
                void 0 !== i &&
                ((o = !0),
                    d(i) || (a = !0),
                    c &&
                    (a ?
                        (t.call(e, i), (t = null)) :
                        ((c = t),
                            (t = function (e, t, n) {
                                return c.call(w(e), n);
                            }))),
                    t)
            )
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        U = /^-ms-/,
        B = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase();
    }

    function Y(e) {
        return e.replace(U, "ms-").replace(B, X);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function $() {
        this.expando = w.expando + $.uid++;
    }
    ($.uid = 1),
    ($.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function (e, t, n) {
            var i,
                o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else
                for (i in t) o[Y(i)] = t[i];
            return o;
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
        },
        access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
            var n,
                i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(I) || []).length;
                    for (; n--;) delete i[t[n]];
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
        },
    });
    var Q = new $(),
        K = new $(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (o = n) || ("false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o));
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
            hasData: function (e) {
                return K.hasData(e) || Q.hasData(e);
            },
            data: function (e, t, n) {
                return K.access(e, t, n);
            },
            removeData: function (e, t) {
                K.remove(e, t);
            },
            _data: function (e, t, n) {
                return Q.access(e, t, n);
            },
            _removeData: function (e, t) {
                Q.remove(e, t);
            },
        }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    o,
                    r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && ((o = K.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = Y(i.slice(5))), Z(r, i, o[i]));
                        Q.set(r, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e ?
                    this.each(function () {
                        K.set(this, e);
                    }) :
                    z(
                        this,
                        function (t) {
                            var n;
                            if (r && void 0 === t) return void 0 !== (n = K.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0;
                            this.each(function () {
                                K.set(this, e, t);
                            });
                        },
                        null,
                        t,
                        1 < arguments.length,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = Q.get(e, t)), n && (!i || Array.isArray(n) ? (i = Q.access(e, t, w.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = w._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(
                            e,
                            function () {
                                w.dequeue(e, t);
                            },
                            r
                        )),
                    !i && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Q.get(e, n) ||
                    Q.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            Q.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n ?
                    w.queue(this[0], e) :
                    void 0 === t ?
                    this :
                    this.each(function () {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                    })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    o = w.Deferred(),
                    r = this,
                    a = this.length,
                    s = function () {
                        --i || o.resolveWith(r, [r]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--;)(n = Q.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = y.documentElement,
        oe = function (e) {
            return w.contains(e.ownerDocument, e);
        },
        re = {
            composed: !0
        };
    ie.getRootNode &&
        (oe = function (e) {
            return w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument;
        });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && oe(e) && "none" === w.css(e, "display"));
    };

    function se(e, t, n, i) {
        var o,
            r,
            a = 20,
            s = i ?
            function () {
                return i.cur();
            } :
            function () {
                return w.css(e, t, "");
            },
            l = s(),
            c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || ("px" !== c && +l)) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) w.style(e, t, u + c), (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0), (u /= r);
            (u *= 2), w.style(e, t, u + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = o))), o;
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, o, r, a, s, l, c = [], u = 0, p = e.length; u < p; u++)
            (i = e[u]).style &&
            ((n = i.style.display),
                t ?
                ("none" === n && ((c[u] = Q.get(i, "display") || null), c[u] || (i.style.display = "")),
                    "" === i.style.display &&
                    ae(i) &&
                    (c[u] =
                        ((l = a = r = void 0),
                            (a = (o = i).ownerDocument),
                            (s = o.nodeName),
                            (l = le[s]) || ((r = a.body.appendChild(a.createElement(s))), (l = w.css(r, "display")), r.parentNode.removeChild(r), "none" === l && (l = "block"), (le[s] = l))))) :
                "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
        for (u = 0; u < p; u++) null != c[u] && (e[u].style.display = c[u]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return ce(this, !0);
        },
        hide: function () {
            return ce(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function () {
                    ae(this) ? w(this).show() : w(this).hide();
                });
        },
    });
    var ue,
        pe,
        fe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i;
    (ue = y.createDocumentFragment().appendChild(y.createElement("div"))),
    (pe = y.createElement("input")).setAttribute("type", "radio"),
        pe.setAttribute("checked", "checked"),
        pe.setAttribute("name", "t"),
        ue.appendChild(pe),
        (h.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ue.innerHTML = "<textarea>x</textarea>"),
        (h.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
        (ue.innerHTML = "<option></option>"),
        (h.option = !!ue.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && C(e, t)) ? w.merge([e], n) : n;
    }

    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), h.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;

    function be(e, t, n, i, o) {
        for (var r, a, s, l, c, u, p = t.createDocumentFragment(), f = [], h = 0, d = e.length; h < d; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === b(r)) w.merge(f, r.nodeType ? [r] : r);
                else if (ve.test(r)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (he.exec(r) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
            w.merge(f, a.childNodes), ((a = p.firstChild).textContent = "");
        } else f.push(t.createTextNode(r));
        for (p.textContent = "", h = 0;
            (r = f[h++]);)
            if (i && -1 < w.inArray(r, i)) o && o.push(r);
            else if (((c = oe(r)), (a = ye(p.appendChild(r), "script")), c && me(a), n))
            for (u = 0;
                (r = a[u++]);) de.test(r.type || "") && n.push(r);
        return p;
    }
    var xe = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0;
    }

    function Ee() {
        return !1;
    }

    function Te(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return y.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }

    function Se(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Se(e, s, n, i, t[s], r);
            return e;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = Ee;
        else if (!o) return e;
        return (
            1 === r &&
            ((a = o),
                ((o = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, o, i, n);
            })
        );
    }

    function Ce(e, t, n) {
        n
            ?
            (Q.set(e, t, !1),
                w.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                        var i,
                            r,
                            a = Q.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (((a = o.call(arguments)), Q.set(this, t, a), (i = n(this, t)), this[t](), a !== (r = Q.get(this, t)) || i ? Q.set(this, t, !1) : (r = {}), a !== r))
                                return e.stopImmediatePropagation(), e.preventDefault(), r.value;
                        } else a.length && (Q.set(this, t, {
                            value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                        }), e.stopImmediatePropagation());
                    },
                })) :
            void 0 === Q.get(e, t) && w.event.add(e, t, ke);
    }
    (w.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r,
                a,
                s,
                l,
                c,
                u,
                p,
                f,
                h,
                d,
                g,
                y = Q.get(e);
            if (V(e))
                for (
                    n.handler && ((n = (r = n).handler), (o = r.selector)),
                    o && w.find.matchesSelector(ie, o),
                    n.guid || (n.guid = w.guid++),
                    (l = y.events) || (l = y.events = Object.create(null)),
                    (a = y.handle) ||
                    (a = y.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                    }),
                    c = (t = (t || "").match(I) || [""]).length; c--;

                )
                    (h = g = (s = _e.exec(t[c]) || [])[1]),
                    (d = (s[2] || "").split(".").sort()),
                    h &&
                    ((p = w.event.special[h] || {}),
                        (h = (o ? p.delegateType : p.bindType) || h),
                        (p = w.event.special[h] || {}),
                        (u = w.extend({
                            type: h,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && w.expr.match.needsContext.test(o),
                            namespace: d.join(".")
                        }, r)),
                        (f = l[h]) || (((f = l[h] = []).delegateCount = 0), (p.setup && !1 !== p.setup.call(e, i, d, a)) || (e.addEventListener && e.addEventListener(h, a))),
                        p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                        o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        (w.event.global[h] = !0));
        },
        remove: function (e, t, n, i, o) {
            var r,
                a,
                s,
                l,
                c,
                u,
                p,
                f,
                h,
                d,
                g,
                y = Q.hasData(e) && Q.get(e);
            if (y && (l = y.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--;)
                    if (((h = g = (s = _e.exec(t[c]) || [])[1]), (d = (s[2] || "").split(".").sort()), h)) {
                        for (p = w.event.special[h] || {}, f = l[(h = (i ? p.delegateType : p.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;)
                            (u = f[r]),
                            (!o && g !== u.origType) ||
                            (n && n.guid !== u.guid) ||
                            (s && !s.test(u.namespace)) ||
                            (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                            (f.splice(r, 1), u.selector && f.delegateCount--, p.remove && p.remove.call(e, u));
                        a && !f.length && ((p.teardown && !1 !== p.teardown.call(e, d, y.handle)) || w.removeEvent(e, h, y.handle), delete l[h]);
                    } else
                        for (h in l) w.event.remove(e, h + t[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                o,
                r,
                a,
                s = new Array(arguments.length),
                l = w.event.fix(e),
                c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                for (a = w.event.handlers.call(this, l, c), t = 0;
                    (o = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();)
                        (l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace)) ||
                        ((l.handleObj = r), (l.data = r.data), void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                o,
                r,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[(o = (i = t[n]).selector + " ")] && (a[o] = i.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length), a[o] && r.push(i);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        });
                    }
            return (c = this), l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: d(t) ?
                    function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    } :
                    function () {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && C(t, "input") && Ce(t, "click", ke), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && C(t, "input") && Ce(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (fe.test(t.type) && t.click && C(t, "input") && Q.get(t, "click")) || C(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ?
            ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ke : Ee),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && w.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = ke), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        },
    }),
    w.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            w.event.special[e] = {
                setup: function () {
                    return Ce(this, e, Te), !1;
                },
                trigger: function () {
                    return Ce(this, e), !0;
                },
                delegateType: t,
            };
        }),
        w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === this || w.contains(this, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, i) {
                return Se(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Se(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Ee),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ae = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return (C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
    }

    function Me(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }

    function De(e, t) {
        var n, i, o, r, a, s;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (s = Q.get(e).events))
                for (o in (Q.remove(t, "handle events"), s))
                    for (n = 0, i = s[o].length; n < i; n++) w.event.add(t, o, s[o][n]);
            K.hasData(e) && ((r = K.access(e)), (a = w.extend({}, r)), K.set(t, a));
        }
    }

    function Ie(e, t, n, i) {
        t = r(t);
        var o,
            a,
            s,
            l,
            c,
            u,
            p = 0,
            f = e.length,
            g = f - 1,
            y = t[0],
            m = d(y);
        if (m || (1 < f && "string" == typeof y && !h.checkClone && Le.test(y)))
            return e.each(function (o) {
                var r = e.eq(o);
                m && (t[0] = y.call(this, o, r.html())), Ie(r, t, n, i);
            });
        if (f && ((a = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = a), a || i)) {
            for (l = (s = w.map(ye(o, "script"), Me)).length; p < f; p++)(c = o), p !== g && ((c = w.clone(c, !0, !0)), l && w.merge(s, ye(c, "script"))), n.call(e[p], c, p);
            if (l)
                for (u = s[s.length - 1].ownerDocument, w.map(s, je), p = 0; p < l; p++)
                    (c = s[p]),
                    de.test(c.type || "") &&
                    !Q.access(c, "globalEval") &&
                    w.contains(u, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : v(c.textContent.replace(Oe, ""), c, u));
        }
        return e;
    }

    function Pe(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(ye(i)), i.parentNode && (n && oe(i) && me(ye(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    w.extend({
            htmlPrefilter: function (e) {
                return e;
            },
            clone: function (e, t, n) {
                var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u = e.cloneNode(!0),
                    p = oe(e);
                if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                    for (a = ye(u), i = 0, o = (r = ye(e)).length; i < o; i++)
                        (s = r[i]), "input" === (c = (l = a[i]).nodeName.toLowerCase()) && fe.test(s.type) ? (l.checked = s.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (r = r || ye(e), a = a || ye(u), i = 0, o = r.length; i < o; i++) De(r[i], a[i]);
                    else De(e, u);
                return 0 < (a = ye(u, "script")).length && me(a, !p && ye(e, "script")), u;
            },
            cleanData: function (e) {
                for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (V(n)) {
                        if ((t = n[Q.expando])) {
                            if (t.events)
                                for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                            n[Q.expando] = void 0;
                        }
                        n[K.expando] && (n[K.expando] = void 0);
                    }
            },
        }),
        w.fn.extend({
            detach: function (e) {
                return Pe(this, e, !0);
            },
            remove: function (e) {
                return Pe(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e ?
                            w.text(this) :
                            this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Ie(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ne(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Ie(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Ie(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)(n = s === r ? this : this.clone(!0)), w(o[s])[t](n), a.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        qe = function (e, t, n) {
            var i,
                o,
                r = {};
            for (o in t)(r[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
            return i;
        },
        Fe = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var i,
            o,
            r,
            a,
            s = e.style;
        return (
            (n = n || He(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && Re.test(a) && Fe.test(t) && ((i = s.width), (o = s.minWidth), (r = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = o), (s.maxWidth = r))),
            void 0 !== a ? a + "" : a
        );
    }

    function ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }!(function () {
        function t() {
            if (u) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                (i = "1%" !== t.top),
                (l = 12 === n(t.marginLeft)),
                (u.style.right = "60%"),
                (a = 36 === n(t.right)),
                (o = 36 === n(t.width)),
                (u.style.position = "absolute"),
                (r = 12 === n(u.offsetWidth / 3)),
                ie.removeChild(c),
                    (u = null);
            }
        }

        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            r,
            a,
            s,
            l,
            c = y.createElement("div"),
            u = y.createElement("div");
        u.style &&
            ((u.style.backgroundClip = "content-box"),
                (u.cloneNode(!0).style.backgroundClip = ""),
                (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
                w.extend(h, {
                    boxSizingReliable: function () {
                        return t(), o;
                    },
                    pixelBoxStyles: function () {
                        return t(), a;
                    },
                    pixelPosition: function () {
                        return t(), i;
                    },
                    reliableMarginLeft: function () {
                        return t(), l;
                    },
                    scrollboxSize: function () {
                        return t(), r;
                    },
                    reliableTrDimensions: function () {
                        var t, n, i, o;
                        return (
                            null == s &&
                            ((t = y.createElement("table")),
                                (n = y.createElement("tr")),
                                (i = y.createElement("div")),
                                (t.style.cssText = "position:absolute;left:-11111px"),
                                (n.style.height = "1px"),
                                (i.style.height = "9px"),
                                ie.appendChild(t).appendChild(n).appendChild(i),
                                (o = e.getComputedStyle(n)),
                                (s = 3 < parseInt(o.height)),
                                ie.removeChild(t)),
                            s
                        );
                    },
                }));
    })();
    var Ue = ["Webkit", "Moz", "ms"],
        Be = y.createElement("div").style,
        Xe = {};

    function Ye(e) {
        return (
            w.cssProps[e] ||
            Xe[e] ||
            (e in Be ?
                e :
                (Xe[e] =
                    (function (e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                            if ((e = Ue[n] + t) in Be) return e;
                    })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        $e = /^--/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function Je(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += w.css(e, n + ne[a], !0, o)),
            i ?
            ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, o))) :
            ((l += w.css(e, "padding" + ne[a], !0, o)), "padding" !== n ? (l += w.css(e, "border" + ne[a] + "Width", !0, o)) : (s += w.css(e, "border" + ne[a] + "Width", !0, o)));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5)) || 0), l;
    }

    function Ze(e, t, n) {
        var i = He(e),
            o = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            r = o,
            a = We(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!h.boxSizingReliable() && o) || (!h.reliableTrDimensions() && C(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === w.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === w.css(e, "boxSizing", !1, i)), (r = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Je(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
        );
    }

    function et(e, t, n, i, o) {
        return new et.prototype.init(e, t, n, i, o);
    }
    w.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        r,
                        a,
                        s = Y(t),
                        l = $e.test(t),
                        c = e.style;
                    if ((l || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                    "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && ((n = se(e, t, o)), (r = "number")),
                        null != n &&
                        n == n &&
                        ("number" !== r || l || (n += (o && o[3]) || (w.cssNumber[s] ? "" : "px")),
                            h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                            (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                }
            },
            css: function (e, t, n, i) {
                var o,
                    r,
                    a,
                    s = Y(t);
                return (
                    $e.test(t) || (t = Ye(s)),
                    (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = We(e, t, i)),
                    "normal" === o && t in Ke && (o = Ke[t]),
                    "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
                );
            },
        }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return !Ve.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width) ?
                            Ze(e, t, i) :
                            qe(e, Qe, function () {
                                return Ze(e, t, i);
                            });
                },
                set: function (e, n, i) {
                    var o,
                        r = He(e),
                        a = !h.scrollboxSize() && "absolute" === r.position,
                        s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, r),
                        l = i ? Je(e, t, i, s, r) : 0;
                    return (
                        s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - 0.5)),
                        l && (o = te.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ge(0, n, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(We(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        qe(e, {
                            marginLeft: 0
                        }, function () {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                    return o;
                },
            }),
            "margin" !== e && (w.cssHooks[e + t].set = Ge);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var i,
                            o,
                            r = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (i = He(e), o = t.length; a < o; a++) r[t[a]] = w.css(e, t[a], !1, i);
                            return r;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((w.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, i, o, r) {
                (this.elem = e), (this.prop = n), (this.easing = o || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = et.prototype.init),
        (w.fx.step = {});
    var tt,
        nt,
        it,
        ot,
        rt = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === y.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick());
    }

    function lt() {
        return (
            e.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }

    function ct(e, t) {
        var n,
            i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }

    function ut(e, t, n) {
        for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if ((i = o[r].call(n, t, e))) return i;
    }

    function pt(e, t, n) {
        var i,
            o,
            r = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
            },
            c = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var n, i, o, r, a;
                for (n in e)
                    if (((o = t[(i = Y(n))]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (a = w.cssHooks[i]) && ("expand" in a)))
                        for (n in ((r = a.expand(r)), delete e[i], r))(n in e) || ((e[n] = r[n]), (t[n] = o));
                    else t[i] = o;
            })(u, c.opts.specialEasing); r < a; r++
        )
            if ((i = pt.prefilters[r].call(c, e, u, c.opts))) return d(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return (
            w.map(u, ut, c),
            d(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            d(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var n, i = 0, o = e.length; i < o; i++)(n = e[i]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    p = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    d = e.style,
                    g = e.nodeType && ae(e),
                    y = Q.get(e, "fxshow");
                for (i in (n.queue ||
                        (null == (a = w._queueHooks(e, "fx")).unqueued &&
                            ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function () {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            f.always(function () {
                                f.always(function () {
                                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                                });
                            })),
                        t))
                    if (((o = t[i]), rt.test(o))) {
                        if ((delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                            if ("show" !== o || !y || void 0 === y[i]) continue;
                            g = !0;
                        }
                        h[i] = (y && y[i]) || w.style(e, i);
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                    for (i in (p &&
                            1 === e.nodeType &&
                            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                                null == (c = y && y.display) && (c = Q.get(e, "display")),
                                "none" === (u = w.css(e, "display")) && (c ? (u = c) : (ce([e], !0), (c = e.style.display || c), (u = w.css(e, "display")), ce([e]))),
                                ("inline" === u || ("inline-block" === u && null != c)) &&
                                "none" === w.css(e, "float") &&
                                (l ||
                                    (f.done(function () {
                                            d.display = c;
                                        }),
                                        null == c && ((u = d.display), (c = "none" === u ? "" : u))),
                                    (d.display = "inline-block"))),
                            n.overflow &&
                            ((d.overflow = "hidden"),
                                f.always(function () {
                                    (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            h))
                        l ||
                        (y ? "hidden" in y && (g = y.hidden) : (y = Q.access(e, "fxshow", {
                                display: c
                            })),
                            r && (y.hidden = !g),
                            g && ce([e], !0),
                            f.done(function () {
                                for (i in (g || ce([e]), Q.remove(e, "fxshow"), h)) w.style(e, i, h[i]);
                            })),
                        (l = ut(g ? y[i] : 0, i, f)),
                        i in y || ((y[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
    (w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || (!n && t) || (d(e) && e),
            duration: e,
            easing: (n && t) || (t && !d(t) && t)
        };
        return (
            w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
                d(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
            }),
            i
        );
    }),
    w.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var o = w.isEmptyObject(e),
                    r = w.speed(t, n, i),
                    a = function () {
                        var t = pt(this, w.extend({}, e), r);
                        (o || Q.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = w.timers,
                            a = Q.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && at.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = Q.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = w.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, o);
            };
        }),
        w.each({
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (tt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (w.fx.stop = function () {
            nt = null;
        }),
        (w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }),
        (w.fn.delay = function (t, n) {
            return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(o);
                    };
                })
            );
        }),
        (it = y.createElement("input")),
        (ot = y.createElement("select").appendChild(y.createElement("option"))),
        (it.type = "checkbox"),
        (h.checkOn = "" !== it.value),
        (h.optSelected = ot.selected),
        ((it = y.createElement("input")).value = "t"),
        (it.type = "radio"),
        (h.radioValue = "t" === it.value);
    var ft,
        ht = w.expr.attrHandle;
    w.fn.extend({
            attr: function (e, t) {
                return z(this, w.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function (e) {
                return this.each(function () {
                    w.removeAttr(this, e);
                });
            },
        }),
        w.extend({
            attr: function (e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute ?
                        w.prop(e, t, n) :
                        ((1 === r && w.isXMLDoc(e)) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ft : void 0)),
                            void 0 !== n ?
                            null === n ?
                            void w.removeAttr(e, t) :
                            o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                            i :
                            (e.setAttribute(t, n + ""), n) :
                            o && "get" in o && null !== (i = o.get(e, t)) ?
                            i :
                            null == (i = w.find.attr(e, t)) ?
                            void 0 :
                            i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && C(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    o = t && t.match(I);
                if (o && 1 === e.nodeType)
                    for (;
                        (n = o[i++]);) e.removeAttribute(n);
            },
        }),
        (ft = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, i) {
                var o,
                    r,
                    a = t.toLowerCase();
                return i || ((r = ht[a]), (ht[a] = o), (o = null != n(e, t, i) ? a : null), (ht[a] = r)), o;
            };
        });
    var dt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(I) || []).join(" ");
    }

    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }

    function vt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
    }
    w.fn.extend({
            prop: function (e, t) {
                return z(this, w.prop, e, t, 1 < arguments.length);
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[w.propFix[e] || e];
                });
            },
        }),
        w.extend({
            prop: function (e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (o = w.propHooks[t])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : dt.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
        }),
        h.optSelected ||
        (w.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    l = 0;
                if (d(e))
                    return this.each(function (t) {
                        w(this).addClass(e.call(this, t, mt(this)));
                    });
                if ((t = vt(e)).length)
                    for (;
                        (n = this[l++]);)
                        if (((o = mt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
                            for (a = 0;
                                (r = t[a++]);) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (s = yt(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    l = 0;
                if (d(e))
                    return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, mt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = vt(e)).length)
                    for (;
                        (n = this[l++]);)
                        if (((o = mt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
                            for (a = 0;
                                (r = t[a++]);)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            o !== (s = yt(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ?
                    t ?
                    this.addClass(e) :
                    this.removeClass(e) :
                    d(e) ?
                    this.each(function (n) {
                        w(this).toggleClass(e.call(this, n, mt(this), t), t);
                    }) :
                    this.each(function () {
                        var t, o, r, a;
                        if (i)
                            for (o = 0, r = w(this), a = vt(e);
                                (t = a[o++]);) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else(void 0 !== e && "boolean" !== n) || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
                    });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " ";
                    (n = this[i++]);)
                    if (1 === n.nodeType && -1 < (" " + yt(mt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var bt = /\r/g;
    w.fn.extend({
            val: function (e) {
                var t,
                    n,
                    i,
                    o = this[0];
                return arguments.length ?
                    ((i = d(e)),
                        this.each(function (n) {
                            var o;
                            1 === this.nodeType &&
                                (null == (o = i ? e.call(this, n, w(this).val()) : e) ?
                                    (o = "") :
                                    "number" == typeof o ?
                                    (o += "") :
                                    Array.isArray(o) &&
                                    (o = w.map(o, function (e) {
                                        return null == e ? "" : e + "";
                                    })),
                                    ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                        })) :
                    o ?
                    (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ?
                    n :
                    "string" == typeof (n = o.value) ?
                    n.replace(bt, "") :
                    null == n ?
                    "" :
                    n :
                    void 0;
            },
        }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : yt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            o = e.options,
                            r = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            l = a ? r + 1 : o.length;
                        for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        for (var n, i, o = e.options, r = w.makeArray(t), a = o.length; a--;)((i = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
                        return n || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                },
            }),
            h.checkOn ||
                (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        }),
        (h.focusin = "onfocusin" in e);
    var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
            trigger: function (t, n, i, o) {
                var r,
                    a,
                    s,
                    l,
                    c,
                    p,
                    f,
                    h,
                    m = [i || y],
                    v = u.call(t, "type") ? t.type : t,
                    b = u.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((a = h = s = i = i || y),
                        3 !== i.nodeType &&
                        8 !== i.nodeType &&
                        !xt.test(v + w.event.triggered) &&
                        (-1 < v.indexOf(".") && ((v = (b = v.split(".")).shift()), b.sort()),
                            (c = v.indexOf(":") < 0 && "on" + v),
                            ((t = t[w.expando] ? t : new w.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                            (t.namespace = b.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = i),
                            (n = null == n ? [t] : w.makeArray(n, [t])),
                            (f = w.event.special[v] || {}),
                            o || !f.trigger || !1 !== f.trigger.apply(i, n)))
                ) {
                    if (!o && !f.noBubble && !g(i)) {
                        for (l = f.delegateType || v, xt.test(l + v) || (a = a.parentNode); a; a = a.parentNode) m.push(a), (s = a);
                        s === (i.ownerDocument || y) && m.push(s.defaultView || s.parentWindow || e);
                    }
                    for (r = 0;
                        (a = m[r++]) && !t.isPropagationStopped();)
                        (h = a),
                        (t.type = 1 < r ? l : f.bindType || v),
                        (p = (Q.get(a, "events") || Object.create(null))[t.type] && Q.get(a, "handle")) && p.apply(a, n),
                        (p = c && a[c]) && p.apply && V(a) && ((t.result = p.apply(a, n)), !1 === t.result && t.preventDefault());
                    return (
                        (t.type = v),
                        o ||
                        t.isDefaultPrevented() ||
                        (f._default && !1 !== f._default.apply(m.pop(), n)) ||
                        !V(i) ||
                        (c &&
                            d(i[v]) &&
                            !g(i) &&
                            ((s = i[c]) && (i[c] = null),
                                (w.event.triggered = v),
                                t.isPropagationStopped() && h.addEventListener(v, wt),
                                i[v](),
                                t.isPropagationStopped() && h.removeEventListener(v, wt),
                                (w.event.triggered = void 0),
                                s && (i[c] = s))),
                        t.result
                    );
                }
            },
            simulate: function (e, t, n) {
                var i = w.extend(new w.Event(), n, {
                    type: e,
                    isSimulated: !0
                });
                w.event.trigger(i, null, t);
            },
        }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
        w.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this.document || this,
                        o = Q.access(i, t);
                    o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1);
                },
                teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                        o = Q.access(i, t) - 1;
                    o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                },
            };
        });
    var _t = e.location,
        kt = {
            guid: Date.now()
        },
        Et = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var Tt = /\[\]$/,
        St = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Lt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            w.each(t, function (t, o) {
                n || Tt.test(e) ? i(e, o) : Lt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
            });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (o in t) Lt(e + "[" + o + "]", t[o], n, i);
    }
    (w.param = function (e, t) {
        var n,
            i = [],
            o = function (e, t) {
                var n = d(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                o(this.name, this.value);
            });
        else
            for (n in e) Lt(n, e[n], t, o);
        return i.join("&");
    }),
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                .filter(function () {
                    var e = this.type;
                    return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Ct.test(e) && (this.checked || !fe.test(e));
                })
                .map(function (e, t) {
                    var n = w(this).val();
                    return null == n ?
                        null :
                        Array.isArray(n) ?
                        w.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            };
                        }) :
                        {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        };
                })
                .get();
        },
    });
    var Ot = /%20/g,
        Nt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Pt = {},
        Rt = {},
        Ht = "*/".concat("*"),
        qt = y.createElement("a");

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                o = 0,
                r = t.toLowerCase().match(I) || [];
            if (d(n))
                for (;
                    (i = r[o++]);) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }

    function Wt(e, t, n, i) {
        var o = {},
            r = e === Rt;

        function a(s) {
            var l;
            return (
                (o[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
            );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
    }

    function zt(e, t) {
        var n,
            i,
            o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e;
    }
    (qt.href = _t.href),
    w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                },
            },
            ajaxSetup: function (e, t) {
                return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Pt),
            ajaxTransport: Ft(Rt),
            ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    p,
                    f,
                    h = w.ajaxSetup({}, n),
                    d = h.context || h,
                    g = h.context && (d.nodeType || d.jquery) ? w(d) : w.event,
                    m = w.Deferred(),
                    v = w.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    _ = {},
                    k = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {};
                                        (t = jt.exec(r));) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return c ? r : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e), (x[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == c && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (c) E.always(e[E.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || k;
                            return i && i.abort(t), T(0, t), this;
                        },
                    };
                if (
                    (m.promise(E),
                        (h.url = ((t || h.url || _t.href) + "").replace(It, _t.protocol + "//")),
                        (h.type = n.method || n.type || h.method || h.type),
                        (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""]),
                        null == h.crossDomain)
                ) {
                    l = y.createElement("a");
                    try {
                        (l.href = h.url), (l.href = l.href), (h.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Wt(Pt, h, n, E), c)) return E;
                for (p in ((u = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                        (h.type = h.type.toUpperCase()),
                        (h.hasContent = !Dt.test(h.type)),
                        (o = h.url.replace(Nt, "")),
                        h.hasContent ?
                        h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) :
                        ((f = h.url.slice(o.length)),
                            h.data && (h.processData || "string" == typeof h.data) && ((o += (Et.test(o) ? "&" : "?") + h.data), delete h.data),
                            !1 === h.cache && ((o = o.replace(Mt, "$1")), (f = (Et.test(o) ? "&" : "?") + "_=" + kt.guid++ + f)),
                            (h.url = o + f)),
                        h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                        E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
                        h.headers))
                    E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(d, E, h) || c)) return E.abort();
                if (((k = "abort"), v.add(h.complete), E.done(h.success), E.fail(h.error), (i = Wt(Rt, h, n, E)))) {
                    if (((E.readyState = 1), u && g.trigger("ajaxSend", [E, h]), c)) return E;
                    h.async &&
                        0 < h.timeout &&
                        (s = e.setTimeout(function () {
                            E.abort("timeout");
                        }, h.timeout));
                    try {
                        (c = !1), i.send(x, T);
                    } catch (t) {
                        if (c) throw t;
                        T(-1, t);
                    }
                } else T(-1, "No Transport");

                function T(t, n, a, l) {
                    var p,
                        f,
                        y,
                        x,
                        _,
                        k = n;
                    c ||
                        ((c = !0),
                            s && e.clearTimeout(s),
                            (i = void 0),
                            (r = l || ""),
                            (E.readyState = 0 < t ? 4 : 0),
                            (p = (200 <= t && t < 300) || 304 === t),
                            a &&
                            (x = (function (e, t, n) {
                                for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in s)
                                        if (s[o] && s[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || e.converters[o + " " + l[0]]) {
                                            r = o;
                                            break;
                                        }
                                        a || (a = o);
                                    }
                                    r = r || a;
                                }
                                if (r) return r !== l[0] && l.unshift(r), n[r];
                            })(h, E, a)),
                            !p && -1 < w.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
                            (x = (function (e, t, n, i) {
                                var o,
                                    r,
                                    a,
                                    s,
                                    l,
                                    c = {},
                                    u = e.dataTypes.slice();
                                if (u[1])
                                    for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                for (r = u.shift(); r;)
                                    if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = u.shift())))
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l !== r) {
                                    if (!(a = c[l + " " + r] || c["* " + r]))
                                        for (o in c)
                                            if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? (a = c[o]) : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                                                break;
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else
                                            try {
                                                t = a(t);
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + l + " to " + r
                                                };
                                            }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            })(h, x, E, p)),
                            p ?
                            (h.ifModified && ((_ = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = _), (_ = E.getResponseHeader("etag")) && (w.etag[o] = _)),
                                204 === t || "HEAD" === h.type ? (k = "nocontent") : 304 === t ? (k = "notmodified") : ((k = x.state), (f = x.data), (p = !(y = x.error)))) :
                            ((y = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                            (E.status = t),
                            (E.statusText = (n || k) + ""),
                            p ? m.resolveWith(d, [f, k, E]) : m.rejectWith(d, [E, k, y]),
                            E.statusCode(b),
                            (b = void 0),
                            u && g.trigger(p ? "ajaxSuccess" : "ajaxError", [E, h, p ? f : y]),
                            v.fireWith(d, [E, k]),
                            u && (g.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, i, o) {
                return d(n) && ((o = o || i), (i = n), (n = void 0)), w.ajax(w.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, w.isPlainObject(e) && e));
            };
        }),
        w.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (w._evalUrl = function (e, t, n) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (e) {
                    w.globalEval(e, t, n);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                    (d(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function () {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return d(e) ?
                    this.each(function (t) {
                        w(this).wrapInner(e.call(this, t));
                    }) :
                    this.each(function () {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = d(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function () {
                        w(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = {
            0: 200,
            1223: 204
        },
        Bt = w.ajaxSettings.xhr();
    (h.cors = !!Bt && "withCredentials" in Bt),
    (h.ajax = Bt = !!Bt),
    w.ajaxTransport(function (t) {
            var n, i;
            if (h.cors || (Bt && !t.crossDomain))
                return {
                    send: function (o, r) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) s.setRequestHeader(a, o[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                        "abort" === e ?
                                        s.abort() :
                                        "error" === e ?
                                        "number" != typeof s.status ?
                                        r(0, "error") :
                                        r(s.status, s.statusText) :
                                        r(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()));
                            };
                        }),
                        (s.onload = n()),
                        (i = s.onerror = s.ontimeout = n("error")),
                        void 0 !== s.onabort ?
                            (s.onabort = i) :
                            (s.onreadystatechange = function () {
                                4 === s.readyState &&
                                    e.setTimeout(function () {
                                        n && i();
                                    });
                            }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (o) {
                            if (n) throw o;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({
                                charset: e.scriptCharset,
                                src: e.url
                            })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                        y.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Xt,
        Yt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Yt.pop() || w.expando + "_" + kt.guid++;
                return (this[e] = !0), e;
            },
        }),
        w.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o,
                r,
                a,
                s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (o = t.jsonpCallback = d(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Vt, "$1" + o)) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    (t.converters["script json"] = function () {
                        return a || w.error(o + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (r = e[o]),
                    (e[o] = function () {
                        a = arguments;
                    }),
                    i.always(function () {
                        void 0 === r ? w(e).removeProp(o) : (e[o] = r), t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)), a && d(r) && r(a[0]), (a = r = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (((Xt = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Xt.childNodes.length)),
        (w.parseHTML = function (e, t, n) {
            return "string" != typeof e ?
                [] :
                ("boolean" == typeof t && ((n = t), (t = !1)),
                    t || (h.createHTMLDocument ? (((i = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href), t.head.appendChild(i)) : (t = y)),
                    (r = !n && []),
                    (o = A.exec(e)) ? [t.createElement(o[1])] : ((o = be([e], t, r)), r && r.length && w(r).remove(), w.merge([], o.childNodes)));
            var i, o, r;
        }),
        (w.fn.load = function (e, t, n) {
            var i,
                o,
                r,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((i = yt(e.slice(s))), (e = e.slice(0, s))),
                d(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                0 < a.length &&
                w
                .ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                })
                .done(function (e) {
                    (r = arguments), a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                })
                .always(
                    n &&
                    function (e, t) {
                        a.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                        });
                    }
                ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c = w.css(e, "position"),
                    u = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = u.offset()),
                    (r = w.css(e, "top")),
                    (l = w.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? ((a = (i = u.position()).top), (o = i.left)) : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                    d(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + o),
                    "using" in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), u.css(p));
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e ?
                        this :
                        this.each(function (t) {
                            w.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (o.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - o.top - w.css(i, "marginTop", !0),
                        left: t.left - o.left - w.css(i, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (i) {
                return z(
                    this,
                    function (e, i, o) {
                        var r;
                        if ((g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
                        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
                    },
                    e,
                    i,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
                if (n) return (n = We(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            w.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                w.fn[i] = function (o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === r ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, o) {
                            var r;
                            return g(t) ?
                                0 === i.indexOf("outer") ?
                                t["inner" + e] :
                                t.document.documentElement["client" + e] :
                                9 === t.nodeType ?
                                ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) :
                                void 0 === o ?
                                w.css(t, n, s) :
                                w.style(t, n, o, s);
                        },
                        t,
                        a ? o : void 0,
                        a
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
            };
        });
    var $t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (e, t) {
        var n, i, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), d(e)))
            return (
                (i = o.call(arguments, 2)),
                ((r = function () {
                    return e.apply(t || this, i.concat(o.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++),
                r
            );
    }),
    (w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = C),
    (w.isFunction = d),
    (w.isWindow = g),
    (w.camelCase = Y),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
        return null == e ? "" : (e + "").replace($t, "");
    }),
    "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return w;
        });
    var Qt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Qt), w;
        }),
        void 0 === t && (e.jQuery = e.$ = w),
        w
    );
}),
(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var o = t(e),
            r = o.overflow,
            a = o.overflowX,
            s = o.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + a) ? e : i(n(e));
    }

    function o(e) {
        return e && e.referenceNode ? e.referenceNode : e;
    }

    function r(e) {
        return 11 === e ? K : 10 === e ? G : K || G;
    }

    function a(e) {
        if (!e) return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var o = i && i.nodeName;
        return o && "BODY" !== o && "HTML" !== o ? (-1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? a(i) : i) : e ? e.ownerDocument.documentElement : document.documentElement;
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }

    function l(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var c = r.commonAncestorContainer;
        if ((e !== c && t !== c) || i.contains(o))
            return (function (e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || a(e.firstElementChild) === e);
                })(c) ?
                c :
                a(c);
        var u = s(e);
        return u.host ? l(u.host, t) : l(e, s(t).host);
    }

    function c(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || o;
            return r[n];
        }
        return e[n];
    }

    function u(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = c(t, "top"),
            o = c(t, "left"),
            r = n ? -1 : 1;
        return (e.top += i * r), (e.bottom += i * r), (e.left += o * r), (e.right += o * r), e;
    }

    function p(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
    }

    function f(e, t, n, i) {
        return Y(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
        );
    }

    function h(e) {
        var t = e.body,
            n = e.documentElement,
            i = r(10) && getComputedStyle(n);
        return {
            height: f("Height", t, n, i),
            width: f("Width", t, n, i)
        };
    }

    function d(e) {
        return te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }

    function g(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = c(e, "top"),
                    o = c(e, "left");
                (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
            } else n = e.getBoundingClientRect();
        } catch (e) {}
        var a = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            s = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
            l = s.width || e.clientWidth || a.width,
            u = s.height || e.clientHeight || a.height,
            f = e.offsetWidth - l,
            g = e.offsetHeight - u;
        if (f || g) {
            var y = t(e);
            (f -= p(y, "x")), (g -= p(y, "y")), (a.width -= f), (a.height -= g);
        }
        return d(a);
    }

    function y(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            a = r(10),
            s = "HTML" === n.nodeName,
            l = g(e),
            c = g(n),
            p = i(e),
            f = t(n),
            h = parseFloat(f.borderTopWidth),
            y = parseFloat(f.borderLeftWidth);
        o && s && ((c.top = Y(c.top, 0)), (c.left = Y(c.left, 0)));
        var m = d({
            top: l.top - c.top - h,
            left: l.left - c.left - y,
            width: l.width,
            height: l.height
        });
        if (((m.marginTop = 0), (m.marginLeft = 0), !a && s)) {
            var v = parseFloat(f.marginTop),
                b = parseFloat(f.marginLeft);
            (m.top -= h - v), (m.bottom -= h - v), (m.left -= y - b), (m.right -= y - b), (m.marginTop = v), (m.marginLeft = b);
        }
        return (a && !o ? n.contains(p) : n === p && "BODY" !== p.nodeName) && (m = u(m, n)), m;
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = y(e, n),
            o = Y(n.clientWidth, window.innerWidth || 0),
            r = Y(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : c(n),
            s = t ? 0 : c(n, "left"),
            l = {
                top: a - i.top + i.marginTop,
                left: s - i.left + i.marginLeft,
                width: o,
                height: r
            };
        return d(l);
    }

    function v(e) {
        var i = e.nodeName;
        if ("BODY" === i || "HTML" === i) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var o = n(e);
        return !!o && v(o);
    }

    function b(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement;
    }

    function x(e, t, r, a) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            c = {
                top: 0,
                left: 0
            },
            u = s ? b(e) : l(e, o(t));
        if ("viewport" === a) c = m(u, s);
        else {
            var p;
            "scrollParent" === a ? "BODY" === (p = i(n(t))).nodeName && (p = e.ownerDocument.documentElement) : (p = "window" === a ? e.ownerDocument.documentElement : a);
            var f = y(p, u, s);
            if ("HTML" !== p.nodeName || v(u)) c = f;
            else {
                var d = h(e.ownerDocument),
                    g = d.height,
                    x = d.width;
                (c.top += f.top - f.marginTop), (c.bottom = g + f.top), (c.left += f.left - f.marginLeft), (c.right = x + f.left);
            }
        }
        var w = "number" == typeof (r = r || 0);
        return (c.left += w ? r : r.left || 0), (c.top += w ? r : r.top || 0), (c.right -= w ? r : r.right || 0), (c.bottom -= w ? r : r.bottom || 0), c;
    }

    function w(e) {
        return e.width * e.height;
    }

    function _(e, t, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = x(n, i, r, o),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s)
            .map(function (e) {
                return te({
                    key: e
                }, s[e], {
                    area: w(s[e])
                });
            })
            .sort(function (e, t) {
                return t.area - e.area;
            }),
            c = l.filter(function (e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight;
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            p = e.split("-")[1];
        return u + (p ? "-" + p : "");
    }

    function k(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            r = i ? b(t) : l(t, o(n));
        return y(n, r, i);
    }

    function E(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
    }

    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }

    function S(e, t, n) {
        n = n.split("-")[0];
        var i = E(e),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return (o[a] = t[a] + t[l] / 2 - i[l] / 2), (o[s] = n === s ? t[s] - i[c] : t[T(s)]), o;
    }

    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }

    function A(t, n, i) {
        return (
            (void 0 === i ?
                t :
                t.slice(
                    0,
                    (function (e, t, n) {
                        if (Array.prototype.findIndex)
                            return e.findIndex(function (e) {
                                return e[t] === n;
                            });
                        var i = C(e, function (e) {
                            return e[t] === n;
                        });
                        return e.indexOf(i);
                    })(t, "name", i)
                )
            ).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && e(i) && ((n.offsets.popper = d(n.offsets.popper)), (n.offsets.reference = d(n.offsets.reference)), (n = i(n, t)));
            }),
            n
        );
    }

    function L() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            (e.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed)),
            (e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
            (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
            (e = A(this.modifiers, e)),
            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }

    function O(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
        });
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
                r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r;
        }
        return null;
    }

    function M() {
        return (
            (this.state.isDestroyed = !0),
            O(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[N("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }

    function j(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }

    function D(e, t, n, o) {
        var r = "BODY" === e.nodeName,
            a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(t, n, {
            passive: !0
        }), r || D(i(a.parentNode), t, n, o), o.push(a);
    }

    function I(e, t, n, o) {
        (n.updateBound = o), j(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = i(e);
        return D(r, "scroll", n.updateBound, n.scrollParents), (n.scrollElement = r), (n.eventsEnabled = !0), n;
    }

    function P() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
    }

    function R() {
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = (function (e, t) {
                    return (
                        j(e).removeEventListener("resize", t.updateBound),
                        t.scrollParents.forEach(function (e) {
                            e.removeEventListener("scroll", t.updateBound);
                        }),
                        (t.updateBound = null),
                        (t.scrollParents = []),
                        (t.scrollElement = null),
                        (t.eventsEnabled = !1),
                        t
                    );
                })(this.reference, this.state)));
    }

    function H(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }

    function q(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = ""; -
            1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
        });
    }

    function F(e, t, n) {
        var i = C(e, function (e) {
                return e.name === t;
            }),
            o = !!i &&
            e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
            });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return o;
    }

    function W(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = oe.indexOf(e),
            i = oe.slice(n + 1).concat(oe.slice(0, n));
        return t ? i.reverse() : i;
    }

    function z(e, t, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            a = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = a.indexOf(
                C(a, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (
            (c = c.map(function (e, i) {
                var o = (1 === i ? !r : r) ? "height" : "width",
                    a = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (a = !0), e) : a ? ((e[e.length - 1] += t), (a = !1), e) : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return (function (e, t, n, i) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                a = o[2];
                            if (!r) return e;
                            if (0 === a.indexOf("%")) {
                                var s;
                                switch (a) {
                                    case "%p":
                                        s = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        s = i;
                                }
                                return (d(s)[t] / 100) * r;
                            }
                            return "vh" === a || "vw" === a ? (("vh" === a ? Y(document.documentElement.clientHeight, window.innerHeight || 0) : Y(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r : r;
                        })(e, o, t, n);
                    });
            })).forEach(function (e, t) {
                e.forEach(function (n, i) {
                    H(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
                });
            }),
            o
        );
    }
    var U = Math.min,
        B = Math.floor,
        X = Math.round,
        Y = Math.max,
        V = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        $ = (function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (V && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0;
        })(),
        Q =
        V && window.Promise ?
        function (e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                        window.Promise.resolve().then(function () {
                            (t = !1), e();
                        }));
            };
        } :
        function (e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                        setTimeout(function () {
                            (t = !1), e();
                        }, $));
            };
        },
        K = V && !(!window.MSInputMethodContext || !document.documentMode),
        G = V && /MSIE 10/.test(navigator.userAgent),
        J = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        Z = (function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)((n = t[i]).enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
            };
        })(),
        ee = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : (e[t] = n), e;
        },
        te =
        Object.assign ||
        function (e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        },
        ne = V && /Firefox/i.test(navigator.userAgent),
        ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        oe = ie.slice(3),
        re = "flip",
        ae = "clockwise",
        se = "counterclockwise",
        le = (function () {
            function t(n, i) {
                var o = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                J(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(o.update);
                    }),
                    (this.update = Q(this.update.bind(this))),
                    (this.options = te({}, t.Defaults, r)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }),
                    (this.reference = n && n.jquery ? n[0] : n),
                    (this.popper = i && i.jquery ? i[0] : i),
                    (this.options.modifiers = {}),
                    Object.keys(te({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        o.options.modifiers[e] = te({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return te({
                                name: e
                            }, o.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state);
                    }),
                    this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
                Z(t, [{
                        key: "update",
                        value: function () {
                            return L.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return M.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return P.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return R.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (le.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
        (le.placements = ie),
        (le.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var o = e.offsets,
                                r = o.reference,
                                a = o.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = {
                                    start: ee({}, l, r[l]),
                                    end: ee({}, l, r[l] + r[c] - a[c])
                                };
                            e.offsets.popper = te({}, a, u[i]);
                        }
                        return e;
                    },
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n,
                            i = t.offset,
                            o = e.placement,
                            r = e.offsets,
                            a = r.popper,
                            s = r.reference,
                            l = o.split("-")[0];
                        return (
                            (n = H(+i) ? [+i, 0] : z(i, a, s, l)),
                            "left" === l ?
                            ((a.top += n[0]), (a.left -= n[1])) :
                            "right" === l ?
                            ((a.top += n[0]), (a.left += n[1])) :
                            "top" === l ?
                            ((a.left += n[0]), (a.top -= n[1])) :
                            "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
                            (e.popper = a),
                            e
                        );
                    },
                    offset: 0,
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.boundariesElement || a(e.instance.popper);
                        e.instance.reference === n && (n = a(n));
                        var i = N("transform"),
                            o = e.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            l = o[i];
                        (o.top = ""), (o.left = ""), (o[i] = "");
                        var c = x(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        (o.top = r), (o.left = s), (o[i] = l), (t.boundaries = c);
                        var u = t.priority,
                            p = e.offsets.popper,
                            f = {
                                primary: function (e) {
                                    var n = p[e];
                                    return p[e] < c[e] && !t.escapeWithReference && (n = Y(p[e], c[e])), ee({}, e, n);
                                },
                                secondary: function (e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = p[n];
                                    return p[e] > c[e] && !t.escapeWithReference && (i = U(p[n], c[e] - ("right" === e ? p.width : p.height))), ee({}, n, i);
                                },
                            };
                        return (
                            u.forEach(function (e) {
                                var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                p = te({}, p, f[t](e));
                            }),
                            (e.offsets.popper = p),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            o = e.placement.split("-")[0],
                            r = B,
                            a = -1 !== ["top", "bottom"].indexOf(o),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e;
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, n) {
                        var i;
                        if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var o = n.element;
                        if ("string" == typeof o) {
                            if (!(o = e.instance.popper.querySelector(o))) return e;
                        } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            a = e.offsets,
                            s = a.popper,
                            l = a.reference,
                            c = -1 !== ["left", "right"].indexOf(r),
                            u = c ? "height" : "width",
                            p = c ? "Top" : "Left",
                            f = p.toLowerCase(),
                            h = c ? "left" : "top",
                            g = c ? "bottom" : "right",
                            y = E(o)[u];
                        l[g] - y < s[f] && (e.offsets.popper[f] -= s[f] - (l[g] - y)), l[f] + y > s[g] && (e.offsets.popper[f] += l[f] + y - s[g]), (e.offsets.popper = d(e.offsets.popper));
                        var m = l[f] + l[u] / 2 - y / 2,
                            v = t(e.instance.popper),
                            b = parseFloat(v["margin" + p]),
                            x = parseFloat(v["border" + p + "Width"]),
                            w = m - e.offsets.popper[f] - b - x;
                        return (w = Y(U(s[u] - y, w), 0)), (e.arrowElement = o), (e.offsets.arrow = (ee((i = {}), f, X(w)), ee(i, h, ""), i)), e;
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (O(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = x(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            o = T(i),
                            r = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case re:
                                a = [i, o];
                                break;
                            case ae:
                                a = W(i);
                                break;
                            case se:
                                a = W(i, !0);
                                break;
                            default:
                                a = t.behavior;
                        }
                        return (
                            a.forEach(function (s, l) {
                                if (i !== s || a.length === l + 1) return e;
                                (i = e.placement.split("-")[0]), (o = T(i));
                                var c = e.offsets.popper,
                                    u = e.offsets.reference,
                                    p = B,
                                    f = ("left" === i && p(c.right) > p(u.left)) || ("right" === i && p(c.left) < p(u.right)) || ("top" === i && p(c.bottom) > p(u.top)) || ("bottom" === i && p(c.top) < p(u.bottom)),
                                    h = p(c.left) < p(n.left),
                                    d = p(c.right) > p(n.right),
                                    g = p(c.top) < p(n.top),
                                    y = p(c.bottom) > p(n.bottom),
                                    m = ("left" === i && h) || ("right" === i && d) || ("top" === i && g) || ("bottom" === i && y),
                                    v = -1 !== ["top", "bottom"].indexOf(i),
                                    b = !!t.flipVariations && ((v && "start" === r && h) || (v && "end" === r && d) || (!v && "start" === r && g) || (!v && "end" === r && y)),
                                    x = !!t.flipVariationsByContent && ((v && "start" === r && d) || (v && "end" === r && h) || (!v && "start" === r && y) || (!v && "end" === r && g)),
                                    w = b || x;
                                (f || m || w) &&
                                ((e.flipped = !0),
                                    (f || m) && (i = a[l + 1]),
                                    w &&
                                    (r = (function (e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e;
                                    })(r)),
                                    (e.placement = i + (r ? "-" + r : "")),
                                    (e.offsets.popper = te({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement))),
                                    (e = A(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            o = i.popper,
                            r = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return (o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0)), (e.placement = T(t)), (e.offsets.popper = d(o)), e;
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = C(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            o = e.offsets.popper,
                            r = C(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s,
                            l,
                            c = void 0 === r ? t.gpuAcceleration : r,
                            u = a(e.instance.popper),
                            p = g(u),
                            f = {
                                position: o.position
                            },
                            h = (function (e, t) {
                                var n = e.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = X,
                                    a = function (e) {
                                        return e;
                                    },
                                    s = r(o.width),
                                    l = r(i.width),
                                    c = -1 !== ["left", "right"].indexOf(e.placement),
                                    u = -1 !== e.placement.indexOf("-"),
                                    p = t ? (c || u || s % 2 == l % 2 ? r : B) : a,
                                    f = t ? r : a;
                                return {
                                    left: p(1 == s % 2 && 1 == l % 2 && !u && t ? i.left - 1 : i.left),
                                    top: f(i.top),
                                    bottom: f(i.bottom),
                                    right: p(i.right)
                                };
                            })(e, 2 > window.devicePixelRatio || !ne),
                            d = "bottom" === n ? "top" : "bottom",
                            y = "right" === i ? "left" : "right",
                            m = N("transform");
                        if (
                            ((l = "bottom" == d ? ("HTML" === u.nodeName ? -u.clientHeight + h.bottom : -p.height + h.bottom) : h.top),
                                (s = "right" == y ? ("HTML" === u.nodeName ? -u.clientWidth + h.right : -p.width + h.right) : h.left),
                                c && m)
                        )
                            (f[m] = "translate3d(" + s + "px, " + l + "px, 0)"), (f[d] = 0), (f[y] = 0), (f.willChange = "transform");
                        else {
                            var v = "bottom" == d ? -1 : 1,
                                b = "right" == y ? -1 : 1;
                            (f[d] = l * v), (f[y] = s * b), (f.willChange = d + ", " + y);
                        }
                        var x = {
                            "x-placement": e.placement
                        };
                        return (e.attributes = te({}, x, e.attributes)), (e.styles = te({}, f, e.styles)), (e.arrowStyles = te({}, e.offsets.arrow, e.arrowStyles)), e;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return (
                            q(e.instance.popper, e.styles),
                            (function (e, t) {
                                Object.keys(t).forEach(function (n) {
                                    !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
                                });
                            })(e.instance.popper, e.attributes),
                            e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles),
                            e
                        );
                    },
                    onLoad: function (e, t, n, i, o) {
                        var r = k(o, t, e, n.positionFixed),
                            a = _(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), q(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n;
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        le
    );
}),
(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        t(exports, require("jquery"), require("popper.js")) :
        "function" == typeof define && define.amd ?
        define(["exports", "jquery", "popper.js"], t) :
        t(((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}), e.jQuery, e.Popper);
})(this, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var o = i(t),
        r = i(n);

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }

    function s(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
    }

    function l() {
        return (l =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }).apply(this, arguments);
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
            do {
                e += ~~(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
        },
        getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(t) ? t : null;
            } catch (e) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var t = o.default(e).css("transition-duration"),
                n = o.default(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
        },
        reflow: function (e) {
            return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
            o.default(e).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (e) {
            return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = t[i],
                        a =
                        r && c.isElement(r) ?
                        "element" :
                        null === (s = r) || void 0 === s ?
                        "" + s :
                        {}.toString
                        .call(s)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
                }
            var s;
        },
        findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null;
        },
        jQueryDetection: function () {
            if (void 0 === o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = o.default.fn.jquery.split(" ")[0].split(".");
            if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        },
    };
    c.jQueryDetection(),
        (o.default.fn.emulateTransitionEnd = function (e) {
            var t = this,
                n = !1;
            return (
                o.default(this).one(c.TRANSITION_END, function () {
                    n = !0;
                }),
                setTimeout(function () {
                    n || c.triggerTransitionEnd(t);
                }, e),
                this
            );
        }),
        (o.default.event.special[c.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (e) {
                if (o.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            },
        });
    var u = "alert",
        p = o.default.fn[u],
        f = (function () {
            function e(e) {
                this._element = e;
            }
            var t = e.prototype;
            return (
                (t.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.alert"), (this._element = null);
                }),
                (t._getRootElement = function (e) {
                    var t = c.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = document.querySelector(t)), n || (n = o.default(e).closest(".alert")[0]), n;
                }),
                (t._triggerCloseEvent = function (e) {
                    var t = o.default.Event("close.bs.alert");
                    return o.default(e).trigger(t), t;
                }),
                (t._removeElement = function (e) {
                    var t = this;
                    if ((o.default(e).removeClass("show"), o.default(e).hasClass("fade"))) {
                        var n = c.getTransitionDurationFromElement(e);
                        o.default(e)
                            .one(c.TRANSITION_END, function (n) {
                                return t._destroyElement(e, n);
                            })
                            .emulateTransitionEnd(n);
                    } else this._destroyElement(e);
                }),
                (t._destroyElement = function (e) {
                    o.default(e).detach().trigger("closed.bs.alert").remove();
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.alert");
                        i || ((i = new e(this)), n.data("bs.alert", i)), "close" === t && i[t](this);
                    });
                }),
                (e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                }),
                s(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.6.0";
                    },
                }, ]),
                e
            );
        })();
    o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f())),
        (o.default.fn[u] = f._jQueryInterface),
        (o.default.fn[u].Constructor = f),
        (o.default.fn[u].noConflict = function () {
            return (o.default.fn[u] = p), f._jQueryInterface;
        });
    var h = o.default.fn.button,
        d = (function () {
            function e(e) {
                (this._element = e), (this.shouldAvoidTriggerChange = !1);
            }
            var t = e.prototype;
            return (
                (t.toggle = function () {
                    var e = !0,
                        t = !0,
                        n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
                    if (n) {
                        var i = this._element.querySelector('input:not([type="hidden"])');
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains("active")) e = !1;
                                else {
                                    var r = n.querySelector(".active");
                                    r && o.default(r).removeClass("active");
                                }
                            e && (("checkbox" !== i.type && "radio" !== i.type) || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || o.default(i).trigger("change")), i.focus(), (t = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && o.default(this._element).toggleClass("active"));
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.button"), (this._element = null);
                }),
                (e._jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var i = o.default(this),
                            r = i.data("bs.button");
                        r || ((r = new e(this)), i.data("bs.button", r)), (r.shouldAvoidTriggerChange = n), "toggle" === t && r[t]();
                    });
                }),
                s(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.6.0";
                    },
                }, ]),
                e
            );
        })();
    o
        .default(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            var t = e.target,
                n = t;
            if ((o.default(t).hasClass("btn") || (t = o.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))) e.preventDefault();
            else {
                var i = t.querySelector('input:not([type="hidden"])');
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                ("INPUT" !== n.tagName && "LABEL" === t.tagName) || d._jQueryInterface.call(o.default(t), "toggle", "INPUT" === n.tagName);
            }
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            var t = o.default(e.target).closest(".btn")[0];
            o.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
        }),
        o.default(window).on("load.bs.button.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
            }
            for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
                var s = e[r];
                "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
            }
        }),
        (o.default.fn.button = d._jQueryInterface),
        (o.default.fn.button.Constructor = d),
        (o.default.fn.button.noConflict = function () {
            return (o.default.fn.button = h), d._jQueryInterface;
        });
    var g = "carousel",
        y = o.default.fn[g],
        m = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        v = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        b = {
            TOUCH: "touch",
            PEN: "pen"
        },
        x = (function () {
            function e(e, t) {
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                this._addEventListeners();
            }
            var t = e.prototype;
            return (
                (t.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (t.nextWhenVisible = function () {
                    var e = o.default(this._element);
                    !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
                }),
                (t.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (t.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (t.cycle = function (e) {
                    e || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                }),
                (t.to = function (e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                            o.default(this._element).one("slid.bs.carousel", function () {
                                return t.to(e);
                            });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = e > n ? "next" : "prev";
                            this._slide(i, this._items[e]);
                        }
                }),
                (t.dispose = function () {
                    o.default(this._element).off(".bs.carousel"),
                        o.default.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (t._getConfig = function (e) {
                    return (e = l({}, m, e)), c.typeCheckConfig(g, e, v), e;
                }),
                (t._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
                    }
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                        o.default(this._element).on("keydown.bs.carousel", function (t) {
                            return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                        o
                        .default(this._element)
                        .on("mouseenter.bs.carousel", function (t) {
                            return e.pause(t);
                        })
                        .on("mouseleave.bs.carousel", function (t) {
                            return e.cycle(t);
                        }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (t._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var t = function (t) {
                                e._pointerEvent && b[t.originalEvent.pointerType.toUpperCase()] ? (e.touchStartX = t.originalEvent.clientX) : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                            },
                            n = function (t) {
                                e._pointerEvent && b[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                    e._handleSwipe(),
                                    "hover" === e._config.pause &&
                                    (e.pause(),
                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                        (e.touchTimeout = setTimeout(function (t) {
                                            return e.cycle(t);
                                        }, 500 + e._config.interval)));
                            };
                        o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
                                return e.preventDefault();
                            }),
                            this._pointerEvent ?
                            (o.default(this._element).on("pointerdown.bs.carousel", function (e) {
                                    return t(e);
                                }),
                                o.default(this._element).on("pointerup.bs.carousel", function (e) {
                                    return n(e);
                                }),
                                this._element.classList.add("pointer-event")) :
                            (o.default(this._element).on("touchstart.bs.carousel", function (e) {
                                    return t(e);
                                }),
                                o.default(this._element).on("touchmove.bs.carousel", function (t) {
                                    return (function (t) {
                                        t.originalEvent.touches && t.originalEvent.touches.length > 1 ? (e.touchDeltaX = 0) : (e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX);
                                    })(t);
                                }),
                                o.default(this._element).on("touchend.bs.carousel", function (e) {
                                    return n(e);
                                }));
                    }
                }),
                (t._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName))
                        switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next();
                        }
                }),
                (t._getItemIndex = function (e) {
                    return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(e);
                }),
                (t._getItemByDirection = function (e, t) {
                    var n = "next" === e,
                        i = "prev" === e,
                        o = this._getItemIndex(t),
                        r = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return t;
                    var a = (o + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a];
                }),
                (t._triggerSlideEvent = function (e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        r = o.default.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return o.default(this._element).trigger(r), r;
                }),
                (t._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        o.default(t).removeClass("active");
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && o.default(n).addClass("active");
                    }
                }),
                (t._updateInterval = function () {
                    var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                    if (e) {
                        var t = parseInt(e.getAttribute("data-interval"), 10);
                        t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                    }
                }),
                (t._slide = function (e, t) {
                    var n,
                        i,
                        r,
                        a = this,
                        s = this._element.querySelector(".active.carousel-item"),
                        l = this._getItemIndex(s),
                        u = t || (s && this._getItemByDirection(e, s)),
                        p = this._getItemIndex(u),
                        f = Boolean(this._interval);
                    if (("next" === e ? ((n = "carousel-item-left"), (i = "carousel-item-next"), (r = "left")) : ((n = "carousel-item-right"), (i = "carousel-item-prev"), (r = "right")), u && o.default(u).hasClass("active")))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && s && u) {
                        (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(u), (this._activeElement = u);
                        var h = o.default.Event("slid.bs.carousel", {
                            relatedTarget: u,
                            direction: r,
                            from: l,
                            to: p
                        });
                        if (o.default(this._element).hasClass("slide")) {
                            o.default(u).addClass(i), c.reflow(u), o.default(s).addClass(n), o.default(u).addClass(n);
                            var d = c.getTransitionDurationFromElement(s);
                            o.default(s)
                                .one(c.TRANSITION_END, function () {
                                    o
                                        .default(u)
                                        .removeClass(n + " " + i)
                                        .addClass("active"),
                                        o.default(s).removeClass("active " + i + " " + n),
                                        (a._isSliding = !1),
                                        setTimeout(function () {
                                            return o.default(a._element).trigger(h);
                                        }, 0);
                                })
                                .emulateTransitionEnd(d);
                        } else o.default(s).removeClass("active"), o.default(u).addClass("active"), (this._isSliding = !1), o.default(this._element).trigger(h);
                        f && this.cycle();
                    }
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.carousel"),
                            i = l({}, m, o.default(this).data());
                        "object" == typeof t && (i = l({}, i, t));
                        var r = "string" == typeof t ? t : i.slide;
                        if ((n || ((n = new e(this, i)), o.default(this).data("bs.carousel", n)), "number" == typeof t)) n.to(t);
                        else if ("string" == typeof r) {
                            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                            n[r]();
                        } else i.interval && i.ride && (n.pause(), n.cycle());
                    });
                }),
                (e._dataApiClickHandler = function (t) {
                    var n = c.getSelectorFromElement(this);
                    if (n) {
                        var i = o.default(n)[0];
                        if (i && o.default(i).hasClass("carousel")) {
                            var r = l({}, o.default(i).data(), o.default(this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (r.interval = !1), e._jQueryInterface.call(o.default(i), r), a && o.default(i).data("bs.carousel").to(a), t.preventDefault();
                        }
                    }
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return m;
                        },
                    },
                ]),
                e
            );
        })();
    o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", x._dataApiClickHandler),
        o.default(window).on("load.bs.carousel.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                var i = o.default(e[t]);
                x._jQueryInterface.call(i, i.data());
            }
        }),
        (o.default.fn[g] = x._jQueryInterface),
        (o.default.fn[g].Constructor = x),
        (o.default.fn[g].noConflict = function () {
            return (o.default.fn[g] = y), x._jQueryInterface;
        });
    var w = "collapse",
        _ = o.default.fn[w],
        k = {
            toggle: !0,
            parent: ""
        },
        E = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        T = (function () {
            function e(e, t) {
                (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(t)),
                (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        a = c.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                            return t === e;
                        });
                    null !== a && s.length > 0 && ((this._selector = a), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var t = e.prototype;
            return (
                (t.toggle = function () {
                    o.default(this._element).hasClass("show") ? this.hide() : this.show();
                }),
                (t.show = function () {
                    var t,
                        n,
                        i = this;
                    if (
                        !(
                            this._isTransitioning ||
                            o.default(this._element).hasClass("show") ||
                            (this._parent &&
                                0 ===
                                (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                                    return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse");
                                })).length &&
                                (t = null),
                                t && (n = o.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning)
                        )
                    ) {
                        var r = o.default.Event("show.bs.collapse");
                        if ((o.default(this._element).trigger(r), !r.isDefaultPrevented())) {
                            t && (e._jQueryInterface.call(o.default(t).not(this._selector), "hide"), n || o.default(t).data("bs.collapse", null));
                            var a = this._getDimension();
                            o.default(this._element).removeClass("collapse").addClass("collapsing"),
                                (this._element.style[a] = 0),
                                this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                l = c.getTransitionDurationFromElement(this._element);
                            o
                                .default(this._element)
                                .one(c.TRANSITION_END, function () {
                                    o.default(i._element).removeClass("collapsing").addClass("collapse show"), (i._element.style[a] = ""), i.setTransitioning(!1), o.default(i._element).trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(l),
                                (this._element.style[a] = this._element[s] + "px");
                        }
                    }
                }),
                (t.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
                        var t = o.default.Event("hide.bs.collapse");
                        if ((o.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                            var n = this._getDimension();
                            (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), c.reflow(this._element), o.default(this._element).addClass("collapsing").removeClass("collapse show");
                            var i = this._triggerArray.length;
                            if (i > 0)
                                for (var r = 0; r < i; r++) {
                                    var a = this._triggerArray[r],
                                        s = c.getSelectorFromElement(a);
                                    null !== s && (o.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || o.default(a).addClass("collapsed").attr("aria-expanded", !1));
                                }
                            this.setTransitioning(!0), (this._element.style[n] = "");
                            var l = c.getTransitionDurationFromElement(this._element);
                            o.default(this._element)
                                .one(c.TRANSITION_END, function () {
                                    e.setTransitioning(!1), o.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(l);
                        }
                    }
                }),
                (t.setTransitioning = function (e) {
                    this._isTransitioning = e;
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (t._getConfig = function (e) {
                    return ((e = l({}, k, e)).toggle = Boolean(e.toggle)), c.typeCheckConfig(w, e, E), e;
                }),
                (t._getDimension = function () {
                    return o.default(this._element).hasClass("width") ? "width" : "height";
                }),
                (t._getParent = function () {
                    var t,
                        n = this;
                    c.isElement(this._config.parent) ? ((t = this._config.parent), void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(t.querySelectorAll(i));
                    return (
                        o.default(r).each(function (t, i) {
                            n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
                        }),
                        t
                    );
                }),
                (t._addAriaAndCollapsedClass = function (e, t) {
                    var n = o.default(e).hasClass("show");
                    t.length && o.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n);
                }),
                (e._getTargetFromElement = function (e) {
                    var t = c.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null;
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.collapse"),
                            r = l({}, k, n.data(), "object" == typeof t && t ? t : {});
                        if ((!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), i || ((i = new e(this, r)), n.data("bs.collapse", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]();
                        }
                    });
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return k;
                        },
                    },
                ]),
                e
            );
        })();
    o.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = o.default(this),
                n = c.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(n));
            o.default(i).each(function () {
                var e = o.default(this),
                    n = e.data("bs.collapse") ? "toggle" : t.data();
                T._jQueryInterface.call(e, n);
            });
        }),
        (o.default.fn[w] = T._jQueryInterface),
        (o.default.fn[w].Constructor = T),
        (o.default.fn[w].noConflict = function () {
            return (o.default.fn[w] = _), T._jQueryInterface;
        });
    var S = "dropdown",
        C = o.default.fn[S],
        A = new RegExp("38|40|27"),
        L = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        O = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        N = (function () {
            function e(e, t) {
                (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var t = e.prototype;
            return (
                (t.toggle = function () {
                    if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
                        var t = o.default(this._menu).hasClass("show");
                        e._clearMenus(), t || this.show(!0);
                    }
                }),
                (t.show = function (t) {
                    if ((void 0 === t && (t = !1), !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show")))) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = o.default.Event("show.bs.dropdown", n),
                            a = e._getParentFromElement(this._element);
                        if ((o.default(a).trigger(i), !i.isDefaultPrevented())) {
                            if (!this._inNavbar && t) {
                                if (void 0 === r.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                var s = this._element;
                                "parent" === this._config.reference ? (s = a) : c.isElement(this._config.reference) && ((s = this._config.reference), void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && o.default(a).addClass("position-static"),
                                    (this._popper = new r.default(s, this._menu, this._getPopperConfig()));
                            }
                            "ontouchstart" in document.documentElement && 0 === o.default(a).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                o.default(this._menu).toggleClass("show"),
                                o.default(a).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", n));
                        }
                    }
                }),
                (t.hide = function () {
                    if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
                        var t = {
                                relatedTarget: this._element
                            },
                            n = o.default.Event("hide.bs.dropdown", t),
                            i = e._getParentFromElement(this._element);
                        o.default(i).trigger(n),
                            n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass("show"), o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", t)));
                    }
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.dropdown"), o.default(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (t.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    o.default(this._element).on("click.bs.dropdown", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                }),
                (t._getConfig = function (e) {
                    return (e = l({}, this.constructor.Default, o.default(this._element).data(), e)), c.typeCheckConfig(S, e, this.constructor.DefaultType), e;
                }),
                (t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (t._getPlacement = function () {
                    var e = o.default(this._element.parentNode),
                        t = "bottom-start";
                    return (
                        e.hasClass("dropup") ?
                        (t = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start") :
                        e.hasClass("dropright") ?
                        (t = "right-start") :
                        e.hasClass("dropleft") ?
                        (t = "left-start") :
                        o.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"),
                        t
                    );
                }),
                (t._detectNavbar = function () {
                    return o.default(this._element).closest(".navbar").length > 0;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this._config.offset ?
                        (t.fn = function (t) {
                            return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                        }) :
                        (t.offset = this._config.offset),
                        t
                    );
                }),
                (t._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), l({}, e, this._config.popperConfig);
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.dropdown");
                        if ((n || ((n = new e(this, "object" == typeof t ? t : null)), o.default(this).data("bs.dropdown", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]();
                        }
                    });
                }),
                (e._clearMenus = function (t) {
                    if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, r = n.length; i < r; i++) {
                            var a = e._getParentFromElement(n[i]),
                                s = o.default(n[i]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: n[i]
                                };
                            if ((t && "click" === t.type && (l.clickEvent = t), s)) {
                                var c = s._menu;
                                if (o.default(a).hasClass("show") && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && o.default.contains(a, t.target))) {
                                    var u = o.default.Event("hide.bs.dropdown", l);
                                    o.default(a).trigger(u),
                                        u.isDefaultPrevented() ||
                                        ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                                            n[i].setAttribute("aria-expanded", "false"),
                                            s._popper && s._popper.destroy(),
                                            o.default(c).removeClass("show"),
                                            o.default(a).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", l)));
                                }
                            }
                        }
                }),
                (e._getParentFromElement = function (e) {
                    var t,
                        n = c.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode;
                }),
                (e._dataApiKeydownHandler = function (t) {
                    if (
                        !(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || o.default(t.target).closest(".dropdown-menu").length)) : !A.test(t.which)) &&
                        !this.disabled &&
                        !o.default(this).hasClass("disabled")
                    ) {
                        var n = e._getParentFromElement(this),
                            i = o.default(n).hasClass("show");
                        if (i || 27 !== t.which) {
                            if ((t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which))
                                return 27 === t.which && o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void o.default(this).trigger("click");
                            var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
                                return o.default(e).is(":visible");
                            });
                            if (0 !== r.length) {
                                var a = r.indexOf(t.target);
                                38 === t.which && a > 0 && a--, 40 === t.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
                            }
                        }
                    }
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return L;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return O;
                        },
                    },
                ]),
                e
            );
        })();
    o
        .default(document)
        .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler)
        .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus)
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
            e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(o.default(this), "toggle");
        })
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
            e.stopPropagation();
        }),
        (o.default.fn[S] = N._jQueryInterface),
        (o.default.fn[S].Constructor = N),
        (o.default.fn[S].noConflict = function () {
            return (o.default.fn[S] = C), N._jQueryInterface;
        });
    var M = o.default.fn.modal,
        j = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        D = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        I = (function () {
            function e(e, t) {
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._dialog = e.querySelector(".modal-dialog")),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollbarWidth = 0);
            }
            var t = e.prototype;
            return (
                (t.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e);
                }),
                (t.show = function (e) {
                    var t = this;
                    if (!this._isShown && !this._isTransitioning) {
                        o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var n = o.default.Event("show.bs.modal", {
                            relatedTarget: e
                        });
                        o.default(this._element).trigger(n),
                            this._isShown ||
                            n.isDefaultPrevented() ||
                            ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (e) {
                                    return t.hide(e);
                                }),
                                o.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                    o.default(t._element).one("mouseup.dismiss.bs.modal", function (e) {
                                        o.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return t._showElement(e);
                                }));
                    }
                }),
                (t.hide = function (e) {
                    var t = this;
                    if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var n = o.default.Event("hide.bs.modal");
                        if ((o.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                            this._isShown = !1;
                            var i = o.default(this._element).hasClass("fade");
                            if (
                                (i && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    o.default(document).off("focusin.bs.modal"),
                                    o.default(this._element).removeClass("show"),
                                    o.default(this._element).off("click.dismiss.bs.modal"),
                                    o.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                                    i)
                            ) {
                                var r = c.getTransitionDurationFromElement(this._element);
                                o.default(this._element)
                                    .one(c.TRANSITION_END, function (e) {
                                        return t._hideModal(e);
                                    })
                                    .emulateTransitionEnd(r);
                            } else this._hideModal();
                        }
                    }
                }),
                (t.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (e) {
                            return o.default(e).off(".bs.modal");
                        }),
                        o.default(document).off("focusin.bs.modal"),
                        o.default.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (t.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (t._getConfig = function (e) {
                    return (e = l({}, j, e)), c.typeCheckConfig("modal", e, D), e;
                }),
                (t._triggerBackdropTransition = function () {
                    var e = this,
                        t = o.default.Event("hidePrevented.bs.modal");
                    if ((o.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                        var n = this._element.scrollHeight > document.documentElement.clientHeight;
                        n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                        var i = c.getTransitionDurationFromElement(this._dialog);
                        o.default(this._element).off(c.TRANSITION_END),
                            o
                            .default(this._element)
                            .one(c.TRANSITION_END, function () {
                                e._element.classList.remove("modal-static"),
                                    n ||
                                    o
                                    .default(e._element)
                                    .one(c.TRANSITION_END, function () {
                                        e._element.style.overflowY = "";
                                    })
                                    .emulateTransitionEnd(e._element, i);
                            })
                            .emulateTransitionEnd(i),
                            this._element.focus();
                    }
                }),
                (t._showElement = function (e) {
                    var t = this,
                        n = o.default(this._element).hasClass("fade"),
                        i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? (i.scrollTop = 0) : (this._element.scrollTop = 0),
                        n && c.reflow(this._element),
                        o.default(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = o.default.Event("shown.bs.modal", {
                            relatedTarget: e
                        }),
                        a = function () {
                            t._config.focus && t._element.focus(), (t._isTransitioning = !1), o.default(t._element).trigger(r);
                        };
                    if (n) {
                        var s = c.getTransitionDurationFromElement(this._dialog);
                        o.default(this._dialog).one(c.TRANSITION_END, a).emulateTransitionEnd(s);
                    } else a();
                }),
                (t._enforceFocus = function () {
                    var e = this;
                    o.default(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (t) {
                            document !== t.target && e._element !== t.target && 0 === o.default(e._element).has(t.target).length && e._element.focus();
                        });
                }),
                (t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ?
                        o.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
                            e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
                        }) :
                        this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal");
                }),
                (t._setResizeEvent = function () {
                    var e = this;
                    this._isShown ?
                        o.default(window).on("resize.bs.modal", function (t) {
                            return e.handleUpdate(t);
                        }) :
                        o.default(window).off("resize.bs.modal");
                }),
                (t._hideModal = function () {
                    var e = this;
                    (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            o.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), o.default(e._element).trigger("hidden.bs.modal");
                        });
                }),
                (t._removeBackdrop = function () {
                    this._backdrop && (o.default(this._backdrop).remove(), (this._backdrop = null));
                }),
                (t._showBackdrop = function (e) {
                    var t = this,
                        n = o.default(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                                (this._backdrop.className = "modal-backdrop"),
                                n && this._backdrop.classList.add(n),
                                o.default(this._backdrop).appendTo(document.body),
                                o.default(this._element).on("click.dismiss.bs.modal", function (e) {
                                    t._ignoreBackdropClick ? (t._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
                                }),
                                n && c.reflow(this._backdrop),
                                o.default(this._backdrop).addClass("show"),
                                !e)
                        )
                            return;
                        if (!n) return void e();
                        var i = c.getTransitionDurationFromElement(this._backdrop);
                        o.default(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        o.default(this._backdrop).removeClass("show");
                        var r = function () {
                            t._removeBackdrop(), e && e();
                        };
                        if (o.default(this._element).hasClass("fade")) {
                            var a = c.getTransitionDurationFromElement(this._backdrop);
                            o.default(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                    } else e && e();
                }),
                (t._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (t._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (t._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (t._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            n = [].slice.call(document.querySelectorAll(".sticky-top"));
                        o.default(t).each(function (t, n) {
                                var i = n.style.paddingRight,
                                    r = o.default(n).css("padding-right");
                                o.default(n)
                                    .data("padding-right", i)
                                    .css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
                            }),
                            o.default(n).each(function (t, n) {
                                var i = n.style.marginRight,
                                    r = o.default(n).css("margin-right");
                                o.default(n)
                                    .data("margin-right", i)
                                    .css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
                            });
                        var i = document.body.style.paddingRight,
                            r = o.default(document.body).css("padding-right");
                        o.default(document.body)
                            .data("padding-right", i)
                            .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                    }
                    o.default(document.body).addClass("modal-open");
                }),
                (t._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    o.default(e).each(function (e, t) {
                        var n = o.default(t).data("padding-right");
                        o.default(t).removeData("padding-right"), (t.style.paddingRight = n || "");
                    });
                    var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                    o.default(t).each(function (e, t) {
                        var n = o.default(t).data("margin-right");
                        void 0 !== n && o.default(t).css("margin-right", n).removeData("margin-right");
                    });
                    var n = o.default(document.body).data("padding-right");
                    o.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                }),
                (t._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t;
                }),
                (e._jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var i = o.default(this).data("bs.modal"),
                            r = l({}, j, o.default(this).data(), "object" == typeof t && t ? t : {});
                        if ((i || ((i = new e(this, r)), o.default(this).data("bs.modal", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t](n);
                        } else r.show && i.show(n);
                    });
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return j;
                        },
                    },
                ]),
                e
            );
        })();
    o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var t,
                n = this,
                i = c.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = o.default(t).data("bs.modal") ? "toggle" : l({}, o.default(t).data(), o.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
            var a = o.default(t).one("show.bs.modal", function (e) {
                e.isDefaultPrevented() ||
                    a.one("hidden.bs.modal", function () {
                        o.default(n).is(":visible") && n.focus();
                    });
            });
            I._jQueryInterface.call(o.default(t), r, this);
        }),
        (o.default.fn.modal = I._jQueryInterface),
        (o.default.fn.modal.Constructor = I),
        (o.default.fn.modal.noConflict = function () {
            return (o.default.fn.modal = M), I._jQueryInterface;
        });
    var P = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        R = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function q(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (
            var i = new window.DOMParser().parseFromString(e, "text/html"),
                o = Object.keys(t),
                r = [].slice.call(i.body.querySelectorAll("*")),
                a = function (e, n) {
                    var i = r[e],
                        a = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var s = [].slice.call(i.attributes),
                        l = [].concat(t["*"] || [], t[a] || []);
                    s.forEach(function (e) {
                        (function (e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === P.indexOf(n) || Boolean(e.nodeValue.match(R) || e.nodeValue.match(H));
                            for (
                                var i = t.filter(function (e) {
                                        return e instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length; o < r; o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(e, l) || i.removeAttribute(e.nodeName);
                    });
                },
                s = 0,
                l = r.length; s < l; s++
        )
            a(s);
        return i.body.innerHTML;
    }
    var F = "tooltip",
        W = o.default.fn[F],
        z = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        U = ["sanitize", "whiteList", "sanitizeFn"],
        B = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        X = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Y = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        V = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        $ = (function () {
            function e(e, t) {
                if (void 0 === r.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners();
            }
            var t = e.prototype;
            return (
                (t.enable = function () {
                    this._isEnabled = !0;
                }),
                (t.disable = function () {
                    this._isEnabled = !1;
                }),
                (t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (t.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = o.default(e.currentTarget).data(t);
                            n || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), o.default(e.currentTarget).data(t, n)),
                                (n._activeTrigger.click = !n._activeTrigger.click),
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                        } else {
                            if (o.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        o.default.removeData(this.element, this.constructor.DATA_KEY),
                        o.default(this.element).off(this.constructor.EVENT_KEY),
                        o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && o.default(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (t.show = function () {
                    var e = this;
                    if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = o.default.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        o.default(this.element).trigger(t);
                        var n = c.findShadowRoot(this.element),
                            i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var a = this.getTipElement(),
                            s = c.getUID(this.constructor.NAME);
                        a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o.default(a).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            u = this._getAttachment(l);
                        this.addAttachmentClass(u);
                        var p = this._getContainer();
                        o.default(a).data(this.constructor.DATA_KEY, this),
                            o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(a).appendTo(p),
                            o.default(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new r.default(this.element, a, this._getPopperConfig(u))),
                            o.default(a).addClass("show"),
                            o.default(a).addClass(this.config.customClass),
                            "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                        var f = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            (e._hoverState = null), o.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
                        };
                        if (o.default(this.tip).hasClass("fade")) {
                            var h = c.getTransitionDurationFromElement(this.tip);
                            o.default(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(h);
                        } else f();
                    }
                }),
                (t.hide = function (e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = o.default.Event(this.constructor.Event.HIDE),
                        r = function () {
                            "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n),
                                t._cleanTipClass(),
                                t.element.removeAttribute("aria-describedby"),
                                o.default(t.element).trigger(t.constructor.Event.HIDDEN),
                                null !== t._popper && t._popper.destroy(),
                                e && e();
                        };
                    if ((o.default(this.element).trigger(i), !i.isDefaultPrevented())) {
                        if (
                            (o.default(n).removeClass("show"),
                                "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger.focus = !1),
                                (this._activeTrigger.hover = !1),
                                o.default(this.tip).hasClass("fade"))
                        ) {
                            var a = c.getTransitionDurationFromElement(n);
                            o.default(n).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                        this._hoverState = "";
                    }
                }),
                (t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (t.addAttachmentClass = function (e) {
                    o.default(this.getTipElement()).addClass("bs-tooltip-" + e);
                }),
                (t.getTipElement = function () {
                    return (this.tip = this.tip || o.default(this.config.template)[0]), this.tip;
                }),
                (t.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(e).removeClass("fade show");
                }),
                (t.setElementContent = function (e, t) {
                    "object" != typeof t || (!t.nodeType && !t.jquery) ?
                        this.config.html ?
                        (this.config.sanitize && (t = q(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) :
                        e.text(t) :
                        this.config.html ?
                        o.default(t).parent().is(e) || e.empty().append(t) :
                        e.text(o.default(t).text());
                }),
                (t.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                }),
                (t._getPopperConfig = function (e) {
                    var t = this;
                    return l({}, {
                            placement: e,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: ".arrow"
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function (e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                            },
                            onUpdate: function (e) {
                                return t._handlePopperPlacementChange(e);
                            },
                        },
                        this.config.popperConfig
                    );
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this.config.offset ?
                        (t.fn = function (t) {
                            return (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                        }) :
                        (t.offset = this.config.offset),
                        t
                    );
                }),
                (t._getContainer = function () {
                    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
                }),
                (t._getAttachment = function (e) {
                    return X[e.toUpperCase()];
                }),
                (t._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                            if ("click" === t)
                                o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                    return e.toggle(t);
                                });
                            else if ("manual" !== t) {
                                var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    i = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                o.default(e.element)
                                    .on(n, e.config.selector, function (t) {
                                        return e._enter(t);
                                    })
                                    .on(i, e.config.selector, function (t) {
                                        return e._leave(t);
                                    });
                            }
                        }),
                        (this._hideModalHandler = function () {
                            e.element && e.hide();
                        }),
                        o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? (this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        })) : this._fixTitle();
                }),
                (t._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (t._enter = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || o.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), o.default(e.currentTarget).data(n, t)),
                    e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
                        o.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ?
                        (t._hoverState = "show") :
                        (clearTimeout(t._timeout),
                            (t._hoverState = "show"),
                            t.config.delay && t.config.delay.show ?
                            (t._timeout = setTimeout(function () {
                                "show" === t._hoverState && t.show();
                            }, t.config.delay.show)) :
                            t.show());
                }),
                (t._leave = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || o.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), o.default(e.currentTarget).data(n, t)),
                    e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1),
                        t._isWithActiveTrigger() ||
                        (clearTimeout(t._timeout),
                            (t._hoverState = "out"),
                            t.config.delay && t.config.delay.hide ?
                            (t._timeout = setTimeout(function () {
                                "out" === t._hoverState && t.hide();
                            }, t.config.delay.hide)) :
                            t.hide());
                }),
                (t._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1;
                }),
                (t._getConfig = function (e) {
                    var t = o.default(this.element).data();
                    return (
                        Object.keys(t).forEach(function (e) {
                            -1 !== U.indexOf(e) && delete t[e];
                        }),
                        "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }),
                        "number" == typeof e.title && (e.title = e.title.toString()),
                        "number" == typeof e.content && (e.content = e.content.toString()),
                        c.typeCheckConfig(F, e, this.constructor.DefaultType),
                        e.sanitize && (e.template = q(e.template, e.whiteList, e.sanitizeFn)),
                        e
                    );
                }),
                (t._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e;
                }),
                (t._cleanTipClass = function () {
                    var e = o.default(this.getTipElement()),
                        t = e.attr("class").match(z);
                    null !== t && t.length && e.removeClass(t.join(""));
                }),
                (t._handlePopperPlacementChange = function (e) {
                    (this.tip = e.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
                }),
                (t._fixTransition = function () {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (o.default(e).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = t));
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tooltip"),
                            r = "object" == typeof t && t;
                        if ((i || !/dispose|hide/.test(t)) && (i || ((i = new e(this, r)), n.data("bs.tooltip", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]();
                        }
                    });
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Y;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return F;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return V;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return B;
                        },
                    },
                ]),
                e
            );
        })();
    (o.default.fn[F] = $._jQueryInterface),
    (o.default.fn[F].Constructor = $),
    (o.default.fn[F].noConflict = function () {
        return (o.default.fn[F] = W), $._jQueryInterface;
    });
    var Q = "popover",
        K = o.default.fn[Q],
        G = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        J = l({}, $.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Z = l({}, $.DefaultType, {
            content: "(string|element|function)"
        }),
        ee = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        te = (function (e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this;
            }
            (n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n);
            var r = i.prototype;
            return (
                (r.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (r.addAttachmentClass = function (e) {
                    o.default(this.getTipElement()).addClass("bs-popover-" + e);
                }),
                (r.getTipElement = function () {
                    return (this.tip = this.tip || o.default(this.config.template)[0]), this.tip;
                }),
                (r.setContent = function () {
                    var e = o.default(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
                }),
                (r._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (r._cleanTipClass = function () {
                    var e = o.default(this.getTipElement()),
                        t = e.attr("class").match(G);
                    null !== t && t.length > 0 && e.removeClass(t.join(""));
                }),
                (i._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = o.default(this).data("bs.popover"),
                            n = "object" == typeof e ? e : null;
                        if ((t || !/dispose|hide/.test(e)) && (t || ((t = new i(this, n)), o.default(this).data("bs.popover", t)), "string" == typeof e)) {
                            if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                s(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return J;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Q;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return ee;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Z;
                        },
                    },
                ]),
                i
            );
        })($);
    (o.default.fn[Q] = te._jQueryInterface),
    (o.default.fn[Q].Constructor = te),
    (o.default.fn[Q].noConflict = function () {
        return (o.default.fn[Q] = K), te._jQueryInterface;
    });
    var ne = "scrollspy",
        ie = o.default.fn[ne],
        oe = {
            offset: 10,
            method: "auto",
            target: ""
        },
        re = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ae = (function () {
            function e(e, t) {
                var n = this;
                (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(t)),
                (this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                o.default(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
                        return n._process(e);
                    }),
                    this.refresh(),
                    this._process();
            }
            var t = e.prototype;
            return (
                (t.refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        n = "auto" === this._config.method ? t : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .map(function (e) {
                            var t,
                                r = c.getSelectorFromElement(e);
                            if ((r && (t = document.querySelector(r)), t)) {
                                var a = t.getBoundingClientRect();
                                if (a.width || a.height) return [o.default(t)[n]().top + i, r];
                            }
                            return null;
                        })
                        .filter(function (e) {
                            return e;
                        })
                        .sort(function (e, t) {
                            return e[0] - t[0];
                        })
                        .forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1]);
                        });
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.scrollspy"),
                        o.default(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (t._getConfig = function (e) {
                    if ("string" != typeof (e = l({}, oe, "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
                        var t = o.default(e.target).attr("id");
                        t || ((t = c.getUID(ne)), o.default(e.target).attr("id", t)), (e.target = "#" + t);
                    }
                    return c.typeCheckConfig(ne, e, re), e;
                }),
                (t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (t._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
                    }
                }),
                (t._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",").map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                        }),
                        n = o.default([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass("dropdown-item") ?
                        (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) :
                        (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        o.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                            relatedTarget: e
                        });
                }),
                (t._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (e) {
                            return e.classList.contains("active");
                        })
                        .forEach(function (e) {
                            return e.classList.remove("active");
                        });
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.scrollspy");
                        if ((n || ((n = new e(this, "object" == typeof t && t)), o.default(this).data("bs.scrollspy", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]();
                        }
                    });
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return oe;
                        },
                    },
                ]),
                e
            );
        })();
    o.default(window).on("load.bs.scrollspy.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                var n = o.default(e[t]);
                ae._jQueryInterface.call(n, n.data());
            }
        }),
        (o.default.fn[ne] = ae._jQueryInterface),
        (o.default.fn[ne].Constructor = ae),
        (o.default.fn[ne].noConflict = function () {
            return (o.default.fn[ne] = ie), ae._jQueryInterface;
        });
    var se = o.default.fn.tab,
        le = (function () {
            function e(e) {
                this._element = e;
            }
            var t = e.prototype;
            return (
                (t.show = function () {
                    var e = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active")) || o.default(this._element).hasClass("disabled"))) {
                        var t,
                            n,
                            i = o.default(this._element).closest(".nav, .list-group")[0],
                            r = c.getSelectorFromElement(this._element);
                        if (i) {
                            var a = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
                            n = (n = o.default.makeArray(o.default(i).find(a)))[n.length - 1];
                        }
                        var s = o.default.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            }),
                            l = o.default.Event("show.bs.tab", {
                                relatedTarget: n
                            });
                        if ((n && o.default(n).trigger(s), o.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented())) {
                            r && (t = document.querySelector(r)), this._activate(this._element, i);
                            var u = function () {
                                var t = o.default.Event("hidden.bs.tab", {
                                        relatedTarget: e._element
                                    }),
                                    i = o.default.Event("shown.bs.tab", {
                                        relatedTarget: n
                                    });
                                o.default(n).trigger(t), o.default(e._element).trigger(i);
                            };
                            t ? this._activate(t, t.parentNode, u) : u();
                        }
                    }
                }),
                (t.dispose = function () {
                    o.default.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (t._activate = function (e, t, n) {
                    var i = this,
                        r = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? o.default(t).children(".active") : o.default(t).find("> li > .active"))[0],
                        a = n && r && o.default(r).hasClass("fade"),
                        s = function () {
                            return i._transitionComplete(e, r, n);
                        };
                    if (r && a) {
                        var l = c.getTransitionDurationFromElement(r);
                        o.default(r).removeClass("show").one(c.TRANSITION_END, s).emulateTransitionEnd(l);
                    } else s();
                }),
                (t._transitionComplete = function (e, t, n) {
                    if (t) {
                        o.default(t).removeClass("active");
                        var i = o.default(t.parentNode).find("> .dropdown-menu .active")[0];
                        i && o.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                    }
                    if (
                        (o.default(e).addClass("active"),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                            c.reflow(e),
                            e.classList.contains("fade") && e.classList.add("show"),
                            e.parentNode && o.default(e.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var r = o.default(e).closest(".dropdown")[0];
                        if (r) {
                            var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                            o.default(a).addClass("active");
                        }
                        e.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tab");
                        if ((i || ((i = new e(this)), n.data("bs.tab", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]();
                        }
                    });
                }),
                s(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.6.0";
                    },
                }, ]),
                e
            );
        })();
    o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), le._jQueryInterface.call(o.default(this), "show");
        }),
        (o.default.fn.tab = le._jQueryInterface),
        (o.default.fn.tab.Constructor = le),
        (o.default.fn.tab.noConflict = function () {
            return (o.default.fn.tab = se), le._jQueryInterface;
        });
    var ce = o.default.fn.toast,
        ue = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        pe = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        fe = (function () {
            function e(e, t) {
                (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
            }
            var t = e.prototype;
            return (
                (t.show = function () {
                    var e = this,
                        t = o.default.Event("show.bs.toast");
                    if ((o.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        var n = function () {
                            e._element.classList.remove("showing"),
                                e._element.classList.add("show"),
                                o.default(e._element).trigger("shown.bs.toast"),
                                e._config.autohide &&
                                (e._timeout = setTimeout(function () {
                                    e.hide();
                                }, e._config.delay));
                        };
                        if ((this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                            var i = c.getTransitionDurationFromElement(this._element);
                            o.default(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
                        } else n();
                    }
                }),
                (t.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = o.default.Event("hide.bs.toast");
                        o.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
                    }
                }),
                (t.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        o.default(this._element).off("click.dismiss.bs.toast"),
                        o.default.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (t._getConfig = function (e) {
                    return (e = l({}, pe, o.default(this._element).data(), "object" == typeof e && e ? e : {})), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
                }),
                (t._setListeners = function () {
                    var e = this;
                    o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                        return e.hide();
                    });
                }),
                (t._close = function () {
                    var e = this,
                        t = function () {
                            e._element.classList.add("hide"), o.default(e._element).trigger("hidden.bs.toast");
                        };
                    if ((this._element.classList.remove("show"), this._config.animation)) {
                        var n = c.getTransitionDurationFromElement(this._element);
                        o.default(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(n);
                    } else t();
                }),
                (t._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.toast");
                        if ((i || ((i = new e(this, "object" == typeof t && t)), n.data("bs.toast", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t](this);
                        }
                    });
                }),
                s(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.6.0";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ue;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return pe;
                        },
                    },
                ]),
                e
            );
        })();
    (o.default.fn.toast = fe._jQueryInterface),
    (o.default.fn.toast.Constructor = fe),
    (o.default.fn.toast.noConflict = function () {
        return (o.default.fn.toast = ce), fe._jQueryInterface;
    }),
    (e.Alert = f),
    (e.Button = d),
    (e.Carousel = x),
    (e.Collapse = T),
    (e.Dropdown = N),
    (e.Modal = I),
    (e.Popover = te),
    (e.Scrollspy = ae),
    (e.Tab = le),
    (e.Toast = fe),
    (e.Tooltip = $),
    (e.Util = c),
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
}),
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).PerfectScrollbar = t());
})(this, function () {
    "use strict";
    var e = Math.abs,
        t = Math.floor;

    function n(e) {
        return getComputedStyle(e);
    }

    function i(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"), (e.style[n] = i);
        }
        return e;
    }

    function o(e) {
        var t = document.createElement("div");
        return (t.className = e), t;
    }

    function r(e, t) {
        if (!b) throw new Error("No element matching method supported");
        return b.call(e, t);
    }

    function a(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
    }

    function s(e, t) {
        return Array.prototype.filter.call(e.children, function (e) {
            return r(e, t);
        });
    }

    function l(e, t) {
        var n = e.element.classList,
            i = x.state.scrolling(t);
        n.contains(i) ? clearTimeout(w[t]) : n.add(i);
    }

    function c(e, t) {
        w[t] = setTimeout(function () {
            return e.isAlive && e.element.classList.remove(x.state.scrolling(t));
        }, e.settings.scrollingThreshold);
    }

    function u(e, t) {
        l(e, t), c(e, t);
    }

    function p(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t;
    }

    function f(e, t, n, i, o) {
        var r;
        if ((void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === t)) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== t) throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
        }!(function (e, t, n, i, o) {
            var r = n[0],
                a = n[1],
                s = n[2],
                l = n[3],
                c = n[4],
                f = n[5];
            void 0 === i && (i = !0), void 0 === o && (o = !1);
            var h = e.element;
            (e.reach[l] = null),
            1 > h[s] && (e.reach[l] = "start"),
                h[s] > e[r] - e[a] - 1 && (e.reach[l] = "end"),
                t && (h.dispatchEvent(p("ps-scroll-" + l)), 0 > t ? h.dispatchEvent(p("ps-scroll-" + c)) : 0 < t && h.dispatchEvent(p("ps-scroll-" + f)), i && u(e, l)),
                e.reach[l] && (t || o) && h.dispatchEvent(p("ps-" + l + "-reach-" + e.reach[l]));
        })(e, n, r, i, o);
    }

    function h(e) {
        return parseInt(e, 10) || 0;
    }

    function d(e) {
        return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]");
    }

    function g(e) {
        var n = Math.ceil,
            i = e.element,
            o = t(i.scrollTop),
            r = i.getBoundingClientRect();
        (e.containerWidth = n(r.width)),
        (e.containerHeight = n(r.height)),
        (e.contentWidth = i.scrollWidth),
        (e.contentHeight = i.scrollHeight),
        i.contains(e.scrollbarXRail) ||
            (s(i, x.element.rail("x")).forEach(function (e) {
                    return a(e);
                }),
                i.appendChild(e.scrollbarXRail)),
            i.contains(e.scrollbarYRail) ||
            (s(i, x.element.rail("y")).forEach(function (e) {
                    return a(e);
                }),
                i.appendChild(e.scrollbarYRail)),
            !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ?
            ((e.scrollbarXActive = !0),
                (e.railXWidth = e.containerWidth - e.railXMarginWidth),
                (e.railXRatio = e.containerWidth / e.railXWidth),
                (e.scrollbarXWidth = y(e, h((e.railXWidth * e.containerWidth) / e.contentWidth))),
                (e.scrollbarXLeft = h(((e.negativeScrollAdjustment + i.scrollLeft) * (e.railXWidth - e.scrollbarXWidth)) / (e.contentWidth - e.containerWidth)))) :
            (e.scrollbarXActive = !1),
            !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ?
            ((e.scrollbarYActive = !0),
                (e.railYHeight = e.containerHeight - e.railYMarginHeight),
                (e.railYRatio = e.containerHeight / e.railYHeight),
                (e.scrollbarYHeight = y(e, h((e.railYHeight * e.containerHeight) / e.contentHeight))),
                (e.scrollbarYTop = h((o * (e.railYHeight - e.scrollbarYHeight)) / (e.contentHeight - e.containerHeight)))) :
            (e.scrollbarYActive = !1),
            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
            m(i, e),
            e.scrollbarXActive ? i.classList.add(x.state.active("x")) : (i.classList.remove(x.state.active("x")), (e.scrollbarXWidth = 0), (e.scrollbarXLeft = 0), (i.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0)),
            e.scrollbarYActive ? i.classList.add(x.state.active("y")) : (i.classList.remove(x.state.active("y")), (e.scrollbarYHeight = 0), (e.scrollbarYTop = 0), (i.scrollTop = 0));
    }

    function y(e, t) {
        var n = Math.min,
            i = Math.max;
        return e.settings.minScrollbarLength && (t = i(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = n(t, e.settings.maxScrollbarLength)), t;
    }

    function m(e, n) {
        var o = {
                width: n.railXWidth
            },
            r = t(e.scrollTop);
        (o.left = n.isRtl ? n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : e.scrollLeft),
        n.isScrollbarXUsingBottom ? (o.bottom = n.scrollbarXBottom - r) : (o.top = n.scrollbarXTop + r),
            i(n.scrollbarXRail, o);
        var a = {
            top: r,
            height: n.railYHeight
        };
        n.isScrollbarYUsingRight ?
            n.isRtl ?
            (a.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9) :
            (a.right = n.scrollbarYRight - e.scrollLeft) :
            n.isRtl ?
            (a.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth) :
            (a.left = n.scrollbarYLeft + e.scrollLeft),
            i(n.scrollbarYRail, a),
            i(n.scrollbarX, {
                left: n.scrollbarXLeft,
                width: n.scrollbarXWidth - n.railBorderXWidth
            }),
            i(n.scrollbarY, {
                top: n.scrollbarYTop,
                height: n.scrollbarYHeight - n.railBorderYWidth
            });
    }

    function v(e, t) {
        function n(t) {
            t.touches && t.touches[0] && (t[s] = t.touches[0].pageY), (m[h] = v + w * (t[s] - b)), l(e, d), g(e), t.stopPropagation(), t.preventDefault();
        }

        function i() {
            c(e, d), e[y].classList.remove(x.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n);
        }

        function o(t, o) {
            (v = m[h]),
            o && t.touches && (t[s] = t.touches[0].pageY),
                (b = t[s]),
                (w = (e[a] - e[r]) / (e[u] - e[f])),
                o ? e.event.bind(e.ownerDocument, "touchmove", n) : (e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), t.preventDefault()),
                e[y].classList.add(x.state.clicking),
                t.stopPropagation();
        }
        var r = t[0],
            a = t[1],
            s = t[2],
            u = t[3],
            p = t[4],
            f = t[5],
            h = t[6],
            d = t[7],
            y = t[8],
            m = e.element,
            v = null,
            b = null,
            w = null;
        e.event.bind(e[p], "mousedown", function (e) {
                o(e);
            }),
            e.event.bind(e[p], "touchstart", function (e) {
                o(e, !0);
            });
    }
    var b = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        x = {
            main: "ps",
            rtl: "ps__rtl",
            element: {
                thumb: function (e) {
                    return "ps__thumb-" + e;
                },
                rail: function (e) {
                    return "ps__rail-" + e;
                },
                consuming: "ps__child--consume",
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (e) {
                    return "ps--active-" + e;
                },
                scrolling: function (e) {
                    return "ps--scrolling-" + e;
                },
            },
        },
        w = {
            x: null,
            y: null
        },
        _ = function (e) {
            (this.element = e), (this.handlers = {});
        },
        k = {
            isEmpty: {
                configurable: !0
            }
        };
    (_.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
    }),
    (_.prototype.unbind = function (e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function (i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1);
        });
    }),
    (_.prototype.unbindAll = function () {
        for (var e in this.handlers) this.unbind(e);
    }),
    (k.isEmpty.get = function () {
        var e = this;
        return Object.keys(this.handlers).every(function (t) {
            return 0 === e.handlers[t].length;
        });
    }),
    Object.defineProperties(_.prototype, k);
    var E = function () {
        this.eventElements = [];
    };
    (E.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
            return t.element === e;
        })[0];
        return t || ((t = new _(e)), this.eventElements.push(t)), t;
    }),
    (E.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n);
    }),
    (E.prototype.unbind = function (e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
    }),
    (E.prototype.unbindAll = function () {
        this.eventElements.forEach(function (e) {
                return e.unbindAll();
            }),
            (this.eventElements = []);
    }),
    (E.prototype.once = function (e, t, n) {
        var i = this.eventElement(e),
            o = function (e) {
                i.unbind(t, o), n(e);
            };
        i.bind(t, o);
    });
    var T = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || ("maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints) || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
        },
        S = {
            "click-rail": function (e) {
                e.element,
                    e.event.bind(e.scrollbarY, "mousedown", function (e) {
                        return e.stopPropagation();
                    }),
                    e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                        var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                        (e.element.scrollTop += n * e.containerHeight), g(e), t.stopPropagation();
                    }),
                    e.event.bind(e.scrollbarX, "mousedown", function (e) {
                        return e.stopPropagation();
                    }),
                    e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                        var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                        (e.element.scrollLeft += n * e.containerWidth), g(e), t.stopPropagation();
                    });
            },
            "drag-thumb": function (e) {
                v(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                    v(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
            },
            keyboard: function (e) {
                var n = e.element,
                    i = function () {
                        return r(n, ":hover");
                    },
                    o = function () {
                        return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus");
                    };
                e.event.bind(e.ownerDocument, "keydown", function (r) {
                    if (!((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) && (i() || o())) {
                        var a = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (a) {
                            if ("IFRAME" === a.tagName) a = a.contentDocument.activeElement;
                            else
                                for (; a.shadowRoot;) a = a.shadowRoot.activeElement;
                            if (d(a)) return;
                        }
                        var s = 0,
                            l = 0;
                        switch (r.which) {
                            case 37:
                                s = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                l = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                s = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                l = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                l = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                l = e.containerHeight;
                                break;
                            case 34:
                                l = -e.containerHeight;
                                break;
                            case 36:
                                l = e.contentHeight;
                                break;
                            case 35:
                                l = -e.contentHeight;
                                break;
                            default:
                                return;
                        }
                        (e.settings.suppressScrollX && 0 !== s) ||
                        (e.settings.suppressScrollY && 0 !== l) ||
                        ((n.scrollTop -= l),
                            (n.scrollLeft += s),
                            g(e),
                            (function (i, o) {
                                var r = t(n.scrollTop);
                                if (0 === i) {
                                    if (!e.scrollbarYActive) return !1;
                                    if ((0 === r && 0 < o) || (r >= e.contentHeight - e.containerHeight && 0 > o)) return !e.settings.wheelPropagation;
                                }
                                var a = n.scrollLeft;
                                if (0 === o) {
                                    if (!e.scrollbarXActive) return !1;
                                    if ((0 === a && 0 > i) || (a >= e.contentWidth - e.containerWidth && 0 < i)) return !e.settings.wheelPropagation;
                                }
                                return !0;
                            })(s, l) && r.preventDefault());
                    }
                });
            },
            wheel: function (i) {
                function o(e, t, i) {
                    if (!T.isWebKit && a.querySelector("select:focus")) return !0;
                    if (!a.contains(e)) return !1;
                    for (var o = e; o && o !== a;) {
                        if (o.classList.contains(x.element.consuming)) return !0;
                        var r = n(o);
                        if (i && r.overflowY.match(/(scroll|auto)/)) {
                            var s = o.scrollHeight - o.clientHeight;
                            if (0 < s && ((0 < o.scrollTop && 0 > i) || (o.scrollTop < s && 0 < i))) return !0;
                        }
                        if (t && r.overflowX.match(/(scroll|auto)/)) {
                            var l = o.scrollWidth - o.clientWidth;
                            if (0 < l && ((0 < o.scrollLeft && 0 > t) || (o.scrollLeft < l && 0 < t))) return !0;
                        }
                        o = o.parentNode;
                    }
                    return !1;
                }

                function r(n) {
                    var r = (function (e) {
                            var t = e.deltaX,
                                n = -1 * e.deltaY;
                            return (
                                (void 0 === t || void 0 === n) && ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                e.shiftKey ? [-n, -t] : [t, n]
                            );
                        })(n),
                        s = r[0],
                        l = r[1];
                    if (!o(n.target, s, l)) {
                        var c = !1;
                        i.settings.useBothWheelAxes ?
                            i.scrollbarYActive && !i.scrollbarXActive ?
                            (l ? (a.scrollTop -= l * i.settings.wheelSpeed) : (a.scrollTop += s * i.settings.wheelSpeed), (c = !0)) :
                            i.scrollbarXActive && !i.scrollbarYActive && (s ? (a.scrollLeft += s * i.settings.wheelSpeed) : (a.scrollLeft -= l * i.settings.wheelSpeed), (c = !0)) :
                            ((a.scrollTop -= l * i.settings.wheelSpeed), (a.scrollLeft += s * i.settings.wheelSpeed)),
                            g(i),
                            (c =
                                c ||
                                (function (n, o) {
                                    var r = t(a.scrollTop),
                                        s = 0 === a.scrollTop,
                                        l = r + a.offsetHeight === a.scrollHeight,
                                        c = 0 === a.scrollLeft,
                                        u = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                    return !(e(o) > e(n) ? s || l : c || u) || !i.settings.wheelPropagation;
                                })(s, l)) &&
                            !n.ctrlKey &&
                            (n.stopPropagation(), n.preventDefault());
                    }
                }
                var a = i.element;
                void 0 === window.onwheel ? void 0 !== window.onmousewheel && i.event.bind(a, "mousewheel", r) : i.event.bind(a, "wheel", r);
            },
            touch: function (i) {
                function o(n, o) {
                    var r = t(f.scrollTop),
                        a = f.scrollLeft,
                        s = e(n),
                        l = e(o);
                    if (l > s) {
                        if ((0 > o && r === i.contentHeight - i.containerHeight) || (0 < o && 0 === r)) return 0 === window.scrollY && 0 < o && T.isChrome;
                    } else if (s > l && ((0 > n && a === i.contentWidth - i.containerWidth) || (0 < n && 0 === a))) return !0;
                    return !0;
                }

                function r(e, t) {
                    (f.scrollTop -= t), (f.scrollLeft -= e), g(i);
                }

                function a(e) {
                    return e.targetTouches ? e.targetTouches[0] : e;
                }

                function s(e) {
                    return !(
                        (e.pointerType && "pen" === e.pointerType && 0 === e.buttons) ||
                        ((!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                    );
                }

                function l(e) {
                    if (s(e)) {
                        var t = a(e);
                        (h.pageX = t.pageX), (h.pageY = t.pageY), (d = new Date().getTime()), null !== m && clearInterval(m);
                    }
                }

                function c(e, t, i) {
                    if (!f.contains(e)) return !1;
                    for (var o = e; o && o !== f;) {
                        if (o.classList.contains(x.element.consuming)) return !0;
                        var r = n(o);
                        if (i && r.overflowY.match(/(scroll|auto)/)) {
                            var a = o.scrollHeight - o.clientHeight;
                            if (0 < a && ((0 < o.scrollTop && 0 > i) || (o.scrollTop < a && 0 < i))) return !0;
                        }
                        if (t && r.overflowX.match(/(scroll|auto)/)) {
                            var s = o.scrollWidth - o.clientWidth;
                            if (0 < s && ((0 < o.scrollLeft && 0 > t) || (o.scrollLeft < s && 0 < t))) return !0;
                        }
                        o = o.parentNode;
                    }
                    return !1;
                }

                function u(e) {
                    if (s(e)) {
                        var t = a(e),
                            n = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            i = n.pageX - h.pageX,
                            l = n.pageY - h.pageY;
                        if (c(e.target, i, l)) return;
                        r(i, l), (h = n);
                        var u = new Date().getTime(),
                            p = u - d;
                        0 < p && ((y.x = i / p), (y.y = l / p), (d = u)), o(i, l) && e.preventDefault();
                    }
                }

                function p() {
                    i.settings.swipeEasing &&
                        (clearInterval(m),
                            (m = setInterval(function () {
                                return i.isInitialized ? void clearInterval(m) : y.x || y.y ? (0.01 > e(y.x) && 0.01 > e(y.y) ? void clearInterval(m) : (r(30 * y.x, 30 * y.y), (y.x *= 0.8), void(y.y *= 0.8))) : void clearInterval(m);
                            }, 10)));
                }
                if (T.supportsTouch || T.supportsIePointer) {
                    var f = i.element,
                        h = {},
                        d = 0,
                        y = {},
                        m = null;
                    T.supportsTouch ?
                        (i.event.bind(f, "touchstart", l), i.event.bind(f, "touchmove", u), i.event.bind(f, "touchend", p)) :
                        T.supportsIePointer &&
                        (window.PointerEvent ?
                            (i.event.bind(f, "pointerdown", l), i.event.bind(f, "pointermove", u), i.event.bind(f, "pointerup", p)) :
                            window.MSPointerEvent && (i.event.bind(f, "MSPointerDown", l), i.event.bind(f, "MSPointerMove", u), i.event.bind(f, "MSPointerUp", p)));
                }
            },
        },
        C = function (e, r) {
            var a = this;
            if ((void 0 === r && (r = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var s in ((this.element = e),
                    e.classList.add(x.main),
                    (this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1,
                    }),
                    r))
                this.settings[s] = r[s];
            (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
            var l = function () {
                    return e.classList.add(x.state.focus);
                },
                c = function () {
                    return e.classList.remove(x.state.focus);
                };
            (this.isRtl = "rtl" === n(e).direction),
            !0 === this.isRtl && e.classList.add(x.rtl),
                (this.isNegativeScroll = (function () {
                    var t,
                        n = e.scrollLeft;
                    return (e.scrollLeft = -1), (t = 0 > e.scrollLeft), (e.scrollLeft = n), t;
                })()),
                (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                (this.event = new E()),
                (this.ownerDocument = e.ownerDocument || document),
                (this.scrollbarXRail = o(x.element.rail("x"))),
                e.appendChild(this.scrollbarXRail),
                (this.scrollbarX = o(x.element.thumb("x"))),
                this.scrollbarXRail.appendChild(this.scrollbarX),
                this.scrollbarX.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarX, "focus", l),
                this.event.bind(this.scrollbarX, "blur", c),
                (this.scrollbarXActive = null),
                (this.scrollbarXWidth = null),
                (this.scrollbarXLeft = null);
            var u = n(this.scrollbarXRail);
            (this.scrollbarXBottom = parseInt(u.bottom, 10)),
            isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = h(u.top))) : (this.isScrollbarXUsingBottom = !0),
                (this.railBorderXWidth = h(u.borderLeftWidth) + h(u.borderRightWidth)),
                i(this.scrollbarXRail, {
                    display: "block"
                }),
                (this.railXMarginWidth = h(u.marginLeft) + h(u.marginRight)),
                i(this.scrollbarXRail, {
                    display: ""
                }),
                (this.railXWidth = null),
                (this.railXRatio = null),
                (this.scrollbarYRail = o(x.element.rail("y"))),
                e.appendChild(this.scrollbarYRail),
                (this.scrollbarY = o(x.element.thumb("y"))),
                this.scrollbarYRail.appendChild(this.scrollbarY),
                this.scrollbarY.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarY, "focus", l),
                this.event.bind(this.scrollbarY, "blur", c),
                (this.scrollbarYActive = null),
                (this.scrollbarYHeight = null),
                (this.scrollbarYTop = null);
            var p = n(this.scrollbarYRail);
            (this.scrollbarYRight = parseInt(p.right, 10)),
            isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = h(p.left))) : (this.isScrollbarYUsingRight = !0),
                (this.scrollbarYOuterWidth = this.isRtl ?
                    (function (e) {
                        var t = n(e);
                        return h(t.width) + h(t.paddingLeft) + h(t.paddingRight) + h(t.borderLeftWidth) + h(t.borderRightWidth);
                    })(this.scrollbarY) :
                    null),
                (this.railBorderYWidth = h(p.borderTopWidth) + h(p.borderBottomWidth)),
                i(this.scrollbarYRail, {
                    display: "block"
                }),
                (this.railYMarginHeight = h(p.marginTop) + h(p.marginBottom)),
                i(this.scrollbarYRail, {
                    display: ""
                }),
                (this.railYHeight = null),
                (this.railYRatio = null),
                (this.reach = {
                    x: 0 >= e.scrollLeft ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: 0 >= e.scrollTop ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
                }),
                (this.isAlive = !0),
                this.settings.handlers.forEach(function (e) {
                    return S[e](a);
                }),
                (this.lastScrollTop = t(e.scrollTop)),
                (this.lastScrollLeft = e.scrollLeft),
                this.event.bind(this.element, "scroll", function (e) {
                    return a.onScroll(e);
                }),
                g(this);
        };
    return (
        (C.prototype.update = function () {
            this.isAlive &&
                ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
                    i(this.scrollbarXRail, {
                        display: "block"
                    }),
                    i(this.scrollbarYRail, {
                        display: "block"
                    }),
                    (this.railXMarginWidth = h(n(this.scrollbarXRail).marginLeft) + h(n(this.scrollbarXRail).marginRight)),
                    (this.railYMarginHeight = h(n(this.scrollbarYRail).marginTop) + h(n(this.scrollbarYRail).marginBottom)),
                    i(this.scrollbarXRail, {
                        display: "none"
                    }),
                    i(this.scrollbarYRail, {
                        display: "none"
                    }),
                    g(this),
                    f(this, "top", 0, !1, !0),
                    f(this, "left", 0, !1, !0),
                    i(this.scrollbarXRail, {
                        display: ""
                    }),
                    i(this.scrollbarYRail, {
                        display: ""
                    }));
        }),
        (C.prototype.onScroll = function () {
            this.isAlive &&
                (g(this),
                    f(this, "top", this.element.scrollTop - this.lastScrollTop),
                    f(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                    (this.lastScrollTop = t(this.element.scrollTop)),
                    (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (C.prototype.destroy = function () {
            this.isAlive &&
                (this.event.unbindAll(),
                    a(this.scrollbarX),
                    a(this.scrollbarY),
                    a(this.scrollbarXRail),
                    a(this.scrollbarYRail),
                    this.removePsClasses(),
                    (this.element = null),
                    (this.scrollbarX = null),
                    (this.scrollbarY = null),
                    (this.scrollbarXRail = null),
                    (this.scrollbarYRail = null),
                    (this.isAlive = !1));
        }),
        (C.prototype.removePsClasses = function () {
            this.element.className = this.element.className
                .split(" ")
                .filter(function (e) {
                    return !e.match(/^ps([-_].+|)$/);
                })
                .join(" ");
        }),
        C
    );
}),
(function (e, t, n, i) {
    "use strict";

    function o(e, t, n) {
        return setTimeout(c(e, n), t);
    }

    function r(e, t, n) {
        return !!Array.isArray(e) && (a(e, n[t], n), !0);
    }

    function a(e, t, n) {
        var o;
        if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== i)
            for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++;
        else
            for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e);
    }

    function s(t, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i =
                n && n.stack ?
                n.stack
                .replace(/^[^\(]+?[\n$]/gm, "")
                .replace(/^\s+at\s+/gm, "")
                .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") :
                "Unknown Stack Trace",
                r = e.console && (e.console.warn || e.console.log);
            return r && r.call(e.console, o, i), t.apply(this, arguments);
        };
    }

    function l(e, t, n) {
        var i,
            o = t.prototype;
        ((i = e.prototype = Object.create(o)).constructor = e), (i._super = o), n && ie(i, n);
    }

    function c(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }

    function u(e, t) {
        return typeof e == ae ? e.apply((t && t[0]) || i, t) : e;
    }

    function p(e, t) {
        return e === i ? t : e;
    }

    function f(e, t, n) {
        a(y(t), function (t) {
            e.addEventListener(t, n, !1);
        });
    }

    function h(e, t, n) {
        a(y(t), function (t) {
            e.removeEventListener(t, n, !1);
        });
    }

    function d(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode;
        }
        return !1;
    }

    function g(e, t) {
        return e.indexOf(t) > -1;
    }

    function y(e) {
        return e.trim().split(/\s+/g);
    }

    function m(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if ((n && e[i][n] == t) || (!n && e[i] === t)) return i;
            i++;
        }
        return -1;
    }

    function v(e) {
        return Array.prototype.slice.call(e, 0);
    }

    function b(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length;) {
            var a = t ? e[r][t] : e[r];
            m(o, a) < 0 && i.push(e[r]), (o[r] = a), r++;
        }
        return (
            n &&
            (i = t ?
                i.sort(function (e, n) {
                    return e[t] > n[t];
                }) :
                i.sort()),
            i
        );
    }

    function x(e, t) {
        for (var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < oe.length;) {
            if ((o = (n = oe[a]) ? n + r : t) in e) return o;
            a++;
        }
        return i;
    }

    function w(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e;
    }

    function _(e, t) {
        var n = this;
        (this.manager = e),
        (this.callback = t),
        (this.element = e.element),
        (this.target = e.options.inputTarget),
        (this.domHandler = function (t) {
            u(e.options.enable, [e]) && n.handler(t);
        }),
        this.init();
    }

    function k(e, t, n) {
        var i = n.pointers.length,
            o = n.changedPointers.length,
            r = t & be && i - o == 0,
            a = t & (we | _e) && i - o == 0;
        (n.isFirst = !!r),
        (n.isFinal = !!a),
        r && (e.session = {}),
            (n.eventType = t),
            (function (e, t) {
                var n = e.session,
                    i = t.pointers,
                    o = i.length;
                n.firstInput || (n.firstInput = T(t)), o > 1 && !n.firstMultiple ? (n.firstMultiple = T(t)) : 1 === o && (n.firstMultiple = !1);
                var r = n.firstInput,
                    a = n.firstMultiple,
                    s = a ? a.center : r.center,
                    l = (t.center = S(i));
                (t.timeStamp = ce()),
                (t.deltaTime = t.timeStamp - r.timeStamp),
                (t.angle = O(s, l)),
                (t.distance = L(s, l)),
                (function (e, t) {
                    var n = t.center,
                        i = e.offsetDelta || {},
                        o = e.prevDelta || {},
                        r = e.prevInput || {};
                    (t.eventType !== be && r.eventType !== we) || ((o = e.prevDelta = {
                        x: r.deltaX || 0,
                        y: r.deltaY || 0
                    }), (i = e.offsetDelta = {
                        x: n.x,
                        y: n.y
                    })),
                    (t.deltaX = o.x + (n.x - i.x)),
                    (t.deltaY = o.y + (n.y - i.y));
                })(n, t),
                (t.offsetDirection = A(t.deltaX, t.deltaY));
                var c = C(t.deltaTime, t.deltaX, t.deltaY);
                (t.overallVelocityX = c.x),
                (t.overallVelocityY = c.y),
                (t.overallVelocity = le(c.x) > le(c.y) ? c.x : c.y),
                (t.scale = a ?
                    (function (e, t) {
                        return L(t[0], t[1], Me) / L(e[0], e[1], Me);
                    })(a.pointers, i) :
                    1),
                (t.rotation = a ?
                    (function (e, t) {
                        return O(t[1], t[0], Me) + O(e[1], e[0], Me);
                    })(a.pointers, i) :
                    0),
                (t.maxPointers = n.prevInput ? (t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers) : t.pointers.length),
                E(n, t);
                var u = e.element;
                d(t.srcEvent.target, u) && (u = t.srcEvent.target), (t.target = u);
            })(e, n),
            e.emit("hammer.input", n),
            e.recognize(n),
            (e.session.prevInput = n);
    }

    function E(e, t) {
        var n,
            o,
            r,
            a,
            s = e.lastInterval || t,
            l = t.timeStamp - s.timeStamp;
        if (t.eventType != _e && (l > ve || s.velocity === i)) {
            var c = t.deltaX - s.deltaX,
                u = t.deltaY - s.deltaY,
                p = C(l, c, u);
            (o = p.x), (r = p.y), (n = le(p.x) > le(p.y) ? p.x : p.y), (a = A(c, u)), (e.lastInterval = t);
        } else(n = s.velocity), (o = s.velocityX), (r = s.velocityY), (a = s.direction);
        (t.velocity = n), (t.velocityX = o), (t.velocityY = r), (t.direction = a);
    }

    function T(e) {
        for (var t = [], n = 0; n < e.pointers.length;)(t[n] = {
            clientX: se(e.pointers[n].clientX),
            clientY: se(e.pointers[n].clientY)
        }), n++;
        return {
            timeStamp: ce(),
            pointers: t,
            center: S(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        };
    }

    function S(e) {
        var t = e.length;
        if (1 === t) return {
            x: se(e[0].clientX),
            y: se(e[0].clientY)
        };
        for (var n = 0, i = 0, o = 0; t > o;)(n += e[o].clientX), (i += e[o].clientY), o++;
        return {
            x: se(n / t),
            y: se(i / t)
        };
    }

    function C(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        };
    }

    function A(e, t) {
        return e === t ? ke : le(e) >= le(t) ? (0 > e ? Ee : Te) : 0 > t ? Se : Ce;
    }

    function L(e, t, n) {
        n || (n = Ne);
        var i = t[n[0]] - e[n[0]],
            o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o);
    }

    function O(e, t, n) {
        n || (n = Ne);
        var i = t[n[0]] - e[n[0]],
            o = t[n[1]] - e[n[1]];
        return (180 * Math.atan2(o, i)) / Math.PI;
    }

    function N() {
        (this.evEl = De), (this.evWin = Ie), (this.pressed = !1), _.apply(this, arguments);
    }

    function M() {
        (this.evEl = He), (this.evWin = qe), _.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
    }

    function j() {
        (this.evTarget = We), (this.evWin = ze), (this.started = !1), _.apply(this, arguments);
    }

    function D(e, t) {
        var n = v(e.touches),
            i = v(e.changedTouches);
        return t & (we | _e) && (n = b(n.concat(i), "identifier", !0)), [n, i];
    }

    function I() {
        (this.evTarget = Be), (this.targetIds = {}), _.apply(this, arguments);
    }

    function P(e, t) {
        var n = v(e.touches),
            i = this.targetIds;
        if (t & (be | xe) && 1 === n.length) return (i[n[0].identifier] = !0), [n, n];
        var o,
            r,
            a = v(e.changedTouches),
            s = [],
            l = this.target;
        if (
            ((r = n.filter(function (e) {
                    return d(e.target, l);
                })),
                t === be)
        )
            for (o = 0; o < r.length;)(i[r[o].identifier] = !0), o++;
        for (o = 0; o < a.length;) i[a[o].identifier] && s.push(a[o]), t & (we | _e) && delete i[a[o].identifier], o++;
        return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0;
    }

    function R() {
        _.apply(this, arguments);
        var e = c(this.handler, this);
        (this.touch = new I(this.manager, e)), (this.mouse = new N(this.manager, e)), (this.primaryTouch = null), (this.lastTouches = []);
    }

    function H(e, t) {
        e & be ? ((this.primaryTouch = t.changedPointers[0].identifier), q.call(this, t)) : e & (we | _e) && q.call(this, t);
    }

    function q(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function () {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1);
            }, Xe);
        }
    }

    function F(e) {
        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var o = this.lastTouches[i],
                r = Math.abs(t - o.x),
                a = Math.abs(n - o.y);
            if (Ye >= r && Ye >= a) return !0;
        }
        return !1;
    }

    function W(e, t) {
        (this.manager = e), this.set(t);
    }

    function z(e) {
        (this.options = ie({}, this.defaults, e || {})), (this.id = fe++), (this.manager = null), (this.options.enable = p(this.options.enable, !0)), (this.state = nt), (this.simultaneous = {}), (this.requireFail = []);
    }

    function U(e) {
        return e & st ? "cancel" : e & rt ? "end" : e & ot ? "move" : e & it ? "start" : "";
    }

    function B(e) {
        return e == Ce ? "down" : e == Se ? "up" : e == Ee ? "left" : e == Te ? "right" : "";
    }

    function X(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e;
    }

    function Y() {
        z.apply(this, arguments);
    }

    function V() {
        Y.apply(this, arguments), (this.pX = null), (this.pY = null);
    }

    function $() {
        Y.apply(this, arguments);
    }

    function Q() {
        z.apply(this, arguments), (this._timer = null), (this._input = null);
    }

    function K() {
        Y.apply(this, arguments);
    }

    function G() {
        Y.apply(this, arguments);
    }

    function J() {
        z.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
    }

    function Z(e, t) {
        return ((t = t || {}).recognizers = p(t.recognizers, Z.defaults.preset)), new ee(e, t);
    }

    function ee(e, t) {
        (this.options = ie({}, Z.defaults, t || {})),
        (this.options.inputTarget = this.options.inputTarget || e),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = e),
        (this.input = (function (e) {
            return new(e.options.inputClass || (de ? M : ge ? I : he ? R : N))(e, k);
        })(this)),
        (this.touchAction = new W(this, this.options.touchAction)),
        te(this, !0),
            a(
                this.options.recognizers,
                function (e) {
                    var t = this.add(new e[0](e[1]));
                    e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
                },
                this
            );
    }

    function te(e, t) {
        var n,
            i = e.element;
        i.style &&
            (a(e.options.cssProps, function (o, r) {
                    (n = x(i.style, r)), t ? ((e.oldCssProps[n] = i.style[n]), (i.style[n] = o)) : (i.style[n] = e.oldCssProps[n] || "");
                }),
                t || (e.oldCssProps = {}));
    }

    function ne(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), (i.gesture = n), n.target.dispatchEvent(i);
    }
    var ie,
        oe = ["", "webkit", "Moz", "MS", "ms", "o"],
        re = t.createElement("div"),
        ae = "function",
        se = Math.round,
        le = Math.abs,
        ce = Date.now;
    ie =
        "function" != typeof Object.assign ?
        function (e) {
            if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (o !== i && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
            }
            return t;
        } :
        Object.assign;
    var ue = s(
            function (e, t, n) {
                for (var o = Object.keys(t), r = 0; r < o.length;)(!n || (n && e[o[r]] === i)) && (e[o[r]] = t[o[r]]), r++;
                return e;
            },
            "extend",
            "Use `assign`."
        ),
        pe = s(
            function (e, t) {
                return ue(e, t, !0);
            },
            "merge",
            "Use `assign`."
        ),
        fe = 1,
        he = "ontouchstart" in e,
        de = x(e, "PointerEvent") !== i,
        ge = he && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        ye = "touch",
        me = "mouse",
        ve = 25,
        be = 1,
        xe = 2,
        we = 4,
        _e = 8,
        ke = 1,
        Ee = 2,
        Te = 4,
        Se = 8,
        Ce = 16,
        Ae = Ee | Te,
        Le = Se | Ce,
        Oe = Ae | Le,
        Ne = ["x", "y"],
        Me = ["clientX", "clientY"];
    _.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(w(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(w(this.element), this.evWin, this.domHandler);
        },
    };
    var je = {
            mousedown: be,
            mousemove: xe,
            mouseup: we
        },
        De = "mousedown",
        Ie = "mousemove mouseup";
    l(N, _, {
        handler: function (e) {
            var t = je[e.type];
            t & be && 0 === e.button && (this.pressed = !0),
                t & xe && 1 !== e.which && (t = we),
                this.pressed && (t & we && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: me,
                    srcEvent: e
                }));
        },
    });
    var Pe = {
            pointerdown: be,
            pointermove: xe,
            pointerup: we,
            pointercancel: _e,
            pointerout: _e
        },
        Re = {
            2: ye,
            3: "pen",
            4: me,
            5: "kinect"
        },
        He = "pointerdown",
        qe = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && ((He = "MSPointerDown"), (qe = "MSPointerMove MSPointerUp MSPointerCancel")),
        l(M, _, {
            handler: function (e) {
                var t = this.store,
                    n = !1,
                    i = e.type.toLowerCase().replace("ms", ""),
                    o = Pe[i],
                    r = Re[e.pointerType] || e.pointerType,
                    a = r == ye,
                    s = m(t, e.pointerId, "pointerId");
                o & be && (0 === e.button || a) ? 0 > s && (t.push(e), (s = t.length - 1)) : o & (we | _e) && (n = !0),
                    0 > s || ((t[s] = e), this.callback(this.manager, o, {
                        pointers: t,
                        changedPointers: [e],
                        pointerType: r,
                        srcEvent: e
                    }), n && t.splice(s, 1));
            },
        });
    var Fe = {
            touchstart: be,
            touchmove: xe,
            touchend: we,
            touchcancel: _e
        },
        We = "touchstart",
        ze = "touchstart touchmove touchend touchcancel";
    l(j, _, {
        handler: function (e) {
            var t = Fe[e.type];
            if ((t === be && (this.started = !0), this.started)) {
                var n = D.call(this, e, t);
                t & (we | _e) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: ye,
                    srcEvent: e
                });
            }
        },
    });
    var Ue = {
            touchstart: be,
            touchmove: xe,
            touchend: we,
            touchcancel: _e
        },
        Be = "touchstart touchmove touchend touchcancel";
    l(I, _, {
        handler: function (e) {
            var t = Ue[e.type],
                n = P.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: ye,
                srcEvent: e
            });
        },
    });
    var Xe = 2500,
        Ye = 25;
    l(R, _, {
        handler: function (e, t, n) {
            var i = n.pointerType == ye,
                o = n.pointerType == me;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i) H.call(this, t, n);
                else if (o && F.call(this, n)) return;
                this.callback(e, t, n);
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
        },
    });
    var Ve = x(re.style, "touchAction"),
        $e = Ve !== i,
        Qe = "compute",
        Ke = "auto",
        Ge = "manipulation",
        Je = "none",
        Ze = "pan-x",
        et = "pan-y",
        tt = (function () {
            if (!$e) return !1;
            var t = {},
                n = e.CSS && e.CSS.supports;
            return (
                ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                    t[i] = !n || e.CSS.supports("touch-action", i);
                }),
                t
            );
        })();
    W.prototype = {
        set: function (e) {
            e == Qe && (e = this.compute()), $e && this.manager.element.style && tt[e] && (this.manager.element.style[Ve] = e), (this.actions = e.toLowerCase().trim());
        },
        update: function () {
            this.set(this.manager.options.touchAction);
        },
        compute: function () {
            var e = [];
            return (
                a(this.manager.recognizers, function (t) {
                    u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
                }),
                (function (e) {
                    if (g(e, Je)) return Je;
                    var t = g(e, Ze),
                        n = g(e, et);
                    return t && n ? Je : t || n ? (t ? Ze : et) : g(e, Ge) ? Ge : Ke;
                })(e.join(" "))
            );
        },
        preventDefaults: function (e) {
            var t = e.srcEvent,
                n = e.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions,
                    o = g(i, Je) && !tt[Je],
                    r = g(i, et) && !tt[et],
                    a = g(i, Ze) && !tt[Ze];
                if (o) {
                    var s = 1 === e.pointers.length,
                        l = e.distance < 2,
                        c = e.deltaTime < 250;
                    if (s && l && c) return;
                }
                return a && r ? void 0 : o || (r && n & Ae) || (a && n & Le) ? this.preventSrc(t) : void 0;
            }
            t.preventDefault();
        },
        preventSrc: function (e) {
            (this.manager.session.prevented = !0), e.preventDefault();
        },
    };
    var nt = 1,
        it = 2,
        ot = 4,
        rt = 8,
        at = rt,
        st = 16,
        lt = 32;
    (z.prototype = {
        defaults: {},
        set: function (e) {
            return ie(this.options, e), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function (e) {
            if (r(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = X(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)), this;
        },
        dropRecognizeWith: function (e) {
            return r(e, "dropRecognizeWith", this) || ((e = X(e, this)), delete this.simultaneous[e.id]), this;
        },
        requireFailure: function (e) {
            if (r(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === m(t, (e = X(e, this))) && (t.push(e), e.requireFailure(this)), this;
        },
        dropRequireFailure: function (e) {
            if (r(e, "dropRequireFailure", this)) return this;
            e = X(e, this);
            var t = m(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this;
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id];
        },
        emit: function (e) {
            function t(t) {
                n.manager.emit(t, e);
            }
            var n = this,
                i = this.state;
            rt > i && t(n.options.event + U(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= rt && t(n.options.event + U(i));
        },
        tryEmit: function (e) {
            return this.canEmit() ? this.emit(e) : void(this.state = lt);
        },
        canEmit: function () {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (lt | nt))) return !1;
                e++;
            }
            return !0;
        },
        recognize: function (e) {
            var t = ie({}, e);
            return u(this.options.enable, [this, t]) ?
                (this.state & (at | st | lt) && (this.state = nt), (this.state = this.process(t)), void(this.state & (it | ot | rt | st) && this.tryEmit(t))) :
                (this.reset(), void(this.state = lt));
        },
        process: function (e) {},
        getTouchAction: function () {},
        reset: function () {},
    }),
    l(Y, z, {
            defaults: {
                pointers: 1
            },
            attrTest: function (e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t;
            },
            process: function (e) {
                var t = this.state,
                    n = e.eventType,
                    i = t & (it | ot),
                    o = this.attrTest(e);
                return i && (n & _e || !o) ? t | st : i || o ? (n & we ? t | rt : t & it ? t | ot : it) : lt;
            },
        }),
        l(V, Y, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Oe
            },
            getTouchAction: function () {
                var e = this.options.direction,
                    t = [];
                return e & Ae && t.push(et), e & Le && t.push(Ze), t;
            },
            directionTest: function (e) {
                var t = this.options,
                    n = !0,
                    i = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    a = e.deltaY;
                return (
                    o & t.direction || (t.direction & Ae ? ((o = 0 === r ? ke : 0 > r ? Ee : Te), (n = r != this.pX), (i = Math.abs(e.deltaX))) : ((o = 0 === a ? ke : 0 > a ? Se : Ce), (n = a != this.pY), (i = Math.abs(e.deltaY)))),
                    (e.direction = o),
                    n && i > t.threshold && o & t.direction
                );
            },
            attrTest: function (e) {
                return Y.prototype.attrTest.call(this, e) && (this.state & it || (!(this.state & it) && this.directionTest(e)));
            },
            emit: function (e) {
                (this.pX = e.deltaX), (this.pY = e.deltaY);
                var t = B(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e);
            },
        }),
        l($, Y, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [Je];
            },
            attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it);
            },
            emit: function (e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t;
                }
                this._super.emit.call(this, e);
            },
        }),
        l(Q, z, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function () {
                return [Ke];
            },
            process: function (e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (((this._input = e), !i || !n || (e.eventType & (we | _e) && !r))) this.reset();
                else if (e.eventType & be)
                    this.reset(),
                    (this._timer = o(
                        function () {
                            (this.state = at), this.tryEmit();
                        },
                        t.time,
                        this
                    ));
                else if (e.eventType & we) return at;
                return lt;
            },
            reset: function () {
                clearTimeout(this._timer);
            },
            emit: function (e) {
                this.state === at && (e && e.eventType & we ? this.manager.emit(this.options.event + "up", e) : ((this._input.timeStamp = ce()), this.manager.emit(this.options.event, this._input)));
            },
        }),
        l(K, Y, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [Je];
            },
            attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it);
            },
        }),
        l(G, Y, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: 0.3,
                direction: Ae | Le,
                pointers: 1
            },
            getTouchAction: function () {
                return V.prototype.getTouchAction.call(this);
            },
            attrTest: function (e) {
                var t,
                    n = this.options.direction;
                return (
                    n & (Ae | Le) ? (t = e.overallVelocity) : n & Ae ? (t = e.overallVelocityX) : n & Le && (t = e.overallVelocityY),
                    this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && le(t) > this.options.velocity && e.eventType & we
                );
            },
            emit: function (e) {
                var t = B(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e);
            },
        }),
        l(J, z, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function () {
                return [Ge];
            },
            process: function (e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if ((this.reset(), e.eventType & be && 0 === this.count)) return this.failTimeout();
                if (i && r && n) {
                    if (e.eventType != we) return this.failTimeout();
                    var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        s = !this.pCenter || L(this.pCenter, e.center) < t.posThreshold;
                    if (((this.pTime = e.timeStamp), (this.pCenter = e.center), s && a ? (this.count += 1) : (this.count = 1), (this._input = e), 0 === this.count % t.taps))
                        return this.hasRequireFailures() ?
                            ((this._timer = o(
                                    function () {
                                        (this.state = at), this.tryEmit();
                                    },
                                    t.interval,
                                    this
                                )),
                                it) :
                            at;
                }
                return lt;
            },
            failTimeout: function () {
                return (
                    (this._timer = o(
                        function () {
                            this.state = lt;
                        },
                        this.options.interval,
                        this
                    )),
                    lt
                );
            },
            reset: function () {
                clearTimeout(this._timer);
            },
            emit: function () {
                this.state == at && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
            },
        }),
        (Z.VERSION = "2.0.8"),
        (Z.defaults = {
            domEvents: !1,
            touchAction: Qe,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [K, {
                    enable: !1
                }],
                [$, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [G, {
                    direction: Ae
                }],
                [V, {
                        direction: Ae
                    },
                    ["swipe"]
                ],
                [J],
                [J, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [Q]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            },
        });
    (ee.prototype = {
        set: function (e) {
            return ie(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), (this.input.target = e.inputTarget), this.input.init()), this;
        },
        stop: function (e) {
            this.session.stopped = e ? 2 : 1;
        },
        recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n,
                    i = this.recognizers,
                    o = t.curRecognizer;
                (!o || (o && o.state & at)) && (o = t.curRecognizer = null);
                for (var r = 0; r < i.length;)(n = i[r]), 2 === t.stopped || (o && n != o && !n.canRecognizeWith(o)) ? n.reset() : n.recognize(e), !o && n.state & (it | ot | rt) && (o = t.curRecognizer = n), r++;
            }
        },
        get: function (e) {
            if (e instanceof z) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
            return null;
        },
        add: function (e) {
            if (r(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), (e.manager = this), this.touchAction.update(), e;
        },
        remove: function (e) {
            if (r(e, "remove", this)) return this;
            if ((e = this.get(e))) {
                var t = this.recognizers,
                    n = m(t, e); -
                1 !== n && (t.splice(n, 1), this.touchAction.update());
            }
            return this;
        },
        on: function (e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return (
                    a(y(e), function (e) {
                        (n[e] = n[e] || []), n[e].push(t);
                    }),
                    this
                );
            }
        },
        off: function (e, t) {
            if (e !== i) {
                var n = this.handlers;
                return (
                    a(y(e), function (e) {
                        t ? n[e] && n[e].splice(m(n[e], t), 1) : delete n[e];
                    }),
                    this
                );
            }
        },
        emit: function (e, t) {
            this.options.domEvents && ne(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                (t.type = e),
                (t.preventDefault = function () {
                    t.srcEvent.preventDefault();
                });
                for (var i = 0; i < n.length;) n[i](t), i++;
            }
        },
        destroy: function () {
            this.element && te(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
        },
    }),
    ie(Z, {
            INPUT_START: be,
            INPUT_MOVE: xe,
            INPUT_END: we,
            INPUT_CANCEL: _e,
            STATE_POSSIBLE: nt,
            STATE_BEGAN: it,
            STATE_CHANGED: ot,
            STATE_ENDED: rt,
            STATE_RECOGNIZED: at,
            STATE_CANCELLED: st,
            STATE_FAILED: lt,
            DIRECTION_NONE: ke,
            DIRECTION_LEFT: Ee,
            DIRECTION_RIGHT: Te,
            DIRECTION_UP: Se,
            DIRECTION_DOWN: Ce,
            DIRECTION_HORIZONTAL: Ae,
            DIRECTION_VERTICAL: Le,
            DIRECTION_ALL: Oe,
            Manager: ee,
            Input: _,
            TouchAction: W,
            TouchInput: I,
            MouseInput: N,
            PointerEventInput: M,
            TouchMouseInput: R,
            SingleTouchInput: j,
            Recognizer: z,
            AttrRecognizer: Y,
            Tap: J,
            Pan: V,
            Swipe: G,
            Pinch: $,
            Rotate: K,
            Press: Q,
            on: f,
            off: h,
            each: a,
            merge: pe,
            extend: ue,
            assign: ie,
            inherit: l,
            bindFn: c,
            prefixed: x,
        }),
        ((void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = Z),
        "function" == typeof define && define.amd ?
        define(function () {
            return Z;
        }) :
        "undefined" != typeof module && module.exports ?
        (module.exports = Z) :
        (e.Hammer = Z);
})(window, document),
(Unison = (function () {
    "use strict";
    var e,
        t = window,
        n = document,
        i = n.head,
        o = {},
        r = !1,
        a = {
            parseMQ: function (e) {
                return t.getComputedStyle(e, null).getPropertyValue("font-family").replace(/"/g, "").replace(/'/g, "");
            },
            debounce: function (e, t, n) {
                var i;
                return function () {
                    var o = this,
                        r = arguments;
                    clearTimeout(i),
                        (i = setTimeout(function () {
                            (i = null), n || e.apply(o, r);
                        }, t)),
                        n && !i && e.apply(o, r);
                };
            },
            isObject: function (e) {
                return "object" == typeof e;
            },
            isUndefined: function (e) {
                return void 0 === e;
            },
        },
        s = {
            on: function (e, t) {
                a.isObject(o[e]) || (o[e] = []), o[e].push(t);
            },
            emit: function (e, t) {
                if (a.isObject(o[e]))
                    for (var n = o[e].slice(), i = 0; i < n.length; i++) n[i].call(this, t);
            },
        },
        l = {
            all: function () {
                for (var e = {}, t = a.parseMQ(n.querySelector("title")).split(","), i = 0; i < t.length; i++) {
                    var o = t[i].trim().split(" ");
                    e[o[0]] = o[1];
                }
                return r ? e : null;
            },
            now: function (e) {
                var t = a.parseMQ(i).split(" "),
                    n = {
                        name: t[0],
                        width: t[1]
                    };
                return r ? (a.isUndefined(e) ? n : e(n)) : null;
            },
            update: function () {
                l.now(function (t) {
                    t.name !== e && (s.emit(t.name), s.emit("change", t), (e = t.name));
                });
            },
        };
    return (
        (t.onresize = a.debounce(l.update, 100)),
        n.addEventListener("DOMContentLoaded", function () {
            (r = "none" !== t.getComputedStyle(i, null).getPropertyValue("clear")), l.update();
        }), {
            fetch: {
                all: l.all,
                now: l.now
            },
            on: s.on,
            emit: s.emit,
            util: {
                debounce: a.debounce,
                isObject: a.isObject
            }
        }
    );
})()),
(function () {
    "use strict";

    function e(e) {
        function t(t, i) {
            var r,
                d,
                g = t == window,
                y = i && void 0 !== i.message ? i.message : void 0;
            if (!(i = e.extend({}, e.blockUI.defaults, i || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (
                    ((i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {})),
                        (r = e.extend({}, e.blockUI.defaults.css, i.css || {})),
                        i.onOverlayClick && (i.overlayCSS.cursor = "pointer"),
                        (d = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {})),
                        (y = void 0 === y ? i.message : y),
                        g && f && n(window, {
                            fadeOut: 0
                        }),
                        y && "string" != typeof y && (y.parentNode || y.jquery))
                ) {
                    var m = y.jquery ? y[0] : y,
                        v = {};
                    e(t).data("blockUI.history", v), (v.el = m), (v.parent = m.parentNode), (v.display = m.style.display), (v.position = m.style.position), v.parent && v.parent.removeChild(m);
                }
                e(t).data("blockUI.onUnblock", i.onUnblock);
                var b,
                    x,
                    w,
                    _,
                    k = i.baseZ;
                (b = e(
                    c || i.forceIframe ?
                    '<iframe class="blockUI" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' :
                    '<div class="blockUI" style="display:none"></div>'
                )),
                (x = e(
                    i.theme ?
                    '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + k++ + ';display:none"></div>' :
                    '<div class="blockUI blockOverlay" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
                )),
                i.theme && g ?
                    ((_ = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:fixed">'),
                        i.title && (_ += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"),
                        (_ += '<div class="ui-widget-content ui-dialog-content"></div>'),
                        (_ += "</div>")) :
                    i.theme ?
                    ((_ = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:absolute">'),
                        i.title && (_ += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"),
                        (_ += '<div class="ui-widget-content ui-dialog-content"></div>'),
                        (_ += "</div>")) :
                    (_ = g ?
                        '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (k + 10) + ';display:none;position:fixed"></div>' :
                        '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (k + 10) + ';display:none;position:absolute"></div>'),
                    (w = e(_)),
                    y && (i.theme ? (w.css(d), w.addClass("ui-widget-content")) : w.css(r)),
                    i.theme || x.css(i.overlayCSS),
                    x.css("position", g ? "fixed" : "absolute"),
                    (c || i.forceIframe) && b.css("opacity", 0);
                var E = [b, x, w],
                    T = e(g ? "body" : t);
                e.each(E, function () {
                        this.appendTo(T);
                    }),
                    i.theme && i.draggable && e.fn.draggable && w.draggable({
                        handle: ".ui-dialog-titlebar",
                        cancel: "li"
                    });
                var S = p && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
                if (u || S) {
                    if ((g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !g))
                        var C = s(t, "borderTopWidth"),
                            A = s(t, "borderLeftWidth"),
                            L = C ? "(0 - " + C + ")" : 0,
                            O = A ? "(0 - " + A + ")" : 0;
                    e.each(E, function (e, t) {
                        var n = t[0].style;
                        if (((n.position = "absolute"), 2 > e))
                            g ?
                            n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') :
                            n.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                            g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                            O && n.setExpression("left", O),
                            L && n.setExpression("top", L);
                        else if (i.centerY)
                            g &&
                            n.setExpression(
                                "top",
                                '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                            ),
                            (n.marginTop = 0);
                        else if (!i.centerY && g) {
                            var o = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (i.css && i.css.top ? parseInt(i.css.top, 10) : 0) + ') + "px"';
                            n.setExpression("top", o);
                        }
                    });
                }
                if ((y && (i.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (c || i.forceIframe) && i.showOverlay && b.show(), i.fadeIn)) {
                    var N = i.onBlock ? i.onBlock : l,
                        M = i.showOverlay && !y ? N : l,
                        j = y ? N : l;
                    i.showOverlay && x._fadeIn(i.fadeIn, M), y && w._fadeIn(i.fadeIn, j);
                } else i.showOverlay && x.show(), y && w.show(), i.onBlock && i.onBlock.bind(w)();
                if (
                    (o(1, t, i),
                        g ?
                        ((f = w[0]), (h = e(i.focusableElements, f)), i.focusInput && setTimeout(a, 20)) :
                        (function (e, t, n) {
                            var i = e.parentNode,
                                o = e.style,
                                r = (i.offsetWidth - e.offsetWidth) / 2 - s(i, "borderLeftWidth"),
                                a = (i.offsetHeight - e.offsetHeight) / 2 - s(i, "borderTopWidth");
                            t && (o.left = r > 0 ? r + "px" : "0"), n && (o.top = a > 0 ? a + "px" : "0");
                        })(w[0], i.centerX, i.centerY),
                        i.timeout)
                ) {
                    var D = setTimeout(function () {
                        g ? e.unblockUI(i) : e(t).unblock(i);
                    }, i.timeout);
                    e(t).data("blockUI.timeout", D);
                }
            }
        }

        function n(t, n) {
            var r,
                a,
                s = t == window,
                l = e(t),
                c = l.data("blockUI.history"),
                u = l.data("blockUI.timeout");
            u && (clearTimeout(u), l.removeData("blockUI.timeout")),
                (n = e.extend({}, e.blockUI.defaults, n || {})),
                o(0, t, n),
                null === n.onUnblock && ((n.onUnblock = l.data("blockUI.onUnblock")), l.removeData("blockUI.onUnblock")),
                (a = s ? e("body").children().filter(".blockUI").add("body > .blockUI") : l.find(">.blockUI")),
                n.cursorReset && (a.length > 1 && (a[1].style.cursor = n.cursorReset), a.length > 2 && (a[2].style.cursor = n.cursorReset)),
                s && (f = h = null),
                n.fadeOut ?
                ((r = a.length),
                    a.stop().fadeOut(n.fadeOut, function () {
                        0 == --r && i(a, c, n, t);
                    })) :
                i(a, c, n, t);
        }

        function i(t, n, i, o) {
            var r = e(o);
            if (!r.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                        this.parentNode && this.parentNode.removeChild(this);
                    }),
                    n && n.el && ((n.el.style.display = n.display), (n.el.style.position = n.position), (n.el.style.cursor = "default"), n.parent && n.parent.appendChild(n.el), r.removeData("blockUI.history")),
                    r.data("blockUI.static") && r.css("position", "static"),
                    "function" == typeof i.onUnblock && i.onUnblock(o, i);
                var a = e(document.body),
                    s = a.width(),
                    l = a[0].style.width;
                a.width(s - 1).width(s), (a[0].style.width = l);
            }
        }

        function o(t, n, i) {
            var o = n == window,
                a = e(n);
            if ((t || ((!o || f) && (o || a.data("blockUI.isBlocked")))) && (a.data("blockUI.isBlocked", t), o && i.bindEvents && (!t || i.showOverlay))) {
                var s = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(s, i, r) : e(document).unbind(s, r);
            }
        }

        function r(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && f && t.data.constrainTabKey) {
                var n = h,
                    i = !t.shiftKey && t.target === n[n.length - 1],
                    o = t.shiftKey && t.target === n[0];
                if (i || o)
                    return (
                        setTimeout(function () {
                            a(o);
                        }, 10),
                        !1
                    );
            }
            var r = t.data,
                s = e(t.target);
            return s.hasClass("blockOverlay") && r.onOverlayClick && r.onOverlayClick(t), s.parents("div." + r.blockMsgClass).length > 0 || 0 === s.parents().children().filter("div.blockUI").length;
        }

        function a(e) {
            if (h) {
                var t = h[!0 === e ? h.length - 1 : 0];
                t && t.focus();
            }
        }

        function s(t, n) {
            return parseInt(e.css(t, n), 10) || 0;
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var l = e.noop || function () {},
            c = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            p = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        (e.blockUI = function (e) {
            t(window, e);
        }),
        (e.unblockUI = function (e) {
            n(window, e);
        }),
        (e.growlUI = function (t, n, i, o) {
            var r = e('<div class="growlUI"></div>');
            t && r.append("<h1>" + t + "</h1>"), n && r.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3e3);
            var a = function (t) {
                (t = t || {}),
                e.blockUI({
                    message: r,
                    fadeIn: void 0 !== t.fadeIn ? t.fadeIn : 700,
                    fadeOut: void 0 !== t.fadeOut ? t.fadeOut : 1e3,
                    timeout: void 0 !== t.timeout ? t.timeout : i,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: o,
                    css: e.blockUI.defaults.growlCSS,
                });
            };
            a(),
                r.css("opacity"),
                r
                .mouseover(function () {
                    a({
                        fadeIn: 0,
                        timeout: 3e4
                    });
                    var t = e(".blockMsg");
                    t.stop(), t.fadeTo(300, 1);
                })
                .mouseout(function () {
                    e(".blockMsg").fadeOut(1e3);
                });
        }),
        (e.fn.block = function (n) {
            if (this[0] === window) return e.blockUI(n), this;
            var i = e.extend({}, e.blockUI.defaults, n || {});
            return (
                this.each(function () {
                    var t = e(this);
                    (i.ignoreIfBlocked && t.data("blockUI.isBlocked")) || t.unblock({
                        fadeOut: 0
                    });
                }),
                this.each(function () {
                    "static" == e.css(this, "position") && ((this.style.position = "relative"), e(this).data("blockUI.static", !0)), (this.style.zoom = 1), t(this, n);
                })
            );
        }),
        (e.fn.unblock = function (t) {
            return this[0] === window ?
                (e.unblockUI(t), this) :
                this.each(function () {
                    n(this, t);
                });
        }),
        (e.blockUI.version = 2.7),
        (e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: 0.6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: 0.6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px",
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1,
        });
        var f = null,
            h = [];
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery);
})(),
/*! pace 1.0.2 */
function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        a,
        s,
        l,
        c,
        u,
        p,
        f,
        h,
        d,
        g,
        y,
        m,
        v,
        b,
        x,
        w,
        _,
        k,
        E,
        T,
        S,
        C,
        A,
        L,
        O,
        N,
        M,
        j,
        D,
        I,
        P,
        R,
        H,
        q,
        F,
        W,
        z,
        U,
        B,
        X,
        Y,
        V,
        $ = [].slice,
        Q = {}.hasOwnProperty,
        K = function (e, t) {
            function n() {
                this.constructor = e;
            }
            for (var i in t) Q.call(t, i) && (e[i] = t[i]);
            return (n.prototype = t.prototype), (e.prototype = new n()), (e.__super__ = t.prototype), e;
        },
        G = [].indexOf ||
        function (e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1;
        };
    for (
        x = {
            catchupTime: 100,
            initialRate: 0.03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            },
        },
        A = function () {
            var e;
            return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date();
        },
        O = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        b = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        null == O &&
        ((O = function (e) {
                return setTimeout(e, 50);
            }),
            (b = function (e) {
                return clearTimeout(e);
            })),
        M = function (e) {
            var t, n;
            return (
                (t = A()),
                (n = function () {
                    var i;
                    return (i = A() - t) >= 33 ?
                        ((t = A()),
                            e(i, function () {
                                return O(n);
                            })) :
                        setTimeout(n, 33 - i);
                })()
            );
        },
        N = function () {
            var e, t, n;
            return (n = arguments[0]), (t = arguments[1]), (e = 3 <= arguments.length ? $.call(arguments, 2) : []), "function" == typeof n[t] ? n[t].apply(n, e) : n[t];
        },
        w = function () {
            var e, t, n, i, o, r, a;
            for (t = arguments[0], r = 0, a = (i = 2 <= arguments.length ? $.call(arguments, 1) : []).length; a > r; r++)
                if ((n = i[r]))
                    for (e in n) Q.call(n, e) && ((o = n[e]), null != t[e] && "object" == typeof t[e] && null != o && "object" == typeof o ? w(t[e], o) : (t[e] = o));
            return t;
        },
        y = function (e) {
            var t, n, i, o, r;
            for (n = t = 0, o = 0, r = e.length; r > o; o++)(i = e[o]), (n += Math.abs(i)), t++;
            return n / t;
        },
        k = function (e, t) {
            var n, i, o;
            if ((null == e && (e = "options"), null == t && (t = !0), (o = document.querySelector("[data-pace-" + e + "]")))) {
                if (((n = o.getAttribute("data-pace-" + e)), !t)) return n;
                try {
                    return JSON.parse(n);
                } catch (e) {
                    return (i = e), "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0;
                }
            }
        },
        a = (function () {
            function e() {}
            return (
                (e.prototype.on = function (e, t, n, i) {
                    var o;
                    return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push({
                        handler: t,
                        ctx: n,
                        once: i
                    });
                }),
                (e.prototype.once = function (e, t, n) {
                    return this.on(e, t, n, !0);
                }),
                (e.prototype.off = function (e, t) {
                    var n, i, o;
                    if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                        if (null == t) return delete this.bindings[e];
                        for (n = 0, o = []; n < this.bindings[e].length;) o.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
                        return o;
                    }
                }),
                (e.prototype.trigger = function () {
                    var e, t, n, i, o, r, a, s, l;
                    if (((n = arguments[0]), (e = 2 <= arguments.length ? $.call(arguments, 1) : []), null != (a = this.bindings) ? a[n] : void 0)) {
                        for (o = 0, l = []; o < this.bindings[n].length;)(i = (s = this.bindings[n][o]).handler), (t = s.ctx), (r = s.once), i.apply(null != t ? t : this, e), l.push(r ? this.bindings[n].splice(o, 1) : o++);
                        return l;
                    }
                }),
                e
            );
        })(),
        c = window.Pace || {},
        window.Pace = c,
        w(c, a.prototype),
        L = c.options = w({}, x, window.paceOptions, k()),
        z = 0,
        B = (Y = ["ajax", "document", "eventLag", "elements"]).length; B > z; z++
    )
        !0 === L[(P = Y[z])] && (L[P] = x[P]);
    (l = (function (e) {
        function t() {
            return t.__super__.constructor.apply(this, arguments);
        }
        return K(t, e), t;
    })(Error)),
    (t = (function () {
        function e() {
            this.progress = 0;
        }
        return (
            (e.prototype.getElement = function () {
                var e;
                if (null == this.el) {
                    if (!(e = document.querySelector(L.target))) throw new l();
                    (this.el = document.createElement("div")),
                    (this.el.className = "pace pace-active"),
                    (document.body.className = document.body.className.replace(/pace-done/g, "")),
                    (document.body.className += " pace-running"),
                    (this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                    null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el);
                }
                return this.el;
            }),
            (e.prototype.finish = function () {
                var e;
                return (
                    ((e = this.getElement()).className = e.className.replace("pace-active", "")),
                    (e.className += " pace-inactive"),
                    (document.body.className = document.body.className.replace("pace-running", "")),
                    (document.body.className += " pace-done")
                );
            }),
            (e.prototype.update = function (e) {
                return (this.progress = e), this.render();
            }),
            (e.prototype.destroy = function () {
                try {
                    this.getElement().parentNode.removeChild(this.getElement());
                } catch (e) {
                    l = e;
                }
                return (this.el = void 0);
            }),
            (e.prototype.render = function () {
                var e, t, n, i, o, r, a;
                if (null == document.querySelector(L.target)) return !1;
                for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", o = 0, r = (a = ["webkitTransform", "msTransform", "transform"]).length; r > o; o++)(t = a[o]), (e.children[0].style[t] = i);
                return (
                    (!this.lastRenderedProgress || this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                    (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"),
                        this.progress >= 100 ? (n = "99") : ((n = this.progress < 10 ? "0" : ""), (n += 0 | this.progress)),
                        e.children[0].setAttribute("data-progress", "" + n)),
                    (this.lastRenderedProgress = this.progress)
                );
            }),
            (e.prototype.done = function () {
                return this.progress >= 100;
            }),
            e
        );
    })()),
    (s = (function () {
        function e() {
            this.bindings = {};
        }
        return (
            (e.prototype.trigger = function (e, t) {
                var n, i, o, r, a;
                if (null != this.bindings[e]) {
                    for (a = [], i = 0, o = (r = this.bindings[e]).length; o > i; i++)(n = r[i]), a.push(n.call(this, t));
                    return a;
                }
            }),
            (e.prototype.on = function (e, t) {
                var n;
                return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t);
            }),
            e
        );
    })()),
    (W = window.XMLHttpRequest),
    (F = window.XDomainRequest),
    (q = window.WebSocket),
    (_ = function (e, t) {
        var n, i;
        for (n in ((i = []), t.prototype))
            try {
                i.push(
                    null == e[n] && "function" != typeof t[n] ?
                    "function" == typeof Object.defineProperty ?
                    Object.defineProperty(e, n, {
                        get: function () {
                            return t.prototype[n];
                        },
                        configurable: !0,
                        enumerable: !0,
                    }) :
                    (e[n] = t.prototype[n]) :
                    void 0
                );
            } catch (e) {
                e;
            }
        return i;
    }),
    (S = []),
    (c.ignore = function () {
        var e, t, n;
        return (t = arguments[0]), (e = 2 <= arguments.length ? $.call(arguments, 1) : []), S.unshift("ignore"), (n = t.apply(null, e)), S.shift(), n;
    }),
    (c.track = function () {
        var e, t, n;
        return (t = arguments[0]), (e = 2 <= arguments.length ? $.call(arguments, 1) : []), S.unshift("track"), (n = t.apply(null, e)), S.shift(), n;
    }),
    (I = function (e) {
        var t;
        if ((null == e && (e = "GET"), "track" === S[0])) return "force";
        if (!S.length && L.ajax) {
            if ("socket" === e && L.ajax.trackWebSockets) return !0;
            if (((t = e.toUpperCase()), G.call(L.ajax.trackMethods, t) >= 0)) return !0;
        }
        return !1;
    }),
    (u = (function (e) {
        function t() {
            var e,
                n = this;
            t.__super__.constructor.apply(this, arguments),
                (e = function (e) {
                    var t;
                    return (
                        (t = e.open),
                        (e.open = function (i, o) {
                            return I(i) && n.trigger("request", {
                                type: i,
                                url: o,
                                request: e
                            }), t.apply(e, arguments);
                        })
                    );
                }),
                (window.XMLHttpRequest = function (t) {
                    var n;
                    return (n = new W(t)), e(n), n;
                });
            try {
                _(window.XMLHttpRequest, W);
            } catch (e) {}
            if (null != F) {
                window.XDomainRequest = function () {
                    var t;
                    return (t = new F()), e(t), t;
                };
                try {
                    _(window.XDomainRequest, F);
                } catch (e) {}
            }
            if (null != q && L.ajax.trackWebSockets) {
                window.WebSocket = function (e, t) {
                    var i;
                    return (i = null != t ? new q(e, t) : new q(e)), I("socket") && n.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: i
                    }), i;
                };
                try {
                    _(window.WebSocket, q);
                } catch (e) {}
            }
        }
        return K(t, e), t;
    })(s)),
    (U = null),
    (D = function (e) {
        var t, n, i, o;
        for (n = 0, i = (o = L.ajax.ignoreURLs).length; i > n; n++)
            if ("string" == typeof (t = o[n])) {
                if (-1 !== e.indexOf(t)) return !0;
            } else if (t.test(e)) return !0;
        return !1;
    }),
    (E = function () {
        return null == U && (U = new u()), U;
    })().on("request", function (t) {
            var n, i, o, r, a;
            return (
                (r = t.type),
                (o = t.request),
                (a = t.url),
                D(a) || c.running || (!1 === L.restartOnRequestAfter && "force" !== I(r)) ?
                void 0 :
                ((i = arguments),
                    "boolean" == typeof (n = L.restartOnRequestAfter || 0) && (n = 0),
                    setTimeout(function () {
                        var t, n, a, s, l;
                        if ("socket" === r ? o.readyState < 2 : 0 < (a = o.readyState) && 4 > a) {
                            for (c.restart(), l = [], t = 0, n = (s = c.sources).length; n > t; t++) {
                                if ((P = s[t]) instanceof e) {
                                    P.watch.apply(P, i);
                                    break;
                                }
                                l.push(void 0);
                            }
                            return l;
                        }
                    }, n))
            );
        }),
        (e = (function () {
            function e() {
                var e = this;
                (this.elements = []),
                E().on("request", function () {
                    return e.watch.apply(e, arguments);
                });
            }
            return (
                (e.prototype.watch = function (e) {
                    var t, n, i, o;
                    return (i = e.type), (t = e.request), (o = e.url), D(o) ? void 0 : ((n = "socket" === i ? new h(t) : new d(t)), this.elements.push(n));
                }),
                e
            );
        })()),
        (d = function (e) {
            var t,
                n,
                i,
                o,
                r,
                a = this;
            if (((this.progress = 0), null != window.ProgressEvent))
                for (
                    e.addEventListener(
                        "progress",
                        function (e) {
                            return (a.progress = e.lengthComputable ? (100 * e.loaded) / e.total : a.progress + (100 - a.progress) / 2);
                        },
                        !1
                    ),
                    n = 0,
                    i = (r = ["load", "abort", "timeout", "error"]).length; i > n; n++
                )
                    (t = r[n]),
                    e.addEventListener(
                        t,
                        function () {
                            return (a.progress = 100);
                        },
                        !1
                    );
            else
                (o = e.onreadystatechange),
                (e.onreadystatechange = function () {
                    var t;
                    return 0 === (t = e.readyState) || 4 === t ? (a.progress = 100) : 3 === e.readyState && (a.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0;
                });
        }),
        (h = function (e) {
            var t,
                n,
                i,
                o,
                r = this;
            for (this.progress = 0, n = 0, i = (o = ["error", "open"]).length; i > n; n++)
                (t = o[n]),
                e.addEventListener(
                    t,
                    function () {
                        return (r.progress = 100);
                    },
                    !1
                );
        }),
        (i = function (e) {
            var t, n, i, r;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), n = 0, i = (r = e.selectors).length; i > n; n++)(t = r[n]), this.elements.push(new o(t));
        }),
        (o = (function () {
            function e(e) {
                (this.selector = e), (this.progress = 0), this.check();
            }
            return (
                (e.prototype.check = function () {
                    var e = this;
                    return document.querySelector(this.selector) ?
                        this.done() :
                        setTimeout(function () {
                            return e.check();
                        }, L.elements.checkInterval);
                }),
                (e.prototype.done = function () {
                    return (this.progress = 100);
                }),
                e
            );
        })()),
        (n = (function () {
            function e() {
                var e,
                    t,
                    n = this;
                (this.progress = null != (t = this.states[document.readyState]) ? t : 100),
                (e = document.onreadystatechange),
                (document.onreadystatechange = function () {
                    return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0;
                });
            }
            return (e.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }), e;
        })()),
        (r = function () {
            var e,
                t,
                n,
                i,
                o,
                r = this;
            (this.progress = 0),
            (e = 0),
            (o = []),
            (i = 0),
            (n = A()),
            (t = setInterval(function () {
                var a;
                return (
                    (a = A() - n - 50),
                    (n = A()),
                    o.push(a),
                    o.length > L.eventLag.sampleCount && o.shift(),
                    (e = y(o)),
                    ++i >= L.eventLag.minSamples && e < L.eventLag.lagThreshold ? ((r.progress = 100), clearInterval(t)) : (r.progress = (3 / (e + 3)) * 100)
                );
            }, 50));
        }),
        (f = (function () {
            function e(e) {
                (this.source = e), (this.last = this.sinceLastUpdate = 0), (this.rate = L.initialRate), (this.catchup = 0), (this.progress = this.lastProgress = 0), null != this.source && (this.progress = N(this.source, "progress"));
            }
            return (
                (e.prototype.tick = function (e, t) {
                    var n;
                    return (
                        null == t && (t = N(this.source, "progress")),
                        t >= 100 && (this.done = !0),
                        t === this.last ?
                        (this.sinceLastUpdate += e) :
                        (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), (this.catchup = (t - this.progress) / L.catchupTime), (this.sinceLastUpdate = 0), (this.last = t)),
                        t > this.progress && (this.progress += this.catchup * e),
                        (n = 1 - Math.pow(this.progress / 100, L.easeFactor)),
                        (this.progress += n * this.rate * e),
                        (this.progress = Math.min(this.lastProgress + L.maxProgressPerFrame, this.progress)),
                        (this.progress = Math.max(0, this.progress)),
                        (this.progress = Math.min(100, this.progress)),
                        (this.lastProgress = this.progress),
                        this.progress
                    );
                }),
                e
            );
        })()),
        (R = null),
        (j = null),
        (m = null),
        (H = null),
        (g = null),
        (v = null),
        (c.running = !1),
        (T = function () {
            return L.restartOnPushState ? c.restart() : void 0;
        }),
        null != window.history.pushState &&
        ((X = window.history.pushState),
            (window.history.pushState = function () {
                return T(), X.apply(window.history, arguments);
            })),
        null != window.history.replaceState &&
        ((V = window.history.replaceState),
            (window.history.replaceState = function () {
                return T(), V.apply(window.history, arguments);
            })),
        (p = {
            ajax: e,
            elements: i,
            document: n,
            eventLag: r
        }),
        (C = function () {
            var e, n, i, o, r, a, s, l;
            for (c.sources = R = [], n = 0, o = (a = ["ajax", "elements", "document", "eventLag"]).length; o > n; n++) !1 !== L[(e = a[n])] && R.push(new p[e](L[e]));
            for (i = 0, r = (l = null != (s = L.extraSources) ? s : []).length; r > i; i++)(P = l[i]), R.push(new P(L));
            return (c.bar = m = new t()), (j = []), (H = new f());
        })(),
        (c.stop = function () {
            return c.trigger("stop"), (c.running = !1), m.destroy(), (v = !0), null != g && ("function" == typeof b && b(g), (g = null)), C();
        }),
        (c.restart = function () {
            return c.trigger("restart"), c.stop(), c.start();
        }),
        (c.go = function () {
            var e;
            return (
                (c.running = !0),
                m.render(),
                (e = A()),
                (v = !1),
                (g = M(function (t, n) {
                    var i, o, r, a, s, l, u, p, h, d, g, y, b, x, w;
                    for (100 - m.progress, o = d = 0, r = !0, l = g = 0, b = R.length; b > g; l = ++g)
                        for (P = R[l], h = null != j[l] ? j[l] : (j[l] = []), u = y = 0, x = (s = null != (w = P.elements) ? w : [P]).length; x > y; u = ++y)
                            (a = s[u]), (r &= (p = null != h[u] ? h[u] : (h[u] = new f(a))).done), p.done || (o++, (d += p.tick(t)));
                    return (
                        (i = d / o),
                        m.update(H.tick(t, i)),
                        m.done() || r || v ?
                        (m.update(100),
                            c.trigger("done"),
                            setTimeout(function () {
                                return m.finish(), (c.running = !1), c.trigger("hide");
                            }, Math.max(L.ghostTime, Math.max(L.minTime - (A() - e), 0)))) :
                        n()
                    );
                }))
            );
        }),
        (c.start = function (e) {
            w(L, e), (c.running = !0);
            try {
                m.render();
            } catch (e) {
                l = e;
            }
            return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50);
        }),
        "function" == typeof define && define.amd ?
        define(["pace"], function () {
            return c;
        }) :
        "object" == typeof exports ?
        (module.exports = c) :
        L.startOnPageLoad && c.start();
}.call(this),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ?
            define([], function () {
                return (e.Waves = t.call(e)), e.Waves;
            }) :
            "object" == typeof exports ?
            (module.exports = t.call(e)) :
            (e.Waves = t.call(e));
    })("object" == typeof global ? global : this, function () {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" == t || ("object" == t && !!e);
        }

        function r(e) {
            var i,
                r = n.call(e);
            return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o((i = e)) && 0 < i.nodeType ? [e] : [];
        }

        function a(e) {
            var t,
                n,
                i,
                o = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument,
                a = r.documentElement;
            return (
                void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()),
                (t = null !== (i = n = r) && i === i.window ? n : 9 === n.nodeType && n.defaultView), {
                    top: o.top + t.pageYOffset - a.clientTop,
                    left: o.left + t.pageXOffset - a.clientLeft
                }
            );
        }

        function s(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t;
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function (e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    (i.className = "waves-ripple waves-rippling"), t.appendChild(i);
                    var o = a(t),
                        r = 0,
                        c = 0;
                    (c = 0 <= (c = "touches" in e && e.touches.length ? ((r = e.touches[0].pageY - o.top), e.touches[0].pageX - o.left) : ((r = e.pageY - o.top), e.pageX - o.left)) ? c : 0), (r = 0 <= r ? r : 0);
                    var u = "scale(" + (t.clientWidth / 100) * 3 + ")",
                        p = "translate(0,0)";
                    n && (p = "translate(" + n.x + "px, " + n.y + "px)"),
                        i.setAttribute("data-hold", Date.now()),
                        i.setAttribute("data-x", c),
                        i.setAttribute("data-y", r),
                        i.setAttribute("data-scale", u),
                        i.setAttribute("data-translate", p);
                    var f = {
                        top: r + "px",
                        left: c + "px"
                    };
                    i.classList.add("waves-notransition"),
                        i.setAttribute("style", s(f)),
                        i.classList.remove("waves-notransition"),
                        (f["-webkit-transform"] = u + " " + p),
                        (f["-moz-transform"] = u + " " + p),
                        (f["-ms-transform"] = u + " " + p),
                        (f["-o-transform"] = u + " " + p),
                        (f.transform = u + " " + p),
                        (f.opacity = "1");
                    var h = "mousemove" === e.type ? 2500 : l.duration;
                    (f["-webkit-transition-duration"] = h + "ms"), (f["-moz-transition-duration"] = h + "ms"), (f["-o-transition-duration"] = h + "ms"), (f["transition-duration"] = h + "ms"), i.setAttribute("style", s(f));
                },
                hide: function (e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, r = n.length; o < r; o++) u(e, t, n[o]);
                    i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide);
                },
            },
            c = {
                input: function (e) {
                    var t,
                        n,
                        i,
                        o,
                        r = e.parentNode;
                    ("i" === r.tagName.toLowerCase() && r.classList.contains("waves-effect")) ||
                    (((t = document.createElement("i")).className = e.className + " waves-input-wrapper"),
                        (e.className = "waves-button-input"),
                        r.replaceChild(t, e),
                        t.appendChild(e),
                        (i = (n = window.getComputedStyle(e, null)).color),
                        (o = n.backgroundColor),
                        t.setAttribute("style", "color:" + i + ";background:" + o),
                        e.setAttribute("style", "background-color:rgba(0,0,0,0);"));
                },
                img: function (e) {
                    var t,
                        n = e.parentNode;
                    ("i" === n.tagName.toLowerCase() && n.classList.contains("waves-effect")) || ((t = document.createElement("i")), n.replaceChild(t, e), t.appendChild(e));
                },
            };

        function u(e, t, n) {
            var i, o, r, a, c, u;
            n &&
                (n.classList.remove("waves-rippling"),
                    (i = n.getAttribute("data-x")),
                    (o = n.getAttribute("data-y")),
                    (r = n.getAttribute("data-scale")),
                    (a = n.getAttribute("data-translate")),
                    (c = 350 - (Date.now() - Number(n.getAttribute("data-hold")))) < 0 && (c = 0),
                    "mousemove" === e.type && (c = 150),
                    (u = "mousemove" === e.type ? 2500 : l.duration),
                    setTimeout(function () {
                        var e = {
                            top: o + "px",
                            left: i + "px",
                            opacity: "0",
                            "-webkit-transition-duration": u + "ms",
                            "-moz-transition-duration": u + "ms",
                            "-o-transition-duration": u + "ms",
                            "transition-duration": u + "ms",
                            "-webkit-transform": r + " " + a,
                            "-moz-transform": r + " " + a,
                            "-ms-transform": r + " " + a,
                            "-o-transform": r + " " + a,
                            transform: r + " " + a,
                        };
                        n.setAttribute("style", s(e)),
                            setTimeout(function () {
                                try {
                                    t.removeChild(n);
                                } catch (e) {
                                    return !1;
                                }
                            }, u);
                    }, c));
        }
        var p = {
            touches: 0,
            allowEvent: function (e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && p.touches && (t = !1), t;
            },
            registerEvent: function (e) {
                var t = e.type;
                "touchstart" === t
                    ?
                    (p.touches += 1) :
                    /^(touchend|touchcancel)$/.test(t) &&
                    setTimeout(function () {
                        p.touches && --p.touches;
                    }, 500);
            },
        };

        function f(e) {
            var t,
                n,
                o,
                r,
                a,
                s = (function (e) {
                    if (!1 === p.allowEvent(e)) return null;
                    for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                        if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                            t = n;
                            break;
                        }
                        n = n.parentElement;
                    }
                    return t;
                })(e);
            if (null !== s) {
                if (s.disabled || s.getAttribute("disabled") || s.classList.contains("disabled")) return;
                p.registerEvent(e),
                    "touchstart" === e.type && l.delay ?
                    ((t = !1),
                        (n = setTimeout(function () {
                            (n = null), l.show(e, s);
                        }, l.delay)),
                        (o = function (i) {
                            n && (clearTimeout(n), (n = null), l.show(e, s)), t || ((t = !0), l.hide(i, s)), a();
                        }),
                        (r = function (e) {
                            n && (clearTimeout(n), (n = null)), o(e), a();
                        }),
                        s.addEventListener("touchmove", r, !1),
                        s.addEventListener("touchend", o, !1),
                        s.addEventListener("touchcancel", o, !1),
                        (a = function () {
                            s.removeEventListener("touchmove", r), s.removeEventListener("touchend", o), s.removeEventListener("touchcancel", o);
                        })) :
                    (l.show(e, s), i && (s.addEventListener("touchend", l.hide, !1), s.addEventListener("touchcancel", l.hide, !1)), s.addEventListener("mouseup", l.hide, !1), s.addEventListener("mouseleave", l.hide, !1));
            }
        }
        return (
            (e.init = function (e) {
                var t = document.body;
                "duration" in (e = e || {}) && (l.duration = e.duration),
                "delay" in e && (l.delay = e.delay),
                    i && (t.addEventListener("touchstart", f, !1), t.addEventListener("touchcancel", p.registerEvent, !1), t.addEventListener("touchend", p.registerEvent, !1)),
                    t.addEventListener("mousedown", f, !1);
            }),
            (e.attach = function (e, t) {
                var i, o;
                (e = r(e)), "[object Array]" === n.call(t) && (t = t.join(" ")), (t = t ? " " + t : "");
                for (var a = 0, s = e.length; a < s; a++)
                    (o = (i = e[a]).tagName.toLowerCase()), -1 !== ["input", "img"].indexOf(o) && (c[o](i), (i = i.parentElement)), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t);
            }),
            (e.ripple = function (e, t) {
                var n = (e = r(e)).length;
                if ((((t = t || {}).wait = t.wait || 0), (t.position = t.position || null), n))
                    for (
                        var i = {},
                            o = 0,
                            s = {
                                type: "mousedown",
                                button: 1
                            },
                            c = function (e, t) {
                                return function () {
                                    l.hide(e, t);
                                };
                            }; o < n; o++
                    ) {
                        var u = e[o],
                            p = t.position || {
                                x: u.clientWidth / 2,
                                y: u.clientHeight / 2
                            },
                            f = a(u);
                        (i.x = f.left + p.x), (i.y = f.top + p.y), (s.pageX = i.x), (s.pageY = i.y), l.show(s, u), 0 <= t.wait && null !== t.wait && setTimeout(c({
                            type: "mouseup",
                            button: 1
                        }, u), t.wait);
                    }
            }),
            (e.calm = function (e) {
                for (var t = {
                        type: "mouseup",
                        button: 1
                    }, n = 0, i = (e = r(e)).length; n < i; n++) l.hide(t, e[n]);
            }),
            (e.displayEffect = function (t) {
                e.init(t);
            }),
            e
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).i18next = t());
    })(this, function () {
        "use strict";

        function e(t) {
            return (e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(t);
        }

        function t(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : (e[t] = n), e;
        }

        function n(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? Object(arguments[n]) : {},
                    o = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                        })
                    )),
                    o.forEach(function (n) {
                        t(e, n, i[n]);
                    });
            }
            return e;
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }

        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }

        function a(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }

        function s(t, n) {
            return !n || ("object" !== e(n) && "function" != typeof n) ? a(t) : n;
        }

        function l(e) {
            return (l = Object.setPrototypeOf ?
                Object.getPrototypeOf :
                function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
        }

        function c(e, t) {
            return (c =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            })), t && c(e, t);
        }
        var p = {
                type: "logger",
                log: function (e) {
                    this.output("log", e);
                },
                warn: function (e) {
                    this.output("warn", e);
                },
                error: function (e) {
                    this.output("error", e);
                },
                output: function (e, t) {
                    console && console[e] && console[e].apply(console, t);
                },
            },
            f = new((function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e), this.init(t, n);
                }
                return (
                    r(e, [{
                            key: "init",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (this.prefix = t.prefix || "i18next:"), (this.logger = e || p), (this.options = t), (this.debug = t.debug);
                            },
                        },
                        {
                            key: "setDebug",
                            value: function (e) {
                                this.debug = e;
                            },
                        },
                        {
                            key: "log",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "log", "", !0);
                            },
                        },
                        {
                            key: "warn",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "", !0);
                            },
                        },
                        {
                            key: "error",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "error", "");
                            },
                        },
                        {
                            key: "deprecate",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                            },
                        },
                        {
                            key: "forward",
                            value: function (e, t, n, i) {
                                return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
                            },
                        },
                        {
                            key: "create",
                            value: function (t) {
                                return new e(this.logger, n({}, {
                                    prefix: "".concat(this.prefix, ":").concat(t, ":")
                                }, this.options));
                            },
                        },
                    ]),
                    e
                );
            })())(),
            h = (function () {
                function e() {
                    i(this, e), (this.observers = {});
                }
                return (
                    r(e, [{
                            key: "on",
                            value: function (e, t) {
                                var n = this;
                                return (
                                    e.split(" ").forEach(function (e) {
                                        (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
                                    }),
                                    this
                                );
                            },
                        },
                        {
                            key: "off",
                            value: function (e, t) {
                                this.observers[e] &&
                                    (t ?
                                        (this.observers[e] = this.observers[e].filter(function (e) {
                                            return e !== t;
                                        })) :
                                        delete this.observers[e]);
                            },
                        },
                        {
                            key: "emit",
                            value: function (e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                this.observers[e] && [].concat(this.observers[e]).forEach(function (e) {
                                        e.apply(void 0, n);
                                    }),
                                    this.observers["*"] && [].concat(this.observers["*"]).forEach(function (t) {
                                        t.apply(t, [e].concat(n));
                                    });
                            },
                        },
                    ]),
                    e
                );
            })();

        function d() {
            var e,
                t,
                n = new Promise(function (n, i) {
                    (e = n), (t = i);
                });
            return (n.resolve = e), (n.reject = t), n;
        }

        function g(e) {
            return null == e ? "" : "" + e;
        }

        function y(e, t, n) {
            function i(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
            }

            function o() {
                return !e || "string" == typeof e;
            }
            for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
                if (o()) return {};
                var a = i(r.shift());
                !e[a] && n && (e[a] = new n()), (e = e[a]);
            }
            return o() ? {} : {
                obj: e,
                k: i(r.shift())
            };
        }

        function m(e, t, n) {
            var i = y(e, t, Object);
            i.obj[i.k] = n;
        }

        function v(e, t) {
            var n = y(e, t),
                i = n.obj,
                o = n.k;
            if (i) return i[o];
        }

        function b(e, t, n) {
            var i = v(e, n);
            return void 0 !== i ? i : v(t, n);
        }

        function x(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var w = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };

        function _(e) {
            return "string" == typeof e ?
                e.replace(/[&<>"'\/]/g, function (e) {
                    return w[e];
                }) :
                e;
        }
        var k = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
            E = (function (e) {
                function t(e) {
                    var n,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                    return i(this, t), (n = s(this, l(t).call(this))), k && h.call(a(n)), (n.data = e || {}), (n.options = o), void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n;
                }
                return (
                    u(t, h),
                    r(t, [{
                            key: "addNamespaces",
                            value: function (e) {
                                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                            },
                        },
                        {
                            key: "removeNamespaces",
                            value: function (e) {
                                var t = this.options.ns.indexOf(e);
                                t > -1 && this.options.ns.splice(t, 1);
                            },
                        },
                        {
                            key: "getResource",
                            value: function (e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                                    r = [e, t];
                                return n && "string" != typeof n && (r = r.concat(n)), n && "string" == typeof n && (r = r.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (r = e.split(".")), v(this.data, r);
                            },
                        },
                        {
                            key: "addResource",
                            value: function (e, t, n, i) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                        silent: !1
                                    },
                                    r = this.options.keySeparator;
                                void 0 === r && (r = ".");
                                var a = [e, t];
                                n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && ((i = t), (t = (a = e.split("."))[1])), this.addNamespaces(t), m(this.data, a, i), o.silent || this.emit("added", e, t, n, i);
                            },
                        },
                        {
                            key: "addResources",
                            value: function (e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                    silent: !1
                                };
                                for (var o in n)("string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o])) || this.addResource(e, t, o, n[o], {
                                    silent: !0
                                });
                                i.silent || this.emit("added", e, t, n);
                            },
                        },
                        {
                            key: "addResourceBundle",
                            value: function (e, t, i, o, r) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                        silent: !1
                                    },
                                    s = [e, t];
                                e.indexOf(".") > -1 && ((o = i), (i = t), (t = (s = e.split("."))[1])), this.addNamespaces(t);
                                var l = v(this.data, s) || {};
                                o
                                    ?
                                    (function e(t, n, i) {
                                        for (var o in n)
                                            "__proto__" !== o && (o in t ? ("string" == typeof t[o] || t[o] instanceof String || "string" == typeof n[o] || n[o] instanceof String ? i && (t[o] = n[o]) : e(t[o], n[o], i)) : (t[o] = n[o]));
                                        return t;
                                    })(l, i, r) :
                                    (l = n({}, l, i)),
                                    m(this.data, s, l),
                                    a.silent || this.emit("added", e, t, i);
                            },
                        },
                        {
                            key: "removeResourceBundle",
                            value: function (e, t) {
                                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
                            },
                        },
                        {
                            key: "hasResourceBundle",
                            value: function (e, t) {
                                return void 0 !== this.getResource(e, t);
                            },
                        },
                        {
                            key: "getResourceBundle",
                            value: function (e, t) {
                                return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? n({}, {}, this.getResource(e, t)) : this.getResource(e, t);
                            },
                        },
                        {
                            key: "getDataByLanguage",
                            value: function (e) {
                                return this.data[e];
                            },
                        },
                        {
                            key: "toJSON",
                            value: function () {
                                return this.data;
                            },
                        },
                    ]),
                    t
                );
            })(),
            T = {
                processors: {},
                addPostProcessor: function (e) {
                    this.processors[e.name] = e;
                },
                handle: function (e, t, n, i, o) {
                    var r = this;
                    return (
                        e.forEach(function (e) {
                            r.processors[e] && (t = r.processors[e].process(t, n, i, o));
                        }),
                        t
                    );
                },
            },
            S = {},
            C = (function (t) {
                function o(e) {
                    var t,
                        n,
                        r,
                        c,
                        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (
                        i(this, o),
                        (t = s(this, l(o).call(this))),
                        k && h.call(a(t)),
                        (n = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"]),
                        (r = e),
                        (c = a(t)),
                        n.forEach(function (e) {
                            r[e] && (c[e] = r[e]);
                        }),
                        (t.options = u),
                        void 0 === t.options.keySeparator && (t.options.keySeparator = "."),
                        (t.logger = f.create("translator")),
                        t
                    );
                }
                return (
                    u(o, h),
                    r(o, [{
                            key: "changeLanguage",
                            value: function (e) {
                                e && (this.language = e);
                            },
                        },
                        {
                            key: "exists",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                        interpolation: {}
                                    },
                                    n = this.resolve(e, t);
                                return n && void 0 !== n.res;
                            },
                        },
                        {
                            key: "extractFromKey",
                            value: function (e, t) {
                                var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    o = t.ns || this.options.defaultNS;
                                if (n && e.indexOf(n) > -1) {
                                    var r = e.match(this.interpolator.nestingRegexp);
                                    if (r && r.length > 0) return {
                                        key: e,
                                        namespaces: o
                                    };
                                    var a = e.split(n);
                                    (n !== i || (n === i && this.options.ns.indexOf(a[0]) > -1)) && (o = a.shift()), (e = a.join(i));
                                }
                                return "string" == typeof o && (o = [o]), {
                                    key: e,
                                    namespaces: o
                                };
                            },
                        },
                        {
                            key: "translate",
                            value: function (t, i, o) {
                                var r = this;
                                if (("object" !== e(i) && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), i || (i = {}), null == t)) return "";
                                Array.isArray(t) || (t = [String(t)]);
                                var a = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                                    s = this.extractFromKey(t[t.length - 1], i),
                                    l = s.key,
                                    c = s.namespaces,
                                    u = c[c.length - 1],
                                    p = i.lng || this.language,
                                    f = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (p && "cimode" === p.toLowerCase()) {
                                    if (f) {
                                        var h = i.nsSeparator || this.options.nsSeparator;
                                        return u + h + l;
                                    }
                                    return l;
                                }
                                var d = this.resolve(t, i),
                                    g = d && d.res,
                                    y = (d && d.usedKey) || l,
                                    m = (d && d.exactUsedKey) || l,
                                    v = Object.prototype.toString.apply(g),
                                    b = void 0 !== i.joinArrays ? i.joinArrays : this.options.joinArrays,
                                    x = !this.i18nFormat || this.i18nFormat.handleAsObject;
                                if (
                                    x &&
                                    g &&
                                    "string" != typeof g &&
                                    "boolean" != typeof g &&
                                    "number" != typeof g && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(v) < 0 &&
                                    ("string" != typeof b || "[object Array]" !== v)
                                ) {
                                    if (!i.returnObjects && !this.options.returnObjects)
                                        return (
                                            this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                                            this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, g, i) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.")
                                        );
                                    if (a) {
                                        var w = "[object Array]" === v,
                                            _ = w ? [] : {},
                                            k = w ? m : y;
                                        for (var E in g)
                                            if (Object.prototype.hasOwnProperty.call(g, E)) {
                                                var T = "".concat(k).concat(a).concat(E);
                                                (_[E] = this.translate(T, n({}, i, {
                                                    joinArrays: !1,
                                                    ns: c
                                                }))), _[E] === T && (_[E] = g[E]);
                                            }
                                        g = _;
                                    }
                                } else if (x && "string" == typeof b && "[object Array]" === v)(g = g.join(b)) && (g = this.extendTranslation(g, t, i, o));
                                else {
                                    var S = !1,
                                        C = !1;
                                    if (!this.isValidLookup(g) && void 0 !== i.defaultValue) {
                                        if (((S = !0), void 0 !== i.count)) {
                                            var A = this.pluralResolver.getSuffix(p, i.count);
                                            g = i["defaultValue".concat(A)];
                                        }
                                        g || (g = i.defaultValue);
                                    }
                                    this.isValidLookup(g) || ((C = !0), (g = l));
                                    var L = i.defaultValue && i.defaultValue !== g && this.options.updateMissing;
                                    if (C || S || L) {
                                        if ((this.logger.log(L ? "updateKey" : "missingKey", p, u, l, L ? i.defaultValue : g), a)) {
                                            var O = this.resolve(l, n({}, i, {
                                                keySeparator: !1
                                            }));
                                            O &&
                                                O.res &&
                                                this.logger.warn(
                                                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                                                );
                                        }
                                        var N = [],
                                            M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && M && M[0])
                                            for (var j = 0; j < M.length; j++) N.push(M[j]);
                                        else "all" === this.options.saveMissingTo ? (N = this.languageUtils.toResolveHierarchy(i.lng || this.language)) : N.push(i.lng || this.language);
                                        var D = function (e, t) {
                                            r.options.missingKeyHandler ?
                                                r.options.missingKeyHandler(e, u, t, L ? i.defaultValue : g, L, i) :
                                                r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, u, t, L ? i.defaultValue : g, L, i),
                                                r.emit("missingKey", e, u, t, g);
                                        };
                                        if (this.options.saveMissing) {
                                            var I = void 0 !== i.count && "string" != typeof i.count;
                                            this.options.saveMissingPlurals && I ?
                                                N.forEach(function (e) {
                                                    r.pluralResolver.getPluralFormsOfKey(e, l).forEach(function (t) {
                                                        return D([e], t);
                                                    });
                                                }) :
                                                D(N, l);
                                        }
                                    }
                                    (g = this.extendTranslation(g, t, i, d, o)),
                                    C && g === l && this.options.appendNamespaceToMissingKey && (g = "".concat(u, ":").concat(l)),
                                        C && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(g));
                                }
                                return g;
                            },
                        },
                        {
                            key: "extendTranslation",
                            value: function (e, t, i, o, r) {
                                var a = this;
                                if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, i, o.usedLng, o.usedNS, o.usedKey, {
                                    resolved: o
                                });
                                else if (!i.skipInterpolation) {
                                    i.interpolation && this.interpolator.init(n({}, i, {
                                        interpolation: n({}, this.options.interpolation, i.interpolation)
                                    }));
                                    var s,
                                        l = (i.interpolation && i.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                    if (l) {
                                        var c = e.match(this.interpolator.nestingRegexp);
                                        s = c && c.length;
                                    }
                                    var u = i.replace && "string" != typeof i.replace ? i.replace : i;
                                    if ((this.options.interpolation.defaultVariables && (u = n({}, this.options.interpolation.defaultVariables, u)), (e = this.interpolator.interpolate(e, u, i.lng || this.language, i)), l)) {
                                        var p = e.match(this.interpolator.nestingRegexp);
                                        s < (p && p.length) && (i.nest = !1);
                                    }!1 !== i.nest &&
                                        (e = this.interpolator.nest(
                                            e,
                                            function () {
                                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                                return r && r[0] === n[0] ? (a.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, n.concat([t]));
                                            },
                                            i
                                        )),
                                        i.interpolation && this.interpolator.reset();
                                }
                                var f = i.postProcess || this.options.postProcess,
                                    h = "string" == typeof f ? [f] : f;
                                return null != e && h && h.length && !1 !== i.applyPostProcessor && (e = T.handle(h, e, t, this.options && this.options.postProcessPassResolved ? n({
                                    i18nResolved: o
                                }, i) : i, this)), e;
                            },
                        },
                        {
                            key: "resolve",
                            value: function (e) {
                                var t,
                                    n,
                                    i,
                                    o,
                                    r,
                                    a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return (
                                    "string" == typeof e && (e = [e]),
                                    e.forEach(function (e) {
                                        if (!a.isValidLookup(t)) {
                                            var l = a.extractFromKey(e, s),
                                                c = l.key;
                                            n = c;
                                            var u = l.namespaces;
                                            a.options.fallbackNS && (u = u.concat(a.options.fallbackNS));
                                            var p = void 0 !== s.count && "string" != typeof s.count,
                                                f = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                                                h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                            u.forEach(function (e) {
                                                a.isValidLookup(t) ||
                                                    ((r = e),
                                                        !S["".concat(h[0], "-").concat(e)] &&
                                                        a.utils &&
                                                        a.utils.hasLoadedNamespace &&
                                                        !a.utils.hasLoadedNamespace(r) &&
                                                        ((S["".concat(h[0], "-").concat(e)] = !0),
                                                            a.logger.warn(
                                                                'key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'),
                                                                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                                            )),
                                                        h.forEach(function (n) {
                                                            if (!a.isValidLookup(t)) {
                                                                o = n;
                                                                var r,
                                                                    l,
                                                                    u = c,
                                                                    h = [u];
                                                                for (
                                                                    a.i18nFormat && a.i18nFormat.addLookupKeys ?
                                                                    a.i18nFormat.addLookupKeys(h, c, n, e, s) :
                                                                    (p && (r = a.pluralResolver.getSuffix(n, s.count)),
                                                                        p && f && h.push(u + r),
                                                                        f && h.push((u += "".concat(a.options.contextSeparator).concat(s.context))),
                                                                        p && h.push((u += r)));
                                                                    (l = h.pop());

                                                                )
                                                                    a.isValidLookup(t) || ((i = l), (t = a.getResource(n, e, l, s)));
                                                            }
                                                        }));
                                            });
                                        }
                                    }), {
                                        res: t,
                                        usedKey: n,
                                        exactUsedKey: i,
                                        usedLng: o,
                                        usedNS: r
                                    }
                                );
                            },
                        },
                        {
                            key: "isValidLookup",
                            value: function (e) {
                                return !(void 0 === e || (!this.options.returnNull && null === e) || (!this.options.returnEmptyString && "" === e));
                            },
                        },
                        {
                            key: "getResource",
                            value: function (e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i);
                            },
                        },
                    ]),
                    o
                );
            })();

        function A(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        var L = (function () {
                function e(t) {
                    i(this, e), (this.options = t), (this.whitelist = this.options.supportedLngs || !1), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = f.create("languageUtils"));
                }
                return (
                    r(e, [{
                            key: "getScriptPartFromCode",
                            value: function (e) {
                                if (!e || e.indexOf("-") < 0) return null;
                                var t = e.split("-");
                                return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
                            },
                        },
                        {
                            key: "getLanguagePartFromCode",
                            value: function (e) {
                                if (!e || e.indexOf("-") < 0) return e;
                                var t = e.split("-");
                                return this.formatLanguageCode(t[0]);
                            },
                        },
                        {
                            key: "formatLanguageCode",
                            value: function (e) {
                                if ("string" == typeof e && e.indexOf("-") > -1) {
                                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = e.split("-");
                                    return (
                                        this.options.lowerCaseLng ?
                                        (n = n.map(function (e) {
                                            return e.toLowerCase();
                                        })) :
                                        2 === n.length ?
                                        ((n[0] = n[0].toLowerCase()), (n[1] = n[1].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = A(n[1].toLowerCase()))) :
                                        3 === n.length &&
                                        ((n[0] = n[0].toLowerCase()),
                                            2 === n[1].length && (n[1] = n[1].toUpperCase()),
                                            "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                                            t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = A(n[1].toLowerCase())),
                                            t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = A(n[2].toLowerCase()))),
                                        n.join("-")
                                    );
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
                            },
                        },
                        {
                            key: "isWhitelisted",
                            value: function (e) {
                                return (
                                    this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                                    this.isSupportedCode(e)
                                );
                            },
                        },
                        {
                            key: "isSupportedCode",
                            value: function (e) {
                                return (
                                    ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                                );
                            },
                        },
                        {
                            key: "getBestMatchFromCodes",
                            value: function (e) {
                                var t,
                                    n = this;
                                return e ?
                                    (e.forEach(function (e) {
                                            if (!t) {
                                                var i = n.formatLanguageCode(e);
                                                (n.options.supportedLngs && !n.isSupportedCode(i)) || (t = i);
                                            }
                                        }),
                                        !t &&
                                        this.options.supportedLngs &&
                                        e.forEach(function (e) {
                                            if (!t) {
                                                var i = n.getLanguagePartFromCode(e);
                                                if (n.isSupportedCode(i)) return (t = i);
                                                t = n.options.supportedLngs.find(function (e) {
                                                    if (0 === e.indexOf(i)) return e;
                                                });
                                            }
                                        }),
                                        t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                                        t) :
                                    null;
                            },
                        },
                        {
                            key: "getFallbackCodes",
                            value: function (e, t) {
                                if (!e) return [];
                                if (("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e))) return e;
                                if (!t) return e.default || [];
                                var n = e[t];
                                return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
                            },
                        },
                        {
                            key: "toResolveHierarchy",
                            value: function (e, t) {
                                var n = this,
                                    i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                    o = [],
                                    r = function (e) {
                                        e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
                                    };
                                return (
                                    "string" == typeof e && e.indexOf("-") > -1 ?
                                    ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)),
                                        "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)),
                                        "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) :
                                    "string" == typeof e && r(this.formatLanguageCode(e)),
                                    i.forEach(function (e) {
                                        o.indexOf(e) < 0 && r(n.formatLanguageCode(e));
                                    }),
                                    o
                                );
                            },
                        },
                    ]),
                    e
                );
            })(),
            O = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                },
                {
                    lngs: [
                        "af",
                        "an",
                        "ast",
                        "az",
                        "bg",
                        "bn",
                        "ca",
                        "da",
                        "de",
                        "dev",
                        "el",
                        "en",
                        "eo",
                        "es",
                        "et",
                        "eu",
                        "fi",
                        "fo",
                        "fur",
                        "fy",
                        "gl",
                        "gu",
                        "ha",
                        "hi",
                        "hu",
                        "hy",
                        "ia",
                        "it",
                        "kn",
                        "ku",
                        "lb",
                        "mai",
                        "ml",
                        "mn",
                        "mr",
                        "nah",
                        "nap",
                        "nb",
                        "ne",
                        "nl",
                        "nn",
                        "no",
                        "nso",
                        "pa",
                        "pap",
                        "pms",
                        "ps",
                        "pt-PT",
                        "rm",
                        "sco",
                        "se",
                        "si",
                        "so",
                        "son",
                        "sq",
                        "sv",
                        "sw",
                        "ta",
                        "te",
                        "tk",
                        "ur",
                        "yo",
                    ],
                    nr: [1, 2],
                    fc: 2,
                },
                {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                },
                {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                },
                {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                },
                {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                },
                {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                },
                {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                },
                {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                },
                {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                },
                {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                },
                {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                },
                {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                },
                {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                },
                {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                },
                {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                },
                {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                },
                {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                },
                {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                },
                {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                },
                {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                },
                {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                },
                {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                },
            ],
            N = {
                1: function (e) {
                    return Number(e > 1);
                },
                2: function (e) {
                    return Number(1 != e);
                },
                3: function (e) {
                    return 0;
                },
                4: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                5: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
                },
                6: function (e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
                },
                7: function (e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                8: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
                },
                9: function (e) {
                    return Number(e >= 2);
                },
                10: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
                },
                11: function (e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
                },
                12: function (e) {
                    return Number(e % 10 != 1 || e % 100 == 11);
                },
                13: function (e) {
                    return Number(0 !== e);
                },
                14: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
                },
                15: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                16: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
                },
                17: function (e) {
                    return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
                },
                18: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2);
                },
                19: function (e) {
                    return Number(1 == e ? 0 : 0 == e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
                },
                20: function (e) {
                    return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
                },
                21: function (e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
                },
                22: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
                },
            },
            M = (function () {
                function e(t) {
                    var n,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e),
                        (this.languageUtils = t),
                        (this.options = o),
                        (this.logger = f.create("pluralResolver")),
                        (this.rules =
                            ((n = {}),
                                O.forEach(function (e) {
                                    e.lngs.forEach(function (t) {
                                        n[t] = {
                                            numbers: e.nr,
                                            plurals: N[e.fc]
                                        };
                                    });
                                }),
                                n));
                }
                return (
                    r(e, [{
                            key: "addRule",
                            value: function (e, t) {
                                this.rules[e] = t;
                            },
                        },
                        {
                            key: "getRule",
                            value: function (e) {
                                return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
                            },
                        },
                        {
                            key: "needsPlural",
                            value: function (e) {
                                var t = this.getRule(e);
                                return t && t.numbers.length > 1;
                            },
                        },
                        {
                            key: "getPluralFormsOfKey",
                            value: function (e, t) {
                                var n = this,
                                    i = [],
                                    o = this.getRule(e);
                                return o ?
                                    (o.numbers.forEach(function (o) {
                                            var r = n.getSuffix(e, o);
                                            i.push("".concat(t).concat(r));
                                        }),
                                        i) :
                                    i;
                            },
                        },
                        {
                            key: "getSuffix",
                            value: function (e, t) {
                                var n = this,
                                    i = this.getRule(e);
                                if (i) {
                                    var o = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                        r = i.numbers[o];
                                    this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === r ? (r = "plural") : 1 === r && (r = ""));
                                    var a = function () {
                                        return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString();
                                    };
                                    return "v1" === this.options.compatibilityJSON ?
                                        1 === r ?
                                        "" :
                                        "number" == typeof r ?
                                        "_plural_".concat(r.toString()) :
                                        a() :
                                        "v2" === this.options.compatibilityJSON || (this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0]) ?
                                        a() :
                                        this.options.prepend && o.toString() ?
                                        this.options.prepend + o.toString() :
                                        o.toString();
                                }
                                return this.logger.warn("no plural rule found for: ".concat(e)), "";
                            },
                        },
                    ]),
                    e
                );
            })(),
            j = (function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e),
                        (this.logger = f.create("interpolator")),
                        (this.options = t),
                        (this.format =
                            (t.interpolation && t.interpolation.format) ||
                            function (e) {
                                return e;
                            }),
                        this.init(t);
                }
                return (
                    r(e, [{
                            key: "init",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                e.interpolation || (e.interpolation = {
                                    escapeValue: !0
                                });
                                var t = e.interpolation;
                                (this.escape = void 0 !== t.escape ? t.escape : _),
                                (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                                (this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                                (this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{"),
                                (this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}"),
                                (this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
                                (this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
                                (this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
                                (this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t(")),
                                (this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")")),
                                (this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ","),
                                (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                                (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                                this.resetRegExp();
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                this.options && this.init(this.options);
                            },
                        },
                        {
                            key: "resetRegExp",
                            value: function () {
                                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                this.regexp = new RegExp(e, "g");
                                var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                this.regexpUnescape = new RegExp(t, "g");
                                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                this.nestingRegexp = new RegExp(n, "g");
                            },
                        },
                        {
                            key: "interpolate",
                            value: function (e, t, n, i) {
                                var o,
                                    r,
                                    a,
                                    s = this,
                                    l = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};

                                function c(e) {
                                    return e.replace(/\$/g, "$$$$");
                                }
                                var u = function (e) {
                                    if (e.indexOf(s.formatSeparator) < 0) {
                                        var o = b(t, l, e);
                                        return s.alwaysFormat ? s.format(o, void 0, n) : o;
                                    }
                                    var r = e.split(s.formatSeparator),
                                        a = r.shift().trim(),
                                        c = r.join(s.formatSeparator).trim();
                                    return s.format(b(t, l, a), c, n, i);
                                };
                                this.resetRegExp();
                                var p = (i && i.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                                    f = (i && i.interpolation && i.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                return (
                                    [{
                                            regex: this.regexpUnescape,
                                            safeValue: function (e) {
                                                return c(e);
                                            },
                                        },
                                        {
                                            regex: this.regexp,
                                            safeValue: function (e) {
                                                return s.escapeValue ? c(s.escape(e)) : c(e);
                                            },
                                        },
                                    ].forEach(function (t) {
                                        for (a = 0;
                                            (o = t.regex.exec(e));) {
                                            if (void 0 === (r = u(o[1].trim())))
                                                if ("function" == typeof p) {
                                                    var n = p(e, o, i);
                                                    r = "string" == typeof n ? n : "";
                                                } else {
                                                    if (f) {
                                                        r = o[0];
                                                        continue;
                                                    }
                                                    s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), (r = "");
                                                }
                                            else "string" == typeof r || s.useRawValueToEscape || (r = g(r));
                                            if (((e = e.replace(o[0], t.safeValue(r))), (t.regex.lastIndex = 0), ++a >= s.maxReplaces)) break;
                                        }
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "nest",
                            value: function (e, t) {
                                var i,
                                    o,
                                    r = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    s = n({}, a);

                                function l(e, t) {
                                    var i = this.nestingOptionsSeparator;
                                    if (e.indexOf(i) < 0) return e;
                                    var o = e.split(new RegExp("".concat(i, "[ ]*{"))),
                                        r = "{".concat(o[1]);
                                    (e = o[0]), (r = (r = this.interpolate(r, s)).replace(/'/g, '"'));
                                    try {
                                        (s = JSON.parse(r)), t && (s = n({}, t, s));
                                    } catch (t) {
                                        return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(i).concat(r);
                                    }
                                    return delete s.defaultValue, e;
                                }
                                for (s.applyPostProcessor = !1, delete s.defaultValue;
                                    (i = this.nestingRegexp.exec(e));) {
                                    var c = [],
                                        u = !1;
                                    if (i[0].includes(this.formatSeparator) && !/{.*}/.test(i[1])) {
                                        var p = i[1].split(this.formatSeparator).map(function (e) {
                                            return e.trim();
                                        });
                                        (i[1] = p.shift()), (c = p), (u = !0);
                                    }
                                    if ((o = t(l.call(this, i[1].trim(), s), s)) && i[0] === e && "string" != typeof o) return o;
                                    "string" != typeof o && (o = g(o)),
                                        o || (this.logger.warn("missed to resolve ".concat(i[1], " for nesting ").concat(e)), (o = "")),
                                        u &&
                                        (o = c.reduce(function (e, t) {
                                            return r.format(e, t, a.lng, a);
                                        }, o.trim())),
                                        (e = e.replace(i[0], o)),
                                        (this.regexp.lastIndex = 0);
                                }
                                return e;
                            },
                        },
                    ]),
                    e
                );
            })(),
            D = (function (e) {
                function t(e, n, o) {
                    var r,
                        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (
                        i(this, t),
                        (r = s(this, l(t).call(this))),
                        k && h.call(a(r)),
                        (r.backend = e),
                        (r.store = n),
                        (r.services = o),
                        (r.languageUtils = o.languageUtils),
                        (r.options = c),
                        (r.logger = f.create("backendConnector")),
                        (r.state = {}),
                        (r.queue = []),
                        r.backend && r.backend.init && r.backend.init(o, c.backend, c),
                        r
                    );
                }
                return (
                    u(t, h),
                    r(t, [{
                            key: "queueLoad",
                            value: function (e, t, n, i) {
                                var o = this,
                                    r = [],
                                    a = [],
                                    s = [],
                                    l = [];
                                return (
                                    e.forEach(function (e) {
                                        var i = !0;
                                        t.forEach(function (t) {
                                                var s = "".concat(e, "|").concat(t);
                                                !n.reload && o.store.hasResourceBundle(e, t) ?
                                                    (o.state[s] = 2) :
                                                    o.state[s] < 0 ||
                                                    (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : ((o.state[s] = 1), (i = !1), a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), l.indexOf(t) < 0 && l.push(t)));
                                            }),
                                            i || s.push(e);
                                    }),
                                    (r.length || a.length) && this.queue.push({
                                        pending: a,
                                        loaded: {},
                                        errors: [],
                                        callback: i
                                    }), {
                                        toLoad: r,
                                        pending: a,
                                        toLoadLanguages: s,
                                        toLoadNamespaces: l
                                    }
                                );
                            },
                        },
                        {
                            key: "loaded",
                            value: function (e, t, n) {
                                var i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                t && this.emit("failedLoading", o, r, t), n && this.store.addResourceBundle(o, r, n), (this.state[e] = t ? -1 : 2);
                                var a = {};
                                this.queue.forEach(function (n) {
                                        var i, s, l, c, u;
                                        (i = n.loaded),
                                        (s = r),
                                        ((c = (l = y(i, [o], Object)).obj)[(u = l.k)] = c[u] || []),
                                        c[u].push(s),
                                            (function (e, t) {
                                                for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), (n = e.indexOf(t));
                                            })(n.pending, e),
                                            t && n.errors.push(t),
                                            0 !== n.pending.length ||
                                            n.done ||
                                            (Object.keys(n.loaded).forEach(function (e) {
                                                    a[e] || (a[e] = []),
                                                        n.loaded[e].length &&
                                                        n.loaded[e].forEach(function (t) {
                                                            a[e].indexOf(t) < 0 && a[e].push(t);
                                                        });
                                                }),
                                                (n.done = !0),
                                                n.errors.length ? n.callback(n.errors) : n.callback());
                                    }),
                                    this.emit("loaded", a),
                                    (this.queue = this.queue.filter(function (e) {
                                        return !e.done;
                                    }));
                            },
                        },
                        {
                            key: "read",
                            value: function (e, t, n) {
                                var i = this,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                return e.length ?
                                    this.backend[n](e, t, function (s, l) {
                                        s && l && o < 5 ?
                                            setTimeout(function () {
                                                i.read.call(i, e, t, n, o + 1, 2 * r, a);
                                            }, r) :
                                            a(s, l);
                                    }) :
                                    a(null, {});
                            },
                        },
                        {
                            key: "prepareLoading",
                            value: function (e, t) {
                                var n = this,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = arguments.length > 3 ? arguments[3] : void 0;
                                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                                var r = this.queueLoad(e, t, i, o);
                                if (!r.toLoad.length) return r.pending.length || o(), null;
                                r.toLoad.forEach(function (e) {
                                    n.loadOne(e);
                                });
                            },
                        },
                        {
                            key: "load",
                            value: function (e, t, n) {
                                this.prepareLoading(e, t, {}, n);
                            },
                        },
                        {
                            key: "reload",
                            value: function (e, t, n) {
                                this.prepareLoading(e, t, {
                                    reload: !0
                                }, n);
                            },
                        },
                        {
                            key: "loadOne",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                this.read(o, r, "read", void 0, void 0, function (i, a) {
                                    i && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(o, " failed"), i),
                                        !i && a && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(o), a),
                                        t.loaded(e, i, a);
                                });
                            },
                        },
                        {
                            key: "saveMissing",
                            value: function (e, t, i, o, r) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ?
                                    this.logger.warn(
                                        'did not save key "'.concat(i, '" as the namespace "').concat(t, '" was not yet loaded'),
                                        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                    ) :
                                    null != i && "" !== i && (this.backend && this.backend.create && this.backend.create(e, t, i, o, null, n({}, a, {
                                        isUpdate: r
                                    })), e && e[0] && this.store.addResource(e[0], t, i, o));
                            },
                        },
                    ]),
                    t
                );
            })();

        function I(e) {
            return (
                "string" == typeof e.ns && (e.ns = [e.ns]),
                "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
                "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
                e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), (e.supportedLngs = e.whitelist)),
                e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
                e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                e
            );
        }

        function P() {}
        return new((function (t) {
            function o() {
                var e,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if ((i(this, o), (e = s(this, l(o).call(this))), k && h.call(a(e)), (e.options = I(t)), (e.services = {}), (e.logger = f), (e.modules = {
                        external: []
                    }), n && !e.isInitialized && !t.isClone)) {
                    if (!e.options.initImmediate) return e.init(t, n), s(e, a(e));
                    setTimeout(function () {
                        e.init(t, n);
                    }, 0);
                }
                return e;
            }
            return (
                u(o, h),
                r(o, [{
                        key: "init",
                        value: function () {
                            var t = this,
                                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                o = arguments.length > 1 ? arguments[1] : void 0;

                            function r(e) {
                                return e ? ("function" == typeof e ? new e() : e) : null;
                            }
                            if (
                                ("function" == typeof i && ((o = i), (i = {})),
                                    i.whitelist && !i.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                                    i.nonExplicitWhitelist &&
                                    !i.nonExplicitSupportedLngs &&
                                    this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                                    (this.options = n({}, {
                                            debug: !1,
                                            initImmediate: !0,
                                            ns: ["translation"],
                                            defaultNS: ["translation"],
                                            fallbackLng: ["dev"],
                                            fallbackNS: !1,
                                            whitelist: !1,
                                            nonExplicitWhitelist: !1,
                                            supportedLngs: !1,
                                            nonExplicitSupportedLngs: !1,
                                            load: "all",
                                            preload: !1,
                                            simplifyPluralSuffix: !0,
                                            keySeparator: ".",
                                            nsSeparator: ":",
                                            pluralSeparator: "_",
                                            contextSeparator: "_",
                                            partialBundledLanguages: !1,
                                            saveMissing: !1,
                                            updateMissing: !1,
                                            saveMissingTo: "fallback",
                                            saveMissingPlurals: !0,
                                            missingKeyHandler: !1,
                                            missingInterpolationHandler: !1,
                                            postProcess: !1,
                                            postProcessPassResolved: !1,
                                            returnNull: !0,
                                            returnEmptyString: !0,
                                            returnObjects: !1,
                                            joinArrays: !1,
                                            returnedObjectHandler: !1,
                                            parseMissingKeyHandler: !1,
                                            appendNamespaceToMissingKey: !1,
                                            appendNamespaceToCIMode: !1,
                                            overloadTranslationOptionHandler: function (t) {
                                                var n = {};
                                                if (("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3]))) {
                                                    var i = t[3] || t[2];
                                                    Object.keys(i).forEach(function (e) {
                                                        n[e] = i[e];
                                                    });
                                                }
                                                return n;
                                            },
                                            interpolation: {
                                                escapeValue: !0,
                                                format: function (e, t, n, i) {
                                                    return e;
                                                },
                                                prefix: "{{",
                                                suffix: "}}",
                                                formatSeparator: ",",
                                                unescapePrefix: "-",
                                                nestingPrefix: "$t(",
                                                nestingSuffix: ")",
                                                nestingOptionsSeparator: ",",
                                                maxReplaces: 1e3,
                                                skipOnVariables: !1,
                                            },
                                        },
                                        this.options,
                                        I(i)
                                    )),
                                    (this.format = this.options.interpolation.format),
                                    o || (o = P),
                                    !this.options.isClone)
                            ) {
                                this.modules.logger ? f.init(r(this.modules.logger), this.options) : f.init(null, this.options);
                                var a = new L(this.options);
                                this.store = new E(this.options.resources, this.options);
                                var s = this.services;
                                (s.logger = f),
                                (s.resourceStore = this.store),
                                (s.languageUtils = a),
                                (s.pluralResolver = new M(a, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                })),
                                (s.interpolator = new j(this.options)),
                                (s.utils = {
                                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                }),
                                (s.backendConnector = new D(r(this.modules.backend), s.resourceStore, s, this.options)),
                                s.backendConnector.on("*", function (e) {
                                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                        t.emit.apply(t, [e].concat(i));
                                    }),
                                    this.modules.languageDetector && ((s.languageDetector = r(this.modules.languageDetector)), s.languageDetector.init(s, this.options.detection, this.options)),
                                    this.modules.i18nFormat && ((s.i18nFormat = r(this.modules.i18nFormat)), s.i18nFormat.init && s.i18nFormat.init(this)),
                                    (this.translator = new C(this.services, this.options)),
                                    this.translator.on("*", function (e) {
                                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                        t.emit.apply(t, [e].concat(i));
                                    }),
                                    this.modules.external.forEach(function (e) {
                                        e.init && e.init(t);
                                    });
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"),
                                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (e) {
                                    t[e] = function () {
                                        var n;
                                        return (n = t.store)[e].apply(n, arguments);
                                    };
                                }),
                                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(function (e) {
                                    t[e] = function () {
                                        var n;
                                        return (n = t.store)[e].apply(n, arguments), t;
                                    };
                                });
                            var l = d(),
                                c = function () {
                                    t.changeLanguage(t.options.lng, function (e, n) {
                                        (t.isInitialized = !0), t.options.isClone || t.logger.log("initialized", t.options), t.emit("initialized", t.options), l.resolve(n), o(e, n);
                                    });
                                };
                            return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
                        },
                    },
                    {
                        key: "loadResources",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
                                i = "string" == typeof e ? e : this.language;
                            if (("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages)) {
                                if (i && "cimode" === i.toLowerCase()) return n();
                                var o = [],
                                    r = function (e) {
                                        e &&
                                            t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                                                o.indexOf(e) < 0 && o.push(e);
                                            });
                                    };
                                i
                                    ?
                                    r(i) :
                                    this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
                                        return r(e);
                                    }),
                                    this.options.preload &&
                                    this.options.preload.forEach(function (e) {
                                        return r(e);
                                    }),
                                    this.services.backendConnector.load(o, this.options.ns, n);
                            } else n(null);
                        },
                    },
                    {
                        key: "reloadResources",
                        value: function (e, t, n) {
                            var i = d();
                            return (
                                e || (e = this.languages),
                                t || (t = this.options.ns),
                                n || (n = P),
                                this.services.backendConnector.reload(e, t, function (e) {
                                    i.resolve(), n(e);
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "use",
                        value: function (e) {
                            if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                            if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                            return (
                                "backend" === e.type && (this.modules.backend = e),
                                ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                                "languageDetector" === e.type && (this.modules.languageDetector = e),
                                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                                "postProcessor" === e.type && T.addPostProcessor(e),
                                "3rdParty" === e.type && this.modules.external.push(e),
                                this
                            );
                        },
                    },
                    {
                        key: "changeLanguage",
                        value: function (e, t) {
                            var n = this;
                            this.isLanguageChangingTo = e;
                            var i = d();
                            this.emit("languageChanging", e);
                            var o = function (e) {
                                var o = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                o &&
                                    (n.language || ((n.language = o), (n.languages = n.services.languageUtils.toResolveHierarchy(o))),
                                        n.translator.language || n.translator.changeLanguage(o),
                                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)),
                                    n.loadResources(o, function (e) {
                                        !(function (e, o) {
                                            o
                                                ?
                                                ((n.language = o),
                                                    (n.languages = n.services.languageUtils.toResolveHierarchy(o)),
                                                    n.translator.changeLanguage(o),
                                                    (n.isLanguageChangingTo = void 0),
                                                    n.emit("languageChanged", o),
                                                    n.logger.log("languageChanged", o)) :
                                                (n.isLanguageChangingTo = void 0),
                                                i.resolve(function () {
                                                    return n.t.apply(n, arguments);
                                                }),
                                                t &&
                                                t(e, function () {
                                                    return n.t.apply(n, arguments);
                                                });
                                        })(e, o);
                                    });
                            };
                            return (
                                e || !this.services.languageDetector || this.services.languageDetector.async ?
                                !e && this.services.languageDetector && this.services.languageDetector.async ?
                                this.services.languageDetector.detect(o) :
                                o(e) :
                                o(this.services.languageDetector.detect()),
                                i
                            );
                        },
                    },
                    {
                        key: "getFixedT",
                        value: function (t, i) {
                            var o = this,
                                r = function t(i, r) {
                                    var a;
                                    if ("object" !== e(r)) {
                                        for (var s = arguments.length, l = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) l[c - 2] = arguments[c];
                                        a = o.options.overloadTranslationOptionHandler([i, r].concat(l));
                                    } else a = n({}, r);
                                    return (a.lng = a.lng || t.lng), (a.lngs = a.lngs || t.lngs), (a.ns = a.ns || t.ns), o.t(i, a);
                                };
                            return "string" == typeof t ? (r.lng = t) : (r.lngs = t), (r.ns = i), r;
                        },
                    },
                    {
                        key: "t",
                        value: function () {
                            var e;
                            return this.translator && (e = this.translator).translate.apply(e, arguments);
                        },
                    },
                    {
                        key: "exists",
                        value: function () {
                            var e;
                            return this.translator && (e = this.translator).exists.apply(e, arguments);
                        },
                    },
                    {
                        key: "setDefaultNamespace",
                        value: function (e) {
                            this.options.defaultNS = e;
                        },
                    },
                    {
                        key: "hasLoadedNamespace",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var i = this.languages[0],
                                o = !!this.options && this.options.fallbackLng,
                                r = this.languages[this.languages.length - 1];
                            if ("cimode" === i.toLowerCase()) return !0;
                            var a = function (e, n) {
                                var i = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                return -1 === i || 2 === i;
                            };
                            if (n.precheck) {
                                var s = n.precheck(this, a);
                                if (void 0 !== s) return s;
                            }
                            return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!a(i, e) || (o && !a(r, e)));
                        },
                    },
                    {
                        key: "loadNamespaces",
                        value: function (e, t) {
                            var n = this,
                                i = d();
                            return this.options.ns ?
                                ("string" == typeof e && (e = [e]),
                                    e.forEach(function (e) {
                                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                                    }),
                                    this.loadResources(function (e) {
                                        i.resolve(), t && t(e);
                                    }),
                                    i) :
                                (t && t(), Promise.resolve());
                        },
                    },
                    {
                        key: "loadLanguages",
                        value: function (e, t) {
                            var n = d();
                            "string" == typeof e && (e = [e]);
                            var i = this.options.preload || [],
                                o = e.filter(function (e) {
                                    return i.indexOf(e) < 0;
                                });
                            return o.length ?
                                ((this.options.preload = i.concat(o)),
                                    this.loadResources(function (e) {
                                        n.resolve(), t && t(e);
                                    }),
                                    n) :
                                (t && t(), Promise.resolve());
                        },
                    },
                    {
                        key: "dir",
                        value: function (e) {
                            return (
                                e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                                e ?
                                [
                                    "ar",
                                    "shu",
                                    "sqr",
                                    "ssh",
                                    "xaa",
                                    "yhd",
                                    "yud",
                                    "aao",
                                    "abh",
                                    "abv",
                                    "acm",
                                    "acq",
                                    "acw",
                                    "acx",
                                    "acy",
                                    "adf",
                                    "ads",
                                    "aeb",
                                    "aec",
                                    "afb",
                                    "ajp",
                                    "apc",
                                    "apd",
                                    "arb",
                                    "arq",
                                    "ars",
                                    "ary",
                                    "arz",
                                    "auz",
                                    "avl",
                                    "ayh",
                                    "ayl",
                                    "ayn",
                                    "ayp",
                                    "bbz",
                                    "pga",
                                    "he",
                                    "iw",
                                    "ps",
                                    "pbt",
                                    "pbu",
                                    "pst",
                                    "prp",
                                    "prd",
                                    "ug",
                                    "ur",
                                    "ydd",
                                    "yds",
                                    "yih",
                                    "ji",
                                    "yi",
                                    "hbo",
                                    "men",
                                    "xmn",
                                    "fa",
                                    "jpr",
                                    "peo",
                                    "pes",
                                    "prs",
                                    "dv",
                                    "sam",
                                ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ?
                                "rtl" :
                                "ltr" :
                                "rtl"
                            );
                        },
                    },
                    {
                        key: "createInstance",
                        value: function () {
                            return new o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    },
                    {
                        key: "cloneInstance",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
                                r = n({}, this.options, t, {
                                    isClone: !0
                                }),
                                a = new o(r);
                            return (
                                ["store", "services", "language"].forEach(function (t) {
                                    a[t] = e[t];
                                }),
                                (a.services = n({}, this.services)),
                                (a.services.utils = {
                                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                                }),
                                (a.translator = new C(a.services, a.options)),
                                a.translator.on("*", function (e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                    a.emit.apply(a, [e].concat(n));
                                }),
                                a.init(r, i),
                                (a.translator.options = a.options),
                                (a.translator.backendConnector.services.utils = {
                                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                                }),
                                a
                            );
                        },
                    },
                ]),
                o
            );
        })())();
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).i18nextXHRBackend = t());
    })(this, function () {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var t = [],
            n = t.forEach,
            i = t.slice;

        function o(e) {
            return (
                n.call(i.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                }),
                e
            );
        }

        function r(e) {
            return (r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e;
                } :
                function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
        }

        function a(e) {
            return (a =
                "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ?
                function (e) {
                    return r(e);
                } :
                function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e);
                })(e);
        }

        function s(e, t) {
            if (t && "object" === a(t)) {
                var n = "",
                    i = encodeURIComponent;
                for (var o in t) n += "&" + i(o) + "=" + i(t[o]);
                if (!n) return e;
                e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1);
            }
            return e;
        }

        function l(e, t, n, i, o) {
            i && "object" === a(i) && (o || (i._t = new Date()), (i = s("", i).slice(1))), t.queryStringParams && (e = s(e, t.queryStringParams));
            try {
                var r;
                (r = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i ? "POST" : "GET", e, 1),
                    t.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (r.withCredentials = !!t.withCredentials),
                    i && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    r.overrideMimeType && r.overrideMimeType("application/json");
                var l = t.customHeaders;
                if ((l = "function" == typeof l ? l() : l))
                    for (var c in l) r.setRequestHeader(c, l[c]);
                (r.onreadystatechange = function () {
                    r.readyState > 3 && n && n(r.responseText, r);
                }),
                r.send(i);
            } catch (e) {
                console && console.log(e);
            }
        }

        function c() {
            return {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                allowMultiLoading: !1,
                parse: JSON.parse,
                parsePayload: function (e, t, n) {
                    return (function (e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : (e[t] = n), e;
                    })({}, t, n || "");
                },
                crossDomain: !1,
                ajax: l,
            };
        }
        var u = (function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                this.init(e, n),
                    (this.type = "backend");
            }
            var n, i;
            return (
                (n = t),
                (i = [{
                        key: "init",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (this.services = e), (this.options = o(t, this.options || {}, c()));
                        },
                    },
                    {
                        key: "readMulti",
                        value: function (e, t, n) {
                            var i = this.options.loadPath;
                            "function" == typeof this.options.loadPath && (i = this.options.loadPath(e, t));
                            var o = this.services.interpolator.interpolate(i, {
                                lng: e.join("+"),
                                ns: t.join("+")
                            });
                            this.loadUrl(o, n);
                        },
                    },
                    {
                        key: "read",
                        value: function (e, t, n) {
                            var i = this.options.loadPath;
                            "function" == typeof this.options.loadPath && (i = this.options.loadPath([e], [t]));
                            var o = this.services.interpolator.interpolate(i, {
                                lng: e,
                                ns: t
                            });
                            this.loadUrl(o, n);
                        },
                    },
                    {
                        key: "loadUrl",
                        value: function (e, t) {
                            var n = this;
                            this.options.ajax(e, this.options, function (i, o) {
                                if (o.status >= 500 && o.status < 600) return t("failed loading " + e, !0);
                                if (o.status >= 400 && o.status < 500) return t("failed loading " + e, !1);
                                var r, a;
                                try {
                                    r = n.options.parse(i, e);
                                } catch (t) {
                                    a = "failed parsing " + e + " to json";
                                }
                                if (a) return t(a, !1);
                                t(null, r);
                            });
                        },
                    },
                    {
                        key: "create",
                        value: function (e, t, n, i) {
                            var o = this;
                            "string" == typeof e && (e = [e]);
                            var r = this.options.parsePayload(t, n, i);
                            e.forEach(function (e) {
                                var n = o.services.interpolator.interpolate(o.options.addPath, {
                                    lng: e,
                                    ns: t
                                });
                                o.options.ajax(n, o.options, function (e, t) {}, r);
                            });
                        },
                    },
                ]) && e(n.prototype, i),
                t
            );
        })();
        return (u.type = "backend"), u;
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).i18nextBrowserLanguageDetector = t());
    })(this, function () {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var t = [],
            n = t.forEach,
            i = t.slice;

        function o(e) {
            return (
                n.call(i.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                }),
                e
            );
        }
        var r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
            a = function (e, t, n) {
                var i = n || {};
                i.path = i.path || "/";
                var o = e + "=" + encodeURIComponent(t);
                if (i.maxAge > 0) {
                    var a = i.maxAge - 0;
                    if (isNaN(a)) throw new Error("maxAge should be a Number");
                    o += "; Max-Age=" + Math.floor(a);
                }
                if (i.domain) {
                    if (!r.test(i.domain)) throw new TypeError("option domain is invalid");
                    o += "; Domain=" + i.domain;
                }
                if (i.path) {
                    if (!r.test(i.path)) throw new TypeError("option path is invalid");
                    o += "; Path=" + i.path;
                }
                if (i.expires) {
                    if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                    o += "; Expires=" + i.expires.toUTCString();
                }
                if ((i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite))
                    switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                        case !0:
                            o += "; SameSite=Strict";
                            break;
                        case "lax":
                            o += "; SameSite=Lax";
                            break;
                        case "strict":
                            o += "; SameSite=Strict";
                            break;
                        case "none":
                            o += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid");
                    }
                return o;
            },
            s = {
                name: "cookie",
                lookup: function (e) {
                    var t;
                    if (e.lookupCookie && "undefined" != typeof document) {
                        var n = (function (e) {
                            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                for (var o = n[i];
                                    " " === o.charAt(0);) o = o.substring(1, o.length);
                                if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
                            }
                            return null;
                        })(e.lookupCookie);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupCookie &&
                        "undefined" != typeof document &&
                        (function (e, t, n, i) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                path: "/",
                                sameSite: "strict"
                            };
                            n && ((o.expires = new Date()), o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), i && (o.domain = i), (document.cookie = a(e, encodeURIComponent(t), o));
                        })(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
                },
            },
            l = {
                name: "querystring",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window)
                        for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                            var o = n[i].indexOf("=");
                            o > 0 && n[i].substring(0, o) === e.lookupQuerystring && (t = n[i].substring(o + 1));
                        }
                    return t;
                },
            },
            c = null,
            u = function () {
                if (null !== c) return c;
                try {
                    (c = "undefined" !== window && null !== window.localStorage), window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
                } catch (e) {
                    c = !1;
                }
                return c;
            },
            p = {
                name: "localStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupLocalStorage && u()) {
                        var n = window.localStorage.getItem(e.lookupLocalStorage);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupLocalStorage && u() && window.localStorage.setItem(t.lookupLocalStorage, e);
                },
            },
            f = null,
            h = function () {
                if (null !== f) return f;
                try {
                    (f = "undefined" !== window && null !== window.sessionStorage), window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo");
                } catch (e) {
                    f = !1;
                }
                return f;
            },
            d = {
                name: "sessionStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupSessionStorage && h()) {
                        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupSessionStorage && h() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
                },
            },
            g = {
                name: "navigator",
                lookup: function (e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                        if (navigator.languages)
                            for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                        navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
                    }
                    return t.length > 0 ? t : void 0;
                },
            },
            y = {
                name: "htmlTag",
                lookup: function (e) {
                    var t,
                        n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                    return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t;
                },
            },
            m = {
                name: "path",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                        if (n instanceof Array)
                            if ("number" == typeof e.lookupFromPathIndex) {
                                if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                t = n[e.lookupFromPathIndex].replace("/", "");
                            } else t = n[0].replace("/", "");
                    }
                    return t;
                },
            },
            v = {
                name: "subdomain",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                        n instanceof Array &&
                            (t =
                                "number" == typeof e.lookupFromSubdomainIndex ?
                                n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") :
                                n[0].replace("http://", "").replace("https://", "").replace(".", ""));
                    }
                    return t;
                },
            },
            b = (function () {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    (this.type = "languageDetector"),
                    (this.detectors = {}),
                    this.init(e, n);
                }
                var n, i;
                return (
                    (n = t),
                    (i = [{
                            key: "init",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                (this.services = e),
                                (this.options = o(t, this.options || {}, {
                                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                    lookupQuerystring: "lng",
                                    lookupCookie: "i18next",
                                    lookupLocalStorage: "i18nextLng",
                                    lookupSessionStorage: "i18nextLng",
                                    caches: ["localStorage"],
                                    excludeCacheFor: ["cimode"],
                                })),
                                this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                                    (this.i18nOptions = n),
                                    this.addDetector(s),
                                    this.addDetector(l),
                                    this.addDetector(p),
                                    this.addDetector(d),
                                    this.addDetector(g),
                                    this.addDetector(y),
                                    this.addDetector(m),
                                    this.addDetector(v);
                            },
                        },
                        {
                            key: "addDetector",
                            value: function (e) {
                                this.detectors[e.name] = e;
                            },
                        },
                        {
                            key: "detect",
                            value: function (e) {
                                var t = this;
                                e || (e = this.options.order);
                                var n = [];
                                return (
                                    e.forEach(function (e) {
                                        if (t.detectors[e]) {
                                            var i = t.detectors[e].lookup(t.options);
                                            i && "string" == typeof i && (i = [i]), i && (n = n.concat(i));
                                        }
                                    }),
                                    this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                                );
                            },
                        },
                        {
                            key: "cacheUserLanguage",
                            value: function (e, t) {
                                var n = this;
                                t || (t = this.options.caches),
                                    t &&
                                    ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1) ||
                                        t.forEach(function (t) {
                                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options);
                                        }));
                            },
                        },
                    ]) && e(n.prototype, i),
                    t
                );
            })();
        return (b.type = "languageDetector"), b;
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.jqueryI18next = t());
    })(this, function () {
        "use strict";
        var e =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            },
            t = {
                tName: "t",
                i18nName: "i18n",
                handleName: "localize",
                selectorAttr: "data-i18n",
                targetAttr: "i18n-target",
                optionsAttr: "i18n-options",
                useOptionsAttr: !1,
                parseDefaultValueFromContent: !0
            };
        return {
            init: function (n, i) {
                function o(t, i, o) {
                    function r(t, n) {
                        return s.parseDefaultValueFromContent ? e({}, t, {
                            defaultValue: n
                        }) : t;
                    }
                    if (0 !== i.length) {
                        var a = "text";
                        if (0 === i.indexOf("[")) {
                            var l = i.split("]");
                            (i = l[1]), (a = l[0].substr(1, l[0].length - 1));
                        }
                        if ((i.indexOf(";") === i.length - 1 && (i = i.substr(0, i.length - 2)), "html" === a)) t.html(n.t(i, r(o, t.html())));
                        else if ("text" === a) t.text(n.t(i, r(o, t.text())));
                        else if ("prepend" === a) t.prepend(n.t(i, r(o, t.html())));
                        else if ("append" === a) t.append(n.t(i, r(o, t.html())));
                        else if (0 === a.indexOf("data-")) {
                            var c = a.substr("data-".length),
                                u = n.t(i, r(o, t.data(c)));
                            t.data(c, u), t.attr(a, u);
                        } else t.attr(a, n.t(i, r(o, t.attr(a))));
                    }
                }

                function r(t, n) {
                    var r = t.attr(s.selectorAttr);
                    if ((r || void 0 === r || !1 === r || (r = t.text() || t.val()), r)) {
                        var a = t,
                            l = t.data(s.targetAttr);
                        if ((l && (a = t.find(l) || t), n || !0 !== s.useOptionsAttr || (n = t.data(s.optionsAttr)), (n = n || {}), r.indexOf(";") >= 0)) {
                            var c = r.split(";");
                            i.each(c, function (e, t) {
                                "" !== t && o(a, t.trim(), n);
                            });
                        } else o(a, r, n);
                        if (!0 === s.useOptionsAttr) {
                            var u = {};
                            delete(u = e({
                                clone: u
                            }, n)).lng, t.data(s.optionsAttr, u);
                        }
                    }
                }

                function a(e) {
                    return this.each(function () {
                        r(i(this), e),
                            i(this)
                            .find("[" + s.selectorAttr + "]")
                            .each(function () {
                                r(i(this), e);
                            });
                    });
                }
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (s = e({}, t, s)), (i[s.tName] = n.t.bind(n)), (i[s.i18nName] = n), (i.fn[s.handleName] = a);
            },
        };
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.feather = t()) : (e.feather = t());
    })("undefined" != typeof self ? self : this, function () {
        return (function (e) {
            var t = {};

            function n(i) {
                if (t[i]) return t[i].exports;
                var o = (t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                });
                return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    });
                }),
                (n.r = function (e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }),
                (n.n = function (e) {
                    var t =
                        e && e.__esModule ?
                        function () {
                            return e.default;
                        } :
                        function () {
                            return e;
                        };
                    return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 80))
            );
        })([
            function (e, t, n) {
                (function (t) {
                    var n = "object",
                        i = function (e) {
                            return e && e.Math == Math && e;
                        };
                    e.exports = i(typeof globalThis == n && globalThis) || i(typeof window == n && window) || i(typeof self == n && self) || i(typeof t == n && t) || Function("return this")();
                }.call(this, n(75)));
            },
            function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t);
                };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(11),
                    r = n(33),
                    a = n(62),
                    s = i.Symbol,
                    l = o("wks");
                e.exports = function (e) {
                    return l[e] || (l[e] = (a && s[e]) || (a ? s : r)("Symbol." + e));
                };
            },
            function (e, t, n) {
                var i = n(6);
                e.exports = function (e) {
                    if (!i(e)) throw TypeError(String(e) + " is not an object");
                    return e;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            function (e, t, n) {
                var i = n(8),
                    o = n(7),
                    r = n(10);
                e.exports = i ?
                    function (e, t, n) {
                        return o.f(e, t, r(1, n));
                    } :
                    function (e, t, n) {
                        return (e[t] = n), e;
                    };
            },
            function (e, t) {
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e;
                };
            },
            function (e, t, n) {
                var i = n(8),
                    o = n(35),
                    r = n(3),
                    a = n(18),
                    s = Object.defineProperty;
                t.f = i ?
                    s :
                    function (e, t, n) {
                        if ((r(e), (t = a(t, !0)), r(n), o))
                            try {
                                return s(e, t, n);
                            } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                        return "value" in n && (e[t] = n.value), e;
                    };
            },
            function (e, t, n) {
                var i = n(4);
                e.exports = !i(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
            },
            function (e, t) {
                e.exports = {};
            },
            function (e, t) {
                e.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    };
                };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(19),
                    r = n(17),
                    a = i["__core-js_shared__"] || o("__core-js_shared__", {});
                (e.exports = function (e, t) {
                    return a[e] || (a[e] = void 0 !== t ? t : {});
                })("versions", []).push({
                    version: "3.1.3",
                    mode: r ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                });
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = a(n(43)),
                    o = a(n(41)),
                    r = a(n(40));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                t.default = Object.keys(o.default)
                    .map(function (e) {
                        return new i.default(e, o.default[e], r.default[e]);
                    })
                    .reduce(function (e, t) {
                        return (e[t.name] = t), e;
                    }, {});
            },
            function (e, t) {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            },
            function (e, t, n) {
                var i = n(72),
                    o = n(20);
                e.exports = function (e) {
                    return i(o(e));
                };
            },
            function (e, t) {
                e.exports = {};
            },
            function (e, t, n) {
                var i = n(11),
                    o = n(33),
                    r = i("keys");
                e.exports = function (e) {
                    return r[e] || (r[e] = o(e));
                };
            },
            function (e, t) {
                e.exports = !1;
            },
            function (e, t, n) {
                var i = n(6);
                e.exports = function (e, t) {
                    if (!i(e)) return e;
                    var n, o;
                    if (t && "function" == typeof (n = e.toString) && !i((o = n.call(e)))) return o;
                    if ("function" == typeof (n = e.valueOf) && !i((o = n.call(e)))) return o;
                    if (!t && "function" == typeof (n = e.toString) && !i((o = n.call(e)))) return o;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(5);
                e.exports = function (e, t) {
                    try {
                        o(i, e, t);
                    } catch (n) {
                        i[e] = t;
                    }
                    return t;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    if (null == e) throw TypeError("Can't call method on " + e);
                    return e;
                };
            },
            function (e, t) {
                var n = Math.ceil,
                    i = Math.floor;
                e.exports = function (e) {
                    return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
                };
            },
            function (e, t, n) {
                var i;
                /*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
                /*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
                !(function () {
                    "use strict";
                    var n = (function () {
                        function e() {}

                        function t(e, t) {
                            for (var n = t.length, i = 0; i < n; ++i) o(e, t[i]);
                        }
                        e.prototype = Object.create(null);
                        var n = {}.hasOwnProperty,
                            i = /\s+/;

                        function o(e, o) {
                            if (o) {
                                var r = typeof o;
                                "string" === r
                                    ?
                                    (function (e, t) {
                                        for (var n = t.split(i), o = n.length, r = 0; r < o; ++r) e[n[r]] = !0;
                                    })(e, o) :
                                    Array.isArray(o) ?
                                    t(e, o) :
                                    "object" === r ?
                                    (function (e, t) {
                                        for (var i in t) n.call(t, i) && (e[i] = !!t[i]);
                                    })(e, o) :
                                    "number" === r &&
                                    (function (e, t) {
                                        e[t] = !0;
                                    })(e, o);
                            }
                        }
                        return function () {
                            for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                            var r = new e();
                            t(r, i);
                            var a = [];
                            for (var s in r) r[s] && a.push(s);
                            return a.join(" ");
                        };
                    })();
                    void 0 !== e && e.exports ?
                        (e.exports = n) :
                        void 0 ===
                        (i = function () {
                            return n;
                        }.apply(t, [])) || (e.exports = i);
                })();
            },
            function (e, t, n) {
                var i = n(7).f,
                    o = n(1),
                    r = n(2)("toStringTag");
                e.exports = function (e, t, n) {
                    e && !o((e = n ? e : e.prototype), r) && i(e, r, {
                        configurable: !0,
                        value: t
                    });
                };
            },
            function (e, t, n) {
                var i = n(20);
                e.exports = function (e) {
                    return Object(i(e));
                };
            },
            function (e, t, n) {
                var i = n(1),
                    o = n(24),
                    r = n(16),
                    a = n(63),
                    s = r("IE_PROTO"),
                    l = Object.prototype;
                e.exports = a ?
                    Object.getPrototypeOf :
                    function (e) {
                        return (e = o(e)), i(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null;
                    };
            },
            function (e, t, n) {
                "use strict";
                var i,
                    o,
                    r,
                    a = n(25),
                    s = n(5),
                    l = n(1),
                    c = n(2),
                    u = n(17),
                    p = c("iterator"),
                    f = !1;
                [].keys && ("next" in (r = [].keys()) ? (o = a(a(r))) !== Object.prototype && (i = o) : (f = !0)),
                    null == i && (i = {}),
                    u ||
                    l(i, p) ||
                    s(i, p, function () {
                        return this;
                    }),
                    (e.exports = {
                        IteratorPrototype: i,
                        BUGGY_SAFARI_ITERATORS: f
                    });
            },
            function (e, t, n) {
                var i = n(21),
                    o = Math.min;
                e.exports = function (e) {
                    return e > 0 ? o(i(e), 9007199254740991) : 0;
                };
            },
            function (e, t, n) {
                var i = n(1),
                    o = n(14),
                    r = n(68),
                    a = n(15),
                    s = r(!1);
                e.exports = function (e, t) {
                    var n,
                        r = o(e),
                        l = 0,
                        c = [];
                    for (n in r) !i(a, n) && i(r, n) && c.push(n);
                    for (; t.length > l;) i(r, (n = t[l++])) && (~s(c, n) || c.push(n));
                    return c;
                };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(11),
                    r = n(5),
                    a = n(1),
                    s = n(19),
                    l = n(36),
                    c = n(37),
                    u = c.get,
                    p = c.enforce,
                    f = String(l).split("toString");
                o("inspectSource", function (e) {
                        return l.call(e);
                    }),
                    (e.exports = function (e, t, n, o) {
                        var l = !!o && !!o.unsafe,
                            c = !!o && !!o.enumerable,
                            u = !!o && !!o.noTargetGet;
                        "function" == typeof n && ("string" != typeof t || a(n, "name") || r(n, "name", t), (p(n).source = f.join("string" == typeof t ? t : ""))),
                            e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? (e[t] = n) : r(e, t, n)) : c ? (e[t] = n) : s(t, n);
                    })(Function.prototype, "toString", function () {
                        return ("function" == typeof this && u(this).source) || l.call(this);
                    });
            },
            function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1);
                };
            },
            function (e, t, n) {
                var i = n(8),
                    o = n(73),
                    r = n(10),
                    a = n(14),
                    s = n(18),
                    l = n(1),
                    c = n(35),
                    u = Object.getOwnPropertyDescriptor;
                t.f = i ?
                    u :
                    function (e, t) {
                        if (((e = a(e)), (t = s(t, !0)), c))
                            try {
                                return u(e, t);
                            } catch (e) {}
                        if (l(e, t)) return r(!o.f.call(e, t), e[t]);
                    };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(31).f,
                    r = n(5),
                    a = n(29),
                    s = n(19),
                    l = n(71),
                    c = n(65);
                e.exports = function (e, t) {
                    var n,
                        u,
                        p,
                        f,
                        h,
                        d = e.target,
                        g = e.global,
                        y = e.stat;
                    if ((n = g ? i : y ? i[d] || s(d, {}) : (i[d] || {}).prototype))
                        for (u in t) {
                            if (((f = t[u]), (p = e.noTargetGet ? (h = o(n, u)) && h.value : n[u]), !c(g ? u : d + (y ? "." : "#") + u, e.forced) && void 0 !== p)) {
                                if (typeof f == typeof p) continue;
                                l(f, p);
                            }
                            (e.sham || (p && p.sham)) && r(f, "sham", !0), a(n, u, f, e);
                        }
                };
            },
            function (e, t) {
                var n = 0,
                    i = Math.random();
                e.exports = function (e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36));
                };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(6),
                    r = i.document,
                    a = o(r) && o(r.createElement);
                e.exports = function (e) {
                    return a ? r.createElement(e) : {};
                };
            },
            function (e, t, n) {
                var i = n(8),
                    o = n(4),
                    r = n(34);
                e.exports = !i &&
                    !o(function () {
                        return (
                            7 !=
                            Object.defineProperty(r("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a
                        );
                    });
            },
            function (e, t, n) {
                var i = n(11);
                e.exports = i("native-function-to-string", Function.toString);
            },
            function (e, t, n) {
                var i,
                    o,
                    r,
                    a = n(76),
                    s = n(0),
                    l = n(6),
                    c = n(5),
                    u = n(1),
                    p = n(16),
                    f = n(15),
                    h = s.WeakMap;
                if (a) {
                    var d = new h(),
                        g = d.get,
                        y = d.has,
                        m = d.set;
                    (i = function (e, t) {
                        return m.call(d, e, t), t;
                    }),
                    (o = function (e) {
                        return g.call(d, e) || {};
                    }),
                    (r = function (e) {
                        return y.call(d, e);
                    });
                } else {
                    var v = p("state");
                    (f[v] = !0),
                    (i = function (e, t) {
                        return c(e, v, t), t;
                    }),
                    (o = function (e) {
                        return u(e, v) ? e[v] : {};
                    }),
                    (r = function (e) {
                        return u(e, v);
                    });
                }
                e.exports = {
                    set: i,
                    get: o,
                    has: r,
                    enforce: function (e) {
                        return r(e) ? o(e) : i(e, {});
                    },
                    getterFor: function (e) {
                        return function (t) {
                            var n;
                            if (!l(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                            return n;
                        };
                    },
                };
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        }
                        return e;
                    },
                    o = a(n(22)),
                    r = a(n(12));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                t.default = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                    var t = document.querySelectorAll("[data-feather]");
                    Array.from(t).forEach(function (t) {
                        return (function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (function (e) {
                                    return Array.from(e.attributes).reduce(function (e, t) {
                                        return (e[t.name] = t.value), e;
                                    }, {});
                                })(e),
                                a = n["data-feather"];
                            delete n["data-feather"];
                            var s = r.default[a].toSvg(i({}, t, n, {
                                    class: (0, o.default)(t.class, n.class)
                                })),
                                l = new DOMParser().parseFromString(s, "image/svg+xml").querySelector("svg");
                            e.parentNode.replaceChild(l, e);
                        })(t, e);
                    });
                };
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i,
                    o = (i = n(12)) && i.__esModule ? i : {
                        default: i
                    };
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ((console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e)) throw new Error("The required `key` (icon name) parameter is missing.");
                    if (!o.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                    return o.default[e].toSvg(t);
                };
            },
            function (e) {
                e.exports = {
                    activity: ["pulse", "health", "action", "motion"],
                    airplay: ["stream", "cast", "mirroring"],
                    "alert-circle": ["warning", "alert", "danger"],
                    "alert-octagon": ["warning", "alert", "danger"],
                    "alert-triangle": ["warning", "alert", "danger"],
                    "align-center": ["text alignment", "center"],
                    "align-justify": ["text alignment", "justified"],
                    "align-left": ["text alignment", "left"],
                    "align-right": ["text alignment", "right"],
                    anchor: [],
                    archive: ["index", "box"],
                    "at-sign": ["mention", "at", "email", "message"],
                    award: ["achievement", "badge"],
                    aperture: ["camera", "photo"],
                    "bar-chart": ["statistics", "diagram", "graph"],
                    "bar-chart-2": ["statistics", "diagram", "graph"],
                    battery: ["power", "electricity"],
                    "battery-charging": ["power", "electricity"],
                    bell: ["alarm", "notification", "sound"],
                    "bell-off": ["alarm", "notification", "silent"],
                    bluetooth: ["wireless"],
                    "book-open": ["read", "library"],
                    book: ["read", "dictionary", "booklet", "magazine", "library"],
                    bookmark: ["read", "clip", "marker", "tag"],
                    box: ["cube"],
                    briefcase: ["work", "bag", "baggage", "folder"],
                    calendar: ["date"],
                    camera: ["photo"],
                    cast: ["chromecast", "airplay"],
                    circle: ["off", "zero", "record"],
                    clipboard: ["copy"],
                    clock: ["time", "watch", "alarm"],
                    "cloud-drizzle": ["weather", "shower"],
                    "cloud-lightning": ["weather", "bolt"],
                    "cloud-rain": ["weather"],
                    "cloud-snow": ["weather", "blizzard"],
                    cloud: ["weather"],
                    codepen: ["logo"],
                    codesandbox: ["logo"],
                    code: ["source", "programming"],
                    coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                    columns: ["layout"],
                    command: ["keyboard", "cmd", "terminal", "prompt"],
                    compass: ["navigation", "safari", "travel", "direction"],
                    copy: ["clone", "duplicate"],
                    "corner-down-left": ["arrow", "return"],
                    "corner-down-right": ["arrow"],
                    "corner-left-down": ["arrow"],
                    "corner-left-up": ["arrow"],
                    "corner-right-down": ["arrow"],
                    "corner-right-up": ["arrow"],
                    "corner-up-left": ["arrow"],
                    "corner-up-right": ["arrow"],
                    cpu: ["processor", "technology"],
                    "credit-card": ["purchase", "payment", "cc"],
                    crop: ["photo", "image"],
                    crosshair: ["aim", "target"],
                    database: ["storage", "memory"],
                    delete: ["remove"],
                    disc: ["album", "cd", "dvd", "music"],
                    "dollar-sign": ["currency", "money", "payment"],
                    droplet: ["water"],
                    edit: ["pencil", "change"],
                    "edit-2": ["pencil", "change"],
                    "edit-3": ["pencil", "change"],
                    eye: ["view", "watch"],
                    "eye-off": ["view", "watch", "hide", "hidden"],
                    "external-link": ["outbound"],
                    facebook: ["logo", "social"],
                    "fast-forward": ["music"],
                    figma: ["logo", "design", "tool"],
                    "file-minus": ["delete", "remove", "erase"],
                    "file-plus": ["add", "create", "new"],
                    "file-text": ["data", "txt", "pdf"],
                    film: ["movie", "video"],
                    filter: ["funnel", "hopper"],
                    flag: ["report"],
                    "folder-minus": ["directory"],
                    "folder-plus": ["directory"],
                    folder: ["directory"],
                    framer: ["logo", "design", "tool"],
                    frown: ["emoji", "face", "bad", "sad", "emotion"],
                    gift: ["present", "box", "birthday", "party"],
                    "git-branch": ["code", "version control"],
                    "git-commit": ["code", "version control"],
                    "git-merge": ["code", "version control"],
                    "git-pull-request": ["code", "version control"],
                    github: ["logo", "version control"],
                    gitlab: ["logo", "version control"],
                    globe: ["world", "browser", "language", "translate"],
                    "hard-drive": ["computer", "server", "memory", "data"],
                    hash: ["hashtag", "number", "pound"],
                    headphones: ["music", "audio", "sound"],
                    heart: ["like", "love", "emotion"],
                    "help-circle": ["question mark"],
                    hexagon: ["shape", "node.js", "logo"],
                    home: ["house", "living"],
                    image: ["picture"],
                    inbox: ["email"],
                    instagram: ["logo", "camera"],
                    key: ["password", "login", "authentication", "secure"],
                    layers: ["stack"],
                    layout: ["window", "webpage"],
                    "life-bouy": ["help", "life ring", "support"],
                    link: ["chain", "url"],
                    "link-2": ["chain", "url"],
                    linkedin: ["logo", "social media"],
                    list: ["options"],
                    lock: ["security", "password", "secure"],
                    "log-in": ["sign in", "arrow", "enter"],
                    "log-out": ["sign out", "arrow", "exit"],
                    mail: ["email", "message"],
                    "map-pin": ["location", "navigation", "travel", "marker"],
                    map: ["location", "navigation", "travel"],
                    maximize: ["fullscreen"],
                    "maximize-2": ["fullscreen", "arrows", "expand"],
                    meh: ["emoji", "face", "neutral", "emotion"],
                    menu: ["bars", "navigation", "hamburger"],
                    "message-circle": ["comment", "chat"],
                    "message-square": ["comment", "chat"],
                    "mic-off": ["record", "sound", "mute"],
                    mic: ["record", "sound", "listen"],
                    minimize: ["exit fullscreen", "close"],
                    "minimize-2": ["exit fullscreen", "arrows", "close"],
                    minus: ["subtract"],
                    monitor: ["tv", "screen", "display"],
                    moon: ["dark", "night"],
                    "more-horizontal": ["ellipsis"],
                    "more-vertical": ["ellipsis"],
                    "mouse-pointer": ["arrow", "cursor"],
                    move: ["arrows"],
                    music: ["note"],
                    navigation: ["location", "travel"],
                    "navigation-2": ["location", "travel"],
                    octagon: ["stop"],
                    package: ["box", "container"],
                    paperclip: ["attachment"],
                    pause: ["music", "stop"],
                    "pause-circle": ["music", "audio", "stop"],
                    "pen-tool": ["vector", "drawing"],
                    percent: ["discount"],
                    "phone-call": ["ring"],
                    "phone-forwarded": ["call"],
                    "phone-incoming": ["call"],
                    "phone-missed": ["call"],
                    "phone-off": ["call", "mute"],
                    "phone-outgoing": ["call"],
                    phone: ["call"],
                    play: ["music", "start"],
                    "pie-chart": ["statistics", "diagram"],
                    "play-circle": ["music", "start"],
                    plus: ["add", "new"],
                    "plus-circle": ["add", "new"],
                    "plus-square": ["add", "new"],
                    pocket: ["logo", "save"],
                    power: ["on", "off"],
                    printer: ["fax", "office", "device"],
                    radio: ["signal"],
                    "refresh-cw": ["synchronise", "arrows"],
                    "refresh-ccw": ["arrows"],
                    repeat: ["loop", "arrows"],
                    rewind: ["music"],
                    "rotate-ccw": ["arrow"],
                    "rotate-cw": ["arrow"],
                    rss: ["feed", "subscribe"],
                    save: ["floppy disk"],
                    scissors: ["cut"],
                    search: ["find", "magnifier", "magnifying glass"],
                    send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                    settings: ["cog", "edit", "gear", "preferences"],
                    "share-2": ["network", "connections"],
                    shield: ["security", "secure"],
                    "shield-off": ["security", "insecure"],
                    "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                    "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                    shuffle: ["music"],
                    "skip-back": ["music"],
                    "skip-forward": ["music"],
                    slack: ["logo"],
                    slash: ["ban", "no"],
                    sliders: ["settings", "controls"],
                    smartphone: ["cellphone", "device"],
                    smile: ["emoji", "face", "happy", "good", "emotion"],
                    speaker: ["audio", "music"],
                    star: ["bookmark", "favorite", "like"],
                    "stop-circle": ["media", "music"],
                    sun: ["brightness", "weather", "light"],
                    sunrise: ["weather", "time", "morning", "day"],
                    sunset: ["weather", "time", "evening", "night"],
                    tablet: ["device"],
                    tag: ["label"],
                    target: ["logo", "bullseye"],
                    terminal: ["code", "command line", "prompt"],
                    thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                    "thumbs-down": ["dislike", "bad", "emotion"],
                    "thumbs-up": ["like", "good", "emotion"],
                    "toggle-left": ["on", "off", "switch"],
                    "toggle-right": ["on", "off", "switch"],
                    tool: ["settings", "spanner"],
                    trash: ["garbage", "delete", "remove", "bin"],
                    "trash-2": ["garbage", "delete", "remove", "bin"],
                    triangle: ["delta"],
                    truck: ["delivery", "van", "shipping", "transport", "lorry"],
                    tv: ["television", "stream"],
                    twitch: ["logo"],
                    twitter: ["logo", "social"],
                    type: ["text"],
                    umbrella: ["rain", "weather"],
                    unlock: ["security"],
                    "user-check": ["followed", "subscribed"],
                    "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                    "user-plus": ["new", "add", "create", "follow", "subscribe"],
                    "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                    user: ["person", "account"],
                    users: ["group"],
                    "video-off": ["camera", "movie", "film"],
                    video: ["camera", "movie", "film"],
                    voicemail: ["phone"],
                    volume: ["music", "sound", "mute"],
                    "volume-1": ["music", "sound"],
                    "volume-2": ["music", "sound"],
                    "volume-x": ["music", "sound", "mute"],
                    watch: ["clock", "time"],
                    "wifi-off": ["disabled"],
                    wifi: ["connection", "signal", "wireless"],
                    wind: ["weather", "air"],
                    "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                    "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                    "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                    x: ["cancel", "close", "delete", "remove", "times", "clear"],
                    youtube: ["logo", "video", "play"],
                    "zap-off": ["flash", "camera", "lightning"],
                    zap: ["flash", "camera", "lightning"],
                    "zoom-in": ["magnifying glass"],
                    "zoom-out": ["magnifying glass"],
                };
            },
            function (e) {
                e.exports = {
                    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                    airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                    "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                    "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                    "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                    "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                    "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                    "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                    "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                    anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                    aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                    archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                    "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                    "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                    "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                    "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                    "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                    "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                    "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                    "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                    "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                    "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                    "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                    "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                    "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                    award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                    "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                    "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                    "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                    battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                    "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                    bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                    bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                    "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                    "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                    cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                    "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                    "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                    check: '<polyline points="20 6 9 17 4 12"></polyline>',
                    "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                    "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                    "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                    "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                    "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                    "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                    "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                    "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                    chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                    circle: '<circle cx="12" cy="12" r="10"></circle>',
                    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                    clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                    "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                    "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                    codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                    codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                    columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                    command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                    compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                    "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                    "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                    "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                    "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                    "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                    "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                    "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                    "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                    "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                    crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                    crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                    database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                    delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                    disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                    "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                    "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                    divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                    "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                    "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                    dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                    "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                    "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                    "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                    "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                    "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                    feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                    figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                    "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                    "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                    "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                    file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                    film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                    "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                    "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                    framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                    frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                    "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                    "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                    "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                    "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                    gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                    globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                    grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                    "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                    hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                    "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                    hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                    image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                    info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                    italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                    layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                    "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                    "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                    list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                    loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                    "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                    "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                    "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                    map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                    "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                    meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                    "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                    "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                    "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                    "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                    "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                    minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                    monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                    "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                    "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                    "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                    move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                    music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                    "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                    navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                    octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                    package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                    "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                    pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                    "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                    percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                    "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                    "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                    "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                    play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                    "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                    pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                    power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                    printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                    radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                    "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                    "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                    repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                    rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                    "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                    "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                    rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                    scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                    search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                    send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                    server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                    settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                    "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                    "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                    "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                    "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                    shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                    sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                    "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                    "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                    slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                    slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                    sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                    smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                    square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                    "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                    sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                    sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                    sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                    tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                    tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                    target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                    terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                    thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                    "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                    "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                    "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                    "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                    "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                    trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                    trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                    "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                    "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                    triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                    truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                    tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                    twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                    twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                    type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                    umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                    underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                    unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                    "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                    "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                    "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                    "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                    "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                    "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                    voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                    "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                    watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                    "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                    wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                    "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                    "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                    "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                    x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                    youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                    "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                    "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                    "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                };
            },
            function (e) {
                e.exports = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": 2,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                };
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        }
                        return e;
                    },
                    o = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t;
                        };
                    })(),
                    r = s(n(22)),
                    a = s(n(42));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = (function () {
                    function e(t, n) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (this.name = t),
                        (this.contents = n),
                        (this.tags = o),
                        (this.attrs = i({}, a.default, {
                            class: "feather feather-" + t
                        }));
                    }
                    return (
                        o(e, [{
                                key: "toSvg",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (
                                        "<svg " +
                                        (function (e) {
                                            return Object.keys(e)
                                                .map(function (t) {
                                                    return t + '="' + e[t] + '"';
                                                })
                                                .join(" ");
                                        })(i({}, this.attrs, e, {
                                            class: (0, r.default)(this.attrs.class, e.class)
                                        })) +
                                        ">" +
                                        this.contents +
                                        "</svg>"
                                    );
                                },
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return this.contents;
                                },
                            },
                        ]),
                        e
                    );
                })();
                t.default = l;
            },
            function (e, t, n) {
                "use strict";
                var i = a(n(12)),
                    o = a(n(39)),
                    r = a(n(38));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                e.exports = {
                    icons: i.default,
                    toSvg: o.default,
                    replace: r.default
                };
            },
            function (e, t, n) {
                e.exports = n(0);
            },
            function (e, t, n) {
                var i = n(2)("iterator"),
                    o = !1;
                try {
                    var r = 0,
                        a = {
                            next: function () {
                                return {
                                    done: !!r++
                                };
                            },
                            return: function () {
                                o = !0;
                            },
                        };
                    (a[i] = function () {
                        return this;
                    }),
                    Array.from(a, function () {
                        throw 2;
                    });
                } catch (e) {}
                e.exports = function (e, t) {
                    if (!t && !o) return !1;
                    var n = !1;
                    try {
                        var r = {};
                        (r[i] = function () {
                            return {
                                next: function () {
                                    return {
                                        done: (n = !0)
                                    };
                                },
                            };
                        }),
                        e(r);
                    } catch (e) {}
                    return n;
                };
            },
            function (e, t, n) {
                var i = n(30),
                    o = n(2)("toStringTag"),
                    r =
                    "Arguments" ==
                    i(
                        (function () {
                            return arguments;
                        })()
                    );
                e.exports = function (e) {
                    var t, n, a;
                    return void 0 === e ?
                        "Undefined" :
                        null === e ?
                        "Null" :
                        "string" ==
                        typeof (n = (function (e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        })((t = Object(e)), o)) ?
                        n :
                        r ?
                        i(t) :
                        "Object" == (a = i(t)) && "function" == typeof t.callee ?
                        "Arguments" :
                        a;
                };
            },
            function (e, t, n) {
                var i = n(47),
                    o = n(9),
                    r = n(2)("iterator");
                e.exports = function (e) {
                    if (null != e) return e[r] || e["@@iterator"] || o[i(e)];
                };
            },
            function (e, t, n) {
                "use strict";
                var i = n(18),
                    o = n(7),
                    r = n(10);
                e.exports = function (e, t, n) {
                    var a = i(t);
                    a in e ? o.f(e, a, r(0, n)) : (e[a] = n);
                };
            },
            function (e, t, n) {
                var i = n(2),
                    o = n(9),
                    r = i("iterator"),
                    a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (o.Array === e || a[r] === e);
                };
            },
            function (e, t, n) {
                var i = n(3);
                e.exports = function (e, t, n, o) {
                    try {
                        return o ? t(i(n)[0], n[1]) : t(n);
                    } catch (t) {
                        var r = e.return;
                        throw (void 0 !== r && i(r.call(e)), t);
                    }
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                    return e;
                };
            },
            function (e, t, n) {
                var i = n(52);
                e.exports = function (e, t, n) {
                    if ((i(e), void 0 === t)) return e;
                    switch (n) {
                        case 0:
                            return function () {
                                return e.call(t);
                            };
                        case 1:
                            return function (n) {
                                return e.call(t, n);
                            };
                        case 2:
                            return function (n, i) {
                                return e.call(t, n, i);
                            };
                        case 3:
                            return function (n, i, o) {
                                return e.call(t, n, i, o);
                            };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                };
            },
            function (e, t, n) {
                "use strict";
                var i = n(53),
                    o = n(24),
                    r = n(51),
                    a = n(50),
                    s = n(27),
                    l = n(49),
                    c = n(48);
                e.exports = function (e) {
                    var t,
                        n,
                        u,
                        p,
                        f = o(e),
                        h = "function" == typeof this ? this : Array,
                        d = arguments.length,
                        g = d > 1 ? arguments[1] : void 0,
                        y = void 0 !== g,
                        m = 0,
                        v = c(f);
                    if ((y && (g = i(g, d > 2 ? arguments[2] : void 0, 2)), null == v || (h == Array && a(v))))
                        for (n = new h((t = s(f.length))); t > m; m++) l(n, m, y ? g(f[m], m) : f[m]);
                    else
                        for (p = v.call(f), n = new h(); !(u = p.next()).done; m++) l(n, m, y ? r(p, g, [u.value, m], !0) : u.value);
                    return (n.length = m), n;
                };
            },
            function (e, t, n) {
                var i = n(32),
                    o = n(54);
                i({
                    target: "Array",
                    stat: !0,
                    forced: !n(46)(function (e) {
                        Array.from(e);
                    }),
                }, {
                    from: o
                });
            },
            function (e, t, n) {
                var i = n(6),
                    o = n(3);
                e.exports = function (e, t) {
                    if ((o(e), !i(t) && null !== t)) throw TypeError("Can't set " + String(t) + " as a prototype");
                };
            },
            function (e, t, n) {
                var i = n(56);
                e.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {} ?
                        (function () {
                            var e,
                                t = !1,
                                n = {};
                            try {
                                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (t = n instanceof Array);
                            } catch (e) {}
                            return function (n, o) {
                                return i(n, o), t ? e.call(n, o) : (n.__proto__ = o), n;
                            };
                        })() :
                        void 0);
            },
            function (e, t, n) {
                var i = n(0).document;
                e.exports = i && i.documentElement;
            },
            function (e, t, n) {
                var i = n(28),
                    o = n(13);
                e.exports =
                    Object.keys ||
                    function (e) {
                        return i(e, o);
                    };
            },
            function (e, t, n) {
                var i = n(8),
                    o = n(7),
                    r = n(3),
                    a = n(59);
                e.exports = i ?
                    Object.defineProperties :
                    function (e, t) {
                        r(e);
                        for (var n, i = a(t), s = i.length, l = 0; s > l;) o.f(e, (n = i[l++]), t[n]);
                        return e;
                    };
            },
            function (e, t, n) {
                var i = n(3),
                    o = n(60),
                    r = n(13),
                    a = n(15),
                    s = n(58),
                    l = n(34),
                    c = n(16)("IE_PROTO"),
                    u = function () {},
                    p = function () {
                        var e,
                            t = l("iframe"),
                            n = r.length;
                        for (t.style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), p = e.F; n--;)
                            delete p.prototype[r[n]];
                        return p();
                    };
                (e.exports =
                    Object.create ||
                    function (e, t) {
                        var n;
                        return null !== e ? ((u.prototype = i(e)), (n = new u()), (u.prototype = null), (n[c] = e)) : (n = p()), void 0 === t ? n : o(n, t);
                    }),
                (a[c] = !0);
            },
            function (e, t, n) {
                var i = n(4);
                e.exports = !!Object.getOwnPropertySymbols &&
                    !i(function () {
                        return !String(Symbol());
                    });
            },
            function (e, t, n) {
                var i = n(4);
                e.exports = !i(function () {
                    function e() {}
                    return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
                });
            },
            function (e, t, n) {
                "use strict";
                var i = n(26).IteratorPrototype,
                    o = n(61),
                    r = n(10),
                    a = n(23),
                    s = n(9),
                    l = function () {
                        return this;
                    };
                e.exports = function (e, t, n) {
                    var c = t + " Iterator";
                    return (e.prototype = o(i, {
                        next: r(1, n)
                    })), a(e, c, !1, !0), (s[c] = l), e;
                };
            },
            function (e, t, n) {
                var i = n(4),
                    o = /#|\.prototype\./,
                    r = function (e, t) {
                        var n = s[a(e)];
                        return n == c || (n != l && ("function" == typeof t ? i(t) : !!t));
                    },
                    a = (r.normalize = function (e) {
                        return String(e).replace(o, ".").toLowerCase();
                    }),
                    s = (r.data = {}),
                    l = (r.NATIVE = "N"),
                    c = (r.POLYFILL = "P");
                e.exports = r;
            },
            function (e, t) {
                t.f = Object.getOwnPropertySymbols;
            },
            function (e, t, n) {
                var i = n(21),
                    o = Math.max,
                    r = Math.min;
                e.exports = function (e, t) {
                    var n = i(e);
                    return n < 0 ? o(n + t, 0) : r(n, t);
                };
            },
            function (e, t, n) {
                var i = n(14),
                    o = n(27),
                    r = n(67);
                e.exports = function (e) {
                    return function (t, n, a) {
                        var s,
                            l = i(t),
                            c = o(l.length),
                            u = r(a, c);
                        if (e && n != n) {
                            for (; c > u;)
                                if ((s = l[u++]) != s) return !0;
                        } else
                            for (; c > u; u++)
                                if ((e || u in l) && l[u] === n) return e || u || 0;
                        return !e && -1;
                    };
                };
            },
            function (e, t, n) {
                var i = n(28),
                    o = n(13).concat("length", "prototype");
                t.f =
                    Object.getOwnPropertyNames ||
                    function (e) {
                        return i(e, o);
                    };
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(69),
                    r = n(66),
                    a = n(3),
                    s = i.Reflect;
                e.exports =
                    (s && s.ownKeys) ||
                    function (e) {
                        var t = o.f(a(e)),
                            n = r.f;
                        return n ? t.concat(n(e)) : t;
                    };
            },
            function (e, t, n) {
                var i = n(1),
                    o = n(70),
                    r = n(31),
                    a = n(7);
                e.exports = function (e, t) {
                    for (var n = o(t), s = a.f, l = r.f, c = 0; c < n.length; c++) {
                        var u = n[c];
                        i(e, u) || s(e, u, l(t, u));
                    }
                };
            },
            function (e, t, n) {
                var i = n(4),
                    o = n(30),
                    r = "".split;
                e.exports = i(function () {
                        return !Object("z").propertyIsEnumerable(0);
                    }) ?
                    function (e) {
                        return "String" == o(e) ? r.call(e, "") : Object(e);
                    } :
                    Object;
            },
            function (e, t, n) {
                "use strict";
                var i = {}.propertyIsEnumerable,
                    o = Object.getOwnPropertyDescriptor,
                    r = o && !i.call({
                        1: 2
                    }, 1);
                t.f = r ?
                    function (e) {
                        var t = o(this, e);
                        return !!t && t.enumerable;
                    } :
                    i;
            },
            function (e, t, n) {
                "use strict";
                var i = n(32),
                    o = n(64),
                    r = n(25),
                    a = n(57),
                    s = n(23),
                    l = n(5),
                    c = n(29),
                    u = n(2),
                    p = n(17),
                    f = n(9),
                    h = n(26),
                    d = h.IteratorPrototype,
                    g = h.BUGGY_SAFARI_ITERATORS,
                    y = u("iterator"),
                    m = function () {
                        return this;
                    };
                e.exports = function (e, t, n, u, h, v, b) {
                    o(n, t, u);
                    var x,
                        w,
                        _,
                        k = function (e) {
                            if (e === h && A) return A;
                            if (!g && e in S) return S[e];
                            switch (e) {
                                case "keys":
                                case "values":
                                case "entries":
                                    return function () {
                                        return new n(this, e);
                                    };
                            }
                            return function () {
                                return new n(this);
                            };
                        },
                        E = t + " Iterator",
                        T = !1,
                        S = e.prototype,
                        C = S[y] || S["@@iterator"] || (h && S[h]),
                        A = (!g && C) || k(h),
                        L = ("Array" == t && S.entries) || C;
                    if (
                        (L && ((x = r(L.call(new e()))), d !== Object.prototype && x.next && (p || r(x) === d || (a ? a(x, d) : "function" != typeof x[y] && l(x, y, m)), s(x, E, !0, !0), p && (f[E] = m))),
                            "values" == h &&
                            C &&
                            "values" !== C.name &&
                            ((T = !0),
                                (A = function () {
                                    return C.call(this);
                                })),
                            (p && !b) || S[y] === A || l(S, y, A),
                            (f[t] = A),
                            h)
                    )
                        if (((w = {
                                values: k("values"),
                                keys: v ? A : k("keys"),
                                entries: k("entries")
                            }), b))
                            for (_ in w)(!g && !T && _ in S) || c(S, _, w[_]);
                        else i({
                            target: t,
                            proto: !0,
                            forced: g || T
                        }, w);
                    return w;
                };
            },
            function (e, t) {
                var n;
                n = (function () {
                    return this;
                })();
                try {
                    n = n || Function("return this")() || (0, eval)("this");
                } catch (e) {
                    "object" == typeof window && (n = window);
                }
                e.exports = n;
            },
            function (e, t, n) {
                var i = n(0),
                    o = n(36),
                    r = i.WeakMap;
                e.exports = "function" == typeof r && /native code/.test(o.call(r));
            },
            function (e, t, n) {
                var i = n(21),
                    o = n(20);
                e.exports = function (e, t, n) {
                    var r,
                        a,
                        s = String(o(e)),
                        l = i(t),
                        c = s.length;
                    return l < 0 || l >= c ?
                        n ?
                        "" :
                        void 0 :
                        (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ?
                        n ?
                        s.charAt(l) :
                        r :
                        n ?
                        s.slice(l, l + 2) :
                        a - 56320 + ((r - 55296) << 10) + 65536;
                };
            },
            function (e, t, n) {
                "use strict";
                var i = n(77),
                    o = n(37),
                    r = n(74),
                    a = o.set,
                    s = o.getterFor("String Iterator");
                r(
                    String,
                    "String",
                    function (e) {
                        a(this, {
                            type: "String Iterator",
                            string: String(e),
                            index: 0
                        });
                    },
                    function () {
                        var e,
                            t = s(this),
                            n = t.string,
                            o = t.index;
                        return o >= n.length ? {
                            value: void 0,
                            done: !0
                        } : ((e = i(n, o, !0)), (t.index += e.length), {
                            value: e,
                            done: !1
                        });
                    }
                );
            },
            function (e, t, n) {
                n(78), n(55);
                var i = n(45);
                e.exports = i.Array.from;
            },
            function (e, t, n) {
                n(79), (e.exports = n(44));
            },
        ]);
    }),
    (function (e) {
        "function" == typeof define && define.amd ?
            define(["jquery"], e) :
            "object" == typeof module && module.exports ?
            (module.exports = function (t, n) {
                return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n;
            }) :
            e(jQuery);
    })(function (e) {
        "use strict";
        var t = 0;
        e.fn.TouchSpin = function (n) {
            var i = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    firstclickvalueifempty: null,
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalup: "+",
                    verticaldown: "-",
                    verticalupclass: "",
                    verticaldownclass: "",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                    buttondown_txt: "-",
                    buttonup_txt: "+",
                    callback_before_calculation: function (e) {
                        return e;
                    },
                    callback_after_calculation: function (e) {
                        return e;
                    },
                },
                o = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    firstclickvalueifempty: "first-click-value-if-empty",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt",
                };
            return this.each(function () {
                var r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    p,
                    f,
                    h,
                    d,
                    g = e(this),
                    y = g.data(),
                    m = 0,
                    v = !1;

                function b() {
                    "" === r.prefix && (a = c.prefix.detach()), "" === r.postfix && (s = c.postfix.detach());
                }

                function x() {
                    var e, t, n;
                    "" !== (e = r.callback_before_calculation(g.val())) ?
                    (0 < r.decimals && "." === e) ||
                    ((t = parseFloat(e)),
                        isNaN(t) && (t = "" !== r.replacementval ? r.replacementval : 0),
                        (n = t).toString() !== e && (n = t),
                        null !== r.min && t < r.min && (n = r.min),
                        null !== r.max && t > r.max && (n = r.max),
                        (n = (function (e) {
                            switch (r.forcestepdivisibility) {
                                case "round":
                                    return (Math.round(e / r.step) * r.step).toFixed(r.decimals);
                                case "floor":
                                    return (Math.floor(e / r.step) * r.step).toFixed(r.decimals);
                                case "ceil":
                                    return (Math.ceil(e / r.step) * r.step).toFixed(r.decimals);
                                default:
                                    return e.toFixed(r.decimals);
                            }
                        })(n)),
                        Number(e).toString() !== n.toString() && (g.val(n), g.trigger("change"))) :
                    "" !== r.replacementval && (g.val(r.replacementval), g.trigger("change"));
                }

                function w() {
                    if (r.booster) {
                        var e = Math.pow(2, Math.floor(m / r.boostat)) * r.step;
                        return r.maxboostedstep && e > r.maxboostedstep && ((e = r.maxboostedstep), (u = Math.round(u / e) * e)), Math.max(r.step, e);
                    }
                    return r.step;
                }

                function _() {
                    return "number" == typeof r.firstclickvalueifempty ? r.firstclickvalueifempty : (r.min + r.max) / 2;
                }

                function k() {
                    x();
                    var e,
                        t = (u = parseFloat(r.callback_before_calculation(c.input.val())));
                    isNaN(u) ? (u = _()) : ((e = w()), (u += e)),
                        null !== r.max && u > r.max && ((u = r.max), g.trigger("touchspin.on.max"), C()),
                        c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))),
                        t !== u && g.trigger("change");
                }

                function E() {
                    x();
                    var e,
                        t = (u = parseFloat(r.callback_before_calculation(c.input.val())));
                    isNaN(u) ? (u = _()) : ((e = w()), (u -= e)),
                        null !== r.min && u < r.min && ((u = r.min), g.trigger("touchspin.on.min"), C()),
                        c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))),
                        t !== u && g.trigger("change");
                }

                function T() {
                    C(),
                        (m = 0),
                        (v = "down"),
                        g.trigger("touchspin.on.startspin"),
                        g.trigger("touchspin.on.startdownspin"),
                        (h = setTimeout(function () {
                            p = setInterval(function () {
                                m++, E();
                            }, r.stepinterval);
                        }, r.stepintervaldelay));
                }

                function S() {
                    C(),
                        (m = 0),
                        (v = "up"),
                        g.trigger("touchspin.on.startspin"),
                        g.trigger("touchspin.on.startupspin"),
                        (d = setTimeout(function () {
                            f = setInterval(function () {
                                m++, k();
                            }, r.stepinterval);
                        }, r.stepintervaldelay));
                }

                function C() {
                    switch ((clearTimeout(h), clearTimeout(d), clearInterval(p), clearInterval(f), v)) {
                        case "up":
                            g.trigger("touchspin.on.stopupspin"), g.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            g.trigger("touchspin.on.stopdownspin"), g.trigger("touchspin.on.stopspin");
                    }
                    (m = 0), (v = !1);
                }!(function () {
                    if (!g.data("alreadyinitialized"))
                        g.data("alreadyinitialized", !0),
                        (t += 1),
                        g.data("spinnerid", t),
                        g.is("input") ?
                        ("" !==
                            (r = e.extend({},
                                i,
                                y,
                                (function () {
                                    var t = {};
                                    return (
                                        e.each(o, function (e, n) {
                                            var i = "bts-" + n;
                                            g.is("[data-" + i + "]") && (t[e] = g.data(i));
                                        }),
                                        t
                                    );
                                })(),
                                n
                            )).initval &&
                            "" === g.val() &&
                            g.val(r.initval),
                            x(),
                            (function () {
                                var t = g.val(),
                                    n = g.parent();
                                "" !== t && (t = r.callback_after_calculation(Number(t).toFixed(r.decimals))),
                                    g.data("initvalue", t).val(t),
                                    g.addClass("form-control"),
                                    n.hasClass("input-group") ?
                                    (function (t) {
                                        t.addClass("bootstrap-touchspin");
                                        var n,
                                            i,
                                            o = g.prev(),
                                            a = g.next(),
                                            s =
                                            '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' +
                                            r.prefix +
                                            "</span></span>",
                                            c =
                                            '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' +
                                            r.postfix +
                                            "</span></span>";
                                        o.hasClass("input-group-btn") || o.hasClass("input-group-prepend") ?
                                            ((n = '<button class="' + r.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + r.buttondown_txt + "</button>"), o.append(n)) :
                                            ((n =
                                                    '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' +
                                                    r.buttondown_class +
                                                    ' bootstrap-touchspin-down" type="button">' +
                                                    r.buttondown_txt +
                                                    "</button></span>"),
                                                e(n).insertBefore(g)),
                                            a.hasClass("input-group-btn") || a.hasClass("input-group-append") ?
                                            ((i = '<button class="' + r.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + r.buttonup_txt + "</button>"), a.prepend(i)) :
                                            ((i =
                                                    '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' +
                                                    r.buttonup_class +
                                                    ' bootstrap-touchspin-up" type="button">' +
                                                    r.buttonup_txt +
                                                    "</button></span>"),
                                                e(i).insertAfter(g)),
                                            e(s).insertBefore(g),
                                            e(c).insertAfter(g),
                                            (l = t);
                                    })(n) :
                                    (function () {
                                        var t,
                                            n = "";
                                        g.hasClass("input-sm") && (n = "input-group-sm"),
                                            g.hasClass("input-lg") && (n = "input-group-lg"),
                                            (t = r.verticalbuttons ?
                                                '<div class="input-group ' +
                                                n +
                                                ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' +
                                                r.prefix +
                                                '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' +
                                                r.postfix +
                                                '</span></span><span class="input-group-btn-vertical"><button class="' +
                                                r.buttondown_class +
                                                " bootstrap-touchspin-up " +
                                                r.verticalupclass +
                                                '" type="button">' +
                                                r.verticalup +
                                                '</button><button class="' +
                                                r.buttonup_class +
                                                " bootstrap-touchspin-down " +
                                                r.verticaldownclass +
                                                '" type="button">' +
                                                r.verticaldown +
                                                "</button></span></div>" :
                                                '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' +
                                                r.buttondown_class +
                                                ' bootstrap-touchspin-down" type="button">' +
                                                r.buttondown_txt +
                                                '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' +
                                                r.prefix +
                                                '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' +
                                                r.postfix +
                                                '</span></span><span class="input-group-btn input-group-append"><button class="' +
                                                r.buttonup_class +
                                                ' bootstrap-touchspin-up" type="button">' +
                                                r.buttonup_txt +
                                                "</button></span></div>"),
                                            (l = e(t).insertBefore(g)),
                                            e(".bootstrap-touchspin-prefix", l).after(g),
                                            g.hasClass("input-sm") ? l.addClass("input-group-sm") : g.hasClass("input-lg") && l.addClass("input-group-lg");
                                    })();
                            })(),
                            (c = {
                                down: e(".bootstrap-touchspin-down", l),
                                up: e(".bootstrap-touchspin-up", l),
                                input: e("input", l),
                                prefix: e(".bootstrap-touchspin-prefix", l).addClass(r.prefix_extraclass),
                                postfix: e(".bootstrap-touchspin-postfix", l).addClass(r.postfix_extraclass),
                            }),
                            b(),
                            g.on("keydown.touchspin", function (e) {
                                var t = e.keyCode || e.which;
                                38 === t ? ("up" !== v && (k(), S()), e.preventDefault()) : 40 === t && ("down" !== v && (E(), T()), e.preventDefault());
                            }),
                            g.on("keyup.touchspin", function (e) {
                                var t = e.keyCode || e.which;
                                (38 !== t && 40 !== t) || C();
                            }),
                            g.on("blur.touchspin", function () {
                                x(), g.val(r.callback_after_calculation(g.val()));
                            }),
                            c.down.on("keydown", function (e) {
                                var t = e.keyCode || e.which;
                                (32 !== t && 13 !== t) || ("down" !== v && (E(), T()), e.preventDefault());
                            }),
                            c.down.on("keyup.touchspin", function (e) {
                                var t = e.keyCode || e.which;
                                (32 !== t && 13 !== t) || C();
                            }),
                            c.up.on("keydown.touchspin", function (e) {
                                var t = e.keyCode || e.which;
                                (32 !== t && 13 !== t) || ("up" !== v && (k(), S()), e.preventDefault());
                            }),
                            c.up.on("keyup.touchspin", function (e) {
                                var t = e.keyCode || e.which;
                                (32 !== t && 13 !== t) || C();
                            }),
                            c.down.on("mousedown.touchspin", function (e) {
                                c.down.off("touchstart.touchspin"), g.is(":disabled") || (E(), T(), e.preventDefault(), e.stopPropagation());
                            }),
                            c.down.on("touchstart.touchspin", function (e) {
                                c.down.off("mousedown.touchspin"), g.is(":disabled") || (E(), T(), e.preventDefault(), e.stopPropagation());
                            }),
                            c.up.on("mousedown.touchspin", function (e) {
                                c.up.off("touchstart.touchspin"), g.is(":disabled") || (k(), S(), e.preventDefault(), e.stopPropagation());
                            }),
                            c.up.on("touchstart.touchspin", function (e) {
                                c.up.off("mousedown.touchspin"), g.is(":disabled") || (k(), S(), e.preventDefault(), e.stopPropagation());
                            }),
                            c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (e) {
                                v && (e.stopPropagation(), C());
                            }),
                            c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (e) {
                                v && (e.stopPropagation(), C());
                            }),
                            c.down.on("mousemove.touchspin touchmove.touchspin", function (e) {
                                v && (e.stopPropagation(), e.preventDefault());
                            }),
                            c.up.on("mousemove.touchspin touchmove.touchspin", function (e) {
                                v && (e.stopPropagation(), e.preventDefault());
                            }),
                            g.on("mousewheel.touchspin DOMMouseScroll.touchspin", function (e) {
                                if (r.mousewheel && g.is(":focus")) {
                                    var t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
                                    e.stopPropagation(), e.preventDefault(), (t < 0 ? E : k)();
                                }
                            }),
                            g.on("touchspin.destroy", function () {
                                !(function () {
                                    var t = g.parent();
                                    C(),
                                        g.off(".touchspin"),
                                        t.hasClass("bootstrap-touchspin-injected") ? (g.siblings().remove(), g.unwrap()) : (e(".bootstrap-touchspin-injected", t).remove(), t.removeClass("bootstrap-touchspin")),
                                        g.data("alreadyinitialized", !1);
                                })();
                            }),
                            g.on("touchspin.uponce", function () {
                                C(), k();
                            }),
                            g.on("touchspin.downonce", function () {
                                C(), E();
                            }),
                            g.on("touchspin.startupspin", function () {
                                S();
                            }),
                            g.on("touchspin.startdownspin", function () {
                                T();
                            }),
                            g.on("touchspin.stopspin", function () {
                                C();
                            }),
                            g.on("touchspin.updatesettings", function (t, n) {
                                !(function (t) {
                                    (function (t) {
                                        (r = e.extend({}, r, t)),
                                        t.postfix && (0 === g.parent().find(".bootstrap-touchspin-postfix").length && s.insertAfter(g), g.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix)),
                                            t.prefix && (0 === g.parent().find(".bootstrap-touchspin-prefix").length && a.insertBefore(g), g.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix)),
                                            b();
                                    })(t),
                                    x();
                                    var n = c.input.val();
                                    "" !== n && ((n = Number(r.callback_before_calculation(c.input.val()))), c.input.val(r.callback_after_calculation(Number(n).toFixed(r.decimals))));
                                })(n);
                            })) :
                        console.log("Must be an input.");
                })();
            });
        };
    });