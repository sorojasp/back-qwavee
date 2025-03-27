"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactions_controller_post_1 = __importDefault(require("../../controllers/transactions/transactions.controller-post"));
const transactions_controller_get_1 = __importDefault(require("../../controllers/transactions/transactions.controller-get"));
const transactions_controller_delete_1 = __importDefault(require("../../controllers/transactions/transactions.controller-delete"));
const router = (0, express_1.Router)();
router.get("/", transactions_controller_get_1.default);
router.delete("/:id", transactions_controller_delete_1.default);
router.post("/", transactions_controller_post_1.default);
exports.default = router;
