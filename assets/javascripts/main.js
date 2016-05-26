/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = be[e] = {};
        return oe.each(e.match(ye) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (fe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), oe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Se, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (oe.acceptData(e)) {
            var o, r, a = oe.expando,
                s = e.nodeType,
                l = s ? oe.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = Q.pop() || oe.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
        }
    }

    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var i, o, r = e.nodeType,
                a = r ? oe.cache : e,
                s = r ? e[oe.expando] : oe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !u(i) : !oe.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Oe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, g(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
    }

    function v(e) {
        $e.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Ye.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, o, r = oe._data(e),
                a = oe._data(t, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) oe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = oe.extend({}, a.data))
        }
    }

    function T(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (i in o.events) oe.removeEvent(t, i, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (y(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && $e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function k(t, n) {
        var i, o = oe(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function S(e) {
        var t = fe,
            n = Je[e];
        return n || (n = k(e, t), "none" !== n && n || (Ve = (Ve || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ve[0].contentWindow || Ve[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ve.detach()), Je[e] = n), n
    }

    function C(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = ht.length; o--;)
            if (t = ht[o] + n, t in e) return t;
        return i
    }

    function N(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (r[a] = oe._data(i, "olddisplay", S(i.nodeName)))) : (o = Ne(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function A(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function $(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += oe.css(e, n + Ee[r], !0, o)), i ? ("content" === n && (a -= oe.css(e, "padding" + Ee[r], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + Ee[r] + "Width", !0, o))) : (a += oe.css(e, "padding" + Ee[r], !0, o), "padding" !== n && (a += oe.css(e, "border" + Ee[r] + "Width", !0, o)));
        return a
    }

    function P(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = et(e),
            a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
            i = a && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + $(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function D(e, t, n, i, o) {
        return new D.prototype.init(e, t, n, i, o)
    }

    function j() {
        return setTimeout(function() {
            pt = void 0
        }), pt = oe.now()
    }

    function L(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ee[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function M(e, t, n) {
        for (var i, o = (yt[t] || []).concat(yt["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function O(e, t, n) {
        var i, o, r, a, s, l, u, c, d = this,
            h = {},
            p = e.style,
            f = e.nodeType && Ne(e),
            m = oe._data(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = oe.css(e, "display"), c = "none" === u ? oe._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], mt.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    f = !0
                }
                h[i] = m && m[i] || oe.style(e, i)
            } else u = void 0;
        if (oe.isEmptyObject(h)) "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = oe._data(e, "fxshow", {}), r && (m.hidden = !f), f ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in h) oe.style(e, t, h[t])
            });
            for (i in h) a = M(f ? m[i] : 0, i, d), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function H(e, t, n) {
        var i, o, r = 0,
            a = wt.length,
            s = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = pt || j(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (I(c, u.opts.specialEasing); a > r; r++)
            if (i = wt[r].call(u, e, c, u.opts)) return i;
        return oe.map(c, M, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(ye) || [];
            if (oe.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, oe.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            a = e === Bt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function z(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function q(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function B(e, t, n, i) {
        var o, r, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = u[l + " " + r] || u["* " + r], !a)
                for (o in u)
                    if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W(e, t, n, i) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            n || Yt.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (o in t) W(e + "[" + o + "]", t[o], n, i)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Y(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Q = [],
        G = Q.slice,
        Z = Q.concat,
        K = Q.push,
        V = Q.indexOf,
        J = {},
        ee = J.toString,
        te = J.hasOwnProperty,
        ne = {},
        ie = "1.11.3",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Q.sort,
        splice: Q.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o) e = a[i], n = o[i], a !== n && (u && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, a[i] = oe.extend(u, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (s)
                for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (V) return V.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return Z.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(G.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    });
    var ue =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, u, d, p, f, m;
                if ((t ? t.ownerDocument || t : F) !== D && P(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && L) {
                    if (11 !== s && (o = we.exec(e)))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && H(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && _.getElementsByClassName) return V.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (_.qsa && (!M || !M.test(e))) {
                        if (p = d = R, f = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = S(e), (d = t.getAttribute("id")) ? p = d.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                            f = ye.test(e) && c(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return V.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[R] = !0, e
            }

            function o(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = q++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, l, u = [z, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (l = t[R] || (t[R] = {}), (s = l[i]) && s[0] === z && s[1] === r) return u[2] = s[2];
                                if (l[i] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), u && t.push(s));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[R] && (o = v(o)), r && !r[R] && (r = v(r, a)), i(function(i, a, s, l) {
                    var u, c, d, h = [],
                        p = [],
                        f = a.length,
                        v = i || m(t || "*", s.nodeType ? [s] : s, []),
                        w = !e || !i && t ? v : g(v, h, e, s, l),
                        y = n ? r || (i ? e : f || o) ? [] : a : w;
                    if (n && n(w, y, s, l), o)
                        for (u = g(y, p), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(w[p[c]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = y.length; c--;)(d = y[c]) && u.push(w[c] = d);
                                r(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (u = r ? ee(i, d) : h[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else y = g(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : V.apply(a, y)
                })
            }

            function w(e) {
                for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, a, !0), u = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, i) {
                        var o = !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, o
                    }]; o > s; s++)
                    if (n = x.relative[e[s].type]) c = [p(f(c), n)];
                    else {
                        if (n = x.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (i = ++s; o > i && !x.relative[e[i].type]; i++);
                            return v(s > 1 && f(c), s > 1 && h(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > s && w(e.slice(s, i)), o > i && w(e = e.slice(i)), o > i && h(e))
                        }
                        c.push(n)
                    }
                return f(c)
            }

            function y(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, u) {
                        var c, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            w = N,
                            y = i || r && x.find.TAG("*", u),
                            b = z += null == w ? 1 : Math.random() || .1,
                            _ = y.length;
                        for (u && (N = a !== D && a); f !== _ && null != (c = y[f]); f++) {
                            if (r && c) {
                                for (d = 0; h = e[d++];)
                                    if (h(c, a, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (z = b)
                            }
                            o && ((c = !h && c) && p--, i && m.push(c))
                        }
                        if (p += f, o && f !== p) {
                            for (d = 0; h = n[d++];) h(m, v, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Z.call(l));
                                v = g(v)
                            }
                            V.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (z = b, N = w), m
                    };
                return o ? i(a) : a
            }
            var b, _, x, T, k, S, C, E, N, A, $, P, D, j, L, M, O, I, H, R = "sizzle" + 1 * new Date,
                F = e.document,
                z = 0,
                q = 0,
                B = n(),
                W = n(),
                X = n(),
                U = function(e, t) {
                    return e === t && ($ = !0), 0
                },
                Y = 1 << 31,
                Q = {}.hasOwnProperty,
                G = [],
                Z = G.pop,
                K = G.push,
                V = G.push,
                J = G.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                he = new RegExp(ae),
                pe = new RegExp("^" + oe + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    P()
                };
            try {
                V.apply(G = J.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (ke) {
                V = {
                    apply: G.length ? function(e, t) {
                        K.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            _ = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, P = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), L = !k(i), _.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = o(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = ve.test(i.getElementsByClassName), _.getById = o(function(e) {
                    return j.appendChild(e).id = R, !i.getElementsByName || !i.getElementsByName(R).length
                }), _.getById ? (x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(_e, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var t = e.replace(_e, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                    return L ? t.getElementsByClassName(e) : void 0
                }, O = [], M = [], (_.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                    j.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || M.push(".#.+[+~]")
                }), o(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (_.matchesSelector = ve.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                    _.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), O.push("!=", ae)
                }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(j.compareDocumentPosition), H = t || ve.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return $ = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && H(F, e) ? -1 : t === i || t.ownerDocument === F && H(F, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return $ = !0, 0;
                    var n, o = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (r === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[o] === u[o];) o++;
                    return o ? a(l[o], u[o]) : l[o] === F ? -1 : u[o] === F ? 1 : 0
                }, i) : D
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== D && P(e), n = n.replace(de, "='$1']"), _.matchesSelector && L && (!O || !O.test(n)) && (!M || !M.test(n))) try {
                    var i = I.call(e, n);
                    if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, D, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== D && P(e), H(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== D && P(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== i ? i : _.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if ($ = !_.detectDuplicates, A = !_.sortStable && e.slice(0), e.sort(U), $) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(_e, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, h, p, f, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                w = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && w) {
                                    for (c = g[R] || (g[R] = {}), u = c[e] || [], p = u[0] === z && u[1], h = u[0] === z && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++h && d === t) {
                                            c[e] = [z, p, h];
                                            break
                                        }
                                } else if (w && (u = (t[R] || (t[R] = {}))[e]) && u[0] === z) h = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (w && ((d[R] || (d[R] = {}))[e] = [z, h]), d !== t)););
                                return h -= o, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[R] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = C(e.replace(le, "$1"));
                        return o[R] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(_e, xe),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === j
                    },
                    focus: function(e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[b] = s(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[b] = l(b);
            return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = t.tokenize = function(e, n) {
                var i, o, r, a, s, l, u, c = W[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = x.preFilter; s;) {
                    (!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), s = s.slice(i.length));
                    for (a in x.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
            }, C = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = X[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;) r = w(t[n]), r[R] ? i.push(r) : o.push(r);
                    r = X(e, y(o, i)), r.selector = e
                }
                return r
            }, E = t.select = function(e, t, n, i) {
                var o, r, a, s, l, u = "function" == typeof e && e,
                    d = !i && S(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && _.getById && 9 === t.nodeType && L && x.relative[r[1].type]) {
                        if (t = (x.find.ID(a.matches[0].replace(_e, xe), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                        if ((l = x.find[s]) && (i = l(a.matches[0].replace(_e, xe), ye.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && h(r), !e) return V.apply(n, i), n;
                            break
                        }
                }
                return (u || C(e, d))(i, t, !L, n, ye.test(e) && c(t.parentNode) || t), n
            }, _.sortStable = R.split("").sort(U).join("") === R, _.detectDuplicates = !!$, P(), _.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), _.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, fe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), de.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = fe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, pe = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        we = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], a = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (we[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var ye = /\S+/g,
        be = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? be[e] || r(e) : oe.extend({}, e);
        var t, n, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(r) {
                for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            oe.each(t, function(t, n) {
                                var i = oe.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, n) {
                        for (var i;
                            (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, r) {
                                var a = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, oe.each(t, function(e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = G.call(arguments),
                a = r.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : oe.Deferred(),
                u = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    });
    var _e;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (_e.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!_e)
            if (_e = oe.Deferred(), "complete" === fe.readyState) setTimeout(oe.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            fe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && fe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    a(), oe.ready()
                }
            }()
        }
        return _e.promise(t)
    };
    var xe, Te = "undefined";
    for (xe in oe(ne)) break;
    ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, n, i;
            n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : r ? l(r, e, oe.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = oe._queueHooks(e, t),
                a = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = oe.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = ["Top", "Right", "Bottom", "Left"],
        Ne = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ae = oe.access = function(e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (s in n) oe.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(oe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        $e = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = fe.createElement("input"),
            t = fe.createElement("div"),
            n = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = fe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Pe = /^(?:input|select|textarea)$/i,
        De = /^key/,
        je = /^(?:mouse|pointer|contextmenu)|click/,
        Le = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, h, p, f, m, g = oe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof oe === Te || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(ye) || [""], s = t.length; s--;) r = Me.exec(t[s]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (u = oe.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, u.setup && u.setup.call(e, i, f, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, h, p, f, m, g = oe.hasData(e) && oe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ye) || [""], u = t.length; u--;)
                    if (s = Me.exec(t[u]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) a = h[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(r, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || oe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) oe.event.remove(e, p + t[u], n, i, !0);
                oe.isEmptyObject(c) && (delete g.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, a, s, l, u, c, d, h = [i || fe],
                p = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Le.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t),
                    t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), u = oe.event.special[p] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !oe.isWindow(i)) {
                    for (l = u.delegateType || p, Le.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), c = s;
                    c === (i.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, r = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && oe.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && a && i[p] && !oe.isWindow(i)) {
                    c = i[a], c && (i[a] = null), oe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    oe.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, a = [],
                s = G.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                u = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = je.test(o) ? this.mouseHooks : De.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || fe, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pe.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t);
                o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t) - 1;
                o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, i, o) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return oe().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ie = / jQuery\d+="(?:null|\d+)"/g,
        He = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"),
        Re = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ze = /<([\w:]+)/,
        qe = /<tbody/i,
        Be = /<|&#?\w+;/,
        We = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ye = /^true\/(.*)/,
        Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ze = m(fe),
        Ke = Ze.appendChild(fe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
        clone: function(e, t, n) {
            var i, o, r, a, s, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (i = g(r), s = g(e), a = 0; null != (o = s[a]); ++a) i[a] && T(o, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(r), a = 0; null != (o = s[a]); a++) x(o, i[a]);
                else x(e, r);
            return i = g(r, "script"), i.length > 0 && _(i, !l && g(e, "script")), i = s = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, a, s, l, u, c, d = e.length, h = m(t), p = [], f = 0; d > f; f++)
                if (r = e[f], r || 0 === r)
                    if ("object" === oe.type(r)) oe.merge(p, r.nodeType ? [r] : r);
                    else if (Be.test(r)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (ze.exec(r) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, s.innerHTML = c[1] + r.replace(Fe, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Re.test(r) && p.push(t.createTextNode(Re.exec(r)[0])), !ne.tbody)
                    for (r = "table" !== l || qe.test(r) ? "<table>" !== c[1] || qe.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (oe.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else p.push(t.createTextNode(r));
            for (s && h.removeChild(s), ne.appendChecked || oe.grep(g(p, "input"), v), f = 0; r = p[f++];)
                if ((!i || -1 === oe.inArray(r, i)) && (a = oe.contains(r.ownerDocument, r), s = g(h.appendChild(r), "script"), a && _(s), n))
                    for (o = 0; r = s[o++];) Ue.test(r.type || "") && n.push(r);
            return s = null, h
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, a = 0, s = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
                if ((t || oe.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, Q.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && _(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                if ("string" == typeof e && !We.test(e) && (ne.htmlSerialize || !He.test(e)) && (ne.leadingWhitespace || !Re.test(e)) && !Ge[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Z.apply([], e);
            var n, i, o, r, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                h = e[0],
                p = oe.isFunction(h);
            if (p || u > 1 && "string" == typeof h && !ne.checkClone && Xe.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                p && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (r = oe.map(g(s, "script"), y), o = r.length; u > l; l++) i = s, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, g(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, oe.map(r, b), l = 0; o > l; l++) i = r[l], Ue.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                s = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = oe(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), oe(r[i])[t](n), K.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ve, Je = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = fe.getElementsByTagName("body")[0], n && n.style ? (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : fe.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !ot.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, i, o;
                n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, o = t.appendChild(fe.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, r, a, s, l;
            n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), oe.swap = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        };
    var rt = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ce + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ce + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = E(l, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = E(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? st.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function() {
                    return P(e, t, i)
                }) : P(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && et(e);
                return A(e, n, i ? $(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = C(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ee[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = A)
    }), oe.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (i = et(e), o = t.length; o > a; a++) r[t[a]] = oe.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ne(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = D.prototype.init, oe.fx.step = {};
    var pt, ft, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        wt = [O],
        yt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = gt.exec(t),
                    r = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    a = (oe.cssNumber[e] || "px" !== r && +i) && gt.exec(oe.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, oe.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(H, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], yt[n] = yt[n] || [], yt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? wt.unshift(e) : wt.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = oe.isEmptyObject(e),
                    r = oe.speed(t, n, i),
                    a = function() {
                        var t = H(this, oe.extend({}, e), r);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = oe.timers,
                        a = oe._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && vt.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = oe._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = oe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, o)
            }
        }), oe.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                n = 0;
            for (pt = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe.fx.stop(), pt = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ft || (ft = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(ft), ft = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = fe.createElement("select"), o = n.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var bt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === o) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), a = o.length; a--;)
                        if (i = o[a], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _t, xt, Tt = oe.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        St = ne.getSetAttribute,
        Ct = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return Ae(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Te ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? xt : _t)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(ye);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Ct && St || !kt.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(St ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), xt = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : Ct && St || !kt.test(n) ? e.setAttribute(!St && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || oe.find.attr;
        Tt[t] = Ct && St || !kt.test(t) ? function(e, t, i) {
            var o, r;
            return i || (r = Tt[t], Tt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = r), o
        } : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ct && St || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
        }
    }), St || (_t = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: _t.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            _t.set(e, "" === t ? !1 : t, n)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i,
        Nt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ae(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var At = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        a = e ? oe.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, o = oe(this), r = e.match(ye) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var $t = oe.now(),
        Pt = /\?/,
        Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(Dt, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var jt, Lt, Mt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qt = {},
        Bt = {},
        Wt = "*/".concat("*");
    try {
        Lt = location.href
    } catch (Xt) {
        Lt = fe.createElement("a"), Lt.href = "", Lt = Lt.href
    }
    jt = zt.exec(Lt.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt,
            type: "GET",
            isLocal: Ht.test(jt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, oe.ajaxSettings), t) : z(oe.ajaxSettings, e)
        },
        ajaxPrefilter: R(qt),
        ajaxTransport: R(Bt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, c, v, w, b, x = t;
                2 !== y && (y = 2, s && clearTimeout(s), u = void 0, a = i || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (w = q(d, _, n)), w = B(d, w, _, o), o ? (d.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (oe.lastModified[r] = b), b = _.getResponseHeader("etag"), b && (oe.etag[r] = b)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, c = w.data, v = w.error, o = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", o ? f.resolveWith(h, [c, x, _]) : f.rejectWith(h, [_, x, v]), _.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? c : v]), m.fireWith(h, [_, x]), l && (p.trigger("ajaxComplete", [_, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, a, s, l, u, c, d = oe.ajaxSetup({}, t),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                f = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                w = {},
                y = 0,
                b = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!c)
                                for (c = {}; t = It.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = w[n] = w[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) g[t] = [g[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || Lt) + "").replace(Mt, "").replace(Ft, jt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (i = zt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === jt[1] && i[2] === jt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), F(qt, d, t, _), 2 === y) return _;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Pt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ot.test(r) ? r.replace(Ot, "$1_=" + $t++) : r + (Pt.test(r) ? "&" : "?") + "_=" + $t++)), d.ifModified && (oe.lastModified[r] && _.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && _.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) _.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, _, d) === !1 || 2 === y)) return _.abort();
            b = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](d[o]);
            if (u = F(Bt, d, t, _)) {
                _.readyState = 1, l && p.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, u.send(v, n)
                } catch (x) {
                    if (!(2 > y)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Yt = /\[\]$/,
        Qt = /\r?\n/g,
        Gt = /^(?:submit|button|image|reset|file)$/i,
        Zt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, o);
        return i.join("&").replace(Ut, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Zt.test(this.nodeName) && !Gt.test(e) && (this.checked || !$e.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Qt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Qt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Kt = 0,
        Vt = {},
        Jt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Vt) Vt[e](void 0, !0)
    }), ne.cors = !!Jt && "withCredentials" in Jt, Jt = ne.ajax = !!Jt, Jt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, r = e.xhr(),
                        a = ++Kt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(n, o) {
                        var s, l, u;
                        if (t && (o || 4 === r.readyState))
                            if (delete Vt[a], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Vt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function(i, o) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || oe.expando + "_" + $t++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || oe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            a = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), a && oe.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || fe;
        var i = de.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = oe.trim(e.slice(s, e.length)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var on = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, u, c = oe.css(e, "position"),
                d = oe(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + o), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Te && (i = o.getBoundingClientRect()), n = Y(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function(i) {
            return Ae(this, function(e, i, o) {
                var r = Y(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = C(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin" : "border");
                return Ae(this, function(t, n, i) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var rn = e.jQuery,
        an = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = an), t && e.jQuery === oe && (e.jQuery = rn), oe
    }, typeof t === Te && (e.jQuery = e.$ = oe), oe
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), o.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(i) {
            var o, r, a, s, l, u;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), r = i.attr("action"), a = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (a.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                return u = {
                    type: o || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(e, o) {
                        return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(r)
                }, s && (u.xhrFields = {
                    withCredentials: s
                }), r && (u.url = r), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                a = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                u = e('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l === t || s === t || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            "undefined" != typeof e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    o = n.confirm(i)
                } catch (r) {
                    (console.error || console.log).call(console, r.stack || r)
                }
                t = n.fire(e, "confirm:complete", [o])
            }
            return o && t
        },
        blankInputs: function(t, n, i) {
            var o, r, a = e(),
                s = n || "input,textarea",
                l = t.find(s);
            return l.each(function() {
                if (o = e(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val(), r === i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    a = a.add(o)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(t) {
        var i = e(this),
            o = i.data("method"),
            r = i.data("params"),
            a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (a && (!o || "GET" === o) && !r) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return o ? (n.handleMethod(i), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o, r, a = e(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") === t && (o = n.blankInputs(a, n.requiredInputSelector, !1), o && n.fire(a, "ajax:aborted:required", [o]))) return n.stopEverything(i);
        if (s) {
            if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [r]);
                return l || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            r = o ? {
                name: o,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    e.extend(e, {
        cacheImage: function(t, n) {
            if ("object" == typeof t) return void e.each(t, function() {
                e.cacheImage(String(this), n)
            });
            var i = new Image;
            return n = n || {}, e.each(["load", "error", "abort"], function() {
                var t = String(this);
                "function" == typeof n[t] && e(i).bind(t, n[t]), "function" == typeof n.complete && e(i).bind(t, n.complete)
            }), i.src = t, i
        }
    }), e.extend(e.fn, {
        cacheImage: function(t) {
            return this.each(function() {
                e.cacheImage(this.src, t)
            })
        }
    })
}(jQuery), $.fn.redraw = function() {
        $(this).each(function() {
            this.offsetHeight
        })
    }, ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var a = t || window.event,
                s = l.call(arguments, 1),
                u = 0,
                d = 0,
                h = 0,
                p = 0,
                f = 0,
                m = 0;
            if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (h = -1 * a.detail), "wheelDelta" in a && (h = a.wheelDelta), "wheelDeltaY" in a && (h = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * h, h = 0), u = 0 === h ? d : h, "deltaY" in a && (h = -1 * a.deltaY, u = h), "deltaX" in a && (d = a.deltaX, 0 === h && (u = -1 * d)), 0 !== h || 0 !== d) {
                if (1 === a.deltaMode) {
                    var g = e.data(this, "mousewheel-line-height");
                    u *= g, h *= g, d *= g
                } else if (2 === a.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    u *= v, h *= v, d *= v
                }
                if (p = Math.max(Math.abs(h), Math.abs(d)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (u /= 40, d /= 40, h /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var w = this.getBoundingClientRect();
                    f = t.clientX - w.left, m = t.clientY - w.top
                }
                return t.deltaX = d, t.deltaY = h, t.deltaFactor = r, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, s.unshift(t, u, d, h), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
            }
        }

        function n() {
            r = null
        }

        function i(e, t) {
            return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var u = a.length; u;) e.event.fixHooks[a[--u]] = e.event.mouseHooks;
        var c = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }), $.fn.removeClassByPrefix = function(e) {
        return this.each(function(t, n) {
            var i = n.className.split(" ").filter(function(t) {
                return 0 !== t.lastIndexOf(e, 0)
            });
            n.className = $.trim(i.join(" "))
        }), this
    }, /* jQuery resizeEnd Event v1.0.1 - Copyright (c) 2013 Giuseppe Gurgone - License http://git.io/iRQs3g */ ! function(e, t) {
        var n = {};
        n.eventName = "resizeEnd", n.delay = 250, n.poll = function() {
            var t = e(this),
                i = t.data(n.eventName);
            i.timeoutId && window.clearTimeout(i.timeoutId), i.timeoutId = window.setTimeout(function() {
                t.trigger(n.eventName)
            }, n.delay)
        }, e.event.special[n.eventName] = {
            setup: function() {
                var t = e(this);
                t.data(n.eventName, {}), t.on("resize", n.poll)
            },
            teardown: function() {
                var t = e(this),
                    i = t.data(n.eventName);
                i.timeoutId && window.clearTimeout(i.timeoutId), t.removeData(n.eventName), t.off("resize", n.poll)
            }
        }, e.fn[n.eventName] = function(e, t) {
            return arguments.length > 0 ? this.on(n.eventName, null, e, t) : this.trigger(n.eventName)
        }
    }(jQuery, this),
    function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t) {
            return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
                var i = e(this),
                    o = i.data(E);
                o || (o = new n(this, t), i.data(E, o))
            })
        }

        function n(t, n) {
            function N(t) {
                if (!(ue() || e(t.target).closest(n.excludedElements, We).length > 0)) {
                    var i, o = t.originalEvent ? t.originalEvent : t,
                        r = k ? o.touches[0] : o;
                    return Xe = b, k ? Ue = o.touches.length : t.preventDefault(), Me = 0, Oe = null, qe = null, Ie = 0, He = 0, Re = 0, Fe = 1, ze = 0, Ye = fe(), Be = ve(), se(), !k || Ue === n.fingers || n.fingers === w || B() ? (de(0, r), Qe = Ce(), 2 == Ue && (de(1, o.touches[1]), He = Re = be(Ye[0].start, Ye[1].start)), (n.swipeStatus || n.pinchStatus) && (i = M(o, Xe))) : i = !1, i === !1 ? (Xe = T, M(o, Xe), i) : (n.hold && (et = setTimeout(e.proxy(function() {
                        We.trigger("hold", [o.target]), n.hold && (i = n.hold.call(We, o, o.target))
                    }, this), n.longTapThreshold)), ce(!0), null)
                }
            }

            function A(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (Xe !== x && Xe !== T && !le()) {
                    var i, o = k ? t.touches[0] : t,
                        r = he(o);
                    if (Ge = Ce(), k && (Ue = t.touches.length), n.hold && clearTimeout(et), Xe = _, 2 == Ue && (0 == He ? (de(1, t.touches[1]), He = Re = be(Ye[0].start, Ye[1].start)) : (he(t.touches[1]), Re = be(Ye[0].end, Ye[1].end), qe = xe(Ye[0].end, Ye[1].end)), Fe = _e(He, Re), ze = Math.abs(He - Re)), Ue === n.fingers || n.fingers === w || !k || B()) {
                        if (Oe = Se(r.start, r.end), z(e, Oe), Me = Te(r.start, r.end), Ie = ye(), me(Oe, Me), (n.swipeStatus || n.pinchStatus) && (i = M(t, Xe)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var a = !0;
                            if (n.triggerOnTouchLeave) {
                                var s = Ee(this);
                                a = Ne(r.end, s)
                            }!n.triggerOnTouchEnd && a ? Xe = L(_) : n.triggerOnTouchLeave && !a && (Xe = L(x)), (Xe == T || Xe == x) && M(t, Xe)
                        }
                    } else Xe = T, M(t, Xe);
                    i === !1 && (Xe = T, M(t, Xe))
                }
            }

            function $(e) {
                var t = e.originalEvent;
                return k && t.touches.length > 0 ? (ae(), !0) : (le() && (Ue = Ke), Ge = Ce(), Ie = ye(), H() || !I() ? (Xe = T, M(t, Xe)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Xe === _ ? (e.preventDefault(), Xe = x, M(t, Xe)) : !n.triggerOnTouchEnd && Z() ? (Xe = x, O(t, Xe, p)) : Xe === _ && (Xe = T, M(t, Xe)), ce(!1), null)
            }

            function P() {
                Ue = 0, Ge = 0, Qe = 0, He = 0, Re = 0, Fe = 1, se(), ce(!1)
            }

            function D(e) {
                var t = e.originalEvent;
                n.triggerOnTouchLeave && (Xe = L(x), M(t, Xe))
            }

            function j() {
                We.unbind($e, N), We.unbind(Le, P), We.unbind(Pe, A), We.unbind(De, $), je && We.unbind(je, D), ce(!1)
            }

            function L(e) {
                var t = e,
                    i = F(),
                    o = I(),
                    r = H();
                return !i || r ? t = T : !o || e != _ || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !o && e == x && n.triggerOnTouchLeave && (t = T) : t = x, t
            }

            function M(e, t) {
                var n = void 0;
                return Y() || U() ? n = O(e, t, d) : (W() || B()) && n !== !1 && (n = O(e, t, h)), oe() && n !== !1 ? n = O(e, t, f) : re() && n !== !1 ? n = O(e, t, m) : ie() && n !== !1 && (n = O(e, t, p)), t === T && P(e), t === x && (k ? 0 == e.touches.length && P(e) : P(e)), n
            }

            function O(t, u, c) {
                var g = void 0;
                if (c == d) {
                    if (We.trigger("swipeStatus", [u, Oe || null, Me || 0, Ie || 0, Ue, Ye]), n.swipeStatus && (g = n.swipeStatus.call(We, t, u, Oe || null, Me || 0, Ie || 0, Ue, Ye), g === !1)) return !1;
                    if (u == x && X()) {
                        if (We.trigger("swipe", [Oe, Me, Ie, Ue, Ye]), n.swipe && (g = n.swipe.call(We, t, Oe, Me, Ie, Ue, Ye), g === !1)) return !1;
                        switch (Oe) {
                            case i:
                                We.trigger("swipeLeft", [Oe, Me, Ie, Ue, Ye]), n.swipeLeft && (g = n.swipeLeft.call(We, t, Oe, Me, Ie, Ue, Ye));
                                break;
                            case o:
                                We.trigger("swipeRight", [Oe, Me, Ie, Ue, Ye]), n.swipeRight && (g = n.swipeRight.call(We, t, Oe, Me, Ie, Ue, Ye));
                                break;
                            case r:
                                We.trigger("swipeUp", [Oe, Me, Ie, Ue, Ye]), n.swipeUp && (g = n.swipeUp.call(We, t, Oe, Me, Ie, Ue, Ye));
                                break;
                            case a:
                                We.trigger("swipeDown", [Oe, Me, Ie, Ue, Ye]), n.swipeDown && (g = n.swipeDown.call(We, t, Oe, Me, Ie, Ue, Ye))
                        }
                    }
                }
                if (c == h) {
                    if (We.trigger("pinchStatus", [u, qe || null, ze || 0, Ie || 0, Ue, Fe, Ye]), n.pinchStatus && (g = n.pinchStatus.call(We, t, u, qe || null, ze || 0, Ie || 0, Ue, Fe, Ye), g === !1)) return !1;
                    if (u == x && q()) switch (qe) {
                        case s:
                            We.trigger("pinchIn", [qe || null, ze || 0, Ie || 0, Ue, Fe, Ye]), n.pinchIn && (g = n.pinchIn.call(We, t, qe || null, ze || 0, Ie || 0, Ue, Fe, Ye));
                            break;
                        case l:
                            We.trigger("pinchOut", [qe || null, ze || 0, Ie || 0, Ue, Fe, Ye]), n.pinchOut && (g = n.pinchOut.call(We, t, qe || null, ze || 0, Ie || 0, Ue, Fe, Ye))
                    }
                }
                return c == p ? (u === T || u === x) && (clearTimeout(Je), clearTimeout(et), K() && !ee() ? (Ve = Ce(), Je = setTimeout(e.proxy(function() {
                    Ve = null, We.trigger("tap", [t.target]), n.tap && (g = n.tap.call(We, t, t.target))
                }, this), n.doubleTapThreshold)) : (Ve = null, We.trigger("tap", [t.target]), n.tap && (g = n.tap.call(We, t, t.target)))) : c == f ? (u === T || u === x) && (clearTimeout(Je), Ve = null, We.trigger("doubletap", [t.target]), n.doubleTap && (g = n.doubleTap.call(We, t, t.target))) : c == m && (u === T || u === x) && (clearTimeout(Je), Ve = null, We.trigger("longtap", [t.target]), n.longTap && (g = n.longTap.call(We, t, t.target))), g
            }

            function I() {
                var e = !0;
                return null !== n.threshold && (e = Me >= n.threshold), e
            }

            function H() {
                var e = !1;
                return null !== n.cancelThreshold && null !== Oe && (e = ge(Oe) - Me >= n.cancelThreshold), e
            }

            function R() {
                return null !== n.pinchThreshold ? ze >= n.pinchThreshold : !0
            }

            function F() {
                var e;
                return e = n.maxTimeThreshold && Ie >= n.maxTimeThreshold ? !1 : !0
            }

            function z(e, t) {
                if (n.allowPageScroll === u || B()) e.preventDefault();
                else {
                    var s = n.allowPageScroll === c;
                    switch (t) {
                        case i:
                            (n.swipeLeft && s || !s && n.allowPageScroll != g) && e.preventDefault();
                            break;
                        case o:
                            (n.swipeRight && s || !s && n.allowPageScroll != g) && e.preventDefault();
                            break;
                        case r:
                            (n.swipeUp && s || !s && n.allowPageScroll != v) && e.preventDefault();
                            break;
                        case a:
                            (n.swipeDown && s || !s && n.allowPageScroll != v) && e.preventDefault()
                    }
                }
            }

            function q() {
                var e = Q(),
                    t = G(),
                    n = R();
                return e && t && n
            }

            function B() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }

            function W() {
                return !(!q() || !B())
            }

            function X() {
                var e = F(),
                    t = I(),
                    n = Q(),
                    i = G(),
                    o = H(),
                    r = !o && i && n && t && e;
                return r
            }

            function U() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }

            function Y() {
                return !(!X() || !U())
            }

            function Q() {
                return Ue === n.fingers || n.fingers === w || !k
            }

            function G() {
                return 0 !== Ye[0].end.x
            }

            function Z() {
                return !!n.tap
            }

            function K() {
                return !!n.doubleTap
            }

            function V() {
                return !!n.longTap
            }

            function J() {
                if (null == Ve) return !1;
                var e = Ce();
                return K() && e - Ve <= n.doubleTapThreshold
            }

            function ee() {
                return J()
            }

            function te() {
                return (1 === Ue || !k) && (isNaN(Me) || Me < n.threshold)
            }

            function ne() {
                return Ie > n.longTapThreshold && y > Me
            }

            function ie() {
                return !(!te() || !Z())
            }

            function oe() {
                return !(!J() || !K())
            }

            function re() {
                return !(!ne() || !V())
            }

            function ae() {
                Ze = Ce(), Ke = event.touches.length + 1
            }

            function se() {
                Ze = 0, Ke = 0
            }

            function le() {
                var e = !1;
                if (Ze) {
                    var t = Ce() - Ze;
                    t <= n.fingerReleaseThreshold && (e = !0)
                }
                return e
            }

            function ue() {
                return !(We.data(E + "_intouch") !== !0)
            }

            function ce(e) {
                e === !0 ? (We.bind(Pe, A), We.bind(De, $), je && We.bind(je, D)) : (We.unbind(Pe, A, !1), We.unbind(De, $, !1), je && We.unbind(je, D, !1)), We.data(E + "_intouch", e === !0)
            }

            function de(e, t) {
                var n = void 0 !== t.identifier ? t.identifier : 0;
                return Ye[e].identifier = n, Ye[e].start.x = Ye[e].end.x = t.pageX || t.clientX, Ye[e].start.y = Ye[e].end.y = t.pageY || t.clientY, Ye[e]
            }

            function he(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0,
                    n = pe(t);
                return n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
            }

            function pe(e) {
                for (var t = 0; t < Ye.length; t++)
                    if (Ye[t].identifier == e) return Ye[t]
            }

            function fe() {
                for (var e = [], t = 0; 5 >= t; t++) e.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return e
            }

            function me(e, t) {
                t = Math.max(t, ge(e)), Be[e].distance = t
            }

            function ge(e) {
                return Be[e] ? Be[e].distance : void 0
            }

            function ve() {
                var e = {};
                return e[i] = we(i), e[o] = we(o), e[r] = we(r), e[a] = we(a), e
            }

            function we(e) {
                return {
                    direction: e,
                    distance: 0
                }
            }

            function ye() {
                return Ge - Qe
            }

            function be(e, t) {
                var n = Math.abs(e.x - t.x),
                    i = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(n * n + i * i))
            }

            function _e(e, t) {
                var n = t / e * 1;
                return n.toFixed(2)
            }

            function xe() {
                return 1 > Fe ? l : s
            }

            function Te(e, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
            }

            function ke(e, t) {
                var n = e.x - t.x,
                    i = t.y - e.y,
                    o = Math.atan2(i, n),
                    r = Math.round(180 * o / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function Se(e, t) {
                var n = ke(e, t);
                return 45 >= n && n >= 0 ? i : 360 >= n && n >= 315 ? i : n >= 135 && 225 >= n ? o : n > 45 && 135 > n ? a : r
            }

            function Ce() {
                var e = new Date;
                return e.getTime()
            }

            function Ee(t) {
                t = e(t);
                var n = t.offset(),
                    i = {
                        left: n.left,
                        right: n.left + t.outerWidth(),
                        top: n.top,
                        bottom: n.top + t.outerHeight()
                    };
                return i
            }

            function Ne(e, t) {
                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
            }
            var Ae = k || C || !n.fallbackToMouseEvents,
                $e = Ae ? C ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Pe = Ae ? C ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                De = Ae ? C ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                je = Ae ? null : "mouseleave",
                Le = C ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Me = 0,
                Oe = null,
                Ie = 0,
                He = 0,
                Re = 0,
                Fe = 1,
                ze = 0,
                qe = 0,
                Be = null,
                We = e(t),
                Xe = "start",
                Ue = 0,
                Ye = null,
                Qe = 0,
                Ge = 0,
                Ze = 0,
                Ke = 0,
                Ve = 0,
                Je = null,
                et = null;
            try {
                We.bind($e, N), We.bind(Le, P)
            } catch (tt) {
                e.error("events not supported " + $e + "," + Le + " on jQuery.swipe")
            }
            this.enable = function() {
                return We.bind($e, N), We.bind(Le, P), We
            }, this.disable = function() {
                return j(), We
            }, this.destroy = function() {
                return j(), We.data(E, null), We
            }, this.option = function(t, i) {
                if (void 0 !== n[t]) {
                    if (void 0 === i) return n[t];
                    n[t] = i
                } else e.error("Option " + t + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var i = "left",
            o = "right",
            r = "up",
            a = "down",
            s = "in",
            l = "out",
            u = "none",
            c = "auto",
            d = "swipe",
            h = "pinch",
            p = "tap",
            f = "doubletap",
            m = "longtap",
            g = "horizontal",
            v = "vertical",
            w = "all",
            y = 10,
            b = "start",
            _ = "move",
            x = "end",
            T = "cancel",
            k = "ontouchstart" in window,
            S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            C = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            E = "TouchSwipe",
            N = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe"
            };
        e.fn.swipe = function(n) {
            var i = e(this),
                o = i.data(E);
            if (o && "string" == typeof n) {
                if (o[n]) return o[n].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (!(o || "object" != typeof n && n)) return t.apply(this, arguments);
            return i
        }, e.fn.swipe.defaults = N, e.fn.swipe.phases = {
            PHASE_START: b,
            PHASE_MOVE: _,
            PHASE_END: x,
            PHASE_CANCEL: T
        }, e.fn.swipe.directions = {
            LEFT: i,
            RIGHT: o,
            UP: r,
            DOWN: a,
            IN: s,
            OUT: l
        }, e.fn.swipe.pageScroll = {
            NONE: u,
            HORIZONTAL: g,
            VERTICAL: v,
            AUTO: c
        }, e.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: w
        }
    }),
    function(t, n, i, o) {
        function r(e, n) {
            this.element = e, this.options = t.extend(!0, {}, l, n), this.options.share = n.share, this._defaults = l, this._name = a, this.init()
        }
        var a = "sharrre",
            l = {
                className: "sharrre",
                share: {
                    googlePlus: !1,
                    facebook: !1,
                    twitter: !1,
                    digg: !1,
                    delicious: !1,
                    stumbleupon: !1,
                    linkedin: !1,
                    pinterest: !1
                },
                shareTotal: 0,
                template: "",
                title: "",
                url: i.location.href,
                text: i.title,
                urlCurl: "sharrre.php",
                count: {},
                total: 0,
                shorterTotal: !0,
                enableHover: !0,
                enableCounter: !0,
                enableTracking: !1,
                hover: function() {},
                hide: function() {},
                click: function() {},
                render: function() {},
                buttons: {
                    googlePlus: {
                        url: "",
                        urlCount: !1,
                        size: "medium",
                        lang: "en-US",
                        annotation: ""
                    },
                    facebook: {
                        url: "",
                        urlCount: !1,
                        action: "like",
                        layout: "button_count",
                        width: "",
                        send: "false",
                        faces: "false",
                        colorscheme: "",
                        font: "",
                        lang: "en_US"
                    },
                    twitter: {
                        url: "",
                        urlCount: !1,
                        count: "horizontal",
                        hashtags: "",
                        via: "",
                        related: "",
                        lang: "en"
                    },
                    digg: {
                        url: "",
                        urlCount: !1,
                        type: "DiggCompact"
                    },
                    delicious: {
                        url: "",
                        urlCount: !1,
                        size: "medium"
                    },
                    stumbleupon: {
                        url: "",
                        urlCount: !1,
                        layout: "1"
                    },
                    linkedin: {
                        url: "",
                        urlCount: !1,
                        counter: ""
                    },
                    pinterest: {
                        url: "",
                        media: "",
                        description: "",
                        layout: "horizontal"
                    }
                }
            },
            u = {
                googlePlus: "",
                facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
                twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
                digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
                delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
                stumbleupon: "",
                linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
                pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
            },
            c = {
                googlePlus: function(e) {
                    var o = e.options.buttons.googlePlus;
                    t(e.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="' + o.size + '" data-href="' + ("" !== o.url ? o.url : e.options.url) + '" data-annotation="' + o.annotation + '"></div></div>'), n.___gcfg = {
                        lang: e.options.buttons.googlePlus.lang
                    };
                    var r = 0;
                    "undefined" == typeof gapi && 0 == r ? (r = 1, function() {
                        var e = i.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "//apis.google.com/js/plusone.js";
                        var t = i.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }()) : gapi.plusone.go()
                },
                facebook: function(e) {
                    var n = e.options.buttons.facebook;
                    t(e.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' + ("" !== n.url ? n.url : e.options.url) + '" data-send="' + n.send + '" data-layout="' + n.layout + '" data-width="' + n.width + '" data-show-faces="' + n.faces + '" data-action="' + n.action + '" data-colorscheme="' + n.colorscheme + '" data-font="' + n.font + '" data-via="' + n.via + '"></div></div>');
                    var o = 0;
                    "undefined" == typeof FB && 0 == o ? (o = 1, function(e, t, i) {
                        var o, r = e.getElementsByTagName(t)[0];
                        e.getElementById(i) || (o = e.createElement(t), o.id = i, o.src = "//connect.facebook.net/" + n.lang + "/all.js#xfbml=1", r.parentNode.insertBefore(o, r))
                    }(i, "script", "facebook-jssdk")) : FB.XFBML.parse()
                },
                twitter: function(e) {
                    var n = e.options.buttons.twitter;
                    t(e.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + ("" !== n.url ? n.url : e.options.url) + '" data-count="' + n.count + '" data-text="' + e.options.text + '" data-via="' + n.via + '" data-hashtags="' + n.hashtags + '" data-related="' + n.related + '" data-lang="' + n.lang + '">Tweet</a></div>');
                    var o = 0;
                    "undefined" == typeof twttr && 0 == o ? (o = 1, function() {
                        var e = i.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "//platform.twitter.com/widgets.js";
                        var t = i.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }()) : t.ajax({
                        url: "//platform.twitter.com/widgets.js",
                        dataType: "script",
                        cache: !0
                    })
                },
                digg: function(e) {
                    var n = e.options.buttons.digg;
                    t(e.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton ' + n.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent("" !== n.url ? n.url : e.options.url) + '"></a></div>');
                    var o = 0;
                    "undefined" == typeof __DBW && 0 == o && (o = 1, function() {
                        var e = i.createElement("SCRIPT"),
                            t = i.getElementsByTagName("SCRIPT")[0];
                        e.type = "text/javascript", e.async = !0, e.src = "//widgets.digg.com/buttons.js", t.parentNode.insertBefore(e, t)
                    }())
                },
                delicious: function(e) {
                    if ("tall" == e.options.buttons.delicious.size) var n = "width:50px;",
                        i = "height:35px;width:50px;font-size:15px;line-height:35px;",
                        o = "height:18px;line-height:18px;margin-top:3px;";
                    else var n = "width:93px;",
                        i = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
                        o = "float:left;height:20px;line-height:20px;";
                    var r = e.shorterTotal(e.options.count.delicious);
                    "undefined" == typeof r && (r = 0), t(e.element).find(".buttons").append('<div class="button delicious"><div style="' + n + 'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' + i + 'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' + r + '</div><div style="' + o + 'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'), t(e.element).find(".delicious").on("click", function() {
                        e.openPopup("delicious")
                    })
                },
                stumbleupon: function(e) {
                    var o = e.options.buttons.stumbleupon;
                    t(e.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="' + o.layout + '" location="' + ("" !== o.url ? o.url : e.options.url) + '"></su:badge></div>');
                    var r = 0;
                    "undefined" == typeof STMBLPN && 0 == r ? (r = 1, function() {
                        var e = i.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "//platform.stumbleupon.com/1/widgets.js";
                        var t = i.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }(), s = n.setTimeout(function() {
                        "undefined" != typeof STMBLPN && (STMBLPN.processWidgets(), clearInterval(s))
                    }, 500)) : STMBLPN.processWidgets()
                },
                linkedin: function(e) {
                    var o = e.options.buttons.linkedin;
                    t(e.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="' + ("" !== o.url ? o.url : e.options.url) + '" data-counter="' + o.counter + '"></script></div>');
                    var r = 0;
                    "undefined" == typeof n.IN && 0 == r ? (r = 1, function() {
                        var e = i.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "//platform.linkedin.com/in.js";
                        var t = i.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }()) : n.IN.init()
                },
                pinterest: function(e) {
                    var n = e.options.buttons.pinterest;
                    t(e.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' + ("" !== n.url ? n.url : e.options.url) + "&media=" + n.media + "&description=" + n.description + '" class="pin-it-button" count-layout="' + n.layout + '">Pin It</a></div>'),
                        function() {
                            var e = i.createElement("script");
                            e.type = "text/javascript", e.async = !0, e.src = "//assets.pinterest.com/js/pinit.js";
                            var t = i.getElementsByTagName("script")[0];
                            t.parentNode.insertBefore(e, t)
                        }()
                }
            },
            d = {
                googlePlus: function() {},
                facebook: function() {
                    fb = n.setInterval(function() {
                        "undefined" != typeof FB && (FB.Event.subscribe("edge.create", function(e) {
                            _gaq.push(["_trackSocial", "facebook", "like", e])
                        }), FB.Event.subscribe("edge.remove", function(e) {
                            _gaq.push(["_trackSocial", "facebook", "unlike", e])
                        }), FB.Event.subscribe("message.send", function(e) {
                            _gaq.push(["_trackSocial", "facebook", "send", e])
                        }), clearInterval(fb))
                    }, 1e3)
                },
                twitter: function() {
                    tw = n.setInterval(function() {
                        "undefined" != typeof twttr && (twttr.events.bind("tweet", function(e) {
                            e && _gaq.push(["_trackSocial", "twitter", "tweet"])
                        }), clearInterval(tw))
                    }, 1e3)
                },
                digg: function() {},
                delicious: function() {},
                stumbleupon: function() {},
                linkedin: function() {},
                pinterest: function() {}
            },
            h = {
                googlePlus: function(e) {
                    n.open("https://plus.google.com/share?hl=" + e.buttons.googlePlus.lang + "&url=" + encodeURIComponent("" !== e.buttons.googlePlus.url ? e.buttons.googlePlus.url : e.url), "", "toolbar=0, status=0, width=900, height=500")
                },
                facebook: function(e) {
                    n.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("" !== e.buttons.facebook.url ? e.buttons.facebook.url : e.url) + "&t=" + e.text, "", "toolbar=0, status=0, width=900, height=500")
                },
                twitter: function(e) {
                    n.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(e.text) + "&url=" + encodeURIComponent("" !== e.buttons.twitter.url ? e.buttons.twitter.url : e.url) + ("" !== e.buttons.twitter.via ? "&via=" + e.buttons.twitter.via : ""), "", "toolbar=0, status=0, width=650, height=360")
                },
                digg: function(e) {
                    n.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent("" !== e.buttons.digg.url ? e.buttons.digg.url : e.url) + "&title=" + e.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360")
                },
                delicious: function(e) {
                    n.open("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent("" !== e.buttons.delicious.url ? e.buttons.delicious.url : e.url) + "&title=" + e.text, "delicious", "toolbar=no,width=550,height=550")
                },
                stumbleupon: function(e) {
                    n.open("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent("" !== e.buttons.delicious.url ? e.buttons.delicious.url : e.url), "stumbleupon", "toolbar=no,width=550,height=550")
                },
                linkedin: function(e) {
                    n.open("https://www.linkedin.com/cws/share?url=" + encodeURIComponent("" !== e.buttons.delicious.url ? e.buttons.delicious.url : e.url) + "&token=&isFramed=true", "linkedin", "toolbar=no,width=550,height=550")
                },
                pinterest: function(e) {
                    n.open("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent("" !== e.buttons.pinterest.url ? e.buttons.pinterest.url : e.url) + "&media=" + encodeURIComponent(e.buttons.pinterest.media) + "&description=" + e.buttons.pinterest.description, "pinterest", "toolbar=no,width=700,height=300")
                }
            };
        r.prototype.init = function() {
            var e = this;
            "" !== this.options.urlCurl && (u.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus", u.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon"), t(this.element).addClass(this.options.className), "undefined" != typeof t(this.element).data("title") && (this.options.title = t(this.element).attr("data-title")), "undefined" != typeof t(this.element).data("url") && (this.options.url = t(this.element).data("url")), "undefined" != typeof t(this.element).data("text") && (this.options.text = t(this.element).data("text")), t.each(this.options.share, function(t, n) {
                n === !0 && e.options.shareTotal++
            }), e.options.enableCounter === !0 ? t.each(this.options.share, function(t, n) {
                if (n === !0) try {
                    e.getSocialJson(t)
                } catch (i) {}
            }) : "" !== e.options.template ? this.options.render(this, this.options) : this.loadButtons(), t(this.element).hover(function() {
                0 === t(this).find(".buttons").length && e.options.enableHover === !0 && e.loadButtons(), e.options.hover(e, e.options)
            }, function() {
                e.options.hide(e, e.options)
            }), t(this.element).click(function() {
                return e.options.click(e, e.options), !1
            })
        }, r.prototype.loadButtons = function() {
            var e = this;
            t(this.element).append('<div class="buttons"></div>'), t.each(e.options.share, function(t, n) {
                1 == n && (c[t](e), e.options.enableTracking === !0 && d[t]())
            })
        }, r.prototype.getSocialJson = function(e) {
            var n = this,
                i = 0,
                o = u[e].replace("{url}", encodeURIComponent(this.options.url));
            this.options.buttons[e].urlCount === !0 && "" !== this.options.buttons[e].url && (o = u[e].replace("{url}", this.options.buttons[e].url)), "" != o && "" !== n.options.urlCurl ? t.getJSON(o, function(t) {
                if ("undefined" != typeof t.count) {
                    var o = t.count + "";
                    o = o.replace("\xc2\xa0", ""), i += parseInt(o, 10)
                } else t.data && t.data.length > 0 && "undefined" != typeof t.data[0].total_count ? i += parseInt(t.data[0].total_count, 10) : "undefined" != typeof t[0] ? i += parseInt(t[0].total_posts, 10) : "undefined" != typeof t[0];
                n.options.count[e] = i, n.options.total += i, n.renderer(), n.rendererPerso()
            }).error(function() {
                n.options.count[e] = 0, n.rendererPerso()
            }) : (n.renderer(), n.options.count[e] = 0, n.rendererPerso())
        }, r.prototype.rendererPerso = function() {
            var t = 0;
            for (e in this.options.count) t++;
            t === this.options.shareTotal && this.options.render(this, this.options)
        }, r.prototype.renderer = function() {
            var e = this.options.total,
                n = this.options.template;
            this.options.shorterTotal === !0 && (e = this.shorterTotal(e)), "" !== n ? (n = n.replace("{total}", e), t(this.element).html(n)) : t(this.element).html('<div class="box"><a class="count" href="#">' + e + "</a>" + ("" !== this.options.title ? '<a class="share" href="#">' + this.options.title + "</a>" : "") + "</div>")
        }, r.prototype.shorterTotal = function(e) {
            return e >= 1e6 ? e = (e / 1e6).toFixed(2) + "M" : e >= 1e3 && (e = (e / 1e3).toFixed(1) + "k"), e
        }, r.prototype.openPopup = function(e) {
            if (h[e](this.options), this.options.enableTracking === !0) {
                var t = {
                    googlePlus: {
                        site: "Google",
                        action: "+1"
                    },
                    facebook: {
                        site: "facebook",
                        action: "like"
                    },
                    twitter: {
                        site: "twitter",
                        action: "tweet"
                    },
                    digg: {
                        site: "digg",
                        action: "add"
                    },
                    delicious: {
                        site: "delicious",
                        action: "add"
                    },
                    stumbleupon: {
                        site: "stumbleupon",
                        action: "add"
                    },
                    linkedin: {
                        site: "linkedin",
                        action: "share"
                    },
                    pinterest: {
                        site: "pinterest",
                        action: "pin"
                    }
                };
                _gaq.push(["_trackSocial", t[e].site, t[e].action])
            }
        }, r.prototype.simulateClick = function() {
            var e = t(this.element).html();
            t(this.element).html(e.replace(this.options.total, this.options.total + 1))
        }, r.prototype.update = function(e, t) {
            "" !== e && (this.options.url = e), "" !== t && (this.options.text = t)
        }, t.fn[a] = function(e) {
            var n = arguments;
            return e === o || "object" == typeof e ? this.each(function() {
                t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new r(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
                var i = t.data(this, "plugin_" + a);
                i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1))
            }) : void 0
        }
    }(jQuery, window, document), $.fn.nextOrFirst = function(e) {
        var t = this.next(e);
        return t.length ? t : this.prevAll(e).last()
    },
    function(e, t, n) {
        function i(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var o, r = "hashchange",
            a = document,
            s = e.event.special,
            l = a.documentMode,
            u = "on" + r in t && (l === n || l > 7);
        e.fn[r] = function(e) {
            return e ? this.bind(r, e) : this.trigger(r)
        }, e.fn[r].delay = 50, s[r] = e.extend(s[r], {
            setup: function() {
                return u ? !1 : void e(o.start)
            },
            teardown: function() {
                return u ? !1 : void e(o.stop)
            }
        }), o = function() {
            function o() {
                var n = i(),
                    s = d(l);
                n !== l ? (c(l = n, s), e(t).trigger(r)) : s !== l && (location.href = location.href.replace(/#.*/, "") + s), a = setTimeout(o, e.fn[r].delay)
            }
            var a, s = {},
                l = i(),
                u = function(e) {
                    return e
                },
                c = u,
                d = u;
            return s.start = function() {
                a || o()
            }, s.stop = function() {
                a && clearTimeout(a), a = n
            }, s
        }()
    }(jQuery, this), window.allowZoom = !0, window.allowCloseZoom = !0, + function(e) {
        "use strict";

        function t() {
            this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = e(document), this._$window = e(window), this._$body = e(document.body), this._boundClick = e.proxy(this._clickHandler, this)
        }

        function n(t) {
            this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null, this._targetImage = t, this._$body = e(document.body)
        }
        t.prototype.listen = function() {
            this._$body.on("click touchstart", '[data-action="zoom"]', e.proxy(this._zoom, this))
        }, t.prototype._zoom = function(t) {
            var i = t.target;
            if (i && "IMG" == i.tagName && !this._$body.hasClass("zoom-overlay-open")) return t.metaKey || t.ctrlKey ? t.target.getAttribute("data-original") || window.open(t.target.src, "_blank") : void(window.allowZoom && !window.isMobile && (this._activeZoomClose(!0), this._activeZoom = new n(i), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", e.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", e.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", e.proxy(this._touchStart, this)), window.allowCloseZoom = !1, setTimeout(function() {
                window.allowCloseZoom = !0
            }, 600), document.addEventListener("click", this._boundClick, !0), t.stopPropagation()))
        }, t.prototype._activeZoomClose = function(e) {
            this._activeZoom && window.allowCloseZoom && (e ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), window.allowZoom = !1, setTimeout(function() {
                window.allowZoom = !0
            }, 600), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
        }, t.prototype._scrollHandler = function(e) {
            null === this._initialScrollPosition && (this._initialScrollPosition = window.scrollY);
            var t = this._initialScrollPosition - window.scrollY;
            Math.abs(t) >= 40 && this._activeZoomClose()
        }, t.prototype._keyHandler = function(e) {
            27 == e.keyCode && this._activeZoomClose()
        }, t.prototype._clickHandler = function(e) {
            e.stopPropagation(), e.preventDefault(), this._activeZoomClose()
        }, t.prototype._touchStart = function(t) {
            this._initialTouchPosition = t.touches[0].pageY, e(t.target).on("touchmove.zoom", e.proxy(this._touchMove, this))
        }, t.prototype._touchMove = function(t) {
            Math.abs(t.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), e(t.target).off("touchmove.zoom"))
        }, n.OFFSET = 50, n._MAX_WIDTH = 2560, n._MAX_HEIGHT = 4096, n.prototype.zoomImage = function() {
            var t = document.createElement("img");
            t.onload = e.proxy(function() {
                this._fullHeight = Number(t.height), this._fullWidth = Number(t.width), this._zoomOriginal()
            }, this), t.src = this._targetImage.src
        }, n.prototype._zoomOriginal = function() {
            this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", e(this._targetImage).parent().closest('[data-action="zoom"]').addClass("zoom-img-parent"), this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), e(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._overlay = document.createElement("div"), this._overlay.className = "zoom-overlay", e(this._targetImageWrap).before(this._overlay), this._calculateZoom(), this._triggerAnimation()
        }, n.prototype._calculateZoom = function() {
            this._targetImage.offsetWidth;
            var e = this._fullWidth,
                t = this._fullHeight,
                i = (window.scrollY, e / this._targetImage.width),
                o = window.innerHeight - n.OFFSET,
                r = window.innerWidth - n.OFFSET,
                a = e / t,
                s = r / o;
            r > e && o > t ? this._imgScaleFactor = i : s > a ? this._imgScaleFactor = o / t * i : this._imgScaleFactor = r / e * i
        }, n.prototype._triggerAnimation = function() {
            this._targetImage.offsetWidth;
            var t = e(this._targetImage).offset(),
                n = e(window).scrollTop(),
                i = n + window.innerHeight / 2,
                o = window.innerWidth / 2,
                r = t.top + this._targetImage.height / 2,
                a = t.left + this._targetImage.width / 2;
            this._translateY = i - r, this._translateX = o - a, e(this._targetImage).css("transform", "scale(" + this._imgScaleFactor + ")"), e(this._targetImageWrap).css("transform", "translate(" + this._translateX + "px, " + this._translateY + "px) translateZ(0)"), this._$body.addClass("zoom-overlay-open")
        }, n.prototype.close = function() {
            this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), e(this._targetImage).css("transform", ""), e(this._targetImageWrap).css("transform", ""), e(this._targetImage).one(e.support.transition.end, e.proxy(this.dispose, this)).emulateTransitionEnd(500)
        }, n.prototype.dispose = function() {
            this._targetImageWrap && this._targetImageWrap.parentNode && (e(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._$body.removeClass("zoom-overlay-transitioning"), e(".zoom-img-parent").removeClass("zoom-img-parent"), e(".zoom-overlay").remove())
        }, e(function() {
            (new t).listen()
        })
    }(jQuery),
    /* ========================================================================
     * Bootstrap: transition.js v3.3.5
     * http://getbootstrap.com/javascript/#transitions
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    + function(e) {
        "use strict";
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var o = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(o, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery);
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e = document.documentElement,
            t = window,
            n = function(n, i) {
                var o = "x" === i ? "Width" : "Height",
                    r = "scroll" + o,
                    a = "client" + o,
                    s = document.body;
                return n === t || n === e || n === s ? Math.max(e[r], s[r]) - (t["inner" + o] || e[a] || s[a]) : n[r] - n["offset" + o]
            },
            i = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.5",
                init: function(e, i, o) {
                    return this._wdw = e === t, this._target = e, this._tween = o, "object" != typeof i && (i = {
                        y: i
                    }), this.vars = i, this._autoKill = i.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, "max" === i.x ? n(e, "x") : i.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, "max" === i.y ? n(e, "y") : i.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        o = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        r = o - this.yPrev,
                        a = i - this.xPrev;
                    this._autoKill && (!this.skipX && (a > 7 || -7 > a) && n(this._target, "x") > i && (this.skipX = !0), !this.skipY && (r > 7 || -7 > r) && n(this._target, "y") > o && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? i : this.x, this.skipY ? o : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            o = i.prototype;
        i.max = n, o.getX = function() {
            return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, o.getY = function() {
            return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, o._kill = function(e) {
            return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    /*!
     * VERSION: 1.17.0
     * DATE: 2015-05-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    function(e, t) {
        "use strict";
        var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!n.TweenLite) {
            var i, o, r, a, s, l = function(e) {
                    var t, i = e.split("."),
                        o = n;
                    for (t = 0; i.length > t; t++) o[i[t]] = o = o[i[t]] || {};
                    return o
                },
                u = l("com.greensock"),
                c = 1e-10,
                d = function(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                },
                h = function() {},
                p = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(n) {
                        return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                    }
                }(),
                f = {},
                m = function(i, o, r, a) {
                    this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
                    var s = [];
                    this.check = function(u) {
                        for (var c, d, h, p, g = o.length, v = g; --g > -1;)(c = f[o[g]] || new m(o[g], [])).gsClass ? (s[g] = c.gsClass, v--) : u && c.sc.push(this);
                        if (0 === v && r)
                            for (d = ("com.greensock." + i).split("."), h = d.pop(), p = l(d.join("."))[h] = this.gsClass = r.apply(r, s), a && (n[h] = p, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                                    return p
                                }) : i === t && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = e._gsDefine = function(e, t, n, i) {
                    return new m(e, t, n, i)
                },
                v = u._class = function(e, t, n) {
                    return t = t || function() {}, g(e, [], function() {
                        return t
                    }, n), t
                };
            g.globals = n;
            var w = [0, 0, 1, 1],
                y = [],
                b = v("easing.Ease", function(e, t, n, i) {
                    this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? w.concat(t) : w
                }, !0),
                _ = b.map = {},
                x = b.register = function(e, t, n, i) {
                    for (var o, r, a, s, l = t.split(","), c = l.length, d = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (r = l[c], o = i ? v("easing." + r, null, !0) : u.easing[r] || {}, a = d.length; --a > -1;) s = d[a], _[r + "." + s] = _[s + r] = o[s] = e.getRatio ? e : e[s] || new e
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        n = this._power,
                        i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = i.length; --o > -1;) r = i[o] + ",Power" + o, x(new b(null, null, 1, o), r, "easeOut", !0), x(new b(null, null, 2, o), r, "easeIn" + (0 === o ? ",easeNone" : "")), x(new b(null, null, 3, o), r, "easeInOut");
            _.linear = u.easing.Linear.easeIn, _.swing = u.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            r = T.prototype, r.addEventListener = function(e, t, n, i, o) {
                o = o || 0;
                var r, l, u = this._listeners[e],
                    c = 0;
                for (null == u && (this._listeners[e] = u = []), l = u.length; --l > -1;) r = u[l], r.c === t && r.s === n ? u.splice(l, 1) : 0 === c && o > r.pr && (c = l + 1);
                u.splice(c, 0, {
                    c: t,
                    s: n,
                    up: i,
                    pr: o
                }), this !== a || s || a.wake()
            }, r.removeEventListener = function(e, t) {
                var n, i = this._listeners[e];
                if (i)
                    for (n = i.length; --n > -1;)
                        if (i[n].c === t) return void i.splice(n, 1)
            }, r.dispatchEvent = function(e) {
                var t, n, i, o = this._listeners[e];
                if (o)
                    for (t = o.length, n = this._eventTarget; --t > -1;) i = o[t], i && (i.up ? i.c.call(i.s || n, {
                        type: e,
                        target: n
                    }) : i.c.call(i.s || n))
            };
            var k = e.requestAnimationFrame,
                S = e.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                E = C();
            for (i = ["ms", "moz", "webkit", "o"], o = i.length; --o > -1 && !k;) k = e[i[o] + "RequestAnimationFrame"], S = e[i[o] + "CancelAnimationFrame"] || e[i[o] + "CancelRequestAnimationFrame"];
            v("Ticker", function(e, t) {
                var n, i, o, r, l, u = this,
                    d = C(),
                    p = t !== !1 && k,
                    f = 500,
                    m = 33,
                    g = "tick",
                    v = function(e) {
                        var t, a, s = C() - E;
                        s > f && (d += s - m), E += s, u.time = (E - d) / 1e3, t = u.time - l, (!n || t > 0 || e === !0) && (u.frame++, l += t + (t >= r ? .004 : r - t), a = !0), e !== !0 && (o = i(v)), a && u.dispatchEvent(g)
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    v(!0)
                }, u.lagSmoothing = function(e, t) {
                    f = e || 1 / c, m = Math.min(t, f, 0)
                }, u.sleep = function() {
                    null != o && (p && S ? S(o) : clearTimeout(o), i = h, o = null, u === a && (s = !1))
                }, u.wake = function() {
                    null !== o ? u.sleep() : u.frame > 10 && (E = C() - f + 5), i = 0 === n ? h : p && k ? k : function(e) {
                        return setTimeout(e, 0 | 1e3 * (l - u.time) + 1)
                    }, u === a && (s = !0), v(2)
                }, u.fps = function(e) {
                    return arguments.length ? (n = e, r = 1 / (n || 60), l = this.time + r, void u.wake()) : n
                }, u.useRAF = function(e) {
                    return arguments.length ? (u.sleep(), p = e, void u.fps(n)) : p
                }, u.fps(e), setTimeout(function() {
                    p && 5 > u.frame && u.useRAF(!1)
                }, 1500)
            }), r = u.Ticker.prototype = new u.events.EventDispatcher, r.constructor = u.Ticker;
            var N = v("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, B) {
                    s || a.wake();
                    var n = this.vars.useFrames ? q : B;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }
            });
            a = N.ticker = new u.Ticker, r = N.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var A = function() {
                s && C() - E > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), r.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, r.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, r.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, r.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, r.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, r.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var e, t = this._timeline,
                    n = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
            }, r._enabled = function(e, t) {
                return s || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(e, t) {
                return this._kill(e, t), this
            }, r._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, r._swapSelfInParams = function(e) {
                for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                return n
            }, r._callback = function(e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || y)
            }, r.eventCallback = function(e, t, n, i) {
                if ("on" === (e || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[e];
                    null == t ? delete o[e] : (o[e] = t, o[e + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, o[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, r.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, r.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, r.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, r.totalTime = function(e, t, n) {
                if (s || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var i = this._totalDuration,
                            o = this._timeline;
                        if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? i - e : e) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                            for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), L.length && X())
                }
                return this
            }, r.progress = r.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, r.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, r.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        n = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = n - (n - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, r.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, n, i = this._timeline;
                return e != this._paused && i && (s || e || a.wake(), t = i.rawTime(), n = t - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, !0, !0)), this._gc && !e && this._enabled(!0, !1), this
            };
            var $ = v("core.SimpleTimeline", function(e) {
                N.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = $.prototype = new N, r.constructor = $, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(e, t) {
                var n, i;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (i = e._startTime; n && n._startTime > i;) n = n._prev;
                return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
            }, r._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(e, t, n) {
                var i, o = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; o;) i = o._next, (o._active || e >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, n) : o.render((e - o._startTime) * o._timeScale, t, n)), o = i
            }, r.rawTime = function() {
                return s || a.wake(), this._totalTime
            };
            var P = v("TweenLite", function(t, n, i) {
                    if (N.call(this, n, i), this.render = P.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : P.selector(t) || t;
                    var o, r, a, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? z[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (s || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                        for (this._targets = a = d(t), this._propLookup = [], this._siblings = [], o = 0; a.length > o; o++) r = a[o], r ? "string" != typeof r ? r.length && r !== e && r[0] && (r[0] === e || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(o--, 1), this._targets = a = a.concat(d(r))) : (this._siblings[o] = U(r, this, !1), 1 === l && this._siblings[o].length > 1 && Q(r, this, null, 1, this._siblings[o])) : (r = a[o--] = P.selector(r), "string" == typeof r && a.splice(o + 1, 1)) : a.splice(o--, 1);
                    else this._propLookup = {}, this._siblings = U(t, this, !1), 1 === l && this._siblings.length > 1 && Q(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                D = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                j = function(e, t) {
                    var n, i = {};
                    for (n in e) F[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!I[n] || I[n] && I[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                    e.css = i
                };
            r = P.prototype = new N, r.constructor = P, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, P.version = "1.17.0", P.defaultEase = r._ease = new b(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = a, P.autoSleep = 120, P.lagSmoothing = function(e, t) {
                a.lagSmoothing(e, t)
            }, P.selector = e.$ || e.jQuery || function(t) {
                var n = e.$ || e.jQuery;
                return n ? (P.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var L = [],
                M = {},
                O = P._internals = {
                    isArray: p,
                    isSelector: D,
                    lazyTweens: L
                },
                I = P._plugins = {},
                H = O.tweenLookup = {},
                R = 0,
                F = O.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                z = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = N._rootFramesTimeline = new $,
                B = N._rootTimeline = new $,
                W = 30,
                X = O.lazyRender = function() {
                    var e, t = L.length;
                    for (M = {}; --t > -1;) e = L[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    L.length = 0
                };
            B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(X, 1), N._updateRoot = P.render = function() {
                var e, t, n;
                if (L.length && X(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), L.length && X(), a.frame >= W) {
                    W = a.frame + (parseInt(P.autoSleep, 10) || 120);
                    for (n in H) {
                        for (t = H[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete H[n]
                    }
                    if (n = B._first, (!n || n._paused) && P.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || a.sleep()
                    }
                }
            }, a.addEventListener("tick", N._updateRoot);
            var U = function(e, t, n) {
                    var i, o, r = e._gsTweenID;
                    if (H[r || (e._gsTweenID = r = "t" + R++)] || (H[r] = {
                            target: e,
                            tweens: []
                        }), t && (i = H[r].tweens, i[o = i.length] = t, n))
                        for (; --o > -1;) i[o] === t && i.splice(o, 1);
                    return H[r].tweens
                },
                Y = function(e, t, n, i) {
                    var o, r, a = e.vars.onOverwrite;
                    return a && (o = a(e, t, n, i)), a = P.onOverwrite, a && (r = a(e, t, n, i)), o !== !1 && r !== !1
                },
                Q = function(e, t, n, i, o) {
                    var r, a, s, l;
                    if (1 === i || i >= 4) {
                        for (l = o.length, r = 0; l > r; r++)
                            if ((s = o[r]) !== t) s._gc || s._kill(null, e, t) && (a = !0);
                            else if (5 === i) break;
                        return a
                    }
                    var u, d = t._startTime + c,
                        h = [],
                        p = 0,
                        f = 0 === t._duration;
                    for (r = o.length; --r > -1;)(s = o[r]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (u = u || G(t, 0, f), 0 === G(s, u, f) && (h[p++] = s)) : d >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > d && ((f || !s._initted) && 2e-10 >= d - s._startTime || (h[p++] = s)));
                    for (r = p; --r > -1;)
                        if (s = h[r], 2 === i && s._kill(n, e, t) && (a = !0), 2 !== i || !s._firstPT && s._initted) {
                            if (2 !== i && !Y(s, t)) continue;
                            s._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                G = function(e, t, n) {
                    for (var i = e._timeline, o = i._timeScale, r = e._startTime; i._timeline;) {
                        if (r += i._startTime, o *= i._timeScale, i._paused) return -100;
                        i = i._timeline
                    }
                    return r /= o, r > t ? r - t : n && r === t || !e._initted && 2 * c > r - t ? c : (r += e.totalDuration() / e._timeScale / o) > t + c ? 0 : r - t - c
                };
            r._init = function() {
                var e, t, n, i, o, r = this.vars,
                    a = this._overwrittenProps,
                    s = this._duration,
                    l = !!r.immediateRender,
                    u = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {};
                    for (i in r.startAt) o[i] = r.startAt[i];
                    if (o.overwrite = !1, o.immediateRender = !0, o.lazy = l && r.lazy !== !1, o.startAt = o.delay = null, this._startAt = P.to(this.target, 0, o), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== s) return
                } else if (r.runBackwards && 0 !== s)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), n = {};
                        for (i in r) F[i] && "autoCSS" !== i || (n[i] = r[i]);
                        if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && r.lazy !== !1, n.immediateRender = l, this._startAt = P.to(this.target, 0, n), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, r.easeParams) : _[u] || P.defaultEase : P.defaultEase, r.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (t && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(t, n, i, o) {
                var r, a, s, l, u, c;
                if (null == t) return !1;
                M[t._gsTweenID] && X(), this.vars.css || t.style && t !== e && t.nodeType && I.css && this.vars.autoCSS !== !1 && j(this.vars, t);
                for (r in this.vars) {
                    if (c = this.vars[r], F[r]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (I[r] && (l = new I[r])._onInitTween(t, this.vars[r], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) n[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = n[r] = u = {
                        _next: this._firstPT,
                        t: t,
                        p: r,
                        f: "function" == typeof t[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return o && this._kill(o, t) ? this._initProps(t, n, i, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && Q(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[t._gsTweenID] = !0), s)
            }, r.render = function(e, t, n) {
                var i, o, r, a, s = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > u || u === c && "isPause" !== this.data) && u !== e && (n = !0, u > c && (o = "onReverseComplete")), this._rawPrevTime = a = !t || e || u === e ? e : c);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && u > 0) && (o = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !t || e || u === e ? e : c)), this._initted || (n = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var d = e / l,
                        h = this._easeType,
                        p = this._easePower;
                    (1 === h || 3 === h && d >= .5) && (d = 1 - d), 3 === h && (d *= 2), 1 === p ? d *= d : 2 === p ? d *= d * d : 3 === p ? d *= d * d * d : 4 === p && (d *= d * d * d * d), this.ratio = 1 === h ? 1 - d : 2 === h ? d : .5 > e / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== s || n) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = u, L.push(this), void(this._lazy = [e, t]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || (this._time !== s || i) && this._callback("onUpdate")), o && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, r._kill = function(e, t, n) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : P.selector(t) || t;
                var i, o, r, a, s, l, u, c, d, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                if ((p(t) || D(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        s = this._propLookup, o = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        if (u = e || s, c = e !== o && "all" !== o && e !== s && ("object" != typeof e || !e._tempKill), n && (P.onOverwrite || this.vars.onOverwrite)) {
                            for (r in u) s[r] && (d || (d = []), d.push(r));
                            if ((d || !e) && !Y(this, n, t, d)) return !1
                        }
                        for (r in u)(a = s[r]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[r]), c && (o[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], N.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, r._enabled = function(e, t) {
                if (s || a.wake(), e && this._gc) {
                    var n, i = this._targets;
                    if (i)
                        for (n = i.length; --n > -1;) this._siblings[n] = U(i[n], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return N.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? P._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, P.to = function(e, t, n) {
                return new P(e, t, n)
            }, P.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new P(e, t, n)
            }, P.fromTo = function(e, t, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new P(e, t, i)
            }, P.delayedCall = function(e, t, n, i, o) {
                return new P(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, P.set = function(e, t) {
                return new P(e, 0, t)
            }, P.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : P.selector(e) || e;
                var n, i, o, r;
                if ((p(e) || D(e)) && "number" != typeof e[0]) {
                    for (n = e.length, i = []; --n > -1;) i = i.concat(P.getTweensOf(e[n], t));
                    for (n = i.length; --n > -1;)
                        for (r = i[n], o = n; --o > -1;) r === i[o] && i.splice(n, 1)
                } else
                    for (i = U(e).concat(), n = i.length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                return i
            }, P.killTweensOf = P.killDelayedCallsTo = function(e, t, n) {
                "object" == typeof t && (n = t, t = !1);
                for (var i = P.getTweensOf(e, t), o = i.length; --o > -1;) i[o]._kill(n, e)
            };
            var Z = v("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Z.prototype
            }, !0);
            if (r = Z.prototype, Z.version = "1.10.1", Z.API = 2, r._firstPT = null, r._addTween = function(e, t, n, i, o, r) {
                    var a, s;
                    return null != i && (a = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - Number(n) : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = s = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: n,
                        c: a,
                        f: "function" == typeof e[t],
                        n: o || t,
                        r: r
                    }, s._next && (s._next._prev = s), s) : void 0
                }, r.setRatio = function(e) {
                    for (var t, n = this._firstPT, i = 1e-6; n;) t = n.c * e + n.s, n.r ? t = Math.round(t) : i > t && t > -i && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
                }, r._kill = function(e) {
                    var t, n = this._overwriteProps,
                        i = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                    for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, r._roundProps = function(e, t) {
                    for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
                }, P._onPluginEvent = function(e, t) {
                    var n, i, o, r, a, s = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; s;) {
                            for (a = s._next, i = o; i && i.pr > s.pr;) i = i._next;
                            (s._prev = i ? i._prev : r) ? s._prev._next = s: o = s, (s._next = i) ? i._prev = s : r = s, s = a
                        }
                        s = t._firstPT = o
                    }
                    for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (n = !0), s = s._next;
                    return n
                }, Z.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === Z.API && (I[(new e[t])._propName] = e[t]);
                    return !0
                }, g.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, n = e.propName,
                        i = e.priority || 0,
                        o = e.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            Z.call(this, n, i), this._overwriteProps = o || []
                        }, e.global === !0),
                        s = a.prototype = new Z(n);
                    s.constructor = a, a.API = e.API;
                    for (t in r) "function" == typeof e[t] && (s[r[t]] = e[t]);
                    return a.version = e.version, Z.activate([a]), a
                }, i = e._gsQueue) {
                for (o = 0; i.length > o; o++) i[o]();
                for (r in f) f[r].func || e.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            s = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), /webkit.*mobile/i.test(navigator.userAgent) && ! function(e) {
        e.fn.offsetOld = e.fn.offset, e.fn.offset = function() {
            var e = this.offsetOld();
            return e.top -= window.scrollY, e.left -= window.scrollX, e
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        e.addEventListener("DOMContentLoaded", function() {
            var n = t.location.href.replace(t.location.hash, "");
            [].slice.call(e.querySelectorAll("use[*|href]")).filter(function(e) {
                return 0 === e.getAttribute("xlink:href").indexOf("#")
            }).forEach(function(e) {
                e.setAttribute("xlink:href", n.replace("#", "") + e.getAttribute("xlink:href"))
            })
        }, !1)
    }(document, window), window.inAction = 1, window.allowSlide = 1, window.blockScroll = 1, window.mouseDown = 0, window.direction = "", window.slideSpeed = 1e3, window.cleanupDelay = 1450, window.effectSpeed = 800, window.horizontalMode = 0, window.sidebarShown = 0, window.loadingProgress = 0, window.customScroll = 1, window.staticPage = 0;
var $html = $("html");
window.isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0), window.isMobile && $html.addClass("mobile"), window.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, window.isSafari = /^((?!chrome).)*safari/i.test(navigator.userAgent), window.isChromeiOS = navigator.userAgent.match("CriOS"), window.isMSIE = navigator.userAgent.match("MSIE"), window.isAndroid = navigator.userAgent.indexOf("android") > -1, window.isiPad = null !== navigator.userAgent.match(/iPad/i), window.isWindows = -1 !== navigator.platform.toUpperCase().indexOf("WIN"), window.isMac = -1 !== navigator.platform.toUpperCase().indexOf("MAC"), window.isSafari && $html.addClass("safari"), window.isFirefox && $html.addClass("firefox"), window.isChrome && $html.addClass("chrome"), window.isMSIE && $html.addClass("msie"), window.isAndroid && $html.addClass("android"), window.isWindows && $html.addClass("windows"), window.isRetina = window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3, window.isRetina && $html.addClass("retina"), $(document).ready(function() {
        "use strict";

        function e() {
            var e = window.location.href.split("#")[1];
            if (e && $('.slide[name="' + e + '"]').length > 0) {
                var t = $('.slide[name="' + e + '"]');
                window.isMobile && u.hasClass("simplifiedMobile") ? (r(), u.animate({
                    scrollTop: t.position().top
                }, 1e3)) : window.stage = $(".slide").index(t) + 1
            }
        }

        function t(e) {
            if (!window.isMobile || !u.hasClass("simplifiedMobile")) {
                o();
                var t = $(".slide").eq(e - 1),
                    n = $(".slide.selected"),
                    r = n.index(".slide") + 1;
                l(), i(), window.allowSlide = 1, u.removeClass("sidebarShown lastSlide firstSlide"), 1 === window.stage && u.addClass("firstSlide"), window.stages === window.stage && u.addClass("lastSlide"), u.removeClassByPrefix("stage-").addClass("stage-" + window.stage), t.hasClass("whiteSlide") ? u.addClass("whiteSlide") : u.removeClass("whiteSlide"), r !== e && (n.removeClass("selected").removeClass(window.direction).addClass("active"), t.removeClass("before after").addClass("selected active").addClass(window.direction), t.prevAll(".slide").addClass("before").removeClass("after"), t.nextAll(".slide").addClass("after").removeClass("before")), t.attr("name") ? window.location.hash = t.attr("name") : window.location.hash = "", t.find(".content").scrollTop(0), window.loaded && (clearTimeout(window.resetOldSlide), window.resetOldSlide = setTimeout(function() {
                    r !== e && n.removeClass("active animate"), t.addClass("animate"), t.find(".content"), window.blockScroll = 0
                }, window.slideSpeed), window.loaded && (window.blockScroll = 1, $(".done").removeClass("done"), clearTimeout(window.clearElementAnimation), window.clearElementAnimation = setTimeout(function() {
                    $(".selected [class*='ae-']").addClass("done")
                }, window.slideSpeed + window.effectSpeed + window.cleanupDelay))), window.debugMode && (window.location.hash = e)
            }
        }

        function n(e) {
            "increase" === e ? e = window.stage + 1 >= window.stages ? window.stages : window.stage + 1 : "decrease" === e && (e = window.stage - 1 < 1 ? 1 : window.stage - 1), e !== window.stage && 1 !== window.inAction && (window.inAction = 1, window.stage = e, t(window.stage), setTimeout(function() {
                window.inAction = 0
            }, window.slideSpeed))
        }

        function i() {
            $(".zoom-overlay-open").length > 0 && setTimeout(function() {
                $(".zoom-img").click()
            }, window.slideSpeed)
        }

        function o() {
            setTimeout(function() {
                $(f).length > 0 && $(f).each(function(e, t) {
                    $(t).find("li.selected").removeClass("selected"), $(t).find("li").eq(window.stage - 1).addClass("selected")
                })
            }, 5)
        }

        function r() {
            u.removeClass("sidebarShown"), $(".sidebar").removeClass("visible"), window.sidebarShown = 0, window.allowSlide = 1
        }

        function a() {
            var e = $(".popupShown .popup.visible iframe");
            $(e).attr("src", $(e).attr("src")), u.removeClass("popupShown"), $(".popup.visible").removeClass("visible"), window.allowSlide = 1, window.popupShown = 0
        }

        function s() {
            var e = $(".grid.equal");
            e.length && $(e).each(function(e, t) {
                var n = $(window).width(),
                    i = $(t).hasClass("later") ? 767 : 1024,
                    o = $(t).find(".equalElement");
                if (n > i) {
                    var r = 0;
                    $(o).each(function(e, t) {
                        $(t).css("height", "auto"), r < $(t).outerHeight() && (r = $(t).outerHeight())
                    }), $(t).find(".equalElement").each(function(e, t) {
                        $(t).css("height", r + "px")
                    })
                } else $(o).css("height", "auto")
            })
        }

        function l() {
            window.dropdownShown && ($(".dropdown").addClass("hide"), window.hideDropdown = setTimeout(function() {
                $(".dropdown").removeClass("show hide"), u.removeClass("dropdownShown")
            }, 500), window.dropdownShown = !1)
        }
        var u = $("body");
        (window.isChromeiOS || window.isAndroid) && u.addClass("simplifiedMobile"), $html.addClass("page-ready"), u.hasClass("fast") ? (window.slideSpeed = 600, window.cleanupDelay = 1200, window.effectSpeed = 600) : u.hasClass("slow") && (window.slideSpeed = 1400, window.cleanupDelay = 2e3, window.effectSpeed = 1e3), window.stage = 1, window.stages = $(".slide").size(), e();
        var c = window.location.href.split("#")[1];
        window.debugMode && !isNaN(c) && (window.stage = Number(c));
        var d = [];
        $("*").each(function() {
            "none" !== $(this).css("background-image") ? d.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "")) : $(this).is("img") && d.push($(this).attr("src"))
        }), window.images = d.length, $.cacheImage(d, {
            complete: function() {
                window.loadingProgress++
            }
        });
        var h = setInterval(function() {
            var e = 50 * (window.loadingProgress / window.images);
            $(".loadingIcon .dash").attr("stroke-dasharray", e + ",100"), $(".loadingIcon").redraw(), window.loaded && clearInterval(h)
        }, 800);
        u.hasClass("horizontal") && (window.horizontalMode = 1), u.hasClass("animated") && (window.animated = 1), u.hasClass("defaultScroll") && (window.customScroll = 0), u.hasClass("staticPage") && (window.staticPage = 1), $(window).load(function() {
            $html.addClass("page-loaded"), window.inAction = 0, window.loaded = 1, window.blockScroll = 0, window.animated && setTimeout(function() {
                t(window.stage)
            }, 500)
        }), t(window.stage), $(".animated [class*='ae-']:not('.done')").click(function() {
            $(this).addClass("done")
        }), $(".nextSlide").on("mouseup touchstart", function() {
            n("increase")
        }), $(".prevSlide").on("mouseup touchstart", function() {
            n("decrease");
        }), $(".slides").bind("mousewheel resize", function(e) {
            window.energy = e.originalEvent.wheelDelta, window.scrollsize = Math.abs(Math.round(e.deltaY));
            var n = $(".slide.selected .content"),
                i = $(n).scrollTop(),
                o = $(n).find(".container").outerHeight(),
                r = 30;
            if (window.isWindows && (r = 1), e.deltaY >= 0 ? window.scrollDirection = "up" : window.scrollDirection = "down", "up" === window.scrollDirection ? i -= window.scrollsize : "down" === window.scrollDirection && (i += window.scrollsize), window.staticPage && $(n).scrollTop(i), o > $(window).height() && !window.staticPage && (window.allowSlide = 0, "up" === window.scrollDirection && 0 === $(n).scrollTop() ? window.allowSlide = 1 : "down" === window.scrollDirection && $(n).scrollTop() + $(window).height() >= o && (window.allowSlide = 1), !window.sidebarShown && !window.popupShown && !window.blockScroll))
                if (!window.isFirefox && window.customScroll) {
                    e.preventDefault();
                    var a = window.energy;
                    a > 1500 && (a = 1500), -1e3 > a && (a = -1500);
                    var s = a / 120,
                        l = .5,
                        u = 100,
                        c = i,
                        d = c - parseInt(s * u);
                    TweenLite.to($(n), l, {
                        scrollTo: {
                            y: d,
                            autoKill: !0
                        },
                        ease: Power1.easeOut,
                        overwrite: 5
                    })
                } else window.isWindows || $(n).scrollTop(i);
            window.scrollsize >= r && window.allowSlide && !window.sidebarShown && !window.popupShown && ("down" === window.scrollDirection && window.stage !== window.stages || "up" === window.scrollDirection && 1 !== window.stage) && 1 !== window.inAction && (window.inAction = 1, "down" === window.scrollDirection ? window.stage++ : "up" === window.scrollDirection && window.stage--, window.stage > window.stages ? window.stage = window.stages : window.stage < 1 && (window.stage = 1), t(window.stage), setTimeout(function() {
                window.inAction = 0
            }, window.slideSpeed))
        }), $(".mobile .slides:not(.simplifiedMobile):not(.simplified)").swipe({
            swipeStatus: function(e, t, i, o) {
                window.allowSwipeUp = 1, window.allowSwipeDown = 1;
                var r = $(".slide.selected .content"),
                    a = $(r).find(".container").outerHeight(),
                    s = "up",
                    l = "down",
                    u = 30,
                    c = window.innerHeight;
                window.sidebarShown && (r = $(".sidebar .content")), window.popupShown && (r = $(".popup .content")), "start" === t && (window.scrollTop = $(r).scrollTop()), window.horizontalMode && (s = "left", l = "right"), !window.horizontalMode && a > c && (window.scrollTop + c < a ? window.allowSwipeUp = 0 : window.scrollTop > 0 && (window.allowSwipeDown = 0)), window.sidebarShown || (window.horizontalMode ? i === s && o > u ? n("increase") : i === l && o > u && n("decrease") : i === s && o > u && window.allowSwipeUp && window.allowSlide ? n("increase") : i === l && o > u && window.allowSwipeDown && window.allowSlide && n("decrease"))
            },
            maxTimeThreshold: 30,
            fingers: "all",
            allowPageScroll: "vertical"
        }), $(".panel .compact").length > 0 && $(".panel .compact").each(function(e, t) {
            var n = $(t).parents(".panel"),
                i = $(n).find(".desktop"),
                o = t,
                r = $(n).hasClass("forceMobileView");
            $(window).on("load resize", function() {
                if ((window.isMobile || $(document).width() < 767) && r) $(i).addClass("hidden"), $(o).removeClass("hidden");
                else {
                    $(i).removeClass("hidden"), $(o).addClass("hidden");
                    var e = 0;
                    i.children().each(function() {
                        e += $(this).outerWidth() > $(this).children().outerWidth() ? Math.round($(this).outerWidth()) : Math.round($(this).children().outerWidth())
                    }), e + Math.round(.1 * $(document).width()) > $(document).width() + 2 || (window.isMobile || $(document).width() < 767) && r ? ($(i).addClass("hidden"), $(o).removeClass("hidden")) : ($(i).removeClass("hidden"), $(o).addClass("hidden"))
                }
            })
        }), $(window).on("keydown", function(e) {
            var t = 2.5,
                o = .5,
                s = 50,
                u = $(".slide.selected .content"),
                c = $(u).scrollTop(),
                d = c + parseInt(t * s);
            37 === e.keyCode && window.horizontalMode && n("decrease"), 38 === e.keyCode && (window.horizontalMode ? TweenLite.to($(u), o, {
                scrollTo: {
                    y: d,
                    autoKill: !0
                },
                ease: Power1.easeOut,
                overwrite: 5
            }) : n("decrease")), 39 === e.keyCode && window.horizontalMode && n("increase"), 40 === e.keyCode && (window.horizontalMode ? TweenLite.to($(u), o, {
                scrollTo: {
                    y: d,
                    autoKill: !0
                },
                ease: Power1.easeOut,
                overwrite: 5
            }) : n("increase")), 27 === e.keyCode && (r(), l(), a(), i())
        });
        var p = $(".navigation"),
            f = $(p).find("ul");
        $(f).length > 0 && ($(f).empty(), $(f).each(function(e, t) {
            for (var n = 1; n <= window.stages; n++) {
                var i = $(".slide:eq(" + (n - 1) + ")").data("title");
                void 0 === i ? window.debugMode ? $(t).append('<li class="tooltip" data-title="#' + n + '"></li>') : $(t).append("<li></li>") : $(t).append('<li class="tooltip" data-title="' + i + '"></li>')
            }
        }), $(".navigation li").on("click touchend", function() {
            n($(this).index() + 1)
        }), $(window).on("load resize", function() {
            var e = $(window).height() - .1112 * $(window).width() - 100,
                t = $(".side").removeClass("compact").find("ul"),
                n = 0;
            $(t).children().each(function() {
                n += $(this).outerWidth() > $(this).children().outerWidth() ? Math.round($(this).outerWidth()) : Math.round($(this).children().outerWidth())
            }), n > e ? $(".side").addClass("compact") : $(".side").removeClass("compact")
        })), $("a[href^=#][target!='_blank']").click(function(e) {
            var n = $(this).attr("href").split("#")[1];
            if (n && $('.slide[name="' + n + '"]').length > 0) {
                e.preventDefault();
                var i = $('.slide[name="' + n + '"]');
                window.isMobile && u.hasClass("simplifiedMobile") ? (r(), u.animate({
                    scrollTop: i.position().top
                }, 1e3)) : (window.stage = $(".slide").index(i) + 1, t(window.stage))
            }
        }), $(".sidebarTrigger").on("click", function() {
            var e = $(this).data("sidebar-id"),
                t = $('.sidebar[data-sidebar-id="' + e + '"]');
            t.length > 0 && (window.sidebarShown = 1, window.allowSlide = 0, $(t).addClass("visible"), u.addClass("sidebarShown"), $(t).find(".content").scrollTop(0)), l()
        }), $(document).on("mouseup touchstart", function(e) {
            var t = $(".sidebarShown .sidebar, .dropdownTrigger");
            t.is(e.target) || 0 !== t.has(e.target).length || r()
        }), $(".sidebar .close").on("click touchstart", function() {
            r()
        }), $(".popupTrigger").on("click", function() {
            var e = $(this).data("popup-id"),
                t = $('.popup[data-popup-id="' + e + '"]');
            t.length > 0 && ($(t).addClass("visible"), u.toggleClass("popupShown"), $(t).scrollTop(0), window.allowSlide = 0, window.popupShown = 1), l()
        }), $(document).on("click touchend", function(e) {
            var t = $(".popupShown .popup .popupContent, .popupTrigger");
            !t.is(e.target) && 0 === t.has(e.target).length && t.length > 0 && a()
        }), $(".popup .close").on("click touchstart", function() {
            a()
        }), $(window).on("resize load", function() {
            s()
        }), $(window).on("resize", function() {
            $html.addClass("resizing")
        }).on("resizeEnd", function() {
            $html.removeClass("resizing")
        });
        var m = $(".slider");
        $(m).length > 0 && $(m).each(function(e, t) {
            $(t).hasClass("clickable") && $(t).on("mousedown", function() {
                var e = $(this),
                    t = $(e).find(".selected"),
                    n = $(t).nextOrFirst("li"),
                    i = $(n).index(),
                    o = $(e).data("slider-id"),
                    r = $('.controller[data-slider-id="' + o + '"]');
                $(t).removeClass("selected"), $(n).addClass("selected"), o && $(r).length > 0 && ($(r).find(".selected").removeClass("selected"), $(r).children("li:eq(" + i + ")").addClass("selected"))
            })
        });
        var g = $(".controller");
        $(g).length > 0 && $(g).find("li").each(function(e, t) {
            $(t).on("mousedown", function() {
                var e = $(this),
                    t = $(e).closest(".controller").find(".selected"),
                    n = $(this).index(),
                    i = $(e).closest(".controller").data("slider-id");
                $(e).hasClass("selected") || ($(t).removeClass("selected"), $(e).addClass("selected"), $('.slider[data-slider-id="' + i + '"]').find(".selected").removeClass("selected"), $('.slider[data-slider-id="' + i + '"]').children("li:eq(" + n + ")").addClass("selected"))
            })
        }), window.dropdownShown = !1, $(".dropdownTrigger").click(function() {
            if (window.dropdownShown) l();
            else {
                var e = $(this).offset(),
                    t = Math.ceil(e.top),
                    n = Math.ceil(e.left),
                    i = $(this).data("dropdown-id"),
                    o = $('.dropdown[data-dropdown-id="' + i + '"]');
                clearTimeout(window.hideDropdown), $(o).hasClass("bottom") ? (t -= $(o).outerHeight(), console.log($(o).outerHeight())) : t += $(this).outerHeight(), $(o).hasClass("right") && (n = n - $(o).outerWidth() + $(this).outerWidth()), $(o).removeClass("show hide").addClass("show").css("top", t).css("left", n), u.addClass("dropdownShown"), window.dropdownShown = !0
            }
        }), $(window).on("resize", function() {
            window.dropdownShown && ($(".dropdown").removeClass("show"), u.removeClass("dropdownShown"), window.dropdownShown = !1)
        }), $(document).on("mouseup touchstart", function(e) {
            var t = $(".dropdownShown .dropdown");
            t.is(e.target) || 0 !== t.has(e.target).length || l()
        }), window.shareUrl = window.location.href, $(".share").data("url") && (window.shareUrl = $(".dropdown").data("url")), window.shareText = document.title, $(".share").data("text") && (window.shareText = $(".dropdown").data("url")), $(".share").sharrre({
            enableHover: !1,
            shorterTotal: !0,
            url: window.shareUrl,
            text: window.shareText,
            enableCounter: !1,
            share: {
                twitter: !0,
                facebook: !0,
                pinterest: !0,
                googlePlus: !0,
                stumbleupon: !0,
                linkedin: !0
            },
            buttons: {
                pinterest: {
                    media: $(".dropdown").data("pinterest-image"),
                    description: $(".dropdown").data("text") + " " + $(".dropdown").data("url")
                }
            },
            template: $(".share").html(),
            render: function(e) {
                $(e.element).on("click touchstart", ".twitter", function() {
                    e.openPopup("twitter")
                }), $(e.element).on("click touchstart", ".facebook", function() {
                    e.openPopup("facebook")
                }), $(e.element).on("click touchstart", ".pinterest", function() {
                    e.openPopup("pinterest")
                }), $(e.element).on("click touchstart", ".googlePlus", function() {
                    e.openPopup("googlePlus")
                }), $(e.element).on("click touchstart", ".stumbleupon", function() {
                    e.openPopup("stumbleupon")
                }), $(e.element).on("click touchstart", ".linkedin", function() {
                    e.openPopup("linkedin")
                }), $(e.element).on("click touchstart", ".mail", function() {
                    var e = $(this).data("subject") ? $(this).data("subject") : "",
                        t = $(this).data("body") ? $(this).data("body") : "",
                        n = window.location.href;
                    $(".dropdown").data("url") && (n = $(".dropdown").data("url")), window.location.href = "mailto:?Subject=" + encodeURIComponent(e) + "&Body=" + encodeURIComponent(t) + " " + n
                })
            }
        })
    }),
    function() {
        var e, t, n, i, o, r, a, s, l, u, c, d, h, p, f, m, g, v, w, y, b, _, x, T, k, S, C, E, N, A, $, P, D, j, L, M, O, I, H, R, F, z, q, B, W, X, U, Y, Q, G, Z, K, V, J, ee, te, ne = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            ie = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) oe.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            oe = {}.hasOwnProperty,
            re = [].slice,
            ae = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            };
        j = {}, h = 10, K = !1, H = null, w = null, P = null, z = null, te = null, i = {
            BEFORE_CHANGE: "page:before-change",
            FETCH: "page:fetch",
            RECEIVE: "page:receive",
            CHANGE: "page:change",
            UPDATE: "page:update",
            LOAD: "page:load",
            RESTORE: "page:restore",
            BEFORE_UNLOAD: "page:before-unload",
            EXPIRE: "page:expire"
        }, T = function(e) {
            var t;
            return e = new n(e), U(), d(), null != H && H.start(), K && (t = V(e.absolute)) ? (k(t), S(e, null, !1)) : S(e, G)
        }, V = function(e) {
            var t;
            return t = j[e], t && !t.transitionCacheDisabled ? t : void 0
        }, b = function(e) {
            return null == e && (e = !0), K = e
        }, y = function(e) {
            return null == e && (e = !0), u ? e ? null != H ? H : H = new r("html") : (null != H && H.uninstall(), H = null) : void 0
        }, S = function(e, t, n) {
            return null == n && (n = !0), J(i.FETCH, {
                url: e.absolute
            }), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", e.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", z), te.onload = function() {
                var n;
                return J(i.RECEIVE, {
                    url: e.absolute
                }), (n = I()) ? (q(e), B(), p.apply(null, x(n)), D(), "function" == typeof t && t(), J(i.LOAD)) : document.location.href = v() || e.absolute
            }, H && n && (te.onprogress = function(e) {
                return function(e) {
                    var t;
                    return t = e.lengthComputable ? e.loaded / e.total * 100 : H.value + (100 - H.value) / 10, H.advanceTo(t)
                }
            }(this)), te.onloadend = function() {
                return te = null
            }, te.onerror = function() {
                return document.location.href = e.absolute
            }, te.send()
        }, k = function(e) {
            return null != te && te.abort(), p(e.title, e.body), R(e), J(i.RESTORE)
        }, d = function() {
            var e;
            return e = new n(w.url), j[e.absolute] = {
                url: e.relative,
                body: document.body,
                title: document.title,
                positionY: window.pageYOffset,
                positionX: window.pageXOffset,
                cachedAt: (new Date).getTime(),
                transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
            }, m(h)
        }, M = function(e) {
            return null == e && (e = h), /^[\d]+$/.test(e) ? h = parseInt(e) : void 0
        }, m = function(e) {
            var t, n, o, r, a, s;
            for (a = Object.keys(j), t = a.map(function(e) {
                    return j[e].cachedAt
                }).sort(function(e, t) {
                    return t - e
                }), s = [], n = 0, r = a.length; r > n; n++) o = a[n], j[o].cachedAt <= t[e] && (J(i.EXPIRE, j[o]), s.push(delete j[o]));
            return s
        }, p = function(t, n, o, r) {
            return J(i.BEFORE_UNLOAD), document.title = t, document.documentElement.replaceChild(n, document.body), null != o && e.update(o), Z(), r && _(), w = window.history.state, null != H && H.done(), J(i.CHANGE), J(i.UPDATE)
        }, _ = function() {
            var e, t, n, i, o, r, a, s, l, u, c, d;
            for (d = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, o = d.length; o > n; n++)
                if (c = d[n], "" === (l = c.type) || "text/javascript" === l) {
                    for (t = document.createElement("script"), u = c.attributes, i = 0, r = u.length; r > i; i++) e = u[i], t.setAttribute(e.name, e.value);
                    c.hasAttribute("async") || (t.async = !1), t.appendChild(document.createTextNode(c.innerHTML)), s = c.parentNode, a = c.nextSibling, s.removeChild(c), s.insertBefore(t, a)
                }
        }, Y = function(e) {
            return e.innerHTML = e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), e
        }, Z = function() {
            var e, t;
            return e = (t = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length - 1], e && document.activeElement !== e ? e.focus() : void 0
        }, q = function(e) {
            return (e = new n(e)).absolute !== z ? window.history.pushState({
                turbolinks: !0,
                url: e.absolute
            }, "", e.absolute) : void 0
        }, B = function() {
            var e, t;
            return (e = te.getResponseHeader("X-XHR-Redirected-To")) ? (e = new n(e), t = e.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", e.href + t)) : void 0
        }, v = function() {
            var e;
            return null != (e = te.getResponseHeader("Location")) && new n(e).crossOrigin() ? e : void 0
        }, U = function() {
            return z = document.location.href
        }, X = function() {
            return window.history.replaceState({
                turbolinks: !0,
                url: document.location.href
            }, "", document.location.href)
        }, W = function() {
            return w = window.history.state
        }, D = function() {
            var e;
            return navigator.userAgent.match(/Firefox/) && !(e = new n).hasNoHash() ? (window.history.replaceState(w, "", e.withoutHash()), document.location.hash = e.hash) : void 0
        }, R = function(e) {
            return window.scrollTo(e.positionX, e.positionY)
        }, G = function() {
            return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
        }, f = function(e) {
            var t, n, i;
            if (null == e || "object" != typeof e) return e;
            t = new e.constructor;
            for (n in e) i = e[n], t[n] = f(i);
            return t
        }, O = function(e) {
            var t, n;
            return n = (null != (t = document.cookie.match(new RegExp(e + "=(\\w+)"))) ? t[1].toUpperCase() : void 0) || "", document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
        }, J = function(e, t) {
            var n;
            return "undefined" != typeof Prototype && Event.fire(document, e, t, !0), n = document.createEvent("Events"), t && (n.data = t), n.initEvent(e, !0, !0), document.dispatchEvent(n)
        }, L = function(e) {
            return !J(i.BEFORE_CHANGE, {
                url: e
            })
        }, I = function() {
            var e, t, n, i, o, r;
            return t = function() {
                var e;
                return 400 <= (e = te.status) && 600 > e
            }, r = function() {
                var e;
                return null != (e = te.getResponseHeader("Content-Type")) && e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
            }, i = function(e) {
                var t, n, i, o, r;
                for (o = e.querySelector("head").childNodes, r = [], t = 0, n = o.length; n > t; t++) i = o[t], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && r.push(i.getAttribute("src") || i.getAttribute("href"));
                return r
            }, e = function(e) {
                var t;
                return P || (P = i(document)), t = i(e), t.length !== P.length || o(t, P).length !== P.length
            }, o = function(e, t) {
                var n, i, o, r, a;
                for (e.length > t.length && (o = [t, e], e = o[0], t = o[1]), r = [], n = 0, i = e.length; i > n; n++) a = e[n], ne.call(t, a) >= 0 && r.push(a);
                return r
            }, !t() && r() && (n = g(te.responseText), n && !e(n)) ? n : void 0
        }, x = function(t) {
            var n;
            return n = t.querySelector("title"), [null != n ? n.textContent : void 0, Y(t.querySelector("body")), e.get(t).token, "runScripts"]
        }, e = {
            get: function(e) {
                var t;
                return null == e && (e = document), {
                    node: t = e.querySelector('meta[name="csrf-token"]'),
                    token: null != t && "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0
                }
            },
            update: function(e) {
                var t;
                return t = this.get(), null != t.token && null != e && t.token !== e ? t.node.setAttribute("content", e) : void 0
            }
        }, g = function(e) {
            var t;
            return t = document.documentElement.cloneNode(), t.innerHTML = e, t.head = t.querySelector("head"), t.body = t.querySelector("body"), t
        }, n = function() {
            function e(t) {
                return this.original = null != t ? t : document.location.href, this.original.constructor === e ? this.original : void this._parse()
            }
            return e.prototype.withoutHash = function() {
                return this.href.replace(this.hash, "").replace("#", "")
            }, e.prototype.withoutHashForIE10compatibility = function() {
                return this.withoutHash()
            }, e.prototype.hasNoHash = function() {
                return 0 === this.hash.length
            }, e.prototype.crossOrigin = function() {
                return this.origin !== (new e).origin
            }, e.prototype._parse = function() {
                var e;
                return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, e = this.link, this.href = e.href, this.protocol = e.protocol, this.host = e.host, this.hostname = e.hostname, this.port = e.port, this.pathname = e.pathname, this.search = e.search, this.hash = e.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
            }, e
        }(), o = function(e) {
            function t(e) {
                return this.link = e, this.link.constructor === t ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void t.__super__.constructor.apply(this, arguments))
            }
            return ie(t, e), t.HTML_EXTENSIONS = ["html"], t.allowExtensions = function() {
                var e, n, i, o;
                for (n = 1 <= arguments.length ? re.call(arguments, 0) : [], i = 0, o = n.length; o > i; i++) e = n[i], t.HTML_EXTENSIONS.push(e);
                return t.HTML_EXTENSIONS
            }, t.prototype.shouldIgnore = function() {
                return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
            }, t.prototype._anchored = function() {
                return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
            }, t.prototype._nonHtml = function() {
                return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + t.HTML_EXTENSIONS.join("|") + ")?$", "g"))
            }, t.prototype._optOut = function() {
                var e, t;
                for (t = this.originalElement; !e && t !== document;) e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
                return e
            }, t.prototype._target = function() {
                return 0 !== this.link.target.length
            }, t
        }(n), t = function() {
            function e(e) {
                this.event = e, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (L(this.link.absolute) || ee(this.link.href), this.event.preventDefault()))
            }
            return e.installHandlerLast = function(t) {
                return t.defaultPrevented ? void 0 : (document.removeEventListener("click", e.handle, !1), document.addEventListener("click", e.handle, !1))
            }, e.handle = function(t) {
                return new e(t)
            }, e.prototype._extractLink = function() {
                var e;
                for (e = this.event.target; e.parentNode && "A" !== e.nodeName;) e = e.parentNode;
                return "A" === e.nodeName && 0 !== e.href.length ? this.link = new o(e) : void 0
            }, e.prototype._validForTurbolinks = function() {
                return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
            }, e.prototype._nonStandardClick = function() {
                return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
            }, e
        }(), r = function() {
            function e(e) {
                this.elementSelector = e, this._trickle = ae(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
            }
            var t;
            return t = "turbolinks-progress-bar", e.prototype.install = function() {
                return this.element = document.querySelector(this.elementSelector), this.element.classList.add(t), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
            }, e.prototype.uninstall = function() {
                return this.element.classList.remove(t), document.head.removeChild(this.styleElement)
            }, e.prototype.start = function() {
                return this.advanceTo(5)
            }, e.prototype.advanceTo = function(e) {
                var t;
                if (e > (t = this.value) && 100 >= t) {
                    if (this.value = e, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                    if (this.value > 0) return this._startTrickle()
                }
            }, e.prototype.done = function() {
                return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
            }, e.prototype._reset = function() {
                var e;
                return e = this.opacity, setTimeout(function(e) {
                    return function() {
                        return e.opacity = 0, e._updateStyle()
                    }
                }(this), this.speed / 2), setTimeout(function(t) {
                    return function() {
                        return t.value = 0, t.opacity = e, t._withSpeed(0, function() {
                            return t._updateStyle(!0)
                        })
                    }
                }(this), this.speed)
            }, e.prototype._startTrickle = function() {
                return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
            }, e.prototype._stopTrickle = function() {
                return delete this.trickling
            }, e.prototype._trickle = function() {
                return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
            }, e.prototype._withSpeed = function(e, t) {
                var n, i;
                return n = this.speed, this.speed = e, i = t(), this.speed = n, i
            }, e.prototype._updateStyle = function(e) {
                return null == e && (e = !1), e && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
            }, e.prototype._changeContentToForceRepaint = function() {
                return this.content = "" === this.content ? " " : ""
            }, e.prototype._createCSSRule = function() {
                return this.elementSelector + "." + t + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
            }, e
        }(), c = function(e) {
            return setTimeout(e, 500)
        }, N = function() {
            return document.addEventListener("DOMContentLoaded", function() {
                return J(i.CHANGE), J(i.UPDATE)
            }, !0)
        }, $ = function() {
            return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(e, t, n) {
                return jQuery.trim(t.responseText) ? J(i.UPDATE) : void 0
            }) : void 0
        }, A = function(e) {
            var t, i;
            return (null != (i = e.state) ? i.turbolinks : void 0) ? (t = j[new n(e.state.url).absolute]) ? (d(), k(t)) : ee(e.target.location.href) : void 0
        }, E = function() {
            return X(), W(), document.addEventListener("click", t.installHandlerLast, !0), window.addEventListener("hashchange", function(e) {
                return X(), W()
            }, !1), c(function() {
                return window.addEventListener("popstate", A, !1)
            })
        }, C = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && C, a = !navigator.userAgent.match(/CriOS\//), Q = "GET" === (F = O("request_method")) || "" === F, u = l && a && Q, s = document.addEventListener && document.createEvent, s && (N(), $()), u ? (ee = T, E()) : ee = function(e) {
            return document.location.href = e
        }, this.Turbolinks = {
            visit: ee,
            pagesCached: M,
            enableTransitionCache: b,
            enableProgressBar: y,
            allowLinkExtensions: o.allowExtensions,
            supported: u,
            EVENTS: f(i)
        }
    }.call(this), $(document).ready(function() {
        ! function(e, t, n, i, o, r, a) {
            e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
                (e[o].q = e[o].q || []).push(arguments)
            }, e[o].l = 1 * new Date, r = t.createElement(n), a = t.getElementsByTagName(n)[0], r.async = 1, r.src = i, a.parentNode.insertBefore(r, a)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "#", "auto"), ga("send", "pageview")
    }),
    function() {
        $(document).on("page:change", function() {
            $("#new_contact").on("ajax:before", function(e) {
                $("#spinner").show()
            }).on("ajax:complete", function(e, t, n) {
                $("#spinner").hide()
            })
        })
    }.call(this);