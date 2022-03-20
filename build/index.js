var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\USER\Documents\stuff\weird-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  Document: () => Document,
  Layout: () => Layout,
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var import_react = require("@chakra-ui/react");
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react.ChakraProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null))));
}
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, "Hi"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, " ", children, " ");
};

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\admin.tsx
var admin_exports = {};
__export(admin_exports, {
  action: () => action,
  default: () => admin_default,
  loader: () => loader
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/components/LoginForm/index.tsx
init_react();
var import_react2 = require("@chakra-ui/react");
var LoginForm = (props) => {
  return /* @__PURE__ */ React.createElement(import_react2.Flex, {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement(import_react2.FormControl, null, /* @__PURE__ */ React.createElement(import_react2.FormLabel, {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement(import_react2.Input, {
    id: "username",
    type: "text",
    name: "username"
  }), /* @__PURE__ */ React.createElement(import_react2.FormLabel, {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement(import_react2.Input, {
    id: "password",
    type: "password",
    name: "password"
  })), /* @__PURE__ */ React.createElement(import_react2.Button, {
    type: "submit"
  }, "Submit")));
};
var LoginForm_default = LoginForm;

// app/components/NavBar/index.tsx
init_react();
var import_react3 = require("@chakra-ui/react");
var import_remix3 = __toESM(require_remix());
var import_phosphor_react = require("phosphor-react");

// app/components/atoms/Logo.tsx
init_react();
var Logo = ({}) => {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "70",
    height: "70",
    viewBox: "0 0 70 70",
    fill: "none"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "26",
    y: "24",
    width: "4",
    height: "4",
    rx: "1.5",
    fill: "black"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "25",
    y: "42",
    width: "4",
    height: "4",
    rx: "1.5",
    fill: "black"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "42",
    y: "24",
    width: "4",
    height: "4",
    rx: "1.5",
    fill: "black"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "41",
    y: "42",
    width: "4",
    height: "4",
    rx: "1.5",
    fill: "black"
  }));
};
var Logo_default = Logo;

// app/components/NavBar/index.tsx
var NavItem = ({ name, icon, to }) => {
  const location = (0, import_remix3.useLocation)();
  const selected = location.pathname.split("/").at(-1) === to;
  const border = selected ? { borderLeft: "4px solid", borderColor: "black" } : {};
  return /* @__PURE__ */ React.createElement(import_react3.Grid, __spreadProps(__spreadValues({
    gridTemplateColumns: "auto auto",
    padding: selected ? "0 2rem" : "0 calc(2rem + 4px)"
  }, border), {
    width: "100%",
    as: import_remix3.Link,
    to
  }), icon, /* @__PURE__ */ React.createElement(import_react3.Text, null, name));
};
var NavBar = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_react3.Flex, {
    width: "100%",
    height: "100%"
  }, /* @__PURE__ */ React.createElement(import_react3.Flex, {
    direction: "column",
    justifyContent: "space-between",
    borderRight: "1px solid",
    borderColor: "blackAlpha.300",
    width: "32vmin",
    as: "nav",
    height: "100vh"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hi"
  }, /* @__PURE__ */ React.createElement(import_react3.Grid, {
    my: 25,
    gridTemplateColumns: "auto auto",
    padding: "0 1rem",
    width: "100%"
  }, /* @__PURE__ */ React.createElement(Logo_default, null)), /* @__PURE__ */ React.createElement(import_react3.Flex, {
    gap: 4,
    direction: "column",
    justifyContent: "center",
    width: "100%"
  }, /* @__PURE__ */ React.createElement(NavItem, {
    to: "dashboard",
    name: "Dashboard",
    icon: /* @__PURE__ */ React.createElement(import_phosphor_react.List, {
      size: 32
    })
  }), /* @__PURE__ */ React.createElement(NavItem, {
    to: "hehe",
    name: "TESTING",
    icon: /* @__PURE__ */ React.createElement(import_phosphor_react.ShoppingBag, {
      size: 32
    })
  }))), /* @__PURE__ */ React.createElement(import_react3.Box, {
    className: "USER"
  }, "bruh 2")), children);
};
var NavBar_default = NavBar;

