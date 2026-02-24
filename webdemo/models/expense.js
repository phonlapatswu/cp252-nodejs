class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The income amount.
   @param {number} expense - The expense amount. 
   @param {string} detail - the detail of the transaction
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }
/**
 * calculate sum total income
 * @return {number}
 */

  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }
/**
 * calculaate Total Expense
 * @returns {number} - total expense
 */

  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }
/**
 * calculate money left
 * @returns {number} - money left
 */

  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
