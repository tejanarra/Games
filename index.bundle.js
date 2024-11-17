(() => {
  "use strict";
  var e = {
      779: (e, n, t) => {
        t.d(n, { A: () => s });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          ".panel-with-step {\n    margin: 0 10%;\n}\n\n.panel-with-step .header {\n    padding: 10px;\n    background-color: #f5f5f5;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.step-label {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; /* Spread items across the available space */\n    width: 100%; /* Ensure full width to push the icon far right */\n}\n\n.step-number {\n    background-color: green;\n    color: white;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    font-size: 14px;\n}\n\n.toggle-icon {\n    font-size: 12px;\n    transition: transform 0.3s;\n    margin-left: auto; /* Push the icon to the far right */\n}\n\n.panel-content {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-top: none;\n    border-radius: 0 0 5px 5px;\n}\n",
          "",
        ]);
        const s = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var p = [].concat(e[c]);
                (r && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  t &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = t))
                      : (p[2] = t)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = r.base ? l[0] + r.base : l[0],
              p = a[c] || 0,
              u = "".concat(c, " ").concat(p);
            a[c] = p + 1;
            var d = t(u),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== d) n[d].references++, n[d].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var l = r(e, o), c = 0; c < a.length; c++) {
              var p = t(a[c]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            a = l;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0);
  const r = [
      {
        weight: 1,
        type: "textfield",
        label: "Step Number",
        tooltip: "Step Number to be displayed on Panel Header",
        key: "stepNumber",
        input: !0,
        defaultValue: 1,
      },
    ],
    o = Formio.Components.components.panel.editForm;
  function a(...e) {
    return o([{ key: "display", components: r }], ...e);
  }
  var i = t(72),
    s = t.n(i),
    l = t(825),
    c = t.n(l),
    p = t(659),
    u = t.n(p),
    d = t(56),
    m = t.n(d),
    f = t(540),
    v = t.n(f),
    h = t(113),
    b = t.n(h),
    y = t(779),
    g = {};
  (g.styleTagTransform = b()),
    (g.setAttributes = m()),
    (g.insert = u().bind(null, "head")),
    (g.domAPI = c()),
    (g.insertStyleElement = v()),
    s()(y.A, g),
    y.A && y.A.locals && y.A.locals;
  const x = Formio.Components.components.panel;
  Templates.defaultTemplates.myTemplate = {
    form: function (e) {
      var n,
        t = "";
      return (
        Array.prototype.join,
        (t += '<div class="mb-2 card border panel-with-step">\n  '),
        (!e.component.hideLabel ||
          e.builder ||
          e.component.collapsible ||
          e.component.tooltip) &&
          ((t +=
            '\n  <div class="card-header ' +
            (null == (n = e.transform("class", "bg-" + e.component.theme))
              ? ""
              : n) +
            '"\n    '),
          e.component.collapsible && (t += '\n    tabindex="0"\n    '),
          (t +=
            '\n    role="button"\n    aria-expanded="' +
            (null == (n = !e.component.collapsible || !e.collapsed) ? "" : n) +
            '"\n    aria-controls="' +
            (null == (n = e.instance.id) ? "" : n) +
            "-" +
            (null == (n = e.component.key) ? "" : n) +
            '"\n    ref="header"\n  >\n    '),
          (t +=
            '<div class="step-label d-flex align-items-center">\n  <div class="step-number">' +
            (null == (n = e.component.stepNumber) ? "" : n) +
            '</div>\n  <span class="ml-2">' +
            (null == (n = e.component.label || "Step Panel") ? "" : n) +
            '</span>\n  <div class="toggle-icon" style="transform: ' +
            (e.collapsed ? "rotate(180deg)" : "rotate(0deg)") +
            ';">\n    ▼\n  </div>\n</div>\n'),
          (t += "\n  </div>\n")),
        (t += "\n  "),
        (e.collapsed && !e.builder) ||
          (t +=
            '\n  <div class="card-body" ref="' +
            (null == (n = e.nestedKey) ? "" : n) +
            '" id="' +
            (null == (n = e.instance.id) ? "" : n) +
            "-" +
            (null == (n = e.component.key) ? "" : n) +
            '">\n    ' +
            (null == (n = e.children) ? "" : n) +
            "\n  </div>\n  "),
        t + "\n</div>\n"
      );
    },
  };
  class w extends x {
    static editForm = a;
    static schema(...e) {
      return x.schema({
        type: "customPanel",
        label: "Custom Panel",
        key: "customPanel",
        stepNumber: "1",
        title: "Custom Panel",
        theme: "default",
        breadcrumb: "default",
        components: [],
        clearOnHide: !1,
        input: !1,
        tableView: !1,
        persistent: !1,
      });
    }
    static get builderInfo() {
      return {
        title: "Custom Panel",
        icon: "list-alt",
        group: "basic",
        documentation: "/userguide/form-building/layout-components#panel",
        showPreview: !1,
        weight: 0,
        schema: w.schema(),
      };
    }
    get templateName() {
      return "myTemplate";
    }
  }
  Formio.use([{ components: { customPanel: w } }]);
})();
