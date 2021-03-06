(() => {
	var t = {
			n: o => {
				var e = o && o.__esModule ? () => o.default : () => o;
				return t.d(e, {
					a: e
				}), e
			},
			d: (o, e) => {
				for (var r in e) t.o(e, r) && !t.o(o, r) && Object.defineProperty(o, r, {
					enumerable: !0,
					get: e[r]
				})
			},
			o: (t, o) => Object.prototype.hasOwnProperty.call(t, o),
			r: t => {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}
		},
		o = {};
	(() => {
		"use strict";
		t.r(o);
		const e = flarum.core.compat["forum/app"];
		var r = t.n(e);
		const i = flarum.core.compat["common/extend"],
			n = flarum.core.compat["common/components/TextEditor"];
		var a = t.n(n);
		const c = flarum.core.compat["common/utils/BasicEditorDriver"];
		var l = t.n(c);
		const s = flarum.core.compat["common/utils/styleSelectedText"];
		var d = t.n(s);

		function u(t, o) {
			return u = Object.setPrototypeOf || function(t, o) {
				return t.__proto__ = o, t
			}, u(t, o)
		}

		function f(t, o) {
			t.prototype = Object.create(o.prototype), t.prototype.constructor = t, u(t, o)
		}
		const p = flarum.core.compat["common/Component"];
		var h = t.n(p),
			k = function(t) {
				function o() {
					return t.apply(this, arguments) || this
				}
				return f(o, t), o.prototype.view = function(t) {
					return m("div", {
						class: "MarkdownToolbar"
					}, t.children)
				}, o
			}(h());
		const y = flarum.core.compat["common/helpers/icon"];
		var x = t.n(y);
		const b = flarum.core.compat["common/components/Tooltip"];
		var v = t.n(b),
			g = function(t) {
				function o() {
					return t.apply(this, arguments) || this
				}
				f(o, t);
				var e = o.prototype;
				return e.oncreate = function(o) {
					t.prototype.oncreate.call(this, o)
				}, e.view = function() {
					var t = m("button", {
						className: "Button Button--icon Button--link",
						type: "button",
						"data-hotkey": this.attrs.hotkey,
						onkeydown: this.keydown.bind(this),
						onclick: this.attrs.onclick
					}, x()(this.attrs.icon));
					return this.attrs.title ? m(v(), {
						text: this.attrs.title
					}, t) : t
				}, e.keydown = function(t) {
					" " !== t.key && "Enter" !== t.key || (t.preventDefault(), this.element.click())
				}, o
			}(h());
		const _ = flarum.core.compat["common/utils/ItemList"];
		var w = t.n(_),
			T = navigator.userAgent.match(/Macintosh/) ? "???" : "ctrl",
			O = {
				header: {
					prefix: "### "
				},
				bold: {
					prefix: "**",
					suffix: "**",
					trimFirst: !0
				},
				italic: {
					prefix: "_",
					suffix: "_",
					trimFirst: !0
				},
				strikethrough: {
					prefix: "~~",
					suffix: "~~",
					trimFirst: !0
				},
				quote: {
					prefix: "> ",
					multiline: !0,
					surroundWithNewlines: !0
				},
				code: {
					prefix: "`",
					suffix: "`",
					blockPrefix: "```",
					blockSuffix: "```"
				},
				link: {
					prefix: "[",
					suffix: "](https://)",
					replaceNext: "https://",
					scanFor: "https?://"
				},
				image: {
					prefix: "![",
					suffix: "](https://)",
					replaceNext: "https://",
					scanFor: "https?://"
				},
				unordered_list: {
					prefix: "- ",
					multiline: !0,
					surroundWithNewlines: !0
				},
				ordered_list: {
					prefix: "1. ",
					multiline: !0,
					orderedList: !0
				},
				spoiler: {
					prefix: ">!",
					suffix: "!<",
					blockPrefix: ">! ",
					multiline: !0,
					trimFirst: !0
				},
				reply: {
					prefix: "[reply]",
					suffix: "[/reply]",
					trimFirst: !0
				},
				size: {
					prefix: "[size=18]",
					suffix: "[/size]",
					blockPrefix: "[size=18]",
					blockSuffix: "[/size]"
				},
				color: {
					prefix: "[color=red]",
					suffix: "[/color]",
					blockPrefix: "[color=red]",
					blockSuffix: "[/color]"
				}
			},
			S = function(t, o) {
				d()(o.el, O[t])
			};

		function I(t, o, e) {
			return function(r) {
				r.key === o && (r.metaKey && "???" === T || r.ctrlKey && "ctrl" === T) && (r.preventDefault(), S(t, e))
			}
		}

		function P(t) {
			var o = this,
				e = "function" == typeof t ? t() : new(w());

			function i(t, o) {
				return r().translator.trans("flarum-markdown.forum.composer." + t + "_tooltip") + (o ? " <" + T + "-" + o + ">" : "")
			}
			var n = function(t) {
				return function() {
					return S(t, o.attrs.composer.editor)
				}
			};
			return e.add("header", m(g, {
				title: i("header"),
				icon: "fas fa-heading",
				onclick: n("header")
			}), 1e3), e.add("bold", m(g, {
				title: i("bold", "b"),
				icon: "fas fa-bold",
				onclick: n("bold")
			}), 900), e.add("italic", m(g, {
				title: i("italic", "i"),
				icon: "fas fa-italic",
				onclick: n("italic")
			}), 800), e.add("strikethrough", m(g, {
				title: i("strikethrough"),
				icon: "fas fa-strikethrough",
				onclick: n("strikethrough")
			}), 700), e.add("quote", m(g, {
				title: i("quote"),
				icon: "fas fa-quote-left",
				onclick: n("quote")
			}), 600), e.add("spoiler", m(g, {
				title: i("spoiler"),
				icon: "fas fa-exclamation-triangle",
				onclick: n("spoiler")
			}), 500), e.add("code", m(g, {
				title: i("code"),
				icon: "fas fa-code",
				onclick: n("code")
			}), 400), e.add("link", m(g, {
				title: i("link"),
				icon: "fas fa-link",
				onclick: n("link")
			}), 300), e.add("image", m(g, {
				title: i("image"),
				icon: "fas fa-image",
				onclick: n("image")
			}), 200), e.add("unordered_list", m(g, {
				title: i("unordered_list"),
				icon: "fas fa-list-ul",
				onclick: n("unordered_list")
			}), 100), e.add("ordered_list", m(g, {
				title: i("ordered_list"),
				icon: "fas fa-list-ol",
				onclick: n("ordered_list")
			}), 100), e.add("reply", m(g, {
				title: i("reply"),
				icon: "fas fa-eye",
				onclick: n("reply")
			}), 100), e.add("size", m(g, {
				title: i("size"),
				icon: "fas fa-tv",
				onclick: n("size")
			}), 100),e.add("color", m(g, {
				title: i("color"),
				icon: "fas fa-car",
				onclick: n("color")
			}), 100), e
		}
		r().initializers.add("flarum-markdown", (function(t) {
			(0, i.extend)(l().prototype, "keyHandlers", (function(t) {
				t.add("bold", I("bold", "b", this)), t.add("code", I("code", "i", this)),t.add("code", I("code", "m", this)), t.add("reply", I("reply", "r", this))
			})), a().prototype.markdownToolbarItems ? (0, i.override)(a().prototype, "markdownToolbarItems", P) : a().prototype.markdownToolbarItems = P, (0, i.extend)(a().prototype, "toolbarItems", (function(t) {
				t.add("markdown", m(k, {
					for: this.textareaId,
					setShortcutHandler: function(t) {
						return shortcutHandler = t
					}
				}, this.markdownToolbarItems().toArray()), 100)
			}))
		}))
	})(), module.exports = o
})();
//# sourceMappingURL=forum.js.map