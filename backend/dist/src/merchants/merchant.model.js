"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = exports.Transaction = void 0;
class Transaction {
    constructor(id, amount, description, ccLastFour, ccExpiry, ccToken, customerId, date) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.ccLastFour = ccLastFour;
        this.ccExpiry = ccExpiry;
        this.ccToken = ccToken;
        this.customerId = customerId;
        this.date = date;
        this.customerName = "";
    }
}
exports.Transaction = Transaction;
class Merchant {
    constructor(id, name, isTrading, currency, transactions) {
        this.id = id;
        this.name = name;
        this.isTrading = isTrading;
        this.currency = currency;
        this.transactions = transactions;
    }
}
exports.Merchant = Merchant;
//# sourceMappingURL=merchant.model.js.map