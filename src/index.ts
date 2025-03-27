import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import sequalize from "./infraestructure/database/config/config.datase";

//routes 
import transactionsRoutes from "./presentation/routes/transactions/transactions.routes"



dotenv.config();

// initializing db
sequalize.sync()
.then(()=>console.log("Db is ready"))
.catch(()=>console.log("*** Problem with the database"))


const app: Express = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

app.use("/transactions", transactionsRoutes)
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server, now working");
  
});







app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

