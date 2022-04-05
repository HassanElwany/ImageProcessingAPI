"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var PORT = process.env.PORT || 3000;
// create an instance server
var app = (0, express_1.default)();
// add routing for / path
app.use('/api', routes_1.default);
app.get('/', function (req, res) {
    res.status(200).send('resize images application');
});
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at prot:".concat(PORT));
});
exports.default = app;
