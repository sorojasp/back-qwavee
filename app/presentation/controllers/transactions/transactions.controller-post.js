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
const transaction_model_1 = __importDefault(require("../../../infraestructure/database/models/transaction.model"));
const validator_transa_fields_utility_1 = __importDefault(require("../../../utilities/validator-transa-fields.utility"));
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * It creates a new field of the transaction in database
     *
    @param {req} param  Complementary data of the request body
    @param {res} param  Object to send the response to the client
    @returns {ResponseE} Reponse
     */
    let status = 200;
    let detail = "";
    try {
        let transaction;
        transaction = req.body;
        const transactionValid = (0, validator_transa_fields_utility_1.default)(transaction);
        detail = transactionValid.detail;
        if (transactionValid.valid === false)
            throw (Error);
        const newTransaction = yield transaction_model_1.default.create(transaction);
        res.status(200).json({
            resp: true,
            detail: 'Transaction created successfully',
            data: newTransaction
        });
        return;
    }
    catch (err) {
        console.log("err:", Error);
        res.status(status).json({
            resp: false,
            detail,
            data: null
        });
        return;
    }
});
exports.default = createTransaction;
