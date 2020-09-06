!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.CityGis = t())
    : (e.CityGis = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: n,
          });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (e, t, r) {
      "use strict";
      (function (e) {
        var n, i;
        function o(e, t) {
          return t - e;
        }
        var s,
          a = (function () {
            var e, t;
            function r() {
              var e = arguments[0],
                t = arguments[1],
                r = arguments[2],
                n = arguments[3];
              return new o((i, o) => {
                var s = new XMLHttpRequest();
                (s.onreadystatechange = function () {
                  if (4 === s.readyState)
                    if ((s.status >= 200 && s.status < 300) || 304 === s.status)
                      if ("string" == typeof s.responseText && "json" == n)
                        try {
                          i(JSON.parse(s.responseText));
                        } catch (e) {
                          i(s.responseText);
                        }
                      else i(s.responseText);
                    else o(s.status);
                }),
                  s.open(e, t, !0),
                  "get" == e
                    ? (s.setRequestHeader(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      ),
                      s.setRequestHeader("content-type", "application/json"))
                    : s.setRequestHeader(
                        "content-Type",
                        "application/x-www-form-urlencoded"
                      ),
                  s.send(r);
              });
            }
            function n(e, t, r, n) {
              return i(e).then(t, r, n);
            }
            function i(e) {
              var t, r, n;
              return (
                e instanceof o
                  ? (t = e)
                  : u(e)
                  ? ((r = a()),
                    e.then(
                      function (e) {
                        r.resolve(e);
                      },
                      function (e) {
                        r.reject(e);
                      },
                      function (e) {
                        r.progress(e);
                      }
                    ),
                    (t = r.promise))
                  : ((n = e),
                    (t = new o(function (e) {
                      try {
                        return i(e ? e(n) : n);
                      } catch (e) {
                        return s(e);
                      }
                    }))),
                t
              );
            }
            function o(e) {
              this.then = e;
            }
            function s(e) {
              return new o(function (t, r) {
                try {
                  return r ? i(r(e)) : s(e);
                } catch (e) {
                  return s(e);
                }
              });
            }
            function a() {
              var e, t, r, n, u, c;
              return (
                (e = new o(f)),
                (t = []),
                (r = []),
                (n = function (e, n, i) {
                  var o, s;
                  return (
                    (o = a()),
                    (s =
                      "function" == typeof i
                        ? function (e) {
                            try {
                              o.progress(i(e));
                            } catch (e) {
                              o.progress(e);
                            }
                          }
                        : function (e) {
                            o.progress(e);
                          }),
                    t.push(function (t) {
                      t.then(e, n).then(o.resolve, o.reject, s);
                    }),
                    r.push(s),
                    o.promise
                  );
                }),
                (u = function (e) {
                  return h(r, e), e;
                }),
                (c = function (e) {
                  return (
                    (e = i(e)),
                    (n = e.then),
                    (c = i),
                    (u = y),
                    h(t, e),
                    (r = t = void 0),
                    e
                  );
                }),
                {
                  then: f,
                  resolve: l,
                  reject: d,
                  progress: p,
                  promise: e,
                  resolver: { resolve: l, reject: d, progress: p },
                }
              );
              function f(e, t, r) {
                return n(e, t, r);
              }
              function l(e) {
                return c(e);
              }
              function d(e) {
                return c(s(e));
              }
              function p(e) {
                return u(e);
              }
            }
            function u(e) {
              return e && "function" == typeof e.then;
            }
            function c(e, t, r, i, o) {
              return (
                d(2, arguments),
                n(e, function (e) {
                  var s, u, c, f, l, h, d, p, m, v;
                  if (
                    ((m = e.length >>> 0),
                    (s = Math.max(0, Math.min(t, m))),
                    (c = []),
                    (u = m - s + 1),
                    (f = []),
                    (l = a()),
                    s)
                  )
                    for (
                      p = l.progress,
                        d = function (e) {
                          f.push(e), --u || ((h = d = y), l.reject(f));
                        },
                        h = function (e) {
                          c.push(e), --s || ((h = d = y), l.resolve(c));
                        },
                        v = 0;
                      v < m;
                      ++v
                    )
                      v in e && n(e[v], b, g, p);
                  else l.resolve(c);
                  return l.then(r, i, o);
                  function g(e) {
                    d(e);
                  }
                  function b(e) {
                    h(e);
                  }
                })
              );
            }
            function f(e, t, r, n) {
              return d(1, arguments), l(e, p).then(t, r, n);
            }
            function l(e, t) {
              return n(e, function (e) {
                var r, i, o, s, u, c;
                if (((o = i = e.length >>> 0), (r = []), (c = a()), o))
                  for (
                    s = function (e, i) {
                      n(e, t).then(function (e) {
                        (r[i] = e), --o || c.resolve(r);
                      }, c.reject);
                    },
                      u = 0;
                    u < i;
                    u++
                  )
                    u in e ? s(e[u], u) : --o;
                else c.resolve(r);
                return c.promise;
              });
            }
            function h(e, t) {
              for (var r, n = 0; (r = e[n++]); ) r(t);
            }
            function d(e, t) {
              for (var r, n = t.length; n > e; )
                if (null != (r = t[--n]) && "function" != typeof r)
                  throw new Error("arg " + n + " must be a function");
            }
            function y() {}
            function p(e) {
              return e;
            }
            return (
              (n.defer = a),
              (n.resolve = i),
              (n.reject = function (e) {
                return n(e, s);
              }),
              (n.join = function () {
                return l(arguments, p);
              }),
              (n.all = f),
              (n.map = l),
              (n.reduce = function (r, i) {
                var o = t.call(arguments, 1);
                return n(r, function (t) {
                  var r;
                  return (
                    (r = t.length),
                    (o[0] = function (e, t, o) {
                      return n(e, function (e) {
                        return n(t, function (t) {
                          return i(e, t, o, r);
                        });
                      });
                    }),
                    e.apply(t, o)
                  );
                });
              }),
              (n.any = function (e, t, r, n) {
                return c(
                  e,
                  1,
                  function (e) {
                    return t ? t(e[0]) : e[0];
                  },
                  r,
                  n
                );
              }),
              (n.some = c),
              (n.chain = function (e, t, r) {
                var i = arguments.length > 2;
                return n(
                  e,
                  function (e) {
                    return (e = i ? r : e), t.resolve(e), e;
                  },
                  function (e) {
                    return t.reject(e), s(e);
                  },
                  t.progress
                );
              }),
              (n.isPromise = u),
              (n.getJSON = function (e) {
                return r("get", e, null, "json");
              }),
              (n.postJSON = function (e, t) {
                return (
                  "object" == typeof t &&
                    (t = (function (e) {
                      if (!e) return "";
                      var t = [];
                      for (var r in e)
                        if (e.hasOwnProperty(r) && "function" != typeof e[r]) {
                          var n = null != e[r] ? e[r].toString() : "";
                          (r = encodeURIComponent(r.replace("%20", "+"))),
                            (n = encodeURIComponent(n.replace("%20", "+"))),
                            t.push(r + "=" + n);
                        }
                      return t.join("&");
                    })(t)),
                  r("post", e, t || null, "json")
                );
              }),
              (o.prototype = {
                always: function (e, t) {
                  return this.then(e, e, t);
                },
                otherwise: function (e) {
                  return this.then(void 0, e);
                },
                yield: function (e) {
                  return this.then(function () {
                    return e;
                  });
                },
                spread: function (e) {
                  return this.then(function (t) {
                    return f(t, function (t) {
                      return e.apply(void 0, t);
                    });
                  });
                },
              }),
              (t = [].slice),
              (e =
                [].reduce ||
                function (e) {
                  var t, r, n, i, o;
                  if (
                    ((o = 0),
                    (i = (t = Object(this)).length >>> 0),
                    (r = arguments).length <= 1)
                  )
                    for (;;) {
                      if (o in t) {
                        n = t[o++];
                        break;
                      }
                      if (++o >= i) throw new TypeError();
                    }
                  else n = r[1];
                  for (; o < i; ++o) o in t && (n = e(n, t[o], o, t));
                  return n;
                }),
              n
            );
          })();
        class u {
          constructor(e) {
            return (
              (this._create = function (e) {
                var t = this;
                (e = Object.assign(
                  {
                    host: "192.168.29.100",
                    port: 59001,
                    clientId: "testmap",
                    group: "groupA",
                    onMessage: function (e) {
                      console.log(e);
                    },
                  },
                  e
                )),
                  (this.ready = new a.defer());
                try {
                  (this.client = new msc.Client(
                    { host: e.host, port: e.port },
                    e.clientId
                  )),
                    this.client.connect(),
                    this.client.onConnect(function () {
                      t.ready.resolve(this);
                    }),
                    this.client.join(e.group),
                    this.client.onMessage(e.onMessage);
                } catch (e) {
                  console.log("鏈紩鐢╩sc鎻掍欢,鏃犳硶鍒濆鍖杝ocket閫氳"),
                    t.ready.reject(e.message);
                }
                return this;
              }),
              (this.send = function (e) {
                var t = this;
                this.ready.then(function () {
                  t.client.pub({
                    sceneId: e.sceneId,
                    targetClientIds: e.targetClientIds,
                    data: e.data,
                  });
                });
              }),
              (this.broadcast = function (e) {
                var t = this;
                this.ready.then(function () {
                  t.client.pub({ sceneId: e.sceneId, data: e.data }, e.group);
                });
              }),
              this._create(e)
            );
          }
        }
        class c extends class {
          constructor() {
            (this._listeners = []),
              (this._scopes = []),
              (this._toRemove = []),
              (this._insideRaiseEvent = !1);
          }
          get numberOfListeners() {
            return this._listeners.length - this._toRemove.length;
          }
          addEventListener(e, t) {
            if ("function" == typeof e) {
              this._listeners.push(e), this._scopes.push(t);
              var r = this;
              return function () {
                r.removeEventListener(e, t);
              };
            }
          }
          removeEventListener(e, t) {
            if ("function" == typeof e) {
              for (
                var r = this._listeners, n = this._scopes, i = -1, o = 0;
                o < r.length;
                o++
              )
                if (r[o] === e && n[o] === t) {
                  i = o;
                  break;
                }
              if (-1 !== i)
                return (
                  this._insideRaiseEvent
                    ? (this._toRemove.push(i), (r[i] = void 0), (n[i] = void 0))
                    : (r.splice(i, 1), n.splice(i, 1)),
                  !0
                );
            }
            return !1;
          }
          raiseEvent() {
            var e;
            this._insideRaiseEvent = !0;
            var t = this._listeners,
              r = this._scopes,
              n = t.length;
            for (e = 0; e < n; e++) {
              var i = t[e];
              i && null != i && t[e].apply(r[e], arguments);
            }
            var s = this._toRemove;
            if ((n = s.length) > 0) {
              for (s.sort(o), e = 0; e < n; e++) {
                var a = s[e];
                t.splice(a, 1), r.splice(a, 1);
              }
              s.length = 0;
            }
            this._insideRaiseEvent = !1;
          }
        } {
          constructor(e) {
            super(), (this.commandQueue = []);
            var t = this,
              r = e.id,
              n = e.url;
            function i(e) {
              if (e && e.data)
                try {
                  var r = e.data;
                  if ("string" == typeof e.data) {
                    var n = e.data.replace(/^\s+|\s+$/g, "");
                    r = JSON.parse(n);
                  }
                  r.action &&
                    "" !== r.action &&
                    ("MapReady" == r.action && t._onReady
                      ? t._onReady.call(t)
                      : ("Camera" == r.action &&
                          t._cameraDeferred &&
                          t._cameraDeferred.resolve(r.data),
                        "QueryService" == r.action &&
                          ((t.QueryServiceInfo = r.data),
                          t._queryDeferred && t._queryDeferred.resolve()),
                        "QueryLocalTask" == r.action &&
                          t._queryLocalTaskDeferred &&
                          t._queryLocalTaskDeferred.resolve(r.data),
                        t.raiseEvent(r)));
                } catch (e) {
                  console.log("鏂规硶閿欒" + e);
                }
            }
            (this._onReady = e.onReady),
              window.attachEvent
                ? window.attachEvent("message", i)
                : window.addEventListener &&
                  window.addEventListener("message", i, !1),
              (this._iframeEle = document.getElementById(r));
            new Promise((e, t) => {
              this._iframeEle
                ? e(this._iframeEle)
                : (window.onload = function () {
                    (this._iframeEle = document.getElementById(r)),
                      this._iframeEle ||
                        ((this._iframeEle = document.createElement("iframe")),
                        this._iframeEle.setAttribute("id", r),
                        this._iframeEle.setAttribute("scrolling", "no"),
                        this._iframeEle.setAttribute(
                          "allowtransparency",
                          "true"
                        ),
                        this._iframeEle.setAttribute("allowfullscreen", "true"),
                        this._iframeEle.setAttribute(
                          "webkitallowfullscreen",
                          "true"
                        ),
                        this._iframeEle.setAttribute(
                          "mozallowfullscreen",
                          "true"
                        ),
                        document.body.appendChild(this._iframeEle)),
                      e(this._iframeEle);
                  }.bind(this));
            })
              .then(function (e) {
                return new Promise(function (t, r) {
                  (e.onload = function () {
                    var r = e.contentWindow,
                      n = e.src ? e.src : "*";
                    t({ iframe: r, domain: n });
                  }.bind(this)),
                    e.setAttribute("src", n.toString());
                });
              })
              .then(
                function (e) {
                  (this.iframe = e.iframe),
                    (this.domain = e.domain),
                    this.commandQueue.length > 0 &&
                      (this.Invoke(this.commandQueue),
                      (this.commandQueue = []));
                }.bind(this)
              );
            return this;
          }
          Invoke(e) {
            if (null != e) {
              var t = Array.isArray(e) ? e : [e];
              void 0 !== this.iframe
                ? t.forEach(
                    function (e) {
                      e.hasOwnProperty("ActionName")
                        ? (e.Parameters &&
                            "string" != typeof e.Parameters &&
                            (e.Parameters = JSON.stringify(e.Parameters)),
                          this.iframe.postMessage(
                            JSON.stringify(e),
                            this.domain
                          ))
                        : console.error(
                            "鍛戒护閿欒,缂哄皯'ActionName'" + JSON.stringify(e)
                          );
                    }.bind(this)
                  )
                : (this.commandQueue = this.commandQueue.concat(t));
            }
          }
          getCamera() {
            return (
              (this._cameraDeferred = new a.defer()),
              this.Invoke({ ActionName: "getCamera" }),
              this._cameraDeferred
            );
          }
          QueryTask(e) {
            return (
              (this._queryDeferred = new a.defer()),
              this.QueryServiceInfo && this._queryDeferred.resolve(),
              this._queryDeferred.then(
                function () {
                  return (
                    this._taskjob &&
                    !this._taskjob.checkUpdate(this.QueryServiceInfo)
                      ? console.info("鏈嶅姟鍦板潃鏃犲彉鍖�")
                      : (this._taskjob = new f(this.QueryServiceInfo)),
                    a
                      .all([this._taskjob.QueryTask(e), this.QueryLocalTask(e)])
                      .then(
                        function (e) {
                          var t = e
                            .filter(function (e) {
                              return null != e;
                            })
                            .map(function (e) {
                              return e;
                            });
                          return t.length > 0 ? t[0] : void 0;
                        },
                        function (e) {
                          console.error(e);
                        }
                      )
                  );
                }.bind(this)
              )
            );
          }
          QueryLocalTask(e) {
            return (
              (this._queryLocalTaskDeferred = new a.defer()),
              this.Invoke({ ActionName: "QueryLocalTask", Parameters: e }),
              this._queryLocalTaskDeferred
            );
          }
        }
        class f {
          constructor(e) {
            var t = [5, 6, 4, 2, 3, 1];
            function r(e, t) {
              for (
                var r = "",
                  o = e.length,
                  s = Math.floor(t.length / o),
                  a = t.length % o,
                  u = [],
                  c = 0;
                c < o;
                c++
              )
                u[e[c] - 1] = s + (a-- > 0 ? 1 : 0);
              for (var f = [], l = 0, h = 0; h < u.length; h++) {
                var d = t.substr(l, u[h]);
                f.push(d.split("")), (l += u[h]);
              }
              for (var y = i(e), p = 0; p < s + 1; p++)
                for (var m = 0; m < o; m++) {
                  r += f[n(y, m + 1)].shift() || "";
                }
              return r;
            }
            var n = function (e, t) {
                for (var r = e.length - 1; r >= 0; r--) if (e[r] == t) return r;
                return null;
              },
              i = function (e) {
                for (var t = e.length, r = [], n = 0; n < t; n++)
                  r[e[n] - 1] = n + 1;
                return r;
              };
            (this._optionslayers = e.data),
              e &&
                (this.layers = e.data.map(function (e) {
                  var n = {};
                  for (var i in e)
                    "string" == typeof e[i]
                      ? (n[i] = r(t, e[i]))
                      : (n[i] = e[i]);
                  return n;
                })),
              (this.layerinfo = void 0),
              (this.code = e.code),
              (this.filter = e.filter),
              (this._loaded = !1),
              (this.checkUpdate = function (e) {
                if (this.code != e.code) return !0;
                var t = 0;
                return (
                  e.data.forEach(
                    function (e) {
                      null ==
                        this._optionslayers.find(function (t) {
                          return e.url == t.url;
                        }) && t++;
                    }.bind(this)
                  ),
                  t > 0
                );
              });
            var o = function () {
                var e = a.defer();
                if (this._loaded) e.resolve();
                else {
                  if (!this.layers)
                    return console.error("鏈嶅姟鍦板潃涓虹┖"), void e.reject();
                  var t = [];
                  this.layers.forEach(function (e) {
                    if (!e.layerinfo) {
                      t.push(
                        ((r = e),
                        (n = a.defer()),
                        a.getJSON(r.url + "?f=pjson").then(function (e) {
                          e.error
                            ? (console.error(
                                "鏈嶅姟鍦板潃閿欒" + JSON.stringify(e.error)
                              ),
                              n.reject())
                            : ((r.layerinfo = e), n.resolve(r));
                        }),
                        n)
                      );
                    }
                    var r, n;
                  }),
                    a.all(t).then(
                      function () {
                        (this._loaded =
                          0 ==
                          this.layers.filter(function (e) {
                            return null == e.layerinfo;
                          }).length),
                          e.resolve();
                      }.bind(this)
                    );
                }
                return e;
              },
              s = function (e, t) {
                var r = a.defer(),
                  n = this.layers
                    .map(function (t) {
                      return t.layerinfo && t.layerinfo.layers
                        ? {
                            url: t.url,
                            currentVersion: Number(t.layerinfo.currentVersion),
                            spatialReference: t.layerinfo.spatialReference,
                            layer: t.layerinfo.layers.find(function (t) {
                              return t.name == e;
                            }),
                          }
                        : {};
                    })
                    .filter(function (e) {
                      return null != e.layer;
                    });
                if (0 == n.length) return r.reject(void 0), r;
                var i = (n = n[0]).layer;
                if (
                  0 == i.defaultVisibility &&
                  ((i.subLayerIds && i.subLayerIds.length > 0) ||
                    "Group Layer" == i.type)
                ) {
                  var o = this.layers.find(function (e) {
                      return e.url == n.url;
                    }),
                    s = i.subLayerIds.map(
                      function (e) {
                        return o.layerinfo.layers.find(function (t) {
                          return t.id == e && 0 == t.minScale;
                        });
                      }.bind(this)
                    );
                  (s = s.filter(function (e) {
                    return null != e;
                  })),
                    n.currentVersion >= 10.7
                      ? ((t =
                          t ||
                          s[0].geometryType
                            .toLowerCase()
                            .replace("esrigeometry", "")),
                        (i = s.find(function (e) {
                          return (
                            null != e &&
                            e.geometryType
                              .toLowerCase()
                              .replace("esrigeometry", "") == t.toLowerCase()
                          );
                        })))
                      : (i = s.length > 0 ? s[0] : void 0);
                }
                return (n.layer = i), r.resolve(n), r;
              },
              u = function (e, t) {
                var r = a.defer();
                if (t) {
                  var n = Object.assign({}, e);
                  delete n.name, delete n.type;
                  var i = this.filter;
                  (n.where || n.geometry) &&
                    i &&
                    (n.where = n.where ? i + " and " + n.where : i),
                    n.geometry &&
                      "string" != typeof n.geometry &&
                      ((n.geometryType = "esriGeometryPoint"),
                      n.geometry.hasOwnProperty("rings") &&
                        (n.geometryType = "esriGeometryPolygon"),
                      n.geometry.hasOwnProperty("paths") &&
                        (n.geometryType = "esriGeometryPolyline"),
                      delete n.geometry,
                      (n.geometry = JSON.stringify(e.geometry).replace(
                        /"/g,
                        ""
                      )));
                  var o = t.url + "/" + t.layer.id + "/query";
                  a.postJSON(o, n).then(
                    function (n) {
                      var i = {
                        geometryType: t.layer.geometryType || n.geometryType,
                        spatialReference: t.spatialReference,
                        name: e.name,
                        features: n.features,
                      };
                      r.resolve(i);
                    }.bind(this),
                    function (e) {
                      console.error(e), r.reject(void 0);
                    }
                  );
                } else console.error("鏃犳鍥惧眰淇℃伅"), r.reject();
                return r;
              };
            return (
              (this.QueryTask = function (e) {
                if (
                  (e = Object.assign(
                    {
                      name: void 0,
                      where: void 0,
                      geometry: void 0,
                      returnGeometry: !1,
                      outFields: "*",
                      f: "pjson",
                      type: void 0,
                      distance: 0,
                    },
                    e
                  )).name &&
                  (e.where || e.geometry)
                )
                  return o
                    .call(this)
                    .then(
                      function () {
                        return s.call(this, e.name, e.type);
                      }.bind(this)
                    )
                    .then(
                      function (t) {
                        return u.call(this, e, t);
                      }.bind(this)
                    );
                var t = a.defer();
                return t.reject("鏌ヨ鍙傛暟涓嶆纭�"), t;
              }),
              this
            );
          }
        }
        (s = function () {
          return { MapSocket: u, Bridge: c, Task: f };
        }),
          e && e.exports
            ? (e.exports = s())
            : void 0 ===
                (i = "function" == typeof (n = s) ? n.call(t, r, t, e) : n) ||
              (e.exports = i);
      }.call(this, r(1)(e)));
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
  ]);
});
