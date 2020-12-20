"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantsService = void 0;
const common_1 = require("@nestjs/common");
const merchant_model_1 = require("./merchant.model");
const uuid_1 = require("uuid");
const customers_service_1 = require("../customers/customers.service");
const mockMerchants_json_1 = __importDefault(require("../../mockData/mockMerchants.json"));
let MerchantsService = class MerchantsService {
    constructor(customerService) {
        this.customerService = customerService;
        this.merchants = mockMerchants_json_1.default;
    }
    getMerchants() {
        const allMerchants = [...this.merchants];
        allMerchants.forEach((merchant) => {
            this.addTransactionsCustomerName(merchant.transactions);
        });
        return allMerchants;
    }
    getMerchant(merchantId) {
        const merchant = this.findMerchantById(merchantId);
        const currentMerchant = Object.assign({}, merchant);
        this.addTransactionsCustomerName(currentMerchant.transactions);
        return currentMerchant;
    }
    addTransaction(merchantId, customerId, description, amount) {
        const merchant = this.findMerchantById(merchantId);
        const newTransaction = new merchant_model_1.Transaction(uuid_1.v4(), amount, description, '', '', uuid_1.v4(), customerId, (new Date()).toISOString());
        merchant.transactions.push(newTransaction);
        return newTransaction;
    }
    findMerchantById(merchantId) {
        const merchant = this.merchants.find((merchant) => merchant.id === merchantId);
        if (!merchant) {
            throw new common_1.NotFoundException('Could not find the merchant.');
        }
        return merchant;
    }
    addTransactionsCustomerName(transactions) {
        transactions.forEach((transaction) => {
            transaction.customerName =
                this.customerService.getCustomerNameById(transaction.customerId);
        });
    }
};
MerchantsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], MerchantsService);
exports.MerchantsService = MerchantsService;
//# sourceMappingURL=merchant.service.js.map