// app/utils/jwt/login.server.ts
init_react();

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
init_react();
var import_remix4 = __toESM(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "token",
    expires: new Date(Date.now() + 60),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.ACCESS_TOKEN_SECRET],
    secure: true
  }
});

// app/utils/jwt/login.server.ts
var import_argon2 = __toESM(require("argon2"));

// app/utils/jwt/index.server.ts
init_react();
var import_jsonwebtoken = require("jsonwebtoken");
var createAcessToken = (admin) => {
  return (0, import_jsonwebtoken.sign)({ admin: __spreadProps(__spreadValues({}, admin), { password: void 0 }) }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10h"
  });
};

// app/utils/jwt/login.server.ts
var import_remix5 = __toESM(require_remix());
var login = async ({ username, password, request }) => {
  const admin = await db.admin.findFirst({
    where: { username }
  });
  if (!admin)
    return null;
  const valid = await import_argon2.default.verify(admin.password, password);
  if (!valid)
    return null;
  const token = createAcessToken(admin);
  let session = await getSession(request.headers.get("Cookie"));
  session.set("token", token);
  session.set("admin", __spreadProps(__spreadValues({}, admin), { password: void 0 }));
  return (0, import_remix5.redirect)("/admin/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\admin.tsx
var loader = async ({ request }) => {
  console.log(request);
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.has("token"))
    return { auth: true };
  return { auth: true, admin: session.get("admin") };
};
var action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (!username)
    return { errors: [{ message: "username aint there" }] };
  if (!password)
    return { errors: [{ message: "password aint there aint there" }] };
  return await login({ request, username: username.toString(), password: password.toString() });
};
var Admin = (props) => {
  const { auth, admin } = (0, import_remix6.useLoaderData)();
  console.log(auth, admin);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, auth ? /* @__PURE__ */ React.createElement(NavBar_default, null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)) : /* @__PURE__ */ React.createElement(LoginForm_default, null));
};
var admin_default = Admin;

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\admin\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action3,
  default: () => dashboard_default
});
init_react();

// app/routes/admin.tsx
init_react();
var action2 = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (!username)
    return { errors: [{ message: "username aint there" }] };
  if (!password)
    return { errors: [{ message: "password aint there aint there" }] };
  return await login({ request, username: username.toString(), password: password.toString() });
};

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\admin\dashboard.tsx
var action3 = action2;
var Dashboard = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "dashboard eh"));
};
var dashboard_default = Dashboard;

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  console.log(db);
  const test = db.tEST.findMany();
  console.log(test);
  return { hi: "hehe", test: test || "bruh", bruh: "development" };
};
function Index() {
  const hi = (0, import_remix7.useLoaderData)();
  console.log(hi);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "hi2"));
}

