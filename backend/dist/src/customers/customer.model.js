"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, name, merchantId) {
        this.id = id;
        this.name = name;
        this.merchantId = merchantId;
    }
    setMerchantId(merchantId) {
        this.merchantId = merchantId;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map