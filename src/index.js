"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const config_datase_1 = __importDefault(require("./infraestructure/database/config/config.datase"));
//routes 
const transactions_routes_1 = __importDefault(require("./presentation/routes/transactions/transactions.routes"));
dotenv_1.default.config();
// initializing db
config_datase_1.default.sync()
    .then(() => console.log("Db is ready"))
    .catch(() => console.log("*** Problem with the database"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes
app.use("/transactions", transactions_routes_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server, now working");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
