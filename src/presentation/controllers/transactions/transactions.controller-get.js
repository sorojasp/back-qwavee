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
const consultTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /**
   * It consults all the fields related with transactions
   *
  @param {req} param  Complementary data of the request body
  @param {res} param  Object to send the response to the client
  @returns {ResponseE} Reponse
   */
    let status = 200;
    let detail = "";
    try {
        const newTransaction = yield transaction_model_1.default.findAll()
            .catch(err => {
            status = 500,
                detail = "Internal error, please try it again";
            throw (Error);
        });
        res.status(200).json({
            resp: true,
            detail: 'Transaction created successfully',
            data: newTransaction
        });
        return;
    }
    catch (err) {
        res.status(status).json({
            resp: false,
            detail,
            data: null
        });
        return;
    }
});
exports.default = consultTransaction;
