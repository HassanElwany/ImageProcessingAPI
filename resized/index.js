"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// build rout
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world '
    });
});
// listening to server 
app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});
exports.default = app;
