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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const dbConfig_1 = require("./config/dbConfig");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (_req, res) => {
    res.send('Express + TypeScript Server!!');
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield dbConfig_1.AppDataSource.initialize();
        app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        }));
    });
}
main();
//# sourceMappingURL=index.js.map