import { Router, Response, Request } from "express";
import createTransaction from "../../controllers/transactions/transactions.controller-post";
import consultTransaction from "../../controllers/transactions/transactions.controller-get";
import deleteTransaction from "../../controllers/transactions/transactions.controller-delete";


const router = Router();


router.get("/", consultTransaction);
router.delete("/:id", deleteTransaction);
router.post("/", createTransaction);


export default router