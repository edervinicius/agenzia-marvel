"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("../../services/api");
var md5_1 = require("md5");
var react_router_dom_2 = require("react-router-dom");
var Product = function () {
    var _a = process.env, REACT_APP_PUBLIC_KEY = _a.REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY = _a.REACT_APP_PRIVATE_KEY;
    var navigate = react_router_dom_2.useNavigate();
    var id = react_router_dom_1.useParams().id;
    var _b = react_1.useState(false), rare = _b[0], setRare = _b[1];
    var _c = react_1.useState(""), image = _c[0], setImage = _c[1];
    var _d = react_1.useState(""), title = _d[0], setTitle = _d[1];
    var _e = react_1.useState(""), description = _e[0], setDescription = _e[1];
    var _f = react_1.useState(""), price = _f[0], setPrice = _f[1];
    var searchComic = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ts, hash, url;
        return __generator(this, function (_a) {
            ts = new Date().getTime();
            hash = REACT_APP_PRIVATE_KEY
                ? md5_1["default"](ts + REACT_APP_PRIVATE_KEY + REACT_APP_PRIVATE_KEY)
                : "";
            url = "/comics/" + id + "?ts=" + ts + "&apikey=" + REACT_APP_PRIVATE_KEY + "&hash=" + hash;
            api_1["default"]
                .get(url)
                .then(function (response) {
                if (response.data.data.results.length > 0) {
                    var res = response.data.data.results[0];
                    setTitle(res.title);
                    setTitle(res.title);
                    setPrice(res.prices[0].price);
                    setImage(res.thumbnail.path + "." + res.thumbnail.extension);
                    setDescription(res.description);
                }
            })["catch"](function (err) {
                console.error("ops! ocorreu um erro" + err);
            });
            return [2 /*return*/];
        });
    }); };
    var buyProduct = function () {
        var cart = localStorage.getItem("cart") !== undefined &&
            localStorage.getItem("cart") !== null
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        var addProduct = true;
        cart === null || cart === void 0 ? void 0 : cart.map(function (item) {
            if (item.id === id) {
                item.quantity += 1;
                addProduct = false;
            }
        });
        if (addProduct) {
            cart.push({
                id: id,
                title: title,
                price: price,
                image: image,
                quantity: 1,
                rare: rare
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart", { replace: true });
    };
    react_1.useEffect(function () {
        setRare(localStorage.getItem("rare") === id);
        searchComic();
    }, [id]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(styles_1.BreadCrumbs, null,
            react_1["default"].createElement("div", { className: "bcInner" },
                react_1["default"].createElement(react_router_dom_2.Link, { to: "/" }, "Home"))),
        react_1["default"].createElement(styles_1.ProductWrapper, null,
            react_1["default"].createElement(styles_1.ProductImage, null,
                react_1["default"].createElement("img", { src: image, alt: title })),
            react_1["default"].createElement(styles_1.ProductInfo, null,
                react_1["default"].createElement("h1", { className: rare ? "rare" : "" }, title),
                react_1["default"].createElement("div", { className: "description" },
                    react_1["default"].createElement("p", null, description)),
                react_1["default"].createElement("div", { className: "price" },
                    "$",
                    price),
                react_1["default"].createElement("button", { className: "btn btn-success btn-lg", onClick: buyProduct }, "Comprar")))));
};
exports["default"] = Product;