// route:C:\Users\USER\Documents\stuff\weird-remix\app\routes\shop.tsx
var shop_exports = {};
__export(shop_exports, {
  default: () => shop_default
});
init_react();
var Shop = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "shop eh"));
};
var shop_default = Shop;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a27a80ca", "entry": { "module": "/build/entry.client-TRVITYK2.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-HBWAYHM6.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WYSPOMUU.js", "imports": ["/build/_shared/chunk-OOMQUDRW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-TQY3BJIU.js", "imports": ["/build/_shared/chunk-WYKIRCR6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/dashboard": { "id": "routes/admin/dashboard", "parentId": "routes/admin", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/dashboard-WN42FBIH.js", "imports": ["/build/_shared/chunk-OOMQUDRW.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SPJ3LHNA.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shop": { "id": "routes/shop", "parentId": "root", "path": "shop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shop-SYACNERT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A27A80CA.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/dashboard": {
    id: "routes/admin/dashboard",
    parentId: "routes/admin",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/shop": {
    id: "routes/shop",
    parentId: "root",
    path: "shop",
    index: void 0,
    caseSensitive: void 0,
    module: shop_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHN0dWZmXFx3ZWlyZC1yZW1peFxcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcc3R1ZmZcXHdlaXJkLXJlbWl4XFxhcHBcXHJvdXRlc1xcYWRtaW4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xvZ2luRm9ybS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2QmFyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hdG9tcy9Mb2dvLnRzeCIsICIuLi9hcHAvdXRpbHMvand0L2xvZ2luLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvand0L2luZGV4LnNlcnZlci50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcc3R1ZmZcXHdlaXJkLXJlbWl4XFxhcHBcXHJvdXRlc1xcYWRtaW5cXGRhc2hib2FyZC50c3giLCAiLi4vYXBwL3JvdXRlcy9hZG1pbi50c3giLCAicm91dGU6QzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHN0dWZmXFx3ZWlyZC1yZW1peFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcc3R1ZmZcXHdlaXJkLXJlbWl4XFxhcHBcXHJvdXRlc1xcc2hvcC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVTRVJcXFxcRG9jdW1lbnRzXFxcXHN0dWZmXFxcXHdlaXJkLXJlbWl4XFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVTRVJcXFxcRG9jdW1lbnRzXFxcXHN0dWZmXFxcXHdlaXJkLXJlbWl4XFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERvY3VtZW50c1xcXFxzdHVmZlxcXFx3ZWlyZC1yZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXGFkbWluLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERvY3VtZW50c1xcXFxzdHVmZlxcXFx3ZWlyZC1yZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXGFkbWluXFxcXGRhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxEb2N1bWVudHNcXFxcc3R1ZmZcXFxcd2VpcmQtcmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxEb2N1bWVudHNcXFxcc3R1ZmZcXFxcd2VpcmQtcmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxzaG9wLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hvcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rcywgTGlua3NGdW5jdGlvbiwgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RG9jdW1lbnQ+XG4gICAgICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPC9Eb2N1bWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkhpPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIHsvKiA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8U2NyaXB0cyAvPiAqL31cbiAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gPD4ge2NoaWxkcmVufSA8Lz47XG59O1xuIiwgImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBGb3JtSGVscGVyVGV4dCwgQnV0dG9uLCBCb3gsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luRm9ybVwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi91dGlscy9qd3QvbG9naW4uc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwiLi4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xyXG4gICAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG4gICAgaWYgKCFzZXNzaW9uLmhhcyhcInRva2VuXCIpKSByZXR1cm4geyBhdXRoOiB0cnVlIH07XHJcbiAgICByZXR1cm4geyBhdXRoOiB0cnVlLCBhZG1pbjogc2Vzc2lvbi5nZXQoXCJhZG1pblwiKSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSByZXR1cm4geyBlcnJvcnM6IFt7IG1lc3NhZ2U6IFwidXNlcm5hbWUgYWludCB0aGVyZVwiIH1dIH07XHJcbiAgICBpZiAoIXBhc3N3b3JkKSByZXR1cm4geyBlcnJvcnM6IFt7IG1lc3NhZ2U6IFwicGFzc3dvcmQgYWludCB0aGVyZSBhaW50IHRoZXJlXCIgfV0gfTtcclxuICAgIHJldHVybiBhd2FpdCBsb2dpbih7IHJlcXVlc3QsIHVzZXJuYW1lOiB1c2VybmFtZS50b1N0cmluZygpLCBwYXNzd29yZDogcGFzc3dvcmQudG9TdHJpbmcoKSB9KTtcclxufTtcclxuXHJcbmNvbnN0IEFkbWluOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgYXV0aCwgYWRtaW4gfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICAgIGNvbnNvbGUubG9nKGF1dGgsIGFkbWluKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2F1dGggPyAoXHJcbiAgICAgICAgICAgICAgICA8TmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICAgICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCAiaW1wb3J0IHsgRmxleCwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmNvbnN0IExvZ2luRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsICJpbXBvcnQgeyBGbGV4LCBCb3gsIFRleHQsIEdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBTaG9wcGluZ0JhZyB9IGZyb20gXCJwaG9zcGhvci1yZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vYXRvbXMvTG9nb1wiO1xyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmNvbnN0IE5hdkl0ZW06IFJlYWN0LkZDPHsgbmFtZTogc3RyaW5nOyBpY29uOiBhbnk7IHRvOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBpY29uLCB0byB9KSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5hdCgtMSkgPT09IHRvO1xyXG4gICAgY29uc3QgYm9yZGVyID0gc2VsZWN0ZWQgPyB7IGJvcmRlckxlZnQ6IFwiNHB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOiBcImJsYWNrXCIgfSA6IHt9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBncmlkVGVtcGxhdGVDb2x1bW5zPVwiYXV0byBhdXRvXCIgcGFkZGluZz17c2VsZWN0ZWQgPyBcIjAgMnJlbVwiIDogXCIwIGNhbGMoMnJlbSArIDRweClcIn0gey4uLmJvcmRlcn0gd2lkdGg9XCIxMDAlXCIgYXM9e0xpbmt9IHRvPXt0b30+XHJcbiAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICA8VGV4dD57bmFtZX08L1RleHQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0PVwiMXB4IHNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYmxhY2tBbHBoYS4zMDBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMnZtaW5cIlxyXG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgbXk9ezI1fSBncmlkVGVtcGxhdGVDb2x1bW5zPVwiYXV0byBhdXRvXCIgcGFkZGluZz1cIjAgMXJlbVwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBnYXA9ezR9IGRpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHRvPVwiZGFzaGJvYXJkXCIgbmFtZT1cIkRhc2hib2FyZFwiIGljb249ezxMaXN0IHNpemU9ezMyfSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gdG89XCJoZWhlXCIgbmFtZT1cIlRFU1RJTkdcIiBpY29uPXs8U2hvcHBpbmdCYWcgc2l6ZT17MzJ9IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJVU0VSXCI+YnJ1aCAyPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsICJpbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmNvbnN0IExvZ286IFJlYWN0LkZDID0gKHt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI3MFwiIHZpZXdCb3g9XCIwIDAgNzAgNzBcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMjZcIiB5PVwiMjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMjVcIiB5PVwiNDJcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiNDJcIiB5PVwiMjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiNDFcIiB5PVwiNDJcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsICJpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQgYXJnb24gZnJvbSBcImFyZ29uMlwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBY2Vzc1Rva2VuIH0gZnJvbSBcIi4vaW5kZXguc2VydmVyXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmludGVyZmFjZSBMb2dpbkFyZ3VtbmV0cyB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHJlcXVlc3Q6IFJlcXVlc3Q7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCByZXF1ZXN0IH06IExvZ2luQXJndW1uZXRzKSA9PiB7XHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IGRiLmFkbWluLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFhZG1pbikgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGFyZ29uLnZlcmlmeShhZG1pbi5wYXNzd29yZCwgcGFzc3dvcmQpO1xyXG4gICAgaWYgKCF2YWxpZCkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNyZWF0ZUFjZXNzVG9rZW4oYWRtaW4pO1xyXG4gICAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG4gICAgc2Vzc2lvbi5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICBzZXNzaW9uLnNldChcImFkbWluXCIsIHsgLi4uYWRtaW4sIHBhc3N3b3JkOiB1bmRlZmluZWQgfSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvYWRtaW4vZGFzaGJvYXJkXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufTtcclxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIGRiLiRjb25uZWN0KCk7XHJcbn0gZWxzZSB7XHJcbiAgICBpZiAoIWdsb2JhbC5fX2RiKSB7XHJcbiAgICAgICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICAgICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIGRiID0gZ2xvYmFsLl9fZGI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRiIH07XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuLy9cclxuLy8gbGlmdGVkIGRpcmVjdGx5IGZyb20gdGhlIHJlbWl4IGRvY3VtZW50YXRpb25cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvcmVtaXgjc2Vzc2lvbnNcclxuLy9cclxuY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgLy8gYSBDb29raWUgZnJvbSBgY3JlYXRlQ29va2llYCBvciB0aGUgQ29va2llT3B0aW9ucyB0byBjcmVhdGUgb25lXHJcbiAgICBjb29raWU6IHtcclxuICAgICAgICBuYW1lOiBcInRva2VuXCIsXHJcblxyXG4gICAgICAgIC8vIGFsbCBvZiB0aGVzZSBhcmUgb3B0aW9uYWxcclxuICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjApLFxyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIG1heEFnZTogNjAsXHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgICAgICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQhXSxcclxuICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH07XHJcbiIsICJpbXBvcnQgeyBzaWduIH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBBZG1pbiB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjZXNzVG9rZW4gPSAoYWRtaW46IEFkbWluKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbih7IGFkbWluOiB7IC4uLmFkbWluLCBwYXNzd29yZDogdW5kZWZpbmVkIH0gfSwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCEsIHtcclxuICAgICAgICBleHBpcmVzSW46IFwiMTBoXCIsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZyZXNoVG9rZW4gPSAoYWRtaW46IEFkbWluKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbih7IGFkbWluOiB7IC4uLmFkbWluLCBwYXNzd29yZDogdW5kZWZpbmVkIH0gfSwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQhLCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiBcIjdkXCIsXHJcbiAgICB9KTtcclxufTtcclxuIiwgImltcG9ydCB7IGFjdGlvbiBhcyBoaSB9IGZyb20gXCIuLi9hZG1pblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBoaTtcclxuY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5kYXNoYm9hcmQgZWg8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgRm9ybUhlbHBlclRleHQsIEJ1dHRvbiwgQm94LCBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi4vdXRpbHMvand0L2xvZ2luLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIi4uL3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcclxuICAgIGxldCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcclxuICAgIGlmICghc2Vzc2lvbi5oYXMoXCJ0b2tlblwiKSkgcmV0dXJuIHsgYXV0aDogdHJ1ZSB9O1xyXG4gICAgcmV0dXJuIHsgYXV0aDogdHJ1ZSwgYWRtaW46IHNlc3Npb24uZ2V0KFwiYWRtaW5cIikgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xyXG4gICAgaWYgKCF1c2VybmFtZSkgcmV0dXJuIHsgZXJyb3JzOiBbeyBtZXNzYWdlOiBcInVzZXJuYW1lIGFpbnQgdGhlcmVcIiB9XSB9O1xyXG4gICAgaWYgKCFwYXNzd29yZCkgcmV0dXJuIHsgZXJyb3JzOiBbeyBtZXNzYWdlOiBcInBhc3N3b3JkIGFpbnQgdGhlcmUgYWludCB0aGVyZVwiIH1dIH07XHJcbiAgICByZXR1cm4gYXdhaXQgbG9naW4oeyByZXF1ZXN0LCB1c2VybmFtZTogdXNlcm5hbWUudG9TdHJpbmcoKSwgcGFzc3dvcmQ6IHBhc3N3b3JkLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcblxyXG5jb25zdCBBZG1pbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGF1dGgsIGFkbWluIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhhdXRoLCBhZG1pbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHthdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGIpO1xuICAgIGNvbnN0IHRlc3QgPSBkYi50RVNULmZpbmRNYW55KCk7XG4gICAgY29uc29sZS5sb2codGVzdCk7XG4gICAgcmV0dXJuIHsgaGk6IFwiaGVoZVwiLCB0ZXN0OiB0ZXN0IHx8IFwiYnJ1aFwiLCBicnVoOiBwcm9jZXNzLmVudi5OT0RFX0VOViB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGNvbnN0IGhpID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKGhpKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPmhpMjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5jb25zdCBTaG9wOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5zaG9wIGVoPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcDtcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2EyN2E4MGNhJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1UUlZJVFlLMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPWk9HU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IQldBWUhNNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1XWVNQT01VVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT09NUVVEUlcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluJzp7J2lkJzoncm91dGVzL2FkbWluJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluLVRRWTNCSklVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XWUtJUkNSNi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9hZG1pbi9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hZG1pbicsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vZGFzaGJvYXJkLVdONDJGQklILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PT01RVURSVy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1TUEozTEhOQS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hvcCc6eydpZCc6J3JvdXRlcy9zaG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Nob3AnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hvcC1TWUFDTkVSVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1BMjdBODBDQS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFl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WSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxlQUFjLEVBQUMsTUFBSyxlQUFjLFlBQVcsUUFBTyxRQUFPLFFBQU8sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0NBQWlDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBZlFobEQsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwwQkFBMEI7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEMUNkLElBQU0sTUFBTTtBQUVaLElBQUksSUFBSTtBQUdSLElBQUksUUFBUTtBQUdaLElBQUksSUFDRixVQUNBLHVCQUFRLE9BQU8sZ0JBQWdCLEVBQUUsV0FBVyxNQUFNLFFBQVE7QUFLNUQsSUFBSSxJQUFJLHVCQUFRLE9BQU8sVUFBVSxFQUFFLFFBQVE7QUFFM0MsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRWpDLElBQUksT0FBTyxNQUFNLE1BQU07QUFDckIsVUFBUSxJQUFJLG9DQUFvQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
