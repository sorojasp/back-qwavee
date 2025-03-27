import { Request, Response } from "express";
import Transaction from "../../../domain/entities/transaction.entiy";
import TransactionModel from "../../../infraestructure/database/models/transaction.model";
import ResponseE from "../../../domain/responses/response.entity";

import transactionValidator from '../../../utilities/validator-transa-fields.utility'

const createTransaction = async (req: Request, res: Response) => {
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

        let transaction: Transaction;
        transaction = req.body as Transaction
        const transactionValid = transactionValidator(transaction);

        detail = transactionValid.detail;
        if(transactionValid.valid === false) throw (Error);

        const newTransaction = await TransactionModel.create(transaction)

        res.status(200).json({
            resp: true,
            detail: 'Transaction created successfully',
            data: newTransaction
        });
        return;
    } catch (err: unknown) {

        console.log("err:", Error);
        res.status(status).json({
            resp: false,
            detail,
            data: null
        })

        return;
    }
}


export default createTransaction;