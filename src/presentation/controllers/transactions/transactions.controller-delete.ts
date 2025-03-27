import { Request, Response } from "express";
import TransactionModel from "../../../infraestructure/database/models/transaction.model"


const deleteTransaction = async (req: Request, res: Response) => {

      /**
     * It delete a transaction field according to its id
     * 
    @param {req} param  Complementary data of the request body 
    @param {res} param  Object to send the response to the client
    @returns {ResponseE} Reponse 
     */

    let status = 200;
    let detail = "";


    try {


        const transactionDeleted = await TransactionModel.destroy({
            where: {
              id: req.params.id,
            },
          }).catch(err => {
            status = 500,
            detail = "Internal error, please try it again"
            throw (Error);
        })


        res.status(200).json({
            resp: true,
            detail: 'Transaction deleted successfully',
            data: transactionDeleted 
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


export default deleteTransaction;