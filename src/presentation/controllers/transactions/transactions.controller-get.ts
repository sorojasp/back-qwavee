import { Request, Response } from "express";
import TransactionModel from "../../../infraestructure/database/models/transaction.model"
import ResponseE from "../../../domain/responses/response.entity";

const consultTransaction = async (req: Request, res: Response) => {

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

        const newTransaction = await TransactionModel.findAll()
            .catch(err => {
                status = 500,
                detail = "Internal error, please try it again"
                throw (Error);
            })

        res.status(200).json({
            resp: true,
            detail: 'Transaction created successfully',
            data: newTransaction
        });
        return;
    } catch (err: unknown) {

        res.status(status).json({
            resp: false,
            detail,
            data: null
        })
        return;
    }
}


export default consultTransaction;