import Transaction from "../domain/entities/transaction.entiy"

const transactionValidator = (transaction: Transaction) => {
    /**
    It Validates whether the transaction object contains the required properties(type, category, amount, date).
    @param {Object} userData - User data..
    @returns {boolean} - Returns true if the user has a name and email, otherwise false.
     */

    if (transaction === null) return { valid: false, detail: "Transaction data can't be null" }

    const transactionHasAllvalues =
        transaction.hasOwnProperty('type') &&
        transaction.hasOwnProperty('category') &&
        transaction.hasOwnProperty('amount') &&
        transaction.hasOwnProperty('date')

    if (!transactionHasAllvalues === true) return { valid: false, detail: "Please check that transaction has every data" }

    if (!(transaction.type === "income" || transaction.type === "expense")) return { valid: false, detail: "Value of type isn't valid" }

    if (!(transaction.category === "Salario" ||
        transaction.category === "Comida" ||
        transaction.category === "Transporte")) return { valid: false, detail: "Value of category isn't valid" }

    if (!(typeof transaction.amount == 'number')) return { valid: false, detail: "Value of amount isn't valid" }

    if (!(typeof transaction.date == 'string')) return { valid: false, detail: "Value of date isn't valid" }

    return { valid: true, detail: "Transaction data can't be null" }

}

export default transactionValidator;


