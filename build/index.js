"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var PORT = process.env.PORT || 3000;
// create an instance server
var app = (0, express_1.default)();
// HTTP request logger middleware
app.use((0, morgan_1.default)('short'));
// add routing for / path
app.get('/', function (req, res) {
    res.json({
        message: 'Hello World 🌍'
    });
});
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at prot:".concat(PORT));
});
exports.default = app;