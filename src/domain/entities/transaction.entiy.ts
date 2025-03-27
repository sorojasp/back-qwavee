
type Transaction = {

    id?: number, 
    type: "income" | "expense", 
    category: "Salario" | "Comida" | "Transporte"
    amount: number, 
    date: string
}

export default Transaction;